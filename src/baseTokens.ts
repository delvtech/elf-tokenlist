import axios from "axios";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import zip from "lodash.zip";
import {
  getTokenDecimalsMulti,
  getTokenNameMulti,
  getTokenSymbolMulti,
} from "src/erc20";
import { TokenTag } from "src/tags";
import { getCurveTokenInfo } from "./curveToken";
import { BaseTokenInfo, SimpleTokenInfo } from "./types";

export const provider = hre.ethers.provider;

export async function getBaseTokenInfos(
  chainId: number,
  baseTokenAddresses: string[]
): Promise<BaseTokenInfo[]> {
  const baseAssets = baseTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const names = await getTokenNameMulti(baseAssets);
  const symbols = await getTokenSymbolMulti(baseAssets);
  const decimals = await getTokenDecimalsMulti(baseAssets);
  const baseAssetsList = await Promise.all(
    zip(baseTokenAddresses, symbols, names, decimals).map(
      async ([address, symbol, name, decimals]): Promise<BaseTokenInfo> => {
        const isCurveToken = name?.startsWith("Curve.fi");

        const shared: SimpleTokenInfo = {
          chainId,
          address: address as string,
          symbol: symbol as string,
          decimals: decimals as number,
          name: name as string,
        };

        if (!isCurveToken || chainId !== 1)
          return { ...shared, tags: [TokenTag.BASE] };

        return await getCurveTokenInfo<TokenTag.BASE>({
          chainId,
          address: address!,
          name: name!,
          decimals: decimals!,
          symbol: symbol!,
          tag: TokenTag.BASE,
        });
      }
    )
  );

  return baseAssetsList;
}

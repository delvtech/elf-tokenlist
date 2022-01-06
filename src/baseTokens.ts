import { TokenInfo } from "@uniswap/token-lists/src";
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
): Promise<TokenInfo[]> {
  const baseAssets = baseTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const names = await getTokenNameMulti(baseAssets);
  const symbols = await getTokenSymbolMulti(baseAssets);
  const decimals = await getTokenDecimalsMulti(baseAssets);
  const baseAssetsList = await Promise.all(
    zip(baseTokenAddresses, symbols, names, decimals).map(
      async ([address, symbol, name, decimal]): Promise<BaseTokenInfo> => {
        const isCurveToken = name?.startsWith("Curve.fi");

        const shared: SimpleTokenInfo = {
          chainId,
          address: address as string,
          symbol: symbol as string,
          decimals: decimal as number,
          name: name as string,
        };

        if (!isCurveToken || chainId !== 1)
          return { ...shared, tags: [TokenTag.BASE] };

        const {
          data: {
            data: { poolData: curveV2PoolData },
          },
        } = await axios.get("https://api.curve.fi/api/getFactoryV2Pools");

        return await getCurveTokenInfo<TokenTag.BASE>(
          {
            chainId,
            address: address!,
            name: name!,
            decimal: decimal!,
            symbol: symbol!,
            tag: TokenTag.BASE,
          },
          curveV2PoolData
        );
      }
    )
  );

  return baseAssetsList;
}

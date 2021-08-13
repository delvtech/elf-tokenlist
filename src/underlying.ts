import { TokenInfo } from "@uniswap/token-lists";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import zip from "lodash.zip";

import {
  getTokenDecimalsMulti,
  getTokenNameMulti,
  getTokenSymbolMulti,
} from "src/erc20";
import { TokenTag } from "src/tags";

export const provider = hre.ethers.provider;
export async function getUnderlyingTokenInfos(
  chainId: number,
  underlyingTokenAddresses: string[]
): Promise<TokenInfo[]> {
  const baseAssets = underlyingTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const names = await getTokenNameMulti(baseAssets);
  const symbols = await getTokenSymbolMulti(baseAssets);
  const decimals = await getTokenDecimalsMulti(baseAssets);

  const baseAssetsList = zip(
    underlyingTokenAddresses,
    symbols,
    names,
    decimals
  ).map(([address, symbol, name, decimal]): TokenInfo => {
    return {
      chainId,
      address: address as string,
      symbol: symbol as string,
      decimals: decimal as number,
      name: name as string,
      tags: [TokenTag.UNDERLYING],
      // TODO: What logo do we want to show for base assets?
      // logoURI: ""
    };
  });

  return baseAssetsList;
}

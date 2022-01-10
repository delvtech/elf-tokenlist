import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import { getCurveTokenInfo } from "./curveToken";
import { TokenTag } from "./tags";
import { CurveBaseToken, RootTokenInfo, SimpleRootToken } from "./types";

export const provider = hre.ethers.provider;

const ETH_CONSTANT = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

async function constructRootTokenInfo(
  chainId: number,
  address: string
): Promise<SimpleRootToken> {
  if (address === ETH_CONSTANT) {
    return {
      chainId,
      address,
      name: "ETH",
      decimals: 18,
      symbol: "ETH",
      tags: [TokenTag.ROOT],
    };
  }

  const token = ERC20__factory.connect(address, provider);

  const [name, symbol, decimals] = await Promise.all([
    token.name(),
    token.symbol(),
    token.decimals(),
  ]);

  return {
    chainId,
    address,
    name,
    decimals,
    symbol,
    tags: [TokenTag.ROOT],
  };
}

export async function getRootTokenInfos(
  chainId: number,
  baseTokenInfos: CurveBaseToken[]
): Promise<RootTokenInfo[]> {
  if (chainId !== 1) return [];
  let rootTokenInfos: RootTokenInfo[] = [];

  // It would be preferable to do this in a reduce but typescript is messy
  // with type-inference of promise arrays in a reduce unfortunately
  for (const baseTokenInfo of baseTokenInfos) {
    for (const rootOfBaseAddress of baseTokenInfo.extensions.poolAssets) {
      // if we have already generated the root token, skip
      if (rootTokenInfos.some(({ address }) => address === rootOfBaseAddress)) {
        continue;
      }

      const rootOfBaseTokenInfo = await constructRootTokenInfo(
        chainId,
        rootOfBaseAddress
      );

      // if not a curve token, skip to next item
      if (!rootOfBaseTokenInfo.name.startsWith("Curve.fi")) {
        console.log(`Token \"${rootOfBaseTokenInfo.name}\" is not curve token`);
        rootTokenInfos = [...rootTokenInfos, rootOfBaseTokenInfo];
        continue;
      }

      console.log(`Token \"${rootOfBaseTokenInfo.name}\" is curve token`);
      const curveRootToken = await getCurveTokenInfo<TokenTag.ROOT>({
        chainId,
        address: rootOfBaseAddress,
        name: rootOfBaseTokenInfo.name,
        decimals: rootOfBaseTokenInfo.decimals,
        symbol: rootOfBaseTokenInfo.symbol,
        tag: TokenTag.ROOT,
      });

      rootTokenInfos = [...rootTokenInfos, curveRootToken];

      for (const rootOfRootAddress of curveRootToken.extensions.poolAssets) {
        if (
          rootTokenInfos.some(({ address }) => address === rootOfRootAddress)
        ) {
          continue;
        }

        rootTokenInfos = [
          ...rootTokenInfos,
          await constructRootTokenInfo(chainId, rootOfRootAddress),
        ];
      }
    }
  }

  return rootTokenInfos!;
}

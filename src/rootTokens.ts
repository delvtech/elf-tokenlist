import { TokenInfo } from "@uniswap/token-lists/src";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import { getCurveTokenInfo } from "./curveToken";
import { TokenTag } from "./tags";
import { CurveLpToken } from "./types";

export const provider = hre.ethers.provider;

const ETH_CONSTANT = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

async function constructRootTokenInfo(
  chainId: number,
  address: string
): Promise<TokenInfo> {
  if (address === ETH_CONSTANT) {
    return {
      chainId,
      address,
      name: "ETH",
      decimals: 18,
      symbol: "ETH",
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
  };
}

export async function getRootTokenInfos(
  chainId: number,
  baseTokenInfos: (TokenInfo | CurveLpToken)[]
): Promise<TokenInfo[]> {
  if (chainId !== 1) return [];
  let rootTokenInfos: TokenInfo[] = [];

  const [tokenInfos, curveTokenInfos] = baseTokenInfos.reduce(
    (acc, info) => {
      const isCurveBaseToken = info.tags?.some((tag) => tag === TokenTag.CURVE);
      return [
        [...acc[0], ...(isCurveBaseToken ? [] : [info as TokenInfo])],
        [...acc[1], ...(isCurveBaseToken ? [info as CurveLpToken] : [])],
      ];
    },
    [[], []] as [TokenInfo[], CurveLpToken[]]
  );

  // It would be preferable to do this in a reduce but typescript is messy
  // with type-inference of promise arrays in a reduce unfortunately
  for (const curveToken of curveTokenInfos) {
    for (const rootOfBaseAddress of curveToken.extensions.poolAssets) {
      // if we have already generated the token, skip
      if (tokenInfos.some(({ address }) => address === rootOfBaseAddress)) {
        continue;
      }

      // if we have already generated the token, skip
      if (rootTokenInfos.some(({ address }) => address === rootOfBaseAddress)) {
        continue;
      }

      const rootOfBaseTokenInfo = await constructRootTokenInfo(
        chainId,
        rootOfBaseAddress
      );

      // if not a curve token, skip to next poolAsset
      if (!rootOfBaseTokenInfo.name.startsWith("Curve.fi")) {
        rootTokenInfos = [...rootTokenInfos, rootOfBaseTokenInfo];
        continue;
      }

      const curveRootToken = await getCurveTokenInfo({
        chainId,
        address: rootOfBaseAddress,
        name: rootOfBaseTokenInfo.name,
        decimals: rootOfBaseTokenInfo.decimals,
        symbol: rootOfBaseTokenInfo.symbol,
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

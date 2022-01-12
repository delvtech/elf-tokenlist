import { TokenInfo } from "@uniswap/token-lists/src";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import { getTokenDecimals, getTokenName, getTokenSymbol } from "src/erc20";
import { getCurveTokenInfo } from "./curveToken";
import { TokenTag } from "./tags";
import { CurveLpTokenInfo } from "./types";

export const provider = hre.ethers.provider;

const ETH_CONSTANT = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

type ExternalTokenInfo = TokenInfo | CurveLpTokenInfo;

export async function getExternalTokenInfo(
  chainId: number,
  address: string
): Promise<ExternalTokenInfo> {
  if (address === ETH_CONSTANT) {
    return {
      chainId,
      address,
      name: "ETH",
      decimals: 18,
      symbol: "ETH",
    };
  }

  const erc20 = ERC20__factory.connect(address, provider);

  const [name, symbol, decimals] = (await Promise.all(
    [getTokenName, getTokenSymbol, getTokenDecimals].map((fn) => fn(erc20))
  )) as [string, string, number];

  const basicTokenInfo = { chainId, address, symbol, name, decimals };

  if (!name.startsWith("Curve.fi") || chainId !== 1) return basicTokenInfo;

  return await getCurveTokenInfo(basicTokenInfo);
}

function isCurveLpTokenInfo(
  tokenInfo: TokenInfo
): tokenInfo is CurveLpTokenInfo {
  return !!(tokenInfo.tags && tokenInfo.tags.includes(TokenTag.CURVE));
}

export async function getExternalTokenInfos(
  chainId: number,
  underlyingTokenAddresses: string[]
): Promise<ExternalTokenInfo[]> {
  return underlyingTokenAddresses.reduce(async (acc, address) => {
    const tokenInfo = await getExternalTokenInfo(chainId, address);

    const cache = await acc;

    if (!isCurveLpTokenInfo(tokenInfo)) {
      return [...cache, tokenInfo];
    }

    const poolAssetTokenInfos = await tokenInfo.extensions.poolAssets.reduce(
      async (_acc, poolAssetAddress) => {
        const prevPoolAssetTokenInfos = await _acc;

        if (cache.some((elem) => elem.address === poolAssetAddress)) {
          return prevPoolAssetTokenInfos;
        }

        const poolAssetTokenInfo = await getExternalTokenInfo(
          chainId,
          poolAssetAddress
        );

        if (!isCurveLpTokenInfo(poolAssetTokenInfo)) {
          return [...prevPoolAssetTokenInfos, poolAssetTokenInfo];
        }

        const lpTokenPoolAssetTokenInfos =
          await poolAssetTokenInfo.extensions.poolAssets.reduce(
            async (__acc, lpTokenPoolAssetAddress) => {
              const prevLpTokenPoolAssetTokenInfos = await _acc;

              if (
                prevLpTokenPoolAssetTokenInfos.some(
                  (elem) => elem.address === lpTokenPoolAssetAddress
                )
              ) {
                return await __acc;
              }

              const lpTokenPoolAssetTokenInfo = await getExternalTokenInfo(
                chainId,
                address
              );
              return [
                ...prevLpTokenPoolAssetTokenInfos,
                lpTokenPoolAssetTokenInfo,
              ];
            },
            Promise.resolve(<ExternalTokenInfo[]>[])
          );

        return [
          ...(await _acc),
          poolAssetTokenInfo,
          ...lpTokenPoolAssetTokenInfos,
        ];
      },
      Promise.resolve(<ExternalTokenInfo[]>[])
    );

    return [...(await acc), tokenInfo, ...poolAssetTokenInfos];
  }, Promise.resolve(<ExternalTokenInfo[]>[]));
}

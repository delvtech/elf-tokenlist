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
      name: "Ether",
      decimals: 18,
      symbol: "ETH",
    };
  }

  const erc20 = ERC20__factory.connect(address, provider);

  const [name, symbol, decimals] = (await Promise.all(
    [getTokenName, getTokenSymbol, getTokenDecimals].map((fn) => fn(erc20))
  )) as [string, string, number];

  const basicTokenInfo = { chainId, address, symbol, name, decimals };

  /* In the case we are building the token list for a non-mainnet network we
   * should default to returning the simple tokens already specified. The reason
   * for this is that the Curve.fi ecosystem of contracts is not refletive of
   * the one on mainnet and in their place we stub with mocked versions. In the
   * future we could support it on other networks if we wish to build a stubbed
   * LP system of tokens */
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

    /**
     * We can use the accumulator in the reduce function as a lookup cache for
     * tokenInfos that have been constructed previously. This makes it easy to
     * prevent duplication and unneccessary async calls */
    const externalTokenInfoCache = await acc;

    /** Where an underlying token is just an ordinary token, e.g, DAI, WBTC or
     * USDC, we can just simply assign that tokenInfo to the list of external
     * tokenInfos*/
    if (!isCurveLpTokenInfo(tokenInfo)) {
      return [...externalTokenInfoCache, tokenInfo];
    }

    /** Utility function to avoid duplication of code */
    const isAddressNotInCache = (address: string) =>
      !externalTokenInfoCache.some((elem) => elem.address === address);

    const curvePoolTokenInfos = (
      await Promise.all(
        /** Iterate across poolAssets in current tokenInfo, filtering any
         * addresses which already exist in the externalTokenInfoCache
         * */
        tokenInfo.extensions.poolAssets
          .filter(isAddressNotInCache)
          .map(async (poolAssetAddress) => {
            /** Get ExternalTokenInfo for the poolAssetAddress */
            const poolAssetTokenInfo = await getExternalTokenInfo(
              chainId,
              poolAssetAddress
            );

            /** If just a normal TokenInfo, return with that, otherwise is a
             * CurveLpTokenInfo with more poolAssets*/
            if (!isCurveLpTokenInfo(poolAssetTokenInfo)) {
              return poolAssetTokenInfo;
            }

            /** Iterate across all poolAssets in this "poolAsset" which will be
             * as far neccessary to go. We don't have to account for having
             * another CurveLpTokenInfo asset being created as in all cases as
             * of writing, they will all just be TokenInfo*/
            const tokenInfoPoolAssetsFromCurveLpPoolAsset = await Promise.all(
              poolAssetTokenInfo.extensions.poolAssets
                .filter(isAddressNotInCache)
                .map((address) => getExternalTokenInfo(chainId, address))
            );

            return [
              /* The pool asset which is also an LP token, e.g 3CRV */
              poolAssetTokenInfo,
              /* The underlying pool assets for this poolAsset, e.g for 3CRV -
               * DAI, USDC & USDT */
              ...tokenInfoPoolAssetsFromCurveLpPoolAsset,
            ];
          })
      )
    )
      /**
       * The return value from inside the Promise.all is
       * (ExternalTokenInfo | ExternalTokenInfo[])[] which is flattened here to
       * ExternalTokenInfo[]
       * */
      .flat();

    return [
      /** previous ExternalTokenInfos */
      ...externalTokenInfoCache,
      /**  CurveLpTokenInfo for address */
      tokenInfo,
      /** ExternalTokenInfos constructed from tokenInfo */
      ...curvePoolTokenInfos,
    ];
  }, Promise.resolve(<ExternalTokenInfo[]>[]));
}

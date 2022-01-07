import hre from "hardhat";
import {
  CurveBaseToken,
  CurveLpToken,
  RootTokenInfo,
  SimpleRootToken,
  SimpleTokenInfo,
} from "./types";

import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import axios from "axios";
import { TokenTag } from "./tags";
import { getCurveTokenInfo } from "./curveToken";

export const provider = hre.ethers.provider;
export async function getRootTokenInfos(
  chainId: 1,
  baseTokenInfos: CurveBaseToken[]
): Promise<RootTokenInfo[]> {
  const {
    data: {
      data: { poolData: curveV2PoolData },
    },
  } = await axios.get("https://api.curve.fi/api/getFactoryV2Pools");

  return await Promise.all([
    ...ggbaseTokenInfos.reduce(async (acc, baseTokenInfo) => {
      const previousRootTokenInfos = await acc;

      const rootAddresses = baseTokenInfo.extensions.poolAssets;

      const currentRootTokenInfos = rootAddresses
        .filter((address) =>
          previousRootTokenInfos.some(
            ({ address: _address }) => _address === address
          )
        )
        .reduce(async (_acc, address) => {
          const tkn = ERC20__factory.connect(address, provider);
          const [name, symbol, decimals] = await Promise.all([
            tkn.name(),
            tkn.symbol(),
            tkn.decimals(),
          ]);

          const simpleRootTokenInfo: SimpleRootToken = {
            chainId,
            address,
            name,
            decimals,
            symbol,
            tags: [TokenTag.ROOT],
          };

          if (name.startsWith("Curve.fi"))
            return [...(await _acc), simpleRootTokenInfo];

          let curveLpToken = previousRootTokenInfos.find(
            ({ address: _address }) => _address === _address
          );
          if (!curveLpToken) {
            curveLpToken = await getCurveTokenInfo<TokenTag.ROOT>(
              {
                chainId,
                address,
                name,
                decimals,
                symbol,
                tag: TokenTag.ROOT,
              },
              curveV2PoolData
            );
          }

          curveLpToken = curveLpToken as CurveLpToken<TokenTag.ROOT>;

          const curveLpTokenRoots = curveLpToken.extensions.poolAssets;

          const lpRootTokenInfos = (curveLpTokenRoots as string[]).reduce(
            async (__acc, address) => {
              const tkn = ERC20__factory.connect(address, provider);
              const [name, symbol, decimals] = await Promise.all([
                tkn.name(),
                tkn.symbol(),
                tkn.decimals(),
              ]);
              const simpleRootTokenInfo: SimpleRootToken = {
                chainId,
                address,
                name,
                decimals,
                symbol,
                tags: [TokenTag.ROOT],
              };

              return [...(await __acc), simpleRootTokenInfo];
            },
            Promise.resolve(<SimpleRootToken[]>[])
          );

          return [...(await _acc), curveLpToken, ...(await lpRootTokenInfos)];
        }, Promise.resolve(<RootTokenInfo[]>[]));

      return [...previousRootTokenInfos, ...(await currentRootTokenInfos)];
    }, <Promise<RootTokenInfo>[]>[]),
  ]);
}

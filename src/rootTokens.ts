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

const ETH_CONSTANT = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

async function constructRootTokenInfo(
  address: string
): Promise<SimpleRootToken> {
  if (address === ETH_CONSTANT) {
    return {
      chainId: 1,
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
    chainId: 1,
    address,
    name,
    decimals,
    symbol,
    tags: [TokenTag.ROOT],
  };
}

export async function getRootTokenInfos(
  chainId: 1,
  baseTokenInfos: CurveBaseToken[]
): Promise<RootTokenInfo[]> {
  const {
    data: {
      data: { poolData: curveV2PoolData },
    },
  } = await axios.get("https://api.curve.fi/api/getFactoryV2Pools");

  let rootTokenInfos: RootTokenInfo[] = [];
  for (const baseTokenInfo of baseTokenInfos) {
    for (const rootOfBaseAddress of baseTokenInfo.extensions.poolAssets) {
      // if we have already generated the root token, skip
      if (rootTokenInfos.some(({ address }) => address === rootOfBaseAddress)) {
        continue;
      }

      const rootOfBaseTokenInfo = await constructRootTokenInfo(
        rootOfBaseAddress
      );

      // if not a curve token, skip to next item
      if (!rootOfBaseTokenInfo.name.startsWith("Curve.fi")) {
        rootTokenInfos = [...rootTokenInfos, rootOfBaseTokenInfo];
        continue;
      }

      const curveRootToken = await getCurveTokenInfo<TokenTag.ROOT>(
        {
          chainId,
          address: rootOfBaseAddress,
          name: rootOfBaseTokenInfo.name,
          decimals: rootOfBaseTokenInfo.decimals,
          symbol: rootOfBaseTokenInfo.symbol,
          tag: TokenTag.ROOT,
        },
        curveV2PoolData
      );

      rootTokenInfos = [...rootTokenInfos, curveRootToken];

      for (const rootOfRootAddress of curveRootToken.extensions.poolAssets) {
        if (
          rootTokenInfos.some(({ address }) => address === rootOfRootAddress)
        ) {
          continue;
        }

        rootTokenInfos = [
          ...rootTokenInfos,
          await constructRootTokenInfo(rootOfRootAddress),
        ];
      }
    }
  }

  return rootTokenInfos!;
}

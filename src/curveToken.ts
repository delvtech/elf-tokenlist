import axios from "axios";
import hre from "hardhat";
import { TokenTag } from "src/tags";
import { CurveLpToken } from "./types";
import { ethers } from "ethers";

export const provider = hre.ethers.provider;
const etherscanProvider = new ethers.providers.EtherscanProvider(
  1,
  process.env.ETHERSCAN_API_KEY
);

async function getGauges(): Promise<
  { [k in string]: { swap_token: string; swap: string } } | undefined
> {
  const {
    data: {
      success,
      data: { gauges },
    },
  } = await axios.get("https://api.curve.fi/api/getGauges");

  if (!success) {
    return;
  }

  return gauges;
}

async function getFactoryV2Pools(): Promise<{ address: string }[] | undefined> {
  const {
    data: {
      success,
      data: { poolData },
    },
  } = await axios.get("https://api.curve.fi/api/getFactoryV2Pools");

  if (!success) {
    return;
  }

  return poolData;
}

async function getCurvePoolFromTokenAddress(address: string): Promise<string> {
  // first try gauge data
  const gaugeData = await getGauges();
  if (gaugeData) {
    const gaugeTokenInfo = Object.values(gaugeData).find(
      ({ swap_token }) => swap_token === address
    );

    if (gaugeTokenInfo) {
      return gaugeTokenInfo.swap;
    }
  }

  // then factoryV2 pool data for metapools
  const factoryV2PoolsData = await getFactoryV2Pools();
  if (factoryV2PoolsData) {
    const factoryV2PoolInfo = factoryV2PoolsData.find(
      ({ address: _address }: { address: string }) => _address === address
    );

    if (factoryV2PoolInfo) return address;
  }

  const curveTokenAbi = await etherscanProvider.fetch("contract", {
    action: "getabi",
    address: address,
    post: false,
  });

  const curveLpToken = new ethers.Contract(address, curveTokenAbi, provider);

  if (
    Object.keys(curveLpToken.functions).some((functionName) =>
      functionName.startsWith("minter")
    )
  ) {
    // if the token has a minter function, that is the original pool address
    return await curveLpToken.minter();
  }

  throw new Error("curve pool address could not be found");
}

export async function getCurveTokenInfo<
  A extends TokenTag.BASE | TokenTag.ROOT
>({
  chainId,
  address,
  name,
  symbol,
  decimals,
  tag,
}: {
  chainId: 1;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  tag: A;
}): Promise<CurveLpToken<A>> {
  const pool = await getCurvePoolFromTokenAddress(address);

  const curvePoolAbi = await etherscanProvider.fetch("contract", {
    action: "getabi",
    address: pool,
    post: false,
  });

  const curvePoolContract = new ethers.Contract(pool, curvePoolAbi, provider);

  const addLiquidityFuncSig = Object.keys(curvePoolContract.functions).find(
    (k) => k.startsWith("add_liquidity")
  ) as string;
  const removeLiquidityFuncSig = Object.keys(curvePoolContract.functions).find(
    (k) => k.startsWith("remove_liquidity_one_coin")
  ) as string;

  const numCoins = parseInt(
    addLiquidityFuncSig.substring(
      addLiquidityFuncSig.indexOf("[") + 1,
      addLiquidityFuncSig.indexOf("]")
    )
  );

  const curvePool = new ethers.Contract(
    pool,
    ["function coins(uint256) view returns (address)"],
    provider
  );

  const coins = (await Promise.all(
    [...Array(numCoins)].map((_, idx) => curvePool.coins(idx))
  )) as [string, string] | [string, string, string];

  return {
    chainId,
    address,
    name,
    decimals,
    symbol,
    tags: [TokenTag.CURVE, tag],
    extensions: {
      pool: pool!,
      poolAssets: coins,
      addLiquidityFuncSig: addLiquidityFuncSig,
      removeLiquidityFuncSig: removeLiquidityFuncSig,
    },
  };
}

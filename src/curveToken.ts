import hre from "hardhat";
import { TokenTag } from "src/tags";
import { CurveLpToken } from "./types";
import { ethers } from "ethers";
import fetch from "node-fetch";
import { TokenInfo } from "@uniswap/token-lists/src";

export const provider = hre.ethers.provider;
const etherscanProvider = new ethers.providers.EtherscanProvider(
  1,
  process.env.ETHERSCAN_API_KEY
);

async function getGauges(): Promise<
  { [k in string]: { swap_token: string; swap: string } } | undefined
> {
  const data = await fetch("https://api.curve.fi/api/getGauges");

  if (!data.ok) {
    return;
  }

  const {
    success,
    data: { gauges },
  } = await data.json();
  if (!success) {
    return;
  }

  return gauges;
}

async function getFactoryV2Pools(): Promise<{ address: string }[] | undefined> {
  const data = await fetch("https://api.curve.fi/api/getFactoryV2Pools");
  if (!data.ok) {
    return;
  }

  const {
    success,
    data: { poolData },
  } = await data.json();
  if (!success) {
    return;
  }

  return poolData;
}

/*
 * This function is used to find a correspondance between a curve lp token and
 * the pool address it corresponds to. Unfortunately with the curve ecosystem,
 * there is little consistency in defining how pools and tokens are related so
 * a hackish type solution is required. It is somewhat expected that this may
 * break in the future but as of writing it is the only solution.
 *
 * The rationale for finding this correspondance is that we are required to find
 * the function signature for the add_liquidity and the
 * remove_liquidity_one_coin functions on the pool address contract. Once we
 * know the pool address for the given lp token address we can lookup the abi
 * using etherscan which will have the correct signature
 *
 * The logic here is to use three different solutions to find the
 * correspondance.
 *
 * 1. getGauges api endpoint
 *
 * The gauge system (see https://dao.curve.fi/gaugeweight) in curve is how curve
 * token inflation rewards are distributed to LP'ers in various pools. We don't
 * care exactly about this only that there is an endpoint which lists the pool
 * information. The returned info contains two items, `swap_token` and `swap`.
 * The `swap_token` is the lp token for that pool and the `swap` key corresponds
 * to the pool address. Knowing the lp token address, we can simply iterate
 * across the list of pool information and match it against the `swap_token`
 * value.
 *
 * 2. getFactoryV2Pools api endpoint
 *
 * The getFactoryV2Pools is a list of "metapools" which utilise most often a
 * pairing of some illiquid stablecoin with highly liquid stablecoins like
 * DAI/USDT/USDC through the 3CRV token. In these instances, it appears to be
 * the case that a metapool lp token address is also the pool address so once
 * we validate that the address is in the list of metapool addresses we can
 * assume it is also the pool address
 *
 * 3. minter() contract function
 *
 * In most instances, the contract at the LP token address will have a "minter"
 * contract function which will return the pool address. Using etherscan, we can
 * fetch the abi and do a lookup if that function exists or not and if so use it
 * to get the pool
 *
 * If all three solutions listed here fail to find the correspondance, it will
 * throw an error and a new solution will have to be found in that case
 */
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

  throw new Error(`curve pool address: ${address} could not be found`);
}

export async function getCurveTokenInfo({
  chainId,
  address,
  name,
  symbol,
  decimals,
}: TokenInfo): Promise<CurveLpToken> {
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

  /*
   * We need this so that we can build our "poolAssets" definition which can be
   * found in our curveLpToken type. We don't know ahead of time whether a given
   * curve pool address has 2 or 3 tokens being traded on it and so we must
   * validate this. Once knowing the number of coins in a given pool we can
   * fetch those addresses and build the poolAssets array with the correct token
   * addresses at the correct index
   */
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
    tags: [TokenTag.CURVE],
    extensions: {
      pool: pool!,
      poolAssets: coins,
      addLiquidityFuncSig: addLiquidityFuncSig,
      removeLiquidityFuncSig: removeLiquidityFuncSig,
    },
  };
}

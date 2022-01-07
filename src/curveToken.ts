import { Contract, ethers } from "ethers";
import hre from "hardhat";
import { TokenTag } from "src/tags";
import { CurveLpToken } from "./types";

export const provider = hre.ethers.provider;

export async function getCurveTokenInfo<
  A extends TokenTag.BASE | TokenTag.ROOT
>(
  {
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
  },
  curveV2PoolData: { address: string }[]
): Promise<CurveLpToken<A>> {
  const etherscanProvider = new ethers.providers.EtherscanProvider(
    chainId,
    process.env.ETHERSCAN_API_KEY
  );

  const isMetaPool = curveV2PoolData.some(
    ({ address: _address }: { address: string }) => _address === address
  );

  let pool = address;
  if (!isMetaPool) {
    const curveLpToken = new Contract(
      address!,
      ["function minter() view returns (address)"],
      provider
    );
    pool = await curveLpToken.minter();
  }

  const curvePoolAbi = await etherscanProvider.fetch("contract", {
    action: "getabi",
    address: pool,
    post: false,
  });

  const curvePoolContract = new Contract(pool!, curvePoolAbi, provider);

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

  const curvePool = new Contract(
    pool!,
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

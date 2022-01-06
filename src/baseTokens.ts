import { TokenInfo } from "@uniswap/token-lists/src";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import { ethers } from "ethers";
import hre from "hardhat";
import zip from "lodash.zip";
import axios from "axios";

import {
  getTokenDecimalsMulti,
  getTokenNameMulti,
  getTokenSymbolMulti,
} from "src/erc20";
import { TokenTag } from "src/tags";
import { BaseTokenInfo } from "./types";

export const provider = hre.ethers.provider;

export async function getBaseTokenInfos(
  chainId: number,
  baseTokenAddresses: string[],
  etherscanProvider: ethers.providers.EtherscanProvider
): Promise<TokenInfo[]> {
  const baseAssets = baseTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const names = await getTokenNameMulti(baseAssets);
  const symbols = await getTokenSymbolMulti(baseAssets);
  const decimals = await getTokenDecimalsMulti(baseAssets);
  const {
    data: {
      data: { poolData },
    },
  } = await axios.get("https://api.curve.fi/api/getFactoryV2Pools");

  //console.log(poolData);

  const baseAssetsList = await Promise.all(
    zip(baseTokenAddresses, symbols, names, decimals).map(
      async ([address, symbol, name, decimal]): Promise<BaseTokenInfo> => {
        const isCurveToken = name?.startsWith("Curve.fi");

        const shared: Pick<
          TokenInfo,
          "chainId" | "address" | "symbol" | "name" | "decimals"
        > = {
          chainId,
          address: address as string,
          symbol: symbol as string,
          decimals: decimal as number,
          name: name as string,
        };
        const tokenPoolData = poolData.find(
          ({
            address: _address,
            implementationAddress,
          }: {
            address: string;
            implementationAddress: string;
          }) => _address === address || implementationAddress === address
        );
        console.log(name, tokenPoolData);
        if (!isCurveToken) return { ...shared, tags: [TokenTag.BASE] };

        // const curveTokenAbi = await etherscanProvider.fetch("contract", {
        //   action: "getabi",
        //   address,
        //   post: false,
        // });

        // const curveLpToken = new hre.ethers.Contract(address!, curveTokenAbi);

        // const hasAddLiquiditySig = Object.keys(curveLpToken.functions).some(
        //   (k) => k.startsWith("add_liquidity")
        // );
        // let pool = address;
        // let curvePoolAbi = curveTokenAbi;
        // if (!hasAddLiquiditySig) {
        //   console.log(name, curveLpToken);
        //   pool = await curveLpToken.minter();

        //   curvePoolAbi = await etherscanProvider.fetch("contract", {
        //     action: "getabi",
        //     pool,
        //     post: false,
        //   });
        // }

        // const curvePool = new hre.ethers.Contract(pool!, curvePoolAbi);
        // const addLiquidityFuncSig = Object.keys(curvePool.functions).find((k) =>
        //   k.startsWith("add_liquidity")
        // ) as string;
        // const removeLiquidityFuncSig = Object.keys(curvePool.functions).find(
        //   (k) => k.startsWith("remove_liquidity")
        // ) as string;

        // console.log(name, addLiquidityFuncSig);
        //const coins = await curveContract.coins();
        //console.log(coins);
        return {
          ...shared,
          tags: [TokenTag.CURVE, TokenTag.BASE],
          extensions: {
            pool: "",
            poolAssets: ["", ""],
            addLiquidityFuncSig: "",
            removeLiquidityFuncSig: "",
          },
        };
      }
    )
  );

  return baseAssetsList;
}

// const buildCurvePoolContract = ({
//   address,
//   numRoots = 2,
//   targetType = `uint256`,
// }: {
//   address: string;
//   numRoots?: number;
//   targetType?: "uint256" | "int128";
// }) => {
//   return new ethers.Contract(
//     address,
//     [
//       numRoots === 2
//         ? "function calc_token_amount(uint256[2],bool) view returns (uint256)"
//         : "function calc_token_amount(uint256[3],bool) view returns (uint256)",
//       `function calc_withdraw_one_coin(uint256,${targetType}) view returns (uint256)`,
//     ],
//     provider
//   );
// };

// new ethers.Contract(
//   address,
//   [
//     numRoots === 2
//       ? "function calc_token_amount(uint256[2],bool) view returns (uint256)"
//       : "function calc_token_amount(uint256[3],bool) view returns (uint256)",
//     `function calc_withdraw_one_coin(uint256,${targetType}) view returns (uint256)`,
//   ],
//   provider
// );

import { TokenInfo } from "@uniswap/token-lists/src";
import { ERC20__factory } from "elf-contracts-typechain/dist/types/factories/ERC20__factory";
import hre from "hardhat";
import zip from "lodash.zip";
import {
  getTokenDecimalsMulti,
  getTokenNameMulti,
  getTokenSymbolMulti,
} from "src/erc20";
import { getCurveTokenInfo } from "./curveToken";
import { CurveLpToken } from "./types";

export const provider = hre.ethers.provider;

/*
 * This function returns a list of BaseTokenInfos which for our purposes are
 * tokens which are the inputs to the element protocol. The system in essence
 * abstracts these yield bearing systems to create the fixed and variable rate
 * primitives. In order for the user to use the Element.fi system, they must
 * provide these tokens. These base tokens come in different "flavours" and so
 * we provide extra functionality on the basis of how they are constructed.
 *
 * 1. SimpleTokenInfo
 *
 * These are plain tokens which are standard ERC20 tokens like DAI and USDC
 *
 * 2. CurveTokenInfo
 *
 * These are LP tokens from the Curve Finance protocol. They have extra
 * information such as the poolAssets which are used to build the root tokens
 * we use in the system
 *
 * 3. CompoundTokenInfo
 *
 * TBD
 */
export async function getBaseTokenInfos(
  chainId: number,
  baseTokenAddresses: string[]
): Promise<(TokenInfo | CurveLpToken)[]> {
  const baseAssets = baseTokenAddresses.map((address) =>
    ERC20__factory.connect(address, provider)
  );

  const names = await getTokenNameMulti(baseAssets);
  const symbols = await getTokenSymbolMulti(baseAssets);
  const decimals = await getTokenDecimalsMulti(baseAssets);
  const baseAssetsList = await Promise.all(
    zip(baseTokenAddresses, symbols, names, decimals).map(
      async ([address, symbol, name, decimals]): Promise<
        TokenInfo | CurveLpToken
      > => {
        const isCurveToken = name?.startsWith("Curve.fi");

        const tokenInfo: TokenInfo = {
          chainId,
          address: address as string,
          symbol: symbol as string,
          decimals: decimals as number,
          name: name as string,
        };

        if (!isCurveToken || chainId !== 1) return tokenInfo;

        return await getCurveTokenInfo(tokenInfo);
      }
    )
  );

  return baseAssetsList;
}

import { TokenInfo, TokenList } from "@uniswap/token-lists/src";

// exporting so we can ensure correct reference of uniswap tokenlist is used
export { TokenInfo, TokenList } from "@uniswap/token-lists/src";

export enum TokenTag {
  VAULT = "vault",
  ASSET_PROXY = "assetproxy",
  CCPOOL = "ccpool",
  PRINCIPAL = "eP",
  WPOOL = "wpool",
  YIELD = "eY",
  CURVE = "curve",
}

export declare const mainnetTokenList: TokenList;
export declare const goerliTokenList: TokenList;

export interface TagInfo {
  name: string;
  description: string;
}

export interface CurveLpTokenInfo extends TokenInfo {
  extensions: {
    /** The address of the pool the curve LP token corresponds to, may sometimes
     * be the address of the token itself  */
    pool: string;

    /**
     * The tokens in the pool. Pool assets are assigned an index which can be
     * used to reference them in the curve contracts.
     */
    poolAssets: string[];

    /** Function signature corresponding to the add liquidity function
     * on the pool contract*/
    addLiquidityFuncSig: string;

    /** Function signature corresponding to the remove liquidity function
     * on the pool contract*/
    removeLiquidityFuncSig: string;
  };
}

export interface PrincipalTokenInfo extends TokenInfo {
  extensions: {
    /**
     * The underlying base asset for the principal token
     */
    underlying: string;

    /**
     * The interest token for the principal token
     */
    interestToken: string;

    /**
     * Number of seconds after epoch when the principal token was created
     */
    createdAtTimestamp: number;
    /**
     * Number of seconds after epoch when the principal token can be redeemed
     */
    unlockTimestamp: number;

    /**
     * The wrapped position, eg: an Element yearn vault asset proxy
     */
    position: string;
  };
}

export interface AssetProxyTokenInfo extends TokenInfo {
  extensions: {
    /**
     * The vault address
     */
    vault: string;
  };
}
export interface VaultTokenInfo extends TokenInfo {}

export interface YieldTokenInfo extends TokenInfo {
  extensions: {
    /**
     * The underlying base asset for the yield token
     */
    underlying: string;

    /**
     * The Principal Token's address
     */
    tranche: string;

    /**
     * Number of seconds after epoch when the yield token can be redeemed
     */
    unlockTimestamp: number;
  };
}

export interface PrincipalPoolTokenInfo extends TokenInfo {
  extensions: {
    /**
     * The principal token address
     */
    bond: string;

    /**
     * The underlying base asset for the principal token.  NOTE: This will be a
     * weth address when dealing with eth tranches.
     */
    underlying: string;

    /**
     * balancer poolId
     */
    poolId: string;

    /**
     * Number of seconds after epoch when the pool was created
     */
    createdAtTimestamp: number;

    /**
     * Number of seconds after epoch when the pool assets will converge in
     * price.
     */
    expiration: number;

    /**
     * The number of seconds in the pools timescale.
     */
    unitSeconds: number;
  };
}

export interface YieldPoolTokenInfo extends TokenInfo {
  extensions: {
    /**
     * The yield token address
     */
    interestToken: string;

    /**
     * The underlying base asset for the yield token.  NOTE: This will be a
     * weth address when dealing with eth yield tokens.
     */
    underlying: string;

    /**
     * The underlying base asset for the yield token
     */
    poolId: string;

    /**
     * Number of seconds after epoch when the pool was created
     */
    createdAtTimestamp: number;

    /**
     * Number of seconds after epoch when the yield tokens in the pool will mature
     */
    expiration: number;
  };
}

export type AnyTokenListInfo =
  | TokenInfo
  | PrincipalTokenInfo
  | YieldTokenInfo
  | PrincipalPoolTokenInfo
  | YieldPoolTokenInfo;

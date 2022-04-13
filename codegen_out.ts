import { TokenInfo } from "@uniswap/token-lists/src";

export enum Element_Tags {
  /**
   * Curve LP token
   * Token that represents a liquidity provider position in a Curve.fi pool
   */
  curve = "curve",

  /**
   * Principal token
   * Token that represents a deposit of principal into a yield position
   */
  eP = "eP",

  /**
   * Yield token
   * Token that represents the yield on a deposit into a yield position
   */
  eY = "eY",

  /**
   * ConvergentCurve pool
   * Token that represents the balancer pool for Principal tokens
   */
  ccpool = "ccpool",

  /**
   * Weighted pool
   * Token that represents the balancer pool for Yield tokens
   */
  wpool = "wpool",

  /**
   * Vault asset proxy
   * Token that wraps a yield position, ie: Yearn vault asset proxy
   */
  assetproxy = "assetproxy",

  /**
   * Vault
   * The yield position, ie: Yearn yvcrvLUSD
   */
  vault = "vault",
}

export interface TokenInfo_WETH_0xC02a extends TokenInfo {
  chainId: 1;
  address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  symbol: "WETH";
  name: "Wrapped Ether";
  decimals: 18;
}

export interface TokenInfo_WBTC_0x2260 extends TokenInfo {
  chainId: 1;
  address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
  symbol: "WBTC";
  name: "Wrapped BTC";
  decimals: 8;
}

export interface TokenInfo_USDC_0xA0b8 extends TokenInfo {
  chainId: 1;
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  symbol: "USDC";
  name: "USD Coin";
  decimals: 6;
}

export interface TokenInfo_DAI_0x6B17 extends TokenInfo {
  chainId: 1;
  address: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  symbol: "DAI";
  name: "Dai Stablecoin";
  decimals: 18;
}

export interface TokenInfo_LUSD_0x5f98 extends TokenInfo {
  chainId: 1;
  address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0";
  symbol: "LUSD";
  name: "LUSD Stablecoin";
  decimals: 18;
}

export interface TokenInfo_3Crv_0x6c3F extends TokenInfo {
  chainId: 1;
  address: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490";
  name: "Curve.fi DAI/USDC/USDT";
  decimals: 18;
  symbol: "3Crv";
  tags: ["curve"];
  extensions: {
    pool: "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7";
    poolAssets: [
      "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_USDT_0xdAC1 extends TokenInfo {
  chainId: 1;
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  symbol: "USDT";
  name: "Tether USD";
  decimals: 6;
}

export interface TokenInfo_alUSD_0xBC6D extends TokenInfo {
  chainId: 1;
  address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9";
  symbol: "alUSD";
  name: "Alchemix USD";
  decimals: 18;
}

export interface TokenInfo_MIM_0x99D8 extends TokenInfo {
  chainId: 1;
  address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3";
  symbol: "MIM";
  name: "Magic Internet Money";
  decimals: 18;
}

export interface TokenInfo_ETH_0xEeee extends TokenInfo {
  chainId: 1;
  address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
  name: "Ether";
  decimals: 18;
  symbol: "ETH";
}

export interface TokenInfo_stETH_0xae7a extends TokenInfo {
  chainId: 1;
  address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
  symbol: "stETH";
  name: "Liquid staked Ether 2.0";
  decimals: 18;
}

export interface TokenInfo_EURS_0xdB25 extends TokenInfo {
  chainId: 1;
  address: "0xdB25f211AB05b1c97D595516F45794528a807ad8";
  symbol: "EURS";
  name: "STASIS EURS Token";
  decimals: 2;
}

export interface TokenInfo_sEUR_0xD71e extends TokenInfo {
  chainId: 1;
  address: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620";
  symbol: "sEUR";
  name: "Synth sEUR";
  decimals: 18;
}

export interface TokenInfo_LUSD3CRVf_0xEd27 extends TokenInfo {
  chainId: 1;
  address: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
  name: "Curve.fi Factory USD Metapool: Liquity";
  decimals: 18;
  symbol: "LUSD3CRV-f";
  tags: ["curve"];
  extensions: {
    pool: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    poolAssets: [
      "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
      "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_alUSD3CRVf_0x43b4 extends TokenInfo {
  chainId: 1;
  address: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
  name: "Curve.fi Factory USD Metapool: Alchemix USD";
  decimals: 18;
  symbol: "alUSD3CRV-f";
  tags: ["curve"];
  extensions: {
    pool: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    poolAssets: [
      "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
      "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_MIM3LP3CRVf_0x5a6A extends TokenInfo {
  chainId: 1;
  address: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
  name: "Curve.fi Factory USD Metapool: Magic Internet Money 3Pool";
  decimals: 18;
  symbol: "MIM-3LP3CRV-f";
  tags: ["curve"];
  extensions: {
    pool: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    poolAssets: [
      "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
      "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_crv3crypto_0xc4AD extends TokenInfo {
  chainId: 1;
  address: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
  name: "Curve.fi USD-BTC-ETH";
  decimals: 18;
  symbol: "crv3crypto";
  tags: ["curve"];
  extensions: {
    pool: "0x3993d34e7e99Abf6B6f367309975d1360222D446";
    poolAssets: [
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
    ];
    curveRemoveLiqFnIsUint256: true;
  };
}

export interface TokenInfo_crvTricrypto_0xcA3d extends TokenInfo {
  chainId: 1;
  address: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
  name: "Curve.fi USD-BTC-ETH";
  decimals: 18;
  symbol: "crvTricrypto";
  tags: ["curve"];
  extensions: {
    pool: "0x331aF2E331bd619DefAa5DAc6c038f53FCF9F785";
    poolAssets: [
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
    ];
    curveRemoveLiqFnIsUint256: true;
  };
}

export interface TokenInfo_steCRV_0x0632 extends TokenInfo {
  chainId: 1;
  address: "0x06325440D014e39736583c165C2963BA99fAf14E";
  name: "Curve.fi ETH/stETH";
  decimals: 18;
  symbol: "steCRV";
  tags: ["curve"];
  extensions: {
    pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022";
    poolAssets: [
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_eursCRV_0x194e extends TokenInfo {
  chainId: 1;
  address: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
  name: "Curve.fi EURS/sEUR";
  decimals: 18;
  symbol: "eursCRV";
  tags: ["curve"];
  extensions: {
    pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA";
    poolAssets: [
      "0xdB25f211AB05b1c97D595516F45794528a807ad8",
      "0xD71eCFF9342A5Ced620049e616c5035F1dB98620"
    ];
    curveRemoveLiqFnIsUint256: false;
  };
}

export interface TokenInfo_yvCurveLUSD_0x53b1 extends TokenInfo {
  chainId: 1;
  address: "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6";
  symbol: "yvCurveLUSD";
  decimals: 18;
  name: "Element Wrapped Yearn Curve LUSD";
  tags: ["assetproxy"];
  extensions: {
    vault: "0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6";
  };
}

export interface TokenInfo_yvCrvTriCrypto_0x9727 extends TokenInfo {
  chainId: 1;
  address: "0x97278Ce17D4860f8f49afC6E4c1C5AcBf2584cE5";
  symbol: "yvCrvTriCrypto";
  decimals: 18;
  name: "Element Wrapped Yearn Curve TriCrypto";
  tags: ["assetproxy"];
  extensions: {
    vault: "0x3D980E50508CFd41a13837A60149927a11c03731";
  };
}

export interface TokenInfo_yvcrvSTETH_0xB329 extends TokenInfo {
  chainId: 1;
  address: "0xB3295e739380BD68de96802F7c4Dba4e54477206";
  symbol: "yvcrvSTETH";
  decimals: 18;
  name: "element yvcrvSTETH";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325";
  };
}

export interface TokenInfo_yvDAI_0x21Bb extends TokenInfo {
  chainId: 1;
  address: "0x21BbC083362022aB8D7e42C18c47D484cc95C193";
  symbol: "yvDAI";
  decimals: 18;
  name: "element yvDAI";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95";
  };
}

export interface TokenInfo_yvUSDC_0xdEa0 extends TokenInfo {
  chainId: 1;
  address: "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0";
  symbol: "yvUSDC";
  decimals: 6;
  name: "element yvUSDC";
  tags: ["assetproxy"];
  extensions: {
    vault: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9";
  };
}

export interface TokenInfo_yvcrv3crypto_0x4F42 extends TokenInfo {
  chainId: 1;
  address: "0x4F424B26c7c659F198797Bd87282BF602F543521";
  symbol: "yvcrv3crypto";
  decimals: 18;
  name: "element yvcrv3crypto";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xE537B5cc158EB71037D4125BDD7538421981E6AA";
  };
}

export interface TokenInfo_yvWBTC_0x8D94 extends TokenInfo {
  chainId: 1;
  address: "0x8D9487b81e0fEdcd2D8Cab91885756742375CDC5";
  symbol: "yvWBTC";
  decimals: 8;
  name: "element yvWBTC";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E";
  };
}

export interface TokenInfo_yvCurvealUSD_0x3b5D extends TokenInfo {
  chainId: 1;
  address: "0x3b5Dbd685C7ad66f8D3A82E2134320eD74DA4Af2";
  symbol: "yvCurve-alUSD";
  decimals: 18;
  name: "element yvCurve-alUSD";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8";
  };
}

export interface TokenInfo_yvCurveMIM_0x270f extends TokenInfo {
  chainId: 1;
  address: "0x270f63b67FF1Ca770D60684366B009A566170AdD";
  symbol: "yvCurve-MIM";
  decimals: 18;
  name: "element yvCurve-MIM";
  tags: ["assetproxy"];
  extensions: {
    vault: "0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8";
  };
}

export interface TokenInfo_yvCurveEURS_0xb601 extends TokenInfo {
  chainId: 1;
  address: "0xb601610553071209443Fbae6E71b8dE4Ba78643b";
  symbol: "yvCurve-EURS";
  decimals: 18;
  name: "element yvCurve-EURS";
  tags: ["assetproxy"];
  extensions: {
    vault: "0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A";
  };
}

export interface TokenInfo_yvUSDC_0x62d9 extends TokenInfo {
  chainId: 1;
  address: "0x62d9855c399fDE8226840eA12D9F1Dd693a49B6A";
  symbol: "yvUSDC";
  decimals: 6;
  name: "element yvUSDC";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE";
  };
}

export interface TokenInfo_yvUSDC_0x57A1 extends TokenInfo {
  chainId: 1;
  address: "0x57A170cEC0c9Daa701d918d60809080C4Ba3C570";
  symbol: "yvUSDC";
  decimals: 6;
  name: "element yvUSDC";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE";
  };
}

export interface TokenInfo_yvCurvestETH_0xcD62 extends TokenInfo {
  chainId: 1;
  address: "0xcD62f09681dCBB9fbc5bA8054B52F414Cb28960A";
  symbol: "yvCurve-stETH";
  decimals: 18;
  name: "element yvCurve-stETH";
  tags: ["assetproxy"];
  extensions: {
    vault: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325";
  };
}

export interface TokenInfo_yvCurveLUSD_0x5fA5 extends TokenInfo {
  chainId: 1;
  address: "0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6";
  symbol: "yvCurve-LUSD";
  decimals: 18;
  name: "Curve LUSD Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurvetriCrypto_0x3D98 extends TokenInfo {
  chainId: 1;
  address: "0x3D980E50508CFd41a13837A60149927a11c03731";
  symbol: "yvCurve-triCrypto";
  decimals: 18;
  name: "Curve triCrypto Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurvestETH_0xdCD9 extends TokenInfo {
  chainId: 1;
  address: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325";
  symbol: "yvCurve-stETH";
  decimals: 18;
  name: "Curve stETH Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvDAI_0xdA81 extends TokenInfo {
  chainId: 1;
  address: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95";
  symbol: "yvDAI";
  decimals: 18;
  name: "DAI yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvUSDC_0x5f18 extends TokenInfo {
  chainId: 1;
  address: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9";
  symbol: "yvUSDC";
  decimals: 6;
  name: "USDC yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurve3Crypto_0xE537 extends TokenInfo {
  chainId: 1;
  address: "0xE537B5cc158EB71037D4125BDD7538421981E6AA";
  symbol: "yvCurve-3Crypto";
  decimals: 18;
  name: "Curve 3Crypto Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvWBTC_0xA696 extends TokenInfo {
  chainId: 1;
  address: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E";
  symbol: "yvWBTC";
  decimals: 8;
  name: "WBTC yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurvealUSD_0xA74d extends TokenInfo {
  chainId: 1;
  address: "0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8";
  symbol: "yvCurve-alUSD";
  decimals: 18;
  name: "Curve alUSD Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurveMIM_0x2DfB extends TokenInfo {
  chainId: 1;
  address: "0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8";
  symbol: "yvCurve-MIM";
  decimals: 18;
  name: "Curve MIM Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurveEURS_0x2521 extends TokenInfo {
  chainId: 1;
  address: "0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A";
  symbol: "yvCurve-EURS";
  decimals: 18;
  name: "Curve EURS Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvUSDC_0xa354 extends TokenInfo {
  chainId: 1;
  address: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE";
  symbol: "yvUSDC";
  decimals: 6;
  name: "USDC yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvUSDC_0xa354 extends TokenInfo {
  chainId: 1;
  address: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE";
  symbol: "yvUSDC";
  decimals: 6;
  name: "USDC yVault";
  tags: ["vault"];
}

export interface TokenInfo_yvCurvestETH_0xdCD9 extends TokenInfo {
  chainId: 1;
  address: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325";
  symbol: "yvCurve-stETH";
  decimals: 18;
  name: "Curve stETH Pool yVault";
  tags: ["vault"];
}

export interface TokenInfo_ePyvCurveLUSD28SEP21_0x9b44 extends TokenInfo {
  chainId: 1;
  address: "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E";
  symbol: "ePyvCurveLUSD-28SEP21";
  decimals: 18;
  extensions: {
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    position: "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6";
    interestToken: "0xBabD64a87881d8df7680907fcde176FF11Fa0292";
    unlockTimestamp: 1632834462;
    createdAtTimestamp: 1625058479;
  };
  name: "LUSD3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurveLUSD27DEC21_0xa2b3 extends TokenInfo {
  chainId: 1;
  address: "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF";
  symbol: "ePyvCurveLUSD-27DEC21";
  decimals: 18;
  extensions: {
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    position: "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6";
    interestToken: "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2";
    unlockTimestamp: 1640620258;
    createdAtTimestamp: 1625068341;
  };
  name: "LUSD3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCrvTriCrypto15AUG21_0x2375 extends TokenInfo {
  chainId: 1;
  address: "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C";
  symbol: "ePyvCrvTriCrypto-15AUG21";
  decimals: 18;
  extensions: {
    underlying: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
    position: "0x97278Ce17D4860f8f49afC6E4c1C5AcBf2584cE5";
    interestToken: "0xC080f19D9E7CCB6ef2096DFa08570e0057490940";
    unlockTimestamp: 1628997564;
    createdAtTimestamp: 1625571539;
  };
  name: "crvTricrypto Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvcrvSTETH15OCT21_0x2694 extends TokenInfo {
  chainId: 1;
  address: "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C";
  symbol: "ePyvcrvSTETH-15OCT21";
  decimals: 18;
  extensions: {
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    position: "0xB3295e739380BD68de96802F7c4Dba4e54477206";
    interestToken: "0x94046274B5aA816aB236A9Eab42b5563B56E1931";
    unlockTimestamp: 1634325622;
    createdAtTimestamp: 1626117693;
  };
  name: "steCRV Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvDAI16OCT21_0xb1cc extends TokenInfo {
  chainId: 1;
  address: "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963";
  symbol: "ePyvDAI-16OCT21";
  decimals: 18;
  extensions: {
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    position: "0x21BbC083362022aB8D7e42C18c47D484cc95C193";
    interestToken: "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7";
    unlockTimestamp: 1634346845;
    createdAtTimestamp: 1626829159;
  };
  name: "DAI Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvUSDC29OCT21_0xf38c extends TokenInfo {
  chainId: 1;
  address: "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797";
  symbol: "ePyvUSDC-29OCT21";
  decimals: 6;
  extensions: {
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    position: "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0";
    interestToken: "0x5D67C1c829AB93867d865CF2008DEb45df67044f";
    unlockTimestamp: 1635528110;
    createdAtTimestamp: 1627924988;
  };
  name: "USDC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvcrv3crypto12NOV21_0x9CF2 extends TokenInfo {
  chainId: 1;
  address: "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729";
  symbol: "ePyvcrv3crypto-12NOV21";
  decimals: 18;
  extensions: {
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    position: "0x4F424B26c7c659F198797Bd87282BF602F543521";
    interestToken: "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD";
    unlockTimestamp: 1636746083;
    createdAtTimestamp: 1628797282;
  };
  name: "crv3crypto Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvWBTC26NOV21_0x6BF9 extends TokenInfo {
  chainId: 1;
  address: "0x6BF924137E769C0A5c443dcE6eC885552d31D579";
  symbol: "ePyvWBTC-26NOV21";
  decimals: 8;
  extensions: {
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    position: "0x8D9487b81e0fEdcd2D8Cab91885756742375CDC5";
    interestToken: "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560";
    unlockTimestamp: 1637941844;
    createdAtTimestamp: 1630425060;
  };
  name: "WBTC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvUSDC28JAN22_0x8a22 extends TokenInfo {
  chainId: 1;
  address: "0x8a2228705ec979961F0e16df311dEbcf097A2766";
  symbol: "ePyvUSDC-28JAN22";
  decimals: 6;
  extensions: {
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    position: "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0";
    interestToken: "0xF1294E805B992320A3515682c6aB0Fe6251067E5";
    unlockTimestamp: 1643382476;
    createdAtTimestamp: 1631632129;
  };
  name: "USDC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvcrvSTETH28JAN22_0x7204 extends TokenInfo {
  chainId: 1;
  address: "0x720465A4AE6547348056885060EEB51F9CAdb571";
  symbol: "ePyvcrvSTETH-28JAN22";
  decimals: 18;
  extensions: {
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    position: "0xB3295e739380BD68de96802F7c4Dba4e54477206";
    interestToken: "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973";
    unlockTimestamp: 1643382514;
    createdAtTimestamp: 1631804744;
  };
  name: "steCRV Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvDAI28JAN22_0x449D extends TokenInfo {
  chainId: 1;
  address: "0x449D7C2e096E9f867339078535b15440d42F78E8";
  symbol: "ePyvDAI-28JAN22";
  decimals: 18;
  extensions: {
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    position: "0x21BbC083362022aB8D7e42C18c47D484cc95C193";
    interestToken: "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985";
    unlockTimestamp: 1643382446;
    createdAtTimestamp: 1632229871;
  };
  name: "DAI Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurvealUSD28JAN22_0x5509 extends TokenInfo {
  chainId: 1;
  address: "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d";
  symbol: "ePyvCurve-alUSD-28JAN22";
  decimals: 18;
  extensions: {
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    position: "0x3b5Dbd685C7ad66f8D3A82E2134320eD74DA4Af2";
    interestToken: "0x782BE9330969AA7b9DB56382752a1364580f199F";
    unlockTimestamp: 1643382460;
    createdAtTimestamp: 1632836406;
  };
  name: "alUSD3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurveMIM11FEB22_0x418D extends TokenInfo {
  chainId: 1;
  address: "0x418De6227499181B045CAdf554030722E460881a";
  symbol: "ePyvCurve-MIM-11FEB22";
  decimals: 18;
  extensions: {
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    position: "0x270f63b67FF1Ca770D60684366B009A566170AdD";
    interestToken: "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5";
    unlockTimestamp: 1644601070;
    createdAtTimestamp: 1634061105;
  };
  name: "MIM-3LP3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurveEURS11FEB22_0x2A8f extends TokenInfo {
  chainId: 1;
  address: "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503";
  symbol: "ePyvCurve-EURS-11FEB22";
  decimals: 18;
  extensions: {
    underlying: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
    position: "0xb601610553071209443Fbae6E71b8dE4Ba78643b";
    interestToken: "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87";
    unlockTimestamp: 1644604852;
    createdAtTimestamp: 1634236922;
  };
  name: "eursCRV Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvcrvSTETH15APR22_0x2361 extends TokenInfo {
  chainId: 1;
  address: "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E";
  symbol: "ePyvcrvSTETH-15APR22";
  decimals: 18;
  extensions: {
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    position: "0xB3295e739380BD68de96802F7c4Dba4e54477206";
    interestToken: "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD";
    unlockTimestamp: 1650025565;
    createdAtTimestamp: 1634646386;
  };
  name: "steCRV Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvUSDC17DEC21_0x76a3 extends TokenInfo {
  chainId: 1;
  address: "0x76a34D72b9CF97d972fB0e390eB053A37F211c74";
  symbol: "ePyvUSDC-17DEC21";
  decimals: 6;
  extensions: {
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    position: "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0";
    interestToken: "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7";
    unlockTimestamp: 1639727861;
    createdAtTimestamp: 1635863922;
  };
  name: "USDC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvcrv3crypto29APR22_0x2853 extends TokenInfo {
  chainId: 1;
  address: "0x285328906D0D33cb757c1E471F5e2176683247c2";
  symbol: "ePyvcrv3crypto-29APR22";
  decimals: 18;
  extensions: {
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    position: "0x4F424B26c7c659F198797Bd87282BF602F543521";
    interestToken: "0x939fd8bfcfED01eC51f86dF105821E3C5dC53C1c";
    unlockTimestamp: 1651240496;
    createdAtTimestamp: 1636034117;
  };
  name: "crv3crypto Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurveMIM29APR22_0xC639 extends TokenInfo {
  chainId: 1;
  address: "0xC63958D9D01eFA6B8266b1df3862c6323CbDb52B";
  symbol: "ePyvCurve-MIM-29APR22";
  decimals: 18;
  extensions: {
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    position: "0x270f63b67FF1Ca770D60684366B009A566170AdD";
    interestToken: "0x83c32857DF72019bc71264eA8e3E06c3031641A2";
    unlockTimestamp: 1651247155;
    createdAtTimestamp: 1636645562;
  };
  name: "MIM-3LP3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvUSDC29APR22_0x52C9 extends TokenInfo {
  chainId: 1;
  address: "0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9";
  symbol: "ePyvUSDC-29APR22";
  decimals: 6;
  extensions: {
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    position: "0x62d9855c399fDE8226840eA12D9F1Dd693a49B6A";
    interestToken: "0x29Cca1dbA3f2DB3C2708608d2676ff8044c14073";
    unlockTimestamp: 1651253068;
    createdAtTimestamp: 1637083548;
  };
  name: "USDC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurvealUSD29APR22_0xEaa1 extends TokenInfo {
  chainId: 1;
  address: "0xEaa1cBA8CC3CF01a92E9E853E90277B5B8A23e07";
  symbol: "ePyvCurve-alUSD-29APR22";
  decimals: 18;
  extensions: {
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    position: "0x3b5Dbd685C7ad66f8D3A82E2134320eD74DA4Af2";
    interestToken: "0x394442cd20208C9bfdC6535d5D89BB932a05Ea87";
    unlockTimestamp: 1651267340;
    createdAtTimestamp: 1637702559;
  };
  name: "alUSD3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvWBTC29APR22_0x49e9 extends TokenInfo {
  chainId: 1;
  address: "0x49e9e169f0B661Ea0A883f490564F4CC275123Ed";
  symbol: "ePyvWBTC-29APR22";
  decimals: 8;
  extensions: {
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    position: "0x8D9487b81e0fEdcd2D8Cab91885756742375CDC5";
    interestToken: "0x6B25b806a48B0d7CfA8399E3537479DdDe7c931f";
    unlockTimestamp: 1651265241;
    createdAtTimestamp: 1639082867;
  };
  name: "WBTC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurveLUSD29APR22_0x0740 extends TokenInfo {
  chainId: 1;
  address: "0x0740A6CfB9468B8b53070C0B327099293DCCB82d";
  symbol: "ePyvCurveLUSD-29APR22";
  decimals: 18;
  extensions: {
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    position: "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6";
    interestToken: "0x594B1ABA4ed1ecC32A012F85527415A470a5352A";
    unlockTimestamp: 1651264326;
    createdAtTimestamp: 1639513942;
  };
  name: "LUSD3CRV-f Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvDAI29APR22_0x2c72 extends TokenInfo {
  chainId: 1;
  address: "0x2c72692E94E757679289aC85d3556b2c0f717E0E";
  symbol: "ePyvDAI-29APR22";
  decimals: 18;
  extensions: {
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    position: "0x21BbC083362022aB8D7e42C18c47D484cc95C193";
    interestToken: "0x38c9728E474A73bCcf82705E29DE4cA41852b8C8";
    unlockTimestamp: 1651275535;
    createdAtTimestamp: 1641339630;
  };
  name: "DAI Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvUSDC16SEP22_0xCFe6 extends TokenInfo {
  chainId: 1;
  address: "0xCFe60a1535ecc5B0bc628dC97111C8bb01637911";
  symbol: "ePyvUSDC-16SEP22";
  decimals: 6;
  extensions: {
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    position: "0x57A170cEC0c9Daa701d918d60809080C4Ba3C570";
    interestToken: "0xFf47C79A1e0b5E1Ed235dDB92A9B557C9509a9FA";
    unlockTimestamp: 1663355860;
    createdAtTimestamp: 1647458268;
  };
  name: "USDC Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_ePyvCurvestETH16SEP22_0x21Fb extends TokenInfo {
  chainId: 1;
  address: "0x21Fb757C2d3a5C574e8721027C3d7a506d77b6b3";
  symbol: "ePyvCurve-stETH-16SEP22";
  decimals: 18;
  extensions: {
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    position: "0xcD62f09681dCBB9fbc5bA8054B52F414Cb28960A";
    interestToken: "0x0Dc9a5208EE0746Cb2F0C21467C4AD92dcd04DFd";
    unlockTimestamp: 1663341022;
    createdAtTimestamp: 1648481776;
  };
  name: "steCRV Principal Token";
  tags: ["eP"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveLUSD28SEP21_0xBabD extends TokenInfo {
  chainId: 1;
  address: "0xBabD64a87881d8df7680907fcde176FF11Fa0292";
  symbol: "eYyvCurveLUSD-28SEP21";
  decimals: 18;
  name: "LUSD3CRV-f Yield Token";
  extensions: {
    tranche: "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    unlockTimestamp: 1632834462;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveLUSD27DEC21_0xBA8C extends TokenInfo {
  chainId: 1;
  address: "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2";
  symbol: "eYyvCurveLUSD-27DEC21";
  decimals: 18;
  name: "LUSD3CRV-f Yield Token";
  extensions: {
    tranche: "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    unlockTimestamp: 1640620258;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCrvTriCrypto15AUG21_0xC080 extends TokenInfo {
  chainId: 1;
  address: "0xC080f19D9E7CCB6ef2096DFa08570e0057490940";
  symbol: "eYyvCrvTriCrypto-15AUG21";
  decimals: 18;
  name: "crvTricrypto Yield Token";
  extensions: {
    tranche: "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C";
    underlying: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
    unlockTimestamp: 1628997564;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvcrvSTETH15OCT21_0x9404 extends TokenInfo {
  chainId: 1;
  address: "0x94046274B5aA816aB236A9Eab42b5563B56E1931";
  symbol: "eYyvcrvSTETH-15OCT21";
  decimals: 18;
  name: "steCRV Yield Token";
  extensions: {
    tranche: "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    unlockTimestamp: 1634325622;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvDAI16OCT21_0xA1Cc extends TokenInfo {
  chainId: 1;
  address: "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7";
  symbol: "eYyvDAI-16OCT21";
  decimals: 18;
  name: "DAI Yield Token";
  extensions: {
    tranche: "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    unlockTimestamp: 1634346845;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvUSDC29OCT21_0x5D67 extends TokenInfo {
  chainId: 1;
  address: "0x5D67C1c829AB93867d865CF2008DEb45df67044f";
  symbol: "eYyvUSDC-29OCT21";
  decimals: 6;
  name: "USDC Yield Token";
  extensions: {
    tranche: "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    unlockTimestamp: 1635528110;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvcrv3crypto12NOV21_0x4f45 extends TokenInfo {
  chainId: 1;
  address: "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD";
  symbol: "eYyvcrv3crypto-12NOV21";
  decimals: 18;
  name: "crv3crypto Yield Token";
  extensions: {
    tranche: "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    unlockTimestamp: 1636746083;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvWBTC26NOV21_0x3b32 extends TokenInfo {
  chainId: 1;
  address: "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560";
  symbol: "eYyvWBTC-26NOV21";
  decimals: 8;
  name: "WBTC Yield Token";
  extensions: {
    tranche: "0x6BF924137E769C0A5c443dcE6eC885552d31D579";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    unlockTimestamp: 1637941844;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvUSDC28JAN22_0xF129 extends TokenInfo {
  chainId: 1;
  address: "0xF1294E805B992320A3515682c6aB0Fe6251067E5";
  symbol: "eYyvUSDC-28JAN22";
  decimals: 6;
  name: "USDC Yield Token";
  extensions: {
    tranche: "0x8a2228705ec979961F0e16df311dEbcf097A2766";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    unlockTimestamp: 1643382476;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvcrvSTETH28JAN22_0xaF5D extends TokenInfo {
  chainId: 1;
  address: "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973";
  symbol: "eYyvcrvSTETH-28JAN22";
  decimals: 18;
  name: "steCRV Yield Token";
  extensions: {
    tranche: "0x720465A4AE6547348056885060EEB51F9CAdb571";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    unlockTimestamp: 1643382514;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvDAI28JAN22_0xF6d2 extends TokenInfo {
  chainId: 1;
  address: "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985";
  symbol: "eYyvDAI-28JAN22";
  decimals: 18;
  name: "DAI Yield Token";
  extensions: {
    tranche: "0x449D7C2e096E9f867339078535b15440d42F78E8";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    unlockTimestamp: 1643382446;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurvealUSD28JAN22_0x782B extends TokenInfo {
  chainId: 1;
  address: "0x782BE9330969AA7b9DB56382752a1364580f199F";
  symbol: "eYyvCurve-alUSD-28JAN22";
  decimals: 18;
  name: "alUSD3CRV-f Yield Token";
  extensions: {
    tranche: "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    unlockTimestamp: 1643382460;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveMIM11FEB22_0x8c98 extends TokenInfo {
  chainId: 1;
  address: "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5";
  symbol: "eYyvCurve-MIM-11FEB22";
  decimals: 18;
  name: "MIM-3LP3CRV-f Yield Token";
  extensions: {
    tranche: "0x418De6227499181B045CAdf554030722E460881a";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    unlockTimestamp: 1644601070;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveEURS11FEB22_0x1ac5 extends TokenInfo {
  chainId: 1;
  address: "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87";
  symbol: "eYyvCurve-EURS-11FEB22";
  decimals: 18;
  name: "eursCRV Yield Token";
  extensions: {
    tranche: "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503";
    underlying: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
    unlockTimestamp: 1644604852;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvcrvSTETH15APR22_0xEb1a extends TokenInfo {
  chainId: 1;
  address: "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD";
  symbol: "eYyvcrvSTETH-15APR22";
  decimals: 18;
  name: "steCRV Yield Token";
  extensions: {
    tranche: "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    unlockTimestamp: 1650025565;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvUSDC17DEC21_0x33Dd extends TokenInfo {
  chainId: 1;
  address: "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7";
  symbol: "eYyvUSDC-17DEC21";
  decimals: 6;
  name: "USDC Yield Token";
  extensions: {
    tranche: "0x76a34D72b9CF97d972fB0e390eB053A37F211c74";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    unlockTimestamp: 1639727861;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvcrv3crypto29APR22_0x939f extends TokenInfo {
  chainId: 1;
  address: "0x939fd8bfcfED01eC51f86dF105821E3C5dC53C1c";
  symbol: "eYyvcrv3crypto-29APR22";
  decimals: 18;
  name: "crv3crypto Yield Token";
  extensions: {
    tranche: "0x285328906D0D33cb757c1E471F5e2176683247c2";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    unlockTimestamp: 1651240496;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveMIM29APR22_0x83c3 extends TokenInfo {
  chainId: 1;
  address: "0x83c32857DF72019bc71264eA8e3E06c3031641A2";
  symbol: "eYyvCurve-MIM-29APR22";
  decimals: 18;
  name: "MIM-3LP3CRV-f Yield Token";
  extensions: {
    tranche: "0xC63958D9D01eFA6B8266b1df3862c6323CbDb52B";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    unlockTimestamp: 1651247155;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvUSDC29APR22_0x29Cc extends TokenInfo {
  chainId: 1;
  address: "0x29Cca1dbA3f2DB3C2708608d2676ff8044c14073";
  symbol: "eYyvUSDC-29APR22";
  decimals: 6;
  name: "USDC Yield Token";
  extensions: {
    tranche: "0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    unlockTimestamp: 1651253068;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurvealUSD29APR22_0x3944 extends TokenInfo {
  chainId: 1;
  address: "0x394442cd20208C9bfdC6535d5D89BB932a05Ea87";
  symbol: "eYyvCurve-alUSD-29APR22";
  decimals: 18;
  name: "alUSD3CRV-f Yield Token";
  extensions: {
    tranche: "0xEaa1cBA8CC3CF01a92E9E853E90277B5B8A23e07";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    unlockTimestamp: 1651267340;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvWBTC29APR22_0x6B25 extends TokenInfo {
  chainId: 1;
  address: "0x6B25b806a48B0d7CfA8399E3537479DdDe7c931f";
  symbol: "eYyvWBTC-29APR22";
  decimals: 8;
  name: "WBTC Yield Token";
  extensions: {
    tranche: "0x49e9e169f0B661Ea0A883f490564F4CC275123Ed";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    unlockTimestamp: 1651265241;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurveLUSD29APR22_0x594B extends TokenInfo {
  chainId: 1;
  address: "0x594B1ABA4ed1ecC32A012F85527415A470a5352A";
  symbol: "eYyvCurveLUSD-29APR22";
  decimals: 18;
  name: "LUSD3CRV-f Yield Token";
  extensions: {
    tranche: "0x0740A6CfB9468B8b53070C0B327099293DCCB82d";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    unlockTimestamp: 1651264326;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvDAI29APR22_0x38c9 extends TokenInfo {
  chainId: 1;
  address: "0x38c9728E474A73bCcf82705E29DE4cA41852b8C8";
  symbol: "eYyvDAI-29APR22";
  decimals: 18;
  name: "DAI Yield Token";
  extensions: {
    tranche: "0x2c72692E94E757679289aC85d3556b2c0f717E0E";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    unlockTimestamp: 1651275535;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvUSDC16SEP22_0xFf47 extends TokenInfo {
  chainId: 1;
  address: "0xFf47C79A1e0b5E1Ed235dDB92A9B557C9509a9FA";
  symbol: "eYyvUSDC-16SEP22";
  decimals: 6;
  name: "USDC Yield Token";
  extensions: {
    tranche: "0xCFe60a1535ecc5B0bc628dC97111C8bb01637911";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    unlockTimestamp: 1663355860;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_eYyvCurvestETH16SEP22_0x0Dc9 extends TokenInfo {
  chainId: 1;
  address: "0x0Dc9a5208EE0746Cb2F0C21467C4AD92dcd04DFd";
  symbol: "eYyvCurve-stETH-16SEP22";
  decimals: 18;
  name: "steCRV Yield Token";
  extensions: {
    tranche: "0x21Fb757C2d3a5C574e8721027C3d7a506d77b6b3";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    unlockTimestamp: 1663341022;
  };
  tags: ["eY"];
  logoURI: "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg";
}

export interface TokenInfo_LPePyvCurveLUSD28SEP21_0xA8D4 extends TokenInfo {
  chainId: 1;
  address: "0xA8D4433BAdAa1A35506804B43657B0694deA928d";
  symbol: "LPePyvCurveLUSD-28SEP21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    poolId: "0xa8d4433badaa1a35506804b43657b0694dea928d00020000000000000000005e";
    unitSeconds: 504911232;
    expiration: 1632834462;
    createdAtTimestamp: 1625058716;
  };
  name: "LP Element Principal Token yvCurveLUSD-28SEP21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurveLUSD27DEC21_0x893B extends TokenInfo {
  chainId: 1;
  address: "0x893B30574BF183d69413717f30b17062eC9DFD8b";
  symbol: "LPePyvCurveLUSD-27DEC21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    poolId: "0x893b30574bf183d69413717f30b17062ec9dfd8b000200000000000000000061";
    unitSeconds: 757366848;
    expiration: 1640620258;
    createdAtTimestamp: 1625068680;
  };
  name: "LP Element Principal Token yvCurveLUSD-27DEC21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCrvTriCrypto15AUG21_0x3A69 extends TokenInfo {
  chainId: 1;
  address: "0x3A693EB97b500008d4Bb6258906f7Bbca1D09Cc5";
  symbol: "LPePyvCrvTriCrypto-15AUG21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C";
    underlying: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
    poolId: "0x3a693eb97b500008d4bb6258906f7bbca1d09cc5000200000000000000000065";
    unitSeconds: 194390824;
    expiration: 1628997564;
    createdAtTimestamp: 1625578299;
  };
  name: "LP Element Principal Token yvCrvTriCrypto-15AUG21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvcrvSTETH15OCT21_0xce16 extends TokenInfo {
  chainId: 1;
  address: "0xce16E7ed7654a3453E8FaF748f2c82E57069278f";
  symbol: "LPePyvcrvSTETH-15OCT21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    poolId: "0xce16e7ed7654a3453e8faf748f2c82e57069278f00020000000000000000006d";
    unitSeconds: 823636447;
    expiration: 1634325622;
    createdAtTimestamp: 1626118091;
  };
  name: "LP Element Principal Token yvcrvSTETH-15OCT21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvDAI16OCT21_0x7162 extends TokenInfo {
  chainId: 1;
  address: "0x71628c66C502F988Fbb9e17081F2bD14e361FAF4";
  symbol: "LPePyvDAI-16OCT21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    poolId: "0x71628c66c502f988fbb9e17081f2bd14e361faf4000200000000000000000078";
    unitSeconds: 700248765;
    expiration: 1634346845;
    createdAtTimestamp: 1626829410;
  };
  name: "LP Element Principal Token yvDAI-16OCT21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvUSDC29OCT21_0x7875 extends TokenInfo {
  chainId: 1;
  address: "0x787546Bf2c05e3e19e2b6BDE57A203da7f682efF";
  symbol: "LPePyvUSDC-29OCT21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    poolId: "0x787546bf2c05e3e19e2b6bde57a203da7f682eff00020000000000000000007c";
    unitSeconds: 583803612;
    expiration: 1635528110;
    createdAtTimestamp: 1627936276;
  };
  name: "LP Element Principal Token yvUSDC-29OCT21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvcrv3crypto12NOV21_0xF6dc extends TokenInfo {
  chainId: 1;
  address: "0xF6dc4640D2783654BeF88E0dF3fb0F051f0DfC1A";
  symbol: "LPePyvcrv3crypto-12NOV21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    poolId: "0xf6dc4640d2783654bef88e0df3fb0f051f0dfc1a00020000000000000000007e";
    unitSeconds: 140112867;
    expiration: 1636746083;
    createdAtTimestamp: 1628797677;
  };
  name: "LP Element Principal Token yvcrv3crypto-12NOV21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvWBTC26NOV21_0x4Db9 extends TokenInfo {
  chainId: 1;
  address: "0x4Db9024fc9F477134e00Da0DA3c77DE98d9836aC";
  symbol: "LPePyvWBTC-26NOV21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x6BF924137E769C0A5c443dcE6eC885552d31D579";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    poolId: "0x4db9024fc9f477134e00da0da3c77de98d9836ac000200000000000000000086";
    unitSeconds: 1000355378;
    expiration: 1637941844;
    createdAtTimestamp: 1630433657;
  };
  name: "LP Element Principal Token yvWBTC-26NOV21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvUSDC28JAN22_0x10a2 extends TokenInfo {
  chainId: 1;
  address: "0x10a2F8bd81Ee2898D7eD18fb8f114034a549FA59";
  symbol: "LPePyvUSDC-28JAN22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x8a2228705ec979961F0e16df311dEbcf097A2766";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    poolId: "0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090";
    unitSeconds: 779456714;
    expiration: 1643382476;
    createdAtTimestamp: 1631632569;
  };
  name: "LP Element Principal Token yvUSDC-28JAN22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvcrvSTETH28JAN22_0x544c extends TokenInfo {
  chainId: 1;
  address: "0x544c823194218f0640daE8291c1f59752d25faE3";
  symbol: "LPePyvcrvSTETH-28JAN22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x720465A4AE6547348056885060EEB51F9CAdb571";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    poolId: "0x544c823194218f0640dae8291c1f59752d25fae3000200000000000000000093";
    unitSeconds: 583488042;
    expiration: 1643382514;
    createdAtTimestamp: 1631806540;
  };
  name: "LP Element Principal Token yvcrvSTETH-28JAN22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvDAI28JAN22_0xA47D extends TokenInfo {
  chainId: 1;
  address: "0xA47D1251CF21AD42685Cc6B8B3a186a73Dbd06cf";
  symbol: "LPePyvDAI-28JAN22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x449D7C2e096E9f867339078535b15440d42F78E8";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    poolId: "0xa47d1251cf21ad42685cc6b8b3a186a73dbd06cf000200000000000000000097";
    unitSeconds: 778194436;
    expiration: 1643382446;
    createdAtTimestamp: 1632233996;
  };
  name: "LP Element Principal Token yvDAI-28JAN22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurvealUSD28JAN22_0xC9AD extends TokenInfo {
  chainId: 1;
  address: "0xC9AD279994980F8DF348b526901006972509677F";
  symbol: "LPePyvCurve-alUSD-28JAN22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    poolId: "0xc9ad279994980f8df348b526901006972509677f00020000000000000000009e";
    unitSeconds: 350282167;
    expiration: 1643382460;
    createdAtTimestamp: 1632836762;
  };
  name: "LP Element Principal Token yvCurve-alUSD-28JAN22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurveMIM11FEB22_0x09b1 extends TokenInfo {
  chainId: 1;
  address: "0x09b1b33BaD0e87454ff05696b1151BFbD208a43F";
  symbol: "LPePyvCurve-MIM-11FEB22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x418De6227499181B045CAdf554030722E460881a";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    poolId: "0x09b1b33bad0e87454ff05696b1151bfbd208a43f0002000000000000000000a6";
    unitSeconds: 350282167;
    expiration: 1644601070;
    createdAtTimestamp: 1634168402;
  };
  name: "LP Element Principal Token yvCurve-MIM-11FEB22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurveEURS11FEB22_0x6AC0 extends TokenInfo {
  chainId: 1;
  address: "0x6AC02eCD0c2A23B11f9AFb3b3Aaf237169475cac";
  symbol: "LPePyvCurve-EURS-11FEB22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503";
    underlying: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
    poolId: "0x6ac02ecd0c2a23b11f9afb3b3aaf237169475cac0002000000000000000000a8";
    unitSeconds: 349966598;
    expiration: 1644604852;
    createdAtTimestamp: 1634237343;
  };
  name: "LP Element Principal Token yvCurve-EURS-11FEB22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvcrvSTETH15APR22_0xb03C extends TokenInfo {
  chainId: 1;
  address: "0xb03C6B351A283bc1Cd26b9cf6d7B0c4556013bDb";
  symbol: "LPePyvcrvSTETH-15APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    poolId: "0xb03c6b351a283bc1cd26b9cf6d7b0c4556013bdb0002000000000000000000ab";
    unitSeconds: 1166976085;
    expiration: 1650025565;
    createdAtTimestamp: 1634646686;
  };
  name: "LP Element Principal Token yvcrvSTETH-15APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvUSDC17DEC21_0x90CA extends TokenInfo {
  chainId: 1;
  address: "0x90CA5cEf5B29342b229Fb8AE2DB5d8f4F894D652";
  symbol: "LPePyvUSDC-17DEC21";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x76a34D72b9CF97d972fB0e390eB053A37F211c74";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    poolId: "0x90ca5cef5b29342b229fb8ae2db5d8f4f894d6520002000000000000000000b5";
    unitSeconds: 778194436;
    expiration: 1639727861;
    createdAtTimestamp: 1635866643;
  };
  name: "LP Element Principal Token yvUSDC-17DEC21";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvcrv3crypto29APR22_0x6Dd0 extends TokenInfo {
  chainId: 1;
  address: "0x6Dd0F7c8F4793ed2531c0df4fEA8633a21fDcFf4";
  symbol: "LPePyvcrv3crypto-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x285328906D0D33cb757c1E471F5e2176683247c2";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    poolId: "0x6dd0f7c8f4793ed2531c0df4fea8633a21fdcff40002000000000000000000b7";
    unitSeconds: 412133793;
    expiration: 1651240496;
    createdAtTimestamp: 1636037728;
  };
  name: "LP Element Principal Token yvcrv3crypto-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurveMIM29APR22_0x1479 extends TokenInfo {
  chainId: 1;
  address: "0x14792d3F6FcF2661795d1E08ef818bf612708BbF";
  symbol: "LPePyvCurve-MIM-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0xC63958D9D01eFA6B8266b1df3862c6323CbDb52B";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    poolId: "0x14792d3f6fcf2661795d1e08ef818bf612708bbf0002000000000000000000be";
    unitSeconds: 368585199;
    expiration: 1651247155;
    createdAtTimestamp: 1636645928;
  };
  name: "LP Element Principal Token yvCurve-MIM-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvUSDC29APR22_0x7Edd extends TokenInfo {
  chainId: 1;
  address: "0x7Edde0CB05ED19e03A9a47CD5E53fC57FDe1c80c";
  symbol: "LPePyvUSDC-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    poolId: "0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8";
    unitSeconds: 778194436;
    expiration: 1651253068;
    createdAtTimestamp: 1637084616;
  };
  name: "LP Element Principal Token yvUSDC-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurvealUSD29APR22_0x63E9 extends TokenInfo {
  chainId: 1;
  address: "0x63E9B50DD3eB63BfBF93B26F57b9EFB574e59576";
  symbol: "LPePyvCurve-alUSD-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0xEaa1cBA8CC3CF01a92E9E853E90277B5B8A23e07";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    poolId: "0x63e9b50dd3eb63bfbf93b26f57b9efb574e595760002000000000000000000cf";
    unitSeconds: 437694924;
    expiration: 1651267340;
    createdAtTimestamp: 1637702882;
  };
  name: "LP Element Principal Token yvCurve-alUSD-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvWBTC29APR22_0x4bd6 extends TokenInfo {
  chainId: 1;
  address: "0x4bd6D86dEBdB9F5413e631Ad386c4427DC9D01B2";
  symbol: "LPePyvWBTC-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x49e9e169f0B661Ea0A883f490564F4CC275123Ed";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    poolId: "0x4bd6d86debdb9f5413e631ad386c4427dc9d01b20002000000000000000000ec";
    unitSeconds: 2333952170;
    expiration: 1651265241;
    createdAtTimestamp: 1639083174;
  };
  name: "LP Element Principal Token yvWBTC-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurveLUSD29APR22_0x56F3 extends TokenInfo {
  chainId: 1;
  address: "0x56F30398d13F111401d6e7ffE758254a0946687d";
  symbol: "LPePyvCurveLUSD-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x0740A6CfB9468B8b53070C0B327099293DCCB82d";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    poolId: "0x56f30398d13f111401d6e7ffe758254a0946687d000200000000000000000105";
    unitSeconds: 875389848;
    expiration: 1651264326;
    createdAtTimestamp: 1639517748;
  };
  name: "LP Element Principal Token yvCurveLUSD-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvDAI29APR22_0xEdf0 extends TokenInfo {
  chainId: 1;
  address: "0xEdf085f65b4F6c155e13155502Ef925c9a756003";
  symbol: "LPePyvDAI-29APR22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD";
    bond: "0x2c72692E94E757679289aC85d3556b2c0f717E0E";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    poolId: "0xedf085f65b4f6c155e13155502ef925c9a756003000200000000000000000123";
    unitSeconds: 1000355378;
    expiration: 1651275535;
    createdAtTimestamp: 1641340147;
  };
  name: "LP Element Principal Token yvDAI-29APR22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvUSDC16SEP22_0x56df extends TokenInfo {
  chainId: 1;
  address: "0x56df5ef1A0A86c2A5Dd9cC001Aa8152545BDbdeC";
  symbol: "LPePyvUSDC-16SEP22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xE88628700eaE9213169D715148ac5A5F47B5dCd9";
    bond: "0xCFe60a1535ecc5B0bc628dC97111C8bb01637911";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    poolId: "0x56df5ef1a0a86c2a5dd9cc001aa8152545bdbdec000200000000000000000168";
    unitSeconds: 2800679490;
    expiration: 1663355860;
    createdAtTimestamp: 1647458944;
  };
  name: "LP Element Principal Token yvUSDC-16SEP22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPePyvCurvestETH16SEP22_0xABb9 extends TokenInfo {
  chainId: 1;
  address: "0xABb93e3787b984cb62dCD962af8732f52Ff57586";
  symbol: "LPePyvCurve-stETH-16SEP22";
  decimals: 18;
  extensions: {
    convergentPoolFactory: "0xE88628700eaE9213169D715148ac5A5F47B5dCd9";
    bond: "0x21Fb757C2d3a5C574e8721027C3d7a506d77b6b3";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    poolId: "0xabb93e3787b984cb62dcd962af8732f52ff57586000200000000000000000183";
    unitSeconds: 777878867;
    expiration: 1663341022;
    createdAtTimestamp: 1648482248;
  };
  name: "LP Element Principal Token yvCurve-stETH-16SEP22";
  tags: ["ccpool"];
}

export interface TokenInfo_LPeYyvCurveLUSD28SEP21_0xDe62 extends TokenInfo {
  chainId: 1;
  address: "0xDe620bb8BE43ee54d7aa73f8E99A7409Fe511084";
  symbol: "LPeYyvCurveLUSD-28SEP21";
  decimals: 18;
  extensions: {
    poolId: "0xde620bb8be43ee54d7aa73f8e99a7409fe51108400020000000000000000005d";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    interestToken: "0xBabD64a87881d8df7680907fcde176FF11Fa0292";
    createdAtTimestamp: 1625058649;
    expiration: 1632834462;
  };
  name: "LP Element Yield Token yvCurveLUSD-28SEP21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurveLUSD27DEC21_0x67F8 extends TokenInfo {
  chainId: 1;
  address: "0x67F8FCb9D3c463da05DE1392EfDbB2A87F8599Ea";
  symbol: "LPeYyvCurveLUSD-27DEC21";
  decimals: 18;
  extensions: {
    poolId: "0x67f8fcb9d3c463da05de1392efdbb2a87f8599ea000200000000000000000060";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    interestToken: "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2";
    createdAtTimestamp: 1625068623;
    expiration: 1640620258;
  };
  name: "LP Element Yield Token yvCurveLUSD-27DEC21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCrvTriCrypto15AUG21_0xF94A extends TokenInfo {
  chainId: 1;
  address: "0xF94A7Df264A2ec8bCEef2cFE54d7cA3f6C6DFC7a";
  symbol: "LPeYyvCrvTriCrypto-15AUG21";
  decimals: 18;
  extensions: {
    poolId: "0xf94a7df264a2ec8bceef2cfe54d7ca3f6c6dfc7a000200000000000000000064";
    underlying: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF";
    interestToken: "0xC080f19D9E7CCB6ef2096DFa08570e0057490940";
    createdAtTimestamp: 1625577740;
    expiration: 1628997564;
  };
  name: "LP Element Yield Token yvCrvTriCrypto-15AUG21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvcrvSTETH15OCT21_0xD5D7 extends TokenInfo {
  chainId: 1;
  address: "0xD5D7bc115B32ad1449C6D0083E43C87be95F2809";
  symbol: "LPeYyvcrvSTETH-15OCT21";
  decimals: 18;
  extensions: {
    poolId: "0xd5d7bc115b32ad1449c6d0083e43c87be95f280900020000000000000000006c";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    interestToken: "0x94046274B5aA816aB236A9Eab42b5563B56E1931";
    createdAtTimestamp: 1626118013;
    expiration: 1634325622;
  };
  name: "LP Element Yield Token yvcrvSTETH-15OCT21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvDAI16OCT21_0xE54B extends TokenInfo {
  chainId: 1;
  address: "0xE54B3F5c444a801e61BECDCa93e74CdC1C4C1F90";
  symbol: "LPeYyvDAI-16OCT21";
  decimals: 18;
  extensions: {
    poolId: "0xe54b3f5c444a801e61becdca93e74cdc1c4c1f90000200000000000000000077";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    interestToken: "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7";
    createdAtTimestamp: 1626829372;
    expiration: 1634346845;
  };
  name: "LP Element Yield Token yvDAI-16OCT21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvUSDC29OCT21_0x2D6e extends TokenInfo {
  chainId: 1;
  address: "0x2D6e3515C8b47192Ca3913770fa741d3C4Dac354";
  symbol: "LPeYyvUSDC-29OCT21";
  decimals: 18;
  extensions: {
    poolId: "0x2d6e3515c8b47192ca3913770fa741d3c4dac35400020000000000000000007b";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    interestToken: "0x5D67C1c829AB93867d865CF2008DEb45df67044f";
    createdAtTimestamp: 1627928953;
    expiration: 1635528110;
  };
  name: "LP Element Yield Token yvUSDC-29OCT21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvcrv3crypto12NOV21_0xd168 extends TokenInfo {
  chainId: 1;
  address: "0xd16847480D6bc218048CD31Ad98b63CC34e5c2bF";
  symbol: "LPeYyvcrv3crypto-12NOV21";
  decimals: 18;
  extensions: {
    poolId: "0xd16847480d6bc218048cd31ad98b63cc34e5c2bf00020000000000000000007d";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    interestToken: "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD";
    createdAtTimestamp: 1628797608;
    expiration: 1636746083;
  };
  name: "LP Element Yield Token yvcrv3crypto-12NOV21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvWBTC26NOV21_0x7320 extends TokenInfo {
  chainId: 1;
  address: "0x7320d680Ca9BCE8048a286f00A79A2c9f8DCD7b3";
  symbol: "LPeYyvWBTC-26NOV21";
  decimals: 18;
  extensions: {
    poolId: "0x7320d680ca9bce8048a286f00a79a2c9f8dcd7b3000200000000000000000085";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    interestToken: "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560";
    createdAtTimestamp: 1630433475;
    expiration: 1637941844;
  };
  name: "LP Element Yield Token yvWBTC-26NOV21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvUSDC28JAN22_0x9e03 extends TokenInfo {
  chainId: 1;
  address: "0x9e030b67a8384cbba09D5927533Aa98010C87d91";
  symbol: "LPeYyvUSDC-28JAN22";
  decimals: 18;
  extensions: {
    poolId: "0x9e030b67a8384cbba09d5927533aa98010c87d9100020000000000000000008f";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    interestToken: "0xF1294E805B992320A3515682c6aB0Fe6251067E5";
    createdAtTimestamp: 1631632476;
    expiration: 1643382476;
  };
  name: "LP Element Yield Token yvUSDC-28JAN22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvcrvSTETH28JAN22_0x4212 extends TokenInfo {
  chainId: 1;
  address: "0x4212bE3C7b255bA4B29705573ABD023cdcE21542";
  symbol: "LPeYyvcrvSTETH-28JAN22";
  decimals: 18;
  extensions: {
    poolId: "0x4212be3c7b255ba4b29705573abd023cdce21542000200000000000000000092";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    interestToken: "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973";
    createdAtTimestamp: 1631804977;
    expiration: 1643382514;
  };
  name: "LP Element Yield Token yvcrvSTETH-28JAN22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvDAI28JAN22_0xB70c extends TokenInfo {
  chainId: 1;
  address: "0xB70c25D96EF260eA07F650037Bf68F5d6583885e";
  symbol: "LPeYyvDAI-28JAN22";
  decimals: 18;
  extensions: {
    poolId: "0xb70c25d96ef260ea07f650037bf68f5d6583885e000200000000000000000096";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    interestToken: "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985";
    createdAtTimestamp: 1632233778;
    expiration: 1643382446;
  };
  name: "LP Element Yield Token yvDAI-28JAN22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurvealUSD28JAN22_0x802d extends TokenInfo {
  chainId: 1;
  address: "0x802d0f2f4b5f1fb5BfC9b2040a703c1464e1D4CB";
  symbol: "LPeYyvCurve-alUSD-28JAN22";
  decimals: 18;
  extensions: {
    poolId: "0x802d0f2f4b5f1fb5bfc9b2040a703c1464e1d4cb00020000000000000000009d";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    interestToken: "0x782BE9330969AA7b9DB56382752a1364580f199F";
    createdAtTimestamp: 1632836663;
    expiration: 1643382460;
  };
  name: "LP Element Yield Token yvCurve-alUSD-28JAN22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurveMIM11FEB22_0x1D31 extends TokenInfo {
  chainId: 1;
  address: "0x1D310a6238e11c8BE91D83193C88A99eB66279bE";
  symbol: "LPeYyvCurve-MIM-11FEB22";
  decimals: 18;
  extensions: {
    poolId: "0x1d310a6238e11c8be91d83193c88a99eb66279be0002000000000000000000a2";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    interestToken: "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5";
    createdAtTimestamp: 1634062987;
    expiration: 1644601070;
  };
  name: "LP Element Yield Token yvCurve-MIM-11FEB22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurveEURS11FEB22_0x5fA3 extends TokenInfo {
  chainId: 1;
  address: "0x5fA3ce1fB47bC8A29B5C02e2e7167799BBAf5F41";
  symbol: "LPeYyvCurve-EURS-11FEB22";
  decimals: 18;
  extensions: {
    poolId: "0x5fa3ce1fb47bc8a29b5c02e2e7167799bbaf5f410002000000000000000000a7";
    underlying: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1";
    interestToken: "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87";
    createdAtTimestamp: 1634237163;
    expiration: 1644604852;
  };
  name: "LP Element Yield Token yvCurve-EURS-11FEB22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvcrvSTETH15APR22_0x062F extends TokenInfo {
  chainId: 1;
  address: "0x062F38735AAC32320DB5e2DBBEb07968351D7C72";
  symbol: "LPeYyvcrvSTETH-15APR22";
  decimals: 18;
  extensions: {
    poolId: "0x062f38735aac32320db5e2dbbeb07968351d7c720002000000000000000000ac";
    underlying: "0x06325440D014e39736583c165C2963BA99fAf14E";
    interestToken: "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD";
    createdAtTimestamp: 1634672904;
    expiration: 1650025565;
  };
  name: "LP Element Yield Token yvcrvSTETH-15APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvUSDC17DEC21_0x7C9c extends TokenInfo {
  chainId: 1;
  address: "0x7C9cF12d783821d5C63d8E9427aF5C44bAd92445";
  symbol: "LPeYyvUSDC-17DEC21";
  decimals: 18;
  extensions: {
    poolId: "0x7c9cf12d783821d5c63d8e9427af5c44bad924450002000000000000000000b4";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    interestToken: "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7";
    createdAtTimestamp: 1635864294;
    expiration: 1639727861;
  };
  name: "LP Element Yield Token yvUSDC-17DEC21";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvcrv3crypto29APR22_0x4aBB extends TokenInfo {
  chainId: 1;
  address: "0x4aBB6FD289fA70056CFcB58ceBab8689921eB922";
  symbol: "LPeYyvcrv3crypto-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x4abb6fd289fa70056cfcb58cebab8689921eb9220002000000000000000000b6";
    underlying: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff";
    interestToken: "0x939fd8bfcfED01eC51f86dF105821E3C5dC53C1c";
    createdAtTimestamp: 1636034362;
    expiration: 1651240496;
  };
  name: "LP Element Yield Token yvcrv3crypto-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurveMIM29APR22_0x6FE9 extends TokenInfo {
  chainId: 1;
  address: "0x6FE95FafE2F86158c77Bf18350672D360BfC78a2";
  symbol: "LPeYyvCurve-MIM-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x6fe95fafe2f86158c77bf18350672d360bfc78a20002000000000000000000bd";
    underlying: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B";
    interestToken: "0x83c32857DF72019bc71264eA8e3E06c3031641A2";
    createdAtTimestamp: 1636645799;
    expiration: 1651247155;
  };
  name: "LP Element Yield Token yvCurve-MIM-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvUSDC29APR22_0x7173 extends TokenInfo {
  chainId: 1;
  address: "0x7173b184525feAD2fFbde5FBe6FCB65Ea8246eE7";
  symbol: "LPeYyvUSDC-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x7173b184525fead2ffbde5fbe6fcb65ea8246ee70002000000000000000000c7";
    underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    interestToken: "0x29Cca1dbA3f2DB3C2708608d2676ff8044c14073";
    createdAtTimestamp: 1637084375;
    expiration: 1651253068;
  };
  name: "LP Element Yield Token yvUSDC-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurvealUSD29APR22_0x10f2 extends TokenInfo {
  chainId: 1;
  address: "0x10f21C9bD8128a29Aa785Ab2dE0d044DCdd79436";
  symbol: "LPeYyvCurve-alUSD-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x10f21c9bd8128a29aa785ab2de0d044dcdd794360002000000000000000000ce";
    underlying: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c";
    interestToken: "0x394442cd20208C9bfdC6535d5D89BB932a05Ea87";
    createdAtTimestamp: 1637702814;
    expiration: 1651267340;
  };
  name: "LP Element Yield Token yvCurve-alUSD-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvWBTC29APR22_0xCF35 extends TokenInfo {
  chainId: 1;
  address: "0xCF354603A9AEbD2Ff9f33E1B04246d8Ea204ae95";
  symbol: "LPeYyvWBTC-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0xcf354603a9aebd2ff9f33e1b04246d8ea204ae950002000000000000000000eb";
    underlying: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
    interestToken: "0x6B25b806a48B0d7CfA8399E3537479DdDe7c931f";
    createdAtTimestamp: 1639083132;
    expiration: 1651265241;
  };
  name: "LP Element Yield Token yvWBTC-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvCurveLUSD29APR22_0x8E9d extends TokenInfo {
  chainId: 1;
  address: "0x8E9d636BbE6939BD0F52849afc02C0c66F6A3603";
  symbol: "LPeYyvCurveLUSD-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x8e9d636bbe6939bd0f52849afc02c0c66f6a3603000200000000000000000104";
    underlying: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA";
    interestToken: "0x594B1ABA4ed1ecC32A012F85527415A470a5352A";
    createdAtTimestamp: 1639514987;
    expiration: 1651264326;
  };
  name: "LP Element Yield Token yvCurveLUSD-29APR22";
  tags: ["wpool"];
}

export interface TokenInfo_LPeYyvDAI29APR22_0x4157 extends TokenInfo {
  chainId: 1;
  address: "0x415747EE98D482e6dD9B431fa76Ad5553744F247";
  symbol: "LPeYyvDAI-29APR22";
  decimals: 18;
  extensions: {
    poolId: "0x415747ee98d482e6dd9b431fa76ad5553744f247000200000000000000000122";
    underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    interestToken: "0x38c9728E474A73bCcf82705E29DE4cA41852b8C8";
    createdAtTimestamp: 1641340096;
    expiration: 1651275535;
  };
  name: "LP Element Yield Token yvDAI-29APR22";
  tags: ["wpool"];
}

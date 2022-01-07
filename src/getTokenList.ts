import { TokenList } from "@uniswap/token-lists/src";
import {
  ConvergentPoolFactory__factory,
  Vault__factory,
  WeightedPoolFactory__factory,
} from "elf-contracts-typechain/dist/types";
import { TrancheFactory__factory } from "elf-contracts-typechain/dist/types/factories/TrancheFactory__factory";
import fs from "fs";
import hre from "hardhat";
import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";
import { getAssetProxyTokenInfos } from "src/assetProxies";
import { getPrincipalPoolTokenInfos } from "src/ccpools";
import { ELEMENT_LOGO_URI } from "src/logo";
import { TokenTag } from "src/tags";
import { BaseTokenInfo, CurveBaseToken, TagInfo } from "src/types";
import { getVaultTokenInfos } from "src/vaults";
import { getYieldPoolTokenInfos } from "src/weightedPools";
import { getBaseTokenInfos } from "./baseTokens";
import { getPrincipalTokenInfos } from "./principalTokens";
import { getYieldTokenInfos } from "./yieldTokens";

import { ethers } from "ethers";
import { getRootTokenInfos } from "./rootTokens";

const provider = hre.ethers.provider;

export const elementTags: Record<TokenTag, TagInfo> = {
  [TokenTag.BASE]: {
    name: "Base token",
    description: "The underlying base asset of a principal or yield token",
  },
  [TokenTag.ROOT]: {
    name: "Root token",
    description:
      "This token is a member of a given LP token's pool assets. The LP token for that pool must also be a base token",
  },
  [TokenTag.CURVE]: {
    name: "Curve LP token",
    description: "A curve LP token",
  },
  [TokenTag.PRINCIPAL]: {
    name: "Principal token",
    description:
      "Token that represents a deposit of principal into a yield position",
  },
  [TokenTag.YIELD]: {
    name: "Yield token",
    description:
      "Token that represents the yield on a deposit into a yield position",
  },
  [TokenTag.CCPOOL]: {
    name: "ConvergentCurve pool",
    description: "Token that represents the balancer pool for Principal tokens",
  },
  [TokenTag.WPOOL]: {
    name: "Weighted pool",
    description: "Token that represents the balancer pool for Yield tokens",
  },
  [TokenTag.ASSET_PROXY]: {
    name: "Vault asset proxy",
    description:
      "Token that wraps a yield position, ie: Yearn vault asset proxy",
  },
  [TokenTag.VAULT]: {
    name: "Vault",
    description: "The yield position, ie: Yearn yvcrvLUSD",
  },
};

export async function getTokenList(
  addressesJson: AddressesJsonFile,
  name: string,
  outputPath: string
) {
  const {
    chainId,
    addresses: {
      balancerVaultAddress,
      trancheFactoryAddress,
      wethAddress,
      wbtcAddress,
      usdcAddress,
      daiAddress,
      "lusd3crv-fAddress": crvlusdAddress,
      "alusd3crv-fAddress": crvalusdAddress,
      "mim-3lp3crv-fAddress": crvMimAddress,
      convergentPoolFactoryAddress,
      weightedPoolFactoryAddress,
      crvtricryptoAddress,
      crv3cryptoAddress,
      stecrvAddress,
      eurscrvAddress,
    },
    safelist,
  } = addressesJson;

  const underlyingAddresses = [
    wethAddress,
    wbtcAddress,
    usdcAddress,
    daiAddress,
    crvlusdAddress,
    crvalusdAddress,
    crvMimAddress,
    crv3cryptoAddress,
    crvtricryptoAddress,
    stecrvAddress,
    eurscrvAddress,
  ];
  console.log("underlyingAddresses", underlyingAddresses);
  if (underlyingAddresses.find((a) => a === undefined)) {
    console.warn(
      "Found at least one undefined underlying token address",
      underlyingAddresses
    );
  }
  const trancheFactory = TrancheFactory__factory.connect(
    trancheFactoryAddress,
    provider
  );
  const convergentPoolFactory = ConvergentPoolFactory__factory.connect(
    convergentPoolFactoryAddress,
    provider
  );
  const balancerVault = Vault__factory.connect(balancerVaultAddress, provider);
  const weightedPoolFactory = WeightedPoolFactory__factory.connect(
    weightedPoolFactoryAddress,
    provider
  );

  const underlyingTokenAddresses = underlyingAddresses
    // Addresses that aren't available on the given chain (ie: we dont have
    // mainnet weth terms!) should be filled in w/ the zero address to be
    // compliant with the addresses.schema.json
    .filter(
      (address) => address !== "0x0000000000000000000000000000000000000000"
    )
    // if an address is actually missing, (shouldn't happen, there's a json schema that should prevent this!)
    .filter((address) => {
      if (!address) {
        return false;
      }
      return true;
    });

  // console.log("baseTokenInfos");
  // const baseTokenInfos = await getBaseTokenInfos(
  //   chainId,
  //   underlyingTokenAddresses
  // );

  //console.log(JSON.stringify(baseTokenInfos));

  const baseTokenInfos = [
    // {
    //   chainId: 1,
    //   address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    //   symbol: "WBTC",
    //   decimals: 8,
    //   name: "Wrapped BTC",
    //   tags: ["base"],
    // },
    // {
    //   chainId: 1,
    //   address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    //   symbol: "USDC",
    //   decimals: 6,
    //   name: "USD Coin",
    //   tags: ["base"],
    // },
    // {
    //   chainId: 1,
    //   address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    //   symbol: "DAI",
    //   decimals: 18,
    //   name: "Dai Stablecoin",
    //   tags: ["base"],
    // },
    // {
    //   chainId: 1,
    //   address: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    //   name: "Curve.fi Factory USD Metapool: Liquity",
    //   decimals: 18,
    //   symbol: "LUSD3CRV-f",
    //   tags: ["curve", "base"],
    //   extensions: {
    //     pool: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    //     poolAssets: [
    //       "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    //       "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    //     ],
    //     addLiquidityFuncSig: "add_liquidity(uint256[2],uint256)",
    //     removeLiquidityFuncSig:
    //       "remove_liquidity_one_coin(uint256,int128,uint256)",
    //   },
    // },
    // {
    //   chainId: 1,
    //   address: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
    //   name: "Curve.fi Factory USD Metapool: Alchemix USD",
    //   decimals: 18,
    //   symbol: "alUSD3CRV-f",
    //   tags: ["curve", "base"],
    //   extensions: {
    //     pool: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
    //     poolAssets: [
    //       "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
    //       "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    //     ],
    //     addLiquidityFuncSig: "add_liquidity(uint256[2],uint256)",
    //     removeLiquidityFuncSig:
    //       "remove_liquidity_one_coin(uint256,int128,uint256)",
    //   },
    // },
    {
      chainId: 1,
      address: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      name: "Curve.fi Factory USD Metapool: Magic Internet Money 3Pool",
      decimals: 18,
      symbol: "MIM-3LP3CRV-f",
      tags: ["curve", "base"],
      extensions: {
        pool: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
        poolAssets: [
          "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
          "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
        ],
        addLiquidityFuncSig: "add_liquidity(uint256[2],uint256)",
        removeLiquidityFuncSig:
          "remove_liquidity_one_coin(uint256,int128,uint256)",
      },
    },
    // {
    //   chainId: 1,
    //   address: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
    //   name: "Curve.fi USD-BTC-ETH",
    //   decimals: 18,
    //   symbol: "crv3crypto",
    //   tags: ["curve", "base"],
    //   extensions: {
    //     pool: "0xD51a44d3FaE010294C616388b506AcdA1bfAAE46",
    //     poolAssets: [
    //       "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //       "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    //       "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    //     ],
    //     addLiquidityFuncSig: "add_liquidity(uint256[3],uint256)",
    //     removeLiquidityFuncSig:
    //       "remove_liquidity_one_coin(uint256,uint256,uint256)",
    //   },
    // },
    // {
    //   chainId: 1,
    //   address: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
    //   name: "Curve.fi USD-BTC-ETH",
    //   decimals: 18,
    //   symbol: "crvTricrypto",
    //   tags: ["curve", "base"],
    //   extensions: {
    //     pool: "0x80466c64868E1ab14a1Ddf27A676C3fcBE638Fe5",
    //     poolAssets: [
    //       "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    //       "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    //       "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    //     ],
    //     addLiquidityFuncSig: "add_liquidity(uint256[3],uint256)",
    //     removeLiquidityFuncSig:
    //       "remove_liquidity_one_coin(uint256,uint256,uint256)",
    //   },
    // },
    {
      chainId: 1,
      address: "0x06325440D014e39736583c165C2963BA99fAf14E",
      name: "Curve.fi ETH/stETH",
      decimals: 18,
      symbol: "steCRV",
      tags: ["curve", "base"],
      extensions: {
        pool: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
        poolAssets: [
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        ],
        addLiquidityFuncSig: "add_liquidity(uint256[2],uint256)",
        removeLiquidityFuncSig:
          "remove_liquidity_one_coin(uint256,int128,uint256)",
      },
    },
    {
      chainId: 1,
      address: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      name: "Curve.fi EURS/sEUR",
      decimals: 18,
      symbol: "eursCRV",
      tags: ["curve", "base"],
      extensions: {
        pool: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
        poolAssets: [
          "0xdB25f211AB05b1c97D595516F45794528a807ad8",
          "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
        ],
        addLiquidityFuncSig: "add_liquidity(uint256[2],uint256)",
        removeLiquidityFuncSig:
          "remove_liquidity_one_coin(uint256,int128,uint256)",
      },
    },
  ] as BaseTokenInfo[];

  if (chainId === 1) {
    console.log("rootTokenInfos");
    const rootTokenInfos = await getRootTokenInfos(
      chainId,
      baseTokenInfos.filter((baseTokenInfo) =>
        baseTokenInfo.tags.some((tag) => tag === TokenTag.CURVE)
      ) as CurveBaseToken[]
    );
    console.log(rootTokenInfos);
  }

  console.log("principalTokenInfos");
  const principalTokenInfos = await getPrincipalTokenInfos(
    chainId,
    trancheFactory,
    safelist
  );

  console.log("assetProxyTokenInfos");
  const assetProxyTokenInfos = await getAssetProxyTokenInfos(
    chainId,
    principalTokenInfos
  );

  console.log("vaultTokenInfos");
  const vaultTokenInfos = await getVaultTokenInfos(
    chainId,
    assetProxyTokenInfos
  );

  console.log("yieldTokenInfos");
  const yieldTokenInfos = await getYieldTokenInfos(
    chainId,
    principalTokenInfos
  );

  console.log("principalPoolTokenInfos");
  const principalPoolTokenInfos = await getPrincipalPoolTokenInfos(
    chainId,
    convergentPoolFactory,
    safelist
  );

  console.log("yieldPoolTokenInfos");
  const yieldPoolTokenInfos = await getYieldPoolTokenInfos(
    chainId,
    baseTokenInfos,
    yieldTokenInfos,
    balancerVault,
    weightedPoolFactory,
    safelist
  );

  const tokenList: TokenList = {
    name,
    logoURI: ELEMENT_LOGO_URI,
    tags: elementTags,
    timestamp: new Date().toISOString(),
    version: {
      // TODO: implement this
      major: 0,
      minor: 0,
      patch: 0,
    },
    tokens: [
      ...baseTokenInfos,
      ...assetProxyTokenInfos,
      ...vaultTokenInfos,
      ...principalTokenInfos,
      ...yieldTokenInfos,
      ...principalPoolTokenInfos,
      ...yieldPoolTokenInfos,
    ],
  };

  const tokenListString = JSON.stringify(tokenList, null, 2);
  console.log(tokenListString);

  // TODO: We have to validate this json schema ourselves before it can be
  // published to the uniswap directory.  For now, just look at this file in
  // vscode and make sure there are no squiggles.
  fs.writeFileSync(outputPath, tokenListString);
}

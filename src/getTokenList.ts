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
import { TagInfo } from "src/types";
import { getVaultTokenInfos } from "src/vaults";
import { getYieldPoolTokenInfos } from "src/weightedPools";
import { getBaseTokenInfos } from "./baseTokens";
import { getPrincipalTokenInfos } from "./principalTokens";
import { getYieldTokenInfos } from "./yieldTokens";

import { ethers } from "ethers";

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

  const etherscanProvider = new ethers.providers.EtherscanProvider(
    chainId,
    process.env.ETHERSCAN_API_KEY
  );

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

  console.log("baseTokenInfos");
  const baseTokenInfos = await getBaseTokenInfos(
    chainId,
    underlyingTokenAddresses,
    etherscanProvider
  );

  //console.log(baseTokenInfos);

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

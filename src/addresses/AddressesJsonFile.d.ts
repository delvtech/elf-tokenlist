export interface AddressesJsonFile {
  chainId: number;
  addresses: {
    balancerVaultAddress: string;
    trancheFactoryAddress: string;
    wbtcAddress: string;
    weightedPoolFactoryAddress: string;
    convergentPoolFactoryAddress: string;
    userProxyContractAddress: string;
    wethAddress: string;
    daiAddress: string;
    usdcAddress: string;
    stecrvAddress: string;
    crvtricryptoAddress: string;
    "lusd3crv-fAddress": string;
  };
  safelist: string[];
}

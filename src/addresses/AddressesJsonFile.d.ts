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
    crv3cryptoAddress: string;
    crvtricryptoAddress: string;
    "lusd3crv-fAddress": string;
    "alusd3crv-fAddress": string;
    "mim-3lp3crv-fAddress": string;
  };
  safelist: string[];
}


/** 
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 *
 * This is the index.ts file that will be compiled to JS and set as the 'main'
 * property in package.json. This makes it possible to use elf-tokenlist as a
 * normal package, ie: import { mainnetTokenList } from 'elf-tokenlist'
 *
 * See scripts/build-index.sh for details.
 *
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 */

import { TokenList } from '@uniswap/token-lists';

export * from './tags';

export const mainnetTokenList: TokenList = {
  "name": "Element",
  "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg",
  "tags": {
    "underlying": {
      "name": "Underlying asset",
      "description": "The base asset of a principal or yield token"
    },
    "eP": {
      "name": "Principal token",
      "description": "Token that represents a deposit of principal into a yield position"
    },
    "eY": {
      "name": "Yield token",
      "description": "Token that represents the yield on a deposit into a yield position"
    },
    "ccpool": {
      "name": "ConvergentCurve pool",
      "description": "Token that represents the balancer pool for Principal tokens"
    },
    "wpool": {
      "name": "Weighted pool",
      "description": "Token that represents the balancer pool for Yield tokens"
    },
    "assetproxy": {
      "name": "Vault asset proxy",
      "description": "Token that wraps a yield position, ie: Yearn vault asset proxy"
    },
    "vault": {
      "name": "Vault",
      "description": "The yield position, ie: Yearn yvcrvLUSD"
    }
  },
  "timestamp": "2021-11-02T16:39:48.189Z",
  "version": {
    "major": 0,
    "minor": 0,
    "patch": 0
  },
  "tokens": [
    {
      "chainId": 1,
      "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "symbol": "WBTC",
      "decimals": 8,
      "name": "Wrapped BTC",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "symbol": "USDC",
      "decimals": 6,
      "name": "USD Coin",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "symbol": "DAI",
      "decimals": 18,
      "name": "Dai Stablecoin",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
      "symbol": "LUSD3CRV-f",
      "decimals": 18,
      "name": "Curve.fi Factory USD Metapool: Liquity",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      "symbol": "alUSD3CRV-f",
      "decimals": 18,
      "name": "Curve.fi Factory USD Metapool: Alchemix USD",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
      "symbol": "MIM-3LP3CRV-f",
      "decimals": 18,
      "name": "Curve.fi Factory USD Metapool: Magic Internet Money 3Pool",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
      "symbol": "crv3crypto",
      "decimals": 18,
      "name": "Curve.fi USD-BTC-ETH",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
      "symbol": "crvTricrypto",
      "decimals": 18,
      "name": "Curve.fi USD-BTC-ETH",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x06325440D014e39736583c165C2963BA99fAf14E",
      "symbol": "steCRV",
      "decimals": 18,
      "name": "Curve.fi ETH/stETH",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      "symbol": "eursCRV",
      "decimals": 18,
      "name": "Curve.fi EURS/sEUR",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 1,
      "address": "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6",
      "symbol": "yvCurveLUSD",
      "decimals": 18,
      "name": "Element Wrapped Yearn Curve LUSD",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6"
      }
    },
    {
      "chainId": 1,
      "address": "0x97278Ce17D4860f8f49afC6E4c1C5AcBf2584cE5",
      "symbol": "yvCrvTriCrypto",
      "decimals": 18,
      "name": "Element Wrapped Yearn Curve TriCrypto",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x3D980E50508CFd41a13837A60149927a11c03731"
      }
    },
    {
      "chainId": 1,
      "address": "0xB3295e739380BD68de96802F7c4Dba4e54477206",
      "symbol": "yvcrvSTETH",
      "decimals": 18,
      "name": "element yvcrvSTETH",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xdCD90C7f6324cfa40d7169ef80b12031770B4325"
      }
    },
    {
      "chainId": 1,
      "address": "0x21BbC083362022aB8D7e42C18c47D484cc95C193",
      "symbol": "yvDAI",
      "decimals": 18,
      "name": "element yvDAI",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xdA816459F1AB5631232FE5e97a05BBBb94970c95"
      }
    },
    {
      "chainId": 1,
      "address": "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0",
      "symbol": "yvUSDC",
      "decimals": 6,
      "name": "element yvUSDC",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9"
      }
    },
    {
      "chainId": 1,
      "address": "0x4F424B26c7c659F198797Bd87282BF602F543521",
      "symbol": "yvcrv3crypto",
      "decimals": 18,
      "name": "element yvcrv3crypto",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xE537B5cc158EB71037D4125BDD7538421981E6AA"
      }
    },
    {
      "chainId": 1,
      "address": "0x8D9487b81e0fEdcd2D8Cab91885756742375CDC5",
      "symbol": "yvWBTC",
      "decimals": 8,
      "name": "element yvWBTC",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E"
      }
    },
    {
      "chainId": 1,
      "address": "0x3b5Dbd685C7ad66f8D3A82E2134320eD74DA4Af2",
      "symbol": "yvCurve-alUSD",
      "decimals": 18,
      "name": "element yvCurve-alUSD",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8"
      }
    },
    {
      "chainId": 1,
      "address": "0x270f63b67FF1Ca770D60684366B009A566170AdD",
      "symbol": "yvCurve-MIM",
      "decimals": 18,
      "name": "element yvCurve-MIM",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8"
      }
    },
    {
      "chainId": 1,
      "address": "0xb601610553071209443Fbae6E71b8dE4Ba78643b",
      "symbol": "yvCurve-EURS",
      "decimals": 18,
      "name": "element yvCurve-EURS",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A"
      }
    },
    {
      "chainId": 1,
      "address": "0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6",
      "symbol": "yvCurve-LUSD",
      "decimals": 18,
      "name": "Curve LUSD Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0x3D980E50508CFd41a13837A60149927a11c03731",
      "symbol": "yvCurve-triCrypto",
      "decimals": 18,
      "name": "Curve triCrypto Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
      "symbol": "yvCurve-stETH",
      "decimals": 18,
      "name": "Curve stETH Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
      "symbol": "yvDAI",
      "decimals": 18,
      "name": "DAI yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9",
      "symbol": "yvUSDC",
      "decimals": 6,
      "name": "USDC yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0xE537B5cc158EB71037D4125BDD7538421981E6AA",
      "symbol": "yvCurve-3Crypto",
      "decimals": 18,
      "name": "Curve 3Crypto Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
      "symbol": "yvWBTC",
      "decimals": 8,
      "name": "WBTC yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8",
      "symbol": "yvCurve-alUSD",
      "decimals": 18,
      "name": "Curve alUSD Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8",
      "symbol": "yvCurve-MIM",
      "decimals": 18,
      "name": "Curve MIM Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A",
      "symbol": "yvCurve-EURS",
      "decimals": 18,
      "name": "Curve EURS Pool yVault",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 1,
      "address": "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E",
      "symbol": "ePyvCurveLUSD-28SEP21",
      "decimals": 18,
      "extensions": {
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "position": "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6",
        "interestToken": "0xBabD64a87881d8df7680907fcde176FF11Fa0292",
        "unlockTimestamp": 1632834462,
        "createdAtTimestamp": 1625058479
      },
      "name": "LUSD3CRV-f Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF",
      "symbol": "ePyvCurveLUSD-27DEC21",
      "decimals": 18,
      "extensions": {
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "position": "0x53b1aEAa018da00b4F458Cc13d40eB3e8d1B85d6",
        "interestToken": "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2",
        "unlockTimestamp": 1640620258,
        "createdAtTimestamp": 1625068341
      },
      "name": "LUSD3CRV-f Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C",
      "symbol": "ePyvCrvTriCrypto-15AUG21",
      "decimals": 18,
      "extensions": {
        "underlying": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
        "position": "0x97278Ce17D4860f8f49afC6E4c1C5AcBf2584cE5",
        "interestToken": "0xC080f19D9E7CCB6ef2096DFa08570e0057490940",
        "unlockTimestamp": 1628997564,
        "createdAtTimestamp": 1625571539
      },
      "name": "crvTricrypto Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C",
      "symbol": "ePyvcrvSTETH-15OCT21",
      "decimals": 18,
      "extensions": {
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "position": "0xB3295e739380BD68de96802F7c4Dba4e54477206",
        "interestToken": "0x94046274B5aA816aB236A9Eab42b5563B56E1931",
        "unlockTimestamp": 1634325622,
        "createdAtTimestamp": 1626117693
      },
      "name": "steCRV Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963",
      "symbol": "ePyvDAI-16OCT21",
      "decimals": 18,
      "extensions": {
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "position": "0x21BbC083362022aB8D7e42C18c47D484cc95C193",
        "interestToken": "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7",
        "unlockTimestamp": 1634346845,
        "createdAtTimestamp": 1626829159
      },
      "name": "DAI Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797",
      "symbol": "ePyvUSDC-29OCT21",
      "decimals": 6,
      "extensions": {
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "position": "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0",
        "interestToken": "0x5D67C1c829AB93867d865CF2008DEb45df67044f",
        "unlockTimestamp": 1635528110,
        "createdAtTimestamp": 1627924988
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729",
      "symbol": "ePyvcrv3crypto-12NOV21",
      "decimals": 18,
      "extensions": {
        "underlying": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
        "position": "0x4F424B26c7c659F198797Bd87282BF602F543521",
        "interestToken": "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD",
        "unlockTimestamp": 1636746083,
        "createdAtTimestamp": 1628797282
      },
      "name": "crv3crypto Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x6BF924137E769C0A5c443dcE6eC885552d31D579",
      "symbol": "ePyvWBTC-26NOV21",
      "decimals": 8,
      "extensions": {
        "underlying": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "position": "0x8D9487b81e0fEdcd2D8Cab91885756742375CDC5",
        "interestToken": "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560",
        "unlockTimestamp": 1637941844,
        "createdAtTimestamp": 1630425060
      },
      "name": "WBTC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x8a2228705ec979961F0e16df311dEbcf097A2766",
      "symbol": "ePyvUSDC-28JAN22",
      "decimals": 6,
      "extensions": {
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "position": "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0",
        "interestToken": "0xF1294E805B992320A3515682c6aB0Fe6251067E5",
        "unlockTimestamp": 1643382476,
        "createdAtTimestamp": 1631632129
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x720465A4AE6547348056885060EEB51F9CAdb571",
      "symbol": "ePyvcrvSTETH-28JAN22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "position": "0xB3295e739380BD68de96802F7c4Dba4e54477206",
        "interestToken": "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973",
        "unlockTimestamp": 1643382514,
        "createdAtTimestamp": 1631804744
      },
      "name": "steCRV Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x449D7C2e096E9f867339078535b15440d42F78E8",
      "symbol": "ePyvDAI-28JAN22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "position": "0x21BbC083362022aB8D7e42C18c47D484cc95C193",
        "interestToken": "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985",
        "unlockTimestamp": 1643382446,
        "createdAtTimestamp": 1632229871
      },
      "name": "DAI Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d",
      "symbol": "ePyvCurve-alUSD-28JAN22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
        "position": "0x3b5Dbd685C7ad66f8D3A82E2134320eD74DA4Af2",
        "interestToken": "0x782BE9330969AA7b9DB56382752a1364580f199F",
        "unlockTimestamp": 1643382460,
        "createdAtTimestamp": 1632836406
      },
      "name": "alUSD3CRV-f Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x418De6227499181B045CAdf554030722E460881a",
      "symbol": "ePyvCurve-MIM-11FEB22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
        "position": "0x270f63b67FF1Ca770D60684366B009A566170AdD",
        "interestToken": "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5",
        "unlockTimestamp": 1644601070,
        "createdAtTimestamp": 1634061105
      },
      "name": "MIM-3LP3CRV-f Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503",
      "symbol": "ePyvCurve-EURS-11FEB22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
        "position": "0xb601610553071209443Fbae6E71b8dE4Ba78643b",
        "interestToken": "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87",
        "unlockTimestamp": 1644604852,
        "createdAtTimestamp": 1634236922
      },
      "name": "eursCRV Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E",
      "symbol": "ePyvcrvSTETH-15APR22",
      "decimals": 18,
      "extensions": {
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "position": "0xB3295e739380BD68de96802F7c4Dba4e54477206",
        "interestToken": "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD",
        "unlockTimestamp": 1650025565,
        "createdAtTimestamp": 1634646386
      },
      "name": "steCRV Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x76a34D72b9CF97d972fB0e390eB053A37F211c74",
      "symbol": "ePyvUSDC-17DEC21",
      "decimals": 6,
      "extensions": {
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "position": "0xdEa04Ffc66ECD7bf35782C70255852B34102C3b0",
        "interestToken": "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7",
        "unlockTimestamp": 1639727861,
        "createdAtTimestamp": 1635863922
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xBabD64a87881d8df7680907fcde176FF11Fa0292",
      "symbol": "eYyvCurveLUSD-28SEP21",
      "decimals": 18,
      "name": "LUSD3CRV-f Yield Token",
      "extensions": {
        "tranche": "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "unlockTimestamp": 1632834462
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2",
      "symbol": "eYyvCurveLUSD-27DEC21",
      "decimals": 18,
      "name": "LUSD3CRV-f Yield Token",
      "extensions": {
        "tranche": "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "unlockTimestamp": 1640620258
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xC080f19D9E7CCB6ef2096DFa08570e0057490940",
      "symbol": "eYyvCrvTriCrypto-15AUG21",
      "decimals": 18,
      "name": "crvTricrypto Yield Token",
      "extensions": {
        "tranche": "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C",
        "underlying": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
        "unlockTimestamp": 1628997564
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x94046274B5aA816aB236A9Eab42b5563B56E1931",
      "symbol": "eYyvcrvSTETH-15OCT21",
      "decimals": 18,
      "name": "steCRV Yield Token",
      "extensions": {
        "tranche": "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "unlockTimestamp": 1634325622
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7",
      "symbol": "eYyvDAI-16OCT21",
      "decimals": 18,
      "name": "DAI Yield Token",
      "extensions": {
        "tranche": "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "unlockTimestamp": 1634346845
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x5D67C1c829AB93867d865CF2008DEb45df67044f",
      "symbol": "eYyvUSDC-29OCT21",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "unlockTimestamp": 1635528110
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD",
      "symbol": "eYyvcrv3crypto-12NOV21",
      "decimals": 18,
      "name": "crv3crypto Yield Token",
      "extensions": {
        "tranche": "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729",
        "underlying": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
        "unlockTimestamp": 1636746083
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560",
      "symbol": "eYyvWBTC-26NOV21",
      "decimals": 8,
      "name": "WBTC Yield Token",
      "extensions": {
        "tranche": "0x6BF924137E769C0A5c443dcE6eC885552d31D579",
        "underlying": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "unlockTimestamp": 1637941844
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xF1294E805B992320A3515682c6aB0Fe6251067E5",
      "symbol": "eYyvUSDC-28JAN22",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0x8a2228705ec979961F0e16df311dEbcf097A2766",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "unlockTimestamp": 1643382476
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973",
      "symbol": "eYyvcrvSTETH-28JAN22",
      "decimals": 18,
      "name": "steCRV Yield Token",
      "extensions": {
        "tranche": "0x720465A4AE6547348056885060EEB51F9CAdb571",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "unlockTimestamp": 1643382514
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985",
      "symbol": "eYyvDAI-28JAN22",
      "decimals": 18,
      "name": "DAI Yield Token",
      "extensions": {
        "tranche": "0x449D7C2e096E9f867339078535b15440d42F78E8",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "unlockTimestamp": 1643382446
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x782BE9330969AA7b9DB56382752a1364580f199F",
      "symbol": "eYyvCurve-alUSD-28JAN22",
      "decimals": 18,
      "name": "alUSD3CRV-f Yield Token",
      "extensions": {
        "tranche": "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d",
        "underlying": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
        "unlockTimestamp": 1643382460
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5",
      "symbol": "eYyvCurve-MIM-11FEB22",
      "decimals": 18,
      "name": "MIM-3LP3CRV-f Yield Token",
      "extensions": {
        "tranche": "0x418De6227499181B045CAdf554030722E460881a",
        "underlying": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
        "unlockTimestamp": 1644601070
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87",
      "symbol": "eYyvCurve-EURS-11FEB22",
      "decimals": 18,
      "name": "eursCRV Yield Token",
      "extensions": {
        "tranche": "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503",
        "underlying": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
        "unlockTimestamp": 1644604852
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD",
      "symbol": "eYyvcrvSTETH-15APR22",
      "decimals": 18,
      "name": "steCRV Yield Token",
      "extensions": {
        "tranche": "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "unlockTimestamp": 1650025565
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7",
      "symbol": "eYyvUSDC-17DEC21",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0x76a34D72b9CF97d972fB0e390eB053A37F211c74",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "unlockTimestamp": 1639727861
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 1,
      "address": "0xA8D4433BAdAa1A35506804B43657B0694deA928d",
      "symbol": "LPePyvCurveLUSD-28SEP21",
      "decimals": 18,
      "extensions": {
        "bond": "0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "poolId": "0xa8d4433badaa1a35506804b43657b0694dea928d00020000000000000000005e",
        "unitSeconds": 504911232,
        "expiration": 1632834462,
        "createdAtTimestamp": 1625058716
      },
      "name": "LP Element Principal Token yvCurveLUSD-28SEP21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x893B30574BF183d69413717f30b17062eC9DFD8b",
      "symbol": "LPePyvCurveLUSD-27DEC21",
      "decimals": 18,
      "extensions": {
        "bond": "0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "poolId": "0x893b30574bf183d69413717f30b17062ec9dfd8b000200000000000000000061",
        "unitSeconds": 757366848,
        "expiration": 1640620258,
        "createdAtTimestamp": 1625068680
      },
      "name": "LP Element Principal Token yvCurveLUSD-27DEC21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x3A693EB97b500008d4Bb6258906f7Bbca1D09Cc5",
      "symbol": "LPePyvCrvTriCrypto-15AUG21",
      "decimals": 18,
      "extensions": {
        "bond": "0x237535Da7e2f0aBa1b68262ABCf7C4e60B42600C",
        "underlying": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
        "poolId": "0x3a693eb97b500008d4bb6258906f7bbca1d09cc5000200000000000000000065",
        "unitSeconds": 194390824,
        "expiration": 1628997564,
        "createdAtTimestamp": 1625578299
      },
      "name": "LP Element Principal Token yvCrvTriCrypto-15AUG21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xce16E7ed7654a3453E8FaF748f2c82E57069278f",
      "symbol": "LPePyvcrvSTETH-15OCT21",
      "decimals": 18,
      "extensions": {
        "bond": "0x26941C63F4587796aBE199348ecd3d7C44F9aE0C",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "poolId": "0xce16e7ed7654a3453e8faf748f2c82e57069278f00020000000000000000006d",
        "unitSeconds": 823636447,
        "expiration": 1634325622,
        "createdAtTimestamp": 1626118091
      },
      "name": "LP Element Principal Token yvcrvSTETH-15OCT21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x71628c66C502F988Fbb9e17081F2bD14e361FAF4",
      "symbol": "LPePyvDAI-16OCT21",
      "decimals": 18,
      "extensions": {
        "bond": "0xb1cc77e701de60FE246607565CF7eDC9D9b6b963",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "poolId": "0x71628c66c502f988fbb9e17081f2bd14e361faf4000200000000000000000078",
        "unitSeconds": 700248765,
        "expiration": 1634346845,
        "createdAtTimestamp": 1626829410
      },
      "name": "LP Element Principal Token yvDAI-16OCT21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x787546Bf2c05e3e19e2b6BDE57A203da7f682efF",
      "symbol": "LPePyvUSDC-29OCT21",
      "decimals": 18,
      "extensions": {
        "bond": "0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "poolId": "0x787546bf2c05e3e19e2b6bde57a203da7f682eff00020000000000000000007c",
        "unitSeconds": 583803612,
        "expiration": 1635528110,
        "createdAtTimestamp": 1627936276
      },
      "name": "LP Element Principal Token yvUSDC-29OCT21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xF6dc4640D2783654BeF88E0dF3fb0F051f0DfC1A",
      "symbol": "LPePyvcrv3crypto-12NOV21",
      "decimals": 18,
      "extensions": {
        "bond": "0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729",
        "underlying": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
        "poolId": "0xf6dc4640d2783654bef88e0df3fb0f051f0dfc1a00020000000000000000007e",
        "unitSeconds": 140112867,
        "expiration": 1636746083,
        "createdAtTimestamp": 1628797677
      },
      "name": "LP Element Principal Token yvcrv3crypto-12NOV21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x4Db9024fc9F477134e00Da0DA3c77DE98d9836aC",
      "symbol": "LPePyvWBTC-26NOV21",
      "decimals": 18,
      "extensions": {
        "bond": "0x6BF924137E769C0A5c443dcE6eC885552d31D579",
        "underlying": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "poolId": "0x4db9024fc9f477134e00da0da3c77de98d9836ac000200000000000000000086",
        "unitSeconds": 1000355378,
        "expiration": 1637941844,
        "createdAtTimestamp": 1630433657
      },
      "name": "LP Element Principal Token yvWBTC-26NOV21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x10a2F8bd81Ee2898D7eD18fb8f114034a549FA59",
      "symbol": "LPePyvUSDC-28JAN22",
      "decimals": 18,
      "extensions": {
        "bond": "0x8a2228705ec979961F0e16df311dEbcf097A2766",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "poolId": "0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090",
        "unitSeconds": 779456714,
        "expiration": 1643382476,
        "createdAtTimestamp": 1631632569
      },
      "name": "LP Element Principal Token yvUSDC-28JAN22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x544c823194218f0640daE8291c1f59752d25faE3",
      "symbol": "LPePyvcrvSTETH-28JAN22",
      "decimals": 18,
      "extensions": {
        "bond": "0x720465A4AE6547348056885060EEB51F9CAdb571",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "poolId": "0x544c823194218f0640dae8291c1f59752d25fae3000200000000000000000093",
        "unitSeconds": 583488042,
        "expiration": 1643382514,
        "createdAtTimestamp": 1631806540
      },
      "name": "LP Element Principal Token yvcrvSTETH-28JAN22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xA47D1251CF21AD42685Cc6B8B3a186a73Dbd06cf",
      "symbol": "LPePyvDAI-28JAN22",
      "decimals": 18,
      "extensions": {
        "bond": "0x449D7C2e096E9f867339078535b15440d42F78E8",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "poolId": "0xa47d1251cf21ad42685cc6b8b3a186a73dbd06cf000200000000000000000097",
        "unitSeconds": 778194436,
        "expiration": 1643382446,
        "createdAtTimestamp": 1632233996
      },
      "name": "LP Element Principal Token yvDAI-28JAN22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xC9AD279994980F8DF348b526901006972509677F",
      "symbol": "LPePyvCurve-alUSD-28JAN22",
      "decimals": 18,
      "extensions": {
        "bond": "0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d",
        "underlying": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
        "poolId": "0xc9ad279994980f8df348b526901006972509677f00020000000000000000009e",
        "unitSeconds": 350282167,
        "expiration": 1643382460,
        "createdAtTimestamp": 1632836762
      },
      "name": "LP Element Principal Token yvCurve-alUSD-28JAN22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x09b1b33BaD0e87454ff05696b1151BFbD208a43F",
      "symbol": "LPePyvCurve-MIM-11FEB22",
      "decimals": 18,
      "extensions": {
        "bond": "0x418De6227499181B045CAdf554030722E460881a",
        "underlying": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
        "poolId": "0x09b1b33bad0e87454ff05696b1151bfbd208a43f0002000000000000000000a6",
        "unitSeconds": 350282167,
        "expiration": 1644601070,
        "createdAtTimestamp": 1634168402
      },
      "name": "LP Element Principal Token yvCurve-MIM-11FEB22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x6AC02eCD0c2A23B11f9AFb3b3Aaf237169475cac",
      "symbol": "LPePyvCurve-EURS-11FEB22",
      "decimals": 18,
      "extensions": {
        "bond": "0x2A8f5649DE50462fF9699Ccc75A2Fb0b53447503",
        "underlying": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
        "poolId": "0x6ac02ecd0c2a23b11f9afb3b3aaf237169475cac0002000000000000000000a8",
        "unitSeconds": 349966598,
        "expiration": 1644604852,
        "createdAtTimestamp": 1634237343
      },
      "name": "LP Element Principal Token yvCurve-EURS-11FEB22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xb03C6B351A283bc1Cd26b9cf6d7B0c4556013bDb",
      "symbol": "LPePyvcrvSTETH-15APR22",
      "decimals": 18,
      "extensions": {
        "bond": "0x2361102893CCabFb543bc55AC4cC8d6d0824A67E",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "poolId": "0xb03c6b351a283bc1cd26b9cf6d7b0c4556013bdb0002000000000000000000ab",
        "unitSeconds": 1166976085,
        "expiration": 1650025565,
        "createdAtTimestamp": 1634646686
      },
      "name": "LP Element Principal Token yvcrvSTETH-15APR22",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x90CA5cEf5B29342b229Fb8AE2DB5d8f4F894D652",
      "symbol": "LPePyvUSDC-17DEC21",
      "decimals": 18,
      "extensions": {
        "bond": "0x76a34D72b9CF97d972fB0e390eB053A37F211c74",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "poolId": "0x90ca5cef5b29342b229fb8ae2db5d8f4f894d6520002000000000000000000b5",
        "unitSeconds": 778194436,
        "expiration": 1639727861,
        "createdAtTimestamp": 1635866643
      },
      "name": "LP Element Principal Token yvUSDC-17DEC21",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xDe620bb8BE43ee54d7aa73f8E99A7409Fe511084",
      "symbol": "LPeYyvCurveLUSD-28SEP21",
      "decimals": 18,
      "extensions": {
        "poolId": "0xde620bb8be43ee54d7aa73f8e99a7409fe51108400020000000000000000005d",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "interestToken": "0xBabD64a87881d8df7680907fcde176FF11Fa0292",
        "createdAtTimestamp": 1625058649,
        "expiration": 1632834462
      },
      "name": "LP Element Yield Token yvCurveLUSD-28SEP21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x67F8FCb9D3c463da05DE1392EfDbB2A87F8599Ea",
      "symbol": "LPeYyvCurveLUSD-27DEC21",
      "decimals": 18,
      "extensions": {
        "poolId": "0x67f8fcb9d3c463da05de1392efdbb2a87f8599ea000200000000000000000060",
        "underlying": "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
        "interestToken": "0xBA8C8B50Ecd5b580f464f7611b8549fFeE4d8da2",
        "createdAtTimestamp": 1625068623,
        "expiration": 1640620258
      },
      "name": "LP Element Yield Token yvCurveLUSD-27DEC21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xF94A7Df264A2ec8bCEef2cFE54d7cA3f6C6DFC7a",
      "symbol": "LPeYyvCrvTriCrypto-15AUG21",
      "decimals": 18,
      "extensions": {
        "poolId": "0xf94a7df264a2ec8bceef2cfe54d7ca3f6c6dfc7a000200000000000000000064",
        "underlying": "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF",
        "interestToken": "0xC080f19D9E7CCB6ef2096DFa08570e0057490940",
        "createdAtTimestamp": 1625577740,
        "expiration": 1628997564
      },
      "name": "LP Element Yield Token yvCrvTriCrypto-15AUG21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xD5D7bc115B32ad1449C6D0083E43C87be95F2809",
      "symbol": "LPeYyvcrvSTETH-15OCT21",
      "decimals": 18,
      "extensions": {
        "poolId": "0xd5d7bc115b32ad1449c6d0083e43c87be95f280900020000000000000000006c",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "interestToken": "0x94046274B5aA816aB236A9Eab42b5563B56E1931",
        "createdAtTimestamp": 1626118013,
        "expiration": 1634325622
      },
      "name": "LP Element Yield Token yvcrvSTETH-15OCT21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xE54B3F5c444a801e61BECDCa93e74CdC1C4C1F90",
      "symbol": "LPeYyvDAI-16OCT21",
      "decimals": 18,
      "extensions": {
        "poolId": "0xe54b3f5c444a801e61becdca93e74cdc1c4c1f90000200000000000000000077",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "interestToken": "0xA1Cc9BBcd3731A9fd43E1F1416f9B6Bf824F37D7",
        "createdAtTimestamp": 1626829372,
        "expiration": 1634346845
      },
      "name": "LP Element Yield Token yvDAI-16OCT21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x2D6e3515C8b47192Ca3913770fa741d3C4Dac354",
      "symbol": "LPeYyvUSDC-29OCT21",
      "decimals": 18,
      "extensions": {
        "poolId": "0x2d6e3515c8b47192ca3913770fa741d3c4dac35400020000000000000000007b",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "interestToken": "0x5D67C1c829AB93867d865CF2008DEb45df67044f",
        "createdAtTimestamp": 1627928953,
        "expiration": 1635528110
      },
      "name": "LP Element Yield Token yvUSDC-29OCT21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xd16847480D6bc218048CD31Ad98b63CC34e5c2bF",
      "symbol": "LPeYyvcrv3crypto-12NOV21",
      "decimals": 18,
      "extensions": {
        "poolId": "0xd16847480d6bc218048cd31ad98b63cc34e5c2bf00020000000000000000007d",
        "underlying": "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
        "interestToken": "0x4f4500B3885bC72199373aBfE7aDEfd0366BAfeD",
        "createdAtTimestamp": 1628797608,
        "expiration": 1636746083
      },
      "name": "LP Element Yield Token yvcrv3crypto-12NOV21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x7320d680Ca9BCE8048a286f00A79A2c9f8DCD7b3",
      "symbol": "LPeYyvWBTC-26NOV21",
      "decimals": 18,
      "extensions": {
        "poolId": "0x7320d680ca9bce8048a286f00a79a2c9f8dcd7b3000200000000000000000085",
        "underlying": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "interestToken": "0x3b32F63c1e0FB810f0a06814Ead1D4431B237560",
        "createdAtTimestamp": 1630433475,
        "expiration": 1637941844
      },
      "name": "LP Element Yield Token yvWBTC-26NOV21",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x9e030b67a8384cbba09D5927533Aa98010C87d91",
      "symbol": "LPeYyvUSDC-28JAN22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x9e030b67a8384cbba09d5927533aa98010c87d9100020000000000000000008f",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "interestToken": "0xF1294E805B992320A3515682c6aB0Fe6251067E5",
        "createdAtTimestamp": 1631632476,
        "expiration": 1643382476
      },
      "name": "LP Element Yield Token yvUSDC-28JAN22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x4212bE3C7b255bA4B29705573ABD023cdcE21542",
      "symbol": "LPeYyvcrvSTETH-28JAN22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x4212be3c7b255ba4b29705573abd023cdce21542000200000000000000000092",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "interestToken": "0xaF5D6d2E724F43769FA9E44284F0433A8F5Be973",
        "createdAtTimestamp": 1631804977,
        "expiration": 1643382514
      },
      "name": "LP Element Yield Token yvcrvSTETH-28JAN22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0xB70c25D96EF260eA07F650037Bf68F5d6583885e",
      "symbol": "LPeYyvDAI-28JAN22",
      "decimals": 18,
      "extensions": {
        "poolId": "0xb70c25d96ef260ea07f650037bf68f5d6583885e000200000000000000000096",
        "underlying": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "interestToken": "0xF6d2699b035FC8fD5E023D4a6Da216112ad8A985",
        "createdAtTimestamp": 1632233778,
        "expiration": 1643382446
      },
      "name": "LP Element Yield Token yvDAI-28JAN22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x802d0f2f4b5f1fb5BfC9b2040a703c1464e1D4CB",
      "symbol": "LPeYyvCurve-alUSD-28JAN22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x802d0f2f4b5f1fb5bfc9b2040a703c1464e1d4cb00020000000000000000009d",
        "underlying": "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
        "interestToken": "0x782BE9330969AA7b9DB56382752a1364580f199F",
        "createdAtTimestamp": 1632836663,
        "expiration": 1643382460
      },
      "name": "LP Element Yield Token yvCurve-alUSD-28JAN22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x1D310a6238e11c8BE91D83193C88A99eB66279bE",
      "symbol": "LPeYyvCurve-MIM-11FEB22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x1d310a6238e11c8be91d83193c88a99eb66279be0002000000000000000000a2",
        "underlying": "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
        "interestToken": "0x8c981f68015D8EB13883BFd25aaF4b7c05ec7dF5",
        "createdAtTimestamp": 1634062987,
        "expiration": 1644601070
      },
      "name": "LP Element Yield Token yvCurve-MIM-11FEB22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x5fA3ce1fB47bC8A29B5C02e2e7167799BBAf5F41",
      "symbol": "LPeYyvCurve-EURS-11FEB22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x5fa3ce1fb47bc8a29b5c02e2e7167799bbaf5f410002000000000000000000a7",
        "underlying": "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
        "interestToken": "0x1ac5d65a987d448b0Ecfe7E39017C3EC516d1D87",
        "createdAtTimestamp": 1634237163,
        "expiration": 1644604852
      },
      "name": "LP Element Yield Token yvCurve-EURS-11FEB22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x062F38735AAC32320DB5e2DBBEb07968351D7C72",
      "symbol": "LPeYyvcrvSTETH-15APR22",
      "decimals": 18,
      "extensions": {
        "poolId": "0x062f38735aac32320db5e2dbbeb07968351d7c720002000000000000000000ac",
        "underlying": "0x06325440D014e39736583c165C2963BA99fAf14E",
        "interestToken": "0xEb1a6C6eA0CD20847150c27b5985fA198b2F90bD",
        "createdAtTimestamp": 1634672904,
        "expiration": 1650025565
      },
      "name": "LP Element Yield Token yvcrvSTETH-15APR22",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 1,
      "address": "0x7C9cF12d783821d5C63d8E9427aF5C44bAd92445",
      "symbol": "LPeYyvUSDC-17DEC21",
      "decimals": 18,
      "extensions": {
        "poolId": "0x7c9cf12d783821d5c63d8e9427af5c44bad924450002000000000000000000b4",
        "underlying": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "interestToken": "0x33Dde19C163cDccE4E5a81f04a2Af561b9Ef58d7",
        "createdAtTimestamp": 1635864294,
        "expiration": 1639727861
      },
      "name": "LP Element Yield Token yvUSDC-17DEC21",
      "tags": [
        "wpool"
      ]
    }
  ]
};
export const goerliTokenList: TokenList = {
  "name": "Element",
  "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg",
  "tags": {
    "underlying": {
      "name": "Underlying asset",
      "description": "The base asset of a principal or yield token"
    },
    "eP": {
      "name": "Principal token",
      "description": "Token that represents a deposit of principal into a yield position"
    },
    "eY": {
      "name": "Yield token",
      "description": "Token that represents the yield on a deposit into a yield position"
    },
    "ccpool": {
      "name": "ConvergentCurve pool",
      "description": "Token that represents the balancer pool for Principal tokens"
    },
    "wpool": {
      "name": "Weighted pool",
      "description": "Token that represents the balancer pool for Yield tokens"
    },
    "assetproxy": {
      "name": "Vault asset proxy",
      "description": "Token that wraps a yield position, ie: Yearn vault asset proxy"
    },
    "vault": {
      "name": "Vault",
      "description": "The yield position, ie: Yearn yvcrvLUSD"
    }
  },
  "timestamp": "2021-11-02T16:38:52.810Z",
  "version": {
    "major": 0,
    "minor": 0,
    "patch": 0
  },
  "tokens": [
    {
      "chainId": 5,
      "address": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
      "symbol": "WETH",
      "decimals": 18,
      "name": "Wrapped Ethereum",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 5,
      "address": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
      "symbol": "USDC",
      "decimals": 6,
      "name": "USD Coin",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 5,
      "address": "0x5bD768CCE8C529CDF23B136bB486a81f64985B92",
      "symbol": "DAI",
      "decimals": 18,
      "name": "DAI Stablecoin",
      "tags": [
        "underlying"
      ]
    },
    {
      "chainId": 5,
      "address": "0x6F643Ba6894D8C50c476A3539e1D1690B2194018",
      "symbol": "eyvCurve-stETH",
      "decimals": 18,
      "name": "Element Yearn WETH",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0xdD82595F5eB0e7477D7432B24E44be7c0252bbf1"
      }
    },
    {
      "chainId": 5,
      "address": "0x814C447a9F58A2b823504Fe2775bA48c843925B6",
      "symbol": "eyvUSDC",
      "decimals": 6,
      "name": "Element Yearn USDC",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x23c3C6C06d7684207fB09076914A15B16aba02c5"
      }
    },
    {
      "chainId": 5,
      "address": "0x8dc82c95B8901Db35390Aa4096B643d7724F278D",
      "symbol": "eyvDAI",
      "decimals": 18,
      "name": "Element Yearn DAI",
      "tags": [
        "assetproxy"
      ],
      "extensions": {
        "vault": "0x851A97B6520c582dAB33F722Bd9C5939Ea349546"
      }
    },
    {
      "chainId": 5,
      "address": "0xdD82595F5eB0e7477D7432B24E44be7c0252bbf1",
      "symbol": "yvCurve-stETH",
      "decimals": 18,
      "name": "Yearn WETH",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 5,
      "address": "0x23c3C6C06d7684207fB09076914A15B16aba02c5",
      "symbol": "yvUSDC",
      "decimals": 6,
      "name": "Yearn USDC",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 5,
      "address": "0x851A97B6520c582dAB33F722Bd9C5939Ea349546",
      "symbol": "yvDAI",
      "decimals": 18,
      "name": "Yearn DAI",
      "tags": [
        "vault"
      ]
    },
    {
      "chainId": 5,
      "address": "0x44eecA004b2612d131EDA7dA2b9d986E7fED562e",
      "symbol": "ePyvCurve-stETH",
      "decimals": 18,
      "extensions": {
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "position": "0x6F643Ba6894D8C50c476A3539e1D1690B2194018",
        "interestToken": "0x91dDF92af38Afac1B59F450dDb94ddab10a11490",
        "unlockTimestamp": 1621010937,
        "createdAtTimestamp": 1620385952
      },
      "name": "ETH Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x89d66Ad25F3A723D606B78170366d8da9870A879",
      "symbol": "ePyvCurve-stETH",
      "decimals": 18,
      "extensions": {
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "position": "0x6F643Ba6894D8C50c476A3539e1D1690B2194018",
        "interestToken": "0xBf4B5cB5ca49B1eF6B02615a94980723f6484899",
        "unlockTimestamp": 1628210937,
        "createdAtTimestamp": 1620385967
      },
      "name": "ETH Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x80272c960b862B4d6542CDB7338Ad1f727E0D18d",
      "symbol": "ePyvUSDC",
      "decimals": 6,
      "extensions": {
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "position": "0x814C447a9F58A2b823504Fe2775bA48c843925B6",
        "interestToken": "0x2c637c5142eE4F31A1a78Ad3DF012fc242F6CAe6",
        "unlockTimestamp": 1628211057,
        "createdAtTimestamp": 1620386087
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x7D64aD2b83a62C0d02514a43E5B4582C671E5F72",
      "symbol": "ePyvUSDC",
      "decimals": 6,
      "extensions": {
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "position": "0x814C447a9F58A2b823504Fe2775bA48c843925B6",
        "interestToken": "0x8F28E7085882Ef6010a74Fa092C4eC519A0583B5",
        "unlockTimestamp": 1622661612,
        "createdAtTimestamp": 1621970472
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x8Bd721BB84a30c0078aF4a5a732c7169C5BE6eDB",
      "symbol": "ePyvUSDC",
      "decimals": 6,
      "extensions": {
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "position": "0x814C447a9F58A2b823504Fe2775bA48c843925B6",
        "interestToken": "0x51E7DF22DF4A391A5702D6a99a350cE3c55c02Ce",
        "unlockTimestamp": 1623266597,
        "createdAtTimestamp": 1622575457
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x6866dFc9A60e9dba922668b9b27931DCaCDF645A",
      "symbol": "ePyvDAI",
      "decimals": 18,
      "extensions": {
        "underlying": "0x5bD768CCE8C529CDF23B136bB486a81f64985B92",
        "position": "0x8dc82c95B8901Db35390Aa4096B643d7724F278D",
        "interestToken": "0x649b9a57cb8fbd01bE019bDBBed9768d2a457173",
        "unlockTimestamp": 1624901889,
        "createdAtTimestamp": 1624383504
      },
      "name": "DAI Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0xDCf80C068B7fFDF7273d8ADAE4B076BF384F711A",
      "symbol": "eP:eyUSDC:10-AUG-22-GMT",
      "decimals": 6,
      "extensions": {
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "position": "0x814C447a9F58A2b823504Fe2775bA48c843925B6",
        "interestToken": "0x419b57dE54F7F1E108C72d6E6b405A1E66Fc5895",
        "unlockTimestamp": 1660165080,
        "createdAtTimestamp": 1628608488
      },
      "name": "USDC Principal Token",
      "tags": [
        "eP"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x91dDF92af38Afac1B59F450dDb94ddab10a11490",
      "symbol": "eYyvCurve-stETH",
      "decimals": 18,
      "name": "ETH Yield Token",
      "extensions": {
        "tranche": "0x44eecA004b2612d131EDA7dA2b9d986E7fED562e",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "unlockTimestamp": 1621010937
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0xBf4B5cB5ca49B1eF6B02615a94980723f6484899",
      "symbol": "eYyvCurve-stETH",
      "decimals": 18,
      "name": "ETH Yield Token",
      "extensions": {
        "tranche": "0x89d66Ad25F3A723D606B78170366d8da9870A879",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "unlockTimestamp": 1628210937
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x2c637c5142eE4F31A1a78Ad3DF012fc242F6CAe6",
      "symbol": "eYyvUSDC",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0x80272c960b862B4d6542CDB7338Ad1f727E0D18d",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "unlockTimestamp": 1628211057
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x8F28E7085882Ef6010a74Fa092C4eC519A0583B5",
      "symbol": "eYyvUSDC",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0x7D64aD2b83a62C0d02514a43E5B4582C671E5F72",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "unlockTimestamp": 1622661612
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x51E7DF22DF4A391A5702D6a99a350cE3c55c02Ce",
      "symbol": "eYyvUSDC",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0x8Bd721BB84a30c0078aF4a5a732c7169C5BE6eDB",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "unlockTimestamp": 1623266597
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x649b9a57cb8fbd01bE019bDBBed9768d2a457173",
      "symbol": "eYyvDAI",
      "decimals": 18,
      "name": "DAI Yield Token",
      "extensions": {
        "tranche": "0x6866dFc9A60e9dba922668b9b27931DCaCDF645A",
        "underlying": "0x5bD768CCE8C529CDF23B136bB486a81f64985B92",
        "unlockTimestamp": 1624901889
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x419b57dE54F7F1E108C72d6E6b405A1E66Fc5895",
      "symbol": "eY:eyUSDC:10-AUG-22-GMT",
      "decimals": 6,
      "name": "USDC Yield Token",
      "extensions": {
        "tranche": "0xDCf80C068B7fFDF7273d8ADAE4B076BF384F711A",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "unlockTimestamp": 1660165080
      },
      "tags": [
        "eY"
      ],
      "logoURI": "https://elementfi.s3.us-east-2.amazonaws.com/logo.svg"
    },
    {
      "chainId": 5,
      "address": "0x40bf8A2eCB62c6B880302b55a5552A4e315b5827",
      "symbol": "USDC-fyUSDC",
      "decimals": 18,
      "extensions": {
        "bond": "0x80272c960b862B4d6542CDB7338Ad1f727E0D18d",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "poolId": "0x40bf8a2ecb62c6b880302b55a5552a4e315b5827000200000000000000000062",
        "unitSeconds": 252480000,
        "expiration": 1628211057,
        "createdAtTimestamp": 1620435562
      },
      "name": "Element USDC - fyUSDC",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x5941DB4d6C500C4FFa57c359eE0C55c6b41D0b61",
      "symbol": "WETH-fyWETH",
      "decimals": 18,
      "extensions": {
        "bond": "0x44eecA004b2612d131EDA7dA2b9d986E7fED562e",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "poolId": "0x5941db4d6c500c4ffa57c359ee0c55c6b41d0b61000200000000000000000064",
        "unitSeconds": 284040000,
        "expiration": 1621010937,
        "createdAtTimestamp": 1620435682
      },
      "name": "Element WETH - fyWETH",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x9eB7F54C0eCc4d0D2dfF28a1276e36d598F2B0D1",
      "symbol": "WETH-fyWETH",
      "decimals": 18,
      "extensions": {
        "bond": "0x89d66Ad25F3A723D606B78170366d8da9870A879",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "poolId": "0x9eb7f54c0ecc4d0d2dff28a1276e36d598f2b0d1000200000000000000000066",
        "unitSeconds": 284040000,
        "expiration": 1628210937,
        "createdAtTimestamp": 1620435847
      },
      "name": "Element WETH - fyWETH",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x5e5D0F28D52eBC7dfe101542e3BfD32f09065F15",
      "symbol": "LP:eP:eyUSDC:02-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "bond": "0x7D64aD2b83a62C0d02514a43E5B4582C671E5F72",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "poolId": "0x5e5d0f28d52ebc7dfe101542e3bfd32f09065f15000200000000000000000072",
        "unitSeconds": 347126472,
        "expiration": 1622661612,
        "createdAtTimestamp": 1622053097
      },
      "name": "LP Principal Token eyUSDC:02-JUN-21-GMT",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x680C7914E2CAE78A2ac94DABf6277692EF652353",
      "symbol": "LP:eP:eyUSDC:09-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "bond": "0x8Bd721BB84a30c0078aF4a5a732c7169C5BE6eDB",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "poolId": "0x680c7914e2cae78a2ac94dabf6277692ef652353000200000000000000000074",
        "unitSeconds": 347126472,
        "expiration": 1623266597,
        "createdAtTimestamp": 1622575622
      },
      "name": "LP Principal Token eyUSDC:09-JUN-21-GMT",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x00655F8F287848f35538648A012e2cbd13016138",
      "symbol": "LP:eP:eyDAI:28-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "bond": "0x6866dFc9A60e9dba922668b9b27931DCaCDF645A",
        "underlying": "0x5bD768CCE8C529CDF23B136bB486a81f64985B92",
        "poolId": "0x00655f8f287848f35538648a012e2cbd13016138000200000000000000000079",
        "unitSeconds": 820480752,
        "expiration": 1624901889,
        "createdAtTimestamp": 1624388830
      },
      "name": "LP Principal Token eyDAI:28-JUN-21-GMT",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x4294005520c453EB8Fa66F53042cfC79707855c4",
      "symbol": "LPeP:eyUSDC:10-AUG-22-GMT",
      "decimals": 18,
      "extensions": {
        "bond": "0xDCf80C068B7fFDF7273d8ADAE4B076BF384F711A",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "poolId": "0x4294005520c453eb8fa66f53042cfc79707855c400020000000000000000009a",
        "unitSeconds": 284012568,
        "expiration": 1660165080,
        "createdAtTimestamp": 1628608758
      },
      "name": "LP Principal Token eyUSDC:10-AUG-22-GMT",
      "tags": [
        "ccpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x252797e51F51631b6956545C45F9d3F9fFCb0940",
      "symbol": "eY_USDC_BPT",
      "decimals": 18,
      "extensions": {
        "poolId": "0x252797e51f51631b6956545c45f9d3f9ffcb0940000200000000000000000063",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "interestToken": "0x2c637c5142eE4F31A1a78Ad3DF012fc242F6CAe6",
        "createdAtTimestamp": 1620435577,
        "expiration": 1628211057
      },
      "name": "Ele BPT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0xcF6894C48c2AF3ddD433CC1EDfEfC74e654cC9B4",
      "symbol": "eY_WETH_BPT",
      "decimals": 18,
      "extensions": {
        "poolId": "0xcf6894c48c2af3ddd433cc1edfefc74e654cc9b4000200000000000000000065",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "interestToken": "0x91dDF92af38Afac1B59F450dDb94ddab10a11490",
        "createdAtTimestamp": 1620435742,
        "expiration": 1621010937
      },
      "name": "Ele BPT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0xD75bfF2444FF738d443066ff4688691e6852b217",
      "symbol": "eY_WETH_BPT",
      "decimals": 18,
      "extensions": {
        "poolId": "0xd75bff2444ff738d443066ff4688691e6852b217000200000000000000000067",
        "underlying": "0x9A1000D492d40bfccbc03f413A48F5B6516Ec0Fd",
        "interestToken": "0xBf4B5cB5ca49B1eF6B02615a94980723f6484899",
        "createdAtTimestamp": 1620435862,
        "expiration": 1628210937
      },
      "name": "Ele BPT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x7dfD3ec2Dd0020b7F85E0555b6D499156420D796",
      "symbol": "LP:Element Yield Token eyUSDC:02-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "poolId": "0x7dfd3ec2dd0020b7f85e0555b6d499156420d796000200000000000000000070",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "interestToken": "0x8F28E7085882Ef6010a74Fa092C4eC519A0583B5",
        "createdAtTimestamp": 1621970877,
        "expiration": 1622661612
      },
      "name": "LP Element Yield Token eyUSDC:02-JUN-21-GMT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0xcdEe31456e502EF883316d4F6A3CF12027554afE",
      "symbol": "LP:Element Yield Token eyUSDC:09-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "poolId": "0xcdee31456e502ef883316d4f6a3cf12027554afe000200000000000000000073",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "interestToken": "0x51E7DF22DF4A391A5702D6a99a350cE3c55c02Ce",
        "createdAtTimestamp": 1622575577,
        "expiration": 1623266597
      },
      "name": "LP Element Yield Token eyUSDC:09-JUN-21-GMT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0x4c3f56cC1ad2BC61293739C7f0550575c9DAf313",
      "symbol": "LP:Element Yield Token eyDAI:28-JUN-21-GMT",
      "decimals": 18,
      "extensions": {
        "poolId": "0x4c3f56cc1ad2bc61293739c7f0550575c9daf313000200000000000000000078",
        "underlying": "0x5bD768CCE8C529CDF23B136bB486a81f64985B92",
        "interestToken": "0x649b9a57cb8fbd01bE019bDBBed9768d2a457173",
        "createdAtTimestamp": 1624388260,
        "expiration": 1624901889
      },
      "name": "LP Element Yield Token eyDAI:28-JUN-21-GMT",
      "tags": [
        "wpool"
      ]
    },
    {
      "chainId": 5,
      "address": "0xCE3dE100bA6B1fd0d078a938F2d698Ed08a6a54D",
      "symbol": "LPeY:eyUSDC:10-AUG-22-GMT",
      "decimals": 18,
      "extensions": {
        "poolId": "0xce3de100ba6b1fd0d078a938f2d698ed08a6a54d000200000000000000000099",
        "underlying": "0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86",
        "interestToken": "0x419b57dE54F7F1E108C72d6E6b405A1E66Fc5895",
        "createdAtTimestamp": 1628608608,
        "expiration": 1660165080
      },
      "name": "LP Element Yield Token eyUSDC:10-AUG-22-GMT",
      "tags": [
        "wpool"
      ]
    }
  ]
};


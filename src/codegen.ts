// import { Tags, TokenInfo, TokenList } from "@uniswap/token-lists/src";
import * as fs from "fs";
import fetch from "node-fetch";
import { TokenInfo } from "@uniswap/token-lists/src";

interface CodegenConfig {
  artifactId: string;
  tokenlistURL: string;
  outputFile: string;

  extensionsOverride: <T>(tokenInfo: TokenInfo) => T;
}

main({
  artifactId: "Element_",
  tokenlistURL:
    "https://unpkg.com/@elementfi/tokenlist@2.4.0/dist/mainnet.tokenlist.json",
  outputFile: "./codegen_out.ts",
}).then(() => process.exit(0));

// type AllTokenInfos = .... | .... | ....;

type PrincipalTokenInfos = AllTokenInfos & {};

async function main({
  artifactId,
  tokenlistURL,
  outputFile,
}: CodegenConfig): Promise<void> {
  const tokenlist: any = await fetch(tokenlistURL)
    .then((result) => result.json())
    .catch(console.log);

  const imports = `import { TokenInfo } from "@uniswap/token-lists/src";`;

  let tagsEnum: string = "";
  if (tokenlist.tags) {
    tagsEnum = generateTagEnum(artifactId, tokenlist.tags);
  }

  const tokenInterfaces = generateTokenInterfaces(artifactId, tokenlist.tokens);

  const outputString = `${imports}\n\n${tagsEnum}\n\n${tokenInterfaces}`;

  fs.writeFileSync(outputFile, outputString);
}

function generateTagEnum(artifactId: string, tags: any): string {
  const tagsEnumValues = Object.keys(tags).map(
    (tag) => `
  /**
   * ${tags[tag].name}
   * ${tags[tag].description}
   */
  ${tag} = "${tag}",`
  );

  const tagsEnum = `
  export enum ${artifactId}Tags {
    ${tagsEnumValues.join("\n")}
  };
`;

  return tagsEnum;
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

function generateTokenInterfaces(
  artifactId: string,
  tokens: TokenInfo[]
): string {
  const tokenInterfaces = tokens.map((tokenInfo) => {
    const safeTokenSymbol = tokenInfo.symbol.replace(/[^a-zA-Z0-9]/g, "");
    const first4 = tokenInfo.address.slice(0, 6);
    return `
    export interface TokenInfo_${safeTokenSymbol}_${first4} extends TokenInfo ${JSON.stringify(
      tokenInfo,
      null,
      2
    )}
    `;
  });

  return tokenInterfaces.join("\n");
}

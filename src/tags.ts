export const TokenTag = {
  VAULT: "vault" as "vault",
  ASSET_PROXY: "assetproxy" as "assetproxy",
  CCPOOL: "ccpool" as "ccpool",
  PRINCIPAL: "eP" as "eP",
  WPOOL: "wpool" as "wpool",
  YIELD: "eY" as "eY",
};
export type TokenTag = typeof TokenTag[keyof typeof TokenTag];

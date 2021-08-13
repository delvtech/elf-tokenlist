export const ElementTokenTag = {
  VAULT: "vault" as "vault",
  ASSET_PROXY: "assetproxy" as "assetproxy",
  CCPOOL: "ccpool" as "ccpool",
  PRINCIPAL: "eP" as "eP",
  UNDERLYING: "underlying" as "underlying",
  WPOOL: "wpool" as "wpool",
  YIELD: "eY" as "eY",
};
export type ElementTokenTag =
  typeof ElementTokenTag[keyof typeof ElementTokenTag];

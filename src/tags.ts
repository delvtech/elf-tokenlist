import { TagInfo } from "src/types";
export const ElementTokenTag: Record<string, string> = {
  VAULT: "vault" as "vault",
  ASSET_PROXY: "assetproxy" as "assetproxy",
  CCPOOL: "ccpool" as "ccpool",
  PRINCIPAL: "eP" as "eP",
  UNDERLYING: "underlying" as "underlying",
  WPOOL: "wpool" as "wpool",
  YIELD: "eY" as "eY",
};

export const tags: Record<keyof typeof ElementTokenTag, TagInfo> = {
  [ElementTokenTag.UNDERLYING]: {
    name: "Underlying asset",
    description: "The base asset of a principal or yield token",
  },
  [ElementTokenTag.PRINCIPAL]: {
    name: "Principal token",
    description:
      "Token that represents a deposit of principal into a yield position",
  },
  [ElementTokenTag.YIELD]: {
    name: "Yield token",
    description:
      "Token that represents the yield on a deposit into a yield position",
  },
  [ElementTokenTag.CCPOOL]: {
    name: "ConvergentCurve pool",
    description: "Token that represents the balancer pool for Principal tokens",
  },
  [ElementTokenTag.WPOOL]: {
    name: "Weighted pool",
    description: "Token that represents the balancer pool for Yield tokens",
  },
  [ElementTokenTag.ASSET_PROXY]: {
    name: "Vault asset proxy",
    description:
      "Token that wraps a yield position, ie: Yearn vault asset proxy",
  },
  [ElementTokenTag.VAULT]: {
    name: "Vault",
    description: "The yield position, ie: Yearn yvcrvLUSD",
  },
};

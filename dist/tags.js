"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tags = void 0;
var types_1 = require("./types");
exports.tags = (_a = {},
    _a[types_1.TokenListTag.UNDERLYING] = {
        name: "Underlying asset",
        description: "The base asset of a principal or yield token",
    },
    _a[types_1.TokenListTag.PRINCIPAL] = {
        name: "Principal token",
        description: "Token that represents a deposit of principal into a yield position",
    },
    _a[types_1.TokenListTag.YIELD] = {
        name: "Yield token",
        description: "Token that represents the yield on a deposit into a yield position",
    },
    _a[types_1.TokenListTag.CCPOOL] = {
        name: "ConvergentCurve pool",
        description: "Token that represents the balancer pool for Principal tokens",
    },
    _a[types_1.TokenListTag.WPOOL] = {
        name: "Weighted pool",
        description: "Token that represents the balancer pool for Yield tokens",
    },
    _a[types_1.TokenListTag.ASSET_PROXY] = {
        name: "Vault asset proxy",
        description: "Token that wraps a yield position, ie: Yearn vault asset proxy",
    },
    _a[types_1.TokenListTag.VAULT] = {
        name: "Vault",
        description: "The yield position, ie: Yearn yvcrvLUSD",
    },
    _a);

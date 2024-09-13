'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fbd025f1.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["pricing-table.cjs",[[1,"pricing-table",{"loading":[32],"products":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map
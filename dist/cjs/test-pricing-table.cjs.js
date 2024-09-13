'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fbd025f1.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('test-pricing-table.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["pricing-table.cjs",[[1,"pricing-table",{"loading":[32],"products":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=test-pricing-table.cjs.js.map
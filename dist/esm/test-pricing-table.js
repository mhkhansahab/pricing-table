import { p as promiseResolve, b as bootstrapLazy } from './index-1590c3ca.js';
export { s as setNonce } from './index-1590c3ca.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["pricing-table",[[1,"pricing-table",{"loading":[32],"products":[32]}]]]], options);
});

//# sourceMappingURL=test-pricing-table.js.map
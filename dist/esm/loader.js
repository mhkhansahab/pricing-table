import { b as bootstrapLazy } from './index-1590c3ca.js';
export { s as setNonce } from './index-1590c3ca.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["pricing-table",[[1,"pricing-table",{"loading":[32],"products":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map
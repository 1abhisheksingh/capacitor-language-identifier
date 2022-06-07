import { registerPlugin } from '@capacitor/core';
const LanguageIdentifier = registerPlugin('LanguageIdentifier', {
    web: () => import('./web').then(m => new m.LanguageIdentifierWeb()),
});
export * from './definitions';
export { LanguageIdentifier };
//# sourceMappingURL=index.js.map
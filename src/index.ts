import { registerPlugin } from '@capacitor/core';

import type { LanguageIdentifierPlugin } from './definitions';

const LanguageIdentifier = registerPlugin<LanguageIdentifierPlugin>('LanguageIdentifier', {
  web: () => import('./web').then(m => new m.LanguageIdentifierWeb()),
});

export * from './definitions';
export { LanguageIdentifier };

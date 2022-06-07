import { WebPlugin } from '@capacitor/core';

import type { LanguageIdentifierPlugin } from './definitions';

export class LanguageIdentifierWeb extends WebPlugin implements LanguageIdentifierPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

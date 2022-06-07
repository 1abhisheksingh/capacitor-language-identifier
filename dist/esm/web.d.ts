import { WebPlugin } from '@capacitor/core';
import type { LanguageIdentifierPlugin } from './definitions';
export declare class LanguageIdentifierWeb extends WebPlugin implements LanguageIdentifierPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

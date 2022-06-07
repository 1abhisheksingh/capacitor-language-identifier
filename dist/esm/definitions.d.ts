export interface LanguageIdentifierPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

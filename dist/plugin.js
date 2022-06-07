var capacitorLanguageIdentifier = (function (exports, core) {
    'use strict';

    const LanguageIdentifier = core.registerPlugin('LanguageIdentifier', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.LanguageIdentifierWeb()),
    });

    class LanguageIdentifierWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LanguageIdentifierWeb: LanguageIdentifierWeb
    });

    exports.LanguageIdentifier = LanguageIdentifier;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

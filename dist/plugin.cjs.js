'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map

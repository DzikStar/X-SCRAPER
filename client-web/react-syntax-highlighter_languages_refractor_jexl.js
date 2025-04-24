"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_jexl"],
    {
        412613: (u) => {
            function e(u) {
                u.languages.jexl = { string: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/, transform: { pattern: /(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/, alias: "function", lookbehind: !0 }, function: /[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/, number: /\b\d+(?:\.\d+)?\b|\B\.\d+\b/, operator: /[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/, boolean: /\b(?:false|true)\b/, keyword: /\bin\b/, punctuation: /[{}[\](),.]/ };
            }
            (u.exports = e), (e.displayName = "jexl"), (e.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_jexl.b7000e2a.js.map

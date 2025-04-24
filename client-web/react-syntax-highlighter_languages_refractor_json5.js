"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_json5", "react-syntax-highlighter_languages_refractor_json"],
    {
        116275: (e) => {
            function n(e) {
                (e.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }), (e.languages.webmanifest = e.languages.json);
            }
            (e.exports = n), (n.displayName = "json"), (n.aliases = ["webmanifest"]);
        },
        699673: (e, n, a) => {
            var r = a(116275);
            function s(e) {
                e.register(r),
                    (function (e) {
                        var n = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
                        e.languages.json5 = e.languages.extend("json", {
                            property: [
                                { pattern: RegExp(n.source + "(?=\\s*:)"), greedy: !0 },
                                { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/, alias: "unquoted" },
                            ],
                            string: { pattern: n, greedy: !0 },
                            number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
                        });
                    })(e);
            }
            (e.exports = s), (s.displayName = "json5"), (s.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_json5.6cf208ea.js.map

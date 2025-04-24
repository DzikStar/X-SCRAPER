"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_toml"],
    {
        494044: (e) => {
            function t(e) {
                !(function (e) {
                    var t = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;
                    function n(e) {
                        return e.replace(/__/g, function () {
                            return t;
                        });
                    }
                    e.languages.toml = {
                        comment: { pattern: /#.*/, greedy: !0 },
                        table: { pattern: RegExp(n(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source), "m"), lookbehind: !0, greedy: !0, alias: "class-name" },
                        key: { pattern: RegExp(n(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source), "m"), lookbehind: !0, greedy: !0, alias: "property" },
                        string: { pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
                        date: [
                            { pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i, alias: "number" },
                            { pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/, alias: "number" },
                        ],
                        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
                        boolean: /\b(?:false|true)\b/,
                        punctuation: /[.,=[\]{}]/,
                    };
                })(e);
            }
            (e.exports = t), (t.displayName = "toml"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_toml.3f16cf6a.js.map

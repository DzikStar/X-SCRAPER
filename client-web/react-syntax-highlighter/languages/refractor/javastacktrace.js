"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_javastacktrace"],
    {
        292572: (e) => {
            function a(e) {
                e.languages.javastacktrace = {
                    summary: { pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m, lookbehind: !0, inside: { keyword: { pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m, lookbehind: !0 }, string: { pattern: /^(\s*)"[^"]*"/, lookbehind: !0 }, exceptions: { pattern: /^(:?\s*)[\w$.]+(?=:|$)/, lookbehind: !0, inside: { "class-name": /[\w$]+$/, namespace: /\b[a-z]\w*\b/, punctuation: /\./ } }, message: { pattern: /(:\s*)\S.*/, lookbehind: !0, alias: "string" }, punctuation: /:/ } },
                    "stack-frame": {
                        pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
                        lookbehind: !0,
                        inside: {
                            keyword: { pattern: /^(\s*)at(?= )/, lookbehind: !0 },
                            source: [
                                { pattern: /(\()\w+\.\w+:\d+(?=\))/, lookbehind: !0, inside: { file: /^\w+\.\w+/, punctuation: /:/, "line-number": { pattern: /\b\d+\b/, alias: "number" } } },
                                { pattern: /(\()[^()]*(?=\))/, lookbehind: !0, inside: { keyword: /^(?:Native Method|Unknown Source)$/ } },
                            ],
                            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
                            function: /(?:<init>|[\w$]+)(?=\()/,
                            "class-loader": { pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/, lookbehind: !0, alias: "namespace", inside: { punctuation: /\./ } },
                            module: { pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/, lookbehind: !0, inside: { version: { pattern: /(@)[\s\S]+/, lookbehind: !0, alias: "number" }, punctuation: /[@.]/ } },
                            namespace: { pattern: /(?:\b[a-z]\w*\.)+/, inside: { punctuation: /\./ } },
                            punctuation: /[()/.]/,
                        },
                    },
                    more: { pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m, lookbehind: !0, inside: { punctuation: /\.{3}/, number: /\d+/, keyword: /\b[a-z]+(?: [a-z]+)*\b/ } },
                };
            }
            (e.exports = a), (a.displayName = "javastacktrace"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_javastacktrace.dab721da.js.map

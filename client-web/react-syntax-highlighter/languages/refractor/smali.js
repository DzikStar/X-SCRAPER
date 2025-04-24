"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_smali"],
    {
        155729: (e) => {
            function t(e) {
                e.languages.smali = {
                    comment: /#.*/,
                    string: { pattern: /"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/, greedy: !0 },
                    "class-name": { pattern: /(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/, lookbehind: !0, inside: { "class-name": { pattern: /(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/, lookbehind: !0 }, namespace: { pattern: /^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/, lookbehind: !0, inside: { punctuation: /\// } }, builtin: /^L/ } },
                    builtin: [
                        { pattern: /([();\[])[BCDFIJSVZ]+/, lookbehind: !0 },
                        { pattern: /([\w$>]:)[BCDFIJSVZ]/, lookbehind: !0 },
                    ],
                    keyword: [
                        { pattern: /(\.end\s+)[\w-]+/, lookbehind: !0 },
                        { pattern: /(^|[^\w.-])\.(?!\d)[\w-]+/, lookbehind: !0 },
                        { pattern: /(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/, lookbehind: !0 },
                    ],
                    function: { pattern: /(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/, lookbehind: !0 },
                    field: { pattern: /[\w$]+(?=:)/, alias: "variable" },
                    register: { pattern: /(^|[^\w.-])[vp]\d(?![\w.-])/, lookbehind: !0, alias: "variable" },
                    boolean: { pattern: /(^|[^\w.-])(?:false|true)(?![\w.-])/, lookbehind: !0 },
                    number: { pattern: /(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i, lookbehind: !0 },
                    label: { pattern: /(:)\w+/, lookbehind: !0, alias: "property" },
                    operator: /->|\.\.|[\[=]/,
                    punctuation: /[{}(),;:]/,
                };
            }
            (e.exports = t), (t.displayName = "smali"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_smali.f14a37aa.js.map

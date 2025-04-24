"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_cfscript"],
    {
        808314: (e) => {
            function t(e) {
                (e.languages.cfscript = e.languages.extend("clike", {
                    comment: [
                        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, inside: { annotation: { pattern: /(?:^|[^.])@[\w\.]+/, alias: "punctuation" } } },
                        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                    ],
                    keyword: /\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,
                    operator: [/\+\+|--|&&|\|\||::|=>|[!=]==|<=?|>=?|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|[?:]/, /\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],
                    scope: { pattern: /\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/, alias: "global" },
                    type: { pattern: /\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/, alias: "builtin" },
                })),
                    e.languages.insertBefore("cfscript", "keyword", { "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" } }),
                    delete e.languages.cfscript["class-name"],
                    (e.languages.cfc = e.languages.cfscript);
            }
            (e.exports = t), (t.displayName = "cfscript"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_cfscript.377d4a6a.js.map

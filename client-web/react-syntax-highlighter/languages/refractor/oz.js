"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_oz"],
    {
        225933: (e) => {
            function t(e) {
                e.languages.oz = { comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 }, string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 }, atom: { pattern: /'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, alias: "builtin" }, keyword: /\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/, function: [/\b[a-z][A-Za-z\d]*(?=\()/, { pattern: /(\{)[A-Z][A-Za-z\d]*\b/, lookbehind: !0 }], number: /\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i, variable: /`(?:[^`\\]|\\.)+`/, "attr-name": /\b\w+(?=[ \t]*:(?![:=]))/, operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/, punctuation: /[\[\](){}.:;?]/ };
            }
            (e.exports = t), (t.displayName = "oz"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_oz.ae77e43a.js.map

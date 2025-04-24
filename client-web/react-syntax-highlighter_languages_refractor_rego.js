"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_rego"],
    {
        551527: (e) => {
            function t(e) {
                e.languages.rego = { comment: /#.*/, property: { pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/, boolean: /\b(?:false|true)\b/, function: { pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i, inside: { namespace: /\b\w+\b(?=\s*\.)/, punctuation: /\./ } }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/, punctuation: /[,;.\[\]{}()]/ };
            }
            (e.exports = t), (t.displayName = "rego"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_rego.36460a6a.js.map

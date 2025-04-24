"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_bnf"],
    {
        402289: (e) => {
            function n(e) {
                (e.languages.bnf = { string: { pattern: /"[^\r\n"]*"|'[^\r\n']*'/ }, definition: { pattern: /<[^<>\r\n\t]+>(?=\s*::=)/, alias: ["rule", "keyword"], inside: { punctuation: /^<|>$/ } }, rule: { pattern: /<[^<>\r\n\t]+>/, inside: { punctuation: /^<|>$/ } }, operator: /::=|[|()[\]{}*+?]|\.{3}/ }), (e.languages.rbnf = e.languages.bnf);
            }
            (e.exports = n), (n.displayName = "bnf"), (n.aliases = ["rbnf"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_bnf.e68d32da.js.map

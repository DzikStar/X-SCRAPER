"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_ebnf"],
    {
        824856: (e) => {
            function a(e) {
                e.languages.ebnf = { comment: /\(\*[\s\S]*?\*\)/, string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0 }, special: { pattern: /\?[^?\r\n]*\?/, greedy: !0, alias: "class-name" }, definition: { pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im, lookbehind: !0, alias: ["rule", "keyword"] }, rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i, punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/, operator: /[-=|*/!]/ };
            }
            (e.exports = a), (a.displayName = "ebnf"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_ebnf.f3f9756a.js.map

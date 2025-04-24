"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_bbcode"],
    {
        510857: (e) => {
            function s(e) {
                (e.languages.bbcode = { tag: { pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/, inside: { tag: { pattern: /^\[\/?[^\s=\]]+/, inside: { punctuation: /^\[\/?/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\]/, "attr-name": /[^\s=\]]+/ } } }), (e.languages.shortcode = e.languages.bbcode);
            }
            (e.exports = s), (s.displayName = "bbcode"), (s.aliases = ["shortcode"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_bbcode.4910827a.js.map

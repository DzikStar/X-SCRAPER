"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_pcaxis"],
    {
        883806: (e) => {
            function s(e) {
                (e.languages.pcaxis = { string: /"[^"]*"/, keyword: { pattern: /((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/, lookbehind: !0, greedy: !0, inside: { keyword: /^[-A-Z\d]+/, language: { pattern: /^(\s*)\[[-\w]+\]/, lookbehind: !0, inside: { punctuation: /^\[|\]$/, property: /[-\w]+/ } }, "sub-key": { pattern: /^(\s*)\S[\s\S]*/, lookbehind: !0, inside: { parameter: { pattern: /"[^"]*"/, alias: "property" }, punctuation: /^\(|\)$|,/ } } } }, operator: /=/, tlist: { pattern: /TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/, greedy: !0, inside: { function: /^TLIST/, property: { pattern: /^(\s*\(\s*)\w+/, lookbehind: !0 }, string: /"[^"]*"/, punctuation: /[(),]/, operator: /-/ } }, punctuation: /[;,]/, number: { pattern: /(^|\s)\d+(?:\.\d+)?(?!\S)/, lookbehind: !0 }, boolean: /NO|YES/ }), (e.languages.px = e.languages.pcaxis);
            }
            (e.exports = s), (s.displayName = "pcaxis"), (s.aliases = ["px"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_pcaxis.d61a889a.js.map

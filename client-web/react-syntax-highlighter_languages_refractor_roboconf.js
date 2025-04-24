"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_roboconf"],
    {
        590896: (t) => {
            function e(t) {
                t.languages.roboconf = { comment: /#.*/, keyword: { pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/, lookbehind: !0 }, component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: "variable" }, property: /[\w.-]+(?=[ \t]*:)/, value: { pattern: /(=[ \t]*(?![ \t]))[^,;]+/, lookbehind: !0, alias: "attr-value" }, optional: { pattern: /\(optional\)/, alias: "builtin" }, wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: "operator" }, punctuation: /[{},.;:=]/ };
            }
            (t.exports = e), (e.displayName = "roboconf"), (e.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_roboconf.18380f7a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_editorconfig"],
    {
        680365: (e) => {
            function t(e) {
                e.languages.editorconfig = { comment: /[;#].*/, section: { pattern: /(^[ \t]*)\[.+\]/m, lookbehind: !0, alias: "selector", inside: { regex: /\\\\[\[\]{},!?.*]/, operator: /[!?]|\.\.|\*{1,2}/, punctuation: /[\[\]{},]/ } }, key: { pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m, lookbehind: !0, alias: "attr-name" }, value: { pattern: /=.*/, alias: "attr-value", inside: { punctuation: /^=/ } } };
            }
            (e.exports = t), (t.displayName = "editorconfig"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_editorconfig.bd6a185a.js.map

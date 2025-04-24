"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_prolog"],
    {
        652339: (e) => {
            function t(e) {
                e.languages.prolog = { comment: { pattern: /\/\*[\s\S]*?\*\/|%.*/, greedy: !0 }, string: { pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/, greedy: !0 }, builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/, function: /\b[a-z]\w*(?:(?=\()|\/\d+)/, number: /\b\d+(?:\.\d*)?/, operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/, punctuation: /[(){}\[\],]/ };
            }
            (e.exports = t), (t.displayName = "prolog"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_prolog.6d4ee3ba.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_jsonp", "react-syntax-highlighter_languages_refractor_json"],
    {
        116275: (e) => {
            function n(e) {
                (e.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }), (e.languages.webmanifest = e.languages.json);
            }
            (e.exports = n), (n.displayName = "json"), (n.aliases = ["webmanifest"]);
        },
        19310: (e, n, s) => {
            var a = s(116275);
            function t(e) {
                e.register(a), (e.languages.jsonp = e.languages.extend("json", { punctuation: /[{}[\]();,.]/ })), e.languages.insertBefore("jsonp", "punctuation", { function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/ });
            }
            (e.exports = t), (t.displayName = "jsonp"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_jsonp.b5ba725a.js.map

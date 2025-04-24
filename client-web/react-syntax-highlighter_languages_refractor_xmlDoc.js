"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_xmlDoc"],
    {
        112128: (e) => {
            function a(e) {
                !(function (e) {
                    function a(a, t) {
                        e.languages[a] && e.languages.insertBefore(a, "comment", { "doc-comment": t });
                    }
                    var t = e.languages.markup.tag,
                        n = { pattern: /\/\/\/.*/, greedy: !0, alias: "comment", inside: { tag: t } },
                        s = { pattern: /'''.*/, greedy: !0, alias: "comment", inside: { tag: t } };
                    a("csharp", n), a("fsharp", n), a("vbnet", s);
                })(e);
            }
            (e.exports = a), (a.displayName = "xmlDoc"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_xmlDoc.f3df564a.js.map

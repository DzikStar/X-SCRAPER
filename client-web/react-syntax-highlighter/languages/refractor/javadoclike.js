"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_javadoclike"],
    {
        94111: (e) => {
            function a(e) {
                !(function (e) {
                    var a = (e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ });
                    Object.defineProperty(a, "addSupport", {
                        value: function (a, t) {
                            "string" == typeof a && (a = [a]),
                                a.forEach(function (a) {
                                    !(function (a, t) {
                                        var n = "doc-comment",
                                            r = e.languages[a];
                                        if (r) {
                                            var i = r[n];
                                            if (!i) {
                                                var s = {};
                                                (s[n] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" }), (i = (r = e.languages.insertBefore(a, "comment", s))[n]);
                                            }
                                            if ((i instanceof RegExp && (i = r[n] = { pattern: i }), Array.isArray(i))) for (var o = 0, p = i.length; o < p; o++) i[o] instanceof RegExp && (i[o] = { pattern: i[o] }), t(i[o]);
                                            else t(i);
                                        }
                                    })(a, function (e) {
                                        e.inside || (e.inside = {}), (e.inside.rest = t);
                                    });
                                });
                        },
                    }),
                        a.addSupport(["java", "javascript", "php"], a);
                })(e);
            }
            (e.exports = a), (a.displayName = "javadoclike"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_javadoclike.3228259a.js.map

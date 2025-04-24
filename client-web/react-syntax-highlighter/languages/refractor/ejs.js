"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_ejs", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        793459: (e, t, a) => {
            var n = a(246546);
            function r(e) {
                e.register(n),
                    (function (e) {
                        (e.languages.ejs = { delimiter: { pattern: /^<%[-_=]?|[-_]?%>$/, alias: "punctuation" }, comment: /^#[\s\S]*/, "language-javascript": { pattern: /[\s\S]+/, inside: e.languages.javascript } }),
                            e.hooks.add("before-tokenize", function (t) {
                                e.languages["markup-templating"].buildPlaceholders(t, "ejs", /<%(?!%)[\s\S]+?%>/g);
                            }),
                            e.hooks.add("after-tokenize", function (t) {
                                e.languages["markup-templating"].tokenizePlaceholders(t, "ejs");
                            }),
                            (e.languages.eta = e.languages.ejs);
                    })(e);
            }
            (e.exports = r), (r.displayName = "ejs"), (r.aliases = ["eta"]);
        },
        246546: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t) {
                        return "___" + e.toUpperCase() + t + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (a, n, r, s) {
                                if (a.language === n) {
                                    var i = (a.tokenStack = []);
                                    (a.code = a.code.replace(r, function (e) {
                                        if ("function" == typeof s && !s(e)) return e;
                                        for (var r, o = i.length; -1 !== a.code.indexOf((r = t(n, o))); ) ++o;
                                        return (i[o] = e), r;
                                    })),
                                        (a.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (a, n) {
                                if (a.language === n && a.tokenStack) {
                                    a.grammar = e.languages[n];
                                    var r = 0,
                                        s = Object.keys(a.tokenStack);
                                    !(function i(o) {
                                        for (var g = 0; g < o.length && !(r >= s.length); g++) {
                                            var l = o[g];
                                            if ("string" == typeof l || (l.content && "string" == typeof l.content)) {
                                                var u = s[r],
                                                    c = a.tokenStack[u],
                                                    p = "string" == typeof l ? l : l.content,
                                                    f = t(n, u),
                                                    k = p.indexOf(f);
                                                if (k > -1) {
                                                    ++r;
                                                    var h = p.substring(0, k),
                                                        m = new e.Token(n, e.tokenize(c, a.grammar), "language-" + n, c),
                                                        d = p.substring(k + f.length),
                                                        _ = [];
                                                    h && _.push.apply(_, i([h])), _.push(m), d && _.push.apply(_, i([d])), "string" == typeof l ? o.splice.apply(o, [g, 1].concat(_)) : (l.content = _);
                                                }
                                            } else l.content && i(l.content);
                                        }
                                        return o;
                                    })(a.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_ejs.10f8fd9a.js.map

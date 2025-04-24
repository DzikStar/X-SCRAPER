"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        246546: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t) {
                        return "___" + e.toUpperCase() + t + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (n, a, r, o) {
                                if (n.language === a) {
                                    var i = (n.tokenStack = []);
                                    (n.code = n.code.replace(r, function (e) {
                                        if ("function" == typeof o && !o(e)) return e;
                                        for (var r, s = i.length; -1 !== n.code.indexOf((r = t(a, s))); ) ++s;
                                        return (i[s] = e), r;
                                    })),
                                        (n.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (n, a) {
                                if (n.language === a && n.tokenStack) {
                                    n.grammar = e.languages[a];
                                    var r = 0,
                                        o = Object.keys(n.tokenStack);
                                    !(function i(s) {
                                        for (var u = 0; u < s.length && !(r >= o.length); u++) {
                                            var c = s[u];
                                            if ("string" == typeof c || (c.content && "string" == typeof c.content)) {
                                                var p = o[r],
                                                    g = n.tokenStack[p],
                                                    l = "string" == typeof c ? c : c.content,
                                                    f = t(a, p),
                                                    k = l.indexOf(f);
                                                if (k > -1) {
                                                    ++r;
                                                    var h = l.substring(0, k),
                                                        _ = new e.Token(a, e.tokenize(g, n.grammar), "language-" + a, g),
                                                        m = l.substring(k + f.length),
                                                        v = [];
                                                    h && v.push.apply(v, i([h])), v.push(_), m && v.push.apply(v, i([m])), "string" == typeof c ? s.splice.apply(s, [u, 1].concat(v)) : (c.content = v);
                                                }
                                            } else c.content && i(c.content);
                                        }
                                        return s;
                                    })(n.tokens);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_markupTemplating.73c0e17a.js.map

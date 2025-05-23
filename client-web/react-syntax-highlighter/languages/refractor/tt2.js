"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_tt2", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        246546: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t) {
                        return "___" + e.toUpperCase() + t + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (n, a, r, i) {
                                if (n.language === a) {
                                    var s = (n.tokenStack = []);
                                    (n.code = n.code.replace(r, function (e) {
                                        if ("function" == typeof i && !i(e)) return e;
                                        for (var r, o = s.length; -1 !== n.code.indexOf((r = t(a, o))); ) ++o;
                                        return (s[o] = e), r;
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
                                        i = Object.keys(n.tokenStack);
                                    !(function s(o) {
                                        for (var g = 0; g < o.length && !(r >= i.length); g++) {
                                            var l = o[g];
                                            if ("string" == typeof l || (l.content && "string" == typeof l.content)) {
                                                var u = i[r],
                                                    p = n.tokenStack[u],
                                                    c = "string" == typeof l ? l : l.content,
                                                    f = t(a, u),
                                                    d = c.indexOf(f);
                                                if (d > -1) {
                                                    ++r;
                                                    var k = c.substring(0, d),
                                                        E = new e.Token(a, e.tokenize(p, n.grammar), "language-" + a, p),
                                                        m = c.substring(d + f.length),
                                                        h = [];
                                                    k && h.push.apply(h, s([k])), h.push(E), m && h.push.apply(h, s([m])), "string" == typeof l ? o.splice.apply(o, [g, 1].concat(h)) : (l.content = h);
                                                }
                                            } else l.content && s(l.content);
                                        }
                                        return o;
                                    })(n.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
        },
        613719: (e, t, n) => {
            var a = n(246546);
            function r(e) {
                e.register(a),
                    (function (e) {
                        (e.languages.tt2 = e.languages.extend("clike", { comment: /#.*|\[%#[\s\S]*?%\]/, keyword: /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/, punctuation: /[[\]{},()]/ })),
                            e.languages.insertBefore("tt2", "number", { operator: /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/, variable: { pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i } }),
                            e.languages.insertBefore("tt2", "keyword", { delimiter: { pattern: /^(?:\[%|%%)-?|-?%\]$/, alias: "punctuation" } }),
                            e.languages.insertBefore("tt2", "string", { "single-quoted-string": { pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/, greedy: !0, alias: "string" }, "double-quoted-string": { pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/, greedy: !0, alias: "string", inside: { variable: { pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i } } } }),
                            delete e.languages.tt2.string,
                            e.hooks.add("before-tokenize", function (t) {
                                e.languages["markup-templating"].buildPlaceholders(t, "tt2", /\[%[\s\S]+?%\]/g);
                            }),
                            e.hooks.add("after-tokenize", function (t) {
                                e.languages["markup-templating"].tokenizePlaceholders(t, "tt2");
                            });
                    })(e);
            }
            (e.exports = r), (r.displayName = "tt2"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_tt2.689f67da.js.map

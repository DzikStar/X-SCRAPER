"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_etlua", "react-syntax-highlighter_languages_refractor_lua", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        95354: (e, t, a) => {
            var n = a(73753),
                r = a(246546);
            function i(e) {
                e.register(n),
                    e.register(r),
                    (function (e) {
                        (e.languages.etlua = { delimiter: { pattern: /^<%[-=]?|-?%>$/, alias: "punctuation" }, "language-lua": { pattern: /[\s\S]+/, inside: e.languages.lua } }),
                            e.hooks.add("before-tokenize", function (t) {
                                e.languages["markup-templating"].buildPlaceholders(t, "etlua", /<%[\s\S]+?%>/g);
                            }),
                            e.hooks.add("after-tokenize", function (t) {
                                e.languages["markup-templating"].tokenizePlaceholders(t, "etlua");
                            });
                    })(e);
            }
            (e.exports = i), (i.displayName = "etlua"), (i.aliases = []);
        },
        73753: (e) => {
            function t(e) {
                e.languages.lua = { comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m, string: { pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/, greedy: !0 }, number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i, keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, function: /(?!\d)\w+(?=\s*(?:[({]))/, operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 }], punctuation: /[\[\](){},;]|\.+|:+/ };
            }
            (e.exports = t), (t.displayName = "lua"), (t.aliases = []);
        },
        246546: (e) => {
            function t(e) {
                !(function (e) {
                    function t(e, t) {
                        return "___" + e.toUpperCase() + t + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (a, n, r, i) {
                                if (a.language === n) {
                                    var o = (a.tokenStack = []);
                                    (a.code = a.code.replace(r, function (e) {
                                        if ("function" == typeof i && !i(e)) return e;
                                        for (var r, l = o.length; -1 !== a.code.indexOf((r = t(n, l))); ) ++l;
                                        return (o[l] = e), r;
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
                                        i = Object.keys(a.tokenStack);
                                    !(function o(l) {
                                        for (var s = 0; s < l.length && !(r >= i.length); s++) {
                                            var u = l[s];
                                            if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
                                                var g = i[r],
                                                    c = a.tokenStack[g],
                                                    p = "string" == typeof u ? u : u.content,
                                                    f = t(n, g),
                                                    d = p.indexOf(f);
                                                if (d > -1) {
                                                    ++r;
                                                    var k = p.substring(0, d),
                                                        h = new e.Token(n, e.tokenize(c, a.grammar), "language-" + n, c),
                                                        m = p.substring(d + f.length),
                                                        b = [];
                                                    k && b.push.apply(b, o([k])), b.push(h), m && b.push.apply(b, o([m])), "string" == typeof u ? l.splice.apply(l, [s, 1].concat(b)) : (u.content = b);
                                                }
                                            } else u.content && o(u.content);
                                        }
                                        return l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_etlua.5e739f4a.js.map

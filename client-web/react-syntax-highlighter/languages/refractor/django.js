"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_django", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        62355: (e, n, t) => {
            var a = t(246546);
            function o(e) {
                e.register(a),
                    (function (e) {
                        e.languages.django = { comment: /^\{#[\s\S]*?#\}$/, tag: { pattern: /(^\{%[+-]?\s*)\w+/, lookbehind: !0, alias: "keyword" }, delimiter: { pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/, alias: "punctuation" }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, filter: { pattern: /(\|)\w+/, lookbehind: !0, alias: "function" }, test: { pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/, lookbehind: !0, alias: "function" }, function: /\b[a-z_]\w+(?=\s*\()/i, keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, number: /\b\d+(?:\.\d+)?\b/, boolean: /[Ff]alse|[Nn]one|[Tt]rue/, variable: /\b\w+\b/, punctuation: /[{}[\](),.:;]/ };
                        var n = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,
                            t = e.languages["markup-templating"];
                        e.hooks.add("before-tokenize", function (e) {
                            t.buildPlaceholders(e, "django", n);
                        }),
                            e.hooks.add("after-tokenize", function (e) {
                                t.tokenizePlaceholders(e, "django");
                            }),
                            (e.languages.jinja2 = e.languages.django),
                            e.hooks.add("before-tokenize", function (e) {
                                t.buildPlaceholders(e, "jinja2", n);
                            }),
                            e.hooks.add("after-tokenize", function (e) {
                                t.tokenizePlaceholders(e, "jinja2");
                            });
                    })(e);
            }
            (e.exports = o), (o.displayName = "django"), (o.aliases = ["jinja2"]);
        },
        246546: (e) => {
            function n(e) {
                !(function (e) {
                    function n(e, n) {
                        return "___" + e.toUpperCase() + n + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (t, a, o, r) {
                                if (t.language === a) {
                                    var i = (t.tokenStack = []);
                                    (t.code = t.code.replace(o, function (e) {
                                        if ("function" == typeof r && !r(e)) return e;
                                        for (var o, s = i.length; -1 !== t.code.indexOf((o = n(a, s))); ) ++s;
                                        return (i[s] = e), o;
                                    })),
                                        (t.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (t, a) {
                                if (t.language === a && t.tokenStack) {
                                    t.grammar = e.languages[a];
                                    var o = 0,
                                        r = Object.keys(t.tokenStack);
                                    !(function i(s) {
                                        for (var l = 0; l < s.length && !(o >= r.length); l++) {
                                            var u = s[l];
                                            if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
                                                var g = r[o],
                                                    c = t.tokenStack[g],
                                                    p = "string" == typeof u ? u : u.content,
                                                    f = n(a, g),
                                                    d = p.indexOf(f);
                                                if (d > -1) {
                                                    ++o;
                                                    var k = p.substring(0, d),
                                                        h = new e.Token(a, e.tokenize(c, t.grammar), "language-" + a, c),
                                                        b = p.substring(d + f.length),
                                                        m = [];
                                                    k && m.push.apply(m, i([k])), m.push(h), b && m.push.apply(m, i([b])), "string" == typeof u ? s.splice.apply(s, [l, 1].concat(m)) : (u.content = m);
                                                }
                                            } else u.content && i(u.content);
                                        }
                                        return s;
                                    })(t.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = n), (n.displayName = "markupTemplating"), (n.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_django.41daa79a.js.map

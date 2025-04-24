"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_smarty", "react-syntax-highlighter_languages_refractor_markupTemplating"],
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
                                        for (var p = 0; p < o.length && !(r >= i.length); p++) {
                                            var l = o[p];
                                            if ("string" == typeof l || (l.content && "string" == typeof l.content)) {
                                                var u = i[r],
                                                    g = n.tokenStack[u],
                                                    d = "string" == typeof l ? l : l.content,
                                                    c = t(a, u),
                                                    f = d.indexOf(c);
                                                if (f > -1) {
                                                    ++r;
                                                    var m = d.substring(0, f),
                                                        h = new e.Token(a, e.tokenize(g, n.grammar), "language-" + a, g),
                                                        b = d.substring(f + c.length),
                                                        k = [];
                                                    m && k.push.apply(k, s([m])), k.push(h), b && k.push.apply(k, s([b])), "string" == typeof l ? o.splice.apply(o, [p, 1].concat(k)) : (l.content = k);
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
        803051: (e, t, n) => {
            var a = n(246546);
            function r(e) {
                e.register(a),
                    (function (e) {
                        (e.languages.smarty = {
                            comment: { pattern: /^\{\*[\s\S]*?\*\}/, greedy: !0 },
                            "embedded-php": { pattern: /^\{php\}[\s\S]*?\{\/php\}/, greedy: !0, inside: { smarty: { pattern: /^\{php\}|\{\/php\}$/, inside: null }, php: { pattern: /[\s\S]+/, alias: "language-php", inside: e.languages.php } } },
                            string: [
                                { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0, inside: { interpolation: { pattern: /\{[^{}]*\}|`[^`]*`/, inside: { "interpolation-punctuation": { pattern: /^[{`]|[`}]$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: null } } }, variable: /\$\w+/ } },
                                { pattern: /'(?:\\.|[^'\\\r\n])*'/, greedy: !0 },
                            ],
                            keyword: { pattern: /(^\{\/?)[a-z_]\w*\b(?!\()/i, lookbehind: !0, greedy: !0 },
                            delimiter: { pattern: /^\{\/?|\}$/, greedy: !0, alias: "punctuation" },
                            number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,
                            variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, { pattern: /(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/, lookbehind: !0 }, { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 }],
                            function: { pattern: /(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i, lookbehind: !0 },
                            "attr-name": /\b[a-z_]\w*(?=\s*=)/i,
                            boolean: /\b(?:false|no|off|on|true|yes)\b/,
                            punctuation: /[\[\](){}.,:`]|->/,
                            operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/],
                        }),
                            (e.languages.smarty["embedded-php"].inside.smarty.inside = e.languages.smarty),
                            (e.languages.smarty.string[0].inside.interpolation.inside.expression.inside = e.languages.smarty);
                        var t = /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
                            n = RegExp(
                                /\{\*[\s\S]*?\*\}/.source +
                                    "|" +
                                    /\{php\}[\s\S]*?\{\/php\}/.source +
                                    "|" +
                                    /\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(/<str>/g, function () {
                                        return t.source;
                                    }),
                                "g",
                            );
                        e.hooks.add("before-tokenize", function (t) {
                            var a = !1;
                            e.languages["markup-templating"].buildPlaceholders(t, "smarty", n, function (e) {
                                return "{/literal}" === e && (a = !1), !a && ("{literal}" === e && (a = !0), !0);
                            });
                        }),
                            e.hooks.add("after-tokenize", function (t) {
                                e.languages["markup-templating"].tokenizePlaceholders(t, "smarty");
                            });
                    })(e);
            }
            (e.exports = r), (r.displayName = "smarty"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_smarty.28e89daa.js.map

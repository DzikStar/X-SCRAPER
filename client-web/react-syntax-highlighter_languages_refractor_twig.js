"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_twig", "react-syntax-highlighter_languages_refractor_markupTemplating"],
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
                                    var o = (n.tokenStack = []);
                                    (n.code = n.code.replace(r, function (e) {
                                        if ("function" == typeof i && !i(e)) return e;
                                        for (var r, s = o.length; -1 !== n.code.indexOf((r = t(a, s))); ) ++s;
                                        return (o[s] = e), r;
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
                                    !(function o(s) {
                                        for (var g = 0; g < s.length && !(r >= i.length); g++) {
                                            var l = s[g];
                                            if ("string" == typeof l || (l.content && "string" == typeof l.content)) {
                                                var u = i[r],
                                                    p = n.tokenStack[u],
                                                    c = "string" == typeof l ? l : l.content,
                                                    f = t(a, u),
                                                    d = c.indexOf(f);
                                                if (d > -1) {
                                                    ++r;
                                                    var k = c.substring(0, d),
                                                        h = new e.Token(a, e.tokenize(p, n.grammar), "language-" + a, p),
                                                        m = c.substring(d + f.length),
                                                        b = [];
                                                    k && b.push.apply(b, o([k])), b.push(h), m && b.push.apply(b, o([m])), "string" == typeof l ? s.splice.apply(s, [g, 1].concat(b)) : (l.content = b);
                                                }
                                            } else l.content && o(l.content);
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
        518849: (e, t, n) => {
            var a = n(246546);
            function r(e) {
                e.register(a),
                    (e.languages.twig = { comment: /^\{#[\s\S]*?#\}$/, "tag-name": { pattern: /(^\{%-?\s*)\w+/, lookbehind: !0, alias: "keyword" }, delimiter: { pattern: /^\{[{%]-?|-?[%}]\}$/, alias: "punctuation" }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, boolean: /\b(?:false|null|true)\b/, number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/, operator: [{ pattern: /(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: !0 }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], punctuation: /[()\[\]{}:.,]/ }),
                    e.hooks.add("before-tokenize", function (t) {
                        if ("twig" === t.language) {
                            e.languages["markup-templating"].buildPlaceholders(t, "twig", /\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g);
                        }
                    }),
                    e.hooks.add("after-tokenize", function (t) {
                        e.languages["markup-templating"].tokenizePlaceholders(t, "twig");
                    });
            }
            (e.exports = r), (r.displayName = "twig"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_twig.46b21eea.js.map

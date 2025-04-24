"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_handlebars", "react-syntax-highlighter_languages_refractor_markupTemplating"],
    {
        608626: (e, a, n) => {
            var t = n(246546);
            function r(e) {
                e.register(t),
                    (function (e) {
                        (e.languages.handlebars = { comment: /\{\{![\s\S]*?\}\}/, delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" }, string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/, boolean: /\b(?:false|true)\b/, block: { pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/, lookbehind: !0, alias: "keyword" }, brackets: { pattern: /\[[^\]]+\]/, inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ } }, punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/, variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/ }),
                            e.hooks.add("before-tokenize", function (a) {
                                e.languages["markup-templating"].buildPlaceholders(a, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
                            }),
                            e.hooks.add("after-tokenize", function (a) {
                                e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars");
                            }),
                            (e.languages.hbs = e.languages.handlebars);
                    })(e);
            }
            (e.exports = r), (r.displayName = "handlebars"), (r.aliases = ["hbs"]);
        },
        246546: (e) => {
            function a(e) {
                !(function (e) {
                    function a(e, a) {
                        return "___" + e.toUpperCase() + a + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (n, t, r, s) {
                                if (n.language === t) {
                                    var i = (n.tokenStack = []);
                                    (n.code = n.code.replace(r, function (e) {
                                        if ("function" == typeof s && !s(e)) return e;
                                        for (var r, o = i.length; -1 !== n.code.indexOf((r = a(t, o))); ) ++o;
                                        return (i[o] = e), r;
                                    })),
                                        (n.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (n, t) {
                                if (n.language === t && n.tokenStack) {
                                    n.grammar = e.languages[t];
                                    var r = 0,
                                        s = Object.keys(n.tokenStack);
                                    !(function i(o) {
                                        for (var l = 0; l < o.length && !(r >= s.length); l++) {
                                            var u = o[l];
                                            if ("string" == typeof u || (u.content && "string" == typeof u.content)) {
                                                var g = s[r],
                                                    c = n.tokenStack[g],
                                                    p = "string" == typeof u ? u : u.content,
                                                    f = a(t, g),
                                                    d = p.indexOf(f);
                                                if (d > -1) {
                                                    ++r;
                                                    var k = p.substring(0, d),
                                                        b = new e.Token(t, e.tokenize(c, n.grammar), "language-" + t, c),
                                                        h = p.substring(d + f.length),
                                                        m = [];
                                                    k && m.push.apply(m, i([k])), m.push(b), h && m.push.apply(m, i([h])), "string" == typeof u ? o.splice.apply(o, [l, 1].concat(m)) : (u.content = m);
                                                }
                                            } else u.content && i(u.content);
                                        }
                                        return o;
                                    })(n.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = a), (a.displayName = "markupTemplating"), (a.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_handlebars.17b402da.js.map

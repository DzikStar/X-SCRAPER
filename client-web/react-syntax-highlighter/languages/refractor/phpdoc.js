"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_phpdoc", "react-syntax-highlighter_languages_refractor_javadoclike", "react-syntax-highlighter_languages_refractor_markupTemplating", "react-syntax-highlighter_languages_refractor_php"],
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
                                            i = e.languages[a];
                                        if (i) {
                                            var r = i[n];
                                            if (!r) {
                                                var s = {};
                                                (s[n] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" }), (r = (i = e.languages.insertBefore(a, "comment", s))[n]);
                                            }
                                            if ((r instanceof RegExp && (r = i[n] = { pattern: r }), Array.isArray(r))) for (var o = 0, l = r.length; o < l; o++) r[o] instanceof RegExp && (r[o] = { pattern: r[o] }), t(r[o]);
                                            else t(r);
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
        246546: (e) => {
            function a(e) {
                !(function (e) {
                    function a(e, a) {
                        return "___" + e.toUpperCase() + a + "___";
                    }
                    Object.defineProperties((e.languages["markup-templating"] = {}), {
                        buildPlaceholders: {
                            value: function (t, n, i, r) {
                                if (t.language === n) {
                                    var s = (t.tokenStack = []);
                                    (t.code = t.code.replace(i, function (e) {
                                        if ("function" == typeof r && !r(e)) return e;
                                        for (var i, o = s.length; -1 !== t.code.indexOf((i = a(n, o))); ) ++o;
                                        return (s[o] = e), i;
                                    })),
                                        (t.grammar = e.languages.markup);
                                }
                            },
                        },
                        tokenizePlaceholders: {
                            value: function (t, n) {
                                if (t.language === n && t.tokenStack) {
                                    t.grammar = e.languages[n];
                                    var i = 0,
                                        r = Object.keys(t.tokenStack);
                                    !(function s(o) {
                                        for (var l = 0; l < o.length && !(i >= r.length); l++) {
                                            var p = o[l];
                                            if ("string" == typeof p || (p.content && "string" == typeof p.content)) {
                                                var c = r[i],
                                                    d = t.tokenStack[c],
                                                    u = "string" == typeof p ? p : p.content,
                                                    b = a(n, c),
                                                    g = u.indexOf(b);
                                                if (g > -1) {
                                                    ++i;
                                                    var f = u.substring(0, g),
                                                        h = new e.Token(n, e.tokenize(d, t.grammar), "language-" + n, d),
                                                        y = u.substring(g + b.length),
                                                        m = [];
                                                    f && m.push.apply(m, s([f])), m.push(h), y && m.push.apply(m, s([y])), "string" == typeof p ? o.splice.apply(o, [l, 1].concat(m)) : (p.content = m);
                                                }
                                            } else p.content && s(p.content);
                                        }
                                        return o;
                                    })(t.tokens);
                                }
                            },
                        },
                    });
                })(e);
            }
            (e.exports = a), (a.displayName = "markupTemplating"), (a.aliases = []);
        },
        196974: (e, a, t) => {
            var n = t(246546);
            function i(e) {
                e.register(n),
                    (function (e) {
                        var a = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
                            t = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: !0, lookbehind: !0 }, { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: !0, lookbehind: !0 }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
                            n = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                            i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
                            r = /[{}\[\](),:;]/;
                        e.languages.php = {
                            delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" },
                            comment: a,
                            variable: /\$+(?:\w+\b|(?=\{))/,
                            package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: !0, inside: { punctuation: /\\/ } },
                            "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: !0, alias: "class-name" },
                            "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: !0, alias: "function" },
                            keyword: [{ pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i, alias: "type-casting", greedy: !0, lookbehind: !0 }, { pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 }, { pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i, alias: "type-declaration", greedy: !0 }, { pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i, alias: "type-declaration", greedy: !0, lookbehind: !0 }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: !0 }, { pattern: /(\byield\s+)from\b/i, lookbehind: !0 }, /\bclass\b/i, { pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i, lookbehind: !0 }],
                            "argument-name": { pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: !0 },
                            "class-name": [
                                { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
                                { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: !0, lookbehind: !0 },
                                { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
                                { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                                { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: !0, inside: { punctuation: /\\/ } },
                                { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                                { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: !0 },
                                { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: !0, inside: { punctuation: /\\/ } },
                                { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: !0 },
                                { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: !0, inside: { punctuation: /\\/ } },
                                { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: !0, lookbehind: !0 },
                                { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                                { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: !0, lookbehind: !0 },
                                { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                            ],
                            constant: t,
                            function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: !0, inside: { punctuation: /\\/ } },
                            property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
                            number: n,
                            operator: i,
                            punctuation: r,
                        };
                        var s = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: !0, inside: e.languages.php },
                            o = [
                                { pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: !0, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } },
                                { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: !0, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: s } },
                                { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: !0 },
                                { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: !0 },
                                { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: !0, inside: { interpolation: s } },
                            ];
                        e.languages.insertBefore("php", "variable", {
                            string: o,
                            attribute: {
                                pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                                greedy: !0,
                                inside: {
                                    "attribute-content": {
                                        pattern: /^(#\[)[\s\S]+(?=\]$)/,
                                        lookbehind: !0,
                                        inside: {
                                            comment: a,
                                            string: o,
                                            "attribute-class-name": [
                                                { pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: !0, lookbehind: !0 },
                                                { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: !0, lookbehind: !0, inside: { punctuation: /\\/ } },
                                            ],
                                            constant: t,
                                            number: n,
                                            operator: i,
                                            punctuation: r,
                                        },
                                    },
                                    delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
                                },
                            },
                        }),
                            e.hooks.add("before-tokenize", function (a) {
                                if (/<\?/.test(a.code)) {
                                    e.languages["markup-templating"].buildPlaceholders(a, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g);
                                }
                            }),
                            e.hooks.add("after-tokenize", function (a) {
                                e.languages["markup-templating"].tokenizePlaceholders(a, "php");
                            });
                    })(e);
            }
            (e.exports = i), (i.displayName = "php"), (i.aliases = []);
        },
        273431: (e, a, t) => {
            var n = t(196974),
                i = t(94111);
            function r(e) {
                e.register(n),
                    e.register(i),
                    (function (e) {
                        var a = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
                        (e.languages.phpdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + a + "\\s+)?)\\$\\w+"), lookbehind: !0 } })), e.languages.insertBefore("phpdoc", "keyword", { "class-name": [{ pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + a), lookbehind: !0, inside: { keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/, punctuation: /[|\\[\]()]/ } }] }), e.languages.javadoclike.addSupport("php", e.languages.phpdoc);
                    })(e);
            }
            (e.exports = r), (r.displayName = "phpdoc"), (r.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_phpdoc.d33534da.js.map

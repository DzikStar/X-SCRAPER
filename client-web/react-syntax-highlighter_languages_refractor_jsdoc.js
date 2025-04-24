"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_jsdoc", "react-syntax-highlighter_languages_refractor_javadoclike", "react-syntax-highlighter_languages_refractor_typescript"],
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
                                            s = e.languages[a];
                                        if (s) {
                                            var r = s[n];
                                            if (!r) {
                                                var i = {};
                                                (i[n] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" }), (r = (s = e.languages.insertBefore(a, "comment", i))[n]);
                                            }
                                            if ((r instanceof RegExp && (r = s[n] = { pattern: r }), Array.isArray(r))) for (var o = 0, p = r.length; o < p; o++) r[o] instanceof RegExp && (r[o] = { pattern: r[o] }), t(r[o]);
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
        780880: (e, a, t) => {
            var n = t(94111),
                s = t(797288);
            function r(e) {
                e.register(n),
                    e.register(s),
                    (function (e) {
                        var a = e.languages.javascript,
                            t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
                            n = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
                        (e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(n + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } })),
                            e.languages.insertBefore("jsdoc", "keyword", {
                                "optional-parameter": { pattern: RegExp(n + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: a, alias: "language-javascript" }, punctuation: /[=[\]]/ } },
                                "class-name": [
                                    {
                                        pattern: RegExp(
                                            /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function () {
                                                return t;
                                            }),
                                        ),
                                        lookbehind: !0,
                                        inside: { punctuation: /\./ },
                                    },
                                    { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: a.string, number: a.number, boolean: a.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } },
                                ],
                                example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: a, alias: "language-javascript" } } },
                            }),
                            e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
                    })(e);
            }
            (e.exports = r), (r.displayName = "jsdoc"), (r.aliases = []);
        },
        797288: (e) => {
            function a(e) {
                !(function (e) {
                    (e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ })), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
                    var a = e.languages.extend("typescript", {});
                    delete a["class-name"], (e.languages.typescript["class-name"].inside = a), e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: a } } } }), (e.languages.ts = e.languages.typescript);
                })(e);
            }
            (e.exports = a), (a.displayName = "typescript"), (a.aliases = ["ts"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_jsdoc.3e9184ba.js.map

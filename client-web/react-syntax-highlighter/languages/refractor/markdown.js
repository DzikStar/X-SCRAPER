"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_markdown"],
    {
        775369: (e) => {
            function n(e) {
                !(function (e) {
                    var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
                    function t(e) {
                        return (
                            (e = e.replace(/<inner>/g, function () {
                                return n;
                            })),
                            RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                        );
                    }
                    var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                        r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
                            return a;
                        }),
                        i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                    (e.languages.markdown = e.languages.extend("markup", {})),
                        e.languages.insertBefore("markdown", "prolog", {
                            "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } } },
                            blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
                            table: { pattern: RegExp("^" + r + i + "(?:" + r + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + r + i + ")(?:" + r + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(a), inside: e.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + r + ")" + i + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + r + "$"), inside: { "table-header": { pattern: RegExp(a), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } } } },
                            code: [
                                { pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" },
                                { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } },
                            ],
                            title: [
                                { pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } },
                                { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } },
                            ],
                            hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" },
                            list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" },
                            "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" },
                            bold: { pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } },
                            italic: { pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } },
                            strike: { pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } },
                            "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] },
                            url: { pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } },
                        }),
                        ["url", "bold", "italic", "strike"].forEach(function (n) {
                            ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (t) {
                                n !== t && (e.languages.markdown[n].inside.content.inside[t] = e.languages.markdown[t]);
                            });
                        }),
                        e.hooks.add("after-tokenize", function (e) {
                            ("markdown" !== e.language && "md" !== e.language) ||
                                (function e(n) {
                                    if (n && "string" != typeof n)
                                        for (var t = 0, a = n.length; t < a; t++) {
                                            var r = n[t];
                                            if ("code" === r.type) {
                                                var i = r.content[1],
                                                    o = r.content[3];
                                                if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
                                                    var s = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                                        l = "language-" + (s = (/[a-z][\w-]*/i.exec(s) || [""])[0].toLowerCase());
                                                    o.alias ? ("string" == typeof o.alias ? (o.alias = [o.alias, l]) : o.alias.push(l)) : (o.alias = [l]);
                                                }
                                            } else e(r.content);
                                        }
                                })(e.tokens);
                        }),
                        e.hooks.add("wrap", function (n) {
                            if ("code-block" === n.type) {
                                for (var t = "", a = 0, r = n.classes.length; a < r; a++) {
                                    var i = n.classes[a],
                                        d = /language-(.+)/.exec(i);
                                    if (d) {
                                        t = d[1];
                                        break;
                                    }
                                }
                                var u,
                                    p = e.languages[t];
                                if (p)
                                    n.content = e.highlight(
                                        ((u = n.content.value),
                                        u.replace(o, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, n) {
                                            var t;
                                            if ("#" === (n = n.toLowerCase())[0]) return (t = "x" === n[1] ? parseInt(n.slice(2), 16) : Number(n.slice(1))), l(t);
                                            var a = s[n];
                                            return a || e;
                                        })),
                                        p,
                                        t,
                                    );
                                else if (t && "none" !== t && e.plugins.autoloader) {
                                    var c = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
                                    (n.attributes.id = c),
                                        e.plugins.autoloader.loadLanguages(t, function () {
                                            var n = document.getElementById(c);
                                            n && (n.innerHTML = e.highlight(n.textContent, e.languages[t], t));
                                        });
                                }
                            }
                        });
                    var o = RegExp(e.languages.markup.tag.pattern.source, "gi"),
                        s = { amp: "&", lt: "<", gt: ">", quot: '"' },
                        l = String.fromCodePoint || String.fromCharCode;
                    e.languages.md = e.languages.markdown;
                })(e);
            }
            (e.exports = n), (n.displayName = "markdown"), (n.aliases = ["md"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_markdown.2ea7c95a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Markdown"],
    {
        312778: (e, t, n) => {
            n.r(t), n.d(t, { Markdown: () => D, default: () => T });
            var r = n(202784),
                a = n(719870),
                l = n(325686);
            const o = (e, t, n, r, a) => ({
                    name: e,
                    level: "inline",
                    start(e) {
                        let a,
                            l = e;
                        for (; l; ) {
                            if (((a = l.indexOf(r)), -1 === a)) return;
                            if (0 === a || " " === l.charAt(a - 1) || "(" === l.charAt(a - 1) || "\n" === l.charAt(a - 1)) {
                                if (l.substring(a).match(t)) return a;
                            }
                            l = l.substring(a + r.length).replace(n, "");
                        }
                    },
                    tokenizer(e) {
                        const n = e.match(t);
                        if (n) return { type: a ? "blockLatex" : "inlineLatex", raw: n[0], text: n[1].trim() };
                    },
                }),
                s = o("inlineDollar", /^\$((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\$(?=[\s?!.,:？！。，：)]|$)/, /^\$+/, "$", !1),
                i = o("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, /^\$+/, "$$", !0),
                c = o("inlineParen", /^\\\((.*?)\\\)/, /^\\[()]/, "\\(", !1),
                d = o("inlineBracket", /^\\\[([\s\S]*?)\\\]/, /^\\[[\]]/, "\\[", !0),
                m = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                p = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                u = [
                    s,
                    i,
                    c,
                    d,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(m),
                                n = e.match(p),
                                r = t ?? n ?? null;
                            if (r) return { type: "blockLatex", raw: r[0], text: r[2].trim() };
                        },
                    },
                ];
            n(136728);
            var k = n(731708),
                b = n(65469);
            function h({ token: e }) {
                return r.createElement(b.Z, { code: e.text, language: e.lang });
            }
            var f = n(392237);
            function y({ token: e }) {
                return r.createElement(k.ZP, { style: g.codeSpan }, e.text);
            }
            const g = f.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: f.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 } }));
            function E({ children: e, style: t, token: n }) {
                return e.length ? r.createElement(k.ZP, { style: t }, e) : r.createElement(k.ZP, { style: t }, n.text);
            }
            function x({ children: e, token: t }) {
                const n = r.useMemo(() => {
                    switch (t.depth) {
                        case 1:
                            return { weight: "heavy", size: "title4" };
                        case 2:
                            return { weight: "heavy" };
                        default:
                            return { weight: "bold" };
                    }
                }, [t.depth]);
                return r.createElement(k.ZP, n, r.createElement(E, { style: { display: "block" }, token: t }, e));
            }
            var $ = n(366929);
            function L({ content: e, isBlock: t = !1 }) {
                const n = r.useRef(null),
                    [a, o] = r.useState(!1);
                r.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            $.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 }), o(!1);
                        } catch {
                            o(!0);
                        }
                }, [e, t, n]);
                const s = r.useMemo(() => [t ? w.block : null], [t]);
                return a ? r.createElement(k.ZP, null, e) : r.createElement(l.Z, { ref: n, style: s });
            }
            const w = f.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(543673), n(240753), n(128399);
            const C = ["http:", "https:"];
            function S({ disableLinks: e, token: t }) {
                let n;
                try {
                    t.href && (n = new URL(t.href));
                } catch (e) {}
                if (e || !n || !C.includes(n.protocol)) {
                    let e;
                    return (e = t.text === t.href ? t.text : `${t.text} ${t.href ? `(${t.href})` : ""}`), r.createElement(k.ZP, null, e);
                }
                return r.createElement(k.ZP, { link: t.href }, t.text);
            }
            const R = ({ disableLinks: e, item: t }) => {
                const n = [];
                return (
                    t.tokens?.length &&
                        t.tokens.forEach((t, a) => {
                            n.push(r.createElement(B, { disableLinks: e, key: `token-${a}`, token: t }));
                        }),
                    r.createElement("li", { style: v.listItem }, n)
                );
            };
            function Z({ disableLinks: e, token: t }) {
                const n = [];
                return (
                    t.items?.length &&
                        t.items.forEach((t, a) => {
                            n.push(r.createElement(R, { disableLinks: e, item: t, key: `li-${a.toString()}` }));
                        }),
                    t.ordered ? r.createElement("ol", { start: t.start, style: v.list }, n) : r.createElement("ul", { style: v.list }, n)
                );
            }
            const v = f.default.create((e) => ({ list: { marginBlockStart: "0.5em", marginBlockEnd: "0.5em", paddingInlineStart: "2em", display: "flex", flexDirection: "column", gap: "0.3em" }, listItem: { fontFamily: e.fontFamilies.normal, lineHeight: "140%" } }));
            function W({ children: e, isRootLevel: t, token: n }) {
                return r.createElement(E, { style: t && P.paragraph, token: n }, e);
            }
            const P = f.default.create((e) => ({ paragraph: { display: "block" } }));
            function z({ disableLinks: e, token: t }) {
                const n = t.header
                        ? r.createElement(
                              "tr",
                              { style: M.tableRow },
                              t.header?.map((t, n) =>
                                  r.createElement(
                                      "th",
                                      { style: M.tableHeaderCell },
                                      r.createElement(
                                          l.Z,
                                          { style: M.cellContent },
                                          t.tokens?.map((t, a) => r.createElement(B, { disableLinks: e, key: `th-${n}-${a}`, token: t })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    a = t.rows
                        ? t.rows?.map((t, n) =>
                              r.createElement(
                                  "tr",
                                  { style: M.tableRow },
                                  t.map((t, a) =>
                                      r.createElement(
                                          "td",
                                          { style: M.tableCell },
                                          r.createElement(
                                              l.Z,
                                              { style: M.cellContent },
                                              t.tokens?.map((t, l) => r.createElement(B, { disableLinks: e, key: `td-${n}-${a}-${l}`, token: t })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return r.createElement(l.Z, { style: M.tableContainer }, r.createElement("table", { style: M.table }, n, a));
            }
            const M = f.default.create((e) => ({ codeSpan: { display: "inline", fontFamily: "monospace", fontSize: e.fontSizesPx.subtext1, color: f.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 }, paragraph: { display: "block" }, listItem: { fontFamily: e.fontFamilies.normal, fontSize: e.fontSizesPx.body, fontWeight: e.fontWeights.regular }, tableContainer: { paddingVertical: e.spaces.space16 }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            function B({ disableLinks: e, isRootLevel: t, token: n }) {
                const a = r.useMemo(() => {
                    const t = [];
                    return (
                        n.tokens?.length &&
                            n.tokens.forEach((n, a) => {
                                const l = `${a}`;
                                t.push(r.createElement(B, { disableLinks: e, key: l, token: n }));
                            }),
                        t
                    );
                }, [n.tokens, e]);
                switch (n.type) {
                    case "code":
                        return r.createElement(h, { token: n });
                    case "codespan":
                        return r.createElement(y, { token: n });
                    case "list":
                        return r.createElement(Z, { disableLinks: e, token: n });
                    case "table":
                        return r.createElement(z, { disableLinks: e, token: n });
                    case "space":
                        return r.createElement("br", null);
                    case "text":
                        return r.createElement(E, { token: n }, a);
                    case "link":
                        return r.createElement(S, { disableLinks: e, token: n });
                    case "heading":
                        return r.createElement(x, { token: n }, a);
                    case "strong":
                        return r.createElement(k.ZP, { weight: "bold" }, r.createElement(E, { token: n }, a));
                    case "blockLatex":
                        return r.createElement(L, { content: n.text, isBlock: !0 });
                    case "inlineLatex":
                        return r.createElement(L, { content: n.text });
                    default:
                        return r.createElement(W, { isRootLevel: t, token: n }, a);
                }
            }
            a.TU.use({ extensions: u });
            const D = r.memo(({ disableLinks: e, markdownText: t, style: n }) => {
                    const o = r.useMemo(() => a.TU.lexer(t), [t]),
                        s = r.useMemo(() => o.map((t, n) => r.createElement(B, { disableLinks: !!e, isRootLevel: !0, key: `parsedToken-${n}`, token: t })), [o, e]);
                    return r.createElement(l.Z, { style: n }, s);
                }),
                T = D;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Markdown.424f5c9a.js.map

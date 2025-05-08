"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Markdown"],
    {
        312778: (e, t, n) => {
            n.r(t), n.d(t, { Markdown: () => H, default: () => D });
            var r = n(202784),
                o = n(719870),
                a = n(325686);
            const l = (e, t, n, r, o) => ({
                    name: e,
                    level: "inline",
                    start(e) {
                        let o,
                            a = e;
                        for (; a; ) {
                            if (((o = a.indexOf(r)), -1 === o)) return;
                            if (0 === o || " " === a.charAt(o - 1) || "(" === a.charAt(o - 1) || "\n" === a.charAt(o - 1)) {
                                if (a.substring(o).match(t)) return o;
                            }
                            a = a.substring(o + r.length).replace(n, "");
                        }
                    },
                    tokenizer(e) {
                        const n = e.match(t);
                        if (n) return { type: o ? "blockLatex" : "inlineLatex", raw: n[0], text: n[1].trim() };
                    },
                }),
                i = l("inlineDollar", /^\$((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\$(?=[\s?!.,:？！。，：)]|$)/, /^\$+/, "$", !1),
                s = l("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, /^\$+/, "$$", !0),
                c = l("inlineParen", /^\\\((.*?)\\\)/, /^\\[()]/, "\\(", !1),
                d = l("inlineBracket", /^\\\[([\s\S]*?)\\\]/, /^\\[[\]]/, "\\[", !0),
                m = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                u = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                p = [
                    i,
                    s,
                    c,
                    d,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(m),
                                n = e.match(u),
                                r = t ?? n ?? null;
                            if (r) return { type: "blockLatex", raw: r[0], text: r[2].trim() };
                        },
                    },
                ];
            n(136728);
            var h = n(731708),
                k = n(65469);
            function y({ token: e }) {
                return r.createElement(k.Z, { code: e.text, language: e.lang });
            }
            var b = n(392237);
            function g({ token: e }) {
                return r.createElement(h.ZP, { style: f.codeSpan }, e.text);
            }
            const f = b.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: b.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 } }));
            function E({ children: e, style: t, token: n }) {
                return e.length ? r.createElement(h.ZP, { style: t }, e) : r.createElement(h.ZP, { style: t }, n.text);
            }
            function C({ children: e, token: t }) {
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
                return r.createElement(h.ZP, n, r.createElement(E, { style: { display: "block" }, token: t }, e));
            }
            var w = n(366929);
            function v({ content: e, isBlock: t = !1 }) {
                const n = r.useRef(null),
                    [o, l] = r.useState(!1);
                r.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            w.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 }), l(!1);
                        } catch {
                            l(!0);
                        }
                }, [e, t, n]);
                const i = r.useMemo(() => [t ? x.block : null], [t]);
                return o ? r.createElement(h.ZP, null, e) : r.createElement(a.Z, { ref: n, style: i });
            }
            const x = b.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(543673), n(240753), n(128399);
            const Z = ["http:", "https:"];
            function S({ disableLinks: e, token: t }) {
                let n;
                try {
                    t.href && (n = new URL(t.href));
                } catch (e) {}
                if (e || !n || !Z.includes(n.protocol)) {
                    let e;
                    return (e = t.text === t.href ? t.text : `${t.text} ${t.href ? `(${t.href})` : ""}`), r.createElement(h.ZP, null, e);
                }
                return r.createElement(h.ZP, { link: t.href }, t.text);
            }
            const $ = ({ disableLinks: e, item: t }) => {
                const n = [];
                return (
                    t.tokens?.length &&
                        t.tokens.forEach((t, o) => {
                            n.push(r.createElement(I, { disableLinks: e, key: `token-${o}`, token: t }));
                        }),
                    r.createElement("li", { style: _.listItem }, n)
                );
            };
            function L({ disableLinks: e, token: t }) {
                const n = [];
                return (
                    t.items?.length &&
                        t.items.forEach((t, o) => {
                            n.push(r.createElement($, { disableLinks: e, item: t, key: `li-${o.toString()}` }));
                        }),
                    t.ordered ? r.createElement("ol", { start: t.start, style: _.list }, n) : r.createElement("ul", { style: _.list }, n)
                );
            }
            const _ = b.default.create((e) => ({ list: { marginBlockStart: "0.5em", marginBlockEnd: "0.5em", paddingInlineStart: "2em", display: "flex", flexDirection: "column", gap: "0.3em" }, listItem: { fontFamily: e.fontFamilies.normal, lineHeight: "140%" } }));
            function P({ children: e, isRootLevel: t, token: n }) {
                return r.createElement(E, { style: t && R.paragraph, token: n }, e);
            }
            const R = b.default.create((e) => ({ paragraph: { display: "block" } }));
            function T({ disableLinks: e, token: t }) {
                const n = t.header
                        ? r.createElement(
                              "tr",
                              { style: B.tableRow },
                              t.header?.map((t, n) =>
                                  r.createElement(
                                      "th",
                                      { style: B.tableHeaderCell },
                                      r.createElement(
                                          a.Z,
                                          { style: B.cellContent },
                                          t.tokens?.map((t, o) => r.createElement(I, { disableLinks: e, key: `th-${n}-${o}`, token: t })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    o = t.rows
                        ? t.rows?.map((t, n) =>
                              r.createElement(
                                  "tr",
                                  { style: B.tableRow },
                                  t.map((t, o) =>
                                      r.createElement(
                                          "td",
                                          { style: B.tableCell },
                                          r.createElement(
                                              a.Z,
                                              { style: B.cellContent },
                                              t.tokens?.map((t, a) => r.createElement(I, { disableLinks: e, key: `td-${n}-${o}-${a}`, token: t })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return r.createElement(a.Z, { style: B.tableContainer }, r.createElement("table", { style: B.table }, n, o));
            }
            const B = b.default.create((e) => ({ codeSpan: { display: "inline", fontFamily: "monospace", fontSize: e.fontSizesPx.subtext1, color: b.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 }, paragraph: { display: "block" }, listItem: { fontFamily: e.fontFamilies.normal, fontSize: e.fontSizesPx.body, fontWeight: e.fontWeights.regular }, tableContainer: { paddingVertical: e.spaces.space16 }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.small, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            function I({ disableLinks: e, isRootLevel: t, token: n }) {
                const o = r.useMemo(() => {
                    const t = [];
                    return (
                        n.tokens?.length &&
                            n.tokens.forEach((n, o) => {
                                const a = `${o}`;
                                t.push(r.createElement(I, { disableLinks: e, key: a, token: n }));
                            }),
                        t
                    );
                }, [n.tokens, e]);
                switch (n.type) {
                    case "code":
                        return r.createElement(y, { token: n });
                    case "codespan":
                        return r.createElement(g, { token: n });
                    case "list":
                        return r.createElement(L, { disableLinks: e, token: n });
                    case "table":
                        return r.createElement(T, { disableLinks: e, token: n });
                    case "space":
                        return r.createElement("br", null);
                    case "text":
                        return r.createElement(E, { token: n }, o);
                    case "link":
                        return r.createElement(S, { disableLinks: e, token: n });
                    case "heading":
                        return r.createElement(C, { token: n }, o);
                    case "strong":
                        return r.createElement(h.ZP, { weight: "bold" }, r.createElement(E, { token: n }, o));
                    case "blockLatex":
                        return r.createElement(v, { content: n.text, isBlock: !0 });
                    case "inlineLatex":
                        return r.createElement(v, { content: n.text });
                    default:
                        return r.createElement(P, { isRootLevel: t, token: n }, o);
                }
            }
            o.TU.use({ extensions: p });
            const H = r.memo(({ disableLinks: e, markdownText: t, style: n }) => {
                    const l = r.useMemo(() => o.TU.lexer(t), [t]),
                        i = r.useMemo(() => l.map((t, n) => r.createElement(I, { disableLinks: !!e, isRootLevel: !0, key: `parsedToken-${n}`, token: t })), [l, e]);
                    return r.createElement(a.Z, { style: n }, i);
                }),
                D = H;
        },
        301758: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(807896),
                o = n(202784),
                a = n(235902),
                l = n(521288),
                i = n(401388),
                s = n(988566),
                c = n(725516),
                d = n(443781),
                m = n(71620),
                u = n(668214),
                p = n(491963),
                h = n(836255);
            const k = (e, t) => t.tweetId,
                y = (e, t) => {
                    const n = t.tweetId,
                        r = n && h.Z.select(e, n);
                    return r ? (0, p.z0)(e, r) : void 0;
                },
                b = (0, u.Z)()
                    .propsFromState(() => ({ community: y, hydratedTweet: h.Z.createHydratedTweetSelector(k) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n, hydratedTweet: m, onAvatarClick: u, onMediaClick: p, onPress: h, onScreenNameClick: k, tweetId: y, withBirdwatchPivot: b = !0, ...g }) => {
                    const { featureSwitches: f, viewerUserId: E } = o.useContext(d.rC),
                        C = (0, c.z)(),
                        w = m?.community_id_str;
                    o.useEffect(() => {
                        w && (0, i.Z)(e) && n(w).catch(t());
                    }, [e, w, t, n]);
                    const v = o.useCallback(
                            (e) => {
                                C.scribeAction("click"), h && h(e);
                            },
                            [h, C],
                        ),
                        x = !!b,
                        Z = m && (0, s.D$)(m, E, e),
                        S = Z && (0, s.rl)(Z);
                    return o.createElement(a.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => f.isTrue("responsive_web_edit_tweet_enabled") || f.isTrue("subscriptions_feature_labs_1004") } }, o.createElement(l.Z, (0, r.Z)({}, g, { loggedInUserId: E, onAvatarClick: u, onMediaClick: p, onPress: v, onScreenNameClick: k, shouldShowAltLabelAlways: !0, socialContextProps: S, tweet: m, withBirdwatchPivot: x })));
                });
        },
        721270: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => V, default: () => j });
            var r = n(202784),
                o = n(719870),
                a = n(325686),
                l = n(442730),
                i = n(952793),
                s = n(976021),
                c = n(978921),
                d = n(122670),
                m = n(595080),
                u = (n(136728), n(731708)),
                p = n(392237),
                h = n(67369),
                k = n(65469),
                y = n(988290);
            function b({ token: e }) {
                const t = (0, h.Zz)(),
                    { isGrokDrawer: n, isGrokShare: o } = (0, y.ZP)(),
                    { disableCodeBlockStickyHeader: l } = r.useContext(m.$);
                return r.createElement(a.Z, { style: g.codeContainer }, r.createElement(k.Z, { code: e.text, headerBarStyle: l ? void 0 : n || o || t ? g.drawerStickyContainer : g.stickyContainer, language: e.lang }));
            }
            const g = p.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1.25em" } }));
            function f({ token: e }) {
                const { isAnimated: t } = r.useContext(m.$),
                    n = r.useMemo(() => [E.codeSpan, t ? E.animation : null], [t]);
                return r.createElement(u.ZP, { style: n }, e.text);
            }
            const E = p.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: p.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            var C = n(33474);
            function w() {
                return r.createElement("hr", { style: v.horizontalRule });
            }
            const v = p.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var x = n(342430),
                Z = n(910594),
                S = n(488684);
            function $({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return r.createElement(S.Z, { screenName: e.handle || "" }, r.createElement(u.ZP, { link: t }, e.text));
            }
            const L = { level: 0 },
                _ = r.createContext(L);
            function P({ token: e }) {
                const { level: t } = r.useContext(_),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, o) => {
                        n.push(r.createElement(_.Provider, { key: `li-${o.toString()}`, value: { level: t + 1 } }, r.createElement(R, { isFirst: 0 === o, item: e, level: t })));
                    });
                const o = r.useMemo(
                    () =>
                        [
                            { ...T.list, ...T.level1 },
                            { ...T.list, ...T.level2 },
                            { ...T.list, ...T.level3 },
                        ][t] ?? { ...T.list, ...T.level4 },
                    [t],
                );
                return e.ordered ? r.createElement(_.Provider, { value: { level: t + 1 } }, r.createElement("ol", { dir: e.direction, start: e.start, style: o }, n)) : r.createElement(_.Provider, { value: { level: t + 1 } }, r.createElement("ul", { dir: e.direction, style: o }, n));
            }
            const R = ({ isFirst: e, item: t, level: n }) => {
                    const o = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            o.push(r.createElement(F, { key: `token-${t}`, token: e }));
                        });
                    const a = r.useMemo(() => {
                        let t = "0.8em";
                        return 1 === n && (t = "0.4em"), 2 === n && (t = "0.2em"), n >= 3 && (t = "0em"), { marginTop: t, ...(e ? { marginTop: 0 } : {}) };
                    }, [e, n]);
                    return r.createElement("li", { style: { ...T.listItem, ...a } }, o);
                },
                T = p.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.8em" }, firstListItem: { marginTop: 0 } }));
            var B = n(444342);
            function I({ children: e, isRootLevel: t, style: n, token: o }) {
                return r.createElement(s.P, { direction: o.direction }, r.createElement(u.ZP, { style: [t && H.paragraph, n] }, r.createElement(B.Z, { token: o }, e)));
            }
            const H = p.default.create((e) => ({ paragraph: { display: "block", marginBottom: "1.25em" } }));
            function D({ children: e, isRootLevel: t, token: n }) {
                return r.createElement(a.Z, { style: M.container }, r.createElement(u.ZP, { style: M.quoteText }, e));
            }
            const M = p.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginBottom: "1.25em" }, quoteText: { fontStyle: "italic" } }));
            var W = n(5741);
            function z({ token: e }) {
                const t = e.header
                        ? r.createElement(
                              "tr",
                              { style: A.tableRow },
                              e.header?.map((e, t) =>
                                  r.createElement(
                                      "th",
                                      { style: A.tableHeaderCell },
                                      r.createElement(
                                          a.Z,
                                          { style: A.cellContent },
                                          e.tokens?.map((e, n) => r.createElement(F, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              r.createElement(
                                  "tr",
                                  { style: A.tableRow },
                                  e.map((e, n) =>
                                      r.createElement(
                                          "td",
                                          { style: A.tableCell },
                                          r.createElement(
                                              a.Z,
                                              { style: A.cellContent },
                                              e.tokens?.map((e, o) => r.createElement(F, { key: `td-${t}-${n}-${o}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return r.createElement(a.Z, { style: A.tableContainer }, r.createElement("table", { style: A.table }, t, n));
            }
            const A = p.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } })),
                O = r.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: o } = r.useContext(m.$),
                            a = r.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const o = `${n}`;
                                            e.push(r.createElement(O, { key: o, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            l = r.createElement(I, { isRootLevel: t, style: [N.expandedLineHeight, e ? N.noMarginBottom : void 0], token: n }, a);
                        if (o && !o.includes(n.type)) return r.createElement(u.ZP, { style: N.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return r.createElement($, { token: n });
                            case "code":
                                return r.createElement(b, { token: n });
                            case "codespan":
                                return r.createElement(f, { token: n });
                            case "list":
                                return r.createElement(P, { token: n });
                            case "blockquote":
                                return r.createElement(D, { token: n }, a);
                            case "table":
                                return r.createElement(z, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return r.createElement("br", null);
                            case "hr":
                                return r.createElement(w, null);
                            case "text":
                                return r.createElement(B.Z, { token: n }, a);
                            case "link":
                                return r.createElement(Z.Z, { token: n });
                            case "heading":
                                return r.createElement(C.X, { token: n }, a);
                            case "strong":
                                return r.createElement(u.ZP, { style: N.expandedLineHeight, weight: "bold" }, r.createElement(B.Z, { token: n }, a));
                            case "em":
                                return r.createElement(u.ZP, { style: [N.expandedLineHeight, N.italic] }, r.createElement(B.Z, { token: n }, a));
                            case "emStrong":
                                return r.createElement(u.ZP, { style: [N.expandedLineHeight, N.italic], weight: "bold" }, r.createElement(B.Z, { token: n }, a));
                            case "blockLatex":
                                return r.createElement(x.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return r.createElement(x.Z, { content: n.text });
                            default:
                                return l;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                F = O,
                N = p.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: W.Y }, noMarginBottom: { marginBottom: 0 } }));
            function U(e) {
                return e.items && e.items.length ? U(e.items[0]) : e.tokens && e.tokens.length ? U(e.tokens[0]) : e.text || "";
            }
            function G(e) {
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                e.direction = l.Z.getTextDirection(U(e));
                        }
                    }),
                    e
                );
            }
            o.TU.use({ extensions: [d._, ...c.Z] });
            const K = [],
                V = r.memo(({ allowedTokenTypes: e, chatResponseAnnotations: t, citations: n, disableCodeBlockStickyHeader: c, disableLinks: d, isAnimated: u, markdownText: p, style: h }) => {
                    const k = (0, i.hC)("responsive_web_grok_links") && !u,
                        y = r.useMemo(() => {
                            const e = (function (e, t) {
                                if (!t) return e;
                                t.sort((e, t) => e.startIndex - t.startIndex);
                                let n = e,
                                    r = 0;
                                return (
                                    t.forEach(({ endIndex: e, startIndex: t }) => {
                                        const o = n.slice(t + r, e + r),
                                            a = `[${o}](https://x.com/i/grok?text=${encodeURIComponent(o)})`;
                                        (n = n.slice(0, t + r) + a + n.slice(e + r)), (r += a.length - (e - t));
                                    }),
                                    n
                                );
                            })(p, k ? t : void 0);
                            return G(o.TU.lexer(e ?? ""));
                        }, [p, t, k]),
                        b = r.useMemo(() => y.map((e, t) => r.createElement(F, { isLast: t === y.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [y]);
                    return r.createElement(m.Z, { allowedTokenTypes: e, citations: n ?? K, disableCodeBlockStickyHeader: c, disableLinks: d, isAnimated: u }, r.createElement(s.P, { direction: l.Z.getTextDirection(p ?? "") }, r.createElement(a.Z, { style: [{ display: "block" }, h] }, b)));
                }),
                j = V;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => l, Z: () => i });
            var r = n(202784);
            const o = [],
                a = { isAnimated: !1, citations: o, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0 },
                l = r.createContext(a);
            function i({ children: e, disableLinks: t, isAnimated: n, citations: a = o, disableCodeBlockStickyHeader: i, allowedTokenTypes: s }) {
                const c = a.length ? a : o,
                    d = r.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: c, disableCodeBlockStickyHeader: i, allowedTokenTypes: s }), [n, t, c, i, s]);
                return r.createElement(l.Provider, { value: d }, e);
            }
        },
        33474: (e, t, n) => {
            n.d(t, { X: () => s });
            var r = n(202784),
                o = n(67369),
                a = n(731708),
                l = n(976021),
                i = n(444342);
            function s({ children: e, token: t }) {
                const n = (0, o.yu)(),
                    s = r.useMemo(() => {
                        const e = { display: "block" };
                        switch (t.depth) {
                            case 1:
                                return (e.marginBottom = "0.5em"), { weight: "heavy", size: n ? "title2" : "title1", style: e };
                            case 2:
                                return (e.marginTop = "1.6em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "title4", style: e };
                            case 3:
                                return (e.marginTop = "1.3em"), (e.marginBottom = "0.6em"), { weight: "bold", size: "headline1", style: e };
                            default:
                                return { weight: "bold", style: e };
                        }
                    }, [t.depth, n]);
                return r.createElement(l.P, { direction: t.direction }, r.createElement(a.ZP, s, r.createElement(i.Z, { token: t }, e)));
            }
        },
        342430: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(366929),
                a = n(325686),
                l = n(731708),
                i = n(392237),
                s = n(595080);
            function c({ content: e, isBlock: t = !1 }) {
                const n = r.useRef(null),
                    [i, c] = r.useState(!1),
                    { isAnimated: m } = r.useContext(s.$);
                r.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            (n.current.innerHTML = ""), o.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 });
                            const r = document.createElement("code");
                            (r.className = "language-latex"), (r.innerText = e), (r.style.display = "none"), (r.className = t ? "raw_katex_block" : "raw_katex"), n.current?.appendChild(r), c(!1);
                        } catch {
                            c(!0);
                        }
                }, [e, t, n]);
                const u = r.useMemo(() => [t ? d.block : null, m ? d.animation : null], [t, m]);
                return i ? r.createElement(l.ZP, null, e) : r.createElement(a.Z, { ref: n, style: u });
            }
            const d = i.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        910594: (e, t, n) => {
            n.d(t, { Z: () => O });
            n(543673), n(240753), n(128399);
            var r = n(202784),
                o = n(731708),
                a = n(488684),
                l = n(466792),
                i = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(952793),
                m = n(725516),
                u = n(125363),
                p = n(327597),
                h = n(654917),
                k = n(595080),
                y = n(5741),
                b = n(45843),
                g = n(325686),
                f = n(818199),
                E = n(530732),
                C = n(630715),
                w = n(725405),
                v = n(809311);
            const x = "grok_citation_web_result",
                Z = ({ link: e }) => {
                    const { isAnimated: t } = r.useContext(k.$),
                        [n, o] = r.useState(!1),
                        a = (0, w.Z)(),
                        l = r.useCallback(() => {
                            o(!0), a.scribe({ action: "hover", component: x, data: { url: e.url } });
                        }, [o, a, e.url]),
                        i = r.useCallback(() => o(!1), [o]),
                        s = r.useCallback(() => {
                            a.scribe({ action: "click", component: x, data: { url: e.url } });
                        }, [a, e.url]);
                    let c = new URL(e.url).hostname;
                    c.startsWith("www.") && (c = c.slice(4));
                    const d = r.useCallback(() => r.createElement(S, { webResult: e }), [e]);
                    return r.createElement("div", { className: "omit-from-copy", style: $.inlineContainer }, r.createElement(g.Z, { style: [$.inlineContainer, t ? $.animation : null] }, r.createElement(f.Z, { renderContent: d }, r.createElement(E.Z, { link: e.url, onMouseEnter: l, onMouseLeave: i, onPress: s, style: [$.content, e.favicon_base64 ? $.faviconContainer : $.iconContainer, n ? $.containerHovered : void 0], withoutInteractiveStyles: !0 }, e.favicon_base64 ? r.createElement(b.Z, { source: e.favicon_base64, style: $.favicon }) : r.createElement(C.default, { style: $.linkIcon })))));
                },
                S = ({ webResult: e }) => r.createElement(g.Z, { style: $.hoverCardContainer }, r.createElement(v.p, { item: e })),
                $ = i.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var L = n(323265),
                _ = n(301758),
                P = n(836255);
            const R = "grok_citation_post",
                T = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: o } = r.useContext(k.$),
                        [a, l] = r.useState(!1),
                        i = (0, w.Z)(),
                        s = r.useCallback(() => {
                            l(!0), i.scribe({ action: "hover", component: R, data: { tweet_id: e } });
                        }, [l, i, e]),
                        c = r.useCallback(() => l(!1), [l]),
                        d = r.useCallback(() => {
                            l(!0), i.scribe({ action: "click", component: R, data: { tweet_id: e } });
                        }, [l, i, e]);
                    r.useEffect(() => {
                        e && n(P.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = P.Z.selectHydrated(t.getState(), e),
                        p = r.useCallback(() => r.createElement(B, { postId: e }), [e]);
                    if (!m) return null;
                    const h = m?.user?.profile_image_url_https;
                    return r.createElement("div", { className: "omit-from-copy", style: I.inlineContainer }, r.createElement(g.Z, { style: [I.inlineContainer, o ? I.animation : null] }, r.createElement(f.Z, { renderContent: p }, r.createElement(E.Z, { link: m.permalink, onMouseEnter: s, onMouseLeave: c, onPress: d, style: [I.content, h ? I.avatarContainer : I.iconContainer, a ? I.containerHovered : void 0], withoutInteractiveStyles: !0 }, h ? r.createElement(b.Z, { source: h, style: I.avatar }) : r.createElement(C.default, { style: I.linkIcon })))));
                },
                B = ({ postId: e }) =>
                    r.createElement(
                        g.Z,
                        { style: I.hoverCardContainer },
                        r.createElement(_.Z, {
                            isCondensed: !0,
                            onPress: (e) => {
                                L.ZP.isTwitterApp();
                            },
                            tweetId: e,
                            withBirdwatchPivot: !1,
                            withLink: !0,
                            withUserHoverCard: !1,
                        }),
                    ),
                I = i.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                H = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                D = { label: c().dc0c8266 },
                M = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                W = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const z = ["http:", "https:"],
                A = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function O({ token: e }) {
                const { citations: t } = r.useContext(k.$),
                    n = (0, m.z)(),
                    i = (0, u.I0)(),
                    [s, c] = r.useState(!1),
                    y = e.href || "",
                    b = r.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(M);
                                return t ? t[1] : void 0;
                            })(y),
                        [y],
                    ),
                    g = r.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(W);
                                return t ? t[1] : void 0;
                            })(y),
                        [y],
                    ),
                    f = t.find((t) => t.url === e.href),
                    E = (0, d.hC)("responsive_web_grok_show_citations"),
                    C = (0, h.eX)(),
                    w = r.useCallback(
                        (e) => {
                            e.preventDefault(), g && (n.scribe({ element: "annotation_text_link", action: "click" }), i((0, p.u)({ analytics: n, conversationKey: C })({ text: decodeURIComponent(g), returnCitations: E })));
                        },
                        [g, C, n, i, E],
                    );
                let v;
                try {
                    e.href && (v = new URL(e.href));
                } catch (e) {}
                if (!v || !z.includes(v.protocol)) {
                    let t;
                    return (t = e.text === e.href ? e.text : !e.text && e.href && f ? `(${e.href})` : `${e.text} ${e.href ? `(${e.href})` : ""}`), r.createElement(o.ZP, null, t);
                }
                if (!e.text && e.href) {
                    if (f) return r.createElement(Z, { link: f });
                    const t = H(e.href);
                    if (t) return r.createElement(T, { postId: t });
                }
                return g
                    ? r.createElement(o.ZP, { hoverLabel: D, link: e.href, onClick: w, onMouseEnter: () => c(!0), onMouseLeave: () => c(!1), style: [F.expandedLineHeight, F.promptLink, s && F.hoverStyle], withInteractiveStyling: !1 }, e.text)
                    : b
                      ? r.createElement(
                            a.Z,
                            { screenName: b },
                            r.createElement(l.Z, null, ({ isHovered: t }) => r.createElement(o.ZP, { link: e.href, style: [F.link, t && F.hoveredLink], withInteractiveStyling: !1 }, e.text)),
                        )
                      : r.createElement(l.Z, null, ({ isHovered: t }) => r.createElement(o.ZP, { link: e.href, ref: A, style: [F.link, t && F.hoveredLink], withInteractiveStyling: !1 }, e.text));
            }
            const F = i.default.create((e) => {
                const t = "light" === i.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: y.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 }, link: { color: e.colors.brandColor, textDecorationLine: "underline", textDecorationColor: e.colors.gray600 }, hoveredLink: { textDecorationColor: e.colors.brandColor } };
            });
        },
        444342: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(731708),
                a = n(392237),
                l = n(595080),
                i = n(5741);
            const s = r.memo(({ style: e, text: t }) => r.createElement(o.ZP, { style: m.text }, t));
            function c({ children: e, token: t }) {
                const { isAnimated: n } = r.useContext(l.$);
                if (e.length) return r.createElement(o.ZP, null, e);
                const a = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return n ? r.createElement(d, { text: a }) : r.createElement(s, { style: m.text, text: a });
            }
            const d = r.memo(
                    ({ style: e, text: t }) => {
                        const n = t.split(" "),
                            a = n.map((e, t) => r.createElement(o.ZP, { key: `markdown_${t}`, style: [m.text, m.animation] }, e, t < n.length - 1 ? " " : void 0));
                        return r.createElement(r.Fragment, null, a);
                    },
                    (e, t) => e.text === t.text,
                ),
                m = a.default.create((e) => ({ text: { lineHeight: i.Y }, animation: { opacity: 1, animationDuration: "1s", transitionTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        5741: (e, t, n) => {
            n.d(t, { Y: () => r });
            const r = "1.5";
        },
        978921: (e, t, n) => {
            n.d(t, { Z: () => d });
            const r = (e, t, n, r, o) => ({
                    name: e,
                    level: "inline",
                    start(e) {
                        let n = 0;
                        for (; n < e.length; ) {
                            if (((n = e.indexOf(r, n)), -1 === n)) return;
                            if (0 === n || [" ", "(", "\n"].includes(e.charAt(n - 1))) {
                                if (e.substring(n).match(t)) return n;
                            }
                            n += r.length;
                        }
                    },
                    tokenizer(e) {
                        const n = e.match(t);
                        if (n) {
                            const e = n[1].trim();
                            if (/^[A-Za-z]$/.test(e) || /^\d+(,\d+)*(\.\d+)?$/.test(e)) return;
                            return e.includes("\\") || /[\+\-\*\/=^_<>\\]/.test(e) ? { type: o ? "blockLatex" : "inlineLatex", raw: n[0], text: e } : void 0;
                        }
                    },
                }),
                o = r("inlineDollar", /^\$([^$\n]+?)\$(?=[\s?!.,:？！。，：)]|$)/, 0, "$", !1),
                a = r("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, 0, "$$", !0),
                l = r("inlineParen", /^\\\((.*?)\\\)/, 0, "\\(", !1),
                i = r("inlineBracket", /^\\\[([\s\S]*?)\\\]/, 0, "\\[", !0),
                s = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                c = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                d = [
                    o,
                    a,
                    l,
                    i,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(s),
                                n = e.match(c),
                                r = t ?? n ?? null;
                            if (r) return { type: "blockLatex", raw: r[0], text: r[2].trim() };
                        },
                    },
                ];
        },
        122670: (e, t, n) => {
            n.d(t, { _: () => o });
            const r = /^[a-zA-Z0-9]$/;
            const o = {
                name: "x-handle",
                level: "inline",
                start: (e) => e.indexOf("@"),
                tokenizer(e, t) {
                    if (t?.length) {
                        const e = t[t.length - 1];
                        if ("text" === e.type && e.text && ((n = e.text[e.text.length - 1]), r.test(n))) return;
                    }
                    var n;
                    const o = /^@(\w{1,15})\b/.exec(e);
                    if (o) return { type: "x-handle", raw: o[0], text: o[0], handle: o[1] };
                },
            };
        },
        809311: (e, t, n) => {
            n.d(t, { p: () => u });
            n(543673), n(240753), n(128399);
            var r = n(202784),
                o = n(325686),
                a = n(466792),
                l = n(530732),
                i = n(731708),
                s = n(992942),
                c = n(392237),
                d = n(306677),
                m = n(725516);
            const u = ({ item: e, number: t }) => {
                    const n = (0, m.z)(),
                        c = r.useRef(!1),
                        u = r.useCallback(() => {
                            n.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, n]),
                        h = r.useCallback(() => {
                            c.current || ((c.current = !0), n.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [n, e.url]);
                    let k = new URL(e.url).hostname;
                    k.startsWith("www.") && (k = k.slice(4));
                    const y = e.title?.trim() || k;
                    return r.createElement(a.Z, null, ({ isHovered: n }) => r.createElement(l.Z, { link: e.url, onPress: u }, r.createElement(o.Z, { style: [p.container, n ? p.hovered : null] }, r.createElement(o.Z, { style: p.content }, r.createElement(i.ZP, { size: "body", style: p.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, y), e.snippet ? r.createElement(i.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: p.snippet }, e.snippet) : null), r.createElement(o.Z, { style: p.hostnameContainer }, e.favicon_base64 ? r.createElement(s.Z, { source: { uri: e.favicon_base64 }, style: p.favicon }) : null, r.createElement(i.ZP, { color: "gray700", size: "subtext1" }, k)), r.createElement(d.D, { id: `web_result_item_${e.url}`, onFullyVisible: h, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                p = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        988290: (e, t, n) => {
            n.d(t, { BQ: () => l, ZP: () => i });
            var r = n(202784);
            const o = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                a = r.createContext(o);
            function l({ children: e, isCompactLayout: t, isEditingEnabled: n, isGrokDrawer: o, isGrokShare: l, isPagedScroll: i, isShowButtons: s, isShowCarousel: c, scrollable: d }) {
                return r.createElement(a.Provider, { value: { scrollable: d, isCompactLayout: t, isShowButtons: s, isEditingEnabled: n, isShowCarousel: c, isPagedScroll: i, isGrokShare: l, isGrokDrawer: o } }, e);
            }
            function i() {
                return r.useContext(a);
            }
        },
        976021: (e, t, n) => {
            n.d(t, { B: () => c, P: () => s });
            var r = n(202784),
                o = n(224162),
                a = n(442730),
                l = n(952793);
            const i = "responsive_web_grok_rtl_detection",
                s = ({ children: e, direction: t }) => {
                    const n = r.useContext(o.RD),
                        a = t || n.direction,
                        s = r.useMemo(() => ({ ...n, direction: a }), [a, n]);
                    return (0, l.hC)(i) ? r.createElement(o.RD.Provider, { value: s }, e) : r.createElement(r.Fragment, null, e);
                },
                c = ({ children: e, text: t }) => {
                    const n = r.useContext(o.RD),
                        s = r.useMemo(() => a.Z.getTextDirection(t || ""), [t]),
                        c = r.useMemo(() => ({ ...n, direction: s }), [s, n]);
                    return (0, l.hC)(i) ? r.createElement(o.RD.Provider, { value: c }, e) : r.createElement(r.Fragment, null, e);
                };
        },
        730895: (e, t, n) => {
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Markdown.71e2a71a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown"],
    {
        721270: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => X, default: () => Y });
            var o = n(202784),
                r = n(719870),
                a = n(325686),
                i = n(442730),
                l = n(952793),
                s = n(976021),
                c = n(978921),
                d = n(170676),
                m = n(122670),
                u = n(595080),
                p = (n(136728), n(731708)),
                h = n(392237),
                y = n(67369),
                k = n(65469),
                g = n(988290);
            function f({ token: e }) {
                const t = (0, y.Zz)(),
                    { isGrokDrawer: n, isGrokShare: r } = (0, g.ZP)(),
                    { disableCodeBlockStickyHeader: i } = o.useContext(u.$);
                return o.createElement(a.Z, { style: b.codeContainer }, o.createElement(k.Z, { code: e.text, headerBarStyle: i ? void 0 : n || r || t ? b.drawerStickyContainer : b.stickyContainer, language: e.lang }));
            }
            const b = h.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1.25em" } }));
            function E({ token: e }) {
                const { isAnimated: t } = o.useContext(u.$),
                    n = o.useMemo(() => [v.codeSpan, t ? v.animation : null], [t]);
                return o.createElement(p.ZP, { style: n }, e.text);
            }
            const v = h.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: h.default.isDarkMode() ? "rgb(230, 192, 123)" : "rgb(193, 132, 1)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50 }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            var w = n(33474);
            function C() {
                return o.createElement("hr", { style: x.horizontalRule });
            }
            const x = h.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var Z = n(342430),
                S = n(910594),
                _ = n(488684);
            function $({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return o.createElement(_.Z, { screenName: e.handle || "" }, o.createElement(p.ZP, { link: t }, e.text));
            }
            const L = { level: 0 },
                P = o.createContext(L);
            function R({ token: e }) {
                const { level: t } = o.useContext(P),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, r) => {
                        n.push(o.createElement(P.Provider, { key: `li-${r.toString()}`, value: { level: t + 1 } }, o.createElement(B, { isFirst: 0 === r, item: e, level: t })));
                    });
                const r = o.useMemo(
                    () =>
                        [
                            { ...I.list, ...I.level1 },
                            { ...I.list, ...I.level2 },
                            { ...I.list, ...I.level3 },
                        ][t] ?? { ...I.list, ...I.level4 },
                    [t],
                );
                return e.ordered ? o.createElement(P.Provider, { value: { level: t + 1 } }, o.createElement("ol", { dir: e.direction, start: e.start, style: r }, n)) : o.createElement(P.Provider, { value: { level: t + 1 } }, o.createElement("ul", { dir: e.direction, style: r }, n));
            }
            const B = ({ isFirst: e, item: t, level: n }) => {
                    const r = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            r.push(o.createElement(G, { key: `token-${t}`, token: e }));
                        });
                    const a = o.useMemo(() => {
                        let t = "0.8em";
                        return 1 === n && (t = "0.4em"), 2 === n && (t = "0.2em"), n >= 3 && (t = "0em"), { marginTop: t, ...(e ? { marginTop: 0 } : {}) };
                    }, [e, n]);
                    return o.createElement("li", { style: { ...I.listItem, ...a } }, r);
                },
                I = h.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.8em" }, firstListItem: { marginTop: 0 } }));
            var T = n(444342);
            function H({ children: e, isRootLevel: t, style: n, token: r }) {
                return o.createElement(s.P, { direction: r.direction }, o.createElement(p.ZP, { style: [t && D.paragraph, n] }, o.createElement(T.Z, { token: r }, e)));
            }
            const D = h.default.create((e) => ({ paragraph: { display: "block", marginBottom: "1.25em" } }));
            function M({ children: e, isRootLevel: t, token: n }) {
                return o.createElement(a.Z, { style: z.container }, o.createElement(p.ZP, { style: z.quoteText }, e));
            }
            const z = h.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginBottom: "1.25em" }, quoteText: { fontStyle: "italic" } }));
            var W = n(5741);
            function A({ token: e }) {
                const t = e.header
                        ? o.createElement(
                              "tr",
                              { style: O.tableRow },
                              e.header?.map((e, t) =>
                                  o.createElement(
                                      "th",
                                      { style: O.tableHeaderCell },
                                      o.createElement(
                                          a.Z,
                                          { style: O.cellContent },
                                          e.tokens?.map((e, n) => o.createElement(G, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              o.createElement(
                                  "tr",
                                  { style: O.tableRow },
                                  e.map((e, n) =>
                                      o.createElement(
                                          "td",
                                          { style: O.tableCell },
                                          o.createElement(
                                              a.Z,
                                              { style: O.cellContent },
                                              e.tokens?.map((e, r) => o.createElement(G, { key: `td-${t}-${n}-${r}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return o.createElement(a.Z, { style: O.tableContainer }, o.createElement("table", { style: O.table }, t, n));
            }
            const O = h.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } })),
                F = o.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: r } = o.useContext(u.$),
                            a = o.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const r = `${n}`;
                                            e.push(o.createElement(F, { key: r, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            i = o.createElement(H, { isRootLevel: t, style: [N.expandedLineHeight, e ? N.noMarginBottom : void 0], token: n }, a);
                        if (r && !r.includes(n.type)) return o.createElement(p.ZP, { style: N.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return o.createElement($, { token: n });
                            case "code":
                                return o.createElement(f, { token: n });
                            case "codespan":
                                return o.createElement(E, { token: n });
                            case "list":
                                return o.createElement(R, { token: n });
                            case "blockquote":
                                return o.createElement(M, { token: n }, a);
                            case "table":
                                return o.createElement(A, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return o.createElement("br", null);
                            case "hr":
                                return o.createElement(C, null);
                            case "text":
                                return o.createElement(T.Z, { token: n }, a);
                            case "link":
                                return o.createElement(S.Z, { token: n });
                            case "heading":
                                return o.createElement(w.X, { token: n }, a);
                            case "strong":
                                return o.createElement(p.ZP, { style: N.expandedLineHeight, weight: "bold" }, o.createElement(T.Z, { token: n }, a));
                            case "em":
                                return o.createElement(p.ZP, { style: [N.expandedLineHeight, N.italic] }, o.createElement(T.Z, { token: n }, a));
                            case "emStrong":
                                return o.createElement(p.ZP, { style: [N.expandedLineHeight, N.italic], weight: "bold" }, o.createElement(T.Z, { token: n }, a));
                            case "blockLatex":
                                return o.createElement(Z.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return o.createElement(Z.Z, { content: n.text });
                            default:
                                return i;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                G = F,
                N = h.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: W.Y }, noMarginBottom: { marginBottom: 0 } }));
            function K(e) {
                return e.items && e.items.length ? K(e.items[0]) : e.tokens && e.tokens.length ? K(e.tokens[0]) : e.text || "";
            }
            function U(e) {
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                e.direction = i.Z.getTextDirection(K(e));
                        }
                    }),
                    e
                );
            }
            r.TU.use({ extensions: [m._, d.Im, ...c.Z] });
            const V = [],
                X = o.memo(({ allowedTokenTypes: e, chatResponseAnnotations: t, citations: n, disableCodeBlockStickyHeader: c, disableLinks: d, isAnimated: m, markdownText: p, style: h }) => {
                    const y = (0, l.hC)("responsive_web_grok_links") && !m,
                        k = o.useMemo(() => {
                            const e = (function (e, t) {
                                if (!t) return e;
                                t.sort((e, t) => e.startIndex - t.startIndex);
                                let n = e,
                                    o = 0;
                                return (
                                    t.forEach(({ endIndex: e, startIndex: t }) => {
                                        const r = n.slice(t + o, e + o),
                                            a = `[${r}](https://x.com/i/grok?text=${encodeURIComponent(r)})`;
                                        (n = n.slice(0, t + o) + a + n.slice(e + o)), (o += a.length - (e - t));
                                    }),
                                    n
                                );
                            })(p, y ? t : void 0);
                            return U(r.TU.lexer(e ?? ""));
                        }, [p, t, y]),
                        g = o.useMemo(() => k.map((e, t) => o.createElement(G, { isLast: t === k.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [k]);
                    return o.createElement(u.Z, { allowedTokenTypes: e, citations: n ?? V, disableCodeBlockStickyHeader: c, disableLinks: d, isAnimated: m }, o.createElement(s.P, { direction: i.Z.getTextDirection(p ?? "") }, o.createElement(a.Z, { style: [{ display: "block" }, h] }, g)));
                }),
                Y = X;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => i, Z: () => l });
            var o = n(202784);
            const r = [],
                a = { isAnimated: !1, citations: r, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0 },
                i = o.createContext(a);
            function l({ children: e, disableLinks: t, isAnimated: n, citations: a = r, disableCodeBlockStickyHeader: l, allowedTokenTypes: s }) {
                const c = a.length ? a : r,
                    d = o.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: c, disableCodeBlockStickyHeader: l, allowedTokenTypes: s }), [n, t, c, l, s]);
                return o.createElement(i.Provider, { value: d }, e);
            }
        },
        33474: (e, t, n) => {
            n.d(t, { X: () => s });
            var o = n(202784),
                r = n(67369),
                a = n(731708),
                i = n(976021),
                l = n(444342);
            function s({ children: e, token: t }) {
                const n = (0, r.yu)(),
                    s = o.useMemo(() => {
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
                return o.createElement(i.P, { direction: t.direction }, o.createElement(a.ZP, s, o.createElement(l.Z, { token: t }, e)));
            }
        },
        342430: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(366929),
                a = n(325686),
                i = n(731708),
                l = n(392237),
                s = n(595080);
            function c({ content: e, isBlock: t = !1 }) {
                const n = o.useRef(null),
                    [l, c] = o.useState(!1),
                    { isAnimated: m } = o.useContext(s.$);
                o.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            (n.current.innerHTML = ""), r.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 });
                            const o = document.createElement("code");
                            (o.className = "language-latex"), (o.innerText = e), (o.style.display = "none"), (o.className = t ? "raw_katex_block" : "raw_katex"), n.current?.appendChild(o), c(!1);
                        } catch {
                            c(!0);
                        }
                }, [e, t, n]);
                const u = o.useMemo(() => [t ? d.block : null, m ? d.animation : null], [t, m]);
                return l ? o.createElement(i.ZP, null, e) : o.createElement(a.Z, { ref: n, style: u });
            }
            const d = l.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        910594: (e, t, n) => {
            n.d(t, { Z: () => F });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                r = n(731708),
                a = n(488684),
                i = n(466792),
                l = n(392237),
                s = n(674132),
                c = n.n(s),
                d = n(952793),
                m = n(725516),
                u = n(125363),
                p = n(327597),
                h = n(654917),
                y = n(170676),
                k = n(595080),
                g = n(5741),
                f = n(45843),
                b = n(325686),
                E = n(818199),
                v = n(530732),
                w = n(630715),
                C = n(725405),
                x = n(809311);
            const Z = "grok_citation_web_result",
                S = ({ link: e }) => {
                    const { isAnimated: t } = o.useContext(k.$),
                        [n, r] = o.useState(!1),
                        a = (0, C.Z)(),
                        i = o.useCallback(() => {
                            r(!0), a.scribe({ action: "hover", component: Z, data: { url: e.url } });
                        }, [r, a, e.url]),
                        l = o.useCallback(() => r(!1), [r]),
                        s = o.useCallback(() => {
                            a.scribe({ action: "click", component: Z, data: { url: e.url } });
                        }, [a, e.url]);
                    let c = new URL(e.url).hostname;
                    c.startsWith("www.") && (c = c.slice(4));
                    const d = o.useCallback(() => o.createElement(_, { webResult: e }), [e]);
                    return o.createElement("div", { className: "omit-from-copy", style: $.inlineContainer }, o.createElement(b.Z, { style: [$.inlineContainer, t ? $.animation : null] }, o.createElement(E.Z, { renderContent: d }, o.createElement(v.Z, { link: e.url, onMouseEnter: i, onMouseLeave: l, onPress: s, style: [$.content, e.favicon_base64 ? $.faviconContainer : $.iconContainer, n ? $.containerHovered : void 0], withoutInteractiveStyles: !0 }, e.favicon_base64 ? o.createElement(f.Z, { source: e.favicon_base64, style: $.favicon }) : o.createElement(w.default, { style: $.linkIcon })))));
                },
                _ = ({ webResult: e }) => o.createElement(b.Z, { style: $.hoverCardContainer }, o.createElement(x.p, { item: e })),
                $ = l.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var L = n(323265),
                P = n(301758),
                R = n(836255);
            const B = "grok_citation_post",
                I = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: r } = o.useContext(k.$),
                        [a, i] = o.useState(!1),
                        l = (0, C.Z)(),
                        s = o.useCallback(() => {
                            i(!0), l.scribe({ action: "hover", component: B, data: { tweet_id: e } });
                        }, [i, l, e]),
                        c = o.useCallback(() => i(!1), [i]),
                        d = o.useCallback(() => {
                            i(!0), l.scribe({ action: "click", component: B, data: { tweet_id: e } });
                        }, [i, l, e]);
                    o.useEffect(() => {
                        e && n(R.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = R.Z.selectHydrated(t.getState(), e),
                        p = o.useCallback(() => o.createElement(T, { postId: e }), [e]);
                    if (!m) return null;
                    const h = m?.user?.profile_image_url_https;
                    return o.createElement("div", { className: "omit-from-copy", style: H.inlineContainer }, o.createElement(b.Z, { style: [H.inlineContainer, r ? H.animation : null] }, o.createElement(E.Z, { renderContent: p }, o.createElement(v.Z, { link: m.permalink, onMouseEnter: s, onMouseLeave: c, onPress: d, style: [H.content, h ? H.avatarContainer : H.iconContainer, a ? H.containerHovered : void 0], withoutInteractiveStyles: !0 }, h ? o.createElement(f.Z, { source: h, style: H.avatar }) : o.createElement(w.default, { style: H.linkIcon })))));
                },
                T = ({ postId: e }) =>
                    o.createElement(
                        b.Z,
                        { style: H.hoverCardContainer },
                        o.createElement(P.Z, {
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
                H = l.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                D = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                M = { label: c().dc0c8266 },
                z = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                W = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const A = ["http:", "https:"],
                O = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function F({ token: e }) {
                const { citations: t } = o.useContext(k.$),
                    n = (0, m.z)(),
                    l = (0, u.I0)(),
                    [s, c] = o.useState(!1),
                    g = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(z);
                                return t ? t[1] : void 0;
                            })(e.href || ""),
                        [e.href],
                    ),
                    f = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(W);
                                return t ? t[1] : void 0;
                            })(e.href || ""),
                        [e.href],
                    ),
                    b = t.find((t) => t.url === e.href),
                    E = (0, d.hC)("responsive_web_grok_show_citations"),
                    v = (0, h.eX)(),
                    w = o.useCallback(
                        (e) => {
                            e.preventDefault(), f && (n.scribe({ element: "annotation_text_link", action: "click" }), l((0, p.u)({ analytics: n, conversationKey: v })({ text: decodeURIComponent(f), returnCitations: E })));
                        },
                        [f, v, n, l, E],
                    );
                let C;
                try {
                    e.href && (C = new URL(e.href));
                } catch (e) {}
                if (!C || !A.includes(C.protocol)) {
                    let t;
                    return (t = e.text === e.href ? e.text : !e.text && e.href && b ? `(${e.href})` : `${e.text} ${e.href ? `(${e.href})` : ""}`), o.createElement(r.ZP, null, t);
                }
                const x = (0, y.TP)(e.raw) || (0, y.sN)(e.raw);
                if (e.href && (!e.text || x)) {
                    if (b) return o.createElement(S, { link: b });
                    const t = D(e.href);
                    if (t) return o.createElement(I, { postId: t });
                }
                return f
                    ? o.createElement(r.ZP, { hoverLabel: M, link: e.href, onClick: w, onMouseEnter: () => c(!0), onMouseLeave: () => c(!1), style: [G.expandedLineHeight, G.promptLink, s && G.hoverStyle], withInteractiveStyling: !1 }, e.text)
                    : g
                      ? o.createElement(
                            a.Z,
                            { screenName: g },
                            o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(r.ZP, { link: e.href, style: [G.link, t && G.hoveredLink], withInteractiveStyling: !1 }, e.text)),
                        )
                      : o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(r.ZP, { link: e.href, ref: O, style: [G.link, t && G.hoveredLink], withInteractiveStyling: !1 }, e.text));
            }
            const G = l.default.create((e) => {
                const t = "light" === l.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: g.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 }, link: { color: e.colors.brandColor, textDecorationLine: "underline", textDecorationColor: e.colors.gray600, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, hoveredLink: { textDecorationColor: e.colors.brandColor } };
            });
        },
        444342: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(731708),
                a = n(392237),
                i = n(595080),
                l = n(5741);
            const s = o.memo(({ style: e, text: t }) => o.createElement(r.ZP, { style: m.text }, t));
            function c({ children: e, token: t }) {
                const { isAnimated: n } = o.useContext(i.$);
                if (e.length) return o.createElement(r.ZP, null, e);
                const a = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return n ? o.createElement(d, { text: a }) : o.createElement(s, { style: m.text, text: a });
            }
            const d = o.memo(
                    ({ style: e, text: t }) => {
                        const n = t.split(" "),
                            a = n.map((e, t) => o.createElement(r.ZP, { key: `markdown_${t}`, style: [m.text, m.animation] }, e, t < n.length - 1 ? " " : void 0));
                        return o.createElement(o.Fragment, null, a);
                    },
                    (e, t) => e.text === t.text,
                ),
                m = a.default.create((e) => ({ text: { lineHeight: l.Y }, animation: { opacity: 1, animationDuration: "1s", transitionTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        5741: (e, t, n) => {
            n.d(t, { Y: () => o });
            const o = "1.5";
        },
        978921: (e, t, n) => {
            n.d(t, { Z: () => d });
            const o = (e, t, n, o, r) => ({
                    name: e,
                    level: "inline",
                    start(e) {
                        let n = 0;
                        for (; n < e.length; ) {
                            if (((n = e.indexOf(o, n)), -1 === n)) return;
                            if (0 === n || [" ", "(", "\n"].includes(e.charAt(n - 1))) {
                                if (e.substring(n).match(t)) return n;
                            }
                            n += o.length;
                        }
                    },
                    tokenizer(e) {
                        const n = e.match(t);
                        if (n) {
                            const e = n[1].trim();
                            if (/^[A-Za-z]$/.test(e) || /^\d+(,\d+)*(\.\d+)?$/.test(e)) return;
                            return e.includes("\\") || /[\+\-\*\/=^_<>\\]/.test(e) ? { type: r ? "blockLatex" : "inlineLatex", raw: n[0], text: e } : void 0;
                        }
                    },
                }),
                r = o("inlineDollar", /^\$([^$\n]+?)\$(?=[\s?!.,:？！。，：)]|$)/, 0, "$", !1),
                a = o("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, 0, "$$", !0),
                i = o("inlineParen", /^\\\((.*?)\\\)/, 0, "\\(", !1),
                l = o("inlineBracket", /^\\\[([\s\S]*?)\\\]/, 0, "\\[", !0),
                s = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                c = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                d = [
                    r,
                    a,
                    i,
                    l,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(s),
                                n = e.match(c),
                                o = t ?? n ?? null;
                            if (o) return { type: "blockLatex", raw: o[0], text: o[2].trim() };
                        },
                    },
                ];
        },
        170676: (e, t, n) => {
            n.d(t, { Im: () => s, TP: () => i, sN: () => l });
            const o = /^[a-zA-Z0-9]$/;
            const r = /^\(\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)\)/,
                a = /^\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/;
            function i(e) {
                return r.test(e);
            }
            function l(e) {
                return a.test(e);
            }
            const s = {
                name: "link",
                level: "inline",
                start: (e) => e.indexOf("("),
                tokenizer(e, t) {
                    if (t?.length) {
                        const e = t[t.length - 1];
                        if ("text" === e.type && e.text) {
                            const t = e.text[e.text.length - 1];
                            if (((n = t), o.test(n))) return;
                        }
                    }
                    var n;
                    const i = r.exec(e);
                    if (i) return { type: "link", raw: i[0], text: i[1], href: i[2] };
                    const l = a.exec(e);
                    return l ? { type: "link", raw: l[0], text: l[0], href: l[1] } : void 0;
                },
            };
        },
        122670: (e, t, n) => {
            n.d(t, { _: () => r });
            const o = /^[a-zA-Z0-9]$/;
            const r = {
                name: "x-handle",
                level: "inline",
                start: (e) => e.indexOf("@"),
                tokenizer(e, t) {
                    if (t?.length) {
                        const e = t[t.length - 1];
                        if ("text" === e.type && e.text && ((n = e.text[e.text.length - 1]), o.test(n))) return;
                    }
                    var n;
                    const r = /^@(\w{1,15})\b/.exec(e);
                    if (r) return { type: "x-handle", raw: r[0], text: r[0], handle: r[1] };
                },
            };
        },
        809311: (e, t, n) => {
            n.d(t, { p: () => u });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                r = n(325686),
                a = n(466792),
                i = n(530732),
                l = n(731708),
                s = n(992942),
                c = n(392237),
                d = n(306677),
                m = n(725516);
            const u = ({ item: e, number: t }) => {
                    const n = (0, m.z)(),
                        c = o.useRef(!1),
                        u = o.useCallback(() => {
                            n.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, n]),
                        h = o.useCallback(() => {
                            c.current || ((c.current = !0), n.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [n, e.url]);
                    let y = new URL(e.url).hostname;
                    y.startsWith("www.") && (y = y.slice(4));
                    const k = e.title?.trim() || y;
                    return o.createElement(a.Z, null, ({ isHovered: n }) => o.createElement(i.Z, { link: e.url, onPress: u }, o.createElement(r.Z, { style: [p.container, n ? p.hovered : null] }, o.createElement(r.Z, { style: p.content }, o.createElement(l.ZP, { size: "body", style: p.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, k), e.snippet ? o.createElement(l.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: p.snippet }, e.snippet) : null), o.createElement(r.Z, { style: p.hostnameContainer }, e.favicon_base64 ? o.createElement(s.Z, { source: { uri: e.favicon_base64 }, style: p.favicon }) : null, o.createElement(l.ZP, { color: "gray700", size: "subtext1" }, y)), o.createElement(d.D, { id: `web_result_item_${e.url}`, onFullyVisible: h, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                p = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        988290: (e, t, n) => {
            n.d(t, { BQ: () => i, ZP: () => l });
            var o = n(202784);
            const r = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                a = o.createContext(r);
            function i({ children: e, isCompactLayout: t, isEditingEnabled: n, isGrokDrawer: r, isGrokShare: i, isPagedScroll: l, isShowButtons: s, isShowCarousel: c, scrollable: d }) {
                return o.createElement(a.Provider, { value: { scrollable: d, isCompactLayout: t, isShowButtons: s, isEditingEnabled: n, isShowCarousel: c, isPagedScroll: l, isGrokShare: i, isGrokDrawer: r } }, e);
            }
            function l() {
                return o.useContext(a);
            }
        },
        976021: (e, t, n) => {
            n.d(t, { B: () => c, P: () => s });
            var o = n(202784),
                r = n(224162),
                a = n(442730),
                i = n(952793);
            const l = "responsive_web_grok_rtl_detection",
                s = ({ children: e, direction: t }) => {
                    const n = o.useContext(r.RD),
                        a = t || n.direction,
                        s = o.useMemo(() => ({ ...n, direction: a }), [a, n]);
                    return (0, i.hC)(l) ? o.createElement(r.RD.Provider, { value: s }, e) : o.createElement(o.Fragment, null, e);
                },
                c = ({ children: e, text: t }) => {
                    const n = o.useContext(r.RD),
                        s = o.useMemo(() => a.Z.getTextDirection(t || ""), [t]),
                        c = o.useMemo(() => ({ ...n, direction: s }), [s, n]);
                    return (0, i.hC)(l) ? o.createElement(r.RD.Provider, { value: c }, e) : o.createElement(o.Fragment, null, e);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown.e92cb37a.js.map

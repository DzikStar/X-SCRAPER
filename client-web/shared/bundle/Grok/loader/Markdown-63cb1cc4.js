"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-63cb1cc4"],
    {
        530326: (e, t, n) => {
            n.d(t, { f: () => d });
            n(574858);
            var o = n(323265),
                a = n(389071),
                r = n(623494),
                i = n(806528),
                s = n(155918),
                l = n(958602),
                c = n(250781);
            const d =
                ({ analytics: e, conversationKey: t, userChatItemId: n }) =>
                ({ analysisEntityId: d, returnCitations: m, returnSearchResults: u = !0, trendPromptIdStr: p, features: g = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: h, toolOverrides: y, personalityId: f }) =>
                (p, k, { api: b, featureSwitches: C }) => {
                    const w = !o.ZP.isTwitterApp() && C.isTrue("responsive_web_grok_api_enable_grok_host"),
                        v = (0, a.bD)(t),
                        E = v.selectConversationId(k());
                    return new Promise((t) => {
                        E || (0, r.Uk)(e, "regenerate function failed to find a conversationId"), t(E);
                    }).then(async (o) => {
                        if ("string" == typeof o) {
                            const E = v.selectMode(k()),
                                x = v.selectConversationWithLocalMessages(k()),
                                Z = (0, a.F9)(k()),
                                _ = x.findLastIndex((e) => e.sender === s.CI.ASSISTANT && e.userChatItemId === n);
                            if (-1 === _) return void (0, r.Uk)(e, "regenerate function couldn't find an actionable response");
                            const S = x[_],
                                I = S.promptMetadata ? { ...S.promptMetadata, action: "REGENERATE" } : void 0,
                                R = x.slice(0, _).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let P;
                            const T = C.isTrue("responsive_web_grok_location_enabled");
                            if (T) {
                                const e = (0, i.fw)(k())?.position;
                                e && (P = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const M = (0, a.en)(k()),
                                L = { ...y };
                            if (M && M.toolOverrides) {
                                const e = M.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    L[t] = e[t];
                                });
                            }
                            const $ = S.isDeepsearch,
                                H = S.isReasoning,
                                B = { responses: R, systemPromptName: E, conversationId: o, grokModelOptionId: Z, returnSearchResults: u, returnCitations: m, requestFeatures: g, resampleResponseId: n, imageGenerationCount: h, ...(d && 1 === R.length ? { analysisEntityId: d } : void 0), promptMetadata: I, toolOverrides: L, geoLocation: P, enableSideBySide: !1, isDeepsearch: $, isReasoning: H, personalityId: f, deepsearchArgs: $ ? M?.deepsearchArgs : void 0 };
                            null != v.selectCurrentResponseMessage(k()) && (await p((0, l.I)({ analytics: e, conversationKey: t }))), p(v.regenerateResponse(S));
                            const { mediaIds: D, mediaUrls: z } = (0, s.VU)(S);
                            (0, r.c3)(e, { conversationLength: R.length + 1, isDeepsearch: $ || void 0, isReasoning: H || void 0, allMediaIds: D.length > 0 ? D : void 0, allMediaUrls: z.length > 0 ? z : void 0 });
                            const A = C.isTrue("responsive_web_grok_enable_add_response_keepalive") && ($ || H),
                                U = C.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, c.D)({ grokModule: v, requestBody: B, analytics: e, dispatch: p, api: b, eventTag: "regenerate", flags: { enableLocation: T, enableGrokApiHost: w, numRetries: U, enableKeepalive: A }, featureSwitches: C });
                        }
                    });
                };
        },
        207683: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => nt, default: () => ot });
            var o = n(202784),
                a = n(719870),
                r = n(325686),
                i = n(442730),
                s = n(952793),
                l = n(976021);
            const c = /^<render_chart\s+chartjs_config='([^']+)'\s*>([\s\S]*?)<\/render_chart>/,
                d = {
                    name: "renderChart",
                    level: "block",
                    start: (e) => e.indexOf("<render_chart"),
                    tokenizer(e) {
                        const t = c.exec(e);
                        if (t) return { type: "renderChart", raw: t[0], chartJSConfig: t[1], text: t[2] };
                    },
                },
                m = /^<grok:richcontent\s+id="([^"]+)"\s+type="([^"]+)"\s*>([\s\S]*?)<\/grok:richcontent>/,
                u = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<grok:richcontent"),
                    tokenizer(e) {
                        const t = m.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], contentType: t[2], text: "" };
                    },
                },
                p = /^<grok:render\s+card_id="([^"]+)"\s+card_type="(?!citation_card)([^"]+)"(?:\s+type="([^"]+)")?\s*>([\s\S]*?)<\/grok:render>/,
                g = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<grok:render"),
                    tokenizer(e) {
                        const t = p.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], contentType: t[2], text: "" };
                    },
                },
                h = /^<grok:render\s+card_id="([^"]+)"\s+card_type="citation_card"(?:\s+type="([^"]+)")?\s*>([\s\S]*?)<\/grok:render>/,
                y = {
                    name: "link",
                    level: "inline",
                    start: (e) => e.indexOf("<grok:render"),
                    tokenizer(e) {
                        const t = h.exec(e);
                        if (t) return { type: "link", raw: t[0], id: t[1], contentType: "citation_card", href: "", text: "" };
                    },
                },
                f = /^<images_search_card\s+id="([^"]+)"\s+query="([^"]+)"\s+size="([^"]+)"\s+position="([^"]+)"\s*>([\s\S]*?)<\/images_search_card>/,
                k = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<images_search_card"),
                    tokenizer(e) {
                        const t = f.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], size: t[3], position: t[4], text: "", contentType: "images_search_card" };
                    },
                },
                b = /^<image_generation_card\s+id="([^"]+)"(?:\s+query="([^"]+)")?(?:\s+size="([^"]+)")?(?:\s+position="([^"]+)")?\s*><\/image_generation_card>/,
                C = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<image_generation_card"),
                    tokenizer(e) {
                        const t = b.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], query: t[2] || void 0, size: t[3] || void 0, position: t[4] || void 0, text: "", contentType: "image_generation_card" };
                    },
                };
            var w = n(978921),
                v = n(187268);
            const E = /^<tool_usage_card>\s*(?:<tool_usage_card_id>([0-9a-f-]{36})<\/tool_usage_card_id>\s*)?<tool_name>([^<]+)<\/tool_name>\s*<tool_args>([\s\S]*?)<\/tool_args>\s*<\/tool_usage_card>/ms,
                x = {
                    name: "toolUsageCard",
                    level: "inline",
                    start: (e) => e.indexOf("<tool_usage_card"),
                    tokenizer(e) {
                        const t = E.exec(e);
                        if (t) {
                            const e = (0, v.Sd)(t[1], t[2], t[3]);
                            return { type: "toolUsageCard", raw: t[0], toolUsageCard: e };
                        }
                    },
                };
            var Z = n(170676),
                _ = n(122670),
                S = n(595080),
                I = (n(136728), n(731708)),
                R = n(392237),
                P = n(807896),
                T = n(154003),
                M = n(797553),
                L = n(143670),
                $ = n(111677),
                H = n.n($),
                B = n(473026),
                D = n(689582),
                z = n(72591);
            const A = "https://artifacts.grokusercontent.com/chartjs";
            function U({ chartJSConfig: e, iframeRef: t, messageHandlers: n }) {
                const a = o.useRef(null),
                    i = t ?? a,
                    [s, l] = o.useState(!1);
                o.useEffect(() => {
                    const e = () => l(!0),
                        t = i.current;
                    if (t)
                        return (
                            t.addEventListener("load", e),
                            () => {
                                t.removeEventListener("load", e);
                            }
                        );
                }, [i.current]);
                const c = o.useCallback(
                    (e) => {
                        i.current?.contentWindow && i.current.contentWindow.postMessage({ type: "chartjs", chartJSConfig: e, isDarkTheme: "light" === !R.default.theme.paletteName, backgroundColor: R.default.theme.colors.gray0 }, A);
                    },
                    [i],
                );
                return (
                    o.useEffect(() => {
                        s && c(e);
                    }, [s, e]),
                    o.useEffect(() => {
                        const e = (e) => {
                            if (!s) return;
                            const t = i.current?.contentWindow?.frames[0];
                            if (e.source !== t) return;
                            let o = {};
                            try {
                                const t = String(e.data);
                                if (((o = JSON.parse(t)), !o)) return;
                            } catch {
                                return;
                            }
                            if (n && n[o.type]) {
                                (0, n[o.type])(o);
                            }
                        };
                        return window.addEventListener("message", e), () => window.removeEventListener("message", e);
                    }, [n, i, s]),
                    o.createElement(r.Z, { style: F.container }, o.createElement("iframe", { ref: i, sandbox: "allow-scripts allow-same-origin", src: A, style: F.iframe, title: "chartjs" }))
                );
            }
            const F = R.default.create((e) => ({ container: { flex: 1 }, iframe: { width: "100%", flex: 1, border: "none" } })),
                O = H().g49741e8,
                W = H().b0a889d4,
                K = H().a111fb48,
                N = H().bccc65f0;
            function j({ chartJSConfig: e }) {
                const [t, n] = o.useState(!1),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(null),
                    [c, d] = o.useState(null),
                    m = o.useRef(null),
                    [u, p] = o.useState(!1),
                    g = o.useCallback(() => {
                        p(!u);
                    }, [u]),
                    h = o.useMemo(
                        () => ({
                            on_load: () => {
                                n(!0);
                            },
                            chart_image: (e) => {
                                l(e.image ?? null), i(!1);
                            },
                            chart_csv: (e) => {
                                d(e.csv ?? null);
                            },
                            on_fail: () => {
                                i(!0), n(!0);
                            },
                            on_unload: () => {
                                n(!1);
                            },
                        }),
                        [],
                    ),
                    y = o.useCallback(() => {
                        if (s) {
                            const e = document.createElement("a");
                            (e.href = s), (e.download = "chart.png"), e.click();
                        }
                    }, [s]),
                    f = o.useCallback(() => {
                        if (c) {
                            const e = document.createElement("a");
                            (e.href = `data:text/plain;charset=utf-8,${encodeURIComponent(c)}`), (e.download = "chart.csv"), e.click();
                        }
                    }, [c]),
                    k = o.useMemo(
                        () => [
                            { actionText: W, onClick: y, Icon: B.default },
                            { actionText: K, onClick: f, Icon: D.default },
                        ],
                        [y, f],
                    );
                return e
                    ? o.createElement(
                          r.Z,
                          { style: G.container },
                          a
                              ? o.createElement(r.Z, { style: G.failedContainer })
                              : o.createElement(
                                    r.Z,
                                    { style: [G.chartContainer, t ? void 0 : { opacity: 0 }] },
                                    o.createElement(r.Z, { style: G.chartIframe }, o.createElement(U, { chartJSConfig: e, iframeRef: m, messageHandlers: h })),
                                    o.createElement(r.Z, { style: G.divider }),
                                    o.createElement(
                                        r.Z,
                                        { style: G.menuContainer },
                                        o.createElement(I.ZP, { style: G.disclaimerText }, N),
                                        o.createElement(
                                            o.Fragment,
                                            null,
                                            o.createElement(T.ZP, { "aria-label": O, backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: O }, icon: o.createElement(z.default, null), onPress: g, size: "small" }, O),
                                            u &&
                                                o.createElement(
                                                    M.default,
                                                    { isFixed: !0, onDismiss: g },
                                                    k.map((e) => o.createElement(L.Z, (0, P.Z)({}, e, { key: e.actionText }))),
                                                ),
                                        ),
                                    ),
                                ),
                      )
                    : null;
            }
            const G = R.default.create((e) => ({ container: { flex: 1, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, backgroundColor: e.colors.gray0, marginBottom: e.spaces.space16, overflow: "hidden", height: 500, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, failedContainer: {}, chartContainer: { flex: 1 }, chartIframe: { flex: 1, padding: e.spaces.space16 }, divider: { height: 1, width: "100%", backgroundColor: e.colors.gray200 }, menuContainer: { padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, disclaimerText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var J = n(67369),
                q = n(65469),
                V = n(988290);
            function X({ token: e }) {
                const t = (0, J.Zz)(),
                    { isGrokDrawer: n, isGrokShare: a } = (0, V.ZP)(),
                    { disableCodeBlockStickyHeader: i } = o.useContext(S.$);
                return "chartjs" === e.lang ? o.createElement(j, { chartJSConfig: e.text }) : o.createElement(r.Z, { style: Y.codeContainer }, o.createElement(q.Z, { code: e.text, headerBarStyle: i ? void 0 : n || a || t ? Y.drawerStickyContainer : Y.stickyContainer, language: e.lang }));
            }
            const Y = R.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1em" } }));
            function Q({ token: e }) {
                const { isAnimated: t } = o.useContext(S.$),
                    n = o.useMemo(() => [ee.codeSpan, t ? ee.animation : null], [t]);
                return o.createElement(I.ZP, { style: n }, e.text);
            }
            const ee = R.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: R.default.isDarkMode() ? "rgb(247, 170, 125)" : "rgb(158, 63, 0)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: R.default.isDarkMode() ? "rgba(219, 133, 87, 0.2)" : "rgba(206, 96, 28, 0.1)" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" } }));
            var te = n(33474);
            function ne() {
                return o.createElement("hr", { style: oe.horizontalRule });
            }
            const oe = R.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var ae = n(342430),
                re = n(910594),
                ie = n(488684);
            function se({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return o.createElement(ie.Z, { screenName: e.handle || "" }, o.createElement(I.ZP, { link: t }, e.text));
            }
            const le = { level: 0 },
                ce = o.createContext(le);
            function de({ token: e }) {
                const { level: t } = o.useContext(ce),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, a) => {
                        n.push(o.createElement(ce.Provider, { key: `li-${a.toString()}`, value: { level: t + 1 } }, o.createElement(me, { isFirst: 0 === a, item: e, level: t })));
                    });
                const a = o.useMemo(
                    () =>
                        [
                            { ...ue.list, ...ue.level1 },
                            { ...ue.list, ...ue.level2 },
                            { ...ue.list, ...ue.level3 },
                        ][t] ?? { ...ue.list, ...ue.level4 },
                    [t],
                );
                return e.ordered ? o.createElement(ce.Provider, { value: { level: t + 1 } }, o.createElement("ol", { dir: e.direction, start: e.start, style: a }, n)) : o.createElement(ce.Provider, { value: { level: t + 1 } }, o.createElement("ul", { dir: e.direction, style: a }, n));
            }
            const me = ({ isFirst: e, item: t, level: n }) => {
                    const a = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            a.push(o.createElement(Xe, { key: `token-${t}`, token: e }));
                        });
                    const r = o.useMemo(() => ({ marginTop: "0.5em", ...(e ? { marginTop: 0 } : {}) }), [e]);
                    return o.createElement("li", { style: { ...ue.listItem, ...r } }, a);
                },
                ue = R.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.5em" }, firstListItem: { marginTop: 0 } }));
            var pe = n(444342);
            function ge({ children: e, isRootLevel: t, style: n, token: a }) {
                return o.createElement(l.P, { direction: a.direction }, o.createElement(I.ZP, { style: [t && he.paragraph, n] }, o.createElement(pe.Z, { token: a }, e)));
            }
            const he = R.default.create((e) => ({ paragraph: { display: "block", marginBottom: "0.5em" } }));
            function ye({ children: e, isRootLevel: t, token: n }) {
                return o.createElement(r.Z, { style: fe.container }, o.createElement(I.ZP, { style: fe.quoteText }, e));
            }
            const fe = R.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginVertical: "0.5em" }, quoteText: { fontStyle: "italic" } }));
            var ke = n(908629),
                be = n(654917),
                Ce = n(983650),
                we = n(572929),
                ve = n(340690);
            const Ee = H().bd202fe6;
            function xe({ token: e }) {
                const { cardAttachments: t, isAborted: n, isAnimated: a, isStreaming: i, messageId: s } = o.useContext(S.$),
                    l = (0, be.eX)(),
                    c = o.useMemo(() => (t || []).find((t) => t.id === e.id) || null, [t, e.id]),
                    d = o.useMemo(() => {
                        const e = [];
                        return (
                            (t || []).forEach((t) => {
                                "image_generation_card" === t.cardType && e.push(t);
                            }),
                            e
                        );
                    }, [t]);
                return "image_generation_card" === e.contentType ? o.createElement(ve.Z, { cardAttachments: d, isAborted: n, isStreaming: i, messageId: s }) : o.createElement(r.Z, { style: [Ze.container, i && Ze.streamingContainer] }, o.createElement(ke.Z, { show: !!i && !c }, o.createElement(we.Z, { isAnimated: !0, isInline: !0, style: Ze.loadingCardContainer }, o.createElement(I.ZP, { style: Ze.loadingText }, Ee))), c && o.createElement(Ce.Z, { cardAttachment: c, conversationKey: l, isAnimated: a, isInline: !0 }));
            }
            const Ze = R.default.create((e) => ({ container: { position: "relative", width: "100%" }, streamingContainer: { minHeight: 50, marginBottom: e.spaces.space12 }, loadingCardContainer: { position: "absolute", top: 0, start: 0, zIndex: 10, borderWidth: 0, display: "flex", justifyContent: "center", alignItems: "center", width: "max-content", height: "100%" }, loadingText: { color: e.colors.gray500, fontSize: e.fontSizes.subtext1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 1 }, "50%": { opacity: 0.5 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both", animationIterationCount: "infinite" }, imageGenPlaceholderContainer: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12, padding: e.spaces.space16, borderRadius: e.spaces.space24 } }));
            var _e = n(5741);
            function Se({ token: e }) {
                const t = e.header
                        ? o.createElement(
                              "tr",
                              { style: Ie.tableRow },
                              e.header?.map((e, t) =>
                                  o.createElement(
                                      "th",
                                      { style: Ie.tableHeaderCell },
                                      o.createElement(
                                          r.Z,
                                          { style: Ie.cellContent },
                                          e.tokens?.map((e, n) => o.createElement(Xe, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              o.createElement(
                                  "tr",
                                  { style: Ie.tableRow },
                                  e.map((e, n) =>
                                      o.createElement(
                                          "td",
                                          { style: Ie.tableCell },
                                          o.createElement(
                                              r.Z,
                                              { style: Ie.cellContent },
                                              e.tokens?.map((e, a) => o.createElement(Xe, { key: `td-${t}-${n}-${a}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return o.createElement(r.Z, { style: Ie.tableContainer }, o.createElement("table", { style: Ie.table }, t, n));
            }
            const Ie = R.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            n(543673), n(240753), n(128399);
            var Re = n(530732),
                Pe = n(815858),
                Te = n(818199),
                Me = n(992942),
                Le = n(58399),
                $e = n(630715),
                He = n(323265),
                Be = n(301758),
                De = n(125363),
                ze = n(836255),
                Ae = n(916559),
                Ue = n(520595),
                Fe = n(809311);
            const Oe = H().db6c20cf,
                We = H().a4cfb8a8,
                Ke = [v.ky.CodeExecution],
                Ne = [v.ky.BrowsePage];
            function je({ token: e }) {
                const { isCompactLayout: t, isGrokDrawer: n } = (0, V.ZP)(),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(!1),
                    [c, d] = o.useState(!1),
                    m = n || t ? 2 : 4,
                    { toolUsageCardResults: u } = o.useContext(S.$),
                    p = u?.find((t) => t.toolUsageCardId === e.toolUsageCard?.id),
                    g = o.useMemo(() => p?.webResults || [], [p]),
                    h = g.slice(0, m),
                    y = o.useMemo(() => p?.xPostIds || [], [p]),
                    f = y.slice(0, m),
                    k = g.length > 0 || y.length > 0,
                    b = Ne.includes(e.toolUsageCard?.name),
                    C = o.useCallback(() => {
                        if (!e.toolUsageCard) return o.createElement(I.ZP, { style: qe.toolHeader, weight: "bold" }, v.eC);
                        if (e.toolUsageCard.name === v.ky.BrowsePage && e.toolUsageCard.args.url) {
                            const t = e.toolUsageCard.args.url;
                            let n = t || "";
                            try {
                                n = new URL(n).hostname.replace("www.", "");
                            } catch (e) {}
                            return o.createElement(I.ZP, { style: qe.toolHeader, weight: "bold" }, We, " ", o.createElement(I.ZP, { link: t, style: qe.toolHeader, underlineWeight: "normal", weight: "normal", withUnderline: !0 }, n));
                        }
                        return o.createElement(I.ZP, { style: qe.toolHeader, weight: "bold" }, (0, v.j)(e.toolUsageCard));
                    }, [e.toolUsageCard]),
                    w = o.useCallback(() => (Ke.includes(e.toolUsageCard?.name) ? o.createElement(Re.Z, { onPress: () => i(!a), style: qe.headerContainer, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(o.Fragment, null, o.createElement(r.Z, { style: qe.headerIconContainer }, o.createElement(ke.Z, { show: t }, o.createElement(Le.default, { style: [qe.headerIcon, qe.chevronIcon, a && qe.openChevronIcon] })), o.createElement(ke.Z, { show: !t }, o.createElement(r.Z, { style: qe.headerIcon }, (0, v.w$)(e.toolUsageCard?.name || "")))), o.createElement(I.ZP, { style: [qe.toolHeader, t && qe.toolHeaderHovered], weight: "bold" }, C()))) : o.createElement(r.Z, { style: qe.headerContainer }, o.createElement(r.Z, { style: qe.headerIconContainer }, o.createElement(r.Z, { style: qe.headerIcon }, (0, v.w$)(e.toolUsageCard?.name || ""))), C())), [C, e.toolUsageCard?.name, a]),
                    E = o.useCallback(() => {
                        if (e.toolUsageCard?.name !== v.ky.CodeExecution) return null;
                        const t = e.toolUsageCard?.args?.code || JSON.stringify(e.toolUsageCard?.args || {}, null, 2);
                        return o.createElement(Pe.Z, { childrenOuterStyle: qe.codeBlockOuterContainer, show: a, type: "slide" }, o.createElement(r.Z, { style: qe.codeBlockContainer }, o.createElement(q.Z, { backgroundColor: R.default.theme.colors.gray100, code: t, headerBarStyle: { backgroundColor: R.default.theme.colors.gray200 }, language: e.toolUsageCard?.args?.language })));
                    }, [e.toolUsageCard, a]),
                    x = o.useCallback(
                        () =>
                            !k || b || 0 === h.length
                                ? null
                                : o.createElement(
                                      r.Z,
                                      { style: qe.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: qe.toolResultPills },
                                          h.map((e, t) => o.createElement(Ge, { key: `${e.url}-${t}`, webResult: e })),
                                          g.length > m && o.createElement(Re.Z, { onPress: () => l(!0), style: qe.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(I.ZP, { style: [qe.seeMoreText, e && qe.seeMoreTextHovered], weight: "normal" }, Oe({ count: g.length }))),
                                      ),
                                  ),
                        [k, b, h, g, m, l],
                    ),
                    Z = o.useCallback(
                        () =>
                            !k || b || 0 === f.length
                                ? null
                                : o.createElement(
                                      r.Z,
                                      { style: qe.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: qe.toolResultPills },
                                          f.map((e, t) => o.createElement(Je, { key: `${e}-${t}`, xPostId: e })),
                                          y.length > m && o.createElement(Re.Z, { onPress: () => d(!0), style: qe.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(I.ZP, { style: [qe.seeMoreText, e && qe.seeMoreTextHovered], weight: "normal" }, Oe({ count: y.length }))),
                                      ),
                                  ),
                        [k, b, f, y, m, d],
                    );
                return o.createElement(r.Z, { style: qe.container }, w(), x(), Z(), E(), s ? o.createElement(Ae.E, { onDrawerDismiss: () => l(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: g }) : null, c ? o.createElement(Ue.a, { onDrawerDismiss: () => d(!1), paginationOptions: { numResultsPerPage: 25 }, postIds: y }) : null);
            }
            const Ge = o.memo(({ webResult: e }) => {
                    const [t, n] = o.useState(!1),
                        a = e.favicon_base64 || e.favicon,
                        i = o.useCallback(() => o.createElement(r.Z, { style: qe.hoverCardContainer }, o.createElement(Fe.p, { item: e })), [e]);
                    return o.createElement(
                        Te.Z,
                        { renderContent: i },
                        o.createElement(
                            T.ZP,
                            {
                                backgroundColor: "gray100",
                                borderColor: "gray200",
                                onPress: () => {
                                    window.open(e.url, "_blank");
                                },
                                size: "small",
                                style: qe.toolResultPill,
                            },
                            o.createElement(r.Z, { style: qe.toolResultPillContent }, a && !t ? o.createElement(Me.Z, { onError: () => n(!0), source: a, style: qe.toolResultPillImage }) : o.createElement($e.default, { style: qe.linkIcon }), o.createElement(r.Z, null, o.createElement(I.ZP, { numberOfLines: 1, style: qe.toolResultPillText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                Je = o.memo(({ xPostId: e }) => {
                    const t = o.useMemo(() => ze.Z.createHydratorForTweet(e), [e]),
                        n = o.useCallback(
                            () =>
                                o.createElement(
                                    r.Z,
                                    { style: qe.hoverCardContainer },
                                    o.createElement(Be.Z, {
                                        isCondensed: !0,
                                        onPress: (e) => {
                                            He.ZP.isTwitterApp();
                                        },
                                        tweetId: e,
                                        withBirdwatchPivot: !1,
                                        withLink: !0,
                                        withUserHoverCard: !1,
                                    }),
                                ),
                            [e],
                        ),
                        a = (0, De.v9)(t);
                    return a
                        ? o.createElement(
                              Te.Z,
                              { renderContent: n },
                              o.createElement(
                                  T.ZP,
                                  {
                                      backgroundColor: "gray100",
                                      borderColor: "gray200",
                                      onPress: () => {
                                          window.open(a.permalink, "_blank");
                                      },
                                      size: "small",
                                      style: qe.toolResultPill,
                                  },
                                  o.createElement(r.Z, { style: qe.toolResultPillContent }, o.createElement(Me.Z, { source: { uri: a.user.profile_image_url_https }, style: qe.toolResultPillImage }), o.createElement(r.Z, null, o.createElement(I.ZP, { numberOfLines: 1, style: qe.toolResultPillText, weight: "normal" }, `@${a.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                qe = R.default.create((e) => ({
                    container: { width: "100%", flex: 1, flexDirection: "column", overflow: "hidden", borderRadius: e.spaces.space16, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, padding: e.spaces.space8, backgroundColor: e.colors.gray50, animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", marginVertical: e.spaces.space4 },
                    headerContainer: { flexDirection: "row", gap: e.spaces.space8 },
                    headerIconContainer: { position: "relative", width: e.spaces.space16, height: e.spaces.space16 },
                    headerIcon: { position: "absolute", width: "100%", height: "100%", top: 3, start: 0, display: "flex", alignItems: "center", justifyContent: "center" },
                    toolHeader: { transition: "color 0.2s ease", fontFamily: "monospace", fontSize: e.fontSizes.subtext2, color: e.colors.gray1000 },
                    toolHeaderHovered: { color: e.colors.gray800 },
                    chevronIcon: { width: e.spaces.space16, height: e.spaces.space16, transform: [{ rotate: "0deg" }], transition: "transform 0.2s ease", color: e.colors.gray900 },
                    openChevronIcon: { transform: [{ rotate: "90deg" }] },
                    toolResultsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, paddingHorizontal: e.spaces.space24, marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
                    toolResultsSubheader: { color: e.colors.gray800, fontSize: e.fontSizes.subtext2, marginTop: e.spaces.space4 },
                    toolResultPills: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, flexWrap: "wrap", width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" },
                    toolResultPill: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" },
                    toolResultPillContent: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center" },
                    toolResultPillImage: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.infinite },
                    linkIcon: { width: e.spaces.space12, height: e.spaces.space12, color: e.colors.gray900 },
                    toolResultPillText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray900 },
                    xPosts: { display: "flex", flex: 1, width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" },
                    seeMoreButton: { display: "flex", width: "max-content" },
                    seeMoreText: { color: e.colors.gray700, transition: "color 0.2s ease", fontSize: e.fontSizes.subtext2 },
                    seeMoreTextHovered: { color: e.colors.gray1000 },
                    codeBlockOuterContainer: { width: "100%", marginTop: e.spaces.space8, paddingHorizontal: e.spaces.space24 },
                    codeBlockContainer: { maxWidth: "100%" },
                    hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" },
                })),
                Ve = o.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: a } = o.useContext(S.$),
                            r = o.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const a = `${n}`;
                                            e.push(o.createElement(Ve, { key: a, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            i = o.createElement(ge, { isRootLevel: t, style: [Ye.expandedLineHeight, e ? Ye.noMarginBottom : void 0], token: n }, r);
                        if (a && !a.includes(n.type)) return o.createElement(I.ZP, { style: Ye.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return o.createElement(se, { token: n });
                            case "code":
                                return "indented" === n.codeBlockStyle ? i : o.createElement(X, { token: n });
                            case "codespan":
                                return o.createElement(Q, { token: n });
                            case "list":
                                return o.createElement(de, { token: n });
                            case "blockquote":
                                return o.createElement(ye, { token: n }, r);
                            case "table":
                                return o.createElement(Se, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return o.createElement("br", null);
                            case "hr":
                                return o.createElement(ne, null);
                            case "text":
                                return o.createElement(pe.Z, { token: n }, r);
                            case "link":
                                return o.createElement(re.Z, { token: n });
                            case "heading":
                                return o.createElement(te.X, { token: n }, r);
                            case "strong":
                                return o.createElement(I.ZP, { style: Ye.expandedLineHeight, weight: "bold" }, o.createElement(pe.Z, { token: n }, r));
                            case "em":
                                return o.createElement(I.ZP, { style: [Ye.expandedLineHeight, Ye.italic] }, o.createElement(pe.Z, { token: n }, r));
                            case "emStrong":
                                return o.createElement(I.ZP, { style: [Ye.expandedLineHeight, Ye.italic], weight: "bold" }, o.createElement(pe.Z, { token: n }, r));
                            case "blockLatex":
                                return o.createElement(ae.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return o.createElement(ae.Z, { content: n.text });
                            case "grokRichContent":
                                return o.createElement(xe, { token: n });
                            case "renderChart":
                                return o.createElement(j, { chartJSConfig: n.chartJSConfig || "" });
                            case "toolUsageCard":
                                return o.createElement(je, { token: n });
                            default:
                                return i;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                Xe = Ve,
                Ye = R.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: _e.Y }, noMarginBottom: { marginBottom: 0 } }));
            function Qe(e) {
                return e.items && e.items.length ? Qe(e.items[0]) : e.tokens && e.tokens.length ? Qe(e.tokens[0]) : e.text || "";
            }
            function et(e) {
                return (
                    e.forEach((e, t) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                (e.isFirst = 0 === t), (e.direction = i.Z.getTextDirection(Qe(e)));
                        }
                    }),
                    e
                );
            }
            a.TU.use({ extensions: [_._, Z.Im, ...w.Z, u, g, y, C, k, d, x] });
            const tt = [],
                nt = o.memo(({ allowedTokenTypes: e, cardAttachments: t, chatResponseAnnotations: n, citations: c, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: p, isStreaming: g, markdownText: h, messageId: y, style: f, toolUsageCardResults: k }) => {
                    const b = (0, s.hC)("responsive_web_grok_links") && !p,
                        C = (0, s.hC)("responsive_web_grok_download_favicons"),
                        w = o.useMemo(() => {
                            const e = (function (e, t) {
                                if (!t) return e;
                                t.sort((e, t) => e.startIndex - t.startIndex);
                                let n = e,
                                    o = 0;
                                return (
                                    t.forEach(({ endIndex: e, startIndex: t }) => {
                                        const a = n.slice(t + o, e + o),
                                            r = `[${a}](https://x.com/i/grok?text=${encodeURIComponent(a)})`;
                                        (n = n.slice(0, t + o) + r + n.slice(e + o)), (o += r.length - (e - t));
                                    }),
                                    n
                                );
                            })(h, b ? n : void 0);
                            return et(a.TU.lexer(e ?? ""));
                        }, [h, n, b]),
                        v = o.useMemo(() => w.map((e, t) => o.createElement(Xe, { isLast: t === w.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [w]);
                    return o.createElement(S.Z, { allowedTokenTypes: e, cardAttachments: t, citations: c ?? tt, disableCodeBlockStickyHeader: d, disableLinks: m, enableFaviconDownload: C, isAborted: u, isAnimated: p, isStreaming: g, messageId: y, toolUsageCardResults: k }, o.createElement(l.P, { direction: i.Z.getTextDirection(h ?? "") }, o.createElement(r.Z, { style: [{ display: "block" }, f] }, v)));
                }),
                ot = nt;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => s, Z: () => l });
            var o = n(202784);
            const a = [],
                r = [],
                i = { isAnimated: !1, citations: a, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0, cardAttachments: r, isStreaming: !1, messageId: void 0, isAborted: !1, toolUsageCardResults: [], enableFaviconDownload: !1 },
                s = o.createContext(i);
            function l({ children: e, disableLinks: t, isAnimated: n, citations: i = a, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d = r, isStreaming: m, messageId: u, isAborted: p, toolUsageCardResults: g, enableFaviconDownload: h }) {
                const y = i.length ? i : a,
                    f = o.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: y, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d, isStreaming: m, messageId: u, isAborted: p, toolUsageCardResults: g, enableFaviconDownload: h }), [n, t, y, l, c, d, m, u, p, g, h]);
                return o.createElement(s.Provider, { value: f }, e);
            }
        },
        33474: (e, t, n) => {
            n.d(t, { X: () => l });
            var o = n(202784),
                a = n(67369),
                r = n(731708),
                i = n(976021),
                s = n(444342);
            function l({ children: e, token: t }) {
                const n = (0, a.yu)(),
                    l = o.useMemo(() => {
                        const e = { display: "block" };
                        switch (t.depth) {
                            case 1:
                                return (e.marginBottom = "0.5em"), { weight: "heavy", size: n ? "title2" : "title1", style: e };
                            case 2:
                                return t.isFirst || (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "title4", style: e };
                            case 3:
                                return t.isFirst || (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "headline1", style: e };
                            default:
                                return t.isFirst || (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", style: e };
                        }
                    }, [t.depth, n, t.isFirst]);
                return o.createElement(i.P, { direction: t.direction }, o.createElement(r.ZP, l, o.createElement(s.Z, { token: t }, e)));
            }
        },
        342430: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(366929),
                r = n(325686),
                i = n(731708),
                s = n(392237),
                l = n(595080);
            function c({ content: e, isBlock: t = !1 }) {
                const n = o.useRef(null),
                    [s, c] = o.useState(!1),
                    { isAnimated: m } = o.useContext(l.$);
                o.useLayoutEffect(() => {
                    if (n.current)
                        try {
                            (n.current.innerHTML = ""), a.Z.render(e, n.current, { trust: !1, output: "mathml", displayMode: t, throwOnError: !0 });
                            const o = document.createElement("code");
                            (o.className = "language-latex"), (o.innerText = e), (o.style.display = "none"), (o.className = t ? "raw_katex_block" : "raw_katex"), n.current?.appendChild(o), c(!1);
                        } catch {
                            c(!0);
                        }
                }, [e, t, n]);
                const u = o.useMemo(() => [t ? d.block : null, m ? d.animation : null], [t, m]);
                return s ? o.createElement(i.ZP, null, e) : o.createElement(r.Z, { ref: n, style: u });
            }
            const d = s.default.create((e) => ({ block: { flex: 1, flexDirection: "row", justifyContent: "center", width: "100%", paddingTop: "0.75rem", paddingBottom: "1.75rem" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        910594: (e, t, n) => {
            n.d(t, { Z: () => K });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                a = n(731708),
                r = n(488684),
                i = n(466792),
                s = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(952793),
                m = n(725516),
                u = n(125363),
                p = n(327597),
                g = n(155918),
                h = n(654917),
                y = n(170676),
                f = n(595080),
                k = n(5741),
                b = n(45843),
                C = n(325686),
                w = n(530732),
                v = n(818199),
                E = n(630715),
                x = n(725405),
                Z = n(809311);
            const _ = "grok_citation_web_result",
                S = ({ link: e }) => {
                    const { isAnimated: t } = o.useContext(f.$),
                        [n, a] = o.useState(!1),
                        [r, i] = o.useState(!1),
                        s = (0, x.Z)(),
                        l = o.useCallback(() => {
                            a(!0), s.scribe({ action: "hover", component: _, data: { url: e.url } });
                        }, [a, s, e.url]),
                        c = o.useCallback(() => a(!1), [a]),
                        d = o.useCallback(() => {
                            s.scribe({ action: "click", component: _, data: { url: e.url } });
                        }, [s, e.url]);
                    let m = new URL(e.url).hostname;
                    m.startsWith("www.") && (m = m.slice(4));
                    const u = o.useCallback(() => o.createElement(I, { webResult: e }), [e]),
                        p = e.url && (e.title || e.snippet),
                        g = o.createElement(w.Z, { link: e.url, onMouseEnter: l, onMouseLeave: c, onPress: d, style: [R.content, e.favicon_base64 ? R.faviconContainer : R.iconContainer, n ? R.containerHovered : void 0], withoutInteractiveStyles: !0 }, (!e.favicon_base64 && !e.favicon) || r ? o.createElement(E.default, { style: R.linkIcon }) : o.createElement(b.Z, { onError: () => i(!0), source: e.favicon_base64 || e.favicon, style: R.favicon }));
                    return o.createElement("div", { className: "omit-from-copy", style: R.inlineContainer }, o.createElement(C.Z, { style: [R.inlineContainer, t ? R.animation : null] }, p ? o.createElement(v.Z, { renderContent: u }, g) : g));
                },
                I = ({ webResult: e }) => o.createElement(C.Z, { style: R.hoverCardContainer }, o.createElement(Z.p, { item: e })),
                R = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var P = n(323265),
                T = n(301758),
                M = n(836255);
            const L = "grok_citation_post",
                $ = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: a } = o.useContext(f.$),
                        [r, i] = o.useState(!1),
                        s = (0, x.Z)(),
                        l = o.useCallback(() => {
                            i(!0), s.scribe({ action: "hover", component: L, data: { tweet_id: e } });
                        }, [i, s, e]),
                        c = o.useCallback(() => i(!1), [i]),
                        d = o.useCallback(() => {
                            i(!0), s.scribe({ action: "click", component: L, data: { tweet_id: e } });
                        }, [i, s, e]);
                    o.useEffect(() => {
                        e && n(M.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = M.Z.selectHydrated(t.getState(), e),
                        p = o.useCallback(() => o.createElement(H, { postId: e }), [e]);
                    if (!m) return null;
                    const g = m?.user?.profile_image_url_https;
                    return o.createElement("div", { className: "omit-from-copy", style: B.inlineContainer }, o.createElement(C.Z, { style: [B.inlineContainer, a ? B.animation : null] }, o.createElement(v.Z, { renderContent: p }, o.createElement(w.Z, { link: m.permalink, onMouseEnter: l, onMouseLeave: c, onPress: d, style: [B.content, g ? B.avatarContainer : B.iconContainer, r ? B.containerHovered : void 0], withoutInteractiveStyles: !0 }, g ? o.createElement(b.Z, { source: g, style: B.avatar }) : o.createElement(E.default, { style: B.linkIcon })))));
                },
                H = ({ postId: e }) =>
                    o.createElement(
                        C.Z,
                        { style: B.hoverCardContainer },
                        o.createElement(T.Z, {
                            isCondensed: !0,
                            onPress: (e) => {
                                P.ZP.isTwitterApp();
                            },
                            tweetId: e,
                            withBirdwatchPivot: !1,
                            withLink: !0,
                            withUserHoverCard: !1,
                        }),
                    ),
                B = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                D = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                z = { label: c().dc0c8266 },
                A = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                U = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const F = ["http:", "https:"],
                O = "grok:render:card_id=",
                W = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function K({ token: e }) {
                const { cardAttachments: t, citations: n, enableFaviconDownload: s } = o.useContext(f.$),
                    l = (0, m.z)(),
                    c = (0, u.I0)(),
                    [k, b] = o.useState(!1);
                let C = e.href;
                const w = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(A);
                                return t ? t[1] : void 0;
                            })(C || ""),
                        [C],
                    ),
                    v = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(U);
                                return t ? t[1] : void 0;
                            })(C || ""),
                        [C],
                    ),
                    E = o.useMemo(() => {
                        if (C && C.startsWith(O)) {
                            const e = /card_id=([a-zA-Z0-9]+)/,
                                n = C.match(e),
                                o = n ? n[1] : null,
                                a = t?.find((e) => e.id === o);
                            if (a && "citation_card" === a.cardType) {
                                const e = a.url;
                                return { url: e, favicon: s ? (0, g.TK)(e) : void 0 };
                            }
                            return null;
                        }
                        return n.find((e) => e.url === C);
                    }, [t, n, C, s]);
                E?.url && (C = E.url);
                const x = (0, d.hC)("responsive_web_grok_show_citations"),
                    Z = (0, h.eX)(),
                    _ = o.useCallback(
                        (e) => {
                            e.preventDefault(), v && (l.scribe({ element: "annotation_text_link", action: "click" }), c((0, p.u)({ analytics: l, conversationKey: Z })({ text: decodeURIComponent(v), returnCitations: x })));
                        },
                        [v, Z, l, c, x],
                    );
                let I;
                try {
                    C && (I = new URL(C));
                } catch (e) {}
                if (!I || !F.includes(I.protocol)) {
                    let t;
                    return (t = e.text === C ? e.text : !e.text && C && E ? `(${C})` : `${e.text} ${C ? `(${C})` : ""}`), o.createElement(a.ZP, null, t);
                }
                const R = (0, y.TP)(e.raw) || (0, y.sN)(e.raw);
                if (C && (!e.text || R)) {
                    if (E) return o.createElement(S, { link: E });
                    const e = D(C);
                    if (e) return o.createElement($, { postId: e });
                }
                return v
                    ? o.createElement(a.ZP, { hoverLabel: z, link: C, onClick: _, onMouseEnter: () => b(!0), onMouseLeave: () => b(!1), style: [N.expandedLineHeight, N.promptLink, k && N.hoverStyle], withInteractiveStyling: !1 }, e.text)
                    : w
                      ? o.createElement(
                            r.Z,
                            { screenName: w },
                            o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: C, style: [N.link, t && N.hoveredLink], withInteractiveStyling: !1 }, e.text)),
                        )
                      : o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: C, ref: W, style: [N.link, t && N.hoveredLink], withInteractiveStyling: !1 }, e.text));
            }
            const N = s.default.create((e) => {
                const t = "light" === s.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: k.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 }, link: { color: e.colors.brandColor, textDecorationLine: "underline", textDecorationColor: e.colors.gray600, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both" }, hoveredLink: { textDecorationColor: e.colors.brandColor } };
            });
        },
        444342: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                a = n(731708),
                r = n(392237),
                i = n(595080),
                s = n(5741);
            const l = o.memo(({ style: e, text: t }) => o.createElement(a.ZP, { style: m.text }, t));
            function c({ children: e, token: t }) {
                const { isAnimated: n } = o.useContext(i.$);
                if (e.length) return o.createElement(a.ZP, null, e);
                const r = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return n ? o.createElement(d, { text: r }) : o.createElement(l, { style: m.text, text: r });
            }
            const d = o.memo(
                    ({ style: e, text: t }) => {
                        const n = t.split(" "),
                            r = n.map((e, t) => o.createElement(a.ZP, { key: `markdown_${t}`, style: [m.text, m.animation] }, e, t < n.length - 1 ? " " : void 0));
                        return o.createElement(o.Fragment, null, r);
                    },
                    (e, t) => e.text === t.text,
                ),
                m = r.default.create((e) => ({ text: { lineHeight: s.Y }, animation: { animationDuration: "0.5s", transitionTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" } }));
        },
        5741: (e, t, n) => {
            n.d(t, { Y: () => o });
            const o = "1.75";
        },
        978921: (e, t, n) => {
            n.d(t, { Z: () => d });
            const o = (e, t, n, o, a) => ({
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
                            return e.includes("\\") || /[\+\-\*\/=^_<>\\]/.test(e) ? { type: a ? "blockLatex" : "inlineLatex", raw: n[0], text: e } : void 0;
                        }
                    },
                }),
                a = o("inlineDollar", /^\$([^$\n]+?)\$(?=[\s?!.,:？！。，：)]|$)/, 0, "$", !1),
                r = o("inlineDollarBlock", /^\$\$([\s\S]*?)\$\$/, 0, "$$", !0),
                i = o("inlineParen", /^\\\((.*?)\\\)/, 0, "\\(", !1),
                s = o("inlineBracket", /^\\\[([\s\S]*?)\\\]/, 0, "\\[", !0),
                l = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,
                c = /^\\\[(\s*)((?:\\[^]|[^\\])+?)(\s*)\\](?:\n|$)/,
                d = [
                    a,
                    r,
                    i,
                    s,
                    {
                        name: "blockLatex",
                        level: "block",
                        tokenizer(e) {
                            const t = e.match(l),
                                n = e.match(c),
                                o = t ?? n ?? null;
                            if (o) return { type: "blockLatex", raw: o[0], text: o[2].trim() };
                        },
                    },
                ];
        },
        170676: (e, t, n) => {
            n.d(t, { Im: () => l, TP: () => i, sN: () => s });
            const o = /^[a-zA-Z0-9]$/;
            const a = /^\(\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)\)/,
                r = /^\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/;
            function i(e) {
                return a.test(e);
            }
            function s(e) {
                return r.test(e);
            }
            const l = {
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
                    const i = a.exec(e);
                    if (i) return { type: "link", raw: i[0], text: i[1], href: i[2] };
                    const s = r.exec(e);
                    return s ? { type: "link", raw: s[0], text: s[0], href: s[1] } : void 0;
                },
            };
        },
        122670: (e, t, n) => {
            n.d(t, { _: () => a });
            const o = /^[a-zA-Z0-9]$/;
            const a = {
                name: "x-handle",
                level: "inline",
                start: (e) => e.indexOf("@"),
                tokenizer(e, t) {
                    if (t?.length) {
                        const e = t[t.length - 1];
                        if ("text" === e.type && e.text && ((n = e.text[e.text.length - 1]), o.test(n))) return;
                    }
                    var n;
                    const a = /^@(\w{1,15})\b/.exec(e);
                    if (a) return { type: "x-handle", raw: a[0], text: a[0], handle: a[1] };
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-63cb1cc4.fa49099a.js.map

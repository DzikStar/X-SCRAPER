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
            n.r(t), n.d(t, { GrokMarkdown: () => ot, default: () => at });
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
                h = {
                    name: "grokRichContent",
                    level: "inline",
                    start: (e) => e.indexOf("<grok:render"),
                    tokenizer(e) {
                        const t = p.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], contentType: t[2], text: "" };
                    },
                },
                y = /^<grok:render\s+card_id="([^"]+)"\s+card_type="citation_card"(?:\s+type="([^"]+)")?\s*>([\s\S]*?)<\/grok:render>/,
                f = {
                    name: "link",
                    level: "inline",
                    start: (e) => e.indexOf("<grok:render"),
                    tokenizer(e) {
                        const t = y.exec(e);
                        if (t) return { type: "link", raw: t[0], id: t[1], contentType: "citation_card", href: "", text: "" };
                    },
                },
                k = /^<images_search_card\s+id="([^"]+)"\s+query="([^"]+)"\s+size="([^"]+)"\s+position="([^"]+)"\s*>([\s\S]*?)<\/images_search_card>/,
                b = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<images_search_card"),
                    tokenizer(e) {
                        const t = k.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], size: t[3], position: t[4], text: "", contentType: "images_search_card" };
                    },
                },
                C = /^<image_generation_card\s+id="([^"]+)"(?:\s+query="([^"]+)")?(?:\s+size="([^"]+)")?(?:\s+position="([^"]+)")?\s*><\/image_generation_card>/,
                w = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<image_generation_card"),
                    tokenizer(e) {
                        const t = C.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], query: t[2] || void 0, size: t[3] || void 0, position: t[4] || void 0, text: "", contentType: "image_generation_card" };
                    },
                };
            var v = n(978921),
                E = n(187268);
            const x = /^<tool_usage_card>\s*(?:<tool_usage_card_id>([0-9a-f-]{36})<\/tool_usage_card_id>\s*)?<tool_name>([^<]+)<\/tool_name>\s*<tool_args>([\s\S]*?)<\/tool_args>\s*<\/tool_usage_card>/ms,
                Z = {
                    name: "toolUsageCard",
                    level: "inline",
                    start: (e) => e.indexOf("<tool_usage_card"),
                    tokenizer(e) {
                        const t = x.exec(e);
                        if (t) {
                            const e = (0, E.Sd)(t[1], t[2], t[3]);
                            return { type: "toolUsageCard", raw: t[0], toolUsageCard: e };
                        }
                    },
                };
            var _ = n(170676),
                S = n(122670),
                I = n(595080),
                R = (n(136728), n(731708)),
                P = n(392237),
                T = n(807896),
                M = n(154003),
                L = n(797553),
                $ = n(143670),
                H = n(111677),
                B = n.n(H),
                D = n(473026),
                z = n(689582),
                A = n(72591);
            const U = "https://artifacts.grokusercontent.com/chartjs";
            function F({ chartJSConfig: e, iframeRef: t, messageHandlers: n }) {
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
                        i.current?.contentWindow && i.current.contentWindow.postMessage({ type: "chartjs", chartJSConfig: e, isDarkTheme: "light" === !P.default.theme.paletteName, backgroundColor: P.default.theme.colors.gray0 }, U);
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
                    o.createElement(r.Z, { style: O.container }, o.createElement("iframe", { ref: i, sandbox: "allow-scripts allow-same-origin", src: U, style: O.iframe, title: "chartjs" }))
                );
            }
            const O = P.default.create((e) => ({ container: { flex: 1 }, iframe: { width: "100%", flex: 1, border: "none" } })),
                W = B().g49741e8,
                K = B().b0a889d4,
                N = B().a111fb48,
                j = B().bccc65f0;
            function G({ chartJSConfig: e }) {
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
                            { actionText: K, onClick: y, Icon: D.default },
                            { actionText: N, onClick: f, Icon: z.default },
                        ],
                        [y, f],
                    );
                return e
                    ? o.createElement(
                          r.Z,
                          { style: J.container },
                          a
                              ? o.createElement(r.Z, { style: J.failedContainer })
                              : o.createElement(
                                    r.Z,
                                    { style: [J.chartContainer, t ? void 0 : { opacity: 0 }] },
                                    o.createElement(r.Z, { style: J.chartIframe }, o.createElement(F, { chartJSConfig: e, iframeRef: m, messageHandlers: h })),
                                    o.createElement(r.Z, { style: J.divider }),
                                    o.createElement(
                                        r.Z,
                                        { style: J.menuContainer },
                                        o.createElement(R.ZP, { style: J.disclaimerText }, j),
                                        o.createElement(
                                            o.Fragment,
                                            null,
                                            o.createElement(M.ZP, { "aria-label": W, backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: W }, icon: o.createElement(A.default, null), onPress: g, size: "small" }, W),
                                            u &&
                                                o.createElement(
                                                    L.default,
                                                    { isFixed: !0, onDismiss: g },
                                                    k.map((e) => o.createElement($.Z, (0, T.Z)({}, e, { key: e.actionText }))),
                                                ),
                                        ),
                                    ),
                                ),
                      )
                    : null;
            }
            const J = P.default.create((e) => ({ container: { flex: 1, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, backgroundColor: e.colors.gray0, marginBottom: e.spaces.space16, overflow: "hidden", height: 500, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, failedContainer: {}, chartContainer: { flex: 1 }, chartIframe: { flex: 1, padding: e.spaces.space16 }, divider: { height: 1, width: "100%", backgroundColor: e.colors.gray200 }, menuContainer: { padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, disclaimerText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var q = n(67369),
                V = n(65469),
                X = n(988290);
            function Y({ token: e }) {
                const t = (0, q.Zz)(),
                    { isGrokDrawer: n, isGrokShare: a } = (0, X.ZP)(),
                    { disableCodeBlockStickyHeader: i } = o.useContext(I.$);
                return "chartjs" === e.lang ? o.createElement(G, { chartJSConfig: e.text }) : o.createElement(r.Z, { style: Q.codeContainer }, o.createElement(V.Z, { code: e.text, headerBarStyle: i ? void 0 : n || a || t ? Q.drawerStickyContainer : Q.stickyContainer, language: e.lang }));
            }
            const Q = P.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1em" } }));
            function ee({ token: e }) {
                const { isAnimated: t } = o.useContext(I.$),
                    n = o.useMemo(() => [te.codeSpan, t ? te.animation : null], [t]);
                return o.createElement(R.ZP, { style: n }, e.text);
            }
            const te = P.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: P.default.isDarkMode() ? "rgb(247, 170, 125)" : "rgb(158, 63, 0)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: P.default.isDarkMode() ? "rgba(219, 133, 87, 0.2)" : "rgba(206, 96, 28, 0.1)" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" } }));
            var ne = n(33474);
            function oe() {
                return o.createElement("hr", { style: ae.horizontalRule });
            }
            const ae = P.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var re = n(342430),
                ie = n(910594),
                se = n(488684);
            function le({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return o.createElement(se.Z, { screenName: e.handle || "" }, o.createElement(R.ZP, { link: t }, e.text));
            }
            const ce = { level: 0 },
                de = o.createContext(ce);
            function me({ token: e }) {
                const { level: t } = o.useContext(de),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, a) => {
                        n.push(o.createElement(de.Provider, { key: `li-${a.toString()}`, value: { level: t + 1 } }, o.createElement(ue, { isFirst: 0 === a, item: e, level: t })));
                    });
                const a = o.useMemo(
                    () =>
                        [
                            { ...pe.list, ...pe.level1 },
                            { ...pe.list, ...pe.level2 },
                            { ...pe.list, ...pe.level3 },
                        ][t] ?? { ...pe.list, ...pe.level4 },
                    [t],
                );
                return e.ordered ? o.createElement(de.Provider, { value: { level: t + 1 } }, o.createElement("ol", { dir: e.direction, start: e.start, style: a }, n)) : o.createElement(de.Provider, { value: { level: t + 1 } }, o.createElement("ul", { dir: e.direction, style: a }, n));
            }
            const ue = ({ isFirst: e, item: t, level: n }) => {
                    const a = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            a.push(o.createElement(Ye, { key: `token-${t}`, token: e }));
                        });
                    const r = o.useMemo(() => ({ marginTop: "0.5em", ...(e ? { marginTop: 0 } : {}) }), [e]);
                    return o.createElement("li", { style: { ...pe.listItem, ...r } }, a);
                },
                pe = P.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.5em" }, firstListItem: { marginTop: 0 } }));
            var ge = n(444342);
            function he({ children: e, isRootLevel: t, style: n, token: a }) {
                return o.createElement(l.P, { direction: a.direction }, o.createElement(R.ZP, { style: [t && ye.paragraph, n] }, o.createElement(ge.Z, { token: a }, e)));
            }
            const ye = P.default.create((e) => ({ paragraph: { display: "block", marginBottom: "0.5em" } }));
            function fe({ children: e, isRootLevel: t, token: n }) {
                return o.createElement(r.Z, { style: ke.container }, o.createElement(R.ZP, { style: ke.quoteText }, e));
            }
            const ke = P.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginVertical: "0.5em" }, quoteText: { fontStyle: "italic" } }));
            var be = n(908629),
                Ce = n(654917),
                we = n(983650),
                ve = n(572929),
                Ee = n(340690);
            const xe = B().bd202fe6;
            function Ze({ token: e }) {
                const { cardAttachments: t, isAborted: n, isAnimated: a, isStreaming: i, messageId: s } = o.useContext(I.$),
                    l = (0, Ce.eX)(),
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
                return "image_generation_card" === e.contentType ? o.createElement(Ee.Z, { cardAttachments: d, isAborted: n, isStreaming: i, messageId: s }) : o.createElement(r.Z, { style: [_e.container, i && _e.streamingContainer] }, o.createElement(be.Z, { show: !!i && !c }, o.createElement(ve.Z, { isAnimated: !0, isInline: !0, style: _e.loadingCardContainer }, o.createElement(R.ZP, { style: _e.loadingText }, xe))), c && o.createElement(we.Z, { cardAttachment: c, conversationKey: l, isAnimated: a, isInline: !0 }));
            }
            const _e = P.default.create((e) => ({ container: { position: "relative", width: "100%" }, streamingContainer: { minHeight: 50, marginBottom: e.spaces.space12 }, loadingCardContainer: { position: "absolute", top: 0, start: 0, zIndex: 10, borderWidth: 0, display: "flex", justifyContent: "center", alignItems: "center", width: "max-content", height: "100%" }, loadingText: { color: e.colors.gray500, fontSize: e.fontSizes.subtext1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 1 }, "50%": { opacity: 0.5 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both", animationIterationCount: "infinite" }, imageGenPlaceholderContainer: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12, padding: e.spaces.space16, borderRadius: e.spaces.space24 } }));
            var Se = n(5741);
            function Ie({ token: e }) {
                const t = e.header
                        ? o.createElement(
                              "tr",
                              { style: Re.tableRow },
                              e.header?.map((e, t) =>
                                  o.createElement(
                                      "th",
                                      { style: Re.tableHeaderCell },
                                      o.createElement(
                                          r.Z,
                                          { style: Re.cellContent },
                                          e.tokens?.map((e, n) => o.createElement(Ye, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              o.createElement(
                                  "tr",
                                  { style: Re.tableRow },
                                  e.map((e, n) =>
                                      o.createElement(
                                          "td",
                                          { style: Re.tableCell },
                                          o.createElement(
                                              r.Z,
                                              { style: Re.cellContent },
                                              e.tokens?.map((e, a) => o.createElement(Ye, { key: `td-${t}-${n}-${a}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return o.createElement(r.Z, { style: Re.tableContainer }, o.createElement("table", { style: Re.table }, t, n));
            }
            const Re = P.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            n(543673), n(240753), n(128399);
            var Pe = n(530732),
                Te = n(815858),
                Me = n(818199),
                Le = n(992942),
                $e = n(58399),
                He = n(630715),
                Be = n(323265),
                De = n(301758),
                ze = n(125363),
                Ae = n(836255),
                Ue = n(916559),
                Fe = n(520595),
                Oe = n(809311);
            const We = B().db6c20cf,
                Ke = B().a4cfb8a8,
                Ne = [E.ky.CodeExecution],
                je = [E.ky.BrowsePage];
            function Ge({ token: e }) {
                const { isCompactLayout: t, isGrokDrawer: n } = (0, X.ZP)(),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(!1),
                    [c, d] = o.useState(!1),
                    m = n || t ? 2 : 4,
                    { toolUsageCardResults: u } = o.useContext(I.$),
                    p = u?.find((t) => t.toolUsageCardId === e.toolUsageCard?.id),
                    g = o.useMemo(() => p?.webResults || [], [p]),
                    h = g.slice(0, m),
                    y = o.useMemo(() => p?.xPostIds || [], [p]),
                    f = y.slice(0, m),
                    k = g.length > 0 || y.length > 0,
                    b = je.includes(e.toolUsageCard?.name),
                    C = o.useCallback(() => {
                        if (!e.toolUsageCard) return o.createElement(R.ZP, { style: Ve.toolHeader, weight: "bold" }, E.eC);
                        if (e.toolUsageCard.name === E.ky.BrowsePage && e.toolUsageCard.args.url) {
                            const t = e.toolUsageCard.args.url;
                            let n = t || "";
                            try {
                                n = new URL(n).hostname.replace("www.", "");
                            } catch (e) {}
                            return o.createElement(R.ZP, { style: Ve.toolHeader, weight: "bold" }, Ke, " ", o.createElement(R.ZP, { link: t, style: Ve.toolHeader, underlineWeight: "normal", weight: "normal", withUnderline: !0 }, n));
                        }
                        return o.createElement(R.ZP, { style: Ve.toolHeader, weight: "bold" }, (0, E.j)(e.toolUsageCard));
                    }, [e.toolUsageCard]),
                    w = o.useCallback(() => (Ne.includes(e.toolUsageCard?.name) ? o.createElement(Pe.Z, { onPress: () => i(!a), style: Ve.headerContainer, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(o.Fragment, null, o.createElement(r.Z, { style: Ve.headerIconContainer }, o.createElement(be.Z, { show: t }, o.createElement($e.default, { style: [Ve.headerIcon, Ve.chevronIcon, a && Ve.openChevronIcon] })), o.createElement(be.Z, { show: !t }, o.createElement(r.Z, { style: Ve.headerIcon }, (0, E.w$)(e.toolUsageCard?.name || "")))), o.createElement(R.ZP, { style: [Ve.toolHeader, t && Ve.toolHeaderHovered], weight: "bold" }, C()))) : o.createElement(r.Z, { style: Ve.headerContainer }, o.createElement(r.Z, { style: Ve.headerIconContainer }, o.createElement(r.Z, { style: Ve.headerIcon }, (0, E.w$)(e.toolUsageCard?.name || ""))), C())), [C, e.toolUsageCard?.name, a]),
                    v = o.useCallback(() => {
                        if (e.toolUsageCard?.name !== E.ky.CodeExecution) return null;
                        const t = e.toolUsageCard?.args?.code || JSON.stringify(e.toolUsageCard?.args || {}, null, 2);
                        return o.createElement(Te.Z, { childrenOuterStyle: Ve.codeBlockOuterContainer, show: a, type: "slide" }, o.createElement(r.Z, { style: Ve.codeBlockContainer }, o.createElement(V.Z, { backgroundColor: P.default.theme.colors.gray100, code: t, headerBarStyle: { backgroundColor: P.default.theme.colors.gray200 }, language: e.toolUsageCard?.args?.language })));
                    }, [e.toolUsageCard, a]),
                    x = o.useCallback(
                        () =>
                            !k || b || 0 === h.length
                                ? null
                                : o.createElement(
                                      r.Z,
                                      { style: Ve.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: Ve.toolResultPills },
                                          h.map((e, t) => o.createElement(Je, { key: `${e.url}-${t}`, webResult: e })),
                                          g.length > m && o.createElement(Pe.Z, { onPress: () => l(!0), style: Ve.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(R.ZP, { style: [Ve.seeMoreText, e && Ve.seeMoreTextHovered], weight: "normal" }, We({ count: g.length }))),
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
                                      { style: Ve.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: Ve.toolResultPills },
                                          f.map((e, t) => o.createElement(qe, { key: `${e}-${t}`, xPostId: e })),
                                          y.length > m && o.createElement(Pe.Z, { onPress: () => d(!0), style: Ve.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(R.ZP, { style: [Ve.seeMoreText, e && Ve.seeMoreTextHovered], weight: "normal" }, We({ count: y.length }))),
                                      ),
                                  ),
                        [k, b, f, y, m, d],
                    );
                return o.createElement(r.Z, { style: Ve.container }, w(), x(), Z(), v(), s ? o.createElement(Ue.E, { onDrawerDismiss: () => l(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: g }) : null, c ? o.createElement(Fe.a, { onDrawerDismiss: () => d(!1), paginationOptions: { numResultsPerPage: 25 }, postIds: y }) : null);
            }
            const Je = o.memo(({ webResult: e }) => {
                    const [t, n] = o.useState(!1),
                        a = e.favicon_base64 || e.favicon,
                        i = o.useCallback(() => o.createElement(r.Z, { style: Ve.hoverCardContainer }, o.createElement(Oe.p, { item: e })), [e]);
                    return o.createElement(
                        Me.Z,
                        { renderContent: i },
                        o.createElement(
                            M.ZP,
                            {
                                backgroundColor: "gray100",
                                borderColor: "gray200",
                                onPress: () => {
                                    window.open(e.url, "_blank");
                                },
                                size: "small",
                                style: Ve.toolResultPill,
                            },
                            o.createElement(r.Z, { style: Ve.toolResultPillContent }, a && !t ? o.createElement(Le.Z, { onError: () => n(!0), source: a, style: Ve.toolResultPillImage }) : o.createElement(He.default, { style: Ve.linkIcon }), o.createElement(r.Z, null, o.createElement(R.ZP, { numberOfLines: 1, style: Ve.toolResultPillText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                qe = o.memo(({ xPostId: e }) => {
                    const t = o.useMemo(() => Ae.Z.createHydratorForTweet(e), [e]),
                        n = o.useCallback(
                            () =>
                                o.createElement(
                                    r.Z,
                                    { style: Ve.hoverCardContainer },
                                    o.createElement(De.Z, {
                                        isCondensed: !0,
                                        onPress: (e) => {
                                            Be.ZP.isTwitterApp();
                                        },
                                        tweetId: e,
                                        withBirdwatchPivot: !1,
                                        withLink: !0,
                                        withUserHoverCard: !1,
                                    }),
                                ),
                            [e],
                        ),
                        a = (0, ze.v9)(t);
                    return a
                        ? o.createElement(
                              Me.Z,
                              { renderContent: n },
                              o.createElement(
                                  M.ZP,
                                  {
                                      backgroundColor: "gray100",
                                      borderColor: "gray200",
                                      onPress: () => {
                                          window.open(a.permalink, "_blank");
                                      },
                                      size: "small",
                                      style: Ve.toolResultPill,
                                  },
                                  o.createElement(r.Z, { style: Ve.toolResultPillContent }, o.createElement(Le.Z, { source: { uri: a.user.profile_image_url_https }, style: Ve.toolResultPillImage }), o.createElement(r.Z, null, o.createElement(R.ZP, { numberOfLines: 1, style: Ve.toolResultPillText, weight: "normal" }, `@${a.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                Ve = P.default.create((e) => ({
                    container: { width: "100%", flex: 1, flexDirection: "column", overflow: "hidden", borderRadius: e.spaces.space16, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, padding: e.spaces.space8, backgroundColor: e.colors.gray50, animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", marginVertical: e.spaces.space4, marginTop: e.spaces.space8 },
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
                Xe = o.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: a } = o.useContext(I.$),
                            r = o.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const a = `${n}`;
                                            e.push(o.createElement(Xe, { key: a, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            i = o.createElement(he, { isRootLevel: t, style: [Qe.expandedLineHeight, e ? Qe.noMarginBottom : void 0], token: n }, r);
                        if (a && !a.includes(n.type)) return o.createElement(R.ZP, { style: Qe.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return o.createElement(le, { token: n });
                            case "code":
                                return "indented" === n.codeBlockStyle ? i : o.createElement(Y, { token: n });
                            case "codespan":
                                return o.createElement(ee, { token: n });
                            case "list":
                                return o.createElement(me, { token: n });
                            case "blockquote":
                                return o.createElement(fe, { token: n }, r);
                            case "table":
                                return o.createElement(Ie, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return o.createElement("br", null);
                            case "hr":
                                return o.createElement(oe, null);
                            case "text":
                                return o.createElement(ge.Z, { token: n }, r);
                            case "link":
                                return o.createElement(ie.Z, { token: n });
                            case "heading":
                                return o.createElement(ne.X, { token: n }, r);
                            case "strong":
                                return o.createElement(R.ZP, { style: Qe.expandedLineHeight, weight: "bold" }, o.createElement(ge.Z, { token: n }, r));
                            case "em":
                                return o.createElement(R.ZP, { style: [Qe.expandedLineHeight, Qe.italic] }, o.createElement(ge.Z, { token: n }, r));
                            case "emStrong":
                                return o.createElement(R.ZP, { style: [Qe.expandedLineHeight, Qe.italic], weight: "bold" }, o.createElement(ge.Z, { token: n }, r));
                            case "blockLatex":
                                return o.createElement(re.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return o.createElement(re.Z, { content: n.text });
                            case "grokRichContent":
                                return o.createElement(Ze, { token: n });
                            case "renderChart":
                                return o.createElement(G, { chartJSConfig: n.chartJSConfig || "" });
                            case "toolUsageCard":
                                return o.createElement(Ge, { token: n });
                            default:
                                return i;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                Ye = Xe,
                Qe = P.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: Se.Y }, noMarginBottom: { marginBottom: 0 } }));
            function et(e) {
                return e.items && e.items.length ? et(e.items[0]) : e.tokens && e.tokens.length ? et(e.tokens[0]) : e.text || "";
            }
            function tt(e) {
                return (
                    e.forEach((e, t) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                (e.isFirst = 0 === t), (e.direction = i.Z.getTextDirection(et(e)));
                        }
                    }),
                    e
                );
            }
            a.TU.use({ extensions: [S._, _.Im, ...v.Z, u, g, h, f, w, b, d, Z] });
            const nt = [],
                ot = o.memo(({ allowedTokenTypes: e, cardAttachments: t, chatResponseAnnotations: n, citations: c, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: p, isStreaming: g, markdownText: h, messageId: y, style: f, toolUsageCardResults: k }) => {
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
                            return tt(a.TU.lexer(e ?? ""));
                        }, [h, n, b]),
                        v = o.useMemo(() => w.map((e, t) => o.createElement(Ye, { isLast: t === w.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [w]);
                    return o.createElement(I.Z, { allowedTokenTypes: e, cardAttachments: t, citations: c ?? nt, disableCodeBlockStickyHeader: d, disableLinks: m, enableFaviconDownload: C, isAborted: u, isAnimated: p, isStreaming: g, messageId: y, toolUsageCardResults: k }, o.createElement(l.P, { direction: i.Z.getTextDirection(h ?? "") }, o.createElement(r.Z, { style: [{ display: "block" }, f] }, v)));
                }),
                at = ot;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-63cb1cc4.2078596a.js.map

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
                ({ analysisEntityId: d, returnCitations: m, returnSearchResults: u = !0, trendPromptIdStr: g, features: p = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: h, toolOverrides: y, personalityId: f }) =>
                (g, k, { api: C, featureSwitches: b }) => {
                    const E = !o.ZP.isTwitterApp() && b.isTrue("responsive_web_grok_api_enable_grok_host"),
                        w = (0, a.bD)(t),
                        v = w.selectConversationId(k());
                    return new Promise((t) => {
                        v || (0, r.Uk)(e, "regenerate function failed to find a conversationId"), t(v);
                    }).then(async (o) => {
                        if ("string" == typeof o) {
                            const v = w.selectMode(k()),
                                x = w.selectConversationWithLocalMessages(k()),
                                Z = (0, a.F9)(k()),
                                _ = x.findLastIndex((e) => e.sender === s.CI.ASSISTANT && e.userChatItemId === n);
                            if (-1 === _) return void (0, r.Uk)(e, "regenerate function couldn't find an actionable response");
                            const S = x[_],
                                I = S.promptMetadata ? { ...S.promptMetadata, action: "REGENERATE" } : void 0,
                                R = x.slice(0, _).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let P;
                            const T = b.isTrue("responsive_web_grok_location_enabled");
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
                                B = { responses: R, systemPromptName: v, conversationId: o, grokModelOptionId: Z, returnSearchResults: u, returnCitations: m, requestFeatures: p, resampleResponseId: n, imageGenerationCount: h, ...(d && 1 === R.length ? { analysisEntityId: d } : void 0), promptMetadata: I, toolOverrides: L, geoLocation: P, enableSideBySide: !1, isDeepsearch: $, isReasoning: H, personalityId: f, deepsearchArgs: $ ? M?.deepsearchArgs : void 0 };
                            null != w.selectCurrentResponseMessage(k()) && (await g((0, l.I)({ analytics: e, conversationKey: t }))), g(w.regenerateResponse(S));
                            const { mediaIds: z, mediaUrls: D } = (0, s.VU)(S);
                            (0, r.c3)(e, { conversationLength: R.length + 1, isDeepsearch: $ || void 0, isReasoning: H || void 0, allMediaIds: z.length > 0 ? z : void 0, allMediaUrls: D.length > 0 ? D : void 0 });
                            const A = b.isTrue("responsive_web_grok_enable_add_response_keepalive") && ($ || H),
                                U = b.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, c.D)({ grokModule: w, requestBody: B, analytics: e, dispatch: g, api: C, eventTag: "regenerate", flags: { enableLocation: T, enableGrokApiHost: E, numRetries: U, enableKeepalive: A } });
                        }
                    });
                };
        },
        207683: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => et, default: () => tt });
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
                g = /^<grok:render\s+card_id="([^"]+)"\s+card_type="([^"]+)"\s*>([\s\S]*?)<\/grok:render>/,
                p = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<grok:render"),
                    tokenizer(e) {
                        const t = g.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], contentType: t[2], text: "" };
                    },
                },
                h = /^<images_search_card\s+id="([^"]+)"\s+query="([^"]+)"\s+size="([^"]+)"\s+position="([^"]+)"\s*>([\s\S]*?)<\/images_search_card>/,
                y = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<images_search_card"),
                    tokenizer(e) {
                        const t = h.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], size: t[3], position: t[4], text: "", contentType: "images_search_card" };
                    },
                },
                f = /^<image_generation_card\s+id="([^"]+)"(?:\s+query="([^"]+)")?(?:\s+size="([^"]+)")?(?:\s+position="([^"]+)")?\s*><\/image_generation_card>/,
                k = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<image_generation_card"),
                    tokenizer(e) {
                        const t = f.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], query: t[2] || void 0, size: t[3] || void 0, position: t[4] || void 0, text: "", contentType: "image_generation_card" };
                    },
                };
            var C = n(978921),
                b = n(187268);
            const E = /^<tool_usage_card>\s*(?:<tool_usage_card_id>([0-9a-f-]{36})<\/tool_usage_card_id>\s*)?<tool_name>([^<]+)<\/tool_name>\s*<tool_args>([\s\S]*?)<\/tool_args>\s*<\/tool_usage_card>/ms,
                w = {
                    name: "toolUsageCard",
                    level: "inline",
                    start: (e) => e.indexOf("<tool_usage_card"),
                    tokenizer(e) {
                        const t = E.exec(e);
                        if (t) {
                            const e = (0, b.Sd)(t[1], t[2], t[3]);
                            return { type: "toolUsageCard", raw: t[0], toolUsageCard: e };
                        }
                    },
                };
            var v = n(170676),
                x = n(122670),
                Z = n(595080),
                _ = (n(136728), n(731708)),
                S = n(392237),
                I = n(807896),
                R = n(154003),
                P = n(797553),
                T = n(143670),
                M = n(111677),
                L = n.n(M),
                $ = n(473026),
                H = n(689582),
                B = n(72591);
            const z = "https://artifacts.grokusercontent.com/chartjs";
            function D({ chartJSConfig: e, iframeRef: t, messageHandlers: n }) {
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
                        i.current?.contentWindow && i.current.contentWindow.postMessage({ type: "chartjs", chartJSConfig: e, isDarkTheme: "light" === !S.default.theme.paletteName, backgroundColor: S.default.theme.colors.gray0 }, z);
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
                    o.createElement(r.Z, { style: A.container }, o.createElement("iframe", { ref: i, sandbox: "allow-scripts allow-same-origin", src: z, style: A.iframe, title: "chartjs" }))
                );
            }
            const A = S.default.create((e) => ({ container: { flex: 1 }, iframe: { width: "100%", flex: 1, border: "none" } })),
                U = L().g49741e8,
                F = L().b0a889d4,
                O = L().a111fb48,
                W = L().bccc65f0;
            function K({ chartJSConfig: e }) {
                const [t, n] = o.useState(!1),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(null),
                    [c, d] = o.useState(null),
                    m = o.useRef(null),
                    [u, g] = o.useState(!1),
                    p = o.useCallback(() => {
                        g(!u);
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
                            { actionText: F, onClick: y, Icon: $.default },
                            { actionText: O, onClick: f, Icon: H.default },
                        ],
                        [y, f],
                    );
                return e
                    ? o.createElement(
                          r.Z,
                          { style: N.container },
                          a
                              ? o.createElement(r.Z, { style: N.failedContainer })
                              : o.createElement(
                                    r.Z,
                                    { style: [N.chartContainer, t ? void 0 : { opacity: 0 }] },
                                    o.createElement(r.Z, { style: N.chartIframe }, o.createElement(D, { chartJSConfig: e, iframeRef: m, messageHandlers: h })),
                                    o.createElement(r.Z, { style: N.divider }),
                                    o.createElement(
                                        r.Z,
                                        { style: N.menuContainer },
                                        o.createElement(_.ZP, { style: N.disclaimerText }, W),
                                        o.createElement(
                                            o.Fragment,
                                            null,
                                            o.createElement(R.ZP, { "aria-label": U, backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: U }, icon: o.createElement(B.default, null), onPress: p, size: "small" }, U),
                                            u &&
                                                o.createElement(
                                                    P.default,
                                                    { isFixed: !0, onDismiss: p },
                                                    k.map((e) => o.createElement(T.Z, (0, I.Z)({}, e, { key: e.actionText }))),
                                                ),
                                        ),
                                    ),
                                ),
                      )
                    : null;
            }
            const N = S.default.create((e) => ({ container: { flex: 1, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, backgroundColor: e.colors.gray0, marginBottom: e.spaces.space16, overflow: "hidden", height: 500, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, failedContainer: {}, chartContainer: { flex: 1 }, chartIframe: { flex: 1, padding: e.spaces.space16 }, divider: { height: 1, width: "100%", backgroundColor: e.colors.gray200 }, menuContainer: { padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, disclaimerText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var j = n(67369),
                G = n(65469),
                J = n(988290);
            function q({ token: e }) {
                const t = (0, j.Zz)(),
                    { isGrokDrawer: n, isGrokShare: a } = (0, J.ZP)(),
                    { disableCodeBlockStickyHeader: i } = o.useContext(Z.$);
                return "chartjs" === e.lang ? o.createElement(K, { chartJSConfig: e.text }) : o.createElement(r.Z, { style: V.codeContainer }, o.createElement(G.Z, { code: e.text, headerBarStyle: i ? void 0 : n || a || t ? V.drawerStickyContainer : V.stickyContainer, language: e.lang }));
            }
            const V = S.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1em" } }));
            function X({ token: e }) {
                const { isAnimated: t } = o.useContext(Z.$),
                    n = o.useMemo(() => [Y.codeSpan, t ? Y.animation : null], [t]);
                return o.createElement(_.ZP, { style: n }, e.text);
            }
            const Y = S.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: S.default.isDarkMode() ? "rgb(247, 170, 125)" : "rgb(158, 63, 0)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: S.default.isDarkMode() ? "rgba(219, 133, 87, 0.2)" : "rgba(206, 96, 28, 0.1)" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" } }));
            var Q = n(33474);
            function ee() {
                return o.createElement("hr", { style: te.horizontalRule });
            }
            const te = S.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var ne = n(342430),
                oe = n(910594),
                ae = n(488684);
            function re({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return o.createElement(ae.Z, { screenName: e.handle || "" }, o.createElement(_.ZP, { link: t }, e.text));
            }
            const ie = { level: 0 },
                se = o.createContext(ie);
            function le({ token: e }) {
                const { level: t } = o.useContext(se),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, a) => {
                        n.push(o.createElement(se.Provider, { key: `li-${a.toString()}`, value: { level: t + 1 } }, o.createElement(ce, { isFirst: 0 === a, item: e, level: t })));
                    });
                const a = o.useMemo(
                    () =>
                        [
                            { ...de.list, ...de.level1 },
                            { ...de.list, ...de.level2 },
                            { ...de.list, ...de.level3 },
                        ][t] ?? { ...de.list, ...de.level4 },
                    [t],
                );
                return e.ordered ? o.createElement(se.Provider, { value: { level: t + 1 } }, o.createElement("ol", { dir: e.direction, start: e.start, style: a }, n)) : o.createElement(se.Provider, { value: { level: t + 1 } }, o.createElement("ul", { dir: e.direction, style: a }, n));
            }
            const ce = ({ isFirst: e, item: t, level: n }) => {
                    const a = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            a.push(o.createElement(qe, { key: `token-${t}`, token: e }));
                        });
                    const r = o.useMemo(() => ({ marginTop: "0.5em", ...(e ? { marginTop: 0 } : {}) }), [e]);
                    return o.createElement("li", { style: { ...de.listItem, ...r } }, a);
                },
                de = S.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.5em" }, firstListItem: { marginTop: 0 } }));
            var me = n(444342);
            function ue({ children: e, isRootLevel: t, style: n, token: a }) {
                return o.createElement(l.P, { direction: a.direction }, o.createElement(_.ZP, { style: [t && ge.paragraph, n] }, o.createElement(me.Z, { token: a }, e)));
            }
            const ge = S.default.create((e) => ({ paragraph: { display: "block", marginBottom: "0.5em" } }));
            function pe({ children: e, isRootLevel: t, token: n }) {
                return o.createElement(r.Z, { style: he.container }, o.createElement(_.ZP, { style: he.quoteText }, e));
            }
            const he = S.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginVertical: "0.5em" }, quoteText: { fontStyle: "italic" } }));
            var ye = n(908629),
                fe = n(654917),
                ke = n(983650),
                Ce = n(572929),
                be = n(340690);
            const Ee = L().bd202fe6;
            function we({ token: e }) {
                const { cardAttachments: t, isAborted: n, isAnimated: a, isStreaming: i, messageId: s } = o.useContext(Z.$),
                    l = (0, fe.eX)(),
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
                return "image_generation_card" === e.contentType ? o.createElement(be.Z, { cardAttachments: d, isAborted: n, isStreaming: i, messageId: s }) : o.createElement(r.Z, { style: [ve.container, i && ve.streamingContainer] }, o.createElement(ye.Z, { show: !!i && !c }, o.createElement(Ce.Z, { isAnimated: !0, isInline: !0, style: ve.loadingCardContainer }, o.createElement(_.ZP, { style: ve.loadingText }, Ee))), c && o.createElement(ke.Z, { cardAttachment: c, conversationKey: l, isAnimated: a, isInline: !0 }));
            }
            const ve = S.default.create((e) => ({ container: { position: "relative", width: "100%" }, streamingContainer: { minHeight: 50, marginBottom: e.spaces.space12 }, loadingCardContainer: { position: "absolute", top: 0, start: 0, zIndex: 10, borderWidth: 0, display: "flex", justifyContent: "center", alignItems: "center", width: "max-content", height: "100%" }, loadingText: { color: e.colors.gray500, fontSize: e.fontSizes.subtext1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 1 }, "50%": { opacity: 0.5 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both", animationIterationCount: "infinite" }, imageGenPlaceholderContainer: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12, padding: e.spaces.space16, borderRadius: e.spaces.space24 } }));
            var xe = n(5741);
            function Ze({ token: e }) {
                const t = e.header
                        ? o.createElement(
                              "tr",
                              { style: _e.tableRow },
                              e.header?.map((e, t) =>
                                  o.createElement(
                                      "th",
                                      { style: _e.tableHeaderCell },
                                      o.createElement(
                                          r.Z,
                                          { style: _e.cellContent },
                                          e.tokens?.map((e, n) => o.createElement(qe, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              o.createElement(
                                  "tr",
                                  { style: _e.tableRow },
                                  e.map((e, n) =>
                                      o.createElement(
                                          "td",
                                          { style: _e.tableCell },
                                          o.createElement(
                                              r.Z,
                                              { style: _e.cellContent },
                                              e.tokens?.map((e, a) => o.createElement(qe, { key: `td-${t}-${n}-${a}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return o.createElement(r.Z, { style: _e.tableContainer }, o.createElement("table", { style: _e.table }, t, n));
            }
            const _e = S.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            n(543673), n(240753), n(128399);
            var Se = n(530732),
                Ie = n(815858),
                Re = n(818199),
                Pe = n(992942),
                Te = n(58399),
                Me = n(630715),
                Le = n(323265),
                $e = n(301758),
                He = n(125363),
                Be = n(836255),
                ze = n(916559),
                De = n(520595),
                Ae = n(809311);
            const Ue = L().db6c20cf,
                Fe = L().a4cfb8a8,
                Oe = [b.ky.CodeExecution],
                We = [b.ky.BrowsePage];
            function Ke({ token: e }) {
                const { isCompactLayout: t, isGrokDrawer: n } = (0, J.ZP)(),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(!1),
                    [c, d] = o.useState(!1),
                    m = n || t ? 2 : 4,
                    { toolUsageCardResults: u } = o.useContext(Z.$),
                    g = u?.find((t) => t.toolUsageCardId === e.toolUsageCard?.id),
                    p = o.useMemo(() => g?.webResults || [], [g]),
                    h = p.slice(0, m),
                    y = o.useMemo(() => g?.xPostIds || [], [g]),
                    f = y.slice(0, m),
                    k = p.length > 0 || y.length > 0,
                    C = We.includes(e.toolUsageCard?.name),
                    E = o.useCallback(() => {
                        if (!e.toolUsageCard) return o.createElement(_.ZP, { style: Ge.toolHeader, weight: "bold" }, b.eC);
                        if (e.toolUsageCard.name === b.ky.BrowsePage && e.toolUsageCard.args.url) {
                            const t = e.toolUsageCard.args.url;
                            let n = t || "";
                            try {
                                n = new URL(n).hostname.replace("www.", "");
                            } catch (e) {}
                            return o.createElement(_.ZP, { style: Ge.toolHeader, weight: "bold" }, Fe, " ", o.createElement(_.ZP, { link: t, style: Ge.toolHeader, underlineWeight: "normal", weight: "normal", withUnderline: !0 }, n));
                        }
                        return o.createElement(_.ZP, { style: Ge.toolHeader, weight: "bold" }, (0, b.CK)(e.toolUsageCard));
                    }, [e.toolUsageCard]),
                    w = o.useCallback(() => (Oe.includes(e.toolUsageCard?.name) ? o.createElement(Se.Z, { onPress: () => i(!a), style: Ge.headerContainer, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(o.Fragment, null, o.createElement(r.Z, { style: Ge.headerIconContainer }, o.createElement(ye.Z, { show: t }, o.createElement(Te.default, { style: [Ge.headerIcon, Ge.chevronIcon, a && Ge.openChevronIcon] })), o.createElement(ye.Z, { show: !t }, o.createElement(r.Z, { style: Ge.headerIcon }, (0, b.w$)(e.toolUsageCard?.name || "")))), o.createElement(_.ZP, { style: [Ge.toolHeader, t && Ge.toolHeaderHovered], weight: "bold" }, E()))) : o.createElement(r.Z, { style: Ge.headerContainer }, o.createElement(r.Z, { style: Ge.headerIconContainer }, o.createElement(r.Z, { style: Ge.headerIcon }, (0, b.w$)(e.toolUsageCard?.name || ""))), E())), [E, e.toolUsageCard?.name, a]),
                    v = o.useCallback(() => {
                        if (e.toolUsageCard?.name !== b.ky.CodeExecution) return null;
                        const t = e.toolUsageCard?.args?.code || JSON.stringify(e.toolUsageCard?.args || {}, null, 2);
                        return o.createElement(Ie.Z, { childrenOuterStyle: Ge.codeBlockOuterContainer, show: a, type: "slide" }, o.createElement(r.Z, { style: Ge.codeBlockContainer }, o.createElement(G.Z, { backgroundColor: S.default.theme.colors.gray100, code: t, headerBarStyle: { backgroundColor: S.default.theme.colors.gray200 }, language: e.toolUsageCard?.args?.language })));
                    }, [e.toolUsageCard, a]),
                    x = o.useCallback(
                        () =>
                            !k || C || 0 === h.length
                                ? null
                                : o.createElement(
                                      r.Z,
                                      { style: Ge.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: Ge.toolResultPills },
                                          h.map((e, t) => o.createElement(Ne, { key: `${e.url}-${t}`, webResult: e })),
                                          p.length > m && o.createElement(Se.Z, { onPress: () => l(!0), style: Ge.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(_.ZP, { style: [Ge.seeMoreText, e && Ge.seeMoreTextHovered], weight: "normal" }, Ue({ count: p.length }))),
                                      ),
                                  ),
                        [k, C, h, p, m, l],
                    ),
                    I = o.useCallback(
                        () =>
                            !k || C || 0 === f.length
                                ? null
                                : o.createElement(
                                      r.Z,
                                      { style: Ge.toolResultsContainer },
                                      o.createElement(
                                          r.Z,
                                          { style: Ge.toolResultPills },
                                          f.map((e, t) => o.createElement(je, { key: `${e}-${t}`, xPostId: e })),
                                          y.length > m && o.createElement(Se.Z, { onPress: () => d(!0), style: Ge.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(_.ZP, { style: [Ge.seeMoreText, e && Ge.seeMoreTextHovered], weight: "normal" }, Ue({ count: y.length }))),
                                      ),
                                  ),
                        [k, C, f, y, m, d],
                    );
                return o.createElement(r.Z, { style: Ge.container }, w(), x(), I(), v(), s ? o.createElement(ze.E, { onDrawerDismiss: () => l(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: p }) : null, c ? o.createElement(De.a, { onDrawerDismiss: () => d(!1), paginationOptions: { numResultsPerPage: 25 }, postIds: y }) : null);
            }
            const Ne = o.memo(({ webResult: e }) => {
                    const t = e.favicon_base64 || e.favicon,
                        n = o.useCallback(() => o.createElement(r.Z, { style: Ge.hoverCardContainer }, o.createElement(Ae.p, { item: e })), [e]);
                    return o.createElement(
                        Re.Z,
                        { renderContent: n },
                        o.createElement(
                            R.ZP,
                            {
                                backgroundColor: "gray100",
                                borderColor: "gray200",
                                onPress: () => {
                                    window.open(e.url, "_blank");
                                },
                                size: "small",
                                style: Ge.toolResultPill,
                            },
                            o.createElement(r.Z, { style: Ge.toolResultPillContent }, t ? o.createElement(Pe.Z, { source: { uri: t }, style: Ge.toolResultPillImage }) : o.createElement(Me.default, { style: Ge.linkIcon }), o.createElement(r.Z, null, o.createElement(_.ZP, { numberOfLines: 1, style: Ge.toolResultPillText, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                        ),
                    );
                }),
                je = o.memo(({ xPostId: e }) => {
                    const t = o.useMemo(() => Be.Z.createHydratorForTweet(e), [e]),
                        n = o.useCallback(
                            () =>
                                o.createElement(
                                    r.Z,
                                    { style: Ge.hoverCardContainer },
                                    o.createElement($e.Z, {
                                        isCondensed: !0,
                                        onPress: (e) => {
                                            Le.ZP.isTwitterApp();
                                        },
                                        tweetId: e,
                                        withBirdwatchPivot: !1,
                                        withLink: !0,
                                        withUserHoverCard: !1,
                                    }),
                                ),
                            [e],
                        ),
                        a = (0, He.v9)(t);
                    return a
                        ? o.createElement(
                              Re.Z,
                              { renderContent: n },
                              o.createElement(
                                  R.ZP,
                                  {
                                      backgroundColor: "gray100",
                                      borderColor: "gray200",
                                      onPress: () => {
                                          window.open(a.permalink, "_blank");
                                      },
                                      size: "small",
                                      style: Ge.toolResultPill,
                                  },
                                  o.createElement(r.Z, { style: Ge.toolResultPillContent }, o.createElement(Pe.Z, { source: { uri: a.user.profile_image_url_https }, style: Ge.toolResultPillImage }), o.createElement(r.Z, null, o.createElement(_.ZP, { numberOfLines: 1, style: Ge.toolResultPillText, weight: "normal" }, `@${a.user.screen_name}`))),
                              ),
                          )
                        : null;
                }),
                Ge = S.default.create((e) => ({
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
                Je = o.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: a } = o.useContext(Z.$),
                            r = o.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const a = `${n}`;
                                            e.push(o.createElement(Je, { key: a, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            i = o.createElement(ue, { isRootLevel: t, style: [Ve.expandedLineHeight, e ? Ve.noMarginBottom : void 0], token: n }, r);
                        if (a && !a.includes(n.type)) return o.createElement(_.ZP, { style: Ve.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return o.createElement(re, { token: n });
                            case "code":
                                return "indented" === n.codeBlockStyle ? i : o.createElement(q, { token: n });
                            case "codespan":
                                return o.createElement(X, { token: n });
                            case "list":
                                return o.createElement(le, { token: n });
                            case "blockquote":
                                return o.createElement(pe, { token: n }, r);
                            case "table":
                                return o.createElement(Ze, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return o.createElement("br", null);
                            case "hr":
                                return o.createElement(ee, null);
                            case "text":
                                return o.createElement(me.Z, { token: n }, r);
                            case "link":
                                return o.createElement(oe.Z, { token: n });
                            case "heading":
                                return o.createElement(Q.X, { token: n }, r);
                            case "strong":
                                return o.createElement(_.ZP, { style: Ve.expandedLineHeight, weight: "bold" }, o.createElement(me.Z, { token: n }, r));
                            case "em":
                                return o.createElement(_.ZP, { style: [Ve.expandedLineHeight, Ve.italic] }, o.createElement(me.Z, { token: n }, r));
                            case "emStrong":
                                return o.createElement(_.ZP, { style: [Ve.expandedLineHeight, Ve.italic], weight: "bold" }, o.createElement(me.Z, { token: n }, r));
                            case "blockLatex":
                                return o.createElement(ne.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return o.createElement(ne.Z, { content: n.text });
                            case "grokRichContent":
                                return o.createElement(we, { token: n });
                            case "renderChart":
                                return o.createElement(K, { chartJSConfig: n.chartJSConfig || "" });
                            case "toolUsageCard":
                                return o.createElement(Ke, { token: n });
                            default:
                                return i;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                qe = Je,
                Ve = S.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: xe.Y }, noMarginBottom: { marginBottom: 0 } }));
            function Xe(e) {
                return e.items && e.items.length ? Xe(e.items[0]) : e.tokens && e.tokens.length ? Xe(e.tokens[0]) : e.text || "";
            }
            function Ye(e) {
                return (
                    e.forEach((e, t) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                (e.isFirst = 0 === t), (e.direction = i.Z.getTextDirection(Xe(e)));
                        }
                    }),
                    e
                );
            }
            a.TU.use({ extensions: [x._, v.Im, ...C.Z, u, p, k, y, d, w] });
            const Qe = [],
                et = o.memo(({ allowedTokenTypes: e, cardAttachments: t, chatResponseAnnotations: n, citations: c, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: g, isStreaming: p, markdownText: h, messageId: y, style: f, toolUsageCardResults: k }) => {
                    const C = (0, s.hC)("responsive_web_grok_links") && !g,
                        b = o.useMemo(() => {
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
                            })(h, C ? n : void 0);
                            return Ye(a.TU.lexer(e ?? ""));
                        }, [h, n, C]),
                        E = o.useMemo(() => b.map((e, t) => o.createElement(qe, { isLast: t === b.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [b]);
                    return o.createElement(Z.Z, { allowedTokenTypes: e, cardAttachments: t, citations: c ?? Qe, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: g, isStreaming: p, messageId: y, toolUsageCardResults: k }, o.createElement(l.P, { direction: i.Z.getTextDirection(h ?? "") }, o.createElement(r.Z, { style: [{ display: "block" }, f] }, E)));
                }),
                tt = et;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => s, Z: () => l });
            var o = n(202784);
            const a = [],
                r = [],
                i = { isAnimated: !1, citations: a, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0, cardAttachments: r, isStreaming: !1, messageId: void 0, isAborted: !1, toolUsageCardResults: [] },
                s = o.createContext(i);
            function l({ children: e, disableLinks: t, isAnimated: n, citations: i = a, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d = r, isStreaming: m, messageId: u, isAborted: g, toolUsageCardResults: p }) {
                const h = i.length ? i : a,
                    y = o.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: h, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d, isStreaming: m, messageId: u, isAborted: g, toolUsageCardResults: p }), [n, t, h, l, c, d, m, u, g, p]);
                return o.createElement(s.Provider, { value: y }, e);
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
            n.d(t, { Z: () => O });
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
                g = n(327597),
                p = n(654917),
                h = n(170676),
                y = n(595080),
                f = n(5741),
                k = n(45843),
                C = n(325686),
                b = n(818199),
                E = n(530732),
                w = n(630715),
                v = n(725405),
                x = n(809311);
            const Z = "grok_citation_web_result",
                _ = ({ link: e }) => {
                    const { isAnimated: t } = o.useContext(y.$),
                        [n, a] = o.useState(!1),
                        r = (0, v.Z)(),
                        i = o.useCallback(() => {
                            a(!0), r.scribe({ action: "hover", component: Z, data: { url: e.url } });
                        }, [a, r, e.url]),
                        s = o.useCallback(() => a(!1), [a]),
                        l = o.useCallback(() => {
                            r.scribe({ action: "click", component: Z, data: { url: e.url } });
                        }, [r, e.url]);
                    let c = new URL(e.url).hostname;
                    c.startsWith("www.") && (c = c.slice(4));
                    const d = o.useCallback(() => o.createElement(S, { webResult: e }), [e]);
                    return o.createElement("div", { className: "omit-from-copy", style: I.inlineContainer }, o.createElement(C.Z, { style: [I.inlineContainer, t ? I.animation : null] }, o.createElement(b.Z, { renderContent: d }, o.createElement(E.Z, { link: e.url, onMouseEnter: i, onMouseLeave: s, onPress: l, style: [I.content, e.favicon_base64 ? I.faviconContainer : I.iconContainer, n ? I.containerHovered : void 0], withoutInteractiveStyles: !0 }, e.favicon_base64 ? o.createElement(k.Z, { source: e.favicon_base64, style: I.favicon }) : o.createElement(w.default, { style: I.linkIcon })))));
                },
                S = ({ webResult: e }) => o.createElement(C.Z, { style: I.hoverCardContainer }, o.createElement(x.p, { item: e })),
                I = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var R = n(323265),
                P = n(301758),
                T = n(836255);
            const M = "grok_citation_post",
                L = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: a } = o.useContext(y.$),
                        [r, i] = o.useState(!1),
                        s = (0, v.Z)(),
                        l = o.useCallback(() => {
                            i(!0), s.scribe({ action: "hover", component: M, data: { tweet_id: e } });
                        }, [i, s, e]),
                        c = o.useCallback(() => i(!1), [i]),
                        d = o.useCallback(() => {
                            i(!0), s.scribe({ action: "click", component: M, data: { tweet_id: e } });
                        }, [i, s, e]);
                    o.useEffect(() => {
                        e && n(T.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = T.Z.selectHydrated(t.getState(), e),
                        g = o.useCallback(() => o.createElement($, { postId: e }), [e]);
                    if (!m) return null;
                    const p = m?.user?.profile_image_url_https;
                    return o.createElement("div", { className: "omit-from-copy", style: H.inlineContainer }, o.createElement(C.Z, { style: [H.inlineContainer, a ? H.animation : null] }, o.createElement(b.Z, { renderContent: g }, o.createElement(E.Z, { link: m.permalink, onMouseEnter: l, onMouseLeave: c, onPress: d, style: [H.content, p ? H.avatarContainer : H.iconContainer, r ? H.containerHovered : void 0], withoutInteractiveStyles: !0 }, p ? o.createElement(k.Z, { source: p, style: H.avatar }) : o.createElement(w.default, { style: H.linkIcon })))));
                },
                $ = ({ postId: e }) =>
                    o.createElement(
                        C.Z,
                        { style: H.hoverCardContainer },
                        o.createElement(P.Z, {
                            isCondensed: !0,
                            onPress: (e) => {
                                R.ZP.isTwitterApp();
                            },
                            tweetId: e,
                            withBirdwatchPivot: !1,
                            withLink: !0,
                            withUserHoverCard: !1,
                        }),
                    ),
                H = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                B = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                z = { label: c().dc0c8266 },
                D = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                A = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const U = ["http:", "https:"],
                F = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function O({ token: e }) {
                const { citations: t } = o.useContext(y.$),
                    n = (0, m.z)(),
                    s = (0, u.I0)(),
                    [l, c] = o.useState(!1),
                    f = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(D);
                                return t ? t[1] : void 0;
                            })(e.href || ""),
                        [e.href],
                    ),
                    k = o.useMemo(
                        () =>
                            (function (e) {
                                const t = e.match(A);
                                return t ? t[1] : void 0;
                            })(e.href || ""),
                        [e.href],
                    ),
                    C = t.find((t) => t.url === e.href),
                    b = (0, d.hC)("responsive_web_grok_show_citations"),
                    E = (0, p.eX)(),
                    w = o.useCallback(
                        (e) => {
                            e.preventDefault(), k && (n.scribe({ element: "annotation_text_link", action: "click" }), s((0, g.u)({ analytics: n, conversationKey: E })({ text: decodeURIComponent(k), returnCitations: b })));
                        },
                        [k, E, n, s, b],
                    );
                let v;
                try {
                    e.href && (v = new URL(e.href));
                } catch (e) {}
                if (!v || !U.includes(v.protocol)) {
                    let t;
                    return (t = e.text === e.href ? e.text : !e.text && e.href && C ? `(${e.href})` : `${e.text} ${e.href ? `(${e.href})` : ""}`), o.createElement(a.ZP, null, t);
                }
                const x = (0, h.TP)(e.raw) || (0, h.sN)(e.raw);
                if (e.href && (!e.text || x)) {
                    if (C) return o.createElement(_, { link: C });
                    const t = B(e.href);
                    if (t) return o.createElement(L, { postId: t });
                }
                return k
                    ? o.createElement(a.ZP, { hoverLabel: z, link: e.href, onClick: w, onMouseEnter: () => c(!0), onMouseLeave: () => c(!1), style: [W.expandedLineHeight, W.promptLink, l && W.hoverStyle], withInteractiveStyling: !1 }, e.text)
                    : f
                      ? o.createElement(
                            r.Z,
                            { screenName: f },
                            o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: e.href, style: [W.link, t && W.hoveredLink], withInteractiveStyling: !1 }, e.text)),
                        )
                      : o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: e.href, ref: F, style: [W.link, t && W.hoveredLink], withInteractiveStyling: !1 }, e.text));
            }
            const W = s.default.create((e) => {
                const t = "light" === s.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: f.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 }, link: { color: e.colors.brandColor, textDecorationLine: "underline", textDecorationColor: e.colors.gray600, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both" }, hoveredLink: { textDecorationColor: e.colors.brandColor } };
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
                m = r.default.create((e) => ({ text: { lineHeight: s.Y }, animation: { animationDuration: "0.3s", transitionTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-63cb1cc4.f1d52fda.js.map

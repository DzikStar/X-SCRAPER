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
                ({ analysisEntityId: d, returnCitations: m, returnSearchResults: u = !0, trendPromptIdStr: p, features: g = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: h, toolOverrides: f, personalityId: y }) =>
                (p, k, { api: b, featureSwitches: C }) => {
                    const v = !o.ZP.isTwitterApp() && C.isTrue("responsive_web_grok_api_enable_grok_host"),
                        x = (0, a.bD)(t),
                        E = x.selectConversationId(k());
                    return new Promise((t) => {
                        E || (0, r.Uk)(e, "regenerate function failed to find a conversationId"), t(E);
                    }).then(async (o) => {
                        if ("string" == typeof o) {
                            const E = x.selectMode(k()),
                                w = x.selectConversationWithLocalMessages(k()),
                                Z = (0, a.F9)(k()),
                                S = w.findLastIndex((e) => e.sender === s.CI.ASSISTANT && e.userChatItemId === n);
                            if (-1 === S) return void (0, r.Uk)(e, "regenerate function couldn't find an actionable response");
                            const _ = w[S],
                                I = _.promptMetadata ? { ..._.promptMetadata, action: "REGENERATE" } : void 0,
                                T = w.slice(0, S).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let R;
                            const L = C.isTrue("responsive_web_grok_location_enabled");
                            if (L) {
                                const e = (0, i.fw)(k())?.position;
                                e && (R = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const M = (0, a.en)(k()),
                                P = { ...f };
                            if (M && M.toolOverrides) {
                                const e = M.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    P[t] = e[t];
                                });
                            }
                            const $ = _.isDeepsearch,
                                B = _.isReasoning,
                                H = { responses: T, systemPromptName: E, conversationId: o, grokModelOptionId: Z, returnSearchResults: u, returnCitations: m, requestFeatures: g, resampleResponseId: n, imageGenerationCount: h, ...(d && 1 === T.length ? { analysisEntityId: d } : void 0), promptMetadata: I, toolOverrides: P, geoLocation: R, enableSideBySide: !1, isDeepsearch: $, isReasoning: B, personalityId: y, deepsearchArgs: $ ? M?.deepsearchArgs : void 0 };
                            null != x.selectCurrentResponseMessage(k()) && (await p((0, l.I)({ analytics: e, conversationKey: t }))), p(x.regenerateResponse(_));
                            const { mediaIds: z, mediaUrls: D } = (0, s.VU)(_);
                            (0, r.c3)(e, { conversationLength: T.length + 1, isDeepsearch: $ || void 0, isReasoning: B || void 0, allMediaIds: z.length > 0 ? z : void 0, allMediaUrls: D.length > 0 ? D : void 0 });
                            const A = C.isTrue("responsive_web_grok_enable_add_response_keepalive") && ($ || B),
                                O = C.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, c.D)({ grokModule: x, requestBody: H, analytics: e, dispatch: p, api: b, eventTag: "regenerate", flags: { enableLocation: L, enableGrokApiHost: v, numRetries: O, enableKeepalive: A } });
                        }
                    });
                };
        },
        207683: (e, t, n) => {
            n.r(t), n.d(t, { GrokMarkdown: () => Ae, default: () => Oe });
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
                p = /^<images_search_card\s+id="([^"]+)"\s+query="([^"]+)"\s+size="([^"]+)"\s+position="([^"]+)"\s*>([\s\S]*?)<\/images_search_card>/,
                g = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<images_search_card"),
                    tokenizer(e) {
                        const t = p.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], size: t[3], position: t[4], text: "", contentType: "images_search_card" };
                    },
                },
                h = /^<image_generation_card\s+id="([^"]+)"(?:\s+query="([^"]+)")?(?:\s+size="([^"]+)")?(?:\s+position="([^"]+)")?\s*><\/image_generation_card>/,
                f = {
                    name: "grokRichContent",
                    level: "block",
                    start: (e) => e.indexOf("<image_generation_card"),
                    tokenizer(e) {
                        const t = h.exec(e);
                        if (t) return { type: "grokRichContent", raw: t[0], id: t[1], query: t[2] || void 0, size: t[3] || void 0, position: t[4] || void 0, text: "", contentType: "image_generation_card" };
                    },
                };
            var y = n(978921),
                k = n(187268);
            const b = /^<tool_usage_card>\s*<tool_name>([^<]+)<\/tool_name>\s*<tool_args>(.*?)<\/tool_args>\s*<\/tool_usage_card>/ms,
                C = {
                    name: "toolUsageCard",
                    level: "inline",
                    start: (e) => e.indexOf("<tool_usage_card"),
                    tokenizer(e) {
                        const t = b.exec(e);
                        if (t) {
                            const e = (0, k.Jw)(t[1], t[2]);
                            return { type: "toolUsageCard", raw: t[0], toolUsage: e };
                        }
                    },
                };
            var v = n(170676),
                x = n(122670),
                E = n(595080),
                w = (n(136728), n(731708)),
                Z = n(392237),
                S = n(807896),
                _ = n(154003),
                I = n(797553),
                T = n(143670),
                R = n(111677),
                L = n.n(R),
                M = n(473026),
                P = n(689582),
                $ = n(72591);
            const B = "https://artifacts.grokusercontent.com/chartjs";
            function H({ chartJSConfig: e, iframeRef: t, messageHandlers: n }) {
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
                        i.current?.contentWindow && i.current.contentWindow.postMessage({ type: "chartjs", chartJSConfig: e, isDarkTheme: "light" === !Z.default.theme.paletteName, backgroundColor: Z.default.theme.colors.gray0 }, B);
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
                    o.createElement(r.Z, { style: z.container }, o.createElement("iframe", { ref: i, sandbox: "allow-scripts allow-same-origin", src: B, style: z.iframe, title: "chartjs" }))
                );
            }
            const z = Z.default.create((e) => ({ container: { flex: 1 }, iframe: { width: "100%", flex: 1, border: "none" } })),
                D = L().g49741e8,
                A = L().b0a889d4,
                O = L().a111fb48,
                U = L().bccc65f0;
            function W({ chartJSConfig: e }) {
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
                    f = o.useCallback(() => {
                        if (s) {
                            const e = document.createElement("a");
                            (e.href = s), (e.download = "chart.png"), e.click();
                        }
                    }, [s]),
                    y = o.useCallback(() => {
                        if (c) {
                            const e = document.createElement("a");
                            (e.href = `data:text/plain;charset=utf-8,${encodeURIComponent(c)}`), (e.download = "chart.csv"), e.click();
                        }
                    }, [c]),
                    k = o.useMemo(
                        () => [
                            { actionText: A, onClick: f, Icon: M.default },
                            { actionText: O, onClick: y, Icon: P.default },
                        ],
                        [f, y],
                    );
                return e
                    ? o.createElement(
                          r.Z,
                          { style: F.container },
                          a
                              ? o.createElement(r.Z, { style: F.failedContainer })
                              : o.createElement(
                                    r.Z,
                                    { style: [F.chartContainer, t ? void 0 : { opacity: 0 }] },
                                    o.createElement(r.Z, { style: F.chartIframe }, o.createElement(H, { chartJSConfig: e, iframeRef: m, messageHandlers: h })),
                                    o.createElement(r.Z, { style: F.divider }),
                                    o.createElement(
                                        r.Z,
                                        { style: F.menuContainer },
                                        o.createElement(w.ZP, { style: F.disclaimerText }, U),
                                        o.createElement(
                                            o.Fragment,
                                            null,
                                            o.createElement(_.ZP, { "aria-label": D, backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: D }, icon: o.createElement($.default, null), onPress: g, size: "small" }, D),
                                            u &&
                                                o.createElement(
                                                    I.default,
                                                    { isFixed: !0, onDismiss: g },
                                                    k.map((e) => o.createElement(T.Z, (0, S.Z)({}, e, { key: e.actionText }))),
                                                ),
                                        ),
                                    ),
                                ),
                      )
                    : null;
            }
            const F = Z.default.create((e) => ({ container: { flex: 1, borderRadius: e.spaces.space24, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, backgroundColor: e.colors.gray0, marginBottom: e.spaces.space16, overflow: "hidden", height: 500, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, failedContainer: {}, chartContainer: { flex: 1 }, chartIframe: { flex: 1, padding: e.spaces.space16 }, divider: { height: 1, width: "100%", backgroundColor: e.colors.gray200 }, menuContainer: { padding: e.spaces.space16, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, disclaimerText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } }));
            var K = n(67369),
                N = n(65469),
                j = n(988290);
            function J({ token: e }) {
                const t = (0, K.Zz)(),
                    { isGrokDrawer: n, isGrokShare: a } = (0, j.ZP)(),
                    { disableCodeBlockStickyHeader: i } = o.useContext(E.$);
                return "chartjs" === e.lang ? o.createElement(W, { chartJSConfig: e.text }) : o.createElement(r.Z, { style: G.codeContainer }, o.createElement(N.Z, { code: e.text, headerBarStyle: i ? void 0 : n || a || t ? G.drawerStickyContainer : G.stickyContainer, language: e.lang }));
            }
            const G = Z.default.create((e) => ({ stickyContainer: { position: "sticky", top: `calc(${e.componentDimensions.appBarHeight} - ${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, drawerStickyContainer: { position: "sticky", top: `calc(-${e.spaces.space2})`, zIndex: e.componentZIndices.appBarZIndex - 1 }, codeContainer: { maxWidth: "100%", paddingVertical: "0.2em", marginBottom: "1em" } }));
            function q({ token: e }) {
                const { isAnimated: t } = o.useContext(E.$),
                    n = o.useMemo(() => [V.codeSpan, t ? V.animation : null], [t]);
                return o.createElement(w.ZP, { style: n }, e.text);
            }
            const V = Z.default.create((e) => ({ codeSpan: { display: "inline", fontWeight: e.fontWeights.regular, fontFamily: "monospace", fontSize: "90%", color: Z.default.isDarkMode() ? "rgb(247, 170, 125)" : "rgb(158, 63, 0)", paddingTop: e.spaces.space1, paddingBottom: e.spaces.space1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4, borderRadius: e.borderRadii.small, backgroundColor: Z.default.isDarkMode() ? "rgba(219, 133, 87, 0.2)" : "rgba(206, 96, 28, 0.1)" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            var X = n(33474);
            function Y() {
                return o.createElement("hr", { style: Q.horizontalRule });
            }
            const Q = Z.default.create((e) => ({ horizontalRule: { marginTop: "3em", marginBottom: "3em", marginStart: 0, marginEnd: 0, borderColor: e.colors.gray300 } }));
            var ee = n(342430),
                te = n(910594),
                ne = n(488684);
            function oe({ token: e }) {
                const t = e.handle ? `/${e.handle}` : void 0;
                return o.createElement(ne.Z, { screenName: e.handle || "" }, o.createElement(w.ZP, { link: t }, e.text));
            }
            const ae = { level: 0 },
                re = o.createContext(ae);
            function ie({ token: e }) {
                const { level: t } = o.useContext(re),
                    n = [];
                e.items?.length &&
                    e.items.forEach((e, a) => {
                        n.push(o.createElement(re.Provider, { key: `li-${a.toString()}`, value: { level: t + 1 } }, o.createElement(se, { isFirst: 0 === a, item: e, level: t })));
                    });
                const a = o.useMemo(
                    () =>
                        [
                            { ...le.list, ...le.level1 },
                            { ...le.list, ...le.level2 },
                            { ...le.list, ...le.level3 },
                        ][t] ?? { ...le.list, ...le.level4 },
                    [t],
                );
                return e.ordered ? o.createElement(re.Provider, { value: { level: t + 1 } }, o.createElement("ol", { dir: e.direction, start: e.start, style: a }, n)) : o.createElement(re.Provider, { value: { level: t + 1 } }, o.createElement("ul", { dir: e.direction, style: a }, n));
            }
            const se = ({ isFirst: e, item: t, level: n }) => {
                    const a = [];
                    t.tokens?.length &&
                        t.tokens.forEach((e, t) => {
                            a.push(o.createElement($e, { key: `token-${t}`, token: e }));
                        });
                    const r = o.useMemo(() => ({ marginTop: "0.5em", ...(e ? { marginTop: 0 } : {}) }), [e]);
                    return o.createElement("li", { style: { ...le.listItem, ...r } }, a);
                },
                le = Z.default.create((e) => ({ list: { display: "block", paddingInlineStart: "2em", listStyleType: "disc" }, level1: { marginBlockStart: 0, marginBlockEnd: "1.25em" }, level2: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level3: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, level4: { marginBlockStart: "0.75em", marginBlockEnd: "0.75em" }, listItem: { fontFamily: e.fontFamilies.normal, marginTop: "0.5em" }, firstListItem: { marginTop: 0 } }));
            var ce = n(444342);
            function de({ children: e, isRootLevel: t, style: n, token: a }) {
                return o.createElement(l.P, { direction: a.direction }, o.createElement(w.ZP, { style: [t && me.paragraph, n] }, o.createElement(ce.Z, { token: a }, e)));
            }
            const me = Z.default.create((e) => ({ paragraph: { display: "block", marginBottom: "0.5em" } }));
            function ue({ children: e, isRootLevel: t, token: n }) {
                return o.createElement(r.Z, { style: pe.container }, o.createElement(w.ZP, { style: pe.quoteText }, e));
            }
            const pe = Z.default.create((e) => ({ container: { borderStartWidth: e.borderWidths.large, borderColor: e.colors.gray100, paddingStart: "1em", paddingVertical: e.spaces.space4, marginVertical: "0.5em" }, quoteText: { fontStyle: "italic" } }));
            var ge = n(908629),
                he = n(654917),
                fe = n(983650),
                ye = n(572929),
                ke = n(340690);
            const be = L().bd202fe6;
            function Ce({ token: e }) {
                const { cardAttachments: t, isAborted: n, isAnimated: a, isStreaming: i, messageId: s } = o.useContext(E.$),
                    l = (0, he.eX)(),
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
                return "image_generation_card" === e.contentType ? o.createElement(ke.Z, { cardAttachments: d, isAborted: n, isStreaming: i, messageId: s }) : o.createElement(r.Z, { style: [ve.container, i && ve.streamingContainer] }, o.createElement(ge.Z, { show: !!i && !c }, o.createElement(ye.Z, { isAnimated: !0, isInline: !0, style: ve.loadingCardContainer }, o.createElement(w.ZP, { style: ve.loadingText }, be))), c && o.createElement(fe.Z, { cardAttachment: c, conversationKey: l, isAnimated: a, isInline: !0 }));
            }
            const ve = Z.default.create((e) => ({ container: { position: "relative", width: "100%" }, streamingContainer: { minHeight: 50, marginBottom: e.spaces.space12 }, loadingCardContainer: { position: "absolute", top: 0, start: 0, zIndex: 10, borderWidth: 0, display: "flex", justifyContent: "center", alignItems: "center", width: "max-content", height: "100%" }, loadingText: { color: e.colors.gray500, fontSize: e.fontSizes.subtext1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 1 }, "50%": { opacity: 0.5 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both", animationIterationCount: "infinite" }, imageGenPlaceholderContainer: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12, padding: e.spaces.space16, borderRadius: e.spaces.space24 } }));
            var xe = n(5741);
            function Ee({ token: e }) {
                const t = e.header
                        ? o.createElement(
                              "tr",
                              { style: we.tableRow },
                              e.header?.map((e, t) =>
                                  o.createElement(
                                      "th",
                                      { style: we.tableHeaderCell },
                                      o.createElement(
                                          r.Z,
                                          { style: we.cellContent },
                                          e.tokens?.map((e, n) => o.createElement($e, { key: `th-${t}-${n}`, token: e })),
                                      ),
                                  ),
                              ),
                          )
                        : null,
                    n = e.rows
                        ? e.rows?.map((e, t) =>
                              o.createElement(
                                  "tr",
                                  { style: we.tableRow },
                                  e.map((e, n) =>
                                      o.createElement(
                                          "td",
                                          { style: we.tableCell },
                                          o.createElement(
                                              r.Z,
                                              { style: we.cellContent },
                                              e.tokens?.map((e, a) => o.createElement($e, { key: `td-${t}-${n}-${a}`, token: e })),
                                          ),
                                      ),
                                  ),
                              ),
                          )
                        : null;
                return o.createElement(r.Z, { style: we.tableContainer }, o.createElement("table", { style: we.table }, t, n));
            }
            const we = Z.default.create((e) => ({ tableContainer: { paddingBottom: e.spaces.space16, width: "100%", overflowX: "auto" }, table: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.medium, borderCollapse: "collapse" }, tableRow: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse" }, tableHeaderCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", fontWeight: e.fontWeights.bold, backgroundColor: e.colors.gray50 }, tableCell: { borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: e.borderWidths.small, borderCollapse: "collapse", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, cellContent: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, display: "block" } }));
            n(543673), n(240753), n(128399);
            var Ze = n(530732),
                Se = n(992942),
                _e = n(58399),
                Ie = n(916559);
            const Te = L().b001fa12,
                Re = L().db6c20cf;
            function Le({ token: e }) {
                const { isCompactLayout: t, isGrokDrawer: n } = (0, j.ZP)(),
                    [a, i] = o.useState(!1),
                    [s, l] = o.useState(!1),
                    c = n || t ? 2 : 4,
                    { citations: d } = o.useContext(E.$),
                    m = d.slice(0, c),
                    u = m.length > 0,
                    p = o.useMemo(() => (e.toolUsage ? (0, k.cU)(e.toolUsage) : k.eC), [e.toolUsage]),
                    g = o.useMemo(() => {
                        const t = { backgroundColor: Z.default.theme.colors.gray50, headerBarStyle: { backgroundColor: Z.default.theme.colors.gray100 } };
                        return e.toolUsage?.args?.code && e.toolUsage?.args?.language ? o.createElement(r.Z, { style: Me.codeBlockContainer }, o.createElement(N.Z, (0, S.Z)({}, t, { code: e.toolUsage.args.code, language: e.toolUsage.args.language }))) : o.createElement(r.Z, { style: Me.codeBlockContainer }, o.createElement(N.Z, (0, S.Z)({}, t, { code: JSON.stringify(e.toolUsage?.args || {}, null, 2), language: "json" })));
                    }, [e.toolUsage]);
                return o.createElement(
                    r.Z,
                    { style: Me.container },
                    o.createElement(Ze.Z, { onPress: () => i(!a), style: Me.headerContainer, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(o.Fragment, null, o.createElement(r.Z, { style: Me.headerIconContainer }, o.createElement(ge.Z, { show: t }, o.createElement(_e.default, { style: [Me.headerIcon, Me.chevronIcon, a && Me.openChevronIcon] })), o.createElement(ge.Z, { show: !t }, o.createElement(r.Z, { style: Me.headerIcon }, (0, k.w$)(e.toolUsage?.name || "")))), o.createElement(w.ZP, { style: [Me.toolHeader, t && Me.toolHeaderHovered], weight: "medium" }, p))),
                    u &&
                        o.createElement(
                            r.Z,
                            { style: Me.toolResultsContainer },
                            o.createElement(
                                r.Z,
                                { style: Me.citations },
                                m.map((e, t) => {
                                    const n = e.favicon_base64 || e.favicon;
                                    return o.createElement(
                                        _.ZP,
                                        {
                                            backgroundColor: "gray50",
                                            borderColor: "gray200",
                                            key: `${e.url}-${t}`,
                                            onPress: () => {
                                                window.open(e.url, "_blank");
                                            },
                                            size: "small",
                                            style: Me.citationButton,
                                        },
                                        o.createElement(r.Z, { style: Me.citationButtonContent }, n ? o.createElement(Se.Z, { source: { uri: n }, style: Me.favicon }) : null, o.createElement(r.Z, { style: Me.sourceContainer }, o.createElement(w.ZP, { numberOfLines: 1, style: Me.source, weight: "normal" }, new URL(e.url).hostname.replace("www.", "")))),
                                    );
                                }),
                                d.length > c && o.createElement(Ze.Z, { onPress: () => l(!0), style: Me.seeMoreButton, withoutInteractiveStyles: !0 }, ({ isHovered: e }) => o.createElement(w.ZP, { style: [Me.seeMoreText, e && Me.seeMoreTextHovered], weight: "normal" }, Re({ count: d.length }))),
                            ),
                        ),
                    o.createElement(r.Z, { style: [Me.collapsedContainer, a && Me.expandedContainer] }, o.createElement(r.Z, { style: Me.toolSourceQueryContainer }, u && o.createElement(w.ZP, { style: Me.toolResultsSubheader, weight: "medium" }, Te), g)),
                    s ? o.createElement(Ie.E, { onDrawerDismiss: () => l(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: d }) : null,
                );
            }
            const Me = Z.default.create((e) => ({
                    container: { width: "100%", flex: 1, flexDirection: "column", overflow: "hidden", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", paddingHorizontal: e.spaces.space8, top: -e.spacesPx.space8, marginBottom: "-0.5em" },
                    headerContainer: { flexDirection: "row", gap: e.spaces.space8 },
                    headerIconContainer: { position: "relative", width: e.spaces.space16, height: e.spaces.space16, marginTop: e.spaces.space4 },
                    headerIcon: { position: "absolute", width: "100%", height: "100%", top: 0, start: 0, display: "flex", alignItems: "center", justifyContent: "center" },
                    toolHeader: { transition: "color 0.2s ease" },
                    toolHeaderHovered: { color: e.colors.gray1000 },
                    toolName: { fontFamily: "monospace", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 },
                    chevronIcon: { width: e.spaces.space16, height: e.spaces.space16, transform: [{ rotate: "0deg" }], transition: "transform 0.2s ease", color: e.colors.gray900 },
                    openChevronIcon: { transform: [{ rotate: "90deg" }] },
                    toolResultsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, paddingHorizontal: e.spaces.space24, marginTop: e.spaces.space8 },
                    toolResultsSubheader: { color: e.colors.gray800, fontSize: e.fontSizes.subtext2, marginTop: e.spaces.space4 },
                    citations: { display: "flex", flexDirection: "row", gap: e.spaces.space8, flexWrap: "wrap", width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" },
                    citationButton: { paddingStart: e.spaces.space8, paddingEnd: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" },
                    citationButtonContent: { display: "flex", flexDirection: "row", gap: e.spaces.space8, alignItems: "center", justifyContent: "center" },
                    favicon: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.infinite },
                    sourceContainer: {},
                    source: { fontSize: e.fontSizes.subtext2, color: e.colors.gray800 },
                    toolSourceQueryContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%", flex: 1, paddingHorizontal: e.spaces.space24, marginTop: e.spaces.space4 },
                    collapsedContainer: { width: "100%", flex: 1, display: "grid", gridTemplateRows: "0fr", transition: "200ms grid-template-rows ease" },
                    expandedContainer: { gridTemplateRows: "1fr" },
                    seeMoreButton: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", height: e.spaces.space32 },
                    seeMoreText: { color: e.colors.gray700, transition: "color 0.2s ease", fontSize: e.fontSizes.subtext2 },
                    seeMoreTextHovered: { color: e.colors.gray1000 },
                    codeBlockContainer: { maxWidth: "100%" },
                })),
                Pe = o.memo(
                    ({ isLast: e, isRootLevel: t, token: n }) => {
                        const { allowedTokenTypes: a } = o.useContext(E.$),
                            r = o.useMemo(() => {
                                const e = [];
                                return (
                                    n.tokens?.length &&
                                        n.tokens.forEach((t, n) => {
                                            const a = `${n}`;
                                            e.push(o.createElement(Pe, { key: a, token: t }));
                                        }),
                                    e
                                );
                            }, [n.tokens]),
                            i = o.createElement(de, { isRootLevel: t, style: [Be.expandedLineHeight, e ? Be.noMarginBottom : void 0], token: n }, r);
                        if (a && !a.includes(n.type)) return o.createElement(w.ZP, { style: Be.expandedLineHeight }, n.raw);
                        switch (n.type) {
                            case "x-handle":
                                return o.createElement(oe, { token: n });
                            case "code":
                                return "indented" === n.codeBlockStyle ? i : o.createElement(J, { token: n });
                            case "codespan":
                                return o.createElement(q, { token: n });
                            case "list":
                                return o.createElement(ie, { token: n });
                            case "blockquote":
                                return o.createElement(ue, { token: n }, r);
                            case "table":
                                return o.createElement(Ee, { token: n });
                            case "space":
                                return null;
                            case "br":
                                return o.createElement("br", null);
                            case "hr":
                                return o.createElement(Y, null);
                            case "text":
                                return o.createElement(ce.Z, { token: n }, r);
                            case "link":
                                return o.createElement(te.Z, { token: n });
                            case "heading":
                                return o.createElement(X.X, { token: n }, r);
                            case "strong":
                                return o.createElement(w.ZP, { style: Be.expandedLineHeight, weight: "bold" }, o.createElement(ce.Z, { token: n }, r));
                            case "em":
                                return o.createElement(w.ZP, { style: [Be.expandedLineHeight, Be.italic] }, o.createElement(ce.Z, { token: n }, r));
                            case "emStrong":
                                return o.createElement(w.ZP, { style: [Be.expandedLineHeight, Be.italic], weight: "bold" }, o.createElement(ce.Z, { token: n }, r));
                            case "blockLatex":
                                return o.createElement(ee.Z, { content: n.text, isBlock: !0 });
                            case "inlineLatex":
                                return o.createElement(ee.Z, { content: n.text });
                            case "grokRichContent":
                                return o.createElement(Ce, { token: n });
                            case "renderChart":
                                return o.createElement(W, { chartJSConfig: n.chartJSConfig || "" });
                            case "toolUsageCard":
                                return o.createElement(Le, { token: n });
                            default:
                                return i;
                        }
                    },
                    (e, t) => e.token.raw === t.token.raw,
                ),
                $e = Pe,
                Be = Z.default.create((e) => ({ italic: { fontStyle: "italic" }, expandedLineHeight: { lineHeight: xe.Y }, noMarginBottom: { marginBottom: 0 } }));
            function He(e) {
                return e.items && e.items.length ? He(e.items[0]) : e.tokens && e.tokens.length ? He(e.tokens[0]) : e.text || "";
            }
            function ze(e) {
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "list":
                            case "paragraph":
                            case "heading":
                                e.direction = i.Z.getTextDirection(He(e));
                        }
                    }),
                    e
                );
            }
            a.TU.use({ extensions: [x._, v.Im, ...y.Z, u, f, g, d, C] });
            const De = [],
                Ae = o.memo(({ allowedTokenTypes: e, cardAttachments: t, chatResponseAnnotations: n, citations: c, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: p, isStreaming: g, markdownText: h, messageId: f, style: y }) => {
                    const k = (0, s.hC)("responsive_web_grok_links") && !p,
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
                            })(h, k ? n : void 0);
                            return ze(a.TU.lexer(e ?? ""));
                        }, [h, n, k]),
                        C = o.useMemo(() => b.map((e, t) => o.createElement($e, { isLast: t === b.length - 1, isRootLevel: !0, key: `parsedToken-${t}`, token: e })), [b]);
                    return o.createElement(E.Z, { allowedTokenTypes: e, cardAttachments: t, citations: c ?? De, disableCodeBlockStickyHeader: d, disableLinks: m, isAborted: u, isAnimated: p, isStreaming: g, messageId: f }, o.createElement(l.P, { direction: i.Z.getTextDirection(h ?? "") }, o.createElement(r.Z, { style: [{ display: "block" }, y] }, C)));
                }),
                Oe = Ae;
        },
        595080: (e, t, n) => {
            n.d(t, { $: () => s, Z: () => l });
            var o = n(202784);
            const a = [],
                r = [],
                i = { isAnimated: !1, citations: a, disableCodeBlockStickyHeader: !1, allowedTokenTypes: void 0, cardAttachments: r, isStreaming: !1, messageId: void 0, isAborted: !1 },
                s = o.createContext(i);
            function l({ children: e, disableLinks: t, isAnimated: n, citations: i = a, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d = r, isStreaming: m, messageId: u, isAborted: p }) {
                const g = i.length ? i : a,
                    h = o.useMemo(() => ({ isAnimated: n, disableLinks: t, citations: g, disableCodeBlockStickyHeader: l, allowedTokenTypes: c, cardAttachments: d, isStreaming: m, messageId: u, isAborted: p }), [n, t, g, l, c, d, m, u, p]);
                return o.createElement(s.Provider, { value: h }, e);
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
                                return (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "title4", style: e };
                            case 3:
                                return (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", size: "headline1", style: e };
                            default:
                                return (e.marginTop = "1.5em"), (e.marginBottom = "0.5em"), { weight: "bold", style: e };
                        }
                    }, [t.depth, n]);
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
            n.d(t, { Z: () => W });
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
                g = n(654917),
                h = n(170676),
                f = n(595080),
                y = n(5741),
                k = n(45843),
                b = n(325686),
                C = n(818199),
                v = n(530732),
                x = n(630715),
                E = n(725405),
                w = n(809311);
            const Z = "grok_citation_web_result",
                S = ({ link: e }) => {
                    const { isAnimated: t } = o.useContext(f.$),
                        [n, a] = o.useState(!1),
                        r = (0, E.Z)(),
                        i = o.useCallback(() => {
                            a(!0), r.scribe({ action: "hover", component: Z, data: { url: e.url } });
                        }, [a, r, e.url]),
                        s = o.useCallback(() => a(!1), [a]),
                        l = o.useCallback(() => {
                            r.scribe({ action: "click", component: Z, data: { url: e.url } });
                        }, [r, e.url]);
                    let c = new URL(e.url).hostname;
                    c.startsWith("www.") && (c = c.slice(4));
                    const d = o.useCallback(() => o.createElement(_, { webResult: e }), [e]);
                    return o.createElement("div", { className: "omit-from-copy", style: I.inlineContainer }, o.createElement(b.Z, { style: [I.inlineContainer, t ? I.animation : null] }, o.createElement(C.Z, { renderContent: d }, o.createElement(v.Z, { link: e.url, onMouseEnter: i, onMouseLeave: s, onPress: l, style: [I.content, e.favicon_base64 ? I.faviconContainer : I.iconContainer, n ? I.containerHovered : void 0], withoutInteractiveStyles: !0 }, e.favicon_base64 ? o.createElement(k.Z, { source: e.favicon_base64, style: I.favicon }) : o.createElement(x.default, { style: I.linkIcon })))));
                },
                _ = ({ webResult: e }) => o.createElement(b.Z, { style: I.hoverCardContainer }, o.createElement(w.p, { item: e })),
                I = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, faviconContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.small, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, favicon: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } }));
            var T = n(323265),
                R = n(301758),
                L = n(836255);
            const M = "grok_citation_post",
                P = ({ postId: e }) => {
                    const t = (0, u.oR)(),
                        n = (0, u.I0)(),
                        { isAnimated: a } = o.useContext(f.$),
                        [r, i] = o.useState(!1),
                        s = (0, E.Z)(),
                        l = o.useCallback(() => {
                            i(!0), s.scribe({ action: "hover", component: M, data: { tweet_id: e } });
                        }, [i, s, e]),
                        c = o.useCallback(() => i(!1), [i]),
                        d = o.useCallback(() => {
                            i(!0), s.scribe({ action: "click", component: M, data: { tweet_id: e } });
                        }, [i, s, e]);
                    o.useEffect(() => {
                        e && n(L.Z.fetchOneIfNeeded(e));
                    }, [n, e]);
                    const m = L.Z.selectHydrated(t.getState(), e),
                        p = o.useCallback(() => o.createElement($, { postId: e }), [e]);
                    if (!m) return null;
                    const g = m?.user?.profile_image_url_https;
                    return o.createElement("div", { className: "omit-from-copy", style: B.inlineContainer }, o.createElement(b.Z, { style: [B.inlineContainer, a ? B.animation : null] }, o.createElement(C.Z, { renderContent: p }, o.createElement(v.Z, { link: m.permalink, onMouseEnter: l, onMouseLeave: c, onPress: d, style: [B.content, g ? B.avatarContainer : B.iconContainer, r ? B.containerHovered : void 0], withoutInteractiveStyles: !0 }, g ? o.createElement(k.Z, { source: g, style: B.avatar }) : o.createElement(x.default, { style: B.linkIcon })))));
                },
                $ = ({ postId: e }) =>
                    o.createElement(
                        b.Z,
                        { style: B.hoverCardContainer },
                        o.createElement(R.Z, {
                            isCondensed: !0,
                            onPress: (e) => {
                                T.ZP.isTwitterApp();
                            },
                            tweetId: e,
                            withBirdwatchPivot: !1,
                            withLink: !0,
                            withUserHoverCard: !1,
                        }),
                    ),
                B = s.default.create((e) => ({ inlineContainer: { alignItems: "center", justifyContent: "center", display: "inline-flex", marginStart: e.spaces.space2, verticalAlign: "middle" }, animation: { opacity: 1, animationDuration: "1s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, content: { transition: "filter 0.3s, transform 0.3s", filter: "grayscale(100%) opacity(0.7)", position: "relative", bottom: "0.1em" }, hoverCardContainer: { width: 350, maxWidth: "100%", pointerEvents: "none" }, avatarContainer: { backgroundColor: e.colors.whiteOnColor, borderRadius: e.borderRadii.infinite, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, overflow: "hidden" }, iconContainer: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.small, padding: e.spaces.space1 }, containerHovered: { filter: "none", transform: "scale(1.2)" }, avatar: { width: 15, height: 15 }, linkIcon: { color: e.colors.gray800, width: 15, height: 15 } })),
                H = (e) => {
                    const t = e.match(/https:\/\/x\.com(?:\/[^\/]+)*\/status\/(\d+)/);
                    return t ? t[1] : void 0;
                },
                z = { label: c().dc0c8266 },
                D = /^https?:\/\/x\.com\/(?!home|explore|notifications|messages|bookmarks|lists|more)(\w+[-\w]*)?\/?$/,
                A = /https:\/\/x\.com\/.*\?text=([^&]*)/;
            const O = ["http:", "https:"],
                U = (e) => {
                    e && e._textRef && e._textRef && (e._textRef.dataset.copyPreserve = "1");
                };
            function W({ token: e }) {
                const { citations: t } = o.useContext(f.$),
                    n = (0, m.z)(),
                    s = (0, u.I0)(),
                    [l, c] = o.useState(!1),
                    y = o.useMemo(
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
                    b = t.find((t) => t.url === e.href),
                    C = (0, d.hC)("responsive_web_grok_show_citations"),
                    v = (0, g.eX)(),
                    x = o.useCallback(
                        (e) => {
                            e.preventDefault(), k && (n.scribe({ element: "annotation_text_link", action: "click" }), s((0, p.u)({ analytics: n, conversationKey: v })({ text: decodeURIComponent(k), returnCitations: C })));
                        },
                        [k, v, n, s, C],
                    );
                let E;
                try {
                    e.href && (E = new URL(e.href));
                } catch (e) {}
                if (!E || !O.includes(E.protocol)) {
                    let t;
                    return (t = e.text === e.href ? e.text : !e.text && e.href && b ? `(${e.href})` : `${e.text} ${e.href ? `(${e.href})` : ""}`), o.createElement(a.ZP, null, t);
                }
                const w = (0, h.TP)(e.raw) || (0, h.sN)(e.raw);
                if (e.href && (!e.text || w)) {
                    if (b) return o.createElement(S, { link: b });
                    const t = H(e.href);
                    if (t) return o.createElement(P, { postId: t });
                }
                return k
                    ? o.createElement(a.ZP, { hoverLabel: z, link: e.href, onClick: x, onMouseEnter: () => c(!0), onMouseLeave: () => c(!1), style: [F.expandedLineHeight, F.promptLink, l && F.hoverStyle], withInteractiveStyling: !1 }, e.text)
                    : y
                      ? o.createElement(
                            r.Z,
                            { screenName: y },
                            o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: e.href, style: [F.link, t && F.hoveredLink], withInteractiveStyling: !1 }, e.text)),
                        )
                      : o.createElement(i.Z, null, ({ isHovered: t }) => o.createElement(a.ZP, { link: e.href, ref: U, style: [F.link, t && F.hoveredLink], withInteractiveStyling: !1 }, e.text));
            }
            const F = s.default.create((e) => {
                const t = "light" === s.default.theme.paletteName ? 0.2 : 0.33;
                return { expandedLineHeight: { lineHeight: y.Y }, hoverStyle: { color: e.colors.blue600, shadowColor: e.colors.blue600, animationKeyframes: [{ "0%": { shadowOpacity: t, color: e.colors.gray900, shadowColor: e.colors.gray900 }, "100%": { color: e.colors.blue600, shadowColor: e.colors.blue600, shadowOpacity: 1 } }], textDecorationLine: "none", shadowOffset: { width: 0, height: 1 }, animationDuration: "0.25s", shadowOpacity: 1, shadowRadius: 0 }, promptLink: { animationKeyframes: [{ "0%": { color: e.colors.text, shadowColor: "transparent" }, "100%": { color: e.colors.gray900, shadowColor: e.colors.gray900, shadowOpacity: t } }], animationDuration: "2s", color: e.colors.gray900, cursor: "pointer", textDecorationLine: "none", shadowColor: e.colors.gray900, shadowOffset: { width: 0, height: 1 }, shadowOpacity: t, shadowRadius: 0 }, link: { color: e.colors.brandColor, textDecorationLine: "underline", textDecorationColor: e.colors.gray600, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both" }, hoveredLink: { textDecorationColor: e.colors.brandColor } };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-63cb1cc4.d00f0ada.js.map

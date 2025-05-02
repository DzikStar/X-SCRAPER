"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TrendHandler"],
    {
        927389: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(247056),
                i = a(392237);
            const o = (0, a(523561).Z)({ loader: () => a.e("loader.FeedbackSheet").then(a.bind(a, 774426)) });
            var l = a(725516),
                c = a(851623);
            const s = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: i } = e,
                        l = n.useCallback((e) => (a ? n.createElement(o, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: l, style: s.curationControl, testID: c.Z.caret, withDarkBackground: i }) : null;
                });
        },
        691067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => te });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                l = a(202784),
                c = a(325686),
                s = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                h = a(638009),
                u = a(952428),
                g = a(352924),
                v = a(392237);
            function b({ description: e, images: t, link: a, metaDescription: n, name: r, onClick: i, testID: o, thumbnailImage: b, withDarkerInteractiveBackground: C }) {
                const w = l.useContext(h.ZP),
                    y = (0, g.b)(),
                    f = l.createElement(c.Z, { style: E.content }, l.createElement(c.Z, { style: E.horizontalContainer }, b ? l.createElement(c.Z, { style: E.imageContainer }, l.createElement(p.Z, { ratio: v.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-news-image", aspectMode: m.Z.SQUARE, image: { url: b.original_img_url, height: 120, width: 120 } }))) : null, l.createElement(c.Z, { style: E.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "headline2", style: E.text, weight: "bold", withInteractiveStyling: !1 }, r), n ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: E.descriptionText }, n) : null)));
                return l.createElement(u.Z, { "aria-labelledby": y, link: a ? w.withAnchorless(a) : void 0, onPress: i, role: a ? void 0 : "article", style: E.root, testID: o, withDarkerInteractiveBackground: C }, f);
            }
            const E = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${v.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginEnd: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.medium, maxHeight: `calc(${v.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${v.default.theme.spaces.space40} * 2)`, minHeight: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, minWidth: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, height: "40%", width: "40%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 } }));
            var C = a(470397),
                w = a(126962);
            function y({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: b, name: E, onClick: y, renderQuoteTweet: Z, socialContext: x, testID: k, thumbnailImage: T, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: M }) {
                const z = l.useContext(h.ZP),
                    _ = (0, g.b)(),
                    S = l.createElement(c.Z, { style: "full" === a ? f.content : f.contentHalf }, l.createElement(c.Z, { style: f.horizontalContainer }, l.createElement(c.Z, { style: f.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: f.text, weight: "bold", withInteractiveStyling: !1 }, E), b ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: f.descriptionText }, b) : null, l.createElement(C.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), x ? l.createElement(w.Z, (0, o.Z)({ style: f.socialContext }, x)) : null), T ? l.createElement(c.Z, { style: f.imageContainer }, l.createElement(p.Z, { ratio: v.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: T.original_img_url, height: T.original_img_height, width: T.original_img_width } }))) : null, D ? l.createElement(c.Z, { style: f.caret }, D) : null), Z ? l.createElement(c.Z, { style: f.quoteTweet }, Z({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: f.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: i ? z.withAnchorless(i) : void 0, onPress: y, role: i ? void 0 : "article", style: f.root, testID: k, withDarkerInteractiveBackground: I }, S);
            }
            const f = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${v.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${v.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${v.default.theme.spaces.space40} * 2)`, minHeight: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, minWidth: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var Z = a(676145),
                x = a(378729),
                k = a(628526),
                T = a(442730);
            function D({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: s, promotedContent: m, promotedLabel: p, rank: v, renderQuoteTweet: b, testID: E, trendFeedbackMenu: w, withDarkerInteractiveBackground: y }) {
                const f = l.useContext(h.ZP),
                    D = (0, g.b)(),
                    M = i ? l.createElement(d.ZP, { color: "gray700", dir: ((z = i), (0, Z.Z)(z) && z.length ? T.Z.getTextDirection(z, { fromEnd: !0 }) : void 0), size: "subtext2", style: I.metaDescription }, i) : null;
                var z;
                const _ = l.createElement(C.Z, null, v ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, v) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    S = l.createElement(d.ZP, { dir: T.Z.getTextDirection(o), style: I.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": D, link: r ? f.withAnchorless(r) : void 0, onPress: s, role: r ? void 0 : "article", style: I.root, testID: E, withDarkerInteractiveBackground: y }, l.createElement(c.Z, { id: D, style: I.content }, _, S, t ? l.createElement(d.ZP, { color: "gray700", style: I.description }, t) : null, b ? l.createElement(c.Z, { style: I.quoteTweet }, b({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: I.attachmentWrapper }, e) : null, n.length ? l.createElement(k.Z, { groupedTrends: n }) : null, M, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: I.promotedIndicatorWrapper }, l.createElement(x.Z, { label: p, promotedContent: m })) : null, w ? l.createElement(c.Z, { style: I.trendFeedbackMenuWrapper }, w) : null));
            }
            const I = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var M = a(771099),
                z = a(946409),
                _ = a(663550),
                S = a(725516),
                A = a(443781),
                B = a(301758),
                H = a(927389),
                P = a(276563),
                L = a(370751),
                R = a(260137);
            const { CardNames: W } = P.default,
                $ = Object.freeze({ [W.LIVE_EVENT]: !0, [W.MOMENT]: !0, [W.SUMMARY]: !0, [W.SUMMARY_LARGE_IMAGE]: !0, [W.AUDIOSPACE]: !0 }),
                U = (0, L.Z)([W.LIVE_EVENT, W.AUDIOSPACE]);
            const F = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                N = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === W.SUMMARY_LARGE_IMAGE ? W.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!$[e.name] || (!U.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(R.default, { card: a, cardContext: F, cardState: "secondary" })
                        : null;
                },
                V = l.memo(N);
            var O = a(71620),
                G = a(668214),
                q = a(276001),
                Q = a(694180);
            const Y = [],
                j = q.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || Y),
                J = (0, G.Z)()
                    .propsFromState(() => ({ cards: j }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, O.zr)(e), logTrend: Q.dS })),
                K = "trend",
                X = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: i }) => {
                    const c = (0, S.z)(),
                        s = M.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, name: v, promotedMetadata: E, rank: C, socialContext: w, thumbnailImage: f, url: Z } = a,
                        { domainContext: x, metaDescription: k } = a.trendMetadata,
                        { featureSwitches: T } = l.useContext(A.rC),
                        I = T.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = T.isTrue("responsive_web_grok_trend_news_cell_enabled") && g,
                        L = w && w.generalContext ? { contextType: w.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: w.generalContext.text, link: w.generalContext.landingUrl ? { pathname: w.generalContext.landingUrl.url } : void 0, userAvatarUrls: w.generalContext.contextImageUrls } : void 0,
                        R = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && r({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, r, E],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), R(_.AJ.TREND_VIEW);
                    }, [c, R]);
                    const W = l.useCallback(() => {
                            c.scribeAction("search"), R(_.AJ.TREND_CLICK);
                        }, [c, R]),
                        $ = l.useCallback(() => {
                            c.scribeAction("click"), R(_.AJ.TREND_CLICK);
                        }, [c, R]),
                        U = l.useMemo(() => (e?.length ? l.createElement(V, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        F = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, z.s9)(e.url) })) : []), [h]),
                        N = l.useMemo(() => (Z ? (0, z.s9)(Z) : void 0), [Z]),
                        O = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        G = l.useMemo(() => (m?.length ? (e) => l.createElement(B.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        q = l.useMemo(() => (n?.length ? l.createElement(H.Z, { feedbackItems: n }) : void 0), [n]);
                    return P ? l.createElement(b, { description: p, images: u, link: N, metaDescription: O ? void 0 : k, name: v, onClick: $, testID: K, thumbnailImage: f, withDarkerInteractiveBackground: s }) : I ? l.createElement(y, { attachment: U, description: p, displayMode: d, domainContext: x, images: u, link: N, metaDescription: O ? void 0 : k, name: v, onClick: $, renderQuoteTweet: G, socialContext: L, testID: K, thumbnailImage: f, trendFeedbackMenu: q, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(D, { attachment: U, description: p, domainContext: x, groupedTrends: F, link: N, metaDescription: O ? void 0 : k, name: v, onClick: W, promotedContent: O, promotedLabel: O ? k : void 0, rank: C, renderQuoteTweet: G, testID: K, trendFeedbackMenu: q, withDarkerInteractiveBackground: s });
                },
                ee = J(l.memo(X)),
                te = (e) =>
                    i
                        .iH({
                            isFocusable: (0, n.Z)(!0),
                            component: ee,
                            getScribeDataItem: (e) => {
                                const { name: t, promotedMetadata: a } = e.content,
                                    { clientEventInfo: n } = e.itemMetadata;
                                return r.Z.getTrendItem(t, a, n);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        628526: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                r = a(674132),
                i = a.n(r),
                o = a(731708),
                l = a(392237);
            const c = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? s(e[0], t) : null),
                s = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(o.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                h = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = c(e, t);
                    return r ? n.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        262754: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        818088: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        971657: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        69893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        47286: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        730895: (e, t, a) => {
            var n = a(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.4f33386a.js.map

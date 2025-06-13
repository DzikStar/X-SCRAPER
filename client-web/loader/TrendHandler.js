"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TrendHandler"],
    {
        927389: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(247056),
                o = a(392237);
            const i = (0, a(523561).Z)({ loader: () => a.e("loader.FeedbackSheet").then(a.bind(a, 774426)) });
            var s = a(725516),
                l = a(851623);
            const c = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: o } = e,
                        s = n.useCallback((e) => (a ? n.createElement(i, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: s, style: c.curationControl, testID: l.Z.caret, withDarkBackground: o }) : null;
                });
        },
        691067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ie });
            var n = a(459643),
                r = a(942893),
                o = a(351322),
                i = a(807896),
                s = a(202784),
                l = a(325686),
                c = a(731708),
                d = a(757483),
                m = a(992942),
                p = a(530732),
                u = a(952428),
                g = a(352924),
                h = a(392237),
                f = a(823161);
            function b({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: o, name: i, onClick: d, testID: b, thumbnailImage: x, totalTrendPostsText: E, userAvatarUrls: C, withDarkerInteractiveBackground: v }) {
                const T = (0, g.b)(),
                    w = (C || []).slice(0, 3),
                    Z = s.createElement(
                        p.Z,
                        { link: r, style: y.content, withoutInteractiveStyles: !0 },
                        s.createElement(
                            l.Z,
                            { style: y.horizontalContainer },
                            x ? s.createElement(l.Z, { style: y.imageContainer }, s.createElement(m.Z, { resizeMode: "cover", source: x.original_img_url, style: y.image })) : null,
                            s.createElement(
                                l.Z,
                                { style: y.textContainer },
                                s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "headline2", weight: "bold", withInteractiveStyling: !1 }, i),
                                o ? s.createElement(c.ZP, { color: "gray900", numberOfLines: 2, size: "body" }, o) : null,
                                E
                                    ? s.createElement(
                                          l.Z,
                                          { style: y.infoContainer },
                                          w.length > 0
                                              ? s.createElement(
                                                    l.Z,
                                                    { style: y.userAvatars },
                                                    w.map((e, t) => s.createElement(f.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [y.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * h.default.theme.spacesPx.space12 } : {}], uri: e })),
                                                )
                                              : null,
                                          s.createElement(c.ZP, { color: "gray900", style: y.totalTrendPostsText }, E),
                                          s.createElement(l.Z, { style: y.dot }),
                                          n ? s.createElement(l.Z, { style: y.lastUpdatedAtContainer }, a ? s.createElement(l.Z, { style: y.liveContainer }, s.createElement(c.ZP, { style: y.liveText }, "LIVE")) : s.createElement(c.ZP, { style: y.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return s.createElement(u.Z, { "aria-labelledby": T, style: y.root, testID: b, withDarkerInteractiveBackground: v }, Z);
            }
            const y = h.default.create((e) => ({
                root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal },
                metaDescription: { marginTop: e.spaces.space4 },
                content: { flexGrow: 1, position: "relative", paddingVertical: e.spaces.space16 },
                horizontalContainer: { flex: 1, flexDirection: "row", gap: e.componentDimensions.gutterHorizontal },
                imageContainer: { borderRadius: e.borderRadii.medium, height: "100%", flex: 1, alignSelf: "stretch", aspectRatio: 1, overflow: "hidden" },
                image: { height: "100%", width: "100%", aspectRatio: 1 },
                textContainer: { flex: 4, gap: e.spaces.space4 },
                infoContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, width: "max-content", backgroundColor: "transparent" },
                dot: { width: e.spaces.space2, height: e.spaces.space2, backgroundColor: e.colors.gray700, borderRadius: e.spaces.space2 },
                totalTrendPostsText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 },
                lastUpdatedAtContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray700 },
                lastUpdatedAtText: { color: "inherit", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 },
                icon: { color: "inherit", width: e.spaces.space12, height: e.spaces.space12 },
                liveContainer: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: d.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small },
                liveText: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" },
                userAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spaces.space4 },
                userAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" },
            }));
            var x = a(530525),
                E = a(439592),
                C = a(682474),
                v = a(638009),
                T = a(470397),
                w = a(126962);
            function Z({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: o, metaDescription: d, name: m, onClick: p, renderQuoteTweet: f, socialContext: b, testID: y, thumbnailImage: Z, trendFeedbackMenu: I, withDarkerInteractiveBackground: D, withTrendingLabel: M }) {
                const _ = s.useContext(v.ZP),
                    z = (0, g.b)(),
                    A = s.createElement(l.Z, { style: "full" === a ? k.content : k.contentHalf }, s.createElement(l.Z, { style: k.horizontalContainer }, s.createElement(l.Z, { style: k.textContainer }, s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: k.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? s.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: k.descriptionText }, d) : null, s.createElement(T.Z, null, n ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), b ? s.createElement(w.Z, (0, i.Z)({ style: k.socialContext }, b)) : null), Z ? s.createElement(l.Z, { style: k.imageContainer }, s.createElement(C.Z, { ratio: h.default.theme.aspectRatios.square }, s.createElement(x.Z, { "aria-label": "trend-image", aspectMode: E.Z.SQUARE, image: { url: Z.original_img_url, height: Z.original_img_height, width: Z.original_img_width } }))) : null, I ? s.createElement(l.Z, { style: k.caret }, I) : null), f ? s.createElement(l.Z, { style: k.quoteTweet }, f({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: k.attachmentWrapper }, e) : null);
                return s.createElement(u.Z, { "aria-labelledby": z, link: o ? _.withAnchorless(o) : void 0, onPress: p, role: o ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: D }, A);
            }
            const k = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${h.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${h.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${h.default.theme.spaces.space40} * 2)`, minHeight: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, minWidth: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var I = a(676145),
                D = a(378729),
                M = a(628526),
                _ = a(442730);
            function z({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: o, name: i, onClick: d, promotedContent: m, promotedLabel: p, rank: h, renderQuoteTweet: f, testID: b, trendFeedbackMenu: y, withDarkerInteractiveBackground: x }) {
                const E = s.useContext(v.ZP),
                    C = (0, g.b)(),
                    w = o ? s.createElement(c.ZP, { color: "gray700", dir: ((Z = o), (0, I.Z)(Z) && Z.length ? _.Z.getTextDirection(Z, { fromEnd: !0 }) : void 0), size: "subtext2", style: A.metaDescription }, o) : null;
                var Z;
                const k = s.createElement(T.Z, null, h ? s.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, h) : null, a ? s.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    z = s.createElement(c.ZP, { dir: _.Z.getTextDirection(i), style: A.name, weight: "bold", withHashflags: !0 }, i);
                return s.createElement(u.Z, { "aria-labelledby": C, link: r ? E.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: A.root, testID: b, withDarkerInteractiveBackground: x }, s.createElement(l.Z, { id: C, style: A.content }, k, z, t ? s.createElement(c.ZP, { color: "gray700", style: A.description }, t) : null, f ? s.createElement(l.Z, { style: A.quoteTweet }, f({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: A.attachmentWrapper }, e) : null, n.length ? s.createElement(M.Z, { groupedTrends: n }) : null, w, m ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", style: A.promotedIndicatorWrapper }, s.createElement(D.Z, { label: p, promotedContent: m })) : null, y ? s.createElement(l.Z, { style: A.trendFeedbackMenuWrapper }, y) : null));
            }
            const A = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var S = a(771099),
                P = a(946409),
                H = a(663550),
                $ = a(725516),
                R = a(448301),
                U = a(443781),
                L = a(301758),
                B = a(927389),
                F = a(276563),
                W = a(370751),
                N = a(260137);
            const { CardNames: V } = F.default,
                O = Object.freeze({ [V.LIVE_EVENT]: !0, [V.MOMENT]: !0, [V.SUMMARY]: !0, [V.SUMMARY_LARGE_IMAGE]: !0, [V.AUDIOSPACE]: !0 }),
                G = (0, W.Z)([V.LIVE_EVENT, V.AUDIOSPACE]);
            const K = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                q = ({ card: e, withThirdPartyCards: t }) => {
                    const a = s.useMemo(() => ({ ...e, name: e.name === V.SUMMARY_LARGE_IMAGE ? V.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!O[e.name] || (!G.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? s.createElement(N.default, { card: a, cardContext: K, cardState: "secondary" })
                        : null;
                },
                Q = s.memo(q);
            var Y = a(71620),
                j = a(668214),
                J = a(276001),
                X = a(694180);
            const ee = [],
                te = J.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || ee),
                ae = (0, j.Z)()
                    .propsFromState(() => ({ cards: te }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, Y.zr)(e), logTrend: X.dS })),
                ne = "trend",
                re = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: o }) => {
                    const l = (0, $.z)(),
                        c = S.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, is_live: f, last_updated_at: y, name: x, promotedMetadata: E, rank: C, socialContext: v, thumbnailImage: T, total_trend_posts: w, url: k } = a,
                        { domainContext: I, metaDescription: D } = a.trendMetadata,
                        { featureSwitches: M } = s.useContext(U.rC),
                        _ = M.isTrue("responsive_web_trends_ui_top_articles") && h,
                        A = M.isTrue("responsive_web_grok_trend_news_cell_enabled") && h,
                        F = v && v.generalContext ? { contextType: v.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: v.generalContext.text, link: v.generalContext.landingUrl ? { pathname: v.generalContext.landingUrl.url } : void 0, userAvatarUrls: v.generalContext.contextImageUrls } : void 0,
                        W = s.useCallback(
                            (e) => {
                                E?.promotedTrendId && r({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, r, E],
                        );
                    s.useEffect(() => {
                        l.scribeAction("impression"), W(H.AJ.TREND_VIEW);
                    }, [l, W]);
                    const N = s.useCallback(() => {
                            l.scribeAction("search"), W(H.AJ.TREND_CLICK);
                        }, [l, W]),
                        V = s.useCallback(() => {
                            l.scribeAction("click"), W(H.AJ.TREND_CLICK);
                        }, [l, W]),
                        O = s.useMemo(() => (e?.length ? s.createElement(Q, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        G = s.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, P.s9)(e.url) })) : []), [u]),
                        K = s.useMemo(() => (k ? (0, P.s9)(k) : void 0), [k]),
                        q = s.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        Y = s.useMemo(() => (m?.length ? (e) => s.createElement(L.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = s.useMemo(() => (n?.length ? s.createElement(B.Z, { feedbackItems: n }) : void 0), [n]);
                    return A ? s.createElement(b, { description: p, images: g, isLive: f, lastUpdatedAtText: y ? (0, R.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: q ? void 0 : D, name: x, onClick: V, testID: ne, thumbnailImage: T, totalTrendPostsText: w ? `${(0, R.uf)(Number(w))} comments` : void 0, userAvatarUrls: F?.userAvatarUrls, withDarkerInteractiveBackground: c }) : _ ? s.createElement(Z, { attachment: O, description: p, displayMode: d, domainContext: I, images: g, link: K, metaDescription: q ? void 0 : D, name: x, onClick: V, renderQuoteTweet: Y, socialContext: F, testID: ne, thumbnailImage: T, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : s.createElement(z, { attachment: O, description: p, domainContext: I, groupedTrends: G, link: K, metaDescription: q ? void 0 : D, name: x, onClick: N, promotedContent: q, promotedLabel: q ? D : void 0, rank: C, renderQuoteTweet: Y, testID: ne, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
                },
                oe = ae(s.memo(re)),
                ie = (e) =>
                    o
                        .iH({
                            isFocusable: (0, n.Z)(!0),
                            component: oe,
                            getScribeDataItem: (e) => {
                                const { name: t, promotedMetadata: a } = e.content,
                                    { clientEventInfo: n } = e.itemMetadata;
                                return r.Z.getTrendItem(t, a, n);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        448301: (e, t, a) => {
            function n(e, t) {
                const a = new Date(),
                    n = Math.floor((e.getTime() - a.getTime()) / 1e3),
                    r = Math.abs(n),
                    o = 86400,
                    i = 3600,
                    s = 60;
                let l;
                if (r >= o) {
                    const e = Math.floor(r / o);
                    l = `${e} day${1 === e ? "" : "s"}`;
                } else if (r >= i) {
                    const e = Math.floor(r / i);
                    l = `${e} hour${1 === e ? "" : "s"}`;
                } else if (r >= s) {
                    const e = Math.floor(r / s);
                    l = `${e} ${t ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(r);
                    l = `${e} ${t ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return n >= 0 ? `${l} later` : `${l} ago`;
            }
            function r(e) {
                if (isNaN(e)) return "0";
                const t = Math.abs(e);
                if (t >= 1e6) {
                    const e = t / 1e6;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}M`;
                }
                if (t >= 1e3) {
                    const e = t / 1e3;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}K`;
                }
                return e.toString();
            }
            function o(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            a.d(t, { ZW: () => o, pi: () => n, uf: () => r });
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                r = a(325686),
                o = a(392237);
            function i({ spacing: e, style: t }) {
                return n.createElement(r.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        628526: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(111677),
                o = a.n(r),
                i = a(731708),
                s = a(392237);
            const l = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(i.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = s.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = l(e, t);
                    return r ? n.createElement(i.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.ca24db8a.js.map

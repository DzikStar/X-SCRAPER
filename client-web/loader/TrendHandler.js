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
            var s = a(725516),
                l = a(851623);
            const c = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: i } = e,
                        s = n.useCallback((e) => (a ? n.createElement(o, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: s, style: c.curationControl, testID: l.Z.caret, withDarkBackground: i }) : null;
                });
        },
        691067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => oe });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                s = a(202784),
                l = a(325686),
                c = a(731708),
                d = a(757483),
                m = a(992942),
                p = a(530732),
                u = a(952428),
                h = a(352924),
                g = a(392237),
                v = a(823161);
            function f({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: i, name: o, onClick: d, testID: f, thumbnailImage: b, totalTrendPostsText: x, userAvatarUrls: E, withDarkerInteractiveBackground: C }) {
                const w = (0, h.b)(),
                    T = (E || []).slice(0, 3),
                    Z = s.createElement(
                        p.Z,
                        { link: r, style: y.content, withoutInteractiveStyles: !0 },
                        s.createElement(
                            l.Z,
                            { style: y.horizontalContainer },
                            b ? s.createElement(l.Z, { style: y.imageContainer }, s.createElement(m.Z, { resizeMode: "cover", source: b.original_img_url, style: y.image })) : null,
                            s.createElement(
                                l.Z,
                                { style: y.textContainer },
                                s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "headline2", weight: "bold", withInteractiveStyling: !1 }, o),
                                i ? s.createElement(c.ZP, { color: "gray900", numberOfLines: 2, size: "body" }, i) : null,
                                x
                                    ? s.createElement(
                                          l.Z,
                                          { style: y.infoContainer },
                                          T.length > 0
                                              ? s.createElement(
                                                    l.Z,
                                                    { style: y.userAvatars },
                                                    T.map((e, t) => s.createElement(v.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [y.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * g.default.theme.spacesPx.space12 } : {}], uri: e })),
                                                )
                                              : null,
                                          s.createElement(c.ZP, { color: "gray900", style: y.totalTrendPostsText }, x),
                                          s.createElement(l.Z, { style: y.dot }),
                                          n ? s.createElement(l.Z, { style: y.lastUpdatedAtContainer }, a ? s.createElement(l.Z, { style: y.liveContainer }, s.createElement(c.ZP, { style: y.liveText }, "LIVE")) : s.createElement(c.ZP, { style: y.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return s.createElement(u.Z, { "aria-labelledby": w, style: y.root, testID: f, withDarkerInteractiveBackground: C }, Z);
            }
            const y = g.default.create((e) => ({
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
            var b = a(530525),
                x = a(439592),
                E = a(682474),
                C = a(638009),
                w = a(470397),
                T = a(126962);
            function Z({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: d, name: m, onClick: p, renderQuoteTweet: v, socialContext: f, testID: y, thumbnailImage: Z, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: M }) {
                const z = s.useContext(C.ZP),
                    _ = (0, h.b)(),
                    A = s.createElement(l.Z, { style: "full" === a ? k.content : k.contentHalf }, s.createElement(l.Z, { style: k.horizontalContainer }, s.createElement(l.Z, { style: k.textContainer }, s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: k.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? s.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: k.descriptionText }, d) : null, s.createElement(w.Z, null, n ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), f ? s.createElement(T.Z, (0, o.Z)({ style: k.socialContext }, f)) : null), Z ? s.createElement(l.Z, { style: k.imageContainer }, s.createElement(E.Z, { ratio: g.default.theme.aspectRatios.square }, s.createElement(b.Z, { "aria-label": "trend-image", aspectMode: x.Z.SQUARE, image: { url: Z.original_img_url, height: Z.original_img_height, width: Z.original_img_width } }))) : null, D ? s.createElement(l.Z, { style: k.caret }, D) : null), v ? s.createElement(l.Z, { style: k.quoteTweet }, v({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: k.attachmentWrapper }, e) : null);
                return s.createElement(u.Z, { "aria-labelledby": _, link: i ? z.withAnchorless(i) : void 0, onPress: p, role: i ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: I }, A);
            }
            const k = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${g.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${g.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${g.default.theme.spaces.space40} * 2)`, minHeight: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, minWidth: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var D = a(676145),
                I = a(378729),
                M = a(628526),
                z = a(442730);
            function _({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: d, promotedContent: m, promotedLabel: p, rank: g, renderQuoteTweet: v, testID: f, trendFeedbackMenu: y, withDarkerInteractiveBackground: b }) {
                const x = s.useContext(C.ZP),
                    E = (0, h.b)(),
                    T = i ? s.createElement(c.ZP, { color: "gray700", dir: ((Z = i), (0, D.Z)(Z) && Z.length ? z.Z.getTextDirection(Z, { fromEnd: !0 }) : void 0), size: "subtext2", style: A.metaDescription }, i) : null;
                var Z;
                const k = s.createElement(w.Z, null, g ? s.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, g) : null, a ? s.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    _ = s.createElement(c.ZP, { dir: z.Z.getTextDirection(o), style: A.name, weight: "bold", withHashflags: !0 }, o);
                return s.createElement(u.Z, { "aria-labelledby": E, link: r ? x.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: A.root, testID: f, withDarkerInteractiveBackground: b }, s.createElement(l.Z, { id: E, style: A.content }, k, _, t ? s.createElement(c.ZP, { color: "gray700", style: A.description }, t) : null, v ? s.createElement(l.Z, { style: A.quoteTweet }, v({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: A.attachmentWrapper }, e) : null, n.length ? s.createElement(M.Z, { groupedTrends: n }) : null, T, m ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", style: A.promotedIndicatorWrapper }, s.createElement(I.Z, { label: p, promotedContent: m })) : null, y ? s.createElement(l.Z, { style: A.trendFeedbackMenuWrapper }, y) : null));
            }
            const A = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var S = a(771099),
                P = a(946409),
                H = a(663550),
                $ = a(725516),
                R = a(448301),
                U = a(443781),
                B = a(301758),
                L = a(927389),
                V = a(276563),
                F = a(370751),
                W = a(260137);
            const { CardNames: N } = V.default,
                O = Object.freeze({ [N.LIVE_EVENT]: !0, [N.MOMENT]: !0, [N.SUMMARY]: !0, [N.SUMMARY_LARGE_IMAGE]: !0, [N.AUDIOSPACE]: !0 }),
                G = (0, F.Z)([N.LIVE_EVENT, N.AUDIOSPACE]);
            const K = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                q = ({ card: e, withThirdPartyCards: t }) => {
                    const a = s.useMemo(() => ({ ...e, name: e.name === N.SUMMARY_LARGE_IMAGE ? N.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!O[e.name] || (!G.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? s.createElement(W.default, { card: a, cardContext: K, cardState: "secondary" })
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
                re = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: i }) => {
                    const l = (0, $.z)(),
                        c = S.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: h, is_ai_trend: g, is_live: v, last_updated_at: y, name: b, promotedMetadata: x, rank: E, socialContext: C, thumbnailImage: w, total_trend_posts: T, url: k } = a,
                        { domainContext: D, metaDescription: I } = a.trendMetadata,
                        { featureSwitches: M } = s.useContext(U.rC),
                        z = M.isTrue("responsive_web_trends_ui_top_articles") && g,
                        A = M.isTrue("responsive_web_grok_trend_news_cell_enabled") && g,
                        V = C && C.generalContext ? { contextType: C.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: C.generalContext.text, link: C.generalContext.landingUrl ? { pathname: C.generalContext.landingUrl.url } : void 0, userAvatarUrls: C.generalContext.contextImageUrls } : void 0,
                        F = s.useCallback(
                            (e) => {
                                x?.promotedTrendId && r({ promoted_trend_id: x.promotedTrendId, impression_id: x.impressionString, event: e }).catch(t());
                            },
                            [t, r, x],
                        );
                    s.useEffect(() => {
                        l.scribeAction("impression"), F(H.AJ.TREND_VIEW);
                    }, [l, F]);
                    const W = s.useCallback(() => {
                            l.scribeAction("search"), F(H.AJ.TREND_CLICK);
                        }, [l, F]),
                        N = s.useCallback(() => {
                            l.scribeAction("click"), F(H.AJ.TREND_CLICK);
                        }, [l, F]),
                        O = s.useMemo(() => (e?.length ? s.createElement(Q, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        G = s.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, P.s9)(e.url) })) : []), [u]),
                        K = s.useMemo(() => (k ? (0, P.s9)(k) : void 0), [k]),
                        q = s.useMemo(() => (x?.promotedTrendId ? { disclosure_type: x.disclosureType, impression_id: x.promotedTrendId } : void 0), [x]),
                        Y = s.useMemo(() => (m?.length ? (e) => s.createElement(B.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = s.useMemo(() => (n?.length ? s.createElement(L.Z, { feedbackItems: n }) : void 0), [n]);
                    return A ? s.createElement(f, { description: p, images: h, isLive: v, lastUpdatedAtText: y ? (0, R.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: q ? void 0 : I, name: b, onClick: N, testID: ne, thumbnailImage: w, totalTrendPostsText: T ? `${(0, R.uf)(Number(T))} comments` : void 0, userAvatarUrls: V?.userAvatarUrls, withDarkerInteractiveBackground: c }) : z ? s.createElement(Z, { attachment: O, description: p, displayMode: d, domainContext: D, images: h, link: K, metaDescription: q ? void 0 : I, name: b, onClick: N, renderQuoteTweet: Y, socialContext: V, testID: ne, thumbnailImage: w, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : s.createElement(_, { attachment: O, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: q ? void 0 : I, name: b, onClick: W, promotedContent: q, promotedLabel: q ? I : void 0, rank: E, renderQuoteTweet: Y, testID: ne, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
                },
                ie = ae(s.memo(re)),
                oe = (e) =>
                    i
                        .iH({
                            isFocusable: (0, n.Z)(!0),
                            component: ie,
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
                    i = 86400,
                    o = 3600,
                    s = 60;
                let l;
                if (r >= i) {
                    const e = Math.floor(r / i);
                    l = `${e} day${1 === e ? "" : "s"}`;
                } else if (r >= o) {
                    const e = Math.floor(r / o);
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
            function i(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            a.d(t, { ZW: () => i, pi: () => n, uf: () => r });
        },
        628526: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(674132),
                i = a.n(r),
                o = a(731708),
                s = a(392237);
            const l = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(o.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = s.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = l(e, t);
                    return r ? n.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        818088: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        784732: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.a9ccd45a.js.map

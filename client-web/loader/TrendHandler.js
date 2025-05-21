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
                s = a(851623);
            const c = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: i } = e,
                        l = n.useCallback((e) => (a ? n.createElement(o, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: l, style: c.curationControl, testID: s.Z.caret, withDarkBackground: i }) : null;
                });
        },
        691067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => oe });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                l = a(202784),
                s = a(325686),
                c = a(731708),
                d = a(757483),
                m = a(992942),
                p = a(530732),
                u = a(952428),
                g = a(352924),
                h = a(392237),
                v = a(823161);
            function f({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: i, name: o, onClick: d, testID: f, thumbnailImage: b, totalTrendPostsText: x, userAvatarUrls: E, withDarkerInteractiveBackground: C }) {
                const w = (0, g.b)(),
                    T = (E || []).slice(0, 3),
                    Z = l.createElement(
                        p.Z,
                        { link: r, style: y.content, withoutInteractiveStyles: !0 },
                        l.createElement(
                            s.Z,
                            { style: y.horizontalContainer },
                            b ? l.createElement(s.Z, { style: y.imageContainer }, l.createElement(m.Z, { resizeMode: "cover", source: b.original_img_url, style: y.image })) : null,
                            l.createElement(
                                s.Z,
                                { style: y.textContainer },
                                l.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "headline2", weight: "bold", withInteractiveStyling: !1 }, o),
                                i ? l.createElement(c.ZP, { color: "gray900", numberOfLines: 2, size: "body" }, i) : null,
                                x
                                    ? l.createElement(
                                          s.Z,
                                          { style: y.infoContainer },
                                          T.length > 0
                                              ? l.createElement(
                                                    s.Z,
                                                    { style: y.userAvatars },
                                                    T.map((e, t) => l.createElement(v.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [y.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * h.default.theme.spacesPx.space12 } : {}], uri: e })),
                                                )
                                              : null,
                                          l.createElement(c.ZP, { color: "gray900", style: y.totalTrendPostsText }, x),
                                          l.createElement(s.Z, { style: y.dot }),
                                          n ? l.createElement(s.Z, { style: y.lastUpdatedAtContainer }, a ? l.createElement(s.Z, { style: y.liveContainer }, l.createElement(c.ZP, { style: y.liveText }, "LIVE")) : l.createElement(c.ZP, { style: y.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return l.createElement(u.Z, { "aria-labelledby": w, style: y.root, testID: f, withDarkerInteractiveBackground: C }, Z);
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
            var b = a(530525),
                x = a(439592),
                E = a(682474),
                C = a(638009),
                w = a(470397),
                T = a(126962);
            function Z({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: d, name: m, onClick: p, renderQuoteTweet: v, socialContext: f, testID: y, thumbnailImage: Z, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: M }) {
                const _ = l.useContext(C.ZP),
                    z = (0, g.b)(),
                    A = l.createElement(s.Z, { style: "full" === a ? k.content : k.contentHalf }, l.createElement(s.Z, { style: k.horizontalContainer }, l.createElement(s.Z, { style: k.textContainer }, l.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: k.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? l.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: k.descriptionText }, d) : null, l.createElement(w.Z, null, n ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), f ? l.createElement(T.Z, (0, o.Z)({ style: k.socialContext }, f)) : null), Z ? l.createElement(s.Z, { style: k.imageContainer }, l.createElement(E.Z, { ratio: h.default.theme.aspectRatios.square }, l.createElement(b.Z, { "aria-label": "trend-image", aspectMode: x.Z.SQUARE, image: { url: Z.original_img_url, height: Z.original_img_height, width: Z.original_img_width } }))) : null, D ? l.createElement(s.Z, { style: k.caret }, D) : null), v ? l.createElement(s.Z, { style: k.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: k.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": z, link: i ? _.withAnchorless(i) : void 0, onPress: p, role: i ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: I }, A);
            }
            const k = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${h.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${h.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${h.default.theme.spaces.space40} * 2)`, minHeight: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, minWidth: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var D = a(676145),
                I = a(378729),
                M = a(628526),
                _ = a(442730);
            function z({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: d, promotedContent: m, promotedLabel: p, rank: h, renderQuoteTweet: v, testID: f, trendFeedbackMenu: y, withDarkerInteractiveBackground: b }) {
                const x = l.useContext(C.ZP),
                    E = (0, g.b)(),
                    T = i ? l.createElement(c.ZP, { color: "gray700", dir: ((Z = i), (0, D.Z)(Z) && Z.length ? _.Z.getTextDirection(Z, { fromEnd: !0 }) : void 0), size: "subtext2", style: A.metaDescription }, i) : null;
                var Z;
                const k = l.createElement(w.Z, null, h ? l.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, h) : null, a ? l.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    z = l.createElement(c.ZP, { dir: _.Z.getTextDirection(o), style: A.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": E, link: r ? x.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: A.root, testID: f, withDarkerInteractiveBackground: b }, l.createElement(s.Z, { id: E, style: A.content }, k, z, t ? l.createElement(c.ZP, { color: "gray700", style: A.description }, t) : null, v ? l.createElement(s.Z, { style: A.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: A.attachmentWrapper }, e) : null, n.length ? l.createElement(M.Z, { groupedTrends: n }) : null, T, m ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", style: A.promotedIndicatorWrapper }, l.createElement(I.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(s.Z, { style: A.trendFeedbackMenuWrapper }, y) : null));
            }
            const A = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var S = a(771099),
                P = a(946409),
                H = a(663550),
                $ = a(725516),
                L = a(448301),
                B = a(443781),
                R = a(301758),
                U = a(927389),
                F = a(276563),
                V = a(370751),
                W = a(260137);
            const { CardNames: N } = F.default,
                O = Object.freeze({ [N.LIVE_EVENT]: !0, [N.MOMENT]: !0, [N.SUMMARY]: !0, [N.SUMMARY_LARGE_IMAGE]: !0, [N.AUDIOSPACE]: !0 }),
                G = (0, V.Z)([N.LIVE_EVENT, N.AUDIOSPACE]);
            const K = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                q = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === N.SUMMARY_LARGE_IMAGE ? N.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!O[e.name] || (!G.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(W.default, { card: a, cardContext: K, cardState: "secondary" })
                        : null;
                },
                Q = l.memo(q);
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
                    const s = (0, $.z)(),
                        c = S.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, is_live: v, last_updated_at: y, name: b, promotedMetadata: x, rank: E, socialContext: C, thumbnailImage: w, total_trend_posts: T, url: k } = a,
                        { domainContext: D, metaDescription: I } = a.trendMetadata,
                        { featureSwitches: M } = l.useContext(B.rC),
                        _ = M.isTrue("responsive_web_trends_ui_top_articles") && h,
                        A = M.isTrue("responsive_web_grok_trend_news_cell_enabled") && h,
                        F = C && C.generalContext ? { contextType: C.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: C.generalContext.text, link: C.generalContext.landingUrl ? { pathname: C.generalContext.landingUrl.url } : void 0, userAvatarUrls: C.generalContext.contextImageUrls } : void 0,
                        V = l.useCallback(
                            (e) => {
                                x?.promotedTrendId && r({ promoted_trend_id: x.promotedTrendId, impression_id: x.impressionString, event: e }).catch(t());
                            },
                            [t, r, x],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), V(H.AJ.TREND_VIEW);
                    }, [s, V]);
                    const W = l.useCallback(() => {
                            s.scribeAction("search"), V(H.AJ.TREND_CLICK);
                        }, [s, V]),
                        N = l.useCallback(() => {
                            s.scribeAction("click"), V(H.AJ.TREND_CLICK);
                        }, [s, V]),
                        O = l.useMemo(() => (e?.length ? l.createElement(Q, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        G = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, P.s9)(e.url) })) : []), [u]),
                        K = l.useMemo(() => (k ? (0, P.s9)(k) : void 0), [k]),
                        q = l.useMemo(() => (x?.promotedTrendId ? { disclosure_type: x.disclosureType, impression_id: x.promotedTrendId } : void 0), [x]),
                        Y = l.useMemo(() => (m?.length ? (e) => l.createElement(R.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = l.useMemo(() => (n?.length ? l.createElement(U.Z, { feedbackItems: n }) : void 0), [n]);
                    return A ? l.createElement(f, { description: p, images: g, isLive: v, lastUpdatedAtText: y ? (0, L.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: q ? void 0 : I, name: b, onClick: N, testID: ne, thumbnailImage: w, totalTrendPostsText: T ? `${(0, L.uf)(Number(T))} comments` : void 0, userAvatarUrls: F?.userAvatarUrls, withDarkerInteractiveBackground: c }) : _ ? l.createElement(Z, { attachment: O, description: p, displayMode: d, domainContext: D, images: g, link: K, metaDescription: q ? void 0 : I, name: b, onClick: N, renderQuoteTweet: Y, socialContext: F, testID: ne, thumbnailImage: w, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(z, { attachment: O, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: q ? void 0 : I, name: b, onClick: W, promotedContent: q, promotedLabel: q ? I : void 0, rank: E, renderQuoteTweet: Y, testID: ne, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
                },
                ie = ae(l.memo(re)),
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
                    l = 60;
                let s;
                if (r >= i) {
                    const e = Math.floor(r / i);
                    s = `${e} day${1 === e ? "" : "s"}`;
                } else if (r >= o) {
                    const e = Math.floor(r / o);
                    s = `${e} hour${1 === e ? "" : "s"}`;
                } else if (r >= l) {
                    const e = Math.floor(r / l);
                    s = `${e} ${t ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(r);
                    s = `${e} ${t ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return n >= 0 ? `${s} later` : `${s} ago`;
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
                r = a(332920),
                i = a.n(r),
                o = a(731708),
                l = a(392237);
            const s = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(o.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = s(e, t);
                    return r ? n.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        215380: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        818088: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        142496: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.edffd95a.js.map

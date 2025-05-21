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
            function f({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: i, name: o, onClick: d, testID: f, thumbnailImage: b, totalTrendPostsText: C, userAvatarUrls: x, withDarkerInteractiveBackground: E }) {
                const w = (0, g.b)(),
                    T = (x || []).slice(0, 3),
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
                                C
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
                                          l.createElement(c.ZP, { color: "gray900", style: y.totalTrendPostsText }, C),
                                          l.createElement(s.Z, { style: y.dot }),
                                          n ? l.createElement(s.Z, { style: y.lastUpdatedAtContainer }, a ? l.createElement(s.Z, { style: y.liveContainer }, l.createElement(c.ZP, { style: y.liveText }, "LIVE")) : l.createElement(c.ZP, { style: y.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return l.createElement(u.Z, { "aria-labelledby": w, style: y.root, testID: f, withDarkerInteractiveBackground: E }, Z);
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
                C = a(439592),
                x = a(682474),
                E = a(638009),
                w = a(470397),
                T = a(126962);
            function Z({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: d, name: m, onClick: p, renderQuoteTweet: v, socialContext: f, testID: y, thumbnailImage: Z, trendFeedbackMenu: D, withDarkerInteractiveBackground: z, withTrendingLabel: I }) {
                const M = l.useContext(E.ZP),
                    _ = (0, g.b)(),
                    S = l.createElement(s.Z, { style: "full" === a ? k.content : k.contentHalf }, l.createElement(s.Z, { style: k.horizontalContainer }, l.createElement(s.Z, { style: k.textContainer }, l.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: k.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? l.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: k.descriptionText }, d) : null, l.createElement(w.Z, null, n ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), f ? l.createElement(T.Z, (0, o.Z)({ style: k.socialContext }, f)) : null), Z ? l.createElement(s.Z, { style: k.imageContainer }, l.createElement(x.Z, { ratio: h.default.theme.aspectRatios.square }, l.createElement(b.Z, { "aria-label": "trend-image", aspectMode: C.Z.SQUARE, image: { url: Z.original_img_url, height: Z.original_img_height, width: Z.original_img_width } }))) : null, D ? l.createElement(s.Z, { style: k.caret }, D) : null), v ? l.createElement(s.Z, { style: k.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: k.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: i ? M.withAnchorless(i) : void 0, onPress: p, role: i ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: z }, S);
            }
            const k = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${h.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${h.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${h.default.theme.spaces.space40} * 2)`, minHeight: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, minWidth: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var D = a(676145),
                z = a(378729),
                I = a(628526),
                M = a(442730);
            function _({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: d, promotedContent: m, promotedLabel: p, rank: h, renderQuoteTweet: v, testID: f, trendFeedbackMenu: y, withDarkerInteractiveBackground: b }) {
                const C = l.useContext(E.ZP),
                    x = (0, g.b)(),
                    T = i ? l.createElement(c.ZP, { color: "gray700", dir: ((Z = i), (0, D.Z)(Z) && Z.length ? M.Z.getTextDirection(Z, { fromEnd: !0 }) : void 0), size: "subtext2", style: S.metaDescription }, i) : null;
                var Z;
                const k = l.createElement(w.Z, null, h ? l.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, h) : null, a ? l.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    _ = l.createElement(c.ZP, { dir: M.Z.getTextDirection(o), style: S.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": x, link: r ? C.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: S.root, testID: f, withDarkerInteractiveBackground: b }, l.createElement(s.Z, { id: x, style: S.content }, k, _, t ? l.createElement(c.ZP, { color: "gray700", style: S.description }, t) : null, v ? l.createElement(s.Z, { style: S.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: S.attachmentWrapper }, e) : null, n.length ? l.createElement(I.Z, { groupedTrends: n }) : null, T, m ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", style: S.promotedIndicatorWrapper }, l.createElement(z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(s.Z, { style: S.trendFeedbackMenuWrapper }, y) : null));
            }
            const S = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var A = a(771099),
                P = a(946409),
                H = a(663550),
                $ = a(725516),
                L = a(448301),
                B = a(443781),
                R = a(301758),
                U = a(927389),
                F = a(276563),
                W = a(370751),
                N = a(260137);
            const { CardNames: O } = F.default,
                V = Object.freeze({ [O.LIVE_EVENT]: !0, [O.MOMENT]: !0, [O.SUMMARY]: !0, [O.SUMMARY_LARGE_IMAGE]: !0, [O.AUDIOSPACE]: !0 }),
                G = (0, W.Z)([O.LIVE_EVENT, O.AUDIOSPACE]);
            const K = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                q = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === O.SUMMARY_LARGE_IMAGE ? O.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!V[e.name] || (!G.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(N.default, { card: a, cardContext: K, cardState: "secondary" })
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
                        c = A.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, is_live: v, last_updated_at: y, name: b, promotedMetadata: C, rank: x, socialContext: E, thumbnailImage: w, total_trend_posts: T, url: k } = a,
                        { domainContext: D, metaDescription: z } = a.trendMetadata,
                        { featureSwitches: I } = l.useContext(B.rC),
                        M = I.isTrue("responsive_web_trends_ui_top_articles") && h,
                        S = I.isTrue("responsive_web_grok_trend_news_cell_enabled") && h,
                        F = E && E.generalContext ? { contextType: E.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: E.generalContext.text, link: E.generalContext.landingUrl ? { pathname: E.generalContext.landingUrl.url } : void 0, userAvatarUrls: E.generalContext.contextImageUrls } : void 0,
                        W = l.useCallback(
                            (e) => {
                                C?.promotedTrendId && r({ promoted_trend_id: C.promotedTrendId, impression_id: C.impressionString, event: e }).catch(t());
                            },
                            [t, r, C],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), W(H.AJ.TREND_VIEW);
                    }, [s, W]);
                    const N = l.useCallback(() => {
                            s.scribeAction("search"), W(H.AJ.TREND_CLICK);
                        }, [s, W]),
                        O = l.useCallback(() => {
                            s.scribeAction("click"), W(H.AJ.TREND_CLICK);
                        }, [s, W]),
                        V = l.useMemo(() => (e?.length ? l.createElement(Q, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        G = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, P.s9)(e.url) })) : []), [u]),
                        K = l.useMemo(() => (k ? (0, P.s9)(k) : void 0), [k]),
                        q = l.useMemo(() => (C?.promotedTrendId ? { disclosure_type: C.disclosureType, impression_id: C.promotedTrendId } : void 0), [C]),
                        Y = l.useMemo(() => (m?.length ? (e) => l.createElement(R.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = l.useMemo(() => (n?.length ? l.createElement(U.Z, { feedbackItems: n }) : void 0), [n]);
                    return S ? l.createElement(f, { description: p, images: g, isLive: v, lastUpdatedAtText: y ? (0, L.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: q ? void 0 : z, name: b, onClick: O, testID: ne, thumbnailImage: w, totalTrendPostsText: T ? `${(0, L.uf)(Number(T))} comments` : void 0, userAvatarUrls: F?.userAvatarUrls, withDarkerInteractiveBackground: c }) : M ? l.createElement(Z, { attachment: V, description: p, displayMode: d, domainContext: D, images: g, link: K, metaDescription: q ? void 0 : z, name: b, onClick: O, renderQuoteTweet: Y, socialContext: F, testID: ne, thumbnailImage: w, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(_, { attachment: V, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: q ? void 0 : z, name: b, onClick: N, promotedContent: q, promotedLabel: q ? z : void 0, rank: x, renderQuoteTweet: Y, testID: ne, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
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
        428259: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        971657: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        47286: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.ca7ffcfa.js.map

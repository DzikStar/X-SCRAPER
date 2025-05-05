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
            a.r(t), a.d(t, { default: () => oe });
            var n = a(459643),
                r = a(942893),
                o = a(351322),
                i = a(807896),
                s = a(202784),
                l = a(325686),
                c = a(731708),
                d = a(757483),
                m = a(992942),
                p = a(638009),
                u = a(952428),
                g = a(352924),
                h = a(392237),
                f = a(823161);
            function y({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: o, name: i, onClick: d, socialContext: y, testID: x, thumbnailImage: v, totalTrendPostsText: E, withDarkerInteractiveBackground: C }) {
                const w = s.useContext(p.ZP),
                    T = (0, g.b)(),
                    Z = (y?.userAvatarUrls || []).slice(0, 3),
                    k = s.createElement(
                        l.Z,
                        { style: b.content },
                        s.createElement(
                            l.Z,
                            { style: b.horizontalContainer },
                            v ? s.createElement(l.Z, { style: b.imageContainer }, s.createElement(m.Z, { resizeMode: "cover", source: v.original_img_url, style: b.image })) : null,
                            s.createElement(
                                l.Z,
                                { style: b.textContainer },
                                s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "headline2", weight: "bold", withInteractiveStyling: !1 }, i),
                                o ? s.createElement(c.ZP, { color: "gray900", numberOfLines: 2, size: "body" }, o) : null,
                                E
                                    ? s.createElement(
                                          l.Z,
                                          { style: b.infoContainer },
                                          Z.length > 0
                                              ? s.createElement(
                                                    l.Z,
                                                    { style: b.userAvatars },
                                                    Z.map((e, t) => s.createElement(f.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [b.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * h.default.theme.spacesPx.space12 } : {}], uri: e })),
                                                )
                                              : null,
                                          s.createElement(c.ZP, { color: "gray900", style: b.totalTrendPostsText }, E),
                                          s.createElement(l.Z, { style: b.dot }),
                                          n ? s.createElement(l.Z, { style: b.lastUpdatedAtContainer }, a ? s.createElement(l.Z, { style: b.liveContainer }, s.createElement(c.ZP, { style: b.liveText }, "LIVE")) : s.createElement(c.ZP, { style: b.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return s.createElement(u.Z, { "aria-labelledby": T, link: r ? w.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: b.root, testID: x, withDarkerInteractiveBackground: C }, k);
            }
            const b = h.default.create((e) => ({
                root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal },
                metaDescription: { marginTop: e.spaces.space4 },
                content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 },
                horizontalContainer: { flex: 1, flexDirection: "row", gap: e.componentDimensions.gutterHorizontal },
                imageContainer: { borderRadius: e.borderRadii.medium, height: "100%", flex: 1, alignSelf: "stretch", aspectRatio: 1, overflow: "hidden" },
                image: { height: "100%", width: "100%" },
                textContainer: { flex: 4, gap: e.spaces.space4 },
                infoContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, width: "max-content", backgroundColor: "transparent" },
                dot: { width: e.spaces.space2, height: e.spaces.space2, backgroundColor: e.colors.gray700, borderRadius: e.spaces.space2 },
                totalTrendPostsText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 },
                lastUpdatedAtContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray700 },
                lastUpdatedAtText: { color: "inherit", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 },
                icon: { color: "inherit", width: e.spaces.space12, height: e.spaces.space12 },
                liveContainer: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: d.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small },
                liveText: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" },
                userAvatars: { display: "flex", flexDirection: "row", alignItems: "center" },
                userAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" },
            }));
            var x = a(530525),
                v = a(439592),
                E = a(682474),
                C = a(470397),
                w = a(126962);
            function T({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: o, metaDescription: d, name: m, onClick: f, renderQuoteTweet: y, socialContext: b, testID: T, thumbnailImage: k, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: M }) {
                const _ = s.useContext(p.ZP),
                    z = (0, g.b)(),
                    A = s.createElement(l.Z, { style: "full" === a ? Z.content : Z.contentHalf }, s.createElement(l.Z, { style: Z.horizontalContainer }, s.createElement(l.Z, { style: Z.textContainer }, s.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: Z.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? s.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: Z.descriptionText }, d) : null, s.createElement(C.Z, null, n ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), b ? s.createElement(w.Z, (0, i.Z)({ style: Z.socialContext }, b)) : null), k ? s.createElement(l.Z, { style: Z.imageContainer }, s.createElement(E.Z, { ratio: h.default.theme.aspectRatios.square }, s.createElement(x.Z, { "aria-label": "trend-image", aspectMode: v.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, D ? s.createElement(l.Z, { style: Z.caret }, D) : null), y ? s.createElement(l.Z, { style: Z.quoteTweet }, y({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: Z.attachmentWrapper }, e) : null);
                return s.createElement(u.Z, { "aria-labelledby": z, link: o ? _.withAnchorless(o) : void 0, onPress: f, role: o ? void 0 : "article", style: Z.root, testID: T, withDarkerInteractiveBackground: I }, A);
            }
            const Z = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${h.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${h.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${h.default.theme.spaces.space40} * 2)`, minHeight: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, minWidth: `calc(${h.default.theme.spaces.space40} + ${h.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var k = a(676145),
                D = a(378729),
                I = a(628526),
                M = a(442730);
            function _({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: o, name: i, onClick: d, promotedContent: m, promotedLabel: h, rank: f, renderQuoteTweet: y, testID: b, trendFeedbackMenu: x, withDarkerInteractiveBackground: v }) {
                const E = s.useContext(p.ZP),
                    w = (0, g.b)(),
                    T = o ? s.createElement(c.ZP, { color: "gray700", dir: ((Z = o), (0, k.Z)(Z) && Z.length ? M.Z.getTextDirection(Z, { fromEnd: !0 }) : void 0), size: "subtext2", style: z.metaDescription }, o) : null;
                var Z;
                const _ = s.createElement(C.Z, null, f ? s.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, f) : null, a ? s.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    A = s.createElement(c.ZP, { dir: M.Z.getTextDirection(i), style: z.name, weight: "bold", withHashflags: !0 }, i);
                return s.createElement(u.Z, { "aria-labelledby": w, link: r ? E.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: z.root, testID: b, withDarkerInteractiveBackground: v }, s.createElement(l.Z, { id: w, style: z.content }, _, A, t ? s.createElement(c.ZP, { color: "gray700", style: z.description }, t) : null, y ? s.createElement(l.Z, { style: z.quoteTweet }, y({ isCondensed: !0 })) : null, e ? s.createElement(l.Z, { style: z.attachmentWrapper }, e) : null, n.length ? s.createElement(I.Z, { groupedTrends: n }) : null, T, m ? s.createElement(c.ZP, { color: "gray700", size: "subtext2", style: z.promotedIndicatorWrapper }, s.createElement(D.Z, { label: h, promotedContent: m })) : null, x ? s.createElement(l.Z, { style: z.trendFeedbackMenuWrapper }, x) : null));
            }
            const z = h.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var A = a(771099),
                S = a(946409),
                P = a(663550),
                H = a(725516),
                $ = a(448301),
                L = a(443781),
                B = a(301758),
                R = a(927389),
                U = a(276563),
                F = a(370751),
                W = a(260137);
            const { CardNames: N } = U.default,
                V = Object.freeze({ [N.LIVE_EVENT]: !0, [N.MOMENT]: !0, [N.SUMMARY]: !0, [N.SUMMARY_LARGE_IMAGE]: !0, [N.AUDIOSPACE]: !0 }),
                O = (0, F.Z)([N.LIVE_EVENT, N.AUDIOSPACE]);
            const G = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                K = ({ card: e, withThirdPartyCards: t }) => {
                    const a = s.useMemo(() => ({ ...e, name: e.name === N.SUMMARY_LARGE_IMAGE ? N.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!V[e.name] || (!O.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? s.createElement(W.default, { card: a, cardContext: G, cardState: "secondary" })
                        : null;
                },
                q = s.memo(K);
            var Q = a(71620),
                Y = a(668214),
                j = a(276001),
                J = a(694180);
            const X = [],
                ee = j.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || X),
                te = (0, Y.Z)()
                    .propsFromState(() => ({ cards: ee }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, Q.zr)(e), logTrend: J.dS })),
                ae = "trend",
                ne = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: o }) => {
                    const l = (0, H.z)(),
                        c = A.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, is_live: f, last_updated_at: b, name: x, promotedMetadata: v, rank: E, socialContext: C, thumbnailImage: w, total_trend_posts: Z, url: k } = a,
                        { domainContext: D, metaDescription: I } = a.trendMetadata,
                        { featureSwitches: M } = s.useContext(L.rC),
                        z = M.isTrue("responsive_web_trends_ui_top_articles") && h,
                        U = M.isTrue("responsive_web_grok_trend_news_cell_enabled") && h,
                        F = C && C.generalContext ? { contextType: C.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: C.generalContext.text, link: C.generalContext.landingUrl ? { pathname: C.generalContext.landingUrl.url } : void 0, userAvatarUrls: C.generalContext.contextImageUrls } : void 0,
                        W = s.useCallback(
                            (e) => {
                                v?.promotedTrendId && r({ promoted_trend_id: v.promotedTrendId, impression_id: v.impressionString, event: e }).catch(t());
                            },
                            [t, r, v],
                        );
                    s.useEffect(() => {
                        l.scribeAction("impression"), W(P.AJ.TREND_VIEW);
                    }, [l, W]);
                    const N = s.useCallback(() => {
                            l.scribeAction("search"), W(P.AJ.TREND_CLICK);
                        }, [l, W]),
                        V = s.useCallback(() => {
                            l.scribeAction("click"), W(P.AJ.TREND_CLICK);
                        }, [l, W]),
                        O = s.useMemo(() => (e?.length ? s.createElement(q, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        G = s.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, S.s9)(e.url) })) : []), [u]),
                        K = s.useMemo(() => (k ? (0, S.s9)(k) : void 0), [k]),
                        Q = s.useMemo(() => (v?.promotedTrendId ? { disclosure_type: v.disclosureType, impression_id: v.promotedTrendId } : void 0), [v]),
                        Y = s.useMemo(() => (m?.length ? (e) => s.createElement(B.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = s.useMemo(() => (n?.length ? s.createElement(R.Z, { feedbackItems: n }) : void 0), [n]);
                    return U ? s.createElement(y, { description: p, images: g, isLive: f, lastUpdatedAtText: b ? (0, $.pi)(new Date(Number(b)), !0) : void 0, link: K, metaDescription: Q ? void 0 : I, name: x, onClick: V, testID: ae, thumbnailImage: w, totalTrendPostsText: Z ? `${(0, $.uf)(Number(Z))} comments` : void 0, withDarkerInteractiveBackground: c }) : z ? s.createElement(T, { attachment: O, description: p, displayMode: d, domainContext: D, images: g, link: K, metaDescription: Q ? void 0 : I, name: x, onClick: V, renderQuoteTweet: Y, socialContext: F, testID: ae, thumbnailImage: w, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : s.createElement(_, { attachment: O, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: Q ? void 0 : I, name: x, onClick: N, promotedContent: Q, promotedLabel: Q ? I : void 0, rank: E, renderQuoteTweet: Y, testID: ae, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
                },
                re = te(s.memo(ne)),
                oe = (e) =>
                    o
                        .iH({
                            isFocusable: (0, n.Z)(!0),
                            component: re,
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
        628526: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(674132),
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
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        69893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.ed93cf2a.js.map

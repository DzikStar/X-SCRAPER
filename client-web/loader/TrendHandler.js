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
                h = a(952428),
                u = a(352924),
                g = a(392237),
                v = a(823161);
            function f({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: i, name: o, onClick: d, testID: f, thumbnailImage: b, totalTrendPostsText: E, userAvatarUrls: x, withDarkerInteractiveBackground: w }) {
                const C = (0, u.b)(),
                    Z = (x || []).slice(0, 3),
                    T = l.createElement(
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
                                E
                                    ? l.createElement(
                                          s.Z,
                                          { style: y.infoContainer },
                                          Z.length > 0
                                              ? l.createElement(
                                                    s.Z,
                                                    { style: y.userAvatars },
                                                    Z.map((e, t) => l.createElement(v.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [y.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * g.default.theme.spacesPx.space12 } : {}], uri: e })),
                                                )
                                              : null,
                                          l.createElement(c.ZP, { color: "gray900", style: y.totalTrendPostsText }, E),
                                          l.createElement(s.Z, { style: y.dot }),
                                          n ? l.createElement(s.Z, { style: y.lastUpdatedAtContainer }, a ? l.createElement(s.Z, { style: y.liveContainer }, l.createElement(c.ZP, { style: y.liveText }, "LIVE")) : l.createElement(c.ZP, { style: y.lastUpdatedAtText }, n)) : null,
                                      )
                                    : null,
                            ),
                        ),
                    );
                return l.createElement(h.Z, { "aria-labelledby": C, style: y.root, testID: f, withDarkerInteractiveBackground: w }, T);
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
                E = a(439592),
                x = a(682474),
                w = a(638009),
                C = a(470397),
                Z = a(126962);
            function T({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: d, name: m, onClick: p, renderQuoteTweet: v, socialContext: f, testID: y, thumbnailImage: T, trendFeedbackMenu: D, withDarkerInteractiveBackground: z, withTrendingLabel: I }) {
                const M = l.useContext(w.ZP),
                    _ = (0, u.b)(),
                    H = l.createElement(s.Z, { style: "full" === a ? k.content : k.contentHalf }, l.createElement(s.Z, { style: k.horizontalContainer }, l.createElement(s.Z, { style: k.textContainer }, l.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: k.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? l.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: k.descriptionText }, d) : null, l.createElement(C.Z, null, n ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), f ? l.createElement(Z.Z, (0, o.Z)({ style: k.socialContext }, f)) : null), T ? l.createElement(s.Z, { style: k.imageContainer }, l.createElement(x.Z, { ratio: g.default.theme.aspectRatios.square }, l.createElement(b.Z, { "aria-label": "trend-image", aspectMode: E.Z.SQUARE, image: { url: T.original_img_url, height: T.original_img_height, width: T.original_img_width } }))) : null, D ? l.createElement(s.Z, { style: k.caret }, D) : null), v ? l.createElement(s.Z, { style: k.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: k.attachmentWrapper }, e) : null);
                return l.createElement(h.Z, { "aria-labelledby": _, link: i ? M.withAnchorless(i) : void 0, onPress: p, role: i ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: z }, H);
            }
            const k = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${g.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${g.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${g.default.theme.spaces.space40} * 2)`, minHeight: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, minWidth: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var D = a(676145),
                z = a(378729),
                I = a(628526),
                M = a(442730);
            function _({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: d, promotedContent: m, promotedLabel: p, rank: g, renderQuoteTweet: v, testID: f, trendFeedbackMenu: y, withDarkerInteractiveBackground: b }) {
                const E = l.useContext(w.ZP),
                    x = (0, u.b)(),
                    Z = i ? l.createElement(c.ZP, { color: "gray700", dir: ((T = i), (0, D.Z)(T) && T.length ? M.Z.getTextDirection(T, { fromEnd: !0 }) : void 0), size: "subtext2", style: H.metaDescription }, i) : null;
                var T;
                const k = l.createElement(C.Z, null, g ? l.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, g) : null, a ? l.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    _ = l.createElement(c.ZP, { dir: M.Z.getTextDirection(o), style: H.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(h.Z, { "aria-labelledby": x, link: r ? E.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: H.root, testID: f, withDarkerInteractiveBackground: b }, l.createElement(s.Z, { id: x, style: H.content }, k, _, t ? l.createElement(c.ZP, { color: "gray700", style: H.description }, t) : null, v ? l.createElement(s.Z, { style: H.quoteTweet }, v({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: H.attachmentWrapper }, e) : null, n.length ? l.createElement(I.Z, { groupedTrends: n }) : null, Z, m ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", style: H.promotedIndicatorWrapper }, l.createElement(z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(s.Z, { style: H.trendFeedbackMenuWrapper }, y) : null));
            }
            const H = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var A = a(771099),
                S = a(946409),
                P = a(663550),
                B = a(725516),
                $ = a(448301),
                L = a(443781),
                V = a(301758),
                R = a(927389),
                U = a(276563),
                F = a(370751),
                W = a(260137);
            const { CardNames: N } = U.default,
                O = Object.freeze({ [N.LIVE_EVENT]: !0, [N.MOMENT]: !0, [N.SUMMARY]: !0, [N.SUMMARY_LARGE_IMAGE]: !0, [N.AUDIOSPACE]: !0 }),
                G = (0, F.Z)([N.LIVE_EVENT, N.AUDIOSPACE]);
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
                    const s = (0, B.z)(),
                        c = A.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, is_live: v, last_updated_at: y, name: b, promotedMetadata: E, rank: x, socialContext: w, thumbnailImage: C, total_trend_posts: Z, url: k } = a,
                        { domainContext: D, metaDescription: z } = a.trendMetadata,
                        { featureSwitches: I } = l.useContext(L.rC),
                        M = I.isTrue("responsive_web_trends_ui_top_articles") && g,
                        H = I.isTrue("responsive_web_grok_trend_news_cell_enabled") && g,
                        U = w && w.generalContext ? { contextType: w.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: w.generalContext.text, link: w.generalContext.landingUrl ? { pathname: w.generalContext.landingUrl.url } : void 0, userAvatarUrls: w.generalContext.contextImageUrls } : void 0,
                        F = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && r({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, r, E],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), F(P.AJ.TREND_VIEW);
                    }, [s, F]);
                    const W = l.useCallback(() => {
                            s.scribeAction("search"), F(P.AJ.TREND_CLICK);
                        }, [s, F]),
                        N = l.useCallback(() => {
                            s.scribeAction("click"), F(P.AJ.TREND_CLICK);
                        }, [s, F]),
                        O = l.useMemo(() => (e?.length ? l.createElement(Q, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        G = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, S.s9)(e.url) })) : []), [h]),
                        K = l.useMemo(() => (k ? (0, S.s9)(k) : void 0), [k]),
                        q = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        Y = l.useMemo(() => (m?.length ? (e) => l.createElement(V.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = l.useMemo(() => (n?.length ? l.createElement(R.Z, { feedbackItems: n }) : void 0), [n]);
                    return H ? l.createElement(f, { description: p, images: u, isLive: v, lastUpdatedAtText: y ? (0, $.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: q ? void 0 : z, name: b, onClick: N, testID: ne, thumbnailImage: C, totalTrendPostsText: Z ? `${(0, $.uf)(Number(Z))} comments` : void 0, userAvatarUrls: U?.userAvatarUrls, withDarkerInteractiveBackground: c }) : M ? l.createElement(T, { attachment: O, description: p, displayMode: d, domainContext: D, images: u, link: K, metaDescription: q ? void 0 : z, name: b, onClick: N, renderQuoteTweet: Y, socialContext: U, testID: ne, thumbnailImage: C, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(_, { attachment: O, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: q ? void 0 : z, name: b, onClick: W, promotedContent: q, promotedLabel: q ? z : void 0, rank: x, renderQuoteTweet: Y, testID: ne, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
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
            a.d(t, { Z: () => h });
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
                h = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = s(e, t);
                    return r ? n.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        894023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4 7h3v2H4v2h3v2H4v2h3v2H4v2h3v2H2V3h13v5h-2V5H4v2zm18 4v10H10V11h12zm-2 2h-8v2h3v2h-3v2h8v-6z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        856661: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        784732: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.085d560a.js.map

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
            a.r(t), a.d(t, { default: () => ie });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                l = a(202784),
                s = a(325686),
                c = a(731708),
                d = a(757483),
                m = a(992942),
                p = a(638009),
                u = a(952428),
                h = a(352924),
                g = a(392237),
                v = a(823161);
            function f({ description: e, images: t, isLive: a, lastUpdatedAtText: n, link: r, metaDescription: i, name: o, onClick: d, testID: f, thumbnailImage: b, totalTrendPostsText: C, userAvatarUrls: x, withDarkerInteractiveBackground: E }) {
                const w = l.useContext(p.ZP),
                    Z = (0, h.b)(),
                    T = (x || []).slice(0, 3),
                    k = l.createElement(
                        s.Z,
                        { style: y.content },
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
                                                    T.map((e, t) => l.createElement(v.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", key: `news-article-cell-user-avatar-${e}-${t}`, shape: "circle", size: "medium", style: [y.userAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * g.default.theme.spacesPx.space12 } : {}], uri: e })),
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
                return l.createElement(u.Z, { "aria-labelledby": Z, link: r ? w.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: y.root, testID: f, withDarkerInteractiveBackground: E }, k);
            }
            const y = g.default.create((e) => ({
                root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal },
                metaDescription: { marginTop: e.spaces.space4 },
                content: { flexGrow: 1, position: "relative", paddingVertical: e.spaces.space16 },
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
                userAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spaces.space4 },
                userAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" },
            }));
            var b = a(530525),
                C = a(439592),
                x = a(682474),
                E = a(470397),
                w = a(126962);
            function Z({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: d, name: m, onClick: v, renderQuoteTweet: f, socialContext: y, testID: Z, thumbnailImage: k, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: M }) {
                const z = l.useContext(p.ZP),
                    _ = (0, h.b)(),
                    S = l.createElement(s.Z, { style: "full" === a ? T.content : T.contentHalf }, l.createElement(s.Z, { style: T.horizontalContainer }, l.createElement(s.Z, { style: T.textContainer }, l.createElement(c.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: T.text, weight: "bold", withInteractiveStyling: !1 }, m), d ? l.createElement(c.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: T.descriptionText }, d) : null, l.createElement(E.Z, null, n ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), y ? l.createElement(w.Z, (0, o.Z)({ style: T.socialContext }, y)) : null), k ? l.createElement(s.Z, { style: T.imageContainer }, l.createElement(x.Z, { ratio: g.default.theme.aspectRatios.square }, l.createElement(b.Z, { "aria-label": "trend-image", aspectMode: C.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, D ? l.createElement(s.Z, { style: T.caret }, D) : null), f ? l.createElement(s.Z, { style: T.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: T.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: i ? z.withAnchorless(i) : void 0, onPress: v, role: i ? void 0 : "article", style: T.root, testID: Z, withDarkerInteractiveBackground: I }, S);
            }
            const T = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${g.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${g.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${g.default.theme.spaces.space40} * 2)`, minHeight: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, minWidth: `calc(${g.default.theme.spaces.space40} + ${g.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var k = a(676145),
                D = a(378729),
                I = a(628526),
                M = a(442730);
            function z({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: d, promotedContent: m, promotedLabel: g, rank: v, renderQuoteTweet: f, testID: y, trendFeedbackMenu: b, withDarkerInteractiveBackground: C }) {
                const x = l.useContext(p.ZP),
                    w = (0, h.b)(),
                    Z = i ? l.createElement(c.ZP, { color: "gray700", dir: ((T = i), (0, k.Z)(T) && T.length ? M.Z.getTextDirection(T, { fromEnd: !0 }) : void 0), size: "subtext2", style: _.metaDescription }, i) : null;
                var T;
                const z = l.createElement(E.Z, null, v ? l.createElement(c.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, v) : null, a ? l.createElement(c.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    S = l.createElement(c.ZP, { dir: M.Z.getTextDirection(o), style: _.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": w, link: r ? x.withAnchorless(r) : void 0, onPress: d, role: r ? void 0 : "article", style: _.root, testID: y, withDarkerInteractiveBackground: C }, l.createElement(s.Z, { id: w, style: _.content }, z, S, t ? l.createElement(c.ZP, { color: "gray700", style: _.description }, t) : null, f ? l.createElement(s.Z, { style: _.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: _.attachmentWrapper }, e) : null, n.length ? l.createElement(I.Z, { groupedTrends: n }) : null, Z, m ? l.createElement(c.ZP, { color: "gray700", size: "subtext2", style: _.promotedIndicatorWrapper }, l.createElement(D.Z, { label: g, promotedContent: m })) : null, b ? l.createElement(s.Z, { style: _.trendFeedbackMenuWrapper }, b) : null));
            }
            const _ = g.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var S = a(771099),
                A = a(946409),
                P = a(663550),
                H = a(725516),
                $ = a(448301),
                B = a(443781),
                L = a(301758),
                U = a(927389),
                R = a(276563),
                F = a(370751),
                W = a(260137);
            const { CardNames: N } = R.default,
                V = Object.freeze({ [N.LIVE_EVENT]: !0, [N.MOMENT]: !0, [N.SUMMARY]: !0, [N.SUMMARY_LARGE_IMAGE]: !0, [N.AUDIOSPACE]: !0 }),
                O = (0, F.Z)([N.LIVE_EVENT, N.AUDIOSPACE]);
            const G = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                K = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === N.SUMMARY_LARGE_IMAGE ? N.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!V[e.name] || (!O.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(W.default, { card: a, cardContext: G, cardState: "secondary" })
                        : null;
                },
                q = l.memo(K);
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
                ne = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: i }) => {
                    const s = (0, H.z)(),
                        c = S.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: h, is_ai_trend: g, is_live: v, last_updated_at: y, name: b, promotedMetadata: C, rank: x, socialContext: E, thumbnailImage: w, total_trend_posts: T, url: k } = a,
                        { domainContext: D, metaDescription: I } = a.trendMetadata,
                        { featureSwitches: M } = l.useContext(B.rC),
                        _ = M.isTrue("responsive_web_trends_ui_top_articles") && g,
                        R = M.isTrue("responsive_web_grok_trend_news_cell_enabled") && g,
                        F = E && E.generalContext ? { contextType: E.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: E.generalContext.text, link: E.generalContext.landingUrl ? { pathname: E.generalContext.landingUrl.url } : void 0, userAvatarUrls: E.generalContext.contextImageUrls } : void 0,
                        W = l.useCallback(
                            (e) => {
                                C?.promotedTrendId && r({ promoted_trend_id: C.promotedTrendId, impression_id: C.impressionString, event: e }).catch(t());
                            },
                            [t, r, C],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), W(P.AJ.TREND_VIEW);
                    }, [s, W]);
                    const N = l.useCallback(() => {
                            s.scribeAction("search"), W(P.AJ.TREND_CLICK);
                        }, [s, W]),
                        V = l.useCallback(() => {
                            s.scribeAction("click"), W(P.AJ.TREND_CLICK);
                        }, [s, W]),
                        O = l.useMemo(() => (e?.length ? l.createElement(q, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        G = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, A.s9)(e.url) })) : []), [u]),
                        K = l.useMemo(() => (k ? (0, A.s9)(k) : void 0), [k]),
                        Q = l.useMemo(() => (C?.promotedTrendId ? { disclosure_type: C.disclosureType, impression_id: C.promotedTrendId } : void 0), [C]),
                        Y = l.useMemo(() => (m?.length ? (e) => l.createElement(L.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        j = l.useMemo(() => (n?.length ? l.createElement(U.Z, { feedbackItems: n }) : void 0), [n]);
                    return R ? l.createElement(f, { description: p, images: h, isLive: v, lastUpdatedAtText: y ? (0, $.pi)(new Date(Number(y)), !0) : void 0, link: K, metaDescription: Q ? void 0 : I, name: b, onClick: V, testID: ae, thumbnailImage: w, totalTrendPostsText: T ? `${(0, $.uf)(Number(T))} comments` : void 0, userAvatarUrls: F?.userAvatarUrls, withDarkerInteractiveBackground: c }) : _ ? l.createElement(Z, { attachment: O, description: p, displayMode: d, domainContext: D, images: h, link: K, metaDescription: Q ? void 0 : I, name: b, onClick: V, renderQuoteTweet: Y, socialContext: F, testID: ae, thumbnailImage: w, trendFeedbackMenu: j, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(z, { attachment: O, description: p, domainContext: D, groupedTrends: G, link: K, metaDescription: Q ? void 0 : I, name: b, onClick: N, promotedContent: Q, promotedLabel: Q ? I : void 0, rank: x, renderQuoteTweet: Y, testID: ae, trendFeedbackMenu: j, withDarkerInteractiveBackground: c });
                },
                re = te(l.memo(ne)),
                ie = (e) =>
                    i
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
                r = a(674132),
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
        262754: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
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
        69893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.1e216efa.js.map

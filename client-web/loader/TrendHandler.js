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
            a.r(t), a.d(t, { default: () => te });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                l = a(202784),
                s = a(325686),
                c = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                u = a(638009),
                g = a(952428),
                h = a(352924),
                b = a(392237);
            function E({ description: e, images: t, link: a, metaDescription: n, name: r, onClick: i, testID: o, thumbnailImage: E, withDarkerInteractiveBackground: w }) {
                const y = l.useContext(u.ZP),
                    C = (0, h.b)(),
                    v = l.createElement(s.Z, { style: f.content }, l.createElement(s.Z, { style: f.horizontalContainer }, E ? l.createElement(s.Z, { style: f.imageContainer }, l.createElement(p.Z, { ratio: b.default.theme.aspectRatios.square }, l.createElement(c.Z, { "aria-label": "trend-news-image", aspectMode: m.Z.SQUARE, image: { url: E.original_img_url, height: 120, width: 120 } }))) : null, l.createElement(s.Z, { style: f.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "headline2", style: f.text, weight: "bold", withInteractiveStyling: !1 }, r), n ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: f.descriptionText }, n) : null)));
                return l.createElement(g.Z, { "aria-labelledby": C, link: a ? y.withAnchorless(a) : void 0, onPress: i, role: a ? void 0 : "article", style: f.root, testID: o, withDarkerInteractiveBackground: w }, v);
            }
            const f = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${b.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginEnd: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.medium, maxHeight: `calc(${b.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${b.default.theme.spaces.space40} * 2)`, minHeight: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, minWidth: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, height: "40%", width: "40%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 } }));
            var w = a(470397),
                y = a(126962);
            function C({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: E, name: f, onClick: C, renderQuoteTweet: x, socialContext: Z, testID: k, thumbnailImage: T, trendFeedbackMenu: I, withDarkerInteractiveBackground: D, withTrendingLabel: _ }) {
                const M = l.useContext(u.ZP),
                    z = (0, h.b)(),
                    S = l.createElement(s.Z, { style: "full" === a ? v.content : v.contentHalf }, l.createElement(s.Z, { style: v.horizontalContainer }, l.createElement(s.Z, { style: v.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: v.text, weight: "bold", withInteractiveStyling: !1 }, f), E ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: v.descriptionText }, E) : null, l.createElement(w.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), Z ? l.createElement(y.Z, (0, o.Z)({ style: v.socialContext }, Z)) : null), T ? l.createElement(s.Z, { style: v.imageContainer }, l.createElement(p.Z, { ratio: b.default.theme.aspectRatios.square }, l.createElement(c.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: T.original_img_url, height: T.original_img_height, width: T.original_img_width } }))) : null, I ? l.createElement(s.Z, { style: v.caret }, I) : null), x ? l.createElement(s.Z, { style: v.quoteTweet }, x({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: v.attachmentWrapper }, e) : null);
                return l.createElement(g.Z, { "aria-labelledby": z, link: i ? M.withAnchorless(i) : void 0, onPress: C, role: i ? void 0 : "article", style: v.root, testID: k, withDarkerInteractiveBackground: D }, S);
            }
            const v = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${b.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${b.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${b.default.theme.spaces.space40} * 2)`, minHeight: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, minWidth: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var x = a(676145),
                Z = a(378729),
                k = a(628526),
                T = a(442730);
            function I({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: c, promotedContent: m, promotedLabel: p, rank: b, renderQuoteTweet: E, testID: f, trendFeedbackMenu: y, withDarkerInteractiveBackground: C }) {
                const v = l.useContext(u.ZP),
                    I = (0, h.b)(),
                    _ = i ? l.createElement(d.ZP, { color: "gray700", dir: ((M = i), (0, x.Z)(M) && M.length ? T.Z.getTextDirection(M, { fromEnd: !0 }) : void 0), size: "subtext2", style: D.metaDescription }, i) : null;
                var M;
                const z = l.createElement(w.Z, null, b ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, b) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    S = l.createElement(d.ZP, { dir: T.Z.getTextDirection(o), style: D.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(g.Z, { "aria-labelledby": I, link: r ? v.withAnchorless(r) : void 0, onPress: c, role: r ? void 0 : "article", style: D.root, testID: f, withDarkerInteractiveBackground: C }, l.createElement(s.Z, { id: I, style: D.content }, z, S, t ? l.createElement(d.ZP, { color: "gray700", style: D.description }, t) : null, E ? l.createElement(s.Z, { style: D.quoteTweet }, E({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: D.attachmentWrapper }, e) : null, n.length ? l.createElement(k.Z, { groupedTrends: n }) : null, _, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: D.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(s.Z, { style: D.trendFeedbackMenuWrapper }, y) : null));
            }
            const D = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var _ = a(771099),
                M = a(946409),
                z = a(663550),
                S = a(725516),
                A = a(443781),
                H = a(301758),
                P = a(927389),
                B = a(276563),
                L = a(370751),
                R = a(260137);
            const { CardNames: W } = B.default,
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
                O = l.memo(N);
            var V = a(71620),
                G = a(668214),
                q = a(276001),
                Q = a(694180);
            const Y = [],
                j = q.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || Y),
                J = (0, G.Z)()
                    .propsFromState(() => ({ cards: j }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, V.zr)(e), logTrend: Q.dS })),
                K = "trend",
                X = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: i }) => {
                    const s = (0, S.z)(),
                        c = _.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, name: b, promotedMetadata: f, rank: w, socialContext: y, thumbnailImage: v, url: x } = a,
                        { domainContext: Z, metaDescription: k } = a.trendMetadata,
                        { featureSwitches: T } = l.useContext(A.rC),
                        D = T.isTrue("responsive_web_trends_ui_top_articles") && h,
                        B = T.isTrue("responsive_web_grok_trend_news_cell_enabled") && h,
                        L = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        R = l.useCallback(
                            (e) => {
                                f?.promotedTrendId && r({ promoted_trend_id: f.promotedTrendId, impression_id: f.impressionString, event: e }).catch(t());
                            },
                            [t, r, f],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), R(z.AJ.TREND_VIEW);
                    }, [s, R]);
                    const W = l.useCallback(() => {
                            s.scribeAction("search"), R(z.AJ.TREND_CLICK);
                        }, [s, R]),
                        $ = l.useCallback(() => {
                            s.scribeAction("click"), R(z.AJ.TREND_CLICK);
                        }, [s, R]),
                        U = l.useMemo(() => (e?.length ? l.createElement(O, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        F = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, M.s9)(e.url) })) : []), [u]),
                        N = l.useMemo(() => (x ? (0, M.s9)(x) : void 0), [x]),
                        V = l.useMemo(() => (f?.promotedTrendId ? { disclosure_type: f.disclosureType, impression_id: f.promotedTrendId } : void 0), [f]),
                        G = l.useMemo(() => (m?.length ? (e) => l.createElement(H.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        q = l.useMemo(() => (n?.length ? l.createElement(P.Z, { feedbackItems: n }) : void 0), [n]);
                    return B ? l.createElement(E, { description: p, images: g, link: N, metaDescription: V ? void 0 : k, name: b, onClick: $, testID: K, thumbnailImage: v, withDarkerInteractiveBackground: c }) : D ? l.createElement(C, { attachment: U, description: p, displayMode: d, domainContext: Z, images: g, link: N, metaDescription: V ? void 0 : k, name: b, onClick: $, renderQuoteTweet: G, socialContext: L, testID: K, thumbnailImage: v, trendFeedbackMenu: q, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(I, { attachment: U, description: p, domainContext: Z, groupedTrends: F, link: N, metaDescription: V ? void 0 : k, name: b, onClick: W, promotedContent: V, promotedLabel: V ? k : void 0, rank: w, renderQuoteTweet: G, testID: K, trendFeedbackMenu: q, withDarkerInteractiveBackground: c });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.c80f5e7a.js.map

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
            var l = a(725516),
                c = a(851623);
            const s = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: o } = e,
                        l = n.useCallback((e) => (a ? n.createElement(i, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: l, style: s.curationControl, testID: c.Z.caret, withDarkBackground: o }) : null;
                });
        },
        78960: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var n = a(459643),
                r = a(942893),
                o = a(351322),
                i = a(807896),
                l = a(202784),
                c = a(325686),
                s = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                u = a(638009),
                g = a(952428),
                h = a(470397),
                E = a(352924),
                b = a(126962),
                C = a(392237);
            function y({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: o, metaDescription: y, name: w, onClick: f, renderQuoteTweet: x, socialContext: T, testID: Z, thumbnailImage: k, trendFeedbackMenu: I, withDarkerInteractiveBackground: M, withTrendingLabel: D }) {
                const _ = l.useContext(u.ZP),
                    z = (0, E.b)(),
                    S = l.createElement(c.Z, { style: "full" === a ? v.content : v.contentHalf }, l.createElement(c.Z, { style: v.horizontalContainer }, l.createElement(c.Z, { style: v.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: v.text, weight: "bold", withInteractiveStyling: !1 }, w), y ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: v.descriptionText }, y) : null, l.createElement(h.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), T ? l.createElement(b.Z, (0, i.Z)({ style: v.socialContext }, T)) : null), k ? l.createElement(c.Z, { style: v.imageContainer }, l.createElement(p.Z, { ratio: C.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, I ? l.createElement(c.Z, { style: v.caret }, I) : null), x ? l.createElement(c.Z, { style: v.quoteTweet }, x({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: v.attachmentWrapper }, e) : null);
                return l.createElement(g.Z, { "aria-labelledby": z, link: o ? _.withAnchorless(o) : void 0, onPress: f, role: o ? void 0 : "article", style: v.root, testID: Z, withDarkerInteractiveBackground: M }, S);
            }
            const v = C.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${C.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${C.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${C.default.theme.spaces.space40} * 2)`, minHeight: `calc(${C.default.theme.spaces.space40} + ${C.default.theme.spaces.space20})`, minWidth: `calc(${C.default.theme.spaces.space40} + ${C.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var w = a(676145),
                f = a(378729),
                x = a(628526),
                T = a(442730);
            function Z({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: o, name: i, onClick: s, promotedContent: m, promotedLabel: p, rank: b, renderQuoteTweet: C, testID: y, trendFeedbackMenu: v, withDarkerInteractiveBackground: Z }) {
                const I = l.useContext(u.ZP),
                    M = (0, E.b)(),
                    D = o ? l.createElement(d.ZP, { color: "gray700", dir: ((_ = o), (0, w.Z)(_) && _.length ? T.Z.getTextDirection(_, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, o) : null;
                var _;
                const z = l.createElement(h.Z, null, b ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, b) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    S = l.createElement(d.ZP, { dir: T.Z.getTextDirection(i), style: k.name, weight: "bold", withHashflags: !0 }, i);
                return l.createElement(g.Z, { "aria-labelledby": M, link: r ? I.withAnchorless(r) : void 0, onPress: s, role: r ? void 0 : "article", style: k.root, testID: y, withDarkerInteractiveBackground: Z }, l.createElement(c.Z, { id: M, style: k.content }, z, S, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, C ? l.createElement(c.Z, { style: k.quoteTweet }, C({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: k.attachmentWrapper }, e) : null, n.length ? l.createElement(x.Z, { groupedTrends: n }) : null, D, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(f.Z, { label: p, promotedContent: m })) : null, v ? l.createElement(c.Z, { style: k.trendFeedbackMenuWrapper }, v) : null));
            }
            const k = C.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var I = a(771099),
                M = a(946409),
                D = a(663550),
                _ = a(725516),
                z = a(443781),
                S = a(301758),
                A = a(927389),
                H = a(276563),
                P = a(370751),
                B = a(260137);
            const { CardNames: L } = H.default,
                R = Object.freeze({ [L.LIVE_EVENT]: !0, [L.MOMENT]: !0, [L.SUMMARY]: !0, [L.SUMMARY_LARGE_IMAGE]: !0, [L.AUDIOSPACE]: !0 }),
                W = (0, P.Z)([L.LIVE_EVENT, L.AUDIOSPACE]);
            const U = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                F = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === L.SUMMARY_LARGE_IMAGE ? L.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!R[e.name] || (!W.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(B.default, { card: a, cardContext: U, cardState: "secondary" })
                        : null;
                },
                N = l.memo(F);
            var V = a(71620),
                O = a(668214),
                $ = a(276001),
                G = a(694180);
            const q = [],
                Q = $.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || q),
                Y = (0, O.Z)()
                    .propsFromState(() => ({ cards: Q }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, V.zr)(e), logTrend: G.dS })),
                j = "trend",
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: o }) => {
                    const c = (0, _.z)(),
                        s = I.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: g, is_ai_trend: h, name: E, promotedMetadata: b, rank: C, socialContext: v, thumbnailImage: w, url: f } = a,
                        { domainContext: x, metaDescription: T } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(z.rC),
                        H = k.isTrue("responsive_web_trends_ui_top_articles") && h,
                        P = v && v.generalContext ? { contextType: v.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: v.generalContext.text, link: v.generalContext.landingUrl ? { pathname: v.generalContext.landingUrl.url } : void 0, userAvatarUrls: v.generalContext.contextImageUrls } : void 0,
                        B = l.useCallback(
                            (e) => {
                                b?.promotedTrendId && r({ promoted_trend_id: b.promotedTrendId, impression_id: b.impressionString, event: e }).catch(t());
                            },
                            [t, r, b],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), B(D.AJ.TREND_VIEW);
                    }, [c, B]);
                    const L = l.useCallback(() => {
                            c.scribeAction("search"), B(D.AJ.TREND_CLICK);
                        }, [c, B]),
                        R = l.useCallback(() => {
                            c.scribeAction("click"), B(D.AJ.TREND_CLICK);
                        }, [c, B]),
                        W = l.useMemo(() => (e?.length ? l.createElement(N, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        U = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, M.s9)(e.url) })) : []), [u]),
                        F = l.useMemo(() => (f ? (0, M.s9)(f) : void 0), [f]),
                        V = l.useMemo(() => (b?.promotedTrendId ? { disclosure_type: b.disclosureType, impression_id: b.promotedTrendId } : void 0), [b]),
                        O = l.useMemo(() => (m?.length ? (e) => l.createElement(S.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        $ = l.useMemo(() => (n?.length ? l.createElement(A.Z, { feedbackItems: n }) : void 0), [n]);
                    return H ? l.createElement(y, { attachment: W, description: p, displayMode: d, domainContext: x, images: g, link: F, metaDescription: V ? void 0 : T, name: E, onClick: R, renderQuoteTweet: O, socialContext: P, testID: j, thumbnailImage: w, trendFeedbackMenu: $, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(Z, { attachment: W, description: p, domainContext: x, groupedTrends: U, link: F, metaDescription: V ? void 0 : T, name: E, onClick: L, promotedContent: V, promotedLabel: V ? T : void 0, rank: C, renderQuoteTweet: O, testID: j, trendFeedbackMenu: $, withDarkerInteractiveBackground: s });
                },
                K = Y(l.memo(J)),
                X = (e) =>
                    o
                        .iH({
                            isFocusable: (0, n.Z)(!0),
                            component: K,
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
                o = a.n(r),
                i = a(731708),
                l = a(392237);
            const c = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? s(e[0], t) : null),
                s = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(i.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = c(e, t);
                    return r ? n.createElement(i.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        69893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.94ec348a.js.map

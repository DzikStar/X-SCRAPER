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
                s = a(851623);
            const c = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: o } = e,
                        l = n.useCallback((e) => (a ? n.createElement(i, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: l, style: c.curationControl, testID: s.Z.caret, withDarkBackground: o }) : null;
                });
        },
        78960: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var n = a(459643),
                r = a(942893),
                o = a(351322),
                i = a(807896),
                l = a(202784),
                s = a(325686),
                c = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                u = a(638009),
                h = a(952428),
                g = a(470397),
                v = a(352924),
                E = a(126962),
                b = a(392237);
            function C({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: o, metaDescription: C, name: w, onClick: Z, renderQuoteTweet: f, socialContext: x, testID: T, thumbnailImage: k, trendFeedbackMenu: I, withDarkerInteractiveBackground: M, withTrendingLabel: D }) {
                const _ = l.useContext(u.ZP),
                    z = (0, v.b)(),
                    A = l.createElement(s.Z, { style: "full" === a ? y.content : y.contentHalf }, l.createElement(s.Z, { style: y.horizontalContainer }, l.createElement(s.Z, { style: y.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: y.text, weight: "bold", withInteractiveStyling: !1 }, w), C ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: y.descriptionText }, C) : null, l.createElement(g.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), x ? l.createElement(E.Z, (0, i.Z)({ style: y.socialContext }, x)) : null), k ? l.createElement(s.Z, { style: y.imageContainer }, l.createElement(p.Z, { ratio: b.default.theme.aspectRatios.square }, l.createElement(c.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, I ? l.createElement(s.Z, { style: y.caret }, I) : null), f ? l.createElement(s.Z, { style: y.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: y.attachmentWrapper }, e) : null);
                return l.createElement(h.Z, { "aria-labelledby": z, link: o ? _.withAnchorless(o) : void 0, onPress: Z, role: o ? void 0 : "article", style: y.root, testID: T, withDarkerInteractiveBackground: M }, A);
            }
            const y = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${b.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${b.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${b.default.theme.spaces.space40} * 2)`, minHeight: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, minWidth: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var w = a(676145),
                Z = a(378729),
                f = a(628526),
                x = a(442730);
            function T({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: o, name: i, onClick: c, promotedContent: m, promotedLabel: p, rank: E, renderQuoteTweet: b, testID: C, trendFeedbackMenu: y, withDarkerInteractiveBackground: T }) {
                const I = l.useContext(u.ZP),
                    M = (0, v.b)(),
                    D = o ? l.createElement(d.ZP, { color: "gray700", dir: ((_ = o), (0, w.Z)(_) && _.length ? x.Z.getTextDirection(_, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, o) : null;
                var _;
                const z = l.createElement(g.Z, null, E ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, E) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    A = l.createElement(d.ZP, { dir: x.Z.getTextDirection(i), style: k.name, weight: "bold", withHashflags: !0 }, i);
                return l.createElement(h.Z, { "aria-labelledby": M, link: r ? I.withAnchorless(r) : void 0, onPress: c, role: r ? void 0 : "article", style: k.root, testID: C, withDarkerInteractiveBackground: T }, l.createElement(s.Z, { id: M, style: k.content }, z, A, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, b ? l.createElement(s.Z, { style: k.quoteTweet }, b({ isCondensed: !0 })) : null, e ? l.createElement(s.Z, { style: k.attachmentWrapper }, e) : null, n.length ? l.createElement(f.Z, { groupedTrends: n }) : null, D, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(s.Z, { style: k.trendFeedbackMenuWrapper }, y) : null));
            }
            const k = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var I = a(771099),
                M = a(946409),
                D = a(663550),
                _ = a(725516),
                z = a(443781),
                A = a(301758),
                S = a(927389),
                H = a(276563),
                P = a(370751),
                B = a(260137);
            const { CardNames: L } = H.default,
                R = Object.freeze({ [L.LIVE_EVENT]: !0, [L.MOMENT]: !0, [L.SUMMARY]: !0, [L.SUMMARY_LARGE_IMAGE]: !0, [L.AUDIOSPACE]: !0 }),
                V = (0, P.Z)([L.LIVE_EVENT, L.AUDIOSPACE]);
            const W = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                U = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === L.SUMMARY_LARGE_IMAGE ? L.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!R[e.name] || (!V.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(B.default, { card: a, cardContext: W, cardState: "secondary" })
                        : null;
                },
                F = l.memo(U);
            var N = a(71620),
                O = a(668214),
                $ = a(276001),
                G = a(694180);
            const q = [],
                Q = $.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || q),
                Y = (0, O.Z)()
                    .propsFromState(() => ({ cards: Q }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, N.zr)(e), logTrend: G.dS })),
                j = "trend",
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: o }) => {
                    const s = (0, _.z)(),
                        c = I.eY(),
                        d = c ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: h, is_ai_trend: g, name: v, promotedMetadata: E, rank: b, socialContext: y, thumbnailImage: w, url: Z } = a,
                        { domainContext: f, metaDescription: x } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(z.rC),
                        H = k.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        B = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && r({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, r, E],
                        );
                    l.useEffect(() => {
                        s.scribeAction("impression"), B(D.AJ.TREND_VIEW);
                    }, [s, B]);
                    const L = l.useCallback(() => {
                            s.scribeAction("search"), B(D.AJ.TREND_CLICK);
                        }, [s, B]),
                        R = l.useCallback(() => {
                            s.scribeAction("click"), B(D.AJ.TREND_CLICK);
                        }, [s, B]),
                        V = l.useMemo(() => (e?.length ? l.createElement(F, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        W = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, M.s9)(e.url) })) : []), [u]),
                        U = l.useMemo(() => (Z ? (0, M.s9)(Z) : void 0), [Z]),
                        N = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        O = l.useMemo(() => (m?.length ? (e) => l.createElement(A.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        $ = l.useMemo(() => (n?.length ? l.createElement(S.Z, { feedbackItems: n }) : void 0), [n]);
                    return H ? l.createElement(C, { attachment: V, description: p, displayMode: d, domainContext: f, images: h, link: U, metaDescription: N ? void 0 : x, name: v, onClick: R, renderQuoteTweet: O, socialContext: P, testID: j, thumbnailImage: w, trendFeedbackMenu: $, withDarkerInteractiveBackground: c, withTrendingLabel: !0 }) : l.createElement(T, { attachment: V, description: p, domainContext: f, groupedTrends: W, link: U, metaDescription: N ? void 0 : x, name: v, onClick: L, promotedContent: N, promotedLabel: N ? x : void 0, rank: b, renderQuoteTweet: O, testID: j, trendFeedbackMenu: $, withDarkerInteractiveBackground: c });
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
            const s = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? c(e[0], t) : null),
                c = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(o().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(i.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                u = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = s(e, t);
                    return r ? n.createElement(i.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        215380: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        818088: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        142496: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.7f07f1ba.js.map

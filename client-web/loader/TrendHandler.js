"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TrendHandler"],
    {
        927389: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(247056),
                o = a(392237);
            const i = (0, a(523561).Z)({ loader: () => a.e("loader.FeedbackSheet").then(a.bind(a, 774426)) });
            var l = a(725516),
                c = a(851623);
            const s = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: o } = e,
                        l = r.useCallback((e) => (a ? r.createElement(i, { actionItems: a, onClose: e }) : null), [a]),
                        d = r.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? r.createElement(n.Z, { onClick: d, renderActionMenu: l, style: s.curationControl, testID: c.Z.caret, withDarkBackground: o }) : null;
                });
        },
        78960: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var r = a(459643),
                n = a(942893),
                o = a(351322),
                i = a(807896),
                l = a(202784),
                c = a(325686),
                s = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                h = a(638009),
                u = a(952428),
                g = a(470397),
                v = a(352924),
                E = a(126962),
                b = a(392237);
            function w({ attachment: e, description: t, displayMode: a, domainContext: r, images: n, link: o, metaDescription: w, name: C, onClick: Z, renderQuoteTweet: f, socialContext: x, testID: T, thumbnailImage: k, trendFeedbackMenu: M, withDarkerInteractiveBackground: I, withTrendingLabel: D }) {
                const z = l.useContext(h.ZP),
                    _ = (0, v.b)(),
                    H = l.createElement(c.Z, { style: "full" === a ? y.content : y.contentHalf }, l.createElement(c.Z, { style: y.horizontalContainer }, l.createElement(c.Z, { style: y.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: y.text, weight: "bold", withInteractiveStyling: !1 }, C), w ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: y.descriptionText }, w) : null, l.createElement(g.Z, null, r ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, r) : null), x ? l.createElement(E.Z, (0, i.Z)({ style: y.socialContext }, x)) : null), k ? l.createElement(c.Z, { style: y.imageContainer }, l.createElement(p.Z, { ratio: b.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, M ? l.createElement(c.Z, { style: y.caret }, M) : null), f ? l.createElement(c.Z, { style: y.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: y.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: o ? z.withAnchorless(o) : void 0, onPress: Z, role: o ? void 0 : "article", style: y.root, testID: T, withDarkerInteractiveBackground: I }, H);
            }
            const y = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${b.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${b.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${b.default.theme.spaces.space40} * 2)`, minHeight: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, minWidth: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var C = a(676145),
                Z = a(378729),
                f = a(628526),
                x = a(442730);
            function T({ attachment: e, description: t, domainContext: a, groupedTrends: r = [], link: n, metaDescription: o, name: i, onClick: s, promotedContent: m, promotedLabel: p, rank: E, renderQuoteTweet: b, testID: w, trendFeedbackMenu: y, withDarkerInteractiveBackground: T }) {
                const M = l.useContext(h.ZP),
                    I = (0, v.b)(),
                    D = o ? l.createElement(d.ZP, { color: "gray700", dir: ((z = o), (0, C.Z)(z) && z.length ? x.Z.getTextDirection(z, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, o) : null;
                var z;
                const _ = l.createElement(g.Z, null, E ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, E) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    H = l.createElement(d.ZP, { dir: x.Z.getTextDirection(i), style: k.name, weight: "bold", withHashflags: !0 }, i);
                return l.createElement(u.Z, { "aria-labelledby": I, link: n ? M.withAnchorless(n) : void 0, onPress: s, role: n ? void 0 : "article", style: k.root, testID: w, withDarkerInteractiveBackground: T }, l.createElement(c.Z, { id: I, style: k.content }, _, H, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, b ? l.createElement(c.Z, { style: k.quoteTweet }, b({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: k.attachmentWrapper }, e) : null, r.length ? l.createElement(f.Z, { groupedTrends: r }) : null, D, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(c.Z, { style: k.trendFeedbackMenuWrapper }, y) : null));
            }
            const k = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var M = a(771099),
                I = a(946409),
                D = a(663550),
                z = a(725516),
                _ = a(443781),
                H = a(301758),
                A = a(927389),
                S = a(276563),
                P = a(370751),
                B = a(260137);
            const { CardNames: L } = S.default,
                V = Object.freeze({ [L.LIVE_EVENT]: !0, [L.MOMENT]: !0, [L.SUMMARY]: !0, [L.SUMMARY_LARGE_IMAGE]: !0, [L.AUDIOSPACE]: !0 }),
                R = (0, P.Z)([L.LIVE_EVENT, L.AUDIOSPACE]);
            const W = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                U = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === L.SUMMARY_LARGE_IMAGE ? L.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!V[e.name] || (!R.has(e.name) && !t));
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
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: r, logTrend: n, withThirdPartyCards: o }) => {
                    const c = (0, z.z)(),
                        s = M.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, name: v, promotedMetadata: E, rank: b, socialContext: y, thumbnailImage: C, url: Z } = a,
                        { domainContext: f, metaDescription: x } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(_.rC),
                        S = k.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        B = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && n({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, n, E],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), B(D.AJ.TREND_VIEW);
                    }, [c, B]);
                    const L = l.useCallback(() => {
                            c.scribeAction("search"), B(D.AJ.TREND_CLICK);
                        }, [c, B]),
                        V = l.useCallback(() => {
                            c.scribeAction("click"), B(D.AJ.TREND_CLICK);
                        }, [c, B]),
                        R = l.useMemo(() => (e?.length ? l.createElement(F, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        W = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, I.s9)(e.url) })) : []), [h]),
                        U = l.useMemo(() => (Z ? (0, I.s9)(Z) : void 0), [Z]),
                        N = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        O = l.useMemo(() => (m?.length ? (e) => l.createElement(H.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        $ = l.useMemo(() => (r?.length ? l.createElement(A.Z, { feedbackItems: r }) : void 0), [r]);
                    return S ? l.createElement(w, { attachment: R, description: p, displayMode: d, domainContext: f, images: u, link: U, metaDescription: N ? void 0 : x, name: v, onClick: V, renderQuoteTweet: O, socialContext: P, testID: j, thumbnailImage: C, trendFeedbackMenu: $, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(T, { attachment: R, description: p, domainContext: f, groupedTrends: W, link: U, metaDescription: N ? void 0 : x, name: v, onClick: L, promotedContent: N, promotedLabel: N ? x : void 0, rank: b, renderQuoteTweet: O, testID: j, trendFeedbackMenu: $, withDarkerInteractiveBackground: s });
                },
                K = Y(l.memo(J)),
                X = (e) =>
                    o
                        .iH({
                            isFocusable: (0, r.Z)(!0),
                            component: K,
                            getScribeDataItem: (e) => {
                                const { name: t, promotedMetadata: a } = e.content,
                                    { clientEventInfo: r } = e.itemMetadata;
                                return n.Z.getTrendItem(t, a, r);
                            },
                        })
                        .getHandler(() => ({ ...e }));
        },
        628526: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(674132),
                o = a.n(n),
                i = a(731708),
                l = a(392237);
            const c = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? s(e[0], t) : null),
                s = (e, t) => r.createElement(o().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => r.createElement(o().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => r.createElement(i.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                h = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const n = c(e, t);
                    return n ? r.createElement(i.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, n) : null;
                };
        },
        215380: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        856661: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        902673: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M8 9h2v2H8z" }), r.createElement("path", { d: "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zM6 7h6v6H6V7zm11.998 10h-12v-2h12v2zM18 13h-4v-2h4v2zm0-4h-4V7h4v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        89085: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        310700: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21.04 1.54L17.5 5.09c-.04-.02-.08-.03-.13-.04L14.3 3H9.7l-3 2H5C3.62 5 2.5 6.12 2.5 7.5v11c0 .46.12.88.34 1.25l-1.3 1.29 1.42 1.42 19.5-19.5-1.42-1.42zM13.7 5l2.33 1.56-2 1.99C13.44 8.2 12.74 8 12 8c-2.21 0-4 1.79-4 4 0 .74.2 1.44.55 2.03L4.5 18.09V7.5c0-.28.22-.5.5-.5h2.3l3-2h3.4zM12 10c.18 0 .35.02.52.07l-2.45 2.45c-.05-.17-.07-.34-.07-.52 0-1.1.9-2 2-2zm7 11H7.24l2-2H19c.28 0 .5-.22.5-.5V9h2v9.5c0 1.38-1.12 2.5-2.5 2.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        730895: (e, t, a) => {
            var r = a(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.2c6af83a.js.map

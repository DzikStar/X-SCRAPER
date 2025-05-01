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
                h = a(952428),
                g = a(470397),
                v = a(352924),
                C = a(126962),
                E = a(392237);
            function b({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: o, metaDescription: b, name: w, onClick: Z, renderQuoteTweet: f, socialContext: x, testID: T, thumbnailImage: k, trendFeedbackMenu: M, withDarkerInteractiveBackground: z, withTrendingLabel: I }) {
                const D = l.useContext(u.ZP),
                    S = (0, v.b)(),
                    _ = l.createElement(c.Z, { style: "full" === a ? y.content : y.contentHalf }, l.createElement(c.Z, { style: y.horizontalContainer }, l.createElement(c.Z, { style: y.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: y.text, weight: "bold", withInteractiveStyling: !1 }, w), b ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: y.descriptionText }, b) : null, l.createElement(g.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), x ? l.createElement(C.Z, (0, i.Z)({ style: y.socialContext }, x)) : null), k ? l.createElement(c.Z, { style: y.imageContainer }, l.createElement(p.Z, { ratio: E.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, M ? l.createElement(c.Z, { style: y.caret }, M) : null), f ? l.createElement(c.Z, { style: y.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: y.attachmentWrapper }, e) : null);
                return l.createElement(h.Z, { "aria-labelledby": S, link: o ? D.withAnchorless(o) : void 0, onPress: Z, role: o ? void 0 : "article", style: y.root, testID: T, withDarkerInteractiveBackground: z }, _);
            }
            const y = E.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${E.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${E.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${E.default.theme.spaces.space40} * 2)`, minHeight: `calc(${E.default.theme.spaces.space40} + ${E.default.theme.spaces.space20})`, minWidth: `calc(${E.default.theme.spaces.space40} + ${E.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var w = a(676145),
                Z = a(378729),
                f = a(628526),
                x = a(442730);
            function T({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: o, name: i, onClick: s, promotedContent: m, promotedLabel: p, rank: C, renderQuoteTweet: E, testID: b, trendFeedbackMenu: y, withDarkerInteractiveBackground: T }) {
                const M = l.useContext(u.ZP),
                    z = (0, v.b)(),
                    I = o ? l.createElement(d.ZP, { color: "gray700", dir: ((D = o), (0, w.Z)(D) && D.length ? x.Z.getTextDirection(D, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, o) : null;
                var D;
                const S = l.createElement(g.Z, null, C ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, C) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    _ = l.createElement(d.ZP, { dir: x.Z.getTextDirection(i), style: k.name, weight: "bold", withHashflags: !0 }, i);
                return l.createElement(h.Z, { "aria-labelledby": z, link: r ? M.withAnchorless(r) : void 0, onPress: s, role: r ? void 0 : "article", style: k.root, testID: b, withDarkerInteractiveBackground: T }, l.createElement(c.Z, { id: z, style: k.content }, S, _, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, E ? l.createElement(c.Z, { style: k.quoteTweet }, E({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: k.attachmentWrapper }, e) : null, n.length ? l.createElement(f.Z, { groupedTrends: n }) : null, I, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(c.Z, { style: k.trendFeedbackMenuWrapper }, y) : null));
            }
            const k = E.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var M = a(771099),
                z = a(946409),
                I = a(663550),
                D = a(725516),
                S = a(443781),
                _ = a(301758),
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
            var O = a(71620),
                $ = a(668214),
                V = a(276001),
                G = a(694180);
            const q = [],
                Q = V.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || q),
                Y = (0, $.Z)()
                    .propsFromState(() => ({ cards: Q }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, O.zr)(e), logTrend: G.dS })),
                j = "trend",
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: o }) => {
                    const c = (0, D.z)(),
                        s = M.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: u, images: h, is_ai_trend: g, name: v, promotedMetadata: C, rank: E, socialContext: y, thumbnailImage: w, url: Z } = a,
                        { domainContext: f, metaDescription: x } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(S.rC),
                        H = k.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        B = l.useCallback(
                            (e) => {
                                C?.promotedTrendId && r({ promoted_trend_id: C.promotedTrendId, impression_id: C.impressionString, event: e }).catch(t());
                            },
                            [t, r, C],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), B(I.AJ.TREND_VIEW);
                    }, [c, B]);
                    const L = l.useCallback(() => {
                            c.scribeAction("search"), B(I.AJ.TREND_CLICK);
                        }, [c, B]),
                        R = l.useCallback(() => {
                            c.scribeAction("click"), B(I.AJ.TREND_CLICK);
                        }, [c, B]),
                        W = l.useMemo(() => (e?.length ? l.createElement(N, { card: e[0], withThirdPartyCards: o }) : void 0), [e, o]),
                        U = l.useMemo(() => (u ? u.map((e) => ({ name: e.name, link: (0, z.s9)(e.url) })) : []), [u]),
                        F = l.useMemo(() => (Z ? (0, z.s9)(Z) : void 0), [Z]),
                        O = l.useMemo(() => (C?.promotedTrendId ? { disclosure_type: C.disclosureType, impression_id: C.promotedTrendId } : void 0), [C]),
                        $ = l.useMemo(() => (m?.length ? (e) => l.createElement(_.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        V = l.useMemo(() => (n?.length ? l.createElement(A.Z, { feedbackItems: n }) : void 0), [n]);
                    return H ? l.createElement(b, { attachment: W, description: p, displayMode: d, domainContext: f, images: h, link: F, metaDescription: O ? void 0 : x, name: v, onClick: R, renderQuoteTweet: $, socialContext: P, testID: j, thumbnailImage: w, trendFeedbackMenu: V, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(T, { attachment: W, description: p, domainContext: f, groupedTrends: U, link: F, metaDescription: O ? void 0 : x, name: v, onClick: L, promotedContent: O, promotedLabel: O ? x : void 0, rank: E, renderQuoteTweet: $, testID: j, trendFeedbackMenu: V, withDarkerInteractiveBackground: s });
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
        428259: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        971657: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        47286: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.12d0a86a.js.map

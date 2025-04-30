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
                C = a(126962),
                E = a(392237);
            function b({ attachment: e, description: t, displayMode: a, domainContext: r, images: n, link: o, metaDescription: b, name: y, onClick: Z, renderQuoteTweet: f, socialContext: x, testID: T, thumbnailImage: k, trendFeedbackMenu: M, withDarkerInteractiveBackground: I, withTrendingLabel: D }) {
                const z = l.useContext(h.ZP),
                    _ = (0, v.b)(),
                    S = l.createElement(c.Z, { style: "full" === a ? w.content : w.contentHalf }, l.createElement(c.Z, { style: w.horizontalContainer }, l.createElement(c.Z, { style: w.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: w.text, weight: "bold", withInteractiveStyling: !1 }, y), b ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: w.descriptionText }, b) : null, l.createElement(g.Z, null, r ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, r) : null), x ? l.createElement(C.Z, (0, i.Z)({ style: w.socialContext }, x)) : null), k ? l.createElement(c.Z, { style: w.imageContainer }, l.createElement(p.Z, { ratio: E.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, M ? l.createElement(c.Z, { style: w.caret }, M) : null), f ? l.createElement(c.Z, { style: w.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: w.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: o ? z.withAnchorless(o) : void 0, onPress: Z, role: o ? void 0 : "article", style: w.root, testID: T, withDarkerInteractiveBackground: I }, S);
            }
            const w = E.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${E.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${E.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${E.default.theme.spaces.space40} * 2)`, minHeight: `calc(${E.default.theme.spaces.space40} + ${E.default.theme.spaces.space20})`, minWidth: `calc(${E.default.theme.spaces.space40} + ${E.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var y = a(676145),
                Z = a(378729),
                f = a(628526),
                x = a(442730);
            function T({ attachment: e, description: t, domainContext: a, groupedTrends: r = [], link: n, metaDescription: o, name: i, onClick: s, promotedContent: m, promotedLabel: p, rank: C, renderQuoteTweet: E, testID: b, trendFeedbackMenu: w, withDarkerInteractiveBackground: T }) {
                const M = l.useContext(h.ZP),
                    I = (0, v.b)(),
                    D = o ? l.createElement(d.ZP, { color: "gray700", dir: ((z = o), (0, y.Z)(z) && z.length ? x.Z.getTextDirection(z, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, o) : null;
                var z;
                const _ = l.createElement(g.Z, null, C ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, C) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    S = l.createElement(d.ZP, { dir: x.Z.getTextDirection(i), style: k.name, weight: "bold", withHashflags: !0 }, i);
                return l.createElement(u.Z, { "aria-labelledby": I, link: n ? M.withAnchorless(n) : void 0, onPress: s, role: n ? void 0 : "article", style: k.root, testID: b, withDarkerInteractiveBackground: T }, l.createElement(c.Z, { id: I, style: k.content }, _, S, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, E ? l.createElement(c.Z, { style: k.quoteTweet }, E({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: k.attachmentWrapper }, e) : null, r.length ? l.createElement(f.Z, { groupedTrends: r }) : null, D, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, w ? l.createElement(c.Z, { style: k.trendFeedbackMenuWrapper }, w) : null));
            }
            const k = E.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var M = a(771099),
                I = a(946409),
                D = a(663550),
                z = a(725516),
                _ = a(443781),
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
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: r, logTrend: n, withThirdPartyCards: o }) => {
                    const c = (0, z.z)(),
                        s = M.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, name: v, promotedMetadata: C, rank: E, socialContext: w, thumbnailImage: y, url: Z } = a,
                        { domainContext: f, metaDescription: x } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(_.rC),
                        H = k.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = w && w.generalContext ? { contextType: w.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: w.generalContext.text, link: w.generalContext.landingUrl ? { pathname: w.generalContext.landingUrl.url } : void 0, userAvatarUrls: w.generalContext.contextImageUrls } : void 0,
                        B = l.useCallback(
                            (e) => {
                                C?.promotedTrendId && n({ promoted_trend_id: C.promotedTrendId, impression_id: C.impressionString, event: e }).catch(t());
                            },
                            [t, n, C],
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
                        U = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, I.s9)(e.url) })) : []), [h]),
                        F = l.useMemo(() => (Z ? (0, I.s9)(Z) : void 0), [Z]),
                        V = l.useMemo(() => (C?.promotedTrendId ? { disclosure_type: C.disclosureType, impression_id: C.promotedTrendId } : void 0), [C]),
                        O = l.useMemo(() => (m?.length ? (e) => l.createElement(S.Z, (0, i.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        $ = l.useMemo(() => (r?.length ? l.createElement(A.Z, { feedbackItems: r }) : void 0), [r]);
                    return H ? l.createElement(b, { attachment: W, description: p, displayMode: d, domainContext: f, images: u, link: F, metaDescription: V ? void 0 : x, name: v, onClick: R, renderQuoteTweet: O, socialContext: P, testID: j, thumbnailImage: y, trendFeedbackMenu: $, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(T, { attachment: W, description: p, domainContext: f, groupedTrends: U, link: F, metaDescription: V ? void 0 : x, name: v, onClick: L, promotedContent: V, promotedLabel: V ? x : void 0, rank: E, renderQuoteTweet: O, testID: j, trendFeedbackMenu: $, withDarkerInteractiveBackground: s });
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
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        262754: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        818088: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        971657: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        69893: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        47286: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                i = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.56e0aa6a.js.map

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
                c = a(851623);
            const s = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: i } = e,
                        l = n.useCallback((e) => (a ? n.createElement(o, { actionItems: a, onClose: e }) : null), [a]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(r.Z, { onClick: d, renderActionMenu: l, style: s.curationControl, testID: c.Z.caret, withDarkBackground: i }) : null;
                });
        },
        691067: (e, t, a) => {
            a.r(t), a.d(t, { default: () => te });
            var n = a(459643),
                r = a(942893),
                i = a(351322),
                o = a(807896),
                l = a(202784),
                c = a(325686),
                s = a(530525),
                d = a(731708),
                m = a(439592),
                p = a(682474),
                h = a(638009),
                u = a(952428),
                g = a(352924),
                v = a(392237);
            function b({ description: e, images: t, link: a, metaDescription: n, name: r, onClick: i, testID: o, thumbnailImage: b, withDarkerInteractiveBackground: w }) {
                const y = l.useContext(h.ZP),
                    f = (0, g.b)(),
                    Z = l.createElement(c.Z, { style: E.content }, l.createElement(c.Z, { style: E.horizontalContainer }, b ? l.createElement(c.Z, { style: E.imageContainer }, l.createElement(p.Z, { ratio: v.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-news-image", aspectMode: m.Z.SQUARE, image: { url: b.original_img_url, height: 120, width: 120 } }))) : null, l.createElement(c.Z, { style: E.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "headline2", style: E.text, weight: "bold", withInteractiveStyling: !1 }, r), n ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: E.descriptionText }, n) : null)));
                return l.createElement(u.Z, { "aria-labelledby": f, link: a ? y.withAnchorless(a) : void 0, onPress: i, role: a ? void 0 : "article", style: E.root, testID: o, withDarkerInteractiveBackground: w }, Z);
            }
            const E = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${v.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginEnd: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.medium, maxHeight: `calc(${v.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${v.default.theme.spaces.space40} * 2)`, minHeight: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, minWidth: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, height: "40%", width: "40%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 } }));
            var w = a(470397),
                y = a(126962);
            function f({ attachment: e, description: t, displayMode: a, domainContext: n, images: r, link: i, metaDescription: b, name: E, onClick: f, renderQuoteTweet: C, socialContext: x, testID: k, thumbnailImage: T, trendFeedbackMenu: D, withDarkerInteractiveBackground: I, withTrendingLabel: z }) {
                const M = l.useContext(h.ZP),
                    _ = (0, g.b)(),
                    H = l.createElement(c.Z, { style: "full" === a ? Z.content : Z.contentHalf }, l.createElement(c.Z, { style: Z.horizontalContainer }, l.createElement(c.Z, { style: Z.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: Z.text, weight: "bold", withInteractiveStyling: !1 }, E), b ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: Z.descriptionText }, b) : null, l.createElement(w.Z, null, n ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, n) : null), x ? l.createElement(y.Z, (0, o.Z)({ style: Z.socialContext }, x)) : null), T ? l.createElement(c.Z, { style: Z.imageContainer }, l.createElement(p.Z, { ratio: v.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: T.original_img_url, height: T.original_img_height, width: T.original_img_width } }))) : null, D ? l.createElement(c.Z, { style: Z.caret }, D) : null), C ? l.createElement(c.Z, { style: Z.quoteTweet }, C({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: Z.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": _, link: i ? M.withAnchorless(i) : void 0, onPress: f, role: i ? void 0 : "article", style: Z.root, testID: k, withDarkerInteractiveBackground: I }, H);
            }
            const Z = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${v.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${v.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${v.default.theme.spaces.space40} * 2)`, minHeight: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, minWidth: `calc(${v.default.theme.spaces.space40} + ${v.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var C = a(676145),
                x = a(378729),
                k = a(628526),
                T = a(442730);
            function D({ attachment: e, description: t, domainContext: a, groupedTrends: n = [], link: r, metaDescription: i, name: o, onClick: s, promotedContent: m, promotedLabel: p, rank: v, renderQuoteTweet: b, testID: E, trendFeedbackMenu: y, withDarkerInteractiveBackground: f }) {
                const Z = l.useContext(h.ZP),
                    D = (0, g.b)(),
                    z = i ? l.createElement(d.ZP, { color: "gray700", dir: ((M = i), (0, C.Z)(M) && M.length ? T.Z.getTextDirection(M, { fromEnd: !0 }) : void 0), size: "subtext2", style: I.metaDescription }, i) : null;
                var M;
                const _ = l.createElement(w.Z, null, v ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, v) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    H = l.createElement(d.ZP, { dir: T.Z.getTextDirection(o), style: I.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": D, link: r ? Z.withAnchorless(r) : void 0, onPress: s, role: r ? void 0 : "article", style: I.root, testID: E, withDarkerInteractiveBackground: f }, l.createElement(c.Z, { id: D, style: I.content }, _, H, t ? l.createElement(d.ZP, { color: "gray700", style: I.description }, t) : null, b ? l.createElement(c.Z, { style: I.quoteTweet }, b({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: I.attachmentWrapper }, e) : null, n.length ? l.createElement(k.Z, { groupedTrends: n }) : null, z, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: I.promotedIndicatorWrapper }, l.createElement(x.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(c.Z, { style: I.trendFeedbackMenuWrapper }, y) : null));
            }
            const I = v.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var z = a(771099),
                M = a(946409),
                _ = a(663550),
                H = a(725516),
                S = a(443781),
                A = a(301758),
                B = a(927389),
                P = a(276563),
                L = a(370751),
                V = a(260137);
            const { CardNames: R } = P.default,
                W = Object.freeze({ [R.LIVE_EVENT]: !0, [R.MOMENT]: !0, [R.SUMMARY]: !0, [R.SUMMARY_LARGE_IMAGE]: !0, [R.AUDIOSPACE]: !0 }),
                $ = (0, L.Z)([R.LIVE_EVENT, R.AUDIOSPACE]);
            const U = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                F = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === R.SUMMARY_LARGE_IMAGE ? R.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!W[e.name] || (!$.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(V.default, { card: a, cardContext: U, cardState: "secondary" })
                        : null;
                },
                N = l.memo(F);
            var O = a(71620),
                G = a(668214),
                q = a(276001),
                Q = a(694180);
            const Y = [],
                j = q.Z.createManyHydratedSelector((e, t) => t.entry.content.associatedCardUrls || Y),
                J = (0, G.Z)()
                    .propsFromState(() => ({ cards: j }))
                    .propsFromActions(({ errorContext: e }) => ({ createLocalApiErrorHandler: (0, O.zr)(e), logTrend: Q.dS })),
                K = "trend",
                X = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: n, logTrend: r, withThirdPartyCards: i }) => {
                    const c = (0, H.z)(),
                        s = z.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, name: v, promotedMetadata: E, rank: w, socialContext: y, thumbnailImage: Z, url: C } = a,
                        { domainContext: x, metaDescription: k } = a.trendMetadata,
                        { featureSwitches: T } = l.useContext(S.rC),
                        I = T.isTrue("responsive_web_trends_ui_top_articles") && g,
                        P = T.isTrue("responsive_web_grok_trend_news_cell_enabled") && g,
                        L = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        V = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && r({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, r, E],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), V(_.AJ.TREND_VIEW);
                    }, [c, V]);
                    const R = l.useCallback(() => {
                            c.scribeAction("search"), V(_.AJ.TREND_CLICK);
                        }, [c, V]),
                        W = l.useCallback(() => {
                            c.scribeAction("click"), V(_.AJ.TREND_CLICK);
                        }, [c, V]),
                        $ = l.useMemo(() => (e?.length ? l.createElement(N, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        U = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, M.s9)(e.url) })) : []), [h]),
                        F = l.useMemo(() => (C ? (0, M.s9)(C) : void 0), [C]),
                        O = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        G = l.useMemo(() => (m?.length ? (e) => l.createElement(A.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        q = l.useMemo(() => (n?.length ? l.createElement(B.Z, { feedbackItems: n }) : void 0), [n]);
                    return P ? l.createElement(b, { description: p, images: u, link: F, metaDescription: O ? void 0 : k, name: v, onClick: W, testID: K, thumbnailImage: Z, withDarkerInteractiveBackground: s }) : I ? l.createElement(f, { attachment: $, description: p, displayMode: d, domainContext: x, images: u, link: F, metaDescription: O ? void 0 : k, name: v, onClick: W, renderQuoteTweet: G, socialContext: L, testID: K, thumbnailImage: Z, trendFeedbackMenu: q, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(D, { attachment: $, description: p, domainContext: x, groupedTrends: U, link: F, metaDescription: O ? void 0 : k, name: v, onClick: R, promotedContent: O, promotedLabel: O ? k : void 0, rank: w, renderQuoteTweet: G, testID: K, trendFeedbackMenu: q, withDarkerInteractiveBackground: s });
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
            a.d(t, { Z: () => h });
            var n = a(202784),
                r = a(674132),
                i = a.n(r),
                o = a(731708),
                l = a(392237);
            const c = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? s(e[0], t) : null),
                s = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => n.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => n.createElement(o.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                h = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const r = c(e, t);
                    return r ? n.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, r) : null;
                };
        },
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        894023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4 7h3v2H4v2h3v2H4v2h3v2H4v2h3v2H2V3h13v5h-2V5H4v2zm18 4v10H10V11h12zm-2 2h-8v2h3v2h-3v2h8v-6z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        856661: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        784732: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var n = a(202784),
                r = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.b7dbbf0a.js.map

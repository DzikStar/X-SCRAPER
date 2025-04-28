"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TrendHandler"],
    {
        927389: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(247056),
                i = a(392237);
            const o = (0, a(523561).Z)({ loader: () => a.e("loader.FeedbackSheet").then(a.bind(a, 774426)) });
            var l = a(725516),
                c = a(851623);
            const s = i.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: i } = e,
                        l = r.useCallback((e) => (a ? r.createElement(o, { actionItems: a, onClose: e }) : null), [a]),
                        d = r.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? r.createElement(n.Z, { onClick: d, renderActionMenu: l, style: s.curationControl, testID: c.Z.caret, withDarkBackground: i }) : null;
                });
        },
        78960: (e, t, a) => {
            a.r(t), a.d(t, { default: () => X });
            var r = a(459643),
                n = a(942893),
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
                g = a(470397),
                v = a(352924),
                E = a(126962),
                b = a(392237);
            function w({ attachment: e, description: t, displayMode: a, domainContext: r, images: n, link: i, metaDescription: w, name: C, onClick: Z, renderQuoteTweet: f, socialContext: x, testID: T, thumbnailImage: k, trendFeedbackMenu: M, withDarkerInteractiveBackground: z, withTrendingLabel: I }) {
                const D = l.useContext(h.ZP),
                    H = (0, v.b)(),
                    _ = l.createElement(c.Z, { style: "full" === a ? y.content : y.contentHalf }, l.createElement(c.Z, { style: y.horizontalContainer }, l.createElement(c.Z, { style: y.textContainer }, l.createElement(d.ZP, { color: "text", numberOfLines: 2, size: "full" === a ? "headline2" : "body", style: y.text, weight: "bold", withInteractiveStyling: !1 }, C), w ? l.createElement(d.ZP, { color: "gray700", numberOfLines: 2, size: "body", style: y.descriptionText }, w) : null, l.createElement(g.Z, null, r ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", withoutTwemojiAndHashflags: !0 }, r) : null), x ? l.createElement(E.Z, (0, o.Z)({ style: y.socialContext }, x)) : null), k ? l.createElement(c.Z, { style: y.imageContainer }, l.createElement(p.Z, { ratio: b.default.theme.aspectRatios.square }, l.createElement(s.Z, { "aria-label": "trend-image", aspectMode: m.Z.SQUARE, image: { url: k.original_img_url, height: k.original_img_height, width: k.original_img_width } }))) : null, M ? l.createElement(c.Z, { style: y.caret }, M) : null), f ? l.createElement(c.Z, { style: y.quoteTweet }, f({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: y.attachmentWrapper }, e) : null);
                return l.createElement(u.Z, { "aria-labelledby": H, link: i ? D.withAnchorless(i) : void 0, onPress: Z, role: i ? void 0 : "article", style: y.root, testID: T, withDarkerInteractiveBackground: z }, _);
            }
            const y = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal }, caret: { marginStart: `calc(${b.default.theme.spaces.space12} * -1)` }, metaDescription: { marginTop: e.spaces.space4 }, imageContainer: { marginStart: e.componentDimensions.gutterHorizontal, borderRadius: e.borderRadii.large, maxHeight: `calc(${b.default.theme.spaces.space40} * 2)`, maxWidth: `calc(${b.default.theme.spaces.space40} * 2)`, minHeight: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, minWidth: `calc(${b.default.theme.spaces.space40} + ${b.default.theme.spaces.space20})`, height: "20%", width: "20%", overflow: "hidden" }, content: { flexGrow: 1, position: "relative", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 }, contentHalf: { flexGrow: 1, position: "relative", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 }, horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, socialContext: { marginTop: e.spaces.space2 }, text: { marginBottom: e.spaces.space4 }, descriptionText: { marginBottom: e.spaces.space4 }, quoteTweet: { marginTop: e.spaces.space8 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 } }));
            var C = a(676145),
                Z = a(378729),
                f = a(628526),
                x = a(442730);
            function T({ attachment: e, description: t, domainContext: a, groupedTrends: r = [], link: n, metaDescription: i, name: o, onClick: s, promotedContent: m, promotedLabel: p, rank: E, renderQuoteTweet: b, testID: w, trendFeedbackMenu: y, withDarkerInteractiveBackground: T }) {
                const M = l.useContext(h.ZP),
                    z = (0, v.b)(),
                    I = i ? l.createElement(d.ZP, { color: "gray700", dir: ((D = i), (0, C.Z)(D) && D.length ? x.Z.getTextDirection(D, { fromEnd: !0 }) : void 0), size: "subtext2", style: k.metaDescription }, i) : null;
                var D;
                const H = l.createElement(g.Z, null, E ? l.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "subtext2" }, E) : null, a ? l.createElement(d.ZP, { color: "gray700", size: "subtext2" }, a) : null),
                    _ = l.createElement(d.ZP, { dir: x.Z.getTextDirection(o), style: k.name, weight: "bold", withHashflags: !0 }, o);
                return l.createElement(u.Z, { "aria-labelledby": z, link: n ? M.withAnchorless(n) : void 0, onPress: s, role: n ? void 0 : "article", style: k.root, testID: w, withDarkerInteractiveBackground: T }, l.createElement(c.Z, { id: z, style: k.content }, H, _, t ? l.createElement(d.ZP, { color: "gray700", style: k.description }, t) : null, b ? l.createElement(c.Z, { style: k.quoteTweet }, b({ isCondensed: !0 })) : null, e ? l.createElement(c.Z, { style: k.attachmentWrapper }, e) : null, r.length ? l.createElement(f.Z, { groupedTrends: r }) : null, I, m ? l.createElement(d.ZP, { color: "gray700", size: "subtext2", style: k.promotedIndicatorWrapper }, l.createElement(Z.Z, { label: p, promotedContent: m })) : null, y ? l.createElement(c.Z, { style: k.trendFeedbackMenuWrapper }, y) : null));
            }
            const k = b.default.create((e) => ({ root: { display: "flex", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, content: { flexGrow: 1, position: "relative" }, name: { marginTop: e.spaces.space2 }, metaInName: { flexShrink: 0 }, nameWrapper: { flexDirection: "row", justifyContent: "space-between", marginEnd: e.spaces.space24 }, description: { marginTop: e.spaces.space2 }, quoteTweet: { marginTop: e.spaces.space4 }, attachmentWrapper: { alignSelf: "stretch", marginBottom: e.spaces.space4, marginTop: e.spaces.space12 }, metaDescription: { marginTop: e.spaces.space4 }, promotedIndicatorWrapper: { marginTop: e.spaces.space4 }, trendFeedbackMenuWrapper: { position: "absolute", top: 1, end: 0 } }));
            var M = a(771099),
                z = a(946409),
                I = a(663550),
                D = a(725516),
                H = a(443781),
                _ = a(301758),
                S = a(927389),
                A = a(276563),
                B = a(370751),
                P = a(260137);
            const { CardNames: V } = A.default,
                L = Object.freeze({ [V.LIVE_EVENT]: !0, [V.MOMENT]: !0, [V.SUMMARY]: !0, [V.SUMMARY_LARGE_IMAGE]: !0, [V.AUDIOSPACE]: !0 }),
                R = (0, B.Z)([V.LIVE_EVENT, V.AUDIOSPACE]);
            const W = { locationKey: "trend", tweetUserId: "TREND_CARD_NO_TWEET_USER_ID" },
                U = ({ card: e, withThirdPartyCards: t }) => {
                    const a = l.useMemo(() => ({ ...e, name: e.name === V.SUMMARY_LARGE_IMAGE ? V.SUMMARY : e.name }), [e]);
                    return (function ({ card: e, withThirdPartyCards: t }) {
                        return !(!L[e.name] || (!R.has(e.name) && !t));
                    })({ card: e, withThirdPartyCards: t })
                        ? l.createElement(P.default, { card: a, cardContext: W, cardState: "secondary" })
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
                J = ({ cards: e, createLocalApiErrorHandler: t, entry: { content: a }, feedbackItems: r, logTrend: n, withThirdPartyCards: i }) => {
                    const c = (0, D.z)(),
                        s = M.eY(),
                        d = s ? "half" : "full",
                        { associatedTweetIds: m, description: p, groupedTrends: h, images: u, is_ai_trend: g, name: v, promotedMetadata: E, rank: b, socialContext: y, thumbnailImage: C, url: Z } = a,
                        { domainContext: f, metaDescription: x } = a.trendMetadata,
                        { featureSwitches: k } = l.useContext(H.rC),
                        A = k.isTrue("responsive_web_trends_ui_top_articles") && g,
                        B = y && y.generalContext ? { contextType: y.generalContext.contextType, avatarSize: "medium", iconSize: "medium", withBottomBorder: !1, withLeftPadding: !1, withTextCentered: !0, textColor: void 0, textSize: void 0, text: y.generalContext.text, link: y.generalContext.landingUrl ? { pathname: y.generalContext.landingUrl.url } : void 0, userAvatarUrls: y.generalContext.contextImageUrls } : void 0,
                        P = l.useCallback(
                            (e) => {
                                E?.promotedTrendId && n({ promoted_trend_id: E.promotedTrendId, impression_id: E.impressionString, event: e }).catch(t());
                            },
                            [t, n, E],
                        );
                    l.useEffect(() => {
                        c.scribeAction("impression"), P(I.AJ.TREND_VIEW);
                    }, [c, P]);
                    const V = l.useCallback(() => {
                            c.scribeAction("search"), P(I.AJ.TREND_CLICK);
                        }, [c, P]),
                        L = l.useCallback(() => {
                            c.scribeAction("click"), P(I.AJ.TREND_CLICK);
                        }, [c, P]),
                        R = l.useMemo(() => (e?.length ? l.createElement(F, { card: e[0], withThirdPartyCards: i }) : void 0), [e, i]),
                        W = l.useMemo(() => (h ? h.map((e) => ({ name: e.name, link: (0, z.s9)(e.url) })) : []), [h]),
                        U = l.useMemo(() => (Z ? (0, z.s9)(Z) : void 0), [Z]),
                        N = l.useMemo(() => (E?.promotedTrendId ? { disclosure_type: E.disclosureType, impression_id: E.promotedTrendId } : void 0), [E]),
                        O = l.useMemo(() => (m?.length ? (e) => l.createElement(_.Z, (0, o.Z)({}, e, { tweetId: m[0], withLink: !0 })) : void 0), [m]),
                        $ = l.useMemo(() => (r?.length ? l.createElement(S.Z, { feedbackItems: r }) : void 0), [r]);
                    return A ? l.createElement(w, { attachment: R, description: p, displayMode: d, domainContext: f, images: u, link: U, metaDescription: N ? void 0 : x, name: v, onClick: L, renderQuoteTweet: O, socialContext: B, testID: j, thumbnailImage: C, trendFeedbackMenu: $, withDarkerInteractiveBackground: s, withTrendingLabel: !0 }) : l.createElement(T, { attachment: R, description: p, domainContext: f, groupedTrends: W, link: U, metaDescription: N ? void 0 : x, name: v, onClick: V, promotedContent: N, promotedLabel: N ? x : void 0, rank: b, renderQuoteTweet: O, testID: j, trendFeedbackMenu: $, withDarkerInteractiveBackground: s });
                },
                K = Y(l.memo(J)),
                X = (e) =>
                    i
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
                i = a.n(n),
                o = a(731708),
                l = a(392237);
            const c = (e, t) => (e.length >= 2 ? d(e, t) : 1 === e.length ? s(e[0], t) : null),
                s = (e, t) => r.createElement(i().I18NFormatMessage, { $i18n: "fe7c309b" }, m(e, t, !0)),
                d = (e, t) => r.createElement(i().I18NFormatMessage, { $i18n: "ea753bf5" }, m(e[0], t, !0), m(e[1], t)),
                m = (e, t, a = !1) => r.createElement(o.ZP, { color: t, link: e.link, size: "subtext2", style: a && p.paddingStart, withHashflags: !0 }, e.name),
                p = l.default.create((e) => ({ root: { marginTop: e.spaces.space4 }, paddingStart: { paddingStart: e.spaces.space2 } })),
                h = ({ groupedTrends: e, linkColor: t, textColor: a = "gray700" }) => {
                    const n = c(e, t);
                    return n ? r.createElement(o.ZP, { color: a, numberOfLines: 2, size: "subtext2", style: p.root }, n) : null;
                };
        },
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        394123: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        894023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4 7h3v2H4v2h3v2H4v2h3v2H4v2h3v2H2V3h13v5h-2V5H4v2zm18 4v10H10V11h12zm-2 2h-8v2h3v2h-3v2h8v-6z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        856661: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        784732: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        474761: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                o = a(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TrendHandler.d00bf7ea.js.map

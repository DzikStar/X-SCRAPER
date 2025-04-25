"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-964cff98"],
    {
        248186: (e, t, r) => {
            r.d(t, { Z: () => k });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                l = r(277660),
                i = r.n(l),
                c = r(107267),
                s = r(370006),
                d = r(167630),
                u = r(392237),
                p = r(674132),
                m = r.n(p),
                g = r(449067),
                f = r(725405),
                h = r(381214),
                y = r(392446),
                b = r(867754),
                w = r(684841),
                E = r(778e3),
                Z = r(701273),
                P = r(512923),
                C = r(367664),
                v = r(534813);
            const I = m().i4fb96c7,
                _ = m().d8661dd4,
                S = ({ activeSubscription: e, content: t, isMobile: r, isTierSwitching: a, premiumPriceConfig: l, selectedProduct: d, setSelectedProduct: u, shouldRemoveExtraStep: p }) => {
                    const m = l.featuredPromotionDetails,
                        v = !!m?.promotion,
                        S = (0, f.Z)(),
                        x = (0, C.Z)(m),
                        [k, T] = o.useState(x);
                    o.useEffect(() => {
                        v && S.scribe({ component: "paywall_with_offer", element: m?.promotion.program_id, action: "impression" });
                    }, [v, m, S]);
                    const M = i()(P.lO, t.apiContent?.header),
                        B = (0, c.useHistory)(),
                        F = t.apiContent?.products?.find((e) => e.product_category === d),
                        O = parseInt(m?.promotion.ends_at_msec || 0, 10),
                        [, D] = (0, y.Z)(O),
                        R = { title: I({ percentage: m?.promotion.metadata.percent_off, premiumTierName: m?.localizedTierName }), subtitle: _, cardTitle: I, cardSubtitle: null, wideImageUrl: "https://abs.twimg.com/images/anniversary-wide-header-v2.png", narrowImageUrl: "https://abs.twimg.com/images/anniversary-mobile-header-v2.png" },
                        A = !a && D > 0 && v;
                    return o.createElement(n.Z, { style: z.root }, o.createElement(n.Z, { style: z.shadow }), o.createElement(g.Z.Configure, { TabBar: () => null, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), o.createElement(s.Z, { backButtonType: "close", onClick: () => B.goBack(), style: z.backButton }), M ? o.createElement(b.Z, { content: t, header: M, isMobile: r, isTierSwitching: a, offerContent: R, offerEndsAtMsec: O, renderOfferContent: A }) : null, o.createElement(n.Z, { style: z.container }, o.createElement(Z.Z, { isMobile: r, selectedInterval: k, setSelectedInterval: T }), t.apiContent?.products ? o.createElement(o.Fragment, null, o.createElement(E.Z, { activeSubscription: e, disclaimerRef: t.apiContent.subscribe_button, isTierSwitching: a, premiumPriceConfig: l, products: t.apiContent.products, selectedInterval: k, selectedProduct: d, setSelectedProduct: u, shouldRemoveExtraStep: p }), o.createElement(h.Z, { products: t.apiContent.products })) : null), p ? o.createElement(w.Z, { activeSubscription: e, disclaimerRef: t.apiContent?.subscribe_button, isTierSwitching: a, premiumPriceConfig: l, productName: F?.title, selectedInterval: k, selectedProduct: d }) : null);
                },
                x = (e) => {
                    const t = (e.content.apiContent?.products || []).map((e) => e.product_category),
                        r = (0, v.Z)(t, { moment: "PremiumSignupPageVisit" });
                    return !Object.values(r).find((e) => null !== e) ? o.createElement(d.Z, null) : o.createElement(S, (0, a.Z)({}, e, { premiumPriceConfig: r }));
                },
                k = o.memo(x),
                z = u.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(52 147 239 / 30%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgba(52, 147, 239, 0.3) 0%, rgb(21 32 44) 100%)" : "radial-gradient(56.15141888052253% 56.15141888052254% at 49.97201160183933% 38.95898881943194%,#273649 0%,rgba(0,0,0,1) 100%)";
                    return { root: { height: "100vh", width: "100%", backgroundColor: e.colors.cellBackground, overflow: "auto" }, shadow: { position: "absolute", top: -300 * e.scaleMultiplier, minHeight: 650 * e.scaleMultiplier, width: "100%", backgroundImage: t }, container: { alignItems: "center", flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto", paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space24 }, backButton: { position: "absolute", marginStart: "none", top: e.spaces.space16, start: e.spaces.space16, zIndex: 1 } };
                });
        },
        960700: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(392237),
                i = r(674132),
                c = r.n(i),
                s = r(188142),
                d = r(287510),
                u = r(930925),
                p = r(961951);
            const m = c().f5fb58b4,
                g = c().i527045e,
                f = ({ catalogItemsForProduct: e, content: { apiContent: t, localContent: r }, footerRef: l, headerFooterOffset: i, referringPage: c, selectedProduct: f, state: { catalogItems: h, paywallDisplayType: b } }) => {
                    const [w, E] = a.useState("Year"),
                        Z = a.useMemo(() => {
                            const { refererContent: e } = r;
                            return e[c ?? ""] ? r?.refererContent[c ?? ""] : e.fallback;
                        }, [r, c]),
                        P = e.find((e) => e.chargeInterval === w);
                    return a.createElement(
                        o.Z,
                        { style: y.root },
                        a.createElement(s.Z, { show: "fullPage" !== b, style: y.dismissButton }),
                        a.createElement(o.Z, { style: y.shadow }),
                        a.createElement(
                            o.Z,
                            { style: [y.content, i] },
                            a.createElement(n.ZP, { align: "center", size: "title1", style: y.title, weight: "heavy" }, Z?.title),
                            a.createElement(n.ZP, { align: "center", size: "headline2" }, Z?.subtitle),
                            a.createElement(
                                o.Z,
                                { style: y.features },
                                Z.features?.map((e) => a.createElement(o.Z, { style: y.feature }, a.createElement(n.ZP, { size: "headline1" }, e?.icon), a.createElement(o.Z, null, a.createElement(n.ZP, { weight: "medium" }, e.header), a.createElement(n.ZP, { color: "gray900", size: "subtext1" }, e.description)))),
                                a.createElement(o.Z, { style: y.feature }, a.createElement(o.Z, { style: y.featureInner }, a.createElement(n.ZP, { weight: "medium" }, m), a.createElement(n.ZP, { color: "gray900", size: "subtext1" }, g))),
                            ),
                        ),
                        a.createElement(d.Z, { footerRef: l }, a.createElement(u.Z, { catalogItems: e, selectedInterval: w, setSelectedInterval: E, variant: "horizontal_blue" }), a.createElement(p.Z, { disclaimerRef: t?.subscribe_button, price: P, variant: "blue" })),
                    );
                },
                h = a.memo(f),
                y = l.default.create((e) => {
                    const t = "light" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(21 32 44) 100%)" : "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(0 0 0) 100%)";
                    return { root: { height: "100vh" }, content: { padding: e.spaces.space16, flexGrow: 1, justifyContent: "center" }, title: { marginBottom: e.spaces.space16 }, emoji: {}, features: { gap: e.spaces.space16, marginTop: e.spaces.space32 }, feature: { flexDirection: "row", padding: e.spaces.space8, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, alignItems: "center", gap: e.spaces.space8 }, featureInner: { gap: e.spaces.space4, maxWidth: "100%" }, shadow: { position: "absolute", minHeight: 150 * e.scaleMultiplier, width: "100%", backgroundImage: t, left: 0, top: 0 }, iconCheckmark: { color: e.colors.blue500 }, dismissButton: { position: "absolute", start: 0, zIndex: 1 } };
                });
        },
        557778: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(392237),
                i = r(674132),
                c = r.n(i),
                s = r(934912),
                d = r(632396),
                u = r(188142),
                p = r(287510),
                m = r(361780),
                g = r(627706);
            const f = c().ab0decc0,
                h = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: l, headerFooterOffset: i, headerRef: c, referringPage: h, selectedProduct: y, selectedProductIndex: w, setSelectedProduct: E, state: Z }) => a.createElement(o.Z, { testID: "webview_paywall_native_layout" }, a.createElement(m.Z, { headerRef: c, style: b.header, withFade: !1 }, a.createElement(u.Z, { show: "fullPage" !== Z.paywallDisplayType, style: b.dismissButton }), a.createElement(n.ZP, { size: "headline2", style: b.pageTitle, weight: "bold" }, f)), a.createElement(o.Z, { style: [b.root, i] }, a.createElement(s.Z, { content: r, referringPage: h }), a.createElement(d.Z, { activeSubscription: null, content: r, isTargettedUpsellFlow: !1, prices: e, products: r.apiContent?.products, referringPage: h, selectedProduct: y, selectedProductIndex: w, setSelectedProduct: E })), a.createElement(p.Z, { footerRef: l }, a.createElement(g.Z, { catalogItemsForProduct: t, content: r, selectedProduct: y }))),
                y = a.memo(h),
                b = l.default.create((e) => ({ root: { overflow: "auto", paddingBottom: e.spaces.space36 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "absolute", start: 0, bottom: 0 }, header: { alignItems: "center", justifyContent: "center", paddingTop: e.spaces.space16 }, offerCard: { marginHorizontal: e.spaces.space16 } }));
        },
        884020: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(392237),
                i = r(952793),
                c = r(192933),
                s = r(278637),
                d = r(612450),
                u = r(188142),
                p = r(287510),
                m = r(961951),
                g = r(968831);
            const f = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: l, headerFooterOffset: f, primaryColor: b, referringPage: w, selectedProduct: E, selectedProductIndex: Z, setSelectedProduct: P, state: { paywallDisplayType: C }, withAnnualPriceMonthly: v }) => {
                    const [I, _] = a.useState(!1),
                        S = t.find((e) => "Year" === e.chargeInterval),
                        x = r.apiContent?.products?.filter((e) => "BlueVerified" === e.product_category || "BlueVerifiedPlus" === e.product_category),
                        k = x?.findIndex((e) => e.product_category === E),
                        z = (0, i.wW)("premium_webview_paywall_offer_video_url"),
                        T = z.length > 0,
                        { subtitle: M, title: B } = (0, g.Z)({ content: r }),
                        F = a.useRef(null),
                        [O, D] = a.useState(!1);
                    return (
                        a.useEffect(() => {
                            const e = () => {
                                F.current && (F.current.style.opacity = 1);
                            };
                            F.current &&
                                F.current.addEventListener("canplaythrough", () => {
                                    D(!0);
                                });
                            const t = F.current;
                            return () => {
                                t && t.removeEventListener("canplaythrough", e);
                            };
                        }, []),
                        a.createElement(o.Z, null, a.createElement(o.Z, { style: h.dismissButtonContainer }, a.createElement(u.Z, { show: "fullPage" !== C, type: "onMediaText" })), a.createElement(o.Z, { style: [h.content, f] }, T ? a.createElement(o.Z, { style: h.videoContainer }, a.createElement(o.Z, { style: h.overlay }), a.createElement("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, ref: F, src: z, style: { ...y.video, ...(O ? h.show : h.hide) } })) : null, a.createElement(o.Z, { style: h.header }, a.createElement(n.ZP, { align: "center", color: T ? "whiteOnColor" : void 0, size: "title1", style: h.title, weight: "bold" }, B), a.createElement(n.ZP, { align: "center", color: T ? "whiteOnColor" : void 0, style: h.description, weight: "medium" }, M)), S?.introductoryOffer?.endsAtMs ? a.createElement(o.Z, { style: h.countdown, testID: "countdown" }, a.createElement(s.Z, { endsAtMsec: S?.introductoryOffer.endsAtMs })) : null, r.apiContent?.products ? a.createElement(o.Z, { style: h.tabs }, a.createElement(d.Z, { primaryColor: b, products: x, selectedProduct: E, setSelectedProduct: P })) : null, a.createElement(o.Z, { style: h.carousel }, a.createElement(c.Z, { content: r, hideTitle: !0, prices: e, products: x, referringPage: w, selectedInterval: "Year", selectedProduct: E, selectedProductIndex: k || 0, setSelectedProduct: P, setShowExtraFeatures: _, showExtraFeatures: I, withExtraFeatures: !0, withFeatureFocus: !1, withOfferCard: !1, withUpsellTier: !1 }))), a.createElement(p.Z, { footerRef: l }, a.createElement(m.Z, { buttonSize: "large", disclaimerRef: r.apiContent?.subscribe_button, price: S, variant: b, withAnnualPriceMonthly: v })))
                    );
                },
                h = l.default.create((e) => ({ carousel: { paddingHorizontal: e.spaces.space16 }, content: { overflow: "auto", paddingBottom: e.spaces.space72 }, header: { paddingTop: e.spaces.space72, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space8 }, description: { marginTop: e.spaces.space8 }, tabs: { marginBottom: e.spaces.space12 }, countdown: { paddingHorizontal: e.spaces.space16 }, videoContainer: { width: "100%", alignSelf: "center", backgroundColor: e.colors.alwaysBlack, position: "absolute" }, overlay: { position: "absolute", backgroundColor: "rgba(0,0,0,.6)", width: "100%", height: "100%", zIndex: 1 }, show: { opacity: 1 }, hide: { opacity: 0 }, dismissButtonContainer: { position: "absolute", zIndex: 1 } })),
                y = { video: { width: "100%", transition: "opacity 1s" } };
        },
        466337: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(392237),
                i = r(674132),
                c = r.n(i),
                s = r(930925),
                d = r(961951),
                u = r(789769);
            const p = c().bb4998fb,
                m = c().a9f397f3,
                g = ({ catalogItemsForProduct: e, content: { apiContent: t, localContent: r }, referringPage: l, selectedProduct: i, state: { catalogItems: c } }) => {
                    const [g, h] = a.useState("Year"),
                        y = e.find((e) => e.chargeInterval === g),
                        b = t?.products?.find((e) => e.product_category === i),
                        w = b?.title,
                        E = a.useMemo(() => {
                            const e = y?.introductoryOffer ? (0, u.u)({ percentage: y.introductoryOffer.percentageSaved, tier: w ?? "", plan: u.Z[g] }) : w;
                            return a.createElement(n.ZP, { size: "title4", weight: "bold" }, e);
                        }, [w, y, g]),
                        Z = a.useMemo(() => {
                            if (!y?.introductoryOffer?.endsAtMs) return null;
                            const e = new Date(parseInt(y?.introductoryOffer.endsAtMs, 10)),
                                t = m(e);
                            return a.createElement(n.ZP, { color: "gray700", style: f.subtitle }, p({ date: t }));
                        }, [y]);
                    return a.createElement(o.Z, { style: f.root, testID: "webview_paywall_one_click_layout" }, E, Z, a.createElement(s.Z, { catalogItems: e, selectedInterval: g, setSelectedInterval: h, variant: "default" }), a.createElement(d.Z, { disclaimerRef: t?.subscribe_button, price: y }));
                },
                f = l.default.create((e) => ({ root: { paddingTop: e.spaces.space36, paddingHorizontal: e.spaces.space24, height: "100vh", backgroundColor: e.colors.gray0 }, header: { flexGrow: 1, justifyContent: "center" }, title: { marginBottom: e.spaces.space16 }, emoji: {}, subtitle: { marginTop: e.spaces.space4 } }));
        },
        130821: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                l = r(992942),
                i = r(439592),
                c = r(731708),
                s = r(674132),
                d = r.n(s),
                u = r(966299),
                p = r(590021),
                m = r(195811),
                g = r(952793),
                f = r(188142),
                h = r(287510),
                y = r(930925),
                b = r(961951);
            const w = d().a1bb9c8a,
                E = d().fb8453c8,
                Z = d().e45b3f30,
                P = d().aaebdc2e,
                C = d().ddf8a412,
                v = d().gfb04ef4,
                I = ({ content: { apiContent: e, localContent: t }, footerRef: r, headerFooterOffset: s, headerRef: d, referringPage: I, selectedProduct: _, state: { catalogItems: x, paywallDisplayType: k } }) => {
                    const z = (0, g.hC)("grok_ios_reasoning_research_name_enabled"),
                        [T, M] = a.useState("Month"),
                        B = x.filter((e) => "BlueVerifiedPlus" === e.productCategory),
                        F = B.find((e) => e.chargeInterval === T),
                        O = "light" === n.default.theme.paletteName,
                        D = "darker" === n.default.theme.paletteName;
                    return a.createElement(
                        o.Z,
                        null,
                        a.createElement(f.Z, { show: "fullPage" !== k, style: S.dismissButton }),
                        a.createElement(
                            o.Z,
                            { style: [S.root, s] },
                            D ? a.createElement(l.Z, { aspectMode: i.Z.COVER, source: u, style: S.headerImage }) : a.createElement(o.Z, { style: S.shadow }),
                            a.createElement(
                                o.Z,
                                { style: S.header },
                                a.createElement(l.Z, { aspectMode: i.Z.COVER, source: O ? p : m, style: S.logo }),
                                a.createElement(c.ZP, { align: "center", size: "title1", style: S.title, weight: "bold" }, w),
                                a.createElement(
                                    o.Z,
                                    { style: S.bullets },
                                    a.createElement(
                                        "ul",
                                        { style: S.list },
                                        [z ? Z : E, P, C, v].map((e, t) => a.createElement("li", { key: `feature_${t}` }, a.createElement(c.ZP, { size: "body", weight: "medium" }, e))),
                                    ),
                                ),
                            ),
                        ),
                        a.createElement(h.Z, { footerRef: r }, a.createElement(y.Z, { catalogItems: B, selectedInterval: T, setSelectedInterval: M, variant: "special" }), a.createElement(b.Z, { disclaimerRef: e?.subscribe_button, price: F, variant: "special" })),
                    );
                },
                _ = a.memo(I),
                S = n.default.create((e) => {
                    const t = "light" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(21 32 44) 100%)" : void 0;
                    return { shadow: { position: "absolute", minHeight: 150 * e.scaleMultiplier, width: "100%", backgroundImage: t, left: 0, top: 0 }, root: { padding: e.spaces.space48 }, header: { flexGrow: 1, justifyContent: "start", alignItems: "center" }, title: { marginBottom: e.spaces.space16 }, bullets: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, logo: { width: "155px", height: "44px", marginBottom: e.spaces.space36, marginTop: 100 }, headerImage: { width: "100%", position: "absolute", start: 0, top: -20, height: 180 }, dismissButton: { position: "absolute", start: 0, zIndex: 1 }, list: { padding: 0, gap: e.spaces.space16, display: "flex", flexDirection: "column" } };
                });
        },
        313511: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                l = r(192933),
                i = r(612450),
                c = r(188142),
                s = r(287510),
                d = r(361780),
                u = r(627706),
                p = r(930925),
                m = r(961951);
            const g = ({ catalogItemsForProduct: e, content: t, footerRef: r, headerFooterOffset: n, headerRef: g, primaryColor: f, referringPage: y, selectedProduct: b, selectedProductIndex: w, setSelectedProduct: E, state: { catalogItems: Z, paywallDisplayType: P }, withExtraFeatures: C, withFeatureFocus: v, withPurchaseSheet: I, withUpsellTier: _ }) => {
                    const [S, x] = a.useState(!1),
                        [k, z] = a.useState("Year"),
                        { apiContent: T } = t,
                        M = e.find((e) => e.chargeInterval === k),
                        B = I ? a.createElement(a.Fragment, null, a.createElement(u.Z, { catalogItemsForProduct: e, content: t, selectedProduct: b, variant: f })) : a.createElement(a.Fragment, null, a.createElement(p.Z, { catalogItems: e, selectedInterval: k, setSelectedInterval: z, variant: "gold" === f ? "horizontal_gold" : "horizontal_blue" }), a.createElement(m.Z, { disclaimerRef: T?.subscribe_button, price: M, variant: f }));
                    return a.createElement(o.Z, null, a.createElement(d.Z, { headerRef: g, withFade: !0 }, a.createElement(c.Z, { show: "fullPage" !== P }), a.createElement(o.Z, { style: h.tabContainer }, T?.products ? a.createElement(i.Z, { onChange: () => x(!1), primaryColor: f, products: T.products, selectedProduct: b, setSelectedProduct: E }) : null)), a.createElement(o.Z, { style: [h.content, n] }, T?.products ? a.createElement(l.Z, { content: t, prices: Z, products: T.products, referringPage: y, selectedInterval: k, selectedProduct: b, selectedProductIndex: w, setSelectedProduct: E, setShowExtraFeatures: x, showExtraFeatures: S, withExtraFeatures: C, withFeatureFocus: v, withOfferCard: !0, withUpsellTier: _ }) : null), a.createElement(s.Z, { footerRef: r }, B));
                },
                f = a.memo(g),
                h = n.default.create((e) => ({ header: { flexGrow: 1, justifyContent: "center" }, content: { overflow: "auto", paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space24 }, tabContainer: { flexDirection: "row", flexGrow: 1, justifyContent: "center" } }));
        },
        285919: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                l = r(992942),
                i = r(731708),
                c = r(196670),
                s = r(885216),
                d = r(310456),
                u = r(607178),
                p = r(13266),
                m = r(439607),
                g = r(145278),
                f = r(366489);
            const h = ({ content: e, prices: t, productCategory: r, productContent: h, referringPage: b, selectedInterval: w, selectedProduct: E, selectedProductIndex: Z, setSelectedProduct: P, setShowAllFeaturesPage: C, setShowExtraFeatures: v, showExtraFeatures: I, withExtraFeatures: _, withUpsellTier: S }) => {
                    const x = !!t.find((e) => e.introductoryOffer && e.productCategory === r)?.introductoryOffer,
                        k = e.localContent.productContent[r].FeatureGraphics,
                        z = k?.find((e) => "adsRemoved" === e.id),
                        T = k?.find((e) => "boostedReplies" === e.id),
                        M = k?.find((e) => "grok" === e.id),
                        B = "light" === n.default.theme.paletteName ? n.default.theme.paletteName : "dark",
                        F = r === d.p.BlueVerified,
                        O = r === d.p.BlueVerifiedPlus,
                        [D, R] = a.useState({ width: 200, height: 70 });
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(o.Z, null),
                        x
                            ? null
                            : a.createElement(
                                  o.Z,
                                  { style: y.containerMargin },
                                  a.createElement(
                                      o.Z,
                                      { style: y.tierBadge },
                                      a.createElement(l.Z, { source: "light" === n.default.theme.paletteName ? p : u, style: [y.tierFrame, { width: D.width, height: D.height }] }),
                                      a.createElement(
                                          o.Z,
                                          {
                                              onLayout: (e) => {
                                                  const { width: t } = e.nativeEvent.layout,
                                                      r = Math.max(200, t + 24);
                                                  R({ width: r, height: r / (200 / 70) });
                                              },
                                              style: y.centerContainer,
                                          },
                                          a.createElement(l.Z, { source: "light" === n.default.theme.paletteName ? c : s, style: y.XLogo }),
                                          a.createElement(i.ZP, { style: y.textStyle }, h.productName),
                                      ),
                                  ),
                                  a.createElement(m.Z, { activeIndex: Z, totalDots: e.apiContent?.products ? e.apiContent.products.length : Object.keys(e.localContent.productContent).length }),
                                  z && T && a.createElement(o.Z, { style: y.progressCirclesContainer }, a.createElement(o.Z, { style: y.circleWrapper }, a.createElement(o.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Ads Removed", source: z?.image[B], style: F ? y.premiumCircleImage : y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: y.circleTextEnlarged }, (0, f.a)(z?.level, 5))), a.createElement(i.ZP, { style: y.circleLabel }, z?.label)), a.createElement(o.Z, { style: y.circleWrapper }, a.createElement(o.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Boosted Reply", source: T?.image[B], style: F ? y.premiumCircleImage : y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [y.circleText, O && { top: "58%" }, F && { transform: [{ translateX: "-45%" }] }] }, (0, f.a)(T?.level, 3))), a.createElement(i.ZP, { style: y.circleLabel }, T?.label)), M && a.createElement(o.Z, { style: y.circleWrapper }, a.createElement(o.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Grok", source: M?.image[B], style: y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [y.circleText, y.customTextWidth] }, (0, f.a)(M?.level, 7))), a.createElement(i.ZP, { style: y.circleLabel }, M?.label))),
                              ),
                        a.createElement(g.Z, { productCategory: r, productContent: h, setShowAllFeaturesPage: C }),
                    );
                },
                y = n.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(70% 36% at 50% 18%, rgb(108 161 150 / 30%) 15%, rgb(255 255 255) 90%)" : "dark" === e.paletteName ? "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(21,32,44) 100%)" : "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(0,0,0) 100%)";
                    return {
                        progressCirclesContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: e.spaces.space12 },
                        circleWrapper: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 },
                        circleLabel: { marginTop: e.spaces.space8, color: e.colors.gray700, fontSize: e.fontSizes.subtext3, textAlign: "center" },
                        imageContainer: { position: "relative", alignItems: "center", justifyContent: "center" },
                        premiumCircleImage: { width: 72, height: 72, alignSelf: "center" },
                        premiumPlusCircleImage: { width: 68, height: 68, alignSelf: "center" },
                        circleText: { position: "absolute", left: "50%", transform: [{ translateX: "-50%" }], top: "50%", color: e.colors.green900, fontSize: e.fontSizes.subtext3, fontWeight: "bold" },
                        customTextWidth: { top: "55%", width: "max-content" },
                        circleTextEnlarged: { position: "absolute", color: e.colors.green900, fontSize: e.fontSizes.headline2, fontWeight: "bold" },
                        featureContainer: { gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, marginTop: e.spaces.space20 },
                        feature: { flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space8 },
                        icon: { marginStart: e.spaces.space4, marginEnd: e.spaces.space8, maxWidth: 20 },
                        textContainer: { flexDirection: "column", flexShrink: 1, marginStart: e.spaces.space4 },
                        heading: { marginBottom: e.spaces.space2, fontSize: e.fontSizes.body },
                        description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 },
                        wrapper: { alignItems: "center" },
                        backgroundImage: { position: "absolute", start: 0, top: 0, width: 200, height: 200 },
                        shadow: { position: "absolute", minHeight: 300 * e.scaleMultiplier, width: "100%", height: "100%", backgroundImage: t },
                        containerMargin: { marginTop: e.spaces.space12 },
                        dynamicHeaderContainer: { marginStart: e.spaces.space8 },
                        tierBadge: { position: "relative", justifyContent: "center", alignItems: "center", marginBottom: e.spaces.space24 },
                        tierFrame: { width: 200, height: 70, resizeMode: "contain" },
                        centerText: { position: "absolute", textAlign: "center", fontSize: e.fontSizes.title3, fontWeight: "700", color: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.whiteOnColor },
                        centerContainer: { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center" },
                        XLogo: { width: 32, height: 32, resizeMode: "contain" },
                        textStyle: { fontSize: e.fontSizes.title3, fontWeight: "700", color: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.whiteOnColor, marginLeft: e.spaces.space8 },
                        featuresReplyboostAdsWrapper: { width: 420, height: 120, alignItems: "center", justifyContent: "center", alignSelf: "center" },
                        featuresImage: { width: "100%", height: "100%" },
                        benefitsButton: { width: "100%", paddingVertical: e.spaces.space8, paddingHorizontal: 0, alignItems: "flex-start", marginTop: e.spaces.space8, marginBottom: e.spaces.space28, borderWidth: 0, borderBottomWidth: 0, borderColor: "transparent" },
                        buttonContent: { flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" },
                        buttonText: { fontSize: 14, fontWeight: "600", color: e.colors.gray1000, flex: 1, textAlign: "left" },
                        arrowIcon: { fontSize: 16, color: e.colors.gray500 },
                    };
                });
        },
        763419: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                l = r(815858),
                i = r(138099),
                c = r(392237),
                s = r(674132),
                d = r.n(s),
                u = r(192933),
                p = r(934912),
                m = r(330463),
                g = r(188142),
                f = r(137429),
                h = r(287510),
                y = r(627706),
                b = r(930925),
                w = r(961951),
                E = r(733569);
            const Z = d().b601cfbb,
                P = d().i3e90e20,
                C = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: s, headerFooterOffset: d, headerRef: C, referringPage: v, selectedProduct: _, selectedProductIndex: S, setSelectedProduct: x, state: k, withIntervalSelector: z, withPurchaseSheet: T }) => {
                    const [M, B] = o.useState("Year"),
                        F = t.find((e) => e.chargeInterval === M),
                        O = t.find((e) => "Month" === e.chargeInterval),
                        D = O ? Z({ price: O.localisedMonthlyPrice || "undefined" }) : P,
                        [R, A] = o.useState(!1);
                    r.localContent = E.N3;
                    const W = T ? o.createElement(y.Z, { catalogItemsForProduct: t, content: r, label: D, selectedProduct: _ }) : z ? o.createElement(o.Fragment, null, o.createElement(b.Z, { catalogItems: t, selectedInterval: M, setSelectedInterval: B, variant: "horizontal_green" }), o.createElement(w.Z, { disclaimerRef: r.apiContent?.subscribe_button, price: F, variant: "special" })) : o.createElement(f.Z, { catalogItems: e, catalogItemsForProduct: t, content: r }),
                        H = !!v && p.k.some((e) => v.includes(e)),
                        N = T ? (H ? 1e3 * c.default.theme.scaleMultiplier : 950 * c.default.theme.scaleMultiplier) : z ? (H ? 1300 * c.default.theme.scaleMultiplier : 1200 * c.default.theme.scaleMultiplier) : H ? 1200 * c.default.theme.scaleMultiplier : 1100 * c.default.theme.scaleMultiplier;
                    return o.createElement(n.Z, { testID: "webview_paywall_v2_layout" }, R ? o.createElement(l.Z, { animateMount: !0, duration: "normal", show: R, type: "slide" }, o.createElement(i.Z, { enableMaskForDismiss: !0, onMaskClick: () => A(!1), style: I.sheetOuter, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, o.createElement(n.Z, { style: I.sheet }, o.createElement(m.Z, { catalogItems: e, content: r, selectedProduct: _, setShowAllFeaturesPage: A })))) : null, o.createElement(n.Z, { style: [I.root, I.shadow, { minHeight: N }] }, o.createElement(n.Z, { style: I.containerMargin }, o.createElement(g.Z, { show: "fullPage" !== k.paywallDisplayType, style: I.dismissButton, variant: "darkMode" }), o.createElement(n.Z, { style: I.dynamicHeaderContainer }, o.createElement(p.Z, { content: r, referringPage: v, withoutDescription: !0 })), o.createElement(n.Z, { style: d }, r.apiContent?.products ? o.createElement(u.Z, { content: r, prices: e, productListLayout: "V2", products: r.apiContent.products, referringPage: v, selectedInterval: "Year", selectedProduct: _, selectedProductIndex: S, setSelectedProduct: x, setShowAllFeaturesPage: A, setShowExtraFeatures: () => {}, showExtraFeatures: !1, withExtraFeatures: !1, withOfferCard: !0, withUpsellTier: !1 }) : null))), !R && o.createElement(h.Z, (0, a.Z)({ footerRef: s }, T || z ? {} : { variant: "condensed" }), o.createElement(n.Z, { style: I.footerContainer }, W)));
                },
                v = o.memo(C),
                I = c.default.create((e) => ({ root: { overflow: "auto" }, shadow: { position: "absolute", width: "100%", height: "100%", backgroundImage: "light" === e.paletteName ? "radial-gradient(70% 36% at 50% 18%, rgb(108 161 150 / 30%) 15%, rgb(255 255 255) 90%)" : "dark" === e.paletteName ? "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(21,32,44) 100%)" : "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(0,0,0) 100%)" }, containerMargin: { marginTop: e.spaces.space56 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "absolute", start: e.spaces.space8, width: "fit-content", zIndex: 10 }, header: { alignItems: "center", justifyContent: "center", position: "fixed", zIndex: 1, height: e.spaces.space2, width: e.spaces.space2 }, dynamicHeaderContainer: { alignSelf: "center", maxWidth: "70%" }, offerCard: { marginHorizontal: e.spaces.space16 }, footerContainer: { paddingBottom: e.spaces.space8 }, sheetOuter: { backgroundColor: e.colors.gray0 }, sheet: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space8 }, pill: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, position: "absolute", top: "50%", end: "3%", transform: [{ translateY: "-50%" }], zIndex: 1 }, pillText: { color: e.colors.whiteOnColor, fontSize: e.fontSizes.subtext3, fontWeight: "normal" } }));
        },
        960844: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(325686),
                n = r(392237),
                l = r(992942),
                i = r(731708),
                c = r(144251),
                s = r(310456),
                d = r(145278),
                u = r(366489);
            const p = ({ content: e, productCategory: t, productContent: r, setShowAllFeaturesPage: p }) => {
                    const g = e.localContent.productContent[t].FeatureGraphics,
                        f = g?.find((e) => "adsRemoved" === e.id),
                        h = g?.find((e) => "boostedReplies" === e.id),
                        y = g?.find((e) => "grok" === e.id),
                        b = g?.find((e) => "verified" === e.id),
                        w = "light" === n.default.theme.paletteName ? n.default.theme.paletteName : "dark",
                        E = t === s.p.BlueVerified,
                        Z = t === s.p.BlueVerifiedPlus;
                    return a.createElement(a.Fragment, null, a.createElement(o.Z, { style: m.shadow }), f && h && a.createElement(o.Z, { style: m.progressCirclesContainer }, a.createElement(o.Z, { style: m.circleWrapper }, a.createElement(o.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Ads Removed", source: f?.image[w], style: E ? m.premiumCircleImage : m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: m.circleTextEnlarged }, (0, u.a)(f?.level, 5))), a.createElement(i.ZP, { style: m.circleLabel }, f?.label)), b && !Z && a.createElement(o.Z, { style: m.circleWrapper }, a.createElement(o.Z, { style: m.imageContainer }, a.createElement(c.default, { style: [m.premiumCircleImage, "light" !== w ? { color: "white" } : null] })), a.createElement(i.ZP, { style: m.circleLabel }, b?.label)), a.createElement(o.Z, { style: m.circleWrapper }, a.createElement(o.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Boosted Reply", source: h?.image[w], style: m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [m.circleText, Z && { top: "58%" }, E && { transform: [{ translateX: "-45%" }] }] }, (0, u.a)(h?.level, 3))), a.createElement(i.ZP, { style: m.circleLabel }, h?.label)), y && a.createElement(o.Z, { style: m.circleWrapper }, a.createElement(o.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Grok", source: y?.image[w], style: m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [m.circleText, m.customTextWidth] }, (0, u.a)(y?.level, 7))), a.createElement(i.ZP, { style: m.circleLabel }, y?.label))), a.createElement(d.Z, { productCategory: t, productContent: r, setShowAllFeaturesPage: p, variant: "condensed" }));
                },
                m = n.default.create((e) => {
                    const t = "light" === e.paletteName ? e.colors.white : e.colors.gray0;
                    return { shadow: { position: "absolute", minHeight: 300 * e.scaleMultiplier, borderRadius: e.spaces.space16, width: "95%", height: "100%", backgroundColor: t }, progressCirclesContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: e.spaces.space12 }, circleWrapper: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, circleLabel: { marginTop: e.spaces.space8, color: e.colors.gray700, fontSize: e.fontSizes.subtext3, textAlign: "center" }, imageContainer: { position: "relative", alignItems: "center", justifyContent: "center" }, premiumCircleImage: { width: 65, height: 65, alignSelf: "center" }, premiumPlusCircleImage: { width: 64, height: 64, alignSelf: "center" }, circleText: { position: "absolute", left: "50%", transform: [{ translateX: "-50%" }], top: "50%", color: e.colors.gray1100, fontSize: e.fontSizes.subtext3, fontWeight: "bold" }, customTextWidth: { top: "55%", width: "max-content" }, circleTextEnlarged: { position: "absolute", color: e.colors.gray1100, fontSize: e.fontSizes.headline2, fontWeight: "bold" } };
                });
        },
        689609: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                l = r(815858),
                i = r(138099),
                c = r(992942),
                s = r(154003),
                d = r(392237),
                u = r(674132),
                p = r.n(u),
                m = r(716110),
                g = r(192933),
                f = r(934912),
                h = r(330463),
                y = r(188142),
                b = r(137429),
                w = r(287510),
                E = r(627706),
                Z = r(733569);
            const P = p().b601cfbb,
                C = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: d, headerFooterOffset: u, headerRef: p, referringPage: C, selectedProduct: v, selectedProductIndex: _, setSelectedProduct: S, state: x, withPurchaseSheet: k }) => {
                    const z = t.find((e) => "Month" === e.chargeInterval),
                        T = z ? P({ price: z.localisedMonthlyPrice || "undefined" }) : "Currently unavailable",
                        [M, B] = o.useState(!1);
                    r.localContent = Z.jc;
                    const F = M ? o.createElement(l.Z, { animateMount: !0, duration: "normal", show: M, type: "slide" }, o.createElement(i.Z, { enableMaskForDismiss: !0, onMaskClick: () => B(!1), style: I.sheetOuter, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, o.createElement(n.Z, { style: I.sheet }, o.createElement(h.Z, { catalogItems: e, content: r, selectedProduct: v, setShowAllFeaturesPage: B })))) : null;
                    return o.createElement(
                        n.Z,
                        { style: I.container, testID: "webview_paywall_v2_layout" },
                        o.createElement(
                            n.Z,
                            { style: I.root },
                            o.createElement(c.Z, { source: m, style: I.topImage }),
                            F,
                            o.createElement(
                                n.Z,
                                { style: I.contentContainer },
                                o.createElement(y.Z, { show: "fullPage" !== x.paywallDisplayType, style: I.dismissButton, variant: "darkMode" }),
                                o.createElement(n.Z, { style: I.dynamicHeaderContainer }, o.createElement(f.Z, { content: r, fallbackDescription: r.localContent.refererContent.fallback.subtitle || "", fallbackHeader: r.localContent.refererContent.fallback.title, referringPage: C, variant: "darkMode" })),
                                o.createElement(
                                    n.Z,
                                    { style: I.buttonContainer },
                                    r.apiContent?.products?.map((e) =>
                                        o.createElement(
                                            s.ZP,
                                            (0, a.Z)(
                                                {
                                                    backgroundColor: "alwaysDarkGray50",
                                                    borderColor: "transparent",
                                                    color: "white",
                                                    fontWeight: "medium",
                                                    key: e.product_category,
                                                    onPress: () => {
                                                        var t;
                                                        (t = e.product_category) && S(t);
                                                    },
                                                    size: "medium",
                                                    style: I.button,
                                                    textSizeOverride: "body",
                                                },
                                                e.product_category !== v ? { type: "onMediaOutlined" } : {},
                                            ),
                                            e.title,
                                        ),
                                    ),
                                ),
                                o.createElement(n.Z, { style: [u, I.marginContainer] }, r.apiContent?.products ? o.createElement(g.Z, { content: r, prices: e, productListLayout: "V3", products: r.apiContent.products, referringPage: C, selectedInterval: "Year", selectedProduct: v, selectedProductIndex: _, setSelectedProduct: S, setShowAllFeaturesPage: B, setShowExtraFeatures: () => {}, showExtraFeatures: !1, withExtraFeatures: !1, withOfferCard: !0, withUpsellTier: !1 }) : null),
                            ),
                        ),
                        !M && o.createElement(w.Z, { footerRef: d, variant: "condensed" }, o.createElement(n.Z, { style: I.footerContainer }, k ? o.createElement(E.Z, { catalogItemsForProduct: t, content: r, label: T, selectedProduct: v }) : o.createElement(b.Z, { catalogItems: e, catalogItemsForProduct: t, content: r }))),
                    );
                },
                v = o.memo(C),
                I = d.default.create((e) => ({ container: { backgroundColor: "black", minHeight: "100vh" }, root: { flex: 1, backgroundColor: "black", minHeight: "100%", position: "relative" }, topImage: { position: "absolute", top: 0, width: "100%", height: 350, resizeMode: "cover", zIndex: 1 }, contentContainer: { zIndex: 2, paddingTop: e.spaces.space64 }, customText: { color: "white", fontSize: e.fontSizes.body, textAlign: "center", opacity: 1 }, dynamicHeaderContainer: { alignSelf: "start", paddingStart: e.spaces.space8, maxWidth: "100%" }, marginContainer: { marginTop: d.default.theme.spaces.space24 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "relative", width: "fit-content", marginStart: e.spaces.space4 }, header: { alignItems: "center", justifyContent: "center", position: "fixed", zIndex: 1, height: e.spaces.space2, width: e.spaces.space2 }, offerCard: { marginHorizontal: e.spaces.space16 }, footerContainer: { paddingBottom: e.spaces.space8 }, sheetOuter: { backgroundColor: e.colors.gray0, zIndex: 3 }, sheet: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space8 }, buttonContainer: { flexDirection: "row", alignItems: "center", marginStart: e.spaces.space16, marginTop: e.spaces.space16, gap: e.spaces.space8 }, button: { maxWidth: "fit-content", fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium } }));
        },
        789769: (e, t, r) => {
            r.d(t, { Z: () => l, u: () => n });
            var a = r(674132),
                o = r.n(a);
            const n = o().f65e7e91,
                l = { Year: o().b9a4d8c6, Month: o().a3a4e8f8 };
        },
        806859: (e, t, r) => {
            r.d(t, { Z: () => l });
            const a = Object.freeze({ default: "default", one_click: "one_click", feature_focused: "feature_focused", v1_1_1: "v1_1_1", v1_1_2: "v1_1_2", v1_2_1: "v1_2_1", v1_2_2: "v1_2_2", v1_3_1: "v1_3_1", v1_3_1_dynamic: "v1_3_1_dynamic", v1_3_1_blue: "v1_3_1_blue", v1_3_2: "v1_3_2", v1_3_2_dynamic: "v1_3_2_dynamic", v1_3_2_blue: "v1_3_2_blue", offer_v1_1: "offer_v1_1", offer_v1_2: "offer_v1_2", offer_v2_1: "offer_v2_1", offer_v2_2: "offer_v2_2", special: "special", v2: "v2", v2_2: "v2_2", v2_3: "v2_3", v3: "v3" }),
                o = ["offer_v1_1", "offer_v1_2", "offer_v2_1", "offer_v2_2"],
                n = (e) => {
                    switch (e) {
                        case "month":
                            return "Month";
                        case "year":
                            return "Year";
                    }
                },
                l = (e) => {
                    const t = { catalogItems: [], status: "loading", paywallDesignVariant: "default", paywallDisplayType: "fullPage", printDebug: !1 };
                    return (
                        e?.printDebug && "boolean" == typeof e?.printDebug && (t.printDebug = e.printDebug),
                        e?.displayType &&
                            "string" == typeof e?.displayType &&
                            (t.paywallDisplayType = ((e) => {
                                switch (e) {
                                    case "fullPage":
                                        return "fullPage";
                                    case "fullWithoutDismiss":
                                        return "fullWithoutDismiss";
                                    case "half":
                                        return "half";
                                    default:
                                        return "other";
                                }
                            })(e.displayType)),
                        e.catalogItems &&
                            e.catalogItems.length > 0 &&
                            (t.catalogItems = e.catalogItems.map((e) =>
                                ((e) => {
                                    const t = { productCategory: null, productAppStoreID: null, localisedMonthlyPrice: null, localisedYearlyPrice: null, chargeInterval: null, rawPrice: null, introductoryOffer: void 0 };
                                    if (
                                        (e?.productAppStoreID && "string" == typeof e?.productAppStoreID && (t.productAppStoreID = e.productAppStoreID),
                                        e?.productCategory &&
                                            "string" == typeof e?.productCategory &&
                                            (t.productCategory = ((e) => {
                                                switch (e) {
                                                    case "blueVerified":
                                                        return "BlueVerified";
                                                    case "blueVerifiedPlus":
                                                        return "BlueVerifiedPlus";
                                                    case "premiumBasic":
                                                        return "PremiumBasic";
                                                }
                                            })(e.productCategory)),
                                        e?.subscriptionPeriodUnit && "string" == typeof e?.subscriptionPeriodUnit && (t.chargeInterval = n(e.subscriptionPeriodUnit)),
                                        e?.localisedMonthlyPrice && "string" == typeof e?.localisedMonthlyPrice && (t.localisedMonthlyPrice = e.localisedMonthlyPrice),
                                        e?.localisedYearlyPrice && "string" == typeof e?.localisedYearlyPrice && (t.localisedYearlyPrice = e.localisedYearlyPrice),
                                        e?.price && "number" == typeof e?.price && (t.rawPrice = e.price),
                                        e?.price && "number" == typeof e?.price && e?.introductoryOffer && "object" == typeof e?.introductoryOffer && e?.introductoryOffer?.localisedYearlyPrice && "string" == typeof e?.introductoryOffer?.localisedYearlyPrice && e?.introductoryOffer?.localisedMonthlyPrice && "string" == typeof e?.introductoryOffer?.localisedMonthlyPrice && e?.introductoryOffer?.period && "string" == typeof e?.introductoryOffer?.period && e?.introductoryOffer?.periodCount && "number" == typeof e?.introductoryOffer?.periodCount && e?.introductoryOffer?.endsAtMs && "number" == typeof e?.introductoryOffer?.endsAtMs && e?.introductoryOffer?.price && "number" == typeof e?.introductoryOffer?.price)
                                    ) {
                                        const r = Math.floor(((e?.price - e?.introductoryOffer?.price) / e.price) * 100);
                                        t.introductoryOffer = { localisedYearlyPrice: e?.introductoryOffer?.localisedYearlyPrice, localisedMonthlyPrice: e?.introductoryOffer?.localisedMonthlyPrice, chargeInterval: n(e?.introductoryOffer?.period), periodCount: e?.introductoryOffer?.periodCount, endsAtMs: e?.introductoryOffer?.endsAtMs, rawPrice: e?.introductoryOffer?.price, percentageSaved: r };
                                    }
                                    return t;
                                })(e),
                            )),
                        e.status && ["loading", "other"].includes(e.status) && (t.status = e.status),
                        e?.paywallDesignVariant &&
                            "string" == typeof e?.paywallDesignVariant &&
                            (t.paywallDesignVariant = ((e, t) => {
                                let r = a[e] ?? "default";
                                return o.includes(r) && !t.find((e) => !!e.introductoryOffer) && (r = "default"), r;
                            })(e.paywallDesignVariant, t.catalogItems)),
                        t
                    );
                };
        },
        366489: (e, t, r) => {
            r.d(t, { a: () => a });
            const a = (e, t) => (e ? (e.length <= t ? e : `${e.slice(0, t).trimEnd()}.`) : null);
        },
        802959: (e, t, r) => {
            r.r(t), r.d(t, { PremiumPurchaseSuccessScreen: () => x, default: () => z });
            r(136728);
            var a = r(202784),
                o = r(325686),
                n = r(107267),
                l = r(731708),
                i = r(167630),
                c = r(154003),
                s = r(138099),
                d = r(392237),
                u = r(674132),
                p = r.n(u),
                m = r(443781),
                g = r(952793),
                f = r(292546),
                h = r(782826),
                y = r(725405),
                b = r(125363),
                w = r(488645),
                E = r(668214),
                Z = r(215929);
            const P = (0, E.Z)()
                    .propsFromActions(() => ({ fetchUserClaims: Z.rS }))
                    .withAnalytics({ page: "premium", section: "registering" }),
                C = p().c3d89aca,
                v = p().ebc84442,
                I = p().e20f6662,
                _ = p().a8eea654,
                S = "/i/flow/premium_signup_nux_flow",
                x = ({ fetchUserClaims: e }) => {
                    const [t, r] = a.useState("loading"),
                        d = (0, n.useHistory)(),
                        u = (0, y.Z)(),
                        [p] = (0, f.Z)(),
                        E = p.get("selectedProduct") ?? "",
                        Z = p.get("selectedInterval") ?? "",
                        P = p.get("redirectAfterSuccess") ?? void 0,
                        { userClaims: x } = a.useContext(m.rC),
                        z = (0, b.I0)(),
                        T = a.useCallback(() => x.isAnyPremiumSubscriber(), [x]),
                        M = (0, g.hC)("identity_verification_intake_for_blue_subscribers_enabled"),
                        B = (0, g.hC)("identity_verification_settings_enabled"),
                        F = a.useCallback(
                            (e) => {
                                if (!P || !h.ZP.isXOrXaiUrl(decodeURIComponent(P))) {
                                    if ("PremiumBasic" === E) {
                                        const t = { requested_variant: "x_premium_basic" };
                                        return `${e}?input_flow_data=${encodeURIComponent(JSON.stringify(t))}`;
                                    }
                                    return e;
                                }
                                window.location.href = decodeURIComponent(P);
                            },
                            [E, P],
                        ),
                        O = a.useMemo(() => (B && M && "PremiumBasic" !== E ? { pathname: "/settings/account/id_verification/start", state: { redirectPath: S, flow: "premiumSubscription" } } : F(S)), [B, M, F, E]);
                    a.useEffect(() => {
                        let t = 0;
                        const a = setInterval(() => {
                            if (T()) {
                                const e = (0, h.G3)(d.location),
                                    t = ((e) => {
                                        switch (e) {
                                            case "BlueVerified":
                                                return "Premium";
                                            case "BlueVerifiedPlus":
                                                return "PremiumPlus";
                                            case "PremiumBasic":
                                                return "Basic";
                                            default:
                                                return "";
                                        }
                                    })(E),
                                    o = `${t}-${Z}`;
                                u.scribe({ element: "payment", action: "success", page: "subscriptions", section: "marketing", component: o, data: { referring_page: e, referer: e } }), r("loaded"), clearInterval(a);
                            } else t >= 10 ? (r("failed"), clearInterval(a)) : ((t += 1), e({}));
                        }, 1e3);
                        return () => clearInterval(a);
                    }, [x, e, T, u, d.location, Z, E]),
                        a.useEffect(() => {
                            "loaded" === t && z((0, w.q)("o8zly", "ojw68", null, "rweb.premiumLandingPage", !1));
                        }, [t, z]);
                    const D = a.useCallback(() => {
                            "loaded" === t && O ? d.push(O) : d.push("/home");
                        }, [t, d, O]),
                        R = a.useMemo(() => ("loading" === t ? a.createElement(o.Z, { style: { width: "100%" } }, a.createElement(l.ZP, { size: "headline1", weight: "heavy" }, v), a.createElement(i.Z, { style: k.activityIndicator, testID: "loadingIndicator" })) : "loaded" === t ? a.createElement(a.Fragment, null, a.createElement(l.ZP, { size: "title2", weight: "heavy" }, I), a.createElement(l.ZP, null, _), a.createElement(c.ZP, { onPress: D, size: "large", type: "primaryFilled" }, C)) : null), [t, D]);
                    return a.createElement(s.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, onMaskClick: D, type: "center" }, a.createElement(o.Z, { style: k.root }, R));
                },
                k = d.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                z = P(a.memo(x));
        },
        508111: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var a = r(202784),
                o = r(290402),
                n = r(883229),
                l = r(573540),
                i = r(668214),
                c = r(365265);
            const s = (0, i.Z)()
                    .propsFromState(() => ({ productSubscriptionsFetchStatus: c.VR }))
                    .propsFromActions(() => ({ fetchProductSubscriptions: c.v1 })),
                d = { context: "PremiumTierSwitch" },
                u = s(({ fetchProductSubscriptions: e, productSubscriptionsFetchStatus: t, ...r }) => {
                    const i = a.useCallback(() => {
                            e();
                        }, [e]),
                        c = a.useCallback(() => a.createElement(l.default, r), [r]);
                    return (
                        a.useEffect(() => {
                            i();
                        }, [i]),
                        a.createElement(n.N, { errorConfig: d }, a.createElement(o.Z, { fetchStatus: t, onRequestRetry: i, render: c, retryable: !0 }))
                    );
                });
        },
        778313: (e, t, r) => {
            r.r(t), r.d(t, { default: () => b });
            r(136728);
            var a = r(202784),
                o = r(325686),
                n = r(107267),
                l = r(138099),
                i = r(154003),
                c = r(731708),
                s = r(392237),
                d = r(674132),
                u = r.n(d),
                p = r(837020),
                m = r(323265);
            const g = u().ia5e7488,
                f = u().a893d602,
                h = u().fce91ab4,
                y = u().j1f5a580;
            function b(e) {
                const t = (0, n.useHistory)();
                function r() {
                    t.push("/home");
                }
                return a.createElement(l.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: r, style: w.root, type: "full" }, a.createElement(o.Z, { style: w.topBar }, a.createElement(i.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: a.createElement(p.default, { style: w.topIcons }), onPress: r, pullRight: !0, size: "medium", type: "brandText" })), a.createElement(o.Z, { style: m.ZP.isMobileOS() ? w.contentSmall : w.content }, a.createElement(c.ZP, { size: "title2", style: w.title, weight: "heavy" }, h), a.createElement(c.ZP, { style: w.subtitle }, y), a.createElement(i.ZP, { onPress: r, size: "xLarge", type: "primaryFilled" }, f)));
            }
            const w = s.default.create((e) => ({ root: { minHeight: 600 }, topBar: { alignItems: "flex-start", flexDirection: "row", paddingTop: 15, paddingStart: 15 }, topIcons: { color: "#000" }, spacer: { width: e.spaces.space24 }, content: { paddingTop: 20, paddingStart: 100, paddingEnd: 100, overflowY: "auto" }, contentSmall: { paddingTop: 20, paddingStart: 20, paddingEnd: 20, overflowY: "auto" }, title: { marginBottom: 8 }, subtitle: { color: e.colors.gray700, marginBottom: 28 }, img: { height: 150, width: "100%", marginBottom: 28 }, closeButton: { paddingTop: 15 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-964cff98.b6bc34da.js.map

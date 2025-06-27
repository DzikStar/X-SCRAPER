"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-964cff98"],
    {
        248186: (e, t, r) => {
            r.d(t, { Z: () => z });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(277660),
                i = r.n(l),
                c = r(107267),
                s = r(731708),
                d = r(392237),
                u = r(370006),
                p = r(167630),
                m = r(111677),
                g = r.n(m),
                f = r(449067),
                h = r(443781),
                y = r(725405),
                b = r(381214),
                w = r(392446),
                E = r(867754),
                P = r(684841),
                v = r(778e3),
                Z = r(701273),
                C = r(512923),
                _ = r(367664),
                I = r(534813);
            const S = g().a9904a1c,
                x = g().d8661dd4,
                k = ({ activeSubscription: e, content: t, isMobile: r, isTierSwitching: a, premiumPriceConfig: l, selectedProduct: p, setSelectedProduct: m, shouldRemoveExtraStep: g }) => {
                    const I = l.featuredPromotionDetails,
                        k = !!I?.promotion,
                        T = (0, y.Z)(),
                        { featureSwitches: z } = (0, h.QZ)(),
                        M = (0, _.Z)(I),
                        [F, O] = n.useState(M),
                        D = z.isTrue("subscriptions_offers_localized_pricing_enabled"),
                        R = i()(C.WL, t.apiContent?.subscribe_button)?.detail_text,
                        A = D ? n.createElement(s.ZP, { color: "alwaysDarkGray700", style: { marginTop: d.default.theme.spaces.space12 } }, R) : null,
                        W = i()(C.lO, t.apiContent?.header),
                        H = (0, c.useHistory)(),
                        N = t.apiContent?.products?.find((e) => e.product_category === p),
                        V = parseInt(I?.promotion.ends_at_msec || 0, 10),
                        [, j] = (0, w.Z)(V),
                        L = { title: S, subtitle: x, cardTitle: null, cardSubtitle: null, wideImageUrl: "https://abs.twimg.com/images/anniversary-wide-header-v2.png", narrowImageUrl: "https://abs.twimg.com/images/anniversary-mobile-header-v2.png" },
                        Y = !a && j > 0 && k;
                    return (
                        n.useEffect(() => {
                            Y && T.scribe({ component: "paywall_with_offer", element: I?.promotion.program_id, action: "impression" });
                        }, [Y, I, T]),
                        n.createElement(o.Z, { style: B.root }, n.createElement(o.Z, { style: B.shadow }), n.createElement(f.Z.Configure, { TabBar: () => null, headerless: !0, rightControl: null, sideNav: null, withAppBar: !1, withBottomTabBar: !1 }), n.createElement(u.Z, { backButtonType: "close", onClick: () => H.goBack(), style: B.backButton }), W ? n.createElement(E.Z, { content: t, header: W, isMobile: r, isTierSwitching: a, offerContent: L, offerEndsAtMsec: V, renderOfferContent: Y }) : null, n.createElement(o.Z, { style: B.container }, n.createElement(Z.Z, { isMobile: r, selectedInterval: F, setSelectedInterval: O }), t.apiContent?.products ? n.createElement(n.Fragment, null, A, n.createElement(v.Z, { activeSubscription: e, disclaimerRef: t.apiContent.subscribe_button, isTierSwitching: a, premiumPriceConfig: l, products: t.apiContent.products, selectedInterval: F, selectedProduct: p, setSelectedProduct: m, shouldRemoveExtraStep: g }), n.createElement(b.Z, { products: t.apiContent.products })) : null), g ? n.createElement(P.Z, { activeSubscription: e, disclaimerRef: t.apiContent?.subscribe_button, isTierSwitching: a, premiumPriceConfig: l, productName: N?.title, selectedInterval: F, selectedProduct: p }) : null)
                    );
                },
                T = (e) => {
                    const t = (e.content.apiContent?.products || []).map((e) => e.product_category),
                        r = (0, I.Z)(t, { moment: e.isTierSwitching ? void 0 : "PremiumSignupPageVisit" });
                    return !Object.values(r).find((e) => null !== e) ? n.createElement(p.Z, null) : n.createElement(k, (0, a.Z)({}, e, { premiumPriceConfig: r }));
                },
                z = n.memo(T),
                B = d.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(52 147 239 / 30%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgba(52, 147, 239, 0.3) 0%, rgb(21 32 44) 100%)" : "radial-gradient(56.15141888052253% 56.15141888052254% at 49.97201160183933% 38.95898881943194%,#273649 0%,rgba(0,0,0,1) 100%)";
                    return { root: { height: "100vh", width: "100%", backgroundColor: e.colors.cellBackground, overflow: "auto" }, shadow: { position: "absolute", top: -300 * e.scaleMultiplier, minHeight: 650 * e.scaleMultiplier, width: "100%", backgroundImage: t }, container: { alignItems: "center", flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto", paddingHorizontal: e.spaces.space16, marginTop: e.spaces.space24 }, backButton: { position: "absolute", marginStart: "none", top: e.spaces.space16, start: e.spaces.space16, zIndex: 1 } };
                });
        },
        960700: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                o = r(731708),
                l = r(392237),
                i = r(111677),
                c = r.n(i),
                s = r(188142),
                d = r(287510),
                u = r(930925),
                p = r(25591);
            const m = c().f5fb58b4,
                g = c().i527045e,
                f = ({ catalogItemsForProduct: e, content: { apiContent: t, localContent: r }, footerRef: l, headerFooterOffset: i, referringPage: c, selectedProduct: f, state: { catalogItems: h, paywallDisplayType: b } }) => {
                    const [w, E] = a.useState("Year"),
                        P = a.useMemo(() => {
                            const { refererContent: e } = r;
                            return e[c ?? ""] ? r?.refererContent[c ?? ""] : e.fallback;
                        }, [r, c]),
                        v = e.find((e) => e.chargeInterval === w);
                    return a.createElement(
                        n.Z,
                        { style: y.root },
                        a.createElement(s.Z, { show: "fullPage" !== b, style: y.dismissButton }),
                        a.createElement(n.Z, { style: y.shadow }),
                        a.createElement(
                            n.Z,
                            { style: [y.content, i] },
                            a.createElement(o.ZP, { align: "center", size: "title1", style: y.title, weight: "heavy" }, P?.title),
                            a.createElement(o.ZP, { align: "center", size: "headline2" }, P?.subtitle),
                            a.createElement(
                                n.Z,
                                { style: y.features },
                                P.features?.map((e) => a.createElement(n.Z, { style: y.feature }, a.createElement(o.ZP, { size: "headline1" }, e?.icon), a.createElement(n.Z, null, a.createElement(o.ZP, { weight: "medium" }, e.header), a.createElement(o.ZP, { color: "gray900", size: "subtext1" }, e.description)))),
                                a.createElement(n.Z, { style: y.feature }, a.createElement(n.Z, { style: y.featureInner }, a.createElement(o.ZP, { weight: "medium" }, m), a.createElement(o.ZP, { color: "gray900", size: "subtext1" }, g))),
                            ),
                        ),
                        a.createElement(d.Z, { footerRef: l }, a.createElement(u.Z, { catalogItems: e, selectedInterval: w, setSelectedInterval: E, variant: "horizontal_blue" }), a.createElement(p.Z, { disclaimerRef: t?.subscribe_button, price: v, variant: "blue" })),
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
                n = r(325686),
                o = r(731708),
                l = r(392237),
                i = r(111677),
                c = r.n(i),
                s = r(934912),
                d = r(632396),
                u = r(188142),
                p = r(287510),
                m = r(361780),
                g = r(627706);
            const f = c().ab0decc0,
                h = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: l, headerFooterOffset: i, headerRef: c, referringPage: h, selectedProduct: y, selectedProductIndex: w, setSelectedProduct: E, state: P, stripePriceConfig: v, withStripeButton: Z }) => a.createElement(n.Z, { testID: "webview_paywall_native_layout" }, a.createElement(m.Z, { headerRef: c, style: b.header, withFade: !1 }, a.createElement(u.Z, { show: "fullPage" !== P.paywallDisplayType, style: b.dismissButton }), a.createElement(o.ZP, { size: "headline2", style: b.pageTitle, weight: "bold" }, f)), a.createElement(n.Z, { style: [b.root, i] }, a.createElement(s.Z, { content: r, referringPage: h }), a.createElement(d.Z, { activeSubscription: null, content: r, isTargettedUpsellFlow: !1, prices: e, products: r.apiContent?.products, referringPage: h, selectedProduct: y, selectedProductIndex: w, setSelectedProduct: E })), a.createElement(p.Z, { footerRef: l }, a.createElement(g.Z, { catalogItemsForProduct: t, content: r, selectedProduct: y, stripePriceConfig: v, withStripePurchaseButton: Z }))),
                y = a.memo(h),
                b = l.default.create((e) => ({ root: { overflow: "auto", paddingBottom: e.spaces.space36 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "absolute", start: 0, bottom: 0 }, header: { alignItems: "center", justifyContent: "center", paddingTop: e.spaces.space16 }, offerCard: { marginHorizontal: e.spaces.space16 } }));
        },
        884020: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                o = r(731708),
                l = r(392237),
                i = r(952793),
                c = r(192933),
                s = r(278637),
                d = r(612450),
                u = r(188142),
                p = r(287510),
                m = r(25591),
                g = r(968831);
            const f = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: l, headerFooterOffset: f, primaryColor: b, referringPage: w, selectedProduct: E, selectedProductIndex: P, setSelectedProduct: v, state: { paywallDisplayType: Z }, withAnnualPriceMonthly: C }) => {
                    const [_, I] = a.useState(!1),
                        S = t.find((e) => "Year" === e.chargeInterval),
                        x = r.apiContent?.products?.filter((e) => "BlueVerified" === e.product_category || "BlueVerifiedPlus" === e.product_category),
                        k = x?.findIndex((e) => e.product_category === E),
                        T = (0, i.wW)("premium_webview_paywall_offer_video_url"),
                        z = T.length > 0,
                        { subtitle: B, title: M } = (0, g.Z)({ content: r }),
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
                        a.createElement(n.Z, null, a.createElement(n.Z, { style: h.dismissButtonContainer }, a.createElement(u.Z, { show: "fullPage" !== Z, type: "onMediaText" })), a.createElement(n.Z, { style: [h.content, f] }, z ? a.createElement(n.Z, { style: h.videoContainer }, a.createElement(n.Z, { style: h.overlay }), a.createElement("video", { autoPlay: !0, loop: !0, muted: !0, playsInline: !0, ref: F, src: T, style: { ...y.video, ...(O ? h.show : h.hide) } })) : null, a.createElement(n.Z, { style: h.header }, a.createElement(o.ZP, { align: "center", color: z ? "whiteOnColor" : void 0, size: "title1", style: h.title, weight: "bold" }, M), a.createElement(o.ZP, { align: "center", color: z ? "whiteOnColor" : void 0, style: h.description, weight: "medium" }, B)), S?.introductoryOffer?.endsAtMs ? a.createElement(n.Z, { style: h.countdown, testID: "countdown" }, a.createElement(s.Z, { endsAtMsec: S?.introductoryOffer.endsAtMs })) : null, r.apiContent?.products ? a.createElement(n.Z, { style: h.tabs }, a.createElement(d.Z, { primaryColor: b, products: x, selectedProduct: E, setSelectedProduct: v })) : null, a.createElement(n.Z, { style: h.carousel }, a.createElement(c.Z, { content: r, hideTitle: !0, prices: e, products: x, referringPage: w, selectedInterval: "Year", selectedProduct: E, selectedProductIndex: k || 0, setSelectedProduct: v, setShowExtraFeatures: I, showExtraFeatures: _, withExtraFeatures: !0, withFeatureFocus: !1, withOfferCard: !1, withUpsellTier: !1 }))), a.createElement(p.Z, { footerRef: l }, a.createElement(m.Z, { buttonSize: "large", disclaimerRef: r.apiContent?.subscribe_button, price: S, variant: b, withAnnualPriceMonthly: C })))
                    );
                },
                h = l.default.create((e) => ({ carousel: { paddingHorizontal: e.spaces.space16 }, content: { overflow: "auto", paddingBottom: e.spaces.space72 }, header: { paddingTop: e.spaces.space72, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space8 }, description: { marginTop: e.spaces.space8 }, tabs: { marginBottom: e.spaces.space12 }, countdown: { paddingHorizontal: e.spaces.space16 }, videoContainer: { width: "100%", alignSelf: "center", backgroundColor: e.colors.alwaysBlack, position: "absolute" }, overlay: { position: "absolute", backgroundColor: "rgba(0,0,0,.6)", width: "100%", height: "100%", zIndex: 1 }, show: { opacity: 1 }, hide: { opacity: 0 }, dismissButtonContainer: { position: "absolute", zIndex: 1 } })),
                y = { video: { width: "100%", transition: "opacity 1s" } };
        },
        466337: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(325686),
                o = r(731708),
                l = r(392237),
                i = r(111677),
                c = r.n(i),
                s = r(930925),
                d = r(25591),
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
                            return a.createElement(o.ZP, { size: "title4", weight: "bold" }, e);
                        }, [w, y, g]),
                        P = a.useMemo(() => {
                            if (!y?.introductoryOffer?.endsAtMs) return null;
                            const e = new Date(parseInt(y?.introductoryOffer.endsAtMs, 10)),
                                t = m(e);
                            return a.createElement(o.ZP, { color: "gray700", style: f.subtitle }, p({ date: t }));
                        }, [y]);
                    return a.createElement(n.Z, { style: f.root, testID: "webview_paywall_one_click_layout" }, E, P, a.createElement(s.Z, { catalogItems: e, selectedInterval: g, setSelectedInterval: h, variant: "default" }), a.createElement(d.Z, { disclaimerRef: t?.subscribe_button, price: y }));
                },
                f = l.default.create((e) => ({ root: { paddingTop: e.spaces.space36, paddingHorizontal: e.spaces.space24, height: "100vh", backgroundColor: e.colors.gray0 }, header: { flexGrow: 1, justifyContent: "center" }, title: { marginBottom: e.spaces.space16 }, emoji: {}, subtitle: { marginTop: e.spaces.space4 } }));
        },
        130821: (e, t, r) => {
            r.d(t, { Z: () => I });
            var a = r(202784),
                n = r(325686),
                o = r(392237),
                l = r(992942),
                i = r(439592),
                c = r(731708),
                s = r(111677),
                d = r.n(s),
                u = r(966299),
                p = r(590021),
                m = r(195811),
                g = r(952793),
                f = r(188142),
                h = r(287510),
                y = r(930925),
                b = r(25591);
            const w = d().a1bb9c8a,
                E = d().fb8453c8,
                P = d().e45b3f30,
                v = d().aaebdc2e,
                Z = d().ddf8a412,
                C = d().gfb04ef4,
                _ = ({ content: { apiContent: e, localContent: t }, footerRef: r, headerFooterOffset: s, headerRef: d, referringPage: _, selectedProduct: I, state: { catalogItems: x, paywallDisplayType: k } }) => {
                    const T = (0, g.hC)("grok_ios_reasoning_research_name_enabled"),
                        [z, B] = a.useState("Month"),
                        M = x.filter((e) => "BlueVerifiedPlus" === e.productCategory),
                        F = M.find((e) => e.chargeInterval === z),
                        O = "light" === o.default.theme.paletteName,
                        D = "darker" === o.default.theme.paletteName;
                    return a.createElement(
                        n.Z,
                        null,
                        a.createElement(f.Z, { show: "fullPage" !== k, style: S.dismissButton }),
                        a.createElement(
                            n.Z,
                            { style: [S.root, s] },
                            D ? a.createElement(l.Z, { aspectMode: i.Z.COVER, source: u, style: S.headerImage }) : a.createElement(n.Z, { style: S.shadow }),
                            a.createElement(
                                n.Z,
                                { style: S.header },
                                a.createElement(l.Z, { aspectMode: i.Z.COVER, source: O ? p : m, style: S.logo }),
                                a.createElement(c.ZP, { align: "center", size: "title1", style: S.title, weight: "bold" }, w),
                                a.createElement(
                                    n.Z,
                                    { style: S.bullets },
                                    a.createElement(
                                        "ul",
                                        { style: S.list },
                                        [T ? P : E, v, Z, C].map((e, t) => a.createElement("li", { key: `feature_${t}` }, a.createElement(c.ZP, { size: "body", weight: "medium" }, e))),
                                    ),
                                ),
                            ),
                        ),
                        a.createElement(h.Z, { footerRef: r }, a.createElement(y.Z, { catalogItems: M, selectedInterval: z, setSelectedInterval: B, variant: "special" }), a.createElement(b.Z, { disclaimerRef: e?.subscribe_button, price: F, variant: "special" })),
                    );
                },
                I = a.memo(_),
                S = o.default.create((e) => {
                    const t = "light" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "linear-gradient(rgb(52 147 239 / 50%) 0%, rgb(21 32 44) 100%)" : void 0;
                    return { shadow: { position: "absolute", minHeight: 150 * e.scaleMultiplier, width: "100%", backgroundImage: t, left: 0, top: 0 }, root: { padding: e.spaces.space48 }, header: { flexGrow: 1, justifyContent: "start", alignItems: "center" }, title: { marginBottom: e.spaces.space16 }, bullets: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space16 }, logo: { width: "155px", height: "44px", marginBottom: e.spaces.space36, marginTop: 100 }, headerImage: { width: "100%", position: "absolute", start: 0, top: -20, height: 180 }, dismissButton: { position: "absolute", start: 0, top: 100, zIndex: 1 }, list: { padding: 0, gap: e.spaces.space16, display: "flex", flexDirection: "column" } };
                });
        },
        313511: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                o = r(392237),
                l = r(192933),
                i = r(612450),
                c = r(188142),
                s = r(287510),
                d = r(361780),
                u = r(627706),
                p = r(930925),
                m = r(25591);
            const g = ({ catalogItemsForProduct: e, content: t, footerRef: r, headerFooterOffset: o, headerRef: g, primaryColor: f, referringPage: y, selectedProduct: b, selectedProductIndex: w, setSelectedProduct: E, state: { catalogItems: P, paywallDisplayType: v }, withExtraFeatures: Z, withFeatureFocus: C, withPurchaseSheet: _, withUpsellTier: I }) => {
                    const [S, x] = a.useState(!1),
                        [k, T] = a.useState("Year"),
                        { apiContent: z } = t,
                        B = e.find((e) => e.chargeInterval === k),
                        M = _ ? a.createElement(a.Fragment, null, a.createElement(u.Z, { catalogItemsForProduct: e, content: t, selectedProduct: b, variant: f })) : a.createElement(a.Fragment, null, a.createElement(p.Z, { catalogItems: e, selectedInterval: k, setSelectedInterval: T, variant: "gold" === f ? "horizontal_gold" : "horizontal_blue" }), a.createElement(m.Z, { disclaimerRef: z?.subscribe_button, price: B, variant: f }));
                    return a.createElement(n.Z, null, a.createElement(d.Z, { headerRef: g, withFade: !0 }, a.createElement(c.Z, { show: "fullPage" !== v }), a.createElement(n.Z, { style: h.tabContainer }, z?.products ? a.createElement(i.Z, { onChange: () => x(!1), primaryColor: f, products: z.products, selectedProduct: b, setSelectedProduct: E }) : null)), a.createElement(n.Z, { style: [h.content, o] }, z?.products ? a.createElement(l.Z, { content: t, prices: P, products: z.products, referringPage: y, selectedInterval: k, selectedProduct: b, selectedProductIndex: w, setSelectedProduct: E, setShowExtraFeatures: x, showExtraFeatures: S, withExtraFeatures: Z, withFeatureFocus: C, withOfferCard: !0, withUpsellTier: I }) : null), a.createElement(s.Z, { footerRef: r }, M));
                },
                f = a.memo(g),
                h = o.default.create((e) => ({ header: { flexGrow: 1, justifyContent: "center" }, content: { overflow: "auto", paddingBottom: e.spaces.space72, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space24 }, tabContainer: { flexDirection: "row", flexGrow: 1, justifyContent: "center" } }));
        },
        285919: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                o = r(392237),
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
            const h = ({ content: e, prices: t, productCategory: r, productContent: h, referringPage: b, selectedInterval: w, selectedProduct: E, selectedProductIndex: P, setSelectedProduct: v, setShowAllFeaturesPage: Z, setShowExtraFeatures: C, showExtraFeatures: _, withExtraFeatures: I, withUpsellTier: S }) => {
                    const x = !!t.find((e) => e.introductoryOffer && e.productCategory === r)?.introductoryOffer,
                        k = e.localContent.productContent[r].FeatureGraphics,
                        T = k?.find((e) => "adsRemoved" === e.id),
                        z = k?.find((e) => "boostedReplies" === e.id),
                        B = k?.find((e) => "grok" === e.id),
                        M = "light" === o.default.theme.paletteName ? o.default.theme.paletteName : "dark",
                        F = r === d.p.BlueVerified,
                        O = r === d.p.BlueVerifiedPlus,
                        [D, R] = a.useState({ width: 200, height: 70 });
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(n.Z, null),
                        x
                            ? null
                            : a.createElement(
                                  n.Z,
                                  { style: y.containerMargin },
                                  a.createElement(
                                      n.Z,
                                      { style: y.tierBadge },
                                      a.createElement(l.Z, { source: "light" === o.default.theme.paletteName ? p : u, style: [y.tierFrame, { width: D.width, height: D.height }] }),
                                      a.createElement(
                                          n.Z,
                                          {
                                              onLayout: (e) => {
                                                  const { width: t } = e.nativeEvent.layout,
                                                      r = Math.max(200, t + 24);
                                                  R({ width: r, height: r / (200 / 70) });
                                              },
                                              style: y.centerContainer,
                                          },
                                          a.createElement(l.Z, { source: "light" === o.default.theme.paletteName ? c : s, style: y.XLogo }),
                                          a.createElement(i.ZP, { style: y.textStyle }, h.productName),
                                      ),
                                  ),
                                  a.createElement(m.Z, { activeIndex: P, totalDots: e.apiContent?.products ? e.apiContent.products.length : Object.keys(e.localContent.productContent).length }),
                                  T && z && a.createElement(n.Z, { style: y.progressCirclesContainer }, a.createElement(n.Z, { style: y.circleWrapper }, a.createElement(n.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Ads Removed", source: T?.image[M], style: F ? y.premiumCircleImage : y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: y.circleTextEnlarged }, (0, f.a)(T?.level, 5))), a.createElement(i.ZP, { style: y.circleLabel }, T?.label)), a.createElement(n.Z, { style: y.circleWrapper }, a.createElement(n.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Boosted Reply", source: z?.image[M], style: F ? y.premiumCircleImage : y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [y.circleText, O && { top: "58%" }, F && { transform: [{ translateX: "-45%" }] }] }, (0, f.a)(z?.level, 3))), a.createElement(i.ZP, { style: y.circleLabel }, z?.label)), B && a.createElement(n.Z, { style: y.circleWrapper }, a.createElement(n.Z, { style: y.imageContainer }, a.createElement(l.Z, { alt: "Grok", source: B?.image[M], style: y.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [y.circleText, y.customTextWidth] }, (0, f.a)(B?.level, 7))), a.createElement(i.ZP, { style: y.circleLabel }, B?.label))),
                              ),
                        a.createElement(g.Z, { productCategory: r, productContent: h, setShowAllFeaturesPage: Z }),
                    );
                },
                y = o.default.create((e) => {
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
            r.d(t, { Z: () => C });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(815858),
                i = r(138099),
                c = r(392237),
                s = r(111677),
                d = r.n(s),
                u = r(192933),
                p = r(934912),
                m = r(330463),
                g = r(188142),
                f = r(137429),
                h = r(287510),
                y = r(627706),
                b = r(930925),
                w = r(25591),
                E = r(733569);
            const P = d().b601cfbb,
                v = d().i3e90e20,
                Z = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: c, headerFooterOffset: s, headerRef: d, referringPage: Z, selectedProduct: C, selectedProductIndex: I, setSelectedProduct: S, state: x, stripePriceConfig: k, withIntervalSelector: T, withPurchaseSheet: z, withStripeButton: B }) => {
                    const [M, F] = n.useState("Year"),
                        O = t.find((e) => e.chargeInterval === M),
                        D = t.find((e) => "Month" === e.chargeInterval),
                        R = D ? P({ price: D.localisedMonthlyPrice || "undefined" }) : v,
                        [A, W] = n.useState(!1);
                    r.localContent = E.N3;
                    const H = z ? n.createElement(y.Z, { catalogItemsForProduct: t, content: r, label: R, selectedProduct: C, withStripePurchaseButton: B }) : T ? n.createElement(n.Fragment, null, n.createElement(b.Z, { catalogItems: t, selectedInterval: M, setSelectedInterval: F, variant: "horizontal_green" }), n.createElement(w.Z, { disclaimerRef: r.apiContent?.subscribe_button, price: O, selectedInterval: M, selectedProduct: C, stripePriceConfig: k, variant: "special", withStripePurchaseButton: B })) : n.createElement(f.Z, { catalogItems: e, catalogItemsForProduct: t, content: r });
                    return n.createElement(o.Z, { style: { minHeight: "100vh" }, testID: "webview_paywall_v2_layout" }, A ? n.createElement(l.Z, { animateMount: !0, duration: "normal", show: A, type: "slide" }, n.createElement(i.Z, { enableMaskForDismiss: !0, onMaskClick: () => W(!1), style: _.sheetOuter, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, n.createElement(m.Z, { catalogItems: e, content: r, selectedInterval: M, selectedProduct: C, setShowAllFeaturesPage: W, stripePriceConfig: k, withStripePurchaseButton: B }))) : null, n.createElement(o.Z, { style: [_.root, _.shadow] }, n.createElement(o.Z, { style: _.containerMargin }, n.createElement(g.Z, { show: "fullPage" !== x.paywallDisplayType, style: _.dismissButton, variant: "darkMode" }), n.createElement(o.Z, { style: _.dynamicHeaderContainer }, n.createElement(p.Z, { content: r, referringPage: Z, withoutDescription: !0 })), n.createElement(o.Z, { style: s }, r.apiContent?.products ? n.createElement(u.Z, { content: r, prices: e, productListLayout: "V2", products: r.apiContent.products, referringPage: Z, selectedInterval: "Year", selectedProduct: C, selectedProductIndex: I, setSelectedProduct: S, setShowAllFeaturesPage: W, setShowExtraFeatures: () => {}, showExtraFeatures: !1, withExtraFeatures: !1, withOfferCard: !0, withUpsellTier: !1 }) : null))), !A && n.createElement(h.Z, (0, a.Z)({ footerRef: c }, z || T ? {} : { variant: "condensed" }), n.createElement(o.Z, { style: _.footerContainer }, H)));
                },
                C = n.memo(Z),
                _ = c.default.create((e) => ({ root: { overflow: "auto" }, shadow: { position: "absolute", width: "100%", height: "100%", backgroundImage: "light" === e.paletteName ? "radial-gradient(70% 36% at 50% 18%, rgb(108 161 150 / 30%) 15%, rgb(255 255 255) 90%)" : "dark" === e.paletteName ? "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(21,32,44) 100%)" : "radial-gradient(50% 35% at 50% 20%, rgba(108,161,150,0.3) 0%, rgb(0,0,0) 100%)" }, containerMargin: { marginTop: e.spaces.space56 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "absolute", start: e.spaces.space8, width: "fit-content", zIndex: 10 }, dynamicHeaderContainer: { alignSelf: "center", maxWidth: "70%" }, offerCard: { marginHorizontal: e.spaces.space16 }, footerContainer: { paddingBottom: e.spaces.space8 }, sheetOuter: { backgroundColor: e.colors.gray0 }, pill: { backgroundColor: e.colors.green500, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4, position: "absolute", top: "50%", end: "3%", transform: [{ translateY: "-50%" }], zIndex: 1 }, pillText: { color: e.colors.whiteOnColor, fontSize: e.fontSizes.subtext3, fontWeight: "normal" } }));
        },
        960844: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                o = r(392237),
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
                        w = "light" === o.default.theme.paletteName ? o.default.theme.paletteName : "dark",
                        E = t === s.p.BlueVerified,
                        P = t === s.p.BlueVerifiedPlus;
                    return a.createElement(a.Fragment, null, a.createElement(n.Z, { style: m.shadow }), f && h && a.createElement(n.Z, { style: m.progressCirclesContainer }, a.createElement(n.Z, { style: m.circleWrapper }, a.createElement(n.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Ads Removed", source: f?.image[w], style: E ? m.premiumCircleImage : m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: m.circleTextEnlarged }, (0, u.a)(f?.level, 5))), a.createElement(i.ZP, { style: m.circleLabel }, f?.label)), b && !P && a.createElement(n.Z, { style: m.circleWrapper }, a.createElement(n.Z, { style: m.imageContainer }, a.createElement(c.default, { style: [m.premiumCircleImage, "light" !== w ? { color: "white" } : null] })), a.createElement(i.ZP, { style: m.circleLabel }, b?.label)), a.createElement(n.Z, { style: m.circleWrapper }, a.createElement(n.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Boosted Reply", source: h?.image[w], style: m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [m.circleText, P && { top: "58%" }, E && { transform: [{ translateX: "-45%" }] }] }, (0, u.a)(h?.level, 3))), a.createElement(i.ZP, { style: m.circleLabel }, h?.label)), y && a.createElement(n.Z, { style: m.circleWrapper }, a.createElement(n.Z, { style: m.imageContainer }, a.createElement(l.Z, { alt: "Grok", source: y?.image[w], style: m.premiumPlusCircleImage }), a.createElement(i.ZP, { style: [m.circleText, m.customTextWidth] }, (0, u.a)(y?.level, 7))), a.createElement(i.ZP, { style: m.circleLabel }, y?.label))), a.createElement(d.Z, { productCategory: t, productContent: r, setShowAllFeaturesPage: p, variant: "condensed" }));
                },
                m = o.default.create((e) => {
                    const t = "light" === e.paletteName ? e.colors.white : e.colors.gray0;
                    return { shadow: { position: "absolute", minHeight: 300 * e.scaleMultiplier, borderRadius: e.spaces.space16, width: "95%", height: "100%", backgroundColor: t }, progressCirclesContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: e.spaces.space12 }, circleWrapper: { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, circleLabel: { marginTop: e.spaces.space8, color: e.colors.gray700, fontSize: e.fontSizes.subtext3, textAlign: "center" }, imageContainer: { position: "relative", alignItems: "center", justifyContent: "center" }, premiumCircleImage: { width: 65, height: 65, alignSelf: "center" }, premiumPlusCircleImage: { width: 64, height: 64, alignSelf: "center" }, circleText: { position: "absolute", left: "50%", transform: [{ translateX: "-50%" }], top: "50%", color: e.colors.gray1100, fontSize: e.fontSizes.subtext3, fontWeight: "bold" }, customTextWidth: { top: "55%", width: "max-content" }, circleTextEnlarged: { position: "absolute", color: e.colors.gray1100, fontSize: e.fontSizes.headline2, fontWeight: "bold" } };
                });
        },
        689609: (e, t, r) => {
            r.d(t, { Z: () => C });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                l = r(815858),
                i = r(138099),
                c = r(992942),
                s = r(154003),
                d = r(392237),
                u = r(111677),
                p = r.n(u),
                m = r(716110),
                g = r(192933),
                f = r(934912),
                h = r(330463),
                y = r(188142),
                b = r(137429),
                w = r(287510),
                E = r(627706),
                P = r(733569);
            const v = p().b601cfbb,
                Z = ({ catalogItems: e, catalogItemsForProduct: t, content: r, footerRef: d, headerFooterOffset: u, headerRef: p, referringPage: Z, selectedProduct: C, selectedProductIndex: I, setSelectedProduct: S, state: x, withPurchaseSheet: k }) => {
                    const T = t.find((e) => "Month" === e.chargeInterval),
                        z = T ? v({ price: T.localisedMonthlyPrice || "undefined" }) : "Currently unavailable",
                        [B, M] = n.useState(!1);
                    r.localContent = P.jc;
                    const F = B ? n.createElement(l.Z, { animateMount: !0, duration: "normal", show: B, type: "slide" }, n.createElement(i.Z, { enableMaskForDismiss: !0, onMaskClick: () => M(!1), style: _.sheetOuter, type: "bottom", withMask: !0, withNativeMaskColor: !0, withSlideAnimation: !0 }, n.createElement(o.Z, { style: _.sheet }, n.createElement(h.Z, { catalogItems: e, content: r, selectedProduct: C, setShowAllFeaturesPage: M })))) : null;
                    return n.createElement(
                        o.Z,
                        { style: _.container, testID: "webview_paywall_v2_layout" },
                        n.createElement(
                            o.Z,
                            { style: _.root },
                            n.createElement(c.Z, { source: m, style: _.topImage }),
                            F,
                            n.createElement(
                                o.Z,
                                { style: _.contentContainer },
                                n.createElement(y.Z, { show: "fullPage" !== x.paywallDisplayType, style: _.dismissButton, variant: "darkMode" }),
                                n.createElement(o.Z, { style: _.dynamicHeaderContainer }, n.createElement(f.Z, { content: r, fallbackDescription: r.localContent.refererContent.fallback.subtitle || "", fallbackHeader: r.localContent.refererContent.fallback.title, referringPage: Z, variant: "darkMode" })),
                                n.createElement(
                                    o.Z,
                                    { style: _.buttonContainer },
                                    r.apiContent?.products?.map((e) =>
                                        n.createElement(
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
                                                    style: _.button,
                                                    textSizeOverride: "body",
                                                },
                                                e.product_category !== C ? { type: "onMediaOutlined" } : {},
                                            ),
                                            e.title,
                                        ),
                                    ),
                                ),
                                n.createElement(o.Z, { style: [u, _.marginContainer] }, r.apiContent?.products ? n.createElement(g.Z, { content: r, prices: e, productListLayout: "V3", products: r.apiContent.products, referringPage: Z, selectedInterval: "Year", selectedProduct: C, selectedProductIndex: I, setSelectedProduct: S, setShowAllFeaturesPage: M, setShowExtraFeatures: () => {}, showExtraFeatures: !1, withExtraFeatures: !1, withOfferCard: !0, withUpsellTier: !1 }) : null),
                            ),
                        ),
                        !B && n.createElement(w.Z, { footerRef: d, variant: "condensed" }, n.createElement(o.Z, { style: _.footerContainer }, k ? n.createElement(E.Z, { catalogItemsForProduct: t, content: r, label: z, selectedProduct: C }) : n.createElement(b.Z, { catalogItems: e, catalogItemsForProduct: t, content: r }))),
                    );
                },
                C = n.memo(Z),
                _ = d.default.create((e) => ({ container: { backgroundColor: "black", minHeight: "100vh" }, root: { flex: 1, backgroundColor: "black", minHeight: "100%", position: "relative" }, topImage: { position: "absolute", top: 0, width: "100%", height: 350, resizeMode: "cover", zIndex: 1 }, contentContainer: { zIndex: 2, paddingTop: e.spaces.space64 }, customText: { color: "white", fontSize: e.fontSizes.body, textAlign: "center", opacity: 1 }, dynamicHeaderContainer: { alignSelf: "start", paddingStart: e.spaces.space8, maxWidth: "100%" }, marginContainer: { marginTop: d.default.theme.spaces.space24 }, pageTitle: { textAlign: "center", marginBottom: e.spaces.space4 }, dismissButton: { position: "relative", width: "fit-content", marginStart: e.spaces.space4 }, header: { alignItems: "center", justifyContent: "center", position: "fixed", zIndex: 1, height: e.spaces.space2, width: e.spaces.space2 }, offerCard: { marginHorizontal: e.spaces.space16 }, footerContainer: { paddingBottom: e.spaces.space8 }, sheetOuter: { backgroundColor: e.colors.gray0, zIndex: 3 }, sheet: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space8 }, buttonContainer: { flexDirection: "row", alignItems: "center", marginStart: e.spaces.space16, marginTop: e.spaces.space16, gap: e.spaces.space8 }, button: { maxWidth: "fit-content", fontSize: e.fontSizes.body, fontWeight: e.fontWeights.medium } }));
        },
        789769: (e, t, r) => {
            r.d(t, { Z: () => l, u: () => o });
            var a = r(111677),
                n = r.n(a);
            const o = n().f65e7e91,
                l = { Year: n().b9a4d8c6, Month: n().a3a4e8f8 };
        },
        274547: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(136728);
            var a = r(685731),
                n = r(336629);
            const o = (e, t) => {
                const r = [];
                return (
                    Object.keys(e.productDetailsMap).forEach((o) => {
                        const l = e.productDetailsMap[o];
                        l?.prices?.forEach((e) => {
                            r.push({ chargeInterval: e?.charge_interval, introductoryOffer: void 0, localisedMonthlyPrice: (0, n.T)({ price: e, annualPriceMonthly: "Year" === e?.charge_interval, includeTax: t }), localisedYearlyPrice: (0, n.T)({ price: e, monthlyPriceAnnual: "Month" === e?.charge_interval, annualPriceMonthly: !1, includeTax: t }), productAppStoreID: e?.external_price_id, paymentPlatform: "stripe", productCategory: o, rawPrice: (0, a.aU)(e, t) / 1e6 });
                        });
                    }),
                    r
                );
            };
        },
        806859: (e, t, r) => {
            r.d(t, { Z: () => c });
            const a = Object.freeze({ default: "default", native_clone_only_stripe: "native_clone_only_stripe", native_clone_stripe_choice: "native_clone_stripe_choice", one_click: "one_click", feature_focused: "feature_focused", v1_1_1: "v1_1_1", v1_1_2: "v1_1_2", v1_2_1: "v1_2_1", v1_2_2: "v1_2_2", v1_3_1: "v1_3_1", v1_3_1_dynamic: "v1_3_1_dynamic", v1_3_1_blue: "v1_3_1_blue", v1_3_2: "v1_3_2", v1_3_2_dynamic: "v1_3_2_dynamic", v1_3_2_blue: "v1_3_2_blue", offer_v1_1: "offer_v1_1", offer_v1_2: "offer_v1_2", offer_v2_1: "offer_v2_1", offer_v2_2: "offer_v2_2", special: "special", v2: "v2", v2_2: "v2_2", v2_3: "v2_3", v2_3_with_stripe: "v2_3_with_stripe", v2_3_only_stripe: "v2_3_only_stripe", v3: "v3" }),
                n = ["offer_v1_1", "offer_v1_2", "offer_v2_1", "offer_v2_2"],
                o = ["native_clone_only_stripe", "v2_3_only_stripe"],
                l = ["native_clone_stripe_choice", "v2_3_with_stripe"],
                i = (e) => {
                    switch (e) {
                        case "month":
                            return "Month";
                        case "year":
                            return "Year";
                    }
                },
                c = (e) => {
                    const t = { catalogItems: [], status: "loading", paywallDesignVariant: "default", paywallDisplayType: "fullPage", printDebug: !1, withStripeButton: !1, replacePricesWithStripe: !1 };
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
                                    const t = { productCategory: null, productAppStoreID: null, localisedMonthlyPrice: null, localisedYearlyPrice: null, chargeInterval: null, rawPrice: null, introductoryOffer: void 0, paymentPlatform: "apple" };
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
                                        e?.subscriptionPeriodUnit && "string" == typeof e?.subscriptionPeriodUnit && (t.chargeInterval = i(e.subscriptionPeriodUnit)),
                                        e?.localisedMonthlyPrice && "string" == typeof e?.localisedMonthlyPrice && (t.localisedMonthlyPrice = e.localisedMonthlyPrice),
                                        e?.localisedYearlyPrice && "string" == typeof e?.localisedYearlyPrice && (t.localisedYearlyPrice = e.localisedYearlyPrice),
                                        e?.price && "number" == typeof e?.price && (t.rawPrice = e.price),
                                        e?.price && "number" == typeof e?.price && e?.introductoryOffer && "object" == typeof e?.introductoryOffer && e?.introductoryOffer?.localisedYearlyPrice && "string" == typeof e?.introductoryOffer?.localisedYearlyPrice && e?.introductoryOffer?.localisedMonthlyPrice && "string" == typeof e?.introductoryOffer?.localisedMonthlyPrice && e?.introductoryOffer?.period && "string" == typeof e?.introductoryOffer?.period && e?.introductoryOffer?.periodCount && "number" == typeof e?.introductoryOffer?.periodCount && e?.introductoryOffer?.endsAtMs && "number" == typeof e?.introductoryOffer?.endsAtMs && e?.introductoryOffer?.price && "number" == typeof e?.introductoryOffer?.price)
                                    ) {
                                        const r = Math.floor(((e?.price - e?.introductoryOffer?.price) / e.price) * 100);
                                        t.introductoryOffer = { localisedYearlyPrice: e?.introductoryOffer?.localisedYearlyPrice, localisedMonthlyPrice: e?.introductoryOffer?.localisedMonthlyPrice, chargeInterval: i(e?.introductoryOffer?.period), periodCount: e?.introductoryOffer?.periodCount, endsAtMs: e?.introductoryOffer?.endsAtMs, rawPrice: e?.introductoryOffer?.price, percentageSaved: r };
                                    }
                                    return t;
                                })(e),
                            )),
                        e.status && ["loading", "other"].includes(e.status) && (t.status = e.status),
                        e?.paywallDesignVariant &&
                            "string" == typeof e?.paywallDesignVariant &&
                            (t.paywallDesignVariant = ((e, t) => {
                                let r = a[e] ?? "default";
                                return n.includes(r) && !t.find((e) => !!e.introductoryOffer) && (r = "default"), r;
                            })(e.paywallDesignVariant, t.catalogItems)),
                        l.includes(t.paywallDesignVariant) && (t.withStripeButton = !0),
                        o.includes(t.paywallDesignVariant) && (t.replacePricesWithStripe = !0),
                        t
                    );
                };
        },
        366489: (e, t, r) => {
            r.d(t, { a: () => a });
            const a = (e, t) => (e ? (e.length <= t ? e : `${e.slice(0, t).trimEnd()}.`) : null);
        },
        802959: (e, t, r) => {
            r.r(t), r.d(t, { PremiumPurchaseSuccessScreen: () => x, default: () => T });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(107267),
                l = r(731708),
                i = r(167630),
                c = r(154003),
                s = r(138099),
                d = r(392237),
                u = r(111677),
                p = r.n(u),
                m = r(443781),
                g = r(952793),
                f = r(292546),
                h = r(782826),
                y = r(725405),
                b = r(125363),
                w = r(488645),
                E = r(668214),
                P = r(691213);
            const v = (0, E.Z)()
                    .propsFromActions(() => ({ fetchUserClaims: P.rS }))
                    .withAnalytics({ page: "premium", section: "registering" }),
                Z = p().c3d89aca,
                C = p().ebc84442,
                _ = p().e20f6662,
                I = p().a8eea654,
                S = "/i/flow/premium_signup_nux_flow",
                x = ({ fetchUserClaims: e }) => {
                    const [t, r] = a.useState("loading"),
                        d = (0, o.useHistory)(),
                        u = (0, y.Z)(),
                        [p] = (0, f.Z)(),
                        E = p.get("selectedProduct") ?? "",
                        P = p.get("selectedInterval") ?? "",
                        v = p.get("redirectAfterSuccess") ?? void 0,
                        { userClaims: x } = a.useContext(m.rC),
                        T = (0, b.I0)(),
                        z = a.useCallback(() => x.isAnyPremiumSubscriber(), [x]),
                        B = (0, g.hC)("identity_verification_intake_for_blue_subscribers_enabled"),
                        M = (0, g.hC)("identity_verification_settings_enabled"),
                        F = a.useCallback(
                            (e) => {
                                if (!v || !h.ZP.isXOrXaiUrl(decodeURIComponent(v))) {
                                    if ("PremiumBasic" === E) {
                                        const t = { requested_variant: "x_premium_basic" };
                                        return `${e}?input_flow_data=${encodeURIComponent(JSON.stringify(t))}`;
                                    }
                                    return e;
                                }
                                window.location.href = decodeURIComponent(v);
                            },
                            [E, v],
                        ),
                        O = a.useMemo(() => (M && B && "PremiumBasic" !== E ? { pathname: "/settings/account/id_verification/start", state: { redirectPath: S, flow: "premiumSubscription" } } : F(S)), [M, B, F, E]);
                    a.useEffect(() => {
                        let t = 0;
                        const a = setInterval(() => {
                            if (z()) {
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
                                    n = `${t}-${P}`;
                                u.scribe({ element: "payment", action: "success", page: "subscriptions", section: "marketing", component: n, data: { referring_page: e, referer: e } }), r("loaded"), clearInterval(a);
                            } else t >= 10 ? (r("failed"), clearInterval(a)) : ((t += 1), e({}));
                        }, 1e3);
                        return () => clearInterval(a);
                    }, [x, e, z, u, d.location, P, E]),
                        a.useEffect(() => {
                            "loaded" === t && T((0, w.q)("o8zly", "ojw68", null, "rweb.premiumLandingPage", !1));
                        }, [t, T]);
                    const D = a.useCallback(() => {
                            "loaded" === t && O ? d.push(O) : d.push("/home");
                        }, [t, d, O]),
                        R = a.useMemo(() => ("loading" === t ? a.createElement(n.Z, { style: { width: "100%" } }, a.createElement(l.ZP, { size: "headline1", weight: "heavy" }, C), a.createElement(i.Z, { style: k.activityIndicator, testID: "loadingIndicator" })) : "loaded" === t ? a.createElement(a.Fragment, null, a.createElement(l.ZP, { size: "title2", weight: "heavy" }, _), a.createElement(l.ZP, null, I), a.createElement(c.ZP, { onPress: D, size: "large", type: "primaryFilled" }, Z)) : null), [t, D]);
                    return a.createElement(s.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, onMaskClick: D, type: "center" }, a.createElement(n.Z, { style: k.root }, R));
                },
                k = d.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, activityIndicator: { marginTop: e.spaces.space12 } })),
                T = v(a.memo(x));
        },
        508111: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var a = r(202784),
                n = r(290402),
                o = r(883229),
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
                        a.createElement(o.N, { errorConfig: d }, a.createElement(n.Z, { fetchStatus: t, onRequestRetry: i, render: c, retryable: !0 }))
                    );
                });
        },
        778313: (e, t, r) => {
            r.r(t), r.d(t, { default: () => b });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(107267),
                l = r(138099),
                i = r(154003),
                c = r(731708),
                s = r(392237),
                d = r(111677),
                u = r.n(d),
                p = r(837020),
                m = r(323265);
            const g = u().ia5e7488,
                f = u().a893d602,
                h = u().fce91ab4,
                y = u().j1f5a580;
            function b(e) {
                const t = (0, o.useHistory)();
                function r() {
                    t.push("/home");
                }
                return a.createElement(l.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: r, style: w.root, type: "full" }, a.createElement(n.Z, { style: w.topBar }, a.createElement(i.ZP, { "aria-label": g, hoverLabel: { label: g }, icon: a.createElement(p.default, { style: w.topIcons }), onPress: r, pullRight: !0, size: "medium", type: "brandText" })), a.createElement(n.Z, { style: m.ZP.isMobileOS() ? w.contentSmall : w.content }, a.createElement(c.ZP, { size: "title2", style: w.title, weight: "heavy" }, h), a.createElement(c.ZP, { style: w.subtitle }, y), a.createElement(i.ZP, { onPress: r, size: "xLarge", type: "primaryFilled" }, f)));
            }
            const w = s.default.create((e) => ({ root: { minHeight: 600 }, topBar: { alignItems: "flex-start", flexDirection: "row", paddingTop: 15, paddingStart: 15 }, topIcons: { color: "#000" }, spacer: { width: e.spaces.space24 }, content: { paddingTop: 20, paddingStart: 100, paddingEnd: 100, overflowY: "auto" }, contentSmall: { paddingTop: 20, paddingStart: 20, paddingEnd: 20, overflowY: "auto" }, title: { marginBottom: 8 }, subtitle: { color: e.colors.gray700, marginBottom: 28 }, img: { height: 150, width: "100%", marginBottom: 28 }, closeButton: { paddingTop: 15 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-964cff98.0dcb851a.js.map

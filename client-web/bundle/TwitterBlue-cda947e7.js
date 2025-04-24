"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-cda947e7"],
    {
        498514: (e, t, r) => {
            r.d(t, { U: () => C });
            r(202784);
            var a = r(521058),
                n = r(847988),
                l = r(616894),
                o = r(376021),
                c = r(625823),
                i = r(839),
                s = r(266151),
                u = r(468670),
                d = r(913973),
                m = r(1753),
                p = r(748138),
                g = r(53674),
                f = r(164174),
                h = r(926981),
                y = r(642317),
                w = r(28862),
                E = r(376278),
                b = r(511323),
                Z = r(254944),
                P = r(465072),
                v = r(189700),
                x = r(520489),
                S = r(297938),
                k = r(457566);
            const C = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return n.default;
                    case "No":
                        return l.default;
                    case "WriteStroke":
                        return o.default;
                    case "AccountNft":
                        return c.default;
                    case "CameraVideoStroke":
                        return i.default;
                    case "Feather":
                        return s.default;
                    case "LockStroke":
                        return u.default;
                    case "Checkmark":
                        return d.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return k.x1;
                    case "MoneyStroke":
                        return p.default;
                    case "BarChart":
                        return g.default;
                    case "DeckStroke":
                        return f.default;
                    case "Film":
                        return h.default;
                    case "RocketStroke":
                        return y.default;
                    case "BookmarkCollectionsStroke":
                        return w.default;
                    case "FireStroke":
                        return E.default;
                    case "PersonStroke":
                        return b.default;
                    case "PaintbrushStroke":
                        return Z.default;
                    case "ModeratorStroke":
                        return P.default;
                    case "Document":
                        return v.default;
                    case "RadarStroke":
                        return x.default;
                    case "SearchPersonStroke":
                        return S.default;
                    default:
                        return () => null;
                }
            };
        },
        290008: (e, t, r) => {
            r.d(t, { Z: () => m });
            r(543673), r(240753), r(128399);
            var a = r(202784),
                n = r(107267),
                l = r(386802),
                o = r(147595),
                c = r(811574),
                i = r(548797),
                s = r(125363),
                u = r(488645),
                d = r(248186);
            const m = ({ content: e, isTierSwitching: t, referringPage: r, selectedInterval: m, selectedProduct: p, setSelectedInterval: g, setSelectedProduct: f }) => {
                const h = (0, n.useHistory)(),
                    y = (0, s.I0)(),
                    w = (0, c.Z)(),
                    E = a.useMemo(() => (0, o.R)(w), [w]),
                    { isModal: b } = a.useContext(l.Z),
                    Z = !b;
                a.useEffect(() => {
                    const e = !!E && (0, i.Ld)(E),
                        a = E && "Stripe" !== E?.payment_source && !e,
                        n = !!(0, i.gS)(E, "FreeTrial", { status: "active" }),
                        l = new URLSearchParams(window.location.search).get("twclid");
                    y((0, u.q)("o8zly", "ojw66", l, "rweb.premiumLandingPage", !0)), ((n && t) || a) && h.replace("/settings/subscription"), e && t && h.replace("/i/premium_cross_grade", { referring_page: r }), E && "Stripe" === E?.payment_source && !t && h.replace("/i/premium_tier_switch", { referring_page: r });
                }, [E, h, t, r, y]);
                const P = a.useMemo(() => !t && !Z, [Z, t]);
                return a.createElement(d.Z, { activeSubscription: E, content: e, isMobile: Z, isTierSwitching: t, selectedInterval: m, selectedProduct: p, setSelectedInterval: g, setSelectedProduct: f, shouldRemoveExtraStep: P });
            };
        },
        320479: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var a = r(807896),
                n = r(202784),
                l = r(325686),
                o = r(731708),
                c = r(392237),
                i = r(4452),
                s = r(725405),
                u = r(347561),
                d = r(19578),
                m = r(960700),
                p = r(557778),
                g = r(884020),
                f = r(466337),
                h = r(130821),
                y = r(313511),
                w = r(763419),
                E = r(689609);
            const b = ({ content: e, referringPage: t, selectedProduct: r, setSelectedProduct: o, state: c }) => {
                    const i = (0, s.Z)(),
                        [u, b] = n.useState(!1),
                        Z = n.useRef(null);
                    n.useEffect(() => {
                        i.scribe({ component: c.paywallDisplayType, element: c.paywallDesignVariant, action: "show" });
                    }, [i, c.paywallDesignVariant, c.paywallDisplayType]),
                        n.useEffect(() => {
                            const e = setTimeout(() => {
                                b(!0), Z.current && Z.current && (Z.current.style.opacity = 1);
                            }, 25);
                            return () => clearTimeout(e);
                        }, []);
                    const v = n.useRef(null),
                        [x, S] = n.useState(0),
                        k = n.useRef(null),
                        [C, _] = n.useState(0);
                    n.useEffect(() => {
                        S(v.current?.clientHeight ?? 0), _(k.current?.clientHeight ?? 0);
                    }, [v.current?.clientHeight, k.current?.clientHeight, u]);
                    const F = n.useMemo(() => ({ marginTop: x, marginBottom: C }), [x, C]),
                        z = c.catalogItems.filter((e) => e.productCategory === r),
                        I = n.useMemo(() => e.apiContent?.products?.findIndex((e) => e.product_category === r) || 0, [e.apiContent?.products, r]),
                        T = { content: e, referringPage: t, selectedProduct: r, setSelectedProduct: o, state: c, catalogItems: c.catalogItems, catalogItemsForProduct: z, headerRef: v, footerRef: k, headerFooterOffset: F, selectedProductIndex: I };
                    return n.createElement(
                        d.P.Provider,
                        { value: { footerHeight: C, headerHeight: x } },
                        n.createElement(l.Z, { style: [P.cover, u ? P.show : P.hide] }),
                        n.createElement(
                            l.Z,
                            { ref: Z, style: P.root, testID: c.paywallDesignVariant },
                            (() => {
                                switch (c.paywallDesignVariant) {
                                    case "feature_focused":
                                        return n.createElement(m.Z, T);
                                    case "one_click":
                                        return n.createElement(f.Z, T);
                                    case "v1_1_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, T));
                                    case "v1_1_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, T));
                                    case "v1_2_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !0 }, T));
                                    case "v1_2_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !0 }, T));
                                    case "v1_3_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, T));
                                    case "v1_3_1_dynamic":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !1, withUpsellTier: !1 }, T));
                                    case "v1_3_1_blue":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, T));
                                    case "v1_3_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, T));
                                    case "v1_3_2_dynamic":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !0, withUpsellTier: !1 }, T));
                                    case "v1_3_2_blue":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, T));
                                    case "offer_v1_1":
                                        return n.createElement(g.Z, (0, a.Z)({}, T, { primaryColor: "gold", withAnnualPriceMonthly: !1 }));
                                    case "offer_v1_2":
                                        return n.createElement(g.Z, (0, a.Z)({}, T, { primaryColor: "blue", withAnnualPriceMonthly: !1 }));
                                    case "offer_v2_1":
                                        return n.createElement(g.Z, (0, a.Z)({}, T, { primaryColor: "gold", withAnnualPriceMonthly: !0 }));
                                    case "offer_v2_2":
                                        return n.createElement(g.Z, (0, a.Z)({}, T, { primaryColor: "blue", withAnnualPriceMonthly: !0 }));
                                    case "special":
                                        return n.createElement(h.Z, T);
                                    case "v2":
                                        return n.createElement(w.Z, (0, a.Z)({}, T, { withPurchaseSheet: !0 }));
                                    case "v2_2":
                                        return n.createElement(w.Z, (0, a.Z)({}, T, { withIntervalSelector: !1, withPurchaseSheet: !1 }));
                                    case "v2_3":
                                        return n.createElement(w.Z, (0, a.Z)({}, T, { withIntervalSelector: !0, withPurchaseSheet: !1 }));
                                    case "v3":
                                        return n.createElement(E.Z, (0, a.Z)({}, T, { withPurchaseSheet: !1 }));
                                    default:
                                        return n.createElement(p.Z, T);
                                }
                            })(),
                        ),
                    );
                },
                Z = (e) => {
                    const t = (0, s.Z)();
                    (0, i.ZP)();
                    const [r, c] = (0, u.Z)();
                    n.useEffect(() => {
                        (0, i.jW)("premium-paywall-content-ready"), t.scribe({ element: "content-ready", action: "sent" });
                    }, [t]);
                    const d = r && 0 !== r?.catalogItems.length ? n.createElement(b, (0, a.Z)({}, e, { state: r })) : n.createElement(l.Z, { testID: "activity-indicator" });
                    return n.createElement(n.Fragment, null, d, r?.printDebug ? n.createElement(l.Z, { style: P.printDebug, testID: "webview-paywall-debug" }, n.createElement(o.ZP, null, JSON.stringify(c, null, " \t"))) : null);
                },
                P = c.default.create((e) => ({ activityIndicator: { height: "100vh", display: "flex", justifyContent: "center" }, root: { WebkitUserSelect: "none", userSelect: "none" }, cover: { pointerEvents: "none", opacity: 1, transition: "opacity 100ms", position: "absolute", backgroundColor: e.colors.cellBackground, zIndex: 1, width: "100%", height: "100%" }, show: { opacity: 0 }, hide: { opacity: 1 }, printDebug: { marginBottom: e.spaces.space72 } }));
        },
        192933: (e, t, r) => {
            r.d(t, { Z: () => T });
            var a = r(202784),
                n = r(174326),
                l = r(392237),
                o = r(674132),
                c = r.n(o),
                i = r(725405),
                s = r(285919),
                u = r(960844),
                d = r(325686),
                m = r(731708),
                p = r(530732),
                g = r(215337),
                f = r(19578),
                h = r(934912),
                y = r(30899),
                w = r(154003),
                E = r(711223);
            const b = c().i859a9d4,
                Z = ({ changeToTier: e, feature: t }) => {
                    return a.createElement(d.Z, { style: P.feature }, a.createElement(d.Z, { style: P.featureInner }, a.createElement(m.ZP, { size: "headline1", style: [P.emoji, t.iconColor && { color: l.default.theme.colors[t.iconColor] }] }, t.locked ? t?.icon : t?.emoji || t?.icon), a.createElement(d.Z, { style: P.text }, a.createElement(m.ZP, { weight: "bold" }, t.header), t.subtext ? a.createElement(m.ZP, { color: "gray700", size: "subtext1" }, t.subtext) : null), t.description ? ((r = t.header), (n = t.description), a.createElement(y.Z, { contentStyle: P.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(d.Z, { style: P.infoContainer }, a.createElement(m.ZP, { color: "text", size: "title4", style: P.infoDescription, weight: "heavy" }, r), a.createElement(m.ZP, { color: "gray700", size: "body", style: P.infoDescription }, n)), withArrow: !0 }, a.createElement(w.ZP, { "aria-label": b, icon: v, size: "xSmall", style: P.infoButton, type: "primaryText" }))) : null), t.cta ? a.createElement(w.ZP, { onClick: () => e(t.cta?.targetTier), size: "xSmall", type: "brandText" }, t.cta.label) : null);
                    var r, n;
                },
                P = l.default.create((e) => ({ feature: { width: "100%", paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, flexDirection: "row" }, featureInner: { paddingHorizontal: e.spaces.space20, flexDirection: "row", alignItems: "center", flex: 1 }, emoji: { marginEnd: e.spaces.space16, minWidth: 25 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray600 }, infoPopoverContent: { maxWidth: "2em" }, iconInfo: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 }, infoContainer: { padding: e.spaces.space24, paddingBottom: e.spaces.space48 }, infoDescription: { marginTop: e.spaces.space8 }, text: { flexShrink: 1, gap: e.spaces.space4 } })),
                v = a.createElement(E.default, { style: P.iconInfo });
            var x = r(985529);
            const S = (e, t) => e?.filter((e) => !t?.map((e) => e.header).includes(e.header)),
                k = c().dfc5f972,
                C = ({ content: e, hideTitle: t, prices: r, productCategory: n, productContent: o, referringPage: c, selectedInterval: i, selectedProduct: s, setSelectedProduct: u, setShowExtraFeatures: y, showExtraFeatures: w, withExtraFeatures: E, withFeatureFocus: b, withOfferCard: P, withUpsellTier: v }) => {
                    const C = (0, f.Z)(),
                        { gray0: F, gray50: z } = l.default.theme.colors,
                        I = a.useRef(null);
                    a.useEffect(() => {
                        const { current: e } = I;
                        if (e)
                            if (w) {
                                const t = window?.visualViewport?.height,
                                    r = t - (C?.headerHeight || 0) - e.getBoundingClientRect().height;
                                window.scrollBy({ top: r, behavior: "smooth" });
                            } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }, [w, C]);
                    const T = a.useCallback(
                            (e) => {
                                e && (w && y(!1), u(e), window.scrollTo(0, 0));
                            },
                            [u, w, y],
                        ),
                        D = !!r.find((e) => e.introductoryOffer && e.productCategory === n)?.introductoryOffer,
                        B = c ? e.localContent.refererContent[c] : null,
                        M = b && c && !!B?.features;
                    return a.createElement(
                        a.Fragment,
                        null,
                        P ? a.createElement(x.Z, { content: e, prices: r, selectedProduct: n }) : null,
                        D || M ? (D ? null : a.createElement(d.Z, { style: _.featureFocusSection, testID: "feature_focus_section" }, a.createElement(d.Z, { style: _.featureHeadline, testID: "dynamic-header" }, a.createElement(m.ZP, { align: "center", size: "title2", style: _.title, weight: "heavy" }, B?.title), B?.subtitle ? a.createElement(m.ZP, { align: "center", style: _.description }, B.subtitle) : null), B?.features?.[0] ? a.createElement(d.Z, { style: _.featureFocusFeature }, a.createElement(Z, { changeToTier: T, feature: B?.features?.[0] })) : null, a.createElement(m.ZP, { align: "center", color: "gray700", style: _.muchMoreLabel, weight: "medium" }, k))) : a.createElement(h.Z, { content: e, fallbackHeader: o.header, referringPage: c }),
                        a.createElement(
                            d.Z,
                            { style: _.container, testID: `product-features-${n}` },
                            (M ? S(o.features, B?.features) : o.features)?.map((e, t) => a.createElement(Z, { changeToTier: T, feature: e, key: `feature_${t}` })),
                            v && o.upsellFeature ? a.createElement(p.Z, { onClick: () => T(o.upsellFeature?.targetTier), style: _.feature }, a.createElement(g.Z, { colors: [z, F], style: _.gradient }), a.createElement(d.Z, { style: _.featureInner }, a.createElement(m.ZP, { size: "headline1", style: _.emoji }, o.upsellFeature?.icon), a.createElement(m.ZP, { weight: "bold" }, o.upsellFeature.header))) : null,
                            E && o.extraFeatures
                                ? o.extraFeatures.map((e, t) =>
                                      a.createElement(
                                          a.Fragment,
                                          { key: t },
                                          e.label ? a.createElement(m.ZP, { align: "center", color: "gray700", style: _.extraFeaturesLabel, weight: "medium" }, e.label) : null,
                                          a.createElement(
                                              d.Z,
                                              { style: _.extraFeatures, testID: "extra-features" },
                                              (M ? S(e.features, B?.features) : e.features)?.map((e, r) => a.createElement(Z, { changeToTier: T, feature: e, key: `extra_feature_${t}_feautre_${r}` })),
                                          ),
                                      ),
                                  )
                                : null,
                        ),
                    );
                },
                _ = l.default.create((e) => ({ container: { gap: e.spaces.space8, paddingHorizontal: e.spaces.space4 }, extraFeatures: { gap: e.spaces.space8 }, gradient: { position: "absolute", width: "100%", height: "100%", top: 0, borderRadius: e.borderRadii.medium }, title: { marginBottom: e.spaces.space16 }, extraFeaturesLabel: { marginVertical: e.spaces.space4 }, feature: { width: "100%", paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, flexDirection: "row" }, featureInner: { paddingHorizontal: e.spaces.space20, flexDirection: "row", alignItems: "center", flex: 1 }, emoji: { marginEnd: e.spaces.space16, minWidth: 25 }, featureHeadline: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space8 }, description: { textAlign: "center" }, featureFocusSection: { paddingHorizontal: e.spaces.space4 }, featureFocusFeature: { marginTop: e.spaces.space16 }, muchMoreLabel: { paddingVertical: e.spaces.space12 } })),
                F = c().i7fbacc4,
                z = ({ content: e, hideTitle: t, prices: r, productListLayout: l, products: o, referringPage: c, selectedInterval: d, selectedProduct: m, selectedProductIndex: p, setSelectedProduct: g, setShowAllFeaturesPage: f, setShowExtraFeatures: h, showExtraFeatures: y, withExtraFeatures: w, withFeatureFocus: E, withOfferCard: b, withUpsellTier: Z }) => {
                    const P = (0, i.Z)(),
                        v = a.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                if (1 === t && o?.[e].product_category) {
                                    const t = o?.[e].product_category;
                                    g(t), h(!1), window.scrollTo(0, 0), P.scribe({ component: "product_selector", element: t, action: "click", data: { referring_page: c ?? void 0 } });
                                }
                            },
                            [P, c, o, g, h],
                        ),
                        x = "V2" === l ? s.Z : "V3" === l ? u.Z : C;
                    return a.createElement(
                        n.Z,
                        { "aria-label": F, childrenStyle: [I.children, { alignItems: "V3" === l ? "center" : null }], navButtonStyle: I.navButtonStyle, onVisibleRangeChange: v, scrollToCenter: !0, showNavButtonsOnHover: !0, showOverflow: !0, style: I.carousel, visibleItemIndex: p, withScrollIntoView: !1 },
                        o?.map((n, l) => (n.product_category ? a.createElement(x, { content: e, hideTitle: t, key: l, prices: r, productCategory: n.product_category, productContent: e.localContent.productContent[n.product_category], referringPage: c, selectedInterval: d, selectedProduct: m, selectedProductIndex: p, setSelectedProduct: g, setShowAllFeaturesPage: f || (() => {}), setShowExtraFeatures: h, showExtraFeatures: y, withExtraFeatures: w, withFeatureFocus: E, withOfferCard: b, withUpsellTier: Z }) : null)),
                    );
                },
                I = l.default.create((e) => ({ navButtonStyle: { top: 0, height: "100%", justifyContent: "start", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space8 }, children: { width: "100%", scrollSnapAlign: "center" }, carousel: { flexGrow: 1 } })),
                T = a.memo(z);
        },
        381214: (e, t, r) => {
            r.d(t, { Z: () => x });
            var a = r(202784),
                n = r(325686),
                l = r(67369),
                o = r(708852),
                c = r(30899),
                i = r(731708),
                s = r(154003),
                u = r(721266),
                d = r(392237),
                m = r(674132),
                p = r.n(m),
                g = r(837020),
                f = r(913973),
                h = r(711223);
            r(136728);
            const y = (e) => {
                    const t = [],
                        r = ((e) => {
                            const t = new Set();
                            return (
                                e.forEach((e) => {
                                    e.feature_buckets &&
                                        e.feature_buckets.buckets.forEach((e) => {
                                            t.add(e.title);
                                        });
                                }),
                                t
                            );
                        })(e);
                    return (
                        r.forEach((r) => {
                            const a = ((e, t) => {
                                    const r = new Set();
                                    return (
                                        e.forEach((e) => {
                                            e.feature_buckets?.buckets.find((e) => e.title === t)?.features.forEach((e) => r.add(e.title));
                                        }),
                                        r
                                    );
                                })(e, r),
                                n = ((e, t, r) => ({
                                    header: [t, ...e.map((e) => e.title ?? "")],
                                    rows: Array.from(r).map((r) => [
                                        r,
                                        ...e.map((e) => {
                                            const a = e.feature_buckets?.buckets?.find((e) => e.title === t),
                                                n = a?.features.find((e) => e.title === r);
                                            return "Checkmark" === n?.icon ? n : null;
                                        }),
                                    ]),
                                }))(e, r, a);
                            t.push(n);
                        }),
                        t
                    );
                },
                w = "compareTitle",
                E = p().i859a9d4,
                b = p().acfaf7a0,
                Z = ({ products: e }) => {
                    const t = (0, l.Mv)(),
                        r = (0, o.Gz)(),
                        d = a.useMemo(() => y(e), [e]),
                        m = t ? P.marginSmall : r ? P.marginLarge : P.marginMedium,
                        p = (e) => {
                            const t = e.find((e) => "object" == typeof e && e?.description);
                            if ("object" == typeof t && t) return a.createElement(c.Z, { contentStyle: P.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: () => a.createElement(n.Z, { style: P.infoContainer }, a.createElement(i.ZP, { size: "title4", weight: "medium" }, t.title), a.createElement(i.ZP, { color: "gray700", style: P.infoDescription }, t.description)) }, a.createElement(s.ZP, { "aria-label": E, icon: v, size: "xSmall", style: P.infoButton, type: "primaryText" }));
                        },
                        h = a.useCallback((e) => (null === e ? (t ? a.createElement(g.default, { styles: P.iconDivider }) : null) : "string" == typeof e ? a.createElement(i.ZP, null, e) : "object" == typeof e ? (e.variant ? a.createElement(n.Z, { style: P.cellVariant }, a.createElement(i.ZP, { color: "text" }, e.variant), p([e])) : a.createElement(f.default, { style: P.iconCheckmark })) : void 0), [t]),
                        Z = a.useMemo(() => ({ width: `${t ? 100 / e.length : 100 / (e.length + 1)}%` }), [e.length, t]);
                    return a.createElement(
                        n.Z,
                        { style: [P.table, m] },
                        a.createElement(i.ZP, { size: "title3", testID: w, weight: "bold" }, b),
                        d.map((e, r) =>
                            a.createElement(
                                n.Z,
                                { key: `table-section-${r}`, style: P.section },
                                ((e, r) =>
                                    a.createElement(
                                        a.Fragment,
                                        null,
                                        t ? a.createElement(n.Z, { style: P.row }, a.createElement(n.Z, { style: P.cell }, a.createElement(i.ZP, { size: "headline2", weight: "bold" }, e[0]))) : null,
                                        a.createElement(
                                            n.Z,
                                            { style: P.row },
                                            e.slice(t ? 1 : 0).map((e, t) => a.createElement(n.Z, { key: `table-header-${r}-col-${t}`, style: [P.cell, Z] }, a.createElement(i.ZP, { size: "headline2", weight: "bold" }, e))),
                                        ),
                                    ))(e.header, r),
                                a.createElement(u.Z, { size: "space1", style: P.spacer }),
                                ((e, r) =>
                                    e.map((e, l) => {
                                        const o = e.find((e) => "string" != typeof e && e?.variant && e?.variant.length > 0);
                                        return a.createElement(
                                            a.Fragment,
                                            { key: `table-section-${r}-row-${l}` },
                                            t ? a.createElement(n.Z, { style: P.row }, a.createElement(i.ZP, { color: "gray900" }, h(e[0])), o ? null : p(e)) : null,
                                            a.createElement(
                                                n.Z,
                                                { style: P.row },
                                                e.slice(t ? 1 : 0).map((c, s) => a.createElement(n.Z, { key: `table-section-${r}-row-${l}-cell-${s}`, style: [P.cell, Z] }, a.createElement(i.ZP, { color: "gray900" }, h(c)), 0 !== s || t || o ? null : p(e))),
                                            ),
                                            a.createElement(u.Z, { size: "space1", style: P.spacer }),
                                        );
                                    }))(e.rows, r),
                            ),
                        ),
                    );
                },
                P = d.default.create((e) => ({ marginSmall: { marginTop: e.spaces.space48 }, marginMedium: { marginTop: e.spaces.space72 }, marginLarge: { marginTop: e.spaces.space64 }, table: { width: "100%", maxWidth: "980px", paddingBottom: 300 * e.scaleMultiplier }, section: { marginTop: e.spaces.space32 }, row: { flexDirection: "row", paddingVertical: e.spaces.space8, alignItems: "center" }, cell: { alignItems: "center", flexDirection: "row" }, spacer: { backgroundColor: e.colors.gray50 }, iconInfo: { color: e.colors.gray900, fontSize: e.fontSizes.headline2 }, iconCheckmark: { fontSize: e.fontSizes.headline2, color: e.colors.text }, iconDivider: { fontSize: e.fontSizes.body, color: e.colors.gray700 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 }, infoContainer: { padding: e.spaces.space24 }, infoDescription: { marginTop: e.spaces.space8 }, infoPopoverContent: { maxWidth: "2em" }, cellVariant: { alignItems: "center", flexDirection: "row" } })),
                v = a.createElement(h.default, { style: P.iconInfo }),
                x = a.memo(Z);
        },
        278637: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                l = r(280278),
                o = r(731708),
                c = r(392237),
                i = r(674132),
                s = r.n(i),
                u = r(392446);
            const d = s().g93586be,
                m = s().d073b644,
                p = s().a2f0728e,
                g = s().j4b4310e,
                f = ({ endsAtMsec: e }) => {
                    const [t] = (0, u.Z)(e);
                    return a.createElement(n.Z, { style: h.container }, a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.days), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, d)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.hours), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, m)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.minutes), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, p)), a.createElement(n.Z, { style: h.section }, a.createElement(l.ZP, { size: "title4", weight: "bold" }, t.seconds), a.createElement(o.ZP, { color: "gray900", size: "subtext2" }, g)));
                },
                h = c.default.create((e) => ({ container: { flexDirection: "row", borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray50 }, section: { alignItems: "center", flexDirection: "column", flexGrow: 1, padding: e.spaces.space16 } }));
        },
        392446: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784);
            const n = (e) => {
                    const t = e - Date.now();
                    return { days: Math.floor(t / 864e5), hours: Math.floor((t % 864e5) / 36e5), minutes: Math.floor((t % 36e5) / 6e4), seconds: Math.floor((t % 6e4) / 1e3) };
                },
                l = (e) => {
                    const [t, r] = a.useState(n(e)),
                        [l, o] = a.useState(0);
                    return (
                        a.useEffect(() => {
                            let t = null;
                            const a = () => {
                                const a = Date.now(),
                                    l = e - a;
                                o(l), l < 0 ? (clearInterval(t), r({ days: 0, hours: 0, minutes: 0, seconds: 0 })) : r(n(e));
                            };
                            return (
                                a(),
                                (t = setInterval(a, 1e3)),
                                () => {
                                    clearInterval(t);
                                }
                            );
                        }, [e]),
                        [t, l]
                    );
                };
        },
        690559: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(277660),
                l = r.n(n),
                o = r(731708),
                c = r(688715),
                i = r(674132),
                s = r.n(i),
                u = r(847579),
                d = r(725405),
                m = r(512923);
            const p = ({ disclaimerRef: e, freeTrialInfo: t, styleOverrides: r }) => {
                    const n = (0, d.Z)(),
                        i = l()(m.WL, e),
                        { disclaimerFontColor: p, disclaimerFontSize: g, withoutDisclaimerBorder: f } = r ?? {},
                        { disclaimer_cancel_url: h, disclaimer_cancel_url_text: y, disclaimer_text: w, disclaimer_url: E, disclaimer_url_text: b } = i,
                        Z = a.useMemo(() => ("string" == typeof w && w.includes("@#!") ? w.split("@#!") : new Array(2)), [w]),
                        P = a.useCallback(() => {
                            n.scribe({ action: "click", element: "terms_of_service" });
                        }, [n]);
                    return t ? a.createElement(u.Z, null, a.createElement(o.ZP, null, a.createElement(s().I18NFormatMessage, { $i18n: "bec92f3b", numberOfDays: t.metadata.free_trial_days || 14 }, a.createElement(o.ZP, { color: "text", link: (0, c.ju)("https://help.x.com/using-x/x-premium-trial-promotion"), onPress: P, weight: "medium", withUnderline: !0 }, s().af863ee9), a.createElement(o.ZP, { color: "text", link: E || (0, c.ju)("https://legal.x.com/purchaser-terms"), weight: "medium", withUnderline: !0 }, s().f5705987), a.createElement(o.ZP, { color: "text", link: h || (0, c.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"), onPress: P, weight: "medium", withUnderline: !0 }, y, s().h89dabac)))) : a.createElement(u.Z, { styleOverrides: { disclaimerFontSize: g, disclaimerFontColor: p }, withoutBorder: f }, 2 === Z.length ? a.createElement(a.Fragment, null, a.createElement(o.ZP, null, Z[0]), a.createElement(o.ZP, { color: p || "text", link: E || (0, c.ju)("https://legal.x.com/purchaser-terms"), onPress: P, weight: "medium", withUnderline: !0 }, b), a.createElement(o.ZP, null, Z[1])) : 3 === Z.length ? a.createElement(a.Fragment, null, a.createElement(o.ZP, null, Z[0]), a.createElement(o.ZP, { color: p || "text", link: E || (0, c.ju)("https://legal.x.com/purchaser-terms"), onPress: P, weight: "medium", withUnderline: !0 }, b), a.createElement(o.ZP, null, Z[1]), a.createElement(o.ZP, { color: p || "text", link: h || (0, c.ju)("https://legal.x.com/purchaser-terms.html#cancelpremium"), onPress: P, weight: "medium", withUnderline: !0 }, y), a.createElement(o.ZP, null, Z[2])) : null);
                },
                g = a.memo(p);
        },
        439607: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(325686),
                l = r(392237);
            const o = ({ activeIndex: e, totalDots: t = 3 }) =>
                    a.createElement(
                        n.Z,
                        { style: c.dotContainer },
                        Array.from({ length: t }).map((t, r) => a.createElement(n.Z, { key: r, style: [c.dot, r === e && c.dotActive] })),
                    ),
                c = l.default.create((e) => ({ dotContainer: { flexDirection: "row", justifyContent: "center" }, dot: { width: 7, height: 7, borderRadius: 5, marginHorizontal: 4, backgroundColor: e.colors.gray500 }, dotActive: { backgroundColor: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.whiteOnColor } }));
        },
        934912: (e, t, r) => {
            r.d(t, { Z: () => s, k: () => c });
            var a = r(202784),
                n = r(325686),
                l = r(731708),
                o = r(392237);
            const c = ["grok", "get_verified", "verification_reason_dialog", "analytics", "ads_rev_share", "monetization_promo_page", "creator_subs", "radar", "reply_boost", "bookmark", "offline_videos"],
                i = (e, t, r = !1) => (t ? ({ darkMode: { color: r ? o.default.theme.colors.alwaysDarkGray700 : o.default.theme.colors.white, textAlign: "start", fontWeight: r ? null : o.default.theme.fontWeights.medium, fontSize: r ? null : o.default.theme.fontSizes.title4, marginBottom: r ? null : o.default.theme.spaces.space12 } }[t] ?? void 0) : void 0),
                s = ({ content: e, fallbackDescription: t, fallbackHeader: r, referringPage: s, variant: d, withoutDescription: m }) => (c.find((e) => s?.includes(e)) ? a.createElement(n.Z, { style: u.featureHeadline, testID: "dynamic-header" }, a.createElement(l.ZP, { size: "title3", style: [u.title, i(o.default.theme, d)], weight: "heavy" }, e.apiContent?.header?.title), !m && a.createElement(l.ZP, { style: [u.description, i(o.default.theme, d, !0)] }, e.apiContent?.header?.description)) : r ? a.createElement(n.Z, { style: u.featureHeadline, testID: "dynamic-header" }, a.createElement(l.ZP, { align: "center", size: "title2", style: [u.title, i(o.default.theme, d)], weight: "heavy" }, r), t && a.createElement(l.ZP, { style: [u.description, i(o.default.theme, d, !0)] }, t)) : null),
                u = o.default.create((e) => ({ featureHeadline: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space8 }, title: { textAlign: "center", marginBottom: e.spaces.space8 }, description: { textAlign: "center" } }));
        },
        867754: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                n = r(202784),
                l = r(325686),
                o = r(67369),
                c = r(708852),
                i = r(731708),
                s = r(392237),
                u = r(674132),
                d = r.n(u),
                m = r(952793),
                p = r(278637);
            const g = d().e1606e52,
                f = ({ content: e, header: t, isMobile: r, isTierSwitching: s, offerContent: u, offerEndsAtMsec: f, renderOfferContent: h }) => {
                    const w = (0, o.Mv)(),
                        E = (0, m.hC)("subscriptions_management_tier_switch_improvements_enabled"),
                        b = (0, c.Gz)(),
                        Z = w ? y.marginSmall : b ? y.marginLarge : y.marginMedium,
                        P = w ? { size: "title3", style: y.titleSmall } : b ? { style: y.titleLarge } : { size: "title1", style: y.titleMedium },
                        v = w ? "body" : b ? "headline1" : "headline2",
                        x = w ? y.countdownSmall : b ? y.countdownLarge : y.countdownMedium;
                    return n.createElement(l.Z, null, n.createElement(l.Z, { style: [y.header, Z, y.container] }, n.createElement(i.ZP, (0, a.Z)({}, P, { weight: "bold" }), s && E ? g : h ? u.title : t.title), n.createElement(i.ZP, { color: "gray900", size: v }, h ? null : t.description), h && f ? n.createElement(n.Fragment, null, n.createElement(i.ZP, { color: "gray900", size: v }, u.subtitle), n.createElement(l.Z, { style: [y.countdown, x] }, n.createElement(p.Z, { endsAtMsec: f }))) : null, h ? null : n.createElement(i.ZP, { color: "gray900", size: v, style: y.voLink }, n.createElement(d().I18NFormatMessage, { $i18n: "c57cd3a3" }, n.createElement(i.ZP, { color: "text", link: "/i/verified-orgs-signup", underlineWeight: "heavy", weight: "bold", withUnderline: !0 }, d().d2f2b91a)))));
                },
                h = n.memo(f),
                y = s.default.create((e) => ({ container: { alignItems: "center", flex: 1, width: "100%", maxWidth: "1280px", marginHorizontal: "auto", paddingHorizontal: e.spaces.space16 }, marginSmall: { marginTop: e.spaces.space56 }, marginMedium: { marginTop: e.spaces.space48 }, marginLarge: { marginTop: 144 * e.scaleMultiplier }, header: { textAlign: "center", maxWidth: 900, alignItems: "center", zIndex: 1, top: 20 }, titleSmall: { marginBottom: e.spaces.space16 }, titleMedium: { marginBottom: e.spaces.space16, fontSize: 54 * e.scaleMultiplier, lineHeight: 60 * e.scaleMultiplier }, titleLarge: { marginBottom: e.spaces.space24, fontSize: 64 * e.scaleMultiplier, lineHeight: 70 * e.scaleMultiplier }, countdown: { maxWidth: "500px", width: "100%" }, countdownSmall: { marginTop: e.spaces.space16 }, countdownMedium: { marginTop: e.spaces.space48 }, countdownLarge: { marginTop: e.spaces.space48 }, voLink: { marginTop: e.spaces.space8 } }));
        },
        985529: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                l = r(731708),
                o = r(392237),
                c = r(674132),
                i = r.n(c),
                s = r(952793),
                u = r(968831),
                d = r(789769);
            const m = i().h3629783,
                p = ({ content: e, prices: t, selectedProduct: r }) => {
                    const o = t.find((e) => e.introductoryOffer && e.productCategory === r)?.introductoryOffer,
                        c = (0, s.wW)("premium_webview_paywall_offer_image_url"),
                        i = c.length > 0,
                        { cardSubtitle: p, cardTitle: f } = (0, u.Z)({ content: e });
                    if (!o?.percentageSaved) return null;
                    const h = { backgroundImage: `url(${c})`, backgroundSize: "cover" },
                        y = new Date(parseInt(o.endsAtMs, 10)),
                        w = m(y);
                    return a.createElement(n.Z, { style: [g.card, i ? h : null] }, a.createElement(l.ZP, { align: "center", color: "whiteOnColor", size: "headline2", weight: "bold" }, f({ percentage: o?.percentageSaved, tier: "Premium", plan: d.Z.Year })), a.createElement(l.ZP, { align: "center", color: "whiteOnColor", size: "subtext1" }, p?.({ date: w })));
                },
                g = o.default.create((e) => ({ card: { paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space16, borderRadius: e.borderRadii.medium, gap: e.spaces.space4, backgroundColor: e.colors.alwaysBlack, marginBottom: e.spaces.space8 }, image: {} }));
        },
        330463: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(325686),
                l = r(154003),
                o = r(731708),
                c = r(392237),
                i = r(674132),
                s = r.n(i),
                u = r(894966),
                d = r(913973),
                m = r(627706);
            const p = s().b601cfbb,
                g = ({ catalogItems: e, content: t, selectedProduct: r, setShowAllFeaturesPage: c }) => {
                    const i = t.localContent.productContent;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(l.ZP, {
                            icon: a.createElement(u.default, null),
                            onPress: () => {
                                c(!1);
                            },
                            style: [f.dismissButton, f.header, { position: "absolute" }],
                        }),
                        a.createElement(
                            n.Z,
                            { style: f.container },
                            a.createElement(o.ZP, { style: f.title }, "Learn about every upgrade you get with X Premium"),
                            Object.entries(i).map(([r, l]) => {
                                const c = e.filter((e) => e.productCategory === r),
                                    s = c.find((e) => "Month" === e.chargeInterval),
                                    u = s ? p({ price: s.localisedMonthlyPrice || "undefined" }) : "Currently unavailable";
                                return a.createElement(n.Z, { key: r, style: f.section }, a.createElement(n.Z, { style: f.separator }), a.createElement(o.ZP, { style: f.sectionTitle }, l.productName), i[r].featureAddOnLabel && a.createElement(o.ZP, { style: f.premiumFeatureUpgrades }, i[r].featureAddOnLabel), Array.isArray(l.allFeatureHeaders) && l.allFeatureHeaders.map((e, t) => a.createElement(n.Z, { key: t, style: f.featureRow }, a.createElement(o.ZP, { style: f.featureText }, e), a.createElement(d.default, { style: f.checkmark }))), a.createElement(n.Z, { style: f.buttonContainer }, a.createElement(m.Z, { catalogItemsForProduct: c, content: t, label: u, selectedProduct: r })));
                            }),
                        ),
                    );
                },
                f = c.default.create((e) => ({ container: { flex: 1, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16, marginTop: e.spaces.space36, marginBottom: e.spaces.space4, position: "relative" }, dismisserButton: { position: "absolute", start: 0, top: 10 }, dismissButton: { position: "absolute", start: e.spaces.space4, bottom: 0, top: e.spaces.space12, border: "transparent" }, header: { alignItems: "center", justifyContent: "center", position: "fixed", zIndex: 1, height: e.spaces.space2, width: e.spaces.space2 }, separator: { borderBottomColor: e.colors.gray200, borderBottomWidth: 1, marginBottom: e.spaces.space12 }, title: { fontSize: e.fontSizes.headline1, fontWeight: "700", marginBottom: e.spaces.space12, lineHeight: e.spaces.space24 }, section: { marginBottom: e.spaces.space8 }, sectionTitle: { fontSize: e.fontSizes.headline2, fontWeight: "700", marginBottom: e.spaces.space8 }, featureRow: { flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space12 }, featureText: { fontSize: e.fontSizes.body, flex: 1, fontWeight: "400" }, premiumFeatureUpgrades: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700, marginBottom: e.spaces.space8 }, checkmark: { color: e.colors.green500, marginStart: e.spaces.space8, fontSize: e.fontSizes.body, fontWeight: "bold" }, buttonContainer: { marginVertical: e.spaces.space4 } }));
        },
        632396: (e, t, r) => {
            r.d(t, { Z: () => D });
            var a = r(202784),
                n = r(174326),
                l = r(392237),
                o = r(674132),
                c = r.n(o),
                i = r(725405),
                s = r(325686),
                u = r(277660),
                d = r.n(u),
                m = r(731708),
                p = r(30899),
                g = r(154003),
                f = r(868634),
                h = r(711223),
                y = r(562041),
                w = r(548797),
                E = r(498514),
                b = r(512923),
                Z = r(985529);
            const P = c().be103b84,
                v = c().i859a9d4,
                x = c().c9cc122b,
                S = c().bff35771,
                k = ({ dismiss: e, feature: t }) => {
                    const { ref: r } = (0, y.G)(e);
                    return a.createElement(s.Z, { ref: r, style: C.infoContainer }, a.createElement(m.ZP, { size: "title4", weight: "medium" }, t.title), a.createElement(m.ZP, { color: "gray700", style: C.infoDescription }, t.description));
                },
                C = l.default.create((e) => ({ carouselHeader: { paddingHorizontal: e.spaces.space48, paddingVertical: e.spaces.space12, borderRadius: e.borderRadii.large, position: "sticky", justifyContent: "center", marginVertical: e.spaces.space8, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: e.colors.gray50, flexDirection: "row" }, carouselItem: { width: "100%", height: "100%", flexGrow: 1, display: "flex", flexDirection: "column" }, activeLabel: { marginStart: e.spaces.space8 }, featureBucketFeatureTextContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, variantText: { maxWidth: "60%", textAlign: "end" }, featureCard: { paddingHorizontal: e.spaces.space24, paddingTop: e.spaces.space20, paddingBottom: e.spaces.space8, marginVertical: e.spaces.space8, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large }, featureCardTitle: { marginBottom: e.spaces.space12 }, featureHeadlineContainer: { display: "flex", flexDirection: "row", marginBottom: e.spaces.space8 }, iconGrey: { color: e.colors.gray700 }, infoButton: { marginStart: e.spaces.space4, color: e.colors.gray700 }, infoContainer: { padding: e.spaces.space24 }, infoDescription: { marginTop: e.spaces.space8 }, infoPopoverContent: { paddingVertical: e.spaces.space24, maxWidth: "2em" }, checkmarkIcon: { color: e.colors.green500 } })),
                _ = a.createElement(h.default, { style: C.iconGrey }),
                F = ({ activeSubscription: e, content: t, index: r, isTargettedUpsellFlow: n, prices: l, productRef: o, productsLength: c, selectedProduct: i }) => {
                    const u = d()(b.oD, o),
                        h = u.product_category === i;
                    let y = `premium-product-${u.product_category || ""}`;
                    h && (y += "-selected");
                    const F = "active" === (0, w.yv)({ activeSubscription: e, tier: u.product_category }),
                        z = a.useCallback((e) => [C.carouselHeader, e ? { backgroundImage: `url(${e})` } : null], []),
                        I = a.useCallback(
                            (e, t) => {
                                const r = (0, E.U)(e.icon),
                                    n = "LockStroke" === e.icon,
                                    l = "Checkmark" === e.icon,
                                    o = n ? S({ feature: e.title, title: u.title }) : x({ feature: e.title, title: u.title }),
                                    c = [l && C.checkmarkIcon, n && C.iconGrey];
                                return a.createElement(s.Z, { "aria-label": o, focusable: !0, key: t, role: "text", style: C.featureHeadlineContainer }, a.createElement(s.Z, { style: C.featureBucketFeatureTextContainer }, a.createElement(m.ZP, { color: n ? "gray700" : "text", size: "body" }, e.title), e.description ? a.createElement(p.Z, { contentStyle: C.infoPopoverContent, preferredHorizontalOrientation: "end", renderContent: (t) => a.createElement(k, { dismiss: t, feature: e }) }, a.createElement(g.ZP, { "aria-label": v, icon: _, size: "xSmall", style: C.infoButton, testID: `feature_info_${t}`, type: "primaryText" })) : null), null !== r && null === e.variant ? a.createElement(r, { style: c }) : a.createElement(m.ZP, { style: C.variantText }, e.variant));
                            },
                            [u.title],
                        ),
                        T = a.useCallback(
                            (e) =>
                                a.createElement(
                                    s.Z,
                                    null,
                                    e?.feature_buckets?.buckets.map((e, t) => {
                                        const r = e?.features?.length > 0;
                                        return a.createElement(a.Fragment, { key: t }, a.createElement(s.Z, { style: C.featureCard }, a.createElement(m.ZP, { size: "headline2", style: C.featureCardTitle, weight: "bold" }, e.title), r ? e.features?.map(I) : null));
                                    }),
                                ),
                            [I],
                        ),
                        D = a.useMemo(() => (0 === r ? (3 === c ? { paddingStart: 24 } : { paddingStart: 24, paddingEnd: 16 }) : r === c - 1 ? (3 === c ? { paddingEnd: 24 } : { paddingEnd: 24, paddingStart: 16 }) : { paddingHorizontal: 16 }), [r, c]);
                    return a.createElement(s.Z, { key: `product-${r}`, style: [C.carouselItem, D], testID: y }, n && 1 === c ? null : a.createElement(s.Z, { style: z(u.image_url) }, a.createElement(m.ZP, { align: "center", color: "white", size: "headline2", weight: "medium" }, u.title), F ? a.createElement(f.ZP, { style: C.activeLabel, type: "subscriptionActive" }, P) : null), a.createElement(s.Z, null, a.createElement(Z.Z, { content: t, prices: l, selectedProduct: u.product_category })), T(u));
                },
                z = c().i7fbacc4,
                I = ({ activeSubscription: e, content: t, isTargettedUpsellFlow: r, prices: l, products: o, referringPage: c, selectedProduct: s, selectedProductIndex: u, setSelectedProduct: d }) => {
                    const m = (0, i.Z)(),
                        p = a.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                if (1 === t) {
                                    const t = o?.[e].product_category || "BlueVerified";
                                    d(t), m.scribe({ component: "product_selector", element: t, action: "click", data: { referring_page: c ?? void 0 } });
                                }
                            },
                            [m, c, o, d],
                        );
                    return a.createElement(
                        n.Z,
                        { "aria-label": z, childrenStyle: T.children, navButtonStyle: T.navButtonStyle, onVisibleRangeChange: p, scrollToCenter: !0, showNavButtonsOnHover: !0, showOverflow: !0, visibleItemIndex: u, withScrollIntoView: !1 },
                        o?.map((n, c) => a.createElement(F, { activeSubscription: e, content: t, index: c, isTargettedUpsellFlow: r, key: c, prices: l, productRef: n, productsLength: o.length, selectedProduct: s })),
                    );
                },
                T = l.default.create((e) => ({ navButtonStyle: { top: 0, height: "100%", justifyContent: "start", paddingTop: e.spaces.space20, paddingHorizontal: e.spaces.space8 }, children: { width: "93%", scrollSnapAlign: "center" } })),
                D = a.memo(I);
        },
        145278: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(325686),
                l = r(392237),
                o = r(731708),
                c = r(154003),
                i = r(674132),
                s = r.n(i),
                u = r(58399);
            const d = s().j8d53b64,
                m = (e, t, r = !1) => (t ? ({ condensed: { fontWeight: r ? l.default.theme.fontWeights.regular : l.default.theme.fontWeights.medium } }[t] ?? void 0) : void 0),
                p = (e, t) => (t ? ({ condensed: { width: "95%" } }[t] ?? void 0) : void 0),
                g = ({ productCategory: e, productContent: t, setShowAllFeaturesPage: r, variant: i }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            n.Z,
                            { style: [f.featureContainer, p(l.default.theme, i)], testID: `product-features-${e}` },
                            t.features.map((e, t) => a.createElement(n.Z, { key: `feature_${t}`, style: f.feature, testID: `feature_${t}` }, a.createElement(o.ZP, { size: "headline1", style: f.icon }, e?.icon), a.createElement(n.Z, { style: f.textContainer }, a.createElement(o.ZP, { style: [f.heading, m(l.default.theme, i)], testID: "feature-header", weight: "bold" }, e.header), e.description && a.createElement(o.ZP, { style: [f.description, m(l.default.theme, i, !0)], testID: "feature-description" }, e.description)))),
                        ),
                        a.createElement(
                            n.Z,
                            { style: p(l.default.theme, i) },
                            a.createElement(
                                c.ZP,
                                {
                                    onPress: () => {
                                        r(!0);
                                    },
                                    style: f.benefitsButton,
                                    type: "primaryOutlined",
                                },
                                a.createElement(n.Z, { style: f.buttonContent }, a.createElement(o.ZP, { style: f.buttonText }, d), a.createElement(u.default, { style: f.arrowIcon })),
                            ),
                        ),
                    ),
                f = l.default.create((e) => ({ featureContainer: { gap: e.spaces.space8, marginTop: e.spaces.space12, width: "100%", paddingHorizontal: l.default.theme.spaces.space20 }, feature: { width: "100%", flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space8 }, icon: { maxWidth: 20 }, textContainer: { flexDirection: "column", flexShrink: 1, marginStart: e.spaces.space20, paddingEnd: e.spaces.space4 }, heading: { marginBottom: e.spaces.space2, fontSize: e.fontSizes.body }, description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, benefitsButton: { width: "100%", alignItems: "flex-start", marginTop: e.spaces.space20, marginBottom: e.spaces.space36, borderWidth: 0, borderBottomWidth: 0, borderColor: "transparent" }, buttonContent: { flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", paddingHorizontal: l.default.theme.spaces.space4 }, buttonText: { fontSize: e.fontSizes.body, fontWeight: "600", color: e.colors.gray1000, flex: 1, textAlign: "left" }, arrowIcon: { fontSize: 16, color: e.colors.gray500 } }));
        },
        612450: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(136728);
            var a = r(202784),
                n = r(392237),
                l = r(507651);
            const o = ({ onChange: e, primaryColor: t, products: r, selectedProduct: n, setSelectedProduct: o }) => {
                    const i = a.useMemo(() => {
                        const a = [];
                        return (
                            r?.forEach((r) => {
                                r.product_category &&
                                    a.push({
                                        key: r.product_category,
                                        label: r.title,
                                        isActive: () => r.product_category === n,
                                        onClick: () => {
                                            e?.(), window.scrollTo(0, 0), r.product_category && o(r.product_category);
                                        },
                                        color: "gold" === t ? "gold100" : "primary",
                                    });
                            }),
                            a
                        );
                    }, [r, n, o, t, e]);
                    return a.createElement(l.Z, { links: i, style: c.tabs });
                },
                c = n.default.create((e) => ({ tabs: { border: "none" } }));
        },
        731862: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(807896),
                n = r(202784),
                l = r(325686),
                o = r(392237),
                c = r(154003),
                i = r(167630),
                s = r(731708),
                u = r(690559);
            const d = (e, t) => (t ? ({ blue: { backgroundImage: `\n            linear-gradient(90.38deg, \n            ${e.colors.blue500} 0.23%, \n            ${e.colors.blue600} 32.73%, \n            ${e.colors.blue500} 50.37%,\n            ${e.colors.blue500} 98.27%)\n          ` }, gold: { backgroundImage: `\n            linear-gradient(90.38deg, \n            ${e.colors.gold50} 0.23%, \n            ${e.colors.gold0} 32.73%, \n            ${e.colors.gold50} 50.37%,\n            ${e.colors.gold100} 98.27%)\n          ` }, special: { borderRadius: 16 }, leftAligned: { borderRadius: o.default.theme.spaces.space12 } }[t] ?? void 0) : void 0),
                m = (e) => (e ? ({ blue: "whiteOnColor", gold: "alwaysBlack", special: void 0, leftAligned: void 0 }[e] ?? void 0) : void 0),
                p = (e) => (e ? { blue: void 0, gold: void 0, special: "primaryFilled", leftAligned: "primaryFilled" }[e] : "primaryFilled"),
                g = ({ buttonFontSize: e, buttonSize: t, disabled: r, disclaimerRef: g, label: h, loading: y, onClick: w, savePill: E, styleOverrides: b, subtext: Z, variant: P }) => {
                    const v = n.useCallback(() => {
                            w();
                        }, [w]),
                        { disclaimerFontColor: x, disclaimerFontSize: S, marginBottom: k, withoutDisclaimerBorder: C } = b ?? {},
                        _ = k ? o.default.theme.spaces[k] : null;
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { style: [f.buttonWrapper, _ && { marginBottom: _ }] }, E, n.createElement(c.ZP, (0, a.Z)({}, "leftAligned" === P ? { alignContent: "left" } : {}, { allowTextWrap: !0, color: m(P), disabled: r, onClick: v, size: t || "xLarge", style: [d(o.default.theme, P), f.button], textSizeOverride: e || "headline2", type: p(P) }), y ? n.createElement(i.Z, null) : h), Z ? n.createElement(s.ZP, { align: "center", size: "subtext2", style: f.subtext, testID: "purchase-button-subtext" }, Z) : null), g ? n.createElement(l.Z, null, n.createElement(u.Z, { disclaimerRef: g, freeTrialInfo: null, styleOverrides: { disclaimerFontSize: S, disclaimerFontColor: x, withoutDisclaimerBorder: C } })) : null);
                },
                f = o.default.create((e) => ({ buttonWrapper: { marginBottom: e.spaces.space16, position: "relative" }, button: { border: "none" }, subtext: { marginTop: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-cda947e7.9752a7ea.js.map

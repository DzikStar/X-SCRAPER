"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-9f4db315"],
    {
        225258: (e, t, r) => {
            r.d(t, { Z: () => n });
            const a = window?.location?.host ? `https://${window?.location?.host}` : "https://www.x.com",
                n = ({ apiClient: e, featureSwitches: t }) => ({
                    postConversion(t, r, n, s = {}) {
                        const o = { conversions: [{ basePixel: t, eventPixel: r, twclid: n }] };
                        return e.postUnversioned("/i/capi", o, { ...s, "content-type": "application/json" }, a).then((e) => e.data);
                    },
                });
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(807896),
                n = r(202784),
                s = r(107267),
                o = r(403556),
                i = r(791632);
            const c = (e) => {
                    const t = (0, s.useHistory)();
                    return n.createElement(o.Z, (0, a.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                l = n.memo(c);
        },
        847579: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(325686),
                s = r(731708);
            const o = r(392237).default.create((e) => ({ positionRelative: { position: "relative" }, termsFullWidth: { width: "100%" }, termsOfService: { flexDirection: "row", marginHorizontal: "auto", textAlign: "center" }, termsBorder: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium } })),
                i = ({ children: e, styleOverrides: t, withoutBorder: r }) => {
                    const { disclaimerFontColor: i, disclaimerFontSize: c } = t ?? {};
                    return a.createElement(n.Z, { style: [o.termsOfService, o.positionRelative, o.termsFullWidth, r ? null : o.termsBorder], testID: "terms_disclaimer" }, a.createElement(s.ZP, { align: "left", color: i || "gray900", size: c || "subtext2" }, e));
                };
        },
        292546: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                n = r(107267);
            const s = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [r, s] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    s(new URLSearchParams(e.search));
                }, [e.search]);
                const o = a.useCallback(
                    (a, n) => {
                        const s = new URLSearchParams(r);
                        s.set(a, n), t.push(`${e.pathname}?${s.toString()}`);
                    },
                    [t, e.pathname, r],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), o];
            };
        },
        562041: (e, t, r) => {
            r.d(t, { G: () => l });
            var a = r(202784),
                n = r(400752),
                s = r(565058),
                o = r(708852),
                i = r(403808),
                c = r(811322);
            function l(e) {
                const t = (0, i.r)(e),
                    r = (0, o.tj)(),
                    s = (0, n.b9)(u(t)),
                    c = (0, n.b9)(p);
                return a.useEffect(() => () => c(), [c]), { ref: r ? void 0 : s };
            }
            const u = (0, c.X)((e) =>
                    (0, s.cn)(null, (t, r, a) => {
                        const n = a?.parentElement;
                        if (n && n instanceof HTMLElement) {
                            r(p);
                            const t = r(d(e), n);
                            r(m, { fn: t });
                        }
                    }),
                ),
                p = (0, s.cn)(null, (e, t) => {
                    t(m, (e) => {
                        e && e.fn();
                    });
                }),
                m = (0, s.cn)(),
                d = (0, c.X)((e) =>
                    (0, s.cn)(null, (t, r, a) => {
                        let n = null,
                            s = null,
                            o = null,
                            i = null;
                        function c(e) {
                            const { touches: t } = e;
                            if (1 !== t.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== a.scrollTop) return;
                            const [r] = t;
                            n = r.clientY;
                        }
                        function l(e) {
                            if (null === n) return;
                            const { touches: t } = e;
                            if (0 !== a.scrollTop) return void p();
                            const [r] = t;
                            null !== s && (i = r.clientY > s), (s = r.clientY);
                            const c = r.clientY - n;
                            e.preventDefault(), c > 0 ? ((o = c), (a.style.transform = `translateY(${c}px)`)) : ((o = 0), (a.style.transform = ""));
                        }
                        function u(t) {
                            if (i && o) {
                                if ("animate" in a) {
                                    a.animate([{ transform: `translateY(${o}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                a.style.transform = "translateY(100%)";
                            } else o && ("animate" in a && a.animate([{ transform: `translateY(${o}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (a.style.transform = ""));
                            p();
                        }
                        function p() {
                            (n = null), (s = null), (i = null), (o = null);
                        }
                        return (
                            a.addEventListener("touchstart", c),
                            a.addEventListener("touchmove", l),
                            a.addEventListener("touchend", u),
                            () => {
                                a.removeEventListener("touchstart", c), a.removeEventListener("touchmove", l), a.removeEventListener("touchend", u);
                            }
                        );
                    }),
                );
        },
        488645: (e, t, r) => {
            r.d(t, { q: () => s });
            var a = r(225258),
                n = r(917799);
            const s =
                    (e, t, r, s, i) =>
                    async (c, l, { api: u, userPersistence: p }) => {
                        const m = await o(p, r, s, i);
                        return m ? (0, n.Vg)(c, { params: { basePixel: e, eventPixel: t, twclid: m }, request: ({ basePixel: e, eventPixel: t, twclid: r } = {}, n) => u.withEndpoint(a.Z).postConversion(e, t, r, n) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                o = async (e, t, r, a) => {
                    let n = t;
                    if (a && n) await e.set(r, { twclid: n });
                    else {
                        const t = await e.get(r, 1728e5);
                        t && "string" == typeof t.twclid && ((n = t.twclid), await e.delete(r));
                    }
                    return n;
                };
        },
        498514: (e, t, r) => {
            r.d(t, { U: () => k });
            r(202784);
            var a = r(521058),
                n = r(847988),
                s = r(616894),
                o = r(376021),
                i = r(625823),
                c = r(839),
                l = r(266151),
                u = r(468670),
                p = r(913973),
                m = r(1753),
                d = r(748138),
                h = r(53674),
                f = r(164174),
                g = r(926981),
                w = r(642317),
                v = r(28862),
                y = r(376278),
                P = r(511323),
                _ = r(254944),
                S = r(465072),
                Z = r(189700),
                E = r(520489),
                b = r(297938),
                x = r(457566);
            const k = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return n.default;
                    case "No":
                        return s.default;
                    case "WriteStroke":
                        return o.default;
                    case "AccountNft":
                        return i.default;
                    case "CameraVideoStroke":
                        return c.default;
                    case "Feather":
                        return l.default;
                    case "LockStroke":
                        return u.default;
                    case "Checkmark":
                        return p.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return x.x1;
                    case "MoneyStroke":
                        return d.default;
                    case "BarChart":
                        return h.default;
                    case "DeckStroke":
                        return f.default;
                    case "Film":
                        return g.default;
                    case "RocketStroke":
                        return w.default;
                    case "BookmarkCollectionsStroke":
                        return v.default;
                    case "FireStroke":
                        return y.default;
                    case "PersonStroke":
                        return P.default;
                    case "PaintbrushStroke":
                        return _.default;
                    case "ModeratorStroke":
                        return S.default;
                    case "Document":
                        return Z.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return b.default;
                    default:
                        return () => null;
                }
            };
        },
        290008: (e, t, r) => {
            r.d(t, { Z: () => d });
            r(543673), r(240753), r(128399);
            var a = r(202784),
                n = r(107267),
                s = r(386802),
                o = r(952793),
                i = r(147595),
                c = r(811574),
                l = r(548797),
                u = r(125363),
                p = r(488645),
                m = r(248186);
            const d = ({ content: e, isTierSwitching: t, referringPage: r, selectedProduct: d, setSelectedProduct: h }) => {
                const f = (0, n.useHistory)(),
                    g = (0, u.I0)(),
                    w = (0, o.hC)("subscriptions_management_query_active_price"),
                    v = (0, c.Z)({ fetchPrices: w }),
                    y = a.useMemo(() => (0, i.R)(v), [v]),
                    { isModal: P } = a.useContext(s.Z),
                    _ = !P;
                a.useEffect(() => {
                    const e = !!y && (0, l.Ld)(y),
                        a = y && "Stripe" !== y?.payment_source && !e,
                        n = !!(0, l.gS)(y, "FreeTrial", { status: "active" }),
                        s = new URLSearchParams(window.location.search).get("twclid");
                    g((0, p.q)("o8zly", "ojw66", s, "rweb.premiumLandingPage", !0)), ((n && t) || a) && f.replace("/settings/subscription"), e && t && f.replace("/i/premium_cross_grade", { referring_page: r }), y && "Stripe" === y?.payment_source && !t && f.replace("/i/premium_tier_switch", { referring_page: r });
                }, [y, f, t, r, g]);
                const S = a.useMemo(() => !t && !_, [_, t]);
                return a.createElement(m.Z, { activeSubscription: y, content: e, isMobile: _, isTierSwitching: t, selectedProduct: d, setSelectedProduct: h, shouldRemoveExtraStep: S });
            };
        },
        320479: (e, t, r) => {
            r.d(t, { Z: () => x });
            var a = r(807896),
                n = r(202784),
                s = r(325686),
                o = r(731708),
                i = r(392237),
                c = r(952793),
                l = r(4452),
                u = r(725405),
                p = r(347561),
                m = r(534813),
                d = r(19578),
                h = r(960700),
                f = r(557778),
                g = r(884020),
                w = r(466337),
                v = r(130821),
                y = r(313511),
                P = r(763419),
                _ = r(689609),
                S = r(274547);
            const Z = ({ content: e, referringPage: t, selectedProduct: r, setSelectedProduct: o, state: i, stripePriceConfig: c }) => {
                    const l = (0, u.Z)(),
                        [p, m] = n.useState(!1),
                        S = n.useRef(null);
                    n.useEffect(() => {
                        l.scribe({ component: i.paywallDisplayType, element: i.paywallDesignVariant, action: "show" });
                    }, [l, i.paywallDesignVariant, i.paywallDisplayType]),
                        n.useEffect(() => {
                            const e = setTimeout(() => {
                                m(!0), S.current && S.current && (S.current.style.opacity = 1);
                            }, 25);
                            return () => clearTimeout(e);
                        }, []);
                    const Z = n.useRef(null),
                        [E, b] = n.useState(0),
                        x = n.useRef(null),
                        [F, C] = n.useState(0);
                    n.useEffect(() => {
                        b(Z.current?.clientHeight ?? 0), C(x.current?.clientHeight ?? 0);
                    }, [Z.current?.clientHeight, x.current?.clientHeight, p]);
                    const R = n.useMemo(() => ({ marginTop: E, marginBottom: F }), [E, F]),
                        D = i.catalogItems.filter((e) => e.productCategory === r),
                        L = n.useMemo(() => e.apiContent?.products?.findIndex((e) => e.product_category === r) || 0, [e.apiContent?.products, r]),
                        B = { content: e, referringPage: t, selectedProduct: r, setSelectedProduct: o, state: i, catalogItems: i.catalogItems, catalogItemsForProduct: D, headerRef: Z, footerRef: x, headerFooterOffset: R, selectedProductIndex: L, stripePriceConfig: c };
                    return n.createElement(
                        d.P.Provider,
                        { value: { footerHeight: F, headerHeight: E } },
                        n.createElement(s.Z, { style: [k.cover, p ? k.show : k.hide] }),
                        n.createElement(
                            s.Z,
                            { ref: S, style: k.root, testID: i.paywallDesignVariant },
                            (() => {
                                switch (i.paywallDesignVariant) {
                                    case "feature_focused":
                                        return n.createElement(h.Z, B);
                                    case "one_click":
                                        return n.createElement(w.Z, B);
                                    case "v1_1_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, B));
                                    case "v1_1_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, B));
                                    case "v1_2_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !0 }, B));
                                    case "v1_2_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !0 }, B));
                                    case "v1_3_1":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, B));
                                    case "v1_3_1_dynamic":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !1, withUpsellTier: !1 }, B));
                                    case "v1_3_1_blue":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, B));
                                    case "v1_3_2":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, B));
                                    case "v1_3_2_dynamic":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !0, withUpsellTier: !1 }, B));
                                    case "v1_3_2_blue":
                                        return n.createElement(y.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, B));
                                    case "offer_v1_1":
                                        return n.createElement(g.Z, (0, a.Z)({}, B, { primaryColor: "gold", withAnnualPriceMonthly: !1 }));
                                    case "offer_v1_2":
                                        return n.createElement(g.Z, (0, a.Z)({}, B, { primaryColor: "blue", withAnnualPriceMonthly: !1 }));
                                    case "offer_v2_1":
                                        return n.createElement(g.Z, (0, a.Z)({}, B, { primaryColor: "gold", withAnnualPriceMonthly: !0 }));
                                    case "offer_v2_2":
                                        return n.createElement(g.Z, (0, a.Z)({}, B, { primaryColor: "blue", withAnnualPriceMonthly: !0 }));
                                    case "special":
                                        return n.createElement(v.Z, B);
                                    case "v2":
                                        return n.createElement(P.Z, (0, a.Z)({}, B, { withPurchaseSheet: !0 }));
                                    case "v2_2":
                                        return n.createElement(P.Z, (0, a.Z)({}, B, { withIntervalSelector: !1, withPurchaseSheet: !1 }));
                                    case "v2_3":
                                    case "v2_3_only_stripe":
                                        return n.createElement(P.Z, (0, a.Z)({}, B, { withIntervalSelector: !0, withPurchaseSheet: !1 }));
                                    case "v2_3_with_stripe":
                                        return n.createElement(P.Z, (0, a.Z)({}, B, { withIntervalSelector: !0, withPurchaseSheet: !1, withStripeButton: i.withStripeButton }));
                                    case "v3":
                                        return n.createElement(_.Z, (0, a.Z)({}, B, { withPurchaseSheet: !1 }));
                                    case "native_clone_only_stripe":
                                    case "default":
                                    default:
                                        return n.createElement(f.Z, B);
                                    case "native_clone_stripe_choice":
                                        return n.createElement(f.Z, (0, a.Z)({}, B, { withStripeButton: !0 }));
                                }
                            })(),
                        ),
                    );
                },
                E = ({ state: e, ...t }) => {
                    const r = (0, c.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        s = (0, m.Z)(["BlueVerified", "BlueVerifiedPlus", "PremiumBasic"]),
                        o = n.useMemo(() => {
                            const t = { ...e };
                            if (e.replacePricesWithStripe) {
                                const e = (0, S.Z)(s, r);
                                t.catalogItems = e;
                            }
                            return t;
                        }, [s, e, r]);
                    return n.createElement(Z, (0, a.Z)({}, t, { state: o, stripePriceConfig: s }));
                },
                b = (e) => (e.state.withStripeButton || e.state.replacePricesWithStripe ? n.createElement(E, e) : n.createElement(Z, e)),
                x = (e) => {
                    (0, l.ZP)();
                    const [t, r] = (0, p.Z)(),
                        i = (0, u.Z)();
                    n.useEffect(() => {
                        (0, l.jW)("premium-paywall-content-ready"), i.scribe({ element: "content-ready", action: "sent" });
                    }, [i]);
                    const c = t && 0 !== t?.catalogItems.length ? n.createElement(b, (0, a.Z)({}, e, { state: t })) : n.createElement(s.Z, { testID: "activity-indicator" });
                    return n.createElement(n.Fragment, null, c, t?.printDebug ? n.createElement(s.Z, { style: k.printDebug, testID: "webview-paywall-debug" }, n.createElement(o.ZP, null, JSON.stringify(r, null, " \t"))) : null);
                },
                k = i.default.create((e) => ({ activityIndicator: { height: "100vh", display: "flex", justifyContent: "center" }, root: { WebkitUserSelect: "none", userSelect: "none" }, cover: { pointerEvents: "none", opacity: 1, transition: "opacity 100ms", position: "absolute", backgroundColor: e.colors.cellBackground, zIndex: 1, width: "100%", height: "100%" }, show: { opacity: 0 }, hide: { opacity: 1 }, printDebug: { marginBottom: e.spaces.space72 } }));
        },
        757771: (e, t, r) => {
            e.exports = r.p + "V3GrokDark.c3fb24fa.png";
        },
        822669: (e, t, r) => {
            e.exports = r.p + "V3GrokLight.3795881a.png";
        },
        249202: (e, t, r) => {
            e.exports = r.p + "V3PremiumAdsRemovedDark.cb6948fa.png";
        },
        748234: (e, t, r) => {
            e.exports = r.p + "V3PremiumAdsRemovedLight.82fef29a.png";
        },
        837835: (e, t, r) => {
            e.exports = r.p + "V3PremiumPlusAdsRemoved.c93c1e1a.png";
        },
        951737: (e, t, r) => {
            e.exports = r.p + "V3PremiumPlusReplyBoostDark.45eb567a.png";
        },
        872211: (e, t, r) => {
            e.exports = r.p + "V3PremiumPlusReplyBoostLight.4fa2ffba.png";
        },
        468573: (e, t, r) => {
            e.exports = r.p + "V3PremiumReplyBoostDark.136e0eea.png";
        },
        809369: (e, t, r) => {
            e.exports = r.p + "V3PremiumReplyBoostLight.7b92650a.png";
        },
        966299: (e, t, r) => {
            e.exports = r.p + "black_hole.341c6f7a.png";
        },
        590021: (e, t, r) => {
            e.exports = r.p + "grok_logo_black.9a6a7f1a.png";
        },
        195811: (e, t, r) => {
            e.exports = r.p + "grok_logo_gray.7c81b50a.png";
        },
        605879: (e, t, r) => {
            e.exports = r.p + "premiumAdsRemovedDark.71a87bea.png";
        },
        70375: (e, t, r) => {
            e.exports = r.p + "premiumAdsRemovedLight.491b9f3a.png";
        },
        656415: (e, t, r) => {
            e.exports = r.p + "premiumBoostedReplyDark.bfc42fca.png";
        },
        269541: (e, t, r) => {
            e.exports = r.p + "premiumBoostedReplyLight.2c65460a.png";
        },
        671809: (e, t, r) => {
            e.exports = r.p + "premiumPlusAdsRemovedDark.bedd7daa.png";
        },
        219759: (e, t, r) => {
            e.exports = r.p + "premiumPlusAdsRemovedLight.4f0dd73a.png";
        },
        51959: (e, t, r) => {
            e.exports = r.p + "premiumPlusBoostedReplyDark.25930eaa.png";
        },
        165806: (e, t, r) => {
            e.exports = r.p + "premiumPlusBoostedReplyLight.0b6b07da.png";
        },
        473301: (e, t, r) => {
            e.exports = r.p + "premiumPlusGrokDark.79b1fc1a.png";
        },
        603044: (e, t, r) => {
            e.exports = r.p + "premiumPlusGrokLight.37251b1a.png";
        },
        607178: (e, t, r) => {
            e.exports = r.p + "tierFrameDarkMode.da41b47a.png";
        },
        13266: (e, t, r) => {
            e.exports = r.p + "tierFrameLightMode.f476c13a.png";
        },
        716110: (e, t, r) => {
            e.exports = r.p + "v3PaywallBackground.784f6d6a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-9f4db315.3b73b3aa.js.map

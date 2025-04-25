"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-9f4db315"],
    {
        225258: (e, t, r) => {
            r.d(t, { Z: () => n });
            const a = window?.location?.host ? `https://${window?.location?.host}` : "https://www.x.com",
                n = ({ apiClient: e, featureSwitches: t }) => ({
                    postConversion(t, r, n, o = {}) {
                        const s = { conversions: [{ basePixel: t, eventPixel: r, twclid: n }] };
                        return e.postUnversioned("/i/capi", s, { ...o, "content-type": "application/json" }, a).then((e) => e.data);
                    },
                });
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(807896),
                n = r(202784),
                o = r(107267),
                s = r(403556),
                i = r(791632);
            const c = (e) => {
                    const t = (0, o.useHistory)();
                    return n.createElement(s.Z, (0, a.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                l = n.memo(c);
        },
        847579: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(325686),
                o = r(731708);
            const s = r(392237).default.create((e) => ({ positionRelative: { position: "relative" }, termsFullWidth: { width: "100%" }, termsOfService: { flexDirection: "row", marginHorizontal: "auto", textAlign: "center" }, termsBorder: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium } })),
                i = ({ children: e, styleOverrides: t, withoutBorder: r }) => {
                    const { disclaimerFontColor: i, disclaimerFontSize: c } = t ?? {};
                    return a.createElement(n.Z, { style: [s.termsOfService, s.positionRelative, s.termsFullWidth, r ? null : s.termsBorder], testID: "terms_disclaimer" }, a.createElement(o.ZP, { align: "left", color: i || "gray900", size: c || "subtext2" }, e));
                };
        },
        292546: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                n = r(107267);
            const o = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [r, o] = a.useState(new URLSearchParams(e.search));
                a.useEffect(() => {
                    o(new URLSearchParams(e.search));
                }, [e.search]);
                const s = a.useCallback(
                    (a, n) => {
                        const o = new URLSearchParams(r);
                        o.set(a, n), t.push(`${e.pathname}?${o.toString()}`);
                    },
                    [t, e.pathname, r],
                );
                return [a.useMemo(() => new URLSearchParams(e.search), [e.search]), s];
            };
        },
        562041: (e, t, r) => {
            r.d(t, { G: () => l });
            var a = r(202784),
                n = r(400752),
                o = r(565058),
                s = r(708852),
                i = r(403808),
                c = r(811322);
            function l(e) {
                const t = (0, i.r)(e),
                    r = (0, s.tj)(),
                    o = (0, n.b9)(u(t)),
                    c = (0, n.b9)(p);
                return a.useEffect(() => () => c(), [c]), { ref: r ? void 0 : o };
            }
            const u = (0, c.X)((e) =>
                    (0, o.cn)(null, (t, r, a) => {
                        const n = a?.parentElement;
                        if (n && n instanceof HTMLElement) {
                            r(p);
                            const t = r(m(e), n);
                            r(d, { fn: t });
                        }
                    }),
                ),
                p = (0, o.cn)(null, (e, t) => {
                    t(d, (e) => {
                        e && e.fn();
                    });
                }),
                d = (0, o.cn)(),
                m = (0, c.X)((e) =>
                    (0, o.cn)(null, (t, r, a) => {
                        let n = null,
                            o = null,
                            s = null,
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
                            null !== o && (i = r.clientY > o), (o = r.clientY);
                            const c = r.clientY - n;
                            e.preventDefault(), c > 0 ? ((s = c), (a.style.transform = `translateY(${c}px)`)) : ((s = 0), (a.style.transform = ""));
                        }
                        function u(t) {
                            if (i && s) {
                                if ("animate" in a) {
                                    a.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                a.style.transform = "translateY(100%)";
                            } else s && ("animate" in a && a.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (a.style.transform = ""));
                            p();
                        }
                        function p() {
                            (n = null), (o = null), (i = null), (s = null);
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
            r.d(t, { q: () => o });
            var a = r(225258),
                n = r(917799);
            const o =
                    (e, t, r, o, i) =>
                    async (c, l, { api: u, userPersistence: p }) => {
                        const d = await s(p, r, o, i);
                        return d ? (0, n.Vg)(c, { params: { basePixel: e, eventPixel: t, twclid: d }, request: ({ basePixel: e, eventPixel: t, twclid: r } = {}, n) => u.withEndpoint(a.Z).postConversion(e, t, r, n) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                s = async (e, t, r, a) => {
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
                o = r(616894),
                s = r(376021),
                i = r(625823),
                c = r(839),
                l = r(266151),
                u = r(468670),
                p = r(913973),
                d = r(1753),
                m = r(748138),
                h = r(53674),
                f = r(164174),
                g = r(926981),
                w = r(642317),
                y = r(28862),
                v = r(376278),
                P = r(511323),
                E = r(254944),
                Z = r(465072),
                S = r(189700),
                _ = r(520489),
                b = r(297938),
                x = r(457566);
            const k = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return n.default;
                    case "No":
                        return o.default;
                    case "WriteStroke":
                        return s.default;
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
                        return d.default;
                    case "Grok":
                        return x.x1;
                    case "MoneyStroke":
                        return m.default;
                    case "BarChart":
                        return h.default;
                    case "DeckStroke":
                        return f.default;
                    case "Film":
                        return g.default;
                    case "RocketStroke":
                        return w.default;
                    case "BookmarkCollectionsStroke":
                        return y.default;
                    case "FireStroke":
                        return v.default;
                    case "PersonStroke":
                        return P.default;
                    case "PaintbrushStroke":
                        return E.default;
                    case "ModeratorStroke":
                        return Z.default;
                    case "Document":
                        return S.default;
                    case "RadarStroke":
                        return _.default;
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
                o = r(386802),
                s = r(147595),
                i = r(811574),
                c = r(548797),
                l = r(125363),
                u = r(488645),
                p = r(248186);
            const d = ({ content: e, isTierSwitching: t, referringPage: r, selectedProduct: d, setSelectedProduct: m }) => {
                const h = (0, n.useHistory)(),
                    f = (0, l.I0)(),
                    g = (0, i.Z)(),
                    w = a.useMemo(() => (0, s.R)(g), [g]),
                    { isModal: y } = a.useContext(o.Z),
                    v = !y;
                a.useEffect(() => {
                    const e = !!w && (0, c.Ld)(w),
                        a = w && "Stripe" !== w?.payment_source && !e,
                        n = !!(0, c.gS)(w, "FreeTrial", { status: "active" }),
                        o = new URLSearchParams(window.location.search).get("twclid");
                    f((0, u.q)("o8zly", "ojw66", o, "rweb.premiumLandingPage", !0)), ((n && t) || a) && h.replace("/settings/subscription"), e && t && h.replace("/i/premium_cross_grade", { referring_page: r }), w && "Stripe" === w?.payment_source && !t && h.replace("/i/premium_tier_switch", { referring_page: r });
                }, [w, h, t, r, f]);
                const P = a.useMemo(() => !t && !v, [v, t]);
                return a.createElement(p.Z, { activeSubscription: w, content: e, isMobile: v, isTierSwitching: t, selectedProduct: d, setSelectedProduct: m, shouldRemoveExtraStep: P });
            };
        },
        320479: (e, t, r) => {
            r.d(t, { Z: () => E });
            var a = r(807896),
                n = r(202784),
                o = r(325686),
                s = r(731708),
                i = r(392237),
                c = r(4452),
                l = r(725405),
                u = r(347561),
                p = r(19578),
                d = r(960700),
                m = r(557778),
                h = r(884020),
                f = r(466337),
                g = r(130821),
                w = r(313511),
                y = r(763419),
                v = r(689609);
            const P = ({ content: e, referringPage: t, selectedProduct: r, setSelectedProduct: s, state: i }) => {
                    const c = (0, l.Z)(),
                        [u, P] = n.useState(!1),
                        E = n.useRef(null);
                    n.useEffect(() => {
                        c.scribe({ component: i.paywallDisplayType, element: i.paywallDesignVariant, action: "show" });
                    }, [c, i.paywallDesignVariant, i.paywallDisplayType]),
                        n.useEffect(() => {
                            const e = setTimeout(() => {
                                P(!0), E.current && E.current && (E.current.style.opacity = 1);
                            }, 25);
                            return () => clearTimeout(e);
                        }, []);
                    const S = n.useRef(null),
                        [_, b] = n.useState(0),
                        x = n.useRef(null),
                        [k, F] = n.useState(0);
                    n.useEffect(() => {
                        b(S.current?.clientHeight ?? 0), F(x.current?.clientHeight ?? 0);
                    }, [S.current?.clientHeight, x.current?.clientHeight, u]);
                    const C = n.useMemo(() => ({ marginTop: _, marginBottom: k }), [_, k]),
                        R = i.catalogItems.filter((e) => e.productCategory === r),
                        D = n.useMemo(() => e.apiContent?.products?.findIndex((e) => e.product_category === r) || 0, [e.apiContent?.products, r]),
                        L = { content: e, referringPage: t, selectedProduct: r, setSelectedProduct: s, state: i, catalogItems: i.catalogItems, catalogItemsForProduct: R, headerRef: S, footerRef: x, headerFooterOffset: C, selectedProductIndex: D };
                    return n.createElement(
                        p.P.Provider,
                        { value: { footerHeight: k, headerHeight: _ } },
                        n.createElement(o.Z, { style: [Z.cover, u ? Z.show : Z.hide] }),
                        n.createElement(
                            o.Z,
                            { ref: E, style: Z.root, testID: i.paywallDesignVariant },
                            (() => {
                                switch (i.paywallDesignVariant) {
                                    case "feature_focused":
                                        return n.createElement(d.Z, L);
                                    case "one_click":
                                        return n.createElement(f.Z, L);
                                    case "v1_1_1":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, L));
                                    case "v1_1_2":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, L));
                                    case "v1_2_1":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !0 }, L));
                                    case "v1_2_2":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !1, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !0 }, L));
                                    case "v1_3_1":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, L));
                                    case "v1_3_1_dynamic":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !1, withUpsellTier: !1 }, L));
                                    case "v1_3_1_blue":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !1, withUpsellTier: !1 }, L));
                                    case "v1_3_2":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, L));
                                    case "v1_3_2_dynamic":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "gold", withExtraFeatures: !0, withFeatureFocus: !0, withPurchaseSheet: !0, withUpsellTier: !1 }, L));
                                    case "v1_3_2_blue":
                                        return n.createElement(w.Z, (0, a.Z)({ primaryColor: "blue", withExtraFeatures: !0, withFeatureFocus: !1, withPurchaseSheet: !0, withUpsellTier: !1 }, L));
                                    case "offer_v1_1":
                                        return n.createElement(h.Z, (0, a.Z)({}, L, { primaryColor: "gold", withAnnualPriceMonthly: !1 }));
                                    case "offer_v1_2":
                                        return n.createElement(h.Z, (0, a.Z)({}, L, { primaryColor: "blue", withAnnualPriceMonthly: !1 }));
                                    case "offer_v2_1":
                                        return n.createElement(h.Z, (0, a.Z)({}, L, { primaryColor: "gold", withAnnualPriceMonthly: !0 }));
                                    case "offer_v2_2":
                                        return n.createElement(h.Z, (0, a.Z)({}, L, { primaryColor: "blue", withAnnualPriceMonthly: !0 }));
                                    case "special":
                                        return n.createElement(g.Z, L);
                                    case "v2":
                                        return n.createElement(y.Z, (0, a.Z)({}, L, { withPurchaseSheet: !0 }));
                                    case "v2_2":
                                        return n.createElement(y.Z, (0, a.Z)({}, L, { withIntervalSelector: !1, withPurchaseSheet: !1 }));
                                    case "v2_3":
                                        return n.createElement(y.Z, (0, a.Z)({}, L, { withIntervalSelector: !0, withPurchaseSheet: !1 }));
                                    case "v3":
                                        return n.createElement(v.Z, (0, a.Z)({}, L, { withPurchaseSheet: !1 }));
                                    default:
                                        return n.createElement(m.Z, L);
                                }
                            })(),
                        ),
                    );
                },
                E = (e) => {
                    const t = (0, l.Z)();
                    (0, c.ZP)();
                    const [r, i] = (0, u.Z)();
                    n.useEffect(() => {
                        (0, c.jW)("premium-paywall-content-ready"), t.scribe({ element: "content-ready", action: "sent" });
                    }, [t]);
                    const p = r && 0 !== r?.catalogItems.length ? n.createElement(P, (0, a.Z)({}, e, { state: r })) : n.createElement(o.Z, { testID: "activity-indicator" });
                    return n.createElement(n.Fragment, null, p, r?.printDebug ? n.createElement(o.Z, { style: Z.printDebug, testID: "webview-paywall-debug" }, n.createElement(s.ZP, null, JSON.stringify(i, null, " \t"))) : null);
                },
                Z = i.default.create((e) => ({ activityIndicator: { height: "100vh", display: "flex", justifyContent: "center" }, root: { WebkitUserSelect: "none", userSelect: "none" }, cover: { pointerEvents: "none", opacity: 1, transition: "opacity 100ms", position: "absolute", backgroundColor: e.colors.cellBackground, zIndex: 1, width: "100%", height: "100%" }, show: { opacity: 0 }, hide: { opacity: 1 }, printDebug: { marginBottom: e.spaces.space72 } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-9f4db315.144f316a.js.map

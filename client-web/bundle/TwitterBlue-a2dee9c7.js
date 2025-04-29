(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-a2dee9c7"],
    {
        584550: (e) => {
            e.exports = { queryId: "lWVG1NYl6Z8-6qTDNP9jrg", operationName: "ListProductSubscriptions", operationType: "query", metadata: { featureSwitches: ["subscriptions_management_fetch_next_billing_time"], fieldToggles: [] } };
        },
        322766: (e) => {
            e.exports = { queryId: "RM4x9h3tF8bCn69VV3-gRg", operationName: "NotABotCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        263378: (e) => {
            e.exports = { queryId: "-kH-xt82ZhKnAMTXv1Fuzg", operationName: "SubscriptionCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        322060: (e) => {
            e.exports = { queryId: "yIGOH-WMQSU-AdbfVRZm9A", operationName: "SubscriptionProductDetails", operationType: "query", metadata: { featureSwitches: ["subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        601377: (e) => {
            e.exports = { queryId: "NEMw3cw4v0-Oo-nTMI8reQ", operationName: "SwitchTier", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        427369: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => P });
            var r,
                n,
                i,
                l,
                s,
                u,
                c,
                o,
                d,
                p,
                m,
                g,
                f,
                _,
                S,
                b,
                k,
                y = {
                    fragment: {
                        argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "referringPage" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PremiumContentQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { fields: [{ kind: "Variable", name: "referring_page", variableName: "referringPage" }], kind: "ObjectValue", name: "view" },
                                ]),
                                concreteType: "TwitterBlueMarketingPageConfig",
                                kind: "LinkedField",
                                name: "blue_marketing_page_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), (g = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [l, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "badge", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), l, (c = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }), (p = { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }), l, c, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_product" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [l, c, (f = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_header" }], storageKey: null },
                                    (_ = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCard", kind: "LinkedField", name: "card", plural: !1, selections: [l, c, u, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCardItemBadge", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }], storageKey: null }], storageKey: null }),
                                    (S = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [l, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [s, u, l, c, o, d, p, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [m, l, c], storageKey: null }], storageKey: null }], storageKey: null }),
                                    (b = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarousel", kind: "LinkedField", name: "carousel", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarouselItem", kind: "LinkedField", name: "items", plural: !0, selections: [u, { alias: null, args: null, kind: "ScalarField", name: "headline", storageKey: null }, l, c], storageKey: null }], storageKey: null }),
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "PremiumContentQuery_disclaimer" }, (k = { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null })], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "PremiumContentQuery", selections: [{ alias: null, args: n, concreteType: "TwitterBlueMarketingPageConfig", kind: "LinkedField", name: "blue_marketing_page_config", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [i, l, g, u, c, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [c, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [l, c, m], storageKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [l, c, f], storageKey: null }, _, S, b, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null }, k, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null }], storageKey: null }], storageKey: null }] },
                    params: { id: "XiSXQPFu8S8e_TwAC0AOTw", metadata: {}, name: "PremiumContentQuery", operationKind: "query", text: null },
                };
            y.hash = "6e8667466f84f7f3a126460c56847b74";
            const P = y;
        },
        391416: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_disclaimer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageSubscribeButton",
                abstractKey: null,
                hash: "92bde70cde3c2bc74e3a06d1ad582ad3",
            };
            const n = r;
        },
        461904: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_header",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageHeader",
                abstractKey: null,
                hash: "f469778f3ae5649dffcafbaae5f8c124",
            };
            const n = r;
        },
        553659: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r,
                n,
                i,
                l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PremiumContentQuery_product", selections: [{ alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [n, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [r, n, (i = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null })], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [r, n, i, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "TwitterBlueMarketingPageProduct", abstractKey: null };
            l.hash = "03d9bfe21a2a9a527aeb7d6ca79c64bb";
            const s = l;
        },
        310456: (e, t, a) => {
            "use strict";
            a.d(t, { p: () => r });
            const r = Object.freeze({ Advertising: "Advertising", BlueVerified: "BlueVerified", BlueVerifiedPlus: "BlueVerifiedPlus", Chirps: "Chirps", Coins: "Coins", OneDollar: "OneDollar", OneDollarSubscription: "OneDollarSubscription", PremiumBasic: "PremiumBasic", PremiumGift: "PremiumGift", PremiumPlusGift: "PremiumPlusGift", QuickFreeTrial: "QuickFreeTrial", QuickPromoteBudget: "QuickPromoteBudget", Seeds: "Seeds", Spaces: "Spaces", Subscriptions: "Subscriptions", SuperFollows: "SuperFollows", SuperLikes: "SuperLikes", VerifiedOrganizations: "VerifiedOrganizations", VerifiedOrganizationsBasic: "VerifiedOrganizationsBasic" });
        },
        372551: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            var r = a(584550),
                n = a.n(r),
                i = a(322766),
                l = a.n(i),
                s = a(263378),
                u = a.n(s),
                c = a(322060),
                o = a.n(c),
                d = a(601377),
                p = a.n(d);
            const m = ({ apiClient: e, featureSwitches: t }) => ({ fetchSubscriptionProductDetails: (t) => e.graphQL(o(), t).then((e) => e.web_subscription_product_details), fetchSubscriptionProductCheckoutUrl: (t) => e.graphQL(u(), t).then((e) => e.subscriptioncheckoutsession_create_for_blue?.session_url), fetchNotABotCheckoutUrl: (t) => e.graphQL(l(), t).then((e) => e.subscriptioncheckoutsession_create_for_not_a_bot?.session_url), fetchProductSubscriptions: (t) => e.graphQL(n(), t).then((e) => e.viewer_v2?.list_product_subscriptions), switchTier: (t) => e.graphQL(p(), t).then((e) => e) });
        },
        507651: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                i = a(107267),
                l = a(403556),
                s = a(791632);
            const u = (e) => {
                    const t = (0, i.useHistory)();
                    return n.createElement(l.Z, (0, r.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = n.memo(u);
        },
        847579: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(325686),
                i = a(731708);
            const l = a(392237).default.create((e) => ({ positionRelative: { position: "relative" }, termsFullWidth: { width: "100%" }, termsOfService: { flexDirection: "row", marginHorizontal: "auto", textAlign: "center" }, termsBorder: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium } })),
                s = ({ children: e, styleOverrides: t, withoutBorder: a }) => {
                    const { disclaimerFontColor: s, disclaimerFontSize: u } = t ?? {};
                    return r.createElement(n.Z, { style: [l.termsOfService, l.positionRelative, l.termsFullWidth, a ? null : l.termsBorder], testID: "terms_disclaimer" }, r.createElement(i.ZP, { align: "left", color: s || "gray900", size: u || "subtext2" }, e));
                };
        },
        292546: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i });
            a(543673), a(240753), a(128399), a(136728);
            var r = a(202784),
                n = a(107267);
            const i = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [a, i] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    i(new URLSearchParams(e.search));
                }, [e.search]);
                const l = r.useCallback(
                    (r, n) => {
                        const i = new URLSearchParams(a);
                        i.set(r, n), t.push(`${e.pathname}?${i.toString()}`);
                    },
                    [t, e.pathname, a],
                );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), l];
            };
        },
        562041: (e, t, a) => {
            "use strict";
            a.d(t, { G: () => c });
            var r = a(202784),
                n = a(400752),
                i = a(565058),
                l = a(708852),
                s = a(403808),
                u = a(811322);
            function c(e) {
                const t = (0, s.r)(e),
                    a = (0, l.tj)(),
                    i = (0, n.b9)(o(t)),
                    u = (0, n.b9)(d);
                return r.useEffect(() => () => u(), [u]), { ref: a ? void 0 : i };
            }
            const o = (0, u.X)((e) =>
                    (0, i.cn)(null, (t, a, r) => {
                        const n = r?.parentElement;
                        if (n && n instanceof HTMLElement) {
                            a(d);
                            const t = a(m(e), n);
                            a(p, { fn: t });
                        }
                    }),
                ),
                d = (0, i.cn)(null, (e, t) => {
                    t(p, (e) => {
                        e && e.fn();
                    });
                }),
                p = (0, i.cn)(),
                m = (0, u.X)((e) =>
                    (0, i.cn)(null, (t, a, r) => {
                        let n = null,
                            i = null,
                            l = null,
                            s = null;
                        function u(e) {
                            const { touches: t } = e;
                            if (1 !== t.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== r.scrollTop) return;
                            const [a] = t;
                            n = a.clientY;
                        }
                        function c(e) {
                            if (null === n) return;
                            const { touches: t } = e;
                            if (0 !== r.scrollTop) return void d();
                            const [a] = t;
                            null !== i && (s = a.clientY > i), (i = a.clientY);
                            const u = a.clientY - n;
                            e.preventDefault(), u > 0 ? ((l = u), (r.style.transform = `translateY(${u}px)`)) : ((l = 0), (r.style.transform = ""));
                        }
                        function o(t) {
                            if (s && l) {
                                if ("animate" in r) {
                                    r.animate([{ transform: `translateY(${l}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                r.style.transform = "translateY(100%)";
                            } else l && ("animate" in r && r.animate([{ transform: `translateY(${l}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (r.style.transform = ""));
                            d();
                        }
                        function d() {
                            (n = null), (i = null), (s = null), (l = null);
                        }
                        return (
                            r.addEventListener("touchstart", u),
                            r.addEventListener("touchmove", c),
                            r.addEventListener("touchend", o),
                            () => {
                                r.removeEventListener("touchstart", u), r.removeEventListener("touchmove", c), r.removeEventListener("touchend", o);
                            }
                        );
                    }),
                );
        },
        97882: (e, t, a) => {
            "use strict";
            a.d(t, { T: () => i, x: () => l });
            var r = a(674132),
                n = a.n(r);
            const i = { AED: n().d857e44d, ALL: n().cb87e3db, ARS: n().a9d5ffd1, AUD: n().a0e8371d, BAM: n().gcc50dc9, BDT: n().a6a43585, BGN: n().a0cc8f2d, BHD: n().i31c32c5, BRL: n().i7dc69e9, BYR: n().c14a6c03, CAD: n().jaa3d537, CHF: n().a824080b, CLP: n().d9c0bedb, CNY: n().bf8c0613, COP: n().i8163625, CZK: n().adb53ba1, DKK: n().iabf697d, DZD: n().a1a0555b, EGP: n().f266f3d9, EUR: n().a9a8652b, GBP: n().dbf40761, GHS: n().b0d993d9, GTQ: n().ac1308e1, HKD: n().a7889ab3, HRK: n().c614f5cd, HUF: n().i55d57e3, IDR: n().e4b6002b, ILS: n().d28e983b, INR: n().e8c9232d, IQD: n().c8994ae1, ISK: n().f821c2a5, JPY: n().j348b9c9, KES: n().i6f93b9b, KRW: n().c6150bd5, KWD: n().i8921e09, KZT: n().ef239279, LBP: n().hecdb149, MAD: n().fdd039b7, MKD: n().f30c2c37, MXN: n().d9ea7bff, MYR: n().ea3df4b7, NGN: n().jaac21bb, NOK: n().hb435ced, NZD: n().ce699d81, PEN: n().bc56d3d7, PHP: n().f8561913, PKR: n().g6485d53, PLN: n().ff561cc1, QAR: n().b42011d3, RON: n().a6660bcd, RSD: n().f9b80449, RUB: n().gdee4d5d, SAR: n().h36f2103, SEK: n().a19ad037, SGD: n().g713f699, THB: n().ff2e39af, TND: n().be34316d, TRY: n().aef81b75, TWD: n().fcce70a5, TZS: n().jc9d352f, UAH: n().be1cb8c5, UGX: n().j9371501, USD: n().j7d4397d, VEF: n().d61441dd, VND: n().e2a99e97, ZAR: n().f7ce19ab, ZMW: n().b2a0213f },
                l = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: r = !1, strictAmount: n = !1 }) => {
                    const l = n ? e : parseInt(e, 10) / a,
                        u = i[t]?.(l);
                    return r ? s(u) : u;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        321330: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => o });
            var r = a(202784),
                n = a(674132),
                i = a.n(n),
                l = a(443781);
            const s = i().f75d1806,
                u = i().j4a7d9a6,
                c = i().hedf9d7c,
                o = () => {
                    const { userClaims: e } = r.useContext(l.rC),
                        t = e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate"),
                        a = { label: s, value: "Premium" };
                    return t || e.hasSubscription("premium_plus") ? { label: c, value: "Premium+" } : e.hasSubscription("premium_standard") ? a : e.hasSubscription("premium_basic") ? { label: u, value: "Basic" } : a;
                };
        },
        548797: (e, t, a) => {
            "use strict";
            a.d(t, { Ld: () => o, gS: () => c, pB: () => s, yv: () => u });
            var r = a(674132),
                n = a.n(r),
                i = a(337394);
            const l = n().b47d123d,
                s = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === i.rv.Year),
                        a = e?.prices?.find((e) => e?.charge_interval === i.rv.Month),
                        r = a ? 12 * a?.amount_local_micro : 0,
                        n = t ? Math.floor(((t.amount_local_micro - r) / r) * -100) : null;
                    return l({ percentage: n });
                },
                u = ({ activeSubscription: e, tier: t }) => {
                    const a = e?.product?.rest_id;
                    if (!a) return "invalid";
                    if (i.v5.premium[a] === t) return "active";
                    switch (i.v5.premium[a]) {
                        case "PremiumBasic":
                            if ("BlueVerified" === t || "BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerified":
                            if ("PremiumBasic" === t) return "downgrade";
                            if ("BlueVerifiedPlus" === t) return "upgrade";
                            break;
                        case "BlueVerifiedPlus":
                            if ("BlueVerified" === t || "PremiumBasic" === t) return "downgrade";
                            break;
                        default:
                            return "invalid";
                    }
                    return "invalid";
                },
                c = (e, t, a) => {
                    const { status: r } = a,
                        n = Date.now(),
                        i = e?.promotions?.filter((e) => {
                            const a = parseInt(e.ends_at_msec, 10),
                                i = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && a > n) {
                                if ("active" === r) return i < n;
                                if ("pending" === r) return i > n;
                            }
                        });
                    return i?.[0];
                },
                o = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, a) => {
            "use strict";
            a.d(t, { Gi: () => S, Mk: () => k, ZV: () => f, aU: () => g, d3: () => b, fS: () => y, pt: () => _ });
            a(202784);
            var r = a(674132),
                n = a.n(r),
                i = a(336629),
                l = a(862695),
                s = a(97882),
                u = a(337394),
                c = a(548797);
            const o = n().c6614cc0,
                d = n().f8d3b50a,
                p = n().i2c32253,
                m = n().c41e1023;
            function g(e, t = !0, a) {
                let r = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (r += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    a)
                ) {
                    r -= r * (a / 100);
                }
                return r;
            }
            function f(e) {
                return "number" == typeof e?.tax_amount_local_micro ? d : o;
            }
            const _ = (e, t, a) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === a && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function S(e, t) {
                if (e && t) return t?.prices?.find((t) => t?.charge_interval === e);
            }
            function b(e, t = !1, a, r = !1, n = !0) {
                const o = (0, c.gS)(a, "Discount", { status: r ? "pending" : "active" }),
                    d = (0, s.x)({ amount: g(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return o && e.charge_interval ? (0, l.V)({ selectedInterval: e.charge_interval, duration: o.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, i.T)({ price: e, percentOff: o.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: d, includeDiscountedPrice: !0, includeThenLabel: n }) : e.charge_interval === u.rv.Year ? m({ price: d }) : e.charge_interval === u.rv.Month ? p({ price: d }) : "";
            }
            const k = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                y = (e, t, a) => {
                    if (!t || a) return null;
                    const r = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return r;
                };
        },
        116868: (e, t, a) => {
            "use strict";
            a.d(t, { q: () => l });
            const r = window?.location?.host ? `https://${window?.location?.host}` : "https://www.x.com",
                n = ({ apiClient: e, featureSwitches: t }) => ({
                    postConversion(t, a, n, i = {}) {
                        const l = { conversions: [{ basePixel: t, eventPixel: a, twclid: n }] };
                        return e.postUnversioned("/i/capi", l, { ...i, "content-type": "application/json" }, r).then((e) => e.data);
                    },
                });
            var i = a(917799);
            const l =
                    (e, t, a, r, l) =>
                    async (u, c, { api: o, userPersistence: d }) => {
                        const p = await s(d, a, r, l);
                        return p ? (0, i.Vg)(u, { params: { basePixel: e, eventPixel: t, twclid: p }, request: ({ basePixel: e, eventPixel: t, twclid: a } = {}, r) => o.withEndpoint(n).postConversion(e, t, a, r) })("POST_CONVERSION") : Promise.resolve(null);
                    },
                s = async (e, t, a, r) => {
                    let n = t;
                    if (r && n) await e.set(a, { twclid: n });
                    else {
                        const t = await e.get(a, 1728e5);
                        t && "string" == typeof t.twclid && ((n = t.twclid), await e.delete(a));
                    }
                    return n;
                };
        },
        365265: (e, t, a) => {
            "use strict";
            a.d(t, { $B: () => S, F$: () => b, Ne: () => T, RC: () => h, VR: () => k, dF: () => P, h9: () => _, hu: () => E, pC: () => y, qB: () => F, tF: () => f, v1: () => C, xN: () => v });
            var r = a(372551),
                n = a(147595),
                i = a(499627),
                l = a(917799),
                s = a(312771);
            const u = "subscriptionPayments",
                c = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                o = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                g = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: s.ZP.NONE }, switchTier: { fetchStatus: s.ZP.NONE } };
            const f = (e, t) => {
                    const a = e[u].products[t];
                    return a?.fetchStatus || s.ZP.NONE;
                },
                _ = (e, t) => {
                    const a = e[u].products[t];
                    return a?.details;
                },
                S = (e, t) => {
                    const a = e[u].checkoutUrls[t];
                    return a?.fetchStatus || s.ZP.NONE;
                },
                b = (e, t) => {
                    const a = e[u].checkoutUrls[t];
                    return a?.checkoutUrl;
                },
                k = (e) => e[u].productSubscriptions.fetchStatus,
                y = (e) => (e[u].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                P = (e) => {
                    const t = e[u].productSubscriptions.subscriptions || [];
                    return (0, n.R)(t);
                },
                h = (e) => {
                    const t = e[u].switchTier;
                    return t?.fetchStatus || s.ZP.NONE;
                },
                T =
                    (e) =>
                    (t, a, { api: n }) => {
                        const i = (0, l._O)(t, { params: { id: e }, request: n.withEndpoint(r.Z).fetchSubscriptionProductDetails }),
                            u = f(a(), e);
                        return u !== s.ZP.NONE && u !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: o, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                F =
                    (e) =>
                    (t, a, { api: n }) => {
                        const i = (0, l._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: n.withEndpoint(r.Z).fetchSubscriptionProductCheckoutUrl }),
                            u = S(a(), e.id);
                        return u !== s.ZP.NONE && u !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: d, context: c, meta: { id: e.id } });
                    },
                E =
                    (e) =>
                    (t, a, { api: n }) => {
                        const i = (0, l._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: n.withEndpoint(r.Z).fetchNotABotCheckoutUrl }),
                            u = S(a(), e.id);
                        return u !== s.ZP.NONE && u !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: d, context: c, meta: { id: e.id } });
                    },
                C =
                    () =>
                    (e, t, { api: a }) => {
                        const n = (0, l._O)(e, { params: {}, request: a.withEndpoint(r.Z).fetchProductSubscriptions }),
                            i = k(t());
                        return i !== s.ZP.NONE && i !== s.ZP.FAILED ? Promise.resolve() : n({ actionTypes: p, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                v =
                    (e) =>
                    (t, a, { api: n }) => {
                        const i = (0, l._O)(t, { params: { price_id: e }, request: n.withEndpoint(r.Z).switchTier }),
                            u = h(a());
                        return u !== s.ZP.NONE && u !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: m, context: "TIER_SWITCH" });
                    };
            i.Z.register({
                [u]: function (e = g, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case o.REQUEST: {
                            const { id: a } = t.meta;
                            return { ...e, products: { ...e.products, [a]: { fetchStatus: s.ZP.LOADING } } };
                        }
                        case o.SUCCESS: {
                            const { id: a } = t.meta;
                            return { ...e, products: { ...e.products, [a]: { fetchStatus: s.ZP.LOADED, details: t.payload } } };
                        }
                        case o.FAILURE: {
                            const { id: a } = t.meta;
                            return { ...e, products: { ...e.products, [a]: { fetchStatus: s.ZP.FAILED, error: t.payload } } };
                        }
                        case d.REQUEST: {
                            const { id: a } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [a]: { fetchStatus: s.ZP.LOADING } } };
                        }
                        case d.SUCCESS: {
                            const { id: a } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [a]: { fetchStatus: s.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case d.FAILURE: {
                            const { id: a } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [a]: { fetchStatus: s.ZP.FAILED, error: t.payload } } };
                        }
                        case p.REQUEST:
                            return { ...e, productSubscriptions: { fetchStatus: s.ZP.LOADING } };
                        case p.SUCCESS:
                            return { ...e, productSubscriptions: { fetchStatus: s.ZP.LOADED, subscriptions: t.payload } };
                        case p.FAILURE:
                            return { ...e, productSubscriptions: { fetchStatus: s.ZP.FAILED, error: t.payload } };
                        case m.REQUEST:
                            return { ...e, switchTier: { fetchStatus: s.ZP.LOADING } };
                        case m.SUCCESS:
                            return { ...e, switchTier: { fetchStatus: s.ZP.LOADED } };
                        case m.FAILURE:
                            return { ...e, switchTier: { fetchStatus: s.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
        },
        757771: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3GrokDark.c3fb24fa.png";
        },
        822669: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3GrokLight.3795881a.png";
        },
        249202: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumAdsRemovedDark.cb6948fa.png";
        },
        748234: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumAdsRemovedLight.82fef29a.png";
        },
        837835: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumPlusAdsRemoved.c93c1e1a.png";
        },
        951737: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumPlusReplyBoostDark.45eb567a.png";
        },
        872211: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumPlusReplyBoostLight.4fa2ffba.png";
        },
        468573: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumReplyBoostDark.136e0eea.png";
        },
        809369: (e, t, a) => {
            "use strict";
            e.exports = a.p + "V3PremiumReplyBoostLight.7b92650a.png";
        },
        966299: (e, t, a) => {
            "use strict";
            e.exports = a.p + "black_hole.341c6f7a.png";
        },
        590021: (e, t, a) => {
            "use strict";
            e.exports = a.p + "grok_logo_black.9a6a7f1a.png";
        },
        195811: (e, t, a) => {
            "use strict";
            e.exports = a.p + "grok_logo_gray.7c81b50a.png";
        },
        605879: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumAdsRemovedDark.71a87bea.png";
        },
        70375: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumAdsRemovedLight.491b9f3a.png";
        },
        656415: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumBoostedReplyDark.bfc42fca.png";
        },
        269541: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumBoostedReplyLight.2c65460a.png";
        },
        671809: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusAdsRemovedDark.bedd7daa.png";
        },
        219759: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusAdsRemovedLight.4f0dd73a.png";
        },
        51959: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusBoostedReplyDark.25930eaa.png";
        },
        165806: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusBoostedReplyLight.0b6b07da.png";
        },
        473301: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusGrokDark.79b1fc1a.png";
        },
        603044: (e, t, a) => {
            "use strict";
            e.exports = a.p + "premiumPlusGrokLight.37251b1a.png";
        },
        607178: (e, t, a) => {
            "use strict";
            e.exports = a.p + "tierFrameDarkMode.da41b47a.png";
        },
        13266: (e, t, a) => {
            "use strict";
            e.exports = a.p + "tierFrameLightMode.f476c13a.png";
        },
        716110: (e, t, a) => {
            "use strict";
            e.exports = a.p + "v3PaywallBackground.784f6d6a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-a2dee9c7.eff6af7a.js.map

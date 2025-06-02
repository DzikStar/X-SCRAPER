(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsRevamp~bundle.TwitterBlue", "icons/IconChevronRight-js"],
    {
        376920: (e) => {
            e.exports = { queryId: "V8-RP7SxlI4qzRmpCmEqgw", operationName: "ListProductSubscriptions", operationType: "query", metadata: { featureSwitches: ["subscriptions_management_fetch_next_billing_time", "subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        722687: (e) => {
            e.exports = { queryId: "RM4x9h3tF8bCn69VV3-gRg", operationName: "NotABotCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        758526: (e) => {
            e.exports = { queryId: "-kH-xt82ZhKnAMTXv1Fuzg", operationName: "SubscriptionCheckoutUrlWithEligibility", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        284360: (e) => {
            e.exports = { queryId: "yIGOH-WMQSU-AdbfVRZm9A", operationName: "SubscriptionProductDetails", operationType: "query", metadata: { featureSwitches: ["subscriptions_marketing_page_fetch_promotions"], fieldToggles: [] } };
        },
        936961: (e) => {
            e.exports = { queryId: "NEMw3cw4v0-Oo-nTMI8reQ", operationName: "SwitchTier", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        372551: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => _ });
            var n = r(376920),
                i = r.n(n),
                a = r(722687),
                c = r.n(a),
                o = r(758526),
                s = r.n(o),
                u = r(284360),
                d = r.n(u),
                l = r(936961),
                p = r.n(l);
            const _ = ({ apiClient: e, featureSwitches: t }) => ({ fetchSubscriptionProductDetails: (t) => e.graphQL(d(), t).then((e) => e.web_subscription_product_details), fetchSubscriptionProductCheckoutUrl: (t) => e.graphQL(s(), t).then((e) => e.subscriptioncheckoutsession_create_for_blue?.session_url), fetchNotABotCheckoutUrl: (t) => e.graphQL(c(), t).then((e) => e.subscriptioncheckoutsession_create_for_not_a_bot?.session_url), fetchProductSubscriptions: (t) => e.graphQL(i(), t).then((e) => e.viewer_v2?.list_product_subscriptions), switchTier: (t) => e.graphQL(p(), t).then((e) => e) });
        },
        97882: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => a, x: () => c });
            var n = r(111677),
                i = r.n(n);
            const a = { AED: i().d857e44d, ALL: i().cb87e3db, ARS: i().a9d5ffd1, AUD: i().a0e8371d, BAM: i().gcc50dc9, BDT: i().a6a43585, BGN: i().a0cc8f2d, BHD: i().i31c32c5, BRL: i().i7dc69e9, BYR: i().c14a6c03, CAD: i().jaa3d537, CHF: i().a824080b, CLP: i().d9c0bedb, CNY: i().bf8c0613, COP: i().i8163625, CZK: i().adb53ba1, DKK: i().iabf697d, DZD: i().a1a0555b, EGP: i().f266f3d9, EUR: i().a9a8652b, GBP: i().dbf40761, GHS: i().b0d993d9, GTQ: i().ac1308e1, HKD: i().a7889ab3, HRK: i().c614f5cd, HUF: i().i55d57e3, IDR: i().e4b6002b, ILS: i().d28e983b, INR: i().e8c9232d, IQD: i().c8994ae1, ISK: i().f821c2a5, JPY: i().j348b9c9, KES: i().i6f93b9b, KRW: i().c6150bd5, KWD: i().i8921e09, KZT: i().ef239279, LBP: i().hecdb149, MAD: i().fdd039b7, MKD: i().f30c2c37, MXN: i().d9ea7bff, MYR: i().ea3df4b7, NGN: i().jaac21bb, NOK: i().hb435ced, NZD: i().ce699d81, PEN: i().bc56d3d7, PHP: i().f8561913, PKR: i().g6485d53, PLN: i().ff561cc1, QAR: i().b42011d3, RON: i().a6660bcd, RSD: i().f9b80449, RUB: i().gdee4d5d, SAR: i().h36f2103, SEK: i().a19ad037, SGD: i().g713f699, THB: i().ff2e39af, TND: i().be34316d, TRY: i().aef81b75, TWD: i().fcce70a5, TZS: i().jc9d352f, UAH: i().be1cb8c5, UGX: i().j9371501, USD: i().j7d4397d, VEF: i().d61441dd, VND: i().e2a99e97, ZAR: i().f7ce19ab, ZMW: i().b2a0213f },
                c = ({ amount: e, currencyCode: t = "USD", formatter: r = 1e6, removeTrailingZeros: n = !1, strictAmount: i = !1 }) => {
                    const c = i ? e : parseInt(e, 10) / r,
                        s = a[t]?.(c);
                    return n ? o(s) : s;
                },
                o = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        147595: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => i });
            var n = r(337394);
            const i = (e) => {
                const t = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    i = e.find((e) => e.product?.rest_id && n.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || r || i;
            };
        },
        321330: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var n = r(202784),
                i = r(111677),
                a = r.n(i),
                c = r(443781);
            const o = a().f75d1806,
                s = a().j4a7d9a6,
                u = a().hedf9d7c,
                d = () => {
                    const { userClaims: e } = n.useContext(c.rC),
                        t = e.hasSubscription("verified_org_full_access") || e.hasSubscription("verified_org_basic") || e.hasSubscription("verified_org_free") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_gov_paid") || e.hasSubscription("verified_org_legacy") || e.hasSubscription("verified_org_affiliate") || e.hasSubscription("verified_org_gov_affiliate"),
                        r = { label: o, value: "Premium" };
                    return t || e.hasSubscription("premium_plus") ? { label: u, value: "Premium+" } : e.hasSubscription("premium_standard") ? r : e.hasSubscription("premium_basic") ? { label: s, value: "Basic" } : r;
                };
        },
        548797: (e, t, r) => {
            "use strict";
            r.d(t, { Ld: () => d, gS: () => u, pB: () => o, yv: () => s });
            var n = r(111677),
                i = r.n(n),
                a = r(337394);
            const c = i().b47d123d,
                o = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === a.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === a.rv.Month),
                        n = r ? 12 * r?.amount_local_micro : 0,
                        i = t ? Math.floor(((t.amount_local_micro - n) / n) * -100) : null;
                    return c({ percentage: i });
                },
                s = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (a.v5.premium[r] === t) return "active";
                    switch (a.v5.premium[r]) {
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
                u = (e, t, r) => {
                    const { status: n } = r,
                        i = Date.now(),
                        a = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                a = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > i) {
                                if ("active" === n) return a < i;
                                if ("pending" === n) return a > i;
                            }
                        });
                    return a?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            "use strict";
            r.d(t, { Gi: () => b, Mk: () => T, ZV: () => f, aU: () => m, d3: () => h, fS: () => E, pt: () => S });
            r(202784);
            var n = r(111677),
                i = r.n(n),
                a = r(336629),
                c = r(862695),
                o = r(97882),
                s = r(337394),
                u = r(548797);
            const d = i().c6614cc0,
                l = i().f8d3b50a,
                p = i().i2c32253,
                _ = i().c41e1023;
            function m(e, t = !0, r) {
                let n = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (n += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    r)
                ) {
                    n -= n * (r / 100);
                }
                return n;
            }
            function f(e) {
                return "number" == typeof e?.tax_amount_local_micro ? l : d;
            }
            const S = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function b(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function h(e, t = !1, r, n = !1, i = !0) {
                const d = (0, u.gS)(r, "Discount", { status: n ? "pending" : "active" }),
                    l = (0, o.x)({ amount: m(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, c.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, a.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: l, includeDiscountedPrice: !0, includeThenLabel: i }) : e.charge_interval === s.rv.Year ? _({ price: l }) : e.charge_interval === s.rv.Month ? p({ price: l }) : "";
            }
            const T = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                E = (e, t, r) => {
                    if (!t || r) return null;
                    const n = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return n;
                };
        },
        365265: (e, t, r) => {
            "use strict";
            r.d(t, { $B: () => b, F$: () => h, Ne: () => g, RC: () => C, VR: () => T, dF: () => P, h9: () => S, hu: () => I, pC: () => E, qB: () => U, tF: () => f, v1: () => v, xN: () => R });
            var n = r(372551),
                i = r(147595),
                a = r(499627),
                c = r(917799),
                o = r(312771);
            const s = "subscriptionPayments",
                u = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                m = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: o.ZP.NONE }, switchTier: { fetchStatus: o.ZP.NONE } };
            const f = (e, t) => {
                    const r = e[s].products[t];
                    return r?.fetchStatus || o.ZP.NONE;
                },
                S = (e, t) => {
                    const r = e[s].products[t];
                    return r?.details;
                },
                b = (e, t) => {
                    const r = e[s].checkoutUrls[t];
                    return r?.fetchStatus || o.ZP.NONE;
                },
                h = (e, t) => {
                    const r = e[s].checkoutUrls[t];
                    return r?.checkoutUrl;
                },
                T = (e) => e[s].productSubscriptions.fetchStatus,
                E = (e) => (e[s].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                P = (e) => {
                    const t = e[s].productSubscriptions.subscriptions || [];
                    return (0, i.R)(t);
                },
                C = (e) => {
                    const t = e[s].switchTier;
                    return t?.fetchStatus || o.ZP.NONE;
                },
                g =
                    (e) =>
                    (t, r, { api: i }) => {
                        const a = (0, c._O)(t, { params: { id: e }, request: i.withEndpoint(n.Z).fetchSubscriptionProductDetails }),
                            s = f(r(), e);
                        return s !== o.ZP.NONE && s !== o.ZP.FAILED ? Promise.resolve() : a({ actionTypes: d, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                U =
                    (e) =>
                    (t, r, { api: i }) => {
                        const a = (0, c._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: i.withEndpoint(n.Z).fetchSubscriptionProductCheckoutUrl }),
                            s = b(r(), e.id);
                        return s !== o.ZP.NONE && s !== o.ZP.FAILED ? Promise.resolve() : a({ actionTypes: l, context: u, meta: { id: e.id } });
                    },
                I =
                    (e) =>
                    (t, r, { api: i }) => {
                        const a = (0, c._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: i.withEndpoint(n.Z).fetchNotABotCheckoutUrl }),
                            s = b(r(), e.id);
                        return s !== o.ZP.NONE && s !== o.ZP.FAILED ? Promise.resolve() : a({ actionTypes: l, context: u, meta: { id: e.id } });
                    },
                v =
                    () =>
                    (e, t, { api: r }) => {
                        const i = (0, c._O)(e, { params: { fetchPrices: !1 }, request: r.withEndpoint(n.Z).fetchProductSubscriptions }),
                            a = T(t());
                        return a !== o.ZP.NONE && a !== o.ZP.FAILED ? Promise.resolve() : i({ actionTypes: p, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                R =
                    (e) =>
                    (t, r, { api: i }) => {
                        const a = (0, c._O)(t, { params: { price_id: e }, request: i.withEndpoint(n.Z).switchTier }),
                            s = C(r());
                        return s !== o.ZP.NONE && s !== o.ZP.FAILED ? Promise.resolve() : a({ actionTypes: _, context: "TIER_SWITCH" });
                    };
            a.Z.register({
                [s]: function (e = m, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.LOADING } } };
                        }
                        case d.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.LOADED, details: t.payload } } };
                        }
                        case d.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: o.ZP.FAILED, error: t.payload } } };
                        }
                        case l.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.LOADING } } };
                        }
                        case l.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case l.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: o.ZP.FAILED, error: t.payload } } };
                        }
                        case p.REQUEST:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.LOADING } };
                        case p.SUCCESS:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.LOADED, subscriptions: t.payload } };
                        case p.FAILURE:
                            return { ...e, productSubscriptions: { fetchStatus: o.ZP.FAILED, error: t.payload } };
                        case _.REQUEST:
                            return { ...e, switchTier: { fetchStatus: o.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, switchTier: { fetchStatus: o.ZP.LOADED } };
                        case _.FAILURE:
                            return { ...e, switchTier: { fetchStatus: o.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
        },
        336629: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => a });
            var n = r(97882),
                i = r(685731);
            const a = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: r, percentOff: a, price: c }) => {
                const o = (0, i.aU)(c, t, a),
                    s = e ? o / 12 : r ? 12 * o : o;
                return (0, n.x)({ amount: s, currencyCode: c?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => h, f: () => b });
            var n = r(202784),
                i = r(325686),
                a = r(731708),
                c = r(392237),
                o = r(111677),
                s = r.n(o),
                u = r(336629);
            const d = s().i57aeafb,
                l = s().ae3e3723,
                p = s().ade4c757,
                _ = s().f7798e11,
                m = s().e0b39888,
                f = s().b67c37de,
                S = s().a8363765,
                b = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: r, includeTax: n, isFreeTrial: i, isTierSwitching: a, price: c, selectedInterval: o, shouldRemoveExtraStep: s, withAnnualPriceMonthly: d }) => (i ? ("Month" === o ? p({ price: r }) : _({ price: r })) : t || e ? h({ formattedPrice: r, selectedInterval: o, includeDiscountedPrice: "Year" === o && d, discountedFormattedPrice: (0, u.T)({ price: c, includeTax: n, percentOff: a ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: a ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === o && s ? S({ price: r }) : "Month" === o ? m : f),
                h = ({ discountedFormattedPrice: e, duration: t, formattedPrice: r, includeDiscountedPrice: c, includeThenLabel: o, selectedInterval: u }) => {
                    let m;
                    return (m = "Month" === u ? (c ? n.createElement(s().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, n.createElement(a.ZP, { style: { textDecorationLine: "line-through" } }, s().df3ed1c8({ standardPrice: r }))) : d({ duration: t, standardPrice: r })) : c ? n.createElement(s().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, n.createElement(a.ZP, { style: { textDecorationLine: "line-through" } }, s().g261b098({ standardPrice: r }))) : l({ duration: t, standardPrice: r })), o && (m = n.createElement(i.Z, null, n.createElement(a.ZP, { style: T.marginBottom }, m), n.createElement(a.ZP, null, "Year" === u ? _({ price: r }) : p({ price: r })))), m;
                },
                T = c.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        275158: (e, t, r) => {
            "use strict";
            r.d(t, { _r: () => o, d9: () => i, gV: () => c, iG: () => a });
            const n = `https://${window.location.host}`,
                i = `${n}/settings/subscription`,
                a = "/i/premium_sign_up",
                c = `${n}${a}`,
                o = `${c}/successful`;
        },
        280278: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => f });
            var n = r(202784),
                i = r(325686),
                a = r(827515),
                c = r(461756),
                o = r(731708),
                s = r(392237);
            const u = "up",
                d = "down",
                l = (e, t, r) => {
                    r((r) => {
                        const n = (0, a.Z)(e) ? (e > (r.count || 0) ? u : d) : u;
                        return { ...r, count: e, oldText: r.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                p = {};
            [u, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const _ = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: r, count: s, ...d } = e,
                        [f, S] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: u }),
                        b = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (b.current)
                                if (c.Z.reducedMotionEnabled) S((r) => ({ ...r, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? S((e) => ({ ...e, pendingCount: null, pendingText: null })) : (S((r) => ({ ...r, pendingCount: e.count, pendingText: t })), f.animating || l(e.count, t, S));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && S((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && l(f.pendingCount, f.pendingText, S));
                        }, [f.animating, f.oldText]),
                        n.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !c.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !c.Z.reducedMotionEnabled,
                                s = { ..._, ...(f.animating ? e.post : e.active) },
                                u = { ...(a ? e.pre : e.active) };
                            return n.createElement(
                                i.Z,
                                { style: [m.root, r] },
                                t ? n.createElement("span", { style: s }, n.createElement(o.ZP, d, f.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, S),
                                        style: u,
                                    },
                                    n.createElement(o.ZP, d, f.text),
                                ),
                            );
                        }, [r, d, f, b, S])
                    );
                };
        },
        58399: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => u });
            var n = r(202784),
                i = r(890601),
                a = r(783427),
                c = r(717683),
                o = r(347101);
            const s = (e = {}) => {
                const t = n.useContext(c.Z),
                    { direction: r } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const u = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsRevamp~bundle.TwitterBlue.50c6111a.js.map

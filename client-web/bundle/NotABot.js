(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.NotABot"],
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
            r.d(t, { Z: () => m });
            var a = r(376920),
                o = r.n(a),
                i = r(722687),
                n = r.n(i),
                s = r(758526),
                c = r.n(s),
                l = r(284360),
                d = r.n(l),
                u = r(936961),
                p = r.n(u);
            const m = ({ apiClient: e, featureSwitches: t }) => ({ fetchSubscriptionProductDetails: (t) => e.graphQL(d(), t).then((e) => e.web_subscription_product_details), fetchSubscriptionProductCheckoutUrl: (t) => e.graphQL(c(), t).then((e) => e.subscriptioncheckoutsession_create_for_blue?.session_url), fetchNotABotCheckoutUrl: (t) => e.graphQL(n(), t).then((e) => e.subscriptioncheckoutsession_create_for_not_a_bot?.session_url), fetchProductSubscriptions: (t) => e.graphQL(o(), t).then((e) => e.viewer_v2?.list_product_subscriptions), switchTier: (t) => e.graphQL(p(), t).then((e) => e) });
        },
        625661: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => p });
            var a = r(202784),
                o = r(614983),
                i = r.n(o),
                n = r(325686),
                s = r(370006),
                c = r(786998),
                l = r(929028),
                d = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: o, hideBackButton: i, isFullWidth: n, isLarge: l, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: f, style: b, subtitle: _, title: g, titleDomId: S, titleIconCell: E, titleIconCellSize: y, withBackground: P, withWideContainer: C } = this.props,
                        { isModal: T } = this.context,
                        k = i ? d : a.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        I = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!P, T, !!f);
                    return a.createElement(a.Fragment, null, a.createElement(c.Z, { centerTitle: t, centeredLogo: r, isFullWidth: n, isLarge: l, leftControl: k, middleControl: p, position: u(m, T, o), rightControl: h, style: b, subtitle: _, title: g, titleDomId: S, titleIconCell: E, titleIconCellSize: y, withBackground: I, withWideContainer: C }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = l.Z.getBackgroundStyles();
                    return t ? a.createElement(n.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => h });
            var a = r(807896),
                o = r(202784),
                i = r(182056),
                n = r(879113),
                s = r(392237),
                c = r(111677),
                l = r.n(c),
                d = r(968478);
            const u = l().aa6e3300,
                p = ({ retryMessage: e, ...t }, r) => {
                    const s = i.Z.isOnline();
                    return o.createElement(n.Z, (0, a.Z)({}, t, { icon: s ? void 0 : o.createElement(d.default, { style: m.icon }), retryMessage: s ? e : u }));
                },
                m = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = o.forwardRef(p);
        },
        980407: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => f, w: () => m });
            var a = r(202784),
                o = r(325686),
                i = r(108362),
                n = r(386802),
                s = r(392237),
                c = r(652904),
                l = r(555079),
                d = r(625661),
                u = r(449067),
                p = r(715601);
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: i, centerTitle: n, hideBackButton: s, history: c, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: f, rightControl: b, secondaryBar: _, subtitle: g, title: S } = this.props,
                                { isModal: E } = this.context;
                            return a.createElement(o.Z, { style: E ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, a.createElement(d.ZP, { backButtonType: r || (E ? "close" : "back"), backLocation: i, centerTitle: n, fixed: !E, hideBackButton: s, history: c, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: f, ref: e, rightControl: b, secondaryBar: _, style: [E && h.appBarModal, t], subtitle: g, title: S, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: n, documentTitle: s, isFullWidth: l, isLarge: d, renderHeader: m, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: _ } = this.context,
                        g = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(c.Z, null, a.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: f }), a.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, _ && h.rootModal] }, !_ && g, a.createElement(i.Z, { isFullWidth: l, isLarge: d, style: [h.container, _ && h.containerModal, n] }, _ ? a.createElement(p.Z, { style: h.viewport }, g, r) : r), t ? a.createElement(o.Z, { style: [h.bottomBarModal, !_ && !b && h.bottomBarMobile] }, a.createElement(i.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const h = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = m;
        },
        652904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(500002),
                i = r(668214),
                n = r(997174),
                s = r(118823);
            const c = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: a },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: i, search: n },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (c = !0));
                    const l = o || s;
                    ((l && o !== s) || (!l && r !== i) || a !== n || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, o.ZP)(c(l));
        },
        97882: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => i, x: () => n });
            var a = r(111677),
                o = r.n(a);
            const i = { AED: o().d857e44d, ALL: o().cb87e3db, ARS: o().a9d5ffd1, AUD: o().a0e8371d, BAM: o().gcc50dc9, BDT: o().a6a43585, BGN: o().a0cc8f2d, BHD: o().i31c32c5, BRL: o().i7dc69e9, BYR: o().c14a6c03, CAD: o().jaa3d537, CHF: o().a824080b, CLP: o().d9c0bedb, CNY: o().bf8c0613, COP: o().i8163625, CZK: o().adb53ba1, DKK: o().iabf697d, DZD: o().a1a0555b, EGP: o().f266f3d9, EUR: o().a9a8652b, GBP: o().dbf40761, GHS: o().b0d993d9, GTQ: o().ac1308e1, HKD: o().a7889ab3, HRK: o().c614f5cd, HUF: o().i55d57e3, IDR: o().e4b6002b, ILS: o().d28e983b, INR: o().e8c9232d, IQD: o().c8994ae1, ISK: o().f821c2a5, JPY: o().j348b9c9, KES: o().i6f93b9b, KRW: o().c6150bd5, KWD: o().i8921e09, KZT: o().ef239279, LBP: o().hecdb149, MAD: o().fdd039b7, MKD: o().f30c2c37, MXN: o().d9ea7bff, MYR: o().ea3df4b7, NGN: o().jaac21bb, NOK: o().hb435ced, NZD: o().ce699d81, PEN: o().bc56d3d7, PHP: o().f8561913, PKR: o().g6485d53, PLN: o().ff561cc1, QAR: o().b42011d3, RON: o().a6660bcd, RSD: o().f9b80449, RUB: o().gdee4d5d, SAR: o().h36f2103, SEK: o().a19ad037, SGD: o().g713f699, THB: o().ff2e39af, TND: o().be34316d, TRY: o().aef81b75, TWD: o().fcce70a5, TZS: o().jc9d352f, UAH: o().be1cb8c5, UGX: o().j9371501, USD: o().j7d4397d, VEF: o().d61441dd, VND: o().e2a99e97, ZAR: o().f7ce19ab, ZMW: o().b2a0213f },
                n = ({ amount: e, currencyCode: t = "USD", formatter: r = 1e6, removeTrailingZeros: a = !1, strictAmount: o = !1 }) => {
                    const n = o ? e : parseInt(e, 10) / r,
                        c = i[t]?.(n);
                    return a ? s(c) : c;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        147595: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var a = r(337394);
            const o = (e) => {
                const t = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    r = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    o = e.find((e) => e.product?.rest_id && a.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || r || o;
            };
        },
        548797: (e, t, r) => {
            "use strict";
            r.d(t, { Ld: () => d, gS: () => l, pB: () => s, yv: () => c });
            var a = r(111677),
                o = r.n(a),
                i = r(337394);
            const n = o().b47d123d,
                s = (e) => {
                    const t = e?.prices?.find((e) => e?.charge_interval === i.rv.Year),
                        r = e?.prices?.find((e) => e?.charge_interval === i.rv.Month),
                        a = r ? 12 * r?.amount_local_micro : 0,
                        o = t ? Math.floor(((t.amount_local_micro - a) / a) * -100) : null;
                    return n({ percentage: o });
                },
                c = ({ activeSubscription: e, tier: t }) => {
                    const r = e?.product?.rest_id;
                    if (!r) return "invalid";
                    if (i.v5.premium[r] === t) return "active";
                    switch (i.v5.premium[r]) {
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
                l = (e, t, r) => {
                    const { status: a } = r,
                        o = Date.now(),
                        i = e?.promotions?.filter((e) => {
                            const r = parseInt(e.ends_at_msec, 10),
                                i = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === t && r > o) {
                                if ("active" === a) return i < o;
                                if ("pending" === a) return i > o;
                            }
                        });
                    return i?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, t, r) => {
            "use strict";
            r.d(t, { Gi: () => _, Mk: () => S, ZV: () => f, aU: () => h, d3: () => g, fS: () => E, pt: () => b });
            r(202784);
            var a = r(111677),
                o = r.n(a),
                i = r(336629),
                n = r(862695),
                s = r(97882),
                c = r(337394),
                l = r(548797);
            const d = o().c6614cc0,
                u = o().f8d3b50a,
                p = o().i2c32253,
                m = o().c41e1023;
            function h(e, t = !0, r) {
                let a = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (t &&
                        (a += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    r)
                ) {
                    a -= a * (r / 100);
                }
                return a;
            }
            function f(e) {
                return "number" == typeof e?.tax_amount_local_micro ? u : d;
            }
            const b = (e, t, r) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === r && e.metadata.purchasable).find((e) => (t ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function _(e, t) {
                if (e && t) return t?.find((t) => t?.charge_interval === e);
            }
            function g(e, t = !1, r, a = !1, o = !0) {
                const d = (0, l.gS)(r, "Discount", { status: a ? "pending" : "active" }),
                    u = (0, s.x)({ amount: h(e, t), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, n.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, i.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: t, annualPriceMonthly: !1 }), formattedPrice: u, includeDiscountedPrice: !0, includeThenLabel: o }) : e.charge_interval === c.rv.Year ? m({ price: u }) : e.charge_interval === c.rv.Month ? p({ price: u }) : "";
            }
            const S = (e) => {
                    const t = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return t;
                },
                E = (e, t, r) => {
                    if (!t || r) return null;
                    const a = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return a;
                };
        },
        365265: (e, t, r) => {
            "use strict";
            r.d(t, { $B: () => _, F$: () => g, Ne: () => C, RC: () => P, VR: () => S, dF: () => y, h9: () => b, hu: () => k, pC: () => E, qB: () => T, tF: () => f, v1: () => I, xN: () => B });
            var a = r(372551),
                o = r(147595),
                i = r(499627),
                n = r(917799),
                s = r(312771);
            const c = "subscriptionPayments",
                l = "FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL",
                d = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST", SUCCESS: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS", FAILURE: "rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/subscriptionPayments/TIER_SWITCH_REQUEST", SUCCESS: "rweb/subscriptionPayments/TIER_SWITCH_SUCCESS", FAILURE: "rweb/subscriptionPayments/TIER_SWITCH_FAILURE" }),
                h = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: s.ZP.NONE }, switchTier: { fetchStatus: s.ZP.NONE } };
            const f = (e, t) => {
                    const r = e[c].products[t];
                    return r?.fetchStatus || s.ZP.NONE;
                },
                b = (e, t) => {
                    const r = e[c].products[t];
                    return r?.details;
                },
                _ = (e, t) => {
                    const r = e[c].checkoutUrls[t];
                    return r?.fetchStatus || s.ZP.NONE;
                },
                g = (e, t) => {
                    const r = e[c].checkoutUrls[t];
                    return r?.checkoutUrl;
                },
                S = (e) => e[c].productSubscriptions.fetchStatus,
                E = (e) => (e[c].productSubscriptions.subscriptions || []).find((e) => e.product?.rest_id && ("one-dollar-1" === e.product?.rest_id || "one-dollar-subscription" === e.product?.rest_id || "one-dollar-1-sandbox" === e.product?.rest_id) && "Inactive" !== e.state),
                y = (e) => {
                    const t = e[c].productSubscriptions.subscriptions || [];
                    return (0, o.R)(t);
                },
                P = (e) => {
                    const t = e[c].switchTier;
                    return t?.fetchStatus || s.ZP.NONE;
                },
                C =
                    (e) =>
                    (t, r, { api: o }) => {
                        const i = (0, n._O)(t, { params: { id: e }, request: o.withEndpoint(a.Z).fetchSubscriptionProductDetails }),
                            c = f(r(), e);
                        return c !== s.ZP.NONE && c !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: d, context: "FETCH_SUBSCRIPTION_PRODUCT_DETAILS", meta: { id: e } });
                    },
                T =
                    (e) =>
                    (t, r, { api: o }) => {
                        const i = (0, n._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId, promotion_data: e.promotion_data }, request: o.withEndpoint(a.Z).fetchSubscriptionProductCheckoutUrl }),
                            c = _(r(), e.id);
                        return c !== s.ZP.NONE && c !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: u, context: l, meta: { id: e.id } });
                    },
                k =
                    (e) =>
                    (t, r, { api: o }) => {
                        const i = (0, n._O)(t, { params: { external_product_id: e.externalProductId, success_url: e.successUrl, cancel_url: e.cancelUrl, external_price_id: e.externalPriceId }, request: o.withEndpoint(a.Z).fetchNotABotCheckoutUrl }),
                            c = _(r(), e.id);
                        return c !== s.ZP.NONE && c !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: u, context: l, meta: { id: e.id } });
                    },
                I =
                    () =>
                    (e, t, { api: r }) => {
                        const o = (0, n._O)(e, { params: { fetchPrices: !1 }, request: r.withEndpoint(a.Z).fetchProductSubscriptions }),
                            i = S(t());
                        return i !== s.ZP.NONE && i !== s.ZP.FAILED ? Promise.resolve() : o({ actionTypes: p, context: "FETCH_PRODUCT_SUBSCRIPTIONS", meta: {} });
                    },
                B =
                    (e) =>
                    (t, r, { api: o }) => {
                        const i = (0, n._O)(t, { params: { price_id: e }, request: o.withEndpoint(a.Z).switchTier }),
                            c = P(r());
                        return c !== s.ZP.NONE && c !== s.ZP.FAILED ? Promise.resolve() : i({ actionTypes: m, context: "TIER_SWITCH" });
                    };
            i.Z.register({
                [c]: function (e = h, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: s.ZP.LOADING } } };
                        }
                        case d.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: s.ZP.LOADED, details: t.payload } } };
                        }
                        case d.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, products: { ...e.products, [r]: { fetchStatus: s.ZP.FAILED, error: t.payload } } };
                        }
                        case u.REQUEST: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: s.ZP.LOADING } } };
                        }
                        case u.SUCCESS: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: s.ZP.LOADED, checkoutUrl: t.payload } } };
                        }
                        case u.FAILURE: {
                            const { id: r } = t.meta;
                            return { ...e, checkoutUrls: { ...e.checkoutUrls, [r]: { fetchStatus: s.ZP.FAILED, error: t.payload } } };
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
        993187: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => V });
            var a = r(202784),
                o = r(99107),
                i = r(325686),
                n = r(107267),
                s = r(386802),
                c = r(731708),
                l = r(392237),
                d = r(111677),
                u = r.n(d),
                p = r(323265),
                m = r(980407),
                h = r(443781),
                f = r(154003),
                b = r(688715),
                _ = r(782826),
                g = r(725516);
            const S = "not-a-bot-container",
                E = u().b66b62a4,
                y = u().e5b5faa6,
                P = l.default.create((e) => ({ buttonWrapper: { alignItems: "center", backgroundColor: e.colors.cellBackground, bottom: "0px", paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, positionSticky: { position: "sticky" }, termsOfService: { flexDirection: "row", justifyContent: "center", maxWidth: "80%", paddingBottom: e.spaces.space8, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, marginTop: e.spaces.space12 }, tileRadioGroup: { marginBottom: e.spaces.space16, width: "75%" }, inlineCallout: { width: "75%" }, footerWrapper: { alignItems: "center", justifyContent: "center", marginTop: e.spaces.space16, marginBottom: e.spaces.space16 }, width75Percent: { width: "75%" }, marginTop8: { marginTop: e.spaces.space8 }, button: { cursor: "pointer", alignItems: "center", width: "100%" }, strikethrough: { textDecorationLine: "line-through", marginEnd: e.spaces.space4 }, buttonWrapperRedesign: { display: "flex", flexDirection: "column" }, positionFixed: { position: "fixed" }, termsOfServiceRedesign: { flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8, marginTop: e.spaces.space12, bottom: 0, start: 0, backgroundColor: e.colors.cellBackground, borderTopWidth: e.borderWidthsPx.small, borderTopColor: e.colors.gray100 } })),
                C = (e) => {
                    const t = (0, n.useHistory)(),
                        r = (0, g.z)(),
                        { disabled: o, isMobile: s, onSubscribe: l, price: d } = e,
                        m = a.createElement(
                            f.ZP,
                            {
                                "aria-label": u().i61a221c,
                                disabled: o,
                                onPress: () => {
                                    l(), r.scribe({ action: "click", element: "subscribe", data: { referring_page: (0, _.G3)(t.location) } });
                                },
                                style: P.button,
                                testID: "subscribeButton",
                                type: "primaryFilled",
                            },
                            a.createElement(c.ZP, { weight: "heavy" }, d),
                        ),
                        h = () => {
                            r.scribe({ action: "click", element: "terms_of_service" });
                        },
                        C = a.createElement(u().I18NFormatMessage, { $i18n: "da2a091b" }, a.createElement(c.ZP, { link: (0, b.ju)("https://legal.x.com/purchaser-terms"), onPress: h }, E), a.createElement(c.ZP, { link: (0, b.ju)("https://legal.x.com/not-a-bot-terms"), onPress: h }, y)),
                        T = a.createElement(u().I18NFormatMessage, { $i18n: "c23c08c9" }, a.createElement(c.ZP, { link: (0, b.ju)("https://legal.x.com/purchaser-terms"), onPress: h }, E), a.createElement(c.ZP, { link: (0, b.ju)("https://legal.x.com/not-a-bot-terms"), onPress: h }, y)),
                        k = p.ZP.isWebView() ? T : C,
                        I = a.createElement(i.Z, { style: P.termsOfServiceRedesign }, a.createElement(c.ZP, { align: "left", color: "gray700", size: "subtext3" }, k));
                    return a.createElement(i.Z, { style: P.buttonWrapperRedesign }, a.createElement(i.Z, { style: [P.buttonWrapper, P.buttonWrapperRedesign, s ? null : P.positionSticky], testID: S }, m, I));
                };
            var T = r(668214);
            const k = (0, T.Z)().withAnalytics({ page: "not_a_bot", section: "marketing" }),
                I = "webviewOneDollarEventMessageHandler",
                B = k((e) => {
                    const [t, r] = a.useState(!1),
                        [o, i] = a.useState(""),
                        { onClick: n, webviewMessageHandler: s } = e,
                        c = a.useCallback(
                            (e) => {
                                s.postMessage({ message: e });
                            },
                            [s],
                        ),
                        l = a.useCallback(() => {
                            if (t) return;
                            r(!0), n && n();
                            var e;
                            (e = "handle-subscribe"), s.postMessage({ message: e });
                        }, [t, r, n, s]);
                    return (
                        a.useEffect(() => {
                            const e = (e) => {
                                if (e.detail && e.detail.message)
                                    switch (e.detail.message) {
                                        case "product-label":
                                            e.detail.data && (r(!1), i(e.detail.data));
                                            break;
                                        case "error":
                                            r(!1);
                                    }
                            };
                            return window.addEventListener(I, e), c("send-product-label"), () => window.removeEventListener(I, e);
                        }, [c, i, r]),
                        a.createElement(C, { disabled: !1, isMobile: !0, onSubscribe: l, price: o })
                    );
                });
            r(136728);
            var w = r(290402),
                U = r(952793),
                Z = r(97882),
                R = r(685731),
                x = r(365265);
            const v = (0, T.Z)()
                    .propsFromState(() => ({ productDetailsFetchStatus: (e, t) => (0, x.tF)(e, t.stripeProductId), productDetails: (e, t) => (0, x.h9)(e, t.stripeProductId), checkoutUrlFetchStatus: (e, t) => (0, x.$B)(e, t.stripeProductId), checkoutUrl: (e, t) => (0, x.F$)(e, t.stripeProductId) }))
                    .propsFromActions(() => ({ fetchSubscriptionProductDetails: x.Ne, fetchNotABotCheckoutUrl: x.hu }))
                    .withAnalytics({ page: "not_a_bot", section: "marketing" }),
                D = `https://${window.location.host}`,
                L = `${D}/i/not_a_bot`,
                F = `${L}/successful`,
                N = u().c41e1023,
                A = v((e) => {
                    const { analytics: t, checkoutUrl: r, checkoutUrlFetchStatus: o, fetchNotABotCheckoutUrl: i, fetchSubscriptionProductDetails: s, isMobile: c, onClick: l, productDetails: d, productDetailsFetchStatus: u, stripeProductId: p, stripeProductIdUnhashed: m } = e,
                        h = (0, U.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        f = (0, n.useHistory)(),
                        b = F,
                        _ = a.useCallback(() => {
                            t.scribe({ action: "start", element: "fetch_product" }),
                                s(p)
                                    .then(() => {
                                        t.scribe({ action: "success", element: "fetch_product" });
                                    })
                                    .catch(() => {
                                        t.scribe({ action: "failure", element: "fetch_product" });
                                    });
                        }, [t, s, p]);
                    a.useEffect(() => {
                        _();
                    }, [_]);
                    const g = a.useCallback(() => {
                            f.push({ pathname: "/i/flow/user_graduation_payment", query: { return_path: "/i/not_a_bot" } });
                        }, [f]),
                        S = a.useCallback(() => d?.prices?.[0], [d]),
                        E = a.useCallback(() => {
                            if (d) {
                                const e = S(),
                                    t = e?.external_price_id;
                                t &&
                                    i({ id: p, externalProductId: m, successUrl: b, cancelUrl: L, externalPriceId: t }).catch(() => {
                                        g();
                                    });
                            }
                            l && l();
                        }, [i, l, d, g, p, m, S, b]),
                        y = () => {
                            const e = S();
                            if (e) {
                                const t = (0, Z.x)({ amount: (0, R.aU)(e, h), currencyCode: e.currency_code.toUpperCase() });
                                return N({ price: t });
                            }
                            return "";
                        };
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(w.Z, {
                            fetchStatus: u,
                            onRequestRetry: () => {
                                _();
                            },
                            render: () => a.createElement(C, { disabled: !d || "loading" === o, isMobile: c || !1, onSubscribe: E, price: y() }),
                            retryable: !0,
                        }),
                        r && a.createElement(w.Z, { fetchStatus: o, onRequestRetry: E, render: () => (r && (window.location.href = r), null), retryable: !0 }),
                    );
                }),
                M = (0, T.Z)()
                    .propsFromActions(() => ({ fetchSubscriptionProductDetails: x.Ne, fetchSubscriptionProductCheckoutUrl: x.qB }))
                    .withAnalytics({ page: "not_a_bot", section: "marketing" }),
                O = u().cea1c00e,
                H = u().f8e6a280,
                W = u().h968efc6,
                V = M((e) => {
                    const t = (0, n.useHistory)(),
                        r = (0, n.useLocation)(),
                        { isModal: l } = a.useContext(s.Z),
                        { analytics: d } = e,
                        [u, f] = a.useState(!1);
                    a.useEffect(() => {
                        d.scribe({ action: "impression", data: { referring_page: (0, _.G3)(r) } });
                    }, [d, r]),
                        a.useEffect(() => {
                            const e = Date.now();
                            return () => {
                                const t = Math.floor((Date.now() - e) / 1e3);
                                d.scribe({ action: "end_session", data: { end_session_reason: u ? "purchased" : "page_left", session_duration_in_s: t } });
                            };
                        }, [d, u, r]);
                    const { featureSwitches: b } = a.useContext(h.rC),
                        g = b.isTrue("subscriptions_stripe_testing"),
                        S = g ? o.FZ : o.QI,
                        E = g ? o.NU : o.VF,
                        y = a.useCallback(() => {
                            f(!0);
                        }, []),
                        P = !l,
                        C = !!p.ZP.isWebView(),
                        T = C ? W : H,
                        k = C && window.webkit?.messageHandlers && window.webkit.messageHandlers[I];
                    return a.createElement(m.Z, { backButtonType: "close", hideBackButton: C, history: t }, a.createElement(i.Z, { style: Q.page }, a.createElement(c.ZP, { "aria-level": 2, role: "heading", size: "title2", style: Q.headline, weight: "heavy" }, O), a.createElement(c.ZP, { color: "gray700", style: Q.subtext }, T), k ? a.createElement(B, { onClick: y, webviewMessageHandler: k }) : a.createElement(A, { isMobile: P, onClick: y, stripeProductId: S, stripeProductIdUnhashed: E })));
                }),
                Q = l.default.create((e) => ({ page: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", paddingEnd: e.spaces.space36, paddingStart: e.spaces.space36 }, headline: { marginTop: e.spaces.space8 }, itemBackground: { backgroundColor: e.colors.gray100 }, learnMoreButton: { paddingBottom: e.spaces.space32 }, learnMoreLink: { color: e.colors.link, marginTop: e.spaces.space4 }, learnMoreLinkRedesign: { color: e.colors.gray800, marginTop: e.spaces.space4, textDecorationLine: "underline" }, learnMoreTitleStyles: { fontWeight: "normal", color: e.colors.gray800, textDecorationLine: "underline" }, marginTop8: { marginTop: e.spaces.space8 }, maxWidth: { maxWidth: "80%" }, maxWidthExtraSmall: { maxWidth: "70%" }, positionRelative: { position: "relative" }, productSelector: { marginBottom: e.spaces.space12 }, sectionSpacing: { paddingBottom: e.spaces.space12 }, subtext: { marginTop: e.spaces.space12, marginBottom: e.spaces.space32, alignItems: "center", justifyContent: "center" } }));
        },
        877895: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => f });
            r(136728);
            var a = r(202784),
                o = r(325686),
                i = r(107267),
                n = r(138099),
                s = r(731708),
                c = r(154003),
                l = r(392237),
                d = r(111677),
                u = r.n(d);
            const p = u().a893d602,
                m = u().fce91ab4,
                h = u().a235cb76;
            function f(e) {
                const t = (0, i.useHistory)();
                function r() {
                    t.push("/home");
                }
                return a.createElement(n.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: r, type: "full" }, a.createElement(o.Z, { style: b.content }, a.createElement(s.ZP, { size: "title2", style: b.title, weight: "heavy" }, m), a.createElement(s.ZP, { style: b.subtitle }, h), a.createElement(c.ZP, { onPress: r, size: "xLarge", type: "primaryFilled" }, p)));
            }
            const b = l.default.create((e) => ({ content: { padding: e.spaces.space16, paddingEnd: e.spaces.space48, paddingStart: e.spaces.space48, overflowY: "auto" }, title: { marginBottom: 8 }, subtitle: { color: e.colors.gray700, marginBottom: 28 }, closeButton: { paddingTop: 15 } }));
        },
        334891: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => h });
            r(136728);
            var a = r(202784),
                o = r(325686),
                i = r(138099),
                n = r(731708),
                s = r(154003),
                c = r(392237),
                l = r(111677),
                d = r.n(l);
            const u = d().c3d89aca,
                p = d().e20f6662,
                m = d().a8eea654;
            function h({ history: e }) {
                const t = a.useCallback(() => {
                    e.push("/home");
                }, [e]);
                return a.createElement(i.Z, { allowBackNavigation: !1, enableMaskForDismiss: !1, onMaskClick: t, type: "center" }, a.createElement(o.Z, { style: f.root }, a.createElement(n.ZP, { size: "title2", weight: "heavy" }, p), a.createElement(n.ZP, null, m), a.createElement(s.ZP, { onPress: t, size: "large", type: "primaryFilled" }, u)));
            }
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", gap: e.spaces.space8 } }));
        },
        336629: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => i });
            var a = r(97882),
                o = r(685731);
            const i = ({ annualPriceMonthly: e, includeTax: t, monthlyPriceAnnual: r, percentOff: i, price: n }) => {
                const s = (0, o.aU)(n, t, i),
                    c = e ? s / 12 : r ? 12 * s : s;
                return (0, a.x)({ amount: c, currencyCode: n?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
            };
        },
        862695: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => g, f: () => _ });
            var a = r(202784),
                o = r(325686),
                i = r(731708),
                n = r(392237),
                s = r(111677),
                c = r.n(s),
                l = r(336629);
            const d = c().i57aeafb,
                u = c().ae3e3723,
                p = c().ade4c757,
                m = c().f7798e11,
                h = c().e0b39888,
                f = c().b67c37de,
                b = c().a8363765,
                _ = ({ activeDiscountInfo: e, discountInfo: t, formattedPrice: r, includeTax: a, isFreeTrial: o, isTierSwitching: i, price: n, selectedInterval: s, shouldRemoveExtraStep: c, withAnnualPriceMonthly: d }) => (o ? ("Month" === s ? p({ price: r }) : m({ price: r })) : t || e ? g({ formattedPrice: r, selectedInterval: s, includeDiscountedPrice: "Year" === s && d, discountedFormattedPrice: (0, l.T)({ price: n, includeTax: a, percentOff: i ? e?.promotion_metadata?.percent_off : t?.metadata.percent_off, annualPriceMonthly: !1 }), duration: i ? e?.promotion_metadata?.duration_in_interval : t?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === s && c ? b({ price: r }) : "Month" === s ? h : f),
                g = ({ discountedFormattedPrice: e, duration: t, formattedPrice: r, includeDiscountedPrice: n, includeThenLabel: s, selectedInterval: l }) => {
                    let h;
                    return (h = "Month" === l ? (n ? a.createElement(c().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, c().df3ed1c8({ standardPrice: r }))) : d({ duration: t, standardPrice: r })) : n ? a.createElement(c().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: t ?? "" }, a.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, c().g261b098({ standardPrice: r }))) : u({ duration: t, standardPrice: r })), s && (h = a.createElement(o.Z, null, a.createElement(i.ZP, { style: S.marginBottom }, h), a.createElement(i.ZP, null, "Year" === l ? m({ price: r }) : p({ price: r })))), h;
                },
                S = n.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        879113: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var a = r(202784),
                o = r(476984),
                i = r.n(o),
                n = r(143778),
                s = r(750410),
                c = r(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: i, loadingMessage: n, onRequestRetry: d, render: m, renderFailure: h, retryMessage: f, retryable: b } = this.props;
                    switch (o) {
                        case l:
                            return b ? a.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: f }) : r ? a.createElement(c.m, { failureMessage: r }) : h();
                        case u:
                            return a.createElement(c.J, { "aria-label": e, color: t, loadingMessage: n });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NotABot.f09a117a.js.map

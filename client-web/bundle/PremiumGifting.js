"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumGifting"],
    {
        310456: (e, a, t) => {
            t.d(a, { p: () => r });
            const r = Object.freeze({ Advertising: "Advertising", BlueVerified: "BlueVerified", BlueVerifiedPlus: "BlueVerifiedPlus", Chirps: "Chirps", Coins: "Coins", OneDollar: "OneDollar", OneDollarSubscription: "OneDollarSubscription", PremiumBasic: "PremiumBasic", PremiumGift: "PremiumGift", PremiumPlusGift: "PremiumPlusGift", QuickFreeTrial: "QuickFreeTrial", QuickPromoteBudget: "QuickPromoteBudget", Seeds: "Seeds", Spaces: "Spaces", Subscriptions: "Subscriptions", SuperFollows: "SuperFollows", SuperLikes: "SuperLikes", VerifiedOrganizations: "VerifiedOrganizations", VerifiedOrganizationsBasic: "VerifiedOrganizationsBasic" });
        },
        625661: (e, a, t) => {
            t.d(a, { ZP: () => p });
            var r = t(202784),
                n = t(614983),
                i = t.n(n),
                l = t(325686),
                s = t(370006),
                o = t(786998),
                c = t(929028),
                d = t(386802);
            function u(e, a, t) {
                return e || (!a && t ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            i()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: t, fixed: n, hideBackButton: i, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: g, secondaryBar: h, style: f, subtitle: b, title: _, titleDomId: y, titleIconCell: k, titleIconCellSize: v, withBackground: B, withWideContainer: P } = this.props,
                        { isModal: S } = this.context,
                        F = i ? d : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, a, t) {
                            return e && !(a && t);
                        })(!!B, S, !!h);
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { centerTitle: a, centeredLogo: t, isFullWidth: l, isLarge: c, leftControl: F, middleControl: p, position: u(m, S, n), rightControl: g, style: f, subtitle: b, title: _, titleDomId: y, titleIconCell: k, titleIconCellSize: v, withBackground: C, withWideContainer: P }), h || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        t = c.Z.getBackgroundStyles();
                    return a ? r.createElement(l.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, t) => {
            t.d(a, { Z: () => h, w: () => m });
            var r = t(202784),
                n = t(325686),
                i = t(108362),
                l = t(386802),
                s = t(392237),
                o = t(652904),
                c = t(555079),
                d = t(625661),
                u = t(449067),
                p = t(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: t, backLocation: i, centerTitle: l, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: h, rightControl: f, secondaryBar: b, subtitle: _, title: y } = this.props,
                                { isModal: k } = this.context;
                            return r.createElement(n.Z, { style: k ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, r.createElement(d.ZP, { backButtonType: t || (k ? "close" : "back"), backLocation: i, centerTitle: l, fixed: !k, hideBackButton: s, history: o, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: h, ref: e, rightControl: f, secondaryBar: b, style: [k && g.appBarModal, a], subtitle: _, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: t } = this.context;
                            a && (t ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: t, containerStyle: l, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: m, title: h, withoutBottomBarMobile: f } = this.props,
                        { isModal: b } = this.context,
                        _ = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(o.Z, null, r.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: h }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, b && g.rootModal] }, !b && _, r.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [g.container, b && g.containerModal, l] }, b ? r.createElement(p.Z, { style: g.viewport }, _, t) : t), a ? r.createElement(n.Z, { style: [g.bottomBarModal, !b && !f && g.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: c, isLarge: d }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = l.Z);
            const g = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                h = m;
        },
        847579: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(202784),
                n = t(325686),
                i = t(731708);
            const l = t(392237).default.create((e) => ({ positionRelative: { position: "relative" }, termsFullWidth: { width: "100%" }, termsOfService: { flexDirection: "row", marginHorizontal: "auto", textAlign: "center" }, termsBorder: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, borderWidth: "1px", borderStyle: "solid", borderColor: e.colors.gray500, borderRadius: e.borderRadii.medium } })),
                s = ({ children: e, styleOverrides: a, withoutBorder: t }) => {
                    const { disclaimerFontColor: s, disclaimerFontSize: o } = a ?? {};
                    return r.createElement(n.Z, { style: [l.termsOfService, l.positionRelative, l.termsFullWidth, t ? null : l.termsBorder], testID: "terms_disclaimer" }, r.createElement(i.ZP, { align: "left", color: s || "gray900", size: o || "subtext2" }, e));
                };
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => d });
            var r = t(202784),
                n = t(500002),
                i = t(668214),
                l = t(997174),
                s = t(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: t, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: i, search: l },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (o = !0));
                    const c = n || s;
                    ((c && n !== s) || (!c && t !== i) || r !== l || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: t, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), t(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(o(c));
        },
        97882: (e, a, t) => {
            t.d(a, { T: () => i, x: () => l });
            var r = t(674132),
                n = t.n(r);
            const i = { AED: n().d857e44d, ALL: n().cb87e3db, ARS: n().a9d5ffd1, AUD: n().a0e8371d, BAM: n().gcc50dc9, BDT: n().a6a43585, BGN: n().a0cc8f2d, BHD: n().i31c32c5, BRL: n().i7dc69e9, BYR: n().c14a6c03, CAD: n().jaa3d537, CHF: n().a824080b, CLP: n().d9c0bedb, CNY: n().bf8c0613, COP: n().i8163625, CZK: n().adb53ba1, DKK: n().iabf697d, DZD: n().a1a0555b, EGP: n().f266f3d9, EUR: n().a9a8652b, GBP: n().dbf40761, GHS: n().b0d993d9, GTQ: n().ac1308e1, HKD: n().a7889ab3, HRK: n().c614f5cd, HUF: n().i55d57e3, IDR: n().e4b6002b, ILS: n().d28e983b, INR: n().e8c9232d, IQD: n().c8994ae1, ISK: n().f821c2a5, JPY: n().j348b9c9, KES: n().i6f93b9b, KRW: n().c6150bd5, KWD: n().i8921e09, KZT: n().ef239279, LBP: n().hecdb149, MAD: n().fdd039b7, MKD: n().f30c2c37, MXN: n().d9ea7bff, MYR: n().ea3df4b7, NGN: n().jaac21bb, NOK: n().hb435ced, NZD: n().ce699d81, PEN: n().bc56d3d7, PHP: n().f8561913, PKR: n().g6485d53, PLN: n().ff561cc1, QAR: n().b42011d3, RON: n().a6660bcd, RSD: n().f9b80449, RUB: n().gdee4d5d, SAR: n().h36f2103, SEK: n().a19ad037, SGD: n().g713f699, THB: n().ff2e39af, TND: n().be34316d, TRY: n().aef81b75, TWD: n().fcce70a5, TZS: n().jc9d352f, UAH: n().be1cb8c5, UGX: n().j9371501, USD: n().j7d4397d, VEF: n().d61441dd, VND: n().e2a99e97, ZAR: n().f7ce19ab, ZMW: n().b2a0213f },
                l = ({ amount: e, currencyCode: a = "USD", formatter: t = 1e6, removeTrailingZeros: r = !1, strictAmount: n = !1 }) => {
                    const l = n ? e : parseInt(e, 10) / t,
                        o = i[a]?.(l);
                    return r ? s(o) : o;
                },
                s = (e) => {
                    const a = e?.split(".");
                    return 2 === a?.length && "00" === a?.[1] ? a[0] : e;
                };
        },
        548797: (e, a, t) => {
            t.d(a, { Ld: () => d, gS: () => c, pB: () => s, yv: () => o });
            var r = t(674132),
                n = t.n(r),
                i = t(337394);
            const l = n().b47d123d,
                s = (e) => {
                    const a = e?.prices?.find((e) => e?.charge_interval === i.rv.Year),
                        t = e?.prices?.find((e) => e?.charge_interval === i.rv.Month),
                        r = t ? 12 * t?.amount_local_micro : 0,
                        n = a ? Math.floor(((a.amount_local_micro - r) / r) * -100) : null;
                    return l({ percentage: n });
                },
                o = ({ activeSubscription: e, tier: a }) => {
                    const t = e?.product?.rest_id;
                    if (!t) return "invalid";
                    if (i.v5.premium[t] === a) return "active";
                    switch (i.v5.premium[t]) {
                        case "PremiumBasic":
                            if ("BlueVerified" === a || "BlueVerifiedPlus" === a) return "upgrade";
                            break;
                        case "BlueVerified":
                            if ("PremiumBasic" === a) return "downgrade";
                            if ("BlueVerifiedPlus" === a) return "upgrade";
                            break;
                        case "BlueVerifiedPlus":
                            if ("BlueVerified" === a || "PremiumBasic" === a) return "downgrade";
                            break;
                        default:
                            return "invalid";
                    }
                    return "invalid";
                },
                c = (e, a, t) => {
                    const { status: r } = t,
                        n = Date.now(),
                        i = e?.promotions?.filter((e) => {
                            const t = parseInt(e.ends_at_msec, 10),
                                i = parseInt(e.started_from_msec, 10);
                            if (e.promotion_type === a && t > n) {
                                if ("active" === r) return i < n;
                                if ("pending" === r) return i > n;
                            }
                        });
                    return i?.[0];
                },
                d = (e) => "Twitter" === e.payment_source || "Ads" === e.payment_source;
        },
        685731: (e, a, t) => {
            t.d(a, { Gi: () => b, Mk: () => y, ZV: () => h, aU: () => g, d3: () => _, fS: () => k, pt: () => f });
            t(202784);
            var r = t(674132),
                n = t.n(r),
                i = t(336629),
                l = t(862695),
                s = t(97882),
                o = t(337394),
                c = t(548797);
            const d = n().c6614cc0,
                u = n().f8d3b50a,
                p = n().i2c32253,
                m = n().c41e1023;
            function g(e, a = !0, t) {
                let r = "number" == typeof e?.amount_local_micro ? e.amount_local_micro : 0;
                if (
                    (a &&
                        (r += (function (e) {
                            return "number" == typeof e?.tax_amount_local_micro ? e.tax_amount_local_micro : 0;
                        })(e)),
                    t)
                ) {
                    r -= r * (t / 100);
                }
                return r;
            }
            function h(e) {
                return "number" == typeof e?.tax_amount_local_micro ? u : d;
            }
            const f = (e, a, t) => (Array.isArray(e) ? e.filter((e) => e.charge_interval === t && e.metadata.purchasable).find((e) => (a ? !0 === e.metadata?.seated : !1 === e.metadata?.seated)) : void 0);
            function b(e, a) {
                if (e && a) return a?.find((a) => a?.charge_interval === e);
            }
            function _(e, a = !1, t, r = !1, n = !0) {
                const d = (0, c.gS)(t, "Discount", { status: r ? "pending" : "active" }),
                    u = (0, s.x)({ amount: g(e, a), currencyCode: e?.currency_code?.toUpperCase(), removeTrailingZeros: !0 });
                return d && e.charge_interval ? (0, l.V)({ selectedInterval: e.charge_interval, duration: d.promotion_metadata?.duration_in_interval, discountedFormattedPrice: (0, i.T)({ price: e, percentOff: d.promotion_metadata?.percent_off, includeTax: a, annualPriceMonthly: !1 }), formattedPrice: u, includeDiscountedPrice: !0, includeThenLabel: n }) : e.charge_interval === o.rv.Year ? m({ price: u }) : e.charge_interval === o.rv.Month ? p({ price: u }) : "";
            }
            const y = (e) => {
                    const a = e.subscription_promotions?.find((e) => !!e.metadata.free_trial_days);
                    return a;
                },
                k = (e, a, t) => {
                    if (!a || t) return null;
                    const r = e.subscription_promotions?.find((e) => !(!e.metadata.duration_in_interval || !e.metadata.percent_off || !e.ends_at_msec || e.metadata.free_trial_days));
                    return r;
                };
        },
        901658: (e, a, t) => {
            t.r(a), t.d(a, { default: () => y });
            var r = t(202784),
                n = t(107267),
                i = t(138099),
                l = t(731708),
                s = t(154003),
                o = t(392237),
                c = t(674132),
                d = t.n(c),
                u = t(187669),
                p = t(293115),
                m = t(725405);
            const g = { page: "premium_gifting", section: "failure" },
                h = d().a893d602,
                f = d().ia2eb0c0,
                b = d().ef4602ec,
                _ = ({ history: e }) => {
                    const a = (0, m.Z)(),
                        t = (0, n.useParams)().screenName;
                    (0, u.q)(() => {
                        a.scribePageImpression();
                    });
                    const o = r.useCallback(() => e.replace(t ? `/${t}` : "/home"), [e, t]);
                    return r.createElement(i.Z, { enableMaskForDismiss: !0, onMaskClick: o, style: k.root, type: "center" }, r.createElement(l.ZP, { size: "title4", weight: "bold" }, f), r.createElement(l.ZP, { style: k.spacing }, b), r.createElement(s.ZP, { onPress: o, style: k.button, type: "primaryFilled" }, h));
                },
                y = (e) => r.createElement(p.nO, { namespace: g }, r.createElement(_, e)),
                k = o.default.create((e) => ({ button: { marginTop: e.spaces.space24, width: "100%" }, spacing: { marginTop: e.spaces.space8 }, root: { padding: e.spaces.space32, minHeight: 200 } }));
        },
        600388: (e, a, t) => {
            t.r(a), t.d(a, { default: () => y });
            var r = t(202784),
                n = t(325686),
                i = t(107267),
                l = t(138099),
                s = t(731708),
                o = t(154003),
                c = t(392237),
                d = t(674132),
                u = t.n(d),
                p = t(187669),
                m = t(293115),
                g = t(725405);
            const h = { page: "premium_gifting", section: "success" },
                f = u().a893d602,
                b = u().c65dda96,
                _ = ({ history: e }) => {
                    const a = (0, g.Z)(),
                        t = (0, i.useParams)().screenName;
                    (0, p.q)(() => {
                        a.scribePageImpression();
                    });
                    const c = r.useCallback(() => e.replace(t ? `/${t}` : "/home"), [e, t]);
                    return r.createElement(l.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: c, style: k.root, type: "center" }, r.createElement(n.Z, null, r.createElement(s.ZP, { size: "title4", style: k.marginBottom, weight: "bold" }, b)), r.createElement(o.ZP, { onPress: c, style: k.button, type: "primaryFilled" }, f));
                },
                y = (e) => r.createElement(m.nO, { namespace: h }, r.createElement(_, e)),
                k = c.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", justifyContent: "space-between" }, marginBottom: { marginBottom: e.spaces.space8 }, spacingRight: { marginEnd: e.spaces.space8 }, button: { marginTop: e.spaces.space24, width: "100%" } }));
        },
        738235: (e, a, t) => {
            t.r(a), t.d(a, { PremiumGiftingQueryRequest: () => ce, PremiumGiftingScreen: () => de, default: () => ge });
            var r,
                n,
                i,
                l,
                s,
                o,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PremiumGiftingQuery",
                        selections: [
                            (n = {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "TwitterBlueMarketingPageConfig",
                                kind: "LinkedField",
                                name: "blue_marketing_page_config",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "TwitterBlueMarketingPageProduct",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'blue_marketing_page_config(s:"4721")',
                            }),
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "UserAvatar_user" }, { args: null, kind: "FragmentSpread", name: "UserName_user" }, (o = { alias: "premium_gifting_eligible", args: [{ kind: "Literal", name: "product_type", value: "BlueVerifiedPlus" }], kind: "ScalarField", name: "can_receive_gift", storageKey: 'can_receive_gift(product_type:"BlueVerifiedPlus")' })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: r,
                        kind: "Operation",
                        name: "PremiumGiftingQuery",
                        selections: [
                            n,
                            {
                                alias: "user",
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            l,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    s,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    {
                                                        alias: "affiliates_highlighted_label",
                                                        args: null,
                                                        concreteType: "HighlightedUserLabelResponse",
                                                        kind: "LinkedField",
                                                        name: "identity_profile_labels_highlighted_label",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "HighlightedUserLabel",
                                                                kind: "LinkedField",
                                                                name: "label",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [c], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    o,
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    d,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "1l69l_17caIoKHypMFrLlg", metadata: {}, name: "PremiumGiftingQuery", operationKind: "query", text: null },
                };
            u.hash = "caf409d10c6b5285a1c3838176d735ad";
            const p = u;
            var m = t(202784),
                g = t(325686),
                h = (t(585488), t(712696)),
                f = t.n(h),
                b = t(107267),
                _ = t(708852),
                y = t(154003),
                k = t(167630),
                v = t(731708),
                B = t(466818),
                P = t(392237),
                S = t(674132),
                F = t.n(S),
                C = t(310456),
                Z = t(615656),
                T = t(980407),
                E = t(736063),
                x = t(952793),
                L = t(782642),
                w = t(97882),
                D = t(782826),
                K = t(337394),
                I = (function () {
                    var e = [{ defaultValue: null, kind: "LocalArgument", name: "stripeId" }],
                        a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "rest_id", variableName: "stripeId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "WebSubscriptionProductDetails",
                                kind: "LinkedField",
                                name: "web_subscription_product_details_by_rest_id",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceDetail",
                                        kind: "LinkedField",
                                        name: "prices",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "external_price_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "price_type", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "charge_interval", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount_local_micro", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "WebSubscriptionPromotion",
                                                kind: "LinkedField",
                                                name: "subscription_promotions",
                                                plural: !0,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "WebSubscriptionPromotionMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "free_trial_days", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "duration_in_interval", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percent_off", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "ends_at_msec", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ];
                    return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useSubscriptionProductDetailsByRestIdQuery", selections: a, type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useSubscriptionProductDetailsByRestIdQuery", selections: a }, params: { id: "ZwKiA4x86uAus4775sttnA", metadata: { features: ["subscriptions_marketing_page_fetch_promotions"] }, name: "useSubscriptionProductDetailsByRestIdQuery", operationKind: "query", text: null } };
                })();
            I.hash = "5e491b53c0d16f901c7f874cd6b98250";
            const R = I,
                M = (e) => f()(R, { stripeId: e });
            var V = t(685731),
                A = t(293115),
                N = t(725516),
                z = t(412876),
                H = t(553660),
                O = t(615027),
                U = t(688715),
                W = t(847579);
            const G = (0, U.ju)("https://legal.x.com/purchaser-terms"),
                $ = (0, U.ju)("https://help.x.com/using-x/x-premium/gifting"),
                Q = () => m.createElement(W.Z, { withoutBorder: !0 }, m.createElement(F().I18NFormatMessage, { $i18n: "h7f3e309" }, m.createElement(v.ZP, { link: G }, F().f3fddc98), m.createElement(v.ZP, { link: $ }, F().cff9c889)));
            t(571372);
            var j = (function () {
                var e = { defaultValue: null, kind: "LocalArgument", name: "cancel_url" },
                    a = { defaultValue: null, kind: "LocalArgument", name: "external_product_id" },
                    t = { defaultValue: null, kind: "LocalArgument", name: "gift_recipient" },
                    r = { defaultValue: null, kind: "LocalArgument", name: "success_url" },
                    n = [
                        {
                            alias: null,
                            args: [
                                { kind: "Variable", name: "cancel_url", variableName: "cancel_url" },
                                { kind: "Variable", name: "external_product_id", variableName: "external_product_id" },
                                { kind: "Variable", name: "gift_recipient", variableName: "gift_recipient" },
                                { kind: "Literal", name: "s", value: "4721" },
                                { kind: "Variable", name: "success_url", variableName: "success_url" },
                            ],
                            concreteType: "WebOneTimePurchaseCheckoutSession",
                            kind: "LinkedField",
                            name: "onetimepurchase_gift",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "session_id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "session_status", storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: [e, a, t, r], kind: "Fragment", metadata: null, name: "useOneTimePurchaseGiftMutation", selections: n, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [e, a, r, t], kind: "Operation", name: "useOneTimePurchaseGiftMutation", selections: n }, params: { id: "GqTVJ4S1526tLkxj69xIZw", metadata: {}, name: "useOneTimePurchaseGiftMutation", operationKind: "mutation", text: null } };
            })();
            j.hash = "baa6bdf2db7356a23aacf7962307c0dc";
            const q = j;
            var Y = t(351743),
                J = t.n(Y);
            const X = q,
                ee = ({ cancelUrl: e, successUrl: a }) => {
                    const [t, r] = J()(X);
                    return [
                        m.useCallback(
                            ({ productId: r, receiverId: n }) =>
                                new Promise((i, l) => {
                                    t({
                                        variables: { cancel_url: e, external_product_id: r, gift_recipient: n, success_url: a },
                                        onCompleted: (e, a) => {
                                            const t = e.onetimepurchase_gift?.session_url;
                                            t ? i(t) : l(Error("expected session_url"));
                                        },
                                        onError: l,
                                    });
                                }),
                            [t, e, a],
                        ),
                        r,
                    ];
                },
                ae = () => ((0, x.hC)("subscriptions_stripe_testing") ? K.Qo : K.eq),
                te = F().haad225c,
                re = F().b84f6df1,
                ne = F().cfcac293,
                ie = F().d7a73450,
                le = { page: "premium_gifting" },
                se = F().ef4602ec,
                oe = F().hbd2c24e,
                ce = p,
                de = (e) => {
                    const a = (0, b.useParams)().screenName || "",
                        t = (0, _.D2)(),
                        r = (0, N.z)(),
                        n = (0, b.useHistory)(),
                        i = ae(),
                        [l, s] = m.useState("BlueVerifiedPlus"),
                        [o, c] = m.useState(!1),
                        d = f()(ce, { screenName: a }, { fetchPolicy: "network-only" }),
                        { origin: u } = D.ZP.get(),
                        p = (0, L.p)(),
                        [h, P] = ee({ successUrl: `${u}/${a}/gift-premium/success`, cancelUrl: `${u}/${a}/gift-premium` }),
                        S = i[l],
                        E = M(S).web_subscription_product_details_by_rest_id,
                        I = m.useMemo(() => E?.prices?.find((e) => "OneTime" === e.price_type), [E?.prices]),
                        R = (0, x.hC)("subscriptions_marketing_page_include_tax_enabled"),
                        A = (0, x.hC)("subscriptions_gifting_premium_intro_copy_enabled"),
                        U = I ? (0, w.x)({ amount: (0, V.aU)(I, R), currencyCode: I.currency_code.toUpperCase(), removeTrailingZeros: !0 }) : null,
                        W = m.useCallback(() => {
                            r.scribe({ component: "dismiss_button", action: "click" }), n.goBack();
                        }, [r, n]),
                        G = d?.user?.result,
                        $ = G?.rest_id,
                        j = m.useCallback(() => {
                            $ &&
                                S &&
                                (r.scribe({ component: "purchase_button", action: "click" }),
                                c(!0),
                                h({ receiverId: $, productId: S })
                                    .then((e) => D.ZP.navigateTo(e))
                                    .catch((e) => {
                                        const a = e?.errors?.[0]?.code,
                                            t = a === Z.ZP.GenericAccessDenied ? oe : se;
                                        p({ text: t, withClearButton: !0, withAutoDismiss: !0 }), c(!1);
                                    }));
                        }, [p, h, $, S, r]),
                        q = t ? me.paddingWide : me.paddingNarrow,
                        Y = m.useMemo(() => {
                            const e = o || P,
                                a = !l || e;
                            return m.createElement(g.Z, { style: [me.footer, q] }, m.createElement(y.ZP, { disabled: a, onPress: j, type: "primaryFilled" }, e ? m.createElement(k.Z, null) : ne({ price: U })), m.createElement(Q, null));
                        }, [U, j, P, o, q, l]),
                        J = m.useCallback((e) => s(C.p[e]), [s]),
                        X = d?.blue_marketing_page_config?.products?.map(({ product_category: e, title: a }) => (e && a && "PremiumBasic" !== e ? { label: a, value: e } : null)).filter(Boolean),
                        le = K.St[l];
                    return X && a && G && U && G?.premium_gifting_eligible ? m.createElement(T.Z, { backButtonType: "close", bottomBar: Y, history: n, onBackClick: W }, m.createElement(g.Z, { style: [me.root, q] }, m.createElement(g.Z, { style: me.content }, m.createElement(v.ZP, { align: "center", size: "title2", weight: "heavy" }, A ? re({ percentage: 40 }) : te), "User" === G.__typename ? m.createElement(g.Z, { style: me.alignCenter }, m.createElement(z.Z, { size: "custom", style: me.userAvatar, user: G, withLink: !1 }), m.createElement(H.Z, { style: me.alignCenter, user: G, withLink: !1, withStackedLayout: !0 })) : null, m.createElement(B.ZP, { label: ie, onChange: J, options: X, testID: "tier", value: l }), m.createElement(v.ZP, null, m.createElement(F().I18NFormatMessage, { $i18n: "ccd45e5f", tier: le, screenName: a, price: U }))))) : m.createElement(O.Z, { to: "/home" });
                },
                ue = { context: "PremiumGifting" },
                pe = (e) => m.createElement(A.nO, { namespace: le }, m.createElement(E.H, { errorConfig: ue }, m.createElement(de, e))),
                me = P.default.create((e) => ({ root: { marginBottom: e.spaces.space16, gap: e.spaces.space16 }, paddingWide: { paddingHorizontal: e.spaces.space72 }, paddingNarrow: { paddingHorizontal: e.spaces.space32 }, content: { flexDirection: "column", gap: e.spaces.space20 }, footer: { marginVertical: e.spaces.space16, gap: e.spaces.space8 }, alignCenter: { alignItems: "center", gap: e.spaces.space8 }, userAvatar: { width: "25%", minWidth: e.spaces.space48, height: "auto" } })),
                ge = m.memo(pe);
        },
        336629: (e, a, t) => {
            t.d(a, { T: () => i });
            var r = t(97882),
                n = t(685731);
            const i = ({ annualPriceMonthly: e, includeTax: a, percentOff: t, price: i }) => (0, r.x)({ amount: (0, n.aU)(i, a, t) / (e ? 12 : 1), currencyCode: i?.currency_code.toUpperCase(), removeTrailingZeros: !0 });
        },
        862695: (e, a, t) => {
            t.d(a, { V: () => _, f: () => b });
            var r = t(202784),
                n = t(325686),
                i = t(731708),
                l = t(392237),
                s = t(674132),
                o = t.n(s),
                c = t(336629);
            const d = o().i57aeafb,
                u = o().ae3e3723,
                p = o().ade4c757,
                m = o().f7798e11,
                g = o().e0b39888,
                h = o().b67c37de,
                f = o().a8363765,
                b = ({ activeDiscountInfo: e, discountInfo: a, formattedPrice: t, includeTax: r, isFreeTrial: n, isTierSwitching: i, price: l, selectedInterval: s, shouldRemoveExtraStep: o, withAnnualPriceMonthly: d }) => (n ? ("Month" === s ? p({ price: t }) : m({ price: t })) : a || e ? _({ formattedPrice: t, selectedInterval: s, includeDiscountedPrice: "Year" === s && d, discountedFormattedPrice: (0, c.T)({ price: l, includeTax: r, percentOff: i ? e?.promotion_metadata?.percent_off : a?.metadata.percent_off, annualPriceMonthly: !1 }), duration: i ? e?.promotion_metadata?.duration_in_interval : a?.metadata.duration_in_interval, includeThenLabel: !1 }) : d && "Year" === s && o ? f({ price: t }) : "Month" === s ? g : h),
                _ = ({ discountedFormattedPrice: e, duration: a, formattedPrice: t, includeDiscountedPrice: l, includeThenLabel: s, selectedInterval: c }) => {
                    let g;
                    return (g = "Month" === c ? (l ? r.createElement(o().I18NFormatMessage, { $i18n: "a629c16f", discountedPrice: e ?? "", duration: a ?? "" }, r.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, o().df3ed1c8({ standardPrice: t }))) : d({ duration: a, standardPrice: t })) : l ? r.createElement(o().I18NFormatMessage, { $i18n: "c142e70f", discountedPrice: e ?? "", duration: a ?? "" }, r.createElement(i.ZP, { style: { textDecorationLine: "line-through" } }, o().g261b098({ standardPrice: t }))) : u({ duration: a, standardPrice: t })), s && (g = r.createElement(n.Z, null, r.createElement(i.ZP, { style: y.marginBottom }, g), r.createElement(i.ZP, null, "Year" === c ? m({ price: t }) : p({ price: t })))), g;
                },
                y = l.default.create((e) => ({ marginBottom: { marginBottom: e.spaces.space8 } }));
        },
        466818: (e, a, t) => {
            t.d(a, { ZP: () => b });
            var r = t(202784),
                n = t(325686),
                i = t(487552),
                l = t(302752),
                s = t(183806),
                o = t(731708),
                c = t(950822),
                d = t(224162),
                u = t(392237);
            const p = r.forwardRef((e, a) => (0, c.Z)("select", { ...e, ref: a })),
                m = (e) => (0, c.Z)("option", e);
            let g = 1;
            class h extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: a, withEmptyOption: t } = this.props,
                                { selectedIndex: r, value: n } = e.target;
                            a && a(n, r - (t ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: a } = this.props;
                            this.setState({ isFocused: !1 }), a && a();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: a } = this.props;
                            this.setState({ isFocused: !0 }), a && a();
                        }),
                        (this._id = `SELECTOR_${g}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (g += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: a, errorText: t, hasError: c, helperText: g, options: h, style: b, testID: _, value: y, withEmptyOption: k } = this.props,
                        { isFocused: v } = this.state,
                        B = o.ZP.getLanguage(),
                        P = void 0 === c ? !!t : c,
                        S = new Set();
                    t && S.add(this._errorID), e && S.add(e), g && S.add(this._helperID);
                    const F = S.size ? [...S].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === B ? u.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(B) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return r.createElement(
                                n.Z,
                                { style: [s.Z.border, f.container, a && s.Z.disabled, v && s.Z.focusedBorderValid, P && s.Z.invalidBorderColor, v && P && s.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": F, "aria-invalid": P, "aria-labelledby": this._labelID, disabled: a, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [f.select, { fontFamily: o }, a && s.Z.disabled], testID: _ || "", value: y },
                                    k ? r.createElement(m, { disabled: !0, style: f.option, value: "" }) : null,
                                    h.map((e) => {
                                        const { disabled: a, label: t, value: n } = e;
                                        return r.createElement(m, { disabled: a, key: `${t}-${n}`, style: f.option, value: n }, t);
                                    }),
                                ),
                                r.createElement(i.default, { style: [f.dropdownCaret, v && s.Z.validColor, !(!c && !t) && s.Z.invalidColor] }),
                            );
                        }),
                        g ? this._renderHelperText() : null,
                        P && t ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: a, label: t } = this.props,
                        { isFocused: n } = this.state;
                    return r.createElement(o.ZP, { color: a || e ? "red500" : n ? "primary" : "gray700", id: this._labelID, role: "label", style: f.label }, t);
                }
                _renderHelperText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "gray700", id: this._helperID, style: f.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(n.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "red500", id: this._errorID, style: f.helperText }, this.props.errorText));
                }
            }
            h.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const f = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = h;
        },
        183806: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = t(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        748138: (e, a, t) => {
            t.r(a), t.d(a, { default: () => o });
            var r = t(202784),
                n = t(890601),
                i = t(783427),
                l = t(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumGifting.3287662a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterCoinsManagement"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => p });
            var n = a(202784),
                r = a(614983),
                l = a.n(r),
                i = a(325686),
                o = a(370006),
                s = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: l, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: g, secondaryBar: b, style: y, subtitle: h, title: k, titleDomId: f, titleIconCell: C, titleIconCellSize: _, withBackground: w, withWideContainer: E } = this.props,
                        { isModal: T } = this.context,
                        v = l ? d : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!w, T, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: i, isLarge: c, leftControl: v, middleControl: p, position: u(m, T, r), rightControl: g, style: y, subtitle: h, title: k, titleDomId: f, titleIconCell: C, titleIconCellSize: _, withBackground: Z, withWideContainer: E }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => b, w: () => m });
            var n = a(202784),
                r = a(325686),
                l = a(108362),
                i = a(386802),
                o = a(392237),
                s = a(652904),
                c = a(555079),
                d = a(625661),
                u = a(449067),
                p = a(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: l, centerTitle: i, hideBackButton: o, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, rightControl: y, secondaryBar: h, subtitle: k, title: f } = this.props,
                                { isModal: C } = this.context;
                            return n.createElement(r.Z, { style: C ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(d.ZP, { backButtonType: a || (C ? "close" : "back"), backLocation: l, centerTitle: i, fixed: !C, hideBackButton: o, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: y, secondaryBar: h, style: [C && g.appBarModal, t], subtitle: k, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: i, documentTitle: o, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: y } = this.props,
                        { isModal: h } = this.context,
                        k = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: o, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, h && g.rootModal] }, !h && k, n.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [g.container, h && g.containerModal, i] }, h ? n.createElement(p.Z, { style: g.viewport }, k, a) : a), t ? n.createElement(r.Z, { style: [g.bottomBarModal, !h && !y && g.bottomBarMobile] }, n.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const g = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        879101: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(688715),
                l = a(731708),
                i = a(392237),
                o = a(111677),
                s = a.n(o);
            const c = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                d = s().bc42db1c,
                u = i.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                p = ({ recurring: e, style: t }) => n.createElement(l.ZP, { color: "gray700", style: t }, n.createElement(s().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(l.ZP, { color: "plum500", link: c }, s().f1561b06)), e ? n.createElement(l.ZP, { style: u.recurring }, d) : null);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(500002),
                l = a(668214),
                i = a(997174),
                o = a(118823);
            const s = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: i },
                            locationKey: o,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = r || o;
                    ((c && r !== o) || (!c && a !== l) || n !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        301410: (e, t, a) => {
            a.d(t, { i: () => g.ZP, z: () => k });
            var n = a(202784),
                r = a(928123),
                l = a.n(r),
                i = a(72845),
                o = a.n(i),
                s = a(57074),
                c = a.n(s),
                d = a(516951),
                u = a(88656),
                p = a(71620),
                m = a(163889),
                g = a(312771);
            const b = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: d.Z });
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const h = ({ query: e, queryRef: t, render: a }) => {
                    const n = l()(e, t);
                    return a({ fetchStatus: g.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                k = (e, t) =>
                    function ({ fetchPolicy: a = "store-or-network", render: r, variables: l }) {
                        const [i, s] = o()(e),
                            d = (0, p.n7)(t.errorConfig.context),
                            u = c()(l),
                            m = n.useCallback(() => {
                                s(u, { fetchPolicy: "network-only" });
                            }, [s, u]);
                        return (
                            n.useLayoutEffect(() => {
                                s(u, { fetchPolicy: a });
                            }, [a, s, u]),
                            i
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(b, { render: r }) },
                                      n.createElement(y, { errorHandler: d(t.errorConfig.options || {}), key: i.fetchKey, retry: m }, (t, a) => (t ? r({ fetchStatus: g.ZP.FAILED, error: t, data: null, retry: a }) : n.createElement(h, { query: e, queryRef: i, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        782642: (e, t, a) => {
            a.d(t, { p: () => i });
            var n = a(202784),
                r = a(125363),
                l = a(601576);
            const i = () => {
                    const e = (0, r.I0)(),
                        t = o(),
                        a = n.useRef(null);
                    return (
                        n.useEffect(() => () => clearTimeout(a.current), [t]),
                        n.useCallback(
                            (n) => {
                                e((0, l.fz)(n)), (a.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                o = () => {
                    const e = (0, r.I0)();
                    return n.useCallback(() => e((0, l.RS)()), [e]);
                };
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => l, x: () => i });
            var n = a(111677),
                r = a.n(n);
            const l = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: a = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const i = r ? e : parseInt(e, 10) / a,
                        s = l[t]?.(i);
                    return n ? o(s) : s;
                },
                o = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        264226: (e, t, a) => {
            a.d(t, { XB: () => y, ZP: () => k });
            var n,
                r,
                l,
                i,
                o,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "TwitterCoinsManagementCoinBalanceQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: null,
                                    args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                    concreteType: "Viewer",
                                    kind: "LinkedField",
                                    name: "viewer_v2",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "RequiredField",
                                            field: {
                                                alias: null,
                                                args: (r = [{ kind: "Literal", name: "balance_type", value: "Coins" }]),
                                                concreteType: "AccountBalance",
                                                kind: "LinkedField",
                                                name: "account_balance",
                                                plural: !1,
                                                selections: [
                                                    { kind: "RequiredField", field: (l = { alias: null, args: null, kind: "ScalarField", name: "balance_type", storageKey: null }), action: "THROW" },
                                                    { kind: "RequiredField", field: (i = { alias: null, args: null, kind: "ScalarField", name: "at_limit", storageKey: null }), action: "THROW" },
                                                    { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null }), action: "THROW" },
                                                ],
                                                storageKey: 'account_balance(balance_type:"Coins")',
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "TwitterCoinsManagementCoinBalanceQuery", selections: [{ alias: null, args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: r, concreteType: "AccountBalance", kind: "LinkedField", name: "account_balance", plural: !1, selections: [l, i, o], storageKey: 'account_balance(balance_type:"Coins")' }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "7UIOQwnGlrNqaLd16fTwYg", metadata: {}, name: "TwitterCoinsManagementCoinBalanceQuery", operationKind: "query", text: null },
                };
            s.hash = "a1812c9b3762694b980ae7c261e82e8e";
            const c = s;
            var d = a(202784),
                u = (a(585488), a(868634)),
                p = a(731708),
                m = a(392237),
                g = a(856151);
            const b = c,
                y = (0, a(301410).z)(b, { errorConfig: { context: "TWITTER_COINS_MANAGEMENT_COIN_BALANCE_CONTEXT" } }),
                h = m.default.create((e) => ({ leftSpace: { marginStart: e.spaces.space4 }, balance: { borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12 } })),
                k = ({ coinBalance: e }) => d.createElement(u.ZP, { background: "gray50", style: h.balance }, d.createElement(g.default, null), d.createElement(p.ZP, { color: "gray1100", style: h.leftSpace }, e));
        },
        310248: (e, t, a) => {
            a.r(t), a.d(t, { default: () => b });
            var n = a(202784),
                r = a(138099),
                l = a(731708),
                i = a(154003),
                o = a(392237),
                s = a(111677),
                c = a.n(s),
                d = a(293115);
            const u = { page: "coin_purchase_failure" },
                p = c().a893d602,
                m = c().ia2eb0c0,
                g = c().a0b4541c,
                b = ({ history: e }) => {
                    const t = n.useCallback(() => e.replace("/i/coins"), [e]);
                    return n.createElement(d.nO, { namespace: u }, n.createElement(r.Z, { enableMaskForDismiss: !0, onMaskClick: t, style: y.root, type: "center" }, n.createElement(l.ZP, { size: "title4", weight: "bold" }, m), n.createElement(l.ZP, { style: y.spacing }, g), n.createElement(i.ZP, { onPress: t, style: y.button, type: "primaryFilled" }, p)));
                },
                y = o.default.create((e) => ({ button: { marginTop: e.spaces.space24, width: "100%" }, spacing: { marginTop: e.spaces.space8 }, root: { padding: e.spaces.space32, minHeight: 200 } }));
        },
        562581: (e, t, a) => {
            a.r(t), a.d(t, { default: () => _ });
            var n = a(202784),
                r = a(360917),
                l = a.n(r),
                i = a(325686),
                o = a(731708),
                s = a(167630),
                c = a(138099),
                d = a(154003),
                u = a(392237),
                p = a(111677),
                m = a.n(p),
                g = a(293115),
                b = a(312771),
                y = a(264226);
            const h = { page: "coin_purchase_success" },
                k = m().a893d602,
                f = m().fe93ed4a,
                C = m().bcb90375,
                _ = ({ history: e }) => {
                    const t = n.useCallback(() => e.replace("/home"), [e]),
                        a = n.useCallback(({ data: e, fetchStatus: t, retry: a }) => {
                            if (t === b.ZP.LOADED) {
                                const t = e?.viewer_v2?.account_balance.amount;
                                return n.createElement(o.ZP, { style: w.spacingRight }, C({ balance: t }));
                            }
                            return n.createElement(s.Z, null);
                        }, []);
                    return n.createElement(g.nO, { namespace: h }, n.createElement(c.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: t, style: w.root, type: "center" }, n.createElement(i.Z, null, n.createElement(o.ZP, { size: "title4", style: w.marginBottom, weight: "bold" }, f), n.createElement(y.XB, { render: a, variables: l() })), n.createElement(d.ZP, { onPress: t, style: w.button, type: "primaryFilled" }, k)));
                },
                w = u.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", justifyContent: "space-between" }, marginBottom: { marginBottom: e.spaces.space8 }, spacingRight: { marginEnd: e.spaces.space8 }, button: { marginTop: e.spaces.space24, width: "100%" } }));
        },
        559846: (e, t, a) => {
            a.r(t), a.d(t, { TwitterCoinsManagementCoinPackQueryRequest: () => re, TwitterCoinsManagementScreen: () => ie, default: () => se });
            var n,
                r,
                l,
                i,
                o,
                s,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "countryCode" }), (r = { defaultValue: null, kind: "LocalArgument", name: "environment" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TwitterCoinsManagementCoinPackQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: null,
                                    args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
                                    concreteType: "Viewer",
                                    kind: "LinkedField",
                                    name: "viewer_v2",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "RequiredField",
                                            field: {
                                                alias: null,
                                                args: (i = [
                                                    { kind: "Literal", name: "category", value: "Coins" },
                                                    { kind: "Variable", name: "environment", variableName: "environment" },
                                                    { kind: "Literal", name: "platform", value: "StripeStore" },
                                                    { kind: "Variable", name: "requested_country_code", variableName: "countryCode" },
                                                ]),
                                                concreteType: "InAppPurchaseProductsSlice",
                                                kind: "LinkedField",
                                                name: "in_app_purchase_products_slice",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        kind: "RequiredField",
                                                        field: {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "InAppPurchaseProductSliceItem",
                                                            kind: "LinkedField",
                                                            name: "items",
                                                            plural: !0,
                                                            selections: [
                                                                { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "external_identifier", storageKey: null }), action: "THROW" },
                                                                {
                                                                    kind: "RequiredField",
                                                                    field: {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "metadata",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (s = {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "coin_value", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "thumbnail_url", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "bonus_coin_value", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "label_keys", storageKey: null },
                                                                                ],
                                                                                type: "CoinsMetadata",
                                                                                abstractKey: null,
                                                                            }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    action: "THROW",
                                                                },
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "WebSubscriptionProductDetails",
                                                                    kind: "LinkedField",
                                                                    name: "external_product",
                                                                    plural: !1,
                                                                    selections: [
                                                                        (c = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "PriceDetail",
                                                                            kind: "LinkedField",
                                                                            name: "prices",
                                                                            plural: !0,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        }),
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                    },
                                                    (d = { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }], storageKey: null }),
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [r, n], kind: "Operation", name: "TwitterCoinsManagementCoinPackQuery", selections: [{ alias: null, args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: i, concreteType: "InAppPurchaseProductsSlice", kind: "LinkedField", name: "in_app_purchase_products_slice", plural: !1, selections: [{ alias: null, args: null, concreteType: "InAppPurchaseProductSliceItem", kind: "LinkedField", name: "items", plural: !0, selections: [o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }, { alias: null, args: null, concreteType: "WebSubscriptionProductDetails", kind: "LinkedField", name: "external_product", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "TtPtRW7yaLbnwCFJANYNFQ", metadata: {}, name: "TwitterCoinsManagementCoinPackQuery", operationKind: "query", text: null },
                };
            u.hash = "73f4c41e8465037ccde4697256689d91";
            const p = u;
            var m = a(202784),
                g = a(360917),
                b = a.n(g),
                y = a(325686),
                h = (a(585488), a(731708)),
                k = a(154003),
                f = a(167630),
                C = a(750410),
                _ = a(992942),
                w = a(782947),
                E = a(40610),
                T = a(392237),
                v = a(111677),
                Z = a.n(v);
            const B = Object.freeze({ Beta: "Beta", Live: "Live", Sandbox: "Sandbox", Test: "Test" });
            var x = a(980407),
                P = a(879101),
                S = a(443781),
                L = a(301410),
                F = a(782642),
                R = a(97882),
                D = a(782826),
                I = a(293115),
                K = a(725516),
                M = a(312771),
                A = a(668214),
                W = a(390387);
            const N = (0, A.Z)().propsFromState(() => ({ currentCountry: W.GG }));
            var z = a(264226),
                H =
                    (a(571372),
                    (function () {
                        var e = [
                                { defaultValue: null, kind: "LocalArgument", name: "cancel_url" },
                                { defaultValue: null, kind: "LocalArgument", name: "external_product_id" },
                                { defaultValue: null, kind: "LocalArgument", name: "success_url" },
                            ],
                            t = [
                                {
                                    alias: null,
                                    args: [
                                        { kind: "Variable", name: "cancel_url", variableName: "cancel_url" },
                                        { kind: "Variable", name: "external_product_id", variableName: "external_product_id" },
                                        { kind: "Literal", name: "s", value: "4721" },
                                        { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    ],
                                    concreteType: "WebOneTimePurchaseCheckoutSession",
                                    kind: "LinkedField",
                                    name: "onetimepurchasecheckoutsession_create",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "session_id", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "session_status", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ];
                        return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useCoinPurchaseSessionUrlMutation", selections: t, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useCoinPurchaseSessionUrlMutation", selections: t }, params: { id: "QP5WVTrpvWikhlKybPX5jQ", metadata: {}, name: "useCoinPurchaseSessionUrlMutation", operationKind: "mutation", text: null } };
                    })());
            H.hash = "7daebd17bb1245b0e462caffc307fe76";
            const O = H;
            var V = a(351743),
                q = a.n(V);
            const U = O,
                G = ({ cancelUrl: e, successUrl: t }) => {
                    const [a, n] = q()(U);
                    return [
                        m.useCallback(
                            (n) =>
                                new Promise((r, l) => {
                                    a({
                                        variables: { cancel_url: e, external_product_id: n, success_url: t },
                                        onCompleted: (e, t) => {
                                            const a = e.onetimepurchasecheckoutsession_create?.session_url;
                                            if (!a) return l(Error("expected session_url"));
                                            r(a);
                                        },
                                        onError: l,
                                    });
                                }),
                            [a, e, t],
                        ),
                        n,
                    ];
                },
                j = Z().fbb7764b,
                Q = Z().j087774e,
                X = Z().bb55752e,
                Y = Z().a0b4541c,
                $ = Z().ef4602ec,
                J = Z().ea7ce65f,
                ee = Z().e557f9d2,
                te = { bestValue: { pillText: Z().f89dfa74, pillType: "bestValue" }, mostPopular: { pillText: Z().e2beba5e, pillType: "mostPopular" } },
                ae = Z().gafeeb96,
                ne = { page: "twitter_coins" },
                re = p,
                le = (0, L.z)(re, { errorConfig: { context: "TWITTER_COINS_MANAGEMENT_CONTEXT" } }),
                ie = (e) => {
                    const { featureSwitches: t } = m.useContext(S.rC),
                        { currentCountry: a, history: n } = e,
                        r = (0, K.z)(),
                        [l, i] = m.useState(""),
                        [o, s] = m.useState(!1),
                        { origin: c } = D.ZP.get(),
                        d = t.isTrue("tweet_awards_web_coin_purchase_sandbox_enabled"),
                        u = m.useMemo(() => ({ environment: d ? B.Sandbox : B.Live, countryCode: a || "US" }), [d, a]),
                        p = (0, F.p)(),
                        [g, T] = G({ successUrl: `${c}/i/coins/success`, cancelUrl: `${c}/i/coins/failure` }),
                        v = m.useCallback(() => {
                            r.scribe({ element: "twitter_coins", component: "dismiss_button", action: "click" }), n.goBack();
                        }, [r, n]),
                        Z = m.useCallback((e) => m.createElement(y.Z, { style: oe.header }, m.createElement(h.ZP, { size: "title4", weight: "bold" }, Q), m.createElement(z.ZP, { coinBalance: e })), []),
                        L = m.useCallback(() => {
                            s(!0),
                                g(l)
                                    .then((e) => D.ZP.navigateTo(e))
                                    .catch(() => {
                                        p({ text: $, withClearButton: !0, withAutoDismiss: !0 }), s(!1);
                                    });
                        }, [g, l, s, p]),
                        A = m.useCallback(
                            (e) => {
                                const t = o || T,
                                    a = !l || e || t;
                                return m.createElement(y.Z, { style: oe.footer }, m.createElement(P.Z, { style: oe.disclaimer }), m.createElement(k.ZP, { disabled: a, onPress: L, type: "primaryFilled" }, t ? m.createElement(f.Z, null) : ae));
                            },
                            [l, L, T, o],
                        ),
                        W = m.useCallback(
                            (e, t) => {
                                i(t);
                            },
                            [i],
                        ),
                        N = m.useCallback((e) => ({ uri: e }), []),
                        H = m.useCallback(
                            ({ data: e, fetchStatus: t, retry: a }) => {
                                if (t === M.ZP.FAILED) return m.createElement(C.Z, { onRequestRetry: a, retryMessage: Y });
                                const n = (e?.viewer_v2?.in_app_purchase_products_slice.items || []).map(({ external_identifier: e, external_product: t, metadata: { bonus_coin_value: a, coin_value: n, label_keys: r, thumbnail_url: l } }) => {
                                    const i = r ? te[r[0]] : {},
                                        o = t?.prices?.[0] || {},
                                        s = o.currency_code,
                                        c = o.amount_local_micro;
                                    return { ...i, illustration: l ? m.createElement(_.Z, { resizeMode: "contain", source: N(l), style: oe.image }) : null, endContent: c ? (0, R.x)({ amount: c, formatter: 1e6, currencyCode: s ? s.toUpperCase() : void 0 }) : null, label: n ? j({ count: n.toLocaleString() }) : null, description: a ? J({ count: a.toLocaleString() }) : null, value: e };
                                });
                                return t === M.ZP.LOADED ? m.createElement(w.Z, { name: "coin-pack-picker", onChange: W, options: n, value: l }) : m.createElement(f.Z, null);
                            },
                            [N, l, W],
                        ),
                        O = m.useCallback(
                            ({ data: e, fetchStatus: t, retry: a }) => {
                                if (t === M.ZP.FAILED) return m.createElement(C.Z, { onRequestRetry: a, retryMessage: Y });
                                if (t === M.ZP.LOADED) {
                                    const t = e?.viewer_v2?.account_balance.amount || 0,
                                        a = !!e?.viewer_v2?.account_balance.at_limit;
                                    return m.createElement(x.Z, { backButtonType: "close", bottomBar: A(a), history: n, onBackClick: v, secondaryBar: Z(t) }, m.createElement(y.Z, { style: oe.root }, m.createElement(h.ZP, { color: "gray700", size: "body", style: oe.subtext }, X), a ? m.createElement(E.Z.Attention, { text: ee, withIcon: !0 }) : m.createElement(le, { render: H, variables: u })));
                                }
                                return null;
                            },
                            [A, u, Z, H, v, n],
                        );
                    return m.createElement(I.nO, { namespace: ne }, m.createElement(z.XB, { render: O, variables: b() }));
                },
                oe = T.default.create((e) => ({ root: { marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space8 }, header: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space32, marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, subtext: { marginBottom: e.spaces.space16 }, footer: { marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space16 }, disclaimer: { marginBottom: e.spaces.space8, marginHorizontal: "auto", maxWidth: "500px", textAlign: "center" }, image: { height: e.spaces.space40, width: e.spaces.space40 }, iconTwitter: { color: e.colors.primary } })),
                se = N(ie);
        },
        782947: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(807896),
                r = a(202784),
                l = a(896632),
                i = a(325686),
                o = a(711223),
                s = a(516951),
                c = a(731708),
                d = a(868634),
                u = a(952428),
                p = a(352924),
                m = a(392237);
            const g = m.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                b = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                y = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": a, checked: n, dedicatedPillRow: l, description: m, disabled: y, disabledInlineCallout: h, endContent: k, horizontal: f, illustration: C, infoLabel: _, infoLabelType: w, inlineCallout: E, label: T, name: v, onChange: Z, pillText: B, pillType: x, reverseLabels: P, secondaryContent: S, secondaryDescription: L, switchStyle: F, testID: R }) => {
                    const D = (0, p.b)(),
                        I = (0, p.b)(),
                        K = (0, p.b)(),
                        M = r.createElement(c.ZP, { color: F ? (n ? "text" : "gray800") : "text", id: D, role: "label", size: F ? "body" : "headline2", testID: "headline-label", weight: F ? "normal" : "bold" }, T),
                        A = !!m && r.createElement(c.ZP, { color: "gray700", id: I, size: "subtext1", style: B ? g.descriptionWithPill : g.description, testID: "description-label" }, m),
                        W = r.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: g.description }, L),
                        N = B ? r.createElement(d.ZP, { style: l ? g.pill : g.inlinePill, type: x }, B) : null,
                        z = r.createElement(r.Fragment, null, l ? N : null, r.createElement(i.Z, { style: [g.row, _ && g.marginBottom8] }, P ? A : M, l ? null : N), r.createElement(i.Z, { style: [g.row, P && g.marginTop4] }, P ? M : A), S || (L ? W : void 0)),
                        H = F ? "unset" : (a ? 100 / a : 100) + "%",
                        O = F ? [g.padding8, g.borderRadiusLarge, n ? g.backgroundDefault : g.backgroundTransparent] : [g.padding16, g.boxShadow, g.borderRadiusLarge, n ? g.checked : null, g.backgroundDefault];
                    return r.createElement(r.Fragment, null, r.createElement(u.Z, { disabled: y, style: [g.root, ...O, f ? { maxWidth: H, ...g.grow } : null, 1 === t || f ? null : g.withMarginTop, t !== a && f && !F && g.withMarginEnd, !y && g.interactive], testID: R, withInteractiveStyling: !F }, !!C && r.createElement(i.Z, { style: g.iconContainer, testID: "illustration" }, C), r.createElement(i.Z, { style: [g.labelContainer, F && g.alignCenter] }, !!_ && r.createElement(i.Z, { style: g.info }, r.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, r.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, _)), "red" !== w && "yellow" !== w && r.createElement(o.default, { style: g.infoIcon, testID: "infoIcon" })), z, n && !!E && r.createElement(i.Z, { style: g.inlineCalloutContainer, testID: "inlineCallout" }, E)), !!k && r.createElement(i.Z, { style: g.endContentContainer, testID: "endContent" }, r.createElement(c.ZP, { id: K, size: "subtext1", weight: "bold" }, k)), r.createElement("input", { "aria-describedby": `${I} ${K}`, "aria-label": e, "aria-labelledby": D, "aria-posinset": t, "aria-setsize": a, checked: n, disabled: y, name: v, onChange: n ? s.Z : Z, style: b, type: "radio" })), y && h ? h : null);
                },
                h = (e) => {
                    const t = r.useCallback(({ value: e, ...t }) => r.createElement(y, (0, n.Z)({}, t, { key: e })), []);
                    return r.createElement(l.Z, (0, n.Z)({}, e, { renderSelector: t }));
                };
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterCoinsManagement.6d21deba.js.map

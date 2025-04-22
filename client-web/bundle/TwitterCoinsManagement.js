"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterCoinsManagement"],
    {
        625661: (e, a, t) => {
            t.d(a, { ZP: () => p });
            var n = t(202784),
                r = t(614983),
                l = t.n(r),
                i = t(325686),
                o = t(370006),
                c = t(786998),
                s = t(929028),
                d = t(386802);
            function u(e, a, t) {
                return e || (!a && t ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            l()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: t, fixed: r, hideBackButton: l, isFullWidth: i, isLarge: s, leftControl: d, middleControl: p, position: m, rightControl: g, secondaryBar: b, style: y, subtitle: f, title: h, titleDomId: k, titleIconCell: _, titleIconCellSize: C, withBackground: v, withWideContainer: w } = this.props,
                        { isModal: E } = this.context,
                        T = l ? d : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, a, t) {
                            return e && !(a && t);
                        })(!!v, E, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(c.Z, { centerTitle: a, centeredLogo: t, isFullWidth: i, isLarge: s, leftControl: T, middleControl: p, position: u(m, E, r), rightControl: g, style: y, subtitle: f, title: h, titleDomId: k, titleIconCell: _, titleIconCellSize: C, withBackground: P, withWideContainer: w }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        t = s.Z.getBackgroundStyles();
                    return a ? n.createElement(i.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, t) => {
            t.d(a, { Z: () => b, w: () => m });
            var n = t(202784),
                r = t(325686),
                l = t(108362),
                i = t(386802),
                o = t(392237),
                c = t(652904),
                s = t(555079),
                d = t(625661),
                u = t(449067),
                p = t(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: t, backLocation: l, centerTitle: i, hideBackButton: o, history: c, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, rightControl: y, secondaryBar: f, subtitle: h, title: k } = this.props,
                                { isModal: _ } = this.context;
                            return n.createElement(r.Z, { style: _ ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(d.ZP, { backButtonType: t || (_ ? "close" : "back"), backLocation: l, centerTitle: i, fixed: !_, hideBackButton: o, history: c, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: y, secondaryBar: f, style: [_ && g.appBarModal, a], subtitle: h, title: k, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: t } = this.context;
                            a && (t ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: t, containerStyle: i, documentTitle: o, isFullWidth: s, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: y } = this.props,
                        { isModal: f } = this.context,
                        h = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(c.Z, null, n.createElement(u.Z.Configure, { documentTitle: o, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, f && g.rootModal] }, !f && h, n.createElement(l.Z, { isFullWidth: s, isLarge: d, style: [g.container, f && g.containerModal, i] }, f ? n.createElement(p.Z, { style: g.viewport }, h, t) : t), a ? n.createElement(r.Z, { style: [g.bottomBarModal, !f && !y && g.bottomBarMobile] }, n.createElement(l.Z, { isFullWidth: s, isLarge: d }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const g = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        879101: (e, a, t) => {
            t.d(a, { Z: () => p });
            var n = t(202784),
                r = t(688715),
                l = t(731708),
                i = t(392237),
                o = t(674132),
                c = t.n(o);
            const s = (0, r.ju)("https://legal.x.com/purchaser-terms"),
                d = c().bc42db1c,
                u = i.default.create((e) => ({ recurring: { marginStart: e.spaces.space4 } })),
                p = ({ recurring: e, style: a }) => n.createElement(l.ZP, { color: "gray700", style: a }, n.createElement(c().I18NFormatMessage, { $i18n: "cd5e4a77" }, n.createElement(l.ZP, { color: "plum500", link: s }, c().f1561b06)), e ? n.createElement(l.ZP, { style: u.recurring }, d) : null);
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => d });
            var n = t(202784),
                r = t(500002),
                l = t(668214),
                i = t(997174),
                o = t(118823);
            const c = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class s extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: t, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: i },
                            locationKey: o,
                        } = e;
                    let c = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (c = !0));
                    const s = r || o;
                    ((s && r !== o) || (!s && t !== l) || n !== i || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: t, updateTweetDetailNav: n } = e;
                    a.scribePageImpression(), t(a.contextualScribeNamespace, a.contextualScribeData), n(a.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const d = (0, r.ZP)(c(s));
        },
        301410: (e, a, t) => {
            t.d(a, { i: () => g.ZP, z: () => h });
            var n = t(202784),
                r = t(928123),
                l = t.n(r),
                i = t(72845),
                o = t.n(i),
                c = t(57074),
                s = t.n(c),
                d = t(516951),
                u = t(88656),
                p = t(71620),
                m = t(163889),
                g = t(312771);
            const b = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: d.Z });
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, a) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: a, render: t }) => {
                    const n = l()(e, a);
                    return t({ fetchStatus: g.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                h = (e, a) =>
                    function ({ fetchPolicy: t = "store-or-network", render: r, variables: l }) {
                        const [i, c] = o()(e),
                            d = (0, p.n7)(a.errorConfig.context),
                            u = s()(l),
                            m = n.useCallback(() => {
                                c(u, { fetchPolicy: "network-only" });
                            }, [c, u]);
                        return (
                            n.useLayoutEffect(() => {
                                c(u, { fetchPolicy: t });
                            }, [t, c, u]),
                            i
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(b, { render: r }) },
                                      n.createElement(y, { errorHandler: d(a.errorConfig.options || {}), key: i.fetchKey, retry: m }, (a, t) => (a ? r({ fetchStatus: g.ZP.FAILED, error: a, data: null, retry: t }) : n.createElement(f, { query: e, queryRef: i, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        97882: (e, a, t) => {
            t.d(a, { T: () => l, x: () => i });
            var n = t(674132),
                r = t.n(n);
            const l = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                i = ({ amount: e, currencyCode: a = "USD", formatter: t = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const i = r ? e : parseInt(e, 10) / t,
                        c = l[a]?.(i);
                    return n ? o(c) : c;
                },
                o = (e) => {
                    const a = e?.split(".");
                    return 2 === a?.length && "00" === a?.[1] ? a[0] : e;
                };
        },
        264226: (e, a, t) => {
            t.d(a, { XB: () => y, ZP: () => h });
            var n,
                r,
                l,
                i,
                o,
                c = {
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
                                                    { kind: "RequiredField", field: (l = { alias: null, args: null, kind: "ScalarField", name: "balance_type", storageKey: null }), action: "THROW", path: "viewer_v2.account_balance.balance_type" },
                                                    { kind: "RequiredField", field: (i = { alias: null, args: null, kind: "ScalarField", name: "at_limit", storageKey: null }), action: "THROW", path: "viewer_v2.account_balance.at_limit" },
                                                    { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null }), action: "THROW", path: "viewer_v2.account_balance.amount" },
                                                ],
                                                storageKey: 'account_balance(balance_type:"Coins")',
                                            },
                                            action: "THROW",
                                            path: "viewer_v2.account_balance",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                                path: "viewer_v2",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "TwitterCoinsManagementCoinBalanceQuery", selections: [{ alias: null, args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: r, concreteType: "AccountBalance", kind: "LinkedField", name: "account_balance", plural: !1, selections: [l, i, o], storageKey: 'account_balance(balance_type:"Coins")' }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "7UIOQwnGlrNqaLd16fTwYg", metadata: {}, name: "TwitterCoinsManagementCoinBalanceQuery", operationKind: "query", text: null },
                };
            c.hash = "a1812c9b3762694b980ae7c261e82e8e";
            const s = c;
            var d = t(202784),
                u = (t(585488), t(868634)),
                p = t(731708),
                m = t(392237),
                g = t(856151);
            const b = s,
                y = (0, t(301410).z)(b, { errorConfig: { context: "TWITTER_COINS_MANAGEMENT_COIN_BALANCE_CONTEXT" } }),
                f = m.default.create((e) => ({ leftSpace: { marginStart: e.spaces.space4 }, balance: { borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12 } })),
                h = ({ coinBalance: e }) => d.createElement(u.ZP, { background: "gray50", style: f.balance }, d.createElement(g.default, null), d.createElement(p.ZP, { color: "gray1100", style: f.leftSpace }, e));
        },
        310248: (e, a, t) => {
            t.r(a), t.d(a, { default: () => b });
            var n = t(202784),
                r = t(138099),
                l = t(731708),
                i = t(154003),
                o = t(392237),
                c = t(674132),
                s = t.n(c),
                d = t(293115);
            const u = { page: "coin_purchase_failure" },
                p = s().a893d602,
                m = s().ia2eb0c0,
                g = s().a0b4541c,
                b = ({ history: e }) => {
                    const a = n.useCallback(() => e.replace("/i/coins"), [e]);
                    return n.createElement(d.nO, { namespace: u }, n.createElement(r.Z, { enableMaskForDismiss: !0, onMaskClick: a, style: y.root, type: "center" }, n.createElement(l.ZP, { size: "title4", weight: "bold" }, m), n.createElement(l.ZP, { style: y.spacing }, g), n.createElement(i.ZP, { onPress: a, style: y.button, type: "primaryFilled" }, p)));
                },
                y = o.default.create((e) => ({ button: { marginTop: e.spaces.space24, width: "100%" }, spacing: { marginTop: e.spaces.space8 }, root: { padding: e.spaces.space32, minHeight: 200 } }));
        },
        562581: (e, a, t) => {
            t.r(a), t.d(a, { default: () => C });
            var n = t(202784),
                r = t(360917),
                l = t.n(r),
                i = t(325686),
                o = t(731708),
                c = t(167630),
                s = t(138099),
                d = t(154003),
                u = t(392237),
                p = t(674132),
                m = t.n(p),
                g = t(293115),
                b = t(312771),
                y = t(264226);
            const f = { page: "coin_purchase_success" },
                h = m().a893d602,
                k = m().fe93ed4a,
                _ = m().bcb90375,
                C = ({ history: e }) => {
                    const a = n.useCallback(() => e.replace("/home"), [e]),
                        t = n.useCallback(({ data: e, fetchStatus: a, retry: t }) => {
                            if (a === b.ZP.LOADED) {
                                const a = e?.viewer_v2?.account_balance.amount;
                                return n.createElement(o.ZP, { style: v.spacingRight }, _({ balance: a }));
                            }
                            return n.createElement(c.Z, null);
                        }, []);
                    return n.createElement(g.nO, { namespace: f }, n.createElement(s.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: a, style: v.root, type: "center" }, n.createElement(i.Z, null, n.createElement(o.ZP, { size: "title4", style: v.marginBottom, weight: "bold" }, k), n.createElement(y.XB, { render: t, variables: l() })), n.createElement(d.ZP, { onPress: a, style: v.button, type: "primaryFilled" }, h)));
                },
                v = u.default.create((e) => ({ root: { padding: e.spaces.space32, display: "flex", flexDirection: "column", justifyContent: "space-between" }, marginBottom: { marginBottom: e.spaces.space8 }, spacingRight: { marginEnd: e.spaces.space8 }, button: { marginTop: e.spaces.space24, width: "100%" } }));
        },
        559846: (e, a, t) => {
            t.r(a), t.d(a, { TwitterCoinsManagementCoinPackQueryRequest: () => re, TwitterCoinsManagementScreen: () => ie, default: () => ce });
            var n,
                r,
                l,
                i,
                o,
                c,
                s,
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
                                                                { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "external_identifier", storageKey: null }), action: "THROW", path: "viewer_v2.in_app_purchase_products_slice.items.external_identifier" },
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
                                                                            (c = {
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
                                                                    path: "viewer_v2.in_app_purchase_products_slice.items.metadata",
                                                                },
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "WebSubscriptionProductDetails",
                                                                    kind: "LinkedField",
                                                                    name: "external_product",
                                                                    plural: !1,
                                                                    selections: [
                                                                        (s = {
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
                                                        path: "viewer_v2.in_app_purchase_products_slice.items",
                                                    },
                                                    (d = { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }], storageKey: null }),
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                            path: "viewer_v2.in_app_purchase_products_slice",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                                path: "viewer_v2",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [r, n], kind: "Operation", name: "TwitterCoinsManagementCoinPackQuery", selections: [{ alias: null, args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: i, concreteType: "InAppPurchaseProductsSlice", kind: "LinkedField", name: "in_app_purchase_products_slice", plural: !1, selections: [{ alias: null, args: null, concreteType: "InAppPurchaseProductSliceItem", kind: "LinkedField", name: "items", plural: !0, selections: [o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, c], storageKey: null }, { alias: null, args: null, concreteType: "WebSubscriptionProductDetails", kind: "LinkedField", name: "external_product", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "TtPtRW7yaLbnwCFJANYNFQ", metadata: {}, name: "TwitterCoinsManagementCoinPackQuery", operationKind: "query", text: null },
                };
            u.hash = "73f4c41e8465037ccde4697256689d91";
            const p = u;
            var m = t(202784),
                g = t(360917),
                b = t.n(g),
                y = t(325686),
                f = (t(585488), t(731708)),
                h = t(154003),
                k = t(167630),
                _ = t(750410),
                C = t(992942),
                v = t(782947),
                w = t(40610),
                E = t(392237),
                T = t(674132),
                P = t.n(T);
            const B = Object.freeze({ Beta: "Beta", Live: "Live", Sandbox: "Sandbox", Test: "Test" });
            var Z = t(980407),
                x = t(879101),
                S = t(443781),
                L = t(301410),
                R = t(782642),
                D = t(97882),
                F = t(782826),
                K = t(293115),
                I = t(725516),
                M = t(312771),
                A = t(668214),
                N = t(390387);
            const W = (0, A.Z)().propsFromState(() => ({ currentCountry: N.GG }));
            var O = t(264226),
                Q =
                    (t(571372),
                    (function () {
                        var e = [
                                { defaultValue: null, kind: "LocalArgument", name: "cancel_url" },
                                { defaultValue: null, kind: "LocalArgument", name: "external_product_id" },
                                { defaultValue: null, kind: "LocalArgument", name: "success_url" },
                            ],
                            a = [
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
                        return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useCoinPurchaseSessionUrlMutation", selections: a, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useCoinPurchaseSessionUrlMutation", selections: a }, params: { id: "QP5WVTrpvWikhlKybPX5jQ", metadata: {}, name: "useCoinPurchaseSessionUrlMutation", operationKind: "mutation", text: null } };
                    })());
            Q.hash = "7daebd17bb1245b0e462caffc307fe76";
            const q = Q;
            var H = t(351743),
                V = t.n(H);
            const z = q,
                U = ({ cancelUrl: e, successUrl: a }) => {
                    const [t, n] = V()(z);
                    return [
                        m.useCallback(
                            (n) =>
                                new Promise((r, l) => {
                                    t({
                                        variables: { cancel_url: e, external_product_id: n, success_url: a },
                                        onCompleted: (e, a) => {
                                            const t = e.onetimepurchasecheckoutsession_create?.session_url;
                                            if (!t) return l(Error("expected session_url"));
                                            r(t);
                                        },
                                        onError: l,
                                    });
                                }),
                            [t, e, a],
                        ),
                        n,
                    ];
                },
                G = P().fbb7764b,
                j = P().j087774e,
                X = P().bb55752e,
                Y = P().a0b4541c,
                $ = P().ef4602ec,
                J = P().ea7ce65f,
                ee = P().e557f9d2,
                ae = { bestValue: { pillText: P().f89dfa74, pillType: "bestValue" }, mostPopular: { pillText: P().e2beba5e, pillType: "mostPopular" } },
                te = P().gafeeb96,
                ne = { page: "twitter_coins" },
                re = p,
                le = (0, L.z)(re, { errorConfig: { context: "TWITTER_COINS_MANAGEMENT_CONTEXT" } }),
                ie = (e) => {
                    const { featureSwitches: a } = m.useContext(S.rC),
                        { currentCountry: t, history: n } = e,
                        r = (0, I.z)(),
                        [l, i] = m.useState(""),
                        [o, c] = m.useState(!1),
                        { origin: s } = F.ZP.get(),
                        d = a.isTrue("tweet_awards_web_coin_purchase_sandbox_enabled"),
                        u = m.useMemo(() => ({ environment: d ? B.Sandbox : B.Live, countryCode: t || "US" }), [d, t]),
                        p = (0, R.p)(),
                        [g, E] = U({ successUrl: `${s}/i/coins/success`, cancelUrl: `${s}/i/coins/failure` }),
                        T = m.useCallback(() => {
                            r.scribe({ element: "twitter_coins", component: "dismiss_button", action: "click" }), n.goBack();
                        }, [r, n]),
                        P = m.useCallback((e) => m.createElement(y.Z, { style: oe.header }, m.createElement(f.ZP, { size: "title4", weight: "bold" }, j), m.createElement(O.ZP, { coinBalance: e })), []),
                        L = m.useCallback(() => {
                            c(!0),
                                g(l)
                                    .then((e) => F.ZP.navigateTo(e))
                                    .catch(() => {
                                        p({ text: $, withClearButton: !0, withAutoDismiss: !0 }), c(!1);
                                    });
                        }, [g, l, c, p]),
                        A = m.useCallback(
                            (e) => {
                                const a = o || E,
                                    t = !l || e || a;
                                return m.createElement(y.Z, { style: oe.footer }, m.createElement(x.Z, { style: oe.disclaimer }), m.createElement(h.ZP, { disabled: t, onPress: L, type: "primaryFilled" }, a ? m.createElement(k.Z, null) : te));
                            },
                            [l, L, E, o],
                        ),
                        N = m.useCallback(
                            (e, a) => {
                                i(a);
                            },
                            [i],
                        ),
                        W = m.useCallback((e) => ({ uri: e }), []),
                        Q = m.useCallback(
                            ({ data: e, fetchStatus: a, retry: t }) => {
                                if (a === M.ZP.FAILED) return m.createElement(_.Z, { onRequestRetry: t, retryMessage: Y });
                                const n = (e?.viewer_v2?.in_app_purchase_products_slice.items || []).map(({ external_identifier: e, external_product: a, metadata: { bonus_coin_value: t, coin_value: n, label_keys: r, thumbnail_url: l } }) => {
                                    const i = r ? ae[r[0]] : {},
                                        o = a?.prices?.[0] || {},
                                        c = o.currency_code,
                                        s = o.amount_local_micro;
                                    return { ...i, illustration: l ? m.createElement(C.Z, { resizeMode: "contain", source: W(l), style: oe.image }) : null, endContent: s ? (0, D.x)({ amount: s, formatter: 1e6, currencyCode: c ? c.toUpperCase() : void 0 }) : null, label: n ? G({ count: n.toLocaleString() }) : null, description: t ? J({ count: t.toLocaleString() }) : null, value: e };
                                });
                                return a === M.ZP.LOADED ? m.createElement(v.Z, { name: "coin-pack-picker", onChange: N, options: n, value: l }) : m.createElement(k.Z, null);
                            },
                            [W, l, N],
                        ),
                        q = m.useCallback(
                            ({ data: e, fetchStatus: a, retry: t }) => {
                                if (a === M.ZP.FAILED) return m.createElement(_.Z, { onRequestRetry: t, retryMessage: Y });
                                if (a === M.ZP.LOADED) {
                                    const a = e?.viewer_v2?.account_balance.amount || 0,
                                        t = !!e?.viewer_v2?.account_balance.at_limit;
                                    return m.createElement(Z.Z, { backButtonType: "close", bottomBar: A(t), history: n, onBackClick: T, secondaryBar: P(a) }, m.createElement(y.Z, { style: oe.root }, m.createElement(f.ZP, { color: "gray700", size: "body", style: oe.subtext }, X), t ? m.createElement(w.Z.Attention, { text: ee, withIcon: !0 }) : m.createElement(le, { render: Q, variables: u })));
                                }
                                return null;
                            },
                            [A, u, P, Q, T, n],
                        );
                    return m.createElement(K.nO, { namespace: ne }, m.createElement(O.XB, { render: q, variables: b() }));
                },
                oe = E.default.create((e) => ({ root: { marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space8 }, header: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space32, marginTop: e.spaces.space16, marginBottom: e.spaces.space8 }, subtext: { marginBottom: e.spaces.space16 }, footer: { marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space16 }, disclaimer: { marginBottom: e.spaces.space8, marginHorizontal: "auto", maxWidth: "500px", textAlign: "center" }, image: { height: e.spaces.space40, width: e.spaces.space40 }, iconTwitter: { color: e.colors.primary } })),
                ce = W(ie);
        },
        782947: (e, a, t) => {
            t.d(a, { Z: () => f });
            var n = t(807896),
                r = t(202784),
                l = t(896632),
                i = t(325686),
                o = t(711223),
                c = t(516951),
                s = t(731708),
                d = t(868634),
                u = t(952428),
                p = t(352924),
                m = t(392237);
            const g = m.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                b = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                y = ({ "aria-label": e, "aria-posinset": a, "aria-setsize": t, checked: n, dedicatedPillRow: l, description: m, disabled: y, disabledInlineCallout: f, endContent: h, horizontal: k, illustration: _, infoLabel: C, infoLabelType: v, inlineCallout: w, label: E, name: T, onChange: P, pillText: B, pillType: Z, reverseLabels: x, secondaryContent: S, secondaryDescription: L, switchStyle: R, testID: D }) => {
                    const F = (0, p.b)(),
                        K = (0, p.b)(),
                        I = (0, p.b)(),
                        M = r.createElement(s.ZP, { color: "text", id: F, role: "label", size: R ? "body" : "headline2", testID: "headline-label", weight: R ? "medium" : "bold" }, E),
                        A = !!m && r.createElement(s.ZP, { color: "gray700", id: K, size: "subtext1", style: B ? g.descriptionWithPill : g.description, testID: "description-label" }, m),
                        N = r.createElement(s.ZP, { color: "gray700", role: "label", size: "subtext2", style: g.description }, L),
                        W = B ? r.createElement(d.ZP, { style: l ? g.pill : g.inlinePill, type: Z }, B) : null,
                        O = r.createElement(r.Fragment, null, l ? W : null, r.createElement(i.Z, { style: [g.row, C && g.marginBottom8] }, x ? A : M, l ? null : W), r.createElement(i.Z, { style: [g.row, x && g.marginTop4] }, x ? M : A), S || (L ? N : void 0)),
                        Q = R ? "unset" : (t ? 100 / t : 100) + "%",
                        q = R ? [g.padding8, g.borderRadiusInfinite, n ? g.backgroundDefault : g.backgroundTransparent] : [g.padding16, g.boxShadow, g.borderRadiusLarge, n ? g.checked : null, g.backgroundDefault];
                    return r.createElement(r.Fragment, null, r.createElement(u.Z, { disabled: y, style: [g.root, ...q, k ? { maxWidth: Q, ...g.grow } : null, 1 === a || k ? null : g.withMarginTop, a !== t && k && !R && g.withMarginEnd, !y && g.interactive], testID: D, withInteractiveStyling: !R }, !!_ && r.createElement(i.Z, { style: g.iconContainer, testID: "illustration" }, _), r.createElement(i.Z, { style: [g.labelContainer, R && g.alignCenter] }, !!C && r.createElement(i.Z, { style: g.info }, r.createElement(d.ZP, { background: "green" === v ? "green500" : "red" === v ? "magenta500" : "yellow" === v ? "orange50" : "gray500" }, r.createElement(s.ZP, { color: "yellow" === v ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, C)), "red" !== v && "yellow" !== v && r.createElement(o.default, { style: g.infoIcon, testID: "infoIcon" })), O, n && !!w && r.createElement(i.Z, { style: g.inlineCalloutContainer, testID: "inlineCallout" }, w)), !!h && r.createElement(i.Z, { style: g.endContentContainer, testID: "endContent" }, r.createElement(s.ZP, { id: I, size: "subtext1", weight: "bold" }, h)), r.createElement("input", { "aria-describedby": `${K} ${I}`, "aria-label": e, "aria-labelledby": F, "aria-posinset": a, "aria-setsize": t, checked: n, disabled: y, name: T, onChange: n ? c.Z : P, style: b, type: "radio" })), y && f ? f : null);
                },
                f = (e) => {
                    const a = r.useCallback(({ value: e, ...a }) => r.createElement(y, (0, n.Z)({}, a, { key: e })), []);
                    return r.createElement(l.Z, (0, n.Z)({}, e, { renderSelector: a }));
                };
        },
        928123: (e, a, t) => {
            var n = t(606161).useTrackLoadQueryInRender,
                r = t(138239),
                l = t(303566),
                i = t(437429),
                o = t(647677),
                c = (t(202784).useDebugValue, t(703383).__internal),
                s = c.fetchQueryDeduped,
                d = c.fetchQuery;
            t(826590);
            e.exports = function (e, a, t) {
                n();
                var c,
                    u = i(),
                    p = a.fetchKey,
                    m = a.fetchPolicy,
                    g = a.source,
                    b = a.variables,
                    y = a.networkCacheConfig,
                    f = l(e, b, y);
                if ("PreloadedQuery_DEPRECATED" === a.kind)
                    f.request.node.params.name !== a.name && o(!1),
                        (c = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: p,
                            fetchObservable: s(u, f.request.identifier, function () {
                                return u === a.environment && null != g ? u.executeWithSource({ operation: f, source: g }) : u.execute({ operation: f });
                            }),
                            fetchPolicy: m,
                            query: f,
                            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
                        });
                else {
                    var h = d(u, f);
                    c = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != g && u === a.environment ? g.ifEmpty(h) : (a.environment, h), fetchKey: p, fetchPolicy: m, query: f, renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy };
                }
                return r(c);
            };
        },
        72845: (e, a, t) => {
            var n = (0, t(171600).default)(t(638636)),
                r = t(606161),
                l = r.loadQuery,
                i = r.useTrackLoadQueryInRender,
                o = t(995402),
                c = t(437429),
                s = t(202784),
                d = s.useCallback,
                u = s.useEffect,
                p = s.useRef,
                m = s.useState,
                g = t(703383).getRequest,
                b = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== g(e).params.metadata.live;
            }
            e.exports = function (e, a) {
                var t = null != a ? a : b,
                    r = c();
                i();
                var s = o(),
                    g = p(new Set([t])),
                    f = m(function () {
                        return t;
                    }),
                    h = f[0],
                    k = f[1],
                    _ = m(function () {
                        return t;
                    }),
                    C = _[0],
                    v = _[1];
                t !== C && (g.current.add(t), v(t), k(t));
                var w = d(
                        function () {
                            s.current && (g.current.add(b), k(b));
                        },
                        [s],
                    ),
                    E = d(
                        function (a, t) {
                            var n = null != t && t.hasOwnProperty("__environment") ? { fetchPolicy: t.fetchPolicy, networkCacheConfig: t.networkCacheConfig, __nameForWarning: t.__nameForWarning } : t;
                            if (s.current) {
                                var i,
                                    o = l(null !== (i = null == t ? void 0 : t.__environment) && void 0 !== i ? i : r, e, a, n);
                                g.current.add(o), k(o);
                            }
                        },
                        [r, e, k, s],
                    ),
                    T = p(!1);
                return (
                    u(function () {
                        return function () {
                            T.current = !0;
                        };
                    }, []),
                    u(
                        function () {
                            if (!0 === T.current) return (T.current = !1), void ("NullQueryReference" !== h.kind && E(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig }));
                            var a = g.current;
                            if (s.current) {
                                var t,
                                    r = (0, n.default)(a);
                                try {
                                    for (r.s(); !(t = r.n()).done; ) {
                                        var l = t.value;
                                        if (l === h) break;
                                        a.delete(l), "NullQueryReference" !== l.kind && (y(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery());
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                        [h, s, E, e],
                    ),
                    u(
                        function () {
                            return function () {
                                var a,
                                    t = (0, n.default)(g.current);
                                try {
                                    for (t.s(); !(a = t.n()).done; ) {
                                        var r = a.value;
                                        "NullQueryReference" !== r.kind && (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery());
                                    }
                                } catch (e) {
                                    t.e(e);
                                } finally {
                                    t.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === h.kind ? null : h, E, w]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterCoinsManagement.11e4da6a.js.map

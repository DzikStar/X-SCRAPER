"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ProfessionalHome"],
    {
        233935: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(154003),
                l = n(392237),
                i = n(674132),
                o = n.n(i),
                s = n(698891);
            const c = "settingsAppBar",
                u = o().bb081ea2,
                d = a.memo(({ onPress: e, pullRight: t, to: n }) => a.createElement(r.ZP, { "aria-label": u, hoverLabel: { label: u }, icon: a.createElement(s.default, null), link: n, onPress: e, pullRight: t, style: m.button, testID: c, type: "primaryText" })),
                m = l.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                p = d;
        },
        301410: (e, t, n) => {
            n.d(t, { i: () => g.ZP, z: () => _ });
            var a = n(202784),
                r = n(928123),
                l = n.n(r),
                i = n(72845),
                o = n.n(i),
                s = n(57074),
                c = n.n(s),
                u = n(516951),
                d = n(88656),
                m = n(71620),
                p = n(163889),
                g = n(312771);
            const f = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: u.Z });
            class y extends a.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, p.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const b = ({ query: e, queryRef: t, render: n }) => {
                    const a = l()(e, t);
                    return n({ fetchStatus: g.ZP.LOADED, data: a, error: null, retry: u.Z });
                },
                _ = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: r, variables: l }) {
                        const [i, s] = o()(e),
                            u = (0, m.n7)(t.errorConfig.context),
                            d = c()(l),
                            p = a.useCallback(() => {
                                s(d, { fetchPolicy: "network-only" });
                            }, [s, d]);
                        return (
                            a.useLayoutEffect(() => {
                                s(d, { fetchPolicy: n });
                            }, [n, s, d]),
                            i
                                ? a.createElement(
                                      a.Suspense,
                                      { fallback: a.createElement(f, { render: r }) },
                                      a.createElement(y, { errorHandler: u(t.errorConfig.options || {}), key: i.fetchKey, retry: p }, (t, n) => (t ? r({ fetchStatus: g.ZP.FAILED, error: t, data: null, retry: n }) : a.createElement(b, { query: e, queryRef: i, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        566220: (e, t, n) => {
            n.d(t, { R: () => i });
            var a = n(202784);
            const r = () => new Date(),
                l = a.createContext(r),
                i = () => a.useContext(l);
        },
        97882: (e, t, n) => {
            n.d(t, { T: () => l, x: () => i });
            var a = n(674132),
                r = n.n(a);
            const l = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                i = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: a = !1, strictAmount: r = !1 }) => {
                    const i = r ? e : parseInt(e, 10) / n,
                        s = l[t]?.(i);
                    return a ? o(s) : s;
                },
                o = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        286960: (e, t, n) => {
            n.d(t, { If: () => h });
            var a = n(202784),
                r = n(325686),
                l = n(731708),
                i = n(67369),
                o = n(738545),
                s = n(165822),
                c = n(392237),
                u = n(674132),
                d = n.n(u),
                m = n(97882),
                p = n(979673);
            const g = {
                    Engagements: { label: d().dbe9353e, popover: d().c23def7a },
                    Spend: { label: d().jc14a9e8, popover: d().d16b5a18, format: "currency" },
                    Impressions: { popover: d().b15df4b4, label: d().e5fe61e0 },
                    EngagementRate: {
                        label: d().e623137c,
                        popover: d().d9d34182,
                        calculate: (e, t) => {
                            const n = t("Engagements"),
                                a = t("Impressions");
                            return { current: (n.current ?? 0) / (a.current ?? 1), past: (n.past ?? 0) / (a.past ?? 1) };
                        },
                        format: "percent",
                    },
                    ProfileVisits: { label: d().aeee0182, popover: d().b2bde01a },
                    LinkClicks: { label: d().d5f1e554, popover: d().cf573986 },
                    Follows: { label: d().j761451e, popover: d().e1a87d14 },
                    Replies: { label: d().jdceda60, popover: d().j590577e },
                    Likes: { label: d().d7b8ebaa, popover: d().ia1da622 },
                    Retweets: { label: d().ja42739e, popover: d().ca6e8de0 },
                    VideoViews: { label: d().b1b4d57e, popover: d().bdaf100e },
                    MediaViews: { label: d().ca826772, popover: d().j43b8f52 },
                    CompletionRate: {
                        label: d().d3969c06,
                        popover: d().c58c3476,
                        calculate: (e, t) => {
                            const n = t("VideoCompletions"),
                                a = t("VideoViews");
                            return { current: (n.current ?? 0) / (a.current ?? 1), past: (n.past ?? 0) / (a.past ?? 1) };
                        },
                        format: "percent",
                    },
                },
                f = d().c778d80b,
                y = d().g01559c6;
            function b(e, t, n) {
                const a = t?.find((t) => t.metric_type === e),
                    r = n?.find((t) => t.metric_type === e),
                    l = a?.metric_value ?? 0,
                    i = r?.metric_value ?? 0;
                return { metric_type: e, organic_value: l, promoted_value: i, total_value: l + i, metadata: { currency_code: r?.currency_code } };
            }
            function _(e, t) {
                if (t && 0 !== t) return (e - t) / t;
            }
            const h = (e) => {
                    const { metrics: t, showTimeMessage: n = !0, showTrend: c = !0 } = e,
                        u = (0, i.LX)();
                    if (!t) return null;
                    const d = e.metricsKeysToRender ?? ["Impressions", "EngagementRate", "ProfileVisits", "LinkClicks"],
                        h = t.current_organic_metrics,
                        v = t.past_organic_metrics,
                        E = t.advertiser_accounts_by_primary_promotable_user?.items[0].current_promoted_metrics,
                        Z = t.advertiser_accounts_by_primary_promotable_user?.items[0].past_promoted_metrics,
                        w = (e) => {
                            const t = b(e, h, E ?? []),
                                n = b(e, v, Z ?? []);
                            return { current: t.total_value, past: n.total_value, metadata: t.metadata };
                        };
                    function P(e) {
                        const n = g[e];
                        if (!n) return;
                        const { current: i, metadata: s, past: u } = n.calculate ? n.calculate(t, w) : w(e),
                            d = isFinite(i) && !isNaN(i),
                            y = d && isFinite(u) && !isNaN(u) && c,
                            b = "percent" === n.format ? f(i ?? 0) : "currency" === n.format && s?.currency_code ? (0, m.x)({ amount: i, currencyCode: s.currency_code, formatter: 1, removeTrailingZeros: !0 }) : (0, p.fV)(i, 1e4);
                        return a.createElement(o.ZP, { animated: !0, count: i ?? 0, key: e, label: n.label, popover: ((h = n.popover), a.createElement(r.Z, null, a.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, h))), size: "title2", trendValue: y ? (_(i, u) ?? void 0) : void 0, value: d ? b : "-" });
                        var h;
                    }
                    return a.createElement(
                        r.Z,
                        null,
                        a.createElement(
                            r.Z,
                            { style: u ? k.gridMobile : k.gridDesktop },
                            d.map((e) => a.createElement(s.Z, { "aria-label": e, key: e, upper: a.createElement(r.Z, { style: k.tile }, P(e)) })),
                        ),
                        n && a.createElement(l.ZP, { color: "gray700", size: "subtext3" }, y),
                    );
                },
                k = c.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: e.spaces.space8, rowGap: e.spaces.space2 };
                    return { root: { padding: e.spaces.space16 }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, tile: { backgroundColor: e.colors.gray0, flexGrow: 1, justifyContent: "center", paddingStart: e.spaces.space16 } };
                });
        },
        979673: (e, t, n) => {
            n.d(t, { LU: () => o, Qy: () => d, fV: () => u, jf: () => c });
            var a = n(674132),
                r = n.n(a);
            const l = r().ja781451,
                i = r().cfa1a7b9,
                o = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function s(e) {
                return e || 0;
            }
            function c(e, t) {
                const n = s(t);
                return 0 === n ? 0 : s(e) / n;
            }
            function u(e, t = 1e5) {
                const n = s(e);
                return n >= t ? i(n) : l(n);
            }
            function d(e, t, n) {
                const a = t?.find((t) => t.metric_type === e),
                    r = n?.find((t) => t.metric_type === e),
                    l = a?.metric_value ?? 0,
                    i = r?.metric_value ?? 0;
                return { metric_type: e, organic_value: l, promoted_value: i, total_value: l + i };
            }
        },
        280375: (e, t, n) => {
            n.r(t), n.d(t, { default: () => ct, professionalHomeQuery: () => it });
            var a,
                r,
                l,
                i,
                o,
                s,
                c,
                u,
                d,
                m,
                p,
                g,
                f = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "now" }), (r = { defaultValue: null, kind: "LocalArgument", name: "past14Days" }), (l = { defaultValue: null, kind: "LocalArgument", name: "past7Days" }), (i = { defaultValue: null, kind: "LocalArgument", name: "rest_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "ProfessionalHomeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (o = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "2238" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "ProfessionalHomeRouter_user" }], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, a, l, r],
                        kind: "Operation",
                        name: "ProfessionalHomeQuery",
                        selections: [
                            {
                                alias: "user",
                                args: o,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "Professional", kind: "LinkedField", name: "professional", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "professional_type", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, concreteType: "BusinessCategory", kind: "LinkedField", name: "category", plural: !0, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    {
                                                        alias: "current_organic_metrics",
                                                        args: (m = [{ fields: (u = [{ kind: "Variable", name: "iso8601_time", variableName: "past7Days" }]), kind: "ObjectValue", name: "from_time" }, (d = { kind: "Literal", name: "requested_metrics", value: ["Engagements", "Impressions", "LinkClicks", "ProfileVisits"] }), { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "now" }], kind: "ObjectValue", name: "to_time" }]),
                                                        concreteType: "AnayticsMetricsTotalValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_total",
                                                        plural: !0,
                                                        selections: (p = [
                                                            { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                        ]),
                                                        storageKey: null,
                                                    },
                                                    { alias: "past_organic_metrics", args: (g = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "past14Days" }], kind: "ObjectValue", name: "from_time" }, d, { fields: u, kind: "ObjectValue", name: "to_time" }]), concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: p, storageKey: null },
                                                    { alias: null, args: [{ kind: "Literal", name: "cursor", value: "0" }], concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "advertiser_accounts_by_primary_promotable_user", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: "current_promoted_metrics", args: m, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: p, storageKey: null }, { alias: "past_promoted_metrics", args: g, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: p, storageKey: null }, s], storageKey: null }], storageKey: 'advertiser_accounts_by_primary_promotable_user(cursor:"0")' },
                                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                    s,
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "632WUqDqccL3BXgIjSn4aw", metadata: {}, name: "ProfessionalHomeQuery", operationKind: "query", text: null },
                };
            f.hash = "36250830902d9212cd89a3c13271a3be";
            const y = f;
            var b = n(202784),
                _ = (n(585488), n(750410)),
                h = n(674132),
                k = n.n(h),
                v = n(443781),
                E = n(301410),
                Z = n(566220),
                w = n(615027),
                P = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ProfessionalHomeRouter_user",
                    selections: [
                        { alias: null, args: null, concreteType: "Professional", kind: "LinkedField", name: "professional", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "professional_type", storageKey: null }], storageKey: null },
                        { args: null, kind: "FragmentSpread", name: "ProfessionalHomeHomeScreen_user" },
                        { kind: "InlineDataFragmentSpread", name: "invalidateProfessionalHomeUser_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "555818634e06d49d18292b11fb0c58c4",
                };
            const T = P;
            var S = n(277660),
                C = n.n(S),
                D = n(107267),
                x = n(323265),
                R = n(952793),
                F = n(782826),
                I = { kind: "InlineDataFragment", name: "invalidateProfessionalHomeUser_user", hash: "c4c066fd92866d7a3ce5ca16f23dc15f" };
            const L = I;
            var K = n(53647),
                V = n.n(K),
                A = n(437429),
                H = n.n(A),
                B = n(990242),
                N = n.n(B);
            const M = L,
                O = (e, t) => {
                    const n = ((e) => {
                        const { __id: t } = N()(M, e);
                        return t;
                    })(t);
                    return e.get(n);
                },
                j = (e) => {
                    const t = H()();
                    return b.useCallback(() => {
                        V()(t, (t) => {
                            ((e, t) => {
                                const n = O(e, t);
                                n?.invalidateRecord();
                            })(t, e);
                        });
                    }, [t, e]);
                };
            var U = n(325686),
                z = n(779610),
                Q = n(688715),
                q = n(392237),
                W = n(698891),
                G = n(175564),
                $ = n(718e3),
                Y = n(252021),
                X = n(725516);
            const J = "professional_home";
            var ee = n(206727);
            const te = ee.Z.root,
                ne = k().c46cdabc,
                ae = () => {
                    const e = (0, D.useHistory)(),
                        t = (0, X.z)(),
                        n = Boolean(x.ZP.getTwitterAppVersion()),
                        a = n ? x.ZP.osString() : "web";
                    t.scribePageImpression({ page: J, section: a, component: "advanced_tools", action: "show" });
                    return b.createElement(Y.Z, { backLocation: te, headerless: n, history: e, primaryContent: b.createElement(U.Z, { role: "list" }, b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: k().f6a2233a, disabled: !0, label: k().ccb3ca48, link: { pathname: "dummy" }, role: "link", thumbnail: b.createElement(W.default, { style: le.actionIconsColor }) })), b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: k().b0ef3100, label: k().e0cb0c72, link: { pathname: (0, Q.ju)("https://ads.x.com/"), external: !0 }, onPress: () => t.scribe({ page: J, section: "advanced_tools", element: "twitter_ads", action: "click" }), role: "link", thumbnail: b.createElement(G.default, { style: le.actionIconsColor }) }))), sidebarContent: b.createElement($.Z, null), title: ne, withBackButton: !n });
                },
                re = b.memo(ae),
                le = q.default.create((e) => ({ actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 } }));
            var ie = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfessionalHomeHomeScreen_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "ProfessionalHeader_user" },
                    { args: null, kind: "FragmentSpread", name: "AnalyticsHeader_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "1c746fde250233428022c3d6e6a80585",
            };
            const oe = ie;
            var se = n(154003),
                ce = n(67369),
                ue = n(233935),
                de = n(655352),
                me = (function () {
                    var e = [{ kind: "Variable", name: "iso8601_time", variableName: "past7Days" }],
                        t = { kind: "Literal", name: "requested_metrics", value: ["Engagements", "Impressions", "LinkClicks", "ProfileVisits"] },
                        n = [{ fields: e, kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "now" }], kind: "ObjectValue", name: "to_time" }],
                        a = [
                            { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                        ],
                        r = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "past14Days" }], kind: "ObjectValue", name: "from_time" }, t, { fields: e, kind: "ObjectValue", name: "to_time" }];
                    return {
                        argumentDefinitions: [
                            { kind: "RootArgument", name: "now" },
                            { kind: "RootArgument", name: "past14Days" },
                            { kind: "RootArgument", name: "past7Days" },
                        ],
                        kind: "Fragment",
                        metadata: null,
                        name: "AnalyticsHeader_user",
                        selections: [
                            { alias: "current_organic_metrics", args: n, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: a, storageKey: null },
                            { alias: "past_organic_metrics", args: r, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: a, storageKey: null },
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "cursor", value: "0" }],
                                concreteType: "AdvertiserAccountsSlice",
                                kind: "LinkedField",
                                name: "advertiser_accounts_by_primary_promotable_user",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "AdvertiserAccount",
                                        kind: "LinkedField",
                                        name: "items",
                                        plural: !0,
                                        selections: [
                                            { alias: "current_promoted_metrics", args: n, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: a, storageKey: null },
                                            { alias: "past_promoted_metrics", args: r, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: a, storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'advertiser_accounts_by_primary_promotable_user(cursor:"0")',
                            },
                        ],
                        type: "User",
                        abstractKey: null,
                    };
                })();
            me.hash = "f7eed48ef86509928dd80446abc41b77";
            const pe = me;
            var ge = n(286960);
            const fe = pe,
                ye = (e) => {
                    const t = C()(fe, e.userRef);
                    return b.createElement(ge.If, { metrics: t });
                },
                be = b.memo(ye);
            var _e = n(813751),
                he = n(119232),
                ke = n(301633),
                ve = n(847988),
                Ee = n(149170);
            const Ze = () => b.createElement(U.Z, { style: we.separator }),
                we = q.default.create((e) => ({ separator: { backgroundColor: e.colors.gray50, height: e.borderWidths.small } })),
                Pe = () => {
                    const { featureSwitches: e } = b.useContext(v.rC),
                        t = (0, X.z)(),
                        n = e.isTrue("professional_launchpad_upload_address_book"),
                        a = e.isTrue("professional_launchpad_mobile_promotable_timeline"),
                        r = Boolean(x.ZP.getTwitterAppVersion()),
                        l = r ? x.ZP.osString() : "web",
                        i = "Links";
                    return b.createElement(
                        U.Z,
                        { role: "list" },
                        b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: k().f53adc36, label: k().hc4981d6, link: { pathname: r ? "twitter://profile_spotlight" : "/settings/professional_profile/profile_spotlight", openInSameFrame: !0 }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "profile_spotlight", action: "click" }), role: "link", thumbnail: b.createElement(_e.default, { style: Se.actionIconsColor }) })),
                        b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: k().fbce8dbe, disabled: !n, label: k().ae76c624, link: { openInSameFrame: !0, method: "push", ...(r ? { pathname: "twitter://onboarding/flow?flow_name=make_more_connections&input_flow_data=%7B%22requested_variant%22%3A%22professionalhome-professionalHomeEnabled%22%7D" } : { pathname: "/i/flow/make_more_connections", state: { input: { requested_variant: "launchpad" } } }) }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "make_more_connections", action: "click" }), role: "link", thumbnail: b.createElement(he.default, { style: Se.actionIconsColor }) })),
                        b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: x.ZP.isIOS() ? k().ae0383d4 : k().a1dbe746, disabled: r && !a, label: x.ZP.isIOS() ? k().hbd124ae : k().hd80bd3e, link: { pathname: ee.Z.promotions }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "promotions", action: "click" }), role: "link", thumbnail: b.createElement(ke.default, { style: Se.actionIconsColor }) })),
                        b.createElement(U.Z, { "aria-hidden": !0 }, b.createElement(Ze, null)),
                        b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { description: k().fe2b0008, label: k().a35d9c9a, link: { pathname: (0, Q.ju)("https://business.x.com/"), external: !0 }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "resources", action: "click" }), role: "link", thumbnail: b.createElement(ve.default, { style: Se.actionIconsColor }) })),
                        b.createElement(U.Z, { role: "listitem" }, b.createElement(z.Z, { label: k().c46cdabc, link: { pathname: ee.Z.advancedTools }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "advanced_tools", action: "click" }), role: "link", thumbnail: b.createElement(Ee.default, { style: Se.actionIconsColor }) })),
                    );
                },
                Te = b.memo(Pe),
                Se = q.default.create((e) => ({ actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 } }));
            var Ce = (function () {
                var e = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ProfessionalHeader_user",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                        { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [e, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW", path: "legacy.verified" }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                        { alias: null, args: null, concreteType: "Professional", kind: "LinkedField", name: "professional", plural: !1, selections: [{ alias: null, args: null, concreteType: "BusinessCategory", kind: "LinkedField", name: "category", plural: !0, selections: [e], storageKey: null }], storageKey: null },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            })();
            Ce.hash = "5f1dc0571d344dd3b0342a227e2b53e4";
            const De = Ce;
            var xe = n(823161),
                Re = n(366635),
                Fe = n(731708);
            const Ie = De,
                Le = ({ userRef: e }) => {
                    const t = C()(Ie, e),
                        n = t.legacy?.profile_image_url_https ?? void 0,
                        a = t.professional?.category?.[0]?.name;
                    return b.createElement(U.Z, { "aria-level": 3, role: "heading", style: Ve.container }, b.createElement(xe.default, { hasAdaptiveImage: !0, size: "large", style: Ve.element, uri: n }), t.legacy?.name ? b.createElement(Re.Z, { isBlueVerified: !!t.is_blue_verified, isVerified: t.legacy.verified, name: t.legacy.name ?? "", nameSize: "title3", verifiedType: t.legacy.verified_type ?? void 0, weight: "heavy" }) : null, a ? b.createElement(Fe.ZP, { color: "gray700", size: "body", style: Ve.element, weight: "medium" }, a) : null);
                },
                Ke = b.memo(Le),
                Ve = q.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginVertical: `calc(${e.spaces.space16} - ${e.spaces.space2})` }, element: { marginVertical: e.spaces.space2 } })),
                Ae = ee.Z.home,
                He = k().ff1c5e1a,
                Be = k().bb081ea2,
                Ne = oe,
                Me = { pathname: "twitter://settings/professional_profile", openInSameFrame: !0 },
                Oe = { label: Be },
                je = ({ userRef: e }) => {
                    const t = (0, D.useHistory)(),
                        n = C()(Ne, e),
                        a = (0, X.z)(),
                        r = Boolean(x.ZP.getTwitterAppVersion()),
                        l = r ? x.ZP.osString() : "web";
                    a.scribePageImpression({ page: J, section: l, component: "home", action: "show" });
                    const i = b.useCallback(() => a.scribe({ page: J, section: l, component: "SettingsAppBarButton", element: "professional_profile_settings", action: "click" }), [a, l]),
                        o = b.createElement(U.Z, { style: ze.webViewHeader }, b.createElement(Ke, { userRef: n }), !x.ZP.isAndroid() && b.createElement(U.Z, { style: ze.webViewWrench }, b.createElement(se.ZP, { "aria-label": Be, hoverLabel: Oe, icon: b.createElement(W.default, null), link: Me, onPress: i, type: "primaryText" }))),
                        s = b.createElement(U.Z, { "aria-label": He, role: "region", style: ze.contentMobile }, r ? o : b.createElement(Ke, { userRef: n }), b.createElement(Ze, null), b.createElement(be, { userRef: n }), b.createElement(Ze, null), b.createElement(Te, null)),
                        c = (0, ce.yu)(),
                        u = !r && !(0, de.ZP)() && c;
                    return b.createElement(Y.Z, { backLocation: Ae, headerless: r, history: t, primaryContent: s, rightControl: r ? null : b.createElement(ue.Z, { onPress: i, to: "/settings/professional_profile" }), sidebarContent: b.createElement($.Z, null), title: u ? null : He, withBackButton: u });
                },
                Ue = b.memo(je),
                ze = q.default.create((e) => ({ contentMobile: { paddingBottom: e.spaces.space48 }, webViewHeader: { display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, webViewWrench: { marginHorizontal: e.spaces.space16, marginVertical: `calc(${e.spaces.space16} - ${e.spaces.space2})` } }));
            var Qe = n(810641),
                qe = n(912021),
                We = n(33055),
                Ge = n(750085),
                $e = n(218951);
            const Ye = (0, qe.Z)((e) => (0, $e.Z)({ timelineId: `userPromotableTweets-graphql-${e}`, formatResponse: Ge.Z, network: { getEndpoint: (e) => e.withEndpoint(We.Z).fetchUserPromotableTweets, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }, context: "FETCH_USERS_PROMOTABLE_TWEETS_TIMELINE", perfKey: "userPromotableTweetsGraphQL" })),
                Xe = ee.Z.root,
                Je = k().h257d4aa,
                et = (e) => {
                    const t = (0, D.useHistory)(),
                        n = (0, X.z)(),
                        { viewerUserId: a } = b.useContext(v.rC);
                    if (!a) return null;
                    const r = Boolean(x.ZP.getTwitterAppVersion()),
                        l = r ? x.ZP.osString() : "web";
                    n.scribePageImpression({ page: J, section: l, component: "promotable_timeline", action: "show" });
                    const i = Ye(a);
                    return b.createElement(Y.Z, { backLocation: Xe, headerless: r, history: t, primaryContent: b.createElement(U.Z, null, b.createElement(Qe.Z, { module: i, title: "promotable-tweets" })), sidebarContent: b.createElement($.Z, null), title: Je, withBackButton: !r });
                },
                tt = b.memo(et),
                nt = T,
                at = ({ userRef: e }) => {
                    const t = C()(nt, e),
                        n = b.useRef(t),
                        a = j(t),
                        r = Boolean(x.ZP.getTwitterAppVersion()),
                        l = (0, R.hC)("professional_launchpad_m1_enabled"),
                        i = b.useMemo(() => ({ pathname: "/i/flow/convert_to_professional", state: l ? { input: { requested_variant: "professionalhome-professionalHomeEnabled" } } : void 0 }), [l]);
                    return t?.professional ? b.createElement(D.Switch, null, b.createElement(D.Route, { exact: !0, path: ee.Z.root }, b.createElement(Ue, { userRef: t })), b.createElement(D.Route, { exact: !0, path: ee.Z.promotions }, b.createElement(tt, null)), b.createElement(D.Route, { exact: !0, path: ee.Z.advancedTools }, b.createElement(re, null))) : (a(), n.current?.professional ? (F.ZP.navigateTo(r ? "twitter://timeline" : "/home"), null) : b.createElement(w.Z, { to: i }));
                },
                rt = b.memo(at),
                lt = k().a0b4541c,
                it = y,
                ot = (0, E.z)(it, { errorConfig: { context: "PROFESSIONAL_HOME_SCREEN" } }),
                st = () => {
                    const { viewerUserId: e } = b.useContext(v.rC),
                        t = (0, Z.R)(),
                        [n] = b.useState(t()),
                        a = new Date(n.getTime() - 6048e5),
                        r = new Date(n.getTime() - 12096e5);
                    return e
                        ? b.createElement(ot, {
                              render: ({ data: e, fetchStatus: t, retry: n }) => {
                                  if (t === E.i.FAILED) return b.createElement(_.Z, { onRequestRetry: n, retryMessage: lt });
                                  if (t === E.i.LOADED) {
                                      const t = e?.user.result;
                                      return t ? b.createElement(rt, { userRef: t }) : b.createElement(w.Z, { to: "/home" });
                                  }
                                  return null;
                              },
                              variables: { rest_id: e, now: n.toISOString(), past7Days: a.toISOString(), past14Days: r.toISOString() },
                          })
                        : b.createElement(w.Z, { to: "/login" });
                },
                ct = b.memo(st);
        },
        206727: (e, t, n) => {
            n.d(t, { Z: () => r });
            const a = "/i/professionals",
                r = { root: a, home: "/home", promotions: `${a}/promotions`, advancedTools: `${a}/advanced-tools` };
        },
        738545: (e, t, n) => {
            n.d(t, { ZP: () => Z });
            var a = n(202784),
                r = n(325686),
                l = n(674132),
                i = n.n(l),
                o = n(212145),
                s = n(568320),
                c = n(123588),
                u = n(731708),
                d = n(280278),
                m = n(392237),
                p = n(635998);
            const g = i().i2785009,
                f = i().c778d80b,
                y = i().d9687d23,
                b = i().ac73eb5a,
                _ = i().c5a9f921,
                h = (e) => {
                    const { label: t, popover: n } = e;
                    return t ? a.createElement(r.Z, { style: E.labelBar }, a.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), n ? a.createElement(p.Z, { label: t, popover: n }) : null) : null;
                },
                k = (e) => {
                    const { style: t, unit: n } = e;
                    return n ? a.createElement(u.ZP, { color: "gray700", style: [E.unitText, t], weight: "medium" }, n) : null;
                },
                v = (e) => {
                    let t,
                        n,
                        { trendValue: l } = e;
                    return void 0 === l ? null : (Math.abs(l) < 0.1 ? ((l = Math.round(1e3 * l) / 1e3), (t = f(l))) : ((l = Math.round(100 * l) / 100), (t = g(l))), (n = ((e, t) => (e < 0 ? y({ trendValueNegativePercent: t }) : 0 === e ? b : _({ trendValuePositivePercent: t })))(l, t)), l < 0 ? a.createElement(r.Z, { style: E.trendBar, testID: "trendLabel" }, a.createElement(o.default, { "aria-label": n, style: E.trendIconNeg }), a.createElement(u.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === l ? a.createElement(r.Z, { style: E.trendBar, testID: "trendLabel" }, a.createElement(s.default, { "aria-label": n, style: E.trendIconZero }), a.createElement(u.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : a.createElement(r.Z, { style: E.trendBar, testID: "trendLabel" }, a.createElement(c.default, { "aria-label": n, style: E.trendIconPos }), a.createElement(u.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                E = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: n, label: l, popover: i, size: o, subTextList: s, trendValue: c, unit: m, value: p } = e,
                        g = m || void 0 !== c ? E.textWithMargin : void 0,
                        f = void 0 !== c ? E.textWithMargin : void 0;
                    return a.createElement(r.Z, { style: E.dataPoint }, a.createElement(h, { label: l, popover: i }), a.createElement(r.Z, { style: E.valueBar }, t ? a.createElement(d.ZP, { count: n, size: o, style: g, weight: "bold" }, p) : a.createElement(u.ZP, { size: o, style: g, weight: "bold" }, p), a.createElement(k, { style: f, unit: m }), a.createElement(v, { trendValue: c })), s);
                };
        },
        635998: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(325686),
                l = n(674132),
                i = n.n(l),
                o = n(711223),
                s = n(731708),
                c = n(154003),
                u = n(157130),
                d = n(392237);
            const m = i().affbaf62,
                p = i().c388d026,
                g = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                f = (e) => {
                    const { label: t, popover: n } = e;
                    return a.createElement(r.Z, null, a.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(r.Z, { role: "dialog", style: g.popover }, a.createElement(r.Z, { style: g.popoverTitle }, a.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), a.createElement(r.Z, { style: g.popoverText }, n), a.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, a.createElement(r.Z, { role: "button" }, a.createElement(o.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(325686),
                l = n(191796),
                i = n(58399),
                o = n(731708),
                s = n(952428),
                c = n(392237);
            const u = (e) => {
                    const { decoration: t, description: n, disabled: u = !1, isActive: m = !1, label: p, link: g, onPress: f, paddingHorizontal: y, renderRightContent: b, role: _ = "tab", styleOverride: h, testID: k = "pivot", thumbnail: v, thumbnailSize: E, withoutArrow: Z = !1 } = e,
                        w = [d.thumbnailContainer, "medium" === E && d.thumbnailContainerMedium],
                        P = "string" == typeof p ? a.createElement(o.ZP, null, p) : p,
                        T = "object" == typeof g && g.external && !g.openInSameFrame,
                        S = n ? ("string" == typeof n ? a.createElement(o.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, n) : n) : null,
                        C = a.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === _ ? m : null, disabled: u, link: u ? void 0 : g, onPress: f, role: _, style: [d.root, C, u && d.disabled, h], testID: k, withInteractiveStyling: !!g || !!f }, a.createElement(r.Z, { style: d.contentContainer }, v ? a.createElement(r.Z, { style: w }, v) : null, a.createElement(r.Z, { style: d.content }, P, S), b ? b() : null, (!g && !f) || u || Z ? null : T ? a.createElement(l.default, { style: d.icon }) : a.createElement(i.default, { style: d.icon })), t);
                },
                d = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var a = n(202784),
                r = n(325686),
                l = n(827515),
                i = n(461756),
                o = n(731708),
                s = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const a = (0, l.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...u } = e,
                        [f, y] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) y((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, l.Z)(e.count) && f.count === e.count) ? y((e) => ({ ...e, pendingCount: null, pendingText: null })) : (y((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, y));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && y((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, y));
                        }, [f.animating, f.oldText]),
                        a.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                l = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(l ? e.pre : e.active) };
                            return a.createElement(
                                r.Z,
                                { style: [g.root, n] },
                                t ? a.createElement("span", { style: s }, a.createElement(o.ZP, u, f.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, y),
                                        style: c,
                                    },
                                    a.createElement(o.ZP, u, f.text),
                                ),
                            );
                        }, [n, u, f, b, y])
                    );
                };
        },
        165822: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(325686),
                l = n(58881),
                i = n(530732),
                o = n(392237);
            const s = o.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: n, isCompact: c, link: u, lower: d, onClick: m, stackLayoutLowerStyle: p, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: y = !0, withInteractiveStyling: b = !1 }) => {
                    const _ = l.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: o.default.theme.colors.primary, insetFocusRing: y }),
                        h = a.createElement(a.Fragment, null, a.createElement(r.Z, { style: [s.defaultUpperContainerStyle, g, c && { height: "auto" }] }, f), d ? a.createElement(r.Z, { style: [s.defaultLowerContainerStyle, p] }, d) : null);
                    return a.createElement(i.Z, { "aria-label": e, disabled: n, interactive: b, interactiveStyles: b ? _ : void 0, link: u, onClick: m, style: [s.root, t] }, h);
                };
        },
        928123: (e, t, n) => {
            var a = n(606161).useTrackLoadQueryInRender,
                r = n(138239),
                l = n(303566),
                i = n(437429),
                o = n(647677),
                s = (n(202784).useDebugValue, n(703383).__internal),
                c = s.fetchQueryDeduped,
                u = s.fetchQuery;
            n(826590);
            e.exports = function (e, t, n) {
                a();
                var s,
                    d = i(),
                    m = t.fetchKey,
                    p = t.fetchPolicy,
                    g = t.source,
                    f = t.variables,
                    y = t.networkCacheConfig,
                    b = l(e, f, y);
                if ("PreloadedQuery_DEPRECATED" === t.kind)
                    b.request.node.params.name !== t.name && o(!1),
                        (s = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: m,
                            fetchObservable: c(d, b.request.identifier, function () {
                                return d === t.environment && null != g ? d.executeWithSource({ operation: b, source: g }) : d.execute({ operation: b });
                            }),
                            fetchPolicy: p,
                            query: b,
                            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
                        });
                else {
                    var _ = u(d, b);
                    s = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != g && d === t.environment ? g.ifEmpty(_) : (t.environment, _), fetchKey: m, fetchPolicy: p, query: b, renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy };
                }
                return r(s);
            };
        },
        72845: (e, t, n) => {
            var a = (0, n(171600).default)(n(638636)),
                r = n(606161),
                l = r.loadQuery,
                i = r.useTrackLoadQueryInRender,
                o = n(995402),
                s = n(437429),
                c = n(202784),
                u = c.useCallback,
                d = c.useEffect,
                m = c.useRef,
                p = c.useState,
                g = n(703383).getRequest,
                f = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== g(e).params.metadata.live;
            }
            e.exports = function (e, t) {
                var n = null != t ? t : f,
                    r = s();
                i();
                var c = o(),
                    g = m(new Set([n])),
                    b = p(function () {
                        return n;
                    }),
                    _ = b[0],
                    h = b[1],
                    k = p(function () {
                        return n;
                    }),
                    v = k[0],
                    E = k[1];
                n !== v && (g.current.add(n), E(n), h(n));
                var Z = u(
                        function () {
                            c.current && (g.current.add(f), h(f));
                        },
                        [c],
                    ),
                    w = u(
                        function (t, n) {
                            var a = null != n && n.hasOwnProperty("__environment") ? { fetchPolicy: n.fetchPolicy, networkCacheConfig: n.networkCacheConfig, __nameForWarning: n.__nameForWarning } : n;
                            if (c.current) {
                                var i,
                                    o = l(null !== (i = null == n ? void 0 : n.__environment) && void 0 !== i ? i : r, e, t, a);
                                g.current.add(o), h(o);
                            }
                        },
                        [r, e, h, c],
                    ),
                    P = m(!1);
                return (
                    d(function () {
                        return function () {
                            P.current = !0;
                        };
                    }, []),
                    d(
                        function () {
                            if (!0 === P.current) return (P.current = !1), void ("NullQueryReference" !== _.kind && w(_.variables, { fetchPolicy: _.fetchPolicy, networkCacheConfig: _.networkCacheConfig }));
                            var t = g.current;
                            if (c.current) {
                                var n,
                                    r = (0, a.default)(t);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var l = n.value;
                                        if (l === _) break;
                                        t.delete(l), "NullQueryReference" !== l.kind && (y(e) ? l.dispose && l.dispose() : l.releaseQuery && l.releaseQuery());
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                        [_, c, w, e],
                    ),
                    d(
                        function () {
                            return function () {
                                var t,
                                    n = (0, a.default)(g.current);
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var r = t.value;
                                        "NullQueryReference" !== r.kind && (y(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery());
                                    }
                                } catch (e) {
                                    n.e(e);
                                } finally {
                                    n.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === _.kind ? null : _, w, Z]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ProfessionalHome.2de7032a.js.map

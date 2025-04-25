"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ProfessionalHome"],
    {
        233935: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                r = a(154003),
                l = a(392237),
                i = a(674132),
                o = a.n(i),
                s = a(698891);
            const c = "settingsAppBar",
                d = o().bb081ea2,
                u = n.memo(({ onPress: e, pullRight: t, to: a }) => n.createElement(r.ZP, { "aria-label": d, hoverLabel: { label: d }, icon: n.createElement(s.default, null), link: a, onPress: e, pullRight: t, style: m.button, testID: c, type: "primaryText" })),
                m = l.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                p = u;
        },
        301410: (e, t, a) => {
            a.d(t, { i: () => g.ZP, z: () => _ });
            var n = a(202784),
                r = a(928123),
                l = a.n(r),
                i = a(72845),
                o = a.n(i),
                s = a(57074),
                c = a.n(s),
                d = a(516951),
                u = a(88656),
                m = a(71620),
                p = a(163889),
                g = a(312771);
            const f = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: d.Z });
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, p.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const b = ({ query: e, queryRef: t, render: a }) => {
                    const n = l()(e, t);
                    return a({ fetchStatus: g.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                _ = (e, t) =>
                    function ({ fetchPolicy: a = "store-or-network", render: r, variables: l }) {
                        const [i, s] = o()(e),
                            d = (0, m.n7)(t.errorConfig.context),
                            u = c()(l),
                            p = n.useCallback(() => {
                                s(u, { fetchPolicy: "network-only" });
                            }, [s, u]);
                        return (
                            n.useLayoutEffect(() => {
                                s(u, { fetchPolicy: a });
                            }, [a, s, u]),
                            i
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(f, { render: r }) },
                                      n.createElement(y, { errorHandler: d(t.errorConfig.options || {}), key: i.fetchKey, retry: p }, (t, a) => (t ? r({ fetchStatus: g.ZP.FAILED, error: t, data: null, retry: a }) : n.createElement(b, { query: e, queryRef: i, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        566220: (e, t, a) => {
            a.d(t, { R: () => i });
            var n = a(202784);
            const r = () => new Date(),
                l = n.createContext(r),
                i = () => n.useContext(l);
        },
        97882: (e, t, a) => {
            a.d(t, { T: () => l, x: () => i });
            var n = a(674132),
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
        286960: (e, t, a) => {
            a.d(t, { If: () => k });
            var n = a(202784),
                r = a(325686),
                l = a(731708),
                i = a(67369),
                o = a(738545),
                s = a(165822),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(97882),
                p = a(979673);
            const g = {
                    Engagements: { label: u().dbe9353e, popover: u().c23def7a },
                    Spend: { label: u().jc14a9e8, popover: u().d16b5a18, format: "currency" },
                    Impressions: { popover: u().b15df4b4, label: u().e5fe61e0 },
                    EngagementRate: {
                        label: u().e623137c,
                        popover: u().d9d34182,
                        calculate: (e, t) => {
                            const a = t("Engagements"),
                                n = t("Impressions");
                            return { current: (a.current ?? 0) / (n.current ?? 1), past: (a.past ?? 0) / (n.past ?? 1) };
                        },
                        format: "percent",
                    },
                    ProfileVisits: { label: u().aeee0182, popover: u().b2bde01a },
                    LinkClicks: { label: u().d5f1e554, popover: u().cf573986 },
                    Follows: { label: u().j761451e, popover: u().e1a87d14 },
                    Replies: { label: u().jdceda60, popover: u().j590577e },
                    Likes: { label: u().d7b8ebaa, popover: u().ia1da622 },
                    Retweets: { label: u().ja42739e, popover: u().ca6e8de0 },
                    VideoViews: { label: u().b1b4d57e, popover: u().bdaf100e },
                    MediaViews: { label: u().ca826772, popover: u().j43b8f52 },
                    CompletionRate: {
                        label: u().d3969c06,
                        popover: u().c58c3476,
                        calculate: (e, t) => {
                            const a = t("VideoCompletions"),
                                n = t("VideoViews");
                            return { current: (a.current ?? 0) / (n.current ?? 1), past: (a.past ?? 0) / (n.past ?? 1) };
                        },
                        format: "percent",
                    },
                },
                f = u().c778d80b,
                y = u().g01559c6;
            function b(e, t, a) {
                const n = t?.find((t) => t.metric_type === e),
                    r = a?.find((t) => t.metric_type === e),
                    l = n?.metric_value ?? 0,
                    i = r?.metric_value ?? 0;
                return { metric_type: e, organic_value: l, promoted_value: i, total_value: l + i, metadata: { currency_code: r?.currency_code } };
            }
            function _(e, t) {
                if (t && 0 !== t) return (e - t) / t;
            }
            const k = (e) => {
                    const { metrics: t, showTimeMessage: a = !0, showTrend: c = !0 } = e,
                        d = (0, i.LX)();
                    if (!t) return null;
                    const u = e.metricsKeysToRender ?? ["Impressions", "EngagementRate", "ProfileVisits", "LinkClicks"],
                        k = t.current_organic_metrics,
                        E = t.past_organic_metrics,
                        v = t.advertiser_accounts_by_primary_promotable_user?.items[0].current_promoted_metrics,
                        Z = t.advertiser_accounts_by_primary_promotable_user?.items[0].past_promoted_metrics,
                        w = (e) => {
                            const t = b(e, k, v ?? []),
                                a = b(e, E, Z ?? []);
                            return { current: t.total_value, past: a.total_value, metadata: t.metadata };
                        };
                    function P(e) {
                        const a = g[e];
                        if (!a) return;
                        const { current: i, metadata: s, past: d } = a.calculate ? a.calculate(t, w) : w(e),
                            u = isFinite(i) && !isNaN(i),
                            y = u && isFinite(d) && !isNaN(d) && c,
                            b = "percent" === a.format ? f(i ?? 0) : "currency" === a.format && s?.currency_code ? (0, m.x)({ amount: i, currencyCode: s.currency_code, formatter: 1, removeTrailingZeros: !0 }) : (0, p.fV)(i, 1e4);
                        return n.createElement(o.ZP, { animated: !0, count: i ?? 0, key: e, label: a.label, popover: ((k = a.popover), n.createElement(r.Z, null, n.createElement(l.ZP, { color: "gray700", size: "body", weight: "normal" }, k))), size: "title2", trendValue: y ? (_(i, d) ?? void 0) : void 0, value: u ? b : "-" });
                        var k;
                    }
                    return n.createElement(
                        r.Z,
                        null,
                        n.createElement(
                            r.Z,
                            { style: d ? h.gridMobile : h.gridDesktop },
                            u.map((e) => n.createElement(s.Z, { "aria-label": e, key: e, upper: n.createElement(r.Z, { style: h.tile }, P(e)) })),
                        ),
                        a && n.createElement(l.ZP, { color: "gray700", size: "subtext3" }, y),
                    );
                },
                h = c.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: e.spaces.space8, rowGap: e.spaces.space2 };
                    return { root: { padding: e.spaces.space16 }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, tile: { backgroundColor: e.colors.gray0, flexGrow: 1, justifyContent: "center", paddingStart: e.spaces.space16 } };
                });
        },
        979673: (e, t, a) => {
            a.d(t, { LU: () => o, Qy: () => u, fV: () => d, jf: () => c });
            var n = a(674132),
                r = a.n(n);
            const l = r().ja781451,
                i = r().cfa1a7b9,
                o = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function s(e) {
                return e || 0;
            }
            function c(e, t) {
                const a = s(t);
                return 0 === a ? 0 : s(e) / a;
            }
            function d(e, t = 1e5) {
                const a = s(e);
                return a >= t ? i(a) : l(a);
            }
            function u(e, t, a) {
                const n = t?.find((t) => t.metric_type === e),
                    r = a?.find((t) => t.metric_type === e),
                    l = n?.metric_value ?? 0,
                    i = r?.metric_value ?? 0;
                return { metric_type: e, organic_value: l, promoted_value: i, total_value: l + i };
            }
        },
        280375: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ct, professionalHomeQuery: () => it });
            var n,
                r,
                l,
                i,
                o,
                s,
                c,
                d,
                u,
                m,
                p,
                g,
                f = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "now" }), (r = { defaultValue: null, kind: "LocalArgument", name: "past14Days" }), (l = { defaultValue: null, kind: "LocalArgument", name: "past7Days" }), (i = { defaultValue: null, kind: "LocalArgument", name: "rest_id" })],
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
                        argumentDefinitions: [i, n, l, r],
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
                                                        args: (m = [{ fields: (d = [{ kind: "Variable", name: "iso8601_time", variableName: "past7Days" }]), kind: "ObjectValue", name: "from_time" }, (u = { kind: "Literal", name: "requested_metrics", value: ["Engagements", "Impressions", "LinkClicks", "ProfileVisits"] }), { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "now" }], kind: "ObjectValue", name: "to_time" }]),
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
                                                    { alias: "past_organic_metrics", args: (g = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "past14Days" }], kind: "ObjectValue", name: "from_time" }, u, { fields: d, kind: "ObjectValue", name: "to_time" }]), concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: p, storageKey: null },
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
            var b = a(202784),
                _ = (a(585488), a(750410)),
                k = a(674132),
                h = a.n(k),
                E = a(443781),
                v = a(301410),
                Z = a(566220),
                w = a(615027),
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
            var S = a(277660),
                C = a.n(S),
                x = a(107267),
                D = a(323265),
                F = a(952793),
                I = a(782826),
                L = { kind: "InlineDataFragment", name: "invalidateProfessionalHomeUser_user", hash: "c4c066fd92866d7a3ce5ca16f23dc15f" };
            const K = L;
            var R = a(53647),
                V = a.n(R),
                A = a(437429),
                H = a.n(A),
                B = a(990242),
                M = a.n(B);
            const j = K,
                N = (e, t) => {
                    const a = ((e) => {
                        const { __id: t } = M()(j, e);
                        return t;
                    })(t);
                    return e.get(a);
                },
                z = (e) => {
                    const t = H()();
                    return b.useCallback(() => {
                        V()(t, (t) => {
                            ((e, t) => {
                                const a = N(e, t);
                                a?.invalidateRecord();
                            })(t, e);
                        });
                    }, [t, e]);
                };
            var O = a(325686),
                U = a(779610),
                q = a(688715),
                G = a(392237),
                W = a(698891),
                $ = a(175564),
                Q = a(718e3),
                Y = a(252021),
                X = a(725516);
            const J = "professional_home";
            var ee = a(206727);
            const te = ee.Z.root,
                ae = h().c46cdabc,
                ne = () => {
                    const e = (0, x.useHistory)(),
                        t = (0, X.z)(),
                        a = Boolean(D.ZP.getTwitterAppVersion()),
                        n = a ? D.ZP.osString() : "web";
                    t.scribePageImpression({ page: J, section: n, component: "advanced_tools", action: "show" });
                    return b.createElement(Y.Z, { backLocation: te, headerless: a, history: e, primaryContent: b.createElement(O.Z, { role: "list" }, b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: h().f6a2233a, disabled: !0, label: h().ccb3ca48, link: { pathname: "dummy" }, role: "link", thumbnail: b.createElement(W.default, { style: le.actionIconsColor }) })), b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: h().b0ef3100, label: h().e0cb0c72, link: { pathname: (0, q.ju)("https://ads.x.com/"), external: !0 }, onPress: () => t.scribe({ page: J, section: "advanced_tools", element: "twitter_ads", action: "click" }), role: "link", thumbnail: b.createElement($.default, { style: le.actionIconsColor }) }))), sidebarContent: b.createElement(Q.Z, null), title: ae, withBackButton: !a });
                },
                re = b.memo(ne),
                le = G.default.create((e) => ({ actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 } }));
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
            var se = a(154003),
                ce = a(67369),
                de = a(233935),
                ue = a(655352),
                me = (function () {
                    var e = [{ kind: "Variable", name: "iso8601_time", variableName: "past7Days" }],
                        t = { kind: "Literal", name: "requested_metrics", value: ["Engagements", "Impressions", "LinkClicks", "ProfileVisits"] },
                        a = [{ fields: e, kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "now" }], kind: "ObjectValue", name: "to_time" }],
                        n = [
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
                            { alias: "current_organic_metrics", args: a, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: n, storageKey: null },
                            { alias: "past_organic_metrics", args: r, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: n, storageKey: null },
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
                                            { alias: "current_promoted_metrics", args: a, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: n, storageKey: null },
                                            { alias: "past_promoted_metrics", args: r, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: n, storageKey: null },
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
            var ge = a(286960);
            const fe = pe,
                ye = (e) => {
                    const t = C()(fe, e.userRef);
                    return b.createElement(ge.If, { metrics: t });
                },
                be = b.memo(ye);
            var _e = a(813751),
                ke = a(119232),
                he = a(301633),
                Ee = a(847988),
                ve = a(149170);
            const Ze = () => b.createElement(O.Z, { style: we.separator }),
                we = G.default.create((e) => ({ separator: { backgroundColor: e.colors.gray50, height: e.borderWidths.small } })),
                Pe = () => {
                    const { featureSwitches: e } = b.useContext(E.rC),
                        t = (0, X.z)(),
                        a = e.isTrue("professional_launchpad_upload_address_book"),
                        n = e.isTrue("professional_launchpad_mobile_promotable_timeline"),
                        r = Boolean(D.ZP.getTwitterAppVersion()),
                        l = r ? D.ZP.osString() : "web",
                        i = "Links";
                    return b.createElement(
                        O.Z,
                        { role: "list" },
                        b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: h().f53adc36, label: h().hc4981d6, link: { pathname: r ? "twitter://profile_spotlight" : "/settings/professional_profile/profile_spotlight", openInSameFrame: !0 }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "profile_spotlight", action: "click" }), role: "link", thumbnail: b.createElement(_e.default, { style: Se.actionIconsColor }) })),
                        b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: h().fbce8dbe, disabled: !a, label: h().ae76c624, link: { openInSameFrame: !0, method: "push", ...(r ? { pathname: "twitter://onboarding/flow?flow_name=make_more_connections&input_flow_data=%7B%22requested_variant%22%3A%22professionalhome-professionalHomeEnabled%22%7D" } : { pathname: "/i/flow/make_more_connections", state: { input: { requested_variant: "launchpad" } } }) }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "make_more_connections", action: "click" }), role: "link", thumbnail: b.createElement(ke.default, { style: Se.actionIconsColor }) })),
                        b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: D.ZP.isIOS() ? h().ae0383d4 : h().a1dbe746, disabled: r && !n, label: D.ZP.isIOS() ? h().hbd124ae : h().hd80bd3e, link: { pathname: ee.Z.promotions }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "promotions", action: "click" }), role: "link", thumbnail: b.createElement(he.default, { style: Se.actionIconsColor }) })),
                        b.createElement(O.Z, { "aria-hidden": !0 }, b.createElement(Ze, null)),
                        b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { description: h().fe2b0008, label: h().a35d9c9a, link: { pathname: (0, q.ju)("https://business.x.com/"), external: !0 }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "resources", action: "click" }), role: "link", thumbnail: b.createElement(Ee.default, { style: Se.actionIconsColor }) })),
                        b.createElement(O.Z, { role: "listitem" }, b.createElement(U.Z, { label: h().c46cdabc, link: { pathname: ee.Z.advancedTools }, onPress: () => t.scribe({ page: J, section: l, component: i, element: "advanced_tools", action: "click" }), role: "link", thumbnail: b.createElement(ve.default, { style: Se.actionIconsColor }) })),
                    );
                },
                Te = b.memo(Pe),
                Se = G.default.create((e) => ({ actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 } }));
            var Ce = (function () {
                var e = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ProfessionalHeader_user",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                        { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [e, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, action: "THROW" }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                        { alias: null, args: null, concreteType: "Professional", kind: "LinkedField", name: "professional", plural: !1, selections: [{ alias: null, args: null, concreteType: "BusinessCategory", kind: "LinkedField", name: "category", plural: !0, selections: [e], storageKey: null }], storageKey: null },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            })();
            Ce.hash = "5f1dc0571d344dd3b0342a227e2b53e4";
            const xe = Ce;
            var De = a(823161),
                Fe = a(366635),
                Ie = a(731708);
            const Le = xe,
                Ke = ({ userRef: e }) => {
                    const t = C()(Le, e),
                        a = t.legacy?.profile_image_url_https ?? void 0,
                        n = t.professional?.category?.[0]?.name;
                    return b.createElement(O.Z, { "aria-level": 3, role: "heading", style: Ve.container }, b.createElement(De.default, { hasAdaptiveImage: !0, size: "large", style: Ve.element, uri: a }), t.legacy?.name ? b.createElement(Fe.Z, { isBlueVerified: !!t.is_blue_verified, isVerified: t.legacy.verified, name: t.legacy.name ?? "", nameSize: "title3", verifiedType: t.legacy.verified_type ?? void 0, weight: "heavy" }) : null, n ? b.createElement(Ie.ZP, { color: "gray700", size: "body", style: Ve.element, weight: "medium" }, n) : null);
                },
                Re = b.memo(Ke),
                Ve = G.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginVertical: `calc(${e.spaces.space16} - ${e.spaces.space2})` }, element: { marginVertical: e.spaces.space2 } })),
                Ae = ee.Z.home,
                He = h().ff1c5e1a,
                Be = h().bb081ea2,
                Me = oe,
                je = { pathname: "twitter://settings/professional_profile", openInSameFrame: !0 },
                Ne = { label: Be },
                ze = ({ userRef: e }) => {
                    const t = (0, x.useHistory)(),
                        a = C()(Me, e),
                        n = (0, X.z)(),
                        r = Boolean(D.ZP.getTwitterAppVersion()),
                        l = r ? D.ZP.osString() : "web";
                    n.scribePageImpression({ page: J, section: l, component: "home", action: "show" });
                    const i = b.useCallback(() => n.scribe({ page: J, section: l, component: "SettingsAppBarButton", element: "professional_profile_settings", action: "click" }), [n, l]),
                        o = b.createElement(O.Z, { style: Ue.webViewHeader }, b.createElement(Re, { userRef: a }), !D.ZP.isAndroid() && b.createElement(O.Z, { style: Ue.webViewWrench }, b.createElement(se.ZP, { "aria-label": Be, hoverLabel: Ne, icon: b.createElement(W.default, null), link: je, onPress: i, type: "primaryText" }))),
                        s = b.createElement(O.Z, { "aria-label": He, role: "region", style: Ue.contentMobile }, r ? o : b.createElement(Re, { userRef: a }), b.createElement(Ze, null), b.createElement(be, { userRef: a }), b.createElement(Ze, null), b.createElement(Te, null)),
                        c = (0, ce.yu)(),
                        d = !r && !(0, ue.ZP)() && c;
                    return b.createElement(Y.Z, { backLocation: Ae, headerless: r, history: t, primaryContent: s, rightControl: r ? null : b.createElement(de.Z, { onPress: i, to: "/settings/professional_profile" }), sidebarContent: b.createElement(Q.Z, null), title: d ? null : He, withBackButton: d });
                },
                Oe = b.memo(ze),
                Ue = G.default.create((e) => ({ contentMobile: { paddingBottom: e.spaces.space48 }, webViewHeader: { display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, webViewWrench: { marginHorizontal: e.spaces.space16, marginVertical: `calc(${e.spaces.space16} - ${e.spaces.space2})` } }));
            var qe = a(810641),
                Ge = a(912021),
                We = a(33055),
                $e = a(750085),
                Qe = a(218951);
            const Ye = (0, Ge.Z)((e) => (0, Qe.Z)({ timelineId: `userPromotableTweets-graphql-${e}`, formatResponse: $e.Z, network: { getEndpoint: (e) => e.withEndpoint(We.Z).fetchUserPromotableTweets, getEndpointParams: ({ count: t, cursor: a }) => ({ count: t, cursor: "string" == typeof a ? a : void 0, userId: e }) }, context: "FETCH_USERS_PROMOTABLE_TWEETS_TIMELINE", perfKey: "userPromotableTweetsGraphQL" })),
                Xe = ee.Z.root,
                Je = h().h257d4aa,
                et = (e) => {
                    const t = (0, x.useHistory)(),
                        a = (0, X.z)(),
                        { viewerUserId: n } = b.useContext(E.rC);
                    if (!n) return null;
                    const r = Boolean(D.ZP.getTwitterAppVersion()),
                        l = r ? D.ZP.osString() : "web";
                    a.scribePageImpression({ page: J, section: l, component: "promotable_timeline", action: "show" });
                    const i = Ye(n);
                    return b.createElement(Y.Z, { backLocation: Xe, headerless: r, history: t, primaryContent: b.createElement(O.Z, null, b.createElement(qe.Z, { module: i, title: "promotable-tweets" })), sidebarContent: b.createElement(Q.Z, null), title: Je, withBackButton: !r });
                },
                tt = b.memo(et),
                at = T,
                nt = ({ userRef: e }) => {
                    const t = C()(at, e),
                        a = b.useRef(t),
                        n = z(t),
                        r = Boolean(D.ZP.getTwitterAppVersion()),
                        l = (0, F.hC)("professional_launchpad_m1_enabled"),
                        i = b.useMemo(() => ({ pathname: "/i/flow/convert_to_professional", state: l ? { input: { requested_variant: "professionalhome-professionalHomeEnabled" } } : void 0 }), [l]);
                    return t?.professional ? b.createElement(x.Switch, null, b.createElement(x.Route, { exact: !0, path: ee.Z.root }, b.createElement(Oe, { userRef: t })), b.createElement(x.Route, { exact: !0, path: ee.Z.promotions }, b.createElement(tt, null)), b.createElement(x.Route, { exact: !0, path: ee.Z.advancedTools }, b.createElement(re, null))) : (n(), a.current?.professional ? (I.ZP.navigateTo(r ? "twitter://timeline" : "/home"), null) : b.createElement(w.Z, { to: i }));
                },
                rt = b.memo(nt),
                lt = h().a0b4541c,
                it = y,
                ot = (0, v.z)(it, { errorConfig: { context: "PROFESSIONAL_HOME_SCREEN" } }),
                st = () => {
                    const { viewerUserId: e } = b.useContext(E.rC),
                        t = (0, Z.R)(),
                        [a] = b.useState(t()),
                        n = new Date(a.getTime() - 6048e5),
                        r = new Date(a.getTime() - 12096e5);
                    return e
                        ? b.createElement(ot, {
                              render: ({ data: e, fetchStatus: t, retry: a }) => {
                                  if (t === v.i.FAILED) return b.createElement(_.Z, { onRequestRetry: a, retryMessage: lt });
                                  if (t === v.i.LOADED) {
                                      const t = e?.user.result;
                                      return t ? b.createElement(rt, { userRef: t }) : b.createElement(w.Z, { to: "/home" });
                                  }
                                  return null;
                              },
                              variables: { rest_id: e, now: a.toISOString(), past7Days: n.toISOString(), past14Days: r.toISOString() },
                          })
                        : b.createElement(w.Z, { to: "/login" });
                },
                ct = b.memo(st);
        },
        206727: (e, t, a) => {
            a.d(t, { Z: () => r });
            const n = "/i/professionals",
                r = { root: n, home: "/home", promotions: `${n}/promotions`, advancedTools: `${n}/advanced-tools` };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => Z });
            var n = a(202784),
                r = a(325686),
                l = a(674132),
                i = a.n(l),
                o = a(212145),
                s = a(568320),
                c = a(123588),
                d = a(731708),
                u = a(280278),
                m = a(392237),
                p = a(635998);
            const g = i().i2785009,
                f = i().c778d80b,
                y = i().d9687d23,
                b = i().ac73eb5a,
                _ = i().c5a9f921,
                k = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? n.createElement(r.Z, { style: v.labelBar }, n.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? n.createElement(p.Z, { label: t, popover: a }) : null) : null;
                },
                h = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? n.createElement(d.ZP, { color: "gray700", style: [v.unitText, t], weight: "medium" }, a) : null;
                },
                E = (e) => {
                    let t,
                        a,
                        { trendValue: l } = e;
                    return void 0 === l ? null : (Math.abs(l) < 0.1 ? ((l = Math.round(1e3 * l) / 1e3), (t = f(l))) : ((l = Math.round(100 * l) / 100), (t = g(l))), (a = ((e, t) => (e < 0 ? y({ trendValueNegativePercent: t }) : 0 === e ? b : _({ trendValuePositivePercent: t })))(l, t)), l < 0 ? n.createElement(r.Z, { style: v.trendBar, testID: "trendLabel" }, n.createElement(o.default, { "aria-label": a, style: v.trendIconNeg }), n.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === l ? n.createElement(r.Z, { style: v.trendBar, testID: "trendLabel" }, n.createElement(s.default, { "aria-label": a, style: v.trendIconZero }), n.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : n.createElement(r.Z, { style: v.trendBar, testID: "trendLabel" }, n.createElement(c.default, { "aria-label": a, style: v.trendIconPos }), n.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                v = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: a, label: l, popover: i, size: o, subTextList: s, trendValue: c, unit: m, value: p } = e,
                        g = m || void 0 !== c ? v.textWithMargin : void 0,
                        f = void 0 !== c ? v.textWithMargin : void 0;
                    return n.createElement(r.Z, { style: v.dataPoint }, n.createElement(k, { label: l, popover: i }), n.createElement(r.Z, { style: v.valueBar }, t ? n.createElement(u.ZP, { count: a, size: o, style: g, weight: "bold" }, p) : n.createElement(d.ZP, { size: o, style: g, weight: "bold" }, p), n.createElement(h, { style: f, unit: m }), n.createElement(E, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                r = a(325686),
                l = a(674132),
                i = a.n(l),
                o = a(711223),
                s = a(731708),
                c = a(154003),
                d = a(157130),
                u = a(392237);
            const m = i().affbaf62,
                p = i().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                f = (e) => {
                    const { label: t, popover: a } = e;
                    return n.createElement(r.Z, null, n.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => n.createElement(r.Z, { role: "dialog", style: g.popover }, n.createElement(r.Z, { style: g.popoverTitle }, n.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), n.createElement(r.Z, { style: g.popoverText }, a), n.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, n.createElement(r.Z, { role: "button" }, n.createElement(o.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        779610: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                r = a(325686),
                l = a(191796),
                i = a(58399),
                o = a(731708),
                s = a(952428),
                c = a(392237);
            const d = (e) => {
                    const { decoration: t, description: a, disabled: d = !1, isActive: m = !1, label: p, link: g, onPress: f, paddingHorizontal: y, renderRightContent: b, role: _ = "tab", styleOverride: k, testID: h = "pivot", thumbnail: E, thumbnailSize: v, withoutArrow: Z = !1 } = e,
                        w = [u.thumbnailContainer, "medium" === v && u.thumbnailContainerMedium],
                        P = "string" == typeof p ? n.createElement(o.ZP, null, p) : p,
                        T = "object" == typeof g && g.external && !g.openInSameFrame,
                        S = a ? ("string" == typeof a ? n.createElement(o.ZP, { color: "gray700", size: "subtext2", testID: `${h}-description` }, a) : a) : null,
                        C = n.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === _ ? m : null, disabled: d, link: d ? void 0 : g, onPress: f, role: _, style: [u.root, C, d && u.disabled, k], testID: h, withInteractiveStyling: !!g || !!f }, n.createElement(r.Z, { style: u.contentContainer }, E ? n.createElement(r.Z, { style: w }, E) : null, n.createElement(r.Z, { style: u.content }, P, S), b ? b() : null, (!g && !f) || d || Z ? null : T ? n.createElement(l.default, { style: u.icon }) : n.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, a) => {
            a.d(t, { ZP: () => f });
            var n = a(202784),
                r = a(325686),
                l = a(827515),
                i = a(461756),
                o = a(731708),
                s = a(392237);
            const c = "up",
                d = "down",
                u = (e, t, a) => {
                    a((a) => {
                        const n = (0, l.Z)(e) ? (e > (a.count || 0) ? c : d) : c;
                        return { ...a, count: e, oldText: a.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: a, count: s, ...d } = e,
                        [f, y] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                if (i.Z.reducedMotionEnabled) y((a) => ({ ...a, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, l.Z)(e.count) && f.count === e.count) ? y((e) => ({ ...e, pendingCount: null, pendingText: null })) : (y((a) => ({ ...a, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, y));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && y((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, y));
                        }, [f.animating, f.oldText]),
                        n.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                l = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(l ? e.pre : e.active) };
                            return n.createElement(
                                r.Z,
                                { style: [g.root, a] },
                                t ? n.createElement("span", { style: s }, n.createElement(o.ZP, d, f.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, y),
                                        style: c,
                                    },
                                    n.createElement(o.ZP, d, f.text),
                                ),
                            );
                        }, [a, d, f, b, y])
                    );
                };
        },
        165822: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                r = a(325686),
                l = a(58881),
                i = a(530732),
                o = a(392237);
            const s = o.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: a, isCompact: c, link: d, lower: u, onClick: m, stackLayoutLowerStyle: p, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: y = !0, withInteractiveStyling: b = !1 }) => {
                    const _ = l.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: o.default.theme.colors.primary, insetFocusRing: y }),
                        k = n.createElement(n.Fragment, null, n.createElement(r.Z, { style: [s.defaultUpperContainerStyle, g, c && { height: "auto" }] }, f), u ? n.createElement(r.Z, { style: [s.defaultLowerContainerStyle, p] }, u) : null);
                    return n.createElement(i.Z, { "aria-label": e, disabled: a, interactive: b, interactiveStyles: b ? _ : void 0, link: d, onClick: m, style: [s.root, t] }, k);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ProfessionalHome.bfd7bf2a.js.map

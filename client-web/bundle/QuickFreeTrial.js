"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.QuickFreeTrial"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => m });
            var n = a(202784),
                i = a(614983),
                r = a.n(i),
                l = a(325686),
                o = a(370006),
                s = a(786998),
                c = a(929028),
                d = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: i, hideBackButton: r, isFullWidth: l, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: y, style: k, subtitle: h, title: f, titleDomId: b, titleIconCell: _, titleIconCellSize: S, withBackground: w, withWideContainer: T } = this.props,
                        { isModal: E } = this.context,
                        v = r ? d : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        F = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!w, E, !!y);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: l, isLarge: c, leftControl: v, middleControl: m, position: u(p, E, i), rightControl: g, style: k, subtitle: h, title: f, titleDomId: b, titleIconCell: _, titleIconCellSize: S, withBackground: F, withWideContainer: T }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => y, w: () => p });
            var n = a(202784),
                i = a(325686),
                r = a(108362),
                l = a(386802),
                o = a(392237),
                s = a(652904),
                c = a(555079),
                d = a(625661),
                u = a(449067),
                m = a(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: r, centerTitle: l, hideBackButton: o, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, rightControl: k, secondaryBar: h, subtitle: f, title: b } = this.props,
                                { isModal: _ } = this.context;
                            return n.createElement(i.Z, { style: _ ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(d.ZP, { backButtonType: a || (_ ? "close" : "back"), backLocation: r, centerTitle: l, fixed: !_, hideBackButton: o, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, ref: e, rightControl: k, secondaryBar: h, style: [_ && g.appBarModal, t], subtitle: f, title: b, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: l, documentTitle: o, isFullWidth: c, isLarge: d, renderHeader: p, title: y, withoutBottomBarMobile: k } = this.props,
                        { isModal: h } = this.context,
                        f = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: o, headerless: !0, title: y }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, h && g.rootModal] }, !h && f, n.createElement(r.Z, { isFullWidth: c, isLarge: d, style: [g.container, h && g.containerModal, l] }, h ? n.createElement(m.Z, { style: g.viewport }, f, a) : a), t ? n.createElement(i.Z, { style: [g.bottomBarModal, !h && !k && g.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = l.Z);
            const g = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = p;
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                i = a(500002),
                r = a(668214),
                l = a(997174),
                o = a(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: r, search: l },
                            locationKey: o,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = i || o;
                    ((c && i !== o) || (!c && a !== r) || n !== l || s) && this._performPageUpdates(this.props);
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
            const d = (0, i.ZP)(s(c));
        },
        482924: (e, t, a) => {
            a.d(t, { A: () => p });
            var n = a(202784),
                i = a(437429),
                r = a.n(i),
                l = a(57074),
                o = a.n(l),
                s = a(10622),
                c = a.n(s),
                d = a(71620),
                u = a(312771),
                m = a(535338);
            function p(e, t, a) {
                const i = o()(t),
                    l = o()(a),
                    s = r()(),
                    p = (0, d.po)(),
                    [g, y] = n.useState(null),
                    [k, h] = n.useState(!1),
                    f = n.useCallback(() => {
                        k ||
                            (h(!0),
                            c()(s, e, i, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    h(!1);
                                },
                                error: (e) => {
                                    p(e), h(!1), y(e);
                                },
                            }));
                    }, [s, p, e, k, i, l]),
                    b = (0, m.p)(e, t, a);
                return n.useMemo(() => (g ? { data: b, refetch: f, refetchStatus: u.ZP.FAILED, refetchError: g } : { data: b, refetch: f, refetchStatus: k ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [b, g, k, f]);
            }
        },
        665979: (e, t, a) => {
            a.d(t, { F1: () => p, HM: () => k, Jl: () => u, VS: () => s, YR: () => g, b7: () => r, uf: () => m, xP: () => y, zv: () => c });
            a(130724), a(106406);
            var n = a(111677),
                i = a.n(n);
            const r = (e, t = 0) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + t)),
                l = (e, t = 0) => {
                    const a = e.getUTCDay(),
                        n = new Date(e),
                        i = 7 * t - a;
                    return n.setUTCDate(e.getUTCDate() + i), n.setUTCHours(0, 0, 0, 0), n;
                },
                o = (e) => {
                    const t = new Date(e);
                    return t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0), t;
                },
                s = (e, t) => {
                    const a = Math.abs(t.getTime() - e.getTime());
                    return Math.ceil(a / 864e5);
                },
                c = (e, t) => {
                    if (!e) return {};
                    let a = {};
                    const n = Object.keys(e)[0] || new Date().toISOString(),
                        i = Object.keys(e).at(-1) || new Date().toISOString();
                    for (const s in e) {
                        const c = new Date(s),
                            d = (() => ("daily" === t ? r(c).toISOString() : "weekly" === t ? (l(c).getTime() < new Date(n).getTime() ? new Date(n).toISOString() : l(c).toISOString()) : o(c).toISOString()))();
                        a[d] || (a = { ...a, [d]: { metrics: {}, fromTime: d, toTime: "daily" === t ? r(c, 1).toISOString() : l(c, 1).getTime() > new Date(i).getTime() ? new Date(i).toISOString() : l(c, 1).toISOString() } });
                        const u = e[s]?.metrics;
                        for (const e in u) a[d] && !a[d]?.metrics[e] && (a[d].metrics[e] = 0), a[d] && (a[d].metrics[e] += u[e]);
                    }
                    return a;
                },
                d = (e, t, a, n) => {
                    let i = {};
                    for (let r = new Date(e); r < new Date(t); r.setUTCDate(r.getUTCDate() + 1)) {
                        const e = r.toISOString(),
                            t = new Date(r);
                        t.setUTCDate(t.getUTCDate() + 1), (i = { ...i, [e]: { metrics: a.reduce((t, a) => ({ ...t, [a]: n[e]?.metrics[a] || 0 }), {}), fromTime: e, toTime: t.toISOString() } });
                    }
                    return i;
                },
                u = (e, t, a, n, i) => {
                    const l =
                        e.result.result?.organic_metrics_time_series?.reduce((e, t) => {
                            const a = r(new Date(t.timestamp.iso8601_time)).toISOString();
                            return { ...e, [a]: t.metric_values.reduce((t, n) => ({ ...t, metrics: { ...t.metrics, [String(n.metric_type)]: (t[String(n.metric_type)] || 0) + (n.metric_value || 0) + (e[a]?.metrics?.[String(n.metric_type)] || 0) } }), { metrics: {}, fromTime: "", toTime: "" }) };
                        }, {}) || null;
                    if (!l) return { metricsList: null, compareData: null };
                    return { metricsList: d(a, t, i, l), compareData: n ? d(n, a, i, l) : null };
                },
                m = (e) => {
                    let t = e;
                    const a = ["", "K", "M", "B", "T"];
                    let n = 0;
                    for (; t >= 1e3 && n < a.length - 1; ) (t /= 1e3), n++;
                    const i = Math.round(10 * t) / 10;
                    return i % 1 == 0 ? `${i}${a[n]}` : `${i.toFixed(1)}${a[n]}`;
                },
                p = (e) => {
                    const t = e.getTimezoneOffset();
                    return new Date(e.getTime() + 6e4 * t);
                },
                g = (e, t) => {
                    const a = new Date(e.fromTime);
                    let n = new Date(e.toTime);
                    const o = s(a, n);
                    n = l(a).getTime() === a.getTime() && 7 !== o ? r(n) : r(n, -1);
                    const c = i().jade381b,
                        d = i().ccaa970f,
                        u = i().a20c68af;
                    switch (t) {
                        case "daily":
                            return c(p(a));
                        case "weekly":
                            if (!n || n.getTime() <= a.getTime()) return c(p(a));
                            return `${d(p(a))} - ${c(p(n))}`;
                        case "monthly":
                            return u(p(a));
                        default:
                            return "";
                    }
                };
            const y = (e, t = 4) => {
                    const a = ((e, t) => {
                        const a = e.toString();
                        if (a.length <= 2)
                            return ((e, t) => {
                                let a = e + 1;
                                for (; a % t != 0; ) a += 1;
                                return a;
                            })(e, t);
                        let n = parseInt(a[0], 10),
                            i = parseInt(a[1], 10);
                        return (i = 2 * Math.ceil((i + 1) / 2)), i >= 10 && ((n += 1), (i = 0)), +(n.toString() + i.toString() + "0".repeat(a.length - 2));
                    })(e, t);
                    return (function (e, t) {
                        const a = e / t;
                        return Array.from({ length: t + 1 }, (e, t) => t * a);
                    })(a, t);
                },
                k = (e, t, a) => {
                    let n = {};
                    return e
                        ? (Object.entries(e).forEach(([e, i]) => {
                              const r = t.reduce((e, t) => e + (i?.metrics?.[t] || 0), 0);
                              n = { ...n, [e]: { ...i, metrics: { ...i?.metrics, [a]: r } } };
                          }),
                          n)
                        : e;
                };
        },
        328146: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Me });
            var n = a(807896),
                i = a(202784),
                r = a(325686),
                l = a(167630),
                o = a(392237),
                s = a(980407),
                c = a(736063),
                d = a(4452),
                u = a(293115),
                m = a(725405),
                p = a(107267),
                g = a(67369),
                y = a(731708),
                k = a(154003),
                h = a(111677),
                f = a.n(h),
                b = a(187669),
                _ = a(323265),
                S = a(727828),
                w = a(665979);
            const T = f().cc10f019,
                E = f().f9b6b7d3,
                v = f().a9af8753,
                F = f().b93d00e5,
                B = (e) => {
                    const t = Math.floor((e ?? 0) / 60);
                    if (t < 60) return T({ minutes: t });
                    const a = Math.floor(t / 60);
                    if (t < 1440) return E({ hours: a });
                    const n = Math.floor(a / 24),
                        i = a - 24 * n;
                    return n > 2 ? F({ days: n }) : v({ days: n, hours: i });
                },
                C = ({ durationInDays: e, estimatedViewCount: t, estimatedViewTimeSeconds: a }) => {
                    const n = ((a ?? 0) / e) * 365;
                    return { viewCount: (0, w.uf)(t ?? 0), timeSpent: B(a ?? 0), timeSpentAnnualized: B(Number.isNaN(n) ? 0 : n), durationInDays: e };
                },
                Z = (e) => {
                    const t = 0.25 * e + "s";
                    return o.default.create(() => ({ fadeAnimation: { animationDuration: "0.75s", animationIterationCount: "once", animationDelay: t, animationKeyframes: [{ from: { opacity: 0, transform: "translateY(15px)" }, to: { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease-in-out", animationFillMode: "forwards" } })).fadeAnimation;
                };
            var x,
                D,
                I,
                L,
                M = {
                    fragment: {
                        argumentDefinitions: [(x = { defaultValue: null, kind: "LocalArgument", name: "end_timestamp_msec" }), (D = { defaultValue: null, kind: "LocalArgument", name: "lookback_days" }), (I = { defaultValue: null, kind: "LocalArgument", name: "start_timestamp_msec" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useAdStatsQuery",
                        selections: (L = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: [
                                            { kind: "Variable", name: "lookback_days", variableName: "lookback_days" },
                                            {
                                                fields: [
                                                    { kind: "Variable", name: "end_timestamp_msec", variableName: "end_timestamp_msec" },
                                                    { kind: "Variable", name: "start_timestamp_msec", variableName: "start_timestamp_msec" },
                                                ],
                                                kind: "ObjectValue",
                                                name: "stats_time_range",
                                            },
                                        ],
                                        concreteType: "AdsStats",
                                        kind: "LinkedField",
                                        name: "ads_stats_for_viewer",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "estimated_view_counts", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "estimated_view_time_in_seconds", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [D, I, x], kind: "Operation", name: "useAdStatsQuery", selections: L },
                    params: { id: "q5fH_fvXR7wt2cpKN9KcNw", metadata: {}, name: "useAdStatsQuery", operationKind: "query", text: null },
                };
            M.hash = "cef4d86805d39cc0736fee3988793d83";
            const P = M;
            a(585488);
            var K = a(482924);
            const z = P,
                A = ({ durationInDays: e, endTimeMSec: t, startTimeMSec: a }) => {
                    const n = (0, K.A)(z, { lookback_days: e, start_timestamp_msec: a, end_timestamp_msec: t }, { fetchPolicy: "network-only" }).data;
                    return { estimatedViewCount: n.viewer_v2?.ads_stats_for_viewer?.estimated_view_counts ?? null, estimatedViewTimeSeconds: n.viewer_v2?.ads_stats_for_viewer?.estimated_view_time_in_seconds ?? null, durationInDays: e };
                },
                W = f().fe946974,
                Q = f().f6c50ec0,
                q = f().b1319404,
                V = f().baa4acae,
                O = f().c00e8600,
                R = f().ic073e4e,
                H = f().eb866e88,
                N = f().aa77b70c,
                U = f().c534c6b4,
                $ = f().i57332f0,
                j = f().j24c37b2,
                G = ({ adStats: e, trialSubscription: t }) => {
                    const a = (0, g.yu)(),
                        n = (0, m.Z)(),
                        l = _.ZP.isWebView();
                    i.useEffect(() => {
                        l && (0, d.jW)("quick-free-trial-content-ready");
                    }, [l]),
                        (0, b.q)(() => {
                            n.scribe({ action: "impression" });
                        });
                    const o = "Ended" === t.status,
                        s = i.useMemo(() => i.createElement(y.ZP, { size: "title2", style: [te.title, Z(0)], weight: "bold" }, o ? Q : W), [o]),
                        c = i.useMemo(() => {
                            const { timeSpent: t, timeSpentAnnualized: a, viewCount: n } = C(e);
                            return i.createElement(r.Z, { style: te.metricCards }, i.createElement(r.Z, { style: [te.metricCard, Z(1)], testID: "ads_not_seen_metric" }, i.createElement(y.ZP, { size: "headline1", weight: "bold" }, q), i.createElement(y.ZP, { color: "gray700", weight: "medium" }, V), i.createElement("div", { style: te.metricTextBlue }, n)), i.createElement(r.Z, { style: [te.metricCard, Z(2)], testID: "time_saved_metric" }, i.createElement(y.ZP, { size: "headline1", weight: "bold" }, O), i.createElement(y.ZP, { color: "gray700", weight: "medium" }, R), i.createElement("div", { style: te.metricTextYellow }, t)), i.createElement(r.Z, { style: [te.metricCard, Z(3)], testID: "time_saved_annualized_metric" }, i.createElement(y.ZP, { size: "headline1", weight: "bold" }, H), i.createElement(y.ZP, { color: "gray700", weight: "medium" }, N), i.createElement("div", { style: te.metricTextGreen }, a)));
                        }, [e]),
                        u = i.useMemo(() => i.createElement(r.Z, { style: te.footer }, i.createElement(r.Z, { style: te.gradient }), i.createElement(S.Z, { variant: "AdFreeTrial", wrapperStyles: [te.button, te.buttonAnimation] })), []);
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { style: a ? te.containerSmall : te.containerLarge }, s, c), u);
                },
                Y = () => {
                    const e = (0, g.yu)(),
                        t = (0, p.useHistory)();
                    return i.createElement(
                        r.Z,
                        { style: [Z(0), e ? te.containerSmall : te.containerLarge] },
                        i.createElement(y.ZP, { size: "title2", style: te.title, weight: "bold" }, U),
                        i.createElement(y.ZP, null, $),
                        i.createElement(
                            k.ZP,
                            {
                                onClick: () => {
                                    t.goBack();
                                },
                                size: "large",
                                style: te.gotItButton,
                                type: "primaryFilled",
                            },
                            j,
                        ),
                    );
                },
                J = (e) => {
                    const t = "Ended" === e.trialSubscription.status,
                        a = new Date(e.trialSubscription.duration?.start_at ?? 0).getTime(),
                        r = new Date(e.trialSubscription.duration?.end_at ?? 0).getTime(),
                        l = t ? r : Date.now(),
                        o = l - a,
                        s = Math.floor(o / 1e3 / 60 / 60 / 24),
                        c = A({ durationInDays: s, startTimeMSec: a, endTimeMSec: l });
                    return 0 === c.estimatedViewCount && "Ended" !== e.trialSubscription.status ? i.createElement(Y, null) : i.createElement(G, (0, n.Z)({ adStats: c }, e));
                },
                X = (e) => i.createElement(u.nO, { namespace: { component: "summary" } }, i.createElement(c.H, { errorConfig: { context: "no-ads-summary" } }, i.createElement(J, e))),
                ee = i.memo(X),
                te = o.default.create((e) => ({
                    containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 },
                    containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 },
                    title: { marginBottom: e.spaces.space20 },
                    metricCard: { padding: e.spaces.space12, borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, borderColor: e.colors.borderColor, gap: e.spaces.space8, opacity: 0 },
                    metricCards: { gap: e.spaces.space20 },
                    footer: { position: "sticky", bottom: 0, paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space20 },
                    gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" },
                    metricTextYellow: { fontSize: e.fontSizes.title1, fontWeight: e.fontWeights.heavy, fontFamily: e.fontFamilies.normal, backgroundImage: `linear-gradient(90deg, ${e.colors.yellow700}, ${e.colors.yellow400})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 300 },
                    metricTextBlue: { fontSize: e.fontSizes.title1, fontWeight: e.fontWeights.heavy, fontFamily: e.fontFamilies.normal, backgroundImage: `linear-gradient(90deg, ${e.colors.blue700}, ${e.colors.blue300})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 300 },
                    metricTextGreen: { fontSize: e.fontSizes.title1, fontWeight: e.fontWeights.heavy, fontFamily: e.fontFamilies.normal, backgroundImage: `linear-gradient(90deg, ${e.colors.green700}, ${e.colors.green300})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 300 },
                    button: { opacity: 0 },
                    buttonAnimation: { animationDuration: "2s", animationKeyframes: [{ "0%": { transform: "scale(1)", opacity: 0 }, "50%": { transform: "scale(1.05)", opacity: 1 }, "100%": { transform: "scale(1)", opacity: 1 } }], animationTimingFunction: "ease-in-out", animationIterationCount: "1", animationDelay: "1.25s", animationFillMode: "forwards" },
                    gotItButton: { marginTop: e.spaces.space40, marginRight: "auto" },
                }));
            a(136728);
            var ae = a(913973),
                ne = a(443781),
                ie = a(125363),
                re = a(255117),
                le = a(735313);
            const oe = ({ durationInMinutes: e, quickFreeTrialProductType: t }) => {
                    const a = (0, g.yu)(),
                        n = (0, m.Z)(),
                        l = (0, p.useHistory)(),
                        { viewerUserId: o } = (0, ne.QZ)(),
                        s = (0, ie.I0)(),
                        c = ((e) => ({ NoAds: { activationScreen: { title: f().be88be23, description: f().a4413462, descriptionExtra: f().ae3f3b0e, buttonText: f().cdac8dc4, pillText: f().dec99336 } } })[e])(t).activationScreen,
                        u = _.ZP.isWebView();
                    i.useEffect(() => {
                        u && (0, d.jW)("quick-free-trial-content-ready");
                    }, [u]),
                        (0, b.q)(() => {
                            n.scribe({ action: "impression" });
                        });
                    const h = i.useCallback(() => {
                            o && s((0, le.Z)((0, re.ZP)({ userId: o }))), l.push("/home");
                        }, [l, o, s]),
                        S = i.useMemo(() => Math.floor(e / 60 / 24), [e]);
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { style: a ? ce.containerSmall : ce.containerLarge }, i.createElement(r.Z, { style: ce.successContent }, i.createElement(r.Z, { style: [ce.adFreePill, Z(0)] }, i.createElement(y.ZP, { size: "title3", weight: "medium" }, i.createElement(ae.default, { style: ce.adFreePillIcon }), c.pillText)), i.createElement(r.Z, { style: [ce.animationGroup, Z(1)] }, i.createElement(y.ZP, { size: "title2", style: ce.title, weight: "bold" }, c.title({ durationInDays: S })), i.createElement(y.ZP, { size: "headline2" }, c.description), i.createElement(y.ZP, { size: "headline2" }, c.descriptionExtra)), i.createElement(k.ZP, { onClick: h, size: "xLarge", style: [ce.gotItButton, Z(2)], type: "primaryFilled" }, c.buttonText))));
                },
                se = (e) => i.createElement(u.nO, { namespace: { component: "activated" } }, i.createElement(oe, e)),
                ce = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space20 }, successContent: { gap: e.spaces.space12 }, adFreePill: { paddingVertical: e.spaces.space8, paddingStart: e.spaces.space24, paddingEnd: e.spaces.space28, borderRadius: e.borderRadii.infinite, borderColor: e.colors.gray500, borderWidth: e.borderWidths.medium, flexDirection: "row", marginRight: "auto", alignItems: "center", gap: e.spaces.space8, marginBottom: e.spaces.space32, opacity: 0 }, adFreePillIcon: { color: e.colors.green500 }, gotItButton: { marginTop: e.spaces.space40, opacity: 0 }, animationGroup: { opacity: 0 } })),
                de = f().ef4602ec,
                ue = f().cb70b894,
                me = () => {
                    const e = (0, g.yu)(),
                        t = (0, m.Z)(),
                        a = (0, p.useHistory)(),
                        n = _.ZP.isWebView();
                    i.useEffect(() => {
                        n && (0, d.jW)("quick-free-trial-content-ready");
                    }, [n]),
                        (0, b.q)(() => {
                            t.scribe({ action: "impression" });
                        });
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                            r.Z,
                            { style: e ? ge.containerSmall : ge.containerLarge },
                            i.createElement(
                                r.Z,
                                { style: ge.content },
                                i.createElement(y.ZP, { size: "title2", style: ge.title, weight: "bold" }, de),
                                i.createElement(
                                    k.ZP,
                                    {
                                        onClick: () => {
                                            a.goBack();
                                        },
                                        size: "xLarge",
                                        style: ge.gotItButton,
                                        type: "primaryFilled",
                                    },
                                    ue,
                                ),
                            ),
                        ),
                    );
                },
                pe = (e) => i.createElement(u.nO, { namespace: { component: "error" } }, i.createElement(me, e)),
                ge = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space20 }, content: { gap: e.spaces.space12 }, gotItButton: { marginTop: e.spaces.space40 } })),
                ye = f().i95803fa,
                ke = f().j24c37b2,
                he = () => {
                    const e = (0, g.yu)(),
                        t = (0, m.Z)(),
                        a = (0, p.useHistory)(),
                        n = _.ZP.isWebView();
                    i.useEffect(() => {
                        n && (0, d.jW)("quick-free-trial-content-ready");
                    }, [n]),
                        (0, b.q)(() => {
                            t.scribe({ action: "impression" });
                        });
                    const l = i.useCallback(() => a.push("/home"), [a]);
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { style: e ? be.containerSmall : be.containerLarge }, i.createElement(r.Z, { style: be.content }, i.createElement(y.ZP, { size: "title2", style: be.title, weight: "bold" }, ye), i.createElement(k.ZP, { onClick: l, size: "xLarge", style: be.gotItButton, type: "primaryFilled" }, ke))));
                },
                fe = (e) => i.createElement(u.nO, { namespace: { component: "not-eligible" } }, i.createElement(he, e)),
                be = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space20 }, buttonContainer: { marginTop: e.spaces.space72, gap: e.spaces.space12 }, content: { gap: e.spaces.space12 }, gotItButton: { marginTop: e.spaces.space40 } }));
            a(571372);
            var _e = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "product_id" }],
                    t = [
                        { kind: "Variable", name: "product_id", variableName: "product_id" },
                        { kind: "Literal", name: "s", value: "4721" },
                    ],
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    n = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "ends_at", storageKey: null }], type: "SetQuickFreeTrialSuccess", abstractKey: null },
                    i = {
                        kind: "InlineFragment",
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                        ],
                        type: "SetQuickFreeTrialFailure",
                        abstractKey: null,
                    };
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useActivateQuickFreeTrialMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "set_quick_free_trials", plural: !1, selections: [a, n, i], storageKey: null }], type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useActivateQuickFreeTrialMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "set_quick_free_trials", plural: !1, selections: [a, { kind: "TypeDiscriminator", abstractKey: "__isSetQuickFreeTrialResult" }, n, i], storageKey: null }] }, params: { id: "QEHmy-xUjQ-Pr-wpheDmpg", metadata: {}, name: "useActivateQuickFreeTrialMutation", operationKind: "mutation", text: null } };
            })();
            _e.hash = "d7a3939996be7be4b7d04c8107e31044";
            const Se = _e;
            var we = a(351743),
                Te = a.n(we);
            const Ee = Se,
                ve = () => {
                    const [e, t] = Te()(Ee);
                    return [
                        i.useCallback(
                            ({ productId: t }) =>
                                new Promise((a, n) => {
                                    e({
                                        variables: { product_id: t },
                                        onCompleted: (e, t) => {
                                            "SetQuickFreeTrialFailure" === e.set_quick_free_trials?.__typename ? n(new Error("SetQuickFreeTrialFailure")) : a();
                                        },
                                        onError: n,
                                    });
                                }),
                            [e],
                        ),
                        t,
                    ];
                };
            var Fe = (function () {
                var e = [
                    {
                        alias: null,
                        args: [{ kind: "Literal", name: "s", value: "4721" }],
                        concreteType: "Viewer",
                        kind: "LinkedField",
                        name: "viewer_v2",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "SubscriptionQuickFreeTrialProducts",
                                kind: "LinkedField",
                                name: "quick_free_trial_products",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "SubscriptionQuickFreeTrialProduct",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "product_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "ends_in_days", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "duration_in_minutes", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "cta_text", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: 'viewer_v2(s:"4721")',
                    },
                ];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useEligibleQuickFreeTrialsQuery", selections: e, type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useEligibleQuickFreeTrialsQuery", selections: e }, params: { id: "ADznLYmcEKpMit4BgoKZJg", metadata: {}, name: "useEligibleQuickFreeTrialsQuery", operationKind: "query", text: null } };
            })();
            Fe.hash = "b5502426b1e24be79c8ac8022f604d68";
            const Be = Fe,
                Ce = () => (0, K.A)(Be, {}).data;
            var Ze = (function () {
                var e = [{ kind: "Literal", name: "s", value: "4721" }],
                    t = {
                        alias: null,
                        args: null,
                        concreteType: "QuickFreeTrialDuration",
                        kind: "LinkedField",
                        name: "duration",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "end_at", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "start_at", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    a = { alias: null, args: null, kind: "ScalarField", name: "free_trial_type", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null };
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useListQuickFreeTrialsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "QuickFreeTrialSubscription", kind: "LinkedField", name: "list_quick_free_trials_subscriptions", plural: !0, selections: [t, a, n], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useListQuickFreeTrialsQuery", selections: [{ alias: null, args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "QuickFreeTrialSubscription", kind: "LinkedField", name: "list_quick_free_trials_subscriptions", plural: !0, selections: [t, a, n, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] }, params: { id: "-C_h3io7Su8VA1rQ97z1bw", metadata: {}, name: "useListQuickFreeTrialsQuery", operationKind: "query", text: null } };
            })();
            Ze.hash = "20d3245f434315a6098e5e01121358e9";
            const xe = Ze,
                De = () => (0, K.A)(xe, {}).data,
                Ie = Object.freeze({ NoAds: "no-ads-quick-free-trial" }),
                Le = ({ quickFreeTrialProductType: e, setHideBackButton: t }) => {
                    const a = (0, m.Z)(),
                        n = Ce(),
                        [r] = ve(),
                        o = De(),
                        [s, c] = i.useState(!1),
                        [d, u] = i.useState(!1),
                        p = i.useMemo(() => o.viewer_v2?.list_quick_free_trials_subscriptions?.find((t) => t.free_trial_type === e), [o, e]),
                        g = i.useMemo(() => "InProgress" === p?.status || "Ended" === p?.status, [p]),
                        y = i.useMemo(() => n.viewer_v2?.quick_free_trial_products?.products?.find((t) => t.product_id === Ie[e]), [n, e]),
                        k = !!y;
                    return (
                        i.useEffect(() => {
                            g ||
                                !k ||
                                s ||
                                r({ productId: Ie[e] })
                                    .then(() => {
                                        c(!0), t(!0), a.scribe({ component: "activation", action: "success" });
                                    })
                                    .catch(() => {
                                        a.scribe({ component: "activation", action: "failure" }), u(!0);
                                    });
                        }, [k, g, r, a, t, s, e]),
                        d ? i.createElement(pe, null) : s && y?.duration_in_minutes ? i.createElement(se, { durationInMinutes: y.duration_in_minutes, quickFreeTrialProductType: e }) : g && p?.status ? ("NoAds" === e ? i.createElement(ee, { trialSubscription: p }) : void 0) : g || k ? i.createElement(l.Z, null) : i.createElement(fe, null)
                    );
                },
                Me = (e) => {
                    (0, d.ZP)();
                    const [t, a] = i.useState(!1);
                    return i.createElement(c.H, { errorConfig: { context: "quick-free-trial" } }, i.createElement(u.nO, { namespace: { page: "quick-free-trial", section: e.quickFreeTrialProductType } }, i.createElement(s.Z, { appBarStyle: Pe.appBar, containerStyle: Pe.modal, hideBackButton: t, history: e.history, withoutBottomBarMobile: !0 }, i.createElement(r.Z, { style: Pe.backgroundShadow }), i.createElement(Le, (0, n.Z)({ setHideBackButton: a }, e)))));
                },
                Pe = o.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(52 147 239 / 30%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgba(52, 147, 239, 0.3) 0%, rgb(21 32 44) 100%)" : "radial-gradient(56.15141888052253% 56.15141888052254% at 49.97201160183933% 38.95898881943194%,#273649 0%,rgba(0,0,0,1) 100%)";
                    return { appBar: { backgroundColor: e.colors.transparent }, backgroundShadow: { position: "absolute", top: -300 * e.scaleMultiplier, left: -100 * e.scaleMultiplier, start: -150, minHeight: 650 * e.scaleMultiplier, width: "100%", backgroundImage: t }, modal: { minHeight: 600 } };
                });
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var n = a(202784),
                i = a(890601),
                r = a(783427),
                l = a(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        130724: (e, t, a) => {
            var n = a(23103),
                i = a(492991),
                r = a(639646),
                l = a(643329),
                o = a(609736);
            n(
                { target: "Array", proto: !0 },
                {
                    at: function (e) {
                        var t = i(this),
                            a = r(t),
                            n = l(e),
                            o = n >= 0 ? n : a + n;
                        return o < 0 || o >= a ? void 0 : t[o];
                    },
                },
            ),
                o("at");
        },
        106406: (e, t, a) => {
            var n = a(23103),
                i = a(265968),
                r = a(558885),
                l = a(643329),
                o = a(783326),
                s = a(824229),
                c = i("".charAt);
            n(
                {
                    target: "String",
                    proto: !0,
                    forced: s(function () {
                        return "\ud842" !== "𠮷".at(-2);
                    }),
                },
                {
                    at: function (e) {
                        var t = o(r(this)),
                            a = t.length,
                            n = l(e),
                            i = n >= 0 ? n : a + n;
                        return i < 0 || i >= a ? void 0 : c(t, i);
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.QuickFreeTrial.ba31ae5a.js.map

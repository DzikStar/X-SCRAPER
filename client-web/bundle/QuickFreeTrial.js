"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.QuickFreeTrial"],
    {
        625661: (e, t, a) => {
            a.d(t, { ZP: () => m });
            var n = a(202784),
                r = a(614983),
                i = a.n(r),
                l = a(325686),
                o = a(370006),
                s = a(786998),
                c = a(929028),
                u = a(386802);
            function d(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class m extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: i, isFullWidth: l, isLarge: c, leftControl: u, middleControl: m, position: p, rightControl: g, secondaryBar: y, style: k, subtitle: f, title: b, titleDomId: h, titleIconCell: _, titleIconCellSize: T, withBackground: w, withWideContainer: S } = this.props,
                        { isModal: E } = this.context,
                        B = i ? u : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        F = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!w, E, !!y);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: l, isLarge: c, leftControl: B, middleControl: m, position: d(p, E, r), rightControl: g, style: k, subtitle: f, title: b, titleDomId: h, titleIconCell: _, titleIconCellSize: T, withBackground: F, withWideContainer: S }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = u.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => y, w: () => p });
            var n = a(202784),
                r = a(325686),
                i = a(108362),
                l = a(386802),
                o = a(392237),
                s = a(652904),
                c = a(555079),
                u = a(625661),
                d = a(449067),
                m = a(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: i, centerTitle: l, hideBackButton: o, history: s, isFullWidth: d, isLarge: m, middleControl: p, onBackClick: y, rightControl: k, secondaryBar: f, subtitle: b, title: h } = this.props,
                                { isModal: _ } = this.context;
                            return n.createElement(r.Z, { style: _ ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(u.ZP, { backButtonType: a || (_ ? "close" : "back"), backLocation: i, centerTitle: l, fixed: !_, hideBackButton: o, history: s, isFullWidth: d, isLarge: m, middleControl: p, onBackClick: y, ref: e, rightControl: k, secondaryBar: f, style: [_ && g.appBarModal, t], subtitle: b, title: h, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: l, documentTitle: o, isFullWidth: c, isLarge: u, renderHeader: p, title: y, withoutBottomBarMobile: k } = this.props,
                        { isModal: f } = this.context,
                        b = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(d.Z.Configure, { documentTitle: o, headerless: !0, title: y }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, f && g.rootModal] }, !f && b, n.createElement(i.Z, { isFullWidth: c, isLarge: u, style: [g.container, f && g.containerModal, l] }, f ? n.createElement(m.Z, { style: g.viewport }, b, a) : a), t ? n.createElement(r.Z, { style: [g.bottomBarModal, !f && !k && g.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: u }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = l.Z);
            const g = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = p;
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                r = a(500002),
                i = a(668214),
                l = a(997174),
                o = a(118823);
            const s = (0, i.Z)()
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
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: l },
                            locationKey: o,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = r || o;
                    ((c && r !== o) || (!c && a !== i) || n !== l || s) && this._performPageUpdates(this.props);
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
            const u = (0, r.ZP)(s(c));
        },
        482924: (e, t, a) => {
            a.d(t, { A: () => p });
            var n = a(202784),
                r = a(437429),
                i = a.n(r),
                l = a(57074),
                o = a.n(l),
                s = a(10622),
                c = a.n(s),
                u = a(71620),
                d = a(312771),
                m = a(535338);
            function p(e, t, a) {
                const r = o()(t),
                    l = o()(a),
                    s = i()(),
                    p = (0, u.po)(),
                    [g, y] = n.useState(null),
                    [k, f] = n.useState(!1),
                    b = n.useCallback(() => {
                        k ||
                            (f(!0),
                            c()(s, e, r, { networkCacheConfig: l?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    f(!1);
                                },
                                error: (e) => {
                                    p(e), f(!1), y(e);
                                },
                            }));
                    }, [s, p, e, k, r, l]),
                    h = (0, m.p)(e, t, a);
                return n.useMemo(() => (g ? { data: h, refetch: b, refetchStatus: d.ZP.FAILED, refetchError: g } : { data: h, refetch: b, refetchStatus: k ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [h, g, k, b]);
            }
        },
        665979: (e, t, a) => {
            a.d(t, { F1: () => p, HM: () => k, Jl: () => d, VS: () => s, YR: () => g, b7: () => i, uf: () => m, xP: () => y, zv: () => c });
            a(130724), a(106406);
            var n = a(111677),
                r = a.n(n);
            const i = (e, t = 0) => new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + t)),
                l = (e, t = 0) => {
                    const a = e.getUTCDay(),
                        n = new Date(e),
                        r = 7 * t - a;
                    return n.setUTCDate(e.getUTCDate() + r), n.setUTCHours(0, 0, 0, 0), n;
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
                        r = Object.keys(e).at(-1) || new Date().toISOString();
                    for (const s in e) {
                        const c = new Date(s),
                            u = (() => ("daily" === t ? i(c).toISOString() : "weekly" === t ? (l(c).getTime() < new Date(n).getTime() ? new Date(n).toISOString() : l(c).toISOString()) : o(c).toISOString()))();
                        a[u] || (a = { ...a, [u]: { metrics: {}, fromTime: u, toTime: "daily" === t ? i(c, 1).toISOString() : l(c, 1).getTime() > new Date(r).getTime() ? new Date(r).toISOString() : l(c, 1).toISOString() } });
                        const d = e[s]?.metrics;
                        for (const e in d) a[u] && !a[u]?.metrics[e] && (a[u].metrics[e] = 0), a[u] && (a[u].metrics[e] += d[e]);
                    }
                    return a;
                },
                u = (e, t, a, n) => {
                    let r = {};
                    for (let i = new Date(e); i < new Date(t); i.setUTCDate(i.getUTCDate() + 1)) {
                        const e = i.toISOString(),
                            t = new Date(i);
                        t.setUTCDate(t.getUTCDate() + 1), (r = { ...r, [e]: { metrics: a.reduce((t, a) => ({ ...t, [a]: n[e]?.metrics[a] || 0 }), {}), fromTime: e, toTime: t.toISOString() } });
                    }
                    return r;
                },
                d = (e, t, a, n, r) => {
                    const l =
                        e.result.result?.organic_metrics_time_series?.reduce((e, t) => {
                            const a = i(new Date(t.timestamp.iso8601_time)).toISOString();
                            return { ...e, [a]: t.metric_values.reduce((t, n) => ({ ...t, metrics: { ...t.metrics, [String(n.metric_type)]: (t[String(n.metric_type)] || 0) + (n.metric_value || 0) + (e[a]?.metrics?.[String(n.metric_type)] || 0) } }), { metrics: {}, fromTime: "", toTime: "" }) };
                        }, {}) || null;
                    if (!l) return { metricsList: null, compareData: null };
                    return { metricsList: u(a, t, r, l), compareData: n ? u(n, a, r, l) : null };
                },
                m = (e) => {
                    let t = e;
                    const a = ["", "K", "M", "B", "T"];
                    let n = 0;
                    for (; t >= 1e3 && n < a.length - 1; ) (t /= 1e3), n++;
                    const r = Math.round(10 * t) / 10;
                    return r % 1 == 0 ? `${r}${a[n]}` : `${r.toFixed(1)}${a[n]}`;
                },
                p = (e) => {
                    const t = e.getTimezoneOffset();
                    return new Date(e.getTime() + 6e4 * t);
                },
                g = (e, t) => {
                    const a = new Date(e.fromTime);
                    let n = new Date(e.toTime);
                    const o = s(a, n);
                    n = l(a).getTime() === a.getTime() && 7 !== o ? i(n) : i(n, -1);
                    const c = r().jade381b,
                        u = r().ccaa970f,
                        d = r().a20c68af;
                    switch (t) {
                        case "daily":
                            return c(p(a));
                        case "weekly":
                            if (!n || n.getTime() <= a.getTime()) return c(p(a));
                            return `${u(p(a))} - ${c(p(n))}`;
                        case "monthly":
                            return d(p(a));
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
                            r = parseInt(a[1], 10);
                        return (r = 2 * Math.ceil((r + 1) / 2)), r >= 10 && ((n += 1), (r = 0)), +(n.toString() + r.toString() + "0".repeat(a.length - 2));
                    })(e, t);
                    return (function (e, t) {
                        const a = e / t;
                        return Array.from({ length: t + 1 }, (e, t) => t * a);
                    })(a, t);
                },
                k = (e, t, a) => {
                    let n = {};
                    return e
                        ? (Object.entries(e).forEach(([e, r]) => {
                              const i = t.reduce((e, t) => e + (r?.metrics?.[t] || 0), 0);
                              n = { ...n, [e]: { ...r, metrics: { ...r?.metrics, [a]: i } } };
                          }),
                          n)
                        : e;
                };
        },
        328146: (e, t, a) => {
            a.r(t), a.d(t, { default: () => je });
            var n = a(807896),
                r = a(202784),
                i = a(325686),
                l = a(167630),
                o = a(392237),
                s = a(980407),
                c = a(736063),
                u = a(293115),
                d = a(725405),
                m = a(107267),
                p = a(67369),
                g = a(731708),
                y = a(154003),
                k = a(111677),
                f = a.n(k),
                b = a(187669),
                h = a(323265),
                _ = a(952793),
                T = a(4452),
                w = a(665979);
            const S = f().cc10f019,
                E = f().f9b6b7d3,
                B = f().a9af8753,
                F = f().b93d00e5,
                C = (e) => {
                    const t = Math.floor((e ?? 0) / 60);
                    if (t < 60) return S({ minutes: t });
                    const a = Math.floor(t / 60);
                    if (t < 1440) return E({ hours: a });
                    const n = Math.floor(a / 24),
                        r = a - 24 * n;
                    return n > 2 ? F({ days: n }) : B({ days: n, hours: r });
                },
                v = ({ durationInDays: e, estimatedViewCount: t, estimatedViewTimeSeconds: a }) => {
                    const n = ((a ?? 0) / e) * 365;
                    return { viewCount: (0, w.uf)(t ?? 0), timeSpent: C(a ?? 0), timeSpentAnnualized: C(Number.isNaN(n) ? 0 : n), durationInDays: e };
                },
                Z = (e) => {
                    const t = 0.25 * e + "s";
                    return o.default.create(() => ({ fadeAnimation: { animationDuration: "0.75s", animationIterationCount: "once", animationDelay: t, animationKeyframes: [{ from: { opacity: 0, transform: "translateY(15px)" }, to: { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease-in-out", animationFillMode: "forwards" } })).fadeAnimation;
                };
            var I,
                D,
                x,
                L,
                M = {
                    fragment: {
                        argumentDefinitions: [(I = { defaultValue: null, kind: "LocalArgument", name: "end_timestamp_msec" }), (D = { defaultValue: null, kind: "LocalArgument", name: "lookback_days" }), (x = { defaultValue: null, kind: "LocalArgument", name: "start_timestamp_msec" })],
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
                    operation: { argumentDefinitions: [D, x, I], kind: "Operation", name: "useAdStatsQuery", selections: L },
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
                Q = f().h9b28dae,
                q = f().f6c50ec0,
                O = f().e1d1fbca,
                W = f().a82d7abd,
                V = f().ff074c76,
                R = f().cbc38428,
                N = f().b9028f60,
                H = f().e081d6a0,
                U = f().fee73dca,
                j = f().ic073e4e,
                $ = f().eb866e88,
                G = f().ce72f092,
                Y = f().c534c6b4,
                J = f().i57332f0,
                X = f().j24c37b2,
                ee = ({ adStats: e, trialSubscription: t }) => {
                    const a = (0, p.yu)(),
                        n = (0, d.Z)(),
                        l = (0, m.useHistory)(),
                        o = h.ZP.isWebView();
                    r.useEffect(() => {
                        o && (0, T.jW)("quick-free-trial-content-ready");
                    }, [o]),
                        (0, b.q)(() => {
                            n.scribe({ action: "impression" });
                        });
                    const s = "Ended" === t.status,
                        c = r.useMemo(() => r.createElement(g.ZP, { size: "title2", style: [oe.title, Z(0)], weight: "bold" }, s ? q : Q), [s]),
                        u = r.useMemo(() => {
                            const { timeSpent: t, timeSpentAnnualized: a, viewCount: n } = v(e);
                            return r.createElement(i.Z, { style: oe.metricCards }, r.createElement(i.Z, { style: [oe.metricCard, Z(1)], testID: "ads_not_seen_metric" }, r.createElement(g.ZP, { size: "headline1", weight: "bold" }, O), r.createElement("div", { style: oe.metricTextYellow }, W({ numberOfAds: n })), r.createElement(g.ZP, { color: "gray700" }, V)), r.createElement(i.Z, { style: [oe.metricCard, Z(2)], testID: "time_saved_metric" }, r.createElement(g.ZP, { size: "headline1", weight: "bold" }, U), r.createElement("div", { style: oe.metricTextBlue }, t), r.createElement(g.ZP, { color: "gray700" }, j)), r.createElement(i.Z, { style: [oe.metricCard, Z(3)], testID: "time_saved_annualized_metric" }, r.createElement(g.ZP, { size: "headline1", weight: "bold" }, $), r.createElement("div", { style: oe.metricTextBlue }, a), r.createElement(g.ZP, { color: "gray700" }, G)));
                        }, [e]),
                        k = r.useMemo(() => ({ pathname: "/i/premium_sign_up", state: { referring_page: "ad_free_trial" } }), []),
                        f = r.useCallback(() => {
                            l.goBack();
                        }, [l]),
                        _ = r.useMemo(() => r.createElement(i.Z, { style: oe.footer }, r.createElement(i.Z, { style: oe.gradient }), s ? r.createElement(i.Z, { style: [oe.buttonGroup, oe.buttonGroupAnimation] }, r.createElement(y.ZP, { link: k, size: "xLarge", type: "primaryFilled" }, R), r.createElement(y.ZP, { color: "gray700", onClick: f, style: oe.noThanksButton }, H)) : r.createElement(i.Z, { style: [oe.buttonGroup, oe.buttonGroupAnimation] }, r.createElement(y.ZP, { onClick: f, size: "xLarge", style: oe.backToTrialButton, type: "primaryFilled" }, N), r.createElement(y.ZP, { link: k, size: "xLarge", type: "primaryOutlined" }, R))), [s, k, f]);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { style: a ? oe.containerSmall : oe.containerLarge }, c, u), _);
                },
                te = () => {
                    const e = (0, p.yu)(),
                        t = (0, m.useHistory)();
                    return r.createElement(
                        i.Z,
                        { style: [Z(0), e ? oe.containerSmall : { ...oe.containerLarge, ...oe.thresholdNotMetContainer }] },
                        r.createElement(g.ZP, { size: "title2", style: oe.title, weight: "bold" }, Y),
                        r.createElement(g.ZP, null, J),
                        r.createElement(
                            y.ZP,
                            {
                                onClick: () => {
                                    t.goBack();
                                },
                                size: "large",
                                style: oe.gotItButton,
                                type: "primaryFilled",
                            },
                            X,
                        ),
                    );
                },
                ae = (e) => {
                    const t = (0, _.hC)("subscriptions_quick_free_trials_low_threshold_screen_enabled"),
                        a = "Ended" === e.trialSubscription.status,
                        i = new Date(e.trialSubscription.duration?.start_at ?? 0).getTime(),
                        l = new Date(e.trialSubscription.duration?.end_at ?? 0).getTime(),
                        o = a ? l : e.dateNow,
                        s = o - i,
                        c = Math.floor(s / 1e3 / 60 / 60 / 24),
                        u = A({ durationInDays: c, startTimeMSec: i, endTimeMSec: o }),
                        d = r.useMemo(() => r.createElement(te, null), []),
                        m = r.useMemo(() => r.createElement(ee, (0, n.Z)({ adStats: u }, e)), [e, u]);
                    return t && 0 === u.estimatedViewCount && "Ended" !== e.trialSubscription.status ? d : m;
                },
                ne = { context: "no-ads-summary" },
                re = { component: "summary" },
                ie = (e) => {
                    const t = 6e4 * Math.round(Date.now() / 6e4),
                        a = r.useMemo(() => r.createElement(ae, (0, n.Z)({ dateNow: t }, e)), [e, t]);
                    return r.createElement(c.H, { errorConfig: ne }, r.createElement(u.nO, { namespace: re }, a));
                },
                le = r.memo(ie),
                oe = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space28 }, metricCard: { padding: e.spaces.space12, borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, borderColor: e.colors.borderColor, gap: e.spaces.space8, opacity: 0 }, metricCards: { gap: e.spaces.space20 }, footer: { position: "sticky", bottom: 0, paddingHorizontal: e.spaces.space28, paddingVertical: e.spaces.space20 }, gradient: { position: "absolute", height: 28, backgroundImage: `linear-gradient(${e.colors.transparent} 0%, ${e.colors.navigationBackground} 100%)`, width: "100%", top: -28, start: 0, pointerEvents: "none" }, metricTextYellow: { fontSize: e.fontSizes.title1, fontWeight: e.fontWeights.heavy, fontFamily: e.fontFamilies.normal, backgroundImage: `linear-gradient(90deg, ${e.colors.yellow700}, ${e.colors.yellow400})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 300 }, metricTextBlue: { fontSize: e.fontSizes.title1, fontWeight: e.fontWeights.heavy, fontFamily: e.fontFamilies.normal, backgroundImage: `linear-gradient(90deg, ${e.colors.blue700}, ${e.colors.blue300})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: 300 }, buttonGroup: { opacity: 0, gap: e.spaces.space16, marginHorizontal: "auto" }, buttonGroupAnimation: { animationDuration: "1.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-in-out", animationIterationCount: "1", animationDelay: "1.25s", animationFillMode: "forwards" }, gotItButton: { marginTop: e.spaces.space40, marginRight: "auto" }, thresholdNotMetContainer: { paddingTop: e.spaces.space40 }, noThanksButton: { border: "none" }, backToTrialButton: {}, upsellButton: {} }));
            a(136728);
            var se = a(530525),
                ce = a(439592),
                ue = a(136483),
                de = a(913973),
                me = a(182471),
                pe = a(443781),
                ge = a(125363),
                ye = a(390387),
                ke = a(255117),
                fe = a(735313);
            const be = f().g2c63852,
                he = ({ durationInMinutes: e, quickFreeTrialProductType: t }) => {
                    const a = (0, p.yu)(),
                        n = (0, d.Z)(),
                        l = (0, m.useHistory)(),
                        { viewerUserId: o } = (0, pe.QZ)(),
                        s = (0, ge.I0)(),
                        c = ((e) => ({ NoAds: { activationScreen: { title: f().be88be23, descriptionBullets: [f().b63766a6, f().h028f7e0, f().dd68eef6], buttonText: f().g8a2f217, pillText: f().dec99336 } } })[e])(t).activationScreen,
                        u = h.ZP.isWebView();
                    r.useEffect(() => {
                        u && (0, T.jW)("quick-free-trial-content-ready");
                    }, [u]),
                        (0, b.q)(() => {
                            n.scribe({ action: "impression" });
                        });
                    const k = r.useCallback(() => {
                            o && s((0, fe.Z)((0, ke.ZP)({ userId: o }))), s((0, ye.wS)()), l.push("/home");
                        }, [l, o, s]),
                        _ = r.useMemo(() => Math.floor(e / 60 / 24), [e]);
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(se.Z, { "aria-label": c.title({ durationInDays: _ }), aspectMode: ce.Z.exact(1.5), image: me }),
                        r.createElement(
                            i.Z,
                            { style: a ? we.containerSmall : we.containerLarge },
                            r.createElement(
                                i.Z,
                                { style: we.successContent },
                                r.createElement(i.Z, { style: we.adFreePill }, r.createElement(ue.default, { style: we.adFreePillIcon }), r.createElement(g.ZP, { size: "headline2" }, c.pillText)),
                                r.createElement(
                                    i.Z,
                                    null,
                                    r.createElement(g.ZP, { size: "title2", style: we.title, weight: "bold" }, c.title({ durationInDays: _ })),
                                    r.createElement(
                                        i.Z,
                                        { style: we.descriptionBulletContainer },
                                        c.descriptionBullets.map((e, t) => r.createElement(i.Z, { key: `quick-trial-bullet-${t}`, style: we.descriptionBulletRow }, r.createElement(de.default, { style: we.descriptionBulletIcon }), r.createElement(g.ZP, { color: "gray700", size: "headline2" }, e))),
                                    ),
                                ),
                                r.createElement(y.ZP, { onClick: k, size: "xLarge", style: we.gotItButton, type: "primaryFilled" }, c.buttonText({ durationInDays: _ })),
                                r.createElement(g.ZP, { align: "center", color: "gray700" }, be),
                            ),
                        ),
                    );
                },
                _e = { component: "activated" },
                Te = (e) => r.createElement(u.nO, { namespace: _e }, r.createElement(he, e)),
                we = o.default.create((e) => ({ containerSmall: { marginTop: e.spaces.space24, padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { marginTop: e.spaces.space24, paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24 }, title: { marginBottom: e.spaces.space20 }, successContent: { gap: e.spaces.space16 }, adFreePill: { paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.infinite, borderColor: e.colors.gray500, borderWidth: e.borderWidths.small, flexDirection: "row", marginRight: "auto", alignItems: "center", gap: e.spaces.space8, marginBottom: e.spaces.space12 }, adFreePillIcon: { color: e.colors.green500, fontSize: ".6em" }, gotItButton: { marginTop: e.spaces.space36 }, descriptionBulletContainer: { gap: e.spaces.space12 }, descriptionBulletRow: { flexDirection: "row", gap: e.spaces.space12, alignItems: "center" }, descriptionBulletIcon: { color: e.colors.gray700 } })),
                Se = f().ef4602ec,
                Ee = f().cb70b894,
                Be = () => {
                    const e = (0, p.yu)(),
                        t = (0, d.Z)(),
                        a = (0, m.useHistory)(),
                        n = h.ZP.isWebView();
                    r.useEffect(() => {
                        n && (0, T.jW)("quick-free-trial-content-ready");
                    }, [n]),
                        (0, b.q)(() => {
                            t.scribe({ action: "impression" });
                        });
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                            i.Z,
                            { style: e ? Ce.containerSmall : Ce.containerLarge },
                            r.createElement(
                                i.Z,
                                { style: Ce.content },
                                r.createElement(g.ZP, { size: "title2", style: Ce.title, weight: "bold" }, Se),
                                r.createElement(
                                    y.ZP,
                                    {
                                        onClick: () => {
                                            a.goBack();
                                        },
                                        size: "xLarge",
                                        style: Ce.gotItButton,
                                        type: "primaryFilled",
                                    },
                                    Ee,
                                ),
                            ),
                        ),
                    );
                },
                Fe = (e) => r.createElement(u.nO, { namespace: { component: "error" } }, r.createElement(Be, e)),
                Ce = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space40 }, title: { marginBottom: e.spaces.space20 }, content: { gap: e.spaces.space12 }, gotItButton: { marginTop: e.spaces.space40, marginEnd: "auto" } })),
                ve = f().i95803fa,
                Ze = f().j24c37b2,
                Ie = () => {
                    const e = (0, p.yu)(),
                        t = (0, d.Z)(),
                        a = (0, m.useHistory)(),
                        n = h.ZP.isWebView();
                    r.useEffect(() => {
                        n && (0, T.jW)("quick-free-trial-content-ready");
                    }, [n]),
                        (0, b.q)(() => {
                            t.scribe({ action: "impression" });
                        });
                    const l = r.useCallback(() => a.push("/home"), [a]);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { style: e ? xe.containerSmall : xe.containerLarge }, r.createElement(i.Z, { style: xe.content }, r.createElement(g.ZP, { size: "title2", style: xe.title, weight: "bold" }, ve), r.createElement(y.ZP, { onClick: l, size: "large", style: xe.gotItButton, type: "primaryFilled" }, Ze))));
                },
                De = (e) => r.createElement(u.nO, { namespace: { component: "not-eligible" } }, r.createElement(Ie, e)),
                xe = o.default.create((e) => ({ containerSmall: { padding: e.spaces.space20, paddingBottom: e.spaces.space24 }, containerLarge: { paddingHorizontal: e.spaces.space40, paddingBottom: e.spaces.space24, paddingTop: e.spaces.space40 }, title: { marginBottom: e.spaces.space20 }, buttonContainer: { marginTop: e.spaces.space72, gap: e.spaces.space12 }, content: { gap: e.spaces.space12 }, gotItButton: { marginTop: e.spaces.space40, marginEnd: "auto" } }));
            a(571372);
            var Le = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "product_id" }],
                    t = [
                        { kind: "Variable", name: "product_id", variableName: "product_id" },
                        { kind: "Literal", name: "s", value: "4721" },
                    ],
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    n = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "ends_at", storageKey: null }], type: "SetQuickFreeTrialSuccess", abstractKey: null },
                    r = {
                        kind: "InlineFragment",
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                        ],
                        type: "SetQuickFreeTrialFailure",
                        abstractKey: null,
                    };
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "useActivateQuickFreeTrialMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "set_quick_free_trials", plural: !1, selections: [a, n, r], storageKey: null }], type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "useActivateQuickFreeTrialMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "set_quick_free_trials", plural: !1, selections: [a, { kind: "TypeDiscriminator", abstractKey: "__isSetQuickFreeTrialResult" }, n, r], storageKey: null }] }, params: { id: "QEHmy-xUjQ-Pr-wpheDmpg", metadata: {}, name: "useActivateQuickFreeTrialMutation", operationKind: "mutation", text: null } };
            })();
            Le.hash = "d7a3939996be7be4b7d04c8107e31044";
            const Me = Le;
            var Pe = a(351743),
                Ke = a.n(Pe);
            const ze = Me,
                Ae = () => {
                    const [e, t] = Ke()(ze);
                    return [
                        r.useCallback(
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
            var Qe = (function () {
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
            Qe.hash = "b5502426b1e24be79c8ac8022f604d68";
            const qe = Qe,
                Oe = () => (0, K.A)(qe, {}, { fetchPolicy: "network-only" }).data;
            var We = (function () {
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
            We.hash = "20d3245f434315a6098e5e01121358e9";
            const Ve = We,
                Re = () => (0, K.A)(Ve, {}, { fetchPolicy: "network-only" }).data,
                Ne = Object.freeze({ NoAds: "no-ads-quick-free-trial" }),
                He = ({ quickFreeTrialProductType: e, setHideBackButton: t }) => {
                    const a = (0, d.Z)(),
                        n = Oe(),
                        [i] = Ae(),
                        o = Re(),
                        [s, c] = r.useState(!1),
                        [u, m] = r.useState(!1),
                        p = r.useMemo(() => o.viewer_v2?.list_quick_free_trials_subscriptions?.find((t) => t.free_trial_type === e), [o, e]),
                        g = r.useMemo(() => "InProgress" === p?.status || "Ended" === p?.status, [p]),
                        y = r.useMemo(() => n.viewer_v2?.quick_free_trial_products?.products?.find((t) => t.product_id === Ne[e]), [n, e]),
                        k = !!y;
                    r.useEffect(() => {
                        g ||
                            !k ||
                            s ||
                            i({ productId: Ne[e] })
                                .then(() => {
                                    c(!0), t(!0), a.scribe({ component: "activation", action: "success" });
                                })
                                .catch(() => {
                                    a.scribe({ component: "activation", action: "failure" }), m(!0);
                                });
                    }, [k, g, i, a, t, s, e]);
                    const f = r.useMemo(() => (p ? r.createElement(le, { trialSubscription: p }) : null), [p]);
                    return u ? r.createElement(Fe, null) : s && y?.duration_in_minutes ? r.createElement(Te, { durationInMinutes: y.duration_in_minutes, quickFreeTrialProductType: e }) : g && p?.status ? ("NoAds" === e ? f : void 0) : g || k ? r.createElement(l.Z, null) : r.createElement(De, null);
                },
                Ue = { context: "quick-free-trial" },
                je = (e) => {
                    const [t, a] = r.useState(!1),
                        l = r.useMemo(() => ({ page: "quick-free-trial", section: e.quickFreeTrialProductType }), [e.quickFreeTrialProductType]),
                        o = r.useMemo(() => r.createElement(He, (0, n.Z)({ setHideBackButton: a }, e)), [e]);
                    return r.createElement(u.nO, { namespace: l }, r.createElement(s.Z, { appBarStyle: $e.appBar, containerStyle: $e.modal, hideBackButton: t, history: e.history, withoutBottomBarMobile: !0 }, r.createElement(c.H, { errorConfig: Ue }, r.createElement(i.Z, { style: $e.backgroundShadow }), o)));
                },
                $e = o.default.create((e) => {
                    const t = "light" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(52 147 239 / 30%) 0%, rgb(255, 255, 255) 100%)" : "dark" === e.paletteName ? "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgba(52, 147, 239, 0.3) 0%, rgb(21 32 44) 100%)" : "radial-gradient(56.15141888052253% 56.15141888052254% at 49.97201160183933% 38.95898881943194%,#273649 0%,rgba(0,0,0,1) 100%)";
                    return { appBar: { backgroundColor: e.colors.transparent }, backgroundShadow: { position: "absolute", top: -300 * e.scaleMultiplier, left: -100 * e.scaleMultiplier, start: -150, minHeight: 650 * e.scaleMultiplier, width: "100%", backgroundImage: t }, modal: { minHeight: 600 } };
                });
        },
        130724: (e, t, a) => {
            var n = a(23103),
                r = a(492991),
                i = a(639646),
                l = a(643329),
                o = a(609736);
            n(
                { target: "Array", proto: !0 },
                {
                    at: function (e) {
                        var t = r(this),
                            a = i(t),
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
                r = a(265968),
                i = a(558885),
                l = a(643329),
                o = a(783326),
                s = a(824229),
                c = r("".charAt);
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
                        var t = o(i(this)),
                            a = t.length,
                            n = l(e),
                            r = n >= 0 ? n : a + n;
                        return r < 0 || r >= a ? void 0 : c(t, r);
                    },
                },
            );
        },
        182471: (e, t, a) => {
            e.exports = a.p + "OCF_full_premium_billboard.6eeff85a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.QuickFreeTrial.e779f6ca.js.map

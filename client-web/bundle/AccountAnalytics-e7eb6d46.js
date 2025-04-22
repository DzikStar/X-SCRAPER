"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e7eb6d46"],
    {
        441353: (e, t, a) => {
            a.d(t, { E: () => V, A: () => T });
            var s = a(552322),
                l = a(446368),
                r = a(702024),
                i = a(469745),
                n = a(504578),
                o = a(951547),
                c = a(840489),
                d = a(202784),
                m = a(430962),
                u = a(946839),
                p = a(82143),
                x = a(321910),
                y = a(674836),
                f = a(991732),
                g = a(598705),
                h = a(643715),
                v = a(829233),
                b = a(433579),
                j = a(701883),
                w = a(209570);
            const { Area: k, AreaChart: N, Bar: C, BarChart: M, CartesianGrid: F, Line: _, LineChart: S, XAxis: L, YAxis: R } = h;
            function D({ chartType: e = "area", data: t, dataKey: a, granularity: l, secondaryDataKey: r, timeRange: i }) {
                const n = (0, f.T)(),
                    o = { [a]: { color: "hsl(var(--colors-blue-500))", label: n[a]?.label ?? "" } };
                r && (o[r] = { color: "hsl(var(--colors-green-500))", label: n[r]?.label ?? "" });
                const c = (0, d.useMemo)(() => {
                        const s = t.map((e) => {
                            const t = { [a]: e[a], index: e.index, timestamp: e.timestamp };
                            return r && (t[r] = e[r]), t;
                        });
                        return "bar" === e ? s.reverse() : s;
                    }, [t, e, a, r]),
                    m = "bar" === e ? M : r ? S : N,
                    u = r ? _ : k;
                return (0, s.jsx)(v.BO, {
                    config: o,
                    className: "relative h-full max-h-[300px] min-h-[0] w-full select-none",
                    children: (0, s.jsxs)(m, {
                        data: c,
                        barCategoryGap: "25%",
                        margin: { bottom: 5, left: -10, right: r ? -10 : 10, top: 5 },
                        children: [
                            (0, s.jsxs)("defs", { children: [(0, s.jsxs)("linearGradient", { id: "fill1", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, s.jsx)("stop", { offset: "5%", stopColor: `var(--color-${a})`, stopOpacity: 0.8 }), (0, s.jsx)("stop", { offset: "95%", stopColor: `var(--color-${a})`, stopOpacity: 0 })] }), (0, s.jsxs)("linearGradient", { id: "fill2", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, s.jsx)("stop", { offset: "5%", stopColor: `var(--color-${r})`, stopOpacity: 0.8 }), (0, s.jsx)("stop", { offset: "95%", stopColor: `var(--color-${r})`, stopOpacity: 0 })] })] }),
                            (0, s.jsx)(R, { dataKey: a, tickFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: p.ot.includes(a) ? "percent" : "decimal" }).format(e), tickLine: !1, axisLine: !1, className: "text-subtext3", tick: { fill: r ? `var(--color-${a})` : "hsl(var(--colors-gray-600))" } }),
                            void 0 !== r && (0, s.jsx)(R, { orientation: "right", yAxisId: "right", dataKey: r, tickFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: p.ot.includes(r) ? "percent" : "decimal" }).format(e), tickLine: !1, axisLine: !1, className: "text-subtext3", tick: { fill: `var(--color-${r})` } }),
                            (0, s.jsx)(v.h7, { content: (0, s.jsx)(v.dg, { hideForKeys: ["incomplete"], className: "text-subtext2", labelClassName: "font-normal text-text", labelFormatter: (e, [t]) => t?.payload && (0, g.r2)(t.payload.timestamp, l, i), valueFormatter: (e, t) => Intl.NumberFormat("en-US", { maximumFractionDigits: 2, notation: "standard", style: p.ot.includes(t) ? "percent" : "decimal" }).format(e) }), cursor: "area" === e ? (0, s.jsx)(b.Q, {}) : (0, s.jsx)(j.d, {}) }),
                            (0, s.jsx)(F, { strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))", vertical: !1 }),
                            "area" === e ? (0, s.jsx)(u, { dataKey: a, stroke: `var(--color-${a})`, radius: 2, strokeWidth: 3, fill: "url(#fill1)", dot: !1, activeDot: (0, s.jsx)(w.m, {}), type: "linear", animationDuration: 500 }) : (0, s.jsx)(C, { dataKey: a, stroke: `var(--color-${a})`, radius: 2, strokeWidth: 1, fill: `var(--color-${a})`, animationDuration: 500 }),
                            void 0 !== r && ("area" === e ? (0, s.jsx)(u, { yAxisId: "right", dataKey: r, stroke: `var(--color-${r})`, radius: 2, strokeWidth: 3, fill: "url(#fill2)", dot: !1, activeDot: (0, s.jsx)(w.m, {}), type: "linear", animationDuration: 500 }) : (0, s.jsx)(C, { yAxisId: "right", dataKey: r, stroke: `var(--color-${r})`, radius: 2, strokeWidth: 1, fill: `var(--color-${r})`, animationDuration: 500 })),
                            (0, s.jsx)(L, { dataKey: "timestamp", tickLine: !1, axisLine: !1, tickMargin: 8, reversed: "bar" === e, minTickGap: 32, className: "text-subtext3", tickFormatter: (e) => (0, g.P)(+e, l), dx: "bar" === e ? 0 : -5 }),
                        ],
                    }),
                });
            }
            const T = ["Likes", "Impressions", "Engagements", "EngagementRate", "Bookmark", "Share", "Replies", "Retweets", "ProfileVisits", "CreatePost", "Follows"],
                V = ({ timeRange: e }) => {
                    const { config: t, updateConfig: a } = (0, y.V)(),
                        { currentMetricData: h, isFetching: v } = (0, x.w)(),
                        b = (0, i.a)("(max-width: 768px)"),
                        { analytics: j } = (0, m.M1)(),
                        w = (0, l.$8)(),
                        k = (0, f.T)(),
                        N = { daily: { label: j.daily }, monthly: { label: j.monthly }, payPeriod: { label: j.payPeriod }, weekly: { label: j.weekly } },
                        C = { area: { icon: (0, s.jsx)(n.Z, {}), label: j.line }, bar: { icon: (0, s.jsx)(o.Z, {}), label: j.bar } },
                        M = (0, d.useMemo)(() => (0, g.I7)(h, t?.granularity ?? "daily"), [h, t?.granularity]);
                    return t
                        ? (0, s.jsxs)("div", {
                              className: "bg-gray-0 rounded-2xl flex w-full flex-col border border-gray-200",
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: "flex items-start justify-between p-4",
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: "flex flex-col items-start justify-start gap-2 md:gap-4 lg:flex-row",
                                              children: [
                                                  (0, s.jsx)(u.q, {
                                                      options: T.map((e) => ({ label: k[e]?.label ?? "", value: e })).sort((e, t) => e.label.localeCompare(t.label)),
                                                      selected: t.primaryMetric,
                                                      setSelected: (e) => {
                                                          a({ primaryMetric: e }), w.scribe({ action: "select", component: "OverviewChartWidget", data: { metric: e }, element: "PrimaryMetricSelector", page: "account_analytics", section: "overview" });
                                                      },
                                                      disabled: t.secondaryMetric,
                                                      colorLabelClassName: "bg-blue-500",
                                                  }),
                                                  (0, s.jsx)(u.q, {
                                                      options: [{ label: j.none, value: "none" }, ...T.map((e) => ({ label: k[e]?.label ?? "", value: e })).sort((e, t) => e.label.localeCompare(t.label))],
                                                      selected: t.secondaryMetric,
                                                      setSelected: (e) => {
                                                          a({ secondaryMetric: e }), w.scribe({ action: "select", component: "OverviewChartWidget", data: { metric: e }, element: "SecondaryMetricSelector", page: "account_analytics", section: "overview" });
                                                      },
                                                      disabled: t.primaryMetric,
                                                      placeholder: b ? j.select : j.selectSecondaryMetric,
                                                      colorLabelClassName: "bg-green-500",
                                                  }),
                                              ],
                                          }),
                                          (0, s.jsxs)("div", {
                                              className: "flex flex-col items-end justify-start gap-2 md:gap-4 lg:flex-row",
                                              children: [
                                                  (0, s.jsx)(u.q, {
                                                      options: p.nb.map((e) => ({ label: N[e].label, value: e })),
                                                      selected: t.granularity ?? "daily",
                                                      setSelected: (e) => {
                                                          a({ granularity: e }), w.scribe({ action: "select", component: "OverviewChartWidget", data: { period: e }, element: "GranularitySelector", page: "account_analytics", section: "overview" });
                                                      },
                                                  }),
                                                  (0, s.jsx)(u.q, {
                                                      options: p.__.map((e) => ({ icon: C[e].icon, label: C[e].label, value: e })),
                                                      selected: t.chartType,
                                                      setSelected: (e) => {
                                                          a({ chartType: e }), w.scribe({ action: "select", component: "OverviewChartWidget", data: { type: e }, element: "ChartTypeSelector", page: "account_analytics", section: "overview" });
                                                      },
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, s.jsxs)("div", { className: (0, c.Z)("relative", { "pr-2": "none" === t.secondaryMetric }), children: [(0, s.jsx)(D, { data: M, dataKey: t.primaryMetric, secondaryDataKey: "none" === t.secondaryMetric ? void 0 : t.secondaryMetric, chartType: t.chartType, granularity: t.granularity, timeRange: e }), (0, s.jsx)("div", { className: (0, c.Z)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity delay-100 duration-200", { "opacity-0": !v, "opacity-100": v }), children: (0, s.jsx)(r.P, { size: "large" }) })] }),
                              ],
                          })
                        : null;
                };
        },
        586019: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            const s = {
                fragment: {
                    argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (r = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (i = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (n = { defaultValue: null, kind: "LocalArgument", name: "show_verified_followers" }), (o = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "AccountOverviewQuery",
                    selections: (d = [
                        {
                            alias: null,
                            args: [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }],
                            concreteType: "Viewer",
                            kind: "LinkedField",
                            name: "viewer_v2",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserResults",
                                    kind: "LinkedField",
                                    name: "user_results",
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
                                                        { condition: "show_verified_followers", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_follower_count", storageKey: null }] },
                                                        { alias: null, args: null, concreteType: "UserRelationshipCounts", kind: "LinkedField", name: "relationship_counts", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followers", storageKey: null }], storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: [
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                                { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                                { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                            ],
                                                            concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                            kind: "LinkedField",
                                                            name: "organic_metrics_time_series",
                                                            plural: !0,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "AnayticsMetricsTotalValue",
                                                                    kind: "LinkedField",
                                                                    name: "metric_values",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                                { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        c,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ]),
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [i, o, l, r, n], kind: "Operation", name: "AccountOverviewQuery", selections: d },
                params: { id: "LwtiA7urqM6eDeBheAFi5w", metadata: {}, name: "AccountOverviewQuery", operationKind: "query", text: null },
            };
            var l, r, i, n, o, c, d;
            s.hash = "b0a936bcc582a3be6cec24b9ddfb8a1b";
            const m = s;
        },
        10714: (e, t, a) => {
            a.d(t, { RV: () => ce, ZX: () => de });
            var s = a(552322),
                l = a(446368),
                r = a(739219),
                i = a(202784),
                n = a(889906),
                o = a(430962),
                c = a(777301),
                d = a(674836),
                m = a(702024),
                u = a(524145),
                p = a(808106),
                x = a(703383),
                y = a(607499),
                f = a(321910),
                g = a(598705);
            const h = ["Engagements", "Impressions", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share", "UrlClicks", "CreateTweet", "CreateQuote", "Unfollows", "CreateReply"],
                v = [...h, "VideoViews", "MediaViews"];
            function b({ children: e, newMediaMetricsEnabled: t, showVerifiedFollowers: a, timeRange: l }) {
                return (0, s.jsx)(y.S, { children: (0, s.jsx)(i.Suspense, { fallback: (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(m.P, { size: "large" }) }), children: (0, s.jsx)(w, { newMediaMetricsEnabled: t, showVerifiedFollowers: a, timeRange: l, children: e }) }) });
            }
            function j(e, t, a) {
                const s = (0, r.w)(e.to, e.from);
                return { from_time: 0 === s ? (0, u.l)((0, p.b)(e.from), { days: 1 }).toISOString() : (0, u.l)((0, p.b)(e.to), { days: 2 * s + 1 }).toISOString(), granularity: "Daily", requested_metrics: a ? h : v, show_verified_followers: t, to_time: e.to.toISOString() };
            }
            function w({ children: e, newMediaMetricsEnabled: t, showVerifiedFollowers: a, timeRange: l }) {
                const r = (0, i.useRef)(l),
                    o = (0, n.useRelayEnvironment)(),
                    [c, d] = (0, i.useState)(!1),
                    [u, p] = (0, i.useState)(null),
                    [y, h] = (0, i.useState)(j(l, a, t)),
                    v = (0, n.useLazyLoadQuery)(de, y);
                return (
                    (0, i.useEffect)(() => {
                        (r.current = l), d(!0);
                        const e = j(l, a, t);
                        (0, x.fetchQuery)(o, de, e, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then(() => {
                                h(e), d(!1);
                            });
                    }, [o, l, a, t]),
                    (0, i.useEffect)(() => {
                        if (v) {
                            const e = (function (e, t) {
                                if (!e?.viewer_v2?.user_results?.result) return null;
                                if ("User" !== e.viewer_v2?.user_results?.result.__typename) return null;
                                const a = +(e.viewer_v2.user_results.result.verified_follower_count ?? 0),
                                    s = +(e.viewer_v2.user_results.result.relationship_counts?.followers ?? 0),
                                    l = (0, g.DN)(e.viewer_v2.user_results.result.organic_metrics_time_series),
                                    { currentMetricData: r, prevMetricData: i } = (0, g.fI)(l, t.from, t.to);
                                return { currentMetricData: r, currentTotals: (0, g.R$)(r), followerCount: s, prevMetricData: i, prevTotals: i ? (0, g.R$)(i) : null, verifiedFollowerCount: a };
                            })(v, r.current);
                            p(e);
                        }
                    }, [v]),
                    null === u ? (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(m.P, { size: "large" }) }) : (0, s.jsx)(f.D, { value: { isFetching: c, ...u, timeRange: l }, children: e })
                );
            }
            function k({ children: e, timeRange: t }) {
                const [a, l] = (0, i.useState)(null);
                return (
                    (0, i.useEffect)(() => {
                        l(
                            (function (e) {
                                const t = (0, g.vd)(1e3, 1e4),
                                    a = t * (0, g.vd)(1.1, 5),
                                    s = (0, g.DN)((0, g.EB)(e, v)),
                                    { currentMetricData: l, prevMetricData: r } = (0, g.fI)(s, e.from, e.to);
                                return { currentMetricData: l, currentTotals: (0, g.R$)(l), followerCount: a, prevMetricData: r, prevTotals: r ? (0, g.R$)(r) : null, verifiedFollowerCount: t };
                            })(t),
                        );
                    }, [t]),
                    a ? (0, s.jsx)(f.D, { value: { isFetching: !1, ...a, timeRange: t }, children: e }) : null
                );
            }
            var N = a(236379),
                C = a(880917),
                M = a(796309),
                F = a(840489),
                _ = a(995961),
                S = a(643715),
                L = a(829233),
                R = a(701883);
            const { Bar: D, BarChart: T, CartesianGrid: V, XAxis: O, YAxis: K } = S,
                A = "Posts",
                I = "Replies";
            function P({ data: e, keysToShow: t }) {
                const { analytics: a } = (0, o.M1)(),
                    l = (0, i.useMemo)(() => e.reverse().map((e) => ({ [A]: e.posts ?? 0, [I]: "replies" in e ? e.replies : 0, timestamp: e.timestamp })), [e]);
                return (0, s.jsx)(L.BO, { config: { [A]: { color: "hsl(var(--colors-blue-500))", label: a.CreatePostLabel }, [I]: { color: "hsl(var(--colors-green-500))", label: a.CreateReplyLabel } }, className: "relative aspect-auto h-full min-h-[0] w-full select-none pe-2", children: (0, s.jsxs)(T, { data: l, barCategoryGap: t.posts && t.replies ? "15%" : "25%", barGap: "10%", stackOffset: t.posts && t.replies ? "sign" : "none", margin: { bottom: 5, left: -10, right: 10, top: 5 }, children: [(0, s.jsx)(K, { tickFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(e), tickLine: !1, axisLine: !1, type: "number", className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" }, tickCount: 4 }), (0, s.jsx)(L.h7, { content: (0, s.jsx)(L.dg, { hideForKeys: ["incomplete"], className: "text-subtext2", labelClassName: "font-normal text-text", labelFormatter: (e, [t]) => t?.payload && (0, g.r2)(+t.payload.timestamp), valueFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(Math.abs(e)) }), cursor: (0, s.jsx)(R.d, {}) }), (0, s.jsx)(V, { strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))", vertical: !1 }), t.posts && (0, s.jsx)(D, { dataKey: t.posts ? A : I, fill: `var(--color-${t.posts ? A : I})`, radius: 2, strokeWidth: 3, animationDuration: 500 }), t.replies && (0, s.jsx)(D, { dataKey: t.replies ? I : A, fill: `var(--color-${t.replies ? I : A})`, radius: 2, strokeWidth: 3, animationDuration: 500 }), (0, s.jsx)(O, { dataKey: "timestamp", tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: 32, className: "text-subtext3", tickFormatter: (e) => (0, g.P)(+e), reversed: !0, dx: -5 })] }) });
            }
            const $ = ({ showCreateReply: e }) => {
                    const { currentMetricData: t, isFetching: a } = (0, f.w)(),
                        { analytics: l } = (0, o.M1)(),
                        [r, n] = (0, i.useState)({ posts: !0, replies: e }),
                        c = (0, i.useMemo)(() => Object.entries(t).map(([t, a]) => ({ posts: a.CreatePost ?? 0, timestamp: t, ...(e && { replies: a.CreateReply }) })), [t, e]),
                        d = (e) => {
                            n((t) => {
                                const a = { ...t };
                                return (a[e] = !t[e]), a.posts || a.replies || (a["posts" === e ? "replies" : "posts"] = !0), a;
                            });
                        };
                    return (0, s.jsxs)("div", { className: "bg-gray-0 rounded-2xl relative flex h-[170px] w-full flex-col gap-4 md:h-[200px] border border-gray-200", children: [(0, s.jsxs)("div", { className: "flex items-start justify-between px-4 pt-4", children: [e ? (0, s.jsxs)("div", { className: "text-subtext1 flex select-none items-center gap-4 font-medium text-gray-900", children: [(0, s.jsxs)("button", { className: (0, M.cn)("flex cursor-pointer items-center gap-1 rounded-md border p-1 md:hover:bg-gray-100", { "opacity-50": !r.posts }), onClick: () => d("posts"), "aria-label": l.CreatePostLabel, type: "button", children: [(0, s.jsx)("div", { className: "h-4 w-1 shrink-0 rounded-sm bg-blue-500" }), l.CreatePostLabel] }), (0, s.jsxs)("button", { "aria-label": l.CreateReplyLabel, className: (0, M.cn)("flex cursor-pointer items-center gap-1 rounded-md border p-1 md:hover:bg-gray-100", { "opacity-50": !r.replies }), onClick: () => d("replies"), type: "button", children: [(0, s.jsx)("div", { className: "h-4 w-1 shrink-0 rounded-sm bg-green-500" }), l.CreateReplyLabel] })] }) : (0, s.jsx)("div", { className: "text-subtext1 md:text-body font-medium text-gray-900", children: l.postsOverTime }), (0, s.jsxs)(_.cu, { children: [(0, s.jsx)(_.ag, { children: (0, s.jsx)("button", { className: "text-gray-700", type: "button", children: (0, s.jsx)(C.Z, {}) }) }), (0, s.jsx)(_.hC, { title: l.postsOverTime, description: l.CreatePostInfo, children: (0, s.jsx)("div", { className: "text-gray-800 max-w-[300px] w-full", children: (0, s.jsx)(E, { data: c, showCreateReply: e }) }) })] })] }), (0, s.jsx)(P, { data: c, keysToShow: r }), (0, s.jsx)("div", { className: (0, F.Z)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity delay-100 duration-200", { "opacity-0": !a, "opacity-100": a }), children: (0, s.jsx)(m.P, { size: "large" }) })] });
                },
                E = ({ data: e, showCreateReply: t }) => {
                    const { analytics: a } = (0, o.M1)(),
                        l = (0, i.useMemo)(() => {
                            const t = e.reduce((e, t) => ({ posts: e.posts + (t.posts || 0), replies: e.replies + (t.replies || 0) }), { posts: 0, replies: 0 }),
                                a = t.posts + t.replies,
                                s = e.length;
                            return { posts: { avg: s ? +(t.posts / s).toFixed(1) : 0, percentage: a ? +((t.posts / a) * 100).toFixed(1) : 0, total: t.posts }, replies: { avg: s ? +(t.replies / s).toFixed(1) : 0, percentage: a ? +((t.replies / a) * 100).toFixed(1) : 0, total: t.replies } };
                        }, [e]);
                    return (0, s.jsxs)(N.iA, { className: "text-subtext3", children: [(0, s.jsx)(N.xD, { className: "p-0", children: (0, s.jsxs)(N.SC, { children: [(0, s.jsx)(N.ss, { className: "h-8 p-1 font-normal", children: a.Type }), (0, s.jsx)(N.ss, { className: "h-8 p-1 text-right font-normal", children: a.Total }), (0, s.jsx)(N.ss, { className: "h-8 p-1 text-right font-normal", children: a.Avg }), (0, s.jsx)(N.ss, { className: "h-8 p-1 text-right font-normal", children: "%" })] }) }), (0, s.jsxs)(N.RM, { children: [(0, s.jsxs)(N.SC, { children: [(0, s.jsxs)(N.pj, { className: "flex items-center gap-2 p-1", children: [(0, s.jsx)("div", { className: "h-4 w-1 shrink-0 rounded-sm bg-blue-500" }), a.CreatePostLabel] }), (0, s.jsx)(N.pj, { className: "p-1 text-right", children: l.posts.total }), (0, s.jsx)(N.pj, { className: "p-1 text-right", children: l.posts.avg }), (0, s.jsxs)(N.pj, { className: "p-1 text-right", children: [l.posts.percentage, "%"] })] }), t && (0, s.jsxs)(N.SC, { children: [(0, s.jsxs)(N.pj, { className: "flex items-center gap-2 p-1", children: [(0, s.jsx)("div", { className: "h-4 w-1 shrink-0 rounded-sm bg-green-500" }), a.CreateReplyLabel] }), (0, s.jsx)(N.pj, { className: "p-1 text-right", children: l.replies.total }), (0, s.jsx)(N.pj, { className: "p-1 text-right", children: l.replies.avg }), (0, s.jsxs)(N.pj, { className: "p-1 text-right", children: [l.replies.percentage, "%"] })] })] })] });
                },
                { Bar: U, BarChart: B, CartesianGrid: W, ReferenceLine: G, XAxis: q, YAxis: Z } = S,
                Q = "Follows",
                z = "Unfollows";
            function X({ data: e }) {
                const { analytics: t } = (0, o.M1)(),
                    a = (0, i.useMemo)(() => e.reverse().map((e) => ({ [Q]: e.follows, timestamp: e.timestamp, [z]: -e.unfollows })), [e]);
                return (0, s.jsx)(L.BO, { config: { [Q]: { color: "hsl(var(--colors-blue-500))", label: t.FollowsLabel }, [z]: { color: "hsl(var(--colors-red-500))", label: t.UnfollowsLabel } }, className: "relative aspect-auto h-full min-h-[0] w-full select-none pe-2", children: (0, s.jsxs)(B, { data: a, barCategoryGap: "25%", stackOffset: "sign", margin: { bottom: 5, left: -10, right: 10, top: 5 }, children: [(0, s.jsx)(Z, { tickFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(e), domain: ["dataMin", "dataMax"], tickLine: !1, axisLine: !1, type: "number", className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" } }), (0, s.jsx)(L.h7, { content: (0, s.jsx)(L.dg, { hideForKeys: ["incomplete"], className: "text-subtext2", labelClassName: "font-normal text-text", labelFormatter: (e, [t]) => t?.payload && (0, g.r2)(+t.payload.timestamp), valueFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(Math.abs(e)) }), cursor: (0, s.jsx)(R.d, {}) }), (0, s.jsx)(W, { strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))", vertical: !1 }), (0, s.jsx)(U, { dataKey: Q, stackId: "a", stroke: `var(--color-${Q})`, radius: [2, 2, 0, 0], strokeWidth: 1, fill: `var(--color-${Q})`, animationDuration: 500 }), (0, s.jsx)(U, { dataKey: z, stackId: "a", stroke: `var(--color-${z})`, radius: [2, 2, 0, 0], strokeWidth: 1, fill: `var(--color-${z})`, animationDuration: 500 }), (0, s.jsx)(G, { y: 0, stroke: "hsl(var(--colors-gray-400))" }), (0, s.jsx)(q, { dataKey: "timestamp", tickLine: !1, axisLine: !1, tickMargin: 8, reversed: !0, minTickGap: 32, className: "text-subtext3", tickFormatter: (e) => (0, g.P)(+e) })] }) });
            }
            const Y = () => {
                const { currentMetricData: e, isFetching: t } = (0, f.w)(),
                    { analytics: a } = (0, o.M1)(),
                    l = (0, i.useMemo)(() => Object.entries(e).map(([e, t]) => ({ follows: t.Follows ?? 0, timestamp: e, unfollows: t.Unfollows ?? 0 })), [e]);
                return (0, s.jsxs)("div", { className: "bg-gray-0 rounded-2xl relative flex h-[170px] w-full flex-col gap-4 md:h-[200px] border border-gray-200", children: [(0, s.jsxs)("div", { className: "flex items-center justify-between px-4 pt-4", children: [(0, s.jsx)("div", { className: "text-subtext1 md:text-body font-medium text-gray-900", children: a.followsOverTime }), (0, s.jsxs)(_.cu, { children: [(0, s.jsx)(_.ag, { children: (0, s.jsx)("button", { className: "text-gray-700", type: "button", children: (0, s.jsx)(C.Z, {}) }) }), (0, s.jsx)(_.hC, { title: a.followsOverTime, description: a.followsOverTimeInfo })] })] }), (0, s.jsx)(X, { data: l }), (0, s.jsx)("div", { className: (0, F.Z)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity delay-100 duration-200", { "opacity-0": !t, "opacity-100": t }), children: (0, s.jsx)(m.P, { size: "large" }) })] });
            };
            var H = a(469745),
                J = a(308892),
                ee = a(85349),
                te = a(991732);
            const ae = ["Impressions", "EngagementRate", "Engagements", "ProfileVisits", "Replies", "Likes", "Retweets", "Bookmark", "Share"],
                se = ["VideoViews", "MediaViews"];
            function le({ newMediaMetricsEnabled: e = !1, showVerifiedFollowers: t = !1 }) {
                const { currentTotals: a, followerCount: l, prevTotals: r, verifiedFollowerCount: n } = (0, f.w)(),
                    c = (0, te.T)(),
                    { analytics: d } = (0, o.M1)(),
                    m = ae.map((e) => ({ key: e, ...c[e] })),
                    u = se.map((e) => ({ key: e, ...c[e] })),
                    p = (0, i.useMemo)(() => (0, g.Q3)(a, r), [a, r]),
                    x = (0, H.a)("(max-width: 400px)");
                return (0, s.jsxs)("div", { className: "grid gap-4", style: { gridTemplateColumns: x ? "repeat(auto-fit, minmax(120px, 1fr))" : "repeat(auto-fit, minmax(175px, 1fr))" }, children: [t && (0, s.jsx)(ee.g, { secondaryValue: Math.floor(l), label: (0, s.jsxs)("div", { className: "flex items-center gap-1", children: [(0, s.jsx)("div", { className: "w-auto", children: d.verifiedFollowers }), (0, s.jsx)(J.Z, { className: "fill-badge" }, "User")] }), value: n, info: d.verifiedFollowersInfo }), m.map((e) => (0, s.jsx)(ee.g, { label: e.label, value: p[e.key]?.current ?? 0, change: 0 !== p[e.key]?.percentChange ? p[e.key]?.percentChange : null, info: e.info, type: "EngagementRate" === e.key ? "percent" : "number" }, e.key)), !e && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: "text-headline1 col-span-full pt-4 font-bold", children: d.mediaActivity }), u.map((e) => (0, s.jsx)(ee.g, { label: e.label, value: p[e.key]?.current ?? 0, change: 0 !== p[e.key]?.percentChange ? p[e.key]?.percentChange : null, info: e.info }, e.key))] })] });
            }
            var re = a(441353),
                ie = a(612047);
            function ne() {
                const { currentMetricData: e } = (0, f.w)(),
                    t = (0, te.T)();
                return (0, s.jsx)(ie.f, {
                    getCSVContent: () =>
                        (function (e, t) {
                            const a = ["Impressions", "Likes", "Engagements", "Bookmark", "Share", "Follows", "Unfollows", "Replies", "Retweets", "ProfileVisits", "CreateTweet", "VideoViews", "MediaViews"],
                                s = ["Date", ...a.map((e) => t[e].label)],
                                l = Object.entries(e)
                                    .reverse()
                                    .map(([e, t]) => {
                                        const s = new Date(Number.parseInt(e)).toLocaleDateString("en-US", { day: "numeric", month: "short", timeZone: "UTC", weekday: "short", year: "numeric" }),
                                            l = [(0, g.Bi)(s)];
                                        return (
                                            a.forEach((e) => {
                                                l.push((0, g.Bi)(t[e]?.toString() || "0"));
                                            }),
                                            l
                                        );
                                    });
                            return (0, g.NW)(s, l);
                        })(e, t),
                    filename: "account_overview_analytics.csv",
                    section: "overview",
                });
            }
            function oe({ isMockData: e = !1, isWebView: t = !1, newMediaMetricsEnabled: a = !1, showCreateReply: n = !1, showFollowsOverTimeWidget: m = !1, showPostsOverTimeWidget: u = !1, showVerifiedFollowers: p = !1 }) {
                const x = (0, l.$8)(),
                    { config: y, updateConfig: f } = (0, d.V)(),
                    [g, h] = (0, i.useState)((0, c.X)(y.timeRange)),
                    { analytics: v } = (0, o.M1)();
                (0, i.useEffect)(() => {
                    x.scribePageImpression({ action: "show", page: "account_analytics", section: "overview" });
                }, [x]);
                const j = e ? k : b;
                return (0, s.jsx)(j, {
                    timeRange: g,
                    showVerifiedFollowers: p,
                    newMediaMetricsEnabled: a,
                    children: (0, s.jsxs)("div", {
                        className: "text-text font-chirp flex h-full w-full flex-col gap-4 p-4",
                        children: [
                            (0, s.jsxs)("div", {
                                className: "flex flex-col items-start justify-between gap-4 max-sm:flex-col md:flex-row",
                                children: [
                                    (0, s.jsx)("span", { className: "text-headline1 whitespace-nowrap font-bold", children: v.accountOverview }),
                                    (0, s.jsxs)("div", {
                                        className: "scrollbar-hide flex h-full max-w-full items-center gap-2 overflow-x-auto",
                                        children: [
                                            (0, s.jsx)(c.W, {
                                                timeRange: g,
                                                onChange: (e, t) => {
                                                    h(e), t || f({ timeRange: Math.abs((0, r.w)(e.from, e.to) - 1) });
                                                },
                                            }),
                                            !t && (0, s.jsx)(ne, {}),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", { className: "scrollbar-hide relative flex h-full flex-col gap-4 overflow-auto", children: [(0, s.jsx)(re.E, { timeRange: g }), (m || u) && (0, s.jsxs)("div", { className: "flex flex-col gap-4 min-[988px]:grid min-[988px]:grid-cols-2", children: [m && (0, s.jsx)(Y, {}), u && (0, s.jsx)($, { showCreateReply: n })] }), (0, s.jsx)(le, { showVerifiedFollowers: p, newMediaMetricsEnabled: a })] }),
                        ],
                    }),
                });
            }
            function ce({ fallbackConfig: e, ...t }) {
                return (0, s.jsx)(d.x, { fallbackConfig: e, children: (0, s.jsx)(oe, { ...t }) });
            }
            const de = a(586019);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e7eb6d46.d0f5f9ca.js.map

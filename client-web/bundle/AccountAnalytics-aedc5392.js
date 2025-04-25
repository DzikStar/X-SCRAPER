"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-aedc5392"],
    {
        744590: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            const l = {
                fragment: {
                    argumentDefinitions: (s = [
                        { defaultValue: null, kind: "LocalArgument", name: "from_time_incl" },
                        { defaultValue: null, kind: "LocalArgument", name: "to_time_excl" },
                    ]),
                    kind: "Fragment",
                    metadata: null,
                    name: "AudiencePageGetCountryCodeQuery",
                    selections: [
                        {
                            alias: null,
                            args: (n = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]),
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
                                                (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (r = {
                                                            alias: null,
                                                            args: [
                                                                { kind: "Literal", name: "dimensions", value: ["Country", "EngagementType"] },
                                                                { kind: "Variable", name: "from_time_incl", variableName: "from_time_incl" },
                                                                { kind: "Literal", name: "granularity", value: "Total" },
                                                                { kind: "Literal", name: "metrics", value: "Count" },
                                                                { kind: "Variable", name: "to_time_excl", variableName: "to_time_excl" },
                                                            ],
                                                            concreteType: "UecMetricsTimeSeriesValue",
                                                            kind: "LinkedField",
                                                            name: "uec_country_metrics_daily_time_series_count",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "country", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "engagement_type", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        }),
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: s, kind: "Operation", name: "AudiencePageGetCountryCodeQuery", selections: [{ alias: null, args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [r, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, c], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "f9trQ4_RXzoqBm8zXLg_zg", metadata: {}, name: "AudiencePageGetCountryCodeQuery", operationKind: "query", text: null },
            };
            var s, n, i, r, c;
            l.hash = "58d1dee7d141000a3175bdcd3ba1d39a";
            const o = l;
        },
        806069: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
            const l = {
                fragment: {
                    argumentDefinitions: [(s = { defaultValue: null, kind: "LocalArgument", name: "dimensions" }), (n = { defaultValue: null, kind: "LocalArgument", name: "from_time_incl" }), (i = { defaultValue: null, kind: "LocalArgument", name: "to_time_excl" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "AudiencePageGetCreatorAnalyticsDailyQuery",
                    selections: [
                        {
                            alias: null,
                            args: (r = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]),
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
                                                (c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (o = {
                                                            alias: null,
                                                            args: [
                                                                { kind: "Variable", name: "dimensions", variableName: "dimensions" },
                                                                { kind: "Variable", name: "from_time_incl", variableName: "from_time_incl" },
                                                                { kind: "Literal", name: "granularity", value: "Total" },
                                                                { kind: "Literal", name: "metrics", value: "Count" },
                                                                { kind: "Variable", name: "to_time_excl", variableName: "to_time_excl" },
                                                            ],
                                                            concreteType: "UecMetricsTimeSeriesValue",
                                                            kind: "LinkedField",
                                                            name: "uec_metrics_daily_time_series_count",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "age", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "gender", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "engagement_type", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "is_in_network", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "client_app_id", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        }),
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [n, i, s], kind: "Operation", name: "AudiencePageGetCreatorAnalyticsDailyQuery", selections: [{ alias: null, args: r, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "hVLF49G7rHX0S6kR-psEkA", metadata: {}, name: "AudiencePageGetCreatorAnalyticsDailyQuery", operationKind: "query", text: null },
            };
            var s, n, i, r, c, o, d;
            l.hash = "6d16d8b414593def4c05514fd09f7bf0";
            const u = l;
        },
        333663: (e, t, a) => {
            a.r(t), a.d(t, { default: () => u });
            const l = {
                fragment: {
                    argumentDefinitions: [(s = { defaultValue: null, kind: "LocalArgument", name: "from_time_incl" }), (n = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (i = { defaultValue: null, kind: "LocalArgument", name: "to_time_excl" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "AudiencePageGetHeatmapDataQuery",
                    selections: [
                        {
                            alias: null,
                            args: (r = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]),
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
                                                (c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (o = {
                                                            alias: null,
                                                            args: [
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time_incl" }], kind: "ObjectValue", name: "from_time" },
                                                                { kind: "Literal", name: "granularity", value: "Hourly" },
                                                                { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time_excl" }], kind: "ObjectValue", name: "to_time" },
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
                                                        }),
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [s, i, n], kind: "Operation", name: "AudiencePageGetHeatmapDataQuery", selections: [{ alias: null, args: r, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "X9E5LLu_0YAm9HXumNvrkA", metadata: {}, name: "AudiencePageGetHeatmapDataQuery", operationKind: "query", text: null },
            };
            var s, n, i, r, c, o, d;
            l.hash = "5ff0fb97b6033128f4f8d4ce146972b1";
            const u = l;
        },
        267240: (e, t, a) => {
            a.d(t, { g1: () => E, mx: () => I, db: () => Q, ks: () => z });
            var l = a(552322),
                s = a(941204),
                n = a(202784),
                i = a(703383),
                r = a(446368),
                c = a(702024),
                o = a(469745),
                d = a(430962),
                u = a(777301),
                m = a(211205),
                g = a(840489),
                x = a(995961),
                y = a(511974),
                p = a(991732);
            function h({ compactView: e = !1 }) {
                const { activeTimesData: t, loadingStates: a, selectedMetric: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(a.heatmapMetrics),
                    [u, h] = (0, n.useState)(!1),
                    v = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(a.heatmapMetrics);
                }, [a.heatmapMetrics]);
                const f = (0, n.useMemo)(() => v[s]?.label || s, [v, s]),
                    _ = Array.from({ length: 24 }, (e, t) => t),
                    b = [i.dayMo, i.dayTu, i.dayWe, i.dayTh, i.dayFr, i.daySa, i.daySu];
                if (!t) return null;
                const j = t,
                    k = j?.some((e) => e.metric_values.some((e) => (e.metric_value || 0) > 0));
                if (!k || !j) return null;
                const w = {},
                    N = {};
                j.forEach((e) => {
                    const t = new Date(e.timestamp.iso8601_time),
                        a = `${b[0 === t.getDay() ? 6 : t.getDay() - 1]}-${t.getHours()}`,
                        l = e.metric_values.reduce((e, t) => e + (t.metric_value || 0), 0);
                    N[a] || (N[a] = []), N[a].push(l);
                });
                const M = Object.values(N)
                        .map((e) => e.reduce((e, t) => e + t, 0) / e.length)
                        .sort((e, t) => e - t),
                    T = M[Math.floor(0.25 * M.length)] || 0,
                    S = M[Math.floor(0.75 * M.length)] || 0,
                    F = S + 1.5 * (S - T);
                Object.entries(N).forEach(([e, t]) => {
                    const a = t.reduce((e, t) => e + t, 0) / t.length;
                    w[e] = Math.min(a, F);
                }),
                    Object.keys(w).forEach((e) => {
                        w[e] = F > 0 ? w[e] / F : 0;
                    });
                const C = (e) => {
                        const t = "hsl(var(--colors-blue-500))",
                            a = 0.15;
                        if (void 0 === e || 0 === e) return { backgroundColor: t, opacity: a };
                        return { backgroundColor: t, opacity: Math.min(a + 0.85 * e, 1) };
                    },
                    V = () => {
                        e && h(!0);
                    },
                    A = ({ showTimeLabels: e }) =>
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: "flex flex-col",
                                    children: (0, l.jsxs)("div", {
                                        className: (0, g.W)("grid", { "grid-cols-[repeat(7,1fr)]": !e, "grid-cols-[repeat(7,1fr)_auto]": e, "gap-[0.5px]": !e, "gap-0.5": e, "max-h-[152px]": !e }, "grid-rows-[repeat(24,auto)_auto]"),
                                        children: [
                                            _.map((t) =>
                                                (0, l.jsxs)(
                                                    n.Fragment,
                                                    {
                                                        children: [
                                                            b.map((a) => {
                                                                const s = `${a}-${t}`,
                                                                    n = w[s],
                                                                    i = 0 === t,
                                                                    r = t === _.length - 1,
                                                                    c = a === b[0],
                                                                    o = a === b[b.length - 1];
                                                                return (0, l.jsx)("div", { style: C(n), className: (0, g.W)({ "h-1.5": !e, "h-4": e }, "min-w-0", { "rtl:rounded-tr-lg ltr:rounded-tl-lg": i && c, "rtl:rounded-tl-lg ltr:rounded-tr-lg": i && o, "rtl:rounded-br-lg ltr:rounded-bl-lg": r && c, "rtl:rounded-bl-lg ltr:rounded-br-lg": r && o }) }, s);
                                                            }),
                                                            e && (0, l.jsx)("div", { className: "h-4 text-gray-600 text-subtext2 flex items-center", children: t % 4 == 0 ? `${0 === t || 12 === t ? 12 : t % 12}${t < 12 ? "am" : "pm"}` : "" }),
                                                        ],
                                                    },
                                                    `row-${t}`,
                                                ),
                                            ),
                                            e && b.map((e) => (0, l.jsx)("div", { className: "text-gray-600 text-center text-subtext2 mt-1", children: e }, `header-${e}`)),
                                            e && (0, l.jsx)("div", { className: "mt-1" }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)("div", { className: (0, g.W)("flex items-center gap-2", { "mt-2": !e, "mt-4": e }), children: e && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("span", { className: "text-gray-600 text-subtext2", children: i.leastEngaged }), (0, l.jsxs)("div", { className: "h-1.5 flex-1 rounded-full flex", children: [(0, l.jsx)("div", { className: "flex-1 rounded-l-full", style: { backgroundColor: "hsl(var(--colors-blue-500) / 0.15)" } }), (0, l.jsx)("div", { className: "flex-1", style: { backgroundColor: "hsl(var(--colors-blue-500) / 0.4)" } }), (0, l.jsx)("div", { className: "flex-1", style: { backgroundColor: "hsl(var(--colors-blue-500) / 0.65)" } }), (0, l.jsx)("div", { className: "flex-1", style: { backgroundColor: "hsl(var(--colors-blue-500) / 0.85)" } }), (0, l.jsx)("div", { className: "flex-1 rounded-r-full", style: { backgroundColor: "hsl(var(--colors-blue-500))" } })] }), (0, l.jsx)("span", { className: "text-gray-600 text-subtext2", children: i.mostEngaged })] }) }),
                            ],
                        });
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.activeTimesTitle,
                            onClick: e ? V : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.activeTimesTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), V();
                                                },
                                                children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                            }),
                                    ],
                                }),
                                !e && (0, l.jsx)("div", { className: "text-gray-600 text-subtext3 mb-4", children: i.activeTimesSubtitle }),
                                e ? (0, l.jsx)("div", { className: "mt-2", "aria-label": "Heatmap", children: (0, l.jsx)(A, { showTimeLabels: !1 }) }) : (0, l.jsx)(A, { showTimeLabels: !0 }),
                            ],
                        }),
                        (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { children: [i.activeTimesTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", f, ")"] })] }), children: (0, l.jsxs)("div", { className: "pt-4", children: [(0, l.jsx)("div", { className: "text-gray-600 text-subtext3 mb-2", children: i.activeTimesSubtitle }), (0, l.jsx)(A, { showTimeLabels: !0 })] }) }) }),
                        (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                    ],
                });
            }
            var v = a(598705),
                f = a(542372);
            function _({ compactView: e = !1 }) {
                const { metrics: t, selectedMetric: a, loadingStates: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(s.audienceMetrics),
                    [u, h] = (0, n.useState)(!1),
                    _ = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(s.audienceMetrics);
                }, [s.audienceMetrics]);
                const b = (0, n.useMemo)(() => ({ Age13to17: i.age13to17, Age18to24: i.age18to24, Age25to34: i.age25to34, Age35To44: i.age35to44, Age45To54: i.age45to54, Age55To64: i.age55to64, AgeOver65: i.age65plus }), [i.age13to17, i.age18to24, i.age25to34, i.age35to44, i.age45to54, i.age55to64, i.age65plus]),
                    j = ["Age13to17", "Age18to24", "Age25to34", "Age35To44", "Age45To54", "Age55To64", "AgeOver65"],
                    k = (0, n.useMemo)(() => {
                        const e = (0, v.ZT)(t, "age", a),
                            l = new Map(e.map((e) => [e.name, { count: e.count, formattedCount: e.formattedCount }]));
                        return j.map((e) => {
                            const t = l.get(e);
                            return { label: b[e], value: t?.count || 0, formattedValue: t?.formattedCount || "0", tooltip: `${b[e]}: ${t?.formattedCount || "0"}` };
                        });
                    }, [t, a, b, j]),
                    w = () => {
                        h(!0);
                    },
                    N = (0, n.useMemo)(() => _[a]?.label || a, [_, a]);
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.ageTitle,
                            onClick: e ? w : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, g.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.ageTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), w();
                                                },
                                                children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(f.Z, { data: k, title: i.ageTitle, sortByValue: !1, compactView: e, showLabelsInCompactView: !0 }) }) }),
                            ],
                        }),
                        (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { children: [i.ageTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", N, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(f.Z, { data: k, title: i.ageTitle, sortByValue: !1, compactView: !1, showLabelsInCompactView: !0 }) }) }) }),
                        (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                    ],
                });
            }
            var b = a(889906),
                j = a(607499);
            function k({ children: e, timeRange: t, selectedMetric: a, showFollowersChart: s = !1 }) {
                return (0, l.jsx)(j.S, { children: (0, l.jsx)(n.Suspense, { fallback: (0, l.jsx)("div", { className: "pt-16", children: (0, l.jsx)(c.P, { size: "large" }) }), children: (0, l.jsx)(w, { timeRange: t, selectedMetric: a, showFollowersChart: s, children: e }) }) });
            }
            function w({ children: e, timeRange: t, selectedMetric: a, showFollowersChart: s = !1 }) {
                const r = (0, n.useRef)(t),
                    c = (0, b.useRelayEnvironment)(),
                    [o, d] = (0, n.useState)({ audienceMetrics: !1, countryMetrics: !1, heatmapMetrics: !1 }),
                    [u, g] = (0, n.useState)({ audience: { dimensions: ["Age", "Gender", "EngagementType", "ClientAppId", ...(s ? ["IsInNetwork"] : [])], from_time_incl: t.from.getTime(), to_time_excl: t.to.getTime() }, heatmap: { from_time_incl: new Date(t.to.getTime() - 24192e5).toISOString(), to_time_excl: t.to.toISOString(), requested_metrics: [a] }, country: { from_time_incl: t.from.getTime(), to_time_excl: t.to.getTime() } }),
                    [x, y] = (0, n.useState)([]),
                    [p, h] = (0, n.useState)([]),
                    [v, f] = (0, n.useState)([]),
                    [_, j] = (0, n.useState)(a),
                    k = (0, b.useLazyLoadQuery)(I, u.audience),
                    w = (0, b.useLazyLoadQuery)(z, u.heatmap),
                    N = (0, b.useLazyLoadQuery)(Q, u.country);
                (0, n.useEffect)(() => {
                    r.current = t;
                    const e = { audience: { dimensions: ["Age", "Gender", "EngagementType", "ClientAppId", ...(s ? ["IsInNetwork"] : [])], from_time_incl: t.from.getTime(), to_time_excl: t.to.getTime() }, country: { from_time_incl: t.from.getTime(), to_time_excl: t.to.getTime() } };
                    d({ audienceMetrics: !0, countryMetrics: !0, heatmapMetrics: !1 }),
                        Promise.all([
                            (0, i.fetchQuery)(c, I, e.audience, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    "User" === e?.viewer_v2?.user_results?.result?.__typename && y(Array.from(e.viewer_v2.user_results.result.uec_metrics_daily_time_series_count ?? [])), d((e) => ({ ...e, audienceMetrics: !1 }));
                                }),
                            (0, i.fetchQuery)(c, Q, e.country, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    "User" === e?.viewer_v2?.user_results?.result?.__typename && h(Array.from(e.viewer_v2.user_results.result.uec_country_metrics_daily_time_series_count ?? [])), d((e) => ({ ...e, countryMetrics: !1 }));
                                }),
                        ]).then(() => {
                            g((t) => ({ ...t, audience: e.audience, country: e.country }));
                        });
                }, [t, c, s]),
                    (0, n.useEffect)(() => {
                        if (a !== _) {
                            j(a);
                            const e = { from_time_incl: new Date(t.to.getTime() - 24192e5).toISOString(), to_time_excl: t.to.toISOString(), requested_metrics: [a] };
                            (0, i.fetchQuery)(c, z, e, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((t) => {
                                    "User" === t?.viewer_v2?.user_results?.result?.__typename && f(Array.from(t.viewer_v2.user_results.result.organic_metrics_time_series ?? [])), g((t) => ({ ...t, heatmap: e }));
                                });
                        }
                    }, [a, c, _, t.to]);
                const M = k.viewer_v2?.user_results?.result,
                    T = N.viewer_v2?.user_results?.result,
                    S = w.viewer_v2?.user_results?.result,
                    F = "User" === M?.__typename ? (M.uec_metrics_daily_time_series_count ?? []) : [],
                    C = "User" === T?.__typename ? (T.uec_country_metrics_daily_time_series_count ?? []) : [],
                    V = "User" === S?.__typename ? (S.organic_metrics_time_series ?? []) : [];
                return (0, l.jsx)(m.d, { value: { loadingStates: o, metrics: x.length ? x : Array.from(F), countryMetrics: p.length ? p : Array.from(C), timeRange: t, selectedMetric: a, activeTimesData: v.length ? v : Array.from(V), hasAudienceData: "User" === M?.__typename, hasCountryData: "User" === T?.__typename, hasHeatmapData: "User" === S?.__typename }, children: e });
            }
            function N(e) {
                const t = [];
                for (let a = 0; a < 28; a++) {
                    const l = new Date(e.to);
                    l.setDate(l.getDate() - a);
                    const s = Math.floor(3 * Math.random()) + 1;
                    Array.from({ length: s }, () => Math.floor(24 * Math.random())).forEach((e) => {
                        t.push({ timestamp: { iso8601_time: l.toISOString() }, metric_values: [{ metric_type: "Impressions", metric_value: Math.floor(100 * Math.random()) + 50 }] }), e > 0 && t.push({ timestamp: { iso8601_time: new Date(l.setHours(e - 1)).toISOString() }, metric_values: [{ metric_type: "Impressions", metric_value: Math.floor(30 * Math.random()) + 10 }] }), e < 23 && t.push({ timestamp: { iso8601_time: new Date(l.setHours(e + 1)).toISOString() }, metric_values: [{ metric_type: "Impressions", metric_value: Math.floor(30 * Math.random()) + 10 }] });
                    });
                }
                return t;
            }
            const M = ["US", "GB", "CA", "IN", "BR", "FR", "DE", "JP", "AU", "IT", "ES", "NL", "RU", "CN", "MX", "KR", "TR", "ID", "NG"],
                T = ["ProfilePic", "Reply", "Fav", "Displayed", "Follow", "VideoContentViewV2", "Bookmark", "TweetCreate", "ReplyCreate"];
            function S({ children: e, timeRange: t, selectedMetric: a }) {
                const [s, i] = (0, n.useState)([]),
                    [r, c] = (0, n.useState)([]),
                    [o, d] = (0, n.useState)(null),
                    [u] = (0, n.useState)({ audienceMetrics: !1, countryMetrics: !1, heatmapMetrics: !1 });
                return (
                    (0, n.useEffect)(() => {
                        i(
                            (function (e) {
                                const t = ["Male", "Female", "Unknown"],
                                    a = ["258901", "129032", "3033300", "0"],
                                    l = [];
                                return (
                                    ["Age13to17", "Age18to24", "Age25to34", "Age35To44", "Age45To54", "Age55To64", "AgeOver65", "Unknown"].forEach((s) => {
                                        t.forEach((t) => {
                                            T.forEach((n) => {
                                                Math.random() > 0.3 && l.push({ age: s, gender: t, engagement_type: n, count: (0, v.vd)(1, 100), timestamp: e.to.getTime(), client_app_id: a[Math.floor(Math.random() * a.length)] || "0", is_in_network: Math.random() > 0.5 ? "true" : "false" });
                                            });
                                        });
                                    }),
                                    l
                                );
                            })(t),
                        ),
                            c(
                                (function (e) {
                                    const t = [];
                                    return (
                                        M.forEach((a) => {
                                            T.forEach((l) => {
                                                if (Math.random() > 0.3) {
                                                    const s = "US" === a ? (0, v.vd)(200, 500) : "GB" === a ? (0, v.vd)(100, 200) : "CA" === a ? (0, v.vd)(80, 150) : (0, v.vd)(1, 50);
                                                    t.push({ country: a, engagement_type: l, count: s, timestamp: e.to.getTime() });
                                                }
                                            });
                                        }),
                                        t
                                    );
                                })(t),
                            ),
                            d(N(t));
                    }, [t]),
                    s.length && r.length && o ? (0, l.jsx)(m.d, { value: { loadingStates: u, metrics: s, countryMetrics: r, timeRange: t, selectedMetric: a, activeTimesData: o, hasAudienceData: !0, hasCountryData: !0, hasHeatmapData: !0 }, children: e }) : null
                );
            }
            var F = a(881120);
            function C({ compactView: e = !1 }) {
                const { countryMetrics: t, selectedMetric: a, loadingStates: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(s.countryMetrics),
                    [u, h] = (0, n.useState)(!1),
                    _ = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(s.countryMetrics);
                }, [s.countryMetrics]);
                const b = (0, n.useMemo)(() => (0, v.od)(t, a).map((e) => ({ label: F.e[e.name.toLowerCase()] || e.name, value: e.count, ...("Other" !== e.name ? { icon: (0, v.bK)(e.name) } : {}) })), [t, a]),
                    j = () => {
                        h(!0);
                    },
                    k = (0, n.useMemo)(() => _[a]?.label || a, [_, a]);
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.countryTitle,
                            onClick: e ? j : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: (0, g.W)("flex justify-between items-center", { "mb-3": e, "mb-4": !e }),
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.countryTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), j();
                                                },
                                                children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(f.Z, { data: b, title: i.countryTitle, maxItems: 5, compactView: e, modalSubtitle: k }) }) }),
                            ],
                        }),
                        (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { className: "text-center", children: [i.countryTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", k, ")"] })] }), children: (0, l.jsx)("div", { className: "overflow-y-auto max-h-[400px] pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: (0, l.jsx)(f.Z, { data: b, title: i.countryTitle, compactView: !1 }) }) }) }),
                        (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                    ],
                });
            }
            var V = a(864897);
            function A({ compactView: e = !1 }) {
                const { metrics: t, selectedMetric: a, loadingStates: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(s.audienceMetrics),
                    [u, h] = (0, n.useState)(!1),
                    f = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(s.audienceMetrics);
                }, [s.audienceMetrics]);
                const _ = [i.deviceIOS, i.deviceAndroid, i.deviceWeb, i.deviceOther],
                    b = (0, n.useMemo)(() => {
                        const e = (0, v.ZT)(t, "device", a);
                        return (0, v.Nn)(e, _).map((e) => ({ ...e, label: e.name, formattedValue: e.formattedCount, tooltip: `${e.name}: ${e.formattedCount} (${e.value.toFixed(1)}%)` }));
                    }, [t, a, _]),
                    j = () => {
                        h(!0);
                    },
                    k = (0, n.useMemo)(() => f[a]?.label || a, [f, a]);
                return "Follows" === a
                    ? null
                    : (0, l.jsxs)("div", {
                          className: "relative isolate",
                          children: [
                              (0, l.jsxs)("section", {
                                  className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                                  "aria-label": i.deviceTitle,
                                  onClick: e ? j : void 0,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: "flex justify-between items-center mb-4",
                                          children: [
                                              (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.deviceTitle }),
                                              e &&
                                                  (0, l.jsx)("button", {
                                                      type: "button",
                                                      className: "text-gray-400 cursor-pointer",
                                                      "aria-label": "Expand chart",
                                                      onClick: (e) => {
                                                          e.stopPropagation(), j();
                                                      },
                                                      children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                                  }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(V.Z, { data: b, compactView: e }) }) }),
                                  ],
                              }),
                              (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { children: [i.deviceTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", k, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(V.Z, { data: b, compactView: !1, animationDuration: 400 }) }) }) }),
                              (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                          ],
                      });
            }
            var L = a(82143);
            function K({ compactView: e = !1 }) {
                const { metrics: t, selectedMetric: a, loadingStates: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(s.audienceMetrics),
                    [u, h] = (0, n.useState)(!1),
                    f = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(s.audienceMetrics);
                }, [s.audienceMetrics]);
                const _ = (0, n.useMemo)(() => ({ Male: i.genderMale, Female: i.genderFemale, Unknown: i.genderNotSpecified }), [i.genderMale, i.genderFemale, i.genderNotSpecified]),
                    b = (0, n.useMemo)(() => {
                        const e = (0, v.ZT)(t, "gender", a);
                        return (0, v.Nn)(e, L._N).map((e) => ({ ...e, name: _[e.name] || e.name }));
                    }, [t, a, _]),
                    j = (0, n.useMemo)(() => b.length > 0 && b.some((e) => e.value > 0), [b]),
                    k = () => {
                        h(!0);
                    },
                    w = (0, n.useMemo)(() => f[a]?.label || a, [f, a]);
                return (0, l.jsxs)("div", {
                    className: "relative isolate",
                    children: [
                        (0, l.jsxs)("section", {
                            className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                            "aria-label": i.genderTitle,
                            onClick: e ? k : void 0,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: "flex justify-between items-center mb-1",
                                    children: [
                                        (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.genderTitle }),
                                        e &&
                                            (0, l.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-400 cursor-pointer",
                                                "aria-label": "Expand chart",
                                                onClick: (e) => {
                                                    e.stopPropagation(), k();
                                                },
                                                children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                            }),
                                    ],
                                }),
                                j && !e && (0, l.jsx)("p", { className: "text-gray-600 mb-4 text-subtext2", children: i.genderSubtitle }),
                                (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(V.Z, { data: b, compactView: e }) }) }),
                            ],
                        }),
                        (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { children: [i.genderTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", w, ")"] })] }), children: (0, l.jsxs)("div", { className: "pt-1", children: [j && (0, l.jsx)("p", { className: "text-gray-600 mb-2 text-subtext2", children: i.genderSubtitle }), (0, l.jsx)(V.Z, { data: b, compactView: !1, animationDuration: 400 })] }) }) }),
                        (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                    ],
                });
            }
            function D({ compactView: e = !1 }) {
                const { metrics: t, selectedMetric: a, loadingStates: s } = (0, m.a)(),
                    { analytics: i } = (0, d.M1)(),
                    [r, o] = (0, n.useState)(s.audienceMetrics),
                    [u, h] = (0, n.useState)(!1),
                    f = (0, p.T)();
                (0, n.useEffect)(() => {
                    o(s.audienceMetrics);
                }, [s.audienceMetrics]);
                const _ = (0, n.useMemo)(() => ({ inNetwork: i.inNetwork, outNetwork: i.outNetwork }), [i.inNetwork, i.outNetwork]),
                    b = (0, n.useMemo)(() => {
                        const e = (0, v.ZT)(t, "network", a);
                        return (0, v.Nn)(e, L.Dx).map((e) => ({ ...e, name: _[e.name] || e.name }));
                    }, [t, a, _]),
                    j = () => {
                        h(!0);
                    },
                    k = (0, n.useMemo)(() => f[a]?.label || a, [f, a]);
                return "Follows" === a
                    ? null
                    : (0, l.jsxs)("div", {
                          className: "relative isolate",
                          children: [
                              (0, l.jsxs)("section", {
                                  className: (0, g.W)("bg-gray-0 w-full rounded-xl p-4 border border-gray-200", { "cursor-pointer": e }),
                                  "aria-label": i.networkTitle,
                                  onClick: e ? j : void 0,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: "flex justify-between items-center mb-4",
                                          children: [
                                              (0, l.jsx)("h2", { className: "font-medium text-text md:text-headline2 md:font-bold", children: i.networkTitle }),
                                              e &&
                                                  (0, l.jsx)("button", {
                                                      type: "button",
                                                      className: "text-gray-400 cursor-pointer",
                                                      "aria-label": "Expand chart",
                                                      onClick: (e) => {
                                                          e.stopPropagation(), j();
                                                      },
                                                      children: (0, l.jsx)(y.Z, { className: "w-4 h-4" }),
                                                  }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", { children: (0, l.jsx)("div", { children: (0, l.jsx)(V.Z, { data: b, compactView: e }) }) }),
                                  ],
                              }),
                              (0, l.jsx)(x.cu, { open: u, onOpenChange: h, children: (0, l.jsx)(x.hC, { title: (0, l.jsxs)("div", { children: [i.networkTitle, (0, l.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", k, ")"] })] }), children: (0, l.jsx)("div", { className: "pt-1", children: (0, l.jsx)(V.Z, { data: b, compactView: !1, animationDuration: 400 }) }) }) }),
                              (0, l.jsx)("div", { className: (0, g.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !r, "opacity-100": r }), children: (0, l.jsx)(c.P, { size: "large" }) }),
                          ],
                      });
            }
            var O = a(323788);
            const U = [
                { days: 7, label: "7D" },
                { days: 28, label: "28D" },
                { days: 90, label: "3M" },
            ];
            function P() {
                const { analytics: e } = (0, d.M1)();
                return (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto", children: (0, l.jsx)("div", { className: "min-[988px]:w-[calc(50%-8px)]", children: (0, l.jsx)(s.x, { className: "text-gray-600", children: e.noDataAvailable }) }) });
            }
            function E({ isMockData: e = !1, showFollowersChart: t = !1, enableCompactOnMobile: a = !1 }) {
                const [s, i] = (0, n.useState)(!0),
                    [m, g] = (0, n.useState)(null),
                    [x, y] = (0, n.useState)(null),
                    { analytics: p } = (0, d.M1)(),
                    h = (0, r.$8)(),
                    v = (0, o.a)("(max-width: 987px)");
                (0, n.useEffect)(() => {
                    g((0, u.X)(7)), y("Likes"), i(!1);
                }, []);
                const f = [
                        { label: p.LikesLabel, value: "Likes" },
                        { label: p.ImpressionsLabel, value: "Impressions" },
                        { label: p.BookmarkLabel, value: "Bookmark" },
                        { label: p.ShareLabel, value: "Share" },
                        { label: p.FollowsLabel, value: "Follows" },
                        { label: p.RepliesLabel, value: "Replies" },
                        { label: p.RetweetsLabel, value: "Retweets" },
                        { label: p.ProfileVisitsLabel, value: "ProfileVisits" },
                    ],
                    _ = e ? S : k;
                return m && x
                    ? (0, l.jsx)(_, {
                          timeRange: m,
                          selectedMetric: x,
                          showFollowersChart: t,
                          children: (0, l.jsxs)("div", {
                              className: "text-text font-chirp flex h-full w-full flex-col gap-4 pb-4",
                              children: [
                                  (0, l.jsx)("div", {
                                      className: "w-full max-w-[1400px] mx-auto mt-4",
                                      children: (0, l.jsxs)("div", {
                                          className: "flex items-center justify-between py-1 overflow-x-auto scrollbar-hide px-4 gap-2",
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: "flex-shrink-0",
                                                  children: (0, l.jsxs)(O.Ph, {
                                                      value: x,
                                                      onValueChange: (e) => {
                                                          y(e), h.scribe({ action: "select", component: "AudienceOverview", data: { metric: e }, element: "MetricSelector", page: "audience_analytics", section: "overview" });
                                                      },
                                                      children: [(0, l.jsx)(O.i4, { className: "bg-background text-subtext1 relative w-auto overflow-hidden font-bold", children: (0, l.jsx)(O.ki, {}) }), (0, l.jsx)(O.Bw, { children: f.map((e) => (0, l.jsx)(O.Ql, { value: e.value, children: (0, l.jsx)("div", { className: "flex items-center gap-2", children: e.label }) }, e.value)) })],
                                                  }),
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: "flex-shrink-0 z-10 overflow-x-auto",
                                                  children: (0, l.jsx)("div", {
                                                      className: "inline-flex",
                                                      children: (0, l.jsx)(u.W, {
                                                          timeRange: m,
                                                          timeRangeOptions: U,
                                                          onChange: (e, t) => {
                                                              g(e), h.scribe({ action: "select", component: "AudienceOverview", data: { timeRange: t ? "custom" : "preset" }, element: "TimeRangeSelector", page: "audience_analytics", section: "overview" });
                                                          },
                                                          compact: v,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: "w-full max-w-[1400px] mx-auto px-4", children: (0, l.jsx)("div", { className: "scrollbar-hide relative flex h-full flex-col gap-4", children: (0, l.jsx)(R, { showFollowersChart: t, enableCompactOnMobile: a }) }) }),
                              ],
                          }),
                      })
                    : s
                      ? (0, l.jsx)("div", { className: "pt-16", children: (0, l.jsx)(c.P, { size: "large" }) })
                      : null;
            }
            function R({ showFollowersChart: e, enableCompactOnMobile: t }) {
                const { selectedMetric: a, metrics: s, countryMetrics: i, activeTimesData: r, loadingStates: o } = (0, m.a)(),
                    d = (0, n.useMemo)(() => {
                        const e = s.some((e) => e.engagement_type === a && e.count > 0),
                            t = i.some((e) => e.engagement_type === a && e.count > 0),
                            l = r?.some((e) => e.metric_values.some((e) => (e.metric_value || 0) > 0)) ?? !1;
                        return e || t || l;
                    }, [s, i, r, a]);
                return (o.audienceMetrics && 0 === s.length) || (o.countryMetrics && 0 === i.length) || (o.heatmapMetrics && 0 === r.length)
                    ? (0, l.jsx)("div", { className: "h-64 w-full max-w-[1400px] mx-auto flex items-center justify-center transition-opacity delay-100 duration-200", children: (0, l.jsx)(c.P, { size: "large" }) })
                    : d
                      ? (0, l.jsxs)(l.Fragment, { children: [t ? (0, l.jsxs)("div", { className: "grid grid-cols-2 gap-4 max-w-[1400px] mx-auto w-full min-[988px]:hidden", children: [(0, l.jsxs)("div", { className: "block space-y-4", children: [(0, l.jsx)("div", { children: (0, l.jsx)(_, { compactView: !0 }) }), (0, l.jsx)("div", { children: (0, l.jsx)(h, { compactView: !0 }) }), e && (0, l.jsx)("div", { children: (0, l.jsx)(D, { compactView: !0 }) })] }), (0, l.jsxs)("div", { className: "block space-y-4", children: [(0, l.jsx)("div", { children: (0, l.jsx)(K, { compactView: !0 }) }), (0, l.jsx)("div", { children: (0, l.jsx)(C, { compactView: !0 }) }), (0, l.jsx)("div", { children: (0, l.jsx)(A, { compactView: !0 }) })] })] }) : (0, l.jsxs)("div", { className: "block space-y-4 max-w-[1400px] mx-auto w-full min-[988px]:hidden", children: [(0, l.jsx)("div", { children: (0, l.jsx)(_, {}) }), (0, l.jsx)("div", { children: (0, l.jsx)(K, {}) }), (0, l.jsx)("div", { children: (0, l.jsx)(C, {}) }), (0, l.jsx)("div", { children: (0, l.jsx)(A, {}) }), (0, l.jsx)("div", { children: (0, l.jsx)(h, {}) }), e && (0, l.jsx)("div", { children: (0, l.jsx)(D, {}) })] }), (0, l.jsxs)("div", { className: "hidden min-[988px]:grid min-[988px]:grid-cols-2 gap-4 max-w-[1400px] mx-auto w-full", children: [(0, l.jsxs)("div", { className: "block space-y-4", children: [(0, l.jsx)("div", { className: "order-1", children: (0, l.jsx)(_, {}) }), (0, l.jsx)("div", { className: "order-5", children: (0, l.jsx)(h, {}) }), e && (0, l.jsx)("div", { className: "order-6", children: (0, l.jsx)(D, {}) })] }), (0, l.jsxs)("div", { className: "block space-y-4", children: [(0, l.jsx)("div", { className: "order-2", children: (0, l.jsx)(K, {}) }), (0, l.jsx)("div", { className: "order-3", children: (0, l.jsx)(C, {}) }), (0, l.jsx)("div", { className: "order-4", children: (0, l.jsx)(A, {}) })] })] })] })
                      : (0, l.jsx)(P, {});
            }
            const I = a(806069),
                z = a(333663),
                Q = a(744590);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-aedc5392.649fff9a.js.map

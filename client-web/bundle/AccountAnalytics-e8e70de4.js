"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e8e70de4"],
    {
        290953: (e, a, l) => {
            l.d(a, { c: () => s });
            l(703383);
            const s = l(363729);
        },
        149184: (e, a, l) => {
            l.d(a, { o: () => s });
            l(703383);
            const s = l(812626);
        },
        363729: (e, a, l) => {
            l.r(a), l.d(a, { default: () => f });
            const s = {
                fragment: {
                    argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "broadcastId" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "LiveDetailsQuery",
                    selections: [
                        {
                            alias: null,
                            args: (i = [{ kind: "Variable", name: "rest_id", variableName: "broadcastId" }]),
                            concreteType: "Broadcast",
                            kind: "LinkedField",
                            name: "broadcast_by_rest_id",
                            plural: !1,
                            selections: [
                                (r = { alias: null, args: null, kind: "ScalarField", name: "broadcast_id", storageKey: null }),
                                (n = { alias: null, args: null, kind: "ScalarField", name: "state", storageKey: null }),
                                (d = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }),
                                (c = { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null }),
                                (o = { alias: null, args: null, kind: "ScalarField", name: "end_time", storageKey: null }),
                                (u = { alias: null, args: null, kind: "ScalarField", name: "scheduled_start_time", storageKey: null }),
                                (m = { alias: null, args: null, kind: "ScalarField", name: "source", storageKey: null }),
                                (x = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }),
                                (g = { alias: null, args: null, kind: "ScalarField", name: "private_chat", storageKey: null }),
                                (y = {
                                    alias: null,
                                    args: null,
                                    concreteType: "BroadcastCountsResult",
                                    kind: "LinkedField",
                                    name: "counts",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "BroadcastCounts",
                                            kind: "LinkedField",
                                            name: "total_counts",
                                            plural: !1,
                                            selections: (h = [
                                                { alias: null, args: null, kind: "ScalarField", name: "views", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "minutes_watched", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "unique_viewers", storageKey: null },
                                            ]),
                                            storageKey: null,
                                        },
                                        { alias: null, args: null, concreteType: "BroadcastCounts", kind: "LinkedField", name: "live_counts", plural: !1, selections: h, storageKey: null },
                                        { alias: null, args: null, concreteType: "BroadcastCounts", kind: "LinkedField", name: "replay_counts", plural: !1, selections: h, storageKey: null },
                                    ],
                                    storageKey: null,
                                }),
                                (b = {
                                    alias: null,
                                    args: null,
                                    concreteType: "BroadcastDemographicCounts",
                                    kind: "LinkedField",
                                    name: "demographic_counts",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "BroadcastDemographics",
                                            kind: "LinkedField",
                                            name: "total_demographic_counts",
                                            plural: !1,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "BroadcastDemographicViewsByCountry",
                                                    kind: "LinkedField",
                                                    name: "views_by_country",
                                                    plural: !0,
                                                    selections: (v = [
                                                        { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                    ]),
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, concreteType: "BroadcastDemographicViewsByDevice", kind: "LinkedField", name: "views_by_device", plural: !0, selections: v, storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                                (p = { alias: null, args: null, kind: "ScalarField", name: "concurrent_viewers_time_series", storageKey: null }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: t, kind: "Operation", name: "LiveDetailsQuery", selections: [{ alias: null, args: i, concreteType: "Broadcast", kind: "LinkedField", name: "broadcast_by_rest_id", plural: !1, selections: [r, n, d, c, o, u, m, x, g, y, b, p, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }] },
                params: { id: "yR1FW3rqmwFgsdMrJJrL0g", metadata: {}, name: "LiveDetailsQuery", operationKind: "query", text: null },
            };
            var t, i, r, n, d, c, o, u, m, x, g, h, y, v, b, p;
            s.hash = "b71b5d89d35fc0966593943cfaf41ead";
            const f = s;
        },
        812626: (e, a, l) => {
            l.r(a), l.d(a, { default: () => o });
            const s = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "broadcastId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "endTime" }), (r = { defaultValue: null, kind: "LocalArgument", name: "startTime" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "LiveDetailsTimeSeriesQuery",
                    selections: [
                        {
                            alias: null,
                            args: (n = [{ kind: "Variable", name: "rest_id", variableName: "broadcastId" }]),
                            concreteType: "Broadcast",
                            kind: "LinkedField",
                            name: "broadcast_by_rest_id",
                            plural: !1,
                            selections: [
                                (d = { alias: null, args: null, kind: "ScalarField", name: "broadcast_id", storageKey: null }),
                                (c = {
                                    alias: null,
                                    args: [
                                        { kind: "Variable", name: "end_time", variableName: "endTime" },
                                        { kind: "Literal", name: "requested_counts", value: ["Views", "MinutesWatched"] },
                                        { kind: "Variable", name: "start_time", variableName: "startTime" },
                                    ],
                                    concreteType: "BroadcastCountsTimeSeries",
                                    kind: "LinkedField",
                                    name: "counts_time_series",
                                    plural: !0,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "BroadcastCounts",
                                            kind: "LinkedField",
                                            name: "total_counts",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "views", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "minutes_watched", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [t, r, i], kind: "Operation", name: "LiveDetailsTimeSeriesQuery", selections: [{ alias: null, args: n, concreteType: "Broadcast", kind: "LinkedField", name: "broadcast_by_rest_id", plural: !1, selections: [d, c, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }] },
                params: { id: "SycQCVa5ChvJxXhSyEixpA", metadata: {}, name: "LiveDetailsTimeSeriesQuery", operationKind: "query", text: null },
            };
            var t, i, r, n, d, c;
            s.hash = "2275f0d31d0f4d106aef134e368439e2";
            const o = s;
        },
        948138: (e, a, l) => {
            l.d(a, { j: () => W });
            var s = l(552322),
                t = l(702024),
                i = l(436059),
                r = l(941204),
                n = l(812115),
                d = l(86781),
                c = l(582440),
                o = l(16246),
                u = l(162994),
                m = l(880917),
                x = l(739219),
                g = l(202784),
                h = l(430962),
                y = l(968025),
                v = l(777301),
                b = l(854123),
                p = l(598705),
                f = l(881120),
                j = l(542372);
            function k() {
                const { analytics: e } = (0, h.M1)(),
                    { countryData: a } = (0, b.DM)(),
                    l = a.total;
                if (0 === l.length) return null;
                const t = l.map((e) => ({ label: f.e[e.key.toLowerCase()] || e.key, value: Number(e.value), icon: (0, p.bK)(e.key) }));
                return (0, s.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 border border-gray-200", children: [(0, s.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold", children: e.countryTitle || "Countries" }), (0, s.jsx)(j.Z, { data: t, title: e.countryTitle || "Countries", maxItems: 4 })] });
            }
            var w = l(864897);
            function N() {
                const { analytics: e } = (0, h.M1)(),
                    { deviceData: a } = (0, b.DM)();
                if (!a || 0 === a.length) return null;
                const l = (0, g.useMemo)(() => ({ iOS: e.deviceIOS || "iOS", Android: e.deviceAndroid || "Android", Web: e.deviceWeb || "Web", Other: e.deviceOther || "Other" }), [e.deviceIOS, e.deviceAndroid, e.deviceWeb, e.deviceOther]),
                    t = (0, g.useMemo)(
                        () =>
                            a && 0 !== a.length
                                ? a.map((e) => {
                                      const a = l[e.key] || e.key,
                                          s = Number(e.value);
                                      return { name: a, count: s, value: e.percentage, formattedCount: (0, p.dw)(s), tooltip: `${a}: ${(0, p.dw)(s)} (${(0, p.rl)(e.percentage)})` };
                                  })
                                : [],
                        [a, l],
                    );
                return (0, s.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 border border-gray-200", children: [(0, s.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold", children: e.deviceTitle || "Devices" }), (0, s.jsx)(w.Z, { data: t })] });
            }
            var T = l(407250);
            function _({ title: e, total: a, live: l, replay: t }) {
                return (0, s.jsxs)("div", { className: "flex items-center", children: [(0, s.jsx)("div", { className: "w-1/3", children: (0, s.jsx)("span", { className: "text-gray-700", children: e }) }), (0, s.jsxs)("div", { className: "flex flex-1", children: [(0, s.jsx)("div", { className: "flex-1 text-center", children: (0, s.jsx)("div", { className: "font-medium", children: (0, p.dw)(l) }) }), (0, s.jsx)("div", { className: "flex-1 text-center", children: (0, s.jsx)("div", { className: "font-medium", children: (0, p.dw)(t) }) }), (0, s.jsx)("div", { className: "flex-1 text-center", children: (0, s.jsx)("div", { className: "font-bold", children: (0, p.dw)(a) }) })] })] });
            }
            function F() {
                const { analytics: e } = (0, h.M1)(),
                    { viewMetrics: a } = (0, b.DM)();
                return (0, s.jsxs)(T.Zb, { className: "w-full bg-card text-card-foreground border border-border shadow-md h-full", children: [(0, s.jsx)(T.Ol, { className: "pb-2", children: (0, s.jsx)(T.ll, { className: "font-medium", children: e.broadcastMetricsTitle }) }), (0, s.jsxs)(T.aY, { className: "space-y-6 pt-2", children: [(0, s.jsxs)("div", { className: "flex", children: [(0, s.jsx)("div", { className: "w-1/3" }), (0, s.jsxs)("div", { className: "flex flex-1", children: [(0, s.jsx)("div", { className: "flex-1 text-center text-gray-700", children: e.liveColumnHeader }), (0, s.jsx)("div", { className: "flex-1 text-center text-gray-700", children: e.replayColumnHeader }), (0, s.jsx)("div", { className: "flex-1 text-center text-gray-700", children: e.totalColumnHeader })] })] }), (0, s.jsx)(_, { title: e.VideoViewLabel, total: a.views.total, live: a.views.live, replay: a.views.replay }), (0, s.jsx)("div", { className: "h-px bg-gray-200" }), (0, s.jsx)(_, { title: e.uniqueViewersLabel, total: a.uniqueViewers.total, live: a.uniqueViewers.live, replay: a.uniqueViewers.replay }), (0, s.jsx)("div", { className: "h-px bg-gray-200" }), (0, s.jsx)(_, { title: e.minutesWatched, total: a.minutesWatched.total, live: a.minutesWatched.live, replay: a.minutesWatched.replay })] })] });
            }
            var L = l(643715),
                K = l(829233);
            const { Area: S, CartesianGrid: D, XAxis: M, YAxis: C, AreaChart: V } = L;
            function I() {
                const { liveViewers: e, formattedBroadcast: a } = (0, b.DM)(),
                    { analytics: l } = (0, h.M1)(),
                    t = (0, g.useMemo)(() => {
                        const { startTime: l, endTime: s } = a;
                        if (!l || !s || !e.length) return [];
                        const t = s - l;
                        return e.map((a, s) => {
                            const i = l + s * (t / (e.length - 1)),
                                r = Math.floor((i - l) / 6e4);
                            return { timestamp: i, value: a, minutesFromStart: r, streamTimeMs: 60 * r * 1e3 };
                        });
                    }, [e, a]);
                return 0 === t.length
                    ? (0, s.jsx)("div", { className: "text-muted-foreground", children: l.noViewerData })
                    : (0, s.jsx)(K.BO, {
                          className: "relative aspect-[2/1] h-full max-h-[280px] min-h-[0] w-full select-none pe-2",
                          config: { viewers: { color: "hsl(var(--colors-blue-500))", label: l.viewersLabel } },
                          children: (0, s.jsxs)(V, {
                              data: t,
                              margin: { bottom: 10, left: -10, right: 5, top: 5 },
                              children: [
                                  (0, s.jsx)("defs", { children: (0, s.jsxs)("linearGradient", { id: "viewersGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, s.jsx)("stop", { offset: "5%", stopColor: "hsl(var(--colors-blue-500) / 0.5)", stopOpacity: 0.8 }), (0, s.jsx)("stop", { offset: "95%", stopColor: "hsl(var(--colors-blue-500) / 0)", stopOpacity: 0 })] }) }),
                                  (0, s.jsx)(D, { strokeDasharray: "0", vertical: !1, stroke: "hsl(var(--colors-gray-100))" }),
                                  (0, s.jsx)(M, { dataKey: "minutesFromStart", tickLine: !1, axisLine: !1, className: "text-subtext3", tickMargin: 8, minTickGap: 40, tickFormatter: (e) => (0, p.LU)(60 * e * 1e3), tick: { fill: "hsl(var(--colors-gray-600))" } }),
                                  (0, s.jsx)(C, { tickLine: !1, axisLine: !1, className: "text-subtext3", tickFormatter: (e) => (0, p.dw)(e), tick: { fill: "hsl(var(--colors-gray-600))" } }),
                                  (0, s.jsx)(K.h7, {
                                      content: (0, s.jsx)(K.dg, {
                                          className: "text-subtext2",
                                          labelClassName: "font-normal text-text",
                                          labelFormatter: (e, a) => {
                                              const s = a?.[0]?.payload;
                                              return s && "number" == typeof s.minutesFromStart ? `${l.streamTimePrefix}${(0, p.LU)(60 * s.minutesFromStart * 1e3)}` : e;
                                          },
                                          valueFormatter: (e) => (0, p.dw)(e),
                                      }),
                                  }),
                                  (0, s.jsx)(S, { type: "monotone", dataKey: "value", name: l.viewersLabel, stroke: "hsl(var(--colors-blue-500))", fillOpacity: 1, fill: "url(#viewersGradient)" }),
                              ],
                          }),
                      });
            }
            var O = l(86982),
                B = l(707326);
            function A() {
                const { analytics: e } = (0, h.M1)(),
                    { timeSeriesData: a, timeRange: l } = (0, b.DM)(),
                    t = (0, g.useMemo)(
                        () => [
                            { key: "views", label: e.VideoViewLabel || e.Views, type: "number", info: e.VideoViewsInfo || e.broadcastViewsInfo },
                            { key: "watchTimeMs", label: e.WatchTimeLabel || e.WatchTimeLabel, type: "time", info: e.WatchTimeInfo || e.broadcastWatchTimeInfo },
                        ],
                        [e],
                    ),
                    i = (0, g.useMemo)(() => {
                        let e = 0,
                            l = 0;
                        return (
                            Object.values(a).forEach((a) => {
                                void 0 !== a.views && (e += a.views), void 0 !== a.watchTimeMs && (l += a.watchTimeMs);
                            }),
                            { views: e, watchTimeMs: l }
                        );
                    }, [a]),
                    r = (0, g.useMemo)(() => ((0, x.w)(l.to, l.from) + 1 >= 14 ? "daily" : "hourly"), [l]);
                return 0 === Object.keys(a).length ? (0, s.jsx)("div", { className: "relative p-4 bg-gray-0 border border-gray-200 rounded-xl", children: (0, s.jsx)("div", { className: "text-center py-8", children: e.noDataAvailable }) }) : (0, s.jsx)("div", { className: "relative", children: (0, s.jsx)(O.E, { metrics: t, currentTotals: i, timeSeriesData: a, ChartComponent: B.q, hoursLabel: e.hours || "hours", granularity: r }) });
            }
            var R = l(164695);
            function W({ broadcastId: e, isMockData: a = !1, liveOverviewUrl: l = "/analytics/live", referrerUrl: i }) {
                const [r, n] = (0, g.useState)(() => (0, v.X)(2));
                return (0, s.jsx)(b.h9, { broadcastId: e, timeRange: r, isMockData: a, children: (0, s.jsx)(g.Suspense, { fallback: (0, s.jsx)(t.P, { size: "large" }), children: (0, s.jsx)(q, { timeRange: r, setTimeRange: n, liveOverviewUrl: l, referrerUrl: i }) }) });
            }
            function q({ timeRange: e, setTimeRange: a, liveOverviewUrl: l, referrerUrl: t }) {
                const { analytics: f } = (0, h.M1)(),
                    { formattedBroadcast: j, liveViewers: w } = (0, b.DM)(),
                    T = (0, y.t)(),
                    _ = (0, g.useMemo)(() => {
                        const e = j?.startTime,
                            a = e ? (0, x.w)(new Date(), new Date(e)) : Number.POSITIVE_INFINITY;
                        return [
                            { days: 2, label: "48H" },
                            { days: 7, label: "7D", disabled: a < 7 },
                            { days: 14, label: "2W", disabled: a < 14 },
                            { days: 28, label: "4W", disabled: a < 28 },
                        ];
                    }, [j?.startTime]),
                    L = j?.broadcastId ? `https://x.com/i/broadcasts/${j.broadcastId}` : void 0;
                return (0, s.jsxs)("div", {
                    className: "text-text px-4 pt-4 flex-col gap-4",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                (0, s.jsx)(i.z, {
                                    icon: (0, s.jsx)(c.Z, {}),
                                    onClick: () => {
                                        T.push(t || l);
                                    },
                                    variant: "primaryText",
                                    "aria-label": f.backToLiveOverviewAria,
                                }),
                                (0, s.jsx)(r.x, { size: "headline1", weight: "bold", children: f.livestreamAnalytics }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: "flex flex-col min-[988px]:flex-row gap-4 pb-4 h-auto",
                            children: [
                                (0, s.jsx)("div", {
                                    className: "flex-1 flex flex-col w-full min-h-0",
                                    children: (0, s.jsxs)("div", {
                                        className: "relative overflow-hidden rounded-lg bg-gray-100 h-full min-[988px]:aspect-unset aspect-[16/9]",
                                        children: [
                                            j?.previewImage ? (0, s.jsx)("img", { src: j.previewImage, alt: j.title || f.thumbnailAlt, className: "absolute top-0 left-0 w-full h-full object-cover" }) : (0, s.jsx)("div", { className: "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100", children: (0, s.jsx)("span", { className: "text-gray-500", children: f.untitledBroadcast }) }),
                                            (0, s.jsx)("div", {
                                                className: "absolute top-0 right-0 p-3 flex justify-end items-start",
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        (0, s.jsx)("div", {
                                                            className: "bg-black/25 text-white px-2 py-1 rounded-md font-medium text-subtext1",
                                                            children: (() => {
                                                                const e = j?.state?.toLowerCase();
                                                                switch (e) {
                                                                    case "live":
                                                                        return f.Live || "Live";
                                                                    case "notstarted":
                                                                        return f.Scheduled || "Scheduled";
                                                                    case "ended":
                                                                        return f.Ended || "Ended";
                                                                    default:
                                                                        return j?.state || "Unknown";
                                                                }
                                                            })(),
                                                        }),
                                                        (0, s.jsx)(n.r, { href: L, target: "_blank", children: (0, s.jsx)("button", { type: "button", className: "size-8 rounded-full border border-white/50 text-white bg-black/20 flex justify-center items-center transition-colors hover:bg-black/40", disabled: !L, children: "ended" === j?.state?.toLowerCase() ? (0, s.jsx)(o.Z, { className: "size-5" }) : (0, s.jsx)(u.Z, { className: "size-5" }) }) }),
                                                    ],
                                                }),
                                            }),
                                            (0, s.jsxs)("div", { className: "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent", children: [(0, s.jsx)("h1", { className: "text-white font-bold line-clamp-1 mb-1", children: j?.title || f.untitledBroadcast }), j?.startTime && (0, s.jsxs)("div", { className: "text-white/80 text-subtext1 flex items-center", children: [new Date(j.startTime).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" }), j?.endTime && j?.startTime && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("span", { className: "mx-1", children: "•" }), (0, p.pI)(j.endTime - j.startTime)] })] })] }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)("div", { className: "w-full min-[988px]:max-w-[400px] flex-shrink-0", children: (0, s.jsx)(F, {}) }),
                            ],
                        }),
                        "Running" !== j?.state && w && w.length > 0 && (0, s.jsxs)("div", { className: "bg-gray-0 rounded-xl pt-4 pr-4 border border-gray-200 mb-4", children: [(0, s.jsxs)("div", { className: "flex justify-between items-center mb-4 pl-4 pr-2", children: [(0, s.jsx)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: f.liveViewersTitle }), (0, s.jsxs)("div", { className: "text-gray-700 text-body2 flex items-center", children: [(0, s.jsx)("span", { className: "font-medium", children: f.peakViewersPrefix }), (0, s.jsx)("span", { className: "font-bold ml-1", children: (0, p.dw)(Math.max(...w, 0)) })] })] }), (0, s.jsx)("div", { className: "h-[140px]", children: (0, s.jsx)(I, {}) })] }),
                        (0, s.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, s.jsxs)("div", { className: "w-full", children: [(0, s.jsx)("hr", { className: "border-t border-gray-100 my-3" }), (0, s.jsx)("div", { className: "flex justify-end overflow-x-auto scrollbar-hide", children: (0, s.jsxs)("div", { className: "flex items-end min-[988px]:items-center gap-2", children: [(0, s.jsx)("div", { className: "min-[988px]:hidden", children: (0, s.jsxs)(R.Vq, { children: [(0, s.jsx)(R.hg, { children: (0, s.jsx)("button", { className: "flex items-center justify-center text-gray-700 hover:text-gray-900", type: "button", children: (0, s.jsx)(m.Z, { className: "size-5" }) }) }), (0, s.jsx)(R.cZ, { className: "max-sm:max-w-[calc(100vw-2rem)] rounded-xl", children: (0, s.jsxs)(R.fK, { children: [(0, s.jsx)(R.$N, { tabIndex: 0, children: f.timeRangeInfoTitle }), (0, s.jsx)(R.Be, { className: "text-start", children: f.timeRangeInfoDescription })] }) })] }) }), (0, s.jsx)("div", { className: "hidden min-[988px]:block", children: (0, s.jsx)(d.J, { trigger: (0, s.jsx)("button", { className: "flex items-center justify-center text-gray-700 hover:text-gray-900", type: "button", children: (0, s.jsx)(m.Z, { className: "size-5" }) }), withArrow: !0, align: "start", borderRadius: "large", children: (0, s.jsxs)("div", { className: "p-3 w-64 space-y-2 border border-border rounded-lg", children: [(0, s.jsx)("h4", { className: "font-medium", children: f.timeRangeInfoTitle }), (0, s.jsx)("p", { className: "text-muted-foreground", children: f.timeRangeInfoDescription })] }) }) }), (0, s.jsx)(v.W, { timeRange: e, onChange: a, timeRangeOptions: _, showCalendar: !1 })] }) })] }), (0, s.jsx)("div", { className: "grid grid-cols-1 gap-4", children: (0, s.jsx)(A, {}) })] }),
                        (0, s.jsx)("hr", { className: "border-t border-gray-100 my-6" }),
                        (0, s.jsx)("div", { className: "flex flex-col gap-6", children: (0, s.jsxs)("div", { className: "grid grid-cols-1 gap-6 min-[988px]:grid-cols-2", children: [(0, s.jsx)("div", { className: "order-1", children: (0, s.jsx)(k, {}) }), (0, s.jsx)("div", { className: "order-2", children: (0, s.jsx)(N, {}) })] }) }),
                    ],
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e8e70de4.0d162cda.js.map

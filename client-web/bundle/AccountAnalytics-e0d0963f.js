"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e0d0963f"],
    {
        280322: (e, t, a) => {
            a.d(t, { V: () => M });
            var s = a(552322),
                i = a(202784),
                n = a(436059),
                l = a(702024),
                r = a(559274),
                c = a(358595),
                o = a(407250),
                d = a(236379),
                m = a(323788),
                u = a(453436),
                x = a(679804),
                h = a(702823),
                p = a(417957),
                v = a(659289),
                g = a(14313),
                f = a(97759),
                j = a(796309),
                b = a(430962),
                y = a(598705),
                w = a(976389),
                N = a(768246),
                k = a(968025),
                S = a(634979);
            const D = (e, t) => (void 0 === e ? t.notAvailableShort : new Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" }).format(e)),
                T = (e) => {
                    if ("undefined" == typeof window) return;
                    const t = new URL(window.location.href);
                    Object.entries(e).forEach(([e, a]) => {
                        a ? t.searchParams.set(e, a) : t.searchParams.delete(e);
                    }),
                        window.history.replaceState({}, "", t.pathname + t.search);
                };
            function C({ sortField: e, sortDirection: t, onSortFieldChange: a, onSortDirectionChange: l }) {
                const { analytics: r } = (0, b.M1)(),
                    c = (0, i.useMemo)(
                        () => [
                            { value: "date", label: r.Date, icon: (0, s.jsx)(u.Z, { className: "size-5" }) },
                            { value: "minsWatched", label: r.minutesWatched, icon: (0, s.jsx)(x.Z, { className: "size-5" }) },
                            { value: "views", label: r.Views, icon: (0, s.jsx)(h.Z, { className: "size-5" }) },
                            { value: "viewers", label: r.viewers, icon: (0, s.jsx)(p.Z, { className: "size-5" }) },
                            { value: "duration", label: r.duration, icon: (0, s.jsx)(v.Z, { className: "size-5" }) },
                        ],
                        [r],
                    ),
                    o = c.find((t) => t.value === e);
                return (0, s.jsxs)("div", { className: "flex items-center gap-2 relative", children: [(0, s.jsx)(n.z, { size: "xSmallCompact", onClick: () => l("asc" === t ? "desc" : "asc"), className: "px-0 border-none bg-background", children: "asc" === t ? (0, s.jsx)(g.Z, { className: "size-5 text-gray-900" }) : (0, s.jsx)(f.Z, { className: "size-5 text-gray-900" }) }), (0, s.jsxs)(m.Ph, { value: e, onValueChange: (e) => a(e), children: [(0, s.jsx)(m.i4, { className: "bg-background text-subtext1 w-auto font-bold border-none pl-1 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, s.jsx)(m.ki, { children: o?.icon }) }), (0, s.jsx)(m.Bw, { children: c.map((e) => (0, s.jsx)(m.Ql, { value: e.value, children: (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("span", { className: "text-gray-700", children: e.icon }), (0, s.jsx)("span", { children: e.label })] }) }, e.value)) })] })] });
            }
            function V({ broadcasts: e, url: t, getBroadcastUrl: a }) {
                const { analytics: n } = (0, b.M1)(),
                    { hasMoreData: r, onLoadMore: c, isLoading: d } = (0, w.cf)(),
                    u = (0, N.l)(),
                    [x, h] = (0, i.useState)(!1),
                    [p, v] = (0, i.useState)("all"),
                    [g, f] = (0, i.useState)("date"),
                    [y, k] = (0, i.useState)("desc"),
                    S = (0, i.useRef)(null),
                    [D, V] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    if (!x) {
                        const e = u.get("filter");
                        e && ["all", "live", "scheduled", "ended"].includes(e) && v(e);
                        const t = u.get("sort");
                        t && ["date", "minsWatched", "views", "viewers", "duration"].includes(t) && f(t);
                        const a = u.get("dir");
                        a && ["asc", "desc"].includes(a) && k(a), h(!0);
                    }
                }, [x, u]),
                    (0, i.useEffect)(() => {
                        x && T({ filter: p, sort: g, dir: y });
                    }, [p, g, y, x]),
                    (0, i.useEffect)(() => {
                        if (!d && D) {
                            const e = setTimeout(() => {
                                V(!1);
                            }, 300);
                            return () => clearTimeout(e);
                        }
                    }, [d, D]),
                    (0, i.useEffect)(() => {
                        if (d || !r || !c || D) return;
                        const e = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    e.isIntersecting && (V(!0), c());
                                });
                            },
                            { root: null, rootMargin: "100px", threshold: 0 },
                        );
                        return (
                            S.current && e.observe(S.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [d, r, c, D]);
                const _ = e.filter((e) => ("live" !== p || "Running" === e.state) && ("scheduled" !== p || (null !== e.scheduledStartTime && "Running" !== e.state && "Ended" !== e.state)) && ("ended" !== p || "Ended" === e.state)),
                    M = (0, i.useMemo)(
                        () =>
                            [..._].sort((e, t) => {
                                let a = 0;
                                switch (g) {
                                    case "date":
                                        a = (e.scheduledStartTime || e.startTime || 0) - (t.scheduledStartTime || t.startTime || 0);
                                        break;
                                    case "minsWatched":
                                        a = e.totalMinsWatched - t.totalMinsWatched;
                                        break;
                                    case "views":
                                        a = e.totalViews - t.totalViews;
                                        break;
                                    case "viewers":
                                        a = e.totalViewers - t.totalViewers;
                                        break;
                                    case "duration":
                                        a = (e.duration || 0) - (t.duration || 0);
                                        break;
                                    default:
                                        a = 0;
                                }
                                return "asc" === y ? a : -a;
                            }),
                        [_, g, y],
                    );
                return (0, s.jsxs)("div", {
                    className: "w-full",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "sticky top-0 z-10 bg-background [background-clip:padding-box] pt-[1px]",
                            children: [
                                (0, s.jsx)("div", { className: "max-[987px]:block min-[988px]:hidden", children: (0, s.jsx)("div", { className: "p-3 border-b border-gray-200 overflow-hidden", children: (0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("div", { className: "flex-shrink-0 mr-2", children: (0, s.jsxs)(m.Ph, { value: p, onValueChange: v, children: [(0, s.jsx)(m.i4, { className: "bg-background text-subtext1 relative w-auto overflow-hidden font-bold border-none px-0 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none", children: (0, s.jsx)(m.ki, { placeholder: n.filterSpaces }) }), (0, s.jsxs)(m.Bw, { children: [(0, s.jsx)(m.Ql, { value: "all", children: n.allContentTypes }), (0, s.jsx)(m.Ql, { value: "live", children: n.Live }), (0, s.jsx)(m.Ql, { value: "scheduled", children: n.Scheduled }), (0, s.jsx)(m.Ql, { value: "ended", children: n.Ended })] })] }) }), (0, s.jsx)("div", { className: "flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1", children: (0, s.jsx)(C, { sortField: g, sortDirection: y, onSortFieldChange: f, onSortDirectionChange: k }) })] }) }) }),
                                (0, s.jsx)("div", { className: "min-[988px]:block max-[987px]:hidden", children: (0, s.jsxs)("div", { className: "flex justify-between items-center p-3 border-b border-gray-200", children: [(0, s.jsx)("div", { className: "flex-shrink-0", children: (0, s.jsxs)(m.Ph, { value: p, onValueChange: v, children: [(0, s.jsx)(m.i4, { className: "w-[180px]", children: (0, s.jsx)(m.ki, { placeholder: n.filterSpaces }) }), (0, s.jsxs)(m.Bw, { children: [(0, s.jsx)(m.Ql, { value: "all", children: n.allContentTypes }), (0, s.jsx)(m.Ql, { value: "live", children: n.Live }), (0, s.jsx)(m.Ql, { value: "scheduled", children: n.Scheduled }), (0, s.jsx)(m.Ql, { value: "ended", children: n.Ended })] })] }) }), (0, s.jsx)("div", { className: "flex items-center gap-1 ml-auto", children: (0, s.jsx)(C, { sortField: g, sortDirection: y, onSortFieldChange: f, onSortDirectionChange: k }) })] }) }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: "min-[988px]:px-2 pt-6 overflow-y-auto h-[calc(100vh-60px)]", children: M.length > 0 ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(R, { broadcasts: M, url: t, getBroadcastUrl: a }), r && (0, s.jsx)("div", { ref: S }), (0, s.jsx)("div", { className: (0, j.cn)("flex justify-center pt-4 pb-8", d ? "opacity-100" : "opacity-0"), children: (0, s.jsx)(l.P, { size: "large" }) })] }) : (0, s.jsx)(o.Zb, { children: (0, s.jsx)(o.aY, { className: "flex items-center justify-center p-6", children: (0, s.jsx)("p", { className: "text-muted-foreground", children: n.noBroadcastsAvailableForFilter }) }) }) }),
                    ],
                });
            }
            const _ = (e) => ({ Running: e.Live, NotStarted: e.Scheduled, Ended: e.Ended, Canceled: e.canceled, PrePublished: e.prePublished, TimedOut: e.timedOut });
            function R({ broadcasts: e, getBroadcastUrl: t }) {
                const { analytics: a } = (0, b.M1)(),
                    i = (0, k.t)(),
                    n = (0, S.j)(),
                    l = (0, N.l)(),
                    o = (e) => {
                        if (!e) return;
                        const a = t ? t(e) : `${n}/${e}`,
                            s = n + (l ? `?${l.toString()}` : ""),
                            r = `${a}?referrerUrl=${encodeURIComponent(s)}`;
                        i.push(r);
                    };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("div", {
                            className: "flex flex-col gap-4 min-[988px]:hidden w-full px-2",
                            children: e.map((e) => {
                                const t = e.startTime || e.scheduledStartTime;
                                return (0, s.jsxs)("div", { className: "flex gap-4 cursor-pointer", onClick: () => o(e.broadcastId), children: [(0, s.jsxs)("div", { className: "relative shrink-0 aspect-video w-2/5 block overflow-hidden rounded-lg", children: [(0, s.jsx)("img", { src: e.imageUrl ?? "", alt: e.title ?? a.broadcastAltText, style: { objectFit: "cover", width: "100%" } }), "Ended" === e.state && e.duration ? (0, s.jsx)("div", { className: "absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/75 text-white text-subtext2", children: (0, y.LU)(e.duration) }) : (0, s.jsx)(c.C, { variant: "outline", className: (0, j.cn)("uppercase font-semibold text-background bg-gray-600 border-none absolute bottom-2 right-2 text-[11px]", { "bg-red-600": "Running" === e.state, "bg-yellow-600": "NotStarted" === e.state }), children: e.state && _(a)[e.state] })] }), (0, s.jsxs)("div", { className: "flex flex-col gap-1 justify-start flex-1", children: [(0, s.jsx)("span", { className: "text-subtext1 font-medium line-clamp-1", children: e.title || a.untitledVideo }), (0, s.jsxs)("div", { className: "flex items-center gap-0.5 text-subtext2 text-gray-700", children: [(0, s.jsxs)("span", { children: [D(e.totalViews, a), " ", a.views] }), t && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("span", { className: "mx-1", children: "·" }), (0, s.jsx)(r.E, { timestamp: t, className: "text-subtext2 text-gray-600" })] })] }), (0, s.jsxs)("div", { className: "flex items-center gap-3 text-subtext2 text-gray-600", children: [(0, s.jsxs)("div", { className: "flex items-center gap-1", children: [(0, s.jsx)(p.Z, { className: "size-4" }), (0, s.jsx)("span", { children: D(e.totalViewers, a) })] }), (0, s.jsxs)("div", { className: "flex items-center gap-1", children: [(0, s.jsx)(x.Z, { className: "size-4" }), (0, s.jsxs)("span", { children: [D(e.totalMinsWatched, a), " ", a.mins] })] })] })] })] }, e.broadcastId);
                            }),
                        }),
                        (0, s.jsxs)(d.iA, {
                            className: "hidden min-[988px]:table",
                            children: [
                                (0, s.jsx)(d.xD, { children: (0, s.jsxs)(d.SC, { children: [(0, s.jsx)(d.ss, { className: "w-[120px]", children: a.status }), (0, s.jsx)(d.ss, { className: "flex-1", children: a.broadcast }), (0, s.jsx)(d.ss, { className: "w-[180px] min-[988px]:w-[220px]", children: a.Date }), (0, s.jsx)(d.ss, { className: "w-[100px] text-right", children: a.minutesWatched }), (0, s.jsx)(d.ss, { className: "w-[100px] text-right", children: a.Views }), (0, s.jsx)(d.ss, { className: "w-[100px] text-right", children: a.viewers })] }) }),
                                (0, s.jsx)(d.RM, {
                                    children: e.map((e) =>
                                        (0, s.jsxs)(
                                            d.SC,
                                            {
                                                className: "cursor-pointer hover:bg-muted/50 group",
                                                onClick: () => o(e.broadcastId),
                                                children: [
                                                    (0, s.jsx)(d.pj, { className: "p-4", children: (0, s.jsx)(c.C, { variant: "outline", className: (0, j.cn)("uppercase font-semibold text-background bg-gray-600 border-none", { "bg-red-600": "Running" === e.state, "bg-yellow-600": "NotStarted" === e.state }), children: e.state && _(a)[e.state] }) }),
                                                    (0, s.jsx)(d.pj, { className: "p-4", children: (0, s.jsxs)("div", { className: "flex items-center gap-3", children: [(0, s.jsx)("div", { className: "relative aspect-video h-12 overflow-hidden shrink-0 rounded", children: (0, s.jsx)("img", { src: e.imageUrl ?? "", alt: e.status ?? a.broadcastAltText, className: "object-cover" }) }), (0, s.jsx)("span", { className: "font-medium line-clamp-2", children: e.title || a.untitledVideo })] }) }),
                                                    (0, s.jsx)(d.pj, { className: "p-4", children: e.startTime ? (0, s.jsxs)("div", { className: "flex flex-col", children: [(0, s.jsx)("span", { className: "whitespace-nowrap", children: Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(new Date(e.startTime)) }), (0, s.jsxs)("span", { className: "text-muted-foreground whitespace-nowrap", children: [Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", hour12: !0 }).format(new Date(e.startTime)), e.endTime ? (0, s.jsxs)(s.Fragment, { children: [" - ", Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", hour12: !0 }).format(new Date(e.endTime))] }) : null] })] }) : e.scheduledStartTime ? (0, s.jsxs)("div", { className: "flex flex-col", children: [(0, s.jsx)("span", { className: "whitespace-nowrap", children: Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(new Date(e.scheduledStartTime)) }), (0, s.jsxs)("span", { className: "text-muted-foreground whitespace-nowrap", children: [a.ScheduledFor, " ", Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", hour12: !0 }).format(new Date(e.scheduledStartTime))] })] }) : (0, s.jsx)("span", { className: "text-muted-foreground", children: a.notAvailable }) }),
                                                    (0, s.jsx)(d.pj, { className: "p-4 text-right", children: (0, s.jsx)("div", { className: "font-medium text-gray-900", children: D(e.totalMinsWatched, a) }) }),
                                                    (0, s.jsx)(d.pj, { className: "p-4 text-right", children: (0, s.jsx)("div", { className: "font-medium text-gray-900", children: D(e.totalViews, a) }) }),
                                                    (0, s.jsx)(d.pj, { className: "p-4 text-right", children: (0, s.jsx)("div", { className: "font-medium text-gray-900", children: D(e.totalViewers, a) }) }),
                                                ],
                                            },
                                            e.broadcastId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                });
            }
            function M({ path: e, isMock: t = !1, getBroadcastUrl: a }) {
                return (0, s.jsx)(w.on, { isMockData: t, children: (0, s.jsx)(F, { path: e, getBroadcastUrl: a }) });
            }
            function F({ path: e, getBroadcastUrl: t }) {
                const { broadcasts: a } = (0, w.cf)();
                return (0, s.jsx)("div", { className: "flex flex-col min-[988px]:gap-6 min-[988px]:p-0", children: (0, s.jsx)(V, { broadcasts: a, url: `${e}/detail`, getBroadcastUrl: t }) });
            }
        },
        66412: (e, t, a) => {
            a.d(t, { y: () => h });
            var s = a(552322),
                i = a(643715),
                n = a(829233),
                l = a(701883),
                r = a(202784);
            const { Bar: c, BarChart: o, CartesianGrid: d, XAxis: m, YAxis: u } = i,
                x = "Views";
            function h({ data: e }) {
                const t = (0, r.useMemo)(() => e.map((e) => ({ [x]: e.value, label: e.stage })), [e]);
                return (0, s.jsx)(n.BO, { config: { [x]: { color: "hsl(var(--colors-blue-500))" } }, className: "relative aspect-[2/1] h-full max-h-[250px] min-h-[0] w-full select-none", children: (0, s.jsxs)(o, { data: t, barCategoryGap: "25%", margin: { bottom: 0, left: 0, right: 5, top: 5 }, children: [(0, s.jsx)(u, { dataKey: x, tickFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(e), tickLine: !1, axisLine: !1, className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" } }), (0, s.jsx)(n.h7, { content: (0, s.jsx)(n.dg, { hideForKeys: ["incomplete"], className: "text-subtext2", labelClassName: "font-normal text-text", valueFormatter: (e) => Intl.NumberFormat("en-US", { compactDisplay: "short", notation: "compact", style: "decimal" }).format(e) }), cursor: (0, s.jsx)(l.d, {}) }), (0, s.jsx)(d, { strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))", vertical: !1 }), (0, s.jsx)(c, { dataKey: x, stroke: "hsl(var(--colors-blue-500))", fill: "hsl(var(--colors-blue-500))", radius: 2, strokeWidth: 1, animationDuration: 500 }), (0, s.jsx)(m, { dataKey: "label", tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: 32, className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" } })] }) });
            }
        },
        357333: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            const s = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "estimated_revenue_enabled" }), (n = { defaultValue: null, kind: "LocalArgument", name: "from_timestamp" }), (l = { defaultValue: null, kind: "LocalArgument", name: "metric_types" }), (r = { defaultValue: null, kind: "LocalArgument", name: "to_timestamp" }), (c = { defaultValue: null, kind: "LocalArgument", name: "to_timestamp_revenue" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "MediaMetricsQuery",
                    selections: (d = [
                        {
                            alias: null,
                            args: [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }],
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
                                                        { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: [
                                                                { kind: "Variable", name: "from_timestamp", variableName: "from_timestamp" },
                                                                { kind: "Literal", name: "granularity", value: "Daily" },
                                                                { kind: "Literal", name: "include_organic_time_series", value: !0 },
                                                                { kind: "Literal", name: "include_promoted_time_series", value: !1 },
                                                                { kind: "Variable", name: "metric_types", variableName: "metric_types" },
                                                                { kind: "Variable", name: "to_timestamp", variableName: "to_timestamp" },
                                                            ],
                                                            concreteType: "MediaMetricsTimeSeriesForPublisherResponse",
                                                            kind: "LinkedField",
                                                            name: "media_metrics_time_series_for_publisher",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "MediaMetricsTimeSeriesValues",
                                                                    kind: "LinkedField",
                                                                    name: "metric_values",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "MetricsValue",
                                                                            kind: "LinkedField",
                                                                            name: "metric_values",
                                                                            plural: !0,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "is_promoted_metrics", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        {
                                                            condition: "estimated_revenue_enabled",
                                                            kind: "Condition",
                                                            passingValue: !0,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: [
                                                                        { kind: "Variable", name: "end_date", variableName: "to_timestamp_revenue" },
                                                                        { kind: "Variable", name: "start_date", variableName: "from_timestamp" },
                                                                    ],
                                                                    concreteType: "RevenueByDay",
                                                                    kind: "LinkedField",
                                                                    name: "amplify_revenue_by_day",
                                                                    plural: !0,
                                                                    selections: [{ alias: null, args: null, concreteType: "VideoRevenue", kind: "LinkedField", name: "revenue", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "revenue_usd", storageKey: null }], storageKey: null }],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        o,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                        },
                    ]),
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [n, r, c, l, i], kind: "Operation", name: "MediaMetricsQuery", selections: d },
                params: { id: "zVDiSXBPypOnGUkGHSHeew", metadata: {}, name: "MediaMetricsQuery", operationKind: "query", text: null },
            };
            var i, n, l, r, c, o, d;
            s.hash = "e33dd06ccfacb86200621436b3b4edec";
            const m = s;
        },
        367286: (e, t, a) => {
            a.d(t, { iT: () => q, He: () => Q, b2: () => O, zT: () => $ });
            var s = a(552322),
                i = a(446368),
                n = a(739219),
                l = a(202784),
                r = a(703383),
                c = a(430962),
                o = a(768246),
                d = a(612047),
                m = a(777301),
                u = a(674836),
                x = a(163436),
                h = a(991732),
                p = a(945402),
                v = a(712667),
                g = a(598705),
                f = a(422821),
                j = a(86982),
                b = a(707326),
                y = a(288894);
            const w = ({ estimatedRevenueByDay: e = !1 }) => {
                const { currentMetricData: t, currentTotals: a, prevTotals: i } = (0, x.C)(),
                    { analytics: n } = (0, c.M1)(),
                    r = (0, h.T)(),
                    o = (0, l.useMemo)(() => Boolean(a.EstimatedRevenue > 0), [a.EstimatedRevenue]),
                    d = (0, l.useMemo)(
                        () =>
                            O.filter((t) => "EstimatedRevenue" !== t || (e && o)).map((e) => {
                                const t = "EstimatedRevenue" === e;
                                return { key: e, label: r[e]?.label || e, type: $[e], valueNode: t ? (0, s.jsxs)("div", { className: "flex items-center gap-2 text-green-600", children: [(0, s.jsx)("span", { className: "font-bold", children: (0, s.jsx)(f.P, { format: { style: "currency", currency: "USD", notation: a[e] > 9999 ? "compact" : "standard", maximumFractionDigits: 0 }, locales: "en-US", value: a[e] }) }), (0, s.jsx)(y.Z, { className: "h-4 w-4 max-[767px]:block hidden min-[1077px]:block" })] }) : void 0 };
                            }),
                        [r, e, o, a],
                    );
                return (0, s.jsx)(j.E, { metrics: d, currentTotals: a, prevTotals: i, timeSeriesData: t, defaultMetric: "VideoView", ChartComponent: b.q, hoursLabel: n.hours, calculateChanges: g.Q3 });
            };
            var N = a(702024),
                k = a(524145),
                S = a(808106),
                D = a(596017),
                T = a(178016),
                C = a(889906),
                V = a(607499);
            const _ = ["Playback25", "Playback50", "Playback75", "PlaybackComplete", "PlaybackStart", "VideoView", "WatchTime"];
            function R({ children: e, timeRange: t, estimatedRevenueEnabled: a = !1 }) {
                return (0, s.jsx)(V.S, { children: (0, s.jsx)(l.Suspense, { fallback: (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(N.P, { size: "large" }) }), children: (0, s.jsx)(F, { timeRange: t, estimatedRevenueEnabled: a, children: e }) }) });
            }
            function M(e, t) {
                return { from_timestamp: (0, k.l)((0, S.b)(e.to), { days: 2 * (0, D.j)(e.to, e.from) + 1 }).getTime(), metric_types: _, to_timestamp: e.to.getTime(), to_timestamp_revenue: (0, S.b)((0, T.E)(e.to, 1)).getTime(), estimated_revenue_enabled: t };
            }
            function F({ children: e, timeRange: t, estimatedRevenueEnabled: a = !1 }) {
                const i = (0, l.useRef)(t),
                    n = (0, C.useRelayEnvironment)(),
                    [c, o] = (0, l.useState)(!0),
                    [d, m] = (0, l.useState)(null),
                    [u, h] = (0, l.useState)(M(t, a)),
                    p = (0, C.useLazyLoadQuery)(Q, u);
                return (
                    (0, l.useEffect)(() => {
                        (i.current = t), o(!0);
                        const e = M(t, a);
                        (0, r.fetchQuery)(n, Q, e, { fetchPolicy: "store-or-network" })
                            .toPromise()
                            .then(() => {
                                h(e);
                            });
                    }, [n, t, a]),
                    (0, l.useEffect)(() => {
                        p && (m((0, g.s)(p, i.current)), o(!1));
                    }, [p]),
                    null === d ? (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(N.P, { size: "large" }) }) : (0, s.jsx)(x.o, { value: { isFetching: c, ...d, timeRange: t }, children: e })
                );
            }
            function L({ children: e, timeRange: t, isMonetized: a = !1 }) {
                const [i, n] = (0, l.useState)(null);
                return (
                    (0, l.useEffect)(() => {
                        n(
                            (function (e, t = !1) {
                                const a = (0, g.DN)((0, g.EB)(e, _, t)),
                                    { currentMetricData: s, prevMetricData: i } = (0, g.fI)(a, e.from, e.to);
                                return { currentMetricData: s, currentTotals: (0, g.R$)(s), prevMetricData: i, prevTotals: i ? (0, g.R$)(i) : null };
                            })(t, a),
                        );
                    }, [t, a]),
                    i ? (0, s.jsx)(x.o, { value: { isFetching: !1, ...i, timeRange: t }, children: e }) : null
                );
            }
            var E = a(66412);
            function U() {
                const { currentTotals: e } = (0, x.C)(),
                    { analytics: t } = (0, c.M1)(),
                    a = (0, l.useMemo)(() => (0, g.eS)(e), [e]);
                return (0, s.jsxs)("div", { className: "bg-gray-0 flex flex-shrink-0 flex-grow flex-col rounded-2xl pr-2 border border-gray-200", children: [(0, s.jsx)("div", { className: "text-subtext1 md:text-body py-4 pl-4 font-medium text-gray-900 md:font-bold", children: t.videoCompletion }), (0, s.jsx)(E.y, { data: a })] });
            }
            var B = a(812115),
                A = a(236379),
                P = a(995348),
                z = a(796309);
            function I({ hasMoreData: e = !1, showNewVideoDetails: t = !1, showEstimatedRevenue: a = !1, videoList: i, onLoadMore: n, newVideoList: r = !1, isLoading: o = !1, videoDetailsPath: d }) {
                const { analytics: m } = (0, c.M1)(),
                    [u, x] = (0, l.useState)("createdAt"),
                    [h, p] = (0, l.useState)("desc"),
                    v = (0, l.useMemo)(() => i.some((e) => e.monetized) && a, [i, a]),
                    f = (0, l.useRef)(null),
                    [j, b] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                    if (!o && j) {
                        const e = setTimeout(() => {
                            b(!1);
                        }, 300);
                        return () => clearTimeout(e);
                    }
                }, [o, j]),
                    (0, l.useEffect)(() => {
                        if (o || !e || !n || j) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e.forEach((e) => {
                                    e.isIntersecting && (b(!0), n());
                                });
                            },
                            { root: null, rootMargin: "100px", threshold: 0 },
                        );
                        return (
                            f.current && t.observe(f.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [o, e, n, j]);
                const w = (0, l.useMemo)(() => (i ? [...i].sort((e, t) => ("asc" === h ? 1 : -1) * (e[u] > t[u] ? 1 : -1)) : []), [i, u, h]),
                    k = (e) => {
                        u === e ? p((e) => ("asc" === e ? "desc" : "asc")) : (x(e), p("desc"));
                    },
                    S = (e) => Intl.NumberFormat("en-US", { notation: e > 9999 ? "compact" : "standard", style: "decimal" }).format(e),
                    D = ({ children: e, video: a, className: i }) => (t ? (0, s.jsx)(B.r, { href: `${d}/${encodeURIComponent(a.id)}`, className: i, children: e }) : (0, s.jsx)("a", { href: a.mediaUrl, target: "_blank", rel: "noreferrer", className: i, children: e }));
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)("div", { className: "flex flex-col gap-4 md:hidden w-full", children: [(0, s.jsx)("span", { className: "text-headline1 font-bold text-gray-900", children: m.YourVideos }), w.map((e) => (0, s.jsxs)(D, { className: "flex gap-4", video: e, children: [(0, s.jsxs)("div", { className: "relative shrink-0 aspect-video w-2/5 block overflow-hidden rounded-lg", children: [(0, s.jsx)("img", { src: e.previewImage, alt: e.name, style: { objectFit: "cover", width: "100%" } }), (0, s.jsx)("div", { className: "text-subtext2 rounded-md absolute bottom-2 right-2 bg-black/75 py-0.5 px-1.5 text-white", children: (0, g.pI)(e.duration) })] }), (0, s.jsxs)("div", { className: "flex flex-col gap-2 pt-0.5", children: [(0, s.jsx)("span", { className: "text-subtext1 line-clamp-2", children: e.name || m.untitledVideo }), (0, s.jsxs)("div", { className: "flex items-center gap-1 text-subtext2 text-gray-600", children: [(0, s.jsxs)("span", { children: [S(e.viewCount), " ", m.views] }), (0, s.jsx)("div", { className: "bg-gray-600 rounded-full size-[3px]" }), (0, s.jsx)("span", { children: new Date(e.createdAt).toLocaleDateString() })] }), e.monetized && (0, s.jsxs)("div", { className: "flex items-center gap-1 text-subtext2 text-green-600", children: [(0, s.jsx)(y.Z, { className: "size-4" }), (0, s.jsx)("span", { children: (0, g.xy)(e.estimatedRevenue) })] })] })] }, e.mediaKey))] }),
                        (0, s.jsxs)(A.iA, {
                            className: "hidden md:table",
                            children: [
                                (0, s.jsx)(A.xD, { children: (0, s.jsxs)(A.SC, { children: [(0, s.jsx)(A.ss, { className: "w-24", children: m.Video }), (0, s.jsx)(A.ss, { className: "hidden md:table-cell" }), (0, s.jsx)(A.ss, { className: "md:whitespace-nowrap", children: (0, s.jsxs)("div", { className: "flex items-center gap-2 cursor-pointer  hover:text-text select-none", onClick: () => k("createdAt"), children: [m.PublishedDate, "createdAt" === u && (0, s.jsx)("span", { className: "ml-1", children: "asc" === h ? "↑" : "↓" })] }) }), (0, s.jsx)(A.ss, { className: "text-right flex justify-end", children: (0, s.jsxs)("div", { className: "flex items-center gap-2 cursor-pointer hover:text-text select-none text-right", onClick: () => k("viewCount"), children: [m.Views, "viewCount" === u && (0, s.jsx)("span", { className: "ml-1", children: "asc" === h ? "↑" : "↓" })] }) }), v && (0, s.jsx)(A.ss, { className: "text-right justify-end whitespace-nowrap", children: m.EstimatedRevenue })] }) }),
                                (0, s.jsx)(A.RM, { children: w.map((e) => (0, s.jsxs)(A.SC, { children: [(0, s.jsx)(A.pj, { children: (0, s.jsxs)(D, { video: e, className: "relative aspect-video w-20 block overflow-hidden rounded hover:outline hover:outline-2 hover:outline-gray-300", children: [(0, s.jsx)("img", { src: e.previewImage, alt: e.name, style: { objectFit: "cover", width: "100%" } }), (0, s.jsx)("div", { className: "text-subtext3 rounded-sm absolute bottom-1 right-1 bg-black/75 p-px px-1 text-white", children: (0, g.pI)(e.duration) })] }) }), (0, s.jsx)(A.pj, { className: "w-full max-w-0", children: (0, s.jsxs)("div", { className: "flex flex-col gap-2 min-w-0 max-w-full", children: [(0, s.jsx)(D, { video: e, className: (0, z.cn)("text-subtext1 block truncate hover:underline max-w-full", e.name ? "font-bold text-gray-900" : "text-gray-700", "cursor-pointer"), children: e.name || m.untitledVideo }), (0, s.jsx)("span", { className: "text-gray-900 md:hidden truncate", children: new Date(e.createdAt).toLocaleDateString() })] }) }), (0, s.jsx)(A.pj, { className: "hidden md:table-cell text-gray-900", children: new Date(e.createdAt).toLocaleDateString() }), (0, s.jsx)(A.pj, { className: "text-right text-gray-900", children: (0, s.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [S(e.viewCount), (0, s.jsx)(P.Z, { className: "h-4 w-4" })] }) }), v && (0, s.jsx)(A.pj, { className: "text-right text-green-600", children: e.monetized && (0, s.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [(0, g.xy)(e.estimatedRevenue), (0, s.jsx)(y.Z, { className: "size-4" })] }) })] }, e.mediaKey)) }),
                                !r && (0, s.jsx)(A.yt, { children: (0, s.jsx)(A.SC, { children: (0, s.jsx)(A.pj, { colSpan: 4, className: "text-right text-subtext2 text-gray-600", children: m.videoListWidgetFooter }) }) }),
                            ],
                        }),
                        !o && (0, s.jsx)("div", { ref: f }),
                        (0, s.jsx)("div", { className: (0, z.cn)("flex justify-center pt-4 pb-8", o ? "opacity-100" : "opacity-0"), children: (0, s.jsx)(N.P, { size: "large" }) }),
                    ],
                });
            }
            function K({ showEstimatedRevenue: e = !1, showNewVideoDetails: t = !1, videoDetailsPath: a }) {
                const { videoList: i, hasMoreData: n, onLoadMore: l, isLoading: r } = (0, v.ig)();
                return (0, s.jsx)(I, { hasMoreData: n, videoList: i, onLoadMore: l, newVideoList: !0, isLoading: r, showEstimatedRevenue: e, showNewVideoDetails: t, videoDetailsPath: a });
            }
            var W = a(179228);
            function Z() {
                const { videoList: e } = (0, v.ig)();
                return (0, s.jsx)(W.y, { videos: e.slice(0, 10).map((e) => ({ title: e.name, thumbnail: e.previewImage, views: e.viewCount, impressionsCtr: e.viewCount, averageViewDuration: "12:21" })) });
            }
            const Q = a(357333),
                O = ["VideoView", "WatchTime", "VideoCompletionRate", "AverageWatchTime", "EstimatedRevenue"],
                $ = { AverageWatchTime: "duration", VideoCompletionRate: "percent", VideoView: "number", WatchTime: "time", EstimatedRevenue: "revenue" };
            function G({ estimatedRevenueByDay: e }) {
                const { currentMetricData: t, currentTotals: a } = (0, x.C)(),
                    { videoList: i } = (0, v.ig)(),
                    n = (0, h.T)(),
                    { analytics: r } = (0, c.M1)(),
                    o = (0, l.useMemo)(() => Boolean(a.EstimatedRevenue > 0), [a.EstimatedRevenue]);
                return (0, s.jsx)(d.f, {
                    getCSVContent: () =>
                        (function (e, t, a, s, i, n) {
                            const l = s || {},
                                r = ["VideoView", "WatchTime", "VideoCompletionRate", "AverageWatchTime", n ? "EstimatedRevenue" : void 0].filter(Boolean),
                                c = [l.Date, ...r.map((e) => ("WatchTime" === e || "AverageWatchTime" === e ? `${t[e].label} (ms)` : t[e].label))],
                                o = Object.entries(e)
                                    .reverse()
                                    .map(([e, t]) => {
                                        const a = new Date(Number.parseInt(e)).toLocaleDateString("en-US", { day: "numeric", month: "short", timeZone: "UTC", weekday: "short", year: "numeric" }),
                                            s = [(0, g.Bi)(a)];
                                        return (
                                            r.forEach((e) => {
                                                let a = t[e]?.toString() || "0";
                                                if (("VideoCompletionRate" === e && (a = (100 * Number.parseFloat(a)).toFixed(2)), "WatchTime" === e || "AverageWatchTime" === e)) {
                                                    const e = Number.parseFloat(a);
                                                    a = Math.round(e).toString();
                                                }
                                                s.push((0, g.Bi)(a));
                                            }),
                                            s
                                        );
                                    });
                            if (!a || 0 === a.length) return (0, g.NW)(c, o);
                            const d = [l.UploadedOn, l.videoId, l.videoTitle, l.Views, l.duration, l.videoLink, l.monetized, l.EstimatedRevenueLabel, l.PublishedDate, l.PostLink],
                                m = a.map((e) => {
                                    const t = new Date(e.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }),
                                        a = Math.floor(e.duration / 1e3),
                                        s = `${Math.floor(a / 60)}:${(a % 60).toString().padStart(2, "0")}`,
                                        n = e.postCreatedAt ? new Date(e.postCreatedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", timeZone: "UTC", year: "numeric" }) : "";
                                    return [(0, g.Bi)(t), (0, g.Bi)(e.mediaKey), (0, g.Bi)(e.name || l.untitledVideo), (0, g.Bi)(e.viewCount.toString()), (0, g.Bi)(s), (0, g.Bi)(e.mediaUrl), (0, g.Bi)(i && e.monetized ? l.yes : l.no), (0, g.Bi)(i && e.estimatedRevenue ? e.estimatedRevenue.toString() : "0"), (0, g.Bi)(n), (0, g.Bi)(e.postUrl || "")];
                                });
                            return [[l.videoOverview].concat(Array(c.length - 1).fill("")), c, ...o, Array(Math.max(c.length, d.length)).fill(""), [l.YourVideos].concat(Array(d.length - 1).fill("")), d, ...m].map((e) => e.join(",")).join("\n");
                        })(t, n, i, r, o, e),
                    filename: "video_overview_analytics.csv",
                    section: "video",
                });
            }
            function Y({ isMockData: e, pastVideoCompareEnabled: t, estimatedRevenueEnabled: a = !1, estimatedRevenueByDay: r = !1, newVideoDetailsEnabled: d = !1, videoDetailsPath: x, isWebView: h = !1, enableCSVExport: g = !1 }) {
                const f = (0, i.$8)(),
                    { analytics: j } = (0, c.M1)(),
                    { config: b, updateConfig: y } = (0, u.V)(),
                    [N, k] = (0, l.useState)((0, m.X)(b.timeRange)),
                    S = "true" === (0, o.l)().get("monetized");
                (0, l.useEffect)(() => {
                    f.scribePageImpression({ action: "show", page: "account_analytics", section: "overview" });
                }, [f]);
                const D = e ? L : R,
                    T = e ? p.v : v.Ch;
                return (0, s.jsx)(D, {
                    timeRange: N,
                    isMonetized: e ? S : void 0,
                    estimatedRevenueEnabled: r,
                    children: (0, s.jsx)(T, {
                        estimatedRevenueEnabled: a,
                        children: (0, s.jsxs)("div", {
                            className: "text-text flex h-full w-full flex-col gap-4 px-4 pt-4",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "flex flex-col items-start justify-between gap-4 max-sm:flex-col md:flex-row",
                                    children: [
                                        (0, s.jsx)("span", { className: "text-headline1 whitespace-nowrap font-bold", children: j.videoOverview }),
                                        (0, s.jsxs)("div", {
                                            className: "scrollbar-hide flex h-full max-w-full items-center gap-2 overflow-x-auto",
                                            children: [
                                                (0, s.jsx)(m.W, {
                                                    timeRange: N,
                                                    onChange: (e, t) => {
                                                        k(e), t || y({ timeRange: Math.abs((0, n.w)(e.from, e.to) - 1) });
                                                    },
                                                }),
                                                !h && g && (0, s.jsx)(G, { estimatedRevenueByDay: r }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1", children: (0, s.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, s.jsxs)("div", { className: "flex gap-4", children: [(0, s.jsxs)("div", { className: "flex flex-col gap-4 w-full", children: [(0, s.jsx)(w, { estimatedRevenueByDay: r }), (0, s.jsx)(U, {})] }), t && (0, s.jsx)("div", { className: "w-[20rem] shrink-0 h-full", children: (0, s.jsx)(Z, {}) })] }), (0, s.jsx)(K, { showEstimatedRevenue: a, showNewVideoDetails: d, videoDetailsPath: x })] }) }),
                            ],
                        }),
                    }),
                });
            }
            function q({ fallbackConfig: e, ...t }) {
                return (0, s.jsx)(u.x, { fallbackConfig: e, children: (0, s.jsx)(Y, { ...t }) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e0d0963f.14d7af2a.js.map

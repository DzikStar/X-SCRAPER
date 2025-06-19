"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-a25ee5c1"],
    {
        742266: (e, t, s) => {
            s.d(t, { i: () => d });
            var n = s(552322),
                a = s(993165),
                r = s(698995),
                i = s(840489),
                l = s(968025),
                o = s(430962),
                u = s(749612);
            const d = ({ fullWidth: e = !1 }) => {
                const t = (0, l.t)(),
                    { business: s } = (0, o.M1)(),
                    d = (0, u.nO)();
                return (0, n.jsx)(a.z, { onClick: () => t.push(`${d}`), size: "xSmallCompact", variant: "insightsSecondary", icon: (0, n.jsx)(r.Z, { className: "text-gray-700" }), children: (0, n.jsx)("div", { className: (0, i.Z)("text-subtext2 md:text-subtext3 font-normal", { "hidden md:block": !e }), children: s.radar.allQueries }) });
            };
        },
        3170: (e, t, s) => {
            s.d(t, { A: () => d });
            var n = s(552322),
                a = s(993165),
                r = s(25457),
                i = s(840489),
                l = s(968025),
                o = s(430962),
                u = s(749612);
            const d = ({ fullWidth: e = !1 }) => {
                const t = (0, l.t)(),
                    { business: s } = (0, o.M1)(),
                    d = (0, u.nO)();
                return (0, n.jsx)(a.z, { onClick: () => t.push(`${d}/new`), size: "xSmallCompact", variant: "insightsSecondary", icon: (0, n.jsx)(r.Z, { className: "text-gray-700" }), children: (0, n.jsx)("div", { className: (0, i.Z)("text-subtext2 md:text-subtext3 font-normal", { "hidden md:block": !e }), children: s.radar.newQuery }) });
            };
        },
        959638: (e, t, s) => {
            s.d(t, { F_: () => c, NR: () => d });
            var n = s(552322),
                a = s(446368),
                r = s(256958),
                i = s(202784),
                l = s(889906),
                o = s(430962);
            const u = (0, i.createContext)({}),
                d = ({ children: e, id: t }) => {
                    const s = (0, a.$8)(),
                        { business: d } = (0, o.M1)(),
                        c = (0, l.useLazyLoadQuery)(m, { id: t }, { fetchPolicy: "network-only" });
                    if (!c.viewer_v2?.user_results.result.insight_rule_by_id) throw new Error("Insight rule not found");
                    const { core: x, rest_id: g } = c.viewer_v2.user_results.result.insight_rule_by_id,
                        [p] = (0, l.useMutation)(h),
                        [f, b] = (0, i.useState)({ advancedQuery: x.advanced_query, createdAt: new Date(x.created_at).getTime(), id: g, notificationsEnabled: x.notifications_enabled, tags: x.tags ? JSON.parse(x.tags) : null, title: x.title, updatedAt: new Date(x.updated_at).getTime() }),
                        y = (0, i.useCallback)(
                            (e) => {
                                e &&
                                    p({
                                        onCompleted: (t) => {
                                            "InsightRuleMutationSuccess" === t.update_insight_rule_v2?.__typename ? b(e) : "InsightRuleFailure" === t.update_insight_rule_v2?.__typename && (r.Am.error(d.radar.failedToUpdateQuery), s.scribe({ action: "update_insight_error", data: { error_code: t.update_insight_rule_v2?.error_code, error_message: t.update_insight_rule_v2?.error_message, insight_id: e.id, insight_tags: e.tags, insight_title: e.title, notifications_enabled: e.notificationsEnabled }, page: "insights_detail" }));
                                        },
                                        variables: { advanced_query: e.advancedQuery, id: e.id, notifications_enabled: e.notificationsEnabled, tags: e.tags ? JSON.stringify(e.tags) : void 0, title: e.title },
                                    });
                            },
                            [p, s, d],
                        );
                    return (
                        (0, i.useEffect)(() => {
                            s.scribe({ action: "impression", data: { insight_id: t }, page: "insights_detail" });
                        }, [t, s]),
                        (0, n.jsx)(u.Provider, { value: { insight: f, updateInsight: y }, children: e })
                    );
                },
                c = () => {
                    const e = (0, i.useContext)(u);
                    if (!e) throw new Error("useInsight must be used within a InsightProvider");
                    return e;
                },
                m = s(264735),
                h = s(600894);
        },
        797165: (e, t, s) => {
            s.d(t, { V: () => Se });
            var n = s(552322),
                a = s(447818),
                r = s(840489),
                i = s(430962),
                l = s(595133),
                o = s(742266),
                u = s(3170),
                d = s(999758),
                c = s(202784),
                m = s(970430),
                h = s(947727),
                x = s(733936),
                g = s(283840);
            function p(e) {
                const t = (0, h.T)(new m.eJ()),
                    s = (0, x.k)(t, e - 1);
                return s.setUTCHours(0, 0, 0, 0), { fromDate: s, toDate: t };
            }
            const f = (0, c.createContext)(null),
                b = ({ children: e, initialDaysBack: t, initialGranularity: s }) => {
                    const [a, r] = (0, c.useState)(p(t)),
                        [i, l] = (0, c.useState)(null),
                        [o, u] = (0, c.useState)("posts"),
                        [d, m] = (0, c.useState)(s),
                        h = (0, c.useMemo)(() => (a.toDate.getTime() - a.fromDate.getTime()) / g.s, [a]),
                        x = (0, c.useMemo)(() => {
                            const e = new Date(i?.fromDate || a.fromDate),
                                t = i ? new Date(i.toDate) : null;
                            return t && t.getTime() - e.getTime() < 864e5 && t.setDate(t.getDate() + 1), { fromDate: e, toDate: t };
                        }, [i, a]),
                        b = {
                            chartType: o,
                            chartZoom: i,
                            filterDateRange: x,
                            granularity: d,
                            setChartType: u,
                            setChartZoom: l,
                            setGranularity: m,
                            setTimeRange: (e) => {
                                r("number" == typeof e ? p(e) : e), l(null);
                            },
                            timeRange: a,
                            timeRangeDays: h,
                        };
                    return (0, n.jsx)(f.Provider, { value: b, children: e });
                },
                y = () => {
                    const e = (0, c.useContext)(f);
                    if (!e) throw new Error("useFilter must be used within a FilterProvider");
                    return e;
                },
                v = () => {
                    const { chartZoom: e, granularity: t } = y(),
                        s = (0, c.useMemo)(() => {
                            if (!e) return null;
                            const s = (e, s, n) => new Intl.DateTimeFormat("en-US", { day: "numeric", hour: s ? "numeric" : void 0, minute: s ? "numeric" : void 0, month: "short", timeZone: "Day" === t ? "UTC" : void 0, year: n ? "numeric" : void 0 }).format(e),
                                n = (e) => new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format(e),
                                a = e.fromDate,
                                r = e.toDate,
                                i = "Hour" === t,
                                l = "Day" === t,
                                o = a.toDateString() === r.toDateString(),
                                u = a.getFullYear() === r.getFullYear();
                            return i ? (o ? `${s(a, !1, !1)} ${n(a)} - ${n(r)}` : `${s(a, !0, !1)} - ${s(r, !0, !1)}`) : l ? (u ? `${s(a, !1, !1)} - ${s(r, !1, !0)}` : `${s(a, !1, !0)} - ${s(r, !1, !0)}`) : `${s(a, !1, !1)} - ${s(r, !1, !1)}`;
                        }, [e, t]);
                    return s ? (0, n.jsx)("div", { className: "text-subtext3 text-gray-600", children: s }) : null;
                };
            var j = s(446368),
                w = s(993165),
                _ = s(332161),
                C = s(34681),
                D = s(519590),
                S = s(305399),
                E = s(875515),
                k = s(915574),
                T = s(437915),
                N = s(959638),
                I = s(749612);
            const M = () => {
                const e = (0, j.$8)(),
                    { business: t } = (0, i.M1)(),
                    { insight: s, updateInsight: a } = (0, N.F_)(),
                    [l, o] = (0, c.useState)(!1),
                    u = (0, S.a)("(min-width: 768px)"),
                    d = (0, I.nD)(),
                    [m, h] = (0, c.useState)(s.advancedQuery || ""),
                    x = (0, I.ro)(),
                    g = (0, I.oG)(),
                    p = (0, I.v9)(),
                    f = (0, c.useCallback)(
                        async ({ query: t }) => {
                            a({ ...s, advancedQuery: t }), o(!1), e.scribe({ action: "click", component: "edit_advanced_query", data: { insight_id: s.id }, element: "edit_advanced_query", page: "insights_detail" });
                        },
                        [e, s, a],
                    );
                if (!s.advancedQuery) return null;
                const b = (0, n.jsx)(w.z, {
                        variant: "insightsSecondary",
                        size: "xSmallCompact",
                        onClick: () => {
                            e.scribe({ action: "click", data: { insight_id: s.id }, element: "edit_advanced_query", page: "insights_detail" }), o(!0);
                        },
                        className: "max-w-[300px] transition-all duration-200 hover:max-w-[600px]",
                        children: (0, n.jsxs)("div", { className: "flex items-center gap-1 text-ellipsis", children: [(0, n.jsx)(E.Z, { className: "shrink-0 text-gray-700" }), (0, n.jsx)(_.x, { size: "subtext2", color: "gray900", numberOfLines: 1, className: "break-all text-start", children: s.advancedQuery })] }),
                    }),
                    y = x ? (0, n.jsx)(k.Z, { onSubmit: f, query: s.advancedQuery, usePreviousQuery: p, onCancel: () => o(!1) }) : (0, n.jsx)(T.U, { onSubmit: () => f({ query: m, submittedPrompts: [] }), query: m, onQueryChange: h });
                return u || g ? (0, n.jsxs)(C.Vq, { open: l, onOpenChange: o, children: [(0, n.jsx)(C.hg, { asChild: !0, children: b }), (0, n.jsxs)(C.cZ, { className: "sm:max-w-[425px]", children: [(0, n.jsx)(C.fK, { children: (0, n.jsx)(C.$N, { children: t.radar.editQueryTitle }) }), y] })] }) : (0, n.jsxs)(D.dy, { open: l, onOpenChange: o, children: [(0, n.jsx)(D.Qz, { asChild: !0, children: b }), (0, n.jsxs)(D.sc, { children: [(0, n.jsx)(D.OX, { className: "text-left", children: (0, n.jsx)(D.iI, { children: t.radar.editQueryTitle }) }), (0, n.jsx)("div", { className: "px-4 pb-8", children: y }), (0, n.jsx)(D.ze, { className: (0, r.Z)("pt-2", { "pb-32": d }), children: !x && (0, n.jsx)(D.uh, { asChild: !0, children: (0, n.jsx)(w.z, { variant: "insightsSecondary", children: "Cancel" }) }) })] })] });
            };
            var F = s(436995),
                Q = s(699416);
            const P = "text-headline2 text-start p-0.5 line-clamp-1 rounded border-none bg-transparent font-bold ring-gray-100 hover:outline-none hover:ring-2 focus:outline-none focus:ring-2 focus:ring-gray-100",
                Z = () => {
                    const e = (0, j.$8)(),
                        { business: t } = (0, i.M1)(),
                        { insight: s, updateInsight: a } = (0, N.F_)(),
                        [l, o] = (0, c.useState)(!1),
                        [u, d] = (0, c.useState)(s.title),
                        m = (0, c.useRef)(null),
                        h = (0, c.useCallback)(() => {
                            e.scribe({ action: "click", data: { insight_id: s.id }, element: "rename_title_input", page: "insights_detail" }),
                                o(!0),
                                setTimeout(() => {
                                    m.current?.focus(), m.current?.setSelectionRange(0, u.length);
                                }, 0);
                        }, [e, s.id, u.length]),
                        x = (0, c.useCallback)((e) => {
                            d(e.target.value);
                        }, []),
                        g = (0, c.useCallback)((e) => {
                            "Enter" === e.key && m.current?.blur();
                        }, []),
                        p = (0, c.useCallback)(
                            (e) => {
                                const t = e.target.value.trim();
                                "" !== t && t !== s.title ? a({ ...s, title: t }) : d(s.title), o(!1);
                            },
                            [s, a],
                        );
                    return l
                        ? (0, n.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                  (0, n.jsx)("input", {
                                      ref: m,
                                      className: (0, r.Z)(P, "text-text"),
                                      value: u,
                                      onChange: x,
                                      onKeyDown: g,
                                      onBlur: p,
                                      onFocus: () => {
                                          o(!0),
                                              setTimeout(() => {
                                                  m.current?.focus(), m.current?.setSelectionRange(0, u.length);
                                              }, 0);
                                      },
                                  }),
                                  (0, n.jsx)("button", { onClick: () => m.current?.blur(), className: "rounded hover:bg-gray-200", type: "button", children: (0, n.jsx)(Q.Z, { className: "text-gray-1000 size-5" }) }),
                              ],
                          })
                        : (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("button", { className: (0, r.Z)(P, { "text-gray-700": 0 === u.length, "text-text": u.length > 0 }), onClick: h, type: "button", children: u || t.radar.untitledQuery }), (0, n.jsx)("button", { onClick: h, className: "rounded p-0.5 hover:bg-gray-200", type: "button", children: (0, n.jsx)(F.Z, { className: "size-4 text-gray-900" }) })] });
                };
            var L = s(193686),
                R = s(964522),
                $ = s(611105);
            const B = () => {
                const e = (0, j.$8)(),
                    { business: t } = (0, i.M1)(),
                    { chartZoom: s, granularity: a, setChartZoom: r, setGranularity: l, timeRangeDays: o } = y(),
                    u = (0, I.zk)(),
                    d = (0, c.useMemo)(() => {
                        let e = [];
                        return (e = o > 30 ? ["Day"] : o >= 2 ? ["Hour", "Day"] : ["Hour"]), e.filter((e) => u.includes(e));
                    }, [o, u]);
                return (
                    (0, c.useEffect)(() => {
                        d.includes(a) || l(d[0]);
                    }, [a, d, l]),
                    (0, n.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            s &&
                                (0, n.jsx)(w.z, {
                                    variant: "insightsSecondary",
                                    size: "xSmall",
                                    onClick: () => {
                                        r(null), e.scribe({ action: "chart_zoom_clear", page: "insights_detail", section: "post_chart" });
                                    },
                                    hoverLabel: t.radar.resetSelection,
                                    icon: (0, n.jsx)($.Z, {}),
                                }),
                            (0, n.jsx)(R.N, {
                                options: d.map((e) => ({ label: t.radar.granularity[e], value: e })),
                                onSelect: (t) => {
                                    e.scribe({ action: "set_granularity", data: { granularity: t, time_range_days: o }, element: "granularity_select", page: "insights_detail", section: "chart_settings" }), l(t);
                                },
                                defaultValue: a,
                            }),
                        ],
                    })
                );
            };
            var O = s(643715),
                q = s(1468),
                z = s(994805),
                U = s(5392),
                A = s(93699),
                K = s(31674),
                G = s(602077),
                H = s(108506),
                V = s(658087),
                W = s(536531);
            const { Area: Y, AreaChart: J, CartesianGrid: X, ReferenceArea: ee, XAxis: te, YAxis: se } = O,
                ne = "timestamp",
                ae = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, i.M1)(),
                        { chartZoom: s, granularity: a, timeRange: r } = y(),
                        l = (0, c.useMemo)(() => ({ chartZoom: s, fetchKey: e.advancedQuery, granularity: a, ruleId: e.id, timeRange: r }), [s, a, r, e]),
                        { countTimeSeries: o } = (0, W.i)(l);
                    return (0, n.jsx)(ie, { dataKey: "posts", data: o, label: t.radar.posts });
                },
                re = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, i.M1)(),
                        { chartZoom: s, granularity: a, timeRange: r } = y(),
                        l = (0, c.useMemo)(() => ({ chartZoom: s, fetchKey: e.advancedQuery, granularity: a, ruleId: e.id, timeRange: r }), [s, a, r, e]);
                    return (0, I._8)() ? (0, n.jsx)(ie, { data: (0, V.l)(l).impressionsTimeSeries, dataKey: "impressions", label: t.radar.impressions }) : (0, n.jsx)(ie, { data: (0, H.C)(l).impressionsTimeSeries, dataKey: "impressions", label: t.radar.impressions });
                },
                ie = ({ data: e, dataKey: t, label: s }) => {
                    const a = (0, j.$8)(),
                        { business: r } = (0, i.M1)(),
                        l = (0, A.J)(),
                        o = (0, I.BX)() && !l,
                        { chartZoom: u, granularity: d, setChartZoom: m } = y(),
                        [h, x] = (0, c.useState)(null),
                        [p, f] = (0, c.useState)(null),
                        [b, v] = (0, c.useState)(!1),
                        w = { [t]: { color: "hsl(var(--colors-gray-800))", label: s }, incomplete: { color: "hsl(var(--colors-gray-300))", label: r.radar.loading } },
                        _ = (0, c.useMemo)(() => e.map((e) => ({ [t]: e.count, fill: `var(--color-${t})`, incomplete: e.incompleteCount, timestamp: e.startDate.getTime() })), [e, t]);
                    (0, c.useEffect)(() => {
                        null === u && (x(null), f(null), v(!1));
                    }, [u]);
                    const C = (0, c.useCallback)(
                        (e) => {
                            if (!o) return;
                            let t = 0,
                                s = 0;
                            if (h === p && _.length > 0 && e) {
                                const n = "Hour" === d ? g.d : g.s,
                                    a = _[0]?.timestamp ?? 0,
                                    r = _[_.length - 1]?.timestamp ?? 0;
                                (t = Math.max(Number(e) - n, a)), (s = Math.min(Number(e) + n, r)), x(t), f(s);
                            } else (t = Math.min(Number(h), Number(p))), (s = Math.max(Number(h), Number(p)));
                            const n = s === _[_.length - 1]?.timestamp;
                            m({ fromDate: new Date(t), toDate: new Date(n ? s + g.s : s) }), v(!1), a.scribe({ action: "chart_zoom", data: { from_date: new Date(t).toISOString(), to_date: new Date(n ? s + g.s : s).toISOString() }, page: "insights_detail", section: "post_chart" });
                        },
                        [a, _, o, d, h, p, m],
                    );
                    return (0, n.jsx)(q.BO, {
                        config: w,
                        className: "relative h-full min-h-[0] w-full select-none",
                        children: (0, n.jsxs)(J, {
                            data: _,
                            margin: { bottom: 0, left: 0, right: 0, top: 0 },
                            onMouseDown: (e) => {
                                o && e.activeLabel && (v(!0), x(+e.activeLabel), f(+e.activeLabel));
                            },
                            onMouseMove: (e) => {
                                o && b && e.activeLabel && f(+e.activeLabel);
                            },
                            onMouseUp: (e) => {
                                b && C(e.activeLabel);
                            },
                            children: [
                                (0, n.jsxs)("defs", { children: [(0, n.jsxs)("linearGradient", { id: "fill1", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, n.jsx)("stop", { offset: "5%", stopColor: `var(--color-${t})`, stopOpacity: 0.8 }), (0, n.jsx)("stop", { offset: "95%", stopColor: `var(--color-${t})`, stopOpacity: 0.1 })] }), (0, n.jsxs)("linearGradient", { id: "fill2", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, n.jsx)("stop", { offset: "5%", stopColor: "var(--color-incomplete)", stopOpacity: 0.8 }), (0, n.jsx)("stop", { offset: "95%", stopColor: "var(--color-incomplete)", stopOpacity: 0.1 })] })] }),
                                (0, n.jsx)(X, { vertical: !1 }),
                                (0, n.jsx)(Y, { dataKey: t, stroke: `var(--color-${t})`, radius: 2, fill: "url(#fill1)", dot: !1, activeDot: le, type: "monotone", animationDuration: 500 }),
                                (0, n.jsx)(Y, { dataKey: "incomplete", stroke: "var(--color-incomplete)", radius: 2, fill: "url(#fill2)", dot: !1, activeDot: !1, type: "monotone", strokeDasharray: "3 3", animationDuration: 500 }),
                                (0, n.jsx)(se, { tickFormatter: G.M, tickLine: !1, axisLine: !1, className: "text-subtext3" }),
                                (0, n.jsx)(te, { dataKey: ne, tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: 32, className: "text-subtext3", tickFormatter: (e) => Intl.DateTimeFormat("en-US", { day: "Day" === d ? "numeric" : "2-digit", hour: "Day" === d ? void 0 : "numeric", minute: "Day" === d ? void 0 : "numeric", month: "short", timeZone: "Day" === d ? "UTC" : void 0 }).format(new Date(e)) }),
                                (0, n.jsx)(q.h7, { content: (0, n.jsx)(q.dg, { hideForKeys: ["incomplete"], className: (0, K.cn)("text-subtext2"), labelClassName: (0, K.cn)("font-normal text-text"), labelFormatter: (e, [t]) => t?.payload && Intl.DateTimeFormat("en-US", { day: "numeric", hour: "Day" === d ? void 0 : "numeric", minute: "Day" === d ? void 0 : "numeric", month: "short", timeZone: "Day" === d ? "UTC" : void 0 }).format(new Date(t.payload[ne])) }), cursor: (0, n.jsx)(z.Q, {}) }),
                                h && p ? (0, n.jsx)(ee, { x1: h, x2: p, fillOpacity: b ? 0.3 : 0.2, animationDuration: 300 }) : null,
                            ],
                        }),
                    });
                },
                le = (e) => {
                    const { key: t, value: s, ...a } = e;
                    return null === s[1] ? null : (0, n.jsx)(U.m, { ...a }, t);
                };
            var oe = s(759397),
                ue = s(607499),
                de = s(74451);
            const ce = (e) => {
                    const { business: t } = (0, i.M1)();
                    return (0, I._8)() ? (0, n.jsx)(de.Cf, { title: t.radar.impressions, count: (0, V.l)(e).totalImpressions }) : (0, n.jsx)(de.Cf, { title: t.radar.impressions, count: (0, H.C)(e).totalImpressions });
                },
                me = () => {
                    const { business: e } = (0, i.M1)();
                    return (0, n.jsx)(de.m3, { title: e.radar.impressions });
                },
                he = (e) => {
                    const { business: t } = (0, i.M1)();
                    return (0, n.jsx)(ue.S, { fallback: (0, n.jsx)(de.uY, { title: t.radar.impressions }), children: (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(me, {}), children: (0, n.jsx)(ce, { ...e }) }) });
                };
            var xe = s(844823),
                ge = s(679671),
                pe = s(864629);
            const fe = (e) => {
                    const t = e.getUTCMonth() + 1,
                        s = e.getUTCDate();
                    return `${e.getUTCFullYear()}-${t.toString().padStart(2, "0")}-${s.toString().padStart(2, "0")}`;
                },
                be = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, i.M1)(),
                        { filterDateRange: s } = y(),
                        a = (0, I.nD)(),
                        { aiTrendsEnabled: l, aiTrendsLimit: o, aiTrendsScoreThreshold: u } = (0, I.gB)(),
                        d = { fromDate: fe(s.fromDate), toDate: s.toDate ? fe(s.toDate) : null },
                        m = e.tags?.join(" OR ") || e.advancedQuery || "";
                    return (0, n.jsx)("div", { className: "flex w-full flex-col max-md:h-full max-md:min-h-screen", children: (0, n.jsxs)(ge.mQ, { defaultActiveTab: "Top", className: "h-full gap-2 md:gap-4 md:overflow-y-auto", children: [(0, n.jsxs)("div", { className: (0, r.Z)("bg-background z-[9] flex gap-2 p-2 md:p-0", { "max-md:sticky max-md:top-0": !a }), children: [(0, n.jsx)(ge.E2, { id: "Top", children: t.radar.top }), (0, n.jsx)(ge.E2, { id: "Latest", children: t.radar.latest }), l && (0, n.jsx)(ge.E2, { id: "Trends", children: t.radar.trends })] }), (0, n.jsxs)(c.Suspense, { fallback: (0, n.jsx)("div", { className: "absolute left-0 right-0 top-10 flex h-20 items-center justify-center", children: (0, n.jsx)(L.P, { color: "text" }) }), children: [(0, n.jsx)(ge.I5, { id: "Top", children: (0, n.jsx)(pe.p, { sortOrder: "Top", dateRange: d, query: m }) }), (0, n.jsx)(ge.I5, { id: "Latest", children: (0, n.jsx)(pe.p, { sortOrder: "Latest", dateRange: d, query: m }) }), l && (0, n.jsx)(ge.I5, { id: "Trends", children: (0, n.jsx)(xe.f, { query: m, limit: o, scoreThreshold: u }) })] })] }) });
                },
                ye = (e) => {
                    const { uniqueUsers: t } = (0, H.C)(e),
                        { business: s } = (0, i.M1)();
                    return (0, n.jsx)(de.Cf, { title: s.radar.uniqueUsers, count: t });
                },
                ve = () => {
                    const { business: e } = (0, i.M1)();
                    return (0, n.jsx)(de.m3, { title: e.radar.uniqueUsers });
                },
                je = (e) => {
                    const { business: t } = (0, i.M1)();
                    return (0, n.jsx)(ue.S, { fallback: (0, n.jsx)(de.uY, { title: t.radar.uniqueUsers }), children: (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(ve, {}), children: (0, n.jsx)(ye, { ...e }) }) });
                },
                we = () => {
                    const e = (0, I.Ik)(),
                        t = (0, I.IQ)(),
                        { insight: s } = (0, N.F_)(),
                        { business: a } = (0, i.M1)(),
                        { chartType: r, chartZoom: l, granularity: o, setChartType: u, timeRange: d } = y();
                    return (0, n.jsxs)("div", {
                        className: "max-md:hide-scrollbar flex h-full flex-col pb-2 md:flex-row md:gap-4 md:overflow-y-auto md:px-4 md:pb-4 md:pt-0",
                        children: [
                            (0, n.jsxs)("div", {
                                className: "flex h-full flex-1 flex-col gap-4 p-2 md:p-0",
                                children: [
                                    (0, n.jsxs)("div", { className: "flex w-full gap-12 rounded-xl border border-gray-100 p-4", children: [(0, n.jsx)("div", { children: (0, n.jsx)(oe.g, { ruleId: s.id, fetchKey: s.advancedQuery, timeRange: d, chartZoom: l, granularity: o }) }), e && (0, n.jsx)("div", { children: (0, n.jsx)(he, { ruleId: s.id, fetchKey: s.advancedQuery, timeRange: d, chartZoom: l, granularity: o }) }), t && (0, n.jsx)("div", { children: (0, n.jsx)(je, { timeRange: d, chartZoom: l, granularity: o, ruleId: s.id, fetchKey: s.advancedQuery }) })] }),
                                    (0, n.jsxs)("div", {
                                        className: "lg:max-h-auto flex h-64 min-h-0 w-full flex-col gap-2 rounded-xl border border-gray-100 pb-1 pr-4 pt-4 max-lg:max-h-64 md:flex-1 md:pb-4",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "flex w-full justify-between gap-2 pl-4",
                                                children: [
                                                    (0, n.jsx)(R.N, {
                                                        options: [{ label: a.radar.posts, value: "posts" }, ...(e ? [{ label: a.radar.impressions, value: "impressions" }] : [])],
                                                        defaultValue: r,
                                                        onSelect: (e) => {
                                                            u(e);
                                                        },
                                                    }),
                                                    (0, n.jsx)(B, {}),
                                                ],
                                            }),
                                            (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(L.P, { color: "text" }), children: "posts" === r ? (0, n.jsx)(ae, {}) : (0, n.jsx)(re, {}) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", { className: "relative flex w-full rounded-xl border-gray-100 md:h-full md:w-[360px] md:border md:px-4 md:pt-4", children: (0, n.jsx)(be, {}) }),
                        ],
                    });
                };
            var _e = s(660237);
            const Ce = [
                { daysBack: 1, label: "1D" },
                { daysBack: 7, label: "7D" },
                { daysBack: 30, label: "30D" },
            ];
            const De = () => {
                const e = (0, j.$8)(),
                    { setTimeRange: t, timeRange: s } = y(),
                    a = (0, I.fI)(),
                    r = (0, I.Sp)(),
                    l = (0, I.zk)(),
                    { business: o } = (0, i.M1)(),
                    u = (0, c.useMemo)(
                        () =>
                            (function (e, t, s, n) {
                                const a = Ce.filter((s) => !(s.daysBack > e || (s.daysBack <= 1 && !t.includes("Hour"))));
                                return a.length > 1 ? a : [{ daysBack: Math.min(s, e), label: `${Math.min(s, e)} ${n}` }];
                            })(r, [...l], a, o.radar.days),
                        [r, l, a, o.radar.days],
                    ),
                    d = (e) => {
                        const t = p(e);
                        return s.fromDate.getTime() === t.fromDate.getTime() && s.toDate.getTime() === t.toDate.getTime();
                    };
                return (0, n.jsx)("div", {
                    className: "flex gap-2",
                    children: u.map((s) =>
                        (0, n.jsx)(
                            _e.C,
                            {
                                isActive: d(s.daysBack),
                                onToggle: () =>
                                    ((s) => {
                                        e.scribe({ action: "click", data: { timeRange: s.label }, element: "time_range_filter", page: "insights_detail", section: "filters" }), t(s.daysBack);
                                    })(s),
                                children: s.label,
                            },
                            s.label,
                        ),
                    ),
                });
            };
            function Se() {
                const { insight: e } = (0, N.F_)(),
                    t = (0, I.Iw)() > 1,
                    s = (0, I.fI)(),
                    c = (0, I.nD)(),
                    m = (0, I.CM)(),
                    { business: h } = (0, i.M1)();
                return (0, n.jsx)(b, { initialDaysBack: s, initialGranularity: "Day", children: (0, n.jsx)("div", { className: "flex h-full flex-col md:overflow-y-auto", children: (0, n.jsxs)("div", { className: "text-text flex h-full w-full flex-1 flex-col", children: [(0, n.jsxs)("div", { className: (0, r.Z)("bg-background z-10 flex flex-col gap-4 p-2 md:p-4", { "max-md:sticky max-md:top-0": !c }), children: [(0, n.jsx)(l.h, { title: h.radar.header, Icon: (0, n.jsx)(a.Z, { className: "text-text size-7" }), beta: !1, children: t && (0, n.jsxs)("div", { className: "flex gap-4", children: [(0, n.jsx)(o.i, {}), (0, n.jsx)(u.A, {})] }) }), t && (0, n.jsxs)("div", { className: "flex justify-between", children: [(0, n.jsx)(Z, {}), (0, n.jsx)("div", { className: "md:hidden", children: (0, n.jsx)(o.i, { fullWidth: !0 }) })] }), (0, n.jsxs)("div", { className: "flex items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-4", children: [(0, n.jsx)(M, {}), m && (0, n.jsx)(d.s, { id: e.id, advancedQuery: e.advancedQuery ? e.advancedQuery : "", notificationsEnabled: e.notificationsEnabled, displayInfo: !0, page: "insights_detail" })] }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(v, {}), (0, n.jsx)(De, {})] })] })] }), (0, n.jsx)(we, {})] }) }) });
            }
        },
        749612: (e, t, s) => {
            s.d(t, { $W: () => x, BX: () => d, CM: () => _, HZ: () => C, IQ: () => m, Ik: () => h, Iw: () => v, Kw: () => u, No: () => w, Sp: () => j, _8: () => E, fI: () => p, gB: () => c, nD: () => b, nO: () => g, oG: () => D, ro: () => y, v9: () => S, zk: () => f });
            var n = s(552322),
                a = s(202784),
                r = s(889906),
                i = s(834629);
            const l = { advancedQueryEnabled: !1, aiTrendsEnabled: !1, aiTrendsLimit: 5, aiTrendsScoreThreshold: 0.6, alertsEnabledByDefault: !1, allowAlertNotifications: !1, chartFilterEnabled: !1, granularityOptions: ["Hour", "Day"], impressionChartEnabled: !1, impressionsEnabled: !1, initialDaysBack: 7, isWebView: !1, modalEditQueryEnabled: !0, nlpEnabled: !1, path: "/business/radar", postCountsEnabled: !1, previewSplashMetricsEnabled: !1, previousQueryEnabled: !1, savedQueryLimit: 1, subscriptionType: "PremiumPlus", timeRangeLimitDays: 30, uniqueUsersEnabled: !1, paginatedMetricsBackendEnabled: !1 },
                o = (0, a.createContext)(null),
                u = ({ children: e, settings: t }) => {
                    const s = (0, r.useLazyLoadQuery)(i.G, {});
                    let a = { ...l, ...t };
                    const u = s.viewer_v2?.user_results?.result?.insights_config;
                    if (u) {
                        const e = { alertsEnabledByDefault: "alerts_enabled_by_default", allowAlertNotifications: "allow_alert_notifications", granularityOptions: "allow_granularity", impressionsEnabled: "allow_impressions", nlpEnabled: "allow_build_query", postCountsEnabled: "allow_post_counts", savedQueryLimit: "saved_query_limit", subscriptionType: "subscription_type", timeRangeLimitDays: "time_range_limit_days", uniqueUsersEnabled: "allow_unique_users" };
                        a = { ...a, ...Object.entries(e).reduce((e, [t, s]) => ({ ...e, [t]: u[s] ?? a[t] }), {}) };
                    }
                    return (0, n.jsx)(o.Provider, { value: a, children: e });
                };
            function d() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useChartFilterEnabled must be used within an InsightsFSProvider");
                return e.chartFilterEnabled;
            }
            function c() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useAiTrendsSettings must be used within an InsightsFSProvider");
                return { aiTrendsEnabled: e.aiTrendsEnabled, aiTrendsLimit: e.aiTrendsLimit, aiTrendsScoreThreshold: e.aiTrendsScoreThreshold };
            }
            function m() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useUniqueUsersEnabled must be used within an InsightsFSProvider");
                return e.uniqueUsersEnabled;
            }
            function h() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useImpressionsEnabled must be used within an InsightsFSProvider");
                return e.impressionsEnabled;
            }
            function x() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("usePreviewSplashMetricsEnabled must be used within an InsightsFSProvider");
                return e.previewSplashMetricsEnabled;
            }
            function g() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useRadarPath must be used within an InsightsFSProvider");
                return e.path;
            }
            function p() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useInitialDaysBack must be used within an InsightsFSProvider");
                return e.initialDaysBack;
            }
            function f() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useGranularityOptions must be used within an InsightsFSProvider");
                return e.granularityOptions;
            }
            function b() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useIsWebView must be used within an InsightsFSProvider");
                return e.isWebView;
            }
            function y() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useNLPEnabled must be used within an InsightsFSProvider");
                return e.nlpEnabled;
            }
            function v() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useSavedQueryLimit must be used within an InsightsFSProvider");
                return e.savedQueryLimit;
            }
            function j() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useTimeRangeLimitDays must be used within an InsightsFSProvider");
                return e.timeRangeLimitDays;
            }
            function w() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("usePostCountsEnabled must be used within an InsightsFSProvider");
                return e.postCountsEnabled;
            }
            function _() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("allowAlertNotifications must be used within an InsightsFSProvider");
                return e.allowAlertNotifications;
            }
            function C() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("alertsEnabledByDefault must be used within an InsightsFSProvider");
                return e.alertsEnabledByDefault;
            }
            function D() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("useModalEditQueryEnabled must be used within an InsightsFSProvider");
                return e.modalEditQueryEnabled;
            }
            function S() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("usePreviousQueryEnabled must be used within an InsightsFSProvider");
                return e.previousQueryEnabled;
            }
            function E() {
                const e = (0, a.useContext)(o);
                if (null === e) throw new Error("usePaginatedMetricsBackendEnabled must be used within an InsightsFSProvider");
                return e.paginatedMetricsBackendEnabled;
            }
        },
        759397: (e, t, s) => {
            s.d(t, { g: () => c });
            var n = s(552322),
                a = s(202784),
                r = s(430962),
                i = s(607499),
                l = s(74451),
                o = s(536531);
            const u = (e) => {
                    const { totalCount: t } = (0, o.i)(e),
                        { business: s } = (0, r.M1)();
                    return (0, n.jsx)(l.Cf, { title: s.radar.posts, count: t });
                },
                d = () => {
                    const { business: e } = (0, r.M1)();
                    return (0, n.jsx)(l.m3, { title: e.radar.posts });
                },
                c = (e) => {
                    const { business: t } = (0, r.M1)();
                    return (0, n.jsx)(i.S, { fallback: (0, n.jsx)(l.uY, { title: t.radar.posts }), children: (0, n.jsx)(a.Suspense, { fallback: (0, n.jsx)(d, {}), children: (0, n.jsx)(u, { ...e }) }) });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-a25ee5c1.f97d7b1a.js.map

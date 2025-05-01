"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-c43041c1"],
    {
        833819: (e, t, a) => {
            a.d(t, { e: () => b });
            var n = a(552322),
                s = a(446368),
                i = a(332161),
                r = a(993165),
                l = a(202784),
                o = a(968025),
                u = a(430962),
                d = a(749612),
                c = a(704877),
                m = a(256958),
                h = a(889906),
                x = a(915574),
                g = a(437915);
            const p = a(633402),
                f = () => {
                    const { business: e } = (0, u.M1)(),
                        t = (0, d.nO)(),
                        a = (0, o.t)(),
                        i = (0, s.$8)(),
                        r = (0, d.ro)(),
                        c = (0, d.Iw)() > 1,
                        f = (0, d.HZ)(),
                        [b, y] = (0, l.useState)(""),
                        [v, j] = (0, h.useMutation)(p),
                        _ = (n) => {
                            const s = { advanced_query: n.trim(), notifications_enabled: f, title: c ? "" : "Explore X" };
                            v({
                                onCompleted: (n) => {
                                    "InsightRuleMutationSuccess" === n.create_insight_rule_v2?.__typename ? (i.scribe({ action: "create", element: "create_insight_input", page: "insights_create" }), a.push(`${t}/${n.create_insight_rule_v2.result.rest_id}`)) : m.Am.error(e.radar.failedToCreateQuery);
                                },
                                onError: (t) => {
                                    i.scribe({ action: "error", component: "create_insight_input", data: t, element: "explore_results", page: "insights", section: "create_insight" }), m.Am.error(e.radar.failedToCreateQuery);
                                },
                                variables: s,
                            }),
                                i.scribe({ action: "click", component: "create_insight_input", data: { advanced_query: n.trim() }, element: "explore_results", page: "insights", section: "create_insight" });
                        };
                    return (0, n.jsxs)("div", { className: "flex w-full max-w-xl flex-col items-center gap-8", children: [(0, n.jsx)("div", { className: "text-title3 md:text-title2 text-balance text-center font-bold", children: e.radar.newQueryTitle }), r ? (0, n.jsx)(x.Z, { query: b, onSubmit: ({ query: e }) => _(e), followUpEnabled: !1 }) : (0, n.jsx)(g.U, { query: b, onQueryChange: y, onSubmit: () => _(b), disabled: j })] });
                },
                b = () => {
                    const e = (0, c.Rv)(),
                        t = (0, o.t)(),
                        { business: a } = (0, u.M1)(),
                        m = (0, d.nO)(),
                        h = (0, d.Iw)(),
                        x = (0, s.$8)();
                    return (
                        (0, l.useEffect)(() => {
                            x.scribe({ action: "impression", page: "insights_create" });
                        }, [x]),
                        e >= h ? (0, n.jsxs)("div", { className: "flex h-full w-full flex-1 flex-col items-center justify-center gap-8 p-2", children: [(0, n.jsx)(i.x, { size: "headline1", weight: "extrabold", color: "text", children: a.radar.maxQueries }), (0, n.jsx)(r.z, { onClick: () => t.push(`${m}`), variant: "insightsBright", children: a.radar.allQueries })] }) : (0, n.jsx)("div", { className: "text-text flex h-full w-full flex-1 flex-col items-center justify-start gap-8 p-2 pt-20 md:pt-40", children: (0, n.jsx)(f, {}) })
                    );
                };
        },
        633402: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            const n = {
                fragment: {
                    argumentDefinitions: [(s = { defaultValue: null, kind: "LocalArgument", name: "advanced_query" }), (i = { defaultValue: null, kind: "LocalArgument", name: "notifications_enabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "tags" }), (l = { defaultValue: null, kind: "LocalArgument", name: "title" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "CreateInsightInputQuery",
                    selections: [
                        {
                            alias: null,
                            args: (o = [
                                { kind: "Variable", name: "advanced_query", variableName: "advanced_query" },
                                { kind: "Variable", name: "notifications_enabled", variableName: "notifications_enabled" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                                { kind: "Variable", name: "tags", variableName: "tags" },
                                { kind: "Variable", name: "title", variableName: "title" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "create_insight_rule_v2",
                            plural: !1,
                            selections: [
                                (u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                (d = {
                                    kind: "InlineFragment",
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null },
                                    ],
                                    type: "InsightRuleFailure",
                                    abstractKey: null,
                                }),
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [r, l, s, i], kind: "Operation", name: "CreateInsightInputQuery", selections: [{ alias: null, args: o, concreteType: null, kind: "LinkedField", name: "create_insight_rule_v2", plural: !1, selections: [u, d, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "AsXpgHWLsyD3H-L-VY679g", metadata: {}, name: "CreateInsightInputQuery", operationKind: "mutation", text: null },
            };
            var s, i, r, l, o, u, d, c;
            n.hash = "74217917e786c67f9ee50cfb77935d1f";
            const m = n;
        },
        742266: (e, t, a) => {
            a.d(t, { i: () => d });
            var n = a(552322),
                s = a(993165),
                i = a(488809),
                r = a(840489),
                l = a(968025),
                o = a(430962),
                u = a(749612);
            const d = ({ fullWidth: e = !1 }) => {
                const t = (0, l.t)(),
                    { business: a } = (0, o.M1)(),
                    d = (0, u.nO)();
                return (0, n.jsx)(s.z, { onClick: () => t.push(`${d}`), size: "xSmallCompact", variant: "insightsSecondary", icon: (0, n.jsx)(i.Z, { className: "text-gray-700" }), children: (0, n.jsx)("div", { className: (0, r.Z)("text-subtext2 md:text-subtext3 font-normal", { "hidden md:block": !e }), children: a.radar.allQueries }) });
            };
        },
        3170: (e, t, a) => {
            a.d(t, { A: () => d });
            var n = a(552322),
                s = a(993165),
                i = a(242749),
                r = a(840489),
                l = a(968025),
                o = a(430962),
                u = a(749612);
            const d = ({ fullWidth: e = !1 }) => {
                const t = (0, l.t)(),
                    { business: a } = (0, o.M1)(),
                    d = (0, u.nO)();
                return (0, n.jsx)(s.z, { onClick: () => t.push(`${d}/new`), size: "xSmallCompact", variant: "insightsSecondary", icon: (0, n.jsx)(i.Z, { className: "text-gray-700" }), children: (0, n.jsx)("div", { className: (0, r.Z)("text-subtext2 md:text-subtext3 font-normal", { "hidden md:block": !e }), children: a.radar.newQuery }) });
            };
        },
        959638: (e, t, a) => {
            a.d(t, { F_: () => c, NR: () => d });
            var n = a(552322),
                s = a(446368),
                i = a(256958),
                r = a(202784),
                l = a(889906),
                o = a(430962);
            const u = (0, r.createContext)({}),
                d = ({ children: e, id: t }) => {
                    const a = (0, s.$8)(),
                        { business: d } = (0, o.M1)(),
                        c = (0, l.useLazyLoadQuery)(m, { id: t }, { fetchPolicy: "network-only" });
                    if (!c.viewer_v2?.user_results.result.insight_rule_by_id) throw new Error("Insight rule not found");
                    const { core: x, rest_id: g } = c.viewer_v2.user_results.result.insight_rule_by_id,
                        [p] = (0, l.useMutation)(h),
                        [f, b] = (0, r.useState)({ advancedQuery: x.advanced_query, createdAt: new Date(x.created_at).getTime(), id: g, notificationsEnabled: x.notifications_enabled, tags: x.tags ? JSON.parse(x.tags) : null, title: x.title, updatedAt: new Date(x.updated_at).getTime() }),
                        y = (0, r.useCallback)(
                            (e) => {
                                e &&
                                    p({
                                        onCompleted: (t) => {
                                            "InsightRuleMutationSuccess" === t.update_insight_rule_v2?.__typename ? b(e) : "InsightRuleFailure" === t.update_insight_rule_v2?.__typename && (i.Am.error(d.radar.failedToUpdateQuery), a.scribe({ action: "update_insight_error", data: { error_code: t.update_insight_rule_v2?.error_code, error_message: t.update_insight_rule_v2?.error_message, insight_id: e.id, insight_tags: e.tags, insight_title: e.title, notifications_enabled: e.notificationsEnabled }, page: "insights_detail" }));
                                        },
                                        variables: { advanced_query: e.advancedQuery, id: e.id, notifications_enabled: e.notificationsEnabled, tags: e.tags ? JSON.stringify(e.tags) : void 0, title: e.title },
                                    });
                            },
                            [p, a, d],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            a.scribe({ action: "impression", data: { insight_id: t }, page: "insights_detail" });
                        }, [t, a]),
                        (0, n.jsx)(u.Provider, { value: { insight: f, updateInsight: y }, children: e })
                    );
                },
                c = () => {
                    const e = (0, r.useContext)(u);
                    if (!e) throw new Error("useInsight must be used within a InsightProvider");
                    return e;
                },
                m = a(264735),
                h = a(600894);
        },
        797165: (e, t, a) => {
            a.d(t, { V: () => Se });
            var n = a(552322),
                s = a(260816),
                i = a(840489),
                r = a(430962),
                l = a(595133),
                o = a(742266),
                u = a(3170),
                d = a(999758),
                c = a(202784),
                m = a(970430),
                h = a(947727),
                x = a(733936),
                g = a(283840);
            function p(e) {
                const t = (0, h.T)(new m.eJ()),
                    a = (0, x.k)(t, e - 1);
                return a.setUTCHours(0, 0, 0, 0), { fromDate: a, toDate: t };
            }
            const f = (0, c.createContext)(null),
                b = ({ children: e, initialDaysBack: t, initialGranularity: a }) => {
                    const [s, i] = (0, c.useState)(p(t)),
                        [r, l] = (0, c.useState)(null),
                        [o, u] = (0, c.useState)("posts"),
                        [d, m] = (0, c.useState)(a),
                        h = (0, c.useMemo)(() => (s.toDate.getTime() - s.fromDate.getTime()) / g.s, [s]),
                        x = (0, c.useMemo)(() => {
                            const e = new Date(r?.fromDate || s.fromDate),
                                t = r ? new Date(r.toDate) : null;
                            return t && t.getTime() - e.getTime() < 864e5 && t.setDate(t.getDate() + 1), { fromDate: e, toDate: t };
                        }, [r, s]),
                        b = {
                            chartType: o,
                            chartZoom: r,
                            filterDateRange: x,
                            granularity: d,
                            setChartType: u,
                            setChartZoom: l,
                            setGranularity: m,
                            setTimeRange: (e) => {
                                i("number" == typeof e ? p(e) : e), l(null);
                            },
                            timeRange: s,
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
                        a = (0, c.useMemo)(() => {
                            if (!e) return null;
                            const a = (e, a, n) => new Intl.DateTimeFormat("en-US", { day: "numeric", hour: a ? "numeric" : void 0, minute: a ? "numeric" : void 0, month: "short", timeZone: "Day" === t ? "UTC" : void 0, year: n ? "numeric" : void 0 }).format(e),
                                n = (e) => new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).format(e),
                                s = e.fromDate,
                                i = e.toDate,
                                r = "Hour" === t,
                                l = "Day" === t,
                                o = s.toDateString() === i.toDateString(),
                                u = s.getFullYear() === i.getFullYear();
                            return r ? (o ? `${a(s, !1, !1)} ${n(s)} - ${n(i)}` : `${a(s, !0, !1)} - ${a(i, !0, !1)}`) : l ? (u ? `${a(s, !1, !1)} - ${a(i, !1, !0)}` : `${a(s, !1, !0)} - ${a(i, !1, !0)}`) : `${a(s, !1, !1)} - ${a(i, !1, !1)}`;
                        }, [e, t]);
                    return a ? (0, n.jsx)("div", { className: "text-subtext3 text-gray-600", children: a }) : null;
                };
            var j = a(446368),
                _ = a(993165),
                w = a(332161),
                k = a(34681),
                C = a(519590),
                S = a(305399),
                D = a(353561),
                E = a(915574),
                I = a(437915),
                N = a(959638),
                T = a(749612);
            const M = () => {
                const e = (0, j.$8)(),
                    { business: t } = (0, r.M1)(),
                    { insight: a, updateInsight: s } = (0, N.F_)(),
                    [l, o] = (0, c.useState)(!1),
                    u = (0, S.a)("(min-width: 768px)"),
                    d = (0, T.nD)(),
                    [m, h] = (0, c.useState)(a.advancedQuery || ""),
                    x = (0, T.ro)(),
                    g = (0, T.oG)(),
                    p = (0, T.v9)(),
                    f = (0, c.useCallback)(
                        async ({ query: t }) => {
                            s({ ...a, advancedQuery: t }), o(!1), e.scribe({ action: "click", component: "edit_advanced_query", data: { insight_id: a.id }, element: "edit_advanced_query", page: "insights_detail" });
                        },
                        [e, a, s],
                    );
                if (!a.advancedQuery) return null;
                const b = (0, n.jsx)(_.z, {
                        variant: "insightsSecondary",
                        size: "xSmallCompact",
                        onClick: () => {
                            e.scribe({ action: "click", data: { insight_id: a.id }, element: "edit_advanced_query", page: "insights_detail" }), o(!0);
                        },
                        className: "max-w-[300px] transition-all duration-200 hover:max-w-[600px]",
                        children: (0, n.jsxs)("div", { className: "flex items-center gap-1 text-ellipsis", children: [(0, n.jsx)(D.Z, { className: "shrink-0 text-gray-700" }), (0, n.jsx)(w.x, { size: "subtext2", color: "gray900", numberOfLines: 1, className: "break-all text-start", children: a.advancedQuery })] }),
                    }),
                    y = x ? (0, n.jsx)(E.Z, { onSubmit: f, query: a.advancedQuery, usePreviousQuery: p, onCancel: () => o(!1) }) : (0, n.jsx)(I.U, { onSubmit: () => f({ query: m, submittedPrompts: [] }), query: m, onQueryChange: h });
                return u || g ? (0, n.jsxs)(k.Vq, { open: l, onOpenChange: o, children: [(0, n.jsx)(k.hg, { asChild: !0, children: b }), (0, n.jsxs)(k.cZ, { className: "sm:max-w-[425px]", children: [(0, n.jsx)(k.fK, { children: (0, n.jsx)(k.$N, { children: t.radar.editQueryTitle }) }), y] })] }) : (0, n.jsxs)(C.dy, { open: l, onOpenChange: o, children: [(0, n.jsx)(C.Qz, { asChild: !0, children: b }), (0, n.jsxs)(C.sc, { children: [(0, n.jsx)(C.OX, { className: "text-left", children: (0, n.jsx)(C.iI, { children: t.radar.editQueryTitle }) }), (0, n.jsx)("div", { className: "px-4 pb-8", children: y }), (0, n.jsx)(C.ze, { className: (0, i.Z)("pt-2", { "pb-32": d }), children: !x && (0, n.jsx)(C.uh, { asChild: !0, children: (0, n.jsx)(_.z, { variant: "insightsSecondary", children: "Cancel" }) }) })] })] });
            };
            var F = a(314300),
                Q = a(994120);
            const L = "text-headline2 text-start p-0.5 line-clamp-1 rounded border-none bg-transparent font-bold ring-gray-100 hover:outline-none hover:ring-2 focus:outline-none focus:ring-2 focus:ring-gray-100",
                R = () => {
                    const e = (0, j.$8)(),
                        { business: t } = (0, r.M1)(),
                        { insight: a, updateInsight: s } = (0, N.F_)(),
                        [l, o] = (0, c.useState)(!1),
                        [u, d] = (0, c.useState)(a.title),
                        m = (0, c.useRef)(null),
                        h = (0, c.useCallback)(() => {
                            e.scribe({ action: "click", data: { insight_id: a.id }, element: "rename_title_input", page: "insights_detail" }),
                                o(!0),
                                setTimeout(() => {
                                    m.current?.focus(), m.current?.setSelectionRange(0, u.length);
                                }, 0);
                        }, [e, a.id, u.length]),
                        x = (0, c.useCallback)((e) => {
                            d(e.target.value);
                        }, []),
                        g = (0, c.useCallback)((e) => {
                            "Enter" === e.key && m.current?.blur();
                        }, []),
                        p = (0, c.useCallback)(
                            (e) => {
                                const t = e.target.value.trim();
                                "" !== t && t !== a.title ? s({ ...a, title: t }) : d(a.title), o(!1);
                            },
                            [a, s],
                        );
                    return l
                        ? (0, n.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                  (0, n.jsx)("input", {
                                      ref: m,
                                      className: (0, i.Z)(L, "text-text"),
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
                        : (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)("button", { className: (0, i.Z)(L, { "text-gray-700": 0 === u.length, "text-text": u.length > 0 }), onClick: h, type: "button", children: u || t.radar.untitledQuery }), (0, n.jsx)("button", { onClick: h, className: "rounded p-0.5 hover:bg-gray-200", type: "button", children: (0, n.jsx)(F.Z, { className: "size-4 text-gray-900" }) })] });
                };
            var Z = a(193686),
                P = a(964522),
                $ = a(578950);
            const q = () => {
                const e = (0, j.$8)(),
                    { business: t } = (0, r.M1)(),
                    { chartZoom: a, granularity: s, setChartZoom: i, setGranularity: l, timeRangeDays: o } = y(),
                    u = (0, T.zk)(),
                    d = (0, c.useMemo)(() => {
                        let e = [];
                        return (e = o > 30 ? ["Day"] : o >= 2 ? ["Hour", "Day"] : ["Hour"]), e.filter((e) => u.includes(e));
                    }, [o, u]);
                return (
                    (0, c.useEffect)(() => {
                        d.includes(s) || l(d[0]);
                    }, [s, d, l]),
                    (0, n.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            a &&
                                (0, n.jsx)(_.z, {
                                    variant: "insightsSecondary",
                                    size: "xSmall",
                                    onClick: () => {
                                        i(null), e.scribe({ action: "chart_zoom_clear", page: "insights_detail", section: "post_chart" });
                                    },
                                    hoverLabel: t.radar.resetSelection,
                                    icon: (0, n.jsx)($.Z, {}),
                                }),
                            (0, n.jsx)(P.N, {
                                options: d.map((e) => ({ label: t.radar.granularity[e], value: e })),
                                onSelect: (t) => {
                                    e.scribe({ action: "set_granularity", data: { granularity: t, time_range_days: o }, element: "granularity_select", page: "insights_detail", section: "chart_settings" }), l(t);
                                },
                                defaultValue: s,
                            }),
                        ],
                    })
                );
            };
            var K = a(643715),
                O = a(1468),
                B = a(994805),
                z = a(5392),
                A = a(93699),
                U = a(31674),
                V = a(602077),
                G = a(108506),
                H = a(658087),
                W = a(536531);
            const { Area: Y, AreaChart: X, CartesianGrid: J, ReferenceArea: ee, XAxis: te, YAxis: ae } = K,
                ne = "timestamp",
                se = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, r.M1)(),
                        { chartZoom: a, granularity: s, timeRange: i } = y(),
                        l = (0, c.useMemo)(() => ({ chartZoom: a, fetchKey: e.advancedQuery, granularity: s, ruleId: e.id, timeRange: i }), [a, s, i, e]),
                        { countTimeSeries: o } = (0, W.i)(l);
                    return (0, n.jsx)(re, { dataKey: "posts", data: o, label: t.radar.posts });
                },
                ie = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, r.M1)(),
                        { chartZoom: a, granularity: s, timeRange: i } = y(),
                        l = (0, c.useMemo)(() => ({ chartZoom: a, fetchKey: e.advancedQuery, granularity: s, ruleId: e.id, timeRange: i }), [a, s, i, e]);
                    return (0, T._8)() ? (0, n.jsx)(re, { data: (0, H.l)(l).impressionsTimeSeries, dataKey: "impressions", label: t.radar.impressions }) : (0, n.jsx)(re, { data: (0, G.C)(l).impressionsTimeSeries, dataKey: "impressions", label: t.radar.impressions });
                },
                re = ({ data: e, dataKey: t, label: a }) => {
                    const s = (0, j.$8)(),
                        { business: i } = (0, r.M1)(),
                        l = (0, A.J)(),
                        o = (0, T.BX)() && !l,
                        { chartZoom: u, granularity: d, setChartZoom: m } = y(),
                        [h, x] = (0, c.useState)(null),
                        [p, f] = (0, c.useState)(null),
                        [b, v] = (0, c.useState)(!1),
                        _ = { [t]: { color: "hsl(var(--colors-gray-800))", label: a }, incomplete: { color: "hsl(var(--colors-gray-300))", label: i.radar.loading } },
                        w = (0, c.useMemo)(() => e.map((e) => ({ [t]: e.count, fill: `var(--color-${t})`, incomplete: e.incompleteCount, timestamp: e.startDate.getTime() })), [e, t]);
                    (0, c.useEffect)(() => {
                        null === u && (x(null), f(null), v(!1));
                    }, [u]);
                    const k = (0, c.useCallback)(
                        (e) => {
                            if (!o) return;
                            let t = 0,
                                a = 0;
                            if (h === p && w.length > 0 && e) {
                                const n = "Hour" === d ? g.d : g.s,
                                    s = w[0]?.timestamp ?? 0,
                                    i = w[w.length - 1]?.timestamp ?? 0;
                                (t = Math.max(Number(e) - n, s)), (a = Math.min(Number(e) + n, i)), x(t), f(a);
                            } else (t = Math.min(Number(h), Number(p))), (a = Math.max(Number(h), Number(p)));
                            const n = a === w[w.length - 1]?.timestamp;
                            m({ fromDate: new Date(t), toDate: new Date(n ? a + g.s : a) }), v(!1), s.scribe({ action: "chart_zoom", data: { from_date: new Date(t).toISOString(), to_date: new Date(n ? a + g.s : a).toISOString() }, page: "insights_detail", section: "post_chart" });
                        },
                        [s, w, o, d, h, p, m],
                    );
                    return (0, n.jsx)(O.BO, {
                        config: _,
                        className: "relative h-full min-h-[0] w-full select-none",
                        children: (0, n.jsxs)(X, {
                            data: w,
                            margin: { bottom: 0, left: 0, right: 0, top: 0 },
                            onMouseDown: (e) => {
                                o && e.activeLabel && (v(!0), x(+e.activeLabel), f(+e.activeLabel));
                            },
                            onMouseMove: (e) => {
                                o && b && e.activeLabel && f(+e.activeLabel);
                            },
                            onMouseUp: (e) => {
                                b && k(e.activeLabel);
                            },
                            children: [
                                (0, n.jsxs)("defs", { children: [(0, n.jsxs)("linearGradient", { id: "fill1", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, n.jsx)("stop", { offset: "5%", stopColor: `var(--color-${t})`, stopOpacity: 0.8 }), (0, n.jsx)("stop", { offset: "95%", stopColor: `var(--color-${t})`, stopOpacity: 0.1 })] }), (0, n.jsxs)("linearGradient", { id: "fill2", x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, n.jsx)("stop", { offset: "5%", stopColor: "var(--color-incomplete)", stopOpacity: 0.8 }), (0, n.jsx)("stop", { offset: "95%", stopColor: "var(--color-incomplete)", stopOpacity: 0.1 })] })] }),
                                (0, n.jsx)(J, { vertical: !1 }),
                                (0, n.jsx)(Y, { dataKey: t, stroke: `var(--color-${t})`, radius: 2, fill: "url(#fill1)", dot: !1, activeDot: le, type: "monotone", animationDuration: 500 }),
                                (0, n.jsx)(Y, { dataKey: "incomplete", stroke: "var(--color-incomplete)", radius: 2, fill: "url(#fill2)", dot: !1, activeDot: !1, type: "monotone", strokeDasharray: "3 3", animationDuration: 500 }),
                                (0, n.jsx)(ae, { tickFormatter: V.M, tickLine: !1, axisLine: !1, className: "text-subtext3" }),
                                (0, n.jsx)(te, { dataKey: ne, tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: 32, className: "text-subtext3", tickFormatter: (e) => Intl.DateTimeFormat("en-US", { day: "Day" === d ? "numeric" : "2-digit", hour: "Day" === d ? void 0 : "numeric", minute: "Day" === d ? void 0 : "numeric", month: "short", timeZone: "Day" === d ? "UTC" : void 0 }).format(new Date(e)) }),
                                (0, n.jsx)(O.h7, { content: (0, n.jsx)(O.dg, { hideForKeys: ["incomplete"], className: (0, U.cn)("text-subtext2"), labelClassName: (0, U.cn)("font-normal text-text"), labelFormatter: (e, [t]) => t?.payload && Intl.DateTimeFormat("en-US", { day: "numeric", hour: "Day" === d ? void 0 : "numeric", minute: "Day" === d ? void 0 : "numeric", month: "short", timeZone: "Day" === d ? "UTC" : void 0 }).format(new Date(t.payload[ne])) }), cursor: (0, n.jsx)(B.Q, {}) }),
                                h && p ? (0, n.jsx)(ee, { x1: h, x2: p, fillOpacity: b ? 0.3 : 0.2, animationDuration: 300 }) : null,
                            ],
                        }),
                    });
                },
                le = (e) => {
                    const { key: t, value: a, ...s } = e;
                    return null === a[1] ? null : (0, n.jsx)(z.m, { ...s }, t);
                };
            var oe = a(759397),
                ue = a(607499),
                de = a(74451);
            const ce = (e) => {
                    const { business: t } = (0, r.M1)();
                    return (0, T._8)() ? (0, n.jsx)(de.Cf, { title: t.radar.impressions, count: (0, H.l)(e).totalImpressions }) : (0, n.jsx)(de.Cf, { title: t.radar.impressions, count: (0, G.C)(e).totalImpressions });
                },
                me = () => {
                    const { business: e } = (0, r.M1)();
                    return (0, n.jsx)(de.m3, { title: e.radar.impressions });
                },
                he = (e) => {
                    const { business: t } = (0, r.M1)();
                    return (0, n.jsx)(ue.S, { fallback: (0, n.jsx)(de.uY, { title: t.radar.impressions }), children: (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(me, {}), children: (0, n.jsx)(ce, { ...e }) }) });
                };
            var xe = a(844823),
                ge = a(679671),
                pe = a(864629);
            const fe = (e) => {
                    const t = e.getUTCMonth() + 1,
                        a = e.getUTCDate();
                    return `${e.getUTCFullYear()}-${t.toString().padStart(2, "0")}-${a.toString().padStart(2, "0")}`;
                },
                be = () => {
                    const { insight: e } = (0, N.F_)(),
                        { business: t } = (0, r.M1)(),
                        { filterDateRange: a } = y(),
                        s = (0, T.nD)(),
                        { aiTrendsEnabled: l, aiTrendsLimit: o, aiTrendsScoreThreshold: u } = (0, T.gB)(),
                        d = { fromDate: fe(a.fromDate), toDate: a.toDate ? fe(a.toDate) : null },
                        m = e.tags?.join(" OR ") || e.advancedQuery || "";
                    return (0, n.jsx)("div", { className: "flex w-full flex-col max-md:h-full max-md:min-h-screen", children: (0, n.jsxs)(ge.mQ, { defaultActiveTab: "Top", className: "h-full gap-2 md:gap-4 md:overflow-y-auto", children: [(0, n.jsxs)("div", { className: (0, i.Z)("bg-background z-[9] flex gap-2 p-2 md:p-0", { "max-md:sticky max-md:top-0": !s }), children: [(0, n.jsx)(ge.E2, { id: "Top", children: t.radar.top }), (0, n.jsx)(ge.E2, { id: "Latest", children: t.radar.latest }), l && (0, n.jsx)(ge.E2, { id: "Trends", children: t.radar.trends })] }), (0, n.jsxs)(c.Suspense, { fallback: (0, n.jsx)("div", { className: "absolute left-0 right-0 top-10 flex h-20 items-center justify-center", children: (0, n.jsx)(Z.P, { color: "text" }) }), children: [(0, n.jsx)(ge.I5, { id: "Top", children: (0, n.jsx)(pe.p, { sortOrder: "Top", dateRange: d, query: m }) }), (0, n.jsx)(ge.I5, { id: "Latest", children: (0, n.jsx)(pe.p, { sortOrder: "Latest", dateRange: d, query: m }) }), l && (0, n.jsx)(ge.I5, { id: "Trends", children: (0, n.jsx)(xe.f, { query: m, limit: o, scoreThreshold: u }) })] })] }) });
                },
                ye = (e) => {
                    const { uniqueUsers: t } = (0, G.C)(e),
                        { business: a } = (0, r.M1)();
                    return (0, n.jsx)(de.Cf, { title: a.radar.uniqueUsers, count: t });
                },
                ve = () => {
                    const { business: e } = (0, r.M1)();
                    return (0, n.jsx)(de.m3, { title: e.radar.uniqueUsers });
                },
                je = (e) => {
                    const { business: t } = (0, r.M1)();
                    return (0, n.jsx)(ue.S, { fallback: (0, n.jsx)(de.uY, { title: t.radar.uniqueUsers }), children: (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(ve, {}), children: (0, n.jsx)(ye, { ...e }) }) });
                },
                _e = () => {
                    const e = (0, T.Ik)(),
                        t = (0, T.IQ)(),
                        { insight: a } = (0, N.F_)(),
                        { business: s } = (0, r.M1)(),
                        { chartType: i, chartZoom: l, granularity: o, setChartType: u, timeRange: d } = y();
                    return (0, n.jsxs)("div", {
                        className: "max-md:hide-scrollbar flex h-full flex-col pb-2 md:flex-row md:gap-4 md:overflow-y-auto md:px-4 md:pb-4 md:pt-0",
                        children: [
                            (0, n.jsxs)("div", {
                                className: "flex h-full flex-1 flex-col gap-4 p-2 md:p-0",
                                children: [
                                    (0, n.jsxs)("div", { className: "flex w-full gap-12 rounded-xl border border-gray-100 p-4", children: [(0, n.jsx)("div", { children: (0, n.jsx)(oe.g, { ruleId: a.id, fetchKey: a.advancedQuery, timeRange: d, chartZoom: l, granularity: o }) }), e && (0, n.jsx)("div", { children: (0, n.jsx)(he, { ruleId: a.id, fetchKey: a.advancedQuery, timeRange: d, chartZoom: l, granularity: o }) }), t && (0, n.jsx)("div", { children: (0, n.jsx)(je, { timeRange: d, chartZoom: l, granularity: o, ruleId: a.id, fetchKey: a.advancedQuery }) })] }),
                                    (0, n.jsxs)("div", {
                                        className: "lg:max-h-auto flex h-64 min-h-0 w-full flex-col gap-2 rounded-xl border border-gray-100 pb-1 pr-4 pt-4 max-lg:max-h-64 md:flex-1 md:pb-4",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "flex w-full justify-between gap-2 pl-4",
                                                children: [
                                                    (0, n.jsx)(P.N, {
                                                        options: [{ label: s.radar.posts, value: "posts" }, ...(e ? [{ label: s.radar.impressions, value: "impressions" }] : [])],
                                                        defaultValue: i,
                                                        onSelect: (e) => {
                                                            u(e);
                                                        },
                                                    }),
                                                    (0, n.jsx)(q, {}),
                                                ],
                                            }),
                                            (0, n.jsx)(c.Suspense, { fallback: (0, n.jsx)(Z.P, { color: "text" }), children: "posts" === i ? (0, n.jsx)(se, {}) : (0, n.jsx)(ie, {}) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", { className: "relative flex w-full rounded-xl border-gray-100 md:h-full md:w-[360px] md:border md:px-4 md:pt-4", children: (0, n.jsx)(be, {}) }),
                        ],
                    });
                };
            var we = a(660237);
            const ke = [
                { daysBack: 1, label: "1D" },
                { daysBack: 7, label: "7D" },
                { daysBack: 30, label: "30D" },
            ];
            const Ce = () => {
                const e = (0, j.$8)(),
                    { setTimeRange: t, timeRange: a } = y(),
                    s = (0, T.fI)(),
                    i = (0, T.Sp)(),
                    l = (0, T.zk)(),
                    { business: o } = (0, r.M1)(),
                    u = (0, c.useMemo)(
                        () =>
                            (function (e, t, a, n) {
                                const s = ke.filter((a) => !(a.daysBack > e || (a.daysBack <= 1 && !t.includes("Hour"))));
                                return s.length > 1 ? s : [{ daysBack: Math.min(a, e), label: `${Math.min(a, e)} ${n}` }];
                            })(i, [...l], s, o.radar.days),
                        [i, l, s, o.radar.days],
                    ),
                    d = (e) => {
                        const t = p(e);
                        return a.fromDate.getTime() === t.fromDate.getTime() && a.toDate.getTime() === t.toDate.getTime();
                    };
                return (0, n.jsx)("div", {
                    className: "flex gap-2",
                    children: u.map((a) =>
                        (0, n.jsx)(
                            we.C,
                            {
                                isActive: d(a.daysBack),
                                onToggle: () =>
                                    ((a) => {
                                        e.scribe({ action: "click", data: { timeRange: a.label }, element: "time_range_filter", page: "insights_detail", section: "filters" }), t(a.daysBack);
                                    })(a),
                                children: a.label,
                            },
                            a.label,
                        ),
                    ),
                });
            };
            function Se() {
                const { insight: e } = (0, N.F_)(),
                    t = (0, T.Iw)() > 1,
                    a = (0, T.fI)(),
                    c = (0, T.nD)(),
                    m = (0, T.CM)(),
                    { business: h } = (0, r.M1)();
                return (0, n.jsx)(b, { initialDaysBack: a, initialGranularity: "Day", children: (0, n.jsx)("div", { className: "flex h-full flex-col md:overflow-y-auto", children: (0, n.jsxs)("div", { className: "text-text flex h-full w-full flex-1 flex-col", children: [(0, n.jsxs)("div", { className: (0, i.Z)("bg-background z-10 flex flex-col gap-4 p-2 md:p-4", { "max-md:sticky max-md:top-0": !c }), children: [(0, n.jsx)(l.h, { title: h.radar.header, Icon: (0, n.jsx)(s.Z, { className: "text-text size-7" }), beta: !1, children: t && (0, n.jsxs)("div", { className: "flex gap-4", children: [(0, n.jsx)(o.i, {}), (0, n.jsx)(u.A, {})] }) }), t && (0, n.jsxs)("div", { className: "flex justify-between", children: [(0, n.jsx)(R, {}), (0, n.jsx)("div", { className: "md:hidden", children: (0, n.jsx)(o.i, { fullWidth: !0 }) })] }), (0, n.jsxs)("div", { className: "flex items-center justify-between", children: [(0, n.jsxs)("div", { className: "flex gap-4", children: [(0, n.jsx)(M, {}), m && (0, n.jsx)(d.s, { id: e.id, advancedQuery: e.advancedQuery ? e.advancedQuery : "", notificationsEnabled: e.notificationsEnabled, displayInfo: !0, page: "insights_detail" })] }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(v, {}), (0, n.jsx)(Ce, {})] })] })] }), (0, n.jsx)(_e, {})] }) }) });
            }
        },
        749612: (e, t, a) => {
            a.d(t, { $W: () => x, BX: () => d, CM: () => w, HZ: () => k, IQ: () => m, Ik: () => h, Iw: () => v, Kw: () => u, No: () => _, Sp: () => j, _8: () => D, fI: () => p, gB: () => c, nD: () => b, nO: () => g, oG: () => C, ro: () => y, v9: () => S, zk: () => f });
            var n = a(552322),
                s = a(202784),
                i = a(889906),
                r = a(834629);
            const l = { advancedQueryEnabled: !1, aiTrendsEnabled: !1, aiTrendsLimit: 5, aiTrendsScoreThreshold: 0.6, alertsEnabledByDefault: !1, allowAlertNotifications: !1, chartFilterEnabled: !1, granularityOptions: ["Hour", "Day"], impressionChartEnabled: !1, impressionsEnabled: !1, initialDaysBack: 7, isWebView: !1, modalEditQueryEnabled: !0, nlpEnabled: !1, path: "/business/radar", postCountsEnabled: !1, previewSplashMetricsEnabled: !1, previousQueryEnabled: !1, savedQueryLimit: 1, subscriptionType: "PremiumPlus", timeRangeLimitDays: 30, uniqueUsersEnabled: !1, paginatedMetricsBackendEnabled: !1 },
                o = (0, s.createContext)(null),
                u = ({ children: e, settings: t }) => {
                    const a = (0, i.useLazyLoadQuery)(r.G, {});
                    let s = { ...l, ...t };
                    const u = a.viewer_v2?.user_results?.result?.insights_config;
                    if (u) {
                        const e = { alertsEnabledByDefault: "alerts_enabled_by_default", allowAlertNotifications: "allow_alert_notifications", granularityOptions: "allow_granularity", impressionsEnabled: "allow_impressions", nlpEnabled: "allow_build_query", postCountsEnabled: "allow_post_counts", savedQueryLimit: "saved_query_limit", subscriptionType: "subscription_type", timeRangeLimitDays: "time_range_limit_days", uniqueUsersEnabled: "allow_unique_users" };
                        s = { ...s, ...Object.entries(e).reduce((e, [t, a]) => ({ ...e, [t]: u[a] ?? s[t] }), {}) };
                    }
                    return (0, n.jsx)(o.Provider, { value: s, children: e });
                };
            function d() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useChartFilterEnabled must be used within an InsightsFSProvider");
                return e.chartFilterEnabled;
            }
            function c() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useAiTrendsSettings must be used within an InsightsFSProvider");
                return { aiTrendsEnabled: e.aiTrendsEnabled, aiTrendsLimit: e.aiTrendsLimit, aiTrendsScoreThreshold: e.aiTrendsScoreThreshold };
            }
            function m() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useUniqueUsersEnabled must be used within an InsightsFSProvider");
                return e.uniqueUsersEnabled;
            }
            function h() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useImpressionsEnabled must be used within an InsightsFSProvider");
                return e.impressionsEnabled;
            }
            function x() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("usePreviewSplashMetricsEnabled must be used within an InsightsFSProvider");
                return e.previewSplashMetricsEnabled;
            }
            function g() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useRadarPath must be used within an InsightsFSProvider");
                return e.path;
            }
            function p() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useInitialDaysBack must be used within an InsightsFSProvider");
                return e.initialDaysBack;
            }
            function f() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useGranularityOptions must be used within an InsightsFSProvider");
                return e.granularityOptions;
            }
            function b() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useIsWebView must be used within an InsightsFSProvider");
                return e.isWebView;
            }
            function y() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useNLPEnabled must be used within an InsightsFSProvider");
                return e.nlpEnabled;
            }
            function v() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useSavedQueryLimit must be used within an InsightsFSProvider");
                return e.savedQueryLimit;
            }
            function j() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useTimeRangeLimitDays must be used within an InsightsFSProvider");
                return e.timeRangeLimitDays;
            }
            function _() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("usePostCountsEnabled must be used within an InsightsFSProvider");
                return e.postCountsEnabled;
            }
            function w() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("allowAlertNotifications must be used within an InsightsFSProvider");
                return e.allowAlertNotifications;
            }
            function k() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("alertsEnabledByDefault must be used within an InsightsFSProvider");
                return e.alertsEnabledByDefault;
            }
            function C() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("useModalEditQueryEnabled must be used within an InsightsFSProvider");
                return e.modalEditQueryEnabled;
            }
            function S() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("usePreviousQueryEnabled must be used within an InsightsFSProvider");
                return e.previousQueryEnabled;
            }
            function D() {
                const e = (0, s.useContext)(o);
                if (null === e) throw new Error("usePaginatedMetricsBackendEnabled must be used within an InsightsFSProvider");
                return e.paginatedMetricsBackendEnabled;
            }
        },
        759397: (e, t, a) => {
            a.d(t, { g: () => c });
            var n = a(552322),
                s = a(202784),
                i = a(430962),
                r = a(607499),
                l = a(74451),
                o = a(536531);
            const u = (e) => {
                    const { totalCount: t } = (0, o.i)(e),
                        { business: a } = (0, i.M1)();
                    return (0, n.jsx)(l.Cf, { title: a.radar.posts, count: t });
                },
                d = () => {
                    const { business: e } = (0, i.M1)();
                    return (0, n.jsx)(l.m3, { title: e.radar.posts });
                },
                c = (e) => {
                    const { business: t } = (0, i.M1)();
                    return (0, n.jsx)(r.S, { fallback: (0, n.jsx)(l.uY, { title: t.radar.posts }), children: (0, n.jsx)(s.Suspense, { fallback: (0, n.jsx)(d, {}), children: (0, n.jsx)(u, { ...e }) }) });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-c43041c1.6e13508a.js.map

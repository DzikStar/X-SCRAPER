"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-f7352727"],
    {
        832138: (e, l, n) => {
            n.d(l, { L: () => z });
            var t = n(552322),
                a = n(446368),
                i = n(702024),
                s = n(425175),
                r = n(202784),
                d = n(430962),
                o = n(595133),
                u = n(833819),
                c = n(3170),
                g = n(959638),
                m = n(797165),
                p = n(749612),
                h = n(970430),
                y = n(941204),
                f = n(796309),
                x = n(947727),
                v = n(733936),
                k = n(968025),
                _ = n(759397),
                b = n(256958),
                F = n(436059),
                j = n(164695),
                w = n(395828),
                K = n(889906),
                I = n(704877);
            const L = n(73680),
                N = ({ children: e, className: l, id: n, onClick: i, style: s, title: o }) => {
                    const { business: u } = (0, d.M1)(),
                        [c] = (0, K.useMutation)(L),
                        { deleteInsight: g, insightList: m, setInsightList: p } = (0, I.wQ)(),
                        [h, y] = r.useState(!1),
                        x = (0, a.$8)();
                    return (0, t.jsx)(T, {
                        isOpen: h,
                        setIsOpen: y,
                        title: o,
                        onDelete: async () => {
                            const e = m;
                            g(n),
                                c({
                                    onCompleted: (l) => {
                                        "InsightRuleFailure" === l.delete_insight_rule_v2?.__typename ? (p(e), (0, b.Am)(u.radar.failedToDeleteQuery), x.scribe({ action: "delete_failure", element: "insight_list_item", page: "insights_list" })) : x.scribe({ action: "delete", element: "insight_list_item", page: "insights_list" });
                                    },
                                    onError: () => {
                                        p(e), (0, b.Am)(u.radar.failedToDeleteQuery), x.scribe({ action: "delete_failure", element: "insight_list_item", page: "insights_list" });
                                    },
                                    variables: { id: n },
                                });
                        },
                        children: (0, t.jsx)("button", {
                            onClick: (e) => {
                                e.stopPropagation(), y(!0), i?.(e);
                            },
                            className: (0, f.cn)("text-gray-1000 hover:bg-gray-0 flex items-center gap-1 rounded border bg-gray-50/50 p-1", l),
                            style: s,
                            type: "button",
                            children: e || (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(w.Z, { className: "brightness-75" }), (0, t.jsx)("div", { className: "text-subtext3 font-normal", children: u.radar.delete })] }),
                        }),
                    });
                },
                T = ({ children: e, isOpen: l, onDelete: n, setIsOpen: a, title: i }) => {
                    const { business: s } = (0, d.M1)();
                    return (0, t.jsxs)(j.Vq, {
                        open: l,
                        onOpenChange: a,
                        children: [
                            (0, t.jsx)(j.hg, { asChild: !0, children: e }),
                            (0, t.jsxs)(j.cZ, {
                                className: "sm:max-w-[425px]",
                                children: [
                                    (0, t.jsxs)(j.fK, { children: [(0, t.jsx)(j.$N, { children: s.radar.deleteQuery({ name: i }) }), (0, t.jsx)(j.Be, { children: s.radar.deleteConfirmation })] }),
                                    (0, t.jsxs)("div", {
                                        className: "flex w-full justify-between pt-4",
                                        children: [
                                            (0, t.jsx)(F.z, {
                                                variant: "insightsGhost",
                                                size: "small",
                                                onClick: (e) => {
                                                    e.stopPropagation(), a(!1);
                                                },
                                                children: (0, t.jsx)("div", { className: "font-normal", children: s.radar.cancel }),
                                            }),
                                            (0, t.jsx)(F.z, {
                                                size: "small",
                                                variant: "insightsPrimary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), n(), a(!1);
                                                },
                                                className: "bg-red-500",
                                                children: (0, t.jsx)("div", { className: "font-normal", children: s.radar.delete }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            var R = n(643715),
                D = n(829233),
                S = n(209570);
            const { Area: A, AreaChart: M } = R,
                C = ({ color: e, preview: l }) => {
                    const n = (0, r.useId)(),
                        a = `posts-${n}`,
                        i = { [a]: { color: e, label: "Posts" } },
                        s = (0, r.useMemo)(() => l?.counts?.map((l) => ({ fill: e, timestamp: l.startDate, [a]: l.count })), [l?.counts, e, a]);
                    return s ? (0, t.jsx)(D.BO, { config: i, className: "relative h-full min-h-[0] w-full select-none md:max-h-[100px]", children: (0, t.jsxs)(M, { data: s, margin: { bottom: 0, left: 0, right: 0, top: 0 }, children: [(0, t.jsx)("defs", { children: (0, t.jsxs)("linearGradient", { id: `fill1-${n}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, t.jsx)("stop", { offset: "20%", stopColor: e, stopOpacity: 1 }), (0, t.jsx)("stop", { offset: "100%", stopColor: e, stopOpacity: 0 })] }) }), (0, t.jsx)(A, { dataKey: a, stroke: e, radius: 2, fill: `url(#fill1-${n})`, dot: !1, activeDot: O, type: "monotone", animationDuration: 500 })] }) }) : null;
                },
                O = (e) => {
                    const { key: l, value: n, ...a } = e;
                    return null === n[1] ? null : (0, t.jsx)(S.m, { ...a }, l);
                };
            var Q = n(999758);
            const E = ({ insight: e }) => {
                const { business: l } = (0, d.M1)(),
                    n = (0, a.$8)(),
                    i = (0, p.$W)(),
                    s = (0, p.No)(),
                    o = (0, p.CM)(),
                    u = (0, k.t)(),
                    c = (0, p.nO)(),
                    g = +e.id.slice(-1) % 2 == 1 ? "#D1C6AA" : "#AACFD1",
                    m = (0, r.useMemo)(() => (0, x.T)(new h.eJ()), []),
                    b = (0, r.useMemo)(() => (0, v.k)(m, 7), [m]),
                    [F, j] = (0, r.useState)(null),
                    [w, K] = (0, r.useState)(0),
                    I = (0, r.useRef)(null),
                    [L, T] = (0, r.useState)(null);
                return (0, t.jsxs)("div", {
                    className: "relative flex-shrink-0 overflow-hidden",
                    children: [
                        (0, t.jsxs)("div", {
                            ref: I,
                            onTouchStart: (e) => {
                                const l = e.touches[0];
                                l && (j({ currentX: l.clientX, initialX: l.clientX - w, initialY: l.clientY }), T(null));
                            },
                            onTouchMove: (e) => {
                                const l = e.touches[0];
                                if (F && l) {
                                    if (null === L) {
                                        const n = Math.abs(l.clientX - F.initialX),
                                            t = Math.abs(l.clientY - F.initialY);
                                        return T(t > n), void (t <= n && e.preventDefault());
                                    }
                                    if (!L) {
                                        e.preventDefault();
                                        const n = F.initialX - l.clientX,
                                            t = Math.max(Math.min(0, -n), -100);
                                        K(t), j({ ...F, currentX: l.clientX });
                                    }
                                }
                            },
                            onTouchEnd: () => {
                                if (!F || L) return;
                                const e = F.currentX - F.initialX;
                                K(w < -50 || e < -50 ? -100 : 0), j(null), T(null);
                            },
                            style: { transform: `translateX(${w}px)`, transition: F ? "none" : "transform 0.2s ease-out" },
                            className: "text-text md:hover:bg-gray-0 group relative z-10 flex w-full cursor-pointer items-start gap-[10px] rounded-lg border border-gray-100 p-4",
                            onClick: () => {
                                0 === w ? (n.scribe({ action: "click", data: { rule_id: e.id }, element: "insight_list_item", page: "insights_list" }), u.push(`${c}/${e.id}`)) : K(0);
                            },
                            children: [
                                (0, t.jsxs)("div", { className: "flex h-full w-full flex-col gap-2", children: [(0, t.jsxs)("div", { className: "flex flex-col gap-1 md:flex-row md:items-center md:gap-4", children: [(0, t.jsx)("div", { className: (0, f.cn)("text-headline2 line-clamp-1 font-bold", { "text-gray-600": 0 === e.title.length, "text-text": e.title.length > 0 }), children: e.title.length > 0 ? e.title : l.radar.untitledQuery }), (0, t.jsx)(y.x, { color: "gray600", size: "subtext3", children: new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(new Date(e.createdAt)) })] }), (0, t.jsx)("div", { className: "flex gap-2", children: e.advancedQuery ? (0, t.jsx)(y.x, { size: "subtext2", color: "gray800", numberOfLines: 1, children: e.advancedQuery }) : e.tags?.map((e) => (0, t.jsx)("div", { className: "flex h-6 items-center rounded border px-2", children: (0, t.jsx)(y.x, { size: "subtext3", children: e }) }, e)) }), (0, t.jsxs)("div", { className: "flex-2 hidden gap-2 md:flex", children: [(0, t.jsx)("div", { className: "flex items-center gap-2", children: (0, t.jsx)(N, { id: e.id, title: e.title.length > 0 ? e.title : l.radar.untitledQuery, className: "h-full opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100" }) }), o && (0, t.jsx)("div", { className: "flex items-center gap-2", children: (0, t.jsx)(Q.s, { id: e.id, advancedQuery: e.advancedQuery || "", notificationsEnabled: e.notificationsEnabled, className: (0, f.cn)("h-full opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100", "flex items-center gap-1 rounded border p-1"), displayInfo: !1, page: "insights_list" }) })] })] }),
                                (0, t.jsxs)("div", { className: "flex h-full justify-end gap-12", children: [i && (0, t.jsx)("div", { className: "hidden w-36 flex-col gap-2 md:flex", children: s && (0, t.jsx)("div", { children: (0, t.jsx)(_.g, { ruleId: e.id, fetchKey: e.advancedQuery, timeRange: { fromDate: b, toDate: m } }) }) }), e.preview && (0, t.jsx)("div", { className: "flex w-24 flex-col items-end md:w-72", children: (0, t.jsx)(C, { preview: e.preview, color: g }) })] }),
                            ],
                        }),
                        (0, t.jsx)(N, { id: e.id, title: e.title.length > 0 ? e.title : l.radar.untitledQuery, className: "bg-background absolute -right-0 top-0 flex h-full w-[92px] items-center justify-center rounded-xl border border-red-500 text-red-500", style: { transform: `translateX(${100 + w}px)`, transition: F ? "none" : "transform 0.2s ease-out" }, children: "Delete" }),
                    ],
                });
            };
            function z() {
                const { insightList: e } = (0, I.wQ)(),
                    l = (0, p.Iw)(),
                    { business: n } = (0, d.M1)();
                return void 0 === e ? (0, t.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: (0, t.jsx)(i.P, { size: "large", color: "text" }) }) : 0 === e.length ? (0, t.jsx)(u.e, {}) : l <= 1 ? (0, t.jsx)(g.NR, { id: e[0].id, children: (0, t.jsx)(m.V, {}) }) : (0, t.jsxs)("div", { className: "flex h-full flex-col gap-[10px] p-2 md:p-4", children: [(0, t.jsx)(o.h, { title: n.radar.header, Icon: (0, t.jsx)(s.Z, { className: "text-text size-7" }), beta: !1, className: "flex", children: (0, t.jsx)(c.A, { fullWidth: !0 }) }), (0, t.jsx)(q, { insightList: e })] });
            }
            function q({ insightList: e }) {
                const l = (0, a.$8)();
                return (
                    (0, r.useEffect)(() => {
                        l.scribe({ action: "impression", page: "insights_list" });
                    }, [l]),
                    (0, t.jsx)("div", { className: "flex flex-col gap-2 overflow-y-auto", children: e.map((e) => (0, t.jsx)(E, { insight: e }, e.id)) })
                );
            }
        },
        704877: (e, l, n) => {
            n.d(l, { Rv: () => g, Wi: () => u, wQ: () => c });
            var t = n(552322),
                a = n(202784),
                i = n(889906),
                s = n(749612);
            const r = n(692760),
                d = (0, a.createContext)({}),
                o = (e) => {
                    const l = e.viewer_v2?.user_results?.result?.insight_rules?.items;
                    return l
                        ? l
                              .reduce((e, l) => {
                                  if (l?.core) {
                                      const { core: n, rest_id: t } = l,
                                          { advanced_query: a, created_at: i, notifications_enabled: s, tags: r, title: d, updated_at: o } = n;
                                      e.push({ advancedQuery: a ?? null, createdAt: new Date(i).getTime(), id: t, notificationsEnabled: s, preview: { counts: l.preview?.counts?.map((e) => ({ count: e.count, startDate: e.start_time })) ?? [] }, tags: r ? JSON.parse(r) : null, title: d, updatedAt: new Date(o).getTime() });
                                  }
                                  return e;
                              }, [])
                              .sort((e, l) => l.updatedAt - e.updatedAt)
                        : [];
                };
            function u({ children: e }) {
                const l = (0, s.Iw)() > 1,
                    [n, u] = (0, a.useState)(void 0),
                    c = (0, i.useLazyLoadQuery)(r, { previewsEnabled: l }, { fetchPolicy: "network-only" });
                (0, a.useEffect)(() => {
                    u(o(c));
                }, [c]);
                return (0, t.jsx)(d.Provider, {
                    value: {
                        deleteInsight: (e) => {
                            n && u(n.filter((l) => l.id !== e));
                        },
                        insightList: n,
                        setInsightList: u,
                    },
                    children: e,
                });
            }
            const c = () => {
                    const e = (0, a.useContext)(d);
                    if (void 0 === e) throw new Error("useInsightList must be used within an InsightListProvider");
                    return e;
                },
                g = () => {
                    const e = (0, i.useLazyLoadQuery)(r, { previewsEnabled: !1 }, { fetchPolicy: "network-only" });
                    return e.viewer_v2?.user_results?.result?.insight_rules?.items?.length || 0;
                };
        },
        999758: (e, l, n) => {
            n.d(l, { s: () => h });
            var t = n(552322),
                a = n(446368),
                i = n(256958),
                s = n(436059),
                r = n(86781),
                d = n(475523),
                o = n(595455),
                u = n(880917),
                c = n(202784),
                g = n(889906),
                m = n(430962);
            const p = n(717025),
                h = ({ advancedQuery: e, className: l, displayInfo: n, id: h, notificationsEnabled: y, page: f }) => {
                    const [x] = (0, g.useMutation)(p),
                        { business: v } = (0, m.M1)(),
                        k = (0, a.$8)(),
                        [_, b] = (0, c.useState)(y);
                    return (0, t.jsxs)("div", {
                        className: "flex h-full items-center gap-1",
                        children: [
                            (0, t.jsx)(s.z, {
                                onClick: (l) => {
                                    l.stopPropagation(),
                                        (() => {
                                            const l = !_;
                                            x({
                                                onCompleted: (e) => {
                                                    "InsightRuleFailure" === e.update_insight_rule_v2?.__typename ? i.Am.info(l ? v.radar.failedToEnableAlert : v.radar.failedToDisableAlert) : (b(l), l ? (i.Am.info(v.radar.alertsEnabled), k.scribe({ action: "click_enable", element: "toggle_alert_notification", page: f })) : (i.Am.info(v.radar.alertsDisabled), k.scribe({ action: "click_disable", element: "toggle_alert_notification", page: f })));
                                                },
                                                onError: (e) => {
                                                    i.Am.info(l ? v.radar.failedToEnableAlert : v.radar.failedToDisableAlert), k.scribe({ action: "click_failure", element: "toggle_alert_notification", page: f });
                                                },
                                                variables: { advancedQuery: e, id: h, notificationsEnabled: l },
                                            });
                                        })();
                                },
                                size: "xSmallCompact",
                                variant: _ ? "insightsFilled" : "insightsSecondary",
                                className: l,
                                children: _ ? (0, t.jsx)(d.Z, {}) : (0, t.jsx)(o.Z, {}),
                            }),
                            n && (0, t.jsx)(r.J, { borderRadius: "xLarge", trigger: (0, t.jsx)("button", { className: "text-gray-900", type: "button", children: (0, t.jsx)(u.Z, {}) }), children: (0, t.jsxs)("div", { className: "bg-background flex w-64 flex-col gap-2 overflow-hidden rounded-xl border p-4 shadow-md", children: [(0, t.jsx)("p", { className: "text-text text-headline1 font-bold", children: v.radar.alertsInfoTitle }), (0, t.jsx)("p", { className: "text-subtext1 text-gray-800", children: v.radar.alertsInfoBody })] }) }),
                        ],
                    });
                };
        },
        73680: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            const t = {
                fragment: {
                    argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "DeleteInsightButtonMutation",
                    selections: [
                        {
                            alias: null,
                            args: (i = [
                                { kind: "Variable", name: "id", variableName: "id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "delete_insight_rule_v2",
                            plural: !1,
                            selections: [
                                { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null })], type: "InsightRuleFailure", abstractKey: null },
                                { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: a, kind: "Operation", name: "DeleteInsightButtonMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "delete_insight_rule_v2", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, d], type: "InsightRuleFailure", abstractKey: null }, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "Ylfgu_WxLasiJaOk2KVWew", metadata: {}, name: "DeleteInsightButtonMutation", operationKind: "mutation", text: null },
            };
            var a, i, s, r, d, o;
            t.hash = "20a1fa56f4c2b4f82ddf491408264026";
            const u = t;
        },
        692760: (e, l, n) => {
            n.r(l), n.d(l, { default: () => h });
            const t = {
                fragment: {
                    argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "previewsEnabled" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "InsightsListContextQuery",
                    selections: [
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: null,
                                            concreteType: "UserResults",
                                            kind: "LinkedField",
                                            name: "user_results",
                                            plural: !1,
                                            selections: [
                                                {
                                                    kind: "RequiredField",
                                                    field: {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "InsightRuleSlice",
                                                                        kind: "LinkedField",
                                                                        name: "insight_rules",
                                                                        plural: !1,
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "ApiInsightRule",
                                                                                kind: "LinkedField",
                                                                                name: "items",
                                                                                plural: !0,
                                                                                selections: [
                                                                                    { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), action: "THROW", path: "viewer_v2.user_results.result.insight_rules.items.rest_id" },
                                                                                    { alias: null, args: null, concreteType: "InsightRuleCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), action: "THROW", path: "viewer_v2.user_results.result.insight_rules.items.core.title" }, (d = { alias: null, args: null, kind: "ScalarField", name: "tags", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "advanced_query", storageKey: null }), { kind: "RequiredField", field: (u = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }), action: "THROW", path: "viewer_v2.user_results.result.insight_rules.items.core.created_at" }, { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }), action: "THROW", path: "viewer_v2.user_results.result.insight_rules.items.core.updated_at" }, (g = { alias: null, args: null, kind: "ScalarField", name: "notifications_enabled", storageKey: null })], storageKey: null },
                                                                                    (m = {
                                                                                        condition: "previewsEnabled",
                                                                                        kind: "Condition",
                                                                                        passingValue: !0,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: [
                                                                                                    { kind: "Literal", name: "granularity", value: "Day" },
                                                                                                    { kind: "Literal", name: "timezone_offset", value: 0 },
                                                                                                ],
                                                                                                concreteType: "InsightsMatchedPostCountsSuccess",
                                                                                                kind: "LinkedField",
                                                                                                name: "preview",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "InsightsPostsCount",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "counts",
                                                                                                        plural: !0,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: 'preview(granularity:"Day",timezone_offset:0)',
                                                                                            },
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    action: "THROW",
                                                    path: "viewer_v2.user_results.result",
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                        path: "viewer_v2.user_results",
                                    },
                                ],
                                storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                            },
                            action: "THROW",
                            path: "viewer_v2",
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: a,
                    kind: "Operation",
                    name: "InsightsListContextQuery",
                    selections: [
                        {
                            alias: null,
                            args: i,
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
                                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "InsightRuleSlice", kind: "LinkedField", name: "insight_rules", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "items", plural: !0, selections: [s, { alias: null, args: null, concreteType: "InsightRuleCore", kind: "LinkedField", name: "core", plural: !1, selections: [r, d, o, u, c, g], storageKey: null }, m, (p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }], storageKey: null }, p], type: "User", abstractKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        p,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                        },
                    ],
                },
                params: { id: "wDbaSTpre4EH5ED1bDsLTg", metadata: {}, name: "InsightsListContextQuery", operationKind: "query", text: null },
            };
            var a, i, s, r, d, o, u, c, g, m, p;
            t.hash = "421171566146d7083b1eca1a24619a72";
            const h = t;
        },
        717025: (e, l, n) => {
            n.r(l), n.d(l, { default: () => g });
            const t = {
                fragment: {
                    argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "advancedQuery" }), (i = { defaultValue: null, kind: "LocalArgument", name: "id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "notificationsEnabled" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "ToggleAlertNotificationMutation",
                    selections: [
                        {
                            alias: null,
                            args: (r = [
                                { kind: "Variable", name: "advanced_query", variableName: "advancedQuery" },
                                { kind: "Variable", name: "id", variableName: "id" },
                                { kind: "Variable", name: "notifications_enabled", variableName: "notificationsEnabled" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "update_insight_rule_v2",
                            plural: !1,
                            selections: [
                                { kind: "InlineFragment", selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null })], type: "InsightRuleFailure", abstractKey: null },
                                { kind: "InlineFragment", selections: [d, { alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [i, s, a], kind: "Operation", name: "ToggleAlertNotificationMutation", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "update_insight_rule_v2", plural: !1, selections: [d, { kind: "InlineFragment", selections: [o, u], type: "InsightRuleFailure", abstractKey: null }, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "tGwaXd9NIbMv3fcMGRKRFw", metadata: {}, name: "ToggleAlertNotificationMutation", operationKind: "mutation", text: null },
            };
            var a, i, s, r, d, o, u, c;
            t.hash = "be812b30f1e335a8a311aa95ac650595";
            const g = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-f7352727.8329adca.js.map

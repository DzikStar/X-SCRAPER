"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-f7352727"],
    {
        832138: (e, l, n) => {
            n.d(l, { L: () => z });
            var a = n(552322),
                t = n(446368),
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
                k = n(733936),
                v = n(968025),
                b = n(759397),
                _ = n(256958),
                F = n(436059),
                j = n(164695),
                K = n(395828),
                w = n(889906),
                I = n(704877);
            const L = n(73680),
                N = ({ children: e, className: l, id: n, onClick: i, style: s, title: o }) => {
                    const { business: u } = (0, d.M1)(),
                        [c] = (0, w.useMutation)(L),
                        { deleteInsight: g, insightList: m, setInsightList: p } = (0, I.wQ)(),
                        [h, y] = r.useState(!1),
                        x = (0, t.$8)();
                    return (0, a.jsx)(T, {
                        isOpen: h,
                        setIsOpen: y,
                        title: o,
                        onDelete: async () => {
                            const e = m;
                            g(n),
                                c({
                                    onCompleted: (l) => {
                                        "InsightRuleFailure" === l.delete_insight_rule_v2?.__typename ? (p(e), (0, _.Am)(u.radar.failedToDeleteQuery), x.scribe({ action: "delete_failure", element: "insight_list_item", page: "insights_list" })) : x.scribe({ action: "delete", element: "insight_list_item", page: "insights_list" });
                                    },
                                    onError: () => {
                                        p(e), (0, _.Am)(u.radar.failedToDeleteQuery), x.scribe({ action: "delete_failure", element: "insight_list_item", page: "insights_list" });
                                    },
                                    variables: { id: n },
                                });
                        },
                        children: (0, a.jsx)("button", {
                            onClick: (e) => {
                                e.stopPropagation(), y(!0), i?.(e);
                            },
                            className: (0, f.cn)("text-gray-1000 hover:bg-gray-0 flex items-center gap-1 rounded border bg-gray-50/50 p-1", l),
                            style: s,
                            type: "button",
                            children: e || (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(K.Z, { className: "brightness-75" }), (0, a.jsx)("div", { className: "text-subtext3 font-normal", children: u.radar.delete })] }),
                        }),
                    });
                },
                T = ({ children: e, isOpen: l, onDelete: n, setIsOpen: t, title: i }) => {
                    const { business: s } = (0, d.M1)();
                    return (0, a.jsxs)(j.Vq, {
                        open: l,
                        onOpenChange: t,
                        children: [
                            (0, a.jsx)(j.hg, { asChild: !0, children: e }),
                            (0, a.jsxs)(j.cZ, {
                                className: "sm:max-w-[425px]",
                                children: [
                                    (0, a.jsxs)(j.fK, { children: [(0, a.jsx)(j.$N, { children: s.radar.deleteQuery({ name: i }) }), (0, a.jsx)(j.Be, { children: s.radar.deleteConfirmation })] }),
                                    (0, a.jsxs)("div", {
                                        className: "flex w-full justify-between pt-4",
                                        children: [
                                            (0, a.jsx)(F.z, {
                                                variant: "insightsGhost",
                                                size: "small",
                                                onClick: (e) => {
                                                    e.stopPropagation(), t(!1);
                                                },
                                                children: (0, a.jsx)("div", { className: "font-normal", children: s.radar.cancel }),
                                            }),
                                            (0, a.jsx)(F.z, {
                                                size: "small",
                                                variant: "insightsPrimary",
                                                onClick: (e) => {
                                                    e.stopPropagation(), n(), t(!1);
                                                },
                                                className: "bg-red-500",
                                                children: (0, a.jsx)("div", { className: "font-normal", children: s.radar.delete }),
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
                        t = `posts-${n}`,
                        i = { [t]: { color: e, label: "Posts" } },
                        s = (0, r.useMemo)(() => l?.counts?.map((l) => ({ fill: e, timestamp: l.startDate, [t]: l.count })), [l?.counts, e, t]);
                    return s ? (0, a.jsx)(D.BO, { config: i, className: "relative h-full min-h-[0] w-full select-none md:max-h-[100px]", children: (0, a.jsxs)(M, { data: s, margin: { bottom: 0, left: 0, right: 0, top: 0 }, children: [(0, a.jsx)("defs", { children: (0, a.jsxs)("linearGradient", { id: `fill1-${n}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, a.jsx)("stop", { offset: "20%", stopColor: e, stopOpacity: 1 }), (0, a.jsx)("stop", { offset: "100%", stopColor: e, stopOpacity: 0 })] }) }), (0, a.jsx)(A, { dataKey: t, stroke: e, radius: 2, fill: `url(#fill1-${n})`, dot: !1, activeDot: O, type: "monotone", animationDuration: 500 })] }) }) : null;
                },
                O = (e) => {
                    const { key: l, value: n, ...t } = e;
                    return null === n[1] ? null : (0, a.jsx)(S.m, { ...t }, l);
                };
            var Q = n(999758);
            const E = ({ insight: e }) => {
                const { business: l } = (0, d.M1)(),
                    n = (0, t.$8)(),
                    i = (0, p.$W)(),
                    s = (0, p.No)(),
                    o = (0, p.CM)(),
                    u = (0, v.t)(),
                    c = (0, p.nO)(),
                    g = +e.id.slice(-1) % 2 == 1 ? "#D1C6AA" : "#AACFD1",
                    m = (0, r.useMemo)(() => (0, x.T)(new h.eJ()), []),
                    _ = (0, r.useMemo)(() => (0, k.k)(m, 7), [m]),
                    [F, j] = (0, r.useState)(null),
                    [K, w] = (0, r.useState)(0),
                    I = (0, r.useRef)(null),
                    [L, T] = (0, r.useState)(null);
                return (0, a.jsxs)("div", {
                    className: "relative flex-shrink-0 overflow-hidden",
                    children: [
                        (0, a.jsxs)("div", {
                            ref: I,
                            onTouchStart: (e) => {
                                const l = e.touches[0];
                                l && (j({ currentX: l.clientX, initialX: l.clientX - K, initialY: l.clientY }), T(null));
                            },
                            onTouchMove: (e) => {
                                const l = e.touches[0];
                                if (F && l) {
                                    if (null === L) {
                                        const n = Math.abs(l.clientX - F.initialX),
                                            a = Math.abs(l.clientY - F.initialY);
                                        return T(a > n), void (a <= n && e.preventDefault());
                                    }
                                    if (!L) {
                                        e.preventDefault();
                                        const n = F.initialX - l.clientX,
                                            a = Math.max(Math.min(0, -n), -100);
                                        w(a), j({ ...F, currentX: l.clientX });
                                    }
                                }
                            },
                            onTouchEnd: () => {
                                if (!F || L) return;
                                const e = F.currentX - F.initialX;
                                w(K < -50 || e < -50 ? -100 : 0), j(null), T(null);
                            },
                            style: { transform: `translateX(${K}px)`, transition: F ? "none" : "transform 0.2s ease-out" },
                            className: "text-text md:hover:bg-gray-0 group relative z-10 flex w-full cursor-pointer items-start gap-[10px] rounded-lg border border-gray-100 p-4",
                            onClick: () => {
                                0 === K ? (n.scribe({ action: "click", data: { rule_id: e.id }, element: "insight_list_item", page: "insights_list" }), u.push(`${c}/${e.id}`)) : w(0);
                            },
                            children: [
                                (0, a.jsxs)("div", { className: "flex h-full w-full flex-col gap-2", children: [(0, a.jsxs)("div", { className: "flex flex-col gap-1 md:flex-row md:items-center md:gap-4", children: [(0, a.jsx)("div", { className: (0, f.cn)("text-headline2 line-clamp-1 font-bold", { "text-gray-600": 0 === e.title.length, "text-text": e.title.length > 0 }), children: e.title.length > 0 ? e.title : l.radar.untitledQuery }), (0, a.jsx)(y.x, { color: "gray600", size: "subtext3", children: new Intl.DateTimeFormat("en-US", { day: "numeric", month: "short", year: "numeric" }).format(new Date(e.createdAt)) })] }), (0, a.jsx)("div", { className: "flex gap-2", children: e.advancedQuery ? (0, a.jsx)(y.x, { size: "subtext2", color: "gray800", numberOfLines: 1, children: e.advancedQuery }) : e.tags?.map((e) => (0, a.jsx)("div", { className: "flex h-6 items-center rounded border px-2", children: (0, a.jsx)(y.x, { size: "subtext3", children: e }) }, e)) }), (0, a.jsxs)("div", { className: "flex-2 hidden gap-2 md:flex", children: [(0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(N, { id: e.id, title: e.title.length > 0 ? e.title : l.radar.untitledQuery, className: "h-full opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100" }) }), o && (0, a.jsx)("div", { className: "flex items-center gap-2", children: (0, a.jsx)(Q.s, { id: e.id, advancedQuery: e.advancedQuery || "", notificationsEnabled: e.notificationsEnabled, className: (0, f.cn)("h-full opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100", "flex items-center gap-1 rounded border p-1"), displayInfo: !1, page: "insights_list" }) })] })] }),
                                (0, a.jsxs)("div", { className: "flex h-full justify-end gap-12", children: [i && (0, a.jsx)("div", { className: "hidden w-36 flex-col gap-2 md:flex", children: s && (0, a.jsx)("div", { children: (0, a.jsx)(b.g, { ruleId: e.id, fetchKey: e.advancedQuery, timeRange: { fromDate: _, toDate: m } }) }) }), e.preview && (0, a.jsx)("div", { className: "flex w-24 flex-col items-end md:w-72", children: (0, a.jsx)(C, { preview: e.preview, color: g }) })] }),
                            ],
                        }),
                        (0, a.jsx)(N, { id: e.id, title: e.title.length > 0 ? e.title : l.radar.untitledQuery, className: "bg-background absolute -right-0 top-0 flex h-full w-[92px] items-center justify-center rounded-xl border border-red-500 text-red-500", style: { transform: `translateX(${100 + K}px)`, transition: F ? "none" : "transform 0.2s ease-out" }, children: "Delete" }),
                    ],
                });
            };
            function z() {
                const { insightList: e } = (0, I.wQ)(),
                    l = (0, p.Iw)(),
                    { business: n } = (0, d.M1)();
                return void 0 === e ? (0, a.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: (0, a.jsx)(i.P, { size: "large", color: "text" }) }) : 0 === e.length ? (0, a.jsx)(u.e, {}) : l <= 1 ? (0, a.jsx)(g.NR, { id: e[0].id, children: (0, a.jsx)(m.V, {}) }) : (0, a.jsxs)("div", { className: "flex h-full flex-col gap-[10px] p-2 md:p-4", children: [(0, a.jsx)(o.h, { title: n.radar.header, Icon: (0, a.jsx)(s.Z, { className: "text-text size-7" }), beta: !1, className: "flex", children: (0, a.jsx)(c.A, { fullWidth: !0 }) }), (0, a.jsx)(q, { insightList: e })] });
            }
            function q({ insightList: e }) {
                const l = (0, t.$8)();
                return (
                    (0, r.useEffect)(() => {
                        l.scribe({ action: "impression", page: "insights_list" });
                    }, [l]),
                    (0, a.jsx)("div", { className: "flex flex-col gap-2 overflow-y-auto", children: e.map((e) => (0, a.jsx)(E, { insight: e }, e.id)) })
                );
            }
        },
        704877: (e, l, n) => {
            n.d(l, { Rv: () => g, Wi: () => u, wQ: () => c });
            var a = n(552322),
                t = n(202784),
                i = n(889906),
                s = n(749612);
            const r = n(692760),
                d = (0, t.createContext)({}),
                o = (e) => {
                    const l = e.viewer_v2?.user_results?.result?.insight_rules?.items;
                    return l
                        ? l
                              .reduce((e, l) => {
                                  if (l?.core) {
                                      const { core: n, rest_id: a } = l,
                                          { advanced_query: t, created_at: i, notifications_enabled: s, tags: r, title: d, updated_at: o } = n;
                                      e.push({ advancedQuery: t ?? null, createdAt: new Date(i).getTime(), id: a, notificationsEnabled: s, preview: { counts: l.preview?.counts?.map((e) => ({ count: e.count, startDate: e.start_time })) ?? [] }, tags: r ? JSON.parse(r) : null, title: d, updatedAt: new Date(o).getTime() });
                                  }
                                  return e;
                              }, [])
                              .sort((e, l) => l.updatedAt - e.updatedAt)
                        : [];
                };
            function u({ children: e }) {
                const l = (0, s.Iw)() > 1,
                    [n, u] = (0, t.useState)(void 0),
                    c = (0, i.useLazyLoadQuery)(r, { previewsEnabled: l }, { fetchPolicy: "network-only" });
                (0, t.useEffect)(() => {
                    u(o(c));
                }, [c]);
                return (0, a.jsx)(d.Provider, {
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
                    const e = (0, t.useContext)(d);
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
            var a = n(552322),
                t = n(446368),
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
                        { business: k } = (0, m.M1)(),
                        v = (0, t.$8)(),
                        [b, _] = (0, c.useState)(y);
                    return (0, a.jsxs)("div", {
                        className: "flex h-full items-center gap-1",
                        children: [
                            (0, a.jsx)(s.z, {
                                onClick: (l) => {
                                    l.stopPropagation(),
                                        (() => {
                                            const l = !b;
                                            x({
                                                onCompleted: (e) => {
                                                    "InsightRuleFailure" === e.update_insight_rule_v2?.__typename ? i.Am.info(l ? k.radar.failedToEnableAlert : k.radar.failedToDisableAlert) : (_(l), l ? (i.Am.info(k.radar.alertsEnabled), v.scribe({ action: "click_enable", element: "toggle_alert_notification", page: f })) : (i.Am.info(k.radar.alertsDisabled), v.scribe({ action: "click_disable", element: "toggle_alert_notification", page: f })));
                                                },
                                                onError: (e) => {
                                                    i.Am.info(l ? k.radar.failedToEnableAlert : k.radar.failedToDisableAlert), v.scribe({ action: "click_failure", element: "toggle_alert_notification", page: f });
                                                },
                                                variables: { advancedQuery: e, id: h, notificationsEnabled: l },
                                            });
                                        })();
                                },
                                size: "xSmallCompact",
                                variant: b ? "insightsFilled" : "insightsSecondary",
                                className: l,
                                children: b ? (0, a.jsx)(d.Z, {}) : (0, a.jsx)(o.Z, {}),
                            }),
                            n && (0, a.jsx)(r.J, { borderRadius: "xLarge", trigger: (0, a.jsx)("button", { className: "text-gray-900", type: "button", children: (0, a.jsx)(u.Z, {}) }), children: (0, a.jsxs)("div", { className: "bg-background flex w-64 flex-col gap-2 overflow-hidden rounded-xl border p-4 shadow-md", children: [(0, a.jsx)("p", { className: "text-text text-headline1 font-bold", children: k.radar.alertsInfoTitle }), (0, a.jsx)("p", { className: "text-subtext1 text-gray-800", children: k.radar.alertsInfoBody })] }) }),
                        ],
                    });
                };
        },
        73680: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            const a = {
                fragment: {
                    argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
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
                operation: { argumentDefinitions: t, kind: "Operation", name: "DeleteInsightButtonMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "delete_insight_rule_v2", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, d], type: "InsightRuleFailure", abstractKey: null }, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "Ylfgu_WxLasiJaOk2KVWew", metadata: {}, name: "DeleteInsightButtonMutation", operationKind: "mutation", text: null },
            };
            var t, i, s, r, d, o;
            a.hash = "20a1fa56f4c2b4f82ddf491408264026";
            const u = a;
        },
        692760: (e, l, n) => {
            n.r(l), n.d(l, { default: () => h });
            const a = {
                fragment: {
                    argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "previewsEnabled" }]),
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
                                                                                    { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), action: "THROW" },
                                                                                    { alias: null, args: null, concreteType: "InsightRuleCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), action: "THROW" }, (d = { alias: null, args: null, kind: "ScalarField", name: "tags", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "advanced_query", storageKey: null }), { kind: "RequiredField", field: (u = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }), action: "THROW" }, { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }), action: "THROW" }, (g = { alias: null, args: null, kind: "ScalarField", name: "notifications_enabled", storageKey: null })], storageKey: null },
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
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        action: "THROW",
                                    },
                                ],
                                storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                            },
                            action: "THROW",
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: t,
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
            var t, i, s, r, d, o, u, c, g, m, p;
            a.hash = "421171566146d7083b1eca1a24619a72";
            const h = a;
        },
        717025: (e, l, n) => {
            n.r(l), n.d(l, { default: () => g });
            const a = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "advancedQuery" }), (i = { defaultValue: null, kind: "LocalArgument", name: "id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "notificationsEnabled" })],
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
                operation: { argumentDefinitions: [i, s, t], kind: "Operation", name: "ToggleAlertNotificationMutation", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "update_insight_rule_v2", plural: !1, selections: [d, { kind: "InlineFragment", selections: [o, u], type: "InsightRuleFailure", abstractKey: null }, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [c, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "tGwaXd9NIbMv3fcMGRKRFw", metadata: {}, name: "ToggleAlertNotificationMutation", operationKind: "mutation", text: null },
            };
            var t, i, s, r, d, o, u, c;
            a.hash = "be812b30f1e335a8a311aa95ac650595";
            const g = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-f7352727.c57ce68a.js.map

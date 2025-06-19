"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-44c9904f"],
    {
        834629: (e, l, a) => {
            a.d(l, { G: () => n });
            a(889906);
            const n = a(281510);
        },
        281510: (e, l, a) => {
            a.r(l), a.d(l, { default: () => u });
            const n = {
                fragment: {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "InsightsConfigQuery",
                    selections: [
                        {
                            alias: null,
                            args: (s = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
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
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: "LinkedField",
                                                            name: "insights_config",
                                                            plural: !1,
                                                            selections: [
                                                                (i = {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_build_query", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_granularity", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_impressions", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_post_counts", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_unique_users", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "saved_query_limit", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "subscription_type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "time_range_limit_days", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "allow_alert_notifications", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "alerts_enabled_by_default", storageKey: null },
                                                                    ],
                                                                    type: "InsightsConfigSuccess",
                                                                    abstractKey: null,
                                                                }),
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
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [], kind: "Operation", name: "InsightsConfigQuery", selections: [{ alias: null, args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "insights_config", plural: !1, selections: [t, i], storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")' }] },
                params: { id: "hdbRC13HoA2I5Vhj3b5nTQ", metadata: {}, name: "InsightsConfigQuery", operationKind: "query", text: null },
            };
            var s, i, t, r;
            n.hash = "14ce9c9d95cd163f5a71254bebb3ed0a";
            const u = n;
        },
        29674: (e, l, a) => {
            a.r(l), a.d(l, { default: () => u });
            const n = {
                fragment: {
                    argumentDefinitions: [(s = { defaultValue: null, kind: "LocalArgument", name: "original_query" }), (i = { defaultValue: null, kind: "LocalArgument", name: "previous_query" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "QueryInputMutation",
                    selections: [
                        {
                            alias: null,
                            args: (t = [
                                { kind: "Variable", name: "original_query", variableName: "original_query" },
                                { kind: "Variable", name: "previous_query", variableName: "previous_query" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "build_insight_query",
                            plural: !1,
                            selections: [(r = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "built_query", storageKey: null }], type: "BuildFromOriginalQuerySuccess", abstractKey: null })],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [i, s], kind: "Operation", name: "QueryInputMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "build_insight_query", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, r], storageKey: null }] },
                params: { id: "B4lyhwSVWvpY9TXuelOSaw", metadata: {}, name: "QueryInputMutation", operationKind: "mutation", text: null },
            };
            var s, i, t, r;
            n.hash = "6ad15f783ae5fb920e5ae5528c1d4a3f";
            const u = n;
        },
        915574: (e, l, a) => {
            a.d(l, { Z: () => y });
            var n = a(552322),
                s = a(446368),
                i = a(256958),
                t = a(694135),
                r = a(687521),
                u = a(993165),
                d = a(332161),
                c = a(14313),
                o = a(840489),
                g = a(202784),
                m = a(889906),
                x = (a(703383), a(430962));
            function y({ followUpEnabled: e = !0, onCancel: l, onSubmit: a, query: y, usePreviousQuery: p }) {
                const { business: f } = (0, x.M1)(),
                    [b, v] = (0, g.useState)(""),
                    k = (0, s.$8)(),
                    [j, _] = (0, g.useState)([]),
                    [F, w] = (0, g.useState)(y || ""),
                    [N, S] = (0, g.useState)(!!y),
                    [K, C] = (0, m.useMutation)(h),
                    T = () => {
                        b.trim() &&
                            K({
                                onCompleted: (l) => {
                                    l.build_insight_query?.built_query && (e ? (k.scribe({ action: "generate", component: "nlp_query_input", data: { is_follow_up: N }, page: "insights" }), w(l.build_insight_query?.built_query), S(!0), _((e) => [...e, b.trim()]), v("")) : a({ query: l.build_insight_query?.built_query, submittedPrompts: [b.trim()] }));
                                },
                                onError: () => {
                                    S(!0), i.Am.error(f.radar.failedToGenerateQuery), k.scribe({ action: "generate_failure", component: "nlp_query_input", page: "insights" });
                                },
                                variables: { original_query: `${j.join(", ")}, ${b.trim()}`, previous_query: p ? F : void 0 },
                            });
                    };
                return (0, n.jsxs)("div", {
                    className: "mx-auto w-full max-w-2xl px-2",
                    children: [
                        (0, n.jsx)(t.E, {
                            className: "mt-4 flex p-0",
                            direction: "counterclockwise",
                            speed: 4,
                            enabled: !e && C,
                            borderWidth: 3,
                            borderRadius: "full",
                            children: (0, n.jsx)("div", {
                                className: "rounded-full w-full bg-gray-50/50",
                                children: (0, n.jsx)(r._, {
                                    autoFocus: !0,
                                    value: b,
                                    onChange: (e) => {
                                        v(e.currentTarget.value);
                                    },
                                    onKeyDown: (e) => {
                                        "Enter" === e.key && b.trim().length > 0 && (e.preventDefault(), T());
                                    },
                                    placeholder: j.length > 0 ? f.radar.queryInputPlaceholderFollowUp : f.radar.queryInputPlaceholder,
                                    rightContent: (0, n.jsx)(u.z, { className: "mr-2 px-0", variant: "insightsBright", size: "xSmallCompact", onClick: T, disabled: 0 === b.trim().length, children: (0, n.jsx)(c.Z, { className: "text-background size-[14px] font-bold" }) }),
                                }),
                            }),
                        }),
                        e && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "subtext2 px-1 py-2 text-gray-700", children: j.join(", ") }), (0, n.jsx)("div", { className: (0, o.Z)("flex w-full flex-col gap-2 overflow-hidden transition-[height] duration-1000"), children: (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)(d.x, { color: "gray900", size: "subtext1", className: "px-1", children: [f.radar.query, ":"] }), (0, n.jsx)(t.E, { className: "p-0", direction: "counterclockwise", speed: 4, enabled: C, children: (0, n.jsx)("textarea", { value: F, disabled: C, onChange: (e) => w(e.currentTarget.value), contentEditable: F.length > 0, className: (0, o.Z)("rounded-2xl text-subtext1 hide-scrollbar block aspect-square h-20 w-full resize-none border p-2 outline-none", { "bg-gray-50 text-gray-700": C, "focus-within:border-primary bg-gray-50/50 text-gray-900": !C && N }) }) })] }) }), (0, n.jsxs)("div", { className: "mt-4 flex justify-between gap-2", children: [(0, n.jsx)(u.z, { variant: "insightsSecondary", onClick: l, children: "Cancel" }), (0, n.jsx)(u.z, { variant: "insightsBright", className: "rounded", disabled: !F.trim(), onClick: () => a({ query: F.trim(), submittedPrompts: j }), children: "Submit" })] })] }),
                    ],
                });
            }
            const h = a(29674);
        },
        74451: (e, l, a) => {
            a.d(l, { Cf: () => c, m3: () => o, uY: () => g });
            var n = a(552322),
                s = a(332161),
                i = a(14313),
                t = a(97759),
                r = a(31674),
                u = a(430962),
                d = a(602077);
            const c = ({ count: e, percentChange: l, title: a }) => {
                    const u = (l ?? 0) > 0 ? i.Z : t.Z;
                    return (0, n.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, n.jsx)(s.x, { color: "gray700", size: "subtext3", children: a }), (0, n.jsxs)("div", { className: "flex gap-4", children: [(0, n.jsx)(s.x, { weight: "bold", size: "title4", children: e ? (0, d.M)(e) : "---" }), l && (0, n.jsxs)("div", { className: (0, r.cn)("text-subtext1 flex items-center", { "text-green-500": l > 0, "text-red-500": l < 0 }), children: [(0, n.jsx)(u, {}), (0, n.jsxs)("div", { className: "text-subtext1", children: [e ? (0, d.M)(l) : "--", "%"] })] })] })] });
                },
                o = ({ title: e = " " }) => (0, n.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, n.jsx)(s.x, { color: "gray700", size: "subtext3", children: e }), (0, n.jsx)("div", { className: "flex h-7 w-20 animate-pulse gap-4 rounded bg-gray-200" })] }),
                g = ({ title: e }) => {
                    const { business: l } = (0, u.M1)();
                    return (0, n.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, n.jsx)("div", { className: "flex items-center gap-2 text-gray-500", children: (0, n.jsx)(s.x, { color: "gray500", size: "subtext3", children: e }) }), (0, n.jsx)(s.x, { color: "gray700", size: "subtext2", children: l.radar.pleaseTryAgainLater })] });
                };
        },
        964522: (e, l, a) => {
            a.d(l, { N: () => r });
            var n = a(552322),
                s = a(31674),
                i = a(202784),
                t = a(660237);
            const r = ({ className: e, defaultValue: l, onSelect: a, options: r }) => {
                const [u, d] = (0, i.useState)(l);
                (0, i.useEffect)(() => {
                    d(l);
                }, [l]);
                return (0, n.jsx)("div", {
                    className: (0, s.cn)("flex gap-2", e),
                    children: r.map((e) =>
                        (0, n.jsx)(
                            t.C,
                            {
                                id: e.value.toString(),
                                isActive: u === e.value,
                                onToggle: () => {
                                    return (l = e.value), d(l), void a?.(l);
                                    var l;
                                },
                                children: e.label,
                            },
                            e.value,
                        ),
                    ),
                });
            };
        },
        437915: (e, l, a) => {
            a.d(l, { U: () => y });
            var n = a(552322),
                s = a(687521),
                i = a(993165),
                t = a(332161),
                r = a(14313),
                u = a(145731),
                d = a(904516),
                c = a(58124),
                o = a(202784),
                g = a(430962),
                m = a(667542);
            const x = ({ rightContent: e, ...l }) => {
                    const { business: a } = (0, g.M1)();
                    return (0, n.jsxs)("div", { className: "flex cursor-auto flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50/50 p-2", ...l, children: [(0, n.jsxs)("div", { className: "flex items-center justify-between", children: [(0, n.jsx)(t.x, { size: "subtext1", color: "gray1000", children: a.radar.usingAdvancedSearch }), e] }), (0, n.jsx)("div", { className: "grid grid-cols-[auto,auto,1fr] gap-x-4 gap-y-2.5 text-gray-700", children: a.radar.advancedSearchExamples.map((e) => (0, n.jsxs)(o.Fragment, { children: [(0, n.jsx)(t.x, { size: "subtext3", color: "gray900", className: "whitespace-nowrap", children: e.query }), (0, n.jsx)(m.Z, { className: "size-3 shrink-0 self-center text-gray-700" }), (0, n.jsx)(t.x, { size: "subtext3", color: "gray900", children: e.description })] }, e.query)) })] });
                },
                y = ({ disabled: e, onQueryChange: l, onSubmit: a, query: m }) => {
                    const { business: y } = (0, g.M1)(),
                        h = (0, o.useRef)(null),
                        [p, f] = (0, o.useState)(!1);
                    return (0, n.jsxs)("div", {
                        className: "flex w-full flex-col gap-8",
                        children: [
                            (0, n.jsx)("div", {
                                className: "rounded-full bg-gray-50/50",
                                children: (0, n.jsx)(s._, {
                                    ref: h,
                                    value: m,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: (l) => {
                                        "Enter" === l.key && m.trim().length > 0 && !e && a();
                                    },
                                    placeholder: y.radar.searchPlaceholder,
                                    rightContent: (0, n.jsx)(i.z, { className: "mr-2 px-0", variant: "insightsBright", size: "xSmallCompact", onClick: a, disabled: 0 === m.trim().length || e, children: (0, n.jsx)(r.Z, { className: "text-background size-[14px] font-bold" }) }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    (0, n.jsx)(i.z, {
                                        variant: "insightsSecondary",
                                        size: "xSmallCompact",
                                        onClick: () => {
                                            h.current && (h.current.value = ""), l("");
                                        },
                                        children: (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [(0, n.jsx)(u.Z, { className: "size-[12px] text-gray-700" }), (0, n.jsx)(t.x, { size: "subtext3", children: y.radar.clear })] }),
                                    }),
                                    (0, n.jsxs)(i.z, { variant: "insightsSecondary", size: "xSmallCompact", onClick: () => f(!p), children: [(0, n.jsx)(d.Z, { className: "size-[12px] shrink-0 text-gray-700" }), (0, n.jsx)(t.x, { size: "subtext3", children: y.radar.examples })] }),
                                ],
                            }),
                            p &&
                                (0, n.jsx)(x, {
                                    rightContent: (0, n.jsx)(i.z, { variant: "insightsGhost", size: "xSmallCompact", onClick: () => f(!1), children: (0, n.jsx)(c.Z, { className: "shrink-0" }) }),
                                    onClick: (e) => {
                                        e.stopPropagation();
                                    },
                                }),
                        ],
                    });
                };
        },
        679671: (e, l, a) => {
            a.d(l, { E2: () => c, I5: () => o, mQ: () => u });
            var n = a(552322),
                s = a(31674),
                i = a(202784),
                t = a(660237);
            const r = (0, i.createContext)({ activeTab: "", setActiveTab: () => {} }),
                u = ({ activeTab: e, children: l, className: a = "", defaultActiveTab: t, onChange: u }) => {
                    const [d, c] = (0, i.useState)(t ?? ""),
                        o = void 0 !== e,
                        g = o ? e : d;
                    return (0, n.jsx)(r.Provider, {
                        value: {
                            activeTab: g,
                            setActiveTab: (e) => {
                                o || c(e), u?.(e);
                            },
                        },
                        children: (0, n.jsx)("div", { className: (0, s.cn)("flex flex-col gap-4", a), children: l }),
                    });
                },
                d = () => (0, i.useContext)(r),
                c = ({ children: e, id: l }) => {
                    const { activeTab: a, setActiveTab: s } = d();
                    return (0, n.jsx)(t.C, { id: l, isActive: a === l, onToggle: s, children: e });
                },
                o = ({ children: e, id: l }) => {
                    const { activeTab: a } = d();
                    return a !== l ? null : (0, n.jsx)(n.Fragment, { children: e });
                };
        },
        660237: (e, l, a) => {
            a.d(l, { C: () => t });
            var n = a(552322),
                s = a(993165),
                i = a(31674);
            const t = ({ children: e, id: l, isActive: a, onToggle: t }) => (0, n.jsx)(s.z, { onClick: () => t(l || ""), variant: a ? "insightsFilled" : "insightsGhost", size: "xSmallCompact", children: (0, n.jsx)("div", { className: (0, i.cn)("text-subtext3", { "font-bold": a, "font-normal": !a }), children: e }) });
        },
        283840: (e, l, a) => {
            a.d(l, { d: () => s, s: () => n });
            const n = 864e5,
                s = 36e5;
        },
        187468: (e, l, a) => {
            a.d(l, { H: () => c });
            var n = a(552322),
                s = a(447818),
                i = a(430962),
                t = a(595133),
                r = a(833819),
                u = a(742266),
                d = a(749612);
            const c = ({ settings: e }) => {
                const { business: l } = (0, i.M1)();
                return (0, n.jsx)(d.Kw, { settings: e, children: (0, n.jsxs)("div", { className: "flex h-full flex-col gap-[10px] p-2 md:p-4", children: [(0, n.jsx)(t.h, { title: l.radar.header, Icon: (0, n.jsx)(s.Z, { className: "text-text size-7" }), beta: !1, className: "flex", children: (0, n.jsx)(u.i, { fullWidth: !0 }) }), (0, n.jsx)(r.e, {})] }) });
            };
        },
        440638: (e, l, a) => {
            a.d(l, { u: () => r });
            var n = a(552322),
                s = a(959638),
                i = a(797165),
                t = a(749612);
            function r({ id: e, settings: l }) {
                return (0, n.jsx)(t.Kw, { settings: l, children: (0, n.jsx)(s.NR, { id: e, children: (0, n.jsx)(i.V, {}) }) });
            }
        },
        122778: (e, l, a) => {
            a.d(l, { w: () => d });
            var n = a(552322),
                s = a(193686),
                i = a(202784),
                t = a(749612),
                r = a(832138),
                u = a(704877);
            const d = ({ settings: e }) => (0, n.jsx)(t.Kw, { settings: e, children: (0, n.jsx)(u.Wi, { children: (0, n.jsx)(i.Suspense, { fallback: (0, n.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: (0, n.jsx)(s.P, { size: "large", color: "text" }) }), children: (0, n.jsx)(r.L, {}) }) }) });
        },
        602077: (e, l, a) => {
            a.d(l, { M: () => s });
            const n = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc" });
            function s(e) {
                return Math.abs(e) < 1e4 ? Intl.NumberFormat("en-US").format(e) : n.format(e);
            }
        },
        942346: (e, l, a) => {
            a.d(l, { j: () => n });
            const n = ({ granularity: e, id: l, timeRange: a }) => ({ from_time: Math.floor(a.fromDate.getTime() / 1e3), granularity: e, id: l, timezone_offset: 0, to_time: Math.floor(a.toDate.getTime() / 1e3) });
        },
        598018: (e, l, a) => {
            a.d(l, { r: () => n });
            a(889906);
            const n = a(157270);
        },
        157270: (e, l, a) => {
            a.r(l), a.d(l, { default: () => s });
            const n = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AiTrend",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, action: "THROW" },
                        { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "thumbnail", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "AiTrendCore",
                                kind: "LinkedField",
                                name: "core",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "category", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            action: "THROW",
                        },
                    ],
                    type: "AiTrend",
                    abstractKey: null,
                    hash: "d4fd83e7d283712a1b27c03bf4ab28ff",
                },
                s = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-44c9904f.3fa7e17a.js.map

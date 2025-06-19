"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-aa110117"],
    {
        127229: (e, l, a) => {
            a.r(l), a.d(l, { default: () => o });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "limit" }), (r = { defaultValue: null, kind: "LocalArgument", name: "query" }), (t = { defaultValue: null, kind: "LocalArgument", name: "score_threshold" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "AiTrendsSearchQuery",
                    selections: [
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "raw_query", variableName: "query" },
                                    { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                                ]),
                                concreteType: "SearchQuery",
                                kind: "LinkedField",
                                name: "search_by_raw_query",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "RequiredField",
                                        field: {
                                            alias: null,
                                            args: (u = [
                                                { kind: "Variable", name: "limit", variableName: "limit" },
                                                { kind: "Variable", name: "score_threshold", variableName: "score_threshold" },
                                            ]),
                                            concreteType: "TrendSearchResult",
                                            kind: "LinkedField",
                                            name: "trend_embedding_search",
                                            plural: !0,
                                            selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "AiTrend" }], type: "AiTrend", abstractKey: null }], storageKey: null }], storageKey: null }, action: "THROW" }],
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
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [r, i, t],
                    kind: "Operation",
                    name: "AiTrendsSearchQuery",
                    selections: [
                        {
                            alias: null,
                            args: s,
                            concreteType: "SearchQuery",
                            kind: "LinkedField",
                            name: "search_by_raw_query",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: u,
                                    concreteType: "TrendSearchResult",
                                    kind: "LinkedField",
                                    name: "trend_embedding_search",
                                    plural: !0,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "AiTrendResults",
                                            kind: "LinkedField",
                                            name: "trend_results",
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
                                                        d,
                                                        {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                                c,
                                                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "thumbnail", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                                                                {
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
                                                            ],
                                                            type: "AiTrend",
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
                                    storageKey: null,
                                },
                                c,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "iwftVNV6XWcIat1y9m2n8Q", metadata: {}, name: "AiTrendsSearchQuery", operationKind: "query", text: null },
            };
            var i, r, t, s, u, d, c;
            n.hash = "3c3d851b96124d43feddc0c866686ed8";
            const o = n;
        },
        844823: (e, l, a) => {
            a.d(l, { f: () => d });
            var n = a(552322),
                i = a(332161),
                r = a(889906),
                t = a(430962),
                s = a(832751);
            const u = a(127229),
                d = ({ limit: e, query: l, scoreThreshold: a }) => {
                    const d = (0, r.useLazyLoadQuery)(u, { limit: e, query: l, score_threshold: a }),
                        { business: c } = (0, t.M1)(),
                        o = (d.search_by_raw_query.trend_embedding_search || [])
                            .map((e) => {
                                const l = e.trend_results.result;
                                return l && "AiTrend" === l.__typename ? l : null;
                            })
                            .filter((e) => null !== e);
                    return (0, n.jsx)("div", { className: "max-md:hide-scrollbar flex flex-col gap-4 overflow-y-scroll max-md:p-2", children: o.length > 0 ? o.map((e) => (0, n.jsx)(s.A, { aiTrend: e }, e.id)) : (0, n.jsx)(i.x, { color: "gray700", size: "subtext1", children: c.radar.noTrendsAvailable }) });
                };
        },
        833819: (e, l, a) => {
            a.d(l, { e: () => h });
            var n = a(552322),
                i = a(446368),
                r = a(332161),
                t = a(993165),
                s = a(202784),
                u = a(968025),
                d = a(430962),
                c = a(749612),
                o = a(704877),
                m = a(256958),
                g = a(889906),
                y = a(915574),
                p = a(437915);
            const _ = a(633402),
                k = () => {
                    const { business: e } = (0, d.M1)(),
                        l = (0, c.nO)(),
                        a = (0, u.t)(),
                        r = (0, i.$8)(),
                        t = (0, c.ro)(),
                        o = (0, c.Iw)() > 1,
                        k = (0, c.HZ)(),
                        [h, f] = (0, s.useState)(""),
                        [b, x] = (0, g.useMutation)(_),
                        F = (n) => {
                            const i = { advanced_query: n.trim(), notifications_enabled: k, title: o ? "" : "Explore X" };
                            b({
                                onCompleted: (n) => {
                                    "InsightRuleMutationSuccess" === n.create_insight_rule_v2?.__typename ? (r.scribe({ action: "create", element: "create_insight_input", page: "insights_create" }), a.push(`${l}/${n.create_insight_rule_v2.result.rest_id}`)) : m.Am.error(e.radar.failedToCreateQuery);
                                },
                                onError: (l) => {
                                    r.scribe({ action: "error", component: "create_insight_input", data: l, element: "explore_results", page: "insights", section: "create_insight" }), m.Am.error(e.radar.failedToCreateQuery);
                                },
                                variables: i,
                            }),
                                r.scribe({ action: "click", component: "create_insight_input", data: { advanced_query: n.trim() }, element: "explore_results", page: "insights", section: "create_insight" });
                        };
                    return (0, n.jsxs)("div", { className: "flex w-full max-w-xl flex-col items-center gap-8", children: [(0, n.jsx)("div", { className: "text-title3 md:text-title2 text-balance text-center font-bold", children: e.radar.newQueryTitle }), t ? (0, n.jsx)(y.Z, { query: h, onSubmit: ({ query: e }) => F(e), followUpEnabled: !1 }) : (0, n.jsx)(p.U, { query: h, onQueryChange: f, onSubmit: () => F(h), disabled: x })] });
                },
                h = () => {
                    const e = (0, o.Rv)(),
                        l = (0, u.t)(),
                        { business: a } = (0, d.M1)(),
                        m = (0, c.nO)(),
                        g = (0, c.Iw)(),
                        y = (0, i.$8)();
                    return (
                        (0, s.useEffect)(() => {
                            y.scribe({ action: "impression", page: "insights_create" });
                        }, [y]),
                        e >= g ? (0, n.jsxs)("div", { className: "flex h-full w-full flex-1 flex-col items-center justify-center gap-8 p-2", children: [(0, n.jsx)(r.x, { size: "headline1", weight: "extrabold", color: "text", children: a.radar.maxQueries }), (0, n.jsx)(t.z, { onClick: () => l.push(`${m}`), variant: "insightsBright", children: a.radar.allQueries })] }) : (0, n.jsx)("div", { className: "text-text flex h-full w-full flex-1 flex-col items-center justify-start gap-8 p-2 pt-20 md:pt-40", children: (0, n.jsx)(k, {}) })
                    );
                };
        },
        633402: (e, l, a) => {
            a.r(l), a.d(l, { default: () => m });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "advanced_query" }), (r = { defaultValue: null, kind: "LocalArgument", name: "notifications_enabled" }), (t = { defaultValue: null, kind: "LocalArgument", name: "tags" }), (s = { defaultValue: null, kind: "LocalArgument", name: "title" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "CreateInsightInputQuery",
                    selections: [
                        {
                            alias: null,
                            args: (u = [
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
                                (d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                (c = {
                                    kind: "InlineFragment",
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null },
                                    ],
                                    type: "InsightRuleFailure",
                                    abstractKey: null,
                                }),
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [t, s, i, r], kind: "Operation", name: "CreateInsightInputQuery", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_insight_rule_v2", plural: !1, selections: [d, c, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "AsXpgHWLsyD3H-L-VY679g", metadata: {}, name: "CreateInsightInputQuery", operationKind: "mutation", text: null },
            };
            var i, r, t, s, u, d, c, o;
            n.hash = "74217917e786c67f9ee50cfb77935d1f";
            const m = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-aa110117.0055f4ea.js.map

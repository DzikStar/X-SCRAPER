"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-1517057a"],
    {
        834629: (e, l, n) => {
            n.d(l, { G: () => a });
            n(889906);
            const a = n(281510);
        },
        281510: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            const a = {
                fragment: {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "InsightsConfigQuery",
                    selections: [
                        {
                            alias: null,
                            args: (i = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
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
                                                                (r = {
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
                operation: { argumentDefinitions: [], kind: "Operation", name: "InsightsConfigQuery", selections: [{ alias: null, args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "insights_config", plural: !1, selections: [s, r], storageKey: null }, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, t], storageKey: null }], storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")' }] },
                params: { id: "hdbRC13HoA2I5Vhj3b5nTQ", metadata: {}, name: "InsightsConfigQuery", operationKind: "query", text: null },
            };
            var i, r, s, t;
            a.hash = "14ce9c9d95cd163f5a71254bebb3ed0a";
            const u = a;
        },
        29674: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            const a = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "original_query" }), (r = { defaultValue: null, kind: "LocalArgument", name: "previous_query" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "QueryInputMutation",
                    selections: [
                        {
                            alias: null,
                            args: (s = [
                                { kind: "Variable", name: "original_query", variableName: "original_query" },
                                { kind: "Variable", name: "previous_query", variableName: "previous_query" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "build_insight_query",
                            plural: !1,
                            selections: [(t = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "built_query", storageKey: null }], type: "BuildFromOriginalQuerySuccess", abstractKey: null })],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [r, i], kind: "Operation", name: "QueryInputMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "build_insight_query", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: null }] },
                params: { id: "B4lyhwSVWvpY9TXuelOSaw", metadata: {}, name: "QueryInputMutation", operationKind: "mutation", text: null },
            };
            var i, r, s, t;
            a.hash = "6ad15f783ae5fb920e5ae5528c1d4a3f";
            const u = a;
        },
        915574: (e, l, n) => {
            n.d(l, { Z: () => p });
            var a = n(552322),
                i = n(446368),
                r = n(256958),
                s = n(694135),
                t = n(687521),
                u = n(993165),
                o = n(332161),
                d = n(14313),
                c = n(840489),
                g = n(202784),
                y = n(889906),
                m = (n(703383), n(430962));
            function p({ followUpEnabled: e = !0, onCancel: l, onSubmit: n, query: p, usePreviousQuery: b }) {
                const { business: k } = (0, m.M1)(),
                    [h, f] = (0, g.useState)(""),
                    v = (0, i.$8)(),
                    [x, F] = (0, g.useState)([]),
                    [w, K] = (0, g.useState)(p || ""),
                    [q, S] = (0, g.useState)(!!p),
                    [j, C] = (0, y.useMutation)(_),
                    I = () => {
                        h.trim() &&
                            j({
                                onCompleted: (l) => {
                                    l.build_insight_query?.built_query && (e ? (v.scribe({ action: "generate", component: "nlp_query_input", data: { is_follow_up: q }, page: "insights" }), K(l.build_insight_query?.built_query), S(!0), F((e) => [...e, h.trim()]), f("")) : n({ query: l.build_insight_query?.built_query, submittedPrompts: [h.trim()] }));
                                },
                                onError: () => {
                                    S(!0), r.Am.error(k.radar.failedToGenerateQuery), v.scribe({ action: "generate_failure", component: "nlp_query_input", page: "insights" });
                                },
                                variables: { original_query: `${x.join(", ")}, ${h.trim()}`, previous_query: b ? w : void 0 },
                            });
                    };
                return (0, a.jsxs)("div", {
                    className: "mx-auto w-full max-w-2xl px-2",
                    children: [
                        (0, a.jsx)(s.E, {
                            className: "mt-4 flex p-0",
                            direction: "counterclockwise",
                            speed: 4,
                            enabled: !e && C,
                            borderWidth: 3,
                            borderRadius: "full",
                            children: (0, a.jsx)("div", {
                                className: "rounded-full w-full bg-gray-50/50",
                                children: (0, a.jsx)(t._, {
                                    autoFocus: !0,
                                    value: h,
                                    onChange: (e) => {
                                        f(e.currentTarget.value);
                                    },
                                    onKeyDown: (e) => {
                                        "Enter" === e.key && h.trim().length > 0 && (e.preventDefault(), I());
                                    },
                                    placeholder: x.length > 0 ? k.radar.queryInputPlaceholderFollowUp : k.radar.queryInputPlaceholder,
                                    rightContent: (0, a.jsx)(u.z, { className: "mr-2 px-0", variant: "insightsBright", size: "xSmallCompact", onClick: I, disabled: 0 === h.trim().length, children: (0, a.jsx)(d.Z, { className: "text-background size-[14px] font-bold" }) }),
                                }),
                            }),
                        }),
                        e && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "subtext2 px-1 py-2 text-gray-700", children: x.join(", ") }), (0, a.jsx)("div", { className: (0, c.Z)("flex w-full flex-col gap-2 overflow-hidden transition-[height] duration-1000"), children: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(o.x, { color: "gray900", size: "subtext1", className: "px-1", children: [k.radar.query, ":"] }), (0, a.jsx)(s.E, { className: "p-0", direction: "counterclockwise", speed: 4, enabled: C, children: (0, a.jsx)("textarea", { value: w, disabled: C, onChange: (e) => K(e.currentTarget.value), contentEditable: w.length > 0, className: (0, c.Z)("rounded-2xl text-subtext1 hide-scrollbar block aspect-square h-20 w-full resize-none border p-2 outline-none", { "bg-gray-50 text-gray-700": C, "focus-within:border-primary bg-gray-50/50 text-gray-900": !C && q }) }) })] }) }), (0, a.jsxs)("div", { className: "mt-4 flex justify-between gap-2", children: [(0, a.jsx)(u.z, { variant: "insightsSecondary", onClick: l, children: "Cancel" }), (0, a.jsx)(u.z, { variant: "insightsBright", className: "rounded", disabled: !w.trim(), onClick: () => n({ query: w.trim(), submittedPrompts: x }), children: "Submit" })] })] }),
                    ],
                });
            }
            const _ = n(29674);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-1517057a.4ef988aa.js.map

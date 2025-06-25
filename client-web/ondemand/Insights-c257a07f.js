"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-c257a07f"],
    {
        264735: (e, l, n) => {
            n.r(l), n.d(l, { default: () => _ });
            const a = {
                fragment: {
                    argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "InsightProviderGetQuery",
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
                                                                        kind: "RequiredField",
                                                                        field: {
                                                                            alias: null,
                                                                            args: (s = [{ kind: "Variable", name: "id", variableName: "id" }]),
                                                                            concreteType: "ApiInsightRule",
                                                                            kind: "LinkedField",
                                                                            name: "insight_rule_by_id",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), action: "THROW" },
                                                                                { kind: "RequiredField", field: { alias: null, args: null, concreteType: "InsightRuleCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (u = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), action: "THROW" }, (o = { alias: null, args: null, kind: "ScalarField", name: "tags", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "advanced_query", storageKey: null }), { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }), action: "THROW" }, { kind: "RequiredField", field: (m = { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }), action: "THROW" }, (g = { alias: null, args: null, kind: "ScalarField", name: "notifications_enabled", storageKey: null })], storageKey: null }, action: "THROW" },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        action: "THROW",
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
                    name: "InsightProviderGetQuery",
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
                                                { kind: "InlineFragment", selections: [{ alias: null, args: s, concreteType: "ApiInsightRule", kind: "LinkedField", name: "insight_rule_by_id", plural: !1, selections: [r, { alias: null, args: null, concreteType: "InsightRuleCore", kind: "LinkedField", name: "core", plural: !1, selections: [u, o, d, c, m, g], storageKey: null }, (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, y], type: "User", abstractKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        y,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                        },
                    ],
                },
                params: { id: "budp7YfzYNiuQbMvVRq3Vg", metadata: {}, name: "InsightProviderGetQuery", operationKind: "query", text: null },
            };
            var t, i, s, r, u, o, d, c, m, g, y;
            a.hash = "605cda9c03f7b1df5df6b95c68790d85";
            const _ = a;
        },
        600894: (e, l, n) => {
            n.r(l), n.d(l, { default: () => g });
            const a = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "advanced_query" }), (i = { defaultValue: null, kind: "LocalArgument", name: "id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "notifications_enabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "tags" }), (u = { defaultValue: null, kind: "LocalArgument", name: "title" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "InsightProviderUpdateMutation",
                    selections: [
                        {
                            alias: null,
                            args: (o = [
                                { kind: "Variable", name: "advanced_query", variableName: "advanced_query" },
                                { kind: "Variable", name: "id", variableName: "id" },
                                { kind: "Variable", name: "notifications_enabled", variableName: "notifications_enabled" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                                { kind: "Variable", name: "tags", variableName: "tags" },
                                { kind: "Variable", name: "title", variableName: "title" },
                            ]),
                            concreteType: null,
                            kind: "LinkedField",
                            name: "update_insight_rule_v2",
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
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Mutation",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [i, u, r, t, s], kind: "Operation", name: "InsightProviderUpdateMutation", selections: [{ alias: null, args: o, concreteType: null, kind: "LinkedField", name: "update_insight_rule_v2", plural: !1, selections: [d, c, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiInsightRule", kind: "LinkedField", name: "result", plural: !1, selections: [m, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "InsightRuleMutationSuccess", abstractKey: null }], storageKey: null }] },
                params: { id: "DEkhh6WQKPbu_snkjlAkdw", metadata: {}, name: "InsightProviderUpdateMutation", operationKind: "mutation", text: null },
            };
            var t, i, s, r, u, o, d, c, m;
            a.hash = "71ff6f7d0ca4b0ec3f6df9496442b512";
            const g = a;
        },
        355644: (e, l, n) => {
            n.r(l), n.d(l, { default: () => y });
            const a = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (s = { defaultValue: null, kind: "LocalArgument", name: "id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "timezone_offset" }), (u = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMatchedPostMetricsQuery",
                    selections: [
                        {
                            alias: null,
                            args: (o = [{ kind: "Literal", name: "safety_level", value: "UserProfileHeader" }]),
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
                                                            args: (d = [{ kind: "Variable", name: "id", variableName: "id" }]),
                                                            concreteType: "ApiInsightRule",
                                                            kind: "LinkedField",
                                                            name: "insight_rule_by_id",
                                                            plural: !1,
                                                            selections: [
                                                                (m = {
                                                                    alias: null,
                                                                    args: [
                                                                        { kind: "Variable", name: "from_time", variableName: "from_time" },
                                                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                                        { kind: "Variable", name: "timezone_offset", variableName: "timezone_offset" },
                                                                        { kind: "Variable", name: "to_time", variableName: "to_time" },
                                                                    ],
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "matched_post_metrics",
                                                                    plural: !1,
                                                                    selections: [
                                                                        (c = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "estimated_unique_users", storageKey: null },
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "InsightsHistogramBin",
                                                                                    kind: "LinkedField",
                                                                                    name: "impressions",
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            type: "MatchedPostMetricsSuccess",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
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
                            storageKey: 'viewer_v2(safety_level:"UserProfileHeader")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [t, u, i, s, r], kind: "Operation", name: "useMatchedPostMetricsQuery", selections: [{ alias: null, args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [c, { kind: "InlineFragment", selections: [{ alias: null, args: d, concreteType: "ApiInsightRule", kind: "LinkedField", name: "insight_rule_by_id", plural: !1, selections: [m, (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, g], type: "User", abstractKey: null }], storageKey: null }, g], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserProfileHeader")' }] },
                params: { id: "dRcx9P_of0hYEToWkwphRg", metadata: {}, name: "useMatchedPostMetricsQuery", operationKind: "query", text: null },
            };
            var t, i, s, r, u, o, d, c, m, g;
            a.hash = "de0f199b4f8f91ed18c2f3650fea37bf";
            const y = a;
        },
        898341: (e, l, n) => {
            n.r(l), n.d(l, { default: () => v });
            const a = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "cursor_to_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (s = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (r = { defaultValue: null, kind: "LocalArgument", name: "id" }), (u = { defaultValue: null, kind: "LocalArgument", name: "include_impressions" }), (o = { defaultValue: null, kind: "LocalArgument", name: "include_total_posts" }), (d = { defaultValue: null, kind: "LocalArgument", name: "timezone_offset" }), (c = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "usePaginatePostMetricsQuery",
                    selections: [
                        {
                            alias: null,
                            args: (m = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
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
                                                            args: (g = [{ kind: "Variable", name: "id", variableName: "id" }]),
                                                            concreteType: "ApiInsightRule",
                                                            kind: "LinkedField",
                                                            name: "insight_rule_by_id",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: (y = [
                                                                        { kind: "Variable", name: "cursor_to_time", variableName: "cursor_to_time" },
                                                                        { kind: "Variable", name: "from_time", variableName: "from_time" },
                                                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                                        { kind: "Variable", name: "include_impressions", variableName: "include_impressions" },
                                                                        { kind: "Variable", name: "include_total_posts", variableName: "include_total_posts" },
                                                                        { kind: "Variable", name: "timezone_offset", variableName: "timezone_offset" },
                                                                        { kind: "Variable", name: "to_time", variableName: "to_time" },
                                                                    ]),
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "paginate_post_metrics",
                                                                    plural: !1,
                                                                    selections: [
                                                                        (_ = {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "cursor_time", storageKey: null },
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "InsightsHistogramBin",
                                                                                    kind: "LinkedField",
                                                                                    name: "impressions",
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_posts", storageKey: null },
                                                                            ],
                                                                            type: "PaginatedSearchQueryMetricsSuccess",
                                                                            abstractKey: null,
                                                                        }),
                                                                        (k = {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null },
                                                                            ],
                                                                            type: "InsightRuleFailure",
                                                                            abstractKey: null,
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
                operation: { argumentDefinitions: [r, i, c, t, d, s, u, o], kind: "Operation", name: "usePaginatePostMetricsQuery", selections: [{ alias: null, args: m, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: g, concreteType: "ApiInsightRule", kind: "LinkedField", name: "insight_rule_by_id", plural: !1, selections: [{ alias: null, args: y, concreteType: null, kind: "LinkedField", name: "paginate_post_metrics", plural: !1, selections: [p, _, k], storageKey: null }, (f = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, f], type: "User", abstractKey: null }], storageKey: null }, f], storageKey: null }], storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")' }] },
                params: { id: "WJ_GGwVKhLjsVBHYa4CTWA", metadata: {}, name: "usePaginatePostMetricsQuery", operationKind: "query", text: null },
            };
            var t, i, s, r, u, o, d, c, m, g, y, _, k, p, f;
            a.hash = "8cd4440cf9c3a45d6fef0832f1aaa8bb";
            const v = a;
        },
        899129: (e, l, n) => {
            n.r(l), n.d(l, { default: () => k });
            const a = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (s = { defaultValue: null, kind: "LocalArgument", name: "id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "timezone_offset" }), (u = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "usePostCountQuery",
                    selections: [
                        {
                            alias: null,
                            args: (o = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
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
                                                            args: (d = [{ kind: "Variable", name: "id", variableName: "id" }]),
                                                            concreteType: "ApiInsightRule",
                                                            kind: "LinkedField",
                                                            name: "insight_rule_by_id",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: (c = [
                                                                        { kind: "Variable", name: "from_time", variableName: "from_time" },
                                                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                                        { kind: "Variable", name: "timezone_offset", variableName: "timezone_offset" },
                                                                        { kind: "Variable", name: "to_time", variableName: "to_time" },
                                                                    ]),
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "matched_post_counts",
                                                                    plural: !1,
                                                                    selections: [
                                                                        (m = {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "InsightsPostsCount",
                                                                                    kind: "LinkedField",
                                                                                    name: "counts",
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "has_incomplete_counts", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "oldest_complete_count", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total", storageKey: null },
                                                                            ],
                                                                            type: "InsightsMatchedPostCountsSuccess",
                                                                            abstractKey: null,
                                                                        }),
                                                                        (g = {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null },
                                                                            ],
                                                                            type: "InsightRuleFailure",
                                                                            abstractKey: null,
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
                operation: { argumentDefinitions: [t, u, i, s, r], kind: "Operation", name: "usePostCountQuery", selections: [{ alias: null, args: o, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: d, concreteType: "ApiInsightRule", kind: "LinkedField", name: "insight_rule_by_id", plural: !1, selections: [{ alias: null, args: c, concreteType: null, kind: "LinkedField", name: "matched_post_counts", plural: !1, selections: [y, m, g], storageKey: null }, (_ = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, _], type: "User", abstractKey: null }], storageKey: null }, _], storageKey: null }], storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")' }] },
                params: { id: "bcYnBtV-7Mr_vbWIY4utWA", metadata: {}, name: "usePostCountQuery", operationKind: "query", text: null },
            };
            var t, i, s, r, u, o, d, c, m, g, y, _;
            a.hash = "4f9b5b466e2c286f25b5dcf8cdf4c400";
            const k = a;
        },
        108506: (e, l, n) => {
            n.d(l, { C: () => s });
            var a = n(202784),
                t = n(889906),
                i = n(942346);
            const s = ({ chartZoom: e = null, fetchKey: l, granularity: n = "Day", ruleId: s, timeRange: u }) => {
                    const [o, d] = (0, a.useState)((0, i.j)({ granularity: n, id: s, timeRange: u })),
                        c = (0, t.useLazyLoadQuery)(r, o, { fetchKey: l ?? void 0, fetchPolicy: "network-only" });
                    (0, a.useEffect)(() => {
                        const e = (0, i.j)({ granularity: n, id: s, timeRange: u });
                        d(e);
                    }, [n, s, u]);
                    const {
                        impressionsTimeSeries: m,
                        totalImpressions: g,
                        uniqueUsers: y,
                    } = (0, a.useMemo)(() => {
                        const l = c.viewer_v2?.user_results?.result?.insight_rule_by_id?.matched_post_metrics;
                        if ("MatchedPostMetricsSuccess" !== l?.__typename) return { impressionsTimeSeries: [], totalImpressions: 0, uniqueUsers: 0 };
                        const n = l.impressions ?? [],
                            a = n.map((e) => ({ count: e?.count ?? null, incompleteCount: null, startDate: new Date(1e3 * (e?.start_time ?? 0)) }));
                        if (!e) {
                            const e = Number(l.estimated_unique_users ?? 0);
                            return { impressionsTimeSeries: a, totalImpressions: n.reduce((e, l) => e + (l?.count ?? 0), 0), uniqueUsers: e };
                        }
                        const t = e.fromDate.getTime() / 1e3,
                            i = e.toDate.getTime() / 1e3,
                            s = n.filter((e) => {
                                const l = e?.start_time ?? 0;
                                return l >= t && l < i;
                            });
                        return { impressionsTimeSeries: a, totalImpressions: s.reduce((e, l) => e + (l?.count ?? 0), 0), uniqueUsers: Math.round((Number(l.estimated_unique_users ?? 0) * s.length) / n.length) };
                    }, [c, e]);
                    return { impressionsTimeSeries: m, totalImpressions: g, uniqueUsers: y };
                },
                r = n(355644);
        },
        658087: (e, l, n) => {
            n.d(l, { l: () => s });
            var a = n(202784),
                t = n(889906),
                i = n(942346);
            const s = ({ chartZoom: e = null, fetchKey: l, granularity: n = "Day", ruleId: s, timeRange: o }) => {
                    const c = (0, t.useRelayEnvironment)(),
                        [m, g] = (0, a.useState)((0, i.j)({ granularity: n, id: s, timeRange: o })),
                        [y, _] = (0, a.useState)([]),
                        k = (0, a.useRef)(m),
                        p = (0, t.useLazyLoadQuery)(r, { ...m, cursor_to_time: m.to_time }, { fetchKey: l ?? void 0, networkCacheConfig: { force: !1 } }),
                        f = (0, a.useRef)(y);
                    (0, a.useEffect)(() => {
                        const e = (0, i.j)({ granularity: n, id: s, timeRange: o });
                        g(e), (k.current = e), (f.current = []), _([]);
                    }, [n, s, o]);
                    const v = (0, a.useCallback)(
                        async (e) => {
                            const l = await (0, t.fetchQuery)(c, r, { ...k.current, cursor_to_time: e }).toPromise();
                            if (l) {
                                const e = l.viewer_v2?.user_results?.result?.insight_rule_by_id?.paginate_post_metrics,
                                    n = e?.cursor_time,
                                    a = u(l, f.current);
                                _(a), (f.current = a), n && n !== k.current.from_time && v(n);
                            }
                        },
                        [c],
                    );
                    (0, a.useEffect)(() => {
                        const e = p.viewer_v2?.user_results?.result?.insight_rule_by_id?.paginate_post_metrics;
                        if (!e) return;
                        const l = d(p);
                        _(l), (f.current = l);
                        const n = e?.cursor_time;
                        n && n !== k.current.from_time && v(n);
                    }, [p, v]);
                    const F = (0, a.useMemo)(() => {
                        if (!e) return y.reduce((e, l) => e + (l.count || 0), 0);
                        const l = y.findIndex((l) => l.startDate.getTime() === e.fromDate.getTime()),
                            n = y.findIndex((l) => l.startDate.getTime() === e.toDate.getTime());
                        return y.slice(l, n).reduce((e, l) => e + (l.count || 0), 0);
                    }, [y, e]);
                    return { impressionsTimeSeries: y, granularity: n, totalImpressions: F };
                },
                r = n(898341),
                u = (e, l) => {
                    const n = d(e);
                    if (0 === l.length) return n;
                    const a = e.viewer_v2?.user_results?.result?.insight_rule_by_id?.paginate_post_metrics,
                        t = a?.cursor_time,
                        i = !t,
                        s = [];
                    let r = l.length - 1,
                        u = n.length - 1;
                    for (; r >= 0 && u >= 0; ) {
                        const e = l[r],
                            a = n[u];
                        if (void 0 === e || void 0 === a) break;
                        const t = o(a) + o(e),
                            d = { count: i ? t : null, incompleteCount: i ? null : t, startDate: e.startDate };
                        s.push(d), (r -= 1), (u -= 1);
                    }
                    for (; r >= 0; ) {
                        const e = l[r];
                        if (void 0 === e) break;
                        s.push(e), (r -= 1);
                    }
                    for (; u >= 0; ) {
                        const e = n[u];
                        if (void 0 === e) break;
                        s.push(e), (u -= 1);
                    }
                    return s.reverse(), s;
                },
                o = (e) => (e.count ? e.count : e.incompleteCount ? e.incompleteCount : 0),
                d = (e) => {
                    const l = e.viewer_v2?.user_results?.result?.insight_rule_by_id?.paginate_post_metrics,
                        n = [],
                        a = l?.cursor_time;
                    return (
                        l?.impressions?.forEach((e) => {
                            const l = !a,
                                t = { count: l ? e.count : null, incompleteCount: l ? null : e.count, startDate: new Date(1e3 * e.start_time) };
                            n.push(t);
                        }),
                        n
                    );
                };
        },
        536531: (e, l, n) => {
            n.d(l, { i: () => s });
            var a = n(202784),
                t = n(889906),
                i = n(942346);
            const s = ({ chartZoom: e = null, fetchKey: l, granularity: n = "Day", ruleId: s, timeRange: o }) => {
                    const d = (0, t.useRelayEnvironment)(),
                        [c, m] = (0, a.useState)((0, i.j)({ granularity: n, id: s, timeRange: o })),
                        [g, y] = (0, a.useState)([]),
                        _ = (0, a.useRef)(c),
                        k = (0, t.useLazyLoadQuery)(r, c, { fetchKey: l ?? void 0, fetchPolicy: "network-only" }),
                        p = (0, a.useRef)(g);
                    (0, a.useEffect)(() => {
                        const e = (0, i.j)({ granularity: n, id: s, timeRange: o });
                        m(e), (_.current = e), (p.current = []);
                    }, [n, s, o]);
                    const f = (0, a.useCallback)(
                        async (e) => {
                            const l = await (0, t.fetchQuery)(d, r, { ..._.current, to_time: e }).toPromise();
                            if (l) {
                                const { timeSeriesData: e } = u(l, p.current),
                                    n = l.viewer_v2?.user_results?.result?.insight_rule_by_id?.matched_post_counts,
                                    a = p.current.map((l, n) => (e[n] ? e[n] : l));
                                y(a), (p.current = a);
                                const t = n?.has_incomplete_counts,
                                    i = n?.oldest_complete_count;
                                t && i && i !== ((e) => (e[0]?.startDate.getTime() || 0) / 1e3)(e) && f(i);
                            }
                        },
                        [d],
                    );
                    (0, a.useEffect)(() => {
                        const e = k.viewer_v2?.user_results?.result?.insight_rule_by_id?.matched_post_counts;
                        if (!e) return;
                        const { timeSeriesData: l } = u(k, p.current);
                        y(l), (p.current = l);
                        const n = e.has_incomplete_counts,
                            a = e.oldest_complete_count,
                            t = (l.at(0)?.startDate.getTime() || 0) / 1e3;
                        n && a && a !== t && f(a);
                    }, [k, f]);
                    const v = (0, a.useMemo)(() => {
                        if (!e) return g.reduce((e, l) => e + (l.count || 0), 0);
                        const l = g.findIndex((l) => l.startDate.getTime() === e.fromDate.getTime()),
                            n = g.findIndex((l) => l.startDate.getTime() === e.toDate.getTime());
                        return g.slice(l, n).reduce((e, l) => e + (l.count || 0), 0);
                    }, [g, e]);
                    return { countTimeSeries: g, granularity: n, totalCount: v };
                },
                r = n(899129),
                u = (e, l) => {
                    const n = e.viewer_v2?.user_results?.result?.insight_rule_by_id?.matched_post_counts,
                        a = [],
                        t = n?.oldest_complete_count,
                        i = (l[0]?.startDate.getTime() || 0) / 1e3,
                        s = (t || i) === i;
                    n?.counts?.forEach((e) => {
                        const l = !t || e.start_time >= t,
                            n = e.start_time === t,
                            i = { count: l ? e.count : null, incompleteCount: (l && !n) || s ? null : e.count, startDate: new Date(1e3 * e.start_time) };
                        a.push(i);
                    });
                    return { count: (n?.total || 0) + l.reduce((e, l) => e + (l.count || 0), 0), timeSeriesData: a };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-c257a07f.0c472a9a.js.map

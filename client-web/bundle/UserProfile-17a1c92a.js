"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-17a1c92a"],
    {
        961746: (e, l, a) => {
            a.d(l, { U: () => n });
            const n = Object.freeze({ Badge: "Badge", Inline: "Inline" });
        },
        493292: (e, l, a) => {
            a.d(l, { P: () => n });
            const n = Object.freeze({ AutomatedLabel: "AutomatedLabel", BusinessLabel: "BusinessLabel", ElectionsLabel: "ElectionsLabel", GenericBadgeLabel: "GenericBadgeLabel", GenericInfoLabel: "GenericInfoLabel", OfficialLabel: "OfficialLabel", Reserved4: "Reserved4", Reserved5: "Reserved5", Reserved6: "Reserved6", Reserved7: "Reserved7" });
        },
        300785: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                t,
                s,
                r,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "promptPurpose" }), (i = { defaultValue: null, kind: "LocalArgument", name: "screenName" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "isEligibleForVoButtonUpsellQuery",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Literal", name: "s", value: "13e8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: [{ kind: "Variable", name: "prompt_purpose", variableName: "promptPurpose" }], kind: "ScalarField", name: "is_active_vo_upsell_candidate", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, n],
                        kind: "Operation",
                        name: "isEligibleForVoButtonUpsellQuery",
                        selections: [
                            {
                                alias: null,
                                args: t,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            { kind: "InlineFragment", selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "BuWF9hiwmUyFdGo3J4DqbA", metadata: {}, name: "isEligibleForVoButtonUpsellQuery", operationKind: "query", text: null },
                };
            u.hash = "bb3c6372d2d5f22d5000ce2f3076777b";
            const d = u;
        },
        720672: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n,
                i,
                t,
                s,
                r,
                u,
                d,
                c,
                o,
                m,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (t = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "overviewDataPostQuery",
                        selections: [
                            {
                                alias: "result",
                                args: (u = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
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
                                                        args: (d = [
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                            { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                            { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                        ]),
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), action: "THROW" }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ kind: "RequiredField", field: (m = { alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }), action: "THROW" }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, t, r, n, i],
                        kind: "Operation",
                        name: "overviewDataPostQuery",
                        selections: [
                            {
                                alias: "result",
                                args: u,
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
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
                                                    {
                                                        alias: null,
                                                        args: d,
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: [c, o], storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [m], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    g,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "9c83mWUXFc4RuVLInF9SOQ", metadata: {}, name: "overviewDataPostQuery", operationKind: "query", text: null },
                };
            y.hash = "3e329b2fa4cfbf47558b5d9fe8e7efe9";
            const k = y;
        },
        828253: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n,
                i,
                t,
                s,
                r,
                u,
                d,
                c,
                o,
                m,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (t = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "overviewDataUserQuery",
                        selections: [
                            {
                                alias: "result",
                                args: (u = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "2238" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                        args: (d = [
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                            { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                            { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                        ]),
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { kind: "RequiredField", field: (o = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), action: "THROW" }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ kind: "RequiredField", field: (m = { alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }), action: "THROW" }], storageKey: null },
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
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, t, r, n, i],
                        kind: "Operation",
                        name: "overviewDataUserQuery",
                        selections: [
                            {
                                alias: "result",
                                args: u,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                    {
                                                        alias: null,
                                                        args: d,
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: [c, o], storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [m], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    g,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "NlJ6RM-hgHxt-iu9cPQz7A", metadata: {}, name: "overviewDataUserQuery", operationKind: "query", text: null },
                };
            y.hash = "7205df5d23227155d405c2e79eee2fd4";
            const k = y;
        },
        729002: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { kind: "InlineDataFragment", name: "parseUserEntities_userEntities", hash: "16101b38cee4e401a6aa44e1c860d74f" };
            const i = n;
        },
        857037: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                t,
                s,
                r,
                u,
                d,
                c,
                o,
                m = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (t = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchAnalyticsQuery",
                        selections: [
                            {
                                alias: "result",
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "2238" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                        args: (u = [
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                            { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                        ]),
                                                        concreteType: "AnayticsMetricsTotalValue",
                                                        kind: "LinkedField",
                                                        name: "free_metrics_rollup",
                                                        plural: !0,
                                                        selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), action: "THROW" }],
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
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [t, i, s, n],
                        kind: "Operation",
                        name: "useFetchAnalyticsQuery",
                        selections: [
                            {
                                alias: "result",
                                args: r,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            { kind: "InlineFragment", selections: [{ alias: null, args: u, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "free_metrics_rollup", plural: !0, selections: [d, c], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    o,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "5JkoDLRvQrXv2QV4U5gKFg", metadata: {}, name: "useFetchAnalyticsQuery", operationKind: "query", text: null },
                };
            m.hash = "3d3dec2f58b1f7359804cda2c9465026";
            const g = m;
        },
        882220: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useIsAllowedToViewSubProfilePages_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserRelationshipPerspectives",
                        kind: "LinkedField",
                        name: "relationship_perspectives",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "blocked_by", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "a0eeb138c5fc4393b90909851ab84c2b",
            };
            const i = n;
        },
        380327: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                t,
                s,
                r,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "cursor", value: "" }]), concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (t = [{ kind: "Literal", name: "filter_by_delivered_in_interval", value: { end_date: "2025-12-31", start_date: "2024-01-01" } }]), concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useTotalAdCampaignsForUserQuery", selections: [{ alias: null, args: n, concreteType: "AdvertiserAccountsSlice", kind: "LinkedField", name: "quick_promote_advertiser_accounts", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdvertiserAccount", kind: "LinkedField", name: "items", plural: !0, selections: [i, { alias: null, args: t, concreteType: "CampaignView", kind: "LinkedField", name: "campaigns", plural: !1, selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: 'campaigns(filter_by_delivered_in_interval:{"end_date":"2025-12-31","start_date":"2024-01-01"})' }, r], storageKey: null }], storageKey: 'quick_promote_advertiser_accounts(cursor:"")' }] },
                    params: { id: "UFD9D7pipG78WFN0SJviDg", metadata: {}, name: "useTotalAdCampaignsForUserQuery", operationKind: "query", text: null },
                };
            u.hash = "200a7af54c9c3ed7753c0291e92e188f";
            const d = u;
        },
        465067: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useTranslatorType_user", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "translator_type_enum", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "1dfcead2e91545e2269818df66105989" };
            const i = n;
        },
        273490: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useUserProfileRichTextEntityClick_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" },
                ],
                type: "User",
                abstractKey: null,
                hash: "1b74d6f40cdbfa2307eff80fce2407ba",
            };
            const i = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-17a1c92a.4595752a.js.map

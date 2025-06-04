"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-29ca9031"],
    {
        496926: (e, l, a) => {
            a.r(l), a.d(l, { default: () => u });
            const n = {
                fragment: {
                    argumentDefinitions: (i = [
                        { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                        { defaultValue: null, kind: "LocalArgument", name: "limit" },
                    ]),
                    kind: "Fragment",
                    metadata: null,
                    name: "LiveOverviewProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: (t = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]),
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
                                                (s = {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: [
                                                                { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                { kind: "Variable", name: "limit", variableName: "limit" },
                                                            ],
                                                            concreteType: "BroadcastsForUserResults",
                                                            kind: "LinkedField",
                                                            name: "broadcasts",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "Broadcast",
                                                                    kind: "LinkedField",
                                                                    name: "broadcasts",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "broadcast_id", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "state", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "end_time", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "scheduled_start_time", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "source", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "private_chat", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "BroadcastCountsResult",
                                                                            kind: "LinkedField",
                                                                            name: "counts",
                                                                            plural: !1,
                                                                            selections: [
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "BroadcastCounts",
                                                                                    kind: "LinkedField",
                                                                                    name: "total_counts",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "views", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "unique_viewers", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "minutes_watched", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                                { alias: null, args: null, concreteType: "PeriscopeCursor", kind: "LinkedField", name: "cursor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "offset", storageKey: null }], storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        r,
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                }),
                                            ],
                                            storageKey: null,
                                        },
                                        r,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: i, kind: "Operation", name: "LiveOverviewProviderQuery", selections: [{ alias: null, args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' }] },
                params: { id: "8M610ROGccfLDUBZT3THVg", metadata: {}, name: "LiveOverviewProviderQuery", operationKind: "query", text: null },
            };
            var i, t, r, s;
            n.hash = "8d50400f1f7e607af69076f008cabb87";
            const u = n;
        },
        323484: (e, l, a) => {
            a.r(l), a.d(l, { default: () => F });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "dimensions" }), (t = { defaultValue: null, kind: "LocalArgument", name: "from_time_incl" }), (r = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "to_time_excl" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderAudienceQuery",
                    selections: [
                        {
                            alias: null,
                            args: (u = [
                                { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
                            plural: !1,
                            selections: [
                                (p = {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "result",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                        { kind: "InlineFragment", selections: [{ alias: null, args: [{ kind: "Variable", name: "dimensions", variableName: "dimensions" }, (d = { kind: "Variable", name: "from_time_incl", variableName: "from_time_incl" }), (o = { kind: "Literal", name: "granularity", value: "Total" }), (m = { kind: "Literal", name: "metrics", value: "Count" }), (c = { kind: "Variable", name: "to_time_excl", variableName: "to_time_excl" })], concreteType: "UecMetricsTimeSeriesValue", kind: "LinkedField", name: "uec_metrics_daily_time_series_count", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "age", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "gender", storageKey: null }, (g = { alias: null, args: null, kind: "ScalarField", name: "engagement_type", storageKey: null }), (y = { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null }), (k = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "is_in_network", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "client_app_id", storageKey: null }], storageKey: null }, { alias: null, args: [{ kind: "Literal", name: "dimensions", value: ["Country", "EngagementType"] }, d, o, m, c], concreteType: "UecMetricsTimeSeriesValue", kind: "LinkedField", name: "uec_country_metrics_daily_time_series_count", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "country", storageKey: null }, y, g, k], storageKey: null }, (_ = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "Tweet", abstractKey: null },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [r, t, s, i], kind: "Operation", name: "PostDetailsProviderAudienceQuery", selections: [{ alias: null, args: u, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [p, _], storageKey: null }] },
                params: { id: "Vq7rpcVS4EwY8Cz_S_KAyQ", metadata: {}, name: "PostDetailsProviderAudienceQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o, m, c, g, y, k, _, p;
            n.hash = "65de382f4f1663b24be96e4078862e56";
            const F = n;
        },
        36534: (e, l, a) => {
            a.r(l), a.d(l, { default: () => c });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (t = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (u = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderFirst48HoursDataQuery",
                    selections: [
                        {
                            alias: null,
                            args: (d = [
                                { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
                            plural: !1,
                            selections: [
                                (m = {
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
                                                    args: [
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                        { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                    ],
                                                    concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                    kind: "LinkedField",
                                                    name: "organic_metrics_time_series",
                                                    plural: !0,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "AnayticsMetricsTotalValue",
                                                            kind: "LinkedField",
                                                            name: "metric_values",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            ],
                                            type: "Tweet",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [s, r, u, i, t], kind: "Operation", name: "PostDetailsProviderFirst48HoursDataQuery", selections: [{ alias: null, args: d, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [m, o], storageKey: null }] },
                params: { id: "-h2rBNSpdLAFEA4VY9iSig", metadata: {}, name: "PostDetailsProviderFirst48HoursDataQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o, m;
            n.hash = "c4cde9eca0196eab588acf9dbd886e15";
            const c = n;
        },
        650615: (e, l, a) => {
            a.r(l), a.d(l, { default: () => c });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (t = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (u = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderLast48HoursOrganicDataQuery",
                    selections: [
                        {
                            alias: null,
                            args: (d = [
                                { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
                            plural: !1,
                            selections: [
                                (m = {
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
                                                    args: [
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                                        { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                    ],
                                                    concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                    kind: "LinkedField",
                                                    name: "organic_metrics_time_series",
                                                    plural: !0,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "AnayticsMetricsTotalValue",
                                                            kind: "LinkedField",
                                                            name: "metric_values",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            ],
                                            type: "Tweet",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [s, r, u, i, t], kind: "Operation", name: "PostDetailsProviderLast48HoursOrganicDataQuery", selections: [{ alias: null, args: d, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [m, o], storageKey: null }] },
                params: { id: "nQhZbg0tBqBC3FSqca3tdg", metadata: {}, name: "PostDetailsProviderLast48HoursOrganicDataQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o, m;
            n.hash = "a4d295daf312e753a4b24591ba4480dd";
            const c = n;
        },
        477082: (e, l, a) => {
            a.r(l), a.d(l, { default: () => m });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (t = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (r = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderMetricsTotalQuery",
                    selections: [
                        {
                            alias: null,
                            args: (u = [
                                { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "TweetResults",
                            kind: "LinkedField",
                            name: "tweet_result_by_rest_id",
                            plural: !1,
                            selections: [
                                (o = {
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
                                                    args: [
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                        { kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" },
                                                        { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                    ],
                                                    concreteType: "AnayticsMetricsTotalValue",
                                                    kind: "LinkedField",
                                                    name: "organic_metrics_total",
                                                    plural: !0,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            ],
                                            type: "Tweet",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [r, t, i, s], kind: "Operation", name: "PostDetailsProviderMetricsTotalQuery", selections: [{ alias: null, args: u, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [o, d], storageKey: null }] },
                params: { id: "Wh3io6RCI71-GSsRKiz-oA", metadata: {}, name: "PostDetailsProviderMetricsTotalQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o;
            n.hash = "187d0079b4de49f19d27de67e0f85e90";
            const m = n;
        },
        882157: (e, l, a) => {
            a.r(l), a.d(l, { default: () => S });
            const n = {
                fragment: {
                    argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "rest_id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: (t = [
                                { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
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
                                        (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                (k = {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "LegacyTweet",
                                                    kind: "LinkedField",
                                                    name: "legacy",
                                                    plural: !1,
                                                    selections: [
                                                        (s = { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null }),
                                                        (u = { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null }),
                                                        (d = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }),
                                                        (o = { alias: null, args: null, kind: "ScalarField", name: "bookmark_count", storageKey: null }),
                                                        (m = { alias: null, args: null, kind: "ScalarField", name: "favorite_count", storageKey: null }),
                                                        (c = { alias: null, args: null, kind: "ScalarField", name: "reply_count", storageKey: null }),
                                                        (g = { alias: null, args: null, kind: "ScalarField", name: "retweet_count", storageKey: null }),
                                                        { alias: null, args: null, kind: "ScalarField", name: "in_reply_to_status_id_str", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "in_reply_to_user_id_str", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "in_reply_to_screen_name", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "EntitySet",
                                                            kind: "LinkedField",
                                                            name: "entities",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "ApiMediaEntity",
                                                                    kind: "LinkedField",
                                                                    name: "media",
                                                                    plural: !0,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "media_url_https", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiMediaEntityVideoInfo",
                                                                            kind: "LinkedField",
                                                                            name: "video_info",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "aspect_ratio", storageKey: null },
                                                                                { alias: null, args: null, concreteType: "ApiMediaEntityVideoVariant", kind: "LinkedField", name: "variants", plural: !0, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bitrate", storageKey: null }], storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "ext_alt_text", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                }),
                                                (_ = { alias: null, args: null, concreteType: "ViewCountInfo", kind: "LinkedField", name: "views", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null }], storageKey: null }),
                                                (p = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                (F = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "TweetResults",
                                                    kind: "LinkedField",
                                                    name: "reply_to_results",
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
                                                                r,
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (K = { alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [s, u, d, o, m, c, g], storageKey: null }),
                                                                        _,
                                                                        F,
                                                                        (L = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "TweetCore",
                                                                            kind: "LinkedField",
                                                                            name: "core",
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
                                                                                                        F,
                                                                                                        (b = {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "ApiUser",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "legacy",
                                                                                                            plural: !1,
                                                                                                            selections: [
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                                            ],
                                                                                                            storageKey: null,
                                                                                                        }),
                                                                                                        (f = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                                        (v = {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "HighlightedUserLabelResponse",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "affiliates_highlighted_label",
                                                                                                            plural: !1,
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    alias: null,
                                                                                                                    args: null,
                                                                                                                    concreteType: "HighlightedUserLabel",
                                                                                                                    kind: "LinkedField",
                                                                                                                    name: "label",
                                                                                                                    plural: !1,
                                                                                                                    selections: [
                                                                                                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [y], storageKey: null },
                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                                    ],
                                                                                                                    storageKey: null,
                                                                                                                },
                                                                                                            ],
                                                                                                            storageKey: null,
                                                                                                        }),
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
                                                                            storageKey: null,
                                                                        }),
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
                                                L,
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
                operation: { argumentDefinitions: i, kind: "Operation", name: "PostDetailsProviderQuery", selections: [{ alias: null, args: t, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [k, _, p, F, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "reply_to_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [K, _, F, (T = { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [F, b, f, v, p], type: "User", abstractKey: null }], storageKey: null }, p], storageKey: null }], storageKey: null }), p], type: "Tweet", abstractKey: null }], storageKey: null }, p], storageKey: null }, T], type: "Tweet", abstractKey: null }], storageKey: null }, p], storageKey: null }] },
                params: { id: "7_5sxzswrD0qxa_1SmZgcQ", metadata: {}, name: "PostDetailsProviderQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o, m, c, g, y, k, _, p, F, K, b, f, v, L, T;
            n.hash = "46fbdfa18297187632b2e7197a806cbf";
            const S = n;
        },
        549092: (e, l, a) => {
            a.r(l), a.d(l, { default: () => m });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "fromTimestamp" }), (t = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (r = { defaultValue: null, kind: "LocalArgument", name: "restId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "toTimestamp" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostDetailsProviderRealtimeDataQuery",
                    selections: [
                        {
                            alias: null,
                            args: (u = [
                                { kind: "Variable", name: "rest_id", variableName: "restId" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
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
                                                (d = {
                                                    alias: null,
                                                    args: [
                                                        { kind: "Literal", name: "dimensions", value: ["EngagementType"] },
                                                        { kind: "Literal", name: "engagements", value: ["Displayed", "Fav", "Reply", "Retweet", "Bookmark", "Share", "ProfilePic", "Follow"] },
                                                        { kind: "Variable", name: "from_timestamp", variableName: "fromTimestamp" },
                                                        { kind: "Variable", name: "response_granularity", variableName: "granularity" },
                                                        { kind: "Variable", name: "to_timestamp", variableName: "toTimestamp" },
                                                    ],
                                                    concreteType: "UecInstantRefreshResponse",
                                                    kind: "LinkedField",
                                                    name: "uec_instant_refresh",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "tweet_id", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "InstantRefreshRspItem",
                                                            kind: "LinkedField",
                                                            name: "items",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "engagement_type", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                    ],
                                                    storageKey: null,
                                                }),
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
                    argumentDefinitions: [r, i, s, t],
                    kind: "Operation",
                    name: "PostDetailsProviderRealtimeDataQuery",
                    selections: [
                        {
                            alias: null,
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
                                        { kind: "InlineFragment", selections: [d, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Tweet", abstractKey: null },
                                    ],
                                    storageKey: null,
                                },
                                o,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "nR3nHSFiMx7ZgHq2isAX0w", metadata: {}, name: "PostDetailsProviderRealtimeDataQuery", operationKind: "query", text: null },
            };
            var i, t, r, s, u, d, o;
            n.hash = "ab010ca08cad98b44f812437ebd352f4";
            const m = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-29ca9031.3d84674a.js.map

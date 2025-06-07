"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-a2dee9c7"],
    {
        676763: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                t,
                i,
                r,
                s = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "AccountsReached_metrics",
                    selections: [
                        {
                            alias: null,
                            args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })],
                            concreteType: "AnalyticsAudienceMetricsTotalValue",
                            kind: "LinkedField",
                            name: "audience_follow_status",
                            plural: !0,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AnalyticsAudienceBreakdownSegment",
                                    kind: "LinkedField",
                                    name: "breakdown_segment",
                                    plural: !1,
                                    selections: (t = [
                                        { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null },
                                    ]),
                                    storageKey: null,
                                },
                                (i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }),
                                (r = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }),
                            ],
                            storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])',
                        },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: t, storageKey: null }, i, r], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "64de12f0920960b6b22e03535ff1469e";
            const o = s;
        },
        175989: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                t,
                i,
                r,
                s = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "AgeBreakdown_metrics",
                    selections: [
                        { alias: null, args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [t, i, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "0a49616d4912f818092d505fcb18647e";
            const o = s;
        },
        651868: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                t,
                i,
                r,
                s,
                o,
                d,
                u,
                c = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "AudienceMetrics_metrics",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "GenderBreakdown_metrics" },
                        { args: null, kind: "FragmentSpread", name: "AgeBreakdown_metrics" },
                        { args: null, kind: "FragmentSpread", name: "CountriesBreakdown_metrics" },
                        { alias: null, args: (t = [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (o = [(i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: t, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: o, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: t, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: o, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                        {
                            alias: null,
                            args: null,
                            concreteType: "Ad",
                            kind: "LinkedField",
                            name: "ad",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdCreative",
                                    kind: "LinkedField",
                                    name: "creative",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: (d = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (u = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [i, r, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: s, storageKey: null }], storageKey: null }]), storageKey: null },
                                        { alias: null, args: d, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: u, storageKey: null },
                                        { alias: null, args: d, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: u, storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            c.hash = "e74845c1ab8481ca8462e543c9369b99";
            const m = c;
        },
        173265: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n,
                t = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "requested_organic_metrics" },
                        { kind: "RootArgument", name: "requested_promoted_metrics" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "DataPointsGrid_metrics",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "First48HoursChart_metrics" },
                        { args: null, kind: "FragmentSpread", name: "AccountsReached_metrics" },
                        {
                            alias: "datapoints_grid",
                            args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_organic_metrics" }],
                            concreteType: "AnayticsMetricsTotalValue",
                            kind: "LinkedField",
                            name: "organic_metrics_total",
                            plural: !0,
                            selections: (n = [
                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                            ]),
                            storageKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            concreteType: "Ad",
                            kind: "LinkedField",
                            name: "ad",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdCampaign",
                                    kind: "LinkedField",
                                    name: "campaign",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "objective", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdCreative",
                                    kind: "LinkedField",
                                    name: "creative",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: "datapoints_grid",
                                            args: [
                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                { kind: "Variable", name: "requested_metrics", variableName: "requested_promoted_metrics" },
                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                            ],
                                            concreteType: "HubbleMetricsTotalValue",
                                            kind: "LinkedField",
                                            name: "metrics_total",
                                            plural: !0,
                                            selections: n,
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            t.hash = "267e84804c59b2debdc9d5603ec77768";
            const i = t;
        },
        470911: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n = {
                argumentDefinitions: [
                    { kind: "RootArgument", name: "first_48_hours_time" },
                    { kind: "RootArgument", name: "from_time" },
                ],
                kind: "Fragment",
                metadata: null,
                name: "First48HoursChart_metrics",
                selections: [
                    {
                        alias: null,
                        args: [
                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                            { kind: "Literal", name: "granularity", value: "Hourly" },
                            { kind: "Literal", name: "requested_metrics", value: ["Impressions"] },
                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "first_48_hours_time" }], kind: "ObjectValue", name: "to_time" },
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
                                    { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Tweet",
                abstractKey: null,
                hash: "10852888ca78590ac785df9ef1f10f77",
            };
            const t = n;
        },
        241545: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                t,
                i,
                r,
                s = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "GenderBreakdown_metrics",
                    selections: [
                        { alias: null, args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [t, i, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "7d9b06f760fba0db2bb4ee299657a23a";
            const o = s;
        },
        743738: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n = {
                argumentDefinitions: [
                    { kind: "RootArgument", name: "from_time" },
                    { kind: "RootArgument", name: "to_time" },
                ],
                kind: "Fragment",
                metadata: null,
                name: "LikeRetweetReplyAnalytics_metrics",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "Ad",
                        kind: "LinkedField",
                        name: "ad",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "AdCreative",
                                kind: "LinkedField",
                                name: "creative",
                                plural: !1,
                                selections: [
                                    {
                                        alias: "like_retweet_replies",
                                        args: [
                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                            { kind: "Literal", name: "requested_metrics", value: ["Likes", "Retweets", "Replies"] },
                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                        ],
                                        concreteType: "HubbleMetricsTotalValue",
                                        kind: "LinkedField",
                                        name: "metrics_total",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Tweet",
                abstractKey: null,
                hash: "1f49ea31fa2ae656b97ebe5bc41aa27b",
            };
            const t = n;
        },
        716754: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PromotionInfo_campaignInfo",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "Ad",
                        kind: "LinkedField",
                        name: "ad",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "AdCampaign",
                                kind: "LinkedField",
                                name: "campaign",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "end_time", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "total_budget", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "remaining_budget", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "is_in_app_purchase", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "objective", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Tweet",
                abstractKey: null,
                hash: "1d907cbd3c3fc1eb168bcef6aa2b19a6",
            };
            const t = n;
        },
        573519: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n,
                t = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "PromotionInfo_metrics",
                    selections: [
                        {
                            alias: "promotion_info",
                            args: [{ kind: "Literal", name: "requested_metrics", value: ["Impressions"] }],
                            concreteType: "AnayticsMetricsTotalValue",
                            kind: "LinkedField",
                            name: "organic_metrics_total",
                            plural: !0,
                            selections: (n = [
                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                            ]),
                            storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])',
                        },
                        {
                            alias: null,
                            args: null,
                            concreteType: "Ad",
                            kind: "LinkedField",
                            name: "ad",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AdCreative",
                                    kind: "LinkedField",
                                    name: "creative",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: "promotion_info",
                                            args: [
                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                { kind: "Literal", name: "requested_metrics", value: ["Impressions", "Engagements"] },
                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                            ],
                                            concreteType: "HubbleMetricsTotalValue",
                                            kind: "LinkedField",
                                            name: "metrics_total",
                                            plural: !0,
                                            selections: n,
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            t.hash = "3cb8d633319a8d17fc6409ac808b0a30";
            const i = t;
        },
        999325: (e, a, l) => {
            l.d(a, { Z: () => Z });
            var n,
                t,
                i,
                r,
                s,
                o,
                d,
                u,
                c,
                m,
                g,
                k,
                p,
                y,
                _,
                b,
                f,
                T,
                F,
                h,
                K,
                w,
                V,
                L,
                v,
                A,
                S,
                C,
                B,
                M,
                q,
                I = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "first_48_hours_time" }), (t = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "requested_organic_metrics" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_promoted_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "restId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TweetActivityQuery",
                        selections: [
                            {
                                alias: null,
                                args: (d = [
                                    { kind: "Variable", name: "rest_id", variableName: "restId" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (c = { args: null, kind: "FragmentSpread", name: "LikeRetweetReplyAnalytics_metrics" }), (m = { args: null, kind: "FragmentSpread", name: "DataPointsGrid_metrics" }), (g = { args: null, kind: "FragmentSpread", name: "PromotionInfo_metrics" }), (k = { args: null, kind: "FragmentSpread", name: "VideoMetrics_metrics" }), (p = { args: null, kind: "FragmentSpread", name: "AudienceMetrics_metrics" }), (y = { args: null, kind: "FragmentSpread", name: "PromotionInfo_campaignInfo" }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: [c, m, g, k, p, y], storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, t, o, n, i, r],
                        kind: "Operation",
                        name: "TweetActivityQuery",
                        selections: [
                            {
                                alias: null,
                                args: d,
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
                                            u,
                                            {
                                                kind: "InlineFragment",
                                                selections: (q = [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "Ad",
                                                        kind: "LinkedField",
                                                        name: "ad",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AdCreative",
                                                                kind: "LinkedField",
                                                                name: "creative",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: "like_retweet_replies", args: [(_ = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }), { kind: "Literal", name: "requested_metrics", value: ["Likes", "Retweets", "Replies"] }, (b = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" })], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: (F = [(f = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null })]), storageKey: null },
                                                                    (h = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    { alias: null, args: (w = [_, (K = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] }), b]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (L = [(V = { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null }]), storageKey: null }, f, T], storageKey: null }], storageKey: null },
                                                                    { alias: "datapoints_grid", args: [_, { kind: "Variable", name: "requested_metrics", variableName: "requested_promoted_metrics" }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "promotion_info", args: [_, { kind: "Literal", name: "requested_metrics", value: ["Impressions", "Engagements"] }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "video", args: [_, (v = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] }), b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: null, args: w, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (S = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [f, T, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (A = [V]), storageKey: null }], storageKey: null }]), storageKey: null },
                                                                    { alias: null, args: w, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: S, storageKey: null },
                                                                    { alias: null, args: w, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: S, storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            h,
                                                            { alias: null, args: null, concreteType: "AdCampaign", kind: "LinkedField", name: "campaign", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "objective", storageKey: null }, h, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "end_time", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "total_budget", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "remaining_budget", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "is_in_app_purchase", storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: [_, { kind: "Literal", name: "granularity", value: "Hourly" }, (C = { kind: "Literal", name: "requested_metrics", value: ["Impressions"] }), { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "first_48_hours_time" }], kind: "ObjectValue", name: "to_time" }],
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: F, storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: (B = [K]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_follow_status", plural: !0, selections: [{ alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: L, storageKey: null }, f, T], storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: "datapoints_grid", args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_organic_metrics" }], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: null },
                                                    { alias: "promotion_info", args: [C], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])' },
                                                    { alias: "video", args: [v], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (M = [f, T, { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: A, storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: M, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: M, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                                                    h,
                                                ]),
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: q, storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    h,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "vnwexpl0q33_Bky-SROVww", metadata: { features: ["responsive_web_tweet_analytics_m3_enabled"] }, name: "TweetActivityQuery", operationKind: "query", text: null },
                };
            I.hash = "cf04955724597180d1689fb60c8ab013";
            const Z = I;
        },
        393416: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                t,
                i = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "VideoMetrics_metrics",
                    selections: [
                        {
                            alias: "video",
                            args: [(n = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] })],
                            concreteType: "AnayticsMetricsTotalValue",
                            kind: "LinkedField",
                            name: "organic_metrics_total",
                            plural: !0,
                            selections: (t = [
                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                            ]),
                            storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])',
                        },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: "video", args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: t, storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            i.hash = "28fb2130ff421a25cacd718a50d9c8c2";
            const r = i;
        },
        625661: (e, a, l) => {
            l.d(a, { ZP: () => m });
            var n = l(202784),
                t = l(614983),
                i = l.n(t),
                r = l(325686),
                s = l(370006),
                o = l(786998),
                d = l(929028),
                u = l(386802);
            function c(e, a, l) {
                return e || (!a && l ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            i()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: l, fixed: t, hideBackButton: i, isFullWidth: r, isLarge: d, leftControl: u, middleControl: m, position: g, rightControl: k, secondaryBar: p, style: y, subtitle: _, title: b, titleDomId: f, titleIconCell: T, titleIconCellSize: F, withBackground: h, withWideContainer: K } = this.props,
                        { isModal: w } = this.context,
                        V = i ? u : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        L = (function (e, a, l) {
                            return e && !(a && l);
                        })(!!h, w, !!p);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: a, centeredLogo: l, isFullWidth: r, isLarge: d, leftControl: V, middleControl: m, position: c(g, w, t), rightControl: k, style: y, subtitle: _, title: b, titleDomId: f, titleIconCell: T, titleIconCellSize: F, withBackground: L, withWideContainer: K }), p || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        l = d.Z.getBackgroundStyles();
                    return a ? n.createElement(r.Z, { style: !!e && l }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = u.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, l) => {
            l.d(a, { Z: () => p, w: () => g });
            var n = l(202784),
                t = l(325686),
                i = l(108362),
                r = l(386802),
                s = l(392237),
                o = l(652904),
                d = l(555079),
                u = l(625661),
                c = l(449067),
                m = l(715601);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: l, backLocation: i, centerTitle: r, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: p, rightControl: y, secondaryBar: _, subtitle: b, title: f } = this.props,
                                { isModal: T } = this.context;
                            return n.createElement(t.Z, { style: T ? [k.childViewAppBarRoot, k.appBarZindex] : k.appBarZindex }, n.createElement(u.ZP, { backButtonType: l || (T ? "close" : "back"), backLocation: i, centerTitle: r, fixed: !T, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: p, ref: e, rightControl: y, secondaryBar: _, style: [T && k.appBarModal, a], subtitle: b, title: f, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: l } = this.context;
                            a && (l ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: l, containerStyle: r, documentTitle: s, isFullWidth: d, isLarge: u, renderHeader: g, title: p, withoutBottomBarMobile: y } = this.props,
                        { isModal: _ } = this.context,
                        b = g ? g(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(c.Z.Configure, { documentTitle: s, headerless: !0, title: p }), n.createElement(t.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [k.root, _ && k.rootModal] }, !_ && b, n.createElement(i.Z, { isFullWidth: d, isLarge: u, style: [k.container, _ && k.containerModal, r] }, _ ? n.createElement(m.Z, { style: k.viewport }, b, l) : l), a ? n.createElement(t.Z, { style: [k.bottomBarModal, !_ && !y && k.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: d, isLarge: u }, a)) : null));
                }
            }
            (g.defaultProps = { isFullWidth: !1, isLarge: !1 }), (g.contextType = r.Z);
            const k = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                p = g;
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n = l(202784),
                t = l(500002),
                i = l(668214),
                r = l(997174),
                s = l(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: n },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const d = t || s;
                    ((d && t !== s) || (!d && l !== i) || n !== r || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: n } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), n(a.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const u = (0, t.ZP)(o(d));
        },
        301758: (e, a, l) => {
            l.d(a, { Z: () => _ });
            var n = l(807896),
                t = l(202784),
                i = l(235902),
                r = l(521288),
                s = l(401388),
                o = l(988566),
                d = l(725516),
                u = l(443781),
                c = l(71620),
                m = l(668214),
                g = l(491963),
                k = l(836255);
            const p = (e, a) => a.tweetId,
                y = (e, a) => {
                    const l = a.tweetId,
                        n = l && k.Z.select(e, l);
                    return n ? (0, g.z0)(e, n) : void 0;
                },
                _ = (0, m.Z)()
                    .propsFromState(() => ({ community: y, hydratedTweet: k.Z.createHydratedTweetSelector(p) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: g.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: a, fetchCommunityIfNeeded: l, hydratedTweet: c, onAvatarClick: m, onMediaClick: g, onPress: k, onScreenNameClick: p, tweetId: y, withBirdwatchPivot: _ = !0, ...b }) => {
                    const { featureSwitches: f, viewerUserId: T } = t.useContext(u.rC),
                        F = (0, d.z)(),
                        h = c?.community_id_str;
                    t.useEffect(() => {
                        h && (0, s.Z)(e) && l(h).catch(a());
                    }, [e, h, a, l]);
                    const K = t.useCallback(
                            (e) => {
                                F.scribeAction("click"), k && k(e);
                            },
                            [k, F],
                        ),
                        w = !!_,
                        V = c && (0, o.D$)(c, T, e),
                        L = V && (0, o.rl)(V);
                    return t.createElement(i.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => f.isTrue("responsive_web_edit_tweet_enabled") || f.isTrue("subscriptions_feature_labs_1004") } }, t.createElement(r.Z, (0, n.Z)({}, b, { loggedInUserId: T, onAvatarClick: m, onMediaClick: g, onPress: K, onScreenNameClick: p, shouldShowAltLabelAlways: !0, socialContextProps: L, tweet: c, withBirdwatchPivot: w })));
                });
        },
        301410: (e, a, l) => {
            l.d(a, { i: () => k.ZP, z: () => b });
            var n = l(202784),
                t = l(928123),
                i = l.n(t),
                r = l(72845),
                s = l.n(r),
                o = l(57074),
                d = l.n(o),
                u = l(516951),
                c = l(88656),
                m = l(71620),
                g = l(163889),
                k = l(312771);
            const p = ({ render: e }) => e({ fetchStatus: k.ZP.LOADING, data: null, error: null, retry: u.Z });
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, a) {
                    if (!(e instanceof c.Z)) throw e;
                    this.props.errorHandler(e), (0, g.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const _ = ({ query: e, queryRef: a, render: l }) => {
                    const n = i()(e, a);
                    return l({ fetchStatus: k.ZP.LOADED, data: n, error: null, retry: u.Z });
                },
                b = (e, a) =>
                    function ({ fetchPolicy: l = "store-or-network", render: t, variables: i }) {
                        const [r, o] = s()(e),
                            u = (0, m.n7)(a.errorConfig.context),
                            c = d()(i),
                            g = n.useCallback(() => {
                                o(c, { fetchPolicy: "network-only" });
                            }, [o, c]);
                        return (
                            n.useLayoutEffect(() => {
                                o(c, { fetchPolicy: l });
                            }, [l, o, c]),
                            r
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(p, { render: t }) },
                                      n.createElement(y, { errorHandler: u(a.errorConfig.options || {}), key: r.fetchKey, retry: g }, (a, l) => (a ? t({ fetchStatus: k.ZP.FAILED, error: a, data: null, retry: l }) : n.createElement(_, { query: e, queryRef: r, render: t }))),
                                  )
                                : null
                        );
                    };
        },
        702001: (e, a, l) => {
            l.d(a, { c: () => i });
            var n = l(516951),
                t = l(615656);
            const i = { [t.ZP.OtherUserSuspended]: { customAction: n.Z }, [t.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        566220: (e, a, l) => {
            l.d(a, { R: () => r });
            var n = l(202784);
            const t = () => new Date(),
                i = n.createContext(t),
                r = () => n.useContext(i);
        },
        738321: (e, a, l) => {
            l.d(a, { X0: () => s, _b: () => i, gG: () => r });
            var n = l(782261),
                t = l(942893);
            function i(e) {
                const { dwellStartTime: a, eventInfo: l, tweet: i } = e,
                    r = Date.now() - a,
                    s = i ? n.Z.getOriginalTweet(i) : void 0;
                return { action: "view", data: { event_info: JSON.stringify({ duration_ms: r, event_info: l }), items: s ? [t.Z.getTweetItem(s)] : [] } };
            }
            function r(e) {
                const { element: a, eventInfo: l, tweet: i, userId: r } = e,
                    s = i ? n.Z.getOriginalTweet(i) : void 0;
                return { element: a, action: "click", data: { event_info: l, profile_id: r, items: s ? [t.Z.getTweetItem(s)] : [] } };
            }
            function s(e, a, l) {
                const i = l ? n.Z.getOriginalTweet(l) : void 0;
                return { element: "TweetActivityQueryRenderer", action: "error", data: { event_info: e, items: i ? [t.Z.getTweetItem(i)] : [], profile_id: a } };
            }
        },
        207137: (e, a, l) => {
            l.d(a, { BC: () => d, FI: () => o, Pm: () => r, gO: () => i, zk: () => t });
            const n = () => new Date(Date.now());
            function t(e, a = n()) {
                return a.getFullYear() === e.getFullYear() && a.getMonth() === e.getMonth() && a.getDate() === e.getDate();
            }
            function i(e, a = n()) {
                const l = new Date(a);
                return l.setHours(l.getHours() - 24), t(e, l);
            }
            function r(e, a = n()) {
                const l = new Date(a);
                return l.setHours(l.getHours() + 24), t(e, l);
            }
            const s = 6048e5;
            function o(e, a = n()) {
                const l = a - e;
                return l >= 0 && l <= s;
            }
            function d(e, a) {
                const l = new Date();
                return a < l || a < e ? 0 : Math.min(1, (l - e) / (a - e));
            }
        },
        16222: (e, a, l) => {
            function n(e, a) {
                try {
                    return e();
                } catch (e) {
                    return a(e);
                }
            }
            l.d(a, { o: () => n });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-a2dee9c7.ec093f4a.js.map

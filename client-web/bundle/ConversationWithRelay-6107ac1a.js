"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-6107ac1a"],
    {
        676763: (e, a, l) => {
            l.d(a, { Z: () => o });
            var t,
                n,
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
                            args: [(t = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })],
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
                                    selections: (n = [
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
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: n, storageKey: null }, i, r], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "64de12f0920960b6b22e03535ff1469e";
            const o = s;
        },
        175989: (e, a, l) => {
            l.d(a, { Z: () => o });
            var t,
                n,
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
                        { alias: null, args: [(t = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [n, i, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "0a49616d4912f818092d505fcb18647e";
            const o = s;
        },
        651868: (e, a, l) => {
            l.d(a, { Z: () => m });
            var t,
                n,
                i,
                r,
                s,
                o,
                c,
                d,
                u = {
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
                        { alias: null, args: (n = [(t = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (o = [(i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: n, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: o, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: n, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: o, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
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
                                        { alias: null, args: (c = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (d = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [i, r, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: s, storageKey: null }], storageKey: null }]), storageKey: null },
                                        { alias: null, args: c, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: d, storageKey: null },
                                        { alias: null, args: c, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: d, storageKey: null },
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
            u.hash = "e74845c1ab8481ca8462e543c9369b99";
            const m = u;
        },
        173265: (e, a, l) => {
            l.d(a, { Z: () => i });
            var t,
                n = {
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
                            selections: (t = [
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
                                            selections: t,
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
            n.hash = "267e84804c59b2debdc9d5603ec77768";
            const i = n;
        },
        470911: (e, a, l) => {
            l.d(a, { Z: () => n });
            var t = {
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
            const n = t;
        },
        241545: (e, a, l) => {
            l.d(a, { Z: () => o });
            var t,
                n,
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
                        { alias: null, args: [(t = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [n, i, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "7d9b06f760fba0db2bb4ee299657a23a";
            const o = s;
        },
        743738: (e, a, l) => {
            l.d(a, { Z: () => n });
            var t = {
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
            const n = t;
        },
        716754: (e, a, l) => {
            l.d(a, { Z: () => n });
            var t = {
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
            const n = t;
        },
        573519: (e, a, l) => {
            l.d(a, { Z: () => i });
            var t,
                n = {
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
                            selections: (t = [
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
                                            selections: t,
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
            n.hash = "3cb8d633319a8d17fc6409ac808b0a30";
            const i = n;
        },
        999325: (e, a, l) => {
            l.d(a, { Z: () => I });
            var t,
                n,
                i,
                r,
                s,
                o,
                c,
                d,
                u,
                m,
                p,
                g,
                y,
                k,
                b,
                _,
                f,
                h,
                v,
                T,
                w,
                F,
                V,
                K,
                A,
                L,
                x,
                S,
                Z,
                E,
                C,
                B = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "first_48_hours_time" }), (n = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "requested_organic_metrics" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_promoted_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "restId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TweetActivityQuery",
                        selections: [
                            {
                                alias: null,
                                args: (c = [
                                    { kind: "Variable", name: "rest_id", variableName: "restId" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ]),
                                concreteType: "TweetResults",
                                kind: "LinkedField",
                                name: "tweet_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (u = { args: null, kind: "FragmentSpread", name: "LikeRetweetReplyAnalytics_metrics" }), (m = { args: null, kind: "FragmentSpread", name: "DataPointsGrid_metrics" }), (p = { args: null, kind: "FragmentSpread", name: "PromotionInfo_metrics" }), (g = { args: null, kind: "FragmentSpread", name: "VideoMetrics_metrics" }), (y = { args: null, kind: "FragmentSpread", name: "AudienceMetrics_metrics" }), (k = { args: null, kind: "FragmentSpread", name: "PromotionInfo_campaignInfo" }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: [u, m, p, g, y, k], storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, n, o, t, i, r],
                        kind: "Operation",
                        name: "TweetActivityQuery",
                        selections: [
                            {
                                alias: null,
                                args: c,
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
                                            d,
                                            {
                                                kind: "InlineFragment",
                                                selections: (C = [
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
                                                                    { alias: "like_retweet_replies", args: [(b = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }), { kind: "Literal", name: "requested_metrics", value: ["Likes", "Retweets", "Replies"] }, (_ = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" })], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: (v = [(f = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (h = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null })]), storageKey: null },
                                                                    (T = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    { alias: null, args: (F = [b, (w = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] }), _]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (K = [(V = { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null }]), storageKey: null }, f, h], storageKey: null }], storageKey: null },
                                                                    { alias: "datapoints_grid", args: [b, { kind: "Variable", name: "requested_metrics", variableName: "requested_promoted_metrics" }, _], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: v, storageKey: null },
                                                                    { alias: "promotion_info", args: [b, { kind: "Literal", name: "requested_metrics", value: ["Impressions", "Engagements"] }, _], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: v, storageKey: null },
                                                                    { alias: "video", args: [b, (A = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] }), _], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: v, storageKey: null },
                                                                    { alias: null, args: F, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (x = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [f, h, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (L = [V]), storageKey: null }], storageKey: null }]), storageKey: null },
                                                                    { alias: null, args: F, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: x, storageKey: null },
                                                                    { alias: null, args: F, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: x, storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            T,
                                                            { alias: null, args: null, concreteType: "AdCampaign", kind: "LinkedField", name: "campaign", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "objective", storageKey: null }, T, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "end_time", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "start_time", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "total_budget", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "remaining_budget", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "is_in_app_purchase", storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: [b, { kind: "Literal", name: "granularity", value: "Hourly" }, (S = { kind: "Literal", name: "requested_metrics", value: ["Impressions"] }), { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "first_48_hours_time" }], kind: "ObjectValue", name: "to_time" }],
                                                        concreteType: "AnalyticsMetricsTimeSeriesValue",
                                                        kind: "LinkedField",
                                                        name: "organic_metrics_time_series",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "metric_values", plural: !0, selections: v, storageKey: null },
                                                            { alias: null, args: null, concreteType: "AnalyticsTimestamp", kind: "LinkedField", name: "timestamp", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "iso8601_time", storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: (Z = [w]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_follow_status", plural: !0, selections: [{ alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: K, storageKey: null }, f, h], storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: "datapoints_grid", args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_organic_metrics" }], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: v, storageKey: null },
                                                    { alias: "promotion_info", args: [S], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: v, storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])' },
                                                    { alias: "video", args: [A], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: v, storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])' },
                                                    { alias: null, args: Z, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (E = [f, h, { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: L, storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: Z, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: E, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: Z, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: E, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                                                    T,
                                                ]),
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: C, storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    T,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "vnwexpl0q33_Bky-SROVww", metadata: { features: ["responsive_web_tweet_analytics_m3_enabled"] }, name: "TweetActivityQuery", operationKind: "query", text: null },
                };
            B.hash = "cf04955724597180d1689fb60c8ab013";
            const I = B;
        },
        393416: (e, a, l) => {
            l.d(a, { Z: () => r });
            var t,
                n,
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
                            args: [(t = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] })],
                            concreteType: "AnayticsMetricsTotalValue",
                            kind: "LinkedField",
                            name: "organic_metrics_total",
                            plural: !0,
                            selections: (n = [
                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                            ]),
                            storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])',
                        },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: "video", args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, t, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: n, storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            i.hash = "28fb2130ff421a25cacd718a50d9c8c2";
            const r = i;
        },
        625661: (e, a, l) => {
            l.d(a, { ZP: () => m });
            var t = l(202784),
                n = l(614983),
                i = l.n(n),
                r = l(325686),
                s = l(370006),
                o = l(786998),
                c = l(929028),
                d = l(386802);
            function u(e, a, l) {
                return e || (!a && l ? "fixed" : void 0);
            }
            class m extends t.Component {
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: l, fixed: n, hideBackButton: i, isFullWidth: r, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: g, secondaryBar: y, style: k, subtitle: b, title: _, titleDomId: f, titleIconCell: h, titleIconCellSize: v, withBackground: T, withWideContainer: w } = this.props,
                        { isModal: F } = this.context,
                        V = i ? d : t.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        K = (function (e, a, l) {
                            return e && !(a && l);
                        })(!!T, F, !!y);
                    return t.createElement(t.Fragment, null, t.createElement(o.Z, { centerTitle: a, centeredLogo: l, isFullWidth: r, isLarge: c, leftControl: V, middleControl: m, position: u(p, F, n), rightControl: g, style: k, subtitle: b, title: _, titleDomId: f, titleIconCell: h, titleIconCellSize: v, withBackground: K, withWideContainer: w }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        l = c.Z.getBackgroundStyles();
                    return a ? t.createElement(r.Z, { style: !!e && l }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, a, l) => {
            l.d(a, { Z: () => y, w: () => p });
            var t = l(202784),
                n = l(325686),
                i = l(108362),
                r = l(386802),
                s = l(392237),
                o = l(652904),
                c = l(555079),
                d = l(625661),
                u = l(449067),
                m = l(715601);
            class p extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: l, backLocation: i, centerTitle: r, hideBackButton: s, history: o, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, rightControl: k, secondaryBar: b, subtitle: _, title: f } = this.props,
                                { isModal: h } = this.context;
                            return t.createElement(n.Z, { style: h ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, t.createElement(d.ZP, { backButtonType: l || (h ? "close" : "back"), backLocation: i, centerTitle: r, fixed: !h, hideBackButton: s, history: o, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, ref: e, rightControl: k, secondaryBar: b, style: [h && g.appBarModal, a], subtitle: _, title: f, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: l } = this.context;
                            a && (l ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: l, containerStyle: r, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: y, withoutBottomBarMobile: k } = this.props,
                        { isModal: b } = this.context,
                        _ = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return t.createElement(o.Z, null, t.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: y }), t.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, b && g.rootModal] }, !b && _, t.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [g.container, b && g.containerModal, r] }, b ? t.createElement(m.Z, { style: g.viewport }, _, l) : l), a ? t.createElement(n.Z, { style: [g.bottomBarModal, !b && !k && g.bottomBarMobile] }, t.createElement(i.Z, { isFullWidth: c, isLarge: d }, a)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = r.Z);
            const g = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = p;
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => d });
            var t = l(202784),
                n = l(500002),
                i = l(668214),
                r = l(997174),
                s = l(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class c extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: l, search: t },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const c = n || s;
                    ((c && n !== s) || (!c && l !== i) || t !== r || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: l, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), l(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(o(c));
        },
        301758: (e, a, l) => {
            l.d(a, { Z: () => b });
            var t = l(807896),
                n = l(202784),
                i = l(235902),
                r = l(521288),
                s = l(401388),
                o = l(988566),
                c = l(725516),
                d = l(443781),
                u = l(71620),
                m = l(668214),
                p = l(491963),
                g = l(836255);
            const y = (e, a) => a.tweetId,
                k = (e, a) => {
                    const l = a.tweetId,
                        t = l && g.Z.select(e, l);
                    return t ? (0, p.z0)(e, t) : void 0;
                },
                b = (0, m.Z)()
                    .propsFromState(() => ({ community: k, hydratedTweet: g.Z.createHydratedTweetSelector(y) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: p.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: a, fetchCommunityIfNeeded: l, hydratedTweet: u, onAvatarClick: m, onMediaClick: p, onPress: g, onScreenNameClick: y, tweetId: k, withBirdwatchPivot: b = !0, ..._ }) => {
                    const { featureSwitches: f, viewerUserId: h } = n.useContext(d.rC),
                        v = (0, c.z)(),
                        T = u?.community_id_str;
                    n.useEffect(() => {
                        T && (0, s.Z)(e) && l(T).catch(a());
                    }, [e, T, a, l]);
                    const w = n.useCallback(
                            (e) => {
                                v.scribeAction("click"), g && g(e);
                            },
                            [g, v],
                        ),
                        F = !!b,
                        V = u && (0, o.D$)(u, h, e),
                        K = V && (0, o.rl)(V);
                    return n.createElement(i.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => f.isTrue("responsive_web_edit_tweet_enabled") || f.isTrue("subscriptions_feature_labs_1004") } }, n.createElement(r.Z, (0, t.Z)({}, _, { loggedInUserId: h, onAvatarClick: m, onMediaClick: p, onPress: w, onScreenNameClick: y, shouldShowAltLabelAlways: !0, socialContextProps: K, tweet: u, withBirdwatchPivot: F })));
                });
        },
        301410: (e, a, l) => {
            l.d(a, { i: () => g.ZP, z: () => _ });
            var t = l(202784),
                n = l(928123),
                i = l.n(n),
                r = l(72845),
                s = l.n(r),
                o = l(57074),
                c = l.n(o),
                d = l(516951),
                u = l(88656),
                m = l(71620),
                p = l(163889),
                g = l(312771);
            const y = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: d.Z });
            class k extends t.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, a) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, p.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const b = ({ query: e, queryRef: a, render: l }) => {
                    const t = i()(e, a);
                    return l({ fetchStatus: g.ZP.LOADED, data: t, error: null, retry: d.Z });
                },
                _ = (e, a) =>
                    function ({ fetchPolicy: l = "store-or-network", render: n, variables: i }) {
                        const [r, o] = s()(e),
                            d = (0, m.n7)(a.errorConfig.context),
                            u = c()(i),
                            p = t.useCallback(() => {
                                o(u, { fetchPolicy: "network-only" });
                            }, [o, u]);
                        return (
                            t.useLayoutEffect(() => {
                                o(u, { fetchPolicy: l });
                            }, [l, o, u]),
                            r
                                ? t.createElement(
                                      t.Suspense,
                                      { fallback: t.createElement(y, { render: n }) },
                                      t.createElement(k, { errorHandler: d(a.errorConfig.options || {}), key: r.fetchKey, retry: p }, (a, l) => (a ? n({ fetchStatus: g.ZP.FAILED, error: a, data: null, retry: l }) : t.createElement(b, { query: e, queryRef: r, render: n }))),
                                  )
                                : null
                        );
                    };
        },
        702001: (e, a, l) => {
            l.d(a, { c: () => i });
            var t = l(516951),
                n = l(615656);
            const i = { [n.ZP.OtherUserSuspended]: { customAction: t.Z }, [n.ZP.StatusViewForbidden]: { customAction: t.Z } };
        },
        566220: (e, a, l) => {
            l.d(a, { R: () => r });
            var t = l(202784);
            const n = () => new Date(),
                i = t.createContext(n),
                r = () => t.useContext(i);
        },
        738321: (e, a, l) => {
            l.d(a, { X0: () => s, _b: () => i, gG: () => r });
            var t = l(782261),
                n = l(942893);
            function i(e) {
                const { dwellStartTime: a, eventInfo: l, tweet: i } = e,
                    r = Date.now() - a,
                    s = i ? t.Z.getOriginalTweet(i) : void 0;
                return { action: "view", data: { event_info: JSON.stringify({ duration_ms: r, event_info: l }), items: s ? [n.Z.getTweetItem(s)] : [] } };
            }
            function r(e) {
                const { element: a, eventInfo: l, tweet: i, userId: r } = e,
                    s = i ? t.Z.getOriginalTweet(i) : void 0;
                return { element: a, action: "click", data: { event_info: l, profile_id: r, items: s ? [n.Z.getTweetItem(s)] : [] } };
            }
            function s(e, a, l) {
                const i = l ? t.Z.getOriginalTweet(l) : void 0;
                return { element: "TweetActivityQueryRenderer", action: "error", data: { event_info: e, items: i ? [n.Z.getTweetItem(i)] : [], profile_id: a } };
            }
        },
        16222: (e, a, l) => {
            function t(e, a) {
                try {
                    return e();
                } catch (e) {
                    return a(e);
                }
            }
            l.d(a, { o: () => t });
        },
        595294: (e, a, l) => {
            l.d(a, { Z: () => Q });
            var t = l(202784),
                n = l(325686),
                i = l(674132),
                r = l.n(i),
                s = l(731708),
                o = l(352924),
                c = l(392237),
                d = l(161104),
                u = l(635998),
                m = l(689107),
                p = l(154003),
                g = l(157130);
            const y = r().iab73d4b,
                k = r().ha20397c,
                b = r().baf7a43c,
                _ = r().e8f674ab,
                f = r().d969327c,
                h = r().d8cbbcd4,
                v = r().af8fa2ae;
            function T(e, a, l, t, n) {
                const i = e.key,
                    r = t?.current?.[a] ? t.current[a].length : 0;
                if ("ArrowRight" === i)
                    if ((e.preventDefault(), l >= r - 1)) {
                        const e = a + 1 >= n ? 0 : a + 1;
                        t?.current?.[e]?.[0]?.focus();
                    } else t?.current?.[a]?.[l + 1]?.focus();
                else if ("ArrowLeft" === i)
                    if ((e.preventDefault(), 0 === l)) {
                        const e = a - 1 < 0 ? n - 1 : a - 1,
                            l = t?.current?.[e] ? t.current[e].length : 1;
                        t?.current?.[e]?.[l - 1]?.focus();
                    } else t?.current?.[a]?.[l - 1]?.focus();
            }
            const w = (e) => {
                    const { chartTitle: a, chartType: l, maxValue: i, minValue: r, noOfCategories: o, playAudioChart: c } = e,
                        d = _({ chartTitle: a, chartType: l, minValue: y(r), maxValue: y(i), noOfCategories: y(o) });
                    return t.createElement(n.Z, null, t.createElement(g.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => t.createElement(n.Z, { "aria-label": d, role: "dialog", style: F.popover }, t.createElement(n.Z, { style: F.popoverTitle }, t.createElement(s.ZP, { size: "title3", weight: "heavy" }, b)), t.createElement(n.Z, { style: F.popoverText }, t.createElement(s.ZP, { color: "gray700", size: "body", weight: "normal" }, d)), c ? t.createElement(p.ZP, { "aria-label": h, onPress: c, style: F.audioChartButton, type: "primaryFilled" }, f) : null, t.createElement(p.ZP, { onPress: e, type: "primaryOutlined" }, v)), withArrow: !0 }, t.createElement(n.Z, { role: "button" }, t.createElement(m.default, { "aria-label": k, style: F.audioChartIcon }))));
                },
                F = c.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, audioChartButton: { marginBottom: e.spaces.space8 }, audioChartIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                V = { borderRadii: "xSmall", layout: "fixedSpacing", spacing: "space2", width: "space56" };
            Object.freeze({ fixedBarWidth: "fixedBarWidth", fixedSpacing: "fixedSpacing" });
            var K = l(614983),
                A = l.n(K);
            const L = (e, a, l) => (100 * (e - l)) / (a - l),
                x = (e) => [].concat(...e.map((e) => (void 0 !== e.value ? e.value : e.values.map((e) => e.value)))),
                S = (e) => e.map((e) => e.values.map((e) => e.value).reduce((e, a) => e + a)),
                Z = (e) => (a) => e.popover ?? null,
                E = r().dec1d7ef,
                C = r().f765bead,
                B = ({ barConfig: e, data: a, maxValue: l, minValue: i }) => {
                    const r = t.useRef([]),
                        s = { ...V, ...e },
                        o = "fixedBarWidth" === s.layout,
                        [d, u] = t.useState(null),
                        m = (e, a, l) => c.default.create(() => ({ style: { flex: o ? null : 1, height: `${L(a.value, l, i)}%`, width: o ? `calc(${c.default.theme.spaces[s.width]} / ${e.values.length})` : 100 / e.values.length + "%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: a.color ? c.default.theme.colors[a.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[s.borderRadii], marginHorizontal: c.default.theme.spaces.space2, ...(!!e.popover && { cursor: "pointer" }) } })).style,
                        p = { height: "100%", display: "flex", flex: 1, justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", marginHorizontal: c.default.theme.spaces[s.spacing] },
                        y = (e) => {
                            d === e && u(null);
                        };
                    return a.map((e, s) => {
                        r.current?.push([]);
                        const c = e.values.map((e) => e.value).reduce((e, a) => Math.max(e, a)),
                            k = !!e.popover;
                        return t.createElement(
                            n.Z,
                            { key: `barGroup${s}`, style: [p, ((b = s), null !== d ? (b === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })], testID: `barGroup${s}` },
                            t.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !k, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", key: `barGroup${s}`, onDismiss: () => y(s), onHoverCardUnmount: () => y(s), onOpen: () => u(s), preferredVerticalOrientation: "up", renderContent: Z(e), withArrow: !0, wrapperStyle: { flex: o ? null : 1, flexDirection: "row", alignItems: "flex-end", width: "100%", height: `${L(c, l, i)}%` } },
                                e.values.map((l, i) => {
                                    const o = e.label ? E({ label: e.label?.props.children, group: l.group, value: l.value }) : C({ group: l.group, value: l.value });
                                    return t.createElement(n.Z, {
                                        "aria-label": o,
                                        focusable: !0,
                                        key: `barGroup${i}Bar${i}`,
                                        onKeyDown: (e) => {
                                            T(e, s, i, r, a.length);
                                        },
                                        ref: (e) => r.current?.[s]?.push(e),
                                        role: "img",
                                        style: m(e, l, c),
                                        testID: `barGroup${s}Bar${i}`,
                                    });
                                }),
                            ),
                        );
                        var b;
                    });
                },
                I = r().idea1817,
                P = r().fe94be6b,
                M = c.default.create((e) => ({ normalBarWrapper: { height: "100%", flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" } })),
                R = ({ audioChartGenerator: e, barConfig: a, data: l, frequencies: i, maxValue: r, minValue: s }) => {
                    const o = t.useRef(Array.from({ length: l.length }, () => null)),
                        d = (e) => (a) => {
                            const l = o?.current;
                            l && (l[e] = a), (o.current = l);
                        },
                        [u, m] = t.useState(null),
                        p = { ...V, ...a },
                        y = "fixedBarWidth" === p.layout,
                        k = (e) => ({ flex: y ? null : 1, height: `${L(e.value, r, s)}%`, width: y ? c.default.theme.spaces[p.width] : "auto", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: e.color ? c.default.theme.colors[e.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[p.borderRadii], marginHorizontal: c.default.theme.spaces[p.spacing], ...(!!e.popover && { cursor: "pointer" }) }),
                        b = (e) => {
                            u === e && m(null);
                        };
                    return l.map((a, r) => {
                        const s = a.label ? I({ label: a.label, value: a.value }) : P({ value: a.value }),
                            c = !!a.popover;
                        return t.createElement(
                            n.Z,
                            { key: `normalBarWrapper${r}`, style: [M.normalBarWrapper, ((p = r), null !== u ? (p === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })] },
                            t.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !c, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => b(r), onHoverCardUnmount: () => b(r), onOpen: () => m(r), preferredVerticalOrientation: "up", renderContent: Z(a), withArrow: !0, wrapperStyle: k(a) },
                                t.createElement(n.Z, {
                                    "aria-label": s,
                                    focusable: 0 === r,
                                    key: `bar${r}`,
                                    onKeyDown: (a) => {
                                        "a" === a.key &&
                                            ((a) => {
                                                i && e?.current?.playFrequencyAsTone(i?.[a], 0.7, 0.3);
                                            })(r),
                                            (function (e, a, l, t) {
                                                if ("ArrowRight" === e) {
                                                    const e = a + 1 >= t ? 0 : a + 1;
                                                    l?.current?.[a]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                } else if ("ArrowLeft" === e) {
                                                    const e = a - 1 < 0 ? t - 1 : a - 1;
                                                    l?.current?.[a]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                }
                                            })(a.key, r, o, l.length);
                                    },
                                    ref: d(r),
                                    role: "img",
                                    style: k(a),
                                    testID: `bar${r}`,
                                }),
                            ),
                        );
                        var p;
                    });
                },
                q = r().dec1d7ef,
                D = r().f765bead,
                H = ({ barConfig: e, data: a, maxValue: l, minValue: i }) => {
                    const r = t.useRef(Array.from({ length: a.length }, () => [])),
                        s = (e, a) => (l) => {
                            const t = r?.current;
                            t && (t[e][a] = l), (r.current = t);
                        },
                        o = { ...V, ...e },
                        d = "fixedBarWidth" === o.layout,
                        [u, m] = t.useState(null),
                        p = (e, a) => ({ height: `${L(a.value, l, i)}%`, width: d ? c.default.theme.spaces[o.width] : "100%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: a.color ? c.default.theme.colors[a.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[o.borderRadii], marginTop: c.default.theme.spaces.space2 }),
                        y = (e) => {
                            u === e && m(null);
                        };
                    return a.map((e, l) => {
                        r.current?.push([]);
                        const i = !!e.popover;
                        return t.createElement(
                            n.Z,
                            { key: `barGroup${l}`, style: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center", marginHorizontal: c.default.theme.spaces[o.spacing], ...((d = l), null !== u ? (d === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }), ...(i && { cursor: "pointer" }) }, testID: `barGroup${l}` },
                            t.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !i, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => y(l), onHoverCardUnmount: () => y(l), onOpen: () => m(l), preferredVerticalOrientation: "up", renderContent: Z(e), withArrow: !0, wrapperStyle: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center" } },
                                e.values.map((i, o) => {
                                    const c = e.label ? q({ label: e.label?.props.children, group: i.group, value: i.value }) : D({ group: i.group, value: i.value });
                                    return t.createElement(n.Z, {
                                        "aria-label": c,
                                        focusable: !0,
                                        key: `barGroup${o}Bar${o}`,
                                        onKeyDown: (e) => {
                                            T(e, l, o, r, a.length);
                                        },
                                        ref: s(l, o),
                                        role: "img",
                                        style: p(0, i),
                                        testID: `barGroup${l}Bar${o}`,
                                    });
                                }),
                            ),
                        );
                        var d;
                    });
                },
                O = r().ef8b2f54,
                N = r().d567ceda,
                W = r().f7b30768,
                z = r().hcd54328,
                $ = ({ gridlines: e, maxValue: a, minValue: l }) => (e ? e.map((e, i) => t.createElement(n.Z, { key: `gridline${i}`, style: [G.gridLine, { bottom: `${L(e, a, l)}%` }], testID: `gridline${i}` })) : null),
                j = ({ data: e, labelStyle: a }) => (e ? e.map((e, l) => ("string" == typeof e.label ? t.createElement(n.Z, { "aria-hidden": !0, key: `label${l}`, style: G.label }, t.createElement(s.ZP, { align: "center", color: "gray700", size: "subtext2", style: [{ marginTop: c.default.theme.spaces.space8 }, a], weight: "medium" }, e.label)) : t.createElement(n.Z, { "aria-hidden": !0, key: `label${l}`, style: G.label }, e.label))) : null),
                U = ({ maxValue: e, minValue: a, ticks: l }) => {
                    const i =
                            l ||
                            ((e, a) => {
                                const l = a + (e - a) / 2;
                                return [
                                    { value: a, label: t.createElement(s.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, a) },
                                    { value: l, label: t.createElement(s.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, l) },
                                    { value: e, label: t.createElement(s.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, e) },
                                ];
                            })(e, a),
                        r = i.sort((e, a) => e.value - a.value);
                    return r.map((l, i) => {
                        const s = 0 === i ? L(l.value, e, a) : (100 * (l.value - r[i - 1].value)) / (e - a);
                        return t.createElement(n.Z, { "aria-hidden": !0, key: `tick${i}`, style: { position: "relative", height: `${s}%`, paddingBottom: "0.75em" } }, l.label);
                    });
                },
                G = c.default.create((e) => ({ title: { color: e.colors.gray700, marginBottom: "1em" }, titleBar: { display: "flex", flexDirection: "row" }, grid: { display: "grid", gridTemplateColumns: "1fr auto", gridTemplateRows: "1fr auto", width: "100%", minWidth: "100px", height: `calc(${e.spaces.space56} * 2)`, padding: e.spaces.space4 }, chartArea: { position: "relative", height: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }, gridLine: { position: "absolute", width: "100%", height: 1, backgroundColor: e.colors.gray200 }, yAxis: { height: "100%", position: "relative", display: "flex", flexDirection: "column-reverse", marginStart: e.spaces.space12 }, xAxis: { display: "flex", flexDirection: "row" }, label: { flex: 1 } })),
                Q = ({ audioChart: e = !1, barConfig: a, data: l, dataGrouped: i, gridlines: r, labelStyle: c, stacked: m = !1, style: p, ticks: g, title: y, titleDescription: k }) => {
                    const b = (0, o.b)();
                    let _, f, h, v, T;
                    const F = t.useRef();
                    F.current || (F.current = new d.Z());
                    const V = g ? g.map((e) => e.value) : [],
                        K = ((e, a, l) => (void 0 !== e ? x(e) : void 0 !== a ? (l ? S(a) : x(a)) : void A()(e || a, "Either data or groupedData props must be passed")))(l, i, m);
                    if (!K) return null;
                    const L = Math.max(...K, ...V),
                        Z = Math.min(...K, ...V);
                    if (void 0 !== l)
                        (f = N),
                            (v = l.length),
                            e &&
                                ((h = F.current?.mapDataPointsToFrequencies([...K, ...V])),
                                (T = () => {
                                    F?.current?.playDisconnectedDataPointsAsTone(l, 0.7, 0.3);
                                })),
                            (_ = t.createElement(R, { audioChartGenerator: F, barConfig: a, data: l, frequencies: h, maxValue: L, minValue: Z }));
                    else {
                        if (void 0 === i) return null;
                        (T = void 0), (v = i.length), m ? ((_ = t.createElement(H, { barConfig: a, data: i, maxValue: L, minValue: Z })), (f = W)) : ((_ = t.createElement(B, { barConfig: a, data: i, maxValue: L, minValue: Z })), (f = z));
                    }
                    return t.createElement(n.Z, { "aria-labelledby": b, role: "figure" }, y && t.createElement(n.Z, { style: G.titleBar }, t.createElement(s.ZP, { focusable: !1, id: b, role: "heading", size: "subtext2", style: G.title, weight: "medium" }, y), k ? t.createElement(u.Z, { label: y, popover: k }) : null, t.createElement(w, { chartTitle: y, chartType: f, maxValue: L, minValue: Z, noOfCategories: v, playAudioChart: T })), t.createElement(n.Z, { style: [G.grid, p] }, t.createElement(n.Z, { "aria-label": O, focusable: !1, key: "chartArea", role: "application", style: G.chartArea }, t.createElement($, { gridlines: r, maxValue: L, minValue: Z }), _), t.createElement(n.Z, { key: "yAxis", style: G.yAxis }, t.createElement(U, { maxValue: L, minValue: Z, ticks: g })), t.createElement(n.Z, { key: "xAxis", style: G.xAxis }, t.createElement(j, { data: l || i, labelStyle: c }))));
                };
        },
        738545: (e, a, l) => {
            l.d(a, { ZP: () => w });
            var t = l(202784),
                n = l(325686),
                i = l(674132),
                r = l.n(i),
                s = l(212145),
                o = l(568320),
                c = l(123588),
                d = l(731708),
                u = l(280278),
                m = l(392237),
                p = l(635998);
            const g = r().i2785009,
                y = r().c778d80b,
                k = r().d9687d23,
                b = r().ac73eb5a,
                _ = r().c5a9f921,
                f = (e) => {
                    const { label: a, popover: l } = e;
                    return a ? t.createElement(n.Z, { style: T.labelBar }, t.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, a), l ? t.createElement(p.Z, { label: a, popover: l }) : null) : null;
                },
                h = (e) => {
                    const { style: a, unit: l } = e;
                    return l ? t.createElement(d.ZP, { color: "gray700", style: [T.unitText, a], weight: "medium" }, l) : null;
                },
                v = (e) => {
                    let a,
                        l,
                        { trendValue: i } = e;
                    return void 0 === i ? null : (Math.abs(i) < 0.1 ? ((i = Math.round(1e3 * i) / 1e3), (a = y(i))) : ((i = Math.round(100 * i) / 100), (a = g(i))), (l = ((e, a) => (e < 0 ? k({ trendValueNegativePercent: a }) : 0 === e ? b : _({ trendValuePositivePercent: a })))(i, a)), i < 0 ? t.createElement(n.Z, { style: T.trendBar, testID: "trendLabel" }, t.createElement(s.default, { "aria-label": l, style: T.trendIconNeg }), t.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, a)) : 0 === i ? t.createElement(n.Z, { style: T.trendBar, testID: "trendLabel" }, t.createElement(o.default, { "aria-label": l, style: T.trendIconZero }), t.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, a)) : t.createElement(n.Z, { style: T.trendBar, testID: "trendLabel" }, t.createElement(c.default, { "aria-label": l, style: T.trendIconPos }), t.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, a)));
                },
                T = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: a, count: l, label: i, popover: r, size: s, subTextList: o, trendValue: c, unit: m, value: p } = e,
                        g = m || void 0 !== c ? T.textWithMargin : void 0,
                        y = void 0 !== c ? T.textWithMargin : void 0;
                    return t.createElement(n.Z, { style: T.dataPoint }, t.createElement(f, { label: i, popover: r }), t.createElement(n.Z, { style: T.valueBar }, a ? t.createElement(u.ZP, { count: l, size: s, style: g, weight: "bold" }, p) : t.createElement(d.ZP, { size: s, style: g, weight: "bold" }, p), t.createElement(h, { style: y, unit: m }), t.createElement(v, { trendValue: c })), o);
                };
        },
        635998: (e, a, l) => {
            l.d(a, { Z: () => y });
            var t = l(202784),
                n = l(325686),
                i = l(674132),
                r = l.n(i),
                s = l(711223),
                o = l(731708),
                c = l(154003),
                d = l(157130),
                u = l(392237);
            const m = r().affbaf62,
                p = r().c388d026,
                g = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                y = (e) => {
                    const { label: a, popover: l } = e;
                    return t.createElement(n.Z, null, t.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => t.createElement(n.Z, { role: "dialog", style: g.popover }, t.createElement(n.Z, { style: g.popoverTitle }, t.createElement(o.ZP, { size: "title3", weight: "heavy" }, a)), t.createElement(n.Z, { style: g.popoverText }, l), t.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, t.createElement(n.Z, { role: "button" }, t.createElement(s.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        885015: (e, a, l) => {
            l.d(a, { Z: () => c });
            var t = l(807896),
                n = l(202784),
                i = l(325686),
                r = l(392237);
            class s extends n.Component {
                render() {
                    const { children: e, style: a, withGutter: l, ...r } = this.props,
                        s = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, o.column, l && o.withGutterColumn] }));
                    return n.createElement(i.Z, (0, t.Z)({ style: [a, o.root, l && o.withGutter] }, r), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-6107ac1a.55bbb18a.js.map

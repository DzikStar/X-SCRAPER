"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-e96e9bea"],
    {
        676763: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                i,
                t,
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
                                    selections: (i = [
                                        { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null },
                                    ]),
                                    storageKey: null,
                                },
                                (t = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }),
                                (r = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }),
                            ],
                            storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])',
                        },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: i, storageKey: null }, t, r], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
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
                i,
                t,
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
                        { alias: null, args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [i, t, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
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
                i,
                t,
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
                        { alias: null, args: (i = [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (o = [(t = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: i, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: o, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: i, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: o, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
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
                                        { alias: null, args: (d = [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (u = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [t, r, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: s, storageKey: null }], storageKey: null }]), storageKey: null },
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
        454948: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                i,
                t,
                r,
                s = {
                    argumentDefinitions: [
                        { kind: "RootArgument", name: "from_time" },
                        { kind: "RootArgument", name: "to_time" },
                    ],
                    kind: "Fragment",
                    metadata: null,
                    name: "CountriesBreakdown_metrics",
                    selections: [
                        { alias: null, args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [i, t, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "2d403a85148074a9bcb76e1fa79b1b48";
            const o = s;
        },
        173265: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i = {
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
            i.hash = "267e84804c59b2debdc9d5603ec77768";
            const t = i;
        },
        470911: (e, a, l) => {
            l.d(a, { Z: () => i });
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
            const i = n;
        },
        241545: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                i,
                t,
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
                        { alias: null, args: [(n = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] })], concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null }), { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }]), storageKey: null }], storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: null, args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [i, t, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: r, storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            s.hash = "7d9b06f760fba0db2bb4ee299657a23a";
            const o = s;
        },
        743738: (e, a, l) => {
            l.d(a, { Z: () => i });
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
            const i = n;
        },
        716754: (e, a, l) => {
            l.d(a, { Z: () => i });
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
            const i = n;
        },
        573519: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i = {
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
            i.hash = "3cb8d633319a8d17fc6409ac808b0a30";
            const t = i;
        },
        999325: (e, a, l) => {
            l.d(a, { Z: () => M });
            var n,
                i,
                t,
                r,
                s,
                o,
                d,
                u,
                c,
                m,
                g,
                k,
                y,
                p,
                _,
                b,
                f,
                T,
                F,
                h,
                v,
                K,
                w,
                L,
                V,
                A,
                S,
                C,
                B,
                q,
                P,
                I = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "first_48_hours_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (t = { defaultValue: null, kind: "LocalArgument", name: "requested_organic_metrics" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_promoted_metrics" }), (s = { defaultValue: null, kind: "LocalArgument", name: "restId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (c = { args: null, kind: "FragmentSpread", name: "LikeRetweetReplyAnalytics_metrics" }), (m = { args: null, kind: "FragmentSpread", name: "DataPointsGrid_metrics" }), (g = { args: null, kind: "FragmentSpread", name: "PromotionInfo_metrics" }), (k = { args: null, kind: "FragmentSpread", name: "VideoMetrics_metrics" }), (y = { args: null, kind: "FragmentSpread", name: "AudienceMetrics_metrics" }), (p = { args: null, kind: "FragmentSpread", name: "PromotionInfo_campaignInfo" }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: [c, m, g, k, y, p], storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, i, o, n, t, r],
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
                                                selections: (P = [
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
                                                                    { alias: null, args: (K = [_, (v = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] }), b]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (L = [(w = { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null }]), storageKey: null }, f, T], storageKey: null }], storageKey: null },
                                                                    { alias: "datapoints_grid", args: [_, { kind: "Variable", name: "requested_metrics", variableName: "requested_promoted_metrics" }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "promotion_info", args: [_, { kind: "Literal", name: "requested_metrics", value: ["Impressions", "Engagements"] }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "video", args: [_, (V = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] }), b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: null, args: K, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (S = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [f, T, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (A = [w]), storageKey: null }], storageKey: null }]), storageKey: null },
                                                                    { alias: null, args: K, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: S, storageKey: null },
                                                                    { alias: null, args: K, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: S, storageKey: null },
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
                                                    { alias: null, args: (B = [v]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_follow_status", plural: !0, selections: [{ alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: L, storageKey: null }, f, T], storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: "datapoints_grid", args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_organic_metrics" }], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: null },
                                                    { alias: "promotion_info", args: [C], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])' },
                                                    { alias: "video", args: [V], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (q = [f, T, { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: A, storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: q, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: q, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                                                    h,
                                                ]),
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: P, storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null },
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
            const M = I;
        },
        393416: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                t = {
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
                            selections: (i = [
                                { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                            ]),
                            storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])',
                        },
                        { alias: null, args: null, concreteType: "Ad", kind: "LinkedField", name: "ad", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdCreative", kind: "LinkedField", name: "creative", plural: !1, selections: [{ alias: "video", args: [{ fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }, n, { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" }], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: i, storageKey: null }], storageKey: null }], storageKey: null },
                    ],
                    type: "Tweet",
                    abstractKey: null,
                };
            t.hash = "28fb2130ff421a25cacd718a50d9c8c2";
            const r = t;
        },
        625661: (e, a, l) => {
            l.d(a, { ZP: () => m });
            var n = l(202784),
                i = l(614983),
                t = l.n(i),
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
                            t()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: l, fixed: i, hideBackButton: t, isFullWidth: r, isLarge: d, leftControl: u, middleControl: m, position: g, rightControl: k, secondaryBar: y, style: p, subtitle: _, title: b, titleDomId: f, titleIconCell: T, titleIconCellSize: F, withBackground: h, withWideContainer: v } = this.props,
                        { isModal: K } = this.context,
                        w = t ? u : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        L = (function (e, a, l) {
                            return e && !(a && l);
                        })(!!h, K, !!y);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: a, centeredLogo: l, isFullWidth: r, isLarge: d, leftControl: w, middleControl: m, position: c(g, K, i), rightControl: k, style: p, subtitle: _, title: b, titleDomId: f, titleIconCell: T, titleIconCellSize: F, withBackground: L, withWideContainer: v }), y || null);
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
            l.d(a, { Z: () => y, w: () => g });
            var n = l(202784),
                i = l(325686),
                t = l(108362),
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
                            const { appBarRef: e, appBarStyle: a, backButtonType: l, backLocation: t, centerTitle: r, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: y, rightControl: p, secondaryBar: _, subtitle: b, title: f } = this.props,
                                { isModal: T } = this.context;
                            return n.createElement(i.Z, { style: T ? [k.childViewAppBarRoot, k.appBarZindex] : k.appBarZindex }, n.createElement(u.ZP, { backButtonType: l || (T ? "close" : "back"), backLocation: t, centerTitle: r, fixed: !T, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: y, ref: e, rightControl: p, secondaryBar: _, style: [T && k.appBarModal, a], subtitle: b, title: f, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: l } = this.context;
                            a && (l ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: l, containerStyle: r, documentTitle: s, isFullWidth: d, isLarge: u, renderHeader: g, title: y, withoutBottomBarMobile: p } = this.props,
                        { isModal: _ } = this.context,
                        b = g ? g(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(c.Z.Configure, { documentTitle: s, headerless: !0, title: y }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [k.root, _ && k.rootModal] }, !_ && b, n.createElement(t.Z, { isFullWidth: d, isLarge: u, style: [k.container, _ && k.containerModal, r] }, _ ? n.createElement(m.Z, { style: k.viewport }, b, l) : l), a ? n.createElement(i.Z, { style: [k.bottomBarModal, !_ && !p && k.bottomBarMobile] }, n.createElement(t.Z, { isFullWidth: d, isLarge: u }, a)) : null));
                }
            }
            (g.defaultProps = { isFullWidth: !1, isLarge: !1 }), (g.contextType = r.Z);
            const k = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = g;
        },
        652904: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n = l(202784),
                i = l(500002),
                t = l(668214),
                r = l(997174),
                s = l(118823);
            const o = (0, t.Z)()
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
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: t, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    a.pathname !== l ? (this._isInBackground = !0) : this._isInBackground && a.pathname === l && ((this._isInBackground = !1), (o = !0));
                    const d = i || s;
                    ((d && i !== s) || (!d && l !== t) || n !== r || o) && this._performPageUpdates(this.props);
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
            const u = (0, i.ZP)(o(d));
        },
        301758: (e, a, l) => {
            l.d(a, { Z: () => _ });
            var n = l(807896),
                i = l(202784),
                t = l(235902),
                r = l(521288),
                s = l(401388),
                o = l(988566),
                d = l(725516),
                u = l(443781),
                c = l(71620),
                m = l(668214),
                g = l(491963),
                k = l(836255);
            const y = (e, a) => a.tweetId,
                p = (e, a) => {
                    const l = a.tweetId,
                        n = l && k.Z.select(e, l);
                    return n ? (0, g.z0)(e, n) : void 0;
                },
                _ = (0, m.Z)()
                    .propsFromState(() => ({ community: p, hydratedTweet: k.Z.createHydratedTweetSelector(y) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: g.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: a, fetchCommunityIfNeeded: l, hydratedTweet: c, onAvatarClick: m, onMediaClick: g, onPress: k, onScreenNameClick: y, tweetId: p, withBirdwatchPivot: _ = !0, ...b }) => {
                    const { featureSwitches: f, viewerUserId: T } = i.useContext(u.rC),
                        F = (0, d.z)(),
                        h = c?.community_id_str;
                    i.useEffect(() => {
                        h && (0, s.Z)(e) && l(h).catch(a());
                    }, [e, h, a, l]);
                    const v = i.useCallback(
                            (e) => {
                                F.scribeAction("click"), k && k(e);
                            },
                            [k, F],
                        ),
                        K = !!_,
                        w = c && (0, o.D$)(c, T, e),
                        L = w && (0, o.rl)(w);
                    return i.createElement(t.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => f.isTrue("responsive_web_edit_tweet_enabled") || f.isTrue("subscriptions_feature_labs_1004") } }, i.createElement(r.Z, (0, n.Z)({}, b, { loggedInUserId: T, onAvatarClick: m, onMediaClick: g, onPress: v, onScreenNameClick: y, shouldShowAltLabelAlways: !0, socialContextProps: L, tweet: c, withBirdwatchPivot: K })));
                });
        },
        301410: (e, a, l) => {
            l.d(a, { i: () => k.ZP, z: () => b });
            var n = l(202784),
                i = l(928123),
                t = l.n(i),
                r = l(72845),
                s = l.n(r),
                o = l(57074),
                d = l.n(o),
                u = l(516951),
                c = l(88656),
                m = l(71620),
                g = l(163889),
                k = l(312771);
            const y = ({ render: e }) => e({ fetchStatus: k.ZP.LOADING, data: null, error: null, retry: u.Z });
            class p extends n.Component {
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
                    const n = t()(e, a);
                    return l({ fetchStatus: k.ZP.LOADED, data: n, error: null, retry: u.Z });
                },
                b = (e, a) =>
                    function ({ fetchPolicy: l = "store-or-network", render: i, variables: t }) {
                        const [r, o] = s()(e),
                            u = (0, m.n7)(a.errorConfig.context),
                            c = d()(t),
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
                                      { fallback: n.createElement(y, { render: i }) },
                                      n.createElement(p, { errorHandler: u(a.errorConfig.options || {}), key: r.fetchKey, retry: g }, (a, l) => (a ? i({ fetchStatus: k.ZP.FAILED, error: a, data: null, retry: l }) : n.createElement(_, { query: e, queryRef: r, render: i }))),
                                  )
                                : null
                        );
                    };
        },
        702001: (e, a, l) => {
            l.d(a, { c: () => t });
            var n = l(516951),
                i = l(615656);
            const t = { [i.ZP.OtherUserSuspended]: { customAction: n.Z }, [i.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        566220: (e, a, l) => {
            l.d(a, { R: () => r });
            var n = l(202784);
            const i = () => new Date(),
                t = n.createContext(i),
                r = () => n.useContext(t);
        },
        738321: (e, a, l) => {
            l.d(a, { X0: () => s, _b: () => t, gG: () => r });
            var n = l(782261),
                i = l(942893);
            function t(e) {
                const { dwellStartTime: a, eventInfo: l, tweet: t } = e,
                    r = Date.now() - a,
                    s = t ? n.Z.getOriginalTweet(t) : void 0;
                return { action: "view", data: { event_info: JSON.stringify({ duration_ms: r, event_info: l }), items: s ? [i.Z.getTweetItem(s)] : [] } };
            }
            function r(e) {
                const { element: a, eventInfo: l, tweet: t, userId: r } = e,
                    s = t ? n.Z.getOriginalTweet(t) : void 0;
                return { element: a, action: "click", data: { event_info: l, profile_id: r, items: s ? [i.Z.getTweetItem(s)] : [] } };
            }
            function s(e, a, l) {
                const t = l ? n.Z.getOriginalTweet(l) : void 0;
                return { element: "TweetActivityQueryRenderer", action: "error", data: { event_info: e, items: t ? [i.Z.getTweetItem(t)] : [], profile_id: a } };
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
        928123: (e, a, l) => {
            var n = l(606161).useTrackLoadQueryInRender,
                i = l(138239),
                t = l(303566),
                r = l(437429),
                s = l(647677),
                o = (l(202784).useDebugValue, l(703383).__internal),
                d = o.fetchQueryDeduped,
                u = o.fetchQuery;
            l(826590);
            e.exports = function (e, a, l) {
                n();
                var o,
                    c = r(),
                    m = a.fetchKey,
                    g = a.fetchPolicy,
                    k = a.source,
                    y = a.variables,
                    p = a.networkCacheConfig,
                    _ = t(e, y, p);
                if ("PreloadedQuery_DEPRECATED" === a.kind)
                    _.request.node.params.name !== a.name && s(!1),
                        (o = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: m,
                            fetchObservable: d(c, _.request.identifier, function () {
                                return c === a.environment && null != k ? c.executeWithSource({ operation: _, source: k }) : c.execute({ operation: _ });
                            }),
                            fetchPolicy: g,
                            query: _,
                            renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy,
                        });
                else {
                    var b = u(c, _);
                    o = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != k && c === a.environment ? k.ifEmpty(b) : (a.environment, b), fetchKey: m, fetchPolicy: g, query: _, renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy };
                }
                return i(o);
            };
        },
        72845: (e, a, l) => {
            var n = (0, l(171600).default)(l(638636)),
                i = l(606161),
                t = i.loadQuery,
                r = i.useTrackLoadQueryInRender,
                s = l(995402),
                o = l(437429),
                d = l(202784),
                u = d.useCallback,
                c = d.useEffect,
                m = d.useRef,
                g = d.useState,
                k = l(703383).getRequest,
                y = { kind: "NullQueryReference" };
            function p(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== k(e).params.metadata.live;
            }
            e.exports = function (e, a) {
                var l = null != a ? a : y,
                    i = o();
                r();
                var d = s(),
                    k = m(new Set([l])),
                    _ = g(function () {
                        return l;
                    }),
                    b = _[0],
                    f = _[1],
                    T = g(function () {
                        return l;
                    }),
                    F = T[0],
                    h = T[1];
                l !== F && (k.current.add(l), h(l), f(l));
                var v = u(
                        function () {
                            d.current && (k.current.add(y), f(y));
                        },
                        [d],
                    ),
                    K = u(
                        function (a, l) {
                            var n = null != l && l.hasOwnProperty("__environment") ? { fetchPolicy: l.fetchPolicy, networkCacheConfig: l.networkCacheConfig, __nameForWarning: l.__nameForWarning } : l;
                            if (d.current) {
                                var r,
                                    s = t(null !== (r = null == l ? void 0 : l.__environment) && void 0 !== r ? r : i, e, a, n);
                                k.current.add(s), f(s);
                            }
                        },
                        [i, e, f, d],
                    ),
                    w = m(!1);
                return (
                    c(function () {
                        return function () {
                            w.current = !0;
                        };
                    }, []),
                    c(
                        function () {
                            if (!0 === w.current) return (w.current = !1), void ("NullQueryReference" !== b.kind && K(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig }));
                            var a = k.current;
                            if (d.current) {
                                var l,
                                    i = (0, n.default)(a);
                                try {
                                    for (i.s(); !(l = i.n()).done; ) {
                                        var t = l.value;
                                        if (t === b) break;
                                        a.delete(t), "NullQueryReference" !== t.kind && (p(e) ? t.dispose && t.dispose() : t.releaseQuery && t.releaseQuery());
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                            }
                        },
                        [b, d, K, e],
                    ),
                    c(
                        function () {
                            return function () {
                                var a,
                                    l = (0, n.default)(k.current);
                                try {
                                    for (l.s(); !(a = l.n()).done; ) {
                                        var i = a.value;
                                        "NullQueryReference" !== i.kind && (p(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery());
                                    }
                                } catch (e) {
                                    l.e(e);
                                } finally {
                                    l.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === b.kind ? null : b, K, v]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-e96e9bea.4a8a6fda.js.map

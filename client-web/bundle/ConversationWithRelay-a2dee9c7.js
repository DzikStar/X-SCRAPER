"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-a2dee9c7"],
    {
        676763: (e, l, a) => {
            a.d(l, { Z: () => o });
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
        175989: (e, l, a) => {
            a.d(l, { Z: () => o });
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
        651868: (e, l, a) => {
            a.d(l, { Z: () => m });
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
        454948: (e, l, a) => {
            a.d(l, { Z: () => o });
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
        173265: (e, l, a) => {
            a.d(l, { Z: () => t });
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
        470911: (e, l, a) => {
            a.d(l, { Z: () => i });
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
        241545: (e, l, a) => {
            a.d(l, { Z: () => o });
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
        743738: (e, l, a) => {
            a.d(l, { Z: () => i });
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
        716754: (e, l, a) => {
            a.d(l, { Z: () => i });
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
        573519: (e, l, a) => {
            a.d(l, { Z: () => t });
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
        999325: (e, l, a) => {
            a.d(l, { Z: () => Z });
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
                p,
                y,
                _,
                b,
                T,
                f,
                F,
                h,
                K,
                L,
                V,
                w,
                v,
                A,
                S,
                C,
                B,
                q,
                M,
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (c = { args: null, kind: "FragmentSpread", name: "LikeRetweetReplyAnalytics_metrics" }), (m = { args: null, kind: "FragmentSpread", name: "DataPointsGrid_metrics" }), (g = { args: null, kind: "FragmentSpread", name: "PromotionInfo_metrics" }), (k = { args: null, kind: "FragmentSpread", name: "VideoMetrics_metrics" }), (p = { args: null, kind: "FragmentSpread", name: "AudienceMetrics_metrics" }), (y = { args: null, kind: "FragmentSpread", name: "PromotionInfo_campaignInfo" }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: [c, m, g, k, p, y], storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null }], storageKey: null }],
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
                                                selections: (M = [
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
                                                                    { alias: "like_retweet_replies", args: [(_ = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" }), { kind: "Literal", name: "requested_metrics", value: ["Likes", "Retweets", "Replies"] }, (b = { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" })], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: (F = [(T = { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null }), (f = { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null })]), storageKey: null },
                                                                    (h = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    { alias: null, args: (L = [_, (K = { kind: "Literal", name: "requested_metrics", value: ["UniqueImpressions"] }), b]), concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_follow_status", plural: !1, selections: [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (w = [(V = { alias: null, args: null, kind: "ScalarField", name: "segment_name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "segment_value", storageKey: null }]), storageKey: null }, T, f], storageKey: null }], storageKey: null },
                                                                    { alias: "datapoints_grid", args: [_, { kind: "Variable", name: "requested_metrics", variableName: "requested_promoted_metrics" }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "promotion_info", args: [_, { kind: "Literal", name: "requested_metrics", value: ["Impressions", "Engagements"] }, b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: "video", args: [_, (v = { kind: "Literal", name: "requested_metrics", value: ["VideoViews", "UniqueVideoViews", "VideoStarts", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoCompletions"] }), b], concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "metrics_total", plural: !0, selections: F, storageKey: null },
                                                                    { alias: null, args: L, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_gender", plural: !1, selections: (S = [{ alias: null, args: null, concreteType: "HubbleMetricsTotalValue", kind: "LinkedField", name: "items", plural: !0, selections: [T, f, { alias: null, args: null, concreteType: "HubbleBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: (A = [V]), storageKey: null }], storageKey: null }]), storageKey: null },
                                                                    { alias: null, args: L, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_age", plural: !1, selections: S, storageKey: null },
                                                                    { alias: null, args: L, concreteType: "HubbleMetricsTotalValueSlice", kind: "LinkedField", name: "audience_top_countries", plural: !1, selections: S, storageKey: null },
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
                                                    { alias: null, args: (B = [K]), concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_follow_status", plural: !0, selections: [{ alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: w, storageKey: null }, T, f], storageKey: 'audience_follow_status(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: "datapoints_grid", args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_organic_metrics" }], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: null },
                                                    { alias: "promotion_info", args: [C], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["Impressions"])' },
                                                    { alias: "video", args: [v], concreteType: "AnayticsMetricsTotalValue", kind: "LinkedField", name: "organic_metrics_total", plural: !0, selections: F, storageKey: 'organic_metrics_total(requested_metrics:["VideoViews","UniqueVideoViews","VideoStarts","VideoPlayed25Percent","VideoPlayed50Percent","VideoPlayed75Percent","VideoCompletions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_gender", plural: !0, selections: (q = [T, f, { alias: null, args: null, concreteType: "AnalyticsAudienceBreakdownSegment", kind: "LinkedField", name: "breakdown_segment", plural: !1, selections: A, storageKey: null }]), storageKey: 'audience_gender(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_age", plural: !0, selections: q, storageKey: 'audience_age(requested_metrics:["UniqueImpressions"])' },
                                                    { alias: null, args: B, concreteType: "AnalyticsAudienceMetricsTotalValue", kind: "LinkedField", name: "audience_top_countries", plural: !0, selections: q, storageKey: 'audience_top_countries(requested_metrics:["UniqueImpressions"])' },
                                                    h,
                                                ]),
                                                type: "Tweet",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "Tweet", kind: "LinkedField", name: "tweet", plural: !1, selections: M, storageKey: null }], type: "TweetWithVisibilityResults", abstractKey: null },
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
        393416: (e, l, a) => {
            a.d(l, { Z: () => r });
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
        625661: (e, l, a) => {
            a.d(l, { ZP: () => m });
            var n = a(202784),
                i = a(614983),
                t = a.n(i),
                r = a(325686),
                s = a(370006),
                o = a(786998),
                d = a(929028),
                u = a(386802);
            function c(e, l, a) {
                return e || (!l && a ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: l } = this.props;
                            t()(l || e, "Either onBackClick must be specified, or history should be supplied"), l ? l(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: l } = this.props;
                            l && l.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: l, centeredLogo: a, fixed: i, hideBackButton: t, isFullWidth: r, isLarge: d, leftControl: u, middleControl: m, position: g, rightControl: k, secondaryBar: p, style: y, subtitle: _, title: b, titleDomId: T, titleIconCell: f, titleIconCellSize: F, withBackground: h, withWideContainer: K } = this.props,
                        { isModal: L } = this.context,
                        V = t ? u : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        w = (function (e, l, a) {
                            return e && !(l && a);
                        })(!!h, L, !!p);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: l, centeredLogo: a, isFullWidth: r, isLarge: d, leftControl: V, middleControl: m, position: c(g, L, i), rightControl: k, style: y, subtitle: _, title: b, titleDomId: T, titleIconCell: f, titleIconCellSize: F, withBackground: w, withWideContainer: K }), p || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: l } = this.context,
                        a = d.Z.getBackgroundStyles();
                    return l ? n.createElement(r.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = u.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, l, a) => {
            a.d(l, { Z: () => p, w: () => g });
            var n = a(202784),
                i = a(325686),
                t = a(108362),
                r = a(386802),
                s = a(392237),
                o = a(652904),
                d = a(555079),
                u = a(625661),
                c = a(449067),
                m = a(715601);
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: l, backButtonType: a, backLocation: t, centerTitle: r, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: p, rightControl: y, secondaryBar: _, subtitle: b, title: T } = this.props,
                                { isModal: f } = this.context;
                            return n.createElement(i.Z, { style: f ? [k.childViewAppBarRoot, k.appBarZindex] : k.appBarZindex }, n.createElement(u.ZP, { backButtonType: a || (f ? "close" : "back"), backLocation: t, centerTitle: r, fixed: !f, hideBackButton: s, history: o, isFullWidth: c, isLarge: m, middleControl: g, onBackClick: p, ref: e, rightControl: y, secondaryBar: _, style: [f && k.appBarModal, l], subtitle: b, title: T, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: l } = this.props,
                                { isModal: a } = this.context;
                            l && (a ? window.requestAnimationFrame(() => l(e)) : l(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: l, children: a, containerStyle: r, documentTitle: s, isFullWidth: d, isLarge: u, renderHeader: g, title: p, withoutBottomBarMobile: y } = this.props,
                        { isModal: _ } = this.context,
                        b = g ? g(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(c.Z.Configure, { documentTitle: s, headerless: !0, title: p }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [k.root, _ && k.rootModal] }, !_ && b, n.createElement(t.Z, { isFullWidth: d, isLarge: u, style: [k.container, _ && k.containerModal, r] }, _ ? n.createElement(m.Z, { style: k.viewport }, b, a) : a), l ? n.createElement(i.Z, { style: [k.bottomBarModal, !_ && !y && k.bottomBarMobile] }, n.createElement(t.Z, { isFullWidth: d, isLarge: u }, l)) : null));
                }
            }
            (g.defaultProps = { isFullWidth: !1, isLarge: !1 }), (g.contextType = r.Z);
            const k = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                p = g;
        },
        652904: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(202784),
                i = a(500002),
                t = a(668214),
                r = a(997174),
                s = a(118823);
            const o = (0, t.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: l },
                            location: { pathname: a, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: t, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    l.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && l.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const d = i || s;
                    ((d && i !== s) || (!d && a !== t) || n !== r || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: l, updateLocation: a, updateTweetDetailNav: n } = e;
                    l.scribePageImpression(), a(l.contextualScribeNamespace, l.contextualScribeData), n(l.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const u = (0, i.ZP)(o(d));
        },
        301758: (e, l, a) => {
            a.d(l, { Z: () => _ });
            var n = a(807896),
                i = a(202784),
                t = a(235902),
                r = a(521288),
                s = a(401388),
                o = a(988566),
                d = a(725516),
                u = a(443781),
                c = a(71620),
                m = a(668214),
                g = a(491963),
                k = a(836255);
            const p = (e, l) => l.tweetId,
                y = (e, l) => {
                    const a = l.tweetId,
                        n = a && k.Z.select(e, a);
                    return n ? (0, g.z0)(e, n) : void 0;
                },
                _ = (0, m.Z)()
                    .propsFromState(() => ({ community: y, hydratedTweet: k.Z.createHydratedTweetSelector(p) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("QUOTE_TWEET_CONTAINER"), fetchCommunityIfNeeded: g.ZP.fetchOneIfNeeded }))(({ community: e, createLocalApiErrorHandler: l, fetchCommunityIfNeeded: a, hydratedTweet: c, onAvatarClick: m, onMediaClick: g, onPress: k, onScreenNameClick: p, tweetId: y, withBirdwatchPivot: _ = !0, ...b }) => {
                    const { featureSwitches: T, viewerUserId: f } = i.useContext(u.rC),
                        F = (0, d.z)(),
                        h = c?.community_id_str;
                    i.useEffect(() => {
                        h && (0, s.Z)(e) && a(h).catch(l());
                    }, [e, h, l, a]);
                    const K = i.useCallback(
                            (e) => {
                                F.scribeAction("click"), k && k(e);
                            },
                            [k, F],
                        ),
                        L = !!_,
                        V = c && (0, o.D$)(c, f, e),
                        w = V && (0, o.rl)(V);
                    return i.createElement(t.ZP.Provider, { value: { isEditTweetConsumptionEnabled: () => T.isTrue("responsive_web_edit_tweet_enabled") || T.isTrue("subscriptions_feature_labs_1004") } }, i.createElement(r.Z, (0, n.Z)({}, b, { loggedInUserId: f, onAvatarClick: m, onMediaClick: g, onPress: K, onScreenNameClick: p, shouldShowAltLabelAlways: !0, socialContextProps: w, tweet: c, withBirdwatchPivot: L })));
                });
        },
        301410: (e, l, a) => {
            a.d(l, { i: () => k.ZP, z: () => b });
            var n = a(202784),
                i = a(928123),
                t = a.n(i),
                r = a(72845),
                s = a.n(r),
                o = a(57074),
                d = a.n(o),
                u = a(516951),
                c = a(88656),
                m = a(71620),
                g = a(163889),
                k = a(312771);
            const p = ({ render: e }) => e({ fetchStatus: k.ZP.LOADING, data: null, error: null, retry: u.Z });
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, l) {
                    if (!(e instanceof c.Z)) throw e;
                    this.props.errorHandler(e), (0, g.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const _ = ({ query: e, queryRef: l, render: a }) => {
                    const n = t()(e, l);
                    return a({ fetchStatus: k.ZP.LOADED, data: n, error: null, retry: u.Z });
                },
                b = (e, l) =>
                    function ({ fetchPolicy: a = "store-or-network", render: i, variables: t }) {
                        const [r, o] = s()(e),
                            u = (0, m.n7)(l.errorConfig.context),
                            c = d()(t),
                            g = n.useCallback(() => {
                                o(c, { fetchPolicy: "network-only" });
                            }, [o, c]);
                        return (
                            n.useLayoutEffect(() => {
                                o(c, { fetchPolicy: a });
                            }, [a, o, c]),
                            r
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(p, { render: i }) },
                                      n.createElement(y, { errorHandler: u(l.errorConfig.options || {}), key: r.fetchKey, retry: g }, (l, a) => (l ? i({ fetchStatus: k.ZP.FAILED, error: l, data: null, retry: a }) : n.createElement(_, { query: e, queryRef: r, render: i }))),
                                  )
                                : null
                        );
                    };
        },
        702001: (e, l, a) => {
            a.d(l, { c: () => t });
            var n = a(516951),
                i = a(615656);
            const t = { [i.ZP.OtherUserSuspended]: { customAction: n.Z }, [i.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        566220: (e, l, a) => {
            a.d(l, { R: () => r });
            var n = a(202784);
            const i = () => new Date(),
                t = n.createContext(i),
                r = () => n.useContext(t);
        },
        738321: (e, l, a) => {
            a.d(l, { X0: () => s, _b: () => t, gG: () => r });
            var n = a(782261),
                i = a(942893);
            function t(e) {
                const { dwellStartTime: l, eventInfo: a, tweet: t } = e,
                    r = Date.now() - l,
                    s = t ? n.Z.getOriginalTweet(t) : void 0;
                return { action: "view", data: { event_info: JSON.stringify({ duration_ms: r, event_info: a }), items: s ? [i.Z.getTweetItem(s)] : [] } };
            }
            function r(e) {
                const { element: l, eventInfo: a, tweet: t, userId: r } = e,
                    s = t ? n.Z.getOriginalTweet(t) : void 0;
                return { element: l, action: "click", data: { event_info: a, profile_id: r, items: s ? [i.Z.getTweetItem(s)] : [] } };
            }
            function s(e, l, a) {
                const t = a ? n.Z.getOriginalTweet(a) : void 0;
                return { element: "TweetActivityQueryRenderer", action: "error", data: { event_info: e, items: t ? [i.Z.getTweetItem(t)] : [], profile_id: l } };
            }
        },
        16222: (e, l, a) => {
            function n(e, l) {
                try {
                    return e();
                } catch (e) {
                    return l(e);
                }
            }
            a.d(l, { o: () => n });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-a2dee9c7.db60aeda.js.map

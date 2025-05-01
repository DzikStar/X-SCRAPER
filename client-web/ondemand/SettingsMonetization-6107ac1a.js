"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-6107ac1a"],
    {
        904368: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsDiamonds_user", selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_diamonds", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "13e2e1fb85b37a208cdf11443c07510e" };
            const i = n;
        },
        923747: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AwardsListItem_awardsPurchase",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "transaction_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "sender_results",
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
                                            { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                            { args: null, kind: "FragmentSpread", name: "UserName_user" },
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
                    { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }], storageKey: null },
                ],
                type: "TweetAwardDetail",
                abstractKey: null,
                hash: "632551ab92d8e31d280d0b9a098dc3c1",
            };
            const i = n;
        },
        228715: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AwardsList_awardsHistorySlice", selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_awardsHistorySlice" }], type: "TweetAwardsHistorySlice", abstractKey: null, hash: "cf591448499c495aedc4003de437d59d" };
            const i = n;
        },
        818414: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "EstimatedRevenueTile_user",
                    selections: [
                        { args: (n = [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }]), kind: "FragmentSpread", name: "useMonetizationPayoutAllTimeRevenueAmount_user" },
                        { args: n, kind: "FragmentSpread", name: "useMonetizationPayoutAmount_user" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "110d530ac902b8ac4ad337a010367ee1";
            const s = i;
        },
        9410: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "FollowUserButtonRelay_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "follow_request_sent", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_follow_eligible", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_followed_by", storageKey: null },
                    { alias: null, args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "affiliates_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }], storageKey: null }], storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "User",
                abstractKey: null,
                hash: "404b456fe11d517709fcb84150ac1889",
            };
            const i = n;
        },
        717626: (e, l, a) => {
            a.d(l, { Z: () => y });
            var n,
                i,
                s,
                r,
                t,
                d,
                u,
                o,
                c,
                g,
                m,
                p = {
                    fragment: { argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "recent_awards_limit" }]), kind: "Fragment", metadata: null, name: "MonetizationAwardsRevenueQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "5551" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null }), { args: (r = [{ kind: "Literal", name: "awardsEnabled", value: !0 }]), kind: "FragmentSpread", name: "EstimatedRevenueTile_user" }, { args: r, kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }, { alias: null, args: (t = [{ kind: "Variable", name: "count", variableName: "recent_awards_limit" }]), concreteType: "TweetAwardsHistorySlice", kind: "LinkedField", name: "awards_granted_slice", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_awardsHistorySlice" }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "AwardsDiamonds_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"5551")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "MonetizationAwardsRevenueQuery",
                        selections: [
                            {
                                alias: "viewer",
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
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            s,
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (c = [(u = { alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null })]), storageKey: null },
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: [u, o, { alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_diamonds", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: c, storageKey: null },
                                                            { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: t,
                                                                concreteType: "TweetAwardsHistorySlice",
                                                                kind: "LinkedField",
                                                                name: "awards_granted_slice",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "TweetAwardDetail",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_id", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "timestamp_millis", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "UserResults",
                                                                                kind: "LinkedField",
                                                                                name: "sender_results",
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
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "ApiUser",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "legacy",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                                    {
                                                                                                        alias: "affiliates_highlighted_label",
                                                                                                        args: null,
                                                                                                        concreteType: "HighlightedUserLabelResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "identity_profile_labels_highlighted_label",
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
                                                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [g], storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                                ],
                                                                                                type: "User",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    m,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [d, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, m], type: "Tweet", abstractKey: null }], storageKey: null }, m], storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            m,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            m,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"5551")',
                            },
                        ],
                    },
                    params: { id: "kXcc0Edof6svF-lk2byuyg", metadata: {}, name: "MonetizationAwardsRevenueQuery", operationKind: "query", text: null },
                };
            p.hash = "cd58cb989f803a4b51ddb03f6a82d095";
            const y = p;
        },
        470206: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "MonetizationAwardsSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), { args: null, kind: "FragmentSpread", name: "useAwardsDeactivate_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "MonetizationAwardsSettingsQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "9aX5g4DnUZtOROAY-c4zxg", metadata: {}, name: "MonetizationAwardsSettingsQuery", operationKind: "query", text: null },
                };
            t.hash = "9f1eb72ee4124d7c9197ca4f354245ef";
            const d = t;
        },
        967670: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                d,
                u,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                            { defaultValue: null, kind: "LocalArgument", name: "limit" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MonetizationAwardsTransactionsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (i = [{ kind: "Literal", name: "s", value: "5551" }]),
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
                                                                (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        {
                                                                            alias: "awards_granted_slice",
                                                                            args: null,
                                                                            concreteType: "TweetAwardsHistorySlice",
                                                                            kind: "LinkedField",
                                                                            name: "__MonetizationAwardsTransactionsQuery_awards_granted_slice_slice",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "AwardsList_awardsHistorySlice" },
                                                                                (r = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "SliceInfo",
                                                                                    kind: "LinkedField",
                                                                                    name: "slice_info",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                }),
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        { args: [{ kind: "Literal", name: "awardsEnabled", value: !0 }], kind: "FragmentSpread", name: "EstimatedRevenueTile_user" },
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
                                    storageKey: 'viewer_v2(s:"5551")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "MonetizationAwardsTransactionsQuery",
                        selections: [
                            {
                                alias: "viewer",
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
                                                    s,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (t = [
                                                                    { kind: "Variable", name: "count", variableName: "limit" },
                                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                ]),
                                                                concreteType: "TweetAwardsHistorySlice",
                                                                kind: "LinkedField",
                                                                name: "awards_granted_slice",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "TweetAwardDetail",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_id", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "timestamp_millis", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_anonymous", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "total_coins_worth", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "UserResults",
                                                                                kind: "LinkedField",
                                                                                name: "sender_results",
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
                                                                                            s,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "ApiUser",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "legacy",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                                    {
                                                                                                        alias: "affiliates_highlighted_label",
                                                                                                        args: null,
                                                                                                        concreteType: "HighlightedUserLabelResponse",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "identity_profile_labels_highlighted_label",
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
                                                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [d], storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                                ],
                                                                                                type: "User",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    u,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, u], type: "Tweet", abstractKey: null }], storageKey: null }, u], storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: t, filters: null, handle: "slice", key: "MonetizationAwardsTransactionsQuery_awards_granted_slice", kind: "LinkedHandle", name: "awards_granted_slice" },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "CreatorDashboardRevenueInfo",
                                                                kind: "LinkedField",
                                                                name: "superfollows_revenue",
                                                                plural: !1,
                                                                selections: (o = [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null },
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: o, storageKey: null },
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: o, storageKey: null },
                                                            u,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"5551")',
                            },
                        ],
                    },
                    params: { id: "8S_of9efbNK7t-CL-jSZuQ", metadata: { sliceInfoPath: ["viewer", "user_results", "result", "awards_granted_slice", "slice_info"] }, name: "MonetizationAwardsTransactionsQuery", operationKind: "query", text: null },
                };
            c.hash = "e0059d0ba4726b5ad5e2fd2ab07ef7c9";
            const g = c;
        },
        403556: (e, l, a) => {
            a.d(l, { Z: () => T });
            var n = a(807896),
                i = a(202784),
                s = a(194504),
                r = a(235902),
                t = a(392237),
                d = a(325686),
                u = a(674132),
                o = a.n(u),
                c = a(912021),
                g = a(516951),
                m = a(731708),
                p = a(310088),
                y = a(175993),
                k = a(58881),
                _ = a(530732);
            const F = o().d2414d31,
                K = () => o().ce4e85ae,
                h = o().fb9f6f39;
            class b extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, c.Z)((e, l) => {
                            const { pathname: a, query: n, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: n, method: "push", state: { ...i, lockScroll: l } };
                        })),
                        (this._unlisten = g.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, l, a, n) => {
                            const i = t.default.theme.colors.text,
                                s = t.default.theme.colors.gray700;
                            return a || n ? (e || l ? i : s) : e ? i : s;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: l } = this.props;
                            l && l(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": l, badgeCount: a, badgePip: n, children: s, color: r, isActive: u, isCompact: o, isPillLink: c, isRoundedRect: g, isWebRedesign: y, retainScrollPosition: b, style: w, to: S } = this.props,
                        { location: T } = this.state,
                        v = S ? this._getMemoizedLink(S, b) : void 0,
                        L = u ? u(S) : T?.pathname === v?.pathname,
                        R = k.Z.generate({ backgroundColor: "transparent", color: t.default.theme.colors.text, insetFocusRing: !0 }),
                        x = y ? "medium" : L ? "bold" : "medium";
                    return i.createElement(_.Z, { "aria-label": l, "aria-selected": L, focusable: !!L, interactiveStyles: R, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [c ? f.pill : f.link, c && L ? f.active : null, o ? (c ? f.compactPill : f.compactLink) : null, g ? f.roundedRect : null, w], withoutInteractiveStyles: y || c }, ({ isFocused: l, isHovered: u }) => i.createElement(d.Z, { style: c && f.flexGrow }, i.createElement(m.ZP, { size: y ? "headline2" : void 0, style: [f.text, { color: this._getTextColor(L, u, y, c) }, o && f.compactText, y && l && f.focusedText], weight: x }, e && i.createElement(e, { style: f.icon }), s, y || c ? null : i.createElement(d.Z, { style: L && [f.border, { backgroundColor: t.default.theme.colors[r] }] })), a ? i.createElement(p.Z, { count: a, standalone: !0, style: [f.badge, a >= 10 && f.multiDigitBadge, a >= 20 && f.truncatedCountBadge], truncatedCountFormatter: h, unreadCountLabel: F, withBorder: !1 }) : n ? i.createElement(p.Z, { pip: !0, standalone: !0, style: f.badgePip, textColor: "red500", unreadCountLabel: K, withBorder: !1 }) : null));
                }
            }
            (b.contextType = y.Z), (b.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const f = t.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                w = b,
                S = t.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": l, isCompact: a, isPillLink: t, isRoundedRect: d, links: u, style: o, visibleItemIndex: c }) => {
                    const g = u
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        p = m() && !t,
                        y = i.useMemo(
                            () =>
                                u.filter(Boolean).map(({ label: l, viewType: s, ...r }, u) => {
                                    const o = p ? [S.linkRedesign, 0 === u && S.firstLinkRedesign, e && 0 === u && S.withNoPaddingStart] : void 0;
                                    return i.createElement(w, (0, n.Z)({ viewType: s }, r, { isCompact: a, isPillLink: t, isRoundedRect: d, isWebRedesign: p, style: o }), l);
                                }),
                            [e, a, t, d, p, u],
                        );
                    return i.createElement(s.Z, { "aria-label": l, buttonsContainerStyle: t && S.gap, childrenStyle: !p && S.flexGrow, key: g, style: [t ? null : S.segmentedControl, p && S.leftAligned, o], visibleItemIndex: c }, y);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-6107ac1a.b0f91d8a.js.map

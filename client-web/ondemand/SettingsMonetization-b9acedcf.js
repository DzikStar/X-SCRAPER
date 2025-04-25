"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-b9acedcf"],
    {
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
            a.d(l, { Z: () => k });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                g,
                y,
                m = {
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
                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            s,
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (c = [(d = { alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null })]), storageKey: null },
                                                            { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: [d, o, { alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_diamonds", storageKey: null }], storageKey: null },
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
                                                                                            u,
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
                                                                                                    (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                                ],
                                                                                                type: "User",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    y,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, y], type: "Tweet", abstractKey: null }], storageKey: null }, y], storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            y,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            y,
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
            m.hash = "cd58cb989f803a4b51ddb03f6a82d095";
            const k = m;
        },
        470206: (e, l, a) => {
            a.d(l, { Z: () => u });
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
            const u = t;
        },
        967670: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
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
                                                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [u], storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                                ],
                                                                                                type: "User",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    d,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, d], type: "Tweet", abstractKey: null }], storageKey: null }, d], storageKey: null },
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
                                                            d,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            d,
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-b9acedcf.8f72eb3a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-213f649d"],
    {
        246489: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "rest_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "subscription_event_type" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MonetizationSuperFollowsTransactionDetailsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: null,
                                    args: (i = [
                                        { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                        { kind: "Literal", name: "s", value: "5551" },
                                        { kind: "Variable", name: "subscription_event_type", variableName: "subscription_event_type" },
                                    ]),
                                    concreteType: "SuperfollowsSubscriptionPurchase",
                                    kind: "LinkedField",
                                    name: "superfollows_subscription_by_rest_id",
                                    plural: !1,
                                    selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "created_at_msec", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "payment_platform", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "price_in_hundred", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "consumer_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { args: null, kind: "FragmentSpread", name: "UserCell_user" }, { args: null, kind: "FragmentSpread", name: "FollowUserButtonRelay_user" }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }],
                                    storageKey: null,
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
                        name: "MonetizationSuperFollowsTransactionDetailsQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "SuperfollowsSubscriptionPurchase",
                                kind: "LinkedField",
                                name: "superfollows_subscription_by_rest_id",
                                plural: !1,
                                selections: [
                                    s,
                                    r,
                                    t,
                                    u,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "consumer_results",
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
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiUser",
                                                                kind: "LinkedField",
                                                                name: "legacy",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "follow_request_sent", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                            {
                                                                alias: null,
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
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "TimelineUrl",
                                                                                kind: "LinkedField",
                                                                                name: "url",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                                                    { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                                    {
                                                                                        alias: "urtEndpointOptions",
                                                                                        args: null,
                                                                                        concreteType: "TimelineUrtEndpointOptions",
                                                                                        kind: "LinkedField",
                                                                                        name: "urt_endpoint_options",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                            {
                                                                                                alias: "requestParams",
                                                                                                args: null,
                                                                                                concreteType: "RequestParamsEntry",
                                                                                                kind: "LinkedField",
                                                                                                name: "request_params",
                                                                                                plural: !0,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [o], storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "super_follow_eligible", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "super_followed_by", storageKey: null },
                                                            { alias: null, args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "affiliates_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                            c,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            c,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "38GXcQ1vYCiUp10agkZAQw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "MonetizationSuperFollowsTransactionDetailsQuery", operationKind: "query", text: null },
                };
            g.hash = "b3a3da30429069de6ce258edaa91d161";
            const m = g;
        },
        658156: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                kind: "Fragment",
                metadata: null,
                name: "PayoutThresholdProgress_user",
                selections: [
                    { args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "useMonetizationPayoutAmount_user" },
                    { args: null, kind: "FragmentSpread", name: "useMonetizationPayoutThresholdAmount_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "1f946f97a51b8e59702c211b210f1663",
            };
            const i = n;
        },
        158163: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PayoutsListItem_creatorPayout",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "amount_paid_out_in_cents", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "created_at_msec", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "stripe_transaction_id", storageKey: null },
                ],
                type: "CreatorPayout",
                abstractKey: null,
                hash: "83b46dd198df3ccb5e74c1402a642818",
            };
            const i = n;
        },
        915814: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PayoutsList_creatorPayoutSlice", selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_creatorPayoutSlice" }], type: "CreatorPayoutSlice", abstractKey: null, hash: "7697338c8a5c8450e997d2b88465cb00" };
            const i = n;
        },
        469363: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SubscribersListItem_superfollowsSubscriptionPurchase",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "price_in_hundred", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "consumer_results",
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
                ],
                type: "SuperfollowsSubscriptionPurchase",
                abstractKey: null,
                hash: "49e8393b23e0d9d186c1f2d894524d87",
            };
            const i = n;
        },
        564018: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SubscribersList_superfollowsSubscriptionSlice", selections: [{ args: null, kind: "FragmentSpread", name: "useMonetizationHistory_superfollowsSubscriptionSlice" }], type: "SuperfollowsSubscriptionSlice", abstractKey: null, hash: "bf4c54adb11a4b93d0b2383aea71196b" };
            const i = n;
        },
        102614: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPricingScreen_subscriptionsPriceOfferings",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "SubscriptionsPriceOffering",
                        kind: "LinkedField",
                        name: "offers",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "price", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "SubscriptionsPriceOfferings",
                abstractKey: null,
                hash: "8a6f719e07e824332decc584bce06322",
            };
            const i = n;
        },
        399384: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPricingScreen_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsSaveOnboarding_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsCreatePriceChangeRequest_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "d93307a02cac71e41ef67226e545e31e",
            };
            const i = n;
        },
        371758: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementPricingScreen_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "a78562b4cd2fea130acf70dfe2877470",
            };
            const i = n;
        },
        228820: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = { argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }], kind: "Fragment", metadata: null, name: "SuperFollowsSettingsInternalLinkPivot_user", selections: [{ args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }], type: "User", abstractKey: null, hash: "703fdd6a0065aec8ec26a16a33fa6bfe" };
            const i = n;
        },
        470199: (e, a, l) => {
            l.d(a, { x: () => n });
            const n = Object.freeze({ AppStore: "AppStore", PlayStore: "PlayStore", Stripe: "Stripe", Web: "Web" });
        },
        656166: (e, a, l) => {
            l.d(a, { x: () => n });
            const n = Object.freeze({ InitialSale: "InitialSale", Renewal: "Renewal" });
        },
        428606: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsDeactivateMutation", selections: (n = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], kind: "ScalarField", name: "awards_feature_deactivate", storageKey: 'awards_feature_deactivate(s:"4721")' }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "useAwardsDeactivateMutation", selections: n }, params: { id: "01C9DqWmpi6YUNYaIWMBwA", metadata: {}, name: "useAwardsDeactivateMutation", operationKind: "mutation", text: null } };
            i.hash = "13e5f85637ab2360823b10c0eb64d939";
            const s = i;
        },
        97141: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useAwardsDeactivate_user", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], type: "User", abstractKey: null, hash: "f0c8fb39a573eeb9f480e2b1452b75b1" };
            const i = n;
        },
        58367: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useMonetizationHistory_awardsHistorySlice",
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
                            { args: null, kind: "FragmentSpread", name: "AwardsListItem_awardsPurchase" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "TweetAwardsHistorySlice",
                abstractKey: null,
                hash: "2e3206c2d456bbcb5973bb4e0687da47",
            };
            const i = n;
        },
        496790: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useMonetizationHistory_creatorPayoutSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "CreatorPayout",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "created_at_msec", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "PayoutsListItem_creatorPayout" },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                ],
                type: "CreatorPayoutSlice",
                abstractKey: null,
                hash: "54df04e39759ebe0fd306be269f62aeb",
            };
            const i = n;
        },
        483169: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useMonetizationHistory_superfollowsSubscriptionSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "SuperfollowsSubscriptionPurchase",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "created_at_msec", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "SubscribersListItem_superfollowsSubscriptionPurchase" },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                ],
                type: "SuperfollowsSubscriptionSlice",
                abstractKey: null,
                hash: "642a5d0a036a7dc20209b7b8c4fbf185",
            };
            const i = n;
        },
        689438: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAllTimeRevenueAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (n = [{ alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null }]), storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: n, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: n, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "59bfc4e16e122ddcd6f093657e137573";
            const s = i;
        },
        737722: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (n = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null }]), storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: n, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: n, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "a3ddf3a7e3d949c0df6ebd21c029ca1e";
            const s = i;
        },
        551652: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useMonetizationPayoutThresholdAmount_user", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null, hash: "a7feb1fb1419eed9ac574e03fea93d01" };
            const i = n;
        },
        467874: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "new_price" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperFollowsCreatePriceChangeRequestMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "new_price", variableName: "new_price" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "super_follow_create_price_change",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useSuperFollowsCreatePriceChangeRequestMutation", selections: i },
                    params: { id: "qMfdwQGHu5bwK8ZBhj-wzQ", metadata: {}, name: "useSuperFollowsCreatePriceChangeRequestMutation", operationKind: "mutation", text: null },
                };
            s.hash = "dea793cfe7dbb7568b9c8c060ddb5557";
            const r = s;
        },
        870242: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsCreatePriceChangeRequest_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingPriceChangeRequestId_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "8d4de95b7959546e0e4dfca7b62dd537",
            };
            const i = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-213f649d.310f8f0a.js.map

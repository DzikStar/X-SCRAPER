"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-6107ac1a"],
    {
        520512: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "allowGamblingAds" }]), kind: "Fragment", metadata: null, name: "AdsCategoriesMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_gambling_ads", variableName: "allowGamblingAds" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "AdsCategoriesMutation", selections: i }, params: { id: "eRWyTnzFgPgv9D4W8ujf6A", metadata: {}, name: "AdsCategoriesMutation", operationKind: "mutation", text: null } };
            t.hash = "58347e2cd632b3c8fb00f7f08a6b5c7d";
            const r = t;
        },
        795738: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AdsCategoriesQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: (l = {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserPreferences",
                                    kind: "LinkedField",
                                    name: "user_preferences",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "allow_gambling_ads", storageKey: null },
                                        { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                    ],
                                    storageKey: null,
                                }),
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "AdsCategoriesQuery", selections: [l] },
                    params: { id: "FO_KX1o77E3vYL14rATn9Q", metadata: {}, name: "AdsCategoriesQuery", operationKind: "query", text: null },
                };
            i.hash = "5cedb9567de269f8e1609fd181602c63";
            const t = i;
        },
        767758: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "isAllowed" }]), kind: "Fragment", metadata: null, name: "AudienceAndTaggingAllowVideoDownloadsMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_video_downloads", variableName: "isAllowed" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "AudienceAndTaggingAllowVideoDownloadsMutation", selections: i }, params: { id: "oe9_UzzuQUeSU4qYVtMwQg", metadata: {}, name: "AudienceAndTaggingAllowVideoDownloadsMutation", operationKind: "mutation", text: null } };
            t.hash = "e1f72765089e35a46c2387c811fc3f60";
            const r = t;
        },
        251985: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AudienceAndTaggingQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: (l = {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserPreferences",
                                    kind: "LinkedField",
                                    name: "user_preferences",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null },
                                        { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                    ],
                                    storageKey: null,
                                }),
                                action: "THROW",
                            },
                            { kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "fetchDownloadSettingAllowed_viewer" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "AudienceAndTaggingQuery",
                        selections: [
                            l,
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "FWApxg844rupV7YVWzHNug", metadata: {}, name: "AudienceAndTaggingQuery", operationKind: "query", text: null },
                };
            r.hash = "c077b6cb29b09b0ac1b73e428078b883";
            const s = r;
        },
        181188: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                kind: "Fragment",
                metadata: null,
                name: "AwardsSettingsInternalLinkPivot_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null },
                    { args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "PayoutThresholdProgress_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "a926eed5a115bd33c917fb7153702784",
            };
            const i = l;
        },
        181196: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "GrokSettingsScreenQuery", selections: [{ alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "XaiDataSharingSettings_preference" }, { args: null, kind: "FragmentSpread", name: "XaiPersonalizationSettings_preference" }, { args: null, kind: "FragmentSpread", name: "XaiMemory_preference" }, (l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "GrokSettingsScreenQuery", selections: [{ alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_xai_data_sharing", storageKey: null }, l, { alias: null, args: null, kind: "ScalarField", name: "allow_xai_personalization", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "allow_grok_memory", storageKey: null }], storageKey: null }] }, params: { id: "teCat2yuEC6e9oilkVKCgw", metadata: {}, name: "GrokSettingsScreenQuery", operationKind: "query", text: null } };
            i.hash = "95fb2f5f909cdb768318aedda9937212";
            const t = i;
        },
        905402: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "hideSubscriptionsOnProfile" }]), kind: "Fragment", metadata: null, name: "HiddenSubscriptionsSettingsMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "hide_subscriptions_on_profile", variableName: "hideSubscriptionsOnProfile" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "HiddenSubscriptionsSettingsMutation", selections: i }, params: { id: "xC9DvIAKUd4SniHOiu_gKQ", metadata: {}, name: "HiddenSubscriptionsSettingsMutation", operationKind: "mutation", text: null } };
            t.hash = "ebadbc32843b8ecaa06d4c4b55c5a366";
            const r = t;
        },
        167120: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HiddenSubscriptionsSettings_preference",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "hide_subscriptions_on_profile", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "UserPreferences",
                abstractKey: null,
                hash: "6340f9774831697e5b5db0accb7fb21b",
            };
            const i = l;
        },
        143543: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "ManageAffiliateBadgesQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [{ kind: "Literal", name: "s", value: "84b0" }]),
                                concreteType: "ManagedAffiliations",
                                kind: "LinkedField",
                                name: "managed_affiliations",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ManagedAffiliation",
                                        kind: "LinkedField",
                                        name: "affiliations",
                                        plural: !0,
                                        selections: [
                                            (i = { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null }),
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "affiliated_account_results",
                                                plural: !1,
                                                selections: [
                                                    (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                        (r = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiUser",
                                                                            kind: "LinkedField",
                                                                            name: "legacy",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
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
                                                        action: "THROW",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'managed_affiliations(s:"84b0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "ManageAffiliateBadgesQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
                                concreteType: "ManagedAffiliations",
                                kind: "LinkedField",
                                name: "managed_affiliations",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ManagedAffiliation",
                                        kind: "LinkedField",
                                        name: "affiliations",
                                        plural: !0,
                                        selections: [
                                            i,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "affiliated_account_results",
                                                plural: !1,
                                                selections: [
                                                    t,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                            { kind: "InlineFragment", selections: [r, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    s,
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'managed_affiliations(s:"84b0")',
                            },
                        ],
                    },
                    params: { id: "CT653aMU4uP9EedJJWuSZg", metadata: {}, name: "ManageAffiliateBadgesQuery", operationKind: "query", text: null },
                };
            o.hash = "56d779cda2fc5ed541448134b6f5b7f2";
            const u = o;
        },
        799076: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l,
                i,
                t,
                r,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "MonetizationIDVScreenQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), { kind: "RequiredField", field: (t = { alias: null, args: [{ kind: "Literal", name: "view", value: { verification_flow: "CreatorIdv" } }], kind: "ScalarField", name: "identity_verification_status", storageKey: 'identity_verification_status(view:{"verification_flow":"CreatorIdv"})' }), action: "THROW" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "MonetizationIDVScreenQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: l,
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, r], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "WJgtCvmOuz52SSRVH98yXg", metadata: {}, name: "MonetizationIDVScreenQuery", operationKind: "query", text: null },
                };
            s.hash = "1fe0867df1abb3f28e5d633fcc72f8b3";
            const o = s;
        },
        56301: (e, a, n) => {
            n.d(a, { Z: () => p });
            var l,
                i,
                t,
                r,
                s,
                o,
                u,
                d,
                c,
                m,
                g = {
                    fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }]), kind: "Fragment", metadata: null, name: "MonetizationSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "is_active_creator", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "awards_eligibility", storageKey: null }), { args: (d = [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }]), kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }, { args: d, kind: "FragmentSpread", name: "SuperFollowsSettingsInternalLinkPivot_user" }, { args: d, kind: "FragmentSpread", name: "AwardsSettingsInternalLinkPivot_user" }, { args: d, kind: "FragmentSpread", name: "useMonetizationPayoutAmount_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }, { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationStatusDescription_viewer" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "MonetizationSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: i,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    t,
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
                                                    { kind: "InlineFragment", selections: [r, s, o, u, { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (c = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null }]), storageKey: null }, { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: c, storageKey: null }] }, { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: c, storageKey: null }, { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null }, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            m,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "669l97INfasuMJpzgAZckA", metadata: {}, name: "MonetizationSettingsQuery", operationKind: "query", text: null },
                };
            g.hash = "fb5601a4f84129e9c12b38c57764f4fc";
            const p = g;
        },
        658156: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
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
            const i = l;
        },
        795239: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "ProfileCustomizationScreenQuery", selections: [{ alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "HiddenSubscriptionsSettings_preference" }, (l = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "ProfileCustomizationScreenQuery", selections: [{ alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hide_subscriptions_on_profile", storageKey: null }, l], storageKey: null }] }, params: { id: "nREVX5vQMgYq_cSDnMMc9Q", metadata: {}, name: "ProfileCustomizationScreenQuery", operationKind: "query", text: null } };
            i.hash = "a3fea82ec0e7539e2f280d925e816b8c";
            const t = i;
        },
        97233: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                r,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "RepliesGetUserToxicReplyFilterSettingQuery", selections: [{ alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "ToxicReplyFilterSetting", kind: "LinkedField", name: "toxic_reply_filter_setting", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useToggleToxicReplyFilterSetting_userToxicReplyFilterSetting" }, (r = { alias: null, args: null, kind: "ScalarField", name: "enabled", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "RepliesGetUserToxicReplyFilterSettingQuery", selections: [{ alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ToxicReplyFilterSetting", kind: "LinkedField", name: "toxic_reply_filter_setting", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }] },
                    params: { id: "kmAhocLFK1cbzXxGq5Boow", metadata: {}, name: "RepliesGetUserToxicReplyFilterSettingQuery", operationKind: "query", text: null },
                };
            o.hash = "d67c4e19399da899df0f34ae2d1f5acf";
            const u = o;
        },
        873959: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationStatusDescription_viewer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_active_creator", storageKey: null },
                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "056707a51ce2d70524e8ab8b618cb028",
            };
            const i = l;
        },
        228820: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = { argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }], kind: "Fragment", metadata: null, name: "SuperFollowsSettingsInternalLinkPivot_user", selections: [{ args: [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }], kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }], type: "User", abstractKey: null, hash: "703fdd6a0065aec8ec26a16a33fa6bfe" };
            const i = l;
        },
        591668: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "allow_for_you_recommendations" }]), kind: "Fragment", metadata: null, name: "UserPreferencesMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_for_you_recommendations", variableName: "allow_for_you_recommendations" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "UserPreferencesMutation", selections: i }, params: { id: "8CvfCvbcmHcdpq4SNfsXCA", metadata: {}, name: "UserPreferencesMutation", operationKind: "mutation", text: null } };
            t.hash = "347c8857d9cf5880617d3579dab5e6aa";
            const r = t;
        },
        86218: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "UserPreferencesQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: (l = {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserPreferences",
                                    kind: "LinkedField",
                                    name: "user_preferences",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "allow_for_you_recommendations", storageKey: null },
                                        { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                    ],
                                    storageKey: null,
                                }),
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "UserPreferencesQuery", selections: [l] },
                    params: { id: "Eq4mORcq33ezwOHKNA_YJg", metadata: {}, name: "UserPreferencesQuery", operationKind: "query", text: null },
                };
            i.hash = "b34f99ad5e6e4556ed453c5aa2b22417";
            const t = i;
        },
        5974: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "allowXaiDataSharing" }]), kind: "Fragment", metadata: null, name: "XaiDataSharingSettingsMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_xai_data_sharing", variableName: "allowXaiDataSharing" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "XaiDataSharingSettingsMutation", selections: i }, params: { id: "KEfCyU0XXJQ8AZOxiMWuSQ", metadata: {}, name: "XaiDataSharingSettingsMutation", operationKind: "mutation", text: null } };
            t.hash = "bebfb1fce18b567d0624cf7e06a7bb9b";
            const r = t;
        },
        903423: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "XaiDataSharingSettings_preference",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "allow_xai_data_sharing", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "UserPreferences",
                abstractKey: null,
                hash: "1c037a19325ca079abe6185e49eaa012",
            };
            const i = l;
        },
        206878: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "allow_grok_memory" }]), kind: "Fragment", metadata: null, name: "XaiMemoryMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_grok_memory", variableName: "allow_grok_memory" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "XaiMemoryMutation", selections: i }, params: { id: "LiRRkGlfd-47HI98W4kVeQ", metadata: {}, name: "XaiMemoryMutation", operationKind: "mutation", text: null } };
            t.hash = "5331ca83737676a2983d1d9abe731c4b";
            const r = t;
        },
        269877: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "XaiMemory_preference",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "allow_grok_memory", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "UserPreferences",
                abstractKey: null,
                hash: "56a13deb3d4a8ae47d81a0043c5284e8",
            };
            const i = l;
        },
        599999: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = { fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "allowXaiPersonalization" }]), kind: "Fragment", metadata: null, name: "XaiPersonalizationSettingsMutation", selections: (i = [{ alias: null, args: [{ kind: "Variable", name: "allow_xai_personalization", variableName: "allowXaiPersonalization" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: l, kind: "Operation", name: "XaiPersonalizationSettingsMutation", selections: i }, params: { id: "JbFOnszPZQclTK-4UHDjvw", metadata: {}, name: "XaiPersonalizationSettingsMutation", operationKind: "mutation", text: null } };
            t.hash = "a389747486873f33dd45ed615a98b619";
            const r = t;
        },
        87095: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "XaiPersonalizationSettings_preference",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "allow_xai_personalization", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "UserPreferences",
                abstractKey: null,
                hash: "8ea321ff8a1158b9b45dd8ca6d9cd390",
            };
            const i = l;
        },
        667218: (e, a, n) => {
            n.d(a, { n: () => l });
            const l = Object.freeze({ Ads: "Ads", AppleAppStore: "AppleAppStore", Gift: "Gift", GooglePlay: "GooglePlay", Stripe: "Stripe", TPay: "TPay", Twitter: "Twitter", Unknown: "Unknown" });
        },
        658236: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "affiliations" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useManagedAffiliationsUpdateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "affiliations", variableName: "affiliations" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "managed_affiliations_update",
                                plural: !1,
                                selections: [(t = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "AffiliationManagementFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useManagedAffiliationsUpdateMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "managed_affiliations_update", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: null }] },
                    params: { id: "tHVYwctPhLe1BXEkVqAdwQ", metadata: {}, name: "useManagedAffiliationsUpdateMutation", operationKind: "mutation", text: null },
                };
            r.hash = "e0edcc9427df8aa89c5a62132e3e3da7";
            const s = r;
        },
        689438: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAllTimeRevenueAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "all_time_revenue_in_cents", storageKey: null }]), storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: l, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: l, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "59bfc4e16e122ddcd6f093657e137573";
            const t = i;
        },
        737722: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }],
                    kind: "Fragment",
                    metadata: null,
                    name: "useMonetizationPayoutAmount_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null }]), storageKey: null }, action: "THROW" },
                        { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: l, storageKey: null }] },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: l, storageKey: null }, action: "THROW" },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "a3ddf3a7e3d949c0df6ebd21c029ca1e";
            const t = i;
        },
        551652: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useMonetizationPayoutThresholdAmount_user", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null, hash: "a7feb1fb1419eed9ac574e03fea93d01" };
            const i = l;
        },
        626593: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "offerProgramId" },
                            { defaultValue: null, kind: "LocalArgument", name: "priceIdToSwitch" },
                            { defaultValue: null, kind: "LocalArgument", name: "productId" },
                            { defaultValue: null, kind: "LocalArgument", name: "redeemOfferType" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRedeemOfferMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "offer_program_id", variableName: "offerProgramId" },
                                    { kind: "Variable", name: "price_id_to_switch", variableName: "priceIdToSwitch" },
                                    { kind: "Variable", name: "product_id", variableName: "productId" },
                                    { kind: "Variable", name: "redeem_offer_type", variableName: "redeemOfferType" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "redeem_offer",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                                        ],
                                        type: "WebPaymentsRedeemOfferResultError",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useRedeemOfferMutation", selections: i },
                    params: { id: "Kx3Kby4pi2amR8SfB8QV2A", metadata: {}, name: "useRedeemOfferMutation", operationKind: "mutation", text: null },
                };
            t.hash = "54ba7b29bfd10ea8eb4eb50a48a991e1";
            const r = t;
        },
        283846: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                i,
                t,
                r,
                s,
                o,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "current_product_sku" },
                            { defaultValue: null, kind: "LocalArgument", name: "find_target_product_sku" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTierSwitchStatusQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (i = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        {
                                                                            alias: null,
                                                                            args: (r = [
                                                                                { kind: "Variable", name: "current_product_sku", variableName: "current_product_sku" },
                                                                                { fields: [{ kind: "Variable", name: "find_target_product_identifier", variableName: "find_target_product_sku" }], kind: "ObjectValue", name: "option" },
                                                                            ]),
                                                                            concreteType: null,
                                                                            kind: "LinkedField",
                                                                            name: "web_tier_switch_progress",
                                                                            plural: !1,
                                                                            selections: [
                                                                                t,
                                                                                (s = {
                                                                                    kind: "InlineFragment",
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "target_product_sku", storageKey: null },
                                                                                    ],
                                                                                    type: "WebPaymentsTierSwitchProgress",
                                                                                    abstractKey: null,
                                                                                }),
                                                                                (o = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "WebPaymentsGetTierSwitchProgressError", abstractKey: null }),
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
                                                        action: "THROW",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"4721")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useTierSwitchStatusQuery", selections: [{ alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "web_tier_switch_progress", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isWebPaymentsGetTierSwitchProgressResult" }, s, o], storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "wU3n9GpHHMz92VCWEBHbhA", metadata: {}, name: "useTierSwitchStatusQuery", operationKind: "query", text: null },
                };
            d.hash = "96fd3c2b5f77434e2243b19987a1eb2f";
            const c = d;
        },
        940644: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "enabled" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useToggleToxicReplyFilterSettingMutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "enabled", variableName: "enabled" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                kind: "ScalarField",
                                name: "user_toxic_reply_filter_setting_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, l], kind: "Operation", name: "useToggleToxicReplyFilterSettingMutation", selections: t },
                    params: { id: "2DSpolLNDpVL7KDJ-UWHSg", metadata: {}, name: "useToggleToxicReplyFilterSettingMutation", operationKind: "mutation", text: null },
                };
            r.hash = "7db544305925f602b5d60404770b1379";
            const s = r;
        },
        583082: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useToggleToxicReplyFilterSetting_userToxicReplyFilterSetting",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "enabled", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "ToxicReplyFilterSetting",
                abstractKey: null,
                hash: "c269031f7aa468b3667a29c3842078f5",
            };
            const i = l;
        },
        779610: (e, a, n) => {
            n.d(a, { Z: () => d });
            var l = n(202784),
                i = n(325686),
                t = n(191796),
                r = n(58399),
                s = n(731708),
                o = n(952428),
                u = n(392237);
            const d = (e) => {
                    const { decoration: a, description: n, disabled: d = !1, isActive: m = !1, label: g, link: p, onPress: y, paddingHorizontal: k, renderRightContent: f, role: _ = "tab", styleOverride: b, testID: F = "pivot", thumbnail: K, thumbnailSize: S, withoutArrow: h = !1 } = e,
                        v = [c.thumbnailContainer, "medium" === S && c.thumbnailContainerMedium],
                        w = "string" == typeof g ? l.createElement(s.ZP, null, g) : g,
                        T = "object" == typeof p && p.external && !p.openInSameFrame,
                        L = n ? ("string" == typeof n ? l.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${F}-description` }, n) : n) : null,
                        R = l.useMemo(() => ("space0" === k ? { paddingHorizontal: 0 } : { paddingHorizontal: k ? u.default.theme.spaces[k] : u.default.theme.componentDimensions.gutterHorizontal }), [k]);
                    return l.createElement(o.Z, { "aria-selected": "tab" === _ ? m : null, disabled: d, link: d ? void 0 : p, onPress: y, role: _, style: [c.root, R, d && c.disabled, b], testID: F, withInteractiveStyling: !!p || !!y }, l.createElement(i.Z, { style: c.contentContainer }, K ? l.createElement(i.Z, { style: v }, K) : null, l.createElement(i.Z, { style: c.content }, w, L), f ? f() : null, (!p && !y) || d || h ? null : T ? l.createElement(t.default, { style: c.icon }) : l.createElement(r.default, { style: c.icon })), a);
                },
                c = u.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${u.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, a, n) => {
            n.d(a, { Z: () => m });
            var l = n(202784),
                i = n(325686),
                t = n(731708),
                r = n(352924),
                s = n(822399),
                o = n(98538),
                u = n(392237);
            const d = (e) => {
                const { decoration: a, isCompact: n, progressBarConfig: d, statConfig: m, title: g, valueCurrent: p, valueMax: y } = e,
                    k = (0, r.F)(),
                    f = ((_ = d), u.default.theme.colors[_?.color || "blue900"]);
                var _;
                const b = (function (e) {
                        return { borderRadius: u.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    F = (function (e) {
                        return { borderRadius: u.default.theme.borderRadii[e?.borderRadii || "medium"], height: u.default.theme.spaces[e?.height || "space8"], backgroundColor: u.default.theme.colors.gray50 };
                    })(d);
                return l.createElement(i.Z, { style: c.root }, l.createElement(i.Z, { style: c.decoration }, a), l.createElement(i.Z, { style: c.title }, l.createElement(t.ZP, { size: "subtext2", weight: "medium" }, g)), l.createElement(i.Z, { id: k, style: c.valueLabel }, m.value ? l.createElement(o.Z, null, l.createElement(o.Z.Value, null, m.value), l.createElement(o.Z.Label, null, m.label)) : l.createElement(t.ZP, { weight: "bold" }, m.label)), l.createElement(i.Z, { style: n ? c.progressBarContainerCompact : c.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, l.createElement(s.Z, { "aria-describedby": k, "aria-valuemax": y, colorValue: f, progress: p / y, progressStyle: b, style: F })));
            };
            const c = u.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = l.memo(d);
        },
        943401: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l = n(202784),
                i = n(731708),
                t = n(392237);
            class r extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: a } = this.props;
                            return l.createElement(i.ZP, { link: a, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: a, learnMoreLink: n } = this.props,
                        t = s.root;
                    return a && n ? l.createElement(i.ZP, { color: "gray700", size: "subtext2", style: t }, e, " ", this._renderLearnMore()) : l.createElement(i.ZP, { color: "gray700", size: "subtext2", style: t }, e);
                }
            }
            const s = t.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                o = r;
        },
        98538: (e, a, n) => {
            n.d(a, { Z: () => g });
            var l = n(202784),
                i = n(325686),
                t = n(731708),
                r = n(891198),
                s = n(280278),
                o = n(392237);
            const u = "subtext1",
                d = l.createContext({ onMedia: !1 });
            class c extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: a, onMedia: n, onPress: i } = this.props;
                    return l.createElement(t.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: a, onClick: i }, l.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (c.Group = (e) =>
                l.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    l.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, a, n) => l.createElement(i.Z, { key: a, style: a < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (c.Label = ({ children: e, style: a }) => l.createElement(d.Consumer, null, ({ onMedia: n }) => l.createElement(t.ZP, { children: e, color: n ? "white" : "gray700", size: u, style: a }))),
                (c.Value = ({ animated: e, children: a, count: n, style: i, weight: r = "bold" }) => l.createElement(d.Consumer, null, ({ onMedia: o }) => (e ? l.createElement(s.ZP, { children: a, count: n, size: u, style: i, weight: r }) : l.createElement(t.ZP, { children: a, color: o ? "white" : "text", size: u, style: i, weight: r }))));
            const m = o.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-6107ac1a.5662816a.js.map

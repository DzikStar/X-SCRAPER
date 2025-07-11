"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-960914ab"],
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
        629928: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                i,
                t,
                r,
                s,
                u,
                d,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
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
                                                    { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [t, r, s, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), u], storageKey: null }, d], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            d,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            o.hash = "6269adea05f11011ee2eec87df25951d";
            const c = o;
        },
        993770: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: i },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            t.hash = "6b62958a6368974d13a27b8fe59103e0";
            const r = t;
        },
        143543: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l,
                i,
                t,
                r,
                s,
                u,
                d = {
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
                                                                        (r = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
                                                                        (s = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "UserCore",
                                                                            kind: "LinkedField",
                                                                            name: "core",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
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
                                                            { kind: "InlineFragment", selections: [r, s, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    u,
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
                    params: { id: "DlrOqocXwzWgm0CWhM2EfA", metadata: {}, name: "ManageAffiliateBadgesQuery", operationKind: "query", text: null },
                };
            d.hash = "2ef19119cd8fbd2b63ee87dc85c1ae56";
            const o = d;
        },
        799076: (e, a, n) => {
            n.d(a, { Z: () => u });
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
            const u = s;
        },
        56301: (e, a, n) => {
            n.d(a, { Z: () => y });
            var l,
                i,
                t,
                r,
                s,
                u,
                d,
                o,
                c,
                g,
                m = {
                    fragment: { argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "awardsEnabled" }]), kind: "Fragment", metadata: null, name: "MonetizationSettingsQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "is_active_creator", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "award_eligible", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "awards_eligibility", storageKey: null }), { args: (o = [{ kind: "Variable", name: "awardsEnabled", variableName: "awardsEnabled" }]), kind: "FragmentSpread", name: "PayoutThresholdProgress_user" }, { args: o, kind: "FragmentSpread", name: "SuperFollowsSettingsInternalLinkPivot_user" }, { args: o, kind: "FragmentSpread", name: "AwardsSettingsInternalLinkPivot_user" }, { args: o, kind: "FragmentSpread", name: "useMonetizationPayoutAmount_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }, { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationStatusDescription_viewer" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [r, s, u, d, { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "superfollows_revenue", plural: !1, selections: (c = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_since_last_payout_in_cents", storageKey: null }]), storageKey: null }, { condition: "awardsEnabled", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "awards_revenue", plural: !1, selections: c, storageKey: null }] }, { alias: null, args: null, concreteType: "CreatorDashboardRevenueInfo", kind: "LinkedField", name: "total_revenue", plural: !1, selections: c, storageKey: null }, { alias: null, args: null, concreteType: "CreatorPayoutThresholdInfo", kind: "LinkedField", name: "creator_payout_threshold", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "payout_minimum_threshold_in_usd_cents", storageKey: null }], storageKey: null }, (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            g,
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
            m.hash = "fb5601a4f84129e9c12b38c57764f4fc";
            const y = m;
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
            n.d(a, { Z: () => d });
            var l,
                i,
                t,
                r,
                s,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "RepliesGetUserToxicReplyFilterSettingQuery", selections: [{ alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "ToxicReplyFilterSetting", kind: "LinkedField", name: "toxic_reply_filter_setting", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useToggleToxicReplyFilterSetting_userToxicReplyFilterSetting" }, (r = { alias: null, args: null, kind: "ScalarField", name: "enabled", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "RepliesGetUserToxicReplyFilterSettingQuery", selections: [{ alias: "viewer", args: l, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "ToxicReplyFilterSetting", kind: "LinkedField", name: "toxic_reply_filter_setting", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }] },
                    params: { id: "kmAhocLFK1cbzXxGq5Boow", metadata: {}, name: "RepliesGetUserToxicReplyFilterSettingQuery", operationKind: "query", text: null },
                };
            u.hash = "d67c4e19399da899df0f34ae2d1f5acf";
            const d = u;
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
        631759: (e, a, n) => {
            n.d(a, { Z: () => d });
            var l,
                i,
                t,
                r,
                s,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "UnifiedLanguagePivotMenuLanguagesQuery", selections: [{ alias: null, args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, concreteType: "Locale", kind: "LinkedField", name: "display_language", plural: !1, selections: (i = [{ alias: null, args: null, kind: "ScalarField", name: "language_name", storageKey: null }]), storageKey: null }), (r = { alias: null, args: null, concreteType: "Locale", kind: "LinkedField", name: "preferred_content_languages", plural: !0, selections: i, storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "UnifiedLanguagePivotMenuLanguagesQuery",
                        selections: [
                            {
                                alias: null,
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
                                                    { kind: "InlineFragment", selections: [t, r, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "8o3965laaTQBsqfrfY8Drw", metadata: {}, name: "UnifiedLanguagePivotMenuLanguagesQuery", operationKind: "query", text: null },
                };
            u.hash = "8aeca3ff99e0ac8757fa4979366cd2f5";
            const d = u;
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
        130919: (e, a, n) => {
            n.d(a, { t: () => l });
            const l = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        667218: (e, a, n) => {
            n.d(a, { n: () => l });
            const l = Object.freeze({ Ads: "Ads", AppleAppStore: "AppleAppStore", Gift: "Gift", GooglePlay: "GooglePlay", Stripe: "Stripe", TPay: "TPay", Twitter: "Twitter", Unknown: "Unknown" });
        },
        96768: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, l], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: t },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            r.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = r;
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
        587510: (e, a, n) => {
            n.d(a, { Z: () => y });
            var l,
                i,
                t,
                r,
                s,
                u,
                d,
                o,
                c,
                g,
                m = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useMonetizationCreatorSettingsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (i = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }),
                                                                        (r = {
                                                                            alias: null,
                                                                            args: (t = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }]),
                                                                            concreteType: "VerifiedProgramsApplicationStatus",
                                                                            kind: "LinkedField",
                                                                            name: "verified_program_application_status",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_application_status", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "rejected_super_follow_can_re_apply", storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_program_application_status(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        (s = {
                                                                            alias: null,
                                                                            args: t,
                                                                            concreteType: "VerifiedProgramsEligibilities",
                                                                            kind: "LinkedField",
                                                                            name: "verified_program_eligibility",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "super_follows_eligibility", storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        (d = {
                                                                            alias: null,
                                                                            args: t,
                                                                            concreteType: "VerifiedUserProfile",
                                                                            kind: "LinkedField",
                                                                            name: "verified_user_profiles",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, concreteType: "AdRevenueSharingUserProfile", kind: "LinkedField", name: "ad_revenue_sharing_user_profile", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "is_active", storageKey: null }), { alias: null, args: null, concreteType: "VerifiedUserProfileInactiveReason", kind: "LinkedField", name: "inactive_reasons", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "inactive_reason_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                { alias: null, args: null, concreteType: "SuperFollowsUserProfile", kind: "LinkedField", name: "super_follows_user_profile", plural: !1, selections: [u], storageKey: null },
                                                                            ],
                                                                            storageKey: 'verified_user_profiles(verified_program_types:["AdRevenueSharing","SuperFollows"])',
                                                                        }),
                                                                        { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), { kind: "RequiredField", field: (c = { alias: null, args: [{ kind: "Literal", name: "view", value: { verification_flow: "CreatorIdv" } }], kind: "ScalarField", name: "identity_verification_status", storageKey: 'identity_verification_status(view:{"verification_flow":"CreatorIdv"})' }), action: "THROW" }], storageKey: null },
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
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useMonetizationCreatorSettingsQuery",
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
                                                    { kind: "InlineFragment", selections: [i, r, s, d, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [o, c, (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, g], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            g,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "5UotOgLcDoewXEKftGMiuQ", metadata: {}, name: "useMonetizationCreatorSettingsQuery", operationKind: "query", text: null },
                };
            m.hash = "abb37d549229c3883d2d50c7a98d76a1";
            const y = m;
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
                u,
                d,
                o = {
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
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "from_external_product_id", storageKey: null },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "PriceDetail",
                                                                                            kind: "LinkedField",
                                                                                            name: "from_price_detail",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "charge_interval", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "external_price_id", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "price_type", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "tax_amount_local_micro", storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                    ],
                                                                                    type: "WebPaymentsTierSwitchProgress",
                                                                                    abstractKey: null,
                                                                                }),
                                                                                (u = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "WebPaymentsGetTierSwitchProgressError", abstractKey: null }),
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useTierSwitchStatusQuery", selections: [{ alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "web_tier_switch_progress", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isWebPaymentsGetTierSwitchProgressResult" }, s, u], storageKey: null }, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "kp2IvQH0Jim11U50WNO2PA", metadata: {}, name: "useTierSwitchStatusQuery", operationKind: "query", text: null },
                };
            o.hash = "c456ddcd1359fa89cb54fd22c3f3eeba";
            const c = o;
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-960914ab.5f8a5aaa.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsSuperFollows-6107ac1a"],
    {
        515140: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AdRevPayoutListItem_payout",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "payout_amount", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "payout_complete_msec", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "AdRevenueSharingPayoutPeriod",
                        kind: "LinkedField",
                        name: "payout_period",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "from_msec", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "to_msec", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "AdRevenueSharingPayout",
                abstractKey: null,
                hash: "c6b733eea2e5b872596a1d5e2e692ab2",
            };
            const r = l;
        },
        572105: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AdRevPayoutList_payoutSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "AdRevenueSharingPayout",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "payout_complete_msec", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "AdRevPayoutListItem_payout" },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "SliceInfo",
                        kind: "LinkedField",
                        name: "slice_info",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "AdRevenueSharingPayoutSlice",
                abstractKey: null,
                hash: "a47f652cf051d44dafde0abb7a20cbe0",
            };
            const r = l;
        },
        88691: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AdRevShareApplicationMutation", selections: (l = [{ alias: null, args: [{ kind: "Literal", name: "ad_revenue_sharing_application", value: {} }], kind: "ScalarField", name: "verified_program_application_create_put", storageKey: "verified_program_application_create_put(ad_revenue_sharing_application:{})" }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "AdRevShareApplicationMutation", selections: l }, params: { id: "y-iV2DT5x83Q5PZPEHsSYQ", metadata: {}, name: "AdRevShareApplicationMutation", operationKind: "mutation", text: null } };
            r.hash = "5446f5a9c848f20e97c015a0465c6d7a";
            const i = r;
        },
        963888: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                r,
                i,
                s,
                t,
                o,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AdRevShareApplicationQuery",
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
                                                selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }), (s = { alias: null, args: (i = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing"] }]), concreteType: "VerifiedProgramsApplicationStatus", kind: "LinkedField", name: "verified_program_application_status", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_application_status", storageKey: null }], storageKey: 'verified_program_application_status(verified_program_types:["AdRevenueSharing"])' }), (t = { alias: null, args: i, concreteType: "VerifiedProgramsEligibilities", kind: "LinkedField", name: "verified_program_eligibility", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null }], storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing"])' }), (o = { alias: null, args: i, concreteType: "VerifiedUserProfile", kind: "LinkedField", name: "verified_user_profiles", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdRevenueSharingUserProfile", kind: "LinkedField", name: "ad_revenue_sharing_user_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "is_active", storageKey: null }], storageKey: null }], storageKey: 'verified_user_profiles(verified_program_types:["AdRevenueSharing"])' })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }],
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
                        name: "AdRevShareApplicationQuery",
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
                                                    { kind: "InlineFragment", selections: [r, s, t, o, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "-CDnlbxkVeGqpgU2MiyAsw", metadata: {}, name: "AdRevShareApplicationQuery", operationKind: "query", text: null },
                };
            d.hash = "e3e61d5b2f3e1484eeb0f829ec2d79e7";
            const c = d;
        },
        430229: (e, a, n) => {
            n.d(a, { Z: () => p });
            var l,
                r,
                i,
                s,
                t,
                o,
                u,
                d,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                            { defaultValue: null, kind: "LocalArgument", name: "limit" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AdRevShareDashboardScreenQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (r = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                        (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                        { args: null, kind: "FragmentSpread", name: "UserScreenName_user" },
                                                                        { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                                                        (s = { alias: null, args: [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing"] }], concreteType: "VerifiedProgramsApplicationStatus", kind: "LinkedField", name: "verified_program_application_status", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_application_status", storageKey: null }], storageKey: 'verified_program_application_status(verified_program_types:["AdRevenueSharing"])' }),
                                                                        {
                                                                            alias: "ad_revenue_sharing_payouts",
                                                                            args: null,
                                                                            concreteType: "AdRevenueSharingPayoutSlice",
                                                                            kind: "LinkedField",
                                                                            name: "__AdRevShareDashboardQuery_ad_revenue_sharing_payouts_slice",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "AdRevPayoutList_payoutSlice" },
                                                                                { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null })], storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        (u = { alias: null, args: null, concreteType: "AdRevenueSharingAccumulatedPayout", kind: "LinkedField", name: "ad_revenue_sharing_accumulated_payout", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "accumulated_payout_amount", storageKey: null }], storageKey: null }),
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
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "AdRevShareDashboardScreenQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
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
                                                    i,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                            s,
                                                            {
                                                                alias: null,
                                                                args: (d = [
                                                                    { kind: "Variable", name: "count", variableName: "limit" },
                                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                ]),
                                                                concreteType: "AdRevenueSharingPayoutSlice",
                                                                kind: "LinkedField",
                                                                name: "ad_revenue_sharing_payouts",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "AdRevenueSharingPayout",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "payout_complete_msec", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "payout_amount", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "AdRevenueSharingPayoutPeriod",
                                                                                kind: "LinkedField",
                                                                                name: "payout_period",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "from_msec", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "to_msec", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [o, t], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: d, filters: null, handle: "slice", key: "AdRevShareDashboardQuery_ad_revenue_sharing_payouts", kind: "LinkedHandle", name: "ad_revenue_sharing_payouts" },
                                                            u,
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "gRS-1zW8O8Q_783UHeXD2g", metadata: { features: ["responsive_web_ad_revenue_sharing_total_earnings_enabled"], sliceInfoPath: ["viewer", "user_results", "result", "ad_revenue_sharing_payouts", "slice_info"] }, name: "AdRevShareDashboardScreenQuery", operationKind: "query", text: null },
                };
            g.hash = "bea769b98fcb59dde534cc6601dab50f";
            const p = g;
        },
        878727: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PreRollAdsApplicationMutation", selections: (l = [{ alias: null, args: [{ kind: "Literal", name: "ad_revenue_sharing_application", value: {} }], kind: "ScalarField", name: "verified_program_application_create_put", storageKey: "verified_program_application_create_put(ad_revenue_sharing_application:{})" }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "PreRollAdsApplicationMutation", selections: l }, params: { id: "0TRuqqBXQ2GdsV-GkzvPfQ", metadata: {}, name: "PreRollAdsApplicationMutation", operationKind: "mutation", text: null } };
            r.hash = "76ee6e6824a219e4c48d9d137cadedb5";
            const i = r;
        },
        118275: (e, a, n) => {
            n.d(a, { Z: () => d });
            var l,
                r,
                i,
                s,
                t,
                o,
                u = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "PreRollAdsApplicationQuery",
                        selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "StripeConnectAccount", kind: "LinkedField", name: "stripe_connect_account", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }), (s = { alias: null, args: (i = [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing"] }]), concreteType: "VerifiedProgramsEligibilities", kind: "LinkedField", name: "verified_program_eligibility", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null }], storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing"])' }), (t = { alias: null, args: i, concreteType: "VerifiedUserProfile", kind: "LinkedField", name: "verified_user_profiles", plural: !1, selections: [{ alias: null, args: null, concreteType: "AdRevenueSharingUserProfile", kind: "LinkedField", name: "ad_revenue_sharing_user_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "is_active", storageKey: null }], storageKey: null }], storageKey: 'verified_user_profiles(verified_program_types:["AdRevenueSharing"])' })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PreRollAdsApplicationQuery",
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
                                                    { kind: "InlineFragment", selections: [r, s, t, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "yJCJWXH2QjnFYtUrwFrq3w", metadata: {}, name: "PreRollAdsApplicationQuery", operationKind: "query", text: null },
                };
            u.hash = "2e716c44929d4b7189087f1d6e3399c4";
            const d = u;
        },
        324813: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                r,
                i,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PreRollAdsEligibilityScreenQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing"] }], concreteType: "VerifiedProgramsEligibilities", kind: "LinkedField", name: "verified_program_eligibility", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "ad_revenue_sharing_eligibility", storageKey: null }], storageKey: 'verified_program_eligibility(verified_program_types:["AdRevenueSharing"])' })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PreRollAdsEligibilityScreenQuery",
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
                                                    { kind: "InlineFragment", selections: [r, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "7pFQCE1DgV61s1gfRdV8fg", metadata: {}, name: "PreRollAdsEligibilityScreenQuery", operationKind: "query", text: null },
                };
            s.hash = "45fe7897d295c6d8aeea26be8364df59";
            const t = s;
        },
        953134: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsApplicationEligibilityScreen_user", selections: [{ alias: null, args: null, kind: "ScalarField", name: "super_following_eligibility", storageKey: null }], type: "User", abstractKey: null, hash: "ad902c8bf33468dccb33365e2b5ae866" };
            const r = l;
        },
        565739: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationPriceScreen_subscriptionsPriceOfferings",
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
                hash: "e10a0ce7229b25361ddea8b1b3ae48f0",
            };
            const r = l;
        },
        180772: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationPriceScreen_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    {
                        kind: "ClientExtension",
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "SuperFollowsApplicationDraft",
                                kind: "LinkedField",
                                name: "super_follows_application_draft",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "creator_description", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "54e9336ec5c9d80c96c9136572095b47",
            };
            const r = l;
        },
        299097: (e, a, n) => {
            n.d(a, { Z: () => p });
            var l,
                r,
                i,
                s,
                t,
                o,
                u,
                d,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "category" }), (r = { defaultValue: null, kind: "LocalArgument", name: "content_example" }), (i = { defaultValue: null, kind: "LocalArgument", name: "creator_description" }), (s = { defaultValue: null, kind: "LocalArgument", name: "creator_intro" }), (t = { defaultValue: null, kind: "LocalArgument", name: "pitch" }), (o = { defaultValue: null, kind: "LocalArgument", name: "platform" }), (u = { defaultValue: null, kind: "LocalArgument", name: "purpose" }), (d = { defaultValue: null, kind: "LocalArgument", name: "selected_price" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsApplicationSubmitScreenMutation",
                        selections: (c = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "content_category", variableName: "category" },
                                    { kind: "Variable", name: "content_creation_platform", variableName: "platform" },
                                    { kind: "Variable", name: "content_example", variableName: "content_example" },
                                    { kind: "Variable", name: "creator_intro", variableName: "creator_intro" },
                                    { kind: "Variable", name: "exclusive_content_description", variableName: "creator_description" },
                                    { kind: "Variable", name: "pitch", variableName: "pitch" },
                                    { kind: "Variable", name: "purpose", variableName: "purpose" },
                                    { kind: "Variable", name: "selected_price", variableName: "selected_price" },
                                    { kind: "Literal", name: "track", value: "SuperFollows" },
                                ],
                                kind: "ScalarField",
                                name: "seller_application_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, o, u, d, i, s, r, t], kind: "Operation", name: "SuperFollowsApplicationSubmitScreenMutation", selections: c },
                    params: { id: "pgOqMAB-MnKpsdhIOyOMdw", metadata: {}, name: "SuperFollowsApplicationSubmitScreenMutation", operationKind: "mutation", text: null },
                };
            g.hash = "7f358748e4c7125ab95c7be7b31699ce";
            const p = g;
        },
        551944: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationSubmitScreen_user",
                selections: [
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "User",
                abstractKey: null,
                hash: "427bb7565bbd7b9363ad0542c5a9fd73",
            };
            const r = l;
        },
        88254: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationSubmitScreen_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    {
                        kind: "ClientExtension",
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "SuperFollowsApplicationDraft",
                                kind: "LinkedField",
                                name: "super_follows_application_draft",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "content_category", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "content_category_other", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "content_creation_platform", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "content_creation_platform_other", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "purpose", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "creator_description", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "content_example", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "pitch", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "23b02f1842185e1c4644030aa9985378",
            };
            const r = l;
        },
        382098: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsApplicationSwitch_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationPriceScreen_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "e6f0a46a4f420d2f883b9d03a2068bbf" };
            const r = l;
        },
        43279: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsApplicationSwitch_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationEligibilityScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationSubmitScreen_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "0d07b0e1bbe6dfc6a51dc69306ee9656",
            };
            const r = l;
        },
        415729: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SuperFollowsApplicationSwitch_viewer",
                    selections: [
                        { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }]) }], args: null, argumentDefinitions: [] },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationSubmitScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationPriceScreen_viewer" },
                        { kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsApplicationDraft", kind: "LinkedField", name: "super_follows_application_draft", plural: !1, selections: l, storageKey: null }] },
                    ],
                    type: "Viewer",
                    abstractKey: null,
                };
            r.hash = "39349eec15b88b53e6f935f21d83fa95";
            const i = r;
        },
        541844: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSwitch_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSummaryScreen_priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "bece66f9ce665e1562f02db458398326" };
            const r = l;
        },
        455575: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsManagementSwitch_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSummaryScreen_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "8cc8c27f83e9422d37f85059d3b4d071" };
            const r = l;
        },
        357061: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsManagementSwitch_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsBlockOnboardingNavigation_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSummaryScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksIntroScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksDescriptionScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksConfirmScreen_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "5e1002a53061aa856a8f30d974ad6150",
            };
            const r = l;
        },
        468408: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SuperFollowsManagementSwitch_viewer",
                    selections: [
                        { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }]) }], args: null, argumentDefinitions: [] },
                        { args: null, kind: "FragmentSpread", name: "useSuperFollowsBlockOnboardingNavigation_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSummaryScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksIntroScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksDescriptionScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementPerksConfirmScreen_viewer" },
                        { kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: l, storageKey: null }] },
                    ],
                    type: "Viewer",
                    abstractKey: null,
                };
            r.hash = "f925364acc6a314720af8c5d522a0411";
            const i = r;
        },
        825167: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingGetStartedScreen_user", selections: [{ alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null }], type: "User", abstractKey: null, hash: "89d53e7f51d77e01d95fe5e756509ce9" };
            const r = l;
        },
        848282: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingGetStartedScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "e8e04ad2010f6832e9b6a8a33fb5a760",
            };
            const r = l;
        },
        904503: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPerksBadgesScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksBadgesCore_user" }], type: "User", abstractKey: null, hash: "a877dc43c3fb96fe1f69f1150d4972bf" };
            const r = l;
        },
        402422: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPerksConfirmScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_user" }], type: "User", abstractKey: null, hash: "20bef5b5794024e957982e19eb9df728" };
            const r = l;
        },
        702427: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPerksConfirmScreen_viewer", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksConfirmCore_viewer" }], type: "Viewer", abstractKey: null, hash: "339c26b88fcc2f785b8eece37d429287" };
            const r = l;
        },
        964650: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPerksDescriptionScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksDescriptionCore_user" }], type: "User", abstractKey: null, hash: "c756b8456bb34cd08df691a92eee0833" };
            const r = l;
        },
        953519: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingPerksDescriptionScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksDescriptionCore_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "31b6d2f42f854c50a0cc1df5fcd2773c",
            };
            const r = l;
        },
        382417: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPerksIntroScreen_user", selections: [{ args: null, kind: "FragmentSpread", name: "SuperFollowsPerksIntroCore_user" }], type: "User", abstractKey: null, hash: "8ac49b919368d9d38290d155622cb0f7" };
            const r = l;
        },
        456203: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingPerksIntroScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsPerksIntroCore_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "8a45db7030e196c1e405633700fe386d",
            };
            const r = l;
        },
        136201: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "benefits_data" },
                            { defaultValue: null, kind: "LocalArgument", name: "creator_intro" },
                            { defaultValue: null, kind: "LocalArgument", name: "selected_price" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsOnboardingPricingConfirmScreenMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "benefits_data", variableName: "benefits_data" },
                                    { kind: "Variable", name: "creator_intro", variableName: "creator_intro" },
                                ],
                                kind: "ScalarField",
                                name: "set_creator_benefits_put",
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "selected_price", variableName: "selected_price" },
                                ],
                                kind: "ScalarField",
                                name: "set_creator_price_metadata",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "SuperFollowsOnboardingPricingConfirmScreenMutation", selections: r },
                    params: { id: "_97mdj3S3wU106zmC8Wy3A", metadata: {}, name: "SuperFollowsOnboardingPricingConfirmScreenMutation", operationKind: "mutation", text: null },
                };
            i.hash = "c1a6db8f58f9e0b096f1a134ad2ef927";
            const s = i;
        },
        555252: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPricingConfirmScreen_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "55c20ad14c5cbc04b929eed69d83cbf0" };
            const r = l;
        },
        160093: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPricingConfirmScreen_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPriceValue_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "155300c36faea7ab3d8cca40f59d41e6" };
            const r = l;
        },
        288730: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingPricingConfirmScreen_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftCreatorIntro_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftDescription_viewer" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "a3742e5cfba091e6f073b741c7c725a1",
            };
            const r = l;
        },
        471439: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPricingScreen_priceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices__priceOfferings" }], type: "SuperFollowsPriceOfferings", abstractKey: null, hash: "abacfaa424404e1c1ed1a7bdc9500722" };
            const r = l;
        },
        578571: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SuperFollowsOnboardingPricingScreen_subscriptionsPriceOfferings", selections: [{ args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices_subscriptionsPriceOfferings" }], type: "SubscriptionsPriceOfferings", abstractKey: null, hash: "60d9bdae71b647cdb4951e890991176e" };
            const r = l;
        },
        260718: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingPricingScreen_viewer",
                selections: [
                    { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], args: null, argumentDefinitions: [] },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftSelectedPrice_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "247efb82ea8bcfad59ed75a1750f152a",
            };
            const r = l;
        },
        808331: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingSwitch_priceOfferings",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingScreen_priceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingConfirmScreen_priceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices__priceOfferings" },
                ],
                type: "SuperFollowsPriceOfferings",
                abstractKey: null,
                hash: "cfc58ad8f7b545e2cd54ac0d6ccaacec",
            };
            const r = l;
        },
        548770: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingSwitch_subscriptionsPriceOfferings",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingScreen_subscriptionsPriceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingConfirmScreen_subscriptionsPriceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDraftPrices_subscriptionsPriceOfferings" },
                ],
                type: "SubscriptionsPriceOfferings",
                abstractKey: null,
                hash: "454140da9743c41eda5035fda3a5950f",
            };
            const r = l;
        },
        686437: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsOnboardingSwitch_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsBlockOnboardingNavigation_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingGetStartedScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksBadgesScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksIntroScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksDescriptionScreen_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksConfirmScreen_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "de4b2addf8047ad2870c65fb8c542507",
            };
            const r = l;
        },
        951862: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "SuperFollowsOnboardingSwitch_viewer",
                    selections: [
                        { kind: "InlineDataFragmentSpread", name: "superFollowsShared_viewer", selections: [{ kind: "ClientExtension", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }]) }], args: null, argumentDefinitions: [] },
                        { args: null, kind: "FragmentSpread", name: "useSuperFollowsBlockOnboardingNavigation_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingGetStartedScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksIntroScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksDescriptionScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPerksConfirmScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingScreen_viewer" },
                        { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingPricingConfirmScreen_viewer" },
                        { kind: "ClientExtension", selections: [{ alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: l, storageKey: null }] },
                    ],
                    type: "Viewer",
                    abstractKey: null,
                };
            r.hash = "9518ed5436554b04d556e1d7292d246a";
            const i = r;
        },
        871267: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsPerksBadgesCore_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
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
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "3d7506fbcfcae8b8a3f7aa763f8b3c55",
            };
            const r = l;
        },
        185145: (e, a, n) => {
            n.d(a, { Z: () => g });
            var l,
                r,
                i,
                s,
                t,
                o,
                u,
                d,
                c = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "SuperFollowsSettingsQuery",
                        selections: [
                            { alias: "viewer", args: (l = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { args: null, kind: "FragmentSpread", name: "SuperFollowsSwitch_viewer" }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r, { args: null, kind: "FragmentSpread", name: "SuperFollowsSwitch_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' },
                            { alias: null, args: l, concreteType: "SuperFollowsPriceOfferings", kind: "LinkedField", name: "super_follows_price_offerings", plural: !1, selections: [r, { args: null, kind: "FragmentSpread", name: "SuperFollowsSwitch_priceOfferings" }], storageKey: 'super_follows_price_offerings(s:"4721")' },
                            { alias: null, args: l, concreteType: "SubscriptionsPriceOfferings", kind: "LinkedField", name: "subscriptions_price_offerings", plural: !1, selections: [r, { args: null, kind: "FragmentSpread", name: "SuperFollowsSwitch_subscriptionsPriceOfferings" }], storageKey: 'subscriptions_price_offerings(s:"4721")' },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SuperFollowsSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: l,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    r,
                                    { alias: null, args: null, kind: "ScalarField", name: "is_active_creator", storageKey: null },
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
                                                    r,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null },
                                                            { alias: null, args: [{ kind: "Literal", name: "verified_program_types", value: ["SuperFollows"] }], concreteType: "VerifiedProgramsApplicationStatus", kind: "LinkedField", name: "verified_program_application_status", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "rejected_super_follow_can_re_apply", storageKey: null }], storageKey: 'verified_program_application_status(verified_program_types:["SuperFollows"])' },
                                                            { alias: null, args: null, concreteType: "AudienceRewardsBenefitsData", kind: "LinkedField", name: "super_follow_creator_benefits", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "creator_intro", storageKey: null }), { alias: null, args: null, concreteType: "AudienceRewardsBenefitInfo", kind: "LinkedField", name: "benefits_data", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "benefit_type", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null })], storageKey: null }, (o = { kind: "ClientExtension", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null })] })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "SuperFollowsSelectedPrice", kind: "LinkedField", name: "super_follow_creator_price_metadata", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "selected_price", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "super_following_eligibility", storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserCore",
                                                                kind: "LinkedField",
                                                                name: "core",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, concreteType: "PendingPriceChange", kind: "LinkedField", name: "super_follow_pending_price_change", plural: !1, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "new_price", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "price_change", storageKey: null }], storageKey: null },
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                            o,
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
                                    { kind: "ClientExtension", selections: [t, { alias: null, args: null, concreteType: "SuperFollowsApplicationDraft", kind: "LinkedField", name: "super_follows_application_draft", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "content_category", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "content_category_other", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "content_creation_platform", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "content_creation_platform_other", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "purpose", storageKey: null }, u, { alias: null, args: null, kind: "ScalarField", name: "creator_description", storageKey: null }, i, { alias: null, args: null, kind: "ScalarField", name: "content_example", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "pitch", storageKey: null }, t], storageKey: null }, { alias: null, args: null, concreteType: "SuperFollowsOnboardingDraft", kind: "LinkedField", name: "super_follows_onboarding_draft", plural: !1, selections: [i, s, u, t], storageKey: null }] },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                            { alias: null, args: l, concreteType: "SuperFollowsPriceOfferings", kind: "LinkedField", name: "super_follows_price_offerings", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "offer1", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "offer2", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "offer3", storageKey: null }], storageKey: 'super_follows_price_offerings(s:"4721")' },
                            {
                                alias: null,
                                args: l,
                                concreteType: "SubscriptionsPriceOfferings",
                                kind: "LinkedField",
                                name: "subscriptions_price_offerings",
                                plural: !1,
                                selections: [
                                    r,
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
                                storageKey: 'subscriptions_price_offerings(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "WB5JImlsiHdskinT2dzIMA", metadata: {}, name: "SuperFollowsSettingsQuery", operationKind: "query", text: null },
                };
            c.hash = "8bf7ec3c12a9cae9fe0ca1768db4b4ec";
            const g = c;
        },
        865559: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSwitch_priceOfferings",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingSwitch_priceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSwitch_priceOfferings" },
                ],
                type: "SuperFollowsPriceOfferings",
                abstractKey: null,
                hash: "c0b6c6ce2a6b19c031c93a3e40adfd6a",
            };
            const r = l;
        },
        423738: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSwitch_subscriptionsPriceOfferings",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingSwitch_subscriptionsPriceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationSwitch_subscriptionsPriceOfferings" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSwitch_subscriptionsPriceOfferings" },
                ],
                type: "SubscriptionsPriceOfferings",
                abstractKey: null,
                hash: "a1961abfb07217f82f5cf438958c41ed",
            };
            const r = l;
        },
        331380: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSwitch_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsInitialRoute_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationSwitch_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingSwitch_user" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSwitch_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "62efec2f86b14ead58de402573be08da",
            };
            const r = l;
        },
        928650: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "SuperFollowsSwitch_viewer",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsInitialRoute_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsApplicationSwitch_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsOnboardingSwitch_viewer" },
                    { args: null, kind: "FragmentSpread", name: "SuperFollowsManagementSwitch_viewer" },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "9c92487da883ba2304ae4e19ed0c78db",
            };
            const r = l;
        },
        985413: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "refresh_url" },
                            { defaultValue: null, kind: "LocalArgument", name: "return_url" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useStripeConnectAccountCreateMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "refresh_url", variableName: "refresh_url" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "stripe_connect_account_create",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useStripeConnectAccountCreateMutation", selections: r },
                    params: { id: "7bhaqTVnZI1M44ifTi841g", metadata: {}, name: "useStripeConnectAccountCreateMutation", operationKind: "mutation", text: null },
                };
            i.hash = "d4dbe3eb06ceedb4aba628938db7d716";
            const s = i;
        },
        935711: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "refresh_url" },
                            { defaultValue: null, kind: "LocalArgument", name: "return_url" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperFollowsCreateStripeOnboardingUrlMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "refresh_url", variableName: "refresh_url" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "stripe_account_create_onboarding_url",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useSuperFollowsCreateStripeOnboardingUrlMutation", selections: r },
                    params: { id: "KCzv96qeUky_-C22g3lZSw", metadata: {}, name: "useSuperFollowsCreateStripeOnboardingUrlMutation", operationKind: "mutation", text: null },
                };
            i.hash = "3c4630f45d60062b9f4ac93d65eeec15";
            const s = i;
        },
        87414: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useSuperFollowsInitialRoute_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "stripe_account_status", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_follows_application_status", storageKey: null },
                    { alias: null, args: [{ kind: "Literal", name: "verified_program_types", value: ["SuperFollows"] }], concreteType: "VerifiedProgramsApplicationStatus", kind: "LinkedField", name: "verified_program_application_status", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "rejected_super_follow_can_re_apply", storageKey: null }], storageKey: 'verified_program_application_status(verified_program_types:["SuperFollows"])' },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingCreatorIntro_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingDescription_user" },
                    { args: null, kind: "FragmentSpread", name: "useSuperFollowsOnboardingSelectedPrice_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "bd2cf5b223a3f187c24e59e0c15178d6",
            };
            const r = l;
        },
        976235: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useSuperFollowsInitialRoute_viewer", selections: [{ alias: null, args: null, kind: "ScalarField", name: "is_active_creator", storageKey: null }], type: "Viewer", abstractKey: null, hash: "8b612895ba5cce7a3870114912725f3a" };
            const r = l;
        },
        38945: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedProgramsEligibilityQuery",
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
                                                                        (r = {
                                                                            alias: null,
                                                                            args: [{ kind: "Literal", name: "verified_program_types", value: ["AdRevenueSharing", "SuperFollows"] }],
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
                        name: "useVerifiedProgramsEligibilityQuery",
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
                                                    { kind: "InlineFragment", selections: [r, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "SQkrzbueypUf6oyEdj_Zzg", metadata: {}, name: "useVerifiedProgramsEligibilityQuery", operationKind: "query", text: null },
                };
            s.hash = "18b196a4f93d71cc0c23b35aab2f5948";
            const t = s;
        },
        733078: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l = n(202784),
                r = n(813254),
                i = n(478039);
            const s = (e) => {
                const { style: a, ...n } = e;
                return l.createElement(r.Z, { style: a }, l.createElement(i.Z, n));
            };
        },
        482924: (e, a, n) => {
            n.d(a, { A: () => p });
            var l = n(202784),
                r = n(437429),
                i = n.n(r),
                s = n(57074),
                t = n.n(s),
                o = n(10622),
                u = n.n(o),
                d = n(71620),
                c = n(312771),
                g = n(535338);
            function p(e, a, n) {
                const r = t()(a),
                    s = t()(n),
                    o = i()(),
                    p = (0, d.po)(),
                    [m, k] = l.useState(null),
                    [y, _] = l.useState(!1),
                    S = l.useCallback(() => {
                        y ||
                            (_(!0),
                            u()(o, e, r, { networkCacheConfig: s?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    _(!1);
                                },
                                error: (e) => {
                                    p(e), _(!1), k(e);
                                },
                            }));
                    }, [o, p, e, y, r, s]),
                    F = (0, g.p)(e, a, n);
                return l.useMemo(() => (m ? { data: F, refetch: S, refetchStatus: c.ZP.FAILED, refetchError: m } : { data: F, refetch: S, refetchStatus: y ? c.ZP.LOADING : c.ZP.NONE, refetchError: void 0 }), [F, m, y, S]);
            }
        },
        207070: (e, a, n) => {
            n.d(a, { Z: () => g });
            var l = n(807896),
                r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "UserScreenName_user", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null }], type: "User", abstractKey: null, hash: "c3df4f17e0008e3a1c535b3cd85a7909" };
            const i = r;
            var s = n(202784),
                t = (n(585488), n(277660)),
                o = n.n(t),
                u = n(601413);
            const d = i,
                c = ({ user: e, ...a }) => {
                    const { core: n } = o()(d, e);
                    return s.createElement(u.Z, (0, l.Z)({ screenName: n?.screen_name ?? "" }, a));
                },
                g = s.memo(c);
        },
        97272: (e, a, n) => {
            n.d(a, { Z: () => S });
            var l = n(807896),
                r = n(202784),
                i = n(896632),
                s = n(325686),
                t = n(913973),
                o = n(516951),
                u = n(731708),
                d = n(466792),
                c = n(58881),
                g = n(530732),
                p = n(352924),
                m = n(392237);
            const k = m.default.create((e) => ({ root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: "hidden" }, base: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, backgroundColor: { backgroundColor: e.colors.cellBackground }, border: { borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, borderColor: e.colors.transparent }, borderColor: { borderColor: e.colors.borderColor }, activeBorder: { borderColor: e.colors.blue500 }, containerClicked: { backgroundColor: e.colors.primary }, interactive: { cursor: "pointer" }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, textContainer: { margin: e.spaces.space12, flexShrink: 1 }, radioContainer: { userSelect: "none", marginEnd: e.spaces.space12, marginTop: e.spaces.space12, position: "absolute", end: "0px" }, helpText: { marginTop: e.spaces.space8 }, tileStyle: { height: "inherit" }, mainContainer: { padding: e.spaces.space4 }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor } })),
                y = { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                _ = ({ "aria-label": e, "aria-posinset": a, "aria-setsize": n, checked: l, disabled: i, helpText: _, label: S, name: F, onChange: f, renderBorderWhenSelected: b, selectorBackgroundStyles: w }) => {
                    const v = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: l ? m.default.theme.colors.primary : m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        K = (0, p.b)(),
                        h = (0, p.b)();
                    return r.createElement(d.Z, { disabled: i }, (d) => r.createElement(s.Z, { style: k.root }, r.createElement(s.Z, { role: "label", style: [k.base, w || k.backgroundColor, k.border, b ? null : k.borderColor, b && l && k.activeBorder, !i && k.interactive] }, r.createElement(s.Z, { style: k.textContainer }, r.createElement(u.ZP, { id: K, weight: "bold" }, S), _ && r.createElement(u.ZP, { color: "gray700", id: h, size: "subtext2", style: k.helpText }, _)), r.createElement(s.Z, { style: k.radioContainer }, b ? null : r.createElement(g.Z, { disabled: i, interactiveStyles: v, interactivityState: d, style: k.radioBackground }, r.createElement(s.Z, { style: [k.circle, l && k.circleActive, i && k.circleDisabled, l && i && k.circleCheckedAndDisabled] }, l ? r.createElement(t.default, { style: k.checkMark }) : null)), r.createElement("input", { "aria-describedby": h, "aria-label": e, "aria-labelledby": K, "aria-posinset": a, "aria-setsize": n, checked: l, disabled: i, name: F, onChange: l ? o.Z : f, style: y, type: "radio" })))));
                },
                S = (e) => r.createElement(i.Z, (0, l.Z)({}, e, { renderSelector: (e) => r.createElement(_, (0, l.Z)({}, e, { key: e.value })) }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsSuperFollows-6107ac1a.6d84cb4a.js.map

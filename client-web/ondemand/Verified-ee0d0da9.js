"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-ee0d0da9"],
    {
        95186: (e, a, l) => {
            l.d(a, { Z: () => d });
            var n,
                i,
                t,
                r,
                s,
                u,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "current_product_sku" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "refreshedQuery",
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
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        { args: null, kind: "FragmentSpread", name: "CalloutContainerFragment" },
                                                                        { args: null, kind: "FragmentSpread", name: "SetupChecklistAdminJobCountFragment" },
                                                                        { args: null, kind: "FragmentSpread", name: "useAdvertiserAccountsFragment" },
                                                                        { args: null, kind: "FragmentSpread", name: "useOrganizationSettingsFragment" },
                                                                        { args: null, kind: "FragmentSpread", name: "useScheduledPromotionsFragment" },
                                                                        { args: null, kind: "FragmentSpread", name: "useVerifiedOrgFeatureHelperFragment" },
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "refreshedQuery",
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
                                                    (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: [
                                                                    { kind: "Variable", name: "current_product_sku", variableName: "current_product_sku" },
                                                                    { kind: "Literal", name: "option", value: { find_target_product_identifier: !1 } },
                                                                ],
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "web_tier_switch_progress",
                                                                plural: !1,
                                                                selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isWebPaymentsGetTierSwitchProgressResult" }, { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null })], type: "WebPaymentsTierSwitchProgress", abstractKey: null }, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "WebPaymentsGetTierSwitchProgressError", abstractKey: null }],
                                                                storageKey: null,
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiRecruitingOrganizationResults",
                                                                kind: "LinkedField",
                                                                name: "recruiting_organization_results",
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
                                                                            t,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: [
                                                                                            { kind: "Literal", name: "hidden", value: 0 },
                                                                                            { kind: "Literal", name: "status", value: "open" },
                                                                                        ],
                                                                                        kind: "ScalarField",
                                                                                        name: "job_count",
                                                                                        storageKey: 'job_count(hidden:0,status:"open")',
                                                                                    },
                                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                ],
                                                                                type: "ApiRecruitingOrganization",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    s,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AdvertiserAccountsSlice",
                                                                kind: "LinkedField",
                                                                name: "verified_organization_advertiser_accounts",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "AdvertiserAccount",
                                                                        kind: "LinkedField",
                                                                        name: "items",
                                                                        plural: !0,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "service_level", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "AdvertiserAccountVerifiedOrganizationOnboardingStateResponse",
                                                                                kind: "LinkedField",
                                                                                name: "verified_organization_onboarding_state",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "eligibility", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_authenticated_user_authorized", storageKey: null },
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
                                                            { alias: null, args: null, concreteType: "VerifiedOrganizationSettings", kind: "LinkedField", name: "verified_organization_settings", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hiring_job_promotion_ad_account", storageKey: null }], storageKey: null },
                                                            {
                                                                alias: "promotions",
                                                                args: [
                                                                    { kind: "Literal", name: "program_ids", value: ["vo_sign_up_promo", "vo_full_access_yearly_pay_sign_up_promo", "vo_basic_monthly_pay_sign_up_promo", "vo_basic_yearly_pay_sign_up_promo", "vo_full_access_yearly_upgrade_promo", "vo_full_access_monthly_pay_cancellation_retention", "vo_basic_monthly_pay_cancellation_retention", "vo_full_access_yearly_pay_cancellation_retention", "vo_basic_yearly_pay_cancellation_retention"] },
                                                                    { kind: "Literal", name: "statuses", value: ["Active", "Redeemable", "Expired", "Scheduled"] },
                                                                ],
                                                                concreteType: "ScheduledPromotion",
                                                                kind: "LinkedField",
                                                                name: "list_scheduled_promotions",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "expires_at_msec", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "starts_at_msec", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "for_user_id", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "scheduled_id", storageKey: null },
                                                                    r,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "promotion",
                                                                        plural: !1,
                                                                        selections: [
                                                                            t,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "enrolled_for_ads_account_id", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "valid_until_msec", storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "PromotionAmount",
                                                                                        kind: "LinkedField",
                                                                                        name: "coupon_amount_in_local",
                                                                                        plural: !1,
                                                                                        selections: (u = [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                                        ]),
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "PromotionAmount", kind: "LinkedField", name: "used_amount_in_local", plural: !1, selections: u, storageKey: null },
                                                                                ],
                                                                                type: "AdsCoupon",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                ],
                                                                storageKey: 'list_scheduled_promotions(program_ids:["vo_sign_up_promo","vo_full_access_yearly_pay_sign_up_promo","vo_basic_monthly_pay_sign_up_promo","vo_basic_yearly_pay_sign_up_promo","vo_full_access_yearly_upgrade_promo","vo_full_access_monthly_pay_cancellation_retention","vo_basic_monthly_pay_cancellation_retention","vo_full_access_yearly_pay_cancellation_retention","vo_basic_yearly_pay_cancellation_retention"],statuses:["Active","Redeemable","Expired","Scheduled"])',
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_organization_features", storageKey: null },
                                                            s,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
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
                    params: { id: "HDXnWIiqxPxWLB0w1yMdhQ", metadata: {}, name: "refreshedQuery", operationKind: "query", text: null },
                };
            o.hash = "6a9e91bcc1741602067875cb44dc499b";
            const d = o;
        },
        201222: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                t,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "offer_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "offer_type" },
                            { defaultValue: null, kind: "LocalArgument", name: "purpose" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useAcceptOfferMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "offer_id", variableName: "offer_id" },
                                    { kind: "Variable", name: "offer_type", variableName: "offer_type" },
                                    { kind: "Variable", name: "purpose", variableName: "purpose" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "accept_verified_organization_offer",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "AcceptVerifiedOrganizationOfferFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useAcceptOfferMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "accept_verified_organization_offer", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isAcceptVerifiedOrganizationOfferResult" }, r], storageKey: null }] },
                    params: { id: "Sc2bufburq2zd7n9pJ7Sbg", metadata: {}, name: "useAcceptOfferMutation", operationKind: "mutation", text: null },
                };
            s.hash = "65c90e56c97068d625515dca24501c40";
            const u = s;
        },
        391435: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                t,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "for_ads_account_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "program_id" }), (t = { defaultValue: null, kind: "LocalArgument", name: "scheduled_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useActivateScheduledPromotionMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "for_ads_account_id", variableName: "for_ads_account_id" },
                                    { kind: "Variable", name: "program_id", variableName: "program_id" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "scheduled_id", variableName: "scheduled_id" },
                                ],
                                kind: "ScalarField",
                                name: "activate_scheduled_promotion",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, t, i], kind: "Operation", name: "useActivateScheduledPromotionMutation", selections: r },
                    params: { id: "J7txahinT6577_vrzlIp4w", metadata: {}, name: "useActivateScheduledPromotionMutation", operationKind: "mutation", text: null },
                };
            s.hash = "03154af9e222f3fa80efcd73d9a5e82b";
            const u = s;
        },
        818187: (e, a, l) => {
            l.d(a, { Z: () => p });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d,
                c,
                m,
                g,
                _,
                y = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "count" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useAffiliatesAndInvitesQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (i = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: (u = [(s = { kind: "Variable", name: "count", variableName: "count" }), { kind: "Literal", name: "invitation_type", value: "Affiliate" }]), concreteType: "VerifiedOrganizationInvitationSlice", kind: "LinkedField", name: "verified_organization_invitations", plural: !1, selections: [{ alias: null, args: null, concreteType: "VerifiedOrganizationInvitation", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "invitee_id_results", plural: !1, selections: [(d = { kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" })], storageKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: (c = [s]), concreteType: "BusinessTeamAffiliatesSlice", kind: "LinkedField", name: "business_team_affiliates", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), d], storageKey: null }], storageKey: null }, (g = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "User", abstractKey: null }],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"84b0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useAffiliatesAndInvitesQuery", selections: [{ alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [r, { alias: null, args: u, concreteType: "VerifiedOrganizationInvitationSlice", kind: "LinkedField", name: "verified_organization_invitations", plural: !1, selections: [{ alias: null, args: null, concreteType: "VerifiedOrganizationInvitation", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "invitee_id_results", plural: !1, selections: [(_ = { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [o, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, m], type: "User", abstractKey: null }], storageKey: null }), m], storageKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: c, concreteType: "BusinessTeamAffiliatesSlice", kind: "LinkedField", name: "business_team_affiliates", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [m, _], storageKey: null }], storageKey: null }, g, m], type: "User", abstractKey: null }], storageKey: null }, m], storageKey: null }], storageKey: 'viewer_v2(s:"84b0")' }] },
                    params: { id: "bGJ0LYcXZ9M_ARcscpUJiQ", metadata: {}, name: "useAffiliatesAndInvitesQuery", operationKind: "query", text: null },
                };
            y.hash = "ed144ab56ff9d59e89563cce723fc5cb";
            const p = y;
        },
        533399: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "applicant_name" },
                            { defaultValue: null, kind: "LocalArgument", name: "organization_email_address" },
                            { defaultValue: null, kind: "LocalArgument", name: "organization_name" },
                            { defaultValue: null, kind: "LocalArgument", name: "organization_type" },
                            { defaultValue: null, kind: "LocalArgument", name: "organization_website" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateApplicationMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "applicant_name", variableName: "applicant_name" },
                                    { kind: "Variable", name: "organization_email_address", variableName: "organization_email_address" },
                                    { kind: "Variable", name: "organization_name", variableName: "organization_name" },
                                    { kind: "Variable", name: "organization_type", variableName: "organization_type" },
                                    { kind: "Variable", name: "organization_website", variableName: "organization_website" },
                                ],
                                kind: "ScalarField",
                                name: "verified_organization_application_create_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useCreateApplicationMutation", selections: i },
                    params: { id: "hRFxJ7g_T4Y1mJqkv-xgNg", metadata: {}, name: "useCreateApplicationMutation", operationKind: "mutation", text: null },
                };
            t.hash = "4e5fb3171e18102a239c950a95c25f13";
            const r = t;
        },
        354001: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "invitation_detail" }), (i = { defaultValue: null, kind: "LocalArgument", name: "invitee_id" }), (t = { defaultValue: null, kind: "LocalArgument", name: "organization_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sliceID" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateInvitationMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "invitation_detail", variableName: "invitation_detail" },
                                    { kind: "Variable", name: "invitee_id", variableName: "invitee_id" },
                                    { kind: "Variable", name: "organization_id", variableName: "organization_id" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: "VerifiedOrganizationInvitation",
                                kind: "LinkedField",
                                name: "verified_organization_invitation_create",
                                plural: !1,
                                selections: [{ args: null, kind: "FragmentSpread", name: "InvitationListItem_verifiedOrganizationInvitation" }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [t, i, r, n],
                        kind: "Operation",
                        name: "useCreateInvitationMutation",
                        selections: [
                            {
                                alias: null,
                                args: s,
                                concreteType: "VerifiedOrganizationInvitation",
                                kind: "LinkedField",
                                name: "verified_organization_invitation_create",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "invitee_id_results",
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
                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
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
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserVerification",
                                                                kind: "LinkedField",
                                                                name: "verification",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
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
                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
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
                                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: s, filters: null, handle: "prependSliceItem", key: "", kind: "LinkedHandle", name: "verified_organization_invitation_create", handleArgs: [{ items: [{ kind: "Variable", name: "slices.0", variableName: "sliceID" }], kind: "ListValue", name: "slices" }] },
                        ],
                    },
                    params: { id: "d0fp0yuOx_D9OL65-WtZ-Q", metadata: {}, name: "useCreateInvitationMutation", operationKind: "mutation", text: null },
                };
            d.hash = "346b8662d16adcfa8ba7e4279249c2f5";
            const c = d;
        },
        452032: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCreateInvitation_verifiedOrganizationInvitation",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "invitee_id_results",
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
                                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                        { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null },
                                    ],
                                    storageKey: null,
                                },
                                action: "THROW",
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "VerifiedOrganizationInvitation",
                abstractKey: null,
                hash: "d6d3739feee51e3dcc4a0cd0d795ddf3",
            };
            const i = n;
        },
        303626: (e, a, l) => {
            l.d(a, { Z: () => d });
            var n,
                i,
                t,
                r,
                s,
                u,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "invitation_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "invitee_id" }), (t = { defaultValue: null, kind: "LocalArgument", name: "organization_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sliceID" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteInvitationMutation",
                        selections: [
                            (u = {
                                alias: null,
                                args: (s = [
                                    { kind: "Literal", name: "invitation_type", value: "Affiliate" },
                                    { kind: "Variable", name: "invitee_id", variableName: "invitee_id" },
                                    { kind: "Variable", name: "organization_id", variableName: "organization_id" },
                                ]),
                                kind: "ScalarField",
                                name: "verified_organization_invitation_delete",
                                storageKey: null,
                            }),
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, t, i, r],
                        kind: "Operation",
                        name: "useDeleteInvitationMutation",
                        selections: [
                            u,
                            {
                                alias: null,
                                args: s,
                                filters: null,
                                handle: "deleteSliceItem",
                                key: "",
                                kind: "ScalarHandle",
                                name: "verified_organization_invitation_delete",
                                handleArgs: [
                                    { kind: "Variable", name: "itemID", variableName: "invitation_id" },
                                    { items: [{ kind: "Variable", name: "slices.0", variableName: "sliceID" }], kind: "ListValue", name: "slices" },
                                ],
                            },
                        ],
                    },
                    params: { id: "crOZy3iUFNLxqbq41GQ7pg", metadata: {}, name: "useDeleteInvitationMutation", operationKind: "mutation", text: null },
                };
            o.hash = "6817abc95ee8b3595a4fe60da783c4f2";
            const d = o;
        },
        796634: (e, a, l) => {
            l.d(a, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useDeleteInvitation_verifiedOrganizationInvitation",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "invitee_id_results",
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
                                        { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                        { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null },
                                    ],
                                    storageKey: null,
                                },
                                action: "THROW",
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "VerifiedOrganizationInvitation",
                abstractKey: null,
                hash: "8b9a5b23bb3b63472252319e6342c8c3",
            };
            const i = n;
        },
        8710: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "rest_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePricesQuery",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "WebSubscriptionProductDetails",
                                kind: "LinkedField",
                                name: "web_subscription_product_details_by_rest_id",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                    {
                                        alias: null,
                                        args: [{ kind: "Literal", name: "include_seated", value: !0 }],
                                        concreteType: "PriceDetail",
                                        kind: "LinkedField",
                                        name: "prices",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceMetadata",
                                                kind: "LinkedField",
                                                name: "metadata",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "seated", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "purchasable", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "external_price_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "price_type", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "charge_interval", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "tax_amount_local_micro", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "WebSubscriptionPromotion",
                                                kind: "LinkedField",
                                                name: "subscription_promotions",
                                                plural: !0,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "WebSubscriptionPromotionMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "free_trial_days", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "duration_in_interval", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percent_off", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "ends_at_msec", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: "prices(include_seated:true)",
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePricesQuery", selections: i },
                    params: { id: "_1X_iKPfDIUTC6mnDJS5TA", metadata: {}, name: "usePricesQuery", operationKind: "query", text: null },
                };
            t.hash = "baa4f75a3eead7d5c8736af1c1c8cbfe";
            const r = t;
        },
        822133: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useProductSkuQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "84b0" }],
                                concreteType: "VerifiedOrganizationPaymentInfo",
                                kind: "LinkedField",
                                name: "verified_organization_payment_info",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "target_product_sku", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "target_organization_tier", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "payment_purpose", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'verified_organization_payment_info(s:"84b0")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useProductSkuQuery", selections: n },
                    params: { id: "J4jkAy2kC6O59mP-94xOzA", metadata: {}, name: "useProductSkuQuery", operationKind: "query", text: null },
                };
            i.hash = "5f932e7fff38f3bc144d461a84e9a88f";
            const t = i;
        },
        145178: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "user_activity_type" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRecordActivityMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_activity_type", variableName: "user_activity_type" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "record_verified_organization_user_activity",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRecordActivityMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "record_verified_organization_user_activity", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isRecordVerifiedOrganizationUserActivityResult" }], storageKey: null }] },
                    params: { id: "SUFcACkXZl-Ey81br0o_SA", metadata: {}, name: "useRecordActivityMutation", operationKind: "mutation", text: null },
                };
            r.hash = "13315bf389a237f7f8bd61bbec2a5009";
            const s = r;
        },
        326360: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useScheduledPromotionsFragment",
                    selections: [
                        {
                            alias: "promotions",
                            args: [
                                { kind: "Literal", name: "program_ids", value: ["vo_sign_up_promo", "vo_full_access_yearly_pay_sign_up_promo", "vo_basic_monthly_pay_sign_up_promo", "vo_basic_yearly_pay_sign_up_promo", "vo_full_access_yearly_upgrade_promo", "vo_full_access_monthly_pay_cancellation_retention", "vo_basic_monthly_pay_cancellation_retention", "vo_full_access_yearly_pay_cancellation_retention", "vo_basic_yearly_pay_cancellation_retention"] },
                                { kind: "Literal", name: "statuses", value: ["Active", "Redeemable", "Expired", "Scheduled"] },
                            ],
                            concreteType: "ScheduledPromotion",
                            kind: "LinkedField",
                            name: "list_scheduled_promotions",
                            plural: !0,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "expires_at_msec", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "starts_at_msec", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "for_user_id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "scheduled_id", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "promotion",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "enrolled_for_ads_account_id", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "valid_until_msec", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PromotionAmount",
                                                    kind: "LinkedField",
                                                    name: "coupon_amount_in_local",
                                                    plural: !1,
                                                    selections: (n = [
                                                        { alias: null, args: null, kind: "ScalarField", name: "amount", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                    ]),
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, concreteType: "PromotionAmount", kind: "LinkedField", name: "used_amount_in_local", plural: !1, selections: n, storageKey: null },
                                            ],
                                            type: "AdsCoupon",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                            ],
                            storageKey: 'list_scheduled_promotions(program_ids:["vo_sign_up_promo","vo_full_access_yearly_pay_sign_up_promo","vo_basic_monthly_pay_sign_up_promo","vo_basic_yearly_pay_sign_up_promo","vo_full_access_yearly_upgrade_promo","vo_full_access_monthly_pay_cancellation_retention","vo_basic_monthly_pay_cancellation_retention","vo_full_access_yearly_pay_cancellation_retention","vo_basic_yearly_pay_cancellation_retention"],statuses:["Active","Redeemable","Expired","Scheduled"])',
                        },
                    ],
                    type: "User",
                    abstractKey: null,
                };
            i.hash = "2b9ee91a1f846bbbfba6f127ccadc06a";
            const t = i;
        },
        940260: (e, a, l) => {
            l.d(a, { Z: () => y });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d,
                c,
                m,
                g,
                _ = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "cancel_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "external_price_id" }), (t = { defaultValue: null, kind: "LocalArgument", name: "product_sku" }), (r = { defaultValue: null, kind: "LocalArgument", name: "promotion_data" }), (s = { defaultValue: null, kind: "LocalArgument", name: "success_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useStripeCheckoutMutation",
                        selections: [
                            {
                                alias: null,
                                args: (u = [
                                    { kind: "Variable", name: "cancel_url", variableName: "cancel_url" },
                                    { kind: "Variable", name: "external_price_id", variableName: "external_price_id" },
                                    { kind: "Variable", name: "product_sku", variableName: "product_sku" },
                                    { kind: "Variable", name: "promotion_data", variableName: "promotion_data" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "subscriptioncheckoutsession_create",
                                plural: !1,
                                selections: [(o = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }], type: "WebSubscriptionCheckoutSession", abstractKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "errors", plural: !0, selections: [(c = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "shared_error_code", storageKey: null }, (d = { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null })], type: "WebSharedSubscriptionCheckoutSessionErrors", abstractKey: null }), (m = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_organization_error_code", storageKey: null }, d], type: "WebVerifiedOrganizationSubscriptionCheckoutSessionError", abstractKey: null })], storageKey: null }], type: "WebSubscriptionCheckoutSessionFailure", abstractKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, n, s, i, r], kind: "Operation", name: "useStripeCheckoutMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "subscriptioncheckoutsession_create", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "errors", plural: !0, selections: [g, c, m], storageKey: null }], type: "WebSubscriptionCheckoutSessionFailure", abstractKey: null }], storageKey: null }] },
                    params: { id: "8m52lEJVnINB5c0VpZEnfw", metadata: {}, name: "useStripeCheckoutMutation", operationKind: "mutation", text: null },
                };
            _.hash = "3d1593f69ebe2b65fd228783525f9649";
            const y = _;
        },
        506889: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "price_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTierSwitchCommitMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "price_id", variableName: "price_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "switch_tier",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null },
                                        ],
                                        type: "WebPaymentsTierSwitchResultError",
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useTierSwitchCommitMutation", selections: i },
                    params: { id: "2j5givRt4DeMHFE3MPs9_A", metadata: {}, name: "useTierSwitchCommitMutation", operationKind: "mutation", text: null },
                };
            t.hash = "cd4d2f1772d53f71cbed8a44b895d0e9";
            const r = t;
        },
        50982: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "target_price_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTierSwitchInitiateMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "target_price_id", variableName: "target_price_id" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "initiate_verified_organization_tier_switch",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "InitiateVerifiedOrganizationTierSwitchError", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useTierSwitchInitiateMutation", selections: i },
                    params: { id: "fkqUX8u8D-Et5HOhLFITbw", metadata: {}, name: "useTierSwitchInitiateMutation", operationKind: "mutation", text: null },
                };
            t.hash = "c564c508fd2e749e2562dfb18a0a0980";
            const r = t;
        },
        775674: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "origin_product_sku" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTierSwitchPlansQuery",
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
                                                                            args: (r = [{ kind: "Variable", name: "origin_product_sku", variableName: "origin_product_sku" }]),
                                                                            concreteType: null,
                                                                            kind: "LinkedField",
                                                                            name: "web_tier_switch_plans",
                                                                            plural: !1,
                                                                            selections: [
                                                                                t,
                                                                                (s = {
                                                                                    kind: "InlineFragment",
                                                                                    selections: [
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "WebPaymentsTierSwitchPlan",
                                                                                            kind: "LinkedField",
                                                                                            name: "plans",
                                                                                            plural: !0,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "amount_micro", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "charge_interval", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "price_id", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "product_sku", storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                    ],
                                                                                    type: "WebPaymentsGetTierSwitchPlansSuccess",
                                                                                    abstractKey: null,
                                                                                }),
                                                                                (u = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "WebPaymentsGetTierSwitchPlansError", abstractKey: null }),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useTierSwitchPlansQuery", selections: [{ alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "web_tier_switch_plans", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isWebPaymentsGetTierSwitchPlansResult" }, s, u], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "03aXNxdt2S1Hvkgy6Kp-tA", metadata: {}, name: "useTierSwitchPlansQuery", operationKind: "query", text: null },
                };
            d.hash = "e7e83d8059f9e407eabd1cb10c47cd09";
            const c = d;
        },
        283846: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useTierSwitchStatusQuery", selections: [{ alias: "viewer", args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "web_tier_switch_progress", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isWebPaymentsGetTierSwitchProgressResult" }, s, u], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "wU3n9GpHHMz92VCWEBHbhA", metadata: {}, name: "useTierSwitchStatusQuery", operationKind: "query", text: null },
                };
            d.hash = "96fd3c2b5f77434e2243b19987a1eb2f";
            const c = d;
        },
        685065: (e, a, l) => {
            l.d(a, { Z: () => o });
            var n,
                i,
                t,
                r,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "integrationServiceId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "integrationStatus" }), (t = { defaultValue: null, kind: "LocalArgument", name: "status" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateOrganizationMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "integration_service_id", variableName: "integrationServiceId" },
                                    { kind: "Variable", name: "integration_status", variableName: "integrationStatus" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "status", variableName: "status" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "UpdateOrganizationResult",
                                kind: "LinkedField",
                                name: "update_organization",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "RecruitingOrganization",
                                        kind: "LinkedField",
                                        name: "organization",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "integration_service_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "integration_status", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [r, t, n, i], kind: "Operation", name: "useUpdateOrganizationMutation", selections: s },
                    params: { id: "gq7_UQoL3PDhdfsR3Gpokg", metadata: {}, name: "useUpdateOrganizationMutation", operationKind: "mutation", text: null },
                };
            u.hash = "62498693718feb399c2440bbf57b1791";
            const o = u;
        },
        352585: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                t,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "for_ads_account_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "program_id" }), (t = { defaultValue: null, kind: "LocalArgument", name: "scheduled_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useValidateAndActivateScheduledPromotionMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "for_ads_account_id", variableName: "for_ads_account_id" },
                                    { kind: "Variable", name: "program_id", variableName: "program_id" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "scheduled_id", variableName: "scheduled_id" },
                                ],
                                concreteType: "ScheduledPromotionActivation",
                                kind: "LinkedField",
                                name: "validate_and_activate_scheduled_promotion",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "is_eligible", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "eligibility_errors", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, t, i], kind: "Operation", name: "useValidateAndActivateScheduledPromotionMutation", selections: r },
                    params: { id: "WhTy139swxCney9k6je4cg", metadata: {}, name: "useValidateAndActivateScheduledPromotionMutation", operationKind: "mutation", text: null },
                };
            s.hash = "105e752e6c893209f8c3904cecc0ccb6";
            const u = s;
        },
        384946: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedOrgConfigQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "84b0" }],
                                concreteType: "VerifiedOrganizationConfig",
                                kind: "LinkedField",
                                name: "verified_organization_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "affiliate_limit", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'verified_organization_config(s:"84b0")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useVerifiedOrgConfigQuery", selections: n },
                    params: { id: "AMAn8-NxrZq2WxSq8Do3MA", metadata: {}, name: "useVerifiedOrgConfigQuery", operationKind: "query", text: null },
                };
            i.hash = "969dbe5b8e30e6055f820ee5acab6932";
            const t = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-ee0d0da9.458b771a.js.map

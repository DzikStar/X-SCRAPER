"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-960914ab"],
    {
        934562: (e, l, a) => {
            a.d(l, { Z: () => K });
            var n,
                i,
                r,
                s,
                t,
                u,
                d,
                o,
                c,
                g,
                m,
                y,
                k,
                p,
                _,
                f,
                F = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "employment_type" }), (i = { defaultValue: null, kind: "LocalArgument", name: "external_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "job_description" }), (s = { defaultValue: null, kind: "LocalArgument", name: "job_function" }), (t = { defaultValue: null, kind: "LocalArgument", name: "location" }), (u = { defaultValue: null, kind: "LocalArgument", name: "location_type" }), (d = { defaultValue: null, kind: "LocalArgument", name: "salary_currency_code" }), (o = { defaultValue: null, kind: "LocalArgument", name: "salary_interval" }), (c = { defaultValue: null, kind: "LocalArgument", name: "salary_max" }), (g = { defaultValue: null, kind: "LocalArgument", name: "salary_min" }), (m = { defaultValue: null, kind: "LocalArgument", name: "seniority_level" }), (y = { defaultValue: null, kind: "LocalArgument", name: "short_description" }), (k = { defaultValue: null, kind: "LocalArgument", name: "team" }), (p = { defaultValue: null, kind: "LocalArgument", name: "title" }), (_ = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "AddJobScreenMutation",
                        selections: (f = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "employment_type", variableName: "employment_type" },
                                    { kind: "Variable", name: "external_url", variableName: "external_url" },
                                    { kind: "Variable", name: "job_description", variableName: "job_description" },
                                    { kind: "Variable", name: "job_function", variableName: "job_function" },
                                    { kind: "Variable", name: "location", variableName: "location" },
                                    { kind: "Variable", name: "location_type", variableName: "location_type" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "salary_currency_code", variableName: "salary_currency_code" },
                                    { kind: "Variable", name: "salary_interval", variableName: "salary_interval" },
                                    { kind: "Variable", name: "salary_max", variableName: "salary_max" },
                                    { kind: "Variable", name: "salary_min", variableName: "salary_min" },
                                    { kind: "Variable", name: "seniority_level", variableName: "seniority_level" },
                                    { kind: "Variable", name: "short_description", variableName: "short_description" },
                                    { kind: "Variable", name: "team", variableName: "team" },
                                    { kind: "Variable", name: "title", variableName: "title" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateJobResult",
                                kind: "LinkedField",
                                name: "create_job",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "Job",
                                        kind: "LinkedField",
                                        name: "job",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "external_url", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "hidden", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
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
                    operation: { argumentDefinitions: [_, p, t, i, n, r, s, u, o, g, c, d, m, y, k], kind: "Operation", name: "AddJobScreenMutation", selections: f },
                    params: { id: "bSW-Y396TZVEB_K1AY0f3w", metadata: {}, name: "AddJobScreenMutation", operationKind: "mutation", text: null },
                };
            F.hash = "9e55ec65374145cba8ecea1f120a25b4";
            const K = F;
        },
        719681: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                i,
                r,
                s,
                t,
                u,
                d,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AddJobScreenQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "RecruitingOrganizationCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], storageKey: null }), (s = { alias: "job_count", args: [{ kind: "Literal", name: "filter_params", value: { featured: [0], status: ["open"] } }], concreteType: "JobListSlice", kind: "LinkedField", name: "admin_job_list", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }], storageKey: 'admin_job_list(filter_params:{"featured":[0],"status":["open"]})' }), (t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }, t], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "AddJobScreenQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [r, s, t, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }, d], storageKey: null }, t, d], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "OyQRC6I_lcpsS38uWCOtxQ", metadata: {}, name: "AddJobScreenQuery", operationKind: "query", text: null },
                };
            o.hash = "7d019218f261723d7a42787f80eef863";
            const c = o;
        },
        369924: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                i,
                r,
                s,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (i = { defaultValue: null, kind: "LocalArgument", name: "rest_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "AdsAnalyticsQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "rest_id" },
                                    { kind: "Literal", name: "s", value: "2238" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    (u = {
                                                        alias: null,
                                                        args: [
                                                            { kind: "Literal", name: "analytics_type", value: "Ads" },
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                            { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                        ],
                                                        concreteType: "VerifiedOrganizationAnalyticsMetrics",
                                                        kind: "LinkedField",
                                                        name: "verified_organization_analytics_metrics",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "VerifiedOrganizationAnalyticsMetric",
                                                                kind: "LinkedField",
                                                                name: "current_metrics",
                                                                plural: !0,
                                                                selections: (t = [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "VerifiedOrganizationAnalyticsMetric", kind: "LinkedField", name: "past_metrics", plural: !0, selections: t, storageKey: null },
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
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, n, r],
                        kind: "Operation",
                        name: "AdsAnalyticsQuery",
                        selections: [
                            {
                                alias: "user",
                                args: s,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                            { kind: "InlineFragment", selections: [u, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    d,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "sw9AuCl_zV2RkSyhKPqbww", metadata: {}, name: "AdsAnalyticsQuery", operationKind: "query", text: null },
                };
            o.hash = "0ab6fb17aa4327bc9bc0c7ed7538b263";
            const c = o;
        },
        573690: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                r,
                s,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "for_ads_account_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "program_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AdsCouponPromotionEligibilityQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (i = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                                            args: [
                                                                                { kind: "Variable", name: "for_ads_account_id", variableName: "for_ads_account_id" },
                                                                                { kind: "Variable", name: "program_id", variableName: "program_id" },
                                                                            ],
                                                                            kind: "ScalarField",
                                                                            name: "promotion_eligibility",
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
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"84b0")',
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
                        name: "AdsCouponPromotionEligibilityQuery",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [r, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"84b0")',
                            },
                        ],
                    },
                    params: { id: "oAJYcfz_ow4bQta4-QByxg", metadata: {}, name: "AdsCouponPromotionEligibilityQuery", operationKind: "query", text: null },
                };
            t.hash = "c684363c1ff18dc209f02a4c4b5cbb57";
            const u = t;
        },
        670654: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AdsCouponScheduledPromotion",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "expires_at_msec", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "starts_at_msec", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "for_user_id", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "program_id", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "scheduled_id", storageKey: null },
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
                        { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                        { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    ],
                    type: "ScheduledPromotion",
                    abstractKey: null,
                };
            i.hash = "e9016e96bd16cdd5a8c34de88cd48aa3";
            const r = i;
        },
        686207: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                r,
                s,
                t,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "affiliate_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "affiliation_id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "profile_id" }), (s = { defaultValue: null, kind: "LocalArgument", name: "sliceID" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "AffiliateListItemMutation",
                        selections: [
                            (u = {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "affiliate_id", variableName: "affiliate_id" },
                                    { kind: "Variable", name: "profile_id", variableName: "profile_id" },
                                ]),
                                kind: "ScalarField",
                                name: "affiliate_delete",
                                storageKey: null,
                            }),
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, r, s, i],
                        kind: "Operation",
                        name: "AffiliateListItemMutation",
                        selections: [
                            u,
                            {
                                alias: null,
                                args: t,
                                filters: null,
                                handle: "deleteSliceItem",
                                key: "",
                                kind: "ScalarHandle",
                                name: "affiliate_delete",
                                handleArgs: [
                                    { kind: "Variable", name: "itemID", variableName: "affiliation_id" },
                                    { items: [{ kind: "Variable", name: "slices.0", variableName: "sliceID" }], kind: "ListValue", name: "slices" },
                                ],
                            },
                        ],
                    },
                    params: { id: "QSueyUwwWLaV6s50Z8Ct4Q", metadata: {}, name: "AffiliateListItemMutation", operationKind: "mutation", text: null },
                };
            d.hash = "78390905e6f5a06479cbd6ae12c926fc";
            const o = d;
        },
        495842: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                r,
                s,
                t = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "affiliate_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "affiliate_type" }), (r = { defaultValue: null, kind: "LocalArgument", name: "organization_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "AffiliateListItemUpdateAffiliateTypeMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "affiliate_id", variableName: "affiliate_id" },
                                    { kind: "Variable", name: "affiliate_type", variableName: "affiliate_type" },
                                    { kind: "Variable", name: "organization_id", variableName: "organization_id" },
                                ],
                                kind: "ScalarField",
                                name: "verified_organization_affiliate_update_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [r, n, i], kind: "Operation", name: "AffiliateListItemUpdateAffiliateTypeMutation", selections: s },
                    params: { id: "v5rNoNo7tAvWpUn6pIdo9A", metadata: {}, name: "AffiliateListItemUpdateAffiliateTypeMutation", operationKind: "mutation", text: null },
                };
            t.hash = "b2a801e775fab35bd6a528ae425d32ab";
            const u = t;
        },
        775709: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AffiliateListItem_userResults",
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
                                {
                                    kind: "InlineFragment",
                                    selections: [
                                        { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                                        { args: null, kind: "FragmentSpread", name: "UserName_user" },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "ApiUser",
                                            kind: "LinkedField",
                                            name: "legacy",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null },
                                    ],
                                    type: "User",
                                    abstractKey: null,
                                },
                                { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                            ],
                            storageKey: null,
                        },
                        action: "THROW",
                    },
                ],
                type: "UserResults",
                abstractKey: null,
                hash: "94a31ef66132ec9456d15113a63f25cc",
            };
            const i = n;
        },
        355763: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "AffiliateList_businessTeamAffiliatesSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "items_results",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "AffiliateListItem_userResults" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "BusinessTeamAffiliatesSlice",
                abstractKey: null,
                hash: "27eb6f9c04d24b29e73faf5c4ba1e511",
            };
            const i = n;
        },
        849333: (e, l, a) => {
            a.d(l, { Z: () => w });
            var n,
                i,
                r,
                s,
                t,
                u,
                d,
                o,
                c,
                g,
                m,
                y,
                k,
                p,
                _,
                f,
                F,
                K,
                b,
                S,
                v,
                L,
                A,
                T,
                V,
                R,
                h = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "count" }), (i = { defaultValue: null, kind: "LocalArgument", name: "cursor" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "AffiliatesScreenAffiliatesQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (r = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                                        (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                        (d = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null })], storageKey: null }),
                                                                        {
                                                                            alias: "business_team_affiliates",
                                                                            args: null,
                                                                            concreteType: "BusinessTeamAffiliatesSlice",
                                                                            kind: "LinkedField",
                                                                            name: "__AffiliatesScreenAffiliatesQuery_business_team_affiliates_slice",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "AffiliateList_businessTeamAffiliatesSlice" },
                                                                                { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                (c = {
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
                                                                        { alias: "verified_organization_invitations", args: [(g = { kind: "Literal", name: "invitation_type", value: "Affiliate" })], concreteType: "VerifiedOrganizationInvitationSlice", kind: "LinkedField", name: "__AffiliatesScreenAffiliatesQuery_verified_organization_invitations_slice", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "InvitationList_verifiedOrganizationInvitationSlice" }, { alias: null, args: null, concreteType: "VerifiedOrganizationInvitation", kind: "LinkedField", name: "items", plural: !0, selections: [(m = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }, c], storageKey: '__AffiliatesScreenAffiliatesQuery_verified_organization_invitations_slice(invitation_type:"Affiliate")' },
                                                                        m,
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
                                    storageKey: 'viewer_v2(s:"84b0")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, n],
                        kind: "Operation",
                        name: "AffiliatesScreenAffiliatesQuery",
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
                                                    s,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            t,
                                                            d,
                                                            (y = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                            {
                                                                alias: null,
                                                                args: (_ = [(k = { kind: "Variable", name: "count", variableName: "count" }), (p = { kind: "Variable", name: "cursor", variableName: "cursor" })]),
                                                                concreteType: "BusinessTeamAffiliatesSlice",
                                                                kind: "LinkedField",
                                                                name: "business_team_affiliates",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserResults",
                                                                        kind: "LinkedField",
                                                                        name: "items_results",
                                                                        plural: !0,
                                                                        selections: [
                                                                            o,
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
                                                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(f = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (F = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), (K = { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }), (b = { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }), (S = { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), u], storageKey: null },
                                                                                            y,
                                                                                            (L = { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }),
                                                                                            (A = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                            (V = {
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
                                                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [T], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            }),
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null },
                                                                                            o,
                                                                                        ],
                                                                                        type: "User",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                    m,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    c,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: _, filters: ["order_by"], handle: "slice", key: "AffiliatesScreenAffiliatesQuery_business_team_affiliates", kind: "LinkedHandle", name: "business_team_affiliates", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                                            { alias: null, args: (R = [k, p, g]), concreteType: "VerifiedOrganizationInvitationSlice", kind: "LinkedField", name: "verified_organization_invitations", plural: !1, selections: [{ alias: null, args: null, concreteType: "VerifiedOrganizationInvitation", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "invitee_id_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [t, o, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [f, F, K, b, S, v], storageKey: null }, y, L, A, V], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, m], storageKey: null }, m, c], storageKey: null },
                                                            { alias: null, args: R, filters: ["invitation_type"], handle: "slice", key: "AffiliatesScreenAffiliatesQuery_verified_organization_invitations", kind: "LinkedHandle", name: "verified_organization_invitations" },
                                                            m,
                                                            o,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"84b0")',
                            },
                        ],
                    },
                    params: { id: "W29_ue3uq9pXCbuknUJisg", metadata: { sliceInfoPath: ["viewer", "user_results", "result", "verified_organization_invitations", "slice_info"] }, name: "AffiliatesScreenAffiliatesQuery", operationKind: "query", text: null },
                };
            h.hash = "b0bdea2462ff4259ad31f35998b313d4";
            const w = h;
        },
        24410: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [{ kind: "RootArgument", name: "current_product_sku" }],
                kind: "Fragment",
                metadata: null,
                name: "CalloutContainerFragment",
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
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }], type: "WebPaymentsTierSwitchProgress", abstractKey: null },
                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "WebPaymentsGetTierSwitchProgressError", abstractKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "879a8c71c962971b1402f9309d5a9934",
            };
            const i = n;
        },
        506448: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                i,
                r,
                s,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "CancelFlowOfferQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (n = [{ kind: "Literal", name: "s", value: "84b0" }]),
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
                                                                    {
                                                                        alias: null,
                                                                        args: (i = [{ kind: "Literal", name: "purpose", value: "CancellationRetention" }]),
                                                                        concreteType: "ListVerifiedOrganizationOffersResponse",
                                                                        kind: "LinkedField",
                                                                        name: "list_verified_organization_offers",
                                                                        plural: !1,
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "VerifiedOrganizationOffer",
                                                                                kind: "LinkedField",
                                                                                name: "offers",
                                                                                plural: !0,
                                                                                selections: [
                                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "offer_id", storageKey: null }),
                                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "offer_type", storageKey: null }),
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "metadata",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            (t = {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "amount_in_usd", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "days_of_coupon_interval", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "days_to_wait_for_first_redeemable", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "number_of_coupons", storageKey: null },
                                                                                                ],
                                                                                                type: "VerifiedOrganizationCouponOfferMetadata",
                                                                                                abstractKey: null,
                                                                                            }),
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: 'list_verified_organization_offers(purpose:"CancellationRetention")',
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
                                storageKey: 'viewer_v2(s:"84b0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "CancelFlowOfferQuery", selections: [{ alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: i, concreteType: "ListVerifiedOrganizationOffersResponse", kind: "LinkedField", name: "list_verified_organization_offers", plural: !1, selections: [{ alias: null, args: null, concreteType: "VerifiedOrganizationOffer", kind: "LinkedField", name: "offers", plural: !0, selections: [r, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "metadata", plural: !1, selections: [u, t], storageKey: null }], storageKey: null }], storageKey: 'list_verified_organization_offers(purpose:"CancellationRetention")' }, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null }], storageKey: 'viewer_v2(s:"84b0")' }] },
                    params: { id: "NaVp35ScHTh-CVUA9-kYwQ", metadata: {}, name: "CancelFlowOfferQuery", operationKind: "query", text: null },
                };
            o.hash = "38e16ba9bdaf95e2516a7fb13a513640";
            const c = o;
        },
        986611: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                r,
                s,
                t,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "jobId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "EditJobScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    {
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
                                                    { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_job" }], storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [r, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                                                ],
                                                type: "ApiJob",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "EditJobScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [
                                    r,
                                    s,
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
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "JobCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "external_url", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "hidden", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "integration_id", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "job_description", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "job_function", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "job_page_url", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "seniority_level", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "source", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [r, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [t, r], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null },
                                                    r,
                                                ],
                                                type: "ApiJob",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "7_i-s3czXOa2GvW7Rtctrw", metadata: {}, name: "EditJobScreenQuery", operationKind: "query", text: null },
                };
            d.hash = "ca4dd6b5b697ef75205b525e0b30e665";
            const o = d;
        },
        230820: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "EditJobScreen_job",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "external_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "hidden", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "integration_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_function", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_page_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "seniority_level", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                ],
                type: "Job",
                abstractKey: null,
                hash: "a436ef9977bccc194d75b8d06f0038a9",
            };
            const i = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-960914ab.fbe97bca.js.map

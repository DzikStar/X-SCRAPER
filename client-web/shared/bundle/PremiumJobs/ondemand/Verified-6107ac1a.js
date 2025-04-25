"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.PremiumJobs~ondemand.Verified-6107ac1a"],
    {
        322633: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "job_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "FeatureActionFeatureMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "job_id", variableName: "job_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "FeatureJobV2Output",
                                kind: "LinkedField",
                                name: "feature_job_v2",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "FeatureActionFeatureMutation", selections: i },
                    params: { id: "I_OsXj6vrmG_ImrpETGsGQ", metadata: {}, name: "FeatureActionFeatureMutation", operationKind: "mutation", text: null },
                };
            r.hash = "426a17b848a3d7ccacbfe72d7c21ab6b";
            const t = r;
        },
        837153: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "job_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "FeatureActionUnfeatureMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "job_id", variableName: "job_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "unfeature_job_v2",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "FeatureActionUnfeatureMutation", selections: i },
                    params: { id: "OFbjfRxQ52jc9BTCg94_aQ", metadata: {}, name: "FeatureActionUnfeatureMutation", operationKind: "mutation", text: null },
                };
            r.hash = "49308bc4a61640be0384bfea4c737cf0";
            const t = r;
        },
        631110: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobListItem_job",
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
                type: "JobCore",
                abstractKey: null,
                hash: "966fee761433895b7e69a64c78006da5",
            };
            const i = n;
        },
        802832: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobListItem_jobShareItem",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                ],
                type: "JobShareItemCore",
                abstractKey: null,
                hash: "65c4384d1100fb59eb5503a3ad9376ed",
            };
            const i = n;
        },
        881934: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobListItem_organization",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "RecruitingOrganizationCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "integration_service_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "last_synced_at", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "RecruitingOrganizationProfile",
                        kind: "LinkedField",
                        name: "profile",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ApiRecruitingOrganization",
                abstractKey: null,
                hash: "33f0a043d971cde5f5b60ee7a4f76a0d",
            };
            const i = n;
        },
        992152: (e, l, a) => {
            a.d(l, { Z: () => I });
            var n,
                i,
                r,
                t,
                s,
                u,
                o,
                d,
                c,
                g,
                m,
                y,
                k,
                p,
                b,
                F,
                _,
                K,
                f,
                S,
                v,
                L,
                h,
                A,
                T,
                R,
                O = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "includeAdvertiserAccounts" }), (i = { defaultValue: null, kind: "LocalArgument", name: "jobFilterParams" }), (r = { defaultValue: null, kind: "LocalArgument", name: "jobShareFilterParams" }), (t = { defaultValue: null, kind: "LocalArgument", name: "keywordSearchCount" }), (s = { defaultValue: null, kind: "LocalArgument", name: "keywordSearchCursor" }), (u = { defaultValue: null, kind: "LocalArgument", name: "pageParams" }), (o = { defaultValue: null, kind: "LocalArgument", name: "searchParams" }), (d = { defaultValue: null, kind: "LocalArgument", name: "sortParams" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "JobListQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (c = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                (g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (m = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                        { args: null, kind: "FragmentSpread", name: "useVerifiedOrgFeatureHelperFragment" },
                                                                        {
                                                                            condition: "includeAdvertiserAccounts",
                                                                            kind: "Condition",
                                                                            passingValue: !0,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "useAdvertiserAccountsFragment" },
                                                                                { args: null, kind: "FragmentSpread", name: "useOrganizationSettingsFragment" },
                                                                            ],
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
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            selections: [
                                                                                                {
                                                                                                    alias: null,
                                                                                                    args: (y = [
                                                                                                        { kind: "Variable", name: "count", variableName: "keywordSearchCount" },
                                                                                                        { kind: "Variable", name: "cursor", variableName: "keywordSearchCursor" },
                                                                                                        { kind: "Variable", name: "search_params", variableName: "searchParams" },
                                                                                                    ]),
                                                                                                    concreteType: "JobSearchSlice",
                                                                                                    kind: "LinkedField",
                                                                                                    name: "consumer_job_search",
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                        (k = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }),
                                                                                                        { args: null, kind: "FragmentSpread", name: "JobList_filteredItems" },
                                                                                                        (p = {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "JobSliceInfo",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "slice_info",
                                                                                                            plural: !1,
                                                                                                            selections: [
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                                                                                                            ],
                                                                                                            storageKey: null,
                                                                                                        }),
                                                                                                        (b = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                },
                                                                                                { alias: null, args: (K = [{ kind: "Variable", name: "filter_params", variableName: "jobFilterParams" }, (F = { kind: "Variable", name: "page_params", variableName: "pageParams" }), (_ = { kind: "Variable", name: "sort_params", variableName: "sortParams" })]), concreteType: "JobListSlice", kind: "LinkedField", name: "admin_jobs", plural: !1, selections: [k, { args: null, kind: "FragmentSpread", name: "JobList_items" }, b], storageKey: null },
                                                                                                { alias: null, args: (f = [{ kind: "Variable", name: "filter_params", variableName: "jobShareFilterParams" }, F, _]), concreteType: "JobShareListSlice", kind: "LinkedField", name: "admin_job_shares", plural: !1, selections: [k, { args: null, kind: "FragmentSpread", name: "JobList_shares" }, b], storageKey: null },
                                                                                                b,
                                                                                            ],
                                                                                            type: "ApiRecruitingOrganization",
                                                                                            abstractKey: null,
                                                                                        },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        b,
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
                        argumentDefinitions: [i, r, u, d, o, t, s, n],
                        kind: "Operation",
                        name: "JobListQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: c,
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
                                                    g,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            m,
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_organization_features", storageKey: null },
                                                            {
                                                                condition: "includeAdvertiserAccounts",
                                                                kind: "Condition",
                                                                passingValue: !0,
                                                                selections: [
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
                                                                                    m,
                                                                                    (S = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
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
                                                                                    (v = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "VerifiedOrganizationSettings", kind: "LinkedField", name: "verified_organization_settings", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hiring_job_promotion_ad_account", storageKey: null }], storageKey: null },
                                                                ],
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
                                                                            g,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: y,
                                                                                        concreteType: "JobSearchSlice",
                                                                                        kind: "LinkedField",
                                                                                        name: "consumer_job_search",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            k,
                                                                                            (R = {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiJobResults",
                                                                                                kind: "LinkedField",
                                                                                                name: "items_results",
                                                                                                plural: !0,
                                                                                                selections: (T = [
                                                                                                    v,
                                                                                                    m,
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "result",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            g,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    v,
                                                                                                                    m,
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
                                                                                                                            (L = { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null }),
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
                                                                                                                            (h = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }),
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                            (A = { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null }),
                                                                                                                        ],
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
                                                                                                                                    g,
                                                                                                                                    {
                                                                                                                                        kind: "InlineFragment",
                                                                                                                                        selections: [
                                                                                                                                            {
                                                                                                                                                alias: null,
                                                                                                                                                args: null,
                                                                                                                                                concreteType: "RecruitingOrganizationCore",
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "core",
                                                                                                                                                plural: !1,
                                                                                                                                                selections: [
                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "integration_service_id", storageKey: null },
                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "last_synced_at", storageKey: null },
                                                                                                                                                ],
                                                                                                                                                storageKey: null,
                                                                                                                                            },
                                                                                                                                            { alias: null, args: null, concreteType: "RecruitingOrganizationProfile", kind: "LinkedField", name: "profile", plural: !1, selections: [S, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }], storageKey: null },
                                                                                                                                            v,
                                                                                                                                        ],
                                                                                                                                        type: "ApiRecruitingOrganization",
                                                                                                                                        abstractKey: null,
                                                                                                                                    },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            v,
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                type: "ApiJob",
                                                                                                                abstractKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                            }),
                                                                                            p,
                                                                                            b,
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: K, concreteType: "JobListSlice", kind: "LinkedField", name: "admin_jobs", plural: !1, selections: [k, R, b], storageKey: null },
                                                                                    { alias: null, args: f, concreteType: "JobShareListSlice", kind: "LinkedField", name: "admin_job_shares", plural: !1, selections: [k, { alias: null, args: null, concreteType: "ApiJobShareItemResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [v, m, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "JobShareItemCore", kind: "LinkedField", name: "core", plural: !1, selections: [L, h, A, { alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_results", plural: !1, selections: T, storageKey: null }], storageKey: null }, v], type: "ApiJobShareItem", abstractKey: null }], storageKey: null }], storageKey: null }, b], storageKey: null },
                                                                                    b,
                                                                                    v,
                                                                                ],
                                                                                type: "ApiRecruitingOrganization",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    v,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            b,
                                                            v,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            v,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "jA1FRlrrfnsQHIAvwnsHXA", metadata: {}, name: "JobListQuery", operationKind: "query", text: null },
                };
            O.hash = "f0810e6aba812cb6658e74738033a8c8";
            const I = O;
        },
        630673: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobList_filteredItems", selections: [{ alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, i, { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_job" }], storageKey: null }, { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_organization" }], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null }], storageKey: null }], type: "JobSearchSlice", abstractKey: null };
            r.hash = "5414aca6653bbb880af39d14d6946358";
            const t = r;
        },
        199544: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobList_items", selections: [{ alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, i, { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_job" }], storageKey: null }, { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_organization" }], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null }], storageKey: null }], type: "JobListSlice", abstractKey: null };
            r.hash = "d62646a80fc8c3fc02eb396eb1a25d06";
            const t = r;
        },
        396345: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "JobList_shares",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiJobShareItemResults",
                            kind: "LinkedField",
                            name: "items_results",
                            plural: !0,
                            selections: [
                                (n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "JobShareItemCore",
                                                    kind: "LinkedField",
                                                    name: "core",
                                                    plural: !1,
                                                    selections: [
                                                        { args: null, kind: "FragmentSpread", name: "JobListItem_jobShareItem" },
                                                        { alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_results", plural: !1, selections: [n, i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, i, { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_job" }], storageKey: null }, { alias: null, args: null, concreteType: "ApiRecruitingOrganizationResults", kind: "LinkedField", name: "recruiting_organization_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "JobListItem_organization" }], type: "ApiRecruitingOrganization", abstractKey: null }], storageKey: null }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null }], storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "ApiJobShareItem",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "JobShareListSlice",
                    abstractKey: null,
                };
            r.hash = "d9cb79635b5852e9155275e2c9a18293";
            const t = r;
        },
        39611: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "SyncAtsJobsSyncMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "StartIntegrationSyncResult",
                                kind: "LinkedField",
                                name: "start_integration_sync",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "SyncAtsJobsSyncMutation", selections: i },
                    params: { id: "wolkrzMJOBR8fLlOX6PR4w", metadata: {}, name: "SyncAtsJobsSyncMutation", operationKind: "mutation", text: null },
                };
            r.hash = "fca9a842a61dca571367833d2c48d3f9";
            const t = r;
        },
        865023: (e, l, a) => {
            a.d(l, { i: () => n });
            const n = Object.freeze({ ApplicationInReview: "ApplicationInReview", ApplicationRequestInfo: "ApplicationRequestInfo", NotStart: "NotStart", Onboarded: "Onboarded", UpfrontApplicationInProgress: "UpfrontApplicationInProgress", UpfrontPromotionInProgress: "UpfrontPromotionInProgress" });
        },
        539089: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useAdvertiserAccountsFragment",
                selections: [
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
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "f864af8c49d24d49925b4ce4b5094fd4",
            };
            const i = n;
        },
        337909: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useEnableProfileSpotlightModuleMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                kind: "ScalarField",
                                name: "enable_jobs_module",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useEnableProfileSpotlightModuleMutation", selections: i },
                    params: { id: "C1-SoqooE1JXByvc5GKj3A", metadata: {}, name: "useEnableProfileSpotlightModuleMutation", operationKind: "mutation", text: null },
                };
            r.hash = "fbbaef4d6605188060fe38e106438883";
            const t = r;
        },
        126582: (e, l, a) => {
            a.d(l, { Z: () => F });
            var n,
                i,
                r,
                t,
                s,
                u,
                o,
                d,
                c,
                g,
                m,
                y,
                k,
                p,
                b = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "includeAdvertiserAccounts" }), (i = { defaultValue: null, kind: "LocalArgument", name: "keyword" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchAdminJobsQuery",
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
                                                                (t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                        { args: null, kind: "FragmentSpread", name: "useVerifiedOrgFeatureHelperFragment" },
                                                                        {
                                                                            condition: "includeAdvertiserAccounts",
                                                                            kind: "Condition",
                                                                            passingValue: !0,
                                                                            selections: [
                                                                                { args: null, kind: "FragmentSpread", name: "useAdvertiserAccountsFragment" },
                                                                                { args: null, kind: "FragmentSpread", name: "useOrganizationSettingsFragment" },
                                                                            ],
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
                                                                                    selections: [{ kind: "InlineFragment", selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), s, { alias: null, args: null, concreteType: "RecruitingOrganizationCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchAdminJobs_organization" }], storageKey: null }, (c = { alias: "job_count", args: [{ kind: "Literal", name: "filter_params", value: { featured: [0, 1], status: (o = ["open"]) } }], concreteType: "JobListSlice", kind: "LinkedField", name: "admin_jobs", plural: !1, selections: (d = [{ alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }]), storageKey: 'admin_jobs(filter_params:{"featured":[0,1],"status":["open"]})' }), (g = { alias: "filtered_job_count", args: [{ fields: [{ kind: "Variable", name: "keyword", variableName: "keyword" }], kind: "ObjectValue", name: "search_params" }], concreteType: "JobSearchSlice", kind: "LinkedField", name: "consumer_job_search", plural: !1, selections: d, storageKey: null }), (y = { alias: "featured_job_count", args: [{ kind: "Literal", name: "filter_params", value: { featured: (m = [1]), status: o } }], concreteType: "JobListSlice", kind: "LinkedField", name: "admin_jobs", plural: !1, selections: d, storageKey: 'admin_jobs(filter_params:{"featured":[1],"status":["open"]})' }), (k = { alias: "featured_job_shares_count", args: [{ kind: "Literal", name: "filter_params", value: { featured: m, status: ["active"] } }], concreteType: "JobShareListSlice", kind: "LinkedField", name: "admin_job_shares", plural: !1, selections: d, storageKey: 'admin_job_shares(filter_params:{"featured":[1],"status":["active"]})' }), (p = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "ApiRecruitingOrganization", abstractKey: null }],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        p,
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
                        argumentDefinitions: [i, n],
                        kind: "Operation",
                        name: "useFetchAdminJobsQuery",
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
                                                    t,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            s,
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_organization_features", storageKey: null },
                                                            {
                                                                condition: "includeAdvertiserAccounts",
                                                                kind: "Condition",
                                                                passingValue: !0,
                                                                selections: [
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
                                                                                    s,
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
                                                                                    u,
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "VerifiedOrganizationSettings", kind: "LinkedField", name: "verified_organization_settings", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hiring_job_promotion_ad_account", storageKey: null }], storageKey: null },
                                                                ],
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
                                                                                    u,
                                                                                    s,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "RecruitingOrganizationCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "integration_status", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "integration_service_id", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "last_synced_at", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    c,
                                                                                    g,
                                                                                    y,
                                                                                    k,
                                                                                    p,
                                                                                ],
                                                                                type: "ApiRecruitingOrganization",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    u,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            p,
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
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "oeRzYwdNvarF30P9o93Vbg", metadata: {}, name: "useFetchAdminJobsQuery", operationKind: "query", text: null },
                };
            b.hash = "15831875002bd659829b7ac19ef93a3b";
            const F = b;
        },
        396840: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useFetchAdminJobs_organization",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "integration_status", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "integration_service_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "last_synced_at", storageKey: null },
                ],
                type: "RecruitingOrganizationCore",
                abstractKey: null,
                hash: "dc7f5de2b671711ec5e56b15844ffbcd",
            };
            const i = n;
        },
        786033: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                r,
                t,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (t = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: t, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n, r], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            u.hash = "88a4b93bad19f92c67d5957375d338be";
            const o = u;
        },
        458187: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useOrganizationSettingsFragment", selections: [{ alias: null, args: null, concreteType: "VerifiedOrganizationSettings", kind: "LinkedField", name: "verified_organization_settings", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "hiring_job_promotion_ad_account", storageKey: null }], storageKey: null }], type: "User", abstractKey: null, hash: "ac2f824b14d071021e30935d07f04de9" };
            const i = n;
        },
        830195: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                r,
                t,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useProfileModuleQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "UserBusinessModulesResponse", kind: "LinkedField", name: "profilemodules", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserBusinessModuleResponseV1", kind: "LinkedField", name: "v1", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "module_id", storageKey: null }], storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
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
                        name: "useProfileModuleQuery",
                        selections: [
                            {
                                alias: "user",
                                args: i,
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
                                            { kind: "InlineFragment", selections: [r, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    t,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "z1rVH0R70_lMBgu7VF9mTg", metadata: {}, name: "useProfileModuleQuery", operationKind: "query", text: null },
                };
            s.hash = "0ab230adff094b29074b4fcfb89b6554";
            const u = s;
        },
        691493: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "data" },
                            { defaultValue: null, kind: "LocalArgument", name: "jobId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateJobMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "data", variableName: "data" },
                                    { kind: "Variable", name: "job_id", variableName: "jobId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "UpdateJobResult",
                                kind: "LinkedField",
                                name: "update_job",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "Job", kind: "LinkedField", name: "job", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "EditJobScreen_job" }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "useUpdateJobMutation",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "UpdateJobResult",
                                kind: "LinkedField",
                                name: "update_job",
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
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "q48czDjETWjUNO2iNHSpyQ", metadata: {}, name: "useUpdateJobMutation", operationKind: "mutation", text: null },
                };
            r.hash = "862556c48d6cf1ab35fa41002c01acfb";
            const t = r;
        },
        574456: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "data" }), (i = { defaultValue: null, kind: "LocalArgument", name: "id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateJobShareItemMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "data", variableName: "data" },
                                    { kind: "Variable", name: "id", variableName: "id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "update_job_share_item",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useUpdateJobShareItemMutation", selections: r },
                    params: { id: "hIiPNvZDvzDTN4q7UTE1tg", metadata: {}, name: "useUpdateJobShareItemMutation", operationKind: "mutation", text: null },
                };
            t.hash = "791d6a14bbfb67867551eaf048b95817";
            const s = t;
        },
        924523: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useVerifiedOrgIdentityVerificationConfigQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                                    (i = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "VerifiedOrganizationIdentityVerification",
                                                                        kind: "LinkedField",
                                                                        name: "verified_organization_identity_verification",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_verification_enabled", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "completed_by", storageKey: null },
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
                                        action: "THROW",
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useVerifiedOrgIdentityVerificationConfigQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
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
                                                    { kind: "InlineFragment", selections: [i, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
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
                    params: { id: "OeetKDpCigK8wSJwl7oWRA", metadata: { features: ["responsive_web_verified_organizations_idv_enabled"] }, name: "useVerifiedOrgIdentityVerificationConfigQuery", operationKind: "query", text: null },
                };
            t.hash = "14ba08eed2e153d6782fa9fe0de60692";
            const s = t;
        },
        229333: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n = a(202784),
                i = a(466999),
                r = a(325686),
                t = a(392237),
                s = a(674132);
            const u = a.n(s)().e5b0063d;
            let o = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${o}`), (o += 1);
                }
                render() {
                    const { children: e, title: l } = this.props,
                        a = u({ title: l });
                    return n.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(i.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: t.default.visuallyHidden }, l), n.createElement(r.Z, { "aria-label": a }, e));
                }
            }
            const c = d;
        },
        414939: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(202784),
                i = a(325686),
                r = a(392237);
            class t extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(i.Z, { style: s.root });
                }
            }
            const s = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                u = t;
        },
        965245: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(807896),
                i = a(202784),
                r = a(229333),
                t = a(414939),
                s = a(334346);
            const u = ({ accessibilityTitle: e, footer: l = i.createElement(t.Z, null), ...a }) => {
                const u = i.createElement(s.C, (0, n.Z)({}, a, { footer: l }));
                return e ? i.createElement(r.Z, { title: e }, u) : u;
            };
        },
        664727: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "status" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useSetupOrgMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "status", variableName: "status" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ConfigureOrganizationResult",
                                kind: "LinkedField",
                                name: "configure_organization",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useSetupOrgMutation", selections: r },
                    params: { id: "oLe4Lwz_ozrlSO5yPyzFLg", metadata: {}, name: "useSetupOrgMutation", operationKind: "mutation", text: null },
                };
            t.hash = "439dfdcba4832cc106164180b8ada679";
            const s = t;
            var u = a(202784),
                o = (a(585488), a(351743)),
                d = a.n(o);
            const c = s,
                g = () => {
                    const [e, l] = d()(c);
                    return [
                        u.useCallback(
                            (l) => {
                                e(l);
                            },
                            [e],
                        ),
                        l,
                    ];
                };
        },
        985124: (e, l, a) => {
            a.d(l, { $J: () => s, WA: () => z, ZC: () => v, cj: () => N, eo: () => n.eo, hb: () => E, kW: () => u, pg: () => L, rP: () => t, u4: () => Z, xk: () => J });
            var n = a(89217),
                i = a(674132),
                r = a.n(i);
            const t = Object.freeze({ DISABLED: 0, ENABLED: 10, SYNC_IN_PROGRESS: 20, SYNC_FAILED: 30 }),
                s = Object.freeze({ freshteam: "Freshteam", greenhouse: "Greenhouse", lever: "Lever", recruitee: "Recruitee", "sage-hr": "Sage HR", "sap-successfactors": "SAP SuccessFactors", teamtailor: "Teamtailor", workable: "Workable", workday: "Workday" }),
                u = Object.entries(n.eo).map(([e, l]) => ({ label: String(l), value: e })),
                o = r().d2b8da2c,
                d = r().cd958040,
                c = r().c5760ca2,
                g = r().d31b4a2a,
                m = r().df1b7550,
                y = r().f38959a6,
                k = r().bc78a26c,
                p = r().ec28738e,
                b = r().icb06308,
                F = r().d0b978ec,
                _ = r().af19cdc2,
                K = r().e4a51fca,
                f = r().e8ca78ae,
                S = r().c365dcc6,
                v = Object.freeze({ software_engineering: o, data_analytics: d, product: c, design: g, marketing: m, sales_am: y, operations: k, people_hr: p, finance_accounting: b, legal_compliance: F, science_engineering: _, medical: K, construction_trades: f, other: S }),
                L = Object.entries(v).map(([e, l]) => ({ label: String(l), value: e })),
                h = r().e25d75e4,
                A = r().e89b3f04,
                T = r().h55825dc,
                R = r().cc537386,
                O = r().jfc3cece,
                I = r().e1b683aa,
                j = r().c4627fda,
                V = r().db75b47c,
                z = Object.freeze({ intern: h, entry_level: A, junior: T, mid_level: R, senior: O, lead: I, manager: j, executive: V }),
                J = Object.entries(z).map(([e, l]) => ({ label: String(l), value: e })),
                w = r().i312f0ce,
                D = r().b4aff05e,
                C = r().c08b9138,
                U = r().ia5d6422,
                M = r().h97c7f42,
                P = r().ibed2d04,
                N = Object.freeze({ onsite: { label: w, description: U, value: "onsite" }, remote: { label: C, description: P, value: "remote" }, hybrid: { label: D, description: M, value: "hybrid" } }),
                Z = Object.keys(N).map((e) => ({ label: N[e].label, value: e, description: N[e].description })),
                E = Object.keys(n.Qw).map((e) => ({ ...n.Qw[e], value: String(n.Qw[e].value) }));
        },
        943052: (e, l, a) => {
            a.d(l, { Z: () => r });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(107267);
            const r = () => {
                const e = (0, i.useLocation)(),
                    l = (0, i.useHistory)(),
                    [a, r] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const t = n.useCallback(
                        (n, i) => {
                            const r = new URLSearchParams(a);
                            r.set(n, i), l.push(`${e.pathname}?${r.toString()}`);
                        },
                        [l, e.pathname, a],
                    ),
                    s = n.useCallback(
                        (n) => {
                            const i = new URLSearchParams(a);
                            for (const e in n) n[e] ? i.set(e, n[e]) : i.delete(e);
                            l.push(`${e.pathname}?${i.toString()}`);
                        },
                        [l, e.pathname, a],
                    );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), t, s];
            };
        },
        540819: (e, l, a) => {
            a.d(l, { n: () => i, p: () => n });
            const n = Object.freeze({ ACCOUNTS: "Accounts", INVITATIONS: "Invitations" }),
                i = Object.freeze({ JOBS: "All", FEATURED_JOBS: "Featured", ARCHIVED: "Archived" });
        },
        482924: (e, l, a) => {
            a.d(l, { A: () => m });
            var n = a(202784),
                i = a(437429),
                r = a.n(i),
                t = a(57074),
                s = a.n(t),
                u = a(10622),
                o = a.n(u),
                d = a(71620),
                c = a(312771),
                g = a(535338);
            function m(e, l, a) {
                const i = s()(l),
                    t = s()(a),
                    u = r()(),
                    m = (0, d.po)(),
                    [y, k] = n.useState(null),
                    [p, b] = n.useState(!1),
                    F = n.useCallback(() => {
                        p ||
                            (b(!0),
                            o()(u, e, i, { networkCacheConfig: t?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    b(!1);
                                },
                                error: (e) => {
                                    m(e), b(!1), k(e);
                                },
                            }));
                    }, [u, m, e, p, i, t]),
                    _ = (0, g.p)(e, l, a);
                return n.useMemo(() => (y ? { data: _, refetch: F, refetchStatus: c.ZP.FAILED, refetchError: y } : { data: _, refetch: F, refetchStatus: p ? c.ZP.LOADING : c.ZP.NONE, refetchError: void 0 }), [_, y, p, F]);
            }
        },
        89217: (e, l, a) => {
            a.d(l, { Ju: () => g, Qw: () => m, eo: () => o });
            var n = a(674132),
                i = a.n(n);
            const r = i().c69eb656,
                t = i().g46ae43c,
                s = i().jf7d4cc6,
                u = i().b2214572,
                o = Object.freeze({ full_time: r, full_time_contract: t, part_time: s, contract_to_hire: u }),
                d = i().f8337bd6,
                c = i().i935bf88,
                g = Object.freeze({ 1: d, 2: c }),
                m = Object.freeze({ annually: { label: d, value: 1 }, hourly: { label: c, value: 2 } });
        },
        457458: (e, l, a) => {
            a.d(l, { G: () => o, M: () => u });
            a(571372);
            var n = a(301503),
                i = a(674132),
                r = a.n(i),
                t = a(89217);
            const s = r().b75b8ffd,
                u = (e, l = 1) => {
                    const a = l ?? 1;
                    return t.Ju[a.toString()] ? s({ salary: e, interval: t.Ju[a.toString()] }) : e;
                },
                o = (e) => {
                    if (e)
                        try {
                            const l = JSON.parse(e);
                            if (!l.entityMap || !l.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, n.convertFromRaw)(l).hasText()) return;
                            return l;
                        } catch (e) {}
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.PremiumJobs~ondemand.Verified-6107ac1a.3368dbca.js.map

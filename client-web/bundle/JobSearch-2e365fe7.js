"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.JobSearch-2e365fe7"],
    {
        771741: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                o,
                d,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "limit" },
                            { defaultValue: null, kind: "LocalArgument", name: "offset" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "JobBookmarksListContainerQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "s", value: "f3d8" }]),
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
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (s = [
                                                                    { kind: "Variable", name: "limit", variableName: "limit" },
                                                                    { kind: "Variable", name: "offset", variableName: "offset" },
                                                                ]),
                                                                concreteType: "SavedJobsSlice",
                                                                kind: "LinkedField",
                                                                name: "saved_jobs",
                                                                plural: !1,
                                                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "total", storageKey: null }), { alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: null }],
                                                                storageKey: null,
                                                            },
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
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "JobBookmarksListContainerQuery",
                        selections: [
                            {
                                alias: null,
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
                                                            {
                                                                alias: null,
                                                                args: s,
                                                                concreteType: "SavedJobsSlice",
                                                                kind: "LinkedField",
                                                                name: "saved_jobs",
                                                                plural: !1,
                                                                selections: [
                                                                    r,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ApiJobResults",
                                                                        kind: "LinkedField",
                                                                        name: "items_results",
                                                                        plural: !0,
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
                                                                                    u,
                                                                                    { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "JobCore",
                                                                                                kind: "LinkedField",
                                                                                                name: "core",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [o, t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [o, t, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
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
                                                                                                            u,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    t,
                                                                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, d], storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "UserVerification",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "verification",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
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
                                                                                        type: "ApiJob",
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
                                                                storageKey: null,
                                                            },
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
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "HeGR5lrUJh1N7bMsMlHQHg", metadata: {}, name: "JobBookmarksListContainerQuery", operationKind: "query", text: null },
                };
            c.hash = "24c236e39ef6f8567817bc588787b248";
            const g = c;
        },
        255875: (e, l, a) => {
            a.d(l, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                o,
                d,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "JobRecommendationSettingsContainerQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "remote_work_allowed", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "recommendations_enabled", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "notifications_enabled", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null }), (o = { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "job_titles", plural: !0, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "job_title", storageKey: null }], storageKey: null }), { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "locations", plural: !0, selections: [u, (d = { alias: null, args: null, kind: "ScalarField", name: "location_id", storageKey: null }), { alias: null, args: null, concreteType: "ApiLocation", kind: "LinkedField", name: "location", plural: !1, selections: [(c = { alias: null, args: null, concreteType: "LocationCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "display_name", storageKey: null }], storageKey: null })], storageKey: null }], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }],
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
                        name: "JobRecommendationSettingsContainerQuery",
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [i, s, r, t, o, { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "locations", plural: !0, selections: [u, d, { alias: null, args: null, concreteType: "ApiLocation", kind: "LinkedField", name: "location", plural: !1, selections: [c, u], storageKey: null }], storageKey: null }], storageKey: null }, u], type: "User", abstractKey: null },
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
                    params: { id: "KyP8Xn6i971KhAlvtt82BA", metadata: {}, name: "JobRecommendationSettingsContainerQuery", operationKind: "query", text: null },
                };
            g.hash = "3d29c264d4bf9d235184f195fe296322";
            const m = g;
        },
        335572: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobRecommendationsContainerQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [{ alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "job_titles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "job_title", storageKey: null }], storageKey: null }], storageKey: null }), { alias: null, args: (s = [{ kind: "Literal", name: "count", value: 1 }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: "job_recommendations_results(count:1)" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "JobRecommendationsContainerQuery",
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
                                                    { kind: "InlineFragment", selections: [i, { alias: null, args: s, concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [r, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: "job_recommendations_results(count:1)" }, t], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "oKpn217qdYoQjnU1HC5SCA", metadata: {}, name: "JobRecommendationsContainerQuery", operationKind: "query", text: null },
                };
            u.hash = "0b6735767ac9ff762d17b55eb87700e0";
            const o = u;
        },
        893211: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                o,
                d,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "count" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "JobRecommendationsListContainerQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "s", value: "f3d8" }]),
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
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (s = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "MatchingProfile",
                                                                kind: "LinkedField",
                                                                name: "matching_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "updated_at", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "job_recommendations_refreshed_at", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "job_titles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "job_title", storageKey: null }], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                            { alias: null, args: (r = [{ kind: "Variable", name: "count", variableName: "count" }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: null },
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
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "JobRecommendationsListContainerQuery",
                        selections: [
                            {
                                alias: null,
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
                                                            {
                                                                alias: null,
                                                                args: r,
                                                                concreteType: "ApiJobResults",
                                                                kind: "LinkedField",
                                                                name: "job_recommendations_results",
                                                                plural: !0,
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
                                                                            u,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "JobCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [o, t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [o, t, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
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
                                                                                                    u,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            t,
                                                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, d], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "UserVerification",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "verification",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
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
                                                                                type: "ApiJob",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    o,
                                                                ],
                                                                storageKey: null,
                                                            },
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
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "sNlxXap-Zl7CMjuH9hVjdw", metadata: {}, name: "JobRecommendationsListContainerQuery", operationKind: "query", text: null },
                };
            c.hash = "a2f9147c015c58ceed84d98f3e96cbdb";
            const g = c;
        },
        377178: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n,
                i,
                s,
                r,
                t,
                u,
                o,
                d,
                c,
                g,
                m,
                y = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "jobId" },
                            { defaultValue: null, kind: "LocalArgument", name: "loggedIn" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "JobScreenQuery",
                        selections: [
                            {
                                alias: "jobData",
                                args: (s = [{ kind: "Variable", name: "rest_id", variableName: "jobId" }, (i = { kind: "Literal", name: "s", value: "f3d8" })]),
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r, (u = { condition: "loggedIn", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null }] }), { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), { args: null, kind: "FragmentSpread", name: "JobScreen_job" }], storageKey: null }, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [r, t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r, t, { args: null, kind: "FragmentSpread", name: "JobSearchListItem_company" }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "JobScreen_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                            { condition: "loggedIn", kind: "Condition", passingValue: !0, selections: [{ alias: "viewer", args: (d = [i]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(c = { kind: "InlineFragment", selections: [r], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "JobScreenQuery",
                        selections: [
                            {
                                alias: "jobData",
                                args: s,
                                concreteType: "ApiJobResults",
                                kind: "LinkedField",
                                name: "job_by_rest_id",
                                plural: !1,
                                selections: [
                                    r,
                                    t,
                                    {
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
                                                    r,
                                                    u,
                                                    { alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "external_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "job_description", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "job_function", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "job_page_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "seniority_level", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [r, t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [r, t, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(m = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
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
                                                                            t,
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [m, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "ApiUser",
                                                                                kind: "LinkedField",
                                                                                name: "legacy",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserEntities",
                                                                                        kind: "LinkedField",
                                                                                        name: "entities",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "EntitySet",
                                                                                                kind: "LinkedField",
                                                                                                name: "description",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "UrlsEntity",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "urls",
                                                                                                        plural: !0,
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "display_url", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "expanded_url", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "indices", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
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
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                            { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                                                                            r,
                                                                        ],
                                                                        type: "User",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            r,
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
                                ],
                                storageKey: null,
                            },
                            { condition: "loggedIn", kind: "Condition", passingValue: !0, selections: [{ alias: "viewer", args: d, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, c], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"f3d8")' }] },
                        ],
                    },
                    params: { id: "8uZH_OBKTFNIMzTJaV5lbQ", metadata: {}, name: "JobScreenQuery", operationKind: "query", text: null },
                };
            y.hash = "d125bf2d2767c4d27ed19cdf4b6b3bf7";
            const k = y;
        },
        455506: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobScreen_job",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "external_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "featured", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_function", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "job_page_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "posted_at", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "seniority_level", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "short_description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "team", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                ],
                type: "JobCore",
                abstractKey: null,
                hash: "c3b3abf5f3c76f7c6541e067ba18a9ae",
            };
            const i = n;
        },
        962155: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobScreen_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
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
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                            {
                                alias: null,
                                args: null,
                                concreteType: "UserEntities",
                                kind: "LinkedField",
                                name: "entities",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineDataFragmentSpread",
                                        name: "parseUserEntities_userEntities",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "EntitySet",
                                                kind: "LinkedField",
                                                name: "description",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UrlsEntity",
                                                        kind: "LinkedField",
                                                        name: "urls",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "display_url", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "expanded_url", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "indices", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        args: null,
                                        argumentDefinitions: [],
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "b50a642fa83499eebc61be420393b0ec",
            };
            const i = n;
        },
        230747: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSearchList_jobsSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiJobResults",
                        kind: "LinkedField",
                        name: "items_results",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "JobSearchSlice",
                abstractKey: null,
                hash: "13f40ee6aa2800503f9653f3cac5215c",
            };
            const i = n;
        },
        175967: (e, l, a) => {
            a.d(l, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                o,
                d,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "count" },
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                            { defaultValue: null, kind: "LocalArgument", name: "searchParams" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "JobSearchQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: "job_search",
                                args: [(i = { kind: "Literal", name: "s", value: "f3d8" }), (s = { kind: "Variable", name: "search_params", variableName: "searchParams" })],
                                concreteType: "JobSearchSlice",
                                kind: "LinkedField",
                                name: "__JobSearchQueryScreen_job_search_slice_slice",
                                plural: !1,
                                selections: [
                                    { args: null, kind: "FragmentSpread", name: "JobSearchList_jobsSlice" },
                                    { alias: null, args: null, concreteType: "ApiJobResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null },
                                    (u = {
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
                        name: "JobSearchQueryScreenJobsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (o = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, i, s]),
                                concreteType: "JobSearchSlice",
                                kind: "LinkedField",
                                name: "job_search",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiJobResults",
                                        kind: "LinkedField",
                                        name: "items_results",
                                        plural: !0,
                                        selections: [
                                            r,
                                            t,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            r,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "JobCore",
                                                                kind: "LinkedField",
                                                                name: "core",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [r, t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [d, { kind: "InlineFragment", selections: [r, t, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
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
                                                                            d,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    t,
                                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, c], storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserVerification",
                                                                                        kind: "LinkedField",
                                                                                        name: "verification",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                    r,
                                                                                ],
                                                                                type: "User",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
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
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: o, filters: ["search_params", "s"], handle: "slice", key: "JobSearchQueryScreen_job_search_slice", kind: "LinkedHandle", name: "job_search", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                        ],
                    },
                    params: { id: "w6VgeLQLBKmi9brKZz_QNA", metadata: { sliceInfoPath: ["job_search", "slice_info"] }, name: "JobSearchQueryScreenJobsQuery", operationKind: "query", text: null },
                };
            g.hash = "a2ffaaeb36509d6abe442707e15770fc";
            const m = g;
        },
        36879: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "query" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "LocationSelectorQuery",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "query", variableName: "query" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "LocationTypeAheadItem",
                                kind: "LinkedField",
                                name: "location_type_ahead",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "display_name", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "location_id", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "LocationSelectorQuery", selections: i },
                    params: { id: "hbib0bN-dlHHvUhiy3YVyg", metadata: {}, name: "LocationSelectorQuery", operationKind: "query", text: null },
                };
            s.hash = "0c96137d33dbd43edd62fadf5964f7b1";
            const r = s;
        },
        780038: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "jobTitle" },
                            { defaultValue: null, kind: "LocalArgument", name: "locationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "RecommendationCtaCreateMatchingCriteriaMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "job_title", variableName: "jobTitle" },
                                    { kind: "Variable", name: "location_id", variableName: "locationId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateMatchingCriteriaResult",
                                kind: "LinkedField",
                                name: "create_matching_criteria",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "RecommendationCtaCreateMatchingCriteriaMutation", selections: i },
                    params: { id: "503PTeh6jFLXHFQX52kIkA", metadata: {}, name: "RecommendationCtaCreateMatchingCriteriaMutation", operationKind: "mutation", text: null },
                };
            s.hash = "43ddec86fc7e1d11f32f358d65a40b77";
            const r = s;
        },
        884038: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "RecommendationCtaQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
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
                                                                        (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                        (s = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "MatchingProfile",
                                                                            kind: "LinkedField",
                                                                            name: "matching_profile",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null },
                                                                                { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "job_titles", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "job_title", storageKey: null }], storageKey: null },
                                                                                { alias: null, args: null, concreteType: "MatchingCriteria", kind: "LinkedField", name: "locations", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "location_id", storageKey: null }], storageKey: null },
                                                                                { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
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
                        name: "RecommendationCtaQuery",
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
                                                    { kind: "InlineFragment", selections: [i, s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
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
                    params: { id: "uAE1GtTGpXxwXOE_sM7HmA", metadata: {}, name: "RecommendationCtaQuery", operationKind: "query", text: null },
                };
            t.hash = "d7264b1acc3250cbc9528b91abfabcb9";
            const u = t;
        },
        729002: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { kind: "InlineDataFragment", name: "parseUserEntities_userEntities", hash: "16101b38cee4e401a6aa44e1c860d74f" };
            const i = n;
        },
        594695: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "consented" }), (i = { defaultValue: null, kind: "LocalArgument", name: "matchingCriteria" }), (s = { defaultValue: null, kind: "LocalArgument", name: "recommendationsEnabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "remoteWorkAllowed" }), (t = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePutMatchingProfileMutation",
                        selections: (u = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "consented", variableName: "consented" },
                                    { kind: "Variable", name: "matching_criteria", variableName: "matchingCriteria" },
                                    { kind: "Variable", name: "recommendations_enabled", variableName: "recommendationsEnabled" },
                                    { kind: "Variable", name: "remote_work_allowed", variableName: "remoteWorkAllowed" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "PutMatchingProfileResult",
                                kind: "LinkedField",
                                name: "put_matching_profile",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, n, s, r, i], kind: "Operation", name: "usePutMatchingProfileMutation", selections: u },
                    params: { id: "2jaLJJQhearTWZhqu89gBQ", metadata: {}, name: "usePutMatchingProfileMutation", operationKind: "mutation", text: null },
                };
            o.hash = "b23a8c052c25cec3489865df8f18d46d";
            const d = o;
        },
        488248: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRefreshJobRecommendationsMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "RefreshJobRecommendationsResult",
                                kind: "LinkedField",
                                name: "refresh_job_recommendations",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "recommendation_count", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRefreshJobRecommendationsMutation", selections: i },
                    params: { id: "NjDhjn_53KnOmYAcoyxqew", metadata: {}, name: "useRefreshJobRecommendationsMutation", operationKind: "mutation", text: null },
                };
            s.hash = "492b79a53d8f9fbe4f7ba82e23dbab65";
            const r = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.JobSearch-2e365fe7.54b03bea.js.map

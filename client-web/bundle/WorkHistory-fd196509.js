"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-fd196509"],
    {
        109659: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d,
                c,
                m = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "domain" }), (i = { defaultValue: null, kind: "LocalArgument", name: "name" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "CompanyProfileFormCreateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "domain", variableName: "domain" },
                                    { kind: "Variable", name: "name", variableName: "name" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "create_company_profile_result",
                                        plural: !1,
                                        selections: [
                                            { kind: "InlineFragment", selections: [(s = { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "CompanyProfileForm_companyProfile" }], storageKey: null })], type: "CreateSuccess", abstractKey: null },
                                            { kind: "InlineFragment", selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }), s], type: "CreateFailure", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, n],
                        kind: "Operation",
                        name: "CompanyProfileFormCreateMutation",
                        selections: [
                            {
                                alias: null,
                                args: t,
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [
                                    r,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "create_company_profile_result",
                                        plural: !1,
                                        selections: [
                                            (o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    (c = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiCompanyProfileResults",
                                                        kind: "LinkedField",
                                                        name: "company_profile_results",
                                                        plural: !1,
                                                        selections: [
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    o,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "CompanyProfileCore",
                                                                                kind: "LinkedField",
                                                                                name: "core",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "domain", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            d,
                                                                        ],
                                                                        type: "ApiCompanyProfile",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                ],
                                                type: "CreateSuccess",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [u, c], type: "CreateFailure", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "2_4isUYG9NJ4muYorNDMrg", metadata: {}, name: "CompanyProfileFormCreateMutation", operationKind: "mutation", text: null },
                };
            m.hash = "6137efb6ff95ddae937076d3cff8b6d5";
            const g = m;
        },
        224484: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CompanyProfileForm_companyProfile",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
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
                                    { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "CompanyProfileCore",
                                        kind: "LinkedField",
                                        name: "core",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "domain", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                type: "ApiCompanyProfile",
                                abstractKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ApiCompanyProfileResults",
                abstractKey: null,
                hash: "25b71c557ec483a0b2ecfd0d0dd33043",
            };
            const i = n;
        },
        264964: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                i,
                t,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "name" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CompanyProfileSelectorCreateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "name", variableName: "name" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }), { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(u = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }), (o = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }],
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
                        name: "CompanyProfileSelectorCreateMutation",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [
                                    t,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiCompanyProfileResults",
                                        kind: "LinkedField",
                                        name: "company_profile_results",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [u, o, r], type: "ApiCompanyProfile", abstractKey: null },
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
                    },
                    params: { id: "EkqtXww_c-xjb6sWf0APmg", metadata: {}, name: "CompanyProfileSelectorCreateMutation", operationKind: "mutation", text: null },
                };
            d.hash = "d29855639c6a5d9dff7a6c6b169a4bc2";
            const c = d;
        },
        617277: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "query" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CompanyProfileSelectorQuery",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "query", variableName: "query" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "ApiCompanyProfile",
                                kind: "LinkedField",
                                name: "company_profile_type_ahead",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                    { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "CompanyProfileSelectorQuery", selections: i },
                    params: { id: "m7SaYT5uYsHuOiRCJj8kTw", metadata: {}, name: "CompanyProfileSelectorQuery", operationKind: "query", text: null },
                };
            t.hash = "7ed6bbdc1ca5119eb09bd0c023d4519c";
            const r = t;
        },
        948632: (e, l, a) => {
            a.d(l, { Z: () => v });
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
                k,
                y,
                p,
                F,
                K,
                f,
                _,
                b,
                L,
                S,
                C,
                T,
                I,
                P = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "blockId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "EditBlockBlockQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: (r = [{ kind: "Variable", name: "block_id", variableName: "blockId" }]),
                                                                concreteType: "ApiProfileBlockResults",
                                                                kind: "LinkedField",
                                                                name: "profile_block_results",
                                                                plural: !1,
                                                                selections: [
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (u = { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null }),
                                                                    {
                                                                        kind: "InlineDataFragmentSpread",
                                                                        name: "useFetchProfileSections_block",
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
                                                                                            s,
                                                                                            (o = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null }),
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "content",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { kind: "InlineDataFragmentSpread", name: "useFetchProfileSections_richtext", selections: [(d = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null })], args: null, argumentDefinitions: [] },
                                                                                                    {
                                                                                                        kind: "InlineDataFragmentSpread",
                                                                                                        name: "useFetchProfileSections_workHistory",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null }),
                                                                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null }),
                                                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, (g = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }), (k = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                                                    (y = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null }),
                                                                                                                    (F = { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null }),
                                                                                                                    (K = { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null }),
                                                                                                                    (f = { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null }),
                                                                                                                    (_ = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                                                    (b = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                                                    (L = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                                                    (S = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [s, t], storageKey: null }),
                                                                                                                    (C = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                                                                ],
                                                                                                                type: "WorkExperienceBlockData",
                                                                                                                abstractKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        args: null,
                                                                                                        argumentDefinitions: [],
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        type: "ApiProfileBlock",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            (T = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                                                        ],
                                                                        args: null,
                                                                        argumentDefinitions: [],
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            T,
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
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "EditBlockBlockQuery", selections: [{ alias: null, args: i, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(I = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [t, { alias: null, args: r, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "profile_block_results", plural: !1, selections: [s, u, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [I, { kind: "InlineFragment", selections: [s, o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [I, d, { kind: "InlineFragment", selections: [c, m, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [I, { kind: "InlineFragment", selections: [t, g, k, s], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, y, p, F, K, f, _, b, L, S, C], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, T], storageKey: null }, T, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "Thkreb9_48SocE6P2hP4yQ", metadata: {}, name: "EditBlockBlockQuery", operationKind: "query", text: null },
                };
            P.hash = "f6c150aed3ab811dcb1473f0e4b9370f";
            const v = P;
        },
        36879: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
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
            t.hash = "0c96137d33dbd43edd62fadf5964f7b1";
            const r = t;
        },
        163015: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "sectionId" },
                            { defaultValue: null, kind: "LocalArgument", name: "visibility" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "VisibilityDropdown_updateSectionVisibilityMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "visibility", variableName: "visibility" },
                                ],
                                kind: "ScalarField",
                                name: "update_expanded_profile_section_visibility",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "VisibilityDropdown_updateSectionVisibilityMutation", selections: i },
                    params: { id: "8ICa6FMhnv00iHBjpoXdAQ", metadata: {}, name: "VisibilityDropdown_updateSectionVisibilityMutation", operationKind: "mutation", text: null },
                };
            t.hash = "8915833d692c94a47b0fcb2939731579";
            const r = t;
        },
        681488: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                t,
                r,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (i = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateRichtextBlockMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "section_type", variableName: "sectionType" },
                                    { kind: "Literal", name: "surface", value: "ExtendedProfile" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "CreateRichtextProfileBlockResult",
                                kind: "LinkedField",
                                name: "create_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, r, i, t], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            u.hash = "5369f2707d565366752d07f461b21f70";
            const o = u;
        },
        289992: (e, l, a) => {
            a.d(l, { Z: () => P });
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
                k,
                y,
                p,
                F,
                K,
                f,
                _,
                b,
                L,
                S,
                C,
                T,
                I = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "data" },
                            { defaultValue: null, kind: "LocalArgument", name: "sectionId" },
                            { defaultValue: null, kind: "LocalArgument", name: "sectionType" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateWorkExperienceItemMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "data", variableName: "data" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "section_id", variableName: "sectionId" },
                                    { kind: "Variable", name: "section_type", variableName: "sectionType" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ]),
                                concreteType: "CreateWorkExperienceItemOutput",
                                kind: "LinkedField",
                                name: "create_work_experience_item",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiProfileBlockResults",
                                        kind: "LinkedField",
                                        name: "block_results",
                                        plural: !1,
                                        selections: [
                                            (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            (r = { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null }),
                                            {
                                                kind: "InlineDataFragmentSpread",
                                                name: "useFetchProfileSections_block",
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
                                                                    t,
                                                                    (s = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null }),
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "content",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { kind: "InlineDataFragmentSpread", name: "useFetchProfileSections_richtext", selections: [(u = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null })], args: null, argumentDefinitions: [] },
                                                                            {
                                                                                kind: "InlineDataFragmentSpread",
                                                                                name: "useFetchProfileSections_workHistory",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null }),
                                                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null }),
                                                                                            { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (m = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }), (g = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                            (k = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null }),
                                                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null }),
                                                                                            (F = { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null }),
                                                                                            (K = { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null }),
                                                                                            (f = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                            (_ = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                            (b = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                            (L = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [t, c], storageKey: null }),
                                                                                            (S = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                                        ],
                                                                                        type: "WorkExperienceBlockData",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                args: null,
                                                                                argumentDefinitions: [],
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                type: "ApiProfileBlock",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (C = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useCreateWorkExperienceItemMutation", selections: [{ alias: null, args: i, concreteType: "CreateWorkExperienceItemOutput", kind: "LinkedField", name: "create_work_experience_item", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "block_results", plural: !1, selections: [t, r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [t, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [T, u, { kind: "InlineFragment", selections: [o, d, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [T, { kind: "InlineFragment", selections: [c, m, g, t], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, k, y, p, F, K, f, _, b, L, S], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, C], storageKey: null }], storageKey: null }] },
                    params: { id: "stFQBhDvJtDCK778IAmGmQ", metadata: {}, name: "useCreateWorkExperienceItemMutation", operationKind: "mutation", text: null },
                };
            I.hash = "80ab6fa8a1f89e4fb6c3e4b82c22a1fd";
            const P = I;
        },
        163956: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Variable", name: "richtext_value", variableName: "richtextValue" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "update_richtext_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: i },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            t.hash = "96b616d665932ca695bc2d75fe26a33c";
            const r = t;
        },
        727689: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "blockId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "data" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateWorkExperienceItemMutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Variable", name: "data", variableName: "data" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                kind: "ScalarField",
                                name: "update_work_experience_item",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useUpdateWorkExperienceItemMutation", selections: t },
                    params: { id: "40Qdk77H0THXOiSr9IGqiw", metadata: {}, name: "useUpdateWorkExperienceItemMutation", operationKind: "mutation", text: null },
                };
            r.hash = "cbd57835d59bebdc117333e99bf41a7f";
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-fd196509.73d84daa.js.map

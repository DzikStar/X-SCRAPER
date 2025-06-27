"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-a2dee9c7"],
    {
        948632: (e, l, a) => {
            a.d(l, { Z: () => x });
            var n,
                t,
                i,
                r,
                s,
                o,
                u,
                c,
                d,
                m,
                p,
                g,
                y,
                k,
                f,
                _,
                F,
                b,
                C,
                K,
                h,
                S,
                T,
                L,
                I = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "blockId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "EditBlockBlockQuery",
                        selections: [
                            {
                                alias: null,
                                args: (t = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: (r = [{ kind: "Variable", name: "block_id", variableName: "blockId" }]),
                                                                concreteType: "ApiProfileBlockResults",
                                                                kind: "LinkedField",
                                                                name: "profile_block_results",
                                                                plural: !1,
                                                                selections: [
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null }),
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
                                                                                            (u = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null }),
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "content",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { kind: "InlineDataFragmentSpread", name: "useFetchProfileSections_richtext", selections: [(c = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null })], args: null, argumentDefinitions: [] },
                                                                                                    {
                                                                                                        kind: "InlineDataFragmentSpread",
                                                                                                        name: "useFetchProfileSections_workHistory",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null }),
                                                                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null }),
                                                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [i, (p = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }), (g = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                                                    (y = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                                                                                    (k = { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null }),
                                                                                                                    (f = { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null }),
                                                                                                                    (_ = { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null }),
                                                                                                                    (F = { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null }),
                                                                                                                    (b = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                                                    (C = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                                                    (K = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                                                    (h = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [s, i], storageKey: null }),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "EditBlockBlockQuery", selections: [{ alias: null, args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(L = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, { alias: null, args: r, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "profile_block_results", plural: !1, selections: [s, o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [L, { kind: "InlineFragment", selections: [s, u, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [L, c, { kind: "InlineFragment", selections: [d, m, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [L, { kind: "InlineFragment", selections: [i, p, g, s], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, y, k, f, _, F, b, C, K, h, S], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, T], storageKey: null }, T, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "Thkreb9_48SocE6P2hP4yQ", metadata: {}, name: "EditBlockBlockQuery", operationKind: "query", text: null },
                };
            I.hash = "f6c150aed3ab811dcb1473f0e4b9370f";
            const x = I;
        },
        36879: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                t,
                i = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "query" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "LocationSelectorQuery",
                        selections: (t = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "LocationSelectorQuery", selections: t },
                    params: { id: "hbib0bN-dlHHvUhiy3YVyg", metadata: {}, name: "LocationSelectorQuery", operationKind: "query", text: null },
                };
            i.hash = "0c96137d33dbd43edd62fadf5964f7b1";
            const r = i;
        },
        681488: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                t,
                i,
                r,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "richtextValue" }), (t = { defaultValue: null, kind: "LocalArgument", name: "sectionId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "sectionType" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                    operation: { argumentDefinitions: [n, r, t, i], kind: "Operation", name: "useCreateRichtextBlockMutation", selections: s },
                    params: { id: "lDE6HUnPgNvp1_8bcCM3-w", metadata: {}, name: "useCreateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            o.hash = "5369f2707d565366752d07f461b21f70";
            const u = o;
        },
        289992: (e, l, a) => {
            a.d(l, { Z: () => I });
            var n,
                t,
                i,
                r,
                s,
                o,
                u,
                c,
                d,
                m,
                p,
                g,
                y,
                k,
                f,
                _,
                F,
                b,
                C,
                K,
                h,
                S,
                T,
                L = {
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
                                args: (t = [
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
                                            (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                                                    i,
                                                                    (s = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null }),
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "content",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { kind: "InlineDataFragmentSpread", name: "useFetchProfileSections_richtext", selections: [(o = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null })], args: null, argumentDefinitions: [] },
                                                                            {
                                                                                kind: "InlineDataFragmentSpread",
                                                                                name: "useFetchProfileSections_workHistory",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null }),
                                                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null }),
                                                                                            { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (m = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }), (p = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null }),
                                                                                            (k = { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null }),
                                                                                            (f = { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null }),
                                                                                            (_ = { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null }),
                                                                                            (F = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                            (b = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                            (C = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                            (K = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [i, d], storageKey: null }),
                                                                                            (h = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
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
                                                    (S = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useCreateWorkExperienceItemMutation", selections: [{ alias: null, args: t, concreteType: "CreateWorkExperienceItemOutput", kind: "LinkedField", name: "create_work_experience_item", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "block_results", plural: !1, selections: [i, r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [T, o, { kind: "InlineFragment", selections: [u, c, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [T, { kind: "InlineFragment", selections: [d, m, p, i], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, g, y, k, f, _, F, b, C, K, h], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, S], storageKey: null }], storageKey: null }] },
                    params: { id: "stFQBhDvJtDCK778IAmGmQ", metadata: {}, name: "useCreateWorkExperienceItemMutation", operationKind: "mutation", text: null },
                };
            L.hash = "80ab6fa8a1f89e4fb6c3e4b82c22a1fd";
            const I = L;
        },
        163956: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                t,
                i = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "richtextValue" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateRichtextBlockMutation",
                        selections: (t = [
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useUpdateRichtextBlockMutation", selections: t },
                    params: { id: "oDmWQK_udVhiqH89Lbd5LA", metadata: {}, name: "useUpdateRichtextBlockMutation", operationKind: "mutation", text: null },
                };
            i.hash = "96b616d665932ca695bc2d75fe26a33c";
            const r = i;
        },
        727689: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                t,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "blockId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "data" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdateWorkExperienceItemMutation",
                        selections: (i = [
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
                    operation: { argumentDefinitions: [t, n], kind: "Operation", name: "useUpdateWorkExperienceItemMutation", selections: i },
                    params: { id: "40Qdk77H0THXOiSr9IGqiw", metadata: {}, name: "useUpdateWorkExperienceItemMutation", operationKind: "mutation", text: null },
                };
            r.hash = "cbd57835d59bebdc117333e99bf41a7f";
            const s = r;
        },
        601289: (e, l, a) => {
            a.d(l, { Z: () => de });
            var n,
                t,
                i,
                r,
                s,
                o,
                u,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "name" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CompanyProfileSelectorCreateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "name", variableName: "name" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }), { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(o = { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }), (u = { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null })], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }],
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
                                args: t,
                                concreteType: "CreateCompanyProfileOutput",
                                kind: "LinkedField",
                                name: "create_company_profile",
                                plural: !1,
                                selections: [
                                    i,
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
                                                    { kind: "InlineFragment", selections: [o, u, r], type: "ApiCompanyProfile", abstractKey: null },
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
            c.hash = "d29855639c6a5d9dff7a6c6b169a4bc2";
            const d = c;
            var m = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "query" }],
                    l = [
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
                    ];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "CompanyProfileSelectorQuery", selections: l, type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "CompanyProfileSelectorQuery", selections: l }, params: { id: "m7SaYT5uYsHuOiRCJj8kTw", metadata: {}, name: "CompanyProfileSelectorQuery", operationKind: "query", text: null } };
            })();
            m.hash = "7ed6bbdc1ca5119eb09bd0c023d4519c";
            const p = m;
            var g = a(202784),
                y = a(325686),
                k = a(10622),
                f = a.n(k),
                _ = (a(585488), a(351743)),
                F = a.n(_),
                b = a(437429),
                C = a.n(b),
                K = a(167630),
                h = a(731708),
                S = a(386802),
                T = a(530732),
                L = a(823161),
                I = a(855488),
                x = a(392237),
                E = a(111677),
                v = a.n(E),
                P = a(379327),
                D = a(666536),
                R = a(125568),
                A = a(874088),
                w = a(952793),
                Z = a(339110),
                V = a(524110),
                M = (function () {
                    var e = { defaultValue: null, kind: "LocalArgument", name: "domain" },
                        l = { defaultValue: null, kind: "LocalArgument", name: "name" },
                        a = [
                            { kind: "Variable", name: "domain", variableName: "domain" },
                            { kind: "Variable", name: "name", variableName: "name" },
                            { kind: "Literal", name: "s", value: "4721" },
                        ],
                        n = { alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null },
                        t = { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "CompanyProfileForm_companyProfile" }], storageKey: null },
                        i = { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                        r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                        s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                        o = {
                            alias: null,
                            args: null,
                            concreteType: "ApiCompanyProfileResults",
                            kind: "LinkedField",
                            name: "company_profile_results",
                            plural: !1,
                            selections: [
                                s,
                                { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
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
                                                s,
                                            ],
                                            type: "ApiCompanyProfile",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        };
                    return {
                        fragment: {
                            argumentDefinitions: [e, l],
                            kind: "Fragment",
                            metadata: null,
                            name: "CompanyProfileFormCreateMutation",
                            selections: [
                                {
                                    alias: null,
                                    args: a,
                                    concreteType: "CreateCompanyProfileOutput",
                                    kind: "LinkedField",
                                    name: "create_company_profile",
                                    plural: !1,
                                    selections: [
                                        n,
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "create_company_profile_result",
                                            plural: !1,
                                            selections: [
                                                { kind: "InlineFragment", selections: [t], type: "CreateSuccess", abstractKey: null },
                                                { kind: "InlineFragment", selections: [i, t], type: "CreateFailure", abstractKey: null },
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
                        operation: { argumentDefinitions: [l, e], kind: "Operation", name: "CompanyProfileFormCreateMutation", selections: [{ alias: null, args: a, concreteType: "CreateCompanyProfileOutput", kind: "LinkedField", name: "create_company_profile", plural: !1, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "create_company_profile_result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [o], type: "CreateSuccess", abstractKey: null }, { kind: "InlineFragment", selections: [i, o], type: "CreateFailure", abstractKey: null }], storageKey: null }], storageKey: null }] },
                        params: { id: "2_4isUYG9NJ4muYorNDMrg", metadata: {}, name: "CompanyProfileFormCreateMutation", operationKind: "mutation", text: null },
                    };
                })();
            M.hash = "6137efb6ff95ddae937076d3cff8b6d5";
            const O = M;
            var B = {
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
            const W = B;
            var q = a(277660),
                N = a.n(q),
                U = a(154003),
                z = a(665285),
                Q = a(757700);
            const H = W,
                j = O,
                G = v().caa46e54,
                J = v().e893fe6e,
                X = v().j1c09ca4,
                Y = v().i2209530,
                $ = v().cfd2f35e,
                ee = v().b679ff6a,
                le = "DuplicateDomain",
                ae = ({ companyProfile: e, onSelect: l }) => {
                    const a = N()(H, e),
                        n = a?.id ? a?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        t = g.useCallback(() => {
                            l(a.rest_id, a.result.core.name, n);
                        }, [n, a.rest_id, a.result.core.name, l]);
                    return g.createElement(
                        h.ZP,
                        { size: "subtext1", style: ne.suggestion },
                        g.createElement(
                            v().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            g.createElement(
                                y.Z,
                                { style: ne.suggestion },
                                g.createElement(y.Z, { style: ne.logo }, g.createElement(L.default, { shape: "square", size: "medium", uri: n })),
                                g.createElement(T.Z, { interactiveStyles: null, onClick: t }, ({ isHovered: e }) => g.createElement(h.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? x.default.theme.colors.primary : x.default.theme.colors.text }, weight: "bold" }, a.result.core.name)),
                            ),
                        ),
                    );
                },
                ne = x.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                te = ({ companyName: e, onCancel: l, onSelect: a, onSuccess: n }) => {
                    const [t, i] = g.useState(!1),
                        [r, s] = g.useState(null),
                        [o, u] = g.useState(""),
                        [c] = F()(j),
                        [d, m] = g.useState(null),
                        p = g.useCallback(() => {
                            i(!0),
                                c({
                                    variables: { name: e, domain: r },
                                    onCompleted: (l) => {
                                        const t = l.create_company_profile?.create_company_profile_result;
                                        l.create_company_profile?.success ? (i(!1), a(t.company_profile_results.rest_id, e, null), n()) : t?.error_code === le && (i(!1), u(le), t.company_profile_results && m(t.company_profile_results));
                                    },
                                });
                        }, [e, c, r, a, n]),
                        k = g.useCallback(() => {
                            !r || (0, z.Z)(r, null, !1) ? p() : u(ee);
                        }, [r, p]),
                        f = g.useCallback(() => {
                            s(null), l();
                        }, [l]);
                    return g.createElement(
                        Q.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        g.createElement(
                            y.Z,
                            { style: ne.root },
                            g.createElement(y.Z, { style: ne.header }, g.createElement(h.ZP, { size: "headline2", weight: "bold" }, J)),
                            g.createElement(I.Z, { editable: !1, label: G, name: "company_name", onChange: () => {}, value: e }),
                            g.createElement(I.Z, {
                                editable: !t,
                                errorText: o !== le ? o : "",
                                helperText: (() => {
                                    if (o === le && d)
                                        return g.createElement(ae, {
                                            companyProfile: d,
                                            onSelect: (e, l, t) => {
                                                a(e, l, t), n();
                                            },
                                        });
                                })(),
                                invalid: !!o,
                                label: X,
                                name: "domain",
                                onChange: (e) => s(e.target.value),
                                value: r || "",
                            }),
                            g.createElement(y.Z, { style: ne.actions }, g.createElement(U.ZP, { disabled: t, onClick: f, size: "large", type: "primaryOutlined" }, $), g.createElement(U.ZP, { disabled: t, onClick: k, size: "large", type: "brandFilled" }, Y)),
                        ),
                    );
                },
                ie = p,
                re = d,
                se = v().eedfd35c,
                oe = ({ hasSaved: e, isSaving: l }) => {
                    const [a, n] = g.useState(!1);
                    return (
                        g.useEffect(() => {
                            !l &&
                                e &&
                                (n(!0),
                                setTimeout(() => {
                                    n(!1);
                                }, 2e3));
                        }, [l, e]),
                        l || a ? g.createElement(y.Z, null, l && g.createElement(K.Z, { size: "small" }), a && g.createElement(h.ZP, { style: ce.success }, "Saved")) : null
                    );
                },
                ue = ({ errorText: e, onChange: l, onEnter: a, onSelect: n, selectedValue: t, value: i }) => {
                    const { isModal: r } = g.useContext(S.Z),
                        s = g.useRef(null),
                        o = C()(),
                        [u, c] = g.useState(!1),
                        [d, m] = g.useState(!1),
                        [p, k] = g.useState(!1),
                        [_, b] = g.useState(!1),
                        [K, x] = g.useState(null),
                        [E, M] = g.useState([]),
                        [O, B] = g.useState(!1),
                        W = (0, R.t)(),
                        [q, N] = F()(re),
                        U = (0, w.hC)("xprofile_work_history_domain_enabled"),
                        z = g.useMemo(
                            () =>
                                (0, D.Z)((e) => {
                                    W() &&
                                        e.length >= 1 &&
                                        (B(!0),
                                        ((e) => {
                                            f()(o, ie, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    M(e?.company_profile_type_ahead || []), B(!1);
                                                });
                                        })(e));
                                }, 500),
                            [o, W],
                        ),
                        Q = g.useCallback(
                            (e) => {
                                c(!0), l(e.target.value), z(e.target.value);
                            },
                            [z, l],
                        ),
                        H = g.useCallback(
                            (e, l) => {
                                s?.current?.focus(), n(e.id, e.name, e.data?.logoUrl), c(!1);
                            },
                            [n],
                        ),
                        j = g.useCallback((e) => {
                            c(!1), x(e), b(!0);
                        }, []),
                        G = g.useCallback(
                            (e) => {
                                U
                                    ? j(e)
                                    : (k(!1),
                                      m(!0),
                                      q({
                                          variables: { name: e },
                                          onCompleted: (l) => {
                                              l.create_company_profile?.success && (m(!1), k(!0), n(l.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      c(!1));
                            },
                            [U, q, j, n],
                        ),
                        J = g.useCallback(() => {
                            c(!1), b(!1), x(null), l("");
                        }, [l]),
                        X = g.useCallback(() => {
                            c(!1), b(!1), x(null);
                        }, []),
                        Y = g.useCallback(
                            (e) => {
                                const l = i ? E?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: i } })) : [];
                                return g.createElement(g.Fragment, null, u ? g.createElement(V.Z, { isLoading: O, items: l, onItemClick: H, ref: e.ref, renderFooter: () => (i ? g.createElement(T.Z, { onClick: () => G(i), style: ce.createRow, testID: "create-company-profile-btn" }, g.createElement(y.Z, { style: ce.createAvatar }, g.createElement(P.default, null)), g.createElement(h.ZP, { size: "subtext1" }, g.createElement(v().I18NFormatMessage, { $i18n: "h8b54e37" }, g.createElement(h.ZP, { weight: "bold" }, i)))) : null), shouldAlwaysRender: i?.length > 0, source: Z._4.CompanyProfile, style: [e.style, ce.dropdown] }) : null);
                            },
                            [G, H, E, O, u, i],
                        ),
                        $ = g.useCallback(
                            (l) => {
                                const { onFocus: n } = l;
                                return g.createElement(I.Z, {
                                    autoComplete: "off",
                                    endContent: U ? null : g.createElement(oe, { hasSaved: p, isSaving: d || N }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: se,
                                    name: "company-profile-selector-input",
                                    onChange: Q,
                                    onFocus: n,
                                    onKeyPress: a,
                                    ref: s,
                                    startContent: (() => {
                                        if ("" === i) return null;
                                        const e = t?.id && i === t?.name ? t?.data?.logoUrl : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
                                        return t?.id ? g.createElement(y.Z, { style: ce.logo }, g.createElement(L.default, { shape: "square", size: "medium", uri: e })) : void 0;
                                    })(),
                                    style: ce.inputStyle,
                                    testID: "company-profile-selector-input",
                                    value: i,
                                });
                            },
                            [U, e, Q, p, d, N, a, t?.data?.logoUrl, t?.id, t?.name, i],
                        );
                    return g.createElement(y.Z, { style: ce.input }, g.createElement(A.default, { isInModal: r, renderCustomDropdown: Y, renderCustomInput: $, rounded: !0, source: Z._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), U && _ && K && g.createElement(te, { companyName: K || "", onCancel: J, onSelect: n, onSuccess: X }));
                },
                ce = x.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                de = g.memo(ue);
        },
        664052: (e, l, a) => {
            a.d(l, { Z: () => C });
            var n = a(202784),
                t = a(301503),
                i = a(325686),
                r = a(925873),
                s = a(989272),
                o = a(891198),
                u = a(731708),
                c = a(977952),
                d = a(297256),
                m = a(524496),
                p = a(392237),
                g = a(111677),
                y = a.n(g),
                k = a(187669),
                f = a(874111);
            const _ = y().c2333081,
                F = (e) => {
                    const l = ((e) => {
                            try {
                                return e ? JSON.parse(e) : void 0;
                            } catch {
                                return;
                            }
                        })(e),
                        a = r.Z.initEditorState(l);
                    return r.Z.convertEmojiToEntities(a);
                },
                b = p.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                C = ({ allowExtendedPasteStyles: e, characterLimit: l, editable: a = !0, editorClass: p, editorStyles: g, initialState: y = "", limitedRichText: C = !1, numberOfLines: K = 10, onChange: h, textSizesOverride: S }) => {
                    const [T, L] = n.useState(F(y));
                    (0, k.q)(() => {
                        g && p && (0, s.fH)(g, p);
                    });
                    const I = n.useMemo(() => T?.getCurrentContent(), [T]),
                        x = n.useCallback(
                            (e) => {
                                const l = r.Z.convertEmojiToEntities(e);
                                L(l), h(l);
                            },
                            [h],
                        ),
                        E = (0, f.c6)(T);
                    let v = E;
                    E > 1 && (v = o.ZP.getFormattedCount(E));
                    const P = n.useMemo(() => {
                            const e = !!l && E > l;
                            return n.createElement(i.Z, null, n.createElement(u.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: b.textCountLabel }, _({ count: v })));
                        }, [E, v, l]),
                        D = n.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: T, element: c.Z, stripPastedStyles: !0 }), [e, T]);
                    return n.createElement(i.Z, null, a ? n.createElement(i.Z, { style: b.richTextWrapper }, n.createElement(d.b, { inputStyle: b.container, isInputFullWidth: !0, limitedRichText: C, numberOfLines: K, onChange: x, richTextInputContext: D, textSizesOverride: S, toolbarRightControl: P })) : n.createElement(n.Fragment, null, I && I.hasText() ? n.createElement(i.Z, { style: b.richTextWrapper }, n.createElement(i.Z, { style: b.readOnlyContainer }, n.createElement(m.Z, { contentState: (0, t.convertToRaw)(I) }))) : null));
                };
        },
        998693: (e, l, a) => {
            a.d(l, { Z: () => h });
            var n = a(36879),
                t = a(202784),
                i = a(10622),
                r = a.n(i),
                s = (a(585488), a(437429)),
                o = a.n(s),
                u = a(386802),
                c = a(855488),
                d = a(392237),
                m = a(111677),
                p = a.n(m),
                g = a(665468),
                y = a(666536),
                k = a(125568),
                f = a(874088),
                _ = a(339110),
                F = a(524110);
            const b = p().jaaa8984,
                C = n.Z,
                K = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                h = ({ onChange: e, onEnter: l, onSelect: a, value: n }) => {
                    const { isModal: i } = t.useContext(u.Z),
                        s = t.useRef(null),
                        d = o()(),
                        [m, p] = t.useState(!1),
                        [h, S] = t.useState([]),
                        [T, L] = t.useState(!1),
                        I = (0, k.t)(),
                        x = t.useMemo(
                            () =>
                                (0, y.Z)((e) => {
                                    I() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              L(!0),
                                              ((e) => {
                                                  r()(d, C, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          S(e?.location_type_ahead || []), L(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, I],
                        ),
                        E = t.useCallback(
                            (l) => {
                                e({ value: l.target.value }), x(l.target.value);
                            },
                            [x, e],
                        ),
                        v = t.useCallback(
                            (e, l) => {
                                s?.current?.focus(), a({ id: e.id, name: e.name }), p(!1);
                            },
                            [a],
                        ),
                        P = t.useCallback(
                            (e) => {
                                const l = h?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return t.createElement(t.Fragment, null, m ? t.createElement(F.Z, { isLoading: T, items: l, onItemClick: v, ref: e.ref, source: _._4.JobLocation, style: e.style }) : null);
                            },
                            [v, h, T, m],
                        ),
                        D = t.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return t.createElement(c.Z, { Icon: g.default, autoComplete: "off", label: b, name: "location-selector-input", onChange: E, onFocus: a, onKeyPress: l, ref: s, style: K.inputStyle, testID: "location-selector-input", value: n });
                            },
                            [E, l, n],
                        );
                    return t.createElement(f.default, { isInModal: i, renderCustomDropdown: P, renderCustomInput: D, rounded: !0, source: _._4.JobLocation, testID: "location-selector", userLimit: 20 });
                };
        },
        313433: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n = a(202784),
                t = a(925873),
                i = a(392237),
                r = a(913670);
            const s = i.default.create((e) => ({ iconGray: { color: e.colors.gray700 } })),
                o = ({ editorState: e, onChange: l }) => {
                    const a = n.useCallback(
                        (a) => {
                            const n = t.Z.insertTextAtCursor(e, a.text);
                            l(n);
                        },
                        [e, l],
                    );
                    return n.createElement(r.Z, { iconStyle: s.iconGray, key: "emoji-picker", onEmojiSelect: a, size: "small", testID: "btn-emoji", type: "primaryText" });
                };
        },
        536790: (e, l, a) => {
            a.d(l, { Z: () => d });
            a(571372), a(136728);
            var n = a(202784),
                t = a(301503),
                i = a(597496),
                r = a(339110),
                s = a(456910),
                o = a(230295),
                u = a(267446);
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { queryContext: void 0, canShowTypeahead: !1 }),
                        (this._genericWrapperRef = n.createRef()),
                        (this.render = () => {
                            const { children: e, composeCommunityId: l, contextText: a, isInline: t, isInlineReply: s, onTypeaheadStateChange: o, source: u } = this.props,
                                { canShowTypeahead: c, queryContext: d } = this.state,
                                m = c && d ? { word: d.word, resultType: d.resultType } : void 0;
                            return n.createElement(i.H1, { composeCommunityId: l, contextText: a, isInline: t, isInlineReply: s, isRichText: !0, onDismiss: this._handleDismiss, onSelectItem: this._handleSelectItem, onTypeaheadStateChange: o, query: m, ref: this._genericWrapperRef, source: u || r._4.Compose }, e(this._handleInputChange));
                        }),
                        (this._getCaret = (e) => e.getSelection().getStartOffset()),
                        (this._getPlaintextFromCurrentBlock = (e) => {
                            const l = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(l).getText();
                        }),
                        (this._handleSelectItem = (e) => {
                            const { onTextUpdated: l } = this.props,
                                { queryContext: a } = this.state;
                            if (a) {
                                const n = (0, u.k)(e, a.resultType);
                                l(this._replaceToken(n, a));
                            }
                            this._setQueryContext(void 0);
                        }),
                        (this._handleInputChange = (e) => {
                            if (!(0, o.T)(e)) throw new Error("RichTextTypeaheadComposeWrapper cannot handle plain text input changes");
                            {
                                const { queryContext: l } = this.state,
                                    a = l && l.word,
                                    n = this._getPlaintextFromCurrentBlock(e),
                                    { end: t, start: i, word: r } = s.si(this._getCaret(e), n),
                                    o = s.bR(r || "", "compose");
                                if (o?.q === a) return;
                                if ((this._genericWrapperRef.current && this._genericWrapperRef.current.resetSelectedItem(), -1 === i)) this._setQueryContext(void 0);
                                else if (o) {
                                    const { q: l, result_type: a } = o;
                                    this._setQueryContext({ word: l, resultType: a, editorState: e, startIndex: i, endIndex: t });
                                } else this._setQueryContext(void 0);
                            }
                        }),
                        (this._setQueryContext = (e) => this.setState({ queryContext: e, canShowTypeahead: !!e })),
                        (this._handleDismiss = () => this.setState({ canShowTypeahead: !1 }));
                }
                _replaceToken(e, l) {
                    const { editorState: a, endIndex: n, startIndex: i } = l,
                        r = a.getSelection().merge({ anchorKey: a.getSelection().getFocusKey(), anchorOffset: i, focusOffset: n }),
                        s = t.Modifier.replaceText(a.getCurrentContent(), r, e),
                        o = t.EditorState.push(a, s, "insert-characters"),
                        u = i + e.length,
                        c = o.getSelection().merge({ anchorOffset: u, focusOffset: u });
                    return t.EditorState.forceSelection(o, c);
                }
            }
            const d = c;
        },
        794057: (e, l, a) => {
            a.d(l, { C0: () => r, DC: () => n, _e: () => i, iN: () => u, kd: () => s, pc: () => t });
            const n = Object.freeze({ MEDIA: "MEDIA", TWEET: "TWEET", MARKDOWN: "MARKDOWN", DIVIDER: "DIVIDER", LATEX: "LATEX" }),
                t = Object.freeze({ IMMUTABLE: "IMMUTABLE", MUTABLE: "MUTABLE" }),
                i = Object.freeze({ GIF: "DraftTweetGif", IMAGE: "DraftTweetImage", VIDEO: "DraftTweetVideo" }),
                r = Object.freeze({ TWITTER_ARTICLES_TAB: "TWITTER_ARTICLES_TAB", TWITTER_ARTICLE_VIEW: "TWITTER_ARTICLE_VIEW", LONGFORM_COMPOSER: "LONGFORM_COMPOSER" }),
                s = { content_state: { blocks: [], entity_map: [] } },
                o = Object.freeze({ DRAFT: "Draft", PUBLISHED: "Published" }),
                u = Object.freeze({ DRAFT: o.DRAFT, PUBLISHED: o.PUBLISHED });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-a2dee9c7.6e6f6c1a.js.map

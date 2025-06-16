"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.WorkHistory-a2dee9c7"],
    {
        948632: (e, l, a) => {
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
                h,
                F,
                b,
                C,
                K,
                S,
                x,
                L,
                T = {
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
                                                                                                                    (h = { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null }),
                                                                                                                    (F = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                                                    (b = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                                                    (C = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                                                    (K = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [s, i], storageKey: null }),
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
                                                                            (x = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                                                        ],
                                                                        args: null,
                                                                        argumentDefinitions: [],
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            x,
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "EditBlockBlockQuery", selections: [{ alias: null, args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(L = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, { alias: null, args: r, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "profile_block_results", plural: !1, selections: [s, o, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [L, { kind: "InlineFragment", selections: [s, u, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [L, c, { kind: "InlineFragment", selections: [d, m, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [L, { kind: "InlineFragment", selections: [i, p, g, s], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, y, k, f, _, h, F, b, C, K, S], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, x], storageKey: null }, x, s], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "Thkreb9_48SocE6P2hP4yQ", metadata: {}, name: "EditBlockBlockQuery", operationKind: "query", text: null },
                };
            T.hash = "f6c150aed3ab811dcb1473f0e4b9370f";
            const I = T;
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
            a.d(l, { Z: () => T });
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
                h,
                F,
                b,
                C,
                K,
                S,
                x,
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
                                                                                            (h = { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null }),
                                                                                            (F = { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null }),
                                                                                            (b = { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null }),
                                                                                            (C = { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [i, d], storageKey: null }),
                                                                                            (K = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useCreateWorkExperienceItemMutation", selections: [{ alias: null, args: t, concreteType: "CreateWorkExperienceItemOutput", kind: "LinkedField", name: "create_work_experience_item", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "block_results", plural: !1, selections: [i, r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(x = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [x, o, { kind: "InlineFragment", selections: [u, c, { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [x, { kind: "InlineFragment", selections: [d, m, p, i], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null }, g, y, k, f, _, h, F, b, C, K], type: "WorkExperienceBlockData", abstractKey: null }], storageKey: null }], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }, S], storageKey: null }], storageKey: null }] },
                    params: { id: "stFQBhDvJtDCK778IAmGmQ", metadata: {}, name: "useCreateWorkExperienceItemMutation", operationKind: "mutation", text: null },
                };
            L.hash = "80ab6fa8a1f89e4fb6c3e4b82c22a1fd";
            const T = L;
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
        625661: (e, l, a) => {
            a.d(l, { ZP: () => m });
            var n = a(202784),
                t = a(614983),
                i = a.n(t),
                r = a(325686),
                s = a(370006),
                o = a(786998),
                u = a(929028),
                c = a(386802);
            function d(e, l, a) {
                return e || (!l && a ? "fixed" : void 0);
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: l } = this.props;
                            i()(l || e, "Either onBackClick must be specified, or history should be supplied"), l ? l(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: l } = this.props;
                            l && l.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: l, centeredLogo: a, fixed: t, hideBackButton: i, isFullWidth: r, isLarge: u, leftControl: c, middleControl: m, position: p, rightControl: g, secondaryBar: y, style: k, subtitle: f, title: _, titleDomId: h, titleIconCell: F, titleIconCellSize: b, withBackground: C, withWideContainer: K } = this.props,
                        { isModal: S } = this.context,
                        x = i ? c : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        L = (function (e, l, a) {
                            return e && !(l && a);
                        })(!!C, S, !!y);
                    return n.createElement(n.Fragment, null, n.createElement(o.Z, { centerTitle: l, centeredLogo: a, isFullWidth: r, isLarge: u, leftControl: x, middleControl: m, position: d(p, S, t), rightControl: g, style: k, subtitle: f, title: _, titleDomId: h, titleIconCell: F, titleIconCellSize: b, withBackground: L, withWideContainer: K }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: l } = this.context,
                        a = u.Z.getBackgroundStyles();
                    return l ? n.createElement(r.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = c.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
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
                h = a.n(_),
                F = a(437429),
                b = a.n(F),
                C = a(167630),
                K = a(731708),
                S = a(386802),
                x = a(530732),
                L = a(823161),
                T = a(855488),
                I = a(392237),
                v = a(111677),
                P = a.n(v),
                E = a(379327),
                w = a(666536),
                D = a(125568),
                Z = a(874088),
                B = a(952793),
                R = a(339110),
                A = a(524110),
                V = (function () {
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
            V.hash = "6137efb6ff95ddae937076d3cff8b6d5";
            const M = V;
            var q = {
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
            const N = q;
            var W = a(277660),
                O = a.n(W),
                Q = a(154003),
                U = a(665285),
                H = a(757700);
            const z = N,
                j = M,
                J = P().caa46e54,
                Y = P().e893fe6e,
                G = P().j1c09ca4,
                X = P().i2209530,
                $ = P().cfd2f35e,
                ee = P().b679ff6a,
                le = "DuplicateDomain",
                ae = ({ companyProfile: e, onSelect: l }) => {
                    const a = O()(z, e),
                        n = a?.id ? a?.result?.logo?.normal_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                        t = g.useCallback(() => {
                            l(a.rest_id, a.result.core.name, n);
                        }, [n, a.rest_id, a.result.core.name, l]);
                    return g.createElement(
                        K.ZP,
                        { size: "subtext1", style: ne.suggestion },
                        g.createElement(
                            P().I18NFormatMessage,
                            { $i18n: "ca584c31" },
                            g.createElement(
                                y.Z,
                                { style: ne.suggestion },
                                g.createElement(y.Z, { style: ne.logo }, g.createElement(L.default, { shape: "square", size: "medium", uri: n })),
                                g.createElement(x.Z, { interactiveStyles: null, onClick: t }, ({ isHovered: e }) => g.createElement(K.ZP, { color: "text", style: { textDecoration: "underline", cursor: "pointer", color: e ? I.default.theme.colors.primary : I.default.theme.colors.text }, weight: "bold" }, a.result.core.name)),
                            ),
                        ),
                    );
                },
                ne = I.default.create((e) => ({ root: { width: "100%", minWidth: "300px", maxWidth: "600px" }, header: { padding: e.spaces.space16 }, logo: { paddingEnd: e.spaces.space4 }, suggestion: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, actions: { padding: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: e.spaces.space16 } })),
                te = ({ companyName: e, onCancel: l, onSelect: a, onSuccess: n }) => {
                    const [t, i] = g.useState(!1),
                        [r, s] = g.useState(null),
                        [o, u] = g.useState(""),
                        [c] = h()(j),
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
                            !r || (0, U.Z)(r, null, !1) ? p() : u(ee);
                        }, [r, p]),
                        f = g.useCallback(() => {
                            s(null), l();
                        }, [l]);
                    return g.createElement(
                        H.ZP,
                        { clickMaskToClose: !1, modalSize: "dynamic", withBackground: !0 },
                        g.createElement(
                            y.Z,
                            { style: ne.root },
                            g.createElement(y.Z, { style: ne.header }, g.createElement(K.ZP, { size: "headline2", weight: "bold" }, Y)),
                            g.createElement(T.Z, { editable: !1, label: J, name: "company_name", onChange: () => {}, value: e }),
                            g.createElement(T.Z, {
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
                                label: G,
                                name: "domain",
                                onChange: (e) => s(e.target.value),
                                value: r || "",
                            }),
                            g.createElement(y.Z, { style: ne.actions }, g.createElement(Q.ZP, { disabled: t, onClick: f, size: "large", type: "primaryOutlined" }, $), g.createElement(Q.ZP, { disabled: t, onClick: k, size: "large", type: "brandFilled" }, X)),
                        ),
                    );
                },
                ie = p,
                re = d,
                se = P().eedfd35c,
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
                        l || a ? g.createElement(y.Z, null, l && g.createElement(C.Z, { size: "small" }), a && g.createElement(K.ZP, { style: ce.success }, "Saved")) : null
                    );
                },
                ue = ({ errorText: e, onChange: l, onEnter: a, onSelect: n, selectedValue: t, value: i }) => {
                    const { isModal: r } = g.useContext(S.Z),
                        s = g.useRef(null),
                        o = b()(),
                        [u, c] = g.useState(!1),
                        [d, m] = g.useState(!1),
                        [p, k] = g.useState(!1),
                        [_, F] = g.useState(!1),
                        [C, I] = g.useState(null),
                        [v, V] = g.useState([]),
                        [M, q] = g.useState(!1),
                        N = (0, D.t)(),
                        [W, O] = h()(re),
                        Q = (0, B.hC)("xprofile_work_history_domain_enabled"),
                        U = g.useMemo(
                            () =>
                                (0, w.Z)((e) => {
                                    N() &&
                                        e.length >= 1 &&
                                        (q(!0),
                                        ((e) => {
                                            f()(o, ie, { query: e })
                                                .toPromise()
                                                .then((e) => {
                                                    V(e?.company_profile_type_ahead || []), q(!1);
                                                });
                                        })(e));
                                }, 500),
                            [o, N],
                        ),
                        H = g.useCallback(
                            (e) => {
                                c(!0), l(e.target.value), U(e.target.value);
                            },
                            [U, l],
                        ),
                        z = g.useCallback(
                            (e, l) => {
                                s?.current?.focus(), n(e.id, e.name, e.data?.logoUrl), c(!1);
                            },
                            [n],
                        ),
                        j = g.useCallback((e) => {
                            c(!1), I(e), F(!0);
                        }, []),
                        J = g.useCallback(
                            (e) => {
                                Q
                                    ? j(e)
                                    : (k(!1),
                                      m(!0),
                                      W({
                                          variables: { name: e },
                                          onCompleted: (l) => {
                                              l.create_company_profile?.success && (m(!1), k(!0), n(l.create_company_profile.company_profile_results.rest_id, e, null));
                                          },
                                      }),
                                      c(!1));
                            },
                            [Q, W, j, n],
                        ),
                        Y = g.useCallback(() => {
                            c(!1), F(!1), I(null), l("");
                        }, [l]),
                        G = g.useCallback(() => {
                            c(!1), F(!1), I(null);
                        }, []),
                        X = g.useCallback(
                            (e) => {
                                const l = i ? v?.map((e) => ({ id: e.rest_id, name: e.core?.name || "", type: "company_profile", data: { logoUrl: e.logo?.normal_url || "", query: i } })) : [];
                                return g.createElement(g.Fragment, null, u ? g.createElement(A.Z, { isLoading: M, items: l, onItemClick: z, ref: e.ref, renderFooter: () => (i ? g.createElement(x.Z, { onClick: () => J(i), style: ce.createRow, testID: "create-company-profile-btn" }, g.createElement(y.Z, { style: ce.createAvatar }, g.createElement(E.default, null)), g.createElement(K.ZP, { size: "subtext1" }, g.createElement(P().I18NFormatMessage, { $i18n: "h8b54e37" }, g.createElement(K.ZP, { weight: "bold" }, i)))) : null), shouldAlwaysRender: i?.length > 0, source: R._4.CompanyProfile, style: [e.style, ce.dropdown] }) : null);
                            },
                            [J, z, v, M, u, i],
                        ),
                        $ = g.useCallback(
                            (l) => {
                                const { onFocus: n } = l;
                                return g.createElement(T.Z, {
                                    autoComplete: "off",
                                    endContent: Q ? null : g.createElement(oe, { hasSaved: p, isSaving: d || O }),
                                    errorText: e,
                                    invalid: !!e,
                                    label: se,
                                    name: "company-profile-selector-input",
                                    onChange: H,
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
                            [Q, e, H, p, d, O, a, t?.data?.logoUrl, t?.id, t?.name, i],
                        );
                    return g.createElement(y.Z, { style: ce.input }, g.createElement(Z.default, { isInModal: r, renderCustomDropdown: X, renderCustomInput: $, rounded: !0, source: R._4.CompanyProfile, testID: "company-profile-selector", userLimit: 20 }), Q && _ && C && g.createElement(te, { companyName: C || "", onCancel: Y, onSelect: n, onSuccess: G }));
                },
                ce = I.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 }, createRow: { flexDirection: "row", gap: 4, alignItems: "center", padding: e.spaces.space8 }, createAvatar: { width: 24, height: 24, borderRadius: e.borderRadii.xSmall, backgroundColor: e.colors.blue500, alignItems: "center", justifyContent: "center", color: e.colors.white }, logo: { paddingEnd: e.spaces.space4 }, dropdown: { maxHeight: "200px" }, input: { flexDirection: "row", gap: 16, alignItems: "center" }, success: { color: e.colors.green500 } })),
                de = g.memo(ue);
        },
        664052: (e, l, a) => {
            a.d(l, { Z: () => b });
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
                h = (e) => {
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
                F = p.default.create((e) => ({ message: { flexDirection: "row" }, textCountLabel: { flexDirection: "row", alignSelf: "center" }, container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space28, paddingBottom: e.spaces.space20 }, readOnlyContainer: { padding: e.spaces.space16, maxHeight: "500px", overflowX: "auto", backgroundColor: e.colors.gray0, color: e.colors.gray300 }, richTextWrapper: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderRadius: e.borderRadii.small, padding: e.spaces.space1, marginBottom: e.spaces.space16 } })),
                b = ({ allowExtendedPasteStyles: e, characterLimit: l, editable: a = !0, editorClass: p, editorStyles: g, initialState: y = "", limitedRichText: b = !1, numberOfLines: C = 10, onChange: K, textSizesOverride: S }) => {
                    const [x, L] = n.useState(h(y));
                    (0, k.q)(() => {
                        g && p && (0, s.fH)(g, p);
                    });
                    const T = n.useMemo(() => x?.getCurrentContent(), [x]),
                        I = n.useCallback(
                            (e) => {
                                const l = r.Z.convertEmojiToEntities(e);
                                L(l), K(l);
                            },
                            [K],
                        ),
                        v = (0, f.c6)(x);
                    let P = v;
                    v > 1 && (P = o.ZP.getFormattedCount(v));
                    const E = n.useMemo(() => {
                            const e = !!l && v > l;
                            return n.createElement(i.Z, null, n.createElement(u.ZP, { color: e ? "red500" : "gray900", numberOfLines: 1, size: "subtext1", style: F.textCountLabel }, _({ count: P })));
                        }, [v, P, l]),
                        w = n.useMemo(() => ({ allowExtendedPasteStyles: e, editorState: x, element: c.Z, stripPastedStyles: !0 }), [e, x]);
                    return n.createElement(i.Z, null, a ? n.createElement(i.Z, { style: F.richTextWrapper }, n.createElement(d.b, { inputStyle: F.container, isInputFullWidth: !0, limitedRichText: b, numberOfLines: C, onChange: I, richTextInputContext: w, textSizesOverride: S, toolbarRightControl: E })) : n.createElement(n.Fragment, null, T && T.hasText() ? n.createElement(i.Z, { style: F.richTextWrapper }, n.createElement(i.Z, { style: F.readOnlyContainer }, n.createElement(m.Z, { contentState: (0, t.convertToRaw)(T) }))) : null));
                };
        },
        998693: (e, l, a) => {
            a.d(l, { Z: () => K });
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
                h = a(524110);
            const F = p().jaaa8984,
                b = n.Z,
                C = d.default.create((e) => ({ inputStyle: { paddingHorizontal: 0, paddingVertical: 0 }, wrapper: { flex: 1 } })),
                K = ({ onChange: e, onEnter: l, onSelect: a, value: n }) => {
                    const { isModal: i } = t.useContext(u.Z),
                        s = t.useRef(null),
                        d = o()(),
                        [m, p] = t.useState(!1),
                        [K, S] = t.useState([]),
                        [x, L] = t.useState(!1),
                        T = (0, k.t)(),
                        I = t.useMemo(
                            () =>
                                (0, y.Z)((e) => {
                                    T() &&
                                        (e.length >= 2
                                            ? (p(!0),
                                              L(!0),
                                              ((e) => {
                                                  r()(d, b, { query: e })
                                                      .toPromise()
                                                      .then((e) => {
                                                          S(e?.location_type_ahead || []), L(!1);
                                                      });
                                              })(e))
                                            : p(!1));
                                }, 250),
                            [d, T],
                        ),
                        v = t.useCallback(
                            (l) => {
                                e({ value: l.target.value }), I(l.target.value);
                            },
                            [I, e],
                        ),
                        P = t.useCallback(
                            (e, l) => {
                                s?.current?.focus(), a({ id: e.id, name: e.name }), p(!1);
                            },
                            [a],
                        ),
                        E = t.useCallback(
                            (e) => {
                                const l = K?.map((e) => ({ id: e.location_id, name: e.display_name, type: "job_location", data: {} }));
                                return t.createElement(t.Fragment, null, m ? t.createElement(h.Z, { isLoading: x, items: l, onItemClick: P, ref: e.ref, source: _._4.JobLocation, style: e.style }) : null);
                            },
                            [P, K, x, m],
                        ),
                        w = t.useCallback(
                            (e) => {
                                const { onFocus: a } = e;
                                return t.createElement(c.Z, { Icon: g.default, autoComplete: "off", label: F, name: "location-selector-input", onChange: v, onFocus: a, onKeyPress: l, ref: s, style: C.inputStyle, testID: "location-selector-input", value: n });
                            },
                            [v, l, n],
                        );
                    return t.createElement(f.default, { isInModal: i, renderCustomDropdown: E, renderCustomInput: w, rounded: !0, source: _._4.JobLocation, testID: "location-selector", userLimit: 20 });
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
        652904: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n = a(202784),
                t = a(500002),
                i = a(668214),
                r = a(997174),
                s = a(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class u extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: l },
                            location: { pathname: a, search: n },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    l.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && l.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const u = t || s;
                    ((u && t !== s) || (!u && a !== i) || n !== r || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: l, updateLocation: a, updateTweetDetailNav: n } = e;
                    l.scribePageImpression(), a(l.contextualScribeNamespace, l.contextualScribeData), n(l.contextualScribeNamespace);
                }
            }
            u.defaultProps = { children: null };
            const c = (0, t.ZP)(o(u));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.WorkHistory-a2dee9c7.ff26f2aa.js.map

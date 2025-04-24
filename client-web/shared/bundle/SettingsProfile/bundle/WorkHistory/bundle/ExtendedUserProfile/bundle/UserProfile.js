"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsProfile~bundle.WorkHistory~bundle.ExtendedUserProfile~bundle.UserProfile"],
    {
        462166: (l, e, n) => {
            n.d(e, { nZ: () => B, cH: () => A, wJ: () => I, NG: () => C, C_: () => v, Sp: () => R, Bq: () => x, GL: () => b, lw: () => h });
            var a,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileSections_canViewExpandedProfileQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "can_view_expanded_profile", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "useFetchProfileSections_canViewExpandedProfileQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            { kind: "InlineFragment", selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "vqu78dKcEkW-UAYLw5rriA", metadata: {}, name: "useFetchProfileSections_canViewExpandedProfileQuery", operationKind: "query", text: null },
                };
            t.hash = "54abb36473f60a9dd1c4a2c707dc79ad";
            const u = t;
            var o = (function () {
                var l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    e = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, concreteType: "ProfileSectionSlice", kind: "LinkedField", name: "profile_sections", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null }], storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: l, kind: "Fragment", metadata: null, name: "useFetchProfileSections_profileSectionsCountQuery", selections: [{ alias: null, args: e, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiExpandedProfileResults", kind: "LinkedField", name: "expanded_profile_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n], type: "ApiExpandedProfile", abstractKey: null }], storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useFetchProfileSections_profileSectionsCountQuery", selections: [{ alias: null, args: e, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiExpandedProfileResults", kind: "LinkedField", name: "expanded_profile_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [n, i], type: "ApiExpandedProfile", abstractKey: null }], storageKey: null }, i], storageKey: null }, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }] },
                    params: { id: "B06uJ_vmlBVxEs7gCT6Dxw", metadata: {}, name: "useFetchProfileSections_profileSectionsCountQuery", operationKind: "query", text: null },
                };
            })();
            o.hash = "9661ee9781da36e7390cec4e385bae95";
            const c = o;
            var d = (function () {
                var l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }],
                    e = [
                        { kind: "Literal", name: "s", value: "f3d8" },
                        { kind: "Variable", name: "screen_name", variableName: "screenName" },
                    ],
                    n = { alias: null, args: null, kind: "ScalarField", name: "has_profile_blocks", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    r = {
                        alias: null,
                        args: null,
                        concreteType: "ProfileSectionId",
                        kind: "LinkedField",
                        name: "rest_id",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "section_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    t = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    u = { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null },
                    o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] };
                return {
                    fragment: { argumentDefinitions: l, kind: "Fragment", metadata: null, name: "useFetchProfileSections_profileQuery", selections: [{ alias: null, args: e, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_screen_name", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "ApiExpandedProfileResults", kind: "LinkedField", name: "expanded_profile_results", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "useFetchProfileSections_expandedProfile" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "useFetchProfileSections_profileQuery",
                        selections: [
                            {
                                alias: null,
                                args: e,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            a,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    n,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiExpandedProfileResults",
                                                        kind: "LinkedField",
                                                        name: "expanded_profile_results",
                                                        plural: !1,
                                                        selections: [
                                                            i,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    a,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            s,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "ProfileSectionSlice",
                                                                                kind: "LinkedField",
                                                                                name: "profile_sections",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "ApiProfileSectionResults",
                                                                                        kind: "LinkedField",
                                                                                        name: "items_results",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            s,
                                                                                            r,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    a,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            { alias: null, args: null, concreteType: "ProfileSectionCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "section_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "visibility", storageKey: null }, t], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "ProfileBlockSlice",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "profile_blocks",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "ApiProfileBlockResults",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "items_results",
                                                                                                                        plural: !0,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: null,
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "result",
                                                                                                                                plural: !1,
                                                                                                                                selections: [
                                                                                                                                    a,
                                                                                                                                    {
                                                                                                                                        kind: "InlineFragment",
                                                                                                                                        selections: [
                                                                                                                                            u,
                                                                                                                                            { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null },
                                                                                                                                            s,
                                                                                                                                            {
                                                                                                                                                alias: null,
                                                                                                                                                args: null,
                                                                                                                                                concreteType: null,
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "content",
                                                                                                                                                plural: !1,
                                                                                                                                                selections: [
                                                                                                                                                    a,
                                                                                                                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null },
                                                                                                                                                    {
                                                                                                                                                        kind: "InlineFragment",
                                                                                                                                                        selections: [
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null },
                                                                                                                                                            { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [s, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }, s], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null },
                                                                                                                                                            { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [s, i], storageKey: null },
                                                                                                                                                            t,
                                                                                                                                                        ],
                                                                                                                                                        type: "WorkExperienceBlockData",
                                                                                                                                                        abstractKey: null,
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
                                                                                                                            s,
                                                                                                                            u,
                                                                                                                            o,
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    o,
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            s,
                                                                                                            r,
                                                                                                        ],
                                                                                                        type: "ApiProfileSection",
                                                                                                        abstractKey: null,
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
                                                                        ],
                                                                        type: "ApiExpandedProfile",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            s,
                                                        ],
                                                        storageKey: null,
                                                    },
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
                    },
                    params: { id: "2ocjpx85ORO5fM06u75eCA", metadata: {}, name: "useFetchProfileSections_profileQuery", operationKind: "query", text: null },
                };
            })();
            d.hash = "a18829d5b96fda0ea466f6e076021471";
            const g = d;
            var y = (function () {
                var l = [{ kind: "Literal", name: "s", value: "f3d8" }],
                    e = { alias: null, args: null, kind: "ScalarField", name: "has_xprofile_consent", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    i = {
                        alias: null,
                        args: null,
                        concreteType: "ProfileSectionId",
                        kind: "LinkedField",
                        name: "rest_id",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "section_id", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    s = { alias: null, args: null, kind: "ScalarField", name: "section_type", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "visibility", storageKey: null },
                    t = { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null },
                    u = { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null },
                    o = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null },
                    c = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    g = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null };
                return {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchProfileSections_settingsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: l,
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
                                                                        e,
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ApiExpandedProfileResults",
                                                                            kind: "LinkedField",
                                                                            name: "expanded_profile_results",
                                                                            plural: !1,
                                                                            selections: [
                                                                                n,
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
                                                                                                a,
                                                                                                {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: "ProfileSectionSlice",
                                                                                                    kind: "LinkedField",
                                                                                                    name: "profile_sections",
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                        {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "ApiProfileSectionResults",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "items_results",
                                                                                                            plural: !0,
                                                                                                            selections: [
                                                                                                                a,
                                                                                                                i,
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
                                                                                                                                { alias: null, args: null, concreteType: "ProfileSectionCore", kind: "LinkedField", name: "core", plural: !1, selections: [s, r], storageKey: null },
                                                                                                                                { alias: null, args: null, concreteType: "ProfileBlockSlice", kind: "LinkedField", name: "profile_blocks", plural: !1, selections: [t, { alias: null, args: null, concreteType: "ApiProfileBlockResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [u, o], type: "ApiProfileBlock", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null },
                                                                                                                            ],
                                                                                                                            type: "ApiProfileSection",
                                                                                                                            abstractKey: null,
                                                                                                                        },
                                                                                                                    ],
                                                                                                                    storageKey: null,
                                                                                                                },
                                                                                                                { args: null, kind: "FragmentSpread", name: "useFetchProfileSections_sections" },
                                                                                                            ],
                                                                                                            storageKey: null,
                                                                                                        },
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                },
                                                                                            ],
                                                                                            type: "ApiExpandedProfile",
                                                                                            abstractKey: null,
                                                                                        },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        c,
                                                                    ],
                                                                    type: "User",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                        path: "viewer.user_results.result",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                            path: "viewer.user_results",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"f3d8")',
                                },
                                action: "THROW",
                                path: "viewer",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useFetchProfileSections_settingsQuery",
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
                                                    d,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            e,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiExpandedProfileResults",
                                                                kind: "LinkedField",
                                                                name: "expanded_profile_results",
                                                                plural: !1,
                                                                selections: [
                                                                    n,
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
                                                                                    a,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "ProfileSectionSlice",
                                                                                        kind: "LinkedField",
                                                                                        name: "profile_sections",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiProfileSectionResults",
                                                                                                kind: "LinkedField",
                                                                                                name: "items_results",
                                                                                                plural: !0,
                                                                                                selections: [
                                                                                                    a,
                                                                                                    i,
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
                                                                                                                    { alias: null, args: null, concreteType: "ProfileSectionCore", kind: "LinkedField", name: "core", plural: !1, selections: [s, r, g], storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "ProfileBlockSlice",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "profile_blocks",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            t,
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "ApiProfileBlockResults",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "items_results",
                                                                                                                                plural: !0,
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
                                                                                                                                                    u,
                                                                                                                                                    o,
                                                                                                                                                    a,
                                                                                                                                                    {
                                                                                                                                                        alias: null,
                                                                                                                                                        args: null,
                                                                                                                                                        concreteType: null,
                                                                                                                                                        kind: "LinkedField",
                                                                                                                                                        name: "content",
                                                                                                                                                        plural: !1,
                                                                                                                                                        selections: [
                                                                                                                                                            d,
                                                                                                                                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null },
                                                                                                                                                            {
                                                                                                                                                                kind: "InlineFragment",
                                                                                                                                                                selections: [
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [d, { kind: "InlineFragment", selections: [n, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }, a], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null },
                                                                                                                                                                    { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [a, n], storageKey: null },
                                                                                                                                                                    g,
                                                                                                                                                                ],
                                                                                                                                                                type: "WorkExperienceBlockData",
                                                                                                                                                                abstractKey: null,
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
                                                                                                                                    a,
                                                                                                                                    u,
                                                                                                                                    c,
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            c,
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    a,
                                                                                                                    i,
                                                                                                                ],
                                                                                                                type: "ApiProfileSection",
                                                                                                                abstractKey: null,
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
                                                                                ],
                                                                                type: "ApiExpandedProfile",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    a,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            c,
                                                            a,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "ZY6sPitHU09JQSc7ERKp0Q", metadata: {}, name: "useFetchProfileSections_settingsQuery", operationKind: "query", text: null },
                };
            })();
            y.hash = "38770cd3254b9edccaf5913dd428dedb";
            const k = y;
            var p = (function () {
                var l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useFetchProfileSections_expandedProfile",
                    selections: [
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
                                        l,
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "ProfileSectionSlice",
                                            kind: "LinkedField",
                                            name: "profile_sections",
                                            plural: !1,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ApiProfileSectionResults",
                                                    kind: "LinkedField",
                                                    name: "items_results",
                                                    plural: !0,
                                                    selections: [
                                                        l,
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "ProfileSectionId",
                                                            kind: "LinkedField",
                                                            name: "rest_id",
                                                            plural: !1,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "section_id", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
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
                                                                            concreteType: "ProfileSectionCore",
                                                                            kind: "LinkedField",
                                                                            name: "core",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "section_type", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "visibility", storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "ProfileBlockSlice",
                                                                            kind: "LinkedField",
                                                                            name: "profile_blocks",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_count", storageKey: null },
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "ApiProfileBlockResults",
                                                                                    kind: "LinkedField",
                                                                                    name: "items_results",
                                                                                    plural: !0,
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
                                                                                                        { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null },
                                                                                                        { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null },
                                                                                                    ],
                                                                                                    type: "ApiProfileBlock",
                                                                                                    abstractKey: null,
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
                                                                    ],
                                                                    type: "ApiProfileSection",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { args: null, kind: "FragmentSpread", name: "useFetchProfileSections_sections" },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    type: "ApiExpandedProfile",
                                    abstractKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "ApiExpandedProfileResults",
                    abstractKey: null,
                };
            })();
            p.hash = "0bb7633f109e9db9b0563d22524c2bd3";
            const m = p;
            var F = (function () {
                var l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    e = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    n = { alias: null, args: null, concreteType: "ProfileBlockCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_type", storageKey: null }], storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    i = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useFetchProfileSections_sections",
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
                                        l,
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "ProfileSectionId",
                                            kind: "LinkedField",
                                            name: "rest_id",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "section_id", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        { alias: null, args: null, concreteType: "ProfileSectionCore", kind: "LinkedField", name: "core", plural: !1, selections: [e, { alias: null, args: null, kind: "ScalarField", name: "visibility", storageKey: null }], storageKey: null },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "ProfileBlockSlice",
                                            kind: "LinkedField",
                                            name: "profile_blocks",
                                            plural: !1,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ApiProfileBlockResults",
                                                    kind: "LinkedField",
                                                    name: "items_results",
                                                    plural: !0,
                                                    selections: [
                                                        l,
                                                        { alias: null, args: null, concreteType: "ProfileBlockId", kind: "LinkedField", name: "rest_id", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "block_id", storageKey: null }], storageKey: null },
                                                        { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [n], type: "ApiProfileBlock", abstractKey: null }], storageKey: null },
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
                                                                                l,
                                                                                n,
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: null,
                                                                                    kind: "LinkedField",
                                                                                    name: "content",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { kind: "InlineDataFragmentSpread", name: "useFetchProfileSections_richtext", selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }], type: "RichtextProfileBlockData", abstractKey: null }], args: null, argumentDefinitions: [] },
                                                                                        {
                                                                                            kind: "InlineDataFragmentSpread",
                                                                                            name: "useFetchProfileSections_workHistory",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "InlineFragment",
                                                                                                    selections: [
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "active_role", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "company_profile_name", storageKey: null },
                                                                                                        { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "employment_type", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "end_month", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "end_year", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "location_text", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "location_type", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_month", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "start_year", storageKey: null },
                                                                                                        { alias: null, args: null, concreteType: "ApiStructuredLocation", kind: "LinkedField", name: "structured_location", plural: !1, selections: [l, a], storageKey: null },
                                                                                                        e,
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
                                                                i,
                                                            ],
                                                            args: null,
                                                            argumentDefinitions: [],
                                                        },
                                                        i,
                                                    ],
                                                    storageKey: null,
                                                },
                                                i,
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    type: "ApiProfileSection",
                                    abstractKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "ApiProfileSectionResults",
                    abstractKey: null,
                };
            })();
            F.hash = "cac1095ec28652d207a50360f3d822e7";
            const K = F;
            var _ = { kind: "InlineDataFragment", name: "useFetchProfileSections_block", hash: "6e7d5fe5cc58550cf3457a1a286239be" };
            const f = _;
            var S = { kind: "InlineDataFragment", name: "useFetchProfileSections_workHistory", hash: "f831905fe6d48426cd85d83d4224aebb" };
            const L = S;
            var P = { kind: "InlineDataFragment", name: "useFetchProfileSections_richtext", hash: "4d9ddc818f754abe55887fda6459a637" };
            const T = P;
            n(585488);
            const b = T,
                h = L,
                I = f,
                v = K,
                A = m,
                x = k,
                R = g,
                C = c,
                B = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsProfile~bundle.WorkHistory~bundle.ExtendedUserProfile~bundle.UserProfile.f7b8c17a.js.map

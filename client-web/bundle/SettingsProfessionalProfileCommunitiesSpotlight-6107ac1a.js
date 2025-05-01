"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileCommunitiesSpotlight-6107ac1a"],
    {
        53307: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                i,
                t,
                r,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CommunitiesSpotlightPreviewQuery",
                        selections: [
                            {
                                alias: "communityResults",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "communityId" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: "CommunityResults",
                                kind: "LinkedField",
                                name: "community_results_by_rest_id",
                                plural: !1,
                                selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesSpotlight_community" }], type: "Community", abstractKey: null }], storageKey: null }, action: "THROW" }],
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
                        name: "CommunitiesSpotlightPreviewQuery",
                        selections: [
                            {
                                alias: "communityResults",
                                args: i,
                                concreteType: "CommunityResults",
                                kind: "LinkedField",
                                name: "community_results_by_rest_id",
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
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "members_facepile_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiMedia",
                                                        kind: "LinkedField",
                                                        name: "default_banner_media",
                                                        plural: !1,
                                                        selections: (s = [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "media_info",
                                                                plural: !1,
                                                                selections: [
                                                                    t,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "MediaColorInfo",
                                                                                kind: "LinkedField",
                                                                                name: "color_info",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "MediaColorPaletteItem",
                                                                                        kind: "LinkedField",
                                                                                        name: "palette",
                                                                                        plural: !0,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "MediaColor",
                                                                                                kind: "LinkedField",
                                                                                                name: "rgb",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "ApiMediaRect",
                                                                                kind: "LinkedField",
                                                                                name: "salient_rect",
                                                                                plural: !1,
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        type: "ApiImage",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            r,
                                                        ]),
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: s, storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                    r,
                                                ],
                                                type: "Community",
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
                    },
                    params: { id: "VS7_DsXWgPznzmSKpDmAEw", metadata: {}, name: "CommunitiesSpotlightPreviewQuery", operationKind: "query", text: null },
                };
            u.hash = "6699711628486b83cfd1436c585a4692";
            const o = u;
        },
        892908: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesSpotlightSelectionItem_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityThumbnailImage_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "f5682d2cf1d3c786091245bab2c28414",
            };
            const i = a;
        },
        115200: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesSpotlightSelectionListFragment_spotlightableCommunitySlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "CommunityResults",
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
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            { args: null, kind: "FragmentSpread", name: "CommunitiesSpotlightSelectionItem_community" },
                                        ],
                                        type: "Community",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                ],
                type: "SpotlightableCommunitySlice",
                abstractKey: null,
                hash: "c867d55d154e8cbccd99e3bf42f86f87",
            };
            const i = a;
        },
        768195: (e, l, n) => {
            n.d(l, { Z: () => m });
            var a,
                i,
                t,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CommunitiesSpotlightSelectionListQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [{ kind: "Literal", name: "s", value: "1452" }]),
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
                                                                alias: "communities_eligible_for_profile_spotlight_slice",
                                                                args: null,
                                                                concreteType: "SpotlightableCommunitySlice",
                                                                kind: "LinkedField",
                                                                name: "__CommunitiesSpotlightSelectionQuery_communities_slice_slice",
                                                                plural: !1,
                                                                selections: [
                                                                    { args: null, kind: "FragmentSpread", name: "CommunitiesSpotlightSelectionListFragment_spotlightableCommunitySlice" },
                                                                    (r = {
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
                                storageKey: 'viewer_v2(s:"1452")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "CommunitiesSpotlightSelectionListQuery",
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
                                                    t,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (s = [
                                                                    { kind: "Literal", name: "count", value: 10 },
                                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                ]),
                                                                concreteType: "SpotlightableCommunitySlice",
                                                                kind: "LinkedField",
                                                                name: "communities_eligible_for_profile_spotlight_slice",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "CommunityResults",
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
                                                                                    t,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiMedia",
                                                                                                kind: "LinkedField",
                                                                                                name: "default_banner_media",
                                                                                                plural: !1,
                                                                                                selections: (o = [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "media_info",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            t,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "MediaColorInfo",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "color_info",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "MediaColorPaletteItem",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "palette",
                                                                                                                                plural: !0,
                                                                                                                                selections: [
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "MediaColor",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "rgb",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "ApiMediaRect",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "salient_rect",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                type: "ApiImage",
                                                                                                                abstractKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: o, storageKey: null },
                                                                                            u,
                                                                                        ],
                                                                                        type: "Community",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            u,
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: s, filters: null, handle: "slice", key: "CommunitiesSpotlightSelectionQuery_communities_slice", kind: "LinkedHandle", name: "communities_eligible_for_profile_spotlight_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
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
                                storageKey: 'viewer_v2(s:"1452")',
                            },
                        ],
                    },
                    params: { id: "JAiDJw7TiiAWoRRePbsH5A", metadata: { sliceInfoPath: ["viewer_v2", "user_results", "result", "communities_eligible_for_profile_spotlight_slice", "slice_info"] }, name: "CommunitiesSpotlightSelectionListQuery", operationKind: "query", text: null },
                };
            d.hash = "8c613c91a76018ef8f228ecbf3be3fb0";
            const m = d;
        },
        699418: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesSpotlight_community",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "CommunityFacePile_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityMemberCount_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityThumbnailImage_community" },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "34c0c514b034d1f809d48bbf5b8f1381",
            };
            const i = a;
        },
        444770: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityFacePile_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "members_facepile_results",
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
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }], storageKey: null }], type: "User", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "d9ab6744b4dc53b41a32cc0ce500f9e4",
            };
            const i = a;
        },
        607566: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityMemberCount_community", selections: [{ alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null }], type: "Community", abstractKey: null, hash: "793bedf8ae1b012c222a20424e8123bb" };
            const i = a;
        },
        903852: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityThumbnailImage_community", selections: [{ args: null, kind: "FragmentSpread", name: "useCommunityBannerImageThumbnail_community" }], type: "Community", abstractKey: null, hash: "d73ea82f88619cf536fb7bc460610274" };
            const i = a;
        },
        738666: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImageCustom_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiMedia",
                        kind: "LinkedField",
                        name: "custom_banner_media",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "media_info",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "MediaColorInfo",
                                                kind: "LinkedField",
                                                name: "color_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "MediaColorPaletteItem",
                                                        kind: "LinkedField",
                                                        name: "palette",
                                                        plural: !0,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "MediaColor",
                                                                kind: "LinkedField",
                                                                name: "rgb",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                        ],
                                        type: "ApiImage",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "f5fb6cadef5e830d674feb387a9eff99",
            };
            const i = a;
        },
        559035: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImageDefault_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiMedia",
                        kind: "LinkedField",
                        name: "default_banner_media",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "media_info",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "MediaColorInfo",
                                                kind: "LinkedField",
                                                name: "color_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "MediaColorPaletteItem",
                                                        kind: "LinkedField",
                                                        name: "palette",
                                                        plural: !0,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "MediaColor",
                                                                kind: "LinkedField",
                                                                name: "rgb",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                        ],
                                        type: "ApiImage",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "da44821ed2bd33fa8de3b5bd8503e57a",
            };
            const i = a;
        },
        51403: (e, l, n) => {
            n.d(l, { Z: () => t });
            var a,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useCommunityBannerImageThumbnail_community",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageDefault_community" },
                        { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageCustom_community" },
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiMedia",
                            kind: "LinkedField",
                            name: "custom_banner_media",
                            plural: !1,
                            selections: (a = [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media_info",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ApiMediaRect",
                                                    kind: "LinkedField",
                                                    name: "salient_rect",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "ApiImage",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ]),
                            storageKey: null,
                        },
                        { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "default_banner_media", plural: !1, selections: a, storageKey: null },
                    ],
                    type: "Community",
                    abstractKey: null,
                };
            i.hash = "bda649c5a293882e2d130676e026a4d7";
            const t = i;
        },
        29277: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImage_community",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageCustom_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageDefault_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "aecce1c8907386fe71248f72f90e1e26",
            };
            const i = a;
        },
        280278: (e, l, n) => {
            n.d(l, { ZP: () => p });
            var a = n(202784),
                i = n(325686),
                t = n(827515),
                r = n(461756),
                s = n(731708),
                u = n(392237);
            const o = "up",
                d = "down",
                m = (e, l, n) => {
                    n((n) => {
                        const a = (0, t.Z)(e) ? (e > (n.count || 0) ? o : d) : o;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: l, transitionDirection: a };
                    });
                },
                c = {};
            [o, d].forEach((e) => {
                const l = "0.3s";
                c[e] = { active: { transitionProperty: "transform", transitionDuration: l, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === o ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === o ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: l } };
            });
            const g = { position: "absolute" },
                y = u.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: l, containerStyle: n, count: u, ...d } = e,
                        [p, k] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: o }),
                        F = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (F.current = !0),
                                function () {
                                    F.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (F.current)
                                if (r.Z.reducedMotionEnabled) k((n) => ({ ...n, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== p.pendingText) {
                                    l === p.text || ((0, t.Z)(e.count) && p.count === e.count) ? k((e) => ({ ...e, pendingCount: null, pendingText: null })) : (k((n) => ({ ...n, pendingCount: e.count, pendingText: l })), p.animating || m(e.count, l, k));
                                }
                        }, [l]),
                        a.useEffect(() => {
                            F.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              F.current && k((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && m(p.pendingCount, p.pendingText, k));
                        }, [p.animating, p.oldText]),
                        a.useMemo(() => {
                            const e = c[p.transitionDirection],
                                l = p.oldText && !r.Z.reducedMotionEnabled,
                                t = !p.animating && p.oldText && !r.Z.reducedMotionEnabled,
                                u = { ...g, ...(p.animating ? e.post : e.active) },
                                o = { ...(t ? e.pre : e.active) };
                            return a.createElement(
                                i.Z,
                                { style: [y.root, n] },
                                l ? a.createElement("span", { style: u }, a.createElement(s.ZP, d, p.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(F.current, k),
                                        style: o,
                                    },
                                    a.createElement(s.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, F, k])
                    );
                };
        },
        98538: (e, l, n) => {
            n.d(l, { Z: () => g });
            var a = n(202784),
                i = n(325686),
                t = n(731708),
                r = n(891198),
                s = n(280278),
                u = n(392237);
            const o = "subtext1",
                d = a.createContext({ onMedia: !1 });
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: l, onMedia: n, onPress: i } = this.props;
                    return a.createElement(t.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: l, onClick: i }, a.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (m.Group = (e) =>
                a.createElement(
                    i.Z,
                    { style: [c.row, e.style] },
                    a.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, l, n) => a.createElement(i.Z, { key: l, style: l < n.length - 1 && c.groupItemNonLast }, e)),
                )),
                (m.Label = ({ children: e, style: l }) => a.createElement(d.Consumer, null, ({ onMedia: n }) => a.createElement(t.ZP, { children: e, color: n ? "white" : "gray700", size: o, style: l }))),
                (m.Value = ({ animated: e, children: l, count: n, style: i, weight: r = "bold" }) => a.createElement(d.Consumer, null, ({ onMedia: u }) => (e ? a.createElement(s.ZP, { children: l, count: n, size: o, style: i, weight: r }) : a.createElement(t.ZP, { children: l, color: u ? "white" : "text", size: o, style: i, weight: r }))));
            const c = u.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = m;
        },
        41065: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            var a = n(202784),
                i = n(890601),
                t = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, t.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const u = s;
        },
        143095: (e, l, n) => {
            n.d(l, { O: () => i });
            var a = n(202784);
            function i(e) {
                const [l, n] = a.useState(e);
                return [
                    l,
                    a.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return n(e);
                            n((e) => !e);
                        };
                        return (e.toTrue = n.bind(null, !0)), (e.toFalse = n.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileCommunitiesSpotlight-6107ac1a.2402441a.js.map

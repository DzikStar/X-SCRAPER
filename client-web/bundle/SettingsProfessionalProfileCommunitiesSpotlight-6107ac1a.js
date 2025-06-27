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
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "members_facepile_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null },
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
                    params: { id: "4GArZ3GX2CScV1N_eFwG-A", metadata: {}, name: "CommunitiesSpotlightPreviewQuery", operationKind: "query", text: null },
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
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }], type: "User", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "b057e8f1a7927932f33eae01360eeb54",
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
        642153: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a = n(202784),
                i = n(325686),
                t = n(392237),
                r = n(823161);
            const s = (e) => {
                    const { borderColor: l = "cellBackground", borderWidth: n = "small", style: s, userAvatarSize: o = "medium", userAvatarUrls: d, withIncreasedSpacing: m } = e,
                        c = d.length,
                        g = "transparent" === l;
                    return a.createElement(
                        i.Z,
                        { style: [u.root, s, { height: r.default.getSizeStyle(o)?.height }] },
                        d.map((e, i) => a.createElement(r.default, { backgroundColor: l, borderColor: l, borderWidth: g ? "none" : n, key: i, size: o, style: [0 !== i && { marginStart: -1 * t.default.theme.spacesPx[m ? "space4" : "space12"] }, { zIndex: c - i }], uri: e })),
                    );
                },
                u = t.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileCommunitiesSpotlight-6107ac1a.4cb575da.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-70f0082f"],
    {
        266073: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                i,
                s,
                t,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CarouselQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "s", value: "1452" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "Carousel_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"1452")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "CarouselQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
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
                                                    i,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: [{ kind: "Literal", name: "count", value: 20 }],
                                                                concreteType: "CommunitySlice",
                                                                kind: "LinkedField",
                                                                name: "community_memberships_slice",
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
                                                                                    i,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                            { alias: null, args: null, concreteType: "CommunityModeration", kind: "LinkedField", name: "moderation", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "tweet_case_count", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_requests_result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [s, { alias: null, args: null, kind: "ScalarField", name: "pending_join_request_count", storageKey: null }], type: "CommunityJoinRequests", abstractKey: null }], storageKey: null },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiMedia",
                                                                                                kind: "LinkedField",
                                                                                                name: "default_banner_media",
                                                                                                plural: !1,
                                                                                                selections: (t = [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "media_info",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            i,
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
                                                                                                    s,
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: t, storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "last_active_at", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "last_viewed_at", storageKey: null },
                                                                                            s,
                                                                                        ],
                                                                                        type: "Community",
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
                                                                storageKey: "community_memberships_slice(count:20)",
                                                            },
                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                storageKey: 'viewer_v2(s:"1452")',
                            },
                        ],
                    },
                    params: { id: "xfgycRkhqXy90CmTQZ7Kig", metadata: {}, name: "CarouselQuery", operationKind: "query", text: null },
                };
            r.hash = "56e20acf1c3634f06da2b3640cbeb947";
            const u = r;
        },
        883897: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "Carousel_user",
                selections: [
                    {
                        alias: null,
                        args: [{ kind: "Literal", name: "count", value: 20 }],
                        concreteType: "CommunitySlice",
                        kind: "LinkedField",
                        name: "community_memberships_slice",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                    { args: null, kind: "FragmentSpread", name: "CommunityThumbnailFragment_community" },
                                                ],
                                                type: "Community",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: "community_memberships_slice(count:20)",
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "334c2443bc1c809d72d772b3d14e57c0",
            };
            const i = a;
        },
        26363: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a,
                i = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunitiesCreateButtonQuery", selections: [{ alias: "viewer", args: (a = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "create_community_action_result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesCreateButton_create_community_action_result" }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "CommunitiesCreateButtonQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: a,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "create_community_action_result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            { kind: "TypeDiscriminator", abstractKey: "__isCommunityCreateActionResult" },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "CommunityCreateActionUnavailable", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "ScODPHsG2d28Xr-rDSBThg", metadata: {}, name: "CommunitiesCreateButtonQuery", operationKind: "query", text: null },
                };
            i.hash = "aaa46fdf5fd0dc56bacf696d9e8a4740";
            const s = i;
        },
        997661: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesCreateButton_create_community_action_result",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "CommunityCreateActionUnavailable", abstractKey: null },
                ],
                type: "CommunityCreateActionResult",
                abstractKey: "__isCommunityCreateActionResult",
                hash: "65c30b04b813ac1c85b7481145cfdcef",
            };
            const i = a;
        },
        36862: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesListActivityItem_community",
                selections: [
                    { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunitiesListActivityStat_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageThumbnail_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "28abec381f73291ed6b1984dd774bb86",
            };
            const i = a;
        },
        402180: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                i,
                s,
                t,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunitiesListActivityQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "s", value: "1452" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesListActivity_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"1452")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "CommunitiesListActivityQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
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
                                                    i,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: [{ kind: "Literal", name: "count", value: 1e3 }],
                                                                concreteType: "CommunitySlice",
                                                                kind: "LinkedField",
                                                                name: "community_memberships_slice",
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
                                                                                    i,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                            { alias: "newTweets", args: null, kind: "ScalarField", name: "new_tweet_count_since_last_viewed", storageKey: null },
                                                                                            { alias: "lastActiveTime", args: null, kind: "ScalarField", name: "last_active_at", storageKey: null },
                                                                                            { alias: null, args: null, concreteType: "CommunityModeration", kind: "LinkedField", name: "moderation", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "tweet_case_count", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_requests_result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [s, { alias: null, args: null, kind: "ScalarField", name: "pending_join_request_count", storageKey: null }], type: "CommunityJoinRequests", abstractKey: null }], storageKey: null },
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "ApiMedia",
                                                                                                kind: "LinkedField",
                                                                                                name: "default_banner_media",
                                                                                                plural: !1,
                                                                                                selections: (t = [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "media_info",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            i,
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
                                                                                                    s,
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                            },
                                                                                            { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: t, storageKey: null },
                                                                                            s,
                                                                                        ],
                                                                                        type: "Community",
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
                                                                storageKey: "community_memberships_slice(count:1000)",
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
                                storageKey: 'viewer_v2(s:"1452")',
                            },
                        ],
                    },
                    params: { id: "ZnEsP44ZDzRe9aId7SVoZg", metadata: {}, name: "CommunitiesListActivityQuery", operationKind: "query", text: null },
                };
            r.hash = "2269ec4e7032c806d13262b1e5d320bb";
            const u = r;
        },
        508585: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesListActivityStat_community",
                selections: [
                    { alias: "newTweets", args: null, kind: "ScalarField", name: "new_tweet_count_since_last_viewed", storageKey: null },
                    { alias: "lastActiveTime", args: null, kind: "ScalarField", name: "last_active_at", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "useCommunityTweetModerationCases_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityPendingJoinRequests_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "ed3daa45a2d99775ba227a7f6264b1b2",
            };
            const i = a;
        },
        321155: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesListActivity_user",
                selections: [
                    {
                        alias: null,
                        args: [{ kind: "Literal", name: "count", value: 1e3 }],
                        concreteType: "CommunitySlice",
                        kind: "LinkedField",
                        name: "community_memberships_slice",
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
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                    { args: null, kind: "FragmentSpread", name: "CommunitiesListActivityItem_community" },
                                                ],
                                                type: "Community",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: "community_memberships_slice(count:1000)",
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "b361350af218d3c0f8b67a2be9d284f7",
            };
            const i = a;
        },
        887421: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesSearchItem_item",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                    { alias: null, args: null, concreteType: "CommunityTopicPair", kind: "LinkedField", name: "primary_community_topic", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "topic_name", storageKey: null }], storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_nsfw", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityFacePile_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageThumbnail_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "3820e8684454559dd8372440ccaaf59a",
            };
            const i = a;
        },
        548622: (e, l, n) => {
            n.d(l, { Z: () => y });
            var a,
                i,
                s,
                t,
                r,
                u,
                m,
                o,
                d,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: null, kind: "LocalArgument", name: "query" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "CommunitiesSearchQuery",
                        selections: [
                            {
                                alias: "communities_search_slice",
                                args: [(s = { kind: "Variable", name: "query", variableName: "query" }), (t = { kind: "Literal", name: "s", value: "f3d8" })],
                                concreteType: "CommunitySearchSlice",
                                kind: "LinkedField",
                                name: "__CommunitiesSearchQuery_communities_slice_slice",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesSearchItem_item" }], type: "Community", abstractKey: null }], storageKey: null }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null },
                                    (m = {
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
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, a],
                        kind: "Operation",
                        name: "CommunitiesSearchQuery",
                        selections: [
                            {
                                alias: null,
                                args: (o = [{ kind: "Literal", name: "count", value: 10 }, { kind: "Variable", name: "cursor", variableName: "cursor" }, s, t]),
                                concreteType: "CommunitySearchSlice",
                                kind: "LinkedField",
                                name: "communities_search_slice",
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
                                                    r,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                                            { alias: null, args: null, concreteType: "CommunityTopicPair", kind: "LinkedField", name: "primary_community_topic", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "topic_name", storageKey: null }], storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_nsfw", storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "members_facepile_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiMedia",
                                                                kind: "LinkedField",
                                                                name: "default_banner_media",
                                                                plural: !1,
                                                                selections: (c = [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "media_info",
                                                                        plural: !1,
                                                                        selections: [
                                                                            r,
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
                                                                    d,
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "custom_banner_media", plural: !1, selections: c, storageKey: null },
                                                            d,
                                                        ],
                                                        type: "Community",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            d,
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                    m,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: o, filters: ["query", "s"], handle: "slice", key: "CommunitiesSearchQuery_communities_slice", kind: "LinkedHandle", name: "communities_search_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                        ],
                    },
                    params: { id: "HKgnJbw10TZW41Na4ToaSw", metadata: { sliceInfoPath: ["communities_search_slice", "slice_info"] }, name: "CommunitiesSearchQuery", operationKind: "query", text: null },
                };
            g.hash = "6905a599c71b38e99f53dcc049dffa44";
            const y = g;
        },
        865989: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityAbout_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityInfo_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityRules_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "e3c054cb8c0d4897f6061cc9b1669019",
            };
            const i = a;
        },
        843078: (e, l, n) => {
            n.d(l, { Z: () => m });
            var a,
                i,
                s,
                t,
                r,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CommunityAnalyticsQuery",
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
                                selections: [
                                    {
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
                                                    (t = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "CommunityMetricsAndGrowth",
                                                        kind: "LinkedField",
                                                        name: "community_growth",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "CommunityMetrics",
                                                                kind: "LinkedField",
                                                                name: "current_metrics",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "active_members", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "community_id", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "engagement_rate", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "impressions", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "new_members", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "total_members", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_posters", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_logged_in_visitors", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_logged_out_visitors", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_member_visitors", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "fav_count", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "reply_count", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "CommunityGrowth",
                                                                kind: "LinkedField",
                                                                name: "growth_metrics",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "active_members_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "engagement_rate_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "impressions_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "new_members_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "num_posts_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "total_members_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_posters_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_logged_in_visitors_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_logged_out_visitors_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "unique_member_visitors_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "fav_count_pct", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "reply_count_pct", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                ],
                                                type: "Community",
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "CommunityAnalyticsQuery", selections: [{ alias: "communityResults", args: i, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "WjkcJu3u0ICw288PAUaPOQ", metadata: {}, name: "CommunityAnalyticsQuery", operationKind: "query", text: null },
                };
            u.hash = "600a6abd9ba23d50801c2b1b5c460975";
            const m = u;
        },
        529149: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityAppBarButton_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "useCommunityPendingJoinRequests_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityTweetModerationCases_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityAppBarMenuButton_community" },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "12d6295018ebe6921ba49f6d29dcf28a",
            };
            const i = a;
        },
        697916: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityAppBarMenuButton_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "794ca10ae19ea90343ae7aa39fdb5f46",
            };
            const i = a;
        },
        697209: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityBannerImage_community", selections: [{ args: null, kind: "FragmentSpread", name: "useCommunityBannerImage_community" }], type: "Community", abstractKey: null, hash: "ac657dadcf91c9440fdfcd1862830fd1" };
            const i = a;
        },
        255098: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a,
                i = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityCreationSummary_community", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "join_policy", storageKey: null }, { alias: null, args: null, concreteType: "CommunityRule", kind: "LinkedField", name: "rules", plural: !0, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null }], type: "Community", abstractKey: null };
            i.hash = "6ff86462fcec420496d3581d85ead628";
            const s = i;
        },
        919157: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityDescriptionToggle_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "b0d158b55a32cd7c45788562b8f71a71",
            };
            const i = a;
        },
        223916: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityDetailFacePile_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, concreteType: "CommunityActions", kind: "LinkedField", name: "actions", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "list_members_action_result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }], storageKey: null }], storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityFacePile_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityMemberCount_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "caeaccd9a5279e5dfacd30dc75edd658",
            };
            const i = a;
        },
        334196: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityDetail_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityBannerImage_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityDescriptionToggle_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityDetailFacePile_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityLabel_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityPinButton_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityShareButton_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityAppBarButton_community" },
                    { alias: null, args: null, concreteType: "CommunityTopicPair", kind: "LinkedField", name: "primary_community_topic", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "topic_name", storageKey: null }], storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_nsfw", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "21a8c3f03db0050f121674b96e97c9ff",
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
        692659: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityInfo_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "creator_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }], storageKey: null }], storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "join_policy", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityOriginationAttributes_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "51b462711ae7aee918cd18bba386b57b",
            };
            const i = a;
        },
        542327: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                i,
                s,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CommunityInviteButtonQuery",
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunityInviteButton_community" }], type: "Community", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "CommunityInviteButtonQuery", selections: [{ alias: "communityResults", args: i, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "invites_result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "CommunityInvites", abstractKey: null }], storageKey: null }, t], type: "Community", abstractKey: null }], storageKey: null }, t], storageKey: null }] },
                    params: { id: "8s4H3Tf6VXViIQuaHMJE1Q", metadata: {}, name: "CommunityInviteButtonQuery", operationKind: "query", text: null },
                };
            r.hash = "4e2ebd2569ec8a0ff1e6bdc99498d02c";
            const u = r;
        },
        275355: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityInviteButton_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "invites_result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }], storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "b7ab87af666f9d231a6b2be83eed0762",
            };
            const i = a;
        },
        754924: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityLabel_community", selections: [{ alias: null, args: null, kind: "ScalarField", name: "join_policy", storageKey: null }], type: "Community", abstractKey: null, hash: "7280b3e6002f1a4b0dad07b5fe54dcf8" };
            const i = a;
        },
        607566: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityMemberCount_community", selections: [{ alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null }], type: "Community", abstractKey: null, hash: "793bedf8ae1b012c222a20424e8123bb" };
            const i = a;
        },
        255059: (e, l, n) => {
            n.d(l, { Z: () => s });
            var a,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "CommunityNotFoundScreen",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null },
                        { alias: null, args: null, concreteType: "TimelineRichText", kind: "LinkedField", name: "title", plural: !1, selections: (a = [{ args: null, kind: "FragmentSpread", name: "RichText_timelineRichText" }]), storageKey: null },
                        { alias: null, args: null, concreteType: "TimelineRichText", kind: "LinkedField", name: "subtitle", plural: !1, selections: a, storageKey: null },
                    ],
                    type: "CommunityUnavailable",
                    abstractKey: null,
                };
            i.hash = "821646b68d39b91e08ecfd52fe4df914";
            const s = i;
        },
        99855: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityOriginationAttributes_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "creator_results",
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
                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                                            { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
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
                type: "Community",
                abstractKey: null,
                hash: "941d5f4f165bd7ec6873b4467fb8cefa",
            };
            const i = a;
        },
        369642: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityPinButton_community",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "8276699ed5a0420e74a2163319da3301",
            };
            const i = a;
        },
        244522: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityPrimaryContent",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_member", storageKey: null },
                    { alias: null, args: null, concreteType: "CommunityActions", kind: "LinkedField", name: "actions", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_action_result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }], storageKey: null }], storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityAbout_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityInfo_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityRules_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityCreationSummary_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityDetail_community" },
                    { args: null, kind: "FragmentSpread", name: "TrendingHashtagsCarousel_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "3fa69197ff4a935a473fd2a89f1d272f",
            };
            const i = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-70f0082f.20e3f9aa.js.map

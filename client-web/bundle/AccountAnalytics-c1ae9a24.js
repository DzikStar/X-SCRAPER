"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-c1ae9a24"],
    {
        587906: (l, e, a) => {
            a.r(e), a.d(e, { default: () => O });
            const n = {
                fragment: {
                    argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "SpacesDetailsProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: (s = [
                                { kind: "Variable", name: "rest_id", variableName: "id" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "AudioSpace",
                            kind: "LinkedField",
                            name: "audio_space_by_rest_id",
                            plural: !1,
                            selections: [
                                (t = { alias: null, args: null, concreteType: "AudioSpaceTopic", kind: "LinkedField", name: "topic", plural: !0, selections: [{ alias: null, args: null, concreteType: "Topic", kind: "LinkedField", name: "topic", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }], storageKey: null }),
                                (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                (d = { alias: null, args: null, kind: "ScalarField", name: "state", storageKey: null }),
                                (o = { alias: null, args: null, kind: "ScalarField", name: "subscriber_count", storageKey: null }),
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "AudioSpaceMetadata",
                                    kind: "LinkedField",
                                    name: "metadata",
                                    plural: !1,
                                    selections: [
                                        (c = { alias: null, args: null, kind: "ScalarField", name: "is_space_available_for_replay", storageKey: null }),
                                        (g = { alias: null, args: null, kind: "ScalarField", name: "narrow_cast_space_type", storageKey: null }),
                                        (y = { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null }),
                                        (p = { alias: null, args: null, kind: "ScalarField", name: "total_participated", storageKey: null }),
                                        (m = { alias: null, args: null, kind: "ScalarField", name: "total_participating", storageKey: null }),
                                        (k = { alias: null, args: null, kind: "ScalarField", name: "total_live_listeners", storageKey: null }),
                                        (F = { alias: null, args: null, kind: "ScalarField", name: "total_replay_watched", storageKey: null }),
                                        (K = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                        (_ = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }),
                                        (S = { alias: null, args: null, kind: "ScalarField", name: "scheduled_start", storageKey: null }),
                                        (L = { alias: null, args: null, kind: "ScalarField", name: "start", storageKey: null }),
                                        (T = { alias: null, args: null, kind: "ScalarField", name: "ended_at", storageKey: null }),
                                        (v = { alias: null, args: null, kind: "ScalarField", name: "view_count_graph", storageKey: null }),
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "TweetResults",
                                            kind: "LinkedField",
                                            name: "tweet_results",
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
                                                        (b = {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "LegacyTweet",
                                                                    kind: "LinkedField",
                                                                    name: "legacy",
                                                                    plural: !1,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                        _,
                                                                        { alias: null, args: null, kind: "ScalarField", name: "favorite_count", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "reply_count", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "retweet_count", storageKey: null },
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "EntitySet",
                                                                            kind: "LinkedField",
                                                                            name: "entities",
                                                                            plural: !1,
                                                                            selections: [
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "ApiMediaEntity",
                                                                                    kind: "LinkedField",
                                                                                    name: "media",
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "media_url_https", storageKey: null },
                                                                                        { alias: null, args: null, concreteType: "ApiMediaEntityVideoInfo", kind: "LinkedField", name: "video_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null }], storageKey: null },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "ApiMediaEntityOriginalInfo",
                                                                                            kind: "LinkedField",
                                                                                            name: "original_info",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                { alias: null, args: null, concreteType: "ViewCountInfo", kind: "LinkedField", name: "views", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null }], storageKey: null },
                                                                u,
                                                                { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "reply_to_results", plural: !1, selections: (f = [u, r]), storageKey: null },
                                                                { alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: f, storageKey: null },
                                                                r,
                                                            ],
                                                            type: "Tweet",
                                                            abstractKey: null,
                                                        }),
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "UserResults",
                                            kind: "LinkedField",
                                            name: "creator_results",
                                            plural: !1,
                                            selections: (V = [
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
                                                                u,
                                                                (w = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "ApiUser",
                                                                    kind: "LinkedField",
                                                                    name: "legacy",
                                                                    plural: !1,
                                                                    selections: [
                                                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                }),
                                                                (A = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                (R = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "HighlightedUserLabelResponse",
                                                                    kind: "LinkedField",
                                                                    name: "affiliates_highlighted_label",
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
                                                                                { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
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
                                            ]),
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                { alias: null, args: null, concreteType: "Participants", kind: "LinkedField", name: "participants", plural: !1, selections: [(h = { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "admins", plural: !0, selections: [(U = { alias: null, args: null, kind: "ScalarField", name: "twitter_screen_name", storageKey: null })], storageKey: null }), { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "speakers", plural: !0, selections: [U, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: V, storageKey: null }], storageKey: null }, (I = { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "listeners", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null }, U], storageKey: null })], storageKey: null },
                                r,
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: i, kind: "Operation", name: "SpacesDetailsProviderQuery", selections: [{ alias: null, args: s, concreteType: "AudioSpace", kind: "LinkedField", name: "audio_space_by_rest_id", plural: !1, selections: [t, u, d, o, { alias: null, args: null, concreteType: "AudioSpaceMetadata", kind: "LinkedField", name: "metadata", plural: !1, selections: [c, g, y, p, m, k, F, K, _, S, L, T, v, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(P = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), b], storageKey: null }, r], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "creator_results", plural: !1, selections: (M = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [P, { kind: "InlineFragment", selections: [u, w, A, R, r], type: "User", abstractKey: null }], storageKey: null }, r]), storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "Participants", kind: "LinkedField", name: "participants", plural: !1, selections: [h, { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "speakers", plural: !0, selections: [U, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: M, storageKey: null }], storageKey: null }, I], storageKey: null }, r], storageKey: null }] },
                params: { id: "56cXnn5Ii-xJLDORJnlPMw", metadata: {}, name: "SpacesDetailsProviderQuery", operationKind: "query", text: null },
            };
            var i, s, r, t, u, d, o, c, g, y, p, m, k, F, K, _, S, L, T, v, f, b, w, A, R, V, U, h, I, P, M;
            n.hash = "35462a8d8700df04e464f566fe0dc78b";
            const O = n;
        },
        263078: (l, e, a) => {
            a.r(e), a.d(e, { default: () => k });
            const n = {
                fragment: {
                    argumentDefinitions: (i = [
                        { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                        { defaultValue: null, kind: "LocalArgument", name: "limit" },
                    ]),
                    kind: "Fragment",
                    metadata: null,
                    name: "SpacesOverviewProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: (s = [{ kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" }]),
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
                                                            args: (r = [
                                                                { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                { kind: "Literal", name: "filter", value: "Renderable" },
                                                                { kind: "Variable", name: "limit", variableName: "limit" },
                                                            ]),
                                                            concreteType: "SpaceSlice",
                                                            kind: "LinkedField",
                                                            name: "created_spaces_slice",
                                                            plural: !1,
                                                            selections: [
                                                                (t = { alias: null, args: null, concreteType: "SliceInfo", kind: "LinkedField", name: "slice_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }], storageKey: null }),
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "AudioSpace",
                                                                    kind: "LinkedField",
                                                                    name: "items",
                                                                    plural: !0,
                                                                    selections: [
                                                                        (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                        (d = { alias: null, args: null, kind: "ScalarField", name: "state", storageKey: null }),
                                                                        (o = { alias: null, args: null, kind: "ScalarField", name: "subscriber_count", storageKey: null }),
                                                                        (c = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "AudioSpaceMetadata",
                                                                            kind: "LinkedField",
                                                                            name: "metadata",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, kind: "ScalarField", name: "is_space_available_for_replay", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "narrow_cast_space_type", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_participated", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_participating", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_live_listeners", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "total_replay_watched", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "scheduled_start", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "start", storageKey: null },
                                                                                { alias: null, args: null, kind: "ScalarField", name: "ended_at", storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        }),
                                                                        (p = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: "Participants",
                                                                            kind: "LinkedField",
                                                                            name: "participants",
                                                                            plural: !1,
                                                                            selections: [
                                                                                { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "admins", plural: !0, selections: (y = [(g = { alias: null, args: null, kind: "ScalarField", name: "twitter_screen_name", storageKey: null })]), storageKey: null },
                                                                                { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "speakers", plural: !0, selections: y, storageKey: null },
                                                                                { alias: null, args: null, concreteType: "ParticipantUser", kind: "LinkedField", name: "listeners", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_id", storageKey: null }, g], storageKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        }),
                                                                    ],
                                                                    storageKey: null,
                                                                },
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
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: i,
                    kind: "Operation",
                    name: "SpacesOverviewProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: s,
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
                                                { kind: "InlineFragment", selections: [{ alias: null, args: r, concreteType: "SpaceSlice", kind: "LinkedField", name: "created_spaces_slice", plural: !1, selections: [t, { alias: null, args: null, concreteType: "AudioSpace", kind: "LinkedField", name: "items", plural: !0, selections: [u, d, o, c, p, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }], storageKey: null }, m], type: "User", abstractKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        m,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")',
                        },
                    ],
                },
                params: { id: "ryIiQPxAZA5IZdWJML7yjw", metadata: {}, name: "SpacesOverviewProviderQuery", operationKind: "query", text: null },
            };
            var i, s, r, t, u, d, o, c, g, y, p, m;
            n.hash = "848948e1fcb4431c2cd08f68a8c4d98c";
            const k = n;
        },
        587177: (l, e, a) => {
            a.r(e), a.d(e, { default: () => S });
            const n = {
                fragment: {
                    argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (s = { defaultValue: null, kind: "LocalArgument", name: "estimatedRevenueEnabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "limit" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "VideoListProviderQuery",
                    selections: [
                        {
                            alias: null,
                            args: (t = [{ kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" }]),
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
                                                            args: (d = [
                                                                { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                { kind: "Literal", name: "item_types", value: ["TweetVideo", "AmplifyVideo"] },
                                                                { kind: "Variable", name: "limit", variableName: "limit" },
                                                            ]),
                                                            concreteType: "GetMediaResults",
                                                            kind: "LinkedField",
                                                            name: "get_media_filtered",
                                                            plural: !1,
                                                            selections: [
                                                                (o = { alias: null, args: null, concreteType: "MediaLibraryCursor", kind: "LinkedField", name: "cursor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "offset", storageKey: null }], storageKey: null }),
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "ApiMediaResults",
                                                                    kind: "LinkedField",
                                                                    name: "media_results",
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
                                                                                        (c = { alias: null, args: null, kind: "ScalarField", name: "media_key", storageKey: null }),
                                                                                        (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                        (y = { alias: null, args: null, kind: "ScalarField", name: "video_media_name", storageKey: null }),
                                                                                        (p = { alias: null, args: null, kind: "ScalarField", name: "public_video_view_count", storageKey: null }),
                                                                                        { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "video_view_count", plural: !1, selections: [(m = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "total", storageKey: null }], type: "Count", abstractKey: null })], storageKey: null },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: null,
                                                                                            kind: "LinkedField",
                                                                                            name: "media_info",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                (k = {
                                                                                                    kind: "InlineFragment",
                                                                                                    selections: [
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null },
                                                                                                        { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "preview_image", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                                                                                                    ],
                                                                                                    type: "ApiVideo",
                                                                                                    abstractKey: null,
                                                                                                }),
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                        (F = {
                                                                                            condition: "estimatedRevenueEnabled",
                                                                                            kind: "Condition",
                                                                                            passingValue: !0,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "monetized", storageKey: null },
                                                                                                { alias: null, args: null, concreteType: "VideoRevenue", kind: "LinkedField", name: "amplify_revenue", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "revenue_usd", storageKey: null }], storageKey: null },
                                                                                            ],
                                                                                        }),
                                                                                        { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "get_media_posts_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(K = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (_ = { alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }], storageKey: null })], type: "Tweet", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                    ],
                                                                                    type: "ApiMedia",
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
                            storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")',
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [i, r, s], kind: "Operation", name: "VideoListProviderQuery", selections: [{ alias: null, args: t, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [{ alias: null, args: d, concreteType: "GetMediaResults", kind: "LinkedField", name: "get_media_filtered", plural: !1, selections: [o, { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "media_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [c, g, y, p, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "video_view_count", plural: !1, selections: [u, m], storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "media_info", plural: !1, selections: [u, k], storageKey: null }, F, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "get_media_posts_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [u, { kind: "InlineFragment", selections: [K, _, g], type: "Tweet", abstractKey: null }], storageKey: null }, g], storageKey: null }], type: "ApiMedia", abstractKey: null }], storageKey: null }, g], storageKey: null }], storageKey: null }, g], type: "User", abstractKey: null }], storageKey: null }, g], storageKey: null }], storageKey: 'viewer_v2(safety_level:"ForDevelopmentOnly")' }] },
                params: { id: "oRYPt8OYXtJMlbwI6zZ_yQ", metadata: {}, name: "VideoListProviderQuery", operationKind: "query", text: null },
            };
            var i, s, r, t, u, d, o, c, g, y, p, m, k, F, K, _;
            n.hash = "248a0000c9f85df6235d801f70be8fee";
            const S = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-c1ae9a24.cdc30ada.js.map

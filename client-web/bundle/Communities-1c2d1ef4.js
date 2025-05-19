"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-1c2d1ef4"],
    {
        9410: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "FollowUserButtonRelay_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "follow_request_sent", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_follow_eligible", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "super_followed_by", storageKey: null },
                    { alias: null, args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "affiliates_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }], storageKey: null }], storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "User",
                abstractKey: null,
                hash: "233f25c4c669787362ab81e4bbe01d2b",
            };
            const i = a;
        },
        622766: (e, l, n) => {
            n.d(l, { Z: () => o });
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
                        name: "HashtagResultsCommunity_Query",
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "HashtagResultsCommunity_Query", selections: [{ alias: "communityResults", args: i, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "IqDv9dN3LO-GORp6lRMyoA", metadata: {}, name: "HashtagResultsCommunity_Query", operationKind: "query", text: null },
                };
            u.hash = "c04fe5f2fb0af973c03481a2201e8dda";
            const o = u;
        },
        814551: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MemberRequestsPivot_community",
                selections: [
                    { alias: "communityId", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "useCommunityPendingJoinRequests_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityCanReviewMemberRequests_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "1606627c353016ef9191c910994a202a",
            };
            const i = a;
        },
        63012: (e, l, n) => {
            n.d(l, { Z: () => k });
            var a,
                i,
                s,
                t,
                r,
                u,
                o,
                d,
                m,
                c,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "communityId" },
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MemberRequests_Query",
                        selections: [
                            {
                                alias: "communityResults",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "communityId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
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
                                                    (t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "join_requests_result",
                                                        plural: !1,
                                                        selections: [
                                                            s,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    {
                                                                        alias: "pending_join_requests_slice",
                                                                        args: null,
                                                                        concreteType: "CommunityJoinRequestsSlice",
                                                                        kind: "LinkedField",
                                                                        name: "__MemberRequests_Query_members_slice_slice",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { args: null, kind: "FragmentSpread", name: "list_communityJoinRequestsSlice" },
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
                                                                type: "CommunityJoinRequests",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
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
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "MemberRequests_Query",
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
                                            s,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    t,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "join_requests_result",
                                                        plural: !1,
                                                        selections: [
                                                            s,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: (u = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                                                        concreteType: "CommunityJoinRequestsSlice",
                                                                        kind: "LinkedField",
                                                                        name: "pending_join_requests_slice",
                                                                        plural: !1,
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "CommunityJoinRequest",
                                                                                kind: "LinkedField",
                                                                                name: "items",
                                                                                plural: !0,
                                                                                selections: [
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "answer", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "state", storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserCommunityRelationship",
                                                                                        kind: "LinkedField",
                                                                                        name: "user_relationship",
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
                                                                                                            s,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    (d = { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null }, (m = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "muting", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, t], storageKey: null },
                                                                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "HighlightedUserLabelResponse",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "identity_profile_labels_highlighted_label",
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
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: "TimelineUrl",
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "url",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                                                                                                            { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                                                                                            {
                                                                                                                                                alias: "urtEndpointOptions",
                                                                                                                                                args: null,
                                                                                                                                                concreteType: "TimelineUrtEndpointOptions",
                                                                                                                                                kind: "LinkedField",
                                                                                                                                                name: "urt_endpoint_options",
                                                                                                                                                plural: !1,
                                                                                                                                                selections: [
                                                                                                                                                    { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                                                    {
                                                                                                                                                        alias: "requestParams",
                                                                                                                                                        args: null,
                                                                                                                                                        concreteType: "RequestParamsEntry",
                                                                                                                                                        kind: "LinkedField",
                                                                                                                                                        name: "request_params",
                                                                                                                                                        plural: !0,
                                                                                                                                                        selections: [
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                                                                                        ],
                                                                                                                                                        storageKey: null,
                                                                                                                                                    },
                                                                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [o], storageKey: null },
                                                                                                                                                ],
                                                                                                                                                storageKey: null,
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [c], storageKey: null },
                                                                                                                                    m,
                                                                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
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
                                                                                            { alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [d, o], type: "Community", abstractKey: null }], storageKey: null }, o], storageKey: null },
                                                                                            o,
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "CommunityJoinRequestActions", kind: "LinkedField", name: "actions", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_request_approve_action_result", plural: !1, selections: (g = [s]), storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_request_deny_action_result", plural: !1, selections: g, storageKey: null }, o], storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            r,
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: u, filters: null, handle: "slice", key: "MemberRequests_Query_members_slice", kind: "LinkedHandle", name: "pending_join_requests_slice" },
                                                                    o,
                                                                ],
                                                                type: "CommunityJoinRequests",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    o,
                                                ],
                                                type: "Community",
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
                    },
                    params: { id: "IMTO4nk0o0Hr8e4qKrjIww", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"], sliceInfoPath: ["communityResults", "result", "join_requests_result", "pending_join_requests_slice", "slice_info"] }, name: "MemberRequests_Query", operationKind: "query", text: null },
                };
            y.hash = "7356e3997f9137cb733c155223a4dd43";
            const k = y;
        },
        87778: (e, l, n) => {
            n.d(l, { Z: () => o });
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
                        name: "NotificationSettingsModalQuery",
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
                                                        concreteType: "CommunityNotificationTypeToSettings",
                                                        kind: "LinkedField",
                                                        name: "notification_settings",
                                                        plural: !0,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "notification_setting", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "notification_type", storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "NotificationSettingsModalQuery", selections: [{ alias: "communityResults", args: i, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "d86C1tsqqQ-_2b7xStjYJQ", metadata: {}, name: "NotificationSettingsModalQuery", operationKind: "query", text: null },
                };
            u.hash = "1c9d2e8f93a923a769d45f166c41ee7f";
            const o = u;
        },
        184804: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                i,
                s,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "community_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "community_notification_settings" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "NotificationSettingsSaveButtonMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "community_id", variableName: "community_id" },
                                    { kind: "Variable", name: "community_notification_settings", variableName: "community_notification_settings" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "community_notification_settings_put",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            (s = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                            (t = {
                                                alias: null,
                                                args: null,
                                                concreteType: "CommunityNotificationTypeToSettings",
                                                kind: "LinkedField",
                                                name: "notification_settings",
                                                plural: !0,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "notification_type", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "notification_setting", storageKey: null },
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
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "NotificationSettingsSaveButtonMutation",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "community_notification_settings_put",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: [s, t, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], type: "Community", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "GhfS-OCV4WH5I4aT2_i8jg", metadata: {}, name: "NotificationSettingsSaveButtonMutation", operationKind: "mutation", text: null },
                };
            r.hash = "e5e82a3de8dc40d3a4a8b26c1a907293";
            const u = r;
        },
        23984: (e, l, n) => {
            n.d(l, { Z: () => o });
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
                        name: "PeopleCommunity_Query",
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "PeopleCommunity_Query", selections: [{ alias: "communityResults", args: i, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [t, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Community", abstractKey: null }], storageKey: null }, r], storageKey: null }] },
                    params: { id: "t7j24Zrx2IjCj13ndCU2hA", metadata: {}, name: "PeopleCommunity_Query", operationKind: "query", text: null },
                };
            u.hash = "06797201f1a6a41f0ba4b990976ff3e8";
            const o = u;
        },
        888290: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PrimaryContentWrapperFragment",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_member", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "CommunityPrimaryContent" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "9d2ecd1173b91ef89fd833b3becf95a4",
            };
            const i = a;
        },
        704979: (e, l, n) => {
            n.d(l, { Z: () => d });
            var a,
                i,
                s,
                t,
                r,
                u,
                o = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "RichText_timelineRichText",
                    selections: [
                        {
                            kind: "InlineDataFragmentSpread",
                            name: "formatRichText_timelineRichText",
                            selections: [
                                {
                                    kind: "InlineDataFragmentSpread",
                                    name: "formatRichText_updateRelayEntities_timelineRichText",
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "TimelineRichTextEntity",
                                            kind: "LinkedField",
                                            name: "entities",
                                            plural: !0,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "format", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "from_index", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "ref",
                                                    plural: !1,
                                                    selections: [
                                                        {
                                                            kind: "InlineDataFragmentSpread",
                                                            name: "formatRichText_timelineReferenceObject",
                                                            selections: [
                                                                (a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                { kind: "InlineFragment", selections: (s = [(i = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                { kind: "InlineFragment", selections: s, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [(u = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                { kind: "InlineFragment", selections: [u, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], type: "TimelineRichTextMention", abstractKey: null },
                                                                {
                                                                    kind: "InlineDataFragmentSpread",
                                                                    name: "formatUrl_timelineUrl",
                                                                    selections: [
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                r,
                                                                                { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                                                {
                                                                                    alias: "urtEndpointOptions",
                                                                                    args: null,
                                                                                    concreteType: "TimelineUrtEndpointOptions",
                                                                                    kind: "LinkedField",
                                                                                    name: "urt_endpoint_options",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                                                        {
                                                                                            alias: "requestParams",
                                                                                            args: null,
                                                                                            concreteType: "RequestParamsEntry",
                                                                                            kind: "LinkedField",
                                                                                            name: "request_params",
                                                                                            plural: !0,
                                                                                            selections: [
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                                                { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                                                        { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ],
                                                                            type: "TimelineUrl",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    args: null,
                                                                    argumentDefinitions: [],
                                                                },
                                                            ],
                                                            args: null,
                                                            argumentDefinitions: [],
                                                        },
                                                    ],
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    args: null,
                                    argumentDefinitions: [],
                                },
                            ],
                            args: null,
                            argumentDefinitions: [],
                        },
                        { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                        i,
                        { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                    ],
                    type: "TimelineRichText",
                    abstractKey: null,
                };
            o.hash = "e0ccc0e45e3e5e3650f3f763fd746317";
            const d = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-1c2d1ef4.c4d6363a.js.map

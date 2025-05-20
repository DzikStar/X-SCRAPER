"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-8825d936"],
    {
        316788: (l, e, a) => {
            a.d(e, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "communityId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "role" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "communityPeopleActionMenu_roleUpdate_Mutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Variable", name: "role", variableName: "role" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ]),
                                concreteType: "Community",
                                kind: "LinkedField",
                                name: "community_role_put",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, s, i], kind: "Operation", name: "communityPeopleActionMenu_roleUpdate_Mutation", selections: [{ alias: null, args: r, concreteType: "Community", kind: "LinkedField", name: "community_role_put", plural: !1, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }] },
                    params: { id: "-z7ecfy5Y04vSJHD3xQ1aA", metadata: {}, name: "communityPeopleActionMenu_roleUpdate_Mutation", operationKind: "mutation", text: null },
                };
            u.hash = "611e4e6390b7bb405821b13d8b63cd5d";
            const d = u;
        },
        239308: (l, e, a) => {
            a.d(e, { Z: () => i });
            var n = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }],
                kind: "Fragment",
                metadata: null,
                name: "communityPeopleSliceItem_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: [{ kind: "Variable", name: "community_id", variableName: "communityId" }], kind: "ScalarField", name: "community_role", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { args: null, kind: "FragmentSpread", name: "FollowUserButtonRelay_user" },
                    { args: null, kind: "FragmentSpread", name: "UserCell_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "76f1fa4b33d115b4feb13af1500ca086",
            };
            const i = n;
        },
        282863: (l, e, a) => {
            a.d(e, { Z: () => t });
            var n,
                i,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "logIdentifier" }), (i = { defaultValue: null, kind: "LocalArgument", name: "tweetId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "controlsCommunityHideTweetRevertMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "moderator_log_id", variableName: "logIdentifier" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                    { kind: "Variable", name: "tweet_id", variableName: "tweetId" },
                                ],
                                kind: "ScalarField",
                                name: "community_tweet_hide_revert",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "controlsCommunityHideTweetRevertMutation", selections: s },
                    params: { id: "Rmj02wv2qXAexf9VUl4RUA", metadata: {}, name: "controlsCommunityHideTweetRevertMutation", operationKind: "mutation", text: null },
                };
            r.hash = "def1241029118c25c2f0fcdd1f9ee519";
            const t = r;
        },
        39482: (l, e, a) => {
            a.d(e, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                m,
                c = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "communityId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "logIdentifier" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "controlsCommunityMemberRemoveRevertMutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Variable", name: "member_id", variableName: "userId" },
                                    { kind: "Variable", name: "moderator_log_id", variableName: "logIdentifier" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: "CommunityModerationLog",
                                kind: "LinkedField",
                                name: "community_member_remove_revert_v2",
                                plural: !1,
                                selections: [{ args: null, kind: "FragmentSpread", name: "cell_CommunityModerationLog" }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, s, i],
                        kind: "Operation",
                        name: "controlsCommunityMemberRemoveRevertMutation",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "CommunityModerationLog",
                                kind: "LinkedField",
                                name: "community_member_remove_revert_v2",
                                plural: !1,
                                selections: [
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    { alias: null, args: null, kind: "ScalarField", name: "action_timestamp", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "moderator_ref_results",
                                        plural: !1,
                                        selections: (m = [
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
                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
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
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                            { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [t], storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [o], storageKey: null },
                                                                            u,
                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                            t,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ]),
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, kind: "ScalarField", name: "moderator_log_type", storageKey: null },
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_ref_results", plural: !1, selections: m, storageKey: null },
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "reverted_moderator_ref_results", plural: !1, selections: m, storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "is_revert_log", storageKey: null },
                                    { alias: null, args: null, concreteType: "CommunityRule", kind: "LinkedField", name: "rule_ref", plural: !1, selections: [d, t], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "member_req_answer", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Aw2JNTPsOAjXEVST4vY5sw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "controlsCommunityMemberRemoveRevertMutation", operationKind: "mutation", text: null },
                };
            c.hash = "65bbdcf3a983ac1366992f595926a67c";
            const g = c;
        },
        651175: (l, e, a) => {
            a.d(e, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                m,
                c = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "communityId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "logIdentifier" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "controlsCommunityReapproveJoinRequestMutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Variable", name: "moderator_log_id", variableName: "logIdentifier" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ]),
                                concreteType: "CommunityModerationLog",
                                kind: "LinkedField",
                                name: "community_join_request_deny_revert",
                                plural: !1,
                                selections: [{ args: null, kind: "FragmentSpread", name: "cell_CommunityModerationLog" }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, s, i],
                        kind: "Operation",
                        name: "controlsCommunityReapproveJoinRequestMutation",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "CommunityModerationLog",
                                kind: "LinkedField",
                                name: "community_join_request_deny_revert",
                                plural: !1,
                                selections: [
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    { alias: null, args: null, kind: "ScalarField", name: "action_timestamp", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "moderator_ref_results",
                                        plural: !1,
                                        selections: (m = [
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
                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
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
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                            { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [t], storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [o], storageKey: null },
                                                                            u,
                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                            t,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ]),
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, kind: "ScalarField", name: "moderator_log_type", storageKey: null },
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_ref_results", plural: !1, selections: m, storageKey: null },
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "reverted_moderator_ref_results", plural: !1, selections: m, storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "is_revert_log", storageKey: null },
                                    { alias: null, args: null, concreteType: "CommunityRule", kind: "LinkedField", name: "rule_ref", plural: !1, selections: [d, t], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "member_req_answer", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "hBn8yPm-ZsRhKtxZ8P19yQ", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "controlsCommunityReapproveJoinRequestMutation", operationKind: "mutation", text: null },
                };
            c.hash = "9aee34678f06d2c361a4172b2c2434d7";
            const g = c;
        },
        144526: (l, e, a) => {
            a.d(e, { Z: () => s });
            var n,
                i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "controls_CommunityJoinRequestActions",
                    selections: [
                        { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_request_approve_action_result", plural: !1, selections: (n = [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }]), storageKey: null },
                        { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_request_deny_action_result", plural: !1, selections: n, storageKey: null },
                    ],
                    type: "CommunityJoinRequestActions",
                    abstractKey: null,
                };
            i.hash = "d9f3f2d3ef86dc1594fe3112f3b525a0";
            const s = i;
        },
        407535: (l, e, a) => {
            a.d(e, { Z: () => y });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                m,
                c,
                g = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "communityId" },
                            { defaultValue: null, kind: "LocalArgument", name: "invitesPolicy" },
                            { defaultValue: null, kind: "LocalArgument", name: "joinPolicy" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "edit_membershipSettings_Mutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Variable", name: "invites_policy", variableName: "invitesPolicy" },
                                    { kind: "Variable", name: "join_policy", variableName: "joinPolicy" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "community_membership_settings_put",
                                plural: !1,
                                selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), (t = { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "join_policy", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "invites_policy", storageKey: null }), { args: null, kind: "FragmentSpread", name: "MemberRequestsPivot_community" }], type: "Community", abstractKey: null }, (m = { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }), { alias: "errorReason", args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "CommunityMembershipSettingsPutError", abstractKey: null }), (c = { kind: "InlineFragment", selections: [o, { alias: "updateReason", args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "CommunityMembershipSettingsPutActionUnavailable", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "edit_membershipSettings_Mutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "community_membership_settings_put", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, t, u, d, { alias: "communityId", args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "join_requests_result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, { alias: null, args: null, kind: "ScalarField", name: "pending_join_request_count", storageKey: null }], type: "CommunityJoinRequests", abstractKey: null }], storageKey: null }], type: "Community", abstractKey: null }, m, c], storageKey: null }] },
                    params: { id: "YiJSKw8k6Mpy-pkVOwuQ7w", metadata: {}, name: "edit_membershipSettings_Mutation", operationKind: "mutation", text: null },
                };
            g.hash = "4db7e9e65afea62ae269b7d270508a25";
            const y = g;
        },
        295223: (l, e, a) => {
            a.d(e, { n: () => n });
            const n = Object.freeze({ AutoSpamDetectorEnabled: "AutoSpamDetectorEnabled", BanQuotePostEnabled: "BanQuotePostEnabled", BanSelfQuotePostEnabled: "BanSelfQuotePostEnabled", HideUntilReviewEnabled: "HideUntilReviewEnabled" });
        },
        832271: (l, e, a) => {
            a.d(e, { D: () => n });
            const n = Object.freeze({ BannedKeywords: "BannedKeywords" });
        },
        178260: (l, e, a) => {
            a.d(e, { x: () => n });
            const n = Object.freeze({ Open: "Open", RestrictedJoinRequestsDisabled: "RestrictedJoinRequestsDisabled", RestrictedJoinRequestsRequireAdminApproval: "RestrictedJoinRequestsRequireAdminApproval", RestrictedJoinRequestsRequireModeratorApproval: "RestrictedJoinRequestsRequireModeratorApproval", SuperFollowRequired: "SuperFollowRequired" });
        },
        268313: (l, e, a) => {
            a.d(e, { x: () => n });
            const n = Object.freeze({ ChatStarted: "ChatStarted", CreationEnabledPut: "CreationEnabledPut", JoinRequestApproved: "JoinRequestApproved", MemberAdded: "MemberAdded", MemberLeftViaModeratorBlock: "MemberLeftViaModeratorBlock", MemberRemoved: "MemberRemoved", MemberRemovedRevert: "MemberRemovedRevert", PinnedTweet: "PinnedTweet", SpaceStarted: "SpaceStarted", TweetHidden: "TweetHidden", TweetHiddenRevert: "TweetHiddenRevert", TweetReported: "TweetReported", UserInvited: "UserInvited" });
        },
        963786: (l, e, a) => {
            a.d(e, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "list_communityJoinRequestsSlice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "CommunityJoinRequest",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "cell_CommunityJoinRequest" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "CommunityJoinRequestsSlice",
                abstractKey: null,
                hash: "53ebb4923797f8ac8a789c20901e1a59",
            };
            const i = n;
        },
        185525: (l, e, a) => {
            a.d(e, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "lists_CommunityListQuery",
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "relayListCell_list" }], storageKey: null }], type: "Community", abstractKey: null }], storageKey: null }],
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
                        name: "lists_CommunityListQuery",
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
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "List",
                                                        kind: "LinkedField",
                                                        name: "list",
                                                        plural: !1,
                                                        selections: [
                                                            r,
                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                                                            { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, t, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { alias: "author", args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiMediaResults",
                                                                kind: "LinkedField",
                                                                name: "custom_banner_media_results",
                                                                plural: !1,
                                                                selections: (d = [
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
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "media_info",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            s,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
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
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                                    u,
                                                                                ],
                                                                                type: "ApiMedia",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    u,
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: d, storageKey: null },
                                                            u,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    u,
                                                ],
                                                type: "Community",
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
                    },
                    params: { id: "CQc6L0vxfvdVjsYC1od3xA", metadata: {}, name: "lists_CommunityListQuery", operationKind: "query", text: null },
                };
            o.hash = "3aaa7bf9469646a533bc3212f273b8d2";
            const m = o;
        },
        422438: (l, e, a) => {
            a.d(e, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "communityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "lists_DeleteCommunityListMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: "Community",
                                kind: "LinkedField",
                                name: "community_list_delete",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "relayListCell_list" }], storageKey: null }],
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
                        name: "lists_DeleteCommunityListMutation",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "Community",
                                kind: "LinkedField",
                                name: "community_list_delete",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "List",
                                        kind: "LinkedField",
                                        name: "list",
                                        plural: !1,
                                        selections: [
                                            s,
                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                                            { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, r, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { alias: "author", args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "ApiMediaResults",
                                                kind: "LinkedField",
                                                name: "custom_banner_media_results",
                                                plural: !1,
                                                selections: (d = [
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
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                    u,
                                                                ],
                                                                type: "ApiMedia",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    u,
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: d, storageKey: null },
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "LuO64E_YPiDTOt7BMEJ5TA", metadata: {}, name: "lists_DeleteCommunityListMutation", operationKind: "mutation", text: null },
                };
            o.hash = "aa4f953d4c24c1a0b17ba1130553fba6";
            const m = o;
        },
        706549: (l, e, a) => {
            a.d(e, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "communityId" },
                            { defaultValue: null, kind: "LocalArgument", name: "listId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "lists_PutCommunityListMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "community_id", variableName: "communityId" },
                                    { kind: "Variable", name: "list_id", variableName: "listId" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: "Community",
                                kind: "LinkedField",
                                name: "community_list_put",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "List", kind: "LinkedField", name: "list", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "relayListCell_list" }], storageKey: null }],
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
                        name: "lists_PutCommunityListMutation",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "Community",
                                kind: "LinkedField",
                                name: "community_list_put",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "List",
                                        kind: "LinkedField",
                                        name: "list",
                                        plural: !1,
                                        selections: [
                                            s,
                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                                            { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, r, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { alias: "author", args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "ApiMediaResults",
                                                kind: "LinkedField",
                                                name: "custom_banner_media_results",
                                                plural: !1,
                                                selections: (d = [
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
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                    u,
                                                                ],
                                                                type: "ApiMedia",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    u,
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: d, storageKey: null },
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "s3n5fAohJensOkALcPRgPg", metadata: {}, name: "lists_PutCommunityListMutation", operationKind: "mutation", text: null },
                };
            o.hash = "a30b272bc634633feefa5a0b473ea05c";
            const m = o;
        },
        394897: (l, e, a) => {
            a.d(e, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "lists_UsersListsQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "1452" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: "lists", args: null, concreteType: "List", kind: "LinkedField", name: "public_lists", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "relayListCell_list" }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }],
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
                        name: "lists_UsersListsQuery",
                        selections: [
                            {
                                alias: "user",
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
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
                                                    {
                                                        alias: "lists",
                                                        args: null,
                                                        concreteType: "List",
                                                        kind: "LinkedField",
                                                        name: "public_lists",
                                                        plural: !0,
                                                        selections: [
                                                            r,
                                                            { alias: "id_str", args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }),
                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "facepile_urls", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "followers_context", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "pinning", storageKey: null },
                                                            { alias: "mode", args: null, kind: "ScalarField", name: "accessibility", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "members_context", storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "owner_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, { alias: "author", args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, t, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { alias: "author", args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, u], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "ApiMediaResults",
                                                                kind: "LinkedField",
                                                                name: "custom_banner_media_results",
                                                                plural: !1,
                                                                selections: (d = [
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
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "media_info",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            s,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
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
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                                    u,
                                                                                ],
                                                                                type: "ApiMedia",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    u,
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "ApiMediaResults", kind: "LinkedField", name: "default_banner_media_results", plural: !1, selections: d, storageKey: null },
                                                            u,
                                                        ],
                                                        storageKey: null,
                                                    },
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
                    },
                    params: { id: "HEhJl97uzjPenL_5eQIlrQ", metadata: {}, name: "lists_UsersListsQuery", operationKind: "query", text: null },
                };
            o.hash = "bd065b4370d2f8bd887ab65566fe6066";
            const m = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-8825d936.1a47992a.js.map

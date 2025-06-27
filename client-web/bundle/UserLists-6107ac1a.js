"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-6107ac1a"],
    {
        966722: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }],
                kind: "Fragment",
                metadata: null,
                name: "TrustedFriendItem_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: [{ kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "UserCellRelay_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "de98f6865cf990178fd67ddf926c3db7",
            };
            const i = a;
        },
        464258: (e, l, n) => {
            n.d(l, { Z: () => p });
            var a,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "slices" }), (i = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsAddRemoveButtonAddMutation",
                        selections: [{ alias: null, args: (t = [{ kind: "Literal", name: "s", value: "4902" }, (r = { kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }), { kind: "Variable", name: "user_id", variableName: "userId" }]), concreteType: null, kind: "LinkedField", name: "trusted_friends_list_member_add", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendItem_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "TrustedFriendsListMemberAddSuccess", abstractKey: null }, (c = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "TrustedFriendsListMemberAddInvalid", abstractKey: null })], storageKey: null }],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, s, a],
                        kind: "Operation",
                        name: "TrustedFriendsAddRemoveButtonAddMutation",
                        selections: [
                            {
                                alias: null,
                                args: t,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "trusted_friends_list_member_add",
                                plural: !1,
                                selections: [
                                    u,
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [d, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                            u,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    m,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [r], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserCore",
                                                                        kind: "LinkedField",
                                                                        name: "core",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [m], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [g], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
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
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    m,
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, filters: null, handle: "prependSliceItem", key: "", kind: "LinkedHandle", name: "user_results", handleArgs: [{ kind: "Variable", name: "slices", variableName: "slices" }] },
                                            o,
                                        ],
                                        type: "TrustedFriendsListMemberAddSuccess",
                                        abstractKey: null,
                                    },
                                    c,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "opx4RZ9umW5tImSva-1W6A", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "TrustedFriendsAddRemoveButtonAddMutation", operationKind: "mutation", text: null },
                };
            y.hash = "6c4f11ae4896cd3f33370bf4111636f1";
            const p = y;
        },
        301327: (e, l, n) => {
            n.d(l, { Z: () => k });
            var a,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                g,
                y,
                p = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "itemID" }), (i = { defaultValue: null, kind: "LocalArgument", name: "slices" }), (s = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsAddRemoveButtonRemoveMutation",
                        selections: [
                            {
                                alias: null,
                                args: (u = [{ kind: "Literal", name: "s", value: "4902" }, (t = { kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }), { kind: "Variable", name: "user_id", variableName: "userId" }]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "trusted_friends_list_member_remove",
                                plural: !1,
                                selections: [
                                    (d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null })], storageKey: null },
                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendItem_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                                            { kind: "ClientExtension", selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null })] },
                                        ],
                                        type: "TrustedFriendsListMemberRemoveSuccess",
                                        abstractKey: null,
                                    },
                                    (m = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "TrustedFriendsListMemberRemoveInvalid", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [s, r, i, a],
                        kind: "Operation",
                        name: "TrustedFriendsAddRemoveButtonRemoveMutation",
                        selections: [
                            {
                                alias: null,
                                args: u,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "trusted_friends_list_member_remove",
                                plural: !1,
                                selections: [
                                    d,
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [o, (g = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                                    g,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [t], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserCore",
                                                                        kind: "LinkedField",
                                                                        name: "core",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [g], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [y], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
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
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    g,
                                                ],
                                                storageKey: null,
                                            },
                                            {
                                                kind: "ClientExtension",
                                                selections: [
                                                    c,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        filters: null,
                                                        handle: "deleteSliceItem",
                                                        key: "",
                                                        kind: "ScalarHandle",
                                                        name: "__id",
                                                        handleArgs: [
                                                            { kind: "Variable", name: "itemID", variableName: "itemID" },
                                                            { kind: "Variable", name: "slices", variableName: "slices" },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                        type: "TrustedFriendsListMemberRemoveSuccess",
                                        abstractKey: null,
                                    },
                                    m,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "e5RBi-_9Ym5GTgnD9hju_A", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "TrustedFriendsAddRemoveButtonRemoveMutation", operationKind: "mutation", text: null },
                };
            p.hash = "3fbf808c99dc745e905081c08b7f920a";
            const k = p;
        },
        438532: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [{ defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }],
                kind: "Fragment",
                metadata: { plural: !0 },
                name: "TrustedFriendsList_items",
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
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendItem_user" },
                                ],
                                type: "User",
                                abstractKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "UserResults",
                abstractKey: null,
                hash: "e932cece171b5eaef2327bad1b7083fe",
            };
            const i = a;
        },
        917874: (e, l, n) => {
            n.d(l, { Z: () => m });
            var a,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsMembersQuery",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "trustedFriendsId" },
                                    { kind: "Literal", name: "s", value: "4902" },
                                ]),
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    {
                                        alias: "members_slice",
                                        args: null,
                                        concreteType: "UserSlice",
                                        kind: "LinkedField",
                                        name: "__TrustedFriendsMembers_slice_result_slice",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [{ args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendsList_items" }], storageKey: null },
                                            (t = {
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
                                            (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                        argumentDefinitions: [i, a],
                        kind: "Operation",
                        name: "TrustedFriendsMembersQuery",
                        selections: [
                            {
                                alias: null,
                                args: s,
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    r,
                                    {
                                        alias: null,
                                        args: (d = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                        concreteType: "UserSlice",
                                        kind: "LinkedField",
                                        name: "members_slice",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
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
                                                                    r,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [{ kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserCore",
                                                                        kind: "LinkedField",
                                                                        name: "core",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [r], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [o], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
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
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    r,
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: d, filters: null, handle: "slice", key: "TrustedFriendsMembers_slice_result", kind: "LinkedHandle", name: "members_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "pm-WSMbZdfILJhvwEN5nmg", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"], sliceInfoPath: ["trusted_friends_list_by_rest_id", "members_slice", "slice_info"] }, name: "TrustedFriendsMembersQuery", operationKind: "query", text: null },
                };
            c.hash = "56ee58fcb957d2c4c4174f3a95525972";
            const m = c;
        },
        319145: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsRecommendedQuery",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "trustedFriendsId" },
                                    { kind: "Literal", name: "s", value: "4902" },
                                ]),
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    {
                                        alias: "recommended_members_slice",
                                        args: null,
                                        concreteType: "UserSlice",
                                        kind: "LinkedField",
                                        name: "__TrustedFriendsRecommended_slice_result_slice",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "items_results", plural: !0, selections: [{ args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendsList_items" }], storageKey: null },
                                            (t = {
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
                        name: "TrustedFriendsRecommendedQuery",
                        selections: [
                            {
                                alias: null,
                                args: s,
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    r,
                                    {
                                        alias: null,
                                        args: (u = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                        concreteType: "UserSlice",
                                        kind: "LinkedField",
                                        name: "recommended_members_slice",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
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
                                                                    r,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [{ kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserCore",
                                                                        kind: "LinkedField",
                                                                        name: "core",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [r], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [d], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
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
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    r,
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: u, filters: null, handle: "slice", key: "TrustedFriendsRecommended_slice_result", kind: "LinkedHandle", name: "recommended_members_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "7mjuCJXY7Kf79lVGYdZLCw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"], sliceInfoPath: ["trusted_friends_list_by_rest_id", "recommended_members_slice", "slice_info"] }, name: "TrustedFriendsRecommendedQuery", operationKind: "query", text: null },
                };
            o.hash = "cc8ff5d87db97413126974d8e5b847f9";
            const c = o;
        },
        214636: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCellRelay_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "TimelineUrl" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
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
                ],
                type: "User",
                abstractKey: null,
                hash: "c29189086044661edf56ffa25a976eac",
            };
            const i = a;
        },
        263428: (e, l, n) => {
            n.d(l, { Z: () => f });
            var a,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                g,
                y,
                p,
                k,
                _,
                F,
                b = n(897455),
                K =
                    ((F = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                    {
                        fragment: {
                            argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (i = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (s = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (r = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (u = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (g = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (y = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                            kind: "Fragment",
                            metadata: null,
                            name: "combinedListsPageTimelineQuery",
                            selections: [
                                {
                                    alias: "user",
                                    args: (p = [
                                        { kind: "Variable", name: "rest_id", variableName: "userId" },
                                        { kind: "Literal", name: "s", value: "0c09" },
                                    ]),
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
                                                (k = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        {
                                                            alias: "timeline",
                                                            args: null,
                                                            concreteType: "Timeline",
                                                            kind: "LinkedField",
                                                            name: "all_subscribed_lists_timeline",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: (_ = [
                                                                        { kind: "Literal", name: "cards_platform", value: "Web-12" },
                                                                        { kind: "Variable", name: "count", variableName: "count" },
                                                                        { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                    ]),
                                                                    concreteType: "TimelineTimeline",
                                                                    kind: "LinkedField",
                                                                    name: "timeline",
                                                                    plural: !1,
                                                                    selections: [{ args: null, kind: "FragmentSpread", name: "TimelineRelay" }],
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
                            type: "Query",
                            abstractKey: null,
                        },
                        kind: "Request",
                        operation: { argumentDefinitions: [t, u, a, i, s, d, m, o, y, r, c, g], kind: "Operation", name: "combinedListsPageTimelineQuery", selections: [{ alias: "user", args: p, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [k, { kind: "InlineFragment", selections: [{ alias: "timeline", args: null, concreteType: "Timeline", kind: "LinkedField", name: "all_subscribed_lists_timeline", plural: !1, selections: [{ alias: null, args: _, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: b.Z, kind: "FragmentSpread" }], storageKey: null }, { alias: null, args: _, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] }, F], storageKey: null }, F], type: "User", abstractKey: null }], storageKey: null }, F], storageKey: null }] },
                        params: { id: "YVuA8uETVvEat4jB0fP2Gg", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "payments_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "combinedListsPageTimelineQuery", operationKind: "query", text: null },
                    });
            K.hash = "48ea11d8565f9095001c26f5e505d825";
            const f = K;
        },
        242454: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                s = n(325686),
                r = n(731708),
                t = n(58881),
                u = n(530732),
                d = n(392237);
            const o = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                c = ({ align: e = "center", color: l, label: n, ...c }) => {
                    const m = t.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors[l], insetFocusRing: !0 });
                    return i.createElement(s.Z, { style: o.container }, i.createElement(u.Z, (0, a.Z)({}, c, { interactiveStyles: m, style: o.root }), i.createElement(r.ZP, { align: e, color: l }, n)));
                };
        },
        779610: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(202784),
                i = n(325686),
                s = n(191796),
                r = n(58399),
                t = n(731708),
                u = n(952428),
                d = n(392237);
            const o = (e) => {
                    const { decoration: l, description: n, disabled: o = !1, isActive: m = !1, label: g, link: y, onPress: p, paddingHorizontal: k, renderRightContent: _, role: F = "tab", styleOverride: b, testID: K = "pivot", thumbnail: f, thumbnailSize: T, withoutArrow: L = !1 } = e,
                        h = [c.thumbnailContainer, "medium" === T && c.thumbnailContainerMedium],
                        v = "string" == typeof g ? a.createElement(t.ZP, null, g) : g,
                        S = "object" == typeof y && y.external && !y.openInSameFrame,
                        w = n ? ("string" == typeof n ? a.createElement(t.ZP, { color: "gray700", size: "subtext2", testID: `${K}-description` }, n) : n) : null,
                        I = a.useMemo(() => ("space0" === k ? { paddingHorizontal: 0 } : { paddingHorizontal: k ? d.default.theme.spaces[k] : d.default.theme.componentDimensions.gutterHorizontal }), [k]);
                    return a.createElement(u.Z, { "aria-selected": "tab" === F ? m : null, disabled: o, link: o ? void 0 : y, onPress: p, role: F, style: [c.root, I, o && c.disabled, b], testID: K, withInteractiveStyling: !!y || !!p }, a.createElement(i.Z, { style: c.contentContainer }, f ? a.createElement(i.Z, { style: h }, f) : null, a.createElement(i.Z, { style: c.content }, v, w), _ ? _() : null, (!y && !p) || o || L ? null : S ? a.createElement(s.default, { style: c.icon }) : a.createElement(r.default, { style: c.icon })), l);
                },
                c = d.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${d.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, l, n) => {
            n.d(l, { ZP: () => p });
            var a = n(202784),
                i = n(325686),
                s = n(827515),
                r = n(461756),
                t = n(731708),
                u = n(392237);
            const d = "up",
                o = "down",
                c = (e, l, n) => {
                    n((n) => {
                        const a = (0, s.Z)(e) ? (e > (n.count || 0) ? d : o) : d;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: l, transitionDirection: a };
                    });
                },
                m = {};
            [d, o].forEach((e) => {
                const l = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: l, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: l } };
            });
            const g = { position: "absolute" },
                y = u.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: l, containerStyle: n, count: u, ...o } = e,
                        [p, k] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        _ = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (_.current = !0),
                                function () {
                                    _.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (_.current)
                                if (r.Z.reducedMotionEnabled) k((n) => ({ ...n, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== p.pendingText) {
                                    l === p.text || ((0, s.Z)(e.count) && p.count === e.count) ? k((e) => ({ ...e, pendingCount: null, pendingText: null })) : (k((n) => ({ ...n, pendingCount: e.count, pendingText: l })), p.animating || c(e.count, l, k));
                                }
                        }, [l]),
                        a.useEffect(() => {
                            _.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              _.current && k((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && c(p.pendingCount, p.pendingText, k));
                        }, [p.animating, p.oldText]),
                        a.useMemo(() => {
                            const e = m[p.transitionDirection],
                                l = p.oldText && !r.Z.reducedMotionEnabled,
                                s = !p.animating && p.oldText && !r.Z.reducedMotionEnabled,
                                u = { ...g, ...(p.animating ? e.post : e.active) },
                                d = { ...(s ? e.pre : e.active) };
                            return a.createElement(
                                i.Z,
                                { style: [y.root, n] },
                                l ? a.createElement("span", { style: u }, a.createElement(t.ZP, o, p.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(_.current, k),
                                        style: d,
                                    },
                                    a.createElement(t.ZP, o, p.text),
                                ),
                            );
                        }, [n, o, p, _, k])
                    );
                };
        },
        98538: (e, l, n) => {
            n.d(l, { Z: () => g });
            var a = n(202784),
                i = n(325686),
                s = n(731708),
                r = n(891198),
                t = n(280278),
                u = n(392237);
            const d = "subtext1",
                o = a.createContext({ onMedia: !1 });
            class c extends a.Component {
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
                    return a.createElement(s.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: l, onClick: i }, a.createElement(o.Provider, { value: { onMedia: n } }, e));
                }
            }
            (c.Group = (e) =>
                a.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    a.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, l, n) => a.createElement(i.Z, { key: l, style: l < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (c.Label = ({ children: e, style: l }) => a.createElement(o.Consumer, null, ({ onMedia: n }) => a.createElement(s.ZP, { children: e, color: n ? "white" : "gray700", size: d, style: l }))),
                (c.Value = ({ animated: e, children: l, count: n, style: i, weight: r = "bold" }) => a.createElement(o.Consumer, null, ({ onMedia: u }) => (e ? a.createElement(t.ZP, { children: l, count: n, size: d, style: i, weight: r }) : a.createElement(s.ZP, { children: l, color: u ? "white" : "text", size: d, style: i, weight: r }))));
            const m = u.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-6107ac1a.1441388a.js.map

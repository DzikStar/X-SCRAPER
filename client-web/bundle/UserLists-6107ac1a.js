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
            n.d(l, { Z: () => _ });
            var a,
                i,
                r,
                s,
                t,
                d,
                u,
                o,
                c,
                m,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "slices" }), (i = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsAddRemoveButtonAddMutation",
                        selections: [{ alias: null, args: (t = [{ kind: "Literal", name: "s", value: "4902" }, (s = { kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }), { kind: "Variable", name: "user_id", variableName: "userId" }]), concreteType: null, kind: "LinkedField", name: "trusted_friends_list_member_add", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: [{ kind: "Variable", name: "trustedFriendsId", variableName: "trustedFriendsId" }], kind: "FragmentSpread", name: "TrustedFriendItem_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], type: "TrustedFriendsListMemberAddSuccess", abstractKey: null }, (c = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "reason", storageKey: null }], type: "TrustedFriendsListMemberAddInvalid", abstractKey: null })], storageKey: null }],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, r, a],
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
                                    d,
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "TrustedFriendsList", kind: "LinkedField", name: "trusted_friends_list", plural: !1, selections: [u, (m = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                                    m,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [s], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ApiUser",
                                                                        kind: "LinkedField",
                                                                        name: "legacy",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                    params: { id: "eZd6USS-Ehk8ypPeM3Pi9A", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "TrustedFriendsAddRemoveButtonAddMutation", operationKind: "mutation", text: null },
                };
            y.hash = "6c4f11ae4896cd3f33370bf4111636f1";
            const _ = y;
        },
        301327: (e, l, n) => {
            n.d(l, { Z: () => p });
            var a,
                i,
                r,
                s,
                t,
                d,
                u,
                o,
                c,
                m,
                g,
                y,
                _ = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "itemID" }), (i = { defaultValue: null, kind: "LocalArgument", name: "slices" }), (r = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsAddRemoveButtonRemoveMutation",
                        selections: [
                            {
                                alias: null,
                                args: (d = [{ kind: "Literal", name: "s", value: "4902" }, (t = { kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }), { kind: "Variable", name: "user_id", variableName: "userId" }]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "trusted_friends_list_member_remove",
                                plural: !1,
                                selections: [
                                    (u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                        argumentDefinitions: [r, s, i, a],
                        kind: "Operation",
                        name: "TrustedFriendsAddRemoveButtonRemoveMutation",
                        selections: [
                            {
                                alias: null,
                                args: d,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "trusted_friends_list_member_remove",
                                plural: !1,
                                selections: [
                                    u,
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
                                                            u,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    g,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [t], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ApiUser",
                                                                        kind: "LinkedField",
                                                                        name: "legacy",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                    params: { id: "v0uedhef3CdmGh-VPP6-Jw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "TrustedFriendsAddRemoveButtonRemoveMutation", operationKind: "mutation", text: null },
                };
            _.hash = "3fbf808c99dc745e905081c08b7f920a";
            const p = _;
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
                r,
                s,
                t,
                d,
                u,
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
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "trustedFriendsId" },
                                    { kind: "Literal", name: "s", value: "4902" },
                                ]),
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                            (d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
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
                                args: r,
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    s,
                                    {
                                        alias: null,
                                        args: (u = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
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
                                                                    s,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [{ kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ApiUser",
                                                                        kind: "LinkedField",
                                                                        name: "legacy",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [s], storageKey: null },
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
                                            t,
                                            d,
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: u, filters: null, handle: "slice", key: "TrustedFriendsMembers_slice_result", kind: "LinkedHandle", name: "members_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "t-rg7e49SsE_av_fkg5uow", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"], sliceInfoPath: ["trusted_friends_list_by_rest_id", "members_slice", "slice_info"] }, name: "TrustedFriendsMembersQuery", operationKind: "query", text: null },
                };
            c.hash = "56ee58fcb957d2c4c4174f3a95525972";
            const m = c;
        },
        319145: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a,
                i,
                r,
                s,
                t,
                d,
                u,
                o = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (i = { defaultValue: null, kind: "LocalArgument", name: "trustedFriendsId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "TrustedFriendsRecommendedQuery",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "trustedFriendsId" },
                                    { kind: "Literal", name: "s", value: "4902" },
                                ]),
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                args: r,
                                concreteType: "TrustedFriendsList",
                                kind: "LinkedField",
                                name: "trusted_friends_list_by_rest_id",
                                plural: !1,
                                selections: [
                                    s,
                                    {
                                        alias: null,
                                        args: (d = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
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
                                                                    s,
                                                                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                                                    { alias: null, args: [{ kind: "Variable", name: "trusted_friends_list_id", variableName: "trustedFriendsId" }], kind: "ScalarField", name: "is_trusted_friends_list_member", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "ApiUser",
                                                                        kind: "LinkedField",
                                                                        name: "legacy",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                                                            (u = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [s], storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [u], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
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
                                                    s,
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: d, filters: null, handle: "slice", key: "TrustedFriendsRecommended_slice_result", kind: "LinkedHandle", name: "recommended_members_slice", handleArgs: [{ kind: "Literal", name: "itemsFieldName", value: "items_results" }] },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "kDk90bwDBhHeqzNgLy5_NQ", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"], sliceInfoPath: ["trusted_friends_list_by_rest_id", "recommended_members_slice", "slice_info"] }, name: "TrustedFriendsRecommendedQuery", operationKind: "query", text: null },
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
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, action: "THROW" },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
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
                ],
                type: "User",
                abstractKey: null,
                hash: "de307e2883754f55e00a233dc6b069e8",
            };
            const i = a;
        },
        263428: (e, l, n) => {
            n.d(l, { Z: () => f });
            var a,
                i,
                r,
                s,
                t,
                d,
                u,
                o,
                c,
                m,
                g,
                y,
                _,
                p,
                k,
                b,
                F = n(897455),
                K =
                    ((b = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                    {
                        fragment: {
                            argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (i = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (r = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (s = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (t = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (d = { defaultValue: null, kind: "LocalArgument", name: "userId" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (g = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (y = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                            kind: "Fragment",
                            metadata: null,
                            name: "combinedListsPageTimelineQuery",
                            selections: [
                                {
                                    alias: "user",
                                    args: (_ = [
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
                                                (p = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                                                                    args: (k = [
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
                        operation: { argumentDefinitions: [t, d, a, i, r, u, m, o, y, s, c, g], kind: "Operation", name: "combinedListsPageTimelineQuery", selections: [{ alias: "user", args: _, concreteType: "UserResults", kind: "LinkedField", name: "user_result_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [p, { kind: "InlineFragment", selections: [{ alias: "timeline", args: null, concreteType: "Timeline", kind: "LinkedField", name: "all_subscribed_lists_timeline", plural: !1, selections: [{ alias: null, args: k, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: F.Z, kind: "FragmentSpread" }], storageKey: null }, { alias: null, args: k, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] }, b], storageKey: null }, b], type: "User", abstractKey: null }], storageKey: null }, b], storageKey: null }] },
                        params: { id: "wOcRJNZUK6vM8gneAADpUw", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "combinedListsPageTimelineQuery", operationKind: "query", text: null },
                    });
            K.hash = "48ea11d8565f9095001c26f5e505d825";
            const f = K;
        },
        242454: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                r = n(325686),
                s = n(731708),
                t = n(58881),
                d = n(530732),
                u = n(392237);
            const o = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                c = ({ align: e = "center", color: l, label: n, ...c }) => {
                    const m = t.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors[l], insetFocusRing: !0 });
                    return i.createElement(r.Z, { style: o.container }, i.createElement(d.Z, (0, a.Z)({}, c, { interactiveStyles: m, style: o.root }), i.createElement(s.ZP, { align: e, color: l }, n)));
                };
        },
        779610: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(202784),
                i = n(325686),
                r = n(191796),
                s = n(58399),
                t = n(731708),
                d = n(952428),
                u = n(392237);
            const o = (e) => {
                    const { decoration: l, description: n, disabled: o = !1, isActive: m = !1, label: g, link: y, onPress: _, paddingHorizontal: p, renderRightContent: k, role: b = "tab", styleOverride: F, testID: K = "pivot", thumbnail: f, thumbnailSize: T, withoutArrow: L = !1 } = e,
                        h = [c.thumbnailContainer, "medium" === T && c.thumbnailContainerMedium],
                        S = "string" == typeof g ? a.createElement(t.ZP, null, g) : g,
                        v = "object" == typeof y && y.external && !y.openInSameFrame,
                        w = n ? ("string" == typeof n ? a.createElement(t.ZP, { color: "gray700", size: "subtext2", testID: `${K}-description` }, n) : n) : null,
                        I = a.useMemo(() => ("space0" === p ? { paddingHorizontal: 0 } : { paddingHorizontal: p ? u.default.theme.spaces[p] : u.default.theme.componentDimensions.gutterHorizontal }), [p]);
                    return a.createElement(d.Z, { "aria-selected": "tab" === b ? m : null, disabled: o, link: o ? void 0 : y, onPress: _, role: b, style: [c.root, I, o && c.disabled, F], testID: K, withInteractiveStyling: !!y || !!_ }, a.createElement(i.Z, { style: c.contentContainer }, f ? a.createElement(i.Z, { style: h }, f) : null, a.createElement(i.Z, { style: c.content }, S, w), k ? k() : null, (!y && !_) || o || L ? null : v ? a.createElement(r.default, { style: c.icon }) : a.createElement(s.default, { style: c.icon })), l);
                },
                c = u.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${u.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, l, n) => {
            n.d(l, { ZP: () => _ });
            var a = n(202784),
                i = n(325686),
                r = n(827515),
                s = n(461756),
                t = n(731708),
                d = n(392237);
            const u = "up",
                o = "down",
                c = (e, l, n) => {
                    n((n) => {
                        const a = (0, r.Z)(e) ? (e > (n.count || 0) ? u : o) : u;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: l, transitionDirection: a };
                    });
                },
                m = {};
            [u, o].forEach((e) => {
                const l = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: l, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: l } };
            });
            const g = { position: "absolute" },
                y = d.default.create({ root: { overflow: "hidden" } }),
                _ = (e) => {
                    const { children: l, containerStyle: n, count: d, ...o } = e,
                        [_, p] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: u }),
                        k = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (k.current = !0),
                                function () {
                                    k.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (k.current)
                                if (s.Z.reducedMotionEnabled) p((n) => ({ ...n, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== _.pendingText) {
                                    l === _.text || ((0, r.Z)(e.count) && _.count === e.count) ? p((e) => ({ ...e, pendingCount: null, pendingText: null })) : (p((n) => ({ ...n, pendingCount: e.count, pendingText: l })), _.animating || c(e.count, l, p));
                                }
                        }, [l]),
                        a.useEffect(() => {
                            k.current &&
                                !1 === _.animating &&
                                (_.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              k.current && p((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : _.pendingText && c(_.pendingCount, _.pendingText, p));
                        }, [_.animating, _.oldText]),
                        a.useMemo(() => {
                            const e = m[_.transitionDirection],
                                l = _.oldText && !s.Z.reducedMotionEnabled,
                                r = !_.animating && _.oldText && !s.Z.reducedMotionEnabled,
                                d = { ...g, ...(_.animating ? e.post : e.active) },
                                u = { ...(r ? e.pre : e.active) };
                            return a.createElement(
                                i.Z,
                                { style: [y.root, n] },
                                l ? a.createElement("span", { style: d }, a.createElement(t.ZP, o, _.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(k.current, p),
                                        style: u,
                                    },
                                    a.createElement(t.ZP, o, _.text),
                                ),
                            );
                        }, [n, o, _, k, p])
                    );
                };
        },
        98538: (e, l, n) => {
            n.d(l, { Z: () => g });
            var a = n(202784),
                i = n(325686),
                r = n(731708),
                s = n(891198),
                t = n(280278),
                d = n(392237);
            const u = "subtext1",
                o = a.createContext({ onMedia: !1 });
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: l, onMedia: n, onPress: i } = this.props;
                    return a.createElement(r.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: l, onClick: i }, a.createElement(o.Provider, { value: { onMedia: n } }, e));
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
                (c.Label = ({ children: e, style: l }) => a.createElement(o.Consumer, null, ({ onMedia: n }) => a.createElement(r.ZP, { children: e, color: n ? "white" : "gray700", size: u, style: l }))),
                (c.Value = ({ animated: e, children: l, count: n, style: i, weight: s = "bold" }) => a.createElement(o.Consumer, null, ({ onMedia: d }) => (e ? a.createElement(t.ZP, { children: l, count: n, size: u, style: i, weight: s }) : a.createElement(r.ZP, { children: l, color: d ? "white" : "text", size: u, style: i, weight: s }))));
            const m = d.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = c;
        },
        183806: (e, l, n) => {
            n.d(l, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-6107ac1a.75c117da.js.map

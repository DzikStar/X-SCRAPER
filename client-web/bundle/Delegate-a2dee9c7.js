"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-a2dee9c7"],
    {
        907107: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "InviteMenu_accept_Mutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "delegate_status", value: "Accepted" },
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                ],
                                kind: "ScalarField",
                                name: "delegationmembership_status_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "InviteMenu_accept_Mutation", selections: i },
                    params: { id: "DpdMDix7rAjl6SVAs3SNSQ", metadata: {}, name: "InviteMenu_accept_Mutation", operationKind: "mutation", text: null },
                };
            t.hash = "d0dd7ad51dc65b6b39a64ff5d8a46708";
            const r = t;
        },
        610442: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "InviteMenu_reject_Mutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "DelegationMembership",
                                kind: "LinkedField",
                                name: "delegation_membership_reject",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "InviteMenu_reject_Mutation", selections: i },
                    params: { id: "QLNN5GVLRMe93lHnX3Um2w", metadata: {}, name: "InviteMenu_reject_Mutation", operationKind: "mutation", text: null },
                };
            t.hash = "5835fa97cbbb4e2dc19dc88989c641f8";
            const r = t;
        },
        831250: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "InviteMenu_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" },
                ],
                type: "User",
                abstractKey: null,
                hash: "dfcd48f8daeeaab8355fd049555ed200",
            };
            const i = n;
        },
        900301: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MemberCell_user",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "UserCellRelay_user" },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "4d3803a3cd9d78b61d26783a0e561f6e",
            };
            const i = n;
        },
        837800: (e, l, a) => {
            a.d(l, { Z: () => m });
            var n,
                i,
                t,
                r,
                s,
                o,
                u,
                d,
                c = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "MembersDelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (r = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null })], storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: (s = [{ kind: "Literal", name: "roles", value: ["Owner"] }]),
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            { args: null, kind: "FragmentSpread", name: "AddMemberModal_members" },
                                            { args: null, kind: "FragmentSpread", name: "Members_delegationGroups" },
                                        ],
                                        storageKey: 'list_delegation_groups(roles:["Owner"])',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "MembersDelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [i, r, (o = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: s,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "DelegationMembership",
                                                kind: "LinkedField",
                                                name: "members",
                                                plural: !0,
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
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            i,
                                                                            u,
                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, t], storageKey: null },
                                                                            o,
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
                                                                                                            { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [u], storageKey: null },
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
                                                            u,
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    u,
                                                    i,
                                                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                        ],
                                        storageKey: 'list_delegation_groups(roles:["Owner"])',
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                    },
                    params: { id: "j8P768fyKlgM0NPd4QLWiw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "MembersDelegateQuery", operationKind: "query", text: null },
                };
            c.hash = "8ad77d7d6d3fdc963e8312510dd27eee";
            const m = c;
        },
        189807: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: { plural: !0 },
                name: "MembersList_delegationMemberships",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
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
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { args: null, kind: "FragmentSpread", name: "MemberCell_user" },
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
                type: "DelegationMembership",
                abstractKey: null,
                hash: "a8d280c32d10bb774da72ce98d08e335",
            };
            const i = n;
        },
        338529: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "Members_delegationGroups",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "DelegationMembership",
                        kind: "LinkedField",
                        name: "members",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "MembersList_delegationMemberships" },
                        ],
                        storageKey: null,
                    },
                ],
                type: "DelegationGroup",
                abstractKey: null,
                hash: "c5aa7ee3103a6976b2cdb1c5699f3a11",
            };
            const i = n;
        },
        214636: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
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
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                        ],
                        storageKey: null,
                    },
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
                hash: "985b4977b0bca8a77c3af03b41dd50a8",
            };
            const i = n;
        },
        51545: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                t,
                r,
                s,
                o,
                u = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "delegationGroupId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (t = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useAddMemberModalMutation_add_Mutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "delegation_group_id", variableName: "delegationGroupId" },
                                    { kind: "Variable", name: "new_member_user_id", variableName: "userId" },
                                    { kind: "Variable", name: "role", variableName: "selectedRole" },
                                    { kind: "Literal", name: "s", value: "4bf0" },
                                ]),
                                concreteType: "DelegationGroup",
                                kind: "LinkedField",
                                name: "delegation_group_invite_member",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, n, i], kind: "Operation", name: "useAddMemberModalMutation_add_Mutation", selections: [{ alias: null, args: r, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group_invite_member", plural: !1, selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, o], storageKey: null }, s], storageKey: null }, s], storageKey: null }, s], storageKey: null }] },
                    params: { id: "i2EKR2188nR4j0xHIkhoiw", metadata: {}, name: "useAddMemberModalMutation_add_Mutation", operationKind: "mutation", text: null },
                };
            u.hash = "8e3896cb3018963fac790f8aff9c2b70";
            const d = u;
        },
        272121: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useChangeMemberRoleModalMutation_change_Mutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "delegate_role", variableName: "selectedRole" },
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "userId" },
                                ],
                                kind: "ScalarField",
                                name: "delegationmembership_role_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useChangeMemberRoleModalMutation_change_Mutation", selections: t },
                    params: { id: "bt_mUik7_sqXKofZmEBzAw", metadata: {}, name: "useChangeMemberRoleModalMutation_change_Mutation", operationKind: "mutation", text: null },
                };
            r.hash = "b547895302d3e2a308287d261ffbf02c";
            const s = r;
        },
        710594: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "invitationSetting" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDelegateMutation_settings_Mutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "allow_from", variableName: "invitationSetting" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                kind: "ScalarField",
                                name: "user_delegation_invitation_preferences_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useDelegateMutation_settings_Mutation", selections: t },
                    params: { id: "2HD9lnvauHCbl4wRw2P_QQ", metadata: {}, name: "useDelegateMutation_settings_Mutation", operationKind: "mutation", text: null },
                };
            r.hash = "64d8e56865daba79666a6400f5f4815c";
            const s = r;
        },
        126608: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useMemberMenuMutation_cancel_invite_Mutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "DelegationMembership",
                                kind: "LinkedField",
                                name: "delegation_membership_cancel",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useMemberMenuMutation_cancel_invite_Mutation", selections: i },
                    params: { id: "QSkmmm7WG94DG9AfV2QHkg", metadata: {}, name: "useMemberMenuMutation_cancel_invite_Mutation", operationKind: "mutation", text: null },
                };
            t.hash = "c1808ec27b924aef6cfa2dfcc18f2b24";
            const r = t;
        },
        108538: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useMemberMenuMutation_remove_Mutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "DelegationGroup",
                                kind: "LinkedField",
                                name: "delegation_membership_delete",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useMemberMenuMutation_remove_Mutation", selections: i },
                    params: { id: "R8K9DRNeWen33po2wpZhZw", metadata: {}, name: "useMemberMenuMutation_remove_Mutation", operationKind: "mutation", text: null },
                };
            t.hash = "2cfb0fa2808536b629adc29c3adafcd1";
            const r = t;
        },
        33104: (e, l, a) => {
            a.d(l, { Z: () => i });
            a(202784);
            var n = a(325686);
            const i = (0, a(337455).Z)(n.Z);
        },
        290402: (e, l, a) => {
            a.d(l, { Z: () => p });
            var n = a(807896),
                i = a(202784),
                t = a(182056),
                r = a(879113),
                s = a(392237),
                o = a(332920),
                u = a.n(o),
                d = a(968478);
            const c = u().aa6e3300,
                m = ({ retryMessage: e, ...l }, a) => {
                    const s = t.Z.isOnline();
                    return i.createElement(r.Z, (0, n.Z)({}, l, { icon: s ? void 0 : i.createElement(d.default, { style: g.icon }), retryMessage: s ? e : c }));
                },
                g = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = i.forwardRef(m);
        },
        253493: (e, l, a) => {
            a.d(l, { Z: () => f });
            var n = a(202784),
                i = a(107267),
                t = a(791632),
                r = a(325686),
                s = a(537392),
                o = a(10656),
                u = a(655352),
                d = a(555079),
                c = a(500002),
                m = a(625661),
                g = a(449067),
                p = a(655543),
                y = a(715601),
                k = a(392237);
            const b = k.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...k.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class _ extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: b.fill }, n.createElement(y.Z, { style: b.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(s.ZP, null, ({ containerWidth: e }) => (o.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: l, leftControl: a, screenType: i, showSubtitleOnRoot: t, showSubtitleOnWideDetail: r, withBottomBorder: s, withDetailOpen: o, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, u.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(g.Z.Configure, d), l);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: l, TabBar: a, appBarStyle: i, backLocation: t, documentTitle: s, headerless: o, history: u, leftControl: c, middleControl: p, onBackClick: y, rightControl: k, screenType: _, searchBoxOptions: h, secondaryBar: f, showSubtitleOnRoot: F, showSubtitleOnWideDetail: K, subtitle: v, title: M, titleIconCell: L, titleIconCellSize: S, withDetailOpen: T, withSearchBox: w, withTweetButton: C, withWideContainer: D } = this.props,
                        I = "root" === _,
                        U = "secondaryRoot" === _,
                        Z = "primaryDetail" === _,
                        x = (Z && K) || (I && F),
                        R = I || (Z && e),
                        A = I ? d.ey : Z ? d.vX : void 0,
                        E = n.createElement(r.Z, { style: b.appBarContainer }, n.createElement(m.ZP, { backLocation: t, fixed: !1, hideBackButton: R, history: u, leftControl: c, middleControl: p, onBackClick: y, rightControl: k, secondaryBar: f, style: i, subtitle: x ? v : void 0, title: M, titleDomId: A, titleIconCell: L, titleIconCellSize: S, withWideContainer: D })),
                        O = I || (U && T) ? null : n.createElement(g.Z.Configure, { SideNavButton: l, TabBar: a, backLocation: t, documentTitle: s, headerless: o, middleControl: p, onBackClick: y, rightControl: k, searchBoxOptions: h, subtitle: v, title: M, withSearchBox: w, withTweetButton: C });
                    return n.createElement(n.Fragment, null, O, E);
                }
            }
            (_.contextType = p.Z), (_.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const h = (0, c.ZP)(_),
                f = (e) => {
                    const l = (0, i.useHistory)();
                    return (0, t.HD)(l) ? e.children || null : n.createElement(h, e);
                };
        },
        25704: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n = a(202784),
                i = a(529356),
                t = a(332920),
                r = a.n(t),
                s = a(621416),
                o = a(443781);
            const u = r().j24c37b2,
                d = ({ Content: e, contentStyle: l, actionLabel: a = u, flag: t, graphic: r, graphicDisplayMode: d, headline: c, isFullHeightOnMobile: m, enableMaskForDismiss: g, onAction: p, onClose: y, onSecondaryAction: k, secondaryActionLabel: b, supportUrl: _, subtext: h, withCloseButton: f, shouldShowForLoggedOut: F = !1, shouldAddEducationFlagOnClose: K = !0, shouldAddEducationFlagOnSecondary: v = !0, shouldAddEducationFlagOnPrimary: M = !0 }) => {
                    const { loggedInUserId: L } = n.useContext(o.rC),
                        [S, T] = (0, s.m)(t),
                        w = n.useCallback(
                            (e) => {
                                M && T(), p && p(e);
                            },
                            [T, p, M],
                        ),
                        C = n.useCallback(() => {
                            K && T(), y && y();
                        }, [T, K, y]),
                        D = n.useCallback(
                            (e) => {
                                v && T(), k && k(e);
                            },
                            [T, k, v],
                        );
                    if (!S || (!L && !F)) return null;
                    return n.createElement(i.Z, { actionLabel: a, contentStyle: l, enableMaskForDismiss: g, graphic: r, graphicDisplayMode: d || "none", headline: c, isFullHeightOnMobile: m, onAction: w, onClose: C, onSecondaryAction: D, secondaryActionLabel: b, subtext: h, supportUrl: _, withCloseButton: f }, e ? n.createElement(e, null) : null);
                },
                c = n.memo(d);
        },
        231035: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n = a(202784),
                i = a(420740),
                t = a(108362),
                r = a(731708),
                s = a(154003),
                o = a(392237),
                u = a(332920),
                d = a.n(u),
                c = a(272175);
            const m = (0, a(500002).ZP)(({ staticContext: e, status: l = 404 }) => (e && (e.statusCode = l), n.createElement(c.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                g = "error-detail",
                p = d().e49537c2,
                y = d().a9ae1e78;
            class k extends n.PureComponent {
                render() {
                    return n.createElement(i.Z, { testID: g }, n.createElement(m, null), n.createElement(t.Z, { style: b.root }, n.createElement(r.ZP, { align: "center", color: "gray700", style: b.retryText }, p), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, y)));
                }
            }
            const b = o.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, l, a) => {
            a.d(l, { J: () => k });
            a(136728);
            var n = a(214636),
                i = a(202784),
                t = a(614983),
                r = a.n(t),
                s = (a(585488), a(277660)),
                o = a.n(s),
                u = a(107267),
                d = a(673510),
                c = a(44527),
                m = a(663550),
                g = a(409438),
                p = a(443781);
            const y = n.Z;
            function k(e) {
                const l = o()(y, e.user),
                    { avatar: a, legacy: n, privacy: t, relationship_perspectives: s, verification: g } = l,
                    k = l.identity_profile_labels_highlighted_label?.label ? (0, c.H)(l.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: b, decoration: _, displayMode: h } = e,
                    f = (function () {
                        const { viewerUserId: e } = i.useContext(p.rC);
                        return r()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    F = (0, u.useHistory)(),
                    K = i.useCallback(() => ("function" == typeof _ ? _({ displayMode: h, viewerUserId: f, userId: n?.id_str ?? "" }) : _), [_, f, n, h]),
                    v = i.useCallback(() => {
                        n?.screen_name && F.push({ pathname: `/${n.screen_name}` });
                    }, [F, n]);
                return i.createElement(d.ZP, { affiliateBadgeInfo: k, avatarUri: a?.image_url || "", decoration: K(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!l.is_blue_verified, isFollowedBy: s?.followed_by ?? !1, isProtected: t?.protected ?? !1, isVerified: g?.verified ?? !1, name: n?.name || "", onCellClick: b ? v : void 0, promotedItemType: m.bj.USER, screenName: n?.screen_name || "", userId: n?.id_str ?? "", verifiedType: g?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            k.defaultProps = { cellClickable: !0, decoration: null, displayMode: g.Z.UserCompact };
        },
        621416: (e, l, a) => {
            a.d(l, { m: () => t });
            a(890103);
            var n = a(202784),
                i = a(175698);
            function t(e) {
                const l = (0, i.A)();
                return [
                    !!l && !l.flags[e],
                    n.useCallback(() => {
                        l?.addFlag(e);
                    }, [l, e]),
                ];
            }
        },
        337455: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n = a(202784),
                i = a(411916),
                t = a.n(i),
                r = a(373463),
                s = a.n(r);
            function o(e) {
                class l extends n.Component {
                    constructor(e, l) {
                        super(e, l), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        t()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? n.createElement(e, this.props) : null;
                    }
                }
                return s()(l, e);
            }
        },
        943245: (e, l, a) => {
            a.d(l, { It: () => d, mD: () => u, sE: () => s });
            var n = a(899492),
                i = a(733357);
            const t = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                r = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                s = (e) => {
                    const l = e.toLowerCase();
                    return r[l] || l;
                },
                o = (e, l) => {
                    const a = s(e);
                    return !(t.indexOf(a) > -1 && l < 20) && !("und" === e);
                },
                u = ({ displayTextRange: e, entities: l, language: a, text: t }) => {
                    if (!e || !o(a, e[1] - e[0])) return !1;
                    const r = ((e, l) => {
                            let a = n.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in l) a = a.concat(l[e].map((e) => e.indices));
                            return a.sort((e, l) => e[0] - l[0]), a;
                        })(t, l),
                        s = ((e, l, a) => {
                            const { accText: n, lastIndex: i } = a.reduce(({ accText: a, lastIndex: n }, i) => (i[1] <= n || l[1] <= i[0] ? { lastIndex: n, accText: a } : { accText: a + e.slice(n, i[0]), lastIndex: i[1] }), { accText: "", lastIndex: l[0] });
                            return n + e.slice(i, l[1]);
                        })(t, e, r);
                    return !(0, i.Z)(s) && o(a, s.length);
                },
                d = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: l } = new window.Intl.Locale(e).maximize();
                        return `${e}-${l}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        409438: (e, l, a) => {
            a.d(l, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-a2dee9c7.604f82ea.js.map

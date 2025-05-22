"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-e96e9bea"],
    {
        937202: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AddMemberModal_members", selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "DelegationGroup", abstractKey: null, hash: "a50917ff28a2d3590cc0ddc6bee97efc" };
            const i = n;
        },
        216179: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "DelegateQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "delegation_invitation_preferences", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, (r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "DelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
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
                                                    { kind: "InlineFragment", selections: [i, s, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "GhQlWgEZ8wKf_JimVEG-Yw", metadata: {}, name: "DelegateQuery", operationKind: "query", text: null },
                };
            u.hash = "33b3e055bfc014e5d8bb37ed9ec595d3";
            const d = u;
        },
        793565: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "GroupCell_delegationHandleResults",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "30620f09588ea868ab14d30bab4a6cc1",
            };
            const i = n;
        },
        730319: (e, l, a) => {
            a.d(l, { Z: () => f });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                g,
                c,
                m,
                p,
                y,
                k,
                _,
                F,
                K,
                b,
                L = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "groupId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupDetailDelegateQuery",
                        selections: [(r = { alias: null, args: [{ kind: "Literal", name: "s", value: "4bf0" }], concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (s = [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }], storageKey: 'viewer_v2(s:"4bf0")' }), { alias: null, args: (t = [{ kind: "Variable", name: "id", variableName: "groupId" }]), concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "AddMemberModal_members" }, (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [u, { args: null, kind: "FragmentSpread", name: "MemberCell_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [u, (d = { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: s, type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "MembersList_delegationMemberships" }], storageKey: null }], storageKey: null }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "GroupDetailDelegateQuery",
                        selections: [
                            r,
                            {
                                alias: null,
                                args: t,
                                concreteType: "DelegationGroup",
                                kind: "LinkedField",
                                name: "delegation_group",
                                plural: !1,
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
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    u,
                                                                    i,
                                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                    (c = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
                                                                    (m = {
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
                                                                    }),
                                                                    (p = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null }),
                                                                    (y = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                                    (k = { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }),
                                                                    (_ = { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null }),
                                                                    (K = {
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
                                                                                            (F = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: s, storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [F], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    (b = {
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
                                                                    }),
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    i,
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                            u,
                                            d,
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [u, g, c, m, p, y, k, _, K, b, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Ky3G3Aq5fw-jMeeRqFoNDQ", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "GroupDetailDelegateQuery", operationKind: "query", text: null },
                };
            L.hash = "05c5bdb3c9856eec781137558bd5b4b4";
            const f = L;
        },
        69477: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupMenuMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "DelegationGroup",
                                kind: "LinkedField",
                                name: "delegation_membership_delete",
                                plural: !1,
                                selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { kind: "InlineFragment", selections: [s], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "GroupMenuMutation", selections: [{ alias: null, args: i, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_membership_delete", plural: !1, selections: [s, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, r], storageKey: null }, s], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "35IlHo3PPoKCgjGN9PyBEQ", metadata: {}, name: "GroupMenuMutation", operationKind: "mutation", text: null },
                };
            t.hash = "518b068950bad80be45e2a361bd33b97";
            const u = t;
        },
        170497: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "GroupMenu_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" },
                ],
                type: "User",
                abstractKey: null,
                hash: "f236be476b2a6b0bcdbcad38cae3dbdd",
            };
            const i = n;
        },
        403021: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                g,
                c,
                m,
                p,
                y = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupsDelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    (r = { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (s = [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }),
                                    { alias: "acceptedAdminGroups", args: (u = [{ kind: "Literal", name: "roles", value: ["Admin"] }, (t = { kind: "Literal", name: "status", value: "Accepted" })]), concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: (d = [{ args: null, kind: "FragmentSpread", name: "GroupsList_delegationGroups" }]), storageKey: 'list_delegation_groups(roles:["Admin"],status:"Accepted")' },
                                    { alias: "acceptedContributorGroups", args: (o = [{ kind: "Literal", name: "roles", value: ["Contributor"] }, t]), concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: d, storageKey: 'list_delegation_groups(roles:["Contributor"],status:"Accepted")' },
                                    {
                                        alias: "pendingGroups",
                                        args: (g = [
                                            { kind: "Literal", name: "roles", value: ["Admin", "Contributor"] },
                                            { kind: "Literal", name: "status", value: "Pending" },
                                        ]),
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: d,
                                        storageKey: 'list_delegation_groups(roles:["Admin","Contributor"],status:"Pending")',
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
                        name: "GroupsDelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    r,
                                    {
                                        alias: "acceptedAdminGroups",
                                        args: u,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: (p = [
                                            (c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                            i,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "handle_results",
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
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    i,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserCore",
                                                                        kind: "LinkedField",
                                                                        name: "core",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                    c,
                                                                ],
                                                                type: "User",
                                                                abstractKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    i,
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, c, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [m, { kind: "InlineFragment", selections: s, type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }, i, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null },
                                        ]),
                                        storageKey: 'list_delegation_groups(roles:["Admin"],status:"Accepted")',
                                    },
                                    { alias: "acceptedContributorGroups", args: o, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: p, storageKey: 'list_delegation_groups(roles:["Contributor"],status:"Accepted")' },
                                    { alias: "pendingGroups", args: g, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: p, storageKey: 'list_delegation_groups(roles:["Admin","Contributor"],status:"Pending")' },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                    },
                    params: { id: "ZMvC7MPK1tvdjiLZScRoig", metadata: {}, name: "GroupsDelegateQuery", operationKind: "query", text: null },
                };
            y.hash = "53f26b95cfeb2dab4346c822adfba72e";
            const k = y;
        },
        211150: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: { plural: !0 },
                    name: "GroupsList_delegationGroups",
                    selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "GroupCell_delegationHandleResults" }, { args: null, kind: "FragmentSpread", name: "GroupMenu_user" }, { args: null, kind: "FragmentSpread", name: "InviteMenu_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, action: "THROW" }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, n, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [i], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }],
                    type: "DelegationGroup",
                    abstractKey: null,
                };
            s.hash = "e6499dd30203e0972ff8abaf945db917";
            const r = s;
        },
        354907: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n,
                i,
                s,
                r,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "GroupsModalQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserName_user" }, (s = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "GroupsModalQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
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
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                                                            { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                            {
                                                                alias: "affiliates_highlighted_label",
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
                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [r], storageKey: null },
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
                                                            s,
                                                            (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "PA96qwj92bJ6N3cOjq4Jbw", metadata: {}, name: "GroupsModalQuery", operationKind: "query", text: null },
                };
            u.hash = "83e7757b0b1534f223677ce18107b05c";
            const d = u;
        },
        907107: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
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
            s.hash = "d0dd7ad51dc65b6b39a64ff5d8a46708";
            const r = s;
        },
        610442: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
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
            s.hash = "5835fa97cbbb4e2dc19dc88989c641f8";
            const r = s;
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
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" },
                ],
                type: "User",
                abstractKey: null,
                hash: "50be563638ab74ed6bb70c26f4b24fad",
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
                ],
                type: "User",
                abstractKey: null,
                hash: "523f98170e08085ac98f9ccbcf690886",
            };
            const i = n;
        },
        837800: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o = {
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
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (r = { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null })], storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: (t = [{ kind: "Literal", name: "roles", value: ["Owner"] }]),
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
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [i, r, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: t,
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
                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, s], storageKey: null },
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
                    params: { id: "OrlPblvnGTvq1ctorvgRPw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "MembersDelegateQuery", operationKind: "query", text: null },
                };
            o.hash = "88df5a763880b2d9e7635a89c2a9d698";
            const g = o;
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
            const i = n;
        },
        51545: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                s,
                r,
                t,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "delegationGroupId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (s = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
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
                                selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(u = { kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [s, n, i], kind: "Operation", name: "useAddMemberModalMutation_add_Mutation", selections: [{ alias: null, args: r, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group_invite_member", plural: !1, selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, u], storageKey: null }, t], storageKey: null }, t], storageKey: null }, t], storageKey: null }] },
                    params: { id: "i2EKR2188nR4j0xHIkhoiw", metadata: {}, name: "useAddMemberModalMutation_add_Mutation", operationKind: "mutation", text: null },
                };
            d.hash = "8e3896cb3018963fac790f8aff9c2b70";
            const o = d;
        },
        272121: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useChangeMemberRoleModalMutation_change_Mutation",
                        selections: (s = [
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
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useChangeMemberRoleModalMutation_change_Mutation", selections: s },
                    params: { id: "bt_mUik7_sqXKofZmEBzAw", metadata: {}, name: "useChangeMemberRoleModalMutation_change_Mutation", operationKind: "mutation", text: null },
                };
            r.hash = "b547895302d3e2a308287d261ffbf02c";
            const t = r;
        },
        710594: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "invitationSetting" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDelegateMutation_settings_Mutation",
                        selections: (s = [
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
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useDelegateMutation_settings_Mutation", selections: s },
                    params: { id: "2HD9lnvauHCbl4wRw2P_QQ", metadata: {}, name: "useDelegateMutation_settings_Mutation", operationKind: "mutation", text: null },
                };
            r.hash = "64d8e56865daba79666a6400f5f4815c";
            const t = r;
        },
        126608: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
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
            s.hash = "c1808ec27b924aef6cfa2dfcc18f2b24";
            const r = s;
        },
        108538: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
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
            s.hash = "2cfb0fa2808536b629adc29c3adafcd1";
            const r = s;
        },
        730895: (e, l, a) => {
            var n = a(821176);
            e.exports = function () {
                var e = n(this),
                    l = "";
                return e.hasIndices && (l += "d"), e.global && (l += "g"), e.ignoreCase && (l += "i"), e.multiline && (l += "m"), e.dotAll && (l += "s"), e.unicode && (l += "u"), e.unicodeSets && (l += "v"), e.sticky && (l += "y"), l;
            };
        },
        890103: (e, l, a) => {
            var n = a(609859),
                i = a(807400),
                s = a(396616),
                r = a(730895),
                t = a(824229),
                u = n.RegExp,
                d = u.prototype;
            i &&
                t(function () {
                    var e = !0;
                    try {
                        u(".", "d");
                    } catch (l) {
                        e = !1;
                    }
                    var l = {},
                        a = "",
                        n = e ? "dgimsy" : "gimsy",
                        i = function (e, n) {
                            Object.defineProperty(l, e, {
                                get: function () {
                                    return (a += n), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (e && (s.hasIndices = "d"), s)) i(r, s[r]);
                    return Object.getOwnPropertyDescriptor(d, "flags").get.call(l) !== n || a !== n;
                }) &&
                s(d, "flags", { configurable: !0, get: r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-e96e9bea.ed0a85ea.js.map

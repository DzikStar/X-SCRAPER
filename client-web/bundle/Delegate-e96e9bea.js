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
            a.d(l, { Z: () => o });
            var n,
                i,
                r,
                s,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "DelegateQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "delegation_invitation_preferences", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, (s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [i, r, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "GhQlWgEZ8wKf_JimVEG-Yw", metadata: {}, name: "DelegateQuery", operationKind: "query", text: null },
                };
            u.hash = "33b3e055bfc014e5d8bb37ed9ec595d3";
            const o = u;
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
            a.d(l, { Z: () => h });
            var n,
                i,
                r,
                s,
                t,
                u,
                o,
                d,
                c,
                g,
                m,
                p,
                y,
                k,
                b,
                _,
                F,
                K,
                f = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "groupId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupDetailDelegateQuery",
                        selections: [(s = { alias: null, args: [{ kind: "Literal", name: "s", value: "4bf0" }], concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (r = [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }], storageKey: 'viewer_v2(s:"4bf0")' }), { alias: null, args: (t = [{ kind: "Variable", name: "id", variableName: "groupId" }]), concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "AddMemberModal_members" }, (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [u, { args: null, kind: "FragmentSpread", name: "MemberCell_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [u, (o = { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: r, type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "MembersList_delegationMemberships" }], storageKey: null }], storageKey: null }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "GroupDetailDelegateQuery",
                        selections: [
                            s,
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
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    u,
                                                                    i,
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                    (g = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }),
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
                                                                    (b = { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null }),
                                                                    (F = {
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
                                                                                            (_ = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: r, storageKey: null },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [_], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    (K = {
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
                                            o,
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [d, { kind: "InlineFragment", selections: [u, c, g, m, p, y, k, b, F, K, i], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null },
                                    i,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "Ky3G3Aq5fw-jMeeRqFoNDQ", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "GroupDetailDelegateQuery", operationKind: "query", text: null },
                };
            f.hash = "05c5bdb3c9856eec781137558bd5b4b4";
            const h = f;
        },
        69477: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                r,
                s,
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
                                selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { kind: "InlineFragment", selections: [r], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "GroupMenuMutation", selections: [{ alias: null, args: i, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_membership_delete", plural: !1, selections: [r, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }, r], storageKey: null }, r], storageKey: null }], storageKey: null }] },
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
                r,
                s,
                t,
                u,
                o,
                d,
                c,
                g,
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
                                    (s = { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (r = [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }),
                                    { alias: "acceptedAdminGroups", args: (u = [{ kind: "Literal", name: "roles", value: ["Admin"] }, (t = { kind: "Literal", name: "status", value: "Accepted" })]), concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: (o = [{ args: null, kind: "FragmentSpread", name: "GroupsList_delegationGroups" }]), storageKey: 'list_delegation_groups(roles:["Admin"],status:"Accepted")' },
                                    { alias: "acceptedContributorGroups", args: (d = [{ kind: "Literal", name: "roles", value: ["Contributor"] }, t]), concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: o, storageKey: 'list_delegation_groups(roles:["Contributor"],status:"Accepted")' },
                                    {
                                        alias: "pendingGroups",
                                        args: (c = [
                                            { kind: "Literal", name: "roles", value: ["Admin", "Contributor"] },
                                            { kind: "Literal", name: "status", value: "Pending" },
                                        ]),
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: o,
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
                                    s,
                                    {
                                        alias: "acceptedAdminGroups",
                                        args: u,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: (p = [
                                            (g = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                    g,
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
                                            { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, g, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [m, { kind: "InlineFragment", selections: r, type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }, i, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null },
                                        ]),
                                        storageKey: 'list_delegation_groups(roles:["Admin"],status:"Accepted")',
                                    },
                                    { alias: "acceptedContributorGroups", args: d, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: p, storageKey: 'list_delegation_groups(roles:["Contributor"],status:"Accepted")' },
                                    { alias: "pendingGroups", args: c, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: p, storageKey: 'list_delegation_groups(roles:["Admin","Contributor"],status:"Pending")' },
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
            a.d(l, { Z: () => s });
            var n,
                i,
                r = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: { plural: !0 },
                    name: "GroupsList_delegationGroups",
                    selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "GroupCell_delegationHandleResults" }, { args: null, kind: "FragmentSpread", name: "GroupMenu_user" }, { args: null, kind: "FragmentSpread", name: "InviteMenu_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, action: "THROW" }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, n, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [i], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }],
                    type: "DelegationGroup",
                    abstractKey: null,
                };
            r.hash = "e6499dd30203e0972ff8abaf945db917";
            const s = r;
        },
        354907: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                r,
                s,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "GroupsModalQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserName_user" }, (r = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
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
                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [s], storageKey: null },
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
                                                            r,
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
            const o = u;
        },
        907107: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r = {
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
            r.hash = "d0dd7ad51dc65b6b39a64ff5d8a46708";
            const s = r;
        },
        610442: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r = {
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
            r.hash = "5835fa97cbbb4e2dc19dc88989c641f8";
            const s = r;
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
            a.d(l, { Z: () => c });
            var n,
                i,
                r,
                s,
                t,
                u,
                o,
                d = {
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
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (s = { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null })], storageKey: null })], storageKey: null },
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
                                    { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: [i, s, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, r], storageKey: null },
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
                                                                                                            { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [u], storageKey: null },
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
            d.hash = "88df5a763880b2d9e7635a89c2a9d698";
            const c = d;
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
            a.d(l, { Z: () => d });
            var n,
                i,
                r,
                s,
                t,
                u,
                o = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "delegationGroupId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (r = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useAddMemberModalMutation_add_Mutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
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
                    operation: { argumentDefinitions: [r, n, i], kind: "Operation", name: "useAddMemberModalMutation_add_Mutation", selections: [{ alias: null, args: s, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group_invite_member", plural: !1, selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, u], storageKey: null }, t], storageKey: null }, t], storageKey: null }, t], storageKey: null }] },
                    params: { id: "i2EKR2188nR4j0xHIkhoiw", metadata: {}, name: "useAddMemberModalMutation_add_Mutation", operationKind: "mutation", text: null },
                };
            o.hash = "8e3896cb3018963fac790f8aff9c2b70";
            const d = o;
        },
        272121: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "selectedRole" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useChangeMemberRoleModalMutation_change_Mutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useChangeMemberRoleModalMutation_change_Mutation", selections: r },
                    params: { id: "bt_mUik7_sqXKofZmEBzAw", metadata: {}, name: "useChangeMemberRoleModalMutation_change_Mutation", operationKind: "mutation", text: null },
                };
            s.hash = "b547895302d3e2a308287d261ffbf02c";
            const t = s;
        },
        710594: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "invitationSetting" }), (i = { defaultValue: null, kind: "LocalArgument", name: "userId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDelegateMutation_settings_Mutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "useDelegateMutation_settings_Mutation", selections: r },
                    params: { id: "2HD9lnvauHCbl4wRw2P_QQ", metadata: {}, name: "useDelegateMutation_settings_Mutation", operationKind: "mutation", text: null },
                };
            s.hash = "64d8e56865daba79666a6400f5f4815c";
            const t = s;
        },
        126608: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r = {
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
            r.hash = "c1808ec27b924aef6cfa2dfcc18f2b24";
            const s = r;
        },
        108538: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i,
                r = {
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
            r.hash = "2cfb0fa2808536b629adc29c3adafcd1";
            const s = r;
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
                r = a(182056),
                s = a(879113),
                t = a(392237),
                u = a(111677),
                o = a.n(u),
                d = a(968478);
            const c = o().aa6e3300,
                g = ({ retryMessage: e, ...l }, a) => {
                    const t = r.Z.isOnline();
                    return i.createElement(s.Z, (0, n.Z)({}, l, { icon: t ? void 0 : i.createElement(d.default, { style: m.icon }), retryMessage: t ? e : c }));
                },
                m = t.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = i.forwardRef(g);
        },
        980407: (e, l, a) => {
            a.d(l, { Z: () => y, w: () => m });
            var n = a(202784),
                i = a(325686),
                r = a(108362),
                s = a(386802),
                t = a(392237),
                u = a(652904),
                o = a(555079),
                d = a(625661),
                c = a(449067),
                g = a(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: l, backButtonType: a, backLocation: r, centerTitle: s, hideBackButton: t, history: u, isFullWidth: c, isLarge: g, middleControl: m, onBackClick: y, rightControl: k, secondaryBar: b, subtitle: _, title: F } = this.props,
                                { isModal: K } = this.context;
                            return n.createElement(i.Z, { style: K ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: a || (K ? "close" : "back"), backLocation: r, centerTitle: s, fixed: !K, hideBackButton: t, history: u, isFullWidth: c, isLarge: g, middleControl: m, onBackClick: y, ref: e, rightControl: k, secondaryBar: b, style: [K && p.appBarModal, l], subtitle: _, title: F, titleDomId: o.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: l } = this.props,
                                { isModal: a } = this.context;
                            l && (a ? window.requestAnimationFrame(() => l(e)) : l(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: l, children: a, containerStyle: s, documentTitle: t, isFullWidth: o, isLarge: d, renderHeader: m, title: y, withoutBottomBarMobile: k } = this.props,
                        { isModal: b } = this.context,
                        _ = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(u.Z, null, n.createElement(c.Z.Configure, { documentTitle: t, headerless: !0, title: y }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, b && p.rootModal] }, !b && _, n.createElement(r.Z, { isFullWidth: o, isLarge: d, style: [p.container, b && p.containerModal, s] }, b ? n.createElement(g.Z, { style: p.viewport }, _, a) : a), l ? n.createElement(i.Z, { style: [p.bottomBarModal, !b && !k && p.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: o, isLarge: d }, l)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = s.Z);
            const p = t.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: t.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = m;
        },
        349035: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n = a(202784),
                i = a(272175);
            const r = (0, a(500002).ZP)(({ staticContext: e, status: l = 404 }) => (e && (e.statusCode = l), n.createElement(i.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        25704: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n = a(202784),
                i = a(529356),
                r = a(111677),
                s = a.n(r),
                t = a(621416),
                u = a(443781);
            const o = s().j24c37b2,
                d = ({ Content: e, contentStyle: l, actionLabel: a = o, flag: r, graphic: s, graphicDisplayMode: d, headline: c, isFullHeightOnMobile: g, enableMaskForDismiss: m, onAction: p, onClose: y, onSecondaryAction: k, secondaryActionLabel: b, supportUrl: _, subtext: F, withCloseButton: K, shouldShowForLoggedOut: f = !1, shouldAddEducationFlagOnClose: h = !0, shouldAddEducationFlagOnSecondary: L = !0, shouldAddEducationFlagOnPrimary: v = !0 }) => {
                    const { loggedInUserId: T } = n.useContext(u.rC),
                        [S, M] = (0, t.m)(r),
                        U = n.useCallback(
                            (e) => {
                                v && M(), p && p(e);
                            },
                            [M, p, v],
                        ),
                        D = n.useCallback(() => {
                            h && M(), y && y();
                        }, [M, h, y]),
                        w = n.useCallback(
                            (e) => {
                                L && M(), k && k(e);
                            },
                            [M, k, L],
                        );
                    if (!S || (!T && !f)) return null;
                    return n.createElement(i.Z, { actionLabel: a, contentStyle: l, enableMaskForDismiss: m, graphic: s, graphicDisplayMode: d || "none", headline: c, isFullHeightOnMobile: g, onAction: U, onClose: D, onSecondaryAction: w, secondaryActionLabel: b, subtext: F, supportUrl: _, withCloseButton: K }, e ? n.createElement(e, null) : null);
                },
                c = n.memo(d);
        },
        56851: (e, l, a) => {
            a.d(l, { Z: () => y });
            var n = a(202784),
                i = a(420740),
                r = a(108362),
                s = a(731708),
                t = a(154003),
                u = a(392237),
                o = a(111677),
                d = a.n(o),
                c = a(349035);
            const g = "error-detail",
                m = d().e49537c2,
                p = d().a9ae1e78;
            class y extends n.PureComponent {
                render() {
                    return n.createElement(i.Z, { testID: g }, n.createElement(c.Z, null), n.createElement(r.Z, { style: k.root }, n.createElement(s.ZP, { align: "center", color: "gray700", style: k.retryText }, m), n.createElement(t.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const k = u.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        836640: (e, l, a) => {
            a.d(l, { J: () => k });
            a(136728);
            var n = a(214636),
                i = a(202784),
                r = a(614983),
                s = a.n(r),
                t = (a(585488), a(277660)),
                u = a.n(t),
                o = a(107267),
                d = a(673510),
                c = a(44527),
                g = a(663550),
                m = a(409438),
                p = a(443781);
            const y = n.Z;
            function k(e) {
                const l = u()(y, e.user),
                    { avatar: a, core: n, legacy: r, privacy: t, relationship_perspectives: m, verification: k } = l,
                    b = l.identity_profile_labels_highlighted_label?.label ? (0, c.H)(l.identity_profile_labels_highlighted_label.label) : void 0,
                    { cellClickable: _, decoration: F, displayMode: K } = e,
                    f = (function () {
                        const { viewerUserId: e } = i.useContext(p.rC);
                        return s()(!!e, "viewerUserId is undefined!"), e;
                    })(),
                    h = (0, o.useHistory)(),
                    L = i.useCallback(() => ("function" == typeof F ? F({ displayMode: K, viewerUserId: f, userId: r?.id_str ?? "" }) : F), [F, f, r, K]),
                    v = i.useCallback(() => {
                        n?.screen_name && h.push({ pathname: `/${n.screen_name}` });
                    }, [h, n]);
                return i.createElement(d.ZP, { affiliateBadgeInfo: b, avatarUri: a?.image_url || "", decoration: L(), displayMode: "UserDetailed", displayNameLabel: e.displayNameLabel, isBlueVerified: !!l.is_blue_verified, isFollowedBy: m?.followed_by ?? !1, isProtected: t?.protected ?? !1, isVerified: k?.verified ?? !1, name: n?.name || "", onCellClick: _ ? v : void 0, promotedItemType: g.bj.USER, screenName: n?.screen_name || "", userId: r?.id_str ?? "", verifiedType: k?.verified_type ?? void 0, withFollowsYou: !0 });
            }
            k.defaultProps = { cellClickable: !0, decoration: null, displayMode: m.Z.UserCompact };
        },
        621416: (e, l, a) => {
            a.d(l, { m: () => r });
            a(890103);
            var n = a(202784),
                i = a(175698);
            function r(e) {
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
            a.d(l, { Z: () => u });
            var n = a(202784),
                i = a(411916),
                r = a.n(i),
                s = a(373463),
                t = a.n(s);
            function u(e) {
                class l extends n.Component {
                    constructor(e, l) {
                        super(e, l), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        r()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? n.createElement(e, this.props) : null;
                    }
                }
                return t()(l, e);
            }
        },
        943245: (e, l, a) => {
            a.d(l, { It: () => c, mD: () => d, sE: () => t, t: () => u });
            var n = a(899492),
                i = a(733357);
            const r = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                s = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                t = (e) => {
                    const l = e.toLowerCase();
                    return s[l] || l;
                },
                u = (e, l) => {
                    if (l) return new Intl.DisplayNames([e], { type: "language" }).of(l);
                },
                o = (e, l) => {
                    const a = t(e);
                    return !(r.indexOf(a) > -1 && l < 20) && !("und" === e);
                },
                d = ({ displayTextRange: e, entities: l, language: a, text: r }) => {
                    if (!e || !o(a, e[1] - e[0])) return !1;
                    const s = ((e, l) => {
                            let a = n.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in l) a = a.concat(l[e].map((e) => e.indices));
                            return a.sort((e, l) => e[0] - l[0]), a;
                        })(r, l),
                        t = ((e, l, a) => {
                            const { accText: n, lastIndex: i } = a.reduce(({ accText: a, lastIndex: n }, i) => (i[1] <= n || l[1] <= i[0] ? { lastIndex: n, accText: a } : { accText: a + e.slice(n, i[0]), lastIndex: i[1] }), { accText: "", lastIndex: l[0] });
                            return n + e.slice(i, l[1]);
                        })(r, e, s);
                    return !(0, i.Z)(t) && o(a, t.length);
                },
                c = (e) => {
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
                r = a(396616),
                s = a(730895),
                t = a(824229),
                u = n.RegExp,
                o = u.prototype;
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
                        r = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var s in (e && (r.hasIndices = "d"), r)) i(s, r[s]);
                    return Object.getOwnPropertyDescriptor(o, "flags").get.call(l) !== n || a !== n;
                }) &&
                r(o, "flags", { configurable: !0, get: s });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-e96e9bea.bde161ea.js.map

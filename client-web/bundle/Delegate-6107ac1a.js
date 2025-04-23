"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-6107ac1a", "loader.AudioDock", "bundle.AudioSpaceReport", "loader.AudioContextVoiceMedia"],
    {
        937202: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AddMemberModal_members", selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "DelegationGroup", abstractKey: null, hash: "a50917ff28a2d3590cc0ddc6bee97efc" };
            const r = a;
        },
        216179: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                r,
                s,
                i,
                t,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "DelegateQuery", selections: [{ alias: null, args: (a = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "delegation_invitation_preferences", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, (i = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: 'viewer_v2(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "DelegateQuery",
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [r, s, (t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    i,
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
        793565: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "GroupCell_delegationHandleResults",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
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
                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "f1d5f5a978c30155b7ba6ef357835ac9",
            };
            const r = a;
        },
        730319: (e, l, n) => {
            n.d(l, { Z: () => F });
            var a,
                r,
                s,
                i,
                t,
                u,
                o,
                d,
                c,
                g,
                p,
                m,
                y,
                k = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "groupId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupDetailDelegateQuery",
                        selections: [(i = { alias: null, args: [{ kind: "Literal", name: "s", value: "4bf0" }], concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (s = [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }], storageKey: 'viewer_v2(s:"4bf0")' }), { alias: null, args: (t = [{ kind: "Variable", name: "id", variableName: "groupId" }]), concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_group", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "AddMemberModal_members" }, (u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [u, { args: null, kind: "FragmentSpread", name: "MemberCell_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [u, (o = { alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: s, type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "MembersList_delegationMemberships" }], storageKey: null }], storageKey: null }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "GroupDetailDelegateQuery",
                        selections: [
                            i,
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
                                                                    r,
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                    (g = {
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
                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    (p = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }),
                                                                    (y = {
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
                                                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
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
                                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [m], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
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
                                                    r,
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                            u,
                                            o,
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    u,
                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [d, { kind: "InlineFragment", selections: [u, c, g, p, y, r], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "ycvgE9P3RwfMvb07rfm5Cw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "GroupDetailDelegateQuery", operationKind: "query", text: null },
                };
            k.hash = "05c5bdb3c9856eec781137558bd5b4b4";
            const F = k;
        },
        69477: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a,
                r,
                s,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "membershipId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupMenuMutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "delegation_membership_id", variableName: "membershipId" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "DelegationGroup",
                                kind: "LinkedField",
                                name: "delegation_membership_delete",
                                plural: !1,
                                selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(i = { kind: "InlineFragment", selections: [s], type: "User", abstractKey: null })], storageKey: null }], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "GroupMenuMutation", selections: [{ alias: null, args: r, concreteType: "DelegationGroup", kind: "LinkedField", name: "delegation_membership_delete", plural: !1, selections: [s, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, i], storageKey: null }, s], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "35IlHo3PPoKCgjGN9PyBEQ", metadata: {}, name: "GroupMenuMutation", operationKind: "mutation", text: null },
                };
            t.hash = "518b068950bad80be45e2a361bd33b97";
            const u = t;
        },
        170497: (e, l, n) => {
            n.d(l, { Z: () => r });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "GroupMenu_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW", path: "legacy.screen_name" }], storageKey: null }, action: "THROW", path: "legacy" },
                ],
                type: "User",
                abstractKey: null,
                hash: "e282a3f218fad670169e9496a3d72ea0",
            };
            const r = a;
        },
        403021: (e, l, n) => {
            n.d(l, { Z: () => k });
            var a,
                r,
                s,
                i,
                t,
                u,
                o,
                d,
                c,
                g,
                p,
                m,
                y = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupsDelegateQuery",
                        selections: [
                            {
                                alias: null,
                                args: (a = [{ kind: "Literal", name: "s", value: "4bf0" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    (i = { alias: null, args: null, concreteType: "User", kind: "LinkedField", name: "user", plural: !1, selections: (s = [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null }),
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
                                args: a,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    i,
                                    {
                                        alias: "acceptedAdminGroups",
                                        args: u,
                                        concreteType: "DelegationGroup",
                                        kind: "LinkedField",
                                        name: "list_delegation_groups",
                                        plural: !0,
                                        selections: (m = [
                                            (g = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                            r,
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
                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    r,
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
                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                    g,
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
                                            { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, g, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [p, { kind: "InlineFragment", selections: s, type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }, r, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null },
                                        ]),
                                        storageKey: 'list_delegation_groups(roles:["Admin"],status:"Accepted")',
                                    },
                                    { alias: "acceptedContributorGroups", args: d, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: m, storageKey: 'list_delegation_groups(roles:["Contributor"],status:"Accepted")' },
                                    { alias: "pendingGroups", args: c, concreteType: "DelegationGroup", kind: "LinkedField", name: "list_delegation_groups", plural: !0, selections: m, storageKey: 'list_delegation_groups(roles:["Admin","Contributor"],status:"Pending")' },
                                ],
                                storageKey: 'viewer_v2(s:"4bf0")',
                            },
                        ],
                    },
                    params: { id: "5HUCt2nHUpQdiawbxVrpUA", metadata: {}, name: "GroupsDelegateQuery", operationKind: "query", text: null },
                };
            y.hash = "53f26b95cfeb2dab4346c822adfba72e";
            const k = y;
        },
        211150: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a,
                r,
                s = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: { plural: !0 },
                    name: "GroupsList_delegationGroups",
                    selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "handle_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }, { args: null, kind: "FragmentSpread", name: "GroupCell_delegationHandleResults" }, { args: null, kind: "FragmentSpread", name: "GroupMenu_user" }, { args: null, kind: "FragmentSpread", name: "InviteMenu_user" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, action: "THROW", path: "handle_results" }, { alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "role", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }, a, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [r], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null }],
                    type: "DelegationGroup",
                    abstractKey: null,
                };
            s.hash = "f43f717dbda5c22dfd2f42f201f067a7";
            const i = s;
        },
        354907: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                r,
                s,
                i,
                t,
                u = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "GroupsModalQuery",
                        selections: [
                            {
                                alias: null,
                                args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            { args: null, kind: "FragmentSpread", name: "UserName_user" },
                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null })], storageKey: null },
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
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "GroupsModalQuery",
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
                                                    r,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, s], storageKey: null },
                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                                            { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                            { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [i], storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                            { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                            { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
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
                    params: { id: "p8Xg0Q4L4E08_SwyD-o8cg", metadata: {}, name: "GroupsModalQuery", operationKind: "query", text: null },
                };
            u.hash = "c55828f2b2ef042b53e1bb24bdc34829";
            const o = u;
        },
        242454: (e, l, n) => {
            n.d(l, { Z: () => c });
            var a = n(807896),
                r = n(202784),
                s = n(325686),
                i = n(731708),
                t = n(58881),
                u = n(530732),
                o = n(392237);
            const d = o.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                c = ({ align: e = "center", color: l, label: n, ...c }) => {
                    const g = t.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: o.default.theme.colors[l], insetFocusRing: !0 });
                    return r.createElement(s.Z, { style: d.container }, r.createElement(u.Z, (0, a.Z)({}, c, { interactiveStyles: g, style: d.root }), r.createElement(i.ZP, { align: e, color: l }, n)));
                };
        },
        661810: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = n(202784),
                r = n(325686),
                s = n(392237);
            function i({ spacing: e, style: l }) {
                return a.createElement(r.Z, { role: "separator", style: [t.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, l] });
            }
            const t = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, l, n) => {
            n.d(l, { Z: () => p });
            var a = n(202784),
                r = n(476984),
                s = n.n(r),
                i = n(143778),
                t = n(750410),
                u = n(682830);
            const o = "failed",
                d = "loaded",
                c = "loading",
                g = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const l = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!l && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: l, failureMessage: n, fetchStatus: r, icon: s, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: y, retryable: k } = this.props;
                    switch (r) {
                        case o:
                            return k ? a.createElement(t.Z, { icon: s, onRequestRetry: d, retryMessage: y }) : n ? a.createElement(u.m, { failureMessage: n }) : m();
                        case c:
                            return a.createElement(u.J, { "aria-label": e, color: l, loadingMessage: i });
                        case g:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        420412: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(202784),
                r = n(325686),
                s = n(235902),
                i = n(885015),
                t = n(392237);
            function u({ borderColor: e = "borderColor", isSlim: l = !1, label: n }) {
                const { isWebRedesign: u } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? o[e] : { backgroundColor: t.default.theme.colors[e] ?? t.default.theme.colors.borderColor };
                return n ? a.createElement(i.Z, { style: !l && o.root, withGutter: !0 }, a.createElement(r.Z, { style: o.gapColumn }, a.createElement(r.Z, { style: [o.gap, d] })), a.createElement(r.Z, { style: o.gapText }, n), a.createElement(r.Z, { style: o.gapColumn }, a.createElement(r.Z, { style: [o.gap, d] }))) : a.createElement(r.Z, { style: [!l && o.root, u() && o.rootRedesign, o.gap, d] });
            }
            const o = t.default.create((e) => ({ borderColor: { backgroundColor: t.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: t.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(807896),
                r = n(202784),
                s = n(325686),
                i = n(392237);
            class t extends r.Component {
                render() {
                    const { children: e, style: l, withGutter: n, ...i } = this.props,
                        t = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, u.column, n && u.withGutterColumn] }));
                    return r.createElement(s.Z, (0, a.Z)({ style: [l, u.root, n && u.withGutter] }, i), t);
                }
            }
            t.defaultProps = { withGutter: !1 };
            const u = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                o = t;
        },
        779610: (e, l, n) => {
            n.d(l, { Z: () => d });
            var a = n(202784),
                r = n(325686),
                s = n(191796),
                i = n(58399),
                t = n(731708),
                u = n(952428),
                o = n(392237);
            const d = (e) => {
                    const { decoration: l, description: n, disabled: d = !1, isActive: g = !1, label: p, link: m, onPress: y, paddingHorizontal: k, renderRightContent: F, role: b = "tab", styleOverride: K, testID: _ = "pivot", thumbnail: h, thumbnailSize: f, withoutArrow: L = !1 } = e,
                        S = [c.thumbnailContainer, "medium" === f && c.thumbnailContainerMedium],
                        T = "string" == typeof p ? a.createElement(t.ZP, null, p) : p,
                        v = "object" == typeof m && m.external && !m.openInSameFrame,
                        D = n ? ("string" == typeof n ? a.createElement(t.ZP, { color: "gray700", size: "subtext2", testID: `${_}-description` }, n) : n) : null,
                        C = a.useMemo(() => ("space0" === k ? { paddingHorizontal: 0 } : { paddingHorizontal: k ? o.default.theme.spaces[k] : o.default.theme.componentDimensions.gutterHorizontal }), [k]);
                    return a.createElement(u.Z, { "aria-selected": "tab" === b ? g : null, disabled: d, link: d ? void 0 : m, onPress: y, role: b, style: [c.root, C, d && c.disabled, K], testID: _, withInteractiveStyling: !!m || !!y }, a.createElement(r.Z, { style: c.contentContainer }, h ? a.createElement(r.Z, { style: S }, h) : null, a.createElement(r.Z, { style: c.content }, T, D), F ? F() : null, (!m && !y) || d || L ? null : v ? a.createElement(s.default, { style: c.icon }) : a.createElement(i.default, { style: c.icon })), l);
                },
                c = o.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${o.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(202784),
                r = n(731708),
                s = n(392237);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: l } = this.props;
                            return a.createElement(r.ZP, { link: l, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: l, learnMoreLink: n } = this.props,
                        s = t.root;
                    return l && n ? a.createElement(r.ZP, { color: "gray700", size: "subtext2", style: s }, e, " ", this._renderLearnMore()) : a.createElement(r.ZP, { color: "gray700", size: "subtext2", style: s }, e);
                }
            }
            const t = s.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                u = i;
        },
        662678: (e, l, n) => {
            n.d(l, { G: () => r, Z: () => a });
            n(136728);
            const a = function (e, l) {
                return r(e, l);
            };
            function r(e, l) {
                return e.reduce(
                    (n, a, r) => {
                        const s = l ? l(a, r, e) : !!a;
                        return s && n[0].push(a), !s && n[1].push(a), n;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, l, n) => {
            var a = n(821176);
            e.exports = function () {
                var e = a(this),
                    l = "";
                return e.hasIndices && (l += "d"), e.global && (l += "g"), e.ignoreCase && (l += "i"), e.multiline && (l += "m"), e.dotAll && (l += "s"), e.unicode && (l += "u"), e.unicodeSets && (l += "v"), e.sticky && (l += "y"), l;
            };
        },
        890103: (e, l, n) => {
            var a = n(609859),
                r = n(807400),
                s = n(396616),
                i = n(730895),
                t = n(824229),
                u = a.RegExp,
                o = u.prototype;
            r &&
                t(function () {
                    var e = !0;
                    try {
                        u(".", "d");
                    } catch (l) {
                        e = !1;
                    }
                    var l = {},
                        n = "",
                        a = e ? "dgimsy" : "gimsy",
                        r = function (e, a) {
                            Object.defineProperty(l, e, {
                                get: function () {
                                    return (n += a), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var i in (e && (s.hasIndices = "d"), s)) r(i, s[i]);
                    return Object.getOwnPropertyDescriptor(o, "flags").get.call(l) !== a || n !== a;
                }) &&
                s(o, "flags", { configurable: !0, get: i });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-6107ac1a.6b8ac8aa.js.map

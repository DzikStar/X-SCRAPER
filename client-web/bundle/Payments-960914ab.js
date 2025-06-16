"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-960914ab"],
    {
        932525: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ActionNeededList_slice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                            { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "TransactionItem_xpayments" }], type: "XPaymentsTransaction", abstractKey: null },
                            { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "NoticeItem_xpayments" }], type: "XPaymentsCustomerNotice", abstractKey: null },
                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                        ],
                        storageKey: null,
                    },
                ],
                type: "XPaymentsCustomerActionsSlice",
                abstractKey: null,
                hash: "5fa1a4ee900a82a4dcd22c78b1591427",
            };
            const i = n;
        },
        256179: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                i,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "ActivityScreenGetSearchFiltersQuery",
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XPaymentsTransactionSearchFilter",
                                kind: "LinkedField",
                                name: "get_payments_transaction_search_filters",
                                plural: !0,
                                selections: [
                                    (n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            (s = {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null },
                                                ],
                                                type: "XPaymentsTransactionSearchPresetFilterDetails",
                                                abstractKey: null,
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "ActivityScreenGetSearchFiltersQuery", selections: [{ alias: null, args: null, concreteType: "XPaymentsTransactionSearchFilter", kind: "LinkedField", name: "get_payments_transaction_search_filters", plural: !0, selections: [n, i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "7p2L0l3ylF7kbHTjOJBS3A", metadata: {}, name: "ActivityScreenGetSearchFiltersQuery", operationKind: "query", text: null },
                };
            r.hash = "77554f33a2505beb80a0dcd2f37913fa";
            const t = r;
        },
        655729: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "BankCardPollerQuery",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "id", variableName: "id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "XPaymentsBankCardLinkingSession",
                                kind: "LinkedField",
                                name: "get_bank_card_linking_session",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "rejection_reason", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "BankCardPollerQuery", selections: i },
                    params: { id: "r49I5NXy5LtY9HqjzpTubA", metadata: {}, name: "BankCardPollerQuery", operationKind: "query", text: null },
                };
            s.hash = "9857083eaf2ad3aaf50054194774f8ce";
            const r = s;
        },
        415706: (e, l, a) => {
            a.d(l, { Z: () => r });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "taskId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "CustomerTasksCarouselDismissTaskMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "8cce" },
                                    { kind: "Variable", name: "task_id", variableName: "taskId" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "dismiss_customer_task",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "CustomerTasksCarouselDismissTaskMutation", selections: i },
                    params: { id: "_Oy4d_aH9GpiEuz5jgqU-Q", metadata: {}, name: "CustomerTasksCarouselDismissTaskMutation", operationKind: "mutation", text: null },
                };
            s.hash = "1e5b539a44950f857573fb1f5dd08e2b";
            const r = s;
        },
        882956: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "NoticeItem_xpayments",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "call_to_action", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "call_to_action_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "level", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "topics", storageKey: null },
                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                ],
                type: "XPaymentsCustomerNotice",
                abstractKey: null,
                hash: "86ee142dadfaadde6c7ecc061afe1601",
            };
            const i = n;
        },
        120721: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                s,
                r,
                t,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "user_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "P2PTransferParticipantQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "user_id" },
                                    { kind: "Literal", name: "s", value: "8cce" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }, { args: null, kind: "FragmentSpread", name: "UserDetails_user" }], storageKey: null }],
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
                        name: "P2PTransferParticipantQuery",
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
                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [t], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                    params: { id: "qs9bfc9XXzRDzydNmtp-1g", metadata: {}, name: "P2PTransferParticipantQuery", operationKind: "query", text: null },
                };
            d.hash = "30b29b90f122eae14d40393775e9e8df";
            const o = d;
        },
        597897: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                s,
                r,
                t,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PaymentMethodPollerQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "XPaymentsPaymentMethod",
                                kind: "LinkedField",
                                name: "get_payment_method",
                                plural: !1,
                                selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(t = { kind: "InlineFragment", selections: (r = [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }]), type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }), (u = { kind: "InlineFragment", selections: r, type: "XPaymentsCreditCardPaymentMethod", abstractKey: null })], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "PaymentMethodPollerQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_method", plural: !1, selections: [s, { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t, u], storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }] },
                    params: { id: "UF7VUY_kIMLH98wWnXXcfQ", metadata: {}, name: "PaymentMethodPollerQuery", operationKind: "query", text: null },
                };
            d.hash = "5fa5cabc8880578503a5697365528071";
            const o = d;
        },
        724983: (e, l, a) => {
            a.d(l, { Z: () => y });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                g = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "RecentParticipantsQuery", selections: [{ alias: null, args: (n = [{ kind: "Literal", name: "s", value: "8cce" }]), concreteType: "User", kind: "LinkedField", name: "get_payments_recent_participants", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "UserCell_user" }, (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "UserDetails_user" }, (s = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: 'get_payments_recent_participants(s:"8cce")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "RecentParticipantsQuery",
                        selections: [
                            {
                                alias: null,
                                args: n,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "get_payments_recent_participants",
                                plural: !0,
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
                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                            (t = { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }),
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
                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (d = { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [r], storageKey: null }),
                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                    (c = { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }),
                                                    (m = { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }),
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
                                    i,
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                    { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [r, t], storageKey: null }, d, o, c, m], storageKey: null }], storageKey: null },
                                    u,
                                    s,
                                ],
                                storageKey: 'get_payments_recent_participants(s:"8cce")',
                            },
                        ],
                    },
                    params: { id: "cXWZkt5AgDnGLXm6SP8XfA", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "RecentParticipantsQuery", operationKind: "query", text: null },
                };
            g.hash = "098d419144f289b29c1421123e7cfb25";
            const y = g;
        },
        73863: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                i,
                s,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ScreenNamePaneQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "8cce" },
                                    { kind: "Variable", name: "screen_name", variableName: "screenName" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
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
                        name: "ScreenNamePaneQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_screen_name",
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
                                            { kind: "InlineFragment", selections: [s, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "OVYbL-iJvJ51EDfDLdg03A", metadata: {}, name: "ScreenNamePaneQuery", operationKind: "query", text: null },
                };
            t.hash = "dd75ff6118c21f4b212f173f0b0fd820";
            const u = t;
        },
        300583: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "TermsPaneMutation", selections: (n = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], concreteType: "XPaymentsCustomer", kind: "LinkedField", name: "prefill_customer_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: 'prefill_customer_info(s:"4721")' }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "TermsPaneMutation", selections: n }, params: { id: "8EpXWXN59mzyZfUjHAdmNQ", metadata: {}, name: "TermsPaneMutation", operationKind: "mutation", text: null } };
            i.hash = "71cfa7d0ef61390a034ad257e19927b8";
            const s = i;
        },
        515207: (e, l, a) => {
            a.d(l, { Z: () => k });
            var n,
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
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "TransactionItem_xpayments",
                    selections: [
                        (n = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "base_amount_micro", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "total_fees_micro", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "availability_date", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "authorization_method", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "transaction_rail", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "details",
                            plural: !1,
                            selections: [
                                (i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                {
                                    kind: "InlineFragment",
                                    selections: (o = [
                                        (d = {
                                            alias: null,
                                            args: null,
                                            concreteType: "XPaymentsPaymentMethod",
                                            kind: "LinkedField",
                                            name: "payment_method",
                                            plural: !1,
                                            selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (t = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [r, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
                                            storageKey: null,
                                        }),
                                    ]),
                                    type: "XPaymentsDepositDetails",
                                    abstractKey: null,
                                },
                                { kind: "InlineFragment", selections: o, type: "XPaymentsWithdrawalDetails", abstractKey: null },
                                {
                                    kind: "InlineFragment",
                                    selections: [
                                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "receiver_results", plural: !1, selections: (c = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserAvatar_user" }, { args: null, kind: "FragmentSpread", name: "UserName_user" }, s, { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }]), storageKey: null },
                                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: c, storageKey: null },
                                    ],
                                    type: "XPaymentsTransferDetails",
                                    abstractKey: null,
                                },
                                {
                                    kind: "InlineFragment",
                                    selections: (g = [
                                        (m = {
                                            alias: null,
                                            args: null,
                                            concreteType: "XPaymentsMerchantDetails",
                                            kind: "LinkedField",
                                            name: "merchant_details",
                                            plural: !1,
                                            selections: [
                                                n,
                                                t,
                                                { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "XPaymentsLocation",
                                                    kind: "LinkedField",
                                                    name: "location",
                                                    plural: !1,
                                                    selections: [
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "XPaymentsAddress",
                                                            kind: "LinkedField",
                                                            name: "address",
                                                            plural: !1,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "city", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "country_code", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "postal_code", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "region", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "street", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "street2", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, kind: "ScalarField", name: "latitude", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "longitude", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "merchant_results", plural: !1, selections: c, storageKey: null },
                                            ],
                                            storageKey: null,
                                        }),
                                    ]),
                                    type: "XPaymentsBankingDepositDetails",
                                    abstractKey: null,
                                },
                                { kind: "InlineFragment", selections: g, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                { kind: "InlineFragment", selections: [m, d], type: "XPaymentsPaymentDetails", abstractKey: null },
                                { kind: "InlineFragment", selections: [m, d, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                            ],
                            storageKey: null,
                        },
                        u,
                    ],
                    type: "XPaymentsTransaction",
                    abstractKey: null,
                };
            y.hash = "cec82f10572c0f1831644c67da15dc5d";
            const k = y;
        },
        860648: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "TransactionList_slice",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XPaymentsTransaction",
                        kind: "LinkedField",
                        name: "items",
                        plural: !0,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                            { args: null, kind: "FragmentSpread", name: "TransactionItem_xpayments" },
                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "XPaymentsTransactionsSlice",
                abstractKey: null,
                hash: "1a3d17a5315f17fcf584b279cf46e20c",
            };
            const i = n;
        },
        771469: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserDetails_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { args: null, kind: "FragmentSpread", name: "UserAvatar_user" },
                    { args: null, kind: "FragmentSpread", name: "UserName_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "775686c6f111900c5c380b590fce094b",
            };
            const i = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-960914ab.8314deea.js.map

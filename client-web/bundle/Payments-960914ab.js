"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-960914ab"],
    {
        932525: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
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
            const i = l;
        },
        256179: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t,
                s = {
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
                                    (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            (t = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "ActivityScreenGetSearchFiltersQuery", selections: [{ alias: null, args: null, concreteType: "XPaymentsTransactionSearchFilter", kind: "LinkedField", name: "get_payments_transaction_search_filters", plural: !0, selections: [l, i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: null }], storageKey: null }] },
                    params: { id: "7p2L0l3ylF7kbHTjOJBS3A", metadata: {}, name: "ActivityScreenGetSearchFiltersQuery", operationKind: "query", text: null },
                };
            s.hash = "77554f33a2505beb80a0dcd2f37913fa";
            const r = s;
        },
        655729: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "BankCardPollerQuery", selections: i },
                    params: { id: "r49I5NXy5LtY9HqjzpTubA", metadata: {}, name: "BankCardPollerQuery", operationKind: "query", text: null },
                };
            t.hash = "9857083eaf2ad3aaf50054194774f8ce";
            const s = t;
        },
        882956: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
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
            const i = l;
        },
        120721: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l,
                i,
                t,
                s,
                r,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "user_id" }]),
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }, { args: null, kind: "FragmentSpread", name: "UserDetails_user" }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
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
                                            t,
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }], storageKey: null },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                    params: { id: "zbI9_Qu1h8q-s3h9Url6CA", metadata: {}, name: "P2PTransferParticipantQuery", operationKind: "query", text: null },
                };
            d.hash = "83db4417d88d0f7cedaf205e10aa6842";
            const o = d;
        },
        597897: (e, a, n) => {
            n.d(a, { Z: () => o });
            var l,
                i,
                t,
                s,
                r,
                u,
                d = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
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
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(r = { kind: "InlineFragment", selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }]), type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }), (u = { kind: "InlineFragment", selections: s, type: "XPaymentsCreditCardPaymentMethod", abstractKey: null })], storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "PaymentMethodPollerQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_method", plural: !1, selections: [t, { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, r, u], storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }] },
                    params: { id: "UF7VUY_kIMLH98wWnXXcfQ", metadata: {}, name: "PaymentMethodPollerQuery", operationKind: "query", text: null },
                };
            d.hash = "5fa5cabc8880578503a5697365528071";
            const o = d;
        },
        724983: (e, a, n) => {
            n.d(a, { Z: () => y });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                c,
                m,
                g = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "RecentParticipantsQuery", selections: [{ alias: null, args: (l = [{ kind: "Literal", name: "s", value: "8cce" }]), concreteType: "User", kind: "LinkedField", name: "get_payments_recent_participants", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "UserCell_user" }, (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { args: null, kind: "FragmentSpread", name: "UserDetails_user" }, (t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: 'get_payments_recent_participants(s:"8cce")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "RecentParticipantsQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "get_payments_recent_participants",
                                plural: !0,
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
                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                            (r = { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }),
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
                                                    (d = { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [s], storageKey: null }),
                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                    (c = { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }),
                                                    (m = { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }),
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                    { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [s, r], storageKey: null }, d, o, c, m], storageKey: null }], storageKey: null },
                                    u,
                                    t,
                                ],
                                storageKey: 'get_payments_recent_participants(s:"8cce")',
                            },
                        ],
                    },
                    params: { id: "xvZnXh4_2Bi2wZkMH18DHw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "RecentParticipantsQuery", operationKind: "query", text: null },
                };
            g.hash = "098d419144f289b29c1421123e7cfb25";
            const y = g;
        },
        73863: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "screenName" }]),
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
                                selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
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
                                            { kind: "InlineFragment", selections: [t, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "OVYbL-iJvJ51EDfDLdg03A", metadata: {}, name: "ScreenNamePaneQuery", operationKind: "query", text: null },
                };
            r.hash = "dd75ff6118c21f4b212f173f0b0fd820";
            const u = r;
        },
        300583: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "TermsPaneMutation", selections: (l = [{ alias: null, args: [{ kind: "Literal", name: "s", value: "4721" }], concreteType: "XPaymentsCustomer", kind: "LinkedField", name: "prefill_customer_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: 'prefill_customer_info(s:"4721")' }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "TermsPaneMutation", selections: l }, params: { id: "8EpXWXN59mzyZfUjHAdmNQ", metadata: {}, name: "TermsPaneMutation", operationKind: "mutation", text: null } };
            i.hash = "71cfa7d0ef61390a034ad257e19927b8";
            const t = i;
        },
        515207: (e, a, n) => {
            n.d(a, { Z: () => k });
            var l,
                i,
                t,
                s,
                r,
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
                        (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
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
                                            selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [s, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
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
                                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "receiver_results", plural: !1, selections: (c = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [i, { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserAvatar_user" }, { args: null, kind: "FragmentSpread", name: "UserName_user" }, t, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }]), storageKey: null },
                                        { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: c, storageKey: null },
                                    ],
                                    type: "XPaymentsTransferDetails",
                                    abstractKey: null,
                                },
                                { kind: "InlineFragment", selections: (g = [(m = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [l, r, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null },
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
            y.hash = "5c2725be2c85d17b7805d90b468e617c";
            const k = y;
        },
        860648: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
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
            const i = l;
        },
        771469: (e, a, n) => {
            n.d(a, { Z: () => i });
            var l = {
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
            const i = l;
        },
        940211: (e, a, n) => {
            n.d(a, { b: () => l });
            const l = Object.freeze({ Cashback: "Cashback", Unspecified: "Unspecified", UserInterest: "UserInterest", UserMain: "UserMain" });
        },
        683799: (e, a, n) => {
            n.d(a, { t: () => l });
            const l = Object.freeze({ Checking: "Checking", Savings: "Savings" });
        },
        605446: (e, a, n) => {
            n.d(a, { T: () => l });
            const l = Object.freeze({ BankCardLinkingSessionRejectionReasonCardAlreadyExists: "BankCardLinkingSessionRejectionReasonCardAlreadyExists", BankCardLinkingSessionRejectionReasonInaccurateCardDetails: "BankCardLinkingSessionRejectionReasonInaccurateCardDetails", BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard: "BankCardLinkingSessionRejectionReasonProviderFailedToAuthorizeCard", BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress: "BankCardLinkingSessionRejectionReasonProviderFailedToVerifyAddress", BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName: "BankCardLinkingSessionRejectionReasonProviderFailedToVerifyCardholderName", BankCardLinkingSessionRejectionReasonProviderInternalFailure: "BankCardLinkingSessionRejectionReasonProviderInternalFailure", BankCardLinkingSessionRejectionReasonUnspecified: "BankCardLinkingSessionRejectionReasonUnspecified", BankCardLinkingSessionRejectionReasonUnsupportedCardType: "BankCardLinkingSessionRejectionReasonUnsupportedCardType", BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry: "BankCardLinkingSessionRejectionReasonUnsupportedIssuerCountry", BankCardLinkingSessionRejectionReasonUnusableCard: "BankCardLinkingSessionRejectionReasonUnusableCard" });
        },
        622769: (e, a, n) => {
            n.d(a, { G: () => l });
            const l = Object.freeze({ BankCardLinkingSessionStatusAuthorized: "BankCardLinkingSessionStatusAuthorized", BankCardLinkingSessionStatusPending: "BankCardLinkingSessionStatusPending", BankCardLinkingSessionStatusRejected: "BankCardLinkingSessionStatusRejected", BankCardLinkingSessionStatusUnspecified: "BankCardLinkingSessionStatusUnspecified" });
        },
        234107: (e, a, n) => {
            n.d(a, { M: () => l });
            const l = Object.freeze({ BankCardLinkingSessionThemeDark: "BankCardLinkingSessionThemeDark", BankCardLinkingSessionThemeDimmed: "BankCardLinkingSessionThemeDimmed", BankCardLinkingSessionThemeLight: "BankCardLinkingSessionThemeLight", BankCardLinkingSessionThemeUnspecified: "BankCardLinkingSessionThemeUnspecified" });
        },
        492646: (e, a, n) => {
            n.d(a, { U: () => l });
            const l = Object.freeze({ AmericanExpress: "AmericanExpress", Mastercard: "Mastercard", Visa: "Visa" });
        },
        929512: (e, a, n) => {
            n.d(a, { l: () => l });
            const l = Object.freeze({ Charge: "Charge", Combo: "Combo", Credit: "Credit", Debit: "Debit", DeferredDebit: "DeferredDebit", Prepaid: "Prepaid" });
        },
        402229: (e, a, n) => {
            n.d(a, { R: () => l });
            const l = Object.freeze({ ClaimTransferDecisionAccept: "ClaimTransferDecisionAccept", ClaimTransferDecisionReject: "ClaimTransferDecisionReject", ClaimTransferDecisionUnspecified: "ClaimTransferDecisionUnspecified" });
        },
        976352: (e, a, n) => {
            n.d(a, { C: () => l });
            const l = Object.freeze({ ContactSupport: "ContactSupport", Deposit: "Deposit", GetPremium: "GetPremium", KycDocumentUpload: "KycDocumentUpload", KycVerification: "KycVerification", LearnMore: "LearnMore", SelfieVerification: "SelfieVerification" });
        },
        988291: (e, a, n) => {
            n.d(a, { S: () => l });
            const l = Object.freeze({ Alert: "Alert", Info: "Info", Warning: "Warning" });
        },
        829464: (e, a, n) => {
            n.d(a, { h: () => l });
            const l = Object.freeze({ Interest: "Interest", Premium: "Premium" });
        },
        463963: (e, a, n) => {
            n.d(a, { E: () => l });
            const l = Object.freeze({ DocumentTypeMonthlyStatement: "DocumentTypeMonthlyStatement", DocumentTypeUnspecified: "DocumentTypeUnspecified" });
        },
        360871: (e, a, n) => {
            n.d(a, { L: () => l });
            const l = Object.freeze({ Adyen: "Adyen", Plaid: "Plaid", Stripe: "Stripe", Unknown: "Unknown" });
        },
        633806: (e, a, n) => {
            n.d(a, { $: () => l });
            const l = Object.freeze({ IssuedCardShippingStatusCanceled: "IssuedCardShippingStatusCanceled", IssuedCardShippingStatusDelivered: "IssuedCardShippingStatusDelivered", IssuedCardShippingStatusFailure: "IssuedCardShippingStatusFailure", IssuedCardShippingStatusPending: "IssuedCardShippingStatusPending", IssuedCardShippingStatusReturned: "IssuedCardShippingStatusReturned", IssuedCardShippingStatusShipped: "IssuedCardShippingStatusShipped", IssuedCardShippingStatusSubmitted: "IssuedCardShippingStatusSubmitted", IssuedCardShippingStatusUnspecified: "IssuedCardShippingStatusUnspecified" });
        },
        642004: (e, a, n) => {
            n.d(a, { W: () => l });
            const l = Object.freeze({ IssuedCardTypePhysical: "IssuedCardTypePhysical", IssuedCardTypeUnspecified: "IssuedCardTypeUnspecified", IssuedCardTypeVirtual: "IssuedCardTypeVirtual" });
        },
        87877: (e, a, n) => {
            n.d(a, { U: () => l });
            const l = Object.freeze({ PaymentMethodFilterFunding: "PaymentMethodFilterFunding", PaymentMethodFilterSpending: "PaymentMethodFilterSpending", PaymentMethodFilterUnspecified: "PaymentMethodFilterUnspecified" });
        },
        922281: (e, a, n) => {
            n.d(a, { D: () => l });
            const l = Object.freeze({ Active: "Active", Canceled: "Canceled", Inactive: "Inactive", Invalid: "Invalid", LoginRequired: "LoginRequired", Pending: "Pending", Revoked: "Revoked", ScaRequired: "ScaRequired", Unspecified: "Unspecified" });
        },
        880428: (e, a, n) => {
            n.d(a, { O: () => l, x: () => i });
            const l = Object.freeze({ Banking: "Banking", Cashback: "Cashback", Ecommerce: "Ecommerce", Interest: "Interest", Issuing: "Issuing", Transfer: "Transfer" }),
                i = l;
        },
        364539: (e, a, n) => {
            n.d(a, { m: () => l });
            const l = Object.freeze({ RequestTransferDecisionAccept: "RequestTransferDecisionAccept", RequestTransferDecisionReject: "RequestTransferDecisionReject", RequestTransferDecisionUnspecified: "RequestTransferDecisionUnspecified" });
        },
        171463: (e, a, n) => {
            n.d(a, { a: () => l });
            const l = Object.freeze({ Age: "Age", Allowlist: "Allowlist", BirthDate: "BirthDate", Geography: "Geography", PhoneNumber: "PhoneNumber", PremiumOrVerifiedOrganization: "PremiumOrVerifiedOrganization", Safety: "Safety", Sanctions: "Sanctions", TwoFactorAuth: "TwoFactorAuth", Unknown: "Unknown" });
        },
        39431: (e, a, n) => {
            n.d(a, { _: () => l });
            const l = Object.freeze({ ThreeDsAuthenticationResponseAllow: "ThreeDsAuthenticationResponseAllow", ThreeDsAuthenticationResponseDeny: "ThreeDsAuthenticationResponseDeny", ThreeDsAuthenticationResponseUnspecified: "ThreeDsAuthenticationResponseUnspecified" });
        },
        671830: (e, a, n) => {
            n.d(a, { W: () => l });
            const l = Object.freeze({ Clock: "Clock", CreditCardBack: "CreditCardBack", FollowArrows: "FollowArrows", PeopleStroke: "PeopleStroke" });
        },
        810088: (e, a, n) => {
            n.d(a, { g: () => l });
            const l = Object.freeze({ AuthorizationClosed: "AuthorizationClosed", AuthorizationOpen: "AuthorizationOpen", AwaitingRequestAcceptance: "AwaitingRequestAcceptance", AwaitingUnrecognizedConfirmation: "AwaitingUnrecognizedConfirmation", Cancelled: "Cancelled", Expired: "Expired", Failed: "Failed", Hold: "Hold", Pending: "Pending", PendingRecipientAcceptance: "PendingRecipientAcceptance", PendingRecipientAction: "PendingRecipientAction", PendingRecipientOnboarding: "PendingRecipientOnboarding", PendingRequestAcceptance: "PendingRequestAcceptance", PendingReview: "PendingReview", PinVerificationRequired: "PinVerificationRequired", RejectedByRecipient: "RejectedByRecipient", RequestRejected: "RequestRejected", RequestVerificationRequired: "RequestVerificationRequired", Settled: "Settled", SoftSettled: "SoftSettled", Unspecified: "Unspecified", VerificationRequired: "VerificationRequired" });
        },
        357818: (e, a, n) => {
            n.d(a, { x: () => l });
            const l = Object.freeze({ AtmWithdrawal: "AtmWithdrawal", Deposit: "Deposit", DisputeCredit: "DisputeCredit", Payment: "Payment", Refund: "Refund", Reverse: "Reverse", Transfer: "Transfer", Unspecified: "Unspecified", Withdraw: "Withdraw" });
        },
        539660: (e, a, n) => {
            n.d(a, { P: () => l });
            const l = Object.freeze({ Cancelled: "Cancelled", InReview: "InReview", RejectedByAutoReview: "RejectedByAutoReview", RejectedByManualReview: "RejectedByManualReview", RejectedByUnsupportedRegion: "RejectedByUnsupportedRegion", RejectedCardPaymentsDisabled: "RejectedCardPaymentsDisabled", RejectedLimitsExceeded: "RejectedLimitsExceeded", RejectedNotSufficientFunds: "RejectedNotSufficientFunds", Returned: "Returned", ReversedByAgent: "ReversedByAgent", UnrecognizedActivityConfirmed: "UnrecognizedActivityConfirmed", UnrecognizedActivityRejected: "UnrecognizedActivityRejected", Unspecified: "Unspecified" });
        },
        413722: (e, a, n) => {
            n.d(a, { O: () => l });
            const l = Object.freeze({ BackupCode: "BackupCode", Passkey: "Passkey", Sms: "Sms", Totp: "Totp", U2fSecurityKey: "U2fSecurityKey" });
        },
        402311: (e, a, n) => {
            n.d(a, { n: () => l });
            const l = Object.freeze({ UnrecognizedPaymentDecisionAccept: "UnrecognizedPaymentDecisionAccept", UnrecognizedPaymentDecisionReject: "UnrecognizedPaymentDecisionReject", UnrecognizedPaymentDecisionUnspecified: "UnrecognizedPaymentDecisionUnspecified" });
        },
        56495: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "challengeId" }), (i = { defaultValue: null, kind: "LocalArgument", name: "challengeResponse" }), (t = { defaultValue: null, kind: "LocalArgument", name: "loginRequestId" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "finishTwoFactorAuthQuery",
                        selections: (s = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "8cce" }],
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: [
                                            { kind: "Variable", name: "challenge_id", variableName: "challengeId" },
                                            { kind: "Variable", name: "challenge_response", variableName: "challengeResponse" },
                                            { kind: "Variable", name: "login_request_id", variableName: "loginRequestId" },
                                        ],
                                        concreteType: "XPaymentsFinishTwoFactorLogin",
                                        kind: "LinkedField",
                                        name: "xp_finish_two_factor_auth_challenge",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsTwoFactorLoginVerificationRequest",
                                                kind: "LinkedField",
                                                name: "login_request",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "error", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"8cce")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t, i], kind: "Operation", name: "finishTwoFactorAuthQuery", selections: s },
                    params: { id: "582dmGn3a2PeBPnHqltcUQ", metadata: {}, name: "finishTwoFactorAuthQuery", operationKind: "query", text: null },
                };
            r.hash = "68f52c62e3f134dcfee3cc1376e38747";
            const u = r;
        },
        297679: (e, a, n) => {
            n.d(a, { Z: () => h });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                c,
                m,
                g,
                y,
                k,
                p,
                _,
                F,
                K,
                S,
                f = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "count" },
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useActionableItemsQuery",
                        selections: [
                            {
                                alias: "get_payments_customer_actions",
                                args: [(i = { kind: "Literal", name: "s", value: "8cce" })],
                                concreteType: "XPaymentsCustomerActionsSlice",
                                kind: "LinkedField",
                                name: "__useActionableItemsQuery_TransactionActions_slice_slice",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "items", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null })], storageKey: null },
                                    { args: null, kind: "FragmentSpread", name: "ActionNeededList_slice" },
                                    (s = {
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
                                    (r = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                ],
                                storageKey: '__useActionableItemsQuery_TransactionActions_slice_slice(s:"8cce")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "useActionableItemsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (u = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, i]),
                                concreteType: "XPaymentsCustomerActionsSlice",
                                kind: "LinkedField",
                                name: "get_payments_customer_actions",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "items",
                                        plural: !0,
                                        selections: [
                                            t,
                                            { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCustomerAction" },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                    { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "details",
                                                        plural: !1,
                                                        selections: [
                                                            t,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: (k = [(y = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (m = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [m, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, d, r], storageKey: null })]),
                                                                type: "XPaymentsDepositDetails",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: k, type: "XPaymentsWithdrawalDetails", abstractKey: null },
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "UserResults",
                                                                        kind: "LinkedField",
                                                                        name: "receiver_results",
                                                                        plural: !1,
                                                                        selections: (F = [
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
                                                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, (p = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
                                                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                            { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [_], storageKey: null }, o, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                            c,
                                                                                            d,
                                                                                        ],
                                                                                        type: "User",
                                                                                        abstractKey: null,
                                                                                    },
                                                                                ],
                                                                                storageKey: null,
                                                                            },
                                                                            d,
                                                                        ]),
                                                                        storageKey: null,
                                                                    },
                                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: F, storageKey: null },
                                                                ],
                                                                type: "XPaymentsTransferDetails",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: (S = [(K = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [d, g, p, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: S, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: [K, y], type: "XPaymentsPaymentDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: [K, y, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    r,
                                                ],
                                                type: "XPaymentsTransaction",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "call_to_action", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "call_to_action_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "level", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "topics", storageKey: null }, r], type: "XPaymentsCustomerNotice", abstractKey: null },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                    r,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: u, filters: ["s"], handle: "slice", key: "useActionableItemsQuery_TransactionActions_slice", kind: "LinkedHandle", name: "get_payments_customer_actions" },
                        ],
                    },
                    params: { id: "NmeR2VRcmJrsDmUySN5N8g", metadata: { sliceInfoPath: ["get_payments_customer_actions", "slice_info"] }, name: "useActionableItemsQuery", operationKind: "query", text: null },
                };
            f.hash = "a6a8f048d1caef1c671f17a2b72cb546";
            const h = f;
        },
        914507: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useActivateCardMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "activate_card_with_challenge", value: {} },
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "activate_issued_card",
                                plural: !1,
                                selections: [(t = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsActivateIssuedCardSuccess", abstractKey: null }), (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsActivateIssuedCardError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsActivateIssuedCardFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useActivateCardMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "activate_issued_card", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsActivateIssuedCardResult" }, t, s], storageKey: null }] },
                    params: { id: "eTrF_9AC0wyM2_rVC9paUw", metadata: {}, name: "useActivateCardMutation", operationKind: "mutation", text: null },
                };
            r.hash = "61aedc6dea3685eddafdb372e833dea1";
            const u = r;
        },
        461461: (e, a, n) => {
            n.d(a, { Z: () => k });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                c,
                m,
                g,
                y = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "useActiveAuthPaymentsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [{ kind: "Literal", name: "s", value: "8cce" }]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "get_active_three_ds_authentications",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsThreeDSAuthentication",
                                                kind: "LinkedField",
                                                name: "three_ds_authentications",
                                                plural: !0,
                                                selections: [
                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                    (t = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsAmount",
                                                        kind: "LinkedField",
                                                        name: "amount",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsPaymentMethod",
                                                        kind: "LinkedField",
                                                        name: "payment_method",
                                                        plural: !1,
                                                        selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (o = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (u = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [u, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }), (c = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
                                                        storageKey: null,
                                                    },
                                                    (m = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [i, d, { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null }),
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "XPaymentsGetActiveThreeDSAuthenticationsSuccess",
                                        abstractKey: null,
                                    },
                                    (g = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsGetActiveThreeDSAuthenticationsError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsGetActiveThreeDSAuthenticationsFailure", abstractKey: null }),
                                ],
                                storageKey: 'get_active_three_ds_authentications(s:"8cce")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "useActiveAuthPaymentsQuery", selections: [{ alias: null, args: l, concreteType: null, kind: "LinkedField", name: "get_active_three_ds_authentications", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsThreeDSAuthentication", kind: "LinkedField", name: "three_ds_authentications", plural: !0, selections: [i, t, { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [s, o, i, c], storageKey: null }, m], storageKey: null }], type: "XPaymentsGetActiveThreeDSAuthenticationsSuccess", abstractKey: null }, g], storageKey: 'get_active_three_ds_authentications(s:"8cce")' }] },
                    params: { id: "e2nbgKG9JYlMb4HhDwvC6Q", metadata: {}, name: "useActiveAuthPaymentsQuery", operationKind: "query", text: null },
                };
            y.hash = "d60fae37569639444b2e890f02d9cc0c";
            const k = y;
        },
        626278: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "authentication_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "decision" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useAuthenticatePaymentMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "authentication_id", variableName: "authentication_id" },
                                    { kind: "Variable", name: "decision", variableName: "decision" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "respond_to_three_ds_authentication",
                                plural: !1,
                                selections: [(s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRespondToThreeDSAuthenticationError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRespondToThreeDSAuthenticationFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, l], kind: "Operation", name: "useAuthenticatePaymentMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "respond_to_three_ds_authentication", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRespondToThreeDSAuthenticationResult" }, s], storageKey: null }] },
                    params: { id: "4C24FD09VTjs05XPI32bXQ", metadata: {}, name: "useAuthenticatePaymentMutation", operationKind: "mutation", text: null },
                };
            r.hash = "d3c3eb375c01e5e6ad75ff98b0ef6747";
            const u = r;
        },
        663090: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "transfer_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useCancelTransferMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transfer_id", variableName: "transfer_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "cancel_transfer",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCancelTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCancelTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useCancelTransferMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "cancel_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCancelTransferResult" }, t, s], storageKey: null }] },
                    params: { id: "vZ7bhKa5x2QPhAUncp1gGg", metadata: {}, name: "useCancelTransferMutation", operationKind: "mutation", text: null },
                };
            r.hash = "c7c7148f62c195069adc6e1092f60b87";
            const u = r;
        },
        597785: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "transfer_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useCancelTransferRequestMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transfer_id", variableName: "transfer_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "cancel_request_transfer",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCancelRequestTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCancelRequestTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useCancelTransferRequestMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "cancel_request_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCancelRequestTransferResult" }, t, s], storageKey: null }] },
                    params: { id: "Kr0QiEAsvjnMMTY76TaGHQ", metadata: {}, name: "useCancelTransferRequestMutation", operationKind: "mutation", text: null },
                };
            r.hash = "f81b4555911f541311bd4554759996db";
            const u = r;
        },
        990563: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "decision" },
                            { defaultValue: null, kind: "LocalArgument", name: "transfer_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useClaimTransferMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "decision", variableName: "decision" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transfer_id", variableName: "transfer_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "claim_transfer",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsClaimTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsClaimTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useClaimTransferMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "claim_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsClaimTransferResult" }, t, s], storageKey: null }] },
                    params: { id: "ZpeSramVN80ij7CD8OXxPQ", metadata: {}, name: "useClaimTransferMutation", operationKind: "mutation", text: null },
                };
            r.hash = "b8861c5c21ebda83dcb5e6c3d95c51e0";
            const u = r;
        },
        708154: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "decision" },
                            { defaultValue: null, kind: "LocalArgument", name: "transaction_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useConfirmUnrecognisedPaymentMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "decision", variableName: "decision" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transaction_id", variableName: "transaction_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "confirm_unrecognized_payment",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsTransaction",
                                                kind: "LinkedField",
                                                name: "transaction",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "XPaymentsConfirmUnrecognizedPaymentSuccess",
                                        abstractKey: null,
                                    }),
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsConfirmUnrecognizedPaymentError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsConfirmUnrecognizedPaymentFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useConfirmUnrecognisedPaymentMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "confirm_unrecognized_payment", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsConfirmUnrecognizedPaymentResult" }, t, s], storageKey: null }] },
                    params: { id: "FZcMe0C82dOKa2a4pHoGuQ", metadata: {}, name: "useConfirmUnrecognisedPaymentMutation", operationKind: "mutation", text: null },
                };
            r.hash = "3be193089e4332b2eadaa2e062bb229f";
            const u = r;
        },
        195816: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeletePaymentMethodMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "DeletePaymentMethodResponse",
                                kind: "LinkedField",
                                name: "delete_payment_method_by_id",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useDeletePaymentMethodMutation", selections: i },
                    params: { id: "tw-TmUFZ7DCkkx9QO3LRpw", metadata: {}, name: "useDeletePaymentMethodMutation", operationKind: "mutation", text: null },
                };
            t.hash = "cbc02e2085bce06dedf7c1a6fb338316";
            const s = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-960914ab.1920525a.js.map

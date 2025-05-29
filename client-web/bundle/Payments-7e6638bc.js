"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-7e6638bc"],
    {
        215285: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsPreferencesQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "XPaymentsCustomer",
                                kind: "LinkedField",
                                name: "get_customer",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsCustomerPreferences",
                                        kind: "LinkedField",
                                        name: "preferences",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "require_pin_to_create_transactions", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "require_pin_to_unlock", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "enable_bill_pay", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "require_pin_to_link_payment_method", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "only_receive_transfer_from_following", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "only_allow_request_from_following", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "enable_card_payments", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'get_customer(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsPreferencesQuery", selections: n },
                    params: { id: "rS0HgAfk9NyBMeBXBIyv8Q", metadata: {}, name: "usePaymentsPreferencesQuery", operationKind: "query", text: null },
                };
            s.hash = "d9c8bafaddc6a31ffc8c11a6be9f9e5f";
            const i = s;
        },
        177405: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsRegionQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "XPaymentsCustomer",
                                kind: "LinkedField",
                                name: "get_customer",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "region", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'get_customer(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsRegionQuery", selections: n },
                    params: { id: "XvNMy_C13ik6VOBa08n23A", metadata: {}, name: "usePaymentsRegionQuery", operationKind: "query", text: null },
                };
            s.hash = "27c50b3a3248a79615ab46e65a81dd9c";
            const i = s;
        },
        708419: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                s,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "provider_tokens" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsSessionMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "provider_tokens", variableName: "provider_tokens" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_x_payments_auth_session_v2",
                                plural: !1,
                                selections: [
                                    (i = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "session_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "expiry_time_millis", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "customer_id", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsAuthProviderTokens",
                                                kind: "LinkedField",
                                                name: "provider_tokens",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "sardine_session_key", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "socure_session_token", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsAuthSession",
                                        abstractKey: null,
                                    }),
                                    (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateAuthSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateAuthSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, i, r], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            t.hash = "10451d8395be901d74dce6c7862265ac";
            const u = t;
        },
        192828: (e, l, a) => {
            a.d(l, { Z: () => N });
            var n,
                s,
                i,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                y,
                g,
                k,
                p,
                _,
                K,
                F,
                S,
                b,
                f,
                h,
                P,
                T,
                L,
                v,
                X,
                D,
                R,
                I,
                C,
                M,
                A,
                q,
                V,
                U,
                Q,
                w,
                x = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "transaction_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsTransactionQuery",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Literal", name: "s", value: "8cce" },
                                    { kind: "Variable", name: "transaction_id", variableName: "transaction_id" },
                                ]),
                                concreteType: "XPaymentsTransaction",
                                kind: "LinkedField",
                                name: "get_transaction_by_id",
                                plural: !1,
                                selections: [
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null }),
                                    (u = { alias: null, args: null, kind: "ScalarField", name: "base_amount_micro", storageKey: null }),
                                    (d = { alias: null, args: null, kind: "ScalarField", name: "total_fees_micro", storageKey: null }),
                                    (o = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }),
                                    (c = { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null }),
                                    (m = { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null }),
                                    (y = { alias: null, args: null, kind: "ScalarField", name: "authorization_method", storageKey: null }),
                                    (g = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }),
                                    (k = { alias: null, args: null, kind: "ScalarField", name: "availability_date", storageKey: null }),
                                    (p = { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null }),
                                    (_ = { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }),
                                    (K = { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            {
                                                kind: "InlineFragment",
                                                selections: (L = [
                                                    (T = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsPaymentMethod",
                                                        kind: "LinkedField",
                                                        name: "payment_method",
                                                        plural: !1,
                                                        selections: [(F = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (h = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(S = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (b = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (f = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [b, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }), (P = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
                                                        storageKey: null,
                                                    }),
                                                ]),
                                                type: "XPaymentsDepositDetails",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: L, type: "XPaymentsWithdrawalDetails", abstractKey: null },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "receiver_results", plural: !1, selections: (R = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [S, { kind: "InlineFragment", selections: [F, (v = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }), (D = { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [(X = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }, { args: null, kind: "FragmentSpread", name: "UserDetails_user" }], storageKey: null }]), storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: R, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            (M = {
                                                kind: "InlineFragment",
                                                selections: (C = [
                                                    (I = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsMerchantDetails",
                                                        kind: "LinkedField",
                                                        name: "merchant_details",
                                                        plural: !1,
                                                        selections: [
                                                            i,
                                                            f,
                                                            X,
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
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                ]),
                                                type: "XPaymentsBankingDepositDetails",
                                                abstractKey: null,
                                            }),
                                            (A = { kind: "InlineFragment", selections: C, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null }),
                                            { kind: "InlineFragment", selections: [I, T], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [I, T, (q = { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null })], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    P,
                                ],
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
                        name: "usePaymentsTransactionQuery",
                        selections: [
                            {
                                alias: null,
                                args: s,
                                concreteType: "XPaymentsTransaction",
                                kind: "LinkedField",
                                name: "get_transaction_by_id",
                                plural: !1,
                                selections: [
                                    i,
                                    r,
                                    t,
                                    u,
                                    d,
                                    o,
                                    c,
                                    m,
                                    y,
                                    g,
                                    k,
                                    p,
                                    _,
                                    K,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            S,
                                            { kind: "InlineFragment", selections: (U = [(V = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [F, h, i, P], storageKey: null })]), type: "XPaymentsDepositDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: U, type: "XPaymentsWithdrawalDetails", abstractKey: null },
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
                                                        selections: (w = [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [
                                                                    S,
                                                                    {
                                                                        kind: "InlineFragment",
                                                                        selections: [
                                                                            F,
                                                                            v,
                                                                            D,
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
                                                                            { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(Q = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [Q], storageKey: null }, r, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                            i,
                                                                        ],
                                                                        type: "User",
                                                                        abstractKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            i,
                                                        ]),
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: w, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            M,
                                            A,
                                            { kind: "InlineFragment", selections: [I, V], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [I, V, q], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    P,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "GTc-UQJCJSonGAhVFPifcA", metadata: {}, name: "usePaymentsTransactionQuery", operationKind: "query", text: null },
                };
            x.hash = "d845165b027d189958b410e49d63ebb9";
            const N = x;
        },
        258074: (e, l, a) => {
            a.d(l, { Z: () => P });
            var n,
                s,
                i,
                r,
                t,
                u,
                d,
                o,
                c,
                m,
                y,
                g,
                k,
                p,
                _,
                K,
                F,
                S,
                b,
                f,
                h = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "count" },
                            { defaultValue: null, kind: "LocalArgument", name: "cursor" },
                            { defaultValue: null, kind: "LocalArgument", name: "search_filter_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsTransactionsListQuery",
                        selections: [
                            {
                                alias: "get_transactions",
                                args: [(s = { kind: "Literal", name: "direction", value: "Descending" }), (i = { kind: "Literal", name: "s", value: "8cce" }), (r = { kind: "Variable", name: "search_filter_id", variableName: "search_filter_id" })],
                                concreteType: "XPaymentsTransactionsSlice",
                                kind: "LinkedField",
                                name: "__usePaymentsTransactionsListQuery_TransactionList_slice_slice",
                                plural: !1,
                                selections: [
                                    { args: null, kind: "FragmentSpread", name: "TransactionList_slice" },
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
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "usePaymentsTransactionsListQuery",
                        selections: [
                            {
                                alias: null,
                                args: (d = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, s, i, r]),
                                concreteType: "XPaymentsTransactionsSlice",
                                kind: "LinkedField",
                                name: "get_transactions",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsTransaction",
                                        kind: "LinkedField",
                                        name: "items",
                                        plural: !0,
                                        selections: [
                                            (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                            (c = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
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
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "details",
                                                plural: !1,
                                                selections: [
                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    { kind: "InlineFragment", selections: (_ = [(p = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [m, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (g = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (k = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [g, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, o, u], storageKey: null })]), type: "XPaymentsDepositDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: _, type: "XPaymentsWithdrawalDetails", abstractKey: null },
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
                                                                selections: (S = [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "result",
                                                                        plural: !1,
                                                                        selections: [
                                                                            m,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, (K = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
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
                                                                                    { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(F = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [F], storageKey: null }, c, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                    y,
                                                                                    o,
                                                                                ],
                                                                                type: "User",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    o,
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: S, storageKey: null },
                                                        ],
                                                        type: "XPaymentsTransferDetails",
                                                        abstractKey: null,
                                                    },
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: (f = [
                                                            (b = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "XPaymentsMerchantDetails",
                                                                kind: "LinkedField",
                                                                name: "merchant_details",
                                                                plural: !1,
                                                                selections: [
                                                                    o,
                                                                    k,
                                                                    K,
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
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ]),
                                                        type: "XPaymentsBankingDepositDetails",
                                                        abstractKey: null,
                                                    },
                                                    { kind: "InlineFragment", selections: f, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [b, p], type: "XPaymentsPaymentDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [b, p, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                            m,
                                        ],
                                        storageKey: null,
                                    },
                                    t,
                                    u,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: d, filters: ["s", "direction", "search_filter_id"], handle: "slice", key: "usePaymentsTransactionsListQuery_TransactionList_slice", kind: "LinkedHandle", name: "get_transactions" },
                        ],
                    },
                    params: { id: "c3ObEnq_LMjNlsPrQvnS4g", metadata: { sliceInfoPath: ["get_transactions", "slice_info"] }, name: "usePaymentsTransactionsListQuery", operationKind: "query", text: null },
                };
            h.hash = "b402a994bbbc81321f0dba7d628410eb";
            const P = h;
        },
        526274: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n,
                s,
                i,
                r,
                t,
                u,
                d,
                o = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePhysicalCardDetailsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "XPaymentsPaymentMethod",
                                kind: "LinkedField",
                                name: "get_payment_method",
                                plural: !1,
                                selections: [
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    (t = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentProviderReference", kind: "LinkedField", name: "details_provider_reference", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }], storageKey: null }], storageKey: null }),
                                    (u = {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsGetIssuedCardShipping",
                                        kind: "LinkedField",
                                        name: "shipping",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "eta_millis", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null },
                                        ],
                                        storageKey: null,
                                    }),
                                    (d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePhysicalCardDetailsQuery", selections: [{ alias: null, args: s, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_method", plural: !1, selections: [i, t, u, r, d], storageKey: null }] },
                    params: { id: "biZPiI0hHL4s98hMW6sk_w", metadata: {}, name: "usePhysicalCardDetailsQuery", operationKind: "query", text: null },
                };
            o.hash = "7c61033241bf092de44c7d80aaeef4df";
            const c = o;
        },
        898673: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                s,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" },
                            { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRedeemCashbackMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "amount_local_micro", variableName: "amount_local_micro" },
                                    { kind: "Variable", name: "idempotency_key", variableName: "idempotency_key" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "redeem_cashback",
                                plural: !1,
                                selections: [
                                    (i = {
                                        kind: "InlineFragment",
                                        selections: [
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "XPaymentsRedeemCashbackSuccess",
                                        abstractKey: null,
                                    }),
                                    (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRedeemCashbackError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRedeemCashbackFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRedeemCashbackMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "redeem_cashback", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRedeemCashbackResult" }, i, r], storageKey: null }] },
                    params: { id: "G5FA6tFKpIgEcYE-SCLvWA", metadata: {}, name: "useRedeemCashbackMutation", operationKind: "mutation", text: null },
                };
            t.hash = "514dd9a456f1891d57fb84480dfe0da4";
            const u = t;
        },
        414350: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                s,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" },
                            { defaultValue: null, kind: "LocalArgument", name: "reason" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useReplaceCardMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Variable", name: "reason", variableName: "reason" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "replace_issued_card",
                                plural: !1,
                                selections: [(i = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsCompleteRequiredChallenge", abstractKey: null }), (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsReplaceIssuedCardError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsReplaceIssuedCardFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useReplaceCardMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "replace_issued_card", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsReplaceIssuedCardResult" }, i, r], storageKey: null }] },
                    params: { id: "NeuJuxXh56PtYJJSnV4BWw", metadata: {}, name: "useReplaceCardMutation", operationKind: "mutation", text: null },
                };
            t.hash = "451a3fedc5f2963c4a8a89325dd5c4f6";
            const u = t;
        },
        922524: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                s,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "decision" },
                            { defaultValue: null, kind: "LocalArgument", name: "transfer_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useRespondToRequestMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "decision", variableName: "decision" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transfer_id", variableName: "transfer_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "respond_to_request_transfer",
                                plural: !1,
                                selections: [
                                    (i = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRespondToRequestTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRespondToRequestTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRespondToRequestMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "respond_to_request_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRespondToRequestTransferResult" }, i, r], storageKey: null }] },
                    params: { id: "-DdgykE4pvpWCb8IQM56rA", metadata: {}, name: "useRespondToRequestMutation", operationKind: "mutation", text: null },
                };
            t.hash = "032ec762eb37a835915cf37c38d78961";
            const u = t;
        },
        800697: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n,
                s,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "challengeId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useStartTwoFactorAuthQuery",
                        selections: (i = [
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
                                        args: [{ kind: "Variable", name: "challenge_id", variableName: "challengeId" }],
                                        concreteType: "XPaymentsStartTwoFactorLogin",
                                        kind: "LinkedField",
                                        name: "xp_start_two_factor_auth_challenge",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "XPaymentsTwoFactorLoginVerificationRequest", kind: "LinkedField", name: "login_request", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "challenge", storageKey: null }, { alias: null, args: null, concreteType: "XPaymentsTwoFactorAuthMethod", kind: "LinkedField", name: "two_factor_auth_method", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "two_factor_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useStartTwoFactorAuthQuery", selections: i },
                    params: { id: "mmKuTztykqv5M7qri5pU1A", metadata: {}, name: "useStartTwoFactorAuthQuery", operationKind: "query", text: null },
                };
            r.hash = "621c0a9b6870bcd7697f74f77643806d";
            const t = r;
        },
        746523: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n,
                s,
                i,
                r,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "preferences" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdatePaymentsPreferencesMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "preferences", variableName: "preferences" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "update_customer_preferences",
                                plural: !1,
                                selections: [(i = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsUpdateCustomerPreferencesError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesFailure", abstractKey: null }), (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesSuccess", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useUpdatePaymentsPreferencesMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "update_customer_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsUpdateCustomerPreferencesResult" }, i, r], storageKey: null }] },
                    params: { id: "FPIMG7UNLnx0q4pSYMg-6Q", metadata: {}, name: "useUpdatePaymentsPreferencesMutation", operationKind: "mutation", text: null },
                };
            t.hash = "9032a3b7dbe58e60ac00947544d3283e";
            const u = t;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-7e6638bc.ff4e884a.js.map

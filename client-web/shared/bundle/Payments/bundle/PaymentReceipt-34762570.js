"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Payments~bundle.PaymentReceipt-34762570"],
    {
        724983: (e, l, a) => {
            a.d(l, { Z: () => m });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                c,
                o,
                g,
                y = {
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
                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                                    (o = { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }),
                                                    (g = { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }),
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    i,
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                    { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [r, t], storageKey: null }, d, c, o, g], storageKey: null }], storageKey: null },
                                    u,
                                    s,
                                ],
                                storageKey: 'get_payments_recent_participants(s:"8cce")',
                            },
                        ],
                    },
                    params: { id: "xvZnXh4_2Bi2wZkMH18DHw", metadata: { features: ["responsive_web_graphql_timeline_navigation_enabled"] }, name: "RecentParticipantsQuery", operationKind: "query", text: null },
                };
            y.hash = "098d419144f289b29c1421123e7cfb25";
            const m = y;
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
        683799: (e, l, a) => {
            a.d(l, { t: () => n });
            const n = Object.freeze({ Checking: "Checking", Savings: "Savings" });
        },
        492646: (e, l, a) => {
            a.d(l, { U: () => n });
            const n = Object.freeze({ AmericanExpress: "AmericanExpress", Mastercard: "Mastercard", Visa: "Visa" });
        },
        929512: (e, l, a) => {
            a.d(l, { l: () => n });
            const n = Object.freeze({ Charge: "Charge", Combo: "Combo", Credit: "Credit", Debit: "Debit", DeferredDebit: "DeferredDebit", Prepaid: "Prepaid" });
        },
        642004: (e, l, a) => {
            a.d(l, { W: () => n });
            const n = Object.freeze({ IssuedCardTypePhysical: "IssuedCardTypePhysical", IssuedCardTypeUnspecified: "IssuedCardTypeUnspecified", IssuedCardTypeVirtual: "IssuedCardTypeVirtual" });
        },
        87877: (e, l, a) => {
            a.d(l, { U: () => n });
            const n = Object.freeze({ PaymentMethodFilterFunding: "PaymentMethodFilterFunding", PaymentMethodFilterSpending: "PaymentMethodFilterSpending", PaymentMethodFilterUnspecified: "PaymentMethodFilterUnspecified" });
        },
        922281: (e, l, a) => {
            a.d(l, { D: () => n });
            const n = Object.freeze({ Active: "Active", Canceled: "Canceled", Inactive: "Inactive", Invalid: "Invalid", LoginRequired: "LoginRequired", Pending: "Pending", Revoked: "Revoked", ScaRequired: "ScaRequired", Unspecified: "Unspecified" });
        },
        880428: (e, l, a) => {
            a.d(l, { O: () => n, x: () => i });
            const n = Object.freeze({ Banking: "Banking", Cashback: "Cashback", Ecommerce: "Ecommerce", Interest: "Interest", Issuing: "Issuing", Transfer: "Transfer" }),
                i = n;
        },
        810088: (e, l, a) => {
            a.d(l, { g: () => n });
            const n = Object.freeze({ AuthorizationClosed: "AuthorizationClosed", AuthorizationOpen: "AuthorizationOpen", AwaitingRequestAcceptance: "AwaitingRequestAcceptance", AwaitingUnrecognizedConfirmation: "AwaitingUnrecognizedConfirmation", Cancelled: "Cancelled", Expired: "Expired", Failed: "Failed", Hold: "Hold", Pending: "Pending", PendingRecipientAcceptance: "PendingRecipientAcceptance", PendingRecipientAction: "PendingRecipientAction", PendingRecipientOnboarding: "PendingRecipientOnboarding", PendingRequestAcceptance: "PendingRequestAcceptance", PendingReview: "PendingReview", PinVerificationRequired: "PinVerificationRequired", RejectedByRecipient: "RejectedByRecipient", RequestRejected: "RequestRejected", RequestVerificationRequired: "RequestVerificationRequired", Settled: "Settled", SoftSettled: "SoftSettled", Unspecified: "Unspecified", VerificationRequired: "VerificationRequired" });
        },
        357818: (e, l, a) => {
            a.d(l, { x: () => n });
            const n = Object.freeze({ AtmWithdrawal: "AtmWithdrawal", Deposit: "Deposit", DisputeCredit: "DisputeCredit", Payment: "Payment", Refund: "Refund", Reverse: "Reverse", Transfer: "Transfer", Unspecified: "Unspecified", Withdraw: "Withdraw" });
        },
        539660: (e, l, a) => {
            a.d(l, { P: () => n });
            const n = Object.freeze({ Cancelled: "Cancelled", InReview: "InReview", RejectedByAutoReview: "RejectedByAutoReview", RejectedByManualReview: "RejectedByManualReview", RejectedByUnsupportedRegion: "RejectedByUnsupportedRegion", RejectedCardPaymentsDisabled: "RejectedCardPaymentsDisabled", RejectedLimitsExceeded: "RejectedLimitsExceeded", RejectedNotSufficientFunds: "RejectedNotSufficientFunds", Returned: "Returned", ReversedByAgent: "ReversedByAgent", UnrecognizedActivityConfirmed: "UnrecognizedActivityConfirmed", UnrecognizedActivityRejected: "UnrecognizedActivityRejected", Unspecified: "Unspecified" });
        },
        297679: (e, l, a) => {
            a.d(l, { Z: () => f });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                c,
                o,
                g,
                y,
                m,
                k,
                p,
                _,
                F,
                K,
                S,
                b = {
                    fragment: {
                        argumentDefinitions: (n = [
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
                                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "items", plural: !0, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null })], storageKey: null },
                                    { args: null, kind: "FragmentSpread", name: "ActionNeededList_slice" },
                                    (r = {
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
                                    (t = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                ],
                                storageKey: '__useActionableItemsQuery_TransactionActions_slice_slice(s:"8cce")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
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
                                            s,
                                            { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCustomerAction" },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
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
                                                            s,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: (k = [(m = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (g = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (y = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [g, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, d, t], storageKey: null })]),
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
                                                                                    s,
                                                                                    {
                                                                                        kind: "InlineFragment",
                                                                                        selections: [
                                                                                            { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, (p = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
                                                                                            { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                            { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [_], storageKey: null }, c, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                            o,
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
                                                            { kind: "InlineFragment", selections: (S = [(K = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [d, y, p, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: S, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: [K, m], type: "XPaymentsPaymentDetails", abstractKey: null },
                                                            { kind: "InlineFragment", selections: [K, m, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    t,
                                                ],
                                                type: "XPaymentsTransaction",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "call_to_action", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "call_to_action_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "level", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "topics", storageKey: null }, t], type: "XPaymentsCustomerNotice", abstractKey: null },
                                            t,
                                        ],
                                        storageKey: null,
                                    },
                                    r,
                                    t,
                                ],
                                storageKey: null,
                            },
                            { alias: null, args: u, filters: ["s"], handle: "slice", key: "useActionableItemsQuery_TransactionActions_slice", kind: "LinkedHandle", name: "get_payments_customer_actions" },
                        ],
                    },
                    params: { id: "NmeR2VRcmJrsDmUySN5N8g", metadata: { sliceInfoPath: ["get_payments_customer_actions", "slice_info"] }, name: "useActionableItemsQuery", operationKind: "query", text: null },
                };
            b.hash = "a6a8f048d1caef1c671f17a2b72cb546";
            const f = b;
        },
        217995: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsAccountStatusQuery",
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
                                    { alias: null, args: null, kind: "ScalarField", name: "permissions", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "roles", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'get_customer(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsAccountStatusQuery", selections: n },
                    params: { id: "8qNB72LDdA7MIPa-TSs5nw", metadata: {}, name: "usePaymentsAccountStatusQuery", operationKind: "query", text: null },
                };
            i.hash = "037ff302ff922b7d6eaecbcec3eb1fdb";
            const s = i;
        },
        183276: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsBalanceQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "XPaymentAccount",
                                kind: "LinkedField",
                                name: "get_accounts",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentBalance",
                                        kind: "LinkedField",
                                        name: "balance",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "available_amount_local_micro", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'get_accounts(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsBalanceQuery", selections: n },
                    params: { id: "VLC5YNBevsKTDAHRVmHxQA", metadata: {}, name: "usePaymentsBalanceQuery", operationKind: "query", text: null },
                };
            i.hash = "e19dc41e69f79e3c85fc7a683b838348";
            const s = i;
        },
        990312: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsConfigQuery",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "XPaymentsClientConfig",
                                kind: "LinkedField",
                                name: "get_payments_client_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "payments_web_host", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "sardine_client_id", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "sardine_environment", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "payments_help_url", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "payments_report_url", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "socure_public_key", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "sardine_api_subdomain", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "sardine_pixel_subdomain", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "stripe_issuing_publishable_key", storageKey: null },
                                ],
                                storageKey: 'get_payments_client_config(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: n },
                    params: { id: "Xh0CemHkb-C4m_IIgMjxHw", metadata: {}, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            i.hash = "c760d9c0183e704dfa8432d4f617f966";
            const s = i;
        },
        703325: (e, l, a) => {
            a.d(l, { Z: () => o });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                c = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "filter" },
                            { defaultValue: null, kind: "LocalArgument", name: "withIssuedSpend" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsMethodsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "filter", variableName: "filter" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "XPaymentsPaymentMethod",
                                kind: "LinkedField",
                                name: "get_payment_methods_v2",
                                plural: !0,
                                selections: [
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    (u = {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsPaymentMethodCore",
                                        kind: "LinkedField",
                                        name: "core",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "details",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [r, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { condition: "withIssuedSpend", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentProviderReference", kind: "LinkedField", name: "details_provider_reference", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }], storageKey: null }] },
                                        ],
                                        storageKey: null,
                                    }),
                                    (d = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                ],
                                storageKey: null,
                            },
                            d,
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePaymentsMethodsQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_methods_v2", plural: !0, selections: [s, u, t, d], storageKey: null }, d] },
                    params: { id: "m_W9-Fw5Wygk-P4XL7KecQ", metadata: {}, name: "usePaymentsMethodsQuery", operationKind: "query", text: null },
                };
            c.hash = "3c6ca474304b23769939e90a51699acc";
            const o = c;
        },
        215285: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                i = {
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
            i.hash = "d9c8bafaddc6a31ffc8c11a6be9f9e5f";
            const s = i;
        },
        192828: (e, l, a) => {
            a.d(l, { Z: () => Q });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                c,
                o,
                g,
                y,
                m,
                k,
                p,
                _,
                F,
                K,
                S,
                b,
                f,
                h,
                P,
                L,
                T,
                R,
                v,
                D,
                I,
                C,
                A,
                X,
                U,
                w,
                q = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "transaction_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsTransactionQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "s", value: "8cce" },
                                    { kind: "Variable", name: "transaction_id", variableName: "transaction_id" },
                                ]),
                                concreteType: "XPaymentsTransaction",
                                kind: "LinkedField",
                                name: "get_transaction_by_id",
                                plural: !1,
                                selections: [
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null }),
                                    (u = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }),
                                    (d = { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null }),
                                    (c = { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null }),
                                    (o = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }),
                                    (g = { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null }),
                                    (y = { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }),
                                    (m = { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null }),
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
                                                selections: (f = [
                                                    (b = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsPaymentMethod",
                                                        kind: "LinkedField",
                                                        name: "payment_method",
                                                        plural: !1,
                                                        selections: [(k = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (K = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (_ = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (F = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [_, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }), (S = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
                                                        storageKey: null,
                                                    }),
                                                ]),
                                                type: "XPaymentsDepositDetails",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: f, type: "XPaymentsWithdrawalDetails", abstractKey: null },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "receiver_results", plural: !1, selections: (T = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [p, { kind: "InlineFragment", selections: [k, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(h = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }, { args: null, kind: "FragmentSpread", name: "UserDetails_user" }], storageKey: null }]), storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: T, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            (D = { kind: "InlineFragment", selections: (v = [(R = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [s, F, h, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null }),
                                            (I = { kind: "InlineFragment", selections: v, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null }),
                                            { kind: "InlineFragment", selections: [R, b], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [R, b, (C = { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null })], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    S,
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
                                args: i,
                                concreteType: "XPaymentsTransaction",
                                kind: "LinkedField",
                                name: "get_transaction_by_id",
                                plural: !1,
                                selections: [
                                    s,
                                    r,
                                    t,
                                    u,
                                    d,
                                    c,
                                    o,
                                    g,
                                    y,
                                    m,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            p,
                                            { kind: "InlineFragment", selections: (X = [(A = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [k, K, s, S], storageKey: null })]), type: "XPaymentsDepositDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: X, type: "XPaymentsWithdrawalDetails", abstractKey: null },
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
                                                                selections: [p, { kind: "InlineFragment", selections: [k, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [h, P, L, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(U = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [U], storageKey: null }, r, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null }, s], type: "User", abstractKey: null }],
                                                                storageKey: null,
                                                            },
                                                            s,
                                                        ]),
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: w, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            D,
                                            I,
                                            { kind: "InlineFragment", selections: [R, A], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [R, A, C], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    S,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "YLfSrFccHmIZe0c5GtnRCg", metadata: {}, name: "usePaymentsTransactionQuery", operationKind: "query", text: null },
                };
            q.hash = "aeac10078a1ed5176a92ec6e5c1dcf24";
            const Q = q;
        },
        258074: (e, l, a) => {
            a.d(l, { Z: () => P });
            var n,
                i,
                s,
                r,
                t,
                u,
                d,
                c,
                o,
                g,
                y,
                m,
                k,
                p,
                _,
                F,
                K,
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
                                args: [(i = { kind: "Literal", name: "direction", value: "Descending" }), (s = { kind: "Literal", name: "s", value: "8cce" }), (r = { kind: "Variable", name: "search_filter_id", variableName: "search_filter_id" })],
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
                                args: (d = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, i, s, r]),
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
                                            (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
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
                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    { kind: "InlineFragment", selections: (_ = [(p = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [g, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (m = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (k = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [m, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }, c, u], storageKey: null })]), type: "XPaymentsDepositDetails", abstractKey: null },
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
                                                                            g,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, (F = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
                                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                                                    { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(K = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [K], storageKey: null }, o, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null },
                                                                                    y,
                                                                                    c,
                                                                                ],
                                                                                type: "User",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    c,
                                                                ]),
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: S, storageKey: null },
                                                        ],
                                                        type: "XPaymentsTransferDetails",
                                                        abstractKey: null,
                                                    },
                                                    { kind: "InlineFragment", selections: (f = [(b = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [c, k, F, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: f, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [b, p], type: "XPaymentsPaymentDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [b, p, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                            g,
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
                    params: { id: "lCxev-x8dheycw3F4gxCSQ", metadata: { sliceInfoPath: ["get_transactions", "slice_info"] }, name: "usePaymentsTransactionsListQuery", operationKind: "query", text: null },
                };
            h.hash = "b402a994bbbc81321f0dba7d628410eb";
            const P = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Payments~bundle.PaymentReceipt-34762570.4fbb947a.js.map

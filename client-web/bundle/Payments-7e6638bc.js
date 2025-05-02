"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-7e6638bc"],
    {
        787560: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                i,
                s,
                t,
                r,
                u,
                d,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (i = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (s = { defaultValue: null, kind: "LocalArgument", name: "description" }), (t = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (r = { defaultValue: null, kind: "LocalArgument", name: "receiver_twitter_user_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentTransferMutation",
                        selections: [
                            {
                                alias: null,
                                args: (u = [
                                    { kind: "Variable", name: "amount_local_micro", variableName: "amount_local_micro" },
                                    { kind: "Variable", name: "currency", variableName: "currency" },
                                    { kind: "Variable", name: "description", variableName: "description" },
                                    { kind: "Variable", name: "idempotency_key", variableName: "idempotency_key" },
                                    { kind: "Variable", name: "receiver_twitter_user_id", variableName: "receiver_twitter_user_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_transfer",
                                plural: !1,
                                selections: [
                                    (d = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (o = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, s, i, r, t], kind: "Operation", name: "usePaymentTransferMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateTransferResult" }, d, o], storageKey: null }] },
                    params: { id: "uukZOYthkVIRWZodW6DXrQ", metadata: {}, name: "usePaymentTransferMutation", operationKind: "mutation", text: null },
                };
            c.hash = "30372b0672544b77ef3227413f552c03";
            const m = c;
        },
        220474: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                i,
                s,
                t,
                r,
                u,
                d,
                o,
                c = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (i = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (s = { defaultValue: null, kind: "LocalArgument", name: "description" }), (t = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (r = { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentTransferOutMutation",
                        selections: [
                            {
                                alias: null,
                                args: (u = [
                                    { kind: "Variable", name: "amount_local_micro", variableName: "amount_local_micro" },
                                    { kind: "Variable", name: "currency", variableName: "currency" },
                                    { kind: "Variable", name: "description", variableName: "description" },
                                    { kind: "Variable", name: "idempotency_key", variableName: "idempotency_key" },
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_withdrawal",
                                plural: !1,
                                selections: [
                                    (d = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (o = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateWithdrawalError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateWithdrawalFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [n, s, i, r, t], kind: "Operation", name: "usePaymentTransferOutMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_withdrawal", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, d, o], storageKey: null }] },
                    params: { id: "xcPLCXa5SJWUw1zwMxBgAA", metadata: {}, name: "usePaymentTransferOutMutation", operationKind: "mutation", text: null },
                };
            c.hash = "60ed5a27e4bd5a719963966c51b2c8bb";
            const m = c;
        },
        40969: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsAccountEligibilityStatusMutation",
                        selections: (n = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "4721" }],
                                concreteType: "XPaymentsEligiblityResult",
                                kind: "LinkedField",
                                name: "check_transfers_eligibility",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "eligible", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsEligibilityRequirement",
                                        kind: "LinkedField",
                                        name: "requirements",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "passes_requirement", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "requirement_type", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, kind: "ScalarField", name: "permissions", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "roles", storageKey: null },
                                ],
                                storageKey: 'check_transfers_eligibility(s:"4721")',
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsAccountEligibilityStatusMutation", selections: n },
                    params: { id: "t5RacliZlaQuWbVox6wp_Q", metadata: {}, name: "usePaymentsAccountEligibilityStatusMutation", operationKind: "mutation", text: null },
                };
            i.hash = "19f43aff1c7054223a231655937864e7";
            const s = i;
        },
        217995: (e, a, l) => {
            l.d(a, { Z: () => s });
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
        183276: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                s,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsBalanceQuery",
                        selections: (s = [
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
                                    { alias: null, args: null, concreteType: "XPaymentBalance", kind: "LinkedField", name: "balance", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "available_amount_local_micro", storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsInterestBearingDetails",
                                        kind: "LinkedField",
                                        name: "interest_details",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "apy", storageKey: null },
                                            { alias: null, args: null, concreteType: "XPaymentsAmount", kind: "LinkedField", name: "earned", plural: !1, selections: (i = [{ alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null }, n]), storageKey: null },
                                            { alias: null, args: null, concreteType: "XPaymentsAmount", kind: "LinkedField", name: "pending", plural: !1, selections: i, storageKey: null },
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsBalanceQuery", selections: s },
                    params: { id: "jVWKSXmg3ocpQVO4CwvN6w", metadata: {}, name: "usePaymentsBalanceQuery", operationKind: "query", text: null },
                };
            t.hash = "8c7a7a7001c069e38c076f29d4a69181";
            const r = t;
        },
        990312: (e, a, l) => {
            l.d(a, { Z: () => s });
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
        576751: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                s,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [
                            { defaultValue: null, kind: "LocalArgument", name: "document_type" },
                            { defaultValue: null, kind: "LocalArgument", name: "year" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsDocumentsQuery",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "document_type", variableName: "document_type" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "year", variableName: "year" },
                                ],
                                concreteType: "XPaymentsDocument",
                                kind: "LinkedField",
                                name: "get_payments_documents",
                                plural: !0,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "document_type", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsDayMonthYear",
                                        kind: "LinkedField",
                                        name: "end_date",
                                        plural: !1,
                                        selections: (i = [
                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                        ]),
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, concreteType: "XPaymentsDayMonthYear", kind: "LinkedField", name: "start_date", plural: !1, selections: i, storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePaymentsDocumentsQuery", selections: s },
                    params: { id: "hhOzh1oWHnxmcr1KVRTr0w", metadata: {}, name: "usePaymentsDocumentsQuery", operationKind: "query", text: null },
                };
            t.hash = "3222b6bc95095c4feedabf4cbb10e7b0";
            const r = t;
        },
        204133: (e, a, l) => {
            l.d(a, { Z: () => t });
            var n,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsInvitationDetailsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "get_payments_invitation_details",
                                plural: !1,
                                selections: [
                                    (i = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "invitation_amount_local_micro", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "invitation_count", storageKey: null },
                                        ],
                                        type: "XPaymentsInvitationDetails",
                                        abstractKey: null,
                                    }),
                                ],
                                storageKey: 'get_payments_invitation_details(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsInvitationDetailsQuery", selections: [{ alias: null, args: n, concreteType: null, kind: "LinkedField", name: "get_payments_invitation_details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, i], storageKey: 'get_payments_invitation_details(s:"4721")' }] },
                    params: { id: "hF5qR7ovBbqQTtTYecIDTA", metadata: {}, name: "usePaymentsInvitationDetailsQuery", operationKind: "query", text: null },
                };
            s.hash = "0b2fcb0512092e626625d1a4fd02c399";
            const t = s;
        },
        924592: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsLimitsQuery",
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
                                        concreteType: "XPaymentsCustomerLimit",
                                        kind: "LinkedField",
                                        name: "limits",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "limit_type", storageKey: null },
                                            {
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
                                            },
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsLimitsQuery", selections: n },
                    params: { id: "u3KoVMePjS1C4sWfpOp-Sg", metadata: {}, name: "usePaymentsLimitsQuery", operationKind: "query", text: null },
                };
            i.hash = "d9c42db0dec9c9f01f282aef235aa66e";
            const s = i;
        },
        388768: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [(n = { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "redirect_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsMethodUpdateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (s = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Variable", name: "redirect_url", variableName: "redirect_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_item_update_session",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsProviderToken",
                                                kind: "LinkedField",
                                                name: "linking_token",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "expires_at_msec", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "token", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null },
                                        ],
                                        type: "XPaymentsItemUpdateSession",
                                        abstractKey: null,
                                    }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, n], kind: "Operation", name: "usePaymentsMethodUpdateMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "create_item_update_session", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: null }] },
                    params: { id: "k-QBnpPpCHmJ1gzwaaTRMw", metadata: {}, name: "usePaymentsMethodUpdateMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6d722df25afcbe99520eb50514682edf";
            const u = r;
        },
        703325: (e, a, l) => {
            l.d(a, { Z: () => m });
            var n,
                i,
                s,
                t,
                r,
                u,
                d,
                o,
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
                                    (d = {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsPaymentMethodCore",
                                        kind: "LinkedField",
                                        name: "core",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [r, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }, { condition: "withIssuedSpend", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "cashback", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rate", storageKey: null }], type: "XPaymentsPaymentMethodCashbackFlatRate", abstractKey: null }], storageKey: null }] }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null },
                                            { condition: "withIssuedSpend", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentProviderReference", kind: "LinkedField", name: "details_provider_reference", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }], storageKey: null }] },
                                        ],
                                        storageKey: null,
                                    }),
                                    (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }),
                                ],
                                storageKey: null,
                            },
                            o,
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePaymentsMethodsQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_methods_v2", plural: !0, selections: [s, d, u, o], storageKey: null }, o] },
                    params: { id: "DnVoyWb5WznKXReWJ3HUFQ", metadata: {}, name: "usePaymentsMethodsQuery", operationKind: "query", text: null },
                };
            c.hash = "45c2b0f3a7f189515e908baf0919427f";
            const m = c;
        },
        264462: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsNameQuery",
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
                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                    { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                ],
                                storageKey: 'get_customer(s:"4721")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsNameQuery", selections: n },
                    params: { id: "b1WmYkIIR3aXeurLebKVrQ", metadata: {}, name: "usePaymentsNameQuery", operationKind: "query", text: null },
                };
            i.hash = "cb801249702c89842106b39470960f8b";
            const s = i;
        },
        215285: (e, a, l) => {
            l.d(a, { Z: () => s });
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
        177405: (e, a, l) => {
            l.d(a, { Z: () => s });
            var n,
                i = {
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
            i.hash = "27c50b3a3248a79615ab46e65a81dd9c";
            const s = i;
        },
        708419: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "provider_tokens" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsSessionMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "provider_tokens", variableName: "provider_tokens" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_x_payments_auth_session_v2",
                                plural: !1,
                                selections: [
                                    (s = {
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
                                    (t = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateAuthSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateAuthSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, s, t], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            r.hash = "10451d8395be901d74dce6c7862265ac";
            const u = r;
        },
        192828: (e, a, l) => {
            l.d(a, { Z: () => q });
            var n,
                i,
                s,
                t,
                r,
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
                b,
                f,
                S,
                h,
                P,
                L,
                T,
                v,
                X,
                D,
                R,
                C,
                I,
                M,
                V,
                Q,
                A = {
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
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }),
                                    (r = { alias: null, args: null, kind: "ScalarField", name: "amount_local_micro", storageKey: null }),
                                    (u = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null }),
                                    (d = { alias: null, args: null, kind: "ScalarField", name: "product_code", storageKey: null }),
                                    (o = { alias: null, args: null, kind: "ScalarField", name: "transaction_type", storageKey: null }),
                                    (c = { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null }),
                                    (m = { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null }),
                                    (y = { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }),
                                    (g = { alias: null, args: null, kind: "ScalarField", name: "reason_code", storageKey: null }),
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
                                                selections: (S = [
                                                    (f = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsPaymentMethod",
                                                        kind: "LinkedField",
                                                        name: "payment_method",
                                                        plural: !1,
                                                        selections: [(k = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), (F = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, (_ = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null }), (K = { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [_, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null }], storageKey: null }), (b = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })],
                                                        storageKey: null,
                                                    }),
                                                ]),
                                                type: "XPaymentsDepositDetails",
                                                abstractKey: null,
                                            },
                                            { kind: "InlineFragment", selections: S, type: "XPaymentsWithdrawalDetails", abstractKey: null },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "receiver_results", plural: !1, selections: (T = [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [p, { kind: "InlineFragment", selections: [k, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(h = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }, { args: null, kind: "FragmentSpread", name: "UserDetails_user" }], storageKey: null }]), storageKey: null },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: T, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            (D = { kind: "InlineFragment", selections: (X = [(v = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [s, K, h, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null }),
                                            (R = { kind: "InlineFragment", selections: X, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null }),
                                            { kind: "InlineFragment", selections: [v, f], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [v, f, (C = { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null })], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    b,
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
                                    t,
                                    r,
                                    u,
                                    d,
                                    o,
                                    c,
                                    m,
                                    y,
                                    g,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "details",
                                        plural: !1,
                                        selections: [
                                            p,
                                            { kind: "InlineFragment", selections: (M = [(I = { alias: null, args: null, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "payment_method", plural: !1, selections: [k, F, s, b], storageKey: null })]), type: "XPaymentsDepositDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: M, type: "XPaymentsWithdrawalDetails", abstractKey: null },
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
                                                        selections: (Q = [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "result",
                                                                plural: !1,
                                                                selections: [p, { kind: "InlineFragment", selections: [k, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [h, P, L, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }, { alias: "affiliates_highlighted_label", args: null, concreteType: "HighlightedUserLabelResponse", kind: "LinkedField", name: "identity_profile_labels_highlighted_label", plural: !1, selections: [{ alias: null, args: null, concreteType: "HighlightedUserLabel", kind: "LinkedField", name: "label", plural: !1, selections: [{ alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(V = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [V], storageKey: null }, t, { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null }, { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null }], storageKey: null }], storageKey: null }, s], type: "User", abstractKey: null }],
                                                                storageKey: null,
                                                            },
                                                            s,
                                                        ]),
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: Q, storageKey: null },
                                                ],
                                                type: "XPaymentsTransferDetails",
                                                abstractKey: null,
                                            },
                                            D,
                                            R,
                                            { kind: "InlineFragment", selections: [v, I], type: "XPaymentsPaymentDetails", abstractKey: null },
                                            { kind: "InlineFragment", selections: [v, I, C], type: "XPaymentsRefundDetails", abstractKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    b,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "YLfSrFccHmIZe0c5GtnRCg", metadata: {}, name: "usePaymentsTransactionQuery", operationKind: "query", text: null },
                };
            A.hash = "aeac10078a1ed5176a92ec6e5c1dcf24";
            const q = A;
        },
        258074: (e, a, l) => {
            l.d(a, { Z: () => P });
            var n,
                i,
                s,
                t,
                r,
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
                b,
                f,
                S,
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
                                args: [(i = { kind: "Literal", name: "direction", value: "Descending" }), (s = { kind: "Literal", name: "s", value: "8cce" }), (t = { kind: "Variable", name: "search_filter_id", variableName: "search_filter_id" })],
                                concreteType: "XPaymentsTransactionsSlice",
                                kind: "LinkedField",
                                name: "__usePaymentsTransactionsListQuery_TransactionList_slice_slice",
                                plural: !1,
                                selections: [
                                    { args: null, kind: "FragmentSpread", name: "TransactionList_slice" },
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
                                args: (d = [{ kind: "Variable", name: "count", variableName: "count" }, { kind: "Variable", name: "cursor", variableName: "cursor" }, i, s, t]),
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
                                                                selections: (b = [
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
                                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }, (K = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null },
                                                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
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
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "sender_results", plural: !1, selections: b, storageKey: null },
                                                        ],
                                                        type: "XPaymentsTransferDetails",
                                                        abstractKey: null,
                                                    },
                                                    { kind: "InlineFragment", selections: (S = [(f = { alias: null, args: null, concreteType: "XPaymentsMerchantDetails", kind: "LinkedField", name: "merchant_details", plural: !1, selections: [o, k, K, { alias: null, args: null, kind: "ScalarField", name: "website", storageKey: null }], storageKey: null })]), type: "XPaymentsBankingDepositDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: S, type: "XPaymentsBankingWithdrawalDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [f, p], type: "XPaymentsPaymentDetails", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [f, p, { alias: null, args: null, kind: "ScalarField", name: "reference_transaction_id", storageKey: null }], type: "XPaymentsRefundDetails", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                            m,
                                        ],
                                        storageKey: null,
                                    },
                                    r,
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
        526274: (e, a, l) => {
            l.d(a, { Z: () => c });
            var n,
                i,
                s,
                t,
                r,
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
                                args: (i = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: "XPaymentsPaymentMethod",
                                kind: "LinkedField",
                                name: "get_payment_method",
                                plural: !1,
                                selections: [
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    (r = { alias: null, args: null, concreteType: "XPaymentsPaymentMethodCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentProviderReference", kind: "LinkedField", name: "details_provider_reference", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }], storageKey: null }], storageKey: null }),
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "usePhysicalCardDetailsQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_method", plural: !1, selections: [s, r, u, t, d], storageKey: null }] },
                    params: { id: "biZPiI0hHL4s98hMW6sk_w", metadata: {}, name: "usePhysicalCardDetailsQuery", operationKind: "query", text: null },
                };
            o.hash = "7c61033241bf092de44c7d80aaeef4df";
            const c = o;
        },
        898673: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
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
                                args: (i = [
                                    { kind: "Variable", name: "amount_local_micro", variableName: "amount_local_micro" },
                                    { kind: "Variable", name: "idempotency_key", variableName: "idempotency_key" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "redeem_cashback",
                                plural: !1,
                                selections: [
                                    (s = {
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
                                    (t = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRedeemCashbackError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRedeemCashbackFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRedeemCashbackMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "redeem_cashback", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRedeemCashbackResult" }, s, t], storageKey: null }] },
                    params: { id: "G5FA6tFKpIgEcYE-SCLvWA", metadata: {}, name: "useRedeemCashbackMutation", operationKind: "mutation", text: null },
                };
            r.hash = "514dd9a456f1891d57fb84480dfe0da4";
            const u = r;
        },
        414350: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
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
                                args: (i = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Variable", name: "reason", variableName: "reason" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "replace_issued_card",
                                plural: !1,
                                selections: [(s = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsCompleteRequiredChallenge", abstractKey: null }), (t = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsReplaceIssuedCardError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsReplaceIssuedCardFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useReplaceCardMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "replace_issued_card", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsReplaceIssuedCardResult" }, s, t], storageKey: null }] },
                    params: { id: "NeuJuxXh56PtYJJSnV4BWw", metadata: {}, name: "useReplaceCardMutation", operationKind: "mutation", text: null },
                };
            r.hash = "451a3fedc5f2963c4a8a89325dd5c4f6";
            const u = r;
        },
        922524: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
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
                                args: (i = [
                                    { kind: "Variable", name: "decision", variableName: "decision" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "transfer_id", variableName: "transfer_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "respond_to_request_transfer",
                                plural: !1,
                                selections: [
                                    (s = {
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
                                    (t = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRespondToRequestTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRespondToRequestTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useRespondToRequestMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "respond_to_request_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRespondToRequestTransferResult" }, s, t], storageKey: null }] },
                    params: { id: "-DdgykE4pvpWCb8IQM56rA", metadata: {}, name: "useRespondToRequestMutation", operationKind: "mutation", text: null },
                };
            r.hash = "032ec762eb37a835915cf37c38d78961";
            const u = r;
        },
        800697: (e, a, l) => {
            l.d(a, { Z: () => r });
            var n,
                i,
                s,
                t = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "challengeId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useStartTwoFactorAuthQuery",
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
                                        args: [{ kind: "Variable", name: "challenge_id", variableName: "challengeId" }],
                                        concreteType: "XPaymentsStartTwoFactorLogin",
                                        kind: "LinkedField",
                                        name: "xp_start_two_factor_auth_challenge",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "XPaymentsTwoFactorLoginVerificationRequest", kind: "LinkedField", name: "login_request", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "challenge", storageKey: null }, { alias: null, args: null, concreteType: "XPaymentsTwoFactorAuthMethod", kind: "LinkedField", name: "two_factor_auth_method", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "two_factor_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useStartTwoFactorAuthQuery", selections: s },
                    params: { id: "mmKuTztykqv5M7qri5pU1A", metadata: {}, name: "useStartTwoFactorAuthQuery", operationKind: "query", text: null },
                };
            t.hash = "621c0a9b6870bcd7697f74f77643806d";
            const r = t;
        },
        746523: (e, a, l) => {
            l.d(a, { Z: () => u });
            var n,
                i,
                s,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "preferences" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdatePaymentsPreferencesMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "preferences", variableName: "preferences" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "update_customer_preferences",
                                plural: !1,
                                selections: [(s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsUpdateCustomerPreferencesError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesFailure", abstractKey: null }), (t = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesSuccess", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useUpdatePaymentsPreferencesMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "update_customer_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsUpdateCustomerPreferencesResult" }, s, t], storageKey: null }] },
                    params: { id: "FPIMG7UNLnx0q4pSYMg-6Q", metadata: {}, name: "useUpdatePaymentsPreferencesMutation", operationKind: "mutation", text: null },
                };
            r.hash = "9032a3b7dbe58e60ac00947544d3283e";
            const u = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-7e6638bc.0b72595a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-fd087ba8"],
    {
        787560: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                m = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (i = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (t = { defaultValue: null, kind: "LocalArgument", name: "description" }), (s = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (r = { defaultValue: null, kind: "LocalArgument", name: "receiver_twitter_user_id" })],
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
                    operation: { argumentDefinitions: [l, t, i, r, s], kind: "Operation", name: "usePaymentTransferMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateTransferResult" }, d, o], storageKey: null }] },
                    params: { id: "uukZOYthkVIRWZodW6DXrQ", metadata: {}, name: "usePaymentTransferMutation", operationKind: "mutation", text: null },
                };
            m.hash = "30372b0672544b77ef3227413f552c03";
            const c = m;
        },
        220474: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                m = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (i = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (t = { defaultValue: null, kind: "LocalArgument", name: "description" }), (s = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (r = { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" })],
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
                    operation: { argumentDefinitions: [l, t, i, r, s], kind: "Operation", name: "usePaymentTransferOutMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_withdrawal", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, d, o], storageKey: null }] },
                    params: { id: "xcPLCXa5SJWUw1zwMxBgAA", metadata: {}, name: "usePaymentTransferOutMutation", operationKind: "mutation", text: null },
                };
            m.hash = "60ed5a27e4bd5a719963966c51b2c8bb";
            const c = m;
        },
        40969: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsAccountEligibilityStatusMutation",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsAccountEligibilityStatusMutation", selections: l },
                    params: { id: "t5RacliZlaQuWbVox6wp_Q", metadata: {}, name: "usePaymentsAccountEligibilityStatusMutation", operationKind: "mutation", text: null },
                };
            i.hash = "19f43aff1c7054223a231655937864e7";
            const t = i;
        },
        217995: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsAccountStatusQuery",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsAccountStatusQuery", selections: l },
                    params: { id: "8qNB72LDdA7MIPa-TSs5nw", metadata: {}, name: "usePaymentsAccountStatusQuery", operationKind: "query", text: null },
                };
            i.hash = "037ff302ff922b7d6eaecbcec3eb1fdb";
            const t = i;
        },
        183276: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsBalanceQuery",
                        selections: (t = [
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
                                    { alias: null, args: null, concreteType: "XPaymentBalance", kind: "LinkedField", name: "balance", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "available_amount_local_micro", storageKey: null }, (l = { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null })], storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsInterestBearingDetails",
                                        kind: "LinkedField",
                                        name: "interest_details",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "apy", storageKey: null },
                                            { alias: null, args: null, concreteType: "XPaymentsAmount", kind: "LinkedField", name: "earned", plural: !1, selections: (i = [{ alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null }, l]), storageKey: null },
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsBalanceQuery", selections: t },
                    params: { id: "jVWKSXmg3ocpQVO4CwvN6w", metadata: {}, name: "usePaymentsBalanceQuery", operationKind: "query", text: null },
                };
            s.hash = "8c7a7a7001c069e38c076f29d4a69181";
            const r = s;
        },
        990312: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t,
                s = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsConfigQuery",
                        selections: [
                            (i = {
                                alias: null,
                                args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                            }),
                            {
                                alias: null,
                                args: l,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "get_transfer_methods_config",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsTransferMethodConfig",
                                                kind: "LinkedField",
                                                name: "transfer_methods_config",
                                                plural: !0,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsTransferMethodFees",
                                                        kind: "LinkedField",
                                                        name: "fees",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "XPaymentsAmount",
                                                                kind: "LinkedField",
                                                                name: "fixed_minimum_amount",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage_micro", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsTransferMethodProcessingTime",
                                                        kind: "LinkedField",
                                                        name: "processing_time",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "max_duration_in_business_days", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "processing_time_type", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsTransferMethodType",
                                                        kind: "LinkedField",
                                                        name: "transfer_method_type",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "pull_transfer_method_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "push_transfer_method_type", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "XPaymentsGetTransferMethodsConfigSuccess",
                                        abstractKey: null,
                                    }),
                                ],
                                storageKey: 'get_transfer_methods_config(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: [i, { alias: null, args: l, concreteType: null, kind: "LinkedField", name: "get_transfer_methods_config", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: 'get_transfer_methods_config(s:"4721")' }] },
                    params: { id: "Fu7zu8Ae1f6C--2m6Ho4fQ", metadata: { features: ["payments_transfer_methods_enabled"] }, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            s.hash = "c22392b79e87b157c450129c9ed7e9b8";
            const r = s;
        },
        576751: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                i,
                t,
                s = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "document_type" },
                            { defaultValue: null, kind: "LocalArgument", name: "year" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsDocumentsQuery",
                        selections: (t = [
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
                                    { alias: null, args: null, kind: "ScalarField", name: "url_expiry_time_millis", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsDocumentsQuery", selections: t },
                    params: { id: "d1lCDErUPOoSgdGUBecQhA", metadata: {}, name: "usePaymentsDocumentsQuery", operationKind: "query", text: null },
                };
            s.hash = "a4af12eacc6f617eae40349ae162a38e";
            const r = s;
        },
        204133: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsInvitationDetailsQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsInvitationDetailsQuery", selections: [{ alias: null, args: l, concreteType: null, kind: "LinkedField", name: "get_payments_invitation_details", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, i], storageKey: 'get_payments_invitation_details(s:"4721")' }] },
                    params: { id: "hF5qR7ovBbqQTtTYecIDTA", metadata: {}, name: "usePaymentsInvitationDetailsQuery", operationKind: "query", text: null },
                };
            t.hash = "0b2fcb0512092e626625d1a4fd02c399";
            const s = t;
        },
        924592: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsLimitsQuery",
                        selections: (i = [
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
                                                selections: (l = [
                                                    { alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "XPaymentsAmount", kind: "LinkedField", name: "used", plural: !1, selections: l, storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "reset_time_millis", storageKey: null },
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsLimitsQuery", selections: i },
                    params: { id: "nhPl70quXGJBEu5qarYY-w", metadata: {}, name: "usePaymentsLimitsQuery", operationKind: "query", text: null },
                };
            t.hash = "f24ef741f173aa6ad0012cf25cb9c479";
            const s = t;
        },
        388768: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }), (i = { defaultValue: null, kind: "LocalArgument", name: "redirect_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsMethodUpdateMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Variable", name: "redirect_url", variableName: "redirect_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_item_update_session",
                                plural: !1,
                                selections: [
                                    (s = {
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
                    operation: { argumentDefinitions: [i, l], kind: "Operation", name: "usePaymentsMethodUpdateMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "create_item_update_session", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }] },
                    params: { id: "k-QBnpPpCHmJ1gzwaaTRMw", metadata: {}, name: "usePaymentsMethodUpdateMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6d722df25afcbe99520eb50514682edf";
            const u = r;
        },
        703325: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o,
                m = {
                    fragment: {
                        argumentDefinitions: (l = [
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
                                    (t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    (d = {
                                        alias: null,
                                        args: null,
                                        concreteType: "XPaymentsPaymentMethodCore",
                                        kind: "LinkedField",
                                        name: "core",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "details", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null }, { kind: "InlineFragment", selections: [r, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }, { condition: "withIssuedSpend", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "cashback", plural: !1, selections: [s, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rate", storageKey: null }], type: "XPaymentsPaymentMethodCashbackFlatRate", abstractKey: null }], storageKey: null }] }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null }], storageKey: null },
                                            {
                                                condition: "withIssuedSpend",
                                                kind: "Condition",
                                                passingValue: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XPaymentsSupportedTransferMethods",
                                                        kind: "LinkedField",
                                                        name: "supported_transfer_methods",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "pull_transfer_methods", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "push_transfer_methods", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                            },
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsMethodsQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_methods_v2", plural: !0, selections: [t, d, u, o], storageKey: null }, o] },
                    params: { id: "skOUqudLi94X5wGlRxpwIA", metadata: { features: ["payments_transfer_methods_enabled"] }, name: "usePaymentsMethodsQuery", operationKind: "query", text: null },
                };
            m.hash = "cc75220a3221fb9f4027ccbc0d4f142b";
            const c = m;
        },
        264462: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsNameQuery",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsNameQuery", selections: l },
                    params: { id: "b1WmYkIIR3aXeurLebKVrQ", metadata: {}, name: "usePaymentsNameQuery", operationKind: "query", text: null },
                };
            i.hash = "cb801249702c89842106b39470960f8b";
            const t = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-fd087ba8.1667121a.js.map

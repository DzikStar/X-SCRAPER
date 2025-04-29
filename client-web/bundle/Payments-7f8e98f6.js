"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-7f8e98f6"],
    {
        986092: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "theme" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkBankCardMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "theme", variableName: "theme" },
                                ],
                                concreteType: "XPaymentsCreateBankCardLinkingSessionResponse",
                                kind: "LinkedField",
                                name: "create_bank_card_linking_session",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "iframe_url", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkBankCardMutation", selections: i },
                    params: { id: "4H7sxRxeTXoBW5mLdlBaDg", metadata: {}, name: "useLinkBankCardMutation", operationKind: "mutation", text: null },
                };
            t.hash = "ffb9482b5b17663122b08fc27f9aa3fd";
            const s = t;
        },
        59815: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "redirect_url" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkFinancialInstitutionMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Literal", name: "financial_institution_type", value: "Bank" },
                                    { kind: "Variable", name: "redirect_url", variableName: "redirect_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_financial_institution_linking_session",
                                plural: !1,
                                selections: [
                                    (t = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "XPaymentsProviderToken", kind: "LinkedField", name: "linking_token", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "token", storageKey: null }], storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null },
                                        ],
                                        type: "XPaymentsFinancialInstitutionLinkingSession",
                                        abstractKey: null,
                                    }),
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateFinancialInstitutionLinkingSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateFinancialInstitutionLinkingSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkFinancialInstitutionMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "create_financial_institution_linking_session", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t, s], storageKey: null }] },
                    params: { id: "i8S6lhGfbh_bx-tikiykSw", metadata: {}, name: "useLinkFinancialInstitutionMutation", operationKind: "mutation", text: null },
                };
            r.hash = "fff38a2da08a1ff4404648b5e5a9cd14";
            const u = r;
        },
        144098: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "metadata" }), (i = { defaultValue: null, kind: "LocalArgument", name: "public_token" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkTokenExchangeMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "metadata", variableName: "metadata" },
                                    { kind: "Literal", name: "provider", value: "Plaid" },
                                    { kind: "Variable", name: "public_token", variableName: "public_token" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "exchange_public_token",
                                plural: !1,
                                selections: [(s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentMethodEntity", kind: "LinkedField", name: "payment_methods", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "XPaymentsPaymentMethodResult", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, l], kind: "Operation", name: "useLinkTokenExchangeMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "exchange_public_token", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, s], storageKey: null }] },
                    params: { id: "G3M7_w7Rk5y3Ah69P0LdAw", metadata: {}, name: "useLinkTokenExchangeMutation", operationKind: "mutation", text: null },
                };
            r.hash = "f5dc254a8e541bb82a6488f1314bab4c";
            const u = r;
        },
        652730: (e, a, n) => {
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
                        name: "useLinkUpdateCompleteMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "payment_method_link_update_complete",
                                plural: !1,
                                selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentMethodLinkUpdateCompleteError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null }], storageKey: null }], type: "XPaymentsPaymentMethodLinkUpdateCompleteFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkUpdateCompleteMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "payment_method_link_update_complete", plural: !1, selections: [t, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsPaymentMethodLinkUpdateCompleteResult" }, s], storageKey: null }] },
                    params: { id: "LNbwQMIN-XfxOsZciyUWMQ", metadata: {}, name: "useLinkUpdateCompleteMutation", operationKind: "mutation", text: null },
                };
            r.hash = "231c07d56ee420e65ae0c94657aaac6f";
            const u = r;
        },
        236706: (e, a, n) => {
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
                        name: "usePaymentDepositMutation",
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
                                name: "create_deposit",
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
                                    (o = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateDepositError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateDepositFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t, i, r, s], kind: "Operation", name: "usePaymentDepositMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_deposit", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, d, o], storageKey: null }] },
                    params: { id: "FwEhmEjZDOCyRg9d6rAOMw", metadata: {}, name: "usePaymentDepositMutation", operationKind: "mutation", text: null },
                };
            m.hash = "3ef71171c01e8d1faa7aec62894674e6";
            const c = m;
        },
        181234: (e, a, n) => {
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
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (i = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (t = { defaultValue: null, kind: "LocalArgument", name: "description" }), (s = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (r = { defaultValue: null, kind: "LocalArgument", name: "sender_twitter_user_id" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentRequestTransferMutation",
                        selections: [
                            {
                                alias: null,
                                args: (u = [
                                    { kind: "Variable", name: "amount_local_micro", variableName: "amount_local_micro" },
                                    { kind: "Variable", name: "currency", variableName: "currency" },
                                    { kind: "Variable", name: "description", variableName: "description" },
                                    { kind: "Variable", name: "idempotency_key", variableName: "idempotency_key" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "sender_twitter_user_id", variableName: "sender_twitter_user_id" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "request_transfer",
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
                                    (o = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRequestTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRequestTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t, i, r, s], kind: "Operation", name: "usePaymentRequestTransferMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "request_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRequestTransferResult" }, d, o], storageKey: null }] },
                    params: { id: "6WX0ffFrJN3R3CzVjlutrg", metadata: {}, name: "usePaymentRequestTransferMutation", operationKind: "mutation", text: null },
                };
            m.hash = "02be2461297c12a861c7a979f93a2e8f";
            const c = m;
        },
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
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsBalanceQuery",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsBalanceQuery", selections: l },
                    params: { id: "VLC5YNBevsKTDAHRVmHxQA", metadata: {}, name: "usePaymentsBalanceQuery", operationKind: "query", text: null },
                };
            i.hash = "e19dc41e69f79e3c85fc7a683b838348";
            const t = i;
        },
        990312: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsConfigQuery",
                        selections: (l = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: l },
                    params: { id: "Xh0CemHkb-C4m_IIgMjxHw", metadata: {}, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            i.hash = "c760d9c0183e704dfa8432d4f617f966";
            const t = i;
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
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsDocumentsQuery", selections: t },
                    params: { id: "hhOzh1oWHnxmcr1KVRTr0w", metadata: {}, name: "usePaymentsDocumentsQuery", operationKind: "query", text: null },
                };
            s.hash = "3222b6bc95095c4feedabf4cbb10e7b0";
            const r = s;
        },
        710555: (e, a, n) => {
            n.d(a, { Z: () => s });
            var l,
                i,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsInterestQuery",
                        selections: (i = [
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
                                        concreteType: "XPaymentsInterestBearingDetails",
                                        kind: "LinkedField",
                                        name: "interest_details",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "apy", storageKey: null },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsAmount",
                                                kind: "LinkedField",
                                                name: "earned",
                                                plural: !1,
                                                selections: (l = [
                                                    { alias: null, args: null, kind: "ScalarField", name: "local_micro", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "currency", storageKey: null },
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "XPaymentsAmount", kind: "LinkedField", name: "pending", plural: !1, selections: l, storageKey: null },
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsInterestQuery", selections: i },
                    params: { id: "2MJ9VHVrtuugvzKgNqZRpQ", metadata: {}, name: "usePaymentsInterestQuery", operationKind: "query", text: null },
                };
            t.hash = "d78e91206490e3166cd8f0694c666328";
            const s = t;
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
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsLimitsQuery",
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsLimitsQuery", selections: l },
                    params: { id: "u3KoVMePjS1C4sWfpOp-Sg", metadata: {}, name: "usePaymentsLimitsQuery", operationKind: "query", text: null },
                };
            i.hash = "d9c42db0dec9c9f01f282aef235aa66e";
            const t = i;
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
            n.d(a, { Z: () => m });
            var l,
                i,
                t,
                s,
                r,
                u,
                d,
                o = {
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "account_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_account_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "bank_name", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "logo", storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "status", storageKey: null })], type: "XPaymentsBankAccountPaymentMethod", abstractKey: null },
                                                    { kind: "InlineFragment", selections: [s, { alias: null, args: null, kind: "ScalarField", name: "bin", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_brand", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_number_mask", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "issued_card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "card_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_month", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "expiration_year", storageKey: null }], type: "XPaymentsCreditCardPaymentMethod", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { condition: "withIssuedSpend", kind: "Condition", passingValue: !0, selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentProviderReference", kind: "LinkedField", name: "details_provider_reference", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }], storageKey: null }] },
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsMethodsQuery", selections: [{ alias: null, args: i, concreteType: "XPaymentsPaymentMethod", kind: "LinkedField", name: "get_payment_methods_v2", plural: !0, selections: [t, u, r, d], storageKey: null }, d] },
                    params: { id: "m_W9-Fw5Wygk-P4XL7KecQ", metadata: {}, name: "usePaymentsMethodsQuery", operationKind: "query", text: null },
                };
            o.hash = "3c6ca474304b23769939e90a51699acc";
            const m = o;
        },
        215285: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsPreferencesQuery",
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsPreferencesQuery", selections: l },
                    params: { id: "rS0HgAfk9NyBMeBXBIyv8Q", metadata: {}, name: "usePaymentsPreferencesQuery", operationKind: "query", text: null },
                };
            i.hash = "d9c8bafaddc6a31ffc8c11a6be9f9e5f";
            const t = i;
        },
        177405: (e, a, n) => {
            n.d(a, { Z: () => t });
            var l,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsRegionQuery",
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsRegionQuery", selections: l },
                    params: { id: "XvNMy_C13ik6VOBa08n23A", metadata: {}, name: "usePaymentsRegionQuery", operationKind: "query", text: null },
                };
            i.hash = "27c50b3a3248a79615ab46e65a81dd9c";
            const t = i;
        },
        708419: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                i,
                t,
                s,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "provider_tokens" }]),
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
                                    (t = {
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
                                    (s = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateAuthSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateAuthSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, t, s], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            r.hash = "10451d8395be901d74dce6c7862265ac";
            const u = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-7f8e98f6.8df35d5a.js.map

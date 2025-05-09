"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-39d0705d"],
    {
        456221: (e, a, n) => {
            n.d(a, { Z: () => m });
            var l,
                t,
                i,
                r,
                s,
                u,
                o,
                d = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "cardId" },
                            { defaultValue: null, kind: "LocalArgument", name: "nonce" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useEphemeralKeyMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "nonce", variableName: "nonce" },
                                    {
                                        fields: [
                                            { kind: "Variable", name: "id", variableName: "cardId" },
                                            { kind: "Literal", name: "provider", value: "StripeIssuing" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "provider_reference",
                                    },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Literal", name: "session_type", value: "PaymentMethodSessionTypeViewDetails" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_payment_method_session",
                                plural: !1,
                                selections: [
                                    { kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "session", plural: !1, selections: [(r = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "provider_token", storageKey: null }], type: "XPaymentsPaymentMethodSessionToken", abstractKey: null })], storageKey: null }], type: "XPaymentsCreatePaymentMethodSessionSuccess", abstractKey: null },
                                    (s = {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XPaymentsCreatePaymentMethodSessionError",
                                                kind: "LinkedField",
                                                name: "errors",
                                                plural: !0,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "XPaymentsCreatePaymentMethodSessionFailure",
                                        abstractKey: null,
                                    }),
                                    (u = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsCompleteRequiredChallenge", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useEphemeralKeyMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "create_payment_method_session", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "session", plural: !1, selections: [o, r], storageKey: null }], type: "XPaymentsCreatePaymentMethodSessionSuccess", abstractKey: null }, s, u], storageKey: null }] },
                    params: { id: "3KlOMPaK8cIhXYM41ieZcQ", metadata: {}, name: "useEphemeralKeyMutation", operationKind: "mutation", text: null },
                };
            d.hash = "228d4cd88122337c6bb35bedc1fc4bbd";
            const m = d;
        },
        986092: (e, a, n) => {
            n.d(a, { Z: () => r });
            var l,
                t,
                i = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "theme" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkBankCardMutation",
                        selections: (t = [
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkBankCardMutation", selections: t },
                    params: { id: "4H7sxRxeTXoBW5mLdlBaDg", metadata: {}, name: "useLinkBankCardMutation", operationKind: "mutation", text: null },
                };
            i.hash = "ffb9482b5b17663122b08fc27f9aa3fd";
            const r = i;
        },
        59815: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                t,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "redirect_url" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkFinancialInstitutionMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Literal", name: "financial_institution_type", value: "Bank" },
                                    { kind: "Variable", name: "redirect_url", variableName: "redirect_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_financial_institution_linking_session",
                                plural: !1,
                                selections: [
                                    (i = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, concreteType: "XPaymentsProviderToken", kind: "LinkedField", name: "linking_token", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "token", storageKey: null }], storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "provider", storageKey: null },
                                        ],
                                        type: "XPaymentsFinancialInstitutionLinkingSession",
                                        abstractKey: null,
                                    }),
                                    (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateFinancialInstitutionLinkingSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateFinancialInstitutionLinkingSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkFinancialInstitutionMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "create_financial_institution_linking_session", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, i, r], storageKey: null }] },
                    params: { id: "i8S6lhGfbh_bx-tikiykSw", metadata: {}, name: "useLinkFinancialInstitutionMutation", operationKind: "mutation", text: null },
                };
            s.hash = "fff38a2da08a1ff4404648b5e5a9cd14";
            const u = s;
        },
        144098: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                t,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "metadata" }), (t = { defaultValue: null, kind: "LocalArgument", name: "public_token" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkTokenExchangeMutation",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "metadata", variableName: "metadata" },
                                    { kind: "Literal", name: "provider", value: "Plaid" },
                                    { kind: "Variable", name: "public_token", variableName: "public_token" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "exchange_public_token",
                                plural: !1,
                                selections: [(r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentMethodEntity", kind: "LinkedField", name: "payment_methods", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], type: "XPaymentsPaymentMethodResult", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, l], kind: "Operation", name: "useLinkTokenExchangeMutation", selections: [{ alias: null, args: i, concreteType: null, kind: "LinkedField", name: "exchange_public_token", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, r], storageKey: null }] },
                    params: { id: "G3M7_w7Rk5y3Ah69P0LdAw", metadata: {}, name: "useLinkTokenExchangeMutation", operationKind: "mutation", text: null },
                };
            s.hash = "f5dc254a8e541bb82a6488f1314bab4c";
            const u = s;
        },
        652730: (e, a, n) => {
            n.d(a, { Z: () => u });
            var l,
                t,
                i,
                r,
                s = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "payment_method_id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useLinkUpdateCompleteMutation",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "payment_method_id", variableName: "payment_method_id" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "payment_method_link_update_complete",
                                plural: !1,
                                selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsPaymentMethodLinkUpdateCompleteError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_message", storageKey: null }], storageKey: null }], type: "XPaymentsPaymentMethodLinkUpdateCompleteFailure", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useLinkUpdateCompleteMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "payment_method_link_update_complete", plural: !1, selections: [i, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsPaymentMethodLinkUpdateCompleteResult" }, r], storageKey: null }] },
                    params: { id: "LNbwQMIN-XfxOsZciyUWMQ", metadata: {}, name: "useLinkUpdateCompleteMutation", operationKind: "mutation", text: null },
                };
            s.hash = "231c07d56ee420e65ae0c94657aaac6f";
            const u = s;
        },
        236706: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                t,
                i,
                r,
                s,
                u,
                o,
                d,
                m = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (t = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (i = { defaultValue: null, kind: "LocalArgument", name: "description" }), (r = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (s = { defaultValue: null, kind: "LocalArgument", name: "payment_method_id" })],
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
                                    (o = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (d = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateDepositError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateDepositFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, i, t, s, r], kind: "Operation", name: "usePaymentDepositMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "create_deposit", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, o, d], storageKey: null }] },
                    params: { id: "FwEhmEjZDOCyRg9d6rAOMw", metadata: {}, name: "usePaymentDepositMutation", operationKind: "mutation", text: null },
                };
            m.hash = "3ef71171c01e8d1faa7aec62894674e6";
            const c = m;
        },
        181234: (e, a, n) => {
            n.d(a, { Z: () => c });
            var l,
                t,
                i,
                r,
                s,
                u,
                o,
                d,
                m = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "amount_local_micro" }), (t = { defaultValue: null, kind: "LocalArgument", name: "currency" }), (i = { defaultValue: null, kind: "LocalArgument", name: "description" }), (r = { defaultValue: null, kind: "LocalArgument", name: "idempotency_key" }), (s = { defaultValue: null, kind: "LocalArgument", name: "sender_twitter_user_id" })],
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
                                    (o = {
                                        kind: "InlineFragment",
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "transaction_status", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null },
                                        ],
                                        type: "XPaymentsTransaction",
                                        abstractKey: null,
                                    }),
                                    (d = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsRequestTransferError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsRequestTransferFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, i, t, s, r], kind: "Operation", name: "usePaymentRequestTransferMutation", selections: [{ alias: null, args: u, concreteType: null, kind: "LinkedField", name: "request_transfer", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsRequestTransferResult" }, o, d], storageKey: null }] },
                    params: { id: "6WX0ffFrJN3R3CzVjlutrg", metadata: {}, name: "usePaymentRequestTransferMutation", operationKind: "mutation", text: null },
                };
            m.hash = "02be2461297c12a861c7a979f93a2e8f";
            const c = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-39d0705d.4b84857a.js.map

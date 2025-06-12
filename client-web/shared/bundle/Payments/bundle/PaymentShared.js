"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Payments~bundle.PaymentShared"],
    {
        848739: (e, n, a) => {
            a.d(n, { l: () => l });
            const l = Object.freeze({ Delayed: "Delayed", RealTime: "RealTime" });
        },
        217995: (e, n, a) => {
            a.d(n, { Z: () => t });
            var l,
                s = {
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
            s.hash = "037ff302ff922b7d6eaecbcec3eb1fdb";
            const t = s;
        },
        445664: (e, n, a) => {
            a.d(n, { Z: () => y, v: () => m });
            var l = a(217995),
                s = a(202784),
                t = a(10622),
                i = a.n(t),
                r = (a(585488), a(353391)),
                o = a.n(r),
                u = a(482924),
                d = a(698478);
            const c = l.Z,
                m = ({ environment: e }) =>
                    i()(e, c, {}, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const { permissions: n, roles: a } = e?.get_customer || {};
                            return { permissions: n, roles: a };
                        })
                        .catch(() => null),
                y = (e) => {
                    const n = e?.fetchKey,
                        [a, l] = s.useState(1),
                        { data: t, refetch: i, refetchStatus: r } = (0, u.A)(c, {}, { fetchKey: n }),
                        m = t?.get_customer ?? {},
                        { __id: y = "get_customer", id: _, permissions: g, roles: p } = m;
                    return (
                        o()([y], () => {
                            i(), l((e) => e + 1);
                        }),
                        { ...(0, d.S9)({ roles: p, permissions: g }), id: _, permissions: g, roles: p, fetchCount: a, refetchStatus: r }
                    );
                };
        },
        351990: (e, n, a) => {
            a.d(n, { Z: () => g });
            var l,
                s,
                t,
                i = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsConfigQuery",
                        selections: [
                            (s = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: [s, { alias: null, args: l, concreteType: null, kind: "LinkedField", name: "get_transfer_methods_config", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: 'get_transfer_methods_config(s:"4721")' }] },
                    params: { id: "Fu7zu8Ae1f6C--2m6Ho4fQ", metadata: { features: ["payments_transfer_methods_enabled"] }, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            i.hash = "c22392b79e87b157c450129c9ed7e9b8";
            const r = i;
            a(585488);
            var o = a(712696),
                u = a.n(o),
                d = a(68290),
                c = a(848739),
                m = a(514639);
            const y = r,
                _ = { "payments-dev.x.com": m.Re.development, "money-dev.x.com": m.Re.development, "payments-staging.x.com": m.Re.staging, "money-staging.x.com": m.Re.staging, "money.x.com": m.Re.production, "payments-prod.x.com": m.Re.production },
                g = () => {
                    const e = u()(y, {}),
                        n = e?.get_payments_client_config,
                        a = n?.payments_web_host,
                        l = n?.sardine_api_subdomain,
                        s = a ? _[a] : null,
                        t = "https://",
                        i = new Map(),
                        r = new Map(),
                        o = e?.get_transfer_methods_config?.transfer_methods_config;
                    return (
                        o?.forEach(({ fees: e, processing_time: n, transfer_method_type: a }) => {
                            const l = n?.processing_time_type === c.l.RealTime,
                                s = n?.max_duration_in_business_days ?? m.UJ,
                                t = { settleTimeMessage: l ? "Instant" : (({ count: e }) => `Up to ${e} business days`)({ count: s }), Icon: l ? d.default : void 0, processingTime: n, fees: e },
                                o = a?.pull_transfer_method_type,
                                u = a?.push_transfer_method_type;
                            o && r.set(o, t), u && i.set(u, t);
                        }),
                        { environment: s ?? m.Re.production, paymentsOrigin: a ? `${t}${a}` : null, sardineClientID: n?.sardine_client_id, sardineSdkUrl: l ? `https://${l}/assets/loader.min.js` : null, sardineEnvironment: n?.sardine_environment, sardinePixelSubdomain: n?.sardine_pixel_subdomain, sardineApiSubdomain: l, reportUrl: n?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: n?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: n?.socure_public_key, forwardWithSdkUrl: a ? `${t}${a}/${m.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: n?.stripe_issuing_publishable_key, methodConfigs: { debitMethodConfigs: i, creditMethodConfigs: r } }
                    );
                };
        },
        189914: (e, n, a) => {
            a.d(n, { Z: () => F });
            a(136728);
            var l,
                s,
                t,
                i,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "provider_tokens" }]),
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
                                    (i = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateAuthSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateAuthSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: s, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, t, i], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            r.hash = "10451d8395be901d74dce6c7862265ac";
            const o = r;
            var u = a(202784),
                d = a(400752),
                c = (a(585488), a(351743)),
                m = a.n(c),
                y = a(107267),
                _ = a(187669),
                g = a(420182),
                p = a(952793),
                k = a(514639),
                h = a(441484),
                f = a(351990),
                S = a(443781);
            const b = () => {
                    const { featureSwitches: e, history: n } = u.useContext(S.rC),
                        a = e.isTrue("payments_enabled");
                    u.useEffect(() => {
                        if (!a) return;
                        const { remove: e } = n.addInterceptor(
                            (function ({ history: e }) {
                                return {
                                    shouldProceed: (e, n) => (
                                        (function ({ location: e }) {
                                            return e.pathname.startsWith(k.sM);
                                        })({ location: e }) || h.Z.unbind(),
                                        !0
                                    ),
                                };
                            })({ history: n }),
                        );
                        return () => {
                            e();
                        };
                    }, [n, a]);
                },
                K = o,
                F = ({ allowLockedSession: e }) => {
                    const { environment: n, forwardWithSdkUrl: a, sardineApiSubdomain: l, sardineClientID: s, sardineEnvironment: t, sardinePixelSubdomain: i, sardineSdkUrl: r, socurePublicKey: o } = (0, f.Z)(),
                        c = (0, y.useLocation)(),
                        S = (0, y.useHistory)(),
                        F = c.pathname,
                        P = (0, d.Dv)(g.lZ),
                        v = (0, p.hC)("payments_forward_with_enabled"),
                        [C, T] = u.useState(!1),
                        [w] = m()(K),
                        x = u.useCallback(
                            ({ challengeId: e }) => {
                                const n = { challengeId: e, closePath: "/", challengeInitiator: k.kW.auth };
                                S?.location?.pathname !== k.CM ? S.push(k.CM, n) : S.replace(k.CM, n);
                            },
                            [S],
                        ),
                        L = u.useCallback(() => {
                            S.replace(k.D$);
                        }, [S]),
                        A = u.useCallback(
                            (e) =>
                                new Promise((n, a) => {
                                    w({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, l) => {
                                            const s = e?.create_x_payments_auth_session_v2,
                                                t = s?.session_id,
                                                i = s?.customer_id,
                                                r = s?.challenge_id,
                                                o = s?.expiry_time_millis,
                                                u = s?.status;
                                            t && o ? n({ sessionId: t, expiresAtMsec: o, paymentsUserId: i, status: u, challengeId: r }) : a(s?.errors ?? l);
                                        },
                                        onError: a,
                                    });
                                }),
                            [w],
                        );
                    return (
                        b(),
                        (0, _.q)(() => {
                            h.Z.initialize({ environment: n, sardineApiSubdomain: l, sardineClientID: s, sardineEnvironment: t, sardinePixelSubdomain: i, sardineSdkUrl: r, forwardWithSdkUrl: v ? a : null, socurePublicKey: o, flow: F, fetchAuthSession: A, userPersistence: P, redirectToChallenge: x, errorHandler: L, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || T(!0);
                                })
                                .catch(() => {
                                    T(!0);
                                });
                        }),
                        u.useEffect(() => {
                            h.Z.bind(), h.Z.updateFlow(F);
                        }, [F]),
                        [C]
                    );
                };
        },
        482924: (e, n, a) => {
            a.d(n, { A: () => y });
            var l = a(202784),
                s = a(437429),
                t = a.n(s),
                i = a(57074),
                r = a.n(i),
                o = a(10622),
                u = a.n(o),
                d = a(71620),
                c = a(312771),
                m = a(535338);
            function y(e, n, a) {
                const s = r()(n),
                    i = r()(a),
                    o = t()(),
                    y = (0, d.po)(),
                    [_, g] = l.useState(null),
                    [p, k] = l.useState(!1),
                    h = l.useCallback(() => {
                        p ||
                            (k(!0),
                            u()(o, e, s, { networkCacheConfig: i?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    k(!1);
                                },
                                error: (e) => {
                                    y(e), k(!1), g(e);
                                },
                            }));
                    }, [o, y, e, p, s, i]),
                    f = (0, m.p)(e, n, a);
                return l.useMemo(() => (_ ? { data: f, refetch: h, refetchStatus: c.ZP.FAILED, refetchError: _ } : { data: f, refetch: h, refetchStatus: p ? c.ZP.LOADING : c.ZP.NONE, refetchError: void 0 }), [f, _, p, h]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Payments~bundle.PaymentShared.5b10c78a.js.map

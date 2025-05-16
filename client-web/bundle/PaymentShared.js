"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentShared"],
    {
        848739: (e, n, a) => {
            a.d(n, { l: () => s });
            const s = Object.freeze({ Delayed: "Delayed", RealTime: "RealTime" });
        },
        217995: (e, n, a) => {
            a.d(n, { Z: () => t });
            var s,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsAccountStatusQuery",
                        selections: (s = [
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsAccountStatusQuery", selections: s },
                    params: { id: "8qNB72LDdA7MIPa-TSs5nw", metadata: {}, name: "usePaymentsAccountStatusQuery", operationKind: "query", text: null },
                };
            l.hash = "037ff302ff922b7d6eaecbcec3eb1fdb";
            const t = l;
        },
        990312: (e, n, a) => {
            a.d(n, { Z: () => i });
            var s,
                l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsConfigQuery",
                        selections: [
                            (l = {
                                alias: null,
                                args: (s = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                args: s,
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: [l, { alias: null, args: s, concreteType: null, kind: "LinkedField", name: "get_transfer_methods_config", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, t], storageKey: 'get_transfer_methods_config(s:"4721")' }] },
                    params: { id: "Fu7zu8Ae1f6C--2m6Ho4fQ", metadata: { features: ["payments_transfer_methods_enabled"] }, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            r.hash = "c22392b79e87b157c450129c9ed7e9b8";
            const i = r;
        },
        708419: (e, n, a) => {
            a.d(n, { Z: () => o });
            var s,
                l,
                t,
                r,
                i = {
                    fragment: {
                        argumentDefinitions: (s = [{ defaultValue: null, kind: "LocalArgument", name: "provider_tokens" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "usePaymentsSessionMutation",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
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
                                    (r = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsCreateAuthSessionError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsCreateAuthSessionFailure", abstractKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: s, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: l, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, t, r], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            i.hash = "10451d8395be901d74dce6c7862265ac";
            const o = i;
        },
        292546: (e, n, a) => {
            a.d(n, { Z: () => t });
            a(543673), a(240753), a(128399), a(136728);
            var s = a(202784),
                l = a(107267);
            const t = () => {
                const e = (0, l.useLocation)(),
                    n = (0, l.useHistory)(),
                    [a, t] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    t(new URLSearchParams(e.search));
                }, [e.search]);
                const r = s.useCallback(
                    (s, l) => {
                        const t = new URLSearchParams(a);
                        t.set(s, l), n.push(`${e.pathname}?${t.toString()}`);
                    },
                    [n, e.pathname, a],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), r];
            };
        },
        445664: (e, n, a) => {
            a.d(n, { Z: () => p, v: () => m });
            var s = a(217995),
                l = a(202784),
                t = a(10622),
                r = a.n(t),
                i = (a(585488), a(353391)),
                o = a.n(i),
                u = a(482924),
                c = a(698478);
            const d = s.Z,
                m = ({ environment: e }) =>
                    r()(e, d, {}, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const { permissions: n, roles: a } = e?.get_customer || {};
                            return { permissions: n, roles: a };
                        })
                        .catch(() => null),
                p = (e) => {
                    const n = e?.fetchKey,
                        [a, s] = l.useState(1),
                        { data: t, refetch: r, refetchStatus: i } = (0, u.A)(d, {}, { fetchKey: n }),
                        m = t?.get_customer ?? {},
                        { __id: p = "get_customer", id: y, permissions: g, roles: _ } = m;
                    return (
                        o()([p], () => {
                            r(), s((e) => e + 1);
                        }),
                        { ...(0, c.S9)({ roles: _, permissions: g }), id: y, permissions: g, roles: _, fetchCount: a, refetchStatus: i }
                    );
                };
        },
        412450: (e, n, a) => {
            a.d(n, { Z: () => d });
            var s = a(990312),
                l = (a(585488), a(712696)),
                t = a.n(l),
                r = a(68290),
                i = a(848739),
                o = a(514639);
            const u = s.Z,
                c = { "payments-dev.x.com": o.Re.development, "money-dev.x.com": o.Re.development, "payments-staging.x.com": o.Re.staging, "money-staging.x.com": o.Re.staging, "money.x.com": o.Re.production, "payments-prod.x.com": o.Re.production },
                d = () => {
                    const e = t()(u, {}),
                        n = e?.get_payments_client_config,
                        a = n?.payments_web_host,
                        s = n?.sardine_api_subdomain,
                        l = a ? c[a] : null,
                        d = "https://",
                        m = new Map(),
                        p = new Map(),
                        y = e?.get_transfer_methods_config?.transfer_methods_config;
                    return (
                        y?.forEach(({ fees: e, processing_time: n, transfer_method_type: a }) => {
                            const s = n?.processing_time_type === i.l.RealTime,
                                l = n?.max_duration_in_business_days ?? o.UJ,
                                t = { settleTimeMessage: s ? "Instant" : (({ count: e }) => `Up to ${e} business days`)({ count: l }), Icon: s ? r.default : void 0, processingTime: n, fees: e },
                                u = a?.pull_transfer_method_type,
                                c = a?.push_transfer_method_type;
                            u && p.set(u, t), c && m.set(c, t);
                        }),
                        { environment: l ?? o.Re.production, paymentsOrigin: a ? `${d}${a}` : null, sardineClientID: n?.sardine_client_id, sardineSdkUrl: s ? `https://${s}/assets/loader.min.js` : null, sardineEnvironment: n?.sardine_environment, sardinePixelSubdomain: n?.sardine_pixel_subdomain, sardineApiSubdomain: s, reportUrl: n?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: n?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: n?.socure_public_key, forwardWithSdkUrl: a ? `${d}${a}/${o.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: n?.stripe_issuing_publishable_key, methodConfigs: { debitMethodConfigs: m, creditMethodConfigs: p } }
                    );
                };
        },
        983304: (e, n, a) => {
            a.d(n, { Z: () => h });
            a(136728);
            var s = a(708419),
                l = a(202784),
                t = a(400752),
                r = (a(585488), a(351743)),
                i = a.n(r),
                o = a(107267),
                u = a(187669),
                c = a(420182),
                d = a(952793),
                m = a(514639),
                p = a(441484),
                y = a(412450),
                g = a(443781);
            const _ = () => {
                    const { featureSwitches: e, history: n } = l.useContext(g.rC),
                        a = e.isTrue("payments_enabled");
                    l.useEffect(() => {
                        if (!a) return;
                        const { remove: e } = n.addInterceptor(
                            (function ({ history: e }) {
                                return {
                                    shouldProceed: (e, n) => (
                                        (function ({ location: e }) {
                                            return e.pathname.startsWith(m.sM);
                                        })({ location: e }) || p.Z.unbind(),
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
                f = s.Z,
                h = ({ allowLockedSession: e }) => {
                    const { environment: n, forwardWithSdkUrl: a, sardineApiSubdomain: s, sardineClientID: r, sardineEnvironment: g, sardinePixelSubdomain: h, sardineSdkUrl: k, socurePublicKey: S } = (0, y.Z)(),
                        b = (0, o.useLocation)(),
                        K = (0, o.useHistory)(),
                        F = b.pathname,
                        v = (0, t.Dv)(c.lZ),
                        P = (0, d.hC)("payments_forward_with_enabled"),
                        [C, w] = l.useState(!1),
                        [T] = i()(f),
                        x = l.useCallback(
                            ({ challengeId: e }) => {
                                const n = { challengeId: e, closePath: "/", challengeInitiator: m.kW.auth };
                                K?.location?.pathname !== m.CM ? K.push(m.CM, n) : K.replace(m.CM, n);
                            },
                            [K],
                        ),
                        A = l.useCallback(() => {
                            K.replace(m.D$);
                        }, [K]),
                        L = l.useCallback(
                            (e) =>
                                new Promise((n, a) => {
                                    T({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, s) => {
                                            const l = e?.create_x_payments_auth_session_v2,
                                                t = l?.session_id,
                                                r = l?.customer_id,
                                                i = l?.challenge_id,
                                                o = l?.expiry_time_millis,
                                                u = l?.status;
                                            t && o ? n({ sessionId: t, expiresAtMsec: o, paymentsUserId: r, status: u, challengeId: i }) : a(l?.errors ?? s);
                                        },
                                        onError: a,
                                    });
                                }),
                            [T],
                        );
                    return (
                        _(),
                        (0, u.q)(() => {
                            p.Z.initialize({ environment: n, sardineApiSubdomain: s, sardineClientID: r, sardineEnvironment: g, sardinePixelSubdomain: h, sardineSdkUrl: k, forwardWithSdkUrl: P ? a : null, socurePublicKey: S, flow: F, fetchAuthSession: L, userPersistence: v, redirectToChallenge: x, errorHandler: A, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || w(!0);
                                })
                                .catch(() => {
                                    w(!0);
                                });
                        }),
                        l.useEffect(() => {
                            p.Z.bind(), p.Z.updateFlow(F);
                        }, [F]),
                        [C]
                    );
                };
        },
        482924: (e, n, a) => {
            a.d(n, { A: () => p });
            var s = a(202784),
                l = a(437429),
                t = a.n(l),
                r = a(57074),
                i = a.n(r),
                o = a(10622),
                u = a.n(o),
                c = a(71620),
                d = a(312771),
                m = a(535338);
            function p(e, n, a) {
                const l = i()(n),
                    r = i()(a),
                    o = t()(),
                    p = (0, c.po)(),
                    [y, g] = s.useState(null),
                    [_, f] = s.useState(!1),
                    h = s.useCallback(() => {
                        _ ||
                            (f(!0),
                            u()(o, e, l, { networkCacheConfig: r?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    f(!1);
                                },
                                error: (e) => {
                                    p(e), f(!1), g(e);
                                },
                            }));
                    }, [o, p, e, _, l, r]),
                    k = (0, m.p)(e, n, a);
                return s.useMemo(() => (y ? { data: k, refetch: h, refetchStatus: d.ZP.FAILED, refetchError: y } : { data: k, refetch: h, refetchStatus: _ ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [k, y, _, h]);
            }
        },
        762371: (e, n, a) => {
            a.r(n), a.d(n, { default: () => g });
            var s = a(807896),
                l = a(202784),
                t = a(682830),
                r = a(514639),
                i = a(445664),
                o = a(983304),
                u = a(441484),
                c = a(615027),
                d = a(107267),
                m = a(292546);
            const p = ({ isActive: e }) => {
                    const [n] = (0, m.Z)(),
                        a = "notification" === n.get("from"),
                        s = (0, d.useParams)().transactionId;
                    return a && s && !e ? { pathname: r.Cz, state: { inviteTransactionId: s } } : void 0;
                },
                y = ({ Component: e, options: n, ...a }) => {
                    const { permissionsAllOf: s, permissionsAnyOf: t, requireRedirect: o = !0 } = n,
                        { location: d } = a,
                        m = d.state?.cameFromOCF ? "PaymentsFromOcf" : "Payments",
                        { id: y, isActive: g, paymentsRedirectPath: _, permissions: f } = (0, i.Z)({ fetchKey: m });
                    l.useEffect(() => {
                        y && u.Z.updateUserId(y);
                    }, [y]);
                    const h = p({ isActive: g }),
                        k = d.pathname;
                    if (h) return l.createElement(c.Z, { to: h });
                    if (!g && o && k !== _) return l.createElement(c.Z, { to: _ });
                    const S = !s || s.every((e) => f?.includes(e)),
                        b = !t || t.some((e) => f?.includes(e));
                    return !f || (S && b) ? l.createElement(e, a) : l.createElement(c.Z, { to: r.Xj });
                };
            function g({ Component: e, options: n, ...a }) {
                const { allowLockedSession: r, permissionsAllOf: i, permissionsAnyOf: u } = n,
                    [c] = (0, o.Z)({ allowLockedSession: !!r });
                return c ? (i || u ? l.createElement(y, (0, s.Z)({ Component: e, options: n }, a)) : l.createElement(e, a)) : l.createElement(t.J, null);
            }
        },
        195319: (e, n, a) => {
            a.r(n), a.d(n, { default: () => r });
            var s = a(202784),
                l = a(514639),
                t = a(615027);
            function r() {
                return s.createElement(t.Z, { to: l.Js });
            }
        },
        353391: (e, n, a) => {
            var s = a(437429),
                l = a(202784),
                t = l.useEffect,
                r = l.useRef;
            e.exports = function (e, n) {
                var a = s(),
                    l = r(null),
                    i = Array.from(e).sort().join("");
                return (
                    t(
                        function () {
                            var s = a.getStore(),
                                t = s.lookupInvalidationState(e),
                                r = s.subscribeToInvalidationState(t, n);
                            return (
                                (l.current = r),
                                function () {
                                    return r.dispose();
                                }
                            );
                        },
                        [i, n, a],
                    ),
                    {
                        dispose: function () {
                            null != l.current && l.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentShared.24a7ceaa.js.map

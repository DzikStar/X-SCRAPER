"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PaymentShared"],
    {
        217995: (e, n, a) => {
            a.d(n, { Z: () => l });
            var s,
                t = {
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
            t.hash = "037ff302ff922b7d6eaecbcec3eb1fdb";
            const l = t;
        },
        990312: (e, n, a) => {
            a.d(n, { Z: () => g });
            var s,
                t,
                l,
                r,
                i,
                o,
                u,
                c,
                d,
                m,
                p,
                y = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "usePaymentsConfigQuery", selections: [{ alias: null, args: (s = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "XPaymentsClientConfig", kind: "LinkedField", name: "get_payments_client_config", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "payments_web_host", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "sardine_client_id", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "sardine_environment", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "payments_help_url", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "payments_report_url", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "socure_public_key", storageKey: null }), (c = { alias: null, args: null, kind: "ScalarField", name: "sardine_api_subdomain", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "sardine_pixel_subdomain", storageKey: null }), (m = { alias: null, args: null, kind: "ScalarField", name: "stripe_issuing_publishable_key", storageKey: null }), { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "support_user_results", plural: !1, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null }], storageKey: 'get_payments_client_config(s:"4721")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "usePaymentsConfigQuery", selections: [{ alias: null, args: s, concreteType: "XPaymentsClientConfig", kind: "LinkedField", name: "get_payments_client_config", plural: !1, selections: [t, l, r, i, o, u, c, d, m, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "support_user_results", plural: !1, selections: [p, { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }], storageKey: null }], storageKey: 'get_payments_client_config(s:"4721")' }] },
                    params: { id: "-TBm0_BxUHEZ7fDytRK56w", metadata: {}, name: "usePaymentsConfigQuery", operationKind: "query", text: null },
                };
            y.hash = "24ca119581f699e09a75f018e33d2bce";
            const g = y;
        },
        708419: (e, n, a) => {
            a.d(n, { Z: () => o });
            var s,
                t,
                l,
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
                                args: (t = [
                                    { kind: "Variable", name: "provider_tokens", variableName: "provider_tokens" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_x_payments_auth_session_v2",
                                plural: !1,
                                selections: [
                                    (l = {
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
                    operation: { argumentDefinitions: s, kind: "Operation", name: "usePaymentsSessionMutation", selections: [{ alias: null, args: t, concreteType: null, kind: "LinkedField", name: "create_x_payments_auth_session_v2", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsCreateAuthSessionResult" }, l, r], storageKey: null }] },
                    params: { id: "jrS6luzi2VuDNWvsG4ZSZA", metadata: {}, name: "usePaymentsSessionMutation", operationKind: "mutation", text: null },
                };
            i.hash = "10451d8395be901d74dce6c7862265ac";
            const o = i;
        },
        292546: (e, n, a) => {
            a.d(n, { Z: () => l });
            a(543673), a(240753), a(128399), a(136728);
            var s = a(202784),
                t = a(107267);
            const l = () => {
                const e = (0, t.useLocation)(),
                    n = (0, t.useHistory)(),
                    [a, l] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    l(new URLSearchParams(e.search));
                }, [e.search]);
                const r = s.useCallback(
                    (s, t) => {
                        const l = new URLSearchParams(a);
                        l.set(s, t), n.push(`${e.pathname}?${l.toString()}`);
                    },
                    [n, e.pathname, a],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), r];
            };
        },
        445664: (e, n, a) => {
            a.d(n, { Z: () => p, v: () => m });
            var s = a(217995),
                t = a(202784),
                l = a(10622),
                r = a.n(l),
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
                        [a, s] = t.useState(1),
                        { data: l, refetch: r, refetchStatus: i } = (0, u.A)(d, {}, { fetchKey: n }),
                        m = l?.get_customer ?? {},
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
            a.d(n, { Z: () => u });
            var s = a(990312),
                t = (a(585488), a(712696)),
                l = a.n(t),
                r = a(514639);
            const i = s.Z,
                o = { "payments-dev.x.com": r.Re.development, "money-dev.x.com": r.Re.development, "payments-staging.x.com": r.Re.staging, "money-staging.x.com": r.Re.staging, "money.x.com": r.Re.production, "payments-prod.x.com": r.Re.production },
                u = () => {
                    const e = l()(i, {}),
                        n = e?.get_payments_client_config,
                        a = n?.payments_web_host,
                        s = n?.sardine_api_subdomain,
                        t = "https://";
                    return { environment: (a ? o[a] : null) ?? r.Re.production, paymentsOrigin: a ? `${t}${a}` : null, sardineClientID: n?.sardine_client_id, sardineSdkUrl: s ? `https://${s}/assets/loader.min.js` : null, sardineEnvironment: n?.sardine_environment, sardinePixelSubdomain: n?.sardine_pixel_subdomain, sardineApiSubdomain: s, reportUrl: n?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: n?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: n?.socure_public_key, forwardWithSdkUrl: a ? `${t}${a}/${r.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: n?.stripe_issuing_publishable_key, supportUserId: n?.support_user_results?.rest_id };
                };
        },
        983304: (e, n, a) => {
            a.d(n, { Z: () => h });
            a(136728);
            var s = a(708419),
                t = a(202784),
                l = a(400752),
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
                    const { featureSwitches: e, history: n } = t.useContext(g.rC),
                        a = e.isTrue("payments_enabled");
                    t.useEffect(() => {
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
                k = s.Z,
                h = ({ allowLockedSession: e }) => {
                    const { environment: n, forwardWithSdkUrl: a, sardineApiSubdomain: s, sardineClientID: r, sardineEnvironment: g, sardinePixelSubdomain: h, sardineSdkUrl: f, socurePublicKey: S } = (0, y.Z)(),
                        b = (0, o.useLocation)(),
                        v = (0, o.useHistory)(),
                        K = b.pathname,
                        P = (0, l.Dv)(c.lZ),
                        F = (0, d.hC)("payments_forward_with_enabled"),
                        [C, w] = t.useState(!1),
                        [Z] = i()(k),
                        x = t.useCallback(
                            ({ challengeId: e }) => {
                                const n = { challengeId: e, closePath: "/", challengeInitiator: m.kW.auth },
                                    a = v?.location?.pathname;
                                a === K && (a !== m.CM ? v.push(m.CM, n) : v.replace(m.CM, n));
                            },
                            [K, v],
                        ),
                        A = t.useCallback(() => {
                            v.replace(m.D$);
                        }, [v]),
                        L = t.useCallback(
                            (e) =>
                                new Promise((n, a) => {
                                    Z({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, s) => {
                                            const t = e?.create_x_payments_auth_session_v2,
                                                l = t?.session_id,
                                                r = t?.customer_id,
                                                i = t?.challenge_id,
                                                o = t?.expiry_time_millis,
                                                u = t?.status;
                                            l && o ? n({ sessionId: l, expiresAtMsec: o, paymentsUserId: r, status: u, challengeId: i }) : a(t?.errors ?? s);
                                        },
                                        onError: a,
                                    });
                                }),
                            [Z],
                        );
                    return (
                        _(),
                        (0, u.q)(() => {
                            p.Z.initialize({ environment: n, sardineApiSubdomain: s, sardineClientID: r, sardineEnvironment: g, sardinePixelSubdomain: h, sardineSdkUrl: f, forwardWithSdkUrl: F ? a : null, socurePublicKey: S, flow: K, fetchAuthSession: L, userPersistence: P, redirectToChallenge: x, errorHandler: A, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || w(!0);
                                })
                                .catch(() => {
                                    w(!0);
                                });
                        }),
                        t.useEffect(() => {
                            p.Z.bind(), p.Z.updateFlow(K);
                        }, [K]),
                        [C]
                    );
                };
        },
        482924: (e, n, a) => {
            a.d(n, { A: () => p });
            var s = a(202784),
                t = a(437429),
                l = a.n(t),
                r = a(57074),
                i = a.n(r),
                o = a(10622),
                u = a.n(o),
                c = a(71620),
                d = a(312771),
                m = a(535338);
            function p(e, n, a) {
                const t = i()(n),
                    r = i()(a),
                    o = l()(),
                    p = (0, c.po)(),
                    [y, g] = s.useState(null),
                    [_, k] = s.useState(!1),
                    h = s.useCallback(() => {
                        _ ||
                            (k(!0),
                            u()(o, e, t, { networkCacheConfig: r?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    k(!1);
                                },
                                error: (e) => {
                                    p(e), k(!1), g(e);
                                },
                            }));
                    }, [o, p, e, _, t, r]),
                    f = (0, m.p)(e, n, a);
                return s.useMemo(() => (y ? { data: f, refetch: h, refetchStatus: d.ZP.FAILED, refetchError: y } : { data: f, refetch: h, refetchStatus: _ ? d.ZP.LOADING : d.ZP.NONE, refetchError: void 0 }), [f, y, _, h]);
            }
        },
        762371: (e, n, a) => {
            a.r(n), a.d(n, { default: () => g });
            var s = a(807896),
                t = a(202784),
                l = a(682830),
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
                    const { permissionsAllOf: s, permissionsAnyOf: l, requireRedirect: o = !0 } = n,
                        { location: d } = a,
                        m = d.state?.cameFromOCF ? "PaymentsFromOcf" : "Payments",
                        { id: y, isActive: g, paymentsRedirectPath: _, permissions: k } = (0, i.Z)({ fetchKey: m });
                    t.useEffect(() => {
                        y && u.Z.updateUserId(y);
                    }, [y]);
                    const h = p({ isActive: g }),
                        f = d.pathname;
                    if (h) return t.createElement(c.Z, { to: h });
                    if (!g && o && f !== _) return t.createElement(c.Z, { to: _ });
                    const S = !s || s.every((e) => k?.includes(e)),
                        b = !l || l.some((e) => k?.includes(e));
                    return !k || (S && b) ? t.createElement(e, a) : t.createElement(c.Z, { to: r.Xj });
                };
            function g({ Component: e, options: n, ...a }) {
                const { allowLockedSession: r, permissionsAllOf: i, permissionsAnyOf: u } = n,
                    [c] = (0, o.Z)({ allowLockedSession: !!r });
                return c ? (i || u ? t.createElement(y, (0, s.Z)({ Component: e, options: n }, a)) : t.createElement(e, a)) : t.createElement(l.J, null);
            }
        },
        353391: (e, n, a) => {
            var s = a(437429),
                t = a(202784),
                l = t.useEffect,
                r = t.useRef;
            e.exports = function (e, n) {
                var a = s(),
                    t = r(null),
                    i = Array.from(e).sort().join("");
                return (
                    l(
                        function () {
                            var s = a.getStore(),
                                l = s.lookupInvalidationState(e),
                                r = s.subscribeToInvalidationState(l, n);
                            return (
                                (t.current = r),
                                function () {
                                    return r.dispose();
                                }
                            );
                        },
                        [i, n, a],
                    ),
                    {
                        dispose: function () {
                            null != t.current && t.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PaymentShared.9b0fcc0a.js.map

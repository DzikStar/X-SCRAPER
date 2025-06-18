(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e96e9bea", "shared~bundle.AccountAnalytics~ondemand.SettingsRevamp~bundle.Payments~bundle.PremiumHub~bundle.ProfessionalH", "bundle.Communities-8d4c5ae2"],
    {
        629928: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => c });
            var r,
                i,
                a,
                l,
                s,
                u,
                o,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { kind: "InlineFragment", selections: [i, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, l, s, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), u], storageKey: null }, o], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            d.hash = "6269adea05f11011ee2eec87df25951d";
            const c = d;
        },
        993770: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => l });
            var r,
                i,
                a = {
                    fragment: {
                        argumentDefinitions: (r = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: r, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: i },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = a;
        },
        507421: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => s });
            var r,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { kind: "InlineFragment", selections: [a, i], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            l.hash = "b177c906c03e19affd73768f7a0ec360";
            const s = l;
        },
        130919: (e, n, t) => {
            "use strict";
            t.d(n, { t: () => r });
            const r = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => s });
            var r,
                i,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: a },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        762815: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => s });
            var r,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, a], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            l.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = l;
        },
        786033: (e, n, t) => {
            "use strict";
            t.d(n, { Z: () => o });
            var r,
                i,
                a,
                l,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: l, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            u.hash = "88a4b93bad19f92c67d5957375d338be";
            const o = u;
        },
        949874: (e) => {
            e.exports = function (e, n, t) {
                if (((e = e.replace(/\r?\n/g, "")), null != n && n < 5)) throw new Error("Maximum length must not be less than 5");
                if (((n = null != n ? n : 78), e.length <= n)) return e;
                n -= 4;
                var r = [],
                    i = e.length,
                    a = 0,
                    l = 0;
                if (!t) for (; ~(a = e.lastIndexOf(" ", n + l)) && !(a <= l); ) e.slice(l).length > n ? (r.push((l ? " " : "") + e.slice(l, a)), (l = a + 1)) : (r.push((l ? " " : "") + e.slice(l)), (l = i));
                for (n++; l < i; ) r.push(e.slice(l, (l += n)));
                return r.join("\r\n ");
            };
        },
        606161: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(463928)),
                i = t(647677),
                a = t(703383),
                l = a.__internal.fetchQueryDeduped,
                s = a.Observable,
                u = a.PreloadableQueryRegistry,
                o = a.ReplaySubject,
                d = a.createOperationDescriptor,
                c = a.getRequest,
                f = a.getRequestIdentifier,
                y = 100001;
            e.exports = {
                loadQuery: function (e, n, t, a, p) {
                    var m;
                    y++;
                    var g,
                        v,
                        k,
                        h,
                        _,
                        b,
                        w = null !== (m = null == a ? void 0 : a.fetchPolicy) && void 0 !== m ? m : "store-or-network",
                        F = (0, r.default)((0, r.default)({}, null == a ? void 0 : a.networkCacheConfig), {}, { force: !0 }),
                        K = !1,
                        S = function (n, t) {
                            return (K = !0), e.executeWithSource({ operation: n, source: t });
                        },
                        R = new o(),
                        L = s.create(function (e) {
                            return R.subscribe(e);
                        }),
                        C = null,
                        V = !1,
                        I = function (n) {
                            V = !0;
                            var r = new o(),
                                i = "raw-network-request-" + f(n, t),
                                a = l(e, i, function () {
                                    return e.getNetwork().execute(n, t, F);
                                }).subscribe({
                                    error: function (e) {
                                        (C = e), r.error(e);
                                    },
                                    next: function (e) {
                                        r.next(e);
                                    },
                                    complete: function () {
                                        r.complete();
                                    },
                                }).unsubscribe;
                            return (
                                (v = a),
                                s.create(function (e) {
                                    var n = r.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), v();
                                    };
                                })
                            );
                        },
                        P = function (n, t) {
                            V = !0;
                            var r = l(e, n.request.identifier, t).subscribe({
                                error: function (e) {
                                    R.error(e);
                                },
                                next: function (e) {
                                    R.next(e);
                                },
                                complete: function () {
                                    R.complete();
                                },
                            });
                            k = r.unsubscribe;
                        },
                        A = function (n) {
                            var r = d(n, t, F);
                            ((g = e.retain(r)), "store-only" !== w) &&
                                ("store-or-network" !== w || "available" !== e.check(r).status) &&
                                P(r, function () {
                                    var e = I(n.params);
                                    return S(r, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === n.kind) {
                        null === (b = (h = n.params).id) && i(!1);
                        var O = u.get(b);
                        if (null != O) A(O);
                        else {
                            var T = "store-only" === w ? null : I(h),
                                x = u.onLoad(b, function (n) {
                                    _();
                                    var r = d(n, t, F);
                                    (g = e.retain(r)),
                                        null != T &&
                                            P(r, function () {
                                                return S(r, T);
                                            });
                                });
                            _ = x.dispose;
                        }
                    } else {
                        var D = c(n);
                        (b = null != (h = D.params).cacheID ? h.cacheID : h.id), A(D);
                    }
                    var N = !1,
                        Q = !1,
                        E = !1,
                        q = function () {
                            Q || (g && g.dispose(), (Q = !0));
                        },
                        U = function () {
                            E || (K ? k && k() : v && v(), _ && _(), (E = !0));
                        };
                    return {
                        kind: "PreloadedQuery",
                        environment: e,
                        environmentProviderOptions: p,
                        dispose: function () {
                            N || (q(), U(), (N = !0));
                        },
                        releaseQuery: q,
                        cancelNetworkRequest: U,
                        fetchKey: y,
                        id: b,
                        get isDisposed() {
                            return N || Q;
                        },
                        get networkError() {
                            return C;
                        },
                        name: h.name,
                        networkCacheConfig: F,
                        fetchPolicy: w,
                        source: V ? L : void 0,
                        variables: t,
                    };
                },
            };
        },
        928123: (e, n, t) => {
            "use strict";
            var r = t(138239),
                i = t(303566),
                a = t(437429),
                l = t(647677),
                s = (t(202784).useDebugValue, t(703383).__internal),
                u = s.fetchQueryDeduped,
                o = s.fetchQuery;
            t(826590);
            e.exports = function (e, n, t) {
                var s,
                    d = a(),
                    c = n.fetchKey,
                    f = n.fetchPolicy,
                    y = n.source,
                    p = n.variables,
                    m = n.networkCacheConfig,
                    g = i(e, p, m);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    g.request.node.params.name !== n.name && l(!1),
                        (s = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: c,
                            fetchObservable: u(d, g.request.identifier, function () {
                                return d === n.environment && null != y ? d.executeWithSource({ operation: g, source: y }) : d.execute({ operation: g });
                            }),
                            fetchPolicy: f,
                            query: g,
                            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
                        });
                else {
                    var v = o(d, g);
                    s = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != y && d === n.environment ? y.ifEmpty(v) : (n.environment, v), fetchKey: c, fetchPolicy: f, query: g, renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy };
                }
                return r(s);
            };
        },
        72845: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(22395)),
                i = t(606161).loadQuery,
                a = t(995402),
                l = t(667368),
                s = t(437429),
                u = t(202784),
                o = u.useCallback,
                d = u.useEffect,
                c = u.useRef,
                f = u.useState,
                y = t(703383),
                p = y.RelayFeatureFlags,
                m = y.getRequest,
                g = { kind: "NullQueryReference" };
            function v(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== m(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                return p.ENABLE_ACTIVITY_COMPATIBILITY
                    ? l(e, n)
                    : (function (e, n) {
                          var t = null != n ? n : g,
                              l = s(),
                              u = a(),
                              y = c(new Set([t])),
                              p = f(function () {
                                  return t;
                              }),
                              m = p[0],
                              k = p[1],
                              h = f(function () {
                                  return t;
                              }),
                              _ = h[0],
                              b = h[1];
                          t !== _ && (y.current.add(t), b(t), k(t));
                          var w = o(
                                  function () {
                                      u.current && (y.current.add(g), k(g));
                                  },
                                  [u],
                              ),
                              F = o(
                                  function (n, t) {
                                      var r = null != t && t.hasOwnProperty("__environment") ? { fetchPolicy: t.fetchPolicy, networkCacheConfig: t.networkCacheConfig, __nameForWarning: t.__nameForWarning } : t;
                                      if (u.current) {
                                          var a,
                                              s = i(null !== (a = null == t ? void 0 : t.__environment) && void 0 !== a ? a : l, e, n, r);
                                          y.current.add(s), k(s);
                                      }
                                  },
                                  [l, e, k, u],
                              ),
                              K = c(!1);
                          return (
                              d(function () {
                                  return function () {
                                      K.current = !0;
                                  };
                              }, []),
                              d(
                                  function () {
                                      if (!0 === K.current) return (K.current = !1), void ("NullQueryReference" !== m.kind && F(m.variables, { fetchPolicy: m.fetchPolicy, networkCacheConfig: m.networkCacheConfig }));
                                      var n = y.current;
                                      if (u.current) {
                                          var t,
                                              i = (0, r.default)(n);
                                          try {
                                              for (i.s(); !(t = i.n()).done; ) {
                                                  var a = t.value;
                                                  if (a === m) break;
                                                  n.delete(a), "NullQueryReference" !== a.kind && (v(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                                              }
                                          } catch (e) {
                                              i.e(e);
                                          } finally {
                                              i.f();
                                          }
                                      }
                                  },
                                  [m, u, F, e],
                              ),
                              d(
                                  function () {
                                      return function () {
                                          var n,
                                              t = (0, r.default)(y.current);
                                          try {
                                              for (t.s(); !(n = t.n()).done; ) {
                                                  var i = n.value;
                                                  "NullQueryReference" !== i.kind && (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery());
                                              }
                                          } catch (e) {
                                              t.e(e);
                                          } finally {
                                              t.f();
                                          }
                                      };
                                  },
                                  [e],
                              ),
                              ["NullQueryReference" === m.kind ? null : m, F, w]
                          );
                      })(e, n);
            };
        },
        667368: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(22395)),
                i = t(606161).loadQuery,
                a = t(995402),
                l = t(437429),
                s = t(202784),
                u = s.useCallback,
                o = s.useEffect,
                d = s.useInsertionEffect,
                c = s.useRef,
                f = s.useState,
                y = t(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var t = null != n ? n : p,
                    s = l(),
                    y = a(),
                    g = c(null);
                null == g.current && (g.current = new Set([t]));
                var v,
                    k = f(function () {
                        return t;
                    }),
                    h = k[0],
                    _ = k[1],
                    b = f(function () {
                        return t;
                    }),
                    w = b[0],
                    F = b[1];
                t !== w && (null === (v = g.current) || void 0 === v || v.add(t), F(t), _(t));
                var K = u(
                        function () {
                            var e;
                            y.current && (null === (e = g.current) || void 0 === e || e.add(p), _(p));
                        },
                        [y],
                    ),
                    S = u(
                        function (n, t) {
                            var r, a;
                            if (y.current) {
                                var l = null != t && t.hasOwnProperty("__environment") ? { fetchPolicy: t.fetchPolicy, networkCacheConfig: t.networkCacheConfig, __nameForWarning: t.__nameForWarning } : t,
                                    u = i(null !== (r = null == t ? void 0 : t.__environment) && void 0 !== r ? r : s, e, n, l);
                                null === (a = g.current) || void 0 === a || a.add(u), _(u);
                            }
                        },
                        [s, e, _, y],
                    ),
                    R = u(function (e, n) {
                        var t,
                            i,
                            a = null !== (t = g.current) && void 0 !== t ? t : new Set(),
                            l = (0, r.default)(a);
                        try {
                            for (l.s(); !(i = l.n()).done; ) {
                                var s = i.value;
                                s !== n && "NullQueryReference" !== s.kind && (m(e) ? s.dispose && s.dispose() : s.releaseQuery && s.releaseQuery());
                            }
                        } catch (e) {
                            l.e(e);
                        } finally {
                            l.f();
                        }
                    }, []),
                    L = c(null);
                return (
                    o(
                        function () {
                            return (
                                R(e, h),
                                null != L.current && (clearTimeout(L.current), (L.current = null)),
                                function () {
                                    L.current = setTimeout(function () {
                                        R(e, null);
                                    }, 3e5);
                                }
                            );
                        },
                        [e, h],
                    ),
                    d(
                        function () {
                            return function () {
                                L.current && clearTimeout(L.current), (L.current = null), R(e, null);
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === h.kind ? null : h, S, K]
                );
            };
        },
        819858: (e, n, t) => {
            var r = t(691925),
                i = t(21681);
            function a(e, n, t) {
                Array.isArray(e[n]) ? e[n].push(t) : null != e[n] ? (e[n] = [e[n], t]) : (e[n] = t);
            }
            function l(e, n) {
                var t = n.split("="),
                    i = r(t[0]),
                    l = t[1];
                return (
                    (null != l && "" !== l) || ((l = t[0]), (i = "type")),
                    "type" === i
                        ? (l
                              .toLowerCase()
                              .split(",")
                              .forEach(function (n) {
                                  a(e, i, n);
                              }),
                          e)
                        : (a(e, i, l), e)
                );
            }
            e.exports = function (e) {
                for (var n = {}, t = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, u = e.length - 1, o = 1; o < u; o++) {
                    t = e[o];
                    var d = s.exec(t);
                    if (d) {
                        var c = d[1].split("."),
                            f = c.pop(),
                            y = c.pop(),
                            p = d[3],
                            m = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(l, y ? { group: y } : {}),
                            g = r(f);
                        a(n, g, new i(g, p, m));
                    }
                }
                return n;
            };
        },
        21681: (e) => {
            function n(e, t, r) {
                if (!(this instanceof n)) return new n(t);
                null != r && Object.assign(this, r), (this._field = e), (this._data = t), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function t(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (n.fromJSON = function (e) {
                var t = e[0],
                    r = e[1];
                return /text/i.test(e[2]) || (r.value = e[2]), new n(t, Array.isArray(e[3]) ? e[3].join(";") : e[3], r);
            }),
                (n.prototype = {
                    constructor: n,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new n(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var n = (this.group ? this.group + "." : "") + t(this._field), r = Object.keys(this), i = [], a = 0; a < r.length; a++) "group" !== r[a] && i.push(t(r[a]) + "=" + this[r[a]]);
                        return n + (i.length ? ";" + i.join(";") : i) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var n = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                n.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                n.push(this._data.split(";"));
                        }
                        return n;
                    },
                }),
                (e.exports = n);
        },
        588960: (e, n, t) => {
            function r() {
                if (!(this instanceof r)) return new r();
                (this.version = r.versions[r.versions.length - 1]), (this.data = {});
            }
            (r.mimeType = "text/vcard"),
                (r.extension = ".vcf"),
                (r.versions = ["2.1", "3.0", "4.0"]),
                (r.foldLine = t(949874)),
                (r.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (r.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e);
                }),
                (r.parse = function (e) {
                    for (var n = (e + "").split(/(?=BEGIN\:VCARD)/gi), t = [], i = 0; i < n.length; i++) t.push(new r().parse(n[i]));
                    return t;
                }),
                (r.parseLines = t(819858)),
                (r.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new r();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var n = new r();
                    return (
                        e[1].forEach(function (e) {
                            n.addProperty(r.Property.fromJSON(e));
                        }),
                        n
                    );
                }),
                (r.format = function (e, n) {
                    if (((n = n || e.version || r.versions[r.versions.length - 1]), !r.isSupported(n))) throw new Error('Unsupported vCard version "' + n + '"');
                    var t = [];
                    t.push("BEGIN:VCARD"), t.push("VERSION:" + n);
                    for (var i = Object.keys(e.data), a = "", l = 0; l < i.length; l++)
                        if ("version" !== i[l])
                            if (((a = e.data[i[l]]), Array.isArray(a))) for (var s = 0; s < a.length; s++) a[s].isEmpty() || t.push(r.foldLine(a[s].toString(n), 75));
                            else a.isEmpty() || t.push(r.foldLine(a.toString(n), 75));
                    return t.push("END:VCARD"), t.join("\n");
                }),
                (r.Property = t(21681)),
                (r.prototype = {
                    constructor: r,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, n, t) {
                        return this.setProperty(new r.Property(e, n, t));
                    },
                    add: function (e, n, t) {
                        var i = new r.Property(e, n, t);
                        return this.addProperty(i), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var n = e._field;
                        return Array.isArray(this.data[n]) ? this.data[n].push(e) : null != this.data[n] ? (this.data[n] = [this.data[n], e]) : (this.data[n] = e), this;
                    },
                    parse: function (e) {
                        var n = r.normalize(e).split(/\r?\n/g),
                            t = n[0],
                            i = n[1],
                            a = n[n.length - 1];
                        if (!/BEGIN:VCARD/i.test(t)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + t + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !r.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = r.parseLines(n)), this;
                    },
                    toString: function (e, n) {
                        return (e = e || this.version), r.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var n = Object.keys(this.data), t = [["version", {}, "text", e]], r = null, i = 0; i < n.length; i++)
                            if ("version" !== n[i])
                                if (((r = this.data[n[i]]), Array.isArray(r))) for (var a = 0; a < r.length; a++) t.push(r[a].toJSON());
                                else t.push(r.toJSON());
                        return ["vcard", t];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = r);
        },
        691925: (e) => {
            "use strict";
            e.exports = function () {
                var e = [].map
                    .call(arguments, function (e) {
                        return e.trim();
                    })
                    .filter(function (e) {
                        return e.length;
                    })
                    .join("-");
                return e.length
                    ? 1 === e.length
                        ? e.toLowerCase()
                        : /[_.\- ]+/.test(e)
                          ? (e = (function (e) {
                                for (var n = !1, t = 0; t < e.length; t++) {
                                    var r = e.charAt(t);
                                    n && /[a-zA-Z]/.test(r) && r.toUpperCase() === r ? ((e = e.substr(0, t) + "-" + e.substr(t)), (n = !1), t++) : (n = r.toLowerCase() === r);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, n) {
                                    return n.toUpperCase();
                                })
                          : e === e.toUpperCase()
                            ? e.toLowerCase()
                            : e[0] !== e[0].toLowerCase()
                              ? e[0].toLowerCase() + e.slice(1)
                              : e
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e96e9bea.a66f47ca.js.map

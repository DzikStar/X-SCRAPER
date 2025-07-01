(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e96e9bea", "shared~bundle.AccountAnalytics~ondemand.SettingsRevamp~bundle.PremiumHub~bundle.ProfessionalHome~ondemand.Ins", "bundle.Communities-8d4c5ae2"],
    {
        629928: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => c });
            var t,
                i,
                a,
                l,
                s,
                u,
                o,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (u = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: t,
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
        993770: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => l });
            var t,
                i,
                a = {
                    fragment: {
                        argumentDefinitions: (t = [
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
                    operation: { argumentDefinitions: t, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: i },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = a;
        },
        507421: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => s });
            var t,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: t,
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
        130919: (e, n, r) => {
            "use strict";
            r.d(n, { t: () => t });
            const t = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => s });
            var t,
                i,
                a,
                l = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (i = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
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
                    operation: { argumentDefinitions: [i, t], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: a },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        762815: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => s });
            var t,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: t,
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
        786033: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => o });
            var t,
                i,
                a,
                l,
                s,
                u = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
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
                    operation: { argumentDefinitions: [i, t, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            u.hash = "88a4b93bad19f92c67d5957375d338be";
            const o = u;
        },
        949874: (e) => {
            e.exports = function (e, n, r) {
                if (((e = e.replace(/\r?\n/g, "")), null != n && n < 5)) throw new Error("Maximum length must not be less than 5");
                if (((n = null != n ? n : 78), e.length <= n)) return e;
                n -= 4;
                var t = [],
                    i = e.length,
                    a = 0,
                    l = 0;
                if (!r) for (; ~(a = e.lastIndexOf(" ", n + l)) && !(a <= l); ) e.slice(l).length > n ? (t.push((l ? " " : "") + e.slice(l, a)), (l = a + 1)) : (t.push((l ? " " : "") + e.slice(l)), (l = i));
                for (n++; l < i; ) t.push(e.slice(l, (l += n)));
                return t.join("\r\n ");
            };
        },
        606161: (e, n, r) => {
            "use strict";
            var t = (0, r(902091).default)(r(463928)),
                i = r(647677),
                a = r(703383),
                l = a.__internal.fetchQueryDeduped,
                s = a.Observable,
                u = a.PreloadableQueryRegistry,
                o = a.ReplaySubject,
                d = a.createOperationDescriptor,
                c = a.getRequest,
                f = a.getRequestIdentifier,
                y = 100001;
            e.exports = {
                loadQuery: function (e, n, r, a, p) {
                    var m;
                    y++;
                    var g,
                        v,
                        k,
                        h,
                        _,
                        b,
                        w = null !== (m = null == a ? void 0 : a.fetchPolicy) && void 0 !== m ? m : "store-or-network",
                        F = (0, t.default)((0, t.default)({}, null == a ? void 0 : a.networkCacheConfig), {}, { force: !0 }),
                        K = !1,
                        S = function (n, r) {
                            return (K = !0), e.executeWithSource({ operation: n, source: r });
                        },
                        R = new o(),
                        L = s.create(function (e) {
                            return R.subscribe(e);
                        }),
                        C = null,
                        V = !1,
                        I = function (n) {
                            V = !0;
                            var t = new o(),
                                i = "raw-network-request-" + f(n, r),
                                a = l(e, i, function () {
                                    return e.getNetwork().execute(n, r, F);
                                }).subscribe({
                                    error: function (e) {
                                        (C = e), t.error(e);
                                    },
                                    next: function (e) {
                                        t.next(e);
                                    },
                                    complete: function () {
                                        t.complete();
                                    },
                                }).unsubscribe;
                            return (
                                (v = a),
                                s.create(function (e) {
                                    var n = t.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), v();
                                    };
                                })
                            );
                        },
                        P = function (n, r) {
                            V = !0;
                            var t = l(e, n.request.identifier, r).subscribe({
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
                            k = t.unsubscribe;
                        },
                        A = function (n) {
                            var t = d(n, r, F);
                            ((g = e.retain(t)), "store-only" !== w) &&
                                ("store-or-network" !== w || "available" !== e.check(t).status) &&
                                P(t, function () {
                                    var e = I(n.params);
                                    return S(t, e);
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
                                    var t = d(n, r, F);
                                    (g = e.retain(t)),
                                        null != T &&
                                            P(t, function () {
                                                return S(t, T);
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
                        variables: r,
                    };
                },
            };
        },
        928123: (e, n, r) => {
            "use strict";
            var t = r(138239),
                i = r(303566),
                a = r(437429),
                l = r(647677),
                s = (r(202784).useDebugValue, r(703383).__internal),
                u = s.fetchQueryDeduped,
                o = s.fetchQuery;
            r(826590);
            e.exports = function (e, n, r) {
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
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var v = o(d, g);
                    s = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != y && d === n.environment ? y.ifEmpty(v) : (n.environment, v), fetchKey: c, fetchPolicy: f, query: g, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return t(s);
            };
        },
        72845: (e, n, r) => {
            "use strict";
            var t = (0, r(902091).default)(r(22395)),
                i = r(606161).loadQuery,
                a = r(995402),
                l = r(667368),
                s = r(437429),
                u = r(202784),
                o = u.useCallback,
                d = u.useEffect,
                c = u.useRef,
                f = u.useState,
                y = r(703383),
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
                          var r = null != n ? n : g,
                              l = s(),
                              u = a(),
                              y = c(new Set([r])),
                              p = f(function () {
                                  return r;
                              }),
                              m = p[0],
                              k = p[1],
                              h = f(function () {
                                  return r;
                              }),
                              _ = h[0],
                              b = h[1];
                          r !== _ && (y.current.add(r), b(r), k(r));
                          var w = o(
                                  function () {
                                      u.current && (y.current.add(g), k(g));
                                  },
                                  [u],
                              ),
                              F = o(
                                  function (n, r) {
                                      var t = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                                      if (u.current) {
                                          var a,
                                              s = i(null !== (a = null == r ? void 0 : r.__environment) && void 0 !== a ? a : l, e, n, t);
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
                                          var r,
                                              i = (0, t.default)(n);
                                          try {
                                              for (i.s(); !(r = i.n()).done; ) {
                                                  var a = r.value;
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
                                              r = (0, t.default)(y.current);
                                          try {
                                              for (r.s(); !(n = r.n()).done; ) {
                                                  var i = n.value;
                                                  "NullQueryReference" !== i.kind && (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery());
                                              }
                                          } catch (e) {
                                              r.e(e);
                                          } finally {
                                              r.f();
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
        667368: (e, n, r) => {
            "use strict";
            var t = (0, r(902091).default)(r(22395)),
                i = r(606161).loadQuery,
                a = r(995402),
                l = r(437429),
                s = r(202784),
                u = s.useCallback,
                o = s.useEffect,
                d = s.useInsertionEffect,
                c = s.useRef,
                f = s.useState,
                y = r(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var r = null != n ? n : p,
                    s = l(),
                    y = a(),
                    g = c(null);
                null == g.current && (g.current = new Set([r]));
                var v,
                    k = f(function () {
                        return r;
                    }),
                    h = k[0],
                    _ = k[1],
                    b = f(function () {
                        return r;
                    }),
                    w = b[0],
                    F = b[1];
                r !== w && (null === (v = g.current) || void 0 === v || v.add(r), F(r), _(r));
                var K = u(
                        function () {
                            var e;
                            y.current && (null === (e = g.current) || void 0 === e || e.add(p), _(p));
                        },
                        [y],
                    ),
                    S = u(
                        function (n, r) {
                            var t, a;
                            if (y.current) {
                                var l = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r,
                                    u = i(null !== (t = null == r ? void 0 : r.__environment) && void 0 !== t ? t : s, e, n, l);
                                null === (a = g.current) || void 0 === a || a.add(u), _(u);
                            }
                        },
                        [s, e, _, y],
                    ),
                    R = u(function (e, n) {
                        var r,
                            i,
                            a = null !== (r = g.current) && void 0 !== r ? r : new Set(),
                            l = (0, t.default)(a);
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
        819858: (e, n, r) => {
            var t = r(691925),
                i = r(21681);
            function a(e, n, r) {
                Array.isArray(e[n]) ? e[n].push(r) : null != e[n] ? (e[n] = [e[n], r]) : (e[n] = r);
            }
            function l(e, n) {
                var r = n.split("="),
                    i = t(r[0]),
                    l = r[1];
                return (
                    (null != l && "" !== l) || ((l = r[0]), (i = "type")),
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
                for (var n = {}, r = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, u = e.length - 1, o = 1; o < u; o++) {
                    r = e[o];
                    var d = s.exec(r);
                    if (d) {
                        var c = d[1].split("."),
                            f = c.pop(),
                            y = c.pop(),
                            p = d[3],
                            m = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(l, y ? { group: y } : {}),
                            g = t(f);
                        a(n, g, new i(g, p, m));
                    }
                }
                return n;
            };
        },
        21681: (e) => {
            function n(e, r, t) {
                if (!(this instanceof n)) return new n(r);
                null != t && Object.assign(this, t), (this._field = e), (this._data = r), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function r(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (n.fromJSON = function (e) {
                var r = e[0],
                    t = e[1];
                return /text/i.test(e[2]) || (t.value = e[2]), new n(r, Array.isArray(e[3]) ? e[3].join(";") : e[3], t);
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
                        for (var n = (this.group ? this.group + "." : "") + r(this._field), t = Object.keys(this), i = [], a = 0; a < t.length; a++) "group" !== t[a] && i.push(r(t[a]) + "=" + this[t[a]]);
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
        588960: (e, n, r) => {
            function t() {
                if (!(this instanceof t)) return new t();
                (this.version = t.versions[t.versions.length - 1]), (this.data = {});
            }
            (t.mimeType = "text/vcard"),
                (t.extension = ".vcf"),
                (t.versions = ["2.1", "3.0", "4.0"]),
                (t.foldLine = r(949874)),
                (t.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (t.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== t.versions.indexOf(e);
                }),
                (t.parse = function (e) {
                    for (var n = (e + "").split(/(?=BEGIN\:VCARD)/gi), r = [], i = 0; i < n.length; i++) r.push(new t().parse(n[i]));
                    return r;
                }),
                (t.parseLines = r(819858)),
                (t.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new t();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var n = new t();
                    return (
                        e[1].forEach(function (e) {
                            n.addProperty(t.Property.fromJSON(e));
                        }),
                        n
                    );
                }),
                (t.format = function (e, n) {
                    if (((n = n || e.version || t.versions[t.versions.length - 1]), !t.isSupported(n))) throw new Error('Unsupported vCard version "' + n + '"');
                    var r = [];
                    r.push("BEGIN:VCARD"), r.push("VERSION:" + n);
                    for (var i = Object.keys(e.data), a = "", l = 0; l < i.length; l++)
                        if ("version" !== i[l])
                            if (((a = e.data[i[l]]), Array.isArray(a))) for (var s = 0; s < a.length; s++) a[s].isEmpty() || r.push(t.foldLine(a[s].toString(n), 75));
                            else a.isEmpty() || r.push(t.foldLine(a.toString(n), 75));
                    return r.push("END:VCARD"), r.join("\n");
                }),
                (t.Property = r(21681)),
                (t.prototype = {
                    constructor: t,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, n, r) {
                        return this.setProperty(new t.Property(e, n, r));
                    },
                    add: function (e, n, r) {
                        var i = new t.Property(e, n, r);
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
                        var n = t.normalize(e).split(/\r?\n/g),
                            r = n[0],
                            i = n[1],
                            a = n[n.length - 1];
                        if (!/BEGIN:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + r + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !t.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = t.parseLines(n)), this;
                    },
                    toString: function (e, n) {
                        return (e = e || this.version), t.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var n = Object.keys(this.data), r = [["version", {}, "text", e]], t = null, i = 0; i < n.length; i++)
                            if ("version" !== n[i])
                                if (((t = this.data[n[i]]), Array.isArray(t))) for (var a = 0; a < t.length; a++) r.push(t[a].toJSON());
                                else r.push(t.toJSON());
                        return ["vcard", r];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = t);
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
                                for (var n = !1, r = 0; r < e.length; r++) {
                                    var t = e.charAt(r);
                                    n && /[a-zA-Z]/.test(t) && t.toUpperCase() === t ? ((e = e.substr(0, r) + "-" + e.substr(r)), (n = !1), r++) : (n = t.toLowerCase() === t);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e96e9bea.93a1478a.js.map

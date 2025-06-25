"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"],
    {
        252021: (e, n, r) => {
            r.d(n, { Z: () => o });
            var t = r(202784),
                i = r(107267),
                a = r(115553);
            const o = (e) => {
                (0, i.useHistory)();
                return t.createElement(a.A, e);
            };
        },
        588386: (e, n, r) => {
            var t = r(982317),
                i = r(437429),
                a = r(202784),
                o = r(202784),
                l = o.useContext,
                u = o.useEffect;
            r(826590);
            e.exports = function (e) {
                var n = e.entryPointReference,
                    r = e.props,
                    o = n.getComponent,
                    f = n.queries,
                    c = n.entryPoints,
                    s = n.extraProps,
                    d = n.rootModuleID,
                    v = o(),
                    p = l(t),
                    g = i();
                return (
                    u(
                        function () {
                            g.__log({ name: "entrypoint.root.consume", profilerContext: p, rootModuleID: d });
                        },
                        [g, p, d],
                    ),
                    a.createElement(v, { entryPoints: c, extraProps: s, props: r, queries: f })
                );
            };
        },
        548934: (e, n, r) => {
            var t = r(647677),
                i = r(703383),
                a = i.ConnectionInterface,
                o = i.getValueAtPath;
            e.exports = function (e, n, r, i) {
                var l,
                    u,
                    f = a.get(),
                    c = f.EDGES,
                    s = f.PAGE_INFO,
                    d = f.HAS_NEXT_PAGE,
                    v = f.HAS_PREV_PAGE,
                    p = f.END_CURSOR,
                    g = f.START_CURSOR,
                    m = o(r, i);
                if (null == m) return { cursor: null, hasMore: !1 };
                "object" != typeof m && t(!1);
                var h = m[c],
                    y = m[s];
                if (null == h || null == y) return { cursor: null, hasMore: !1 };
                Array.isArray(h) || t(!1), "object" != typeof y && t(!1);
                var P = "forward" === e ? (null !== (l = y[p]) && void 0 !== l ? l : null) : null !== (u = y[g]) && void 0 !== u ? u : null;
                return null !== P && "string" != typeof P && t(!1), { cursor: P, hasMore: "forward" === e ? null != P && !0 === y[d] : null != P && !0 === y[v] };
            };
        },
        151210: (e, n, r) => {
            var t = r(606161).loadQuery;
            e.exports = function e(n, r, i) {
                var a = null;
                null == r.root.getModuleIfRequired() && (a = r.root.load());
                var o = r.getPreloadProps(i),
                    l = o.queries,
                    u = o.entryPoints,
                    f = o.extraProps,
                    c = {},
                    s = {};
                null != l &&
                    Object.keys(l).forEach(function (e) {
                        var r = l[e];
                        if (null != r) {
                            var i = r.environmentProviderOptions,
                                a = r.options,
                                o = r.parameters,
                                u = r.variables,
                                f = n.getEnvironment(i);
                            c[e] = t(f, o, u, { fetchPolicy: null == a ? void 0 : a.fetchPolicy, networkCacheConfig: null == a ? void 0 : a.networkCacheConfig, __nameForWarning: "loadEntryPoint" }, i);
                        }
                    }),
                    null != u &&
                        Object.keys(u).forEach(function (r) {
                            var t = u[r];
                            if (null != t) {
                                var i = t.entryPoint,
                                    a = t.entryPointParams;
                                s[r] = e(n, i, a);
                            }
                        });
                var d = !1;
                return {
                    dispose: function () {
                        d ||
                            (null != c &&
                                Object.values(c).forEach(function (e) {
                                    (0, e.dispose)();
                                }),
                            null != s &&
                                Object.values(s).forEach(function (e) {
                                    (0, e.dispose)();
                                }),
                            (d = !0));
                    },
                    entryPoints: s,
                    extraProps: null != f ? f : null,
                    getComponent: function () {
                        var e,
                            n = r.root.getModuleIfRequired();
                        if (null == n) throw (a = null !== (e = a) && void 0 !== e ? e : r.root.load());
                        return null != n.default ? n.default : n;
                    },
                    get isDisposed() {
                        return d;
                    },
                    queries: c,
                    rootModuleID: r.root.getModuleId(),
                };
            };
        },
        589978: (e, n, r) => {
            var t = r(902091).default,
                i = t(r(463928)),
                a = t(r(22395)),
                o = r(993801).getQueryResourceForEnvironment,
                l = r(647677),
                u = r(703383),
                f = u.__internal.fetchQuery,
                c = u.RelayFeatureFlags,
                s = u.createOperationDescriptor,
                d = u.getPendingOperationsForFragment,
                v = u.getSelector,
                p = u.getVariablesFromFragment,
                g = u.handlePotentialSnapshotErrors;
            r(826590);
            function m(e, n, r, t, a) {
                var l = p(n, r),
                    u = (0, i.default)((0, i.default)({}, l), {}, { id: t.clientEdgeDestinationID }),
                    c = s(t.request, u, null == a ? void 0 : a.networkCacheConfig);
                return o(e).prepare(c, f(e, c), null == a ? void 0 : a.fetchPolicy);
            }
            e.exports = function (e, n, r, t, i, o) {
                var u,
                    f,
                    s = v(n, r),
                    p = !0 === (null == n || null === (u = n.metadata) || void 0 === u ? void 0 : u.plural);
                p ? null == r || Array.isArray(r) || l(!1) : Array.isArray(r) && l(!1), null == r || (p && Array.isArray(r) && 0 === r.length) || null != s || l(!1);
                var h,
                    y = (function (e, n) {
                        return null == n
                            ? { kind: "bailout" }
                            : "PluralReaderSelector" === n.kind
                              ? 0 === n.selectors.length
                                  ? { kind: "bailout" }
                                  : {
                                        kind: "plural",
                                        snapshots: n.selectors.map(function (n) {
                                            return e.lookup(n);
                                        }),
                                        epoch: e.getStore().getEpoch(),
                                    }
                              : { kind: "singular", snapshot: e.lookup(n), epoch: e.getStore().getEpoch() };
                    })(e, s),
                    P = null;
                if (!0 === (null === (f = n.metadata) || void 0 === f ? void 0 : f.hasClientEdges)) {
                    var b = (function (e) {
                        if ("bailout" === e.kind) return null;
                        var n;
                        if ("singular" === e.kind) return null !== (n = e.snapshot.missingClientEdges) && void 0 !== n ? n : null;
                        var r,
                            t = null,
                            i = (0, a.default)(e.snapshots);
                        try {
                            for (i.s(); !(r = i.n()).done; ) {
                                var o = r.value;
                                if (o.missingClientEdges) {
                                    var l;
                                    t = null !== (l = t) && void 0 !== l ? l : [];
                                    var u,
                                        f = (0, a.default)(o.missingClientEdges);
                                    try {
                                        for (f.s(); !(u = f.n()).done; ) {
                                            var c = u.value;
                                            t.push(c);
                                        }
                                    } catch (e) {
                                        f.e(e);
                                    } finally {
                                        f.f();
                                    }
                                }
                            }
                        } catch (e) {
                            i.e(e);
                        } finally {
                            i.f();
                        }
                        return t;
                    })(y);
                    if (null != b && b.length) {
                        P = [];
                        var R,
                            E = (0, a.default)(b);
                        try {
                            for (E.s(); !(R = E.n()).done; ) {
                                var k = R.value;
                                P.push(m(e, n, r, k, i));
                            }
                        } catch (e) {
                            E.e(e);
                        } finally {
                            E.f();
                        }
                    }
                }
                if (
                    (function (e) {
                        return (
                            "bailout" !== e.kind &&
                            ("singular" === e.kind
                                ? e.snapshot.isMissingData
                                : e.snapshots.some(function (e) {
                                      return e.isMissingData;
                                  }))
                        );
                    })(y)
                ) {
                    null == s && l(!1);
                    var _ = "PluralReaderSelector" === s.kind ? s.selectors[0].owner : s.owner,
                        F = d(e, n, _);
                    if (F) throw F.promise;
                    !(function (e, n) {
                        if ("singular" === n.kind) g(e, n.snapshot.errorResponseFields);
                        else if ("plural" === n.kind) {
                            var r,
                                t = (0, a.default)(n.snapshots);
                            try {
                                for (t.s(); !(r = t.n()).done; ) {
                                    var i = r.value;
                                    g(e, i.errorResponseFields);
                                }
                            } catch (e) {
                                t.e(e);
                            } finally {
                                t.f();
                            }
                        }
                    })(e, y);
                }
                return (
                    (h =
                        "bailout" === y.kind
                            ? p
                                ? []
                                : null
                            : "singular" === y.kind
                              ? y.snapshot.data
                              : y.snapshots.map(function (e) {
                                    return e.data;
                                })),
                    c.LOG_MISSING_RECORDS_IN_PROD &&
                        null != r &&
                        (void 0 === h ||
                            (Array.isArray(h) &&
                                h.length > 0 &&
                                h.every(function (e) {
                                    return void 0 === e;
                                }))),
                    { data: h, clientEdgeQueries: P }
                );
            };
        },
        265933: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                i = r(151210),
                a = r(995402),
                o = r(202784),
                l = o.useCallback,
                u = o.useEffect,
                f = o.useRef,
                c = o.useState,
                s = { kind: "NullEntryPointReference" };
            e.exports = function (e, n, r) {
                var o,
                    d,
                    v,
                    p,
                    g = null !== (o = null == r || null === (d = r.TEST_ONLY__initialEntryPointData) || void 0 === d ? void 0 : d.entryPointReference) && void 0 !== o ? o : s,
                    m = null !== (v = null == r || null === (p = r.TEST_ONLY__initialEntryPointData) || void 0 === p ? void 0 : p.entryPointParams) && void 0 !== v ? v : null,
                    h = a(),
                    y = f(new Set([g])),
                    P = c(g),
                    b = P[0],
                    R = P[1],
                    E = c(m),
                    k = E[0],
                    _ = E[1],
                    F = l(
                        function () {
                            if (h.current) {
                                var e = { kind: "NullEntryPointReference" };
                                y.current.add(e), R(e);
                            }
                        },
                        [R, h],
                    ),
                    I = l(
                        function (r) {
                            if (h.current) {
                                var t = i(e, n, r);
                                y.current.add(t), R(t), _(r);
                            }
                        },
                        [e, n, R, h],
                    ),
                    S = f(!1);
                return (
                    u(function () {
                        return function () {
                            S.current = !0;
                        };
                    }, []),
                    u(
                        function () {
                            if (!0 === S.current) return (S.current = !1), void ("NullEntryPointReference" !== b.kind && null != k && I(k));
                            var e = y.current;
                            if (h.current) {
                                var n,
                                    r = (0, t.default)(e);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var i = n.value;
                                        if (i === b) break;
                                        e.delete(i), "NullEntryPointReference" !== i.kind && i.dispose();
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                        [b, k, I, h],
                    ),
                    u(function () {
                        return function () {
                            var e,
                                n = (0, t.default)(y.current);
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var r = e.value;
                                    "NullEntryPointReference" !== r.kind && r.dispose();
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        };
                    }, []),
                    ["NullEntryPointReference" === b.kind ? null : b, I, F]
                );
            };
        },
        101163: (e, n, r) => {
            var t = r(437429),
                i = r(647677),
                a = r(202784),
                o = r(703383),
                l = o.__internal.getObservableForActiveRequest,
                u = o.getSelector,
                f = a.useEffect,
                c = a.useState,
                s = a.useMemo;
            e.exports = function (e, n) {
                var r = t(),
                    a = s(
                        function () {
                            var t = u(e, n);
                            return null == t ? null : ("SingularReaderSelector" !== t.kind && i(!1), l(r, t.owner));
                        },
                        [r, e, n],
                    ),
                    o = c(null != a),
                    d = o[0],
                    v = o[1];
                return (
                    f(
                        function () {
                            var e;
                            if ((v(null != a), null != a)) {
                                var n = function () {
                                    v(!1);
                                };
                                e = a.subscribe({ complete: n, error: n });
                            }
                            return function () {
                                e && e.unsubscribe();
                            };
                        },
                        [a],
                    ),
                    d
                );
            };
        },
        528246: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                i = r(548934),
                a = r(61383),
                o = r(995402),
                l = r(101163),
                u = r(669033),
                f = r(437429),
                c = r(647677),
                s = r(202784),
                d = s.useCallback,
                v = s.useEffect,
                p = s.useState,
                g = r(703383),
                m = g.__internal.fetchQuery,
                h = g.RelayFeatureFlags,
                y = g.createOperationDescriptor,
                P = g.getPaginationVariables,
                b = g.getRefetchMetadata,
                R = g.getSelector;
            r(826590);
            e.exports = function (e) {
                return h.ENABLE_ACTIVITY_COMPATIBILITY
                    ? u(e)
                    : (function (e) {
                          var n = e.direction,
                              r = e.fragmentNode,
                              u = e.fragmentRef,
                              s = e.fragmentIdentifier,
                              g = e.fragmentData,
                              h = e.connectionPathInFragmentData,
                              E = e.paginationRequest,
                              k = e.paginationMetadata,
                              _ = e.componentDisplayName,
                              F = e.observer,
                              I = e.onReset,
                              S = f(),
                              C = a(),
                              D = C.isFetchingRef,
                              N = C.startFetch,
                              A = C.disposeFetch,
                              w = C.completeFetch,
                              x = b(r, _).identifierInfo,
                              M = null != (null == x ? void 0 : x.identifierField) && null != g && "object" == typeof g ? g[x.identifierField] : null,
                              O = o(),
                              Q = p(S),
                              q = Q[0],
                              V = Q[1],
                              T = p(s),
                              j = T[0],
                              L = T[1],
                              G = l(r, u);
                          (S === q && s === j) || (A(), I(), V(S), L(s));
                          var U = i(n, r, g, h),
                              B = U.cursor,
                              Y = U.hasMore;
                          return (
                              v(
                                  function () {
                                      return function () {
                                          A();
                                      };
                                  },
                                  [A],
                              ),
                              [
                                  d(
                                      function (e, i) {
                                          var a = null == i ? void 0 : i.onComplete;
                                          if (!0 !== O.current) return { dispose: function () {} };
                                          var o = R(r, u);
                                          if (!0 === D.current || null == g || G) return a && a(null), { dispose: function () {} };
                                          (null == o || "PluralReaderSelector" === o.kind) && c(!1);
                                          var l = o.owner.variables,
                                              f = o.variables,
                                              s = null == i ? void 0 : i.UNSTABLE_extraVariables,
                                              d = (0, t.default)((0, t.default)({}, l), f),
                                              v = P(n, e, B, d, (0, t.default)({}, s), k);
                                          null != x && (v[x.identifierQueryVariableName] = M);
                                          var p = y(E, v, { force: !0 });
                                          return (
                                              m(S, p).subscribe(
                                                  (0, t.default)(
                                                      (0, t.default)({}, F),
                                                      {},
                                                      {
                                                          start: function (e) {
                                                              N(e), F.start && F.start(e);
                                                          },
                                                          complete: function () {
                                                              w(), F.complete && F.complete(), a && a(null);
                                                          },
                                                          error: function (e) {
                                                              w(), F.error && F.error(e), a && a(e);
                                                          },
                                                      },
                                                  ),
                                              ),
                                              { dispose: A }
                                          );
                                      },
                                      [S, M, n, B, N, A, w, D, G, g, r.name, u, _],
                                  ),
                                  Y,
                                  A,
                              ]
                          );
                      })(e);
            };
        },
        669033: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                i = r(548934),
                a = r(995402),
                o = r(101163),
                l = r(437429),
                u = r(647677),
                f = r(202784),
                c = f.useCallback,
                s = f.useRef,
                d = f.useState,
                v = r(703383),
                p = v.__internal.fetchQuery,
                g = v.createOperationDescriptor,
                m = v.getPaginationVariables,
                h = v.getRefetchMetadata,
                y = v.getSelector;
            r(826590);
            e.exports = function (e) {
                var n = e.direction,
                    r = e.fragmentNode,
                    f = e.fragmentRef,
                    v = e.fragmentIdentifier,
                    P = e.fragmentData,
                    b = e.connectionPathInFragmentData,
                    R = e.paginationRequest,
                    E = e.paginationMetadata,
                    k = e.componentDisplayName,
                    _ = e.observer,
                    F = e.onReset,
                    I = l(),
                    S = h(r, k).identifierInfo,
                    C = null != (null == S ? void 0 : S.identifierField) && null != P && "object" == typeof P ? P[S.identifierField] : null,
                    D = s({ kind: "none" }),
                    N = d(I),
                    A = N[0],
                    w = N[1],
                    x = d(v),
                    M = x[0],
                    O = x[1],
                    Q = o(r, f),
                    q = c(function () {
                        "fetching" === D.current.kind && D.current.subscription.unsubscribe(), (D.current = { kind: "none" });
                    }, []);
                (I !== A || v !== M) && (q(), F(), w(I), O(v));
                var V = i(n, r, P, b),
                    T = V.cursor,
                    j = V.hasMore,
                    L = a();
                return [
                    c(
                        function (e, i) {
                            var a = null == i ? void 0 : i.onComplete;
                            if (!0 !== L.current) return { dispose: function () {} };
                            var o = y(r, f);
                            if ("fetching" === D.current.kind || null == P || Q) return a && a(null), { dispose: function () {} };
                            (null == o || "PluralReaderSelector" === o.kind) && u(!1);
                            var l = o.owner.variables,
                                c = o.variables,
                                s = null == i ? void 0 : i.UNSTABLE_extraVariables,
                                d = (0, t.default)((0, t.default)({}, l), c),
                                v = m(n, e, T, d, (0, t.default)({}, s), E);
                            null != S && (v[S.identifierQueryVariableName] = C);
                            var h = g(R, v, { force: !0 });
                            return (
                                p(I, h).subscribe(
                                    (0, t.default)(
                                        (0, t.default)({}, _),
                                        {},
                                        {
                                            start: function (e) {
                                                (D.current = { kind: "fetching", subscription: e }), _.start && _.start(e);
                                            },
                                            complete: function () {
                                                (D.current = { kind: "none" }), _.complete && _.complete(), a && a(null);
                                            },
                                            error: function (e) {
                                                (D.current = { kind: "none" }), _.complete && _.complete(), a && a(e);
                                            },
                                        },
                                    ),
                                ),
                                { dispose: function () {} }
                            );
                        },
                        [I, C, n, T, Q, P, r.name, f, k],
                    ),
                    j,
                    q,
                ];
            };
        },
        598: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                i = r(528246),
                a = r(302408),
                o = r(437429),
                l = r(400023),
                u = r(202784),
                f = u.useCallback,
                c = (u.useDebugValue, u.useState),
                s = r(703383),
                d = s.getFragment,
                v = s.getFragmentIdentifier,
                p = s.getPaginationMetadata;
            function g(e) {
                var n = o(),
                    r = c(!1),
                    a = r[0],
                    l = r[1],
                    u = function (e) {
                        var r,
                            t = null === (r = n.getScheduler()) || void 0 === r ? void 0 : r.schedule;
                        t
                            ? t(function () {
                                  l(e);
                              })
                            : l(e);
                    },
                    f = {
                        start: function () {
                            return u(!0);
                        },
                        complete: function () {
                            return u(!1);
                        },
                        error: function () {
                            return u(!1);
                        },
                    },
                    s = i(
                        (0, t.default)(
                            (0, t.default)({}, e),
                            {},
                            {
                                observer: f,
                                onReset: function () {
                                    return u(!1);
                                },
                            },
                        ),
                    );
                return [s[0], s[1], a, s[2]];
            }
            e.exports = function (e, n) {
                var r = d(e);
                l(r, "first argument of usePaginationFragment()");
                var i = "usePaginationFragment()",
                    o = p(r, i),
                    u = o.connectionPathInFragmentData,
                    c = o.paginationRequest,
                    s = o.paginationMetadata,
                    m = a(r, n, i),
                    h = m.fragmentData,
                    y = m.fragmentRef,
                    P = m.refetch,
                    b = v(r, y),
                    R = g({ componentDisplayName: i, connectionPathInFragmentData: u, direction: "backward", fragmentData: h, fragmentIdentifier: b, fragmentNode: r, fragmentRef: y, paginationMetadata: s, paginationRequest: c }),
                    E = R[0],
                    k = R[1],
                    _ = R[2],
                    F = R[3],
                    I = g({ componentDisplayName: i, connectionPathInFragmentData: u, direction: "forward", fragmentData: h, fragmentIdentifier: b, fragmentNode: r, fragmentRef: y, paginationMetadata: s, paginationRequest: c }),
                    S = I[0],
                    C = I[1],
                    D = I[2],
                    N = I[3];
                return {
                    data: h,
                    loadNext: S,
                    loadPrevious: E,
                    hasNext: C,
                    hasPrevious: k,
                    isLoadingNext: D,
                    isLoadingPrevious: _,
                    refetch: f(
                        function (e, n) {
                            return N(), F(), P(e, (0, t.default)((0, t.default)({}, n), {}, { __environment: void 0 }));
                        },
                        [N, F, P],
                    ),
                };
            };
        },
        463836: (e, n, r) => {
            var t = r(302408),
                i = r(400023),
                a = (r(202784).useDebugValue, r(703383).getFragment);
            e.exports = function (e, n) {
                var r = a(e);
                i(r, "first argument of useRefetchableFragment()");
                var o = t(r, n, "useRefetchableFragment()");
                return [o.fragmentData, o.refetch];
            };
        },
        302408: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                i = r(982317),
                a = r(993801).getQueryResourceForEnvironment,
                o = r(589978),
                l = r(799384),
                u = r(995402),
                f = r(72845),
                c = r(437429),
                s = r(647677),
                d = r(202784),
                v = d.useCallback,
                p = d.useContext,
                g = d.useReducer,
                m = r(703383),
                h = m.__internal.fetchQuery,
                y = m.createOperationDescriptor,
                P = m.getFragmentIdentifier,
                b = m.getRefetchMetadata,
                R = m.getSelector,
                E = m.getValueAtPath;
            r(826590);
            function k(e, n) {
                switch (n.type) {
                    case "refetch":
                        var r;
                        return (0, t.default)((0, t.default)({}, e), {}, { fetchPolicy: n.fetchPolicy, mirroredEnvironment: null !== (r = n.refetchEnvironment) && void 0 !== r ? r : e.mirroredEnvironment, onComplete: n.onComplete, refetchEnvironment: n.refetchEnvironment, refetchQuery: n.refetchQuery, renderPolicy: n.renderPolicy });
                    case "reset":
                        return { fetchPolicy: void 0, mirroredEnvironment: n.environment, mirroredFragmentIdentifier: n.fragmentIdentifier, onComplete: void 0, refetchQuery: null, renderPolicy: void 0 };
                    default:
                        throw (n.type, new Error("useRefetchableFragmentNode: Unexpected action type"));
                }
            }
            e.exports = function (e, n, r) {
                var d = c(),
                    m = b(e, r),
                    _ = m.refetchableRequest,
                    F = m.fragmentRefPathInResponse,
                    I = m.identifierInfo,
                    S = P(e, n),
                    C = g(k, { fetchPolicy: void 0, mirroredEnvironment: d, mirroredFragmentIdentifier: S, onComplete: void 0, refetchEnvironment: null, refetchQuery: null, renderPolicy: void 0 }),
                    D = C[0],
                    N = C[1],
                    A = D.fetchPolicy,
                    w = D.mirroredEnvironment,
                    x = D.mirroredFragmentIdentifier,
                    M = D.onComplete,
                    O = D.refetchEnvironment,
                    Q = D.refetchQuery,
                    q = D.renderPolicy,
                    V = null != O ? O : d,
                    T = a(V),
                    j = p(i),
                    L = V !== w || S !== x,
                    G = f(_),
                    U = G[0],
                    B = G[1],
                    Y = G[2],
                    H = n;
                if (L) N({ type: "reset", environment: V, fragmentIdentifier: S }), Y();
                else if (null != Q && null != U) {
                    0;
                    var W = function (e) {
                            M && M(null != e ? e : null);
                        },
                        X = null != U.source ? U.source : h(V, Q),
                        K = j.wrapPrepareQueryResource(function () {
                            return T.prepare(
                                Q,
                                X,
                                A,
                                q,
                                {
                                    error: W,
                                    complete: function () {
                                        W();
                                    },
                                },
                                U.fetchKey,
                                j,
                            );
                        }),
                        Z = o(V, K.fragmentNode, K.fragmentRef, r).data;
                    null == Z && s(!1), (H = E(Z, F));
                }
                var z = l(e, H, r),
                    J = (function (e, n, r, i, a, o, l, f, c, s, d) {
                        var p = u(),
                            g = null != (null == f ? void 0 : f.identifierField) && null != i && "object" == typeof i ? i[f.identifierField] : null;
                        return v(
                            function (e, i) {
                                if (!0 !== p.current) return { dispose: function () {} };
                                var a,
                                    l,
                                    u = null == i ? void 0 : i.__environment,
                                    v = null == i ? void 0 : i.fetchPolicy,
                                    m = null == i ? void 0 : i.UNSTABLE_renderPolicy,
                                    h = null == i ? void 0 : i.onComplete,
                                    P = R(o, s);
                                if (null == P) (a = {}), (l = {});
                                else if ("PluralReaderSelector" === P.kind) {
                                    var b, E, k, _;
                                    (a = null !== (b = null === (E = P.selectors[0]) || void 0 === E ? void 0 : E.owner.variables) && void 0 !== b ? b : {}), (l = null !== (k = null === (_ = P.selectors[0]) || void 0 === _ ? void 0 : _.variables) && void 0 !== k ? k : {});
                                } else (a = P.owner.variables), (l = P.variables);
                                var F = (0, t.default)((0, t.default)((0, t.default)({}, a), l), e);
                                null == f || e.hasOwnProperty(f.identifierQueryVariableName) || (F[f.identifierQueryVariableName] = g);
                                var I = y(d, F, { force: !0 });
                                return c(I.request.variables, { fetchPolicy: v, __environment: u, __nameForWarning: "refetch" }), n({ type: "refetch", fetchPolicy: v, onComplete: h, refetchEnvironment: u, refetchQuery: I, renderPolicy: m }), { dispose: r };
                            },
                            [a, n, r, g, c],
                        );
                    })(0, N, Y, z, S, e, 0, I, B, n, _);
                return { fragmentData: z, fragmentRef: H, refetch: J };
            };
        },
        353391: (e, n, r) => {
            var t = r(437429),
                i = r(202784),
                a = i.useEffect,
                o = i.useRef;
            e.exports = function (e, n) {
                var r = t(),
                    i = o(null),
                    l = Array.from(e).sort().join("");
                return (
                    a(
                        function () {
                            var t = r.getStore(),
                                a = t.lookupInvalidationState(e),
                                o = t.subscribeToInvalidationState(a, n);
                            return (
                                (i.current = o),
                                function () {
                                    return o.dispose();
                                }
                            );
                        },
                        [l, n, r],
                    ),
                    {
                        dispose: function () {
                            null != i.current && i.current.dispose();
                        },
                    }
                );
            };
        },
        19663: (e, n, r) => {
            var t = r(437429),
                i = r(202784).useEffect,
                a = r(703383).requestSubscription;
            e.exports = function (e, n) {
                var r = null != n ? n : a,
                    o = t();
                i(
                    function () {
                        return r(o, e).dispose;
                    },
                    [o, e, r],
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat.bf2e174a.js.map

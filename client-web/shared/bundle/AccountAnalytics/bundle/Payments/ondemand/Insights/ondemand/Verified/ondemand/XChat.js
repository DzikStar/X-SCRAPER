"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat"],
    {
        588386: (e, n, r) => {
            var t = r(982317),
                o = r(437429),
                a = r(202784),
                i = r(202784),
                l = i.useContext,
                u = i.useEffect;
            r(826590);
            e.exports = function (e) {
                var n = e.entryPointReference,
                    r = e.props,
                    i = n.getComponent,
                    c = n.queries,
                    f = n.entryPoints,
                    s = n.extraProps,
                    d = n.rootModuleID,
                    v = i(),
                    p = l(t),
                    m = o();
                return (
                    u(
                        function () {
                            m.__log({ name: "entrypoint.root.consume", profilerContext: p, rootModuleID: d });
                        },
                        [m, p, d],
                    ),
                    a.createElement(v, { entryPoints: f, extraProps: s, props: r, queries: c })
                );
            };
        },
        151210: (e, n, r) => {
            var t = r(606161).loadQuery;
            e.exports = function e(n, r, o) {
                var a = null;
                null == r.root.getModuleIfRequired() && (a = r.root.load());
                var i = r.getPreloadProps(o),
                    l = i.queries,
                    u = i.entryPoints,
                    c = i.extraProps,
                    f = {},
                    s = {};
                null != l &&
                    Object.keys(l).forEach(function (e) {
                        var r = l[e],
                            o = r.environmentProviderOptions,
                            a = r.options,
                            i = r.parameters,
                            u = r.variables,
                            c = n.getEnvironment(o);
                        f[e] = t(c, i, u, { fetchPolicy: null == a ? void 0 : a.fetchPolicy, networkCacheConfig: null == a ? void 0 : a.networkCacheConfig, __nameForWarning: "loadEntryPoint" }, o);
                    }),
                    null != u &&
                        Object.keys(u).forEach(function (r) {
                            var t = u[r];
                            if (null != t) {
                                var o = t.entryPoint,
                                    a = t.entryPointParams;
                                s[r] = e(n, o, a);
                            }
                        });
                var d = !1;
                return {
                    dispose: function () {
                        d ||
                            (null != f &&
                                Object.values(f).forEach(function (e) {
                                    (0, e.dispose)();
                                }),
                            null != s &&
                                Object.values(s).forEach(function (e) {
                                    (0, e.dispose)();
                                }),
                            (d = !0));
                    },
                    entryPoints: s,
                    extraProps: null != c ? c : null,
                    getComponent: function () {
                        var e,
                            n = r.root.getModuleIfRequired();
                        if (null == n) throw (a = null !== (e = a) && void 0 !== e ? e : r.root.load());
                        return null != n.default ? n.default : n;
                    },
                    get isDisposed() {
                        return d;
                    },
                    queries: f,
                    rootModuleID: r.root.getModuleId(),
                };
            };
        },
        589978: (e, n, r) => {
            var t = r(171600).default,
                o = t(r(900814)),
                a = t(r(638636)),
                i = r(993801).getQueryResourceForEnvironment,
                l = r(647677),
                u = r(703383),
                c = u.__internal.fetchQuery,
                f = u.RelayFeatureFlags,
                s = u.createOperationDescriptor,
                d = u.getPendingOperationsForFragment,
                v = u.getSelector,
                p = u.getVariablesFromFragment,
                m = u.handlePotentialSnapshotErrors;
            r(826590);
            function y(e, n, r, t, a) {
                var l = p(n, r),
                    u = (0, o.default)((0, o.default)({}, l), {}, { id: t.clientEdgeDestinationID }),
                    f = s(t.request, u, null == a ? void 0 : a.networkCacheConfig);
                return i(e).prepare(f, c(e, f), null == a ? void 0 : a.fetchPolicy);
            }
            e.exports = function (e, n, r, t, o, i) {
                var u,
                    c,
                    s = v(n, r),
                    p = !0 === (null == n || null === (u = n.metadata) || void 0 === u ? void 0 : u.plural);
                p ? null == r || Array.isArray(r) || l(!1) : Array.isArray(r) && l(!1), null == r || (p && Array.isArray(r) && 0 === r.length) || null != s || l(!1);
                var g,
                    h = (function (e, n) {
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
                if (!0 === (null === (c = n.metadata) || void 0 === c ? void 0 : c.hasClientEdges)) {
                    var R = (function (e) {
                        if ("bailout" === e.kind) return null;
                        var n;
                        if ("singular" === e.kind) return null !== (n = e.snapshot.missingClientEdges) && void 0 !== n ? n : null;
                        var r,
                            t = null,
                            o = (0, a.default)(e.snapshots);
                        try {
                            for (o.s(); !(r = o.n()).done; ) {
                                var i = r.value;
                                if (i.missingClientEdges) {
                                    var l;
                                    t = null !== (l = t) && void 0 !== l ? l : [];
                                    var u,
                                        c = (0, a.default)(i.missingClientEdges);
                                    try {
                                        for (c.s(); !(u = c.n()).done; ) {
                                            var f = u.value;
                                            t.push(f);
                                        }
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                }
                            }
                        } catch (e) {
                            o.e(e);
                        } finally {
                            o.f();
                        }
                        return t;
                    })(h);
                    if (null != R && R.length) {
                        P = [];
                        var b,
                            E = (0, a.default)(R);
                        try {
                            for (E.s(); !(b = E.n()).done; ) {
                                var k = b.value;
                                P.push(y(e, n, r, k, o));
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
                    })(h)
                ) {
                    null == s && l(!1);
                    var _ = "PluralReaderSelector" === s.kind ? s.selectors[0].owner : s.owner,
                        C = d(e, n, _);
                    if (C) throw C.promise;
                    !(function (e, n) {
                        var r, t;
                        if ("singular" === n.kind) m(e, n.snapshot.missingRequiredFields, n.snapshot.relayResolverErrors, n.snapshot.errorResponseFields, null !== (r = null === (t = n.snapshot.selector.node.metadata) || void 0 === t ? void 0 : t.throwOnFieldError) && void 0 !== r && r);
                        else if ("plural" === n.kind) {
                            var o,
                                i = (0, a.default)(n.snapshots);
                            try {
                                for (i.s(); !(o = i.n()).done; ) {
                                    var l,
                                        u,
                                        c = o.value;
                                    m(e, c.missingRequiredFields, c.relayResolverErrors, c.errorResponseFields, null !== (l = null === (u = c.selector.node.metadata) || void 0 === u ? void 0 : u.throwOnFieldError) && void 0 !== l && l);
                                }
                            } catch (e) {
                                i.e(e);
                            } finally {
                                i.f();
                            }
                        }
                    })(e, h);
                }
                return (
                    (g =
                        "bailout" === h.kind
                            ? p
                                ? []
                                : null
                            : "singular" === h.kind
                              ? h.snapshot.data
                              : h.snapshots.map(function (e) {
                                    return e.data;
                                })),
                    f.LOG_MISSING_RECORDS_IN_PROD &&
                        null != r &&
                        (void 0 === g ||
                            (Array.isArray(g) &&
                                g.length > 0 &&
                                g.every(function (e) {
                                    return void 0 === e;
                                }))),
                    { data: g, clientEdgeQueries: P }
                );
            };
        },
        265933: (e, n, r) => {
            var t = (0, r(171600).default)(r(638636)),
                o = r(151210),
                a = r(606161).useTrackLoadQueryInRender,
                i = r(995402),
                l = r(202784),
                u = l.useCallback,
                c = l.useEffect,
                f = l.useRef,
                s = l.useState,
                d = { kind: "NullEntryPointReference" };
            e.exports = function (e, n, r) {
                var l, v, p, m;
                a();
                var y = null !== (l = null == r || null === (v = r.TEST_ONLY__initialEntryPointData) || void 0 === v ? void 0 : v.entryPointReference) && void 0 !== l ? l : d,
                    g = null !== (p = null == r || null === (m = r.TEST_ONLY__initialEntryPointData) || void 0 === m ? void 0 : m.entryPointParams) && void 0 !== p ? p : null,
                    h = i(),
                    P = f(new Set([y])),
                    R = s(y),
                    b = R[0],
                    E = R[1],
                    k = s(g),
                    _ = k[0],
                    C = k[1],
                    F = u(
                        function () {
                            if (h.current) {
                                var e = { kind: "NullEntryPointReference" };
                                P.current.add(e), E(e);
                            }
                        },
                        [E, h],
                    ),
                    S = u(
                        function (r) {
                            if (h.current) {
                                var t = o(e, n, r);
                                P.current.add(t), E(t), C(r);
                            }
                        },
                        [e, n, E, h],
                    ),
                    D = f(!1);
                return (
                    c(function () {
                        return function () {
                            D.current = !0;
                        };
                    }, []),
                    c(
                        function () {
                            if (!0 === D.current) return (D.current = !1), void ("NullEntryPointReference" !== b.kind && null != _ && S(_));
                            var e = P.current;
                            if (h.current) {
                                var n,
                                    r = (0, t.default)(e);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var o = n.value;
                                        if (o === b) break;
                                        e.delete(o), "NullEntryPointReference" !== o.kind && o.dispose();
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        },
                        [b, _, S, h],
                    ),
                    c(function () {
                        return function () {
                            var e,
                                n = (0, t.default)(P.current);
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
                    ["NullEntryPointReference" === b.kind ? null : b, S, F]
                );
            };
        },
        101163: (e, n, r) => {
            var t = r(437429),
                o = r(647677),
                a = r(202784),
                i = r(703383),
                l = i.__internal.getObservableForActiveRequest,
                u = i.getSelector,
                c = a.useEffect,
                f = a.useState,
                s = a.useMemo;
            e.exports = function (e, n) {
                var r = t(),
                    a = s(
                        function () {
                            var t = u(e, n);
                            return null == t ? null : ("SingularReaderSelector" !== t.kind && o(!1), l(r, t.owner));
                        },
                        [r, e, n],
                    ),
                    i = f(null != a),
                    d = i[0],
                    v = i[1];
                return (
                    c(
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
            var t = (0, r(171600).default)(r(900814)),
                o = r(61383),
                a = r(995402),
                i = r(101163),
                l = r(437429),
                u = r(647677),
                c = r(202784),
                f = c.useCallback,
                s = c.useEffect,
                d = c.useState,
                v = r(703383),
                p = v.__internal.fetchQuery,
                m = v.ConnectionInterface,
                y = v.createOperationDescriptor,
                g = v.getPaginationVariables,
                h = v.getRefetchMetadata,
                P = v.getSelector,
                R = v.getValueAtPath;
            r(826590);
            e.exports = function (e) {
                var n = e.direction,
                    r = e.fragmentNode,
                    c = e.fragmentRef,
                    v = e.fragmentIdentifier,
                    b = e.fragmentData,
                    E = e.connectionPathInFragmentData,
                    k = e.paginationRequest,
                    _ = e.paginationMetadata,
                    C = e.componentDisplayName,
                    F = e.observer,
                    S = e.onReset,
                    D = l(),
                    N = o(),
                    w = N.isFetchingRef,
                    I = N.startFetch,
                    Q = N.disposeFetch,
                    x = N.completeFetch,
                    A = h(r, C).identifierInfo,
                    O = null != (null == A ? void 0 : A.identifierField) && null != b && "object" == typeof b ? b[A.identifierField] : null,
                    q = a(),
                    M = d(D),
                    T = M[0],
                    V = M[1],
                    L = d(v),
                    j = L[0],
                    U = L[1],
                    G = i(r, c);
                (D !== T || v !== j) && (Q(), S(), V(D), U(v));
                var W = (function (e, n, r, t) {
                        var o,
                            a,
                            i = m.get(),
                            l = i.EDGES,
                            c = i.PAGE_INFO,
                            f = i.HAS_NEXT_PAGE,
                            s = i.HAS_PREV_PAGE,
                            d = i.END_CURSOR,
                            v = i.START_CURSOR,
                            p = R(r, t);
                        if (null == p) return { cursor: null, hasMore: !1 };
                        "object" != typeof p && u(!1);
                        var y = p[l],
                            g = p[c];
                        if (null == y || null == g) return { cursor: null, hasMore: !1 };
                        Array.isArray(y) || u(!1), "object" != typeof g && u(!1);
                        var h,
                            P = "forward" === e ? (null !== (o = g[d]) && void 0 !== o ? o : null) : null !== (a = g[v]) && void 0 !== a ? a : null;
                        null !== P && "string" != typeof P && u(!1), (h = "forward" === e ? null != P && !0 === g[f] : null != P && !0 === g[s]);
                        return { cursor: P, hasMore: h };
                    })(n, 0, b, E),
                    B = W.cursor,
                    K = W.hasMore;
                return (
                    s(
                        function () {
                            return function () {
                                Q();
                            };
                        },
                        [Q],
                    ),
                    [
                        f(
                            function (e, o) {
                                var a = null == o ? void 0 : o.onComplete;
                                if (!0 !== q.current) return { dispose: function () {} };
                                var i = P(r, c);
                                if (!0 === w.current || null == b || G) return a && a(null), { dispose: function () {} };
                                (null == i || "PluralReaderSelector" === i.kind) && u(!1);
                                var l = i.owner.variables,
                                    f = i.variables,
                                    s = null == o ? void 0 : o.UNSTABLE_extraVariables,
                                    d = (0, t.default)((0, t.default)({}, l), f),
                                    v = g(n, e, B, d, (0, t.default)({}, s), _);
                                null != A && (v[A.identifierQueryVariableName] = O);
                                var m = y(k, v, { force: !0 });
                                return (
                                    p(D, m).subscribe(
                                        (0, t.default)(
                                            (0, t.default)({}, F),
                                            {},
                                            {
                                                start: function (e) {
                                                    I(e), F.start && F.start(e);
                                                },
                                                complete: function () {
                                                    x(), F.complete && F.complete(), a && a(null);
                                                },
                                                error: function (e) {
                                                    x(), F.error && F.error(e), a && a(e);
                                                },
                                            },
                                        ),
                                    ),
                                    { dispose: Q }
                                );
                            },
                            [D, O, n, B, I, Q, x, w, G, b, r.name, c, C],
                        ),
                        K,
                        Q,
                    ]
                );
            };
        },
        598: (e, n, r) => {
            var t = (0, r(171600).default)(r(900814)),
                o = r(528246),
                a = r(302408),
                i = r(437429),
                l = r(400023),
                u = r(202784),
                c = u.useCallback,
                f = (u.useDebugValue, u.useState),
                s = r(703383),
                d = s.getFragment,
                v = s.getFragmentIdentifier,
                p = s.getPaginationMetadata;
            function m(e) {
                var n = i(),
                    r = f(!1),
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
                    c = {
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
                    s = o(
                        (0, t.default)(
                            (0, t.default)({}, e),
                            {},
                            {
                                observer: c,
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
                var o = "usePaginationFragment()",
                    i = p(r, o),
                    u = i.connectionPathInFragmentData,
                    f = i.paginationRequest,
                    s = i.paginationMetadata,
                    y = a(r, n, o),
                    g = y.fragmentData,
                    h = y.fragmentRef,
                    P = y.refetch,
                    R = v(r, h),
                    b = m({ componentDisplayName: o, connectionPathInFragmentData: u, direction: "backward", fragmentData: g, fragmentIdentifier: R, fragmentNode: r, fragmentRef: h, paginationMetadata: s, paginationRequest: f }),
                    E = b[0],
                    k = b[1],
                    _ = b[2],
                    C = b[3],
                    F = m({ componentDisplayName: o, connectionPathInFragmentData: u, direction: "forward", fragmentData: g, fragmentIdentifier: R, fragmentNode: r, fragmentRef: h, paginationMetadata: s, paginationRequest: f }),
                    S = F[0],
                    D = F[1],
                    N = F[2],
                    w = F[3];
                return {
                    data: g,
                    loadNext: S,
                    loadPrevious: E,
                    hasNext: D,
                    hasPrevious: k,
                    isLoadingNext: N,
                    isLoadingPrevious: _,
                    refetch: c(
                        function (e, n) {
                            return w(), C(), P(e, (0, t.default)((0, t.default)({}, n), {}, { __environment: void 0 }));
                        },
                        [w, C, P],
                    ),
                };
            };
        },
        928123: (e, n, r) => {
            var t = r(606161).useTrackLoadQueryInRender,
                o = r(138239),
                a = r(303566),
                i = r(437429),
                l = r(647677),
                u = (r(202784).useDebugValue, r(703383).__internal),
                c = u.fetchQueryDeduped,
                f = u.fetchQuery;
            r(826590);
            e.exports = function (e, n, r) {
                t();
                var u,
                    s = i(),
                    d = n.fetchKey,
                    v = n.fetchPolicy,
                    p = n.source,
                    m = n.variables,
                    y = n.networkCacheConfig,
                    g = a(e, m, y);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    g.request.node.params.name !== n.name && l(!1),
                        (u = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: d,
                            fetchObservable: c(s, g.request.identifier, function () {
                                return s === n.environment && null != p ? s.executeWithSource({ operation: g, source: p }) : s.execute({ operation: g });
                            }),
                            fetchPolicy: v,
                            query: g,
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var h = f(s, g);
                    u = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != p && s === n.environment ? p.ifEmpty(h) : (n.environment, h), fetchKey: d, fetchPolicy: v, query: g, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return o(u);
            };
        },
        72845: (e, n, r) => {
            var t = (0, r(171600).default)(r(638636)),
                o = r(606161),
                a = o.loadQuery,
                i = o.useTrackLoadQueryInRender,
                l = r(995402),
                u = r(437429),
                c = r(202784),
                f = c.useCallback,
                s = c.useEffect,
                d = c.useRef,
                v = c.useState,
                p = r(703383).getRequest,
                m = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== p(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var r = null != n ? n : m,
                    o = u();
                i();
                var c = l(),
                    p = d(new Set([r])),
                    g = v(function () {
                        return r;
                    }),
                    h = g[0],
                    P = g[1],
                    R = v(function () {
                        return r;
                    }),
                    b = R[0],
                    E = R[1];
                r !== b && (p.current.add(r), E(r), P(r));
                var k = f(
                        function () {
                            c.current && (p.current.add(m), P(m));
                        },
                        [c],
                    ),
                    _ = f(
                        function (n, r) {
                            var t = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                            if (c.current) {
                                var i,
                                    l = a(null !== (i = null == r ? void 0 : r.__environment) && void 0 !== i ? i : o, e, n, t);
                                p.current.add(l), P(l);
                            }
                        },
                        [o, e, P, c],
                    ),
                    C = d(!1);
                return (
                    s(function () {
                        return function () {
                            C.current = !0;
                        };
                    }, []),
                    s(
                        function () {
                            if (!0 === C.current) return (C.current = !1), void ("NullQueryReference" !== h.kind && _(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig }));
                            var n = p.current;
                            if (c.current) {
                                var r,
                                    o = (0, t.default)(n);
                                try {
                                    for (o.s(); !(r = o.n()).done; ) {
                                        var a = r.value;
                                        if (a === h) break;
                                        n.delete(a), "NullQueryReference" !== a.kind && (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                                    }
                                } catch (e) {
                                    o.e(e);
                                } finally {
                                    o.f();
                                }
                            }
                        },
                        [h, c, _, e],
                    ),
                    s(
                        function () {
                            return function () {
                                var n,
                                    r = (0, t.default)(p.current);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var o = n.value;
                                        "NullQueryReference" !== o.kind && (y(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
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
                    ["NullQueryReference" === h.kind ? null : h, _, k]
                );
            };
        },
        463836: (e, n, r) => {
            var t = r(302408),
                o = r(400023),
                a = (r(202784).useDebugValue, r(703383).getFragment);
            e.exports = function (e, n) {
                var r = a(e);
                o(r, "first argument of useRefetchableFragment()");
                var i = t(r, n, "useRefetchableFragment()");
                return [i.fragmentData, i.refetch];
            };
        },
        302408: (e, n, r) => {
            var t = (0, r(171600).default)(r(900814)),
                o = r(982317),
                a = r(993801).getQueryResourceForEnvironment,
                i = r(589978),
                l = r(799384),
                u = r(995402),
                c = r(72845),
                f = r(437429),
                s = r(647677),
                d = r(202784),
                v = d.useCallback,
                p = d.useContext,
                m = d.useReducer,
                y = r(703383),
                g = y.__internal.fetchQuery,
                h = y.createOperationDescriptor,
                P = y.getFragmentIdentifier,
                R = y.getRefetchMetadata,
                b = y.getSelector,
                E = y.getValueAtPath;
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
                var d = f(),
                    y = R(e, r),
                    _ = y.refetchableRequest,
                    C = y.fragmentRefPathInResponse,
                    F = y.identifierInfo,
                    S = P(e, n),
                    D = m(k, { fetchPolicy: void 0, mirroredEnvironment: d, mirroredFragmentIdentifier: S, onComplete: void 0, refetchEnvironment: null, refetchQuery: null, renderPolicy: void 0 }),
                    N = D[0],
                    w = D[1],
                    I = N.fetchPolicy,
                    Q = N.mirroredEnvironment,
                    x = N.mirroredFragmentIdentifier,
                    A = N.onComplete,
                    O = N.refetchEnvironment,
                    q = N.refetchQuery,
                    M = N.renderPolicy,
                    T = null != O ? O : d,
                    V = a(T),
                    L = p(o),
                    j = T !== Q || S !== x,
                    U = c(_),
                    G = U[0],
                    W = U[1],
                    B = U[2],
                    K = n;
                if (j) w({ type: "reset", environment: T, fragmentIdentifier: S }), B();
                else if (null != q && null != G) {
                    0;
                    var H = function (e) {
                            A && A(null != e ? e : null);
                        },
                        X = null != G.source ? G.source : g(T, q),
                        Y = L.wrapPrepareQueryResource(function () {
                            return V.prepare(
                                q,
                                X,
                                I,
                                M,
                                {
                                    error: H,
                                    complete: function () {
                                        H();
                                    },
                                },
                                G.fetchKey,
                                L,
                            );
                        }),
                        z = i(T, Y.fragmentNode, Y.fragmentRef, r).data;
                    null == z && s(!1), (K = E(z, C));
                }
                var J = l(e, K, r),
                    Z = (function (e, n, r, o, a, i, l, c, f, s, d) {
                        var p = u(),
                            m = null != (null == c ? void 0 : c.identifierField) && null != o && "object" == typeof o ? o[c.identifierField] : null;
                        return v(
                            function (e, o) {
                                if (!0 !== p.current) return { dispose: function () {} };
                                var a,
                                    l,
                                    u = null == o ? void 0 : o.__environment,
                                    v = null == o ? void 0 : o.fetchPolicy,
                                    y = null == o ? void 0 : o.UNSTABLE_renderPolicy,
                                    g = null == o ? void 0 : o.onComplete,
                                    P = b(i, s);
                                if (null == P) (a = {}), (l = {});
                                else if ("PluralReaderSelector" === P.kind) {
                                    var R, E, k, _;
                                    (a = null !== (R = null === (E = P.selectors[0]) || void 0 === E ? void 0 : E.owner.variables) && void 0 !== R ? R : {}), (l = null !== (k = null === (_ = P.selectors[0]) || void 0 === _ ? void 0 : _.variables) && void 0 !== k ? k : {});
                                } else (a = P.owner.variables), (l = P.variables);
                                var C = (0, t.default)((0, t.default)((0, t.default)({}, a), l), e);
                                null == c || e.hasOwnProperty(c.identifierQueryVariableName) || (C[c.identifierQueryVariableName] = m);
                                var F = h(d, C, { force: !0 });
                                return f(F.request.variables, { fetchPolicy: v, __environment: u, __nameForWarning: "refetch" }), n({ type: "refetch", fetchPolicy: v, onComplete: g, refetchEnvironment: u, refetchQuery: F, renderPolicy: y }), { dispose: r };
                            },
                            [a, n, r, m, f],
                        );
                    })(0, w, B, J, S, e, 0, F, W, n, _);
                return { fragmentData: J, fragmentRef: K, refetch: Z };
            };
        },
        353391: (e, n, r) => {
            var t = r(437429),
                o = r(202784),
                a = o.useEffect,
                i = o.useRef;
            e.exports = function (e, n) {
                var r = t(),
                    o = i(null),
                    l = Array.from(e).sort().join("");
                return (
                    a(
                        function () {
                            var t = r.getStore(),
                                a = t.lookupInvalidationState(e),
                                i = t.subscribeToInvalidationState(a, n);
                            return (
                                (o.current = i),
                                function () {
                                    return i.dispose();
                                }
                            );
                        },
                        [l, n, r],
                    ),
                    {
                        dispose: function () {
                            null != o.current && o.current.dispose();
                        },
                    }
                );
            };
        },
        19663: (e, n, r) => {
            var t = r(437429),
                o = r(202784).useEffect,
                a = r(703383).requestSubscription;
            e.exports = function (e, n) {
                var r = null != n ? n : a,
                    i = t();
                o(
                    function () {
                        return r(i, e).dispose;
                    },
                    [i, e, r],
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.Payments~ondemand.Insights~ondemand.Verified~ondemand.XChat.488656ea.js.map

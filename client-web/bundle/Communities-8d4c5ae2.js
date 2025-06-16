"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-8d4c5ae2", "shared~bundle.AccountAnalytics~ondemand.SettingsRevamp~bundle.Payments~bundle.PremiumHub~bundle.ProfessionalH", "ondemand.SettingsInternals-8d4c5ae2"],
    {
        606161: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                u = r(647677),
                o = r(703383),
                i = o.__internal.fetchQueryDeduped,
                a = o.Observable,
                l = o.PreloadableQueryRegistry,
                c = o.ReplaySubject,
                s = o.createOperationDescriptor,
                f = o.getRequest,
                d = o.getRequestIdentifier,
                v = 100001;
            e.exports = {
                loadQuery: function (e, n, r, o, y) {
                    var m;
                    v++;
                    var p,
                        b,
                        h,
                        k,
                        P,
                        _,
                        w = null !== (m = null == o ? void 0 : o.fetchPolicy) && void 0 !== m ? m : "store-or-network",
                        C = (0, t.default)((0, t.default)({}, null == o ? void 0 : o.networkCacheConfig), {}, { force: !0 }),
                        g = !1,
                        Q = function (n, r) {
                            return (g = !0), e.executeWithSource({ operation: n, source: r });
                        },
                        R = new c(),
                        N = a.create(function (e) {
                            return R.subscribe(e);
                        }),
                        q = null,
                        x = !1,
                        E = function (n) {
                            x = !0;
                            var t = new c(),
                                u = "raw-network-request-" + d(n, r),
                                o = i(e, u, function () {
                                    return e.getNetwork().execute(n, r, C);
                                }).subscribe({
                                    error: function (e) {
                                        (q = e), t.error(e);
                                    },
                                    next: function (e) {
                                        t.next(e);
                                    },
                                    complete: function () {
                                        t.complete();
                                    },
                                }).unsubscribe;
                            return (
                                (b = o),
                                a.create(function (e) {
                                    var n = t.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), b();
                                    };
                                })
                            );
                        },
                        S = function (n, r) {
                            x = !0;
                            var t = i(e, n.request.identifier, r).subscribe({
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
                            h = t.unsubscribe;
                        },
                        D = function (n) {
                            var t = s(n, r, C);
                            ((p = e.retain(t)), "store-only" !== w) &&
                                ("store-or-network" !== w || "available" !== e.check(t).status) &&
                                S(t, function () {
                                    var e = E(n.params);
                                    return Q(t, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === n.kind) {
                        null === (_ = (k = n.params).id) && u(!1);
                        var I = l.get(_);
                        if (null != I) D(I);
                        else {
                            var T = "store-only" === w ? null : E(k),
                                A = l.onLoad(_, function (n) {
                                    P();
                                    var t = s(n, r, C);
                                    (p = e.retain(t)),
                                        null != T &&
                                            S(t, function () {
                                                return Q(t, T);
                                            });
                                });
                            P = A.dispose;
                        }
                    } else {
                        var O = f(n);
                        (_ = null != (k = O.params).cacheID ? k.cacheID : k.id), D(O);
                    }
                    var F = !1,
                        W = !1,
                        L = !1,
                        B = function () {
                            W || (p && p.dispose(), (W = !0));
                        },
                        K = function () {
                            L || (g ? h && h() : b && b(), P && P(), (L = !0));
                        };
                    return {
                        kind: "PreloadedQuery",
                        environment: e,
                        environmentProviderOptions: y,
                        dispose: function () {
                            F || (B(), K(), (F = !0));
                        },
                        releaseQuery: B,
                        cancelNetworkRequest: K,
                        fetchKey: v,
                        id: _,
                        get isDisposed() {
                            return F || W;
                        },
                        get networkError() {
                            return q;
                        },
                        name: k.name,
                        networkCacheConfig: C,
                        fetchPolicy: w,
                        source: x ? N : void 0,
                        variables: r,
                    };
                },
            };
        },
        928123: (e, n, r) => {
            var t = r(138239),
                u = r(303566),
                o = r(437429),
                i = r(647677),
                a = (r(202784).useDebugValue, r(703383).__internal),
                l = a.fetchQueryDeduped,
                c = a.fetchQuery;
            r(826590);
            e.exports = function (e, n, r) {
                var a,
                    s = o(),
                    f = n.fetchKey,
                    d = n.fetchPolicy,
                    v = n.source,
                    y = n.variables,
                    m = n.networkCacheConfig,
                    p = u(e, y, m);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    p.request.node.params.name !== n.name && i(!1),
                        (a = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: f,
                            fetchObservable: l(s, p.request.identifier, function () {
                                return s === n.environment && null != v ? s.executeWithSource({ operation: p, source: v }) : s.execute({ operation: p });
                            }),
                            fetchPolicy: d,
                            query: p,
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var b = c(s, p);
                    a = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != v && s === n.environment ? v.ifEmpty(b) : (n.environment, b), fetchKey: f, fetchPolicy: d, query: p, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return t(a);
            };
        },
        72845: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                u = r(606161).loadQuery,
                o = r(995402),
                i = r(667368),
                a = r(437429),
                l = r(202784),
                c = l.useCallback,
                s = l.useEffect,
                f = l.useRef,
                d = l.useState,
                v = r(703383),
                y = v.RelayFeatureFlags,
                m = v.getRequest,
                p = { kind: "NullQueryReference" };
            function b(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== m(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                return y.ENABLE_ACTIVITY_COMPATIBILITY
                    ? i(e, n)
                    : (function (e, n) {
                          var r = null != n ? n : p,
                              i = a(),
                              l = o(),
                              v = f(new Set([r])),
                              y = d(function () {
                                  return r;
                              }),
                              m = y[0],
                              h = y[1],
                              k = d(function () {
                                  return r;
                              }),
                              P = k[0],
                              _ = k[1];
                          r !== P && (v.current.add(r), _(r), h(r));
                          var w = c(
                                  function () {
                                      l.current && (v.current.add(p), h(p));
                                  },
                                  [l],
                              ),
                              C = c(
                                  function (n, r) {
                                      var t = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                                      if (l.current) {
                                          var o,
                                              a = u(null !== (o = null == r ? void 0 : r.__environment) && void 0 !== o ? o : i, e, n, t);
                                          v.current.add(a), h(a);
                                      }
                                  },
                                  [i, e, h, l],
                              ),
                              g = f(!1);
                          return (
                              s(function () {
                                  return function () {
                                      g.current = !0;
                                  };
                              }, []),
                              s(
                                  function () {
                                      if (!0 === g.current) return (g.current = !1), void ("NullQueryReference" !== m.kind && C(m.variables, { fetchPolicy: m.fetchPolicy, networkCacheConfig: m.networkCacheConfig }));
                                      var n = v.current;
                                      if (l.current) {
                                          var r,
                                              u = (0, t.default)(n);
                                          try {
                                              for (u.s(); !(r = u.n()).done; ) {
                                                  var o = r.value;
                                                  if (o === m) break;
                                                  n.delete(o), "NullQueryReference" !== o.kind && (b(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
                                              }
                                          } catch (e) {
                                              u.e(e);
                                          } finally {
                                              u.f();
                                          }
                                      }
                                  },
                                  [m, l, C, e],
                              ),
                              s(
                                  function () {
                                      return function () {
                                          var n,
                                              r = (0, t.default)(v.current);
                                          try {
                                              for (r.s(); !(n = r.n()).done; ) {
                                                  var u = n.value;
                                                  "NullQueryReference" !== u.kind && (b(e) ? u.dispose && u.dispose() : u.releaseQuery && u.releaseQuery());
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
                              ["NullQueryReference" === m.kind ? null : m, C, w]
                          );
                      })(e, n);
            };
        },
        667368: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                u = r(606161).loadQuery,
                o = r(995402),
                i = r(437429),
                a = r(202784),
                l = a.useCallback,
                c = a.useEffect,
                s = a.useInsertionEffect,
                f = a.useRef,
                d = a.useState,
                v = r(703383).getRequest,
                y = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== v(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var r = null != n ? n : y,
                    a = i(),
                    v = o(),
                    p = f(null);
                null == p.current && (p.current = new Set([r]));
                var b,
                    h = d(function () {
                        return r;
                    }),
                    k = h[0],
                    P = h[1],
                    _ = d(function () {
                        return r;
                    }),
                    w = _[0],
                    C = _[1];
                r !== w && (null === (b = p.current) || void 0 === b || b.add(r), C(r), P(r));
                var g = l(
                        function () {
                            var e;
                            v.current && (null === (e = p.current) || void 0 === e || e.add(y), P(y));
                        },
                        [v],
                    ),
                    Q = l(
                        function (n, r) {
                            var t, o;
                            if (v.current) {
                                var i = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r,
                                    l = u(null !== (t = null == r ? void 0 : r.__environment) && void 0 !== t ? t : a, e, n, i);
                                null === (o = p.current) || void 0 === o || o.add(l), P(l);
                            }
                        },
                        [a, e, P, v],
                    ),
                    R = l(function (e, n) {
                        var r,
                            u,
                            o = null !== (r = p.current) && void 0 !== r ? r : new Set(),
                            i = (0, t.default)(o);
                        try {
                            for (i.s(); !(u = i.n()).done; ) {
                                var a = u.value;
                                a !== n && "NullQueryReference" !== a.kind && (m(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                            }
                        } catch (e) {
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    }, []),
                    N = f(null);
                return (
                    c(
                        function () {
                            return (
                                R(e, k),
                                null != N.current && (clearTimeout(N.current), (N.current = null)),
                                function () {
                                    N.current = setTimeout(function () {
                                        R(e, null);
                                    }, 3e5);
                                }
                            );
                        },
                        [e, k],
                    ),
                    s(
                        function () {
                            return function () {
                                N.current && clearTimeout(N.current), (N.current = null), R(e, null);
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === k.kind ? null : k, Q, g]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-8d4c5ae2.42f0663a.js.map

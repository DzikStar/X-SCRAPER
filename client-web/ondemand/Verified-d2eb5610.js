"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d2eb5610", "shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem", "bundle.Communities-8d4c5ae2"],
    {
        735079: (e, n, r) => {
            var t = r(609859);
            e.exports = function (e) {
                return t[e].prototype;
            };
        },
        278945: (e, n, r) => {
            var t = r(23103),
                u = r(265968),
                o = r(277111),
                c = r(910905),
                a = r(341253),
                i = r(735079),
                l = r(609736),
                s = Array,
                d = u(i("Array").sort);
            t(
                { target: "Array", proto: !0 },
                {
                    toSorted: function (e) {
                        void 0 !== e && o(e);
                        var n = c(this),
                            r = a(s, n);
                        return d(r, e);
                    },
                },
            ),
                l("toSorted");
        },
        606161: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                u = r(647677),
                o = r(703383),
                c = o.__internal.fetchQueryDeduped,
                a = o.Observable,
                i = o.PreloadableQueryRegistry,
                l = o.ReplaySubject,
                s = o.createOperationDescriptor,
                d = o.getRequest,
                f = o.getRequestIdentifier,
                v = 100001;
            e.exports = {
                loadQuery: function (e, n, r, o, p) {
                    var y;
                    v++;
                    var h,
                        m,
                        b,
                        k,
                        _,
                        w,
                        C = null !== (y = null == o ? void 0 : o.fetchPolicy) && void 0 !== y ? y : "store-or-network",
                        g = (0, t.default)((0, t.default)({}, null == o ? void 0 : o.networkCacheConfig), {}, { force: !0 }),
                        P = !1,
                        Q = function (n, r) {
                            return (P = !0), e.executeWithSource({ operation: n, source: r });
                        },
                        R = new l(),
                        N = a.create(function (e) {
                            return R.subscribe(e);
                        }),
                        x = null,
                        S = !1,
                        E = function (n) {
                            S = !0;
                            var t = new l(),
                                u = "raw-network-request-" + f(n, r),
                                o = c(e, u, function () {
                                    return e.getNetwork().execute(n, r, g);
                                }).subscribe({
                                    error: function (e) {
                                        (x = e), t.error(e);
                                    },
                                    next: function (e) {
                                        t.next(e);
                                    },
                                    complete: function () {
                                        t.complete();
                                    },
                                }).unsubscribe;
                            return (
                                (m = o),
                                a.create(function (e) {
                                    var n = t.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), m();
                                    };
                                })
                            );
                        },
                        q = function (n, r) {
                            S = !0;
                            var t = c(e, n.request.identifier, r).subscribe({
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
                            b = t.unsubscribe;
                        },
                        D = function (n) {
                            var t = s(n, r, g);
                            ((h = e.retain(t)), "store-only" !== C) &&
                                ("store-or-network" !== C || "available" !== e.check(t).status) &&
                                q(t, function () {
                                    var e = E(n.params);
                                    return Q(t, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === n.kind) {
                        null === (w = (k = n.params).id) && u(!1);
                        var T = i.get(w);
                        if (null != T) D(T);
                        else {
                            var A = "store-only" === C ? null : E(k),
                                I = i.onLoad(w, function (n) {
                                    _();
                                    var t = s(n, r, g);
                                    (h = e.retain(t)),
                                        null != A &&
                                            q(t, function () {
                                                return Q(t, A);
                                            });
                                });
                            _ = I.dispose;
                        }
                    } else {
                        var M = d(n);
                        (w = null != (k = M.params).cacheID ? k.cacheID : k.id), D(M);
                    }
                    var O = !1,
                        j = !1,
                        W = !1,
                        F = function () {
                            j || (h && h.dispose(), (j = !0));
                        },
                        L = function () {
                            W || (P ? b && b() : m && m(), _ && _(), (W = !0));
                        };
                    return {
                        kind: "PreloadedQuery",
                        environment: e,
                        environmentProviderOptions: p,
                        dispose: function () {
                            O || (F(), L(), (O = !0));
                        },
                        releaseQuery: F,
                        cancelNetworkRequest: L,
                        fetchKey: v,
                        id: w,
                        get isDisposed() {
                            return O || j;
                        },
                        get networkError() {
                            return x;
                        },
                        name: k.name,
                        networkCacheConfig: g,
                        fetchPolicy: C,
                        source: S ? N : void 0,
                        variables: r,
                    };
                },
            };
        },
        928123: (e, n, r) => {
            var t = r(138239),
                u = r(303566),
                o = r(437429),
                c = r(647677),
                a = (r(202784).useDebugValue, r(703383).__internal),
                i = a.fetchQueryDeduped,
                l = a.fetchQuery;
            r(826590);
            e.exports = function (e, n, r) {
                var a,
                    s = o(),
                    d = n.fetchKey,
                    f = n.fetchPolicy,
                    v = n.source,
                    p = n.variables,
                    y = n.networkCacheConfig,
                    h = u(e, p, y);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    h.request.node.params.name !== n.name && c(!1),
                        (a = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: d,
                            fetchObservable: i(s, h.request.identifier, function () {
                                return s === n.environment && null != v ? s.executeWithSource({ operation: h, source: v }) : s.execute({ operation: h });
                            }),
                            fetchPolicy: f,
                            query: h,
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var m = l(s, h);
                    a = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != v && s === n.environment ? v.ifEmpty(m) : (n.environment, m), fetchKey: d, fetchPolicy: f, query: h, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return t(a);
            };
        },
        72845: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                u = r(606161).loadQuery,
                o = r(995402),
                c = r(667368),
                a = r(437429),
                i = r(202784),
                l = i.useCallback,
                s = i.useEffect,
                d = i.useRef,
                f = i.useState,
                v = r(703383),
                p = v.RelayFeatureFlags,
                y = v.getRequest,
                h = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                return p.ENABLE_ACTIVITY_COMPATIBILITY
                    ? c(e, n)
                    : (function (e, n) {
                          var r = null != n ? n : h,
                              c = a(),
                              i = o(),
                              v = d(new Set([r])),
                              p = f(function () {
                                  return r;
                              }),
                              y = p[0],
                              b = p[1],
                              k = f(function () {
                                  return r;
                              }),
                              _ = k[0],
                              w = k[1];
                          r !== _ && (v.current.add(r), w(r), b(r));
                          var C = l(
                                  function () {
                                      i.current && (v.current.add(h), b(h));
                                  },
                                  [i],
                              ),
                              g = l(
                                  function (n, r) {
                                      var t = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                                      if (i.current) {
                                          var o,
                                              a = u(null !== (o = null == r ? void 0 : r.__environment) && void 0 !== o ? o : c, e, n, t);
                                          v.current.add(a), b(a);
                                      }
                                  },
                                  [c, e, b, i],
                              ),
                              P = d(!1);
                          return (
                              s(function () {
                                  return function () {
                                      P.current = !0;
                                  };
                              }, []),
                              s(
                                  function () {
                                      if (!0 === P.current) return (P.current = !1), void ("NullQueryReference" !== y.kind && g(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig }));
                                      var n = v.current;
                                      if (i.current) {
                                          var r,
                                              u = (0, t.default)(n);
                                          try {
                                              for (u.s(); !(r = u.n()).done; ) {
                                                  var o = r.value;
                                                  if (o === y) break;
                                                  n.delete(o), "NullQueryReference" !== o.kind && (m(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
                                              }
                                          } catch (e) {
                                              u.e(e);
                                          } finally {
                                              u.f();
                                          }
                                      }
                                  },
                                  [y, i, g, e],
                              ),
                              s(
                                  function () {
                                      return function () {
                                          var n,
                                              r = (0, t.default)(v.current);
                                          try {
                                              for (r.s(); !(n = r.n()).done; ) {
                                                  var u = n.value;
                                                  "NullQueryReference" !== u.kind && (m(e) ? u.dispose && u.dispose() : u.releaseQuery && u.releaseQuery());
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
                              ["NullQueryReference" === y.kind ? null : y, g, C]
                          );
                      })(e, n);
            };
        },
        667368: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                u = r(606161).loadQuery,
                o = r(995402),
                c = r(437429),
                a = r(202784),
                i = a.useCallback,
                l = a.useEffect,
                s = a.useInsertionEffect,
                d = a.useRef,
                f = a.useState,
                v = r(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== v(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var r = null != n ? n : p,
                    a = c(),
                    v = o(),
                    h = d(null);
                null == h.current && (h.current = new Set([r]));
                var m,
                    b = f(function () {
                        return r;
                    }),
                    k = b[0],
                    _ = b[1],
                    w = f(function () {
                        return r;
                    }),
                    C = w[0],
                    g = w[1];
                r !== C && (null === (m = h.current) || void 0 === m || m.add(r), g(r), _(r));
                var P = i(
                        function () {
                            var e;
                            v.current && (null === (e = h.current) || void 0 === e || e.add(p), _(p));
                        },
                        [v],
                    ),
                    Q = i(
                        function (n, r) {
                            var t, o;
                            if (v.current) {
                                var c = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r,
                                    i = u(null !== (t = null == r ? void 0 : r.__environment) && void 0 !== t ? t : a, e, n, c);
                                null === (o = h.current) || void 0 === o || o.add(i), _(i);
                            }
                        },
                        [a, e, _, v],
                    ),
                    R = i(function (e, n) {
                        var r,
                            u,
                            o = null !== (r = h.current) && void 0 !== r ? r : new Set(),
                            c = (0, t.default)(o);
                        try {
                            for (c.s(); !(u = c.n()).done; ) {
                                var a = u.value;
                                a !== n && "NullQueryReference" !== a.kind && (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
                            }
                        } catch (e) {
                            c.e(e);
                        } finally {
                            c.f();
                        }
                    }, []),
                    N = d(null);
                return (
                    l(
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
                    ["NullQueryReference" === k.kind ? null : k, Q, P]
                );
            };
        },
        199237: (e, n, r) => {
            r.d(n, { fC: () => C, bU: () => g });
            var t = r(202784),
                u = r(717998),
                o = r(262656),
                c = r(552322);
            function a(...e) {
                const n = e[0];
                if (1 === e.length) return n;
                const r = () => {
                    const r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const u = r.reduce((n, { useScope: r, scopeName: t }) => ({ ...n, ...r(e)[`__scope${t}`] }), {});
                        return t.useMemo(() => ({ [`__scope${n.scopeName}`]: u }), [u]);
                    };
                };
                return (r.scopeName = n.scopeName), r;
            }
            var i = r(387695),
                l = r(890022),
                s = r(335019),
                d = r(172714),
                f = "Switch",
                [v, p] = (function (e, n = []) {
                    let r = [];
                    const u = () => {
                        const n = r.map((e) => t.createContext(e));
                        return function (r) {
                            const u = r?.[e] || n;
                            return t.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: u } }), [r, u]);
                        };
                    };
                    return (
                        (u.scopeName = e),
                        [
                            function (n, u) {
                                const o = t.createContext(u),
                                    a = r.length;
                                function i(n) {
                                    const { scope: r, children: u, ...i } = n,
                                        l = r?.[e][a] || o,
                                        s = t.useMemo(() => i, Object.values(i));
                                    return (0, c.jsx)(l.Provider, { value: s, children: u });
                                }
                                return (
                                    (r = [...r, u]),
                                    (i.displayName = n + "Provider"),
                                    [
                                        i,
                                        function (r, c) {
                                            const i = c?.[e][a] || o,
                                                l = t.useContext(i);
                                            if (l) return l;
                                            if (void 0 !== u) return u;
                                            throw new Error(`\`${r}\` must be used within \`${n}\``);
                                        },
                                    ]
                                );
                            },
                            a(u, ...n),
                        ]
                    );
                })(f),
                [y, h] = v(f),
                m = t.forwardRef((e, n) => {
                    const { __scopeSwitch: r, name: a, checked: l, defaultChecked: s, required: f, disabled: v, value: p = "on", onCheckedChange: h, ...m } = e,
                        [b, k] = t.useState(null),
                        C = (0, o.e)(n, (e) => k(e)),
                        g = t.useRef(!1),
                        P = !b || Boolean(b.closest("form")),
                        [Q = !1, R] = (0, i.T)({ prop: l, defaultProp: s, onChange: h });
                    return (0, c.jsxs)(y, {
                        scope: r,
                        checked: Q,
                        disabled: v,
                        children: [
                            (0, c.jsx)(d.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": Q,
                                "aria-required": f,
                                "data-state": w(Q),
                                "data-disabled": v ? "" : void 0,
                                disabled: v,
                                value: p,
                                ...m,
                                ref: C,
                                onClick: (0, u.M)(e.onClick, (e) => {
                                    R((e) => !e), P && ((g.current = e.isPropagationStopped()), g.current || e.stopPropagation());
                                }),
                            }),
                            P && (0, c.jsx)(_, { control: b, bubbles: !g.current, name: a, value: p, checked: Q, required: f, disabled: v, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            m.displayName = f;
            var b = "SwitchThumb",
                k = t.forwardRef((e, n) => {
                    const { __scopeSwitch: r, ...t } = e,
                        u = h(b, r);
                    return (0, c.jsx)(d.WV.span, { "data-state": w(u.checked), "data-disabled": u.disabled ? "" : void 0, ...t, ref: n });
                });
            k.displayName = b;
            var _ = (e) => {
                const { control: n, checked: r, bubbles: u = !0, ...o } = e,
                    a = t.useRef(null),
                    i = (0, l.D)(r),
                    d = (0, s.t)(n);
                return (
                    t.useEffect(() => {
                        const e = a.current,
                            n = window.HTMLInputElement.prototype,
                            t = Object.getOwnPropertyDescriptor(n, "checked").set;
                        if (i !== r && t) {
                            const n = new Event("click", { bubbles: u });
                            t.call(e, r), e.dispatchEvent(n);
                        }
                    }, [i, r, u]),
                    (0, c.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: r, ...o, tabIndex: -1, ref: a, style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function w(e) {
                return e ? "checked" : "unchecked";
            }
            var C = m,
                g = k;
        },
        890022: (e, n, r) => {
            r.d(n, { D: () => u });
            var t = r(202784);
            function u(e) {
                const n = t.useRef({ value: e, previous: e });
                return t.useMemo(() => (n.current.value !== e && ((n.current.previous = n.current.value), (n.current.value = e)), n.current.previous), [e]);
            }
        },
        787321: (e, n, r) => {
            function t(e) {
                return (n) => {
                    const r = (e ? Math[e] : Math.trunc)(n);
                    return 0 === r ? 0 : r;
                };
            }
            r.d(n, { u: () => t });
        },
        699629: (e, n, r) => {
            r.d(n, { A: () => c });
            var t = r(787321),
                u = r(31418),
                o = r(641645);
            function c(e, n, r) {
                const c = (0, o._)(e, n) / u.vh;
                return (0, t.u)(r?.roundingMethod)(c);
            }
        },
        641645: (e, n, r) => {
            r.d(n, { _: () => u });
            var t = r(150729);
            function u(e, n) {
                return +(0, t.Q)(e) - +(0, t.Q)(n);
            }
        },
        534002: (e, n, r) => {
            r.d(n, { X: () => c });
            var t = r(787321),
                u = r(31418),
                o = r(641645);
            function c(e, n, r) {
                const c = (0, o._)(e, n) / u.yJ;
                return (0, t.u)(r?.roundingMethod)(c);
            }
        },
        624656: (e, n, r) => {
            r.d(n, { c: () => o });
            var t = r(787321),
                u = r(641645);
            function o(e, n, r) {
                const o = (0, u._)(e, n) / 1e3;
                return (0, t.u)(r?.roundingMethod)(o);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d2eb5610.ca02970a.js.map

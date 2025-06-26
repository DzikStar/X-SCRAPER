"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d2eb5610", "shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem", "bundle.Communities-8d4c5ae2"],
    {
        735079: (e, r, n) => {
            var t = n(609859);
            e.exports = function (e) {
                return t[e].prototype;
            };
        },
        278945: (e, r, n) => {
            var t = n(23103),
                u = n(265968),
                o = n(277111),
                c = n(910905),
                a = n(341253),
                i = n(735079),
                l = n(609736),
                s = Array,
                d = u(i("Array").sort);
            t(
                { target: "Array", proto: !0 },
                {
                    toSorted: function (e) {
                        void 0 !== e && o(e);
                        var r = c(this),
                            n = a(s, r);
                        return d(n, e);
                    },
                },
            ),
                l("toSorted");
        },
        606161: (e, r, n) => {
            var t = (0, n(902091).default)(n(463928)),
                u = n(647677),
                o = n(703383),
                c = o.__internal.fetchQueryDeduped,
                a = o.Observable,
                i = o.PreloadableQueryRegistry,
                l = o.ReplaySubject,
                s = o.createOperationDescriptor,
                d = o.getRequest,
                f = o.getRequestIdentifier,
                v = 100001;
            e.exports = {
                loadQuery: function (e, r, n, o, p) {
                    var y;
                    v++;
                    var h,
                        m,
                        b,
                        k,
                        _,
                        w,
                        g = null !== (y = null == o ? void 0 : o.fetchPolicy) && void 0 !== y ? y : "store-or-network",
                        C = (0, t.default)((0, t.default)({}, null == o ? void 0 : o.networkCacheConfig), {}, { force: !0 }),
                        P = !1,
                        Q = function (r, n) {
                            return (P = !0), e.executeWithSource({ operation: r, source: n });
                        },
                        R = new l(),
                        N = a.create(function (e) {
                            return R.subscribe(e);
                        }),
                        x = null,
                        S = !1,
                        E = function (r) {
                            S = !0;
                            var t = new l(),
                                u = "raw-network-request-" + f(r, n),
                                o = c(e, u, function () {
                                    return e.getNetwork().execute(r, n, C);
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
                                    var r = t.subscribe(e);
                                    return function () {
                                        r.unsubscribe(), m();
                                    };
                                })
                            );
                        },
                        q = function (r, n) {
                            S = !0;
                            var t = c(e, r.request.identifier, n).subscribe({
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
                        A = function (r) {
                            var t = s(r, n, C);
                            ((h = e.retain(t)), "store-only" !== g) &&
                                ("store-or-network" !== g || "available" !== e.check(t).status) &&
                                q(t, function () {
                                    var e = E(r.params);
                                    return Q(t, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === r.kind) {
                        null === (w = (k = r.params).id) && u(!1);
                        var D = i.get(w);
                        if (null != D) A(D);
                        else {
                            var T = "store-only" === g ? null : E(k),
                                I = i.onLoad(w, function (r) {
                                    _();
                                    var t = s(r, n, C);
                                    (h = e.retain(t)),
                                        null != T &&
                                            q(t, function () {
                                                return Q(t, T);
                                            });
                                });
                            _ = I.dispose;
                        }
                    } else {
                        var M = d(r);
                        (w = null != (k = M.params).cacheID ? k.cacheID : k.id), A(M);
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
                        networkCacheConfig: C,
                        fetchPolicy: g,
                        source: S ? N : void 0,
                        variables: n,
                    };
                },
            };
        },
        928123: (e, r, n) => {
            var t = n(138239),
                u = n(303566),
                o = n(437429),
                c = n(647677),
                a = (n(202784).useDebugValue, n(703383).__internal),
                i = a.fetchQueryDeduped,
                l = a.fetchQuery;
            n(826590);
            e.exports = function (e, r, n) {
                var a,
                    s = o(),
                    d = r.fetchKey,
                    f = r.fetchPolicy,
                    v = r.source,
                    p = r.variables,
                    y = r.networkCacheConfig,
                    h = u(e, p, y);
                if ("PreloadedQuery_DEPRECATED" === r.kind)
                    h.request.node.params.name !== r.name && c(!1),
                        (a = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: d,
                            fetchObservable: i(s, h.request.identifier, function () {
                                return s === r.environment && null != v ? s.executeWithSource({ operation: h, source: v }) : s.execute({ operation: h });
                            }),
                            fetchPolicy: f,
                            query: h,
                            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
                        });
                else {
                    var m = l(s, h);
                    a = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != v && s === r.environment ? v.ifEmpty(m) : (r.environment, m), fetchKey: d, fetchPolicy: f, query: h, renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy };
                }
                return t(a);
            };
        },
        72845: (e, r, n) => {
            var t = (0, n(902091).default)(n(22395)),
                u = n(606161).loadQuery,
                o = n(995402),
                c = n(667368),
                a = n(437429),
                i = n(202784),
                l = i.useCallback,
                s = i.useEffect,
                d = i.useRef,
                f = i.useState,
                v = n(703383),
                p = v.RelayFeatureFlags,
                y = v.getRequest,
                h = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, r) {
                return p.ENABLE_ACTIVITY_COMPATIBILITY
                    ? c(e, r)
                    : (function (e, r) {
                          var n = null != r ? r : h,
                              c = a(),
                              i = o(),
                              v = d(new Set([n])),
                              p = f(function () {
                                  return n;
                              }),
                              y = p[0],
                              b = p[1],
                              k = f(function () {
                                  return n;
                              }),
                              _ = k[0],
                              w = k[1];
                          n !== _ && (v.current.add(n), w(n), b(n));
                          var g = l(
                                  function () {
                                      i.current && (v.current.add(h), b(h));
                                  },
                                  [i],
                              ),
                              C = l(
                                  function (r, n) {
                                      var t = null != n && n.hasOwnProperty("__environment") ? { fetchPolicy: n.fetchPolicy, networkCacheConfig: n.networkCacheConfig, __nameForWarning: n.__nameForWarning } : n;
                                      if (i.current) {
                                          var o,
                                              a = u(null !== (o = null == n ? void 0 : n.__environment) && void 0 !== o ? o : c, e, r, t);
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
                                      if (!0 === P.current) return (P.current = !1), void ("NullQueryReference" !== y.kind && C(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig }));
                                      var r = v.current;
                                      if (i.current) {
                                          var n,
                                              u = (0, t.default)(r);
                                          try {
                                              for (u.s(); !(n = u.n()).done; ) {
                                                  var o = n.value;
                                                  if (o === y) break;
                                                  r.delete(o), "NullQueryReference" !== o.kind && (m(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
                                              }
                                          } catch (e) {
                                              u.e(e);
                                          } finally {
                                              u.f();
                                          }
                                      }
                                  },
                                  [y, i, C, e],
                              ),
                              s(
                                  function () {
                                      return function () {
                                          var r,
                                              n = (0, t.default)(v.current);
                                          try {
                                              for (n.s(); !(r = n.n()).done; ) {
                                                  var u = r.value;
                                                  "NullQueryReference" !== u.kind && (m(e) ? u.dispose && u.dispose() : u.releaseQuery && u.releaseQuery());
                                              }
                                          } catch (e) {
                                              n.e(e);
                                          } finally {
                                              n.f();
                                          }
                                      };
                                  },
                                  [e],
                              ),
                              ["NullQueryReference" === y.kind ? null : y, C, g]
                          );
                      })(e, r);
            };
        },
        667368: (e, r, n) => {
            var t = (0, n(902091).default)(n(22395)),
                u = n(606161).loadQuery,
                o = n(995402),
                c = n(437429),
                a = n(202784),
                i = a.useCallback,
                l = a.useEffect,
                s = a.useInsertionEffect,
                d = a.useRef,
                f = a.useState,
                v = n(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== v(e).params.metadata.live;
            }
            e.exports = function (e, r) {
                var n = null != r ? r : p,
                    a = c(),
                    v = o(),
                    h = d(null);
                null == h.current && (h.current = new Set([n]));
                var m,
                    b = f(function () {
                        return n;
                    }),
                    k = b[0],
                    _ = b[1],
                    w = f(function () {
                        return n;
                    }),
                    g = w[0],
                    C = w[1];
                n !== g && (null === (m = h.current) || void 0 === m || m.add(n), C(n), _(n));
                var P = i(
                        function () {
                            var e;
                            v.current && (null === (e = h.current) || void 0 === e || e.add(p), _(p));
                        },
                        [v],
                    ),
                    Q = i(
                        function (r, n) {
                            var t, o;
                            if (v.current) {
                                var c = null != n && n.hasOwnProperty("__environment") ? { fetchPolicy: n.fetchPolicy, networkCacheConfig: n.networkCacheConfig, __nameForWarning: n.__nameForWarning } : n,
                                    i = u(null !== (t = null == n ? void 0 : n.__environment) && void 0 !== t ? t : a, e, r, c);
                                null === (o = h.current) || void 0 === o || o.add(i), _(i);
                            }
                        },
                        [a, e, _, v],
                    ),
                    R = i(function (e, r) {
                        var n,
                            u,
                            o = null !== (n = h.current) && void 0 !== n ? n : new Set(),
                            c = (0, t.default)(o);
                        try {
                            for (c.s(); !(u = c.n()).done; ) {
                                var a = u.value;
                                a !== r && "NullQueryReference" !== a.kind && (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
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
        199237: (e, r, n) => {
            n.d(r, { fC: () => g, bU: () => C });
            var t = n(202784),
                u = n(717998),
                o = n(262656),
                c = n(552322);
            function a(...e) {
                const r = e[0];
                if (1 === e.length) return r;
                const n = () => {
                    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const u = n.reduce((r, { useScope: n, scopeName: t }) => ({ ...r, ...n(e)[`__scope${t}`] }), {});
                        return t.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
                    };
                };
                return (n.scopeName = r.scopeName), n;
            }
            var i = n(387695),
                l = n(890022),
                s = n(335019),
                d = n(172714),
                f = "Switch",
                [v, p] = (function (e, r = []) {
                    let n = [];
                    const u = () => {
                        const r = n.map((e) => t.createContext(e));
                        return function (n) {
                            const u = n?.[e] || r;
                            return t.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: u } }), [n, u]);
                        };
                    };
                    return (
                        (u.scopeName = e),
                        [
                            function (r, u) {
                                const o = t.createContext(u),
                                    a = n.length;
                                function i(r) {
                                    const { scope: n, children: u, ...i } = r,
                                        l = n?.[e][a] || o,
                                        s = t.useMemo(() => i, Object.values(i));
                                    return (0, c.jsx)(l.Provider, { value: s, children: u });
                                }
                                return (
                                    (n = [...n, u]),
                                    (i.displayName = r + "Provider"),
                                    [
                                        i,
                                        function (n, c) {
                                            const i = c?.[e][a] || o,
                                                l = t.useContext(i);
                                            if (l) return l;
                                            if (void 0 !== u) return u;
                                            throw new Error(`\`${n}\` must be used within \`${r}\``);
                                        },
                                    ]
                                );
                            },
                            a(u, ...r),
                        ]
                    );
                })(f),
                [y, h] = v(f),
                m = t.forwardRef((e, r) => {
                    const { __scopeSwitch: n, name: a, checked: l, defaultChecked: s, required: f, disabled: v, value: p = "on", onCheckedChange: h, ...m } = e,
                        [b, k] = t.useState(null),
                        g = (0, o.e)(r, (e) => k(e)),
                        C = t.useRef(!1),
                        P = !b || Boolean(b.closest("form")),
                        [Q = !1, R] = (0, i.T)({ prop: l, defaultProp: s, onChange: h });
                    return (0, c.jsxs)(y, {
                        scope: n,
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
                                ref: g,
                                onClick: (0, u.M)(e.onClick, (e) => {
                                    R((e) => !e), P && ((C.current = e.isPropagationStopped()), C.current || e.stopPropagation());
                                }),
                            }),
                            P && (0, c.jsx)(_, { control: b, bubbles: !C.current, name: a, value: p, checked: Q, required: f, disabled: v, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            m.displayName = f;
            var b = "SwitchThumb",
                k = t.forwardRef((e, r) => {
                    const { __scopeSwitch: n, ...t } = e,
                        u = h(b, n);
                    return (0, c.jsx)(d.WV.span, { "data-state": w(u.checked), "data-disabled": u.disabled ? "" : void 0, ...t, ref: r });
                });
            k.displayName = b;
            var _ = (e) => {
                const { control: r, checked: n, bubbles: u = !0, ...o } = e,
                    a = t.useRef(null),
                    i = (0, l.D)(n),
                    d = (0, s.t)(r);
                return (
                    t.useEffect(() => {
                        const e = a.current,
                            r = window.HTMLInputElement.prototype,
                            t = Object.getOwnPropertyDescriptor(r, "checked").set;
                        if (i !== n && t) {
                            const r = new Event("click", { bubbles: u });
                            t.call(e, n), e.dispatchEvent(r);
                        }
                    }, [i, n, u]),
                    (0, c.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: n, ...o, tabIndex: -1, ref: a, style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function w(e) {
                return e ? "checked" : "unchecked";
            }
            var g = m,
                C = k;
        },
        890022: (e, r, n) => {
            n.d(r, { D: () => u });
            var t = n(202784);
            function u(e) {
                const r = t.useRef({ value: e, previous: e });
                return t.useMemo(() => (r.current.value !== e && ((r.current.previous = r.current.value), (r.current.value = e)), r.current.previous), [e]);
            }
        },
        840489: (e, r, n) => {
            function t(e) {
                var r,
                    n,
                    u = "";
                if ("string" == typeof e || "number" == typeof e) u += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var o = e.length;
                        for (r = 0; r < o; r++) e[r] && (n = t(e[r])) && (u && (u += " "), (u += n));
                    } else for (n in e) e[n] && (u && (u += " "), (u += n));
                return u;
            }
            function u() {
                for (var e, r, n = 0, u = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (r = t(e)) && (u && (u += " "), (u += r));
                return u;
            }
            n.d(r, { W: () => u, Z: () => o });
            const o = u;
        },
        787321: (e, r, n) => {
            function t(e) {
                return (r) => {
                    const n = (e ? Math[e] : Math.trunc)(r);
                    return 0 === n ? 0 : n;
                };
            }
            n.d(r, { u: () => t });
        },
        699629: (e, r, n) => {
            n.d(r, { A: () => c });
            var t = n(787321),
                u = n(31418),
                o = n(641645);
            function c(e, r, n) {
                const c = (0, o._)(e, r) / u.vh;
                return (0, t.u)(n?.roundingMethod)(c);
            }
        },
        641645: (e, r, n) => {
            n.d(r, { _: () => u });
            var t = n(150729);
            function u(e, r) {
                return +(0, t.Q)(e) - +(0, t.Q)(r);
            }
        },
        534002: (e, r, n) => {
            n.d(r, { X: () => c });
            var t = n(787321),
                u = n(31418),
                o = n(641645);
            function c(e, r, n) {
                const c = (0, o._)(e, r) / u.yJ;
                return (0, t.u)(n?.roundingMethod)(c);
            }
        },
        624656: (e, r, n) => {
            n.d(r, { c: () => o });
            var t = n(787321),
                u = n(641645);
            function o(e, r, n) {
                const o = (0, u._)(e, r) / 1e3;
                return (0, t.u)(n?.roundingMethod)(o);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d2eb5610.6350188a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-d2eb5610", "shared~bundle.AccountAnalytics~ondemand.SettingsRevamp~bundle.PremiumHub~bundle.ProfessionalHome~ondemand.Ins", "bundle.Communities-8d4c5ae2"],
    {
        735079: (e, n, r) => {
            var t = r(609859);
            e.exports = function (e) {
                return t[e].prototype;
            };
        },
        278945: (e, n, r) => {
            var t = r(23103),
                o = r(265968),
                u = r(277111),
                c = r(910905),
                a = r(341253),
                i = r(735079),
                l = r(609736),
                s = Array,
                d = o(i("Array").sort);
            t(
                { target: "Array", proto: !0 },
                {
                    toSorted: function (e) {
                        void 0 !== e && u(e);
                        var n = c(this),
                            r = a(s, n);
                        return d(r, e);
                    },
                },
            ),
                l("toSorted");
        },
        482609: (e) => {
            e.exports = function (e) {
                var n = [];
                return (
                    (n.toString = function () {
                        return this.map(function (n) {
                            var r = (function (e, n) {
                                var r = e[1] || "",
                                    t = e[3];
                                if (!t) return r;
                                if (n && "function" == typeof btoa) {
                                    var o = ((c = t), (a = btoa(unescape(encodeURIComponent(JSON.stringify(c))))), (i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)), "/*# ".concat(i, " */")),
                                        u = t.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(t.sourceRoot || "").concat(e, " */");
                                        });
                                    return [r].concat(u).concat([o]).join("\n");
                                }
                                var c, a, i;
                                return [r].join("\n");
                            })(n, e);
                            return n[2] ? "@media ".concat(n[2], " {").concat(r, "}") : r;
                        }).join("");
                    }),
                    (n.i = function (e, r, t) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (t)
                            for (var u = 0; u < this.length; u++) {
                                var c = this[u][0];
                                null != c && (o[c] = !0);
                            }
                        for (var a = 0; a < e.length; a++) {
                            var i = [].concat(e[a]);
                            (t && o[i[0]]) || (r && (i[2] ? (i[2] = "".concat(r, " and ").concat(i[2])) : (i[2] = r)), n.push(i));
                        }
                    }),
                    n
                );
            };
        },
        606161: (e, n, r) => {
            var t = (0, r(902091).default)(r(463928)),
                o = r(647677),
                u = r(703383),
                c = u.__internal.fetchQueryDeduped,
                a = u.Observable,
                i = u.PreloadableQueryRegistry,
                l = u.ReplaySubject,
                s = u.createOperationDescriptor,
                d = u.getRequest,
                f = u.getRequestIdentifier,
                v = 100001;
            e.exports = {
                loadQuery: function (e, n, r, u, p) {
                    var h;
                    v++;
                    var y,
                        m,
                        b,
                        k,
                        g,
                        _,
                        w = null !== (h = null == u ? void 0 : u.fetchPolicy) && void 0 !== h ? h : "store-or-network",
                        C = (0, t.default)((0, t.default)({}, null == u ? void 0 : u.networkCacheConfig), {}, { force: !0 }),
                        P = !1,
                        R = function (n, r) {
                            return (P = !0), e.executeWithSource({ operation: n, source: r });
                        },
                        Q = new l(),
                        N = a.create(function (e) {
                            return Q.subscribe(e);
                        }),
                        x = null,
                        S = !1,
                        E = function (n) {
                            S = !0;
                            var t = new l(),
                                o = "raw-network-request-" + f(n, r),
                                u = c(e, o, function () {
                                    return e.getNetwork().execute(n, r, C);
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
                                (m = u),
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
                                    Q.error(e);
                                },
                                next: function (e) {
                                    Q.next(e);
                                },
                                complete: function () {
                                    Q.complete();
                                },
                            });
                            b = t.unsubscribe;
                        },
                        j = function (n) {
                            var t = s(n, r, C);
                            ((y = e.retain(t)), "store-only" !== w) &&
                                ("store-or-network" !== w || "available" !== e.check(t).status) &&
                                q(t, function () {
                                    var e = E(n.params);
                                    return R(t, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === n.kind) {
                        null === (_ = (k = n.params).id) && o(!1);
                        var A = i.get(_);
                        if (null != A) j(A);
                        else {
                            var D = "store-only" === w ? null : E(k),
                                I = i.onLoad(_, function (n) {
                                    g();
                                    var t = s(n, r, C);
                                    (y = e.retain(t)),
                                        null != D &&
                                            q(t, function () {
                                                return R(t, D);
                                            });
                                });
                            g = I.dispose;
                        }
                    } else {
                        var M = d(n);
                        (_ = null != (k = M.params).cacheID ? k.cacheID : k.id), j(M);
                    }
                    var T = !1,
                        O = !1,
                        W = !1,
                        L = function () {
                            O || (y && y.dispose(), (O = !0));
                        },
                        F = function () {
                            W || (P ? b && b() : m && m(), g && g(), (W = !0));
                        };
                    return {
                        kind: "PreloadedQuery",
                        environment: e,
                        environmentProviderOptions: p,
                        dispose: function () {
                            T || (L(), F(), (T = !0));
                        },
                        releaseQuery: L,
                        cancelNetworkRequest: F,
                        fetchKey: v,
                        id: _,
                        get isDisposed() {
                            return T || O;
                        },
                        get networkError() {
                            return x;
                        },
                        name: k.name,
                        networkCacheConfig: C,
                        fetchPolicy: w,
                        source: S ? N : void 0,
                        variables: r,
                    };
                },
            };
        },
        928123: (e, n, r) => {
            var t = r(138239),
                o = r(303566),
                u = r(437429),
                c = r(647677),
                a = (r(202784).useDebugValue, r(703383).__internal),
                i = a.fetchQueryDeduped,
                l = a.fetchQuery;
            r(826590);
            e.exports = function (e, n, r) {
                var a,
                    s = u(),
                    d = n.fetchKey,
                    f = n.fetchPolicy,
                    v = n.source,
                    p = n.variables,
                    h = n.networkCacheConfig,
                    y = o(e, p, h);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    y.request.node.params.name !== n.name && c(!1),
                        (a = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: d,
                            fetchObservable: i(s, y.request.identifier, function () {
                                return s === n.environment && null != v ? s.executeWithSource({ operation: y, source: v }) : s.execute({ operation: y });
                            }),
                            fetchPolicy: f,
                            query: y,
                            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
                        });
                else {
                    var m = l(s, y);
                    a = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != v && s === n.environment ? v.ifEmpty(m) : (n.environment, m), fetchKey: d, fetchPolicy: f, query: y, renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy };
                }
                return t(a);
            };
        },
        72845: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                o = r(606161).loadQuery,
                u = r(995402),
                c = r(667368),
                a = r(437429),
                i = r(202784),
                l = i.useCallback,
                s = i.useEffect,
                d = i.useRef,
                f = i.useState,
                v = r(703383),
                p = v.RelayFeatureFlags,
                h = v.getRequest,
                y = { kind: "NullQueryReference" };
            function m(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== h(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                return p.ENABLE_ACTIVITY_COMPATIBILITY
                    ? c(e, n)
                    : (function (e, n) {
                          var r = null != n ? n : y,
                              c = a(),
                              i = u(),
                              v = d(new Set([r])),
                              p = f(function () {
                                  return r;
                              }),
                              h = p[0],
                              b = p[1],
                              k = f(function () {
                                  return r;
                              }),
                              g = k[0],
                              _ = k[1];
                          r !== g && (v.current.add(r), _(r), b(r));
                          var w = l(
                                  function () {
                                      i.current && (v.current.add(y), b(y));
                                  },
                                  [i],
                              ),
                              C = l(
                                  function (n, r) {
                                      var t = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r;
                                      if (i.current) {
                                          var u,
                                              a = o(null !== (u = null == r ? void 0 : r.__environment) && void 0 !== u ? u : c, e, n, t);
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
                                      if (!0 === P.current) return (P.current = !1), void ("NullQueryReference" !== h.kind && C(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig }));
                                      var n = v.current;
                                      if (i.current) {
                                          var r,
                                              o = (0, t.default)(n);
                                          try {
                                              for (o.s(); !(r = o.n()).done; ) {
                                                  var u = r.value;
                                                  if (u === h) break;
                                                  n.delete(u), "NullQueryReference" !== u.kind && (m(e) ? u.dispose && u.dispose() : u.releaseQuery && u.releaseQuery());
                                              }
                                          } catch (e) {
                                              o.e(e);
                                          } finally {
                                              o.f();
                                          }
                                      }
                                  },
                                  [h, i, C, e],
                              ),
                              s(
                                  function () {
                                      return function () {
                                          var n,
                                              r = (0, t.default)(v.current);
                                          try {
                                              for (r.s(); !(n = r.n()).done; ) {
                                                  var o = n.value;
                                                  "NullQueryReference" !== o.kind && (m(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
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
                              ["NullQueryReference" === h.kind ? null : h, C, w]
                          );
                      })(e, n);
            };
        },
        667368: (e, n, r) => {
            var t = (0, r(902091).default)(r(22395)),
                o = r(606161).loadQuery,
                u = r(995402),
                c = r(437429),
                a = r(202784),
                i = a.useCallback,
                l = a.useEffect,
                s = a.useInsertionEffect,
                d = a.useRef,
                f = a.useState,
                v = r(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function h(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== v(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var r = null != n ? n : p,
                    a = c(),
                    v = u(),
                    y = d(null);
                null == y.current && (y.current = new Set([r]));
                var m,
                    b = f(function () {
                        return r;
                    }),
                    k = b[0],
                    g = b[1],
                    _ = f(function () {
                        return r;
                    }),
                    w = _[0],
                    C = _[1];
                r !== w && (null === (m = y.current) || void 0 === m || m.add(r), C(r), g(r));
                var P = i(
                        function () {
                            var e;
                            v.current && (null === (e = y.current) || void 0 === e || e.add(p), g(p));
                        },
                        [v],
                    ),
                    R = i(
                        function (n, r) {
                            var t, u;
                            if (v.current) {
                                var c = null != r && r.hasOwnProperty("__environment") ? { fetchPolicy: r.fetchPolicy, networkCacheConfig: r.networkCacheConfig, __nameForWarning: r.__nameForWarning } : r,
                                    i = o(null !== (t = null == r ? void 0 : r.__environment) && void 0 !== t ? t : a, e, n, c);
                                null === (u = y.current) || void 0 === u || u.add(i), g(i);
                            }
                        },
                        [a, e, g, v],
                    ),
                    Q = i(function (e, n) {
                        var r,
                            o,
                            u = null !== (r = y.current) && void 0 !== r ? r : new Set(),
                            c = (0, t.default)(u);
                        try {
                            for (c.s(); !(o = c.n()).done; ) {
                                var a = o.value;
                                a !== n && "NullQueryReference" !== a.kind && (h(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery());
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
                                Q(e, k),
                                null != N.current && (clearTimeout(N.current), (N.current = null)),
                                function () {
                                    N.current = setTimeout(function () {
                                        Q(e, null);
                                    }, 3e5);
                                }
                            );
                        },
                        [e, k],
                    ),
                    s(
                        function () {
                            return function () {
                                N.current && clearTimeout(N.current), (N.current = null), Q(e, null);
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === k.kind ? null : k, R, P]
                );
            };
        },
        199237: (e, n, r) => {
            r.d(n, { fC: () => w, bU: () => C });
            var t = r(202784),
                o = r(717998),
                u = r(262656),
                c = r(552322);
            function a(...e) {
                const n = e[0];
                if (1 === e.length) return n;
                const r = () => {
                    const r = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const o = r.reduce((n, { useScope: r, scopeName: t }) => ({ ...n, ...r(e)[`__scope${t}`] }), {});
                        return t.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
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
                    const o = () => {
                        const n = r.map((e) => t.createContext(e));
                        return function (r) {
                            const o = r?.[e] || n;
                            return t.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: o } }), [r, o]);
                        };
                    };
                    return (
                        (o.scopeName = e),
                        [
                            function (n, o) {
                                const u = t.createContext(o),
                                    a = r.length;
                                function i(n) {
                                    const { scope: r, children: o, ...i } = n,
                                        l = r?.[e][a] || u,
                                        s = t.useMemo(() => i, Object.values(i));
                                    return (0, c.jsx)(l.Provider, { value: s, children: o });
                                }
                                return (
                                    (r = [...r, o]),
                                    (i.displayName = n + "Provider"),
                                    [
                                        i,
                                        function (r, c) {
                                            const i = c?.[e][a] || u,
                                                l = t.useContext(i);
                                            if (l) return l;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${r}\` must be used within \`${n}\``);
                                        },
                                    ]
                                );
                            },
                            a(o, ...n),
                        ]
                    );
                })(f),
                [h, y] = v(f),
                m = t.forwardRef((e, n) => {
                    const { __scopeSwitch: r, name: a, checked: l, defaultChecked: s, required: f, disabled: v, value: p = "on", onCheckedChange: y, ...m } = e,
                        [b, k] = t.useState(null),
                        w = (0, u.e)(n, (e) => k(e)),
                        C = t.useRef(!1),
                        P = !b || Boolean(b.closest("form")),
                        [R = !1, Q] = (0, i.T)({ prop: l, defaultProp: s, onChange: y });
                    return (0, c.jsxs)(h, {
                        scope: r,
                        checked: R,
                        disabled: v,
                        children: [
                            (0, c.jsx)(d.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": R,
                                "aria-required": f,
                                "data-state": _(R),
                                "data-disabled": v ? "" : void 0,
                                disabled: v,
                                value: p,
                                ...m,
                                ref: w,
                                onClick: (0, o.M)(e.onClick, (e) => {
                                    Q((e) => !e), P && ((C.current = e.isPropagationStopped()), C.current || e.stopPropagation());
                                }),
                            }),
                            P && (0, c.jsx)(g, { control: b, bubbles: !C.current, name: a, value: p, checked: R, required: f, disabled: v, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            m.displayName = f;
            var b = "SwitchThumb",
                k = t.forwardRef((e, n) => {
                    const { __scopeSwitch: r, ...t } = e,
                        o = y(b, r);
                    return (0, c.jsx)(d.WV.span, { "data-state": _(o.checked), "data-disabled": o.disabled ? "" : void 0, ...t, ref: n });
                });
            k.displayName = b;
            var g = (e) => {
                const { control: n, checked: r, bubbles: o = !0, ...u } = e,
                    a = t.useRef(null),
                    i = (0, l.D)(r),
                    d = (0, s.t)(n);
                return (
                    t.useEffect(() => {
                        const e = a.current,
                            n = window.HTMLInputElement.prototype,
                            t = Object.getOwnPropertyDescriptor(n, "checked").set;
                        if (i !== r && t) {
                            const n = new Event("click", { bubbles: o });
                            t.call(e, r), e.dispatchEvent(n);
                        }
                    }, [i, r, o]),
                    (0, c.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: r, ...u, tabIndex: -1, ref: a, style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function _(e) {
                return e ? "checked" : "unchecked";
            }
            var w = m,
                C = k;
        },
        890022: (e, n, r) => {
            r.d(n, { D: () => o });
            var t = r(202784);
            function o(e) {
                const n = t.useRef({ value: e, previous: e });
                return t.useMemo(() => (n.current.value !== e && ((n.current.previous = n.current.value), (n.current.value = e)), n.current.previous), [e]);
            }
        },
        840489: (e, n, r) => {
            function t(e) {
                var n,
                    r,
                    o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var u = e.length;
                        for (n = 0; n < u; n++) e[n] && (r = t(e[n])) && (o && (o += " "), (o += r));
                    } else for (r in e) e[r] && (o && (o += " "), (o += r));
                return o;
            }
            function o() {
                for (var e, n, r = 0, o = "", u = arguments.length; r < u; r++) (e = arguments[r]) && (n = t(e)) && (o && (o += " "), (o += n));
                return o;
            }
            r.d(n, { W: () => o, Z: () => u });
            const u = o;
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
                o = r(31418),
                u = r(641645);
            function c(e, n, r) {
                const c = (0, u._)(e, n) / o.vh;
                return (0, t.u)(r?.roundingMethod)(c);
            }
        },
        641645: (e, n, r) => {
            r.d(n, { _: () => o });
            var t = r(150729);
            function o(e, n) {
                return +(0, t.Q)(e) - +(0, t.Q)(n);
            }
        },
        534002: (e, n, r) => {
            r.d(n, { X: () => c });
            var t = r(787321),
                o = r(31418),
                u = r(641645);
            function c(e, n, r) {
                const c = (0, u._)(e, n) / o.yJ;
                return (0, t.u)(r?.roundingMethod)(c);
            }
        },
        624656: (e, n, r) => {
            r.d(n, { c: () => u });
            var t = r(787321),
                o = r(641645);
            function u(e, n, r) {
                const u = (0, o._)(e, n) / 1e3;
                return (0, t.u)(r?.roundingMethod)(u);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-d2eb5610.e206837a.js.map

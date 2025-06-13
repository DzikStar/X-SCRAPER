"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ReactBeautifulDnd-e96e9bea"],
    {
        391426: (t, n, e) => {
            e.r(n), e.d(n, { default: () => r });
            const r = e(240023).Z5;
        },
        797546: (t, n, e) => {
            e.r(n), e.d(n, { default: () => r });
            const r = e(240023)._l;
        },
        896830: (t, n, e) => {
            e.r(n), e.d(n, { default: () => r });
            const r = e(240023).bK;
        },
        266892: (t, n, e) => {
            e.d(n, { Dz: () => o, Oq: () => d, cv: () => f, dO: () => s, iz: () => l, jn: () => u, oc: () => p });
            var r = e(161898),
                o = function (t) {
                    var n = t.top,
                        e = t.right,
                        r = t.bottom,
                        o = t.left;
                    return { top: n, right: e, bottom: r, left: o, width: e - o, height: r - n, x: o, y: n, center: { x: (e + o) / 2, y: (r + n) / 2 } };
                },
                u = function (t, n) {
                    return { top: t.top - n.top, left: t.left - n.left, bottom: t.bottom + n.bottom, right: t.right + n.right };
                },
                i = function (t, n) {
                    return { top: t.top + n.top, left: t.left + n.left, bottom: t.bottom - n.bottom, right: t.right - n.right };
                },
                a = { top: 0, right: 0, bottom: 0, left: 0 },
                s = function (t) {
                    var n = t.borderBox,
                        e = t.margin,
                        r = void 0 === e ? a : e,
                        s = t.border,
                        c = void 0 === s ? a : s,
                        f = t.padding,
                        p = void 0 === f ? a : f,
                        d = o(u(n, r)),
                        l = o(i(n, c)),
                        v = o(i(l, p));
                    return { marginBox: d, borderBox: o(n), paddingBox: l, contentBox: v, margin: r, border: c, padding: p };
                },
                c = function (t) {
                    var n = t.slice(0, -2);
                    if ("px" !== t.slice(-2)) return 0;
                    var e = Number(n);
                    return isNaN(e) && (0, r.default)(!1), e;
                },
                f = function (t, n) {
                    var e,
                        r,
                        o = t.borderBox,
                        u = t.border,
                        i = t.margin,
                        a = t.padding,
                        c = ((r = n), { top: (e = o).top + r.y, left: e.left + r.x, bottom: e.bottom + r.y, right: e.right + r.x });
                    return s({ borderBox: c, border: u, margin: i, padding: a });
                },
                p = function (t, n) {
                    return void 0 === n && (n = { x: window.pageXOffset, y: window.pageYOffset }), f(t, n);
                },
                d = function (t, n) {
                    var e = { top: c(n.marginTop), right: c(n.marginRight), bottom: c(n.marginBottom), left: c(n.marginLeft) },
                        r = { top: c(n.paddingTop), right: c(n.paddingRight), bottom: c(n.paddingBottom), left: c(n.paddingLeft) },
                        o = { top: c(n.borderTopWidth), right: c(n.borderRightWidth), bottom: c(n.borderBottomWidth), left: c(n.borderLeftWidth) };
                    return s({ borderBox: t, margin: e, padding: r, border: o });
                },
                l = function (t) {
                    var n = t.getBoundingClientRect(),
                        e = window.getComputedStyle(t);
                    return d(n, e);
                };
        },
        536631: (t, n, e) => {
            function r(t, n) {
                if (t.length !== n.length) return !1;
                for (var e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
                return !0;
            }
            e.d(n, { Z: () => o });
            const o = function (t, n) {
                var e;
                void 0 === n && (n = r);
                var o,
                    u = [],
                    i = !1;
                return function () {
                    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                    return (i && e === this && n(r, u)) || ((o = t.apply(this, r)), (i = !0), (e = this), (u = r)), o;
                };
            };
        },
        926947: (t, n, e) => {
            e.d(n, { Z: () => r });
            const r = function (t) {
                var n = [],
                    e = null,
                    r = function () {
                        for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++) o[u] = arguments[u];
                        (n = o),
                            e ||
                                (e = requestAnimationFrame(function () {
                                    (e = null), t.apply(void 0, n);
                                }));
                    };
                return (
                    (r.cancel = function () {
                        e && (cancelAnimationFrame(e), (e = null));
                    }),
                    r
                );
            };
        },
        177953: (t, n, e) => {
            e.d(n, { zt: () => c, $j: () => F });
            var r = e(202784),
                o = r.createContext(null);
            var u = function (t) {
                    t();
                },
                i = function () {
                    return u;
                },
                a = { notify: function () {} };
            var s = (function () {
                function t(t, n) {
                    (this.store = t), (this.parentSub = n), (this.unsubscribe = null), (this.listeners = a), (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
                }
                var n = t.prototype;
                return (
                    (n.addNestedSub = function (t) {
                        return this.trySubscribe(), this.listeners.subscribe(t);
                    }),
                    (n.notifyNestedSubs = function () {
                        this.listeners.notify();
                    }),
                    (n.handleChangeWrapper = function () {
                        this.onStateChange && this.onStateChange();
                    }),
                    (n.isSubscribed = function () {
                        return Boolean(this.unsubscribe);
                    }),
                    (n.trySubscribe = function () {
                        this.unsubscribe ||
                            ((this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper)),
                            (this.listeners = (function () {
                                var t = i(),
                                    n = null,
                                    e = null;
                                return {
                                    clear: function () {
                                        (n = null), (e = null);
                                    },
                                    notify: function () {
                                        t(function () {
                                            for (var t = n; t; ) t.callback(), (t = t.next);
                                        });
                                    },
                                    get: function () {
                                        for (var t = [], e = n; e; ) t.push(e), (e = e.next);
                                        return t;
                                    },
                                    subscribe: function (t) {
                                        var r = !0,
                                            o = (e = { callback: t, next: null, prev: e });
                                        return (
                                            o.prev ? (o.prev.next = o) : (n = o),
                                            function () {
                                                r && null !== n && ((r = !1), o.next ? (o.next.prev = o.prev) : (e = o.prev), o.prev ? (o.prev.next = o.next) : (n = o.next));
                                            }
                                        );
                                    },
                                };
                            })()));
                    }),
                    (n.tryUnsubscribe = function () {
                        this.unsubscribe && (this.unsubscribe(), (this.unsubscribe = null), this.listeners.clear(), (this.listeners = a));
                    }),
                    t
                );
            })();
            const c = function (t) {
                var n = t.store,
                    e = t.context,
                    u = t.children,
                    i = (0, r.useMemo)(
                        function () {
                            var t = new s(n);
                            return (t.onStateChange = t.notifyNestedSubs), { store: n, subscription: t };
                        },
                        [n],
                    ),
                    a = (0, r.useMemo)(
                        function () {
                            return n.getState();
                        },
                        [n],
                    );
                (0, r.useEffect)(
                    function () {
                        var t = i.subscription;
                        return (
                            t.trySubscribe(),
                            a !== n.getState() && t.notifyNestedSubs(),
                            function () {
                                t.tryUnsubscribe(), (t.onStateChange = null);
                            }
                        );
                    },
                    [i, a],
                );
                var c = e || o;
                return r.createElement(c.Provider, { value: i }, u);
            };
            var f = e(807896),
                p = e(231461),
                d = e(373463),
                l = e.n(d),
                v = e(148570),
                h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect,
                m = [],
                b = [null, null];
            function g(t, n) {
                var e = t[1];
                return [n.payload, e + 1];
            }
            function y(t, n, e) {
                h(function () {
                    return t.apply(void 0, n);
                }, e);
            }
            function w(t, n, e, r, o, u, i) {
                (t.current = r), (n.current = o), (e.current = !1), u.current && ((u.current = null), i());
            }
            function P(t, n, e, r, o, u, i, a, s, c) {
                if (t) {
                    var f = !1,
                        p = null,
                        d = function () {
                            if (!f) {
                                var t,
                                    e,
                                    d = n.getState();
                                try {
                                    t = r(d, o.current);
                                } catch (t) {
                                    (e = t), (p = t);
                                }
                                e || (p = null), t === u.current ? i.current || s() : ((u.current = t), (a.current = t), (i.current = !0), c({ type: "STORE_UPDATED", payload: { error: e } }));
                            }
                        };
                    (e.onStateChange = d), e.trySubscribe(), d();
                    return function () {
                        if (((f = !0), e.tryUnsubscribe(), (e.onStateChange = null), p)) throw p;
                    };
                }
            }
            var S = function () {
                return [null, 0];
            };
            function C(t, n) {
                void 0 === n && (n = {});
                var e = n,
                    u = e.getDisplayName,
                    i =
                        void 0 === u
                            ? function (t) {
                                  return "ConnectAdvanced(" + t + ")";
                              }
                            : u,
                    a = e.methodName,
                    c = void 0 === a ? "connectAdvanced" : a,
                    d = e.renderCountProp,
                    h = void 0 === d ? void 0 : d,
                    C = e.shouldHandleStateChanges,
                    O = void 0 === C || C,
                    x = e.storeKey,
                    E = void 0 === x ? "store" : x,
                    N = (e.withRef, e.forwardRef),
                    M = void 0 !== N && N,
                    B = e.context,
                    R = void 0 === B ? o : B,
                    T = (0, p.Z)(e, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]),
                    q = R;
                return function (n) {
                    var e = n.displayName || n.name || "Component",
                        o = i(e),
                        u = (0, f.Z)({}, T, { getDisplayName: i, methodName: c, renderCountProp: h, shouldHandleStateChanges: O, storeKey: E, displayName: o, wrappedComponentName: e, WrappedComponent: n }),
                        a = T.pure;
                    var d = a
                        ? r.useMemo
                        : function (t) {
                              return t();
                          };
                    function C(e) {
                        var o = (0, r.useMemo)(
                                function () {
                                    var t = e.forwardedRef,
                                        n = (0, p.Z)(e, ["forwardedRef"]);
                                    return [e.context, t, n];
                                },
                                [e],
                            ),
                            i = o[0],
                            a = o[1],
                            c = o[2],
                            l = (0, r.useMemo)(
                                function () {
                                    return i && i.Consumer && (0, v.isContextConsumer)(r.createElement(i.Consumer, null)) ? i : q;
                                },
                                [i, q],
                            ),
                            h = (0, r.useContext)(l),
                            C = Boolean(e.store) && Boolean(e.store.getState) && Boolean(e.store.dispatch);
                        Boolean(h) && Boolean(h.store);
                        var x = C ? e.store : h.store,
                            E = (0, r.useMemo)(
                                function () {
                                    return (function (n) {
                                        return t(n.dispatch, u);
                                    })(x);
                                },
                                [x],
                            ),
                            N = (0, r.useMemo)(
                                function () {
                                    if (!O) return b;
                                    var t = new s(x, C ? null : h.subscription),
                                        n = t.notifyNestedSubs.bind(t);
                                    return [t, n];
                                },
                                [x, C, h],
                            ),
                            M = N[0],
                            B = N[1],
                            R = (0, r.useMemo)(
                                function () {
                                    return C ? h : (0, f.Z)({}, h, { subscription: M });
                                },
                                [C, h, M],
                            ),
                            T = (0, r.useReducer)(g, m, S),
                            D = T[0][0],
                            Z = T[1];
                        if (D && D.error) throw D.error;
                        var W = (0, r.useRef)(),
                            _ = (0, r.useRef)(c),
                            j = (0, r.useRef)(),
                            k = (0, r.useRef)(!1),
                            A = d(
                                function () {
                                    return j.current && c === _.current ? j.current : E(x.getState(), c);
                                },
                                [x, D, c],
                            );
                        y(w, [_, W, k, c, A, j, B]), y(P, [O, x, M, E, _, W, k, j, B, Z], [x, M, E]);
                        var F = (0, r.useMemo)(
                            function () {
                                return r.createElement(n, (0, f.Z)({}, A, { ref: a }));
                            },
                            [a, n, A],
                        );
                        return (0, r.useMemo)(
                            function () {
                                return O ? r.createElement(l.Provider, { value: R }, F) : F;
                            },
                            [l, F, R],
                        );
                    }
                    var x = a ? r.memo(C) : C;
                    if (((x.WrappedComponent = n), (x.displayName = o), M)) {
                        var N = r.forwardRef(function (t, n) {
                            return r.createElement(x, (0, f.Z)({}, t, { forwardedRef: n }));
                        });
                        return (N.displayName = o), (N.WrappedComponent = n), l()(N, n);
                    }
                    return l()(x, n);
                };
            }
            function O(t, n) {
                return t === n ? 0 !== t || 0 !== n || 1 / t == 1 / n : t != t && n != n;
            }
            function x(t, n) {
                if (O(t, n)) return !0;
                if ("object" != typeof t || null === t || "object" != typeof n || null === n) return !1;
                var e = Object.keys(t),
                    r = Object.keys(n);
                if (e.length !== r.length) return !1;
                for (var o = 0; o < e.length; o++) if (!Object.prototype.hasOwnProperty.call(n, e[o]) || !O(t[e[o]], n[e[o]])) return !1;
                return !0;
            }
            var E = e(118717);
            function N(t) {
                return function (n, e) {
                    var r = t(n, e);
                    function o() {
                        return r;
                    }
                    return (o.dependsOnOwnProps = !1), o;
                };
            }
            function M(t) {
                return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length;
            }
            function B(t, n) {
                return function (n, e) {
                    e.displayName;
                    var r = function (t, n) {
                        return r.dependsOnOwnProps ? r.mapToProps(t, n) : r.mapToProps(t);
                    };
                    return (
                        (r.dependsOnOwnProps = !0),
                        (r.mapToProps = function (n, e) {
                            (r.mapToProps = t), (r.dependsOnOwnProps = M(t));
                            var o = r(n, e);
                            return "function" == typeof o && ((r.mapToProps = o), (r.dependsOnOwnProps = M(o)), (o = r(n, e))), o;
                        }),
                        r
                    );
                };
            }
            const R = [
                function (t) {
                    return "function" == typeof t ? B(t) : void 0;
                },
                function (t) {
                    return t
                        ? void 0
                        : N(function (t) {
                              return { dispatch: t };
                          });
                },
                function (t) {
                    return t && "object" == typeof t
                        ? N(function (n) {
                              return (0, E.DE)(t, n);
                          })
                        : void 0;
                },
            ];
            const T = [
                function (t) {
                    return "function" == typeof t ? B(t) : void 0;
                },
                function (t) {
                    return t
                        ? void 0
                        : N(function () {
                              return {};
                          });
                },
            ];
            function q(t, n, e) {
                return (0, f.Z)({}, e, {}, t, {}, n);
            }
            const D = [
                function (t) {
                    return "function" == typeof t
                        ? (function (t) {
                              return function (n, e) {
                                  e.displayName;
                                  var r,
                                      o = e.pure,
                                      u = e.areMergedPropsEqual,
                                      i = !1;
                                  return function (n, e, a) {
                                      var s = t(n, e, a);
                                      return i ? (o && u(s, r)) || (r = s) : ((i = !0), (r = s)), r;
                                  };
                              };
                          })(t)
                        : void 0;
                },
                function (t) {
                    return t
                        ? void 0
                        : function () {
                              return q;
                          };
                },
            ];
            function Z(t, n, e, r) {
                return function (o, u) {
                    return e(t(o, u), n(r, u), u);
                };
            }
            function W(t, n, e, r, o) {
                var u,
                    i,
                    a,
                    s,
                    c,
                    f = o.areStatesEqual,
                    p = o.areOwnPropsEqual,
                    d = o.areStatePropsEqual,
                    l = !1;
                function v(o, l) {
                    var v,
                        h,
                        m = !p(l, i),
                        b = !f(o, u);
                    return (u = o), (i = l), m && b ? ((a = t(u, i)), n.dependsOnOwnProps && (s = n(r, i)), (c = e(a, s, i))) : m ? (t.dependsOnOwnProps && (a = t(u, i)), n.dependsOnOwnProps && (s = n(r, i)), (c = e(a, s, i))) : b ? ((v = t(u, i)), (h = !d(v, a)), (a = v), h && (c = e(a, s, i)), c) : c;
                }
                return function (o, f) {
                    return l ? v(o, f) : ((a = t((u = o), (i = f))), (s = n(r, i)), (c = e(a, s, i)), (l = !0), c);
                };
            }
            function _(t, n) {
                var e = n.initMapStateToProps,
                    r = n.initMapDispatchToProps,
                    o = n.initMergeProps,
                    u = (0, p.Z)(n, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
                    i = e(t, u),
                    a = r(t, u),
                    s = o(t, u);
                return (u.pure ? W : Z)(i, a, s, t, u);
            }
            function j(t, n, e) {
                for (var r = n.length - 1; r >= 0; r--) {
                    var o = n[r](t);
                    if (o) return o;
                }
                return function (n, r) {
                    throw new Error("Invalid value of type " + typeof t + " for " + e + " argument when connecting component " + r.wrappedComponentName + ".");
                };
            }
            function k(t, n) {
                return t === n;
            }
            function A(t) {
                var n = void 0 === t ? {} : t,
                    e = n.connectHOC,
                    r = void 0 === e ? C : e,
                    o = n.mapStateToPropsFactories,
                    u = void 0 === o ? T : o,
                    i = n.mapDispatchToPropsFactories,
                    a = void 0 === i ? R : i,
                    s = n.mergePropsFactories,
                    c = void 0 === s ? D : s,
                    d = n.selectorFactory,
                    l = void 0 === d ? _ : d;
                return function (t, n, e, o) {
                    void 0 === o && (o = {});
                    var i = o,
                        s = i.pure,
                        d = void 0 === s || s,
                        v = i.areStatesEqual,
                        h = void 0 === v ? k : v,
                        m = i.areOwnPropsEqual,
                        b = void 0 === m ? x : m,
                        g = i.areStatePropsEqual,
                        y = void 0 === g ? x : g,
                        w = i.areMergedPropsEqual,
                        P = void 0 === w ? x : w,
                        S = (0, p.Z)(i, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                        C = j(t, u, "mapStateToProps"),
                        O = j(n, a, "mapDispatchToProps"),
                        E = j(e, c, "mergeProps");
                    return r(
                        l,
                        (0, f.Z)(
                            {
                                methodName: "connect",
                                getDisplayName: function (t) {
                                    return "Connect(" + t + ")";
                                },
                                shouldHandleStateChanges: Boolean(t),
                                initMapStateToProps: C,
                                initMapDispatchToProps: O,
                                initMergeProps: E,
                                pure: d,
                                areStatesEqual: h,
                                areOwnPropsEqual: b,
                                areStatePropsEqual: y,
                                areMergedPropsEqual: P,
                            },
                            S,
                        ),
                    );
                };
            }
            const F = A();
            var H,
                U = e(928316);
            (H = U.unstable_batchedUpdates), (u = H);
        },
        931118: (t, n, e) => {
            e.d(n, { I4: () => i, Ye: () => u });
            var r = e(202784);
            function o(t, n) {
                var e = (0, r.useState)(function () {
                        return { inputs: n, result: t() };
                    })[0],
                    o = (0, r.useRef)(e),
                    u = Boolean(
                        n &&
                            o.current.inputs &&
                            (function (t, n) {
                                if (t.length !== n.length) return !1;
                                for (var e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
                                return !0;
                            })(n, o.current.inputs),
                    )
                        ? o.current
                        : { inputs: n, result: t() };
                return (
                    (0, r.useEffect)(
                        function () {
                            o.current = u;
                        },
                        [u],
                    ),
                    u.result
                );
            }
            var u = o,
                i = function (t, n) {
                    return o(function () {
                        return t;
                    }, n);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ReactBeautifulDnd-e96e9bea.4862ea7a.js.map

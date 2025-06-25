window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-821262ff"],
        {
            978989: (e, t, n) => {
                n.d(t, { zt: () => W, $j: () => I, I0: () => X, v9: () => w, oR: () => A });
                var r = n(743100),
                    o = n(341110),
                    u = n(471679),
                    s = n(209256),
                    c = n(202784);
                const a = Symbol.for("react-redux-context"),
                    i = "undefined" != typeof globalThis ? globalThis : {};
                function p() {
                    var e;
                    if (!c.createContext) return {};
                    const t = null != (e = i[a]) ? e : (i[a] = new Map());
                    let n = t.get(c.createContext);
                    return n || ((n = c.createContext(null)), t.set(c.createContext, n)), n;
                }
                const l = p();
                function f(e = l) {
                    return function () {
                        return (0, c.useContext)(e);
                    };
                }
                const d = f();
                var m = n(876726);
                let S = m.B;
                const P = (e, t) => e === t;
                function h(e = l) {
                    const t = e === l ? d : f(e);
                    return function (e, n = {}) {
                        const { equalityFn: r = P, stabilityCheck: o, noopCheck: u } = "function" == typeof n ? { equalityFn: n } : n;
                        const { store: s, subscription: a, getServerState: i, stabilityCheck: p, noopCheck: l } = t(),
                            f = ((0, c.useRef)(!0), (0, c.useCallback)({ [e.name]: (t) => e(t) }[e.name], [e, p, o])),
                            d = S(a.addNestedSub, s.getState, i || s.getState, f, r);
                        return (0, c.useDebugValue)(d), d;
                    };
                }
                const w = h();
                var y = n(807896),
                    C = n(231461),
                    b = n(373463),
                    g = n.n(b),
                    v = n(372973);
                const O = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
                function M(e, t, n, r, { areStatesEqual: o, areOwnPropsEqual: u, areStatePropsEqual: s }) {
                    let c,
                        a,
                        i,
                        p,
                        l,
                        f = !1;
                    function d(f, d) {
                        const m = !u(d, a),
                            S = !o(f, c, d, a);
                        return (
                            (c = f),
                            (a = d),
                            m && S
                                ? ((i = e(c, a)), t.dependsOnOwnProps && (p = t(r, a)), (l = n(i, p, a)), l)
                                : m
                                  ? (e.dependsOnOwnProps && (i = e(c, a)), t.dependsOnOwnProps && (p = t(r, a)), (l = n(i, p, a)), l)
                                  : S
                                    ? (function () {
                                          const t = e(c, a),
                                              r = !s(t, i);
                                          return (i = t), r && (l = n(i, p, a)), l;
                                      })()
                                    : l
                        );
                    }
                    return function (o, u) {
                        return f ? d(o, u) : ((c = o), (a = u), (i = e(c, a)), (p = t(r, a)), (l = n(i, p, a)), (f = !0), l);
                    };
                }
                var E = n(463480);
                function R(e) {
                    return function (t) {
                        const n = e(t);
                        function r() {
                            return n;
                        }
                        return (r.dependsOnOwnProps = !1), r;
                    };
                }
                function T(e) {
                    return e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
                }
                function x(e, t) {
                    return function (t, { displayName: n }) {
                        const r = function (e, t) {
                            return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e, void 0);
                        };
                        return (
                            (r.dependsOnOwnProps = !0),
                            (r.mapToProps = function (t, n) {
                                (r.mapToProps = e), (r.dependsOnOwnProps = T(e));
                                let o = r(t, n);
                                return "function" == typeof o && ((r.mapToProps = o), (r.dependsOnOwnProps = T(o)), (o = r(t, n))), o;
                            }),
                            r
                        );
                    };
                }
                function _(e, t) {
                    return (n, r) => {
                        throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
                    };
                }
                function k(e, t, n) {
                    return (0, y.Z)({}, n, e, t);
                }
                var q = n(286496),
                    N = n(501881),
                    Z = n(235067);
                const B = ["reactReduxForwardedRef"];
                let D = m.B;
                const F = [null, null];
                function L(e, t, n, r, o, u) {
                    (e.current = r), (n.current = !1), o.current && ((o.current = null), u());
                }
                function $(e, t) {
                    return e === t;
                }
                const I = function (e, t, n, { pure: r, areStatesEqual: o = $, areOwnPropsEqual: u = Z.Z, areStatePropsEqual: s = Z.Z, areMergedPropsEqual: a = Z.Z, forwardRef: i = !1, context: p = l } = {}) {
                    const f = p,
                        d = (function (e) {
                            return e ? ("function" == typeof e ? x(e) : _(e, "mapStateToProps")) : R(() => ({}));
                        })(e),
                        m = (function (e) {
                            return e && "object" == typeof e ? R((t) => (0, E.Z)(e, t)) : e ? ("function" == typeof e ? x(e) : _(e, "mapDispatchToProps")) : R((e) => ({ dispatch: e }));
                        })(t),
                        S = (function (e) {
                            return e
                                ? "function" == typeof e
                                    ? (function (e) {
                                          return function (t, { displayName: n, areMergedPropsEqual: r }) {
                                              let o,
                                                  u = !1;
                                              return function (t, n, s) {
                                                  const c = e(t, n, s);
                                                  return u ? r(c, o) || (o = c) : ((u = !0), (o = c)), o;
                                              };
                                          };
                                      })(e)
                                    : _(e, "mergeProps")
                                : () => k;
                        })(n),
                        P = Boolean(e);
                    return (e) => {
                        const t = e.displayName || e.name || "Component",
                            n = `Connect(${t})`,
                            r = { shouldHandleStateChanges: P, displayName: n, wrappedComponentName: t, WrappedComponent: e, initMapStateToProps: d, initMapDispatchToProps: m, initMergeProps: S, areStatesEqual: o, areStatePropsEqual: s, areOwnPropsEqual: u, areMergedPropsEqual: a };
                        function p(t) {
                            const [n, o, u] = c.useMemo(() => {
                                    const { reactReduxForwardedRef: e } = t,
                                        n = (0, C.Z)(t, B);
                                    return [t.context, e, n];
                                }, [t]),
                                s = c.useMemo(() => (n && n.Consumer && (0, v.isContextConsumer)(c.createElement(n.Consumer, null)) ? n : f), [n, f]),
                                a = c.useContext(s),
                                i = Boolean(t.store) && Boolean(t.store.getState) && Boolean(t.store.dispatch),
                                p = Boolean(a) && Boolean(a.store);
                            const l = i ? t.store : a.store,
                                d = p ? a.getServerState : l.getState,
                                m = c.useMemo(
                                    () =>
                                        (function (e, t) {
                                            let { initMapStateToProps: n, initMapDispatchToProps: r, initMergeProps: o } = t,
                                                u = (0, C.Z)(t, O);
                                            return M(n(e, u), r(e, u), o(e, u), e, u);
                                        })(l.dispatch, r),
                                    [l],
                                ),
                                [S, h] = c.useMemo(() => {
                                    if (!P) return F;
                                    const e = (0, q.X)(l, i ? void 0 : a.subscription),
                                        t = e.notifyNestedSubs.bind(e);
                                    return [e, t];
                                }, [l, i, a]),
                                w = c.useMemo(() => (i ? a : (0, y.Z)({}, a, { subscription: S })), [i, a, S]),
                                b = c.useRef(),
                                g = c.useRef(u),
                                E = c.useRef(),
                                R = c.useRef(!1),
                                T = (c.useRef(!1), c.useRef(!1)),
                                x = c.useRef();
                            (0, N.L)(
                                () => (
                                    (T.current = !0),
                                    () => {
                                        T.current = !1;
                                    }
                                ),
                                [],
                            );
                            const _ = c.useMemo(() => () => (E.current && u === g.current ? E.current : m(l.getState(), u)), [l, u]),
                                k = c.useMemo(
                                    () => (e) =>
                                        S
                                            ? (function (e, t, n, r, o, u, s, c, a, i, p) {
                                                  if (!e) return () => {};
                                                  let l = !1,
                                                      f = null;
                                                  const d = () => {
                                                      if (l || !c.current) return;
                                                      const e = t.getState();
                                                      let n, d;
                                                      try {
                                                          n = r(e, o.current);
                                                      } catch (e) {
                                                          (d = e), (f = e);
                                                      }
                                                      d || (f = null), n === u.current ? s.current || i() : ((u.current = n), (a.current = n), (s.current = !0), p());
                                                  };
                                                  return (
                                                      (n.onStateChange = d),
                                                      n.trySubscribe(),
                                                      d(),
                                                      () => {
                                                          if (((l = !0), n.tryUnsubscribe(), (n.onStateChange = null), f)) throw f;
                                                      }
                                                  );
                                              })(P, l, S, m, g, b, R, T, E, h, e)
                                            : () => {},
                                    [S],
                                );
                            var Z, $, I;
                            let W;
                            (Z = L), ($ = [g, b, R, u, E, h]), (0, N.L)(() => Z(...$), I);
                            try {
                                W = D(k, _, d ? () => m(d(), u) : _);
                            } catch (e) {
                                throw (x.current && (e.message += `\nThe error may be correlated with this previous error:\n${x.current.stack}\n\n`), e);
                            }
                            (0, N.L)(() => {
                                (x.current = void 0), (E.current = void 0), (b.current = W);
                            });
                            const j = c.useMemo(() => c.createElement(e, (0, y.Z)({}, W, { ref: o })), [o, e, W]);
                            return c.useMemo(() => (P ? c.createElement(s.Provider, { value: w }, j) : j), [s, j, w]);
                        }
                        const l = c.memo(p);
                        if (((l.WrappedComponent = e), (l.displayName = p.displayName = n), i)) {
                            const t = c.forwardRef(function (e, t) {
                                return c.createElement(l, (0, y.Z)({}, e, { reactReduxForwardedRef: t }));
                            });
                            return (t.displayName = n), (t.WrappedComponent = e), g()(t, e);
                        }
                        return g()(l, e);
                    };
                };
                const W = function ({ store: e, context: t, children: n, serverState: r, stabilityCheck: o = "once", noopCheck: u = "once" }) {
                    const s = c.useMemo(() => {
                            const t = (0, q.X)(e);
                            return { store: e, subscription: t, getServerState: r ? () => r : void 0, stabilityCheck: o, noopCheck: u };
                        }, [e, r, o, u]),
                        a = c.useMemo(() => e.getState(), [e]);
                    (0, N.L)(() => {
                        const { subscription: t } = s;
                        return (
                            (t.onStateChange = t.notifyNestedSubs),
                            t.trySubscribe(),
                            a !== e.getState() && t.notifyNestedSubs(),
                            () => {
                                t.tryUnsubscribe(), (t.onStateChange = void 0);
                            }
                        );
                    }, [s, a]);
                    const i = t || l;
                    return c.createElement(i.Provider, { value: s }, n);
                };
                function j(e = l) {
                    const t = e === l ? d : f(e);
                    return function () {
                        const { store: e } = t();
                        return e;
                    };
                }
                const A = j();
                function U(e = l) {
                    const t = e === l ? A : j(e);
                    return function () {
                        return t().dispatch;
                    };
                }
                const X = U();
                var z;
                (z = o.useSyncExternalStoreWithSelector),
                    (S = z),
                    ((e) => {
                        D = e;
                    })(r.useSyncExternalStore),
                    (0, s.F)(u.m);
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-821262ff.fc6cf03a.js.map

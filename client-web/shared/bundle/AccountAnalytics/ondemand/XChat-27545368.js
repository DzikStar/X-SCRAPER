"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-27545368"],
    {
        958682: (e, t, n) => {
            n.d(t, { x: () => c });
            var r = n(812238),
                o = n(223717),
                u = n(202784);
            const s = 0,
                i = 100,
                l = 1;
            function c(e) {
                const { isDisabled: t = !1, minValue: n = s, maxValue: c = i, numberFormatter: d, step: m = l, orientation: v = "horizontal" } = e;
                let p = (0, u.useMemo)(() => {
                        let e = (c - n) / 10;
                        return (e = (0, r.N4)(e, 0, e + m, m)), Math.max(e, m);
                    }, [m, c, n]),
                    b = (0, u.useCallback)(
                        (e) =>
                            null == e
                                ? void 0
                                : e.map((t, o) => {
                                      let u = 0 === o ? n : t[o - 1],
                                          s = o === e.length - 1 ? c : t[o + 1];
                                      return (0, r.N4)(t, u, s, m);
                                  }),
                        [n, c, m],
                    ),
                    g = (0, u.useMemo)(() => b(f(e.value)), [e.value]),
                    y = (0, u.useMemo)(() => {
                        var t;
                        return b(null !== (t = f(e.defaultValue)) && void 0 !== t ? t : [n]);
                    }, [e.defaultValue, n]),
                    w = h(e.value, e.defaultValue, e.onChange),
                    M = h(e.value, e.defaultValue, e.onChangeEnd);
                const [T, E] = (0, o.z)(g, y, w),
                    [L, k] = (0, u.useState)(new Array(T.length).fill(!1)),
                    R = (0, u.useRef)(new Array(T.length).fill(!0)),
                    [x, N] = (0, u.useState)(void 0),
                    S = (0, u.useRef)(T),
                    V = (0, u.useRef)(L);
                function C(e) {
                    return (e - n) / (c - n);
                }
                function A(e) {
                    return 0 === e ? n : T[e - 1];
                }
                function z(e) {
                    return e === T.length - 1 ? c : T[e + 1];
                }
                function O(e) {
                    return R.current[e];
                }
                function P(e, n) {
                    if (t || !O(e)) return;
                    const o = A(e),
                        u = z(e);
                    (n = (0, r.N4)(n, o, u, m)),
                        ((e) => {
                            (S.current = e), E(e);
                        })(a(S.current, e, n));
                }
                function _(e) {
                    return d.format(e);
                }
                function D(e) {
                    const t = e * (c - n) + n;
                    return (0, r.uZ)(
                        (function (e) {
                            return Math.round((e - n) / m) * m + n;
                        })(t),
                        n,
                        c,
                    );
                }
                return {
                    values: T,
                    getThumbValue: (e) => T[e],
                    setThumbValue: P,
                    setThumbPercent: function (e, t) {
                        P(e, D(t));
                    },
                    isThumbDragging: (e) => L[e],
                    setThumbDragging: function (e, n) {
                        if (t || !O(e)) return;
                        n && (S.current = T);
                        const r = V.current[e];
                        var o;
                        (V.current = a(V.current, e, n)), (o = V.current), (V.current = o), k(o), M && r && !V.current.some(Boolean) && M(S.current);
                    },
                    focusedThumb: x,
                    setFocusedThumb: N,
                    getThumbPercent: (e) => C(T[e]),
                    getValuePercent: C,
                    getThumbValueLabel: (e) => _(T[e]),
                    getFormattedValue: _,
                    getThumbMinValue: A,
                    getThumbMaxValue: z,
                    getPercentValue: D,
                    isThumbEditable: O,
                    setThumbEditable: function (e, t) {
                        R.current[e] = t;
                    },
                    incrementThumb: function (e, t = 1) {
                        let o = Math.max(t, m);
                        P(e, (0, r.N4)(T[e] + o, n, c, m));
                    },
                    decrementThumb: function (e, t = 1) {
                        let o = Math.max(t, m);
                        P(e, (0, r.N4)(T[e] - o, n, c, m));
                    },
                    step: m,
                    pageSize: p,
                    orientation: v,
                    isDisabled: t,
                };
            }
            function a(e, t, n) {
                return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
            }
            function f(e) {
                if (null != e) return Array.isArray(e) ? e : [e];
            }
            function h(e, t, n) {
                return (r) => {
                    "number" == typeof e || "number" == typeof t ? null == n || n(r[0]) : null == n || n(r);
                };
            }
        },
        812238: (e, t, n) => {
            function r(e, t = -1 / 0, n = 1 / 0) {
                return Math.min(Math.max(e, t), n);
            }
            function o(e, t) {
                let n = e,
                    r = t.toString(),
                    o = r.indexOf("."),
                    u = o >= 0 ? r.length - o : 0;
                if (u > 0) {
                    let e = Math.pow(10, u);
                    n = Math.round(n * e) / e;
                }
                return n;
            }
            function u(e, t, n, r) {
                (t = Number(t)), (n = Number(n));
                let u = (e - (isNaN(t) ? 0 : t)) % r,
                    s = o(2 * Math.abs(u) >= r ? e + Math.sign(u) * (r - Math.abs(u)) : e - u, r);
                return isNaN(t) ? !isNaN(n) && s > n && (s = Math.floor(o(n / r, r)) * r) : s < t ? (s = t) : !isNaN(n) && s > n && (s = t + Math.floor(o((n - t) / r, r)) * r), (s = o(s, r)), s;
            }
            n.d(t, { N4: () => u, uZ: () => r });
        },
        223717: (e, t, n) => {
            n.d(t, { z: () => o });
            var r = n(202784);
            function o(e, t, n) {
                let [o, u] = (0, r.useState)(e || t),
                    s = (0, r.useRef)(void 0 !== e),
                    i = void 0 !== e;
                (0, r.useEffect)(() => {
                    s.current;
                    s.current = i;
                }, [i]);
                let l = i ? e : o,
                    c = (0, r.useCallback)(
                        (e, ...t) => {
                            let r = (e, ...t) => {
                                n && (Object.is(l, e) || n(e, ...t)), i || (l = e);
                            };
                            if ("function" == typeof e) {
                                u((n, ...o) => {
                                    let u = e(i ? l : n, ...o);
                                    return r(u, ...t), i ? n : u;
                                });
                            } else i || u(e), r(e, ...t);
                        },
                        [i, l, n],
                    );
                return [l, c];
            }
        },
        801074: (e, t, n) => {
            n.d(t, { dM: () => Z });
            var r = n(552322),
                o = n(202784),
                u = n(928316);
            const s = null,
                { min: i, max: l, abs: c, floor: a } = Math,
                f = (e, t, n) => i(n, l(t, e)),
                h = (e) => [...e].sort((e, t) => e - t),
                d =
                    "function" == typeof queueMicrotask
                        ? queueMicrotask
                        : (e) => {
                              Promise.resolve().then(e);
                          },
                m = (e) => {
                    let t, n;
                    return () => (t || ((t = !0), (n = e())), n);
                },
                v = -1,
                p = (e, t, n) => {
                    const r = n ? "unshift" : "push";
                    for (let n = 0; n < t; n++) e[r](v);
                    return e;
                },
                b = (e, t) => {
                    const n = e.t[t];
                    return n === v ? e.o : n;
                },
                g = (e, t, n) => {
                    const r = e.t[t] === v;
                    return (e.t[t] = n), (e.i = i(t, e.i)), r;
                },
                y = (e, t) => {
                    if (!e.l) return 0;
                    if (e.i >= t) return e.u[t];
                    e.i < 0 && ((e.u[0] = 0), (e.i = 0));
                    let n = e.i,
                        r = e.u[n];
                    for (; n < t; ) (r += b(e, n)), (e.u[++n] = r);
                    return (e.i = t), r;
                },
                w = (e, t, n = 0, r = e.l - 1) => {
                    for (; n <= r; ) {
                        const o = a((n + r) / 2),
                            u = y(e, o);
                        if (u <= t) {
                            if (u + b(e, o) > t) return o;
                            n = o + 1;
                        } else r = o - 1;
                    }
                    return f(n, 0, e.l - 1);
                },
                M = (e, t, n) => {
                    const r = t - e.l;
                    return (e.i = n ? -1 : i(t - 1, e.i)), (e.l = t), r > 0 ? (p(e.u, r), p(e.t, r, n), e.o * r) : (e.u.splice(r), (n ? e.t.splice(0, -r) : e.t.splice(r)).reduce((t, n) => t - (n === v ? e.o : n), 0));
                },
                T = "undefined" != typeof window,
                E = () => document.documentElement,
                L = (e) => e.ownerDocument,
                k = (e) => e.defaultView,
                R = m(() => !!T && "rtl" === getComputedStyle(E()).direction),
                x = m(() => /iP(hone|od|ad)/.test(navigator.userAgent)),
                N = m(() => "scrollBehavior" in E().style),
                S = (e) => l(e.h(), e.p()),
                V = (e) => !!e.p(),
                C = (e, t = 40, n = 4, r = 0, o, u = !1) => {
                    let a = !!r,
                        f = [],
                        d = 0,
                        m = 0,
                        T = 0,
                        E = 0,
                        L = 0,
                        k = 0,
                        R = 0,
                        N = 0,
                        S = 0,
                        V = a ? [0, l(r - 1, 0)] : s,
                        C = [0, 0],
                        A = 0;
                    const z = ((e, t, n) => ({ o: n ? n[1] : t, t: n && n[0] ? p(n[0].slice(0, i(e, n[0].length)), l(0, e - n[0].length)) : p([], e), l: e, i: -1, u: p([], e) }))(e, t, o),
                        O = new Set(),
                        P = () => T - m,
                        _ = () => P() + k + L,
                        D = (e) =>
                            ((e, t, n, r) => {
                                if (((r = i(r, e.l - 1)), y(e, r) <= t)) {
                                    const o = w(e, t + n, r);
                                    return [w(e, t, r, o), o];
                                }
                                {
                                    const o = w(e, t, void 0, r);
                                    return [o, w(e, t + n, o)];
                                }
                            })(z, e, d, C[0]),
                        I = () => ((e) => (e.l ? y(e, e.l - 1) + b(e, e.l - 1) : 0))(z),
                        j = (e) => y(z, e) - k,
                        F = (e) => b(z, e),
                        Y = (e) => {
                            e && (x() && 0 !== N ? (k += e) : ((L += e), E++));
                        };
                    return {
                        v: () => f,
                        _: () => ((e) => [e.t.slice(), e.o])(z),
                        m: () => {
                            if (R) return C;
                            let [e, t] = D(l(0, _()));
                            return V && ((e = i(e, V[0])), (t = l(t, V[1]))), 1 !== N && (e -= l(0, n)), 2 !== N && (t += l(0, n)), (C = [l(e, 0), i(t, z.l - 1)]);
                        },
                        $: () => w(z, _()),
                        S: () => w(z, _() + d),
                        I: (e) => z.t[e] === v,
                        k: () => !!V && z.t.slice(l(0, V[0] - 1), i(z.l - 1, V[1] + 1) + 1).includes(v),
                        T: j,
                        R: F,
                        M: () => z.l,
                        C: () => T,
                        H: () => 0 !== N,
                        p: () => d,
                        W: () => m,
                        h: I,
                        J: () => E,
                        B: () => ((R = L), (L = 0), [R, 2 === S || P() + d >= I()]),
                        O: (e, t) => {
                            const n = [e, t];
                            return (
                                O.add(n),
                                () => {
                                    O.delete(n);
                                }
                            );
                        },
                        L: (e, t) => {
                            let n,
                                r,
                                o = 0;
                            switch (e) {
                                case 1: {
                                    const e = R;
                                    R = 0;
                                    const n = t - T,
                                        u = c(n);
                                    (e && u < c(e) + 1) || 0 !== S || (N = n < 0 ? 2 : 1), a && ((V = s), (a = !1)), (T = t), (o = 4);
                                    const i = P();
                                    i >= -d && i <= I() && ((o += 1), (r = u > d));
                                    break;
                                }
                                case 2:
                                    (o = 8), 0 !== N && ((n = !0), (o += 1)), (N = 0), (S = 0), (V = s);
                                    break;
                                case 3: {
                                    const e = t.filter(([e, t]) => z.t[e] !== t);
                                    if (!e.length) break;
                                    Y(e.reduce((e, [t, n]) => ((2 === S || (V ? !a && t < V[0] : j(t) + (0 === N && 0 === S ? F(t) : 0) < P())) && (e += n - F(t)), e), 0));
                                    for (const [t, n] of e) {
                                        const e = F(t),
                                            r = g(z, t, n);
                                        u && (A += r ? n : n - e);
                                    }
                                    u &&
                                        d &&
                                        A > d &&
                                        (Y(
                                            ((e, t) => {
                                                let n = 0;
                                                const r = [];
                                                e.t.forEach((e, o) => {
                                                    e !== v && (r.push(e), o < t && n++);
                                                }),
                                                    (e.i = -1);
                                                const o = h(r),
                                                    u = o.length,
                                                    s = (u / 2) | 0,
                                                    i = u % 2 == 0 ? (o[s - 1] + o[s]) / 2 : o[s],
                                                    c = e.o;
                                                return ((e.o = i) - c) * l(t - n, 0);
                                            })(z, w(z, _())),
                                        ),
                                        (u = !1)),
                                        (o = 3),
                                        (r = !0);
                                    break;
                                }
                                case 4:
                                    d !== t && ((d = t), (o = 3));
                                    break;
                                case 5:
                                    t[1] ? (Y(M(z, t[0], !0)), (S = 2), (o = 1)) : (M(z, t[0]), (o = 1));
                                    break;
                                case 6:
                                    m = t;
                                    break;
                                case 7:
                                    S = 1;
                                    break;
                                case 8:
                                    (V = D(t)), (o = 1);
                            }
                            o &&
                                ((f = []),
                                n && k && ((L += k), (k = 0), E++),
                                O.forEach(([e, t]) => {
                                    o & e && t(r);
                                }));
                        },
                    };
                },
                A = setTimeout,
                z = (e, t) => (t && R() ? -e : e),
                O = (e, t, n, r, o, u) => {
                    const i = Date.now;
                    let l = 0,
                        c = !1,
                        a = !1,
                        f = !1,
                        h = !1;
                    const d = (() => {
                            let t;
                            const n = () => {
                                    t != s && clearTimeout(t);
                                },
                                r = () => {
                                    n(),
                                        (t = A(() => {
                                            (t = s),
                                                (() => {
                                                    if (c || a) return (c = !1), void d();
                                                    (f = !1), e.L(2);
                                                })();
                                        }, 150));
                                };
                            return (r.P = n), r;
                        })(),
                        m = () => {
                            (l = i()), f && (h = !0), u && e.L(6, u()), e.L(1, r()), d();
                        },
                        v = (t) => {
                            if (c || !e.H() || t.ctrlKey) return;
                            const r = i() - l;
                            150 > r && 50 < r && (n ? t.deltaX : t.deltaY) && (c = !0);
                        },
                        p = () => {
                            (a = !0), (f = h = !1);
                        },
                        b = () => {
                            (a = !1), x() && (f = !0);
                        };
                    return (
                        t.addEventListener("scroll", m),
                        t.addEventListener("wheel", v, { passive: !0 }),
                        t.addEventListener("touchstart", p, { passive: !0 }),
                        t.addEventListener("touchend", b, { passive: !0 }),
                        {
                            A: () => {
                                t.removeEventListener("scroll", m), t.removeEventListener("wheel", v), t.removeEventListener("touchstart", p), t.removeEventListener("touchend", b), d.P();
                            },
                            V: () => {
                                const [t, u] = e.B();
                                t && (o(z(t, n), u, h), (h = !1), u && e.p() > e.h() && e.L(1, r()));
                            },
                        }
                    );
                },
                P = (e, t) => {
                    let n, r, o;
                    const u = t ? "scrollLeft" : "scrollTop",
                        s = t ? "overflowX" : "overflowY",
                        i = async (r, s) => {
                            if (!n) return void d(() => i(r, s));
                            o && o();
                            const l = () => {
                                let t;
                                return [
                                    new Promise((n, r) => {
                                        (t = n), (o = r), V(e) && A(r, 150);
                                    }),
                                    e.O(2, () => {
                                        t && t();
                                    }),
                                ];
                            };
                            if (s && N()) {
                                for (; e.L(8, r()), e.k(); ) {
                                    const [e, t] = l();
                                    try {
                                        await e;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        t();
                                    }
                                }
                                n.scrollTo({ [t ? "left" : "top"]: z(r(), t), behavior: "smooth" });
                            } else
                                for (;;) {
                                    const [o, s] = l();
                                    try {
                                        (n[u] = z(r(), t)), e.L(7), await o;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        s();
                                    }
                                }
                        };
                    return {
                        X(i) {
                            (n = i),
                                (r = O(
                                    e,
                                    i,
                                    t,
                                    () => z(i[u], t),
                                    (t, n, r) => {
                                        if (r) {
                                            const e = i.style,
                                                t = e[s];
                                            (e[s] = "hidden"),
                                                A(() => {
                                                    e[s] = t;
                                                });
                                        }
                                        n ? ((i[u] = e.C() + t), o && o()) : (i[u] += t);
                                    },
                                ));
                        },
                        Y() {
                            r && r.A();
                        },
                        j(e) {
                            i(() => e);
                        },
                        q(t) {
                            (t += e.C()), i(() => t);
                        },
                        D(t, { align: n, smooth: r, offset: o = 0 } = {}) {
                            if (((t = f(t, 0, e.M() - 1)), "nearest" === n)) {
                                const r = e.T(t),
                                    o = e.C();
                                if (r < o) n = "start";
                                else {
                                    if (!(r + e.R(t) > o + e.p())) return;
                                    n = "end";
                                }
                            }
                            i(() => o + e.W() + e.T(t) + ("end" === n ? e.R(t) - e.p() : "center" === n ? (e.R(t) - e.p()) / 2 : 0), r);
                        },
                        U: () => {
                            r && r.V();
                        },
                    };
                },
                _ = (e) => {
                    let t;
                    return {
                        F(n) {
                            (t || (t = new (k(L(n)).ResizeObserver)(e))).observe(n);
                        },
                        G(e) {
                            t.unobserve(e);
                        },
                        A() {
                            t && t.disconnect();
                        },
                    };
                },
                D = (e, t) => {
                    let n;
                    const r = t ? "width" : "height",
                        o = new WeakMap(),
                        u = _((t) => {
                            const u = [];
                            for (const { target: i, contentRect: l } of t)
                                if (i.offsetParent)
                                    if (i === n) e.L(4, l[r]);
                                    else {
                                        const e = o.get(i);
                                        e != s && u.push([e, l[r]]);
                                    }
                            u.length && e.L(3, u);
                        });
                    return {
                        K(e) {
                            u.F((n = e));
                        },
                        N: (e, t) => (
                            o.set(e, t),
                            u.F(e),
                            () => {
                                o.delete(e), u.G(e);
                            }
                        ),
                        Y: u.A,
                    };
                },
                I = T ? o.useLayoutEffect : o.useEffect,
                j = "current",
                F = (e, t) => {
                    if (Array.isArray(e)) for (const n of e) F(n, t);
                    else null == e || "boolean" == typeof e || t.push(e);
                },
                Y = (e, t) => {
                    const n = e.key;
                    return null != n ? n : "_" + t;
                },
                B = (e) => {
                    const t = (0, o.useRef)();
                    return t[j] || (t[j] = e());
                },
                X = (e) => {
                    const t = (0, o.useRef)(e);
                    return (
                        I(() => {
                            t[j] = e;
                        }, [e]),
                        t
                    );
                },
                q = (0, o.memo)(({ Z: e, ee: t, te: n, ne: u, oe: s, re: i, ie: l, se: c }) => {
                    const a = (0, o.useRef)(null);
                    I(() => t(a[j], n), [n]);
                    const f = (0, o.useMemo)(() => {
                        const e = { position: s && c ? void 0 : "absolute", [l ? "height" : "width"]: "100%", [l ? "top" : "left"]: 0, [l ? (R() ? "right" : "left") : "top"]: u, visibility: !s || c ? "visible" : "hidden" };
                        return l && (e.display = "flex"), e;
                    }, [u, s, c, l]);
                    return (0, r.jsx)(i, "string" == typeof i ? { ref: a, style: f, children: e } : { ref: a, style: f, index: n, children: e });
                }),
                H = (e) => (0, o.useReducer)(e.v, void 0, e.v)[1],
                W = (e, t) =>
                    (0, o.useMemo)(() => {
                        if ("function" == typeof e) return [e, t || 0];
                        const n = ((e) => {
                            const t = [];
                            return F(e, t), t;
                        })(e);
                        return [(e) => n[e], n.length];
                    }, [e, t]),
                Z = (0, o.forwardRef)(({ children: e, count: t, overscan: n, itemSize: s, shift: i, horizontal: l, keepMounted: c, cache: a, startMargin: f = 0, ssrCount: m, as: v = "div", item: p = "div", scrollRef: b, onScroll: g, onScrollEnd: y }, w) => {
                    const [M, T] = W(e, t),
                        E = (0, o.useRef)(null),
                        L = (0, o.useRef)(!!m),
                        k = X(g),
                        R = X(y),
                        [x, N, V, A] = B(() => {
                            const e = !!l,
                                t = C(T, s, n, m, a, !s);
                            return [t, D(t, e), P(t, e), e];
                        });
                    T !== x.M() && x.L(5, [T, i]), f !== x.W() && x.L(6, f);
                    const z = H(x),
                        [O, _] = x.m(),
                        F = x.H(),
                        Z = x.J(),
                        K = x.h(),
                        G = [],
                        J = (e) => {
                            const t = M(e);
                            return (0, r.jsx)(q, { ee: N.N, te: e, ne: x.T(e), oe: x.I(e), re: p, Z: t, ie: A, se: L[j] }, Y(t, e));
                        };
                    I(() => {
                        L[j] = !1;
                        const e = x.O(1, (e) => {
                                e ? (0, u.flushSync)(z) : z();
                            }),
                            t = x.O(4, () => {
                                k[j] && k[j](x.C());
                            }),
                            n = x.O(8, () => {
                                R[j] && R[j]();
                            }),
                            r = (e) => {
                                N.K(e), V.X(e);
                            };
                        return (
                            b ? d(() => r(b[j])) : r(E[j].parentElement),
                            () => {
                                e(), t(), n(), N.Y(), V.Y();
                            }
                        );
                    }, []),
                        I(() => {
                            V.U();
                        }, [Z]),
                        (0, o.useImperativeHandle)(
                            w,
                            () => ({
                                get cache() {
                                    return x._();
                                },
                                get scrollOffset() {
                                    return x.C();
                                },
                                get scrollSize() {
                                    return S(x);
                                },
                                get viewportSize() {
                                    return x.p();
                                },
                                findStartIndex: x.$,
                                findEndIndex: x.S,
                                getItemOffset: x.T,
                                getItemSize: x.R,
                                scrollToIndex: V.D,
                                scrollTo: V.j,
                                scrollBy: V.q,
                            }),
                            [],
                        );
                    for (let e = O, t = _; e <= t; e++) G.push(J(e));
                    if (c) {
                        const e = [],
                            t = [];
                        h(c).forEach((n) => {
                            n < O && e.push(J(n)), n > _ && t.push(J(n));
                        }),
                            G.unshift(...e),
                            G.push(...t);
                    }
                    return (0, r.jsx)(v, { ref: E, style: { overflowAnchor: "none", flex: "none", position: "relative", visibility: "hidden", width: A ? K : "100%", height: A ? "100%" : K, pointerEvents: F ? "none" : void 0 }, children: G });
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-27545368.6f21ebea.js.map

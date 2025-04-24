"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat"],
    {
        989558: (e, t, r) => {
            r.d(t, { T: () => G });
            var n = r(552322),
                o = r(254073),
                s = r.n(o),
                l = r(202784),
                i = r(928316);
            const c = null,
                { min: a, max: u, abs: d, floor: f } = Math,
                h = (e, t, r) => a(r, u(t, e)),
                v = (e) => [...e].sort((e, t) => e - t),
                p =
                    "function" == typeof queueMicrotask
                        ? queueMicrotask
                        : (e) => {
                              Promise.resolve().then(e);
                          },
                w = (e) => {
                    let t, r;
                    return () => (t || ((t = !0), (r = e())), r);
                },
                g = -1,
                m = (e, t, r) => {
                    const n = r ? "unshift" : "push";
                    for (let r = 0; r < t; r++) e[n](g);
                    return e;
                },
                x = (e, t) => {
                    const r = e.t[t];
                    return r === g ? e.o : r;
                },
                y = (e, t, r) => {
                    const n = e.t[t] === g;
                    return (e.t[t] = r), (e.i = a(t, e.i)), n;
                },
                b = (e, t) => {
                    if (!e.l) return 0;
                    if (e.i >= t) return e.u[t];
                    e.i < 0 && ((e.u[0] = 0), (e.i = 0));
                    let r = e.i,
                        n = e.u[r];
                    for (; r < t; ) (n += x(e, r)), (e.u[++r] = n);
                    return (e.i = t), n;
                },
                S = (e, t, r = 0, n = e.l - 1) => {
                    for (; r <= n; ) {
                        const o = f((r + n) / 2),
                            s = b(e, o);
                        if (s <= t) {
                            if (s + x(e, o) > t) return o;
                            r = o + 1;
                        } else n = o - 1;
                    }
                    return h(r, 0, e.l - 1);
                },
                L = (e, t, r) => {
                    const n = t - e.l;
                    return (e.i = r ? -1 : a(t - 1, e.i)), (e.l = t), n > 0 ? (m(e.u, n), m(e.t, n, r), e.o * n) : (e.u.splice(n), (r ? e.t.splice(0, -n) : e.t.splice(n)).reduce((t, r) => t - (r === g ? e.o : r), 0));
                },
                E = "undefined" != typeof window,
                z = () => document.documentElement,
                I = (e) => e.ownerDocument,
                k = (e) => e.defaultView,
                T = w(() => !!E && "rtl" === getComputedStyle(z()).direction),
                C = w(() => /iP(hone|od|ad)/.test(navigator.userAgent)),
                M = w(() => "scrollBehavior" in z().style),
                j = (e) => u(e.h(), e.p()),
                R = (e) => !!e.p(),
                A = (e, t = 40, r = 4, n = 0, o, s = !1) => {
                    let l = !!n,
                        i = [],
                        f = 0,
                        h = 0,
                        p = 0,
                        w = 0,
                        E = 0,
                        z = 0,
                        I = 0,
                        k = 0,
                        T = 0,
                        M = l ? [0, u(n - 1, 0)] : c,
                        j = [0, 0],
                        R = 0;
                    const A = ((e, t, r) => ({ o: r ? r[1] : t, t: r && r[0] ? m(r[0].slice(0, a(e, r[0].length)), u(0, e - r[0].length)) : m([], e), l: e, i: -1, u: m([], e) }))(e, t, o),
                        O = new Set(),
                        H = () => p - h,
                        P = () => H() + z + E,
                        B = (e) =>
                            ((e, t, r, n) => {
                                if (((n = a(n, e.l - 1)), b(e, n) <= t)) {
                                    const o = S(e, t + r, n);
                                    return [S(e, t, n, o), o];
                                }
                                {
                                    const o = S(e, t, void 0, n);
                                    return [o, S(e, t + r, o)];
                                }
                            })(A, e, f, j[0]),
                        _ = () => ((e) => (e.l ? b(e, e.l - 1) + x(e, e.l - 1) : 0))(A),
                        F = (e) => b(A, e) - z,
                        N = (e) => x(A, e),
                        Y = (e) => {
                            e && (C() && 0 !== k ? (z += e) : ((E += e), w++));
                        };
                    return {
                        v: () => i,
                        _: () => ((e) => [e.t.slice(), e.o])(A),
                        m: () => {
                            if (I) return j;
                            let [e, t] = B(u(0, P()));
                            return M && ((e = a(e, M[0])), (t = u(t, M[1]))), 1 !== k && (e -= u(0, r)), 2 !== k && (t += u(0, r)), (j = [u(e, 0), a(t, A.l - 1)]);
                        },
                        $: () => S(A, P()),
                        S: () => S(A, P() + f),
                        I: (e) => A.t[e] === g,
                        k: () => !!M && A.t.slice(u(0, M[0] - 1), a(A.l - 1, M[1] + 1) + 1).includes(g),
                        T: F,
                        R: N,
                        M: () => A.l,
                        C: () => p,
                        H: () => 0 !== k,
                        p: () => f,
                        W: () => h,
                        h: _,
                        J: () => w,
                        B: () => ((I = E), (E = 0), [I, 2 === T || H() + f >= _()]),
                        O: (e, t) => {
                            const r = [e, t];
                            return (
                                O.add(r),
                                () => {
                                    O.delete(r);
                                }
                            );
                        },
                        L: (e, t) => {
                            let r,
                                n,
                                o = 0;
                            switch (e) {
                                case 1: {
                                    const e = I;
                                    I = 0;
                                    const r = t - p,
                                        s = d(r);
                                    (e && s < d(e) + 1) || 0 !== T || (k = r < 0 ? 2 : 1), l && ((M = c), (l = !1)), (p = t), (o = 4);
                                    const i = H();
                                    i >= -f && i <= _() && ((o += 1), (n = s > f));
                                    break;
                                }
                                case 2:
                                    (o = 8), 0 !== k && ((r = !0), (o += 1)), (k = 0), (T = 0), (M = c);
                                    break;
                                case 3: {
                                    const e = t.filter(([e, t]) => A.t[e] !== t);
                                    if (!e.length) break;
                                    Y(e.reduce((e, [t, r]) => ((2 === T || (M ? !l && t < M[0] : F(t) + (0 === k && 0 === T ? N(t) : 0) < H())) && (e += r - N(t)), e), 0));
                                    for (const [t, r] of e) {
                                        const e = N(t),
                                            n = y(A, t, r);
                                        s && (R += n ? r : r - e);
                                    }
                                    s &&
                                        f &&
                                        R > f &&
                                        (Y(
                                            ((e, t) => {
                                                let r = 0;
                                                const n = [];
                                                e.t.forEach((e, o) => {
                                                    e !== g && (n.push(e), o < t && r++);
                                                }),
                                                    (e.i = -1);
                                                const o = v(n),
                                                    s = o.length,
                                                    l = (s / 2) | 0,
                                                    i = s % 2 == 0 ? (o[l - 1] + o[l]) / 2 : o[l],
                                                    c = e.o;
                                                return ((e.o = i) - c) * u(t - r, 0);
                                            })(A, S(A, P())),
                                        ),
                                        (s = !1)),
                                        (o = 3),
                                        (n = !0);
                                    break;
                                }
                                case 4:
                                    f !== t && ((f = t), (o = 3));
                                    break;
                                case 5:
                                    t[1] ? (Y(L(A, t[0], !0)), (T = 2), (o = 1)) : (L(A, t[0]), (o = 1));
                                    break;
                                case 6:
                                    h = t;
                                    break;
                                case 7:
                                    T = 1;
                                    break;
                                case 8:
                                    (M = B(t)), (o = 1);
                            }
                            o &&
                                ((i = []),
                                r && z && ((E += z), (z = 0), w++),
                                O.forEach(([e, t]) => {
                                    o & e && t(n);
                                }));
                        },
                    };
                },
                O = setTimeout,
                H = (e, t) => (t && T() ? -e : e),
                P = (e, t, r, n, o, s) => {
                    const l = Date.now;
                    let i = 0,
                        a = !1,
                        u = !1,
                        d = !1,
                        f = !1;
                    const h = (() => {
                            let t;
                            const r = () => {
                                    t != c && clearTimeout(t);
                                },
                                n = () => {
                                    r(),
                                        (t = O(() => {
                                            (t = c),
                                                (() => {
                                                    if (a || u) return (a = !1), void h();
                                                    (d = !1), e.L(2);
                                                })();
                                        }, 150));
                                };
                            return (n.P = r), n;
                        })(),
                        v = () => {
                            (i = l()), d && (f = !0), s && e.L(6, s()), e.L(1, n()), h();
                        },
                        p = (t) => {
                            if (a || !e.H() || t.ctrlKey) return;
                            const n = l() - i;
                            150 > n && 50 < n && (r ? t.deltaX : t.deltaY) && (a = !0);
                        },
                        w = () => {
                            (u = !0), (d = f = !1);
                        },
                        g = () => {
                            (u = !1), C() && (d = !0);
                        };
                    return (
                        t.addEventListener("scroll", v),
                        t.addEventListener("wheel", p, { passive: !0 }),
                        t.addEventListener("touchstart", w, { passive: !0 }),
                        t.addEventListener("touchend", g, { passive: !0 }),
                        {
                            A: () => {
                                t.removeEventListener("scroll", v), t.removeEventListener("wheel", p), t.removeEventListener("touchstart", w), t.removeEventListener("touchend", g), h.P();
                            },
                            V: () => {
                                const [t, s] = e.B();
                                t && (o(H(t, r), s, f), (f = !1), s && e.p() > e.h() && e.L(1, n()));
                            },
                        }
                    );
                },
                B = (e, t) => {
                    let r, n, o;
                    const s = t ? "scrollLeft" : "scrollTop",
                        l = t ? "overflowX" : "overflowY",
                        i = async (n, l) => {
                            if (!r) return void p(() => i(n, l));
                            o && o();
                            const c = () => {
                                let t;
                                return [
                                    new Promise((r, n) => {
                                        (t = r), (o = n), R(e) && O(n, 150);
                                    }),
                                    e.O(2, () => {
                                        t && t();
                                    }),
                                ];
                            };
                            if (l && M()) {
                                for (; e.L(8, n()), e.k(); ) {
                                    const [e, t] = c();
                                    try {
                                        await e;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        t();
                                    }
                                }
                                r.scrollTo({ [t ? "left" : "top"]: H(n(), t), behavior: "smooth" });
                            } else
                                for (;;) {
                                    const [o, l] = c();
                                    try {
                                        (r[s] = H(n(), t)), e.L(7), await o;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        l();
                                    }
                                }
                        };
                    return {
                        X(i) {
                            (r = i),
                                (n = P(
                                    e,
                                    i,
                                    t,
                                    () => H(i[s], t),
                                    (t, r, n) => {
                                        if (n) {
                                            const e = i.style,
                                                t = e[l];
                                            (e[l] = "hidden"),
                                                O(() => {
                                                    e[l] = t;
                                                });
                                        }
                                        r ? ((i[s] = e.C() + t), o && o()) : (i[s] += t);
                                    },
                                ));
                        },
                        Y() {
                            n && n.A();
                        },
                        j(e) {
                            i(() => e);
                        },
                        q(t) {
                            (t += e.C()), i(() => t);
                        },
                        D(t, { align: r, smooth: n, offset: o = 0 } = {}) {
                            if (((t = h(t, 0, e.M() - 1)), "nearest" === r)) {
                                const n = e.T(t),
                                    o = e.C();
                                if (n < o) r = "start";
                                else {
                                    if (!(n + e.R(t) > o + e.p())) return;
                                    r = "end";
                                }
                            }
                            i(() => o + e.W() + e.T(t) + ("end" === r ? e.R(t) - e.p() : "center" === r ? (e.R(t) - e.p()) / 2 : 0), n);
                        },
                        U: () => {
                            n && n.V();
                        },
                    };
                },
                _ = (e) => {
                    let t;
                    return {
                        F(r) {
                            (t || (t = new (k(I(r)).ResizeObserver)(e))).observe(r);
                        },
                        G(e) {
                            t.unobserve(e);
                        },
                        A() {
                            t && t.disconnect();
                        },
                    };
                },
                F = (e, t) => {
                    let r;
                    const n = t ? "width" : "height",
                        o = new WeakMap(),
                        s = _((t) => {
                            const s = [];
                            for (const { target: l, contentRect: i } of t)
                                if (l.offsetParent)
                                    if (l === r) e.L(4, i[n]);
                                    else {
                                        const e = o.get(l);
                                        e != c && s.push([e, i[n]]);
                                    }
                            s.length && e.L(3, s);
                        });
                    return {
                        K(e) {
                            s.F((r = e));
                        },
                        N: (e, t) => (
                            o.set(e, t),
                            s.F(e),
                            () => {
                                o.delete(e), s.G(e);
                            }
                        ),
                        Y: s.A,
                    };
                },
                N = E ? l.useLayoutEffect : l.useEffect,
                Y = "current",
                Z = (e, t) => {
                    if (Array.isArray(e)) for (const r of e) Z(r, t);
                    else null == e || "boolean" == typeof e || t.push(e);
                },
                q = (e, t) => {
                    const r = e.key;
                    return null != r ? r : "_" + t;
                },
                D = (e) => {
                    const t = (0, l.useRef)();
                    return t[Y] || (t[Y] = e());
                },
                W = (e) => {
                    const t = (0, l.useRef)(e);
                    return (
                        N(() => {
                            t[Y] = e;
                        }, [e]),
                        t
                    );
                },
                U = (0, l.memo)(({ Z: e, ee: t, te: r, ne: o, oe: s, re: i, ie: c, se: a }) => {
                    const u = (0, l.useRef)(null);
                    N(() => t(u[Y], r), [r]);
                    const d = (0, l.useMemo)(() => {
                        const e = { position: s && a ? void 0 : "absolute", [c ? "height" : "width"]: "100%", [c ? "top" : "left"]: 0, [c ? (T() ? "right" : "left") : "top"]: o, visibility: !s || a ? "visible" : "hidden" };
                        return c && (e.display = "flex"), e;
                    }, [o, s, a, c]);
                    return (0, n.jsx)(i, "string" == typeof i ? { ref: u, style: d, children: e } : { ref: u, style: d, index: r, children: e });
                }),
                V = (e) => (0, l.useReducer)(e.v, void 0, e.v)[1],
                X = (e, t) =>
                    (0, l.useMemo)(() => {
                        if ("function" == typeof e) return [e, t || 0];
                        const r = ((e) => {
                            const t = [];
                            return Z(e, t), t;
                        })(e);
                        return [(e) => r[e], r.length];
                    }, [e, t]),
                K = (0, l.forwardRef)(({ children: e, count: t, overscan: r, itemSize: o, shift: s, horizontal: c, keepMounted: a, cache: u, startMargin: d = 0, ssrCount: f, as: h = "div", item: w = "div", scrollRef: g, onScroll: m, onScrollEnd: x }, y) => {
                    const [b, S] = X(e, t),
                        L = (0, l.useRef)(null),
                        E = (0, l.useRef)(!!f),
                        z = W(m),
                        I = W(x),
                        [k, T, C, M] = D(() => {
                            const e = !!c,
                                t = A(S, o, r, f, u, !o);
                            return [t, F(t, e), B(t, e), e];
                        });
                    S !== k.M() && k.L(5, [S, s]), d !== k.W() && k.L(6, d);
                    const R = V(k),
                        [O, H] = k.m(),
                        P = k.H(),
                        _ = k.J(),
                        Z = k.h(),
                        K = [],
                        G = (e) => {
                            const t = b(e);
                            return (0, n.jsx)(U, { ee: T.N, te: e, ne: k.T(e), oe: k.I(e), re: w, Z: t, ie: M, se: E[Y] }, q(t, e));
                        };
                    N(() => {
                        E[Y] = !1;
                        const e = k.O(1, (e) => {
                                e ? (0, i.flushSync)(R) : R();
                            }),
                            t = k.O(4, () => {
                                z[Y] && z[Y](k.C());
                            }),
                            r = k.O(8, () => {
                                I[Y] && I[Y]();
                            }),
                            n = (e) => {
                                T.K(e), C.X(e);
                            };
                        return (
                            g ? p(() => n(g[Y])) : n(L[Y].parentElement),
                            () => {
                                e(), t(), r(), T.Y(), C.Y();
                            }
                        );
                    }, []),
                        N(() => {
                            C.U();
                        }, [_]),
                        (0, l.useImperativeHandle)(
                            y,
                            () => ({
                                get cache() {
                                    return k._();
                                },
                                get scrollOffset() {
                                    return k.C();
                                },
                                get scrollSize() {
                                    return j(k);
                                },
                                get viewportSize() {
                                    return k.p();
                                },
                                findStartIndex: k.$,
                                findEndIndex: k.S,
                                getItemOffset: k.T,
                                getItemSize: k.R,
                                scrollToIndex: C.D,
                                scrollTo: C.j,
                                scrollBy: C.q,
                            }),
                            [],
                        );
                    for (let e = O, t = H; e <= t; e++) K.push(G(e));
                    if (a) {
                        const e = [],
                            t = [];
                        v(a).forEach((r) => {
                            r < O && e.push(G(r)), r > H && t.push(G(r));
                        }),
                            K.unshift(...e),
                            K.push(...t);
                    }
                    return (0, n.jsx)(h, { ref: L, style: { overflowAnchor: "none", flex: "none", position: "relative", visibility: "hidden", width: M ? Z : "100%", height: M ? "100%" : Z, pointerEvents: P ? "none" : void 0 }, children: K });
                });
            function G({ api: e, className: t, footer: r, header: o, items: i, nearEndThreshold: c = 5, nearStartThreshold: a = 2, onAtEnd: u, onAtStart: d, onNearEnd: f, onNearStart: h, onScroll: v, renderItem: p, ...w }) {
                const g = i.length,
                    m = (0, l.useRef)(null),
                    x = (0, l.useRef)(0);
                (0, l.useImperativeHandle)(
                    e,
                    () => ({
                        findStartIndex: () => m.current?.findStartIndex() || 0,
                        findEndIndex: () => m.current?.findEndIndex() || 0,
                        getItemOffset: (e) => m.current?.getItemOffset(e) || 0,
                        getItemSize: (e) => m.current?.getItemSize(e) || 0,
                        scrollTo(e) {
                            m.current?.scrollTo(e);
                        },
                        scrollToIndex(e, t) {
                            m.current?.scrollToIndex(e, t);
                        },
                        get scrollOffset() {
                            return m.current?.scrollOffset || 0;
                        },
                        get scrollSize() {
                            return m.current?.scrollSize || 0;
                        },
                        get viewportSize() {
                            return m.current?.viewportSize || 0;
                        },
                    }),
                    [],
                );
                const y = s()(() => f?.(), 500),
                    b = s()(() => h?.(), 500);
                return (0, n.jsxs)("div", {
                    className: t,
                    style: { height: "100vh", overflowAnchor: "none", overflowY: "auto", width: "100%" },
                    children: [
                        o,
                        (0, n.jsx)(K, {
                            as: "ul",
                            count: g,
                            item: "li",
                            onScroll: function (e) {
                                if (!m.current) return;
                                const t = e,
                                    r = t > x.current ? "forward" : "backward";
                                v?.(e, r), "backward" === r && (0 === t && d?.(), m.current.findStartIndex() <= a && b()), "forward" === r && (t + m.current.viewportSize - m.current.scrollSize == 0 && u?.(), g - m.current.findEndIndex() <= c && y()), (x.current = t);
                            },
                            ref: m,
                            ...w,
                            children: (e) => {
                                const t = i[e];
                                return p(t);
                            },
                        }),
                        r,
                    ],
                });
            }
        },
        582440: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322);
            const o = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" }) });
        },
        533788: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322);
            const o = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" }) });
        },
        779129: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322);
            const o = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" }) });
        },
        511974: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322);
            const o = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" }) });
        },
        682008: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322);
            const o = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21 5v3h3v2h-3v3h-2v-3h-3V8h3V5h2zM10 2C7.791 2 6 3.79 6 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4zm0 9c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11z" }) });
        },
        202136: (e, t, r) => {
            r.d(t, { j: () => p });
            const n = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
                o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
            function s(e) {
                if (Intl.Locale) {
                    let t = new Intl.Locale(e).maximize(),
                        r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                    if (r) return "rtl" === r.direction;
                    if (t.script) return n.has(t.script);
                }
                let t = e.split("-")[0];
                return o.has(t);
            }
            var l = r(202784),
                i = r(623047);
            const c = Symbol.for("react-aria.i18n.locale");
            function a() {
                let e = ("undefined" != typeof window && window[c]) || ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch (t) {
                    e = "en-US";
                }
                return { locale: e, direction: s(e) ? "rtl" : "ltr" };
            }
            let u = a(),
                d = new Set();
            function f() {
                u = a();
                for (let e of d) e(u);
            }
            function h() {
                let e = (0, i.Av)(),
                    [t, r] = (0, l.useState)(u);
                return (
                    (0, l.useEffect)(
                        () => (
                            0 === d.size && window.addEventListener("languagechange", f),
                            d.add(r),
                            () => {
                                d.delete(r), 0 === d.size && window.removeEventListener("languagechange", f);
                            }
                        ),
                        [],
                    ),
                    e ? { locale: "en-US", direction: "ltr" } : t
                );
            }
            const v = l.createContext(null);
            function p() {
                let e = h();
                return (0, l.useContext)(v) || e;
            }
        },
        32196: (e, t, r) => {
            r.d(t, { b: () => o });
            var n = r(238013);
            function o(e, t) {
                let { id: r, "aria-label": o, "aria-labelledby": s } = e;
                if (((r = (0, n.Me)(r)), s && o)) {
                    let e = new Set([r, ...s.trim().split(/\s+/)]);
                    s = [...e].join(" ");
                } else s && (s = s.trim().split(/\s+/).join(" "));
                return o || s || !t || (o = t), { id: r, "aria-label": o, "aria-labelledby": s };
            }
        },
        536574: (e, t, r) => {
            r.d(t, { T: () => i });
            var n = r(277108),
                o = r(202784),
                s = r(525757);
            const l = { border: 0, clip: "rect(0 0 0 0)", clipPath: "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" };
            function i(e) {
                let { children: t, elementType: r = "div", isFocusable: i, style: c, ...a } = e,
                    { visuallyHiddenProps: u } = (function (e = {}) {
                        let { style: t, isFocusable: r } = e,
                            [n, i] = (0, o.useState)(!1),
                            { focusWithinProps: c } = (0, s.L)({ isDisabled: !r, onFocusWithinChange: (e) => i(e) });
                        return { visuallyHiddenProps: { ...c, style: (0, o.useMemo)(() => (n ? t : t ? { ...l, ...t } : l), [n]) } };
                    })(e);
                return o.createElement(r, (0, n.d)(a, u), t);
            }
        },
        223717: (e, t, r) => {
            r.d(t, { z: () => o });
            var n = r(202784);
            function o(e, t, r) {
                let [o, s] = (0, n.useState)(e || t),
                    l = (0, n.useRef)(void 0 !== e),
                    i = void 0 !== e;
                (0, n.useEffect)(() => {
                    l.current;
                    l.current = i;
                }, [i]);
                let c = i ? e : o,
                    a = (0, n.useCallback)(
                        (e, ...t) => {
                            let n = (e, ...t) => {
                                r && (Object.is(c, e) || r(e, ...t)), i || (c = e);
                            };
                            if ("function" == typeof e) {
                                s((r, ...o) => {
                                    let s = e(i ? c : r, ...o);
                                    return n(s, ...t), i ? r : s;
                                });
                            } else i || s(e), n(e, ...t);
                        },
                        [i, c, r],
                    );
                return [c, a];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat.1935d1da.js.map

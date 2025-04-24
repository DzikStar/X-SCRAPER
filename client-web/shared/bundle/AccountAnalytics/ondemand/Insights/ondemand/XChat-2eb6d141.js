"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-2eb6d141"],
    {
        717998: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        784389: (e, t, n) => {
            n.d(t, { f: () => a });
            var r = n(202784),
                o = n(172714),
                s = n(552322),
                i = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: i = 5, ...a } = e;
                    return (0, s.jsx)(o.WV.svg, { ...a, ref: t, width: r, height: i, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, s.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            i.displayName = "Arrow";
            var a = i;
        },
        262656: (e, t, n) => {
            n.d(t, { F: () => o, e: () => s });
            var r = n(202784);
            function o(...e) {
                return (t) =>
                    e.forEach((e) =>
                        (function (e, t) {
                            "function" == typeof e ? e(t) : null != e && (e.current = t);
                        })(e, t),
                    );
            }
            function s(...e) {
                return r.useCallback(o(...e), e);
            }
        },
        392211: (e, t, n) => {
            n.d(t, { b: () => i, k: () => s });
            var r = n(202784),
                o = n(552322);
            function s(e, t) {
                const n = r.createContext(t),
                    s = (e) => {
                        const { children: t, ...s } = e,
                            i = r.useMemo(() => s, Object.values(s));
                        return (0, o.jsx)(n.Provider, { value: i, children: t });
                    };
                return (
                    (s.displayName = e + "Provider"),
                    [
                        s,
                        function (o) {
                            const s = r.useContext(n);
                            if (s) return s;
                            if (void 0 !== t) return t;
                            throw new Error(`\`${o}\` must be used within \`${e}\``);
                        },
                    ]
                );
            }
            function i(e, t = []) {
                let n = [];
                const s = () => {
                    const t = n.map((e) => r.createContext(e));
                    return function (n) {
                        const o = n?.[e] || t;
                        return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                    };
                };
                return (
                    (s.scopeName = e),
                    [
                        function (t, s) {
                            const i = r.createContext(s),
                                a = n.length;
                            n = [...n, s];
                            const u = (t) => {
                                const { scope: n, children: s, ...u } = t,
                                    c = n?.[e]?.[a] || i,
                                    l = r.useMemo(() => u, Object.values(u));
                                return (0, o.jsx)(c.Provider, { value: l, children: s });
                            };
                            return (
                                (u.displayName = t + "Provider"),
                                [
                                    u,
                                    function (n, o) {
                                        const u = o?.[e]?.[a] || i,
                                            c = r.useContext(u);
                                        if (c) return c;
                                        if (void 0 !== s) return s;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        a(s, ...t),
                    ]
                );
            }
            function a(...e) {
                const t = e[0];
                if (1 === e.length) return t;
                const n = () => {
                    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const o = n.reduce((t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }), {});
                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                    };
                };
                return (n.scopeName = t.scopeName), n;
            }
        },
        123825: (e, t, n) => {
            n.d(t, { x8: () => Ue, VY: () => Ae, dk: () => Ve, aV: () => ke, h_: () => je, fC: () => Fe, Dx: () => Be, xz: () => Ie });
            var r,
                o = n(202784),
                s = n(717998),
                i = n(262656),
                a = n(392211),
                u = n(23372),
                c = n(387695),
                l = n(172714),
                d = n(627757),
                f = n(986796),
                p = n(552322),
                v = "dismissableLayer.update",
                m = "dismissableLayer.pointerDownOutside",
                h = "dismissableLayer.focusOutside",
                E = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                y = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: a, onPointerDownOutside: u, onFocusOutside: c, onInteractOutside: y, onDismiss: g, ...C } = e,
                        D = o.useContext(E),
                        [N, R] = o.useState(null),
                        O = N?.ownerDocument ?? globalThis?.document,
                        [, P] = o.useState({}),
                        L = (0, i.e)(t, (e) => R(e)),
                        x = Array.from(D.layers),
                        [M] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1),
                        T = x.indexOf(M),
                        _ = N ? x.indexOf(N) : -1,
                        W = D.layersWithOutsidePointerEventsDisabled.size > 0,
                        S = _ >= T,
                        F = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1),
                                s = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    w(m, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", s.current), (s.current = r), t.addEventListener("click", s.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", s.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...D.branches].some((e) => e.contains(t));
                            S && !n && (u?.(e), y?.(e), e.defaultPrevented || g?.());
                        }, O),
                        I = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1);
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !r.current) {
                                            w(h, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...D.branches].some((e) => e.contains(t)) || (c?.(e), y?.(e), e.defaultPrevented || g?.());
                        }, O);
                    return (
                        (0, f.e)((e) => {
                            _ === D.layers.size - 1 && (a?.(e), !e.defaultPrevented && g && (e.preventDefault(), g()));
                        }, O),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    n && (0 === D.layersWithOutsidePointerEventsDisabled.size && ((r = O.body.style.pointerEvents), (O.body.style.pointerEvents = "none")), D.layersWithOutsidePointerEventsDisabled.add(N)),
                                    D.layers.add(N),
                                    b(),
                                    () => {
                                        n && 1 === D.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, O, n, D]),
                        o.useEffect(
                            () => () => {
                                N && (D.layers.delete(N), D.layersWithOutsidePointerEventsDisabled.delete(N), b());
                            },
                            [N, D],
                        ),
                        o.useEffect(() => {
                            const e = () => P({});
                            return document.addEventListener(v, e), () => document.removeEventListener(v, e);
                        }, []),
                        (0, p.jsx)(l.WV.div, { ...C, ref: L, style: { pointerEvents: W ? (S ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, I.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, I.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, F.onPointerDownCapture) })
                    );
                });
            y.displayName = "DismissableLayer";
            var g = o.forwardRef((e, t) => {
                const n = o.useContext(E),
                    r = o.useRef(null),
                    s = (0, i.e)(t, r);
                return (
                    o.useEffect(() => {
                        const e = r.current;
                        if (e)
                            return (
                                n.branches.add(e),
                                () => {
                                    n.branches.delete(e);
                                }
                            );
                    }, [n.branches]),
                    (0, p.jsx)(l.WV.div, { ...e, ref: s })
                );
            });
            function b() {
                const e = new CustomEvent(v);
                document.dispatchEvent(e);
            }
            function w(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, l.jH)(o, s) : o.dispatchEvent(s);
            }
            g.displayName = "DismissableLayerBranch";
            var C = n(22426),
                D = n(928316),
                N = n(861644),
                R = o.forwardRef((e, t) => {
                    const { container: n, ...r } = e,
                        [s, i] = o.useState(!1);
                    (0, N.b)(() => i(!0), []);
                    const a = n || (s && globalThis?.document?.body);
                    return a ? D.createPortal((0, p.jsx)(l.WV.div, { ...r, ref: t }), a) : null;
                });
            R.displayName = "Portal";
            var O = (e) => {
                const { present: t, children: n } = e,
                    r = (function (e) {
                        const [t, n] = o.useState(),
                            r = o.useRef({}),
                            s = o.useRef(e),
                            i = o.useRef("none"),
                            a = e ? "mounted" : "unmounted",
                            [u, c] = (function (e, t) {
                                return o.useReducer((e, n) => t[e][n] ?? e, e);
                            })(a, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            o.useEffect(() => {
                                const e = P(r.current);
                                i.current = "mounted" === u ? e : "none";
                            }, [u]),
                            (0, N.b)(() => {
                                const t = r.current,
                                    n = s.current;
                                if (n !== e) {
                                    const r = i.current,
                                        o = P(t);
                                    if (e) c("MOUNT");
                                    else if ("none" === o || "none" === t?.display) c("UNMOUNT");
                                    else {
                                        c(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    s.current = e;
                                }
                            }, [e, c]),
                            (0, N.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        o = (o) => {
                                            const i = P(r.current).includes(o.animationName);
                                            if (o.target === t && i && (c("ANIMATION_END"), !s.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        a = (e) => {
                                            e.target === t && (i.current = P(r.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", a),
                                        t.addEventListener("animationcancel", o),
                                        t.addEventListener("animationend", o),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
                                        }
                                    );
                                }
                                c("ANIMATION_END");
                            }, [t, c]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(u),
                                ref: o.useCallback((e) => {
                                    e && (r.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    s = "function" == typeof n ? n({ present: r.isPresent }) : o.Children.only(n),
                    a = (0, i.e)(
                        r.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(s),
                    );
                return "function" == typeof n || r.isPresent ? o.cloneElement(s, { ref: a }) : null;
            };
            function P(e) {
                return e?.animationName || "none";
            }
            O.displayName = "Presence";
            var L = n(11861),
                x = n(305163),
                M = n(495346),
                T = n(287359),
                _ = (0, n(964597)._)(),
                W = function () {},
                S = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        r = o.useState({ onScrollCapture: W, onWheelCapture: W, onTouchMoveCapture: W }),
                        s = r[0],
                        i = r[1],
                        a = e.forwardProps,
                        u = e.children,
                        c = e.className,
                        l = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        v = e.noIsolation,
                        m = e.inert,
                        h = e.allowPinchZoom,
                        E = e.as,
                        y = void 0 === E ? "div" : E,
                        g = e.gapMode,
                        b = (0, x._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = p,
                        C = (0, T.q)([n, t]),
                        D = (0, x.pi)((0, x.pi)({}, b), s);
                    return o.createElement(o.Fragment, null, d && o.createElement(w, { sideCar: _, removeScrollBar: l, shards: f, noIsolation: v, inert: m, setCallbacks: i, allowPinchZoom: !!h, lockRef: n, gapMode: g }), a ? o.cloneElement(o.Children.only(u), (0, x.pi)((0, x.pi)({}, D), { ref: C })) : o.createElement(y, (0, x.pi)({}, D, { className: c, ref: C }), u));
                });
            (S.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (S.classNames = { fullWidth: M.zi, zeroRight: M.pF });
            var F = n(757758),
                I = n(894200),
                j = n(633097),
                k = !1;
            if ("undefined" != typeof window)
                try {
                    var A = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (k = !0), !0;
                        },
                    });
                    window.addEventListener("test", A, A), window.removeEventListener("test", A, A);
                } catch (e) {
                    k = !1;
                }
            var B = !!k && { passive: !1 },
                V = function (e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return (
                        "hidden" !== n[t] &&
                        !(
                            n.overflowY === n.overflowX &&
                            !(function (e) {
                                return "TEXTAREA" === e.tagName;
                            })(e) &&
                            "visible" === n[t]
                        )
                    );
                },
                U = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), K(e, r))) {
                            var o = $(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                K = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return V(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return V(e, "overflowX");
                          })(t);
                },
                $ = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                z = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                X = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                Y = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                H = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                Z = 0,
                q = [];
            function G(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const J = (0, F.L)(_, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    r = o.useRef(),
                    s = o.useState(Z++)[0],
                    i = o.useState(j.Ws)[0],
                    a = o.useRef(e);
                o.useEffect(
                    function () {
                        a.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(s));
                                var t = (0, x.ev)([e.lockRef.current], (e.shards || []).map(Y), !0).filter(Boolean);
                                return (
                                    t.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(s));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(s)),
                                            t.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(s));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var u = o.useCallback(function (e, t) {
                        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !a.current.allowPinchZoom;
                        var o,
                            s = z(e),
                            i = n.current,
                            u = "deltaX" in e ? e.deltaX : i[0] - s[0],
                            c = "deltaY" in e ? e.deltaY : i[1] - s[1],
                            l = e.target,
                            d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === l.type) return !1;
                        var f = U(d, l);
                        if (!f) return !0;
                        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = U(d, l))), !f)) return !1;
                        if ((!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o)) return !0;
                        var p = r.current || o;
                        return (function (e, t, n, r, o) {
                            var s = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                i = s * r,
                                a = n.target,
                                u = t.contains(a),
                                c = !1,
                                l = i > 0,
                                d = 0,
                                f = 0;
                            do {
                                var p = $(e, a),
                                    v = p[0],
                                    m = p[1] - p[2] - s * v;
                                (v || m) && K(e, a) && ((d += m), (f += v)), (a = a instanceof ShadowRoot ? a.host : a.parentNode);
                            } while ((!u && a !== document.body) || (u && (t.contains(a) || t === a)));
                            return ((l && ((o && Math.abs(d) < 1) || (!o && i > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -i > f)))) && (c = !0), c;
                        })(p, t, e, "h" === p ? u : c, !0);
                    }, []),
                    c = o.useCallback(function (e) {
                        var n = e;
                        if (q.length && q[q.length - 1] === i) {
                            var r = "deltaY" in n ? X(n) : z(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var s = (a.current.shards || [])
                                    .map(Y)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (s.length > 0 ? u(n, s[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault();
                            }
                        }
                    }, []),
                    l = o.useCallback(function (e, n, r, o) {
                        var s = { name: e, delta: n, target: r, should: o, shadowParent: G(r) };
                        t.current.push(s),
                            setTimeout(function () {
                                t.current = t.current.filter(function (e) {
                                    return e !== s;
                                });
                            }, 1);
                    }, []),
                    d = o.useCallback(function (e) {
                        (n.current = z(e)), (r.current = void 0);
                    }, []),
                    f = o.useCallback(function (t) {
                        l(t.type, X(t), t.target, u(t, e.lockRef.current));
                    }, []),
                    p = o.useCallback(function (t) {
                        l(t.type, z(t), t.target, u(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        q.push(i),
                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                        document.addEventListener("wheel", c, B),
                        document.addEventListener("touchmove", c, B),
                        document.addEventListener("touchstart", d, B),
                        function () {
                            (q = q.filter(function (e) {
                                return e !== i;
                            })),
                                document.removeEventListener("wheel", c, B),
                                document.removeEventListener("touchmove", c, B),
                                document.removeEventListener("touchstart", d, B);
                        }
                    );
                }, []);
                var v = e.removeScrollBar,
                    m = e.inert;
                return o.createElement(o.Fragment, null, m ? o.createElement(i, { styles: H(s) }) : null, v ? o.createElement(I.jp, { gapMode: e.gapMode }) : null);
            });
            var Q = o.forwardRef(function (e, t) {
                return o.createElement(S, (0, x.pi)({}, e, { ref: t, sideCar: J }));
            });
            Q.classNames = S.classNames;
            const ee = Q;
            var te = n(549732),
                ne = n(549815),
                re = "Dialog",
                [oe, se] = (0, a.b)(re),
                [ie, ae] = oe(re),
                ue = (e) => {
                    const { __scopeDialog: t, children: n, open: r, defaultOpen: s, onOpenChange: i, modal: a = !0 } = e,
                        l = o.useRef(null),
                        d = o.useRef(null),
                        [f = !1, v] = (0, c.T)({ prop: r, defaultProp: s, onChange: i });
                    return (0, p.jsx)(ie, { scope: t, triggerRef: l, contentRef: d, contentId: (0, u.M)(), titleId: (0, u.M)(), descriptionId: (0, u.M)(), open: f, onOpenChange: v, onOpenToggle: o.useCallback(() => v((e) => !e), [v]), modal: a, children: n });
                };
            ue.displayName = re;
            var ce = "DialogTrigger",
                le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ae(ce, n),
                        a = (0, i.e)(t, o.triggerRef);
                    return (0, p.jsx)(l.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": xe(o.open), ...r, ref: a, onClick: (0, s.M)(e.onClick, o.onOpenToggle) });
                });
            le.displayName = ce;
            var de = "DialogPortal",
                [fe, pe] = oe(de, { forceMount: void 0 }),
                ve = (e) => {
                    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
                        i = ae(de, t);
                    return (0, p.jsx)(fe, { scope: t, forceMount: n, children: o.Children.map(r, (e) => (0, p.jsx)(O, { present: n || i.open, children: (0, p.jsx)(R, { asChild: !0, container: s, children: e }) })) });
                };
            ve.displayName = de;
            var me = "DialogOverlay",
                he = o.forwardRef((e, t) => {
                    const n = pe(me, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ae(me, e.__scopeDialog);
                    return s.modal ? (0, p.jsx)(O, { present: r || s.open, children: (0, p.jsx)(Ee, { ...o, ref: t }) }) : null;
                });
            he.displayName = me;
            var Ee = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ae(me, n);
                    return (0, p.jsx)(ee, { as: ne.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, p.jsx)(l.WV.div, { "data-state": xe(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                ye = "DialogContent",
                ge = o.forwardRef((e, t) => {
                    const n = pe(ye, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ae(ye, e.__scopeDialog);
                    return (0, p.jsx)(O, { present: r || s.open, children: s.modal ? (0, p.jsx)(be, { ...o, ref: t }) : (0, p.jsx)(we, { ...o, ref: t }) });
                });
            ge.displayName = ye;
            var be = o.forwardRef((e, t) => {
                    const n = ae(ye, e.__scopeDialog),
                        r = o.useRef(null),
                        a = (0, i.e)(t, n.contentRef, r);
                    return (
                        o.useEffect(() => {
                            const e = r.current;
                            if (e) return (0, te.Ry)(e);
                        }, []),
                        (0, p.jsx)(Ce, {
                            ...e,
                            ref: a,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, s.M)(e.onCloseAutoFocus, (e) => {
                                e.preventDefault(), n.triggerRef.current?.focus();
                            }),
                            onPointerDownOutside: (0, s.M)(e.onPointerDownOutside, (e) => {
                                const t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                (2 === t.button || n) && e.preventDefault();
                            }),
                            onFocusOutside: (0, s.M)(e.onFocusOutside, (e) => e.preventDefault()),
                        })
                    );
                }),
                we = o.forwardRef((e, t) => {
                    const n = ae(ye, e.__scopeDialog),
                        r = o.useRef(!1),
                        s = o.useRef(!1);
                    return (0, p.jsx)(Ce, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), (r.current = !1), (s.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((r.current = !0), "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
                            const o = t.target,
                                i = n.triggerRef.current?.contains(o);
                            i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault();
                        },
                    });
                }),
                Ce = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: a, ...u } = e,
                        c = ae(ye, n),
                        l = o.useRef(null),
                        d = (0, i.e)(t, l);
                    return (0, L.EW)(), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(C.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: s, onUnmountAutoFocus: a, children: (0, p.jsx)(y, { role: "dialog", id: c.contentId, "aria-describedby": c.descriptionId, "aria-labelledby": c.titleId, "data-state": xe(c.open), ...u, ref: d, onDismiss: () => c.onOpenChange(!1) }) }), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(We, { titleId: c.titleId }), (0, p.jsx)(Se, { contentRef: l, descriptionId: c.descriptionId })] })] });
                }),
                De = "DialogTitle",
                Ne = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ae(De, n);
                    return (0, p.jsx)(l.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            Ne.displayName = De;
            var Re = "DialogDescription",
                Oe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ae(Re, n);
                    return (0, p.jsx)(l.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            Oe.displayName = Re;
            var Pe = "DialogClose",
                Le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ae(Pe, n);
                    return (0, p.jsx)(l.WV.button, { type: "button", ...r, ref: t, onClick: (0, s.M)(e.onClick, () => o.onOpenChange(!1)) });
                });
            function xe(e) {
                return e ? "open" : "closed";
            }
            Le.displayName = Pe;
            var Me = "DialogTitleWarning",
                [Te, _e] = (0, a.k)(Me, { contentName: ye, titleName: De, docsSlug: "dialog" }),
                We = ({ titleId: e }) => {
                    const t = _e(Me),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return (
                        o.useEffect(() => {
                            if (e) {
                                document.getElementById(e);
                            }
                        }, [n, e]),
                        null
                    );
                },
                Se = ({ contentRef: e, descriptionId: t }) => {
                    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_e("DialogDescriptionWarning").contentName}}.`;
                    return (
                        o.useEffect(() => {
                            const n = e.current?.getAttribute("aria-describedby");
                            if (t && n) {
                                document.getElementById(t);
                            }
                        }, [n, e, t]),
                        null
                    );
                },
                Fe = ue,
                Ie = le,
                je = ve,
                ke = he,
                Ae = ge,
                Be = Ne,
                Ve = Oe,
                Ue = Le;
        },
        301352: (e, t, n) => {
            n.d(t, { XB: () => m });
            var r,
                o = n(202784),
                s = n(717998),
                i = n(172714),
                a = n(262656),
                u = n(627757),
                c = n(986796),
                l = n(552322),
                d = "dismissableLayer.update",
                f = "dismissableLayer.pointerDownOutside",
                p = "dismissableLayer.focusOutside",
                v = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                m = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: m, onPointerDownOutside: h, onFocusOutside: g, onInteractOutside: b, onDismiss: w, ...C } = e,
                        D = o.useContext(v),
                        [N, R] = o.useState(null),
                        O = N?.ownerDocument ?? globalThis?.document,
                        [, P] = o.useState({}),
                        L = (0, a.e)(t, (e) => R(e)),
                        x = Array.from(D.layers),
                        [M] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1),
                        T = x.indexOf(M),
                        _ = N ? x.indexOf(N) : -1,
                        W = D.layersWithOutsidePointerEventsDisabled.size > 0,
                        S = _ >= T,
                        F = (function (e, t = globalThis?.document) {
                            const n = (0, u.W)(e),
                                r = o.useRef(!1),
                                s = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    y(f, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", s.current), (s.current = r), t.addEventListener("click", s.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", s.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...D.branches].some((e) => e.contains(t));
                            S && !n && (h?.(e), b?.(e), e.defaultPrevented || w?.());
                        }, O),
                        I = (function (e, t = globalThis?.document) {
                            const n = (0, u.W)(e),
                                r = o.useRef(!1);
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !r.current) {
                                            y(p, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...D.branches].some((e) => e.contains(t)) || (g?.(e), b?.(e), e.defaultPrevented || w?.());
                        }, O);
                    return (
                        (0, c.e)((e) => {
                            _ === D.layers.size - 1 && (m?.(e), !e.defaultPrevented && w && (e.preventDefault(), w()));
                        }, O),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    n && (0 === D.layersWithOutsidePointerEventsDisabled.size && ((r = O.body.style.pointerEvents), (O.body.style.pointerEvents = "none")), D.layersWithOutsidePointerEventsDisabled.add(N)),
                                    D.layers.add(N),
                                    E(),
                                    () => {
                                        n && 1 === D.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, O, n, D]),
                        o.useEffect(
                            () => () => {
                                N && (D.layers.delete(N), D.layersWithOutsidePointerEventsDisabled.delete(N), E());
                            },
                            [N, D],
                        ),
                        o.useEffect(() => {
                            const e = () => P({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, l.jsx)(i.WV.div, { ...C, ref: L, style: { pointerEvents: W ? (S ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, I.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, I.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, F.onPointerDownCapture) })
                    );
                });
            m.displayName = "DismissableLayer";
            var h = o.forwardRef((e, t) => {
                const n = o.useContext(v),
                    r = o.useRef(null),
                    s = (0, a.e)(t, r);
                return (
                    o.useEffect(() => {
                        const e = r.current;
                        if (e)
                            return (
                                n.branches.add(e),
                                () => {
                                    n.branches.delete(e);
                                }
                            );
                    }, [n.branches]),
                    (0, l.jsx)(i.WV.div, { ...e, ref: s })
                );
            });
            function E() {
                const e = new CustomEvent(d);
                document.dispatchEvent(e);
            }
            function y(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, i.jH)(o, s) : o.dispatchEvent(s);
            }
            h.displayName = "DismissableLayerBranch";
        },
        11861: (e, t, n) => {
            n.d(t, { EW: () => s });
            var r = n(202784),
                o = 0;
            function s() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? i()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? i()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function i() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
        22426: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(262656),
                s = n(172714),
                i = n(627757),
                a = n(552322),
                u = "focusScope.autoFocusOnMount",
                c = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: v, onUnmountAutoFocus: E, ...y } = e,
                        [g, b] = r.useState(null),
                        w = (0, i.W)(v),
                        C = (0, i.W)(E),
                        D = r.useRef(null),
                        N = (0, o.e)(t, (e) => b(e)),
                        R = r.useRef({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    r.useEffect(() => {
                        if (d) {
                            let e = function (e) {
                                    if (R.paused || !g) return;
                                    const t = e.target;
                                    g.contains(t) ? (D.current = t) : m(D.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (R.paused || !g) return;
                                    const t = e.relatedTarget;
                                    null !== t && (g.contains(t) || m(D.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && m(g);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                g && r.observe(g, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [d, g, R.paused]),
                        r.useEffect(() => {
                            if (g) {
                                h.add(R);
                                const t = document.activeElement;
                                if (!g.contains(t)) {
                                    const n = new CustomEvent(u, l);
                                    g.addEventListener(u, w),
                                        g.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(g)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && m(g));
                                }
                                return () => {
                                    g.removeEventListener(u, w),
                                        setTimeout(() => {
                                            const e = new CustomEvent(c, l);
                                            g.addEventListener(c, C), g.dispatchEvent(e), e.defaultPrevented || m(t ?? document.body, { select: !0 }), g.removeEventListener(c, C), h.remove(R);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [g, w, C, R]);
                    const O = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (R.paused) return;
                            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                r = document.activeElement;
                            if (t && r) {
                                const t = e.currentTarget,
                                    [o, s] = (function (e) {
                                        const t = f(e),
                                            n = p(t, e),
                                            r = p(t.reverse(), e);
                                        return [n, r];
                                    })(t);
                                o && s ? (e.shiftKey || r !== s ? e.shiftKey && r === o && (e.preventDefault(), n && m(s, { select: !0 })) : (e.preventDefault(), n && m(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, d, R.paused],
                    );
                    return (0, a.jsx)(s.WV.div, { tabIndex: -1, ...y, ref: N, onKeyDown: O });
                });
            function f(e) {
                const t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            const t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                        },
                    });
                for (; n.nextNode(); ) t.push(n.currentNode);
                return t;
            }
            function p(e, t) {
                for (const n of e) if (!v(n, { upTo: t })) return n;
            }
            function v(e, { upTo: t }) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e; ) {
                    if (void 0 !== t && e === t) return !1;
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement;
                }
                return !1;
            }
            function m(e, { select: t = !1 } = {}) {
                if (e && e.focus) {
                    const n = document.activeElement;
                    e.focus({ preventScroll: !0 }),
                        e !== n &&
                            (function (e) {
                                return e instanceof HTMLInputElement && "select" in e;
                            })(e) &&
                            t &&
                            e.select();
                }
            }
            d.displayName = "FocusScope";
            var h = (function () {
                let e = [];
                return {
                    add(t) {
                        const n = e[0];
                        t !== n && n?.pause(), (e = E(e, t)), e.unshift(t);
                    },
                    remove(t) {
                        (e = E(e, t)), e[0]?.resume();
                    },
                };
            })();
            function E(e, t) {
                const n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-2eb6d141.db6d8cda.js.map

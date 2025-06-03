"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62"],
    {
        549732: (e, t, n) => {
            n.d(t, { Ry: () => l });
            var r = function (e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
                },
                o = new WeakMap(),
                a = new WeakMap(),
                s = {},
                i = 0,
                u = function (e) {
                    return e && (e.host || u(e.parentNode));
                },
                c = function (e, t, n, r) {
                    var c = (function (e, t) {
                        return t
                            .map(function (t) {
                                if (e.contains(t)) return t;
                                var n = u(t);
                                return n && e.contains(n) ? n : null;
                            })
                            .filter(function (e) {
                                return Boolean(e);
                            });
                    })(t, Array.isArray(e) ? e : [e]);
                    s[n] || (s[n] = new WeakMap());
                    var l = s[n],
                        d = [],
                        f = new Set(),
                        p = new Set(c),
                        m = function (e) {
                            e && !f.has(e) && (f.add(e), m(e.parentNode));
                        };
                    c.forEach(m);
                    var v = function (e) {
                        e &&
                            !p.has(e) &&
                            Array.prototype.forEach.call(e.children, function (e) {
                                if (f.has(e)) v(e);
                                else
                                    try {
                                        var t = e.getAttribute(r),
                                            s = null !== t && "false" !== t,
                                            i = (o.get(e) || 0) + 1,
                                            u = (l.get(e) || 0) + 1;
                                        o.set(e, i), l.set(e, u), d.push(e), 1 === i && s && a.set(e, !0), 1 === u && e.setAttribute(n, "true"), s || e.setAttribute(r, "true");
                                    } catch (e) {}
                            });
                    };
                    return (
                        v(t),
                        f.clear(),
                        i++,
                        function () {
                            d.forEach(function (e) {
                                var t = o.get(e) - 1,
                                    s = l.get(e) - 1;
                                o.set(e, t), l.set(e, s), t || (a.has(e) || e.removeAttribute(r), a.delete(e)), s || e.removeAttribute(n);
                            }),
                                --i || ((o = new WeakMap()), (o = new WeakMap()), (a = new WeakMap()), (s = {}));
                        }
                    );
                },
                l = function (e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        a = t || r(e);
                    return a
                        ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), c(o, a, n, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
        250132: (e, t, n) => {
            var r;
            n.d(t, { V: () => o });
            var o = function () {
                return r || n.nc;
            };
        },
        392211: (e, t, n) => {
            n.d(t, { b: () => s, k: () => a });
            var r = n(202784),
                o = n(552322);
            function a(e, t) {
                const n = r.createContext(t),
                    a = (e) => {
                        const { children: t, ...a } = e,
                            s = r.useMemo(() => a, Object.values(a));
                        return (0, o.jsx)(n.Provider, { value: s, children: t });
                    };
                return (
                    (a.displayName = e + "Provider"),
                    [
                        a,
                        function (o) {
                            const a = r.useContext(n);
                            if (a) return a;
                            if (void 0 !== t) return t;
                            throw new Error(`\`${o}\` must be used within \`${e}\``);
                        },
                    ]
                );
            }
            function s(e, t = []) {
                let n = [];
                const a = () => {
                    const t = n.map((e) => r.createContext(e));
                    return function (n) {
                        const o = n?.[e] || t;
                        return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                    };
                };
                return (
                    (a.scopeName = e),
                    [
                        function (t, a) {
                            const s = r.createContext(a),
                                i = n.length;
                            n = [...n, a];
                            const u = (t) => {
                                const { scope: n, children: a, ...u } = t,
                                    c = n?.[e]?.[i] || s,
                                    l = r.useMemo(() => u, Object.values(u));
                                return (0, o.jsx)(c.Provider, { value: l, children: a });
                            };
                            return (
                                (u.displayName = t + "Provider"),
                                [
                                    u,
                                    function (n, o) {
                                        const u = o?.[e]?.[i] || s,
                                            c = r.useContext(u);
                                        if (c) return c;
                                        if (void 0 !== a) return a;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        i(a, ...t),
                    ]
                );
            }
            function i(...e) {
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
            n.d(t, { x8: () => Ve, VY: () => je, dk: () => Ue, aV: () => Fe, h_: () => ke, fC: () => Se, Dx: () => Be, xz: () => We });
            var r,
                o = n(202784),
                a = n(717998),
                s = n(262656),
                i = n(392211),
                u = n(23372),
                c = n(387695),
                l = n(172714),
                d = n(627757),
                f = n(986796),
                p = n(552322),
                m = "dismissableLayer.update",
                v = "dismissableLayer.pointerDownOutside",
                h = "dismissableLayer.focusOutside",
                g = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                y = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: i, onPointerDownOutside: u, onFocusOutside: c, onInteractOutside: y, onDismiss: E, ...C } = e,
                        N = o.useContext(g),
                        [D, R] = o.useState(null),
                        M = D?.ownerDocument ?? globalThis?.document,
                        [, O] = o.useState({}),
                        x = (0, s.e)(t, (e) => R(e)),
                        P = Array.from(N.layers),
                        [T] = [...N.layersWithOutsidePointerEventsDisabled].slice(-1),
                        _ = P.indexOf(T),
                        L = D ? P.indexOf(D) : -1,
                        A = N.layersWithOutsidePointerEventsDisabled.size > 0,
                        I = L >= _,
                        S = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1),
                                a = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    w(v, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", a.current), (a.current = r), t.addEventListener("click", a.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", a.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...N.branches].some((e) => e.contains(t));
                            I && !n && (u?.(e), y?.(e), e.defaultPrevented || E?.());
                        }, M),
                        W = (function (e, t = globalThis?.document) {
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
                            [...N.branches].some((e) => e.contains(t)) || (c?.(e), y?.(e), e.defaultPrevented || E?.());
                        }, M);
                    return (
                        (0, f.e)((e) => {
                            L === N.layers.size - 1 && (i?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()));
                        }, M),
                        o.useEffect(() => {
                            if (D)
                                return (
                                    n && (0 === N.layersWithOutsidePointerEventsDisabled.size && ((r = M.body.style.pointerEvents), (M.body.style.pointerEvents = "none")), N.layersWithOutsidePointerEventsDisabled.add(D)),
                                    N.layers.add(D),
                                    b(),
                                    () => {
                                        n && 1 === N.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = r);
                                    }
                                );
                        }, [D, M, n, N]),
                        o.useEffect(
                            () => () => {
                                D && (N.layers.delete(D), N.layersWithOutsidePointerEventsDisabled.delete(D), b());
                            },
                            [D, N],
                        ),
                        o.useEffect(() => {
                            const e = () => O({});
                            return document.addEventListener(m, e), () => document.removeEventListener(m, e);
                        }, []),
                        (0, p.jsx)(l.WV.div, { ...C, ref: x, style: { pointerEvents: A ? (I ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, a.M)(e.onFocusCapture, W.onFocusCapture), onBlurCapture: (0, a.M)(e.onBlurCapture, W.onBlurCapture), onPointerDownCapture: (0, a.M)(e.onPointerDownCapture, S.onPointerDownCapture) })
                    );
                });
            y.displayName = "DismissableLayer";
            var E = o.forwardRef((e, t) => {
                const n = o.useContext(g),
                    r = o.useRef(null),
                    a = (0, s.e)(t, r);
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
                    (0, p.jsx)(l.WV.div, { ...e, ref: a })
                );
            });
            function b() {
                const e = new CustomEvent(m);
                document.dispatchEvent(e);
            }
            function w(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, l.jH)(o, a) : o.dispatchEvent(a);
            }
            E.displayName = "DismissableLayerBranch";
            var C = n(22426),
                N = n(928316),
                D = n(861644),
                R = o.forwardRef((e, t) => {
                    const { container: n, ...r } = e,
                        [a, s] = o.useState(!1);
                    (0, D.b)(() => s(!0), []);
                    const i = n || (a && globalThis?.document?.body);
                    return i ? N.createPortal((0, p.jsx)(l.WV.div, { ...r, ref: t }), i) : null;
                });
            R.displayName = "Portal";
            var M = (e) => {
                const { present: t, children: n } = e,
                    r = (function (e) {
                        const [t, n] = o.useState(),
                            r = o.useRef({}),
                            a = o.useRef(e),
                            s = o.useRef("none"),
                            i = e ? "mounted" : "unmounted",
                            [u, c] = (function (e, t) {
                                return o.useReducer((e, n) => t[e][n] ?? e, e);
                            })(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            o.useEffect(() => {
                                const e = O(r.current);
                                s.current = "mounted" === u ? e : "none";
                            }, [u]),
                            (0, D.b)(() => {
                                const t = r.current,
                                    n = a.current;
                                if (n !== e) {
                                    const r = s.current,
                                        o = O(t);
                                    if (e) c("MOUNT");
                                    else if ("none" === o || "none" === t?.display) c("UNMOUNT");
                                    else {
                                        c(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    a.current = e;
                                }
                            }, [e, c]),
                            (0, D.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        o = (o) => {
                                            const s = O(r.current).includes(o.animationName);
                                            if (o.target === t && s && (c("ANIMATION_END"), !a.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        i = (e) => {
                                            e.target === t && (s.current = O(r.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", i),
                                        t.addEventListener("animationcancel", o),
                                        t.addEventListener("animationend", o),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
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
                    a = "function" == typeof n ? n({ present: r.isPresent }) : o.Children.only(n),
                    i = (0, s.e)(
                        r.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(a),
                    );
                return "function" == typeof n || r.isPresent ? o.cloneElement(a, { ref: i }) : null;
            };
            function O(e) {
                return e?.animationName || "none";
            }
            M.displayName = "Presence";
            var x = n(11861),
                P = n(305163),
                T = n(495346),
                _ = n(287359),
                L = (0, n(964597)._)(),
                A = function () {},
                I = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        r = o.useState({ onScrollCapture: A, onWheelCapture: A, onTouchMoveCapture: A }),
                        a = r[0],
                        s = r[1],
                        i = e.forwardProps,
                        u = e.children,
                        c = e.className,
                        l = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        m = e.noIsolation,
                        v = e.inert,
                        h = e.allowPinchZoom,
                        g = e.as,
                        y = void 0 === g ? "div" : g,
                        E = e.gapMode,
                        b = (0, P._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = p,
                        C = (0, _.q)([n, t]),
                        N = (0, P.pi)((0, P.pi)({}, b), a);
                    return o.createElement(o.Fragment, null, d && o.createElement(w, { sideCar: L, removeScrollBar: l, shards: f, noIsolation: m, inert: v, setCallbacks: s, allowPinchZoom: !!h, lockRef: n, gapMode: E }), i ? o.cloneElement(o.Children.only(u), (0, P.pi)((0, P.pi)({}, N), { ref: C })) : o.createElement(y, (0, P.pi)({}, N, { className: c, ref: C }), u));
                });
            (I.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (I.classNames = { fullWidth: T.zi, zeroRight: T.pF });
            var S = n(757758),
                W = n(894200),
                k = n(633097),
                F = !1;
            if ("undefined" != typeof window)
                try {
                    var j = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (F = !0), !0;
                        },
                    });
                    window.addEventListener("test", j, j), window.removeEventListener("test", j, j);
                } catch (e) {
                    F = !1;
                }
            var B = !!F && { passive: !1 },
                U = function (e, t) {
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
                V = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), $(e, r))) {
                            var o = K(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                $ = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return U(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return U(e, "overflowX");
                          })(t);
                },
                K = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                X = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                Y = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                z = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                H = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                q = 0,
                Z = [];
            function G(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const J = (0, S.L)(L, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    r = o.useRef(),
                    a = o.useState(q++)[0],
                    s = o.useState(k.Ws)[0],
                    i = o.useRef(e);
                o.useEffect(
                    function () {
                        i.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(a));
                                var t = (0, P.ev)([e.lockRef.current], (e.shards || []).map(z), !0).filter(Boolean);
                                return (
                                    t.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(a));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(a)),
                                            t.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(a));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var u = o.useCallback(function (e, t) {
                        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !i.current.allowPinchZoom;
                        var o,
                            a = X(e),
                            s = n.current,
                            u = "deltaX" in e ? e.deltaX : s[0] - a[0],
                            c = "deltaY" in e ? e.deltaY : s[1] - a[1],
                            l = e.target,
                            d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === l.type) return !1;
                        var f = V(d, l);
                        if (!f) return !0;
                        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = V(d, l))), !f)) return !1;
                        if ((!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o)) return !0;
                        var p = r.current || o;
                        return (function (e, t, n, r, o) {
                            var a = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                s = a * r,
                                i = n.target,
                                u = t.contains(i),
                                c = !1,
                                l = s > 0,
                                d = 0,
                                f = 0;
                            do {
                                var p = K(e, i),
                                    m = p[0],
                                    v = p[1] - p[2] - a * m;
                                (m || v) && $(e, i) && ((d += v), (f += m)), (i = i instanceof ShadowRoot ? i.host : i.parentNode);
                            } while ((!u && i !== document.body) || (u && (t.contains(i) || t === i)));
                            return ((l && ((o && Math.abs(d) < 1) || (!o && s > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -s > f)))) && (c = !0), c;
                        })(p, t, e, "h" === p ? u : c, !0);
                    }, []),
                    c = o.useCallback(function (e) {
                        var n = e;
                        if (Z.length && Z[Z.length - 1] === s) {
                            var r = "deltaY" in n ? Y(n) : X(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var a = (i.current.shards || [])
                                    .map(z)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (a.length > 0 ? u(n, a[0]) : !i.current.noIsolation) && n.cancelable && n.preventDefault();
                            }
                        }
                    }, []),
                    l = o.useCallback(function (e, n, r, o) {
                        var a = { name: e, delta: n, target: r, should: o, shadowParent: G(r) };
                        t.current.push(a),
                            setTimeout(function () {
                                t.current = t.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    d = o.useCallback(function (e) {
                        (n.current = X(e)), (r.current = void 0);
                    }, []),
                    f = o.useCallback(function (t) {
                        l(t.type, Y(t), t.target, u(t, e.lockRef.current));
                    }, []),
                    p = o.useCallback(function (t) {
                        l(t.type, X(t), t.target, u(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        Z.push(s),
                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                        document.addEventListener("wheel", c, B),
                        document.addEventListener("touchmove", c, B),
                        document.addEventListener("touchstart", d, B),
                        function () {
                            (Z = Z.filter(function (e) {
                                return e !== s;
                            })),
                                document.removeEventListener("wheel", c, B),
                                document.removeEventListener("touchmove", c, B),
                                document.removeEventListener("touchstart", d, B);
                        }
                    );
                }, []);
                var m = e.removeScrollBar,
                    v = e.inert;
                return o.createElement(o.Fragment, null, v ? o.createElement(s, { styles: H(a) }) : null, m ? o.createElement(W.jp, { gapMode: e.gapMode }) : null);
            });
            var Q = o.forwardRef(function (e, t) {
                return o.createElement(I, (0, P.pi)({}, e, { ref: t, sideCar: J }));
            });
            Q.classNames = I.classNames;
            const ee = Q;
            var te = n(549732),
                ne = n(549815),
                re = "Dialog",
                [oe, ae] = (0, i.b)(re),
                [se, ie] = oe(re),
                ue = (e) => {
                    const { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e,
                        l = o.useRef(null),
                        d = o.useRef(null),
                        [f = !1, m] = (0, c.T)({ prop: r, defaultProp: a, onChange: s });
                    return (0, p.jsx)(se, { scope: t, triggerRef: l, contentRef: d, contentId: (0, u.M)(), titleId: (0, u.M)(), descriptionId: (0, u.M)(), open: f, onOpenChange: m, onOpenToggle: o.useCallback(() => m((e) => !e), [m]), modal: i, children: n });
                };
            ue.displayName = re;
            var ce = "DialogTrigger",
                le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(ce, n),
                        i = (0, s.e)(t, o.triggerRef);
                    return (0, p.jsx)(l.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": Pe(o.open), ...r, ref: i, onClick: (0, a.M)(e.onClick, o.onOpenToggle) });
                });
            le.displayName = ce;
            var de = "DialogPortal",
                [fe, pe] = oe(de, { forceMount: void 0 }),
                me = (e) => {
                    const { __scopeDialog: t, forceMount: n, children: r, container: a } = e,
                        s = ie(de, t);
                    return (0, p.jsx)(fe, { scope: t, forceMount: n, children: o.Children.map(r, (e) => (0, p.jsx)(M, { present: n || s.open, children: (0, p.jsx)(R, { asChild: !0, container: a, children: e }) })) });
                };
            me.displayName = de;
            var ve = "DialogOverlay",
                he = o.forwardRef((e, t) => {
                    const n = pe(ve, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = ie(ve, e.__scopeDialog);
                    return a.modal ? (0, p.jsx)(M, { present: r || a.open, children: (0, p.jsx)(ge, { ...o, ref: t }) }) : null;
                });
            he.displayName = ve;
            var ge = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(ve, n);
                    return (0, p.jsx)(ee, { as: ne.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, p.jsx)(l.WV.div, { "data-state": Pe(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                ye = "DialogContent",
                Ee = o.forwardRef((e, t) => {
                    const n = pe(ye, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = ie(ye, e.__scopeDialog);
                    return (0, p.jsx)(M, { present: r || a.open, children: a.modal ? (0, p.jsx)(be, { ...o, ref: t }) : (0, p.jsx)(we, { ...o, ref: t }) });
                });
            Ee.displayName = ye;
            var be = o.forwardRef((e, t) => {
                    const n = ie(ye, e.__scopeDialog),
                        r = o.useRef(null),
                        i = (0, s.e)(t, n.contentRef, r);
                    return (
                        o.useEffect(() => {
                            const e = r.current;
                            if (e) return (0, te.Ry)(e);
                        }, []),
                        (0, p.jsx)(Ce, {
                            ...e,
                            ref: i,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                                e.preventDefault(), n.triggerRef.current?.focus();
                            }),
                            onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                                const t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                (2 === t.button || n) && e.preventDefault();
                            }),
                            onFocusOutside: (0, a.M)(e.onFocusOutside, (e) => e.preventDefault()),
                        })
                    );
                }),
                we = o.forwardRef((e, t) => {
                    const n = ie(ye, e.__scopeDialog),
                        r = o.useRef(!1),
                        a = o.useRef(!1);
                    return (0, p.jsx)(Ce, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), (r.current = !1), (a.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((r.current = !0), "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
                            const o = t.target,
                                s = n.triggerRef.current?.contains(o);
                            s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault();
                        },
                    });
                }),
                Ce = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, ...u } = e,
                        c = ie(ye, n),
                        l = o.useRef(null),
                        d = (0, s.e)(t, l);
                    return (0, x.EW)(), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(C.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: a, onUnmountAutoFocus: i, children: (0, p.jsx)(y, { role: "dialog", id: c.contentId, "aria-describedby": c.descriptionId, "aria-labelledby": c.titleId, "data-state": Pe(c.open), ...u, ref: d, onDismiss: () => c.onOpenChange(!1) }) }), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(Ae, { titleId: c.titleId }), (0, p.jsx)(Ie, { contentRef: l, descriptionId: c.descriptionId })] })] });
                }),
                Ne = "DialogTitle",
                De = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Ne, n);
                    return (0, p.jsx)(l.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            De.displayName = Ne;
            var Re = "DialogDescription",
                Me = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Re, n);
                    return (0, p.jsx)(l.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            Me.displayName = Re;
            var Oe = "DialogClose",
                xe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Oe, n);
                    return (0, p.jsx)(l.WV.button, { type: "button", ...r, ref: t, onClick: (0, a.M)(e.onClick, () => o.onOpenChange(!1)) });
                });
            function Pe(e) {
                return e ? "open" : "closed";
            }
            xe.displayName = Oe;
            var Te = "DialogTitleWarning",
                [_e, Le] = (0, i.k)(Te, { contentName: ye, titleName: Ne, docsSlug: "dialog" }),
                Ae = ({ titleId: e }) => {
                    const t = Le(Te),
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
                Ie = ({ contentRef: e, descriptionId: t }) => {
                    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Le("DialogDescriptionWarning").contentName}}.`;
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
                Se = ue,
                We = le,
                ke = me,
                Fe = he,
                je = Ee,
                Be = De,
                Ue = Me,
                Ve = xe;
        },
        11861: (e, t, n) => {
            n.d(t, { EW: () => a });
            var r = n(202784),
                o = 0;
            function a() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? s()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? s()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function s() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
        22426: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(262656),
                a = n(172714),
                s = n(627757),
                i = n(552322),
                u = "focusScope.autoFocusOnMount",
                c = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: m, onUnmountAutoFocus: g, ...y } = e,
                        [E, b] = r.useState(null),
                        w = (0, s.W)(m),
                        C = (0, s.W)(g),
                        N = r.useRef(null),
                        D = (0, o.e)(t, (e) => b(e)),
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
                                    if (R.paused || !E) return;
                                    const t = e.target;
                                    E.contains(t) ? (N.current = t) : v(N.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (R.paused || !E) return;
                                    const t = e.relatedTarget;
                                    null !== t && (E.contains(t) || v(N.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && v(E);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                E && r.observe(E, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [d, E, R.paused]),
                        r.useEffect(() => {
                            if (E) {
                                h.add(R);
                                const t = document.activeElement;
                                if (!E.contains(t)) {
                                    const n = new CustomEvent(u, l);
                                    E.addEventListener(u, w),
                                        E.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((v(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(E)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && v(E));
                                }
                                return () => {
                                    E.removeEventListener(u, w),
                                        setTimeout(() => {
                                            const e = new CustomEvent(c, l);
                                            E.addEventListener(c, C), E.dispatchEvent(e), e.defaultPrevented || v(t ?? document.body, { select: !0 }), E.removeEventListener(c, C), h.remove(R);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [E, w, C, R]);
                    const M = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (R.paused) return;
                            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                r = document.activeElement;
                            if (t && r) {
                                const t = e.currentTarget,
                                    [o, a] = (function (e) {
                                        const t = f(e),
                                            n = p(t, e),
                                            r = p(t.reverse(), e);
                                        return [n, r];
                                    })(t);
                                o && a ? (e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), n && v(a, { select: !0 })) : (e.preventDefault(), n && v(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, d, R.paused],
                    );
                    return (0, i.jsx)(a.WV.div, { tabIndex: -1, ...y, ref: D, onKeyDown: M });
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
                for (const n of e) if (!m(n, { upTo: t })) return n;
            }
            function m(e, { upTo: t }) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e; ) {
                    if (void 0 !== t && e === t) return !1;
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement;
                }
                return !1;
            }
            function v(e, { select: t = !1 } = {}) {
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
                        t !== n && n?.pause(), (e = g(e, t)), e.unshift(t);
                    },
                    remove(t) {
                        (e = g(e, t)), e[0]?.resume();
                    },
                };
            })();
            function g(e, t) {
                const n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62.0839e8ca.js.map

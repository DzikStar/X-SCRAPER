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
                s = new WeakMap(),
                a = {},
                i = 0,
                c = function (e) {
                    return e && (e.host || c(e.parentNode));
                },
                u = function (e, t, n, r) {
                    var u = (function (e, t) {
                        return t
                            .map(function (t) {
                                if (e.contains(t)) return t;
                                var n = c(t);
                                return n && e.contains(n) ? n : null;
                            })
                            .filter(function (e) {
                                return Boolean(e);
                            });
                    })(t, Array.isArray(e) ? e : [e]);
                    a[n] || (a[n] = new WeakMap());
                    var l = a[n],
                        d = [],
                        f = new Set(),
                        p = new Set(u),
                        v = function (e) {
                            e && !f.has(e) && (f.add(e), v(e.parentNode));
                        };
                    u.forEach(v);
                    var m = function (e) {
                        e &&
                            !p.has(e) &&
                            Array.prototype.forEach.call(e.children, function (e) {
                                if (f.has(e)) m(e);
                                else
                                    try {
                                        var t = e.getAttribute(r),
                                            a = null !== t && "false" !== t,
                                            i = (o.get(e) || 0) + 1,
                                            c = (l.get(e) || 0) + 1;
                                        o.set(e, i), l.set(e, c), d.push(e), 1 === i && a && s.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(r, "true");
                                    } catch (e) {}
                            });
                    };
                    return (
                        m(t),
                        f.clear(),
                        i++,
                        function () {
                            d.forEach(function (e) {
                                var t = o.get(e) - 1,
                                    a = l.get(e) - 1;
                                o.set(e, t), l.set(e, a), t || (s.has(e) || e.removeAttribute(r), s.delete(e)), a || e.removeAttribute(n);
                            }),
                                --i || ((o = new WeakMap()), (o = new WeakMap()), (s = new WeakMap()), (a = {}));
                        }
                    );
                },
                l = function (e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        s = t || r(e);
                    return s
                        ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live]"))), u(o, s, n, "aria-hidden"))
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
            n.d(t, { b: () => a, k: () => s });
            var r = n(202784),
                o = n(552322);
            function s(e, t) {
                const n = r.createContext(t),
                    s = (e) => {
                        const { children: t, ...s } = e,
                            a = r.useMemo(() => s, Object.values(s));
                        return (0, o.jsx)(n.Provider, { value: a, children: t });
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
            function a(e, t = []) {
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
                            const a = r.createContext(s),
                                i = n.length;
                            n = [...n, s];
                            const c = (t) => {
                                const { scope: n, children: s, ...c } = t,
                                    u = n?.[e]?.[i] || a,
                                    l = r.useMemo(() => c, Object.values(c));
                                return (0, o.jsx)(u.Provider, { value: l, children: s });
                            };
                            return (
                                (c.displayName = t + "Provider"),
                                [
                                    c,
                                    function (n, o) {
                                        const c = o?.[e]?.[i] || a,
                                            u = r.useContext(c);
                                        if (u) return u;
                                        if (void 0 !== s) return s;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        i(s, ...t),
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
            n.d(t, { x8: () => Be, VY: () => We, dk: () => $e, aV: () => Le, h_: () => Se, fC: () => Ie, Dx: () => Ve, xz: () => ke });
            var r,
                o = n(202784),
                s = n(717998),
                a = n(262656),
                i = n(392211),
                c = n(23372),
                u = n(387695),
                l = n(172714),
                d = n(627757),
                f = n(986796),
                p = n(552322),
                v = "dismissableLayer.update",
                m = "dismissableLayer.pointerDownOutside",
                h = "dismissableLayer.focusOutside",
                g = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                y = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: u, onInteractOutside: y, onDismiss: b, ...C } = e,
                        x = o.useContext(g),
                        [N, P] = o.useState(null),
                        R = N?.ownerDocument ?? globalThis?.document,
                        [, D] = o.useState({}),
                        O = (0, a.e)(t, (e) => P(e)),
                        _ = Array.from(x.layers),
                        [M] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
                        A = _.indexOf(M),
                        j = N ? _.indexOf(N) : -1,
                        T = x.layersWithOutsidePointerEventsDisabled.size > 0,
                        F = j >= A,
                        I = (function (e, t = globalThis?.document) {
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
                                n = [...x.branches].some((e) => e.contains(t));
                            F && !n && (c?.(e), y?.(e), e.defaultPrevented || b?.());
                        }, R),
                        k = (function (e, t = globalThis?.document) {
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
                            [...x.branches].some((e) => e.contains(t)) || (u?.(e), y?.(e), e.defaultPrevented || b?.());
                        }, R);
                    return (
                        (0, f.e)((e) => {
                            j === x.layers.size - 1 && (i?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()));
                        }, R),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    n && (0 === x.layersWithOutsidePointerEventsDisabled.size && ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = "none")), x.layersWithOutsidePointerEventsDisabled.add(N)),
                                    x.layers.add(N),
                                    E(),
                                    () => {
                                        n && 1 === x.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, R, n, x]),
                        o.useEffect(
                            () => () => {
                                N && (x.layers.delete(N), x.layersWithOutsidePointerEventsDisabled.delete(N), E());
                            },
                            [N, x],
                        ),
                        o.useEffect(() => {
                            const e = () => D({});
                            return document.addEventListener(v, e), () => document.removeEventListener(v, e);
                        }, []),
                        (0, p.jsx)(l.WV.div, { ...C, ref: O, style: { pointerEvents: T ? (F ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, k.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, k.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, I.onPointerDownCapture) })
                    );
                });
            y.displayName = "DismissableLayer";
            var b = o.forwardRef((e, t) => {
                const n = o.useContext(g),
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
                    (0, p.jsx)(l.WV.div, { ...e, ref: s })
                );
            });
            function E() {
                const e = new CustomEvent(v);
                document.dispatchEvent(e);
            }
            function w(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, l.jH)(o, s) : o.dispatchEvent(s);
            }
            b.displayName = "DismissableLayerBranch";
            var C = n(22426),
                x = n(928316),
                N = n(861644),
                P = o.forwardRef((e, t) => {
                    const { container: n, ...r } = e,
                        [s, a] = o.useState(!1);
                    (0, N.b)(() => a(!0), []);
                    const i = n || (s && globalThis?.document?.body);
                    return i ? x.createPortal((0, p.jsx)(l.WV.div, { ...r, ref: t }), i) : null;
                });
            P.displayName = "Portal";
            var R = (e) => {
                const { present: t, children: n } = e,
                    r = (function (e) {
                        const [t, n] = o.useState(),
                            r = o.useRef({}),
                            s = o.useRef(e),
                            a = o.useRef("none"),
                            i = e ? "mounted" : "unmounted",
                            [c, u] = (function (e, t) {
                                return o.useReducer((e, n) => t[e][n] ?? e, e);
                            })(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            o.useEffect(() => {
                                const e = D(r.current);
                                a.current = "mounted" === c ? e : "none";
                            }, [c]),
                            (0, N.b)(() => {
                                const t = r.current,
                                    n = s.current;
                                if (n !== e) {
                                    const r = a.current,
                                        o = D(t);
                                    if (e) u("MOUNT");
                                    else if ("none" === o || "none" === t?.display) u("UNMOUNT");
                                    else {
                                        u(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    s.current = e;
                                }
                            }, [e, u]),
                            (0, N.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        o = (o) => {
                                            const a = D(r.current).includes(o.animationName);
                                            if (o.target === t && a && (u("ANIMATION_END"), !s.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        i = (e) => {
                                            e.target === t && (a.current = D(r.current));
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
                                u("ANIMATION_END");
                            }, [t, u]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(c),
                                ref: o.useCallback((e) => {
                                    e && (r.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    s = "function" == typeof n ? n({ present: r.isPresent }) : o.Children.only(n),
                    i = (0, a.e)(
                        r.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(s),
                    );
                return "function" == typeof n || r.isPresent ? o.cloneElement(s, { ref: i }) : null;
            };
            function D(e) {
                return e?.animationName || "none";
            }
            R.displayName = "Presence";
            var O = n(11861),
                _ = n(305163),
                M = n(495346),
                A = n(287359),
                j = (0, n(964597)._)(),
                T = function () {},
                F = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        r = o.useState({ onScrollCapture: T, onWheelCapture: T, onTouchMoveCapture: T }),
                        s = r[0],
                        a = r[1],
                        i = e.forwardProps,
                        c = e.children,
                        u = e.className,
                        l = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        p = e.sideCar,
                        v = e.noIsolation,
                        m = e.inert,
                        h = e.allowPinchZoom,
                        g = e.as,
                        y = void 0 === g ? "div" : g,
                        b = e.gapMode,
                        E = (0, _._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = p,
                        C = (0, A.q)([n, t]),
                        x = (0, _.pi)((0, _.pi)({}, E), s);
                    return o.createElement(o.Fragment, null, d && o.createElement(w, { sideCar: j, removeScrollBar: l, shards: f, noIsolation: v, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: n, gapMode: b }), i ? o.cloneElement(o.Children.only(c), (0, _.pi)((0, _.pi)({}, x), { ref: C })) : o.createElement(y, (0, _.pi)({}, x, { className: u, ref: C }), c));
                });
            (F.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (F.classNames = { fullWidth: M.zi, zeroRight: M.pF });
            var I = n(757758),
                k = n(894200),
                S = n(633097),
                L = !1;
            if ("undefined" != typeof window)
                try {
                    var W = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (L = !0), !0;
                        },
                    });
                    window.addEventListener("test", W, W), window.removeEventListener("test", W, W);
                } catch (e) {
                    L = !1;
                }
            var V = !!L && { passive: !1 },
                $ = function (e, t) {
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
                B = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), U(e, r))) {
                            var o = K(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                U = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return $(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return $(e, "overflowX");
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
                z = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                Y = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                X = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                q = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                Z = 0,
                H = [];
            function G(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const J = (0, I.L)(j, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    r = o.useRef(),
                    s = o.useState(Z++)[0],
                    a = o.useState(S.Ws)[0],
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
                                document.body.classList.add("block-interactivity-".concat(s));
                                var t = (0, _.ev)([e.lockRef.current], (e.shards || []).map(X), !0).filter(Boolean);
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
                var c = o.useCallback(function (e, t) {
                        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !i.current.allowPinchZoom;
                        var o,
                            s = z(e),
                            a = n.current,
                            c = "deltaX" in e ? e.deltaX : a[0] - s[0],
                            u = "deltaY" in e ? e.deltaY : a[1] - s[1],
                            l = e.target,
                            d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === l.type) return !1;
                        var f = B(d, l);
                        if (!f) return !0;
                        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = B(d, l))), !f)) return !1;
                        if ((!r.current && "changedTouches" in e && (c || u) && (r.current = o), !o)) return !0;
                        var p = r.current || o;
                        return (function (e, t, n, r, o) {
                            var s = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                a = s * r,
                                i = n.target,
                                c = t.contains(i),
                                u = !1,
                                l = a > 0,
                                d = 0,
                                f = 0;
                            do {
                                var p = K(e, i),
                                    v = p[0],
                                    m = p[1] - p[2] - s * v;
                                (v || m) && U(e, i) && ((d += m), (f += v)), (i = i instanceof ShadowRoot ? i.host : i.parentNode);
                            } while ((!c && i !== document.body) || (c && (t.contains(i) || t === i)));
                            return ((l && ((o && Math.abs(d) < 1) || (!o && a > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -a > f)))) && (u = !0), u;
                        })(p, t, e, "h" === p ? c : u, !0);
                    }, []),
                    u = o.useCallback(function (e) {
                        var n = e;
                        if (H.length && H[H.length - 1] === a) {
                            var r = "deltaY" in n ? Y(n) : z(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var s = (i.current.shards || [])
                                    .map(X)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (s.length > 0 ? c(n, s[0]) : !i.current.noIsolation) && n.cancelable && n.preventDefault();
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
                        l(t.type, Y(t), t.target, c(t, e.lockRef.current));
                    }, []),
                    p = o.useCallback(function (t) {
                        l(t.type, z(t), t.target, c(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        H.push(a),
                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                        document.addEventListener("wheel", u, V),
                        document.addEventListener("touchmove", u, V),
                        document.addEventListener("touchstart", d, V),
                        function () {
                            (H = H.filter(function (e) {
                                return e !== a;
                            })),
                                document.removeEventListener("wheel", u, V),
                                document.removeEventListener("touchmove", u, V),
                                document.removeEventListener("touchstart", d, V);
                        }
                    );
                }, []);
                var v = e.removeScrollBar,
                    m = e.inert;
                return o.createElement(o.Fragment, null, m ? o.createElement(a, { styles: q(s) }) : null, v ? o.createElement(k.jp, { gapMode: e.gapMode }) : null);
            });
            var Q = o.forwardRef(function (e, t) {
                return o.createElement(F, (0, _.pi)({}, e, { ref: t, sideCar: J }));
            });
            Q.classNames = F.classNames;
            const ee = Q;
            var te = n(549732),
                ne = n(549815),
                re = "Dialog",
                [oe, se] = (0, i.b)(re),
                [ae, ie] = oe(re),
                ce = (e) => {
                    const { __scopeDialog: t, children: n, open: r, defaultOpen: s, onOpenChange: a, modal: i = !0 } = e,
                        l = o.useRef(null),
                        d = o.useRef(null),
                        [f = !1, v] = (0, u.T)({ prop: r, defaultProp: s, onChange: a });
                    return (0, p.jsx)(ae, { scope: t, triggerRef: l, contentRef: d, contentId: (0, c.M)(), titleId: (0, c.M)(), descriptionId: (0, c.M)(), open: f, onOpenChange: v, onOpenToggle: o.useCallback(() => v((e) => !e), [v]), modal: i, children: n });
                };
            ce.displayName = re;
            var ue = "DialogTrigger",
                le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(ue, n),
                        i = (0, a.e)(t, o.triggerRef);
                    return (0, p.jsx)(l.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": _e(o.open), ...r, ref: i, onClick: (0, s.M)(e.onClick, o.onOpenToggle) });
                });
            le.displayName = ue;
            var de = "DialogPortal",
                [fe, pe] = oe(de, { forceMount: void 0 }),
                ve = (e) => {
                    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
                        a = ie(de, t);
                    return (0, p.jsx)(fe, { scope: t, forceMount: n, children: o.Children.map(r, (e) => (0, p.jsx)(R, { present: n || a.open, children: (0, p.jsx)(P, { asChild: !0, container: s, children: e }) })) });
                };
            ve.displayName = de;
            var me = "DialogOverlay",
                he = o.forwardRef((e, t) => {
                    const n = pe(me, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ie(me, e.__scopeDialog);
                    return s.modal ? (0, p.jsx)(R, { present: r || s.open, children: (0, p.jsx)(ge, { ...o, ref: t }) }) : null;
                });
            he.displayName = me;
            var ge = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(me, n);
                    return (0, p.jsx)(ee, { as: ne.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, p.jsx)(l.WV.div, { "data-state": _e(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                ye = "DialogContent",
                be = o.forwardRef((e, t) => {
                    const n = pe(ye, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = ie(ye, e.__scopeDialog);
                    return (0, p.jsx)(R, { present: r || s.open, children: s.modal ? (0, p.jsx)(Ee, { ...o, ref: t }) : (0, p.jsx)(we, { ...o, ref: t }) });
                });
            be.displayName = ye;
            var Ee = o.forwardRef((e, t) => {
                    const n = ie(ye, e.__scopeDialog),
                        r = o.useRef(null),
                        i = (0, a.e)(t, n.contentRef, r);
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
                    const n = ie(ye, e.__scopeDialog),
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
                                a = n.triggerRef.current?.contains(o);
                            a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault();
                        },
                    });
                }),
                Ce = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: i, ...c } = e,
                        u = ie(ye, n),
                        l = o.useRef(null),
                        d = (0, a.e)(t, l);
                    return (0, O.EW)(), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(C.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: s, onUnmountAutoFocus: i, children: (0, p.jsx)(y, { role: "dialog", id: u.contentId, "aria-describedby": u.descriptionId, "aria-labelledby": u.titleId, "data-state": _e(u.open), ...c, ref: d, onDismiss: () => u.onOpenChange(!1) }) }), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(Te, { titleId: u.titleId }), (0, p.jsx)(Fe, { contentRef: l, descriptionId: u.descriptionId })] })] });
                }),
                xe = "DialogTitle",
                Ne = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(xe, n);
                    return (0, p.jsx)(l.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            Ne.displayName = xe;
            var Pe = "DialogDescription",
                Re = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(Pe, n);
                    return (0, p.jsx)(l.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            Re.displayName = Pe;
            var De = "DialogClose",
                Oe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ie(De, n);
                    return (0, p.jsx)(l.WV.button, { type: "button", ...r, ref: t, onClick: (0, s.M)(e.onClick, () => o.onOpenChange(!1)) });
                });
            function _e(e) {
                return e ? "open" : "closed";
            }
            Oe.displayName = De;
            var Me = "DialogTitleWarning",
                [Ae, je] = (0, i.k)(Me, { contentName: ye, titleName: xe, docsSlug: "dialog" }),
                Te = ({ titleId: e }) => {
                    const t = je(Me),
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
                Fe = ({ contentRef: e, descriptionId: t }) => {
                    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${je("DialogDescriptionWarning").contentName}}.`;
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
                Ie = ce,
                ke = le,
                Se = ve,
                Le = he,
                We = be,
                Ve = Ne,
                $e = Re,
                Be = Oe;
        },
        11861: (e, t, n) => {
            n.d(t, { EW: () => s });
            var r = n(202784),
                o = 0;
            function s() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? a()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? a()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function a() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
        22426: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(262656),
                s = n(172714),
                a = n(627757),
                i = n(552322),
                c = "focusScope.autoFocusOnMount",
                u = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
                        [b, E] = r.useState(null),
                        w = (0, a.W)(v),
                        C = (0, a.W)(g),
                        x = r.useRef(null),
                        N = (0, o.e)(t, (e) => E(e)),
                        P = r.useRef({
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
                                    if (P.paused || !b) return;
                                    const t = e.target;
                                    b.contains(t) ? (x.current = t) : m(x.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (P.paused || !b) return;
                                    const t = e.relatedTarget;
                                    null !== t && (b.contains(t) || m(x.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && m(b);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                b && r.observe(b, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [d, b, P.paused]),
                        r.useEffect(() => {
                            if (b) {
                                h.add(P);
                                const t = document.activeElement;
                                if (!b.contains(t)) {
                                    const n = new CustomEvent(c, l);
                                    b.addEventListener(c, w),
                                        b.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(b)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && m(b));
                                }
                                return () => {
                                    b.removeEventListener(c, w),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, l);
                                            b.addEventListener(u, C), b.dispatchEvent(e), e.defaultPrevented || m(t ?? document.body, { select: !0 }), b.removeEventListener(u, C), h.remove(P);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [b, w, C, P]);
                    const R = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (P.paused) return;
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
                        [n, d, P.paused],
                    );
                    return (0, i.jsx)(s.WV.div, { tabIndex: -1, ...y, ref: N, onKeyDown: R });
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
        927382: (e, t, n) => {
            n.d(t, { Eh: () => H, VY: () => Z, h_: () => q, fC: () => Y, xz: () => X });
            var r = n(202784),
                o = n(717998),
                s = n(262656),
                a = n(552322);
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
            var c = n(301352),
                u = 0;
            function l() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? d()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? d()),
                        u++,
                        () => {
                            1 === u && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), u--;
                        }
                    );
                }, []);
            }
            function d() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var f = n(22426),
                p = n(23372),
                v = n(215828),
                m = n(408149),
                h = n(379616),
                g = n(172714),
                y = n(549815),
                b = n(387695),
                E = n(549732),
                w = n(234413),
                C = "Popover",
                [x, N] = (function (e, t = []) {
                    let n = [];
                    const o = () => {
                        const t = n.map((e) => r.createContext(e));
                        return function (n) {
                            const o = n?.[e] || t;
                            return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                        };
                    };
                    return (
                        (o.scopeName = e),
                        [
                            function (t, o) {
                                const s = r.createContext(o),
                                    i = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        u = n?.[e][i] || s,
                                        l = r.useMemo(() => c, Object.values(c));
                                    return (0, a.jsx)(u.Provider, { value: l, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, a) {
                                            const c = a?.[e][i] || s,
                                                u = r.useContext(c);
                                            if (u) return u;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            i(o, ...t),
                        ]
                    );
                })(C, [v.D7]),
                P = (0, v.D7)(),
                [R, D] = x(C),
                O = (e) => {
                    const { __scopePopover: t, children: n, open: o, defaultOpen: s, onOpenChange: i, modal: c = !1 } = e,
                        u = P(t),
                        l = r.useRef(null),
                        [d, f] = r.useState(!1),
                        [m = !1, h] = (0, b.T)({ prop: o, defaultProp: s, onChange: i });
                    return (0, a.jsx)(v.fC, { ...u, children: (0, a.jsx)(R, { scope: t, contentId: (0, p.M)(), triggerRef: l, open: m, onOpenChange: h, onOpenToggle: r.useCallback(() => h((e) => !e), [h]), hasCustomAnchor: d, onCustomAnchorAdd: r.useCallback(() => f(!0), []), onCustomAnchorRemove: r.useCallback(() => f(!1), []), modal: c, children: n }) });
                };
            O.displayName = C;
            var _ = "PopoverAnchor",
                M = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...o } = e,
                        s = D(_, n),
                        i = P(n),
                        { onCustomAnchorAdd: c, onCustomAnchorRemove: u } = s;
                    return r.useEffect(() => (c(), () => u()), [c, u]), (0, a.jsx)(v.ee, { ...i, ...o, ref: t });
                });
            M.displayName = _;
            var A = "PopoverTrigger",
                j = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        i = D(A, n),
                        c = P(n),
                        u = (0, s.e)(t, i.triggerRef),
                        l = (0, a.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i.open, "aria-controls": i.contentId, "data-state": z(i.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, i.onOpenToggle) });
                    return i.hasCustomAnchor ? l : (0, a.jsx)(v.ee, { asChild: !0, ...c, children: l });
                });
            j.displayName = A;
            var T = "PopoverPortal",
                [F, I] = x(T, { forceMount: void 0 }),
                k = (e) => {
                    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        s = D(T, t);
                    return (0, a.jsx)(F, { scope: t, forceMount: n, children: (0, a.jsx)(h.z, { present: n || s.open, children: (0, a.jsx)(m.h, { asChild: !0, container: o, children: r }) }) });
                };
            k.displayName = T;
            var S = "PopoverContent",
                L = r.forwardRef((e, t) => {
                    const n = I(S, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = D(S, e.__scopePopover);
                    return (0, a.jsx)(h.z, { present: r || s.open, children: s.modal ? (0, a.jsx)(W, { ...o, ref: t }) : (0, a.jsx)(V, { ...o, ref: t }) });
                });
            L.displayName = S;
            var W = r.forwardRef((e, t) => {
                    const n = D(S, e.__scopePopover),
                        i = r.useRef(null),
                        c = (0, s.e)(t, i),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            const e = i.current;
                            if (e) return (0, E.Ry)(e);
                        }, []),
                        (0, a.jsx)(w.Z, {
                            as: y.g7,
                            allowPinchZoom: !0,
                            children: (0, a.jsx)($, {
                                ...e,
                                ref: c,
                                trapFocus: n.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                                    e.preventDefault(), u.current || n.triggerRef.current?.focus();
                                }),
                                onPointerDownOutside: (0, o.M)(
                                    e.onPointerDownOutside,
                                    (e) => {
                                        const t = e.detail.originalEvent,
                                            n = 0 === t.button && !0 === t.ctrlKey,
                                            r = 2 === t.button || n;
                                        u.current = r;
                                    },
                                    { checkForDefaultPrevented: !1 },
                                ),
                                onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
                            }),
                        })
                    );
                }),
                V = r.forwardRef((e, t) => {
                    const n = D(S, e.__scopePopover),
                        o = r.useRef(!1),
                        s = r.useRef(!1);
                    return (0, a.jsx)($, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), (o.current = !1), (s.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((o.current = !0), "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
                            const r = t.target,
                                a = n.triggerRef.current?.contains(r);
                            a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault();
                        },
                    });
                }),
                $ = r.forwardRef((e, t) => {
                    const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: p, onInteractOutside: m, ...h } = e,
                        g = D(S, n),
                        y = P(n);
                    return l(), (0, a.jsx)(f.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: s, children: (0, a.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: i, onInteractOutside: m, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: p, onDismiss: () => g.onOpenChange(!1), children: (0, a.jsx)(v.VY, { "data-state": z(g.open), role: "dialog", id: g.contentId, ...y, ...h, ref: t, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                B = "PopoverClose",
                U = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        s = D(B, n);
                    return (0, a.jsx)(g.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => s.onOpenChange(!1)) });
                });
            U.displayName = B;
            var K = r.forwardRef((e, t) => {
                const { __scopePopover: n, ...r } = e,
                    o = P(n);
                return (0, a.jsx)(v.Eh, { ...o, ...r, ref: t });
            });
            function z(e) {
                return e ? "open" : "closed";
            }
            K.displayName = "PopoverArrow";
            var Y = O,
                X = j,
                q = k,
                Z = L,
                H = K;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62.6307052a.js.map

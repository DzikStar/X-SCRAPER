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
                c = 0,
                i = function (e) {
                    return e && (e.host || i(e.parentNode));
                },
                u = function (e, t, n, r) {
                    var u = (function (e, t) {
                        return t
                            .map(function (t) {
                                if (e.contains(t)) return t;
                                var n = i(t);
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
                                            s = null !== t && "false" !== t,
                                            c = (o.get(e) || 0) + 1,
                                            i = (l.get(e) || 0) + 1;
                                        o.set(e, c), l.set(e, i), d.push(e), 1 === c && s && a.set(e, !0), 1 === i && e.setAttribute(n, "true"), s || e.setAttribute(r, "true");
                                    } catch (e) {}
                            });
                    };
                    return (
                        m(t),
                        f.clear(),
                        c++,
                        function () {
                            d.forEach(function (e) {
                                var t = o.get(e) - 1,
                                    s = l.get(e) - 1;
                                o.set(e, t), l.set(e, s), t || (a.has(e) || e.removeAttribute(r), a.delete(e)), s || e.removeAttribute(n);
                            }),
                                --c || ((o = new WeakMap()), (o = new WeakMap()), (a = new WeakMap()), (s = {}));
                        }
                    );
                },
                l = function (e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        a = t || r(e);
                    return a
                        ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), u(o, a, n, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
        482609: (e) => {
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = (function (e, t) {
                                var n = e[1] || "",
                                    r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = ((s = r), (c = btoa(unescape(encodeURIComponent(JSON.stringify(s))))), (i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(i, " */")),
                                        a = r.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                        });
                                    return [n].concat(a).concat([o]).join("\n");
                                }
                                var s, c, i;
                                return [n].join("\n");
                            })(t, e);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (t.i = function (e, n, r) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (r)
                            for (var a = 0; a < this.length; a++) {
                                var s = this[a][0];
                                null != s && (o[s] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var i = [].concat(e[c]);
                            (r && o[i[0]]) || (n && (i[2] ? (i[2] = "".concat(n, " and ").concat(i[2])) : (i[2] = n)), t.push(i));
                        }
                    }),
                    t
                );
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
                                c = n.length;
                            n = [...n, a];
                            const i = (t) => {
                                const { scope: n, children: a, ...i } = t,
                                    u = n?.[e]?.[c] || s,
                                    l = r.useMemo(() => i, Object.values(i));
                                return (0, o.jsx)(u.Provider, { value: l, children: a });
                            };
                            return (
                                (i.displayName = t + "Provider"),
                                [
                                    i,
                                    function (n, o) {
                                        const i = o?.[e]?.[c] || s,
                                            u = r.useContext(i);
                                        if (u) return u;
                                        if (void 0 !== a) return a;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        c(a, ...t),
                    ]
                );
            }
            function c(...e) {
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
            n.d(t, { x8: () => $e, VY: () => We, dk: () => Ve, aV: () => ke, h_: () => Le, fC: () => Ie, Dx: () => Ue, xz: () => Se });
            var r,
                o = n(202784),
                a = n(717998),
                s = n(262656),
                c = n(392211),
                i = n(23372),
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
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: c, onPointerDownOutside: i, onFocusOutside: u, onInteractOutside: y, onDismiss: b, ...C } = e,
                        x = o.useContext(g),
                        [N, R] = o.useState(null),
                        P = N?.ownerDocument ?? globalThis?.document,
                        [, D] = o.useState({}),
                        O = (0, s.e)(t, (e) => R(e)),
                        _ = Array.from(x.layers),
                        [M] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
                        A = _.indexOf(M),
                        j = N ? _.indexOf(N) : -1,
                        T = x.layersWithOutsidePointerEventsDisabled.size > 0,
                        F = j >= A,
                        I = (function (e, t = globalThis?.document) {
                            const n = (0, d.W)(e),
                                r = o.useRef(!1),
                                a = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    w(m, n, o, { discrete: !0 });
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
                                n = [...x.branches].some((e) => e.contains(t));
                            F && !n && (i?.(e), y?.(e), e.defaultPrevented || b?.());
                        }, P),
                        S = (function (e, t = globalThis?.document) {
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
                        }, P);
                    return (
                        (0, f.e)((e) => {
                            j === x.layers.size - 1 && (c?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()));
                        }, P),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    n && (0 === x.layersWithOutsidePointerEventsDisabled.size && ((r = P.body.style.pointerEvents), (P.body.style.pointerEvents = "none")), x.layersWithOutsidePointerEventsDisabled.add(N)),
                                    x.layers.add(N),
                                    E(),
                                    () => {
                                        n && 1 === x.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, P, n, x]),
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
                        (0, p.jsx)(l.WV.div, { ...C, ref: O, style: { pointerEvents: T ? (F ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, a.M)(e.onFocusCapture, S.onFocusCapture), onBlurCapture: (0, a.M)(e.onBlurCapture, S.onBlurCapture), onPointerDownCapture: (0, a.M)(e.onPointerDownCapture, I.onPointerDownCapture) })
                    );
                });
            y.displayName = "DismissableLayer";
            var b = o.forwardRef((e, t) => {
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
            function E() {
                const e = new CustomEvent(v);
                document.dispatchEvent(e);
            }
            function w(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, l.jH)(o, a) : o.dispatchEvent(a);
            }
            b.displayName = "DismissableLayerBranch";
            var C = n(22426),
                x = n(928316),
                N = n(861644),
                R = o.forwardRef((e, t) => {
                    const { container: n, ...r } = e,
                        [a, s] = o.useState(!1);
                    (0, N.b)(() => s(!0), []);
                    const c = n || (a && globalThis?.document?.body);
                    return c ? x.createPortal((0, p.jsx)(l.WV.div, { ...r, ref: t }), c) : null;
                });
            R.displayName = "Portal";
            var P = (e) => {
                const { present: t, children: n } = e,
                    r = (function (e) {
                        const [t, n] = o.useState(),
                            r = o.useRef({}),
                            a = o.useRef(e),
                            s = o.useRef("none"),
                            c = e ? "mounted" : "unmounted",
                            [i, u] = (function (e, t) {
                                return o.useReducer((e, n) => t[e][n] ?? e, e);
                            })(c, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            o.useEffect(() => {
                                const e = D(r.current);
                                s.current = "mounted" === i ? e : "none";
                            }, [i]),
                            (0, N.b)(() => {
                                const t = r.current,
                                    n = a.current;
                                if (n !== e) {
                                    const r = s.current,
                                        o = D(t);
                                    if (e) u("MOUNT");
                                    else if ("none" === o || "none" === t?.display) u("UNMOUNT");
                                    else {
                                        u(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    a.current = e;
                                }
                            }, [e, u]),
                            (0, N.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        o = (o) => {
                                            const s = D(r.current).includes(o.animationName);
                                            if (o.target === t && s && (u("ANIMATION_END"), !a.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        c = (e) => {
                                            e.target === t && (s.current = D(r.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", c),
                                        t.addEventListener("animationcancel", o),
                                        t.addEventListener("animationend", o),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
                                        }
                                    );
                                }
                                u("ANIMATION_END");
                            }, [t, u]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(i),
                                ref: o.useCallback((e) => {
                                    e && (r.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    a = "function" == typeof n ? n({ present: r.isPresent }) : o.Children.only(n),
                    c = (0, s.e)(
                        r.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(a),
                    );
                return "function" == typeof n || r.isPresent ? o.cloneElement(a, { ref: c }) : null;
            };
            function D(e) {
                return e?.animationName || "none";
            }
            P.displayName = "Presence";
            var O = n(11861),
                _ = n(305163),
                M = n(495346),
                A = n(287359),
                j = (0, n(964597)._)(),
                T = function () {},
                F = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        r = o.useState({ onScrollCapture: T, onWheelCapture: T, onTouchMoveCapture: T }),
                        a = r[0],
                        s = r[1],
                        c = e.forwardProps,
                        i = e.children,
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
                        x = (0, _.pi)((0, _.pi)({}, E), a);
                    return o.createElement(o.Fragment, null, d && o.createElement(w, { sideCar: j, removeScrollBar: l, shards: f, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!h, lockRef: n, gapMode: b }), c ? o.cloneElement(o.Children.only(i), (0, _.pi)((0, _.pi)({}, x), { ref: C })) : o.createElement(y, (0, _.pi)({}, x, { className: u, ref: C }), i));
                });
            (F.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (F.classNames = { fullWidth: M.zi, zeroRight: M.pF });
            var I = n(757758),
                S = n(894200),
                L = n(633097),
                k = !1;
            if ("undefined" != typeof window)
                try {
                    var W = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (k = !0), !0;
                        },
                    });
                    window.addEventListener("test", W, W), window.removeEventListener("test", W, W);
                } catch (e) {
                    k = !1;
                }
            var U = !!k && { passive: !1 },
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
                $ = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), B(e, r))) {
                            var o = K(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                B = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return V(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return V(e, "overflowX");
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
                Z = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                q = 0,
                H = [];
            function J(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const G = (0, I.L)(j, function (e) {
                var t = o.useRef([]),
                    n = o.useRef([0, 0]),
                    r = o.useRef(),
                    a = o.useState(q++)[0],
                    s = o.useState(L.Ws)[0],
                    c = o.useRef(e);
                o.useEffect(
                    function () {
                        c.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(a));
                                var t = (0, _.ev)([e.lockRef.current], (e.shards || []).map(X), !0).filter(Boolean);
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
                var i = o.useCallback(function (e, t) {
                        if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !c.current.allowPinchZoom;
                        var o,
                            a = z(e),
                            s = n.current,
                            i = "deltaX" in e ? e.deltaX : s[0] - a[0],
                            u = "deltaY" in e ? e.deltaY : s[1] - a[1],
                            l = e.target,
                            d = Math.abs(i) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === l.type) return !1;
                        var f = $(d, l);
                        if (!f) return !0;
                        if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = $(d, l))), !f)) return !1;
                        if ((!r.current && "changedTouches" in e && (i || u) && (r.current = o), !o)) return !0;
                        var p = r.current || o;
                        return (function (e, t, n, r, o) {
                            var a = (function (e, t) {
                                    return "h" === e && "rtl" === t ? -1 : 1;
                                })(e, window.getComputedStyle(t).direction),
                                s = a * r,
                                c = n.target,
                                i = t.contains(c),
                                u = !1,
                                l = s > 0,
                                d = 0,
                                f = 0;
                            do {
                                var p = K(e, c),
                                    v = p[0],
                                    m = p[1] - p[2] - a * v;
                                (v || m) && B(e, c) && ((d += m), (f += v)), (c = c instanceof ShadowRoot ? c.host : c.parentNode);
                            } while ((!i && c !== document.body) || (i && (t.contains(c) || t === c)));
                            return ((l && ((o && Math.abs(d) < 1) || (!o && s > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -s > f)))) && (u = !0), u;
                        })(p, t, e, "h" === p ? i : u, !0);
                    }, []),
                    u = o.useCallback(function (e) {
                        var n = e;
                        if (H.length && H[H.length - 1] === s) {
                            var r = "deltaY" in n ? Y(n) : z(n),
                                o = t.current.filter(function (e) {
                                    return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                    var t, o;
                                })[0];
                            if (o && o.should) n.cancelable && n.preventDefault();
                            else if (!o) {
                                var a = (c.current.shards || [])
                                    .map(X)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(n.target);
                                    });
                                (a.length > 0 ? i(n, a[0]) : !c.current.noIsolation) && n.cancelable && n.preventDefault();
                            }
                        }
                    }, []),
                    l = o.useCallback(function (e, n, r, o) {
                        var a = { name: e, delta: n, target: r, should: o, shadowParent: J(r) };
                        t.current.push(a),
                            setTimeout(function () {
                                t.current = t.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    d = o.useCallback(function (e) {
                        (n.current = z(e)), (r.current = void 0);
                    }, []),
                    f = o.useCallback(function (t) {
                        l(t.type, Y(t), t.target, i(t, e.lockRef.current));
                    }, []),
                    p = o.useCallback(function (t) {
                        l(t.type, z(t), t.target, i(t, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        H.push(s),
                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                        document.addEventListener("wheel", u, U),
                        document.addEventListener("touchmove", u, U),
                        document.addEventListener("touchstart", d, U),
                        function () {
                            (H = H.filter(function (e) {
                                return e !== s;
                            })),
                                document.removeEventListener("wheel", u, U),
                                document.removeEventListener("touchmove", u, U),
                                document.removeEventListener("touchstart", d, U);
                        }
                    );
                }, []);
                var v = e.removeScrollBar,
                    m = e.inert;
                return o.createElement(o.Fragment, null, m ? o.createElement(s, { styles: Z(a) }) : null, v ? o.createElement(S.jp, { gapMode: e.gapMode }) : null);
            });
            var Q = o.forwardRef(function (e, t) {
                return o.createElement(F, (0, _.pi)({}, e, { ref: t, sideCar: G }));
            });
            Q.classNames = F.classNames;
            const ee = Q;
            var te = n(549732),
                ne = n(549815),
                re = "Dialog",
                [oe, ae] = (0, c.b)(re),
                [se, ce] = oe(re),
                ie = (e) => {
                    const { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: s, modal: c = !0 } = e,
                        l = o.useRef(null),
                        d = o.useRef(null),
                        [f = !1, v] = (0, u.T)({ prop: r, defaultProp: a, onChange: s });
                    return (0, p.jsx)(se, { scope: t, triggerRef: l, contentRef: d, contentId: (0, i.M)(), titleId: (0, i.M)(), descriptionId: (0, i.M)(), open: f, onOpenChange: v, onOpenToggle: o.useCallback(() => v((e) => !e), [v]), modal: c, children: n });
                };
            ie.displayName = re;
            var ue = "DialogTrigger",
                le = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ce(ue, n),
                        c = (0, s.e)(t, o.triggerRef);
                    return (0, p.jsx)(l.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": _e(o.open), ...r, ref: c, onClick: (0, a.M)(e.onClick, o.onOpenToggle) });
                });
            le.displayName = ue;
            var de = "DialogPortal",
                [fe, pe] = oe(de, { forceMount: void 0 }),
                ve = (e) => {
                    const { __scopeDialog: t, forceMount: n, children: r, container: a } = e,
                        s = ce(de, t);
                    return (0, p.jsx)(fe, { scope: t, forceMount: n, children: o.Children.map(r, (e) => (0, p.jsx)(P, { present: n || s.open, children: (0, p.jsx)(R, { asChild: !0, container: a, children: e }) })) });
                };
            ve.displayName = de;
            var me = "DialogOverlay",
                he = o.forwardRef((e, t) => {
                    const n = pe(me, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = ce(me, e.__scopeDialog);
                    return a.modal ? (0, p.jsx)(P, { present: r || a.open, children: (0, p.jsx)(ge, { ...o, ref: t }) }) : null;
                });
            he.displayName = me;
            var ge = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ce(me, n);
                    return (0, p.jsx)(ee, { as: ne.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, p.jsx)(l.WV.div, { "data-state": _e(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                ye = "DialogContent",
                be = o.forwardRef((e, t) => {
                    const n = pe(ye, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = ce(ye, e.__scopeDialog);
                    return (0, p.jsx)(P, { present: r || a.open, children: a.modal ? (0, p.jsx)(Ee, { ...o, ref: t }) : (0, p.jsx)(we, { ...o, ref: t }) });
                });
            be.displayName = ye;
            var Ee = o.forwardRef((e, t) => {
                    const n = ce(ye, e.__scopeDialog),
                        r = o.useRef(null),
                        c = (0, s.e)(t, n.contentRef, r);
                    return (
                        o.useEffect(() => {
                            const e = r.current;
                            if (e) return (0, te.Ry)(e);
                        }, []),
                        (0, p.jsx)(Ce, {
                            ...e,
                            ref: c,
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
                    const n = ce(ye, e.__scopeDialog),
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
                    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: c, ...i } = e,
                        u = ce(ye, n),
                        l = o.useRef(null),
                        d = (0, s.e)(t, l);
                    return (0, O.EW)(), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(C.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: a, onUnmountAutoFocus: c, children: (0, p.jsx)(y, { role: "dialog", id: u.contentId, "aria-describedby": u.descriptionId, "aria-labelledby": u.titleId, "data-state": _e(u.open), ...i, ref: d, onDismiss: () => u.onOpenChange(!1) }) }), (0, p.jsxs)(p.Fragment, { children: [(0, p.jsx)(Te, { titleId: u.titleId }), (0, p.jsx)(Fe, { contentRef: l, descriptionId: u.descriptionId })] })] });
                }),
                xe = "DialogTitle",
                Ne = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ce(xe, n);
                    return (0, p.jsx)(l.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            Ne.displayName = xe;
            var Re = "DialogDescription",
                Pe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ce(Re, n);
                    return (0, p.jsx)(l.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            Pe.displayName = Re;
            var De = "DialogClose",
                Oe = o.forwardRef((e, t) => {
                    const { __scopeDialog: n, ...r } = e,
                        o = ce(De, n);
                    return (0, p.jsx)(l.WV.button, { type: "button", ...r, ref: t, onClick: (0, a.M)(e.onClick, () => o.onOpenChange(!1)) });
                });
            function _e(e) {
                return e ? "open" : "closed";
            }
            Oe.displayName = De;
            var Me = "DialogTitleWarning",
                [Ae, je] = (0, c.k)(Me, { contentName: ye, titleName: xe, docsSlug: "dialog" }),
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
                Ie = ie,
                Se = le,
                Le = ve,
                ke = he,
                We = be,
                Ue = Ne,
                Ve = Pe,
                $e = Oe;
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
                c = n(552322),
                i = "focusScope.autoFocusOnMount",
                u = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
                        [b, E] = r.useState(null),
                        w = (0, s.W)(v),
                        C = (0, s.W)(g),
                        x = r.useRef(null),
                        N = (0, o.e)(t, (e) => E(e)),
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
                                    if (R.paused || !b) return;
                                    const t = e.target;
                                    b.contains(t) ? (x.current = t) : m(x.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (R.paused || !b) return;
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
                    }, [d, b, R.paused]),
                        r.useEffect(() => {
                            if (b) {
                                h.add(R);
                                const t = document.activeElement;
                                if (!b.contains(t)) {
                                    const n = new CustomEvent(i, l);
                                    b.addEventListener(i, w),
                                        b.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(b)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && m(b));
                                }
                                return () => {
                                    b.removeEventListener(i, w),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, l);
                                            b.addEventListener(u, C), b.dispatchEvent(e), e.defaultPrevented || m(t ?? document.body, { select: !0 }), b.removeEventListener(u, C), h.remove(R);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [b, w, C, R]);
                    const P = r.useCallback(
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
                                o && a ? (e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), n && m(a, { select: !0 })) : (e.preventDefault(), n && m(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, d, R.paused],
                    );
                    return (0, c.jsx)(a.WV.div, { tabIndex: -1, ...y, ref: N, onKeyDown: P });
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
            n.d(t, { Eh: () => H, VY: () => q, h_: () => Z, fC: () => Y, xz: () => X });
            var r = n(202784),
                o = n(717998),
                a = n(262656),
                s = n(552322);
            function c(...e) {
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
            var i = n(301352),
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
                                const a = r.createContext(o),
                                    c = n.length;
                                function i(t) {
                                    const { scope: n, children: o, ...i } = t,
                                        u = n?.[e][c] || a,
                                        l = r.useMemo(() => i, Object.values(i));
                                    return (0, s.jsx)(u.Provider, { value: l, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (i.displayName = t + "Provider"),
                                    [
                                        i,
                                        function (n, s) {
                                            const i = s?.[e][c] || a,
                                                u = r.useContext(i);
                                            if (u) return u;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            c(o, ...t),
                        ]
                    );
                })(C, [v.D7]),
                R = (0, v.D7)(),
                [P, D] = x(C),
                O = (e) => {
                    const { __scopePopover: t, children: n, open: o, defaultOpen: a, onOpenChange: c, modal: i = !1 } = e,
                        u = R(t),
                        l = r.useRef(null),
                        [d, f] = r.useState(!1),
                        [m = !1, h] = (0, b.T)({ prop: o, defaultProp: a, onChange: c });
                    return (0, s.jsx)(v.fC, { ...u, children: (0, s.jsx)(P, { scope: t, contentId: (0, p.M)(), triggerRef: l, open: m, onOpenChange: h, onOpenToggle: r.useCallback(() => h((e) => !e), [h]), hasCustomAnchor: d, onCustomAnchorAdd: r.useCallback(() => f(!0), []), onCustomAnchorRemove: r.useCallback(() => f(!1), []), modal: i, children: n }) });
                };
            O.displayName = C;
            var _ = "PopoverAnchor",
                M = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...o } = e,
                        a = D(_, n),
                        c = R(n),
                        { onCustomAnchorAdd: i, onCustomAnchorRemove: u } = a;
                    return r.useEffect(() => (i(), () => u()), [i, u]), (0, s.jsx)(v.ee, { ...c, ...o, ref: t });
                });
            M.displayName = _;
            var A = "PopoverTrigger",
                j = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        c = D(A, n),
                        i = R(n),
                        u = (0, a.e)(t, c.triggerRef),
                        l = (0, s.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": c.open, "aria-controls": c.contentId, "data-state": z(c.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, c.onOpenToggle) });
                    return c.hasCustomAnchor ? l : (0, s.jsx)(v.ee, { asChild: !0, ...i, children: l });
                });
            j.displayName = A;
            var T = "PopoverPortal",
                [F, I] = x(T, { forceMount: void 0 }),
                S = (e) => {
                    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        a = D(T, t);
                    return (0, s.jsx)(F, { scope: t, forceMount: n, children: (0, s.jsx)(h.z, { present: n || a.open, children: (0, s.jsx)(m.h, { asChild: !0, container: o, children: r }) }) });
                };
            S.displayName = T;
            var L = "PopoverContent",
                k = r.forwardRef((e, t) => {
                    const n = I(L, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = D(L, e.__scopePopover);
                    return (0, s.jsx)(h.z, { present: r || a.open, children: a.modal ? (0, s.jsx)(W, { ...o, ref: t }) : (0, s.jsx)(U, { ...o, ref: t }) });
                });
            k.displayName = L;
            var W = r.forwardRef((e, t) => {
                    const n = D(L, e.__scopePopover),
                        c = r.useRef(null),
                        i = (0, a.e)(t, c),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            const e = c.current;
                            if (e) return (0, E.Ry)(e);
                        }, []),
                        (0, s.jsx)(w.Z, {
                            as: y.g7,
                            allowPinchZoom: !0,
                            children: (0, s.jsx)(V, {
                                ...e,
                                ref: i,
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
                U = r.forwardRef((e, t) => {
                    const n = D(L, e.__scopePopover),
                        o = r.useRef(!1),
                        a = r.useRef(!1);
                    return (0, s.jsx)(V, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), (o.current = !1), (a.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((o.current = !0), "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
                            const r = t.target,
                                s = n.triggerRef.current?.contains(r);
                            s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault();
                        },
                    });
                }),
                V = r.forwardRef((e, t) => {
                    const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: c, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: p, onInteractOutside: m, ...h } = e,
                        g = D(L, n),
                        y = R(n);
                    return l(), (0, s.jsx)(f.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: a, children: (0, s.jsx)(i.XB, { asChild: !0, disableOutsidePointerEvents: c, onInteractOutside: m, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: p, onDismiss: () => g.onOpenChange(!1), children: (0, s.jsx)(v.VY, { "data-state": z(g.open), role: "dialog", id: g.contentId, ...y, ...h, ref: t, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                $ = "PopoverClose",
                B = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        a = D($, n);
                    return (0, s.jsx)(g.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => a.onOpenChange(!1)) });
                });
            B.displayName = $;
            var K = r.forwardRef((e, t) => {
                const { __scopePopover: n, ...r } = e,
                    o = R(n);
                return (0, s.jsx)(v.Eh, { ...o, ...r, ref: t });
            });
            function z(e) {
                return e ? "open" : "closed";
            }
            K.displayName = "PopoverArrow";
            var Y = O,
                X = j,
                Z = S,
                q = k,
                H = K;
        },
        840489: (e, t, n) => {
            function r(e) {
                var t,
                    n,
                    o = "";
                if ("string" == typeof e || "number" == typeof e) o += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var a = e.length;
                        for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
                    } else for (n in e) e[n] && (o && (o += " "), (o += n));
                return o;
            }
            function o() {
                for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (o && (o += " "), (o += t));
                return o;
            }
            n.d(t, { W: () => o, Z: () => a });
            const a = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-cdd60c62.2def8dba.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-5ce30575"],
    {
        958760: (e, t, n) => {
            n.d(t, { Z: () => $ });
            var r = n(305163),
                o = n(202784),
                i = "right-scroll-bar-position",
                a = "width-before-scroll-bar";
            function c(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
                u = new WeakMap();
            function l(e, t) {
                var n,
                    r,
                    i,
                    a =
                        ((n = t || null),
                        (r = function (t) {
                            return e.forEach(function (e) {
                                return c(e, t);
                            });
                        }),
                        ((i = (0, o.useState)(function () {
                            return {
                                value: n,
                                callback: r,
                                facade: {
                                    get current() {
                                        return i.value;
                                    },
                                    set current(e) {
                                        var t = i.value;
                                        t !== e && ((i.value = e), i.callback(e, t));
                                    },
                                },
                            };
                        })[0]).callback = r),
                        i.facade);
                return (
                    s(
                        function () {
                            var t = u.get(a);
                            if (t) {
                                var n = new Set(t),
                                    r = new Set(e),
                                    o = a.current;
                                n.forEach(function (e) {
                                    r.has(e) || c(e, null);
                                }),
                                    r.forEach(function (e) {
                                        n.has(e) || c(e, o);
                                    });
                            }
                            u.set(a, e);
                        },
                        [e],
                    ),
                    a
                );
            }
            function d(e) {
                return e;
            }
            function f(e, t) {
                void 0 === t && (t = d);
                var n = [],
                    r = !1;
                return {
                    read: function () {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e;
                    },
                    useMedium: function (e) {
                        var o = t(e, r);
                        return (
                            n.push(o),
                            function () {
                                n = n.filter(function (e) {
                                    return e !== o;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (e) {
                        for (r = !0; n.length; ) {
                            var t = n;
                            (n = []), t.forEach(e);
                        }
                        n = {
                            push: function (t) {
                                return e(t);
                            },
                            filter: function () {
                                return n;
                            },
                        };
                    },
                    assignMedium: function (e) {
                        r = !0;
                        var t = [];
                        if (n.length) {
                            var o = n;
                            (n = []), o.forEach(e), (t = n);
                        }
                        var i = function () {
                                var n = t;
                                (t = []), n.forEach(e);
                            },
                            a = function () {
                                return Promise.resolve().then(i);
                            };
                        a(),
                            (n = {
                                push: function (e) {
                                    t.push(e), a();
                                },
                                filter: function (e) {
                                    return (t = t.filter(e)), n;
                                },
                            });
                    },
                };
            }
            var p = (function (e) {
                    void 0 === e && (e = {});
                    var t = f(null);
                    return (t.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), t;
                })(),
                v = function () {},
                h = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        i = o.useState({ onScrollCapture: v, onWheelCapture: v, onTouchMoveCapture: v }),
                        a = i[0],
                        c = i[1],
                        s = e.forwardProps,
                        u = e.children,
                        d = e.className,
                        f = e.removeScrollBar,
                        h = e.enabled,
                        m = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        w = e.inert,
                        b = e.allowPinchZoom,
                        E = e.as,
                        x = void 0 === E ? "div" : E,
                        C = e.gapMode,
                        S = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        P = g,
                        R = l([n, t]),
                        L = (0, r.pi)((0, r.pi)({}, S), a);
                    return o.createElement(o.Fragment, null, h && o.createElement(P, { sideCar: p, removeScrollBar: f, shards: m, noIsolation: y, inert: w, setCallbacks: c, allowPinchZoom: !!b, lockRef: n, gapMode: C }), s ? o.cloneElement(o.Children.only(u), (0, r.pi)((0, r.pi)({}, L), { ref: R })) : o.createElement(x, (0, r.pi)({}, L, { className: d, ref: R }), u));
                });
            (h.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (h.classNames = { fullWidth: a, zeroRight: i });
            var m = function (e) {
                var t = e.sideCar,
                    n = (0, r._T)(e, ["sideCar"]);
                if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var i = t.read();
                if (!i) throw new Error("Sidecar medium not found");
                return o.createElement(i, (0, r.pi)({}, n));
            };
            m.isSideCarExport = !0;
            var g = n(250132);
            var y = function () {
                    var e = 0,
                        t = null;
                    return {
                        add: function (n) {
                            var r, o;
                            0 == e &&
                                (t = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = (0, g.V)();
                                    return t && e.setAttribute("nonce", t), e;
                                })()) &&
                                ((o = n),
                                (r = t).styleSheet ? (r.styleSheet.cssText = o) : r.appendChild(document.createTextNode(o)),
                                (function (e) {
                                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                                })(t)),
                                e++;
                        },
                        remove: function () {
                            !--e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
                        },
                    };
                },
                w = function () {
                    var e,
                        t =
                            ((e = y()),
                            function (t, n) {
                                o.useEffect(
                                    function () {
                                        return (
                                            e.add(t),
                                            function () {
                                                e.remove();
                                            }
                                        );
                                    },
                                    [t && n],
                                );
                            });
                    return function (e) {
                        var n = e.styles,
                            r = e.dynamic;
                        return t(n, r), null;
                    };
                },
                b = { left: 0, top: 0, right: 0, gap: 0 },
                E = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                x = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return b;
                    var t = (function (e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [E(n), E(r), E(o)];
                        })(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                },
                C = w(),
                S = "data-scroll-locked",
                P = function (e, t, n, r) {
                    var o = e.left,
                        c = e.top,
                        s = e.right,
                        u = e.gap;
                    return (
                        void 0 === n && (n = "margin"),
                        "\n  ."
                            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(S, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(s, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(i, " {\n    right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a, " {\n    margin-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i, " .")
                            .concat(i, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a, " .")
                            .concat(a, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(S, "] {\n    ")
                            .concat("--removed-body-scroll-bar-size", ": ")
                            .concat(u, "px;\n  }\n")
                    );
                },
                R = function () {
                    var e = parseInt(document.body.getAttribute(S) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                L = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? "margin" : r;
                    o.useEffect(function () {
                        return (
                            document.body.setAttribute(S, (R() + 1).toString()),
                            function () {
                                var e = R() - 1;
                                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString());
                            }
                        );
                    }, []);
                    var a = o.useMemo(
                        function () {
                            return x(i);
                        },
                        [i],
                    );
                    return o.createElement(C, { styles: P(a, !t, i, n ? "" : "!important") });
                },
                W = !1;
            if ("undefined" != typeof window)
                try {
                    var N = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (W = !0), !0;
                        },
                    });
                    window.addEventListener("test", N, N), window.removeEventListener("test", N, N);
                } catch (e) {
                    W = !1;
                }
            var T = !!W && { passive: !1 },
                k = function (e, t) {
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
                D = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), O(e, r))) {
                            var o = A(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                O = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return k(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return k(e, "overflowX");
                          })(t);
                },
                A = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                M = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                F = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                j = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                _ = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                B = 0,
                I = [];
            function V(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const Y =
                ((H = function (e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        i = o.useRef(),
                        a = o.useState(B++)[0],
                        c = o.useState(w)[0],
                        s = o.useRef(e);
                    o.useEffect(
                        function () {
                            s.current = e;
                        },
                        [e],
                    ),
                        o.useEffect(
                            function () {
                                if (e.inert) {
                                    document.body.classList.add("block-interactivity-".concat(a));
                                    var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(j), !0).filter(Boolean);
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
                            if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !s.current.allowPinchZoom;
                            var r,
                                o = M(e),
                                a = n.current,
                                c = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                u = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                l = e.target,
                                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === l.type) return !1;
                            var f = D(d, l);
                            if (!f) return !0;
                            if ((f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = D(d, l))), !f)) return !1;
                            if ((!i.current && "changedTouches" in e && (c || u) && (i.current = r), !r)) return !0;
                            var p = i.current || r;
                            return (function (e, t, n, r, o) {
                                var i = (function (e, t) {
                                        return "h" === e && "rtl" === t ? -1 : 1;
                                    })(e, window.getComputedStyle(t).direction),
                                    a = i * r,
                                    c = n.target,
                                    s = t.contains(c),
                                    u = !1,
                                    l = a > 0,
                                    d = 0,
                                    f = 0;
                                do {
                                    var p = A(e, c),
                                        v = p[0],
                                        h = p[1] - p[2] - i * v;
                                    (v || h) && O(e, c) && ((d += h), (f += v)), (c = c instanceof ShadowRoot ? c.host : c.parentNode);
                                } while ((!s && c !== document.body) || (s && (t.contains(c) || t === c)));
                                return ((l && ((o && Math.abs(d) < 1) || (!o && a > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -a > f)))) && (u = !0), u;
                            })(p, t, e, "h" === p ? c : u, !0);
                        }, []),
                        l = o.useCallback(function (e) {
                            var n = e;
                            if (I.length && I[I.length - 1] === c) {
                                var r = "deltaY" in n ? F(n) : M(n),
                                    o = t.current.filter(function (e) {
                                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                        var t, o;
                                    })[0];
                                if (o && o.should) n.cancelable && n.preventDefault();
                                else if (!o) {
                                    var i = (s.current.shards || [])
                                        .map(j)
                                        .filter(Boolean)
                                        .filter(function (e) {
                                            return e.contains(n.target);
                                        });
                                    (i.length > 0 ? u(n, i[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
                                }
                            }
                        }, []),
                        d = o.useCallback(function (e, n, r, o) {
                            var i = { name: e, delta: n, target: r, should: o, shadowParent: V(r) };
                            t.current.push(i),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== i;
                                    });
                                }, 1);
                        }, []),
                        f = o.useCallback(function (e) {
                            (n.current = M(e)), (i.current = void 0);
                        }, []),
                        p = o.useCallback(function (t) {
                            d(t.type, F(t), t.target, u(t, e.lockRef.current));
                        }, []),
                        v = o.useCallback(function (t) {
                            d(t.type, M(t), t.target, u(t, e.lockRef.current));
                        }, []);
                    o.useEffect(function () {
                        return (
                            I.push(c),
                            e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: v }),
                            document.addEventListener("wheel", l, T),
                            document.addEventListener("touchmove", l, T),
                            document.addEventListener("touchstart", f, T),
                            function () {
                                (I = I.filter(function (e) {
                                    return e !== c;
                                })),
                                    document.removeEventListener("wheel", l, T),
                                    document.removeEventListener("touchmove", l, T),
                                    document.removeEventListener("touchstart", f, T);
                            }
                        );
                    }, []);
                    var h = e.removeScrollBar,
                        m = e.inert;
                    return o.createElement(o.Fragment, null, m ? o.createElement(c, { styles: _(a) }) : null, h ? o.createElement(L, { gapMode: e.gapMode }) : null);
                }),
                p.useMedium(H),
                m);
            var H,
                X = o.forwardRef(function (e, t) {
                    return o.createElement(h, (0, r.pi)({}, e, { ref: t, sideCar: Y }));
                });
            X.classNames = h.classNames;
            const $ = X;
        },
        395656: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        238829: (e, t, n) => {
            n.d(t, { F: () => i, e: () => a });
            var r = n(202784);
            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function i(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = o(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : o(e[t], null);
                            }
                        };
                };
            }
            function a(...e) {
                return r.useCallback(i(...e), e);
            }
        },
        664266: (e, t, n) => {
            n.d(t, { XB: () => h });
            var r,
                o = n(202784),
                i = n(395656),
                a = n(41911),
                c = n(238829),
                s = n(627757),
                u = n(986796),
                l = n(552322),
                d = "dismissableLayer.update",
                f = "dismissableLayer.pointerDownOutside",
                p = "dismissableLayer.focusOutside",
                v = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                h = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: h, onPointerDownOutside: m, onFocusOutside: w, onInteractOutside: b, onDismiss: E, ...x } = e,
                        C = o.useContext(v),
                        [S, P] = o.useState(null),
                        R = S?.ownerDocument ?? globalThis?.document,
                        [, L] = o.useState({}),
                        W = (0, c.e)(t, (e) => P(e)),
                        N = Array.from(C.layers),
                        [T] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
                        k = N.indexOf(T),
                        D = S ? N.indexOf(S) : -1,
                        O = C.layersWithOutsidePointerEventsDisabled.size > 0,
                        A = D >= k,
                        M = (function (e, t = globalThis?.document) {
                            const n = (0, s.W)(e),
                                r = o.useRef(!1),
                                i = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    y(f, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", i.current), (i.current = r), t.addEventListener("click", i.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", i.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...C.branches].some((e) => e.contains(t));
                            A && !n && (m?.(e), b?.(e), e.defaultPrevented || E?.());
                        }, R),
                        F = (function (e, t = globalThis?.document) {
                            const n = (0, s.W)(e),
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
                            [...C.branches].some((e) => e.contains(t)) || (w?.(e), b?.(e), e.defaultPrevented || E?.());
                        }, R);
                    return (
                        (0, u.e)((e) => {
                            D === C.layers.size - 1 && (h?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()));
                        }, R),
                        o.useEffect(() => {
                            if (S)
                                return (
                                    n && (0 === C.layersWithOutsidePointerEventsDisabled.size && ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = "none")), C.layersWithOutsidePointerEventsDisabled.add(S)),
                                    C.layers.add(S),
                                    g(),
                                    () => {
                                        n && 1 === C.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r);
                                    }
                                );
                        }, [S, R, n, C]),
                        o.useEffect(
                            () => () => {
                                S && (C.layers.delete(S), C.layersWithOutsidePointerEventsDisabled.delete(S), g());
                            },
                            [S, C],
                        ),
                        o.useEffect(() => {
                            const e = () => L({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, l.jsx)(a.WV.div, { ...x, ref: W, style: { pointerEvents: O ? (A ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, i.M)(e.onFocusCapture, F.onFocusCapture), onBlurCapture: (0, i.M)(e.onBlurCapture, F.onBlurCapture), onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, M.onPointerDownCapture) })
                    );
                });
            h.displayName = "DismissableLayer";
            var m = o.forwardRef((e, t) => {
                const n = o.useContext(v),
                    r = o.useRef(null),
                    i = (0, c.e)(t, r);
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
                    (0, l.jsx)(a.WV.div, { ...e, ref: i })
                );
            });
            function g() {
                const e = new CustomEvent(d);
                document.dispatchEvent(e);
            }
            function y(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i);
            }
            m.displayName = "DismissableLayerBranch";
        },
        913620: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(238829),
                i = n(41911),
                a = n(627757),
                c = n(552322),
                s = "focusScope.autoFocusOnMount",
                u = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
                        [w, b] = r.useState(null),
                        E = (0, a.W)(v),
                        x = (0, a.W)(g),
                        C = r.useRef(null),
                        S = (0, o.e)(t, (e) => b(e)),
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
                                    if (P.paused || !w) return;
                                    const t = e.target;
                                    w.contains(t) ? (C.current = t) : h(C.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (P.paused || !w) return;
                                    const t = e.relatedTarget;
                                    null !== t && (w.contains(t) || h(C.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && h(w);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                w && r.observe(w, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [d, w, P.paused]),
                        r.useEffect(() => {
                            if (w) {
                                m.add(P);
                                const t = document.activeElement;
                                if (!w.contains(t)) {
                                    const n = new CustomEvent(s, l);
                                    w.addEventListener(s, E),
                                        w.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((h(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(w)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && h(w));
                                }
                                return () => {
                                    w.removeEventListener(s, E),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, l);
                                            w.addEventListener(u, x), w.dispatchEvent(e), e.defaultPrevented || h(t ?? document.body, { select: !0 }), w.removeEventListener(u, x), m.remove(P);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [w, E, x, P]);
                    const R = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (P.paused) return;
                            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                r = document.activeElement;
                            if (t && r) {
                                const t = e.currentTarget,
                                    [o, i] = (function (e) {
                                        const t = f(e),
                                            n = p(t, e),
                                            r = p(t.reverse(), e);
                                        return [n, r];
                                    })(t);
                                o && i ? (e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && h(i, { select: !0 })) : (e.preventDefault(), n && h(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, d, P.paused],
                    );
                    return (0, c.jsx)(i.WV.div, { tabIndex: -1, ...y, ref: S, onKeyDown: R });
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
            function h(e, { select: t = !1 } = {}) {
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
            var m = (function () {
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
        998946: (e, t, n) => {
            n.d(t, { ee: () => A, Eh: () => F, VY: () => M, fC: () => O, D7: () => g });
            var r = n(202784),
                o = n(992416),
                i = n(94258),
                a = n(41911),
                c = n(552322),
                s = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: o = 5, ...i } = e;
                    return (0, c.jsx)(a.WV.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, c.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            s.displayName = "Arrow";
            var u = s,
                l = n(238829),
                d = n(392211),
                f = n(627757),
                p = n(861644),
                v = n(335019),
                h = "Popper",
                [m, g] = (0, d.b)(h),
                [y, w] = m(h),
                b = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, c.jsx)(y, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            b.displayName = h;
            var E = "PopperAnchor",
                x = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...i } = e,
                        s = w(E, n),
                        u = r.useRef(null),
                        d = (0, l.e)(t, u);
                    return (
                        r.useEffect(() => {
                            s.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, c.jsx)(a.WV.div, { ...i, ref: d })
                    );
                });
            x.displayName = E;
            var C = "PopperContent",
                [S, P] = m(C),
                R = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: s = "bottom", sideOffset: u = 0, align: d = "center", alignOffset: h = 0, arrowPadding: m = 0, avoidCollisions: g = !0, collisionBoundary: y = [], collisionPadding: b = 0, sticky: E = "partial", hideWhenDetached: x = !1, updatePositionStrategy: P = "optimized", onPlaced: R, ...L } = e,
                        W = w(C, n),
                        [N, O] = r.useState(null),
                        A = (0, l.e)(t, (e) => O(e)),
                        [M, F] = r.useState(null),
                        j = (0, v.t)(M),
                        _ = j?.width ?? 0,
                        B = j?.height ?? 0,
                        I = s + ("center" !== d ? "-" + d : ""),
                        V = "number" == typeof b ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b },
                        Y = Array.isArray(y) ? y : [y],
                        H = Y.length > 0,
                        X = { padding: V, boundary: Y.filter(T), altBoundary: H },
                        {
                            refs: $,
                            floatingStyles: K,
                            placement: z,
                            isPositioned: Z,
                            middlewareData: U,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: I,
                            whileElementsMounted: (...e) => (0, i.Me)(...e, { animationFrame: "always" === P }),
                            elements: { reference: W.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + B, alignmentAxis: h }),
                                g && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === E ? (0, o.dr)() : void 0, ...X }),
                                g && (0, o.RR)({ ...X }),
                                (0, o.dp)({
                                    ...X,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            a = e.floating.style;
                                        a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                M && (0, o.x7)({ element: M, padding: m }),
                                k({ arrowWidth: _, arrowHeight: B }),
                                x && (0, o.Cp)({ strategy: "referenceHidden", ...X }),
                            ],
                        }),
                        [q, G] = D(z),
                        J = (0, f.W)(R);
                    (0, p.b)(() => {
                        Z && J?.();
                    }, [Z, J]);
                    const Q = U.arrow?.x,
                        ee = U.arrow?.y,
                        te = 0 !== U.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, p.b)(() => {
                            N && re(window.getComputedStyle(N).zIndex);
                        }, [N]),
                        (0, c.jsx)("div", { ref: $.setFloating, "data-radix-popper-content-wrapper": "", style: { ...K, transform: Z ? K.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [U.transformOrigin?.x, U.transformOrigin?.y].join(" "), ...(U.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, c.jsx)(S, { scope: n, placedSide: q, onArrowChange: F, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, c.jsx)(a.WV.div, { "data-side": q, "data-align": G, ...L, ref: A, style: { ...L.style, animation: Z ? void 0 : "none" } }) }) })
                    );
                });
            R.displayName = C;
            var L = "PopperArrow",
                W = { top: "bottom", right: "left", bottom: "top", left: "right" },
                N = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = P(L, n),
                        i = W[o.placedSide];
                    return (0, c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(u, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function T(e) {
                return null !== e;
            }
            N.displayName = L;
            var k = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        i = 0 !== o.arrow?.centerOffset,
                        a = i ? 0 : e.arrowWidth,
                        c = i ? 0 : e.arrowHeight,
                        [s, u] = D(n),
                        l = { start: "0%", center: "50%", end: "100%" }[u],
                        d = (o.arrow?.x ?? 0) + a / 2,
                        f = (o.arrow?.y ?? 0) + c / 2;
                    let p = "",
                        v = "";
                    return "bottom" === s ? ((p = i ? l : `${d}px`), (v = -c + "px")) : "top" === s ? ((p = i ? l : `${d}px`), (v = `${r.floating.height + c}px`)) : "right" === s ? ((p = -c + "px"), (v = i ? l : `${f}px`)) : "left" === s && ((p = `${r.floating.width + c}px`), (v = i ? l : `${f}px`)), { data: { x: p, y: v } };
                },
            });
            function D(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var O = b,
                A = x,
                M = R,
                F = N;
        },
        308067: (e, t, n) => {
            n.d(t, { h: () => s });
            var r = n(202784),
                o = n(928316),
                i = n(41911),
                a = n(861644),
                c = n(552322),
                s = r.forwardRef((e, t) => {
                    const { container: n, ...s } = e,
                        [u, l] = r.useState(!1);
                    (0, a.b)(() => l(!0), []);
                    const d = n || (u && globalThis?.document?.body);
                    return d ? o.createPortal((0, c.jsx)(i.WV.div, { ...s, ref: t }), d) : null;
                });
            s.displayName = "Portal";
        },
        41911: (e, t, n) => {
            n.d(t, { WV: () => c, jH: () => s });
            var r = n(202784),
                o = n(928316),
                i = n(376488),
                a = n(552322),
                c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    const n = r.forwardRef((e, n) => {
                        const { asChild: r, ...o } = e,
                            c = r ? i.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(c, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function s(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        376488: (e, t, n) => {
            n.d(t, { g7: () => a });
            var r = n(202784),
                o = n(238829),
                i = n(552322),
                a = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        a = r.Children.toArray(n),
                        s = a.find(u);
                    if (s) {
                        const e = s.props.children,
                            n = a.map((t) => (t === s ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, i.jsx)(c, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, i.jsx)(c, { ...o, ref: t, children: n });
                });
            a.displayName = "Slot";
            var c = r.forwardRef((e, t) => {
                const { children: n, ...i } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(n),
                        a = (function (e, t) {
                            const n = { ...t };
                            for (const r in t) {
                                const o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r)
                                    ? o && i
                                        ? (n[r] = (...e) => {
                                              i(...e), o(...e);
                                          })
                                        : o && (n[r] = o)
                                    : "style" === r
                                      ? (n[r] = { ...o, ...i })
                                      : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                            }
                            return { ...e, ...n };
                        })(i, n.props);
                    return n.type !== r.Fragment && (a.ref = t ? (0, o.F)(t, e) : e), r.cloneElement(n, a);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            c.displayName = "SlotClone";
            var s = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            function u(e) {
                return r.isValidElement(e) && e.type === s;
            }
        },
        331725: (e, t, n) => {
            n.d(t, { T: () => a });
            var r = n(202784),
                o = n(41911),
                i = n(552322),
                a = r.forwardRef((e, t) => (0, i.jsx)(o.WV.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }));
            a.displayName = "VisuallyHidden";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-5ce30575.097139ba.js.map

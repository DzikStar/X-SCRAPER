"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-cd9f24fc"],
    {
        958760: (e, t, n) => {
            n.d(t, { Z: () => U });
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
                m = function () {},
                v = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        i = o.useState({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: m }),
                        a = i[0],
                        c = i[1],
                        s = e.forwardProps,
                        u = e.children,
                        d = e.className,
                        f = e.removeScrollBar,
                        v = e.enabled,
                        h = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        w = e.inert,
                        b = e.allowPinchZoom,
                        E = e.as,
                        C = void 0 === E ? "div" : E,
                        x = e.gapMode,
                        N = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        P = g,
                        R = l([n, t]),
                        S = (0, r.pi)((0, r.pi)({}, N), a);
                    return o.createElement(o.Fragment, null, v && o.createElement(P, { sideCar: p, removeScrollBar: f, shards: h, noIsolation: y, inert: w, setCallbacks: c, allowPinchZoom: !!b, lockRef: n, gapMode: x }), s ? o.cloneElement(o.Children.only(u), (0, r.pi)((0, r.pi)({}, S), { ref: R })) : o.createElement(C, (0, r.pi)({}, S, { className: d, ref: R }), u));
                });
            (v.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (v.classNames = { fullWidth: a, zeroRight: i });
            var h = function (e) {
                var t = e.sideCar,
                    n = (0, r._T)(e, ["sideCar"]);
                if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var i = t.read();
                if (!i) throw new Error("Sidecar medium not found");
                return o.createElement(i, (0, r.pi)({}, n));
            };
            h.isSideCarExport = !0;
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
                C = function (e) {
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
                x = w(),
                N = "data-scroll-locked",
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
                            .concat(N, "] {\n    overflow: hidden ")
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
                            .concat(N, "] {\n    ")
                            .concat("--removed-body-scroll-bar-size", ": ")
                            .concat(u, "px;\n  }\n")
                    );
                },
                R = function () {
                    var e = parseInt(document.body.getAttribute(N) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                S = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? "margin" : r;
                    o.useEffect(function () {
                        return (
                            document.body.setAttribute(N, (R() + 1).toString()),
                            function () {
                                var e = R() - 1;
                                e <= 0 ? document.body.removeAttribute(N) : document.body.setAttribute(N, e.toString());
                            }
                        );
                    }, []);
                    var a = o.useMemo(
                        function () {
                            return C(i);
                        },
                        [i],
                    );
                    return o.createElement(x, { styles: P(a, !t, i, n ? "" : "!important") });
                },
                T = !1;
            if ("undefined" != typeof window)
                try {
                    var M = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (T = !0), !0;
                        },
                    });
                    window.addEventListener("test", M, M), window.removeEventListener("test", M, M);
                } catch (e) {
                    T = !1;
                }
            var O = !!T && { passive: !1 },
                L = function (e, t) {
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
                W = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), D(e, r))) {
                            var o = A(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                D = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return L(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return L(e, "overflowX");
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
                j = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                k = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                F = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                I = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                _ = 0,
                V = [];
            function B(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const Y =
                (($ = function (e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        i = o.useRef(),
                        a = o.useState(_++)[0],
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
                                    var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(F), !0).filter(Boolean);
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
                                o = j(e),
                                a = n.current,
                                c = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                u = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                l = e.target,
                                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === l.type) return !1;
                            var f = W(d, l);
                            if (!f) return !0;
                            if ((f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = W(d, l))), !f)) return !1;
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
                                        m = p[0],
                                        v = p[1] - p[2] - i * m;
                                    (m || v) && D(e, c) && ((d += v), (f += m)), (c = c instanceof ShadowRoot ? c.host : c.parentNode);
                                } while ((!s && c !== document.body) || (s && (t.contains(c) || t === c)));
                                return ((l && ((o && Math.abs(d) < 1) || (!o && a > d))) || (!l && ((o && Math.abs(f) < 1) || (!o && -a > f)))) && (u = !0), u;
                            })(p, t, e, "h" === p ? c : u, !0);
                        }, []),
                        l = o.useCallback(function (e) {
                            var n = e;
                            if (V.length && V[V.length - 1] === c) {
                                var r = "deltaY" in n ? k(n) : j(n),
                                    o = t.current.filter(function (e) {
                                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                        var t, o;
                                    })[0];
                                if (o && o.should) n.cancelable && n.preventDefault();
                                else if (!o) {
                                    var i = (s.current.shards || [])
                                        .map(F)
                                        .filter(Boolean)
                                        .filter(function (e) {
                                            return e.contains(n.target);
                                        });
                                    (i.length > 0 ? u(n, i[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
                                }
                            }
                        }, []),
                        d = o.useCallback(function (e, n, r, o) {
                            var i = { name: e, delta: n, target: r, should: o, shadowParent: B(r) };
                            t.current.push(i),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== i;
                                    });
                                }, 1);
                        }, []),
                        f = o.useCallback(function (e) {
                            (n.current = j(e)), (i.current = void 0);
                        }, []),
                        p = o.useCallback(function (t) {
                            d(t.type, k(t), t.target, u(t, e.lockRef.current));
                        }, []),
                        m = o.useCallback(function (t) {
                            d(t.type, j(t), t.target, u(t, e.lockRef.current));
                        }, []);
                    o.useEffect(function () {
                        return (
                            V.push(c),
                            e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: m }),
                            document.addEventListener("wheel", l, O),
                            document.addEventListener("touchmove", l, O),
                            document.addEventListener("touchstart", f, O),
                            function () {
                                (V = V.filter(function (e) {
                                    return e !== c;
                                })),
                                    document.removeEventListener("wheel", l, O),
                                    document.removeEventListener("touchmove", l, O),
                                    document.removeEventListener("touchstart", f, O);
                            }
                        );
                    }, []);
                    var v = e.removeScrollBar,
                        h = e.inert;
                    return o.createElement(o.Fragment, null, h ? o.createElement(c, { styles: I(a) }) : null, v ? o.createElement(S, { gapMode: e.gapMode }) : null);
                }),
                p.useMedium($),
                h);
            var $,
                H = o.forwardRef(function (e, t) {
                    return o.createElement(v, (0, r.pi)({}, e, { ref: t, sideCar: Y }));
                });
            H.classNames = v.classNames;
            const U = H;
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
            n.d(t, { XB: () => v });
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
                m = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                v = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: v, onPointerDownOutside: h, onFocusOutside: w, onInteractOutside: b, onDismiss: E, ...C } = e,
                        x = o.useContext(m),
                        [N, P] = o.useState(null),
                        R = N?.ownerDocument ?? globalThis?.document,
                        [, S] = o.useState({}),
                        T = (0, c.e)(t, (e) => P(e)),
                        M = Array.from(x.layers),
                        [O] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
                        L = M.indexOf(O),
                        W = N ? M.indexOf(N) : -1,
                        D = x.layersWithOutsidePointerEventsDisabled.size > 0,
                        A = W >= L,
                        j = (function (e, t = globalThis?.document) {
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
                                n = [...x.branches].some((e) => e.contains(t));
                            A && !n && (h?.(e), b?.(e), e.defaultPrevented || E?.());
                        }, R),
                        k = (function (e, t = globalThis?.document) {
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
                            [...x.branches].some((e) => e.contains(t)) || (w?.(e), b?.(e), e.defaultPrevented || E?.());
                        }, R);
                    return (
                        (0, u.e)((e) => {
                            W === x.layers.size - 1 && (v?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()));
                        }, R),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    n && (0 === x.layersWithOutsidePointerEventsDisabled.size && ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = "none")), x.layersWithOutsidePointerEventsDisabled.add(N)),
                                    x.layers.add(N),
                                    g(),
                                    () => {
                                        n && 1 === x.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, R, n, x]),
                        o.useEffect(
                            () => () => {
                                N && (x.layers.delete(N), x.layersWithOutsidePointerEventsDisabled.delete(N), g());
                            },
                            [N, x],
                        ),
                        o.useEffect(() => {
                            const e = () => S({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, l.jsx)(a.WV.div, { ...C, ref: T, style: { pointerEvents: D ? (A ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, i.M)(e.onFocusCapture, k.onFocusCapture), onBlurCapture: (0, i.M)(e.onBlurCapture, k.onBlurCapture), onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, j.onPointerDownCapture) })
                    );
                });
            v.displayName = "DismissableLayer";
            var h = o.forwardRef((e, t) => {
                const n = o.useContext(m),
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
            h.displayName = "DismissableLayerBranch";
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
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: m, onUnmountAutoFocus: g, ...y } = e,
                        [w, b] = r.useState(null),
                        E = (0, a.W)(m),
                        C = (0, a.W)(g),
                        x = r.useRef(null),
                        N = (0, o.e)(t, (e) => b(e)),
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
                                    w.contains(t) ? (x.current = t) : v(x.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (P.paused || !w) return;
                                    const t = e.relatedTarget;
                                    null !== t && (w.contains(t) || v(x.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && v(w);
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
                                h.add(P);
                                const t = document.activeElement;
                                if (!w.contains(t)) {
                                    const n = new CustomEvent(s, l);
                                    w.addEventListener(s, E),
                                        w.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((v(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(w)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && v(w));
                                }
                                return () => {
                                    w.removeEventListener(s, E),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, l);
                                            w.addEventListener(u, C), w.dispatchEvent(e), e.defaultPrevented || v(t ?? document.body, { select: !0 }), w.removeEventListener(u, C), h.remove(P);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [w, E, C, P]);
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
                                o && i ? (e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && v(i, { select: !0 })) : (e.preventDefault(), n && v(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, d, P.paused],
                    );
                    return (0, c.jsx)(i.WV.div, { tabIndex: -1, ...y, ref: N, onKeyDown: R });
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
        998946: (e, t, n) => {
            n.d(t, { ee: () => A, Eh: () => k, VY: () => j, fC: () => D, D7: () => g });
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
                m = n(335019),
                v = "Popper",
                [h, g] = (0, d.b)(v),
                [y, w] = h(v),
                b = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, c.jsx)(y, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            b.displayName = v;
            var E = "PopperAnchor",
                C = r.forwardRef((e, t) => {
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
            C.displayName = E;
            var x = "PopperContent",
                [N, P] = h(x),
                R = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: s = "bottom", sideOffset: u = 0, align: d = "center", alignOffset: v = 0, arrowPadding: h = 0, avoidCollisions: g = !0, collisionBoundary: y = [], collisionPadding: b = 0, sticky: E = "partial", hideWhenDetached: C = !1, updatePositionStrategy: P = "optimized", onPlaced: R, ...S } = e,
                        T = w(x, n),
                        [M, D] = r.useState(null),
                        A = (0, l.e)(t, (e) => D(e)),
                        [j, k] = r.useState(null),
                        F = (0, m.t)(j),
                        I = F?.width ?? 0,
                        _ = F?.height ?? 0,
                        V = s + ("center" !== d ? "-" + d : ""),
                        B = "number" == typeof b ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b },
                        Y = Array.isArray(y) ? y : [y],
                        $ = Y.length > 0,
                        H = { padding: B, boundary: Y.filter(O), altBoundary: $ },
                        {
                            refs: U,
                            floatingStyles: K,
                            placement: X,
                            isPositioned: z,
                            middlewareData: Z,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: V,
                            whileElementsMounted: (...e) => (0, i.Me)(...e, { animationFrame: "always" === P }),
                            elements: { reference: T.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + _, alignmentAxis: v }),
                                g && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === E ? (0, o.dr)() : void 0, ...H }),
                                g && (0, o.RR)({ ...H }),
                                (0, o.dp)({
                                    ...H,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            a = e.floating.style;
                                        a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                j && (0, o.x7)({ element: j, padding: h }),
                                L({ arrowWidth: I, arrowHeight: _ }),
                                C && (0, o.Cp)({ strategy: "referenceHidden", ...H }),
                            ],
                        }),
                        [q, G] = W(X),
                        J = (0, f.W)(R);
                    (0, p.b)(() => {
                        z && J?.();
                    }, [z, J]);
                    const Q = Z.arrow?.x,
                        ee = Z.arrow?.y,
                        te = 0 !== Z.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, p.b)(() => {
                            M && re(window.getComputedStyle(M).zIndex);
                        }, [M]),
                        (0, c.jsx)("div", { ref: U.setFloating, "data-radix-popper-content-wrapper": "", style: { ...K, transform: z ? K.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "), ...(Z.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, c.jsx)(N, { scope: n, placedSide: q, onArrowChange: k, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, c.jsx)(a.WV.div, { "data-side": q, "data-align": G, ...S, ref: A, style: { ...S.style, animation: z ? void 0 : "none" } }) }) })
                    );
                });
            R.displayName = x;
            var S = "PopperArrow",
                T = { top: "bottom", right: "left", bottom: "top", left: "right" },
                M = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = P(S, n),
                        i = T[o.placedSide];
                    return (0, c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(u, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function O(e) {
                return null !== e;
            }
            M.displayName = S;
            var L = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        i = 0 !== o.arrow?.centerOffset,
                        a = i ? 0 : e.arrowWidth,
                        c = i ? 0 : e.arrowHeight,
                        [s, u] = W(n),
                        l = { start: "0%", center: "50%", end: "100%" }[u],
                        d = (o.arrow?.x ?? 0) + a / 2,
                        f = (o.arrow?.y ?? 0) + c / 2;
                    let p = "",
                        m = "";
                    return "bottom" === s ? ((p = i ? l : `${d}px`), (m = -c + "px")) : "top" === s ? ((p = i ? l : `${d}px`), (m = `${r.floating.height + c}px`)) : "right" === s ? ((p = -c + "px"), (m = i ? l : `${f}px`)) : "left" === s && ((p = `${r.floating.width + c}px`), (m = i ? l : `${f}px`)), { data: { x: p, y: m } };
                },
            });
            function W(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var D = b,
                A = C,
                j = R,
                k = M;
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
        362834: (e, t, n) => {
            n.d(t, { VY: () => _, aV: () => F, fC: () => k, xz: () => I });
            var r = n(202784);
            function o(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            var i = n(392211),
                a = n(959548);
            function c(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function s(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = c(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : c(e[t], null);
                            }
                        };
                };
            }
            var u = n(861644);
            var l = (e) => {
                const { present: t, children: n } = e,
                    o = (function (e) {
                        const [t, n] = r.useState(),
                            o = r.useRef({}),
                            i = r.useRef(e),
                            a = r.useRef("none"),
                            c = e ? "mounted" : "unmounted",
                            [s, l] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(c, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = d(o.current);
                                a.current = "mounted" === s ? e : "none";
                            }, [s]),
                            (0, u.b)(() => {
                                const t = o.current,
                                    n = i.current;
                                if (n !== e) {
                                    const r = a.current,
                                        o = d(t);
                                    if (e) l("MOUNT");
                                    else if ("none" === o || "none" === t?.display) l("UNMOUNT");
                                    else {
                                        l(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    i.current = e;
                                }
                            }, [e, l]),
                            (0, u.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        r = (r) => {
                                            const a = d(o.current).includes(r.animationName);
                                            if (r.target === t && a && (l("ANIMATION_END"), !i.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        c = (e) => {
                                            e.target === t && (a.current = d(o.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", c),
                                        t.addEventListener("animationcancel", r),
                                        t.addEventListener("animationend", r),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
                                        }
                                    );
                                }
                                l("ANIMATION_END");
                            }, [t, l]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(s),
                                ref: r.useCallback((e) => {
                                    e && (o.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    i = "function" == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
                    a = (function (...e) {
                        return r.useCallback(s(...e), e);
                    })(
                        o.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(i),
                    );
                return "function" == typeof n || o.isPresent ? r.cloneElement(i, { ref: a }) : null;
            };
            function d(e) {
                return e?.animationName || "none";
            }
            l.displayName = "Presence";
            n(928316);
            var f = n(552322),
                p = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        i = r.Children.toArray(n),
                        a = i.find(h);
                    if (a) {
                        const e = a.props.children,
                            n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, f.jsx)(m, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, f.jsx)(m, { ...o, ref: t, children: n });
                });
            p.displayName = "Slot";
            var m = r.forwardRef((e, t) => {
                const { children: n, ...o } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(n),
                        i = (function (e, t) {
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
                        })(o, n.props);
                    return n.type !== r.Fragment && (i.ref = t ? s(t, e) : e), r.cloneElement(n, i);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            m.displayName = "SlotClone";
            var v = ({ children: e }) => (0, f.jsx)(f.Fragment, { children: e });
            function h(e) {
                return r.isValidElement(e) && e.type === v;
            }
            var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? p : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, f.jsx)(i, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var y = n(759241),
                w = n(387695),
                b = n(23372),
                E = "Tabs",
                [C, x] = (0, i.b)(E, [a.Pc]),
                N = (0, a.Pc)(),
                [P, R] = C(E),
                S = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: i, orientation: a = "horizontal", dir: c, activationMode: s = "automatic", ...u } = e,
                        l = (0, y.gm)(c),
                        [d, p] = (0, w.T)({ prop: r, onChange: o, defaultProp: i });
                    return (0, f.jsx)(P, { scope: n, baseId: (0, b.M)(), value: d, onValueChange: p, orientation: a, dir: l, activationMode: s, children: (0, f.jsx)(g.div, { dir: l, "data-orientation": a, ...u, ref: t }) });
                });
            S.displayName = E;
            var T = "TabsList",
                M = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, loop: r = !0, ...o } = e,
                        i = R(T, n),
                        c = N(n);
                    return (0, f.jsx)(a.fC, { asChild: !0, ...c, orientation: i.orientation, dir: i.dir, loop: r, children: (0, f.jsx)(g.div, { role: "tablist", "aria-orientation": i.orientation, ...o, ref: t }) });
                });
            M.displayName = T;
            var O = "TabsTrigger",
                L = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: r, disabled: i = !1, ...c } = e,
                        s = R(O, n),
                        u = N(n),
                        l = A(s.baseId, r),
                        d = j(s.baseId, r),
                        p = r === s.value;
                    return (0, f.jsx)(a.ck, {
                        asChild: !0,
                        ...u,
                        focusable: !i,
                        active: p,
                        children: (0, f.jsx)(g.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": p,
                            "aria-controls": d,
                            "data-state": p ? "active" : "inactive",
                            "data-disabled": i ? "" : void 0,
                            disabled: i,
                            id: l,
                            ...c,
                            ref: t,
                            onMouseDown: o(e.onMouseDown, (e) => {
                                i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(r);
                            }),
                            onKeyDown: o(e.onKeyDown, (e) => {
                                [" ", "Enter"].includes(e.key) && s.onValueChange(r);
                            }),
                            onFocus: o(e.onFocus, () => {
                                const e = "manual" !== s.activationMode;
                                p || i || !e || s.onValueChange(r);
                            }),
                        }),
                    });
                });
            L.displayName = O;
            var W = "TabsContent",
                D = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: o, forceMount: i, children: a, ...c } = e,
                        s = R(W, n),
                        u = A(s.baseId, o),
                        d = j(s.baseId, o),
                        p = o === s.value,
                        m = r.useRef(p);
                    return (
                        r.useEffect(() => {
                            const e = requestAnimationFrame(() => (m.current = !1));
                            return () => cancelAnimationFrame(e);
                        }, []),
                        (0, f.jsx)(l, { present: i || p, children: ({ present: n }) => (0, f.jsx)(g.div, { "data-state": p ? "active" : "inactive", "data-orientation": s.orientation, role: "tabpanel", "aria-labelledby": u, hidden: !n, id: d, tabIndex: 0, ...c, ref: t, style: { ...e.style, animationDuration: m.current ? "0s" : void 0 }, children: n && a }) })
                    );
                });
            function A(e, t) {
                return `${e}-trigger-${t}`;
            }
            function j(e, t) {
                return `${e}-content-${t}`;
            }
            D.displayName = W;
            var k = S,
                F = M,
                I = L,
                _ = D;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-cd9f24fc.2340b49a.js.map

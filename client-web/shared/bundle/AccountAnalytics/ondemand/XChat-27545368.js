"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-27545368"],
    {
        819755: (e, t, n) => {
            n.d(t, { Z: () => j });
            var r = n(305163),
                o = n(202784),
                i = "right-scroll-bar-position",
                a = "width-before-scroll-bar";
            function u(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var c = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
                l = new WeakMap();
            function s(e, t) {
                var n,
                    r,
                    i,
                    a =
                        ((n = t || null),
                        (r = function (t) {
                            return e.forEach(function (e) {
                                return u(e, t);
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
                    c(
                        function () {
                            var t = l.get(a);
                            if (t) {
                                var n = new Set(t),
                                    r = new Set(e),
                                    o = a.current;
                                n.forEach(function (e) {
                                    r.has(e) || u(e, null);
                                }),
                                    r.forEach(function (e) {
                                        n.has(e) || u(e, o);
                                    });
                            }
                            l.set(a, e);
                        },
                        [e],
                    ),
                    a
                );
            }
            function f(e) {
                return e;
            }
            function d(e, t) {
                void 0 === t && (t = f);
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
            var h = (function (e) {
                    void 0 === e && (e = {});
                    var t = d(null);
                    return (t.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), t;
                })(),
                v = function () {},
                m = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        i = o.useState({ onScrollCapture: v, onWheelCapture: v, onTouchMoveCapture: v }),
                        a = i[0],
                        u = i[1],
                        c = e.forwardProps,
                        l = e.children,
                        f = e.className,
                        d = e.removeScrollBar,
                        m = e.enabled,
                        p = e.shards,
                        g = e.sideCar,
                        b = e.noIsolation,
                        w = e.inert,
                        y = e.allowPinchZoom,
                        E = e.as,
                        M = void 0 === E ? "div" : E,
                        S = e.gapMode,
                        C = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        T = g,
                        k = s([n, t]),
                        R = (0, r.pi)((0, r.pi)({}, C), a);
                    return o.createElement(o.Fragment, null, m && o.createElement(T, { sideCar: h, removeScrollBar: d, shards: p, noIsolation: b, inert: w, setCallbacks: u, allowPinchZoom: !!y, lockRef: n, gapMode: S }), c ? o.cloneElement(o.Children.only(l), (0, r.pi)((0, r.pi)({}, R), { ref: k })) : o.createElement(M, (0, r.pi)({}, R, { className: f, ref: k }), l));
                });
            (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (m.classNames = { fullWidth: a, zeroRight: i });
            var p = function (e) {
                var t = e.sideCar,
                    n = (0, r._T)(e, ["sideCar"]);
                if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var i = t.read();
                if (!i) throw new Error("Sidecar medium not found");
                return o.createElement(i, (0, r.pi)({}, n));
            };
            p.isSideCarExport = !0;
            var g = n(250132);
            var b = function () {
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
                            ((e = b()),
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
                y = { left: 0, top: 0, right: 0, gap: 0 },
                E = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                M = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return y;
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
                S = w(),
                C = "data-scroll-locked",
                T = function (e, t, n, r) {
                    var o = e.left,
                        u = e.top,
                        c = e.right,
                        l = e.gap;
                    return (
                        void 0 === n && (n = "margin"),
                        "\n  ."
                            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(C, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(u, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(i, " {\n    right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a, " {\n    margin-right: ")
                            .concat(l, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i, " .")
                            .concat(i, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a, " .")
                            .concat(a, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(C, "] {\n    ")
                            .concat("--removed-body-scroll-bar-size", ": ")
                            .concat(l, "px;\n  }\n")
                    );
                },
                k = function () {
                    var e = parseInt(document.body.getAttribute(C) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                R = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? "margin" : r;
                    o.useEffect(function () {
                        return (
                            document.body.setAttribute(C, (k() + 1).toString()),
                            function () {
                                var e = k() - 1;
                                e <= 0 ? document.body.removeAttribute(C) : document.body.setAttribute(C, e.toString());
                            }
                        );
                    }, []);
                    var a = o.useMemo(
                        function () {
                            return M(i);
                        },
                        [i],
                    );
                    return o.createElement(S, { styles: T(a, !t, i, n ? "" : "!important") });
                },
                L = !1;
            if ("undefined" != typeof window)
                try {
                    var x = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (L = !0), !0;
                        },
                    });
                    window.addEventListener("test", x, x), window.removeEventListener("test", x, x);
                } catch (e) {
                    L = !1;
                }
            var N = !!L && { passive: !1 },
                P = function (e, t) {
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
                A = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), V(e, r))) {
                            var o = I(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                V = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return P(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return P(e, "overflowX");
                          })(t);
                },
                I = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                B = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                W = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                Y = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                z = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                D = 0,
                F = [];
            function X(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const O =
                ((_ = function (e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        i = o.useRef(),
                        a = o.useState(D++)[0],
                        u = o.useState(w)[0],
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
                                    var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(Y), !0).filter(Boolean);
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
                    var l = o.useCallback(function (e, t) {
                            if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !c.current.allowPinchZoom;
                            var r,
                                o = B(e),
                                a = n.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - o[0],
                                l = "deltaY" in e ? e.deltaY : a[1] - o[1],
                                s = e.target,
                                f = Math.abs(u) > Math.abs(l) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === s.type) return !1;
                            var d = A(f, s);
                            if (!d) return !0;
                            if ((d ? (r = f) : ((r = "v" === f ? "h" : "v"), (d = A(f, s))), !d)) return !1;
                            if ((!i.current && "changedTouches" in e && (u || l) && (i.current = r), !r)) return !0;
                            var h = i.current || r;
                            return (function (e, t, n, r, o) {
                                var i = (function (e, t) {
                                        return "h" === e && "rtl" === t ? -1 : 1;
                                    })(e, window.getComputedStyle(t).direction),
                                    a = i * r,
                                    u = n.target,
                                    c = t.contains(u),
                                    l = !1,
                                    s = a > 0,
                                    f = 0,
                                    d = 0;
                                do {
                                    var h = I(e, u),
                                        v = h[0],
                                        m = h[1] - h[2] - i * v;
                                    (v || m) && V(e, u) && ((f += m), (d += v)), (u = u instanceof ShadowRoot ? u.host : u.parentNode);
                                } while ((!c && u !== document.body) || (c && (t.contains(u) || t === u)));
                                return ((s && ((o && Math.abs(f) < 1) || (!o && a > f))) || (!s && ((o && Math.abs(d) < 1) || (!o && -a > d)))) && (l = !0), l;
                            })(h, t, e, "h" === h ? u : l, !0);
                        }, []),
                        s = o.useCallback(function (e) {
                            var n = e;
                            if (F.length && F[F.length - 1] === u) {
                                var r = "deltaY" in n ? W(n) : B(n),
                                    o = t.current.filter(function (e) {
                                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                        var t, o;
                                    })[0];
                                if (o && o.should) n.cancelable && n.preventDefault();
                                else if (!o) {
                                    var i = (c.current.shards || [])
                                        .map(Y)
                                        .filter(Boolean)
                                        .filter(function (e) {
                                            return e.contains(n.target);
                                        });
                                    (i.length > 0 ? l(n, i[0]) : !c.current.noIsolation) && n.cancelable && n.preventDefault();
                                }
                            }
                        }, []),
                        f = o.useCallback(function (e, n, r, o) {
                            var i = { name: e, delta: n, target: r, should: o, shadowParent: X(r) };
                            t.current.push(i),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== i;
                                    });
                                }, 1);
                        }, []),
                        d = o.useCallback(function (e) {
                            (n.current = B(e)), (i.current = void 0);
                        }, []),
                        h = o.useCallback(function (t) {
                            f(t.type, W(t), t.target, l(t, e.lockRef.current));
                        }, []),
                        v = o.useCallback(function (t) {
                            f(t.type, B(t), t.target, l(t, e.lockRef.current));
                        }, []);
                    o.useEffect(function () {
                        return (
                            F.push(u),
                            e.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: v }),
                            document.addEventListener("wheel", s, N),
                            document.addEventListener("touchmove", s, N),
                            document.addEventListener("touchstart", d, N),
                            function () {
                                (F = F.filter(function (e) {
                                    return e !== u;
                                })),
                                    document.removeEventListener("wheel", s, N),
                                    document.removeEventListener("touchmove", s, N),
                                    document.removeEventListener("touchstart", d, N);
                            }
                        );
                    }, []);
                    var m = e.removeScrollBar,
                        p = e.inert;
                    return o.createElement(o.Fragment, null, p ? o.createElement(u, { styles: z(a) }) : null, m ? o.createElement(R, { gapMode: e.gapMode }) : null);
                }),
                h.useMedium(_),
                p);
            var _,
                Z = o.forwardRef(function (e, t) {
                    return o.createElement(m, (0, r.pi)({}, e, { ref: t, sideCar: O }));
                });
            Z.classNames = m.classNames;
            const j = Z;
        },
        536574: (e, t, n) => {
            n.d(t, { T: () => u });
            var r = n(277108),
                o = n(202784),
                i = n(525757);
            const a = { border: 0, clip: "rect(0 0 0 0)", clipPath: "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" };
            function u(e) {
                let { children: t, elementType: n = "div", isFocusable: u, style: c, ...l } = e,
                    { visuallyHiddenProps: s } = (function (e = {}) {
                        let { style: t, isFocusable: n } = e,
                            [r, u] = (0, o.useState)(!1),
                            { focusWithinProps: c } = (0, i.L)({ isDisabled: !n, onFocusWithinChange: (e) => u(e) });
                        return { visuallyHiddenProps: { ...c, style: (0, o.useMemo)(() => (r ? t : t ? { ...a, ...t } : a), [r]) } };
                    })(e);
                return o.createElement(n, (0, r.d)(l, s), t);
            }
        },
        958682: (e, t, n) => {
            n.d(t, { x: () => l });
            var r = n(812238),
                o = n(223717),
                i = n(202784);
            const a = 0,
                u = 100,
                c = 1;
            function l(e) {
                const { isDisabled: t = !1, minValue: n = a, maxValue: l = u, numberFormatter: h, step: v = c, orientation: m = "horizontal" } = e;
                let p = (0, i.useMemo)(() => {
                        let e = (l - n) / 10;
                        return (e = (0, r.N4)(e, 0, e + v, v)), Math.max(e, v);
                    }, [v, l, n]),
                    g = (0, i.useCallback)(
                        (e) =>
                            null == e
                                ? void 0
                                : e.map((t, o) => {
                                      let i = 0 === o ? n : t[o - 1],
                                          a = o === e.length - 1 ? l : t[o + 1];
                                      return (0, r.N4)(t, i, a, v);
                                  }),
                        [n, l, v],
                    ),
                    b = (0, i.useMemo)(() => g(f(e.value)), [e.value]),
                    w = (0, i.useMemo)(() => {
                        var t;
                        return g(null !== (t = f(e.defaultValue)) && void 0 !== t ? t : [n]);
                    }, [e.defaultValue, n]),
                    y = d(e.value, e.defaultValue, e.onChange),
                    E = d(e.value, e.defaultValue, e.onChangeEnd);
                const [M, S] = (0, o.z)(b, w, y),
                    [C, T] = (0, i.useState)(new Array(M.length).fill(!1)),
                    k = (0, i.useRef)(new Array(M.length).fill(!0)),
                    [R, L] = (0, i.useState)(void 0),
                    x = (0, i.useRef)(M),
                    N = (0, i.useRef)(C);
                function P(e) {
                    return (e - n) / (l - n);
                }
                function A(e) {
                    return 0 === e ? n : M[e - 1];
                }
                function V(e) {
                    return e === M.length - 1 ? l : M[e + 1];
                }
                function I(e) {
                    return k.current[e];
                }
                function B(e, n) {
                    if (t || !I(e)) return;
                    const o = A(e),
                        i = V(e);
                    (n = (0, r.N4)(n, o, i, v)),
                        ((e) => {
                            (x.current = e), S(e);
                        })(s(x.current, e, n));
                }
                function W(e) {
                    return h.format(e);
                }
                function Y(e) {
                    const t = e * (l - n) + n;
                    return (0, r.uZ)(
                        (function (e) {
                            return Math.round((e - n) / v) * v + n;
                        })(t),
                        n,
                        l,
                    );
                }
                return {
                    values: M,
                    getThumbValue: (e) => M[e],
                    setThumbValue: B,
                    setThumbPercent: function (e, t) {
                        B(e, Y(t));
                    },
                    isThumbDragging: (e) => C[e],
                    setThumbDragging: function (e, n) {
                        if (t || !I(e)) return;
                        n && (x.current = M);
                        const r = N.current[e];
                        var o;
                        (N.current = s(N.current, e, n)), (o = N.current), (N.current = o), T(o), E && r && !N.current.some(Boolean) && E(x.current);
                    },
                    focusedThumb: R,
                    setFocusedThumb: L,
                    getThumbPercent: (e) => P(M[e]),
                    getValuePercent: P,
                    getThumbValueLabel: (e) => W(M[e]),
                    getFormattedValue: W,
                    getThumbMinValue: A,
                    getThumbMaxValue: V,
                    getPercentValue: Y,
                    isThumbEditable: I,
                    setThumbEditable: function (e, t) {
                        k.current[e] = t;
                    },
                    incrementThumb: function (e, t = 1) {
                        let o = Math.max(t, v);
                        B(e, (0, r.N4)(M[e] + o, n, l, v));
                    },
                    decrementThumb: function (e, t = 1) {
                        let o = Math.max(t, v);
                        B(e, (0, r.N4)(M[e] - o, n, l, v));
                    },
                    step: v,
                    pageSize: p,
                    orientation: m,
                    isDisabled: t,
                };
            }
            function s(e, t, n) {
                return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
            }
            function f(e) {
                if (null != e) return Array.isArray(e) ? e : [e];
            }
            function d(e, t, n) {
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
                    i = o >= 0 ? r.length - o : 0;
                if (i > 0) {
                    let e = Math.pow(10, i);
                    n = Math.round(n * e) / e;
                }
                return n;
            }
            function i(e, t, n, r) {
                (t = Number(t)), (n = Number(n));
                let i = (e - (isNaN(t) ? 0 : t)) % r,
                    a = o(2 * Math.abs(i) >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
                return isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(o(n / r, r)) * r) : a < t ? (a = t) : !isNaN(n) && a > n && (a = t + Math.floor(o((n - t) / r, r)) * r), (a = o(a, r)), a;
            }
            n.d(t, { N4: () => i, uZ: () => r });
        },
        223717: (e, t, n) => {
            n.d(t, { z: () => o });
            var r = n(202784);
            function o(e, t, n) {
                let [o, i] = (0, r.useState)(e || t),
                    a = (0, r.useRef)(void 0 !== e),
                    u = void 0 !== e;
                (0, r.useEffect)(() => {
                    a.current;
                    a.current = u;
                }, [u]);
                let c = u ? e : o,
                    l = (0, r.useCallback)(
                        (e, ...t) => {
                            let r = (e, ...t) => {
                                n && (Object.is(c, e) || n(e, ...t)), u || (c = e);
                            };
                            if ("function" == typeof e) {
                                i((n, ...o) => {
                                    let i = e(u ? c : n, ...o);
                                    return r(i, ...t), u ? n : i;
                                });
                            } else u || i(e), r(e, ...t);
                        },
                        [u, c, n],
                    );
                return [c, l];
            }
        },
        801074: (e, t, n) => {
            n.d(t, { dM: () => q });
            var r = n(552322),
                o = n(202784),
                i = n(928316);
            const a = null,
                { min: u, max: c, abs: l, floor: s } = Math,
                f = (e, t, n) => u(n, c(t, e)),
                d = (e) => [...e].sort((e, t) => e - t),
                h =
                    "function" == typeof queueMicrotask
                        ? queueMicrotask
                        : (e) => {
                              Promise.resolve().then(e);
                          },
                v = (e) => {
                    let t, n;
                    return () => (t || ((t = !0), (n = e())), n);
                },
                m = -1,
                p = (e, t, n) => {
                    const r = n ? "unshift" : "push";
                    for (let n = 0; n < t; n++) e[r](m);
                    return e;
                },
                g = (e, t) => {
                    const n = e.t[t];
                    return n === m ? e.o : n;
                },
                b = (e, t, n) => {
                    const r = e.t[t] === m;
                    return (e.t[t] = n), (e.i = u(t, e.i)), r;
                },
                w = (e, t) => {
                    if (!e.l) return 0;
                    if (e.i >= t) return e.u[t];
                    e.i < 0 && ((e.u[0] = 0), (e.i = 0));
                    let n = e.i,
                        r = e.u[n];
                    for (; n < t; ) (r += g(e, n)), (e.u[++n] = r);
                    return (e.i = t), r;
                },
                y = (e, t, n = 0, r = e.l - 1) => {
                    for (; n <= r; ) {
                        const o = s((n + r) / 2),
                            i = w(e, o);
                        if (i <= t) {
                            if (i + g(e, o) > t) return o;
                            n = o + 1;
                        } else r = o - 1;
                    }
                    return f(n, 0, e.l - 1);
                },
                E = (e, t, n) => {
                    const r = t - e.l;
                    return (e.i = n ? -1 : u(t - 1, e.i)), (e.l = t), r > 0 ? (p(e.u, r), p(e.t, r, n), e.o * r) : (e.u.splice(r), (n ? e.t.splice(0, -r) : e.t.splice(r)).reduce((t, n) => t - (n === m ? e.o : n), 0));
                },
                M = "undefined" != typeof window,
                S = () => document.documentElement,
                C = (e) => e.ownerDocument,
                T = (e) => e.defaultView,
                k = v(() => !!M && "rtl" === getComputedStyle(S()).direction),
                R = v(() => /iP(hone|od|ad)/.test(navigator.userAgent)),
                L = v(() => "scrollBehavior" in S().style),
                x = (e) => c(e.h(), e.p()),
                N = (e) => !!e.p(),
                P = (e, t = 40, n = 4, r = 0, o, i = !1) => {
                    let s = !!r,
                        f = [],
                        h = 0,
                        v = 0,
                        M = 0,
                        S = 0,
                        C = 0,
                        T = 0,
                        k = 0,
                        L = 0,
                        x = 0,
                        N = s ? [0, c(r - 1, 0)] : a,
                        P = [0, 0],
                        A = 0;
                    const V = ((e, t, n) => ({ o: n ? n[1] : t, t: n && n[0] ? p(n[0].slice(0, u(e, n[0].length)), c(0, e - n[0].length)) : p([], e), l: e, i: -1, u: p([], e) }))(e, t, o),
                        I = new Set(),
                        B = () => M - v,
                        W = () => B() + T + C,
                        Y = (e) =>
                            ((e, t, n, r) => {
                                if (((r = u(r, e.l - 1)), w(e, r) <= t)) {
                                    const o = y(e, t + n, r);
                                    return [y(e, t, r, o), o];
                                }
                                {
                                    const o = y(e, t, void 0, r);
                                    return [o, y(e, t + n, o)];
                                }
                            })(V, e, h, P[0]),
                        z = () => ((e) => (e.l ? w(e, e.l - 1) + g(e, e.l - 1) : 0))(V),
                        D = (e) => w(V, e) - T,
                        F = (e) => g(V, e),
                        X = (e) => {
                            e && (R() && 0 !== L ? (T += e) : ((C += e), S++));
                        };
                    return {
                        v: () => f,
                        _: () => ((e) => [e.t.slice(), e.o])(V),
                        m: () => {
                            if (k) return P;
                            let [e, t] = Y(c(0, W()));
                            return N && ((e = u(e, N[0])), (t = c(t, N[1]))), 1 !== L && (e -= c(0, n)), 2 !== L && (t += c(0, n)), (P = [c(e, 0), u(t, V.l - 1)]);
                        },
                        $: () => y(V, W()),
                        S: () => y(V, W() + h),
                        I: (e) => V.t[e] === m,
                        k: () => !!N && V.t.slice(c(0, N[0] - 1), u(V.l - 1, N[1] + 1) + 1).includes(m),
                        T: D,
                        R: F,
                        M: () => V.l,
                        C: () => M,
                        H: () => 0 !== L,
                        p: () => h,
                        W: () => v,
                        h: z,
                        J: () => S,
                        B: () => ((k = C), (C = 0), [k, 2 === x || B() + h >= z()]),
                        O: (e, t) => {
                            const n = [e, t];
                            return (
                                I.add(n),
                                () => {
                                    I.delete(n);
                                }
                            );
                        },
                        L: (e, t) => {
                            let n,
                                r,
                                o = 0;
                            switch (e) {
                                case 1: {
                                    const e = k;
                                    k = 0;
                                    const n = t - M,
                                        i = l(n);
                                    (e && i < l(e) + 1) || 0 !== x || (L = n < 0 ? 2 : 1), s && ((N = a), (s = !1)), (M = t), (o = 4);
                                    const u = B();
                                    u >= -h && u <= z() && ((o += 1), (r = i > h));
                                    break;
                                }
                                case 2:
                                    (o = 8), 0 !== L && ((n = !0), (o += 1)), (L = 0), (x = 0), (N = a);
                                    break;
                                case 3: {
                                    const e = t.filter(([e, t]) => V.t[e] !== t);
                                    if (!e.length) break;
                                    X(e.reduce((e, [t, n]) => ((2 === x || (N ? !s && t < N[0] : D(t) + (0 === L && 0 === x ? F(t) : 0) < B())) && (e += n - F(t)), e), 0));
                                    for (const [t, n] of e) {
                                        const e = F(t),
                                            r = b(V, t, n);
                                        i && (A += r ? n : n - e);
                                    }
                                    i &&
                                        h &&
                                        A > h &&
                                        (X(
                                            ((e, t) => {
                                                let n = 0;
                                                const r = [];
                                                e.t.forEach((e, o) => {
                                                    e !== m && (r.push(e), o < t && n++);
                                                }),
                                                    (e.i = -1);
                                                const o = d(r),
                                                    i = o.length,
                                                    a = (i / 2) | 0,
                                                    u = i % 2 == 0 ? (o[a - 1] + o[a]) / 2 : o[a],
                                                    l = e.o;
                                                return ((e.o = u) - l) * c(t - n, 0);
                                            })(V, y(V, W())),
                                        ),
                                        (i = !1)),
                                        (o = 3),
                                        (r = !0);
                                    break;
                                }
                                case 4:
                                    h !== t && ((h = t), (o = 3));
                                    break;
                                case 5:
                                    t[1] ? (X(E(V, t[0], !0)), (x = 2), (o = 1)) : (E(V, t[0]), (o = 1));
                                    break;
                                case 6:
                                    v = t;
                                    break;
                                case 7:
                                    x = 1;
                                    break;
                                case 8:
                                    (N = Y(t)), (o = 1);
                            }
                            o &&
                                ((f = []),
                                n && T && ((C += T), (T = 0), S++),
                                I.forEach(([e, t]) => {
                                    o & e && t(r);
                                }));
                        },
                    };
                },
                A = setTimeout,
                V = (e, t) => (t && k() ? -e : e),
                I = (e, t, n, r, o, i) => {
                    const u = Date.now;
                    let c = 0,
                        l = !1,
                        s = !1,
                        f = !1,
                        d = !1;
                    const h = (() => {
                            let t;
                            const n = () => {
                                    t != a && clearTimeout(t);
                                },
                                r = () => {
                                    n(),
                                        (t = A(() => {
                                            (t = a),
                                                (() => {
                                                    if (l || s) return (l = !1), void h();
                                                    (f = !1), e.L(2);
                                                })();
                                        }, 150));
                                };
                            return (r.P = n), r;
                        })(),
                        v = () => {
                            (c = u()), f && (d = !0), i && e.L(6, i()), e.L(1, r()), h();
                        },
                        m = (t) => {
                            if (l || !e.H() || t.ctrlKey) return;
                            const r = u() - c;
                            150 > r && 50 < r && (n ? t.deltaX : t.deltaY) && (l = !0);
                        },
                        p = () => {
                            (s = !0), (f = d = !1);
                        },
                        g = () => {
                            (s = !1), R() && (f = !0);
                        };
                    return (
                        t.addEventListener("scroll", v),
                        t.addEventListener("wheel", m, { passive: !0 }),
                        t.addEventListener("touchstart", p, { passive: !0 }),
                        t.addEventListener("touchend", g, { passive: !0 }),
                        {
                            A: () => {
                                t.removeEventListener("scroll", v), t.removeEventListener("wheel", m), t.removeEventListener("touchstart", p), t.removeEventListener("touchend", g), h.P();
                            },
                            V: () => {
                                const [t, i] = e.B();
                                t && (o(V(t, n), i, d), (d = !1), i && e.p() > e.h() && e.L(1, r()));
                            },
                        }
                    );
                },
                B = (e, t) => {
                    let n, r, o;
                    const i = t ? "scrollLeft" : "scrollTop",
                        a = t ? "overflowX" : "overflowY",
                        u = async (r, a) => {
                            if (!n) return void h(() => u(r, a));
                            o && o();
                            const c = () => {
                                let t;
                                return [
                                    new Promise((n, r) => {
                                        (t = n), (o = r), N(e) && A(r, 150);
                                    }),
                                    e.O(2, () => {
                                        t && t();
                                    }),
                                ];
                            };
                            if (a && L()) {
                                for (; e.L(8, r()), e.k(); ) {
                                    const [e, t] = c();
                                    try {
                                        await e;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        t();
                                    }
                                }
                                n.scrollTo({ [t ? "left" : "top"]: V(r(), t), behavior: "smooth" });
                            } else
                                for (;;) {
                                    const [o, a] = c();
                                    try {
                                        (n[i] = V(r(), t)), e.L(7), await o;
                                    } catch (e) {
                                        return;
                                    } finally {
                                        a();
                                    }
                                }
                        };
                    return {
                        X(u) {
                            (n = u),
                                (r = I(
                                    e,
                                    u,
                                    t,
                                    () => V(u[i], t),
                                    (t, n, r) => {
                                        if (r) {
                                            const e = u.style,
                                                t = e[a];
                                            (e[a] = "hidden"),
                                                A(() => {
                                                    e[a] = t;
                                                });
                                        }
                                        n ? ((u[i] = e.C() + t), o && o()) : (u[i] += t);
                                    },
                                ));
                        },
                        Y() {
                            r && r.A();
                        },
                        j(e) {
                            u(() => e);
                        },
                        q(t) {
                            (t += e.C()), u(() => t);
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
                            u(() => o + e.W() + e.T(t) + ("end" === n ? e.R(t) - e.p() : "center" === n ? (e.R(t) - e.p()) / 2 : 0), r);
                        },
                        U: () => {
                            r && r.V();
                        },
                    };
                },
                W = (e) => {
                    let t;
                    return {
                        F(n) {
                            (t || (t = new (T(C(n)).ResizeObserver)(e))).observe(n);
                        },
                        G(e) {
                            t.unobserve(e);
                        },
                        A() {
                            t && t.disconnect();
                        },
                    };
                },
                Y = (e, t) => {
                    let n;
                    const r = t ? "width" : "height",
                        o = new WeakMap(),
                        i = W((t) => {
                            const i = [];
                            for (const { target: u, contentRect: c } of t)
                                if (u.offsetParent)
                                    if (u === n) e.L(4, c[r]);
                                    else {
                                        const e = o.get(u);
                                        e != a && i.push([e, c[r]]);
                                    }
                            i.length && e.L(3, i);
                        });
                    return {
                        K(e) {
                            i.F((n = e));
                        },
                        N: (e, t) => (
                            o.set(e, t),
                            i.F(e),
                            () => {
                                o.delete(e), i.G(e);
                            }
                        ),
                        Y: i.A,
                    };
                },
                z = M ? o.useLayoutEffect : o.useEffect,
                D = "current",
                F = (e, t) => {
                    if (Array.isArray(e)) for (const n of e) F(n, t);
                    else null == e || "boolean" == typeof e || t.push(e);
                },
                X = (e, t) => {
                    const n = e.key;
                    return null != n ? n : "_" + t;
                },
                O = (e) => {
                    const t = (0, o.useRef)();
                    return t[D] || (t[D] = e());
                },
                _ = (e) => {
                    const t = (0, o.useRef)(e);
                    return (
                        z(() => {
                            t[D] = e;
                        }, [e]),
                        t
                    );
                },
                Z = (0, o.memo)(({ Z: e, ee: t, te: n, ne: i, oe: a, re: u, ie: c, se: l }) => {
                    const s = (0, o.useRef)(null);
                    z(() => t(s[D], n), [n]);
                    const f = (0, o.useMemo)(() => {
                        const e = { position: a && l ? void 0 : "absolute", [c ? "height" : "width"]: "100%", [c ? "top" : "left"]: 0, [c ? (k() ? "right" : "left") : "top"]: i, visibility: !a || l ? "visible" : "hidden" };
                        return c && (e.display = "flex"), e;
                    }, [i, a, l, c]);
                    return (0, r.jsx)(u, "string" == typeof u ? { ref: s, style: f, children: e } : { ref: s, style: f, index: n, children: e });
                }),
                j = (e) => (0, o.useReducer)(e.v, void 0, e.v)[1],
                H = (e, t) =>
                    (0, o.useMemo)(() => {
                        if ("function" == typeof e) return [e, t || 0];
                        const n = ((e) => {
                            const t = [];
                            return F(e, t), t;
                        })(e);
                        return [(e) => n[e], n.length];
                    }, [e, t]),
                q = (0, o.forwardRef)(({ children: e, count: t, overscan: n, itemSize: a, shift: u, horizontal: c, keepMounted: l, cache: s, startMargin: f = 0, ssrCount: v, as: m = "div", item: p = "div", scrollRef: g, onScroll: b, onScrollEnd: w }, y) => {
                    const [E, M] = H(e, t),
                        S = (0, o.useRef)(null),
                        C = (0, o.useRef)(!!v),
                        T = _(b),
                        k = _(w),
                        [R, L, N, A] = O(() => {
                            const e = !!c,
                                t = P(M, a, n, v, s, !a);
                            return [t, Y(t, e), B(t, e), e];
                        });
                    M !== R.M() && R.L(5, [M, u]), f !== R.W() && R.L(6, f);
                    const V = j(R),
                        [I, W] = R.m(),
                        F = R.H(),
                        q = R.J(),
                        K = R.h(),
                        G = [],
                        J = (e) => {
                            const t = E(e);
                            return (0, r.jsx)(Z, { ee: L.N, te: e, ne: R.T(e), oe: R.I(e), re: p, Z: t, ie: A, se: C[D] }, X(t, e));
                        };
                    z(() => {
                        C[D] = !1;
                        const e = R.O(1, (e) => {
                                e ? (0, i.flushSync)(V) : V();
                            }),
                            t = R.O(4, () => {
                                T[D] && T[D](R.C());
                            }),
                            n = R.O(8, () => {
                                k[D] && k[D]();
                            }),
                            r = (e) => {
                                L.K(e), N.X(e);
                            };
                        return (
                            g ? h(() => r(g[D])) : r(S[D].parentElement),
                            () => {
                                e(), t(), n(), L.Y(), N.Y();
                            }
                        );
                    }, []),
                        z(() => {
                            N.U();
                        }, [q]),
                        (0, o.useImperativeHandle)(
                            y,
                            () => ({
                                get cache() {
                                    return R._();
                                },
                                get scrollOffset() {
                                    return R.C();
                                },
                                get scrollSize() {
                                    return x(R);
                                },
                                get viewportSize() {
                                    return R.p();
                                },
                                findStartIndex: R.$,
                                findEndIndex: R.S,
                                getItemOffset: R.T,
                                getItemSize: R.R,
                                scrollToIndex: N.D,
                                scrollTo: N.j,
                                scrollBy: N.q,
                            }),
                            [],
                        );
                    for (let e = I, t = W; e <= t; e++) G.push(J(e));
                    if (l) {
                        const e = [],
                            t = [];
                        d(l).forEach((n) => {
                            n < I && e.push(J(n)), n > W && t.push(J(n));
                        }),
                            G.unshift(...e),
                            G.push(...t);
                    }
                    return (0, r.jsx)(m, { ref: S, style: { overflowAnchor: "none", flex: "none", position: "relative", visibility: "hidden", width: A ? K : "100%", height: A ? "100%" : K, pointerEvents: F ? "none" : void 0 }, children: G });
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-27545368.7b39c1da.js.map

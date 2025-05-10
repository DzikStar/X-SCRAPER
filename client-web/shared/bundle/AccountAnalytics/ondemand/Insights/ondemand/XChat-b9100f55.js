"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-b9100f55"],
    {
        495346: (e, n, t) => {
            t.d(n, { Av: () => c, pF: () => r, xv: () => a, zi: () => o });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                c = "--removed-body-scroll-bar-size";
        },
        894200: (e, n, t) => {
            t.d(n, { jp: () => v });
            var r = t(202784),
                o = t(633097),
                a = t(495346),
                c = { left: 0, top: 0, right: 0, gap: 0 },
                i = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                u = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return c;
                    var n = (function (e) {
                            var n = window.getComputedStyle(document.body),
                                t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = n["padding" === e ? "paddingTop" : "marginTop"],
                                o = n["padding" === e ? "paddingRight" : "marginRight"];
                            return [i(t), i(r), i(o)];
                        })(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: n[0], top: n[1], right: n[2], gap: Math.max(0, r - t + n[2] - n[0]) };
                },
                l = (0, o.Ws)(),
                d = "data-scroll-locked",
                s = function (e, n, t, r) {
                    var o = e.left,
                        c = e.top,
                        i = e.right,
                        u = e.gap;
                    return (
                        void 0 === t && (t = "margin"),
                        "\n  ."
                            .concat(a.xv, " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(d, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(a.pF, " {\n    right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " {\n    margin-right: ")
                            .concat(u, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.pF, " .")
                            .concat(a.pF, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a.zi, " .")
                            .concat(a.zi, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(d, "] {\n    ")
                            .concat(a.Av, ": ")
                            .concat(u, "px;\n  }\n")
                    );
                },
                f = function () {
                    var e = parseInt(document.body.getAttribute(d) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                v = function (e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        o = e.gapMode,
                        a = void 0 === o ? "margin" : o;
                    r.useEffect(function () {
                        return (
                            document.body.setAttribute(d, (f() + 1).toString()),
                            function () {
                                var e = f() - 1;
                                e <= 0 ? document.body.removeAttribute(d) : document.body.setAttribute(d, e.toString());
                            }
                        );
                    }, []);
                    var c = r.useMemo(
                        function () {
                            return u(a);
                        },
                        [a],
                    );
                    return r.createElement(l, { styles: s(c, !n, a, t ? "" : "!important") });
                };
        },
        234413: (e, n, t) => {
            t.d(n, { Z: () => M });
            var r = t(305163),
                o = t(202784),
                a = t(495346),
                c = t(287359),
                i = (0, t(964597)._)(),
                u = function () {},
                l = o.forwardRef(function (e, n) {
                    var t = o.useRef(null),
                        a = o.useState({ onScrollCapture: u, onWheelCapture: u, onTouchMoveCapture: u }),
                        l = a[0],
                        d = a[1],
                        s = e.forwardProps,
                        f = e.children,
                        v = e.className,
                        h = e.removeScrollBar,
                        p = e.enabled,
                        m = e.shards,
                        g = e.sideCar,
                        w = e.noIsolation,
                        b = e.inert,
                        y = e.allowPinchZoom,
                        E = e.as,
                        C = void 0 === E ? "div" : E,
                        k = e.gapMode,
                        R = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        S = g,
                        L = (0, c.q)([t, n]),
                        T = (0, r.pi)((0, r.pi)({}, R), l);
                    return o.createElement(o.Fragment, null, p && o.createElement(S, { sideCar: i, removeScrollBar: h, shards: m, noIsolation: w, inert: b, setCallbacks: d, allowPinchZoom: !!y, lockRef: t, gapMode: k }), s ? o.cloneElement(o.Children.only(f), (0, r.pi)((0, r.pi)({}, T), { ref: L })) : o.createElement(C, (0, r.pi)({}, T, { className: v, ref: L }), f));
                });
            (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (l.classNames = { fullWidth: a.zi, zeroRight: a.pF });
            var d = t(757758),
                s = t(894200),
                f = t(633097),
                v = !1;
            if ("undefined" != typeof window)
                try {
                    var h = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (v = !0), !0;
                        },
                    });
                    window.addEventListener("test", h, h), window.removeEventListener("test", h, h);
                } catch (e) {
                    v = !1;
                }
            var p = !!v && { passive: !1 },
                m = function (e, n) {
                    var t = window.getComputedStyle(e);
                    return (
                        "hidden" !== t[n] &&
                        !(
                            t.overflowY === t.overflowX &&
                            !(function (e) {
                                return "TEXTAREA" === e.tagName;
                            })(e) &&
                            "visible" === t[n]
                        )
                    );
                },
                g = function (e, n) {
                    var t = n.ownerDocument,
                        r = n;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), w(e, r))) {
                            var o = b(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== t.body);
                    return !1;
                },
                w = function (e, n) {
                    return "v" === e
                        ? (function (e) {
                              return m(e, "overflowY");
                          })(n)
                        : (function (e) {
                              return m(e, "overflowX");
                          })(n);
                },
                b = function (e, n) {
                    return "v" === e
                        ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(n);
                    var t;
                },
                y = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                E = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                C = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                k = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                R = 0,
                S = [];
            function L(e) {
                for (var n = null; null !== e; ) e instanceof ShadowRoot && ((n = e.host), (e = e.host)), (e = e.parentNode);
                return n;
            }
            const T = (0, d.L)(i, function (e) {
                var n = o.useRef([]),
                    t = o.useRef([0, 0]),
                    a = o.useRef(),
                    c = o.useState(R++)[0],
                    i = o.useState(f.Ws)[0],
                    u = o.useRef(e);
                o.useEffect(
                    function () {
                        u.current = e;
                    },
                    [e],
                ),
                    o.useEffect(
                        function () {
                            if (e.inert) {
                                document.body.classList.add("block-interactivity-".concat(c));
                                var n = (0, r.ev)([e.lockRef.current], (e.shards || []).map(C), !0).filter(Boolean);
                                return (
                                    n.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(c));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(c)),
                                            n.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(c));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var l = o.useCallback(function (e, n) {
                        if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                        var r,
                            o = y(e),
                            c = t.current,
                            i = "deltaX" in e ? e.deltaX : c[0] - o[0],
                            l = "deltaY" in e ? e.deltaY : c[1] - o[1],
                            d = e.target,
                            s = Math.abs(i) > Math.abs(l) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === d.type) return !1;
                        var f = g(s, d);
                        if (!f) return !0;
                        if ((f ? (r = s) : ((r = "v" === s ? "h" : "v"), (f = g(s, d))), !f)) return !1;
                        if ((!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r)) return !0;
                        var v = a.current || r;
                        return (function (e, n, t, r, o) {
                            var a = (function (e, n) {
                                    return "h" === e && "rtl" === n ? -1 : 1;
                                })(e, window.getComputedStyle(n).direction),
                                c = a * r,
                                i = t.target,
                                u = n.contains(i),
                                l = !1,
                                d = c > 0,
                                s = 0,
                                f = 0;
                            do {
                                var v = b(e, i),
                                    h = v[0],
                                    p = v[1] - v[2] - a * h;
                                (h || p) && w(e, i) && ((s += p), (f += h)), (i = i instanceof ShadowRoot ? i.host : i.parentNode);
                            } while ((!u && i !== document.body) || (u && (n.contains(i) || n === i)));
                            return ((d && ((o && Math.abs(s) < 1) || (!o && c > s))) || (!d && ((o && Math.abs(f) < 1) || (!o && -c > f)))) && (l = !0), l;
                        })(v, n, e, "h" === v ? i : l, !0);
                    }, []),
                    d = o.useCallback(function (e) {
                        var t = e;
                        if (S.length && S[S.length - 1] === i) {
                            var r = "deltaY" in t ? E(t) : y(t),
                                o = n.current.filter(function (e) {
                                    return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && ((n = e.delta), (o = r), n[0] === o[0] && n[1] === o[1]);
                                    var n, o;
                                })[0];
                            if (o && o.should) t.cancelable && t.preventDefault();
                            else if (!o) {
                                var a = (u.current.shards || [])
                                    .map(C)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(t.target);
                                    });
                                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault();
                            }
                        }
                    }, []),
                    v = o.useCallback(function (e, t, r, o) {
                        var a = { name: e, delta: t, target: r, should: o, shadowParent: L(r) };
                        n.current.push(a),
                            setTimeout(function () {
                                n.current = n.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    h = o.useCallback(function (e) {
                        (t.current = y(e)), (a.current = void 0);
                    }, []),
                    m = o.useCallback(function (n) {
                        v(n.type, E(n), n.target, l(n, e.lockRef.current));
                    }, []),
                    T = o.useCallback(function (n) {
                        v(n.type, y(n), n.target, l(n, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        S.push(i),
                        e.setCallbacks({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: T }),
                        document.addEventListener("wheel", d, p),
                        document.addEventListener("touchmove", d, p),
                        document.addEventListener("touchstart", h, p),
                        function () {
                            (S = S.filter(function (e) {
                                return e !== i;
                            })),
                                document.removeEventListener("wheel", d, p),
                                document.removeEventListener("touchmove", d, p),
                                document.removeEventListener("touchstart", h, p);
                        }
                    );
                }, []);
                var x = e.removeScrollBar,
                    M = e.inert;
                return o.createElement(o.Fragment, null, M ? o.createElement(i, { styles: k(c) }) : null, x ? o.createElement(s.jp, { gapMode: e.gapMode }) : null);
            });
            var x = o.forwardRef(function (e, n) {
                return o.createElement(l, (0, r.pi)({}, e, { ref: n, sideCar: T }));
            });
            x.classNames = l.classNames;
            const M = x;
        },
        633097: (e, n, t) => {
            t.d(n, { Ws: () => c });
            var r = t(202784),
                o = t(250132);
            var a = function () {
                    var e = 0,
                        n = null;
                    return {
                        add: function (t) {
                            var r, a;
                            0 == e &&
                                (n = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var n = (0, o.V)();
                                    return n && e.setAttribute("nonce", n), e;
                                })()) &&
                                ((a = t),
                                (r = n).styleSheet ? (r.styleSheet.cssText = a) : r.appendChild(document.createTextNode(a)),
                                (function (e) {
                                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
                                })(n)),
                                e++;
                        },
                        remove: function () {
                            !--e && n && (n.parentNode && n.parentNode.removeChild(n), (n = null));
                        },
                    };
                },
                c = function () {
                    var e,
                        n =
                            ((e = a()),
                            function (n, t) {
                                r.useEffect(
                                    function () {
                                        return (
                                            e.add(n),
                                            function () {
                                                e.remove();
                                            }
                                        );
                                    },
                                    [n && t],
                                );
                            });
                    return function (e) {
                        var t = e.styles,
                            r = e.dynamic;
                        return n(t, r), null;
                    };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-b9100f55.2d59e3ca.js.map

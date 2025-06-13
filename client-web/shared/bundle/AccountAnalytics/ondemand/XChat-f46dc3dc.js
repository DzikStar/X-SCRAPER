"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-f46dc3dc"],
    {
        819755: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(305163),
                o = n(202784),
                a = "right-scroll-bar-position",
                i = "width-before-scroll-bar";
            function u(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var l = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
                c = new WeakMap();
            function d(e, t) {
                var n,
                    r,
                    a,
                    i =
                        ((n = t || null),
                        (r = function (t) {
                            return e.forEach(function (e) {
                                return u(e, t);
                            });
                        }),
                        ((a = (0, o.useState)(function () {
                            return {
                                value: n,
                                callback: r,
                                facade: {
                                    get current() {
                                        return a.value;
                                    },
                                    set current(e) {
                                        var t = a.value;
                                        t !== e && ((a.value = e), a.callback(e, t));
                                    },
                                },
                            };
                        })[0]).callback = r),
                        a.facade);
                return (
                    l(
                        function () {
                            var t = c.get(i);
                            if (t) {
                                var n = new Set(t),
                                    r = new Set(e),
                                    o = i.current;
                                n.forEach(function (e) {
                                    r.has(e) || u(e, null);
                                }),
                                    r.forEach(function (e) {
                                        n.has(e) || u(e, o);
                                    });
                            }
                            c.set(i, e);
                        },
                        [e],
                    ),
                    i
                );
            }
            function s(e) {
                return e;
            }
            function f(e, t) {
                void 0 === t && (t = s);
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
                        var a = function () {
                                var n = t;
                                (t = []), n.forEach(e);
                            },
                            i = function () {
                                return Promise.resolve().then(a);
                            };
                        i(),
                            (n = {
                                push: function (e) {
                                    t.push(e), i();
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
                        a = o.useState({ onScrollCapture: v, onWheelCapture: v, onTouchMoveCapture: v }),
                        i = a[0],
                        u = a[1],
                        l = e.forwardProps,
                        c = e.children,
                        s = e.className,
                        f = e.removeScrollBar,
                        h = e.enabled,
                        g = e.shards,
                        m = e.sideCar,
                        b = e.noIsolation,
                        w = e.inert,
                        y = e.allowPinchZoom,
                        T = e.as,
                        P = void 0 === T ? "div" : T,
                        E = e.gapMode,
                        M = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        S = m,
                        k = d([n, t]),
                        C = (0, r.pi)((0, r.pi)({}, M), i);
                    return o.createElement(o.Fragment, null, h && o.createElement(S, { sideCar: p, removeScrollBar: f, shards: g, noIsolation: b, inert: w, setCallbacks: u, allowPinchZoom: !!y, lockRef: n, gapMode: E }), l ? o.cloneElement(o.Children.only(c), (0, r.pi)((0, r.pi)({}, C), { ref: k })) : o.createElement(P, (0, r.pi)({}, C, { className: s, ref: k }), c));
                });
            (h.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (h.classNames = { fullWidth: i, zeroRight: a });
            var g = function (e) {
                var t = e.sideCar,
                    n = (0, r._T)(e, ["sideCar"]);
                if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var a = t.read();
                if (!a) throw new Error("Sidecar medium not found");
                return o.createElement(a, (0, r.pi)({}, n));
            };
            g.isSideCarExport = !0;
            var m = n(250132);
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
                                    var t = (0, m.V)();
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
                T = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                P = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return y;
                    var t = (function (e) {
                            var t = window.getComputedStyle(document.body),
                                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                                r = t["padding" === e ? "paddingTop" : "marginTop"],
                                o = t["padding" === e ? "paddingRight" : "marginRight"];
                            return [T(n), T(r), T(o)];
                        })(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                },
                E = w(),
                M = "data-scroll-locked",
                S = function (e, t, n, r) {
                    var o = e.left,
                        u = e.top,
                        l = e.right,
                        c = e.gap;
                    return (
                        void 0 === n && (n = "margin"),
                        "\n  ."
                            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(M, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(u, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(a, " {\n    right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i, " {\n    margin-right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(a, " .")
                            .concat(a, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i, " .")
                            .concat(i, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(M, "] {\n    ")
                            .concat("--removed-body-scroll-bar-size", ": ")
                            .concat(c, "px;\n  }\n")
                    );
                },
                k = function () {
                    var e = parseInt(document.body.getAttribute(M) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                C = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        a = void 0 === r ? "margin" : r;
                    o.useEffect(function () {
                        return (
                            document.body.setAttribute(M, (k() + 1).toString()),
                            function () {
                                var e = k() - 1;
                                e <= 0 ? document.body.removeAttribute(M) : document.body.setAttribute(M, e.toString());
                            }
                        );
                    }, []);
                    var i = o.useMemo(
                        function () {
                            return P(a);
                        },
                        [a],
                    );
                    return o.createElement(E, { styles: S(i, !t, a, n ? "" : "!important") });
                },
                D = !1;
            if ("undefined" != typeof window)
                try {
                    var K = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (D = !0), !0;
                        },
                    });
                    window.addEventListener("test", K, K), window.removeEventListener("test", K, K);
                } catch (e) {
                    D = !1;
                }
            var R = !!D && { passive: !1 },
                x = function (e, t) {
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
                L = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), X(e, r))) {
                            var o = Y(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                X = function (e, t) {
                    return "v" === e
                        ? (function (e) {
                              return x(e, "overflowY");
                          })(t)
                        : (function (e) {
                              return x(e, "overflowX");
                          })(t);
                },
                Y = function (e, t) {
                    return "v" === e
                        ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(t);
                    var n;
                },
                I = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                A = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                F = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                N = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                B = 0,
                j = [];
            function V(e) {
                for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                return t;
            }
            const W =
                ((Z = function (e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        a = o.useRef(),
                        i = o.useState(B++)[0],
                        u = o.useState(w)[0],
                        l = o.useRef(e);
                    o.useEffect(
                        function () {
                            l.current = e;
                        },
                        [e],
                    ),
                        o.useEffect(
                            function () {
                                if (e.inert) {
                                    document.body.classList.add("block-interactivity-".concat(i));
                                    var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(F), !0).filter(Boolean);
                                    return (
                                        t.forEach(function (e) {
                                            return e.classList.add("allow-interactivity-".concat(i));
                                        }),
                                        function () {
                                            document.body.classList.remove("block-interactivity-".concat(i)),
                                                t.forEach(function (e) {
                                                    return e.classList.remove("allow-interactivity-".concat(i));
                                                });
                                        }
                                    );
                                }
                            },
                            [e.inert, e.lockRef.current, e.shards],
                        );
                    var c = o.useCallback(function (e, t) {
                            if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !l.current.allowPinchZoom;
                            var r,
                                o = I(e),
                                i = n.current,
                                u = "deltaX" in e ? e.deltaX : i[0] - o[0],
                                c = "deltaY" in e ? e.deltaY : i[1] - o[1],
                                d = e.target,
                                s = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === s && "range" === d.type) return !1;
                            var f = L(s, d);
                            if (!f) return !0;
                            if ((f ? (r = s) : ((r = "v" === s ? "h" : "v"), (f = L(s, d))), !f)) return !1;
                            if ((!a.current && "changedTouches" in e && (u || c) && (a.current = r), !r)) return !0;
                            var p = a.current || r;
                            return (function (e, t, n, r, o) {
                                var a = (function (e, t) {
                                        return "h" === e && "rtl" === t ? -1 : 1;
                                    })(e, window.getComputedStyle(t).direction),
                                    i = a * r,
                                    u = n.target,
                                    l = t.contains(u),
                                    c = !1,
                                    d = i > 0,
                                    s = 0,
                                    f = 0;
                                do {
                                    var p = Y(e, u),
                                        v = p[0],
                                        h = p[1] - p[2] - a * v;
                                    (v || h) && X(e, u) && ((s += h), (f += v)), (u = u instanceof ShadowRoot ? u.host : u.parentNode);
                                } while ((!l && u !== document.body) || (l && (t.contains(u) || t === u)));
                                return ((d && ((o && Math.abs(s) < 1) || (!o && i > s))) || (!d && ((o && Math.abs(f) < 1) || (!o && -i > f)))) && (c = !0), c;
                            })(p, t, e, "h" === p ? u : c, !0);
                        }, []),
                        d = o.useCallback(function (e) {
                            var n = e;
                            if (j.length && j[j.length - 1] === u) {
                                var r = "deltaY" in n ? A(n) : I(n),
                                    o = t.current.filter(function (e) {
                                        return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ((t = e.delta), (o = r), t[0] === o[0] && t[1] === o[1]);
                                        var t, o;
                                    })[0];
                                if (o && o.should) n.cancelable && n.preventDefault();
                                else if (!o) {
                                    var a = (l.current.shards || [])
                                        .map(F)
                                        .filter(Boolean)
                                        .filter(function (e) {
                                            return e.contains(n.target);
                                        });
                                    (a.length > 0 ? c(n, a[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault();
                                }
                            }
                        }, []),
                        s = o.useCallback(function (e, n, r, o) {
                            var a = { name: e, delta: n, target: r, should: o, shadowParent: V(r) };
                            t.current.push(a),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== a;
                                    });
                                }, 1);
                        }, []),
                        f = o.useCallback(function (e) {
                            (n.current = I(e)), (a.current = void 0);
                        }, []),
                        p = o.useCallback(function (t) {
                            s(t.type, A(t), t.target, c(t, e.lockRef.current));
                        }, []),
                        v = o.useCallback(function (t) {
                            s(t.type, I(t), t.target, c(t, e.lockRef.current));
                        }, []);
                    o.useEffect(function () {
                        return (
                            j.push(u),
                            e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: v }),
                            document.addEventListener("wheel", d, R),
                            document.addEventListener("touchmove", d, R),
                            document.addEventListener("touchstart", f, R),
                            function () {
                                (j = j.filter(function (e) {
                                    return e !== u;
                                })),
                                    document.removeEventListener("wheel", d, R),
                                    document.removeEventListener("touchmove", d, R),
                                    document.removeEventListener("touchstart", f, R);
                            }
                        );
                    }, []);
                    var h = e.removeScrollBar,
                        g = e.inert;
                    return o.createElement(o.Fragment, null, g ? o.createElement(u, { styles: N(i) }) : null, h ? o.createElement(C, { gapMode: e.gapMode }) : null);
                }),
                p.useMedium(Z),
                g);
            var Z,
                U = o.forwardRef(function (e, t) {
                    return o.createElement(h, (0, r.pi)({}, e, { ref: t, sideCar: W }));
                });
            U.classNames = h.classNames;
            const _ = U;
        },
        202136: (e, t, n) => {
            n.d(t, { j: () => h });
            const r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
                o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
            function a(e) {
                if (Intl.Locale) {
                    let t = new Intl.Locale(e).maximize(),
                        n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (t.script) return r.has(t.script);
                }
                let t = e.split("-")[0];
                return o.has(t);
            }
            var i = n(202784),
                u = n(623047);
            const l = Symbol.for("react-aria.i18n.locale");
            function c() {
                let e = ("undefined" != typeof window && window[l]) || ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch (t) {
                    e = "en-US";
                }
                return { locale: e, direction: a(e) ? "rtl" : "ltr" };
            }
            let d = c(),
                s = new Set();
            function f() {
                d = c();
                for (let e of s) e(d);
            }
            function p() {
                let e = (0, u.Av)(),
                    [t, n] = (0, i.useState)(d);
                return (
                    (0, i.useEffect)(
                        () => (
                            0 === s.size && window.addEventListener("languagechange", f),
                            s.add(n),
                            () => {
                                s.delete(n), 0 === s.size && window.removeEventListener("languagechange", f);
                            }
                        ),
                        [],
                    ),
                    e ? { locale: "en-US", direction: "ltr" } : t
                );
            }
            const v = i.createContext(null);
            function h() {
                let e = p();
                return (0, i.useContext)(v) || e;
            }
        },
        952957: (e, t, n) => {
            n.d(t, { U: () => i });
            var r = n(202136),
                o = n(489968),
                a = n(202784);
            function i(e = {}) {
                let { locale: t } = (0, r.j)();
                return (0, a.useMemo)(() => new (0, o.e)(t, e), [t, e]);
            }
        },
        104860: (e, t, n) => {
            n.d(t, { r: () => u });
            var r = n(815536),
                o = n(202784),
                a = n(121203),
                i = n(985378);
            function u(e) {
                let { onMoveStart: t, onMove: n, onMoveEnd: u } = e,
                    l = (0, o.useRef)({ didMove: !1, lastPosition: null, id: null }),
                    { addGlobalListener: c, removeGlobalListener: d } = (0, a.x)(),
                    s = (0, i.i)((e, r, o, a) => {
                        (0 === o && 0 === a) || (l.current.didMove || ((l.current.didMove = !0), null == t || t({ type: "movestart", pointerType: r, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey })), null == n || n({ type: "move", pointerType: r, deltaX: o, deltaY: a, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    }),
                    f = (0, i.i)((e, t) => {
                        (0, r.A)(), l.current.didMove && (null == u || u({ type: "moveend", pointerType: t, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    });
                return {
                    moveProps: (0, o.useMemo)(() => {
                        let e = {},
                            t = () => {
                                (0, r.l)(), (l.current.didMove = !1);
                            };
                        if ("undefined" == typeof PointerEvent) {
                            let n = (e) => {
                                    var t, n, r, o;
                                    0 === e.button && (s(e, "mouse", e.pageX - (null !== (r = null === (t = l.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (o = null === (n = l.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== o ? o : 0)), (l.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                                },
                                r = (e) => {
                                    0 === e.button && (f(e, "mouse"), d(window, "mousemove", n, !1), d(window, "mouseup", r, !1));
                                };
                            e.onMouseDown = (e) => {
                                0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), (l.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1));
                            };
                            let o = (e) => {
                                    let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === l.current.id);
                                    if (t >= 0) {
                                        var n, r;
                                        let { pageX: i, pageY: u } = e.changedTouches[t];
                                        var o, a;
                                        s(e, "touch", i - (null !== (o = null === (n = l.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== o ? o : 0), u - (null !== (a = null === (r = l.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)), (l.current.lastPosition = { pageX: i, pageY: u });
                                    }
                                },
                                a = (e) => {
                                    [...e.changedTouches].findIndex(({ identifier: e }) => e === l.current.id) >= 0 && (f(e, "touch"), (l.current.id = null), d(window, "touchmove", o), d(window, "touchend", a), d(window, "touchcancel", a));
                                };
                            e.onTouchStart = (e) => {
                                if (0 === e.changedTouches.length || null != l.current.id) return;
                                let { pageX: n, pageY: r, identifier: i } = e.changedTouches[0];
                                t(), e.stopPropagation(), e.preventDefault(), (l.current.lastPosition = { pageX: n, pageY: r }), (l.current.id = i), c(window, "touchmove", o, !1), c(window, "touchend", a, !1), c(window, "touchcancel", a, !1);
                            };
                        } else {
                            let n = (e) => {
                                    if (e.pointerId === l.current.id) {
                                        var t, n;
                                        let a = e.pointerType || "mouse";
                                        var r, o;
                                        s(e, a, e.pageX - (null !== (r = null === (t = l.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (o = null === (n = l.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== o ? o : 0)), (l.current.lastPosition = { pageX: e.pageX, pageY: e.pageY });
                                    }
                                },
                                r = (e) => {
                                    if (e.pointerId === l.current.id) {
                                        let t = e.pointerType || "mouse";
                                        f(e, t), (l.current.id = null), d(window, "pointermove", n, !1), d(window, "pointerup", r, !1), d(window, "pointercancel", r, !1);
                                    }
                                };
                            e.onPointerDown = (e) => {
                                0 === e.button && null == l.current.id && (t(), e.stopPropagation(), e.preventDefault(), (l.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), (l.current.id = e.pointerId), c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1));
                            };
                        }
                        let n = (e, n, r) => {
                            t(), s(e, "keyboard", n, r), f(e, "keyboard");
                        };
                        return (
                            (e.onKeyDown = (e) => {
                                switch (e.key) {
                                    case "Left":
                                    case "ArrowLeft":
                                        e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
                                        break;
                                    case "Right":
                                    case "ArrowRight":
                                        e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
                                        break;
                                    case "Up":
                                    case "ArrowUp":
                                        e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
                                        break;
                                    case "Down":
                                    case "ArrowDown":
                                        e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
                                }
                            }),
                            e
                        );
                    }, [l, c, d, s, f]),
                };
            }
        },
        764074: (e, t, n) => {
            n.d(t, { N: () => a });
            var r = n(238013),
                o = n(32196);
            function a(e) {
                let { id: t, label: n, "aria-labelledby": a, "aria-label": i, labelElementType: u = "label" } = e;
                t = (0, r.Me)(t);
                let l = (0, r.Me)(),
                    c = {};
                return n && ((a = a ? `${l} ${a}` : l), (c = { id: l, htmlFor: "label" === u ? t : void 0 })), { labelProps: c, fieldProps: (0, o.b)({ id: t, "aria-label": i, "aria-labelledby": a }) };
            }
        },
        138997: (e, t, n) => {
            n.d(t, { o: () => f });
            var r = n(526997),
                o = n(121203),
                a = n(812238),
                i = n(277108),
                u = n(202784),
                l = n(104860),
                c = n(253246),
                d = n(764074),
                s = n(202136);
            function f(e, t, n) {
                let { labelProps: f, fieldProps: p } = (0, d.N)(e),
                    v = "vertical" === e.orientation;
                var h;
                r.Z.set(t, { id: null !== (h = f.id) && void 0 !== h ? h : p.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
                let { direction: g } = (0, s.j)(),
                    { addGlobalListener: m, removeGlobalListener: b } = (0, o.x)();
                const w = (0, u.useRef)(null),
                    y = "rtl" === g,
                    T = (0, u.useRef)(null),
                    { moveProps: P } = (0, l.r)({
                        onMoveStart() {
                            T.current = null;
                        },
                        onMove({ deltaX: e, deltaY: r }) {
                            let { height: o, width: i } = n.current.getBoundingClientRect(),
                                u = v ? o : i;
                            null == T.current && (T.current = t.getThumbPercent(w.current) * u);
                            let l = v ? r : e;
                            if (((v || y) && (l = -l), (T.current += l), null != w.current && n.current)) {
                                const e = (0, a.uZ)(T.current / u, 0, 1);
                                t.setThumbPercent(w.current, e);
                            }
                        },
                        onMoveEnd() {
                            null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null));
                        },
                    });
                let E = (0, u.useRef)(void 0),
                    M = (r, o, a, i) => {
                        if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                            let { height: e, width: u, top: l, left: c } = n.current.getBoundingClientRect();
                            let d = ((v ? i : a) - (v ? l : c)) / (v ? e : u);
                            ("rtl" === g || v) && (d = 1 - d);
                            let s,
                                f = t.getPercentValue(d),
                                p = t.values.findIndex((e) => f - e < 0);
                            if (0 === p) s = p;
                            else if (-1 === p) s = t.values.length - 1;
                            else {
                                let e = t.values[p - 1],
                                    n = t.values[p];
                                s = Math.abs(e - f) < Math.abs(n - f) ? p - 1 : p;
                            }
                            s >= 0 && t.isThumbEditable(s) ? (r.preventDefault(), (w.current = s), t.setFocusedThumb(s), (E.current = o), t.setThumbDragging(w.current, !0), t.setThumbValue(s, f), m(window, "mouseup", S, !1), m(window, "touchend", S, !1), m(window, "pointerup", S, !1)) : (w.current = null);
                        }
                    },
                    S = (e) => {
                        var n, r;
                        (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === E.current && (null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null)), b(window, "mouseup", S, !1), b(window, "touchend", S, !1), b(window, "pointerup", S, !1));
                    };
                return (
                    "htmlFor" in f &&
                        f.htmlFor &&
                        (delete f.htmlFor,
                        (f.onClick = () => {
                            var e;
                            null === (e = document.getElementById((0, r.g)(t, 0))) || void 0 === e || e.focus(), (0, c._w)("keyboard");
                        })),
                    {
                        labelProps: f,
                        groupProps: { role: "group", ...p },
                        trackProps: (0, i.d)(
                            {
                                onMouseDown(e) {
                                    0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || M(e, void 0, e.clientX, e.clientY);
                                },
                                onPointerDown(e) {
                                    ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) || M(e, e.pointerId, e.clientX, e.clientY);
                                },
                                onTouchStart(e) {
                                    M(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                                },
                                style: { position: "relative", touchAction: "none" },
                            },
                            P,
                        ),
                        outputProps: { htmlFor: t.values.map((e, n) => (0, r.g)(t, n)).join(" "), "aria-live": "off" },
                    }
                );
            }
        },
        235814: (e, t, n) => {
            n.d(t, { p: () => g });
            var r = n(526997),
                o = n(121203),
                a = n(454338),
                i = n(812238),
                u = n(277108),
                l = n(985378),
                c = n(202784);
            function d(e, t, n) {
                let r = (0, c.useRef)(t),
                    o = (0, l.i)(() => {
                        n && n(r.current);
                    });
                (0, c.useEffect)(() => {
                    var t;
                    let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
                    return (
                        null == n || n.addEventListener("reset", o),
                        () => {
                            null == n || n.removeEventListener("reset", o);
                        }
                    );
                }, [e, o]);
            }
            var s = n(373363),
                f = n(527355),
                p = n(104860),
                v = n(764074),
                h = n(202136);
            function g(e, t) {
                let { index: n = 0, isRequired: l, validationState: g, isInvalid: m, trackRef: b, inputRef: w, orientation: y = t.orientation, name: T } = e,
                    P = e.isDisabled || t.isDisabled,
                    E = "vertical" === y,
                    { direction: M } = (0, h.j)(),
                    { addGlobalListener: S, removeGlobalListener: k } = (0, o.x)(),
                    C = r.Z.get(t);
                var D;
                const { labelProps: K, fieldProps: R } = (0, v.N)({ ...e, id: (0, r.g)(t, n), "aria-labelledby": `${C.id} ${null !== (D = e["aria-labelledby"]) && void 0 !== D ? D : ""}`.trim() }),
                    x = t.values[n],
                    L = (0, c.useCallback)(() => {
                        w.current && (0, a.A)(w.current);
                    }, [w]),
                    X = t.focusedThumb === n;
                (0, c.useEffect)(() => {
                    X && L();
                }, [X, L]);
                let Y = "rtl" === M,
                    I = (0, c.useRef)(null),
                    { keyboardProps: A } = (0, f.v)({
                        onKeyDown(e) {
                            let { getThumbMaxValue: r, getThumbMinValue: o, decrementThumb: a, incrementThumb: i, setThumbValue: u, setThumbDragging: l, pageSize: c } = t;
                            if (/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                                switch ((e.preventDefault(), l(n, !0), e.key)) {
                                    case "PageUp":
                                        i(n, c);
                                        break;
                                    case "PageDown":
                                        a(n, c);
                                        break;
                                    case "Home":
                                        u(n, o(n));
                                        break;
                                    case "End":
                                        u(n, r(n));
                                }
                                l(n, !1);
                            } else e.continuePropagation();
                        },
                    }),
                    { moveProps: F } = (0, p.r)({
                        onMoveStart() {
                            (I.current = null), t.setThumbDragging(n, !0);
                        },
                        onMove({ deltaX: e, deltaY: r, pointerType: o, shiftKey: a }) {
                            const { getThumbPercent: u, setThumbPercent: l, decrementThumb: c, incrementThumb: d, step: s, pageSize: f } = t;
                            let { width: p, height: v } = b.current.getBoundingClientRect(),
                                h = E ? v : p;
                            if ((null == I.current && (I.current = u(n) * h), "keyboard" === o)) (e > 0 && Y) || (e < 0 && !Y) || r > 0 ? c(n, a ? f : s) : d(n, a ? f : s);
                            else {
                                let t = E ? r : e;
                                (E || Y) && (t = -t), (I.current += t), l(n, (0, i.uZ)(I.current / h, 0, 1));
                            }
                        },
                        onMoveEnd() {
                            t.setThumbDragging(n, !1);
                        },
                    });
                t.setThumbEditable(n, !P);
                const { focusableProps: N } = (0, s.k)((0, u.d)(e, { onFocus: () => t.setFocusedThumb(n), onBlur: () => t.setFocusedThumb(void 0) }), w);
                let B = (0, c.useRef)(void 0),
                    j = (e) => {
                        L(), (B.current = e), t.setThumbDragging(n, !0), S(window, "mouseup", V, !1), S(window, "touchend", V, !1), S(window, "pointerup", V, !1);
                    },
                    V = (e) => {
                        var r, o;
                        (null !== (o = e.pointerId) && void 0 !== o ? o : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === B.current && (L(), t.setThumbDragging(n, !1), k(window, "mouseup", V, !1), k(window, "touchend", V, !1), k(window, "pointerup", V, !1));
                    },
                    W = t.getThumbPercent(n);
                (E || "rtl" === M) && (W = 1 - W);
                let Z = P
                    ? {}
                    : (0, u.d)(A, F, {
                          onMouseDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || j();
                          },
                          onPointerDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || j(e.pointerId);
                          },
                          onTouchStart: (e) => {
                              j(e.changedTouches[0].identifier);
                          },
                      });
                return (
                    d(w, x, (e) => {
                        t.setThumbValue(n, e);
                    }),
                    {
                        inputProps: (0, u.d)(N, R, {
                            type: "range",
                            tabIndex: P ? void 0 : 0,
                            min: t.getThumbMinValue(n),
                            max: t.getThumbMaxValue(n),
                            step: t.step,
                            value: x,
                            name: T,
                            disabled: P,
                            "aria-orientation": y,
                            "aria-valuetext": t.getThumbValueLabel(n),
                            "aria-required": l || void 0,
                            "aria-invalid": m || "invalid" === g || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-describedby": [C["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                            "aria-details": [C["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                            onChange: (e) => {
                                t.setThumbValue(n, parseFloat(e.target.value));
                            },
                        }),
                        thumbProps: { ...Z, style: { position: "absolute", [E ? "top" : "left"]: 100 * W + "%", transform: "translate(-50%, -50%)", touchAction: "none" } },
                        labelProps: K,
                        isDragging: t.isThumbDragging(n),
                        isDisabled: P,
                        isFocused: X,
                    }
                );
            }
        },
        526997: (e, t, n) => {
            n.d(t, { Z: () => r, g: () => o });
            const r = new WeakMap();
            function o(e, t) {
                let n = r.get(e);
                if (!n) throw new Error("Unknown slider state");
                return `${n.id}-${t}`;
            }
        },
        32196: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(238013);
            function o(e, t) {
                let { id: n, "aria-label": o, "aria-labelledby": a } = e;
                if (((n = (0, r.Me)(n)), a && o)) {
                    let e = new Set([n, ...a.trim().split(/\s+/)]);
                    a = [...e].join(" ");
                } else a && (a = a.trim().split(/\s+/).join(" "));
                return o || a || !t || (o = t), { id: n, "aria-label": o, "aria-labelledby": a };
            }
        },
        536574: (e, t, n) => {
            n.d(t, { T: () => u });
            var r = n(277108),
                o = n(202784),
                a = n(525757);
            const i = { border: 0, clip: "rect(0 0 0 0)", clipPath: "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" };
            function u(e) {
                let { children: t, elementType: n = "div", isFocusable: u, style: l, ...c } = e,
                    { visuallyHiddenProps: d } = (function (e = {}) {
                        let { style: t, isFocusable: n } = e,
                            [r, u] = (0, o.useState)(!1),
                            { focusWithinProps: l } = (0, a.L)({ isDisabled: !n, onFocusWithinChange: (e) => u(e) });
                        return { visuallyHiddenProps: { ...l, style: (0, o.useMemo)(() => (r ? t : t ? { ...i, ...t } : i), [r]) } };
                    })(e);
                return o.createElement(n, (0, r.d)(c, d), t);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-f46dc3dc.72c058da.js.map

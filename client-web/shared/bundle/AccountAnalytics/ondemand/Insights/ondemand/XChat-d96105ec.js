"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-d96105ec"],
    {
        495346: (e, n, t) => {
            t.d(n, { Av: () => c, pF: () => o, xv: () => a, zi: () => r });
            var o = "right-scroll-bar-position",
                r = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                c = "--removed-body-scroll-bar-size";
        },
        894200: (e, n, t) => {
            t.d(n, { jp: () => f });
            var o = t(202784),
                r = t(633097),
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
                                o = n["padding" === e ? "paddingTop" : "marginTop"],
                                r = n["padding" === e ? "paddingRight" : "marginRight"];
                            return [i(t), i(o), i(r)];
                        })(e),
                        t = document.documentElement.clientWidth,
                        o = window.innerWidth;
                    return { left: n[0], top: n[1], right: n[2], gap: Math.max(0, o - t + n[2] - n[0]) };
                },
                s = (0, r.Ws)(),
                d = "data-scroll-locked",
                l = function (e, n, t, o) {
                    var r = e.left,
                        c = e.top,
                        i = e.right,
                        u = e.gap;
                    return (
                        void 0 === t && (t = "margin"),
                        "\n  ."
                            .concat(a.xv, " {\n   overflow: hidden ")
                            .concat(o, ";\n   padding-right: ")
                            .concat(u, "px ")
                            .concat(o, ";\n  }\n  body[")
                            .concat(d, "] {\n    overflow: hidden ")
                            .concat(o, ";\n    overscroll-behavior: contain;\n    ")
                            .concat([n && "position: relative ".concat(o, ";"), "margin" === t && "\n    padding-left: ".concat(r, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(o, ";\n    "), "padding" === t && "padding-right: ".concat(u, "px ").concat(o, ";")].filter(Boolean).join(""), "\n  }\n  \n  .")
                            .concat(a.pF, " {\n    right: ")
                            .concat(u, "px ")
                            .concat(o, ";\n  }\n  \n  .")
                            .concat(a.zi, " {\n    margin-right: ")
                            .concat(u, "px ")
                            .concat(o, ";\n  }\n  \n  .")
                            .concat(a.pF, " .")
                            .concat(a.pF, " {\n    right: 0 ")
                            .concat(o, ";\n  }\n  \n  .")
                            .concat(a.zi, " .")
                            .concat(a.zi, " {\n    margin-right: 0 ")
                            .concat(o, ";\n  }\n  \n  body[")
                            .concat(d, "] {\n    ")
                            .concat(a.Av, ": ")
                            .concat(u, "px;\n  }\n")
                    );
                },
                p = function () {
                    var e = parseInt(document.body.getAttribute(d) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                f = function (e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        r = e.gapMode,
                        a = void 0 === r ? "margin" : r;
                    o.useEffect(function () {
                        return (
                            document.body.setAttribute(d, (p() + 1).toString()),
                            function () {
                                var e = p() - 1;
                                e <= 0 ? document.body.removeAttribute(d) : document.body.setAttribute(d, e.toString());
                            }
                        );
                    }, []);
                    var c = o.useMemo(
                        function () {
                            return u(a);
                        },
                        [a],
                    );
                    return o.createElement(s, { styles: l(c, !n, a, t ? "" : "!important") });
                };
        },
        633097: (e, n, t) => {
            t.d(n, { Ws: () => c });
            var o = t(202784),
                r = t(250132);
            var a = function () {
                    var e = 0,
                        n = null;
                    return {
                        add: function (t) {
                            var o, a;
                            0 == e &&
                                (n = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var n = (0, r.V)();
                                    return n && e.setAttribute("nonce", n), e;
                                })()) &&
                                ((a = t),
                                (o = n).styleSheet ? (o.styleSheet.cssText = a) : o.appendChild(document.createTextNode(a)),
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
                                o.useEffect(
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
                            o = e.dynamic;
                        return n(t, o), null;
                    };
                };
        },
        254600: (e, n, t) => {
            t.d(n, { Eh: () => Ce, VY: () => ye, h_: () => be, fC: () => ge, xz: () => we });
            var o = t(202784),
                r = t(717998),
                a = t(262656),
                c = t(552322);
            function i(...e) {
                const n = e[0];
                if (1 === e.length) return n;
                const t = () => {
                    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const r = t.reduce((n, { useScope: t, scopeName: o }) => ({ ...n, ...t(e)[`__scope${o}`] }), {});
                        return o.useMemo(() => ({ [`__scope${n.scopeName}`]: r }), [r]);
                    };
                };
                return (t.scopeName = n.scopeName), t;
            }
            var u = t(301352),
                s = 0;
            function d() {
                o.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? l()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? l()),
                        s++,
                        () => {
                            1 === s && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), s--;
                        }
                    );
                }, []);
            }
            function l() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var p = t(22426),
                f = t(23372),
                v = t(215828),
                h = t(408149),
                m = t(379616),
                g = t(172714),
                w = t(549815),
                b = t(387695),
                y = t(549732),
                C = t(305163),
                x = t(495346),
                E = t(287359),
                P = (0, t(964597)._)(),
                R = function () {},
                _ = o.forwardRef(function (e, n) {
                    var t = o.useRef(null),
                        r = o.useState({ onScrollCapture: R, onWheelCapture: R, onTouchMoveCapture: R }),
                        a = r[0],
                        c = r[1],
                        i = e.forwardProps,
                        u = e.children,
                        s = e.className,
                        d = e.removeScrollBar,
                        l = e.enabled,
                        p = e.shards,
                        f = e.sideCar,
                        v = e.noIsolation,
                        h = e.inert,
                        m = e.allowPinchZoom,
                        g = e.as,
                        w = void 0 === g ? "div" : g,
                        b = e.gapMode,
                        y = (0, C._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        x = f,
                        _ = (0, E.q)([t, n]),
                        A = (0, C.pi)((0, C.pi)({}, y), a);
                    return o.createElement(o.Fragment, null, l && o.createElement(x, { sideCar: P, removeScrollBar: d, shards: p, noIsolation: v, inert: h, setCallbacks: c, allowPinchZoom: !!m, lockRef: t, gapMode: b }), i ? o.cloneElement(o.Children.only(u), (0, C.pi)((0, C.pi)({}, A), { ref: _ })) : o.createElement(w, (0, C.pi)({}, A, { className: s, ref: _ }), u));
                });
            (_.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (_.classNames = { fullWidth: x.zi, zeroRight: x.pF });
            var A = t(757758),
                k = t(894200),
                M = t(633097),
                N = !1;
            if ("undefined" != typeof window)
                try {
                    var j = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (N = !0), !0;
                        },
                    });
                    window.addEventListener("test", j, j), window.removeEventListener("test", j, j);
                } catch (e) {
                    N = !1;
                }
            var O = !!N && { passive: !1 },
                S = function (e, n) {
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
                F = function (e, n) {
                    var t = n.ownerDocument,
                        o = n;
                    do {
                        if (("undefined" != typeof ShadowRoot && o instanceof ShadowRoot && (o = o.host), T(e, o))) {
                            var r = D(e, o);
                            if (r[1] > r[2]) return !0;
                        }
                        o = o.parentNode;
                    } while (o && o !== t.body);
                    return !1;
                },
                T = function (e, n) {
                    return "v" === e
                        ? (function (e) {
                              return S(e, "overflowY");
                          })(n)
                        : (function (e) {
                              return S(e, "overflowX");
                          })(n);
                },
                D = function (e, n) {
                    return "v" === e
                        ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight]
                        : (function (e) {
                              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
                          })(n);
                    var t;
                },
                I = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                L = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                W = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                z = function (e) {
                    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
                },
                B = 0,
                X = [];
            function Y(e) {
                for (var n = null; null !== e; ) e instanceof ShadowRoot && ((n = e.host), (e = e.host)), (e = e.parentNode);
                return n;
            }
            const V = (0, A.L)(P, function (e) {
                var n = o.useRef([]),
                    t = o.useRef([0, 0]),
                    r = o.useRef(),
                    a = o.useState(B++)[0],
                    c = o.useState(M.Ws)[0],
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
                                var n = (0, C.ev)([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                                return (
                                    n.forEach(function (e) {
                                        return e.classList.add("allow-interactivity-".concat(a));
                                    }),
                                    function () {
                                        document.body.classList.remove("block-interactivity-".concat(a)),
                                            n.forEach(function (e) {
                                                return e.classList.remove("allow-interactivity-".concat(a));
                                            });
                                    }
                                );
                            }
                        },
                        [e.inert, e.lockRef.current, e.shards],
                    );
                var u = o.useCallback(function (e, n) {
                        if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                        var o,
                            a = I(e),
                            c = t.current,
                            u = "deltaX" in e ? e.deltaX : c[0] - a[0],
                            s = "deltaY" in e ? e.deltaY : c[1] - a[1],
                            d = e.target,
                            l = Math.abs(u) > Math.abs(s) ? "h" : "v";
                        if ("touches" in e && "h" === l && "range" === d.type) return !1;
                        var p = F(l, d);
                        if (!p) return !0;
                        if ((p ? (o = l) : ((o = "v" === l ? "h" : "v"), (p = F(l, d))), !p)) return !1;
                        if ((!r.current && "changedTouches" in e && (u || s) && (r.current = o), !o)) return !0;
                        var f = r.current || o;
                        return (function (e, n, t, o, r) {
                            var a = (function (e, n) {
                                    return "h" === e && "rtl" === n ? -1 : 1;
                                })(e, window.getComputedStyle(n).direction),
                                c = a * o,
                                i = t.target,
                                u = n.contains(i),
                                s = !1,
                                d = c > 0,
                                l = 0,
                                p = 0;
                            do {
                                var f = D(e, i),
                                    v = f[0],
                                    h = f[1] - f[2] - a * v;
                                (v || h) && T(e, i) && ((l += h), (p += v)), (i = i instanceof ShadowRoot ? i.host : i.parentNode);
                            } while ((!u && i !== document.body) || (u && (n.contains(i) || n === i)));
                            return ((d && ((r && Math.abs(l) < 1) || (!r && c > l))) || (!d && ((r && Math.abs(p) < 1) || (!r && -c > p)))) && (s = !0), s;
                        })(f, n, e, "h" === f ? u : s, !0);
                    }, []),
                    s = o.useCallback(function (e) {
                        var t = e;
                        if (X.length && X[X.length - 1] === c) {
                            var o = "deltaY" in t ? L(t) : I(t),
                                r = n.current.filter(function (e) {
                                    return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && ((n = e.delta), (r = o), n[0] === r[0] && n[1] === r[1]);
                                    var n, r;
                                })[0];
                            if (r && r.should) t.cancelable && t.preventDefault();
                            else if (!r) {
                                var a = (i.current.shards || [])
                                    .map(W)
                                    .filter(Boolean)
                                    .filter(function (e) {
                                        return e.contains(t.target);
                                    });
                                (a.length > 0 ? u(t, a[0]) : !i.current.noIsolation) && t.cancelable && t.preventDefault();
                            }
                        }
                    }, []),
                    d = o.useCallback(function (e, t, o, r) {
                        var a = { name: e, delta: t, target: o, should: r, shadowParent: Y(o) };
                        n.current.push(a),
                            setTimeout(function () {
                                n.current = n.current.filter(function (e) {
                                    return e !== a;
                                });
                            }, 1);
                    }, []),
                    l = o.useCallback(function (e) {
                        (t.current = I(e)), (r.current = void 0);
                    }, []),
                    p = o.useCallback(function (n) {
                        d(n.type, L(n), n.target, u(n, e.lockRef.current));
                    }, []),
                    f = o.useCallback(function (n) {
                        d(n.type, I(n), n.target, u(n, e.lockRef.current));
                    }, []);
                o.useEffect(function () {
                    return (
                        X.push(c),
                        e.setCallbacks({ onScrollCapture: p, onWheelCapture: p, onTouchMoveCapture: f }),
                        document.addEventListener("wheel", s, O),
                        document.addEventListener("touchmove", s, O),
                        document.addEventListener("touchstart", l, O),
                        function () {
                            (X = X.filter(function (e) {
                                return e !== c;
                            })),
                                document.removeEventListener("wheel", s, O),
                                document.removeEventListener("touchmove", s, O),
                                document.removeEventListener("touchstart", l, O);
                        }
                    );
                }, []);
                var v = e.removeScrollBar,
                    h = e.inert;
                return o.createElement(o.Fragment, null, h ? o.createElement(c, { styles: z(a) }) : null, v ? o.createElement(k.jp, { gapMode: e.gapMode }) : null);
            });
            var Z = o.forwardRef(function (e, n) {
                return o.createElement(_, (0, C.pi)({}, e, { ref: n, sideCar: V }));
            });
            Z.classNames = _.classNames;
            const $ = Z;
            var q = "Popover",
                [K, H] = (function (e, n = []) {
                    let t = [];
                    const r = () => {
                        const n = t.map((e) => o.createContext(e));
                        return function (t) {
                            const r = t?.[e] || n;
                            return o.useMemo(() => ({ [`__scope${e}`]: { ...t, [e]: r } }), [t, r]);
                        };
                    };
                    return (
                        (r.scopeName = e),
                        [
                            function (n, r) {
                                const a = o.createContext(r),
                                    i = t.length;
                                function u(n) {
                                    const { scope: t, children: r, ...u } = n,
                                        s = t?.[e][i] || a,
                                        d = o.useMemo(() => u, Object.values(u));
                                    return (0, c.jsx)(s.Provider, { value: d, children: r });
                                }
                                return (
                                    (t = [...t, r]),
                                    (u.displayName = n + "Provider"),
                                    [
                                        u,
                                        function (t, c) {
                                            const u = c?.[e][i] || a,
                                                s = o.useContext(u);
                                            if (s) return s;
                                            if (void 0 !== r) return r;
                                            throw new Error(`\`${t}\` must be used within \`${n}\``);
                                        },
                                    ]
                                );
                            },
                            i(r, ...n),
                        ]
                    );
                })(q, [v.D7]),
                U = (0, v.D7)(),
                [G, J] = K(q),
                Q = (e) => {
                    const { __scopePopover: n, children: t, open: r, defaultOpen: a, onOpenChange: i, modal: u = !1 } = e,
                        s = U(n),
                        d = o.useRef(null),
                        [l, p] = o.useState(!1),
                        [h = !1, m] = (0, b.T)({ prop: r, defaultProp: a, onChange: i });
                    return (0, c.jsx)(v.fC, { ...s, children: (0, c.jsx)(G, { scope: n, contentId: (0, f.M)(), triggerRef: d, open: h, onOpenChange: m, onOpenToggle: o.useCallback(() => m((e) => !e), [m]), hasCustomAnchor: l, onCustomAnchorAdd: o.useCallback(() => p(!0), []), onCustomAnchorRemove: o.useCallback(() => p(!1), []), modal: u, children: t }) });
                };
            Q.displayName = q;
            var ee = "PopoverAnchor",
                ne = o.forwardRef((e, n) => {
                    const { __scopePopover: t, ...r } = e,
                        a = J(ee, t),
                        i = U(t),
                        { onCustomAnchorAdd: u, onCustomAnchorRemove: s } = a;
                    return o.useEffect(() => (u(), () => s()), [u, s]), (0, c.jsx)(v.ee, { ...i, ...r, ref: n });
                });
            ne.displayName = ee;
            var te = "PopoverTrigger",
                oe = o.forwardRef((e, n) => {
                    const { __scopePopover: t, ...o } = e,
                        i = J(te, t),
                        u = U(t),
                        s = (0, a.e)(n, i.triggerRef),
                        d = (0, c.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i.open, "aria-controls": i.contentId, "data-state": me(i.open), ...o, ref: s, onClick: (0, r.M)(e.onClick, i.onOpenToggle) });
                    return i.hasCustomAnchor ? d : (0, c.jsx)(v.ee, { asChild: !0, ...u, children: d });
                });
            oe.displayName = te;
            var re = "PopoverPortal",
                [ae, ce] = K(re, { forceMount: void 0 }),
                ie = (e) => {
                    const { __scopePopover: n, forceMount: t, children: o, container: r } = e,
                        a = J(re, n);
                    return (0, c.jsx)(ae, { scope: n, forceMount: t, children: (0, c.jsx)(m.z, { present: t || a.open, children: (0, c.jsx)(h.h, { asChild: !0, container: r, children: o }) }) });
                };
            ie.displayName = re;
            var ue = "PopoverContent",
                se = o.forwardRef((e, n) => {
                    const t = ce(ue, e.__scopePopover),
                        { forceMount: o = t.forceMount, ...r } = e,
                        a = J(ue, e.__scopePopover);
                    return (0, c.jsx)(m.z, { present: o || a.open, children: a.modal ? (0, c.jsx)(de, { ...r, ref: n }) : (0, c.jsx)(le, { ...r, ref: n }) });
                });
            se.displayName = ue;
            var de = o.forwardRef((e, n) => {
                    const t = J(ue, e.__scopePopover),
                        i = o.useRef(null),
                        u = (0, a.e)(n, i),
                        s = o.useRef(!1);
                    return (
                        o.useEffect(() => {
                            const e = i.current;
                            if (e) return (0, y.Ry)(e);
                        }, []),
                        (0, c.jsx)($, {
                            as: w.g7,
                            allowPinchZoom: !0,
                            children: (0, c.jsx)(pe, {
                                ...e,
                                ref: u,
                                trapFocus: t.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, r.M)(e.onCloseAutoFocus, (e) => {
                                    e.preventDefault(), s.current || t.triggerRef.current?.focus();
                                }),
                                onPointerDownOutside: (0, r.M)(
                                    e.onPointerDownOutside,
                                    (e) => {
                                        const n = e.detail.originalEvent,
                                            t = 0 === n.button && !0 === n.ctrlKey,
                                            o = 2 === n.button || t;
                                        s.current = o;
                                    },
                                    { checkForDefaultPrevented: !1 },
                                ),
                                onFocusOutside: (0, r.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
                            }),
                        })
                    );
                }),
                le = o.forwardRef((e, n) => {
                    const t = J(ue, e.__scopePopover),
                        r = o.useRef(!1),
                        a = o.useRef(!1);
                    return (0, c.jsx)(pe, {
                        ...e,
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (n) => {
                            e.onCloseAutoFocus?.(n), n.defaultPrevented || (r.current || t.triggerRef.current?.focus(), n.preventDefault()), (r.current = !1), (a.current = !1);
                        },
                        onInteractOutside: (n) => {
                            e.onInteractOutside?.(n), n.defaultPrevented || ((r.current = !0), "pointerdown" === n.detail.originalEvent.type && (a.current = !0));
                            const o = n.target,
                                c = t.triggerRef.current?.contains(o);
                            c && n.preventDefault(), "focusin" === n.detail.originalEvent.type && a.current && n.preventDefault();
                        },
                    });
                }),
                pe = o.forwardRef((e, n) => {
                    const { __scopePopover: t, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: f, onInteractOutside: h, ...m } = e,
                        g = J(ue, t),
                        w = U(t);
                    return d(), (0, c.jsx)(p.M, { asChild: !0, loop: !0, trapped: o, onMountAutoFocus: r, onUnmountAutoFocus: a, children: (0, c.jsx)(u.XB, { asChild: !0, disableOutsidePointerEvents: i, onInteractOutside: h, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: f, onDismiss: () => g.onOpenChange(!1), children: (0, c.jsx)(v.VY, { "data-state": me(g.open), role: "dialog", id: g.contentId, ...w, ...m, ref: n, style: { ...m.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                fe = "PopoverClose",
                ve = o.forwardRef((e, n) => {
                    const { __scopePopover: t, ...o } = e,
                        a = J(fe, t);
                    return (0, c.jsx)(g.WV.button, { type: "button", ...o, ref: n, onClick: (0, r.M)(e.onClick, () => a.onOpenChange(!1)) });
                });
            ve.displayName = fe;
            var he = o.forwardRef((e, n) => {
                const { __scopePopover: t, ...o } = e,
                    r = U(t);
                return (0, c.jsx)(v.Eh, { ...r, ...o, ref: n });
            });
            function me(e) {
                return e ? "open" : "closed";
            }
            he.displayName = "PopoverArrow";
            var ge = Q,
                we = oe,
                be = ie,
                ye = se,
                Ce = he;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-d96105ec.1e4ba67a.js.map

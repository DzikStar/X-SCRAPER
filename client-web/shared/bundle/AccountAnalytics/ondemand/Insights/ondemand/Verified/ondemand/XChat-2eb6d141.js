"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2eb6d141"],
    {
        717998: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        262656: (e, t, n) => {
            n.d(t, { F: () => o, e: () => i });
            var r = n(202784);
            function o(...e) {
                return (t) =>
                    e.forEach((e) =>
                        (function (e, t) {
                            "function" == typeof e ? e(t) : null != e && (e.current = t);
                        })(e, t),
                    );
            }
            function i(...e) {
                return r.useCallback(o(...e), e);
            }
        },
        301352: (e, t, n) => {
            n.d(t, { XB: () => m });
            var r,
                o = n(202784),
                i = n(717998),
                s = n(172714),
                a = n(262656),
                c = n(627757),
                u = n(986796),
                l = n(552322),
                d = "dismissableLayer.update",
                p = "dismissableLayer.pointerDownOutside",
                f = "dismissableLayer.focusOutside",
                h = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                m = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: m, onPointerDownOutside: v, onFocusOutside: w, onInteractOutside: b, onDismiss: x, ...E } = e,
                        C = o.useContext(h),
                        [P, T] = o.useState(null),
                        N = P?.ownerDocument ?? globalThis?.document,
                        [, O] = o.useState({}),
                        _ = (0, a.e)(t, (e) => T(e)),
                        R = Array.from(C.layers),
                        [D] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
                        j = R.indexOf(D),
                        M = P ? R.indexOf(P) : -1,
                        S = C.layersWithOutsidePointerEventsDisabled.size > 0,
                        A = M >= j,
                        L = (function (e, t = globalThis?.document) {
                            const n = (0, c.W)(e),
                                r = o.useRef(!1),
                                i = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    g(p, n, o, { discrete: !0 });
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
                            A && !n && (v?.(e), b?.(e), e.defaultPrevented || x?.());
                        }, N),
                        W = (function (e, t = globalThis?.document) {
                            const n = (0, c.W)(e),
                                r = o.useRef(!1);
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !r.current) {
                                            g(f, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...C.branches].some((e) => e.contains(t)) || (w?.(e), b?.(e), e.defaultPrevented || x?.());
                        }, N);
                    return (
                        (0, u.e)((e) => {
                            M === C.layers.size - 1 && (m?.(e), !e.defaultPrevented && x && (e.preventDefault(), x()));
                        }, N),
                        o.useEffect(() => {
                            if (P)
                                return (
                                    n && (0 === C.layersWithOutsidePointerEventsDisabled.size && ((r = N.body.style.pointerEvents), (N.body.style.pointerEvents = "none")), C.layersWithOutsidePointerEventsDisabled.add(P)),
                                    C.layers.add(P),
                                    y(),
                                    () => {
                                        n && 1 === C.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r);
                                    }
                                );
                        }, [P, N, n, C]),
                        o.useEffect(
                            () => () => {
                                P && (C.layers.delete(P), C.layersWithOutsidePointerEventsDisabled.delete(P), y());
                            },
                            [P, C],
                        ),
                        o.useEffect(() => {
                            const e = () => O({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, l.jsx)(s.WV.div, { ...E, ref: _, style: { pointerEvents: S ? (A ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, i.M)(e.onFocusCapture, W.onFocusCapture), onBlurCapture: (0, i.M)(e.onBlurCapture, W.onBlurCapture), onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, L.onPointerDownCapture) })
                    );
                });
            m.displayName = "DismissableLayer";
            var v = o.forwardRef((e, t) => {
                const n = o.useContext(h),
                    r = o.useRef(null),
                    i = (0, a.e)(t, r);
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
                    (0, l.jsx)(s.WV.div, { ...e, ref: i })
                );
            });
            function y() {
                const e = new CustomEvent(d);
                document.dispatchEvent(e);
            }
            function g(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, s.jH)(o, i) : o.dispatchEvent(i);
            }
            v.displayName = "DismissableLayerBranch";
        },
        23372: (e, t, n) => {
            var r;
            n.d(t, { M: () => c });
            var o = n(202784),
                i = n(861644),
                s = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {}),
                a = 0;
            function c(e) {
                const [t, n] = o.useState(s());
                return (
                    (0, i.b)(() => {
                        e || n((e) => e ?? String(a++));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        215828: (e, t, n) => {
            n.d(t, { ee: () => A, Eh: () => W, VY: () => L, fC: () => S, D7: () => y });
            var r = n(202784),
                o = n(992416),
                i = n(94258),
                s = n(172714),
                a = n(552322),
                c = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: o = 5, ...i } = e;
                    return (0, a.jsx)(s.WV.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            c.displayName = "Arrow";
            var u = c,
                l = n(262656);
            function d(...e) {
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
            var p = n(627757),
                f = n(861644),
                h = n(335019),
                m = "Popper",
                [v, y] = (function (e, t = []) {
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
                                const i = r.createContext(o),
                                    s = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        u = n?.[e][s] || i,
                                        l = r.useMemo(() => c, Object.values(c));
                                    return (0, a.jsx)(u.Provider, { value: l, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, a) {
                                            const c = a?.[e][s] || i,
                                                u = r.useContext(c);
                                            if (u) return u;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            d(o, ...t),
                        ]
                    );
                })(m),
                [g, w] = v(m),
                b = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, a.jsx)(g, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            b.displayName = m;
            var x = "PopperAnchor",
                E = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...i } = e,
                        c = w(x, n),
                        u = r.useRef(null),
                        d = (0, l.e)(t, u);
                    return (
                        r.useEffect(() => {
                            c.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, a.jsx)(s.WV.div, { ...i, ref: d })
                    );
                });
            E.displayName = x;
            var C = "PopperContent",
                [P, T] = v(C),
                N = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: c = "bottom", sideOffset: u = 0, align: d = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: y = !0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: E = !1, updatePositionStrategy: T = "optimized", onPlaced: N, ...O } = e,
                        _ = w(C, n),
                        [R, S] = r.useState(null),
                        A = (0, l.e)(t, (e) => S(e)),
                        [L, W] = r.useState(null),
                        k = (0, h.t)(L),
                        I = k?.width ?? 0,
                        $ = k?.height ?? 0,
                        B = c + ("center" !== d ? "-" + d : ""),
                        H = "number" == typeof b ? b : { top: 0, right: 0, bottom: 0, left: 0, ...b },
                        V = Array.isArray(g) ? g : [g],
                        z = V.length > 0,
                        F = { padding: H, boundary: V.filter(D), altBoundary: z },
                        {
                            refs: Y,
                            floatingStyles: U,
                            placement: X,
                            isPositioned: K,
                            middlewareData: Z,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: B,
                            whileElementsMounted: (...e) => (0, i.Me)(...e, { animationFrame: "always" === T }),
                            elements: { reference: _.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + $, alignmentAxis: m }),
                                y && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === x ? (0, o.dr)() : void 0, ...F }),
                                y && (0, o.RR)({ ...F }),
                                (0, o.dp)({
                                    ...F,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            s = e.floating.style;
                                        s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                L && (0, o.x7)({ element: L, padding: v }),
                                j({ arrowWidth: I, arrowHeight: $ }),
                                E && (0, o.Cp)({ strategy: "referenceHidden", ...F }),
                            ],
                        }),
                        [q, G] = M(X),
                        J = (0, p.W)(N);
                    (0, f.b)(() => {
                        K && J?.();
                    }, [K, J]);
                    const Q = Z.arrow?.x,
                        ee = Z.arrow?.y,
                        te = 0 !== Z.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, f.b)(() => {
                            R && re(window.getComputedStyle(R).zIndex);
                        }, [R]),
                        (0, a.jsx)("div", { ref: Y.setFloating, "data-radix-popper-content-wrapper": "", style: { ...U, transform: K ? U.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "), ...(Z.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, a.jsx)(P, { scope: n, placedSide: q, onArrowChange: W, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, a.jsx)(s.WV.div, { "data-side": q, "data-align": G, ...O, ref: A, style: { ...O.style, animation: K ? void 0 : "none" } }) }) })
                    );
                });
            N.displayName = C;
            var O = "PopperArrow",
                _ = { top: "bottom", right: "left", bottom: "top", left: "right" },
                R = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = T(O, n),
                        i = _[o.placedSide];
                    return (0, a.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, a.jsx)(u, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function D(e) {
                return null !== e;
            }
            R.displayName = O;
            var j = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        i = 0 !== o.arrow?.centerOffset,
                        s = i ? 0 : e.arrowWidth,
                        a = i ? 0 : e.arrowHeight,
                        [c, u] = M(n),
                        l = { start: "0%", center: "50%", end: "100%" }[u],
                        d = (o.arrow?.x ?? 0) + s / 2,
                        p = (o.arrow?.y ?? 0) + a / 2;
                    let f = "",
                        h = "";
                    return "bottom" === c ? ((f = i ? l : `${d}px`), (h = -a + "px")) : "top" === c ? ((f = i ? l : `${d}px`), (h = `${r.floating.height + a}px`)) : "right" === c ? ((f = -a + "px"), (h = i ? l : `${p}px`)) : "left" === c && ((f = `${r.floating.width + a}px`), (h = i ? l : `${p}px`)), { data: { x: f, y: h } };
                },
            });
            function M(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var S = b,
                A = E,
                L = N,
                W = R;
        },
        408149: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(172714),
                s = n(861644),
                a = n(552322),
                c = r.forwardRef((e, t) => {
                    const { container: n, ...c } = e,
                        [u, l] = r.useState(!1);
                    (0, s.b)(() => l(!0), []);
                    const d = n || (u && globalThis?.document?.body);
                    return d ? o.createPortal((0, a.jsx)(i.WV.div, { ...c, ref: t }), d) : null;
                });
            c.displayName = "Portal";
        },
        379616: (e, t, n) => {
            n.d(t, { z: () => a });
            var r = n(202784),
                o = n(928316),
                i = n(262656),
                s = n(861644);
            var a = (e) => {
                const { present: t, children: n } = e,
                    a = (function (e) {
                        const [t, n] = r.useState(),
                            i = r.useRef({}),
                            a = r.useRef(e),
                            u = r.useRef("none"),
                            l = e ? "mounted" : "unmounted",
                            [d, p] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(l, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = c(i.current);
                                u.current = "mounted" === d ? e : "none";
                            }, [d]),
                            (0, s.b)(() => {
                                const t = i.current,
                                    n = a.current;
                                if (n !== e) {
                                    const r = u.current,
                                        o = c(t);
                                    if (e) p("MOUNT");
                                    else if ("none" === o || "none" === t?.display) p("UNMOUNT");
                                    else {
                                        p(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    a.current = e;
                                }
                            }, [e, p]),
                            (0, s.b)(() => {
                                if (t) {
                                    const e = (e) => {
                                            const n = c(i.current).includes(e.animationName);
                                            e.target === t && n && o.flushSync(() => p("ANIMATION_END"));
                                        },
                                        n = (e) => {
                                            e.target === t && (u.current = c(i.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", n),
                                        t.addEventListener("animationcancel", e),
                                        t.addEventListener("animationend", e),
                                        () => {
                                            t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e);
                                        }
                                    );
                                }
                                p("ANIMATION_END");
                            }, [t, p]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(d),
                                ref: r.useCallback((e) => {
                                    e && (i.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    u = "function" == typeof n ? n({ present: a.isPresent }) : r.Children.only(n),
                    l = (0, i.e)(
                        a.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(u),
                    );
                return "function" == typeof n || a.isPresent ? r.cloneElement(u, { ref: l }) : null;
            };
            function c(e) {
                return e?.animationName || "none";
            }
            a.displayName = "Presence";
        },
        172714: (e, t, n) => {
            n.d(t, { WV: () => a, jH: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(549815),
                s = n(552322),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    const n = r.forwardRef((e, n) => {
                        const { asChild: r, ...o } = e,
                            a = r ? i.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        549815: (e, t, n) => {
            n.d(t, { A4: () => c, g7: () => s });
            var r = n(202784),
                o = n(262656),
                i = n(552322),
                s = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        s = r.Children.toArray(n),
                        c = s.find(u);
                    if (c) {
                        const e = c.props.children,
                            n = s.map((t) => (t === c ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, i.jsx)(a, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, i.jsx)(a, { ...o, ref: t, children: n });
                });
            s.displayName = "Slot";
            var a = r.forwardRef((e, t) => {
                const { children: n, ...i } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                            n = t && "isReactWarning" in t && t.isReactWarning;
                        if (n) return e.ref;
                        if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                        return e.props.ref || e.ref;
                    })(n);
                    return r.cloneElement(n, { ...l(i, n.props), ref: t ? (0, o.F)(t, e) : e });
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            a.displayName = "SlotClone";
            var c = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            function u(e) {
                return r.isValidElement(e) && e.type === c;
            }
            function l(e, t) {
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
            }
        },
        306880: (e, t, n) => {
            n.d(t, { VY: () => K, zt: () => Y, fC: () => U, xz: () => X });
            var r = n(202784),
                o = n(717998),
                i = n(262656),
                s = n(552322);
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
            var c = n(301352),
                u = n(23372),
                l = n(215828),
                d = n(408149),
                p = n(379616),
                f = n(172714),
                h = n(549815),
                m = n(387695),
                v = r.forwardRef((e, t) => (0, s.jsx)(f.WV.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }));
            v.displayName = "VisuallyHidden";
            var y = v,
                [g, w] = (function (e, t = []) {
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
                                const i = r.createContext(o),
                                    a = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        u = n?.[e][a] || i,
                                        l = r.useMemo(() => c, Object.values(c));
                                    return (0, s.jsx)(u.Provider, { value: l, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, s) {
                                            const c = s?.[e][a] || i,
                                                u = r.useContext(c);
                                            if (u) return u;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            a(o, ...t),
                        ]
                    );
                })("Tooltip", [l.D7]),
                b = (0, l.D7)(),
                x = "TooltipProvider",
                E = 700,
                C = "tooltip.open",
                [P, T] = g(x),
                N = (e) => {
                    const { __scopeTooltip: t, delayDuration: n = E, skipDelayDuration: o = 300, disableHoverableContent: i = !1, children: a } = e,
                        [c, u] = r.useState(!0),
                        l = r.useRef(!1),
                        d = r.useRef(0);
                    return (
                        r.useEffect(() => {
                            const e = d.current;
                            return () => window.clearTimeout(e);
                        }, []),
                        (0, s.jsx)(P, {
                            scope: t,
                            isOpenDelayed: c,
                            delayDuration: n,
                            onOpen: r.useCallback(() => {
                                window.clearTimeout(d.current), u(!1);
                            }, []),
                            onClose: r.useCallback(() => {
                                window.clearTimeout(d.current), (d.current = window.setTimeout(() => u(!0), o));
                            }, [o]),
                            isPointerInTransitRef: l,
                            onPointerInTransitChange: r.useCallback((e) => {
                                l.current = e;
                            }, []),
                            disableHoverableContent: i,
                            children: a,
                        })
                    );
                };
            N.displayName = x;
            var O = "Tooltip",
                [_, R] = g(O),
                D = (e) => {
                    const { __scopeTooltip: t, children: n, open: o, defaultOpen: i = !1, onOpenChange: a, disableHoverableContent: c, delayDuration: d } = e,
                        p = T(O, e.__scopeTooltip),
                        f = b(t),
                        [h, v] = r.useState(null),
                        y = (0, u.M)(),
                        g = r.useRef(0),
                        w = c ?? p.disableHoverableContent,
                        x = d ?? p.delayDuration,
                        E = r.useRef(!1),
                        [P = !1, N] = (0, m.T)({
                            prop: o,
                            defaultProp: i,
                            onChange: (e) => {
                                e ? (p.onOpen(), document.dispatchEvent(new CustomEvent(C))) : p.onClose(), a?.(e);
                            },
                        }),
                        R = r.useMemo(() => (P ? (E.current ? "delayed-open" : "instant-open") : "closed"), [P]),
                        D = r.useCallback(() => {
                            window.clearTimeout(g.current), (E.current = !1), N(!0);
                        }, [N]),
                        j = r.useCallback(() => {
                            window.clearTimeout(g.current), N(!1);
                        }, [N]),
                        M = r.useCallback(() => {
                            window.clearTimeout(g.current),
                                (g.current = window.setTimeout(() => {
                                    (E.current = !0), N(!0);
                                }, x));
                        }, [x, N]);
                    return (
                        r.useEffect(() => () => window.clearTimeout(g.current), []),
                        (0, s.jsx)(l.fC, {
                            ...f,
                            children: (0, s.jsx)(_, {
                                scope: t,
                                contentId: y,
                                open: P,
                                stateAttribute: R,
                                trigger: h,
                                onTriggerChange: v,
                                onTriggerEnter: r.useCallback(() => {
                                    p.isOpenDelayed ? M() : D();
                                }, [p.isOpenDelayed, M, D]),
                                onTriggerLeave: r.useCallback(() => {
                                    w ? j() : window.clearTimeout(g.current);
                                }, [j, w]),
                                onOpen: D,
                                onClose: j,
                                disableHoverableContent: w,
                                children: n,
                            }),
                        })
                    );
                };
            D.displayName = O;
            var j = "TooltipTrigger",
                M = r.forwardRef((e, t) => {
                    const { __scopeTooltip: n, ...a } = e,
                        c = R(j, n),
                        u = T(j, n),
                        d = b(n),
                        p = r.useRef(null),
                        h = (0, i.e)(t, p, c.onTriggerChange),
                        m = r.useRef(!1),
                        v = r.useRef(!1),
                        y = r.useCallback(() => (m.current = !1), []);
                    return (
                        r.useEffect(() => () => document.removeEventListener("pointerup", y), [y]),
                        (0, s.jsx)(l.ee, {
                            asChild: !0,
                            ...d,
                            children: (0, s.jsx)(f.WV.button, {
                                "aria-describedby": c.open ? c.contentId : void 0,
                                "data-state": c.stateAttribute,
                                ...a,
                                ref: h,
                                onPointerMove: (0, o.M)(e.onPointerMove, (e) => {
                                    "touch" !== e.pointerType && (v.current || u.isPointerInTransitRef.current || (c.onTriggerEnter(), (v.current = !0)));
                                }),
                                onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                                    c.onTriggerLeave(), (v.current = !1);
                                }),
                                onPointerDown: (0, o.M)(e.onPointerDown, () => {
                                    (m.current = !0), document.addEventListener("pointerup", y, { once: !0 });
                                }),
                                onFocus: (0, o.M)(e.onFocus, () => {
                                    m.current || c.onOpen();
                                }),
                                onBlur: (0, o.M)(e.onBlur, c.onClose),
                                onClick: (0, o.M)(e.onClick, c.onClose),
                            }),
                        })
                    );
                });
            M.displayName = j;
            var S = "TooltipPortal",
                [A, L] = g(S, { forceMount: void 0 }),
                W = (e) => {
                    const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
                        i = R(S, t);
                    return (0, s.jsx)(A, { scope: t, forceMount: n, children: (0, s.jsx)(p.z, { present: n || i.open, children: (0, s.jsx)(d.h, { asChild: !0, container: o, children: r }) }) });
                };
            W.displayName = S;
            var k = "TooltipContent",
                I = r.forwardRef((e, t) => {
                    const n = L(k, e.__scopeTooltip),
                        { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
                        a = R(k, e.__scopeTooltip);
                    return (0, s.jsx)(p.z, { present: r || a.open, children: a.disableHoverableContent ? (0, s.jsx)(V, { side: o, ...i, ref: t }) : (0, s.jsx)($, { side: o, ...i, ref: t }) });
                }),
                $ = r.forwardRef((e, t) => {
                    const n = R(k, e.__scopeTooltip),
                        o = T(k, e.__scopeTooltip),
                        a = r.useRef(null),
                        c = (0, i.e)(t, a),
                        [u, l] = r.useState(null),
                        { trigger: d, onClose: p } = n,
                        f = a.current,
                        { onPointerInTransitChange: h } = o,
                        m = r.useCallback(() => {
                            l(null), h(!1);
                        }, [h]),
                        v = r.useCallback(
                            (e, t) => {
                                const n = e.currentTarget,
                                    r = { x: e.clientX, y: e.clientY },
                                    o = (function (e, t, n = 5) {
                                        const r = [];
                                        switch (t) {
                                            case "top":
                                                r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                                                break;
                                            case "bottom":
                                                r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                                                break;
                                            case "left":
                                                r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                                                break;
                                            case "right":
                                                r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                                        }
                                        return r;
                                    })(
                                        r,
                                        (function (e, t) {
                                            const n = Math.abs(t.top - e.y),
                                                r = Math.abs(t.bottom - e.y),
                                                o = Math.abs(t.right - e.x),
                                                i = Math.abs(t.left - e.x);
                                            switch (Math.min(n, r, o, i)) {
                                                case i:
                                                    return "left";
                                                case o:
                                                    return "right";
                                                case n:
                                                    return "top";
                                                case r:
                                                    return "bottom";
                                                default:
                                                    throw new Error("unreachable");
                                            }
                                        })(r, n.getBoundingClientRect()),
                                    ),
                                    i = (function (e) {
                                        const t = e.slice();
                                        return (
                                            t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                            (function (e) {
                                                if (e.length <= 1) return e.slice();
                                                const t = [];
                                                for (let n = 0; n < e.length; n++) {
                                                    const r = e[n];
                                                    for (; t.length >= 2; ) {
                                                        const e = t[t.length - 1],
                                                            n = t[t.length - 2];
                                                        if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                                                        t.pop();
                                                    }
                                                    t.push(r);
                                                }
                                                t.pop();
                                                const n = [];
                                                for (let t = e.length - 1; t >= 0; t--) {
                                                    const r = e[t];
                                                    for (; n.length >= 2; ) {
                                                        const e = n[n.length - 1],
                                                            t = n[n.length - 2];
                                                        if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                                                        n.pop();
                                                    }
                                                    n.push(r);
                                                }
                                                return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
                                            })(t)
                                        );
                                    })([
                                        ...o,
                                        ...(function (e) {
                                            const { top: t, right: n, bottom: r, left: o } = e;
                                            return [
                                                { x: o, y: t },
                                                { x: n, y: t },
                                                { x: n, y: r },
                                                { x: o, y: r },
                                            ];
                                        })(t.getBoundingClientRect()),
                                    ]);
                                l(i), h(!0);
                            },
                            [h],
                        );
                    return (
                        r.useEffect(() => () => m(), [m]),
                        r.useEffect(() => {
                            if (d && f) {
                                const e = (e) => v(e, f),
                                    t = (e) => v(e, d);
                                return (
                                    d.addEventListener("pointerleave", e),
                                    f.addEventListener("pointerleave", t),
                                    () => {
                                        d.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t);
                                    }
                                );
                            }
                        }, [d, f, v, m]),
                        r.useEffect(() => {
                            if (u) {
                                const e = (e) => {
                                    const t = e.target,
                                        n = { x: e.clientX, y: e.clientY },
                                        r = d?.contains(t) || f?.contains(t),
                                        o = !(function (e, t) {
                                            const { x: n, y: r } = e;
                                            let o = !1;
                                            for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                                const s = t[e].x,
                                                    a = t[e].y,
                                                    c = t[i].x,
                                                    u = t[i].y;
                                                a > r != u > r && n < ((c - s) * (r - a)) / (u - a) + s && (o = !o);
                                            }
                                            return o;
                                        })(n, u);
                                    r ? m() : o && (m(), p());
                                };
                                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
                            }
                        }, [d, f, u, p, m]),
                        (0, s.jsx)(V, { ...e, ref: c })
                    );
                }),
                [B, H] = g(O, { isInside: !1 }),
                V = r.forwardRef((e, t) => {
                    const { __scopeTooltip: n, children: o, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: u, ...d } = e,
                        p = R(k, n),
                        f = b(n),
                        { onClose: m } = p;
                    return (
                        r.useEffect(() => (document.addEventListener(C, m), () => document.removeEventListener(C, m)), [m]),
                        r.useEffect(() => {
                            if (p.trigger) {
                                const e = (e) => {
                                    const t = e.target;
                                    t?.contains(p.trigger) && m();
                                };
                                return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
                            }
                        }, [p.trigger, m]),
                        (0, s.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: a, onPointerDownOutside: u, onFocusOutside: (e) => e.preventDefault(), onDismiss: m, children: (0, s.jsxs)(l.VY, { "data-state": p.stateAttribute, ...f, ...d, ref: t, style: { ...d.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [(0, s.jsx)(h.A4, { children: o }), (0, s.jsx)(B, { scope: n, isInside: !0, children: (0, s.jsx)(y, { id: p.contentId, role: "tooltip", children: i || o }) })] }) })
                    );
                });
            I.displayName = k;
            var z = "TooltipArrow",
                F = r.forwardRef((e, t) => {
                    const { __scopeTooltip: n, ...r } = e,
                        o = b(n);
                    return H(z, n).isInside ? null : (0, s.jsx)(l.Eh, { ...o, ...r, ref: t });
                });
            F.displayName = z;
            var Y = N,
                U = D,
                X = M,
                K = I;
        },
        627757: (e, t, n) => {
            n.d(t, { W: () => o });
            var r = n(202784);
            function o(e) {
                const t = r.useRef(e);
                return (
                    r.useEffect(() => {
                        t.current = e;
                    }),
                    r.useMemo(
                        () =>
                            (...e) =>
                                t.current?.(...e),
                        [],
                    )
                );
            }
        },
        387695: (e, t, n) => {
            n.d(t, { T: () => i });
            var r = n(202784),
                o = n(627757);
            function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
                const [i, s] = (function ({ defaultProp: e, onChange: t }) {
                        const n = r.useState(e),
                            [i] = n,
                            s = r.useRef(i),
                            a = (0, o.W)(t);
                        return (
                            r.useEffect(() => {
                                s.current !== i && (a(i), (s.current = i));
                            }, [i, s, a]),
                            n
                        );
                    })({ defaultProp: t, onChange: n }),
                    a = void 0 !== e,
                    c = a ? e : i,
                    u = (0, o.W)(n);
                return [
                    c,
                    r.useCallback(
                        (t) => {
                            if (a) {
                                const n = "function" == typeof t ? t(e) : t;
                                n !== e && u(n);
                            } else s(t);
                        },
                        [a, e, s, u],
                    ),
                ];
            }
        },
        986796: (e, t, n) => {
            n.d(t, { e: () => i });
            var r = n(202784),
                o = n(627757);
            function i(e, t = globalThis?.document) {
                const n = (0, o.W)(e);
                r.useEffect(() => {
                    const e = (e) => {
                        "Escape" === e.key && n(e);
                    };
                    return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
                }, [n, t]);
            }
        },
        861644: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(202784),
                o = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {};
        },
        335019: (e, t, n) => {
            n.d(t, { t: () => i });
            var r = n(202784),
                o = n(861644);
            function i(e) {
                const [t, n] = r.useState(void 0);
                return (
                    (0, o.b)(() => {
                        if (e) {
                            n({ width: e.offsetWidth, height: e.offsetHeight });
                            const t = new ResizeObserver((t) => {
                                if (!Array.isArray(t)) return;
                                if (!t.length) return;
                                const r = t[0];
                                let o, i;
                                if ("borderBoxSize" in r) {
                                    const e = r.borderBoxSize,
                                        t = Array.isArray(e) ? e[0] : e;
                                    (o = t.inlineSize), (i = t.blockSize);
                                } else (o = e.offsetWidth), (i = e.offsetHeight);
                                n({ width: o, height: i });
                            });
                            return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
                        }
                        n(void 0);
                    }, [e]),
                    t
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2eb6d141.defe141a.js.map

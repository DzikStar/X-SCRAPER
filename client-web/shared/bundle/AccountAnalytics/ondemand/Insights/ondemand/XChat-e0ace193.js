"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-e0ace193"],
    {
        23372: (e, t, n) => {
            var r;
            n.d(t, { M: () => c });
            var o = n(202784),
                i = n(861644),
                a = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {}),
                s = 0;
            function c(e) {
                const [t, n] = o.useState(a());
                return (
                    (0, i.b)(() => {
                        e || n((e) => e ?? String(s++));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        927382: (e, t, n) => {
            n.d(t, { Eh: () => q, VY: () => Z, h_: () => K, fC: () => B, xz: () => X });
            var r = n(202784),
                o = n(717998),
                i = n(262656),
                a = n(552322);
            function s(...e) {
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
            function d() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? l()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? l()),
                        u++,
                        () => {
                            1 === u && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), u--;
                        }
                    );
                }, []);
            }
            function l() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var p = n(22426),
                f = n(23372),
                h = n(355974),
                m = n(408149),
                v = n(379616),
                g = n(172714),
                y = n(549815),
                x = n(387695),
                w = n(549732),
                b = n(234413),
                P = "Popover",
                [C, N] = (function (e, t = []) {
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
                                        d = r.useMemo(() => c, Object.values(c));
                                    return (0, a.jsx)(u.Provider, { value: d, children: o });
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
                            s(o, ...t),
                        ]
                    );
                })(P, [h.D7]),
                A = (0, h.D7)(),
                [O, _] = C(P),
                E = (e) => {
                    const { __scopePopover: t, children: n, open: o, defaultOpen: i, onOpenChange: s, modal: c = !1 } = e,
                        u = A(t),
                        d = r.useRef(null),
                        [l, p] = r.useState(!1),
                        [m = !1, v] = (0, x.T)({ prop: o, defaultProp: i, onChange: s });
                    return (0, a.jsx)(h.fC, { ...u, children: (0, a.jsx)(O, { scope: t, contentId: (0, f.M)(), triggerRef: d, open: m, onOpenChange: v, onOpenToggle: r.useCallback(() => v((e) => !e), [v]), hasCustomAnchor: l, onCustomAnchorAdd: r.useCallback(() => p(!0), []), onCustomAnchorRemove: r.useCallback(() => p(!1), []), modal: c, children: n }) });
                };
            E.displayName = P;
            var R = "PopoverAnchor",
                j = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...o } = e,
                        i = _(R, n),
                        s = A(n),
                        { onCustomAnchorAdd: c, onCustomAnchorRemove: u } = i;
                    return r.useEffect(() => (c(), () => u()), [c, u]), (0, a.jsx)(h.ee, { ...s, ...o, ref: t });
                });
            j.displayName = R;
            var S = "PopoverTrigger",
                M = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        s = _(S, n),
                        c = A(n),
                        u = (0, i.e)(t, s.triggerRef),
                        d = (0, a.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": s.open, "aria-controls": s.contentId, "data-state": L(s.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, s.onOpenToggle) });
                    return s.hasCustomAnchor ? d : (0, a.jsx)(h.ee, { asChild: !0, ...c, children: d });
                });
            M.displayName = S;
            var D = "PopoverPortal",
                [W, F] = C(D, { forceMount: void 0 }),
                I = (e) => {
                    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        i = _(D, t);
                    return (0, a.jsx)(W, { scope: t, forceMount: n, children: (0, a.jsx)(v.z, { present: n || i.open, children: (0, a.jsx)(m.h, { asChild: !0, container: o, children: r }) }) });
                };
            I.displayName = D;
            var T = "PopoverContent",
                $ = r.forwardRef((e, t) => {
                    const n = F(T, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        i = _(T, e.__scopePopover);
                    return (0, a.jsx)(v.z, { present: r || i.open, children: i.modal ? (0, a.jsx)(k, { ...o, ref: t }) : (0, a.jsx)(V, { ...o, ref: t }) });
                });
            $.displayName = T;
            var k = r.forwardRef((e, t) => {
                    const n = _(T, e.__scopePopover),
                        s = r.useRef(null),
                        c = (0, i.e)(t, s),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            const e = s.current;
                            if (e) return (0, w.Ry)(e);
                        }, []),
                        (0, a.jsx)(b.Z, {
                            as: y.g7,
                            allowPinchZoom: !0,
                            children: (0, a.jsx)(z, {
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
                    const n = _(T, e.__scopePopover),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, a.jsx)(z, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), (o.current = !1), (i.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((o.current = !0), "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
                            const r = t.target,
                                a = n.triggerRef.current?.contains(r);
                            a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault();
                        },
                    });
                }),
                z = r.forwardRef((e, t) => {
                    const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEscapeKeyDown: u, onPointerDownOutside: l, onFocusOutside: f, onInteractOutside: m, ...v } = e,
                        g = _(T, n),
                        y = A(n);
                    return d(), (0, a.jsx)(p.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: i, children: (0, a.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: s, onInteractOutside: m, onEscapeKeyDown: u, onPointerDownOutside: l, onFocusOutside: f, onDismiss: () => g.onOpenChange(!1), children: (0, a.jsx)(h.VY, { "data-state": L(g.open), role: "dialog", id: g.contentId, ...y, ...v, ref: t, style: { ...v.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                U = "PopoverClose",
                H = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        i = _(U, n);
                    return (0, a.jsx)(g.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1)) });
                });
            H.displayName = U;
            var Y = r.forwardRef((e, t) => {
                const { __scopePopover: n, ...r } = e,
                    o = A(n);
                return (0, a.jsx)(h.Eh, { ...o, ...r, ref: t });
            });
            function L(e) {
                return e ? "open" : "closed";
            }
            Y.displayName = "PopoverArrow";
            var B = E,
                X = M,
                K = I,
                Z = $,
                q = Y;
        },
        355974: (e, t, n) => {
            n.d(t, { ee: () => D, Eh: () => F, VY: () => W, fC: () => M, D7: () => v });
            var r = n(202784),
                o = n(992416),
                i = n(94258),
                a = n(784389),
                s = n(262656),
                c = n(552322);
            function u(...e) {
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
            var d = n(172714),
                l = n(627757),
                p = n(861644),
                f = n(335019),
                h = "Popper",
                [m, v] = (function (e, t = []) {
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
                                function s(t) {
                                    const { scope: n, children: o, ...s } = t,
                                        u = n?.[e][a] || i,
                                        d = r.useMemo(() => s, Object.values(s));
                                    return (0, c.jsx)(u.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (s.displayName = t + "Provider"),
                                    [
                                        s,
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
                            u(o, ...t),
                        ]
                    );
                })(h),
                [g, y] = m(h),
                x = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, c.jsx)(g, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            x.displayName = h;
            var w = "PopperAnchor",
                b = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...i } = e,
                        a = y(w, n),
                        u = r.useRef(null),
                        l = (0, s.e)(t, u);
                    return (
                        r.useEffect(() => {
                            a.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, c.jsx)(d.WV.div, { ...i, ref: l })
                    );
                });
            b.displayName = w;
            var P = "PopperContent",
                [C, N] = m(P),
                A = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: a = "bottom", sideOffset: u = 0, align: h = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: x = [], collisionPadding: w = 0, sticky: b = "partial", hideWhenDetached: N = !1, updatePositionStrategy: A = "optimized", onPlaced: O, ..._ } = e,
                        E = y(P, n),
                        [M, D] = r.useState(null),
                        W = (0, s.e)(t, (e) => D(e)),
                        [F, I] = r.useState(null),
                        T = (0, f.t)(F),
                        $ = T?.width ?? 0,
                        k = T?.height ?? 0,
                        V = a + ("center" !== h ? "-" + h : ""),
                        z = "number" == typeof w ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w },
                        U = Array.isArray(x) ? x : [x],
                        H = U.length > 0,
                        Y = { padding: z, boundary: U.filter(R), altBoundary: H },
                        {
                            refs: L,
                            floatingStyles: B,
                            placement: X,
                            isPositioned: K,
                            middlewareData: Z,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: V,
                            whileElementsMounted: (...e) => (0, i.Me)(...e, { animationFrame: "always" === A }),
                            elements: { reference: E.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + k, alignmentAxis: m }),
                                g && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === b ? (0, o.dr)() : void 0, ...Y }),
                                g && (0, o.RR)({ ...Y }),
                                (0, o.dp)({
                                    ...Y,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            a = e.floating.style;
                                        a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                F && (0, o.x7)({ element: F, padding: v }),
                                j({ arrowWidth: $, arrowHeight: k }),
                                N && (0, o.Cp)({ strategy: "referenceHidden", ...Y }),
                            ],
                        }),
                        [q, G] = S(X),
                        J = (0, l.W)(O);
                    (0, p.b)(() => {
                        K && J?.();
                    }, [K, J]);
                    const Q = Z.arrow?.x,
                        ee = Z.arrow?.y,
                        te = 0 !== Z.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, p.b)(() => {
                            M && re(window.getComputedStyle(M).zIndex);
                        }, [M]),
                        (0, c.jsx)("div", { ref: L.setFloating, "data-radix-popper-content-wrapper": "", style: { ...B, transform: K ? B.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "), ...(Z.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, c.jsx)(C, { scope: n, placedSide: q, onArrowChange: I, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, c.jsx)(d.WV.div, { "data-side": q, "data-align": G, ..._, ref: W, style: { ..._.style, animation: K ? void 0 : "none" } }) }) })
                    );
                });
            A.displayName = P;
            var O = "PopperArrow",
                _ = { top: "bottom", right: "left", bottom: "top", left: "right" },
                E = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = N(O, n),
                        i = _[o.placedSide];
                    return (0, c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(a.f, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function R(e) {
                return null !== e;
            }
            E.displayName = O;
            var j = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        i = 0 !== o.arrow?.centerOffset,
                        a = i ? 0 : e.arrowWidth,
                        s = i ? 0 : e.arrowHeight,
                        [c, u] = S(n),
                        d = { start: "0%", center: "50%", end: "100%" }[u],
                        l = (o.arrow?.x ?? 0) + a / 2,
                        p = (o.arrow?.y ?? 0) + s / 2;
                    let f = "",
                        h = "";
                    return "bottom" === c ? ((f = i ? d : `${l}px`), (h = -s + "px")) : "top" === c ? ((f = i ? d : `${l}px`), (h = `${r.floating.height + s}px`)) : "right" === c ? ((f = -s + "px"), (h = i ? d : `${p}px`)) : "left" === c && ((f = `${r.floating.width + s}px`), (h = i ? d : `${p}px`)), { data: { x: f, y: h } };
                },
            });
            function S(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var M = x,
                D = b,
                W = A,
                F = E;
        },
        408149: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(172714),
                a = n(861644),
                s = n(552322),
                c = r.forwardRef((e, t) => {
                    const { container: n, ...c } = e,
                        [u, d] = r.useState(!1);
                    (0, a.b)(() => d(!0), []);
                    const l = n || (u && globalThis?.document?.body);
                    return l ? o.createPortal((0, s.jsx)(i.WV.div, { ...c, ref: t }), l) : null;
                });
            c.displayName = "Portal";
        },
        379616: (e, t, n) => {
            n.d(t, { z: () => s });
            var r = n(202784),
                o = n(928316),
                i = n(262656),
                a = n(861644);
            var s = (e) => {
                const { present: t, children: n } = e,
                    s = (function (e) {
                        const [t, n] = r.useState(),
                            i = r.useRef({}),
                            s = r.useRef(e),
                            u = r.useRef("none"),
                            d = e ? "mounted" : "unmounted",
                            [l, p] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(d, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = c(i.current);
                                u.current = "mounted" === l ? e : "none";
                            }, [l]),
                            (0, a.b)(() => {
                                const t = i.current,
                                    n = s.current;
                                if (n !== e) {
                                    const r = u.current,
                                        o = c(t);
                                    if (e) p("MOUNT");
                                    else if ("none" === o || "none" === t?.display) p("UNMOUNT");
                                    else {
                                        p(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    s.current = e;
                                }
                            }, [e, p]),
                            (0, a.b)(() => {
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
                                isPresent: ["mounted", "unmountSuspended"].includes(l),
                                ref: r.useCallback((e) => {
                                    e && (i.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    u = "function" == typeof n ? n({ present: s.isPresent }) : r.Children.only(n),
                    d = (0, i.e)(
                        s.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(u),
                    );
                return "function" == typeof n || s.isPresent ? r.cloneElement(u, { ref: d }) : null;
            };
            function c(e) {
                return e?.animationName || "none";
            }
            s.displayName = "Presence";
        },
        172714: (e, t, n) => {
            n.d(t, { WV: () => s, jH: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(549815),
                a = n(552322),
                s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    const n = r.forwardRef((e, n) => {
                        const { asChild: r, ...o } = e,
                            s = r ? i.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        549815: (e, t, n) => {
            n.d(t, { A4: () => c, g7: () => a });
            var r = n(202784),
                o = n(262656),
                i = n(552322),
                a = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        a = r.Children.toArray(n),
                        c = a.find(u);
                    if (c) {
                        const e = c.props.children,
                            n = a.map((t) => (t === c ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, i.jsx)(s, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, i.jsx)(s, { ...o, ref: t, children: n });
                });
            a.displayName = "Slot";
            var s = r.forwardRef((e, t) => {
                const { children: n, ...i } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                            n = t && "isReactWarning" in t && t.isReactWarning;
                        if (n) return e.ref;
                        if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                        return e.props.ref || e.ref;
                    })(n);
                    return r.cloneElement(n, { ...d(i, n.props), ref: t ? (0, o.F)(t, e) : e });
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            s.displayName = "SlotClone";
            var c = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            function u(e) {
                return r.isValidElement(e) && e.type === c;
            }
            function d(e, t) {
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
                const [i, a] = (function ({ defaultProp: e, onChange: t }) {
                        const n = r.useState(e),
                            [i] = n,
                            a = r.useRef(i),
                            s = (0, o.W)(t);
                        return (
                            r.useEffect(() => {
                                a.current !== i && (s(i), (a.current = i));
                            }, [i, a, s]),
                            n
                        );
                    })({ defaultProp: t, onChange: n }),
                    s = void 0 !== e,
                    c = s ? e : i,
                    u = (0, o.W)(n);
                return [
                    c,
                    r.useCallback(
                        (t) => {
                            if (s) {
                                const n = "function" == typeof t ? t(e) : t;
                                n !== e && u(n);
                            } else a(t);
                        },
                        [s, e, a, u],
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-e0ace193.dc95ebda.js.map

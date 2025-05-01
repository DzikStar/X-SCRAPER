"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-e0ace193"],
    {
        23372: (e, t, n) => {
            var r;
            n.d(t, { M: () => c });
            var o = n(202784),
                a = n(861644),
                s = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {}),
                i = 0;
            function c(e) {
                const [t, n] = o.useState(s());
                return (
                    (0, a.b)(() => {
                        e || n((e) => e ?? String(i++));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        927382: (e, t, n) => {
            n.d(t, { Eh: () => Z, VY: () => q, h_: () => K, fC: () => X, xz: () => B });
            var r = n(202784),
                o = n(717998),
                a = n(262656),
                s = n(552322);
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
            function d() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? p()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? p()),
                        u++,
                        () => {
                            1 === u && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), u--;
                        }
                    );
                }, []);
            }
            function p() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var l = n(22426),
                f = n(23372),
                m = n(355974),
                h = n(408149),
                v = n(379616),
                g = n(172714),
                x = n(549815),
                w = n(387695),
                y = n(549732),
                b = n(234413),
                P = "Popover",
                [N, _] = (function (e, t = []) {
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
                                    i = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        u = n?.[e][i] || a,
                                        d = r.useMemo(() => c, Object.values(c));
                                    return (0, s.jsx)(u.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, s) {
                                            const c = s?.[e][i] || a,
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
                })(P, [m.D7]),
                C = (0, m.D7)(),
                [O, A] = N(P),
                j = (e) => {
                    const { __scopePopover: t, children: n, open: o, defaultOpen: a, onOpenChange: i, modal: c = !1 } = e,
                        u = C(t),
                        d = r.useRef(null),
                        [p, l] = r.useState(!1),
                        [h = !1, v] = (0, w.T)({ prop: o, defaultProp: a, onChange: i });
                    return (0, s.jsx)(m.fC, { ...u, children: (0, s.jsx)(O, { scope: t, contentId: (0, f.M)(), triggerRef: d, open: h, onOpenChange: v, onOpenToggle: r.useCallback(() => v((e) => !e), [v]), hasCustomAnchor: p, onCustomAnchorAdd: r.useCallback(() => l(!0), []), onCustomAnchorRemove: r.useCallback(() => l(!1), []), modal: c, children: n }) });
                };
            j.displayName = P;
            var R = "PopoverAnchor",
                E = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...o } = e,
                        a = A(R, n),
                        i = C(n),
                        { onCustomAnchorAdd: c, onCustomAnchorRemove: u } = a;
                    return r.useEffect(() => (c(), () => u()), [c, u]), (0, s.jsx)(m.ee, { ...i, ...o, ref: t });
                });
            E.displayName = R;
            var M = "PopoverTrigger",
                S = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        i = A(M, n),
                        c = C(n),
                        u = (0, a.e)(t, i.triggerRef),
                        d = (0, s.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i.open, "aria-controls": i.contentId, "data-state": L(i.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, i.onOpenToggle) });
                    return i.hasCustomAnchor ? d : (0, s.jsx)(m.ee, { asChild: !0, ...c, children: d });
                });
            S.displayName = M;
            var D = "PopoverPortal",
                [$, I] = N(D, { forceMount: void 0 }),
                F = (e) => {
                    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        a = A(D, t);
                    return (0, s.jsx)($, { scope: t, forceMount: n, children: (0, s.jsx)(v.z, { present: n || a.open, children: (0, s.jsx)(h.h, { asChild: !0, container: o, children: r }) }) });
                };
            F.displayName = D;
            var T = "PopoverContent",
                k = r.forwardRef((e, t) => {
                    const n = I(T, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        a = A(T, e.__scopePopover);
                    return (0, s.jsx)(v.z, { present: r || a.open, children: a.modal ? (0, s.jsx)(W, { ...o, ref: t }) : (0, s.jsx)(U, { ...o, ref: t }) });
                });
            k.displayName = T;
            var W = r.forwardRef((e, t) => {
                    const n = A(T, e.__scopePopover),
                        i = r.useRef(null),
                        c = (0, a.e)(t, i),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            const e = i.current;
                            if (e) return (0, y.Ry)(e);
                        }, []),
                        (0, s.jsx)(b.Z, {
                            as: x.g7,
                            allowPinchZoom: !0,
                            children: (0, s.jsx)(Y, {
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
                U = r.forwardRef((e, t) => {
                    const n = A(T, e.__scopePopover),
                        o = r.useRef(!1),
                        a = r.useRef(!1);
                    return (0, s.jsx)(Y, {
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
                Y = r.forwardRef((e, t) => {
                    const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: u, onPointerDownOutside: p, onFocusOutside: f, onInteractOutside: h, ...v } = e,
                        g = A(T, n),
                        x = C(n);
                    return d(), (0, s.jsx)(l.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: a, children: (0, s.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: i, onInteractOutside: h, onEscapeKeyDown: u, onPointerDownOutside: p, onFocusOutside: f, onDismiss: () => g.onOpenChange(!1), children: (0, s.jsx)(m.VY, { "data-state": L(g.open), role: "dialog", id: g.contentId, ...x, ...v, ref: t, style: { ...v.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                V = "PopoverClose",
                H = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        a = A(V, n);
                    return (0, s.jsx)(g.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => a.onOpenChange(!1)) });
                });
            H.displayName = V;
            var z = r.forwardRef((e, t) => {
                const { __scopePopover: n, ...r } = e,
                    o = C(n);
                return (0, s.jsx)(m.Eh, { ...o, ...r, ref: t });
            });
            function L(e) {
                return e ? "open" : "closed";
            }
            z.displayName = "PopoverArrow";
            var X = j,
                B = S,
                K = F,
                q = k,
                Z = z;
        },
        355974: (e, t, n) => {
            n.d(t, { ee: () => D, Eh: () => I, VY: () => $, fC: () => S, D7: () => v });
            var r = n(202784),
                o = n(992416),
                a = n(94258),
                s = n(784389),
                i = n(262656),
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
                p = n(627757),
                l = n(861644),
                f = n(335019),
                m = "Popper",
                [h, v] = (function (e, t = []) {
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
                                    s = n.length;
                                function i(t) {
                                    const { scope: n, children: o, ...i } = t,
                                        u = n?.[e][s] || a,
                                        d = r.useMemo(() => i, Object.values(i));
                                    return (0, c.jsx)(u.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (i.displayName = t + "Provider"),
                                    [
                                        i,
                                        function (n, i) {
                                            const c = i?.[e][s] || a,
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
                })(m),
                [g, x] = h(m),
                w = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, a] = r.useState(null);
                    return (0, c.jsx)(g, { scope: t, anchor: o, onAnchorChange: a, children: n });
                };
            w.displayName = m;
            var y = "PopperAnchor",
                b = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...a } = e,
                        s = x(y, n),
                        u = r.useRef(null),
                        p = (0, i.e)(t, u);
                    return (
                        r.useEffect(() => {
                            s.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, c.jsx)(d.WV.div, { ...a, ref: p })
                    );
                });
            b.displayName = y;
            var P = "PopperContent",
                [N, _] = h(P),
                C = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: s = "bottom", sideOffset: u = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: w = [], collisionPadding: y = 0, sticky: b = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: C = "optimized", onPlaced: O, ...A } = e,
                        j = x(P, n),
                        [S, D] = r.useState(null),
                        $ = (0, i.e)(t, (e) => D(e)),
                        [I, F] = r.useState(null),
                        T = (0, f.t)(I),
                        k = T?.width ?? 0,
                        W = T?.height ?? 0,
                        U = s + ("center" !== m ? "-" + m : ""),
                        Y = "number" == typeof y ? y : { top: 0, right: 0, bottom: 0, left: 0, ...y },
                        V = Array.isArray(w) ? w : [w],
                        H = V.length > 0,
                        z = { padding: Y, boundary: V.filter(R), altBoundary: H },
                        {
                            refs: L,
                            floatingStyles: X,
                            placement: B,
                            isPositioned: K,
                            middlewareData: q,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: U,
                            whileElementsMounted: (...e) => (0, a.Me)(...e, { animationFrame: "always" === C }),
                            elements: { reference: j.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + W, alignmentAxis: h }),
                                g && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === b ? (0, o.dr)() : void 0, ...z }),
                                g && (0, o.RR)({ ...z }),
                                (0, o.dp)({
                                    ...z,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: a } = t.reference,
                                            s = e.floating.style;
                                        s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`);
                                    },
                                }),
                                I && (0, o.x7)({ element: I, padding: v }),
                                E({ arrowWidth: k, arrowHeight: W }),
                                _ && (0, o.Cp)({ strategy: "referenceHidden", ...z }),
                            ],
                        }),
                        [Z, G] = M(B),
                        J = (0, p.W)(O);
                    (0, l.b)(() => {
                        K && J?.();
                    }, [K, J]);
                    const Q = q.arrow?.x,
                        ee = q.arrow?.y,
                        te = 0 !== q.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, l.b)(() => {
                            S && re(window.getComputedStyle(S).zIndex);
                        }, [S]),
                        (0, c.jsx)("div", { ref: L.setFloating, "data-radix-popper-content-wrapper": "", style: { ...X, transform: K ? X.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [q.transformOrigin?.x, q.transformOrigin?.y].join(" "), ...(q.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, c.jsx)(N, { scope: n, placedSide: Z, onArrowChange: F, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, c.jsx)(d.WV.div, { "data-side": Z, "data-align": G, ...A, ref: $, style: { ...A.style, animation: K ? void 0 : "none" } }) }) })
                    );
                });
            C.displayName = P;
            var O = "PopperArrow",
                A = { top: "bottom", right: "left", bottom: "top", left: "right" },
                j = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = _(O, n),
                        a = A[o.placedSide];
                    return (0, c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(s.f, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function R(e) {
                return null !== e;
            }
            j.displayName = O;
            var E = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        a = 0 !== o.arrow?.centerOffset,
                        s = a ? 0 : e.arrowWidth,
                        i = a ? 0 : e.arrowHeight,
                        [c, u] = M(n),
                        d = { start: "0%", center: "50%", end: "100%" }[u],
                        p = (o.arrow?.x ?? 0) + s / 2,
                        l = (o.arrow?.y ?? 0) + i / 2;
                    let f = "",
                        m = "";
                    return "bottom" === c ? ((f = a ? d : `${p}px`), (m = -i + "px")) : "top" === c ? ((f = a ? d : `${p}px`), (m = `${r.floating.height + i}px`)) : "right" === c ? ((f = -i + "px"), (m = a ? d : `${l}px`)) : "left" === c && ((f = `${r.floating.width + i}px`), (m = a ? d : `${l}px`)), { data: { x: f, y: m } };
                },
            });
            function M(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var S = w,
                D = b,
                $ = C,
                I = j;
        },
        408149: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(202784),
                o = n(928316),
                a = n(172714),
                s = n(861644),
                i = n(552322),
                c = r.forwardRef((e, t) => {
                    const { container: n, ...c } = e,
                        [u, d] = r.useState(!1);
                    (0, s.b)(() => d(!0), []);
                    const p = n || (u && globalThis?.document?.body);
                    return p ? o.createPortal((0, i.jsx)(a.WV.div, { ...c, ref: t }), p) : null;
                });
            c.displayName = "Portal";
        },
        379616: (e, t, n) => {
            n.d(t, { z: () => i });
            var r = n(202784),
                o = n(928316),
                a = n(262656),
                s = n(861644);
            var i = (e) => {
                const { present: t, children: n } = e,
                    i = (function (e) {
                        const [t, n] = r.useState(),
                            a = r.useRef({}),
                            i = r.useRef(e),
                            u = r.useRef("none"),
                            d = e ? "mounted" : "unmounted",
                            [p, l] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(d, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = c(a.current);
                                u.current = "mounted" === p ? e : "none";
                            }, [p]),
                            (0, s.b)(() => {
                                const t = a.current,
                                    n = i.current;
                                if (n !== e) {
                                    const r = u.current,
                                        o = c(t);
                                    if (e) l("MOUNT");
                                    else if ("none" === o || "none" === t?.display) l("UNMOUNT");
                                    else {
                                        l(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    i.current = e;
                                }
                            }, [e, l]),
                            (0, s.b)(() => {
                                if (t) {
                                    const e = (e) => {
                                            const n = c(a.current).includes(e.animationName);
                                            e.target === t && n && o.flushSync(() => l("ANIMATION_END"));
                                        },
                                        n = (e) => {
                                            e.target === t && (u.current = c(a.current));
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
                                l("ANIMATION_END");
                            }, [t, l]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(p),
                                ref: r.useCallback((e) => {
                                    e && (a.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    u = "function" == typeof n ? n({ present: i.isPresent }) : r.Children.only(n),
                    d = (0, a.e)(
                        i.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(u),
                    );
                return "function" == typeof n || i.isPresent ? r.cloneElement(u, { ref: d }) : null;
            };
            function c(e) {
                return e?.animationName || "none";
            }
            i.displayName = "Presence";
        },
        172714: (e, t, n) => {
            n.d(t, { WV: () => i, jH: () => c });
            var r = n(202784),
                o = n(928316),
                a = n(549815),
                s = n(552322),
                i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    const n = r.forwardRef((e, n) => {
                        const { asChild: r, ...o } = e,
                            i = r ? a.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-e0ace193.3fcb4a1a.js.map

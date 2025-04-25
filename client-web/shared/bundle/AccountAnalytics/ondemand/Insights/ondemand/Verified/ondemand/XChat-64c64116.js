"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-64c64116"],
    {
        306880: (e, t, n) => {
            n.d(t, { VY: () => q, zt: () => F, fC: () => W, xz: () => K });
            var o = n(202784),
                r = n(717998),
                i = n(262656),
                s = n(552322);
            function a(...e) {
                const t = e[0];
                if (1 === e.length) return t;
                const n = () => {
                    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const r = n.reduce((t, { useScope: n, scopeName: o }) => ({ ...t, ...n(e)[`__scope${o}`] }), {});
                        return o.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                    };
                };
                return (n.scopeName = t.scopeName), n;
            }
            var c = n(301352),
                l = n(23372),
                u = n(355974),
                p = n(408149),
                d = n(379616),
                f = n(172714),
                h = n(549815),
                x = n(387695),
                g = o.forwardRef((e, t) => (0, s.jsx)(f.WV.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }));
            g.displayName = "VisuallyHidden";
            var v = g,
                [y, m] = (function (e, t = []) {
                    let n = [];
                    const r = () => {
                        const t = n.map((e) => o.createContext(e));
                        return function (n) {
                            const r = n?.[e] || t;
                            return o.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
                        };
                    };
                    return (
                        (r.scopeName = e),
                        [
                            function (t, r) {
                                const i = o.createContext(r),
                                    a = n.length;
                                function c(t) {
                                    const { scope: n, children: r, ...c } = t,
                                        l = n?.[e][a] || i,
                                        u = o.useMemo(() => c, Object.values(c));
                                    return (0, s.jsx)(l.Provider, { value: u, children: r });
                                }
                                return (
                                    (n = [...n, r]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, s) {
                                            const c = s?.[e][a] || i,
                                                l = o.useContext(c);
                                            if (l) return l;
                                            if (void 0 !== r) return r;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            a(r, ...t),
                        ]
                    );
                })("Tooltip", [u.D7]),
                w = (0, u.D7)(),
                b = "TooltipProvider",
                C = 700,
                T = "tooltip.open",
                [_, E] = y(b),
                k = (e) => {
                    const { __scopeTooltip: t, delayDuration: n = C, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e,
                        [c, l] = o.useState(!0),
                        u = o.useRef(!1),
                        p = o.useRef(0);
                    return (
                        o.useEffect(() => {
                            const e = p.current;
                            return () => window.clearTimeout(e);
                        }, []),
                        (0, s.jsx)(_, {
                            scope: t,
                            isOpenDelayed: c,
                            delayDuration: n,
                            onOpen: o.useCallback(() => {
                                window.clearTimeout(p.current), l(!1);
                            }, []),
                            onClose: o.useCallback(() => {
                                window.clearTimeout(p.current), (p.current = window.setTimeout(() => l(!0), r));
                            }, [r]),
                            isPointerInTransitRef: u,
                            onPointerInTransitChange: o.useCallback((e) => {
                                u.current = e;
                            }, []),
                            disableHoverableContent: i,
                            children: a,
                        })
                    );
                };
            k.displayName = b;
            var M = "Tooltip",
                [j, D] = y(M),
                P = (e) => {
                    const { __scopeTooltip: t, children: n, open: r, defaultOpen: i = !1, onOpenChange: a, disableHoverableContent: c, delayDuration: p } = e,
                        d = E(M, e.__scopeTooltip),
                        f = w(t),
                        [h, g] = o.useState(null),
                        v = (0, l.M)(),
                        y = o.useRef(0),
                        m = c ?? d.disableHoverableContent,
                        b = p ?? d.delayDuration,
                        C = o.useRef(!1),
                        [_ = !1, k] = (0, x.T)({
                            prop: r,
                            defaultProp: i,
                            onChange: (e) => {
                                e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(T))) : d.onClose(), a?.(e);
                            },
                        }),
                        D = o.useMemo(() => (_ ? (C.current ? "delayed-open" : "instant-open") : "closed"), [_]),
                        P = o.useCallback(() => {
                            window.clearTimeout(y.current), (C.current = !1), k(!0);
                        }, [k]),
                        R = o.useCallback(() => {
                            window.clearTimeout(y.current), k(!1);
                        }, [k]),
                        L = o.useCallback(() => {
                            window.clearTimeout(y.current),
                                (y.current = window.setTimeout(() => {
                                    (C.current = !0), k(!0);
                                }, b));
                        }, [b, k]);
                    return (
                        o.useEffect(() => () => window.clearTimeout(y.current), []),
                        (0, s.jsx)(u.fC, {
                            ...f,
                            children: (0, s.jsx)(j, {
                                scope: t,
                                contentId: v,
                                open: _,
                                stateAttribute: D,
                                trigger: h,
                                onTriggerChange: g,
                                onTriggerEnter: o.useCallback(() => {
                                    d.isOpenDelayed ? L() : P();
                                }, [d.isOpenDelayed, L, P]),
                                onTriggerLeave: o.useCallback(() => {
                                    m ? R() : window.clearTimeout(y.current);
                                }, [R, m]),
                                onOpen: P,
                                onClose: R,
                                disableHoverableContent: m,
                                children: n,
                            }),
                        })
                    );
                };
            P.displayName = M;
            var R = "TooltipTrigger",
                L = o.forwardRef((e, t) => {
                    const { __scopeTooltip: n, ...a } = e,
                        c = D(R, n),
                        l = E(R, n),
                        p = w(n),
                        d = o.useRef(null),
                        h = (0, i.e)(t, d, c.onTriggerChange),
                        x = o.useRef(!1),
                        g = o.useRef(!1),
                        v = o.useCallback(() => (x.current = !1), []);
                    return (
                        o.useEffect(() => () => document.removeEventListener("pointerup", v), [v]),
                        (0, s.jsx)(u.ee, {
                            asChild: !0,
                            ...p,
                            children: (0, s.jsx)(f.WV.button, {
                                "aria-describedby": c.open ? c.contentId : void 0,
                                "data-state": c.stateAttribute,
                                ...a,
                                ref: h,
                                onPointerMove: (0, r.M)(e.onPointerMove, (e) => {
                                    "touch" !== e.pointerType && (g.current || l.isPointerInTransitRef.current || (c.onTriggerEnter(), (g.current = !0)));
                                }),
                                onPointerLeave: (0, r.M)(e.onPointerLeave, () => {
                                    c.onTriggerLeave(), (g.current = !1);
                                }),
                                onPointerDown: (0, r.M)(e.onPointerDown, () => {
                                    (x.current = !0), document.addEventListener("pointerup", v, { once: !0 });
                                }),
                                onFocus: (0, r.M)(e.onFocus, () => {
                                    x.current || c.onOpen();
                                }),
                                onBlur: (0, r.M)(e.onBlur, c.onClose),
                                onClick: (0, r.M)(e.onClick, c.onClose),
                            }),
                        })
                    );
                });
            L.displayName = R;
            var N = "TooltipPortal",
                [O, I] = y(N, { forceMount: void 0 }),
                A = (e) => {
                    const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e,
                        i = D(N, t);
                    return (0, s.jsx)(O, { scope: t, forceMount: n, children: (0, s.jsx)(d.z, { present: n || i.open, children: (0, s.jsx)(p.h, { asChild: !0, container: r, children: o }) }) });
                };
            A.displayName = N;
            var H = "TooltipContent",
                S = o.forwardRef((e, t) => {
                    const n = I(H, e.__scopeTooltip),
                        { forceMount: o = n.forceMount, side: r = "top", ...i } = e,
                        a = D(H, e.__scopeTooltip);
                    return (0, s.jsx)(d.z, { present: o || a.open, children: a.disableHoverableContent ? (0, s.jsx)(z, { side: r, ...i, ref: t }) : (0, s.jsx)(V, { side: r, ...i, ref: t }) });
                }),
                V = o.forwardRef((e, t) => {
                    const n = D(H, e.__scopeTooltip),
                        r = E(H, e.__scopeTooltip),
                        a = o.useRef(null),
                        c = (0, i.e)(t, a),
                        [l, u] = o.useState(null),
                        { trigger: p, onClose: d } = n,
                        f = a.current,
                        { onPointerInTransitChange: h } = r,
                        x = o.useCallback(() => {
                            u(null), h(!1);
                        }, [h]),
                        g = o.useCallback(
                            (e, t) => {
                                const n = e.currentTarget,
                                    o = { x: e.clientX, y: e.clientY },
                                    r = (function (e, t, n = 5) {
                                        const o = [];
                                        switch (t) {
                                            case "top":
                                                o.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                                                break;
                                            case "bottom":
                                                o.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                                                break;
                                            case "left":
                                                o.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                                                break;
                                            case "right":
                                                o.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                                        }
                                        return o;
                                    })(
                                        o,
                                        (function (e, t) {
                                            const n = Math.abs(t.top - e.y),
                                                o = Math.abs(t.bottom - e.y),
                                                r = Math.abs(t.right - e.x),
                                                i = Math.abs(t.left - e.x);
                                            switch (Math.min(n, o, r, i)) {
                                                case i:
                                                    return "left";
                                                case r:
                                                    return "right";
                                                case n:
                                                    return "top";
                                                case o:
                                                    return "bottom";
                                                default:
                                                    throw new Error("unreachable");
                                            }
                                        })(o, n.getBoundingClientRect()),
                                    ),
                                    i = (function (e) {
                                        const t = e.slice();
                                        return (
                                            t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                            (function (e) {
                                                if (e.length <= 1) return e.slice();
                                                const t = [];
                                                for (let n = 0; n < e.length; n++) {
                                                    const o = e[n];
                                                    for (; t.length >= 2; ) {
                                                        const e = t[t.length - 1],
                                                            n = t[t.length - 2];
                                                        if (!((e.x - n.x) * (o.y - n.y) >= (e.y - n.y) * (o.x - n.x))) break;
                                                        t.pop();
                                                    }
                                                    t.push(o);
                                                }
                                                t.pop();
                                                const n = [];
                                                for (let t = e.length - 1; t >= 0; t--) {
                                                    const o = e[t];
                                                    for (; n.length >= 2; ) {
                                                        const e = n[n.length - 1],
                                                            t = n[n.length - 2];
                                                        if (!((e.x - t.x) * (o.y - t.y) >= (e.y - t.y) * (o.x - t.x))) break;
                                                        n.pop();
                                                    }
                                                    n.push(o);
                                                }
                                                return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
                                            })(t)
                                        );
                                    })([
                                        ...r,
                                        ...(function (e) {
                                            const { top: t, right: n, bottom: o, left: r } = e;
                                            return [
                                                { x: r, y: t },
                                                { x: n, y: t },
                                                { x: n, y: o },
                                                { x: r, y: o },
                                            ];
                                        })(t.getBoundingClientRect()),
                                    ]);
                                u(i), h(!0);
                            },
                            [h],
                        );
                    return (
                        o.useEffect(() => () => x(), [x]),
                        o.useEffect(() => {
                            if (p && f) {
                                const e = (e) => g(e, f),
                                    t = (e) => g(e, p);
                                return (
                                    p.addEventListener("pointerleave", e),
                                    f.addEventListener("pointerleave", t),
                                    () => {
                                        p.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t);
                                    }
                                );
                            }
                        }, [p, f, g, x]),
                        o.useEffect(() => {
                            if (l) {
                                const e = (e) => {
                                    const t = e.target,
                                        n = { x: e.clientX, y: e.clientY },
                                        o = p?.contains(t) || f?.contains(t),
                                        r = !(function (e, t) {
                                            const { x: n, y: o } = e;
                                            let r = !1;
                                            for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                                const s = t[e].x,
                                                    a = t[e].y,
                                                    c = t[i].x,
                                                    l = t[i].y;
                                                a > o != l > o && n < ((c - s) * (o - a)) / (l - a) + s && (r = !r);
                                            }
                                            return r;
                                        })(n, l);
                                    o ? x() : r && (x(), d());
                                };
                                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
                            }
                        }, [p, f, l, d, x]),
                        (0, s.jsx)(z, { ...e, ref: c })
                    );
                }),
                [B, $] = y(M, { isInside: !1 }),
                z = o.forwardRef((e, t) => {
                    const { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: l, ...p } = e,
                        d = D(H, n),
                        f = w(n),
                        { onClose: x } = d;
                    return (
                        o.useEffect(() => (document.addEventListener(T, x), () => document.removeEventListener(T, x)), [x]),
                        o.useEffect(() => {
                            if (d.trigger) {
                                const e = (e) => {
                                    const t = e.target;
                                    t?.contains(d.trigger) && x();
                                };
                                return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
                            }
                        }, [d.trigger, x]),
                        (0, s.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: !1, onEscapeKeyDown: a, onPointerDownOutside: l, onFocusOutside: (e) => e.preventDefault(), onDismiss: x, children: (0, s.jsxs)(u.VY, { "data-state": d.stateAttribute, ...f, ...p, ref: t, style: { ...p.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [(0, s.jsx)(h.A4, { children: r }), (0, s.jsx)(B, { scope: n, isInside: !0, children: (0, s.jsx)(v, { id: d.contentId, role: "tooltip", children: i || r }) })] }) })
                    );
                });
            S.displayName = H;
            var X = "TooltipArrow",
                Y = o.forwardRef((e, t) => {
                    const { __scopeTooltip: n, ...o } = e,
                        r = w(n);
                    return $(X, n).isInside ? null : (0, s.jsx)(u.Eh, { ...r, ...o, ref: t });
                });
            Y.displayName = X;
            var F = k,
                W = P,
                K = L,
                q = S;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-64c64116.84b363ca.js.map

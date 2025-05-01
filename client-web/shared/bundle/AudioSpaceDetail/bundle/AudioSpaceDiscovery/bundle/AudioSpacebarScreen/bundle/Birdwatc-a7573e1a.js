"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a", "bundle.AccountAnalytics-e0ace193"],
    {
        717998: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        784389: (e, t, n) => {
            n.d(t, { f: () => a });
            var r = n(202784),
                o = n(172714),
                s = n(552322),
                i = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: i = 5, ...a } = e;
                    return (0, s.jsx)(o.WV.svg, { ...a, ref: t, width: r, height: i, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, s.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            i.displayName = "Arrow";
            var a = i;
        },
        262656: (e, t, n) => {
            n.d(t, { F: () => o, e: () => s });
            var r = n(202784);
            function o(...e) {
                return (t) =>
                    e.forEach((e) =>
                        (function (e, t) {
                            "function" == typeof e ? e(t) : null != e && (e.current = t);
                        })(e, t),
                    );
            }
            function s(...e) {
                return r.useCallback(o(...e), e);
            }
        },
        301352: (e, t, n) => {
            n.d(t, { XB: () => m });
            var r,
                o = n(202784),
                s = n(717998),
                i = n(172714),
                a = n(262656),
                c = n(627757),
                u = n(986796),
                d = n(552322),
                l = "dismissableLayer.update",
                f = "dismissableLayer.pointerDownOutside",
                p = "dismissableLayer.focusOutside",
                v = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                m = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: m, onPointerDownOutside: h, onFocusOutside: b, onInteractOutside: w, onDismiss: E, ...x } = e,
                        P = o.useContext(v),
                        [C, O] = o.useState(null),
                        N = C?.ownerDocument ?? globalThis?.document,
                        [, A] = o.useState({}),
                        R = (0, a.e)(t, (e) => O(e)),
                        _ = Array.from(P.layers),
                        [S] = [...P.layersWithOutsidePointerEventsDisabled].slice(-1),
                        D = _.indexOf(S),
                        j = C ? _.indexOf(C) : -1,
                        M = P.layersWithOutsidePointerEventsDisabled.size > 0,
                        W = j >= D,
                        T = (function (e, t = globalThis?.document) {
                            const n = (0, c.W)(e),
                                r = o.useRef(!1),
                                s = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !r.current) {
                                                let r = function () {
                                                    y(f, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", s.current), (s.current = r), t.addEventListener("click", s.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", s.current);
                                            r.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (r.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...P.branches].some((e) => e.contains(t));
                            W && !n && (h?.(e), w?.(e), e.defaultPrevented || E?.());
                        }, N),
                        F = (function (e, t = globalThis?.document) {
                            const n = (0, c.W)(e),
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
                            [...P.branches].some((e) => e.contains(t)) || (b?.(e), w?.(e), e.defaultPrevented || E?.());
                        }, N);
                    return (
                        (0, u.e)((e) => {
                            j === P.layers.size - 1 && (m?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()));
                        }, N),
                        o.useEffect(() => {
                            if (C)
                                return (
                                    n && (0 === P.layersWithOutsidePointerEventsDisabled.size && ((r = N.body.style.pointerEvents), (N.body.style.pointerEvents = "none")), P.layersWithOutsidePointerEventsDisabled.add(C)),
                                    P.layers.add(C),
                                    g(),
                                    () => {
                                        n && 1 === P.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r);
                                    }
                                );
                        }, [C, N, n, P]),
                        o.useEffect(
                            () => () => {
                                C && (P.layers.delete(C), P.layersWithOutsidePointerEventsDisabled.delete(C), g());
                            },
                            [C, P],
                        ),
                        o.useEffect(() => {
                            const e = () => A({});
                            return document.addEventListener(l, e), () => document.removeEventListener(l, e);
                        }, []),
                        (0, d.jsx)(i.WV.div, { ...x, ref: R, style: { pointerEvents: M ? (W ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, F.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, F.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, T.onPointerDownCapture) })
                    );
                });
            m.displayName = "DismissableLayer";
            var h = o.forwardRef((e, t) => {
                const n = o.useContext(v),
                    r = o.useRef(null),
                    s = (0, a.e)(t, r);
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
                    (0, d.jsx)(i.WV.div, { ...e, ref: s })
                );
            });
            function g() {
                const e = new CustomEvent(l);
                document.dispatchEvent(e);
            }
            function y(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, i.jH)(o, s) : o.dispatchEvent(s);
            }
            h.displayName = "DismissableLayerBranch";
        },
        22426: (e, t, n) => {
            n.d(t, { M: () => l });
            var r = n(202784),
                o = n(262656),
                s = n(172714),
                i = n(627757),
                a = n(552322),
                c = "focusScope.autoFocusOnMount",
                u = "focusScope.autoFocusOnUnmount",
                d = { bubbles: !1, cancelable: !0 },
                l = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: l = !1, onMountAutoFocus: v, onUnmountAutoFocus: g, ...y } = e,
                        [b, w] = r.useState(null),
                        E = (0, i.W)(v),
                        x = (0, i.W)(g),
                        P = r.useRef(null),
                        C = (0, o.e)(t, (e) => w(e)),
                        O = r.useRef({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    r.useEffect(() => {
                        if (l) {
                            let e = function (e) {
                                    if (O.paused || !b) return;
                                    const t = e.target;
                                    b.contains(t) ? (P.current = t) : m(P.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (O.paused || !b) return;
                                    const t = e.relatedTarget;
                                    null !== t && (b.contains(t) || m(P.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && m(b);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                b && r.observe(b, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [l, b, O.paused]),
                        r.useEffect(() => {
                            if (b) {
                                h.add(O);
                                const t = document.activeElement;
                                if (!b.contains(t)) {
                                    const n = new CustomEvent(c, d);
                                    b.addEventListener(c, E),
                                        b.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(b)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && m(b));
                                }
                                return () => {
                                    b.removeEventListener(c, E),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, d);
                                            b.addEventListener(u, x), b.dispatchEvent(e), e.defaultPrevented || m(t ?? document.body, { select: !0 }), b.removeEventListener(u, x), h.remove(O);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [b, E, x, O]);
                    const N = r.useCallback(
                        (e) => {
                            if (!n && !l) return;
                            if (O.paused) return;
                            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                r = document.activeElement;
                            if (t && r) {
                                const t = e.currentTarget,
                                    [o, s] = (function (e) {
                                        const t = f(e),
                                            n = p(t, e),
                                            r = p(t.reverse(), e);
                                        return [n, r];
                                    })(t);
                                o && s ? (e.shiftKey || r !== s ? e.shiftKey && r === o && (e.preventDefault(), n && m(s, { select: !0 })) : (e.preventDefault(), n && m(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, l, O.paused],
                    );
                    return (0, a.jsx)(s.WV.div, { tabIndex: -1, ...y, ref: C, onKeyDown: N });
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
            function m(e, { select: t = !1 } = {}) {
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
            l.displayName = "FocusScope";
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
        23372: (e, t, n) => {
            var r;
            n.d(t, { M: () => c });
            var o = n(202784),
                s = n(861644),
                i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => {}),
                a = 0;
            function c(e) {
                const [t, n] = o.useState(i());
                return (
                    (0, s.b)(() => {
                        e || n((e) => e ?? String(a++));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        927382: (e, t, n) => {
            n.d(t, { Eh: () => q, VY: () => Z, h_: () => X, fC: () => K, xz: () => Y });
            var r = n(202784),
                o = n(717998),
                s = n(262656),
                i = n(552322);
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
            var f = n(22426),
                p = n(23372),
                v = n(355974),
                m = n(408149),
                h = n(379616),
                g = n(172714),
                y = n(549815),
                b = n(387695),
                w = n(549732),
                E = n(234413),
                x = "Popover",
                [P, C] = (function (e, t = []) {
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
                                const s = r.createContext(o),
                                    a = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        u = n?.[e][a] || s,
                                        d = r.useMemo(() => c, Object.values(c));
                                    return (0, i.jsx)(u.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, i) {
                                            const c = i?.[e][a] || s,
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
                })(x, [v.D7]),
                O = (0, v.D7)(),
                [N, A] = P(x),
                R = (e) => {
                    const { __scopePopover: t, children: n, open: o, defaultOpen: s, onOpenChange: a, modal: c = !1 } = e,
                        u = O(t),
                        d = r.useRef(null),
                        [l, f] = r.useState(!1),
                        [m = !1, h] = (0, b.T)({ prop: o, defaultProp: s, onChange: a });
                    return (0, i.jsx)(v.fC, { ...u, children: (0, i.jsx)(N, { scope: t, contentId: (0, p.M)(), triggerRef: d, open: m, onOpenChange: h, onOpenToggle: r.useCallback(() => h((e) => !e), [h]), hasCustomAnchor: l, onCustomAnchorAdd: r.useCallback(() => f(!0), []), onCustomAnchorRemove: r.useCallback(() => f(!1), []), modal: c, children: n }) });
                };
            R.displayName = x;
            var _ = "PopoverAnchor",
                S = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...o } = e,
                        s = A(_, n),
                        a = O(n),
                        { onCustomAnchorAdd: c, onCustomAnchorRemove: u } = s;
                    return r.useEffect(() => (c(), () => u()), [c, u]), (0, i.jsx)(v.ee, { ...a, ...o, ref: t });
                });
            S.displayName = _;
            var D = "PopoverTrigger",
                j = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        a = A(D, n),
                        c = O(n),
                        u = (0, s.e)(t, a.triggerRef),
                        d = (0, i.jsx)(g.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": H(a.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, a.onOpenToggle) });
                    return a.hasCustomAnchor ? d : (0, i.jsx)(v.ee, { asChild: !0, ...c, children: d });
                });
            j.displayName = D;
            var M = "PopoverPortal",
                [W, T] = P(M, { forceMount: void 0 }),
                F = (e) => {
                    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        s = A(M, t);
                    return (0, i.jsx)(W, { scope: t, forceMount: n, children: (0, i.jsx)(h.z, { present: n || s.open, children: (0, i.jsx)(m.h, { asChild: !0, container: o, children: r }) }) });
                };
            F.displayName = M;
            var L = "PopoverContent",
                I = r.forwardRef((e, t) => {
                    const n = T(L, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        s = A(L, e.__scopePopover);
                    return (0, i.jsx)(h.z, { present: r || s.open, children: s.modal ? (0, i.jsx)(k, { ...o, ref: t }) : (0, i.jsx)($, { ...o, ref: t }) });
                });
            I.displayName = L;
            var k = r.forwardRef((e, t) => {
                    const n = A(L, e.__scopePopover),
                        a = r.useRef(null),
                        c = (0, s.e)(t, a),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            const e = a.current;
                            if (e) return (0, w.Ry)(e);
                        }, []),
                        (0, i.jsx)(E.Z, {
                            as: y.g7,
                            allowPinchZoom: !0,
                            children: (0, i.jsx)(V, {
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
                $ = r.forwardRef((e, t) => {
                    const n = A(L, e.__scopePopover),
                        o = r.useRef(!1),
                        s = r.useRef(!1);
                    return (0, i.jsx)(V, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), (o.current = !1), (s.current = !1);
                        },
                        onInteractOutside: (t) => {
                            e.onInteractOutside?.(t), t.defaultPrevented || ((o.current = !0), "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
                            const r = t.target,
                                i = n.triggerRef.current?.contains(r);
                            i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault();
                        },
                    });
                }),
                V = r.forwardRef((e, t) => {
                    const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: a, onEscapeKeyDown: u, onPointerDownOutside: l, onFocusOutside: p, onInteractOutside: m, ...h } = e,
                        g = A(L, n),
                        y = O(n);
                    return d(), (0, i.jsx)(f.M, { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: s, children: (0, i.jsx)(c.XB, { asChild: !0, disableOutsidePointerEvents: a, onInteractOutside: m, onEscapeKeyDown: u, onPointerDownOutside: l, onFocusOutside: p, onDismiss: () => g.onOpenChange(!1), children: (0, i.jsx)(v.VY, { "data-state": H(g.open), role: "dialog", id: g.contentId, ...y, ...h, ref: t, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
                }),
                z = "PopoverClose",
                B = r.forwardRef((e, t) => {
                    const { __scopePopover: n, ...r } = e,
                        s = A(z, n);
                    return (0, i.jsx)(g.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => s.onOpenChange(!1)) });
                });
            B.displayName = z;
            var U = r.forwardRef((e, t) => {
                const { __scopePopover: n, ...r } = e,
                    o = O(n);
                return (0, i.jsx)(v.Eh, { ...o, ...r, ref: t });
            });
            function H(e) {
                return e ? "open" : "closed";
            }
            U.displayName = "PopoverArrow";
            var K = R,
                Y = j,
                X = F,
                Z = I,
                q = U;
        },
        355974: (e, t, n) => {
            n.d(t, { ee: () => M, Eh: () => T, VY: () => W, fC: () => j, D7: () => h });
            var r = n(202784),
                o = n(992416),
                s = n(94258),
                i = n(784389),
                a = n(262656),
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
                f = n(861644),
                p = n(335019),
                v = "Popper",
                [m, h] = (function (e, t = []) {
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
                                const s = r.createContext(o),
                                    i = n.length;
                                function a(t) {
                                    const { scope: n, children: o, ...a } = t,
                                        u = n?.[e][i] || s,
                                        d = r.useMemo(() => a, Object.values(a));
                                    return (0, c.jsx)(u.Provider, { value: d, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (a.displayName = t + "Provider"),
                                    [
                                        a,
                                        function (n, a) {
                                            const c = a?.[e][i] || s,
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
                })(v),
                [g, y] = m(v),
                b = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, s] = r.useState(null);
                    return (0, c.jsx)(g, { scope: t, anchor: o, onAnchorChange: s, children: n });
                };
            b.displayName = v;
            var w = "PopperAnchor",
                E = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...s } = e,
                        i = y(w, n),
                        u = r.useRef(null),
                        l = (0, a.e)(t, u);
                    return (
                        r.useEffect(() => {
                            i.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, c.jsx)(d.WV.div, { ...s, ref: l })
                    );
                });
            E.displayName = w;
            var x = "PopperContent",
                [P, C] = m(x),
                O = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: i = "bottom", sideOffset: u = 0, align: v = "center", alignOffset: m = 0, arrowPadding: h = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: w = 0, sticky: E = "partial", hideWhenDetached: C = !1, updatePositionStrategy: O = "optimized", onPlaced: N, ...A } = e,
                        R = y(x, n),
                        [j, M] = r.useState(null),
                        W = (0, a.e)(t, (e) => M(e)),
                        [T, F] = r.useState(null),
                        L = (0, p.t)(T),
                        I = L?.width ?? 0,
                        k = L?.height ?? 0,
                        $ = i + ("center" !== v ? "-" + v : ""),
                        V = "number" == typeof w ? w : { top: 0, right: 0, bottom: 0, left: 0, ...w },
                        z = Array.isArray(b) ? b : [b],
                        B = z.length > 0,
                        U = { padding: V, boundary: z.filter(_), altBoundary: B },
                        {
                            refs: H,
                            floatingStyles: K,
                            placement: Y,
                            isPositioned: X,
                            middlewareData: Z,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: $,
                            whileElementsMounted: (...e) => (0, s.Me)(...e, { animationFrame: "always" === O }),
                            elements: { reference: R.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + k, alignmentAxis: m }),
                                g && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === E ? (0, o.dr)() : void 0, ...U }),
                                g && (0, o.RR)({ ...U }),
                                (0, o.dp)({
                                    ...U,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: s } = t.reference,
                                            i = e.floating.style;
                                        i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${r}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${s}px`);
                                    },
                                }),
                                T && (0, o.x7)({ element: T, padding: h }),
                                S({ arrowWidth: I, arrowHeight: k }),
                                C && (0, o.Cp)({ strategy: "referenceHidden", ...U }),
                            ],
                        }),
                        [q, G] = D(Y),
                        J = (0, l.W)(N);
                    (0, f.b)(() => {
                        X && J?.();
                    }, [X, J]);
                    const Q = Z.arrow?.x,
                        ee = Z.arrow?.y,
                        te = 0 !== Z.arrow?.centerOffset,
                        [ne, re] = r.useState();
                    return (
                        (0, f.b)(() => {
                            j && re(window.getComputedStyle(j).zIndex);
                        }, [j]),
                        (0, c.jsx)("div", { ref: H.setFloating, "data-radix-popper-content-wrapper": "", style: { ...K, transform: X ? K.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ne, "--radix-popper-transform-origin": [Z.transformOrigin?.x, Z.transformOrigin?.y].join(" "), ...(Z.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, c.jsx)(P, { scope: n, placedSide: q, onArrowChange: F, arrowX: Q, arrowY: ee, shouldHideArrow: te, children: (0, c.jsx)(d.WV.div, { "data-side": q, "data-align": G, ...A, ref: W, style: { ...A.style, animation: X ? void 0 : "none" } }) }) })
                    );
                });
            O.displayName = x;
            var N = "PopperArrow",
                A = { top: "bottom", right: "left", bottom: "top", left: "right" },
                R = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = C(N, n),
                        s = A[o.placedSide];
                    return (0, c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [s]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(i.f, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function _(e) {
                return null !== e;
            }
            R.displayName = N;
            var S = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        s = 0 !== o.arrow?.centerOffset,
                        i = s ? 0 : e.arrowWidth,
                        a = s ? 0 : e.arrowHeight,
                        [c, u] = D(n),
                        d = { start: "0%", center: "50%", end: "100%" }[u],
                        l = (o.arrow?.x ?? 0) + i / 2,
                        f = (o.arrow?.y ?? 0) + a / 2;
                    let p = "",
                        v = "";
                    return "bottom" === c ? ((p = s ? d : `${l}px`), (v = -a + "px")) : "top" === c ? ((p = s ? d : `${l}px`), (v = `${r.floating.height + a}px`)) : "right" === c ? ((p = -a + "px"), (v = s ? d : `${f}px`)) : "left" === c && ((p = `${r.floating.width + a}px`), (v = s ? d : `${f}px`)), { data: { x: p, y: v } };
                },
            });
            function D(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var j = b,
                M = E,
                W = O,
                T = R;
        },
        408149: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(202784),
                o = n(928316),
                s = n(172714),
                i = n(861644),
                a = n(552322),
                c = r.forwardRef((e, t) => {
                    const { container: n, ...c } = e,
                        [u, d] = r.useState(!1);
                    (0, i.b)(() => d(!0), []);
                    const l = n || (u && globalThis?.document?.body);
                    return l ? o.createPortal((0, a.jsx)(s.WV.div, { ...c, ref: t }), l) : null;
                });
            c.displayName = "Portal";
        },
        379616: (e, t, n) => {
            n.d(t, { z: () => a });
            var r = n(202784),
                o = n(928316),
                s = n(262656),
                i = n(861644);
            var a = (e) => {
                const { present: t, children: n } = e,
                    a = (function (e) {
                        const [t, n] = r.useState(),
                            s = r.useRef({}),
                            a = r.useRef(e),
                            u = r.useRef("none"),
                            d = e ? "mounted" : "unmounted",
                            [l, f] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(d, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = c(s.current);
                                u.current = "mounted" === l ? e : "none";
                            }, [l]),
                            (0, i.b)(() => {
                                const t = s.current,
                                    n = a.current;
                                if (n !== e) {
                                    const r = u.current,
                                        o = c(t);
                                    if (e) f("MOUNT");
                                    else if ("none" === o || "none" === t?.display) f("UNMOUNT");
                                    else {
                                        f(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    a.current = e;
                                }
                            }, [e, f]),
                            (0, i.b)(() => {
                                if (t) {
                                    const e = (e) => {
                                            const n = c(s.current).includes(e.animationName);
                                            e.target === t && n && o.flushSync(() => f("ANIMATION_END"));
                                        },
                                        n = (e) => {
                                            e.target === t && (u.current = c(s.current));
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
                                f("ANIMATION_END");
                            }, [t, f]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(l),
                                ref: r.useCallback((e) => {
                                    e && (s.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    u = "function" == typeof n ? n({ present: a.isPresent }) : r.Children.only(n),
                    d = (0, s.e)(
                        a.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(u),
                    );
                return "function" == typeof n || a.isPresent ? r.cloneElement(u, { ref: d }) : null;
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
                s = n(549815),
                i = n(552322),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    const n = r.forwardRef((e, n) => {
                        const { asChild: r, ...o } = e,
                            a = r ? s.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        549815: (e, t, n) => {
            n.d(t, { A4: () => c, g7: () => i });
            var r = n(202784),
                o = n(262656),
                s = n(552322),
                i = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        i = r.Children.toArray(n),
                        c = i.find(u);
                    if (c) {
                        const e = c.props.children,
                            n = i.map((t) => (t === c ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, s.jsx)(a, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, s.jsx)(a, { ...o, ref: t, children: n });
                });
            i.displayName = "Slot";
            var a = r.forwardRef((e, t) => {
                const { children: n, ...s } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                            n = t && "isReactWarning" in t && t.isReactWarning;
                        if (n) return e.ref;
                        if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                        return e.props.ref || e.ref;
                    })(n);
                    return r.cloneElement(n, { ...d(s, n.props), ref: t ? (0, o.F)(t, e) : e });
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            a.displayName = "SlotClone";
            var c = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
            function u(e) {
                return r.isValidElement(e) && e.type === c;
            }
            function d(e, t) {
                const n = { ...t };
                for (const r in t) {
                    const o = e[r],
                        s = t[r];
                    /^on[A-Z]/.test(r)
                        ? o && s
                            ? (n[r] = (...e) => {
                                  s(...e), o(...e);
                              })
                            : o && (n[r] = o)
                        : "style" === r
                          ? (n[r] = { ...o, ...s })
                          : "className" === r && (n[r] = [o, s].filter(Boolean).join(" "));
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
            n.d(t, { T: () => s });
            var r = n(202784),
                o = n(627757);
            function s({ prop: e, defaultProp: t, onChange: n = () => {} }) {
                const [s, i] = (function ({ defaultProp: e, onChange: t }) {
                        const n = r.useState(e),
                            [s] = n,
                            i = r.useRef(s),
                            a = (0, o.W)(t);
                        return (
                            r.useEffect(() => {
                                i.current !== s && (a(s), (i.current = s));
                            }, [s, i, a]),
                            n
                        );
                    })({ defaultProp: t, onChange: n }),
                    a = void 0 !== e,
                    c = a ? e : s,
                    u = (0, o.W)(n);
                return [
                    c,
                    r.useCallback(
                        (t) => {
                            if (a) {
                                const n = "function" == typeof t ? t(e) : t;
                                n !== e && u(n);
                            } else i(t);
                        },
                        [a, e, i, u],
                    ),
                ];
            }
        },
        986796: (e, t, n) => {
            n.d(t, { e: () => s });
            var r = n(202784),
                o = n(627757);
            function s(e, t = globalThis?.document) {
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
            n.d(t, { t: () => s });
            var r = n(202784),
                o = n(861644);
            function s(e) {
                const [t, n] = r.useState(void 0);
                return (
                    (0, o.b)(() => {
                        if (e) {
                            n({ width: e.offsetWidth, height: e.offsetHeight });
                            const t = new ResizeObserver((t) => {
                                if (!Array.isArray(t)) return;
                                if (!t.length) return;
                                const r = t[0];
                                let o, s;
                                if ("borderBoxSize" in r) {
                                    const e = r.borderBoxSize,
                                        t = Array.isArray(e) ? e[0] : e;
                                    (o = t.inlineSize), (s = t.blockSize);
                                } else (o = e.offsetWidth), (s = e.offsetHeight);
                                n({ width: o, height: s });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a.e7b3f52a.js.map

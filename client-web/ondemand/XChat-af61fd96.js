"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-af61fd96"],
    {
        75572: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        449272: (e, t, n) => {
            n.d(t, { B: () => c });
            var r = n(202784),
                o = n(943203),
                i = n(83070),
                s = n(174990),
                a = n(552322);
            function c(e) {
                const t = e + "CollectionProvider",
                    [n, c] = (0, o.b)(t),
                    [u, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
                    d = (e) => {
                        const { scope: t, children: n } = e,
                            o = r.useRef(null),
                            i = r.useRef(new Map()).current;
                        return (0, a.jsx)(u, { scope: t, itemMap: i, collectionRef: o, children: n });
                    };
                d.displayName = t;
                const f = e + "CollectionSlot",
                    p = (0, s.Z8)(f),
                    m = r.forwardRef((e, t) => {
                        const { scope: n, children: r } = e,
                            o = l(f, n),
                            s = (0, i.e)(t, o.collectionRef);
                        return (0, a.jsx)(p, { ref: s, children: r });
                    });
                m.displayName = f;
                const v = e + "CollectionItemSlot",
                    h = "data-radix-collection-item",
                    y = (0, s.Z8)(v),
                    b = r.forwardRef((e, t) => {
                        const { scope: n, children: o, ...s } = e,
                            c = r.useRef(null),
                            u = (0, i.e)(t, c),
                            d = l(v, n);
                        return (
                            r.useEffect(
                                () => (
                                    d.itemMap.set(c, { ref: c, ...s }),
                                    () => {
                                        d.itemMap.delete(c);
                                    }
                                ),
                            ),
                            (0, a.jsx)(y, { [h]: "", ref: u, children: o })
                        );
                    });
                return (
                    (b.displayName = v),
                    [
                        { Provider: d, Slot: m, ItemSlot: b },
                        function (t) {
                            const n = l(e + "CollectionConsumer", t);
                            return r.useCallback(() => {
                                const e = n.collectionRef.current;
                                if (!e) return [];
                                const t = Array.from(e.querySelectorAll(`[${h}]`));
                                return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            }, [n.collectionRef, n.itemMap]);
                        },
                        c,
                    ]
                );
            }
        },
        83070: (e, t, n) => {
            n.d(t, { F: () => i, e: () => s });
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
            function s(...e) {
                return r.useCallback(i(...e), e);
            }
        },
        943203: (e, t, n) => {
            n.d(t, { b: () => i });
            var r = n(202784),
                o = n(552322);
            function i(e, t = []) {
                let n = [];
                const i = () => {
                    const t = n.map((e) => r.createContext(e));
                    return function (n) {
                        const o = n?.[e] || t;
                        return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                    };
                };
                return (
                    (i.scopeName = e),
                    [
                        function (t, i) {
                            const s = r.createContext(i),
                                a = n.length;
                            n = [...n, i];
                            const c = (t) => {
                                const { scope: n, children: i, ...c } = t,
                                    u = n?.[e]?.[a] || s,
                                    l = r.useMemo(() => c, Object.values(c));
                                return (0, o.jsx)(u.Provider, { value: l, children: i });
                            };
                            return (
                                (c.displayName = t + "Provider"),
                                [
                                    c,
                                    function (n, o) {
                                        const c = o?.[e]?.[a] || s,
                                            u = r.useContext(c);
                                        if (u) return u;
                                        if (void 0 !== i) return i;
                                        throw new Error(`\`${n}\` must be used within \`${t}\``);
                                    },
                                ]
                            );
                        },
                        s(i, ...t),
                    ]
                );
            }
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
        },
        142751: (e, t, n) => {
            n.d(t, { gm: () => i });
            var r = n(202784),
                o = (n(552322), r.createContext(void 0));
            function i(e) {
                const t = r.useContext(o);
                return e || t || "ltr";
            }
        },
        86235: (e, t, n) => {
            n.d(t, { XB: () => m });
            var r = n(202784),
                o = n(75572),
                i = n(547761),
                s = n(83070),
                a = n(625723);
            var c,
                u = n(552322),
                l = "dismissableLayer.update",
                d = "dismissableLayer.pointerDownOutside",
                f = "dismissableLayer.focusOutside",
                p = r.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                m = r.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: m, onPointerDownOutside: v, onFocusOutside: b, onInteractOutside: g, onDismiss: w, ...E } = e,
                        x = r.useContext(p),
                        [C, S] = r.useState(null),
                        N = C?.ownerDocument ?? globalThis?.document,
                        [, R] = r.useState({}),
                        P = (0, s.e)(t, (e) => S(e)),
                        A = Array.from(x.layers),
                        [T] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
                        O = A.indexOf(T),
                        M = C ? A.indexOf(C) : -1,
                        I = x.layersWithOutsidePointerEventsDisabled.size > 0,
                        _ = M >= O,
                        D = (function (e, t = globalThis?.document) {
                            const n = (0, a.W)(e),
                                o = r.useRef(!1),
                                i = r.useRef(() => {});
                            return (
                                r.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !o.current) {
                                                let r = function () {
                                                    y(d, n, o, { discrete: !0 });
                                                };
                                                const o = { originalEvent: e };
                                                "touch" === e.pointerType ? (t.removeEventListener("click", i.current), (i.current = r), t.addEventListener("click", i.current, { once: !0 })) : r();
                                            } else t.removeEventListener("click", i.current);
                                            o.current = !1;
                                        },
                                        r = window.setTimeout(() => {
                                            t.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
                                    };
                                }, [t, n]),
                                { onPointerDownCapture: () => (o.current = !0) }
                            );
                        })((e) => {
                            const t = e.target,
                                n = [...x.branches].some((e) => e.contains(t));
                            _ && !n && (v?.(e), g?.(e), e.defaultPrevented || w?.());
                        }, N),
                        F = (function (e, t = globalThis?.document) {
                            const n = (0, a.W)(e),
                                o = r.useRef(!1);
                            return (
                                r.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !o.current) {
                                            y(f, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...x.branches].some((e) => e.contains(t)) || (b?.(e), g?.(e), e.defaultPrevented || w?.());
                        }, N);
                    return (
                        (function (e, t = globalThis?.document) {
                            const n = (0, a.W)(e);
                            r.useEffect(() => {
                                const e = (e) => {
                                    "Escape" === e.key && n(e);
                                };
                                return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
                            }, [n, t]);
                        })((e) => {
                            M === x.layers.size - 1 && (m?.(e), !e.defaultPrevented && w && (e.preventDefault(), w()));
                        }, N),
                        r.useEffect(() => {
                            if (C)
                                return (
                                    n && (0 === x.layersWithOutsidePointerEventsDisabled.size && ((c = N.body.style.pointerEvents), (N.body.style.pointerEvents = "none")), x.layersWithOutsidePointerEventsDisabled.add(C)),
                                    x.layers.add(C),
                                    h(),
                                    () => {
                                        n && 1 === x.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = c);
                                    }
                                );
                        }, [C, N, n, x]),
                        r.useEffect(
                            () => () => {
                                C && (x.layers.delete(C), x.layersWithOutsidePointerEventsDisabled.delete(C), h());
                            },
                            [C, x],
                        ),
                        r.useEffect(() => {
                            const e = () => R({});
                            return document.addEventListener(l, e), () => document.removeEventListener(l, e);
                        }, []),
                        (0, u.jsx)(i.WV.div, { ...E, ref: P, style: { pointerEvents: I ? (_ ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, o.M)(e.onFocusCapture, F.onFocusCapture), onBlurCapture: (0, o.M)(e.onBlurCapture, F.onBlurCapture), onPointerDownCapture: (0, o.M)(e.onPointerDownCapture, D.onPointerDownCapture) })
                    );
                });
            m.displayName = "DismissableLayer";
            var v = r.forwardRef((e, t) => {
                const n = r.useContext(p),
                    o = r.useRef(null),
                    a = (0, s.e)(t, o);
                return (
                    r.useEffect(() => {
                        const e = o.current;
                        if (e)
                            return (
                                n.branches.add(e),
                                () => {
                                    n.branches.delete(e);
                                }
                            );
                    }, [n.branches]),
                    (0, u.jsx)(i.WV.div, { ...e, ref: a })
                );
            });
            function h() {
                const e = new CustomEvent(l);
                document.dispatchEvent(e);
            }
            function y(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, i.jH)(o, s) : o.dispatchEvent(s);
            }
            v.displayName = "DismissableLayerBranch";
        },
        474525: (e, t, n) => {
            n.d(t, { EW: () => i });
            var r = n(202784),
                o = 0;
            function i() {
                r.useEffect(() => {
                    const e = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", e[0] ?? s()),
                        document.body.insertAdjacentElement("beforeend", e[1] ?? s()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function s() {
                const e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
        447544: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(83070),
                i = n(547761),
                s = n(625723),
                a = n(552322),
                c = "focusScope.autoFocusOnMount",
                u = "focusScope.autoFocusOnUnmount",
                l = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: m, onUnmountAutoFocus: y, ...b } = e,
                        [g, w] = r.useState(null),
                        E = (0, s.W)(m),
                        x = (0, s.W)(y),
                        C = r.useRef(null),
                        S = (0, o.e)(t, (e) => w(e)),
                        N = r.useRef({
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
                                    if (N.paused || !g) return;
                                    const t = e.target;
                                    g.contains(t) ? (C.current = t) : v(C.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (N.paused || !g) return;
                                    const t = e.relatedTarget;
                                    null !== t && (g.contains(t) || v(C.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && v(g);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                g && r.observe(g, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [d, g, N.paused]),
                        r.useEffect(() => {
                            if (g) {
                                h.add(N);
                                const t = document.activeElement;
                                if (!g.contains(t)) {
                                    const n = new CustomEvent(c, l);
                                    g.addEventListener(c, E),
                                        g.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((v(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(g)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && v(g));
                                }
                                return () => {
                                    g.removeEventListener(c, E),
                                        setTimeout(() => {
                                            const e = new CustomEvent(u, l);
                                            g.addEventListener(u, x), g.dispatchEvent(e), e.defaultPrevented || v(t ?? document.body, { select: !0 }), g.removeEventListener(u, x), h.remove(N);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [g, E, x, N]);
                    const R = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (N.paused) return;
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
                        [n, d, N.paused],
                    );
                    return (0, a.jsx)(i.WV.div, { tabIndex: -1, ...b, ref: S, onKeyDown: R });
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
                        t !== n && n?.pause(), (e = y(e, t)), e.unshift(t);
                    },
                    remove(t) {
                        (e = y(e, t)), e[0]?.resume();
                    },
                };
            })();
            function y(e, t) {
                const n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
        },
        428253: (e, t, n) => {
            var r;
            n.d(t, { M: () => c });
            var o = n(202784),
                i = n(245626),
                s = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
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
        567282: (e, t, n) => {
            n.d(t, { ee: () => _, Eh: () => F, VY: () => D, fC: () => I, D7: () => h });
            var r = n(202784),
                o = n(992416),
                i = n(94258),
                s = n(547761),
                a = n(552322),
                c = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: o = 5, ...i } = e;
                    return (0, a.jsx)(s.WV.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            c.displayName = "Arrow";
            var u = c,
                l = n(83070),
                d = n(943203),
                f = n(625723),
                p = n(245626);
            var m = "Popper",
                [v, h] = (0, d.b)(m),
                [y, b] = v(m),
                g = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, a.jsx)(y, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            g.displayName = m;
            var w = "PopperAnchor",
                E = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...i } = e,
                        c = b(w, n),
                        u = r.useRef(null),
                        d = (0, l.e)(t, u);
                    return (
                        r.useEffect(() => {
                            c.onAnchorChange(o?.current || u.current);
                        }),
                        o ? null : (0, a.jsx)(s.WV.div, { ...i, ref: d })
                    );
                });
            E.displayName = w;
            var x = "PopperContent",
                [C, S] = v(x),
                N = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: c = "bottom", sideOffset: u = 0, align: d = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: h = !0, collisionBoundary: y = [], collisionPadding: g = 0, sticky: w = "partial", hideWhenDetached: E = !1, updatePositionStrategy: S = "optimized", onPlaced: N, ...R } = e,
                        P = b(x, n),
                        [A, I] = r.useState(null),
                        _ = (0, l.e)(t, (e) => I(e)),
                        [D, F] = r.useState(null),
                        j = (function (e) {
                            const [t, n] = r.useState(void 0);
                            return (
                                (0, p.b)(() => {
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
                        })(D),
                        L = j?.width ?? 0,
                        k = j?.height ?? 0,
                        W = c + ("center" !== d ? "-" + d : ""),
                        $ = "number" == typeof g ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g },
                        B = Array.isArray(y) ? y : [y],
                        U = B.length > 0,
                        V = { padding: $, boundary: B.filter(T), altBoundary: U },
                        {
                            refs: K,
                            floatingStyles: H,
                            placement: z,
                            isPositioned: Y,
                            middlewareData: X,
                        } = (0, o.YF)({
                            strategy: "fixed",
                            placement: W,
                            whileElementsMounted: (...e) => (0, i.Me)(...e, { animationFrame: "always" === S }),
                            elements: { reference: P.anchor },
                            middleware: [
                                (0, o.cv)({ mainAxis: u + k, alignmentAxis: m }),
                                h && (0, o.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === w ? (0, o.dr)() : void 0, ...V }),
                                h && (0, o.RR)({ ...V }),
                                (0, o.dp)({
                                    ...V,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            s = e.floating.style;
                                        s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${r}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                D && (0, o.x7)({ element: D, padding: v }),
                                O({ arrowWidth: L, arrowHeight: k }),
                                E && (0, o.Cp)({ strategy: "referenceHidden", ...V }),
                            ],
                        }),
                        [G, q] = M(z),
                        Z = (0, f.W)(N);
                    (0, p.b)(() => {
                        Y && Z?.();
                    }, [Y, Z]);
                    const J = X.arrow?.x,
                        Q = X.arrow?.y,
                        ee = 0 !== X.arrow?.centerOffset,
                        [te, ne] = r.useState();
                    return (
                        (0, p.b)(() => {
                            A && ne(window.getComputedStyle(A).zIndex);
                        }, [A]),
                        (0, a.jsx)("div", { ref: K.setFloating, "data-radix-popper-content-wrapper": "", style: { ...H, transform: Y ? H.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: te, "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "), ...(X.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, a.jsx)(C, { scope: n, placedSide: G, onArrowChange: F, arrowX: J, arrowY: Q, shouldHideArrow: ee, children: (0, a.jsx)(s.WV.div, { "data-side": G, "data-align": q, ...R, ref: _, style: { ...R.style, animation: Y ? void 0 : "none" } }) }) })
                    );
                });
            N.displayName = x;
            var R = "PopperArrow",
                P = { top: "bottom", right: "left", bottom: "top", left: "right" },
                A = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = S(R, n),
                        i = P[o.placedSide];
                    return (0, a.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, a.jsx)(u, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function T(e) {
                return null !== e;
            }
            A.displayName = R;
            var O = (e) => ({
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
                        f = (o.arrow?.y ?? 0) + a / 2;
                    let p = "",
                        m = "";
                    return "bottom" === c ? ((p = i ? l : `${d}px`), (m = -a + "px")) : "top" === c ? ((p = i ? l : `${d}px`), (m = `${r.floating.height + a}px`)) : "right" === c ? ((p = -a + "px"), (m = i ? l : `${f}px`)) : "left" === c && ((p = `${r.floating.width + a}px`), (m = i ? l : `${f}px`)), { data: { x: p, y: m } };
                },
            });
            function M(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var I = g,
                _ = E,
                D = N,
                F = A;
        },
        133383: (e, t, n) => {
            n.d(t, { h: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(547761),
                s = n(245626),
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
        149404: (e, t, n) => {
            n.d(t, { z: () => s });
            var r = n(202784),
                o = n(83070),
                i = n(245626);
            var s = (e) => {
                const { present: t, children: n } = e,
                    s = (function (e) {
                        const [t, n] = r.useState(),
                            o = r.useRef(null),
                            s = r.useRef(e),
                            c = r.useRef("none"),
                            u = e ? "mounted" : "unmounted",
                            [l, d] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(u, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = a(o.current);
                                c.current = "mounted" === l ? e : "none";
                            }, [l]),
                            (0, i.b)(() => {
                                const t = o.current,
                                    n = s.current;
                                if (n !== e) {
                                    const r = c.current,
                                        o = a(t);
                                    if (e) d("MOUNT");
                                    else if ("none" === o || "none" === t?.display) d("UNMOUNT");
                                    else {
                                        d(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    s.current = e;
                                }
                            }, [e, d]),
                            (0, i.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        r = (r) => {
                                            const i = a(o.current).includes(r.animationName);
                                            if (r.target === t && i && (d("ANIMATION_END"), !s.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        i = (e) => {
                                            e.target === t && (c.current = a(o.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", i),
                                        t.addEventListener("animationcancel", r),
                                        t.addEventListener("animationend", r),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
                                        }
                                    );
                                }
                                d("ANIMATION_END");
                            }, [t, d]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(l),
                                ref: r.useCallback((e) => {
                                    (o.current = e ? getComputedStyle(e) : null), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    c = "function" == typeof n ? n({ present: s.isPresent }) : r.Children.only(n),
                    u = (0, o.e)(
                        s.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(c),
                    );
                return "function" == typeof n || s.isPresent ? r.cloneElement(c, { ref: u }) : null;
            };
            function a(e) {
                return e?.animationName || "none";
            }
            s.displayName = "Presence";
        },
        547761: (e, t, n) => {
            n.d(t, { WV: () => a, jH: () => c });
            var r = n(202784),
                o = n(928316),
                i = n(174990),
                s = n(552322),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    const n = (0, i.Z8)(`Primitive.${t}`),
                        o = r.forwardRef((e, r) => {
                            const { asChild: o, ...i } = e,
                                a = o ? n : t;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, { ...i, ref: r });
                        });
                    return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        943250: (e, t, n) => {
            n.d(t, { ck: () => D, fC: () => _, Pc: () => S });
            var r = n(202784),
                o = n.t(r, 2),
                i = n(75572),
                s = n(449272),
                a = n(83070),
                c = n(943203),
                u = n(428253),
                l = n(547761),
                d = n(625723),
                f = n(245626),
                p = o[" useInsertionEffect ".trim().toString()] || f.b;
            function m({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
                const [i, s, a] = (function ({ defaultProp: e, onChange: t }) {
                        const [n, o] = r.useState(e),
                            i = r.useRef(n),
                            s = r.useRef(t);
                        return (
                            p(() => {
                                s.current = t;
                            }, [t]),
                            r.useEffect(() => {
                                i.current !== n && (s.current?.(n), (i.current = n));
                            }, [n, i]),
                            [n, o, s]
                        );
                    })({ defaultProp: t, onChange: n }),
                    c = void 0 !== e,
                    u = c ? e : i;
                {
                    const t = r.useRef(void 0 !== e);
                    r.useEffect(() => {
                        const e = t.current;
                        if (e !== c) {
                        }
                        t.current = c;
                    }, [c, o]);
                }
                const l = r.useCallback(
                    (t) => {
                        if (c) {
                            const n = (function (e) {
                                return "function" == typeof e;
                            })(t)
                                ? t(e)
                                : t;
                            n !== e && a.current?.(n);
                        } else s(t);
                    },
                    [c, e, s, a],
                );
                return [u, l];
            }
            Symbol("RADIX:SYNC_STATE");
            var v = n(142751),
                h = n(552322),
                y = "rovingFocusGroup.onEntryFocus",
                b = { bubbles: !1, cancelable: !0 },
                g = "RovingFocusGroup",
                [w, E, x] = (0, s.B)(g),
                [C, S] = (0, c.b)(g, [x]),
                [N, R] = C(g),
                P = r.forwardRef((e, t) => (0, h.jsx)(w.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, h.jsx)(w.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, h.jsx)(A, { ...e, ref: t }) }) }));
            P.displayName = g;
            var A = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, orientation: o, loop: s = !1, dir: c, currentTabStopId: u, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: p, onEntryFocus: w, preventScrollOnEntryFocus: x = !1, ...C } = e,
                        S = r.useRef(null),
                        R = (0, a.e)(t, S),
                        P = (0, v.gm)(c),
                        [A, T] = m({ prop: u, defaultProp: f ?? null, onChange: p, caller: g }),
                        [O, M] = r.useState(!1),
                        _ = (0, d.W)(w),
                        D = E(n),
                        F = r.useRef(!1),
                        [j, L] = r.useState(0);
                    return (
                        r.useEffect(() => {
                            const e = S.current;
                            if (e) return e.addEventListener(y, _), () => e.removeEventListener(y, _);
                        }, [_]),
                        (0, h.jsx)(N, {
                            scope: n,
                            orientation: o,
                            dir: P,
                            loop: s,
                            currentTabStopId: A,
                            onItemFocus: r.useCallback((e) => T(e), [T]),
                            onItemShiftTab: r.useCallback(() => M(!0), []),
                            onFocusableItemAdd: r.useCallback(() => L((e) => e + 1), []),
                            onFocusableItemRemove: r.useCallback(() => L((e) => e - 1), []),
                            children: (0, h.jsx)(l.WV.div, {
                                tabIndex: O || 0 === j ? -1 : 0,
                                "data-orientation": o,
                                ...C,
                                ref: R,
                                style: { outline: "none", ...e.style },
                                onMouseDown: (0, i.M)(e.onMouseDown, () => {
                                    F.current = !0;
                                }),
                                onFocus: (0, i.M)(e.onFocus, (e) => {
                                    const t = !F.current;
                                    if (e.target === e.currentTarget && t && !O) {
                                        const t = new CustomEvent(y, b);
                                        if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                            const e = D().filter((e) => e.focusable);
                                            I(
                                                [e.find((e) => e.active), e.find((e) => e.id === A), ...e].filter(Boolean).map((e) => e.ref.current),
                                                x,
                                            );
                                        }
                                    }
                                    F.current = !1;
                                }),
                                onBlur: (0, i.M)(e.onBlur, () => M(!1)),
                            }),
                        })
                    );
                }),
                T = "RovingFocusGroupItem",
                O = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, focusable: o = !0, active: s = !1, tabStopId: a, children: c, ...d } = e,
                        f = (0, u.M)(),
                        p = a || f,
                        m = R(T, n),
                        v = m.currentTabStopId === p,
                        y = E(n),
                        { onFocusableItemAdd: b, onFocusableItemRemove: g, currentTabStopId: x } = m;
                    return (
                        r.useEffect(() => {
                            if (o) return b(), () => g();
                        }, [o, b, g]),
                        (0, h.jsx)(w.ItemSlot, {
                            scope: n,
                            id: p,
                            focusable: o,
                            active: s,
                            children: (0, h.jsx)(l.WV.span, {
                                tabIndex: v ? 0 : -1,
                                "data-orientation": m.orientation,
                                ...d,
                                ref: t,
                                onMouseDown: (0, i.M)(e.onMouseDown, (e) => {
                                    o ? m.onItemFocus(p) : e.preventDefault();
                                }),
                                onFocus: (0, i.M)(e.onFocus, () => m.onItemFocus(p)),
                                onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                    if ("Tab" === e.key && e.shiftKey) return void m.onItemShiftTab();
                                    if (e.target !== e.currentTarget) return;
                                    const t = (function (e, t, n) {
                                        const r = (function (e, t) {
                                            return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
                                        })(e.key, n);
                                        return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) || ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r)) ? void 0 : M[r];
                                    })(e, m.orientation, m.dir);
                                    if (void 0 !== t) {
                                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                        e.preventDefault();
                                        let o = y()
                                            .filter((e) => e.focusable)
                                            .map((e) => e.ref.current);
                                        if ("last" === t) o.reverse();
                                        else if ("prev" === t || "next" === t) {
                                            "prev" === t && o.reverse();
                                            const i = o.indexOf(e.currentTarget);
                                            o = m.loop ? ((r = i + 1), (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1);
                                        }
                                        setTimeout(() => I(o));
                                    }
                                    var n, r;
                                }),
                                children: "function" == typeof c ? c({ isCurrentTabStop: v, hasTabStop: null != x }) : c,
                            }),
                        })
                    );
                });
            O.displayName = T;
            var M = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function I(e, t = !1) {
                const n = document.activeElement;
                for (const r of e) {
                    if (r === n) return;
                    if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
                }
            }
            var _ = P,
                D = O;
        },
        174990: (e, t, n) => {
            n.d(t, { Z8: () => s });
            var r = n(202784),
                o = n(83070),
                i = n(552322);
            function s(e) {
                const t = a(e),
                    n = r.forwardRef((e, n) => {
                        const { children: o, ...s } = e,
                            a = r.Children.toArray(o),
                            c = a.find(u);
                        if (c) {
                            const e = c.props.children,
                                o = a.map((t) => (t === c ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                            return (0, i.jsx)(t, { ...s, ref: n, children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null });
                        }
                        return (0, i.jsx)(t, { ...s, ref: n, children: o });
                    });
                return (n.displayName = `${e}.Slot`), n;
            }
            function a(e) {
                const t = r.forwardRef((e, t) => {
                    const { children: n, ...i } = e;
                    if (r.isValidElement(n)) {
                        const e = (function (e) {
                                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                    n = t && "isReactWarning" in t && t.isReactWarning;
                                if (n) return e.ref;
                                if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                                return e.props.ref || e.ref;
                            })(n),
                            s = (function (e, t) {
                                const n = { ...t };
                                for (const r in t) {
                                    const o = e[r],
                                        i = t[r];
                                    /^on[A-Z]/.test(r)
                                        ? o && i
                                            ? (n[r] = (...e) => {
                                                  const t = i(...e);
                                                  return o(...e), t;
                                              })
                                            : o && (n[r] = o)
                                        : "style" === r
                                          ? (n[r] = { ...o, ...i })
                                          : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                                }
                                return { ...e, ...n };
                            })(i, n.props);
                        return n.type !== r.Fragment && (s.ref = t ? (0, o.F)(t, e) : e), r.cloneElement(n, s);
                    }
                    return r.Children.count(n) > 1 ? r.Children.only(null) : null;
                });
                return (t.displayName = `${e}.SlotClone`), t;
            }
            var c = Symbol("radix.slottable");
            function u(e) {
                return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c;
            }
        },
        625723: (e, t, n) => {
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
        245626: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(202784),
                o = globalThis?.document ? r.useLayoutEffect : () => {};
        },
        199237: (e, t, n) => {
            n.d(t, { fC: () => x, bU: () => C });
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
            var c = n(387695),
                u = n(890022),
                l = n(335019),
                d = n(172714),
                f = "Switch",
                [p, m] = (function (e, t = []) {
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
                })(f),
                [v, h] = p(f),
                y = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, name: a, checked: u, defaultChecked: l, required: f, disabled: p, value: m = "on", onCheckedChange: h, ...y } = e,
                        [b, g] = r.useState(null),
                        x = (0, i.e)(t, (e) => g(e)),
                        C = r.useRef(!1),
                        S = !b || Boolean(b.closest("form")),
                        [N = !1, R] = (0, c.T)({ prop: u, defaultProp: l, onChange: h });
                    return (0, s.jsxs)(v, {
                        scope: n,
                        checked: N,
                        disabled: p,
                        children: [
                            (0, s.jsx)(d.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": N,
                                "aria-required": f,
                                "data-state": E(N),
                                "data-disabled": p ? "" : void 0,
                                disabled: p,
                                value: m,
                                ...y,
                                ref: x,
                                onClick: (0, o.M)(e.onClick, (e) => {
                                    R((e) => !e), S && ((C.current = e.isPropagationStopped()), C.current || e.stopPropagation());
                                }),
                            }),
                            S && (0, s.jsx)(w, { control: b, bubbles: !C.current, name: a, value: m, checked: N, required: f, disabled: p, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            y.displayName = f;
            var b = "SwitchThumb",
                g = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, ...r } = e,
                        o = h(b, n);
                    return (0, s.jsx)(d.WV.span, { "data-state": E(o.checked), "data-disabled": o.disabled ? "" : void 0, ...r, ref: t });
                });
            g.displayName = b;
            var w = (e) => {
                const { control: t, checked: n, bubbles: o = !0, ...i } = e,
                    a = r.useRef(null),
                    c = (0, u.D)(n),
                    d = (0, l.t)(t);
                return (
                    r.useEffect(() => {
                        const e = a.current,
                            t = window.HTMLInputElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "checked").set;
                        if (c !== n && r) {
                            const t = new Event("click", { bubbles: o });
                            r.call(e, n), e.dispatchEvent(t);
                        }
                    }, [c, n, o]),
                    (0, s.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: n, ...i, tabIndex: -1, ref: a, style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function E(e) {
                return e ? "checked" : "unchecked";
            }
            var x = y,
                C = g;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-af61fd96.97f9f9ea.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-ec5b99a5"],
    {
        569001: (e, t, n) => {
            n.d(t, { VY: () => Nt, ZA: () => It, JO: () => Tt, ck: () => Lt, wU: () => Mt, eT: () => At, __: () => Ot, h_: () => Dt, fC: () => Rt, $G: () => Ft, u_: () => Wt, Z0: () => Ht, xz: () => _t, B4: () => jt, l_: () => kt });
            var r = n(202784),
                o = n(928316);
            function i(e, [t, n]) {
                return Math.min(n, Math.max(t, e));
            }
            function a(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            var s = n(405895);
            function l(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function c(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = l(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : l(e[t], null);
                            }
                        };
                };
            }
            function d(...e) {
                return r.useCallback(c(...e), e);
            }
            var u = n(392211),
                p = n(759241),
                f = n(552322),
                h = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        i = r.Children.toArray(n),
                        a = i.find(g);
                    if (a) {
                        const e = a.props.children,
                            n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, f.jsx)(v, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, f.jsx)(v, { ...o, ref: t, children: n });
                });
            h.displayName = "Slot";
            var v = r.forwardRef((e, t) => {
                const { children: n, ...o } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(n),
                        i = (function (e, t) {
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
                        })(o, n.props);
                    return n.type !== r.Fragment && (i.ref = t ? c(t, e) : e), r.cloneElement(n, i);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            v.displayName = "SlotClone";
            var m = ({ children: e }) => (0, f.jsx)(f.Fragment, { children: e });
            function g(e) {
                return r.isValidElement(e) && e.type === m;
            }
            var w = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? h : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, f.jsx)(i, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var y,
                x = n(627757),
                b = n(986796),
                S = "dismissableLayer.update",
                C = "dismissableLayer.pointerDownOutside",
                E = "dismissableLayer.focusOutside",
                P = r.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                R = r.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: l, onDismiss: c, ...u } = e,
                        p = r.useContext(P),
                        [h, v] = r.useState(null),
                        m = h?.ownerDocument ?? globalThis?.document,
                        [, g] = r.useState({}),
                        R = d(t, (e) => v(e)),
                        _ = Array.from(p.layers),
                        [D] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
                        N = _.indexOf(D),
                        k = h ? _.indexOf(h) : -1,
                        I = p.layersWithOutsidePointerEventsDisabled.size > 0,
                        O = k >= N,
                        L = (function (e, t = globalThis?.document) {
                            const n = (0, x.W)(e),
                                o = r.useRef(!1),
                                i = r.useRef(() => {});
                            return (
                                r.useEffect(() => {
                                    const e = (e) => {
                                            if (e.target && !o.current) {
                                                let r = function () {
                                                    T(C, n, o, { discrete: !0 });
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
                                n = [...p.branches].some((e) => e.contains(t));
                            O && !n && (i?.(e), l?.(e), e.defaultPrevented || c?.());
                        }, m),
                        A = (function (e, t = globalThis?.document) {
                            const n = (0, x.W)(e),
                                o = r.useRef(!1);
                            return (
                                r.useEffect(() => {
                                    const e = (e) => {
                                        if (e.target && !o.current) {
                                            T(E, n, { originalEvent: e }, { discrete: !1 });
                                        }
                                    };
                                    return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
                                }, [t, n]),
                                { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
                            );
                        })((e) => {
                            const t = e.target;
                            [...p.branches].some((e) => e.contains(t)) || (s?.(e), l?.(e), e.defaultPrevented || c?.());
                        }, m);
                    return (
                        (0, b.e)((e) => {
                            k === p.layers.size - 1 && (o?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
                        }, m),
                        r.useEffect(() => {
                            if (h)
                                return (
                                    n && (0 === p.layersWithOutsidePointerEventsDisabled.size && ((y = m.body.style.pointerEvents), (m.body.style.pointerEvents = "none")), p.layersWithOutsidePointerEventsDisabled.add(h)),
                                    p.layers.add(h),
                                    j(),
                                    () => {
                                        n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (m.body.style.pointerEvents = y);
                                    }
                                );
                        }, [h, m, n, p]),
                        r.useEffect(
                            () => () => {
                                h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), j());
                            },
                            [h, p],
                        ),
                        r.useEffect(() => {
                            const e = () => g({});
                            return document.addEventListener(S, e), () => document.removeEventListener(S, e);
                        }, []),
                        (0, f.jsx)(w.div, { ...u, ref: R, style: { pointerEvents: I ? (O ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: a(e.onFocusCapture, A.onFocusCapture), onBlurCapture: a(e.onBlurCapture, A.onBlurCapture), onPointerDownCapture: a(e.onPointerDownCapture, L.onPointerDownCapture) })
                    );
                });
            R.displayName = "DismissableLayer";
            var _ = r.forwardRef((e, t) => {
                const n = r.useContext(P),
                    o = r.useRef(null),
                    i = d(t, o);
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
                    (0, f.jsx)(w.div, { ...e, ref: i })
                );
            });
            function j() {
                const e = new CustomEvent(S);
                document.dispatchEvent(e);
            }
            function T(e, t, n, { discrete: r }) {
                const i = n.originalEvent.target,
                    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && i.addEventListener(e, t, { once: !0 }),
                    r
                        ? (function (e, t) {
                              e && o.flushSync(() => e.dispatchEvent(t));
                          })(i, a)
                        : i.dispatchEvent(a);
            }
            _.displayName = "DismissableLayerBranch";
            var D = n(11861),
                N = "focusScope.autoFocusOnMount",
                k = "focusScope.autoFocusOnUnmount",
                I = { bubbles: !1, cancelable: !0 },
                O = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: o = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...s } = e,
                        [l, c] = r.useState(null),
                        u = (0, x.W)(i),
                        p = (0, x.W)(a),
                        h = r.useRef(null),
                        v = d(t, (e) => c(e)),
                        m = r.useRef({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    r.useEffect(() => {
                        if (o) {
                            let e = function (e) {
                                    if (m.paused || !l) return;
                                    const t = e.target;
                                    l.contains(t) ? (h.current = t) : W(h.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (m.paused || !l) return;
                                    const t = e.relatedTarget;
                                    null !== t && (l.contains(t) || W(h.current, { select: !0 }));
                                },
                                n = function (e) {
                                    if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && W(l);
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            const r = new MutationObserver(n);
                            return (
                                l && r.observe(l, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
                                }
                            );
                        }
                    }, [o, l, m.paused]),
                        r.useEffect(() => {
                            if (l) {
                                F.add(m);
                                const t = document.activeElement;
                                if (!l.contains(t)) {
                                    const n = new CustomEvent(N, I);
                                    l.addEventListener(N, u),
                                        l.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((W(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = L(l)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && W(l));
                                }
                                return () => {
                                    l.removeEventListener(N, u),
                                        setTimeout(() => {
                                            const e = new CustomEvent(k, I);
                                            l.addEventListener(k, p), l.dispatchEvent(e), e.defaultPrevented || W(t ?? document.body, { select: !0 }), l.removeEventListener(k, p), F.remove(m);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [l, u, p, m]);
                    const g = r.useCallback(
                        (e) => {
                            if (!n && !o) return;
                            if (m.paused) return;
                            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                r = document.activeElement;
                            if (t && r) {
                                const t = e.currentTarget,
                                    [o, i] = (function (e) {
                                        const t = L(e),
                                            n = A(t, e),
                                            r = A(t.reverse(), e);
                                        return [n, r];
                                    })(t);
                                o && i ? (e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && W(i, { select: !0 })) : (e.preventDefault(), n && W(o, { select: !0 }))) : r === t && e.preventDefault();
                            }
                        },
                        [n, o, m.paused],
                    );
                    return (0, f.jsx)(w.div, { tabIndex: -1, ...s, ref: v, onKeyDown: g });
                });
            function L(e) {
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
            function A(e, t) {
                for (const n of e) if (!M(n, { upTo: t })) return n;
            }
            function M(e, { upTo: t }) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e; ) {
                    if (void 0 !== t && e === t) return !1;
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement;
                }
                return !1;
            }
            function W(e, { select: t = !1 } = {}) {
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
            O.displayName = "FocusScope";
            var F = (function () {
                let e = [];
                return {
                    add(t) {
                        const n = e[0];
                        t !== n && n?.pause(), (e = H(e, t)), e.unshift(t);
                    },
                    remove(t) {
                        (e = H(e, t)), e[0]?.resume();
                    },
                };
            })();
            function H(e, t) {
                const n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
            var B = n(23372),
                V = n(992416),
                K = n(94258),
                z = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: o = 5, ...i } = e;
                    return (0, f.jsx)(w.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, f.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            z.displayName = "Arrow";
            var $ = z,
                U = n(861644),
                Y = n(335019),
                q = "Popper",
                [X, Z] = (0, u.b)(q),
                [G, J] = X(q),
                Q = (e) => {
                    const { __scopePopper: t, children: n } = e,
                        [o, i] = r.useState(null);
                    return (0, f.jsx)(G, { scope: t, anchor: o, onAnchorChange: i, children: n });
                };
            Q.displayName = q;
            var ee = "PopperAnchor",
                te = r.forwardRef((e, t) => {
                    const { __scopePopper: n, virtualRef: o, ...i } = e,
                        a = J(ee, n),
                        s = r.useRef(null),
                        l = d(t, s);
                    return (
                        r.useEffect(() => {
                            a.onAnchorChange(o?.current || s.current);
                        }),
                        o ? null : (0, f.jsx)(w.div, { ...i, ref: l })
                    );
                });
            te.displayName = ee;
            var ne = "PopperContent",
                [re, oe] = X(ne),
                ie = r.forwardRef((e, t) => {
                    const { __scopePopper: n, side: o = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: s = 0, arrowPadding: l = 0, avoidCollisions: c = !0, collisionBoundary: u = [], collisionPadding: p = 0, sticky: h = "partial", hideWhenDetached: v = !1, updatePositionStrategy: m = "optimized", onPlaced: g, ...y } = e,
                        b = J(ne, n),
                        [S, C] = r.useState(null),
                        E = d(t, (e) => C(e)),
                        [P, R] = r.useState(null),
                        _ = (0, Y.t)(P),
                        j = _?.width ?? 0,
                        T = _?.height ?? 0,
                        D = o + ("center" !== a ? "-" + a : ""),
                        N = "number" == typeof p ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p },
                        k = Array.isArray(u) ? u : [u],
                        I = k.length > 0,
                        O = { padding: N, boundary: k.filter(ce), altBoundary: I },
                        {
                            refs: L,
                            floatingStyles: A,
                            placement: M,
                            isPositioned: W,
                            middlewareData: F,
                        } = (0, V.YF)({
                            strategy: "fixed",
                            placement: D,
                            whileElementsMounted: (...e) => (0, K.Me)(...e, { animationFrame: "always" === m }),
                            elements: { reference: b.anchor },
                            middleware: [
                                (0, V.cv)({ mainAxis: i + T, alignmentAxis: s }),
                                c && (0, V.uY)({ mainAxis: !0, crossAxis: !1, limiter: "partial" === h ? (0, V.dr)() : void 0, ...O }),
                                c && (0, V.RR)({ ...O }),
                                (0, V.dp)({
                                    ...O,
                                    apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                                        const { width: o, height: i } = t.reference,
                                            a = e.floating.style;
                                        a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`);
                                    },
                                }),
                                P && (0, V.x7)({ element: P, padding: l }),
                                de({ arrowWidth: j, arrowHeight: T }),
                                v && (0, V.Cp)({ strategy: "referenceHidden", ...O }),
                            ],
                        }),
                        [H, B] = ue(M),
                        z = (0, x.W)(g);
                    (0, U.b)(() => {
                        W && z?.();
                    }, [W, z]);
                    const $ = F.arrow?.x,
                        q = F.arrow?.y,
                        X = 0 !== F.arrow?.centerOffset,
                        [Z, G] = r.useState();
                    return (
                        (0, U.b)(() => {
                            S && G(window.getComputedStyle(S).zIndex);
                        }, [S]),
                        (0, f.jsx)("div", { ref: L.setFloating, "data-radix-popper-content-wrapper": "", style: { ...A, transform: W ? A.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: Z, "--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "), ...(F.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }) }, dir: e.dir, children: (0, f.jsx)(re, { scope: n, placedSide: H, onArrowChange: R, arrowX: $, arrowY: q, shouldHideArrow: X, children: (0, f.jsx)(w.div, { "data-side": H, "data-align": B, ...y, ref: E, style: { ...y.style, animation: W ? void 0 : "none" } }) }) })
                    );
                });
            ie.displayName = ne;
            var ae = "PopperArrow",
                se = { top: "bottom", right: "left", bottom: "top", left: "right" },
                le = r.forwardRef(function (e, t) {
                    const { __scopePopper: n, ...r } = e,
                        o = oe(ae, n),
                        i = se[o.placedSide];
                    return (0, f.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, f.jsx)($, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function ce(e) {
                return null !== e;
            }
            le.displayName = ae;
            var de = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    const { placement: n, rects: r, middlewareData: o } = t,
                        i = 0 !== o.arrow?.centerOffset,
                        a = i ? 0 : e.arrowWidth,
                        s = i ? 0 : e.arrowHeight,
                        [l, c] = ue(n),
                        d = { start: "0%", center: "50%", end: "100%" }[c],
                        u = (o.arrow?.x ?? 0) + a / 2,
                        p = (o.arrow?.y ?? 0) + s / 2;
                    let f = "",
                        h = "";
                    return "bottom" === l ? ((f = i ? d : `${u}px`), (h = -s + "px")) : "top" === l ? ((f = i ? d : `${u}px`), (h = `${r.floating.height + s}px`)) : "right" === l ? ((f = -s + "px"), (h = i ? d : `${p}px`)) : "left" === l && ((f = `${r.floating.width + s}px`), (h = i ? d : `${p}px`)), { data: { x: f, y: h } };
                },
            });
            function ue(e) {
                const [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var pe = Q,
                fe = te,
                he = ie,
                ve = le,
                me = r.forwardRef((e, t) => {
                    const { container: n, ...i } = e,
                        [a, s] = r.useState(!1);
                    (0, U.b)(() => s(!0), []);
                    const l = n || (a && globalThis?.document?.body);
                    return l ? o.createPortal((0, f.jsx)(w.div, { ...i, ref: t }), l) : null;
                });
            me.displayName = "Portal";
            var ge = n(387695),
                we = n(890022),
                ye = r.forwardRef((e, t) => (0, f.jsx)(w.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } }));
            ye.displayName = "VisuallyHidden";
            var xe = n(549732),
                be = n(819755),
                Se = [" ", "Enter", "ArrowUp", "ArrowDown"],
                Ce = [" ", "Enter"],
                Ee = "Select",
                [Pe, Re, _e] = (0, s.B)(Ee),
                [je, Te] = (0, u.b)(Ee, [_e, Z]),
                De = Z(),
                [Ne, ke] = je(Ee),
                [Ie, Oe] = je(Ee),
                Le = (e) => {
                    const { __scopeSelect: t, children: n, open: o, defaultOpen: i, onOpenChange: a, value: s, defaultValue: l, onValueChange: c, dir: d, name: u, autoComplete: h, disabled: v, required: m, form: g } = e,
                        w = De(t),
                        [y, x] = r.useState(null),
                        [b, S] = r.useState(null),
                        [C, E] = r.useState(!1),
                        P = (0, p.gm)(d),
                        [R = !1, _] = (0, ge.T)({ prop: o, defaultProp: i, onChange: a }),
                        [j, T] = (0, ge.T)({ prop: s, defaultProp: l, onChange: c }),
                        D = r.useRef(null),
                        N = !y || g || !!y.closest("form"),
                        [k, I] = r.useState(new Set()),
                        O = Array.from(k)
                            .map((e) => e.props.value)
                            .join(";");
                    return (0, f.jsx)(pe, {
                        ...w,
                        children: (0, f.jsxs)(Ne, {
                            required: m,
                            scope: t,
                            trigger: y,
                            onTriggerChange: x,
                            valueNode: b,
                            onValueNodeChange: S,
                            valueNodeHasChildren: C,
                            onValueNodeHasChildrenChange: E,
                            contentId: (0, B.M)(),
                            value: j,
                            onValueChange: T,
                            open: R,
                            onOpenChange: _,
                            dir: P,
                            triggerPointerDownPosRef: D,
                            disabled: v,
                            children: [
                                (0, f.jsx)(Pe.Provider, {
                                    scope: t,
                                    children: (0, f.jsx)(Ie, {
                                        scope: e.__scopeSelect,
                                        onNativeOptionAdd: r.useCallback((e) => {
                                            I((t) => new Set(t).add(e));
                                        }, []),
                                        onNativeOptionRemove: r.useCallback((e) => {
                                            I((t) => {
                                                const n = new Set(t);
                                                return n.delete(e), n;
                                            });
                                        }, []),
                                        children: n,
                                    }),
                                }),
                                N ? (0, f.jsxs)(Ct, { "aria-hidden": !0, required: m, tabIndex: -1, name: u, autoComplete: h, value: j, onChange: (e) => T(e.target.value), disabled: v, form: g, children: [void 0 === j ? (0, f.jsx)("option", { value: "" }) : null, Array.from(k)] }, O) : null,
                            ],
                        }),
                    });
                };
            Le.displayName = Ee;
            var Ae = "SelectTrigger",
                Me = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, disabled: o = !1, ...i } = e,
                        s = De(n),
                        l = ke(Ae, n),
                        c = l.disabled || o,
                        u = d(t, l.onTriggerChange),
                        p = Re(n),
                        h = r.useRef("touch"),
                        [v, m, g] = Et((e) => {
                            const t = p().filter((e) => !e.disabled),
                                n = t.find((e) => e.value === l.value),
                                r = Pt(t, e, n);
                            void 0 !== r && l.onValueChange(r.value);
                        }),
                        y = (e) => {
                            c || (l.onOpenChange(!0), g()), e && (l.triggerPointerDownPosRef.current = { x: Math.round(e.pageX), y: Math.round(e.pageY) });
                        };
                    return (0, f.jsx)(fe, {
                        asChild: !0,
                        ...s,
                        children: (0, f.jsx)(w.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": l.contentId,
                            "aria-expanded": l.open,
                            "aria-required": l.required,
                            "aria-autocomplete": "none",
                            dir: l.dir,
                            "data-state": l.open ? "open" : "closed",
                            disabled: c,
                            "data-disabled": c ? "" : void 0,
                            "data-placeholder": St(l.value) ? "" : void 0,
                            ...i,
                            ref: u,
                            onClick: a(i.onClick, (e) => {
                                e.currentTarget.focus(), "mouse" !== h.current && y(e);
                            }),
                            onPointerDown: a(i.onPointerDown, (e) => {
                                h.current = e.pointerType;
                                const t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault());
                            }),
                            onKeyDown: a(i.onKeyDown, (e) => {
                                const t = "" !== v.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (t && " " === e.key) || (Se.includes(e.key) && (y(), e.preventDefault()));
                            }),
                        }),
                    });
                });
            Me.displayName = Ae;
            var We = "SelectValue",
                Fe = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: a = "", ...s } = e,
                        l = ke(We, n),
                        { onValueNodeHasChildrenChange: c } = l,
                        u = void 0 !== i,
                        p = d(t, l.onValueNodeChange);
                    return (
                        (0, U.b)(() => {
                            c(u);
                        }, [c, u]),
                        (0, f.jsx)(w.span, { ...s, ref: p, style: { pointerEvents: "none" }, children: St(l.value) ? (0, f.jsx)(f.Fragment, { children: a }) : i })
                    );
                });
            Fe.displayName = We;
            var He = r.forwardRef((e, t) => {
                const { __scopeSelect: n, children: r, ...o } = e;
                return (0, f.jsx)(w.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
            });
            He.displayName = "SelectIcon";
            var Be = (e) => (0, f.jsx)(me, { asChild: !0, ...e });
            Be.displayName = "SelectPortal";
            var Ve = "SelectContent",
                Ke = r.forwardRef((e, t) => {
                    const n = ke(Ve, e.__scopeSelect),
                        [i, a] = r.useState();
                    if (
                        ((0, U.b)(() => {
                            a(new DocumentFragment());
                        }, []),
                        !n.open)
                    ) {
                        const t = i;
                        return t ? o.createPortal((0, f.jsx)($e, { scope: e.__scopeSelect, children: (0, f.jsx)(Pe.Slot, { scope: e.__scopeSelect, children: (0, f.jsx)("div", { children: e.children }) }) }), t) : null;
                    }
                    return (0, f.jsx)(Ye, { ...e, ref: t });
                });
            Ke.displayName = Ve;
            var ze = 10,
                [$e, Ue] = je(Ve),
                Ye = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, position: o = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: s, onPointerDownOutside: l, side: c, sideOffset: u, align: p, alignOffset: v, arrowPadding: m, collisionBoundary: g, collisionPadding: w, sticky: y, hideWhenDetached: x, avoidCollisions: b, ...S } = e,
                        C = ke(Ve, n),
                        [E, P] = r.useState(null),
                        [_, j] = r.useState(null),
                        T = d(t, (e) => P(e)),
                        [N, k] = r.useState(null),
                        [I, L] = r.useState(null),
                        A = Re(n),
                        [M, W] = r.useState(!1),
                        F = r.useRef(!1);
                    r.useEffect(() => {
                        if (E) return (0, xe.Ry)(E);
                    }, [E]),
                        (0, D.EW)();
                    const H = r.useCallback(
                            (e) => {
                                const [t, ...n] = A().map((e) => e.ref.current),
                                    [r] = n.slice(-1),
                                    o = document.activeElement;
                                for (const n of e) {
                                    if (n === o) return;
                                    if ((n?.scrollIntoView({ block: "nearest" }), n === t && _ && (_.scrollTop = 0), n === r && _ && (_.scrollTop = _.scrollHeight), n?.focus(), document.activeElement !== o)) return;
                                }
                            },
                            [A, _],
                        ),
                        B = r.useCallback(() => H([N, E]), [H, N, E]);
                    r.useEffect(() => {
                        M && B();
                    }, [M, B]);
                    const { onOpenChange: V, triggerPointerDownPosRef: K } = C;
                    r.useEffect(() => {
                        if (E) {
                            let e = { x: 0, y: 0 };
                            const t = (t) => {
                                    e = { x: Math.abs(Math.round(t.pageX) - (K.current?.x ?? 0)), y: Math.abs(Math.round(t.pageY) - (K.current?.y ?? 0)) };
                                },
                                n = (n) => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : E.contains(n.target) || V(!1), document.removeEventListener("pointermove", t), (K.current = null);
                                };
                            return (
                                null !== K.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, { capture: !0, once: !0 })),
                                () => {
                                    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
                                }
                            );
                        }
                    }, [E, V, K]),
                        r.useEffect(() => {
                            const e = () => V(!1);
                            return (
                                window.addEventListener("blur", e),
                                window.addEventListener("resize", e),
                                () => {
                                    window.removeEventListener("blur", e), window.removeEventListener("resize", e);
                                }
                            );
                        }, [V]);
                    const [z, $] = Et((e) => {
                            const t = A().filter((e) => !e.disabled),
                                n = t.find((e) => e.ref.current === document.activeElement),
                                r = Pt(t, e, n);
                            r && setTimeout(() => r.ref.current.focus());
                        }),
                        U = r.useCallback(
                            (e, t, n) => {
                                const r = !F.current && !n;
                                ((void 0 !== C.value && C.value === t) || r) && (k(e), r && (F.current = !0));
                            },
                            [C.value],
                        ),
                        Y = r.useCallback(() => E?.focus(), [E]),
                        q = r.useCallback(
                            (e, t, n) => {
                                const r = !F.current && !n;
                                ((void 0 !== C.value && C.value === t) || r) && L(e);
                            },
                            [C.value],
                        ),
                        X = "popper" === o ? Xe : qe,
                        Z = X === Xe ? { side: c, sideOffset: u, align: p, alignOffset: v, arrowPadding: m, collisionBoundary: g, collisionPadding: w, sticky: y, hideWhenDetached: x, avoidCollisions: b } : {};
                    return (0, f.jsx)($e, {
                        scope: n,
                        content: E,
                        viewport: _,
                        onViewportChange: j,
                        itemRefCallback: U,
                        selectedItem: N,
                        onItemLeave: Y,
                        itemTextRefCallback: q,
                        focusSelectedItem: B,
                        selectedItemText: I,
                        position: o,
                        isPositioned: M,
                        searchRef: z,
                        children: (0, f.jsx)(be.Z, {
                            as: h,
                            allowPinchZoom: !0,
                            children: (0, f.jsx)(O, {
                                asChild: !0,
                                trapped: C.open,
                                onMountAutoFocus: (e) => {
                                    e.preventDefault();
                                },
                                onUnmountAutoFocus: a(i, (e) => {
                                    C.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                                }),
                                children: (0, f.jsx)(R, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: !0,
                                    onEscapeKeyDown: s,
                                    onPointerDownOutside: l,
                                    onFocusOutside: (e) => e.preventDefault(),
                                    onDismiss: () => C.onOpenChange(!1),
                                    children: (0, f.jsx)(X, {
                                        role: "listbox",
                                        id: C.contentId,
                                        "data-state": C.open ? "open" : "closed",
                                        dir: C.dir,
                                        onContextMenu: (e) => e.preventDefault(),
                                        ...S,
                                        ...Z,
                                        onPlaced: () => W(!0),
                                        ref: T,
                                        style: { display: "flex", flexDirection: "column", outline: "none", ...S.style },
                                        onKeyDown: a(S.onKeyDown, (e) => {
                                            const t = e.ctrlKey || e.altKey || e.metaKey;
                                            if (("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))) {
                                                let t = A()
                                                    .filter((e) => !e.disabled)
                                                    .map((e) => e.ref.current);
                                                if ((["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key))) {
                                                    const n = e.target,
                                                        r = t.indexOf(n);
                                                    t = t.slice(r + 1);
                                                }
                                                setTimeout(() => H(t)), e.preventDefault();
                                            }
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            Ye.displayName = "SelectContentImpl";
            var qe = r.forwardRef((e, t) => {
                const { __scopeSelect: n, onPlaced: o, ...a } = e,
                    s = ke(Ve, n),
                    l = Ue(Ve, n),
                    [c, u] = r.useState(null),
                    [p, h] = r.useState(null),
                    v = d(t, (e) => h(e)),
                    m = Re(n),
                    g = r.useRef(!1),
                    y = r.useRef(!0),
                    { viewport: x, selectedItem: b, selectedItemText: S, focusSelectedItem: C } = l,
                    E = r.useCallback(() => {
                        if (s.trigger && s.valueNode && c && p && x && b && S) {
                            const e = s.trigger.getBoundingClientRect(),
                                t = p.getBoundingClientRect(),
                                n = s.valueNode.getBoundingClientRect(),
                                r = S.getBoundingClientRect();
                            if ("rtl" !== s.dir) {
                                const o = r.left - t.left,
                                    a = n.left - o,
                                    s = e.left - a,
                                    l = e.width + s,
                                    d = Math.max(l, t.width),
                                    u = window.innerWidth - ze,
                                    p = i(a, [ze, Math.max(ze, u - d)]);
                                (c.style.minWidth = l + "px"), (c.style.left = p + "px");
                            } else {
                                const o = t.right - r.right,
                                    a = window.innerWidth - n.right - o,
                                    s = window.innerWidth - e.right - a,
                                    l = e.width + s,
                                    d = Math.max(l, t.width),
                                    u = window.innerWidth - ze,
                                    p = i(a, [ze, Math.max(ze, u - d)]);
                                (c.style.minWidth = l + "px"), (c.style.right = p + "px");
                            }
                            const a = m(),
                                l = window.innerHeight - 2 * ze,
                                d = x.scrollHeight,
                                u = window.getComputedStyle(p),
                                f = parseInt(u.borderTopWidth, 10),
                                h = parseInt(u.paddingTop, 10),
                                v = parseInt(u.borderBottomWidth, 10),
                                w = f + h + d + parseInt(u.paddingBottom, 10) + v,
                                y = Math.min(5 * b.offsetHeight, w),
                                C = window.getComputedStyle(x),
                                E = parseInt(C.paddingTop, 10),
                                P = parseInt(C.paddingBottom, 10),
                                R = e.top + e.height / 2 - ze,
                                _ = l - R,
                                j = b.offsetHeight / 2,
                                T = f + h + (b.offsetTop + j),
                                D = w - T;
                            if (T <= R) {
                                const e = a.length > 0 && b === a[a.length - 1].ref.current;
                                c.style.bottom = "0px";
                                const t = p.clientHeight - x.offsetTop - x.offsetHeight,
                                    n = T + Math.max(_, j + (e ? P : 0) + t + v);
                                c.style.height = n + "px";
                            } else {
                                const e = a.length > 0 && b === a[0].ref.current;
                                c.style.top = "0px";
                                const t = Math.max(R, f + x.offsetTop + (e ? E : 0) + j) + D;
                                (c.style.height = t + "px"), (x.scrollTop = T - R + x.offsetTop);
                            }
                            (c.style.margin = `${ze}px 0`), (c.style.minHeight = y + "px"), (c.style.maxHeight = l + "px"), o?.(), requestAnimationFrame(() => (g.current = !0));
                        }
                    }, [m, s.trigger, s.valueNode, c, p, x, b, S, s.dir, o]);
                (0, U.b)(() => E(), [E]);
                const [P, R] = r.useState();
                (0, U.b)(() => {
                    p && R(window.getComputedStyle(p).zIndex);
                }, [p]);
                const _ = r.useCallback(
                    (e) => {
                        e && !0 === y.current && (E(), C?.(), (y.current = !1));
                    },
                    [E, C],
                );
                return (0, f.jsx)(Ze, { scope: n, contentWrapper: c, shouldExpandOnScrollRef: g, onScrollButtonChange: _, children: (0, f.jsx)("div", { ref: u, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: P }, children: (0, f.jsx)(w.div, { ...a, ref: v, style: { boxSizing: "border-box", maxHeight: "100%", ...a.style } }) }) });
            });
            qe.displayName = "SelectItemAlignedPosition";
            var Xe = r.forwardRef((e, t) => {
                const { __scopeSelect: n, align: r = "start", collisionPadding: o = ze, ...i } = e,
                    a = De(n);
                return (0, f.jsx)(he, { ...a, ...i, ref: t, align: r, collisionPadding: o, style: { boxSizing: "border-box", ...i.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
            });
            Xe.displayName = "SelectPopperPosition";
            var [Ze, Ge] = je(Ve, {}),
                Je = "SelectViewport",
                Qe = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, nonce: o, ...i } = e,
                        s = Ue(Je, n),
                        l = Ge(Je, n),
                        c = d(t, s.onViewportChange),
                        u = r.useRef(0);
                    return (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: o }),
                            (0, f.jsx)(Pe.Slot, {
                                scope: n,
                                children: (0, f.jsx)(w.div, {
                                    "data-radix-select-viewport": "",
                                    role: "presentation",
                                    ...i,
                                    ref: c,
                                    style: { position: "relative", flex: 1, overflow: "hidden auto", ...i.style },
                                    onScroll: a(i.onScroll, (e) => {
                                        const t = e.currentTarget,
                                            { contentWrapper: n, shouldExpandOnScrollRef: r } = l;
                                        if (r?.current && n) {
                                            const e = Math.abs(u.current - t.scrollTop);
                                            if (e > 0) {
                                                const r = window.innerHeight - 2 * ze,
                                                    o = parseFloat(n.style.minHeight),
                                                    i = parseFloat(n.style.height),
                                                    a = Math.max(o, i);
                                                if (a < r) {
                                                    const o = a + e,
                                                        i = Math.min(r, o),
                                                        s = o - i;
                                                    (n.style.height = i + "px"), "0px" === n.style.bottom && ((t.scrollTop = s > 0 ? s : 0), (n.style.justifyContent = "flex-end"));
                                                }
                                            }
                                        }
                                        u.current = t.scrollTop;
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            Qe.displayName = Je;
            var et = "SelectGroup",
                [tt, nt] = je(et),
                rt = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = (0, B.M)();
                    return (0, f.jsx)(tt, { scope: n, id: o, children: (0, f.jsx)(w.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
                });
            rt.displayName = et;
            var ot = "SelectLabel",
                it = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = nt(ot, n);
                    return (0, f.jsx)(w.div, { id: o.id, ...r, ref: t });
                });
            it.displayName = ot;
            var at = "SelectItem",
                [st, lt] = je(at),
                ct = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, value: o, disabled: i = !1, textValue: s, ...l } = e,
                        c = ke(at, n),
                        u = Ue(at, n),
                        p = c.value === o,
                        [h, v] = r.useState(s ?? ""),
                        [m, g] = r.useState(!1),
                        y = d(t, (e) => u.itemRefCallback?.(e, o, i)),
                        x = (0, B.M)(),
                        b = r.useRef("touch"),
                        S = () => {
                            i || (c.onValueChange(o), c.onOpenChange(!1));
                        };
                    if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, f.jsx)(st, {
                        scope: n,
                        value: o,
                        disabled: i,
                        textId: x,
                        isSelected: p,
                        onItemTextChange: r.useCallback((e) => {
                            v((t) => t || (e?.textContent ?? "").trim());
                        }, []),
                        children: (0, f.jsx)(Pe.ItemSlot, {
                            scope: n,
                            value: o,
                            disabled: i,
                            textValue: h,
                            children: (0, f.jsx)(w.div, {
                                role: "option",
                                "aria-labelledby": x,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": p && m,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": i || void 0,
                                "data-disabled": i ? "" : void 0,
                                tabIndex: i ? void 0 : -1,
                                ...l,
                                ref: y,
                                onFocus: a(l.onFocus, () => g(!0)),
                                onBlur: a(l.onBlur, () => g(!1)),
                                onClick: a(l.onClick, () => {
                                    "mouse" !== b.current && S();
                                }),
                                onPointerUp: a(l.onPointerUp, () => {
                                    "mouse" === b.current && S();
                                }),
                                onPointerDown: a(l.onPointerDown, (e) => {
                                    b.current = e.pointerType;
                                }),
                                onPointerMove: a(l.onPointerMove, (e) => {
                                    (b.current = e.pointerType), i ? u.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({ preventScroll: !0 });
                                }),
                                onPointerLeave: a(l.onPointerLeave, (e) => {
                                    e.currentTarget === document.activeElement && u.onItemLeave?.();
                                }),
                                onKeyDown: a(l.onKeyDown, (e) => {
                                    ("" !== u.searchRef?.current && " " === e.key) || (Ce.includes(e.key) && S(), " " === e.key && e.preventDefault());
                                }),
                            }),
                        }),
                    });
                });
            ct.displayName = at;
            var dt = "SelectItemText",
                ut = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: i, style: a, ...s } = e,
                        l = ke(dt, n),
                        c = Ue(dt, n),
                        u = lt(dt, n),
                        p = Oe(dt, n),
                        [h, v] = r.useState(null),
                        m = d(
                            t,
                            (e) => v(e),
                            u.onItemTextChange,
                            (e) => c.itemTextRefCallback?.(e, u.value, u.disabled),
                        ),
                        g = h?.textContent,
                        y = r.useMemo(() => (0, f.jsx)("option", { value: u.value, disabled: u.disabled, children: g }, u.value), [u.disabled, u.value, g]),
                        { onNativeOptionAdd: x, onNativeOptionRemove: b } = p;
                    return (0, U.b)(() => (x(y), () => b(y)), [x, b, y]), (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(w.span, { id: u.textId, ...s, ref: m }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? o.createPortal(s.children, l.valueNode) : null] });
                });
            ut.displayName = dt;
            var pt = "SelectItemIndicator",
                ft = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e;
                    return lt(pt, n).isSelected ? (0, f.jsx)(w.span, { "aria-hidden": !0, ...r, ref: t }) : null;
                });
            ft.displayName = pt;
            var ht = "SelectScrollUpButton",
                vt = r.forwardRef((e, t) => {
                    const n = Ue(ht, e.__scopeSelect),
                        o = Ge(ht, e.__scopeSelect),
                        [i, a] = r.useState(!1),
                        s = d(t, o.onScrollButtonChange);
                    return (
                        (0, U.b)(() => {
                            if (n.viewport && n.isPositioned) {
                                let e = function () {
                                    const e = t.scrollTop > 0;
                                    a(e);
                                };
                                const t = n.viewport;
                                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
                            }
                        }, [n.viewport, n.isPositioned]),
                        i
                            ? (0, f.jsx)(wt, {
                                  ...e,
                                  ref: s,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            vt.displayName = ht;
            var mt = "SelectScrollDownButton",
                gt = r.forwardRef((e, t) => {
                    const n = Ue(mt, e.__scopeSelect),
                        o = Ge(mt, e.__scopeSelect),
                        [i, a] = r.useState(!1),
                        s = d(t, o.onScrollButtonChange);
                    return (
                        (0, U.b)(() => {
                            if (n.viewport && n.isPositioned) {
                                let e = function () {
                                    const e = t.scrollHeight - t.clientHeight,
                                        n = Math.ceil(t.scrollTop) < e;
                                    a(n);
                                };
                                const t = n.viewport;
                                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
                            }
                        }, [n.viewport, n.isPositioned]),
                        i
                            ? (0, f.jsx)(wt, {
                                  ...e,
                                  ref: s,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            gt.displayName = mt;
            var wt = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, onAutoScroll: o, ...i } = e,
                        s = Ue("SelectScrollButton", n),
                        l = r.useRef(null),
                        c = Re(n),
                        d = r.useCallback(() => {
                            null !== l.current && (window.clearInterval(l.current), (l.current = null));
                        }, []);
                    return (
                        r.useEffect(() => () => d(), [d]),
                        (0, U.b)(() => {
                            const e = c().find((e) => e.ref.current === document.activeElement);
                            e?.ref.current?.scrollIntoView({ block: "nearest" });
                        }, [c]),
                        (0, f.jsx)(w.div, {
                            "aria-hidden": !0,
                            ...i,
                            ref: t,
                            style: { flexShrink: 0, ...i.style },
                            onPointerDown: a(i.onPointerDown, () => {
                                null === l.current && (l.current = window.setInterval(o, 50));
                            }),
                            onPointerMove: a(i.onPointerMove, () => {
                                s.onItemLeave?.(), null === l.current && (l.current = window.setInterval(o, 50));
                            }),
                            onPointerLeave: a(i.onPointerLeave, () => {
                                d();
                            }),
                        })
                    );
                }),
                yt = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e;
                    return (0, f.jsx)(w.div, { "aria-hidden": !0, ...r, ref: t });
                });
            yt.displayName = "SelectSeparator";
            var xt = "SelectArrow",
                bt = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = De(n),
                        i = ke(xt, n),
                        a = Ue(xt, n);
                    return i.open && "popper" === a.position ? (0, f.jsx)(ve, { ...o, ...r, ref: t }) : null;
                });
            function St(e) {
                return "" === e || void 0 === e;
            }
            bt.displayName = xt;
            var Ct = r.forwardRef((e, t) => {
                const { value: n, ...o } = e,
                    i = r.useRef(null),
                    a = d(t, i),
                    s = (0, we.D)(n);
                return (
                    r.useEffect(() => {
                        const e = i.current,
                            t = window.HTMLSelectElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "value").set;
                        if (s !== n && r) {
                            const t = new Event("change", { bubbles: !0 });
                            r.call(e, n), e.dispatchEvent(t);
                        }
                    }, [s, n]),
                    (0, f.jsx)(ye, { asChild: !0, children: (0, f.jsx)("select", { ...o, ref: a, defaultValue: n }) })
                );
            });
            function Et(e) {
                const t = (0, x.W)(e),
                    n = r.useRef(""),
                    o = r.useRef(0),
                    i = r.useCallback(
                        (e) => {
                            const r = n.current + e;
                            t(r),
                                (function e(t) {
                                    (n.current = t), window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3));
                                })(r);
                        },
                        [t],
                    ),
                    a = r.useCallback(() => {
                        (n.current = ""), window.clearTimeout(o.current);
                    }, []);
                return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, a];
            }
            function Pt(e, t, n) {
                const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                    o = n ? e.indexOf(n) : -1;
                let i = ((a = e), (s = Math.max(o, 0)), a.map((e, t) => a[(s + t) % a.length]));
                var a, s;
                1 === r.length && (i = i.filter((e) => e !== n));
                const l = i.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
                return l !== n ? l : void 0;
            }
            Ct.displayName = "BubbleSelect";
            var Rt = Le,
                _t = Me,
                jt = Fe,
                Tt = He,
                Dt = Be,
                Nt = Ke,
                kt = Qe,
                It = rt,
                Ot = it,
                Lt = ct,
                At = ut,
                Mt = ft,
                Wt = vt,
                Ft = gt,
                Ht = yt;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-ec5b99a5.ed23861a.js.map

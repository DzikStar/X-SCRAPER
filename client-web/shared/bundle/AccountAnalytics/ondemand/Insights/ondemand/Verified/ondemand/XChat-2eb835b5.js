"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2eb835b5"],
    {
        613853: (e, t, r) => {
            r.d(t, { O: () => n });
            const n = r(202784).createContext({ register: () => {} });
            n.displayName = "PressResponderContext";
        },
        815536: (e, t, r) => {
            r.d(t, { A: () => c, l: () => l });
            var n = r(979870),
                i = r(852053),
                o = r(309371);
            let a = "default",
                s = "",
                u = new WeakMap();
            function l(e) {
                if ((0, n.gn)()) {
                    if ("default" === a) {
                        const t = (0, i.r)(e);
                        (s = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none");
                    }
                    a = "disabled";
                } else (e instanceof HTMLElement || e instanceof SVGElement) && (u.set(e, e.style.userSelect), (e.style.userSelect = "none"));
            }
            function c(e) {
                if ((0, n.gn)()) {
                    if ("disabled" !== a) return;
                    (a = "restoring"),
                        setTimeout(() => {
                            (0, o.Q)(() => {
                                if ("restoring" === a) {
                                    const t = (0, i.r)(e);
                                    "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = s || ""), (s = ""), (a = "default");
                                }
                            });
                        }, 300);
                } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
                    let t = u.get(e);
                    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), u.delete(e);
                }
            }
        },
        838369: (e, t, r) => {
            r.d(t, { K: () => a });
            var n = r(367325),
                i = r(202784),
                o = r(852053);
            function a(e) {
                let { isDisabled: t, onFocus: r, onBlur: a, onFocusChange: s } = e;
                const u = (0, i.useCallback)(
                        (e) => {
                            if (e.target === e.currentTarget) return a && a(e), s && s(!1), !0;
                        },
                        [a, s],
                    ),
                    l = (0, n.d)(u),
                    c = (0, i.useCallback)(
                        (e) => {
                            const t = (0, o.r)(e.target);
                            e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), s && s(!0), l(e));
                        },
                        [s, r, l],
                    );
                return { focusProps: { onFocus: !t && (r || s || a) ? c : void 0, onBlur: t || (!a && !s) ? void 0 : u } };
            }
        },
        253246: (e, t, r) => {
            r.d(t, { E: () => P, Jz: () => b, _w: () => k, mG: () => L });
            var n = r(979870),
                i = r(452772),
                o = r(852053),
                a = r(202784);
            let s = null,
                u = new Set(),
                l = new Map(),
                c = !1,
                d = !1;
            const g = { Tab: !0, Escape: !0 };
            function p(e, t) {
                for (let r of u) r(e, t);
            }
            function v(e) {
                (c = !0),
                    (function (e) {
                        return !(e.metaKey || (!(0, n.V5)() && e.altKey) || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key);
                    })(e) && ((s = "keyboard"), p("keyboard", e));
            }
            function f(e) {
                (s = "pointer"), ("mousedown" !== e.type && "pointerdown" !== e.type) || ((c = !0), p("pointer", e));
            }
            function T(e) {
                (0, i.Z)(e) && ((c = !0), (s = "virtual"));
            }
            function y(e) {
                e.target !== window && e.target !== document && (c || d || ((s = "virtual"), p("virtual", e)), (c = !1), (d = !1));
            }
            function E() {
                (c = !1), (d = !0);
            }
            function m(e) {
                if ("undefined" == typeof window || l.get((0, o.k)(e))) return;
                const t = (0, o.k)(e),
                    r = (0, o.r)(e);
                let n = t.HTMLElement.prototype.focus;
                (t.HTMLElement.prototype.focus = function () {
                    (c = !0), n.apply(this, arguments);
                }),
                    r.addEventListener("keydown", v, !0),
                    r.addEventListener("keyup", v, !0),
                    r.addEventListener("click", T, !0),
                    t.addEventListener("focus", y, !0),
                    t.addEventListener("blur", E, !1),
                    "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", f, !0), r.addEventListener("pointermove", f, !0), r.addEventListener("pointerup", f, !0)) : (r.addEventListener("mousedown", f, !0), r.addEventListener("mousemove", f, !0), r.addEventListener("mouseup", f, !0)),
                    t.addEventListener(
                        "beforeunload",
                        () => {
                            h(e);
                        },
                        { once: !0 },
                    ),
                    l.set(t, { focus: n });
            }
            const h = (e, t) => {
                const r = (0, o.k)(e),
                    n = (0, o.r)(e);
                t && n.removeEventListener("DOMContentLoaded", t), l.has(r) && ((r.HTMLElement.prototype.focus = l.get(r).focus), n.removeEventListener("keydown", v, !0), n.removeEventListener("keyup", v, !0), n.removeEventListener("click", T, !0), r.removeEventListener("focus", y, !0), r.removeEventListener("blur", E, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", f, !0), n.removeEventListener("pointermove", f, !0), n.removeEventListener("pointerup", f, !0)) : (n.removeEventListener("mousedown", f, !0), n.removeEventListener("mousemove", f, !0), n.removeEventListener("mouseup", f, !0)), l.delete(r));
            };
            function P() {
                return "pointer" !== s;
            }
            function b() {
                return s;
            }
            function k(e) {
                (s = e), p(e, null);
            }
            "undefined" != typeof document &&
                (function (e) {
                    const t = (0, o.r)(e);
                    let r;
                    "loading" !== t.readyState
                        ? m(e)
                        : ((r = () => {
                              m(e);
                          }),
                          t.addEventListener("DOMContentLoaded", r));
                })();
            const w = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
            function L(e, t, r) {
                m(),
                    (0, a.useEffect)(() => {
                        let t = (t, n) => {
                            (function (e, t, r) {
                                var n;
                                const i = "undefined" != typeof window ? (0, o.k)(null == r ? void 0 : r.target).HTMLInputElement : HTMLInputElement,
                                    a = "undefined" != typeof window ? (0, o.k)(null == r ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                    s = "undefined" != typeof window ? (0, o.k)(null == r ? void 0 : r.target).HTMLElement : HTMLElement,
                                    u = "undefined" != typeof window ? (0, o.k)(null == r ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
                                return !((e = e || ((null == r ? void 0 : r.target) instanceof i && !w.has(null == r || null === (n = r.target) || void 0 === n ? void 0 : n.type)) || (null == r ? void 0 : r.target) instanceof a || ((null == r ? void 0 : r.target) instanceof s && (null == r ? void 0 : r.target.isContentEditable))) && "keyboard" === t && r instanceof u && !g[r.key]);
                            })(!!(null == r ? void 0 : r.isTextInput), t, n) && e(P());
                        };
                        return (
                            u.add(t),
                            () => {
                                u.delete(t);
                            }
                        );
                    }, t);
            }
        },
        525757: (e, t, r) => {
            r.d(t, { L: () => o });
            var n = r(367325),
                i = r(202784);
            function o(e) {
                let { isDisabled: t, onBlurWithin: r, onFocusWithin: o, onFocusWithinChange: a } = e,
                    s = (0, i.useRef)({ isFocusWithin: !1 }),
                    u = (0, i.useCallback)(
                        (e) => {
                            s.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((s.current.isFocusWithin = !1), r && r(e), a && a(!1));
                        },
                        [r, a, s],
                    ),
                    l = (0, n.d)(u),
                    c = (0, i.useCallback)(
                        (e) => {
                            s.current.isFocusWithin || document.activeElement !== e.target || (o && o(e), a && a(!0), (s.current.isFocusWithin = !0), l(e));
                        },
                        [o, a, l],
                    );
                return t ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } } : { focusWithinProps: { onFocus: c, onBlur: u } };
            }
        },
        80958: (e, t, r) => {
            r.d(t, { X: () => l });
            var n = r(202784);
            let i = !1,
                o = 0;
            function a() {
                (i = !0),
                    setTimeout(() => {
                        i = !1;
                    }, 50);
            }
            function s(e) {
                "touch" === e.pointerType && a();
            }
            function u() {
                if ("undefined" != typeof document)
                    return (
                        "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", s) : document.addEventListener("touchend", a),
                        o++,
                        () => {
                            o--, o > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", s) : document.removeEventListener("touchend", a));
                        }
                    );
            }
            function l(e) {
                let { onHoverStart: t, onHoverChange: r, onHoverEnd: o, isDisabled: a } = e,
                    [s, l] = (0, n.useState)(!1),
                    c = (0, n.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
                (0, n.useEffect)(u, []);
                let { hoverProps: d, triggerHoverEnd: g } = (0, n.useMemo)(() => {
                    let e = (e, n) => {
                            if (((c.pointerType = n), a || "touch" === n || c.isHovered || !e.currentTarget.contains(e.target))) return;
                            c.isHovered = !0;
                            let i = e.currentTarget;
                            (c.target = i), t && t({ type: "hoverstart", target: i, pointerType: n }), r && r(!0), l(!0);
                        },
                        n = (e, t) => {
                            if (((c.pointerType = ""), (c.target = null), "touch" === t || !c.isHovered)) return;
                            c.isHovered = !1;
                            let n = e.currentTarget;
                            o && o({ type: "hoverend", target: n, pointerType: t }), r && r(!1), l(!1);
                        },
                        s = {};
                    return (
                        "undefined" != typeof PointerEvent
                            ? ((s.onPointerEnter = (t) => {
                                  (i && "mouse" === t.pointerType) || e(t, t.pointerType);
                              }),
                              (s.onPointerLeave = (e) => {
                                  !a && e.currentTarget.contains(e.target) && n(e, e.pointerType);
                              }))
                            : ((s.onTouchStart = () => {
                                  c.ignoreEmulatedMouseEvents = !0;
                              }),
                              (s.onMouseEnter = (t) => {
                                  c.ignoreEmulatedMouseEvents || i || e(t, "mouse"), (c.ignoreEmulatedMouseEvents = !1);
                              }),
                              (s.onMouseLeave = (e) => {
                                  !a && e.currentTarget.contains(e.target) && n(e, "mouse");
                              })),
                        { hoverProps: s, triggerHoverEnd: n }
                    );
                }, [t, r, o, a, c]);
                return (
                    (0, n.useEffect)(() => {
                        a && g({ currentTarget: c.target }, c.pointerType);
                    }, [a]),
                    { hoverProps: d, isHovered: s }
                );
            }
        },
        527355: (e, t, r) => {
            function n(e) {
                if (!e) return;
                let t = !0;
                return (r) => {
                    let n = {
                        ...r,
                        preventDefault() {
                            r.preventDefault();
                        },
                        isDefaultPrevented: () => r.isDefaultPrevented(),
                        stopPropagation() {},
                        continuePropagation() {
                            t = !1;
                        },
                    };
                    e(n), t && r.stopPropagation();
                };
            }
            function i(e) {
                return { keyboardProps: e.isDisabled ? {} : { onKeyDown: n(e.onKeyDown), onKeyUp: n(e.onKeyUp) } };
            }
            r.d(t, { v: () => i });
        },
        367325: (e, t, r) => {
            r.d(t, { d: () => s });
            var n = r(202784),
                i = r(426636),
                o = r(985378);
            class a {
                isDefaultPrevented() {
                    return this.nativeEvent.defaultPrevented;
                }
                preventDefault() {
                    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
                }
                stopPropagation() {
                    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
                }
                isPropagationStopped() {
                    return !1;
                }
                persist() {}
                constructor(e, t) {
                    (this.nativeEvent = t), (this.target = t.target), (this.currentTarget = t.currentTarget), (this.relatedTarget = t.relatedTarget), (this.bubbles = t.bubbles), (this.cancelable = t.cancelable), (this.defaultPrevented = t.defaultPrevented), (this.eventPhase = t.eventPhase), (this.isTrusted = t.isTrusted), (this.timeStamp = t.timeStamp), (this.type = e);
                }
            }
            function s(e) {
                let t = (0, n.useRef)({ isFocused: !1, observer: null });
                (0, i.b)(() => {
                    const e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), (e.observer = null));
                    };
                }, []);
                let r = (0, o.i)((t) => {
                    null == e || e(t);
                });
                return (0, n.useCallback)(
                    (e) => {
                        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                            t.current.isFocused = !0;
                            let n = e.target,
                                i = (e) => {
                                    (t.current.isFocused = !1), n.disabled && r(new a("blur", e)), t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                                };
                            n.addEventListener("focusout", i, { once: !0 }),
                                (t.current.observer = new MutationObserver(() => {
                                    if (t.current.isFocused && n.disabled) {
                                        var e;
                                        null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                        let r = n === document.activeElement ? null : document.activeElement;
                                        n.dispatchEvent(new FocusEvent("blur", { relatedTarget: r })), n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: r }));
                                    }
                                })),
                                t.current.observer.observe(n, { attributes: !0, attributeFilter: ["disabled"] });
                        }
                    },
                    [r],
                );
            }
        },
        486621: (e, t, r) => {
            r.d(t, { n: () => F });
            var n = r(23296),
                i = r(277108),
                o = r(391218),
                a = r(373363),
                s = r(815536),
                u = r(613853),
                l = r(588412),
                c = r(650629),
                d = r(280956),
                g = r(305864),
                p = r(121203),
                v = r(985378),
                f = r(852053),
                T = r(760080),
                y = r(979870),
                E = r(452772),
                m = r(454338),
                h = r(202784);
            var P = new WeakMap();
            class b {
                continuePropagation() {
                    (0, d._)(this, P, !1);
                }
                get shouldStopPropagation() {
                    return (0, l._)(this, P);
                }
                constructor(e, t, r, n) {
                    var i;
                    (0, c._)(this, P, { writable: !0, value: void 0 }), (0, d._)(this, P, !0);
                    let o = null !== (i = null == n ? void 0 : n.target) && void 0 !== i ? i : r.currentTarget;
                    const a = null == o ? void 0 : o.getBoundingClientRect();
                    let s,
                        u,
                        l = 0,
                        g = null;
                    null != r.clientX && null != r.clientY && ((u = r.clientX), (g = r.clientY)), a && (null != u && null != g ? ((s = u - a.left), (l = g - a.top)) : ((s = a.width / 2), (l = a.height / 2))), (this.type = e), (this.pointerType = t), (this.target = r.currentTarget), (this.shiftKey = r.shiftKey), (this.metaKey = r.metaKey), (this.ctrlKey = r.ctrlKey), (this.altKey = r.altKey), (this.x = s), (this.y = l);
                }
            }
            const k = Symbol("linkClicked");
            function w(e) {
                let {
                        onPress: t,
                        onPressChange: r,
                        onPressStart: n,
                        onPressEnd: a,
                        onPressUp: l,
                        isDisabled: c,
                        isPressed: d,
                        preventFocusOnPress: P,
                        shouldCancelOnPointerExit: w,
                        allowTextSelectionOnPress: A,
                        ref: x,
                        ...F
                    } = (function (e) {
                        let t = (0, h.useContext)(u.O);
                        if (t) {
                            let { register: r, ...n } = t;
                            (e = (0, i.d)(n, e)), r();
                        }
                        return (0, g.l)(t, e.ref), e;
                    })(e),
                    [I, _] = (0, h.useState)(!1),
                    W = (0, h.useRef)({ isPressed: !1, ignoreEmulatedMouseEvents: !1, ignoreClickAfterPress: !1, didFirePressStart: !1, isTriggeringEvent: !1, activePointerId: null, target: null, isOverTarget: !1, pointerType: null }),
                    { addGlobalListener: R, removeAllGlobalListeners: X } = (0, p.x)(),
                    Y = (0, v.i)((e, t) => {
                        let i = W.current;
                        if (c || i.didFirePressStart) return !1;
                        let o = !0;
                        if (((i.isTriggeringEvent = !0), n)) {
                            let r = new b("pressstart", t, e);
                            n(r), (o = r.shouldStopPropagation);
                        }
                        return r && r(!0), (i.isTriggeringEvent = !1), (i.didFirePressStart = !0), _(!0), o;
                    }),
                    B = (0, v.i)((e, n, i = !0) => {
                        let o = W.current;
                        if (!o.didFirePressStart) return !1;
                        (o.ignoreClickAfterPress = !0), (o.didFirePressStart = !1), (o.isTriggeringEvent = !0);
                        let s = !0;
                        if (a) {
                            let t = new b("pressend", n, e);
                            a(t), (s = t.shouldStopPropagation);
                        }
                        if ((r && r(!1), _(!1), t && i && !c)) {
                            let r = new b("press", n, e);
                            t(r), s && (s = r.shouldStopPropagation);
                        }
                        return (o.isTriggeringEvent = !1), s;
                    }),
                    U = (0, v.i)((e, t) => {
                        let r = W.current;
                        if (c) return !1;
                        if (l) {
                            r.isTriggeringEvent = !0;
                            let n = new b("pressup", t, e);
                            return l(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
                        }
                        return !0;
                    }),
                    G = (0, v.i)((e) => {
                        let t = W.current;
                        t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && B(C(t.target, e), t.pointerType, !1), (t.isPressed = !1), (t.isOverTarget = !1), (t.activePointerId = null), (t.pointerType = null), X(), A || (0, s.A)(t.target));
                    }),
                    N = (0, v.i)((e) => {
                        w && G(e);
                    }),
                    $ = (0, h.useMemo)(() => {
                        let e = W.current,
                            t = {
                                onKeyDown(t) {
                                    if (M(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                                        var n;
                                        H(t.target, t.key) && t.preventDefault();
                                        let i = !0;
                                        if (!e.isPressed && !t.repeat) {
                                            (e.target = t.currentTarget), (e.isPressed = !0), (i = Y(t, "keyboard"));
                                            let n = t.currentTarget,
                                                o = (t) => {
                                                    M(t, n) && !t.repeat && n.contains(t.target) && e.target && U(C(e.target, t), "keyboard");
                                                };
                                            R((0, f.r)(t.currentTarget), "keyup", (0, T.t)(o, r), !0);
                                        }
                                        i && t.stopPropagation(), t.metaKey && (0, y.V5)() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent));
                                    } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                                },
                                onClick(t) {
                                    if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !o.nG.isOpening) {
                                        let r = !0;
                                        if ((c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, E.Z)(t.nativeEvent)))) {
                                            c || P || (0, m.A)(t.currentTarget);
                                            let e = Y(t, "virtual"),
                                                n = U(t, "virtual"),
                                                i = B(t, "virtual");
                                            r = e && n && i;
                                        }
                                        (e.ignoreEmulatedMouseEvents = !1), (e.ignoreClickAfterPress = !1), r && t.stopPropagation();
                                    }
                                },
                            },
                            r = (t) => {
                                var r;
                                if (e.isPressed && e.target && M(t, e.target)) {
                                    var n;
                                    H(t.target, t.key) && t.preventDefault();
                                    let r = t.target;
                                    B(C(e.target, t), "keyboard", e.target.contains(r)), X(), "Enter" !== t.key && L(e.target) && e.target.contains(r) && !t[k] && ((t[k] = !0), (0, o.nG)(e.target, t, !1)), (e.isPressed = !1), null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key);
                                } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                                    var i;
                                    let t = e.metaKeyEvents;
                                    e.metaKeyEvents = void 0;
                                    for (let r of t.values()) null === (i = e.target) || void 0 === i || i.dispatchEvent(new KeyboardEvent("keyup", r));
                                }
                            };
                        if ("undefined" != typeof PointerEvent) {
                            (t.onPointerDown = (t) => {
                                if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                                if ((0, E.c)(t.nativeEvent)) return void (e.pointerType = "virtual");
                                D(t.currentTarget) && t.preventDefault(), (e.pointerType = t.pointerType);
                                let o = !0;
                                e.isPressed || ((e.isPressed = !0), (e.isOverTarget = !0), (e.activePointerId = t.pointerId), (e.target = t.currentTarget), c || P || (0, m.A)(t.currentTarget), A || (0, s.l)(e.target), (o = Y(t, e.pointerType)), R((0, f.r)(t.currentTarget), "pointermove", r, !1), R((0, f.r)(t.currentTarget), "pointerup", n, !1), R((0, f.r)(t.currentTarget), "pointercancel", i, !1)), o && t.stopPropagation();
                            }),
                                (t.onMouseDown = (e) => {
                                    e.currentTarget.contains(e.target) && 0 === e.button && (D(e.currentTarget) && e.preventDefault(), e.stopPropagation());
                                }),
                                (t.onPointerUp = (t) => {
                                    t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && O(t, t.currentTarget) && U(t, e.pointerType || t.pointerType);
                                });
                            let r = (t) => {
                                    t.pointerId === e.activePointerId && (e.target && O(t, e.target) ? e.isOverTarget || null == e.pointerType || ((e.isOverTarget = !0), Y(C(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), B(C(e.target, t), e.pointerType, !1), N(t)));
                                },
                                n = (t) => {
                                    t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (O(t, e.target) && null != e.pointerType ? B(C(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && B(C(e.target, t), e.pointerType, !1), (e.isPressed = !1), (e.isOverTarget = !1), (e.activePointerId = null), (e.pointerType = null), X(), A || (0, s.A)(e.target));
                                },
                                i = (e) => {
                                    G(e);
                                };
                            t.onDragStart = (e) => {
                                e.currentTarget.contains(e.target) && G(e);
                            };
                        } else {
                            (t.onMouseDown = (t) => {
                                if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                                if ((D(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents)) return void t.stopPropagation();
                                (e.isPressed = !0), (e.isOverTarget = !0), (e.target = t.currentTarget), (e.pointerType = (0, E.Z)(t.nativeEvent) ? "virtual" : "mouse"), c || P || (0, m.A)(t.currentTarget), Y(t, e.pointerType) && t.stopPropagation(), R((0, f.r)(t.currentTarget), "mouseup", r, !1);
                            }),
                                (t.onMouseEnter = (t) => {
                                    if (!t.currentTarget.contains(t.target)) return;
                                    let r = !0;
                                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !0), (r = Y(t, e.pointerType))), r && t.stopPropagation();
                                }),
                                (t.onMouseLeave = (t) => {
                                    if (!t.currentTarget.contains(t.target)) return;
                                    let r = !0;
                                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !1), (r = B(t, e.pointerType, !1)), N(t)), r && t.stopPropagation();
                                }),
                                (t.onMouseUp = (t) => {
                                    t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || U(t, e.pointerType || "mouse"));
                                });
                            let r = (t) => {
                                0 === t.button && ((e.isPressed = !1), X(), e.ignoreEmulatedMouseEvents ? (e.ignoreEmulatedMouseEvents = !1) : (e.target && O(t, e.target) && null != e.pointerType ? B(C(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && B(C(e.target, t), e.pointerType, !1), (e.isOverTarget = !1)));
                            };
                            (t.onTouchStart = (t) => {
                                if (!t.currentTarget.contains(t.target)) return;
                                let r = (function (e) {
                                    const { targetTouches: t } = e;
                                    return t.length > 0 ? t[0] : null;
                                })(t.nativeEvent);
                                r && ((e.activePointerId = r.identifier), (e.ignoreEmulatedMouseEvents = !0), (e.isOverTarget = !0), (e.isPressed = !0), (e.target = t.currentTarget), (e.pointerType = "touch"), c || P || (0, m.A)(t.currentTarget), A || (0, s.l)(e.target), Y(K(e.target, t), e.pointerType) && t.stopPropagation(), R((0, f.k)(t.currentTarget), "scroll", n, !0));
                            }),
                                (t.onTouchMove = (t) => {
                                    if (!t.currentTarget.contains(t.target)) return;
                                    if (!e.isPressed) return void t.stopPropagation();
                                    let r = S(t.nativeEvent, e.activePointerId),
                                        n = !0;
                                    r && O(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || ((e.isOverTarget = !0), (n = Y(K(e.target, t), e.pointerType))) : e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), (n = B(K(e.target, t), e.pointerType, !1)), N(K(e.target, t))), n && t.stopPropagation();
                                }),
                                (t.onTouchEnd = (t) => {
                                    if (!t.currentTarget.contains(t.target)) return;
                                    if (!e.isPressed) return void t.stopPropagation();
                                    let r = S(t.nativeEvent, e.activePointerId),
                                        n = !0;
                                    r && O(r, t.currentTarget) && null != e.pointerType ? (U(K(e.target, t), e.pointerType), (n = B(K(e.target, t), e.pointerType))) : e.isOverTarget && null != e.pointerType && (n = B(K(e.target, t), e.pointerType, !1)), n && t.stopPropagation(), (e.isPressed = !1), (e.activePointerId = null), (e.isOverTarget = !1), (e.ignoreEmulatedMouseEvents = !0), e.target && !A && (0, s.A)(e.target), X();
                                }),
                                (t.onTouchCancel = (t) => {
                                    t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && G(K(e.target, t)));
                                });
                            let n = (t) => {
                                e.isPressed && t.target.contains(e.target) && G({ currentTarget: e.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
                            };
                            t.onDragStart = (e) => {
                                e.currentTarget.contains(e.target) && G(e);
                            };
                        }
                        return t;
                    }, [R, c, P, X, A, G, N, B, Y, U]);
                return (
                    (0, h.useEffect)(
                        () => () => {
                            var e;
                            A || (0, s.A)(null !== (e = W.current.target) && void 0 !== e ? e : void 0);
                        },
                        [A],
                    ),
                    { isPressed: d || I, pressProps: (0, i.d)(F, $) }
                );
            }
            function L(e) {
                return "A" === e.tagName && e.hasAttribute("href");
            }
            function M(e, t) {
                const { key: r, code: n } = e,
                    i = t,
                    o = i.getAttribute("role");
                return !(("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n) || (i instanceof (0, f.k)(i).HTMLInputElement && !x(i, r)) || i instanceof (0, f.k)(i).HTMLTextAreaElement || i.isContentEditable || (("link" === o || (!o && L(i))) && "Enter" !== r));
            }
            function S(e, t) {
                const r = e.changedTouches;
                for (let e = 0; e < r.length; e++) {
                    const n = r[e];
                    if (n.identifier === t) return n;
                }
                return null;
            }
            function K(e, t) {
                let r = 0,
                    n = 0;
                return t.targetTouches && 1 === t.targetTouches.length && ((r = t.targetTouches[0].clientX), (n = t.targetTouches[0].clientY)), { currentTarget: e, shiftKey: t.shiftKey, ctrlKey: t.ctrlKey, metaKey: t.metaKey, altKey: t.altKey, clientX: r, clientY: n };
            }
            function C(e, t) {
                let r = t.clientX,
                    n = t.clientY;
                return { currentTarget: e, shiftKey: t.shiftKey, ctrlKey: t.ctrlKey, metaKey: t.metaKey, altKey: t.altKey, clientX: r, clientY: n };
            }
            function O(e, t) {
                let r = t.getBoundingClientRect(),
                    n = (function (e) {
                        let t = 0,
                            r = 0;
                        return void 0 !== e.width ? (t = e.width / 2) : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? (r = e.height / 2) : void 0 !== e.radiusY && (r = e.radiusY), { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
                    })(e);
                return (o = n), !((i = r).left > o.right || o.left > i.right || i.top > o.bottom || o.top > i.bottom);
                var i, o;
            }
            function D(e) {
                return !(e instanceof HTMLElement && e.hasAttribute("draggable"));
            }
            function H(e, t) {
                return e instanceof HTMLInputElement ? !x(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !L(e);
            }
            const A = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
            function x(e, t) {
                return "checkbox" === e.type || "radio" === e.type ? " " === t : A.has(e.type);
            }
            function F(e, t) {
                let { elementType: r = "a", onPress: s, onPressStart: u, onPressEnd: l, onClick: c, isDisabled: d, ...g } = e,
                    p = {};
                "a" !== r && (p = { role: "link", tabIndex: d ? void 0 : 0 });
                let { focusableProps: v } = (0, a.k)(e, t),
                    { pressProps: f, isPressed: T } = w({ onPress: s, onPressStart: u, onPressEnd: l, isDisabled: d, ref: t }),
                    y = (0, n.z)(g, { labelable: !0 }),
                    E = (0, i.d)(v, f),
                    m = (0, o.tv)(),
                    h = (0, o.eY)(e);
                return {
                    isPressed: T,
                    linkProps: (0, i.d)(y, h, {
                        ...E,
                        ...p,
                        "aria-disabled": d || void 0,
                        "aria-current": e["aria-current"],
                        onClick: (t) => {
                            var r;
                            null === (r = f.onClick) || void 0 === r || r.call(f, t), c && c(t), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && (0, o.b0)(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions));
                        },
                    }),
                };
            }
        },
        623047: (e, t, r) => {
            r.d(t, { Av: () => p, gP: () => l });
            var n = r(202784);
            const i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
                o = n.createContext(i),
                a = n.createContext(!1);
            Boolean("undefined" != typeof window && window.document && window.document.createElement);
            let s = new WeakMap();
            function u(e = !1) {
                let t = (0, n.useContext)(o),
                    r = (0, n.useRef)(null);
                if (null === r.current && !e) {
                    var i, a;
                    let e = null === (a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a || null === (i = a.ReactCurrentOwner) || void 0 === i ? void 0 : i.current;
                    if (e) {
                        let r = s.get(e);
                        null == r ? s.set(e, { id: t.current, state: e.memoizedState }) : e.memoizedState !== r.state && ((t.current = r.id), s.delete(e));
                    }
                    r.current = ++t.current;
                }
                return r.current;
            }
            const l =
                "function" == typeof n.useId
                    ? function (e) {
                          let t = n.useId(),
                              [r] = (0, n.useState)(p());
                          return e || `${r ? "react-aria" : `react-aria${i.prefix}`}-${t}`;
                      }
                    : function (e) {
                          let t = (0, n.useContext)(o),
                              r = u(!!e),
                              i = `react-aria${t.prefix}`;
                          return e || `${i}-${r}`;
                      };
            function c() {
                return !1;
            }
            function d() {
                return !0;
            }
            function g(e) {
                return () => {};
            }
            function p() {
                return "function" == typeof n.useSyncExternalStore ? n.useSyncExternalStore(g, c, d) : (0, n.useContext)(a);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2eb835b5.c2dc4d5a.js.map

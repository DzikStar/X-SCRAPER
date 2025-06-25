"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-2eb835b5"],
    {
        202136: (e, t, n) => {
            n.d(t, { j: () => g });
            const r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
                o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
            function i(e) {
                if (Intl.Locale) {
                    let t = new Intl.Locale(e).maximize(),
                        n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (t.script) return r.has(t.script);
                }
                let t = e.split("-")[0];
                return o.has(t);
            }
            var a = n(202784),
                u = n(623047);
            const l = Symbol.for("react-aria.i18n.locale");
            function s() {
                let e = ("undefined" != typeof window && window[l]) || ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch (t) {
                    e = "en-US";
                }
                return { locale: e, direction: i(e) ? "rtl" : "ltr" };
            }
            let d = s(),
                c = new Set();
            function p() {
                d = s();
                for (let e of c) e(d);
            }
            function v() {
                let e = (0, u.Av)(),
                    [t, n] = (0, a.useState)(d);
                return (
                    (0, a.useEffect)(
                        () => (
                            0 === c.size && window.addEventListener("languagechange", p),
                            c.add(n),
                            () => {
                                c.delete(n), 0 === c.size && window.removeEventListener("languagechange", p);
                            }
                        ),
                        [],
                    ),
                    e ? { locale: "en-US", direction: "ltr" } : t
                );
            }
            const f = a.createContext(null);
            function g() {
                let e = v();
                return (0, a.useContext)(f) || e;
            }
        },
        952957: (e, t, n) => {
            n.d(t, { U: () => a });
            var r = n(202136),
                o = n(489968),
                i = n(202784);
            function a(e = {}) {
                let { locale: t } = (0, r.j)();
                return (0, i.useMemo)(() => new (0, o.e)(t, e), [t, e]);
            }
        },
        838369: (e, t, n) => {
            n.d(t, { K: () => a });
            var r = n(367325),
                o = n(202784),
                i = n(852053);
            function a(e) {
                let { isDisabled: t, onFocus: n, onBlur: a, onFocusChange: u } = e;
                const l = (0, o.useCallback)(
                        (e) => {
                            if (e.target === e.currentTarget) return a && a(e), u && u(!1), !0;
                        },
                        [a, u],
                    ),
                    s = (0, r.d)(l),
                    d = (0, o.useCallback)(
                        (e) => {
                            const t = (0, i.r)(e.target);
                            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), u && u(!0), s(e));
                        },
                        [u, n, s],
                    );
                return { focusProps: { onFocus: !t && (n || u || a) ? d : void 0, onBlur: t || (!a && !u) ? void 0 : l } };
            }
        },
        253246: (e, t, n) => {
            n.d(t, { E: () => T, Jz: () => E, _w: () => P, mG: () => k });
            var r = n(979870),
                o = n(452772),
                i = n(852053),
                a = n(202784);
            let u = null,
                l = new Set(),
                s = new Map(),
                d = !1,
                c = !1;
            const p = { Tab: !0, Escape: !0 };
            function v(e, t) {
                for (let n of l) n(e, t);
            }
            function f(e) {
                (d = !0),
                    (function (e) {
                        return !(e.metaKey || (!(0, r.V5)() && e.altKey) || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key);
                    })(e) && ((u = "keyboard"), v("keyboard", e));
            }
            function g(e) {
                (u = "pointer"), ("mousedown" !== e.type && "pointerdown" !== e.type) || ((d = !0), v("pointer", e));
            }
            function m(e) {
                (0, o.Z)(e) && ((d = !0), (u = "virtual"));
            }
            function b(e) {
                e.target !== window && e.target !== document && (d || c || ((u = "virtual"), v("virtual", e)), (d = !1), (c = !1));
            }
            function h() {
                (d = !1), (c = !0);
            }
            function y(e) {
                if ("undefined" == typeof window || s.get((0, i.k)(e))) return;
                const t = (0, i.k)(e),
                    n = (0, i.r)(e);
                let r = t.HTMLElement.prototype.focus;
                (t.HTMLElement.prototype.focus = function () {
                    (d = !0), r.apply(this, arguments);
                }),
                    n.addEventListener("keydown", f, !0),
                    n.addEventListener("keyup", f, !0),
                    n.addEventListener("click", m, !0),
                    t.addEventListener("focus", b, !0),
                    t.addEventListener("blur", h, !1),
                    "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", g, !0), n.addEventListener("pointermove", g, !0), n.addEventListener("pointerup", g, !0)) : (n.addEventListener("mousedown", g, !0), n.addEventListener("mousemove", g, !0), n.addEventListener("mouseup", g, !0)),
                    t.addEventListener(
                        "beforeunload",
                        () => {
                            w(e);
                        },
                        { once: !0 },
                    ),
                    s.set(t, { focus: r });
            }
            const w = (e, t) => {
                const n = (0, i.k)(e),
                    r = (0, i.r)(e);
                t && r.removeEventListener("DOMContentLoaded", t), s.has(n) && ((n.HTMLElement.prototype.focus = s.get(n).focus), r.removeEventListener("keydown", f, !0), r.removeEventListener("keyup", f, !0), r.removeEventListener("click", m, !0), n.removeEventListener("focus", b, !0), n.removeEventListener("blur", h, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", g, !0), r.removeEventListener("pointermove", g, !0), r.removeEventListener("pointerup", g, !0)) : (r.removeEventListener("mousedown", g, !0), r.removeEventListener("mousemove", g, !0), r.removeEventListener("mouseup", g, !0)), s.delete(n));
            };
            function T() {
                return "pointer" !== u;
            }
            function E() {
                return u;
            }
            function P(e) {
                (u = e), v(e, null);
            }
            "undefined" != typeof document &&
                (function (e) {
                    const t = (0, i.r)(e);
                    let n;
                    "loading" !== t.readyState
                        ? y(e)
                        : ((n = () => {
                              y(e);
                          }),
                          t.addEventListener("DOMContentLoaded", n));
                })();
            const L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
            function k(e, t, n) {
                y(),
                    (0, a.useEffect)(() => {
                        let t = (t, r) => {
                            (function (e, t, n) {
                                var r;
                                const o = "undefined" != typeof window ? (0, i.k)(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
                                    a = "undefined" != typeof window ? (0, i.k)(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                    u = "undefined" != typeof window ? (0, i.k)(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                                    l = "undefined" != typeof window ? (0, i.k)(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
                                return !((e = e || ((null == n ? void 0 : n.target) instanceof o && !L.has(null == n || null === (r = n.target) || void 0 === r ? void 0 : r.type)) || (null == n ? void 0 : n.target) instanceof a || ((null == n ? void 0 : n.target) instanceof u && (null == n ? void 0 : n.target.isContentEditable))) && "keyboard" === t && n instanceof l && !p[n.key]);
                            })(!!(null == n ? void 0 : n.isTextInput), t, r) && e(T());
                        };
                        return (
                            l.add(t),
                            () => {
                                l.delete(t);
                            }
                        );
                    }, t);
            }
        },
        525757: (e, t, n) => {
            n.d(t, { L: () => i });
            var r = n(367325),
                o = n(202784);
            function i(e) {
                let { isDisabled: t, onBlurWithin: n, onFocusWithin: i, onFocusWithinChange: a } = e,
                    u = (0, o.useRef)({ isFocusWithin: !1 }),
                    l = (0, o.useCallback)(
                        (e) => {
                            u.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((u.current.isFocusWithin = !1), n && n(e), a && a(!1));
                        },
                        [n, a, u],
                    ),
                    s = (0, r.d)(l),
                    d = (0, o.useCallback)(
                        (e) => {
                            u.current.isFocusWithin || document.activeElement !== e.target || (i && i(e), a && a(!0), (u.current.isFocusWithin = !0), s(e));
                        },
                        [i, a, s],
                    );
                return t ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } } : { focusWithinProps: { onFocus: d, onBlur: l } };
            }
        },
        80958: (e, t, n) => {
            n.d(t, { X: () => s });
            var r = n(202784);
            let o = !1,
                i = 0;
            function a() {
                (o = !0),
                    setTimeout(() => {
                        o = !1;
                    }, 50);
            }
            function u(e) {
                "touch" === e.pointerType && a();
            }
            function l() {
                if ("undefined" != typeof document)
                    return (
                        "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", u) : document.addEventListener("touchend", a),
                        i++,
                        () => {
                            i--, i > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", u) : document.removeEventListener("touchend", a));
                        }
                    );
            }
            function s(e) {
                let { onHoverStart: t, onHoverChange: n, onHoverEnd: i, isDisabled: a } = e,
                    [u, s] = (0, r.useState)(!1),
                    d = (0, r.useRef)({ isHovered: !1, ignoreEmulatedMouseEvents: !1, pointerType: "", target: null }).current;
                (0, r.useEffect)(l, []);
                let { hoverProps: c, triggerHoverEnd: p } = (0, r.useMemo)(() => {
                    let e = (e, r) => {
                            if (((d.pointerType = r), a || "touch" === r || d.isHovered || !e.currentTarget.contains(e.target))) return;
                            d.isHovered = !0;
                            let o = e.currentTarget;
                            (d.target = o), t && t({ type: "hoverstart", target: o, pointerType: r }), n && n(!0), s(!0);
                        },
                        r = (e, t) => {
                            if (((d.pointerType = ""), (d.target = null), "touch" === t || !d.isHovered)) return;
                            d.isHovered = !1;
                            let r = e.currentTarget;
                            i && i({ type: "hoverend", target: r, pointerType: t }), n && n(!1), s(!1);
                        },
                        u = {};
                    return (
                        "undefined" != typeof PointerEvent
                            ? ((u.onPointerEnter = (t) => {
                                  (o && "mouse" === t.pointerType) || e(t, t.pointerType);
                              }),
                              (u.onPointerLeave = (e) => {
                                  !a && e.currentTarget.contains(e.target) && r(e, e.pointerType);
                              }))
                            : ((u.onTouchStart = () => {
                                  d.ignoreEmulatedMouseEvents = !0;
                              }),
                              (u.onMouseEnter = (t) => {
                                  d.ignoreEmulatedMouseEvents || o || e(t, "mouse"), (d.ignoreEmulatedMouseEvents = !1);
                              }),
                              (u.onMouseLeave = (e) => {
                                  !a && e.currentTarget.contains(e.target) && r(e, "mouse");
                              })),
                        { hoverProps: u, triggerHoverEnd: r }
                    );
                }, [t, n, i, a, d]);
                return (
                    (0, r.useEffect)(() => {
                        a && p({ currentTarget: d.target }, d.pointerType);
                    }, [a]),
                    { hoverProps: c, isHovered: u }
                );
            }
        },
        527355: (e, t, n) => {
            function r(e) {
                if (!e) return;
                let t = !0;
                return (n) => {
                    let r = {
                        ...n,
                        preventDefault() {
                            n.preventDefault();
                        },
                        isDefaultPrevented: () => n.isDefaultPrevented(),
                        stopPropagation() {},
                        continuePropagation() {
                            t = !1;
                        },
                    };
                    e(r), t && n.stopPropagation();
                };
            }
            function o(e) {
                return { keyboardProps: e.isDisabled ? {} : { onKeyDown: r(e.onKeyDown), onKeyUp: r(e.onKeyUp) } };
            }
            n.d(t, { v: () => o });
        },
        809648: (e, t, n) => {
            n.d(t, { r: () => f });
            var r = n(979870),
                o = n(852053),
                i = n(309371);
            let a = "default",
                u = "",
                l = new WeakMap();
            function s(e) {
                if ((0, r.gn)()) {
                    if ("default" === a) {
                        const t = (0, o.r)(e);
                        (u = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = "none");
                    }
                    a = "disabled";
                } else (e instanceof HTMLElement || e instanceof SVGElement) && (l.set(e, e.style.userSelect), (e.style.userSelect = "none"));
            }
            function d(e) {
                if ((0, r.gn)()) {
                    if ("disabled" !== a) return;
                    (a = "restoring"),
                        setTimeout(() => {
                            (0, i.Q)(() => {
                                if ("restoring" === a) {
                                    const t = (0, o.r)(e);
                                    "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = u || ""), (u = ""), (a = "default");
                                }
                            });
                        }, 300);
                } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
                    let t = l.get(e);
                    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e);
                }
            }
            var c = n(202784),
                p = n(121203),
                v = n(985378);
            function f(e) {
                let { onMoveStart: t, onMove: n, onMoveEnd: r } = e,
                    o = (0, c.useRef)({ didMove: !1, lastPosition: null, id: null }),
                    { addGlobalListener: i, removeGlobalListener: a } = (0, p.x)(),
                    u = (0, v.i)((e, r, i, a) => {
                        (0 === i && 0 === a) || (o.current.didMove || ((o.current.didMove = !0), null == t || t({ type: "movestart", pointerType: r, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey })), null == n || n({ type: "move", pointerType: r, deltaX: i, deltaY: a, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    }),
                    l = (0, v.i)((e, t) => {
                        d(), o.current.didMove && (null == r || r({ type: "moveend", pointerType: t, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    });
                return {
                    moveProps: (0, c.useMemo)(() => {
                        let e = {},
                            t = () => {
                                s(), (o.current.didMove = !1);
                            };
                        if ("undefined" == typeof PointerEvent) {
                            let n = (e) => {
                                    var t, n, r, i;
                                    0 === e.button && (u(e, "mouse", e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), (o.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                                },
                                r = (e) => {
                                    0 === e.button && (l(e, "mouse"), a(window, "mousemove", n, !1), a(window, "mouseup", r, !1));
                                };
                            e.onMouseDown = (e) => {
                                0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), (o.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), i(window, "mousemove", n, !1), i(window, "mouseup", r, !1));
                            };
                            let s = (e) => {
                                    let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id);
                                    if (t >= 0) {
                                        var n, r;
                                        let { pageX: l, pageY: s } = e.changedTouches[t];
                                        var i, a;
                                        u(e, "touch", l - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), s - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)), (o.current.lastPosition = { pageX: l, pageY: s });
                                    }
                                },
                                d = (e) => {
                                    [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id) >= 0 && (l(e, "touch"), (o.current.id = null), a(window, "touchmove", s), a(window, "touchend", d), a(window, "touchcancel", d));
                                };
                            e.onTouchStart = (e) => {
                                if (0 === e.changedTouches.length || null != o.current.id) return;
                                let { pageX: n, pageY: r, identifier: a } = e.changedTouches[0];
                                t(), e.stopPropagation(), e.preventDefault(), (o.current.lastPosition = { pageX: n, pageY: r }), (o.current.id = a), i(window, "touchmove", s, !1), i(window, "touchend", d, !1), i(window, "touchcancel", d, !1);
                            };
                        } else {
                            let n = (e) => {
                                    if (e.pointerId === o.current.id) {
                                        var t, n;
                                        let a = e.pointerType || "mouse";
                                        var r, i;
                                        u(e, a, e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), (o.current.lastPosition = { pageX: e.pageX, pageY: e.pageY });
                                    }
                                },
                                r = (e) => {
                                    if (e.pointerId === o.current.id) {
                                        let t = e.pointerType || "mouse";
                                        l(e, t), (o.current.id = null), a(window, "pointermove", n, !1), a(window, "pointerup", r, !1), a(window, "pointercancel", r, !1);
                                    }
                                };
                            e.onPointerDown = (e) => {
                                0 === e.button && null == o.current.id && (t(), e.stopPropagation(), e.preventDefault(), (o.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), (o.current.id = e.pointerId), i(window, "pointermove", n, !1), i(window, "pointerup", r, !1), i(window, "pointercancel", r, !1));
                            };
                        }
                        let n = (e, n, r) => {
                            t(), u(e, "keyboard", n, r), l(e, "keyboard");
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
                    }, [o, i, a, u, l]),
                };
            }
        },
        367325: (e, t, n) => {
            n.d(t, { d: () => u });
            var r = n(202784),
                o = n(426636),
                i = n(985378);
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
            function u(e) {
                let t = (0, r.useRef)({ isFocused: !1, observer: null });
                (0, o.b)(() => {
                    const e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), (e.observer = null));
                    };
                }, []);
                let n = (0, i.i)((t) => {
                    null == e || e(t);
                });
                return (0, r.useCallback)(
                    (e) => {
                        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                            t.current.isFocused = !0;
                            let r = e.target,
                                o = (e) => {
                                    (t.current.isFocused = !1), r.disabled && n(new a("blur", e)), t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                                };
                            r.addEventListener("focusout", o, { once: !0 }),
                                (t.current.observer = new MutationObserver(() => {
                                    if (t.current.isFocused && r.disabled) {
                                        var e;
                                        null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                        let n = r === document.activeElement ? null : document.activeElement;
                                        r.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })), r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: n }));
                                    }
                                })),
                                t.current.observer.observe(r, { attributes: !0, attributeFilter: ["disabled"] });
                        }
                    },
                    [n],
                );
            }
        },
        764074: (e, t, n) => {
            n.d(t, { N: () => i });
            var r = n(238013),
                o = n(32196);
            function i(e) {
                let { id: t, label: n, "aria-labelledby": i, "aria-label": a, labelElementType: u = "label" } = e;
                t = (0, r.Me)(t);
                let l = (0, r.Me)(),
                    s = {};
                return n && ((i = i ? `${l} ${i}` : l), (s = { id: l, htmlFor: "label" === u ? t : void 0 })), { labelProps: s, fieldProps: (0, o.b)({ id: t, "aria-label": a, "aria-labelledby": i }) };
            }
        },
        138997: (e, t, n) => {
            n.d(t, { o: () => p });
            var r = n(526997),
                o = n(121203),
                i = n(812238),
                a = n(277108),
                u = n(202784),
                l = n(809648),
                s = n(253246),
                d = n(764074),
                c = n(202136);
            function p(e, t, n) {
                let { labelProps: p, fieldProps: v } = (0, d.N)(e),
                    f = "vertical" === e.orientation;
                var g;
                r.Z.set(t, { id: null !== (g = p.id) && void 0 !== g ? g : v.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
                let { direction: m } = (0, c.j)(),
                    { addGlobalListener: b, removeGlobalListener: h } = (0, o.x)();
                const y = (0, u.useRef)(null),
                    w = "rtl" === m,
                    T = (0, u.useRef)(null),
                    { moveProps: E } = (0, l.r)({
                        onMoveStart() {
                            T.current = null;
                        },
                        onMove({ deltaX: e, deltaY: r }) {
                            let { height: o, width: a } = n.current.getBoundingClientRect(),
                                u = f ? o : a;
                            null == T.current && (T.current = t.getThumbPercent(y.current) * u);
                            let l = f ? r : e;
                            if (((f || w) && (l = -l), (T.current += l), null != y.current && n.current)) {
                                const e = (0, i.uZ)(T.current / u, 0, 1);
                                t.setThumbPercent(y.current, e);
                            }
                        },
                        onMoveEnd() {
                            null != y.current && (t.setThumbDragging(y.current, !1), (y.current = null));
                        },
                    });
                let P = (0, u.useRef)(void 0),
                    L = (r, o, i, a) => {
                        if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                            let { height: e, width: u, top: l, left: s } = n.current.getBoundingClientRect();
                            let d = ((f ? a : i) - (f ? l : s)) / (f ? e : u);
                            ("rtl" === m || f) && (d = 1 - d);
                            let c,
                                p = t.getPercentValue(d),
                                v = t.values.findIndex((e) => p - e < 0);
                            if (0 === v) c = v;
                            else if (-1 === v) c = t.values.length - 1;
                            else {
                                let e = t.values[v - 1],
                                    n = t.values[v];
                                c = Math.abs(e - p) < Math.abs(n - p) ? v - 1 : v;
                            }
                            c >= 0 && t.isThumbEditable(c) ? (r.preventDefault(), (y.current = c), t.setFocusedThumb(c), (P.current = o), t.setThumbDragging(y.current, !0), t.setThumbValue(c, p), b(window, "mouseup", k, !1), b(window, "touchend", k, !1), b(window, "pointerup", k, !1)) : (y.current = null);
                        }
                    },
                    k = (e) => {
                        var n, r;
                        (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === P.current && (null != y.current && (t.setThumbDragging(y.current, !1), (y.current = null)), h(window, "mouseup", k, !1), h(window, "touchend", k, !1), h(window, "pointerup", k, !1));
                    };
                return (
                    "htmlFor" in p &&
                        p.htmlFor &&
                        (delete p.htmlFor,
                        (p.onClick = () => {
                            var e;
                            null === (e = document.getElementById((0, r.g)(t, 0))) || void 0 === e || e.focus(), (0, s._w)("keyboard");
                        })),
                    {
                        labelProps: p,
                        groupProps: { role: "group", ...v },
                        trackProps: (0, a.d)(
                            {
                                onMouseDown(e) {
                                    0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || L(e, void 0, e.clientX, e.clientY);
                                },
                                onPointerDown(e) {
                                    ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) || L(e, e.pointerId, e.clientX, e.clientY);
                                },
                                onTouchStart(e) {
                                    L(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                                },
                                style: { position: "relative", touchAction: "none" },
                            },
                            E,
                        ),
                        outputProps: { htmlFor: t.values.map((e, n) => (0, r.g)(t, n)).join(" "), "aria-live": "off" },
                    }
                );
            }
        },
        338585: (e, t, n) => {
            n.d(t, { p: () => g });
            var r = n(526997),
                o = n(121203),
                i = n(454338),
                a = n(812238),
                u = n(277108),
                l = n(35731),
                s = n(202784),
                d = n(373363),
                c = n(527355),
                p = n(809648),
                v = n(764074),
                f = n(202136);
            function g(e, t) {
                let { index: n = 0, isRequired: g, validationState: m, isInvalid: b, trackRef: h, inputRef: y, orientation: w = t.orientation, name: T } = e,
                    E = e.isDisabled || t.isDisabled,
                    P = "vertical" === w,
                    { direction: L } = (0, f.j)(),
                    { addGlobalListener: k, removeGlobalListener: M } = (0, o.x)(),
                    D = r.Z.get(t);
                var S;
                const { labelProps: K, fieldProps: x } = (0, v.N)({ ...e, id: (0, r.g)(t, n), "aria-labelledby": `${D.id} ${null !== (S = e["aria-labelledby"]) && void 0 !== S ? S : ""}`.trim() }),
                    F = t.values[n],
                    C = (0, s.useCallback)(() => {
                        y.current && (0, i.A)(y.current);
                    }, [y]),
                    H = t.focusedThumb === n;
                (0, s.useEffect)(() => {
                    H && C();
                }, [H, C]);
                let I = "rtl" === L,
                    X = (0, s.useRef)(null),
                    { keyboardProps: R } = (0, c.v)({
                        onKeyDown(e) {
                            let { getThumbMaxValue: r, getThumbMinValue: o, decrementThumb: i, incrementThumb: a, setThumbValue: u, setThumbDragging: l, pageSize: s } = t;
                            if (/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                                switch ((e.preventDefault(), l(n, !0), e.key)) {
                                    case "PageUp":
                                        a(n, s);
                                        break;
                                    case "PageDown":
                                        i(n, s);
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
                    { moveProps: Y } = (0, p.r)({
                        onMoveStart() {
                            (X.current = null), t.setThumbDragging(n, !0);
                        },
                        onMove({ deltaX: e, deltaY: r, pointerType: o, shiftKey: i }) {
                            const { getThumbPercent: u, setThumbPercent: l, decrementThumb: s, incrementThumb: d, step: c, pageSize: p } = t;
                            let { width: v, height: f } = h.current.getBoundingClientRect(),
                                g = P ? f : v;
                            if ((null == X.current && (X.current = u(n) * g), "keyboard" === o)) (e > 0 && I) || (e < 0 && !I) || r > 0 ? s(n, i ? p : c) : d(n, i ? p : c);
                            else {
                                let t = P ? r : e;
                                (P || I) && (t = -t), (X.current += t), l(n, (0, a.uZ)(X.current / g, 0, 1));
                            }
                        },
                        onMoveEnd() {
                            t.setThumbDragging(n, !1);
                        },
                    });
                t.setThumbEditable(n, !E);
                const { focusableProps: A } = (0, d.k)((0, u.d)(e, { onFocus: () => t.setFocusedThumb(n), onBlur: () => t.setFocusedThumb(void 0) }), y);
                let _ = (0, s.useRef)(void 0),
                    U = (e) => {
                        C(), (_.current = e), t.setThumbDragging(n, !0), k(window, "mouseup", B, !1), k(window, "touchend", B, !1), k(window, "pointerup", B, !1);
                    },
                    B = (e) => {
                        var r, o;
                        (null !== (o = e.pointerId) && void 0 !== o ? o : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === _.current && (C(), t.setThumbDragging(n, !1), M(window, "mouseup", B, !1), M(window, "touchend", B, !1), M(window, "pointerup", B, !1));
                    },
                    W = t.getThumbPercent(n);
                (P || "rtl" === L) && (W = 1 - W);
                let V = E
                    ? {}
                    : (0, u.d)(R, Y, {
                          onMouseDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U();
                          },
                          onPointerDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U(e.pointerId);
                          },
                          onTouchStart: (e) => {
                              U(e.changedTouches[0].identifier);
                          },
                      });
                return (
                    (0, l.y)(y, F, (e) => {
                        t.setThumbValue(n, e);
                    }),
                    {
                        inputProps: (0, u.d)(A, x, {
                            type: "range",
                            tabIndex: E ? void 0 : 0,
                            min: t.getThumbMinValue(n),
                            max: t.getThumbMaxValue(n),
                            step: t.step,
                            value: F,
                            name: T,
                            disabled: E,
                            "aria-orientation": w,
                            "aria-valuetext": t.getThumbValueLabel(n),
                            "aria-required": g || void 0,
                            "aria-invalid": b || "invalid" === m || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-describedby": [D["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                            "aria-details": [D["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                            onChange: (e) => {
                                t.setThumbValue(n, parseFloat(e.target.value));
                            },
                        }),
                        thumbProps: { ...V, style: { position: "absolute", [P ? "top" : "left"]: 100 * W + "%", transform: "translate(-50%, -50%)", touchAction: "none" } },
                        labelProps: K,
                        isDragging: t.isThumbDragging(n),
                        isDisabled: E,
                        isFocused: H,
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
        623047: (e, t, n) => {
            n.d(t, { Av: () => v, gP: () => s });
            var r = n(202784);
            const o = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
                i = r.createContext(o),
                a = r.createContext(!1);
            Boolean("undefined" != typeof window && window.document && window.document.createElement);
            let u = new WeakMap();
            function l(e = !1) {
                let t = (0, r.useContext)(i),
                    n = (0, r.useRef)(null);
                if (null === n.current && !e) {
                    var o, a;
                    let e = null === (a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a || null === (o = a.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
                    if (e) {
                        let n = u.get(e);
                        null == n ? u.set(e, { id: t.current, state: e.memoizedState }) : e.memoizedState !== n.state && ((t.current = n.id), u.delete(e));
                    }
                    n.current = ++t.current;
                }
                return n.current;
            }
            const s =
                "function" == typeof r.useId
                    ? function (e) {
                          let t = r.useId(),
                              [n] = (0, r.useState)(v());
                          return e || `${n ? "react-aria" : `react-aria${o.prefix}`}-${t}`;
                      }
                    : function (e) {
                          let t = (0, r.useContext)(i),
                              n = l(!!e),
                              o = `react-aria${t.prefix}`;
                          return e || `${o}-${n}`;
                      };
            function d() {
                return !1;
            }
            function c() {
                return !0;
            }
            function p(e) {
                return () => {};
            }
            function v() {
                return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(p, d, c) : (0, r.useContext)(a);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-2eb835b5.c556ad2a.js.map

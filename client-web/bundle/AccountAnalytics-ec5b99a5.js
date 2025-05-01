"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-ec5b99a5"],
    {
        380106: (e, t, n) => {
            function r(e, [t, n]) {
                return Math.min(n, Math.max(t, e));
            }
            n.d(t, { u: () => r });
        },
        717998: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            n.d(t, { M: () => r });
        },
        784389: (e, t, n) => {
            n.d(t, { f: () => c });
            var r = n(202784),
                o = n(172714),
                s = n(552322),
                i = r.forwardRef((e, t) => {
                    const { children: n, width: r = 10, height: i = 5, ...c } = e;
                    return (0, s.jsx)(o.WV.svg, { ...c, ref: t, width: r, height: i, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, s.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            i.displayName = "Arrow";
            var c = i;
        },
        405895: (e, t, n) => {
            n.d(t, { B: () => p });
            var r = n(202784),
                o = n(392211);
            function s(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function i(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = s(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : s(e[t], null);
                            }
                        };
                };
            }
            function c(...e) {
                return r.useCallback(i(...e), e);
            }
            var u = n(552322),
                l = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        s = r.Children.toArray(n),
                        i = s.find(f);
                    if (i) {
                        const e = i.props.children,
                            n = s.map((t) => (t === i ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, u.jsx)(a, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, u.jsx)(a, { ...o, ref: t, children: n });
                });
            l.displayName = "Slot";
            var a = r.forwardRef((e, t) => {
                const { children: n, ...o } = e;
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
                        })(o, n.props);
                    return n.type !== r.Fragment && (s.ref = t ? i(t, e) : e), r.cloneElement(n, s);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            a.displayName = "SlotClone";
            var d = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
            function f(e) {
                return r.isValidElement(e) && e.type === d;
            }
            function p(e) {
                const t = e + "CollectionProvider",
                    [n, s] = (0, o.b)(t),
                    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
                    d = (e) => {
                        const { scope: t, children: n } = e,
                            o = r.useRef(null),
                            s = r.useRef(new Map()).current;
                        return (0, u.jsx)(i, { scope: t, itemMap: s, collectionRef: o, children: n });
                    };
                d.displayName = t;
                const f = e + "CollectionSlot",
                    p = r.forwardRef((e, t) => {
                        const { scope: n, children: r } = e,
                            o = c(t, a(f, n).collectionRef);
                        return (0, u.jsx)(l, { ref: o, children: r });
                    });
                p.displayName = f;
                const v = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    E = r.forwardRef((e, t) => {
                        const { scope: n, children: o, ...s } = e,
                            i = r.useRef(null),
                            d = c(t, i),
                            f = a(v, n);
                        return (
                            r.useEffect(
                                () => (
                                    f.itemMap.set(i, { ref: i, ...s }),
                                    () => {
                                        f.itemMap.delete(i);
                                    }
                                ),
                            ),
                            (0, u.jsx)(l, { [m]: "", ref: d, children: o })
                        );
                    });
                return (
                    (E.displayName = v),
                    [
                        { Provider: d, Slot: p, ItemSlot: E },
                        function (t) {
                            const n = a(e + "CollectionConsumer", t);
                            return r.useCallback(() => {
                                const e = n.collectionRef.current;
                                if (!e) return [];
                                const t = Array.from(e.querySelectorAll(`[${m}]`));
                                return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            }, [n.collectionRef, n.itemMap]);
                        },
                        s,
                    ]
                );
            }
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
        759241: (e, t, n) => {
            n.d(t, { gm: () => s });
            var r = n(202784),
                o = (n(552322), r.createContext(void 0));
            function s(e) {
                const t = r.useContext(o);
                return e || t || "ltr";
            }
        },
        301352: (e, t, n) => {
            n.d(t, { XB: () => m });
            var r,
                o = n(202784),
                s = n(717998),
                i = n(172714),
                c = n(262656),
                u = n(627757),
                l = n(986796),
                a = n(552322),
                d = "dismissableLayer.update",
                f = "dismissableLayer.pointerDownOutside",
                p = "dismissableLayer.focusOutside",
                v = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                m = o.forwardRef((e, t) => {
                    const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: m, onPointerDownOutside: E, onFocusOutside: b, onInteractOutside: w, onDismiss: C, ...g } = e,
                        L = o.useContext(v),
                        [R, P] = o.useState(null),
                        x = R?.ownerDocument ?? globalThis?.document,
                        [, D] = o.useState({}),
                        O = (0, c.e)(t, (e) => P(e)),
                        N = Array.from(L.layers),
                        [S] = [...L.layersWithOutsidePointerEventsDisabled].slice(-1),
                        F = N.indexOf(S),
                        W = R ? N.indexOf(R) : -1,
                        M = L.layersWithOutsidePointerEventsDisabled.size > 0,
                        T = W >= F,
                        j = (function (e, t = globalThis?.document) {
                            const n = (0, u.W)(e),
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
                                n = [...L.branches].some((e) => e.contains(t));
                            T && !n && (E?.(e), w?.(e), e.defaultPrevented || C?.());
                        }, x),
                        k = (function (e, t = globalThis?.document) {
                            const n = (0, u.W)(e),
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
                            [...L.branches].some((e) => e.contains(t)) || (b?.(e), w?.(e), e.defaultPrevented || C?.());
                        }, x);
                    return (
                        (0, l.e)((e) => {
                            W === L.layers.size - 1 && (m?.(e), !e.defaultPrevented && C && (e.preventDefault(), C()));
                        }, x),
                        o.useEffect(() => {
                            if (R)
                                return (
                                    n && (0 === L.layersWithOutsidePointerEventsDisabled.size && ((r = x.body.style.pointerEvents), (x.body.style.pointerEvents = "none")), L.layersWithOutsidePointerEventsDisabled.add(R)),
                                    L.layers.add(R),
                                    h(),
                                    () => {
                                        n && 1 === L.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = r);
                                    }
                                );
                        }, [R, x, n, L]),
                        o.useEffect(
                            () => () => {
                                R && (L.layers.delete(R), L.layersWithOutsidePointerEventsDisabled.delete(R), h());
                            },
                            [R, L],
                        ),
                        o.useEffect(() => {
                            const e = () => D({});
                            return document.addEventListener(d, e), () => document.removeEventListener(d, e);
                        }, []),
                        (0, a.jsx)(i.WV.div, { ...g, ref: O, style: { pointerEvents: M ? (T ? "auto" : "none") : void 0, ...e.style }, onFocusCapture: (0, s.M)(e.onFocusCapture, k.onFocusCapture), onBlurCapture: (0, s.M)(e.onBlurCapture, k.onBlurCapture), onPointerDownCapture: (0, s.M)(e.onPointerDownCapture, j.onPointerDownCapture) })
                    );
                });
            m.displayName = "DismissableLayer";
            var E = o.forwardRef((e, t) => {
                const n = o.useContext(v),
                    r = o.useRef(null),
                    s = (0, c.e)(t, r);
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
                    (0, a.jsx)(i.WV.div, { ...e, ref: s })
                );
            });
            function h() {
                const e = new CustomEvent(d);
                document.dispatchEvent(e);
            }
            function y(e, t, n, { discrete: r }) {
                const o = n.originalEvent.target,
                    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && o.addEventListener(e, t, { once: !0 }), r ? (0, i.jH)(o, s) : o.dispatchEvent(s);
            }
            E.displayName = "DismissableLayerBranch";
        },
        22426: (e, t, n) => {
            n.d(t, { M: () => d });
            var r = n(202784),
                o = n(262656),
                s = n(172714),
                i = n(627757),
                c = n(552322),
                u = "focusScope.autoFocusOnMount",
                l = "focusScope.autoFocusOnUnmount",
                a = { bubbles: !1, cancelable: !0 },
                d = r.forwardRef((e, t) => {
                    const { loop: n = !1, trapped: d = !1, onMountAutoFocus: v, onUnmountAutoFocus: h, ...y } = e,
                        [b, w] = r.useState(null),
                        C = (0, i.W)(v),
                        g = (0, i.W)(h),
                        L = r.useRef(null),
                        R = (0, o.e)(t, (e) => w(e)),
                        P = r.useRef({
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
                                    if (P.paused || !b) return;
                                    const t = e.target;
                                    b.contains(t) ? (L.current = t) : m(L.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (P.paused || !b) return;
                                    const t = e.relatedTarget;
                                    null !== t && (b.contains(t) || m(L.current, { select: !0 }));
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
                    }, [d, b, P.paused]),
                        r.useEffect(() => {
                            if (b) {
                                E.add(P);
                                const t = document.activeElement;
                                if (!b.contains(t)) {
                                    const n = new CustomEvent(u, a);
                                    b.addEventListener(u, C),
                                        b.dispatchEvent(n),
                                        n.defaultPrevented ||
                                            (!(function (e, { select: t = !1 } = {}) {
                                                const n = document.activeElement;
                                                for (const r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(((e = f(b)), e.filter((e) => "A" !== e.tagName)), { select: !0 }),
                                            document.activeElement === t && m(b));
                                }
                                return () => {
                                    b.removeEventListener(u, C),
                                        setTimeout(() => {
                                            const e = new CustomEvent(l, a);
                                            b.addEventListener(l, g), b.dispatchEvent(e), e.defaultPrevented || m(t ?? document.body, { select: !0 }), b.removeEventListener(l, g), E.remove(P);
                                        }, 0);
                                };
                            }
                            var e;
                        }, [b, C, g, P]);
                    const x = r.useCallback(
                        (e) => {
                            if (!n && !d) return;
                            if (P.paused) return;
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
                        [n, d, P.paused],
                    );
                    return (0, c.jsx)(s.WV.div, { tabIndex: -1, ...y, ref: R, onKeyDown: x });
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
            d.displayName = "FocusScope";
            var E = (function () {
                let e = [];
                return {
                    add(t) {
                        const n = e[0];
                        t !== n && n?.pause(), (e = h(e, t)), e.unshift(t);
                    },
                    remove(t) {
                        (e = h(e, t)), e[0]?.resume();
                    },
                };
            })();
            function h(e, t) {
                const n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-ec5b99a5.78bf85fa.js.map

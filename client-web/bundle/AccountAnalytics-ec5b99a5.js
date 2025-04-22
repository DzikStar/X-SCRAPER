"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-ec5b99a5"],
    {
        380106: (e, n, r) => {
            function t(e, [n, r]) {
                return Math.min(r, Math.max(n, e));
            }
            r.d(n, { u: () => t });
        },
        405895: (e, n, r) => {
            r.d(n, { B: () => p });
            var t = r(202784),
                o = r(392211);
            function i(e, n) {
                if ("function" == typeof e) return e(n);
                null != e && (e.current = n);
            }
            function l(...e) {
                return (n) => {
                    let r = !1;
                    const t = e.map((e) => {
                        const t = i(e, n);
                        return r || "function" != typeof t || (r = !0), t;
                    });
                    if (r)
                        return () => {
                            for (let n = 0; n < t.length; n++) {
                                const r = t[n];
                                "function" == typeof r ? r() : i(e[n], null);
                            }
                        };
                };
            }
            function c(...e) {
                return t.useCallback(l(...e), e);
            }
            var u = r(552322),
                s = t.forwardRef((e, n) => {
                    const { children: r, ...o } = e,
                        i = t.Children.toArray(r),
                        l = i.find(d);
                    if (l) {
                        const e = l.props.children,
                            r = i.map((n) => (n === l ? (t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null) : n));
                        return (0, u.jsx)(a, { ...o, ref: n, children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null });
                    }
                    return (0, u.jsx)(a, { ...o, ref: n, children: r });
                });
            s.displayName = "Slot";
            var a = t.forwardRef((e, n) => {
                const { children: r, ...o } = e;
                if (t.isValidElement(r)) {
                    const e = (function (e) {
                            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                r = n && "isReactWarning" in n && n.isReactWarning;
                            if (r) return e.ref;
                            if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (r = n && "isReactWarning" in n && n.isReactWarning), r)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(r),
                        i = (function (e, n) {
                            const r = { ...n };
                            for (const t in n) {
                                const o = e[t],
                                    i = n[t];
                                /^on[A-Z]/.test(t)
                                    ? o && i
                                        ? (r[t] = (...e) => {
                                              i(...e), o(...e);
                                          })
                                        : o && (r[t] = o)
                                    : "style" === t
                                      ? (r[t] = { ...o, ...i })
                                      : "className" === t && (r[t] = [o, i].filter(Boolean).join(" "));
                            }
                            return { ...e, ...r };
                        })(o, r.props);
                    return r.type !== t.Fragment && (i.ref = n ? l(n, e) : e), t.cloneElement(r, i);
                }
                return t.Children.count(r) > 1 ? t.Children.only(null) : null;
            });
            a.displayName = "SlotClone";
            var f = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
            function d(e) {
                return t.isValidElement(e) && e.type === f;
            }
            function p(e) {
                const n = e + "CollectionProvider",
                    [r, i] = (0, o.b)(n),
                    [l, a] = r(n, { collectionRef: { current: null }, itemMap: new Map() }),
                    f = (e) => {
                        const { scope: n, children: r } = e,
                            o = t.useRef(null),
                            i = t.useRef(new Map()).current;
                        return (0, u.jsx)(l, { scope: n, itemMap: i, collectionRef: o, children: r });
                    };
                f.displayName = n;
                const d = e + "CollectionSlot",
                    p = t.forwardRef((e, n) => {
                        const { scope: r, children: t } = e,
                            o = c(n, a(d, r).collectionRef);
                        return (0, u.jsx)(s, { ref: o, children: t });
                    });
                p.displayName = d;
                const m = e + "CollectionItemSlot",
                    v = "data-radix-collection-item",
                    h = t.forwardRef((e, n) => {
                        const { scope: r, children: o, ...i } = e,
                            l = t.useRef(null),
                            f = c(n, l),
                            d = a(m, r);
                        return (
                            t.useEffect(
                                () => (
                                    d.itemMap.set(l, { ref: l, ...i }),
                                    () => {
                                        d.itemMap.delete(l);
                                    }
                                ),
                            ),
                            (0, u.jsx)(s, { [v]: "", ref: f, children: o })
                        );
                    });
                return (
                    (h.displayName = m),
                    [
                        { Provider: f, Slot: p, ItemSlot: h },
                        function (n) {
                            const r = a(e + "CollectionConsumer", n);
                            return t.useCallback(() => {
                                const e = r.collectionRef.current;
                                if (!e) return [];
                                const n = Array.from(e.querySelectorAll(`[${v}]`));
                                return Array.from(r.itemMap.values()).sort((e, r) => n.indexOf(e.ref.current) - n.indexOf(r.ref.current));
                            }, [r.collectionRef, r.itemMap]);
                        },
                        i,
                    ]
                );
            }
        },
        759241: (e, n, r) => {
            r.d(n, { gm: () => i });
            var t = r(202784),
                o = (r(552322), t.createContext(void 0));
            function i(e) {
                const n = t.useContext(o);
                return e || n || "ltr";
            }
        },
        959548: (e, n, r) => {
            r.d(n, { ck: () => N, fC: () => _, Pc: () => S });
            var t = r(202784);
            function o(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
                return function (t) {
                    if ((e?.(t), !1 === r || !t.defaultPrevented)) return n?.(t);
                };
            }
            var i = r(405895);
            function l(e, n) {
                if ("function" == typeof e) return e(n);
                null != e && (e.current = n);
            }
            function c(...e) {
                return (n) => {
                    let r = !1;
                    const t = e.map((e) => {
                        const t = l(e, n);
                        return r || "function" != typeof t || (r = !0), t;
                    });
                    if (r)
                        return () => {
                            for (let n = 0; n < t.length; n++) {
                                const r = t[n];
                                "function" == typeof r ? r() : l(e[n], null);
                            }
                        };
                };
            }
            var u = r(392211),
                s = r(23372),
                a = (r(928316), r(552322)),
                f = t.forwardRef((e, n) => {
                    const { children: r, ...o } = e,
                        i = t.Children.toArray(r),
                        l = i.find(m);
                    if (l) {
                        const e = l.props.children,
                            r = i.map((n) => (n === l ? (t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null) : n));
                        return (0, a.jsx)(d, { ...o, ref: n, children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null });
                    }
                    return (0, a.jsx)(d, { ...o, ref: n, children: r });
                });
            f.displayName = "Slot";
            var d = t.forwardRef((e, n) => {
                const { children: r, ...o } = e;
                if (t.isValidElement(r)) {
                    const e = (function (e) {
                            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                r = n && "isReactWarning" in n && n.isReactWarning;
                            if (r) return e.ref;
                            if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (r = n && "isReactWarning" in n && n.isReactWarning), r)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(r),
                        i = (function (e, n) {
                            const r = { ...n };
                            for (const t in n) {
                                const o = e[t],
                                    i = n[t];
                                /^on[A-Z]/.test(t)
                                    ? o && i
                                        ? (r[t] = (...e) => {
                                              i(...e), o(...e);
                                          })
                                        : o && (r[t] = o)
                                    : "style" === t
                                      ? (r[t] = { ...o, ...i })
                                      : "className" === t && (r[t] = [o, i].filter(Boolean).join(" "));
                            }
                            return { ...e, ...r };
                        })(o, r.props);
                    return r.type !== t.Fragment && (i.ref = n ? c(n, e) : e), t.cloneElement(r, i);
                }
                return t.Children.count(r) > 1 ? t.Children.only(null) : null;
            });
            d.displayName = "SlotClone";
            var p = ({ children: e }) => (0, a.jsx)(a.Fragment, { children: e });
            function m(e) {
                return t.isValidElement(e) && e.type === p;
            }
            var v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
                const r = t.forwardRef((e, r) => {
                    const { asChild: t, ...o } = e,
                        i = t ? f : n;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, { ...o, ref: r });
                });
                return (r.displayName = `Primitive.${n}`), { ...e, [n]: r };
            }, {});
            var h = r(627757),
                y = r(387695),
                g = r(759241),
                w = "rovingFocusGroup.onEntryFocus",
                b = { bubbles: !1, cancelable: !0 },
                R = "RovingFocusGroup",
                [C, x, F] = (0, i.B)(R),
                [E, S] = (0, u.b)(R, [F]),
                [j, A] = E(R),
                I = t.forwardRef((e, n) => (0, a.jsx)(C.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, a.jsx)(C.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, a.jsx)(D, { ...e, ref: n }) }) }));
            I.displayName = R;
            var D = t.forwardRef((e, n) => {
                    const { __scopeRovingFocusGroup: r, orientation: i, loop: l = !1, dir: u, currentTabStopId: s, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: d, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...R } = e,
                        C = t.useRef(null),
                        F = (function (...e) {
                            return t.useCallback(c(...e), e);
                        })(n, C),
                        E = (0, g.gm)(u),
                        [S = null, A] = (0, y.T)({ prop: s, defaultProp: f, onChange: d }),
                        [I, D] = t.useState(!1),
                        k = (0, h.W)(p),
                        M = x(r),
                        P = t.useRef(!1),
                        [_, N] = t.useState(0);
                    return (
                        t.useEffect(() => {
                            const e = C.current;
                            if (e) return e.addEventListener(w, k), () => e.removeEventListener(w, k);
                        }, [k]),
                        (0, a.jsx)(j, {
                            scope: r,
                            orientation: i,
                            dir: E,
                            loop: l,
                            currentTabStopId: S,
                            onItemFocus: t.useCallback((e) => A(e), [A]),
                            onItemShiftTab: t.useCallback(() => D(!0), []),
                            onFocusableItemAdd: t.useCallback(() => N((e) => e + 1), []),
                            onFocusableItemRemove: t.useCallback(() => N((e) => e - 1), []),
                            children: (0, a.jsx)(v.div, {
                                tabIndex: I || 0 === _ ? -1 : 0,
                                "data-orientation": i,
                                ...R,
                                ref: F,
                                style: { outline: "none", ...e.style },
                                onMouseDown: o(e.onMouseDown, () => {
                                    P.current = !0;
                                }),
                                onFocus: o(e.onFocus, (e) => {
                                    const n = !P.current;
                                    if (e.target === e.currentTarget && n && !I) {
                                        const n = new CustomEvent(w, b);
                                        if ((e.currentTarget.dispatchEvent(n), !n.defaultPrevented)) {
                                            const e = M().filter((e) => e.focusable);
                                            T(
                                                [e.find((e) => e.active), e.find((e) => e.id === S), ...e].filter(Boolean).map((e) => e.ref.current),
                                                m,
                                            );
                                        }
                                    }
                                    P.current = !1;
                                }),
                                onBlur: o(e.onBlur, () => D(!1)),
                            }),
                        })
                    );
                }),
                k = "RovingFocusGroupItem",
                M = t.forwardRef((e, n) => {
                    const { __scopeRovingFocusGroup: r, focusable: i = !0, active: l = !1, tabStopId: c, ...u } = e,
                        f = (0, s.M)(),
                        d = c || f,
                        p = A(k, r),
                        m = p.currentTabStopId === d,
                        h = x(r),
                        { onFocusableItemAdd: y, onFocusableItemRemove: g } = p;
                    return (
                        t.useEffect(() => {
                            if (i) return y(), () => g();
                        }, [i, y, g]),
                        (0, a.jsx)(C.ItemSlot, {
                            scope: r,
                            id: d,
                            focusable: i,
                            active: l,
                            children: (0, a.jsx)(v.span, {
                                tabIndex: m ? 0 : -1,
                                "data-orientation": p.orientation,
                                ...u,
                                ref: n,
                                onMouseDown: o(e.onMouseDown, (e) => {
                                    i ? p.onItemFocus(d) : e.preventDefault();
                                }),
                                onFocus: o(e.onFocus, () => p.onItemFocus(d)),
                                onKeyDown: o(e.onKeyDown, (e) => {
                                    if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                                    if (e.target !== e.currentTarget) return;
                                    const n = (function (e, n, r) {
                                        const t = (function (e, n) {
                                            return "rtl" !== n ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
                                        })(e.key, r);
                                        return ("vertical" === n && ["ArrowLeft", "ArrowRight"].includes(t)) || ("horizontal" === n && ["ArrowUp", "ArrowDown"].includes(t)) ? void 0 : P[t];
                                    })(e, p.orientation, p.dir);
                                    if (void 0 !== n) {
                                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                        e.preventDefault();
                                        let o = h()
                                            .filter((e) => e.focusable)
                                            .map((e) => e.ref.current);
                                        if ("last" === n) o.reverse();
                                        else if ("prev" === n || "next" === n) {
                                            "prev" === n && o.reverse();
                                            const i = o.indexOf(e.currentTarget);
                                            o = p.loop ? ((t = i + 1), (r = o).map((e, n) => r[(t + n) % r.length])) : o.slice(i + 1);
                                        }
                                        setTimeout(() => T(o));
                                    }
                                    var r, t;
                                }),
                            }),
                        })
                    );
                });
            M.displayName = k;
            var P = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function T(e, n = !1) {
                const r = document.activeElement;
                for (const t of e) {
                    if (t === r) return;
                    if ((t.focus({ preventScroll: n }), document.activeElement !== r)) return;
                }
            }
            var _ = I,
                N = M;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-ec5b99a5.bac6021a.js.map

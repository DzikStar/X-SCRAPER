"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-cd9f24fc"],
    {
        549815: (e, n, t) => {
            t.d(n, { A4: () => l, g7: () => a });
            var r = t(202784),
                o = t(262656),
                i = t(552322),
                a = r.forwardRef((e, n) => {
                    const { children: t, ...o } = e,
                        a = r.Children.toArray(t),
                        l = a.find(u);
                    if (l) {
                        const e = l.props.children,
                            t = a.map((n) => (n === l ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : n));
                        return (0, i.jsx)(s, { ...o, ref: n, children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null });
                    }
                    return (0, i.jsx)(s, { ...o, ref: n, children: t });
                });
            a.displayName = "Slot";
            var s = r.forwardRef((e, n) => {
                const { children: t, ...i } = e;
                if (r.isValidElement(t)) {
                    const e = (function (e) {
                        let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                            t = n && "isReactWarning" in n && n.isReactWarning;
                        if (t) return e.ref;
                        if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (t = n && "isReactWarning" in n && n.isReactWarning), t)) return e.props.ref;
                        return e.props.ref || e.ref;
                    })(t);
                    return r.cloneElement(t, { ...c(i, t.props), ref: n ? (0, o.F)(n, e) : e });
                }
                return r.Children.count(t) > 1 ? r.Children.only(null) : null;
            });
            s.displayName = "SlotClone";
            var l = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            function u(e) {
                return r.isValidElement(e) && e.type === l;
            }
            function c(e, n) {
                const t = { ...n };
                for (const r in n) {
                    const o = e[r],
                        i = n[r];
                    /^on[A-Z]/.test(r)
                        ? o && i
                            ? (t[r] = (...e) => {
                                  i(...e), o(...e);
                              })
                            : o && (t[r] = o)
                        : "style" === r
                          ? (t[r] = { ...o, ...i })
                          : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...t };
            }
        },
        362834: (e, n, t) => {
            t.d(n, { VY: () => F, aV: () => S, fC: () => I, xz: () => k });
            var r = t(202784);
            function o(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === t || !r.defaultPrevented)) return n?.(r);
                };
            }
            var i = t(392211),
                a = t(959548);
            function s(e, n) {
                if ("function" == typeof e) return e(n);
                null != e && (e.current = n);
            }
            function l(...e) {
                return (n) => {
                    let t = !1;
                    const r = e.map((e) => {
                        const r = s(e, n);
                        return t || "function" != typeof r || (t = !0), r;
                    });
                    if (t)
                        return () => {
                            for (let n = 0; n < r.length; n++) {
                                const t = r[n];
                                "function" == typeof t ? t() : s(e[n], null);
                            }
                        };
                };
            }
            var u = t(861644);
            var c = (e) => {
                const { present: n, children: t } = e,
                    o = (function (e) {
                        const [n, t] = r.useState(),
                            o = r.useRef({}),
                            i = r.useRef(e),
                            a = r.useRef("none"),
                            s = e ? "mounted" : "unmounted",
                            [l, c] = (function (e, n) {
                                return r.useReducer((e, t) => n[e][t] ?? e, e);
                            })(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = d(o.current);
                                a.current = "mounted" === l ? e : "none";
                            }, [l]),
                            (0, u.b)(() => {
                                const n = o.current,
                                    t = i.current;
                                if (t !== e) {
                                    const r = a.current,
                                        o = d(n);
                                    if (e) c("MOUNT");
                                    else if ("none" === o || "none" === n?.display) c("UNMOUNT");
                                    else {
                                        c(t && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    i.current = e;
                                }
                            }, [e, c]),
                            (0, u.b)(() => {
                                if (n) {
                                    let e;
                                    const t = n.ownerDocument.defaultView ?? window,
                                        r = (r) => {
                                            const a = d(o.current).includes(r.animationName);
                                            if (r.target === n && a && (c("ANIMATION_END"), !i.current)) {
                                                const r = n.style.animationFillMode;
                                                (n.style.animationFillMode = "forwards"),
                                                    (e = t.setTimeout(() => {
                                                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        s = (e) => {
                                            e.target === n && (a.current = d(o.current));
                                        };
                                    return (
                                        n.addEventListener("animationstart", s),
                                        n.addEventListener("animationcancel", r),
                                        n.addEventListener("animationend", r),
                                        () => {
                                            t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
                                        }
                                    );
                                }
                                c("ANIMATION_END");
                            }, [n, c]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(l),
                                ref: r.useCallback((e) => {
                                    e && (o.current = getComputedStyle(e)), t(e);
                                }, []),
                            }
                        );
                    })(n),
                    i = "function" == typeof t ? t({ present: o.isPresent }) : r.Children.only(t),
                    a = (function (...e) {
                        return r.useCallback(l(...e), e);
                    })(
                        o.ref,
                        (function (e) {
                            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                t = n && "isReactWarning" in n && n.isReactWarning;
                            if (t) return e.ref;
                            if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (t = n && "isReactWarning" in n && n.isReactWarning), t)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(i),
                    );
                return "function" == typeof t || o.isPresent ? r.cloneElement(i, { ref: a }) : null;
            };
            function d(e) {
                return e?.animationName || "none";
            }
            c.displayName = "Presence";
            t(928316);
            var f = t(552322),
                p = r.forwardRef((e, n) => {
                    const { children: t, ...o } = e,
                        i = r.Children.toArray(t),
                        a = i.find(h);
                    if (a) {
                        const e = a.props.children,
                            t = i.map((n) => (n === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : n));
                        return (0, f.jsx)(m, { ...o, ref: n, children: r.isValidElement(e) ? r.cloneElement(e, void 0, t) : null });
                    }
                    return (0, f.jsx)(m, { ...o, ref: n, children: t });
                });
            p.displayName = "Slot";
            var m = r.forwardRef((e, n) => {
                const { children: t, ...o } = e;
                if (r.isValidElement(t)) {
                    const e = (function (e) {
                            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                t = n && "isReactWarning" in n && n.isReactWarning;
                            if (t) return e.ref;
                            if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (t = n && "isReactWarning" in n && n.isReactWarning), t)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(t),
                        i = (function (e, n) {
                            const t = { ...n };
                            for (const r in n) {
                                const o = e[r],
                                    i = n[r];
                                /^on[A-Z]/.test(r)
                                    ? o && i
                                        ? (t[r] = (...e) => {
                                              i(...e), o(...e);
                                          })
                                        : o && (t[r] = o)
                                    : "style" === r
                                      ? (t[r] = { ...o, ...i })
                                      : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "));
                            }
                            return { ...e, ...t };
                        })(o, t.props);
                    return t.type !== r.Fragment && (i.ref = n ? l(n, e) : e), r.cloneElement(t, i);
                }
                return r.Children.count(t) > 1 ? r.Children.only(null) : null;
            });
            m.displayName = "SlotClone";
            var v = ({ children: e }) => (0, f.jsx)(f.Fragment, { children: e });
            function h(e) {
                return r.isValidElement(e) && e.type === v;
            }
            var b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
                const t = r.forwardRef((e, t) => {
                    const { asChild: r, ...o } = e,
                        i = r ? p : n;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, f.jsx)(i, { ...o, ref: t });
                });
                return (t.displayName = `Primitive.${n}`), { ...e, [n]: t };
            }, {});
            var y = t(759241),
                g = t(387695),
                w = t(23372),
                N = "Tabs",
                [C, E] = (0, i.b)(N, [a.Pc]),
                R = (0, a.Pc)(),
                [T, O] = C(N),
                j = r.forwardRef((e, n) => {
                    const { __scopeTabs: t, value: r, onValueChange: o, defaultValue: i, orientation: a = "horizontal", dir: s, activationMode: l = "automatic", ...u } = e,
                        c = (0, y.gm)(s),
                        [d, p] = (0, g.T)({ prop: r, onChange: o, defaultProp: i });
                    return (0, f.jsx)(T, { scope: t, baseId: (0, w.M)(), value: d, onValueChange: p, orientation: a, dir: c, activationMode: l, children: (0, f.jsx)(b.div, { dir: c, "data-orientation": a, ...u, ref: n }) });
                });
            j.displayName = N;
            var A = "TabsList",
                M = r.forwardRef((e, n) => {
                    const { __scopeTabs: t, loop: r = !0, ...o } = e,
                        i = O(A, t),
                        s = R(t);
                    return (0, f.jsx)(a.fC, { asChild: !0, ...s, orientation: i.orientation, dir: i.dir, loop: r, children: (0, f.jsx)(b.div, { role: "tablist", "aria-orientation": i.orientation, ...o, ref: n }) });
                });
            M.displayName = A;
            var x = "TabsTrigger",
                P = r.forwardRef((e, n) => {
                    const { __scopeTabs: t, value: r, disabled: i = !1, ...s } = e,
                        l = O(x, t),
                        u = R(t),
                        c = D(l.baseId, r),
                        d = V(l.baseId, r),
                        p = r === l.value;
                    return (0, f.jsx)(a.ck, {
                        asChild: !0,
                        ...u,
                        focusable: !i,
                        active: p,
                        children: (0, f.jsx)(b.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": p,
                            "aria-controls": d,
                            "data-state": p ? "active" : "inactive",
                            "data-disabled": i ? "" : void 0,
                            disabled: i,
                            id: c,
                            ...s,
                            ref: n,
                            onMouseDown: o(e.onMouseDown, (e) => {
                                i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : l.onValueChange(r);
                            }),
                            onKeyDown: o(e.onKeyDown, (e) => {
                                [" ", "Enter"].includes(e.key) && l.onValueChange(r);
                            }),
                            onFocus: o(e.onFocus, () => {
                                const e = "manual" !== l.activationMode;
                                p || i || !e || l.onValueChange(r);
                            }),
                        }),
                    });
                });
            P.displayName = x;
            var _ = "TabsContent",
                W = r.forwardRef((e, n) => {
                    const { __scopeTabs: t, value: o, forceMount: i, children: a, ...s } = e,
                        l = O(_, t),
                        u = D(l.baseId, o),
                        d = V(l.baseId, o),
                        p = o === l.value,
                        m = r.useRef(p);
                    return (
                        r.useEffect(() => {
                            const e = requestAnimationFrame(() => (m.current = !1));
                            return () => cancelAnimationFrame(e);
                        }, []),
                        (0, f.jsx)(c, { present: i || p, children: ({ present: t }) => (0, f.jsx)(b.div, { "data-state": p ? "active" : "inactive", "data-orientation": l.orientation, role: "tabpanel", "aria-labelledby": u, hidden: !t, id: d, tabIndex: 0, ...s, ref: n, style: { ...e.style, animationDuration: m.current ? "0s" : void 0 }, children: t && a }) })
                    );
                });
            function D(e, n) {
                return `${e}-trigger-${n}`;
            }
            function V(e, n) {
                return `${e}-content-${n}`;
            }
            W.displayName = _;
            var I = j,
                S = M,
                k = P,
                F = W;
        },
        627757: (e, n, t) => {
            t.d(n, { W: () => o });
            var r = t(202784);
            function o(e) {
                const n = r.useRef(e);
                return (
                    r.useEffect(() => {
                        n.current = e;
                    }),
                    r.useMemo(
                        () =>
                            (...e) =>
                                n.current?.(...e),
                        [],
                    )
                );
            }
        },
        387695: (e, n, t) => {
            t.d(n, { T: () => i });
            var r = t(202784),
                o = t(627757);
            function i({ prop: e, defaultProp: n, onChange: t = () => {} }) {
                const [i, a] = (function ({ defaultProp: e, onChange: n }) {
                        const t = r.useState(e),
                            [i] = t,
                            a = r.useRef(i),
                            s = (0, o.W)(n);
                        return (
                            r.useEffect(() => {
                                a.current !== i && (s(i), (a.current = i));
                            }, [i, a, s]),
                            t
                        );
                    })({ defaultProp: n, onChange: t }),
                    s = void 0 !== e,
                    l = s ? e : i,
                    u = (0, o.W)(t);
                return [
                    l,
                    r.useCallback(
                        (n) => {
                            if (s) {
                                const t = "function" == typeof n ? n(e) : n;
                                t !== e && u(t);
                            } else a(n);
                        },
                        [s, e, a, u],
                    ),
                ];
            }
        },
        986796: (e, n, t) => {
            t.d(n, { e: () => i });
            var r = t(202784),
                o = t(627757);
            function i(e, n = globalThis?.document) {
                const t = (0, o.W)(e);
                r.useEffect(() => {
                    const e = (e) => {
                        "Escape" === e.key && t(e);
                    };
                    return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
                }, [t, n]);
            }
        },
        861644: (e, n, t) => {
            t.d(n, { b: () => o });
            var r = t(202784),
                o = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {};
        },
        335019: (e, n, t) => {
            t.d(n, { t: () => i });
            var r = t(202784),
                o = t(861644);
            function i(e) {
                const [n, t] = r.useState(void 0);
                return (
                    (0, o.b)(() => {
                        if (e) {
                            t({ width: e.offsetWidth, height: e.offsetHeight });
                            const n = new ResizeObserver((n) => {
                                if (!Array.isArray(n)) return;
                                if (!n.length) return;
                                const r = n[0];
                                let o, i;
                                if ("borderBoxSize" in r) {
                                    const e = r.borderBoxSize,
                                        n = Array.isArray(e) ? e[0] : e;
                                    (o = n.inlineSize), (i = n.blockSize);
                                } else (o = e.offsetWidth), (i = e.offsetHeight);
                                t({ width: o, height: i });
                            });
                            return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
                        }
                        t(void 0);
                    }, [e]),
                    n
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-cd9f24fc.a457984a.js.map

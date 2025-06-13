"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-bb71bfa3"],
    {
        966830: (e, n, t) => {
            t.d(n, { VY: () => z, ck: () => q, Uv: () => L, fC: () => B, xz: () => G });
            var r = t(202784),
                o = t.t(r, 2);
            function a(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === t || !r.defaultPrevented)) return n?.(r);
                };
            }
            var i = t(552322);
            function u(...e) {
                const n = e[0];
                if (1 === e.length) return n;
                const t = () => {
                    const t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const o = t.reduce((n, { useScope: t, scopeName: r }) => ({ ...n, ...t(e)[`__scope${r}`] }), {});
                        return r.useMemo(() => ({ [`__scope${n.scopeName}`]: o }), [o]);
                    };
                };
                return (t.scopeName = n.scopeName), t;
            }
            t(928316);
            function s(e, n) {
                if ("function" == typeof e) return e(n);
                null != e && (e.current = n);
            }
            function c(...e) {
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
            function l(e) {
                const n = f(e),
                    t = r.forwardRef((e, t) => {
                        const { children: o, ...a } = e,
                            u = r.Children.toArray(o),
                            s = u.find(p);
                        if (s) {
                            const e = s.props.children,
                                o = u.map((n) => (n === s ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : n));
                            return (0, i.jsx)(n, { ...a, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null });
                        }
                        return (0, i.jsx)(n, { ...a, ref: t, children: o });
                    });
                return (t.displayName = `${e}.Slot`), t;
            }
            function f(e) {
                const n = r.forwardRef((e, n) => {
                    const { children: t, ...o } = e;
                    if (r.isValidElement(t)) {
                        const e = (function (e) {
                                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                    t = n && "isReactWarning" in n && n.isReactWarning;
                                if (t) return e.ref;
                                if (((n = Object.getOwnPropertyDescriptor(e, "ref")?.get), (t = n && "isReactWarning" in n && n.isReactWarning), t)) return e.props.ref;
                                return e.props.ref || e.ref;
                            })(t),
                            a = (function (e, n) {
                                const t = { ...n };
                                for (const r in n) {
                                    const o = e[r],
                                        a = n[r];
                                    /^on[A-Z]/.test(r)
                                        ? o && a
                                            ? (t[r] = (...e) => {
                                                  const n = a(...e);
                                                  return o(...e), n;
                                              })
                                            : o && (t[r] = o)
                                        : "style" === r
                                          ? (t[r] = { ...o, ...a })
                                          : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "));
                                }
                                return { ...e, ...t };
                            })(o, t.props);
                        return t.type !== r.Fragment && (a.ref = n ? c(n, e) : e), r.cloneElement(t, a);
                    }
                    return r.Children.count(t) > 1 ? r.Children.only(null) : null;
                });
                return (n.displayName = `${e}.SlotClone`), n;
            }
            var d = Symbol("radix.slottable");
            function p(e) {
                return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d;
            }
            var x = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
                const t = l(`Primitive.${n}`),
                    o = r.forwardRef((e, r) => {
                        const { asChild: o, ...a } = e,
                            u = o ? t : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(u, { ...a, ref: r });
                    });
                return (o.displayName = `Primitive.${n}`), { ...e, [n]: o };
            }, {});
            var m = t(566588);
            var h = globalThis?.document ? r.useLayoutEffect : () => {},
                C = o[" useInsertionEffect ".trim().toString()] || h;
            function v({ prop: e, defaultProp: n, onChange: t = () => {}, caller: o }) {
                const [a, i, u] = (function ({ defaultProp: e, onChange: n }) {
                        const [t, o] = r.useState(e),
                            a = r.useRef(t),
                            i = r.useRef(n);
                        return (
                            C(() => {
                                i.current = n;
                            }, [n]),
                            r.useEffect(() => {
                                a.current !== t && (i.current?.(t), (a.current = t));
                            }, [t, a]),
                            [t, o, i]
                        );
                    })({ defaultProp: n, onChange: t }),
                    s = void 0 !== e,
                    c = s ? e : a;
                {
                    const n = r.useRef(void 0 !== e);
                    r.useEffect(() => {
                        const e = n.current;
                        if (e !== s) {
                        }
                        n.current = s;
                    }, [s, o]);
                }
                const l = r.useCallback(
                    (n) => {
                        if (s) {
                            const t = (function (e) {
                                return "function" == typeof e;
                            })(n)
                                ? n(e)
                                : n;
                            t !== e && u.current?.(t);
                        } else i(n);
                    },
                    [s, e, i, u],
                );
                return [c, l];
            }
            Symbol("RADIX:SYNC_STATE");
            var g = "ContextMenu",
                [_, w] = (function (e, n = []) {
                    let t = [];
                    const o = () => {
                        const n = t.map((e) => r.createContext(e));
                        return function (t) {
                            const o = t?.[e] || n;
                            return r.useMemo(() => ({ [`__scope${e}`]: { ...t, [e]: o } }), [t, o]);
                        };
                    };
                    return (
                        (o.scopeName = e),
                        [
                            function (n, o) {
                                const a = r.createContext(o),
                                    u = t.length;
                                t = [...t, o];
                                const s = (n) => {
                                    const { scope: t, children: o, ...s } = n,
                                        c = t?.[e]?.[u] || a,
                                        l = r.useMemo(() => s, Object.values(s));
                                    return (0, i.jsx)(c.Provider, { value: l, children: o });
                                };
                                return (
                                    (s.displayName = n + "Provider"),
                                    [
                                        s,
                                        function (t, i) {
                                            const s = i?.[e]?.[u] || a,
                                                c = r.useContext(s);
                                            if (c) return c;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${t}\` must be used within \`${n}\``);
                                        },
                                    ]
                                );
                            },
                            u(o, ...n),
                        ]
                    );
                })(g, [m.Wf]),
                y = (0, m.Wf)(),
                [M, b] = _(g),
                R = (e) => {
                    const { __scopeContextMenu: n, children: t, onOpenChange: o, dir: a, modal: u = !0 } = e,
                        [s, c] = r.useState(!1),
                        l = y(n),
                        f = (function (e) {
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
                        })(o),
                        d = r.useCallback(
                            (e) => {
                                c(e), f(e);
                            },
                            [f],
                        );
                    return (0, i.jsx)(M, { scope: n, open: s, onOpenChange: d, modal: u, children: (0, i.jsx)(m.fC, { ...l, dir: a, open: s, onOpenChange: d, modal: u, children: t }) });
                };
            R.displayName = g;
            var N = "ContextMenuTrigger",
                j = r.forwardRef((e, n) => {
                    const { __scopeContextMenu: t, disabled: o = !1, ...u } = e,
                        s = b(N, t),
                        c = y(t),
                        l = r.useRef({ x: 0, y: 0 }),
                        f = r.useRef({ getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...l.current }) }),
                        d = r.useRef(0),
                        p = r.useCallback(() => window.clearTimeout(d.current), []),
                        h = (e) => {
                            (l.current = { x: e.clientX, y: e.clientY }), s.onOpenChange(!0);
                        };
                    return (
                        r.useEffect(() => p, [p]),
                        r.useEffect(() => {
                            o && p();
                        }, [o, p]),
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.ee, { ...c, virtualRef: f }),
                                (0, i.jsx)(x.span, {
                                    "data-state": s.open ? "open" : "closed",
                                    "data-disabled": o ? "" : void 0,
                                    ...u,
                                    ref: n,
                                    style: { WebkitTouchCallout: "none", ...e.style },
                                    onContextMenu: o
                                        ? e.onContextMenu
                                        : a(e.onContextMenu, (e) => {
                                              p(), h(e), e.preventDefault();
                                          }),
                                    onPointerDown: o
                                        ? e.onPointerDown
                                        : a(
                                              e.onPointerDown,
                                              Z((e) => {
                                                  p(), (d.current = window.setTimeout(() => h(e), 700));
                                              }),
                                          ),
                                    onPointerMove: o ? e.onPointerMove : a(e.onPointerMove, Z(p)),
                                    onPointerCancel: o ? e.onPointerCancel : a(e.onPointerCancel, Z(p)),
                                    onPointerUp: o ? e.onPointerUp : a(e.onPointerUp, Z(p)),
                                }),
                            ],
                        })
                    );
                });
            j.displayName = N;
            var P = (e) => {
                const { __scopeContextMenu: n, ...t } = e,
                    r = y(n);
                return (0, i.jsx)(m.h_, { ...r, ...t });
            };
            P.displayName = "ContextMenuPortal";
            var E = "ContextMenuContent",
                O = r.forwardRef((e, n) => {
                    const { __scopeContextMenu: t, ...o } = e,
                        a = b(E, t),
                        u = y(t),
                        s = r.useRef(!1);
                    return (0, i.jsx)(m.VY, {
                        ...u,
                        ...o,
                        ref: n,
                        side: "right",
                        sideOffset: 2,
                        align: "start",
                        onCloseAutoFocus: (n) => {
                            e.onCloseAutoFocus?.(n), !n.defaultPrevented && s.current && n.preventDefault(), (s.current = !1);
                        },
                        onInteractOutside: (n) => {
                            e.onInteractOutside?.(n), n.defaultPrevented || a.modal || (s.current = !0);
                        },
                        style: { ...e.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" },
                    });
                });
            O.displayName = E;
            var S = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.ZA, { ...o, ...r, ref: n });
            });
            S.displayName = "ContextMenuGroup";
            var k = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.__, { ...o, ...r, ref: n });
            });
            k.displayName = "ContextMenuLabel";
            var I = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.ck, { ...o, ...r, ref: n });
            });
            I.displayName = "ContextMenuItem";
            var D = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.oC, { ...o, ...r, ref: n });
            });
            D.displayName = "ContextMenuCheckboxItem";
            var T = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.Ee, { ...o, ...r, ref: n });
            });
            T.displayName = "ContextMenuRadioGroup";
            var $ = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.Rk, { ...o, ...r, ref: n });
            });
            $.displayName = "ContextMenuRadioItem";
            var A = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.wU, { ...o, ...r, ref: n });
            });
            A.displayName = "ContextMenuItemIndicator";
            var W = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.Z0, { ...o, ...r, ref: n });
            });
            W.displayName = "ContextMenuSeparator";
            var F = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.Eh, { ...o, ...r, ref: n });
            });
            F.displayName = "ContextMenuArrow";
            var V = "ContextMenuSub",
                U = (e) => {
                    const { __scopeContextMenu: n, children: t, onOpenChange: r, open: o, defaultOpen: a } = e,
                        u = y(n),
                        [s, c] = v({ prop: o, defaultProp: a ?? !1, onChange: r, caller: V });
                    return (0, i.jsx)(m.Tr, { ...u, open: s, onOpenChange: c, children: t });
                };
            U.displayName = V;
            var Y = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.fF, { ...o, ...r, ref: n });
            });
            Y.displayName = "ContextMenuSubTrigger";
            var X = r.forwardRef((e, n) => {
                const { __scopeContextMenu: t, ...r } = e,
                    o = y(t);
                return (0, i.jsx)(m.tu, { ...o, ...r, ref: n, style: { ...e.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
            });
            function Z(e) {
                return (n) => ("mouse" !== n.pointerType ? e(n) : void 0);
            }
            X.displayName = "ContextMenuSubContent";
            var B = R,
                G = j,
                L = P,
                z = O,
                q = I;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-bb71bfa3.1f39c14a.js.map

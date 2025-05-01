"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-02f009a5"],
    {
        959548: (e, t, n) => {
            n.d(t, { ck: () => F, fC: () => A, Pc: () => I });
            var r = n(202784);
            function o(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            var l = n(405895);
            function i(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function a(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = i(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : i(e[t], null);
                            }
                        };
                };
            }
            var s = n(392211),
                c = n(23372),
                u = (n(928316), n(552322)),
                d = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        l = r.Children.toArray(n),
                        i = l.find(v);
                    if (i) {
                        const e = i.props.children,
                            n = l.map((t) => (t === i ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, u.jsx)(p, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, u.jsx)(p, { ...o, ref: t, children: n });
                });
            d.displayName = "Slot";
            var p = r.forwardRef((e, t) => {
                const { children: n, ...o } = e;
                if (r.isValidElement(n)) {
                    const e = (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(n),
                        l = (function (e, t) {
                            const n = { ...t };
                            for (const r in t) {
                                const o = e[r],
                                    l = t[r];
                                /^on[A-Z]/.test(r)
                                    ? o && l
                                        ? (n[r] = (...e) => {
                                              l(...e), o(...e);
                                          })
                                        : o && (n[r] = o)
                                    : "style" === r
                                      ? (n[r] = { ...o, ...l })
                                      : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "));
                            }
                            return { ...e, ...n };
                        })(o, n.props);
                    return n.type !== r.Fragment && (l.ref = t ? a(t, e) : e), r.cloneElement(n, l);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            p.displayName = "SlotClone";
            var f = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
            function v(e) {
                return r.isValidElement(e) && e.type === f;
            }
            var h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        l = r ? d : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(l, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var m = n(627757),
                g = n(387695),
                w = n(759241),
                y = "rovingFocusGroup.onEntryFocus",
                x = { bubbles: !1, cancelable: !0 },
                b = "RovingFocusGroup",
                [S, C, R] = (0, l.B)(b),
                [_, I] = (0, s.b)(b, [R]),
                [T, j] = _(b),
                P = r.forwardRef((e, t) => (0, u.jsx)(S.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, u.jsx)(S.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, u.jsx)(E, { ...e, ref: t }) }) }));
            P.displayName = b;
            var E = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, orientation: l, loop: i = !1, dir: s, currentTabStopId: c, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: p, onEntryFocus: f, preventScrollOnEntryFocus: v = !1, ...b } = e,
                        S = r.useRef(null),
                        R = (function (...e) {
                            return r.useCallback(a(...e), e);
                        })(t, S),
                        _ = (0, w.gm)(s),
                        [I = null, j] = (0, g.T)({ prop: c, defaultProp: d, onChange: p }),
                        [P, E] = r.useState(!1),
                        k = (0, m.W)(f),
                        D = C(n),
                        M = r.useRef(!1),
                        [A, F] = r.useState(0);
                    return (
                        r.useEffect(() => {
                            const e = S.current;
                            if (e) return e.addEventListener(y, k), () => e.removeEventListener(y, k);
                        }, [k]),
                        (0, u.jsx)(T, {
                            scope: n,
                            orientation: l,
                            dir: _,
                            loop: i,
                            currentTabStopId: I,
                            onItemFocus: r.useCallback((e) => j(e), [j]),
                            onItemShiftTab: r.useCallback(() => E(!0), []),
                            onFocusableItemAdd: r.useCallback(() => F((e) => e + 1), []),
                            onFocusableItemRemove: r.useCallback(() => F((e) => e - 1), []),
                            children: (0, u.jsx)(h.div, {
                                tabIndex: P || 0 === A ? -1 : 0,
                                "data-orientation": l,
                                ...b,
                                ref: R,
                                style: { outline: "none", ...e.style },
                                onMouseDown: o(e.onMouseDown, () => {
                                    M.current = !0;
                                }),
                                onFocus: o(e.onFocus, (e) => {
                                    const t = !M.current;
                                    if (e.target === e.currentTarget && t && !P) {
                                        const t = new CustomEvent(y, x);
                                        if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                            const e = D().filter((e) => e.focusable);
                                            N(
                                                [e.find((e) => e.active), e.find((e) => e.id === I), ...e].filter(Boolean).map((e) => e.ref.current),
                                                v,
                                            );
                                        }
                                    }
                                    M.current = !1;
                                }),
                                onBlur: o(e.onBlur, () => E(!1)),
                            }),
                        })
                    );
                }),
                k = "RovingFocusGroupItem",
                D = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, focusable: l = !0, active: i = !1, tabStopId: a, ...s } = e,
                        d = (0, c.M)(),
                        p = a || d,
                        f = j(k, n),
                        v = f.currentTabStopId === p,
                        m = C(n),
                        { onFocusableItemAdd: g, onFocusableItemRemove: w } = f;
                    return (
                        r.useEffect(() => {
                            if (l) return g(), () => w();
                        }, [l, g, w]),
                        (0, u.jsx)(S.ItemSlot, {
                            scope: n,
                            id: p,
                            focusable: l,
                            active: i,
                            children: (0, u.jsx)(h.span, {
                                tabIndex: v ? 0 : -1,
                                "data-orientation": f.orientation,
                                ...s,
                                ref: t,
                                onMouseDown: o(e.onMouseDown, (e) => {
                                    l ? f.onItemFocus(p) : e.preventDefault();
                                }),
                                onFocus: o(e.onFocus, () => f.onItemFocus(p)),
                                onKeyDown: o(e.onKeyDown, (e) => {
                                    if ("Tab" === e.key && e.shiftKey) return void f.onItemShiftTab();
                                    if (e.target !== e.currentTarget) return;
                                    const t = (function (e, t, n) {
                                        const r = (function (e, t) {
                                            return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
                                        })(e.key, n);
                                        return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) || ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r)) ? void 0 : M[r];
                                    })(e, f.orientation, f.dir);
                                    if (void 0 !== t) {
                                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                        e.preventDefault();
                                        let o = m()
                                            .filter((e) => e.focusable)
                                            .map((e) => e.ref.current);
                                        if ("last" === t) o.reverse();
                                        else if ("prev" === t || "next" === t) {
                                            "prev" === t && o.reverse();
                                            const l = o.indexOf(e.currentTarget);
                                            o = f.loop ? ((r = l + 1), (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(l + 1);
                                        }
                                        setTimeout(() => N(o));
                                    }
                                    var n, r;
                                }),
                            }),
                        })
                    );
                });
            D.displayName = k;
            var M = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function N(e, t = !1) {
                const n = document.activeElement;
                for (const r of e) {
                    if (r === n) return;
                    if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
                }
            }
            var A = P,
                F = D;
        },
        734670: (e, t, n) => {
            n.d(t, { $G: () => Ue, B4: () => Me, JO: () => Ne, VY: () => Fe, Z0: () => Ge, ZA: () => Le, __: () => Oe, ck: () => We, eT: () => Be, fC: () => ke, h_: () => Ae, l_: () => Ve, u_: () => Ke, wU: () => He, xz: () => De });
            var r = n(202784),
                o = n(928316),
                l = n(380106),
                i = n(395656),
                a = n(405895),
                s = n(238829),
                c = n(392211),
                u = n(759241),
                d = n(664266),
                p = n(11861),
                f = n(913620),
                v = n(23372),
                h = n(998946),
                m = n(308067),
                g = n(41911),
                w = n(376488),
                y = n(627757),
                x = n(387695),
                b = n(861644),
                S = n(890022),
                C = n(331725),
                R = n(549732),
                _ = n(958760),
                I = n(552322),
                T = [" ", "Enter", "ArrowUp", "ArrowDown"],
                j = [" ", "Enter"],
                P = "Select",
                [E, k, D] = (0, a.B)(P),
                [M, N] = (0, c.b)(P, [D, h.D7]),
                A = (0, h.D7)(),
                [F, V] = M(P),
                [L, O] = M(P),
                W = (e) => {
                    const { __scopeSelect: t, children: n, open: o, defaultOpen: l, onOpenChange: i, value: a, defaultValue: s, onValueChange: c, dir: d, name: p, autoComplete: f, disabled: m, required: g, form: w } = e,
                        y = A(t),
                        [b, S] = r.useState(null),
                        [C, R] = r.useState(null),
                        [_, T] = r.useState(!1),
                        j = (0, u.gm)(d),
                        [P = !1, k] = (0, x.T)({ prop: o, defaultProp: l, onChange: i }),
                        [D, M] = (0, x.T)({ prop: a, defaultProp: s, onChange: c }),
                        N = r.useRef(null),
                        V = !b || w || !!b.closest("form"),
                        [O, W] = r.useState(new Set()),
                        B = Array.from(O)
                            .map((e) => e.props.value)
                            .join(";");
                    return (0, I.jsx)(h.fC, {
                        ...y,
                        children: (0, I.jsxs)(F, {
                            required: g,
                            scope: t,
                            trigger: b,
                            onTriggerChange: S,
                            valueNode: C,
                            onValueNodeChange: R,
                            valueNodeHasChildren: _,
                            onValueNodeHasChildrenChange: T,
                            contentId: (0, v.M)(),
                            value: D,
                            onValueChange: M,
                            open: P,
                            onOpenChange: k,
                            dir: j,
                            triggerPointerDownPosRef: N,
                            disabled: m,
                            children: [
                                (0, I.jsx)(E.Provider, {
                                    scope: t,
                                    children: (0, I.jsx)(L, {
                                        scope: e.__scopeSelect,
                                        onNativeOptionAdd: r.useCallback((e) => {
                                            W((t) => new Set(t).add(e));
                                        }, []),
                                        onNativeOptionRemove: r.useCallback((e) => {
                                            W((t) => {
                                                const n = new Set(t);
                                                return n.delete(e), n;
                                            });
                                        }, []),
                                        children: n,
                                    }),
                                }),
                                V ? (0, I.jsxs)(je, { "aria-hidden": !0, required: g, tabIndex: -1, name: p, autoComplete: f, value: D, onChange: (e) => M(e.target.value), disabled: m, form: w, children: [void 0 === D ? (0, I.jsx)("option", { value: "" }) : null, Array.from(O)] }, B) : null,
                            ],
                        }),
                    });
                };
            W.displayName = P;
            var B = "SelectTrigger",
                H = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, disabled: o = !1, ...l } = e,
                        a = A(n),
                        c = V(B, n),
                        u = c.disabled || o,
                        d = (0, s.e)(t, c.onTriggerChange),
                        p = k(n),
                        f = r.useRef("touch"),
                        [v, m, w] = Pe((e) => {
                            const t = p().filter((e) => !e.disabled),
                                n = t.find((e) => e.value === c.value),
                                r = Ee(t, e, n);
                            void 0 !== r && c.onValueChange(r.value);
                        }),
                        y = (e) => {
                            u || (c.onOpenChange(!0), w()), e && (c.triggerPointerDownPosRef.current = { x: Math.round(e.pageX), y: Math.round(e.pageY) });
                        };
                    return (0, I.jsx)(h.ee, {
                        asChild: !0,
                        ...a,
                        children: (0, I.jsx)(g.WV.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": c.contentId,
                            "aria-expanded": c.open,
                            "aria-required": c.required,
                            "aria-autocomplete": "none",
                            dir: c.dir,
                            "data-state": c.open ? "open" : "closed",
                            disabled: u,
                            "data-disabled": u ? "" : void 0,
                            "data-placeholder": Te(c.value) ? "" : void 0,
                            ...l,
                            ref: d,
                            onClick: (0, i.M)(l.onClick, (e) => {
                                e.currentTarget.focus(), "mouse" !== f.current && y(e);
                            }),
                            onPointerDown: (0, i.M)(l.onPointerDown, (e) => {
                                f.current = e.pointerType;
                                const t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault());
                            }),
                            onKeyDown: (0, i.M)(l.onKeyDown, (e) => {
                                const t = "" !== v.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (t && " " === e.key) || (T.includes(e.key) && (y(), e.preventDefault()));
                            }),
                        }),
                    });
                });
            H.displayName = B;
            var K = "SelectValue",
                U = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: r, style: o, children: l, placeholder: i = "", ...a } = e,
                        c = V(K, n),
                        { onValueNodeHasChildrenChange: u } = c,
                        d = void 0 !== l,
                        p = (0, s.e)(t, c.onValueNodeChange);
                    return (
                        (0, b.b)(() => {
                            u(d);
                        }, [u, d]),
                        (0, I.jsx)(g.WV.span, { ...a, ref: p, style: { pointerEvents: "none" }, children: Te(c.value) ? (0, I.jsx)(I.Fragment, { children: i }) : l })
                    );
                });
            U.displayName = K;
            var G = r.forwardRef((e, t) => {
                const { __scopeSelect: n, children: r, ...o } = e;
                return (0, I.jsx)(g.WV.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
            });
            G.displayName = "SelectIcon";
            var z = (e) => (0, I.jsx)(m.h, { asChild: !0, ...e });
            z.displayName = "SelectPortal";
            var q = "SelectContent",
                Z = r.forwardRef((e, t) => {
                    const n = V(q, e.__scopeSelect),
                        [l, i] = r.useState();
                    if (
                        ((0, b.b)(() => {
                            i(new DocumentFragment());
                        }, []),
                        !n.open)
                    ) {
                        const t = l;
                        return t ? o.createPortal((0, I.jsx)(X, { scope: e.__scopeSelect, children: (0, I.jsx)(E.Slot, { scope: e.__scopeSelect, children: (0, I.jsx)("div", { children: e.children }) }) }), t) : null;
                    }
                    return (0, I.jsx)(J, { ...e, ref: t });
                });
            Z.displayName = q;
            var Y = 10,
                [X, $] = M(q),
                J = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, position: o = "item-aligned", onCloseAutoFocus: l, onEscapeKeyDown: a, onPointerDownOutside: c, side: u, sideOffset: v, align: h, alignOffset: m, arrowPadding: g, collisionBoundary: y, collisionPadding: x, sticky: b, hideWhenDetached: S, avoidCollisions: C, ...T } = e,
                        j = V(q, n),
                        [P, E] = r.useState(null),
                        [D, M] = r.useState(null),
                        N = (0, s.e)(t, (e) => E(e)),
                        [A, F] = r.useState(null),
                        [L, O] = r.useState(null),
                        W = k(n),
                        [B, H] = r.useState(!1),
                        K = r.useRef(!1);
                    r.useEffect(() => {
                        if (P) return (0, R.Ry)(P);
                    }, [P]),
                        (0, p.EW)();
                    const U = r.useCallback(
                            (e) => {
                                const [t, ...n] = W().map((e) => e.ref.current),
                                    [r] = n.slice(-1),
                                    o = document.activeElement;
                                for (const n of e) {
                                    if (n === o) return;
                                    if ((n?.scrollIntoView({ block: "nearest" }), n === t && D && (D.scrollTop = 0), n === r && D && (D.scrollTop = D.scrollHeight), n?.focus(), document.activeElement !== o)) return;
                                }
                            },
                            [W, D],
                        ),
                        G = r.useCallback(() => U([A, P]), [U, A, P]);
                    r.useEffect(() => {
                        B && G();
                    }, [B, G]);
                    const { onOpenChange: z, triggerPointerDownPosRef: Z } = j;
                    r.useEffect(() => {
                        if (P) {
                            let e = { x: 0, y: 0 };
                            const t = (t) => {
                                    e = { x: Math.abs(Math.round(t.pageX) - (Z.current?.x ?? 0)), y: Math.abs(Math.round(t.pageY) - (Z.current?.y ?? 0)) };
                                },
                                n = (n) => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : P.contains(n.target) || z(!1), document.removeEventListener("pointermove", t), (Z.current = null);
                                };
                            return (
                                null !== Z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, { capture: !0, once: !0 })),
                                () => {
                                    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
                                }
                            );
                        }
                    }, [P, z, Z]),
                        r.useEffect(() => {
                            const e = () => z(!1);
                            return (
                                window.addEventListener("blur", e),
                                window.addEventListener("resize", e),
                                () => {
                                    window.removeEventListener("blur", e), window.removeEventListener("resize", e);
                                }
                            );
                        }, [z]);
                    const [Y, $] = Pe((e) => {
                            const t = W().filter((e) => !e.disabled),
                                n = t.find((e) => e.ref.current === document.activeElement),
                                r = Ee(t, e, n);
                            r && setTimeout(() => r.ref.current.focus());
                        }),
                        J = r.useCallback(
                            (e, t, n) => {
                                const r = !K.current && !n;
                                ((void 0 !== j.value && j.value === t) || r) && (F(e), r && (K.current = !0));
                            },
                            [j.value],
                        ),
                        te = r.useCallback(() => P?.focus(), [P]),
                        ne = r.useCallback(
                            (e, t, n) => {
                                const r = !K.current && !n;
                                ((void 0 !== j.value && j.value === t) || r) && O(e);
                            },
                            [j.value],
                        ),
                        re = "popper" === o ? ee : Q,
                        oe = re === ee ? { side: u, sideOffset: v, align: h, alignOffset: m, arrowPadding: g, collisionBoundary: y, collisionPadding: x, sticky: b, hideWhenDetached: S, avoidCollisions: C } : {};
                    return (0, I.jsx)(X, {
                        scope: n,
                        content: P,
                        viewport: D,
                        onViewportChange: M,
                        itemRefCallback: J,
                        selectedItem: A,
                        onItemLeave: te,
                        itemTextRefCallback: ne,
                        focusSelectedItem: G,
                        selectedItemText: L,
                        position: o,
                        isPositioned: B,
                        searchRef: Y,
                        children: (0, I.jsx)(_.Z, {
                            as: w.g7,
                            allowPinchZoom: !0,
                            children: (0, I.jsx)(f.M, {
                                asChild: !0,
                                trapped: j.open,
                                onMountAutoFocus: (e) => {
                                    e.preventDefault();
                                },
                                onUnmountAutoFocus: (0, i.M)(l, (e) => {
                                    j.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                                }),
                                children: (0, I.jsx)(d.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: !0,
                                    onEscapeKeyDown: a,
                                    onPointerDownOutside: c,
                                    onFocusOutside: (e) => e.preventDefault(),
                                    onDismiss: () => j.onOpenChange(!1),
                                    children: (0, I.jsx)(re, {
                                        role: "listbox",
                                        id: j.contentId,
                                        "data-state": j.open ? "open" : "closed",
                                        dir: j.dir,
                                        onContextMenu: (e) => e.preventDefault(),
                                        ...T,
                                        ...oe,
                                        onPlaced: () => H(!0),
                                        ref: N,
                                        style: { display: "flex", flexDirection: "column", outline: "none", ...T.style },
                                        onKeyDown: (0, i.M)(T.onKeyDown, (e) => {
                                            const t = e.ctrlKey || e.altKey || e.metaKey;
                                            if (("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))) {
                                                let t = W()
                                                    .filter((e) => !e.disabled)
                                                    .map((e) => e.ref.current);
                                                if ((["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key))) {
                                                    const n = e.target,
                                                        r = t.indexOf(n);
                                                    t = t.slice(r + 1);
                                                }
                                                setTimeout(() => U(t)), e.preventDefault();
                                            }
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            J.displayName = "SelectContentImpl";
            var Q = r.forwardRef((e, t) => {
                const { __scopeSelect: n, onPlaced: o, ...i } = e,
                    a = V(q, n),
                    c = $(q, n),
                    [u, d] = r.useState(null),
                    [p, f] = r.useState(null),
                    v = (0, s.e)(t, (e) => f(e)),
                    h = k(n),
                    m = r.useRef(!1),
                    w = r.useRef(!0),
                    { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = c,
                    R = r.useCallback(() => {
                        if (a.trigger && a.valueNode && u && p && y && x && S) {
                            const e = a.trigger.getBoundingClientRect(),
                                t = p.getBoundingClientRect(),
                                n = a.valueNode.getBoundingClientRect(),
                                r = S.getBoundingClientRect();
                            if ("rtl" !== a.dir) {
                                const o = r.left - t.left,
                                    i = n.left - o,
                                    a = e.left - i,
                                    s = e.width + a,
                                    c = Math.max(s, t.width),
                                    d = window.innerWidth - Y,
                                    p = (0, l.u)(i, [Y, Math.max(Y, d - c)]);
                                (u.style.minWidth = s + "px"), (u.style.left = p + "px");
                            } else {
                                const o = t.right - r.right,
                                    i = window.innerWidth - n.right - o,
                                    a = window.innerWidth - e.right - i,
                                    s = e.width + a,
                                    c = Math.max(s, t.width),
                                    d = window.innerWidth - Y,
                                    p = (0, l.u)(i, [Y, Math.max(Y, d - c)]);
                                (u.style.minWidth = s + "px"), (u.style.right = p + "px");
                            }
                            const i = h(),
                                s = window.innerHeight - 2 * Y,
                                c = y.scrollHeight,
                                d = window.getComputedStyle(p),
                                f = parseInt(d.borderTopWidth, 10),
                                v = parseInt(d.paddingTop, 10),
                                g = parseInt(d.borderBottomWidth, 10),
                                w = f + v + c + parseInt(d.paddingBottom, 10) + g,
                                b = Math.min(5 * x.offsetHeight, w),
                                C = window.getComputedStyle(y),
                                R = parseInt(C.paddingTop, 10),
                                _ = parseInt(C.paddingBottom, 10),
                                I = e.top + e.height / 2 - Y,
                                T = s - I,
                                j = x.offsetHeight / 2,
                                P = f + v + (x.offsetTop + j),
                                E = w - P;
                            if (P <= I) {
                                const e = i.length > 0 && x === i[i.length - 1].ref.current;
                                u.style.bottom = "0px";
                                const t = p.clientHeight - y.offsetTop - y.offsetHeight,
                                    n = P + Math.max(T, j + (e ? _ : 0) + t + g);
                                u.style.height = n + "px";
                            } else {
                                const e = i.length > 0 && x === i[0].ref.current;
                                u.style.top = "0px";
                                const t = Math.max(I, f + y.offsetTop + (e ? R : 0) + j) + E;
                                (u.style.height = t + "px"), (y.scrollTop = P - I + y.offsetTop);
                            }
                            (u.style.margin = `${Y}px 0`), (u.style.minHeight = b + "px"), (u.style.maxHeight = s + "px"), o?.(), requestAnimationFrame(() => (m.current = !0));
                        }
                    }, [h, a.trigger, a.valueNode, u, p, y, x, S, a.dir, o]);
                (0, b.b)(() => R(), [R]);
                const [_, T] = r.useState();
                (0, b.b)(() => {
                    p && T(window.getComputedStyle(p).zIndex);
                }, [p]);
                const j = r.useCallback(
                    (e) => {
                        e && !0 === w.current && (R(), C?.(), (w.current = !1));
                    },
                    [R, C],
                );
                return (0, I.jsx)(te, { scope: n, contentWrapper: u, shouldExpandOnScrollRef: m, onScrollButtonChange: j, children: (0, I.jsx)("div", { ref: d, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: _ }, children: (0, I.jsx)(g.WV.div, { ...i, ref: v, style: { boxSizing: "border-box", maxHeight: "100%", ...i.style } }) }) });
            });
            Q.displayName = "SelectItemAlignedPosition";
            var ee = r.forwardRef((e, t) => {
                const { __scopeSelect: n, align: r = "start", collisionPadding: o = Y, ...l } = e,
                    i = A(n);
                return (0, I.jsx)(h.VY, { ...i, ...l, ref: t, align: r, collisionPadding: o, style: { boxSizing: "border-box", ...l.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
            });
            ee.displayName = "SelectPopperPosition";
            var [te, ne] = M(q, {}),
                re = "SelectViewport",
                oe = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, nonce: o, ...l } = e,
                        a = $(re, n),
                        c = ne(re, n),
                        u = (0, s.e)(t, a.onViewportChange),
                        d = r.useRef(0);
                    return (0, I.jsxs)(I.Fragment, {
                        children: [
                            (0, I.jsx)("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: o }),
                            (0, I.jsx)(E.Slot, {
                                scope: n,
                                children: (0, I.jsx)(g.WV.div, {
                                    "data-radix-select-viewport": "",
                                    role: "presentation",
                                    ...l,
                                    ref: u,
                                    style: { position: "relative", flex: 1, overflow: "hidden auto", ...l.style },
                                    onScroll: (0, i.M)(l.onScroll, (e) => {
                                        const t = e.currentTarget,
                                            { contentWrapper: n, shouldExpandOnScrollRef: r } = c;
                                        if (r?.current && n) {
                                            const e = Math.abs(d.current - t.scrollTop);
                                            if (e > 0) {
                                                const r = window.innerHeight - 2 * Y,
                                                    o = parseFloat(n.style.minHeight),
                                                    l = parseFloat(n.style.height),
                                                    i = Math.max(o, l);
                                                if (i < r) {
                                                    const o = i + e,
                                                        l = Math.min(r, o),
                                                        a = o - l;
                                                    (n.style.height = l + "px"), "0px" === n.style.bottom && ((t.scrollTop = a > 0 ? a : 0), (n.style.justifyContent = "flex-end"));
                                                }
                                            }
                                        }
                                        d.current = t.scrollTop;
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            oe.displayName = re;
            var le = "SelectGroup",
                [ie, ae] = M(le),
                se = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = (0, v.M)();
                    return (0, I.jsx)(ie, { scope: n, id: o, children: (0, I.jsx)(g.WV.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
                });
            se.displayName = le;
            var ce = "SelectLabel",
                ue = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = ae(ce, n);
                    return (0, I.jsx)(g.WV.div, { id: o.id, ...r, ref: t });
                });
            ue.displayName = ce;
            var de = "SelectItem",
                [pe, fe] = M(de),
                ve = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, value: o, disabled: l = !1, textValue: a, ...c } = e,
                        u = V(de, n),
                        d = $(de, n),
                        p = u.value === o,
                        [f, h] = r.useState(a ?? ""),
                        [m, w] = r.useState(!1),
                        y = (0, s.e)(t, (e) => d.itemRefCallback?.(e, o, l)),
                        x = (0, v.M)(),
                        b = r.useRef("touch"),
                        S = () => {
                            l || (u.onValueChange(o), u.onOpenChange(!1));
                        };
                    if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, I.jsx)(pe, {
                        scope: n,
                        value: o,
                        disabled: l,
                        textId: x,
                        isSelected: p,
                        onItemTextChange: r.useCallback((e) => {
                            h((t) => t || (e?.textContent ?? "").trim());
                        }, []),
                        children: (0, I.jsx)(E.ItemSlot, {
                            scope: n,
                            value: o,
                            disabled: l,
                            textValue: f,
                            children: (0, I.jsx)(g.WV.div, {
                                role: "option",
                                "aria-labelledby": x,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": p && m,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": l || void 0,
                                "data-disabled": l ? "" : void 0,
                                tabIndex: l ? void 0 : -1,
                                ...c,
                                ref: y,
                                onFocus: (0, i.M)(c.onFocus, () => w(!0)),
                                onBlur: (0, i.M)(c.onBlur, () => w(!1)),
                                onClick: (0, i.M)(c.onClick, () => {
                                    "mouse" !== b.current && S();
                                }),
                                onPointerUp: (0, i.M)(c.onPointerUp, () => {
                                    "mouse" === b.current && S();
                                }),
                                onPointerDown: (0, i.M)(c.onPointerDown, (e) => {
                                    b.current = e.pointerType;
                                }),
                                onPointerMove: (0, i.M)(c.onPointerMove, (e) => {
                                    (b.current = e.pointerType), l ? d.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({ preventScroll: !0 });
                                }),
                                onPointerLeave: (0, i.M)(c.onPointerLeave, (e) => {
                                    e.currentTarget === document.activeElement && d.onItemLeave?.();
                                }),
                                onKeyDown: (0, i.M)(c.onKeyDown, (e) => {
                                    ("" !== d.searchRef?.current && " " === e.key) || (j.includes(e.key) && S(), " " === e.key && e.preventDefault());
                                }),
                            }),
                        }),
                    });
                });
            ve.displayName = de;
            var he = "SelectItemText",
                me = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: l, style: i, ...a } = e,
                        c = V(he, n),
                        u = $(he, n),
                        d = fe(he, n),
                        p = O(he, n),
                        [f, v] = r.useState(null),
                        h = (0, s.e)(
                            t,
                            (e) => v(e),
                            d.onItemTextChange,
                            (e) => u.itemTextRefCallback?.(e, d.value, d.disabled),
                        ),
                        m = f?.textContent,
                        w = r.useMemo(() => (0, I.jsx)("option", { value: d.value, disabled: d.disabled, children: m }, d.value), [d.disabled, d.value, m]),
                        { onNativeOptionAdd: y, onNativeOptionRemove: x } = p;
                    return (0, b.b)(() => (y(w), () => x(w)), [y, x, w]), (0, I.jsxs)(I.Fragment, { children: [(0, I.jsx)(g.WV.span, { id: d.textId, ...a, ref: h }), d.isSelected && c.valueNode && !c.valueNodeHasChildren ? o.createPortal(a.children, c.valueNode) : null] });
                });
            me.displayName = he;
            var ge = "SelectItemIndicator",
                we = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e;
                    return fe(ge, n).isSelected ? (0, I.jsx)(g.WV.span, { "aria-hidden": !0, ...r, ref: t }) : null;
                });
            we.displayName = ge;
            var ye = "SelectScrollUpButton",
                xe = r.forwardRef((e, t) => {
                    const n = $(ye, e.__scopeSelect),
                        o = ne(ye, e.__scopeSelect),
                        [l, i] = r.useState(!1),
                        a = (0, s.e)(t, o.onScrollButtonChange);
                    return (
                        (0, b.b)(() => {
                            if (n.viewport && n.isPositioned) {
                                let e = function () {
                                    const e = t.scrollTop > 0;
                                    i(e);
                                };
                                const t = n.viewport;
                                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
                            }
                        }, [n.viewport, n.isPositioned]),
                        l
                            ? (0, I.jsx)(Ce, {
                                  ...e,
                                  ref: a,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            xe.displayName = ye;
            var be = "SelectScrollDownButton",
                Se = r.forwardRef((e, t) => {
                    const n = $(be, e.__scopeSelect),
                        o = ne(be, e.__scopeSelect),
                        [l, i] = r.useState(!1),
                        a = (0, s.e)(t, o.onScrollButtonChange);
                    return (
                        (0, b.b)(() => {
                            if (n.viewport && n.isPositioned) {
                                let e = function () {
                                    const e = t.scrollHeight - t.clientHeight,
                                        n = Math.ceil(t.scrollTop) < e;
                                    i(n);
                                };
                                const t = n.viewport;
                                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
                            }
                        }, [n.viewport, n.isPositioned]),
                        l
                            ? (0, I.jsx)(Ce, {
                                  ...e,
                                  ref: a,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            Se.displayName = be;
            var Ce = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, onAutoScroll: o, ...l } = e,
                        a = $("SelectScrollButton", n),
                        s = r.useRef(null),
                        c = k(n),
                        u = r.useCallback(() => {
                            null !== s.current && (window.clearInterval(s.current), (s.current = null));
                        }, []);
                    return (
                        r.useEffect(() => () => u(), [u]),
                        (0, b.b)(() => {
                            const e = c().find((e) => e.ref.current === document.activeElement);
                            e?.ref.current?.scrollIntoView({ block: "nearest" });
                        }, [c]),
                        (0, I.jsx)(g.WV.div, {
                            "aria-hidden": !0,
                            ...l,
                            ref: t,
                            style: { flexShrink: 0, ...l.style },
                            onPointerDown: (0, i.M)(l.onPointerDown, () => {
                                null === s.current && (s.current = window.setInterval(o, 50));
                            }),
                            onPointerMove: (0, i.M)(l.onPointerMove, () => {
                                a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50));
                            }),
                            onPointerLeave: (0, i.M)(l.onPointerLeave, () => {
                                u();
                            }),
                        })
                    );
                }),
                Re = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e;
                    return (0, I.jsx)(g.WV.div, { "aria-hidden": !0, ...r, ref: t });
                });
            Re.displayName = "SelectSeparator";
            var _e = "SelectArrow",
                Ie = r.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...r } = e,
                        o = A(n),
                        l = V(_e, n),
                        i = $(_e, n);
                    return l.open && "popper" === i.position ? (0, I.jsx)(h.Eh, { ...o, ...r, ref: t }) : null;
                });
            function Te(e) {
                return "" === e || void 0 === e;
            }
            Ie.displayName = _e;
            var je = r.forwardRef((e, t) => {
                const { value: n, ...o } = e,
                    l = r.useRef(null),
                    i = (0, s.e)(t, l),
                    a = (0, S.D)(n);
                return (
                    r.useEffect(() => {
                        const e = l.current,
                            t = window.HTMLSelectElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "value").set;
                        if (a !== n && r) {
                            const t = new Event("change", { bubbles: !0 });
                            r.call(e, n), e.dispatchEvent(t);
                        }
                    }, [a, n]),
                    (0, I.jsx)(C.T, { asChild: !0, children: (0, I.jsx)("select", { ...o, ref: i, defaultValue: n }) })
                );
            });
            function Pe(e) {
                const t = (0, y.W)(e),
                    n = r.useRef(""),
                    o = r.useRef(0),
                    l = r.useCallback(
                        (e) => {
                            const r = n.current + e;
                            t(r),
                                (function e(t) {
                                    (n.current = t), window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3));
                                })(r);
                        },
                        [t],
                    ),
                    i = r.useCallback(() => {
                        (n.current = ""), window.clearTimeout(o.current);
                    }, []);
                return r.useEffect(() => () => window.clearTimeout(o.current), []), [n, l, i];
            }
            function Ee(e, t, n) {
                const r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                    o = n ? e.indexOf(n) : -1;
                let l = ((i = e), (a = Math.max(o, 0)), i.map((e, t) => i[(a + t) % i.length]));
                var i, a;
                1 === r.length && (l = l.filter((e) => e !== n));
                const s = l.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
                return s !== n ? s : void 0;
            }
            je.displayName = "BubbleSelect";
            var ke = W,
                De = H,
                Me = U,
                Ne = G,
                Ae = z,
                Fe = Z,
                Ve = oe,
                Le = se,
                Oe = ue,
                We = ve,
                Be = me,
                He = we,
                Ke = xe,
                Ue = Se,
                Ge = Re;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-02f009a5.21789e5a.js.map

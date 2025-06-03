"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-4179cf44"],
    {
        566588: (e, n, t) => {
            t.d(n, { Ee: () => Ne, Eh: () => Ue, Rk: () => Ve, Tr: () => Be, VY: () => Ie, Wf: () => S, Z0: () => Ge, ZA: () => Fe, __: () => Le, ck: () => Ke, ee: () => Te, fC: () => Oe, fF: () => Xe, h_: () => Se, oC: () => Ae, tu: () => ze, wU: () => We });
            var r = t(202784),
                o = t(75572),
                c = t(449272),
                s = t(83070),
                u = t(943203),
                a = t(142751),
                i = t(86235),
                l = t(474525),
                d = t(447544),
                f = t(428253),
                p = t(567282),
                h = t(133383),
                v = t(149404),
                m = t(547761),
                M = t(943250),
                g = t(174990),
                _ = t(625723),
                w = t(549732),
                C = t(819755),
                x = t(552322),
                y = ["Enter", " "],
                b = ["ArrowUp", "PageDown", "End"],
                k = ["ArrowDown", "PageUp", "Home", ...b],
                j = { ltr: [...y, "ArrowRight"], rtl: [...y, "ArrowLeft"] },
                R = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
                P = "Menu",
                [D, E, O] = (0, c.B)(P),
                [T, S] = (0, u.b)(P, [O, p.D7, M.Pc]),
                I = (0, p.D7)(),
                F = (0, M.Pc)(),
                [L, K] = T(P),
                [A, N] = T(P),
                V = (e) => {
                    const { __scopeMenu: n, open: t = !1, children: o, dir: c, onOpenChange: s, modal: u = !0 } = e,
                        i = I(n),
                        [l, d] = r.useState(null),
                        f = r.useRef(!1),
                        h = (0, _.W)(s),
                        v = (0, a.gm)(c);
                    return (
                        r.useEffect(() => {
                            const e = () => {
                                    (f.current = !0), document.addEventListener("pointerdown", n, { capture: !0, once: !0 }), document.addEventListener("pointermove", n, { capture: !0, once: !0 });
                                },
                                n = () => (f.current = !1);
                            return (
                                document.addEventListener("keydown", e, { capture: !0 }),
                                () => {
                                    document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", n, { capture: !0 }), document.removeEventListener("pointermove", n, { capture: !0 });
                                }
                            );
                        }, []),
                        (0, x.jsx)(p.fC, { ...i, children: (0, x.jsx)(L, { scope: n, open: t, onOpenChange: h, content: l, onContentChange: d, children: (0, x.jsx)(A, { scope: n, onClose: r.useCallback(() => h(!1), [h]), isUsingKeyboardRef: f, dir: v, modal: u, children: o }) }) })
                    );
                };
            V.displayName = P;
            var W = r.forwardRef((e, n) => {
                const { __scopeMenu: t, ...r } = e,
                    o = I(t);
                return (0, x.jsx)(p.ee, { ...o, ...r, ref: n });
            });
            W.displayName = "MenuAnchor";
            var G = "MenuPortal",
                [U, B] = T(G, { forceMount: void 0 }),
                X = (e) => {
                    const { __scopeMenu: n, forceMount: t, children: r, container: o } = e,
                        c = K(G, n);
                    return (0, x.jsx)(U, { scope: n, forceMount: t, children: (0, x.jsx)(v.z, { present: t || c.open, children: (0, x.jsx)(h.h, { asChild: !0, container: o, children: r }) }) });
                };
            X.displayName = G;
            var z = "MenuContent",
                [Z, Y] = T(z),
                H = r.forwardRef((e, n) => {
                    const t = B(z, e.__scopeMenu),
                        { forceMount: r = t.forceMount, ...o } = e,
                        c = K(z, e.__scopeMenu),
                        s = N(z, e.__scopeMenu);
                    return (0, x.jsx)(D.Provider, { scope: e.__scopeMenu, children: (0, x.jsx)(v.z, { present: r || c.open, children: (0, x.jsx)(D.Slot, { scope: e.__scopeMenu, children: s.modal ? (0, x.jsx)(q, { ...o, ref: n }) : (0, x.jsx)(J, { ...o, ref: n }) }) }) });
                }),
                q = r.forwardRef((e, n) => {
                    const t = K(z, e.__scopeMenu),
                        c = r.useRef(null),
                        u = (0, s.e)(n, c);
                    return (
                        r.useEffect(() => {
                            const e = c.current;
                            if (e) return (0, w.Ry)(e);
                        }, []),
                        (0, x.jsx)($, { ...e, ref: u, trapFocus: t.open, disableOutsidePointerEvents: t.open, disableOutsideScroll: !0, onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }), onDismiss: () => t.onOpenChange(!1) })
                    );
                }),
                J = r.forwardRef((e, n) => {
                    const t = K(z, e.__scopeMenu);
                    return (0, x.jsx)($, { ...e, ref: n, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => t.onOpenChange(!1) });
                }),
                Q = (0, g.Z8)("MenuContent.ScrollLock"),
                $ = r.forwardRef((e, n) => {
                    const { __scopeMenu: t, loop: c = !1, trapFocus: u, onOpenAutoFocus: a, onCloseAutoFocus: f, disableOutsidePointerEvents: h, onEntryFocus: v, onEscapeKeyDown: m, onPointerDownOutside: g, onFocusOutside: _, onInteractOutside: w, onDismiss: y, disableOutsideScroll: j, ...R } = e,
                        P = K(z, t),
                        D = N(z, t),
                        O = I(t),
                        T = F(t),
                        S = E(t),
                        [L, A] = r.useState(null),
                        V = r.useRef(null),
                        W = (0, s.e)(n, V, P.onContentChange),
                        G = r.useRef(0),
                        U = r.useRef(""),
                        B = r.useRef(0),
                        X = r.useRef(null),
                        Y = r.useRef("right"),
                        H = r.useRef(0),
                        q = j ? C.Z : r.Fragment,
                        J = j ? { as: Q, allowPinchZoom: !0 } : void 0,
                        $ = (e) => {
                            const n = U.current + e,
                                t = S().filter((e) => !e.disabled),
                                r = document.activeElement,
                                o = t.find((e) => e.ref.current === r)?.textValue,
                                c = (function (e, n, t) {
                                    const r = n.length > 1 && Array.from(n).every((e) => e === n[0]),
                                        o = r ? n[0] : n,
                                        c = t ? e.indexOf(t) : -1;
                                    let s = ((u = e), (a = Math.max(c, 0)), u.map((e, n) => u[(a + n) % u.length]));
                                    var u, a;
                                    1 === o.length && (s = s.filter((e) => e !== t));
                                    const i = s.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                                    return i !== t ? i : void 0;
                                })(
                                    t.map((e) => e.textValue),
                                    n,
                                    o,
                                ),
                                s = t.find((e) => e.textValue === c)?.ref.current;
                            !(function e(n) {
                                (U.current = n), window.clearTimeout(G.current), "" !== n && (G.current = window.setTimeout(() => e(""), 1e3));
                            })(n),
                                s && setTimeout(() => s.focus());
                        };
                    r.useEffect(() => () => window.clearTimeout(G.current), []), (0, l.EW)();
                    const ee = r.useCallback(
                        (e) =>
                            Y.current === X.current?.side &&
                            (function (e, n) {
                                if (!n) return !1;
                                const t = { x: e.clientX, y: e.clientY };
                                return (function (e, n) {
                                    const { x: t, y: r } = e;
                                    let o = !1;
                                    for (let e = 0, c = n.length - 1; e < n.length; c = e++) {
                                        const s = n[e],
                                            u = n[c],
                                            a = s.x,
                                            i = s.y,
                                            l = u.x,
                                            d = u.y;
                                        i > r != d > r && t < ((l - a) * (r - i)) / (d - i) + a && (o = !o);
                                    }
                                    return o;
                                })(t, n);
                            })(e, X.current?.area),
                        [],
                    );
                    return (0, x.jsx)(Z, {
                        scope: t,
                        searchRef: U,
                        onItemEnter: r.useCallback(
                            (e) => {
                                ee(e) && e.preventDefault();
                            },
                            [ee],
                        ),
                        onItemLeave: r.useCallback(
                            (e) => {
                                ee(e) || (V.current?.focus(), A(null));
                            },
                            [ee],
                        ),
                        onTriggerLeave: r.useCallback(
                            (e) => {
                                ee(e) && e.preventDefault();
                            },
                            [ee],
                        ),
                        pointerGraceTimerRef: B,
                        onPointerGraceIntentChange: r.useCallback((e) => {
                            X.current = e;
                        }, []),
                        children: (0, x.jsx)(q, {
                            ...J,
                            children: (0, x.jsx)(d.M, {
                                asChild: !0,
                                trapped: u,
                                onMountAutoFocus: (0, o.M)(a, (e) => {
                                    e.preventDefault(), V.current?.focus({ preventScroll: !0 });
                                }),
                                onUnmountAutoFocus: f,
                                children: (0, x.jsx)(i.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: h,
                                    onEscapeKeyDown: m,
                                    onPointerDownOutside: g,
                                    onFocusOutside: _,
                                    onInteractOutside: w,
                                    onDismiss: y,
                                    children: (0, x.jsx)(M.fC, {
                                        asChild: !0,
                                        ...T,
                                        dir: D.dir,
                                        orientation: "vertical",
                                        loop: c,
                                        currentTabStopId: L,
                                        onCurrentTabStopIdChange: A,
                                        onEntryFocus: (0, o.M)(v, (e) => {
                                            D.isUsingKeyboardRef.current || e.preventDefault();
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, x.jsx)(p.VY, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": Re(P.open),
                                            "data-radix-menu-content": "",
                                            dir: D.dir,
                                            ...O,
                                            ...R,
                                            ref: W,
                                            style: { outline: "none", ...R.style },
                                            onKeyDown: (0, o.M)(R.onKeyDown, (e) => {
                                                const n = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    t = e.ctrlKey || e.altKey || e.metaKey,
                                                    r = 1 === e.key.length;
                                                n && ("Tab" === e.key && e.preventDefault(), !t && r && $(e.key));
                                                const o = V.current;
                                                if (e.target !== o) return;
                                                if (!k.includes(e.key)) return;
                                                e.preventDefault();
                                                const c = S()
                                                    .filter((e) => !e.disabled)
                                                    .map((e) => e.ref.current);
                                                b.includes(e.key) && c.reverse(),
                                                    (function (e) {
                                                        const n = document.activeElement;
                                                        for (const t of e) {
                                                            if (t === n) return;
                                                            if ((t.focus(), document.activeElement !== n)) return;
                                                        }
                                                    })(c);
                                            }),
                                            onBlur: (0, o.M)(e.onBlur, (e) => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(G.current), (U.current = ""));
                                            }),
                                            onPointerMove: (0, o.M)(
                                                e.onPointerMove,
                                                Ee((e) => {
                                                    const n = e.target,
                                                        t = H.current !== e.clientX;
                                                    if (e.currentTarget.contains(n) && t) {
                                                        const n = e.clientX > H.current ? "right" : "left";
                                                        (Y.current = n), (H.current = e.clientX);
                                                    }
                                                }),
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            H.displayName = z;
            var ee = r.forwardRef((e, n) => {
                const { __scopeMenu: t, ...r } = e;
                return (0, x.jsx)(m.WV.div, { role: "group", ...r, ref: n });
            });
            ee.displayName = "MenuGroup";
            var ne = r.forwardRef((e, n) => {
                const { __scopeMenu: t, ...r } = e;
                return (0, x.jsx)(m.WV.div, { ...r, ref: n });
            });
            ne.displayName = "MenuLabel";
            var te = "MenuItem",
                re = "menu.itemSelect",
                oe = r.forwardRef((e, n) => {
                    const { disabled: t = !1, onSelect: c, ...u } = e,
                        a = r.useRef(null),
                        i = N(te, e.__scopeMenu),
                        l = Y(te, e.__scopeMenu),
                        d = (0, s.e)(n, a),
                        f = r.useRef(!1);
                    return (0, x.jsx)(ce, {
                        ...u,
                        ref: d,
                        disabled: t,
                        onClick: (0, o.M)(e.onClick, () => {
                            const e = a.current;
                            if (!t && e) {
                                const n = new CustomEvent(re, { bubbles: !0, cancelable: !0 });
                                e.addEventListener(re, (e) => c?.(e), { once: !0 }), (0, m.jH)(e, n), n.defaultPrevented ? (f.current = !1) : i.onClose();
                            }
                        }),
                        onPointerDown: (n) => {
                            e.onPointerDown?.(n), (f.current = !0);
                        },
                        onPointerUp: (0, o.M)(e.onPointerUp, (e) => {
                            f.current || e.currentTarget?.click();
                        }),
                        onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                            const n = "" !== l.searchRef.current;
                            t || (n && " " === e.key) || (y.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
                        }),
                    });
                });
            oe.displayName = te;
            var ce = r.forwardRef((e, n) => {
                    const { __scopeMenu: t, disabled: c = !1, textValue: u, ...a } = e,
                        i = Y(te, t),
                        l = F(t),
                        d = r.useRef(null),
                        f = (0, s.e)(n, d),
                        [p, h] = r.useState(!1),
                        [v, g] = r.useState("");
                    return (
                        r.useEffect(() => {
                            const e = d.current;
                            e && g((e.textContent ?? "").trim());
                        }, [a.children]),
                        (0, x.jsx)(D.ItemSlot, {
                            scope: t,
                            disabled: c,
                            textValue: u ?? v,
                            children: (0, x.jsx)(M.ck, {
                                asChild: !0,
                                ...l,
                                focusable: !c,
                                children: (0, x.jsx)(m.WV.div, {
                                    role: "menuitem",
                                    "data-highlighted": p ? "" : void 0,
                                    "aria-disabled": c || void 0,
                                    "data-disabled": c ? "" : void 0,
                                    ...a,
                                    ref: f,
                                    onPointerMove: (0, o.M)(
                                        e.onPointerMove,
                                        Ee((e) => {
                                            if (c) i.onItemLeave(e);
                                            else if ((i.onItemEnter(e), !e.defaultPrevented)) {
                                                e.currentTarget.focus({ preventScroll: !0 });
                                            }
                                        }),
                                    ),
                                    onPointerLeave: (0, o.M)(
                                        e.onPointerLeave,
                                        Ee((e) => i.onItemLeave(e)),
                                    ),
                                    onFocus: (0, o.M)(e.onFocus, () => h(!0)),
                                    onBlur: (0, o.M)(e.onBlur, () => h(!1)),
                                }),
                            }),
                        })
                    );
                }),
                se = r.forwardRef((e, n) => {
                    const { checked: t = !1, onCheckedChange: r, ...c } = e;
                    return (0, x.jsx)(he, { scope: e.__scopeMenu, checked: t, children: (0, x.jsx)(oe, { role: "menuitemcheckbox", "aria-checked": Pe(t) ? "mixed" : t, ...c, ref: n, "data-state": De(t), onSelect: (0, o.M)(c.onSelect, () => r?.(!!Pe(t) || !t), { checkForDefaultPrevented: !1 }) }) });
                });
            se.displayName = "MenuCheckboxItem";
            var ue = "MenuRadioGroup",
                [ae, ie] = T(ue, { value: void 0, onValueChange: () => {} }),
                le = r.forwardRef((e, n) => {
                    const { value: t, onValueChange: r, ...o } = e,
                        c = (0, _.W)(r);
                    return (0, x.jsx)(ae, { scope: e.__scopeMenu, value: t, onValueChange: c, children: (0, x.jsx)(ee, { ...o, ref: n }) });
                });
            le.displayName = ue;
            var de = "MenuRadioItem",
                fe = r.forwardRef((e, n) => {
                    const { value: t, ...r } = e,
                        c = ie(de, e.__scopeMenu),
                        s = t === c.value;
                    return (0, x.jsx)(he, { scope: e.__scopeMenu, checked: s, children: (0, x.jsx)(oe, { role: "menuitemradio", "aria-checked": s, ...r, ref: n, "data-state": De(s), onSelect: (0, o.M)(r.onSelect, () => c.onValueChange?.(t), { checkForDefaultPrevented: !1 }) }) });
                });
            fe.displayName = de;
            var pe = "MenuItemIndicator",
                [he, ve] = T(pe, { checked: !1 }),
                me = r.forwardRef((e, n) => {
                    const { __scopeMenu: t, forceMount: r, ...o } = e,
                        c = ve(pe, t);
                    return (0, x.jsx)(v.z, { present: r || Pe(c.checked) || !0 === c.checked, children: (0, x.jsx)(m.WV.span, { ...o, ref: n, "data-state": De(c.checked) }) });
                });
            me.displayName = pe;
            var Me = r.forwardRef((e, n) => {
                const { __scopeMenu: t, ...r } = e;
                return (0, x.jsx)(m.WV.div, { role: "separator", "aria-orientation": "horizontal", ...r, ref: n });
            });
            Me.displayName = "MenuSeparator";
            var ge = r.forwardRef((e, n) => {
                const { __scopeMenu: t, ...r } = e,
                    o = I(t);
                return (0, x.jsx)(p.Eh, { ...o, ...r, ref: n });
            });
            ge.displayName = "MenuArrow";
            var _e = "MenuSub",
                [we, Ce] = T(_e),
                xe = (e) => {
                    const { __scopeMenu: n, children: t, open: o = !1, onOpenChange: c } = e,
                        s = K(_e, n),
                        u = I(n),
                        [a, i] = r.useState(null),
                        [l, d] = r.useState(null),
                        h = (0, _.W)(c);
                    return r.useEffect(() => (!1 === s.open && h(!1), () => h(!1)), [s.open, h]), (0, x.jsx)(p.fC, { ...u, children: (0, x.jsx)(L, { scope: n, open: o, onOpenChange: h, content: l, onContentChange: d, children: (0, x.jsx)(we, { scope: n, contentId: (0, f.M)(), triggerId: (0, f.M)(), trigger: a, onTriggerChange: i, children: t }) }) });
                };
            xe.displayName = _e;
            var ye = "MenuSubTrigger",
                be = r.forwardRef((e, n) => {
                    const t = K(ye, e.__scopeMenu),
                        c = N(ye, e.__scopeMenu),
                        u = Ce(ye, e.__scopeMenu),
                        a = Y(ye, e.__scopeMenu),
                        i = r.useRef(null),
                        { pointerGraceTimerRef: l, onPointerGraceIntentChange: d } = a,
                        f = { __scopeMenu: e.__scopeMenu },
                        p = r.useCallback(() => {
                            i.current && window.clearTimeout(i.current), (i.current = null);
                        }, []);
                    return (
                        r.useEffect(() => p, [p]),
                        r.useEffect(() => {
                            const e = l.current;
                            return () => {
                                window.clearTimeout(e), d(null);
                            };
                        }, [l, d]),
                        (0, x.jsx)(W, {
                            asChild: !0,
                            ...f,
                            children: (0, x.jsx)(ce, {
                                id: u.triggerId,
                                "aria-haspopup": "menu",
                                "aria-expanded": t.open,
                                "aria-controls": u.contentId,
                                "data-state": Re(t.open),
                                ...e,
                                ref: (0, s.F)(n, u.onTriggerChange),
                                onClick: (n) => {
                                    e.onClick?.(n), e.disabled || n.defaultPrevented || (n.currentTarget.focus(), t.open || t.onOpenChange(!0));
                                },
                                onPointerMove: (0, o.M)(
                                    e.onPointerMove,
                                    Ee((n) => {
                                        a.onItemEnter(n),
                                            n.defaultPrevented ||
                                                e.disabled ||
                                                t.open ||
                                                i.current ||
                                                (a.onPointerGraceIntentChange(null),
                                                (i.current = window.setTimeout(() => {
                                                    t.onOpenChange(!0), p();
                                                }, 100)));
                                    }),
                                ),
                                onPointerLeave: (0, o.M)(
                                    e.onPointerLeave,
                                    Ee((e) => {
                                        p();
                                        const n = t.content?.getBoundingClientRect();
                                        if (n) {
                                            const r = t.content?.dataset.side,
                                                o = "right" === r,
                                                c = o ? -5 : 5,
                                                s = n[o ? "left" : "right"],
                                                u = n[o ? "right" : "left"];
                                            a.onPointerGraceIntentChange({
                                                area: [
                                                    { x: e.clientX + c, y: e.clientY },
                                                    { x: s, y: n.top },
                                                    { x: u, y: n.top },
                                                    { x: u, y: n.bottom },
                                                    { x: s, y: n.bottom },
                                                ],
                                                side: r,
                                            }),
                                                window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300));
                                        } else {
                                            if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                                            a.onPointerGraceIntentChange(null);
                                        }
                                    }),
                                ),
                                onKeyDown: (0, o.M)(e.onKeyDown, (n) => {
                                    const r = "" !== a.searchRef.current;
                                    e.disabled || (r && " " === n.key) || (j[c.dir].includes(n.key) && (t.onOpenChange(!0), t.content?.focus(), n.preventDefault()));
                                }),
                            }),
                        })
                    );
                });
            be.displayName = ye;
            var ke = "MenuSubContent",
                je = r.forwardRef((e, n) => {
                    const t = B(z, e.__scopeMenu),
                        { forceMount: c = t.forceMount, ...u } = e,
                        a = K(z, e.__scopeMenu),
                        i = N(z, e.__scopeMenu),
                        l = Ce(ke, e.__scopeMenu),
                        d = r.useRef(null),
                        f = (0, s.e)(n, d);
                    return (0, x.jsx)(D.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, x.jsx)(v.z, {
                            present: c || a.open,
                            children: (0, x.jsx)(D.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, x.jsx)($, {
                                    id: l.contentId,
                                    "aria-labelledby": l.triggerId,
                                    ...u,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === i.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: (e) => {
                                        i.isUsingKeyboardRef.current && d.current?.focus(), e.preventDefault();
                                    },
                                    onCloseAutoFocus: (e) => e.preventDefault(),
                                    onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => {
                                        e.target !== l.trigger && a.onOpenChange(!1);
                                    }),
                                    onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, (e) => {
                                        i.onClose(), e.preventDefault();
                                    }),
                                    onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                                        const n = e.currentTarget.contains(e.target),
                                            t = R[i.dir].includes(e.key);
                                        n && t && (a.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            function Re(e) {
                return e ? "open" : "closed";
            }
            function Pe(e) {
                return "indeterminate" === e;
            }
            function De(e) {
                return Pe(e) ? "indeterminate" : e ? "checked" : "unchecked";
            }
            function Ee(e) {
                return (n) => ("mouse" === n.pointerType ? e(n) : void 0);
            }
            je.displayName = ke;
            var Oe = V,
                Te = W,
                Se = X,
                Ie = H,
                Fe = ee,
                Le = ne,
                Ke = oe,
                Ae = se,
                Ne = le,
                Ve = fe,
                We = me,
                Ge = Me,
                Ue = ge,
                Be = xe,
                Xe = be,
                ze = je;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-4179cf44.e07fb81a.js.map

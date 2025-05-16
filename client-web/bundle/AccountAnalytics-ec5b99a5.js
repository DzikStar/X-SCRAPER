"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-ec5b99a5"],
    {
        691910: (e, t, n) => {
            n.d(t, { VY: () => We, ZA: () => Oe, JO: () => Ne, ck: () => He, wU: () => Ke, eT: () => Be, __: () => Ae, h_: () => Ve, fC: () => Ie, $G: () => Ue, u_: () => Fe, Z0: () => ze, xz: () => De, B4: () => Ee, l_: () => Le });
            var o = n(202784),
                r = n(928316);
            function l(e, [t, n]) {
                return Math.min(n, Math.max(t, e));
            }
            var a = n(395656),
                i = n(405895),
                s = n(238829),
                c = n(392211),
                d = n(759241),
                u = n(664266),
                p = n(11861),
                f = n(913620),
                h = n(23372),
                v = n(998946),
                m = n(308067),
                g = n(41911),
                w = n(376488),
                x = n(627757),
                y = n(387695),
                S = n(861644),
                b = n(890022),
                C = n(331725),
                _ = n(549732),
                P = n(958760),
                T = n(552322),
                M = [" ", "Enter", "ArrowUp", "ArrowDown"],
                j = [" ", "Enter"],
                k = "Select",
                [R, I, D] = (0, i.B)(k),
                [E, N] = (0, c.b)(k, [D, v.D7]),
                V = (0, v.D7)(),
                [W, L] = E(k),
                [O, A] = E(k),
                H = (e) => {
                    const { __scopeSelect: t, children: n, open: r, defaultOpen: l, onOpenChange: a, value: i, defaultValue: s, onValueChange: c, dir: u, name: p, autoComplete: f, disabled: m, required: g, form: w } = e,
                        x = V(t),
                        [S, b] = o.useState(null),
                        [C, _] = o.useState(null),
                        [P, M] = o.useState(!1),
                        j = (0, d.gm)(u),
                        [k = !1, I] = (0, y.T)({ prop: r, defaultProp: l, onChange: a }),
                        [D, E] = (0, y.T)({ prop: i, defaultProp: s, onChange: c }),
                        N = o.useRef(null),
                        L = !S || w || !!S.closest("form"),
                        [A, H] = o.useState(new Set()),
                        B = Array.from(A)
                            .map((e) => e.props.value)
                            .join(";");
                    return (0, T.jsx)(v.fC, {
                        ...x,
                        children: (0, T.jsxs)(W, {
                            required: g,
                            scope: t,
                            trigger: S,
                            onTriggerChange: b,
                            valueNode: C,
                            onValueNodeChange: _,
                            valueNodeHasChildren: P,
                            onValueNodeHasChildrenChange: M,
                            contentId: (0, h.M)(),
                            value: D,
                            onValueChange: E,
                            open: k,
                            onOpenChange: I,
                            dir: j,
                            triggerPointerDownPosRef: N,
                            disabled: m,
                            children: [
                                (0, T.jsx)(R.Provider, {
                                    scope: t,
                                    children: (0, T.jsx)(O, {
                                        scope: e.__scopeSelect,
                                        onNativeOptionAdd: o.useCallback((e) => {
                                            H((t) => new Set(t).add(e));
                                        }, []),
                                        onNativeOptionRemove: o.useCallback((e) => {
                                            H((t) => {
                                                const n = new Set(t);
                                                return n.delete(e), n;
                                            });
                                        }, []),
                                        children: n,
                                    }),
                                }),
                                L ? (0, T.jsxs)(je, { "aria-hidden": !0, required: g, tabIndex: -1, name: p, autoComplete: f, value: D, onChange: (e) => E(e.target.value), disabled: m, form: w, children: [void 0 === D ? (0, T.jsx)("option", { value: "" }) : null, Array.from(A)] }, B) : null,
                            ],
                        }),
                    });
                };
            H.displayName = k;
            var B = "SelectTrigger",
                K = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, disabled: r = !1, ...l } = e,
                        i = V(n),
                        c = L(B, n),
                        d = c.disabled || r,
                        u = (0, s.e)(t, c.onTriggerChange),
                        p = I(n),
                        f = o.useRef("touch"),
                        [h, m, w] = ke((e) => {
                            const t = p().filter((e) => !e.disabled),
                                n = t.find((e) => e.value === c.value),
                                o = Re(t, e, n);
                            void 0 !== o && c.onValueChange(o.value);
                        }),
                        x = (e) => {
                            d || (c.onOpenChange(!0), w()), e && (c.triggerPointerDownPosRef.current = { x: Math.round(e.pageX), y: Math.round(e.pageY) });
                        };
                    return (0, T.jsx)(v.ee, {
                        asChild: !0,
                        ...i,
                        children: (0, T.jsx)(g.WV.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": c.contentId,
                            "aria-expanded": c.open,
                            "aria-required": c.required,
                            "aria-autocomplete": "none",
                            dir: c.dir,
                            "data-state": c.open ? "open" : "closed",
                            disabled: d,
                            "data-disabled": d ? "" : void 0,
                            "data-placeholder": Me(c.value) ? "" : void 0,
                            ...l,
                            ref: u,
                            onClick: (0, a.M)(l.onClick, (e) => {
                                e.currentTarget.focus(), "mouse" !== f.current && x(e);
                            }),
                            onPointerDown: (0, a.M)(l.onPointerDown, (e) => {
                                f.current = e.pointerType;
                                const t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (x(e), e.preventDefault());
                            }),
                            onKeyDown: (0, a.M)(l.onKeyDown, (e) => {
                                const t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (t && " " === e.key) || (M.includes(e.key) && (x(), e.preventDefault()));
                            }),
                        }),
                    });
                });
            K.displayName = B;
            var F = "SelectValue",
                U = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: o, style: r, children: l, placeholder: a = "", ...i } = e,
                        c = L(F, n),
                        { onValueNodeHasChildrenChange: d } = c,
                        u = void 0 !== l,
                        p = (0, s.e)(t, c.onValueNodeChange);
                    return (
                        (0, S.b)(() => {
                            d(u);
                        }, [d, u]),
                        (0, T.jsx)(g.WV.span, { ...i, ref: p, style: { pointerEvents: "none" }, children: Me(c.value) ? (0, T.jsx)(T.Fragment, { children: a }) : l })
                    );
                });
            U.displayName = F;
            var z = o.forwardRef((e, t) => {
                const { __scopeSelect: n, children: o, ...r } = e;
                return (0, T.jsx)(g.WV.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
            });
            z.displayName = "SelectIcon";
            var q = (e) => (0, T.jsx)(m.h, { asChild: !0, ...e });
            q.displayName = "SelectPortal";
            var Y = "SelectContent",
                Z = o.forwardRef((e, t) => {
                    const n = L(Y, e.__scopeSelect),
                        [l, a] = o.useState();
                    if (
                        ((0, S.b)(() => {
                            a(new DocumentFragment());
                        }, []),
                        !n.open)
                    ) {
                        const t = l;
                        return t ? r.createPortal((0, T.jsx)(G, { scope: e.__scopeSelect, children: (0, T.jsx)(R.Slot, { scope: e.__scopeSelect, children: (0, T.jsx)("div", { children: e.children }) }) }), t) : null;
                    }
                    return (0, T.jsx)(J, { ...e, ref: t });
                });
            Z.displayName = Y;
            var X = 10,
                [G, $] = E(Y),
                J = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: l, onEscapeKeyDown: i, onPointerDownOutside: c, side: d, sideOffset: h, align: v, alignOffset: m, arrowPadding: g, collisionBoundary: x, collisionPadding: y, sticky: S, hideWhenDetached: b, avoidCollisions: C, ...M } = e,
                        j = L(Y, n),
                        [k, R] = o.useState(null),
                        [D, E] = o.useState(null),
                        N = (0, s.e)(t, (e) => R(e)),
                        [V, W] = o.useState(null),
                        [O, A] = o.useState(null),
                        H = I(n),
                        [B, K] = o.useState(!1),
                        F = o.useRef(!1);
                    o.useEffect(() => {
                        if (k) return (0, _.Ry)(k);
                    }, [k]),
                        (0, p.EW)();
                    const U = o.useCallback(
                            (e) => {
                                const [t, ...n] = H().map((e) => e.ref.current),
                                    [o] = n.slice(-1),
                                    r = document.activeElement;
                                for (const n of e) {
                                    if (n === r) return;
                                    if ((n?.scrollIntoView({ block: "nearest" }), n === t && D && (D.scrollTop = 0), n === o && D && (D.scrollTop = D.scrollHeight), n?.focus(), document.activeElement !== r)) return;
                                }
                            },
                            [H, D],
                        ),
                        z = o.useCallback(() => U([V, k]), [U, V, k]);
                    o.useEffect(() => {
                        B && z();
                    }, [B, z]);
                    const { onOpenChange: q, triggerPointerDownPosRef: Z } = j;
                    o.useEffect(() => {
                        if (k) {
                            let e = { x: 0, y: 0 };
                            const t = (t) => {
                                    e = { x: Math.abs(Math.round(t.pageX) - (Z.current?.x ?? 0)), y: Math.abs(Math.round(t.pageY) - (Z.current?.y ?? 0)) };
                                },
                                n = (n) => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : k.contains(n.target) || q(!1), document.removeEventListener("pointermove", t), (Z.current = null);
                                };
                            return (
                                null !== Z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, { capture: !0, once: !0 })),
                                () => {
                                    document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
                                }
                            );
                        }
                    }, [k, q, Z]),
                        o.useEffect(() => {
                            const e = () => q(!1);
                            return (
                                window.addEventListener("blur", e),
                                window.addEventListener("resize", e),
                                () => {
                                    window.removeEventListener("blur", e), window.removeEventListener("resize", e);
                                }
                            );
                        }, [q]);
                    const [X, $] = ke((e) => {
                            const t = H().filter((e) => !e.disabled),
                                n = t.find((e) => e.ref.current === document.activeElement),
                                o = Re(t, e, n);
                            o && setTimeout(() => o.ref.current.focus());
                        }),
                        J = o.useCallback(
                            (e, t, n) => {
                                const o = !F.current && !n;
                                ((void 0 !== j.value && j.value === t) || o) && (W(e), o && (F.current = !0));
                            },
                            [j.value],
                        ),
                        te = o.useCallback(() => k?.focus(), [k]),
                        ne = o.useCallback(
                            (e, t, n) => {
                                const o = !F.current && !n;
                                ((void 0 !== j.value && j.value === t) || o) && A(e);
                            },
                            [j.value],
                        ),
                        oe = "popper" === r ? ee : Q,
                        re = oe === ee ? { side: d, sideOffset: h, align: v, alignOffset: m, arrowPadding: g, collisionBoundary: x, collisionPadding: y, sticky: S, hideWhenDetached: b, avoidCollisions: C } : {};
                    return (0, T.jsx)(G, {
                        scope: n,
                        content: k,
                        viewport: D,
                        onViewportChange: E,
                        itemRefCallback: J,
                        selectedItem: V,
                        onItemLeave: te,
                        itemTextRefCallback: ne,
                        focusSelectedItem: z,
                        selectedItemText: O,
                        position: r,
                        isPositioned: B,
                        searchRef: X,
                        children: (0, T.jsx)(P.Z, {
                            as: w.g7,
                            allowPinchZoom: !0,
                            children: (0, T.jsx)(f.M, {
                                asChild: !0,
                                trapped: j.open,
                                onMountAutoFocus: (e) => {
                                    e.preventDefault();
                                },
                                onUnmountAutoFocus: (0, a.M)(l, (e) => {
                                    j.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                                }),
                                children: (0, T.jsx)(u.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: !0,
                                    onEscapeKeyDown: i,
                                    onPointerDownOutside: c,
                                    onFocusOutside: (e) => e.preventDefault(),
                                    onDismiss: () => j.onOpenChange(!1),
                                    children: (0, T.jsx)(oe, {
                                        role: "listbox",
                                        id: j.contentId,
                                        "data-state": j.open ? "open" : "closed",
                                        dir: j.dir,
                                        onContextMenu: (e) => e.preventDefault(),
                                        ...M,
                                        ...re,
                                        onPlaced: () => K(!0),
                                        ref: N,
                                        style: { display: "flex", flexDirection: "column", outline: "none", ...M.style },
                                        onKeyDown: (0, a.M)(M.onKeyDown, (e) => {
                                            const t = e.ctrlKey || e.altKey || e.metaKey;
                                            if (("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))) {
                                                let t = H()
                                                    .filter((e) => !e.disabled)
                                                    .map((e) => e.ref.current);
                                                if ((["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key))) {
                                                    const n = e.target,
                                                        o = t.indexOf(n);
                                                    t = t.slice(o + 1);
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
            var Q = o.forwardRef((e, t) => {
                const { __scopeSelect: n, onPlaced: r, ...a } = e,
                    i = L(Y, n),
                    c = $(Y, n),
                    [d, u] = o.useState(null),
                    [p, f] = o.useState(null),
                    h = (0, s.e)(t, (e) => f(e)),
                    v = I(n),
                    m = o.useRef(!1),
                    w = o.useRef(!0),
                    { viewport: x, selectedItem: y, selectedItemText: b, focusSelectedItem: C } = c,
                    _ = o.useCallback(() => {
                        if (i.trigger && i.valueNode && d && p && x && y && b) {
                            const e = i.trigger.getBoundingClientRect(),
                                t = p.getBoundingClientRect(),
                                n = i.valueNode.getBoundingClientRect(),
                                o = b.getBoundingClientRect();
                            if ("rtl" !== i.dir) {
                                const r = o.left - t.left,
                                    a = n.left - r,
                                    i = e.left - a,
                                    s = e.width + i,
                                    c = Math.max(s, t.width),
                                    u = window.innerWidth - X,
                                    p = l(a, [X, Math.max(X, u - c)]);
                                (d.style.minWidth = s + "px"), (d.style.left = p + "px");
                            } else {
                                const r = t.right - o.right,
                                    a = window.innerWidth - n.right - r,
                                    i = window.innerWidth - e.right - a,
                                    s = e.width + i,
                                    c = Math.max(s, t.width),
                                    u = window.innerWidth - X,
                                    p = l(a, [X, Math.max(X, u - c)]);
                                (d.style.minWidth = s + "px"), (d.style.right = p + "px");
                            }
                            const a = v(),
                                s = window.innerHeight - 2 * X,
                                c = x.scrollHeight,
                                u = window.getComputedStyle(p),
                                f = parseInt(u.borderTopWidth, 10),
                                h = parseInt(u.paddingTop, 10),
                                g = parseInt(u.borderBottomWidth, 10),
                                w = f + h + c + parseInt(u.paddingBottom, 10) + g,
                                S = Math.min(5 * y.offsetHeight, w),
                                C = window.getComputedStyle(x),
                                _ = parseInt(C.paddingTop, 10),
                                P = parseInt(C.paddingBottom, 10),
                                T = e.top + e.height / 2 - X,
                                M = s - T,
                                j = y.offsetHeight / 2,
                                k = f + h + (y.offsetTop + j),
                                R = w - k;
                            if (k <= T) {
                                const e = a.length > 0 && y === a[a.length - 1].ref.current;
                                d.style.bottom = "0px";
                                const t = p.clientHeight - x.offsetTop - x.offsetHeight,
                                    n = k + Math.max(M, j + (e ? P : 0) + t + g);
                                d.style.height = n + "px";
                            } else {
                                const e = a.length > 0 && y === a[0].ref.current;
                                d.style.top = "0px";
                                const t = Math.max(T, f + x.offsetTop + (e ? _ : 0) + j) + R;
                                (d.style.height = t + "px"), (x.scrollTop = k - T + x.offsetTop);
                            }
                            (d.style.margin = `${X}px 0`), (d.style.minHeight = S + "px"), (d.style.maxHeight = s + "px"), r?.(), requestAnimationFrame(() => (m.current = !0));
                        }
                    }, [v, i.trigger, i.valueNode, d, p, x, y, b, i.dir, r]);
                (0, S.b)(() => _(), [_]);
                const [P, M] = o.useState();
                (0, S.b)(() => {
                    p && M(window.getComputedStyle(p).zIndex);
                }, [p]);
                const j = o.useCallback(
                    (e) => {
                        e && !0 === w.current && (_(), C?.(), (w.current = !1));
                    },
                    [_, C],
                );
                return (0, T.jsx)(te, { scope: n, contentWrapper: d, shouldExpandOnScrollRef: m, onScrollButtonChange: j, children: (0, T.jsx)("div", { ref: u, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: P }, children: (0, T.jsx)(g.WV.div, { ...a, ref: h, style: { boxSizing: "border-box", maxHeight: "100%", ...a.style } }) }) });
            });
            Q.displayName = "SelectItemAlignedPosition";
            var ee = o.forwardRef((e, t) => {
                const { __scopeSelect: n, align: o = "start", collisionPadding: r = X, ...l } = e,
                    a = V(n);
                return (0, T.jsx)(v.VY, { ...a, ...l, ref: t, align: o, collisionPadding: r, style: { boxSizing: "border-box", ...l.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
            });
            ee.displayName = "SelectPopperPosition";
            var [te, ne] = E(Y, {}),
                oe = "SelectViewport",
                re = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, nonce: r, ...l } = e,
                        i = $(oe, n),
                        c = ne(oe, n),
                        d = (0, s.e)(t, i.onViewportChange),
                        u = o.useRef(0);
                    return (0, T.jsxs)(T.Fragment, {
                        children: [
                            (0, T.jsx)("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: r }),
                            (0, T.jsx)(R.Slot, {
                                scope: n,
                                children: (0, T.jsx)(g.WV.div, {
                                    "data-radix-select-viewport": "",
                                    role: "presentation",
                                    ...l,
                                    ref: d,
                                    style: { position: "relative", flex: 1, overflow: "hidden auto", ...l.style },
                                    onScroll: (0, a.M)(l.onScroll, (e) => {
                                        const t = e.currentTarget,
                                            { contentWrapper: n, shouldExpandOnScrollRef: o } = c;
                                        if (o?.current && n) {
                                            const e = Math.abs(u.current - t.scrollTop);
                                            if (e > 0) {
                                                const o = window.innerHeight - 2 * X,
                                                    r = parseFloat(n.style.minHeight),
                                                    l = parseFloat(n.style.height),
                                                    a = Math.max(r, l);
                                                if (a < o) {
                                                    const r = a + e,
                                                        l = Math.min(o, r),
                                                        i = r - l;
                                                    (n.style.height = l + "px"), "0px" === n.style.bottom && ((t.scrollTop = i > 0 ? i : 0), (n.style.justifyContent = "flex-end"));
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
            re.displayName = oe;
            var le = "SelectGroup",
                [ae, ie] = E(le),
                se = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...o } = e,
                        r = (0, h.M)();
                    return (0, T.jsx)(ae, { scope: n, id: r, children: (0, T.jsx)(g.WV.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
                });
            se.displayName = le;
            var ce = "SelectLabel",
                de = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...o } = e,
                        r = ie(ce, n);
                    return (0, T.jsx)(g.WV.div, { id: r.id, ...o, ref: t });
                });
            de.displayName = ce;
            var ue = "SelectItem",
                [pe, fe] = E(ue),
                he = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, value: r, disabled: l = !1, textValue: i, ...c } = e,
                        d = L(ue, n),
                        u = $(ue, n),
                        p = d.value === r,
                        [f, v] = o.useState(i ?? ""),
                        [m, w] = o.useState(!1),
                        x = (0, s.e)(t, (e) => u.itemRefCallback?.(e, r, l)),
                        y = (0, h.M)(),
                        S = o.useRef("touch"),
                        b = () => {
                            l || (d.onValueChange(r), d.onOpenChange(!1));
                        };
                    if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, T.jsx)(pe, {
                        scope: n,
                        value: r,
                        disabled: l,
                        textId: y,
                        isSelected: p,
                        onItemTextChange: o.useCallback((e) => {
                            v((t) => t || (e?.textContent ?? "").trim());
                        }, []),
                        children: (0, T.jsx)(R.ItemSlot, {
                            scope: n,
                            value: r,
                            disabled: l,
                            textValue: f,
                            children: (0, T.jsx)(g.WV.div, {
                                role: "option",
                                "aria-labelledby": y,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": p && m,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": l || void 0,
                                "data-disabled": l ? "" : void 0,
                                tabIndex: l ? void 0 : -1,
                                ...c,
                                ref: x,
                                onFocus: (0, a.M)(c.onFocus, () => w(!0)),
                                onBlur: (0, a.M)(c.onBlur, () => w(!1)),
                                onClick: (0, a.M)(c.onClick, () => {
                                    "mouse" !== S.current && b();
                                }),
                                onPointerUp: (0, a.M)(c.onPointerUp, () => {
                                    "mouse" === S.current && b();
                                }),
                                onPointerDown: (0, a.M)(c.onPointerDown, (e) => {
                                    S.current = e.pointerType;
                                }),
                                onPointerMove: (0, a.M)(c.onPointerMove, (e) => {
                                    (S.current = e.pointerType), l ? u.onItemLeave?.() : "mouse" === S.current && e.currentTarget.focus({ preventScroll: !0 });
                                }),
                                onPointerLeave: (0, a.M)(c.onPointerLeave, (e) => {
                                    e.currentTarget === document.activeElement && u.onItemLeave?.();
                                }),
                                onKeyDown: (0, a.M)(c.onKeyDown, (e) => {
                                    ("" !== u.searchRef?.current && " " === e.key) || (j.includes(e.key) && b(), " " === e.key && e.preventDefault());
                                }),
                            }),
                        }),
                    });
                });
            he.displayName = ue;
            var ve = "SelectItemText",
                me = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, className: l, style: a, ...i } = e,
                        c = L(ve, n),
                        d = $(ve, n),
                        u = fe(ve, n),
                        p = A(ve, n),
                        [f, h] = o.useState(null),
                        v = (0, s.e)(
                            t,
                            (e) => h(e),
                            u.onItemTextChange,
                            (e) => d.itemTextRefCallback?.(e, u.value, u.disabled),
                        ),
                        m = f?.textContent,
                        w = o.useMemo(() => (0, T.jsx)("option", { value: u.value, disabled: u.disabled, children: m }, u.value), [u.disabled, u.value, m]),
                        { onNativeOptionAdd: x, onNativeOptionRemove: y } = p;
                    return (0, S.b)(() => (x(w), () => y(w)), [x, y, w]), (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(g.WV.span, { id: u.textId, ...i, ref: v }), u.isSelected && c.valueNode && !c.valueNodeHasChildren ? r.createPortal(i.children, c.valueNode) : null] });
                });
            me.displayName = ve;
            var ge = "SelectItemIndicator",
                we = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...o } = e;
                    return fe(ge, n).isSelected ? (0, T.jsx)(g.WV.span, { "aria-hidden": !0, ...o, ref: t }) : null;
                });
            we.displayName = ge;
            var xe = "SelectScrollUpButton",
                ye = o.forwardRef((e, t) => {
                    const n = $(xe, e.__scopeSelect),
                        r = ne(xe, e.__scopeSelect),
                        [l, a] = o.useState(!1),
                        i = (0, s.e)(t, r.onScrollButtonChange);
                    return (
                        (0, S.b)(() => {
                            if (n.viewport && n.isPositioned) {
                                let e = function () {
                                    const e = t.scrollTop > 0;
                                    a(e);
                                };
                                const t = n.viewport;
                                return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
                            }
                        }, [n.viewport, n.isPositioned]),
                        l
                            ? (0, T.jsx)(Ce, {
                                  ...e,
                                  ref: i,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            ye.displayName = xe;
            var Se = "SelectScrollDownButton",
                be = o.forwardRef((e, t) => {
                    const n = $(Se, e.__scopeSelect),
                        r = ne(Se, e.__scopeSelect),
                        [l, a] = o.useState(!1),
                        i = (0, s.e)(t, r.onScrollButtonChange);
                    return (
                        (0, S.b)(() => {
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
                        l
                            ? (0, T.jsx)(Ce, {
                                  ...e,
                                  ref: i,
                                  onAutoScroll: () => {
                                      const { viewport: e, selectedItem: t } = n;
                                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                                  },
                              })
                            : null
                    );
                });
            be.displayName = Se;
            var Ce = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, onAutoScroll: r, ...l } = e,
                        i = $("SelectScrollButton", n),
                        s = o.useRef(null),
                        c = I(n),
                        d = o.useCallback(() => {
                            null !== s.current && (window.clearInterval(s.current), (s.current = null));
                        }, []);
                    return (
                        o.useEffect(() => () => d(), [d]),
                        (0, S.b)(() => {
                            const e = c().find((e) => e.ref.current === document.activeElement);
                            e?.ref.current?.scrollIntoView({ block: "nearest" });
                        }, [c]),
                        (0, T.jsx)(g.WV.div, {
                            "aria-hidden": !0,
                            ...l,
                            ref: t,
                            style: { flexShrink: 0, ...l.style },
                            onPointerDown: (0, a.M)(l.onPointerDown, () => {
                                null === s.current && (s.current = window.setInterval(r, 50));
                            }),
                            onPointerMove: (0, a.M)(l.onPointerMove, () => {
                                i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(r, 50));
                            }),
                            onPointerLeave: (0, a.M)(l.onPointerLeave, () => {
                                d();
                            }),
                        })
                    );
                }),
                _e = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...o } = e;
                    return (0, T.jsx)(g.WV.div, { "aria-hidden": !0, ...o, ref: t });
                });
            _e.displayName = "SelectSeparator";
            var Pe = "SelectArrow",
                Te = o.forwardRef((e, t) => {
                    const { __scopeSelect: n, ...o } = e,
                        r = V(n),
                        l = L(Pe, n),
                        a = $(Pe, n);
                    return l.open && "popper" === a.position ? (0, T.jsx)(v.Eh, { ...r, ...o, ref: t }) : null;
                });
            function Me(e) {
                return "" === e || void 0 === e;
            }
            Te.displayName = Pe;
            var je = o.forwardRef((e, t) => {
                const { value: n, ...r } = e,
                    l = o.useRef(null),
                    a = (0, s.e)(t, l),
                    i = (0, b.D)(n);
                return (
                    o.useEffect(() => {
                        const e = l.current,
                            t = window.HTMLSelectElement.prototype,
                            o = Object.getOwnPropertyDescriptor(t, "value").set;
                        if (i !== n && o) {
                            const t = new Event("change", { bubbles: !0 });
                            o.call(e, n), e.dispatchEvent(t);
                        }
                    }, [i, n]),
                    (0, T.jsx)(C.T, { asChild: !0, children: (0, T.jsx)("select", { ...r, ref: a, defaultValue: n }) })
                );
            });
            function ke(e) {
                const t = (0, x.W)(e),
                    n = o.useRef(""),
                    r = o.useRef(0),
                    l = o.useCallback(
                        (e) => {
                            const o = n.current + e;
                            t(o),
                                (function e(t) {
                                    (n.current = t), window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3));
                                })(o);
                        },
                        [t],
                    ),
                    a = o.useCallback(() => {
                        (n.current = ""), window.clearTimeout(r.current);
                    }, []);
                return o.useEffect(() => () => window.clearTimeout(r.current), []), [n, l, a];
            }
            function Re(e, t, n) {
                const o = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                    r = n ? e.indexOf(n) : -1;
                let l = ((a = e), (i = Math.max(r, 0)), a.map((e, t) => a[(i + t) % a.length]));
                var a, i;
                1 === o.length && (l = l.filter((e) => e !== n));
                const s = l.find((e) => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return s !== n ? s : void 0;
            }
            je.displayName = "BubbleSelect";
            var Ie = H,
                De = K,
                Ee = U,
                Ne = z,
                Ve = q,
                We = Z,
                Le = re,
                Oe = se,
                Ae = de,
                He = he,
                Be = me,
                Ke = we,
                Fe = ye,
                Ue = be,
                ze = _e;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-ec5b99a5.dc02b6ba.js.map

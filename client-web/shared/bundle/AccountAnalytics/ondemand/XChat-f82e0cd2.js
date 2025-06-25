"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-f82e0cd2"],
    {
        489968: (e, t, n) => {
            n.d(t, { e: () => s });
            let r = new Map(),
                o = !1;
            try {
                o = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
            } catch (e) {}
            let i = !1;
            try {
                i = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
            } catch (e) {}
            const a = { degree: { narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" } } };
            class s {
                format(e) {
                    let t = "";
                    if (
                        ((t =
                            o || null == this.options.signDisplay
                                ? this.numberFormatter.format(e)
                                : (function (e, t, n) {
                                      if ("auto" === t) return e.format(n);
                                      if ("never" === t) return e.format(Math.abs(n));
                                      {
                                          let r = !1;
                                          if (("always" === t ? (r = n > 0 || Object.is(n, 0)) : "exceptZero" === t && (Object.is(n, -0) || Object.is(n, 0) ? (n = Math.abs(n)) : (r = n > 0)), r)) {
                                              let t = e.format(-n),
                                                  r = e.format(n),
                                                  o = t.replace(r, "").replace(/\u200e|\u061C/, "");
                                              return t.replace(r, "!!!").replace(o, "+").replace("!!!", r);
                                          }
                                          return e.format(n);
                                      }
                                  })(this.numberFormatter, this.options.signDisplay, e)),
                        "unit" === this.options.style && !i)
                    ) {
                        var n;
                        let { unit: e, unitDisplay: r = "short", locale: o } = this.resolvedOptions();
                        if (!e) return t;
                        let i = null === (n = a[e]) || void 0 === n ? void 0 : n[r];
                        t += i[o] || i.default;
                    }
                    return t;
                }
                formatToParts(e) {
                    return this.numberFormatter.formatToParts(e);
                }
                formatRange(e, t) {
                    if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
                    if (t < e) throw new RangeError("End date must be >= start date");
                    return `${this.format(e)} – ${this.format(t)}`;
                }
                formatRangeToParts(e, t) {
                    if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, t);
                    if (t < e) throw new RangeError("End date must be >= start date");
                    let n = this.numberFormatter.formatToParts(e),
                        r = this.numberFormatter.formatToParts(t);
                    return [...n.map((e) => ({ ...e, source: "startRange" })), { type: "literal", value: " – ", source: "shared" }, ...r.map((e) => ({ ...e, source: "endRange" }))];
                }
                resolvedOptions() {
                    let e = this.numberFormatter.resolvedOptions();
                    return o || null == this.options.signDisplay || (e = { ...e, signDisplay: this.options.signDisplay }), i || "unit" !== this.options.style || (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }), e;
                }
                constructor(e, t = {}) {
                    (this.numberFormatter = (function (e, t = {}) {
                        let { numberingSystem: n } = t;
                        n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${n}`));
                        if ("unit" === t.style && !i) {
                            var o;
                            let { unit: e, unitDisplay: n = "short" } = t;
                            if (!e) throw new Error('unit option must be provided with style: "unit"');
                            if (!(null === (o = a[e]) || void 0 === o ? void 0 : o[n])) throw new Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
                            t = { ...t, style: "decimal" };
                        }
                        let s =
                            e +
                            (t
                                ? Object.entries(t)
                                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                                      .join()
                                : "");
                        if (r.has(s)) return r.get(s);
                        let l = new Intl.NumberFormat(e, t);
                        return r.set(s, l), l;
                    })(e, t)),
                        (this.options = t);
                }
            }
        },
        405895: (e, t, n) => {
            n.d(t, { B: () => p });
            var r = n(202784),
                o = n(392211);
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
            function s(...e) {
                return r.useCallback(a(...e), e);
            }
            var l = n(552322),
                u = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        i = r.Children.toArray(n),
                        a = i.find(f);
                    if (a) {
                        const e = a.props.children,
                            n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, l.jsx)(c, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, l.jsx)(c, { ...o, ref: t, children: n });
                });
            u.displayName = "Slot";
            var c = r.forwardRef((e, t) => {
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
                    return n.type !== r.Fragment && (i.ref = t ? a(t, e) : e), r.cloneElement(n, i);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            c.displayName = "SlotClone";
            var d = ({ children: e }) => (0, l.jsx)(l.Fragment, { children: e });
            function f(e) {
                return r.isValidElement(e) && e.type === d;
            }
            function p(e) {
                const t = e + "CollectionProvider",
                    [n, i] = (0, o.b)(t),
                    [a, c] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
                    d = (e) => {
                        const { scope: t, children: n } = e,
                            o = r.useRef(null),
                            i = r.useRef(new Map()).current;
                        return (0, l.jsx)(a, { scope: t, itemMap: i, collectionRef: o, children: n });
                    };
                d.displayName = t;
                const f = e + "CollectionSlot",
                    p = r.forwardRef((e, t) => {
                        const { scope: n, children: r } = e,
                            o = s(t, c(f, n).collectionRef);
                        return (0, l.jsx)(u, { ref: o, children: r });
                    });
                p.displayName = f;
                const m = e + "CollectionItemSlot",
                    v = "data-radix-collection-item",
                    y = r.forwardRef((e, t) => {
                        const { scope: n, children: o, ...i } = e,
                            a = r.useRef(null),
                            d = s(t, a),
                            f = c(m, n);
                        return (
                            r.useEffect(
                                () => (
                                    f.itemMap.set(a, { ref: a, ...i }),
                                    () => {
                                        f.itemMap.delete(a);
                                    }
                                ),
                            ),
                            (0, l.jsx)(u, { [v]: "", ref: d, children: o })
                        );
                    });
                return (
                    (y.displayName = m),
                    [
                        { Provider: d, Slot: p, ItemSlot: y },
                        function (t) {
                            const n = c(e + "CollectionConsumer", t);
                            return r.useCallback(() => {
                                const e = n.collectionRef.current;
                                if (!e) return [];
                                const t = Array.from(e.querySelectorAll(`[${v}]`));
                                return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            }, [n.collectionRef, n.itemMap]);
                        },
                        i,
                    ]
                );
            }
        },
        759241: (e, t, n) => {
            n.d(t, { gm: () => i });
            var r = n(202784),
                o = (n(552322), r.createContext(void 0));
            function i(e) {
                const t = r.useContext(o);
                return e || t || "ltr";
            }
        },
        582493: (e, t, n) => {
            n.d(t, { VY: () => fe, aV: () => ce, fC: () => ue, xz: () => de });
            var r = n(202784);
            function o(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
            var i = n(392211);
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
            function u(...e) {
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
            var c = n(23372),
                d = (n(928316), n(552322)),
                f = r.forwardRef((e, t) => {
                    const { children: n, ...o } = e,
                        i = r.Children.toArray(n),
                        a = i.find(v);
                    if (a) {
                        const e = a.props.children,
                            n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                        return (0, d.jsx)(p, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, d.jsx)(p, { ...o, ref: t, children: n });
                });
            f.displayName = "Slot";
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
                    return n.type !== r.Fragment && (i.ref = t ? u(t, e) : e), r.cloneElement(n, i);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            p.displayName = "SlotClone";
            var m = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
            function v(e) {
                return r.isValidElement(e) && e.type === m;
            }
            var y = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? f : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(i, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var h = n(627757),
                b = n(387695),
                g = n(759241),
                w = "rovingFocusGroup.onEntryFocus",
                C = { bubbles: !1, cancelable: !0 },
                R = "RovingFocusGroup",
                [E, F, x] = (0, s.B)(R),
                [D, N] = (0, i.b)(R, [x]),
                [S, T] = D(R),
                j = r.forwardRef((e, t) => (0, d.jsx)(E.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, d.jsx)(E.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, d.jsx)(P, { ...e, ref: t }) }) }));
            j.displayName = R;
            var P = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, orientation: o, loop: i = !1, dir: s, currentTabStopId: l, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...v } = e,
                        R = r.useRef(null),
                        E = (function (...e) {
                            return r.useCallback(u(...e), e);
                        })(t, R),
                        x = (0, g.gm)(s),
                        [D = null, N] = (0, b.T)({ prop: l, defaultProp: c, onChange: f }),
                        [T, j] = r.useState(!1),
                        P = (0, h.W)(p),
                        I = F(n),
                        O = r.useRef(!1),
                        [M, V] = r.useState(0);
                    return (
                        r.useEffect(() => {
                            const e = R.current;
                            if (e) return e.addEventListener(w, P), () => e.removeEventListener(w, P);
                        }, [P]),
                        (0, d.jsx)(S, {
                            scope: n,
                            orientation: o,
                            dir: x,
                            loop: i,
                            currentTabStopId: D,
                            onItemFocus: r.useCallback((e) => N(e), [N]),
                            onItemShiftTab: r.useCallback(() => j(!0), []),
                            onFocusableItemAdd: r.useCallback(() => V((e) => e + 1), []),
                            onFocusableItemRemove: r.useCallback(() => V((e) => e - 1), []),
                            children: (0, d.jsx)(y.div, {
                                tabIndex: T || 0 === M ? -1 : 0,
                                "data-orientation": o,
                                ...v,
                                ref: E,
                                style: { outline: "none", ...e.style },
                                onMouseDown: a(e.onMouseDown, () => {
                                    O.current = !0;
                                }),
                                onFocus: a(e.onFocus, (e) => {
                                    const t = !O.current;
                                    if (e.target === e.currentTarget && t && !T) {
                                        const t = new CustomEvent(w, C);
                                        if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                            const e = I().filter((e) => e.focusable);
                                            A(
                                                [e.find((e) => e.active), e.find((e) => e.id === D), ...e].filter(Boolean).map((e) => e.ref.current),
                                                m,
                                            );
                                        }
                                    }
                                    O.current = !1;
                                }),
                                onBlur: a(e.onBlur, () => j(!1)),
                            }),
                        })
                    );
                }),
                I = "RovingFocusGroupItem",
                O = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, focusable: o = !0, active: i = !1, tabStopId: s, ...l } = e,
                        u = (0, c.M)(),
                        f = s || u,
                        p = T(I, n),
                        m = p.currentTabStopId === f,
                        v = F(n),
                        { onFocusableItemAdd: h, onFocusableItemRemove: b } = p;
                    return (
                        r.useEffect(() => {
                            if (o) return h(), () => b();
                        }, [o, h, b]),
                        (0, d.jsx)(E.ItemSlot, {
                            scope: n,
                            id: f,
                            focusable: o,
                            active: i,
                            children: (0, d.jsx)(y.span, {
                                tabIndex: m ? 0 : -1,
                                "data-orientation": p.orientation,
                                ...l,
                                ref: t,
                                onMouseDown: a(e.onMouseDown, (e) => {
                                    o ? p.onItemFocus(f) : e.preventDefault();
                                }),
                                onFocus: a(e.onFocus, () => p.onItemFocus(f)),
                                onKeyDown: a(e.onKeyDown, (e) => {
                                    if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                                    if (e.target !== e.currentTarget) return;
                                    const t = (function (e, t, n) {
                                        const r = (function (e, t) {
                                            return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
                                        })(e.key, n);
                                        return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) || ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r)) ? void 0 : M[r];
                                    })(e, p.orientation, p.dir);
                                    if (void 0 !== t) {
                                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                        e.preventDefault();
                                        let o = v()
                                            .filter((e) => e.focusable)
                                            .map((e) => e.ref.current);
                                        if ("last" === t) o.reverse();
                                        else if ("prev" === t || "next" === t) {
                                            "prev" === t && o.reverse();
                                            const i = o.indexOf(e.currentTarget);
                                            o = p.loop ? ((r = i + 1), (n = o).map((e, t) => n[(r + t) % n.length])) : o.slice(i + 1);
                                        }
                                        setTimeout(() => A(o));
                                    }
                                    var n, r;
                                }),
                            }),
                        })
                    );
                });
            O.displayName = I;
            var M = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function A(e, t = !1) {
                const n = document.activeElement;
                for (const r of e) {
                    if (r === n) return;
                    if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
                }
            }
            var V = j,
                k = O;
            function _(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function W(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = _(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : _(e[t], null);
                            }
                        };
                };
            }
            var L = n(861644);
            var U = (e) => {
                const { present: t, children: n } = e,
                    o = (function (e) {
                        const [t, n] = r.useState(),
                            o = r.useRef({}),
                            i = r.useRef(e),
                            a = r.useRef("none"),
                            s = e ? "mounted" : "unmounted",
                            [l, u] = (function (e, t) {
                                return r.useReducer((e, n) => t[e][n] ?? e, e);
                            })(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
                        return (
                            r.useEffect(() => {
                                const e = $(o.current);
                                a.current = "mounted" === l ? e : "none";
                            }, [l]),
                            (0, L.b)(() => {
                                const t = o.current,
                                    n = i.current;
                                if (n !== e) {
                                    const r = a.current,
                                        o = $(t);
                                    if (e) u("MOUNT");
                                    else if ("none" === o || "none" === t?.display) u("UNMOUNT");
                                    else {
                                        u(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT");
                                    }
                                    i.current = e;
                                }
                            }, [e, u]),
                            (0, L.b)(() => {
                                if (t) {
                                    let e;
                                    const n = t.ownerDocument.defaultView ?? window,
                                        r = (r) => {
                                            const a = $(o.current).includes(r.animationName);
                                            if (r.target === t && a && (u("ANIMATION_END"), !i.current)) {
                                                const r = t.style.animationFillMode;
                                                (t.style.animationFillMode = "forwards"),
                                                    (e = n.setTimeout(() => {
                                                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r);
                                                    }));
                                            }
                                        },
                                        s = (e) => {
                                            e.target === t && (a.current = $(o.current));
                                        };
                                    return (
                                        t.addEventListener("animationstart", s),
                                        t.addEventListener("animationcancel", r),
                                        t.addEventListener("animationend", r),
                                        () => {
                                            n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
                                        }
                                    );
                                }
                                u("ANIMATION_END");
                            }, [t, u]),
                            {
                                isPresent: ["mounted", "unmountSuspended"].includes(l),
                                ref: r.useCallback((e) => {
                                    e && (o.current = getComputedStyle(e)), n(e);
                                }, []),
                            }
                        );
                    })(t),
                    i = "function" == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
                    a = (function (...e) {
                        return r.useCallback(W(...e), e);
                    })(
                        o.ref,
                        (function (e) {
                            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                                n = t && "isReactWarning" in t && t.isReactWarning;
                            if (n) return e.ref;
                            if (((t = Object.getOwnPropertyDescriptor(e, "ref")?.get), (n = t && "isReactWarning" in t && t.isReactWarning), n)) return e.props.ref;
                            return e.props.ref || e.ref;
                        })(i),
                    );
                return "function" == typeof n || o.isPresent ? r.cloneElement(i, { ref: a }) : null;
            };
            function $(e) {
                return e?.animationName || "none";
            }
            U.displayName = "Presence";
            var K = r.forwardRef((e, t) => {
                const { children: n, ...o } = e,
                    i = r.Children.toArray(n),
                    a = i.find(B);
                if (a) {
                    const e = a.props.children,
                        n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                    return (0, d.jsx)(H, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                }
                return (0, d.jsx)(H, { ...o, ref: t, children: n });
            });
            K.displayName = "Slot";
            var H = r.forwardRef((e, t) => {
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
                    return n.type !== r.Fragment && (i.ref = t ? W(t, e) : e), r.cloneElement(n, i);
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            H.displayName = "SlotClone";
            var z = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
            function B(e) {
                return r.isValidElement(e) && e.type === z;
            }
            var G = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? K : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(i, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var X = "Tabs",
                [Z, q] = (0, i.b)(X, [N]),
                J = N(),
                [Q, Y] = Z(X),
                ee = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: i, orientation: a = "horizontal", dir: s, activationMode: l = "automatic", ...u } = e,
                        f = (0, g.gm)(s),
                        [p, m] = (0, b.T)({ prop: r, onChange: o, defaultProp: i });
                    return (0, d.jsx)(Q, { scope: n, baseId: (0, c.M)(), value: p, onValueChange: m, orientation: a, dir: f, activationMode: l, children: (0, d.jsx)(G.div, { dir: f, "data-orientation": a, ...u, ref: t }) });
                });
            ee.displayName = X;
            var te = "TabsList",
                ne = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, loop: r = !0, ...o } = e,
                        i = Y(te, n),
                        a = J(n);
                    return (0, d.jsx)(V, { asChild: !0, ...a, orientation: i.orientation, dir: i.dir, loop: r, children: (0, d.jsx)(G.div, { role: "tablist", "aria-orientation": i.orientation, ...o, ref: t }) });
                });
            ne.displayName = te;
            var re = "TabsTrigger",
                oe = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e,
                        s = Y(re, n),
                        l = J(n),
                        u = se(s.baseId, r),
                        c = le(s.baseId, r),
                        f = r === s.value;
                    return (0, d.jsx)(k, {
                        asChild: !0,
                        ...l,
                        focusable: !i,
                        active: f,
                        children: (0, d.jsx)(G.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": f,
                            "aria-controls": c,
                            "data-state": f ? "active" : "inactive",
                            "data-disabled": i ? "" : void 0,
                            disabled: i,
                            id: u,
                            ...a,
                            ref: t,
                            onMouseDown: o(e.onMouseDown, (e) => {
                                i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(r);
                            }),
                            onKeyDown: o(e.onKeyDown, (e) => {
                                [" ", "Enter"].includes(e.key) && s.onValueChange(r);
                            }),
                            onFocus: o(e.onFocus, () => {
                                const e = "manual" !== s.activationMode;
                                f || i || !e || s.onValueChange(r);
                            }),
                        }),
                    });
                });
            oe.displayName = re;
            var ie = "TabsContent",
                ae = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, value: o, forceMount: i, children: a, ...s } = e,
                        l = Y(ie, n),
                        u = se(l.baseId, o),
                        c = le(l.baseId, o),
                        f = o === l.value,
                        p = r.useRef(f);
                    return (
                        r.useEffect(() => {
                            const e = requestAnimationFrame(() => (p.current = !1));
                            return () => cancelAnimationFrame(e);
                        }, []),
                        (0, d.jsx)(U, { present: i || f, children: ({ present: n }) => (0, d.jsx)(G.div, { "data-state": f ? "active" : "inactive", "data-orientation": l.orientation, role: "tabpanel", "aria-labelledby": u, hidden: !n, id: c, tabIndex: 0, ...s, ref: t, style: { ...e.style, animationDuration: p.current ? "0s" : void 0 }, children: n && a }) })
                    );
                });
            function se(e, t) {
                return `${e}-trigger-${t}`;
            }
            function le(e, t) {
                return `${e}-content-${t}`;
            }
            ae.displayName = ie;
            var ue = ee,
                ce = ne,
                de = oe,
                fe = ae;
        },
        890022: (e, t, n) => {
            n.d(t, { D: () => o });
            var r = n(202784);
            function o(e) {
                const t = r.useRef({ value: e, previous: e });
                return r.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
            }
        },
        728514: (e, t, n) => {
            n.d(t, { e: () => s });
            var r = n(852053),
                o = n(309371),
                i = n(454338),
                a = n(253246);
            function s(e) {
                const t = (0, r.r)(e);
                if ("virtual" === (0, a.Jz)()) {
                    let n = t.activeElement;
                    (0, o.Q)(() => {
                        t.activeElement === n && e.isConnected && (0, i.A)(e);
                    });
                } else (0, i.A)(e);
            }
        },
        373363: (e, t, n) => {
            n.d(t, { k: () => c });
            var r = n(728514),
                o = n(305864),
                i = n(277108),
                a = n(202784),
                s = n(838369),
                l = n(527355);
            let u = a.createContext(null);
            function c(e, t) {
                let { focusProps: n } = (0, s.K)(e),
                    { keyboardProps: c } = (0, l.v)(e),
                    d = (0, i.d)(n, c),
                    f = (function (e) {
                        let t = (0, a.useContext)(u) || {};
                        (0, o.l)(t, e);
                        let { ref: n, ...r } = t;
                        return r;
                    })(t),
                    p = e.isDisabled ? {} : f,
                    m = (0, a.useRef)(e.autoFocus);
                return (
                    (0, a.useEffect)(() => {
                        m.current && t.current && (0, r.e)(t.current), (m.current = !1);
                    }, [t]),
                    { focusableProps: (0, i.d)({ ...d, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 }, p) }
                );
            }
        },
        258246: (e, t, n) => {
            n.d(t, { iR: () => E, wQ: () => g, gs: () => N, Uj: () => x });
            var r = n(203230),
                o = n(202784);
            const i = (0, o.createContext)({});
            var a = n(952957),
                s = n(138997),
                l = n(80958),
                u = n(277108),
                c = n(338585),
                d = n(253246),
                f = n(838369),
                p = n(525757);
            function m(e = {}) {
                let { autoFocus: t = !1, isTextInput: n, within: r } = e,
                    i = (0, o.useRef)({ isFocused: !1, isFocusVisible: t || (0, d.E)() }),
                    [a, s] = (0, o.useState)(!1),
                    [l, u] = (0, o.useState)(() => i.current.isFocused && i.current.isFocusVisible),
                    c = (0, o.useCallback)(() => u(i.current.isFocused && i.current.isFocusVisible), []),
                    m = (0, o.useCallback)(
                        (e) => {
                            (i.current.isFocused = e), s(e), c();
                        },
                        [c],
                    );
                (0, d.mG)(
                    (e) => {
                        (i.current.isFocusVisible = e), c();
                    },
                    [],
                    { isTextInput: n },
                );
                let { focusProps: v } = (0, f.K)({ isDisabled: r, onFocusChange: m }),
                    { focusWithinProps: y } = (0, p.L)({ isDisabled: !r, onFocusWithinChange: m });
                return { isFocused: a, isFocusVisible: l, focusProps: r ? y : v };
            }
            var v = n(536574),
                y = n(23296),
                h = n(958682);
            const b = (0, o.createContext)(null),
                g = (0, o.createContext)(null),
                w = (0, o.createContext)(null),
                C = (0, o.createContext)(null);
            function R(e, t) {
                [e, t] = (0, r.pE)(e, t, b);
                let n = (0, o.useRef)(null),
                    l = (0, a.U)(e.formatOptions),
                    u = (0, h.x)({ ...e, numberFormatter: l }),
                    [c, d] = (0, r.xc)(),
                    { groupProps: f, trackProps: p, labelProps: m, outputProps: v } = (0, s.o)({ ...e, label: d }, u, n),
                    R = (0, r.aX)({ ...e, values: { orientation: u.orientation, isDisabled: u.isDisabled, state: u }, defaultClassName: "react-aria-Slider" }),
                    E = (0, y.z)(e);
                return (
                    delete E.id,
                    o.createElement(
                        r.zt,
                        {
                            values: [
                                [g, u],
                                [w, { ...p, ref: n }],
                                [C, v],
                                [i, { ...m, ref: c }],
                            ],
                        },
                        o.createElement("div", { ...E, ...f, ...R, ref: t, slot: e.slot || void 0, "data-orientation": u.orientation, "data-disabled": u.isDisabled || void 0 }),
                    )
                );
            }
            const E = (0, o.forwardRef)(R);
            function F(e, t) {
                [e, t] = (0, r.pE)(e, t, w);
                let n = (0, o.useContext)(g),
                    { onHoverStart: i, onHoverEnd: a, onHoverChange: s, ...c } = e,
                    { hoverProps: d, isHovered: f } = (0, l.X)({ onHoverStart: i, onHoverEnd: a, onHoverChange: s }),
                    p = (0, r.aX)({ ...e, defaultClassName: "react-aria-SliderTrack", values: { orientation: n.orientation, isDisabled: n.isDisabled, isHovered: f, state: n } });
                return o.createElement("div", { ...(0, u.d)(c, d), ...p, ref: t, "data-hovered": f || void 0, "data-orientation": n.orientation || void 0, "data-disabled": n.isDisabled || void 0 });
            }
            const x = (0, o.forwardRef)(F);
            function D(e, t) {
                let { inputRef: n = null } = e,
                    a = (0, o.useContext)(g),
                    { ref: s } = (0, r.jn)(w),
                    { index: d = 0 } = e,
                    f = (0, o.useRef)(null),
                    p = n || f,
                    [h, b] = (0, r.xc)(),
                    { thumbProps: C, inputProps: R, labelProps: E, isDragging: F, isFocused: x, isDisabled: D } = (0, c.p)({ ...e, index: d, trackRef: s, inputRef: p, label: b }, a),
                    { focusProps: N, isFocusVisible: S } = m(),
                    { hoverProps: T, isHovered: j } = (0, l.X)(e),
                    P = (0, r.aX)({ ...e, defaultClassName: "react-aria-SliderThumb", values: { state: a, isHovered: j, isDragging: F, isFocused: x, isFocusVisible: S, isDisabled: D } }),
                    I = (0, y.z)(e);
                return delete I.id, o.createElement("div", { ...(0, u.d)(I, C, T), ...P, ref: t, style: { ...C.style, ...P.style }, "data-hovered": j || void 0, "data-dragging": F || void 0, "data-focused": x || void 0, "data-focus-visible": S || void 0, "data-disabled": D || void 0 }, o.createElement(v.T, null, o.createElement("input", { ref: p, ...(0, u.d)(R, N) })), o.createElement(r.zt, { values: [[i, { ...E, ref: h }]] }, P.children));
            }
            const N = (0, o.forwardRef)(D);
        },
        203230: (e, t, n) => {
            n.d(t, { aX: () => d, iW: () => v, jn: () => f, pE: () => p, xB: () => y, xc: () => m, zt: () => c });
            var r = n(640566),
                o = n(282733),
                i = n(277108),
                a = n(426636),
                s = n(202784),
                l = n(928316);
            const u = Symbol("default");
            function c({ values: e, children: t }) {
                for (let [n, r] of e) t = s.createElement(n.Provider, { value: r }, t);
                return t;
            }
            function d(e) {
                let { className: t, style: n, children: r, defaultClassName: o, defaultChildren: i, defaultStyle: a, values: l } = e;
                return (0, s.useMemo)(() => {
                    let e, s, u;
                    return (e = "function" == typeof t ? t({ ...l, defaultClassName: o }) : t), (s = "function" == typeof n ? n({ ...l, defaultStyle: a || {} }) : n), (u = "function" == typeof r ? r({ ...l, defaultChildren: i }) : null == r ? i : r), { className: null != e ? e : o, style: s || a ? { ...a, ...s } : void 0, children: null != u ? u : i, "data-rac": "" };
                }, [t, n, r, o, i, a, l]);
            }
            function f(e, t) {
                let n = (0, s.useContext)(e);
                if (null === t) return null;
                if (n && "object" == typeof n && "slots" in n && n.slots) {
                    let e = new Intl.ListFormat().format(Object.keys(n.slots).map((e) => `"${e}"`));
                    if (!t && !n.slots[u]) throw new Error(`A slot prop is required. Valid slot names are ${e}.`);
                    let r = t || u;
                    if (!n.slots[r]) throw new Error(`Invalid slot "${t}". Valid slot names are ${e}.`);
                    return n.slots[r];
                }
                return n;
            }
            function p(e, t, n) {
                let a = f(n, e.slot) || {},
                    { ref: l, ...u } = a,
                    c = (0, r.B)((0, s.useMemo)(() => (0, o.l)(t, l), [t, l])),
                    d = (0, i.d)(u, e);
                return (
                    "style" in u &&
                        u.style &&
                        "style" in e &&
                        e.style &&
                        ("function" == typeof u.style || "function" == typeof e.style
                            ? (d.style = (t) => {
                                  let n = "function" == typeof u.style ? u.style(t) : u.style,
                                      r = { ...t.defaultStyle, ...n },
                                      o = "function" == typeof e.style ? e.style({ ...t, defaultStyle: r }) : e.style;
                                  return { ...r, ...o };
                              })
                            : (d.style = { ...u.style, ...e.style })),
                    [d, c]
                );
            }
            function m() {
                let [e, t] = (0, s.useState)(!0),
                    n = (0, s.useRef)(!1),
                    r = (0, s.useCallback)((e) => {
                        (n.current = !0), t(!!e);
                    }, []);
                return (
                    (0, a.b)(() => {
                        n.current || t(!1);
                    }, []),
                    [r, e]
                );
            }
            function v(e, t = !0) {
                let [n, r] = (0, s.useState)(!0);
                return (
                    h(
                        e,
                        n && t,
                        (0, s.useCallback)(() => r(!1), []),
                    ),
                    n && t
                );
            }
            function y(e, t) {
                let [n, r] = (0, s.useState)(!1),
                    [o, i] = (0, s.useState)("idle");
                return (
                    !t && e.current && "idle" === o && ((n = !0), r(!0), i("exiting")),
                    e.current || "exited" !== o || i("idle"),
                    h(
                        e,
                        n,
                        (0, s.useCallback)(() => {
                            i("exited"), r(!1);
                        }, []),
                    ),
                    n
                );
            }
            function h(e, t, n) {
                let r = (0, s.useRef)(null);
                t && e.current && (r.current = window.getComputedStyle(e.current).animation),
                    (0, a.b)(() => {
                        if (t && e.current) {
                            let t = window.getComputedStyle(e.current);
                            if (t.animationName && "none" !== t.animationName && t.animation !== r.current) {
                                let t = (o) => {
                                        o.target === e.current &&
                                            (r.removeEventListener("animationend", t),
                                            l.flushSync(() => {
                                                n();
                                            }));
                                    },
                                    r = e.current;
                                return (
                                    r.addEventListener("animationend", t),
                                    () => {
                                        r.removeEventListener("animationend", t);
                                    }
                                );
                            }
                            n();
                        }
                    }, [e, t, n]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-f82e0cd2.f5db54aa.js.map

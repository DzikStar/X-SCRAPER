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
                    h = r.forwardRef((e, t) => {
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
                    (h.displayName = m),
                    [
                        { Provider: d, Slot: p, ItemSlot: h },
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
            var h = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? f : t;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(i, { ...o, ref: n });
                });
                return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
            }, {});
            var b = n(627757),
                y = n(387695),
                g = n(759241),
                w = "rovingFocusGroup.onEntryFocus",
                R = { bubbles: !1, cancelable: !0 },
                C = "RovingFocusGroup",
                [E, x, F] = (0, s.B)(C),
                [D, N] = (0, i.b)(C, [F]),
                [T, j] = D(C),
                P = r.forwardRef((e, t) => (0, d.jsx)(E.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, d.jsx)(E.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, d.jsx)(O, { ...e, ref: t }) }) }));
            P.displayName = C;
            var O = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, orientation: o, loop: i = !1, dir: s, currentTabStopId: l, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...v } = e,
                        C = r.useRef(null),
                        E = (function (...e) {
                            return r.useCallback(u(...e), e);
                        })(t, C),
                        F = (0, g.gm)(s),
                        [D = null, N] = (0, y.T)({ prop: l, defaultProp: c, onChange: f }),
                        [j, P] = r.useState(!1),
                        O = (0, b.W)(p),
                        I = x(n),
                        M = r.useRef(!1),
                        [S, _] = r.useState(0);
                    return (
                        r.useEffect(() => {
                            const e = C.current;
                            if (e) return e.addEventListener(w, O), () => e.removeEventListener(w, O);
                        }, [O]),
                        (0, d.jsx)(T, {
                            scope: n,
                            orientation: o,
                            dir: F,
                            loop: i,
                            currentTabStopId: D,
                            onItemFocus: r.useCallback((e) => N(e), [N]),
                            onItemShiftTab: r.useCallback(() => P(!0), []),
                            onFocusableItemAdd: r.useCallback(() => _((e) => e + 1), []),
                            onFocusableItemRemove: r.useCallback(() => _((e) => e - 1), []),
                            children: (0, d.jsx)(h.div, {
                                tabIndex: j || 0 === S ? -1 : 0,
                                "data-orientation": o,
                                ...v,
                                ref: E,
                                style: { outline: "none", ...e.style },
                                onMouseDown: a(e.onMouseDown, () => {
                                    M.current = !0;
                                }),
                                onFocus: a(e.onFocus, (e) => {
                                    const t = !M.current;
                                    if (e.target === e.currentTarget && t && !j) {
                                        const t = new CustomEvent(w, R);
                                        if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                            const e = I().filter((e) => e.focusable);
                                            A(
                                                [e.find((e) => e.active), e.find((e) => e.id === D), ...e].filter(Boolean).map((e) => e.ref.current),
                                                m,
                                            );
                                        }
                                    }
                                    M.current = !1;
                                }),
                                onBlur: a(e.onBlur, () => P(!1)),
                            }),
                        })
                    );
                }),
                I = "RovingFocusGroupItem",
                M = r.forwardRef((e, t) => {
                    const { __scopeRovingFocusGroup: n, focusable: o = !0, active: i = !1, tabStopId: s, ...l } = e,
                        u = (0, c.M)(),
                        f = s || u,
                        p = j(I, n),
                        m = p.currentTabStopId === f,
                        v = x(n),
                        { onFocusableItemAdd: b, onFocusableItemRemove: y } = p;
                    return (
                        r.useEffect(() => {
                            if (o) return b(), () => y();
                        }, [o, b, y]),
                        (0, d.jsx)(E.ItemSlot, {
                            scope: n,
                            id: f,
                            focusable: o,
                            active: i,
                            children: (0, d.jsx)(h.span, {
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
                                        return ("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r)) || ("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r)) ? void 0 : S[r];
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
            M.displayName = I;
            var S = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function A(e, t = !1) {
                const n = document.activeElement;
                for (const r of e) {
                    if (r === n) return;
                    if ((r.focus({ preventScroll: t }), document.activeElement !== n)) return;
                }
            }
            var _ = P,
                V = M;
            function k(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t);
            }
            function W(...e) {
                return (t) => {
                    let n = !1;
                    const r = e.map((e) => {
                        const r = k(e, t);
                        return n || "function" != typeof r || (n = !0), r;
                    });
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                const n = r[t];
                                "function" == typeof n ? n() : k(e[t], null);
                            }
                        };
                };
            }
            var U = n(861644);
            var L = (e) => {
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
                            (0, U.b)(() => {
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
                            (0, U.b)(() => {
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
            L.displayName = "Presence";
            var H = r.forwardRef((e, t) => {
                const { children: n, ...o } = e,
                    i = r.Children.toArray(n),
                    a = i.find(B);
                if (a) {
                    const e = a.props.children,
                        n = i.map((t) => (t === a ? (r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null) : t));
                    return (0, d.jsx)(K, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                }
                return (0, d.jsx)(K, { ...o, ref: t, children: n });
            });
            H.displayName = "Slot";
            var K = r.forwardRef((e, t) => {
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
            K.displayName = "SlotClone";
            var z = ({ children: e }) => (0, d.jsx)(d.Fragment, { children: e });
            function B(e) {
                return r.isValidElement(e) && e.type === z;
            }
            var G = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                const n = r.forwardRef((e, n) => {
                    const { asChild: r, ...o } = e,
                        i = r ? H : t;
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
                        [p, m] = (0, y.T)({ prop: r, onChange: o, defaultProp: i });
                    return (0, d.jsx)(Q, { scope: n, baseId: (0, c.M)(), value: p, onValueChange: m, orientation: a, dir: f, activationMode: l, children: (0, d.jsx)(G.div, { dir: f, "data-orientation": a, ...u, ref: t }) });
                });
            ee.displayName = X;
            var te = "TabsList",
                ne = r.forwardRef((e, t) => {
                    const { __scopeTabs: n, loop: r = !0, ...o } = e,
                        i = Y(te, n),
                        a = J(n);
                    return (0, d.jsx)(_, { asChild: !0, ...a, orientation: i.orientation, dir: i.dir, loop: r, children: (0, d.jsx)(G.div, { role: "tablist", "aria-orientation": i.orientation, ...o, ref: t }) });
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
                    return (0, d.jsx)(V, {
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
                        (0, d.jsx)(L, { present: i || f, children: ({ present: n }) => (0, d.jsx)(G.div, { "data-state": f ? "active" : "inactive", "data-orientation": l.orientation, role: "tabpanel", "aria-labelledby": u, hidden: !n, id: c, tabIndex: 0, ...s, ref: t, style: { ...e.style, animationDuration: p.current ? "0s" : void 0 }, children: n && a }) })
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
        801766: (e, t, n) => {
            n.d(t, { iR: () => w, wQ: () => h, gs: () => x, Uj: () => C });
            var r = n(203230),
                o = n(202784);
            const i = (0, o.createContext)({});
            var a = n(952957),
                s = n(138997),
                l = n(80958),
                u = n(277108),
                c = n(235814),
                d = n(56624),
                f = n(536574),
                p = n(23296),
                m = n(958682);
            const v = (0, o.createContext)(null),
                h = (0, o.createContext)(null),
                b = (0, o.createContext)(null),
                y = (0, o.createContext)(null);
            function g(e, t) {
                [e, t] = (0, r.pE)(e, t, v);
                let n = (0, o.useRef)(null),
                    l = (0, a.U)(e.formatOptions),
                    u = (0, m.x)({ ...e, numberFormatter: l }),
                    [c, d] = (0, r.xc)(),
                    { groupProps: f, trackProps: g, labelProps: w, outputProps: R } = (0, s.o)({ ...e, label: d }, u, n),
                    C = (0, r.aX)({ ...e, values: { orientation: u.orientation, isDisabled: u.isDisabled, state: u }, defaultClassName: "react-aria-Slider" }),
                    E = (0, p.z)(e);
                return (
                    delete E.id,
                    o.createElement(
                        r.zt,
                        {
                            values: [
                                [h, u],
                                [b, { ...g, ref: n }],
                                [y, R],
                                [i, { ...w, ref: c }],
                            ],
                        },
                        o.createElement("div", { ...E, ...f, ...C, ref: t, slot: e.slot || void 0, "data-orientation": u.orientation, "data-disabled": u.isDisabled || void 0 }),
                    )
                );
            }
            const w = (0, o.forwardRef)(g);
            function R(e, t) {
                [e, t] = (0, r.pE)(e, t, b);
                let n = (0, o.useContext)(h),
                    { onHoverStart: i, onHoverEnd: a, onHoverChange: s, ...c } = e,
                    { hoverProps: d, isHovered: f } = (0, l.X)({ onHoverStart: i, onHoverEnd: a, onHoverChange: s }),
                    p = (0, r.aX)({ ...e, defaultClassName: "react-aria-SliderTrack", values: { orientation: n.orientation, isDisabled: n.isDisabled, isHovered: f, state: n } });
                return o.createElement("div", { ...(0, u.d)(c, d), ...p, ref: t, "data-hovered": f || void 0, "data-orientation": n.orientation || void 0, "data-disabled": n.isDisabled || void 0 });
            }
            const C = (0, o.forwardRef)(R);
            function E(e, t) {
                let { inputRef: n = null } = e,
                    a = (0, o.useContext)(h),
                    { ref: s } = (0, r.jn)(b),
                    { index: m = 0 } = e,
                    v = (0, o.useRef)(null),
                    y = n || v,
                    [g, w] = (0, r.xc)(),
                    { thumbProps: R, inputProps: C, labelProps: E, isDragging: x, isFocused: F, isDisabled: D } = (0, c.p)({ ...e, index: m, trackRef: s, inputRef: y, label: w }, a),
                    { focusProps: N, isFocusVisible: T } = (0, d.F)(),
                    { hoverProps: j, isHovered: P } = (0, l.X)(e),
                    O = (0, r.aX)({ ...e, defaultClassName: "react-aria-SliderThumb", values: { state: a, isHovered: P, isDragging: x, isFocused: F, isFocusVisible: T, isDisabled: D } }),
                    I = (0, p.z)(e);
                return delete I.id, o.createElement("div", { ...(0, u.d)(I, R, j), ...O, ref: t, style: { ...R.style, ...O.style }, "data-hovered": P || void 0, "data-dragging": x || void 0, "data-focused": F || void 0, "data-focus-visible": T || void 0, "data-disabled": D || void 0 }, o.createElement(f.T, null, o.createElement("input", { ref: y, ...(0, u.d)(C, N) })), o.createElement(r.zt, { values: [[i, { ...E, ref: g }]] }, O.children));
            }
            const x = (0, o.forwardRef)(E);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-f82e0cd2.ac32250a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2457460b"],
    {
        728514: (e, t, s) => {
            s.d(t, { e: () => u });
            var n = s(852053),
                r = s(309371),
                i = s(454338),
                l = s(253246);
            function u(e) {
                const t = (0, n.r)(e);
                if ("virtual" === (0, l.Jz)()) {
                    let s = t.activeElement;
                    (0, r.Q)(() => {
                        t.activeElement === s && e.isConnected && (0, i.A)(e);
                    });
                } else (0, i.A)(e);
            }
        },
        56624: (e, t, s) => {
            s.d(t, { F: () => u });
            var n = s(253246),
                r = s(838369),
                i = s(525757),
                l = s(202784);
            function u(e = {}) {
                let { autoFocus: t = !1, isTextInput: s, within: u } = e,
                    o = (0, l.useRef)({ isFocused: !1, isFocusVisible: t || (0, n.E)() }),
                    [a, c] = (0, l.useState)(!1),
                    [d, f] = (0, l.useState)(() => o.current.isFocused && o.current.isFocusVisible),
                    y = (0, l.useCallback)(() => f(o.current.isFocused && o.current.isFocusVisible), []),
                    b = (0, l.useCallback)(
                        (e) => {
                            (o.current.isFocused = e), c(e), y();
                        },
                        [y],
                    );
                (0, n.mG)(
                    (e) => {
                        (o.current.isFocusVisible = e), y();
                    },
                    [],
                    { isTextInput: s },
                );
                let { focusProps: m } = (0, r.K)({ isDisabled: u, onFocusChange: b }),
                    { focusWithinProps: v } = (0, i.L)({ isDisabled: !u, onFocusWithinChange: b });
                return { isFocused: a, isFocusVisible: d, focusProps: u ? v : m };
            }
        },
        373363: (e, t, s) => {
            s.d(t, { k: () => c });
            var n = s(728514),
                r = s(305864),
                i = s(277108),
                l = s(202784),
                u = s(838369),
                o = s(527355);
            let a = l.createContext(null);
            function c(e, t) {
                let { focusProps: s } = (0, u.K)(e),
                    { keyboardProps: c } = (0, o.v)(e),
                    d = (0, i.d)(s, c),
                    f = (function (e) {
                        let t = (0, l.useContext)(a) || {};
                        (0, r.l)(t, e);
                        let { ref: s, ...n } = t;
                        return n;
                    })(t),
                    y = e.isDisabled ? {} : f,
                    b = (0, l.useRef)(e.autoFocus);
                return (
                    (0, l.useEffect)(() => {
                        b.current && t.current && (0, n.e)(t.current), (b.current = !1);
                    }, [t]),
                    { focusableProps: (0, i.d)({ ...d, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 }, y) }
                );
            }
        },
        812115: (e, t, s) => {
            s.d(t, { r: () => d });
            var n = s(203230),
                r = s(486621),
                i = s(80958),
                l = s(56624),
                u = s(277108),
                o = s(202784);
            const a = (0, o.createContext)(null);
            function c(e, t) {
                [e, t] = (0, n.pE)(e, t, a);
                let s = e.href ? "a" : "span",
                    { linkProps: c, isPressed: d } = (0, r.n)({ ...e, elementType: s }, t),
                    { hoverProps: f, isHovered: y } = (0, i.X)(e),
                    { focusProps: b, isFocused: m, isFocusVisible: v } = (0, l.F)(),
                    p = (0, n.aX)({ ...e, defaultClassName: "react-aria-Link", values: { isCurrent: !!e["aria-current"], isDisabled: e.isDisabled || !1, isPressed: d, isHovered: y, isFocused: m, isFocusVisible: v } });
                return o.createElement(s, { ref: t, slot: e.slot || void 0, ...(0, u.d)(p, c, f, b), "data-focused": m || void 0, "data-hovered": y || void 0, "data-pressed": d || void 0, "data-focus-visible": v || void 0, "data-current": !!e["aria-current"] || void 0, "data-disabled": e.isDisabled || void 0 }, p.children);
            }
            const d = (0, o.forwardRef)(c);
        },
        203230: (e, t, s) => {
            s.d(t, { aX: () => d, iW: () => m, jn: () => f, pE: () => y, xB: () => v, xc: () => b, zt: () => c });
            var n = s(640566),
                r = s(282733),
                i = s(277108),
                l = s(426636),
                u = s(202784),
                o = s(928316);
            const a = Symbol("default");
            function c({ values: e, children: t }) {
                for (let [s, n] of e) t = u.createElement(s.Provider, { value: n }, t);
                return t;
            }
            function d(e) {
                let { className: t, style: s, children: n, defaultClassName: r, defaultChildren: i, defaultStyle: l, values: o } = e;
                return (0, u.useMemo)(() => {
                    let e, u, a;
                    return (e = "function" == typeof t ? t({ ...o, defaultClassName: r }) : t), (u = "function" == typeof s ? s({ ...o, defaultStyle: l || {} }) : s), (a = "function" == typeof n ? n({ ...o, defaultChildren: i }) : null == n ? i : n), { className: null != e ? e : r, style: u || l ? { ...l, ...u } : void 0, children: null != a ? a : i, "data-rac": "" };
                }, [t, s, n, r, i, l, o]);
            }
            function f(e, t) {
                let s = (0, u.useContext)(e);
                if (null === t) return null;
                if (s && "object" == typeof s && "slots" in s && s.slots) {
                    let e = new Intl.ListFormat().format(Object.keys(s.slots).map((e) => `"${e}"`));
                    if (!t && !s.slots[a]) throw new Error(`A slot prop is required. Valid slot names are ${e}.`);
                    let n = t || a;
                    if (!s.slots[n]) throw new Error(`Invalid slot "${t}". Valid slot names are ${e}.`);
                    return s.slots[n];
                }
                return s;
            }
            function y(e, t, s) {
                let l = f(s, e.slot) || {},
                    { ref: o, ...a } = l,
                    c = (0, n.B)((0, u.useMemo)(() => (0, r.l)(t, o), [t, o])),
                    d = (0, i.d)(a, e);
                return (
                    "style" in a &&
                        a.style &&
                        "style" in e &&
                        e.style &&
                        ("function" == typeof a.style || "function" == typeof e.style
                            ? (d.style = (t) => {
                                  let s = "function" == typeof a.style ? a.style(t) : a.style,
                                      n = { ...t.defaultStyle, ...s },
                                      r = "function" == typeof e.style ? e.style({ ...t, defaultStyle: n }) : e.style;
                                  return { ...n, ...r };
                              })
                            : (d.style = { ...a.style, ...e.style })),
                    [d, c]
                );
            }
            function b() {
                let [e, t] = (0, u.useState)(!0),
                    s = (0, u.useRef)(!1),
                    n = (0, u.useCallback)((e) => {
                        (s.current = !0), t(!!e);
                    }, []);
                return (
                    (0, l.b)(() => {
                        s.current || t(!1);
                    }, []),
                    [n, e]
                );
            }
            function m(e, t = !0) {
                let [s, n] = (0, u.useState)(!0);
                return (
                    p(
                        e,
                        s && t,
                        (0, u.useCallback)(() => n(!1), []),
                    ),
                    s && t
                );
            }
            function v(e, t) {
                let [s, n] = (0, u.useState)(!1),
                    [r, i] = (0, u.useState)("idle");
                return (
                    !t && e.current && "idle" === r && ((s = !0), n(!0), i("exiting")),
                    e.current || "exited" !== r || i("idle"),
                    p(
                        e,
                        s,
                        (0, u.useCallback)(() => {
                            i("exited"), n(!1);
                        }, []),
                    ),
                    s
                );
            }
            function p(e, t, s) {
                let n = (0, u.useRef)(null);
                t && e.current && (n.current = window.getComputedStyle(e.current).animation),
                    (0, l.b)(() => {
                        if (t && e.current) {
                            let t = window.getComputedStyle(e.current);
                            if (t.animationName && "none" !== t.animationName && t.animation !== n.current) {
                                let t = (r) => {
                                        r.target === e.current &&
                                            (n.removeEventListener("animationend", t),
                                            o.flushSync(() => {
                                                s();
                                            }));
                                    },
                                    n = e.current;
                                return (
                                    n.addEventListener("animationend", t),
                                    () => {
                                        n.removeEventListener("animationend", t);
                                    }
                                );
                            }
                            s();
                        }
                    }, [e, t, s]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-2457460b.c361482a.js.map

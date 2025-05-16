"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-2eb835b5"],
    {
        202136: (e, t, n) => {
            n.d(t, { j: () => b });
            const r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
                o = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
            function i(e) {
                if (Intl.Locale) {
                    let t = new Intl.Locale(e).maximize(),
                        n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (t.script) return r.has(t.script);
                }
                let t = e.split("-")[0];
                return o.has(t);
            }
            var a = n(202784),
                l = n(623047);
            const u = Symbol.for("react-aria.i18n.locale");
            function d() {
                let e = ("undefined" != typeof window && window[u]) || ("undefined" != typeof navigator && (navigator.language || navigator.userLanguage)) || "en-US";
                try {
                    Intl.DateTimeFormat.supportedLocalesOf([e]);
                } catch (t) {
                    e = "en-US";
                }
                return { locale: e, direction: i(e) ? "rtl" : "ltr" };
            }
            let s = d(),
                c = new Set();
            function p() {
                s = d();
                for (let e of c) e(s);
            }
            function g() {
                let e = (0, l.Av)(),
                    [t, n] = (0, a.useState)(s);
                return (
                    (0, a.useEffect)(
                        () => (
                            0 === c.size && window.addEventListener("languagechange", p),
                            c.add(n),
                            () => {
                                c.delete(n), 0 === c.size && window.removeEventListener("languagechange", p);
                            }
                        ),
                        [],
                    ),
                    e ? { locale: "en-US", direction: "ltr" } : t
                );
            }
            const v = a.createContext(null);
            function b() {
                let e = g();
                return (0, a.useContext)(v) || e;
            }
        },
        952957: (e, t, n) => {
            n.d(t, { U: () => a });
            var r = n(202136),
                o = n(489968),
                i = n(202784);
            function a(e = {}) {
                let { locale: t } = (0, r.j)();
                return (0, i.useMemo)(() => new (0, o.e)(t, e), [t, e]);
            }
        },
        104860: (e, t, n) => {
            n.d(t, { r: () => l });
            var r = n(815536),
                o = n(202784),
                i = n(121203),
                a = n(985378);
            function l(e) {
                let { onMoveStart: t, onMove: n, onMoveEnd: l } = e,
                    u = (0, o.useRef)({ didMove: !1, lastPosition: null, id: null }),
                    { addGlobalListener: d, removeGlobalListener: s } = (0, i.x)(),
                    c = (0, a.i)((e, r, o, i) => {
                        (0 === o && 0 === i) || (u.current.didMove || ((u.current.didMove = !0), null == t || t({ type: "movestart", pointerType: r, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey })), null == n || n({ type: "move", pointerType: r, deltaX: o, deltaY: i, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    }),
                    p = (0, a.i)((e, t) => {
                        (0, r.A)(), u.current.didMove && (null == l || l({ type: "moveend", pointerType: t, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    });
                return {
                    moveProps: (0, o.useMemo)(() => {
                        let e = {},
                            t = () => {
                                (0, r.l)(), (u.current.didMove = !1);
                            };
                        if ("undefined" == typeof PointerEvent) {
                            let n = (e) => {
                                    var t, n, r, o;
                                    0 === e.button && (c(e, "mouse", e.pageX - (null !== (r = null === (t = u.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (o = null === (n = u.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== o ? o : 0)), (u.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                                },
                                r = (e) => {
                                    0 === e.button && (p(e, "mouse"), s(window, "mousemove", n, !1), s(window, "mouseup", r, !1));
                                };
                            e.onMouseDown = (e) => {
                                0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), (u.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), d(window, "mousemove", n, !1), d(window, "mouseup", r, !1));
                            };
                            let o = (e) => {
                                    let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === u.current.id);
                                    if (t >= 0) {
                                        var n, r;
                                        let { pageX: a, pageY: l } = e.changedTouches[t];
                                        var o, i;
                                        c(e, "touch", a - (null !== (o = null === (n = u.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== o ? o : 0), l - (null !== (i = null === (r = u.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== i ? i : 0)), (u.current.lastPosition = { pageX: a, pageY: l });
                                    }
                                },
                                i = (e) => {
                                    [...e.changedTouches].findIndex(({ identifier: e }) => e === u.current.id) >= 0 && (p(e, "touch"), (u.current.id = null), s(window, "touchmove", o), s(window, "touchend", i), s(window, "touchcancel", i));
                                };
                            e.onTouchStart = (e) => {
                                if (0 === e.changedTouches.length || null != u.current.id) return;
                                let { pageX: n, pageY: r, identifier: a } = e.changedTouches[0];
                                t(), e.stopPropagation(), e.preventDefault(), (u.current.lastPosition = { pageX: n, pageY: r }), (u.current.id = a), d(window, "touchmove", o, !1), d(window, "touchend", i, !1), d(window, "touchcancel", i, !1);
                            };
                        } else {
                            let n = (e) => {
                                    if (e.pointerId === u.current.id) {
                                        var t, n;
                                        let i = e.pointerType || "mouse";
                                        var r, o;
                                        c(e, i, e.pageX - (null !== (r = null === (t = u.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (o = null === (n = u.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== o ? o : 0)), (u.current.lastPosition = { pageX: e.pageX, pageY: e.pageY });
                                    }
                                },
                                r = (e) => {
                                    if (e.pointerId === u.current.id) {
                                        let t = e.pointerType || "mouse";
                                        p(e, t), (u.current.id = null), s(window, "pointermove", n, !1), s(window, "pointerup", r, !1), s(window, "pointercancel", r, !1);
                                    }
                                };
                            e.onPointerDown = (e) => {
                                0 === e.button && null == u.current.id && (t(), e.stopPropagation(), e.preventDefault(), (u.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), (u.current.id = e.pointerId), d(window, "pointermove", n, !1), d(window, "pointerup", r, !1), d(window, "pointercancel", r, !1));
                            };
                        }
                        let n = (e, n, r) => {
                            t(), c(e, "keyboard", n, r), p(e, "keyboard");
                        };
                        return (
                            (e.onKeyDown = (e) => {
                                switch (e.key) {
                                    case "Left":
                                    case "ArrowLeft":
                                        e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
                                        break;
                                    case "Right":
                                    case "ArrowRight":
                                        e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
                                        break;
                                    case "Up":
                                    case "ArrowUp":
                                        e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
                                        break;
                                    case "Down":
                                    case "ArrowDown":
                                        e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
                                }
                            }),
                            e
                        );
                    }, [u, d, s, c, p]),
                };
            }
        },
        764074: (e, t, n) => {
            n.d(t, { N: () => i });
            var r = n(238013),
                o = n(32196);
            function i(e) {
                let { id: t, label: n, "aria-labelledby": i, "aria-label": a, labelElementType: l = "label" } = e;
                t = (0, r.Me)(t);
                let u = (0, r.Me)(),
                    d = {};
                return n && ((i = i ? `${u} ${i}` : u), (d = { id: u, htmlFor: "label" === l ? t : void 0 })), { labelProps: d, fieldProps: (0, o.b)({ id: t, "aria-label": a, "aria-labelledby": i }) };
            }
        },
        138997: (e, t, n) => {
            n.d(t, { o: () => p });
            var r = n(526997),
                o = n(121203),
                i = n(812238),
                a = n(277108),
                l = n(202784),
                u = n(104860),
                d = n(253246),
                s = n(764074),
                c = n(202136);
            function p(e, t, n) {
                let { labelProps: p, fieldProps: g } = (0, s.N)(e),
                    v = "vertical" === e.orientation;
                var b;
                r.Z.set(t, { id: null !== (b = p.id) && void 0 !== b ? b : g.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
                let { direction: h } = (0, c.j)(),
                    { addGlobalListener: m, removeGlobalListener: f } = (0, o.x)();
                const w = (0, l.useRef)(null),
                    y = "rtl" === h,
                    T = (0, l.useRef)(null),
                    { moveProps: P } = (0, u.r)({
                        onMoveStart() {
                            T.current = null;
                        },
                        onMove({ deltaX: e, deltaY: r }) {
                            let { height: o, width: a } = n.current.getBoundingClientRect(),
                                l = v ? o : a;
                            null == T.current && (T.current = t.getThumbPercent(w.current) * l);
                            let u = v ? r : e;
                            if (((v || y) && (u = -u), (T.current += u), null != w.current && n.current)) {
                                const e = (0, i.uZ)(T.current / l, 0, 1);
                                t.setThumbPercent(w.current, e);
                            }
                        },
                        onMoveEnd() {
                            null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null));
                        },
                    });
                let K = (0, l.useRef)(void 0),
                    D = (r, o, i, a) => {
                        if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                            let { height: e, width: l, top: u, left: d } = n.current.getBoundingClientRect();
                            let s = ((v ? a : i) - (v ? u : d)) / (v ? e : l);
                            ("rtl" === h || v) && (s = 1 - s);
                            let c,
                                p = t.getPercentValue(s),
                                g = t.values.findIndex((e) => p - e < 0);
                            if (0 === g) c = g;
                            else if (-1 === g) c = t.values.length - 1;
                            else {
                                let e = t.values[g - 1],
                                    n = t.values[g];
                                c = Math.abs(e - p) < Math.abs(n - p) ? g - 1 : g;
                            }
                            c >= 0 && t.isThumbEditable(c) ? (r.preventDefault(), (w.current = c), t.setFocusedThumb(c), (K.current = o), t.setThumbDragging(w.current, !0), t.setThumbValue(c, p), m(window, "mouseup", M, !1), m(window, "touchend", M, !1), m(window, "pointerup", M, !1)) : (w.current = null);
                        }
                    },
                    M = (e) => {
                        var n, r;
                        (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === K.current && (null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null)), f(window, "mouseup", M, !1), f(window, "touchend", M, !1), f(window, "pointerup", M, !1));
                    };
                return (
                    "htmlFor" in p &&
                        p.htmlFor &&
                        (delete p.htmlFor,
                        (p.onClick = () => {
                            var e;
                            null === (e = document.getElementById((0, r.g)(t, 0))) || void 0 === e || e.focus(), (0, d._w)("keyboard");
                        })),
                    {
                        labelProps: p,
                        groupProps: { role: "group", ...g },
                        trackProps: (0, a.d)(
                            {
                                onMouseDown(e) {
                                    0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || D(e, void 0, e.clientX, e.clientY);
                                },
                                onPointerDown(e) {
                                    ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) || D(e, e.pointerId, e.clientX, e.clientY);
                                },
                                onTouchStart(e) {
                                    D(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                                },
                                style: { position: "relative", touchAction: "none" },
                            },
                            P,
                        ),
                        outputProps: { htmlFor: t.values.map((e, n) => (0, r.g)(t, n)).join(" "), "aria-live": "off" },
                    }
                );
            }
        },
        235814: (e, t, n) => {
            n.d(t, { p: () => h });
            var r = n(526997),
                o = n(121203),
                i = n(454338),
                a = n(812238),
                l = n(277108),
                u = n(985378),
                d = n(202784);
            function s(e, t, n) {
                let r = (0, d.useRef)(t),
                    o = (0, u.i)(() => {
                        n && n(r.current);
                    });
                (0, d.useEffect)(() => {
                    var t;
                    let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
                    return (
                        null == n || n.addEventListener("reset", o),
                        () => {
                            null == n || n.removeEventListener("reset", o);
                        }
                    );
                }, [e, o]);
            }
            var c = n(373363),
                p = n(527355),
                g = n(104860),
                v = n(764074),
                b = n(202136);
            function h(e, t) {
                let { index: n = 0, isRequired: u, validationState: h, isInvalid: m, trackRef: f, inputRef: w, orientation: y = t.orientation, name: T } = e,
                    P = e.isDisabled || t.isDisabled,
                    K = "vertical" === y,
                    { direction: D } = (0, b.j)(),
                    { addGlobalListener: M, removeGlobalListener: k } = (0, o.x)(),
                    X = r.Z.get(t);
                var Y;
                const { labelProps: S, fieldProps: x } = (0, v.N)({ ...e, id: (0, r.g)(t, n), "aria-labelledby": `${X.id} ${null !== (Y = e["aria-labelledby"]) && void 0 !== Y ? Y : ""}`.trim() }),
                    E = t.values[n],
                    I = (0, d.useCallback)(() => {
                        w.current && (0, i.A)(w.current);
                    }, [w]),
                    L = t.focusedThumb === n;
                (0, d.useEffect)(() => {
                    L && I();
                }, [L, I]);
                let R = "rtl" === D,
                    F = (0, d.useRef)(null),
                    { keyboardProps: A } = (0, p.v)({
                        onKeyDown(e) {
                            let { getThumbMaxValue: r, getThumbMinValue: o, decrementThumb: i, incrementThumb: a, setThumbValue: l, setThumbDragging: u, pageSize: d } = t;
                            if (/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                                switch ((e.preventDefault(), u(n, !0), e.key)) {
                                    case "PageUp":
                                        a(n, d);
                                        break;
                                    case "PageDown":
                                        i(n, d);
                                        break;
                                    case "Home":
                                        l(n, o(n));
                                        break;
                                    case "End":
                                        l(n, r(n));
                                }
                                u(n, !1);
                            } else e.continuePropagation();
                        },
                    }),
                    { moveProps: C } = (0, g.r)({
                        onMoveStart() {
                            (F.current = null), t.setThumbDragging(n, !0);
                        },
                        onMove({ deltaX: e, deltaY: r, pointerType: o, shiftKey: i }) {
                            const { getThumbPercent: l, setThumbPercent: u, decrementThumb: d, incrementThumb: s, step: c, pageSize: p } = t;
                            let { width: g, height: v } = f.current.getBoundingClientRect(),
                                b = K ? v : g;
                            if ((null == F.current && (F.current = l(n) * b), "keyboard" === o)) (e > 0 && R) || (e < 0 && !R) || r > 0 ? d(n, i ? p : c) : s(n, i ? p : c);
                            else {
                                let t = K ? r : e;
                                (K || R) && (t = -t), (F.current += t), u(n, (0, a.uZ)(F.current / b, 0, 1));
                            }
                        },
                        onMoveEnd() {
                            t.setThumbDragging(n, !1);
                        },
                    });
                t.setThumbEditable(n, !P);
                const { focusableProps: V } = (0, c.k)((0, l.d)(e, { onFocus: () => t.setFocusedThumb(n), onBlur: () => t.setFocusedThumb(void 0) }), w);
                let j = (0, d.useRef)(void 0),
                    U = (e) => {
                        I(), (j.current = e), t.setThumbDragging(n, !0), M(window, "mouseup", B, !1), M(window, "touchend", B, !1), M(window, "pointerup", B, !1);
                    },
                    B = (e) => {
                        var r, o;
                        (null !== (o = e.pointerId) && void 0 !== o ? o : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === j.current && (I(), t.setThumbDragging(n, !1), k(window, "mouseup", B, !1), k(window, "touchend", B, !1), k(window, "pointerup", B, !1));
                    },
                    $ = t.getThumbPercent(n);
                (K || "rtl" === D) && ($ = 1 - $);
                let _ = P
                    ? {}
                    : (0, l.d)(A, C, {
                          onMouseDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U();
                          },
                          onPointerDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U(e.pointerId);
                          },
                          onTouchStart: (e) => {
                              U(e.changedTouches[0].identifier);
                          },
                      });
                return (
                    s(w, E, (e) => {
                        t.setThumbValue(n, e);
                    }),
                    {
                        inputProps: (0, l.d)(V, x, {
                            type: "range",
                            tabIndex: P ? void 0 : 0,
                            min: t.getThumbMinValue(n),
                            max: t.getThumbMaxValue(n),
                            step: t.step,
                            value: E,
                            name: T,
                            disabled: P,
                            "aria-orientation": y,
                            "aria-valuetext": t.getThumbValueLabel(n),
                            "aria-required": u || void 0,
                            "aria-invalid": m || "invalid" === h || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-describedby": [X["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                            "aria-details": [X["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                            onChange: (e) => {
                                t.setThumbValue(n, parseFloat(e.target.value));
                            },
                        }),
                        thumbProps: { ..._, style: { position: "absolute", [K ? "top" : "left"]: 100 * $ + "%", transform: "translate(-50%, -50%)", touchAction: "none" } },
                        labelProps: S,
                        isDragging: t.isThumbDragging(n),
                        isDisabled: P,
                        isFocused: L,
                    }
                );
            }
        },
        526997: (e, t, n) => {
            n.d(t, { Z: () => r, g: () => o });
            const r = new WeakMap();
            function o(e, t) {
                let n = r.get(e);
                if (!n) throw new Error("Unknown slider state");
                return `${n.id}-${t}`;
            }
        },
        32196: (e, t, n) => {
            n.d(t, { b: () => o });
            var r = n(238013);
            function o(e, t) {
                let { id: n, "aria-label": o, "aria-labelledby": i } = e;
                if (((n = (0, r.Me)(n)), i && o)) {
                    let e = new Set([n, ...i.trim().split(/\s+/)]);
                    i = [...e].join(" ");
                } else i && (i = i.trim().split(/\s+/).join(" "));
                return o || i || !t || (o = t), { id: n, "aria-label": o, "aria-labelledby": i };
            }
        },
        536574: (e, t, n) => {
            n.d(t, { T: () => l });
            var r = n(277108),
                o = n(202784),
                i = n(525757);
            const a = { border: 0, clip: "rect(0 0 0 0)", clipPath: "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap" };
            function l(e) {
                let { children: t, elementType: n = "div", isFocusable: l, style: u, ...d } = e,
                    { visuallyHiddenProps: s } = (function (e = {}) {
                        let { style: t, isFocusable: n } = e,
                            [r, l] = (0, o.useState)(!1),
                            { focusWithinProps: u } = (0, i.L)({ isDisabled: !n, onFocusWithinChange: (e) => l(e) });
                        return { visuallyHiddenProps: { ...u, style: (0, o.useMemo)(() => (r ? t : t ? { ...a, ...t } : a), [r]) } };
                    })(e);
                return o.createElement(n, (0, r.d)(d, s), t);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-2eb835b5.2b2d178a.js.map

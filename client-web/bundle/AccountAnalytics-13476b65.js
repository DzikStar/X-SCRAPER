"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-13476b65"],
    {
        138997: (e, t, n) => {
            n.d(t, { o: () => b });
            var r = n(526997),
                i = n(121203),
                o = n(812238),
                u = n(277108),
                a = n(202784),
                l = n(104860),
                s = n(253246),
                d = n(764074),
                c = n(202136);
            function b(e, t, n) {
                let { labelProps: b, fieldProps: g } = (0, d.N)(e),
                    h = "vertical" === e.orientation;
                var m;
                r.Z.set(t, { id: null !== (m = b.id) && void 0 !== m ? m : g.id, "aria-describedby": e["aria-describedby"], "aria-details": e["aria-details"] });
                let { direction: p } = (0, c.j)(),
                    { addGlobalListener: v, removeGlobalListener: f } = (0, i.x)();
                const w = (0, a.useRef)(null),
                    T = "rtl" === p,
                    y = (0, a.useRef)(null),
                    { moveProps: P } = (0, l.r)({
                        onMoveStart() {
                            y.current = null;
                        },
                        onMove({ deltaX: e, deltaY: r }) {
                            let { height: i, width: u } = n.current.getBoundingClientRect(),
                                a = h ? i : u;
                            null == y.current && (y.current = t.getThumbPercent(w.current) * a);
                            let l = h ? r : e;
                            if (((h || T) && (l = -l), (y.current += l), null != w.current && n.current)) {
                                const e = (0, o.uZ)(y.current / a, 0, 1);
                                t.setThumbPercent(w.current, e);
                            }
                        },
                        onMoveEnd() {
                            null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null));
                        },
                    });
                let D = (0, a.useRef)(void 0),
                    k = (r, i, o, u) => {
                        if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                            let { height: e, width: a, top: l, left: s } = n.current.getBoundingClientRect();
                            let d = ((h ? u : o) - (h ? l : s)) / (h ? e : a);
                            ("rtl" === p || h) && (d = 1 - d);
                            let c,
                                b = t.getPercentValue(d),
                                g = t.values.findIndex((e) => b - e < 0);
                            if (0 === g) c = g;
                            else if (-1 === g) c = t.values.length - 1;
                            else {
                                let e = t.values[g - 1],
                                    n = t.values[g];
                                c = Math.abs(e - b) < Math.abs(n - b) ? g - 1 : g;
                            }
                            c >= 0 && t.isThumbEditable(c) ? (r.preventDefault(), (w.current = c), t.setFocusedThumb(c), (D.current = i), t.setThumbDragging(w.current, !0), t.setThumbValue(c, b), v(window, "mouseup", M, !1), v(window, "touchend", M, !1), v(window, "pointerup", M, !1)) : (w.current = null);
                        }
                    },
                    M = (e) => {
                        var n, r;
                        (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === D.current && (null != w.current && (t.setThumbDragging(w.current, !1), (w.current = null)), f(window, "mouseup", M, !1), f(window, "touchend", M, !1), f(window, "pointerup", M, !1));
                    };
                return (
                    "htmlFor" in b &&
                        b.htmlFor &&
                        (delete b.htmlFor,
                        (b.onClick = () => {
                            var e;
                            null === (e = document.getElementById((0, r.g)(t, 0))) || void 0 === e || e.focus(), (0, s._w)("keyboard");
                        })),
                    {
                        labelProps: b,
                        groupProps: { role: "group", ...g },
                        trackProps: (0, u.d)(
                            {
                                onMouseDown(e) {
                                    0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || k(e, void 0, e.clientX, e.clientY);
                                },
                                onPointerDown(e) {
                                    ("mouse" === e.pointerType && (0 !== e.button || e.altKey || e.ctrlKey || e.metaKey)) || k(e, e.pointerId, e.clientX, e.clientY);
                                },
                                onTouchStart(e) {
                                    k(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
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
            n.d(t, { p: () => p });
            var r = n(526997),
                i = n(121203),
                o = n(454338),
                u = n(812238),
                a = n(277108),
                l = n(985378),
                s = n(202784);
            function d(e, t, n) {
                let r = (0, s.useRef)(t),
                    i = (0, l.i)(() => {
                        n && n(r.current);
                    });
                (0, s.useEffect)(() => {
                    var t;
                    let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
                    return (
                        null == n || n.addEventListener("reset", i),
                        () => {
                            null == n || n.removeEventListener("reset", i);
                        }
                    );
                }, [e, i]);
            }
            var c = n(373363),
                b = n(527355),
                g = n(104860),
                h = n(764074),
                m = n(202136);
            function p(e, t) {
                let { index: n = 0, isRequired: l, validationState: p, isInvalid: v, trackRef: f, inputRef: w, orientation: T = t.orientation, name: y } = e,
                    P = e.isDisabled || t.isDisabled,
                    D = "vertical" === T,
                    { direction: k } = (0, m.j)(),
                    { addGlobalListener: M, removeGlobalListener: K } = (0, i.x)(),
                    E = r.Z.get(t);
                var R;
                const { labelProps: F, fieldProps: V } = (0, h.N)({ ...e, id: (0, r.g)(t, n), "aria-labelledby": `${E.id} ${null !== (R = e["aria-labelledby"]) && void 0 !== R ? R : ""}`.trim() }),
                    x = t.values[n],
                    C = (0, s.useCallback)(() => {
                        w.current && (0, o.A)(w.current);
                    }, [w]),
                    I = t.focusedThumb === n;
                (0, s.useEffect)(() => {
                    I && C();
                }, [I, C]);
                let B = "rtl" === k,
                    L = (0, s.useRef)(null),
                    { keyboardProps: S } = (0, b.v)({
                        onKeyDown(e) {
                            let { getThumbMaxValue: r, getThumbMinValue: i, decrementThumb: o, incrementThumb: u, setThumbValue: a, setThumbDragging: l, pageSize: s } = t;
                            if (/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                                switch ((e.preventDefault(), l(n, !0), e.key)) {
                                    case "PageUp":
                                        u(n, s);
                                        break;
                                    case "PageDown":
                                        o(n, s);
                                        break;
                                    case "Home":
                                        a(n, i(n));
                                        break;
                                    case "End":
                                        a(n, r(n));
                                }
                                l(n, !1);
                            } else e.continuePropagation();
                        },
                    }),
                    { moveProps: _ } = (0, g.r)({
                        onMoveStart() {
                            (L.current = null), t.setThumbDragging(n, !0);
                        },
                        onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: o }) {
                            const { getThumbPercent: a, setThumbPercent: l, decrementThumb: s, incrementThumb: d, step: c, pageSize: b } = t;
                            let { width: g, height: h } = f.current.getBoundingClientRect(),
                                m = D ? h : g;
                            if ((null == L.current && (L.current = a(n) * m), "keyboard" === i)) (e > 0 && B) || (e < 0 && !B) || r > 0 ? s(n, o ? b : c) : d(n, o ? b : c);
                            else {
                                let t = D ? r : e;
                                (D || B) && (t = -t), (L.current += t), l(n, (0, u.uZ)(L.current / m, 0, 1));
                            }
                        },
                        onMoveEnd() {
                            t.setThumbDragging(n, !1);
                        },
                    });
                t.setThumbEditable(n, !P);
                const { focusableProps: j } = (0, c.k)((0, a.d)(e, { onFocus: () => t.setFocusedThumb(n), onBlur: () => t.setFocusedThumb(void 0) }), w);
                let A = (0, s.useRef)(void 0),
                    X = (e) => {
                        C(), (A.current = e), t.setThumbDragging(n, !0), M(window, "mouseup", Y, !1), M(window, "touchend", Y, !1), M(window, "pointerup", Y, !1);
                    },
                    Y = (e) => {
                        var r, i;
                        (null !== (i = e.pointerId) && void 0 !== i ? i : null === (r = e.changedTouches) || void 0 === r ? void 0 : r[0].identifier) === A.current && (C(), t.setThumbDragging(n, !1), K(window, "mouseup", Y, !1), K(window, "touchend", Y, !1), K(window, "pointerup", Y, !1));
                    },
                    Z = t.getThumbPercent(n);
                (D || "rtl" === k) && (Z = 1 - Z);
                let $ = P
                    ? {}
                    : (0, a.d)(S, _, {
                          onMouseDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || X();
                          },
                          onPointerDown: (e) => {
                              0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || X(e.pointerId);
                          },
                          onTouchStart: (e) => {
                              X(e.changedTouches[0].identifier);
                          },
                      });
                return (
                    d(w, x, (e) => {
                        t.setThumbValue(n, e);
                    }),
                    {
                        inputProps: (0, a.d)(j, V, {
                            type: "range",
                            tabIndex: P ? void 0 : 0,
                            min: t.getThumbMinValue(n),
                            max: t.getThumbMaxValue(n),
                            step: t.step,
                            value: x,
                            name: y,
                            disabled: P,
                            "aria-orientation": T,
                            "aria-valuetext": t.getThumbValueLabel(n),
                            "aria-required": l || void 0,
                            "aria-invalid": v || "invalid" === p || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-describedby": [E["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                            "aria-details": [E["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                            onChange: (e) => {
                                t.setThumbValue(n, parseFloat(e.target.value));
                            },
                        }),
                        thumbProps: { ...$, style: { position: "absolute", [D ? "top" : "left"]: 100 * Z + "%", transform: "translate(-50%, -50%)", touchAction: "none" } },
                        labelProps: F,
                        isDragging: t.isThumbDragging(n),
                        isDisabled: P,
                        isFocused: I,
                    }
                );
            }
        },
        526997: (e, t, n) => {
            n.d(t, { Z: () => r, g: () => i });
            const r = new WeakMap();
            function i(e, t) {
                let n = r.get(e);
                if (!n) throw new Error("Unknown slider state");
                return `${n.id}-${t}`;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-13476b65.40d391aa.js.map

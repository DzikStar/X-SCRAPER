"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-2457460b"],
    {
        104860: (e, t, o) => {
            o.d(t, { r: () => l });
            var n = o(815536),
                a = o(202784),
                i = o(121203),
                r = o(985378);
            function l(e) {
                let { onMoveStart: t, onMove: o, onMoveEnd: l } = e,
                    d = (0, a.useRef)({ didMove: !1, lastPosition: null, id: null }),
                    { addGlobalListener: s, removeGlobalListener: u } = (0, i.x)(),
                    c = (0, r.i)((e, n, a, i) => {
                        (0 === a && 0 === i) || (d.current.didMove || ((d.current.didMove = !0), null == t || t({ type: "movestart", pointerType: n, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey })), null == o || o({ type: "move", pointerType: n, deltaX: a, deltaY: i, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    }),
                    p = (0, r.i)((e, t) => {
                        (0, n.A)(), d.current.didMove && (null == l || l({ type: "moveend", pointerType: t, shiftKey: e.shiftKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey, altKey: e.altKey }));
                    });
                return {
                    moveProps: (0, a.useMemo)(() => {
                        let e = {},
                            t = () => {
                                (0, n.l)(), (d.current.didMove = !1);
                            };
                        if ("undefined" == typeof PointerEvent) {
                            let o = (e) => {
                                    var t, o, n, a;
                                    0 === e.button && (c(e, "mouse", e.pageX - (null !== (n = null === (t = d.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== n ? n : 0), e.pageY - (null !== (a = null === (o = d.current.lastPosition) || void 0 === o ? void 0 : o.pageY) && void 0 !== a ? a : 0)), (d.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }));
                                },
                                n = (e) => {
                                    0 === e.button && (p(e, "mouse"), u(window, "mousemove", o, !1), u(window, "mouseup", n, !1));
                                };
                            e.onMouseDown = (e) => {
                                0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), (d.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), s(window, "mousemove", o, !1), s(window, "mouseup", n, !1));
                            };
                            let a = (e) => {
                                    let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === d.current.id);
                                    if (t >= 0) {
                                        var o, n;
                                        let { pageX: r, pageY: l } = e.changedTouches[t];
                                        var a, i;
                                        c(e, "touch", r - (null !== (a = null === (o = d.current.lastPosition) || void 0 === o ? void 0 : o.pageX) && void 0 !== a ? a : 0), l - (null !== (i = null === (n = d.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), (d.current.lastPosition = { pageX: r, pageY: l });
                                    }
                                },
                                i = (e) => {
                                    [...e.changedTouches].findIndex(({ identifier: e }) => e === d.current.id) >= 0 && (p(e, "touch"), (d.current.id = null), u(window, "touchmove", a), u(window, "touchend", i), u(window, "touchcancel", i));
                                };
                            e.onTouchStart = (e) => {
                                if (0 === e.changedTouches.length || null != d.current.id) return;
                                let { pageX: o, pageY: n, identifier: r } = e.changedTouches[0];
                                t(), e.stopPropagation(), e.preventDefault(), (d.current.lastPosition = { pageX: o, pageY: n }), (d.current.id = r), s(window, "touchmove", a, !1), s(window, "touchend", i, !1), s(window, "touchcancel", i, !1);
                            };
                        } else {
                            let o = (e) => {
                                    if (e.pointerId === d.current.id) {
                                        var t, o;
                                        let i = e.pointerType || "mouse";
                                        var n, a;
                                        c(e, i, e.pageX - (null !== (n = null === (t = d.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== n ? n : 0), e.pageY - (null !== (a = null === (o = d.current.lastPosition) || void 0 === o ? void 0 : o.pageY) && void 0 !== a ? a : 0)), (d.current.lastPosition = { pageX: e.pageX, pageY: e.pageY });
                                    }
                                },
                                n = (e) => {
                                    if (e.pointerId === d.current.id) {
                                        let t = e.pointerType || "mouse";
                                        p(e, t), (d.current.id = null), u(window, "pointermove", o, !1), u(window, "pointerup", n, !1), u(window, "pointercancel", n, !1);
                                    }
                                };
                            e.onPointerDown = (e) => {
                                0 === e.button && null == d.current.id && (t(), e.stopPropagation(), e.preventDefault(), (d.current.lastPosition = { pageX: e.pageX, pageY: e.pageY }), (d.current.id = e.pointerId), s(window, "pointermove", o, !1), s(window, "pointerup", n, !1), s(window, "pointercancel", n, !1));
                            };
                        }
                        let o = (e, o, n) => {
                            t(), c(e, "keyboard", o, n), p(e, "keyboard");
                        };
                        return (
                            (e.onKeyDown = (e) => {
                                switch (e.key) {
                                    case "Left":
                                    case "ArrowLeft":
                                        e.preventDefault(), e.stopPropagation(), o(e, -1, 0);
                                        break;
                                    case "Right":
                                    case "ArrowRight":
                                        e.preventDefault(), e.stopPropagation(), o(e, 1, 0);
                                        break;
                                    case "Up":
                                    case "ArrowUp":
                                        e.preventDefault(), e.stopPropagation(), o(e, 0, -1);
                                        break;
                                    case "Down":
                                    case "ArrowDown":
                                        e.preventDefault(), e.stopPropagation(), o(e, 0, 1);
                                }
                            }),
                            e
                        );
                    }, [d, s, u, c, p]),
                };
            }
        },
        764074: (e, t, o) => {
            o.d(t, { N: () => i });
            var n = o(238013),
                a = o(32196);
            function i(e) {
                let { id: t, label: o, "aria-labelledby": i, "aria-label": r, labelElementType: l = "label" } = e;
                t = (0, n.Me)(t);
                let d = (0, n.Me)(),
                    s = {};
                return o && ((i = i ? `${d} ${i}` : d), (s = { id: d, htmlFor: "label" === l ? t : void 0 })), { labelProps: s, fieldProps: (0, a.b)({ id: t, "aria-label": r, "aria-labelledby": i }) };
            }
        },
        53968: (e, t, o) => {
            o.d(t, { iR: () => K, wQ: () => m, gs: () => x, Uj: () => D });
            var n = o(203230),
                a = o(202784);
            const i = (0, a.createContext)({});
            var r = o(202136),
                l = o(489968);
            function d(e = {}) {
                let { locale: t } = (0, r.j)();
                return (0, a.useMemo)(() => new (0, l.e)(t, e), [t, e]);
            }
            var s = o(138997),
                u = o(80958),
                c = o(277108),
                p = o(235814),
                v = o(56624),
                f = o(536574),
                g = o(23296),
                w = o(958682);
            const b = (0, a.createContext)(null),
                m = (0, a.createContext)(null),
                y = (0, a.createContext)(null),
                h = (0, a.createContext)(null);
            function P(e, t) {
                [e, t] = (0, n.pE)(e, t, b);
                let o = (0, a.useRef)(null),
                    r = d(e.formatOptions),
                    l = (0, w.x)({ ...e, numberFormatter: r }),
                    [u, c] = (0, n.xc)(),
                    { groupProps: p, trackProps: v, labelProps: f, outputProps: P } = (0, s.o)({ ...e, label: c }, l, o),
                    K = (0, n.aX)({ ...e, values: { orientation: l.orientation, isDisabled: l.isDisabled, state: l }, defaultClassName: "react-aria-Slider" }),
                    X = (0, g.z)(e);
                return (
                    delete X.id,
                    a.createElement(
                        n.zt,
                        {
                            values: [
                                [m, l],
                                [y, { ...v, ref: o }],
                                [h, P],
                                [i, { ...f, ref: u }],
                            ],
                        },
                        a.createElement("div", { ...X, ...p, ...K, ref: t, slot: e.slot || void 0, "data-orientation": l.orientation, "data-disabled": l.isDisabled || void 0 }),
                    )
                );
            }
            const K = (0, a.forwardRef)(P);
            function X(e, t) {
                [e, t] = (0, n.pE)(e, t, y);
                let o = (0, a.useContext)(m),
                    { onHoverStart: i, onHoverEnd: r, onHoverChange: l, ...d } = e,
                    { hoverProps: s, isHovered: p } = (0, u.X)({ onHoverStart: i, onHoverEnd: r, onHoverChange: l }),
                    v = (0, n.aX)({ ...e, defaultClassName: "react-aria-SliderTrack", values: { orientation: o.orientation, isDisabled: o.isDisabled, isHovered: p, state: o } });
                return a.createElement("div", { ...(0, c.d)(d, s), ...v, ref: t, "data-hovered": p || void 0, "data-orientation": o.orientation || void 0, "data-disabled": o.isDisabled || void 0 });
            }
            const D = (0, a.forwardRef)(X);
            function Y(e, t) {
                let { inputRef: o = null } = e,
                    r = (0, a.useContext)(m),
                    { ref: l } = (0, n.jn)(y),
                    { index: d = 0 } = e,
                    s = (0, a.useRef)(null),
                    w = o || s,
                    [b, h] = (0, n.xc)(),
                    { thumbProps: P, inputProps: K, labelProps: X, isDragging: D, isFocused: Y, isDisabled: x } = (0, p.p)({ ...e, index: d, trackRef: l, inputRef: w, label: h }, r),
                    { focusProps: T, isFocusVisible: C } = (0, v.F)(),
                    { hoverProps: E, isHovered: k } = (0, u.X)(e),
                    M = (0, n.aX)({ ...e, defaultClassName: "react-aria-SliderThumb", values: { state: r, isHovered: k, isDragging: D, isFocused: Y, isFocusVisible: C, isDisabled: x } }),
                    R = (0, g.z)(e);
                return delete R.id, a.createElement("div", { ...(0, c.d)(R, P, E), ...M, ref: t, style: { ...P.style, ...M.style }, "data-hovered": k || void 0, "data-dragging": D || void 0, "data-focused": Y || void 0, "data-focus-visible": C || void 0, "data-disabled": x || void 0 }, a.createElement(f.T, null, a.createElement("input", { ref: w, ...(0, c.d)(K, T) })), a.createElement(n.zt, { values: [[i, { ...X, ref: b }]] }, M.children));
            }
            const x = (0, a.forwardRef)(Y);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-2457460b.58c91d4a.js.map

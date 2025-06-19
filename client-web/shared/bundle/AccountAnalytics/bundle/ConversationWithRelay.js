"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.ConversationWithRelay"],
    {
        247291: (e, t, r) => {
            r.d(t, { Z: () => V });
            r(136728);
            var a = r(202784),
                l = r(325686),
                o = r(111677),
                n = r.n(o),
                s = r(27137),
                c = r(731708),
                i = r(352924),
                u = r(157130),
                m = r(392237);
            const p = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                d = m.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                f = ({ color: e = "blue500", label: t, size: r = "large", value: o }) => {
                    const n = o ? r : "xSmall",
                        s = p[n],
                        i = ((e) => {
                            switch (e) {
                                case "large":
                                    return "title2";
                                case "medium":
                                    return "title4";
                                case "small":
                                    return "body";
                                default:
                                    return null;
                            }
                        })(n),
                        u = `0 0 6 ${s}`;
                    return a.createElement(l.Z, { style: d.row }, a.createElement(l.Z, { style: [d.svg, { height: s }, !i && { marginTop: m.default.theme.spaces.space2 }] }, a.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, a.createElement("rect", { fill: m.default.theme.colors[e], height: s, rx: 3, width: 6 }))), a.createElement(l.Z, { style: d.column }, a.createElement(c.ZP, { color: "gray700", size: "subtext2", style: d.title, weight: "medium" }, t), i && a.createElement(c.ZP, { size: i, weight: "bold" }, o)));
                };
            var g = r(635998),
                h = r(689107),
                b = r(154003);
            const v = n().iab73d4b,
                y = n().ha20397c,
                E = n().baf7a43c,
                w = n().h30a19bb,
                x = n().af8fa2ae;
            const C = (e) => {
                    const { chartTitle: t, maxValue: r, minValue: o, noOfCategories: n } = e,
                        s = w({ chartTitle: t, minValue: o, maxValue: r, noOfCategories: v(n) });
                    return a.createElement(l.Z, null, a.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(l.Z, { "aria-label": s, role: "dialog", style: Z.popover }, a.createElement(l.Z, { style: Z.popoverTitle }, a.createElement(c.ZP, { size: "title3", weight: "heavy" }, E)), a.createElement(l.Z, { style: Z.popoverText }, a.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, s)), a.createElement(b.ZP, { onPress: e, type: "primaryOutlined" }, x)), withArrow: !0 }, a.createElement(l.Z, { role: "button" }, a.createElement(h.default, { "aria-label": y, style: Z.a11yIcon }))));
                },
                Z = m.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                B = (e, t, r = !1) => {
                    const a = 0 === t ? 0 : t * e - (r ? 1e-4 : 0);
                    return `${a} ${e - a}`;
                },
                S = (e, t) => "-" + t * e,
                k = n().c778d80b,
                M = n().idea1817,
                P = n().fe94be6b,
                D = n().ef8b2f54,
                I = "blue500",
                T = ({ arcWidth: e, chartId: t, data: r, radius: o }) => {
                    const n = a.useRef(Array.from({ length: r.length }, () => null)),
                        s = 2 * o,
                        c = e <= 0 ? 1 : Math.min(1, e) * (s / 2),
                        i = (s - c) / 2,
                        p = s / 2,
                        d = ((e) => 2 * Math.PI * e)(i),
                        {
                            focusSliceFromKeyboard: f,
                            focusedSlice: g,
                            forceHidePopover: h,
                            isPopoverDisabled: b,
                            isSliceHighlighted: v,
                            onPopoverClose: y,
                            onPopoverOpen: E,
                            onSliceBlur: w,
                            onSliceMouseOver: x,
                        } = ((e) => {
                            const [t, r] = a.useState(null),
                                [l, o] = a.useState(!1),
                                [n, s] = a.useState(!1),
                                [c, i] = a.useState(!1),
                                u = a.useRef(void 0),
                                m = a.useCallback((e) => {
                                    r(e), s(!0);
                                }, []),
                                p = a.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        o(!0),
                                        s(!1),
                                        (u.current = window.setTimeout(() => {
                                            o(!1);
                                        }, 10));
                                }, []),
                                d = a.useCallback(() => {
                                    c || s(!1);
                                }, [c]),
                                f = a.useCallback(
                                    (t) => {
                                        e[t].popover ? r(t) : o(!0);
                                    },
                                    [e],
                                ),
                                g = a.useCallback(() => {
                                    s(!0), i(!0);
                                }, []),
                                h = a.useCallback(() => {
                                    i(!1);
                                }, []);
                            return (
                                a.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                a.useMemo(() => ({ focusSliceFromKeyboard: m, forceHidePopover: p, onSliceBlur: d, onSliceMouseOver: f, onPopoverOpen: g, onPopoverClose: h, focusedSlice: t, isPopoverDisabled: l, isSliceHighlighted: n }), [m, t, p, l, n, h, g, d, f])
                            );
                        })(r),
                        C = a.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: Z, circles: T } = a.useMemo(() => {
                            let e = 0;
                            const t = [],
                                o = [];
                            return (
                                r.forEach(({ color: s, label: u, popover: b, value: y }, E) => {
                                    const C = u ? M({ value: k(y), label: u }) : P({ value: k(y) }),
                                        Z = v && g !== E ? 0.5 : 1,
                                        D = b ? "pointer" : "default";
                                    var T;
                                    o.push(a.createElement("circle", { cx: p, cy: p, fill: "none", key: u ?? E, onBlur: h, onFocus: () => x(E), onMouseLeave: h, onMouseOver: () => x(E), r: i, stroke: m.default.theme.colors[s ?? I], strokeDasharray: B(d, y, E === r.length - 1), strokeDashoffset: S(d, e), strokeWidth: c, style: { opacity: Z, cursor: D } })),
                                        t.push(
                                            a.createElement(l.Z, {
                                                "aria-label": C,
                                                focusable: 0 === E,
                                                key: u ?? E,
                                                onBlur: w,
                                                onFocus: () => f(E),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, r, a, l) {
                                                        if ("ArrowRight" === t) {
                                                            const e = r + 1 >= l ? 0 : r + 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = r - 1 < 0 ? l - 1 : r - 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, E, n, r.length);
                                                },
                                                ref:
                                                    ((T = E),
                                                    (e) => {
                                                        const t = n?.current;
                                                        t && (t[T] = e), (n.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += y);
                                }),
                                { a11yViews: t, circles: o }
                            );
                        }, [r, v, g, p, h, i, d, c, w, x, f]),
                        R = (null !== g && r[g].popover) || null;
                    return a.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: b, enableEnterKeyToggle: !!R, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: y, onOpen: E, preferredVerticalOrientation: "up", renderContent: () => R }, a.createElement(l.Z, { "aria-label": D, focusable: !1, id: t, role: "application" }, a.createElement("svg", { height: s, onFocus: C, onMouseOver: C, style: { transform: "rotate(-90deg)" }, width: s }, T), Z));
                },
                R = m.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                V = ({ arcWidth: e = 0.4, data: t, legendPosition: r, radius: o, title: n, titleDescription: u }) => {
                    const m = (0, i.b)(),
                        p = Boolean(o),
                        [d, h] = a.useState(o ?? 1),
                        b = a.useMemo(() => Boolean(r && t.every((e) => Boolean(e?.label))), [t, r]),
                        v = a.useCallback(
                            ({ nativeEvent: e }) => {
                                !o && h(Math.floor(e.layout.width / 2));
                            },
                            [o],
                        ),
                        [y, E, w] = t.reduce(([e, t, r], a) => [Math.min(e, a.value), Math.max(t, a.value), r + a.value], [1 / 0, -1 / 0, 0]),
                        x = k(y / w),
                        Z = k(E / w),
                        B = a.useMemo(
                            () =>
                                ((e) => {
                                    const t = e.reduce((e, t) => e + t.value, 0);
                                    let r = 0;
                                    const a = [];
                                    e.forEach((e, l) => {
                                        const o = Math.floor((1e3 * e.value) / t) / 1e3;
                                        (r += o), a.push({ ...e, value: o });
                                    });
                                    for (let e = 0; e < a.length; e++)
                                        if (0 !== a[e].value) {
                                            a[e].value += parseFloat((1 - r).toFixed(3));
                                            break;
                                        }
                                    return a;
                                })(t),
                            [t],
                        ),
                        S = a.useMemo(() => (b ? B.map(({ color: e, label: t, value: r }, l) => a.createElement(f, { color: e ?? I, key: t, label: t ?? "", size: "small", value: k(r) })) : []), [B, b]),
                        M = ((e, t, r) => {
                            switch (t) {
                                case "right":
                                    return { container: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginStart: e ? s.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                                case "top":
                                    return { container: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginBottom: s.Z.spaces.space24 }, pie: { width: "100%" } };
                                case "bottom":
                                    return { container: { flexDirection: "column-reverse", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginTop: s.Z.spaces.space24 }, pie: { width: "100%" } };
                                default:
                                    return { container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginEnd: e ? s.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                            }
                        })(b, r, p);
                    return a.createElement(l.Z, { "aria-labelledby": m, role: "figure" }, n && a.createElement(l.Z, { style: R.titleBar }, a.createElement(c.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: R.title, weight: "heavy" }, n), u ? a.createElement(g.Z, { label: n, popover: u }) : null, a.createElement(C, { chartTitle: n, maxValue: Z, minValue: x, noOfCategories: t.length })), a.createElement(l.Z, { style: M.container }, b && a.createElement(l.Z, { style: [R.legend, M.legend] }, S), a.createElement(l.Z, { onLayout: v, style: [R.pie, M.pie] }, a.createElement(T, { arcWidth: e, chartId: m, data: B, radius: d }))));
                };
        },
        98996: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                l = r(325686),
                o = r(111677),
                n = r.n(o),
                s = r(536606),
                c = r(157130),
                i = r(392237);
            const u = n().h39fbf33,
                m = n().c778d80b;
            const p = i.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                d = (e) => {
                    const { barConfig: t, data: r, style: o } = e,
                        { normalizer: n, valueLabelsFormatter: i } = (function (e, t) {
                            const r = (function (e, t) {
                                    switch (e) {
                                        case "none":
                                            return 1;
                                        case "max":
                                            return Math.max.apply(
                                                Math,
                                                t.map(function (e) {
                                                    return e.value;
                                                }),
                                            );
                                        default:
                                            return t.map((e) => e.value).reduce((e, t) => e + t);
                                    }
                                })(e?.normalizer ?? "sum", t),
                                a = e?.valueLabelsFormatter ?? m;
                            return { normalizer: r, valueLabelsFormatter: a };
                        })(t, r),
                        d = u({ minValue: i(Math.min(...r.map((e) => e.value)) / n), maxValue: i(Math.max(...r.map((e) => e.value)) / n) }),
                        f = a.useCallback((e) => () => e.popover ?? null, []),
                        g = r.map((e, r) => {
                            const { icon: o, label: u, value: m } = e;
                            if (!u) return null;
                            const d = i(m / n),
                                g = (function (e, t) {
                                    const r = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return r;
                                })(t, e),
                                h = (function (e) {
                                    return { label: e };
                                })(d),
                                b = f(e);
                            return a.createElement(c.Z, { contentStyle: p.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${r}Popover`, preferredVerticalOrientation: "up", renderContent: b, withArrow: !0 }, a.createElement(l.Z, { focusable: !0 }, a.createElement(s.Z, { decoration: o, isCompact: !0, key: `progressBar${r}`, progressBarConfig: g, statConfig: h, title: u, valueCurrent: m, valueMax: n })));
                        });
                    return a.createElement(l.Z, { "aria-label": d, focusable: !0, role: "figure", style: [p.chart, o] }, g);
                };
        },
        536606: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                l = r(325686),
                o = r(731708),
                n = r(352924),
                s = r(822399),
                c = r(98538),
                i = r(392237);
            const u = (e) => {
                const { decoration: t, isCompact: r, progressBarConfig: u, statConfig: p, title: d, valueCurrent: f, valueMax: g } = e,
                    h = (0, n.F)(),
                    b = ((v = u), i.default.theme.colors[v?.color || "blue900"]);
                var v;
                const y = (function (e) {
                        return { borderRadius: i.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(u),
                    E = (function (e) {
                        return { borderRadius: i.default.theme.borderRadii[e?.borderRadii || "medium"], height: i.default.theme.spaces[e?.height || "space8"], backgroundColor: i.default.theme.colors.gray50 };
                    })(u);
                return a.createElement(l.Z, { style: m.root }, a.createElement(l.Z, { style: m.decoration }, t), a.createElement(l.Z, { style: m.title }, a.createElement(o.ZP, { size: "subtext2", weight: "medium" }, d)), a.createElement(l.Z, { id: h, style: m.valueLabel }, p.value ? a.createElement(c.Z, null, a.createElement(c.Z.Value, null, p.value), a.createElement(c.Z.Label, null, p.label)) : a.createElement(o.ZP, { weight: "bold" }, p.label)), a.createElement(l.Z, { style: r ? m.progressBarContainerCompact : m.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, a.createElement(s.Z, { "aria-describedby": h, "aria-valuemax": g, colorValue: b, progress: f / g, progressStyle: y, style: E })));
            };
            const m = i.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                p = a.memo(u);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.ConversationWithRelay.30c5672a.js.map

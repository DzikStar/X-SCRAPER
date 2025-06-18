"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.ConversationWithRelay", "icons/IconChevronRight-js"],
    {
        247291: (e, t, r) => {
            r.d(t, { Z: () => z });
            r(136728);
            var a = r(202784),
                l = r(325686),
                o = r(111677),
                n = r.n(o),
                i = r(27137),
                s = r(731708),
                c = r(352924),
                u = r(157130),
                m = r(392237);
            const d = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                p = m.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                g = ({ color: e = "blue500", label: t, size: r = "large", value: o }) => {
                    const n = o ? r : "xSmall",
                        i = d[n],
                        c = ((e) => {
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
                        u = `0 0 6 ${i}`;
                    return a.createElement(l.Z, { style: p.row }, a.createElement(l.Z, { style: [p.svg, { height: i }, !c && { marginTop: m.default.theme.spaces.space2 }] }, a.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, a.createElement("rect", { fill: m.default.theme.colors[e], height: i, rx: 3, width: 6 }))), a.createElement(l.Z, { style: p.column }, a.createElement(s.ZP, { color: "gray700", size: "subtext2", style: p.title, weight: "medium" }, t), c && a.createElement(s.ZP, { size: c, weight: "bold" }, o)));
                };
            var f = r(635998),
                h = r(689107),
                b = r(154003);
            const v = n().iab73d4b,
                y = n().ha20397c,
                w = n().baf7a43c,
                E = n().h30a19bb,
                x = n().af8fa2ae;
            const C = (e) => {
                    const { chartTitle: t, maxValue: r, minValue: o, noOfCategories: n } = e,
                        i = E({ chartTitle: t, minValue: o, maxValue: r, noOfCategories: v(n) });
                    return a.createElement(l.Z, null, a.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(l.Z, { "aria-label": i, role: "dialog", style: Z.popover }, a.createElement(l.Z, { style: Z.popoverTitle }, a.createElement(s.ZP, { size: "title3", weight: "heavy" }, w)), a.createElement(l.Z, { style: Z.popoverText }, a.createElement(s.ZP, { color: "gray700", size: "body", weight: "normal" }, i)), a.createElement(b.ZP, { onPress: e, type: "primaryOutlined" }, x)), withArrow: !0 }, a.createElement(l.Z, { role: "button" }, a.createElement(h.default, { "aria-label": y, style: Z.a11yIcon }))));
                },
                Z = m.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                B = (e, t, r = !1) => {
                    const a = 0 === t ? 0 : t * e - (r ? 1e-4 : 0);
                    return `${a} ${e - a}`;
                },
                S = (e, t) => "-" + t * e,
                k = n().c778d80b,
                M = n().idea1817,
                D = n().fe94be6b,
                P = n().ef8b2f54,
                I = "blue500",
                R = ({ arcWidth: e, chartId: t, data: r, radius: o }) => {
                    const n = a.useRef(Array.from({ length: r.length }, () => null)),
                        i = 2 * o,
                        s = e <= 0 ? 1 : Math.min(1, e) * (i / 2),
                        c = (i - s) / 2,
                        d = i / 2,
                        p = ((e) => 2 * Math.PI * e)(c),
                        {
                            focusSliceFromKeyboard: g,
                            focusedSlice: f,
                            forceHidePopover: h,
                            isPopoverDisabled: b,
                            isSliceHighlighted: v,
                            onPopoverClose: y,
                            onPopoverOpen: w,
                            onSliceBlur: E,
                            onSliceMouseOver: x,
                        } = ((e) => {
                            const [t, r] = a.useState(null),
                                [l, o] = a.useState(!1),
                                [n, i] = a.useState(!1),
                                [s, c] = a.useState(!1),
                                u = a.useRef(void 0),
                                m = a.useCallback((e) => {
                                    r(e), i(!0);
                                }, []),
                                d = a.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        o(!0),
                                        i(!1),
                                        (u.current = window.setTimeout(() => {
                                            o(!1);
                                        }, 10));
                                }, []),
                                p = a.useCallback(() => {
                                    s || i(!1);
                                }, [s]),
                                g = a.useCallback(
                                    (t) => {
                                        e[t].popover ? r(t) : o(!0);
                                    },
                                    [e],
                                ),
                                f = a.useCallback(() => {
                                    i(!0), c(!0);
                                }, []),
                                h = a.useCallback(() => {
                                    c(!1);
                                }, []);
                            return (
                                a.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                a.useMemo(() => ({ focusSliceFromKeyboard: m, forceHidePopover: d, onSliceBlur: p, onSliceMouseOver: g, onPopoverOpen: f, onPopoverClose: h, focusedSlice: t, isPopoverDisabled: l, isSliceHighlighted: n }), [m, t, d, l, n, h, f, p, g])
                            );
                        })(r),
                        C = a.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: Z, circles: R } = a.useMemo(() => {
                            let e = 0;
                            const t = [],
                                o = [];
                            return (
                                r.forEach(({ color: i, label: u, popover: b, value: y }, w) => {
                                    const C = u ? M({ value: k(y), label: u }) : D({ value: k(y) }),
                                        Z = v && f !== w ? 0.5 : 1,
                                        P = b ? "pointer" : "default";
                                    var R;
                                    o.push(a.createElement("circle", { cx: d, cy: d, fill: "none", key: u ?? w, onBlur: h, onFocus: () => x(w), onMouseLeave: h, onMouseOver: () => x(w), r: c, stroke: m.default.theme.colors[i ?? I], strokeDasharray: B(p, y, w === r.length - 1), strokeDashoffset: S(p, e), strokeWidth: s, style: { opacity: Z, cursor: P } })),
                                        t.push(
                                            a.createElement(l.Z, {
                                                "aria-label": C,
                                                focusable: 0 === w,
                                                key: u ?? w,
                                                onBlur: E,
                                                onFocus: () => g(w),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, r, a, l) {
                                                        if ("ArrowRight" === t) {
                                                            const e = r + 1 >= l ? 0 : r + 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = r - 1 < 0 ? l - 1 : r - 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, w, n, r.length);
                                                },
                                                ref:
                                                    ((R = w),
                                                    (e) => {
                                                        const t = n?.current;
                                                        t && (t[R] = e), (n.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += y);
                                }),
                                { a11yViews: t, circles: o }
                            );
                        }, [r, v, f, d, h, c, p, s, E, x, g]),
                        T = (null !== f && r[f].popover) || null;
                    return a.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: b, enableEnterKeyToggle: !!T, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: y, onOpen: w, preferredVerticalOrientation: "up", renderContent: () => T }, a.createElement(l.Z, { "aria-label": P, focusable: !1, id: t, role: "application" }, a.createElement("svg", { height: i, onFocus: C, onMouseOver: C, style: { transform: "rotate(-90deg)" }, width: i }, R), Z));
                },
                T = m.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                z = ({ arcWidth: e = 0.4, data: t, legendPosition: r, radius: o, title: n, titleDescription: u }) => {
                    const m = (0, c.b)(),
                        d = Boolean(o),
                        [p, h] = a.useState(o ?? 1),
                        b = a.useMemo(() => Boolean(r && t.every((e) => Boolean(e?.label))), [t, r]),
                        v = a.useCallback(
                            ({ nativeEvent: e }) => {
                                !o && h(Math.floor(e.layout.width / 2));
                            },
                            [o],
                        ),
                        [y, w, E] = t.reduce(([e, t, r], a) => [Math.min(e, a.value), Math.max(t, a.value), r + a.value], [1 / 0, -1 / 0, 0]),
                        x = k(y / E),
                        Z = k(w / E),
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
                        S = a.useMemo(() => (b ? B.map(({ color: e, label: t, value: r }, l) => a.createElement(g, { color: e ?? I, key: t, label: t ?? "", size: "small", value: k(r) })) : []), [B, b]),
                        M = ((e, t, r) => {
                            switch (t) {
                                case "right":
                                    return { container: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginStart: e ? i.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                                case "top":
                                    return { container: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginBottom: i.Z.spaces.space24 }, pie: { width: "100%" } };
                                case "bottom":
                                    return { container: { flexDirection: "column-reverse", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginTop: i.Z.spaces.space24 }, pie: { width: "100%" } };
                                default:
                                    return { container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginEnd: e ? i.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                            }
                        })(b, r, d);
                    return a.createElement(l.Z, { "aria-labelledby": m, role: "figure" }, n && a.createElement(l.Z, { style: T.titleBar }, a.createElement(s.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: T.title, weight: "heavy" }, n), u ? a.createElement(f.Z, { label: n, popover: u }) : null, a.createElement(C, { chartTitle: n, maxValue: Z, minValue: x, noOfCategories: t.length })), a.createElement(l.Z, { style: M.container }, b && a.createElement(l.Z, { style: [T.legend, M.legend] }, S), a.createElement(l.Z, { onLayout: v, style: [T.pie, M.pie] }, a.createElement(R, { arcWidth: e, chartId: m, data: B, radius: p }))));
                };
        },
        98996: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                l = r(325686),
                o = r(111677),
                n = r.n(o),
                i = r(536606),
                s = r(157130),
                c = r(392237);
            const u = n().h39fbf33,
                m = n().c778d80b;
            const d = c.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                p = (e) => {
                    const { barConfig: t, data: r, style: o } = e,
                        { normalizer: n, valueLabelsFormatter: c } = (function (e, t) {
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
                        p = u({ minValue: c(Math.min(...r.map((e) => e.value)) / n), maxValue: c(Math.max(...r.map((e) => e.value)) / n) }),
                        g = a.useCallback((e) => () => e.popover ?? null, []),
                        f = r.map((e, r) => {
                            const { icon: o, label: u, value: m } = e;
                            if (!u) return null;
                            const p = c(m / n),
                                f = (function (e, t) {
                                    const r = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return r;
                                })(t, e),
                                h = (function (e) {
                                    return { label: e };
                                })(p),
                                b = g(e);
                            return a.createElement(s.Z, { contentStyle: d.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${r}Popover`, preferredVerticalOrientation: "up", renderContent: b, withArrow: !0 }, a.createElement(l.Z, { focusable: !0 }, a.createElement(i.Z, { decoration: o, isCompact: !0, key: `progressBar${r}`, progressBarConfig: f, statConfig: h, title: u, valueCurrent: m, valueMax: n })));
                        });
                    return a.createElement(l.Z, { "aria-label": p, focusable: !0, role: "figure", style: [d.chart, o] }, f);
                };
        },
        536606: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                l = r(325686),
                o = r(731708),
                n = r(352924),
                i = r(822399),
                s = r(98538),
                c = r(392237);
            const u = (e) => {
                const { decoration: t, isCompact: r, progressBarConfig: u, statConfig: d, title: p, valueCurrent: g, valueMax: f } = e,
                    h = (0, n.F)(),
                    b = ((v = u), c.default.theme.colors[v?.color || "blue900"]);
                var v;
                const y = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(u),
                    w = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(u);
                return a.createElement(l.Z, { style: m.root }, a.createElement(l.Z, { style: m.decoration }, t), a.createElement(l.Z, { style: m.title }, a.createElement(o.ZP, { size: "subtext2", weight: "medium" }, p)), a.createElement(l.Z, { id: h, style: m.valueLabel }, d.value ? a.createElement(s.Z, null, a.createElement(s.Z.Value, null, d.value), a.createElement(s.Z.Label, null, d.label)) : a.createElement(o.ZP, { weight: "bold" }, d.label)), a.createElement(l.Z, { style: r ? m.progressBarContainerCompact : m.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, a.createElement(i.Z, { "aria-describedby": h, "aria-valuemax": f, colorValue: b, progress: g / f, progressStyle: y, style: w })));
            };
            const m = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                d = a.memo(u);
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                o = r(783427),
                n = r(717683),
                i = r(347101);
            const s = (e = {}) => {
                const t = a.useContext(n.Z),
                    { direction: r } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.ConversationWithRelay.338040da.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-bc6ccf4c"],
    {
        247291: (e, t, r) => {
            r.d(t, { Z: () => $ });
            r(136728);
            var l = r(202784),
                o = r(325686),
                a = r(674132),
                n = r.n(a),
                c = r(27137),
                s = r(731708),
                i = r(352924),
                u = r(157130),
                d = r(392237);
            const m = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                p = d.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                b = ({ color: e = "blue500", label: t, size: r = "large", value: a }) => {
                    const n = a ? r : "xSmall",
                        c = m[n],
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
                        u = `0 0 6 ${c}`;
                    return l.createElement(o.Z, { style: p.row }, l.createElement(o.Z, { style: [p.svg, { height: c }, !i && { marginTop: d.default.theme.spaces.space2 }] }, l.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, l.createElement("rect", { fill: d.default.theme.colors[e], height: c, rx: 3, width: 6 }))), l.createElement(o.Z, { style: p.column }, l.createElement(s.ZP, { color: "gray700", size: "subtext2", style: p.title, weight: "medium" }, t), i && l.createElement(s.ZP, { size: i, weight: "bold" }, a)));
                };
            var f = r(635998),
                h = r(689107),
                g = r(154003);
            const y = n().iab73d4b,
                v = n().ha20397c,
                E = n().baf7a43c,
                w = n().h30a19bb,
                C = n().af8fa2ae;
            const x = (e) => {
                    const { chartTitle: t, maxValue: r, minValue: a, noOfCategories: n } = e,
                        c = w({ chartTitle: t, minValue: a, maxValue: r, noOfCategories: y(n) });
                    return l.createElement(o.Z, null, l.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => l.createElement(o.Z, { "aria-label": c, role: "dialog", style: Z.popover }, l.createElement(o.Z, { style: Z.popoverTitle }, l.createElement(s.ZP, { size: "title3", weight: "heavy" }, E)), l.createElement(o.Z, { style: Z.popoverText }, l.createElement(s.ZP, { color: "gray700", size: "body", weight: "normal" }, c)), l.createElement(g.ZP, { onPress: e, type: "primaryOutlined" }, C)), withArrow: !0 }, l.createElement(o.Z, { role: "button" }, l.createElement(h.default, { "aria-label": v, style: Z.a11yIcon }))));
                },
                Z = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                k = (e, t, r = !1) => {
                    const l = 0 === t ? 0 : t * e - (r ? 1e-4 : 0);
                    return `${l} ${e - l}`;
                },
                S = (e, t) => "-" + t * e,
                D = n().c778d80b,
                I = n().idea1817,
                B = n().fe94be6b,
                M = n().ef8b2f54,
                O = "blue500",
                P = ({ arcWidth: e, chartId: t, data: r, radius: a }) => {
                    const n = l.useRef(Array.from({ length: r.length }, () => null)),
                        c = 2 * a,
                        s = e <= 0 ? 1 : Math.min(1, e) * (c / 2),
                        i = (c - s) / 2,
                        m = c / 2,
                        p = ((e) => 2 * Math.PI * e)(i),
                        {
                            focusSliceFromKeyboard: b,
                            focusedSlice: f,
                            forceHidePopover: h,
                            isPopoverDisabled: g,
                            isSliceHighlighted: y,
                            onPopoverClose: v,
                            onPopoverOpen: E,
                            onSliceBlur: w,
                            onSliceMouseOver: C,
                        } = ((e) => {
                            const [t, r] = l.useState(null),
                                [o, a] = l.useState(!1),
                                [n, c] = l.useState(!1),
                                [s, i] = l.useState(!1),
                                u = l.useRef(void 0),
                                d = l.useCallback((e) => {
                                    r(e), c(!0);
                                }, []),
                                m = l.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        a(!0),
                                        c(!1),
                                        (u.current = window.setTimeout(() => {
                                            a(!1);
                                        }, 10));
                                }, []),
                                p = l.useCallback(() => {
                                    s || c(!1);
                                }, [s]),
                                b = l.useCallback(
                                    (t) => {
                                        e[t].popover ? r(t) : a(!0);
                                    },
                                    [e],
                                ),
                                f = l.useCallback(() => {
                                    c(!0), i(!0);
                                }, []),
                                h = l.useCallback(() => {
                                    i(!1);
                                }, []);
                            return (
                                l.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                l.useMemo(() => ({ focusSliceFromKeyboard: d, forceHidePopover: m, onSliceBlur: p, onSliceMouseOver: b, onPopoverOpen: f, onPopoverClose: h, focusedSlice: t, isPopoverDisabled: o, isSliceHighlighted: n }), [d, t, m, o, n, h, f, p, b])
                            );
                        })(r),
                        x = l.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: Z, circles: P } = l.useMemo(() => {
                            let e = 0;
                            const t = [],
                                a = [];
                            return (
                                r.forEach(({ color: c, label: u, popover: g, value: v }, E) => {
                                    const x = u ? I({ value: D(v), label: u }) : B({ value: D(v) }),
                                        Z = y && f !== E ? 0.5 : 1,
                                        M = g ? "pointer" : "default";
                                    var P;
                                    a.push(l.createElement("circle", { cx: m, cy: m, fill: "none", key: u ?? E, onBlur: h, onFocus: () => C(E), onMouseLeave: h, onMouseOver: () => C(E), r: i, stroke: d.default.theme.colors[c ?? O], strokeDasharray: k(p, v, E === r.length - 1), strokeDashoffset: S(p, e), strokeWidth: s, style: { opacity: Z, cursor: M } })),
                                        t.push(
                                            l.createElement(o.Z, {
                                                "aria-label": x,
                                                focusable: 0 === E,
                                                key: u ?? E,
                                                onBlur: w,
                                                onFocus: () => b(E),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, r, l, o) {
                                                        if ("ArrowRight" === t) {
                                                            const e = r + 1 >= o ? 0 : r + 1;
                                                            l?.current?.[r]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = r - 1 < 0 ? o - 1 : r - 1;
                                                            l?.current?.[r]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, E, n, r.length);
                                                },
                                                ref:
                                                    ((P = E),
                                                    (e) => {
                                                        const t = n?.current;
                                                        t && (t[P] = e), (n.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += v);
                                }),
                                { a11yViews: t, circles: a }
                            );
                        }, [r, y, f, m, h, i, p, s, w, C, b]),
                        V = (null !== f && r[f].popover) || null;
                    return l.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: g, enableEnterKeyToggle: !!V, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: v, onOpen: E, preferredVerticalOrientation: "up", renderContent: () => V }, l.createElement(o.Z, { "aria-label": M, focusable: !1, id: t, role: "application" }, l.createElement("svg", { height: c, onFocus: x, onMouseOver: x, style: { transform: "rotate(-90deg)" }, width: c }, P), Z));
                },
                V = d.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                $ = ({ arcWidth: e = 0.4, data: t, legendPosition: r, radius: a, title: n, titleDescription: u }) => {
                    const d = (0, i.b)(),
                        m = Boolean(a),
                        [p, h] = l.useState(a ?? 1),
                        g = l.useMemo(() => Boolean(r && t.every((e) => Boolean(e?.label))), [t, r]),
                        y = l.useCallback(
                            ({ nativeEvent: e }) => {
                                !a && h(Math.floor(e.layout.width / 2));
                            },
                            [a],
                        ),
                        [v, E, w] = t.reduce(([e, t, r], l) => [Math.min(e, l.value), Math.max(t, l.value), r + l.value], [1 / 0, -1 / 0, 0]),
                        C = D(v / w),
                        Z = D(E / w),
                        k = l.useMemo(
                            () =>
                                ((e) => {
                                    const t = e.reduce((e, t) => e + t.value, 0);
                                    let r = 0;
                                    const l = [];
                                    e.forEach((e, o) => {
                                        const a = Math.floor((1e3 * e.value) / t) / 1e3;
                                        (r += a), l.push({ ...e, value: a });
                                    });
                                    for (let e = 0; e < l.length; e++)
                                        if (0 !== l[e].value) {
                                            l[e].value += parseFloat((1 - r).toFixed(3));
                                            break;
                                        }
                                    return l;
                                })(t),
                            [t],
                        ),
                        S = l.useMemo(() => (g ? k.map(({ color: e, label: t, value: r }, o) => l.createElement(b, { color: e ?? O, key: t, label: t ?? "", size: "small", value: D(r) })) : []), [k, g]),
                        I = ((e, t, r) => {
                            switch (t) {
                                case "right":
                                    return { container: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginStart: e ? c.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                                case "top":
                                    return { container: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginBottom: c.Z.spaces.space24 }, pie: { width: "100%" } };
                                case "bottom":
                                    return { container: { flexDirection: "column-reverse", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginTop: c.Z.spaces.space24 }, pie: { width: "100%" } };
                                default:
                                    return { container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginEnd: e ? c.Z.spaces.space24 : null }, pie: !r && { flexGrow: 1 } };
                            }
                        })(g, r, m);
                    return l.createElement(o.Z, { "aria-labelledby": d, role: "figure" }, n && l.createElement(o.Z, { style: V.titleBar }, l.createElement(s.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: V.title, weight: "heavy" }, n), u ? l.createElement(f.Z, { label: n, popover: u }) : null, l.createElement(x, { chartTitle: n, maxValue: Z, minValue: C, noOfCategories: t.length })), l.createElement(o.Z, { style: I.container }, g && l.createElement(o.Z, { style: [V.legend, I.legend] }, S), l.createElement(o.Z, { onLayout: y, style: [V.pie, I.pie] }, l.createElement(P, { arcWidth: e, chartId: d, data: k, radius: p }))));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var l = r(202784),
                o = r(325686),
                a = r(392237);
            function n({ spacing: e, style: t }) {
                return l.createElement(o.Z, { role: "separator", style: [c.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const c = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => d });
            var l = r(202784),
                o = r(325686),
                a = r(123588),
                n = r(212145),
                c = r(382880),
                s = r(516951),
                i = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: p, sortOptions: b } = e,
                        f = l.useRef(null),
                        h = l.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        g = l.useMemo(() => (0, c.Z)(r || s.Z), [r]);
                    l.useEffect(() => {
                        if (d.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && g();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = f || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [f, g, d.length]);
                    return l.createElement(
                        o.Z,
                        { style: m.tableContainer },
                        l.createElement(
                            "table",
                            { style: m.table },
                            l.createElement(
                                "thead",
                                null,
                                l.createElement(
                                    "tr",
                                    { style: m.row },
                                    t.map((e) =>
                                        l.createElement(
                                            "th",
                                            {
                                                key: e.field,
                                                onClick: () =>
                                                    ((e, t = !1) => {
                                                        if (!t || !p) return;
                                                        p({ sortField: e, sortOrder: e === b?.sortField ? ("ASCENDING" === b?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / h)}%`, ...m.tableHeading },
                                            },
                                            l.createElement(i.ZP, { weight: "bold" }, e.label),
                                            e.field === b?.sortField && ("ASCENDING" === b?.sortOrder ? l.createElement(a.default, null) : l.createElement(n.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            l.createElement(
                                "tbody",
                                null,
                                d.map((e, r) =>
                                    l.createElement(
                                        "tr",
                                        { key: r, onClick: () => u(e), ref: r === d.length - 5 ? f : null, style: { ...m.row, ...(u && { cursor: "pointer" }) } },
                                        t.map((t, o) => l.createElement("td", { key: `${r}-${o}`, style: m.cell }, l.createElement(i.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                m = u.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => l });
            const l = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var l = r(202784),
                o = r(890601),
                a = r(783427),
                n = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bc6ccf4c.0b45264a.js.map

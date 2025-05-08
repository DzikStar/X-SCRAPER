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
                i = r(27137),
                c = r(731708),
                s = r(352924),
                d = r(157130),
                u = r(392237);
            const m = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                p = u.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                h = ({ color: e = "blue500", label: t, size: r = "large", value: a }) => {
                    const n = a ? r : "xSmall",
                        i = m[n],
                        s = ((e) => {
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
                        d = `0 0 6 ${i}`;
                    return l.createElement(o.Z, { style: p.row }, l.createElement(o.Z, { style: [p.svg, { height: i }, !s && { marginTop: u.default.theme.spaces.space2 }] }, l.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: d, width: "100%" }, l.createElement("rect", { fill: u.default.theme.colors[e], height: i, rx: 3, width: 6 }))), l.createElement(o.Z, { style: p.column }, l.createElement(c.ZP, { color: "gray700", size: "subtext2", style: p.title, weight: "medium" }, t), s && l.createElement(c.ZP, { size: s, weight: "bold" }, a)));
                };
            var g = r(635998),
                b = r(689107),
                f = r(154003);
            const v = n().iab73d4b,
                y = n().ha20397c,
                w = n().baf7a43c,
                E = n().h30a19bb,
                C = n().af8fa2ae;
            const Z = (e) => {
                    const { chartTitle: t, maxValue: r, minValue: a, noOfCategories: n } = e,
                        i = E({ chartTitle: t, minValue: a, maxValue: r, noOfCategories: v(n) });
                    return l.createElement(o.Z, null, l.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => l.createElement(o.Z, { "aria-label": i, role: "dialog", style: x.popover }, l.createElement(o.Z, { style: x.popoverTitle }, l.createElement(c.ZP, { size: "title3", weight: "heavy" }, w)), l.createElement(o.Z, { style: x.popoverText }, l.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, i)), l.createElement(f.ZP, { onPress: e, type: "primaryOutlined" }, C)), withArrow: !0 }, l.createElement(o.Z, { role: "button" }, l.createElement(b.default, { "aria-label": y, style: x.a11yIcon }))));
                },
                x = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                S = (e, t, r = !1) => {
                    const l = 0 === t ? 0 : t * e - (r ? 1e-4 : 0);
                    return `${l} ${e - l}`;
                },
                k = (e, t) => "-" + t * e,
                D = n().c778d80b,
                I = n().idea1817,
                M = n().fe94be6b,
                B = n().ef8b2f54,
                O = "blue500",
                P = ({ arcWidth: e, chartId: t, data: r, radius: a }) => {
                    const n = l.useRef(Array.from({ length: r.length }, () => null)),
                        i = 2 * a,
                        c = e <= 0 ? 1 : Math.min(1, e) * (i / 2),
                        s = (i - c) / 2,
                        m = i / 2,
                        p = ((e) => 2 * Math.PI * e)(s),
                        {
                            focusSliceFromKeyboard: h,
                            focusedSlice: g,
                            forceHidePopover: b,
                            isPopoverDisabled: f,
                            isSliceHighlighted: v,
                            onPopoverClose: y,
                            onPopoverOpen: w,
                            onSliceBlur: E,
                            onSliceMouseOver: C,
                        } = ((e) => {
                            const [t, r] = l.useState(null),
                                [o, a] = l.useState(!1),
                                [n, i] = l.useState(!1),
                                [c, s] = l.useState(!1),
                                d = l.useRef(void 0),
                                u = l.useCallback((e) => {
                                    r(e), i(!0);
                                }, []),
                                m = l.useCallback(() => {
                                    window.clearTimeout(d.current),
                                        a(!0),
                                        i(!1),
                                        (d.current = window.setTimeout(() => {
                                            a(!1);
                                        }, 10));
                                }, []),
                                p = l.useCallback(() => {
                                    c || i(!1);
                                }, [c]),
                                h = l.useCallback(
                                    (t) => {
                                        e[t].popover ? r(t) : a(!0);
                                    },
                                    [e],
                                ),
                                g = l.useCallback(() => {
                                    i(!0), s(!0);
                                }, []),
                                b = l.useCallback(() => {
                                    s(!1);
                                }, []);
                            return (
                                l.useEffect(
                                    () => () => {
                                        window.clearTimeout(d.current);
                                    },
                                    [],
                                ),
                                l.useMemo(() => ({ focusSliceFromKeyboard: u, forceHidePopover: m, onSliceBlur: p, onSliceMouseOver: h, onPopoverOpen: g, onPopoverClose: b, focusedSlice: t, isPopoverDisabled: o, isSliceHighlighted: n }), [u, t, m, o, n, b, g, p, h])
                            );
                        })(r),
                        Z = l.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: x, circles: P } = l.useMemo(() => {
                            let e = 0;
                            const t = [],
                                a = [];
                            return (
                                r.forEach(({ color: i, label: d, popover: f, value: y }, w) => {
                                    const Z = d ? I({ value: D(y), label: d }) : M({ value: D(y) }),
                                        x = v && g !== w ? 0.5 : 1,
                                        B = f ? "pointer" : "default";
                                    var P;
                                    a.push(l.createElement("circle", { cx: m, cy: m, fill: "none", key: d ?? w, onBlur: b, onFocus: () => C(w), onMouseLeave: b, onMouseOver: () => C(w), r: s, stroke: u.default.theme.colors[i ?? O], strokeDasharray: S(p, y, w === r.length - 1), strokeDashoffset: k(p, e), strokeWidth: c, style: { opacity: x, cursor: B } })),
                                        t.push(
                                            l.createElement(o.Z, {
                                                "aria-label": Z,
                                                focusable: 0 === w,
                                                key: d ?? w,
                                                onBlur: E,
                                                onFocus: () => h(w),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, r, l, o) {
                                                        if ("ArrowRight" === t) {
                                                            const e = r + 1 >= o ? 0 : r + 1;
                                                            l?.current?.[r]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = r - 1 < 0 ? o - 1 : r - 1;
                                                            l?.current?.[r]?.setAttribute("tabIndex", "-1"), l?.current?.[e]?.setAttribute("tabIndex", "0"), l?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, w, n, r.length);
                                                },
                                                ref:
                                                    ((P = w),
                                                    (e) => {
                                                        const t = n?.current;
                                                        t && (t[P] = e), (n.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += y);
                                }),
                                { a11yViews: t, circles: a }
                            );
                        }, [r, v, g, m, b, s, p, c, E, C, h]),
                        z = (null !== g && r[g].popover) || null;
                    return l.createElement(d.Z, { contentStyle: { minWidth: 0 }, disabled: f, enableEnterKeyToggle: !!z, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: y, onOpen: w, preferredVerticalOrientation: "up", renderContent: () => z }, l.createElement(o.Z, { "aria-label": B, focusable: !1, id: t, role: "application" }, l.createElement("svg", { height: i, onFocus: Z, onMouseOver: Z, style: { transform: "rotate(-90deg)" }, width: i }, P), x));
                },
                z = u.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                $ = ({ arcWidth: e = 0.4, data: t, legendPosition: r, radius: a, title: n, titleDescription: d }) => {
                    const u = (0, s.b)(),
                        m = Boolean(a),
                        [p, b] = l.useState(a ?? 1),
                        f = l.useMemo(() => Boolean(r && t.every((e) => Boolean(e?.label))), [t, r]),
                        v = l.useCallback(
                            ({ nativeEvent: e }) => {
                                !a && b(Math.floor(e.layout.width / 2));
                            },
                            [a],
                        ),
                        [y, w, E] = t.reduce(([e, t, r], l) => [Math.min(e, l.value), Math.max(t, l.value), r + l.value], [1 / 0, -1 / 0, 0]),
                        C = D(y / E),
                        x = D(w / E),
                        S = l.useMemo(
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
                        k = l.useMemo(() => (f ? S.map(({ color: e, label: t, value: r }, o) => l.createElement(h, { color: e ?? O, key: t, label: t ?? "", size: "small", value: D(r) })) : []), [S, f]),
                        I = ((e, t, r) => {
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
                        })(f, r, m);
                    return l.createElement(o.Z, { "aria-labelledby": u, role: "figure" }, n && l.createElement(o.Z, { style: z.titleBar }, l.createElement(c.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: z.title, weight: "heavy" }, n), d ? l.createElement(g.Z, { label: n, popover: d }) : null, l.createElement(Z, { chartTitle: n, maxValue: x, minValue: C, noOfCategories: t.length })), l.createElement(o.Z, { style: I.container }, f && l.createElement(o.Z, { style: [z.legend, I.legend] }, k), l.createElement(o.Z, { onLayout: v, style: [z.pie, I.pie] }, l.createElement(P, { arcWidth: e, chartId: u, data: S, radius: p }))));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var l = r(202784),
                o = r(325686),
                a = r(392237);
            function n({ spacing: e, style: t }) {
                return l.createElement(o.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        819483: (e, t, r) => {
            r.d(t, { Z: () => u });
            var l = r(202784),
                o = r(325686),
                a = r(123588),
                n = r(212145),
                i = r(382880),
                c = r(516951),
                s = r(731708),
                d = r(392237);
            const u = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: d, rows: u, setSortOptions: p, sortOptions: h } = e,
                        g = l.useRef(null),
                        b = l.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        f = l.useMemo(() => (0, i.Z)(r || c.Z), [r]);
                    l.useEffect(() => {
                        if (u.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && f();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = g || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [g, f, u.length]);
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
                                                        p({ sortField: e, sortOrder: e === h?.sortField ? ("ASCENDING" === h?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / b)}%`, ...m.tableHeading },
                                            },
                                            l.createElement(s.ZP, { weight: "bold" }, e.label),
                                            e.field === h?.sortField && ("ASCENDING" === h?.sortOrder ? l.createElement(a.default, null) : l.createElement(n.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            l.createElement(
                                "tbody",
                                null,
                                u.map((e, r) =>
                                    l.createElement(
                                        "tr",
                                        { key: r, onClick: () => d(e), ref: r === u.length - 5 ? g : null, style: { ...m.row, ...(d && { cursor: "pointer" }) } },
                                        t.map((t, o) => l.createElement("td", { key: `${r}-${o}`, style: m.cell }, l.createElement(s.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                m = d.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => l });
            const l = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var l = r(202784),
                o = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        97301: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var l = r(202784),
                o = r(890601),
                a = r(783427),
                n = r(717683),
                i = r(347101);
            const c = (e = {}) => {
                const t = l.useContext(n.Z),
                    { direction: r } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        711223: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var l = r(202784),
                o = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        275450: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var l = r(202784),
                o = r(890601),
                a = r(783427),
                n = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-bc6ccf4c.0ebd2eba.js.map

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a", "icons/IconChevronDown-js", "icons/IconChevronLeft-js", "icons/IconLayers-js"],
    {
        247291: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => L });
            r(136728);
            var a = r(202784),
                o = r(325686),
                n = r(111677),
                l = r.n(n),
                s = r(27137),
                i = r(731708),
                c = r(352924),
                u = r(157130),
                d = r(392237);
            const m = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                p = d.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                g = ({ color: e = "blue500", label: t, size: r = "large", value: n }) => {
                    const l = n ? r : "xSmall",
                        s = m[l],
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
                        })(l),
                        u = `0 0 6 ${s}`;
                    return a.createElement(o.Z, { style: p.row }, a.createElement(o.Z, { style: [p.svg, { height: s }, !c && { marginTop: d.default.theme.spaces.space2 }] }, a.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, a.createElement("rect", { fill: d.default.theme.colors[e], height: s, rx: 3, width: 6 }))), a.createElement(o.Z, { style: p.column }, a.createElement(i.ZP, { color: "gray700", size: "subtext2", style: p.title, weight: "medium" }, t), c && a.createElement(i.ZP, { size: c, weight: "bold" }, n)));
                };
            var h = r(635998),
                f = r(689107),
                v = r(154003);
            const b = l().iab73d4b,
                y = l().ha20397c,
                w = l().baf7a43c,
                E = l().h30a19bb,
                C = l().af8fa2ae;
            const Z = (e) => {
                    const { chartTitle: t, maxValue: r, minValue: n, noOfCategories: l } = e,
                        s = E({ chartTitle: t, minValue: n, maxValue: r, noOfCategories: b(l) });
                    return a.createElement(o.Z, null, a.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(o.Z, { "aria-label": s, role: "dialog", style: x.popover }, a.createElement(o.Z, { style: x.popoverTitle }, a.createElement(i.ZP, { size: "title3", weight: "heavy" }, w)), a.createElement(o.Z, { style: x.popoverText }, a.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, s)), a.createElement(v.ZP, { onPress: e, type: "primaryOutlined" }, C)), withArrow: !0 }, a.createElement(o.Z, { role: "button" }, a.createElement(f.default, { "aria-label": y, style: x.a11yIcon }))));
                },
                x = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                M = (e, t, r = !1) => {
                    const a = 0 === t ? 0 : t * e - (r ? 1e-4 : 0);
                    return `${a} ${e - a}`;
                },
                D = (e, t) => "-" + t * e,
                k = l().c778d80b,
                S = l().idea1817,
                B = l().fe94be6b,
                I = l().ef8b2f54,
                N = "blue500",
                F = ({ arcWidth: e, chartId: t, data: r, radius: n }) => {
                    const l = a.useRef(Array.from({ length: r.length }, () => null)),
                        s = 2 * n,
                        i = e <= 0 ? 1 : Math.min(1, e) * (s / 2),
                        c = (s - i) / 2,
                        m = s / 2,
                        p = ((e) => 2 * Math.PI * e)(c),
                        {
                            focusSliceFromKeyboard: g,
                            focusedSlice: h,
                            forceHidePopover: f,
                            isPopoverDisabled: v,
                            isSliceHighlighted: b,
                            onPopoverClose: y,
                            onPopoverOpen: w,
                            onSliceBlur: E,
                            onSliceMouseOver: C,
                        } = ((e) => {
                            const [t, r] = a.useState(null),
                                [o, n] = a.useState(!1),
                                [l, s] = a.useState(!1),
                                [i, c] = a.useState(!1),
                                u = a.useRef(void 0),
                                d = a.useCallback((e) => {
                                    r(e), s(!0);
                                }, []),
                                m = a.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        n(!0),
                                        s(!1),
                                        (u.current = window.setTimeout(() => {
                                            n(!1);
                                        }, 10));
                                }, []),
                                p = a.useCallback(() => {
                                    i || s(!1);
                                }, [i]),
                                g = a.useCallback(
                                    (t) => {
                                        e[t].popover ? r(t) : n(!0);
                                    },
                                    [e],
                                ),
                                h = a.useCallback(() => {
                                    s(!0), c(!0);
                                }, []),
                                f = a.useCallback(() => {
                                    c(!1);
                                }, []);
                            return (
                                a.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                a.useMemo(() => ({ focusSliceFromKeyboard: d, forceHidePopover: m, onSliceBlur: p, onSliceMouseOver: g, onPopoverOpen: h, onPopoverClose: f, focusedSlice: t, isPopoverDisabled: o, isSliceHighlighted: l }), [d, t, m, o, l, f, h, p, g])
                            );
                        })(r),
                        Z = a.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: x, circles: F } = a.useMemo(() => {
                            let e = 0;
                            const t = [],
                                n = [];
                            return (
                                r.forEach(({ color: s, label: u, popover: v, value: y }, w) => {
                                    const Z = u ? S({ value: k(y), label: u }) : B({ value: k(y) }),
                                        x = b && h !== w ? 0.5 : 1,
                                        I = v ? "pointer" : "default";
                                    var F;
                                    n.push(a.createElement("circle", { cx: m, cy: m, fill: "none", key: u ?? w, onBlur: f, onFocus: () => C(w), onMouseLeave: f, onMouseOver: () => C(w), r: c, stroke: d.default.theme.colors[s ?? N], strokeDasharray: M(p, y, w === r.length - 1), strokeDashoffset: D(p, e), strokeWidth: i, style: { opacity: x, cursor: I } })),
                                        t.push(
                                            a.createElement(o.Z, {
                                                "aria-label": Z,
                                                focusable: 0 === w,
                                                key: u ?? w,
                                                onBlur: E,
                                                onFocus: () => g(w),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, r, a, o) {
                                                        if ("ArrowRight" === t) {
                                                            const e = r + 1 >= o ? 0 : r + 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = r - 1 < 0 ? o - 1 : r - 1;
                                                            a?.current?.[r]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, w, l, r.length);
                                                },
                                                ref:
                                                    ((F = w),
                                                    (e) => {
                                                        const t = l?.current;
                                                        t && (t[F] = e), (l.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += y);
                                }),
                                { a11yViews: t, circles: n }
                            );
                        }, [r, b, h, m, f, c, p, i, E, C, g]),
                        z = (null !== h && r[h].popover) || null;
                    return a.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: v, enableEnterKeyToggle: !!z, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: y, onOpen: w, preferredVerticalOrientation: "up", renderContent: () => z }, a.createElement(o.Z, { "aria-label": I, focusable: !1, id: t, role: "application" }, a.createElement("svg", { height: s, onFocus: Z, onMouseOver: Z, style: { transform: "rotate(-90deg)" }, width: s }, F), x));
                },
                z = d.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                L = ({ arcWidth: e = 0.4, data: t, legendPosition: r, radius: n, title: l, titleDescription: u }) => {
                    const d = (0, c.b)(),
                        m = Boolean(n),
                        [p, f] = a.useState(n ?? 1),
                        v = a.useMemo(() => Boolean(r && t.every((e) => Boolean(e?.label))), [t, r]),
                        b = a.useCallback(
                            ({ nativeEvent: e }) => {
                                !n && f(Math.floor(e.layout.width / 2));
                            },
                            [n],
                        ),
                        [y, w, E] = t.reduce(([e, t, r], a) => [Math.min(e, a.value), Math.max(t, a.value), r + a.value], [1 / 0, -1 / 0, 0]),
                        C = k(y / E),
                        x = k(w / E),
                        M = a.useMemo(
                            () =>
                                ((e) => {
                                    const t = e.reduce((e, t) => e + t.value, 0);
                                    let r = 0;
                                    const a = [];
                                    e.forEach((e, o) => {
                                        const n = Math.floor((1e3 * e.value) / t) / 1e3;
                                        (r += n), a.push({ ...e, value: n });
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
                        D = a.useMemo(() => (v ? M.map(({ color: e, label: t, value: r }, o) => a.createElement(g, { color: e ?? N, key: t, label: t ?? "", size: "small", value: k(r) })) : []), [M, v]),
                        S = ((e, t, r) => {
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
                        })(v, r, m);
                    return a.createElement(o.Z, { "aria-labelledby": d, role: "figure" }, l && a.createElement(o.Z, { style: z.titleBar }, a.createElement(i.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: z.title, weight: "heavy" }, l), u ? a.createElement(h.Z, { label: l, popover: u }) : null, a.createElement(Z, { chartTitle: l, maxValue: x, minValue: C, noOfCategories: t.length })), a.createElement(o.Z, { style: S.container }, v && a.createElement(o.Z, { style: [z.legend, S.legend] }, D), a.createElement(o.Z, { onLayout: b, style: [z.pie, S.pie] }, a.createElement(F, { arcWidth: e, chartId: d, data: M, radius: p }))));
                };
        },
        98996: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(325686),
                n = r(111677),
                l = r.n(n),
                s = r(536606),
                i = r(157130),
                c = r(392237);
            const u = l().h39fbf33,
                d = l().c778d80b;
            const m = c.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                p = (e) => {
                    const { barConfig: t, data: r, style: n } = e,
                        { normalizer: l, valueLabelsFormatter: c } = (function (e, t) {
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
                                a = e?.valueLabelsFormatter ?? d;
                            return { normalizer: r, valueLabelsFormatter: a };
                        })(t, r),
                        p = u({ minValue: c(Math.min(...r.map((e) => e.value)) / l), maxValue: c(Math.max(...r.map((e) => e.value)) / l) }),
                        g = a.useCallback((e) => () => e.popover ?? null, []),
                        h = r.map((e, r) => {
                            const { icon: n, label: u, value: d } = e;
                            if (!u) return null;
                            const p = c(d / l),
                                h = (function (e, t) {
                                    const r = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return r;
                                })(t, e),
                                f = (function (e) {
                                    return { label: e };
                                })(p),
                                v = g(e);
                            return a.createElement(i.Z, { contentStyle: m.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${r}Popover`, preferredVerticalOrientation: "up", renderContent: v, withArrow: !0 }, a.createElement(o.Z, { focusable: !0 }, a.createElement(s.Z, { decoration: n, isCompact: !0, key: `progressBar${r}`, progressBarConfig: h, statConfig: f, title: u, valueCurrent: d, valueMax: l })));
                        });
                    return a.createElement(o.Z, { "aria-label": p, focusable: !0, role: "figure", style: [m.chart, n] }, h);
                };
        },
        536606: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(352924),
                s = r(822399),
                i = r(98538),
                c = r(392237);
            const u = (e) => {
                const { decoration: t, isCompact: r, progressBarConfig: u, statConfig: m, title: p, valueCurrent: g, valueMax: h } = e,
                    f = (0, l.F)(),
                    v = ((b = u), c.default.theme.colors[b?.color || "blue900"]);
                var b;
                const y = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(u),
                    w = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(u);
                return a.createElement(o.Z, { style: d.root }, a.createElement(o.Z, { style: d.decoration }, t), a.createElement(o.Z, { style: d.title }, a.createElement(n.ZP, { size: "subtext2", weight: "medium" }, p)), a.createElement(o.Z, { id: f, style: d.valueLabel }, m.value ? a.createElement(i.Z, null, a.createElement(i.Z.Value, null, m.value), a.createElement(i.Z.Label, null, m.label)) : a.createElement(n.ZP, { weight: "bold" }, m.label)), a.createElement(o.Z, { style: r ? d.progressBarContainerCompact : d.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, a.createElement(s.Z, { "aria-describedby": f, "aria-valuemax": h, colorValue: v, progress: g / h, progressStyle: y, style: w })));
            };
            const d = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = a.memo(u);
        },
        98538: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var a = r(202784),
                o = r(325686),
                n = r(731708),
                l = r(891198),
                s = r(280278),
                i = r(392237);
            const c = "subtext1",
                u = a.createContext({ onMedia: !1 });
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return a.createElement(n.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, a.createElement(u.Provider, { value: { onMedia: r } }, e));
                }
            }
            (d.Group = (e) =>
                a.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    a.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => a.createElement(o.Z, { key: t, style: t < r.length - 1 && m.groupItemNonLast }, e)),
                )),
                (d.Label = ({ children: e, style: t }) => a.createElement(u.Consumer, null, ({ onMedia: r }) => a.createElement(n.ZP, { children: e, color: r ? "white" : "gray700", size: c, style: t }))),
                (d.Value = ({ animated: e, children: t, count: r, style: o, weight: l = "bold" }) => a.createElement(u.Consumer, null, ({ onMedia: i }) => (e ? a.createElement(s.ZP, { children: t, count: r, size: c, style: o, weight: l }) : a.createElement(n.ZP, { children: t, color: i ? "white" : "text", size: c, style: o, weight: l }))));
            const m = i.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = d;
        },
        819483: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(325686),
                n = r(123588),
                l = r(212145),
                s = r(382880),
                i = r(516951),
                c = r(731708),
                u = r(392237);
            const d = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: u, rows: d, setSortOptions: p, sortOptions: g } = e,
                        h = a.useRef(null),
                        f = a.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        v = a.useMemo(() => (0, s.Z)(r || i.Z), [r]);
                    a.useEffect(() => {
                        if (d.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && v();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = h || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [h, v, d.length]);
                    return a.createElement(
                        o.Z,
                        { style: m.tableContainer },
                        a.createElement(
                            "table",
                            { style: m.table },
                            a.createElement(
                                "thead",
                                null,
                                a.createElement(
                                    "tr",
                                    { style: m.row },
                                    t.map((e) =>
                                        a.createElement(
                                            "th",
                                            {
                                                key: e.field,
                                                onClick: () =>
                                                    ((e, t = !1) => {
                                                        if (!t || !p) return;
                                                        p({ sortField: e, sortOrder: e === g?.sortField ? ("ASCENDING" === g?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / f)}%`, ...m.tableHeading },
                                            },
                                            a.createElement(c.ZP, { weight: "bold" }, e.label),
                                            e.field === g?.sortField && ("ASCENDING" === g?.sortOrder ? a.createElement(n.default, null) : a.createElement(l.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            a.createElement(
                                "tbody",
                                null,
                                d.map((e, r) =>
                                    a.createElement(
                                        "tr",
                                        { key: r, onClick: () => u(e), ref: r === d.length - 5 ? h : null, style: { ...m.row, ...(u && { cursor: "pointer" }) } },
                                        t.map((t, o) => a.createElement("td", { key: `${r}-${o}`, style: m.cell }, a.createElement(c.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                m = u.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        183806: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        97301: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                l = r(717683),
                s = r(347101);
            const i = (e = {}) => {
                const t = a.useContext(l.Z),
                    { direction: r } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" })) }, { writingDirection: r });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        711223: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        275450: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => i });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        666536: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            var a = r(936386),
                o = r.n(a);
            const n = (e, t, r) => o()(e, t, r);
        },
        936386: (e) => {
            function t(e, t, r) {
                var a, o, n, l, s;
                function i() {
                    var c = Date.now() - l;
                    c < t && c >= 0 ? (a = setTimeout(i, t - c)) : ((a = null), r || ((s = e.apply(n, o)), (n = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (n = this), (o = arguments), (l = Date.now());
                    var c = r && !a;
                    return a || (a = setTimeout(i, t)), c && ((s = e.apply(n, o)), (n = o = null)), s;
                };
                return (
                    (c.clear = function () {
                        a && (clearTimeout(a), (a = null));
                    }),
                    (c.flush = function () {
                        a && ((s = e.apply(n, o)), (n = o = null), clearTimeout(a), (a = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        544044: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => s });
            var a = r(150729),
                o = r(595873);
            function n(e, t) {
                const r = +(0, a.Q)(e);
                return (0, o.L)(e, r + t);
            }
            var l = r(31418);
            function s(e, t) {
                return n(e, t * l.vh);
            }
        },
        777617: (e, t, r) => {
            "use strict";
            r.d(t, { z: () => n });
            var a = r(150729),
                o = r(595873);
            function n(e, t) {
                const r = (0, a.Q)(e);
                if (isNaN(t)) return (0, o.L)(e, NaN);
                if (!t) return r;
                const n = r.getDate(),
                    l = (0, o.L)(e, r.getTime());
                l.setMonth(r.getMonth() + t + 1, 0);
                return n >= l.getDate() ? l : (r.setFullYear(l.getFullYear(), l.getMonth(), n), r);
            }
        },
        991809: (e, t, r) => {
            "use strict";
            r.d(t, { j: () => o });
            var a = r(178016);
            function o(e, t) {
                const r = 7 * t;
                return (0, a.E)(e, r);
            }
        },
        112385: (e, t, r) => {
            "use strict";
            r.d(t, { B: () => o });
            var a = r(777617);
            function o(e, t) {
                return (0, a.z)(e, 12 * t);
            }
        },
        513761: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => o });
            var a = r(150729);
            function o(e, t) {
                const r = (0, a.Q)(e),
                    o = (0, a.Q)(t);
                return 12 * (r.getFullYear() - o.getFullYear()) + (r.getMonth() - o.getMonth());
            }
        },
        364597: (e, t, r) => {
            "use strict";
            r.d(t, { i: () => o });
            var a = r(150729);
            function o(e) {
                const t = (0, a.Q)(e);
                return t.setHours(23, 59, 59, 999), t;
            }
        },
        428332: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => o });
            var a = r(560307);
            function o(e) {
                return (0, a.v)(e, { weekStartsOn: 1 });
            }
        },
        242359: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => o });
            var a = r(150729);
            function o(e) {
                const t = (0, a.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
            }
        },
        560307: (e, t, r) => {
            "use strict";
            r.d(t, { v: () => n });
            var a = r(150729),
                o = r(803066);
            function n(e, t) {
                const r = (0, o.j)(),
                    n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    l = (0, a.Q)(e),
                    s = l.getDay(),
                    i = 6 + (s < n ? -7 : 0) - (s - n);
                return l.setDate(l.getDate() + i), l.setHours(23, 59, 59, 999), l;
            }
        },
        889957: (e, t, r) => {
            "use strict";
            r.d(t, { h: () => o });
            var a = r(150729);
            function o(e) {
                return (0, a.Q)(e).getTime();
            }
        },
        323568: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => o });
            var a = r(150729);
            function o(e) {
                return Math.trunc(+(0, a.Q)(e) / 1e3);
            }
        },
        242268: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => u });
            var a = r(31418),
                o = r(262014),
                n = r(537796);
            function l(e, t, r) {
                const l = (0, o.z)(e, r),
                    s = (0, o.z)(t, r),
                    i = +l - (0, n.D)(l),
                    c = +s - (0, n.D)(s);
                return Math.round((i - c) / a.jE);
            }
            var s = r(150729);
            function i(e) {
                const t = (0, s.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var c = r(200210);
            function u(e, t) {
                return l(i(e), (0, c.N)(e), t) + 1;
            }
        },
        251461: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => o });
            var a = r(150729);
            function o(e, t) {
                const r = (0, a.Q)(e),
                    o = (0, a.Q)(t);
                return r.getTime() > o.getTime();
            }
        },
        871502: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var a = r(150729);
            function o(e, t) {
                return +(0, a.Q)(e) < +(0, a.Q)(t);
            }
        },
        395121: (e, t, r) => {
            "use strict";
            r.d(t, { L: () => o });
            var a = r(150729);
            function o(e) {
                return 5 === (0, a.Q)(e).getDay();
            }
        },
        251418: (e, t, r) => {
            "use strict";
            r.d(t, { K: () => o });
            var a = r(808106);
            function o(e, t) {
                return +(0, a.b)(e) == +(0, a.b)(t);
            }
        },
        964971: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => o });
            var a = r(150729);
            function o(e, t) {
                const r = (0, a.Q)(e),
                    o = (0, a.Q)(t);
                return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
            }
        },
        513371: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => o });
            var a = r(150729);
            function o(e, t) {
                const r = (0, a.Q)(e),
                    o = (0, a.Q)(t);
                return r.getFullYear() === o.getFullYear();
            }
        },
        460556: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => o });
            var a = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach(function (e) {
                        const r = (0, a.Q)(e);
                        (void 0 === t || t < r || isNaN(Number(r))) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        346365: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => o });
            var a = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach((e) => {
                        const r = (0, a.Q)(e);
                        (!t || t > r || isNaN(+r)) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        961596: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => s });
            var a = r(178016),
                o = r(150729);
            function n(e) {
                return (0, o.Q)(e).getDay();
            }
            function l(e, t) {
                let r = t - n(e);
                return r <= 0 && (r += 7), (0, a.E)(e, r);
            }
            function s(e) {
                return l(e, 5);
            }
        },
        663233: (e, t, r) => {
            "use strict";
            r.d(t, { q: () => l });
            var a = r(595873),
                o = r(150729);
            function n(e) {
                const t = (0, o.Q)(e),
                    r = t.getFullYear(),
                    n = t.getMonth(),
                    l = (0, a.L)(e, 0);
                return l.setFullYear(r, n + 1, 0), l.setHours(0, 0, 0, 0), l.getDate();
            }
            function l(e, t) {
                const r = (0, o.Q)(e),
                    l = r.getFullYear(),
                    s = r.getDate(),
                    i = (0, a.L)(e, 0);
                i.setFullYear(l, t, 15), i.setHours(0, 0, 0, 0);
                const c = n(i);
                return r.setMonth(t, Math.min(s, c)), r;
            }
        },
        876346: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => n });
            var a = r(595873),
                o = r(150729);
            function n(e, t) {
                const r = (0, o.Q)(e);
                return isNaN(+r) ? (0, a.L)(e, NaN) : (r.setFullYear(t), r);
            }
        },
        200210: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => o });
            var a = r(150729);
            function o(e) {
                const t = (0, a.Q)(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t;
            }
        },
        524145: (e, t, r) => {
            "use strict";
            r.d(t, { l: () => s });
            var a = r(733936),
                o = r(777617);
            function n(e, t) {
                return (0, o.z)(e, -t);
            }
            var l = r(595873);
            function s(e, t) {
                const { years: r = 0, months: o = 0, weeks: s = 0, days: i = 0, hours: c = 0, minutes: u = 0, seconds: d = 0 } = t,
                    m = n(e, o + 12 * r),
                    p = (0, a.k)(m, i + 7 * s),
                    g = 1e3 * (d + 60 * (u + 60 * c));
                return (0, l.L)(e, p.getTime() - g);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.244f822a.js.map

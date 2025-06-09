"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-bc6ccf4c", "icons/IconAccessibilityCircle-js"],
    {
        595294: (e, t, a) => {
            a.d(t, { Z: () => J });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(731708),
                c = a(352924),
                s = a(392237),
                u = a(161104),
                d = a(635998),
                m = a(689107),
                p = a(154003),
                g = a(157130);
            const h = o().iab73d4b,
                f = o().ha20397c,
                b = o().baf7a43c,
                y = o().e8f674ab,
                v = o().d969327c,
                x = o().d8cbbcd4,
                E = o().af8fa2ae;
            function w(e, t, a, r, l) {
                const n = e.key,
                    o = r?.current?.[t] ? r.current[t].length : 0;
                if ("ArrowRight" === n)
                    if ((e.preventDefault(), a >= o - 1)) {
                        const e = t + 1 >= l ? 0 : t + 1;
                        r?.current?.[e]?.[0]?.focus();
                    } else r?.current?.[t]?.[a + 1]?.focus();
                else if ("ArrowLeft" === n)
                    if ((e.preventDefault(), 0 === a)) {
                        const e = t - 1 < 0 ? l - 1 : t - 1,
                            a = r?.current?.[e] ? r.current[e].length : 1;
                        r?.current?.[e]?.[a - 1]?.focus();
                    } else r?.current?.[t]?.[a - 1]?.focus();
            }
            const Z = (e) => {
                    const { chartTitle: t, chartType: a, maxValue: n, minValue: o, noOfCategories: c, playAudioChart: s } = e,
                        u = y({ chartTitle: t, chartType: a, minValue: h(o), maxValue: h(n), noOfCategories: h(c) });
                    return r.createElement(l.Z, null, r.createElement(g.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { "aria-label": u, role: "dialog", style: C.popover }, r.createElement(l.Z, { style: C.popoverTitle }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, b)), r.createElement(l.Z, { style: C.popoverText }, r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, u)), s ? r.createElement(p.ZP, { "aria-label": x, onPress: s, style: C.audioChartButton, type: "primaryFilled" }, v) : null, r.createElement(p.ZP, { onPress: e, type: "primaryOutlined" }, E)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(m.default, { "aria-label": f, style: C.audioChartIcon }))));
                },
                C = s.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, audioChartButton: { marginBottom: e.spaces.space8 }, audioChartIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                B = { borderRadii: "xSmall", layout: "fixedSpacing", spacing: "space2", width: "space56" };
            Object.freeze({ fixedBarWidth: "fixedBarWidth", fixedSpacing: "fixedSpacing" });
            var D = a(614983),
                V = a.n(D);
            const z = (e, t, a) => (100 * (e - a)) / (t - a),
                P = (e) => [].concat(...e.map((e) => (void 0 !== e.value ? e.value : e.values.map((e) => e.value)))),
                k = (e) => e.map((e) => e.values.map((e) => e.value).reduce((e, t) => e + t)),
                I = (e) => (t) => e.popover ?? null,
                S = o().dec1d7ef,
                T = o().f765bead,
                $ = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef([]),
                        i = { ...B, ...e },
                        c = "fixedBarWidth" === i.layout,
                        [u, d] = r.useState(null),
                        m = (e, t, a) => s.default.create(() => ({ style: { flex: c ? null : 1, height: `${z(t.value, a, n)}%`, width: c ? `calc(${s.default.theme.spaces[i.width]} / ${e.values.length})` : 100 / e.values.length + "%", minWidth: s.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? s.default.theme.colors[t.color] : s.default.theme.colors.blue500, borderRadius: s.default.theme.borderRadii[i.borderRadii], marginHorizontal: s.default.theme.spaces.space2, ...(!!e.popover && { cursor: "pointer" }) } })).style,
                        p = { height: "100%", display: "flex", flex: 1, justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", marginHorizontal: s.default.theme.spaces[i.spacing] },
                        h = (e) => {
                            u === e && d(null);
                        };
                    return t.map((e, i) => {
                        o.current?.push([]);
                        const s = e.values.map((e) => e.value).reduce((e, t) => Math.max(e, t)),
                            f = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${i}`, style: [p, ((b = i), null !== u ? (b === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })], testID: `barGroup${i}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !f, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", key: `barGroup${i}`, onDismiss: () => h(i), onHoverCardUnmount: () => h(i), onOpen: () => d(i), preferredVerticalOrientation: "up", renderContent: I(e), withArrow: !0, wrapperStyle: { flex: c ? null : 1, flexDirection: "row", alignItems: "flex-end", width: "100%", height: `${z(s, a, n)}%` } },
                                e.values.map((a, n) => {
                                    const c = e.label ? S({ label: e.label?.props.children, group: a.group, value: a.value }) : T({ group: a.group, value: a.value });
                                    return r.createElement(l.Z, {
                                        "aria-label": c,
                                        focusable: !0,
                                        key: `barGroup${n}Bar${n}`,
                                        onKeyDown: (e) => {
                                            w(e, i, n, o, t.length);
                                        },
                                        ref: (e) => o.current?.[i]?.push(e),
                                        role: "img",
                                        style: m(e, a, s),
                                        testID: `barGroup${i}Bar${n}`,
                                    });
                                }),
                            ),
                        );
                        var b;
                    });
                },
                A = o().idea1817,
                M = o().fe94be6b,
                R = s.default.create((e) => ({ normalBarWrapper: { height: "100%", flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" } })),
                W = ({ audioChartGenerator: e, barConfig: t, data: a, frequencies: n, maxValue: o, minValue: i }) => {
                    const c = r.useRef(Array.from({ length: a.length }, () => null)),
                        u = (e) => (t) => {
                            const a = c?.current;
                            a && (a[e] = t), (c.current = a);
                        },
                        [d, m] = r.useState(null),
                        p = { ...B, ...t },
                        h = "fixedBarWidth" === p.layout,
                        f = (e) => ({ flex: h ? null : 1, height: `${z(e.value, o, i)}%`, width: h ? s.default.theme.spaces[p.width] : "auto", minWidth: s.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: e.color ? s.default.theme.colors[e.color] : s.default.theme.colors.blue500, borderRadius: s.default.theme.borderRadii[p.borderRadii], marginHorizontal: s.default.theme.spaces[p.spacing], ...(!!e.popover && { cursor: "pointer" }) }),
                        b = (e) => {
                            d === e && m(null);
                        };
                    return a.map((t, o) => {
                        const i = t.label ? A({ label: t.label, value: t.value }) : M({ value: t.value }),
                            s = !!t.popover;
                        return r.createElement(
                            l.Z,
                            { key: `normalBarWrapper${o}`, style: [R.normalBarWrapper, ((p = o), null !== d ? (p === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })] },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !s, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => b(o), onHoverCardUnmount: () => b(o), onOpen: () => m(o), preferredVerticalOrientation: "up", renderContent: I(t), withArrow: !0, wrapperStyle: f(t) },
                                r.createElement(l.Z, {
                                    "aria-label": i,
                                    focusable: 0 === o,
                                    key: `bar${o}`,
                                    onKeyDown: (t) => {
                                        "a" === t.key &&
                                            ((t) => {
                                                n && e?.current?.playFrequencyAsTone(n?.[t], 0.7, 0.3);
                                            })(o),
                                            (function (e, t, a, r) {
                                                if ("ArrowRight" === e) {
                                                    const e = t + 1 >= r ? 0 : t + 1;
                                                    a?.current?.[t]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                } else if ("ArrowLeft" === e) {
                                                    const e = t - 1 < 0 ? r - 1 : t - 1;
                                                    a?.current?.[t]?.setAttribute("tabIndex", "-1"), a?.current?.[e]?.setAttribute("tabIndex", "0"), a?.current?.[e]?.focus();
                                                }
                                            })(t.key, o, c, a.length);
                                    },
                                    ref: u(o),
                                    role: "img",
                                    style: f(t),
                                    testID: `bar${o}`,
                                }),
                            ),
                        );
                        var p;
                    });
                },
                O = o().dec1d7ef,
                H = o().f765bead,
                G = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef(Array.from({ length: t.length }, () => [])),
                        i = (e, t) => (a) => {
                            const r = o?.current;
                            r && (r[e][t] = a), (o.current = r);
                        },
                        c = { ...B, ...e },
                        u = "fixedBarWidth" === c.layout,
                        [d, m] = r.useState(null),
                        p = (e, t) => ({ height: `${z(t.value, a, n)}%`, width: u ? s.default.theme.spaces[c.width] : "100%", minWidth: s.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? s.default.theme.colors[t.color] : s.default.theme.colors.blue500, borderRadius: s.default.theme.borderRadii[c.borderRadii], marginTop: s.default.theme.spaces.space2 }),
                        h = (e) => {
                            d === e && m(null);
                        };
                    return t.map((e, a) => {
                        o.current?.push([]);
                        const n = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${a}`, style: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center", marginHorizontal: s.default.theme.spaces[c.spacing], ...((u = a), null !== d ? (u === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }), ...(n && { cursor: "pointer" }) }, testID: `barGroup${a}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !n, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => h(a), onHoverCardUnmount: () => h(a), onOpen: () => m(a), preferredVerticalOrientation: "up", renderContent: I(e), withArrow: !0, wrapperStyle: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center" } },
                                e.values.map((n, c) => {
                                    const s = e.label ? O({ label: e.label?.props.children, group: n.group, value: n.value }) : H({ group: n.group, value: n.value });
                                    return r.createElement(l.Z, {
                                        "aria-label": s,
                                        focusable: !0,
                                        key: `barGroup${c}Bar${c}`,
                                        onKeyDown: (e) => {
                                            w(e, a, c, o, t.length);
                                        },
                                        ref: i(a, c),
                                        role: "img",
                                        style: p(0, n),
                                        testID: `barGroup${a}Bar${c}`,
                                    });
                                }),
                            ),
                        );
                        var u;
                    });
                },
                L = o().ef8b2f54,
                j = o().d567ceda,
                F = o().f7b30768,
                K = o().hcd54328,
                _ = ({ gridlines: e, maxValue: t, minValue: a }) => (e ? e.map((e, n) => r.createElement(l.Z, { key: `gridline${n}`, style: [U.gridLine, { bottom: `${z(e, t, a)}%` }], testID: `gridline${n}` })) : null),
                q = ({ data: e, labelStyle: t }) => (e ? e.map((e, a) => ("string" == typeof e.label ? r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2", style: [{ marginTop: s.default.theme.spaces.space8 }, t], weight: "medium" }, e.label)) : r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, e.label))) : null),
                N = ({ maxValue: e, minValue: t, ticks: a }) => {
                    const n =
                            a ||
                            ((e, t) => {
                                const a = t + (e - t) / 2;
                                return [
                                    { value: t, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, t) },
                                    { value: a, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, a) },
                                    { value: e, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, e) },
                                ];
                            })(e, t),
                        o = n.sort((e, t) => e.value - t.value);
                    return o.map((a, n) => {
                        const i = 0 === n ? z(a.value, e, t) : (100 * (a.value - o[n - 1].value)) / (e - t);
                        return r.createElement(l.Z, { "aria-hidden": !0, key: `tick${n}`, style: { position: "relative", height: `${i}%`, paddingBottom: "0.75em" } }, a.label);
                    });
                },
                U = s.default.create((e) => ({ title: { color: e.colors.gray700, marginBottom: "1em" }, titleBar: { display: "flex", flexDirection: "row" }, grid: { display: "grid", gridTemplateColumns: "1fr auto", gridTemplateRows: "1fr auto", width: "100%", minWidth: "100px", height: `calc(${e.spaces.space56} * 2)`, padding: e.spaces.space4 }, chartArea: { position: "relative", height: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }, gridLine: { position: "absolute", width: "100%", height: 1, backgroundColor: e.colors.gray200 }, yAxis: { height: "100%", position: "relative", display: "flex", flexDirection: "column-reverse", marginStart: e.spaces.space12 }, xAxis: { display: "flex", flexDirection: "row" }, label: { flex: 1 } })),
                J = ({ audioChart: e = !1, barConfig: t, data: a, dataGrouped: n, gridlines: o, labelStyle: s, stacked: m = !1, style: p, ticks: g, title: h, titleDescription: f }) => {
                    const b = (0, c.b)();
                    let y, v, x, E, w;
                    const C = r.useRef();
                    C.current || (C.current = new u.Z());
                    const B = g ? g.map((e) => e.value) : [],
                        D = ((e, t, a) => (void 0 !== e ? P(e) : void 0 !== t ? (a ? k(t) : P(t)) : void V()(e || t, "Either data or groupedData props must be passed")))(a, n, m);
                    if (!D) return null;
                    const z = Math.max(...D, ...B),
                        I = Math.min(...D, ...B);
                    if (void 0 !== a)
                        (v = j),
                            (E = a.length),
                            e &&
                                ((x = C.current?.mapDataPointsToFrequencies([...D, ...B])),
                                (w = () => {
                                    C?.current?.playDisconnectedDataPointsAsTone(a, 0.7, 0.3);
                                })),
                            (y = r.createElement(W, { audioChartGenerator: C, barConfig: t, data: a, frequencies: x, maxValue: z, minValue: I }));
                    else {
                        if (void 0 === n) return null;
                        (w = void 0), (E = n.length), m ? ((y = r.createElement(G, { barConfig: t, data: n, maxValue: z, minValue: I })), (v = F)) : ((y = r.createElement($, { barConfig: t, data: n, maxValue: z, minValue: I })), (v = K));
                    }
                    return r.createElement(l.Z, { "aria-labelledby": b, role: "figure" }, h && r.createElement(l.Z, { style: U.titleBar }, r.createElement(i.ZP, { focusable: !1, id: b, role: "heading", size: "subtext2", style: U.title, weight: "medium" }, h), f ? r.createElement(d.Z, { label: h, popover: f }) : null, r.createElement(Z, { chartTitle: h, chartType: v, maxValue: z, minValue: I, noOfCategories: E, playAudioChart: w })), r.createElement(l.Z, { style: [U.grid, p] }, r.createElement(l.Z, { "aria-label": L, focusable: !1, key: "chartArea", role: "application", style: U.chartArea }, r.createElement(_, { gridlines: o, maxValue: z, minValue: I }), y), r.createElement(l.Z, { key: "yAxis", style: U.yAxis }, r.createElement(N, { maxValue: z, minValue: I, ticks: g })), r.createElement(l.Z, { key: "xAxis", style: U.xAxis }, r.createElement(q, { data: a || n, labelStyle: s }))));
                };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => Z });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(212145),
                c = a(568320),
                s = a(123588),
                u = a(731708),
                d = a(280278),
                m = a(392237),
                p = a(635998);
            const g = o().i2785009,
                h = o().c778d80b,
                f = o().d9687d23,
                b = o().ac73eb5a,
                y = o().c5a9f921,
                v = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? r.createElement(l.Z, { style: w.labelBar }, r.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? r.createElement(p.Z, { label: t, popover: a }) : null) : null;
                },
                x = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? r.createElement(u.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, a) : null;
                },
                E = (e) => {
                    let t,
                        a,
                        { trendValue: n } = e;
                    return void 0 === n ? null : (Math.abs(n) < 0.1 ? ((n = Math.round(1e3 * n) / 1e3), (t = h(n))) : ((n = Math.round(100 * n) / 100), (t = g(n))), (a = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? b : y({ trendValuePositivePercent: t })))(n, t)), n < 0 ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": a, style: w.trendIconNeg }), r.createElement(u.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === n ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": a, style: w.trendIconZero }), r.createElement(u.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": a, style: w.trendIconPos }), r.createElement(u.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: a, label: n, popover: o, size: i, subTextList: c, trendValue: s, unit: m, value: p } = e,
                        g = m || void 0 !== s ? w.textWithMargin : void 0,
                        h = void 0 !== s ? w.textWithMargin : void 0;
                    return r.createElement(l.Z, { style: w.dataPoint }, r.createElement(v, { label: n, popover: o }), r.createElement(l.Z, { style: w.valueBar }, t ? r.createElement(d.ZP, { count: a, size: i, style: g, weight: "bold" }, p) : r.createElement(u.ZP, { size: i, style: g, weight: "bold" }, p), r.createElement(x, { style: h, unit: m }), r.createElement(E, { trendValue: s })), c);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(711223),
                c = a(731708),
                s = a(154003),
                u = a(157130),
                d = a(392237);
            const m = o().affbaf62,
                p = o().c388d026,
                g = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { label: t, popover: a } = e;
                    return r.createElement(l.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { role: "dialog", style: g.popover }, r.createElement(l.Z, { style: g.popoverTitle }, r.createElement(c.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(l.Z, { style: g.popoverText }, a), r.createElement(s.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(i.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        247291: (e, t, a) => {
            a.d(t, { Z: () => $ });
            a(136728);
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(27137),
                c = a(731708),
                s = a(352924),
                u = a(157130),
                d = a(392237);
            const m = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                p = d.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                g = ({ color: e = "blue500", label: t, size: a = "large", value: n }) => {
                    const o = n ? a : "xSmall",
                        i = m[o],
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
                        })(o),
                        u = `0 0 6 ${i}`;
                    return r.createElement(l.Z, { style: p.row }, r.createElement(l.Z, { style: [p.svg, { height: i }, !s && { marginTop: d.default.theme.spaces.space2 }] }, r.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, r.createElement("rect", { fill: d.default.theme.colors[e], height: i, rx: 3, width: 6 }))), r.createElement(l.Z, { style: p.column }, r.createElement(c.ZP, { color: "gray700", size: "subtext2", style: p.title, weight: "medium" }, t), s && r.createElement(c.ZP, { size: s, weight: "bold" }, n)));
                };
            var h = a(635998),
                f = a(689107),
                b = a(154003);
            const y = o().iab73d4b,
                v = o().ha20397c,
                x = o().baf7a43c,
                E = o().h30a19bb,
                w = o().af8fa2ae;
            const Z = (e) => {
                    const { chartTitle: t, maxValue: a, minValue: n, noOfCategories: o } = e,
                        i = E({ chartTitle: t, minValue: n, maxValue: a, noOfCategories: y(o) });
                    return r.createElement(l.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { "aria-label": i, role: "dialog", style: C.popover }, r.createElement(l.Z, { style: C.popoverTitle }, r.createElement(c.ZP, { size: "title3", weight: "heavy" }, x)), r.createElement(l.Z, { style: C.popoverText }, r.createElement(c.ZP, { color: "gray700", size: "body", weight: "normal" }, i)), r.createElement(b.ZP, { onPress: e, type: "primaryOutlined" }, w)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(f.default, { "aria-label": v, style: C.a11yIcon }))));
                },
                C = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                B = (e, t, a = !1) => {
                    const r = 0 === t ? 0 : t * e - (a ? 1e-4 : 0);
                    return `${r} ${e - r}`;
                },
                D = (e, t) => "-" + t * e,
                V = o().c778d80b,
                z = o().idea1817,
                P = o().fe94be6b,
                k = o().ef8b2f54,
                I = "blue500",
                S = ({ arcWidth: e, chartId: t, data: a, radius: n }) => {
                    const o = r.useRef(Array.from({ length: a.length }, () => null)),
                        i = 2 * n,
                        c = e <= 0 ? 1 : Math.min(1, e) * (i / 2),
                        s = (i - c) / 2,
                        m = i / 2,
                        p = ((e) => 2 * Math.PI * e)(s),
                        {
                            focusSliceFromKeyboard: g,
                            focusedSlice: h,
                            forceHidePopover: f,
                            isPopoverDisabled: b,
                            isSliceHighlighted: y,
                            onPopoverClose: v,
                            onPopoverOpen: x,
                            onSliceBlur: E,
                            onSliceMouseOver: w,
                        } = ((e) => {
                            const [t, a] = r.useState(null),
                                [l, n] = r.useState(!1),
                                [o, i] = r.useState(!1),
                                [c, s] = r.useState(!1),
                                u = r.useRef(void 0),
                                d = r.useCallback((e) => {
                                    a(e), i(!0);
                                }, []),
                                m = r.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        n(!0),
                                        i(!1),
                                        (u.current = window.setTimeout(() => {
                                            n(!1);
                                        }, 10));
                                }, []),
                                p = r.useCallback(() => {
                                    c || i(!1);
                                }, [c]),
                                g = r.useCallback(
                                    (t) => {
                                        e[t].popover ? a(t) : n(!0);
                                    },
                                    [e],
                                ),
                                h = r.useCallback(() => {
                                    i(!0), s(!0);
                                }, []),
                                f = r.useCallback(() => {
                                    s(!1);
                                }, []);
                            return (
                                r.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                r.useMemo(() => ({ focusSliceFromKeyboard: d, forceHidePopover: m, onSliceBlur: p, onSliceMouseOver: g, onPopoverOpen: h, onPopoverClose: f, focusedSlice: t, isPopoverDisabled: l, isSliceHighlighted: o }), [d, t, m, l, o, f, h, p, g])
                            );
                        })(a),
                        Z = r.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: C, circles: S } = r.useMemo(() => {
                            let e = 0;
                            const t = [],
                                n = [];
                            return (
                                a.forEach(({ color: i, label: u, popover: b, value: v }, x) => {
                                    const Z = u ? z({ value: V(v), label: u }) : P({ value: V(v) }),
                                        C = y && h !== x ? 0.5 : 1,
                                        k = b ? "pointer" : "default";
                                    var S;
                                    n.push(r.createElement("circle", { cx: m, cy: m, fill: "none", key: u ?? x, onBlur: f, onFocus: () => w(x), onMouseLeave: f, onMouseOver: () => w(x), r: s, stroke: d.default.theme.colors[i ?? I], strokeDasharray: B(p, v, x === a.length - 1), strokeDashoffset: D(p, e), strokeWidth: c, style: { opacity: C, cursor: k } })),
                                        t.push(
                                            r.createElement(l.Z, {
                                                "aria-label": Z,
                                                focusable: 0 === x,
                                                key: u ?? x,
                                                onBlur: E,
                                                onFocus: () => g(x),
                                                onKeyDown: (e) => {
                                                    !(function (e, t, a, r, l) {
                                                        if ("ArrowRight" === t) {
                                                            const e = a + 1 >= l ? 0 : a + 1;
                                                            r?.current?.[a]?.setAttribute("tabIndex", "-1"), r?.current?.[e]?.setAttribute("tabIndex", "0"), r?.current?.[e]?.focus();
                                                        } else if ("ArrowLeft" === t) {
                                                            const e = a - 1 < 0 ? l - 1 : a - 1;
                                                            r?.current?.[a]?.setAttribute("tabIndex", "-1"), r?.current?.[e]?.setAttribute("tabIndex", "0"), r?.current?.[e]?.focus();
                                                        }
                                                    })(0, e.key, x, o, a.length);
                                                },
                                                ref:
                                                    ((S = x),
                                                    (e) => {
                                                        const t = o?.current;
                                                        t && (t[S] = e), (o.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += v);
                                }),
                                { a11yViews: t, circles: n }
                            );
                        }, [a, y, h, m, f, s, p, c, E, w, g]),
                        T = (null !== h && a[h].popover) || null;
                    return r.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: b, enableEnterKeyToggle: !!T, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: v, onOpen: x, preferredVerticalOrientation: "up", renderContent: () => T }, r.createElement(l.Z, { "aria-label": k, focusable: !1, id: t, role: "application" }, r.createElement("svg", { height: i, onFocus: Z, onMouseOver: Z, style: { transform: "rotate(-90deg)" }, width: i }, S), C));
                },
                T = d.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                $ = ({ arcWidth: e = 0.4, data: t, legendPosition: a, radius: n, title: o, titleDescription: u }) => {
                    const d = (0, s.b)(),
                        m = Boolean(n),
                        [p, f] = r.useState(n ?? 1),
                        b = r.useMemo(() => Boolean(a && t.every((e) => Boolean(e?.label))), [t, a]),
                        y = r.useCallback(
                            ({ nativeEvent: e }) => {
                                !n && f(Math.floor(e.layout.width / 2));
                            },
                            [n],
                        ),
                        [v, x, E] = t.reduce(([e, t, a], r) => [Math.min(e, r.value), Math.max(t, r.value), a + r.value], [1 / 0, -1 / 0, 0]),
                        w = V(v / E),
                        C = V(x / E),
                        B = r.useMemo(
                            () =>
                                ((e) => {
                                    const t = e.reduce((e, t) => e + t.value, 0);
                                    let a = 0;
                                    const r = [];
                                    e.forEach((e, l) => {
                                        const n = Math.floor((1e3 * e.value) / t) / 1e3;
                                        (a += n), r.push({ ...e, value: n });
                                    });
                                    for (let e = 0; e < r.length; e++)
                                        if (0 !== r[e].value) {
                                            r[e].value += parseFloat((1 - a).toFixed(3));
                                            break;
                                        }
                                    return r;
                                })(t),
                            [t],
                        ),
                        D = r.useMemo(() => (b ? B.map(({ color: e, label: t, value: a }, l) => r.createElement(g, { color: e ?? I, key: t, label: t ?? "", size: "small", value: V(a) })) : []), [B, b]),
                        z = ((e, t, a) => {
                            switch (t) {
                                case "right":
                                    return { container: { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginStart: e ? i.Z.spaces.space24 : null }, pie: !a && { flexGrow: 1 } };
                                case "top":
                                    return { container: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginBottom: i.Z.spaces.space24 }, pie: { width: "100%" } };
                                case "bottom":
                                    return { container: { flexDirection: "column-reverse", justifyContent: "center", alignItems: "center" }, legend: { flexDirection: "row", justifyContent: "center", marginTop: i.Z.spaces.space24 }, pie: { width: "100%" } };
                                default:
                                    return { container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, legend: { flexDirection: "column", justifyContent: "center", marginEnd: e ? i.Z.spaces.space24 : null }, pie: !a && { flexGrow: 1 } };
                            }
                        })(b, a, m);
                    return r.createElement(l.Z, { "aria-labelledby": d, role: "figure" }, o && r.createElement(l.Z, { style: T.titleBar }, r.createElement(c.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: T.title, weight: "heavy" }, o), u ? r.createElement(h.Z, { label: o, popover: u }) : null, r.createElement(Z, { chartTitle: o, maxValue: C, minValue: w, noOfCategories: t.length })), r.createElement(l.Z, { style: z.container }, b && r.createElement(l.Z, { style: [T.legend, z.legend] }, D), r.createElement(l.Z, { onLayout: y, style: [T.pie, z.pie] }, r.createElement(S, { arcWidth: e, chartId: d, data: B, radius: p }))));
                };
        },
        98996: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(536606),
                c = a(157130),
                s = a(392237);
            const u = o().h39fbf33,
                d = o().c778d80b;
            const m = s.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                p = (e) => {
                    const { barConfig: t, data: a, style: n } = e,
                        { normalizer: o, valueLabelsFormatter: s } = (function (e, t) {
                            const a = (function (e, t) {
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
                                r = e?.valueLabelsFormatter ?? d;
                            return { normalizer: a, valueLabelsFormatter: r };
                        })(t, a),
                        p = u({ minValue: s(Math.min(...a.map((e) => e.value)) / o), maxValue: s(Math.max(...a.map((e) => e.value)) / o) }),
                        g = r.useCallback((e) => () => e.popover ?? null, []),
                        h = a.map((e, a) => {
                            const { icon: n, label: u, value: d } = e;
                            if (!u) return null;
                            const p = s(d / o),
                                h = (function (e, t) {
                                    const a = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return a;
                                })(t, e),
                                f = (function (e) {
                                    return { label: e };
                                })(p),
                                b = g(e);
                            return r.createElement(c.Z, { contentStyle: m.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${a}Popover`, preferredVerticalOrientation: "up", renderContent: b, withArrow: !0 }, r.createElement(l.Z, { focusable: !0 }, r.createElement(i.Z, { decoration: n, isCompact: !0, key: `progressBar${a}`, progressBarConfig: h, statConfig: f, title: u, valueCurrent: d, valueMax: o })));
                        });
                    return r.createElement(l.Z, { "aria-label": p, focusable: !0, role: "figure", style: [m.chart, n] }, h);
                };
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                l = a(325686),
                n = a(392237);
            function o({ spacing: e, style: t }) {
                return r.createElement(l.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(807896),
                l = a(202784),
                n = a(325686),
                o = a(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...o } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, a && c.withGutterColumn] }));
                    return l.createElement(n.Z, (0, r.Z)({ style: [t, c.root, a && c.withGutter] }, o), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const c = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                s = i;
        },
        536606: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                l = a(325686),
                n = a(731708),
                o = a(352924),
                i = a(822399),
                c = a(98538),
                s = a(392237);
            const u = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: u, statConfig: m, title: p, valueCurrent: g, valueMax: h } = e,
                    f = (0, o.F)(),
                    b = ((y = u), s.default.theme.colors[y?.color || "blue900"]);
                var y;
                const v = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(u),
                    x = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"], height: s.default.theme.spaces[e?.height || "space8"], backgroundColor: s.default.theme.colors.gray50 };
                    })(u);
                return r.createElement(l.Z, { style: d.root }, r.createElement(l.Z, { style: d.decoration }, t), r.createElement(l.Z, { style: d.title }, r.createElement(n.ZP, { size: "subtext2", weight: "medium" }, p)), r.createElement(l.Z, { id: f, style: d.valueLabel }, m.value ? r.createElement(c.Z, null, r.createElement(c.Z.Value, null, m.value), r.createElement(c.Z.Label, null, m.label)) : r.createElement(n.ZP, { weight: "bold" }, m.label)), r.createElement(l.Z, { style: a ? d.progressBarContainerCompact : d.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(i.Z, { "aria-describedby": f, "aria-valuemax": h, colorValue: b, progress: g / h, progressStyle: v, style: x })));
            };
            const d = s.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(u);
        },
        689107: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        123588: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-bc6ccf4c.348b1d8a.js.map

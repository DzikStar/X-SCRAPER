"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-bc6ccf4c"],
    {
        595294: (e, t, a) => {
            a.d(t, { Z: () => J });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(731708),
                s = a(352924),
                c = a(392237),
                u = a(161104),
                d = a(635998),
                p = a(689107),
                m = a(154003),
                h = a(157130);
            const g = o().iab73d4b,
                f = o().ha20397c,
                y = o().baf7a43c,
                b = o().e8f674ab,
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
                    const { chartTitle: t, chartType: a, maxValue: n, minValue: o, noOfCategories: s, playAudioChart: c } = e,
                        u = b({ chartTitle: t, chartType: a, minValue: g(o), maxValue: g(n), noOfCategories: g(s) });
                    return r.createElement(l.Z, null, r.createElement(h.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { "aria-label": u, role: "dialog", style: C.popover }, r.createElement(l.Z, { style: C.popoverTitle }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, y)), r.createElement(l.Z, { style: C.popoverText }, r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, u)), c ? r.createElement(m.ZP, { "aria-label": x, onPress: c, style: C.audioChartButton, type: "primaryFilled" }, v) : null, r.createElement(m.ZP, { onPress: e, type: "primaryOutlined" }, E)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(p.default, { "aria-label": f, style: C.audioChartIcon }))));
                },
                C = c.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, audioChartButton: { marginBottom: e.spaces.space8 }, audioChartIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                D = { borderRadii: "xSmall", layout: "fixedSpacing", spacing: "space2", width: "space56" };
            Object.freeze({ fixedBarWidth: "fixedBarWidth", fixedSpacing: "fixedSpacing" });
            var B = a(614983),
                V = a.n(B);
            const P = (e, t, a) => (100 * (e - a)) / (t - a),
                T = (e) => [].concat(...e.map((e) => (void 0 !== e.value ? e.value : e.values.map((e) => e.value)))),
                k = (e) => e.map((e) => e.values.map((e) => e.value).reduce((e, t) => e + t)),
                I = (e) => (t) => e.popover ?? null,
                $ = o().dec1d7ef,
                z = o().f765bead,
                A = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef([]),
                        i = { ...D, ...e },
                        s = "fixedBarWidth" === i.layout,
                        [u, d] = r.useState(null),
                        p = (e, t, a) => c.default.create(() => ({ style: { flex: s ? null : 1, height: `${P(t.value, a, n)}%`, width: s ? `calc(${c.default.theme.spaces[i.width]} / ${e.values.length})` : 100 / e.values.length + "%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[i.borderRadii], marginHorizontal: c.default.theme.spaces.space2, ...(!!e.popover && { cursor: "pointer" }) } })).style,
                        m = { height: "100%", display: "flex", flex: 1, justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", marginHorizontal: c.default.theme.spaces[i.spacing] },
                        g = (e) => {
                            u === e && d(null);
                        };
                    return t.map((e, i) => {
                        o.current?.push([]);
                        const c = e.values.map((e) => e.value).reduce((e, t) => Math.max(e, t)),
                            f = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${i}`, style: [m, ((y = i), null !== u ? (y === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })], testID: `barGroup${i}` },
                            r.createElement(
                                h.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !f, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", key: `barGroup${i}`, onDismiss: () => g(i), onHoverCardUnmount: () => g(i), onOpen: () => d(i), preferredVerticalOrientation: "up", renderContent: I(e), withArrow: !0, wrapperStyle: { flex: s ? null : 1, flexDirection: "row", alignItems: "flex-end", width: "100%", height: `${P(c, a, n)}%` } },
                                e.values.map((a, n) => {
                                    const s = e.label ? $({ label: e.label?.props.children, group: a.group, value: a.value }) : z({ group: a.group, value: a.value });
                                    return r.createElement(l.Z, {
                                        "aria-label": s,
                                        focusable: !0,
                                        key: `barGroup${n}Bar${n}`,
                                        onKeyDown: (e) => {
                                            w(e, i, n, o, t.length);
                                        },
                                        ref: (e) => o.current?.[i]?.push(e),
                                        role: "img",
                                        style: p(e, a, c),
                                        testID: `barGroup${i}Bar${n}`,
                                    });
                                }),
                            ),
                        );
                        var y;
                    });
                },
                S = o().idea1817,
                W = o().fe94be6b,
                R = c.default.create((e) => ({ normalBarWrapper: { height: "100%", flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" } })),
                G = ({ audioChartGenerator: e, barConfig: t, data: a, frequencies: n, maxValue: o, minValue: i }) => {
                    const s = r.useRef(Array.from({ length: a.length }, () => null)),
                        u = (e) => (t) => {
                            const a = s?.current;
                            a && (a[e] = t), (s.current = a);
                        },
                        [d, p] = r.useState(null),
                        m = { ...D, ...t },
                        g = "fixedBarWidth" === m.layout,
                        f = (e) => ({ flex: g ? null : 1, height: `${P(e.value, o, i)}%`, width: g ? c.default.theme.spaces[m.width] : "auto", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: e.color ? c.default.theme.colors[e.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[m.borderRadii], marginHorizontal: c.default.theme.spaces[m.spacing], ...(!!e.popover && { cursor: "pointer" }) }),
                        y = (e) => {
                            d === e && p(null);
                        };
                    return a.map((t, o) => {
                        const i = t.label ? S({ label: t.label, value: t.value }) : W({ value: t.value }),
                            c = !!t.popover;
                        return r.createElement(
                            l.Z,
                            { key: `normalBarWrapper${o}`, style: [R.normalBarWrapper, ((m = o), null !== d ? (m === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })] },
                            r.createElement(
                                h.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !c, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => y(o), onHoverCardUnmount: () => y(o), onOpen: () => p(o), preferredVerticalOrientation: "up", renderContent: I(t), withArrow: !0, wrapperStyle: f(t) },
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
                                            })(t.key, o, s, a.length);
                                    },
                                    ref: u(o),
                                    role: "img",
                                    style: f(t),
                                    testID: `bar${o}`,
                                }),
                            ),
                        );
                        var m;
                    });
                },
                M = o().dec1d7ef,
                O = o().f765bead,
                H = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef(Array.from({ length: t.length }, () => [])),
                        i = (e, t) => (a) => {
                            const r = o?.current;
                            r && (r[e][t] = a), (o.current = r);
                        },
                        s = { ...D, ...e },
                        u = "fixedBarWidth" === s.layout,
                        [d, p] = r.useState(null),
                        m = (e, t) => ({ height: `${P(t.value, a, n)}%`, width: u ? c.default.theme.spaces[s.width] : "100%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[s.borderRadii], marginTop: c.default.theme.spaces.space2 }),
                        g = (e) => {
                            d === e && p(null);
                        };
                    return t.map((e, a) => {
                        o.current?.push([]);
                        const n = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${a}`, style: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center", marginHorizontal: c.default.theme.spaces[s.spacing], ...((u = a), null !== d ? (u === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }), ...(n && { cursor: "pointer" }) }, testID: `barGroup${a}` },
                            r.createElement(
                                h.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !n, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => g(a), onHoverCardUnmount: () => g(a), onOpen: () => p(a), preferredVerticalOrientation: "up", renderContent: I(e), withArrow: !0, wrapperStyle: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center" } },
                                e.values.map((n, s) => {
                                    const c = e.label ? M({ label: e.label?.props.children, group: n.group, value: n.value }) : O({ group: n.group, value: n.value });
                                    return r.createElement(l.Z, {
                                        "aria-label": c,
                                        focusable: !0,
                                        key: `barGroup${s}Bar${s}`,
                                        onKeyDown: (e) => {
                                            w(e, a, s, o, t.length);
                                        },
                                        ref: i(a, s),
                                        role: "img",
                                        style: m(0, n),
                                        testID: `barGroup${a}Bar${s}`,
                                    });
                                }),
                            ),
                        );
                        var u;
                    });
                },
                L = o().ef8b2f54,
                K = o().d567ceda,
                q = o().f7b30768,
                _ = o().hcd54328,
                j = ({ gridlines: e, maxValue: t, minValue: a }) => (e ? e.map((e, n) => r.createElement(l.Z, { key: `gridline${n}`, style: [N.gridLine, { bottom: `${P(e, t, a)}%` }], testID: `gridline${n}` })) : null),
                F = ({ data: e, labelStyle: t }) => (e ? e.map((e, a) => ("string" == typeof e.label ? r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: N.label }, r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2", style: [{ marginTop: c.default.theme.spaces.space8 }, t], weight: "medium" }, e.label)) : r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: N.label }, e.label))) : null),
                U = ({ maxValue: e, minValue: t, ticks: a }) => {
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
                        const i = 0 === n ? P(a.value, e, t) : (100 * (a.value - o[n - 1].value)) / (e - t);
                        return r.createElement(l.Z, { "aria-hidden": !0, key: `tick${n}`, style: { position: "relative", height: `${i}%`, paddingBottom: "0.75em" } }, a.label);
                    });
                },
                N = c.default.create((e) => ({ title: { color: e.colors.gray700, marginBottom: "1em" }, titleBar: { display: "flex", flexDirection: "row" }, grid: { display: "grid", gridTemplateColumns: "1fr auto", gridTemplateRows: "1fr auto", width: "100%", minWidth: "100px", height: `calc(${e.spaces.space56} * 2)`, padding: e.spaces.space4 }, chartArea: { position: "relative", height: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }, gridLine: { position: "absolute", width: "100%", height: 1, backgroundColor: e.colors.gray200 }, yAxis: { height: "100%", position: "relative", display: "flex", flexDirection: "column-reverse", marginStart: e.spaces.space12 }, xAxis: { display: "flex", flexDirection: "row" }, label: { flex: 1 } })),
                J = ({ audioChart: e = !1, barConfig: t, data: a, dataGrouped: n, gridlines: o, labelStyle: c, stacked: p = !1, style: m, ticks: h, title: g, titleDescription: f }) => {
                    const y = (0, s.b)();
                    let b, v, x, E, w;
                    const C = r.useRef();
                    C.current || (C.current = new u.Z());
                    const D = h ? h.map((e) => e.value) : [],
                        B = ((e, t, a) => (void 0 !== e ? T(e) : void 0 !== t ? (a ? k(t) : T(t)) : void V()(e || t, "Either data or groupedData props must be passed")))(a, n, p);
                    if (!B) return null;
                    const P = Math.max(...B, ...D),
                        I = Math.min(...B, ...D);
                    if (void 0 !== a)
                        (v = K),
                            (E = a.length),
                            e &&
                                ((x = C.current?.mapDataPointsToFrequencies([...B, ...D])),
                                (w = () => {
                                    C?.current?.playDisconnectedDataPointsAsTone(a, 0.7, 0.3);
                                })),
                            (b = r.createElement(G, { audioChartGenerator: C, barConfig: t, data: a, frequencies: x, maxValue: P, minValue: I }));
                    else {
                        if (void 0 === n) return null;
                        (w = void 0), (E = n.length), p ? ((b = r.createElement(H, { barConfig: t, data: n, maxValue: P, minValue: I })), (v = q)) : ((b = r.createElement(A, { barConfig: t, data: n, maxValue: P, minValue: I })), (v = _));
                    }
                    return r.createElement(l.Z, { "aria-labelledby": y, role: "figure" }, g && r.createElement(l.Z, { style: N.titleBar }, r.createElement(i.ZP, { focusable: !1, id: y, role: "heading", size: "subtext2", style: N.title, weight: "medium" }, g), f ? r.createElement(d.Z, { label: g, popover: f }) : null, r.createElement(Z, { chartTitle: g, chartType: v, maxValue: P, minValue: I, noOfCategories: E, playAudioChart: w })), r.createElement(l.Z, { style: [N.grid, m] }, r.createElement(l.Z, { "aria-label": L, focusable: !1, key: "chartArea", role: "application", style: N.chartArea }, r.createElement(j, { gridlines: o, maxValue: P, minValue: I }), b), r.createElement(l.Z, { key: "yAxis", style: N.yAxis }, r.createElement(U, { maxValue: P, minValue: I, ticks: h })), r.createElement(l.Z, { key: "xAxis", style: N.xAxis }, r.createElement(F, { data: a || n, labelStyle: c }))));
                };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => Z });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(212145),
                s = a(568320),
                c = a(123588),
                u = a(731708),
                d = a(280278),
                p = a(392237),
                m = a(635998);
            const h = o().i2785009,
                g = o().c778d80b,
                f = o().d9687d23,
                y = o().ac73eb5a,
                b = o().c5a9f921,
                v = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? r.createElement(l.Z, { style: w.labelBar }, r.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? r.createElement(m.Z, { label: t, popover: a }) : null) : null;
                },
                x = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? r.createElement(u.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, a) : null;
                },
                E = (e) => {
                    let t,
                        a,
                        { trendValue: n } = e;
                    return void 0 === n ? null : (Math.abs(n) < 0.1 ? ((n = Math.round(1e3 * n) / 1e3), (t = g(n))) : ((n = Math.round(100 * n) / 100), (t = h(n))), (a = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? y : b({ trendValuePositivePercent: t })))(n, t)), n < 0 ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": a, style: w.trendIconNeg }), r.createElement(u.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === n ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": a, style: w.trendIconZero }), r.createElement(u.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": a, style: w.trendIconPos }), r.createElement(u.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: a, label: n, popover: o, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        h = p || void 0 !== c ? w.textWithMargin : void 0,
                        g = void 0 !== c ? w.textWithMargin : void 0;
                    return r.createElement(l.Z, { style: w.dataPoint }, r.createElement(v, { label: n, popover: o }), r.createElement(l.Z, { style: w.valueBar }, t ? r.createElement(d.ZP, { count: a, size: i, style: h, weight: "bold" }, m) : r.createElement(u.ZP, { size: i, style: h, weight: "bold" }, m), r.createElement(x, { style: g, unit: p }), r.createElement(E, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                o = a.n(n),
                i = a(711223),
                s = a(731708),
                c = a(154003),
                u = a(157130),
                d = a(392237);
            const p = o().affbaf62,
                m = o().c388d026,
                h = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: a } = e;
                    return r.createElement(l.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { role: "dialog", style: h.popover }, r.createElement(l.Z, { style: h.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(l.Z, { style: h.popoverText }, a), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(i.default, { "aria-label": p, style: h.iconInformation }))));
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
        879113: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                l = a(476984),
                n = a.n(l),
                o = a(143778),
                i = a(750410),
                s = a(682830);
            const c = "failed",
                u = "loaded",
                d = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: l, icon: n, loadingMessage: o, onRequestRetry: u, render: m, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (l) {
                        case c:
                            return f ? r.createElement(i.Z, { icon: n, onRequestRetry: u, retryMessage: g }) : a ? r.createElement(s.m, { failureMessage: a }) : h();
                        case d:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: o });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                l = a(202784),
                n = a(325686),
                o = a(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...o } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return l.createElement(n.Z, (0, r.Z)({ style: [t, s.root, a && s.withGutter] }, o), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        123588: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                l = a(890601),
                n = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-bc6ccf4c.ed3319ba.js.map

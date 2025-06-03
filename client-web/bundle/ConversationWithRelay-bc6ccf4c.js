"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-bc6ccf4c"],
    {
        595294: (e, t, a) => {
            a.d(t, { Z: () => J });
            var r = a(202784),
                n = a(325686),
                l = a(111677),
                o = a.n(l),
                i = a(731708),
                s = a(352924),
                c = a(392237),
                u = a(161104),
                d = a(635998),
                p = a(689107),
                m = a(154003),
                g = a(157130);
            const f = o().iab73d4b,
                h = o().ha20397c,
                y = o().baf7a43c,
                b = o().e8f674ab,
                x = o().d969327c,
                v = o().d8cbbcd4,
                E = o().af8fa2ae;
            function w(e, t, a, r, n) {
                const l = e.key,
                    o = r?.current?.[t] ? r.current[t].length : 0;
                if ("ArrowRight" === l)
                    if ((e.preventDefault(), a >= o - 1)) {
                        const e = t + 1 >= n ? 0 : t + 1;
                        r?.current?.[e]?.[0]?.focus();
                    } else r?.current?.[t]?.[a + 1]?.focus();
                else if ("ArrowLeft" === l)
                    if ((e.preventDefault(), 0 === a)) {
                        const e = t - 1 < 0 ? n - 1 : t - 1,
                            a = r?.current?.[e] ? r.current[e].length : 1;
                        r?.current?.[e]?.[a - 1]?.focus();
                    } else r?.current?.[t]?.[a - 1]?.focus();
            }
            const Z = (e) => {
                    const { chartTitle: t, chartType: a, maxValue: l, minValue: o, noOfCategories: s, playAudioChart: c } = e,
                        u = b({ chartTitle: t, chartType: a, minValue: f(o), maxValue: f(l), noOfCategories: f(s) });
                    return r.createElement(n.Z, null, r.createElement(g.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(n.Z, { "aria-label": u, role: "dialog", style: C.popover }, r.createElement(n.Z, { style: C.popoverTitle }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, y)), r.createElement(n.Z, { style: C.popoverText }, r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, u)), c ? r.createElement(m.ZP, { "aria-label": v, onPress: c, style: C.audioChartButton, type: "primaryFilled" }, x) : null, r.createElement(m.ZP, { onPress: e, type: "primaryOutlined" }, E)), withArrow: !0 }, r.createElement(n.Z, { role: "button" }, r.createElement(p.default, { "aria-label": h, style: C.audioChartIcon }))));
                },
                C = c.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, audioChartButton: { marginBottom: e.spaces.space8 }, audioChartIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                T = { borderRadii: "xSmall", layout: "fixedSpacing", spacing: "space2", width: "space56" };
            Object.freeze({ fixedBarWidth: "fixedBarWidth", fixedSpacing: "fixedSpacing" });
            var D = a(614983),
                B = a.n(D);
            const P = (e, t, a) => (100 * (e - a)) / (t - a),
                V = (e) => [].concat(...e.map((e) => (void 0 !== e.value ? e.value : e.values.map((e) => e.value)))),
                z = (e) => e.map((e) => e.values.map((e) => e.value).reduce((e, t) => e + t)),
                $ = (e) => (t) => e.popover ?? null,
                k = o().dec1d7ef,
                I = o().f765bead,
                A = ({ barConfig: e, data: t, maxValue: a, minValue: l }) => {
                    const o = r.useRef([]),
                        i = { ...T, ...e },
                        s = "fixedBarWidth" === i.layout,
                        [u, d] = r.useState(null),
                        p = (e, t, a) => c.default.create(() => ({ style: { flex: s ? null : 1, height: `${P(t.value, a, l)}%`, width: s ? `calc(${c.default.theme.spaces[i.width]} / ${e.values.length})` : 100 / e.values.length + "%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[i.borderRadii], marginHorizontal: c.default.theme.spaces.space2, ...(!!e.popover && { cursor: "pointer" }) } })).style,
                        m = { height: "100%", display: "flex", flex: 1, justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", marginHorizontal: c.default.theme.spaces[i.spacing] },
                        f = (e) => {
                            u === e && d(null);
                        };
                    return t.map((e, i) => {
                        o.current?.push([]);
                        const c = e.values.map((e) => e.value).reduce((e, t) => Math.max(e, t)),
                            h = !!e.popover;
                        return r.createElement(
                            n.Z,
                            { key: `barGroup${i}`, style: [m, ((y = i), null !== u ? (y === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })], testID: `barGroup${i}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !h, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", key: `barGroup${i}`, onDismiss: () => f(i), onHoverCardUnmount: () => f(i), onOpen: () => d(i), preferredVerticalOrientation: "up", renderContent: $(e), withArrow: !0, wrapperStyle: { flex: s ? null : 1, flexDirection: "row", alignItems: "flex-end", width: "100%", height: `${P(c, a, l)}%` } },
                                e.values.map((a, l) => {
                                    const s = e.label ? k({ label: e.label?.props.children, group: a.group, value: a.value }) : I({ group: a.group, value: a.value });
                                    return r.createElement(n.Z, {
                                        "aria-label": s,
                                        focusable: !0,
                                        key: `barGroup${l}Bar${l}`,
                                        onKeyDown: (e) => {
                                            w(e, i, l, o, t.length);
                                        },
                                        ref: (e) => o.current?.[i]?.push(e),
                                        role: "img",
                                        style: p(e, a, c),
                                        testID: `barGroup${i}Bar${l}`,
                                    });
                                }),
                            ),
                        );
                        var y;
                    });
                },
                S = o().idea1817,
                W = o().fe94be6b,
                G = c.default.create((e) => ({ normalBarWrapper: { height: "100%", flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" } })),
                R = ({ audioChartGenerator: e, barConfig: t, data: a, frequencies: l, maxValue: o, minValue: i }) => {
                    const s = r.useRef(Array.from({ length: a.length }, () => null)),
                        u = (e) => (t) => {
                            const a = s?.current;
                            a && (a[e] = t), (s.current = a);
                        },
                        [d, p] = r.useState(null),
                        m = { ...T, ...t },
                        f = "fixedBarWidth" === m.layout,
                        h = (e) => ({ flex: f ? null : 1, height: `${P(e.value, o, i)}%`, width: f ? c.default.theme.spaces[m.width] : "auto", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: e.color ? c.default.theme.colors[e.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[m.borderRadii], marginHorizontal: c.default.theme.spaces[m.spacing], ...(!!e.popover && { cursor: "pointer" }) }),
                        y = (e) => {
                            d === e && p(null);
                        };
                    return a.map((t, o) => {
                        const i = t.label ? S({ label: t.label, value: t.value }) : W({ value: t.value }),
                            c = !!t.popover;
                        return r.createElement(
                            n.Z,
                            { key: `normalBarWrapper${o}`, style: [G.normalBarWrapper, ((m = o), null !== d ? (m === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })] },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !c, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => y(o), onHoverCardUnmount: () => y(o), onOpen: () => p(o), preferredVerticalOrientation: "up", renderContent: $(t), withArrow: !0, wrapperStyle: h(t) },
                                r.createElement(n.Z, {
                                    "aria-label": i,
                                    focusable: 0 === o,
                                    key: `bar${o}`,
                                    onKeyDown: (t) => {
                                        "a" === t.key &&
                                            ((t) => {
                                                l && e?.current?.playFrequencyAsTone(l?.[t], 0.7, 0.3);
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
                                    style: h(t),
                                    testID: `bar${o}`,
                                }),
                            ),
                        );
                        var m;
                    });
                },
                M = o().dec1d7ef,
                H = o().f765bead,
                O = ({ barConfig: e, data: t, maxValue: a, minValue: l }) => {
                    const o = r.useRef(Array.from({ length: t.length }, () => [])),
                        i = (e, t) => (a) => {
                            const r = o?.current;
                            r && (r[e][t] = a), (o.current = r);
                        },
                        s = { ...T, ...e },
                        u = "fixedBarWidth" === s.layout,
                        [d, p] = r.useState(null),
                        m = (e, t) => ({ height: `${P(t.value, a, l)}%`, width: u ? c.default.theme.spaces[s.width] : "100%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[s.borderRadii], marginTop: c.default.theme.spaces.space2 }),
                        f = (e) => {
                            d === e && p(null);
                        };
                    return t.map((e, a) => {
                        o.current?.push([]);
                        const l = !!e.popover;
                        return r.createElement(
                            n.Z,
                            { key: `barGroup${a}`, style: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center", marginHorizontal: c.default.theme.spaces[s.spacing], ...((u = a), null !== d ? (u === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }), ...(l && { cursor: "pointer" }) }, testID: `barGroup${a}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !l, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => f(a), onHoverCardUnmount: () => f(a), onOpen: () => p(a), preferredVerticalOrientation: "up", renderContent: $(e), withArrow: !0, wrapperStyle: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center" } },
                                e.values.map((l, s) => {
                                    const c = e.label ? M({ label: e.label?.props.children, group: l.group, value: l.value }) : H({ group: l.group, value: l.value });
                                    return r.createElement(n.Z, {
                                        "aria-label": c,
                                        focusable: !0,
                                        key: `barGroup${s}Bar${s}`,
                                        onKeyDown: (e) => {
                                            w(e, a, s, o, t.length);
                                        },
                                        ref: i(a, s),
                                        role: "img",
                                        style: m(0, l),
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
                j = ({ gridlines: e, maxValue: t, minValue: a }) => (e ? e.map((e, l) => r.createElement(n.Z, { key: `gridline${l}`, style: [U.gridLine, { bottom: `${P(e, t, a)}%` }], testID: `gridline${l}` })) : null),
                F = ({ data: e, labelStyle: t }) => (e ? e.map((e, a) => ("string" == typeof e.label ? r.createElement(n.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2", style: [{ marginTop: c.default.theme.spaces.space8 }, t], weight: "medium" }, e.label)) : r.createElement(n.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, e.label))) : null),
                N = ({ maxValue: e, minValue: t, ticks: a }) => {
                    const l =
                            a ||
                            ((e, t) => {
                                const a = t + (e - t) / 2;
                                return [
                                    { value: t, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, t) },
                                    { value: a, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, a) },
                                    { value: e, label: r.createElement(i.ZP, { color: "gray700", size: "subtext3", weight: "medium" }, e) },
                                ];
                            })(e, t),
                        o = l.sort((e, t) => e.value - t.value);
                    return o.map((a, l) => {
                        const i = 0 === l ? P(a.value, e, t) : (100 * (a.value - o[l - 1].value)) / (e - t);
                        return r.createElement(n.Z, { "aria-hidden": !0, key: `tick${l}`, style: { position: "relative", height: `${i}%`, paddingBottom: "0.75em" } }, a.label);
                    });
                },
                U = c.default.create((e) => ({ title: { color: e.colors.gray700, marginBottom: "1em" }, titleBar: { display: "flex", flexDirection: "row" }, grid: { display: "grid", gridTemplateColumns: "1fr auto", gridTemplateRows: "1fr auto", width: "100%", minWidth: "100px", height: `calc(${e.spaces.space56} * 2)`, padding: e.spaces.space4 }, chartArea: { position: "relative", height: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }, gridLine: { position: "absolute", width: "100%", height: 1, backgroundColor: e.colors.gray200 }, yAxis: { height: "100%", position: "relative", display: "flex", flexDirection: "column-reverse", marginStart: e.spaces.space12 }, xAxis: { display: "flex", flexDirection: "row" }, label: { flex: 1 } })),
                J = ({ audioChart: e = !1, barConfig: t, data: a, dataGrouped: l, gridlines: o, labelStyle: c, stacked: p = !1, style: m, ticks: g, title: f, titleDescription: h }) => {
                    const y = (0, s.b)();
                    let b, x, v, E, w;
                    const C = r.useRef();
                    C.current || (C.current = new u.Z());
                    const T = g ? g.map((e) => e.value) : [],
                        D = ((e, t, a) => (void 0 !== e ? V(e) : void 0 !== t ? (a ? z(t) : V(t)) : void B()(e || t, "Either data or groupedData props must be passed")))(a, l, p);
                    if (!D) return null;
                    const P = Math.max(...D, ...T),
                        $ = Math.min(...D, ...T);
                    if (void 0 !== a)
                        (x = K),
                            (E = a.length),
                            e &&
                                ((v = C.current?.mapDataPointsToFrequencies([...D, ...T])),
                                (w = () => {
                                    C?.current?.playDisconnectedDataPointsAsTone(a, 0.7, 0.3);
                                })),
                            (b = r.createElement(R, { audioChartGenerator: C, barConfig: t, data: a, frequencies: v, maxValue: P, minValue: $ }));
                    else {
                        if (void 0 === l) return null;
                        (w = void 0), (E = l.length), p ? ((b = r.createElement(O, { barConfig: t, data: l, maxValue: P, minValue: $ })), (x = q)) : ((b = r.createElement(A, { barConfig: t, data: l, maxValue: P, minValue: $ })), (x = _));
                    }
                    return r.createElement(n.Z, { "aria-labelledby": y, role: "figure" }, f && r.createElement(n.Z, { style: U.titleBar }, r.createElement(i.ZP, { focusable: !1, id: y, role: "heading", size: "subtext2", style: U.title, weight: "medium" }, f), h ? r.createElement(d.Z, { label: f, popover: h }) : null, r.createElement(Z, { chartTitle: f, chartType: x, maxValue: P, minValue: $, noOfCategories: E, playAudioChart: w })), r.createElement(n.Z, { style: [U.grid, m] }, r.createElement(n.Z, { "aria-label": L, focusable: !1, key: "chartArea", role: "application", style: U.chartArea }, r.createElement(j, { gridlines: o, maxValue: P, minValue: $ }), b), r.createElement(n.Z, { key: "yAxis", style: U.yAxis }, r.createElement(N, { maxValue: P, minValue: $, ticks: g })), r.createElement(n.Z, { key: "xAxis", style: U.xAxis }, r.createElement(F, { data: a || l, labelStyle: c }))));
                };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => Z });
            var r = a(202784),
                n = a(325686),
                l = a(111677),
                o = a.n(l),
                i = a(212145),
                s = a(568320),
                c = a(123588),
                u = a(731708),
                d = a(280278),
                p = a(392237),
                m = a(635998);
            const g = o().i2785009,
                f = o().c778d80b,
                h = o().d9687d23,
                y = o().ac73eb5a,
                b = o().c5a9f921,
                x = (e) => {
                    const { label: t, popover: a } = e;
                    return t ? r.createElement(n.Z, { style: w.labelBar }, r.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), a ? r.createElement(m.Z, { label: t, popover: a }) : null) : null;
                },
                v = (e) => {
                    const { style: t, unit: a } = e;
                    return a ? r.createElement(u.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, a) : null;
                },
                E = (e) => {
                    let t,
                        a,
                        { trendValue: l } = e;
                    return void 0 === l ? null : (Math.abs(l) < 0.1 ? ((l = Math.round(1e3 * l) / 1e3), (t = f(l))) : ((l = Math.round(100 * l) / 100), (t = g(l))), (a = ((e, t) => (e < 0 ? h({ trendValueNegativePercent: t }) : 0 === e ? y : b({ trendValuePositivePercent: t })))(l, t)), l < 0 ? r.createElement(n.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": a, style: w.trendIconNeg }), r.createElement(u.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === l ? r.createElement(n.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": a, style: w.trendIconZero }), r.createElement(u.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(n.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": a, style: w.trendIconPos }), r.createElement(u.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: a, label: l, popover: o, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        g = p || void 0 !== c ? w.textWithMargin : void 0,
                        f = void 0 !== c ? w.textWithMargin : void 0;
                    return r.createElement(n.Z, { style: w.dataPoint }, r.createElement(x, { label: l, popover: o }), r.createElement(n.Z, { style: w.valueBar }, t ? r.createElement(d.ZP, { count: a, size: i, style: g, weight: "bold" }, m) : r.createElement(u.ZP, { size: i, style: g, weight: "bold" }, m), r.createElement(v, { style: f, unit: p }), r.createElement(E, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(202784),
                n = a(325686),
                l = a(111677),
                o = a.n(l),
                i = a(711223),
                s = a(731708),
                c = a(154003),
                u = a(157130),
                d = a(392237);
            const p = o().affbaf62,
                m = o().c388d026,
                g = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                f = (e) => {
                    const { label: t, popover: a } = e;
                    return r.createElement(n.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(n.Z, { role: "dialog", style: g.popover }, r.createElement(n.Z, { style: g.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(n.Z, { style: g.popoverText }, a), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, r.createElement(n.Z, { role: "button" }, r.createElement(i.default, { "aria-label": p, style: g.iconInformation }))));
                };
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                n = a(325686),
                l = a(392237);
            function o({ spacing: e, style: t }) {
                return r.createElement(n.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                n = a(202784),
                l = a(325686),
                o = a(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...o } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, a && s.withGutterColumn] }));
                    return n.createElement(l.Z, (0, r.Z)({ style: [t, s.root, a && s.withGutter] }, o), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        280278: (e, t, a) => {
            a.d(t, { ZP: () => f });
            var r = a(202784),
                n = a(325686),
                l = a(827515),
                o = a(461756),
                i = a(731708),
                s = a(392237);
            const c = "up",
                u = "down",
                d = (e, t, a) => {
                    a((a) => {
                        const r = (0, l.Z)(e) ? (e > (a.count || 0) ? c : u) : c;
                        return { ...a, count: e, oldText: a.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: a, count: s, ...u } = e,
                        [f, h] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        y = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (y.current)
                                if (o.Z.reducedMotionEnabled) h((a) => ({ ...a, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, l.Z)(e.count) && f.count === e.count) ? h((e) => ({ ...e, pendingCount: null, pendingText: null })) : (h((a) => ({ ...a, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, h));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            y.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && h((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, h));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !o.Z.reducedMotionEnabled,
                                l = !f.animating && f.oldText && !o.Z.reducedMotionEnabled,
                                s = { ...m, ...(f.animating ? e.post : e.active) },
                                c = { ...(l ? e.pre : e.active) };
                            return r.createElement(
                                n.Z,
                                { style: [g.root, a] },
                                t ? r.createElement("span", { style: s }, r.createElement(i.ZP, u, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, h),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, u, f.text),
                                ),
                            );
                        }, [a, u, f, y, h])
                    );
                };
        },
        41065: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-bc6ccf4c.12b9604a.js.map

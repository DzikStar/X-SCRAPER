"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationWithRelay-1f1c1973"],
    {
        595294: (e, t, a) => {
            a.d(t, { Z: () => J });
            var r = a(202784),
                l = a(325686),
                n = a(674132),
                o = a.n(n),
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
                    const { chartTitle: t, chartType: a, maxValue: n, minValue: o, noOfCategories: s, playAudioChart: c } = e,
                        u = y({ chartTitle: t, chartType: a, minValue: f(o), maxValue: f(n), noOfCategories: f(s) });
                    return r.createElement(l.Z, null, r.createElement(g.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { "aria-label": u, role: "dialog", style: C.popover }, r.createElement(l.Z, { style: C.popoverTitle }, r.createElement(i.ZP, { size: "title3", weight: "heavy" }, b)), r.createElement(l.Z, { style: C.popoverText }, r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, u)), c ? r.createElement(m.ZP, { "aria-label": x, onPress: c, style: C.audioChartButton, type: "primaryFilled" }, v) : null, r.createElement(m.ZP, { onPress: e, type: "primaryOutlined" }, E)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(p.default, { "aria-label": h, style: C.audioChartIcon }))));
                },
                C = c.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, audioChartButton: { marginBottom: e.spaces.space8 }, audioChartIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                T = { borderRadii: "xSmall", layout: "fixedSpacing", spacing: "space2", width: "space56" };
            Object.freeze({ fixedBarWidth: "fixedBarWidth", fixedSpacing: "fixedSpacing" });
            var D = a(614983),
                B = a.n(D);
            const P = (e, t, a) => (100 * (e - a)) / (t - a),
                V = (e) => [].concat(...e.map((e) => (void 0 !== e.value ? e.value : e.values.map((e) => e.value)))),
                k = (e) => e.map((e) => e.values.map((e) => e.value).reduce((e, t) => e + t)),
                S = (e) => (t) => e.popover ?? null,
                I = o().dec1d7ef,
                $ = o().f765bead,
                z = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef([]),
                        i = { ...T, ...e },
                        s = "fixedBarWidth" === i.layout,
                        [u, d] = r.useState(null),
                        p = (e, t, a) => c.default.create(() => ({ style: { flex: s ? null : 1, height: `${P(t.value, a, n)}%`, width: s ? `calc(${c.default.theme.spaces[i.width]} / ${e.values.length})` : 100 / e.values.length + "%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[i.borderRadii], marginHorizontal: c.default.theme.spaces.space2, ...(!!e.popover && { cursor: "pointer" }) } })).style,
                        m = { height: "100%", display: "flex", flex: 1, justifyContent: "space-around", flexDirection: "row", alignItems: "flex-end", marginHorizontal: c.default.theme.spaces[i.spacing] },
                        f = (e) => {
                            u === e && d(null);
                        };
                    return t.map((e, i) => {
                        o.current?.push([]);
                        const c = e.values.map((e) => e.value).reduce((e, t) => Math.max(e, t)),
                            h = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${i}`, style: [m, ((b = i), null !== u ? (b === u ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })], testID: `barGroup${i}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !h, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", key: `barGroup${i}`, onDismiss: () => f(i), onHoverCardUnmount: () => f(i), onOpen: () => d(i), preferredVerticalOrientation: "up", renderContent: S(e), withArrow: !0, wrapperStyle: { flex: s ? null : 1, flexDirection: "row", alignItems: "flex-end", width: "100%", height: `${P(c, a, n)}%` } },
                                e.values.map((a, n) => {
                                    const s = e.label ? I({ label: e.label?.props.children, group: a.group, value: a.value }) : $({ group: a.group, value: a.value });
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
                        var b;
                    });
                },
                A = o().idea1817,
                M = o().fe94be6b,
                R = c.default.create((e) => ({ normalBarWrapper: { height: "100%", flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-around" } })),
                W = ({ audioChartGenerator: e, barConfig: t, data: a, frequencies: n, maxValue: o, minValue: i }) => {
                    const s = r.useRef(Array.from({ length: a.length }, () => null)),
                        u = (e) => (t) => {
                            const a = s?.current;
                            a && (a[e] = t), (s.current = a);
                        },
                        [d, p] = r.useState(null),
                        m = { ...T, ...t },
                        f = "fixedBarWidth" === m.layout,
                        h = (e) => ({ flex: f ? null : 1, height: `${P(e.value, o, i)}%`, width: f ? c.default.theme.spaces[m.width] : "auto", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: e.color ? c.default.theme.colors[e.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[m.borderRadii], marginHorizontal: c.default.theme.spaces[m.spacing], ...(!!e.popover && { cursor: "pointer" }) }),
                        b = (e) => {
                            d === e && p(null);
                        };
                    return a.map((t, o) => {
                        const i = t.label ? A({ label: t.label, value: t.value }) : M({ value: t.value }),
                            c = !!t.popover;
                        return r.createElement(
                            l.Z,
                            { key: `normalBarWrapper${o}`, style: [R.normalBarWrapper, ((m = o), null !== d ? (m === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 })] },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !c, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => b(o), onHoverCardUnmount: () => b(o), onOpen: () => p(o), preferredVerticalOrientation: "up", renderContent: S(t), withArrow: !0, wrapperStyle: h(t) },
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
                                    style: h(t),
                                    testID: `bar${o}`,
                                }),
                            ),
                        );
                        var m;
                    });
                },
                O = o().dec1d7ef,
                G = o().f765bead,
                H = ({ barConfig: e, data: t, maxValue: a, minValue: n }) => {
                    const o = r.useRef(Array.from({ length: t.length }, () => [])),
                        i = (e, t) => (a) => {
                            const r = o?.current;
                            r && (r[e][t] = a), (o.current = r);
                        },
                        s = { ...T, ...e },
                        u = "fixedBarWidth" === s.layout,
                        [d, p] = r.useState(null),
                        m = (e, t) => ({ height: `${P(t.value, a, n)}%`, width: u ? c.default.theme.spaces[s.width] : "100%", minWidth: c.default.theme.spaces.space1, maxWidth: "100%", backgroundColor: t.color ? c.default.theme.colors[t.color] : c.default.theme.colors.blue500, borderRadius: c.default.theme.borderRadii[s.borderRadii], marginTop: c.default.theme.spaces.space2 }),
                        f = (e) => {
                            d === e && p(null);
                        };
                    return t.map((e, a) => {
                        o.current?.push([]);
                        const n = !!e.popover;
                        return r.createElement(
                            l.Z,
                            { key: `barGroup${a}`, style: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center", marginHorizontal: c.default.theme.spaces[s.spacing], ...((u = a), null !== d ? (u === d ? { opacity: 1 } : { opacity: 0.5 }) : { opacity: 1 }), ...(n && { cursor: "pointer" }) }, testID: `barGroup${a}` },
                            r.createElement(
                                g.Z,
                                { contentStyle: { minWidth: 0 }, disabled: !n, enableEnterKeyToggle: !0, enableHover: !0, hoverDelay: "short", onDismiss: () => f(a), onHoverCardUnmount: () => f(a), onOpen: () => p(a), preferredVerticalOrientation: "up", renderContent: S(e), withArrow: !0, wrapperStyle: { height: "100%", display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column-reverse", alignItems: "center" } },
                                e.values.map((n, s) => {
                                    const c = e.label ? O({ label: e.label?.props.children, group: n.group, value: n.value }) : G({ group: n.group, value: n.value });
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
                F = o().d567ceda,
                j = o().f7b30768,
                K = o().hcd54328,
                q = ({ gridlines: e, maxValue: t, minValue: a }) => (e ? e.map((e, n) => r.createElement(l.Z, { key: `gridline${n}`, style: [U.gridLine, { bottom: `${P(e, t, a)}%` }], testID: `gridline${n}` })) : null),
                _ = ({ data: e, labelStyle: t }) => (e ? e.map((e, a) => ("string" == typeof e.label ? r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, r.createElement(i.ZP, { align: "center", color: "gray700", size: "subtext2", style: [{ marginTop: c.default.theme.spaces.space8 }, t], weight: "medium" }, e.label)) : r.createElement(l.Z, { "aria-hidden": !0, key: `label${a}`, style: U.label }, e.label))) : null),
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
                        const i = 0 === n ? P(a.value, e, t) : (100 * (a.value - o[n - 1].value)) / (e - t);
                        return r.createElement(l.Z, { "aria-hidden": !0, key: `tick${n}`, style: { position: "relative", height: `${i}%`, paddingBottom: "0.75em" } }, a.label);
                    });
                },
                U = c.default.create((e) => ({ title: { color: e.colors.gray700, marginBottom: "1em" }, titleBar: { display: "flex", flexDirection: "row" }, grid: { display: "grid", gridTemplateColumns: "1fr auto", gridTemplateRows: "1fr auto", width: "100%", minWidth: "100px", height: `calc(${e.spaces.space56} * 2)`, padding: e.spaces.space4 }, chartArea: { position: "relative", height: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }, gridLine: { position: "absolute", width: "100%", height: 1, backgroundColor: e.colors.gray200 }, yAxis: { height: "100%", position: "relative", display: "flex", flexDirection: "column-reverse", marginStart: e.spaces.space12 }, xAxis: { display: "flex", flexDirection: "row" }, label: { flex: 1 } })),
                J = ({ audioChart: e = !1, barConfig: t, data: a, dataGrouped: n, gridlines: o, labelStyle: c, stacked: p = !1, style: m, ticks: g, title: f, titleDescription: h }) => {
                    const b = (0, s.b)();
                    let y, v, x, E, w;
                    const C = r.useRef();
                    C.current || (C.current = new u.Z());
                    const T = g ? g.map((e) => e.value) : [],
                        D = ((e, t, a) => (void 0 !== e ? V(e) : void 0 !== t ? (a ? k(t) : V(t)) : void B()(e || t, "Either data or groupedData props must be passed")))(a, n, p);
                    if (!D) return null;
                    const P = Math.max(...D, ...T),
                        S = Math.min(...D, ...T);
                    if (void 0 !== a)
                        (v = F),
                            (E = a.length),
                            e &&
                                ((x = C.current?.mapDataPointsToFrequencies([...D, ...T])),
                                (w = () => {
                                    C?.current?.playDisconnectedDataPointsAsTone(a, 0.7, 0.3);
                                })),
                            (y = r.createElement(W, { audioChartGenerator: C, barConfig: t, data: a, frequencies: x, maxValue: P, minValue: S }));
                    else {
                        if (void 0 === n) return null;
                        (w = void 0), (E = n.length), p ? ((y = r.createElement(H, { barConfig: t, data: n, maxValue: P, minValue: S })), (v = j)) : ((y = r.createElement(z, { barConfig: t, data: n, maxValue: P, minValue: S })), (v = K));
                    }
                    return r.createElement(l.Z, { "aria-labelledby": b, role: "figure" }, f && r.createElement(l.Z, { style: U.titleBar }, r.createElement(i.ZP, { focusable: !1, id: b, role: "heading", size: "subtext2", style: U.title, weight: "medium" }, f), h ? r.createElement(d.Z, { label: f, popover: h }) : null, r.createElement(Z, { chartTitle: f, chartType: v, maxValue: P, minValue: S, noOfCategories: E, playAudioChart: w })), r.createElement(l.Z, { style: [U.grid, m] }, r.createElement(l.Z, { "aria-label": L, focusable: !1, key: "chartArea", role: "application", style: U.chartArea }, r.createElement(q, { gridlines: o, maxValue: P, minValue: S }), y), r.createElement(l.Z, { key: "yAxis", style: U.yAxis }, r.createElement(N, { maxValue: P, minValue: S, ticks: g })), r.createElement(l.Z, { key: "xAxis", style: U.xAxis }, r.createElement(_, { data: a || n, labelStyle: c }))));
                };
        },
        738545: (e, t, a) => {
            a.d(t, { ZP: () => Z });
            var r = a(202784),
                l = a(325686),
                n = a(674132),
                o = a.n(n),
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
                b = o().ac73eb5a,
                y = o().c5a9f921,
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
                    return void 0 === n ? null : (Math.abs(n) < 0.1 ? ((n = Math.round(1e3 * n) / 1e3), (t = f(n))) : ((n = Math.round(100 * n) / 100), (t = g(n))), (a = ((e, t) => (e < 0 ? h({ trendValueNegativePercent: t }) : 0 === e ? b : y({ trendValuePositivePercent: t })))(n, t)), n < 0 ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": a, style: w.trendIconNeg }), r.createElement(u.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === n ? r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(s.default, { "aria-label": a, style: w.trendIconZero }), r.createElement(u.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(l.Z, { style: w.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": a, style: w.trendIconPos }), r.createElement(u.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = p.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: a, label: n, popover: o, size: i, subTextList: s, trendValue: c, unit: p, value: m } = e,
                        g = p || void 0 !== c ? w.textWithMargin : void 0,
                        f = void 0 !== c ? w.textWithMargin : void 0;
                    return r.createElement(l.Z, { style: w.dataPoint }, r.createElement(v, { label: n, popover: o }), r.createElement(l.Z, { style: w.valueBar }, t ? r.createElement(d.ZP, { count: a, size: i, style: g, weight: "bold" }, m) : r.createElement(u.ZP, { size: i, style: g, weight: "bold" }, m), r.createElement(x, { style: f, unit: p }), r.createElement(E, { trendValue: c })), s);
                };
        },
        635998: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(202784),
                l = a(325686),
                n = a(674132),
                o = a.n(n),
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
                    return r.createElement(l.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { role: "dialog", style: g.popover }, r.createElement(l.Z, { style: g.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(l.Z, { style: g.popoverText }, a), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, m)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(i.default, { "aria-label": p, style: g.iconInformation }))));
                };
        },
        247291: (e, t, a) => {
            a.d(t, { Z: () => z });
            a(136728);
            var r = a(202784),
                l = a(325686),
                n = a(674132),
                o = a.n(n),
                i = a(27137),
                s = a(731708),
                c = a(352924),
                u = a(157130),
                d = a(392237);
            const p = Object.freeze({ large: 54, medium: 46, small: 36, xSmall: 12 }),
                m = d.default.create((e) => ({ column: { display: "flex", flexDirection: "column" }, row: { display: "flex", flexDirection: "row" }, svg: { width: `calc(${e.spaces.space4} + ${e.spaces.space2})`, maxHeight: `calc(${e.spaces.space56} - ${e.spaces.space2})`, marginEnd: `calc(${e.spaces.space4} + ${e.spaces.space2})`, alignItems: "center" }, title: { marginBottom: e.spaces.space2 } })),
                g = ({ color: e = "blue500", label: t, size: a = "large", value: n }) => {
                    const o = n ? a : "xSmall",
                        i = p[o],
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
                        })(o),
                        u = `0 0 6 ${i}`;
                    return r.createElement(l.Z, { style: m.row }, r.createElement(l.Z, { style: [m.svg, { height: i }, !c && { marginTop: d.default.theme.spaces.space2 }] }, r.createElement("svg", { height: "100%", preserveAspectRatio: "none", viewBox: u, width: "100%" }, r.createElement("rect", { fill: d.default.theme.colors[e], height: i, rx: 3, width: 6 }))), r.createElement(l.Z, { style: m.column }, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: m.title, weight: "medium" }, t), c && r.createElement(s.ZP, { size: c, weight: "bold" }, n)));
                };
            var f = a(635998),
                h = a(689107),
                b = a(154003);
            const y = o().iab73d4b,
                v = o().ha20397c,
                x = o().baf7a43c,
                E = o().h30a19bb,
                w = o().af8fa2ae;
            const Z = (e) => {
                    const { chartTitle: t, maxValue: a, minValue: n, noOfCategories: o } = e,
                        i = E({ chartTitle: t, minValue: n, maxValue: a, noOfCategories: y(o) });
                    return r.createElement(l.Z, null, r.createElement(u.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(l.Z, { "aria-label": i, role: "dialog", style: C.popover }, r.createElement(l.Z, { style: C.popoverTitle }, r.createElement(s.ZP, { size: "title3", weight: "heavy" }, x)), r.createElement(l.Z, { style: C.popoverText }, r.createElement(s.ZP, { color: "gray700", size: "body", weight: "normal" }, i)), r.createElement(b.ZP, { onPress: e, type: "primaryOutlined" }, w)), withArrow: !0 }, r.createElement(l.Z, { role: "button" }, r.createElement(h.default, { "aria-label": v, style: C.a11yIcon }))));
                },
                C = d.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, a11yIcon: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                T = (e, t, a = !1) => {
                    const r = 0 === t ? 0 : t * e - (a ? 1e-4 : 0);
                    return `${r} ${e - r}`;
                },
                D = (e, t) => "-" + t * e,
                B = o().c778d80b,
                P = o().idea1817,
                V = o().fe94be6b,
                k = o().ef8b2f54,
                S = "blue500",
                I = ({ arcWidth: e, chartId: t, data: a, radius: n }) => {
                    const o = r.useRef(Array.from({ length: a.length }, () => null)),
                        i = 2 * n,
                        s = e <= 0 ? 1 : Math.min(1, e) * (i / 2),
                        c = (i - s) / 2,
                        p = i / 2,
                        m = ((e) => 2 * Math.PI * e)(c),
                        {
                            focusSliceFromKeyboard: g,
                            focusedSlice: f,
                            forceHidePopover: h,
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
                                [s, c] = r.useState(!1),
                                u = r.useRef(void 0),
                                d = r.useCallback((e) => {
                                    a(e), i(!0);
                                }, []),
                                p = r.useCallback(() => {
                                    window.clearTimeout(u.current),
                                        n(!0),
                                        i(!1),
                                        (u.current = window.setTimeout(() => {
                                            n(!1);
                                        }, 10));
                                }, []),
                                m = r.useCallback(() => {
                                    s || i(!1);
                                }, [s]),
                                g = r.useCallback(
                                    (t) => {
                                        e[t].popover ? a(t) : n(!0);
                                    },
                                    [e],
                                ),
                                f = r.useCallback(() => {
                                    i(!0), c(!0);
                                }, []),
                                h = r.useCallback(() => {
                                    c(!1);
                                }, []);
                            return (
                                r.useEffect(
                                    () => () => {
                                        window.clearTimeout(u.current);
                                    },
                                    [],
                                ),
                                r.useMemo(() => ({ focusSliceFromKeyboard: d, forceHidePopover: p, onSliceBlur: m, onSliceMouseOver: g, onPopoverOpen: f, onPopoverClose: h, focusedSlice: t, isPopoverDisabled: l, isSliceHighlighted: o }), [d, t, p, l, o, h, f, m, g])
                            );
                        })(a),
                        Z = r.useCallback((e) => {
                            "circle" !== e.target.nodeName && e.stopPropagation();
                        }, []),
                        { a11yViews: C, circles: I } = r.useMemo(() => {
                            let e = 0;
                            const t = [],
                                n = [];
                            return (
                                a.forEach(({ color: i, label: u, popover: b, value: v }, x) => {
                                    const Z = u ? P({ value: B(v), label: u }) : V({ value: B(v) }),
                                        C = y && f !== x ? 0.5 : 1,
                                        k = b ? "pointer" : "default";
                                    var I;
                                    n.push(r.createElement("circle", { cx: p, cy: p, fill: "none", key: u ?? x, onBlur: h, onFocus: () => w(x), onMouseLeave: h, onMouseOver: () => w(x), r: c, stroke: d.default.theme.colors[i ?? S], strokeDasharray: T(m, v, x === a.length - 1), strokeDashoffset: D(m, e), strokeWidth: s, style: { opacity: C, cursor: k } })),
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
                                                    ((I = x),
                                                    (e) => {
                                                        const t = o?.current;
                                                        t && (t[I] = e), (o.current = t);
                                                    }),
                                                role: "img",
                                            }),
                                        ),
                                        (e += v);
                                }),
                                { a11yViews: t, circles: n }
                            );
                        }, [a, y, f, p, h, c, m, s, E, w, g]),
                        $ = (null !== f && a[f].popover) || null;
                    return r.createElement(u.Z, { contentStyle: { minWidth: 0 }, disabled: b, enableEnterKeyToggle: !!$, enableHover: !0, hoverDelay: "short", onHoverCardUnmount: v, onOpen: x, preferredVerticalOrientation: "up", renderContent: () => $ }, r.createElement(l.Z, { "aria-label": k, focusable: !1, id: t, role: "application" }, r.createElement("svg", { height: i, onFocus: Z, onMouseOver: Z, style: { transform: "rotate(-90deg)" }, width: i }, I), C));
                },
                $ = d.default.create((e) => ({ pie: { display: "flex", alignItems: "center" }, legend: { gap: e.spaces.space24 }, titleBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space20 }, title: { paddingVertical: e.spaces.space12 } })),
                z = ({ arcWidth: e = 0.4, data: t, legendPosition: a, radius: n, title: o, titleDescription: u }) => {
                    const d = (0, c.b)(),
                        p = Boolean(n),
                        [m, h] = r.useState(n ?? 1),
                        b = r.useMemo(() => Boolean(a && t.every((e) => Boolean(e?.label))), [t, a]),
                        y = r.useCallback(
                            ({ nativeEvent: e }) => {
                                !n && h(Math.floor(e.layout.width / 2));
                            },
                            [n],
                        ),
                        [v, x, E] = t.reduce(([e, t, a], r) => [Math.min(e, r.value), Math.max(t, r.value), a + r.value], [1 / 0, -1 / 0, 0]),
                        w = B(v / E),
                        C = B(x / E),
                        T = r.useMemo(
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
                        D = r.useMemo(() => (b ? T.map(({ color: e, label: t, value: a }, l) => r.createElement(g, { color: e ?? S, key: t, label: t ?? "", size: "small", value: B(a) })) : []), [T, b]),
                        P = ((e, t, a) => {
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
                        })(b, a, p);
                    return r.createElement(l.Z, { "aria-labelledby": d, role: "figure" }, o && r.createElement(l.Z, { style: $.titleBar }, r.createElement(s.ZP, { "aria-level": 1, role: "heading", size: "headline1", style: $.title, weight: "heavy" }, o), u ? r.createElement(f.Z, { label: o, popover: u }) : null, r.createElement(Z, { chartTitle: o, maxValue: C, minValue: w, noOfCategories: t.length })), r.createElement(l.Z, { style: P.container }, b && r.createElement(l.Z, { style: [$.legend, P.legend] }, D), r.createElement(l.Z, { onLayout: y, style: [$.pie, P.pie] }, r.createElement(I, { arcWidth: e, chartId: d, data: T, radius: m }))));
                };
        },
        98996: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                l = a(325686),
                n = a(674132),
                o = a.n(n),
                i = a(536606),
                s = a(157130),
                c = a(392237);
            const u = o().h39fbf33,
                d = o().c778d80b;
            const p = c.default.create((e) => ({ chart: { display: "flex", flex: 1 }, popover: { minWidth: 0 } })),
                m = (e) => {
                    const { barConfig: t, data: a, style: n } = e,
                        { normalizer: o, valueLabelsFormatter: c } = (function (e, t) {
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
                        m = u({ minValue: c(Math.min(...a.map((e) => e.value)) / o), maxValue: c(Math.max(...a.map((e) => e.value)) / o) }),
                        g = r.useCallback((e) => () => e.popover ?? null, []),
                        f = a.map((e, a) => {
                            const { icon: n, label: u, value: d } = e;
                            if (!u) return null;
                            const m = c(d / o),
                                f = (function (e, t) {
                                    const a = { color: t?.color, height: e?.height, borderRadii: e?.borderRadii };
                                    return a;
                                })(t, e),
                                h = (function (e) {
                                    return { label: e };
                                })(m),
                                b = g(e);
                            return r.createElement(s.Z, { contentStyle: p.popover, enableEnterKeyToggle: !!e.popover, enableHover: !0, hoverDelay: "short", key: `progressBar${a}Popover`, preferredVerticalOrientation: "up", renderContent: b, withArrow: !0 }, r.createElement(l.Z, { focusable: !0 }, r.createElement(i.Z, { decoration: n, isCompact: !0, key: `progressBar${a}`, progressBarConfig: f, statConfig: h, title: u, valueCurrent: d, valueMax: o })));
                        });
                    return r.createElement(l.Z, { "aria-label": m, focusable: !0, role: "figure", style: [p.chart, n] }, f);
                };
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
        536606: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                l = a(325686),
                n = a(731708),
                o = a(352924),
                i = a(822399),
                s = a(98538),
                c = a(392237);
            const u = (e) => {
                const { decoration: t, isCompact: a, progressBarConfig: u, statConfig: p, title: m, valueCurrent: g, valueMax: f } = e,
                    h = (0, o.F)(),
                    b = ((y = u), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const v = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(u),
                    x = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(u);
                return r.createElement(l.Z, { style: d.root }, r.createElement(l.Z, { style: d.decoration }, t), r.createElement(l.Z, { style: d.title }, r.createElement(n.ZP, { size: "subtext2", weight: "medium" }, m)), r.createElement(l.Z, { id: h, style: d.valueLabel }, p.value ? r.createElement(s.Z, null, r.createElement(s.Z.Value, null, p.value), r.createElement(s.Z.Label, null, p.label)) : r.createElement(n.ZP, { weight: "bold" }, p.label)), r.createElement(l.Z, { style: a ? d.progressBarContainerCompact : d.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(i.Z, { "aria-describedby": h, "aria-valuemax": f, colorValue: b, progress: g / f, progressStyle: v, style: x })));
            };
            const d = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                p = r.memo(u);
        },
        280278: (e, t, a) => {
            a.d(t, { ZP: () => f });
            var r = a(202784),
                l = a(325686),
                n = a(827515),
                o = a(461756),
                i = a(731708),
                s = a(392237);
            const c = "up",
                u = "down",
                d = (e, t, a) => {
                    a((a) => {
                        const r = (0, n.Z)(e) ? (e > (a.count || 0) ? c : u) : c;
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
                        b = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (b.current)
                                if (o.Z.reducedMotionEnabled) h((a) => ({ ...a, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, n.Z)(e.count) && f.count === e.count) ? h((e) => ({ ...e, pendingCount: null, pendingText: null })) : (h((a) => ({ ...a, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, h));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && h((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, h));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !o.Z.reducedMotionEnabled,
                                n = !f.animating && f.oldText && !o.Z.reducedMotionEnabled,
                                s = { ...m, ...(f.animating ? e.post : e.active) },
                                c = { ...(n ? e.pre : e.active) };
                            return r.createElement(
                                l.Z,
                                { style: [g.root, a] },
                                t ? r.createElement("span", { style: s }, r.createElement(i.ZP, u, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, h),
                                        style: c,
                                    },
                                    r.createElement(i.ZP, u, f.text),
                                ),
                            );
                        }, [a, u, f, b, h])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationWithRelay-1f1c1973.b955cb5a.js.map

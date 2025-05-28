"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-04134b17"],
    {
        378850: (e, t, a) => {
            a.d(t, { _: () => f });
            var s = a(552322),
                l = a(643715),
                r = a(829233),
                i = a(701883),
                n = a(941204),
                o = a(407250),
                c = a(598705);
            const { Bar: d, BarChart: m, CartesianGrid: x, XAxis: u, YAxis: h } = l;
            function p({ data: e, maxBarSize: t, intervalTicks: a, color: l, label: n }) {
                const o = { value: { color: l, label: n } },
                    p = (0, s.jsx)(r.dg, {
                        hideForKeys: ["incomplete"],
                        className: "text-subtext2",
                        labelClassName: "font-normal text-text",
                        labelFormatter: (e, [t]) => {
                            return t?.payload && ((a = t.payload.timestamp), new Date(a).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }));
                            var a;
                        },
                        valueFormatter: (e) => Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(e),
                    });
                return (0, s.jsx)(r.BO, {
                    config: o,
                    className: "h-full w-full pl-0",
                    children: (0, s.jsxs)(m, {
                        data: e,
                        margin: { top: 5, right: 10, left: -5, bottom: 15 },
                        height: 180,
                        children: [
                            (0, s.jsx)(x, { vertical: !1, strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))" }),
                            (0, s.jsx)(u, {
                                dataKey: "timestamp",
                                tickLine: !1,
                                axisLine: !1,
                                tickMargin: 6,
                                height: 30,
                                interval: a,
                                minTickGap: 20,
                                tickFormatter: (t) => {
                                    const a = new Date(t);
                                    return `${Math.round((a.getTime() - (e[0]?.timestamp || t)) / 36e5)}h`;
                                },
                                angle: 0,
                                textAnchor: "middle",
                                tick: { fill: "hsl(var(--colors-gray-500))", fontSize: 11 },
                            }),
                            (0, s.jsx)(h, { tickLine: !1, axisLine: !1, tickMargin: 2, width: 40, tick: { fill: "hsl(var(--colors-gray-600))", fontSize: 10 }, tickFormatter: (e) => (Number.isInteger(e) ? (0, c.uf)(e) : "") }),
                            (0, s.jsx)(r.h7, { content: p, cursor: (0, s.jsx)(i.d, {}) }),
                            (0, s.jsx)(d, { dataKey: "value", fill: l, radius: [4, 4, 0, 0], maxBarSize: t }),
                        ],
                    }),
                });
            }
            function f({ className: e, data: t, label: a, title: l }) {
                return (0, s.jsxs)(o.Zb, { className: `w-full ${e || ""}`, children: [(0, s.jsx)(o.Ol, { className: "pb-2 min-[987px]:pt-3 pt-2 h-[56px] min-[987px]:min-h-[56px] min-h-[66px]", children: (0, s.jsxs)("div", { className: "flex items-center justify-between align-top h-full", children: [(0, s.jsx)("div", { className: "flex items-center gap-3 -mt-1", children: (0, s.jsx)(n.x, { size: "headline2", className: "font-medium", children: l }) }), (0, s.jsx)("div", { className: "h-[36px] min-[987px]:block hidden" })] }) }), (0, s.jsx)(o.aY, { className: "pt-2 pb-2 pl-2 pr-2", children: (0, s.jsx)("div", { className: "w-full h-[180px]", children: (0, s.jsx)(p, { data: t, maxBarSize: 12, intervalTicks: 8, color: "hsl(var(--colors-blue-500))", label: a }) }) })] });
            }
        },
        326600: (e, t, a) => {
            a.d(t, { T: () => u });
            var s = a(552322),
                l = a(643715),
                r = a(829233),
                i = a(202784),
                n = a(598705);
            const { Area: o, AreaChart: c, CartesianGrid: d, XAxis: m, YAxis: x } = l;
            function u({ data: e, type: t = "number", label: a, granularity: l = "daily" }) {
                const u = (0, i.useMemo)(() => {
                        if (0 === e.length) return !1;
                        const t = e[0];
                        return t && "values" in t;
                    }, [e]),
                    h = (0, i.useMemo)(() => {
                        if (!u || 0 === e.length) return { metric: { color: "hsl(var(--colors-blue-500))", label: a } };
                        const t = e[0];
                        return t && "values" in t ? Object.fromEntries(Object.entries(t.values).map(([e, { color: t, label: a }]) => [e, { color: t, label: a }])) : { metric: { color: "hsl(var(--colors-blue-500))", label: a } };
                    }, [e, u, a]),
                    p = (0, i.useMemo)(() => (u ? e.map((e) => ({ ...Object.fromEntries(Object.entries(e.values).map(([e, { value: t }]) => [e, t])), timestamp: e.timestamp })) : e.map((e) => ({ metric: e.value, timestamp: e.timestamp }))), [e, u]),
                    f = (0, i.useMemo)(() => {
                        if (!u || 0 === e.length) return ["metric"];
                        const t = e[0];
                        return t && "values" in t ? Object.keys(t.values) : ["metric"];
                    }, [e, u]);
                return (0, s.jsx)(r.BO, {
                    config: h,
                    className: "relative aspect-[2/1] h-full max-h-[250px] min-h-[0] w-full select-none pe-2",
                    children: (0, s.jsxs)(c, {
                        data: p,
                        margin: { bottom: 5, left: -10, right: 5, top: 5 },
                        children: [
                            (0, s.jsx)("defs", { children: f.map((e) => (0, s.jsxs)("linearGradient", { id: `fill-${e}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [(0, s.jsx)("stop", { offset: "5%", stopColor: `var(--color-${e})`, stopOpacity: 0.8 }), (0, s.jsx)("stop", { offset: "95%", stopColor: `var(--color-${e})`, stopOpacity: 0 })] }, e)) }),
                            (0, s.jsx)(x, {
                                tickFormatter: (e) => {
                                    if ("time" === t || "duration" === t) {
                                        return `${Intl.NumberFormat("en-US", { compactDisplay: "short", maximumFractionDigits: 0, notation: "compact", roundingMode: "trunc" }).format((0, n.UM)(e))}${(0, n.sf)(e)}`;
                                    }
                                    return Intl.NumberFormat("en-US", { compactDisplay: "short", maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc", style: "percent" === t ? "percent" : "decimal" }).format(e);
                                },
                                tickLine: !1,
                                axisLine: !1,
                                className: "text-subtext3",
                                tick: { fill: "hsl(var(--colors-gray-600))" },
                            }),
                            (0, s.jsx)(d, { vertical: !1, strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))" }),
                            (0, s.jsx)(m, { dataKey: "timestamp", tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: "hourly" === l ? 60 : 32, className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" }, tickFormatter: (e) => (0, n.P)(+e, l) }),
                            (0, s.jsx)(r.h7, {
                                cursor: !1,
                                content: (0, s.jsx)(r.dg, {
                                    hideForKeys: ["incomplete"],
                                    className: "text-subtext2",
                                    labelClassName: "font-normal text-text",
                                    labelFormatter: (e) => (0, n.r2)(+e, l),
                                    valueFormatter: (e) => {
                                        if ("time" === t || "duration" === t) {
                                            return `${Intl.NumberFormat("en-US", { maximumFractionDigits: 1, roundingMode: "trunc" }).format((0, n.UM)(e))}${(0, n.sf)(e)}`;
                                        }
                                        return "revenue" === t ? (0, n.xy)(e, !1) : Intl.NumberFormat("en-US", { maximumFractionDigits: 2, style: "percent" === t ? "percent" : "decimal" }).format(e);
                                    },
                                }),
                            }),
                            f.map((e) => (0, s.jsx)(o, { type: "monotone", dataKey: e, fill: `url(#fill-${e})`, fillOpacity: 0.4, stroke: `var(--color-${e})`, stackId: "a", baseValue: 0 }, e)),
                        ],
                    }),
                });
            }
        },
        612047: (e, t, a) => {
            a.d(t, { f: () => n });
            var s = a(552322),
                l = a(446368),
                r = a(436059),
                i = a(240563);
            function n({ getCSVContent: e, filename: t, section: a = "", className: n = "h-8 shrink-0 px-1" }) {
                const o = (0, l.$8)();
                return (0, s.jsx)(r.z, {
                    variant: "primaryOutlined",
                    onClick: () => {
                        const s = e(),
                            l = new Blob([s], { type: "text/csv;charset=utf-8;" }),
                            r = document.createElement("a");
                        if (void 0 !== r.download) {
                            const e = URL.createObjectURL(l);
                            r.setAttribute("href", e), r.setAttribute("download", t), (r.style.visibility = "hidden"), document.body.appendChild(r), r.click(), document.body.removeChild(r), o.scribe({ action: "export", component: "CSVExportButton", page: "account_analytics", section: a });
                        }
                    },
                    size: "xSmallCompact",
                    className: n,
                    children: (0, s.jsx)(i.Z, { className: "mx-px size-5" }),
                });
            }
        },
        946839: (e, t, a) => {
            a.d(t, { q: () => n });
            var s = a(552322),
                l = a(323788),
                r = a(796309),
                i = a(202784);
            const n = ({ colorLabelClassName: e, disabled: t, options: a, placeholder: n, selected: o, setSelected: c }) => {
                const [d, m] = (0, i.useState)(0);
                return (0, s.jsxs)(
                    l.Ph,
                    {
                        value: "none" === o ? void 0 : o,
                        onValueChange: (e) => {
                            c(e), "none" === e && m(+new Date());
                        },
                        children: [(0, s.jsxs)(l.i4, { className: "bg-gray-0 text-subtext1 relative w-auto overflow-hidden font-bold", children: [o && "none" !== o && (0, s.jsx)("div", { className: (0, r.cn)("absolute left-0 top-0 h-full w-1.5", e) }), (0, s.jsx)(l.ki, { placeholder: n })] }), (0, s.jsx)(l.Bw, { children: a.map(({ icon: e, label: a, value: r }) => (0, s.jsx)(l.Ql, { value: r, disabled: r === t || ("none" === r && "none" === o), children: (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [e, a] }) }, r)) })],
                    },
                    d,
                );
            };
        },
        125839: (e, t, a) => {
            a.d(t, { t: () => o });
            var s = a(552322),
                l = a(422821),
                r = a(796309),
                i = a(202784),
                n = a(598705);
            function o({ className: e, label: t, secondaryValue: a, type: o = "number", valueNode: c, ...d }) {
                const [m, x] = (0, i.useState)(d.change ? 0 : null),
                    [u, h] = (0, i.useState)(0),
                    [p, f] = (0, i.useState)(!1),
                    b = m && m >= 0;
                return (
                    (0, i.useEffect)(() => {
                        d.change && x(d.change), h(d.value), f(!0);
                    }, [d.change, d.value]),
                    (0, s.jsxs)("div", { className: (0, r.cn)("relative flex flex-col", e), children: [(0, s.jsx)("div", { className: "mb-2 flex items-center h-4 justify-between gap-1 text-start text-subtext3 min-[388px]:text-subtext2 min-[407px]:text-subtext1 min-[988px]:text-body font-medium text-gray-900", children: t }), (0, s.jsxs)("div", { className: "text-text flex flex-nowrap items-baseline gap-2", children: [(0, s.jsx)("div", { className: "text-headline1 min-[388px]:text-title4 min-[407px]:text-title3 min-[988px]:text-title2 font-bold", style: { lineHeight: "duration" === o ? "var(--number-flow-char-height, 1em)" : void 0, padding: "duration" === o ? "var(--number-flow-mask-height, 0.25em) 0" : void 0 }, children: c || ("duration" === o ? (0, n.pI)(u) : (0, s.jsx)(l.P, { format: { compactDisplay: "short", maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc", style: "percent" === o ? "percent" : void 0 }, locales: "en-US", value: "time" === o ? (0, n.pD)(u) : u, className: p ? "" : "opacity-0" })) }), a && (0, s.jsxs)("span", { className: "text-subtext3 min-[407px]:text-subtext2 min-[988px]:text-subtext1 text-text font-normal", children: ["/ ", (0, s.jsx)(l.P, { format: { compactDisplay: "short", maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc" }, locales: "en-US", value: a })] }), d.change && m && (0, s.jsxs)("div", { className: `text-subtext3 min-[407px]:text-subtext2 min-[988px]:text-subtext1 flex flex-nowrap items-center gap-0.5 ${b ? "text-green-600" : "text-red-600"} ${p ? "" : "opacity-0"}`, children: [(0, s.jsxs)("span", { className: "shrink-0 transition-transform delay-500 duration-500 " + (p ? "" : "opacity-0"), children: [b ? "↑" : "↓", " "] }), (0, s.jsx)(l.P, { format: { compactDisplay: "short", maximumFractionDigits: Math.abs(m) < 0.1 ? 1 : 0, notation: "compact", roundingMode: "trunc", style: "percent" }, locales: "en-US", value: m })] })] })] })
                );
            }
        },
        85349: (e, t, a) => {
            a.d(t, { g: () => c });
            var s = a(552322),
                l = a(52053),
                r = a(796309),
                i = a(430962),
                n = a(125839),
                o = a(995961);
            function c({ info: e, className: t, disableInfoDialog: a, valueNode: c, disableBorder: d = !1, ...m }) {
                const { type: x = "number", secondaryValue: u, label: h, value: p } = m,
                    { analytics: f } = (0, i.M1)(),
                    b = (0, s.jsx)(n.t, { ...m, valueNode: c, className: (0, r.cn)(t, "cursor-pointer select-none bg-gray-0 pb-2 pe-1 ps-4 pt-4 [@media(hover:hover)]:hover:bg-gray-50", { "rounded-xl border border-gray-200": !d }), label: (0, s.jsxs)(s.Fragment, { children: [h, " ", "time" === x && `(${f.hours})`, !a && (0, s.jsx)("div", { className: "text-gray-500 [@media(hover:hover)]:hidden text-body", children: (0, s.jsx)(l.Z, {}) })] }) });
                return a ? b : (0, s.jsxs)(o.cu, { children: [(0, s.jsx)(o.ag, { children: b }), (0, s.jsx)(o.hC, { title: h, description: e, children: "percent" !== x && "duration" !== x && (0, s.jsxs)("p", { className: "text-headline2 text-text flex items-baseline gap-2 pt-4 font-bold", children: [c || Intl.NumberFormat("en-US", { maximumFractionDigits: 1, roundingMode: "trunc", style: "decimal" }).format("time" === x ? p / 1e3 / 60 / 60 : p), "time" === x && (0, s.jsx)("div", { className: "font-normal text-body", children: f.hours }), u && 0 !== u && p <= u && (0, s.jsxs)("span", { className: "text-subtext1 text-text font-normal", children: ["(", Intl.NumberFormat("en-US", { maximumFractionDigits: 0, style: "percent" }).format(p / u), ` ${f.ofTotal}`, ")"] })] }) })] });
            }
        },
        542372: (e, t, a) => {
            a.d(t, { Z: () => m });
            var s = a(552322),
                l = a(667542),
                r = a(202784),
                i = a(430962),
                n = a(598705),
                o = a(995961);
            const c = ({ item: e, onClick: t }) =>
                    (0, s.jsxs)("li", {
                        className: "flex gap-3",
                        onClick: t,
                        style: { cursor: t ? "pointer" : "default" },
                        "aria-label": `${e.label}: ${e.percentage?.toFixed(1)}%`,
                        tabIndex: t ? 0 : void 0,
                        onKeyDown: t
                            ? (e) => {
                                  ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), t());
                              }
                            : void 0,
                        children: [e.icon && (0, s.jsx)("div", { className: "flex h-10 w-10 items-center justify-center", children: (0, s.jsx)("img", { src: e.icon, alt: `${e.label} icon`, className: "h-8 w-8" }) }), (0, s.jsxs)("div", { className: "flex-1 flex flex-col", children: [(0, s.jsxs)("div", { className: "text-text mb-1 flex justify-between text-subtext2", children: [(0, s.jsxs)("span", { className: t ? "flex items-center gap-1 hover:text-blue-500 transition-colors text-text" : "text-text", children: [e.label, t && (0, s.jsx)(l.Z, { width: 12, height: 12, className: "opacity-75", "aria-hidden": "true" })] }), (0, s.jsx)("span", { className: "font-bold transition-all duration-700 ease-out text-text", style: { transform: "translateX(0)" }, children: (0, n.rl)(e.percentage || 0) })] }), (0, s.jsx)("div", { className: "h-2 w-full bg-gray-100 overflow-hidden", style: { borderRadius: "5px" }, role: "progressbar", "aria-valuenow": e.percentage || 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0, children: (0, s.jsx)("div", { className: "h-full origin-left transform-gpu transition-all duration-700 ease-out " + (t ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500"), style: { borderRadius: "5px", width: `${e.percentage}%`, transform: "translateZ(0)" } }) })] })],
                    }),
                d = ({ item: e, onClick: t, showLabels: a = !1 }) =>
                    (0, s.jsxs)("li", {
                        className: "flex gap-1",
                        onClick: t,
                        style: { cursor: t ? "pointer" : "default" },
                        "aria-label": `${e.label}: ${e.percentage?.toFixed(1)}%`,
                        tabIndex: t ? 0 : void 0,
                        onKeyDown: t
                            ? (e) => {
                                  ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), t());
                              }
                            : void 0,
                        children: [e.icon && (0, s.jsx)("div", { className: "flex h-6 w-6 items-center justify-center self-center", children: (0, s.jsx)("img", { src: e.icon, alt: `${e.label} icon`, className: "h-4 w-4" }) }), a ? (0, s.jsxs)("div", { className: "flex-1 flex items-center gap-2 pr-1", children: [(0, s.jsxs)("span", { className: `\n            ${t ? "flex items-center gap-1 hover:text-blue-500 transition-colors text-gray-900" : ""}\n            min-w-[45px] text-subtext2 text-gray-900\n          `, children: [e.label, t && (0, s.jsx)(l.Z, { width: 12, height: 12, className: "opacity-75", "aria-hidden": "true" })] }), (0, s.jsx)("div", { className: "h-1.5 flex-1 bg-gray-100 overflow-hidden", style: { borderRadius: "4px" }, role: "progressbar", "aria-valuenow": e.percentage || 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0, children: (0, s.jsx)("div", { className: "h-full origin-left transform-gpu transition-all duration-700 ease-out " + (t ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500"), style: { borderRadius: "4px", width: `${e.percentage}%`, transform: "translateZ(0)" } }) })] }) : (0, s.jsx)("div", { className: "flex-1 flex flex-col justify-center", children: (0, s.jsx)("div", { className: "h-1.5 w-full bg-gray-100 overflow-hidden", style: { borderRadius: "4px" }, role: "progressbar", "aria-valuenow": e.percentage || 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0, children: (0, s.jsx)("div", { className: "h-full origin-left transform-gpu transition-all duration-700 ease-out " + (t ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500"), style: { borderRadius: "4px", width: `${e.percentage}%`, transform: "translateZ(0)" } }) }) })],
                    });
            function m({ data: e, title: t, maxItems: a, sortByValue: l = !0, compactView: n = !1, showLabelsInCompactView: x = !1, modalSubtitle: u }) {
                const { analytics: h } = (0, i.M1)(),
                    [p, f] = r.useState(!1),
                    b = e.reduce((e, t) => e + t.value, 0),
                    g = 0 === e.length || 0 === b,
                    { mainItems: v } = r.useMemo(() => {
                        if (g) return { mainItems: [], otherItems: [] };
                        const t = e.map((e) => ({ ...e, percentage: 0 === b ? 0 : (e.value / b) * 100 }));
                        if (a && t.length > a) {
                            const e = [...t].sort((e, t) => (l ? t.value - e.value : 0)),
                                s = e.slice(0, a),
                                r = e.slice(a),
                                i = r.reduce((e, t) => e + t.value, 0),
                                n = 0 === b ? 0 : (i / b) * 100;
                            return { mainItems: [...s, { label: h.deviceOther, value: i, percentage: n }], otherItems: r };
                        }
                        return { mainItems: t, otherItems: [] };
                    }, [e, g, a, l, b, h.deviceOther]);
                return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("section", { className: "w-full max-w-2xl " + (n && x ? "pb-1" : ""), "aria-label": t, children: g ? (0, s.jsx)("p", { className: "text-gray-600 mt-2", children: h.noDataAvailable }) : (0, s.jsx)("div", { children: n ? (0, s.jsx)("div", { className: "relative", "aria-label": "Distribution chart", children: (0, s.jsx)("ul", { className: "space-y-1.5", "aria-label": "Distribution chart items", children: v.map((e) => (0, s.jsx)(d, { item: e, showLabels: x, onClick: void 0 }, e.label)) }) }) : (0, s.jsx)("ul", { className: "space-y-4", "aria-label": "Distribution chart items", children: v.map((e) => (0, s.jsx)(c, { item: e, onClick: e.label !== h.deviceOther || n ? void 0 : () => f(!0) }, e.label)) }) }) }), v.some((e) => e.label === h.deviceOther) && (0, s.jsx)(o.cu, { open: p, onOpenChange: f, children: (0, s.jsx)(o.hC, { title: (0, s.jsxs)("div", { className: "text-center", children: [t, u && (0, s.jsxs)("div", { className: "text-subtext2 text-gray-500 font-normal mt-0.5", children: ["(", u, ")"] })] }), children: (0, s.jsx)("div", { className: "overflow-y-auto max-h-[400px] pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: (0, s.jsx)(m, { data: e, title: t, sortByValue: l, compactView: !1, maxItems: void 0 }) }) }) })] });
            }
        },
        995961: (e, t, a) => {
            a.d(t, { ag: () => i, cu: () => r, hC: () => n });
            var s = a(552322),
                l = a(164695);
            function r({ children: e, title: t, description: a, ...r }) {
                return (0, s.jsx)(l.Vq, { ...r, children: e });
            }
            function i({ children: e }) {
                return (0, s.jsx)(l.hg, { children: e });
            }
            function n({ children: e, title: t, description: a }) {
                return (0, s.jsxs)(l.cZ, { className: "max-sm:max-w-[calc(100vw-2rem)] rounded-xl", children: [(0, s.jsx)(l.fK, { children: (0, s.jsx)(l.$N, { tabIndex: 0, children: t }) }), (0, s.jsx)(l.Be, { children: a }), e] });
            }
        },
        86982: (e, t, a) => {
            a.d(t, { E: () => o });
            var s = a(552322),
                l = a(796309),
                r = a(202784),
                i = a(125839),
                n = a(85349);
            function o({ metrics: e, currentTotals: t, prevTotals: a, timeSeriesData: o, defaultMetric: c, ChartComponent: d, hoursLabel: m, granularity: x = "daily", calculateChanges: u }) {
                const [h, p] = (0, r.useState)(c || e[0].key),
                    f = (0, r.useMemo)(() => u?.(t, a ?? null) ?? {}, [t, a, u]),
                    b = e.find((e) => e.key === h) ?? e[0],
                    g = (0, r.useMemo)(() => {
                        const e = Object.entries(o).map(([e, t]) => {
                            const a = t[h];
                            return a ? ("number" == typeof a ? { timestamp: e, value: a } : { timestamp: e, values: a.values }) : { timestamp: e, value: 0 };
                        });
                        return e.some((e) => "values" in e) ? e.filter((e) => "values" in e) : e.filter((e) => "value" in e);
                    }, [o, h]);
                return (0, s.jsxs)("div", { className: "w-full flex flex-col gap-3", children: [(0, s.jsx)("div", { className: "grid grid-cols-2 min-[988px]:hidden gap-3", children: e.map((e) => (0, s.jsx)("div", { onClick: () => p(e.key), className: (0, l.cn)("cursor-pointer transition-all rounded-xl border bg-gray-0 overflow-hidden", { "border-blue-500": e.key === h, "border-gray-200": e.key !== h }), children: (0, s.jsx)(n.g, { label: e.label, value: t[e.key] ?? 0, type: e.type, info: e.info, change: f[e.key]?.percentChange ?? null, disableInfoDialog: !0, valueNode: e.valueNode, disableBorder: !0 }) }, e.key)) }), (0, s.jsxs)("div", { className: "flex flex-col border border-gray-200 rounded-2xl overflow-hidden", children: [(0, s.jsx)("div", { className: "hidden flex-row justify-between min-[988px]:flex", children: e.map(({ key: a, label: r, type: n, valueNode: o }, c) => (0, s.jsxs)("div", { onClick: () => p(a), className: (0, l.cn)("flex w-full relative flex-col border-b border-e cursor-pointer border-gray-200 last:border-e-0 bg-gray-100/75 pb-2 ps-4 pt-2 hover:bg-gray-0", { "rtl:rounded-tr-xl ltr:rounded-tl-xl": 0 === c, "rtl:rounded-tl-xl ltr:rounded-tr-xl": c === e.length - 1, "bg-gray-0": a === h, "border-b-0": a === h, "border-s-gray-200 border-e-gray-200 border-b-gray-200 ": e[c - 1]?.key === h }), children: [(0, s.jsx)("div", { className: (0, l.cn)("absolute inset-x-0 top-0 h-1 w-full bg-blue-500", { "opacity-0": a !== h, "opacity-100": a === h }) }), (0, s.jsx)(i.t, { label: "time" === n ? `${r} (${m})` : r, value: t[a] ?? 0, type: n, change: 0 !== f[a]?.percentChange ? f[a]?.percentChange : null, valueNode: o })] }, a)) }), (0, s.jsx)("div", { className: "relative h-[250px] w-full bg-gray-0", children: (0, s.jsx)("div", { className: "h-full pt-4", children: (0, s.jsx)(d, { data: g, type: b?.type, label: b?.label ?? "", granularity: x }) }) })] })] });
            }
        },
        864897: (e, t, a) => {
            a.d(t, { Z: () => p });
            var s = a(552322),
                l = a(643715),
                r = a(829233),
                i = a(202784),
                n = a(430962),
                o = a(598705);
            const { Cell: c, Pie: d, PieChart: m } = l,
                x = ["hsl(199, 89%, 48%)", "hsl(299, 89%, 58%)", "hsl(32, 89%, 50%)", "hsl(270, 89%, 58%)", "hsl(45, 93%, 47%)"],
                u = x.map((e) => e.replace(")", ", 0.6)").replace("hsl", "hsla"));
            function h({ data: e, activeIndex: t, setActiveIndex: a, showLabels: l = !0, hidePercentage: i = !1, width: h = 200, height: p = 160, animationDuration: f = 1e3 }) {
                const { analytics: b } = (0, n.M1)(),
                    g = 0 === e.length || e.every((e) => 0 === e.value),
                    v = (e) => (null === t || t === e ? x[e] : u[e]);
                return g
                    ? (0, s.jsx)("p", { className: "text-gray-600 mt-2", children: b.noDataAvailable })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: "flex gap-x-8 items-center",
                                  children: [
                                      l && (0, s.jsx)("div", { className: "flex-1 space-y-4", children: e.map((e, t) => (0, s.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, s.jsx)("div", { className: "h-[45px] w-1.5 rounded-full transition-colors duration-200", style: { backgroundColor: v(t) } }), (0, s.jsxs)("div", { children: [(0, s.jsx)("span", { className: "text-gray-600 text-subtext2", children: e.name }), !i && (0, s.jsx)("p", { className: "text-text text-body font-bold", children: (0, o.rl)(e.value) })] })] }, e.name)) }),
                                      (0, s.jsx)("div", { className: "flex " + (l ? "" : "mx-auto"), children: (0, s.jsxs)("div", { className: "relative w-full min-w-[140px] max-w-[200px]", children: [(0, s.jsx)("div", { className: "absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-8 transition-all duration-200 ease-out " + (null !== t ? "opacity-100" : "pointer-events-none opacity-0"), children: null !== t && e[t] && !i && (0, s.jsx)("div", { className: "rounded-full bg-black px-4 py-1.5 shadow-[0_0_30px_rgba(255,255,255,0.15)] after:absolute after:inset-0 after:-z-10 after:rounded-full after:shadow-[0_0_15px_rgba(255,255,255,0.1)]", children: (0, s.jsxs)("div", { className: "flex gap-1 font-medium text-white whitespace-nowrap", children: [(0, s.jsxs)("span", { children: [e[t].name, ":"] }), (0, s.jsx)("span", { children: (0, o.rl)(e[t].value) })] }) }) }), (0, s.jsx)("div", { className: "h-[160px] w-full", onMouseLeave: () => a(null), children: (0, s.jsx)(r.BO, { className: "h-full w-full", config: {}, children: (0, s.jsx)(m, { width: h, height: p, children: (0, s.jsx)(d, { data: e, innerRadius: 0.225 * Math.min(h, 200), outerRadius: 0.4 * Math.min(h, 200), paddingAngle: 0, dataKey: "value", startAngle: 90, endAngle: -450, animationDuration: f, onMouseEnter: (e, t) => a(t), onMouseLeave: () => a(null), children: e.map((e, t) => (0, s.jsx)(c, { fill: v(t), stroke: "transparent", className: "cursor-pointer transition-colors duration-200" }, `cell-${e.name}-${e.value}`)) }) }) }) })] }) }),
                                  ],
                              }),
                              (0, s.jsx)("style", { children: "\n          .recharts-sector:focus {\n            outline: none !important;\n          }\n        " }),
                          ],
                      });
            }
            function p({ data: e, compactView: t = !1, animationDuration: a = 1e3 }) {
                const [l, r] = (0, i.useState)(null),
                    [n, o] = (0, i.useState)(200),
                    c = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    const e = () => {
                        if (c.current) {
                            const e = c.current.clientWidth;
                            o(e);
                        }
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
                }, []);
                const d = t ? () => {} : r;
                return (0, s.jsx)("div", { className: "w-full max-w-2xl", ref: c, children: t ? (0, s.jsx)("div", { className: "flex justify-center relative", "aria-label": "Chart details", children: (0, s.jsx)(h, { data: e, activeIndex: null, setActiveIndex: d, showLabels: !1, hidePercentage: !0, width: n, height: 150, animationDuration: a }) }) : (0, s.jsx)(h, { data: e, activeIndex: l, setActiveIndex: r, width: n, height: 160, animationDuration: a }) });
            }
        },
        306823: (e, t, a) => {
            a.d(t, { C: () => k, t: () => w });
            var s = a(552322),
                l = a(643715),
                r = a(829233),
                i = a(701883),
                n = a(941204),
                o = a(702024),
                c = a(407250),
                d = a(816778),
                m = a(969088),
                x = a(430962),
                u = a(840489),
                h = a(991732),
                p = a(598705);
            const { Bar: f, BarChart: b, CartesianGrid: g, XAxis: v, YAxis: j } = l,
                y = (e) => {
                    const { x: t, y: a, width: l, height: r, index: i, dataLength: n } = e,
                        o = n - i <= 3 ? "animate-[pulse_1.5s_ease-in-out_infinite]" : "";
                    return (0, s.jsx)("rect", { x: t, y: a, width: l, height: r, fill: e.fill, rx: 4, ry: 4, className: o });
                };
            function N({ data: e, maxBarSize: t, intervalTicks: a, color: l, metricLabel: n }) {
                const o = { value: { color: l, label: n } },
                    c = (0, s.jsx)(r.dg, {
                        hideForKeys: ["incomplete"],
                        className: "text-subtext2",
                        labelClassName: "font-normal text-text",
                        labelFormatter: (e, [t]) => {
                            return t?.payload && ((a = t.payload.timestamp), new Date(a).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }));
                            var a;
                        },
                        valueFormatter: (e) => Intl.NumberFormat("en-US").format(e),
                    });
                return (0, s.jsx)(r.BO, { config: o, className: "h-full w-full pl-0", children: (0, s.jsxs)(b, { data: e, margin: { top: 5, right: 10, left: -5, bottom: 15 }, height: 180, children: [(0, s.jsx)(g, { vertical: !1, strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))" }), (0, s.jsx)(v, { dataKey: "time", tickLine: !1, axisLine: !1, tickMargin: 6, height: 30, interval: a, minTickGap: 20, angle: 0, textAnchor: "middle", tick: { fill: "hsl(var(--colors-gray-500))", fontSize: 11 } }), (0, s.jsx)(j, { allowDecimals: !1, tickLine: !1, axisLine: !1, tickMargin: 2, width: 40, tickFormatter: (e) => (0, p.uf)(e), tick: { fill: "hsl(var(--colors-gray-600))", fontSize: 10 } }), (0, s.jsx)(r.h7, { content: c, cursor: (0, s.jsx)(i.d, {}) }), (0, s.jsx)(f, { dataKey: "value", fill: l, radius: [4, 4, 0, 0], maxBarSize: t, shape: (t) => (0, s.jsx)(y, { ...t, dataLength: e.length }) })] }) });
            }
            function w({ className: e, cardTitle: t, liveIndicatorTooltip: a, dataType: l }) {
                const { overviewSelectedMetric: r } = (0, m.dQ)(),
                    { realtimeHourlyData: i, realtimeMinutelyData: d, isRealtimeLoading: x } = (0, m.Q9)(),
                    p = (0, h.T)(),
                    f = "hourly" === l ? i : d,
                    b = x,
                    g = p[r]?.label || r,
                    v = l;
                return (0, s.jsxs)(c.Zb, { className: `w-full ${e || ""}`, children: [(0, s.jsx)(c.Ol, { className: "pb-2 min-[987px]:pt-3 pt-2 h-[56px] min-[987px]:min-h-[56px] min-h-[66px]", children: (0, s.jsx)("div", { className: "flex items-center justify-start align-top h-full", children: (0, s.jsxs)("div", { className: "flex items-center gap-2 -mt-1", children: [(0, s.jsx)(n.x, { size: "headline2", className: "font-medium", children: t }), (0, s.jsx)("div", { className: "relative mr-1", title: a, children: (0, s.jsx)("div", { className: "h-3 w-3 rounded-full bg-red-600 animate-pulse" }) })] }) }) }), (0, s.jsx)(c.aY, { className: "pt-2 pb-2 pl-2 pr-2", children: (0, s.jsxs)("div", { className: "w-full h-[180px] relative", children: [f && (0, s.jsx)(N, { data: f, maxBarSize: "minutely" === v ? 8 : 12, intervalTicks: "minutely" === v ? 10 : 8, color: "#1DA1F2", metricLabel: g }), b && (0, s.jsx)("div", { className: (0, u.Z)("absolute inset-0 flex items-center justify-center bg-gray-0/50 pointer-events-none z-10 transition-opacity delay-100 duration-200", { "opacity-0": !b, "opacity-100": b }), children: (0, s.jsx)(o.P, {}) })] }) })] });
            }
            function k({ className: e }) {
                const { overviewSelectedMetric: t } = (0, m.dQ)(),
                    { realtimeHourlyData: a, realtimeMinutelyData: l, isRealtimeLoading: r, realtimeActiveTab: i, setRealtimeActiveTab: p } = (0, m.Q9)(),
                    { analytics: f } = (0, x.M1)(),
                    b = (0, h.T)(),
                    g = "hourly" === i ? a : l,
                    v = b[t]?.label || t;
                return (0, s.jsxs)(c.Zb, { className: `w-full ${e || ""}`, children: [(0, s.jsx)(c.Ol, { className: "pb-2 min-[987px]:pt-3 pt-2 h-[56px] min-[987px]:min-h-[56px] min-h-[66px]", children: (0, s.jsxs)("div", { className: "flex items-center justify-between align-top h-full", children: [(0, s.jsxs)("div", { className: "flex items-center gap-2 -mt-1", children: [(0, s.jsx)(n.x, { size: "headline2", className: "font-medium", children: f.realtimeTitle }), (0, s.jsx)("div", { className: "relative mr-1", title: f.liveDataTitle, children: (0, s.jsx)("div", { className: "h-3 w-3 rounded-full bg-red-600 animate-pulse" }) })] }), (0, s.jsx)(d.mQ, { value: i, className: "w-auto", onValueChange: (e) => p(e), children: (0, s.jsxs)(d.dr, { className: "border-0 bg-transparent p-0 min-[987px]:space-x-3 space-x-2", children: [(0, s.jsx)(d.SP, { value: "minutely", className: "px-2 py-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:rounded-none rounded-none", children: f.lastHour }), (0, s.jsx)(d.SP, { value: "hourly", className: "px-2 py-1 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:rounded-none rounded-none", children: f.last48Hours })] }) })] }) }), (0, s.jsx)(c.aY, { className: "pt-2 pb-2 pl-2 pr-2", children: (0, s.jsxs)("div", { className: "w-full h-[180px] relative", children: [g && (0, s.jsx)(N, { data: g, maxBarSize: "minutely" === i ? 8 : 12, intervalTicks: "minutely" === i ? 10 : 8, color: "#1DA1F2", metricLabel: v }), r && (0, s.jsx)("div", { className: (0, u.Z)("absolute inset-0 flex items-center justify-center bg-gray-0/50 pointer-events-none z-10 transition-opacity delay-100 duration-200 pb-10", { "opacity-0": !r, "opacity-100": r }), children: (0, s.jsx)(o.P, {}) })] }) })] });
            }
        },
        777301: (e, t, a) => {
            a.d(t, { W: () => N, X: () => g });
            var s = a(552322),
                l = a(970430),
                r = a(446368),
                i = a(423026),
                n = a(86781),
                o = a(436059),
                c = a(469745),
                d = a(453436),
                m = a(364597),
                x = a(808106),
                u = a(733936),
                h = a(739219),
                p = a(202784),
                f = a(598705);
            const b = [
                { days: 7, label: "7D" },
                { days: 14, label: "2W" },
                { days: 28, label: "4W" },
                { days: 90, label: "3M" },
                { days: 365, label: "1Y" },
            ];
            function g(e) {
                if (-1 === e) return { from: new l.eJ(1970, 0, 1), to: (0, m.i)(new l.eJ()) };
                const t = new l.eJ();
                return { from: (0, x.b)((0, u.k)(t, e - 1)), to: (0, m.i)(t) };
            }
            const v = new l.eJ(),
                j = (0, u.k)(v, 365),
                y = (e) => {
                    if ((0, f.pw)(e)) return "All Time";
                    const t = new Intl.DateTimeFormat("undefined" != typeof navigator ? navigator.language : "en", { day: "2-digit", month: "2-digit", timeZone: "UTC", year: "numeric" }),
                        a = t.format(e.from),
                        s = t.format(e.to);
                    return 0 === (0, h.w)(e.from, e.to) ? a : `${a} - ${s}`;
                },
                N = ({ onChange: e, timeRange: t, timeRangeOptions: a = b, showCalendar: u = !0, compact: N = !1 }) => {
                    const [k, C] = (0, p.useState)(t ?? g(a?.[0]?.days ?? b[0].days)),
                        [D, F] = (0, p.useState)(!1),
                        S = (0, p.useMemo)(() => ((0, f.pw)(k) ? -1 : (0, h.w)(k.to, k.from) + 1), [k]),
                        M = (0, p.useMemo)(() => a.find((e) => e.days === S), [S, a]),
                        [, O] = (0, p.useTransition)(),
                        [I, $] = (0, p.useState)(!1),
                        A = (0, c.a)("(max-width: 768px)"),
                        T = (0, r.$8)();
                    (0, p.useEffect)(() => {
                        if (t) {
                            const e = (0, f.pw)(t) ? -1 : (0, h.w)(t.to, t.from) + 1,
                                s = !a.some((t) => t.days === e);
                            $(s), C(t);
                        }
                    }, [t, a]);
                    const L = (t, a) => {
                        let s = t;
                        0 === (0, h.w)(s.from, s.to) && (s = { from: (0, x.b)(s.from), to: (0, m.i)(s.to) }),
                            C(s),
                            $(a),
                            O(() => {
                                e?.(s, a);
                            });
                    };
                    function z(e) {
                        return { from: new Date(e.from.getTime() + 60 * new Date().getTimezoneOffset() * 1e3), to: new Date(e.to.getTime() + 60 * new Date().getTimezoneOffset() * 1e3) };
                    }
                    const P = (e = "") =>
                            (0, s.jsx)(i.f, {
                                mode: "range",
                                selected: z(k),
                                onSelect: (e) => {
                                    if (!e?.from) return;
                                    const t = { from: e.from ? new l.eJ(e.from.getFullYear(), e.from.getMonth(), e.from.getDate(), e.from.getHours(), e.from.getMinutes(), e.from.getSeconds()) : k.from, to: e.to ? (0, m.i)(new l.eJ(e.to.getFullYear(), e.to.getMonth(), e.to.getDate(), e.to.getHours(), e.to.getMinutes(), e.to.getSeconds())) : k.to };
                                    T.scribe({ action: "click", component: "TimeRangeSelector", element: "Calendar", page: "account_analytics", section: "overview" }), L(t, !0);
                                },
                                className: e,
                                numberOfMonths: N || A ? 1 : 2,
                                toDate: v,
                                fromDate: j,
                            }),
                        V = (e) => {
                            T.scribe({ action: "click", component: "TimeRangeSelector", element: e.label, page: "account_analytics", section: "overview" }), L(g(e.days), !1), N && F(!1);
                        };
                    return N ? (0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(n.J, { alignOffset: 20, align: "end", open: D, onOpenChange: F, trigger: (0, s.jsxs)("div", { onClick: () => F((e) => !e), className: "flex items-center justify-center cursor-pointer rounded-full p-1 h-8 border border-gray-200 " + (M || I ? "px-2" : "w-8"), children: [(0, s.jsx)(d.Z, { className: "size-5" }), (M || I) && (0, s.jsx)("div", { className: "text-subtext1 flex items-center gap-1 whitespace-nowrap font-bold ml-1", children: I ? y(k) : M?.label })] }), children: (0, s.jsxs)("div", { className: "flex flex-col border border-gray-200 rounded-lg overflow-hidden", children: [(0, s.jsx)("div", { className: "p-2 flex items-center justify-between bg-background border-b border-gray-200", children: a.map((e) => (0, s.jsx)("div", { onClick: () => !e.disabled && V(e), className: `flex-1 mx-1 h-6 flex items-center justify-center cursor-pointer rounded-full text-sm font-bold ${e !== M || I ? "border border-nested-border text-text" : "bg-text text-background"} ${e.disabled ? "opacity-50 cursor-not-allowed" : ""}`, children: e.label }, e.label)) }), P("rounded-none")] }) }) }) : (0, s.jsxs)("div", { className: "flex items-center justify-start gap-2", children: [u && (0, s.jsx)(n.J, { alignOffset: 20, align: "start", trigger: (0, s.jsxs)(o.z, { variant: I ? "primaryFilled" : "primaryOutlined", size: "xSmallCompact", className: "h-8 shrink-0 px-1", children: [(0, s.jsx)(d.Z, { className: "mx-px size-5" }), I && (0, s.jsx)("div", { className: "text-subtext1 flex items-center gap-1 whitespace-nowrap font-bold", children: y(k) })] }), children: P("rounded-lg border") }), a.map((e) => (0, s.jsx)(w, { option: e, selected: e === M && !I, onClick: () => V(e) }, e.label))] });
                },
                w = ({ onClick: e, option: t, selected: a }) => (0, s.jsx)(o.z, { variant: a ? "primaryFilled" : "primaryOutlined", size: "small", onClick: e, className: "shrink-0", disabled: t.disabled, children: t.label });
        },
        707326: (e, t, a) => {
            a.d(t, { q: () => h });
            var s = a(552322),
                l = a(643715),
                r = a(829233),
                i = a(701883),
                n = a(202784),
                o = a(598705);
            const { Bar: c, BarChart: d, CartesianGrid: m, XAxis: x, YAxis: u } = l;
            function h({ data: e, type: t = "number", label: a, granularity: l = "daily" }) {
                const h = (0, n.useMemo)(() => {
                        if (0 === e.length) return !1;
                        const t = e[0];
                        return t && "values" in t;
                    }, [e]),
                    p = (0, n.useMemo)(() => {
                        if (!h || 0 === e.length) return { metric: { color: "hsl(var(--colors-blue-500))", label: a } };
                        const t = e[0];
                        return t && "values" in t ? Object.fromEntries(Object.entries(t.values).map(([e, { color: t, label: a }]) => [e, { color: t, label: a }])) : { metric: { color: "hsl(var(--colors-blue-500))", label: a } };
                    }, [e, h, a]),
                    f = (0, n.useMemo)(() => (h ? [...e].reverse().map((e) => ({ ...Object.fromEntries(Object.entries(e.values).map(([e, { value: t }]) => [e, t])), timestamp: e.timestamp })) : [...e].reverse().map((e) => ({ metric: e.value, timestamp: e.timestamp }))), [e, h]),
                    b = (0, n.useMemo)(() => {
                        if (!h || 0 === e.length) return ["metric"];
                        const t = e[0];
                        return t && "values" in t ? Object.keys(t.values) : ["metric"];
                    }, [e, h]),
                    g = (0, n.useCallback)((e) => (h ? (e === b.length - 1 ? [2, 2, 0, 0] : 0 === e ? [0, 0, 2, 2] : 0) : 2), [b, h]);
                return (0, s.jsx)(r.BO, {
                    config: p,
                    className: "relative aspect-[2/1] h-full max-h-[250px] min-h-[0] w-full select-none pe-2",
                    children: (0, s.jsxs)(d, {
                        data: f,
                        barCategoryGap: "25%",
                        margin: { bottom: 5, left: -10, right: 5, top: 5 },
                        children: [
                            (0, s.jsx)(u, {
                                tickFormatter: (e) => {
                                    if ("time" === t || "duration" === t) {
                                        return `${Intl.NumberFormat("en-US", { compactDisplay: "short", maximumFractionDigits: 0, notation: "compact", roundingMode: "trunc" }).format((0, o.UM)(e))}${(0, o.sf)(e)}`;
                                    }
                                    return Intl.NumberFormat("en-US", { compactDisplay: "short", maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc", style: "percent" === t ? "percent" : "decimal" }).format(e);
                                },
                                tickLine: !1,
                                axisLine: !1,
                                className: "text-subtext3",
                                tick: { fill: "hsl(var(--colors-gray-600))" },
                            }),
                            (0, s.jsx)(r.h7, {
                                content: (0, s.jsx)(r.dg, {
                                    hideForKeys: ["incomplete"],
                                    className: "text-subtext2",
                                    labelClassName: "font-normal text-text",
                                    labelFormatter: (e) => (0, o.r2)(+e, l),
                                    valueFormatter: (e) => {
                                        if ("time" === t || "duration" === t) {
                                            return `${Intl.NumberFormat("en-US", { maximumFractionDigits: 1, roundingMode: "trunc" }).format((0, o.UM)(e))}${(0, o.sf)(e)}`;
                                        }
                                        return "revenue" === t ? (0, o.xy)(e, !1) : Intl.NumberFormat("en-US", { maximumFractionDigits: 2, style: "percent" === t ? "percent" : "decimal" }).format(e);
                                    },
                                }),
                                cursor: (0, s.jsx)(i.d, {}),
                            }),
                            (0, s.jsx)(m, { strokeOpacity: 1, stroke: "hsl(var(--colors-gray-100))", vertical: !1 }),
                            b.map((e, t) => (0, s.jsx)(c, { dataKey: e, stroke: `var(--color-${e})`, strokeWidth: 1, fill: `var(--color-${e})`, animationDuration: 500, stackId: h ? "stack1" : void 0, radius: g(t) }, e)),
                            (0, s.jsx)(x, { dataKey: "timestamp", tickLine: !1, axisLine: !1, tickMargin: 8, minTickGap: "hourly" === l ? 60 : 32, reversed: !0, className: "text-subtext3", tick: { fill: "hsl(var(--colors-gray-600))" }, tickFormatter: (e) => (0, o.P)(+e, l) }),
                        ],
                    }),
                });
            }
        },
        179228: (e, t, a) => {
            a.d(t, { y: () => m });
            var s = a(552322),
                l = a(407250),
                r = a(52053),
                i = a(169355),
                n = a(14313),
                o = a(666200),
                c = a(202784),
                d = a(598705);
            function m({ videos: e }) {
                const [t, a] = (0, c.useState)(0),
                    m = e[t] || e[0],
                    x = (t) => {
                        a("next" === t ? (t) => (t + 1) % e.length : (t) => (t - 1 + e.length) % e.length);
                    };
                return m
                    ? (0, s.jsxs)(l.Zb, {
                          className: "w-full max-w-2xl h-full flex flex-col border border-gray-200",
                          children: [
                              (0, s.jsx)(l.Ol, { className: "flex flex-row items-center justify-between pb-4", children: (0, s.jsx)("h2", { className: "font-semibold", children: "Past video performance" }) }),
                              (0, s.jsxs)(l.aY, {
                                  className: "space-y-6 flex-1 flex flex-col",
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: "flex flex-col gap-6",
                                          children: [
                                              (0, s.jsxs)("div", { className: "relative aspect-video rounded-lg overflow-hidden", children: [(0, s.jsx)("img", { src: m.thumbnail, alt: m.title || "thumbnail", className: "object-cover w-full" }), (0, s.jsx)("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent", children: (0, s.jsx)("h3", { className: "font-bold", children: m.title }) })] }),
                                              (0, s.jsx)("hr", {}),
                                              (0, s.jsxs)("div", {
                                                  children: [
                                                      (0, s.jsx)("p", { className: "text-subtext1 text-gray-700 mb-6", children: "First 6 hours 24 minutes compared to your typical performance:" }),
                                                      (0, s.jsxs)("div", { className: "space-y-4", children: [(0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("div", { className: "flex items-center gap-2", children: (0, s.jsx)("span", { children: "Ranking by views" }) }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("span", { children: "3 of 10" }), (0, s.jsx)(r.Z, { className: "w-5 h-5 text-zinc-600 rtl:rotate-180" })] })] }), (0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("span", { children: "Views" }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("span", { children: (0, d.uf)(m.views) }), (0, s.jsx)(i.Z, { className: "w-5 h-5 text-green-500" })] })] }), (0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("span", { children: "Impressions ctr" }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsxs)("span", { children: [m.impressionsCtr, "%"] }), (0, s.jsx)("div", { className: "relative w-5 h-5 p-0.5", children: (0, s.jsx)("div", { className: "relative rounded-full bg-green-500 w-full h-full", children: (0, s.jsx)(n.Z, { className: "w-3 h-3 text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }) }) })] })] }), (0, s.jsxs)("div", { className: "flex items-center justify-between", children: [(0, s.jsx)("span", { children: "Average view duration" }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)("span", { children: m.averageViewDuration }), (0, s.jsx)("div", { className: "relative w-5 h-5 p-0.5", children: (0, s.jsx)("div", { className: "relative rounded-full bg-green-500 w-full h-full", children: (0, s.jsx)(n.Z, { className: "w-3 h-3 text-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }) }) })] })] })] }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, s.jsxs)("div", { className: "flex flex-col gap-4 h-full justify-end", children: [(0, s.jsx)("hr", {}), (0, s.jsxs)("div", { className: "flex items-center justify-between space-x-4", children: [(0, s.jsx)("button", { type: "button", className: "p-2 rounded-full transition-colors hover:bg-gray-100", onClick: () => x("prev"), children: (0, s.jsx)(o.Z, { className: "w-6 h-6 rtl:rotate-180" }) }), (0, s.jsxs)("span", { children: [t + 1, " of ", e.length] }), (0, s.jsx)("button", { type: "button", className: "p-2 rounded-full transition-colors hover:bg-gray-100", onClick: () => x("next"), children: (0, s.jsx)(r.Z, { className: "w-6 h-6 rtl:rotate-180" }) })] })] }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            }
        },
        82143: (e, t, a) => {
            a.d(t, { Dx: () => r, S9: () => n, _N: () => l, __: () => c, b2: () => o, he: () => i, nb: () => d, ot: () => s });
            const s = ["EngagementRate"],
                l = ["Male", "Female", "Unknown"],
                r = ["inNetwork", "outNetwork"],
                i = ["iOS", "Android", "Web", "Other"],
                n = ["Age13to17", "Age18to24", "Age25to34", "Age35To44", "Age45To54", "Age55To64", "AgeOver65"],
                o = ["AppInstallAttempts", "AppOpens", "Bookmark", "CreatePost", "CreateQuote", "CreateTweet", "DetailExpands", "EmailTweet", "Engagement", "EngagementRate", "Engagements", "Follows", "HashtagClicks", "Impressions", "Likes", "LinkClicks", "MediaEngagements", "MediaViews", "PermalinkClicks", "ProfileVisits", "QuoteTweets", "Replies", "Retweets", "Share", "Unfollows", "UniqueImpressions", "UniqueVideoViews", "UrlClicks", "UserProfileClicks", "VideoCompletions", "VideoPlayed25Percent", "VideoPlayed50Percent", "VideoPlayed75Percent", "VideoStarts", "VideoViews", "CtaUrlClick", "CtaWatchClick", "PlayFromTap", "Playback25", "Playback50", "Playback75", "PlaybackComplete", "PlaybackStart", "VideoView", "WatchTime", "VideoCompletionRate", "AverageWatchTime", "EstimatedRevenue"],
                c = ["bar", "area"],
                d = ["daily", "weekly", "payPeriod", "monthly"];
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-04134b17.7b25d47a.js.map

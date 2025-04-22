"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-d49ace54"],
    {
        736716: (e, t, a) => {
            a.d(t, { Z: () => Ke });
            var n = a(202784),
                o = a(691533),
                r = a(952793),
                i = a(725516),
                s = a(125363),
                l = a(327597),
                c = a(623494),
                d = (a(136728), a(325686)),
                m = a(731708),
                y = a(992942),
                p = a(194504),
                u = a(392237),
                h = a(674132),
                g = a.n(h),
                f = a(572929),
                b = a(339838),
                C = a(47331),
                k = a(738118);
            const S = Object.freeze({ UP: "up", DOWN: "down", NOCHANGE: "nochange" }),
                E = (Object.freeze({ SINGLE: "SINGLE", COMPARISON: "COMPARISON" }), { USD: "$" }),
                w = Object.freeze({ preMarket: g().a50aaa10, today: g().g02dacc0, afterHours: g().dd614d10 });
            a(571372);
            const x = "09:30:00",
                D = "16:00:00";
            function v(e, t) {
                const { timeZone: a } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? a : void 0 }).format(e);
            }
            function Z(e, t = 2) {
                const a = [
                    { value: 1e12, suffix: "T" },
                    { value: 1e9, suffix: "B" },
                    { value: 1e6, suffix: "M" },
                    { value: 1e3, suffix: "K" },
                ];
                for (let n = 0; n < a.length; n++) if (e >= a[n].value) return (e / a[n].value).toFixed(t) + a[n].suffix;
                return e.toFixed(t);
            }
            function P(e, t) {
                const a = new Intl.DateTimeFormat("en-US", { month: "numeric", day: "numeric", year: "numeric", timeZone: t }).formatToParts(e),
                    n = a.find((e) => "month" === e.type),
                    o = a.find((e) => "year" === e.type),
                    r = a.find((e) => "day" === e.type);
                if (!n || !o || !r) throw new Error(`Failed to format time for date: ${e.toDateString()}`);
                return { year: Number(o.value), month: Number(n.value), day: Number(r.value) };
            }
            function T(e) {
                const t = e.match(/[+-]\d{2}:\d{2}$/);
                return t ? t[0] : "";
            }
            function z(e) {
                const t = [],
                    a = [],
                    n = [];
                return (
                    e.forEach((e) => {
                        const o = new Date(e.timestamp),
                            r = e.timestamp.split("T")[0],
                            i = T(e.timestamp),
                            s = new Date(`${r}T${x}${i}`),
                            l = new Date(`${r}T${D}${i}`);
                        o < s ? t.push(e) : o < l ? a.push(e) : n.push(e);
                    }),
                    { preMarket: t, today: a, afterHours: n }
                );
            }
            function I(e) {
                let t = e;
                return (
                    ["Class A Common Stock"].forEach((e) => {
                        t = t.replace(e, "");
                    }),
                    t
                );
            }
            function $(e, t = 1) {
                let a = e.toFixed(20);
                a = a.replace(/^0+\./, "0.").replace(/\.0+$/, "");
                const n = a.indexOf("."),
                    o = a.slice(n + 1).search(/[1-9]/);
                if (-1 !== o) {
                    const a = o + t;
                    return Number(e).toFixed(a);
                }
                return a;
            }
            function O(e) {
                const t = Number(e);
                if (isNaN(t)) return e;
                const a = e.split(".");
                return (a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")), a.join(".");
            }
            var M = a(988290);
            const _ = g().d6b0b0d5,
                N = g().e85f8b65,
                A = g().f92bf10f,
                H = g().d679b09f,
                R = g().be7b9409,
                L = g().a81f5fb9,
                F = [
                    { key: "open", labelFormatter: _ },
                    { key: "high", labelFormatter: H },
                    { key: "low", labelFormatter: g().e68d4f21 },
                    { key: "marketCap", labelFormatter: N },
                    { key: "peRatio", labelFormatter: R },
                    { key: "yearHigh", labelFormatter: A },
                    { key: "yearLow", labelFormatter: L },
                ],
                K = [
                    { key: "marketCap", labelFormatter: N },
                    { key: "allTimeHigh", labelFormatter: g().bc9c96f9 },
                    { key: "allTimeLow", labelFormatter: g().dd679fb1 },
                ];
            function j({ entity: e, multipleEntities: t, style: a }) {
                const { isCompactLayout: o } = (0, M.ZP)(),
                    r = n.useMemo(() => {
                        const t = [[], [], []];
                        let a = 0,
                            r = [];
                        "STOCK" === e.assetType ? (r = F) : ("TOKEN" !== e.assetType && "COIN" !== e.assetType) || (r = K);
                        for (let i = 0; i < r.length; i++) {
                            const s = r[i];
                            t[a].length < 3 && void 0 !== e.metrics[s.key] && null !== e.metrics[s.key] && (t[a].push(n.createElement(d.Z, { key: s.key, style: [U.detailsRow, o ? U.compactDetailsRow : void 0] }, n.createElement(m.ZP, { style: U.detailsLabel, weight: "bold" }, s.labelFormatter({ ttc_stock_details: "" })), n.createElement(m.ZP, { style: U.detailsValue }, `${E[e.currentPrice.currency.toUpperCase()]}${Z(e.metrics[s.key])}`))), (a = (a + 1) % 3));
                        }
                        return t;
                    }, [e, o]);
                return n.createElement(
                    d.Z,
                    { style: [U.detailsContainer, a] },
                    t && n.createElement(d.Z, { style: U.entityContainer }, n.createElement(m.ZP, { style: U.entitySymbol, weight: "bold" }, e.symbol), n.createElement(d.Z, { style: U.dot }), n.createElement(m.ZP, { style: U.entityName, weight: "bold" }, e.name)),
                    n.createElement(
                        d.Z,
                        { style: [U.detailsInfoContainer, o ? U.compactDetailsInfoContainer : void 0] },
                        r.map((e, t) =>
                            n.createElement(
                                d.Z,
                                { key: `details-col-${t}`, style: U.detailsCol },
                                e.map((e) => e),
                            ),
                        ),
                    ),
                );
            }
            const U = u.default.create((e) => ({ detailsContainer: { padding: e.spaces.space12, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "column", gap: e.spaces.space12 }, entityContainer: { display: "flex", flexDirection: "row", alignItems: "center", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, gap: e.spaces.space8 }, entitySymbol: { fontSize: "inherit", lineHeight: "inherit" }, dot: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.brandColor }, entityName: { fontSize: "inherit", lineHeight: "inherit" }, detailsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space32 }, compactDetailsInfoContainer: {}, detailsCol: { display: "flex", flexDirection: "column", flex: 1, gap: e.spaces.space16 }, detailsRow: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, flexWrap: "wrap" }, compactDetailsRow: { flexDirection: "column", alignItems: "flex-start", justifyContent: "unset", gap: e.spaces.space4 }, detailsLabel: { fontSize: "inherit", lineHeight: "inherit" }, detailsValue: { fontSize: "inherit", lineHeight: "inherit" } }));
            var B = a(575059);
            function W({ entity: e, label: t, stockPriceChange: a, style: o }) {
                return n.createElement(d.Z, { style: [V.container, o] }, t && n.createElement(m.ZP, { style: V.label }, t), n.createElement(B.default, { style: [V.directionArrow, a.direction === S.UP ? V.upArrow : void 0, a.direction === S.DOWN ? V.downArrow : void 0, a.direction === S.NOCHANGE ? V.noChangeArrow : void 0] }), n.createElement(m.ZP, { style: [V.stockPriceChangeText, a.direction === S.DOWN ? V.stockPriceChangeDownText : void 0, a.direction === S.UP ? V.stockPriceChangeUpText : void 0], weight: "bold" }, a.amountChange.startsWith("-") ? `-${E[e.currentPrice.currency.toUpperCase()]}${a.amountChange.replace("-", "")}` : `${E[e.currentPrice.currency.toUpperCase()]}${a.amountChange}`), n.createElement(d.Z, { style: [V.dot, a.direction === S.DOWN ? V.dotDown : void 0, a.direction === S.UP ? V.dotUp : void 0] }), n.createElement(m.ZP, { style: [V.stockPriceChangeText, a.direction === S.DOWN ? V.stockPriceChangeDownText : void 0, a.direction === S.UP ? V.stockPriceChangeUpText : void 0], weight: "bold" }, `${a.percentageChange}%`));
            }
            const V = u.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, label: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.gray700 }, directionArrow: { width: e.spaces.space16, height: e.spaces.space16 }, upArrow: { color: e.colors.green500 }, downArrow: { color: e.colors.red500, transform: "rotate(90deg)" }, noChangeArrow: { color: e.colors.gray700, transform: "rotate(45deg)" }, stockPriceChangeText: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.brandColor }, stockPriceChangeDownText: { color: e.colors.red500 }, stockPriceChangeUpText: { color: e.colors.green500 }, dot: { width: 2, height: 2, borderRadius: 2, backgroundColor: e.colors.brandColor }, dotDown: { backgroundColor: e.colors.red500 }, dotUp: { backgroundColor: e.colors.green500 } }));
            function G({ color: e, entity: t, multipleEntities: a, oneDayStockPriceChange: o, selectedPeriod: r, stockPriceChange: i, style: s }) {
                let l = null;
                return "1D" === r && "STOCK" === t.assetType ? (l = n.createElement(n.Fragment, null, o.today && n.createElement(W, { entity: t, stockPriceChange: o.today }), o.afterHours && n.createElement(W, { entity: t, label: w.afterHours, stockPriceChange: o.afterHours }))) : i && (l = n.createElement(n.Fragment, null, n.createElement(W, { entity: t, stockPriceChange: i }), o.afterHours && n.createElement(W, { entity: t, label: w.afterHours, stockPriceChange: o.afterHours }))), n.createElement(d.Z, { style: [q.stockEntityContainer, a ? q.multipleStockEntityContainer : void 0, s] }, a ? n.createElement(d.Z, { style: q.stockNameColorContainer }, n.createElement(d.Z, { style: q.stockNameContainer }, "STOCK" === t.assetType && k[t.symbol] && n.createElement(y.Z, { resizeMode: "contain", source: k[t.symbol], style: q.logo }), ("TOKEN" === t.assetType || "COIN" === t.assetType) && C[t.name] && n.createElement(y.Z, { resizeMode: "contain", source: C[t.name], style: q.logo }), n.createElement(m.ZP, { style: q.stockSymbol, weight: "bold" }, t.symbol), n.createElement(d.Z, { style: q.dot }), n.createElement(m.ZP, { style: q.stockName, weight: "bold" }, t.name)), n.createElement(d.Z, { style: [q.stockEntityColorDot, { backgroundColor: e }] })) : "STOCK" === t.assetType && n.createElement(m.ZP, { style: q.singleEntityStockSymbol, weight: "bold" }, `${t.symbol}:${t.exchange}`), n.createElement(d.Z, { style: q.stockPriceContainer }, n.createElement(m.ZP, { style: q.stockPrice, weight: "heavy" }, O(t.currentPrice.value.toFixed(2))), n.createElement(m.ZP, { style: q.stockCurrency, weight: "bold" }, t.currentPrice.currency.toUpperCase())), l);
            }
            const q = u.default.create((e) => ({ stockEntityContainer: { display: "flex", flexDirection: "column", alignItems: "start", gap: e.spaces.space12 }, multipleStockEntityContainer: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, padding: e.spaces.space8 }, stockNameColorContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", gap: e.spaces.space12 }, stockNameContainer: { display: "flex", flexDirection: "row", alignItems: "center", fontSize: e.fontSizes.subtext3, gap: e.spaces.space4 }, logo: { width: e.spaces.space12, height: e.spaces.space12 }, stockSymbol: { fontSize: "inherit", lineHeight: "inherit" }, singleEntityStockSymbol: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, stockName: { fontSize: "inherit", lineHeight: "inherit" }, stockEntityColorDot: { width: 9, height: 9, borderRadius: 9 }, stockPriceContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, stockPrice: { fontSize: e.fontSizes.title4, lineHeight: e.fontSizes.title4 }, stockCurrency: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, dot: { width: 2, height: 2, borderRadius: 2, backgroundColor: e.colors.brandColor } }));
            var X = a(214997),
                Y = a(18205),
                J = a(632908),
                Q = a(755484),
                ee = a(730840),
                te = a(725556),
                ae = a(103131),
                ne = a(735081),
                oe = a(663004),
                re = a(989272),
                ie = a(466792),
                se = a(187669),
                le = a(949626);
            function ce({ active: e, label: t, payload: a }) {
                if (e && a && a.length) {
                    const e = [];
                    a.forEach((t) => {
                        const a = t.dataKey.split("-")[0];
                        e.push({ symbol: a, price: Number(t.payload[`${a}-price-value`]), percent: Number(t.payload[`${a}-percent-value`]), currency: t.payload[`${a}-currency`], color: t.payload[`${a}-color`] });
                    });
                    const t = a[0].payload.dateTime,
                        o = a[0].payload.type ? a[0].payload.type : "",
                        r = v(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        i = a[0].payload.variant,
                        s = e.sort((e, t) => ("COMPARISON" === i ? t.percent - e.percent : t.price - e.price));
                    return n.createElement(
                        d.Z,
                        { style: de.tooltip },
                        s.map((e) => {
                            const t = `${O(e.percent.toFixed(2))}%`,
                                a = `${E[e.currency]}${O($(e.price, 2).toString())}`;
                            return n.createElement(d.Z, { key: e.symbol, style: de.tooltipStock }, n.createElement(d.Z, { style: { ...de.tooltipStockColor, backgroundColor: e.color } }), n.createElement(m.ZP, { style: de.tooltipStockSymbol, weight: "bold" }, e.symbol), n.createElement(d.Z, null), "COMPARISON" === i && n.createElement(n.Fragment, null, n.createElement(m.ZP, { style: de.tooltipValue }, t), n.createElement(m.ZP, { style: de.tooltipValue }, `(${a})`)), "SINGLE" === i && n.createElement(m.ZP, { style: de.tooltipValue }, a));
                        }),
                        n.createElement(m.ZP, { style: de.tooltipDate }, r),
                        !!o && n.createElement(m.ZP, { style: de.tooltipDate }, w[o]),
                    );
                }
                return null;
            }
            const de = u.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space4, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, tooltipStock: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipStockColor: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4 }, tooltipStockSymbol: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } })),
                me = 200,
                ye = "stock-card-recharts";
            function pe({ entitiesData: e, selectStockSymbol: t, selectedPeriod: a, selectedStockSymbols: o, timeZone: r, variant: i }) {
                (0, se.q)(() => {
                    (0, re.fH)(`\n        .${ye} .recharts-surface {\n          overflow: visible;\n        }\n      `, ye);
                });
                const s = Object.keys(o).length > 0,
                    l = `line-chart-${a}-${Object.keys(o).join("-")}`,
                    { chartData: c } = (function ({ entitiesData: e, selectedPeriod: t, selectedStockSymbols: a, variant: o }) {
                        const r = Object.keys(a).length > 0;
                        return {
                            chartData: n.useMemo(() => {
                                const n = {};
                                for (const i of e)
                                    if (!r || a[i.entity.symbol])
                                        if ("1D" === t && "STOCK" === i.entity.assetType && i.oneDayDataBreakdown) {
                                            const e = i.oneDayDataBreakdown;
                                            ["preMarket", "today", "afterHours"].forEach((t) => {
                                                e.price_data[t].forEach((e) => {
                                                    const a = new Date(e.timestamp).getTime();
                                                    n[a] || (n[a] = { dateTime: a, type: t, variant: o }), (n[a][`${i.entity.symbol}-price-value`] = e.value), (n[a][`${i.entity.symbol}-symbol`] = i.entity.symbol), (n[a][`${i.entity.symbol}-currency`] = i.entity.currentPrice.currency.toUpperCase()), (n[a][`${i.entity.symbol}-color`] = i.chartStyle.color);
                                                }),
                                                    "COMPARISON" === o &&
                                                        e.percent_data &&
                                                        e.percent_data[t].forEach((e) => {
                                                            const t = new Date(e.timestamp).getTime();
                                                            n[t] && (n[t][`${i.entity.symbol}-percent-value`] = e.value);
                                                        });
                                            });
                                        } else
                                            i.chartData.price_data[t].forEach((e) => {
                                                const t = new Date(e.timestamp).getTime();
                                                n[t] || (n[t] = { dateTime: t, variant: o }), (n[t][`${i.entity.symbol}-price-value`] = e.value), (n[t][`${i.entity.symbol}-symbol`] = i.entity.symbol), (n[t][`${i.entity.symbol}-currency`] = i.entity.currentPrice.currency.toUpperCase()), (n[t][`${i.entity.symbol}-color`] = i.chartStyle.color);
                                            }),
                                                "COMPARISON" === o &&
                                                    i.chartData.percent_data &&
                                                    i.chartData.percent_data[t].forEach((e) => {
                                                        const t = new Date(e.timestamp).getTime();
                                                        n[t] && (n[t][`${i.entity.symbol}-percent-value`] = e.value);
                                                    });
                                return Object.values(n).sort((e, t) => e.dateTime - t.dateTime);
                            }, [e, t, a, r, o]),
                        };
                    })({ entitiesData: e, selectedPeriod: a, selectedStockSymbols: o, variant: i }),
                    y = n.useMemo(() => {
                        const e = [];
                        return (
                            c.forEach((t) => {
                                Object.keys(t).forEach((a) => {
                                    a.endsWith("COMPARISON" === i ? "-percent-value" : "-price-value") && e.push(Number(t[a]));
                                });
                            }),
                            [Math.min(...e), Math.max(...e)]
                        );
                    }, [c, i]),
                    p = n.useCallback(
                        (e) => {
                            const t = new Date(e);
                            return "1D" === a
                                ? (function (e) {
                                      const t = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric" }).formatToParts(e),
                                          a = t.find((e) => "hour" === e.type),
                                          n = t.find((e) => "minute" === e.type),
                                          o = t.find((e) => "dayPeriod" === e.type);
                                      if (!a || !n || !o) throw new Error(`Failed to format time for date: ${e.toDateString()}`);
                                      return `${a.value}:${n.value} ${o.value}`;
                                  })(t)
                                : v(t, "5D" === a || "1M" === a ? { month: !0, day: !0 } : "3M" === a || "6M" === a || "YTD" === a || "1Y" === a ? { month: !0, year: !0 } : { year: !0 });
                        },
                        [a],
                    ),
                    h = n.useMemo(() => {
                        const e = {},
                            t = [];
                        for (const a of c) {
                            const n = p(a.dateTime);
                            e[n] || ((e[n] = !0), t.push(a.dateTime));
                        }
                        if (t.length <= 6) return t;
                        const a = [0];
                        for (let e = 1; e < 5; e++) {
                            const n = Math.floor((t.length - 1) * (e / 5));
                            a.includes(n) || a.push(n);
                        }
                        return a.includes(t.length - 1) || a.push(t.length - 1), a.map((e) => t[e]);
                    }, [c, p]),
                    g = n.useMemo(() => {
                        if ("TOKEN" === e[0].entity.assetType || "COIN" === e[0].entity.assetType) return ["dataMin", "dataMax"];
                        if ("1D" === a) {
                            const { oneDayData: t, range: n } = (function (e, t) {
                                const a = P(new Date(), t),
                                    n = e.filter((e) => {
                                        const n = P(new Date(e.timestamp), t);
                                        return n.year === a.year && n.month === a.month && n.day === a.day;
                                    });
                                if (n.length <= 0) return { oneDayData: [], range: null };
                                const o = n[0].timestamp,
                                    r = new Date(o),
                                    i = n[n.length - 1].timestamp,
                                    s = new Date(i),
                                    l = T(o) || T(i),
                                    c = n[0].timestamp.split("T")[0],
                                    d = new Date(`${c}T${D}${l}`);
                                return { oneDayData: n, range: [r.getTime(), Math.max(s.getTime(), d.getTime())] };
                            })(e[0].chartData.price_data[a], r);
                            return t.length <= 0 || !n ? ["dataMin", "dataMax"] : n;
                        }
                        return ["dataMin", "dataMax"];
                    }, [e, r, a]),
                    f = "STOCK" === e[0].entity.assetType ? e[0].entity.metrics.prevDayClose : null,
                    b = "SINGLE" === i && "1D" === a,
                    C = n.useMemo(() => (b && f ? [Math.min(f, y[0]), Math.max(f, y[1])] : [y[0], y[1]]), [f, b, y]);
                return n.createElement(
                    d.Z,
                    null,
                    "COMPARISON" === i &&
                        n.createElement(
                            X.Z,
                            { contentContainerStyle: ue.stockLegendContentContainer, horizontal: !0, style: ue.stockLegendContainer },
                            e.map((e) => {
                                const a = o[e.entity.symbol];
                                return n.createElement(ie.Z, { key: `legend-${e.entity.name}` }, ({ isHovered: o }) => n.createElement(d.Z, { onClick: () => t(e.entity.symbol), style: [ue.stockLegend, a ? ue.selectedStockLegend : void 0, o ? ue.hoveredStockLegend : void 0] }, n.createElement(m.ZP, { style: ue.stockLegendText, weight: "bold" }, e.entity.symbol), n.createElement(d.Z, { style: { ...ue.stockLegendColorLabel, backgroundColor: e.chartStyle.color } })));
                            }),
                        ),
                    n.createElement(
                        d.Z,
                        { style: ue.stockGraph },
                        n.createElement(
                            le.Z,
                            { className: ye },
                            n.createElement(
                                Y.h,
                                { height: me },
                                n.createElement(
                                    J.w,
                                    { data: c, height: me, key: l },
                                    n.createElement(Q.q, { fillOpacity: 0.6, horizontal: !0, stroke: u.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    b && f && n.createElement(ee.d, { stroke: u.default.theme.colors.gray800, strokeDasharray: "1 5", y: f }),
                                    n.createElement(te.K, { axisLine: !1, dataKey: "dateTime", domain: g, tick: ue.tick, tickFormatter: p, tickLine: !1, ticks: "1D" === a ? void 0 : h, type: "1D" === a ? "number" : void 0 }),
                                    n.createElement(ae.B, {
                                        axisLine: !1,
                                        domain: C,
                                        tick: ue.tick,
                                        tickFormatter: (t) => {
                                            if ("COMPARISON" === i) return `${Z(t, 1)}%`;
                                            let a = t.toString();
                                            const n = y[1] - y[0];
                                            return (a = n < 0.01 ? t.toFixed(3) : n < 0.1 ? t.toFixed(2) : n < 1 ? t.toFixed(1) : Math.round(t).toString()), `${E[e[0].entity.currentPrice.currency.toUpperCase()]}${O(a)}`;
                                        },
                                        tickLine: !1,
                                    }),
                                    n.createElement(ne.u, { content: n.createElement(ce, null), cursor: { stroke: u.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    e.map((e) => (o[e.entity.symbol] || !s ? n.createElement(oe.x, { activeDot: !1, connectNulls: !0, dataKey: "COMPARISON" === i ? `${e.entity.symbol}-percent-value` : `${e.entity.symbol}-price-value`, dot: !1, isAnimationActive: !1, key: `stock-line-${e.entity.symbol}`, stroke: e.chartStyle.color, strokeWidth: 2, type: "monotone" }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const ue = u.default.create((e) => ({ stockLegendContainer: { marginBottom: e.spaces.space8, width: "100%", height: "max-content", flexGrow: 0 }, stockLegendContentContainer: { paddingBottom: e.spaces.space12, display: "flex", flexDirection: "row", gap: e.spaces.space4 }, stockLegend: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, height: "max-content" }, selectedStockLegend: { backgroundColor: e.colors.gray100 }, hoveredStockLegend: { backgroundColor: e.colors.gray50, cursor: "pointer" }, stockLegendText: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, stockLegendColorLabel: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, stockGraph: { flex: 1, start: -25, position: "relative", bottom: -10 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } }));
            function he({ periodOptions: e, selectedPeriod: t, setSelectedPeriod: a }) {
                const o = n.useId();
                return n.createElement(
                    p.Z,
                    { style: ge.periodBar },
                    e.map((e, r) => {
                        const i = e === t;
                        return n.createElement(ie.Z, { key: `${e}-${o}` }, ({ isHovered: t }) => n.createElement(d.Z, { onClick: () => a(e), style: [ge.period, i ? ge.selectedPeriod : void 0, t ? ge.hoveredPeriod : void 0] }, n.createElement(m.ZP, { style: ge.periodText, weight: i ? "bold" : "normal" }, e)));
                    }),
                );
            }
            const ge = u.default.create((e) => ({ periodBar: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, period: { display: "flex", justifyContent: "center", alignItems: "center", padding: e.spaces.space8, borderRadius: e.borderRadii.small, backgroundColor: "transparent", marginEnd: e.spaces.space8 }, hoveredPeriod: { backgroundColor: e.colors.gray100, cursor: "pointer" }, selectedPeriod: { backgroundColor: e.colors.gray100 }, periodText: { textAlign: "center", fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 } })),
                fe = g().bfd161bc;
            function be({ cardAttachment: e, isAnimated: t }) {
                const [a, o] = n.useState({}),
                    r = Object.keys(a).length > 0,
                    { entitiesData: i, entitiesPercentChanges: s } = (function ({ cardAttachment: e }) {
                        const t = n.useMemo(() => {
                                const t = [u.default.theme.colors.blue700, u.default.theme.colors.green700, u.default.theme.colors.orange700, u.default.theme.colors.magenta700, u.default.theme.colors.plum700, u.default.theme.colors.purple700, u.default.theme.colors.red700, u.default.theme.colors.teal700, u.default.theme.colors.yellow700];
                                return "COMPARISON" === e.variant ? e.entities.map((a, n) => ({ entity: { ...a, name: I(a.name) }, chartData: e.chartData[a.symbol] || e.chartData[a.name], chartStyle: { color: t[n % t.length] }, oneDayDataBreakdown: "STOCK" === a.assetType ? { price_data: z(e.chartData[a.symbol].price_data["1D"]), percent_data: z(e.chartData[a.symbol].percent_data["1D"]) } : null })) : [{ entity: { ...e.entity, name: I(e.entity.name) }, chartData: { price_data: e.chartData.price_data }, chartStyle: { color: t[0] }, oneDayDataBreakdown: { price_data: z(e.chartData.price_data["1D"]) } }];
                            }, [e]),
                            a = n.useMemo(() => {
                                const e = {};
                                function a(e, t, a) {
                                    const n = e - t,
                                        o = (n / t) * 100;
                                    let r = S.NOCHANGE;
                                    return n > 0 ? (r = S.UP) : n < 0 && (r = S.DOWN), { percentageChange: Math.abs(o) < 0.01 ? O($(o)) : O(o.toFixed(2)), amountChange: Math.abs(n) < 0.01 ? O($(n)) : O(n.toFixed(2)), direction: r };
                                }
                                return (
                                    t.forEach((t) => {
                                        if ("STOCK" === t.entity.assetType) {
                                            const n = t.entity;
                                            Object.keys(t.chartData.price_data).forEach((o) => {
                                                if ("1D" === o && t.oneDayDataBreakdown) {
                                                    const o = t.oneDayDataBreakdown.price_data.preMarket,
                                                        r = t.oneDayDataBreakdown.price_data.afterHours,
                                                        i = n.metrics.prevDayClose;
                                                    e[n.symbol] = { "1D": { preMarket: o.length && i ? a(o[o.length - 1].value, i) : null, today: i ? a(t.entity.currentPrice.value, i) : null, afterHours: r.length && i ? a(r[r.length - 1].value, t.entity.currentPrice.value) : null } };
                                                } else {
                                                    const n = t.chartData.price_data[o];
                                                    n.length > 0 && (e[t.entity.symbol] = { ...e[t.entity.symbol], [o]: a(n[n.length - 1].value, n[0].value) });
                                                }
                                            });
                                        } else
                                            ("TOKEN" !== t.entity.assetType && "COIN" !== t.entity.assetType) ||
                                                Object.keys(t.chartData.price_data).forEach((n) => {
                                                    const o = t.chartData.price_data[n];
                                                    o.length > 0 && (e[t.entity.symbol] = { ...e[t.entity.symbol], [n]: a(o[o.length - 1].value, o[0].value) });
                                                });
                                    }),
                                    e
                                );
                            }, [t]);
                        return { entitiesData: t, entitiesPercentChanges: a };
                    })({ cardAttachment: e }),
                    l = n.useCallback(
                        (e) => {
                            const t = { ...a };
                            a[e] ? delete t[e] : (t[e] = !0), o(t);
                        },
                        [a],
                    ),
                    c = i.length > 1,
                    h = n.useMemo(() => {
                        const e = [];
                        return (
                            i.forEach((t) => {
                                Object.keys(t.chartData.price_data).forEach((a) => {
                                    c ? t.chartData.percent_data && t.chartData.percent_data[a] && t.chartData.percent_data[a].length && t.chartData.price_data[a].length && !e.includes(a) && e.push(a) : t.chartData.price_data[a].length && !e.includes(a) && e.push(a);
                                });
                            }),
                            e
                        );
                    }, [i, c]),
                    [g, E] = n.useState(h[0] || "1D"),
                    w = n.useMemo(() => [...i].sort((e, t) => (a[e.entity.symbol] && a[t.entity.symbol] ? 0 : a[e.entity.symbol] && !a[t.entity.symbol] ? -1 : a[t.entity.symbol] && !a[e.entity.symbol] ? 1 : 0)), [a, i]),
                    x = i[0].entity;
                return n.createElement(
                    f.Z,
                    { isAnimated: t, style: Ce.container },
                    n.createElement(d.Z, { style: Ce.headerContainer }, c ? n.createElement(m.ZP, { style: Ce.header, weight: "bold" }, fe) : n.createElement(d.Z, { style: Ce.headerStockNameContainer }, "STOCK" === x.assetType && k[x.symbol] && n.createElement(y.Z, { resizeMode: "contain", source: k[x.symbol], style: Ce.logo }), ("TOKEN" === x.assetType || "COIN" === x.assetType) && C[x.name] && n.createElement(y.Z, { resizeMode: "contain", source: C[x.name], style: Ce.logo }), n.createElement(m.ZP, { style: Ce.header, weight: "bold" }, i[0].entity.name)), n.createElement(b.Z, { timestamp: e.created_at })),
                    n.createElement(
                        p.Z,
                        { style: Ce.headerEntityContainer },
                        w.map((e) => {
                            const t = e.entity,
                                o = s[t.symbol][g],
                                i = r && !a[t.symbol];
                            return n.createElement(G, { color: e.chartStyle.color, entity: t, key: `header-${t.symbol}`, multipleEntities: c, oneDayStockPriceChange: s[t.symbol]["1D"], selectedPeriod: g, stockPriceChange: o, style: [Ce.entity, i ? Ce.lessVisibleEntity : void 0] });
                        }),
                    ),
                    n.createElement(he, { periodOptions: h, selectedPeriod: g, setSelectedPeriod: E }),
                    n.createElement(pe, { entitiesData: i, selectStockSymbol: l, selectedPeriod: g, selectedStockSymbols: a, timeZone: e.timeZone, variant: e.variant }),
                    w.map((e) => n.createElement(j, { entity: e.entity, key: `${e.entity.symbol}-details}`, multipleEntities: c, style: r && !a[e.entity.symbol] ? Ce.lessVisibleEntity : void 0 })),
                );
            }
            const Ce = u.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, headerStockNameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, logo: { width: e.spaces.space16, height: e.spaces.space16 }, header: { fontSize: e.fontSizes.subtext2 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: e.spaces.space8 }, headerEntityContainer: { width: "100%", display: "flex", flexDirection: "row" }, entity: { marginEnd: e.spaces.space16 }, lessVisibleEntity: { opacity: 0.3 } }));
            var ke = a(154003),
                Se = a(161924),
                Ee = a(323265),
                we = a(806528),
                xe = a(341276),
                De = a(958602),
                ve = a(530326),
                Ze = a(654917);
            const Pe = g().a22063d2,
                Te = g().db3248a8,
                ze = g().ffe0e588;
            function Ie({ analysisEntityId: e, cardAttachment: t, conversationKey: a, isAnimated: o, userChatItemId: l }) {
                const c = (0, s.I0)(),
                    [y, p] = n.useState(!1),
                    u = n.useRef(!1),
                    h = (0, s.v9)(we.wM),
                    g = (0, s.v9)(we.Bz),
                    b = (0, Ze.uf)(),
                    C = (0, i.z)(),
                    k = (0, r.hC)("responsive_web_grok_show_citations"),
                    S = !!g,
                    E = h === xe.S.granted || S,
                    w = !E && h === xe.S.denied;
                n.useEffect(() => {
                    y && S && !u.current && ((u.current = !0), !l && o && c((0, De.I)({ analytics: C, conversationKey: a })), c((0, ve.f)({ analytics: C, userChatItemId: l || void 0, conversationKey: a })({ analysisEntityId: e, returnCitations: k })));
                }, [o, b, C, y, c, l, a, e, S, k]);
                const x = n.useCallback(() => {
                    p(!0), c((0, we.iG)());
                }, [c, p]);
                return w || Ee.ZP.isAndroid() || S ? null : n.createElement(f.Z, { isAnimated: o }, n.createElement(d.Z, { style: $e.container }, n.createElement(d.Z, { style: $e.leftContainer }, n.createElement(Se.default, null), E ? n.createElement(d.Z, { style: $e.searchingLabelContainer }, n.createElement(m.ZP, { style: $e.searchingLabel }, n.createElement("span", null, Te, "..."))) : n.createElement(m.ZP, null, Pe)), n.createElement(ke.ZP, { disabled: y, onClick: x, size: "small", type: "primaryFilled" }, n.createElement(m.ZP, null, ze))));
            }
            const $e = u.default.create((e) => ({ container: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", gap: e.spaces.space8 }, leftContainer: { flexShrink: 1, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, searchingLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, searchingLabel: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } }));
            var Oe = a(394418),
                Me = a(306191),
                _e = a(641095),
                Ne = a(544687),
                Ae = a(488662),
                He = a(267272),
                Re = a(761434),
                Le = a(396184),
                Fe = a(569824);
            function Ke({ analysisEntityId: e, cardAttachment: t, conversationKey: a, isAnimated: d, userChatItemId: m }) {
                const y = (0, i.z)(),
                    p = (0, s.I0)(),
                    u = (0, r.hC)("responsive_web_grok_sport_cards_enabled"),
                    h = (0, r.hC)("responsive_web_grok_finance_cards_enabled"),
                    g = (0, r.hC)("responsive_web_grok_places_card_enabled"),
                    f = (0, r.hC)("responsive_web_grok_weather_card_enabled"),
                    b = n.useCallback(
                        (e) => {
                            a && y && ((0, c.HR)(y, t, e), p((0, l.u)({ analytics: y, conversationKey: a })({ text: e, returnCitations: !1 })));
                        },
                        [y, a, p, t],
                    ),
                    C = n.useMemo(() => {
                        if ("sports_card" === t.cardType && u) {
                            switch (t.variant) {
                                case "SportsStatsCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].stat) return (0, c.S7)(y, t), n.createElement(He.Z, { cardAttachment: t, isAnimated: d });
                                    break;
                                case "SportsTeamCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].team) return (0, c.S7)(y, t), n.createElement(Re.Z, { cardAttachment: t, isAnimated: d, onSendPrompt: b });
                                    break;
                                case "SportsPlayerCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].player) return (0, c.S7)(y, t), n.createElement(_e.Z, { cardAttachment: t, isAnimated: d, onSendPrompt: b });
                                    break;
                                case "SportsBoxscoreCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].boxscore) return (0, c.S7)(y, t), n.createElement(Me.Z, { cardAttachment: t, isAnimated: d, onSendPrompt: b });
                                    break;
                                case "SportsScheduleCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].schedule) return (0, c.S7)(y, t), n.createElement(Ne.Z, { cardAttachment: t, isAnimated: d, onSendPrompt: b });
                                    break;
                                case "SportsStandingsCard":
                                    if (Le.s8[t.sport] && Le.s8[t.sport].standing) return (0, c.S7)(y, t), n.createElement(Ae.Z, { cardAttachment: t, isAnimated: d, onSendPrompt: b });
                                    break;
                                default:
                                    return null;
                            }
                            return null;
                        }
                        return "geo_location_request" === t.cardType ? ((0, c.S7)(y, t), n.createElement(Ie, { analysisEntityId: e || "", cardAttachment: {}, conversationKey: a, isAnimated: d, userChatItemId: m || "" })) : "finance_card" !== t.cardType || ("SINGLE" !== t.variant && "COMPARISON" !== t.variant) || !h ? ("places_card" === t.cardType && g ? ((0, c.S7)(y, t), n.createElement(Oe.Z, { cardAttachment: t, isAnimated: d })) : "weather_card" === t.cardType && f ? ((0, c.S7)(y, t), n.createElement(Fe.Z, { cardAttachment: t, isAnimated: d })) : void 0) : ((0, c.S7)(y, t), n.createElement(be, { cardAttachment: t, isAnimated: d }));
                    }, [t, u, g, d, m, a, e, h, b, f, y]);
                return n.createElement(o.Z, { hideOnError: !0 }, C);
            }
        },
        572929: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                o = a(325686),
                r = a(392237),
                i = a(988290);
            function s({ children: e, isAnimated: t, style: a }) {
                const { isCompactLayout: r } = (0, i.ZP)();
                return n.createElement(o.Z, { style: [l.container, r ? l.compactContainer : void 0, t ? l.animated : void 0, a] }, e);
            }
            const l = r.default.create((e) => ({ container: { backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12, paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, compactContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, animated: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        339838: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(202784),
                o = a(731708),
                r = a(392237),
                i = a(674132),
                s = a.n(i),
                l = a(988290);
            const c = s().j5dcf1b2;
            function d({ style: e, text: t, timestamp: a }) {
                const { isCompactLayout: r } = (0, l.ZP)(),
                    { timeZone: i } = window.Intl.DateTimeFormat().resolvedOptions(),
                    s = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", timeZoneName: "short", timeZone: i }).format(new Date(a.endsWith("Z") ? a : `${a}Z`));
                return t ? n.createElement(o.ZP, { style: [m.text, r ? m.compactText : void 0, e] }, `${c} ${s} • ${t}`) : n.createElement(o.ZP, { style: [m.text, r ? m.compactText : void 0, e] }, `${c} ${s}`);
            }
            const m = r.default.create((e) => ({ text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, compactText: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 } }));
        },
        265687: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(214997),
                r = a(325686),
                i = a(392237),
                s = a(674132),
                l = a.n(s),
                c = a(584316);
            const d = l().ffd9cfe6,
                m = l().bed99fe2,
                y = 3;
            function p({ rowStyle: e, colStyle: t, defaultRowRangeToShow: a, numIncrementalRowsToShow: i, fixedColIdx: s, headers: l, rows: p, seeLessLabel: u = m, seeMoreLabel: h = d, style: b }) {
                const [C, k] = n.useState(!1),
                    [S, E] = n.useState(() => (void 0 === a ? [0, p.length] : [a[0], Math.min(a[1], p.length)])),
                    w = void 0 === a || 0 === p.length || (0 === a[0] && Math.min(a[1], p.length) === p.length),
                    x = S[0] <= 0 && S[1] >= p.length,
                    D = n.useMemo(() => p.slice(...S), [S, p]),
                    v = n.useMemo(() => (void 0 === s ? null : n.createElement(g, { columnStyle: [t, f.fixedCol], header: l[s], rowStyle: [e, f.fixedColRow], rows: D.map((e) => e[s]) })), [s, l, D, e, t]),
                    Z = n.useMemo(
                        () =>
                            n.createElement(
                                o.Z,
                                {
                                    contentContainerStyle: f.scrollableTableContentContainerStyle,
                                    horizontal: !0,
                                    onScroll: (e) => {
                                        const t = e.nativeEvent.contentOffset.x;
                                        k(t > 0);
                                    },
                                    scrollEventThrottle: 16,
                                    showsHorizontalScrollIndicator: !1,
                                    style: f.scrollableTableContainer,
                                },
                                l.map((a, o) => {
                                    const r = o === l.length - 1;
                                    return s === o ? n.createElement(g, { columnStyle: f.emptyTableCol, header: null, key: `$col-${o}`, rowStyle: e, rows: D.map((e) => null) }) : n.createElement(g, { columnStyle: t, header: a, key: `$col-${o}`, rowStyle: [r ? f.lastColRow : void 0, e], rows: D.map((e) => e[o]) });
                                }),
                            ),
                        [s, l, D, e, t],
                    );
                return n.createElement(
                    r.Z,
                    { style: b },
                    n.createElement(r.Z, { style: f.tableContainer }, v, n.createElement(r.Z, { style: f.rightTableContainer }, C && n.createElement(r.Z, { style: f.shadow }), Z)),
                    !w &&
                        n.createElement(c.Z, {
                            onClick: () => {
                                E(x && a ? a : [0, Math.min(S[1] + (i || y), p.length)]);
                            },
                            seeLessLabel: u,
                            seeMoreLabel: h,
                            showingMore: x,
                            style: f.seeMore,
                        }),
                );
            }
            const u = ({ children: e, style: t }) => n.createElement(r.Z, { style: [f.col, t] }, e),
                h = ({ children: e, isHeaderRow: t, isLastRow: a, style: o }) => n.createElement(r.Z, { style: [f.row, t ? f.headerRow : void 0, a ? f.lastRow : void 0, o] }, e),
                g = ({ columnStyle: e, header: t, rowStyle: a, rows: o }) =>
                    n.createElement(
                        u,
                        { style: e },
                        n.createElement(h, { isHeaderRow: !0, style: a }, t),
                        o.map((e, t) => n.createElement(h, { isLastRow: t === o.length - 1, key: `row-${t}`, style: a }, e)),
                    ),
                f = i.default.create((e) => ({ tableContainer: { display: "flex", flexDirection: "row", flex: 1 }, rightTableContainer: { flex: 1, position: "relative" }, shadow: { position: "absolute", start: -1, top: 0, bottom: 0, width: e.spaces.space24, backgroundImage: `linear-gradient(90deg, ${e.colors.gray0} 0%, transparent 100%)`, zIndex: 1 }, scrollableTableContainer: { flex: 1 }, scrollableTableContentContainerStyle: { display: "flex", flexDirection: "row", flex: 1 }, col: { display: "flex", flexDirection: "column", alignItems: "flex-end" }, fixedCol: { alignItems: "flex-start", flex: "unset", width: "unset" }, emptyTableCol: { display: "flex", flex: 1 }, row: { display: "flex", flexDirection: "column", alignItems: "inherit", justifyContent: "center", borderTopWidth: 0.5, borderStyle: "solid", borderColor: e.colors.gray200, fontSize: e.fontSizes.subtext2, height: e.spaces.space40, flex: 1, width: "100%", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, fixedColRow: { paddingHorizontal: 0, paddingEnd: e.spaces.space12 }, lastColRow: { paddingEnd: 0 }, headerRow: { borderTopWidth: "none", paddingTop: 0 }, lastRow: { paddingBottom: 0 }, seeMore: { marginTop: e.spaces.space16 } }));
        },
        584316: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(202784),
                o = a(466792),
                r = a(731708);
            function i({ onClick: e, seeLessLabel: t, seeMoreLabel: a, showingMore: i, style: l }) {
                return n.createElement(o.Z, null, ({ isHovered: o }) => n.createElement(r.ZP, { onClick: e, style: [s.seeMore, o ? s.seeMoreHovered : void 0, l], weight: "medium" }, i ? t : a));
            }
            const s = a(392237).default.create((e) => ({ seeMore: { alignSelf: "center", textAlign: "center", fontSize: e.fontSizes.subtext3, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "background-color 0.1s ease", backgroundColor: "transparent", lineHeight: e.fontSizes.subtext3 }, seeMoreHovered: { backgroundColor: e.colors.gray100, cursor: "pointer" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-d49ace54.fa44cdba.js.map

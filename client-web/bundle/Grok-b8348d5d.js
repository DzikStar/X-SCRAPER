"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-b8348d5d"],
    {
        569824: (e, t, r) => {
            r.d(t, { Z: () => J });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(392237),
                i = r(572929),
                s = r(339838),
                c = r(349929),
                l = r(731708),
                u = r(674132),
                p = r.n(u),
                m = r(988290),
                d = r(584316),
                h = (r(571372), r(209725));
            const g = p().d490977e,
                f = p().g02dacc0,
                y = p().e9f55db8,
                w = p().e9cf3af8,
                b = p().d5868a7e,
                x = p().b5dfdb46,
                M = p().ab8095a2,
                C = p().e298e6f2,
                S = p().ef519654,
                F = p().c609a1b4,
                D = p().j92274b0,
                E = p().ja482160,
                T = p().f4ad4cb0,
                z = p().d66bf142,
                Z = p().dc17968a,
                v = p().j310a2d6;
            function H(e, t, r) {
                if (t === r) return e;
                if ("F" === t && "C" === r) return (5 * (e - 32)) / 9;
                if ("C" === t && "F" === r) return (9 * e) / 5 + 32;
                throw new Error("Invalid unit combination for temperature conversion.");
            }
            function P(e) {
                switch (e) {
                    case "BlowingDust":
                    case "Breezy":
                    case "Windy":
                        return h.DSs;
                    case "Clear":
                        return h.enB;
                    case "Cloudy":
                        return h.uM9;
                    case "Foggy":
                    case "Smoky":
                        return h.DjS;
                    case "Haze":
                    case "MostlyClear":
                    case "MostlyCloudy":
                    case "PartlyCloudy":
                        return h.S9Y;
                    case "Drizzle":
                    case "Rain":
                    case "Sleet":
                    case "FreezingDrizzle":
                    case "FreezingRain":
                        return h.M07;
                    case "HeavyRain":
                        return h.$w6;
                    case "IsolatedThunderstorms":
                    case "ScatteredThunderstorms":
                    case "StrongStorms":
                    case "Thunderstorms":
                        return h.$iP;
                    case "SunShowers":
                    case "SunFlurries":
                        return h.yz3;
                    case "Frigid":
                    case "Snow":
                    case "Blizzard":
                    case "BlowingSnow":
                    case "HeavySnow":
                        return h.jOV;
                    case "Hail":
                    case "Flurries":
                    case "WintryMix":
                        return h.CJg;
                    case "Hot":
                        return h.iVn;
                    case "Hurricane":
                    case "TropicalStorm":
                        return h.yjX;
                    default:
                        return h.ccn;
                }
            }
            function $(e, t) {
                const r = { temp: "F" === t ? 40 : H(40, "F", "C"), color: [107, 201, 251] },
                    a = { temp: "F" === t ? 70 : H(70, "F", "C"), color: [167, 194, 92] },
                    n = { temp: "F" === t ? 100 : H(100, "F", "C"), color: [255, 69, 0] };
                if (e <= r.temp) return `rgb(${r.color.join(",")})`;
                if (e >= n.temp) return `rgb(${n.color.join(",")})`;
                if (e <= a.temp) {
                    const t = (e - r.temp) / (a.temp - r.temp);
                    return `rgb(${r.color.map((e, r) => Math.round(e + (a.color[r] - e) * t)).join(",")})`;
                }
                {
                    const t = (e - a.temp) / (n.temp - a.temp);
                    return `rgb(${a.color.map((e, r) => Math.round(e + (n.color[r] - e) * t)).join(",")})`;
                }
            }
            function _({ currentTemperature: e, globalMax: t, globalMin: r, isToday: i, max: s, min: c, style: u, temperatureType: p }) {
                const m = Math.round(t) - Math.round(r),
                    d = ((Math.round(c) - Math.round(r)) / Math.round(m)) * 100,
                    h = ((Math.round(s) - Math.round(c)) / Math.round(m)) * 100,
                    g = ((Math.round(e) - Math.round(r)) / Math.round(m)) * 100;
                return a.createElement(n.Z, { style: [k.container, u] }, a.createElement(l.ZP, { style: [k.temperature, k.low], weight: "bold" }, `${c}°`), a.createElement(n.Z, { style: k.bar }, a.createElement(n.Z, { style: [k.innerBar, { width: `${h}%`, start: `${d}%`, background: `linear-gradient(to right, ${$(c, p)}, ${$(s, p)})` }] }), i && a.createElement(n.Z, { style: [k.currentTemperatureIndicator, { start: `calc(${g}% - ${o.default.theme.spaces.space4})` }] })), a.createElement(l.ZP, { style: k.temperature, weight: "bold" }, `${s}°`));
            }
            const k = o.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, temperature: { fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 }, low: { color: e.colors.gray600 }, bar: { display: "flex", flex: 1, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray50, position: "relative" }, innerBar: { height: "100%", borderRadius: e.spaces.space4, position: "absolute" }, currentTemperatureIndicator: { position: "absolute", height: e.spaces.space8, width: e.spaces.space8, borderRadius: e.spaces.space8, borderStyle: "solid", top: "50%", transform: [{ translateY: "-50%", translateX: "-50%" }], borderColor: e.colors.gray50, borderWidth: e.spaces.space2, backgroundColor: e.colors.white } })),
                L = p().d228a9a0,
                O = p().c174e46e;
            function I({ currentTemperature: e, dailyForecast: t, defaultNumDaysToShow: r = 5, temperatureType: o }) {
                const { isCompactLayout: i } = (0, m.ZP)(),
                    [s, u] = a.useState(r),
                    p = r >= t.days.length,
                    h = s >= t.days.length,
                    g = a.useMemo(() => t.days.slice(0, s), [s, t]),
                    H = a.useMemo(() => [Math.min(...t.days.map((e) => e.temperatureMin)), Math.max(...t.days.map((e) => e.temperatureMax))], [t]);
                return a.createElement(
                    n.Z,
                    { style: j.container },
                    g.map((t) => {
                        const r = new Date(t.forecastStart),
                            s = r.toDateString() === new Date().toDateString(),
                            u = (function (e, t) {
                                const r = new Date();
                                return e.toDateString() === r.toDateString() ? f : (t ? [F, D, E, T, z, Z, v] : [y, w, b, x, M, C, S])[e.getDay()];
                            })(r, i),
                            p = Math.round(t.temperatureMin),
                            m = Math.round(t.temperatureMax);
                        return a.createElement(n.Z, { key: `day-${t.forecastStart}`, style: j.dayTemperatureContainer }, a.createElement(l.ZP, { style: [j.timeLabel, i ? j.compactTimeLabel : void 0], weight: "bold" }, u), a.createElement(n.Z, { style: [j.assetContainer, i ? j.compactAssetContainer : void 0] }, a.createElement(c.G, { icon: P(t.conditionCode), style: j.asset })), a.createElement(_, { currentTemperature: e, globalMax: H[1], globalMin: H[0], isToday: s, max: m, min: p, style: j.temperatureBar, temperatureType: o }));
                    }),
                    !p && a.createElement(d.Z, { onClick: () => u(h ? r : t.days.length), seeLessLabel: O, seeMoreLabel: L, showingMore: h, style: j.seeMore }),
                );
            }
            const j = o.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "column" }, dayTemperatureContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1, flex: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, minWidth: 0 }, timeLabel: { fontSize: "inherit", lineHeight: "inherit", whiteSpace: "nowrap", width: 90 }, compactTimeLabel: { width: 50 }, assetContainer: { display: "flex", justifyContent: "center", alignItems: "center", marginEnd: e.spaces.space20 }, compactAssetContainer: { marginEnd: e.spaces.space8 }, asset: { width: e.spaces.space20, height: e.spaces.space20 }, temperatureBar: { flex: 1 }, seeMore: { marginTop: e.spaces.space4 } }));
            var A = r(214997);
            function B({ hourlyForecast: e }) {
                return a.createElement(
                    A.Z,
                    { contentContainerStyle: W.contentContainer, horizontal: !0, style: W.container },
                    e.hours.map((e) => {
                        const t = (function (e) {
                                const t = new Date();
                                if (e.toDateString() === t.toDateString() && e.getHours() === t.getHours()) return g;
                                let r = e.getHours();
                                const a = r >= 12 ? "PM" : "AM";
                                return (r %= 12), (r = r || 12), `${r}${a}`;
                            })(new Date(e.forecastStart)),
                            r = e.temperature;
                        return a.createElement(n.Z, { key: `hour-${e.forecastStart}`, style: W.hourTemperatureContainer }, a.createElement(l.ZP, { style: W.timeLabel, weight: "bold" }, t), a.createElement(c.G, { icon: P(e.conditionCode), style: W.asset }), a.createElement(l.ZP, { style: W.temperature, weight: "bold" }, Math.round(r)));
                    }),
                );
            }
            const W = o.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space8 }, contentContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space40, flex: 1 }, hourTemperatureContainer: { display: "flex", flexGrow: 1, shrink: 0, flexDirection: "column", minWidth: 0, alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, timeLabel: { fontSize: "inherit", lineHeight: "inherit" }, asset: { width: e.spaces.space32, height: e.spaces.space32 }, temperature: { fontSize: "inherit", lineHeight: "inherit" } }));
            var R = r(466792);
            function G({ location: e, onTemperatureTypeChange: t, temperature: r, temperatureType: o }) {
                return a.createElement(
                    n.Z,
                    { style: V.container },
                    a.createElement(
                        n.Z,
                        { style: V.temperatureContainer },
                        a.createElement(l.ZP, { style: V.temperature, weight: "bold" }, Math.round(r)),
                        a.createElement(
                            n.Z,
                            { style: V.temperatureOptions },
                            a.createElement(R.Z, { onPressIn: () => t("F") }, ({ isHovered: e }) => a.createElement(l.ZP, { style: [V.temperatureOption, "F" === o ? V.selectedTemperatureOption : void 0, e ? V.hoveredTemperatureOption : void 0], weight: "bold" }, "°F")),
                            a.createElement(n.Z, { style: V.divider }),
                            a.createElement(R.Z, { onPressIn: () => t("C") }, ({ isHovered: e }) => a.createElement(l.ZP, { style: [V.temperatureOption, "C" === o ? V.selectedTemperatureOption : void 0, e ? V.hoveredTemperatureOption : void 0], weight: "bold" }, "°C")),
                        ),
                    ),
                    a.createElement(l.ZP, { style: V.location, weight: "bold" }, e),
                );
            }
            const V = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, temperatureContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, temperature: { fontSize: e.fontSizes.title1, lineHeight: e.fontSizes.title1 }, temperatureOptions: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, temperatureOption: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.gray700 }, selectedTemperatureOption: { color: e.colors.brandColor }, hoveredTemperatureOption: { cursor: "pointer", color: e.colors.brandColor }, divider: { height: e.spaces.space12, width: 1, backgroundColor: e.colors.gray700 }, location: { fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 } }));
            function X({ high: e, low: t }) {
                return a.createElement(n.Z, { style: Y.container }, void 0 !== e && void 0 !== t && a.createElement(n.Z, { style: Y.highLowContainer }, a.createElement(l.ZP, { style: Y.highLowText, weight: "bold" }, `H:${Math.round(e)}°`), a.createElement(n.Z, { style: Y.divider }), a.createElement(l.ZP, { style: Y.highLowText, weight: "bold" }, `L:${Math.round(t)}°`)));
            }
            const Y = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12, fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 }, highLowContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: "inherit", lineHeight: "inherit" }, highLowText: { fontSize: "inherit", lineHeight: "inherit" }, divider: { height: e.spaces.space12, width: 1, backgroundColor: e.colors.gray700 } }));
            function J({ cardAttachment: e, isAnimated: t, isPreview: r }) {
                const [o, c] = a.useState("F"),
                    l = a.useMemo(() => {
                        const t = { ...e.weather_data.currentWeather };
                        return "F" === o && ((t.temperature = H(t.temperature, "C", "F")), (t.temperatureApparent = H(t.temperatureApparent, "C", "F")), (t.temperatureDewPoint = H(t.temperatureDewPoint, "C", "F"))), t;
                    }, [o, e]),
                    u = a.useMemo(() => {
                        const t = { ...e.weather_data.forecastHourly };
                        t.hours = [];
                        const r = (function (e = new Date()) {
                                return e.setMinutes(0, 0, 0), e;
                            })(new Date(e.created_at.endsWith("Z") ? e.created_at : `${e.created_at}Z`)),
                            a = new Date(r);
                        return (
                            a.setHours(a.getHours() + 24),
                            e.weather_data.forecastHourly.hours.forEach((e) => {
                                const n = { ...e };
                                "F" === o && ((n.temperature = H(n.temperature, "C", "F")), (n.temperatureApparent = H(n.temperatureApparent, "C", "F")), (n.temperatureDewPoint = H(n.temperatureDewPoint, "C", "F")));
                                const i = new Date(n.forecastStart);
                                i.getTime() >= r.getTime() && i.getTime() <= a.getTime() && t.hours.push(n);
                            }),
                            t
                        );
                    }, [o, e]),
                    p = a.useMemo(() => {
                        const t = { ...e.weather_data.forecastDaily };
                        return (
                            (t.days = []),
                            e.weather_data.forecastDaily.days.forEach((r) => {
                                const a = { ...r },
                                    n = (function (e = new Date()) {
                                        return e.setHours(0, 0, 0, 0), e;
                                    })(new Date(e.created_at.endsWith("Z") ? e.created_at : `${e.created_at}Z`)),
                                    i = new Date(a.forecastStart);
                                if (!(n.getTime() > i.getTime())) {
                                    if ("F" === o && ((a.temperatureMin = H(a.temperatureMin, "C", "F")), (a.temperatureMax = H(a.temperatureMax, "C", "F")), (a.daytimeForecast.temperatureMin = H(a.daytimeForecast.temperatureMin, "C", "F")), (a.daytimeForecast.temperatureMax = H(a.daytimeForecast.temperatureMax, "C", "F")), (a.overnightForecast.temperatureMin = H(a.overnightForecast.temperatureMin, "C", "F")), (a.overnightForecast.temperatureMax = H(a.overnightForecast.temperatureMax, "C", "F")), a.restOfDayForecast)) {
                                        const e = a.restOfDayForecast;
                                        (e.temperatureMin = H(e.temperatureMin, "C", "F")), (e.temperatureMax = H(e.temperatureMax, "C", "F"));
                                    }
                                    t.days.push(a);
                                }
                            }),
                            t
                        );
                    }, [o, e]),
                    m = a.useMemo(() => {
                        const e = p.days.find((e) => {
                            const t = new Date(e.forecastStart),
                                r = new Date(l.asOf);
                            return t.toDateString() === r.toDateString();
                        });
                        return e ? [e.temperatureMin, e.temperatureMax] : null;
                    }, [l, p]);
                return a.createElement(i.Z, { isAnimated: t, style: N.container }, a.createElement(n.Z, { style: N.summaryContainer }, a.createElement(G, { location: e.location_original, onTemperatureTypeChange: c, temperature: l.temperature, temperatureType: o }), a.createElement(X, { high: m ? m[1] : void 0, low: m ? m[0] : void 0 })), a.createElement(B, { hourlyForecast: u }), !r && a.createElement(a.Fragment, null, a.createElement(n.Z, { style: N.divider }), a.createElement(I, { currentTemperature: l.temperature, dailyForecast: p, temperatureType: o }), a.createElement(s.Z, { style: N.createdAtText, timestamp: e.created_at })));
            }
            const N = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, summaryContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, divider: { width: "100%", height: 1, backgroundColor: e.colors.gray300 }, createdAtText: {} }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-b8348d5d.a1af1dba.js.map

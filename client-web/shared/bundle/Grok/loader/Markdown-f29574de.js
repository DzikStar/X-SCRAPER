"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-f29574de"],
    {
        812730: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                o = r(731708),
                s = r(392237),
                i = r(670178);
            function c({ currentTemperature: e, globalMax: t, globalMin: r, isToday: c, max: u, min: p, style: d, temperatureType: m }) {
                const h = Math.round(t) - Math.round(r),
                    f = ((Math.round(p) - Math.round(r)) / Math.round(h)) * 100,
                    g = ((Math.round(u) - Math.round(p)) / Math.round(h)) * 100,
                    y = ((Math.round(e) - Math.round(r)) / Math.round(h)) * 100;
                return a.createElement(n.Z, { style: [l.container, d] }, a.createElement(o.ZP, { style: [l.temperature, l.low], weight: "bold" }, `${p}°`), a.createElement(n.Z, { style: l.bar }, a.createElement(n.Z, { style: [l.innerBar, { width: `${g}%`, start: `${f}%`, background: `linear-gradient(to right, ${(0, i.bL)(p, m)}, ${(0, i.bL)(u, m)})` }] }), c && a.createElement(n.Z, { style: [l.currentTemperatureIndicator, { start: `calc(${y}% - ${s.default.theme.spaces.space4})` }] })), a.createElement(o.ZP, { style: l.temperature, weight: "bold" }, `${u}°`));
            }
            const l = s.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, temperature: { fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 }, low: { color: e.colors.gray600 }, bar: { display: "flex", flex: 1, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray50, position: "relative" }, innerBar: { height: "100%", borderRadius: e.spaces.space4, position: "absolute" }, currentTemperatureIndicator: { position: "absolute", height: e.spaces.space8, width: e.spaces.space8, borderRadius: e.spaces.space8, borderStyle: "solid", top: "50%", transform: [{ translateY: "-50%", translateX: "-50%" }], borderColor: e.colors.gray50, borderWidth: e.spaces.space2, backgroundColor: e.colors.white } }));
        },
        3644: (e, t, r) => {
            r.d(t, { Z: () => C });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(392237),
                s = r(572929),
                i = r(339838),
                c = r(456886),
                l = r(349929),
                u = r(214997),
                p = r(731708),
                d = r(670178);
            function m({ hourlyForecast: e }) {
                return a.createElement(
                    u.Z,
                    { contentContainerStyle: h.contentContainer, horizontal: !0, style: h.container },
                    e.hours.map((e) => {
                        const t = (0, d.Sb)(new Date(e.forecastStart)),
                            r = e.temperature;
                        return a.createElement(n.Z, { key: `hour-${e.forecastStart}`, style: h.hourTemperatureContainer }, a.createElement(p.ZP, { style: h.timeLabel, weight: "bold" }, t), a.createElement(l.G, { icon: (0, d.qp)(e.conditionCode), style: h.asset }), a.createElement(p.ZP, { style: h.temperature, weight: "bold" }, Math.round(r)));
                    }),
                );
            }
            const h = o.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space8 }, contentContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space40, flex: 1 }, hourTemperatureContainer: { display: "flex", flexGrow: 1, shrink: 0, flexDirection: "column", minWidth: 0, alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, timeLabel: { fontSize: "inherit", lineHeight: "inherit" }, asset: { width: e.spaces.space32, height: e.spaces.space32 }, temperature: { fontSize: "inherit", lineHeight: "inherit" } }));
            var f = r(466792);
            function g({ location: e, onTemperatureTypeChange: t, temperature: r, temperatureType: o }) {
                return a.createElement(
                    n.Z,
                    { style: y.container },
                    a.createElement(
                        n.Z,
                        { style: y.temperatureContainer },
                        a.createElement(p.ZP, { style: y.temperature, weight: "bold" }, Math.round(r)),
                        a.createElement(
                            n.Z,
                            { style: y.temperatureOptions },
                            a.createElement(f.Z, { onPressIn: () => t("F") }, ({ isHovered: e }) => a.createElement(p.ZP, { style: [y.temperatureOption, "F" === o ? y.selectedTemperatureOption : void 0, e ? y.hoveredTemperatureOption : void 0], weight: "bold" }, "°F")),
                            a.createElement(n.Z, { style: y.divider }),
                            a.createElement(f.Z, { onPressIn: () => t("C") }, ({ isHovered: e }) => a.createElement(p.ZP, { style: [y.temperatureOption, "C" === o ? y.selectedTemperatureOption : void 0, e ? y.hoveredTemperatureOption : void 0], weight: "bold" }, "°C")),
                        ),
                    ),
                    a.createElement(p.ZP, { style: y.location, weight: "bold" }, e),
                );
            }
            const y = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, temperatureContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, temperature: { fontSize: e.fontSizes.title1, lineHeight: e.fontSizes.title1 }, temperatureOptions: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, temperatureOption: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.gray700 }, selectedTemperatureOption: { color: e.colors.brandColor }, hoveredTemperatureOption: { cursor: "pointer", color: e.colors.brandColor }, divider: { height: e.spaces.space12, width: 1, backgroundColor: e.colors.gray700 }, location: { fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 } }));
            function w({ high: e, low: t }) {
                return a.createElement(n.Z, { style: b.container }, void 0 !== e && void 0 !== t && a.createElement(n.Z, { style: b.highLowContainer }, a.createElement(p.ZP, { style: b.highLowText, weight: "bold" }, `H:${Math.round(e)}°`), a.createElement(n.Z, { style: b.divider }), a.createElement(p.ZP, { style: b.highLowText, weight: "bold" }, `L:${Math.round(t)}°`)));
            }
            const b = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12, fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1 }, highLowContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: "inherit", lineHeight: "inherit" }, highLowText: { fontSize: "inherit", lineHeight: "inherit" }, divider: { height: e.spaces.space12, width: 1, backgroundColor: e.colors.gray700 } }));
            function C({ cardAttachment: e, isAnimated: t, isInline: r, isPreview: o }) {
                const [l, u] = a.useState("F"),
                    p = a.useMemo(() => {
                        const t = { ...e.weather_data.currentWeather };
                        return "F" === l && ((t.temperature = (0, d.G5)(t.temperature, "C", "F")), (t.temperatureApparent = (0, d.G5)(t.temperatureApparent, "C", "F")), (t.temperatureDewPoint = (0, d.G5)(t.temperatureDewPoint, "C", "F"))), t;
                    }, [l, e]),
                    h = a.useMemo(() => {
                        const t = { ...e.weather_data.forecastHourly };
                        t.hours = [];
                        const r = (0, d.v0)(new Date(e.created_at.endsWith("Z") ? e.created_at : `${e.created_at}Z`)),
                            a = new Date(r);
                        return (
                            a.setHours(a.getHours() + 24),
                            e.weather_data.forecastHourly.hours.forEach((e) => {
                                const n = { ...e };
                                "F" === l && ((n.temperature = (0, d.G5)(n.temperature, "C", "F")), (n.temperatureApparent = (0, d.G5)(n.temperatureApparent, "C", "F")), (n.temperatureDewPoint = (0, d.G5)(n.temperatureDewPoint, "C", "F")));
                                const o = new Date(n.forecastStart);
                                o.getTime() >= r.getTime() && o.getTime() <= a.getTime() && t.hours.push(n);
                            }),
                            t
                        );
                    }, [l, e]),
                    f = a.useMemo(() => {
                        const t = { ...e.weather_data.forecastDaily };
                        return (
                            (t.days = []),
                            e.weather_data.forecastDaily.days.forEach((r) => {
                                const a = { ...r },
                                    n = (0, d.L6)(new Date(e.created_at.endsWith("Z") ? e.created_at : `${e.created_at}Z`)),
                                    o = new Date(a.forecastStart);
                                if (!(n.getTime() > o.getTime())) {
                                    if ("F" === l && ((a.temperatureMin = (0, d.G5)(a.temperatureMin, "C", "F")), (a.temperatureMax = (0, d.G5)(a.temperatureMax, "C", "F")), (a.daytimeForecast.temperatureMin = (0, d.G5)(a.daytimeForecast.temperatureMin, "C", "F")), (a.daytimeForecast.temperatureMax = (0, d.G5)(a.daytimeForecast.temperatureMax, "C", "F")), (a.overnightForecast.temperatureMin = (0, d.G5)(a.overnightForecast.temperatureMin, "C", "F")), (a.overnightForecast.temperatureMax = (0, d.G5)(a.overnightForecast.temperatureMax, "C", "F")), a.restOfDayForecast)) {
                                        const e = a.restOfDayForecast;
                                        (e.temperatureMin = (0, d.G5)(e.temperatureMin, "C", "F")), (e.temperatureMax = (0, d.G5)(e.temperatureMax, "C", "F"));
                                    }
                                    t.days.push(a);
                                }
                            }),
                            t
                        );
                    }, [l, e]),
                    y = a.useMemo(() => {
                        const e = f.days.find((e) => {
                            const t = new Date(e.forecastStart),
                                r = new Date(p.asOf);
                            return t.toDateString() === r.toDateString();
                        });
                        return e ? [e.temperatureMin, e.temperatureMax] : null;
                    }, [p, f]);
                return a.createElement(s.Z, { isAnimated: t, isInline: r, style: x.container }, a.createElement(n.Z, { style: x.summaryContainer }, a.createElement(g, { location: e.location_original, onTemperatureTypeChange: u, temperature: p.temperature, temperatureType: l }), a.createElement(w, { high: y ? y[1] : void 0, low: y ? y[0] : void 0 })), a.createElement(m, { hourlyForecast: h }), !o && a.createElement(a.Fragment, null, a.createElement(n.Z, { style: x.divider }), a.createElement(c.Z, { currentTemperature: p.temperature, dailyForecast: f, temperatureType: l }), a.createElement(i.Z, { style: x.createdAtText, timestamp: e.created_at })));
            }
            const x = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, summaryContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, divider: { width: "100%", height: 1, backgroundColor: e.colors.gray300 }, createdAtText: {} }));
        },
        670178: (e, t, r) => {
            r.d(t, { G5: () => S, L6: () => D, Ot: () => F, Sb: () => M, bL: () => v, qp: () => Z, v0: () => E });
            r(571372), r(202784);
            var a = r(209725),
                n = r(111677),
                o = r.n(n);
            const s = o().d490977e,
                i = o().g02dacc0,
                c = o().e9f55db8,
                l = o().e9cf3af8,
                u = o().d5868a7e,
                p = o().b5dfdb46,
                d = o().ab8095a2,
                m = o().e298e6f2,
                h = o().ef519654,
                f = o().c609a1b4,
                g = o().j92274b0,
                y = o().ja482160,
                w = o().f4ad4cb0,
                b = o().d66bf142,
                C = o().dc17968a,
                x = o().j310a2d6;
            function S(e, t, r) {
                if (t === r) return e;
                if ("F" === t && "C" === r) return (5 * (e - 32)) / 9;
                if ("C" === t && "F" === r) return (9 * e) / 5 + 32;
                throw new Error("Invalid unit combination for temperature conversion.");
            }
            function E(e = new Date()) {
                return e.setMinutes(0, 0, 0), e;
            }
            function D(e = new Date()) {
                return e.setHours(0, 0, 0, 0), e;
            }
            function F(e, t) {
                const r = new Date();
                if (e.toDateString() === r.toDateString()) return i;
                return (t ? [f, g, y, w, b, C, x] : [c, l, u, p, d, m, h])[e.getDay()];
            }
            function M(e) {
                const t = new Date();
                if (e.toDateString() === t.toDateString() && e.getHours() === t.getHours()) return s;
                let r = e.getHours();
                const a = r >= 12 ? "PM" : "AM";
                return (r %= 12), (r = r || 12), `${r}${a}`;
            }
            function Z(e) {
                switch (e) {
                    case "BlowingDust":
                    case "Breezy":
                    case "Windy":
                        return a.DSs;
                    case "Clear":
                        return a.enB;
                    case "Cloudy":
                        return a.uM9;
                    case "Foggy":
                    case "Smoky":
                        return a.DjS;
                    case "Haze":
                    case "MostlyClear":
                    case "MostlyCloudy":
                    case "PartlyCloudy":
                        return a.S9Y;
                    case "Drizzle":
                    case "Rain":
                    case "Sleet":
                    case "FreezingDrizzle":
                    case "FreezingRain":
                        return a.M07;
                    case "HeavyRain":
                        return a.$w6;
                    case "IsolatedThunderstorms":
                    case "ScatteredThunderstorms":
                    case "StrongStorms":
                    case "Thunderstorms":
                        return a.$iP;
                    case "SunShowers":
                    case "SunFlurries":
                        return a.yz3;
                    case "Frigid":
                    case "Snow":
                    case "Blizzard":
                    case "BlowingSnow":
                    case "HeavySnow":
                        return a.jOV;
                    case "Hail":
                    case "Flurries":
                    case "WintryMix":
                        return a.CJg;
                    case "Hot":
                        return a.iVn;
                    case "Hurricane":
                    case "TropicalStorm":
                        return a.yjX;
                    default:
                        return a.ccn;
                }
            }
            function v(e, t) {
                const r = { temp: "F" === t ? 40 : S(40, "F", "C"), color: [107, 201, 251] },
                    a = { temp: "F" === t ? 70 : S(70, "F", "C"), color: [167, 194, 92] },
                    n = { temp: "F" === t ? 100 : S(100, "F", "C"), color: [255, 69, 0] };
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
        },
        598476: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(325686),
                o = r(154003),
                s = r(392237),
                i = r(111677),
                c = r.n(i),
                l = r(125363),
                u = r(836255),
                p = r(988290),
                d = r(520595),
                m = r(299631);
            const h = c().db6c20cf;
            function f({ cardAttachment: e }) {
                const [t, r] = a.useState(!1),
                    { isCompactLayout: s, isGrokDrawer: i } = (0, p.ZP)(),
                    c = s || i ? 1 : 2,
                    [l, u] = a.useState({}),
                    f = a.useMemo(() => e.post_ids.filter((e) => l[e]).map((e) => e), [e.post_ids, l]);
                return a.createElement(
                    a.Fragment,
                    null,
                    e.post_ids.map((e) => a.createElement(g, { key: e, onPostExists: () => u((t) => ({ ...t, [e]: !0 })), postId: e })),
                    f.length > 0 && a.createElement(n.Z, { style: y.container }, f.length > 0 && a.createElement(m.V, { dynamicLayoutEnabled: !0, postIds: f.slice(0, c) }), f.length > c && a.createElement(o.ZP, { backgroundColor: "transparent", borderColor: "gray200", color: "gray900", fontWeight: "normal", onClick: () => r(!0), style: y.seeAllPostsButton, textSizeOverride: "subtext1" }, h({ count: f.length })), t && a.createElement(d.a, { onDrawerDismiss: () => r(!1), postIds: f })),
                );
            }
            function g({ onPostExists: e, postId: t }) {
                const r = a.useMemo(() => u.Z.createHydratorForTweet(t), [t]),
                    n = (0, l.v9)(r);
                return (
                    a.useEffect(() => {
                        n && e();
                    }, [n, e]),
                    null
                );
            }
            const y = s.default.create((e) => ({ container: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space12 }, seeAllPostsButton: { width: "fit-content" } }));
        },
        353880: (e, t, r) => {
            r.d(t, { Z: () => b });
            var a = r(202784),
                n = r(325686),
                o = r(488684),
                s = r(154003),
                i = r(530732),
                c = r(366635),
                l = r(238406),
                u = r(646797),
                p = r(392237),
                d = r(111677),
                m = r.n(d),
                h = r(125363),
                f = r(919022),
                g = r(988290),
                y = r(486557);
            const w = m().db6c20cf;
            function b({ cardAttachment: e }) {
                const { isCompactLayout: t, isGrokDrawer: r } = (0, g.ZP)(),
                    [i, c] = a.useState(!1),
                    l = t || r ? 2 : 3,
                    u = e.user_handles.slice(0, l),
                    p = a.useMemo(
                        () =>
                            1 === u.length
                                ? a.createElement(o.Z, { screenName: u[0], wrapperStyle: [x.singleUserCardContainer, t && x.compactSingleUserCardContainer] }, a.createElement(C, { useConciseDescription: !1, userHandle: u[0] }))
                                : a.createElement(
                                      n.Z,
                                      { style: x.userCards },
                                      u.map((e, r) => a.createElement(o.Z, { screenName: e, wrapperStyle: x.userCardWrapper }, a.createElement(C, { key: e, showPreview: !0, style: { animationDelay: 0.1 * r + "s" }, useConciseDescription: u.length > 1, userHandle: e, withStackedUserNameLayout: t }))),
                                  ),
                        [u, t],
                    );
                return a.createElement(n.Z, { style: x.container }, p, e.user_handles.length > l && a.createElement(s.ZP, { backgroundColor: "transparent", borderColor: "gray200", color: "gray900", fontWeight: "normal", onClick: () => c(!0), style: x.seeAllUsersButton, textSizeOverride: "subtext1" }, w({ count: e.user_handles.length })), i && a.createElement(y.S, { onDrawerDismiss: () => c(!1), userHandles: e.user_handles }));
            }
            function C({ showPreview: e = !1, style: t, useConciseDescription: r, userHandle: o, withStackedUserNameLayout: s = !1 }) {
                const p = (0, h.v9)((e) => f.ZP.selectByScreenName(e, o));
                if (!p) return null;
                const d = `https://x.com/${p.screen_name}`;
                return a.createElement(
                    i.Z,
                    {
                        onPress: () => {
                            window.open(d, "_blank");
                        },
                        style: [x.outerUserCard, t],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) => a.createElement(n.Z, { style: [x.userCard, e && x.hoveredUserCard] }, a.createElement(c.Z, { isVerified: p.is_blue_verified, name: p.name, profileImageUrl: p.profile_image_url_https, screenName: p.screen_name, withStackedLayout: s }), p.description ? a.createElement(l.Z, { description: p.description, entities: {}, isConcise: r, style: x.userDescription, userId: p.id_str }) : a.createElement(n.Z, { style: x.userDescription }), a.createElement(u.Z, { followersCount: p.followers_count, friendsCount: p.friends_count, screenName: p.screen_name, style: x.userStats, withLink: !1, withSubscribersCount: !1, withSubscriptionsCount: !1 })),
                );
            }
            const x = p.default.create((e) => ({ container: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", width: "100%" }, singleUserCardContainer: { width: "70%" }, compactSingleUserCardContainer: { width: "100%" }, userCards: { width: "100%", flex: 1, display: "flex", flexDirection: "row", gap: e.spaces.space12, marginBottom: e.spaces.space12 }, userCardWrapper: { flex: 1 }, outerUserCard: { flex: 1 }, userCard: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space8, backgroundColor: "transparent", borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200, borderRadius: e.borderRadii.large, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both", transition: "background-color 0.2s ease" }, hoveredUserCard: { backgroundColor: e.colors.gray50 }, userDescription: { flex: 1 }, seeAllUsersButton: { width: "fit-content", animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-10px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, userStats: { flex: "unset" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-f29574de.b4061a8a.js.map

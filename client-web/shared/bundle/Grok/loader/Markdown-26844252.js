"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-26844252"],
    {
        396184: (e, t, r) => {
            r.d(t, { Ew: () => m, Jo: () => s, K_: () => v, MN: () => b, Mv: () => $, Oi: () => M, S1: () => w, UH: () => g, UK: () => p, ce: () => E, dg: () => T, dv: () => o, h3: () => h, id: () => c, ke: () => f, s8: () => i, vq: () => d, x1: () => u, x8: () => y, xt: () => l });
            var n = r(111677),
                a = r.n(n);
            const o = { NBA: "nba", NFL: "nfl", MLB: "mlb", PGA: "pga", FC: "fc", CFB: "cfb", NHL: "nhl" },
                i = { [o.NBA]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [o.NFL]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [o.MLB]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [o.PGA]: { stat: !0 }, [o.FC]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [o.CFB]: {}, [o.NHL]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 } },
                s = { [o.NBA]: a().i9f615c8, [o.NFL]: a().i9f615c8, [o.MLB]: a().i9f615c8, [o.FC]: a().ieff24f4 },
                c = { [o.NBA]: { full: ["TEAM", "W", "L", "PCT", "GB"], compact: ["TEAM", "W", "L", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [o.NFL]: { full: ["TEAM", "W", "L", "T", "PCT"], compact: ["TEAM", "W", "L", "T", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [o.MLB]: { full: ["TEAM", "W", "L", "PCT", "GB"], compact: ["TEAM", "W", "L", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [o.FC]: { full: ["TEAM", "W", "PTS", "D", "L", "GD"], compact: ["TEAM", "W", "PTS", "D", "L"], columnsToHighlight: ["TEAM", "PTS"] }, [o.NHL]: { full: ["TEAM", "W", "L", "OTL", "PTS", "DIFF"], compact: ["TEAM", "W", "L", "OTL", "PTS"], columnsToHighlight: ["TEAM", "PTS"] } },
                u = Object.freeze({ OVERVIEW: { id: "OVERVIEW", label: a().d59dbf8a }, MATCHES: { id: "GAMES", label: a().e2811afc }, STANDINGS: { id: "STANDINGS", label: a().j081fa34 } }),
                l = a().g02dacc0,
                d = a().c6e845c0,
                m = a().i7c7f156,
                f = a().f178e38c,
                p = a().cbdddb0a,
                h = a().b134ba52,
                w = a().b6da6b02,
                v = a().j1361724,
                g = a().fa0f1262,
                b = 5,
                T = 5,
                M = { transform: [{ scale: 1.5 }] },
                $ = { "Celta Vigo": "RC Celta de Vigo", "Nottm Forest": "Nottingham Forest", "Man City": "Manchester City", "Man United": "Manchester United", Wolves: "Wolverhampton Wanderers", "M'gladbach": "Borussia Mönchengladbach", Rennes: "Stade Rennais" },
                y = { [o.FC]: !0 },
                E = a().c2cac618;
        },
        17341: (e, t, r) => {
            r.d(t, { $c: () => E, FB: () => f, FO: () => g, Ov: () => v, P$: () => L, a1: () => m, a5: () => $, ay: () => M, e4: () => y, lV: () => T, mr: () => h, q$: () => p, qD: () => b, qs: () => S, u5: () => A, uS: () => C, vw: () => N });
            r(571372), r(136728);
            var n = r(719870),
                a = r(111677),
                o = r.n(a),
                i = r(207137),
                s = r(181226),
                c = r(396184);
            const u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                l = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function d(e) {
                return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(e);
            }
            function m(e) {
                return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            }
            function f(e) {
                const [t, r, n] = e.split("-"),
                    a = parseInt(t, 10),
                    o = parseInt(r, 10),
                    i = parseInt(n, 10),
                    s = l[o - 1] || "";
                return `${`${i}${(function (e) {
                    if (e >= 11 && e <= 13) return "th";
                    switch (e % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                })(i)}`} ${s}, ${(a % 100).toString().padStart(2, "0")}`;
            }
            function p(e) {
                const t = /^(\w{3}) (\d{1,2})\/(\d{1,2})$/,
                    r = /^(\w{3}), (\w{3}) (\d{1,2}), (\d{4})$/;
                let n = "",
                    a = "",
                    o = "";
                if (t.test(e)) {
                    const r = e.match(t);
                    if (!r) throw new Error(`Invalid date format. Expected format for dateString: Sat 12/5. Got: ${e}`);
                    ([, o, n, a] = r), (n = l[Number(n) - 1]);
                } else {
                    if (!r.test(e)) throw new Error(`Invalid date format. Supported formats: Sun 12/5 or Sat, Aug 17, 2024. Got: ${e}`);
                    {
                        const t = e.match(r);
                        if (!t) throw new Error(`Invalid date format. Expected format: Sat, Aug 17, 2024. Got: ${e}`);
                        [, o, n, a] = t;
                    }
                }
                const i = Number(a),
                    s = u.find((e) => e === o);
                if (!l.includes(n)) throw new Error(`Invalid month: ${n}. Must be between Jan - Dec.`);
                if (i < 1 || i > 31) throw new Error(`Invalid day: ${i}. Must be between 1 and 31.`);
                if (!s) throw new Error(`Invalid weekday: ${o}. Must be one of ${u.join(",")}`);
                const m = `${s}, ${n} ${i}`,
                    f = new Date(),
                    p = d(f),
                    h = new Date(f);
                h.setHours(h.getHours() + 24);
                const w = d(h),
                    v = new Date(f);
                v.setHours(v.getHours() - 24);
                const g = d(v);
                return m === p ? c.xt : m === w ? c.Ew : m === g ? c.vq : m;
            }
            function h(e) {
                const { timeZone: t } = window.Intl.DateTimeFormat().resolvedOptions(),
                    r = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", timeZoneName: "short", timeZone: t }).formatToParts(e),
                    n = r.find((e) => "hour" === e.type),
                    a = r.find((e) => "minute" === e.type),
                    o = r.find((e) => "dayPeriod" === e.type),
                    i = r.find((e) => "timeZoneName" === e.type);
                if (!(n && a && i && o)) throw new Error(`Failed to format time for date: ${e.toDateString()}`);
                return `${n.value}:${a.value} ${o.value} ${i.value}`;
            }
            function w(e, t, r, n, a, o) {
                const i = "America/New_York",
                    s = Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: i })
                        .formatToParts()
                        .find((e) => "timeZoneName" === e.type);
                if (!s) throw new Error(`Failed to get timeZoneName for: ${i}`);
                const c = `${e}/${t}/${r} ${n}:${a} ${o} ${s.value}`;
                return new Date(c);
            }
            function v(e, t) {
                const r = `${e} ${t}`.match(/^(\w{3}) (\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{2}) ([AP]M)$/);
                if (!r) throw new Error(`Invalid date format.\n\n      Expected format for dateString: Sat M/D. Got ${e}\n\n      Expected format for timeString: H:MM TT. Got ${t}`);
                const n = "America/New_York";
                if (
                    !Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: n })
                        .formatToParts()
                        .find((e) => "timeZoneName" === e.type)
                )
                    throw new Error(`Failed to get timeZoneName for: ${n}`);
                const a = new Date().getFullYear(),
                    [, , o, i, s, c, u] = r;
                return w(Number(o), Number(i), a, Number(s), Number(c), u);
            }
            function g(e, t) {
                const r = `${e} ${t}`.trim(),
                    n = r.match(/^(\w{3}),\s(\w{3})\s(\d{1,2}),\s(\d{4})\s(\d{1,2}):(\d{2})\s?([AP]M)\s?(\w{2})?$/i);
                if (!n) throw new Error(`Invalid format. Expected "DDD, MMM D, YYYY h:mm AM/PM TZ". Received: "${r}"`);
                const [, , a, o, i, s, c, u] = n;
                return w(l.indexOf(a) + 1, Number(o), Number(i), Number(s), Number(c), u);
            }
            function b(e) {
                const t = Math.abs(e);
                if (t % 100 >= 11 && t % 100 <= 13) return "th";
                switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                }
            }
            function T(e, t) {
                const r = Object.values(s[e].teams);
                for (const e of r) if (e.name.startsWith(t) || e.name.endsWith(t) || e.abbreviation.startsWith(t) || e.abbreviation.endsWith(t) || (e.nickname && e.nickname.startsWith(t)) || (e.nickname && e.nickname.endsWith(t)) || t.startsWith(e.name) || t.endsWith(e.name) || t.startsWith(e.abbreviation) || t.endsWith(e.abbreviation) || (e.nickname && t.startsWith(e.nickname)) || (e.nickname && t.endsWith(e.nickname))) return e;
                return { name: t, abbreviation: t, market: "", nickname: t, logo: "", league: "" };
            }
            function M(e, t, r, n) {
                return { homeTeamBio: "@" === t ? n : r, awayTeamBio: "@" === t ? r : n };
            }
            function $(e) {
                const t = e.split(" ");
                if (t.length < 2 || !t[1].includes("-")) throw new Error("Invalid score format");
                const r = t[0],
                    n = t[1].split("-"),
                    a = parseInt(n[0], 10),
                    o = parseInt(n[1], 10);
                if (isNaN(a) || isNaN(o)) throw new Error("Scores are not valid numbers");
                return { result: r, teamScore: a, otherTeamScore: o };
            }
            function y(e) {
                return (0, i.zk)(e) ? c.xt : (0, i.gO)(e) ? c.vq : (0, i.Pm)(e) ? c.Ew : d(e);
            }
            function E(e) {
                const t = n.TU.lexer(e);
                if (t.length <= 0) return { headers: [], rows: [], type: "" };
                const r = t[0];
                return "table" !== r.type ? { headers: [], rows: [], type: r.type } : { headers: r.header.map((e) => e.text), rows: r.rows.map((e) => e.map((e) => (e.tokens.length > 0 ? e.tokens[0].text : ""))), type: r.type };
            }
            function S(e, t, r, n) {
                const a = E(r),
                    { headers: o, rows: i } = a,
                    s = {},
                    u = [];
                if (o.findIndex((e) => "RANK" === e) < 0) {
                    const t = i.every((e) => e.slice(1).every((e) => "" === e || "0" === e));
                    i.forEach((r, n) => {
                        const a = T(e, c.Mv[r[0]] || r[0]);
                        u.push(a), t || (s[a.name] = n + 1);
                    });
                } else
                    i.forEach((t, r) => {
                        const n = T(e, c.Mv[t[1]] || t[1]);
                        u.push(n), (s[n.name] = Number(t[0])), t.shift();
                    }),
                        o.shift();
                const l = { CLUB: "TEAM" };
                for (let e = 0; e < o.length; e++) o[e] = N(l[o[e]] || o[e]);
                const d = (function (e, t, r) {
                    const n = e.map((e) => e.toLowerCase()),
                        a = [],
                        o = [];
                    for (const t of r) {
                        const r = t.toLowerCase(),
                            i = n.indexOf(r);
                        -1 !== i && (a.push(i), o.push(e[i]));
                    }
                    return { headers: o, rows: t.map((e) => a.map((t) => e[t])) };
                })(o, i, c.id[e][n ? "compact" : "full"]);
                return { scope: t, headers: d.headers, rows: d.rows, ranks: s, teamBios: u };
            }
            function N(e) {
                return e.length <= 0 ? "" : String(e).charAt(0).toUpperCase() + String(e).slice(1).toLowerCase();
            }
            const x = o().i9f615c8;
            function A(e) {
                return c.Jo[e] || x;
            }
            function C(e, t) {
                if (!e) return null;
                try {
                    if (t === c.dv.FC) {
                        const t = e.split(" ");
                        if (t.length > 1) {
                            const e = t[0].replace("H", ""),
                                [r, n] = t[1].replace("'", "").split("+");
                            return { period: parseInt(e, 10), minute: parseInt(r, 10), extraMinute: n ? parseInt(n, 10) : void 0 };
                        }
                    } else if (t === c.dv.NBA || t === c.dv.NFL) {
                        const t = /(\d{2}:\d{2}) left in the (\d+)(?:st|nd|rd|th) quarter/,
                            r = e.match(t);
                        if (r) {
                            const e = r[1];
                            return { quarter: parseInt(r[2], 10), clock: e };
                        }
                        const n = /^(\d{2}:\d{2})\sleft\sin\s?(overtime|double\s+overtime|triple\s+overtime|quadruple\s+overtime|quintuple\s+overtime|sextuple\s+overtime)$/,
                            a = e.match(n);
                        if (a) {
                            const e = a[1],
                                t = a[2];
                            return { clock: e, quarter: { overtime: 5, "double overtime": 6, "triple overtime": 7, "quadruple overtime": 8, "quintuple overtime": 9, "sextuple overtime": 10 }[t] };
                        }
                    } else if (t === c.dv.MLB) {
                        const t = /^(Top|Bottom) (\d+)(?:th|nd|rd|st)?\s*(\d)-(\d),\s*(?:(\d) outs|no outs)$/,
                            r = e.match(t);
                        if (r) {
                            const [, e, t, n, a, o] = r;
                            return { inning: parseInt(t, 10), inningHalf: "Top" === e ? "top" : "bottom", count: { balls: parseInt(n, 10), strikes: parseInt(a, 10), outs: void 0 === o ? 0 : parseInt(o, 10) } };
                        }
                    } else if (t === c.dv.NHL) {
                        const t = /(\d{2}:\d{2}) left in the (\d+)(?:st|nd|rd|th) period/,
                            r = e.match(t);
                        if (r) {
                            const e = r[1];
                            return { period: parseInt(r[2], 10), clock: e };
                        }
                        const n = /^(\d{2}:\d{2})\sleft\sin\s?(overtime|double\s+overtime|triple\s+overtime|quadruple\s+overtime|quintuple\s+overtime|sextuple\s+overtime)$/,
                            a = e.match(n);
                        if (a) {
                            const e = a[1],
                                t = a[2];
                            return { clock: e, period: { overtime: 4, "double overtime": 5, "triple overtime": 6, "quadruple overtime": 7, "quintuple overtime": 8, "sextuple overtime": 9 }[t] };
                        }
                    }
                } catch (e) {
                    return null;
                }
                return null;
            }
            function L(e, t) {
                if (!e) return "";
                if (t === c.dv.FC) {
                    if (e.minute) return `${e.minute}'${e.extraMinute ? `+${e.extraMinute}'` : ""}`;
                } else if (t === c.dv.NBA || t === c.dv.NFL) {
                    if (e.quarter && e.clock) {
                        if (e.quarter > 4) {
                            const t = e.quarter - 4;
                            return `${1 === t ? "" : t}OT - ${e.clock}`;
                        }
                        return `Q${e.quarter} - ${e.clock}`;
                    }
                } else if (t === c.dv.MLB) {
                    const t = { 1: "st", 2: "nd", 3: "rd" };
                    if (e.inning && e.inningHalf && e.count) {
                        const r = e.inning,
                            n = e.inningHalf,
                            a = e.count;
                        let o = `${n.charAt(0).toUpperCase() + n.slice(1)} ${r}${t[r] || "th"}`;
                        return void 0 !== a.balls && void 0 !== a.strikes && void 0 !== a.outs && (o += `\n${a.balls}-${a.strikes}, ${a.outs} outs`), o;
                    }
                } else if (t === c.dv.NHL && e.period && e.clock) {
                    if (e.period > 3) {
                        const t = e.period - 3;
                        return `${1 === t ? "" : t}OT - ${e.clock}`;
                    }
                    return `P${e.period} - ${e.clock}`;
                }
                return "";
            }
        },
        456886: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                a = r(349929),
                o = r(325686),
                i = r(731708),
                s = r(392237),
                c = r(111677),
                u = r.n(c),
                l = r(988290),
                d = r(584316),
                m = r(812730),
                f = r(670178);
            const p = u().d228a9a0,
                h = u().c174e46e;
            function w({ currentTemperature: e, dailyForecast: t, defaultNumDaysToShow: r = 5, temperatureType: s }) {
                const { isCompactLayout: c } = (0, l.ZP)(),
                    [u, w] = n.useState(r),
                    g = r >= t.days.length,
                    b = u >= t.days.length,
                    T = n.useMemo(() => t.days.slice(0, u), [u, t]),
                    M = n.useMemo(() => [Math.min(...t.days.map((e) => e.temperatureMin)), Math.max(...t.days.map((e) => e.temperatureMax))], [t]);
                return n.createElement(
                    o.Z,
                    { style: v.container },
                    T.map((t) => {
                        const r = new Date(t.forecastStart),
                            u = r.toDateString() === new Date().toDateString(),
                            l = (0, f.Ot)(r, c),
                            d = Math.round(t.temperatureMin),
                            p = Math.round(t.temperatureMax);
                        return n.createElement(o.Z, { key: `day-${t.forecastStart}`, style: v.dayTemperatureContainer }, n.createElement(i.ZP, { style: [v.timeLabel, c ? v.compactTimeLabel : void 0], weight: "bold" }, l), n.createElement(o.Z, { style: [v.assetContainer, c ? v.compactAssetContainer : void 0] }, n.createElement(a.G, { icon: (0, f.qp)(t.conditionCode), style: v.asset })), n.createElement(m.Z, { currentTemperature: e, globalMax: M[1], globalMin: M[0], isToday: u, max: p, min: d, style: v.temperatureBar, temperatureType: s }));
                    }),
                    !g && n.createElement(d.Z, { onClick: () => w(b ? r : t.days.length), seeLessLabel: h, seeMoreLabel: p, showingMore: b, style: v.seeMore }),
                );
            }
            const v = s.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "column" }, dayTemperatureContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, alignItems: "center", fontSize: e.fontSizes.subtext1, lineHeight: e.fontSizes.subtext1, flex: 1, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, minWidth: 0 }, timeLabel: { fontSize: "inherit", lineHeight: "inherit", whiteSpace: "nowrap", width: 90 }, compactTimeLabel: { width: 50 }, assetContainer: { display: "flex", justifyContent: "center", alignItems: "center", marginEnd: e.spaces.space20 }, compactAssetContainer: { marginEnd: e.spaces.space8 }, asset: { width: e.spaces.space20, height: e.spaces.space20 }, temperatureBar: { flex: 1 }, seeMore: { marginTop: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-26844252.d23bb7ea.js.map

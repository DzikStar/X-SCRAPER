"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-1d41f45b"],
    {
        396184: (e, t, r) => {
            r.d(t, { Ew: () => m, Jo: () => s, K_: () => w, MN: () => $, Mv: () => M, Oi: () => g, S1: () => v, UH: () => b, UK: () => h, ce: () => E, dg: () => T, dv: () => i, h3: () => p, id: () => c, ke: () => f, s8: () => a, vq: () => l, x1: () => u, x8: () => N, xt: () => d });
            var n = r(332920),
                o = r.n(n);
            const i = { NBA: "nba", NFL: "nfl", MLB: "mlb", PGA: "pga", FC: "fc", CFB: "cfb", NHL: "nhl" },
                a = { [i.NBA]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [i.NFL]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [i.MLB]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [i.PGA]: { stat: !0 }, [i.FC]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 }, [i.CFB]: {}, [i.NHL]: { player: !0, team: !0, boxscore: !0, schedule: !0, standing: !0, stat: !0 } },
                s = { [i.NBA]: o().i9f615c8, [i.NFL]: o().i9f615c8, [i.MLB]: o().i9f615c8, [i.FC]: o().ieff24f4 },
                c = { [i.NBA]: { full: ["TEAM", "W", "L", "PCT", "GB"], compact: ["TEAM", "W", "L", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [i.NFL]: { full: ["TEAM", "W", "L", "T", "PCT"], compact: ["TEAM", "W", "L", "T", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [i.MLB]: { full: ["TEAM", "W", "L", "PCT", "GB"], compact: ["TEAM", "W", "L", "PCT"], columnsToHighlight: ["TEAM", "PCT"] }, [i.FC]: { full: ["TEAM", "W", "PTS", "D", "L", "GD"], compact: ["TEAM", "W", "PTS", "D", "L"], columnsToHighlight: ["TEAM", "PTS"] }, [i.NHL]: { full: ["TEAM", "W", "L", "OTL", "PTS", "DIFF"], compact: ["TEAM", "W", "L", "OTL", "PTS"], columnsToHighlight: ["TEAM", "PTS"] } },
                u = Object.freeze({ OVERVIEW: { id: "OVERVIEW", label: o().d59dbf8a }, MATCHES: { id: "GAMES", label: o().e2811afc }, STANDINGS: { id: "STANDINGS", label: o().j081fa34 } }),
                d = o().g02dacc0,
                l = o().c6e845c0,
                m = o().i7c7f156,
                f = o().f178e38c,
                h = o().cbdddb0a,
                p = o().b134ba52,
                v = o().b6da6b02,
                w = o().j1361724,
                b = o().fa0f1262,
                $ = 5,
                T = 5,
                g = { transform: [{ scale: 1.5 }] },
                M = { "Celta Vigo": "RC Celta de Vigo", "Nottm Forest": "Nottingham Forest", "Man City": "Manchester City", "Man United": "Manchester United", Wolves: "Wolverhampton Wanderers", "M'gladbach": "Borussia Mönchengladbach", Rennes: "Stade Rennais" },
                N = { [i.FC]: !0 },
                E = o().c2cac618;
        },
        17341: (e, t, r) => {
            r.d(t, { $c: () => E, FB: () => f, FO: () => b, Ov: () => w, P$: () => L, a1: () => m, a5: () => M, ay: () => g, e4: () => N, lV: () => T, mr: () => p, q$: () => h, qD: () => $, qs: () => S, u5: () => I, uS: () => F, vw: () => A });
            r(571372), r(136728);
            var n = r(719870),
                o = r(332920),
                i = r.n(o),
                a = r(207137),
                s = r(181226),
                c = r(396184);
            const u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function l(e) {
                return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(e);
            }
            function m(e) {
                return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            }
            function f(e) {
                const [t, r, n] = e.split("-"),
                    o = parseInt(t, 10),
                    i = parseInt(r, 10),
                    a = parseInt(n, 10),
                    s = d[i - 1] || "";
                return `${`${a}${(function (e) {
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
                })(a)}`} ${s}, ${(o % 100).toString().padStart(2, "0")}`;
            }
            function h(e) {
                const t = /^(\w{3}) (\d{1,2})\/(\d{1,2})$/,
                    r = /^(\w{3}), (\w{3}) (\d{1,2}), (\d{4})$/;
                let n = "",
                    o = "",
                    i = "";
                if (t.test(e)) {
                    const r = e.match(t);
                    if (!r) throw new Error(`Invalid date format. Expected format for dateString: Sat 12/5. Got: ${e}`);
                    ([, i, n, o] = r), (n = d[Number(n) - 1]);
                } else {
                    if (!r.test(e)) throw new Error(`Invalid date format. Supported formats: Sun 12/5 or Sat, Aug 17, 2024. Got: ${e}`);
                    {
                        const t = e.match(r);
                        if (!t) throw new Error(`Invalid date format. Expected format: Sat, Aug 17, 2024. Got: ${e}`);
                        [, i, n, o] = t;
                    }
                }
                const a = Number(o),
                    s = u.find((e) => e === i);
                if (!d.includes(n)) throw new Error(`Invalid month: ${n}. Must be between Jan - Dec.`);
                if (a < 1 || a > 31) throw new Error(`Invalid day: ${a}. Must be between 1 and 31.`);
                if (!s) throw new Error(`Invalid weekday: ${i}. Must be one of ${u.join(",")}`);
                const m = `${s}, ${n} ${a}`,
                    f = new Date(),
                    h = l(f),
                    p = new Date(f);
                p.setHours(p.getHours() + 24);
                const v = l(p),
                    w = new Date(f);
                w.setHours(w.getHours() - 24);
                const b = l(w);
                return m === h ? c.xt : m === v ? c.Ew : m === b ? c.vq : m;
            }
            function p(e) {
                const { timeZone: t } = window.Intl.DateTimeFormat().resolvedOptions(),
                    r = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", timeZoneName: "short", timeZone: t }).formatToParts(e),
                    n = r.find((e) => "hour" === e.type),
                    o = r.find((e) => "minute" === e.type),
                    i = r.find((e) => "dayPeriod" === e.type),
                    a = r.find((e) => "timeZoneName" === e.type);
                if (!(n && o && a && i)) throw new Error(`Failed to format time for date: ${e.toDateString()}`);
                return `${n.value}:${o.value} ${i.value} ${a.value}`;
            }
            function v(e, t, r, n, o, i) {
                const a = "America/New_York",
                    s = Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: a })
                        .formatToParts()
                        .find((e) => "timeZoneName" === e.type);
                if (!s) throw new Error(`Failed to get timeZoneName for: ${a}`);
                const c = `${e}/${t}/${r} ${n}:${o} ${i} ${s.value}`;
                return new Date(c);
            }
            function w(e, t) {
                const r = `${e} ${t}`.match(/^(\w{3}) (\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{2}) ([AP]M)$/);
                if (!r) throw new Error(`Invalid date format.\n\n      Expected format for dateString: Sat M/D. Got ${e}\n\n      Expected format for timeString: H:MM TT. Got ${t}`);
                const n = "America/New_York";
                if (
                    !Intl.DateTimeFormat("en-US", { timeZoneName: "short", timeZone: n })
                        .formatToParts()
                        .find((e) => "timeZoneName" === e.type)
                )
                    throw new Error(`Failed to get timeZoneName for: ${n}`);
                const o = new Date().getFullYear(),
                    [, , i, a, s, c, u] = r;
                return v(Number(i), Number(a), o, Number(s), Number(c), u);
            }
            function b(e, t) {
                const r = `${e} ${t}`.trim(),
                    n = r.match(/^(\w{3}),\s(\w{3})\s(\d{1,2}),\s(\d{4})\s(\d{1,2}):(\d{2})\s?([AP]M)\s?(\w{2})?$/i);
                if (!n) throw new Error(`Invalid format. Expected "DDD, MMM D, YYYY h:mm AM/PM TZ". Received: "${r}"`);
                const [, , o, i, a, s, c, u] = n;
                return v(d.indexOf(o) + 1, Number(i), Number(a), Number(s), Number(c), u);
            }
            function $(e) {
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
            function g(e, t, r, n) {
                return { homeTeamBio: "@" === t ? n : r, awayTeamBio: "@" === t ? r : n };
            }
            function M(e) {
                const t = e.split(" ");
                if (t.length < 2 || !t[1].includes("-")) throw new Error("Invalid score format");
                const r = t[0],
                    n = t[1].split("-"),
                    o = parseInt(n[0], 10),
                    i = parseInt(n[1], 10);
                if (isNaN(o) || isNaN(i)) throw new Error("Scores are not valid numbers");
                return { result: r, teamScore: o, otherTeamScore: i };
            }
            function N(e) {
                return (0, a.zk)(e) ? c.xt : (0, a.gO)(e) ? c.vq : (0, a.Pm)(e) ? c.Ew : l(e);
            }
            function E(e) {
                const t = n.TU.lexer(e);
                if (t.length <= 0) return { headers: [], rows: [], type: "" };
                const r = t[0];
                return "table" !== r.type ? { headers: [], rows: [], type: r.type } : { headers: r.header.map((e) => e.text), rows: r.rows.map((e) => e.map((e) => (e.tokens.length > 0 ? e.tokens[0].text : ""))), type: r.type };
            }
            function S(e, t, r, n) {
                const o = E(r),
                    { headers: i, rows: a } = o,
                    s = {},
                    u = [];
                if (i.findIndex((e) => "RANK" === e) < 0) {
                    const t = a.every((e) => e.slice(1).every((e) => "" === e || "0" === e));
                    a.forEach((r, n) => {
                        const o = T(e, c.Mv[r[0]] || r[0]);
                        u.push(o), t || (s[o.name] = n + 1);
                    });
                } else
                    a.forEach((t, r) => {
                        const n = T(e, c.Mv[t[1]] || t[1]);
                        u.push(n), (s[n.name] = Number(t[0])), t.shift();
                    }),
                        i.shift();
                const d = { CLUB: "TEAM" };
                for (let e = 0; e < i.length; e++) i[e] = A(d[i[e]] || i[e]);
                const l = (function (e, t, r) {
                    const n = e.map((e) => e.toLowerCase()),
                        o = [],
                        i = [];
                    for (const t of r) {
                        const r = t.toLowerCase(),
                            a = n.indexOf(r);
                        -1 !== a && (o.push(a), i.push(e[a]));
                    }
                    return { headers: i, rows: t.map((e) => o.map((t) => e[t])) };
                })(i, a, c.id[e][n ? "compact" : "full"]);
                return { scope: t, headers: l.headers, rows: l.rows, ranks: s, teamBios: u };
            }
            function A(e) {
                return e.length <= 0 ? "" : String(e).charAt(0).toUpperCase() + String(e).slice(1).toLowerCase();
            }
            const k = i().i9f615c8;
            function I(e) {
                return c.Jo[e] || k;
            }
            function F(e, t) {
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
                            o = e.match(n);
                        if (o) {
                            const e = o[1],
                                t = o[2];
                            return { clock: e, quarter: { overtime: 5, "double overtime": 6, "triple overtime": 7, "quadruple overtime": 8, "quintuple overtime": 9, "sextuple overtime": 10 }[t] };
                        }
                    } else if (t === c.dv.MLB) {
                        const t = /^(Top|Bottom) (\d+)(?:th|nd|rd|st)?\s*(\d)-(\d),\s*(?:(\d) outs|no outs)$/,
                            r = e.match(t);
                        if (r) {
                            const [, e, t, n, o, i] = r;
                            return { inning: parseInt(t, 10), inningHalf: "Top" === e ? "top" : "bottom", count: { balls: parseInt(n, 10), strikes: parseInt(o, 10), outs: void 0 === i ? 0 : parseInt(i, 10) } };
                        }
                    } else if (t === c.dv.NHL) {
                        const t = /(\d{2}:\d{2}) left in the (\d+)(?:st|nd|rd|th) period/,
                            r = e.match(t);
                        if (r) {
                            const e = r[1];
                            return { period: parseInt(r[2], 10), clock: e };
                        }
                        const n = /^(\d{2}:\d{2})\sleft\sin\s?(overtime|double\s+overtime|triple\s+overtime|quadruple\s+overtime|quintuple\s+overtime|sextuple\s+overtime)$/,
                            o = e.match(n);
                        if (o) {
                            const e = o[1],
                                t = o[2];
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
                            o = e.count;
                        let i = `${n.charAt(0).toUpperCase() + n.slice(1)} ${r}${t[r] || "th"}`;
                        return void 0 !== o.balls && void 0 !== o.strikes && void 0 !== o.outs && (i += `\n${o.balls}-${o.strikes}, ${o.outs} outs`), i;
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-1d41f45b.cbdf481a.js.map

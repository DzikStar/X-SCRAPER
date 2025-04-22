"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-0d8ef87b"],
    {
        306191: (e, t, a) => {
            a.d(t, { Z: () => x });
            a(136728);
            var s = a(202784),
                r = a(392237),
                o = a(988290),
                n = a(572929),
                l = a(339838),
                i = a(687612),
                c = a(396184),
                m = a(17341),
                p = a(325686),
                d = a(103714);
            function u({ fcDetails: e, onSendPrompt: t, style: a }) {
                const r = c.x8[c.dv.FC],
                    o = s.useCallback((e) => {
                        const t = e.split(" ");
                        let a = "";
                        return (a = 1 === t.length ? t[0] : `${t[0][0]}. ${t[t.length - 1]}`), a;
                    }, []),
                    n = ({ events: e }) =>
                        s.createElement(
                            s.Fragment,
                            null,
                            e.map((e) => {
                                const a = `${o(e.player)} ${e.goalMinutes.join(", ")}`;
                                return s.createElement(
                                    d.Z,
                                    {
                                        key: e.player,
                                        onClick: () => {
                                            t && t(e.player);
                                        },
                                        style: h.goalEvent,
                                    },
                                    a,
                                );
                            }),
                        );
                return s.createElement(p.Z, { style: [h.events, r ? void 0 : h.awayTeamFirstEvents, a] }, s.createElement(p.Z, { style: h.teamEvents }, s.createElement(n, { events: e.homeTeamEvents })), s.createElement(p.Z, { style: [h.teamEvents, h.awayTeamEvents] }, s.createElement(n, { events: e.awayTeamEvents })));
            }
            const h = r.default.create((e) => ({ events: { width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }, compactEvents: {}, awayTeamFirstEvents: { flexDirection: "row-reverse" }, teamEvents: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, awayTeamEvents: { alignItems: "flex-end" }, goalEvent: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3 }, awayTeamGoalEvent: { justifyContent: "end", textAlign: "end" } }));
            function y(e) {
                const t = { pts: { playerNames: [], value: Number.NEGATIVE_INFINITY }, reb: { playerNames: [], value: Number.NEGATIVE_INFINITY }, ast: { playerNames: [], value: Number.NEGATIVE_INFINITY }, stl: { playerNames: [], value: Number.NEGATIVE_INFINITY }, blk: { playerNames: [], value: Number.NEGATIVE_INFINITY } },
                    a = [];
                for (const s of e)
                    if ("Starters" === s.scope || "Bench" === s.scope) {
                        const e = s.headers.findIndex((e) => "NAME" === e),
                            r = s.headers.findIndex((e) => "PTS" === e),
                            o = s.headers.findIndex((e) => "REB" === e),
                            n = s.headers.findIndex((e) => "AST" === e),
                            l = s.headers.findIndex((e) => "STL" === e),
                            i = s.headers.findIndex((e) => "BLK" === e);
                        for (const c of s.rows) {
                            const s = c[e],
                                m = Number(c[r]);
                            m === t.pts.value ? t.pts.playerNames.push(s) : m > t.pts.value && ((t.pts.playerNames = [s]), (t.pts.value = m));
                            const p = Number(c[o]);
                            p === t.reb.value ? t.reb.playerNames.push(s) : p > t.reb.value && ((t.reb.playerNames = [s]), (t.reb.value = p));
                            const d = Number(c[n]);
                            d === t.ast.value ? t.ast.playerNames.push(s) : d > t.ast.value && ((t.ast.playerNames = [s]), (t.ast.value = d));
                            const u = Number(c[l]);
                            u === t.stl.value ? t.stl.playerNames.push(s) : u > t.stl.value && ((t.stl.playerNames = [s]), (t.stl.value = u));
                            const h = Number(c[i]);
                            h === t.blk.value ? t.blk.playerNames.push(s) : h > t.blk.value && ((t.blk.playerNames = [s]), (t.blk.value = h)), a.push({ name: s, pts: m, reb: p, ast: d, stl: u, blk: h });
                        }
                    }
                const s = a.reduce((e, t) => {
                        const a = e.pts + e.reb + e.ast + e.stl + e.blk;
                        return t.pts + t.reb + t.ast + t.stl + t.blk > a ? t : e;
                    }),
                    r = [];
                ["pts", "reb", "ast", "stl", "blk"].forEach((e) => {
                    ("pts" === e || t[e].playerNames.includes(s.name)) && r.push({ type: e, value: s[e] });
                });
                return { name: s.name, stats: r };
            }
            var g = a(731708),
                f = a(265687);
            const b = 0;
            function T({ awayTeamBio: e, homeTeamBio: t, nbaDetails: a, onSendPrompt: r, style: n }) {
                const { isCompactLayout: l } = (0, o.ZP)(),
                    i = c.x8[c.dv.NBA],
                    m = s.useMemo(() => a.scoreBreakDownByQuarterTable.headers.map((e, t) => s.createElement(g.ZP, { style: w.scoresHeaderText, weight: "bold" }, e)), [a.scoreBreakDownByQuarterTable.headers]),
                    d = s.useMemo(() => {
                        const e = a.scoreBreakDownByQuarterTable.rows.map((e) => e.map((e) => s.createElement(g.ZP, { style: w.scoresRowText }, e)));
                        return i ? e : e.reverse();
                    }, [a.scoreBreakDownByQuarterTable.rows, i]);
                return s.createElement(
                    p.Z,
                    { style: [w.container, n] },
                    s.createElement(f.Z, { colStyle: w.scoresTableCol, fixedColIdx: b, headers: m, rowStyle: w.scoresTableRow, rows: d, style: w.scoresTable }),
                    s.createElement(p.Z, { style: w.divider }),
                    s.createElement(
                        p.Z,
                        { style: [w.topPerformersContainer, l ? w.compactTopPerformersContainer : void 0, i ? void 0 : w.awayTeamFirstTopPerformersContainer] },
                        s.createElement(v, {
                            onClick: () => {
                                r && r(a.homeTeamTopPerformingPlayer.name);
                            },
                            topPerformer: a.homeTeamTopPerformingPlayer,
                        }),
                        s.createElement(v, {
                            onClick: () => {
                                r && r(a.awayTeamTopPerformingPlayer.name);
                            },
                            topPerformer: a.awayTeamTopPerformingPlayer,
                        }),
                    ),
                );
            }
            function v({ onClick: e, topPerformer: t }) {
                const { isCompactLayout: a } = (0, o.ZP)(),
                    r = a ? 2 : 3,
                    n = s.useMemo(() => t.stats.slice(0, r), [r, t.stats]),
                    l = s.useMemo(() => {
                        const e = t.name.split(" ");
                        return 1 === e.length ? t.name : `${e[0][0]}. ${e[e.length - 1]}`;
                    }, [t.name]),
                    i = s.useMemo(() => n.map((e) => s.createElement(p.Z, { key: e.type, style: w.statContainer }, s.createElement(g.ZP, { style: w.statValue }, e.value), s.createElement(g.ZP, { style: w.statType }, e.type.toUpperCase()))), [n]),
                    c = s.useMemo(() => s.createElement(d.Z, { onClick: e, style: w.topPerformerName }, l), [l, e]);
                return s.createElement(p.Z, { style: w.topPerformerContainer }, a ? s.createElement(p.Z, { style: w.compactTopPerformerNameStatContainer }, c, s.createElement(p.Z, { style: w.compactStatsContainer }, i)) : s.createElement(s.Fragment, null, c, s.createElement(p.Z, { style: w.dot }), i));
            }
            const w = r.default.create((e) => ({ container: { backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", fontSize: e.fontSizes.subtext3, width: "100%" }, scoresHeaderText: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, scoresRowText: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, scoresTable: { flex: 1, marginEnd: e.spaces.space8 }, scoresTableRow: { borderTopWidth: "none", paddingVertical: e.spaces.space8 }, scoresTableCol: { flex: 1 }, divider: { backgroundColor: e.colors.gray200, width: 1, height: "100%", marginHorizontal: e.spaces.space8 }, topPerformersContainer: { display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", gap: e.spaces.space16 }, compactTopPerformersContainer: { gap: e.spaces.space8 }, awayTeamFirstTopPerformersContainer: { flexDirection: "column-reverse" }, topPerformerContainer: { display: "flex", flexDirection: "row", alignItems: "center", fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, gap: e.spaces.space4, flex: 1 }, compactTopPerformerNameStatContainer: { display: "flex", flexDirection: "column", alignItems: "start", gap: e.spaces.space4 }, compactStatsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, topPerformerName: { fontSize: "inherit", lineHeight: "inherit" }, dot: { width: 2, height: 2, borderRadius: 2, backgroundColor: e.colors.gray700 }, statContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, statValue: { fontSize: "inherit", lineHeight: "inherit" }, statType: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.gray700 } }));
            function x({ cardAttachment: e, isAnimated: t, onSendPrompt: a }) {
                const { isCompactLayout: r } = (0, o.ZP)(),
                    { boxscore: p } = e.visuals,
                    d = (0, m.lV)(e.sport, p.homeTeam.name),
                    h = p.homeTeam.score,
                    g = p.homeTeam.record,
                    f = (0, m.lV)(e.sport, p.awayTeam.name),
                    b = p.awayTeam.score,
                    v = p.awayTeam.record,
                    w = s.useMemo(() => {
                        if (e.sport !== c.dv.FC || !p.events) return null;
                        const t = [],
                            a = [];
                        return (
                            p.events.forEach((s) => {
                                if ("goal" === s.type || "penalty_goal" === s.type) {
                                    const r = s.minute || "",
                                        o = r && "penalty_goal" === s.type ? `${r} (P)` : r,
                                        n = s.player || "",
                                        l = (0, m.lV)(e.sport, s.team);
                                    if (l.name === d.name && s.player && s.minute) {
                                        for (const e of t) if (e.player === n) return void e.goalMinutes.push(o);
                                        t.push({ player: n, goalMinutes: [o] });
                                    } else if (l.name === f.name && s.player && s.minute) {
                                        for (const e of a) if (e.player === n) return void e.goalMinutes.push(o);
                                        a.push({ player: n, goalMinutes: [o] });
                                    }
                                }
                            }),
                            { homeTeamEvents: t, awayTeamEvents: a }
                        );
                    }, [p.events, e.sport, d.name, f.name]),
                    x = s.useMemo(() => {
                        if (e.sport !== c.dv.NBA || !p.summary) return null;
                        const t = p.homeTeam.playerStats.map((e) => {
                                const t = (0, m.$c)(e.table),
                                    { headers: a, rows: s } = t;
                                return { scope: e.scope, headers: a, rows: s };
                            }),
                            a = p.awayTeam.playerStats.map((e) => {
                                const t = (0, m.$c)(e.table),
                                    { headers: a, rows: s } = t;
                                return { scope: e.scope, headers: a, rows: s };
                            }),
                            s = y(t),
                            o = y(a),
                            n = (0, m.$c)(p.summary || ""),
                            l = n.rows.sort((t, a) => {
                                const s = (0, m.lV)(e.sport, t[0]),
                                    r = (0, m.lV)(e.sport, a[0]);
                                return s.name === d.name ? -1 : r.name === d.name ? 1 : 0;
                            });
                        (l[0][0] = r ? d.abbreviation : d.nickname || l[0][0]), (l[1][0] = r ? f.abbreviation : f.nickname || l[0][0]), (n.rows = l);
                        const i = { Team: "", Total: "T" },
                            u = [];
                        return (
                            n.headers.forEach((e) => {
                                u.push(void 0 !== i[e] ? i[e] : e);
                            }),
                            (n.headers = u),
                            { homeTeamTopPerformingPlayer: s, awayTeamTopPerformingPlayer: o, scoreBreakDownByQuarterTable: n }
                        );
                    }, [p.homeTeam, p.awayTeam, p.summary, e.sport, d, f, r]),
                    E = s.useMemo(() => {
                        let e = (0, m.FB)(p.date);
                        const t = new Date(),
                            a = new Date(t);
                        a.setHours(a.getHours() - 24);
                        const s = (0, m.FB)((0, m.a1)(t)),
                            r = (0, m.FB)((0, m.a1)(a));
                        return e === s ? (e = c.xt) : e === r && (e = c.vq), e;
                    }, [p.date]);
                return s.createElement(n.Z, { isAnimated: t }, s.createElement(i.Z, { awayTeamBio: f, awayTeamRecord: v, awayTeamScore: b, dateLabel: E, homeTeamBio: d, homeTeamRecord: g, homeTeamScore: h, isUpcomingMatch: !1, onSendPrompt: a, sport: e.sport }), w && s.createElement(u, { fcDetails: w, onSendPrompt: a, style: [S.fcDetailContainer, r ? S.compactFcDetailContainer : void 0] }), x && s.createElement(T, { awayTeamBio: f, homeTeamBio: d, nbaDetails: x, onSendPrompt: a, style: S.nbaDetailContainer }), s.createElement(l.Z, { style: S.createdAtText, text: e.sport === c.dv.FC ? c.ce : void 0, timestamp: e.created_at }));
            }
            const S = r.default.create((e) => ({ fcDetailContainer: { width: "45%", marginTop: -10 }, compactFcDetailContainer: { width: "90%", marginTop: 0 }, nbaDetailContainer: { marginTop: e.spaces.space8 }, createdAtText: { marginTop: e.spaces.space16 } }));
        },
        641095: (e, t, a) => {
            a.d(t, { Z: () => T });
            a(136728);
            var s = a(202784),
                r = a(555874),
                o = a(325686),
                n = a(731708),
                l = a(392237),
                i = a(674132),
                c = a.n(i),
                m = a(988290),
                p = a(572929),
                d = a(339838),
                u = a(103714),
                h = a(396184),
                y = a(17341);
            const g = c().f7b57ac0,
                f = {
                    [h.dv.NBA]: [
                        { key: "age", label: "Age" },
                        { key: "jerseyNumber", label: "Number" },
                        { key: "position", label: "Position" },
                        { key: "heightFeetInches", label: "Height" },
                        { key: "weightLbs", label: "Weight" },
                        { key: "college", label: "College" },
                        { key: "birthplace", label: "Birthplace" },
                    ],
                    [h.dv.NFL]: [
                        { key: "age", label: "Age" },
                        { key: "jerseyNumber", label: "Number" },
                        { key: "position", label: "Position" },
                        { key: "heightFeetInches", label: "Height" },
                        { key: "weightLbs", label: "Weight" },
                        { key: "college", label: "College" },
                        { key: "birthplace", label: "Birthplace" },
                    ],
                    [h.dv.MLB]: [
                        { key: "age", label: "Age" },
                        { key: "jerseyNumber", label: "Number" },
                        { key: "position", label: "Position" },
                        { key: "heightFeetInches", label: "Height" },
                        { key: "weightLbs", label: "Weight" },
                        { key: "college", label: "College" },
                        { key: "birthplace", label: "Birthplace" },
                    ],
                    [h.dv.FC]: [
                        { key: "age", label: "Age" },
                        { key: "jerseyNumber", label: "Number" },
                        { key: "position", label: "Position" },
                        { key: "heightCentimeters", label: "Height" },
                        { key: "weightKgs", label: "Weight" },
                        { key: "birthplace", label: "Birthplace" },
                    ],
                    [h.dv.NHL]: [
                        { key: "age", label: "Age" },
                        { key: "jerseyNumber", label: "Number" },
                        { key: "position", label: "Position" },
                        { key: "heightFeetInches", label: "Height" },
                        { key: "weightLbs", label: "Weight" },
                        { key: "birthplace", label: "Birthplace" },
                    ],
                },
                b = { [h.dv.NBA]: { full: 4, compact: 3 }, [h.dv.NFL]: { full: 4, compact: 3 }, [h.dv.MLB]: { full: 4, compact: 3 }, [h.dv.FC]: { full: 4, compact: 3 }, [h.dv.NHL]: { full: 4, compact: 3 } };
            function T({ cardAttachment: e, isAnimated: t, onSendPrompt: a }) {
                const { isCompactLayout: l } = (0, m.ZP)(),
                    { player: i } = e.visuals,
                    c = s.useMemo(() => {
                        for (const e of i.stats)
                            if ("Regular Season" === e.scope) {
                                const { headers: t, rows: a } = (0, y.$c)(e.table);
                                return { scope: e.scope, headers: t, rows: a };
                            }
                    }, [i.stats]),
                    T = s.useMemo(() => (!c || c.rows.length <= 0 ? null : c.rows[c.rows.length - 1]), [c]),
                    w = s.useMemo(() => {
                        if (e.sport !== h.dv.FC) return null;
                        if (!c || c.rows.length <= 0 || !T) return null;
                        const t = c.headers.findIndex((e) => "Season" === e),
                            a = c.headers.findIndex((e) => "M" === e),
                            s = c.headers.findIndex((e) => "G" === e),
                            r = c.headers.findIndex((e) => "A" === e);
                        return { season: T[t], assists: T[r], goals: T[s], gamesPlayed: T[a] };
                    }, [e.sport, c, T]),
                    x = s.useMemo(() => {
                        if (e.sport !== h.dv.NBA) return null;
                        if (!c || c.rows.length <= 0 || !T) return null;
                        const t = c.headers.findIndex((e) => "Season" === e),
                            a = c.headers.findIndex((e) => "PTS" === e),
                            s = c.headers.findIndex((e) => "REB" === e),
                            r = c.headers.findIndex((e) => "AST" === e),
                            o = c.headers.findIndex((e) => "FG%" === e),
                            n = c.headers.findIndex((e) => "GP" === e);
                        return { season: T[t], pts: T[a], rebs: T[s], assists: T[r], fgPercentage: T[o], gamesPlayed: T[n] };
                    }, [e.sport, c, T]),
                    S = s.useMemo(() => {
                        if (e.sport !== h.dv.MLB) return null;
                        if (!c || c.rows.length <= 0 || !T) return null;
                        const t = c.headers.findIndex((e) => "Season" === e),
                            a = c.headers.findIndex((e) => "AVG" === e),
                            s = c.headers.findIndex((e) => "HR" === e),
                            r = c.headers.findIndex((e) => "RBI" === e),
                            o = c.headers.findIndex((e) => "H" === e),
                            n = c.headers.findIndex((e) => "ERA" === e),
                            l = c.headers.findIndex((e) => "SO" === e),
                            i = c.headers.findIndex((e) => "WHIP" === e),
                            m = c.headers.findIndex((e) => "W" === e),
                            p = c.headers.findIndex((e) => "L" === e);
                        return { season: T[t], avg: T[a], hr: T[s], rbi: T[r], hits: T[o], era: T[n], so: T[l], whip: T[i], w: T[m], l: T[p] };
                    }, [e.sport, c, T]),
                    E = s.useMemo(() => {
                        if (e.sport !== h.dv.NHL) return null;
                        if (!c || c.rows.length <= 0 || !T) return null;
                        const t = c.headers.findIndex((e) => "Season" === e),
                            a = c.headers.findIndex((e) => "P" === e),
                            s = c.headers.findIndex((e) => "G" === e),
                            r = c.headers.findIndex((e) => "A" === e),
                            o = c.headers.findIndex((e) => "GP" === e);
                        return { season: T[t], goals: T[s], pts: T[a], assists: T[r], gamesPlayed: T[o] };
                    }, [e.sport, c, T]),
                    P = s.useMemo(() => {
                        for (let t = 0; t < i.games.length; t++) {
                            const a = i.games[t],
                                { rows: s } = (0, y.$c)(a.table);
                            if (s.length > 0) {
                                const t = s[0];
                                return (0, y.lV)(e.sport, t[1]);
                            }
                        }
                        return null;
                    }, [i.games, e.sport]),
                    k = s.useMemo(() => {
                        const t = (e, t) => {
                            const a = { weightLbs: " lbs", weightKgs: " kgs" };
                            return a[e] ? `${t}${a[e]}` : t;
                        };
                        return f[e.sport].map((e) => ({ key: e.key, label: e.label, value: t(e.key, i.bio[e.key]) })).filter((e) => void 0 !== e.value && null !== e.value);
                    }, [e.sport, i.bio]),
                    C = s.useMemo(() => {
                        const t = [];
                        if (e.sport === h.dv.FC) w && (t.push({ key: "games", label: "Games", value: w.gamesPlayed }), t.push({ key: "goals", label: "Goals", value: w.goals }), t.push({ key: "assists", label: "Assists", value: w.assists }));
                        else if (e.sport === h.dv.NBA) x && (t.push({ key: "pts", label: "Points", value: x.pts }), t.push({ key: "rebounds", label: "Rebounds", value: x.rebs }), t.push({ key: "assists", label: "Assists", value: x.assists }), t.push({ key: "fgPercentage", label: "FG%", value: x.fgPercentage }));
                        else if (e.sport === h.dv.MLB) {
                            if (S) {
                                const e = k.find((e) => "position" === e.key);
                                e && "P" === e.value ? (t.push({ key: "record", label: "Record", value: `${S.w}-${S.l}` }), t.push({ key: "era", label: "ERA", value: S.era }), t.push({ key: "so", label: "SO", value: S.so }), t.push({ key: "whip", label: "WHIP", value: S.whip })) : (t.push({ key: "avg", label: "Avg", value: S.avg }), t.push({ key: "hr", label: "HR", value: S.hr }), t.push({ key: "rbi", label: "RBI", value: S.rbi }), t.push({ key: "hits", label: "Hits", value: S.hits }));
                            }
                        } else e.sport === h.dv.NHL && E && (t.push({ key: "gamesPlayed", label: "Games", value: E.gamesPlayed }), t.push({ key: "goals", label: "Goals", value: E.goals }), t.push({ key: "assists", label: "Assists", value: E.assists }), t.push({ key: "pts", label: "Points", value: E.pts }));
                        return t.filter((e) => void 0 !== e.value && null !== e.value && "" !== e.value);
                    }, [x, S, w, E, e.sport, k]),
                    M = l ? b[e.sport].compact : b[e.sport].full,
                    I = s.useMemo(() => {
                        if (!T || !c) return;
                        const e = c.headers.findIndex((e) => "Season" === e);
                        return T[e];
                    }, [T, c]);
                return s.createElement(
                    p.Z,
                    { isAnimated: t },
                    s.createElement(
                        o.Z,
                        { style: [v.container, l ? v.compactContainer : void 0] },
                        s.createElement(
                            o.Z,
                            { style: [v.nameContainer, l ? v.compactNameContainer : void 0] },
                            s.createElement(n.ZP, { style: v.playerName, weight: "bold" }, i.bio.usedName),
                            P &&
                                s.createElement(
                                    s.Fragment,
                                    null,
                                    s.createElement(o.Z, { style: v.dot }),
                                    s.createElement(
                                        u.Z,
                                        {
                                            onClick: () => {
                                                a && a(P.name);
                                            },
                                            style: v.team,
                                        },
                                        P.name,
                                    ),
                                ),
                        ),
                        C.length > 0 &&
                            c &&
                            s.createElement(
                                o.Z,
                                { style: v.playerStatsContainer },
                                I && s.createElement(o.Z, { style: [v.seasonLabelContainer, l ? v.compactSeasonLabelContainer : void 0] }, s.createElement(n.ZP, { style: v.seasonLabel }, g), s.createElement(o.Z, { style: v.dot }), s.createElement(n.ZP, { style: v.seasonLabel }, `${I} ${c.scope}`)),
                                s.createElement(
                                    o.Z,
                                    { style: v.playerStats },
                                    C.map((e) => s.createElement(o.Z, { key: e.key, style: [v.playerStat, l ? v.compactPlayerStat : void 0] }, s.createElement(n.ZP, { style: v.attValue, weight: "bold" }, e.value), s.createElement(n.ZP, { style: v.attLabel }, e.label))),
                                ),
                            ),
                        s.createElement(r.Z, {
                            data: k,
                            key: `player-attribute-grid-${M}-cols`,
                            keyExtractor: (e) => e.key,
                            numColumns: M,
                            renderItem: ({ index: e, item: t }) => {
                                const a = Math.ceil(k.length / M),
                                    r = Math.floor(e / M) === a - 1;
                                return s.createElement(o.Z, { style: [v.attContainer, l ? v.compactAttContainer : void 0, r ? v.lastAttRow : void 0, { width: `${Math.floor(100 / M)}%` }] }, s.createElement(n.ZP, { style: v.attValue, weight: "bold" }, t.value), s.createElement(n.ZP, { style: v.attLabel }, t.label));
                            },
                            scrollEnabled: !1,
                            style: v.grid,
                        }),
                    ),
                    s.createElement(d.Z, { style: v.createdAtText, text: e.sport === h.dv.FC ? h.ce : void 0, timestamp: e.created_at }),
                );
            }
            const v = l.default.create((e) => ({
                container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, width: "100%" },
                compactContainer: { gap: e.spaces.space12 },
                nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 },
                compactNameContainer: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 },
                playerName: { fontSize: "inherit", lineHeight: "inherit" },
                dot: { width: 2, height: 2, borderRadius: 2, backgroundColor: e.colors.gray700 },
                team: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" },
                playerStatsContainer: { backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, padding: e.spaces.space12, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, display: "flex", flexDirection: "column", gap: e.spaces.space12 },
                seasonLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 },
                compactSeasonLabelContainer: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 },
                seasonLabel: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" },
                playerStats: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 },
                playerStat: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium },
                compactPlayerStat: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, paddingHorizontal: e.spaces.space4 },
                attContainer: { display: "flex", flexDirection: "column", alignItems: "flex-start", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, gap: e.spaces.space8, marginBottom: e.spaces.space16 },
                compactAttContainer: { marginBottom: e.spaces.space12, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 },
                lastAttRow: { marginBottom: 0 },
                attValue: { fontSize: "inherit", lineHeight: "inherit" },
                attLabel: { fontSize: "inherit", lineHeight: "inherit", color: e.colors.gray700 },
                grid: { paddingBottom: e.spaces.space4 },
                createdAtText: { marginTop: e.spaces.space12 },
            }));
        },
        544687: (e, t, a) => {
            a.d(t, { Z: () => u });
            a(136728);
            var s = a(202784),
                r = a(325686),
                o = a(731708),
                n = a(392237),
                l = a(988290),
                i = a(572929),
                c = a(339838),
                m = a(106646),
                p = a(396184),
                d = a(17341);
            function u({ cardAttachment: e, isAnimated: t, onSendPrompt: a }) {
                const { isCompactLayout: n } = (0, l.ZP)(),
                    { schedule: u } = e.visuals,
                    y = s.useMemo(() => {
                        if (!u.inProgress) return [];
                        return u.inProgress.map((t) => {
                            const a = (0, d.lV)(e.sport, p.Mv[t.homeTeam.name] || t.homeTeam.name),
                                s = (0, d.lV)(e.sport, p.Mv[t.awayTeam.name] || t.awayTeam.name),
                                r = (0, d.q$)(t.date);
                            return { homeTeam: { bio: a, score: t.homeTeam.score }, awayTeam: { bio: s, score: t.awayTeam.score }, dateLabel: r, inProgressGameInfo: { gameStatus: t.status, state: (0, d.uS)(t.status, e.sport) }, networkName: t.network };
                        });
                    }, [e.sport, u.inProgress]),
                    g = s.useMemo(() => {
                        const t = [];
                        if (!u.scheduled) return t;
                        const a = new Date();
                        return (
                            u.scheduled.forEach((s) => {
                                const r = (0, d.lV)(e.sport, p.Mv[s.homeTeam.name] || s.homeTeam.name),
                                    o = (0, d.lV)(e.sport, p.Mv[s.awayTeam.name] || s.awayTeam.name),
                                    n = (0, d.FO)(s.date, s.time);
                                if (n.getTime() < a.getTime()) return;
                                const l = (0, d.e4)(n),
                                    i = (0, d.mr)(n);
                                t.push({ homeTeam: { bio: r }, awayTeam: { bio: o }, dateLabel: l, timeLabel: i });
                            }),
                            t.slice(0, p.MN)
                        );
                    }, [e.sport, u.scheduled]),
                    f = s.useMemo(() => {
                        if (!u.completed) return [];
                        return u.completed
                            .sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime())
                            .map((t) => {
                                const a = (0, d.lV)(e.sport, p.Mv[t.homeTeam.name] || t.homeTeam.name),
                                    s = (0, d.lV)(e.sport, p.Mv[t.awayTeam.name] || t.awayTeam.name),
                                    r = (0, d.q$)(t.date);
                                return { homeTeam: { bio: a, score: t.homeTeam.score }, awayTeam: { bio: s, score: t.awayTeam.score }, dateLabel: r };
                            })
                            .slice(0, p.dg);
                    }, [e.sport, u.completed]);
                return f.length <= 0 && g.length <= 0 ? null : s.createElement(i.Z, { isAnimated: t }, s.createElement(r.Z, { style: h.allMatchesContainer }, y.length > 0 && s.createElement(r.Z, null, (f.length > 0 || g.length > 0) && s.createElement(o.ZP, { style: [h.matchesHeader, n ? h.compactMatchesHeader : void 0], weight: "bold" }, p.h3), s.createElement(m.Z, { defaultNumMatchesToShow: 3, matches: y, matchesType: "inprogress", onSendPrompt: a, sport: e.sport })), g.length > 0 && s.createElement(r.Z, null, (y.length > 0 || f.length > 0) && s.createElement(o.ZP, { style: [h.matchesHeader, n ? h.compactMatchesHeader : void 0], weight: "bold" }, p.ke), s.createElement(m.Z, { defaultNumMatchesToShow: 3, matches: g, matchesType: "scheduled", onSendPrompt: a, sport: e.sport })), f.length > 0 && s.createElement(r.Z, null, (y.length > 0 || g.length > 0) && s.createElement(o.ZP, { style: [h.matchesHeader, n ? h.compactMatchesHeader : void 0], weight: "bold" }, p.UK), s.createElement(m.Z, { defaultNumMatchesToShow: 1, matches: f, matchesType: "completed", onSendPrompt: a, sport: e.sport }))), s.createElement(c.Z, { style: h.createdAtText, text: e.sport === p.dv.FC ? p.ce : void 0, timestamp: e.created_at }));
            }
            const h = n.default.create((e) => ({ allMatchesContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, compactAllMatchesConatainer: { gap: e.spaces.space12 }, matchesHeader: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, color: e.colors.gray700, marginBottom: e.spaces.space16 }, compactMatchesHeader: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, disclaimer: { marginTop: e.spaces.space12 }, createdAtText: { marginTop: e.spaces.space12 } }));
        },
        488662: (e, t, a) => {
            a.d(t, { Z: () => u });
            var s = a(202784),
                r = a(392237),
                o = a(988290),
                n = a(572929),
                l = a(339838),
                i = a(181226),
                c = a(415079),
                m = a(534564),
                p = a(396184),
                d = a(17341);
            function u({ cardAttachment: e, isAnimated: t, onSendPrompt: a }) {
                const { isCompactLayout: r } = (0, o.ZP)(),
                    { standings: u } = e.visuals,
                    y = s.useMemo(() => {
                        const t = Object.values(i[e.sport].teams);
                        for (const a of t) if (e.answer.text.includes(a.name)) return a;
                        return null;
                    }, [e.sport, e.answer.text]),
                    g = s.useMemo(() => {
                        if (u.length <= 0 || !y) return null;
                        const t = u.find((e) => e.teams.find((e) => e.abbreviation === y.abbreviation));
                        return t ? (0, d.qs)(e.sport, t.scope, t.table, r) : null;
                    }, [u, e.sport, r, y]);
                return g ? s.createElement(n.Z, { isAnimated: t }, y && s.createElement(m.Z, { leagueName: g.scope, singleLine: !0, standingsWithMetadata: g, style: h.header, teamBio: y }), s.createElement(c.Z, { onSendPrompt: a, sport: e.sport, standingsWithMetadata: g, teamBio: y || void 0 }), s.createElement(l.Z, { style: h.createdAtText, text: e.sport === p.dv.FC ? p.ce : void 0, timestamp: e.created_at })) : null;
            }
            const h = r.default.create((e) => ({ header: { marginBottom: e.spaces.space12 }, disclaimer: { marginTop: e.spaces.space12 }, createdAtText: { marginTop: e.spaces.space12 } }));
        },
        267272: (e, t, a) => {
            a.d(t, { Z: () => g });
            var s = a(202784),
                r = a(731708),
                o = a(392237),
                n = a(674132),
                l = a.n(n),
                i = a(572929),
                c = a(339838),
                m = a(265687),
                p = a(396184),
                d = a(17341);
            const u = l().d228a9a0,
                h = l().c174e46e,
                y = 3;
            function g({ cardAttachment: e, isAnimated: t }) {
                const { table: a } = e.visuals,
                    o = s.useMemo(() => (0, d.$c)(a), [a]),
                    n = s.useMemo(() => o.headers.map((e, t) => s.createElement(r.ZP, { style: f.headerText, weight: "bold" }, (0, d.vw)(e))), [o.headers]),
                    l = s.useMemo(() => {
                        const e = o.headers.findIndex((e) => "DATE" === e.toUpperCase()),
                            t = o.headers.findIndex((e) => "SEASON" === e.toUpperCase());
                        let a = o.rows;
                        return (
                            e >= 0
                                ? (a = o.rows.sort((t, a) => {
                                      const s = new Date(t[e]),
                                          r = new Date(a[e]);
                                      return s && r ? r.getTime() - s.getTime() : 0;
                                  }))
                                : t >= 0 &&
                                  (a = o.rows.sort((e, a) => {
                                      const s = e[t],
                                          r = a[t];
                                      return s < r ? 1 : s > r ? -1 : 0;
                                  })),
                            a.map((e, t) => e.map((e, t) => s.createElement(r.ZP, { numberOfLines: 1, style: f.rowText }, "" === e ? "-" : e)))
                        );
                    }, [o]);
                return s.createElement(i.Z, { isAnimated: t }, s.createElement(m.Z, { colStyle: f.tableCol, defaultRowRangeToShow: [0, y], fixedColIdx: 0, headers: n, rowStyle: f.tableRow, rows: l, seeLessLabel: h, seeMoreLabel: u, style: f.table }), s.createElement(c.Z, { style: f.createdAtText, text: e.sport === p.dv.FC ? p.ce : void 0, timestamp: e.created_at }));
            }
            const f = o.default.create((e) => ({ headerText: { fontSize: e.fontSizes.subtext2 }, rowText: { fontSize: e.fontSizes.subtext2 }, table: {}, tableCol: {}, tableRow: { paddingHorizontal: e.spaces.space8 }, disclaimer: { marginTop: e.spaces.space12 }, createdAtText: { marginTop: e.spaces.space12 } }));
        },
        761434: (e, t, a) => {
            a.d(t, { Z: () => b });
            a(136728);
            var s = a(202784),
                r = a(325686),
                o = a(731708),
                n = a(392237),
                l = a(988290),
                i = a(572929),
                c = a(339838),
                m = a(106646),
                p = a(415079),
                d = a(610948),
                u = a(534564),
                h = a(396184),
                y = a(17341);
            var g = a(687612);
            function f({ completedMatches: e, inProgressMatches: t, onSendPrompt: a, scheduledMatches: r, sport: o, teamBio: n }) {
                const l = s.useMemo(() => {
                    if (t.length > 0) return { match: t[0] };
                    let a = null;
                    if (e.length > 0) {
                        const t = e[0];
                        if (((a = { match: t }), t.dateLabel === h.xt)) return a;
                    }
                    if (r.length > 0) {
                        return { match: r[0], isUpcomingMatch: !0 };
                    }
                    return a;
                }, [t, e, r]);
                return l ? s.createElement(g.Z, { awayTeamBio: l.match.awayTeam.bio, awayTeamScore: l.match.awayTeam.score, dateLabel: l.match.dateLabel, homeTeamBio: l.match.homeTeam.bio, homeTeamScore: l.match.homeTeam.score, inProgressGameInfo: l.match.inProgressGameInfo, isUpcomingMatch: !!l.isUpcomingMatch, onSendPrompt: a, sport: o, timeLabel: l.match.timeLabel || "" }) : null;
            }
            function b({ cardAttachment: e, isAnimated: t, onSendPrompt: a }) {
                const { isCompactLayout: n } = (0, l.ZP)(),
                    [g, b] = s.useState(h.x1.OVERVIEW.id),
                    { team: v } = e.visuals,
                    w = (0, y.lV)(e.sport, v.bio.name),
                    {
                        completedMatches: x,
                        inProgressMatches: S,
                        scheduledMatches: E,
                    } = (function (e, t) {
                        const a = s.useCallback(
                                (a, s) => {
                                    const r = new Date(),
                                        o = [];
                                    return (
                                        a.forEach((a) => {
                                            const [n, l, i, c] = a,
                                                m = (0, y.lV)(e.sport, h.Mv[i] || i),
                                                { awayTeamBio: p, homeTeamBio: d } = (0, y.ay)(e.sport, l, t, m),
                                                u = t.name === d.name;
                                            if (!s) {
                                                const { otherTeamScore: e, teamScore: t } = (0, y.a5)(c);
                                                return o.push({ dateLabel: (0, y.q$)(n), homeTeam: { bio: d, score: u ? t : e }, awayTeam: { bio: p, score: u ? e : t } });
                                            }
                                            {
                                                const e = (0, y.Ov)(n, c);
                                                if (e.getTime() < r.getTime()) return;
                                                o.push({ dateLabel: (0, y.e4)(e), timeLabel: (0, y.mr)(e), homeTeam: { bio: d }, awayTeam: { bio: p } });
                                            }
                                        }),
                                        o
                                    );
                                },
                                [e.sport, t],
                            ),
                            r = s.useMemo(
                                () =>
                                    e.visuals.team.scores.map((e) => {
                                        const { headers: t, rows: s } = (0, y.$c)(e.table);
                                        return { scope: e.scope, headers: t, rows: a(s, !1) };
                                    }),
                                [e.visuals.team.scores, a],
                            );
                        return {
                            completedMatches: s.useMemo(() => r.find((e) => "Regular Season" === e.scope)?.rows.slice(0, h.dg) || [], [r]),
                            scheduledMatches: s.useMemo(() => {
                                const { rows: t } = (0, y.$c)(e.visuals.team.schedule.table);
                                return a(t, !0).slice(0, h.MN);
                            }, [e.visuals.team.schedule, a]),
                            inProgressMatches: s.useMemo(() => {
                                const t = e.visuals.team.schedule2.teams,
                                    a = {};
                                t.forEach((e) => {
                                    a[e.teamId] = e;
                                });
                                const s = e.visuals.team.schedule2.games.filter((e) => "inProgress" === e.type),
                                    r = [];
                                return (
                                    s.forEach((t) => {
                                        if (!t.homeTeam || !t.awayTeam) return;
                                        const s = t.homeTeam,
                                            o = t.awayTeam,
                                            n = (0, y.lV)(e.sport, a[s.teamId].name),
                                            l = (0, y.lV)(e.sport, a[o.teamId].name);
                                        r.push({ dateLabel: "", homeTeam: { bio: n, score: s.score }, awayTeam: { bio: l, score: o.score }, inProgressGameInfo: { gameStatus: t.gameStatus, state: t.state }, networkName: t.networkName });
                                    }),
                                    r
                                );
                            }, [e.visuals.team.schedule2, e.sport]),
                        };
                    })(e, w),
                    P = s.useMemo(() => (0, y.qs)(e.sport, v.standings.scope, v.standings.table, n), [v.standings, e.sport, n]),
                    k = s.useMemo(() => {
                        const e = [];
                        return (x.length || S.length || E.length) && e.push(h.x1.OVERVIEW), (x.length || E.length) && e.push(h.x1.MATCHES), P.rows.length && e.push(h.x1.STANDINGS), e;
                    }, [x, S, E, P]);
                return s.createElement(i.Z, { isAnimated: t }, s.createElement(r.Z, { style: [T.headerContainer, n ? T.compactHeaderContainer : void 0] }, s.createElement(u.Z, { leagueName: w.league, standingsWithMetadata: P, teamBio: w }), s.createElement(d.Z, { onTabClick: (e) => b(e), selectedTabId: g, sport: e.sport, tabs: k })), g === h.x1.OVERVIEW.id && s.createElement(f, { completedMatches: x, inProgressMatches: S, onSendPrompt: a, scheduledMatches: E, sport: e.sport, teamBio: w }), g === h.x1.MATCHES.id && s.createElement(r.Z, { style: T.allMatchesContainer }, E.length > 0 && s.createElement(r.Z, null, s.createElement(o.ZP, { style: [T.matchesHeader, n ? T.compactMatchesHeader : void 0], weight: "bold" }, h.ke), s.createElement(m.Z, { defaultNumMatchesToShow: 3, matches: E, matchesType: "scheduled", onSendPrompt: a, searchedTeamName: w.name, sport: e.sport })), x.length > 0 && s.createElement(r.Z, null, s.createElement(o.ZP, { style: [T.matchesHeader, n ? T.compactMatchesHeader : void 0], weight: "bold" }, h.UK), s.createElement(m.Z, { defaultNumMatchesToShow: 1, matches: x, matchesType: "completed", onSendPrompt: a, searchedTeamName: w.name, sport: e.sport }))), g === h.x1.STANDINGS.id && s.createElement(p.Z, { onSendPrompt: a, sport: e.sport, standingsWithMetadata: P, teamBio: w }), s.createElement(c.Z, { style: T.createdAtText, text: e.sport === h.dv.FC ? h.ce : void 0, timestamp: e.created_at }));
            }
            const T = n.default.create((e) => ({ headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: e.spaces.space16 }, compactHeaderContainer: { alignItems: "start", marginBottom: e.spaces.space12 }, allMatchesContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, compactAllMatchesConatainer: { gap: e.spaces.space12 }, matchesHeader: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700, marginBottom: e.spaces.space16 }, compactMatchesHeader: { fontSize: e.fontSizes.subtext3 }, createdAtText: { marginTop: e.spaces.space16 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-0d8ef87b.b7221d0a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Grok~loader.Markdown-78667c23"],
    {
        103714: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                o = a(466792),
                r = a(731708);
            function s({ children: e, numberOfLines: t, onClick: a, style: s, weight: c }) {
                return n.createElement(o.Z, { onPressIn: a }, ({ isHovered: a }) => n.createElement(r.ZP, { numberOfLines: t, style: [s, a ? i.hovered : void 0], weight: c }, e));
            }
            const i = a(392237).default.create((e) => ({ hovered: { textDecorationLine: "underline", cursor: "pointer" } }));
        },
        687612: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                s = a(992942),
                i = a(392237),
                c = a(988290),
                l = a(103714),
                m = a(396184),
                d = a(17341);
            function p({ awayTeamBio: e, awayTeamRecord: t, awayTeamScore: a, dateLabel: s, homeTeamBio: i, homeTeamRecord: l, homeTeamScore: p, inProgressGameInfo: b, isUpcomingMatch: f, networkName: y, onSendPrompt: w, sport: C, timeLabel: x }) {
                const { isCompactLayout: E } = (0, c.ZP)(),
                    S = m.x8[C];
                let T = null;
                if (f) T = n.createElement(n.Fragment, null, n.createElement(r.ZP, { style: u.date, weight: "bold" }, s), n.createElement(r.ZP, { style: u.date, weight: "bold" }, x));
                else if (b) {
                    const e = (0, d.P$)(b.state, C);
                    T = n.createElement(n.Fragment, null, "" !== e ? n.createElement(r.ZP, { style: [u.date, u.statusLabel], weight: "bold" }, e) : n.createElement(n.Fragment, null, "halftime" === b.gameStatus?.toLowerCase().trim() && n.createElement(r.ZP, { style: u.date, weight: "bold" }, m.K_), "break" === b.gameStatus?.toLowerCase().trim() && n.createElement(r.ZP, { style: u.date, weight: "bold" }, m.UH)), n.createElement(r.ZP, { style: u.date, weight: "bold" }, m.S1), y && n.createElement(r.ZP, { style: u.date, weight: "bold" }, y));
                } else T = n.createElement(n.Fragment, null, n.createElement(r.ZP, { style: u.date, weight: "bold" }, (0, d.u5)(C)), n.createElement(r.ZP, { style: u.date, weight: "bold" }, s));
                return n.createElement(
                    o.Z,
                    { style: u.container },
                    n.createElement(
                        o.Z,
                        { style: [u.matchContainer, S ? void 0 : u.awayTeamFirstMatchContainer] },
                        n.createElement(g, {
                            onClick: () => {
                                w && w(i.name);
                            },
                            sport: C,
                            team: i,
                        }),
                        void 0 !== p && n.createElement(h, { record: l, score: p, sport: C }),
                        n.createElement(o.Z, { style: [u.dateContainer, E ? u.compactDateContainer : void 0] }, T),
                        void 0 !== a && n.createElement(h, { record: t, score: a, sport: C }),
                        n.createElement(g, {
                            onClick: () => {
                                w && w(e.name);
                            },
                            sport: C,
                            team: e,
                        }),
                    ),
                );
            }
            function g({ onClick: e, sport: t, team: a }) {
                const { isCompactLayout: r } = (0, c.ZP)();
                return n.createElement(o.Z, { style: u.teamContainer }, n.createElement(s.Z, { resizeMode: "contain", source: a.logo, style: [u.teamLogo, t === m.dv.NBA ? u.nbaTeamLogo : void 0, r ? u.compactTeamLogo : void 0] }), n.createElement(l.Z, { onClick: e, style: [u.teamName, r ? u.compactTeamName : void 0], weight: "bold" }, (r && a.nickname) || a.name));
            }
            function h({ record: e, score: t, sport: a }) {
                const { isCompactLayout: s } = (0, c.ZP)(),
                    i = { [m.dv.NBA]: !0 };
                return n.createElement(o.Z, { style: u.scoreContainer }, n.createElement(r.ZP, { style: [u.teamScore, s ? u.compactTeamScore : void 0], weight: "heavy" }, t), i[a] && e && n.createElement(r.ZP, { style: u.teamRecord }, `(${e})`));
            }
            const u = i.default.create((e) => ({ container: { width: "100%" }, matchContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", alignSelf: "center", flex: 1 }, awayTeamFirstMatchContainer: { flexDirection: "row-reverse" }, teamContainer: { display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }, teamLogo: { width: e.spaces.space56, height: e.spaces.space56 }, nbaTeamLogo: { ...m.Oi }, compactTeamLogo: { width: e.spaces.space40, height: e.spaces.space40 }, teamName: { fontSize: e.fontSizes.subtext1, marginTop: e.spaces.space8, textAlign: "center" }, compactTeamName: { fontSize: e.fontSizes.subtext3 }, scoreContainer: { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flex: 1, gap: e.spaces.space8 }, teamScore: { fontSize: e.fontSizes.title1, textAlign: "center" }, teamRecord: { fontSize: e.fontSizes.subtext3, color: e.colors.gray700 }, compactTeamScore: { fontSize: e.fontSizes.title3 }, dateContainer: { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flex: 1, fontSize: e.fontSizes.subtext1, gap: e.spaces.space4 }, compactDateContainer: { fontSize: e.fontSizes.subtext3, lineHeight: e.lineHeights.subtext3 }, date: { fontSize: "inherit", lineHeight: "inherit" }, statusLabel: { color: e.colors.green500, textAlign: "center" } }));
        },
        618123: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(202784),
                o = a(731708),
                r = a(392237),
                s = a(111677),
                i = a.n(s),
                c = a(988290);
            const l = i().acae223d;
            function m({ prompt: e }) {
                const { isCompactLayout: t } = (0, c.ZP)();
                return e ? n.createElement(o.ZP, { style: [d.prompt, t && d.compactPrompt] }, l({ prompt: e })) : null;
            }
            const d = r.default.create((e) => ({ prompt: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, marginBottom: e.spaces.space12 }, compactPrompt: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 } }));
        },
        106646: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                o = a(325686),
                r = a(992942),
                s = a(731708),
                i = a(392237),
                c = a(111677),
                l = a.n(c),
                m = a(988290),
                d = a(584316),
                p = a(103714),
                g = a(396184),
                h = a(17341);
            const u = l().d228a9a0,
                b = l().c174e46e;
            function f({ defaultNumMatchesToShow: e, matches: t, matchesType: a, numIncrementalMatchesToShow: i = 5, onSendPrompt: c, searchedTeamName: l, seeLessLabel: f, seeMoreLabel: w, sport: C, style: x }) {
                const { isCompactLayout: E } = (0, m.ZP)(),
                    [S, T] = n.useState(e),
                    Z = e >= t.length,
                    L = S >= t.length,
                    v = n.useMemo(() => t.slice(0, S), [S, t]),
                    z = g.x8[C],
                    P = (e) =>
                        n.createElement(
                            o.Z,
                            { style: [y.teamContainer, E && y.compactTeamContainer] },
                            n.createElement(r.Z, { resizeMode: "contain", source: e.bio.logo, style: [y.teamLogo, C === g.dv.NBA ? y.nbaTeamLogo : void 0, E && y.compactTeamLogo] }),
                            n.createElement(
                                p.Z,
                                {
                                    onClick: () => {
                                        c && c(e.bio.name);
                                    },
                                    style: [y.teamNameAndScore, E && y.compactTeamNameAndScoreName],
                                    weight: "bold",
                                },
                                (E && e.bio.nickname) || e.bio.name,
                            ),
                        ),
                    k = (e, t, a) => n.createElement(o.Z, { style: y.scoreWithWinnerIndicator }, n.createElement(s.ZP, { style: [y.teamNameAndScore, y.score], weight: "bold" }, e), n.createElement(o.Z, { style: [y.triangle, e > t && !a && y.visibleTriangle] }));
                return n.createElement(
                    o.Z,
                    { style: x },
                    v.length > 0 &&
                        n.createElement(
                            o.Z,
                            { style: y.matchesContainer },
                            v.map((e, r) => {
                                const i = 0 === r,
                                    c = r === Math.min(t.length, S) - 1;
                                return n.createElement(
                                    o.Z,
                                    { key: `match-${r}`, style: [y.matchContainer, E ? y.compactMatchContainer : void 0, i ? y.firstMatch : void 0, c ? y.lastMatch : void 0] },
                                    n.createElement(o.Z, { style: y.teamsScoreContainer }, n.createElement(o.Z, { style: [y.teamsContainer, E ? y.compactTeamsContainer : void 0, z ? void 0 : y.awayTeamFirstTeamsContainer] }, P(e.homeTeam), P(e.awayTeam)), void 0 !== e.homeTeam.score && void 0 !== e.awayTeam.score && n.createElement(o.Z, { style: [y.teamsContainer, y.scoreContainer, E ? y.compactTeamsContainer : void 0, z ? void 0 : y.awayTeamFirstTeamsContainer] }, k(Number(e.homeTeam.score), Number(e.awayTeam.score), "inprogress" === a), k(Number(e.awayTeam.score), Number(e.homeTeam.score), "inprogress" === a))),
                                    n.createElement(o.Z, { style: y.divider }),
                                    n.createElement(
                                        o.Z,
                                        { style: [y.dateContainer, E ? y.compactDateContainer : void 0] },
                                        ((e) => {
                                            switch (a) {
                                                case "inprogress": {
                                                    const { gameStatus: t, state: a } = e.inProgressGameInfo || {},
                                                        o = (0, h.P$)(a, C);
                                                    return n.createElement(n.Fragment, null, o && n.createElement(s.ZP, { style: [y.date, y.statusLabel], weight: "bold" }, o), "halftime" === t?.toLowerCase().trim() && n.createElement(s.ZP, { style: y.date, weight: "bold" }, g.K_), "break" === t?.toLowerCase().trim() && n.createElement(s.ZP, { style: y.date, weight: "bold" }, g.UH), n.createElement(s.ZP, { style: y.date }, g.S1), e.networkName && n.createElement(s.ZP, { style: y.date }, e.networkName));
                                                }
                                                case "completed":
                                                    return n.createElement(n.Fragment, null, n.createElement(s.ZP, { style: y.date }, (0, h.u5)(C)), n.createElement(s.ZP, { style: y.date }, e.dateLabel));
                                                case "scheduled":
                                                    return n.createElement(n.Fragment, null, n.createElement(s.ZP, { style: y.date }, e.dateLabel), n.createElement(s.ZP, { style: y.date }, e.timeLabel));
                                                default:
                                                    return null;
                                            }
                                        })(e),
                                    ),
                                );
                            }),
                        ),
                    !Z && n.createElement(d.Z, { onClick: () => T(L ? e : Math.min(S + i, t.length)), seeLessLabel: f || b, seeMoreLabel: w || u, showingMore: L, style: y.seeMore }),
                );
            }
            const y = i.default.create((e) => ({
                matchesContainer: { display: "flex", flexDirection: "column" },
                matchContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space16, borderStyle: "solid", borderBottomWidth: 1, borderColor: e.colors.gray200 },
                compactMatchContainer: { paddingVertical: e.spaces.space8 },
                firstMatch: { paddingTop: 0 },
                lastMatch: { borderBottomWidth: 0, paddingBottom: 0 },
                teamsScoreContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 },
                teamsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space12 },
                compactTeamsContainer: { gap: e.spaces.space8 },
                awayTeamFirstTeamsContainer: { flexDirection: "column-reverse" },
                scoreContainer: { alignItems: "end" },
                teamContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 },
                compactTeamContainer: { gap: e.spaces.space8 },
                teamLogo: { width: e.spaces.space28, height: e.spaces.space28 },
                nbaTeamLogo: { ...g.Oi },
                compactTeamLogo: { width: e.spaces.space20, height: e.spaces.space20 },
                teamNameAndScore: { fontSize: e.fontSizes.subtext2 },
                compactTeamNameAndScoreName: { fontSize: e.fontSizes.subtext3 },
                score: { textAlign: "end" },
                divider: { height: "90%", width: e.spaces.space1, backgroundColor: e.colors.gray200 },
                dateContainer: { display: "flex", flexDirection: "column", alignItems: "end", gap: e.spaces.space8, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2, width: "17%", paddingStart: e.spaces.space8 },
                compactDateContainer: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, width: "20%" },
                date: { textAlign: "end", fontSize: "inherit", lineHeight: "inherit" },
                statusLabel: { color: e.colors.green500 },
                seeMore: { marginTop: e.spaces.space4 },
                scoreWithWinnerIndicator: { diplay: "flex", flexDirection: "row", alignItems: "center" },
                triangle: { opacity: 0, width: 0, height: 0, backgroundColor: "transparent", borderStyle: "solid", borderStartWidth: 4, borderEndWidth: 4, borderBottomWidth: 7, borderStartColor: "transparent", borderEndColor: "transparent", borderBottomColor: e.colors.brandColor, transform: "rotate(-90deg)", marginStart: e.spaces.space8, marginEnd: e.spaces.space2 },
                visibleTriangle: { opacity: 1 },
            }));
        },
        415079: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                s = a(992942),
                i = a(392237),
                c = a(111677),
                l = a.n(c),
                m = a(988290),
                d = a(265687),
                p = a(103714),
                g = a(396184);
            const h = l().d228a9a0,
                u = l().c174e46e,
                b = 0;
            function f({ onSendPrompt: e, sport: t, standingsWithMetadata: a, teamBio: i }) {
                const { isCompactLayout: c } = (0, m.ZP)(),
                    l = n.useMemo(
                        () =>
                            a.headers.map((e, a) => {
                                const o = g.id[t].columnsToHighlight.includes(e.toUpperCase());
                                return n.createElement(r.ZP, { style: [y.headerText, o ? void 0 : y.notHighlightedText], weight: "bold" }, e);
                            }),
                        [a.headers, t],
                    ),
                    f = n.useMemo(
                        () =>
                            a.rows.map((i, l) => {
                                const m = a.teamBios[l];
                                return i.map((i, l) => {
                                    const d = g.id[t].columnsToHighlight.includes(a.headers[l].toUpperCase());
                                    return n.createElement(
                                        o.Z,
                                        { style: y.rowElementContainer },
                                        l === b && n.createElement(n.Fragment, null, a.ranks[m.name] && n.createElement(r.ZP, { style: [y.rowElementText, y.teamRank] }, a.ranks[m.name]), n.createElement(s.Z, { resizeMode: "contain", source: m?.logo, style: [y.teamLogo, t === g.dv.NBA ? y.nbaTeamLogo : void 0, c ? y.compactTeamLogo : void 0] })),
                                        l === b && e
                                            ? n.createElement(
                                                  p.Z,
                                                  {
                                                      numberOfLines: 1,
                                                      onClick: () => {
                                                          e(m.name);
                                                      },
                                                      style: [y.rowElementText, d ? void 0 : y.notHighlightedText],
                                                      weight: "bold",
                                                  },
                                                  "" === i ? "-" : i,
                                              )
                                            : n.createElement(r.ZP, { numberOfLines: 1, style: [y.rowElementText, d ? void 0 : y.notHighlightedText], weight: "bold" }, "" === i ? "-" : i),
                                    );
                                });
                            }),
                        [a.rows, a.ranks, t, c, a.teamBios, a.headers, e],
                    );
                let w;
                if (t === g.dv.MLB || t === g.dv.NFL) w = [0, a.rows.length];
                else if (i) {
                    const e = 1,
                        t = a.rows.findIndex((e, t) => {
                            const n = a.teamBios[t];
                            return i.name === n.name;
                        });
                    w = [Math.max(0, t - e), Math.min(f.length, t + e + 1)];
                }
                return n.createElement(o.Z, null, n.createElement(d.Z, { colStyle: y.tableCol, defaultRowRangeToShow: w, fixedColIdx: b, headers: l, numIncrementalRowsToShow: f.length, rows: f, seeLessLabel: u, seeMoreLabel: h, style: y.standingsTable }));
            }
            const y = i.default.create((e) => ({ standingsTable: {}, headerText: { fontSize: e.fontSizes.subtext2 }, rowElementContainer: { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden" }, rowElementText: { fontSize: e.fontSizes.subtext2 }, teamRank: { width: e.spaces.space20, marginEnd: e.spaces.space8 }, teamLogo: { marginEnd: e.spaces.space8, width: e.spaces.space28, height: e.spaces.space28 }, nbaTeamLogo: { ...g.Oi }, compactTeamLogo: { width: e.spaces.space20, height: e.spaces.space20 }, tableCol: { flex: 1 }, notHighlightedText: { opacity: 0.5 } }));
        },
        610948: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(325686),
                r = a(466792),
                s = a(731708),
                i = a(392237),
                c = a(111677),
                l = a.n(c),
                m = a(988290),
                d = a(396184);
            function p({ onTabClick: e, selectedTabId: t, sport: a, style: i, tabs: c }) {
                const { isCompactLayout: p } = (0, m.ZP)(),
                    h = { [d.dv.FC]: { [d.x1.MATCHES.id]: l().i7e3e446 } };
                return n.createElement(
                    o.Z,
                    { style: [g.tabContainer, i] },
                    c.map((o) => {
                        const i = o.id === t;
                        let c = o.label;
                        return h[a] && h[a][o.id] && (c = h[a][o.id]), n.createElement(r.Z, { key: o.id }, ({ isHovered: t }) => n.createElement(s.ZP, { onClick: () => e(o.id), style: [g.tabLabel, p ? g.compactTabLabel : void 0, t ? g.hovered : void 0, i ? g.selectedTabLabel : void 0] }, c));
                    }),
                );
            }
            const g = i.default.create((e) => ({ tabContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, tabLabel: { fontSize: e.fontSizes.subtext2, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "background-color 0.1s ease", backgroundColor: "transparent" }, compactTabLabel: { fontSize: e.fontSizes.subtext3 }, hovered: { backgroundColor: e.colors.gray100, cursor: "pointer" }, selectedTabLabel: { backgroundColor: e.colors.gray100 } }));
        },
        534564: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                s = a(392237),
                i = a(988290),
                c = a(17341);
            function l({ leagueName: e, singleLine: t, standingsWithMetadata: a, style: s, teamBio: l }) {
                const { isCompactLayout: d } = (0, i.ZP)(),
                    p = d && !t;
                let g = "";
                if (a) {
                    const e = a.ranks[l.name];
                    e && (g = `${e}${(0, c.qD)(e)}`);
                }
                return n.createElement(o.Z, { style: [m.teamHeaderContainer, p ? m.compactTeamHeaderContainer : void 0, s] }, n.createElement(r.ZP, { style: m.teamName, weight: "bold" }, (p && l.nickname) || l.name), "" !== g && n.createElement(n.Fragment, null, !p && n.createElement(o.Z, { style: m.dot }), "" !== g && "" !== e && n.createElement(r.ZP, { numberOfLines: 1, style: m.teamStanding }, `${g} in ${e}`)));
            }
            const m = s.default.create((e) => ({ teamHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, fontSize: e.fontSizes.subtext2, flex: 1 }, compactTeamHeaderContainer: { flexDirection: "column", alignItems: "start", fontSize: e.fontSizes.subtext3, lineHeight: e.lineHeights.subtext3, gap: e.spaces.space4 }, teamName: { fontSize: "inherit", lineHeight: "inherit" }, dot: { width: 2, height: 2, borderRadius: 2, backgroundColor: e.colors.gray700 }, teamStanding: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit", flex: 1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Grok~loader.Markdown-78667c23.6d889b3a.js.map

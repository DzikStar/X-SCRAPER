"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"],
    {
        586548: (e, t, n) => {
            n.d(t, { Z: () => Re });
            var a = n(807896),
                r = n(202784),
                i = n(187669),
                s = n(456977),
                o = n(33842),
                l = n(459405),
                c = n(325686),
                d = n(731708),
                m = n(154003),
                u = n(392237),
                p = n(332920),
                h = n.n(p),
                g = n(316464),
                f = n(16497);
            n(901951), n(136728);
            const x = (e, t) => {
                    if (!t && !e.winner) return "gray";
                    const n = !(e.winner !== e.userPick || (1 === e.winner && e.team1?.name !== e.userTeam1?.name) || (2 === e.winner && e.team2?.name !== e.userTeam2?.name));
                    let a;
                    return (a = t ? (e.userPick ? "blue" : "gray") : e.userPick ? (n ? "green" : "red") : "gray"), a;
                },
                y = (e) => {
                    switch (e) {
                        case "gray":
                        default:
                            return u.default.theme.colors.gray200;
                        case "green":
                            return u.default.theme.colors.green500;
                        case "red":
                            return u.default.theme.colors.red500;
                        case "blue":
                            return u.default.theme.colors.blue500;
                    }
                },
                b = ({ colorType: e = "gray", endX: t, endY: n, startX: a, startY: i, strokeWidth: o = s.IO, style: l }) => {
                    const d = y(e),
                        m = i + o / 2,
                        p = n + o / 2,
                        h = Math.abs(p - m),
                        g = h + o,
                        f = Math.abs(t - a),
                        x = m > p ? -1 : 1,
                        b = a > t ? -1 : 1,
                        C = Math.min(h, f, 2 * o),
                        E = Math.floor((a + t) / 2),
                        w = m + C * x,
                        v = E + C * b,
                        k = [`M ${a},${m}`, `L ${E - C * b},${m}`, `C ${E},${m},${E},${w},${E},${w}`, `L ${E},${p - C * x}`, `C ${E},${p},${v},${p},${v},${p}`, `L ${t},${p}`],
                        I = `forwardGradient-${e}`;
                    return r.createElement(c.Z, { style: l }, r.createElement("svg", { height: g, style: { transition: `height ${s.B5}ms ease` }, width: f, xmlns: "http://www.w3.org/2000/svg" }, r.createElement("linearGradient", { id: I }, r.createElement("stop", { offset: "0%", stopColor: u.default.theme.colors.cellBackground }), r.createElement("stop", { offset: "30%", stopColor: d }), r.createElement("stop", { offset: "70%", stopColor: d }), r.createElement("stop", { offset: "100%", stopColor: u.default.theme.colors.cellBackground })), r.createElement("path", { d: k.join(" "), fill: "none", stroke: `url(#${I})`, strokeWidth: o, style: { transition: `d ${s.B5}ms ease` } })));
                };
            var C = n(992942),
                E = n(319889);
            const w = h().b7c6bc12,
                v = ({ editable: e, match: t, matchIndex: n, onSelectWinner: a, roundIndex: i, style: s, viewUserPicks: o }) => {
                    const m = (0, l.wh)(),
                        p = e && t.userTeam1 && t.userTeam2,
                        g = r.useCallback(() => {
                            p && a(i, n, 1);
                        }, [n, a, i, p]),
                        f = r.useCallback(() => {
                            p && a(i, n, 2);
                        }, [n, a, i, p]),
                        x = r.useMemo(() => ({ cursor: "pointer" }), []),
                        y = !o && (0, l.Jh)(e, t),
                        b = { top: `-${u.default.theme.spaces.space32}`, height: u.default.theme.spaces.space56 },
                        v = { winner: e || o ? t.userPick : t.winner, team1: e || o ? t.userTeam1 : t.team1, team2: e || o ? t.userTeam2 : t.team2, team1Score: e || o ? void 0 : t.team1Score, team2Score: e || o ? void 0 : t.team2Score };
                    return r.createElement(
                        c.Z,
                        { style: [k.container, s] },
                        r.createElement(c.Z, { style: [k.userPicksOverheadDisplayContainer, y && b] }, r.createElement(c.Z, { style: k.userPicksOverheadDisplayInfoContainer }, r.createElement(h().I18NFormatMessage, { $i18n: "b74b73ad" }, r.createElement(d.ZP, { color: "text", size: "subtext3" }, h().c373612c), r.createElement(C.Z, { source: t?.userPick && 1 === t?.userPick ? t.userTeam1?.icon : t.userTeam2?.icon, style: k.logoImageSmall }), r.createElement(d.ZP, { color: "text", size: "subtext3", weight: "bold" }, h().e8b3cab9({ winner: t?.userPick && 1 === t?.userPick ? t?.userTeam1?.abbreviation || "" : t?.userTeam2?.abbreviation || "" })), r.createElement(d.ZP, { color: "text", size: "subtext3" }, h().j5db9ddd), r.createElement(d.ZP, { color: "text", size: "subtext3", weight: "bold" }, h().a638617d({ loser: t?.userPick && 1 === t?.userPick ? t?.userTeam2?.abbreviation || "" : t?.userTeam1?.abbreviation || "" }))))),
                        r.createElement(c.Z, { onClick: g, style: [k.team, !m && k.teamDesktop, e && x] }, v.team1?.icon ? r.createElement(C.Z, { source: v.team1?.icon, style: k.logoImage }) : r.createElement(E.default, { style: [k.logoImage, k.tbdGray] }), r.createElement(d.ZP, { color: "gray700", size: "subtext3", style: k.flexShrink0 }, v.team1?.seed), r.createElement(d.ZP, { color: v.winner && 1 !== v.winner ? "gray700" : "text", numberOfLines: 1, size: "body", style: [k.teamNameStyles, !v.team1?.name && k.tbdGray], weight: "bold" }, v.team1?.name ?? w), r.createElement(c.Z, { style: k.rightContainer }, !e && v.team1Score ? r.createElement(d.ZP, null, v.team1Score) : null), v.winner && 1 === v.winner ? r.createElement(c.Z, { style: k.triangleLeft }, r.createElement("svg", { fill: u.default.theme.colors.text, style: k.svgTriangle, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, r.createElement("polygon", { points: "12,12 24,0 24,24 12,12", strokeWidth: "1" }))) : null),
                        r.createElement(c.Z, { onClick: f, style: [k.team, !m && k.teamDesktop, e && x] }, v.team2?.icon ? r.createElement(C.Z, { source: v.team2?.icon, style: k.logoImage }) : r.createElement(E.default, { style: [k.logoImage, k.tbdGray] }), r.createElement(d.ZP, { color: "gray700", size: "subtext3", style: k.flexShrink0 }, v.team2?.seed), r.createElement(d.ZP, { color: v.winner && 2 !== v.winner ? "gray700" : "text", numberOfLines: 1, size: "body", style: [k.teamNameStyles, !v.team2?.name && k.tbdGray], weight: "bold" }, v.team2?.name ?? w), r.createElement(c.Z, { style: k.rightContainer }, !e && v.team2Score ? r.createElement(d.ZP, null, v.team2Score) : null), v.winner && 2 === v.winner ? r.createElement(c.Z, { style: k.triangleLeft }, r.createElement("svg", { fill: u.default.theme.colors.text, style: k.svgTriangle, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, r.createElement("polygon", { points: "12,12 24,0 24,24 12,12", strokeWidth: "1" }))) : null),
                    );
                },
                k = u.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%", position: "relative" }, userPicksOverheadDisplayContainer: { position: "absolute", height: e.spaces.space40, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, top: 0, transition: `top ${s.B5}ms ease, height ${s.B5}ms ease`, width: "100%" }, userPicksOverheadDisplayInfoContainer: { height: e.spaces.space32, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: e.spaces.space8, gap: e.spaces.space4 }, team: { position: "relative", width: "100%", height: `${s.sk}px`, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0 }, teamDesktop: { gap: e.spaces.space4, paddingHorizontal: e.spaces.space8 }, topTeamContainer: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, logoImage: { width: e.spaces.space24, height: e.spaces.space24 }, logoImageSmall: { width: e.spaces.space16, height: e.spaces.space16 }, rightContainer: { flexShrink: 0, marginStart: "auto" }, radioButton: { borderRadius: e.borderRadii.infinite, borderWidth: e.borderWidths.small, borderColor: e.colors.gray700, width: `calc(${e.spaces.space16} + ${e.spaces.space2})`, height: `calc(${e.spaces.space16} + ${e.spaces.space2})` }, checkmarkCircle: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.buttonBlack, width: "100%", height: "100%" }, iconCheckmark: { color: e.colors.buttonWhite }, teamNameStyles: { textOverflow: "clip" }, triangleLeft: { position: "absolute", end: 0, width: 12, height: 12 }, svgTriangle: { height: 12, width: 12 }, tbdGray: { color: e.colors.gray500 }, flexShrink0: { flexShrink: 0 } })),
                I = r.memo(v),
                Z = u.default.theme.spacesPx.space16,
                P = 3 * Z,
                S = [s.hF + Z, s.hF / 2 + Z - u.default.theme.spacesPx.space48, s.hF / 2 + Z - u.default.theme.spacesPx.space48, s.hF],
                $ = S.reduce((e, t) => e + t, 0),
                R = [s.hF + Z, s.hF + Z, s.hF + Z, s.hF],
                D = R.reduce((e, t) => e + t, 0),
                B = S.map((e, t) => ({ minWidth: e, maxWidth: R[t], flex: 1 })),
                M = ((e) => {
                    const t = [...e];
                    return t.unshift(t.pop()), t;
                })(B),
                U = (e, t, n) =>
                    e
                        .map((e, a) => {
                            const r = Math.floor(n / 2 / Math.pow(2, a)),
                                i = r * t,
                                { matchups: s, ...o } = e;
                            return { ...o, matchups: s.filter((e, t) => t >= i && t < i + r) };
                        })
                        .filter((e) => !!e.matchups.length),
                W = new Map(),
                z = (e) => {
                    const { divisionIndex: t, divisionRounds: n, editable: a, isFullyExpanded: r, matchIndex: i, mirroredDivisionRounds: o, roundIndex: c, viewUserPicks: d } = e,
                        m = [t, a, r, i, c, d].join("-");
                    if (W.has(m)) return W.get(m) || 0;
                    if (0 === c) {
                        const { matchups: t } = n[c],
                            { matchups: u } = n[c + 1],
                            { matchups: p } = o[c],
                            { matchups: h } = n[c + 1],
                            g = Math.trunc(i / 2),
                            f = !d && ((0, l.Jh)(a, t[i]) || (0, l.Jh)(a, p[i]) || (!r && (0, l.Jh)(a, u[g])) || (!r && (0, l.Jh)(a, h[g])));
                        let x = 0;
                        if (0 !== i) {
                            x += z({ ...e, matchIndex: i - 1 }) + s.hk + (f ? s.ZH : s.aR);
                        }
                        return W.set(m, x), x;
                    }
                    const u = (z({ ...e, matchIndex: 2 * i, roundIndex: c - 1 }) + z({ ...e, matchIndex: 2 * i + 1, roundIndex: c - 1 })) / 2;
                    return W.set(m, u), u;
                },
                H = (e) => ({ transform: `translateY(${z(e)}px)` }),
                T = ({ containerRef: e, divisionIndex: t, divisionSize: n, editable: a, mirrored: i, mirroredDivisionIndex: l, viewUserPicks: d }) => {
                    const { tournamentData: m, userSelectMatchWinner: u } = (0, o.cM)(),
                        p = r.useMemo(() => U(m.rounds, t, n), [t, n, m.rounds]),
                        h = r.useMemo(() => U(m.rounds, l, n), [l, n, m.rounds]),
                        g = r.useCallback(
                            (e, t, n) => {
                                u(e, t, n);
                            },
                            [u],
                        ),
                        f = (e.current?.clientWidth ?? 0) === D;
                    if (0 === p.length) return null;
                    const y = p.length,
                        C = { height: `${z({ divisionIndex: t, matchIndex: p?.[0]?.matchups?.length, roundIndex: 0, editable: a, isFullyExpanded: f, divisionRounds: p, mirroredDivisionRounds: h, viewUserPicks: d })}px` },
                        E = i ? { flexDirection: "row-reverse" } : null;
                    return r.createElement(
                        c.Z,
                        { style: [F.container, C, E] },
                        p.map((e, n) => {
                            const { matchups: o } = e,
                                l = t * e?.matchups?.length,
                                m = [],
                                u = [];
                            if (1 === o.length) m.push(o[0]);
                            else if (o.length > 1) for (let e = 0; e < o.length; e += 2) o[e] && o[e + 1] && u.push([o[e], o[e + 1]]);
                            const C = i ? M[n] : B[n];
                            return r.createElement(
                                c.Z,
                                { key: n, style: [F.roundContainer, C] },
                                m.map((e) => {
                                    const i = H({ divisionIndex: t, matchIndex: 0, roundIndex: y - 1, editable: a, isFullyExpanded: f, divisionRounds: p, mirroredDivisionRounds: h, viewUserPicks: d });
                                    return r.createElement(c.Z, { key: 0, style: F.matchPairContainer }, r.createElement(I, { editable: a, match: e, matchIndex: t, onSelectWinner: g, roundIndex: n, style: [F.matchCard, i], viewUserPicks: d }));
                                }),
                                u.map(([e, o], m, u) => {
                                    const y = { divisionIndex: t, matchIndex: 2 * m, roundIndex: n, editable: a, isFullyExpanded: f, divisionRounds: p, mirroredDivisionRounds: h, viewUserPicks: d },
                                        C = { ...y, matchIndex: 2 * m + 1 },
                                        E = H(y),
                                        w = H(C),
                                        v = ((e) => {
                                            const t = z(e);
                                            return z({ ...e, roundSize: e.divisionRounds.length / 2, roundIndex: e.roundIndex + 1, matchIndex: Math.floor(e.matchIndex / 2) }) - t - (s.sk + s.F4) / 2;
                                        })(y),
                                        k = { transform: `translateY(${z(y) + s.sk}px)` };
                                    const Z = ((e, t) => ({ transform: `translateY(${z(e) + s.sk - t}px)` }))(C, v),
                                        S = P,
                                        $ = F.lineConnectorMirrored,
                                        R = x(e, a),
                                        D = x(o, a),
                                        B = { colorType: R, endX: i ? 0 : S, endY: v, startX: i ? S : 0, startY: 0, strokeWidth: s.F4, style: [i ? $ : F.lineConnector, k] },
                                        M = { colorType: D, endX: i ? 0 : S, endY: 0, startX: i ? S : 0, startY: v, strokeWidth: s.F4, style: [i ? $ : F.lineConnector, Z] };
                                    return r.createElement(c.Z, { key: m, style: F.matchPairContainer }, r.createElement(b, B), r.createElement(b, M), r.createElement(I, { editable: a, match: e, matchIndex: 2 * m + l, onSelectWinner: g, roundIndex: n, style: [F.matchCard, E], viewUserPicks: d }), r.createElement(I, { editable: a, match: o, matchIndex: 2 * m + 1 + l, onSelectWinner: g, roundIndex: n, style: [F.matchCard, w], viewUserPicks: d }));
                                }),
                            );
                        }),
                    );
                },
                F = u.default.create((e) => ({ container: { display: "flex", flexDirection: "row", width: "100%", pointerEvents: "none", transition: `height ${s.B5}ms ease` }, roundContainer: { display: "flex", flexDirection: "column", width: `${s.hF + Z}px` }, matchCardsContainer: { display: "flex", flexDirection: "column", gap: `${s.F4}px` }, matchPairContainer: { pointerEvents: "all", position: "absolute", height: 0, width: s.hF, display: "flex", flexDirection: "column", gap: `${s.F4}px` }, matchCard: { zIndex: 1, position: "absolute", width: s.hF, gap: `${s.F4}px`, transition: `transform ${s.B5}ms ease` }, lineConnector: { position: "absolute", start: s.hF - Z, transition: `transform ${s.B5}ms ease` }, lineConnectorMirrored: { position: "absolute", start: `-${P - Z}px`, transition: `transform ${s.B5}ms ease` }, lineConnectorMirroredWithShiftRight: { position: "absolute", start: `-${P - 2 * Z}px` } })),
                Y = h().e1059d6c,
                X = h().b1602be4,
                O = h().a6d2520c,
                j = h().d8bf2890,
                N = h().f9d3d6f2,
                J = h().fcb16026,
                L = h().ef7bc2c0,
                q = h().h726aaf2,
                A = h().ee7cd198,
                G = h().fed91402,
                V = h().aba0a450,
                _ = h().jdfba2dc,
                K = ({ date: e, name: t }) => r.createElement(c.Z, { style: ee.round }, r.createElement(d.ZP, null, t), r.createElement(d.ZP, { style: ee.date }, e)),
                Q = () => {
                    const e = [
                            { name: Y, date: L },
                            { name: X, date: q },
                            { name: O, date: A },
                            { name: j, date: G },
                        ],
                        t = [
                            { name: N, date: V },
                            { name: J, date: _ },
                            { name: N, date: V },
                        ];
                    return r.createElement(
                        c.Z,
                        { style: ee.container },
                        r.createElement(
                            c.Z,
                            { style: ee.earlyRoundsContainer },
                            e.map((e) => r.createElement(K, e)),
                        ),
                        r.createElement(
                            c.Z,
                            { style: ee.finalRoundsContainer },
                            t.map((e) => r.createElement(K, e)),
                        ),
                        r.createElement(
                            c.Z,
                            { style: ee.earlyRoundsContainer },
                            e.reverse().map((e) => r.createElement(K, e)),
                        ),
                    );
                },
                ee = u.default.create((e) => ({ container: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", border: `1px solid ${e.colors.gray200}`, marginBottom: e.spaces.space24, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space8, borderRadius: e.spaces.space12 }, earlyRoundsContainer: { display: "flex", flexDirection: "row", flexBasis: $, maxWidth: D, flex: 1.2, justifyContent: "space-around" }, finalRoundsContainer: { display: "flex", flexDirection: "row", flexBasis: 300, minWidth: 300, maxWidth: s.xi, flex: 1, justifyContent: "space-around" }, round: { textAlign: "center" }, date: { fontSize: e.fontSizes.subtext2, color: e.colors.gray400 } })),
                te = u.default.theme.spacesPx.space80 + u.default.theme.spacesPx.space32,
                ne = ({ editable: e, viewUserPicks: t }) => {
                    const { tournamentData: n, userSelectMatchWinner: a } = (0, o.cM)(),
                        i = n?.rounds?.[n.rounds.length - 2],
                        m = n?.rounds?.[n.rounds.length - 1],
                        u = i?.matchups?.[0],
                        p = i?.matchups?.[1],
                        h = m?.matchups?.[0],
                        g = r.useCallback(
                            (e, t, n) => {
                                a(e, t, n);
                            },
                            [a],
                        );
                    if (!u || !p || !h) return null;
                    const f = x(u, e),
                        y = x(p, e);
                    return r.createElement(
                        c.Z,
                        { style: ae.container },
                        r.createElement(c.Z, null, r.createElement(c.Z, { style: ae.titleContainer }, r.createElement(d.ZP, { color: "text", size: "headline1", style: !e && ae.expandedRoundTitle, weight: "bold" }, s.eI.finalFour.toUpperCase()), i.startDateIsoString ? r.createElement(d.ZP, { color: "gray700", size: "body" }, (0, l.EW)(i.startDateIsoString, i.endDateIsoString)) : null), r.createElement(c.Z, { style: ae.matchCardContainer }, r.createElement(I, { editable: e, match: u, matchIndex: 0, onSelectWinner: g, roundIndex: n.rounds.length - 2, style: ae.matchCard, viewUserPicks: t }), r.createElement(b, { colorType: f, endX: 0, endY: s.sk / 2, startX: te, startY: 0, strokeWidth: s.F4, style: ae.lineConnectorLeft }))),
                        r.createElement(c.Z, null, r.createElement(c.Z, { style: ae.titleContainer }, r.createElement(d.ZP, { color: "text", size: "headline1", style: !e && ae.expandedRoundTitle, weight: "bold" }, s.eI.championshipShort.toUpperCase()), m.startDateIsoString ? r.createElement(d.ZP, { color: "gray700", size: "body" }, (0, l.EW)(m.startDateIsoString, m.endDateIsoString)) : null), r.createElement(c.Z, { style: ae.matchCardContainer }, r.createElement(I, { editable: e, match: h, matchIndex: 0, onSelectWinner: g, roundIndex: n.rounds.length - 1, style: ae.matchCard, viewUserPicks: t }), r.createElement(b, { colorType: y, endX: 0, endY: s.sk / 2, startX: te, startY: 0, strokeWidth: s.F4, style: ae.lineConnectorRight }))),
                        r.createElement(c.Z, null, r.createElement(c.Z, { style: ae.titleContainer }, r.createElement(d.ZP, { color: "text", size: "headline1", style: !e && ae.expandedRoundTitle, weight: "bold" }, s.eI.finalFour.toUpperCase()), i.startDateIsoString ? r.createElement(d.ZP, { color: "gray700", size: "body" }, (0, l.EW)(i.startDateIsoString, i.endDateIsoString)) : null), r.createElement(c.Z, { style: ae.matchCardContainer }, r.createElement(I, { editable: e, match: p, matchIndex: 1, onSelectWinner: g, roundIndex: n.rounds.length - 2, style: ae.matchCard, viewUserPicks: t }))),
                    );
                },
                ae = u.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space64, alignItems: "center", justifyContent: "center" }, matchCard: { zIndex: 1, width: s.hF, transition: `transform ${s.B5}ms ease`, gap: `${s.F4}px` }, matchCardContainer: { position: "relative", zIndex: 1 }, lineConnectorLeft: { zIndex: 0, position: "absolute", start: s.hF - u.default.theme.spacesPx.space24 + "px", top: s.sk / 2 + "px" }, lineConnectorRight: { zIndex: 0, position: "absolute", top: `${s.sk}px`, start: s.hF - u.default.theme.spacesPx.space24 + "px" }, titleContainer: { width: s.hF, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: e.spaces.space16, gap: e.spaces.space4 }, expandedRoundTitle: { height: s.RC } })),
                re = h().i899e9b0,
                ie = h().c5b04394,
                se = h().h836bbae,
                oe = ({ name: e, style: t }) => r.createElement(c.Z, { style: t }, r.createElement(d.ZP, { size: "headline2", style: ce.divisionHeaderText, weight: "bold" }, e)),
                le = ({ children: e, onClickBackground: t, style: n }) => r.createElement(c.Z, { onClick: t, style: ce.modalBackground }, r.createElement(c.Z, { style: [ce.modal, n] }, e)),
                ce = u.default.create((e) => ({
                    container: { width: "100%", height: "100%", display: "flex", flexDirection: "row", overflow: "auto" },
                    mainColumn: { flex: 1, flexBasis: 1e3, height: "fit-content" },
                    headerSpacer: { display: "flex", height: `${s.cM}px` },
                    overflowHidden: { overflow: "hidden" },
                    roundTitlesContainer: { display: "flex", flexDirection: "row", paddingStart: e.spaces.space8, paddingEnd: e.spaces.space16, gap: e.spaces.space12 },
                    roundTitlesContainerReverse: { flexDirection: "row-reverse" },
                    titleContainer: { width: 0.6 * s.hF, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: e.spaces.space16, gap: e.spaces.space4 },
                    divisionRowContainer: { display: "flex", flexDirection: "row", width: "100%" },
                    divisionContainer: { flexBasis: $, maxWidth: D, flex: 1.2 },
                    spacer: { flexBasis: e.spaces.space16, flex: 1 },
                    sideSpacer: { flex: 0.3, maxWidth: e.spaces.space32 },
                    championshipContainer: { alignItems: "center", justifyContent: "center" },
                    divisionHeaderText: { marginVertical: e.spaces.space4 },
                    divisionHeader: { marginBottom: e.spaces.space8 },
                    divisionHeaderExpanded: { height: s.RC },
                    alignEnd: { alignItems: "end", paddingHorizontal: e.spaces.space16 },
                    modalBackground: { position: "fixed", zIndex: e.componentZIndices.appBarZIndex + 1, width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.translucentBlack30 },
                    modal: { padding: e.spaces.space16, zIndex: e.componentZIndices.appBarZIndex + 2, minWidth: 400 * e.scaleMultiplier, minHeight: 200 * e.scaleMultiplier, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.cellBackground },
                    cardViewerModal: { height: 600 * e.scaleMultiplier, width: 500 * e.scaleMultiplier, backgroundColor: e.colors.transparent },
                    submitButtonSpacing: { marginBottom: e.spaces.space64 },
                    submitButtonContainer: { width: "100%", height: e.spaces.space64, position: "fixed", bottom: 0, backgroundColor: e.colors.cellBackground, display: "flex", alignItems: "center", justifyContent: "center" },
                    submitButton: { width: 200 * e.scaleMultiplier },
                    viewUserPicksButtonContainer: { width: "100%", height: e.spaces.space80, pointerEvents: "none", position: "fixed", bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" },
                    viewUserPicksButton: { height: e.spaces.space56, maxWidth: 320 * e.scaleMultiplier, width: `calc(100% - ${e.spaces.space64})`, pointerEvents: "all", marginBottom: e.spaces.space16 },
                })),
                de = ({ props: e }) => {
                    const { bracketIsFilledOut: t, tournamentData: n } = (0, o.cM)(),
                        a = e.bool("editable") ?? !1,
                        i = e.bool("cardsMode") ?? !1,
                        d = e.bool("viewUserPicks") ?? !1,
                        u = e.action("submitAction"),
                        p = r.useRef(null),
                        h = r.useRef(null),
                        x = r.useRef(null),
                        y = r.useRef(null),
                        b = r.useCallback(() => {
                            const t = new Map(),
                                a = (0, l.Py)(n);
                            t.set("stateJson", JSON.stringify(a)), e.set("data", [17, t]), u?.();
                        }, [u, e, n]),
                        C = r.useCallback(() => {
                            e.set("viewUserPicks", [6, !d]);
                        }, [e, d]);
                    return r.createElement(
                        c.Z,
                        { style: ce.container },
                        r.createElement(c.Z, { style: ce.sideSpacer }),
                        r.createElement(
                            c.Z,
                            { style: [ce.mainColumn, i && ce.overflowHidden, a && t && ce.submitButtonSpacing] },
                            r.createElement(c.Z, { style: ce.headerSpacer }),
                            i ? r.createElement(le, { style: ce.cardViewerModal }, r.createElement(f.x, { props: e })) : null,
                            r.createElement(Q, null),
                            r.createElement(c.Z, { style: ce.divisionRowContainer }, r.createElement(c.Z, { ref: p, style: ce.divisionContainer }, r.createElement(oe, { name: n?.divisions?.[0]?.toUpperCase() ?? s.qu.east.toUpperCase(), style: [ce.divisionHeader, !a && ce.divisionHeaderExpanded] }), r.createElement(T, { containerRef: p, divisionIndex: 0, divisionSize: 16, editable: a, mirrored: !1, mirroredDivisionIndex: 2, viewUserPicks: d })), r.createElement(c.Z, { style: ce.spacer }), r.createElement(c.Z, { ref: h, style: ce.divisionContainer }, r.createElement(oe, { name: n?.divisions?.[2]?.toUpperCase() ?? s.qu.south.toUpperCase(), style: [ce.divisionHeader, ce.alignEnd, !a && ce.divisionHeaderExpanded] }), r.createElement(T, { containerRef: h, divisionIndex: 2, divisionSize: 16, editable: a, mirrored: !0, mirroredDivisionIndex: 0, viewUserPicks: d }))),
                            r.createElement(c.Z, { style: ce.championshipContainer }, r.createElement(ne, { editable: a, viewUserPicks: d })),
                            r.createElement(c.Z, { style: ce.divisionRowContainer }, r.createElement(c.Z, { ref: x, style: ce.divisionContainer }, r.createElement(oe, { name: n?.divisions?.[1]?.toUpperCase() ?? s.qu.west.toUpperCase(), style: [ce.divisionHeader, !a && ce.divisionHeaderExpanded] }), r.createElement(T, { containerRef: x, divisionIndex: 1, divisionSize: 16, editable: a, mirrored: !1, mirroredDivisionIndex: 3, viewUserPicks: d })), r.createElement(c.Z, { style: ce.spacer }), r.createElement(c.Z, { ref: y, style: ce.divisionContainer }, r.createElement(oe, { name: n?.divisions?.[3]?.toUpperCase() ?? s.qu.midwest.toUpperCase(), style: [ce.divisionHeader, ce.alignEnd, !a && ce.divisionHeaderExpanded] }), r.createElement(T, { containerRef: y, divisionIndex: 3, divisionSize: 16, editable: a, mirrored: !0, mirroredDivisionIndex: 1, viewUserPicks: d }))),
                        ),
                        r.createElement(c.Z, { style: ce.sideSpacer }),
                        a ? null : r.createElement(c.Z, { style: ce.viewUserPicksButtonContainer }, r.createElement(m.ZP, { backgroundColor: "orange500", borderColor: "orange700", color: "whiteOnColor", icon: r.createElement(g.default, { size: 24 }), onClick: C, style: ce.viewUserPicksButton }, d ? se : ie)),
                        a && t ? r.createElement(c.Z, { style: ce.submitButtonContainer }, r.createElement(m.ZP, { onClick: b, style: ce.submitButton, type: "primaryFilled" }, re)) : null,
                    );
                };
            var me = n(878052),
                ue = n(393058),
                pe = n(837880);
            const he = new Map(),
                ge = (e) => {
                    const { editable: t, focusedRoundIndex: n, matchIndex: a, numDivisions: r, roundIndex: i, rounds: o, viewUserPicks: c } = e,
                        d = [n, a, r, i, c].join("-");
                    if (he.has(d)) return he.get(d) || 0;
                    const m = o.length - 3,
                        u = Math.min(m, n);
                    let p;
                    if (i === u) {
                        const { matchups: n } = o[i],
                            r = n.length,
                            d = !c && (0, l.Jh)(t, n[a]);
                        if (((p = d ? s.ZH : s.aR), 0 !== a)) {
                            p += ge({ ...e, matchIndex: a - 1 }) + s.ed;
                        }
                        const m = d ? s.AH : s.RC;
                        a % (r / 4) == 0 && (p += m);
                    } else if (i > u) {
                        p = (ge({ ...e, matchIndex: 2 * a, roundIndex: i - 1 }) + ge({ ...e, matchIndex: 2 * a + 1, roundIndex: i - 1 })) / 2;
                    } else p = ge({ ...e, matchIndex: Math.trunc(a / 2), roundIndex: i + 1 });
                    return he.set(d, p), p;
                },
                fe = (e) => ({ transform: `translateY(${ge(e)}px)` }),
                xe = ({ matchIndex: e, numDivisions: t, numMatches: n }) => {
                    if (t) {
                        const a = Math.floor(n / t);
                        if (e % a == 0) return Math.floor(e / a);
                    }
                },
                ye = r.forwardRef(({ editable: e, name: t }, n) => r.createElement(c.Z, { ref: n, style: [Ce.divisionHeaderContainer, !e && Ce.divisionHeaderContainerWithSpaceBelow] }, r.createElement(d.ZP, { size: "headline2", style: Ce.divisionHeaderText, weight: "bold" }, t))),
                be = r.forwardRef(({ divisionNames: e, editable: t, focusedRoundIndex: n, roundIndex: a, style: i, viewUserPicks: m }, p) => {
                    const {
                            tournamentData: { rounds: h },
                            userSelectMatchWinner: g,
                        } = (0, o.cM)(),
                        f = h.length,
                        y = h[a],
                        { matchups: C } = y,
                        E = r.useMemo(() => {
                            const e = [];
                            return a === f - 1 && 1 === C.length && e.push(C[0]), e;
                        }, [C, a, f]),
                        w = r.useMemo(() => {
                            const e = [];
                            for (let t = 0; t < C.length; t += 2) C[t] && C[t + 1] && e.push([C[t], C[t + 1]]);
                            return e;
                        }, [C]),
                        v = r.useMemo(() => [r.createElement(ye, { editable: t, name: e?.[0]?.toUpperCase() ?? s.qu.east.toUpperCase() }), r.createElement(ye, { editable: t, name: e?.[1]?.toUpperCase() ?? s.qu.west.toUpperCase() }), r.createElement(ye, { editable: t, name: e?.[2]?.toUpperCase() ?? s.qu.south.toUpperCase() }), r.createElement(ye, { editable: t, name: e?.[3]?.toUpperCase() ?? s.qu.midwest.toUpperCase() })], [e, t]),
                        k = r.useCallback(
                            (e, t, n) => {
                                g(e, t, n);
                            },
                            [g],
                        ),
                        Z = n === a,
                        P = { editable: t, focusedRoundIndex: n, rounds: h, roundIndex: a, numDivisions: v.length, viewUserPicks: m },
                        S = ge({ ...P, matchIndex: y.matchups.length - 1 }) + (s.ed + s.ZH) + 3 * u.default.theme.spacesPx.space64,
                        $ = { transition: `height ${s.B5}ms ease`, height: `${S}px` },
                        R = (D = { ...P, matchIndex: 0 }).roundIndex < D.rounds.length - 2 ? {} : { transform: `translateY(${ge(D) - u.default.theme.spacesPx.space48}px)` };
                    var D;
                    return r.createElement(
                        c.Z,
                        { ref: p, style: [Ce.container, $, i] },
                        r.createElement(c.Z, { style: [Ce.titleContainer, R] }, r.createElement(d.ZP, { color: "text", size: "headline1", weight: "bold" }, y.name.toUpperCase()), y.startDateIsoString ? r.createElement(d.ZP, { color: "gray700", size: "body" }, (0, l.EW)(y.startDateIsoString, y.endDateIsoString)) : null),
                        r.createElement(
                            c.Z,
                            { style: Ce.matchCardsContainer },
                            E.map((e, i) => {
                                const s = fe({ editable: t, focusedRoundIndex: n, matchIndex: 0, rounds: h, roundIndex: a, numDivisions: v.length, viewUserPicks: m });
                                return r.createElement(
                                    c.Z,
                                    { key: i, style: Ce.matchPairContainer },
                                    v.map((e, t) => r.createElement(c.Z, { key: t, style: [Ce.divisionHeader, Ce.opacityNone] }, e)),
                                    r.createElement(c.Z, { style: [Ce.matchCard, s] }, r.createElement(I, { editable: t, match: e, matchIndex: 0, onSelectWinner: k, roundIndex: a, viewUserPicks: m })),
                                );
                            }),
                            w.map(([e, i], o, l) => {
                                const d = { editable: t, focusedRoundIndex: n, matchIndex: 2 * o, rounds: h, roundIndex: a, numDivisions: v.length, viewUserPicks: m },
                                    p = { ...d, matchIndex: 2 * o + 1 },
                                    g = fe(d),
                                    y = fe(p),
                                    C = l.length <= 1,
                                    E = C ? void 0 : xe({ numDivisions: v.length, numMatches: 2 * l.length, matchIndex: 2 * o }),
                                    w = "number" == typeof E ? (v?.[E] ?? null) : null,
                                    P = { top: `-${s.RC}px` },
                                    S = C ? void 0 : xe({ numDivisions: v.length, numMatches: 2 * l.length, matchIndex: 2 * o + 1 }),
                                    $ = "number" == typeof S ? (v?.[S] ?? null) : null,
                                    R = { top: `-${s.RC}px` },
                                    D = ((e) => {
                                        const t = ge(e);
                                        return ge({ ...e, roundIndex: e.roundIndex + 1, matchIndex: Math.floor(e.matchIndex / 2) }) - t - (s.sk + s.IO) / 2;
                                    })(d),
                                    B = ((e) => ({ transform: `translateY(${ge(e) + s.sk}px)` }))(d),
                                    M = ((e, t) => ({ transform: `translateY(${ge(e) + s.sk - t}px)` }))(p, D),
                                    U = u.default.theme.scaleMultiplier * (0.5 * s.bg),
                                    W = n > a && a < f - 3,
                                    z = x(e, t),
                                    H = x(i, t);
                                return r.createElement(r.Fragment, { key: o }, C && v.map((e, t) => r.createElement(c.Z, { key: t, style: [Ce.divisionHeader, Ce.opacityNone] }, e)), r.createElement(c.Z, { style: Ce.matchPairContainer }, r.createElement(b, { colorType: z, endX: U, endY: D, startX: 0, startY: 0, style: [Ce.lineConnector, B, W && Ce.opacityNone] }), r.createElement(b, { colorType: H, endX: U, endY: 0, startX: 0, startY: D, style: [Ce.lineConnector, M, W && Ce.opacityNone] }), w ? r.createElement(c.Z, { style: [Ce.divisionHeader, g, P, !Z && Ce.opacityNone] }, w) : null, r.createElement(c.Z, { style: [Ce.matchCard, g] }, r.createElement(I, { editable: t, match: e, matchIndex: 2 * o, onSelectWinner: k, roundIndex: a, viewUserPicks: m })), $ ? r.createElement(c.Z, { style: [Ce.divisionHeader, y, R, !Z && Ce.opacityNone] }, $) : null, r.createElement(c.Z, { style: [Ce.matchCard, y] }, r.createElement(I, { editable: t, match: i, matchIndex: 2 * o + 1, onSelectWinner: k, roundIndex: a, viewUserPicks: m }))));
                            }),
                        ),
                    );
                }),
                Ce = u.default.create((e) => ({ container: { flex: 1, display: "flex", flexDirection: "column" }, titleContainer: { width: e.scaleMultiplier * (0.766 * s.bg), display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: e.spaces.space16, gap: e.spaces.space4 }, matchCardsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, matchPairContainer: { position: "absolute", height: 0, width: e.scaleMultiplier * (0.766 * s.bg), display: "flex", flexDirection: "column", gap: u.default.theme.scaleMultiplier * s.IO + "px" }, matchCard: { zIndex: 1, position: "absolute", width: e.scaleMultiplier * (0.766 * s.bg), transition: `transform ${s.B5}ms ease` }, divisionHeaderContainerWithSpaceBelow: { height: s.RC }, divisionHeaderContainer: { height: s.AH }, divisionHeader: { position: "absolute", transition: `transform ${s.B5}ms ease, opacity ${s.B5}ms ease`, height: `${s.RC}px`, maxHeight: `${s.RC}px`, opacity: 1, alignItems: "center", justifyContent: "center" }, divisionHeaderText: { marginVertical: e.spaces.space4 }, opacityNone: { opacity: 0 }, opacity20Percent: { opacity: 0.2 }, lineConnector: { position: "absolute", opacity: 1, start: e.scaleMultiplier * (0.66 * s.bg), transition: `transform ${s.B5}ms ease, opacity ${s.B5}ms ease` } })),
                Ee = r.memo(be),
                we = h().i899e9b0,
                ve = h().c5b04394,
                ke = h().h836bbae,
                Ie = ue.Z.isTouchSupported(),
                Ze = Ie ? 0 : u.default.theme.spacesPx.space48,
                Pe = u.default.create((e) => ({ container: { width: "100%", height: "100%", scrollbarWidth: "none", msOverflowStyle: "none" }, headerSpacer: { display: "flex", height: `${s.cM}px` }, leftHeaderSection: { width: e.spaces.space64, justifyContent: "center", alignItems: "center" }, rightHeaderSection: { width: e.spaces.space64, justifyContent: "center", alignItems: "center" }, headerTitleSection: { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: e.spaces.space8 }, cardViewerContainer: { height: `calc(100% - ${s.cM}px)` }, bracketContainer: { height: `calc(100% - ${Ze}px)`, overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none", msOverflowStyle: "none" }, bracketYScrollingContainer: { overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none" }, bracketXScrollingContainer: { display: "flex", flexDirection: "row", marginHorizontal: e.spaces.space8 }, tabStrip: { width: `calc(100% - ${e.spaces.space16})`, height: `${Ze}px`, overflow: "auto", display: "flex", flexDirection: "row", gap: e.spaces.space16, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", marginHorizontal: e.spaces.space8 }, tournamentRound: { width: e.scaleMultiplier * s.bg, minWidth: e.scaleMultiplier * s.bg }, icon24: { width: e.spaces.space24, height: e.spaces.space24 }, submitButtonContainer: { width: "100%", height: e.spaces.space64, position: "fixed", bottom: 0, backgroundColor: e.colors.cellBackground, display: "flex", alignItems: "center", justifyContent: "center" }, submitButton: { width: `calc(100% - ${e.spaces.space32})` }, viewUserPicksButtonContainer: { width: "100%", height: e.spaces.space80, pointerEvents: "none", position: "fixed", bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }, viewUserPicksButton: { height: e.spaces.space56, width: `calc(100% - ${e.spaces.space64})`, pointerEvents: "all", marginBottom: e.spaces.space16 } })),
                Se = ({ props: e }) => {
                    const t = me.Z.get("screen").width,
                        n = e.bool("editable") ?? !1,
                        a = e.bool("cardsMode") ?? !1,
                        i = e.bool("viewUserPicks") ?? !1,
                        d = e.action("submitAction"),
                        { bracketIsFilledOut: p, tournamentData: h } = (0, o.cM)(),
                        [x, y] = r.useState(0),
                        b = r.useRef(null),
                        C = r.useRef([]),
                        E = r.useRef([]),
                        [w, v] = r.useMemo(() => {
                            const e = [],
                                t = [];
                            for (let n = 0; n < h.rounds.length; n++)
                                e.push((e) => {
                                    E.current[n] = e;
                                }),
                                    t.push((e) => {
                                        C.current[n] = e;
                                    });
                            return [e, t];
                        }, [h.rounds.length]),
                        k = r.useRef(null),
                        I = r.useRef(null),
                        Z = r.useRef(null),
                        [P, S] = r.useState(0),
                        $ = r.useCallback(() => {
                            const e = Date.now(),
                                n = Z.current?.clientX || 0,
                                a = e - (k.current || 0),
                                r = n - (I.current?.clientX || n),
                                i = Math.abs(r) > t / 8,
                                s = Math.abs(r) > t / 3,
                                o = a <= 300 && i;
                            (k.current = null), (I.current = null), (Z.current = null), S(0), (o || s) && y(r > 0 ? (e) => (0, pe.Z)(e - 1, 0, h.rounds.length - 1) : (e) => (0, pe.Z)(e + 1, 0, h.rounds.length - 1));
                        }, [t, h.rounds.length]),
                        R = r.useCallback((e) => {
                            if (k.current) {
                                const t = I.current?.clientX || 0,
                                    n = e.touches[0].clientX || 0;
                                (Z.current = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), S(t - n);
                            }
                        }, []),
                        D = r.useCallback((e) => {
                            k.current || ((k.current = Date.now()), (I.current = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), (Z.current = { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }));
                        }, []),
                        B = r.useMemo(() => {
                            const e = u.default.theme.scaleMultiplier * s.bg,
                                t = (h.rounds.length - 1) * e - 0.25 * e;
                            return { transform: `translateX(-${(0, pe.Z)(x * e, 0, t) + P}px)` };
                        }, [x, P, h.rounds.length]),
                        M = I.current ? {} : { transition: `transform ${s.B5}ms ease` },
                        U = r.useCallback(() => {
                            const t = new Map(),
                                n = (0, l.Py)(h);
                            t.set("stateJson", JSON.stringify(n)), e.set("data", [17, t]), d?.();
                        }, [d, e, h]),
                        W = r.useCallback(() => {
                            e.set("viewUserPicks", [6, !i]);
                        }, [e, i]);
                    return r.createElement(
                        c.Z,
                        { style: Pe.container },
                        r.createElement(c.Z, { style: Pe.headerSpacer }),
                        a ? r.createElement(c.Z, { style: Pe.cardViewerContainer }, r.createElement(f.x, { props: e })) : null,
                        Ie || a
                            ? null
                            : r.createElement(
                                  c.Z,
                                  { ref: b, style: Pe.tabStrip },
                                  s.P4.map((e, t) => {
                                      const n = x === t;
                                      return r.createElement(
                                          c.Z,
                                          { key: t, ref: v[t] },
                                          r.createElement(
                                              m.ZP,
                                              {
                                                  key: t,
                                                  onClick: () => {
                                                      let e = 0;
                                                      for (let n = 0; n < t; n++) e += 16 + (C?.current?.[n]?.getBoundingClientRect()?.width || 0);
                                                      const n = e - 160 * u.default.theme.scaleMultiplier;
                                                      b.current?.scrollTo({ top: 0, left: n, behavior: "smooth" }), y(t);
                                                  },
                                                  type: n ? "primaryFilled" : "primaryOutlined",
                                              },
                                              e,
                                          ),
                                      );
                                  }),
                              ),
                        a
                            ? null
                            : r.createElement(
                                  c.Z,
                                  { onTouchEnd: $, onTouchMove: R, onTouchStart: D, style: Pe.bracketContainer },
                                  r.createElement(
                                      c.Z,
                                      { style: Pe.bracketYScrollingContainer },
                                      r.createElement(
                                          c.Z,
                                          { style: [Pe.bracketXScrollingContainer, M, B] },
                                          h.rounds.map((e, t) => r.createElement(Ee, { divisionNames: h?.divisions, editable: n, focusedRoundIndex: x, key: t, ref: w[t], roundIndex: t, style: Pe.tournamentRound, viewUserPicks: i })),
                                      ),
                                  ),
                              ),
                        n ? null : r.createElement(c.Z, { style: Pe.viewUserPicksButtonContainer }, r.createElement(m.ZP, { backgroundColor: "orange500", borderColor: "orange700", color: "whiteOnColor", icon: r.createElement(g.default, { size: 24 }), onClick: W, style: Pe.viewUserPicksButton }, i ? ke : ve)),
                        n && p ? r.createElement(c.Z, { style: Pe.submitButtonContainer }, r.createElement(m.ZP, { onClick: U, style: Pe.submitButton, type: "primaryFilled" }, we)) : null,
                    );
                },
                $e = ({ props: e, ...t }) => {
                    const n = (0, l.wh)(),
                        { initializeTournamentData: c } = (0, o.cM)(),
                        d = (e.strDict("data") ?? {}).stateJson ?? s.JJ,
                        m = e.bool("supportsCache") ?? !1;
                    return (
                        (0, i.q)(() => {
                            c(JSON.parse(d), m);
                        }),
                        r.useEffect(
                            () => (
                                document.scrollingElement?.style && ((document.scrollingElement.style.msOverflowStyle = "none"), (document.scrollingElement.style.scrollbarWidth = "none")),
                                () => {
                                    document.scrollingElement?.style && ((document.scrollingElement.style.msOverflowStyle = "initial"), (document.scrollingElement.style.scrollbarWidth = "initial"));
                                }
                            ),
                            [],
                        ),
                        n ? r.createElement(Se, (0, a.Z)({ props: e }, t)) : r.createElement(de, (0, a.Z)({ props: e }, t))
                    );
                },
                Re = ({ ...e }) => r.createElement(o._l, { totalTeams: 64 }, r.createElement($e, e));
        },
        701333: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(214997);
            const i = ({ children: e, props: t, style: n }) => a.createElement(r.Z, { style: n }, e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de.5299dfda.js.map

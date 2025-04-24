"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"],
    {
        675299: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                s = a(466999),
                n = a(392237);
            const o = 0,
                c = 1,
                i = 2,
                u = 3,
                l = (e) => {
                    switch (e) {
                        case c:
                            return "head";
                        case i:
                            return "middle";
                        case u:
                            return "tail";
                        default:
                            return "clip";
                    }
                },
                d = n.default.create((e) => ({ text: { color: e.colors.text, textOverflow: "ellipsis" } })),
                m = ({ props: e, style: t }) => {
                    const a = e.str("t") ?? "",
                        n = e.enum("truncate") ?? o,
                        c = e.int("numberOfLines") ?? 1;
                    return r.createElement(s.Z, { ellipsizeMode: l(n), numberOfLines: c, style: [d.text, t] }, a);
                };
        },
        923513: (e, t, a) => {
            a.d(t, { Z: () => S });
            var r = a(202784),
                s = a(731708);
            const n = 0,
                o = 1,
                c = 2,
                i = 3,
                u = 5,
                l = 6,
                d = 7,
                m = 8,
                h = 9,
                p = 10,
                f = 11,
                g = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                b = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                x = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                T = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" }),
                w = ({ format: e, style: t, time: a }) => {
                    const [n, o] = r.useState(Date.now());
                    r.useEffect(() => {
                        const e = setInterval(() => {
                            o(Date.now());
                        }, 1e3);
                        return () => clearInterval(e);
                    }, []);
                    const c = a.getTime() - n;
                    if (c <= 0) return r.createElement(s.ZP, { style: t }, "0");
                    const i = Math.floor(c / 1e3),
                        g = Math.floor(i / 60),
                        b = Math.floor(g / 60),
                        x = Math.floor(b / 24),
                        T = Math.floor(x / 30),
                        w = Math.floor(x / 365);
                    let S = "";
                    switch (e) {
                        case u:
                            S = "" + (i % 60);
                            break;
                        case l:
                            S = "" + (g % 60);
                            break;
                        case d:
                            S = "" + (b % 24);
                            break;
                        case m:
                            S = "" + (x % 30);
                            break;
                        case h:
                            S = "" + (T % 12);
                            break;
                        case p:
                            S = `${w}`;
                            break;
                        case f:
                            S = `${w > 0 ? `${w}` : ""}${x % 365 > 0 ? "" + (x % 365) : ""}${b % 24 > 0 ? "" + (b % 24) : ""}${g % 60 > 0 ? "" + (g % 60) : ""}${i % 60}`;
                            break;
                        default:
                            S = "" + (i % 60);
                    }
                    return r.createElement(s.ZP, { style: t }, S);
                },
                S = ({ props: e, style: t }) => {
                    const a = e.date("time") ?? new Date(),
                        S = e.enum("format") ?? c,
                        k = (Date.now() - a.getTime()) / 1e3;
                    if (S === u || S === l || S === d || S === m || S === h || S === p || S === f) return r.createElement(w, { format: S, style: t, time: a });
                    const v = (() => {
                        switch (S) {
                            case c:
                                return g.format(a);
                            case o:
                                return b.format(a);
                            case i:
                                return x.format(a);
                            case n:
                                return k < 120 ? "1m" : k < 3600 ? `${Math.floor(k / 60)}m` : k < 86400 ? `${Math.floor(k / 3600)}h` : k < 259200 ? `${Math.floor(k / 3600 / 24)}d` : a.getFullYear() === new Date().getFullYear() ? T.format(a) : g.format(a);
                            default:
                                return "";
                        }
                    })();
                    return r.createElement(s.ZP, { style: t }, v);
                };
        },
        685536: (e, t, a) => {
            a.d(t, { Z: () => n });
            a(202784);
            var r = a(516951),
                s = a(690282);
            const n = ({ children: e, props: t }) => {
                const a = t.f32("everySeconds") ?? 1,
                    n = t.action("action") ?? r.Z;
                return (0, s.Z)(n, 1e3 * a), e;
            };
        },
        692273: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                s = a(325686),
                n = a(530963);
            const o = ({ children: e, style: t }) => {
                const { toggle: a } = r.useContext(n.t);
                return r.createElement(s.Z, { onClick: a, style: t }, e);
            };
        },
        530963: (e, t, a) => {
            a.d(t, { Z: () => c, t: () => o });
            var r = a(202784),
                s = a(325686),
                n = a(738124);
            const o = r.createContext({ isOpen: !0, toggle: () => {} }),
                c = ({ children: e, props: t, style: a }) => {
                    const c = t.element("closed"),
                        i = c ? r.createElement(n.Z, { payload: c }) : null,
                        u = t.bool("initial") ?? !0,
                        l = t.bool("targetOnly") ?? !1,
                        [d, m] = r.useState(u),
                        h = r.useCallback(() => {
                            m((e) => !e);
                        }, []),
                        p = r.useCallback(() => {
                            l || m((e) => !e);
                        }, [l]),
                        f = r.useMemo(() => ({ isOpen: d, toggle: h }), [d, h]);
                    return r.createElement(o.Provider, { value: f }, r.createElement(s.Z, { onClick: p, style: a }, d ? e : i));
                };
        },
        16497: (e, t, a) => {
            a.d(t, { x: () => f });
            var r = a(202784),
                s = a(325686),
                n = a(392237),
                o = a(187669),
                c = a(878052),
                i = a(736230),
                u = a(996223),
                l = a(456977),
                d = a(33842);
            const m = `transform ${l.B5}ms ease, opacity ${l.B5}ms ease`,
                h = ({ index: e, initialAnimationState: t = "FadingIn", isTopCard: a, match: o, numCardsVisible: h }) => {
                    const [f, g] = r.useState(t),
                        { userSelectMatchWinner: b } = (0, d.cM)(),
                        { height: x } = c.Z.get("screen"),
                        T = r.useCallback(
                            (...e) => {
                                const t = e[1],
                                    r = e[2];
                                if (!a || o.id !== t) return;
                                const s = e[0],
                                    n = o.userTeam1?.name === s ? 1 : 2,
                                    c = o.round,
                                    i = o.index;
                                if (void 0 !== c && void 0 !== i) {
                                    const e = () => {
                                        g("SlidingOut"),
                                            setTimeout(() => {
                                                b(c, i, n), g("TransitionOff");
                                            }, l.B5);
                                    };
                                    r
                                        ? setTimeout(() => {
                                              e();
                                          }, 1500)
                                        : e();
                                }
                            },
                            [a, o.id, o.index, o.round, o.userTeam1?.name, b],
                        ),
                        w = { zIndex: n.default.theme.componentZIndices.appBarZIndex + e };
                    switch (f) {
                        case "FadingIn":
                            (w.opacity = "0"),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * l.YV,
                                );
                            break;
                        case "SlidingIn":
                            (w.transform = `translateY(-${x}px)`),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * l.YV,
                                );
                            break;
                        case "SlidingOut":
                            w.transform = `translateY(${1.2 * x}px)`;
                            break;
                        case "TransitionOff":
                            (w.transition = ""),
                                (w.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`),
                                setTimeout(() => {
                                    g("Static");
                                }, 100);
                            break;
                        default:
                            (w.transition = m), (w.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`);
                    }
                    const S = r.useMemo(() => {
                        const e = new Map();
                        return e.set(i.bP.MARCH_MADNESS_PICK, T), e;
                    }, [T]);
                    return r.createElement(s.Z, { style: [p.cardContainer, w] }, r.createElement(u.J, { path: `/brackets/card?team1Name=${o.userTeam1?.name || ""}&team2Name=${o.userTeam2?.name || ""}&matchupId=${o?.id || ""}`, systemActionHandlers: S }));
                },
                p = n.default.create((e) => ({ cardContainer: { opacity: 1, position: "absolute", width: `calc(100% - ${e.spaces.space16})`, boxShadow: "-5px -5px 10px black", borderRadius: e.borderRadii.large, transition: m } })),
                f = ({ props: e }) => {
                    const { bracketIsFilledOut: t, matchesRemainingToBeSelected: a } = (0, d.cM)(),
                        n = a.slice(0, 5),
                        [c, i] = r.useState(!0);
                    return (
                        (0, o.q)(() => {
                            setTimeout(
                                () => {
                                    i(!1);
                                },
                                l.B5 + l.YV * n.length,
                            );
                        }),
                        t && e.set("cardsMode", [6, !1]),
                        r.createElement(
                            s.Z,
                            { style: g.container },
                            r.createElement(
                                s.Z,
                                { style: g.allCardsContainer },
                                n.reverse().map((e, t, a) => r.createElement(h, { index: t, initialAnimationState: c ? "SlidingIn" : "FadingIn", isTopCard: t === a.length - 1, key: `${e?.round || 0}-${e?.index || 0}`, match: e, numCardsVisible: a.length })),
                            ),
                        )
                    );
                },
                g = n.default.create((e) => ({ container: { width: "100%", height: "100%" }, allCardsContainer: { position: "relative", width: "100%", height: "100%", padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }));
        },
        456977: (e, t, a) => {
            a.d(t, { AH: () => S, B5: () => c, F4: () => g, IO: () => f, JJ: () => p, P4: () => h, RC: () => k, YV: () => i, ZH: () => T, aR: () => w, bg: () => u, cM: () => l, eI: () => d, ed: () => b, hF: () => P, hk: () => x, qu: () => m, sk: () => v, xi: () => y });
            var r = a(878052),
                s = a(392237),
                n = a(674132),
                o = a.n(n);
            const c = 500,
                i = 150,
                u = Math.min(0.8 * r.Z.get("screen").width, 400 * s.default.theme.scaleMultiplier),
                l = s.default.theme.spacesPx.space64,
                d = { roundOf64: o().c5453f28, roundOf32: o().eb256a86, sweetSixteen: o().g77adc66, sweetSixteenShort: o().a6d2520c, eliteEight: o().g5b63eb6, eliteEightShort: o().d8bf2890, finalFour: o().f9d3d6f2, finalFourShort: o().bda24f7c, championship: o().i5043440, championshipShort: o().fcb16026 },
                m = { east: o().e9c89ee8, west: o().h259fd86, south: o().a7b2545a, midwest: o().fdf7819a },
                h = [d.roundOf64, d.roundOf32, d.sweetSixteen, d.eliteEight, d.finalFour, d.championship],
                p = JSON.stringify({ rounds: [] }),
                f = s.default.theme.spacesPx.space8,
                g = s.default.theme.spacesPx.space2 + s.default.theme.spacesPx.space1,
                b = s.default.theme.spacesPx.space80 + f,
                x = s.default.theme.spacesPx.space80 + g,
                T = s.default.theme.spacesPx.space64,
                w = s.default.theme.spacesPx.space32,
                S = s.default.theme.spacesPx.space32,
                k = s.default.theme.spacesPx.space64,
                v = s.default.theme.spacesPx.space40,
                P = 180 * s.default.theme.scaleMultiplier,
                y = 2 * s.default.theme.spacesPx.space64 + 3 * P;
        },
        33842: (e, t, a) => {
            a.d(t, { _l: () => u, cM: () => l });
            a(136728), a(571372);
            var r = a(202784),
                s = a(400752),
                n = a(465233),
                o = a(420182);
            const c = "rweb.userTournamentBracket",
                i = r.createContext({ teams: new Map(), initializeTournamentData: () => {}, tournamentData: { rounds: [] }, userSelectMatchWinner: () => {}, matchesRemainingToBeSelected: [], bracketIsFilledOut: !1 }),
                u = ({ children: e }) => {
                    const t = (0, s.Dv)(o.lZ),
                        [a, u] = r.useState({ rounds: [] }),
                        l = r.useCallback(
                            (e, a) => {
                                t.get(c).then((t) => {
                                    const r = a
                                        ? ((e, t) => {
                                              if (!t) return e;
                                              const a = (0, n.Z)(e);
                                              return (
                                                  t.rounds.forEach((e, t) => {
                                                      e.matchups.forEach((e, r) => {
                                                          a.rounds?.[t]?.matchups?.[r]?.id && a.rounds?.[t]?.matchups?.[r]?.id === e?.id && ((a.rounds[t].matchups[r].userTeam1 = e?.userTeam1), (a.rounds[t].matchups[r].userTeam2 = e?.userTeam2), (a.rounds[t].matchups[r].userPick = e?.userPick));
                                                      });
                                                  }),
                                                  a
                                              );
                                          })(e, t)
                                        : e;
                                    u(r);
                                });
                            },
                            [t],
                        ),
                        d = r.useCallback(
                            (e, a, r) => {
                                u((s) => {
                                    const o = (0, n.Z)(s);
                                    o.rounds[e].matchups[a].userPick = r;
                                    const i = o.rounds[e].matchups[a][`userTeam${r}`];
                                    if (e + 1 < s.rounds.length) {
                                        const t = a % 2 == 0,
                                            r = Math.floor(a / 2);
                                        t ? (o.rounds[e + 1].matchups[r].userTeam1 = i) : (o.rounds[e + 1].matchups[r].userTeam2 = i), (o.rounds[e + 1].matchups[r].userPick = void 0);
                                    }
                                    for (let t = e + 2; t < s.rounds.length; t++) {
                                        const r = t - e,
                                            s = Math.floor(a / Math.pow(2, r));
                                        Math.floor(a / Math.pow(2, r - 1)) % 2 == 0 ? ((o.rounds[t].matchups[s].userTeam1 = void 0), (o.rounds[t].matchups[s].userPick = void 0)) : ((o.rounds[t].matchups[s].userTeam2 = void 0), (o.rounds[t].matchups[s].userPick = void 0));
                                    }
                                    const u = ((e) => {
                                        const t = { rounds: [] };
                                        return (t.rounds = e.rounds.map((e) => ({ name: e.name, matchups: e.matchups.map((e) => ({ id: e.id, userTeam1: e.userTeam1, userTeam2: e.userTeam2, userPick: e.userPick })) }))), t;
                                    })(o);
                                    return t.set(c, u), o;
                                });
                            },
                            [t],
                        ),
                        m = [];
                    a.rounds.forEach((e) => {
                        e.matchups.forEach((e, t) => {
                            e.userTeam1 && e.userTeam2 && !e.userPick && m.push({ ...e, index: t });
                        });
                    });
                    const h = a.rounds.every((e) => e?.matchups.every((e) => !!e.userPick)),
                        p = { initializeTournamentData: l, tournamentData: a, userSelectMatchWinner: d, matchesRemainingToBeSelected: m, bracketIsFilledOut: h };
                    return r.createElement(i.Provider, { value: p }, e);
                };
            function l() {
                const e = r.useContext(i);
                if (void 0 === e) throw new Error("useTournamentBracketContext was used outside of its provider TournamentBracketContextProvider");
                return e;
            }
        },
        459405: (e, t, a) => {
            a.d(t, { EW: () => n, Jh: () => i, Py: () => o, wh: () => c });
            a(136728);
            var r = a(537392),
                s = a(323265);
            const n = (e, t) => {
                    const a = new Date(e),
                        r = a.toLocaleString("default", { month: "long" }),
                        s = a.getDate().toString();
                    let n, o, c;
                    t && ((n = new Date(t)), (o = n.toLocaleString("default", { month: "long" })), (c = n.getDate().toString()));
                    const i = `${r} ${s}`;
                    if (r === o && s === c) return i;
                    o === r && (o = void 0);
                    return `${i}${n ? ` - ${`${o ? `${o} ` : ""}${c || ""}`}` : ""}`;
                },
                o = (e) => {
                    const t = { rounds: [] };
                    return (
                        e.rounds.forEach((e) => {
                            const a = { ...e, matchups: [] };
                            e.matchups.forEach((e) => {
                                const { period: t, team1: r, team1Score: s, team2: n, team2Score: o, timeRemaining: c, winner: i, ...u } = e;
                                a.matchups.push({ ...u });
                            }, []),
                                t.rounds.push(a);
                        }),
                        t
                    );
                },
                c = () => {
                    const e = (0, r.Zx)(({ windowWidth: e }) => e < 1024);
                    return s.ZP.isMobileOS() || e;
                },
                i = (e, t) => !e && void 0 !== t?.userPick && void 0 !== t?.userTeam1 && void 0 !== t?.userTeam2 && (t.userPick !== t.winner || t.team1?.name !== t.userTeam1?.name || t.team2?.name !== t.userTeam2?.name);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e.01fbcd0a.js.map

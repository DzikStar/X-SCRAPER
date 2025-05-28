"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-5eee0d-153768ae"],
    {
        675299: (e, t, a) => {
            a.d(t, { Z: () => d });
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
                m = n.default.create((e) => ({ text: { color: e.colors.text, textOverflow: "ellipsis" } })),
                d = ({ props: e, style: t }) => {
                    const a = e.str("t") ?? "",
                        n = e.enum("truncate") ?? o,
                        c = e.int("numberOfLines") ?? 1;
                    return r.createElement(s.Z, { ellipsizeMode: l(n), numberOfLines: c, style: [m.text, t] }, a);
                };
        },
        923513: (e, t, a) => {
            a.d(t, { Z: () => w });
            var r = a(202784),
                s = a(731708);
            const n = 0,
                o = 1,
                c = 2,
                i = 3,
                u = 5,
                l = 6,
                m = 7,
                d = 8,
                h = 9,
                p = 10,
                f = 11,
                g = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                x = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                T = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                b = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" }),
                k = ({ format: e, style: t, time: a }) => {
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
                        x = Math.floor(g / 60),
                        T = Math.floor(x / 24),
                        b = Math.floor(T / 30),
                        k = Math.floor(T / 365);
                    let w = "";
                    switch (e) {
                        case u:
                            w = "" + (i % 60);
                            break;
                        case l:
                            w = "" + (g % 60);
                            break;
                        case m:
                            w = "" + (x % 24);
                            break;
                        case d:
                            w = "" + (T % 30);
                            break;
                        case h:
                            w = "" + (b % 12);
                            break;
                        case p:
                            w = `${k}`;
                            break;
                        case f:
                            w = `${k > 0 ? `${k}` : ""}${T % 365 > 0 ? "" + (T % 365) : ""}${x % 24 > 0 ? "" + (x % 24) : ""}${g % 60 > 0 ? "" + (g % 60) : ""}${i % 60}`;
                            break;
                        default:
                            w = "" + (i % 60);
                    }
                    return r.createElement(s.ZP, { style: t }, w);
                },
                w = ({ props: e, style: t }) => {
                    const a = e.date("time") ?? new Date(),
                        w = e.enum("format") ?? c,
                        v = (Date.now() - a.getTime()) / 1e3;
                    if (w === u || w === l || w === m || w === d || w === h || w === p || w === f) return r.createElement(k, { format: w, style: t, time: a });
                    const S = (() => {
                        switch (w) {
                            case c:
                                return g.format(a);
                            case o:
                                return x.format(a);
                            case i:
                                return T.format(a);
                            case n:
                                return v < 120 ? "1m" : v < 3600 ? `${Math.floor(v / 60)}m` : v < 86400 ? `${Math.floor(v / 3600)}h` : v < 259200 ? `${Math.floor(v / 3600 / 24)}d` : a.getFullYear() === new Date().getFullYear() ? b.format(a) : g.format(a);
                            default:
                                return "";
                        }
                    })();
                    return r.createElement(s.ZP, { style: t }, S);
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
                        [m, d] = r.useState(u),
                        h = r.useCallback(() => {
                            d((e) => !e);
                        }, []),
                        p = r.useCallback(() => {
                            l || d((e) => !e);
                        }, [l]),
                        f = r.useMemo(() => ({ isOpen: m, toggle: h }), [m, h]);
                    return r.createElement(o.Provider, { value: f }, r.createElement(s.Z, { onClick: p, style: a }, m ? e : i));
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
                m = a(33842);
            const d = `transform ${l.B5}ms ease, opacity ${l.B5}ms ease`,
                h = ({ index: e, initialAnimationState: t = "FadingIn", isTopCard: a, match: o, numCardsVisible: h }) => {
                    const [f, g] = r.useState(t),
                        { userSelectMatchWinner: x } = (0, m.cM)(),
                        { height: T } = c.Z.get("screen"),
                        b = r.useCallback(
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
                                                x(c, i, n), g("TransitionOff");
                                            }, l.B5);
                                    };
                                    r
                                        ? setTimeout(() => {
                                              e();
                                          }, 1500)
                                        : e();
                                }
                            },
                            [a, o.id, o.index, o.round, o.userTeam1?.name, x],
                        ),
                        k = { zIndex: n.default.theme.componentZIndices.appBarZIndex + e };
                    switch (f) {
                        case "FadingIn":
                            (k.opacity = "0"),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * l.YV,
                                );
                            break;
                        case "SlidingIn":
                            (k.transform = `translateY(-${T}px)`),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * l.YV,
                                );
                            break;
                        case "SlidingOut":
                            k.transform = `translateY(${1.2 * T}px)`;
                            break;
                        case "TransitionOff":
                            (k.transition = ""),
                                (k.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`),
                                setTimeout(() => {
                                    g("Static");
                                }, 100);
                            break;
                        default:
                            (k.transition = d), (k.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`);
                    }
                    const w = r.useMemo(() => {
                        const e = new Map();
                        return e.set(i.bP.MARCH_MADNESS_PICK, b), e;
                    }, [b]);
                    return r.createElement(s.Z, { style: [p.cardContainer, k] }, r.createElement(u.J, { path: `/brackets/card?team1Name=${o.userTeam1?.name || ""}&team2Name=${o.userTeam2?.name || ""}&matchupId=${o?.id || ""}`, systemActionHandlers: w }));
                },
                p = n.default.create((e) => ({ cardContainer: { opacity: 1, position: "absolute", width: `calc(100% - ${e.spaces.space16})`, boxShadow: "-5px -5px 10px black", borderRadius: e.borderRadii.large, transition: d } })),
                f = ({ props: e }) => {
                    const { bracketIsFilledOut: t, matchesRemainingToBeSelected: a } = (0, m.cM)(),
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
            a.d(t, { AH: () => w, B5: () => c, F4: () => g, IO: () => f, JJ: () => p, P4: () => h, RC: () => v, YV: () => i, ZH: () => b, aR: () => k, bg: () => u, cM: () => l, eI: () => m, ed: () => x, hF: () => P, hk: () => T, qu: () => d, sk: () => S, xi: () => y });
            var r = a(878052),
                s = a(392237),
                n = a(111677),
                o = a.n(n);
            const c = 500,
                i = 150,
                u = Math.min(0.8 * r.Z.get("screen").width, 400 * s.default.theme.scaleMultiplier),
                l = s.default.theme.spacesPx.space64,
                m = { roundOf64: o().c5453f28, roundOf32: o().eb256a86, sweetSixteen: o().g77adc66, sweetSixteenShort: o().a6d2520c, eliteEight: o().g5b63eb6, eliteEightShort: o().d8bf2890, finalFour: o().f9d3d6f2, finalFourShort: o().bda24f7c, championship: o().i5043440, championshipShort: o().fcb16026 },
                d = { east: o().e9c89ee8, west: o().h259fd86, south: o().a7b2545a, midwest: o().fdf7819a },
                h = [m.roundOf64, m.roundOf32, m.sweetSixteen, m.eliteEight, m.finalFour, m.championship],
                p = JSON.stringify({ rounds: [] }),
                f = s.default.theme.spacesPx.space8,
                g = s.default.theme.spacesPx.space2 + s.default.theme.spacesPx.space1,
                x = s.default.theme.spacesPx.space80 + f,
                T = s.default.theme.spacesPx.space80 + g,
                b = s.default.theme.spacesPx.space64,
                k = s.default.theme.spacesPx.space32,
                w = s.default.theme.spacesPx.space32,
                v = s.default.theme.spacesPx.space64,
                S = s.default.theme.spacesPx.space40,
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
                        m = r.useCallback(
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
                        d = [];
                    a.rounds.forEach((e) => {
                        e.matchups.forEach((e, t) => {
                            e.userTeam1 && e.userTeam2 && !e.userPick && d.push({ ...e, index: t });
                        });
                    });
                    const h = a.rounds.every((e) => e?.matchups.every((e) => !!e.userPick)),
                        p = { initializeTournamentData: l, tournamentData: a, userSelectMatchWinner: m, matchesRemainingToBeSelected: d, bracketIsFilledOut: h };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-5eee0d-153768ae.1901b54a.js.map

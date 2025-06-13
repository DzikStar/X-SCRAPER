"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-fdc77e-17d653ee"],
    {
        267663: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                s = a(325686);
            const n = ({ props: e, style: t }) => r.createElement(s.Z, { style: { flexGrow: 1, flexShrink: 1, flexBasis: "auto", ...t } });
        },
        152381: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(202784),
                s = a(325686),
                n = a(167630),
                o = a(392237),
                i = a(111677);
            const c = a.n(i)().c02e7e3c,
                l = o.default.create((e) => ({ spinner: { alignItems: "center" } })),
                u = ({ props: e, style: t }) => {
                    const a = e.int("size"),
                        o = a ? { width: a, height: a } : void 0;
                    return r.createElement(s.Z, { style: [l.spinner, o, t] }, r.createElement(n.Z, { "aria-label": c, size: a ?? "small" }));
                };
        },
        669189: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                s = a(325686);
            const n = a(392237).default.create((e) => ({ container: { height: "100%", width: "100%" } })),
                o = ({ children: e }) => {
                    if (e) return r.createElement(s.Z, { style: n.container }, e);
                };
        },
        944047: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                s = a(325686),
                n = a(392237),
                o = a(187669),
                i = a(59669),
                c = a(766225);
            const l = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: a, durationMs: n } = (0, i.wR)();
                    let o = 0;
                    if (t) o = 100;
                    else if (e) {
                        const e = (a || 0) / (n || 1);
                        o = 100 * Math.max(0, Math.min(1, e));
                    }
                    const c = { width: `${o}%` };
                    return r.createElement(s.Z, { style: u.progressIndicator }, r.createElement(s.Z, { style: [u.progressIndicatorFiller, c] }));
                },
                u = n.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                d = ({ children: e, props: t }) => {
                    const a = t.int("index") ?? 0,
                        { initializeStoryElements: n, navigateElement: d, navigateStoryWithTransition: m, storyPagerState: h } = (0, c.rX)(),
                        p = h.stories[a],
                        { setTracksFinished: f, tracksFinished: g } = (0, i.wR)();
                    r.useEffect(() => {
                        if (g) {
                            const e = h.stories[h.activeStory];
                            e.activeElement === e.elements.length - 1 ? m(1) : d(1), f?.(!1);
                        }
                    }, [d, m, f, h.activeStory, h.stories, g]),
                        (0, o.q)(() => {
                            n(e?.length || 0, a);
                        });
                    const w = p?.activeElement || 0;
                    if (e && p)
                        return r.createElement(
                            s.Z,
                            { style: u.container },
                            r.createElement(
                                s.Z,
                                { style: u.pillContainer },
                                e.map((e, t) => r.createElement(l, { isActive: t === w, isComplete: t < w, key: t })),
                            ),
                            e[w],
                        );
                };
        },
        675299: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                s = a(466999),
                n = a(392237);
            const o = 0,
                i = 1,
                c = 2,
                l = 3,
                u = (e) => {
                    switch (e) {
                        case i:
                            return "head";
                        case c:
                            return "middle";
                        case l:
                            return "tail";
                        default:
                            return "clip";
                    }
                },
                d = n.default.create((e) => ({ text: { color: e.colors.text, textOverflow: "ellipsis" } })),
                m = ({ props: e, style: t }) => {
                    const a = e.str("t") ?? "",
                        n = e.enum("truncate") ?? o,
                        i = e.int("numberOfLines") ?? 1;
                    return r.createElement(s.Z, { ellipsizeMode: u(n), numberOfLines: i, style: [d.text, t] }, a);
                };
        },
        923513: (e, t, a) => {
            a.d(t, { Z: () => k });
            var r = a(202784),
                s = a(731708);
            const n = 0,
                o = 1,
                i = 2,
                c = 3,
                l = 5,
                u = 6,
                d = 7,
                m = 8,
                h = 9,
                p = 10,
                f = 11,
                g = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                w = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                v = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                x = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" }),
                b = ({ format: e, style: t, time: a }) => {
                    const [n, o] = r.useState(Date.now());
                    r.useEffect(() => {
                        const e = setInterval(() => {
                            o(Date.now());
                        }, 1e3);
                        return () => clearInterval(e);
                    }, []);
                    const i = a.getTime() - n;
                    if (i <= 0) return r.createElement(s.ZP, { style: t }, "0");
                    const c = Math.floor(i / 1e3),
                        g = Math.floor(c / 60),
                        w = Math.floor(g / 60),
                        v = Math.floor(w / 24),
                        x = Math.floor(v / 30),
                        b = Math.floor(v / 365);
                    let k = "";
                    switch (e) {
                        case l:
                            k = "" + (c % 60);
                            break;
                        case u:
                            k = "" + (g % 60);
                            break;
                        case d:
                            k = "" + (w % 24);
                            break;
                        case m:
                            k = "" + (v % 30);
                            break;
                        case h:
                            k = "" + (x % 12);
                            break;
                        case p:
                            k = `${b}`;
                            break;
                        case f:
                            k = `${b > 0 ? `${b}` : ""}${v % 365 > 0 ? "" + (v % 365) : ""}${w % 24 > 0 ? "" + (w % 24) : ""}${g % 60 > 0 ? "" + (g % 60) : ""}${c % 60}`;
                            break;
                        default:
                            k = "" + (c % 60);
                    }
                    return r.createElement(s.ZP, { style: t }, k);
                },
                k = ({ props: e, style: t }) => {
                    const a = e.date("time") ?? new Date(),
                        k = e.enum("format") ?? i,
                        y = (Date.now() - a.getTime()) / 1e3;
                    if (k === l || k === u || k === d || k === m || k === h || k === p || k === f) return r.createElement(b, { format: k, style: t, time: a });
                    const T = (() => {
                        switch (k) {
                            case i:
                                return g.format(a);
                            case o:
                                return w.format(a);
                            case c:
                                return v.format(a);
                            case n:
                                return y < 120 ? "1m" : y < 3600 ? `${Math.floor(y / 60)}m` : y < 86400 ? `${Math.floor(y / 3600)}h` : y < 259200 ? `${Math.floor(y / 3600 / 24)}d` : a.getFullYear() === new Date().getFullYear() ? x.format(a) : g.format(a);
                            default:
                                return "";
                        }
                    })();
                    return r.createElement(s.ZP, { style: t }, T);
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
            a.d(t, { Z: () => i, t: () => o });
            var r = a(202784),
                s = a(325686),
                n = a(738124);
            const o = r.createContext({ isOpen: !0, toggle: () => {} }),
                i = ({ children: e, props: t, style: a }) => {
                    const i = t.element("closed"),
                        c = i ? r.createElement(n.Z, { payload: i }) : null,
                        l = t.bool("initial") ?? !0,
                        u = t.bool("targetOnly") ?? !1,
                        [d, m] = r.useState(l),
                        h = r.useCallback(() => {
                            m((e) => !e);
                        }, []),
                        p = r.useCallback(() => {
                            u || m((e) => !e);
                        }, [u]),
                        f = r.useMemo(() => ({ isOpen: d, toggle: h }), [d, h]);
                    return r.createElement(o.Provider, { value: f }, r.createElement(s.Z, { onClick: p, style: a }, d ? e : c));
                };
        },
        16497: (e, t, a) => {
            a.d(t, { x: () => f });
            var r = a(202784),
                s = a(325686),
                n = a(392237),
                o = a(187669),
                i = a(878052),
                c = a(736230),
                l = a(996223),
                u = a(456977),
                d = a(33842);
            const m = `transform ${u.B5}ms ease, opacity ${u.B5}ms ease`,
                h = ({ index: e, initialAnimationState: t = "FadingIn", isTopCard: a, match: o, numCardsVisible: h }) => {
                    const [f, g] = r.useState(t),
                        { userSelectMatchWinner: w } = (0, d.cM)(),
                        { height: v } = i.Z.get("screen"),
                        x = r.useCallback(
                            (...e) => {
                                const t = e[1],
                                    r = e[2];
                                if (!a || o.id !== t) return;
                                const s = e[0],
                                    n = o.userTeam1?.name === s ? 1 : 2,
                                    i = o.round,
                                    c = o.index;
                                if (void 0 !== i && void 0 !== c) {
                                    const e = () => {
                                        g("SlidingOut"),
                                            setTimeout(() => {
                                                w(i, c, n), g("TransitionOff");
                                            }, u.B5);
                                    };
                                    r
                                        ? setTimeout(() => {
                                              e();
                                          }, 1500)
                                        : e();
                                }
                            },
                            [a, o.id, o.index, o.round, o.userTeam1?.name, w],
                        ),
                        b = { zIndex: n.default.theme.componentZIndices.appBarZIndex + e };
                    switch (f) {
                        case "FadingIn":
                            (b.opacity = "0"),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * u.YV,
                                );
                            break;
                        case "SlidingIn":
                            (b.transform = `translateY(-${v}px)`),
                                setTimeout(
                                    () => {
                                        g("Static");
                                    },
                                    (h - e - 1) * u.YV,
                                );
                            break;
                        case "SlidingOut":
                            b.transform = `translateY(${1.2 * v}px)`;
                            break;
                        case "TransitionOff":
                            (b.transition = ""),
                                (b.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`),
                                setTimeout(() => {
                                    g("Static");
                                }, 100);
                            break;
                        default:
                            (b.transition = m), (b.transform = `translateY(${e * n.default.theme.spacesPx.space8}px)`);
                    }
                    const k = r.useMemo(() => {
                        const e = new Map();
                        return e.set(c.bP.MARCH_MADNESS_PICK, x), e;
                    }, [x]);
                    return r.createElement(s.Z, { style: [p.cardContainer, b] }, r.createElement(l.J, { path: `/brackets/card?team1Name=${o.userTeam1?.name || ""}&team2Name=${o.userTeam2?.name || ""}&matchupId=${o?.id || ""}`, systemActionHandlers: k }));
                },
                p = n.default.create((e) => ({ cardContainer: { opacity: 1, position: "absolute", width: `calc(100% - ${e.spaces.space16})`, boxShadow: "-5px -5px 10px black", borderRadius: e.borderRadii.large, transition: m } })),
                f = ({ props: e }) => {
                    const { bracketIsFilledOut: t, matchesRemainingToBeSelected: a } = (0, d.cM)(),
                        n = a.slice(0, 5),
                        [i, c] = r.useState(!0);
                    return (
                        (0, o.q)(() => {
                            setTimeout(
                                () => {
                                    c(!1);
                                },
                                u.B5 + u.YV * n.length,
                            );
                        }),
                        t && e.set("cardsMode", [6, !1]),
                        r.createElement(
                            s.Z,
                            { style: g.container },
                            r.createElement(
                                s.Z,
                                { style: g.allCardsContainer },
                                n.reverse().map((e, t, a) => r.createElement(h, { index: t, initialAnimationState: i ? "SlidingIn" : "FadingIn", isTopCard: t === a.length - 1, key: `${e?.round || 0}-${e?.index || 0}`, match: e, numCardsVisible: a.length })),
                            ),
                        )
                    );
                },
                g = n.default.create((e) => ({ container: { width: "100%", height: "100%" }, allCardsContainer: { position: "relative", width: "100%", height: "100%", padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }));
        },
        456977: (e, t, a) => {
            a.d(t, { AH: () => k, B5: () => i, F4: () => g, IO: () => f, JJ: () => p, P4: () => h, RC: () => y, YV: () => c, ZH: () => x, aR: () => b, bg: () => l, cM: () => u, eI: () => d, ed: () => w, hF: () => S, hk: () => v, qu: () => m, sk: () => T, xi: () => E });
            var r = a(878052),
                s = a(392237),
                n = a(111677),
                o = a.n(n);
            const i = 500,
                c = 150,
                l = Math.min(0.8 * r.Z.get("screen").width, 400 * s.default.theme.scaleMultiplier),
                u = s.default.theme.spacesPx.space64,
                d = { roundOf64: o().c5453f28, roundOf32: o().eb256a86, sweetSixteen: o().g77adc66, sweetSixteenShort: o().a6d2520c, eliteEight: o().g5b63eb6, eliteEightShort: o().d8bf2890, finalFour: o().f9d3d6f2, finalFourShort: o().bda24f7c, championship: o().i5043440, championshipShort: o().fcb16026 },
                m = { east: o().e9c89ee8, west: o().h259fd86, south: o().a7b2545a, midwest: o().fdf7819a },
                h = [d.roundOf64, d.roundOf32, d.sweetSixteen, d.eliteEight, d.finalFour, d.championship],
                p = JSON.stringify({ rounds: [] }),
                f = s.default.theme.spacesPx.space8,
                g = s.default.theme.spacesPx.space2 + s.default.theme.spacesPx.space1,
                w = s.default.theme.spacesPx.space80 + f,
                v = s.default.theme.spacesPx.space80 + g,
                x = s.default.theme.spacesPx.space64,
                b = s.default.theme.spacesPx.space32,
                k = s.default.theme.spacesPx.space32,
                y = s.default.theme.spacesPx.space64,
                T = s.default.theme.spacesPx.space40,
                S = 180 * s.default.theme.scaleMultiplier,
                E = 2 * s.default.theme.spacesPx.space64 + 3 * S;
        },
        33842: (e, t, a) => {
            a.d(t, { _l: () => l, cM: () => u });
            a(136728), a(571372);
            var r = a(202784),
                s = a(400752),
                n = a(465233),
                o = a(420182);
            const i = "rweb.userTournamentBracket",
                c = r.createContext({ teams: new Map(), initializeTournamentData: () => {}, tournamentData: { rounds: [] }, userSelectMatchWinner: () => {}, matchesRemainingToBeSelected: [], bracketIsFilledOut: !1 }),
                l = ({ children: e }) => {
                    const t = (0, s.Dv)(o.lZ),
                        [a, l] = r.useState({ rounds: [] }),
                        u = r.useCallback(
                            (e, a) => {
                                t.get(i).then((t) => {
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
                                    l(r);
                                });
                            },
                            [t],
                        ),
                        d = r.useCallback(
                            (e, a, r) => {
                                l((s) => {
                                    const o = (0, n.Z)(s);
                                    o.rounds[e].matchups[a].userPick = r;
                                    const c = o.rounds[e].matchups[a][`userTeam${r}`];
                                    if (e + 1 < s.rounds.length) {
                                        const t = a % 2 == 0,
                                            r = Math.floor(a / 2);
                                        t ? (o.rounds[e + 1].matchups[r].userTeam1 = c) : (o.rounds[e + 1].matchups[r].userTeam2 = c), (o.rounds[e + 1].matchups[r].userPick = void 0);
                                    }
                                    for (let t = e + 2; t < s.rounds.length; t++) {
                                        const r = t - e,
                                            s = Math.floor(a / Math.pow(2, r));
                                        Math.floor(a / Math.pow(2, r - 1)) % 2 == 0 ? ((o.rounds[t].matchups[s].userTeam1 = void 0), (o.rounds[t].matchups[s].userPick = void 0)) : ((o.rounds[t].matchups[s].userTeam2 = void 0), (o.rounds[t].matchups[s].userPick = void 0));
                                    }
                                    const l = ((e) => {
                                        const t = { rounds: [] };
                                        return (t.rounds = e.rounds.map((e) => ({ name: e.name, matchups: e.matchups.map((e) => ({ id: e.id, userTeam1: e.userTeam1, userTeam2: e.userTeam2, userPick: e.userPick })) }))), t;
                                    })(o);
                                    return t.set(i, l), o;
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
                        p = { initializeTournamentData: u, tournamentData: a, userSelectMatchWinner: d, matchesRemainingToBeSelected: m, bracketIsFilledOut: h };
                    return r.createElement(c.Provider, { value: p }, e);
                };
            function u() {
                const e = r.useContext(c);
                if (void 0 === e) throw new Error("useTournamentBracketContext was used outside of its provider TournamentBracketContextProvider");
                return e;
            }
        },
        459405: (e, t, a) => {
            a.d(t, { EW: () => n, Jh: () => c, Py: () => o, wh: () => i });
            a(136728);
            var r = a(537392),
                s = a(323265);
            const n = (e, t) => {
                    const a = new Date(e),
                        r = a.toLocaleString("default", { month: "long" }),
                        s = a.getDate().toString();
                    let n, o, i;
                    t && ((n = new Date(t)), (o = n.toLocaleString("default", { month: "long" })), (i = n.getDate().toString()));
                    const c = `${r} ${s}`;
                    if (r === o && s === i) return c;
                    o === r && (o = void 0);
                    return `${c}${n ? ` - ${`${o ? `${o} ` : ""}${i || ""}`}` : ""}`;
                },
                o = (e) => {
                    const t = { rounds: [] };
                    return (
                        e.rounds.forEach((e) => {
                            const a = { ...e, matchups: [] };
                            e.matchups.forEach((e) => {
                                const { period: t, team1: r, team1Score: s, team2: n, team2Score: o, timeRemaining: i, winner: c, ...l } = e;
                                a.matchups.push({ ...l });
                            }, []),
                                t.rounds.push(a);
                        }),
                        t
                    );
                },
                i = () => {
                    const e = (0, r.Zx)(({ windowWidth: e }) => e < 1024);
                    return s.ZP.isMobileOS() || e;
                },
                c = (e, t) => !e && void 0 !== t?.userPick && void 0 !== t?.userTeam1 && void 0 !== t?.userTeam2 && (t.userPick !== t.winner || t.team1?.name !== t.userTeam1?.name || t.team2?.name !== t.userTeam2?.name);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-fdc77e-17d653ee.7da6831a.js.map

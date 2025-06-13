"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ScoreEventSummaryHandler"],
    {
        31917: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Q });
            var a = r(459643),
                n = r(479506),
                l = r(942893),
                o = r(351322),
                c = r(202784),
                s = r(725516),
                i = r(325686),
                m = r(952428),
                d = r(392237),
                u = r(731708),
                g = r(810495),
                p = r(470397),
                f = r(111677),
                E = r.n(f),
                w = r(93074);
            const h = E().ccc45ee7,
                b = (e) => {
                    const { eventState: t, gameClockPeriod: r, participants: a, winnerId: n } = e,
                        l = t === g.D.Completed,
                        o = t === g.D.InProgress,
                        s = c.useMemo(() => {
                            const e = a && a.find((e) => e.id === n),
                                t = e?.shortName;
                            return l && t ? h({ team: t }) : o && r ? r : null;
                        }, [r, l, o, a, n]);
                    return c.createElement(p.Z, null, c.createElement(u.ZP, { color: o ? "magenta500" : "gray700", size: "subtext2", weight: "bold" }, (0, w.Z)(t)), s ? c.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "normal" }, s) : null);
                },
                y = c.memo(b),
                C = 864e5,
                S = E().f81a95d7,
                v = E().ccaa970f,
                Z = { emphasis: c.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "bold" }), normal: c.createElement(u.ZP, { color: "gray700", size: "subtext2" }) },
                k = ({ date: e }) => {
                    const t = ((e) => {
                            const t = new Date().setHours(0, 0, 0, 0),
                                r = t + C;
                            return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1;
                        })(e),
                        r = (0, E().d725a289)(e),
                        a = v(e),
                        n = c.useMemo(() => ({ formattedTime: r }), [r]);
                    switch (t) {
                        case 0:
                            return c.createElement(E().I18NFormatMessage, { $i18n: "h0d6f2c5" }, c.cloneElement(Z.emphasis, null, E().ed4bea2e), c.cloneElement(Z.normal, null, E().j3e0ae78({ formattedTime: n.formattedTime })));
                        case 1:
                            return c.createElement(E().I18NFormatMessage, { $i18n: "a492659f" }, c.cloneElement(Z.emphasis, null, E().cabfdd06), c.cloneElement(Z.normal, null, E().abd0f804({ formattedTime: n.formattedTime })));
                        default:
                            return c.createElement(p.Z, null, c.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, S({ date: a })), c.createElement(u.ZP, { color: "gray700", size: "subtext2", weight: "normal" }, r));
                    }
                },
                I = c.memo(k),
                P = (e) => {
                    const { category: t, eventState: r, gameClockPeriod: a, participants: n, startTimeMillis: l, winnerId: o } = e,
                        s = r === g.D.Scheduled,
                        m = l && new Date(l);
                    return c.createElement(i.Z, { style: D.row }, c.createElement(u.ZP, { align: "left", size: "subtext2", style: D.rowElem, weight: "bold" }, t), c.createElement(i.Z, { style: D.eventStateContainer }, s && m ? c.createElement(I, { date: m }) : c.createElement(y, { eventState: r, gameClockPeriod: a, participants: n, winnerId: o })));
                },
                D = d.default.create((e) => ({ eventStateContainer: { alignSelf: "flex-end", flexDirection: "row" }, row: { flexDirection: "row", marginVertical: e.spaces.space4 }, rowElem: { flexGrow: 1, alignSelf: "center" } })),
                x = c.memo(P);
            var T = r(439592),
                z = r(530525);
            const M = (e) => {
                    const {
                            team: { imageUrl: t, logo: r },
                        } = e,
                        [a, n] = c.useState(!1),
                        l = c.useCallback(() => n(!0), [n]),
                        o = c.useMemo(() => {
                            const e = (!r && !t) || a ? _.translucent : {};
                            return [r ? _.logoContainer : _.imageContainer, e];
                        }, [r, t, a]),
                        s = r ? T.Z.exact(r.width / r.height) : T.Z.SQUARE;
                    return c.createElement(i.Z, { style: _.teamLogoContainer }, c.createElement(i.Z, { style: o }, c.createElement(z.Z, { "aria-label": "", aspectMode: s, image: r || t || "", onError: l, rounded: !r })));
                },
                _ = d.default.create((e) => ({ imageContainer: { width: e.spaces.space32 }, logoContainer: { width: e.spaces.space40 }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 }, teamLogoContainer: { alignSelf: "center", alignItems: "center", height: e.spaces.space32, width: e.spaces.space40 } })),
                H = c.memo(M),
                U = (e) => {
                    const { eventState: t, team: r, winnerId: a } = e,
                        { id: n, score: l, secondaryScore: o } = r,
                        s = n === a,
                        m = !a,
                        d = t === g.D.Completed && !s && !m,
                        p = t === g.D.Completed || t === g.D.InProgress,
                        f = c.useMemo(() => [$.teamScore, d && $.losingTeam], [d]);
                    return p ? c.createElement(i.Z, { style: f }, c.createElement(u.ZP, { color: "white", numberOfLines: 1, size: o ? "headline1" : "title4", weight: "heavy" }, l), o ? c.createElement(u.ZP, { color: "white", numberOfLines: 1, style: $.specialTeamScoreSecondary, weight: "bold" }, o) : null) : null;
                },
                $ = d.default.create((e) => ({ teamScore: { alignSelf: "center", marginHorizontal: e.spaces.space12 }, specialTeamScoreSecondary: { alignSelf: "flex-end" }, losingTeam: { opacity: 0.5 } })),
                L = c.memo(U),
                N = d.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, rowElem: { flexGrow: 1, alignSelf: "center", marginHorizontal: e.spaces.space12 } })),
                R = (e) => {
                    const { eventState: t, fallbackColor: r, team: a, winnerId: n } = e,
                        { color: l, fullName: o } = a,
                        s = c.useMemo(() => {
                            const e = { backgroundColor: (l && `rgb(${l.red}, ${l.green}, ${l.blue})`) || d.default.theme.colors[r] };
                            return [N.root, e];
                        }, [l, r]);
                    return c.createElement(i.Z, { style: s }, c.createElement(H, { team: a }), c.createElement(u.ZP, { align: "left", color: "white", numberOfLines: 1, style: N.rowElem, weight: "heavy" }, o), c.createElement(L, { eventState: t, team: a, winnerId: n }));
                },
                A = (e) => {
                    const { eventState: t, participants: r, winnerId: a } = e;
                    return c.createElement(
                        c.Fragment,
                        null,
                        r.map((e, r) => c.createElement(R, { eventState: t, fallbackColor: r % 2 == 0 ? "gray300" : "gray700", key: e.id, team: e, winnerId: a })),
                    );
                },
                F = c.memo(A),
                G = (e) => {
                    const { category: t, eventState: r, gameClock: a, gameClockPeriod: n, onClick: l, onImpression: o, participants: s, startTimeMillis: d, summary: u, url: g, winnerId: p } = e;
                    return (
                        c.useEffect(() => {
                            o();
                        }, [o]),
                        s && g?.url ? c.createElement(m.Z, { link: g.url, onClick: l }, c.createElement(i.Z, { style: O.container }, c.createElement(x, { category: t, eventState: r, gameClock: a, gameClockPeriod: n, participants: s, startTimeMillis: d, summary: u, winnerId: p }), c.createElement(i.Z, { style: O.teamsBorder }, c.createElement(F, { eventState: r, participants: s, winnerId: p })))) : null
                    );
                },
                O = d.default.create((e) => ({ container: { flexDirection: "column", marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space12, marginTop: e.spaces.space4 }, teamsBorder: { borderRadius: e.borderRadii.small, overflow: "hidden" } })),
                B = c.memo(G),
                j = (e) => {
                    const { entry: t } = e,
                        r = (0, s.z)(),
                        a = c.useCallback(() => {
                            r.scribeAction("click");
                        }, [r]),
                        n = c.useCallback(() => {
                            r.scribeAction("impression");
                        }, [r]);
                    if (!t.content.scoreEvent.eventState) return null;
                    const { category: l, eventState: o, gameClock: i, gameClockPeriod: m, participants: d, startTimeMillis: u, summary: g, url: p, winnerId: f } = t.content.scoreEvent;
                    return c.createElement(B, { category: l, eventState: o, gameClock: i, gameClockPeriod: m, onClick: a, onImpression: n, participants: d, startTimeMillis: parseInt(u, 10), summary: g, url: p, winnerId: f });
                },
                V = c.memo(j),
                Q = o
                    .iH({
                        component: V,
                        isFocusable: (0, a.Z)(!0),
                        getScribeDataItem: ({
                            content: {
                                scoreEvent: { id: e },
                            },
                            itemMetadata: { clientEventInfo: t },
                        }) => {
                            const r = l.Z.getAllSurfaceDetails(t);
                            if (r) return { item_type: n.Z.ItemType.EVENT, event_details: { event_id: e }, ...r };
                        },
                    })
                    .getHandler();
        },
        93074: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(111677),
                n = r.n(a),
                l = r(810495);
            const o = n().f178e38c,
                c = n().b6da6b02,
                s = n().i9f615c8,
                i = n().f897267a,
                m = n().f93c4b6a,
                d = (e) => {
                    switch (e) {
                        case l.D.Scheduled:
                            return o;
                        case l.D.InProgress:
                            return c;
                        case l.D.Completed:
                            return s;
                        case l.D.Postponed:
                            return i;
                        case l.D.Cancelled:
                            return m;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        470397: (e, t, r) => {
            r.d(t, { Z: () => c });
            r(136728);
            var a = r(202784),
                n = r(325686),
                l = r(124964),
                o = r(392237);
            const c = ({ children: e, color: t = "gray700", size: r, style: o }) => {
                    const c = [];
                    return (
                        a.Children.forEach(e, (e) => {
                            const n = c.length;
                            e && (n > 0 && c.push(a.createElement(l.Z, { color: t, key: `middot-${n}`, size: r })), c.push(e));
                        }),
                        c.length ? a.createElement(n.Z, { style: [s.middotGroup, o] }, c) : null
                    );
                },
                s = o.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ScoreEventSummaryHandler.b6511c4a.js.map

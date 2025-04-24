"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.EventSummaryHandler~loader.ListHandler"],
    {
        346252: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(202784),
                n = a(325686),
                o = a(530525),
                s = a(439592),
                l = a(682474),
                i = a(745185),
                c = a(392237),
                d = a(401388),
                m = a(250672),
                u = a(741692);
            const h = Object.freeze({ Fixed: "fixed", Variable: "variable" }),
                p = (e) => {
                    const { category: t, eventState: a, gameClock: n, gameClockPeriod: o, participants: s, startTimeMillis: l, winnerId: c } = e,
                        d = (0, m.bH)(t, a, s, o, c);
                    return r.createElement(i.Z, { "aria-label": d, category: t, containerStyle: C.scoreCardTile, gameClock: n, gameClockPeriod: o, gameState: a, isCompact: !0, startTimeMillis: l, teams: s, winnerId: c });
                },
                g = ({ isCellWithProminentSocialContext: e, type: t }) => {
                    switch (t) {
                        case h.Fixed:
                            return (e && C.fixedCellThumbnailWithProminentSocialContext) || C.fixedCellThumbnail;
                        case h.Variable:
                            return C.variableCellThumbnail;
                        default:
                            return;
                    }
                },
                C = c.default.create((e) => ({ coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, fixedCellThumbnail: { height: c.default.theme.spaces.space48, width: c.default.theme.spaces.space48 }, fixedCellThumbnailWithProminentSocialContext: { height: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})`, width: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space40} + ${c.default.theme.spaces.space1} + ${c.default.theme.spaces.space2})` }, scoreCardTile: { padding: 0 }, variableCellThumbnail: { maxHeight: `calc(${c.default.theme.spaces.space48} * 2)`, maxWidth: `calc(${c.default.theme.spaces.space48} * 2)`, minHeight: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, minWidth: `calc(${c.default.theme.spaces.space48} + ${c.default.theme.spaces.space20})`, height: "25%", width: "25%" } })),
                f = (e) => {
                    const { cropCandidates: t, dataSaverMode: a, icon: i, image: c, isCellWithProminentSocialContext: m, scoreEvent: h, type: f = "variable" } = e,
                        b = g({ isCellWithProminentSocialContext: m, type: f });
                    return r.createElement(n.Z, { style: [C.coverContainer, b] }, h ? p(h) : !c || (0, d.Z)(c) || a ? (a || (0, d.Z)(c) ? r.createElement(l.Z, { ratio: 1 }, r.createElement(u.Vm, { icon: i })) : null) : r.createElement(o.Z, { "aria-label": "", aspectMode: s.Z.SQUARE, cropCandidates: t, image: c }));
                };
        },
        741692: (e, t, a) => {
            a.d(t, { S3: () => u, nn: () => h, Vm: () => p });
            var r = a(202784),
                n = a(325686),
                o = a(366635),
                s = a(392237),
                l = a(453333),
                i = a(784732),
                c = a(689582),
                d = a(68290);
            const m = "placeholderIcon",
                u = ({ author: e, color: t = "text", size: a = "subtext2", style: n, withHoverCard: s = !0, withLink: l = !1, withScreenName: i = !1 }) => r.createElement(o.Z, { affiliateBadgeInfo: e.highlightedLabel, avatarSize: { subtext2: "small", body: "medium", headline1: "large" }[a], color: t, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: a, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: a, style: [g.authorUserName, n], verifiedType: e.verified_type, withHoverCard: s, withLink: l, withScreenName: i }),
                h = ({ style: e }) => r.createElement(n.Z, { style: [g.lightningBadge, e] }, r.createElement(l.default, { style: g.lightningIcon })),
                p = ({ icon: e }) => r.createElement(n.Z, { style: g.placeholderIconContainer, testID: m }, "news" === e ? r.createElement(i.default, { style: g.placeholderIcon }) : "lists" === e ? r.createElement(c.default, { style: g.placeholderIcon }) : r.createElement(d.default, { style: g.placeholderIcon })),
                g = s.default.create((e) => ({ authorUserName: { alignItems: "center" }, lightningBadge: { backgroundColor: "rgba(0, 0, 0, 0.6)", borderRadius: e.borderRadii.small, position: "absolute" }, lightningIcon: { boxSizing: "border-box", color: e.colors.white, height: e.spaces.space20, paddingVertical: "0.25rem", paddingHorizontal: "0.2rem" }, middot: { paddingHorizontal: e.spaces.space4 }, placeholderIcon: { color: e.colors.gray700, height: "2em" }, placeholderIconContainer: { alignItems: "center", borderWidth: e.borderWidths.small, borderStyle: "solid", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, backgroundColor: e.colors.gray0, height: "100%", justifyContent: "center" } }));
        },
        250672: (e, t, a) => {
            a.d(t, { bH: () => m });
            var r = a(674132),
                n = a.n(r),
                o = a(93074),
                s = a(810495);
            const l = n().a3484d22,
                i = n().aab2efa9,
                c = n().ba21c289,
                d = (e) => `${e.fullName || ""} ${e.score || ""}`,
                m = (e, t, a, r, n) => {
                    const m = a && n ? ((e, t) => (e && t ? e.find((e) => e.id === t) : void 0))(a, n) : void 0,
                        u = (0, o.Z)(t),
                        h = e || "",
                        p = a && a[0] ? d(a[0]) : "",
                        g = a && a[1] ? d(a[1]) : "",
                        C = r || "",
                        f = m ? i({ winner: m.fullName }) : "",
                        b = t === s.D.Completed ? (m ? f : l) : C;
                    return c({ gameCategory: h, gameState: u, accessibleGameClockPeriod: b, teamOneLabel: p, teamTwoLabel: g });
                };
        },
        93074: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(674132),
                n = a.n(r),
                o = a(810495);
            const s = n().f178e38c,
                l = n().b6da6b02,
                i = n().i9f615c8,
                c = n().f897267a,
                d = n().f93c4b6a,
                m = (e) => {
                    switch (e) {
                        case o.D.Scheduled:
                            return s;
                        case o.D.InProgress:
                            return l;
                        case o.D.Completed:
                            return i;
                        case o.D.Postponed:
                            return c;
                        case o.D.Cancelled:
                            return d;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, t, a) => {
            a.d(t, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        165822: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(325686),
                o = a(58881),
                s = a(530732),
                l = a(392237);
            const i = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: a, isCompact: c, link: d, lower: m, onClick: u, stackLayoutLowerStyle: h, stackLayoutUpperStyle: p, upper: g, withInsetFocusRing: C = !0, withInteractiveStyling: f = !1 }) => {
                    const b = o.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: C }),
                        S = r.createElement(r.Fragment, null, r.createElement(n.Z, { style: [i.defaultUpperContainerStyle, p, c && { height: "auto" }] }, g), m ? r.createElement(n.Z, { style: [i.defaultLowerContainerStyle, h] }, m) : null);
                    return r.createElement(s.Z, { "aria-label": e, disabled: a, interactive: f, interactiveStyles: f ? b : void 0, link: d, onClick: u, style: [i.root, t] }, S);
                };
        },
        745185: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(202784),
                n = a(165822),
                o = a(854582),
                s = a(325686),
                l = a(530525),
                i = a(731708),
                c = a(439592),
                d = a(626202),
                m = a(392237),
                u = a(615084);
            const h = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return r.createElement(s.Z, { style: C.teamNameContainer }, r.createElement(i.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: a },
                                } = this.props,
                                { imageError: n } = this.state,
                                o = (!a && !t) || n ? C.translucent : {},
                                i = a ? c.Z.exact(a.width / a.height) : c.Z.SQUARE;
                            return r.createElement(s.Z, { style: [C.imageContainer, o, e && C.compactImageContainer] }, r.createElement(l.Z, { "aria-label": "", aspectMode: i, image: a || t || "", onError: this._handleImageError, rounded: !a }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: a, winnerId: n } = this.props,
                                { color: o, id: l, score: c, secondaryScore: d } = a,
                                m = l === n,
                                p = !n,
                                f = t === u.D.Completed && !m && !p,
                                b = this._shouldRenderScore(),
                                S = this._getTeamScoreSize(h.SCORE),
                                y = d ? this._getTeamScoreSize(h.SECONDARY_SCORE) : void 0,
                                w = "Cricket" === e ? c?.split(" ")[0] : c;
                            return b ? r.createElement(s.Z, { style: [C.teamScore, f && C.losingTeamScore] }, r.createElement(i.ZP, { color: g(o), numberOfLines: 1, size: S, weight: "heavy" }, w), d ? r.createElement(i.ZP, { color: g(o), numberOfLines: 1, size: y, weight: "bold" }, d) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: t,
                                team: { secondaryScore: a },
                            } = this.props;
                            if (!!!a) return t ? "headline1" : "title4";
                            switch (e) {
                                case h.SCORE:
                                    return t ? "subtext2" : "body";
                                case h.SECONDARY_SCORE:
                                    return t ? "subtext3" : "subtext2";
                                default:
                                    return;
                            }
                        }),
                        (this._shouldRenderScore = () => {
                            const { gameState: e } = this.props;
                            return e === u.D.Completed || e === u.D.InProgress;
                        });
                }
                render() {
                    const {
                            fallbackColor: e,
                            isCompact: t,
                            team: { color: a },
                        } = this.props,
                        n = { backgroundColor: (a && `rgb(${a.red}, ${a.green}, ${a.blue})`) || m.default.theme.colors[e] },
                        o = this._shouldRenderScore(),
                        l = !t || !o;
                    return r.createElement(s.Z, { style: [C.root, n, t && C.compactRoot] }, this._renderImage(), l ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function g(e) {
                return e
                    ? (function (e) {
                          return (0, d.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            p.defaultProps = { isCompact: !1 };
            const C = m.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${m.default.theme.spaces.space1} + ${m.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                f = p;
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: a, gameState: n, isCompact: s, startTimeMillis: l, teams: i, winnerId: c } = this.props;
                            return r.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: a, gameState: n, startTimeMillis: l, teams: i, winnerId: c, withCategory: !s });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: a, gameState: n, isCompact: o, winnerId: s } = this.props,
                                { id: l } = e;
                            return r.createElement(f, { category: a, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: n, isCompact: o, key: l, team: e, winnerId: s });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: a, link: o, onClick: s, teams: l } = this.props;
                    if (l) {
                        const i = l && l.map(this._renderTeamRow);
                        return r.createElement(n.Z, { "aria-label": e, containerStyle: t, isCompact: a, link: o, lower: a ? void 0 : this._renderGameStatus(), onClick: s, upper: i, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            b.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                n = a(674132),
                o = a.n(n),
                s = a(731708),
                l = a(470397),
                i = a(615084);
            const c = 864e5,
                d = o().ccaa970f,
                m = o().d725a289,
                u = o().db355331,
                h = o().a8428d5e,
                p = o().a7aad8ba,
                g = o().e431f1aa,
                C = o().a7391708,
                f = o().d2dbfa92,
                b = o().cd734f66,
                S = o().c8891d06;
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? r.createElement(s.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const t = new Date(parseInt(e, 10)),
                                    a = ((e) => {
                                        const t = new Date().setHours(0, 0, 0, 0),
                                            a = t + c;
                                        return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1;
                                    })(t);
                                return -1 === a ? this._renderDateTime(t) : this._renderTodayTomorrow(a, t);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, t) => {
                            const a = m(t);
                            return r.createElement(l.Z, null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? b : S), r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, a));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = m(e),
                                a = d(e);
                            return r.createElement(l.Z, null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, a), r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: a } = this.props,
                                n = this._getWinnerName(),
                                o = e && n ? u({ team: n }) : t && a ? a : void 0;
                            return o ? r.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, o) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                a = e && e.find((e) => e.id === t);
                            return a && a.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        a = e === i.D.Scheduled,
                        n = e === i.D.InProgress,
                        o = e === i.D.Completed;
                    return r.createElement(
                        r.Fragment,
                        null,
                        a
                            ? this._renderGameScheduledDateTime()
                            : r.createElement(
                                  l.Z,
                                  null,
                                  r.createElement(
                                      s.ZP,
                                      { color: n ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case i.D.Scheduled:
                                                  return h;
                                              case i.D.InProgress:
                                                  return p;
                                              case i.D.Completed:
                                                  return g;
                                              case i.D.Postponed:
                                                  return C;
                                              case i.D.Cancelled:
                                                  return f;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(o, n),
                              ),
                        t ? this._renderCategory() : null,
                    );
                }
            }
            y.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, a) => {
            a.d(t, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.EventSummaryHandler~loader.ListHandler.a862d52a.js.map

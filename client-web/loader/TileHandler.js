"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TileHandler"],
    {
        101298: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(459643),
                n = r(351322),
                o = r(936619);
            const s = n.iH({ component: o.Z, shouldDisplayBorder: (0, a.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        984637: (e, t, r) => {
            r.r(t), r.d(t, { default: () => m });
            var a = r(459643),
                n = r(351322),
                o = r(202784),
                s = r(953035),
                l = r(946409),
                i = r(497181),
                c = r(151587);
            const d = ({ entry: e }) => {
                    const t = (e.content.content.callToAction && e.content.content.callToAction.text) || "",
                        r = e.content.url,
                        a = o.useMemo(() => (r ? (0, l.s9)(r) : void 0), [r]),
                        { handleTileClick: n } = (0, i.U)(e, !!a);
                    return a ? o.createElement(s.Z, { containerStyle: c.g.containerStyle, link: a, onClick: n, text: t }) : null;
                },
                m = n.iH({ component: d, shouldDisplayBorder: (0, a.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        936619: (e, t, r) => {
            r.d(t, { Z: () => v });
            var a = r(202784),
                n = r(157396),
                o = r(325686),
                s = r(530525),
                l = r(731708),
                i = r(439592),
                c = r(659651),
                d = r(392237),
                m = r(823161),
                u = r(366635),
                p = r(165822);
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTileLower = () => {
                            const { attribution: e } = this.props;
                            return e ? this._renderUserAvatar() : this._renderEventDescription();
                        }),
                        (this._renderTileUpper = () => {
                            const { "aria-label": e, badge: t, image: r } = this.props;
                            return r ? a.createElement(a.Fragment, null, a.createElement(s.Z, { "aria-label": e, aspectMode: i.Z.COVER, image: r }), t ? a.createElement(c.Z, { align: "left", background: t.backgroundColor, bold: !0 }, t.text) : null) : null;
                        }),
                        (this._renderUserAvatar = () => {
                            const { attribution: e } = this.props;
                            return e ? a.createElement(o.Z, { style: g.accountContainer }, a.createElement(o.Z, { style: g.avatarContainer }, a.createElement(m.default, { "aria-hidden": !0, focusable: !1, size: "xLarge", uri: e.profile_image_url_https, withLink: !1 })), a.createElement(o.Z, { style: g.groupContainer }, a.createElement(u.Z, { isBlueVerified: e.is_blue_verified, isVerified: e.verified, name: e.name, nameSize: "subtext2", screenName: e.screen_name, verifiedType: e.verified_type, weight: "bold", withLink: !1, withScreenName: !0, withStackedLayout: !0 }))) : null;
                        }),
                        (this._renderEventDescription = () => {
                            const { description: e, rightControl: t } = this.props;
                            return e ? a.createElement(o.Z, { style: g.eventDescription }, a.createElement(l.ZP, { numberOfLines: 2, size: "subtext2", style: { width: "100%" }, weight: "bold" }, e), a.createElement(o.Z, { style: g.rightControl }, t || null)) : null;
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, link: r, onClick: n } = this.props;
                    return a.createElement(p.Z, { "aria-label": e, containerStyle: t, link: r, lower: this._renderTileLower(), onClick: n, upper: this._renderTileUpper(), withInteractiveStyling: !0 });
                }
            }
            const g = d.default.create((e) => ({ accountContainer: { flexDirection: "row" }, avatarContainer: { marginEnd: e.spaces.space4 }, rightControl: { marginTop: e.spaces.space2 }, groupContainer: { flexDirection: "row", flexShrink: 1 }, eventDescription: { flexDirection: "row" } })),
                C = h;
            var b = r(946409),
                y = r(927389),
                f = r(497181),
                S = r(151587),
                w = r(668214),
                E = r(919022);
            const k = (e, t) => {
                    if (t.entry.content.content.broadcast) return E.ZP.select(e, t.entry.content.content.broadcast.userId);
                },
                Z = ({ broadcastUser: e, entry: t, feedbackItems: r }) => {
                    let o, s, l;
                    const i = t.content,
                        { content: c, image: d, url: m } = i;
                    c.standard ? ((o = c.standard.title), (s = c.standard.badge), (l = o)) : c.broadcast && ((o = e && `${e.name} ${e.screen_name}`), (s = c.broadcast.badge));
                    const u = a.useMemo(() => {
                            const e = s?.text;
                            return e ? { backgroundColor: (0, n.FZ)(s?.backgroundColorName || "") || void 0, text: e } : void 0;
                        }, [s]),
                        { handleTileClick: p } = (0, f.U)(t),
                        h = a.useMemo(() => (m ? (0, b.s9)(m) : ""), [m]),
                        g = a.useMemo(() => (l ? a.createElement(y.Z, { feedbackItems: r }) : null), [l, r]);
                    return a.createElement(C, { "aria-label": o || "", attribution: e, badge: u, containerStyle: S.g.containerStyle, description: l, image: d, link: h, onClick: p, rightControl: g });
                },
                v = (0, w.Z)().propsFromState(() => ({ broadcastUser: k }))(a.memo(Z));
        },
        407920: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(459643),
                n = r(351322),
                o = r(936619);
            const s = n.iH({ component: o.Z, shouldDisplayBorder: (0, a.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        250672: (e, t, r) => {
            r.d(t, { bH: () => m });
            var a = r(111677),
                n = r.n(a),
                o = r(93074),
                s = r(810495);
            const l = n().a3484d22,
                i = n().aab2efa9,
                c = n().ba21c289,
                d = (e) => `${e.fullName || ""} ${e.score || ""}`,
                m = (e, t, r, a, n) => {
                    const m = r && n ? ((e, t) => (e && t ? e.find((e) => e.id === t) : void 0))(r, n) : void 0,
                        u = (0, o.Z)(t),
                        p = e || "",
                        h = r && r[0] ? d(r[0]) : "",
                        g = r && r[1] ? d(r[1]) : "",
                        C = a || "",
                        b = m ? i({ winner: m.fullName }) : "",
                        y = t === s.D.Completed ? (m ? b : l) : C;
                    return c({ gameCategory: p, gameState: u, accessibleGameClockPeriod: y, teamOneLabel: h, teamTwoLabel: g });
                };
        },
        497181: (e, t, r) => {
            r.d(t, { U: () => s });
            var a = r(202784),
                n = r(942893),
                o = r(725516);
            const s = (e, t = !0) => {
                const r = (0, o.z)(),
                    s = ((e) => {
                        const { clientEventInfo: t } = e.itemMetadata,
                            r = n.Z.getAllSurfaceDetails(t);
                        return r ? { items: [r] } : void 0;
                    })(e);
                a.useEffect(() => {
                    t && r.scribe({ action: "impression", data: s });
                }, []);
                return {
                    handleTileClick: a.useCallback(() => {
                        r.scribe({ action: "click", data: s });
                    }, [r, s]),
                };
            };
        },
        549323: (e, t, r) => {
            r.r(t), r.d(t, { default: () => p });
            var a = r(459643),
                n = r(351322),
                o = r(202784),
                s = r(745185),
                l = r(946409),
                i = r(250672),
                c = r(497181),
                d = r(151587);
            const m = ({ entry: e }) => {
                    const t = e.content.content.scoreCard && e.content.content.scoreCard.scoreEventSummary.scoreEvent,
                        { category: r, eventState: a, gameClock: n, gameClockPeriod: m, participants: u, startTimeMillis: p, winnerId: h } = t || {},
                        { handleTileClick: g } = (0, c.U)(e),
                        C = e.content.url,
                        b = o.useMemo(() => (C ? (0, l.s9)(C) : ""), [C]);
                    return o.createElement(s.Z, { "aria-label": (0, i.bH)(r, a, u, m, h), category: r, containerStyle: d.g.containerStyle, gameClock: n, gameClockPeriod: m, gameState: a, link: b, onClick: g, startTimeMillis: p, teams: u, winnerId: h });
                },
                u = o.memo(m),
                p = n.iH({ component: u, shouldDisplayBorder: (0, a.Z)(!1), isFocusable: (0, a.Z)(!0) }).getHandler();
        },
        151587: (e, t, r) => {
            r.d(t, { g: () => a });
            const a = r(392237).default.create((e) => ({ containerStyle: { width: `calc(${e.spaces.space36}*5)` } }));
        },
        927389: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                n = r(247056),
                o = r(392237);
            const s = (0, r(523561).Z)({ loader: () => r.e("loader.FeedbackSheet").then(r.bind(r, 774426)) });
            var l = r(725516),
                i = r(851623);
            const c = o.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, l.Z)((e) => {
                    const { analytics: t, feedbackItems: r, isDisplayedOnMedia: o } = e,
                        l = a.useCallback((e) => (r ? a.createElement(s, { actionItems: r, onClose: e }) : null), [r]),
                        d = a.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return r && r.length > 0 ? a.createElement(n.Z, { onClick: d, renderActionMenu: l, style: c.curationControl, testID: i.Z.caret, withDarkBackground: o }) : null;
                });
        },
        93074: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(111677),
                n = r.n(a),
                o = r(810495);
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
        810495: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        470397: (e, t, r) => {
            r.d(t, { Z: () => l });
            r(136728);
            var a = r(202784),
                n = r(325686),
                o = r(124964),
                s = r(392237);
            const l = ({ children: e, color: t = "gray700", size: r, style: s }) => {
                    const l = [];
                    return (
                        a.Children.forEach(e, (e) => {
                            const n = l.length;
                            e && (n > 0 && l.push(a.createElement(o.Z, { color: t, key: `middot-${n}`, size: r })), l.push(e));
                        }),
                        l.length ? a.createElement(n.Z, { style: [i.middotGroup, s] }, l) : null
                    );
                },
                i = s.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                o = r(58881),
                s = r(530732),
                l = r(392237);
            const i = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: c, isCompact: d, link: m, lower: u, onClick: p, stackLayoutLowerStyle: h, stackLayoutUpperStyle: g, upper: C, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const f = c ?? o.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: b }),
                        S = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [i.defaultUpperContainerStyle, g, d && { height: "auto" }] }, C), u ? a.createElement(n.Z, { style: [i.defaultLowerContainerStyle, h] }, u) : null);
                    return a.createElement(s.Z, { "aria-label": e, disabled: r, interactive: y, interactiveStyles: y ? f : void 0, link: m, onClick: p, style: [i.root, t] }, S);
                };
        },
        953035: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                n = r(715417),
                o = r(167630),
                s = r(731708),
                l = r(392237),
                i = r(165822);
            const c = l.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto", marginTop: e.spaces.space8 } };
                }),
                d = ({ containerStyle: e, icon: t = n.default, iconColor: r = "primary", link: d, onClick: m, text: u, isCompact: p, disabled: h, isLoading: g, withInteractiveStyling: C, interactiveStyles: b, textStyle: y }) => {
                    const f = a.useMemo(() => ({ color: l.default.theme.colors[r] }), [r]);
                    return a.createElement(i.Z, { "aria-label": u, containerStyle: [c.container, e], disabled: h, interactiveStyles: b, isCompact: p, link: d, lower: g ? a.createElement(o.Z, { size: "small" }) : a.createElement(s.ZP, { style: [y, f] }, u), onClick: m, stackLayoutLowerStyle: [c.lower, p ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: a.createElement(t, { style: [c.icon, f] }), withInteractiveStyling: C });
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                n = r(165822),
                o = r(854582),
                s = r(325686),
                l = r(530525),
                i = r(731708),
                c = r(439592),
                d = r(626202),
                m = r(392237),
                u = r(615084);
            const p = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class h extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return a.createElement(s.Z, { style: C.teamNameContainer }, a.createElement(i.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: r },
                                } = this.props,
                                { imageError: n } = this.state,
                                o = (!r && !t) || n ? C.translucent : {},
                                i = r ? c.Z.exact(r.width / r.height) : c.Z.SQUARE;
                            return a.createElement(s.Z, { style: [C.imageContainer, o, e && C.compactImageContainer] }, a.createElement(l.Z, { "aria-label": "", aspectMode: i, image: r || t || "", onError: this._handleImageError, rounded: !r }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: r, winnerId: n } = this.props,
                                { color: o, id: l, score: c, secondaryScore: d } = r,
                                m = l === n,
                                h = !n,
                                b = t === u.D.Completed && !m && !h,
                                y = this._shouldRenderScore(),
                                f = this._getTeamScoreSize(p.SCORE),
                                S = d ? this._getTeamScoreSize(p.SECONDARY_SCORE) : void 0,
                                w = "Cricket" === e ? c?.split(" ")[0] : c;
                            return y ? a.createElement(s.Z, { style: [C.teamScore, b && C.losingTeamScore] }, a.createElement(i.ZP, { color: g(o), numberOfLines: 1, size: f, weight: "heavy" }, w), d ? a.createElement(i.ZP, { color: g(o), numberOfLines: 1, size: S, weight: "bold" }, d) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: t,
                                team: { secondaryScore: r },
                            } = this.props;
                            if (!!!r) return t ? "headline1" : "title4";
                            switch (e) {
                                case p.SCORE:
                                    return t ? "subtext2" : "body";
                                case p.SECONDARY_SCORE:
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
                            team: { color: r },
                        } = this.props,
                        n = { backgroundColor: (r && `rgb(${r.red}, ${r.green}, ${r.blue})`) || m.default.theme.colors[e] },
                        o = this._shouldRenderScore(),
                        l = !t || !o;
                    return a.createElement(s.Z, { style: [C.root, n, t && C.compactRoot] }, this._renderImage(), l ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function g(e) {
                return e
                    ? (function (e) {
                          return (0, d.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            h.defaultProps = { isCompact: !1 };
            const C = m.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${m.default.theme.spaces.space1} + ${m.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                b = h;
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: r, gameState: n, isCompact: s, startTimeMillis: l, teams: i, winnerId: c } = this.props;
                            return a.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: r, gameState: n, startTimeMillis: l, teams: i, winnerId: c, withCategory: !s });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: r, gameState: n, isCompact: o, winnerId: s } = this.props,
                                { id: l } = e;
                            return a.createElement(b, { category: r, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: n, isCompact: o, key: l, team: e, winnerId: s });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: r, link: o, onClick: s, teams: l } = this.props;
                    if (l) {
                        const i = l && l.map(this._renderTeamRow);
                        return a.createElement(n.Z, { "aria-label": e, containerStyle: t, isCompact: r, link: o, lower: r ? void 0 : this._renderGameStatus(), onClick: s, upper: i, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            y.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => S });
            var a = r(202784),
                n = r(111677),
                o = r.n(n),
                s = r(731708),
                l = r(470397),
                i = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                m = o().d725a289,
                u = o().db355331,
                p = o().a8428d5e,
                h = o().a7aad8ba,
                g = o().e431f1aa,
                C = o().a7391708,
                b = o().d2dbfa92,
                y = o().cd734f66,
                f = o().c8891d06;
            class S extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? a.createElement(s.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const t = new Date(parseInt(e, 10)),
                                    r = ((e) => {
                                        const t = new Date().setHours(0, 0, 0, 0),
                                            r = t + c;
                                        return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1;
                                    })(t);
                                return -1 === r ? this._renderDateTime(t) : this._renderTodayTomorrow(r, t);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, t) => {
                            const r = m(t);
                            return a.createElement(l.Z, null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? y : f), a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, r));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = m(e),
                                r = d(e);
                            return a.createElement(l.Z, null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, r), a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: r } = this.props,
                                n = this._getWinnerName(),
                                o = e && n ? u({ team: n }) : t && r ? r : void 0;
                            return o ? a.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, o) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                r = e && e.find((e) => e.id === t);
                            return r && r.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        r = e === i.D.Scheduled,
                        n = e === i.D.InProgress,
                        o = e === i.D.Completed;
                    return a.createElement(
                        a.Fragment,
                        null,
                        r
                            ? this._renderGameScheduledDateTime()
                            : a.createElement(
                                  l.Z,
                                  null,
                                  a.createElement(
                                      s.ZP,
                                      { color: n ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case i.D.Scheduled:
                                                  return p;
                                              case i.D.InProgress:
                                                  return h;
                                              case i.D.Completed:
                                                  return g;
                                              case i.D.Postponed:
                                                  return C;
                                              case i.D.Cancelled:
                                                  return b;
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
            S.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TileHandler.78d51bba.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TileHandler"],
    {
        101298: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var r = n(459643),
                o = n(351322),
                a = n(936619);
            const i = o.iH({ component: a.Z, shouldDisplayBorder: (0, r.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        984637: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            var r = n(459643),
                o = n(351322),
                a = n(202784),
                i = n(953035),
                s = n(946409),
                c = n(497181),
                l = n(151587);
            const d = ({ entry: e }) => {
                    const t = (e.content.content.callToAction && e.content.content.callToAction.text) || "",
                        n = e.content.url,
                        r = a.useMemo(() => (n ? (0, s.s9)(n) : void 0), [n]),
                        { handleTileClick: o } = (0, c.U)(e, !!r);
                    return r ? a.createElement(i.Z, { containerStyle: l.g.containerStyle, link: r, onClick: o, text: t }) : null;
                },
                u = o.iH({ component: d, shouldDisplayBorder: (0, r.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        936619: (e, t, n) => {
            n.d(t, { Z: () => T });
            var r = n(202784),
                o = n(157396),
                a = n(325686),
                i = n(530525),
                s = n(731708),
                c = n(439592),
                l = n(659651),
                d = n(392237),
                u = n(823161),
                m = n(366635),
                p = n(165822);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderTileLower = () => {
                            const { attribution: e } = this.props;
                            return e ? this._renderUserAvatar() : this._renderEventDescription();
                        }),
                        (this._renderTileUpper = () => {
                            const { "aria-label": e, badge: t, image: n } = this.props;
                            return n ? r.createElement(r.Fragment, null, r.createElement(i.Z, { "aria-label": e, aspectMode: c.Z.COVER, image: n }), t ? r.createElement(l.Z, { align: "left", background: t.backgroundColor, bold: !0 }, t.text) : null) : null;
                        }),
                        (this._renderUserAvatar = () => {
                            const { attribution: e } = this.props;
                            return e ? r.createElement(a.Z, { style: g.accountContainer }, r.createElement(a.Z, { style: g.avatarContainer }, r.createElement(u.default, { "aria-hidden": !0, focusable: !1, size: "xLarge", uri: e.profile_image_url_https, withLink: !1 })), r.createElement(a.Z, { style: g.groupContainer }, r.createElement(m.Z, { isBlueVerified: e.is_blue_verified, isVerified: e.verified, name: e.name, nameSize: "subtext2", screenName: e.screen_name, verifiedType: e.verified_type, weight: "bold", withLink: !1, withScreenName: !0, withStackedLayout: !0 }))) : null;
                        }),
                        (this._renderEventDescription = () => {
                            const { description: e, rightControl: t } = this.props;
                            return e ? r.createElement(a.Z, { style: g.eventDescription }, r.createElement(s.ZP, { numberOfLines: 2, size: "subtext2", style: { width: "100%" }, weight: "bold" }, e), r.createElement(a.Z, { style: g.rightControl }, t || null)) : null;
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, link: n, onClick: o } = this.props;
                    return r.createElement(p.Z, { "aria-label": e, containerStyle: t, link: n, lower: this._renderTileLower(), onClick: o, upper: this._renderTileUpper(), withInteractiveStyling: !0 });
                }
            }
            const g = d.default.create((e) => ({ accountContainer: { flexDirection: "row" }, avatarContainer: { marginEnd: e.spaces.space4 }, rightControl: { marginTop: e.spaces.space2 }, groupContainer: { flexDirection: "row", flexShrink: 1 }, eventDescription: { flexDirection: "row" } })),
                C = h;
            var S = n(946409),
                b = n(927389),
                f = n(497181),
                v = n(151587),
                y = n(668214),
                Z = n(919022);
            const k = (e, t) => {
                    if (t.entry.content.content.broadcast) return Z.ZP.select(e, t.entry.content.content.broadcast.userId);
                },
                E = ({ broadcastUser: e, entry: t, feedbackItems: n }) => {
                    let a, i, s;
                    const c = t.content,
                        { content: l, image: d, url: u } = c;
                    l.standard ? ((a = l.standard.title), (i = l.standard.badge), (s = a)) : l.broadcast && ((a = e && `${e.name} ${e.screen_name}`), (i = l.broadcast.badge));
                    const m = r.useMemo(() => {
                            const e = i?.text;
                            return e ? { backgroundColor: (0, o.FZ)(i?.backgroundColorName || "") || void 0, text: e } : void 0;
                        }, [i]),
                        { handleTileClick: p } = (0, f.U)(t),
                        h = r.useMemo(() => (u ? (0, S.s9)(u) : ""), [u]),
                        g = r.useMemo(() => (s ? r.createElement(b.Z, { feedbackItems: n }) : null), [s, n]);
                    return r.createElement(C, { "aria-label": a || "", attribution: e, badge: m, containerStyle: v.g.containerStyle, description: s, image: d, link: h, onClick: p, rightControl: g });
                },
                T = (0, y.Z)().propsFromState(() => ({ broadcastUser: k }))(r.memo(E));
        },
        407920: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var r = n(459643),
                o = n(351322),
                a = n(936619);
            const i = o.iH({ component: a.Z, shouldDisplayBorder: (0, r.Z)(!1), defaultScribeNamespace: { element: "tile" } }).getHandler();
        },
        250672: (e, t, n) => {
            n.d(t, { bH: () => u });
            var r = n(332920),
                o = n.n(r),
                a = n(93074),
                i = n(810495);
            const s = o().a3484d22,
                c = o().aab2efa9,
                l = o().ba21c289,
                d = (e) => `${e.fullName || ""} ${e.score || ""}`,
                u = (e, t, n, r, o) => {
                    const u = n && o ? ((e, t) => (e && t ? e.find((e) => e.id === t) : void 0))(n, o) : void 0,
                        m = (0, a.Z)(t),
                        p = e || "",
                        h = n && n[0] ? d(n[0]) : "",
                        g = n && n[1] ? d(n[1]) : "",
                        C = r || "",
                        S = u ? c({ winner: u.fullName }) : "",
                        b = t === i.D.Completed ? (u ? S : s) : C;
                    return l({ gameCategory: p, gameState: m, accessibleGameClockPeriod: b, teamOneLabel: h, teamTwoLabel: g });
                };
        },
        497181: (e, t, n) => {
            n.d(t, { U: () => i });
            var r = n(202784),
                o = n(942893),
                a = n(725516);
            const i = (e, t = !0) => {
                const n = (0, a.z)(),
                    i = ((e) => {
                        const { clientEventInfo: t } = e.itemMetadata,
                            n = o.Z.getAllSurfaceDetails(t);
                        return n ? { items: [n] } : void 0;
                    })(e);
                r.useEffect(() => {
                    t && n.scribe({ action: "impression", data: i });
                }, []);
                return {
                    handleTileClick: r.useCallback(() => {
                        n.scribe({ action: "click", data: i });
                    }, [n, i]),
                };
            };
        },
        549323: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var r = n(459643),
                o = n(351322),
                a = n(202784),
                i = n(745185),
                s = n(946409),
                c = n(250672),
                l = n(497181),
                d = n(151587);
            const u = ({ entry: e }) => {
                    const t = e.content.content.scoreCard && e.content.content.scoreCard.scoreEventSummary.scoreEvent,
                        { category: n, eventState: r, gameClock: o, gameClockPeriod: u, participants: m, startTimeMillis: p, winnerId: h } = t || {},
                        { handleTileClick: g } = (0, l.U)(e),
                        C = e.content.url,
                        S = a.useMemo(() => (C ? (0, s.s9)(C) : ""), [C]);
                    return a.createElement(i.Z, { "aria-label": (0, c.bH)(n, r, m, u, h), category: n, containerStyle: d.g.containerStyle, gameClock: o, gameClockPeriod: u, gameState: r, link: S, onClick: g, startTimeMillis: p, teams: m, winnerId: h });
                },
                m = a.memo(u),
                p = o.iH({ component: m, shouldDisplayBorder: (0, r.Z)(!1), isFocusable: (0, r.Z)(!0) }).getHandler();
        },
        151587: (e, t, n) => {
            n.d(t, { g: () => r });
            const r = n(392237).default.create((e) => ({ containerStyle: { width: `calc(${e.spaces.space36}*5)` } }));
        },
        927389: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(247056),
                a = n(392237);
            const i = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var s = n(725516),
                c = n(851623);
            const l = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: n, isDisplayedOnMedia: a } = e,
                        s = r.useCallback((e) => (n ? r.createElement(i, { actionItems: n, onClose: e }) : null), [n]),
                        d = r.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return n && n.length > 0 ? r.createElement(o.Z, { onClick: d, renderActionMenu: s, style: l.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        93074: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(332920),
                o = n.n(r),
                a = n(810495);
            const i = o().f178e38c,
                s = o().b6da6b02,
                c = o().i9f615c8,
                l = o().f897267a,
                d = o().f93c4b6a,
                u = (e) => {
                    switch (e) {
                        case a.D.Scheduled:
                            return i;
                        case a.D.InProgress:
                            return s;
                        case a.D.Completed:
                            return c;
                        case a.D.Postponed:
                            return l;
                        case a.D.Cancelled:
                            return d;
                        default:
                            return "";
                    }
                };
        },
        810495: (e, t, n) => {
            n.d(t, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        470397: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(136728);
            var r = n(202784),
                o = n(325686),
                a = n(124964),
                i = n(392237);
            const s = ({ children: e, color: t = "gray700", size: n, style: i }) => {
                    const s = [];
                    return (
                        r.Children.forEach(e, (e) => {
                            const o = s.length;
                            e && (o > 0 && s.push(r.createElement(a.Z, { color: t, key: `middot-${o}`, size: n })), s.push(e));
                        }),
                        s.length ? r.createElement(o.Z, { style: [c.middotGroup, i] }, s) : null
                    );
                },
                c = i.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: s, value: c, ...l }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...l, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: s, onDarkBackground: i, value: [l.min, c], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(o.Z, u);
            };
        },
        165822: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(325686),
                a = n(58881),
                i = n(530732),
                s = n(392237);
            const c = s.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                l = ({ "aria-label": e, containerStyle: t, disabled: n, isCompact: l, link: d, lower: u, onClick: m, stackLayoutLowerStyle: p, stackLayoutUpperStyle: h, upper: g, withInsetFocusRing: C = !0, withInteractiveStyling: S = !1 }) => {
                    const b = a.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, insetFocusRing: C }),
                        f = r.createElement(r.Fragment, null, r.createElement(o.Z, { style: [c.defaultUpperContainerStyle, h, l && { height: "auto" }] }, g), u ? r.createElement(o.Z, { style: [c.defaultLowerContainerStyle, p] }, u) : null);
                    return r.createElement(i.Z, { "aria-label": e, disabled: n, interactive: S, interactiveStyles: S ? b : void 0, link: d, onClick: m, style: [c.root, t] }, f);
                };
        },
        953035: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(715417),
                a = n(167630),
                i = n(731708),
                s = n(392237),
                c = n(165822);
            const l = s.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto" } };
                }),
                d = ({ containerStyle: e, icon: t = o.default, iconColor: n = "primary", link: d, onClick: u, text: m, isCompact: p, disabled: h, isLoading: g, withInteractiveStyling: C }) => {
                    const S = r.useMemo(() => ({ color: s.default.theme.colors[n] }), [n]);
                    return r.createElement(c.Z, { "aria-label": m, containerStyle: [l.container, e], disabled: h, isCompact: p, link: d, lower: g ? r.createElement(a.Z, { size: "small" }) : r.createElement(i.ZP, { style: S }, m), onClick: u, stackLayoutLowerStyle: [l.lower, p ? l.compact : null], stackLayoutUpperStyle: l.upper, upper: r.createElement(t, { style: [l.icon, S] }), withInteractiveStyling: C });
                };
        },
        745185: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                o = n(165822),
                a = n(854582),
                i = n(325686),
                s = n(530525),
                c = n(731708),
                l = n(439592),
                d = n(626202),
                u = n(392237),
                m = n(615084);
            const p = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return r.createElement(i.Z, { style: C.teamNameContainer }, r.createElement(c.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: n },
                                } = this.props,
                                { imageError: o } = this.state,
                                a = (!n && !t) || o ? C.translucent : {},
                                c = n ? l.Z.exact(n.width / n.height) : l.Z.SQUARE;
                            return r.createElement(i.Z, { style: [C.imageContainer, a, e && C.compactImageContainer] }, r.createElement(s.Z, { "aria-label": "", aspectMode: c, image: n || t || "", onError: this._handleImageError, rounded: !n }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: n, winnerId: o } = this.props,
                                { color: a, id: s, score: l, secondaryScore: d } = n,
                                u = s === o,
                                h = !o,
                                S = t === m.D.Completed && !u && !h,
                                b = this._shouldRenderScore(),
                                f = this._getTeamScoreSize(p.SCORE),
                                v = d ? this._getTeamScoreSize(p.SECONDARY_SCORE) : void 0,
                                y = "Cricket" === e ? l?.split(" ")[0] : l;
                            return b ? r.createElement(i.Z, { style: [C.teamScore, S && C.losingTeamScore] }, r.createElement(c.ZP, { color: g(a), numberOfLines: 1, size: f, weight: "heavy" }, y), d ? r.createElement(c.ZP, { color: g(a), numberOfLines: 1, size: v, weight: "bold" }, d) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: t,
                                team: { secondaryScore: n },
                            } = this.props;
                            if (!!!n) return t ? "headline1" : "title4";
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
                            return e === m.D.Completed || e === m.D.InProgress;
                        });
                }
                render() {
                    const {
                            fallbackColor: e,
                            isCompact: t,
                            team: { color: n },
                        } = this.props,
                        o = { backgroundColor: (n && `rgb(${n.red}, ${n.green}, ${n.blue})`) || u.default.theme.colors[e] },
                        a = this._shouldRenderScore(),
                        s = !t || !a;
                    return r.createElement(i.Z, { style: [C.root, o, t && C.compactRoot] }, this._renderImage(), s ? this._renderTeamName() : null, this._renderScore());
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
            const C = u.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${u.default.theme.spaces.space1} + ${u.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                S = h;
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: n, gameState: o, isCompact: i, startTimeMillis: s, teams: c, winnerId: l } = this.props;
                            return r.createElement(a.Z, { category: e, gameClock: t, gameClockPeriod: n, gameState: o, startTimeMillis: s, teams: c, winnerId: l, withCategory: !i });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: n, gameState: o, isCompact: a, winnerId: i } = this.props,
                                { id: s } = e;
                            return r.createElement(S, { category: n, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: o, isCompact: a, key: s, team: e, winnerId: i });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: n, link: a, onClick: i, teams: s } = this.props;
                    if (s) {
                        const c = s && s.map(this._renderTeamRow);
                        return r.createElement(o.Z, { "aria-label": e, containerStyle: t, isCompact: n, link: a, lower: n ? void 0 : this._renderGameStatus(), onClick: i, upper: c, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            b.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(332920),
                a = n.n(o),
                i = n(731708),
                s = n(470397),
                c = n(615084);
            const l = 864e5,
                d = a().ccaa970f,
                u = a().d725a289,
                m = a().db355331,
                p = a().a8428d5e,
                h = a().a7aad8ba,
                g = a().e431f1aa,
                C = a().a7391708,
                S = a().d2dbfa92,
                b = a().cd734f66,
                f = a().c8891d06;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? r.createElement(i.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
                        }),
                        (this._renderGameScheduledDateTime = () => {
                            const { startTimeMillis: e } = this.props;
                            if (e) {
                                const t = new Date(parseInt(e, 10)),
                                    n = ((e) => {
                                        const t = new Date().setHours(0, 0, 0, 0),
                                            n = t + l;
                                        return e >= t && e < n ? 0 : e >= n && e < t + 1728e5 ? 1 : -1;
                                    })(t);
                                return -1 === n ? this._renderDateTime(t) : this._renderTodayTomorrow(n, t);
                            }
                            return null;
                        }),
                        (this._renderTodayTomorrow = (e, t) => {
                            const n = u(t);
                            return r.createElement(s.Z, null, r.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? b : f), r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, n));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = u(e),
                                n = d(e);
                            return r.createElement(s.Z, null, r.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, n), r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: n } = this.props,
                                o = this._getWinnerName(),
                                a = e && o ? m({ team: o }) : t && n ? n : void 0;
                            return a ? r.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, a) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                n = e && e.find((e) => e.id === t);
                            return n && n.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        n = e === c.D.Scheduled,
                        o = e === c.D.InProgress,
                        a = e === c.D.Completed;
                    return r.createElement(
                        r.Fragment,
                        null,
                        n
                            ? this._renderGameScheduledDateTime()
                            : r.createElement(
                                  s.Z,
                                  null,
                                  r.createElement(
                                      i.ZP,
                                      { color: o ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case c.D.Scheduled:
                                                  return p;
                                              case c.D.InProgress:
                                                  return h;
                                              case c.D.Completed:
                                                  return g;
                                              case c.D.Postponed:
                                                  return C;
                                              case c.D.Cancelled:
                                                  return S;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(a, o),
                              ),
                        t ? this._renderCategory() : null,
                    );
                }
            }
            v.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, n) => {
            n.d(t, { D: () => r });
            const r = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(157396);
            const o = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        466445: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21 12L4 2v20l17-10z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        151624: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(18198),
                o = n(661841),
                a = o.Z.currentCentroidXOfTouchesChangedAfter,
                i = o.Z.currentCentroidYOfTouchesChangedAfter,
                s = o.Z.previousCentroidXOfTouchesChangedAfter,
                c = o.Z.previousCentroidYOfTouchesChangedAfter,
                l = o.Z.currentCentroidX,
                d = o.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            r = s(t, n),
                            o = a(t, n),
                            l = c(t, n),
                            d = i(t, n),
                            u = e.dx + (o - r),
                            m = e.dy + (d - l),
                            p = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / p), (e.vy = (m - e.dy) / p), (e.dx = u), (e.dy = m), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && u._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (o) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = l(o.touchHistory)),
                                    (n.y0 = d(o.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(o, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(o, n)
                                ),
                                onResponderReject(r) {
                                    m(t, e.onPanResponderReject, r, n);
                                },
                                onResponderRelease(r) {
                                    m(t, e.onPanResponderRelease, r, n), p(t), u._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    n._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, r), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(r) {
                                    var o = r.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), m(t, e.onPanResponderEnd, r, n);
                                },
                                onResponderTerminate(r) {
                                    m(t, e.onPanResponderTerminate, r, n), p(t), u._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function m(e, t, n, o) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, o);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const h = u;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = {
                centroidDimension: function (e, t, n, o) {
                    var a = e.touchBank,
                        i = 0,
                        s = 0,
                        c = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== c) c.touchActive && c.currentTimeStamp > t && ((i += o && n ? c.currentPageX : o && !n ? c.currentPageY : !o && n ? c.previousPageX : c.previousPageY), (s = 1));
                    else
                        for (var l = 0; l < a.length; l++) {
                            var d = a[l];
                            if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                (i += o && n ? d.currentPageX : o && !n ? d.currentPageY : !o && n ? d.previousPageX : d.previousPageY), s++;
                            }
                        }
                    return s > 0 ? i / s : r.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return r.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return r.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const o = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TileHandler.3172140a.js.map

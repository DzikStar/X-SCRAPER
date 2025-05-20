"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c"],
    {
        738545: (e, t, r) => {
            r.d(t, { ZP: () => Z });
            var a = r(202784),
                n = r(325686),
                o = r(332920),
                s = r.n(o),
                l = r(212145),
                i = r(568320),
                c = r(123588),
                d = r(731708),
                m = r(280278),
                u = r(392237),
                p = r(635998);
            const g = s().i2785009,
                h = s().c778d80b,
                y = s().d9687d23,
                b = s().ac73eb5a,
                f = s().c5a9f921,
                E = (e) => {
                    const { label: t, popover: r } = e;
                    return t ? a.createElement(n.Z, { style: S.labelBar }, a.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), r ? a.createElement(p.Z, { label: t, popover: r }) : null) : null;
                },
                w = (e) => {
                    const { style: t, unit: r } = e;
                    return r ? a.createElement(d.ZP, { color: "gray700", style: [S.unitText, t], weight: "medium" }, r) : null;
                },
                C = (e) => {
                    let t,
                        r,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = h(o))) : ((o = Math.round(100 * o) / 100), (t = g(o))), (r = ((e, t) => (e < 0 ? y({ trendValueNegativePercent: t }) : 0 === e ? b : f({ trendValuePositivePercent: t })))(o, t)), o < 0 ? a.createElement(n.Z, { style: S.trendBar, testID: "trendLabel" }, a.createElement(l.default, { "aria-label": r, style: S.trendIconNeg }), a.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? a.createElement(n.Z, { style: S.trendBar, testID: "trendLabel" }, a.createElement(i.default, { "aria-label": r, style: S.trendIconZero }), a.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : a.createElement(n.Z, { style: S.trendBar, testID: "trendLabel" }, a.createElement(c.default, { "aria-label": r, style: S.trendIconPos }), a.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                S = u.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                Z = (e) => {
                    const { animated: t, count: r, label: o, popover: s, size: l, subTextList: i, trendValue: c, unit: u, value: p } = e,
                        g = u || void 0 !== c ? S.textWithMargin : void 0,
                        h = void 0 !== c ? S.textWithMargin : void 0;
                    return a.createElement(n.Z, { style: S.dataPoint }, a.createElement(E, { label: o, popover: s }), a.createElement(n.Z, { style: S.valueBar }, t ? a.createElement(m.ZP, { count: r, size: l, style: g, weight: "bold" }, p) : a.createElement(d.ZP, { size: l, style: g, weight: "bold" }, p), a.createElement(w, { style: h, unit: u }), a.createElement(C, { trendValue: c })), i);
                };
        },
        635998: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                o = r(332920),
                s = r.n(o),
                l = r(711223),
                i = r(731708),
                c = r(154003),
                d = r(157130),
                m = r(392237);
            const u = s().affbaf62,
                p = s().c388d026,
                g = m.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { label: t, popover: r } = e;
                    return a.createElement(n.Z, null, a.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(n.Z, { role: "dialog", style: g.popover }, a.createElement(n.Z, { style: g.popoverTitle }, a.createElement(i.ZP, { size: "title3", weight: "heavy" }, t)), a.createElement(n.Z, { style: g.popoverText }, r), a.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, a.createElement(n.Z, { role: "button" }, a.createElement(l.default, { "aria-label": u, style: g.iconInformation }))));
                };
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                n = r(731708),
                o = r(952428);
            const s = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                l = function ({ align: e, link: t, onPress: r, text: l, weight: i, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(o.Z, { link: t, onPress: r, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(n.ZP, { align: e, color: "primary", weight: i }, l));
                };
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                o = r(58881),
                s = r(530732),
                l = r(392237);
            const i = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: c, link: d, lower: m, onClick: u, stackLayoutLowerStyle: p, stackLayoutUpperStyle: g, upper: h, withInsetFocusRing: y = !0, withInteractiveStyling: b = !1 }) => {
                    const f = o.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: y }),
                        E = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [i.defaultUpperContainerStyle, g, c && { height: "auto" }] }, h), m ? a.createElement(n.Z, { style: [i.defaultLowerContainerStyle, p] }, m) : null);
                    return a.createElement(s.Z, { "aria-label": e, disabled: r, interactive: b, interactiveStyles: b ? f : void 0, link: d, onClick: u, style: [i.root, t] }, E);
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => f });
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
            class g extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return a.createElement(s.Z, { style: y.teamNameContainer }, a.createElement(i.ZP, { color: h(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: r },
                                } = this.props,
                                { imageError: n } = this.state,
                                o = (!r && !t) || n ? y.translucent : {},
                                i = r ? c.Z.exact(r.width / r.height) : c.Z.SQUARE;
                            return a.createElement(s.Z, { style: [y.imageContainer, o, e && y.compactImageContainer] }, a.createElement(l.Z, { "aria-label": "", aspectMode: i, image: r || t || "", onError: this._handleImageError, rounded: !r }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: r, winnerId: n } = this.props,
                                { color: o, id: l, score: c, secondaryScore: d } = r,
                                m = l === n,
                                g = !n,
                                b = t === u.D.Completed && !m && !g,
                                f = this._shouldRenderScore(),
                                E = this._getTeamScoreSize(p.SCORE),
                                w = d ? this._getTeamScoreSize(p.SECONDARY_SCORE) : void 0,
                                C = "Cricket" === e ? c?.split(" ")[0] : c;
                            return f ? a.createElement(s.Z, { style: [y.teamScore, b && y.losingTeamScore] }, a.createElement(i.ZP, { color: h(o), numberOfLines: 1, size: E, weight: "heavy" }, C), d ? a.createElement(i.ZP, { color: h(o), numberOfLines: 1, size: w, weight: "bold" }, d) : null) : null;
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
                    return a.createElement(s.Z, { style: [y.root, n, t && y.compactRoot] }, this._renderImage(), l ? this._renderTeamName() : null, this._renderScore());
                }
            }
            function h(e) {
                return e
                    ? (function (e) {
                          return (0, d.vm)(e) > 0.5 ? "alwaysBaseGray1100" : "white";
                      })(e)
                    : "white";
            }
            g.defaultProps = { isCompact: !1 };
            const y = m.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${m.default.theme.spaces.space1} + ${m.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                b = g;
            class f extends a.Component {
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
            f.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => w });
            var a = r(202784),
                n = r(332920),
                o = r.n(n),
                s = r(731708),
                l = r(470397),
                i = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                m = o().d725a289,
                u = o().db355331,
                p = o().a8428d5e,
                g = o().a7aad8ba,
                h = o().e431f1aa,
                y = o().a7391708,
                b = o().d2dbfa92,
                f = o().cd734f66,
                E = o().c8891d06;
            class w extends a.Component {
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
                            return a.createElement(l.Z, null, a.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? f : E), a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, r));
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
                                                  return g;
                                              case i.D.Completed:
                                                  return h;
                                              case i.D.Postponed:
                                                  return y;
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
            w.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, r) => {
            r.d(t, { D: () => a });
            const a = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        143095: (e, t, r) => {
            r.d(t, { O: () => n });
            var a = r(202784);
            function n(e) {
                const [t, r] = a.useState(e);
                return [
                    t,
                    a.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return r(e);
                            r((e) => !e);
                        };
                        return (e.toTrue = r.bind(null, !0)), (e.toFalse = r.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
        338940: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(136728);
            var a = r(688356);
            function n(e) {
                const t = [],
                    r = (0, a.Z)(e);
                for (let e = 0; e < r.length; e++) {
                    const a = r[e].screenName;
                    t.push(a);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.1e95171a.js.map

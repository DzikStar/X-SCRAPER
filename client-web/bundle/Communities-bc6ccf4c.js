"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c", "icons/IconFollowingStroke-js", "icons/IconHashStroke-js", "icons/IconPinStrokeOff-js", "icons/IconSound-js", "icons/IconStarStroke-js"],
    {
        738545: (e, t, r) => {
            r.d(t, { ZP: () => S });
            var a = r(202784),
                n = r(325686),
                o = r(111677),
                l = r.n(o),
                i = r(212145),
                s = r(568320),
                c = r(123588),
                d = r(731708),
                m = r(280278),
                u = r(392237),
                p = r(635998);
            const h = l().i2785009,
                g = l().c778d80b,
                y = l().d9687d23,
                b = l().ac73eb5a,
                f = l().c5a9f921,
                E = (e) => {
                    const { label: t, popover: r } = e;
                    return t ? a.createElement(n.Z, { style: Z.labelBar }, a.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), r ? a.createElement(p.Z, { label: t, popover: r }) : null) : null;
                },
                w = (e) => {
                    const { style: t, unit: r } = e;
                    return r ? a.createElement(d.ZP, { color: "gray700", style: [Z.unitText, t], weight: "medium" }, r) : null;
                },
                v = (e) => {
                    let t,
                        r,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = g(o))) : ((o = Math.round(100 * o) / 100), (t = h(o))), (r = ((e, t) => (e < 0 ? y({ trendValueNegativePercent: t }) : 0 === e ? b : f({ trendValuePositivePercent: t })))(o, t)), o < 0 ? a.createElement(n.Z, { style: Z.trendBar, testID: "trendLabel" }, a.createElement(i.default, { "aria-label": r, style: Z.trendIconNeg }), a.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? a.createElement(n.Z, { style: Z.trendBar, testID: "trendLabel" }, a.createElement(s.default, { "aria-label": r, style: Z.trendIconZero }), a.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : a.createElement(n.Z, { style: Z.trendBar, testID: "trendLabel" }, a.createElement(c.default, { "aria-label": r, style: Z.trendIconPos }), a.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                Z = u.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                S = (e) => {
                    const { animated: t, count: r, label: o, popover: l, size: i, subTextList: s, trendValue: c, unit: u, value: p } = e,
                        h = u || void 0 !== c ? Z.textWithMargin : void 0,
                        g = void 0 !== c ? Z.textWithMargin : void 0;
                    return a.createElement(n.Z, { style: Z.dataPoint }, a.createElement(E, { label: o, popover: l }), a.createElement(n.Z, { style: Z.valueBar }, t ? a.createElement(m.ZP, { count: r, size: i, style: h, weight: "bold" }, p) : a.createElement(d.ZP, { size: i, style: h, weight: "bold" }, p), a.createElement(w, { style: g, unit: u }), a.createElement(v, { trendValue: c })), s);
                };
        },
        635998: (e, t, r) => {
            r.d(t, { Z: () => g });
            var a = r(202784),
                n = r(325686),
                o = r(111677),
                l = r.n(o),
                i = r(711223),
                s = r(731708),
                c = r(154003),
                d = r(157130),
                m = r(392237);
            const u = l().affbaf62,
                p = l().c388d026,
                h = m.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: r } = e;
                    return a.createElement(n.Z, null, a.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => a.createElement(n.Z, { role: "dialog", style: h.popover }, a.createElement(n.Z, { style: h.popoverTitle }, a.createElement(s.ZP, { size: "title3", weight: "heavy" }, t)), a.createElement(n.Z, { style: h.popoverText }, r), a.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, a.createElement(n.Z, { role: "button" }, a.createElement(i.default, { "aria-label": u, style: h.iconInformation }))));
                };
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784),
                n = r(731708),
                o = r(952428);
            const l = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                i = function ({ align: e, link: t, onPress: r, text: i, weight: s, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(o.Z, { link: t, onPress: r, style: [l.root, c && l.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(n.ZP, { align: e, color: "primary", weight: s }, i));
                };
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                o = r(58881),
                l = r(530732),
                i = r(392237);
            const s = i.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: c, isCompact: d, link: m, lower: u, onClick: p, stackLayoutLowerStyle: h, stackLayoutUpperStyle: g, upper: y, withInsetFocusRing: b = !0, withInteractiveStyling: f = !1 }) => {
                    const E = c ?? o.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, insetFocusRing: b }),
                        w = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, y), u ? a.createElement(n.Z, { style: [s.defaultLowerContainerStyle, h] }, u) : null);
                    return a.createElement(l.Z, { "aria-label": e, disabled: r, interactive: f, interactiveStyles: f ? E : void 0, link: m, onClick: p, style: [s.root, t] }, w);
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                n = r(165822),
                o = r(854582),
                l = r(325686),
                i = r(530525),
                s = r(731708),
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
                            return a.createElement(l.Z, { style: y.teamNameContainer }, a.createElement(s.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: r },
                                } = this.props,
                                { imageError: n } = this.state,
                                o = (!r && !t) || n ? y.translucent : {},
                                s = r ? c.Z.exact(r.width / r.height) : c.Z.SQUARE;
                            return a.createElement(l.Z, { style: [y.imageContainer, o, e && y.compactImageContainer] }, a.createElement(i.Z, { "aria-label": "", aspectMode: s, image: r || t || "", onError: this._handleImageError, rounded: !r }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: r, winnerId: n } = this.props,
                                { color: o, id: i, score: c, secondaryScore: d } = r,
                                m = i === n,
                                h = !n,
                                b = t === u.D.Completed && !m && !h,
                                f = this._shouldRenderScore(),
                                E = this._getTeamScoreSize(p.SCORE),
                                w = d ? this._getTeamScoreSize(p.SECONDARY_SCORE) : void 0,
                                v = "Cricket" === e ? c?.split(" ")[0] : c;
                            return f ? a.createElement(l.Z, { style: [y.teamScore, b && y.losingTeamScore] }, a.createElement(s.ZP, { color: g(o), numberOfLines: 1, size: E, weight: "heavy" }, v), d ? a.createElement(s.ZP, { color: g(o), numberOfLines: 1, size: w, weight: "bold" }, d) : null) : null;
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
                        i = !t || !o;
                    return a.createElement(l.Z, { style: [y.root, n, t && y.compactRoot] }, this._renderImage(), i ? this._renderTeamName() : null, this._renderScore());
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
            const y = m.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${m.default.theme.spaces.space1} + ${m.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                b = h;
            class f extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: r, gameState: n, isCompact: l, startTimeMillis: i, teams: s, winnerId: c } = this.props;
                            return a.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: r, gameState: n, startTimeMillis: i, teams: s, winnerId: c, withCategory: !l });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: r, gameState: n, isCompact: o, winnerId: l } = this.props,
                                { id: i } = e;
                            return a.createElement(b, { category: r, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: n, isCompact: o, key: i, team: e, winnerId: l });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: r, link: o, onClick: l, teams: i } = this.props;
                    if (i) {
                        const s = i && i.map(this._renderTeamRow);
                        return a.createElement(n.Z, { "aria-label": e, containerStyle: t, isCompact: r, link: o, lower: r ? void 0 : this._renderGameStatus(), onClick: l, upper: s, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            f.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => w });
            var a = r(202784),
                n = r(111677),
                o = r.n(n),
                l = r(731708),
                i = r(470397),
                s = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                m = o().d725a289,
                u = o().db355331,
                p = o().a8428d5e,
                h = o().a7aad8ba,
                g = o().e431f1aa,
                y = o().a7391708,
                b = o().d2dbfa92,
                f = o().cd734f66,
                E = o().c8891d06;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? a.createElement(l.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
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
                            return a.createElement(i.Z, null, a.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? f : E), a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, r));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = m(e),
                                r = d(e);
                            return a.createElement(i.Z, null, a.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, r), a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: r } = this.props,
                                n = this._getWinnerName(),
                                o = e && n ? u({ team: n }) : t && r ? r : void 0;
                            return o ? a.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, o) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                r = e && e.find((e) => e.id === t);
                            return r && r.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        r = e === s.D.Scheduled,
                        n = e === s.D.InProgress,
                        o = e === s.D.Completed;
                    return a.createElement(
                        a.Fragment,
                        null,
                        r
                            ? this._renderGameScheduledDateTime()
                            : a.createElement(
                                  i.Z,
                                  null,
                                  a.createElement(
                                      l.ZP,
                                      { color: n ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case s.D.Scheduled:
                                                  return p;
                                              case s.D.InProgress:
                                                  return h;
                                              case s.D.Completed:
                                                  return g;
                                              case s.D.Postponed:
                                                  return y;
                                              case s.D.Cancelled:
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
        705865: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zm19.75-7.22l-4.141 6.21L16.1 9.7l1.2-1.6 1.954 1.47 2.969-4.46 1.664 1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        721569: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        963879: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.896 11.553L20.12 16H13v5l-1 2-1-2v-3.752L14.248 14h2.636l-.776-1.553 1.789-.895zm3.813-7.843l-17.999 18-.707-.707-.707-.707L6.592 16H3.88L7 9.76V4.5C7 3.121 8.122 2 9.5 2h5C15.878 2 17 3.121 17 4.5v1.092l3.296-3.296.707.707.707.707zm-6.71 3.882V4.5c0-.275-.224-.5-.5-.5h-5c-.276 0-.5.225-.5.5v5.732L7.115 14h1.476l6.408-6.408z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        106186: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                o = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.46cab4da.js.map

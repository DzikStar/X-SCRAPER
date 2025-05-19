"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c"],
    {
        738545: (e, t, r) => {
            r.d(t, { ZP: () => v });
            var n = r(202784),
                a = r(325686),
                o = r(332920),
                i = r.n(o),
                s = r(212145),
                l = r(568320),
                c = r(123588),
                d = r(731708),
                u = r(280278),
                m = r(392237),
                p = r(635998);
            const h = i().i2785009,
                g = i().c778d80b,
                f = i().d9687d23,
                b = i().ac73eb5a,
                y = i().c5a9f921,
                E = (e) => {
                    const { label: t, popover: r } = e;
                    return t ? n.createElement(a.Z, { style: w.labelBar }, n.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), r ? n.createElement(p.Z, { label: t, popover: r }) : null) : null;
                },
                C = (e) => {
                    const { style: t, unit: r } = e;
                    return r ? n.createElement(d.ZP, { color: "gray700", style: [w.unitText, t], weight: "medium" }, r) : null;
                },
                S = (e) => {
                    let t,
                        r,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = g(o))) : ((o = Math.round(100 * o) / 100), (t = h(o))), (r = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? b : y({ trendValuePositivePercent: t })))(o, t)), o < 0 ? n.createElement(a.Z, { style: w.trendBar, testID: "trendLabel" }, n.createElement(s.default, { "aria-label": r, style: w.trendIconNeg }), n.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? n.createElement(a.Z, { style: w.trendBar, testID: "trendLabel" }, n.createElement(l.default, { "aria-label": r, style: w.trendIconZero }), n.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : n.createElement(a.Z, { style: w.trendBar, testID: "trendLabel" }, n.createElement(c.default, { "aria-label": r, style: w.trendIconPos }), n.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                w = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                v = (e) => {
                    const { animated: t, count: r, label: o, popover: i, size: s, subTextList: l, trendValue: c, unit: m, value: p } = e,
                        h = m || void 0 !== c ? w.textWithMargin : void 0,
                        g = void 0 !== c ? w.textWithMargin : void 0;
                    return n.createElement(a.Z, { style: w.dataPoint }, n.createElement(E, { label: o, popover: i }), n.createElement(a.Z, { style: w.valueBar }, t ? n.createElement(u.ZP, { count: r, size: s, style: h, weight: "bold" }, p) : n.createElement(d.ZP, { size: s, style: h, weight: "bold" }, p), n.createElement(C, { style: g, unit: m }), n.createElement(S, { trendValue: c })), l);
                };
        },
        635998: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(325686),
                o = r(332920),
                i = r.n(o),
                s = r(711223),
                l = r(731708),
                c = r(154003),
                d = r(157130),
                u = r(392237);
            const m = i().affbaf62,
                p = i().c388d026,
                h = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: r } = e;
                    return n.createElement(a.Z, null, n.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => n.createElement(a.Z, { role: "dialog", style: h.popover }, n.createElement(a.Z, { style: h.popoverTitle }, n.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), n.createElement(a.Z, { style: h.popoverText }, r), n.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, p)), withArrow: !0 }, n.createElement(a.Z, { role: "button" }, n.createElement(s.default, { "aria-label": m, style: h.iconInformation }))));
                };
        },
        941978: (e, t, r) => {
            r.d(t, { C: () => n });
            class n {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const r = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = r), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new n();
        },
        491915: (e, t, r) => {
            r.d(t, { ZP: () => f });
            r(571372);
            var n = r(202784),
                a = r(325686),
                o = r(392237),
                i = r(332920),
                s = r.n(i),
                l = r(643442),
                c = r(466445),
                d = r(731708),
                u = r(154003),
                m = r(173739);
            const p = s().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [r, o] = n.useState(t),
                    [i, s] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        a.Z,
                        { style: g.container },
                        n.createElement(u.ZP, {
                            "aria-label": r ? "Pause" : "Play",
                            icon: r ? n.createElement(l.default, null) : n.createElement(c.default, null),
                            onClick: function () {
                                r ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(d.ZP, { style: g.frames }, `${i}/${e.totalFrames}`),
                        n.createElement(
                            a.Z,
                            { style: g.slider },
                            n.createElement(m.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const g = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function f(e) {
                const { autoplay: t = !0, loop: r = !1, onAnimationEnd: o, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = n.useRef(void 0),
                    d = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [m, p] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: a } = d.current;
                        a ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((a) => {
                                if (a && u.current) {
                                    const o = { container: u.current, renderer: "svg", loop: r, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = a.loadAnimation(o);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof s && s(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            n(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, r, o, i, s, l]),
                    n.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    n.createElement(a.Z, null, n.createElement(a.Z, { style: [e.animationContainerStyle, E.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && m && n.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    n.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => r.e("ondemand.LottieWeb").then(r.t.bind(r, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const E = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                a = r(332920),
                o = r.n(a),
                i = r(149170),
                s = r(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: r = i.default, iconSize: a = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: p, withDarkBackground: h = !1 }) {
                const g = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(s.ZP, { Icon: r, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: f, iconSize: a, isDisabled: o, onPress: g, preventFocusShift: d, renderMenu: u, style: m, testID: p });
            };
        },
        30183: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                a = r(731708),
                o = r(952428);
            const i = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: r, text: s, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return n.createElement(o.Z, { link: t, onPress: r, style: [i.root, c && i.withBottomRadius], withDarkerInteractiveBackground: d }, n.createElement(a.ZP, { align: e, color: "primary", weight: l }, s));
                };
        },
        165822: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                a = r(325686),
                o = r(58881),
                i = r(530732),
                s = r(392237);
            const l = s.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: c, link: d, lower: u, onClick: m, stackLayoutLowerStyle: p, stackLayoutUpperStyle: h, upper: g, withInsetFocusRing: f = !0, withInteractiveStyling: b = !1 }) => {
                    const y = o.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, insetFocusRing: f }),
                        E = n.createElement(n.Fragment, null, n.createElement(a.Z, { style: [l.defaultUpperContainerStyle, h, c && { height: "auto" }] }, g), u ? n.createElement(a.Z, { style: [l.defaultLowerContainerStyle, p] }, u) : null);
                    return n.createElement(i.Z, { "aria-label": e, disabled: r, interactive: b, interactiveStyles: b ? y : void 0, link: d, onClick: m, style: [l.root, t] }, E);
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => y });
            var n = r(202784),
                a = r(165822),
                o = r(854582),
                i = r(325686),
                s = r(530525),
                l = r(731708),
                c = r(439592),
                d = r(626202),
                u = r(392237),
                m = r(615084);
            const p = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imageError: !1 }),
                        (this._renderTeamName = () => {
                            const {
                                team: { color: e, shortName: t },
                            } = this.props;
                            return n.createElement(i.Z, { style: f.teamNameContainer }, n.createElement(l.ZP, { color: g(e), numberOfLines: 1, style: { textOverflow: "ellipsis" }, weight: "heavy" }, t));
                        }),
                        (this._renderImage = () => {
                            const {
                                    isCompact: e,
                                    team: { imageUrl: t, logo: r },
                                } = this.props,
                                { imageError: a } = this.state,
                                o = (!r && !t) || a ? f.translucent : {},
                                l = r ? c.Z.exact(r.width / r.height) : c.Z.SQUARE;
                            return n.createElement(i.Z, { style: [f.imageContainer, o, e && f.compactImageContainer] }, n.createElement(s.Z, { "aria-label": "", aspectMode: l, image: r || t || "", onError: this._handleImageError, rounded: !r }));
                        }),
                        (this._handleImageError = () => {
                            this.setState({ imageError: !0 });
                        }),
                        (this._renderScore = () => {
                            const { category: e, gameState: t, team: r, winnerId: a } = this.props,
                                { color: o, id: s, score: c, secondaryScore: d } = r,
                                u = s === a,
                                h = !a,
                                b = t === m.D.Completed && !u && !h,
                                y = this._shouldRenderScore(),
                                E = this._getTeamScoreSize(p.SCORE),
                                C = d ? this._getTeamScoreSize(p.SECONDARY_SCORE) : void 0,
                                S = "Cricket" === e ? c?.split(" ")[0] : c;
                            return y ? n.createElement(i.Z, { style: [f.teamScore, b && f.losingTeamScore] }, n.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: E, weight: "heavy" }, S), d ? n.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: C, weight: "bold" }, d) : null) : null;
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
                            return e === m.D.Completed || e === m.D.InProgress;
                        });
                }
                render() {
                    const {
                            fallbackColor: e,
                            isCompact: t,
                            team: { color: r },
                        } = this.props,
                        a = { backgroundColor: (r && `rgb(${r.red}, ${r.green}, ${r.blue})`) || u.default.theme.colors[e] },
                        o = this._shouldRenderScore(),
                        s = !t || !o;
                    return n.createElement(i.Z, { style: [f.root, a, t && f.compactRoot] }, this._renderImage(), s ? this._renderTeamName() : null, this._renderScore());
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
            const f = u.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${u.default.theme.spaces.space1} + ${u.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                b = h;
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: r, gameState: a, isCompact: i, startTimeMillis: s, teams: l, winnerId: c } = this.props;
                            return n.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: r, gameState: a, startTimeMillis: s, teams: l, winnerId: c, withCategory: !i });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: r, gameState: a, isCompact: o, winnerId: i } = this.props,
                                { id: s } = e;
                            return n.createElement(b, { category: r, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: a, isCompact: o, key: s, team: e, winnerId: i });
                        });
                }
                render() {
                    const { "aria-label": e, containerStyle: t, isCompact: r, link: o, onClick: i, teams: s } = this.props;
                    if (s) {
                        const l = s && s.map(this._renderTeamRow);
                        return n.createElement(a.Z, { "aria-label": e, containerStyle: t, isCompact: r, link: o, lower: r ? void 0 : this._renderGameStatus(), onClick: i, upper: l, withInteractiveStyling: !0 });
                    }
                    return null;
                }
            }
            y.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                a = r(332920),
                o = r.n(a),
                i = r(731708),
                s = r(470397),
                l = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                u = o().d725a289,
                m = o().db355331,
                p = o().a8428d5e,
                h = o().a7aad8ba,
                g = o().e431f1aa,
                f = o().a7391708,
                b = o().d2dbfa92,
                y = o().cd734f66,
                E = o().c8891d06;
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderCategory = () => {
                            const { category: e } = this.props;
                            return e ? n.createElement(i.ZP, { align: "left", numberOfLines: 1, size: "subtext2", weight: "bold" }, e) : null;
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
                            const r = u(t);
                            return n.createElement(s.Z, null, n.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? y : E), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, r));
                        }),
                        (this._renderDateTime = (e) => {
                            const t = u(e),
                                r = d(e);
                            return n.createElement(s.Z, null, n.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, r), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t));
                        }),
                        (this._renderGameStateValue = (e, t) => {
                            const { gameClockPeriod: r } = this.props,
                                a = this._getWinnerName(),
                                o = e && a ? m({ team: a }) : t && r ? r : void 0;
                            return o ? n.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, o) : null;
                        }),
                        (this._getWinnerName = () => {
                            const { teams: e, winnerId: t } = this.props,
                                r = e && e.find((e) => e.id === t);
                            return r && r.shortName;
                        });
                }
                render() {
                    const { gameState: e, withCategory: t } = this.props,
                        r = e === l.D.Scheduled,
                        a = e === l.D.InProgress,
                        o = e === l.D.Completed;
                    return n.createElement(
                        n.Fragment,
                        null,
                        r
                            ? this._renderGameScheduledDateTime()
                            : n.createElement(
                                  s.Z,
                                  null,
                                  n.createElement(
                                      i.ZP,
                                      { color: a ? "magenta500" : "gray700", numberOfLines: 1, size: "subtext2", weight: "bold" },
                                      ((e) => {
                                          switch (e) {
                                              case l.D.Scheduled:
                                                  return p;
                                              case l.D.InProgress:
                                                  return h;
                                              case l.D.Completed:
                                                  return g;
                                              case l.D.Postponed:
                                                  return f;
                                              case l.D.Cancelled:
                                                  return b;
                                              default:
                                                  return null;
                                          }
                                      })(e),
                                  ),
                                  this._renderGameStateValue(o, a),
                              ),
                        t ? this._renderCategory() : null,
                    );
                }
            }
            C.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, r) => {
            r.d(t, { D: () => n });
            const n = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        40644: (e, t, r) => {
            r.d(t, { ZP: () => S });
            var n = r(202784),
                a = r(325686),
                o = r(461756),
                i = r(731708),
                s = r(58881),
                l = r(530732),
                c = r(224162),
                d = r(491915),
                u = r(392237),
                m = r(551611),
                p = r(332920),
                h = r.n(p),
                g = r(891198),
                f = r(537392),
                b = r(280278);
            const y = h().e8d93005,
                E = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const r = (0, g.wl)(t, !0);
                    return n.createElement(f.ZP, null, ({ containerWidth: a }) => {
                        return n.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [E.count, ((o = a), o < u.default.theme.breakpoints.small && E.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(a) || r.length >= 5 ? y(t) : r) : void 0);
                        var o;
                    });
                };
            class S extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: r, color: o, decoration: s } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: l }) => n.createElement(i.ZP, { color: e ? r : o, dir: l, style: [Z.inner, e && "blue500" === r && Z.blue500] }, n.createElement(a.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: r, hoverLabel: a, iconSize: o, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = s.Z.generate({ backgroundColor: u.default.theme.colors[r], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                p = d && i && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: a, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, v[p ? "haloBackground" : r], !c && Z.iconBackground, "small" === o && Z.iconSmallBoundingBox, p && Z.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: r, isDisabled: a, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: p, transitionAnimationUrl: h } = this.props;
                            if (!u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && p) return n.createElement(d.ZP, { animation: h || m.Bf, animationContainerStyle: w[t], animationStyle: k, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const o = r && e ? e : this.props.Icon;
                                return n.createElement(o, { style: [w[t], !a && i && Z.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: r } = this.props;
                            r || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: r, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: m, link: p, preventFocusShift: h, renderMenu: g, renderWrapper: f = n.Fragment, style: b, testID: y } = this.props,
                        E = !u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return n.createElement(
                        a.Z,
                        { style: [Z.root, b] },
                        n.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : n.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: r, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: p, onClick: this._handlePress, preventFocusShift: h, renderMenu: g, style: [Z.triggerAreaRoot, Z.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: r, isPressed: n } = e,
                                          a = i || r || n || t;
                                      return this._renderContent(a, e);
                                  }),
                        ),
                        E ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            S.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                Z = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                P = "224.5%",
                k = { width: P, height: P };
        },
        551611: (e, t, r) => {
            r.d(t, { Bf: () => a, ZP: () => i });
            var n = r(941978);
            const a = "https://abs.twimg.com/sticky/animations/like.4.json";
            class o extends n.C {
                check(e) {
                    return super.check(e ?? a);
                }
            }
            const i = new o();
        },
        143095: (e, t, r) => {
            r.d(t, { O: () => a });
            var n = r(202784);
            function a(e) {
                const [t, r] = n.useState(e);
                return [
                    t,
                    n.useMemo(() => {
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
            r.d(t, { Z: () => a });
            r(136728);
            var n = r(688356);
            function a(e) {
                const t = [],
                    r = (0, n.Z)(e);
                for (let e = 0; e < r.length; e++) {
                    const n = r[e].screenName;
                    t.push(n);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.8f9db1da.js.map

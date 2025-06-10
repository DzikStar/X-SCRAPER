"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c", "icons/IconMediumTrashcanStroke-js", "icons/IconModeratorClose-js", "icons/IconPersonArrowLeft-js", "icons/IconStarStroke-js"],
    {
        738545: (e, t, r) => {
            r.d(t, { ZP: () => w });
            var n = r(202784),
                a = r(325686),
                o = r(111677),
                i = r.n(o),
                s = r(212145),
                l = r(568320),
                c = r(123588),
                d = r(731708),
                u = r(280278),
                m = r(392237),
                h = r(635998);
            const p = i().i2785009,
                g = i().c778d80b,
                f = i().d9687d23,
                y = i().ac73eb5a,
                b = i().c5a9f921,
                E = (e) => {
                    const { label: t, popover: r } = e;
                    return t ? n.createElement(a.Z, { style: S.labelBar }, n.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), r ? n.createElement(h.Z, { label: t, popover: r }) : null) : null;
                },
                v = (e) => {
                    const { style: t, unit: r } = e;
                    return r ? n.createElement(d.ZP, { color: "gray700", style: [S.unitText, t], weight: "medium" }, r) : null;
                },
                C = (e) => {
                    let t,
                        r,
                        { trendValue: o } = e;
                    return void 0 === o ? null : (Math.abs(o) < 0.1 ? ((o = Math.round(1e3 * o) / 1e3), (t = g(o))) : ((o = Math.round(100 * o) / 100), (t = p(o))), (r = ((e, t) => (e < 0 ? f({ trendValueNegativePercent: t }) : 0 === e ? y : b({ trendValuePositivePercent: t })))(o, t)), o < 0 ? n.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, n.createElement(s.default, { "aria-label": r, style: S.trendIconNeg }), n.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === o ? n.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, n.createElement(l.default, { "aria-label": r, style: S.trendIconZero }), n.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : n.createElement(a.Z, { style: S.trendBar, testID: "trendLabel" }, n.createElement(c.default, { "aria-label": r, style: S.trendIconPos }), n.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                S = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                w = (e) => {
                    const { animated: t, count: r, label: o, popover: i, size: s, subTextList: l, trendValue: c, unit: m, value: h } = e,
                        p = m || void 0 !== c ? S.textWithMargin : void 0,
                        g = void 0 !== c ? S.textWithMargin : void 0;
                    return n.createElement(a.Z, { style: S.dataPoint }, n.createElement(E, { label: o, popover: i }), n.createElement(a.Z, { style: S.valueBar }, t ? n.createElement(u.ZP, { count: r, size: s, style: p, weight: "bold" }, h) : n.createElement(d.ZP, { size: s, style: p, weight: "bold" }, h), n.createElement(v, { style: g, unit: m }), n.createElement(C, { trendValue: c })), l);
                };
        },
        635998: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(325686),
                o = r(111677),
                i = r.n(o),
                s = r(711223),
                l = r(731708),
                c = r(154003),
                d = r(157130),
                u = r(392237);
            const m = i().affbaf62,
                h = i().c388d026,
                p = u.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                g = (e) => {
                    const { label: t, popover: r } = e;
                    return n.createElement(a.Z, null, n.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => n.createElement(a.Z, { role: "dialog", style: p.popover }, n.createElement(a.Z, { style: p.popoverTitle }, n.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), n.createElement(a.Z, { style: p.popoverText }, r), n.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, h)), withArrow: !0 }, n.createElement(a.Z, { role: "button" }, n.createElement(s.default, { "aria-label": m, style: p.iconInformation }))));
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
                i = r(111677),
                s = r.n(i),
                l = r(643442),
                c = r(466445),
                d = r(731708),
                u = r(154003),
                m = r(173739);
            const h = s().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
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
                                "aria-label": h,
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
                    [m, h] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: a } = d.current;
                        a ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((a) => {
                                if (a && u.current) {
                                    const o = { container: u.current, renderer: "svg", loop: r, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = a.loadAnimation(o);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof s && s(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (l.play(), i && i());
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
                    n.createElement(a.Z, null, n.createElement(a.Z, { style: [e.animationContainerStyle, E.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && m && n.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            f.Prepare = function () {
                return (
                    n.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => r.e("ondemand.LottieWeb").then(r.t.bind(r, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const E = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                a = r(111677),
                o = r.n(a),
                i = r(149170),
                s = r(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: r = i.default, iconSize: a = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const g = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(s.ZP, { Icon: r, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: f, iconSize: a, isDisabled: o, onPress: g, preventFocusShift: d, renderMenu: u, style: m, testID: h });
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
                c = ({ "aria-label": e, containerStyle: t, disabled: r, interactiveStyles: c, isCompact: d, link: u, lower: m, onClick: h, stackLayoutLowerStyle: p, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: y = !0, withInteractiveStyling: b = !1 }) => {
                    const E = c ?? o.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, insetFocusRing: y }),
                        v = n.createElement(n.Fragment, null, n.createElement(a.Z, { style: [l.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), m ? n.createElement(a.Z, { style: [l.defaultLowerContainerStyle, p] }, m) : null);
                    return n.createElement(i.Z, { "aria-label": e, disabled: r, interactive: b, interactiveStyles: b ? E : void 0, link: u, onClick: h, style: [l.root, t] }, v);
                };
        },
        745185: (e, t, r) => {
            r.d(t, { Z: () => b });
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
            const h = Object.freeze({ SCORE: "score", SECONDARY_SCORE: "secondaryScore" });
            class p extends n.Component {
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
                                p = !a,
                                y = t === m.D.Completed && !u && !p,
                                b = this._shouldRenderScore(),
                                E = this._getTeamScoreSize(h.SCORE),
                                v = d ? this._getTeamScoreSize(h.SECONDARY_SCORE) : void 0,
                                C = "Cricket" === e ? c?.split(" ")[0] : c;
                            return b ? n.createElement(i.Z, { style: [f.teamScore, y && f.losingTeamScore] }, n.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: E, weight: "heavy" }, C), d ? n.createElement(l.ZP, { color: g(o), numberOfLines: 1, size: v, weight: "bold" }, d) : null) : null;
                        }),
                        (this._getTeamScoreSize = (e) => {
                            const {
                                isCompact: t,
                                team: { secondaryScore: r },
                            } = this.props;
                            if (!!!r) return t ? "headline1" : "title4";
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
            p.defaultProps = { isCompact: !1 };
            const f = u.default.create((e) => ({ root: { flexDirection: "row", height: e.spaces.space48, paddingHorizontal: e.spaces.space12 }, imageContainer: { alignSelf: "center", width: e.spaces.space32, marginEnd: e.spaces.space12 }, compactImageContainer: { width: e.spaces.space20 }, compactRoot: { height: `calc(${e.spaces.space48} - (${u.default.theme.spaces.space1} + ${u.default.theme.spaces.space2}))` }, losingTeamScore: { opacity: 0.5 }, teamNameContainer: { alignSelf: "center", flexShrink: 1 }, teamScore: { flexGrow: 2, alignItems: "flex-end", alignSelf: "center" }, translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 } })),
                y = p;
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderGameStatus = () => {
                            const { category: e, gameClock: t, gameClockPeriod: r, gameState: a, isCompact: i, startTimeMillis: s, teams: l, winnerId: c } = this.props;
                            return n.createElement(o.Z, { category: e, gameClock: t, gameClockPeriod: r, gameState: a, startTimeMillis: s, teams: l, winnerId: c, withCategory: !i });
                        }),
                        (this._renderTeamRow = (e, t) => {
                            const { category: r, gameState: a, isCompact: o, winnerId: i } = this.props,
                                { id: s } = e;
                            return n.createElement(y, { category: r, fallbackColor: t % 2 == 0 ? "gray300" : "gray700", gameState: a, isCompact: o, key: s, team: e, winnerId: i });
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
            b.defaultProps = { isCompact: !1 };
        },
        854582: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                a = r(111677),
                o = r.n(a),
                i = r(731708),
                s = r(470397),
                l = r(615084);
            const c = 864e5,
                d = o().ccaa970f,
                u = o().d725a289,
                m = o().db355331,
                h = o().a8428d5e,
                p = o().a7aad8ba,
                g = o().e431f1aa,
                f = o().a7391708,
                y = o().d2dbfa92,
                b = o().cd734f66,
                E = o().c8891d06;
            class v extends n.Component {
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
                            return n.createElement(s.Z, null, n.createElement(i.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, 0 === e ? b : E), n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, r));
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
                                                  return h;
                                              case l.D.InProgress:
                                                  return p;
                                              case l.D.Completed:
                                                  return g;
                                              case l.D.Postponed:
                                                  return f;
                                              case l.D.Cancelled:
                                                  return y;
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
            v.defaultProps = { withCategory: !0 };
        },
        615084: (e, t, r) => {
            r.d(t, { D: () => n });
            const n = Object.freeze({ Scheduled: "Scheduled", InProgress: "InProgress", Completed: "Completed", Postponed: "Postponed", Cancelled: "Cancelled", Unused6: "_Unused6", Unused7: "_Unused7" });
        },
        40644: (e, t, r) => {
            r.d(t, { ZP: () => C });
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
                h = r(111677),
                p = r.n(h),
                g = r(891198),
                f = r(537392),
                y = r(280278);
            const b = p().e8d93005,
                E = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                v = ({ color: e, count: t }) => {
                    const r = (0, g.wl)(t, !0);
                    return n.createElement(f.ZP, null, ({ containerWidth: a }) => {
                        return n.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [E.count, ((o = a), o < u.default.theme.breakpoints.small && E.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(a) || r.length >= 5 ? b(t) : r) : void 0);
                        var o;
                    });
                };
            class C extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: r, color: o, decoration: s } = this.props;
                            return n.createElement(c.ZP.Consumer, null, ({ direction: l }) => n.createElement(i.ZP, { color: e ? r : o, dir: l, style: [Z.inner, e && "blue500" === r && Z.blue500] }, n.createElement(a.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), s, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: r, hoverLabel: a, iconSize: o, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = s.Z.generate({ backgroundColor: u.default.theme.colors[r], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: a, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, w[h ? "haloBackground" : r], !c && Z.iconBackground, "small" === o && Z.iconSmallBoundingBox, h && Z.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: r, isDisabled: a, isFaded: i, onAnimationEnd: s, onAnimationStart: l, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled && e && h) return n.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: S[t], animationStyle: k, onAnimationEnd: s, onAnimationStart: l, onError: c });
                            {
                                const o = r && e ? e : this.props.Icon;
                                return n.createElement(o, { style: [S[t], !a && i && Z.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(v, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: r } = this.props;
                            r || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: r, isActive: i, isDisabled: s, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: g, renderWrapper: f = n.Fragment, style: y, testID: b } = this.props,
                        E = !u.default.theme.highContrastEnabled && !o.Z.reducedMotionEnabled;
                    return n.createElement(
                        a.Z,
                        { style: [Z.root, y] },
                        n.createElement(
                            f,
                            null,
                            c
                                ? this._renderContent(i)
                                : n.createElement(l.Z, { "aria-haspopup": g ? "menu" : void 0, "aria-label": e, disabled: s, enableKeyboardShortcuts: r, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: g, style: [Z.triggerAreaRoot, Z.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: r, isPressed: n } = e,
                                          a = i || r || n || t;
                                      return this._renderContent(a, e);
                                  }),
                        ),
                        E ? n.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            C.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const S = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                w = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
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
        565421: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 32 32", children: n.createElement("g", null, n.createElement("path", { d: "M20 23h-2v-8h2v8zm-6-8h-2v8h2v-8zm14-5h-1.713l-1.111 15.577C25.038 27.496 23.424 29 21.5 29H10.486c-1.915 0-3.522-1.496-3.66-3.405L5.699 10H4V8h7V6c0-1.654 1.346-3 3-3h4c1.654 0 3 1.346 3 3v2h7v2zM13 8h6V6c0-.551-.449-1-1-1h-4c-.551 0-1 .449-1 1v2zm11.281 2H7.705l1.117 15.451c.062.869.793 1.549 1.665 1.549H21.5c.88 0 1.619-.688 1.681-1.565L24.282 10z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 32, height: 32 };
            const l = s;
        },
        762410: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17.584 4l-2.043-2.043L16.955.543l2.043 2.043L21.041.543l1.414 1.414L20.412 4l2.043 2.043-1.414 1.414-2.043-2.043-2.043 2.043-1.414-1.414L17.584 4zm-11.4-.949C7.734 2.534 9.849 2 12 2v2c-1.849 0-3.734.465-5.184.949-.719.24-1.318.479-1.735.658L5 5.642v6.377c0 1.565.445 3.066 1.291 4.269 1.467-1.484 3.429-2.287 5.715-2.287s4.241.801 5.708 2.279C18.557 15.079 19 13.581 19 12.019V11h2v1.019c0 2.407-.852 4.792-2.575 6.514-.282.282-.587.545-.914.787-.86.636-1.821 1.288-2.742 1.785-.882.476-1.879.895-2.768.895s-1.886-.42-2.768-.895c-.922-.497-1.882-1.149-2.742-1.785-.324-.24-.626-.5-.905-.778-1.729-1.723-2.584-4.112-2.584-6.523V4.382l.553-.276.447.894-.447-.894h.002l.004-.003.012-.006.04-.02.146-.069c.126-.059.308-.141.537-.24.458-.196 1.109-.457 1.89-.717h-.002zM16.32 17.713C15.234 16.605 13.783 16 12.007 16s-3.232.608-4.318 1.719c.82.606 1.692 1.193 2.493 1.625.844.455 1.463.656 1.819.656s.975-.2 1.819-.656c.804-.433 1.678-1.023 2.5-1.631zM12 8c-.828 0-1.5.672-1.5 1.5S11.172 11 12 11s1.5-.672 1.5-1.5S12.828 8 12 8zM8.5 9.5C8.5 7.567 10.067 6 12 6s3.5 1.567 3.5 3.5S13.933 13 12 13s-3.5-1.567-3.5-3.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        410418: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        106186: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.dd2d9dea.js.map

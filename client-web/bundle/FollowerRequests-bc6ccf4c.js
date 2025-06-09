"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-bc6ccf4c", "bundle.ConversationParticipants-bc6ccf4c", "loader.UserHandler-bc6ccf4c"],
    {
        642153: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        h = "transparent" === t;
                    return r.createElement(
                        o.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => r.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : n, key: o, size: c, style: [0 !== o && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - o }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(476984),
                a = n.n(o),
                i = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: a, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: g } = this.props;
                    switch (o) {
                        case c:
                            return g ? r.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? r.createElement(s.m, { failureMessage: n }) : p();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const r = t[n];
                                    let o = "";
                                    return r && (o = ` ${100 * r}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: a } = this.props;
                    return r.createElement(o.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => r });
            class r {
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
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
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
            new r();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(111677),
                l = n.n(i),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, l] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: f.container },
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(s.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: f.slider },
                            r.createElement(m.Z, {
                                "aria-label": h,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [m, h] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((o) => {
                                if (o && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = o.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof l && l(t), r(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            r(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, s]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, C.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && m && r.createElement(p, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    r.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const C = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(149170),
                l = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        378729: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(325686),
                a = n(111677),
                i = n.n(a),
                l = n(283379),
                s = n(731708),
                c = n(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                m = i().f3624b5c,
                h = i().b4b3b113,
                p = i().be222050,
                f = i().hcbbe447;
            class g extends r.Component {
                render() {
                    const { color: e, id: t, style: n } = this.props;
                    return r.createElement(o.Z, { style: [y.root, n] }, r.createElement(l.default, { style: [y.icon, e && y[e]] }), r.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: n } = this.props,
                        { adMetadataContainer: r, advertiser: o, advertiser_name: a, disclosure_type: i } = n,
                        l = e && o && e === o.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        g = !(!r || "POLITICAL" !== r.disclaimerType) || s,
                        y = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = r || {};
                    let C;
                    return (C = t || (!a || l || b ? (g ? m : y ? p : u) : g ? h({ fullName: a }) : y ? f({ fullName: a }) : d({ fullName: a }))), C;
                }
            }
            g.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: l, value: s, ...c }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: i, value: [c.min, s], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(o.Z, u);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        y = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (y.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            y.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...h, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, g),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, y, g])
                    );
                };
        },
        537439: (e, t, n) => {
            n.d(t, { Z: () => z });
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                i = n(492140),
                l = n(720600),
                s = n(761744),
                c = n(25001),
                d = n(453333),
                u = n(136483),
                m = n(98440),
                h = n(790093),
                p = n(452693),
                f = n(544367),
                g = n(264171),
                y = n(159340),
                b = n(404971),
                C = n(262009),
                w = n(76388),
                E = n(488746),
                x = n(246492),
                v = n(520913),
                S = n(731708),
                Z = n(642153),
                k = n(879891),
                P = n(392237),
                T = n(54606);
            const F = a().ae408b76,
                B = a().j355f008,
                D = a().habf9678,
                L = a().db0798ed,
                I = a().dc716ec9,
                R = ({ text: e }) => {
                    const { direction: t } = (0, k.Z)();
                    return r.createElement(S.ZP, { dir: t, withHashflags: !0 }, e);
                },
                _ = (e, t) =>
                    t
                        ? F
                        : ((e) => {
                              const t = r.createElement(R, { text: e });
                              return r.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                A = P.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                M = P.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                z = ({ contextType: e, iconColor: t, iconSize: n, link: o, retweetData: a, text: S, topicData: k, userAvatarUrls: F }) => {
                    const { isSelfRetweet: z, name: W, screenName: H } = a || {},
                        Q = ((e, t, n, o = []) => {
                            const a = A[t],
                                S = [n ? { color: P.default.theme.colors[n] } : M.colorDeepGray, a],
                                k = r.createElement(i.default, { style: S }),
                                F = r.createElement(l.default, { style: S }),
                                B = r.createElement(s.default, { style: S }),
                                D = r.createElement(c.default, { style: S }),
                                L = r.createElement(d.default, { style: S }),
                                I = r.createElement(u.default, { style: M.circle }),
                                R = r.createElement(m.default, { style: S }),
                                _ = r.createElement(h.default, { style: S }),
                                z = r.createElement(p.default, { style: S }),
                                W = r.createElement(f.default, { style: S }),
                                H = r.createElement(g.default, { style: S }),
                                Q = r.createElement(y.default, { style: S }),
                                N = r.createElement(b.default, { style: S }),
                                j = r.createElement(C.default, { style: S }),
                                $ = r.createElement(w.default, { style: S }),
                                V = r.createElement(E.default, { style: S }),
                                U = r.createElement(x.default, { style: S }),
                                O = r.createElement(Z.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                G = r.createElement(v.default, { style: S });
                            switch (e) {
                                case T.Q.Pin:
                                case T.Q.ReplyPin:
                                    return k;
                                case T.Q.Retweet:
                                    return F;
                                case T.Q.Like:
                                    return B;
                                case T.Q.Follow:
                                    return D;
                                case T.Q.Moment:
                                    return L;
                                case T.Q.NewTweets:
                                    return I;
                                case T.Q.Reply:
                                case T.Q.Conversation:
                                    return R;
                                case T.Q.Feedback:
                                    return _;
                                case T.Q.Topic:
                                    return z;
                                case T.Q.List:
                                    return W;
                                case T.Q.Location:
                                    return H;
                                case T.Q.Community:
                                    return Q;
                                case T.Q.Spaces:
                                    return N;
                                case T.Q.Sparkle:
                                    return j;
                                case T.Q.SocialProof:
                                case T.Q.FollowFollowed:
                                    return U;
                                case T.Q.FollowMutual:
                                    return V;
                                case T.Q.FollowFollowing:
                                    return $;
                                case T.Q.Facepile:
                                    return O;
                                case T.Q.Bird:
                                    return G;
                                case T.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, n, t, F);
                    switch (e) {
                        case T.Q.Retweet:
                            return { Icon: Q, text: S || _(W, z), link: H ? `https://twitter.com/${H}` : void 0 };
                        case T.Q.Pin:
                            return { Icon: Q, text: S || B };
                        case T.Q.ReplyPin:
                            return { Icon: Q, text: D };
                        case T.Q.Topic:
                            return { Icon: Q, "aria-label": "Recommendation" === k?.functionalityType || "RecWithEducation" === k?.functionalityType ? I({ topicName: S }) : L({ topicName: S }), text: S ? r.createElement(R, { text: S }) : null, link: o };
                        default:
                            return { Icon: Q, text: S ? r.createElement(R, { text: S }) : null, link: o };
                    }
                };
        },
        126962: (e, t, n) => {
            n.d(t, { Z: () => f });
            n(136728);
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(872405),
                l = n(235902),
                s = n(392237),
                c = n(139052),
                d = n(488684),
                u = n(537439),
                m = n(54606);
            class h extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: n, id: s, onLayout: c, rightControl: d, style: m, testID: h, textColor: f, textSize: g, topControl: y, weight: b, withBottomBorder: C, withLeftPadding: w, withTextCentered: E, ...x } = this.props,
                        { Icon: v, "aria-label": S, link: Z, text: k } = (0, u.Z)(x),
                        P = r.createElement(a.ZP, { "aria-label": S, color: f, id: s, numberOfLines: 2, size: g, testID: h, weight: b, withoutTwemojiAndHashflags: !0 }, k),
                        { cellStyle: T, viewStyle: F } = this._getStyles();
                    return k ? r.createElement(l.ZP.UseProps, null, (a) => r.createElement(r.Fragment, null, y || null, r.createElement(o.Z, { onLayout: c, style: [m, F, a.socialContextRefreshEnabled() && !w && p.socialContextRefresh] }, r.createElement(i.Z, { avatarCell: v || (w ? null : void 0), avatarCellStyle: [n, p.socialContextIconColumn, !w && p.unsetIconWidth, a.socialContextRefreshEnabled() && !w && p.socialContextRefreshIcon], avatarSize: e, cellStyle: T }, r.createElement(o.Z, { style: p.cellWrapper }, r.createElement(o.Z, { style: [p.socialContextTextColumn, a.socialContextRefreshEnabled() && !w && p.socialContextRefreshTextColumn] }, Z ? this._renderLink(Z, P) : P), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: n, id: o, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        p = r.createElement(a.ZP, { color: s, id: o, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return n === m.Q.Topic && u ? r.createElement(c.Z, { topicId: u.topicId }, p) : n === m.Q.Retweet && h ? r.createElement(d.Z, { screenName: h }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: n, withTextCentered: r } = this.props,
                        o = t === m.Q.TextOnly,
                        a = n ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        i = n && !e ? [p.bottomBorder] : [];
                    return o && i.push(p.topicContext), r && i.push(p.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = h;
        },
        54606: (e, t, n) => {
            n.d(t, { Q: () => r });
            n(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(215337),
                l = n(392237),
                s = n(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return o.createElement("defs", null, o.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, o.createElement("stop", { stopColor: e.primary }), o.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const h = {
                    Default: function ({ children: e, style: t, type: n = "audiospace" }) {
                        return o.createElement(
                            i.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(n),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return o.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            o.createElement(
                                i.Z,
                                (0, r.Z)(
                                    {},
                                    (function () {
                                        const e = (0, s.ai)();
                                        return { ...(0, s.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: s.ai,
                    getDarkModeColors: s.K,
                },
                p = Object.freeze(h);
        },
        977220: (e, t, n) => {
            n.d(t, { Cs: () => d, K: () => l, ai: () => s });
            var r = n(465233),
                o = n(483054),
                a = n(295559),
                i = n(392237);
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function s(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, r.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = a.xO(e),
                    n = o.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(n)).slice(0, -2);
            }
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var r = n(202784),
                o = n(325686),
                a = n(461756),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(111677),
                p = n.n(h),
                f = n(891198),
                g = n(537392),
                y = n(280278);
            const b = p().e8d93005,
                C = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                w = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return r.createElement(g.ZP, null, ({ containerWidth: o }) => {
                        return r.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [C.count, ((a = o), a < u.default.theme.breakpoints.small && C.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(o) || n.length >= 5 ? b(t) : n) : void 0);
                        var a;
                    });
                };
            class E extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return r.createElement(c.ZP.Consumer, null, ({ direction: s }) => r.createElement(i.ZP, { color: e ? n : a, dir: s, style: [S.inner, e && "blue500" === n && S.blue500] }, r.createElement(o.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: o, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return r.createElement(s.Z, { hoverLabel: o, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, v[h ? "haloBackground" : n], !c && S.iconBackground, "small" === a && S.iconSmallBoundingBox, h && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: o, isFaded: i, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return r.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: x[t], animationStyle: k, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return r.createElement(a, { style: [x[t], !o && i && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? r.createElement(w, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: l, isPresentational: c, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: g = r.Fragment, style: y, testID: b } = this.props,
                        C = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return r.createElement(
                        o.Z,
                        { style: [S.root, y] },
                        r.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(i)
                                : r.createElement(s.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [S.triggerAreaRoot, S.outlineNone], testID: b }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: r } = e,
                                          o = i || n || r || t;
                                      return this._renderContent(o, e);
                                  }),
                        ),
                        C ? r.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const x = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                Z = "224.5%",
                k = { width: Z, height: Z };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => o, ZP: () => i });
            var r = n(941978);
            const o = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends r.C {
                check(e) {
                    return super.check(e ?? o);
                }
            }
            const i = new a();
        },
        433460: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(111677),
                l = n.n(i),
                s = n(404971),
                c = n(868634),
                d = n(336373),
                u = n(181054),
                m = n(392237),
                h = n(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [n, a] = o.useState(),
                    i = !!(n && n > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...m } = e,
                    p =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return b.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return b.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(s, e.screenName);
                o.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const g = o.useCallback((e) => o.createElement(u.Z.Default, (0, r.Z)({}, e, { type: s })), [s]);
                return o.createElement(
                    h.default,
                    (0, r.Z)({}, m, {
                        BorderComponent: g,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== n && a(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: o.createElement(f, { isWide: i, type: s }),
                        gapWidth: i ? "space4" : "space2",
                        onClick: function () {
                            switch (s) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function f(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return o.createElement(g, e);
                    default:
                        return null;
                }
            }
            function g(e) {
                return "livevideo" === e.type ? o.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : o.createElement(a.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, o.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, o.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        n = "100%",
                        r = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: n, height: n, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                b = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(731708),
                a = n(354149),
                i = n(310452),
                l = n(720283);
            const s = ({ animateIn: e, description: t, entities: n, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: h }) => {
                const { description: p, entities: f } = (0, l.H)({ description: t, entities: n, withheldDescription: m, withheldEntities: h }),
                    g = i.ZP.descriptionTextParts(p, f);
                return g.length
                    ? r.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          g.map((t, n) => r.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${n}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, n) => {
            n.d(t, { H: () => r });
            const r = ({ description: e, entities: t, withheldDescription: n, withheldEntities: r }) => (n ? { description: n, entities: r } : { description: e, entities: t });
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(157396);
            const o = (0, n(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-bc6ccf4c.aab4591a.js.map

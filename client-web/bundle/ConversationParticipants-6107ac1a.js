"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-6107ac1a", "icons/IconFeedback-js", "bundle.FollowerRequests-bc6ccf4c", "loader.UserHandler-bc6ccf4c"],
    {
        642153: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: l, userAvatarSize: s = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        h = "transparent" === t;
                    return o.createElement(
                        r.Z,
                        { style: [c.root, l, { height: i.default.getSizeStyle(s)?.height }] },
                        d.map((e, r) => o.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : n, key: r, size: s, style: [0 !== r && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - r }], uri: e })),
                    );
                },
                c = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                i = n(143778),
                l = n(750410),
                c = n(682830);
            const s = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: p, retryMessage: f, retryable: g } = this.props;
                    switch (r) {
                        case s:
                            return g ? o.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? o.createElement(c.m, { failureMessage: n }) : p();
                        case u:
                            return o.createElement(c.J, { "aria-label": e, color: t, loadingMessage: i });
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
            var o = n(202784),
                r = n(325686);
            class a extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const o = t[n];
                                    let r = "";
                                    return o && (r = ` ${100 * o}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: a } = this.props;
                    return o.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
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
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(111677),
                l = n.n(i),
                c = n(643442),
                s = n(466445),
                d = n(731708),
                u = n(154003),
                m = n(173739);
            const h = l().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, l] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: f.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(c.default, null) : o.createElement(s.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: f.slider },
                            o.createElement(m.Z, {
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
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: c } = e,
                    s = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [m, h] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            y.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        c = r.loadAnimation(a);
                                    (s.current = c),
                                        (c.onError = (e) => {
                                            const t = new v(e);
                                            "function" == typeof l && l(t), o(c, t);
                                        }),
                                        c.addEventListener("DOMLoaded", () => {
                                            h(!0), t && (c.play(), i && i());
                                        }),
                                        c.addEventListener("complete", () => {
                                            o(c);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, c]),
                    o.useEffect(
                        () =>
                            function () {
                                s.current && s.current.destroy();
                            },
                        [s],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, b.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), c && s.current && m && o.createElement(p, { animation: s.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    o.useEffect(() => {
                        y.load();
                    }, []),
                    null
                );
            };
            const y = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class v extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, v), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const b = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                l = n(40644);
            const c = a().gaeb997e;
            const s = function ({ activeColor: e, label: t = c, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: s, preventFocusShift: d, renderActionMenu: u, style: m, testID: h, withDarkBackground: p = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), s && s(e);
                        },
                        [s],
                    ),
                    g = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(l.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: h });
            };
        },
        378729: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(111677),
                i = n.n(a),
                l = n(283379),
                c = n(731708),
                s = n(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                m = i().f3624b5c,
                h = i().b4b3b113,
                p = i().be222050,
                f = i().hcbbe447;
            class g extends o.Component {
                render() {
                    const { color: e, id: t, style: n } = this.props;
                    return o.createElement(r.Z, { style: [y.root, n] }, o.createElement(l.default, { style: [y.icon, e && y[e]] }), o.createElement(c.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: n } = this.props,
                        { adMetadataContainer: o, advertiser: r, advertiser_name: a, disclosure_type: i } = n,
                        l = e && r && e === r.id_str,
                        c = "string" == typeof i && "political" === i.toLowerCase(),
                        s = "string" == typeof i && "issue" === i.toLowerCase(),
                        g = !(!o || "POLITICAL" !== o.disclaimerType) || c,
                        y = !(!o || "ISSUE" !== o.disclaimerType) || s,
                        { removePromotedAttributionForPreroll: v } = o || {};
                    let b;
                    return (b = t || (!a || l || v ? (g ? m : y ? p : u) : g ? h({ fullName: a }) : y ? f({ fullName: a }) : d({ fullName: a }))), b;
                }
            }
            g.defaultProps = { color: "gray700" };
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: l, value: c, ...s }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...s, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: i, value: [s.min, c], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return o.createElement(r.Z, u);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                p = c.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [f, g] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        y = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (y.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        o.useEffect(() => {
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
                        o.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                c = { ...h, ...(f.animating ? e.post : e.active) },
                                s = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [p.root, n] },
                                t ? o.createElement("span", { style: c }, o.createElement(l.ZP, d, f.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, g),
                                        style: s,
                                    },
                                    o.createElement(l.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, y, g])
                    );
                };
        },
        537439: (e, t, n) => {
            n.d(t, { Z: () => H });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(492140),
                l = n(720600),
                c = n(761744),
                s = n(25001),
                d = n(453333),
                u = n(136483),
                m = n(98440),
                h = n(790093),
                p = n(452693),
                f = n(544367),
                g = n(264171),
                y = n(159340),
                v = n(404971),
                b = n(262009),
                C = n(76388),
                x = n(488746),
                w = n(246492),
                E = n(520913),
                S = n(731708),
                T = n(642153),
                P = n(879891),
                Z = n(392237),
                k = n(54606);
            const R = a().ae408b76,
                F = a().j355f008,
                D = a().habf9678,
                A = a().db0798ed,
                B = a().dc716ec9,
                _ = ({ text: e }) => {
                    const { direction: t } = (0, P.Z)();
                    return o.createElement(S.ZP, { dir: t, withHashflags: !0 }, e);
                },
                M = (e, t) =>
                    t
                        ? R
                        : ((e) => {
                              const t = o.createElement(_, { text: e });
                              return o.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                L = Z.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                I = Z.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                H = ({ contextType: e, iconColor: t, iconSize: n, link: r, retweetData: a, text: S, topicData: P, userAvatarUrls: R }) => {
                    const { isSelfRetweet: H, name: z, screenName: W } = a || {},
                        Q = ((e, t, n, r = []) => {
                            const a = L[t],
                                S = [n ? { color: Z.default.theme.colors[n] } : I.colorDeepGray, a],
                                P = o.createElement(i.default, { style: S }),
                                R = o.createElement(l.default, { style: S }),
                                F = o.createElement(c.default, { style: S }),
                                D = o.createElement(s.default, { style: S }),
                                A = o.createElement(d.default, { style: S }),
                                B = o.createElement(u.default, { style: I.circle }),
                                _ = o.createElement(m.default, { style: S }),
                                M = o.createElement(h.default, { style: S }),
                                H = o.createElement(p.default, { style: S }),
                                z = o.createElement(f.default, { style: S }),
                                W = o.createElement(g.default, { style: S }),
                                Q = o.createElement(y.default, { style: S }),
                                N = o.createElement(v.default, { style: S }),
                                O = o.createElement(b.default, { style: S }),
                                U = o.createElement(C.default, { style: S }),
                                j = o.createElement(x.default, { style: S }),
                                V = o.createElement(w.default, { style: S }),
                                G = o.createElement(T.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: r }),
                                $ = o.createElement(E.default, { style: S });
                            switch (e) {
                                case k.Q.Pin:
                                case k.Q.ReplyPin:
                                    return P;
                                case k.Q.Retweet:
                                    return R;
                                case k.Q.Like:
                                    return F;
                                case k.Q.Follow:
                                    return D;
                                case k.Q.Moment:
                                    return A;
                                case k.Q.NewTweets:
                                    return B;
                                case k.Q.Reply:
                                case k.Q.Conversation:
                                    return _;
                                case k.Q.Feedback:
                                    return M;
                                case k.Q.Topic:
                                    return H;
                                case k.Q.List:
                                    return z;
                                case k.Q.Location:
                                    return W;
                                case k.Q.Community:
                                    return Q;
                                case k.Q.Spaces:
                                    return N;
                                case k.Q.Sparkle:
                                    return O;
                                case k.Q.SocialProof:
                                case k.Q.FollowFollowed:
                                    return V;
                                case k.Q.FollowMutual:
                                    return j;
                                case k.Q.FollowFollowing:
                                    return U;
                                case k.Q.Facepile:
                                    return G;
                                case k.Q.Bird:
                                    return $;
                                case k.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, n, t, R);
                    switch (e) {
                        case k.Q.Retweet:
                            return { Icon: Q, text: S || M(z, H), link: W ? `https://twitter.com/${W}` : void 0 };
                        case k.Q.Pin:
                            return { Icon: Q, text: S || F };
                        case k.Q.ReplyPin:
                            return { Icon: Q, text: D };
                        case k.Q.Topic:
                            return { Icon: Q, "aria-label": "Recommendation" === P?.functionalityType || "RecWithEducation" === P?.functionalityType ? B({ topicName: S }) : A({ topicName: S }), text: S ? o.createElement(_, { text: S }) : null, link: r };
                        default:
                            return { Icon: Q, text: S ? o.createElement(_, { text: S }) : null, link: r };
                    }
                };
        },
        126962: (e, t, n) => {
            n.d(t, { Z: () => f });
            n(136728);
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(872405),
                l = n(235902),
                c = n(392237),
                s = n(139052),
                d = n(488684),
                u = n(537439),
                m = n(54606);
            class h extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: n, id: c, onLayout: s, rightControl: d, style: m, testID: h, textColor: f, textSize: g, topControl: y, weight: v, withBottomBorder: b, withLeftPadding: C, withTextCentered: x, ...w } = this.props,
                        { Icon: E, "aria-label": S, link: T, text: P } = (0, u.Z)(w),
                        Z = o.createElement(a.ZP, { "aria-label": S, color: f, id: c, numberOfLines: 2, size: g, testID: h, weight: v, withoutTwemojiAndHashflags: !0 }, P),
                        { cellStyle: k, viewStyle: R } = this._getStyles();
                    return P ? o.createElement(l.ZP.UseProps, null, (a) => o.createElement(o.Fragment, null, y || null, o.createElement(r.Z, { onLayout: s, style: [m, R, a.socialContextRefreshEnabled() && !C && p.socialContextRefresh] }, o.createElement(i.Z, { avatarCell: E || (C ? null : void 0), avatarCellStyle: [n, p.socialContextIconColumn, !C && p.unsetIconWidth, a.socialContextRefreshEnabled() && !C && p.socialContextRefreshIcon], avatarSize: e, cellStyle: k }, o.createElement(r.Z, { style: p.cellWrapper }, o.createElement(r.Z, { style: [p.socialContextTextColumn, a.socialContextRefreshEnabled() && !C && p.socialContextRefreshTextColumn] }, T ? this._renderLink(T, Z) : Z), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: n, id: r, onClick: i, retweetData: l, textColor: c, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        p = o.createElement(a.ZP, { color: c, id: r, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return n === m.Q.Topic && u ? o.createElement(s.Z, { topicId: u.topicId }, p) : n === m.Q.Retweet && h ? o.createElement(d.Z, { screenName: h }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: n, withTextCentered: o } = this.props,
                        r = t === m.Q.TextOnly,
                        a = n ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        i = n && !e ? [p.bottomBorder] : [];
                    return r && i.push(p.topicContext), o && i.push(p.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = c.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = h;
        },
        54606: (e, t, n) => {
            n.d(t, { Q: () => o });
            n(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(215337),
                l = n(392237),
                c = n(977220);
            const s = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: s(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: s(-80) }] } } } }));
            function u() {
                const e = (0, c.ai)();
                return r.createElement("defs", null, r.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, r.createElement("stop", { stopColor: e.primary }), r.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const h = {
                    Default: function ({ children: e, style: t, type: n = "audiospace" }) {
                        return r.createElement(
                            i.Z,
                            (0, o.Z)(
                                {},
                                (function (e) {
                                    const t = (0, c.ai)(e);
                                    return { ...(0, c.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(n),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return r.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            r.createElement(
                                i.Z,
                                (0, o.Z)(
                                    {},
                                    (function () {
                                        const e = (0, c.ai)();
                                        return { ...(0, c.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: c.ai,
                    getDarkModeColors: c.K,
                },
                p = Object.freeze(h);
        },
        977220: (e, t, n) => {
            n.d(t, { Cs: () => d, K: () => l, ai: () => c });
            var o = n(465233),
                r = n(483054),
                a = n(295559),
                i = n(392237);
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function c(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const s = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, o.Z)(s);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = a.xO(e),
                    n = r.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(n)).slice(0, -2);
            }
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => x });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                l = n(58881),
                c = n(530732),
                s = n(224162),
                d = n(491915),
                u = n(392237),
                m = n(551611),
                h = n(111677),
                p = n.n(h),
                f = n(891198),
                g = n(537392),
                y = n(280278);
            const v = p().e8d93005,
                b = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(g.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(y.ZP, { color: e, count: t, size: "subtext2", style: [b.count, ((a = r), a < u.default.theme.breakpoints.small && b.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? v(t) : n) : void 0);
                        var a;
                    });
                };
            class x extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return o.createElement(s.ZP.Consumer, null, ({ direction: c }) => o.createElement(i.ZP, { color: e ? n : a, dir: c, style: [S.inner, e && "blue500" === n && S.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: s, showBackgroundWhenActive: d } = this.props,
                                m = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                h = d && i && !e?.isHovered;
                            return o.createElement(c.Z, { hoverLabel: r, interactiveStyles: m, interactivityState: e, style: [u.default.absoluteFill, E[h ? "haloBackground" : n], !s && S.iconBackground, "small" === a && S.iconSmallBoundingBox, h && S.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: l, onAnimationStart: c, onError: s, showAnimation: h, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && h) return o.createElement(d.ZP, { animation: p || m.Bf, animationContainerStyle: w[t], animationStyle: P, onAnimationEnd: l, onAnimationStart: c, onError: s });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [w[t], !r && i && S.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: l, isPresentational: s, keyboardShortcut: m, link: h, preventFocusShift: p, renderMenu: f, renderWrapper: g = o.Fragment, style: y, testID: v } = this.props,
                        b = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [S.root, y] },
                        o.createElement(
                            g,
                            null,
                            s
                                ? this._renderContent(i)
                                : o.createElement(c.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: m, link: h, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [S.triggerAreaRoot, S.outlineNone], testID: v }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        b ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            x.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                E = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                S = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                T = "224.5%",
                P = { width: T, height: T };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        433460: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(111677),
                l = n.n(i),
                c = n(404971),
                s = n(868634),
                d = n(336373),
                u = n(181054),
                m = n(392237),
                h = n(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [n, a] = r.useState(),
                    i = !!(n && n > 70),
                    { "aria-label": l, presenceRingType: c, spaceId: s, ...m } = e,
                    p =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return v.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return v.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(c, e.screenName);
                r.useEffect(() => {
                    switch (c) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, c]);
                const g = r.useCallback((e) => r.createElement(u.Z.Default, (0, o.Z)({}, e, { type: c })), [c]);
                return r.createElement(
                    h.default,
                    (0, o.Z)({}, m, {
                        BorderComponent: g,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== n && a(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: r.createElement(f, { isWide: i, type: c }),
                        gapWidth: i ? "space4" : "space2",
                        onClick: function () {
                            switch (c) {
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
                        return r.createElement(g, e);
                    default:
                        return null;
                }
            }
            function g(e) {
                return "livevideo" === e.type ? r.createElement(s.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : r.createElement(a.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, r.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, r.createElement(c.default, { style: y.spaceIcon })));
            }
            const y = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        n = "100%",
                        o = e.spacesPx.space4,
                        r = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * o, bottom: -1 * o }, rootNarrow: { end: -1 * r, bottom: -1 * r }, borderWide: { borderWidth: o }, borderNarrow: { borderWidth: r }, spaceGradient: { justifyContent: "center", width: n, height: n, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                v = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(731708),
                a = n(354149),
                i = n(310452),
                l = n(720283);
            const c = ({ animateIn: e, description: t, entities: n, isConcise: c, style: s, testID: d, userId: u, withheldDescription: m, withheldEntities: h }) => {
                const { description: p, entities: f } = (0, l.H)({ description: t, entities: n, withheldDescription: m, withheldEntities: h }),
                    g = i.ZP.descriptionTextParts(p, f);
                return g.length
                    ? o.createElement(
                          r.ZP,
                          { dir: "auto", numberOfLines: c ? 2 : void 0, style: s, testID: d },
                          g.map((t, n) => o.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${n}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, n) => {
            n.d(t, { H: () => o });
            const o = ({ description: e, entities: t, withheldDescription: n, withheldEntities: o }) => (n ? { description: n, entities: o } : { description: e, entities: t });
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(157396);
            const r = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        452661: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(18198),
                r = {
                    centroidDimension: function (e, t, n, o) {
                        var a = e.touchBank,
                            i = 0,
                            l = 0,
                            c = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== c) c.touchActive && c.currentTimeStamp > t && ((i += o && n ? c.currentPageX : o && !n ? c.currentPageY : !o && n ? c.previousPageX : c.previousPageY), (l = 1));
                        else
                            for (var s = 0; s < a.length; s++) {
                                var d = a[s];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    (i += o && n ? d.currentPageX : o && !n ? d.currentPageY : !o && n ? d.previousPageX : d.previousPageY), l++;
                                }
                            }
                        return l > 0 ? i / l : r.noCentroid;
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
            const a = r;
            var i = a.currentCentroidXOfTouchesChangedAfter,
                l = a.currentCentroidYOfTouchesChangedAfter,
                c = a.previousCentroidXOfTouchesChangedAfter,
                s = a.previousCentroidYOfTouchesChangedAfter,
                d = a.currentCentroidX,
                u = a.currentCentroidY,
                m = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = i(t, e._accountsForMovesUpTo)), (e.moveY = l(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = c(t, n),
                            r = i(t, n),
                            a = s(t, n),
                            d = l(t, n),
                            u = e.dx + (r - o),
                            m = e.dy + (d - a),
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / h), (e.vy = (m - e.dy) / h), (e.dx = u), (e.dy = m), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && m._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (m._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = d(r.touchHistory)),
                                    (n.y0 = u(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(o) {
                                    h(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    h(t, e.onPanResponderRelease, o, n), p(t), m._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (m._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), h(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    h(t, e.onPanResponderTerminate, o, n), p(t), m._initializeGestureState(n);
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
            function h(e, t, n, r) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, r);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-6107ac1a.cc0b2b6a.js.map

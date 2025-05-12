"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686),
                i = n(392237);
            function a({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        642153: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                i = n(392237),
                a = n(823161);
            const s = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: n = "small", style: s, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        h = d.length,
                        m = "transparent" === t;
                    return r.createElement(
                        o.Z,
                        { style: [l.root, s, { height: a.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => r.createElement(a.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : n, key: o, size: c, style: [0 !== o && { marginStart: -1 * i.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: h - o }], uri: e })),
                    );
                },
                l = i.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                o = n(476984),
                i = n.n(o),
                a = n(143778),
                s = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: i, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: g, retryMessage: p, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? r.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: p }) : n ? r.createElement(l.m, { failureMessage: n }) : g();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: a });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686);
            class i extends r.Component {
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
                    const { angle: e, angleUnit: t, children: n, style: i } = this.props;
                    return r.createElement(o.Z, { style: [i, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            i.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const a = i;
        },
        378729: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                i = n(674132),
                a = n.n(i),
                s = n(283379),
                l = n(731708),
                c = n(392237);
            const d = a().f1a1b791,
                u = a().if2bf8b4,
                h = a().f3624b5c,
                m = a().b4b3b113,
                g = a().be222050,
                p = a().hcbbe447;
            class f extends r.Component {
                render() {
                    const { color: e, id: t, style: n } = this.props;
                    return r.createElement(o.Z, { style: [w.root, n] }, r.createElement(s.default, { style: [w.icon, e && w[e]] }), r.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: n } = this.props,
                        { adMetadataContainer: r, advertiser: o, advertiser_name: i, disclosure_type: a } = n,
                        s = e && o && e === o.id_str,
                        l = "string" == typeof a && "political" === a.toLowerCase(),
                        c = "string" == typeof a && "issue" === a.toLowerCase(),
                        f = !(!r || "POLITICAL" !== r.disclaimerType) || l,
                        w = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: y } = r || {};
                    let b;
                    return (b = t || (!i || s || y ? (f ? h : w ? g : u) : f ? m({ fullName: i }) : w ? p({ fullName: i }) : d({ fullName: i }))), b;
                }
            }
            f.defaultProps = { color: "gray700" };
            const w = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                o = n(325686),
                i = n(827515),
                a = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = l.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [p, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        w = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (w.current)
                                if (a.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, i.Z)(e.count) && p.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && u(p.pendingCount, p.pendingText, f));
                        }, [p.animating, p.oldText]),
                        r.useMemo(() => {
                            const e = h[p.transitionDirection],
                                t = p.oldText && !a.Z.reducedMotionEnabled,
                                i = !p.animating && p.oldText && !a.Z.reducedMotionEnabled,
                                l = { ...m, ...(p.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: l }, r.createElement(s.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, f),
                                        style: c,
                                    },
                                    r.createElement(s.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, w, f])
                    );
                };
        },
        537439: (e, t, n) => {
            n.d(t, { Z: () => N });
            var r = n(202784),
                o = n(674132),
                i = n.n(o),
                a = n(492140),
                s = n(720600),
                l = n(761744),
                c = n(25001),
                d = n(453333),
                u = n(136483),
                h = n(98440),
                m = n(790093),
                g = n(452693),
                p = n(544367),
                f = n(264171),
                w = n(159340),
                y = n(404971),
                b = n(262009),
                E = n(76388),
                x = n(488746),
                C = n(246492),
                v = n(520913),
                T = n(731708),
                I = n(642153),
                Z = n(879891),
                F = n(392237),
                P = n(54606);
            const R = i().ae408b76,
                S = i().j355f008,
                O = i().habf9678,
                _ = i().db0798ed,
                L = i().dc716ec9,
                A = ({ text: e }) => {
                    const { direction: t } = (0, Z.Z)();
                    return r.createElement(T.ZP, { dir: t, withHashflags: !0 }, e);
                },
                D = (e, t) =>
                    t
                        ? R
                        : ((e) => {
                              const t = r.createElement(A, { text: e });
                              return r.createElement(i().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                k = F.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                B = F.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                N = ({ contextType: e, iconColor: t, iconSize: n, link: o, retweetData: i, text: T, topicData: Z, userAvatarUrls: R }) => {
                    const { isSelfRetweet: N, name: M, screenName: H } = i || {},
                        G = ((e, t, n, o = []) => {
                            const i = k[t],
                                T = [n ? { color: F.default.theme.colors[n] } : B.colorDeepGray, i],
                                Z = r.createElement(a.default, { style: T }),
                                R = r.createElement(s.default, { style: T }),
                                S = r.createElement(l.default, { style: T }),
                                O = r.createElement(c.default, { style: T }),
                                _ = r.createElement(d.default, { style: T }),
                                L = r.createElement(u.default, { style: B.circle }),
                                A = r.createElement(h.default, { style: T }),
                                D = r.createElement(m.default, { style: T }),
                                N = r.createElement(g.default, { style: T }),
                                M = r.createElement(p.default, { style: T }),
                                H = r.createElement(f.default, { style: T }),
                                G = r.createElement(w.default, { style: T }),
                                Q = r.createElement(y.default, { style: T }),
                                z = r.createElement(b.default, { style: T }),
                                j = r.createElement(E.default, { style: T }),
                                U = r.createElement(x.default, { style: T }),
                                W = r.createElement(C.default, { style: T }),
                                $ = r.createElement(I.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = r.createElement(v.default, { style: T });
                            switch (e) {
                                case P.Q.Pin:
                                case P.Q.ReplyPin:
                                    return Z;
                                case P.Q.Retweet:
                                    return R;
                                case P.Q.Like:
                                    return S;
                                case P.Q.Follow:
                                    return O;
                                case P.Q.Moment:
                                    return _;
                                case P.Q.NewTweets:
                                    return L;
                                case P.Q.Reply:
                                case P.Q.Conversation:
                                    return A;
                                case P.Q.Feedback:
                                    return D;
                                case P.Q.Topic:
                                    return N;
                                case P.Q.List:
                                    return M;
                                case P.Q.Location:
                                    return H;
                                case P.Q.Community:
                                    return G;
                                case P.Q.Spaces:
                                    return Q;
                                case P.Q.Sparkle:
                                    return z;
                                case P.Q.SocialProof:
                                case P.Q.FollowFollowed:
                                    return W;
                                case P.Q.FollowMutual:
                                    return U;
                                case P.Q.FollowFollowing:
                                    return j;
                                case P.Q.Facepile:
                                    return $;
                                case P.Q.Bird:
                                    return V;
                                case P.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, n, t, R);
                    switch (e) {
                        case P.Q.Retweet:
                            return { Icon: G, text: T || D(M, N), link: H ? `https://twitter.com/${H}` : void 0 };
                        case P.Q.Pin:
                            return { Icon: G, text: T || S };
                        case P.Q.ReplyPin:
                            return { Icon: G, text: O };
                        case P.Q.Topic:
                            return { Icon: G, "aria-label": "Recommendation" === Z?.functionalityType || "RecWithEducation" === Z?.functionalityType ? L({ topicName: T }) : _({ topicName: T }), text: T ? r.createElement(A, { text: T }) : null, link: o };
                        default:
                            return { Icon: G, text: T ? r.createElement(A, { text: T }) : null, link: o };
                    }
                };
        },
        126962: (e, t, n) => {
            n.d(t, { Z: () => p });
            n(136728);
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(872405),
                s = n(235902),
                l = n(392237),
                c = n(139052),
                d = n(488684),
                u = n(537439),
                h = n(54606);
            class m extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: n, id: l, onLayout: c, rightControl: d, style: h, testID: m, textColor: p, textSize: f, topControl: w, weight: y, withBottomBorder: b, withLeftPadding: E, withTextCentered: x, ...C } = this.props,
                        { Icon: v, "aria-label": T, link: I, text: Z } = (0, u.Z)(C),
                        F = r.createElement(i.ZP, { "aria-label": T, color: p, id: l, numberOfLines: 2, size: f, testID: m, weight: y, withoutTwemojiAndHashflags: !0 }, Z),
                        { cellStyle: P, viewStyle: R } = this._getStyles();
                    return Z ? r.createElement(s.ZP.UseProps, null, (i) => r.createElement(r.Fragment, null, w || null, r.createElement(o.Z, { onLayout: c, style: [h, R, i.socialContextRefreshEnabled() && !E && g.socialContextRefresh] }, r.createElement(a.Z, { avatarCell: v || (E ? null : void 0), avatarCellStyle: [n, g.socialContextIconColumn, !E && g.unsetIconWidth, i.socialContextRefreshEnabled() && !E && g.socialContextRefreshIcon], avatarSize: e, cellStyle: P }, r.createElement(o.Z, { style: g.cellWrapper }, r.createElement(o.Z, { style: [g.socialContextTextColumn, i.socialContextRefreshEnabled() && !E && g.socialContextRefreshTextColumn] }, I ? this._renderLink(I, F) : F), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: n, id: o, onClick: a, retweetData: s, textColor: l, topicData: u } = this.props,
                        { screenName: m } = s || {},
                        g = r.createElement(i.ZP, { color: l, id: o, link: e, onClick: a, withoutTwemojiAndHashflags: !0 }, t);
                    return n === h.Q.Topic && u ? r.createElement(c.Z, { topicId: u.topicId }, g) : n === h.Q.Retweet && m ? r.createElement(d.Z, { screenName: m }, g) : g;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: n, withTextCentered: r } = this.props,
                        o = t === h.Q.TextOnly,
                        i = n ? [g.bottomBorderMargin, !!e && g.bottomBorder] : [],
                        a = n && !e ? [g.bottomBorder] : [];
                    return o && a.push(g.topicContext), r && a.push(g.socialContextTextCentered), { viewStyle: i, cellStyle: a };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const g = l.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                p = m;
        },
        54606: (e, t, n) => {
            n.d(t, { Q: () => r });
            n(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                a = n(215337),
                s = n(392237),
                l = n(977220);
            const c = (e) => `${e}%`,
                d = s.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, l.ai)();
                return o.createElement("defs", null, o.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: h, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, o.createElement("stop", { stopColor: e.primary }), o.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const h = "space-gradient";
            u.fill = `url(#${h})`;
            const m = {
                    Default: function ({ children: e, style: t, type: n = "audiospace" }) {
                        return o.createElement(
                            a.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, l.ai)(e);
                                    return { ...(0, l.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(n),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return o.createElement(
                            i.Z,
                            { style: [d.container, e.style] },
                            o.createElement(
                                a.Z,
                                (0, r.Z)(
                                    {},
                                    (function () {
                                        const e = (0, l.ai)();
                                        return { ...(0, l.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: l.ai,
                    getDarkModeColors: l.K,
                },
                g = Object.freeze(m);
        },
        977220: (e, t, n) => {
            n.d(t, { Cs: () => d, K: () => s, ai: () => l });
            var r = n(465233),
                o = n(483054),
                i = n(295559),
                a = n(392237);
            function s(e = "audiospace") {
                return a.default.theme.highContrastEnabled ? h(u.HighContrast[e]) : h(u.Default[e]);
            }
            function l(e = "audiospace") {
                return a.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, r.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function h(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = i.xO(e),
                    n = o.$n({ color: t, coefficient: 0.5 });
                return i.vq(i.rb(n)).slice(0, -2);
            }
        },
        433460: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                a = n(674132),
                s = n.n(a),
                l = n(404971),
                c = n(868634),
                d = n(336373),
                u = n(181054),
                h = n(392237),
                m = n(823161);
            const g = function (e) {
                const t = d.Z.useAnalytics(),
                    [n, i] = o.useState(),
                    a = !!(n && n > 70),
                    { "aria-label": s, presenceRingType: l, spaceId: c, ...h } = e,
                    g =
                        s ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return y.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return y.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(l, e.screenName);
                o.useEffect(() => {
                    switch (l) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [l]);
                const f = o.useCallback((e) => o.createElement(u.Z.Default, (0, r.Z)({}, e, { type: l })), [l]);
                return o.createElement(
                    m.default,
                    (0, r.Z)({}, h, {
                        BorderComponent: f,
                        "aria-label": g,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== n && i(t.width);
                            }
                        },
                        borderWidth: a ? "large" : "medium",
                        decoration: o.createElement(p, { isWide: a, type: l }),
                        gapWidth: a ? "space4" : "space2",
                        onClick: function () {
                            switch (l) {
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
            function p(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return o.createElement(f, e);
                    default:
                        return null;
                }
            }
            function f(e) {
                return "livevideo" === e.type ? o.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [w.liveVideoLabelContainer, w.borderNarrow, e.isWide ? w.liveVideoLabel : w.liveVideoLabelNarrow], type: "live" }) : o.createElement(i.Z, { style: [w.root, e.isWide ? w.rootWide : w.rootNarrow] }, o.createElement(u.Z.Default, { style: [w.spaceGradient, e.isWide ? w.borderWide : w.borderNarrow] }, o.createElement(l.default, { style: w.spaceIcon })));
            }
            const w = h.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        n = "100%",
                        r = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: n, height: n, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: s().b3688156, activeAudioSpace: s().c0eb8825, activeLiveVideo: s().d068dc6d };
        },
        238406: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(731708),
                i = n(354149),
                a = n(310452),
                s = n(720283);
            const l = ({ animateIn: e, description: t, entities: n, isConcise: l, style: c, testID: d, userId: u, withheldDescription: h, withheldEntities: m }) => {
                const { description: g, entities: p } = (0, s.H)({ description: t, entities: n, withheldDescription: h, withheldEntities: m }),
                    f = a.ZP.descriptionTextParts(g, p);
                return f.length
                    ? r.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          f.map((t, n) => r.createElement(i.ZP, { animateIn: e, key: `user_${u}_textpart_${n}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, n) => {
            n.d(t, { H: () => r });
            const r = ({ description: e, entities: t, withheldDescription: n, withheldEntities: r }) => (n ? { description: n, entities: r } : { description: e, entities: t });
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        19697: (e, t, n) => {
            n.d(t, { q8: () => c, $i: () => i });
            n(571372);
            var r = n(790187);
            const o = (e, t) => {
                const n = document.createElement("canvas");
                (n.width = e), (n.height = t);
                const r = n.getContext("2d");
                return (r.fillStyle = "#FFFFFF"), r.fillRect(0, 0, e, t), n;
            };
            function i(e, t, n, o, i) {
                return l(t, n).then(
                    (t) => (
                        (function (e, t, n, o, i, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = s.left,
                                c = s.top,
                                d = s.width,
                                u = s.height,
                                h = 0,
                                m = 0,
                                g = n,
                                p = o;
                            switch ((e.save(), i)) {
                                case r.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - s.width - s.left), (h = -n);
                                    break;
                                case r.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - s.width - s.left), (c = t.height - s.height - s.top), (h = -n), (m = -o);
                                    break;
                                case r.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - s.height - s.top), (m = -o);
                                    break;
                                case r.Z.LEFT_TOP:
                                    e.translate(n / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = s.top), (c = s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -n / 2), (g = o), (p = n);
                                    break;
                                case r.Z.LEFT_BOTTOM:
                                    e.translate(n / 2, o / 2), e.rotate(Math.PI / 2), (l = s.top), (c = t.height - s.width - s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -n / 2), (g = o), (p = n);
                                    break;
                                case r.Z.RIGHT_BOTTOM:
                                    e.translate(n / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - s.height - s.top), (c = t.height - s.width - s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -n / 2), (g = o), (p = n);
                                    break;
                                case r.Z.RIGHT_TOP:
                                    e.translate(n / 2, o / 2), e.rotate(-Math.PI / 2), (l = t.width - s.height - s.top), (c = s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -n / 2), (g = o), (p = n);
                            }
                            e.drawImage(t, l, c, d, u, h, m, g, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, o, i),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const n = o(e, t);
                    return c(n)
                        .then(() => n)
                        .catch(() => {
                            const n = e * t;
                            if (n > s) {
                                const n = d(s, e, t);
                                return l(n.width, n.height);
                            }
                            if (n > a) {
                                const n = d(a, e, t);
                                return l(n.width, n.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, n) => {
                    const r = e.toDataURL("image/jpeg");
                    r && "data:," !== r ? t(r) : n(new Error("Malformed canvas"));
                });
            }
            function d(e, t, n) {
                const r = Math.sqrt((e * n) / t),
                    o = (t * r) / n;
                return { height: Math.floor(r), width: Math.floor(o) };
            }
        },
        790187: (e, t, n) => {
            n.d(t, { C: () => i, Z: () => r });
            n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157);
            const r = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                o = (e, t, n = 65536) => {
                    let r = new Uint8Array([]),
                        o = 0;
                    function i(i, a, s) {
                        const l = i - o,
                            c = l + a;
                        if (l >= 0 && c <= r.length) s(r.subarray(l, c), i);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (r = new Uint8Array(this.result)), (o = i), s(r.subarray(0, a), i);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(i, i + Math.max(n, a)));
                        }
                    }
                    function a(e) {
                        const n = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === n) return void t(0);
                        function r(t, r) {
                            let o = 0;
                            for (let i = 0; i < r; i++) o = (o << 8) + e[t + (n ? i : r - 1 - i)];
                            return o;
                        }
                        const o = e.length > 8 && r(4, 4);
                        if (!o || o + 2 > e.length) return void t(0);
                        let i = r(o, 2);
                        if (o + 12 * i + 6 > e.length) return void t(0);
                        let a = o + 2;
                        for (; i > 0; ) {
                            if (((i -= 1), 274 === r(a, 2) && 3 === r(a + 2, 2) && 1 === r(a + 4, 4))) return void t(r(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? i(0, 10, function e(n, r) {
                              const o = n[1];
                              if (n.length < 4 || 255 !== n[0] || 217 === o) return void t(0);
                              const s = o < 208 || o > 217 ? (n[2] << 8) + n[3] : 0;
                              225 === o && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, n.subarray(4, 10)) ? i(r + 10, s - 8, a) : i(r + 2 + s, 10, e);
                          })
                        : t(0);
                },
                i = (e, t) => {
                    const n = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((i) => {
                        n
                            ? i(r.TOP_LEFT)
                            : o(
                                  e,
                                  (e) => {
                                      i(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, n) => {
            n.d(t, { Lw: () => o, Re: () => u, VJ: () => s, ZF: () => h, hv: () => l, ku: () => r, qp: () => i, uv: () => a, v5: () => d });
            n(571372), n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(543673), n(240753), n(128399);
            function r(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, n) => {
                    const r = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== r.length) n(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, n] = r,
                                    o = atob(n),
                                    i = o.length,
                                    a = Array(i);
                                for (let e = 0; e < i; e++) a[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else n(Error("The Uint8Array type is not available"));
                        else n(Error("The atob API is not available"));
                    else n(Error("The Blob API is not available"));
                });
            }
            const i = (e, t) =>
                    new Promise((n, r) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), r(Error(h));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? n(e.target.result) : r(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                r(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const n = document.createElement("a");
                    (n.href = e), (n.download = t), (n.target = "_blank"), n.click(), n.remove();
                },
                s = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const n = new Image();
                            (n.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = n.width), (e.height = n.height), e.getContext("2d").drawImage(n, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (n.crossOrigin = "anonymous"),
                                (n.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let n = e,
                        r = 1;
                    for (; n && n.size > t; )
                        try {
                            r > 0.2 ? ((r *= 0.7), (n = await c(n, 1, r))) : (n = await c(n, 0.7, r));
                        } catch (e) {
                            n = void 0;
                        }
                    return n;
                },
                c = (e, t, n) =>
                    new Promise((r, o) => {
                        const i = new Image();
                        (i.onload = () => {
                            const e = document.createElement("canvas"),
                                o = e.getContext("2d"),
                                a = i.width * t,
                                s = i.height * t;
                            (e.width = a),
                                (e.height = s),
                                o.drawImage(i, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    n,
                                );
                        }),
                            (i.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (i.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
                h = "Reading aborted";
        },
        549755: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(571372);
            class r extends Error {
                constructor(e, t, n) {
                    super(e), (this.code = t), (this.type = n || null);
                }
            }
        },
        205074: (e, t, n) => {
            n.d(t, { DS: () => s, ZP: () => l });
            n(543673), n(240753), n(128399);
            var r = n(790187),
                o = n(276259),
                i = n(122123);
            function a(e, t) {
                const n = (function (e) {
                        return [r.Z.LEFT_BOTTOM, r.Z.LEFT_TOP, r.Z.RIGHT_BOTTOM, r.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [o, i] = n ? [e.height, e.width] : [e.width, e.height];
                return { width: o, height: i };
            }
            const s = (e) => {
                const t = e instanceof l,
                    n = e.isImage || e.isGif,
                    r = e.orientation,
                    o = e.width && e.height,
                    i = e.img;
                return !!(t && n && r && o && i);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === o.Re), (this.isImage = o.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, i.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: n, width: r } = a(e, t);
                                  return (this.img = e), (this.width = r), (this.height = n), (this.orientation = t), this;
                              };
                              return (0, r.C)(this.fileHandle)
                                  .then((e) => t(e === r.Z.UNKNOWN ? r.Z.TOP_LEFT : e))
                                  .catch(() => t(r.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, n) => {
            n.d(t, { gK: () => o, o2: () => a, po: () => i });
            var r = n(549755);
            const o = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function i(e) {
                return new Promise((t, n) => {
                    const i = (e, t) => {
                            const i = new r.Z(e, t, o.type);
                            n(i);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : i("Image lacks height or width", o.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            i("Error loading image", o.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, n) => {
                    const i = (e, t) => {
                            const i = new r.Z(e, t, o.type);
                            n(i);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    n = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    n.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const n = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(n);
                                        } else i("Failed to convert image to blob", o.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else i("Image lacks height or width", o.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            i("Error loading image", o.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, n) => {
            n.d(t, { Q: () => l, S: () => s });
            var r = n(332775),
                o = n.n(r),
                i = n(276259),
                a = n(549755);
            const s = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, i.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === i.ZF ? s.HASHING_ABORTED : s.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = o()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", s.INVALID_HASH);
                        });
        },
        653843: (e, t, n) => {
            n.d(t, { Y7: () => m, ZP: () => x, m2: () => y });
            var r = n(19697),
                o = n(790187),
                i = n(549755),
                a = n(205074),
                s = n(276259);
            function l(e, { maxDimension: t, maxFileSize: n, targetQuality: r }) {
                return (function (e, t, n, r) {
                    function o(i, a) {
                        return c(e, e.width, e.height, i, a).then((e) => {
                            const l = e.width > n || e.height > n,
                                c = e.toDataURL("image/jpeg", r),
                                d = c.split(";base64,")[1],
                                u = (0, s.ku)(d);
                            if (l || u > t) {
                                let e = 0.8;
                                return l && (e = i > a ? n / i : n / a), o(i * e, a * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, n, t, r).then(s.Lw);
            }
            function c(e, t, n, o, i) {
                const a = t / 2,
                    s = n / 2;
                return e instanceof HTMLCanvasElement && t <= o && n <= i ? Promise.resolve(e) : a <= o && s <= i ? (0, r.$i)(e, o, i) : (0, r.$i)(e, a, s).then((e) => c(e, e.width, e.height, o, i));
            }
            const d = 5242880,
                u = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                g = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                p = (e, t = d, n = u) => {
                    const { height: r, size: o, width: i } = e;
                    return i > n || r > n || o > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                w = (e, t) => {
                    const { height: n, left: r, top: o, width: i } = f(e, t);
                    return !(0 === o && 0 === r && i === e.width && n === e.height);
                };
            function y(e, t) {
                const { maxFileSize: n = d, maxDimension: r = u, cropData: o, jpgPixelsPerByteForResize: i } = t || {},
                    a = "image/jpeg" === e.type,
                    s = (e.width * e.height) / e.size;
                return g(e) || p(e, n, r) || w(e, o) || (a && !!i && s < i);
            }
            const b = (e, t) => {
                    const { height: n, width: r } = e;
                    return r <= t && n <= t ? { width: r, height: n } : r > n ? { width: t, height: Math.round(n / (r / t)) } : { width: Math.round(r / (n / t)), height: t };
                },
                E = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function x(e, t) {
                const { maxFileSize: n = d, maxDimension: o = u, targetQuality: s = h, cropData: c } = t || {},
                    g = f(e, c);
                if (!y(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new i.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new i.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => l(e, { maxFileSize: n, maxDimension: o, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const n = ({ height: n, width: o }) => (0, r.$i)(e, o, n, t, g);
                        return E(e)
                            .then(() => ((e) => e(b(g, o)))(n))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new i.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, r.Z)(e, (e) => o(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c.b48d8ffa.js.map

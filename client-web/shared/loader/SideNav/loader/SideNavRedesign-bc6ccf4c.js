"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(325686),
                i = r(392237);
            function a({ spacing: e, style: t }) {
                return n.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(325686),
                i = r(392237),
                a = r(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        h = d.length,
                        m = "transparent" === t;
                    return n.createElement(
                        o.Z,
                        { style: [s.root, l, { height: a.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => n.createElement(a.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: o, size: c, style: [0 !== o && { marginStart: -1 * i.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: h - o }], uri: e })),
                    );
                },
                s = i.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                o = r(476984),
                i = r.n(o),
                a = r(143778),
                l = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: i, loadingMessage: a, onRequestRetry: d, render: m, renderFailure: g, retryMessage: p, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? n.createElement(l.Z, { icon: i, onRequestRetry: d, retryMessage: p }) : r ? n.createElement(s.m, { failureMessage: r }) : g();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(325686);
            class i extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const n = t[r];
                                    let o = "";
                                    return n && (o = ` ${100 * n}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: i } = this.props;
                    return n.createElement(o.Z, { style: [i, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            i.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const a = i;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                o = r(325686),
                i = r(674132),
                a = r.n(i),
                l = r(283379),
                s = r(731708),
                c = r(392237);
            const d = a().f1a1b791,
                u = a().if2bf8b4,
                h = a().f3624b5c,
                m = a().b4b3b113,
                g = a().be222050,
                p = a().hcbbe447;
            class f extends n.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return n.createElement(o.Z, { style: [w.root, r] }, n.createElement(l.default, { style: [w.icon, e && w[e]] }), n.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: n, advertiser: o, advertiser_name: i, disclosure_type: a } = r,
                        l = e && o && e === o.id_str,
                        s = "string" == typeof a && "political" === a.toLowerCase(),
                        c = "string" == typeof a && "issue" === a.toLowerCase(),
                        f = !(!n || "POLITICAL" !== n.disclaimerType) || s,
                        w = !(!n || "ISSUE" !== n.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: y } = n || {};
                    let b;
                    return (b = t || (!i || l || y ? (f ? h : w ? g : u) : f ? m({ fullName: i }) : w ? p({ fullName: i }) : d({ fullName: i }))), b;
                }
            }
            f.defaultProps = { color: "gray700" };
            const w = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        280278: (e, t, r) => {
            r.d(t, { ZP: () => p });
            var n = r(202784),
                o = r(325686),
                i = r(827515),
                a = r(461756),
                l = r(731708),
                s = r(392237);
            const c = "up",
                d = "down",
                u = (e, t, r) => {
                    r((r) => {
                        const n = (0, i.Z)(e) ? (e > (r.count || 0) ? c : d) : c;
                        return { ...r, count: e, oldText: r.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: r, count: s, ...d } = e,
                        [p, f] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        w = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (w.current)
                                if (a.Z.reducedMotionEnabled) f((r) => ({ ...r, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, i.Z)(e.count) && p.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((r) => ({ ...r, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        n.useEffect(() => {
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
                        n.useMemo(() => {
                            const e = h[p.transitionDirection],
                                t = p.oldText && !a.Z.reducedMotionEnabled,
                                i = !p.animating && p.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...m, ...(p.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return n.createElement(
                                o.Z,
                                { style: [g.root, r] },
                                t ? n.createElement("span", { style: s }, n.createElement(l.ZP, d, p.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, f),
                                        style: c,
                                    },
                                    n.createElement(l.ZP, d, p.text),
                                ),
                            );
                        }, [r, d, p, w, f])
                    );
                };
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => k });
            var n = r(202784),
                o = r(674132),
                i = r.n(o),
                a = r(492140),
                l = r(720600),
                s = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                h = r(98440),
                m = r(790093),
                g = r(452693),
                p = r(544367),
                f = r(264171),
                w = r(159340),
                y = r(404971),
                b = r(262009),
                E = r(76388),
                v = r(488746),
                x = r(246492),
                C = r(520913),
                T = r(731708),
                I = r(642153),
                Z = r(879891),
                F = r(392237),
                P = r(54606);
            const R = i().ae408b76,
                S = i().j355f008,
                L = i().habf9678,
                O = i().db0798ed,
                _ = i().dc716ec9,
                A = ({ text: e }) => {
                    const { direction: t } = (0, Z.Z)();
                    return n.createElement(T.ZP, { dir: t, withHashflags: !0 }, e);
                },
                D = (e, t) =>
                    t
                        ? R
                        : ((e) => {
                              const t = n.createElement(A, { text: e });
                              return n.createElement(i().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                B = F.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                M = F.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                k = ({ contextType: e, iconColor: t, iconSize: r, link: o, retweetData: i, text: T, topicData: Z, userAvatarUrls: R }) => {
                    const { isSelfRetweet: k, name: N, screenName: H } = i || {},
                        z = ((e, t, r, o = []) => {
                            const i = B[t],
                                T = [r ? { color: F.default.theme.colors[r] } : M.colorDeepGray, i],
                                Z = n.createElement(a.default, { style: T }),
                                R = n.createElement(l.default, { style: T }),
                                S = n.createElement(s.default, { style: T }),
                                L = n.createElement(c.default, { style: T }),
                                O = n.createElement(d.default, { style: T }),
                                _ = n.createElement(u.default, { style: M.circle }),
                                A = n.createElement(h.default, { style: T }),
                                D = n.createElement(m.default, { style: T }),
                                k = n.createElement(g.default, { style: T }),
                                N = n.createElement(p.default, { style: T }),
                                H = n.createElement(f.default, { style: T }),
                                z = n.createElement(w.default, { style: T }),
                                G = n.createElement(y.default, { style: T }),
                                Q = n.createElement(b.default, { style: T }),
                                j = n.createElement(E.default, { style: T }),
                                U = n.createElement(v.default, { style: T }),
                                W = n.createElement(x.default, { style: T }),
                                $ = n.createElement(I.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = n.createElement(C.default, { style: T });
                            switch (e) {
                                case P.Q.Pin:
                                case P.Q.ReplyPin:
                                    return Z;
                                case P.Q.Retweet:
                                    return R;
                                case P.Q.Like:
                                    return S;
                                case P.Q.Follow:
                                    return L;
                                case P.Q.Moment:
                                    return O;
                                case P.Q.NewTweets:
                                    return _;
                                case P.Q.Reply:
                                case P.Q.Conversation:
                                    return A;
                                case P.Q.Feedback:
                                    return D;
                                case P.Q.Topic:
                                    return k;
                                case P.Q.List:
                                    return N;
                                case P.Q.Location:
                                    return H;
                                case P.Q.Community:
                                    return z;
                                case P.Q.Spaces:
                                    return G;
                                case P.Q.Sparkle:
                                    return Q;
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
                        })(e, r, t, R);
                    switch (e) {
                        case P.Q.Retweet:
                            return { Icon: z, text: T || D(N, k), link: H ? `https://twitter.com/${H}` : void 0 };
                        case P.Q.Pin:
                            return { Icon: z, text: T || S };
                        case P.Q.ReplyPin:
                            return { Icon: z, text: L };
                        case P.Q.Topic:
                            return { Icon: z, "aria-label": "Recommendation" === Z?.functionalityType || "RecWithEducation" === Z?.functionalityType ? _({ topicName: T }) : O({ topicName: T }), text: T ? n.createElement(A, { text: T }) : null, link: o };
                        default:
                            return { Icon: z, text: T ? n.createElement(A, { text: T }) : null, link: o };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => p });
            r(136728);
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                a = r(872405),
                l = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                h = r(54606);
            class m extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: h, testID: m, textColor: p, textSize: f, topControl: w, weight: y, withBottomBorder: b, withLeftPadding: E, withTextCentered: v, ...x } = this.props,
                        { Icon: C, "aria-label": T, link: I, text: Z } = (0, u.Z)(x),
                        F = n.createElement(i.ZP, { "aria-label": T, color: p, id: s, numberOfLines: 2, size: f, testID: m, weight: y, withoutTwemojiAndHashflags: !0 }, Z),
                        { cellStyle: P, viewStyle: R } = this._getStyles();
                    return Z ? n.createElement(l.ZP.UseProps, null, (i) => n.createElement(n.Fragment, null, w || null, n.createElement(o.Z, { onLayout: c, style: [h, R, i.socialContextRefreshEnabled() && !E && g.socialContextRefresh] }, n.createElement(a.Z, { avatarCell: C || (E ? null : void 0), avatarCellStyle: [r, g.socialContextIconColumn, !E && g.unsetIconWidth, i.socialContextRefreshEnabled() && !E && g.socialContextRefreshIcon], avatarSize: e, cellStyle: P }, n.createElement(o.Z, { style: g.cellWrapper }, n.createElement(o.Z, { style: [g.socialContextTextColumn, i.socialContextRefreshEnabled() && !E && g.socialContextRefreshTextColumn] }, I ? this._renderLink(I, F) : F), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: o, onClick: a, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: m } = l || {},
                        g = n.createElement(i.ZP, { color: s, id: o, link: e, onClick: a, withoutTwemojiAndHashflags: !0 }, t);
                    return r === h.Q.Topic && u ? n.createElement(c.Z, { topicId: u.topicId }, g) : r === h.Q.Retweet && m ? n.createElement(d.Z, { screenName: m }, g) : g;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: n } = this.props,
                        o = t === h.Q.TextOnly,
                        i = r ? [g.bottomBorderMargin, !!e && g.bottomBorder] : [],
                        a = r && !e ? [g.bottomBorder] : [];
                    return o && a.push(g.topicContext), n && a.push(g.socialContextTextCentered), { viewStyle: i, cellStyle: a };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const g = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                p = m;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => n });
            r(202784);
            const n = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(215337),
                l = r(392237),
                s = r(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return o.createElement("defs", null, o.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: h, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, o.createElement("stop", { stopColor: e.primary }), o.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const h = "space-gradient";
            u.fill = `url(#${h})`;
            const m = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return o.createElement(
                            a.Z,
                            (0, n.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(r),
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
                                (0, n.Z)(
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
                g = Object.freeze(m);
        },
        977220: (e, t, r) => {
            r.d(t, { Cs: () => d, K: () => l, ai: () => s });
            var n = r(465233),
                o = r(483054),
                i = r(295559),
                a = r(392237);
            function l(e = "audiospace") {
                return a.default.theme.highContrastEnabled ? h(u.HighContrast[e]) : h(u.Default[e]);
            }
            function s(e = "audiospace") {
                return a.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, n.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function h(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = i.xO(e),
                    r = o.$n({ color: t, coefficient: 0.5 });
                return i.vq(i.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(674132),
                l = r.n(a),
                s = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                h = r(392237),
                m = r(823161);
            const g = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, i] = o.useState(),
                    a = !!(r && r > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...h } = e,
                    g =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return y.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return y.activeLiveVideo({ screenName: t });
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
                }, [s]);
                const f = o.useCallback((e) => o.createElement(u.Z.Default, (0, n.Z)({}, e, { type: s })), [s]);
                return o.createElement(
                    m.default,
                    (0, n.Z)({}, h, {
                        BorderComponent: f,
                        "aria-label": g,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && i(t.width);
                            }
                        },
                        borderWidth: a ? "large" : "medium",
                        decoration: o.createElement(p, { isWide: a, type: s }),
                        gapWidth: a ? "space4" : "space2",
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
                return "livevideo" === e.type ? o.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [w.liveVideoLabelContainer, w.borderNarrow, e.isWide ? w.liveVideoLabel : w.liveVideoLabelNarrow], type: "live" }) : o.createElement(i.Z, { style: [w.root, e.isWide ? w.rootWide : w.rootNarrow] }, o.createElement(u.Z.Default, { style: [w.spaceGradient, e.isWide ? w.borderWide : w.borderNarrow] }, o.createElement(s.default, { style: w.spaceIcon })));
            }
            const w = h.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        n = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                o = r(731708),
                i = r(354149),
                a = r(310452),
                l = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: h, withheldEntities: m }) => {
                const { description: g, entities: p } = (0, l.H)({ description: t, entities: r, withheldDescription: h, withheldEntities: m }),
                    f = a.ZP.descriptionTextParts(g, p);
                return f.length
                    ? n.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => n.createElement(i.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: r, withheldEntities: n }) => (r ? { description: r, entities: n } : { description: e, entities: t });
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        488746: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        76388: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        19697: (e, t, r) => {
            r.d(t, { q8: () => c, $i: () => i });
            r(571372);
            var n = r(790187);
            const o = (e, t) => {
                const r = document.createElement("canvas");
                (r.width = e), (r.height = t);
                const n = r.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), r;
            };
            function i(e, t, r, o, i) {
                return s(t, r).then(
                    (t) => (
                        (function (e, t, r, o, i, a) {
                            const l = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let s = l.left,
                                c = l.top,
                                d = l.width,
                                u = l.height,
                                h = 0,
                                m = 0,
                                g = r,
                                p = o;
                            switch ((e.save(), i)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (s = t.width - l.width - l.left), (h = -r);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (s = t.width - l.width - l.left), (c = t.height - l.height - l.top), (h = -r), (m = -o);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - l.height - l.top), (m = -o);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (s = l.top), (c = l.left), (d = l.height), (u = l.width), (h = -o / 2), (m = -r / 2), (g = o), (p = r);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), (s = l.top), (c = t.height - l.width - l.left), (d = l.height), (u = l.width), (h = -o / 2), (m = -r / 2), (g = o), (p = r);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (s = t.width - l.height - l.top), (c = t.height - l.width - l.left), (d = l.height), (u = l.width), (h = -o / 2), (m = -r / 2), (g = o), (p = r);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), (s = t.width - l.height - l.top), (c = l.left), (d = l.height), (u = l.width), (h = -o / 2), (m = -r / 2), (g = o), (p = r);
                            }
                            e.drawImage(t, s, c, d, u, h, m, g, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, o, i),
                        t
                    ),
                );
            }
            const a = 3145728,
                l = 5242880;
            function s(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const r = o(e, t);
                    return c(r)
                        .then(() => r)
                        .catch(() => {
                            const r = e * t;
                            if (r > l) {
                                const r = d(l, e, t);
                                return s(r.width, r.height);
                            }
                            if (r > a) {
                                const r = d(a, e, t);
                                return s(r.width, r.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, r) => {
                    const n = e.toDataURL("image/jpeg");
                    n && "data:," !== n ? t(n) : r(new Error("Malformed canvas"));
                });
            }
            function d(e, t, r) {
                const n = Math.sqrt((e * r) / t),
                    o = (t * n) / r;
                return { height: Math.floor(n), width: Math.floor(o) };
            }
        },
        790187: (e, t, r) => {
            r.d(t, { C: () => i, Z: () => n });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                o = (e, t, r = 65536) => {
                    let n = new Uint8Array([]),
                        o = 0;
                    function i(i, a, l) {
                        const s = i - o,
                            c = s + a;
                        if (s >= 0 && c <= n.length) l(n.subarray(s, c), i);
                        else {
                            const s = new FileReader();
                            (s.onload = function () {
                                (n = new Uint8Array(this.result)), (o = i), l(n.subarray(0, a), i);
                            }),
                                (s.onerror = t.bind(null, 0)),
                                null !== e && s.readAsArrayBuffer(e.slice(i, i + Math.max(r, a)));
                        }
                    }
                    function a(e) {
                        const r = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === r) return void t(0);
                        function n(t, n) {
                            let o = 0;
                            for (let i = 0; i < n; i++) o = (o << 8) + e[t + (r ? i : n - 1 - i)];
                            return o;
                        }
                        const o = e.length > 8 && n(4, 4);
                        if (!o || o + 2 > e.length) return void t(0);
                        let i = n(o, 2);
                        if (o + 12 * i + 6 > e.length) return void t(0);
                        let a = o + 2;
                        for (; i > 0; ) {
                            if (((i -= 1), 274 === n(a, 2) && 3 === n(a + 2, 2) && 1 === n(a + 4, 4))) return void t(n(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? i(0, 10, function e(r, n) {
                              const o = r[1];
                              if (r.length < 4 || 255 !== r[0] || 217 === o) return void t(0);
                              const l = o < 208 || o > 217 ? (r[2] << 8) + r[3] : 0;
                              225 === o && l > 8 && "Exif\0\0" === String.fromCharCode.apply(null, r.subarray(4, 10)) ? i(n + 10, l - 8, a) : i(n + 2 + l, 10, e);
                          })
                        : t(0);
                },
                i = (e, t) => {
                    const r = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((i) => {
                        r
                            ? i(n.TOP_LEFT)
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
        276259: (e, t, r) => {
            r.d(t, { Lw: () => o, Re: () => u, VJ: () => l, ZF: () => h, hv: () => s, ku: () => n, qp: () => i, uv: () => a, v5: () => d });
            r(571372), r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(543673), r(240753), r(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, r) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) r(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, r] = n,
                                    o = atob(r),
                                    i = o.length,
                                    a = Array(i);
                                for (let e = 0; e < i; e++) a[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else r(Error("The Uint8Array type is not available"));
                        else r(Error("The atob API is not available"));
                    else r(Error("The Blob API is not available"));
                });
            }
            const i = (e, t) =>
                    new Promise((r, n) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), n(Error(h));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? r(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                n(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const r = document.createElement("a");
                    (r.href = e), (r.download = t), (r.target = "_blank"), r.click(), r.remove();
                },
                l = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const r = new Image();
                            (r.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = r.width), (e.height = r.height), e.getContext("2d").drawImage(r, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (r.crossOrigin = "anonymous"),
                                (r.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                s = async (e, t) => {
                    if (e.size <= t) return e;
                    let r = e,
                        n = 1;
                    for (; r && r.size > t; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (r = await c(r, 1, n))) : (r = await c(r, 0.7, n));
                        } catch (e) {
                            r = void 0;
                        }
                    return r;
                },
                c = (e, t, r) =>
                    new Promise((n, o) => {
                        const i = new Image();
                        (i.onload = () => {
                            const e = document.createElement("canvas"),
                                o = e.getContext("2d"),
                                a = i.width * t,
                                l = i.height * t;
                            (e.width = a),
                                (e.height = l),
                                o.drawImage(i, 0, 0, a, l),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    r,
                                );
                        }),
                            (i.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (i.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
                h = "Reading aborted";
        },
        549755: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(571372);
            class n extends Error {
                constructor(e, t, r) {
                    super(e), (this.code = t), (this.type = r || null);
                }
            }
        },
        205074: (e, t, r) => {
            r.d(t, { DS: () => l, ZP: () => s });
            r(543673), r(240753), r(128399);
            var n = r(790187),
                o = r(276259),
                i = r(122123);
            function a(e, t) {
                const r = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [o, i] = r ? [e.height, e.width] : [e.width, e.height];
                return { width: o, height: i };
            }
            const l = (e) => {
                const t = e instanceof s,
                    r = e.isImage || e.isGif,
                    n = e.orientation,
                    o = e.width && e.height,
                    i = e.img;
                return !!(t && r && n && o && i);
            };
            class s {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === o.Re), (this.isImage = o.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, i.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: r, width: n } = a(e, t);
                                  return (this.img = e), (this.width = n), (this.height = r), (this.orientation = t), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((e) => t(e === n.Z.UNKNOWN ? n.Z.TOP_LEFT : e))
                                  .catch(() => t(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, r) => {
            r.d(t, { gK: () => o, o2: () => a, po: () => i });
            var n = r(549755);
            const o = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function i(e) {
                return new Promise((t, r) => {
                    const i = (e, t) => {
                            const i = new n.Z(e, t, o.type);
                            r(i);
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
                return new Promise((t, r) => {
                    const i = (e, t) => {
                            const i = new n.Z(e, t, o.type);
                            r(i);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    r = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    r.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const r = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(r);
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
        514354: (e, t, r) => {
            r.d(t, { Q: () => s, S: () => l });
            var n = r(332775),
                o = r.n(n),
                i = r(276259),
                a = r(549755);
            const l = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                s = (e, t) =>
                    (0, i.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === i.ZF ? l.HASHING_ABORTED : l.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = o()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", l.INVALID_HASH);
                        });
        },
        653843: (e, t, r) => {
            r.d(t, { Y7: () => m, ZP: () => v, m2: () => y });
            var n = r(19697),
                o = r(790187),
                i = r(549755),
                a = r(205074),
                l = r(276259);
            function s(e, { maxDimension: t, maxFileSize: r, targetQuality: n }) {
                return (function (e, t, r, n) {
                    function o(i, a) {
                        return c(e, e.width, e.height, i, a).then((e) => {
                            const s = e.width > r || e.height > r,
                                c = e.toDataURL("image/jpeg", n),
                                d = c.split(";base64,")[1],
                                u = (0, l.ku)(d);
                            if (s || u > t) {
                                let e = 0.8;
                                return s && (e = i > a ? r / i : r / a), o(i * e, a * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, r, t, n).then(l.Lw);
            }
            function c(e, t, r, o, i) {
                const a = t / 2,
                    l = r / 2;
                return e instanceof HTMLCanvasElement && t <= o && r <= i ? Promise.resolve(e) : a <= o && l <= i ? (0, n.$i)(e, o, i) : (0, n.$i)(e, a, l).then((e) => c(e, e.width, e.height, o, i));
            }
            const d = 5242880,
                u = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                g = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                p = (e, t = d, r = u) => {
                    const { height: n, size: o, width: i } = e;
                    return i > r || n > r || o > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                w = (e, t) => {
                    const { height: r, left: n, top: o, width: i } = f(e, t);
                    return !(0 === o && 0 === n && i === e.width && r === e.height);
                };
            function y(e, t) {
                const { maxFileSize: r = d, maxDimension: n = u, cropData: o, jpgPixelsPerByteForResize: i } = t || {},
                    a = "image/jpeg" === e.type,
                    l = (e.width * e.height) / e.size;
                return g(e) || p(e, r, n) || w(e, o) || (a && !!i && l < i);
            }
            const b = (e, t) => {
                    const { height: r, width: n } = e;
                    return n <= t && r <= t ? { width: n, height: r } : n > r ? { width: t, height: Math.round(r / (n / t)) } : { width: Math.round(n / (r / t)), height: t };
                },
                E = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function v(e, t) {
                const { maxFileSize: r = d, maxDimension: o = u, targetQuality: l = h, cropData: c } = t || {},
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
                const p = (e) => s(e, { maxFileSize: r, maxDimension: o, targetQuality: l });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const r = ({ height: r, width: o }) => (0, n.$i)(e, o, r, t, g);
                        return E(e)
                            .then(() => ((e) => e(b(g, o)))(r))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new i.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, n.Z)(e, (e) => o(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c.cb0c684a.js.map

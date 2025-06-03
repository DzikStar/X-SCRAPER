"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c", "icons/IconPlus-js"],
    {
        642153: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                o = r(325686),
                i = r(392237),
                a = r(823161);
            const s = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: s, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        h = d.length,
                        m = "transparent" === t;
                    return n.createElement(
                        o.Z,
                        { style: [l.root, s, { height: a.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => n.createElement(a.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: o, size: c, style: [0 !== o && { marginStart: -1 * i.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: h - o }], uri: e })),
                    );
                },
                l = i.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        529509: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                o = r(325686),
                i = r(111677),
                a = r.n(i),
                s = r(815858),
                l = r(731708),
                c = r(642153),
                d = r(530732),
                u = r(392237);
            const h = a().a35a5b10,
                m = a().fc8cd112,
                p = (e) => n.createElement(l.ZP, null, e);
            class g extends n.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: r, textStyle: i, userScreenName: a, withFacepile: u } = this.props,
                        m = this._renderMessage();
                    return n.createElement(s.Z, { duration: "long", show: void 0 !== r, type: "fade" }, r ? n.createElement(d.Z, { "aria-label": h, interactiveStyles: null, link: a ? ((p = a), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: r, isPressed: s }) => n.createElement(o.Z, { style: f.content }, !e && u ? n.createElement(c.Z, { userAvatarUrls: t }) : null, n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && f.message, (r || s) && !!a && f.underline, i] }, e && u ? n.createElement(c.Z, { style: f.inlineFacepile, userAvatarUrls: t }) : null, m))) : n.createElement(o.Z, { style: f.content }, n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, m)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : m;
                }
                _renderOneUsername(e) {
                    return n.createElement(a().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return n.createElement(a().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return n.createElement(a().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const r = t - 2;
                    return n.createElement(a().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), r);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const f = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
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
                i = r(111677),
                a = r.n(i),
                s = r(283379),
                l = r(731708),
                c = r(392237);
            const d = a().f1a1b791,
                u = a().if2bf8b4,
                h = a().f3624b5c,
                m = a().b4b3b113,
                p = a().be222050,
                g = a().hcbbe447;
            class f extends n.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return n.createElement(o.Z, { style: [w.root, r] }, n.createElement(s.default, { style: [w.icon, e && w[e]] }), n.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: n, advertiser: o, advertiser_name: i, disclosure_type: a } = r,
                        s = e && o && e === o.id_str,
                        l = "string" == typeof a && "political" === a.toLowerCase(),
                        c = "string" == typeof a && "issue" === a.toLowerCase(),
                        f = !(!n || "POLITICAL" !== n.disclaimerType) || l,
                        w = !(!n || "ISSUE" !== n.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: y } = n || {};
                    let b;
                    return (b = t || (!i || s || y ? (f ? h : w ? p : u) : f ? m({ fullName: i }) : w ? g({ fullName: i }) : d({ fullName: i }))), b;
                }
            }
            f.defaultProps = { color: "gray700" };
            const w = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        280278: (e, t, r) => {
            r.d(t, { ZP: () => g });
            var n = r(202784),
                o = r(325686),
                i = r(827515),
                a = r(461756),
                s = r(731708),
                l = r(392237);
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
                p = l.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: r, count: l, ...d } = e,
                        [g, f] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, i.Z)(e.count) && g.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((r) => ({ ...r, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            w.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        n.useMemo(() => {
                            const e = h[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                i = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                l = { ...m, ...(g.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return n.createElement(
                                o.Z,
                                { style: [p.root, r] },
                                t ? n.createElement("span", { style: l }, n.createElement(s.ZP, d, g.oldText)) : null,
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
                                    n.createElement(s.ZP, d, g.text),
                                ),
                            );
                        }, [r, d, g, w, f])
                    );
                };
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => R });
            var n = r(202784),
                o = r(111677),
                i = r.n(o),
                a = r(492140),
                s = r(720600),
                l = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                h = r(98440),
                m = r(790093),
                p = r(452693),
                g = r(544367),
                f = r(264171),
                w = r(159340),
                y = r(404971),
                b = r(262009),
                E = r(76388),
                v = r(488746),
                C = r(246492),
                x = r(520913),
                T = r(731708),
                _ = r(642153),
                Z = r(879891),
                I = r(392237),
                F = r(54606);
            const P = i().ae408b76,
                S = i().j355f008,
                k = i().habf9678,
                L = i().db0798ed,
                A = i().dc716ec9,
                N = ({ text: e }) => {
                    const { direction: t } = (0, Z.Z)();
                    return n.createElement(T.ZP, { dir: t, withHashflags: !0 }, e);
                },
                O = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = n.createElement(N, { text: e });
                              return n.createElement(i().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                B = I.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                D = I.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                R = ({ contextType: e, iconColor: t, iconSize: r, link: o, retweetData: i, text: T, topicData: Z, userAvatarUrls: P }) => {
                    const { isSelfRetweet: R, name: U, screenName: M } = i || {},
                        H = ((e, t, r, o = []) => {
                            const i = B[t],
                                T = [r ? { color: I.default.theme.colors[r] } : D.colorDeepGray, i],
                                Z = n.createElement(a.default, { style: T }),
                                P = n.createElement(s.default, { style: T }),
                                S = n.createElement(l.default, { style: T }),
                                k = n.createElement(c.default, { style: T }),
                                L = n.createElement(d.default, { style: T }),
                                A = n.createElement(u.default, { style: D.circle }),
                                N = n.createElement(h.default, { style: T }),
                                O = n.createElement(m.default, { style: T }),
                                R = n.createElement(p.default, { style: T }),
                                U = n.createElement(g.default, { style: T }),
                                M = n.createElement(f.default, { style: T }),
                                H = n.createElement(w.default, { style: T }),
                                W = n.createElement(y.default, { style: T }),
                                G = n.createElement(b.default, { style: T }),
                                z = n.createElement(E.default, { style: T }),
                                V = n.createElement(v.default, { style: T }),
                                j = n.createElement(C.default, { style: T }),
                                Q = n.createElement(_.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                $ = n.createElement(x.default, { style: T });
                            switch (e) {
                                case F.Q.Pin:
                                case F.Q.ReplyPin:
                                    return Z;
                                case F.Q.Retweet:
                                    return P;
                                case F.Q.Like:
                                    return S;
                                case F.Q.Follow:
                                    return k;
                                case F.Q.Moment:
                                    return L;
                                case F.Q.NewTweets:
                                    return A;
                                case F.Q.Reply:
                                case F.Q.Conversation:
                                    return N;
                                case F.Q.Feedback:
                                    return O;
                                case F.Q.Topic:
                                    return R;
                                case F.Q.List:
                                    return U;
                                case F.Q.Location:
                                    return M;
                                case F.Q.Community:
                                    return H;
                                case F.Q.Spaces:
                                    return W;
                                case F.Q.Sparkle:
                                    return G;
                                case F.Q.SocialProof:
                                case F.Q.FollowFollowed:
                                    return j;
                                case F.Q.FollowMutual:
                                    return V;
                                case F.Q.FollowFollowing:
                                    return z;
                                case F.Q.Facepile:
                                    return Q;
                                case F.Q.Bird:
                                    return $;
                                case F.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, P);
                    switch (e) {
                        case F.Q.Retweet:
                            return { Icon: H, text: T || O(U, R), link: M ? `https://twitter.com/${M}` : void 0 };
                        case F.Q.Pin:
                            return { Icon: H, text: T || S };
                        case F.Q.ReplyPin:
                            return { Icon: H, text: k };
                        case F.Q.Topic:
                            return { Icon: H, "aria-label": "Recommendation" === Z?.functionalityType || "RecWithEducation" === Z?.functionalityType ? A({ topicName: T }) : L({ topicName: T }), text: T ? n.createElement(N, { text: T }) : null, link: o };
                        default:
                            return { Icon: H, text: T ? n.createElement(N, { text: T }) : null, link: o };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => g });
            r(136728);
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                a = r(872405),
                s = r(235902),
                l = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                h = r(54606);
            class m extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: l, onLayout: c, rightControl: d, style: h, testID: m, textColor: g, textSize: f, topControl: w, weight: y, withBottomBorder: b, withLeftPadding: E, withTextCentered: v, ...C } = this.props,
                        { Icon: x, "aria-label": T, link: _, text: Z } = (0, u.Z)(C),
                        I = n.createElement(i.ZP, { "aria-label": T, color: g, id: l, numberOfLines: 2, size: f, testID: m, weight: y, withoutTwemojiAndHashflags: !0 }, Z),
                        { cellStyle: F, viewStyle: P } = this._getStyles();
                    return Z ? n.createElement(s.ZP.UseProps, null, (i) => n.createElement(n.Fragment, null, w || null, n.createElement(o.Z, { onLayout: c, style: [h, P, i.socialContextRefreshEnabled() && !E && p.socialContextRefresh] }, n.createElement(a.Z, { avatarCell: x || (E ? null : void 0), avatarCellStyle: [r, p.socialContextIconColumn, !E && p.unsetIconWidth, i.socialContextRefreshEnabled() && !E && p.socialContextRefreshIcon], avatarSize: e, cellStyle: F }, n.createElement(o.Z, { style: p.cellWrapper }, n.createElement(o.Z, { style: [p.socialContextTextColumn, i.socialContextRefreshEnabled() && !E && p.socialContextRefreshTextColumn] }, _ ? this._renderLink(_, I) : I), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: o, onClick: a, retweetData: s, textColor: l, topicData: u } = this.props,
                        { screenName: m } = s || {},
                        p = n.createElement(i.ZP, { color: l, id: o, link: e, onClick: a, withoutTwemojiAndHashflags: !0 }, t);
                    return r === h.Q.Topic && u ? n.createElement(c.Z, { topicId: u.topicId }, p) : r === h.Q.Retweet && m ? n.createElement(d.Z, { screenName: m }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: n } = this.props,
                        o = t === h.Q.TextOnly,
                        i = r ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        a = r && !e ? [p.bottomBorder] : [];
                    return o && a.push(p.topicContext), n && a.push(p.socialContextTextCentered), { viewStyle: i, cellStyle: a };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = l.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => n });
            r(202784);
            const n = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(215337),
                s = r(392237),
                l = r(977220);
            const c = (e) => `${e}%`,
                d = s.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, l.ai)();
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
                                    const t = (0, l.ai)(e);
                                    return { ...(0, l.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
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
                p = Object.freeze(m);
        },
        977220: (e, t, r) => {
            r.d(t, { Cs: () => d, K: () => s, ai: () => l });
            var n = r(465233),
                o = r(483054),
                i = r(295559),
                a = r(392237);
            function s(e = "audiospace") {
                return a.default.theme.highContrastEnabled ? h(u.HighContrast[e]) : h(u.Default[e]);
            }
            function l(e = "audiospace") {
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
        98538: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                a = r(891198),
                s = r(280278),
                l = r(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return n.createElement(i.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(d.Provider, { value: { onMedia: r } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    o.Z,
                    { style: [h.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(o.Z, { key: t, style: t < r.length - 1 && h.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: r }) => n.createElement(i.ZP, { children: e, color: r ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: r, style: o, weight: a = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? n.createElement(s.ZP, { children: t, count: r, size: c, style: o, weight: a }) : n.createElement(i.ZP, { children: t, color: l ? "white" : "text", size: c, style: o, weight: a }))));
            const h = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = u;
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(111677),
                s = r.n(a),
                l = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                h = r(392237),
                m = r(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, i] = o.useState(),
                    a = !!(r && r > 70),
                    { "aria-label": s, presenceRingType: l, spaceId: c, ...h } = e,
                    p =
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
                }, [t, l]);
                const f = o.useCallback((e) => o.createElement(u.Z.Default, (0, n.Z)({}, e, { type: l })), [l]);
                return o.createElement(
                    m.default,
                    (0, n.Z)({}, h, {
                        BorderComponent: f,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && i(t.width);
                            }
                        },
                        borderWidth: a ? "large" : "medium",
                        decoration: o.createElement(g, { isWide: a, type: l }),
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
            function g(e) {
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
                        r = "100%",
                        n = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: s().b3688156, activeAudioSpace: s().c0eb8825, activeLiveVideo: s().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(731708),
                i = r(354149),
                a = r(310452),
                s = r(720283);
            const l = ({ animateIn: e, description: t, entities: r, isConcise: l, style: c, testID: d, userId: u, withheldDescription: h, withheldEntities: m }) => {
                const { description: p, entities: g } = (0, s.H)({ description: t, entities: r, withheldDescription: h, withheldEntities: m }),
                    f = a.ZP.descriptionTextParts(p, g);
                return f.length
                    ? n.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => n.createElement(i.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                a = r(235902),
                s = r(649846),
                l = r(529509),
                c = r(392237),
                d = r(823161),
                u = r(238406),
                h = r(366635),
                m = r(646797);
            const p = () => !1;
            class g extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: i } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && r) {
                                const { avatarUrls: e, count: t, names: a } = r;
                                return t ? n.createElement(o.Z, { style: [f.marginTop12, f.minHeight] }, "number" == typeof t && n.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(o.Z, { style: f.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(o.Z, { style: f.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(o.Z, { style: f.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: i, userAvatarSize: s, userAvatarUri: l, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return n.createElement(o.Z, { style: f.row }, n.createElement(a.ZP.Provider, { value: { userAvatarLabel: p } }, n.createElement(d.default, { link: r, onClick: t, promotedContent: i, screenName: c, size: s, uri: u ? l : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: i } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(o.Z, { style: f.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : n.createElement(o.Z, { style: f.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: o, onScreenNameClick: i, profileLink: a, promotedContent: s, userHighlightedLabel: l, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: m, userWithFollowsYou: p, withNameWrap: g } = this.props,
                        { badges: f, followIndicator: w, fullName: y } = e;
                    return n.createElement(h.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: f ? t : void 0, isProtected: f ? r : void 0, isVerified: f ? o : void 0, link: a, name: y ? c : d, nameSize: "headline2", onLinkClick: i, promotedContent: s, screenName: d, translatorType: f ? u : void 0, verifiedType: f ? m : void 0, withFollowsYou: w && p, withLink: !0, withNameWrap: g, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(o.Z, { style: f.marginTop4 }, n.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: i, userWithheldDescription: a, userWithheldEntities: s } = this.props,
                        { description: l } = e;
                    return l && t && r && i ? n.createElement(o.Z, { style: [f.row, f.marginTop12] }, n.createElement(u.Z, { description: t, entities: r, userId: i, withheldDescription: a, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: i, userFollowersCount: a, userFriendsCount: s, userScreenName: l } = this.props,
                        { stats: c } = e;
                    return c ? n.createElement(o.Z, { style: [f.row, f.marginTop12] }, n.createElement(m.Z, { followersCount: a, friendsCount: s, onPress: r, screenName: l, subscriptionsCount: i, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            g.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const f = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var w = r(807896);
            var y = r(111677);
            const b = r.n(y)().ef633578;
            class E extends n.PureComponent {
                render() {
                    return n.createElement(g, this.props);
                }
            }
            (E.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: c, userId: d, userName: u, userScreenName: h, ...m } = e,
                    p = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(g, (0, w.Z)({}, m, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: p.isUserStatsWithLink, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: p.profile_image_url_https, userDescription: c, userEntities: p.entities, userFollowersCount: p.followers_count, userFriendsCount: p.friends_count, userId: d, userName: u, userScreenName: h, userWithFollowsYou: p.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (E.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(g, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: r, userScreenName: r, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(111677),
                i = r.n(o),
                a = r(891198),
                s = r(98538);
            class l extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: o, style: l, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: h, withSubscriptionsCount: m } = this.props,
                        p = `/${o}/verified_followers`;
                    return n.createElement(s.Z.Group, { style: l }, n.createElement(s.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(s.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), n.createElement(s.Z.Label, null, i().daf8a75f({ count: t })))), n.createElement(s.Z, { count: e, link: u ? p : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(s.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), n.createElement(s.Z.Label, null, i().ad9b5988({ count: e })))), h && void 0 !== c && n.createElement(s.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(s.Z.Value, null, i().a9980948({ formattedCount: (0, a.wl)(c) })), n.createElement(s.Z.Label, null, i().ce44a35c({ count: c })))), m && d && n.createElement(s.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(s.Z.Value, null, i().id949f68({ formattedCount: (0, a.wl)(d) })), n.createElement(s.Z.Label, null, i().hb608cfc({ count: d })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: r, withheldEntities: n }) => (r ? { description: r, entities: n } : { description: e, entities: t });
        },
        379327: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
                return l(t, r).then(
                    (t) => (
                        (function (e, t, r, o, i, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = s.left,
                                c = s.top,
                                d = s.width,
                                u = s.height,
                                h = 0,
                                m = 0,
                                p = r,
                                g = o;
                            switch ((e.save(), i)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - s.width - s.left), (h = -r);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - s.width - s.left), (c = t.height - s.height - s.top), (h = -r), (m = -o);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - s.height - s.top), (m = -o);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = s.top), (c = s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), (l = s.top), (c = t.height - s.width - s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - s.height - s.top), (c = t.height - s.width - s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), (l = t.width - s.height - s.top), (c = s.left), (d = s.height), (u = s.width), (h = -o / 2), (m = -r / 2), (p = o), (g = r);
                            }
                            e.drawImage(t, l, c, d, u, h, m, p, g), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, o, i),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const r = o(e, t);
                    return c(r)
                        .then(() => r)
                        .catch(() => {
                            const r = e * t;
                            if (r > s) {
                                const r = d(s, e, t);
                                return l(r.width, r.height);
                            }
                            if (r > a) {
                                const r = d(a, e, t);
                                return l(r.width, r.height);
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
                    function i(i, a, s) {
                        const l = i - o,
                            c = l + a;
                        if (l >= 0 && c <= n.length) s(n.subarray(l, c), i);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (n = new Uint8Array(this.result)), (o = i), s(n.subarray(0, a), i);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(i, i + Math.max(r, a)));
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
                              const s = o < 208 || o > 217 ? (r[2] << 8) + r[3] : 0;
                              225 === o && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, r.subarray(4, 10)) ? i(n + 10, s - 8, a) : i(n + 2 + s, 10, e);
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
            r.d(t, { Lw: () => o, Re: () => u, VJ: () => s, ZF: () => h, hv: () => l, ku: () => n, qp: () => i, uv: () => a, v5: () => d });
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
                s = (e) =>
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
                l = async (e, t) => {
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
                                s = i.height * t;
                            (e.width = a),
                                (e.height = s),
                                o.drawImage(i, 0, 0, a, s),
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
            r.d(t, { DS: () => s, ZP: () => l });
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
            const s = (e) => {
                const t = e instanceof l,
                    r = e.isImage || e.isGif,
                    n = e.orientation,
                    o = e.width && e.height,
                    i = e.img;
                return !!(t && r && n && o && i);
            };
            class l {
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
            r.d(t, { Q: () => l, S: () => s });
            var n = r(332775),
                o = r.n(n),
                i = r(276259),
                a = r(549755);
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
        653843: (e, t, r) => {
            r.d(t, { Y7: () => m, ZP: () => v, m2: () => y });
            var n = r(19697),
                o = r(790187),
                i = r(549755),
                a = r(205074),
                s = r(276259);
            function l(e, { maxDimension: t, maxFileSize: r, targetQuality: n }) {
                return (function (e, t, r, n) {
                    function o(i, a) {
                        return c(e, e.width, e.height, i, a).then((e) => {
                            const l = e.width > r || e.height > r,
                                c = e.toDataURL("image/jpeg", n),
                                d = c.split(";base64,")[1],
                                u = (0, s.ku)(d);
                            if (l || u > t) {
                                let e = 0.8;
                                return l && (e = i > a ? r / i : r / a), o(i * e, a * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, r, t, n).then(s.Lw);
            }
            function c(e, t, r, o, i) {
                const a = t / 2,
                    s = r / 2;
                return e instanceof HTMLCanvasElement && t <= o && r <= i ? Promise.resolve(e) : a <= o && s <= i ? (0, n.$i)(e, o, i) : (0, n.$i)(e, a, s).then((e) => c(e, e.width, e.height, o, i));
            }
            const d = 5242880,
                u = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                g = (e, t = d, r = u) => {
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
                    s = (e.width * e.height) / e.size;
                return p(e) || g(e, r, n) || w(e, o) || (a && !!i && s < i);
            }
            const b = (e, t) => {
                    const { height: r, width: n } = e;
                    return n <= t && r <= t ? { width: n, height: r } : n > r ? { width: t, height: Math.round(r / (n / t)) } : { width: Math.round(n / (r / t)), height: t };
                },
                E = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function v(e, t) {
                const { maxFileSize: r = d, maxDimension: o = u, targetQuality: s = h, cropData: c } = t || {},
                    p = f(e, c);
                if (!y(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new i.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new i.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const g = (e) => l(e, { maxFileSize: r, maxDimension: o, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const r = ({ height: r, width: o }) => (0, n.$i)(e, o, r, t, p);
                        return E(e)
                            .then(() => ((e) => e(b(p, o)))(r))
                            .then(g);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-bc6ccf4c.6aca9b7a.js.map

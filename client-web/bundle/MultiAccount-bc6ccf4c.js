"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.MultiAccount-bc6ccf4c", "icons/IconChevronDown-js", "icons/IconFollowArrows-js"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(731708),
                i = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return a.createElement(n.Z, { style: d.container }, a.createElement(s.Z, (0, o.Z)({}, u, { interactiveStyles: m, style: d.root }), a.createElement(l.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            function l({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                l = r(823161);
            const i = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: i, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        p = "transparent" === t;
                    return o.createElement(
                        a.Z,
                        { style: [s.root, i, { height: l.default.getSizeStyle(c)?.height }] },
                        d.map((e, a) => o.createElement(l.default, { backgroundColor: t, borderColor: t, borderWidth: p ? "none" : r, key: a, size: c, style: [0 !== a && { marginStart: -1 * n.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - a }], uri: e })),
                    );
                },
                s = n.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                a = r(476984),
                n = r.n(a),
                l = r(143778),
                i = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: n, loadingMessage: l, onRequestRetry: d, render: p, renderFailure: h, retryMessage: g, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? o.createElement(i.Z, { icon: n, onRequestRetry: d, retryMessage: g }) : r ? o.createElement(s.m, { failureMessage: r }) : h();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case m:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(235902),
                l = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? o.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] })), o.createElement(a.Z, { style: c.gapText }, r), o.createElement(a.Z, { style: c.gapColumn }, o.createElement(a.Z, { style: [c.gap, d] }))) : o.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return a.createElement(n.Z, (0, o.Z)({ style: [t, s.root, r && s.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686);
            class n extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const o = t[r];
                                    let a = "";
                                    return o && (a = ` ${100 * o}%`), e + a;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: n } = this.props;
                    return o.createElement(a.Z, { style: [n, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            n.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const l = n;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => f });
            var o = r(202784),
                a = r(325686),
                n = r(111677),
                l = r.n(n),
                i = r(283379),
                s = r(731708),
                c = r(392237);
            const d = l().f1a1b791,
                u = l().if2bf8b4,
                m = l().f3624b5c,
                p = l().b4b3b113,
                h = l().be222050,
                g = l().hcbbe447;
            class f extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(a.Z, { style: [y.root, r] }, o.createElement(i.default, { style: [y.icon, e && y[e]] }), o.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: a, advertiser_name: n, disclosure_type: l } = r,
                        i = e && a && e === a.id_str,
                        s = "string" == typeof l && "political" === l.toLowerCase(),
                        c = "string" == typeof l && "issue" === l.toLowerCase(),
                        f = !(!o || "POLITICAL" !== o.disclaimerType) || s,
                        y = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = o || {};
                    let w;
                    return (w = t || (!n || i || b ? (f ? m : y ? h : u) : f ? p({ fullName: n }) : y ? g({ fullName: n }) : d({ fullName: n }))), w;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => z });
            var o = r(202784),
                a = r(111677),
                n = r.n(a),
                l = r(492140),
                i = r(720600),
                s = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                m = r(98440),
                p = r(790093),
                h = r(452693),
                g = r(544367),
                f = r(264171),
                y = r(159340),
                b = r(404971),
                w = r(262009),
                C = r(76388),
                x = r(488746),
                E = r(246492),
                v = r(520913),
                Z = r(731708),
                k = r(642153),
                S = r(879891),
                P = r(392237),
                R = r(54606);
            const F = n().ae408b76,
                L = n().j355f008,
                B = n().habf9678,
                T = n().db0798ed,
                I = n().dc716ec9,
                D = ({ text: e }) => {
                    const { direction: t } = (0, S.Z)();
                    return o.createElement(Z.ZP, { dir: t, withHashflags: !0 }, e);
                },
                Q = (e, t) =>
                    t
                        ? F
                        : ((e) => {
                              const t = o.createElement(D, { text: e });
                              return o.createElement(n().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                H = P.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                W = P.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                z = ({ contextType: e, iconColor: t, iconSize: r, link: a, retweetData: n, text: Z, topicData: S, userAvatarUrls: F }) => {
                    const { isSelfRetweet: z, name: M, screenName: N } = n || {},
                        _ = ((e, t, r, a = []) => {
                            const n = H[t],
                                Z = [r ? { color: P.default.theme.colors[r] } : W.colorDeepGray, n],
                                S = o.createElement(l.default, { style: Z }),
                                F = o.createElement(i.default, { style: Z }),
                                L = o.createElement(s.default, { style: Z }),
                                B = o.createElement(c.default, { style: Z }),
                                T = o.createElement(d.default, { style: Z }),
                                I = o.createElement(u.default, { style: W.circle }),
                                D = o.createElement(m.default, { style: Z }),
                                Q = o.createElement(p.default, { style: Z }),
                                z = o.createElement(h.default, { style: Z }),
                                M = o.createElement(g.default, { style: Z }),
                                N = o.createElement(f.default, { style: Z }),
                                _ = o.createElement(y.default, { style: Z }),
                                A = o.createElement(b.default, { style: Z }),
                                G = o.createElement(w.default, { style: Z }),
                                j = o.createElement(C.default, { style: Z }),
                                V = o.createElement(x.default, { style: Z }),
                                U = o.createElement(E.default, { style: Z }),
                                $ = o.createElement(k.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                O = o.createElement(v.default, { style: Z });
                            switch (e) {
                                case R.Q.Pin:
                                case R.Q.ReplyPin:
                                    return S;
                                case R.Q.Retweet:
                                    return F;
                                case R.Q.Like:
                                    return L;
                                case R.Q.Follow:
                                    return B;
                                case R.Q.Moment:
                                    return T;
                                case R.Q.NewTweets:
                                    return I;
                                case R.Q.Reply:
                                case R.Q.Conversation:
                                    return D;
                                case R.Q.Feedback:
                                    return Q;
                                case R.Q.Topic:
                                    return z;
                                case R.Q.List:
                                    return M;
                                case R.Q.Location:
                                    return N;
                                case R.Q.Community:
                                    return _;
                                case R.Q.Spaces:
                                    return A;
                                case R.Q.Sparkle:
                                    return G;
                                case R.Q.SocialProof:
                                case R.Q.FollowFollowed:
                                    return U;
                                case R.Q.FollowMutual:
                                    return V;
                                case R.Q.FollowFollowing:
                                    return j;
                                case R.Q.Facepile:
                                    return $;
                                case R.Q.Bird:
                                    return O;
                                case R.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, F);
                    switch (e) {
                        case R.Q.Retweet:
                            return { Icon: _, text: Z || Q(M, z), link: N ? `https://twitter.com/${N}` : void 0 };
                        case R.Q.Pin:
                            return { Icon: _, text: Z || L };
                        case R.Q.ReplyPin:
                            return { Icon: _, text: B };
                        case R.Q.Topic:
                            return { Icon: _, "aria-label": "Recommendation" === S?.functionalityType || "RecWithEducation" === S?.functionalityType ? I({ topicName: Z }) : T({ topicName: Z }), text: Z ? o.createElement(D, { text: Z }) : null, link: a };
                        default:
                            return { Icon: _, text: Z ? o.createElement(D, { text: Z }) : null, link: a };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => g });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                l = r(872405),
                i = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                m = r(54606);
            class p extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: m, testID: p, textColor: g, textSize: f, topControl: y, weight: b, withBottomBorder: w, withLeftPadding: C, withTextCentered: x, ...E } = this.props,
                        { Icon: v, "aria-label": Z, link: k, text: S } = (0, u.Z)(E),
                        P = o.createElement(n.ZP, { "aria-label": Z, color: g, id: s, numberOfLines: 2, size: f, testID: p, weight: b, withoutTwemojiAndHashflags: !0 }, S),
                        { cellStyle: R, viewStyle: F } = this._getStyles();
                    return S ? o.createElement(i.ZP.UseProps, null, (n) => o.createElement(o.Fragment, null, y || null, o.createElement(a.Z, { onLayout: c, style: [m, F, n.socialContextRefreshEnabled() && !C && h.socialContextRefresh] }, o.createElement(l.Z, { avatarCell: v || (C ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !C && h.unsetIconWidth, n.socialContextRefreshEnabled() && !C && h.socialContextRefreshIcon], avatarSize: e, cellStyle: R }, o.createElement(a.Z, { style: h.cellWrapper }, o.createElement(a.Z, { style: [h.socialContextTextColumn, n.socialContextRefreshEnabled() && !C && h.socialContextRefreshTextColumn] }, k ? this._renderLink(k, P) : P), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: a, onClick: l, retweetData: i, textColor: s, topicData: u } = this.props,
                        { screenName: p } = i || {},
                        h = o.createElement(n.ZP, { color: s, id: a, link: e, onClick: l, withoutTwemojiAndHashflags: !0 }, t);
                    return r === m.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, h) : r === m.Q.Retweet && p ? o.createElement(d.Z, { screenName: p }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        a = t === m.Q.TextOnly,
                        n = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        l = r && !e ? [h.bottomBorder] : [];
                    return a && l.push(h.topicContext), o && l.push(h.socialContextTextCentered), { viewStyle: n, cellStyle: l };
                }
            }
            p.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = p;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => o });
            r(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(215337),
                i = r(392237),
                s = r(977220);
            const c = (e) => `${e}%`,
                d = i.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return a.createElement("defs", null, a.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, a.createElement("stop", { stopColor: e.primary }), a.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const p = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return a.createElement(
                            l.Z,
                            (0, o.Z)(
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
                        return a.createElement(
                            n.Z,
                            { style: [d.container, e.style] },
                            a.createElement(
                                l.Z,
                                (0, o.Z)(
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
                h = Object.freeze(p);
        },
        977220: (e, t, r) => {
            r.d(t, { Cs: () => d, K: () => i, ai: () => s });
            var o = r(465233),
                a = r(483054),
                n = r(295559),
                l = r(392237);
            function i(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function s(e = "audiospace") {
                return l.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, o.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function m(e) {
                return { primary: p(e.primary), secondary: p(e.secondary) };
            }
            function p(e) {
                const t = n.xO(e),
                    r = a.$n({ color: t, coefficient: 0.5 });
                return n.vq(n.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                l = r(111677),
                i = r.n(l),
                s = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                m = r(392237),
                p = r(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, n] = a.useState(),
                    l = !!(r && r > 70),
                    { "aria-label": i, presenceRingType: s, spaceId: c, ...m } = e,
                    h =
                        i ||
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
                a.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const f = a.useCallback((e) => a.createElement(u.Z.Default, (0, o.Z)({}, e, { type: s })), [s]);
                return a.createElement(
                    p.default,
                    (0, o.Z)({}, m, {
                        BorderComponent: f,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && n(t.width);
                            }
                        },
                        borderWidth: l ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: l, type: s }),
                        gapWidth: l ? "space4" : "space2",
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
            function g(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return a.createElement(f, e);
                    default:
                        return null;
                }
            }
            function f(e) {
                return "livevideo" === e.type ? a.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : a.createElement(n.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, a.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, a.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        o = e.spacesPx.space4,
                        a = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * o, bottom: -1 * o }, rootNarrow: { end: -1 * a, bottom: -1 * a }, borderWide: { borderWidth: o }, borderNarrow: { borderWidth: a }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                b = { withoutUsernameFallback: i().b3688156, activeAudioSpace: i().c0eb8825, activeLiveVideo: i().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(731708),
                n = r(354149),
                l = r(310452),
                i = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: p }) => {
                const { description: h, entities: g } = (0, i.H)({ description: t, entities: r, withheldDescription: m, withheldEntities: p }),
                    f = l.ZP.descriptionTextParts(h, g);
                return f.length
                    ? o.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => o.createElement(n.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => o });
            const o = ({ description: e, entities: t, withheldDescription: r, withheldEntities: o }) => (r ? { description: r, entities: o } : { description: e, entities: t });
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        488746: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        76388: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                l = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm12.223-5.89l-2.969 4.46L17.3 8.1l-1.2 1.6 3.646 2.73 4.141-6.21-1.664-1.11z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, o.Z)(e, (e) => a(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.MultiAccount-bc6ccf4c.cb49282a.js.map

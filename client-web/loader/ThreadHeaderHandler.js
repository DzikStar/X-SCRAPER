"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ThreadHeaderHandler", "icons/IconFeedback-js"],
    {
        79056: (e, t, r) => {
            r.r(t), r.d(t, { default: () => u });
            var o = r(459643),
                a = r(351322),
                n = r(202784),
                i = r(673510),
                l = r(668214),
                s = r(919022);
            const c = (e, t) => {
                    const r = t.entry.content?.userThreadHeader?.userScreenName || "";
                    return s.ZP.selectByScreenName(e, r);
                },
                d = (0, l.Z)().propsFromState(() => ({ user: c }))(({ user: e }) => (e ? n.createElement(i.ZP, { avatarUri: e.profile_image_url_https, displayMode: "UserCompact", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, userId: e.id_str, withLink: !0 }) : null)),
                u = a.iH({ component: d, shouldDisplayBorder: (0, o.Z)(!1), divider: { top: !1, bottom: !1 } }).getHandler();
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                i = r(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        p = "transparent" === t;
                    return o.createElement(
                        a.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, a) => o.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: p ? "none" : r, key: a, size: c, style: [0 !== a && { marginStart: -1 * n.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - a }], uri: e })),
                    );
                },
                s = n.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => i });
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
            const i = n;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                n = r(111677),
                i = r.n(n),
                l = r(283379),
                s = r(731708),
                c = r(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                m = i().f3624b5c,
                p = i().b4b3b113,
                h = i().be222050,
                f = i().hcbbe447;
            class y extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(a.Z, { style: [g.root, r] }, o.createElement(l.default, { style: [g.icon, e && g[e]] }), o.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: a, advertiser_name: n, disclosure_type: i } = r,
                        l = e && a && e === a.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        y = !(!o || "POLITICAL" !== o.disclaimerType) || s,
                        g = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = o || {};
                    let w;
                    return (w = t || (!n || l || b ? (y ? m : g ? h : u) : y ? p({ fullName: n }) : g ? f({ fullName: n }) : d({ fullName: n }))), w;
                }
            }
            y.defaultProps = { color: "gray700" };
            const g = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => H });
            var o = r(202784),
                a = r(111677),
                n = r.n(a),
                i = r(492140),
                l = r(720600),
                s = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                m = r(98440),
                p = r(790093),
                h = r(452693),
                f = r(544367),
                y = r(264171),
                g = r(159340),
                b = r(404971),
                w = r(262009),
                C = r(76388),
                x = r(488746),
                v = r(246492),
                E = r(520913),
                Z = r(731708),
                k = r(642153),
                S = r(879891),
                P = r(392237),
                F = r(54606);
            const T = n().ae408b76,
                I = n().j355f008,
                L = n().habf9678,
                B = n().db0798ed,
                R = n().dc716ec9,
                Q = ({ text: e }) => {
                    const { direction: t } = (0, S.Z)();
                    return o.createElement(Z.ZP, { dir: t, withHashflags: !0 }, e);
                },
                D = (e, t) =>
                    t
                        ? T
                        : ((e) => {
                              const t = o.createElement(Q, { text: e });
                              return o.createElement(n().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                _ = P.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                N = P.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                H = ({ contextType: e, iconColor: t, iconSize: r, link: a, retweetData: n, text: Z, topicData: S, userAvatarUrls: T }) => {
                    const { isSelfRetweet: H, name: W, screenName: z } = n || {},
                        A = ((e, t, r, a = []) => {
                            const n = _[t],
                                Z = [r ? { color: P.default.theme.colors[r] } : N.colorDeepGray, n],
                                S = o.createElement(i.default, { style: Z }),
                                T = o.createElement(l.default, { style: Z }),
                                I = o.createElement(s.default, { style: Z }),
                                L = o.createElement(c.default, { style: Z }),
                                B = o.createElement(d.default, { style: Z }),
                                R = o.createElement(u.default, { style: N.circle }),
                                Q = o.createElement(m.default, { style: Z }),
                                D = o.createElement(p.default, { style: Z }),
                                H = o.createElement(h.default, { style: Z }),
                                W = o.createElement(f.default, { style: Z }),
                                z = o.createElement(y.default, { style: Z }),
                                A = o.createElement(g.default, { style: Z }),
                                M = o.createElement(b.default, { style: Z }),
                                U = o.createElement(w.default, { style: Z }),
                                j = o.createElement(C.default, { style: Z }),
                                V = o.createElement(x.default, { style: Z }),
                                $ = o.createElement(v.default, { style: Z }),
                                O = o.createElement(k.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                G = o.createElement(E.default, { style: Z });
                            switch (e) {
                                case F.Q.Pin:
                                case F.Q.ReplyPin:
                                    return S;
                                case F.Q.Retweet:
                                    return T;
                                case F.Q.Like:
                                    return I;
                                case F.Q.Follow:
                                    return L;
                                case F.Q.Moment:
                                    return B;
                                case F.Q.NewTweets:
                                    return R;
                                case F.Q.Reply:
                                case F.Q.Conversation:
                                    return Q;
                                case F.Q.Feedback:
                                    return D;
                                case F.Q.Topic:
                                    return H;
                                case F.Q.List:
                                    return W;
                                case F.Q.Location:
                                    return z;
                                case F.Q.Community:
                                    return A;
                                case F.Q.Spaces:
                                    return M;
                                case F.Q.Sparkle:
                                    return U;
                                case F.Q.SocialProof:
                                case F.Q.FollowFollowed:
                                    return $;
                                case F.Q.FollowMutual:
                                    return V;
                                case F.Q.FollowFollowing:
                                    return j;
                                case F.Q.Facepile:
                                    return O;
                                case F.Q.Bird:
                                    return G;
                                case F.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, T);
                    switch (e) {
                        case F.Q.Retweet:
                            return { Icon: A, text: Z || D(W, H), link: z ? `https://twitter.com/${z}` : void 0 };
                        case F.Q.Pin:
                            return { Icon: A, text: Z || I };
                        case F.Q.ReplyPin:
                            return { Icon: A, text: L };
                        case F.Q.Topic:
                            return { Icon: A, "aria-label": "Recommendation" === S?.functionalityType || "RecWithEducation" === S?.functionalityType ? R({ topicName: Z }) : B({ topicName: Z }), text: Z ? o.createElement(Q, { text: Z }) : null, link: a };
                        default:
                            return { Icon: A, text: Z ? o.createElement(Q, { text: Z }) : null, link: a };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => f });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(872405),
                l = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                m = r(54606);
            class p extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: m, testID: p, textColor: f, textSize: y, topControl: g, weight: b, withBottomBorder: w, withLeftPadding: C, withTextCentered: x, ...v } = this.props,
                        { Icon: E, "aria-label": Z, link: k, text: S } = (0, u.Z)(v),
                        P = o.createElement(n.ZP, { "aria-label": Z, color: f, id: s, numberOfLines: 2, size: y, testID: p, weight: b, withoutTwemojiAndHashflags: !0 }, S),
                        { cellStyle: F, viewStyle: T } = this._getStyles();
                    return S ? o.createElement(l.ZP.UseProps, null, (n) => o.createElement(o.Fragment, null, g || null, o.createElement(a.Z, { onLayout: c, style: [m, T, n.socialContextRefreshEnabled() && !C && h.socialContextRefresh] }, o.createElement(i.Z, { avatarCell: E || (C ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !C && h.unsetIconWidth, n.socialContextRefreshEnabled() && !C && h.socialContextRefreshIcon], avatarSize: e, cellStyle: F }, o.createElement(a.Z, { style: h.cellWrapper }, o.createElement(a.Z, { style: [h.socialContextTextColumn, n.socialContextRefreshEnabled() && !C && h.socialContextRefreshTextColumn] }, k ? this._renderLink(k, P) : P), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: a, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: p } = l || {},
                        h = o.createElement(n.ZP, { color: s, id: a, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return r === m.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, h) : r === m.Q.Retweet && p ? o.createElement(d.Z, { screenName: p }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        a = t === m.Q.TextOnly,
                        n = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        i = r && !e ? [h.bottomBorder] : [];
                    return a && i.push(h.topicContext), o && i.push(h.socialContextTextCentered), { viewStyle: n, cellStyle: i };
                }
            }
            p.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = p;
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
                i = r(215337),
                l = r(392237),
                s = r(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return a.createElement("defs", null, a.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: m, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, a.createElement("stop", { stopColor: e.primary }), a.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const m = "space-gradient";
            u.fill = `url(#${m})`;
            const p = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return a.createElement(
                            i.Z,
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
                                i.Z,
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
            r.d(t, { Cs: () => d, K: () => l, ai: () => s });
            var o = r(465233),
                a = r(483054),
                n = r(295559),
                i = r(392237);
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? m(u.HighContrast[e]) : m(u.Default[e]);
            }
            function s(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
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
                i = r(111677),
                l = r.n(i),
                s = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                m = r(392237),
                p = r(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, n] = a.useState(),
                    i = !!(r && r > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...m } = e,
                    h =
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
                a.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const y = a.useCallback((e) => a.createElement(u.Z.Default, (0, o.Z)({}, e, { type: s })), [s]);
                return a.createElement(
                    p.default,
                    (0, o.Z)({}, m, {
                        BorderComponent: y,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && n(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: a.createElement(f, { isWide: i, type: s }),
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
                        return a.createElement(y, e);
                    default:
                        return null;
                }
            }
            function y(e) {
                return "livevideo" === e.type ? a.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [g.liveVideoLabelContainer, g.borderNarrow, e.isWide ? g.liveVideoLabel : g.liveVideoLabelNarrow], type: "live" }) : a.createElement(n.Z, { style: [g.root, e.isWide ? g.rootWide : g.rootNarrow] }, a.createElement(u.Z.Default, { style: [g.spaceGradient, e.isWide ? g.borderWide : g.borderNarrow] }, a.createElement(s.default, { style: g.spaceIcon })));
            }
            const g = m.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        o = e.spacesPx.space4,
                        a = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * o, bottom: -1 * o }, rootNarrow: { end: -1 * a, bottom: -1 * a }, borderWide: { borderWidth: o }, borderNarrow: { borderWidth: a }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                b = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(731708),
                n = r(354149),
                i = r(310452),
                l = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: p }) => {
                const { description: h, entities: f } = (0, l.H)({ description: t, entities: r, withheldDescription: m, withheldEntities: p }),
                    y = i.ZP.descriptionTextParts(h, f);
                return y.length
                    ? o.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          y.map((t, r) => o.createElement(n.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => o });
            const o = ({ description: e, entities: t, withheldDescription: r, withheldEntities: o }) => (r ? { description: r, entities: o } : { description: e, entities: t });
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ThreadHeaderHandler.89cbd24a.js.map

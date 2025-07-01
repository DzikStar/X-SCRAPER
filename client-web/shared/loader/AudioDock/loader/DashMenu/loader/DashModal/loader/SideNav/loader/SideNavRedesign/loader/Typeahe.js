"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"],
    {
        642153: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                i = r(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        m = d.length,
                        h = "transparent" === t;
                    return o.createElement(
                        a.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, a) => o.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : r, key: a, size: c, style: [0 !== a && { marginStart: -1 * n.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: m - a }], uri: e })),
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
            r.d(t, { Z: () => f });
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
                h = i().b4b3b113,
                p = i().be222050,
                g = i().hcbbe447;
            class f extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(a.Z, { style: [y.root, r] }, o.createElement(l.default, { style: [y.icon, e && y[e]] }), o.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: a, advertiser_name: n, disclosure_type: i } = r,
                        l = e && a && e === a.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        f = !(!o || "POLITICAL" !== o.disclaimerType) || s,
                        y = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: b } = o || {};
                    let w;
                    return (w = t || (!n || l || b ? (f ? m : y ? p : u) : f ? h({ fullName: n }) : y ? g({ fullName: n }) : d({ fullName: n }))), w;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
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
                h = r(790093),
                p = r(452693),
                g = r(544367),
                f = r(264171),
                y = r(159340),
                b = r(404971),
                w = r(262009),
                v = r(76388),
                C = r(488746),
                x = r(246492),
                E = r(520913),
                Z = r(731708),
                k = r(642153),
                S = r(879891),
                L = r(392237),
                T = r(54606);
            const F = n().ae408b76,
                P = n().j355f008,
                B = n().habf9678,
                R = n().db0798ed,
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
                z = L.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                N = L.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                H = ({ contextType: e, iconColor: t, iconSize: r, link: a, retweetData: n, text: Z, topicData: S, userAvatarUrls: F }) => {
                    const { isSelfRetweet: H, name: W, screenName: M } = n || {},
                        _ = ((e, t, r, a = []) => {
                            const n = z[t],
                                Z = [r ? { color: L.default.theme.colors[r] } : N.colorDeepGray, n],
                                S = o.createElement(i.default, { style: Z }),
                                F = o.createElement(l.default, { style: Z }),
                                P = o.createElement(s.default, { style: Z }),
                                B = o.createElement(c.default, { style: Z }),
                                R = o.createElement(d.default, { style: Z }),
                                I = o.createElement(u.default, { style: N.circle }),
                                D = o.createElement(m.default, { style: Z }),
                                Q = o.createElement(h.default, { style: Z }),
                                H = o.createElement(p.default, { style: Z }),
                                W = o.createElement(g.default, { style: Z }),
                                M = o.createElement(f.default, { style: Z }),
                                _ = o.createElement(y.default, { style: Z }),
                                A = o.createElement(b.default, { style: Z }),
                                V = o.createElement(w.default, { style: Z }),
                                U = o.createElement(v.default, { style: Z }),
                                $ = o.createElement(C.default, { style: Z }),
                                j = o.createElement(x.default, { style: Z }),
                                O = o.createElement(k.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                G = o.createElement(E.default, { style: Z });
                            switch (e) {
                                case T.Q.Pin:
                                case T.Q.ReplyPin:
                                    return S;
                                case T.Q.Retweet:
                                    return F;
                                case T.Q.Like:
                                    return P;
                                case T.Q.Follow:
                                    return B;
                                case T.Q.Moment:
                                    return R;
                                case T.Q.NewTweets:
                                    return I;
                                case T.Q.Reply:
                                case T.Q.Conversation:
                                    return D;
                                case T.Q.Feedback:
                                    return Q;
                                case T.Q.Topic:
                                    return H;
                                case T.Q.List:
                                    return W;
                                case T.Q.Location:
                                    return M;
                                case T.Q.Community:
                                    return _;
                                case T.Q.Spaces:
                                    return A;
                                case T.Q.Sparkle:
                                    return V;
                                case T.Q.SocialProof:
                                case T.Q.FollowFollowed:
                                    return j;
                                case T.Q.FollowMutual:
                                    return $;
                                case T.Q.FollowFollowing:
                                    return U;
                                case T.Q.Facepile:
                                    return O;
                                case T.Q.Bird:
                                    return G;
                                case T.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, F);
                    switch (e) {
                        case T.Q.Retweet:
                            return { Icon: _, text: Z || Q(W, H), link: M ? `https://twitter.com/${M}` : void 0 };
                        case T.Q.Pin:
                            return { Icon: _, text: Z || P };
                        case T.Q.ReplyPin:
                            return { Icon: _, text: B };
                        case T.Q.Topic:
                            return { Icon: _, "aria-label": "Recommendation" === S?.functionalityType || "RecWithEducation" === S?.functionalityType ? I({ topicName: Z }) : R({ topicName: Z }), text: Z ? o.createElement(D, { text: Z }) : null, link: a };
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
                i = r(872405),
                l = r(235902),
                s = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                m = r(54606);
            class h extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: s, onLayout: c, rightControl: d, style: m, testID: h, textColor: g, textSize: f, topControl: y, weight: b, withBottomBorder: w, withLeftPadding: v, withTextCentered: C, ...x } = this.props,
                        { Icon: E, "aria-label": Z, link: k, text: S } = (0, u.Z)(x),
                        L = o.createElement(n.ZP, { "aria-label": Z, color: g, id: s, numberOfLines: 2, size: f, testID: h, weight: b, withoutTwemojiAndHashflags: !0 }, S),
                        { cellStyle: T, viewStyle: F } = this._getStyles();
                    return S ? o.createElement(l.ZP.UseProps, null, (n) => o.createElement(o.Fragment, null, y || null, o.createElement(a.Z, { onLayout: c, style: [m, F, n.socialContextRefreshEnabled() && !v && p.socialContextRefresh] }, o.createElement(i.Z, { avatarCell: E || (v ? null : void 0), avatarCellStyle: [r, p.socialContextIconColumn, !v && p.unsetIconWidth, n.socialContextRefreshEnabled() && !v && p.socialContextRefreshIcon], avatarSize: e, cellStyle: T }, o.createElement(a.Z, { style: p.cellWrapper }, o.createElement(a.Z, { style: [p.socialContextTextColumn, n.socialContextRefreshEnabled() && !v && p.socialContextRefreshTextColumn] }, k ? this._renderLink(k, L) : L), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: a, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        p = o.createElement(n.ZP, { color: s, id: a, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return r === m.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, p) : r === m.Q.Retweet && h ? o.createElement(d.Z, { screenName: h }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        a = t === m.Q.TextOnly,
                        n = r ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        i = r && !e ? [p.bottomBorder] : [];
                    return a && i.push(p.topicContext), o && i.push(p.socialContextTextCentered), { viewStyle: n, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = h;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => o });
            r(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => p });
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
            const h = {
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
                p = Object.freeze(h);
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
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = n.xO(e),
                    r = a.$n({ color: t, coefficient: 0.5 });
                return n.vq(n.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => p });
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
                h = r(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, n] = a.useState(),
                    i = !!(r && r > 70),
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
                    h.default,
                    (0, o.Z)({}, m, {
                        BorderComponent: f,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && n(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: i, type: s }),
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
                b = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(731708),
                n = r(354149),
                i = r(310452),
                l = r(720283);
            const s = ({ animateIn: e, description: t, entities: r, isConcise: s, style: c, testID: d, userId: u, withheldDescription: m, withheldEntities: h }) => {
                const { description: p, entities: g } = (0, l.H)({ description: t, entities: r, withheldDescription: m, withheldEntities: h }),
                    f = i.ZP.descriptionTextParts(p, g);
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
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(717683),
                l = r(347101);
            const s = (e = {}) => {
                const t = o.useContext(i.Z),
                    { direction: r } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
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
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe.1f2ccf0a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-6107ac1a"],
    {
        642153: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                a = o(392237),
                i = o(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        p = d.length,
                        m = "transparent" === t;
                    return r.createElement(
                        n.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => r.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : o, key: n, size: c, style: [0 !== n && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                n = o(476984),
                a = o.n(n),
                i = o(143778),
                l = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: a, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: h, retryMessage: f, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? r.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : o ? r.createElement(s.m, { failureMessage: o }) : h();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const r = t[o];
                                    let n = "";
                                    return r && (n = ` ${100 * r}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return r.createElement(n.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        378729: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                n = o(325686),
                a = o(111677),
                i = o.n(a),
                l = o(283379),
                s = o(731708),
                c = o(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                p = i().f3624b5c,
                m = i().b4b3b113,
                h = i().be222050,
                f = i().hcbbe447;
            class g extends r.Component {
                render() {
                    const { color: e, id: t, style: o } = this.props;
                    return r.createElement(n.Z, { style: [y.root, o] }, r.createElement(l.default, { style: [y.icon, e && y[e]] }), r.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: o } = this.props,
                        { adMetadataContainer: r, advertiser: n, advertiser_name: a, disclosure_type: i } = o,
                        l = e && n && e === n.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        g = !(!r || "POLITICAL" !== r.disclaimerType) || s,
                        y = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: v } = r || {};
                    let b;
                    return (b = t || (!a || l || v ? (g ? p : y ? h : u) : g ? m({ fullName: a }) : y ? f({ fullName: a }) : d({ fullName: a }))), b;
                }
            }
            g.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        173739: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(31501),
                a = o(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: o, onDarkBackground: i, thumbLabel: l, value: s, ...c }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: i, value: [c.min, s], onChange: (e) => o(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(n.Z, u);
            };
        },
        537439: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(202784),
                n = o(111677),
                a = o.n(n),
                i = o(492140),
                l = o(720600),
                s = o(761744),
                c = o(25001),
                d = o(453333),
                u = o(136483),
                p = o(98440),
                m = o(790093),
                h = o(452693),
                f = o(544367),
                g = o(264171),
                y = o(159340),
                v = o(404971),
                b = o(262009),
                C = o(76388),
                w = o(488746),
                x = o(246492),
                S = o(520913),
                E = o(731708),
                R = o(642153),
                T = o(879891),
                P = o(392237),
                k = o(54606);
            const Z = a().ae408b76,
                F = a().j355f008,
                M = a().habf9678,
                L = a().db0798ed,
                D = a().dc716ec9,
                A = ({ text: e }) => {
                    const { direction: t } = (0, T.Z)();
                    return r.createElement(E.ZP, { dir: t, withHashflags: !0 }, e);
                },
                B = (e, t) =>
                    t
                        ? Z
                        : ((e) => {
                              const t = r.createElement(A, { text: e });
                              return r.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                I = P.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                H = P.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                _ = ({ contextType: e, iconColor: t, iconSize: o, link: n, retweetData: a, text: E, topicData: T, userAvatarUrls: Z }) => {
                    const { isSelfRetweet: _, name: Q, screenName: z } = a || {},
                        N = ((e, t, o, n = []) => {
                            const a = I[t],
                                E = [o ? { color: P.default.theme.colors[o] } : H.colorDeepGray, a],
                                T = r.createElement(i.default, { style: E }),
                                Z = r.createElement(l.default, { style: E }),
                                F = r.createElement(s.default, { style: E }),
                                M = r.createElement(c.default, { style: E }),
                                L = r.createElement(d.default, { style: E }),
                                D = r.createElement(u.default, { style: H.circle }),
                                A = r.createElement(p.default, { style: E }),
                                B = r.createElement(m.default, { style: E }),
                                _ = r.createElement(h.default, { style: E }),
                                Q = r.createElement(f.default, { style: E }),
                                z = r.createElement(g.default, { style: E }),
                                N = r.createElement(y.default, { style: E }),
                                W = r.createElement(v.default, { style: E }),
                                O = r.createElement(b.default, { style: E }),
                                U = r.createElement(C.default, { style: E }),
                                V = r.createElement(w.default, { style: E }),
                                G = r.createElement(x.default, { style: E }),
                                X = r.createElement(R.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: n }),
                                Y = r.createElement(S.default, { style: E });
                            switch (e) {
                                case k.Q.Pin:
                                case k.Q.ReplyPin:
                                    return T;
                                case k.Q.Retweet:
                                    return Z;
                                case k.Q.Like:
                                    return F;
                                case k.Q.Follow:
                                    return M;
                                case k.Q.Moment:
                                    return L;
                                case k.Q.NewTweets:
                                    return D;
                                case k.Q.Reply:
                                case k.Q.Conversation:
                                    return A;
                                case k.Q.Feedback:
                                    return B;
                                case k.Q.Topic:
                                    return _;
                                case k.Q.List:
                                    return Q;
                                case k.Q.Location:
                                    return z;
                                case k.Q.Community:
                                    return N;
                                case k.Q.Spaces:
                                    return W;
                                case k.Q.Sparkle:
                                    return O;
                                case k.Q.SocialProof:
                                case k.Q.FollowFollowed:
                                    return G;
                                case k.Q.FollowMutual:
                                    return V;
                                case k.Q.FollowFollowing:
                                    return U;
                                case k.Q.Facepile:
                                    return X;
                                case k.Q.Bird:
                                    return Y;
                                case k.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, o, t, Z);
                    switch (e) {
                        case k.Q.Retweet:
                            return { Icon: N, text: E || B(Q, _), link: z ? `https://twitter.com/${z}` : void 0 };
                        case k.Q.Pin:
                            return { Icon: N, text: E || F };
                        case k.Q.ReplyPin:
                            return { Icon: N, text: M };
                        case k.Q.Topic:
                            return { Icon: N, "aria-label": "Recommendation" === T?.functionalityType || "RecWithEducation" === T?.functionalityType ? D({ topicName: E }) : L({ topicName: E }), text: E ? r.createElement(A, { text: E }) : null, link: n };
                        default:
                            return { Icon: N, text: E ? r.createElement(A, { text: E }) : null, link: n };
                    }
                };
        },
        126962: (e, t, o) => {
            o.d(t, { Z: () => f });
            o(136728);
            var r = o(202784),
                n = o(325686),
                a = o(731708),
                i = o(872405),
                l = o(235902),
                s = o(392237),
                c = o(139052),
                d = o(488684),
                u = o(537439),
                p = o(54606);
            class m extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: o, id: s, onLayout: c, rightControl: d, style: p, testID: m, textColor: f, textSize: g, topControl: y, weight: v, withBottomBorder: b, withLeftPadding: C, withTextCentered: w, ...x } = this.props,
                        { Icon: S, "aria-label": E, link: R, text: T } = (0, u.Z)(x),
                        P = r.createElement(a.ZP, { "aria-label": E, color: f, id: s, numberOfLines: 2, size: g, testID: m, weight: v, withoutTwemojiAndHashflags: !0 }, T),
                        { cellStyle: k, viewStyle: Z } = this._getStyles();
                    return T ? r.createElement(l.ZP.UseProps, null, (a) => r.createElement(r.Fragment, null, y || null, r.createElement(n.Z, { onLayout: c, style: [p, Z, a.socialContextRefreshEnabled() && !C && h.socialContextRefresh] }, r.createElement(i.Z, { avatarCell: S || (C ? null : void 0), avatarCellStyle: [o, h.socialContextIconColumn, !C && h.unsetIconWidth, a.socialContextRefreshEnabled() && !C && h.socialContextRefreshIcon], avatarSize: e, cellStyle: k }, r.createElement(n.Z, { style: h.cellWrapper }, r.createElement(n.Z, { style: [h.socialContextTextColumn, a.socialContextRefreshEnabled() && !C && h.socialContextRefreshTextColumn] }, R ? this._renderLink(R, P) : P), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: o, id: n, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: m } = l || {},
                        h = r.createElement(a.ZP, { color: s, id: n, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return o === p.Q.Topic && u ? r.createElement(c.Z, { topicId: u.topicId }, h) : o === p.Q.Retweet && m ? r.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: o, withTextCentered: r } = this.props,
                        n = t === p.Q.TextOnly,
                        a = o ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        i = o && !e ? [h.bottomBorder] : [];
                    return n && i.push(h.topicContext), r && i.push(h.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = m;
        },
        54606: (e, t, o) => {
            o.d(t, { Q: () => r });
            o(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                i = o(215337),
                l = o(392237),
                s = o(977220);
            const c = (e) => `${e}%`,
                d = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, s.ai)();
                return n.createElement("defs", null, n.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: p, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, n.createElement("stop", { stopColor: e.primary }), n.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const p = "space-gradient";
            u.fill = `url(#${p})`;
            const m = {
                    Default: function ({ children: e, style: t, type: o = "audiospace" }) {
                        return n.createElement(
                            i.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, s.ai)(e);
                                    return { ...(0, s.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(o),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return n.createElement(
                            a.Z,
                            { style: [d.container, e.style] },
                            n.createElement(
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
                h = Object.freeze(m);
        },
        977220: (e, t, o) => {
            o.d(t, { Cs: () => d, K: () => l, ai: () => s });
            var r = o(465233),
                n = o(483054),
                a = o(295559),
                i = o(392237);
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? p(u.HighContrast[e]) : p(u.Default[e]);
            }
            function s(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, r.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function p(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = a.xO(e),
                    o = n.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(o)).slice(0, -2);
            }
        },
        433460: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                i = o(111677),
                l = o.n(i),
                s = o(404971),
                c = o(868634),
                d = o(336373),
                u = o(181054),
                p = o(392237),
                m = o(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [o, a] = n.useState(),
                    i = !!(o && o > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...p } = e,
                    h =
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
                        })(s, e.screenName);
                n.useEffect(() => {
                    switch (s) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, s]);
                const g = n.useCallback((e) => n.createElement(u.Z.Default, (0, r.Z)({}, e, { type: s })), [s]);
                return n.createElement(
                    m.default,
                    (0, r.Z)({}, p, {
                        BorderComponent: g,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== o && a(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: n.createElement(f, { isWide: i, type: s }),
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
                        return n.createElement(g, e);
                    default:
                        return null;
                }
            }
            function g(e) {
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : n.createElement(a.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, n.createElement(u.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, n.createElement(s.default, { style: y.spaceIcon })));
            }
            const y = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        o = "100%",
                        r = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: o, height: o, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                v = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(731708),
                a = o(354149),
                i = o(310452),
                l = o(720283);
            const s = ({ animateIn: e, description: t, entities: o, isConcise: s, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: f } = (0, l.H)({ description: t, entities: o, withheldDescription: p, withheldEntities: m }),
                    g = i.ZP.descriptionTextParts(h, f);
                return g.length
                    ? r.createElement(
                          n.ZP,
                          { dir: "auto", numberOfLines: s ? 2 : void 0, style: c, testID: d },
                          g.map((t, o) => r.createElement(a.ZP, { animateIn: e, key: `user_${u}_textpart_${o}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, o) => {
            o.d(t, { H: () => r });
            const r = ({ description: e, entities: t, withheldDescription: o, withheldEntities: r }) => (o ? { description: o, entities: r } : { description: e, entities: t });
        },
        27137: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(157396);
            const n = (0, o(587878).Z)({ palette: r.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452661: (e, t, o) => {
            o.d(t, { Z: () => f });
            var r = o(18198),
                n = {
                    centroidDimension: function (e, t, o, r) {
                        var a = e.touchBank,
                            i = 0,
                            l = 0,
                            s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== s) s.touchActive && s.currentTimeStamp > t && ((i += r && o ? s.currentPageX : r && !o ? s.currentPageY : !r && o ? s.previousPageX : s.previousPageY), (l = 1));
                        else
                            for (var c = 0; c < a.length; c++) {
                                var d = a[c];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    (i += r && o ? d.currentPageX : r && !o ? d.currentPageY : !r && o ? d.previousPageX : d.previousPageY), l++;
                                }
                            }
                        return l > 0 ? i / l : n.noCentroid;
                    },
                    currentCentroidXOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !0, !0);
                    },
                    currentCentroidYOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !1, !0);
                    },
                    previousCentroidXOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !0, !1);
                    },
                    previousCentroidYOfTouchesChangedAfter: function (e, t) {
                        return n.centroidDimension(e, t, !1, !1);
                    },
                    currentCentroidX: function (e) {
                        return n.centroidDimension(e, 0, !0, !0);
                    },
                    currentCentroidY: function (e) {
                        return n.centroidDimension(e, 0, !1, !0);
                    },
                    noCentroid: -1,
                };
            const a = n;
            var i = a.currentCentroidXOfTouchesChangedAfter,
                l = a.currentCentroidYOfTouchesChangedAfter,
                s = a.previousCentroidXOfTouchesChangedAfter,
                c = a.previousCentroidYOfTouchesChangedAfter,
                d = a.currentCentroidX,
                u = a.currentCentroidY,
                p = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = i(t, e._accountsForMovesUpTo)), (e.moveY = l(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            r = s(t, o),
                            n = i(t, o),
                            a = c(t, o),
                            d = l(t, o),
                            u = e.dx + (n - r),
                            p = e.dy + (d - a),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / m), (e.vy = (p - e.dy) / m), (e.dx = u), (e.dy = p), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            o = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, o),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, o),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && p._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (p._updateGestureStateOnMove(o, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (n) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = d(n.touchHistory)),
                                    (o.y0 = u(n.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(n, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(n, o)
                                ),
                                onResponderReject(r) {
                                    m(t, e.onPanResponderReject, r, o);
                                },
                                onResponderRelease(r) {
                                    m(t, e.onPanResponderRelease, r, o), h(t), p._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (p._updateGestureStateOnMove(o, r), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(r) {
                                    var n = r.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), m(t, e.onPanResponderEnd, r, o);
                                },
                                onResponderTerminate(r) {
                                    m(t, e.onPanResponderTerminate, r, o), h(t), p._initializeGestureState(o);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, o),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function m(e, t, o, n) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, n);
            }
            function h(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = p;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-6107ac1a.bceb8c8a.js.map

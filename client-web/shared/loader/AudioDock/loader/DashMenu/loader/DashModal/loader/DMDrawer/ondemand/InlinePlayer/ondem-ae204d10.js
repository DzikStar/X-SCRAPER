"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"],
    {
        966886: (e, t, a) => {
            a.d(t, { Z: () => B });
            var r = a(202784),
                o = a(726499),
                l = a(111677),
                n = a.n(l),
                c = a(731708),
                s = a(392237);
            const i = 3600,
                d = 86400,
                p = 2592e3,
                u = 31449600,
                m = n().ccd32094,
                h = n().abfcce0d,
                f = n().e8733ed9,
                b = n().i3b7a017,
                y = n().be59d8c3,
                g = n().ie5d110f,
                w = n().i3d087db,
                x = n().df5f11b3,
                C = n().ga8d18c9,
                E = n().a91e7d49,
                k = n().id952a69,
                v = n().ga09ab65,
                S = n().c83b901d,
                T = n().a55b9fed,
                I = n().ccaa970f,
                P = n().jade381b,
                Z = n().d725a289;
            class R extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._onAppForegrounded = (e) => {
                            "active" === e && this.forceUpdate();
                        });
                }
                componentDidMount() {
                    this._listener = o.Z.addEventListener("change", this._onAppForegrounded);
                }
                componentWillUnmount() {
                    this._listener?.remove("change", this._onAppForegrounded);
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, color: a, cutoff: o, humanReadable: l, id: n, link: s, onPress: R, prefix: B, relative: D, size: Q, style: H, timestamp: _ } = this.props,
                        L = new Date(_),
                        M = !isNaN(L.getTime());
                    if (!M) return null;
                    const z = P(L),
                        A = `${Z(L)} · ${z}`,
                        { aria: O, label: j } = M
                            ? ((e, t) => {
                                  const a = Date.now(),
                                      r = Math.floor((a - e) / 1e3),
                                      o = new Date(a).getFullYear(),
                                      l = new Date(e).getFullYear();
                                  if (r <= -5) return { label: I(e), aria: I(e) };
                                  if (r <= 0) return { label: m, aria: m };
                                  if (r < 60) return { label: f(r), aria: h({ amountOfTime: b(r) }) };
                                  if (r < i) {
                                      const e = Math.floor(r / 60);
                                      return { label: y(e), aria: h({ amountOfTime: g(e) }) };
                                  }
                                  if (r < d) {
                                      const e = Math.floor(r / i);
                                      return { label: w(e), aria: h({ amountOfTime: x(e) }) };
                                  }
                                  if (r < p && "years" === t) {
                                      const e = Math.floor(r / d);
                                      return { label: C(e), aria: h({ amountOfTime: E(e) }) };
                                  }
                                  if (r < u && "years" === t) {
                                      const e = Math.floor(r / p);
                                      return { label: k(e), aria: h({ amountOfTime: v(e) }) };
                                  }
                                  if ("years" === t) {
                                      const e = Math.floor(r / u);
                                      return { label: S(e), aria: h({ amountOfTime: T(e) }) };
                                  }
                                  return l === o ? { label: I(e), aria: I(e) } : { label: P(e), aria: P(e) };
                              })(L, o)
                            : {},
                        N = D ? (l ? O : j) : A,
                        W = D ? O : A;
                    return r.createElement(c.ZP, { "aria-describedby": e, "aria-label": t || W, color: a, hoverLabel: { label: A }, id: n, link: s, onClick: R, size: Q, style: [H, F.timestamp], withInteractiveStyling: !!s }, B, r.createElement("time", { dateTime: L.toISOString() }, N));
                }
            }
            R.defaultProps = { color: "gray700", humanReadable: !1, relative: !0 };
            const F = s.default.create((e) => ({ timestamp: { flexShrink: 0, whiteSpace: "nowrap", display: "inline-flex", flexWrap: "wrap", gap: e.spaces.space4 } })),
                B = R;
        },
        973014: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(202784),
                o = a(325686),
                l = a(111677),
                n = a.n(l),
                c = a(837020),
                s = a(379327),
                i = a(913973),
                d = a(731708),
                p = a(58881),
                u = a(530732),
                m = a(392237),
                h = a(599190);
            const f = { active: n().e557ad8e, expand: n().e3a58c28, remove: n().h517e8d8 };
            class b extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: a, disabled: l, link: n, mode: c, onClick: s, secondaryAction: i, selected: h, style: b, testID: g, text: w } = this.props,
                        x = this._renderIcon(!0, c),
                        C = i && this._renderIcon(!1, i.mode),
                        E = [y.root, a && y.compact, l && y.disabled, h && y.selected, b],
                        k = [y.content, !!x && y.withIcon, !!t && ((a && y.withAvatarImageCompact) || y.withAvatarImage)],
                        v = p.Z.generate({ backgroundColor: h ? m.default.theme.colors.primary : "transparent", color: h ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return r.createElement(o.Z, { style: E, testID: g }, r.createElement(u.Z, { "aria-label": e || (c ? f[c] : ""), disabled: l, interactiveStyles: v, link: n, onPress: s, style: k }, this._renderAvatar(), r.createElement(d.ZP, { color: h ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: y.text, weight: "bold" }, w), x), i ? r.createElement(u.Z, { "aria-label": i["aria-label"] || (i.mode ? f[i.mode] : ""), disabled: l || i.disabled, hoverLabel: { label: i.hoverLabel || (i.mode ? f[i.mode] : "") }, interactiveStyles: v, onPress: this._handleSecondaryClick, style: y.secondaryControl }, r.createElement(o.Z, { style: y.secondaryBorder }, C)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: a } = this.props,
                        o = [y.icon, a && y.iconSelected],
                        l = [y.icon];
                    switch (t) {
                        case h.D.Remove:
                            return r.createElement(c.default, { style: [y.dismissIcon, e && o] });
                        case h.D.Expand:
                            return r.createElement(s.default, { style: e ? o : l });
                        case h.D.Active:
                            return r.createElement(i.default, { style: o });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? r.createElement(o.Z, { style: [y.avatarContainer, t ? y.avatarCompact : y.avatar] }, e) : null;
                }
            }
            b.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const y = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                g = b;
        },
        599190: (e, t, a) => {
            a.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        954110: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(202784),
                o = a(325686),
                l = a(111677),
                n = a.n(l),
                c = a(731708),
                s = a(96083),
                i = a(392237),
                d = a(401705);
            const p = n().d7e50a66;
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { disabled: t, name: a, onChange: r } = this.props;
                            t || r(a, e);
                        }),
                        (this._renderHelpText = () => {
                            const { helpText: e, learnMoreLabel: t, learnMoreLink: a } = this.props;
                            if (!a) return e;
                            const o = t || p,
                                l = r.createElement(c.ZP, { key: "learnMoreText", link: a }, o);
                            return [e, l ? " " : null, l];
                        });
                }
                render() {
                    const { checked: e, disabled: t, helpText: a, label: l, testID: n, type: i, withBackground: p, withPaddingHorizontal: u } = this.props,
                        h = !!t;
                    return r.createElement(o.Z, { style: [m.root, p && m.background, u && m.paddingHorizontal, h && m.disabled] }, r.createElement(o.Z, { style: m.labelContainer }, "checkbox" === i ? r.createElement(s.Z, { checked: !!e, disabled: h, helpText: this._renderHelpText(), label: l, onChange: this._handleChange, testID: n }) : r.createElement(o.Z, { role: "label" }, r.createElement(o.Z, { style: m.switchContainer }, r.createElement(c.ZP, null, l), r.createElement(d.Z, { onValueChange: this._handleChange, value: !!e })), a ? r.createElement(c.ZP, { color: "gray700", size: "subtext2", style: m.switchHelpText }, this._renderHelpText()) : null)));
                }
            }
            u.defaultProps = { type: "checkbox", withBackground: !0, withPaddingHorizontal: !0 };
            const m = i.default.create((e) => ({ paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, background: { backgroundColor: e.colors.cellBackground }, root: { paddingVertical: e.spaces.space16 }, labelContainer: { justifyContent: "space-between" }, switchContainer: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, switchHelpText: { paddingTop: e.spaces.space12 }, disabled: { opacity: 0.5 } }));
        },
        537439: (e, t, a) => {
            a.d(t, { Z: () => M });
            var r = a(202784),
                o = a(111677),
                l = a.n(o),
                n = a(492140),
                c = a(720600),
                s = a(761744),
                i = a(25001),
                d = a(453333),
                p = a(136483),
                u = a(98440),
                m = a(790093),
                h = a(452693),
                f = a(544367),
                b = a(264171),
                y = a(159340),
                g = a(404971),
                w = a(262009),
                x = a(76388),
                C = a(488746),
                E = a(246492),
                k = a(520913),
                v = a(731708),
                S = a(642153),
                T = a(879891),
                I = a(392237),
                P = a(54606);
            const Z = l().ae408b76,
                R = l().j355f008,
                F = l().habf9678,
                B = l().db0798ed,
                D = l().dc716ec9,
                Q = ({ text: e }) => {
                    const { direction: t } = (0, T.Z)();
                    return r.createElement(v.ZP, { dir: t, withHashflags: !0 }, e);
                },
                H = (e, t) =>
                    t
                        ? Z
                        : ((e) => {
                              const t = r.createElement(Q, { text: e });
                              return r.createElement(l().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                _ = I.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                L = I.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                M = ({ contextType: e, iconColor: t, iconSize: a, link: o, retweetData: l, text: v, topicData: T, userAvatarUrls: Z }) => {
                    const { isSelfRetweet: M, name: z, screenName: A } = l || {},
                        O = ((e, t, a, o = []) => {
                            const l = _[t],
                                v = [a ? { color: I.default.theme.colors[a] } : L.colorDeepGray, l],
                                T = r.createElement(n.default, { style: v }),
                                Z = r.createElement(c.default, { style: v }),
                                R = r.createElement(s.default, { style: v }),
                                F = r.createElement(i.default, { style: v }),
                                B = r.createElement(d.default, { style: v }),
                                D = r.createElement(p.default, { style: L.circle }),
                                Q = r.createElement(u.default, { style: v }),
                                H = r.createElement(m.default, { style: v }),
                                M = r.createElement(h.default, { style: v }),
                                z = r.createElement(f.default, { style: v }),
                                A = r.createElement(b.default, { style: v }),
                                O = r.createElement(y.default, { style: v }),
                                j = r.createElement(g.default, { style: v }),
                                N = r.createElement(w.default, { style: v }),
                                W = r.createElement(x.default, { style: v }),
                                $ = r.createElement(C.default, { style: v }),
                                G = r.createElement(E.default, { style: v }),
                                U = r.createElement(S.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = r.createElement(k.default, { style: v });
                            switch (e) {
                                case P.Q.Pin:
                                case P.Q.ReplyPin:
                                    return T;
                                case P.Q.Retweet:
                                    return Z;
                                case P.Q.Like:
                                    return R;
                                case P.Q.Follow:
                                    return F;
                                case P.Q.Moment:
                                    return B;
                                case P.Q.NewTweets:
                                    return D;
                                case P.Q.Reply:
                                case P.Q.Conversation:
                                    return Q;
                                case P.Q.Feedback:
                                    return H;
                                case P.Q.Topic:
                                    return M;
                                case P.Q.List:
                                    return z;
                                case P.Q.Location:
                                    return A;
                                case P.Q.Community:
                                    return O;
                                case P.Q.Spaces:
                                    return j;
                                case P.Q.Sparkle:
                                    return N;
                                case P.Q.SocialProof:
                                case P.Q.FollowFollowed:
                                    return G;
                                case P.Q.FollowMutual:
                                    return $;
                                case P.Q.FollowFollowing:
                                    return W;
                                case P.Q.Facepile:
                                    return U;
                                case P.Q.Bird:
                                    return V;
                                case P.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, a, t, Z);
                    switch (e) {
                        case P.Q.Retweet:
                            return { Icon: O, text: v || H(z, M), link: A ? `https://twitter.com/${A}` : void 0 };
                        case P.Q.Pin:
                            return { Icon: O, text: v || R };
                        case P.Q.ReplyPin:
                            return { Icon: O, text: F };
                        case P.Q.Topic:
                            return { Icon: O, "aria-label": "Recommendation" === T?.functionalityType || "RecWithEducation" === T?.functionalityType ? D({ topicName: v }) : B({ topicName: v }), text: v ? r.createElement(Q, { text: v }) : null, link: o };
                        default:
                            return { Icon: O, text: v ? r.createElement(Q, { text: v }) : null, link: o };
                    }
                };
        },
        126962: (e, t, a) => {
            a.d(t, { Z: () => f });
            a(136728);
            var r = a(202784),
                o = a(325686),
                l = a(731708),
                n = a(872405),
                c = a(235902),
                s = a(392237),
                i = a(139052),
                d = a(488684),
                p = a(537439),
                u = a(54606);
            class m extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: a, id: s, onLayout: i, rightControl: d, style: u, testID: m, textColor: f, textSize: b, topControl: y, weight: g, withBottomBorder: w, withLeftPadding: x, withTextCentered: C, ...E } = this.props,
                        { Icon: k, "aria-label": v, link: S, text: T } = (0, p.Z)(E),
                        I = r.createElement(l.ZP, { "aria-label": v, color: f, id: s, numberOfLines: 2, size: b, testID: m, weight: g, withoutTwemojiAndHashflags: !0 }, T),
                        { cellStyle: P, viewStyle: Z } = this._getStyles();
                    return T ? r.createElement(c.ZP.UseProps, null, (l) => r.createElement(r.Fragment, null, y || null, r.createElement(o.Z, { onLayout: i, style: [u, Z, l.socialContextRefreshEnabled() && !x && h.socialContextRefresh] }, r.createElement(n.Z, { avatarCell: k || (x ? null : void 0), avatarCellStyle: [a, h.socialContextIconColumn, !x && h.unsetIconWidth, l.socialContextRefreshEnabled() && !x && h.socialContextRefreshIcon], avatarSize: e, cellStyle: P }, r.createElement(o.Z, { style: h.cellWrapper }, r.createElement(o.Z, { style: [h.socialContextTextColumn, l.socialContextRefreshEnabled() && !x && h.socialContextRefreshTextColumn] }, S ? this._renderLink(S, I) : I), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: a, id: o, onClick: n, retweetData: c, textColor: s, topicData: p } = this.props,
                        { screenName: m } = c || {},
                        h = r.createElement(l.ZP, { color: s, id: o, link: e, onClick: n, withoutTwemojiAndHashflags: !0 }, t);
                    return a === u.Q.Topic && p ? r.createElement(i.Z, { topicId: p.topicId }, h) : a === u.Q.Retweet && m ? r.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: a, withTextCentered: r } = this.props,
                        o = t === u.Q.TextOnly,
                        l = a ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        n = a && !e ? [h.bottomBorder] : [];
                    return o && n.push(h.topicContext), r && n.push(h.socialContextTextCentered), { viewStyle: l, cellStyle: n };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = m;
        },
        54606: (e, t, a) => {
            a.d(t, { Q: () => r });
            a(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10.d3b7f01a.js.map

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
                i = a(731708),
                c = a(392237);
            const s = 3600,
                d = 86400,
                u = 2592e3,
                p = 31449600,
                m = n().ccd32094,
                h = n().abfcce0d,
                b = n().e8733ed9,
                g = n().i3b7a017,
                f = n().be59d8c3,
                y = n().ie5d110f,
                w = n().i3d087db,
                x = n().df5f11b3,
                C = n().ga8d18c9,
                E = n().a91e7d49,
                k = n().id952a69,
                v = n().ga09ab65,
                T = n().c83b901d,
                S = n().a55b9fed,
                I = n().ccaa970f,
                Z = n().jade381b,
                P = n().d725a289;
            class D extends r.PureComponent {
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
                    const { "aria-describedby": e, "aria-label": t, color: a, cutoff: o, humanReadable: l, id: n, link: c, onPress: D, prefix: B, relative: F, size: L, style: Q, timestamp: H } = this.props,
                        _ = new Date(H),
                        M = !isNaN(_.getTime());
                    if (!M) return null;
                    const z = Z(_),
                        A = `${P(_)} · ${z}`,
                        { aria: O, label: j } = M
                            ? ((e, t) => {
                                  const a = Date.now(),
                                      r = Math.floor((a - e) / 1e3),
                                      o = new Date(a).getFullYear(),
                                      l = new Date(e).getFullYear();
                                  if (r <= -5) return { label: I(e), aria: I(e) };
                                  if (r <= 0) return { label: m, aria: m };
                                  if (r < 60) return { label: b(r), aria: h({ amountOfTime: g(r) }) };
                                  if (r < s) {
                                      const e = Math.floor(r / 60);
                                      return { label: f(e), aria: h({ amountOfTime: y(e) }) };
                                  }
                                  if (r < d) {
                                      const e = Math.floor(r / s);
                                      return { label: w(e), aria: h({ amountOfTime: x(e) }) };
                                  }
                                  if (r < u && "years" === t) {
                                      const e = Math.floor(r / d);
                                      return { label: C(e), aria: h({ amountOfTime: E(e) }) };
                                  }
                                  if (r < p && "years" === t) {
                                      const e = Math.floor(r / u);
                                      return { label: k(e), aria: h({ amountOfTime: v(e) }) };
                                  }
                                  if ("years" === t) {
                                      const e = Math.floor(r / p);
                                      return { label: T(e), aria: h({ amountOfTime: S(e) }) };
                                  }
                                  return l === o ? { label: I(e), aria: I(e) } : { label: Z(e), aria: Z(e) };
                              })(_, o)
                            : {},
                        N = F ? (l ? O : j) : A,
                        W = F ? O : A;
                    return r.createElement(i.ZP, { "aria-describedby": e, "aria-label": t || W, color: a, hoverLabel: { label: A }, id: n, link: c, onClick: D, size: L, style: [Q, R.timestamp], withInteractiveStyling: !!c }, B, r.createElement("time", { dateTime: _.toISOString() }, N));
                }
            }
            D.defaultProps = { color: "gray700", humanReadable: !1, relative: !0 };
            const R = c.default.create((e) => ({ timestamp: { flexShrink: 0, whiteSpace: "nowrap", display: "inline-flex", flexWrap: "wrap", gap: e.spaces.space4 } })),
                B = D;
        },
        973014: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                o = a(325686),
                l = a(111677),
                n = a.n(l),
                i = a(837020),
                c = a(379327),
                s = a(913973),
                d = a(731708),
                u = a(58881),
                p = a(530732),
                m = a(392237),
                h = a(599190);
            const b = { active: n().e557ad8e, expand: n().e3a58c28, remove: n().h517e8d8 };
            class g extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: a, disabled: l, link: n, mode: i, onClick: c, secondaryAction: s, selected: h, style: g, testID: y, text: w } = this.props,
                        x = this._renderIcon(!0, i),
                        C = s && this._renderIcon(!1, s.mode),
                        E = [f.root, a && f.compact, l && f.disabled, h && f.selected, g],
                        k = [f.content, !!x && f.withIcon, !!t && ((a && f.withAvatarImageCompact) || f.withAvatarImage)],
                        v = u.Z.generate({ backgroundColor: h ? m.default.theme.colors.primary : "transparent", color: h ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return r.createElement(o.Z, { style: E, testID: y }, r.createElement(p.Z, { "aria-label": e || (i ? b[i] : ""), disabled: l, interactiveStyles: v, link: n, onPress: c, style: k }, this._renderAvatar(), r.createElement(d.ZP, { color: h ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: f.text, weight: "bold" }, w), x), s ? r.createElement(p.Z, { "aria-label": s["aria-label"] || (s.mode ? b[s.mode] : ""), disabled: l || s.disabled, hoverLabel: { label: s.hoverLabel || (s.mode ? b[s.mode] : "") }, interactiveStyles: v, onPress: this._handleSecondaryClick, style: f.secondaryControl }, r.createElement(o.Z, { style: f.secondaryBorder }, C)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: a } = this.props,
                        o = [f.icon, a && f.iconSelected],
                        l = [f.icon];
                    switch (t) {
                        case h.D.Remove:
                            return r.createElement(i.default, { style: [f.dismissIcon, e && o] });
                        case h.D.Expand:
                            return r.createElement(c.default, { style: e ? o : l });
                        case h.D.Active:
                            return r.createElement(s.default, { style: o });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? r.createElement(o.Z, { style: [f.avatarContainer, t ? f.avatarCompact : f.avatar] }, e) : null;
                }
            }
            g.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const f = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                y = g;
        },
        599190: (e, t, a) => {
            a.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        954110: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                o = a(325686),
                l = a(111677),
                n = a.n(l),
                i = a(731708),
                c = a(96083),
                s = a(392237),
                d = a(451566);
            const u = n().d7e50a66;
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { disabled: t, name: a, onChange: r } = this.props;
                            t || r(a, e);
                        }),
                        (this._renderHelpText = () => {
                            const { helpText: e, learnMoreLabel: t, learnMoreLink: a } = this.props;
                            if (!a) return e;
                            const o = t || u,
                                l = r.createElement(i.ZP, { key: "learnMoreText", link: a }, o);
                            return [e, l ? " " : null, l];
                        });
                }
                render() {
                    const { checked: e, disabled: t, helpText: a, label: l, testID: n, type: s, withBackground: u, withPaddingHorizontal: p } = this.props,
                        h = !!t;
                    return r.createElement(o.Z, { style: [m.root, u && m.background, p && m.paddingHorizontal, h && m.disabled] }, r.createElement(o.Z, { style: m.labelContainer }, "checkbox" === s ? r.createElement(c.Z, { checked: !!e, disabled: h, helpText: this._renderHelpText(), label: l, onChange: this._handleChange, testID: n }) : r.createElement(o.Z, { role: "label" }, r.createElement(o.Z, { style: m.switchContainer }, r.createElement(i.ZP, null, l), r.createElement(d.Z, { onValueChange: this._handleChange, value: !!e })), a ? r.createElement(i.ZP, { color: "gray700", size: "subtext2", style: m.switchHelpText }, this._renderHelpText()) : null)));
                }
            }
            p.defaultProps = { type: "checkbox", withBackground: !0, withPaddingHorizontal: !0 };
            const m = s.default.create((e) => ({ paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, background: { backgroundColor: e.colors.cellBackground }, root: { paddingVertical: e.spaces.space16 }, labelContainer: { justifyContent: "space-between" }, switchContainer: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, switchHelpText: { paddingTop: e.spaces.space12 }, disabled: { opacity: 0.5 } }));
        },
        173739: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                o = a(31501),
                l = a(879891);
            const n = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: a, onDarkBackground: n, thumbLabel: i, value: c, ...s }) => {
                const { direction: d } = (0, l.Z)(),
                    u = { ...s, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: i, onDarkBackground: n, value: [s.min, c], onChange: (e) => a(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return r.createElement(o.Z, u);
            };
        },
        537439: (e, t, a) => {
            a.d(t, { Z: () => M });
            var r = a(202784),
                o = a(111677),
                l = a.n(o),
                n = a(492140),
                i = a(720600),
                c = a(761744),
                s = a(25001),
                d = a(453333),
                u = a(136483),
                p = a(98440),
                m = a(790093),
                h = a(452693),
                b = a(544367),
                g = a(264171),
                f = a(159340),
                y = a(404971),
                w = a(262009),
                x = a(76388),
                C = a(488746),
                E = a(246492),
                k = a(520913),
                v = a(731708),
                T = a(642153),
                S = a(879891),
                I = a(392237),
                Z = a(54606);
            const P = l().ae408b76,
                D = l().j355f008,
                R = l().habf9678,
                B = l().db0798ed,
                F = l().dc716ec9,
                L = ({ text: e }) => {
                    const { direction: t } = (0, S.Z)();
                    return r.createElement(v.ZP, { dir: t, withHashflags: !0 }, e);
                },
                Q = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = r.createElement(L, { text: e });
                              return r.createElement(l().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                H = I.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                _ = I.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                M = ({ contextType: e, iconColor: t, iconSize: a, link: o, retweetData: l, text: v, topicData: S, userAvatarUrls: P }) => {
                    const { isSelfRetweet: M, name: z, screenName: A } = l || {},
                        O = ((e, t, a, o = []) => {
                            const l = H[t],
                                v = [a ? { color: I.default.theme.colors[a] } : _.colorDeepGray, l],
                                S = r.createElement(n.default, { style: v }),
                                P = r.createElement(i.default, { style: v }),
                                D = r.createElement(c.default, { style: v }),
                                R = r.createElement(s.default, { style: v }),
                                B = r.createElement(d.default, { style: v }),
                                F = r.createElement(u.default, { style: _.circle }),
                                L = r.createElement(p.default, { style: v }),
                                Q = r.createElement(m.default, { style: v }),
                                M = r.createElement(h.default, { style: v }),
                                z = r.createElement(b.default, { style: v }),
                                A = r.createElement(g.default, { style: v }),
                                O = r.createElement(f.default, { style: v }),
                                j = r.createElement(y.default, { style: v }),
                                N = r.createElement(w.default, { style: v }),
                                W = r.createElement(x.default, { style: v }),
                                $ = r.createElement(C.default, { style: v }),
                                G = r.createElement(E.default, { style: v }),
                                U = r.createElement(T.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = r.createElement(k.default, { style: v });
                            switch (e) {
                                case Z.Q.Pin:
                                case Z.Q.ReplyPin:
                                    return S;
                                case Z.Q.Retweet:
                                    return P;
                                case Z.Q.Like:
                                    return D;
                                case Z.Q.Follow:
                                    return R;
                                case Z.Q.Moment:
                                    return B;
                                case Z.Q.NewTweets:
                                    return F;
                                case Z.Q.Reply:
                                case Z.Q.Conversation:
                                    return L;
                                case Z.Q.Feedback:
                                    return Q;
                                case Z.Q.Topic:
                                    return M;
                                case Z.Q.List:
                                    return z;
                                case Z.Q.Location:
                                    return A;
                                case Z.Q.Community:
                                    return O;
                                case Z.Q.Spaces:
                                    return j;
                                case Z.Q.Sparkle:
                                    return N;
                                case Z.Q.SocialProof:
                                case Z.Q.FollowFollowed:
                                    return G;
                                case Z.Q.FollowMutual:
                                    return $;
                                case Z.Q.FollowFollowing:
                                    return W;
                                case Z.Q.Facepile:
                                    return U;
                                case Z.Q.Bird:
                                    return V;
                                case Z.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, a, t, P);
                    switch (e) {
                        case Z.Q.Retweet:
                            return { Icon: O, text: v || Q(z, M), link: A ? `https://twitter.com/${A}` : void 0 };
                        case Z.Q.Pin:
                            return { Icon: O, text: v || D };
                        case Z.Q.ReplyPin:
                            return { Icon: O, text: R };
                        case Z.Q.Topic:
                            return { Icon: O, "aria-label": "Recommendation" === S?.functionalityType || "RecWithEducation" === S?.functionalityType ? F({ topicName: v }) : B({ topicName: v }), text: v ? r.createElement(L, { text: v }) : null, link: o };
                        default:
                            return { Icon: O, text: v ? r.createElement(L, { text: v }) : null, link: o };
                    }
                };
        },
        126962: (e, t, a) => {
            a.d(t, { Z: () => b });
            a(136728);
            var r = a(202784),
                o = a(325686),
                l = a(731708),
                n = a(872405),
                i = a(235902),
                c = a(392237),
                s = a(139052),
                d = a(488684),
                u = a(537439),
                p = a(54606);
            class m extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: a, id: c, onLayout: s, rightControl: d, style: p, testID: m, textColor: b, textSize: g, topControl: f, weight: y, withBottomBorder: w, withLeftPadding: x, withTextCentered: C, ...E } = this.props,
                        { Icon: k, "aria-label": v, link: T, text: S } = (0, u.Z)(E),
                        I = r.createElement(l.ZP, { "aria-label": v, color: b, id: c, numberOfLines: 2, size: g, testID: m, weight: y, withoutTwemojiAndHashflags: !0 }, S),
                        { cellStyle: Z, viewStyle: P } = this._getStyles();
                    return S ? r.createElement(i.ZP.UseProps, null, (l) => r.createElement(r.Fragment, null, f || null, r.createElement(o.Z, { onLayout: s, style: [p, P, l.socialContextRefreshEnabled() && !x && h.socialContextRefresh] }, r.createElement(n.Z, { avatarCell: k || (x ? null : void 0), avatarCellStyle: [a, h.socialContextIconColumn, !x && h.unsetIconWidth, l.socialContextRefreshEnabled() && !x && h.socialContextRefreshIcon], avatarSize: e, cellStyle: Z }, r.createElement(o.Z, { style: h.cellWrapper }, r.createElement(o.Z, { style: [h.socialContextTextColumn, l.socialContextRefreshEnabled() && !x && h.socialContextRefreshTextColumn] }, T ? this._renderLink(T, I) : I), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: a, id: o, onClick: n, retweetData: i, textColor: c, topicData: u } = this.props,
                        { screenName: m } = i || {},
                        h = r.createElement(l.ZP, { color: c, id: o, link: e, onClick: n, withoutTwemojiAndHashflags: !0 }, t);
                    return a === p.Q.Topic && u ? r.createElement(s.Z, { topicId: u.topicId }, h) : a === p.Q.Retweet && m ? r.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: a, withTextCentered: r } = this.props,
                        o = t === p.Q.TextOnly,
                        l = a ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        n = a && !e ? [h.bottomBorder] : [];
                    return o && n.push(h.topicContext), r && n.push(h.socialContextTextCentered), { viewStyle: l, cellStyle: n };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = c.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                b = m;
        },
        54606: (e, t, a) => {
            a.d(t, { Q: () => r });
            a(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10.77bf6c4a.js.map

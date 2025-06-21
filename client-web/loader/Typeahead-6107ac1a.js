(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconFeedback-js"],
    {
        642153: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var i = r(202784),
                o = r(325686),
                s = r(392237),
                n = r(823161);
            const a = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: a, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: h } = e,
                        u = d.length,
                        m = "transparent" === t;
                    return i.createElement(
                        o.Z,
                        { style: [l.root, a, { height: n.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => i.createElement(n.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: o, size: c, style: [0 !== o && { marginStart: -1 * s.default.theme.spacesPx[h ? "space4" : "space12"] }, { zIndex: u - o }], uri: e })),
                    );
                },
                l = s.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var i = r(202784),
                o = r(476984),
                s = r.n(o),
                n = r(143778),
                a = r(750410),
                l = r(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class m extends i.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: o, icon: s, loadingMessage: n, onRequestRetry: d, render: m, renderFailure: p, retryMessage: g, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? i.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : r ? i.createElement(l.m, { failureMessage: r }) : p();
                        case h:
                            return i.createElement(l.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var i = r(202784),
                o = r(325686),
                s = r(235902),
                n = r(885015),
                a = r(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return r ? i.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(o.Z, { style: c.gapColumn }, i.createElement(o.Z, { style: [c.gap, d] })), i.createElement(o.Z, { style: c.gapText }, r), i.createElement(o.Z, { style: c.gapColumn }, i.createElement(o.Z, { style: [c.gap, d] }))) : i.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var i = r(807896),
                o = r(202784),
                s = r(325686),
                n = r(392237);
            class a extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        a = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, r && l.withGutterColumn] }));
                    return o.createElement(s.Z, (0, i.Z)({ style: [t, l.root, r && l.withGutter] }, n), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        215337: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            var i = r(202784),
                o = r(325686);
            class s extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const i = t[r];
                                    let o = "";
                                    return i && (o = ` ${100 * i}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: s } = this.props;
                    return i.createElement(o.Z, { style: [s, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            s.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const n = s;
        },
        470397: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            r(136728);
            var i = r(202784),
                o = r(325686),
                s = r(124964),
                n = r(392237);
            const a = ({ children: e, color: t = "gray700", size: r, style: n }) => {
                    const a = [];
                    return (
                        i.Children.forEach(e, (e) => {
                            const o = a.length;
                            e && (o > 0 && a.push(i.createElement(s.Z, { color: t, key: `middot-${o}`, size: r })), a.push(e));
                        }),
                        a.length ? i.createElement(o.Z, { style: [l.middotGroup, n] }, a) : null
                    );
                },
                l = n.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        378729: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => f });
            var i = r(202784),
                o = r(325686),
                s = r(111677),
                n = r.n(s),
                a = r(283379),
                l = r(731708),
                c = r(392237);
            const d = n().f1a1b791,
                h = n().if2bf8b4,
                u = n().f3624b5c,
                m = n().b4b3b113,
                p = n().be222050,
                g = n().hcbbe447;
            class f extends i.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return i.createElement(o.Z, { style: [y.root, r] }, i.createElement(a.default, { style: [y.icon, e && y[e]] }), i.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: i, advertiser: o, advertiser_name: s, disclosure_type: n } = r,
                        a = e && o && e === o.id_str,
                        l = "string" == typeof n && "political" === n.toLowerCase(),
                        c = "string" == typeof n && "issue" === n.toLowerCase(),
                        f = !(!i || "POLITICAL" !== i.disclaimerType) || l,
                        y = !(!i || "ISSUE" !== i.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: w } = i || {};
                    let E;
                    return (E = t || (!s || a || w ? (f ? u : y ? p : h) : f ? m({ fullName: s }) : y ? g({ fullName: s }) : d({ fullName: s }))), E;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        973014: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => w });
            var i = r(202784),
                o = r(325686),
                s = r(111677),
                n = r.n(s),
                a = r(837020),
                l = r(379327),
                c = r(913973),
                d = r(731708),
                h = r(58881),
                u = r(530732),
                m = r(392237),
                p = r(599190);
            const g = { active: n().e557ad8e, expand: n().e3a58c28, remove: n().h517e8d8 };
            class f extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: r, disabled: s, link: n, mode: a, onClick: l, secondaryAction: c, selected: p, style: f, testID: w, text: E } = this.props,
                        b = this._renderIcon(!0, a),
                        _ = c && this._renderIcon(!1, c.mode),
                        I = [y.root, r && y.compact, s && y.disabled, p && y.selected, f],
                        S = [y.content, !!b && y.withIcon, !!t && ((r && y.withAvatarImageCompact) || y.withAvatarImage)],
                        v = h.Z.generate({ backgroundColor: p ? m.default.theme.colors.primary : "transparent", color: p ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return i.createElement(o.Z, { style: I, testID: w }, i.createElement(u.Z, { "aria-label": e || (a ? g[a] : ""), disabled: s, interactiveStyles: v, link: n, onPress: l, style: S }, this._renderAvatar(), i.createElement(d.ZP, { color: p ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: y.text, weight: "bold" }, E), b), c ? i.createElement(u.Z, { "aria-label": c["aria-label"] || (c.mode ? g[c.mode] : ""), disabled: s || c.disabled, hoverLabel: { label: c.hoverLabel || (c.mode ? g[c.mode] : "") }, interactiveStyles: v, onPress: this._handleSecondaryClick, style: y.secondaryControl }, i.createElement(o.Z, { style: y.secondaryBorder }, _)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: r } = this.props,
                        o = [y.icon, r && y.iconSelected],
                        s = [y.icon];
                    switch (t) {
                        case p.D.Remove:
                            return i.createElement(a.default, { style: [y.dismissIcon, e && o] });
                        case p.D.Expand:
                            return i.createElement(l.default, { style: e ? o : s });
                        case p.D.Active:
                            return i.createElement(c.default, { style: o });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? i.createElement(o.Z, { style: [y.avatarContainer, t ? y.avatarCompact : y.avatar] }, e) : null;
                }
            }
            f.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const y = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                w = f;
        },
        599190: (e, t, r) => {
            "use strict";
            r.d(t, { D: () => i });
            const i = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        537439: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => N });
            var i = r(202784),
                o = r(111677),
                s = r.n(o),
                n = r(492140),
                a = r(720600),
                l = r(761744),
                c = r(25001),
                d = r(453333),
                h = r(136483),
                u = r(98440),
                m = r(790093),
                p = r(452693),
                g = r(544367),
                f = r(264171),
                y = r(159340),
                w = r(404971),
                E = r(262009),
                b = r(76388),
                _ = r(488746),
                I = r(246492),
                S = r(520913),
                v = r(731708),
                C = r(642153),
                T = r(879891),
                x = r(392237),
                O = r(54606);
            const P = s().ae408b76,
                R = s().j355f008,
                D = s().habf9678,
                F = s().db0798ed,
                A = s().dc716ec9,
                Z = ({ text: e }) => {
                    const { direction: t } = (0, T.Z)();
                    return i.createElement(v.ZP, { dir: t, withHashflags: !0 }, e);
                },
                M = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = i.createElement(Z, { text: e });
                              return i.createElement(s().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                B = x.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                L = x.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                N = ({ contextType: e, iconColor: t, iconSize: r, link: o, retweetData: s, text: v, topicData: T, userAvatarUrls: P }) => {
                    const { isSelfRetweet: N, name: k, screenName: z } = s || {},
                        G = ((e, t, r, o = []) => {
                            const s = B[t],
                                v = [r ? { color: x.default.theme.colors[r] } : L.colorDeepGray, s],
                                T = i.createElement(n.default, { style: v }),
                                P = i.createElement(a.default, { style: v }),
                                R = i.createElement(l.default, { style: v }),
                                D = i.createElement(c.default, { style: v }),
                                F = i.createElement(d.default, { style: v }),
                                A = i.createElement(h.default, { style: L.circle }),
                                Z = i.createElement(u.default, { style: v }),
                                M = i.createElement(m.default, { style: v }),
                                N = i.createElement(p.default, { style: v }),
                                k = i.createElement(g.default, { style: v }),
                                z = i.createElement(f.default, { style: v }),
                                G = i.createElement(y.default, { style: v }),
                                H = i.createElement(w.default, { style: v }),
                                U = i.createElement(E.default, { style: v }),
                                j = i.createElement(b.default, { style: v }),
                                Q = i.createElement(_.default, { style: v }),
                                W = i.createElement(I.default, { style: v }),
                                $ = i.createElement(C.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = i.createElement(S.default, { style: v });
                            switch (e) {
                                case O.Q.Pin:
                                case O.Q.ReplyPin:
                                    return T;
                                case O.Q.Retweet:
                                    return P;
                                case O.Q.Like:
                                    return R;
                                case O.Q.Follow:
                                    return D;
                                case O.Q.Moment:
                                    return F;
                                case O.Q.NewTweets:
                                    return A;
                                case O.Q.Reply:
                                case O.Q.Conversation:
                                    return Z;
                                case O.Q.Feedback:
                                    return M;
                                case O.Q.Topic:
                                    return N;
                                case O.Q.List:
                                    return k;
                                case O.Q.Location:
                                    return z;
                                case O.Q.Community:
                                    return G;
                                case O.Q.Spaces:
                                    return H;
                                case O.Q.Sparkle:
                                    return U;
                                case O.Q.SocialProof:
                                case O.Q.FollowFollowed:
                                    return W;
                                case O.Q.FollowMutual:
                                    return Q;
                                case O.Q.FollowFollowing:
                                    return j;
                                case O.Q.Facepile:
                                    return $;
                                case O.Q.Bird:
                                    return V;
                                case O.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, P);
                    switch (e) {
                        case O.Q.Retweet:
                            return { Icon: G, text: v || M(k, N), link: z ? `https://twitter.com/${z}` : void 0 };
                        case O.Q.Pin:
                            return { Icon: G, text: v || R };
                        case O.Q.ReplyPin:
                            return { Icon: G, text: D };
                        case O.Q.Topic:
                            return { Icon: G, "aria-label": "Recommendation" === T?.functionalityType || "RecWithEducation" === T?.functionalityType ? A({ topicName: v }) : F({ topicName: v }), text: v ? i.createElement(Z, { text: v }) : null, link: o };
                        default:
                            return { Icon: G, text: v ? i.createElement(Z, { text: v }) : null, link: o };
                    }
                };
        },
        126962: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => g });
            r(136728);
            var i = r(202784),
                o = r(325686),
                s = r(731708),
                n = r(872405),
                a = r(235902),
                l = r(392237),
                c = r(139052),
                d = r(488684),
                h = r(537439),
                u = r(54606);
            class m extends i.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: l, onLayout: c, rightControl: d, style: u, testID: m, textColor: g, textSize: f, topControl: y, weight: w, withBottomBorder: E, withLeftPadding: b, withTextCentered: _, ...I } = this.props,
                        { Icon: S, "aria-label": v, link: C, text: T } = (0, h.Z)(I),
                        x = i.createElement(s.ZP, { "aria-label": v, color: g, id: l, numberOfLines: 2, size: f, testID: m, weight: w, withoutTwemojiAndHashflags: !0 }, T),
                        { cellStyle: O, viewStyle: P } = this._getStyles();
                    return T ? i.createElement(a.ZP.UseProps, null, (s) => i.createElement(i.Fragment, null, y || null, i.createElement(o.Z, { onLayout: c, style: [u, P, s.socialContextRefreshEnabled() && !b && p.socialContextRefresh] }, i.createElement(n.Z, { avatarCell: S || (b ? null : void 0), avatarCellStyle: [r, p.socialContextIconColumn, !b && p.unsetIconWidth, s.socialContextRefreshEnabled() && !b && p.socialContextRefreshIcon], avatarSize: e, cellStyle: O }, i.createElement(o.Z, { style: p.cellWrapper }, i.createElement(o.Z, { style: [p.socialContextTextColumn, s.socialContextRefreshEnabled() && !b && p.socialContextRefreshTextColumn] }, C ? this._renderLink(C, x) : x), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: o, onClick: n, retweetData: a, textColor: l, topicData: h } = this.props,
                        { screenName: m } = a || {},
                        p = i.createElement(s.ZP, { color: l, id: o, link: e, onClick: n, withoutTwemojiAndHashflags: !0 }, t);
                    return r === u.Q.Topic && h ? i.createElement(c.Z, { topicId: h.topicId }, p) : r === u.Q.Retweet && m ? i.createElement(d.Z, { screenName: m }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: i } = this.props,
                        o = t === u.Q.TextOnly,
                        s = r ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        n = r && !e ? [p.bottomBorder] : [];
                    return o && n.push(p.topicContext), i && n.push(p.socialContextTextCentered), { viewStyle: s, cellStyle: n };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = l.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => i });
            r(202784);
            const i = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var i = r(807896),
                o = r(202784),
                s = r(325686),
                n = r(215337),
                a = r(392237),
                l = r(977220);
            const c = (e) => `${e}%`,
                d = a.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function h() {
                const e = (0, l.ai)();
                return o.createElement("defs", null, o.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: u, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, o.createElement("stop", { stopColor: e.primary }), o.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const u = "space-gradient";
            h.fill = `url(#${u})`;
            const m = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return o.createElement(
                            n.Z,
                            (0, i.Z)(
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
                            s.Z,
                            { style: [d.container, e.style] },
                            o.createElement(
                                n.Z,
                                (0, i.Z)(
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
                    SVGLinearGradient: h,
                    getColors: l.ai,
                    getDarkModeColors: l.K,
                },
                p = Object.freeze(m);
        },
        977220: (e, t, r) => {
            "use strict";
            r.d(t, { Cs: () => d, K: () => a, ai: () => l });
            var i = r(465233),
                o = r(483054),
                s = r(295559),
                n = r(392237);
            function a(e = "audiospace") {
                return n.default.theme.highContrastEnabled ? u(h.HighContrast[e]) : u(h.Default[e]);
            }
            function l(e = "audiospace") {
                return n.default.theme.highContrastEnabled ? h.HighContrast[e] : h.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, i.Z)(c);
            }
            const h = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function u(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = s.xO(e),
                    r = o.$n({ color: t, coefficient: 0.5 });
                return s.vq(s.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var i = r(807896),
                o = r(202784),
                s = r(325686),
                n = r(111677),
                a = r.n(n),
                l = r(404971),
                c = r(868634),
                d = r(336373),
                h = r(181054),
                u = r(392237),
                m = r(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, s] = o.useState(),
                    n = !!(r && r > 70),
                    { "aria-label": a, presenceRingType: l, spaceId: c, ...u } = e,
                    p =
                        a ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return w.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return w.activeLiveVideo({ screenName: t });
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
                const f = o.useCallback((e) => o.createElement(h.Z.Default, (0, i.Z)({}, e, { type: l })), [l]);
                return o.createElement(
                    m.default,
                    (0, i.Z)({}, u, {
                        BorderComponent: f,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && s(t.width);
                            }
                        },
                        borderWidth: n ? "large" : "medium",
                        decoration: o.createElement(g, { isWide: n, type: l }),
                        gapWidth: n ? "space4" : "space2",
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
                return "livevideo" === e.type ? o.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [y.liveVideoLabelContainer, y.borderNarrow, e.isWide ? y.liveVideoLabel : y.liveVideoLabelNarrow], type: "live" }) : o.createElement(s.Z, { style: [y.root, e.isWide ? y.rootWide : y.rootNarrow] }, o.createElement(h.Z.Default, { style: [y.spaceGradient, e.isWide ? y.borderWide : y.borderNarrow] }, o.createElement(l.default, { style: y.spaceIcon })));
            }
            const y = u.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        i = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * i, bottom: -1 * i }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: i }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                w = { withoutUsernameFallback: a().b3688156, activeAudioSpace: a().c0eb8825, activeLiveVideo: a().d068dc6d };
        },
        238406: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var i = r(202784),
                o = r(731708),
                s = r(354149),
                n = r(310452),
                a = r(720283);
            const l = ({ animateIn: e, description: t, entities: r, isConcise: l, style: c, testID: d, userId: h, withheldDescription: u, withheldEntities: m }) => {
                const { description: p, entities: g } = (0, a.H)({ description: t, entities: r, withheldDescription: u, withheldEntities: m }),
                    f = n.ZP.descriptionTextParts(p, g);
                return f.length
                    ? i.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          f.map((t, r) => i.createElement(s.ZP, { animateIn: e, key: `user_${h}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            "use strict";
            r.d(t, { H: () => i });
            const i = ({ description: e, entities: t, withheldDescription: r, withheldEntities: i }) => (r ? { description: r, entities: i } : { description: e, entities: t });
        },
        790093: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => l });
            var i = r(202784),
                o = r(890601),
                s = r(783427),
                n = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        98440: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => l });
            var i = r(202784),
                o = r(890601),
                s = r(783427),
                n = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        19697: (e, t, r) => {
            "use strict";
            r.d(t, { q8: () => c, $i: () => s });
            r(571372);
            var i = r(790187);
            const o = (e, t) => {
                const r = document.createElement("canvas");
                (r.width = e), (r.height = t);
                const i = r.getContext("2d");
                return (i.fillStyle = "#FFFFFF"), i.fillRect(0, 0, e, t), r;
            };
            function s(e, t, r, o, s) {
                return l(t, r).then(
                    (t) => (
                        (function (e, t, r, o, s, n) {
                            const a = n || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = a.left,
                                c = a.top,
                                d = a.width,
                                h = a.height,
                                u = 0,
                                m = 0,
                                p = r,
                                g = o;
                            switch ((e.save(), s)) {
                                case i.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - a.width - a.left), (u = -r);
                                    break;
                                case i.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - a.width - a.left), (c = t.height - a.height - a.top), (u = -r), (m = -o);
                                    break;
                                case i.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - a.height - a.top), (m = -o);
                                    break;
                                case i.Z.LEFT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = a.top), (c = a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case i.Z.LEFT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), (l = a.top), (c = t.height - a.width - a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case i.Z.RIGHT_BOTTOM:
                                    e.translate(r / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - a.height - a.top), (c = t.height - a.width - a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -r / 2), (p = o), (g = r);
                                    break;
                                case i.Z.RIGHT_TOP:
                                    e.translate(r / 2, o / 2), e.rotate(-Math.PI / 2), (l = t.width - a.height - a.top), (c = a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -r / 2), (p = o), (g = r);
                            }
                            e.drawImage(t, l, c, d, h, u, m, p, g), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, o, s),
                        t
                    ),
                );
            }
            const n = 3145728,
                a = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const r = o(e, t);
                    return c(r)
                        .then(() => r)
                        .catch(() => {
                            const r = e * t;
                            if (r > a) {
                                const r = d(a, e, t);
                                return l(r.width, r.height);
                            }
                            if (r > n) {
                                const r = d(n, e, t);
                                return l(r.width, r.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, r) => {
                    const i = e.toDataURL("image/jpeg");
                    i && "data:," !== i ? t(i) : r(new Error("Malformed canvas"));
                });
            }
            function d(e, t, r) {
                const i = Math.sqrt((e * r) / t),
                    o = (t * i) / r;
                return { height: Math.floor(i), width: Math.floor(o) };
            }
        },
        790187: (e, t, r) => {
            "use strict";
            r.d(t, { C: () => s, Z: () => i });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            const i = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                o = (e, t, r = 65536) => {
                    let i = new Uint8Array([]),
                        o = 0;
                    function s(s, n, a) {
                        const l = s - o,
                            c = l + n;
                        if (l >= 0 && c <= i.length) a(i.subarray(l, c), s);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (i = new Uint8Array(this.result)), (o = s), a(i.subarray(0, n), s);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(s, s + Math.max(r, n)));
                        }
                    }
                    function n(e) {
                        const r = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === r) return void t(0);
                        function i(t, i) {
                            let o = 0;
                            for (let s = 0; s < i; s++) o = (o << 8) + e[t + (r ? s : i - 1 - s)];
                            return o;
                        }
                        const o = e.length > 8 && i(4, 4);
                        if (!o || o + 2 > e.length) return void t(0);
                        let s = i(o, 2);
                        if (o + 12 * s + 6 > e.length) return void t(0);
                        let n = o + 2;
                        for (; s > 0; ) {
                            if (((s -= 1), 274 === i(n, 2) && 3 === i(n + 2, 2) && 1 === i(n + 4, 4))) return void t(i(n + 8, 2));
                            n += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? s(0, 10, function e(r, i) {
                              const o = r[1];
                              if (r.length < 4 || 255 !== r[0] || 217 === o) return void t(0);
                              const a = o < 208 || o > 217 ? (r[2] << 8) + r[3] : 0;
                              225 === o && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, r.subarray(4, 10)) ? s(i + 10, a - 8, n) : s(i + 2 + a, 10, e);
                          })
                        : t(0);
                },
                s = (e, t) => {
                    const r = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((s) => {
                        r
                            ? s(i.TOP_LEFT)
                            : o(
                                  e,
                                  (e) => {
                                      s(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, r) => {
            "use strict";
            r.d(t, { Lw: () => o, Re: () => h, VJ: () => a, ZF: () => u, hv: () => l, ku: () => i, qp: () => s, uv: () => n, v5: () => d });
            r(571372), r(875640), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(543673), r(240753), r(128399);
            function i(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, r) => {
                    const i = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== i.length) r(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, r] = i,
                                    o = atob(r),
                                    s = o.length,
                                    n = Array(s);
                                for (let e = 0; e < s; e++) n[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(n)], { type: e }));
                            } else r(Error("The Uint8Array type is not available"));
                        else r(Error("The atob API is not available"));
                    else r(Error("The Blob API is not available"));
                });
            }
            const s = (e, t) =>
                    new Promise((r, i) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), i(Error(u));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? r(e.target.result) : i(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                i(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                n = (e, t) => {
                    const r = document.createElement("a");
                    (r.href = e), (r.download = t), (r.target = "_blank"), r.click(), r.remove();
                },
                a = (e) =>
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
                        i = 1;
                    for (; r && r.size > t; )
                        try {
                            i > 0.2 ? ((i *= 0.7), (r = await c(r, 1, i))) : (r = await c(r, 0.7, i));
                        } catch (e) {
                            r = void 0;
                        }
                    return r;
                },
                c = (e, t, r) =>
                    new Promise((i, o) => {
                        const s = new Image();
                        (s.onload = () => {
                            const e = document.createElement("canvas"),
                                o = e.getContext("2d"),
                                n = s.width * t,
                                a = s.height * t;
                            (e.width = n),
                                (e.height = a),
                                o.drawImage(s, 0, 0, n, a),
                                e.toBlob(
                                    (e) => {
                                        i(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    r,
                                );
                        }),
                            (s.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (s.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                u = "Reading aborted";
        },
        364837: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => c });
            var i = r(19697),
                o = r(549755),
                s = r(205074);
            const n = 1,
                a = 2,
                l = 3,
                c = (e) => {
                    if ((0, s.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: r, orientation: s, width: n } = e;
                            return (0, i.$i)(r, n, t, s).then(
                                (e) => (0, i.q8)(e),
                                (e) => {
                                    throw new o.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new o.Z("The provided image must be a gif", a);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new o.Z("The provided file is not a valid image", n);
                        return Promise.reject(e);
                    }
                };
        },
        549755: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            r(571372);
            class i extends Error {
                constructor(e, t, r) {
                    super(e), (this.code = t), (this.type = r || null);
                }
            }
        },
        205074: (e, t, r) => {
            "use strict";
            r.d(t, { DS: () => a, ZP: () => l });
            r(543673), r(240753), r(128399);
            var i = r(790187),
                o = r(276259),
                s = r(122123);
            function n(e, t) {
                const r = (function (e) {
                        return [i.Z.LEFT_BOTTOM, i.Z.LEFT_TOP, i.Z.RIGHT_BOTTOM, i.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [o, s] = r ? [e.height, e.width] : [e.width, e.height];
                return { width: o, height: s };
            }
            const a = (e) => {
                const t = e instanceof l,
                    r = e.isImage || e.isGif,
                    i = e.orientation,
                    o = e.width && e.height,
                    s = e.img;
                return !!(t && r && i && o && s);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === o.Re), (this.isImage = o.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, s.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: r, width: i } = n(e, t);
                                  return (this.img = e), (this.width = i), (this.height = r), (this.orientation = t), this;
                              };
                              return (0, i.C)(this.fileHandle)
                                  .then((e) => t(e === i.Z.UNKNOWN ? i.Z.TOP_LEFT : e))
                                  .catch(() => t(i.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, r) => {
            "use strict";
            r.d(t, { gK: () => o, o2: () => n, po: () => s });
            var i = r(549755);
            const o = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function s(e) {
                return new Promise((t, r) => {
                    const s = (e, t) => {
                            const s = new i.Z(e, t, o.type);
                            r(s);
                        },
                        n = new Image();
                    (n.onload = () => {
                        n.width && n.height ? t(n) : s("Image lacks height or width", o.NO_DIMENSIONS);
                    }),
                        (n.onerror = () => {
                            s("Error loading image", o.LOAD_FAILED);
                        }),
                        (n.src = e);
                });
            }
            function n(e) {
                return new Promise((t, r) => {
                    const s = (e, t) => {
                            const s = new i.Z(e, t, o.type);
                            r(s);
                        },
                        n = new Image();
                    n.setAttribute("crossorigin", "anonymous"),
                        (n.onload = () => {
                            if (n.width && n.height) {
                                const e = document.createElement("canvas"),
                                    r = e.getContext("2d");
                                (e.width = n.width),
                                    (e.height = n.height),
                                    r.drawImage(n, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const r = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(r);
                                        } else s("Failed to convert image to blob", o.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else s("Image lacks height or width", o.NO_DIMENSIONS);
                        }),
                        (n.onerror = () => {
                            s("Error loading image", o.LOAD_FAILED);
                        }),
                        (n.src = e);
                });
            }
        },
        514354: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => l, S: () => a });
            var i = r(332775),
                o = r.n(i),
                s = r(276259),
                n = r(549755);
            const a = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, s.qp)(e, t)
                        .catch((e) => {
                            throw new n.Z(`An error occurred while reading the image file: ${e}`, e.message === s.ZF ? a.HASHING_ABORTED : a.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = o()(e);
                            if (t && "string" == typeof t) return t;
                            throw new n.Z("Hash is not a non-empty string", a.INVALID_HASH);
                        });
        },
        653843: (e, t, r) => {
            "use strict";
            r.d(t, { Y7: () => m, ZP: () => _, m2: () => w });
            var i = r(19697),
                o = r(790187),
                s = r(549755),
                n = r(205074),
                a = r(276259);
            function l(e, { maxDimension: t, maxFileSize: r, targetQuality: i }) {
                return (function (e, t, r, i) {
                    function o(s, n) {
                        return c(e, e.width, e.height, s, n).then((e) => {
                            const l = e.width > r || e.height > r,
                                c = e.toDataURL("image/jpeg", i),
                                d = c.split(";base64,")[1],
                                h = (0, a.ku)(d);
                            if (l || h > t) {
                                let e = 0.8;
                                return l && (e = s > n ? r / s : r / n), o(s * e, n * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, r, t, i).then(a.Lw);
            }
            function c(e, t, r, o, s) {
                const n = t / 2,
                    a = r / 2;
                return e instanceof HTMLCanvasElement && t <= o && r <= s ? Promise.resolve(e) : n <= o && a <= s ? (0, i.$i)(e, o, s) : (0, i.$i)(e, n, a).then((e) => c(e, e.width, e.height, o, s));
            }
            const d = 5242880,
                h = 4096,
                u = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                g = (e, t = d, r = h) => {
                    const { height: i, size: o, width: s } = e;
                    return s > r || i > r || o > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                y = (e, t) => {
                    const { height: r, left: i, top: o, width: s } = f(e, t);
                    return !(0 === o && 0 === i && s === e.width && r === e.height);
                };
            function w(e, t) {
                const { maxFileSize: r = d, maxDimension: i = h, cropData: o, jpgPixelsPerByteForResize: s } = t || {},
                    n = "image/jpeg" === e.type,
                    a = (e.width * e.height) / e.size;
                return p(e) || g(e, r, i) || y(e, o) || (n && !!s && a < s);
            }
            const E = (e, t) => {
                    const { height: r, width: i } = e;
                    return i <= t && r <= t ? { width: i, height: r } : i > r ? { width: t, height: Math.round(r / (i / t)) } : { width: Math.round(i / (r / t)), height: t };
                },
                b = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function _(e, t) {
                const { maxFileSize: r = d, maxDimension: o = h, targetQuality: a = u, cropData: c } = t || {},
                    p = f(e, c);
                if (!w(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, n.DS)(e)) {
                    const e = new s.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new s.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const g = (e) => l(e, { maxFileSize: r, maxDimension: o, targetQuality: a });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const r = ({ height: r, width: o }) => (0, i.$i)(e, o, r, t, p);
                        return b(e)
                            .then(() => ((e) => e(E(p, o)))(r))
                            .then(g);
                    })
                    .catch(() => {
                        const e = new s.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            var i = r(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, i.Z)(e, (e) => o(e));
            }
        },
        459643: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            const i = (e) => () => e;
        },
        666536: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var i = r(936386),
                o = r.n(i);
            const s = (e, t, r) => o()(e, t, r);
        },
        662678: (e, t, r) => {
            "use strict";
            r.d(t, { G: () => o, Z: () => i });
            r(136728);
            const i = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (r, i, o) => {
                        const s = t ? t(i, o, e) : !!i;
                        return s && r[0].push(i), !s && r[1].push(i), r;
                    },
                    [[], []],
                );
            }
        },
        417144: (e, t, r) => {
            "use strict";
            function i(e, t = 1) {
                let r = t;
                const i = new Map();
                let o = 0,
                    s = 0,
                    n = 0,
                    a = null;
                function l() {
                    i.clear(), (o = 0), (s = 0), (n = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        i.set(e, { time: Date.now(), bytes: t }), s || (s = Date.now());
                    },
                    uploadFinish: function (c, d) {
                        const h = i.get(c);
                        h &&
                            ((o += d - h.bytes),
                            i.delete(c),
                            ++n === r &&
                                (function () {
                                    if (!s) return;
                                    const i = Date.now() - s;
                                    if (i <= 0) return;
                                    if (1 !== t) return;
                                    const n = o / i;
                                    if (n < 5e3 && 1 === r) return;
                                    !a || a.byterate < n ? ((r += 1), e(), (a = { byterate: n, poolSize: r })) : ((r -= 2), (r = Math.max(r, 1)), (a = null));
                                    l();
                                })());
                    },
                    reset: l,
                    getPoolSize: () => r,
                    start: function () {
                        for (let t = 0; t < r; ++t) e();
                    },
                };
            }
            r.d(t, { Z: () => d, d: () => w });
            r(543673), r(240753), r(128399);
            function o(e) {
                const t = new URLSearchParams();
                for (const r of Object.keys(e)) {
                    const i = e[r];
                    i && t.set(r, i);
                }
                return `&${String(t)}`;
            }
            function s(e, t = a, r = n) {
                const i = Math.max(e, t);
                return Math.min(i, r);
            }
            const n = 5242880,
                a = 65536,
                l = 2e3,
                c = 1e4;
            class d {
                constructor(e, t = _) {
                    var r;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((r = this.totalBytes), s(Math.ceil(r / c)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== b.SUCCEEDED && this.state !== b.PENDING && ((this.state = b.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? i(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: w.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || _), (this.state = b.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = b.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = _),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return s(((1e3 * e.downlink) / 8 / 2) * l);
                                    if ("wifi" === t) return s(5 * a);
                                }
                                return s(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, r, i = _) {
                    (this.uploadOptions = i), (this.state = b.PENDING), (this.progressMode = "uploading");
                    let s = o({ source_url: e, media_type: t, media_category: r });
                    (s += this.uploadOptions.extraInitParams || ""), (s += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        s,
                        (e) => {
                            (this.mediaId = e.media_id_string), this._getStatus();
                        },
                        (...e) => this._uploadError(...e),
                        u,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const e = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (e.enable_1080p_variant = String(!0));
                        const { mediaItem: t } = this.uploadOptions;
                        if (t?.mediaFile?.duration) {
                            const r = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(r);
                        }
                        let r = o(e);
                        this.uploadOptions.extraInitParams && (r += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                r,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                u,
                            );
                    } else this._uploadError({ code: w.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === b.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(h, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: w.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let e = 0;
                    this.inflightSegments.forEach(({ bytes: t }) => (e += t));
                    const t = e + this.uploadedBytes,
                        r = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (r <= 0) return;
                    const i = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + r);
                        i.append("media", e);
                    }
                    const s = this.segmentIndex;
                    this.segmentIndex += 1;
                    const n = o({ media_id: this.mediaId, segment_index: String(s) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            n,
                            () => {
                                if (this.state === b.PENDING) {
                                    const e = this.inflightSegments.get(s);
                                    e && (this.inflightSegments.delete(s), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            i,
                            () => this._startNextAppendSegment(),
                            r,
                        );
                    this.inflightSegments.set(s, { bytes: r, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = b.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = o(e);
                        (t += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                t,
                                (...e) => this._finalizeOrStatusSuccess(...e),
                                (...e) => this._uploadError(...e),
                                u,
                            );
                    }
                }
                _finalizeOrStatusSuccess(e) {
                    this._setSessionTimeout(e.expires_after_secs);
                    const t = e.processing_info;
                    if (!t) return void this._finalizeSuccess(e);
                    let r = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (r = t.progress_percent), r >= 100 && (r = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let r;
                            return (r = e?.code ? E[String(e.code)] : w.INTERNAL_ERROR), void this._uploadError({ ...e, code: r });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(r, this.mediaId, this.mediaKey);
                    const i = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * i);
                }
                _getStatus() {
                    if (this.state === b.PENDING) {
                        const e = o({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            u,
                        );
                    }
                }
                _finalizeSuccess(e) {
                    this.state === b.PENDING && ((this.state = b.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== b.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: w.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: w.INTERNAL_ERROR, message: e?.error });
                    (this.state = b.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, r) {
                    this.state !== b.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, r);
                }
                _notifyResult() {
                    this.state === b.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === b.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, r = {}) {
                    const i = r.requestStartTime || this.initStartTime,
                        o = new Date().getTime() - i.getTime();
                    if (((this.totalUploadDuration += o), this.uploadOptions.stats)) {
                        const i = { mediaType: this.mediaType || "", command: e, status: t, duration: o, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        r.segmentBytes && (i.appendByteSize = r.segmentBytes), this.uploadOptions.stats(i);
                    }
                }
                _sendXhr(e, t, r, i, o, n, a, c, d = 0) {
                    const h = `${this.uploadUrl}?command=${t}${r}`;
                    let u = !1;
                    const p = new Date(),
                        g = (s) => {
                            if (n) {
                                const s = [h, n].join("-");
                                this.timeoutIdMap[s] = setTimeout(() => {
                                    this._sendXhr(e, t, r, i, o, n - 1, a, c, d);
                                }, y);
                            } else E(s);
                        },
                        E = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: d }), "function" == typeof o && o(I(b) || { code: w.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        b = new XMLHttpRequest();
                    b.open(e, h, !0),
                        (b.withCredentials = !0),
                        (b.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (b.onload = () => {
                            if (b.status >= 200 && b.status < 400) {
                                const e = I(b);
                                204 === b.status || e ? (this._stats(t, "success", { requestStartTime: p, segmentBytes: d }), i(e || {}), !u && c && c()) : g("parsererror");
                            } else b.status && 503 !== b.status ? E("invalid-response") : g("503");
                        }),
                        (b.onerror = () => g("error")),
                        (b.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let _ = !1;
                    b.upload.onprogress = (e) => {
                        _ ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(h, e.total) : ((_ = !0), this._bitrateMonitor?.uploadStart(h, e.loaded));
                        const t = e.loaded,
                            r = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(r, this.mediaId), t / e.total > f && !u && ((u = !0), a))) {
                            const e = Math.max(1, new Date().getTime() - p.getTime()),
                                r = this.minSegmentBytes,
                                i = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || l,
                                    r = e.sentBytes / e.uploadTimeMs;
                                return s(Math.round(t * r), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: r, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: i, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof c && c();
                        }
                    };
                    for (const e in this.sruHeaders) b.setRequestHeader(e, this.sruHeaders[e]);
                    return a ? b.send(a) : b.send(), b;
                }
            }
            const h = 2147483647,
                u = 1,
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                y = 1e3,
                w = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                E = Object.freeze({ 0: w.INTERNAL_ERROR, 1: w.INVALID_MEDIA, 2: w.FILE_TOO_LARGE, 3: w.UNSUPPORTED_MEDIA, 4: w.TIMEOUT }),
                b = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                _ = {};
            function I(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        936386: (e) => {
            function t(e, t, r) {
                var i, o, s, n, a;
                function l() {
                    var c = Date.now() - n;
                    c < t && c >= 0 ? (i = setTimeout(l, t - c)) : ((i = null), r || ((a = e.apply(s, o)), (s = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (s = this), (o = arguments), (n = Date.now());
                    var c = r && !i;
                    return i || (i = setTimeout(l, t)), c && ((a = e.apply(s, o)), (s = o = null)), a;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((a = e.apply(s, o)), (s = o = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-6107ac1a.780e6f7a.js.map

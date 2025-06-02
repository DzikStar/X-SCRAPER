(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        642153: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            var r = i(202784),
                o = i(325686),
                s = i(392237),
                n = i(823161);
            const a = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: i = "small", style: a, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: h } = e,
                        u = d.length,
                        m = "transparent" === t;
                    return r.createElement(
                        o.Z,
                        { style: [l.root, a, { height: n.default.getSizeStyle(c)?.height }] },
                        d.map((e, o) => r.createElement(n.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : i, key: o, size: c, style: [0 !== o && { marginStart: -1 * s.default.theme.spacesPx[h ? "space4" : "space12"] }, { zIndex: u - o }], uri: e })),
                    );
                },
                l = s.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m });
            var r = i(202784),
                o = i(476984),
                s = i.n(o),
                n = i(143778),
                a = i(750410),
                l = i(682830);
            const c = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        i = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !i) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: i, fetchStatus: o, icon: s, loadingMessage: n, onRequestRetry: d, render: m, renderFailure: p, retryMessage: g, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? r.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : i ? r.createElement(l.m, { failureMessage: i }) : p();
                        case h:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        420412: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var r = i(202784),
                o = i(325686),
                s = i(235902),
                n = i(885015),
                a = i(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return i ? r.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] })), r.createElement(o.Z, { style: c.gapText }, i), r.createElement(o.Z, { style: c.gapColumn }, r.createElement(o.Z, { style: [c.gap, d] }))) : r.createElement(o.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var r = i(807896),
                o = i(202784),
                s = i(325686),
                n = i(392237);
            class a extends o.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...n } = this.props,
                        a = o.Children.map(e, (e) => e && o.cloneElement(e, { style: [e.props.style, l.column, i && l.withGutterColumn] }));
                    return o.createElement(s.Z, (0, r.Z)({ style: [t, l.root, i && l.withGutter] }, n), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        215337: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            var r = i(202784),
                o = i(325686);
            class s extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, i) => {
                                    const r = t[i];
                                    let o = "";
                                    return r && (o = ` ${100 * r}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: i, style: s } = this.props;
                    return r.createElement(o.Z, { style: [s, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, i);
                }
            }
            s.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const n = s;
        },
        470397: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            i(136728);
            var r = i(202784),
                o = i(325686),
                s = i(124964),
                n = i(392237);
            const a = ({ children: e, color: t = "gray700", size: i, style: n }) => {
                    const a = [];
                    return (
                        r.Children.forEach(e, (e) => {
                            const o = a.length;
                            e && (o > 0 && a.push(r.createElement(s.Z, { color: t, key: `middot-${o}`, size: i })), a.push(e));
                        }),
                        a.length ? r.createElement(o.Z, { style: [l.middotGroup, n] }, a) : null
                    );
                },
                l = n.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        378729: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => f });
            var r = i(202784),
                o = i(325686),
                s = i(111677),
                n = i.n(s),
                a = i(283379),
                l = i(731708),
                c = i(392237);
            const d = n().f1a1b791,
                h = n().if2bf8b4,
                u = n().f3624b5c,
                m = n().b4b3b113,
                p = n().be222050,
                g = n().hcbbe447;
            class f extends r.Component {
                render() {
                    const { color: e, id: t, style: i } = this.props;
                    return r.createElement(o.Z, { style: [y.root, i] }, r.createElement(a.default, { style: [y.icon, e && y[e]] }), r.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: i } = this.props,
                        { adMetadataContainer: r, advertiser: o, advertiser_name: s, disclosure_type: n } = i,
                        a = e && o && e === o.id_str,
                        l = "string" == typeof n && "political" === n.toLowerCase(),
                        c = "string" == typeof n && "issue" === n.toLowerCase(),
                        f = !(!r || "POLITICAL" !== r.disclaimerType) || l,
                        y = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: w } = r || {};
                    let E;
                    return (E = t || (!s || a || w ? (f ? u : y ? p : h) : f ? m({ fullName: s }) : y ? g({ fullName: s }) : d({ fullName: s }))), E;
                }
            }
            f.defaultProps = { color: "gray700" };
            const y = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        973014: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => w });
            var r = i(202784),
                o = i(325686),
                s = i(111677),
                n = i.n(s),
                a = i(837020),
                l = i(379327),
                c = i(913973),
                d = i(731708),
                h = i(58881),
                u = i(530732),
                m = i(392237),
                p = i(599190);
            const g = { active: n().e557ad8e, expand: n().e3a58c28, remove: n().h517e8d8 };
            class f extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleSecondaryClick = () => {
                            const { secondaryAction: e } = this.props;
                            e && e.onSecondaryClick();
                        });
                }
                render() {
                    const { "aria-label": e, avatar: t, compact: i, disabled: s, link: n, mode: a, onClick: l, secondaryAction: c, selected: p, style: f, testID: w, text: E } = this.props,
                        b = this._renderIcon(!0, a),
                        v = c && this._renderIcon(!1, c.mode),
                        _ = [y.root, i && y.compact, s && y.disabled, p && y.selected, f],
                        I = [y.content, !!b && y.withIcon, !!t && ((i && y.withAvatarImageCompact) || y.withAvatarImage)],
                        S = h.Z.generate({ backgroundColor: p ? m.default.theme.colors.primary : "transparent", color: p ? m.default.theme.colors.white : m.default.theme.colors.primary });
                    return r.createElement(o.Z, { style: _, testID: w }, r.createElement(u.Z, { "aria-label": e || (a ? g[a] : ""), disabled: s, interactiveStyles: S, link: n, onPress: l, style: I }, this._renderAvatar(), r.createElement(d.ZP, { color: p ? "whiteOnColor" : "text", numberOfLines: 1, selectable: !1, style: y.text, weight: "bold" }, E), b), c ? r.createElement(u.Z, { "aria-label": c["aria-label"] || (c.mode ? g[c.mode] : ""), disabled: s || c.disabled, hoverLabel: { label: c.hoverLabel || (c.mode ? g[c.mode] : "") }, interactiveStyles: S, onPress: this._handleSecondaryClick, style: y.secondaryControl }, r.createElement(o.Z, { style: y.secondaryBorder }, v)) : null);
                }
                _renderIcon(e = !0, t) {
                    const { selected: i } = this.props,
                        o = [y.icon, i && y.iconSelected],
                        s = [y.icon];
                    switch (t) {
                        case p.D.Remove:
                            return r.createElement(a.default, { style: [y.dismissIcon, e && o] });
                        case p.D.Expand:
                            return r.createElement(l.default, { style: e ? o : s });
                        case p.D.Active:
                            return r.createElement(c.default, { style: o });
                        default:
                            return null;
                    }
                }
                _renderAvatar() {
                    const { avatar: e, compact: t } = this.props;
                    return e ? r.createElement(o.Z, { style: [y.avatarContainer, t ? y.avatarCompact : y.avatar] }, e) : null;
                }
            }
            f.defaultProps = { compact: !1, disabled: !1, selected: !1 };
            const y = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: "1px", flexDirection: "row", minHeight: e.spaces.space40, overflow: "hidden" }, content: { alignItems: "center", flexDirection: "row", flexGrow: 1, flexShrink: 1, paddingHorizontal: e.spaces.space16 }, text: { width: "100%" }, compact: { minHeight: e.spaces.space32 }, disabled: { borderColor: e.colors.gray50 }, selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, avatar: { height: e.spaces.space32, width: e.spaces.space32 }, avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 }, avatarContainer: { justifyContent: "center", marginEnd: e.spaces.space8 }, withAvatarImage: { paddingStart: `calc(${e.spaces.space2} * 2)` }, withAvatarImageCompact: { paddingStart: `calc(${e.spaces.space1} * 3)` }, icon: { color: e.colors.primary, flexShrink: 0, marginStart: e.spaces.space12 }, iconSelected: { color: e.colors.whiteOnColor }, withIcon: { paddingEnd: e.spaces.space12 }, dismissIcon: { color: e.colors.gray300 }, secondaryControl: { flexShrink: 0, justifyContent: "center" }, secondaryBorder: { borderStartColor: e.colors.borderColor, borderStartWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space12 } })),
                w = f;
        },
        599190: (e, t, i) => {
            "use strict";
            i.d(t, { D: () => r });
            const r = Object.freeze({ Active: "active", Expand: "expand", Remove: "remove" });
        },
        537439: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => N });
            var r = i(202784),
                o = i(111677),
                s = i.n(o),
                n = i(492140),
                a = i(720600),
                l = i(761744),
                c = i(25001),
                d = i(453333),
                h = i(136483),
                u = i(98440),
                m = i(790093),
                p = i(452693),
                g = i(544367),
                f = i(264171),
                y = i(159340),
                w = i(404971),
                E = i(262009),
                b = i(76388),
                v = i(488746),
                _ = i(246492),
                I = i(520913),
                S = i(731708),
                C = i(642153),
                x = i(879891),
                T = i(392237),
                O = i(54606);
            const P = s().ae408b76,
                R = s().j355f008,
                D = s().habf9678,
                Z = s().db0798ed,
                F = s().dc716ec9,
                A = ({ text: e }) => {
                    const { direction: t } = (0, x.Z)();
                    return r.createElement(S.ZP, { dir: t, withHashflags: !0 }, e);
                },
                M = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = r.createElement(A, { text: e });
                              return r.createElement(s().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                L = T.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                B = T.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                N = ({ contextType: e, iconColor: t, iconSize: i, link: o, retweetData: s, text: S, topicData: x, userAvatarUrls: P }) => {
                    const { isSelfRetweet: N, name: k, screenName: z } = s || {},
                        H = ((e, t, i, o = []) => {
                            const s = L[t],
                                S = [i ? { color: T.default.theme.colors[i] } : B.colorDeepGray, s],
                                x = r.createElement(n.default, { style: S }),
                                P = r.createElement(a.default, { style: S }),
                                R = r.createElement(l.default, { style: S }),
                                D = r.createElement(c.default, { style: S }),
                                Z = r.createElement(d.default, { style: S }),
                                F = r.createElement(h.default, { style: B.circle }),
                                A = r.createElement(u.default, { style: S }),
                                M = r.createElement(m.default, { style: S }),
                                N = r.createElement(p.default, { style: S }),
                                k = r.createElement(g.default, { style: S }),
                                z = r.createElement(f.default, { style: S }),
                                H = r.createElement(y.default, { style: S }),
                                G = r.createElement(w.default, { style: S }),
                                U = r.createElement(E.default, { style: S }),
                                j = r.createElement(b.default, { style: S }),
                                Q = r.createElement(v.default, { style: S }),
                                W = r.createElement(_.default, { style: S }),
                                $ = r.createElement(C.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: o }),
                                V = r.createElement(I.default, { style: S });
                            switch (e) {
                                case O.Q.Pin:
                                case O.Q.ReplyPin:
                                    return x;
                                case O.Q.Retweet:
                                    return P;
                                case O.Q.Like:
                                    return R;
                                case O.Q.Follow:
                                    return D;
                                case O.Q.Moment:
                                    return Z;
                                case O.Q.NewTweets:
                                    return F;
                                case O.Q.Reply:
                                case O.Q.Conversation:
                                    return A;
                                case O.Q.Feedback:
                                    return M;
                                case O.Q.Topic:
                                    return N;
                                case O.Q.List:
                                    return k;
                                case O.Q.Location:
                                    return z;
                                case O.Q.Community:
                                    return H;
                                case O.Q.Spaces:
                                    return G;
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
                        })(e, i, t, P);
                    switch (e) {
                        case O.Q.Retweet:
                            return { Icon: H, text: S || M(k, N), link: z ? `https://twitter.com/${z}` : void 0 };
                        case O.Q.Pin:
                            return { Icon: H, text: S || R };
                        case O.Q.ReplyPin:
                            return { Icon: H, text: D };
                        case O.Q.Topic:
                            return { Icon: H, "aria-label": "Recommendation" === x?.functionalityType || "RecWithEducation" === x?.functionalityType ? F({ topicName: S }) : Z({ topicName: S }), text: S ? r.createElement(A, { text: S }) : null, link: o };
                        default:
                            return { Icon: H, text: S ? r.createElement(A, { text: S }) : null, link: o };
                    }
                };
        },
        126962: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => g });
            i(136728);
            var r = i(202784),
                o = i(325686),
                s = i(731708),
                n = i(872405),
                a = i(235902),
                l = i(392237),
                c = i(139052),
                d = i(488684),
                h = i(537439),
                u = i(54606);
            class m extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: i, id: l, onLayout: c, rightControl: d, style: u, testID: m, textColor: g, textSize: f, topControl: y, weight: w, withBottomBorder: E, withLeftPadding: b, withTextCentered: v, ..._ } = this.props,
                        { Icon: I, "aria-label": S, link: C, text: x } = (0, h.Z)(_),
                        T = r.createElement(s.ZP, { "aria-label": S, color: g, id: l, numberOfLines: 2, size: f, testID: m, weight: w, withoutTwemojiAndHashflags: !0 }, x),
                        { cellStyle: O, viewStyle: P } = this._getStyles();
                    return x ? r.createElement(a.ZP.UseProps, null, (s) => r.createElement(r.Fragment, null, y || null, r.createElement(o.Z, { onLayout: c, style: [u, P, s.socialContextRefreshEnabled() && !b && p.socialContextRefresh] }, r.createElement(n.Z, { avatarCell: I || (b ? null : void 0), avatarCellStyle: [i, p.socialContextIconColumn, !b && p.unsetIconWidth, s.socialContextRefreshEnabled() && !b && p.socialContextRefreshIcon], avatarSize: e, cellStyle: O }, r.createElement(o.Z, { style: p.cellWrapper }, r.createElement(o.Z, { style: [p.socialContextTextColumn, s.socialContextRefreshEnabled() && !b && p.socialContextRefreshTextColumn] }, C ? this._renderLink(C, T) : T), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: i, id: o, onClick: n, retweetData: a, textColor: l, topicData: h } = this.props,
                        { screenName: m } = a || {},
                        p = r.createElement(s.ZP, { color: l, id: o, link: e, onClick: n, withoutTwemojiAndHashflags: !0 }, t);
                    return i === u.Q.Topic && h ? r.createElement(c.Z, { topicId: h.topicId }, p) : i === u.Q.Retweet && m ? r.createElement(d.Z, { screenName: m }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: i, withTextCentered: r } = this.props,
                        o = t === u.Q.TextOnly,
                        s = i ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        n = i && !e ? [p.bottomBorder] : [];
                    return o && n.push(p.topicContext), r && n.push(p.socialContextTextCentered), { viewStyle: s, cellStyle: n };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = l.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, i) => {
            "use strict";
            i.d(t, { Q: () => r });
            i(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => p });
            var r = i(807896),
                o = i(202784),
                s = i(325686),
                n = i(215337),
                a = i(392237),
                l = i(977220);
            const c = (e) => `${e}%`,
                d = a.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function h() {
                const e = (0, l.ai)();
                return o.createElement("defs", null, o.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: u, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, o.createElement("stop", { stopColor: e.primary }), o.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const u = "space-gradient";
            h.fill = `url(#${u})`;
            const m = {
                    Default: function ({ children: e, style: t, type: i = "audiospace" }) {
                        return o.createElement(
                            n.Z,
                            (0, r.Z)(
                                {},
                                (function (e) {
                                    const t = (0, l.ai)(e);
                                    return { ...(0, l.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(i),
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
                    SVGLinearGradient: h,
                    getColors: l.ai,
                    getDarkModeColors: l.K,
                },
                p = Object.freeze(m);
        },
        977220: (e, t, i) => {
            "use strict";
            i.d(t, { Cs: () => d, K: () => a, ai: () => l });
            var r = i(465233),
                o = i(483054),
                s = i(295559),
                n = i(392237);
            function a(e = "audiospace") {
                return n.default.theme.highContrastEnabled ? u(h.HighContrast[e]) : u(h.Default[e]);
            }
            function l(e = "audiospace") {
                return n.default.theme.highContrastEnabled ? h.HighContrast[e] : h.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, r.Z)(c);
            }
            const h = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function u(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = s.xO(e),
                    i = o.$n({ color: t, coefficient: 0.5 });
                return s.vq(s.rb(i)).slice(0, -2);
            }
        },
        433460: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => p });
            var r = i(807896),
                o = i(202784),
                s = i(325686),
                n = i(111677),
                a = i.n(n),
                l = i(404971),
                c = i(868634),
                d = i(336373),
                h = i(181054),
                u = i(392237),
                m = i(823161);
            const p = function (e) {
                const t = d.Z.useAnalytics(),
                    [i, s] = o.useState(),
                    n = !!(i && i > 70),
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
                const f = o.useCallback((e) => o.createElement(h.Z.Default, (0, r.Z)({}, e, { type: l })), [l]);
                return o.createElement(
                    m.default,
                    (0, r.Z)({}, u, {
                        BorderComponent: f,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== i && s(t.width);
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
                        i = "100%",
                        r = e.spacesPx.space4,
                        o = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * o, bottom: -1 * o }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: o }, spaceGradient: { justifyContent: "center", width: i, height: i, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                w = { withoutUsernameFallback: a().b3688156, activeAudioSpace: a().c0eb8825, activeLiveVideo: a().d068dc6d };
        },
        238406: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var r = i(202784),
                o = i(731708),
                s = i(354149),
                n = i(310452),
                a = i(720283);
            const l = ({ animateIn: e, description: t, entities: i, isConcise: l, style: c, testID: d, userId: h, withheldDescription: u, withheldEntities: m }) => {
                const { description: p, entities: g } = (0, a.H)({ description: t, entities: i, withheldDescription: u, withheldEntities: m }),
                    f = n.ZP.descriptionTextParts(p, g);
                return f.length
                    ? r.createElement(
                          o.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          f.map((t, i) => r.createElement(s.ZP, { animateIn: e, key: `user_${h}_textpart_${i}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, i) => {
            "use strict";
            i.d(t, { H: () => r });
            const r = ({ description: e, entities: t, withheldDescription: i, withheldEntities: r }) => (i ? { description: i, entities: r } : { description: e, entities: t });
        },
        58399: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => c });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(717683),
                a = i(347101);
            const l = (e = {}) => {
                const t = r.useContext(n.Z),
                    { direction: i } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: i });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        246492: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        264171: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        98440: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        262009: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                o = i(890601),
                s = i(783427),
                n = i(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        19697: (e, t, i) => {
            "use strict";
            i.d(t, { q8: () => c, $i: () => s });
            i(571372);
            var r = i(790187);
            const o = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const r = i.getContext("2d");
                return (r.fillStyle = "#FFFFFF"), r.fillRect(0, 0, e, t), i;
            };
            function s(e, t, i, o, s) {
                return l(t, i).then(
                    (t) => (
                        (function (e, t, i, o, s, n) {
                            const a = n || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = a.left,
                                c = a.top,
                                d = a.width,
                                h = a.height,
                                u = 0,
                                m = 0,
                                p = i,
                                g = o;
                            switch ((e.save(), s)) {
                                case r.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - a.width - a.left), (u = -i);
                                    break;
                                case r.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - a.width - a.left), (c = t.height - a.height - a.top), (u = -i), (m = -o);
                                    break;
                                case r.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - a.height - a.top), (m = -o);
                                    break;
                                case r.Z.LEFT_TOP:
                                    e.translate(i / 2, o / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = a.top), (c = a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -i / 2), (p = o), (g = i);
                                    break;
                                case r.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, o / 2), e.rotate(Math.PI / 2), (l = a.top), (c = t.height - a.width - a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -i / 2), (p = o), (g = i);
                                    break;
                                case r.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, o / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - a.height - a.top), (c = t.height - a.width - a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -i / 2), (p = o), (g = i);
                                    break;
                                case r.Z.RIGHT_TOP:
                                    e.translate(i / 2, o / 2), e.rotate(-Math.PI / 2), (l = t.width - a.height - a.top), (c = a.left), (d = a.height), (h = a.width), (u = -o / 2), (m = -i / 2), (p = o), (g = i);
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
                    const i = o(e, t);
                    return c(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > a) {
                                const i = d(a, e, t);
                                return l(i.width, i.height);
                            }
                            if (i > n) {
                                const i = d(n, e, t);
                                return l(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, i) => {
                    const r = e.toDataURL("image/jpeg");
                    r && "data:," !== r ? t(r) : i(new Error("Malformed canvas"));
                });
            }
            function d(e, t, i) {
                const r = Math.sqrt((e * i) / t),
                    o = (t * r) / i;
                return { height: Math.floor(r), width: Math.floor(o) };
            }
        },
        790187: (e, t, i) => {
            "use strict";
            i.d(t, { C: () => s, Z: () => r });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const r = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                o = (e, t, i = 65536) => {
                    let r = new Uint8Array([]),
                        o = 0;
                    function s(s, n, a) {
                        const l = s - o,
                            c = l + n;
                        if (l >= 0 && c <= r.length) a(r.subarray(l, c), s);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (r = new Uint8Array(this.result)), (o = s), a(r.subarray(0, n), s);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(s, s + Math.max(i, n)));
                        }
                    }
                    function n(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function r(t, r) {
                            let o = 0;
                            for (let s = 0; s < r; s++) o = (o << 8) + e[t + (i ? s : r - 1 - s)];
                            return o;
                        }
                        const o = e.length > 8 && r(4, 4);
                        if (!o || o + 2 > e.length) return void t(0);
                        let s = r(o, 2);
                        if (o + 12 * s + 6 > e.length) return void t(0);
                        let n = o + 2;
                        for (; s > 0; ) {
                            if (((s -= 1), 274 === r(n, 2) && 3 === r(n + 2, 2) && 1 === r(n + 4, 4))) return void t(r(n + 8, 2));
                            n += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? s(0, 10, function e(i, r) {
                              const o = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === o) return void t(0);
                              const a = o < 208 || o > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === o && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? s(r + 10, a - 8, n) : s(r + 2 + a, 10, e);
                          })
                        : t(0);
                },
                s = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((s) => {
                        i
                            ? s(r.TOP_LEFT)
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
        276259: (e, t, i) => {
            "use strict";
            i.d(t, { Lw: () => o, Re: () => h, VJ: () => a, ZF: () => u, hv: () => l, ku: () => r, qp: () => s, uv: () => n, v5: () => d });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function r(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function o(e) {
                return new Promise((t, i) => {
                    const r = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== r.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = r,
                                    o = atob(i),
                                    s = o.length,
                                    n = Array(s);
                                for (let e = 0; e < s; e++) n[e] = o.charCodeAt(e);
                                t(new Blob([new Uint8Array(n)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const s = (e, t) =>
                    new Promise((i, r) => {
                        const o = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                o.abort?.(), r(Error(u));
                            }),
                            (o.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : r(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (o.onerror = (e) => {
                                r(e);
                            }),
                            o.readAsArrayBuffer(e);
                    }),
                n = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const i = new Image();
                            (i.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = i.width), (e.height = i.height), e.getContext("2d").drawImage(i, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                l = async (e, t) => {
                    if (e.size <= t) return e;
                    let i = e,
                        r = 1;
                    for (; i && i.size > t; )
                        try {
                            r > 0.2 ? ((r *= 0.7), (i = await c(i, 1, r))) : (i = await c(i, 0.7, r));
                        } catch (e) {
                            i = void 0;
                        }
                    return i;
                },
                c = (e, t, i) =>
                    new Promise((r, o) => {
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
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (s.onerror = () => o(new Error("Failed to load image while resizing"))),
                            (s.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                u = "Reading aborted";
        },
        364837: (e, t, i) => {
            "use strict";
            i.d(t, { R: () => c });
            var r = i(19697),
                o = i(549755),
                s = i(205074);
            const n = 1,
                a = 2,
                l = 3,
                c = (e) => {
                    if ((0, s.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: i, orientation: s, width: n } = e;
                            return (0, r.$i)(i, n, t, s).then(
                                (e) => (0, r.q8)(e),
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
        549755: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            i(571372);
            class r extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            "use strict";
            i.d(t, { DS: () => a, ZP: () => l });
            i(543673), i(240753), i(128399);
            var r = i(790187),
                o = i(276259),
                s = i(122123);
            function n(e, t) {
                const i = (function (e) {
                        return [r.Z.LEFT_BOTTOM, r.Z.LEFT_TOP, r.Z.RIGHT_BOTTOM, r.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [o, s] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: o, height: s };
            }
            const a = (e) => {
                const t = e instanceof l,
                    i = e.isImage || e.isGif,
                    r = e.orientation,
                    o = e.width && e.height,
                    s = e.img;
                return !!(t && i && r && o && s);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === o.Re), (this.isImage = o.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, s.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: r } = n(e, t);
                                  return (this.img = e), (this.width = r), (this.height = i), (this.orientation = t), this;
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
        122123: (e, t, i) => {
            "use strict";
            i.d(t, { gK: () => o, o2: () => n, po: () => s });
            var r = i(549755);
            const o = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function s(e) {
                return new Promise((t, i) => {
                    const s = (e, t) => {
                            const s = new r.Z(e, t, o.type);
                            i(s);
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
                return new Promise((t, i) => {
                    const s = (e, t) => {
                            const s = new r.Z(e, t, o.type);
                            i(s);
                        },
                        n = new Image();
                    n.setAttribute("crossorigin", "anonymous"),
                        (n.onload = () => {
                            if (n.width && n.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = n.width),
                                    (e.height = n.height),
                                    i.drawImage(n, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
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
        514354: (e, t, i) => {
            "use strict";
            i.d(t, { Q: () => l, S: () => a });
            var r = i(332775),
                o = i.n(r),
                s = i(276259),
                n = i(549755);
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
        653843: (e, t, i) => {
            "use strict";
            i.d(t, { Y7: () => m, ZP: () => v, m2: () => w });
            var r = i(19697),
                o = i(790187),
                s = i(549755),
                n = i(205074),
                a = i(276259);
            function l(e, { maxDimension: t, maxFileSize: i, targetQuality: r }) {
                return (function (e, t, i, r) {
                    function o(s, n) {
                        return c(e, e.width, e.height, s, n).then((e) => {
                            const l = e.width > i || e.height > i,
                                c = e.toDataURL("image/jpeg", r),
                                d = c.split(";base64,")[1],
                                h = (0, a.ku)(d);
                            if (l || h > t) {
                                let e = 0.8;
                                return l && (e = s > n ? i / s : i / n), o(s * e, n * e);
                            }
                            return c;
                        });
                    }
                    return o(e.width, e.height);
                })(e, i, t, r).then(a.Lw);
            }
            function c(e, t, i, o, s) {
                const n = t / 2,
                    a = i / 2;
                return e instanceof HTMLCanvasElement && t <= o && i <= s ? Promise.resolve(e) : n <= o && a <= s ? (0, r.$i)(e, o, s) : (0, r.$i)(e, n, a).then((e) => c(e, e.width, e.height, o, s));
            }
            const d = 5242880,
                h = 4096,
                u = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== o.Z.TOP_LEFT && e.orientation !== o.Z.UNKNOWN,
                g = (e, t = d, i = h) => {
                    const { height: r, size: o, width: s } = e;
                    return s > i || r > i || o > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                y = (e, t) => {
                    const { height: i, left: r, top: o, width: s } = f(e, t);
                    return !(0 === o && 0 === r && s === e.width && i === e.height);
                };
            function w(e, t) {
                const { maxFileSize: i = d, maxDimension: r = h, cropData: o, jpgPixelsPerByteForResize: s } = t || {},
                    n = "image/jpeg" === e.type,
                    a = (e.width * e.height) / e.size;
                return p(e) || g(e, i, r) || y(e, o) || (n && !!s && a < s);
            }
            const E = (e, t) => {
                    const { height: i, width: r } = e;
                    return r <= t && i <= t ? { width: r, height: i } : r > i ? { width: t, height: Math.round(i / (r / t)) } : { width: Math.round(r / (i / t)), height: t };
                },
                b = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function v(e, t) {
                const { maxFileSize: i = d, maxDimension: o = h, targetQuality: a = u, cropData: c } = t || {},
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
                const g = (e) => l(e, { maxFileSize: i, maxDimension: o, targetQuality: a });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: o }) => (0, r.$i)(e, o, i, t, p);
                        return b(e)
                            .then(() => ((e) => e(E(p, o)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const e = new s.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var r = i(716406);
            function o(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(o) : (0, r.Z)(e, (e) => o(e));
            }
        },
        459643: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            const r = (e) => () => e;
        },
        666536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            var r = i(936386),
                o = i.n(r);
            const s = (e, t, i) => o()(e, t, i);
        },
        662678: (e, t, i) => {
            "use strict";
            i.d(t, { G: () => o, Z: () => r });
            i(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (i, r, o) => {
                        const s = t ? t(r, o, e) : !!r;
                        return s && i[0].push(r), !s && i[1].push(r), i;
                    },
                    [[], []],
                );
            }
        },
        417144: (e, t, i) => {
            "use strict";
            function r(e, t = 1) {
                let i = t;
                const r = new Map();
                let o = 0,
                    s = 0,
                    n = 0,
                    a = null;
                function l() {
                    r.clear(), (o = 0), (s = 0), (n = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        r.set(e, { time: Date.now(), bytes: t }), s || (s = Date.now());
                    },
                    uploadFinish: function (c, d) {
                        const h = r.get(c);
                        h &&
                            ((o += d - h.bytes),
                            r.delete(c),
                            ++n === i &&
                                (function () {
                                    if (!s) return;
                                    const r = Date.now() - s;
                                    if (r <= 0) return;
                                    if (1 !== t) return;
                                    const n = o / r;
                                    if (n < 5e3 && 1 === i) return;
                                    !a || a.byterate < n ? ((i += 1), e(), (a = { byterate: n, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    l();
                                })());
                    },
                    reset: l,
                    getPoolSize: () => i,
                    start: function () {
                        for (let t = 0; t < i; ++t) e();
                    },
                };
            }
            i.d(t, { Z: () => d, d: () => w });
            i(543673), i(240753), i(128399);
            function o(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const r = e[i];
                    r && t.set(i, r);
                }
                return `&${String(t)}`;
            }
            function s(e, t = a, i = n) {
                const r = Math.max(e, t);
                return Math.min(r, i);
            }
            const n = 5242880,
                a = 65536,
                l = 2e3,
                c = 1e4;
            class d {
                constructor(e, t = v) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), s(Math.ceil(i / c)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== b.SUCCEEDED && this.state !== b.PENDING && ((this.state = b.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? r(() => {
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
                    (this.mediaId = e), (this.uploadOptions = t || v), (this.state = b.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = b.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = v),
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
                uploadExternalMedia(e, t, i, r = v) {
                    (this.uploadOptions = r), (this.state = b.PENDING), (this.progressMode = "uploading");
                    let s = o({ source_url: e, media_type: t, media_category: i });
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
                            const i = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(i);
                        }
                        let i = o(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
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
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (i <= 0) return;
                    const r = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        r.append("media", e);
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
                            r,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(s, { bytes: i, request: a });
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
                    let i = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (i = t.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let i;
                            return (i = e?.code ? E[String(e.code)] : w.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const r = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * r);
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
                _notifyProgress(e, t, i) {
                    this.state !== b.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === b.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === b.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const r = i.requestStartTime || this.initStartTime,
                        o = new Date().getTime() - r.getTime();
                    if (((this.totalUploadDuration += o), this.uploadOptions.stats)) {
                        const r = { mediaType: this.mediaType || "", command: e, status: t, duration: o, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (r.appendByteSize = i.segmentBytes), this.uploadOptions.stats(r);
                    }
                }
                _sendXhr(e, t, i, r, o, n, a, c, d = 0) {
                    const h = `${this.uploadUrl}?command=${t}${i}`;
                    let u = !1;
                    const p = new Date(),
                        g = (s) => {
                            if (n) {
                                const s = [h, n].join("-");
                                this.timeoutIdMap[s] = setTimeout(() => {
                                    this._sendXhr(e, t, i, r, o, n - 1, a, c, d);
                                }, y);
                            } else E(s);
                        },
                        E = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: d }), "function" == typeof o && o(_(b) || { code: w.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        b = new XMLHttpRequest();
                    b.open(e, h, !0),
                        (b.withCredentials = !0),
                        (b.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (b.onload = () => {
                            if (b.status >= 200 && b.status < 400) {
                                const e = _(b);
                                204 === b.status || e ? (this._stats(t, "success", { requestStartTime: p, segmentBytes: d }), r(e || {}), !u && c && c()) : g("parsererror");
                            } else b.status && 503 !== b.status ? E("invalid-response") : g("503");
                        }),
                        (b.onerror = () => g("error")),
                        (b.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let v = !1;
                    b.upload.onprogress = (e) => {
                        v ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(h, e.total) : ((v = !0), this._bitrateMonitor?.uploadStart(h, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > f && !u && ((u = !0), a))) {
                            const e = Math.max(1, new Date().getTime() - p.getTime()),
                                i = this.minSegmentBytes,
                                r = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || l,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return s(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: r, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
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
                v = {};
            function _(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        936386: (e) => {
            function t(e, t, i) {
                var r, o, s, n, a;
                function l() {
                    var c = Date.now() - n;
                    c < t && c >= 0 ? (r = setTimeout(l, t - c)) : ((r = null), i || ((a = e.apply(s, o)), (s = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (s = this), (o = arguments), (n = Date.now());
                    var c = i && !r;
                    return r || (r = setTimeout(l, t)), c && ((a = e.apply(s, o)), (s = o = null)), a;
                };
                return (
                    (c.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (c.flush = function () {
                        r && ((a = e.apply(s, o)), (s = o = null), clearTimeout(r), (r = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-6107ac1a.f9e5729a.js.map

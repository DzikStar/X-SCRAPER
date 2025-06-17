"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-6107ac1a", "bundle.ConversationParticipants-6107ac1a"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(202784),
                n = o(466999),
                a = o(325686),
                i = o(392237),
                l = o(111677);
            const s = o.n(l)().e5b0063d;
            let c = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = s({ title: t });
                    return r.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), r.createElement(a.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                n = o(614983),
                a = o.n(n),
                i = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: f, style: g, subtitle: b, title: y, titleDomId: v, titleIconCell: C, titleIconCellSize: w, withBackground: x, withWideContainer: E } = this.props,
                        { isModal: S } = this.context,
                        Z = a ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, S, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: Z, middleControl: p, position: u(h, S, n), rightControl: m, style: g, subtitle: b, title: y, titleDomId: v, titleIconCell: C, titleIconCellSize: w, withBackground: k, withWideContainer: E }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(325686),
                a = o(392237);
            class i extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: l.root });
                }
            }
            const l = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                i = o(879113),
                l = o(392237),
                s = o(111677),
                c = o.n(s),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const l = a.Z.isOnline();
                    return n.createElement(i.Z, (0, r.Z)({}, t, { icon: l ? void 0 : n.createElement(d.default, { style: h.icon }), retryMessage: l ? e : u }));
                },
                h = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(p);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => x });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                i = o(111677),
                l = o.n(i),
                s = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                p = o(847607),
                h = o(417714),
                m = o(988823);
            const f = "block",
                g = "mute",
                b = "removeFollower",
                y = "report",
                v = "share",
                C = l().j7bb1a43,
                w = l().hef5960c,
                x = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: i, onMute: l, onRemoveFollower: m, onReportUser: x, onShare: E, onUnblock: S, onUnmute: Z, user: k } = e,
                        T = [],
                        R = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, c.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !k.protected &&
                        !k.blocking &&
                        !k.blocked_by &&
                        T.push({
                            Icon: n.Z,
                            onClick: () => {
                                i(), E();
                            },
                            testID: v,
                            text: w,
                        });
                    !k.blocking &&
                        T.push({
                            ...(0, p.N1)(
                                k,
                                () => {
                                    i(), l();
                                },
                                () => {
                                    i(), Z();
                                },
                            ),
                            testID: g,
                        });
                    k.followed_by &&
                        T.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    R(e, m);
                                },
                                user: k,
                            }),
                            testID: b,
                        }),
                        T.push((0, u.op)({ blockAction: (e) => R(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => R(e, S), user: k })),
                        T.push({
                            Icon: s.default,
                            onClick: () => {
                                i(), x();
                            },
                            testID: y,
                            text: C({ screenName: k.screen_name }),
                        });
                    const P = T.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: P, onCloseRequested: i });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => h });
            var r = o(202784),
                n = o(325686),
                a = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: f, rightControl: g, secondaryBar: b, subtitle: y, title: v } = this.props,
                                { isModal: C } = this.context;
                            return r.createElement(n.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: f, ref: e, rightControl: g, secondaryBar: b, style: [C && m.appBarModal, t], subtitle: y, title: v, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: b } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && y, r.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, i] }, b ? r.createElement(p.Z, { style: m.viewport }, y, o) : o), t ? r.createElement(n.Z, { style: [m.bottomBarModal, !b && !g && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = h;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(807896),
                n = o(202784),
                a = o(229333),
                i = o(414939),
                l = o(334346);
            const s = ({ accessibilityTitle: e, footer: t = n.createElement(i.Z, null), ...o }) => {
                const s = n.createElement(l.C, (0, r.Z)({}, o, { footer: t }));
                return e ? n.createElement(a.Z, { title: e }, s) : s;
            };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => s, Z: () => l });
            var r = o(807896),
                n = o(202784),
                a = o(524084),
                i = o(768572);
            const l = "stable_sort_index",
                s = n.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return n.createElement(i.ZP, { identifier: o }, n.createElement(a.Z, (0, r.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                n = o(202784),
                a = o(771099);
            const i = (e) => (t) => n.createElement(a.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => E });
            var r = o(202784),
                n = o(154003),
                a = o(111677),
                i = o.n(a),
                l = o(74514),
                s = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                p = o(668214),
                h = o(257166),
                m = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                g = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = i().bdba3e1a,
                y = i().c4da7d28,
                v = i().j87c21f4,
                C = i().iebc30ca,
                w = i().dc740eb2;
            class x extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: C }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: v }, icon: r.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: r } = this.props;
                    return o(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const E = g(x);
        },
        292257: (e, t, o) => {
            o.d(t, { Z: () => v });
            var r = o(202784),
                n = o(325686),
                a = o(154003),
                i = o(392237),
                l = o(111677),
                s = o.n(l);
            const c = s().da878dc0,
                d = s().ec2d8342,
                u = i.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                p = ({ onAccept: e, onDecline: t }) => r.createElement(n.Z, { style: u.root }, r.createElement(a.ZP, { "aria-label": d, onPress: t, size: "small", style: [u.followerRequestActionButton, u.declineButton], type: "destructiveOutlined" }, d), r.createElement(a.ZP, { "aria-label": c, onPress: e, size: "small", style: u.followerRequestActionButton, type: "brandOutlined" }, c));
            var h = o(68292),
                m = o(71620),
                f = o(668214),
                g = o(466036);
            const b = (0, f.Z)().propsFromActions(() => ({ acceptPendingFollower: g.WC, createLocalApiErrorHandler: (0, m.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: g.X }));
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(h.D));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(h.D));
                        });
                }
                render() {
                    return r.createElement(p, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const v = b(y);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                n = o(500002),
                a = o(668214),
                i = o(997174),
                l = o(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = n || l;
                    ((c && n !== l) || (!c && o !== a) || r !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(s(c));
        },
        642153: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                a = o(392237),
                i = o(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        p = d.length,
                        h = "transparent" === t;
                    return r.createElement(
                        n.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => r.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: h ? "none" : o, key: n, size: c, style: [0 !== n && { marginStart: -1 * a.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => h });
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
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: a, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? r.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : o ? r.createElement(s.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
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
                h = i().b4b3b113,
                m = i().be222050,
                f = i().hcbbe447;
            class g extends r.Component {
                render() {
                    const { color: e, id: t, style: o } = this.props;
                    return r.createElement(n.Z, { style: [b.root, o] }, r.createElement(l.default, { style: [b.icon, e && b[e]] }), r.createElement(s.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: o } = this.props,
                        { adMetadataContainer: r, advertiser: n, advertiser_name: a, disclosure_type: i } = o,
                        l = e && n && e === n.id_str,
                        s = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        g = !(!r || "POLITICAL" !== r.disclaimerType) || s,
                        b = !(!r || "ISSUE" !== r.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: y } = r || {};
                    let v;
                    return (v = t || (!a || l || y ? (g ? p : b ? m : u) : g ? h({ fullName: a }) : b ? f({ fullName: a }) : d({ fullName: a }))), v;
                }
            }
            g.defaultProps = { color: "gray700" };
            const b = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
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
            o.d(t, { Z: () => H });
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
                h = o(790093),
                m = o(452693),
                f = o(544367),
                g = o(264171),
                b = o(159340),
                y = o(404971),
                v = o(262009),
                C = o(76388),
                w = o(488746),
                x = o(246492),
                E = o(520913),
                S = o(731708),
                Z = o(642153),
                k = o(879891),
                T = o(392237),
                R = o(54606);
            const P = a().ae408b76,
                B = a().j355f008,
                _ = a().habf9678,
                F = a().db0798ed,
                L = a().dc716ec9,
                I = ({ text: e }) => {
                    const { direction: t } = (0, k.Z)();
                    return r.createElement(S.ZP, { dir: t, withHashflags: !0 }, e);
                },
                A = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = r.createElement(I, { text: e });
                              return r.createElement(a().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                D = T.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                M = T.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                H = ({ contextType: e, iconColor: t, iconSize: o, link: n, retweetData: a, text: S, topicData: k, userAvatarUrls: P }) => {
                    const { isSelfRetweet: H, name: W, screenName: O } = a || {},
                        N = ((e, t, o, n = []) => {
                            const a = D[t],
                                S = [o ? { color: T.default.theme.colors[o] } : M.colorDeepGray, a],
                                k = r.createElement(i.default, { style: S }),
                                P = r.createElement(l.default, { style: S }),
                                B = r.createElement(s.default, { style: S }),
                                _ = r.createElement(c.default, { style: S }),
                                F = r.createElement(d.default, { style: S }),
                                L = r.createElement(u.default, { style: M.circle }),
                                I = r.createElement(p.default, { style: S }),
                                A = r.createElement(h.default, { style: S }),
                                H = r.createElement(m.default, { style: S }),
                                W = r.createElement(f.default, { style: S }),
                                O = r.createElement(g.default, { style: S }),
                                N = r.createElement(b.default, { style: S }),
                                U = r.createElement(y.default, { style: S }),
                                z = r.createElement(v.default, { style: S }),
                                Q = r.createElement(C.default, { style: S }),
                                V = r.createElement(w.default, { style: S }),
                                G = r.createElement(x.default, { style: S }),
                                X = r.createElement(Z.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: n }),
                                j = r.createElement(E.default, { style: S });
                            switch (e) {
                                case R.Q.Pin:
                                case R.Q.ReplyPin:
                                    return k;
                                case R.Q.Retweet:
                                    return P;
                                case R.Q.Like:
                                    return B;
                                case R.Q.Follow:
                                    return _;
                                case R.Q.Moment:
                                    return F;
                                case R.Q.NewTweets:
                                    return L;
                                case R.Q.Reply:
                                case R.Q.Conversation:
                                    return I;
                                case R.Q.Feedback:
                                    return A;
                                case R.Q.Topic:
                                    return H;
                                case R.Q.List:
                                    return W;
                                case R.Q.Location:
                                    return O;
                                case R.Q.Community:
                                    return N;
                                case R.Q.Spaces:
                                    return U;
                                case R.Q.Sparkle:
                                    return z;
                                case R.Q.SocialProof:
                                case R.Q.FollowFollowed:
                                    return G;
                                case R.Q.FollowMutual:
                                    return V;
                                case R.Q.FollowFollowing:
                                    return Q;
                                case R.Q.Facepile:
                                    return X;
                                case R.Q.Bird:
                                    return j;
                                case R.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, o, t, P);
                    switch (e) {
                        case R.Q.Retweet:
                            return { Icon: N, text: S || A(W, H), link: O ? `https://twitter.com/${O}` : void 0 };
                        case R.Q.Pin:
                            return { Icon: N, text: S || B };
                        case R.Q.ReplyPin:
                            return { Icon: N, text: _ };
                        case R.Q.Topic:
                            return { Icon: N, "aria-label": "Recommendation" === k?.functionalityType || "RecWithEducation" === k?.functionalityType ? L({ topicName: S }) : F({ topicName: S }), text: S ? r.createElement(I, { text: S }) : null, link: n };
                        default:
                            return { Icon: N, text: S ? r.createElement(I, { text: S }) : null, link: n };
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
            class h extends r.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: o, id: s, onLayout: c, rightControl: d, style: p, testID: h, textColor: f, textSize: g, topControl: b, weight: y, withBottomBorder: v, withLeftPadding: C, withTextCentered: w, ...x } = this.props,
                        { Icon: E, "aria-label": S, link: Z, text: k } = (0, u.Z)(x),
                        T = r.createElement(a.ZP, { "aria-label": S, color: f, id: s, numberOfLines: 2, size: g, testID: h, weight: y, withoutTwemojiAndHashflags: !0 }, k),
                        { cellStyle: R, viewStyle: P } = this._getStyles();
                    return k ? r.createElement(l.ZP.UseProps, null, (a) => r.createElement(r.Fragment, null, b || null, r.createElement(n.Z, { onLayout: c, style: [p, P, a.socialContextRefreshEnabled() && !C && m.socialContextRefresh] }, r.createElement(i.Z, { avatarCell: E || (C ? null : void 0), avatarCellStyle: [o, m.socialContextIconColumn, !C && m.unsetIconWidth, a.socialContextRefreshEnabled() && !C && m.socialContextRefreshIcon], avatarSize: e, cellStyle: R }, r.createElement(n.Z, { style: m.cellWrapper }, r.createElement(n.Z, { style: [m.socialContextTextColumn, a.socialContextRefreshEnabled() && !C && m.socialContextRefreshTextColumn] }, Z ? this._renderLink(Z, T) : T), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: o, id: n, onClick: i, retweetData: l, textColor: s, topicData: u } = this.props,
                        { screenName: h } = l || {},
                        m = r.createElement(a.ZP, { color: s, id: n, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return o === p.Q.Topic && u ? r.createElement(c.Z, { topicId: u.topicId }, m) : o === p.Q.Retweet && h ? r.createElement(d.Z, { screenName: h }, m) : m;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: o, withTextCentered: r } = this.props,
                        n = t === p.Q.TextOnly,
                        a = o ? [m.bottomBorderMargin, !!e && m.bottomBorder] : [],
                        i = o && !e ? [m.bottomBorder] : [];
                    return n && i.push(m.topicContext), r && i.push(m.socialContextTextCentered), { viewStyle: a, cellStyle: i };
                }
            }
            h.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const m = s.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                f = h;
        },
        54606: (e, t, o) => {
            o.d(t, { Q: () => r });
            o(202784);
            const r = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, o) => {
            o.d(t, { Z: () => m });
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
            const h = {
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
                m = Object.freeze(h);
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
                return { primary: h(e.primary), secondary: h(e.secondary) };
            }
            function h(e) {
                const t = a.xO(e),
                    o = n.$n({ color: t, coefficient: 0.5 });
                return a.vq(a.rb(o)).slice(0, -2);
            }
        },
        433460: (e, t, o) => {
            o.d(t, { Z: () => m });
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
                h = o(823161);
            const m = function (e) {
                const t = d.Z.useAnalytics(),
                    [o, a] = n.useState(),
                    i = !!(o && o > 70),
                    { "aria-label": l, presenceRingType: s, spaceId: c, ...p } = e,
                    m =
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
                    h.default,
                    (0, r.Z)({}, p, {
                        BorderComponent: g,
                        "aria-label": m,
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
                return "livevideo" === e.type ? n.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [b.liveVideoLabelContainer, b.borderNarrow, e.isWide ? b.liveVideoLabel : b.liveVideoLabelNarrow], type: "live" }) : n.createElement(a.Z, { style: [b.root, e.isWide ? b.rootWide : b.rootNarrow] }, n.createElement(u.Z.Default, { style: [b.spaceGradient, e.isWide ? b.borderWide : b.borderNarrow] }, n.createElement(s.default, { style: b.spaceIcon })));
            }
            const b = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        o = "100%",
                        r = e.spacesPx.space4,
                        n = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * r, bottom: -1 * r }, rootNarrow: { end: -1 * n, bottom: -1 * n }, borderWide: { borderWidth: r }, borderNarrow: { borderWidth: n }, spaceGradient: { justifyContent: "center", width: o, height: o, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                y = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(731708),
                a = o(354149),
                i = o(310452),
                l = o(720283);
            const s = ({ animateIn: e, description: t, entities: o, isConcise: s, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: h }) => {
                const { description: m, entities: f } = (0, l.H)({ description: t, entities: o, withheldDescription: p, withheldEntities: h }),
                    g = i.ZP.descriptionTextParts(m, f);
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
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / h), (e.vy = (p - e.dy) / h), (e.dx = u), (e.dy = p), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
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
                                    h(t, e.onPanResponderReject, r, o);
                                },
                                onResponderRelease(r) {
                                    h(t, e.onPanResponderRelease, r, o), m(t), p._initializeGestureState(o);
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
                                    (o.numberActiveTouches = n.numberActiveTouches), h(t, e.onPanResponderEnd, r, o);
                                },
                                onResponderTerminate(r) {
                                    h(t, e.onPanResponderTerminate, r, o), m(t), p._initializeGestureState(o);
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
            function h(e, t, o, n) {
                e.handle && (r.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, n);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = p;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-6107ac1a.c63021ca.js.map

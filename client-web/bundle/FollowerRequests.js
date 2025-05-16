"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                a = o(325686),
                s = o(392237),
                i = o(674132);
            const l = o.n(i)().e5b0063d;
            let d = 0;
            class c extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = l({ title: t });
                    return n.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), n.createElement(a.Z, { "aria-label": o }, e));
                }
            }
            const u = c;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                s = o(325686),
                i = o(370006),
                l = o(786998),
                d = o(929028),
                c = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: s, isLarge: d, leftControl: c, middleControl: h, position: m, rightControl: p, secondaryBar: f, style: b, subtitle: g, title: y, titleDomId: D, titleIconCell: k, titleIconCellSize: E, withBackground: w, withWideContainer: v } = this.props,
                        { isModal: C } = this.context,
                        _ = a ? c : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, C, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: d, leftControl: _, middleControl: h, position: u(m, C, r), rightControl: p, style: b, subtitle: g, title: y, titleDomId: D, titleIconCell: k, titleIconCellSize: E, withBackground: P, withWideContainer: v }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? n.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(392237);
            class s extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: i.root });
                }
            }
            const i = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = s;
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                s = o(879113),
                i = o(392237),
                l = o(674132),
                d = o.n(l),
                c = o(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, n.Z)({}, t, { icon: i ? void 0 : r.createElement(c.default, { style: m.icon }), retryMessage: i ? e : u }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var n = o(202784),
                r = o(638236),
                a = o(811176),
                s = o(674132),
                i = o.n(s),
                l = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                h = o(847607),
                m = o(417714),
                p = o(988823);
            const f = "block",
                b = "mute",
                g = "removeFollower",
                y = "report",
                D = "share",
                k = i().j7bb1a43,
                E = i().hef5960c,
                w = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: s, onMute: i, onRemoveFollower: p, onReportUser: w, onShare: v, onUnblock: C, onUnmute: _, user: P } = e,
                        Z = [],
                        M = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(o, d.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        Z.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), v();
                            },
                            testID: D,
                            text: E,
                        });
                    !P.blocking &&
                        Z.push({
                            ...(0, h.N1)(
                                P,
                                () => {
                                    s(), i();
                                },
                                () => {
                                    s(), _();
                                },
                            ),
                            testID: b,
                        });
                    P.followed_by &&
                        Z.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    M(e, p);
                                },
                                user: P,
                            }),
                            testID: g,
                        }),
                        Z.push((0, u.op)({ blockAction: (e) => M(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => M(e, C), user: P })),
                        Z.push({
                            Icon: l.default,
                            onClick: () => {
                                s(), w();
                            },
                            testID: y,
                            text: k({ screenName: P.screen_name }),
                        });
                    const I = Z.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(a.Z, { items: I, onCloseRequested: s });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => m });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                s = o(386802),
                i = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: s, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: f, rightControl: b, secondaryBar: g, subtitle: y, title: D } = this.props,
                                { isModal: k } = this.context;
                            return n.createElement(r.Z, { style: k ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(c.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !k, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: f, ref: e, rightControl: b, secondaryBar: g, style: [k && p.appBarModal, t], subtitle: y, title: D, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: i, isFullWidth: d, isLarge: c, renderHeader: m, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: g } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, g && p.rootModal] }, !g && y, n.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [p.container, g && p.containerModal, s] }, g ? n.createElement(h.Z, { style: p.viewport }, y, o) : o), t ? n.createElement(r.Z, { style: [p.bottomBarModal, !g && !b && p.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = s.Z);
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = m;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                r = o(202784),
                a = o(229333),
                s = o(414939),
                i = o(334346);
            const l = ({ accessibilityTitle: e, footer: t = r.createElement(s.Z, null), ...o }) => {
                const l = r.createElement(i.C, (0, n.Z)({}, o, { footer: t }));
                return e ? r.createElement(a.Z, { title: e }, l) : l;
            };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => l, Z: () => i });
            var n = o(807896),
                r = o(202784),
                a = o(524084),
                s = o(768572);
            const i = "stable_sort_index",
                l = r.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return r.createElement(s.ZP, { identifier: o }, r.createElement(a.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                r = o(202784),
                a = o(771099);
            const s = (e) => (t) => r.createElement(a.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                r = o(154003),
                a = o(674132),
                s = o.n(a),
                i = o(74514),
                l = o(405303),
                d = o(684511),
                c = o(860174),
                u = o(71620),
                h = o(668214),
                m = o(257166),
                p = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = s().bdba3e1a,
                y = s().c4da7d28,
                D = s().j87c21f4,
                k = s().iebc30ca,
                E = s().dc740eb2;
            class w extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: k }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": g, hoverLabel: { label: D }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(d.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = b(w);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                s = o(997174),
                i = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: s },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = r || i;
                    ((d && r !== i) || (!d && o !== a) || n !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(l(d));
        },
        524084: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(523561),
                a = o(195560);
            const s = (0, r.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, t) => n.createElement(a.Z, { hasError: e, onRetry: t }) });
        },
        684511: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => C, KV: () => g, LI: () => I, SC: () => v, Vt: () => k, ed: () => S, op: () => _ });
            var n = o(202784),
                r = o(190286),
                a = o(674132),
                s = o.n(a),
                i = o(616894),
                l = o(314948),
                d = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                m = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                g = s().a9fd20be,
                y = s().j546fb79,
                D = s().c9623eeb,
                k = s().e133be4e,
                E = s().he43bca4,
                w = s().f5f01af6,
                v = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: p, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                _ = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: r, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let l,
                        u = d.Z;
                    const h = I(i, o);
                    switch (n) {
                        case v.PROFILE:
                        case v.LIST_DETAIL:
                        case v.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? a(h) : e(h);
                            };
                            break;
                        case v.TWEET:
                        case v.TWEET_CARET:
                        case v.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (u = () => {
                                    i.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: r, shortcutKey: l, Icon: P(i.blocking), text: M(i), subText: Z({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                P = (e) => (e ? l.default : i.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                M = (e) => (e.blocking ? D({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: k, text: t ? w : E }))(e.screen_name, t) : C(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: l } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(674132);
            const r = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var n = o(674132),
                r = o.n(n),
                a = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: n } = e,
                    s = (0, r().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => y, GS: () => i, N1: () => m, PY: () => h, X6: () => D, cm: () => l });
            o(202784);
            var n = o(674132),
                r = o.n(n),
                a = o(391366),
                s = o(40904);
            const i = r().hb568af4,
                l = r().bb1cbeb6,
                d = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, t, o) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? h(r) : u(r), onClick: n ? o : t, Icon: n ? a.default : s.default };
                },
                p = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                g = r().h129c3c3,
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                D = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var n = o(674132),
                r = o.n(n),
                a = o(224823);
            const s = r().b3036480,
                i = r().b3036480,
                l = r().e68b09b4,
                d = r().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(674132);
            const r = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(615656),
                r = o(51525);
            const a = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        553093: (e, t, o) => {
            o.d(t, { Sz: () => n });
            const n = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const o = t.join("");
                    return r(o, 0).toString();
                },
                r = (e, t) => {
                    const o = "string" == typeof e ? e : String(e);
                    let n = t;
                    for (let e = 0; e < o.length; e++) {
                        (n = (n << 5) - n + o.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => c, PN: () => m, uq: () => d, wR: () => f });
            var n = o(251067),
                r = o(522171),
                a = o(674132),
                s = o.n(a),
                i = o(912021),
                l = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: d.nextItem, universal: !0 }, { description: s().g0048656, keys: d.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: d.refresh, universal: !1 }, { description: s().ha8209bc, keys: d.goHome, universal: !1 }, { description: s().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: s().eb75875e, keys: d.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: s().fa98627a, keys: d.goProfile, universal: !1 }, { description: s().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: s().b0041756, keys: d.goLists, universal: !1 }, { description: s().d4986f86, keys: d.goMessages, universal: !1 }, { description: s().h5860a68, keys: d.goGrok, universal: !1 }, { description: s().bb081ea2, keys: d.goSettings, universal: !1 }, { description: s().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: d.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: s().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: d.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: d.search, universal: !1 },
                    { description: s().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: d.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: d.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: d.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                m = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                p = (0, i.Z)((e) => {
                    const t = c(e),
                        o = h(),
                        n = m(),
                        r = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => s });
            var n = o(807896),
                r = o(202784),
                a = o(190286);
            const s = (e) => (t) => {
                const [o, s] = r.useState(null),
                    i = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = o;
                    return r.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                i(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => g });
            var n = o(370751),
                r = o(399896),
                a = o(663550),
                s = o(499627),
                i = o(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (h.has(a) && p(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, i._O)(t, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [m(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: h } = n,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: g, request: l.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, t) => {
                            if (!t && u.has(c)) return [m(f)];
                        });
                    },
                g =
                    (e) =>
                    (t, o, { api: n }) =>
                        (0, i._O)(t, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: o } = t.payload;
                        return { ...e, [o]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, t, o) => {
            o.d(t, { r: () => d });
            o(136728);
            var n = o(161821),
                r = o(390387),
                a = o(836255),
                s = o(255117),
                i = o(166506),
                l = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, n.Z)(a.Z.selectAll(t)).reduce((o, n) => {
                                if (null != n)
                                    if (n.user === e) o[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(t, n.retweeted_status);
                                        r?.user === e && (o[n.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, r._h)(d()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            h = (0, i.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const o = (0, i.f8)(e, t, h);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => c, f8: () => u, k9: () => d });
            var n = o(503768),
                r = o(750085),
                a = o(962741),
                s = o(466015),
                i = o(919022),
                l = o(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (t, o) => {
                    const n = o();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = i.ZP.select(n, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(n);
                    }
                };
        },
        725014: (e, t, o) => {
            o.r(t), o.d(t, { FollowerRequestsScreen: () => q, default: () => H });
            var n = o(202784),
                r = o(325686),
                a = o(457311),
                s = o(674132),
                i = o.n(s),
                l = o(290402),
                d = o(980407),
                c = o(965245),
                u = o(154003),
                h = o(392237);
            const m = i().da878dc0,
                p = i().ec2d8342,
                f = h.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                b = ({ onAccept: e, onDecline: t }) => n.createElement(r.Z, { style: f.root }, n.createElement(u.ZP, { "aria-label": p, onPress: t, size: "small", style: [f.followerRequestActionButton, f.declineButton], type: "destructiveOutlined" }, p), n.createElement(u.ZP, { "aria-label": m, onPress: e, size: "small", style: f.followerRequestActionButton, type: "brandOutlined" }, m));
            var g = o(615656);
            const y = i().j85d8d90,
                D = { [g.ZP.NoFollowRequest]: { toast: { text: y } }, showToast: !0 };
            var k = o(71620),
                E = o(668214),
                w = o(466036);
            const v = (0, E.Z)().propsFromActions(() => ({ acceptPendingFollower: w.WC, createLocalApiErrorHandler: (0, k.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: w.X }));
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(D));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(D));
                        });
                }
                render() {
                    return n.createElement(b, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const _ = v(C);
            var P = o(240089),
                Z = o(293115),
                M = o(409438),
                I = o(553093);
            const S = (e) => (e && "user_cell" === e.type ? e.data : (0, I.Sz)(e));
            var x = o(24949),
                A = o(312771);
            const T = (e) => w.sC(e).hydratedIds,
                B = (0, E.Z)()
                    .propsFromState(() => ({ followerRequestIds: T, fetchStatus: (0, x.P1)(w.sC, w.HP, w.dj, ({ hydratedIds: e, ids: t }, o, n) => (o === A.ZP.LOADED ? (t.length && e.length !== t.length ? n || A.ZP.LOADING : A.ZP.LOADED) : o)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: t }) => ({ fetchStatus: t, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: w.GE, fetchPendingFollowersUsersIfNeeded: w.IN, fetchNextPendingFollowersUsers: w.lm })),
                L = i().g6b54ff6,
                F = i().ec5fd35a,
                R = i().i83d4f14,
                O = { page: "follower_requests" },
                N = (e) => {
                    const { followRequestReceived: t, userId: o, viewerUserId: n } = e;
                    return !(!t || n === o);
                },
                U = (e) => (N(e) ? null : (0, P.ET)(e)),
                W = (e) => (N(e) ? n.createElement(_, { userId: e.userId }) : null);
            class q extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return n.createElement(c.Z, { accessibilityTitle: R, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: S, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => n.createElement(a.Z, { header: L, message: F })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: t, fetchPendingFollowersUsersIfNeeded: o } = this.props;
                            t().then(() => o(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? n.createElement(r.Z, null, n.createElement(P.ZP, { bottomControl: W, decoration: U, displayMode: M.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props;
                    return n.createElement(Z.nO, { namespace: O }, n.createElement(d.Z, { history: t, title: R }, n.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const H = B(q);
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(476984),
                a = o.n(r),
                s = o(143778),
                i = o(750410),
                l = o(682830);
            const d = "failed",
                c = "loaded",
                u = "loading",
                h = "none";
            class m extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: r, icon: a, loadingMessage: s, onRequestRetry: c, render: m, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (r) {
                        case d:
                            return b ? n.createElement(i.Z, { icon: a, onRequestRetry: c, retryMessage: f }) : o ? n.createElement(l.m, { failureMessage: o }) : p();
                        case u:
                            return n.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        941978: (e, t, o) => {
            o.d(t, { C: () => n });
            class n {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const o = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = o), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new n();
        },
        491915: (e, t, o) => {
            o.d(t, { ZP: () => b });
            o(571372);
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                s = o(674132),
                i = o.n(s),
                l = o(643442),
                d = o(466445),
                c = o(731708),
                u = o(154003),
                h = o(173739);
            const m = i().jcf3e7a2;
            function p({ animation: e, autoplay: t }) {
                const [o, a] = n.useState(t),
                    [s, i] = n.useState(0);
                return (
                    n.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: f.container },
                        n.createElement(u.ZP, {
                            "aria-label": o ? "Pause" : "Play",
                            icon: o ? n.createElement(l.default, null) : n.createElement(d.default, null),
                            onClick: function () {
                                o ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        n.createElement(c.ZP, { style: f.frames }, `${s}/${e.totalFrames}`),
                        n.createElement(
                            r.Z,
                            { style: f.slider },
                            n.createElement(h.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: s,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function b(e) {
                const { autoplay: t = !0, loop: o = !1, onAnimationEnd: a, onAnimationStart: s, onError: i, withControls: l } = e,
                    d = n.useRef(void 0),
                    c = n.useRef({ animationLoaded: !1 }),
                    u = n.useRef(null),
                    [h, m] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        function n(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = c.current;
                        r ||
                            ((c.current.animationLoaded = !0),
                            g.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: o, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(a);
                                    (d.current = l),
                                        (l.onError = (e) => {
                                            const t = new y(e);
                                            "function" == typeof i && i(t), n(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (l.play(), s && s());
                                        }),
                                        l.addEventListener("complete", () => {
                                            n(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, o, a, s, i, l]),
                    n.useEffect(
                        () =>
                            function () {
                                d.current && d.current.destroy();
                            },
                        [d],
                    ),
                    n.createElement(r.Z, null, n.createElement(r.Z, { style: [e.animationContainerStyle, D.centerAnimation] }, n.createElement("div", { ref: u, style: e.animationStyle }), l && d.current && h && n.createElement(p, { animation: d.current, autoplay: t })))
                );
            }
            b.Prepare = function () {
                return (
                    n.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => o.e("ondemand.LottieWeb").then(o.t.bind(o, 548888, 23)) };
            class y extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, y), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const D = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(674132),
                a = o.n(r),
                s = o(149170),
                i = o(40644);
            const l = a().gaeb997e;
            const d = function ({ activeColor: e, label: t = l, Icon: o = s.default, iconSize: r = "normal", isDisabled: a, onClick: d, preventFocusShift: c, renderActionMenu: u, style: h, testID: m, withDarkBackground: p = !1 }) {
                const f = n.useCallback(
                        (e) => {
                            e && e.preventDefault(), d && d(e);
                        },
                        [d],
                    ),
                    b = n.useMemo(() => ({ label: t }), [t]);
                return n.createElement(i.ZP, { Icon: o, activeColor: e || (p ? "white" : void 0), "aria-label": t, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: b, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: c, renderMenu: u, style: h, testID: m });
            };
        },
        280278: (e, t, o) => {
            o.d(t, { ZP: () => f });
            var n = o(202784),
                r = o(325686),
                a = o(827515),
                s = o(461756),
                i = o(731708),
                l = o(392237);
            const d = "up",
                c = "down",
                u = (e, t, o) => {
                    o((o) => {
                        const n = (0, a.Z)(e) ? (e > (o.count || 0) ? d : c) : d;
                        return { ...o, count: e, oldText: o.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                h = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: o, count: l, ...c } = e,
                        [f, b] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        g = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (g.current)
                                if (s.Z.reducedMotionEnabled) b((o) => ({ ...o, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((o) => ({ ...o, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            g.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, b));
                        }, [f.animating, f.oldText]),
                        n.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !s.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !s.Z.reducedMotionEnabled,
                                l = { ...m, ...(f.animating ? e.post : e.active) },
                                d = { ...(a ? e.pre : e.active) };
                            return n.createElement(
                                r.Z,
                                { style: [p.root, o] },
                                t ? n.createElement("span", { style: l }, n.createElement(i.ZP, c, f.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, b),
                                        style: d,
                                    },
                                    n.createElement(i.ZP, c, f.text),
                                ),
                            );
                        }, [o, c, f, g, b])
                    );
                };
        },
        40644: (e, t, o) => {
            o.d(t, { ZP: () => E });
            var n = o(202784),
                r = o(325686),
                a = o(461756),
                s = o(731708),
                i = o(58881),
                l = o(530732),
                d = o(224162),
                c = o(491915),
                u = o(392237),
                h = o(551611),
                m = o(674132),
                p = o.n(m),
                f = o(891198),
                b = o(537392),
                g = o(280278);
            const y = p().e8d93005,
                D = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                k = ({ color: e, count: t }) => {
                    const o = (0, f.wl)(t, !0);
                    return n.createElement(b.ZP, null, ({ containerWidth: r }) => {
                        return n.createElement(g.ZP, { color: e, count: t, size: "subtext2", style: [D.count, ((a = r), a < u.default.theme.breakpoints.small && D.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || o.length >= 5 ? y(t) : o) : void 0);
                        var a;
                    });
                };
            class E extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: o, color: a, decoration: i } = this.props;
                            return n.createElement(d.ZP.Consumer, null, ({ direction: l }) => n.createElement(s.ZP, { color: e ? o : a, dir: l, style: [C.inner, e && "blue500" === o && C.blue500] }, n.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), i, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: o, hoverLabel: r, iconSize: a, isActive: s, isDisabled: d, showBackgroundWhenActive: c } = this.props,
                                h = i.Z.generate({ backgroundColor: u.default.theme.colors[o], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                m = c && s && !e?.isHovered;
                            return n.createElement(l.Z, { hoverLabel: r, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, v[m ? "haloBackground" : o], !d && C.iconBackground, "small" === a && C.iconSmallBoundingBox, m && C.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: o, isDisabled: r, isFaded: s, onAnimationEnd: i, onAnimationStart: l, onError: d, showAnimation: m, transitionAnimationUrl: p } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && m) return n.createElement(c.ZP, { animation: p || h.Bf, animationContainerStyle: w[t], animationStyle: P, onAnimationEnd: i, onAnimationStart: l, onError: d });
                            {
                                const a = o && e ? e : this.props.Icon;
                                return n.createElement(a, { style: [w[t], !r && s && C.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? n.createElement(k, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: o } = this.props;
                            o || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: o, isActive: s, isDisabled: i, isPresentational: d, keyboardShortcut: h, link: m, preventFocusShift: p, renderMenu: f, renderWrapper: b = n.Fragment, style: g, testID: y } = this.props,
                        D = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return n.createElement(
                        r.Z,
                        { style: [C.root, g] },
                        n.createElement(
                            b,
                            null,
                            d
                                ? this._renderContent(s)
                                : n.createElement(l.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: i, enableKeyboardShortcuts: o, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: m, onClick: this._handlePress, preventFocusShift: p, renderMenu: f, style: [C.triggerAreaRoot, C.outlineNone], testID: y }, (e) => {
                                      const { isFocused: t, isHovered: o, isPressed: n } = e,
                                          r = s || o || n || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        D ? n.createElement(c.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const w = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                v = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                C = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                _ = "224.5%",
                P = { width: _, height: _ };
        },
        551611: (e, t, o) => {
            o.d(t, { Bf: () => r, ZP: () => s });
            var n = o(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends n.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const s = new a();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests.b1c6de9a.js.map

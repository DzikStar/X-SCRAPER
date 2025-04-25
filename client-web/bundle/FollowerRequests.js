"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests"],
    {
        229333: (e, o, t) => {
            t.d(o, { Z: () => u });
            var r = t(202784),
                n = t(466999),
                a = t(325686),
                s = t(392237),
                l = t(674132);
            const d = t.n(l)().e5b0063d;
            let i = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: o } = this.props,
                        t = d({ title: o });
                    return r.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, o), r.createElement(a.Z, { "aria-label": t }, e));
                }
            }
            const u = c;
        },
        625661: (e, o, t) => {
            t.d(o, { ZP: () => h });
            var r = t(202784),
                n = t(614983),
                a = t.n(n),
                s = t(325686),
                l = t(370006),
                d = t(786998),
                i = t(929028),
                c = t(386802);
            function u(e, o, t) {
                return e || (!o && t ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: o } = this.props;
                            a()(o || e, "Either onBackClick must be specified, or history should be supplied"), o ? o(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: o } = this.props;
                            o && o.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: o, centeredLogo: t, fixed: n, hideBackButton: a, isFullWidth: s, isLarge: i, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: D, title: y, titleDomId: k, titleIconCell: g, titleIconCellSize: w, withBackground: E, withWideContainer: _ } = this.props,
                        { isModal: v } = this.context,
                        M = a ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, o, t) {
                            return e && !(o && t);
                        })(!!E, v, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(d.Z, { centerTitle: o, centeredLogo: t, isFullWidth: s, isLarge: i, leftControl: M, middleControl: h, position: u(p, v, n), rightControl: m, style: b, subtitle: D, title: y, titleDomId: k, titleIconCell: g, titleIconCellSize: w, withBackground: P, withWideContainer: _ }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: o } = this.context,
                        t = i.Z.getBackgroundStyles();
                    return o ? r.createElement(s.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(202784),
                n = t(325686),
                a = t(392237);
            class s extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: l.root });
                }
            }
            const l = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                d = s;
        },
        290402: (e, o, t) => {
            t.d(o, { Z: () => m });
            var r = t(807896),
                n = t(202784),
                a = t(182056),
                s = t(879113),
                l = t(392237),
                d = t(674132),
                i = t.n(d),
                c = t(968478);
            const u = i().aa6e3300,
                h = ({ retryMessage: e, ...o }, t) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, o, { icon: l ? void 0 : n.createElement(c.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        333241: (e, o, t) => {
            t.d(o, { Z: () => E });
            t(136728);
            var r = t(202784),
                n = t(638236),
                a = t(811176),
                s = t(674132),
                l = t.n(s),
                d = t(415506),
                i = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                p = t(417714),
                m = t(988823);
            const f = "block",
                b = "mute",
                D = "removeFollower",
                y = "report",
                k = "share",
                g = l().j7bb1a43,
                w = l().hef5960c,
                E = (0, m.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: s, onMute: l, onRemoveFollower: m, onReportUser: E, onShare: _, onUnblock: v, onUnmute: M, user: P } = e,
                        C = [],
                        I = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(t, i.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        C.push({
                            Icon: n.Z,
                            onClick: () => {
                                s(), _();
                            },
                            testID: k,
                            text: w,
                        });
                    !P.blocking &&
                        C.push({
                            ...(0, h.N1)(
                                P,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), M();
                                },
                            ),
                            testID: b,
                        });
                    P.followed_by &&
                        C.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    I(e, m);
                                },
                                user: P,
                            }),
                            testID: D,
                        }),
                        C.push((0, u.op)({ blockAction: (e) => I(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => I(e, v), user: P })),
                        C.push({
                            Icon: d.default,
                            onClick: () => {
                                s(), E();
                            },
                            testID: y,
                            text: g({ screenName: P.screen_name }),
                        });
                    const Z = C.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(a.Z, { items: Z, onCloseRequested: s });
                });
        },
        980407: (e, o, t) => {
            t.d(o, { Z: () => f, w: () => p });
            var r = t(202784),
                n = t(325686),
                a = t(108362),
                s = t(386802),
                l = t(392237),
                d = t(652904),
                i = t(555079),
                c = t(625661),
                u = t(449067),
                h = t(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: o, backButtonType: t, backLocation: a, centerTitle: s, hideBackButton: l, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: D, subtitle: y, title: k } = this.props,
                                { isModal: g } = this.context;
                            return r.createElement(n.Z, { style: g ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: t || (g ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !g, hideBackButton: l, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: D, style: [g && m.appBarModal, o], subtitle: y, title: k, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: o } = this.props,
                                { isModal: t } = this.context;
                            o && (t ? window.requestAnimationFrame(() => o(e)) : o(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: o, children: t, containerStyle: s, documentTitle: l, isFullWidth: i, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: D } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(d.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, D && m.rootModal] }, !D && y, r.createElement(a.Z, { isFullWidth: i, isLarge: c, style: [m.container, D && m.containerModal, s] }, D ? r.createElement(h.Z, { style: m.viewport }, y, t) : t), o ? r.createElement(n.Z, { style: [m.bottomBarModal, !D && !b && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: i, isLarge: c }, o)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(807896),
                n = t(202784),
                a = t(229333),
                s = t(414939),
                l = t(334346);
            const d = ({ accessibilityTitle: e, footer: o = n.createElement(s.Z, null), ...t }) => {
                const d = n.createElement(l.C, (0, r.Z)({}, t, { footer: o }));
                return e ? n.createElement(a.Z, { title: e }, d) : d;
            };
        },
        334346: (e, o, t) => {
            t.d(o, { C: () => d, Z: () => l });
            var r = t(807896),
                n = t(202784),
                a = t(524084),
                s = t(768572);
            const l = "stable_sort_index",
                d = n.forwardRef((e, o) => {
                    const t = e.cacheKey;
                    return n.createElement(s.ZP, { identifier: t }, n.createElement(a.Z, (0, r.Z)({ ref: o }, e)));
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(771099);
            const s = (e) => (o) => n.createElement(a.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => _ });
            var r = t(202784),
                n = t(154003),
                a = t(674132),
                s = t.n(a),
                l = t(74514),
                d = t(405303),
                i = t(684511),
                c = t(860174),
                u = t(71620),
                h = t(668214),
                p = t(257166),
                m = t(919022);
            const f = (e, o) => !(!o.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                D = s().bdba3e1a,
                y = s().c4da7d28,
                k = s().j87c21f4,
                g = s().iebc30ca,
                w = s().dc740eb2;
            class E extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": D, hoverLabel: { label: k }, icon: r.createElement(d.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: o } = this.props;
                            o && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((o) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((o) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(i.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: t, userId: r } = this.props;
                    return t(r, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const _ = b(E);
        },
        652904: (e, o, t) => {
            t.d(o, { Z: () => c });
            var r = t(202784),
                n = t(500002),
                a = t(668214),
                s = t(997174),
                l = t(118823);
            const d = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class i extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: o },
                            location: { pathname: t, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: a, search: s },
                            locationKey: l,
                        } = e;
                    let d = !1;
                    o.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && o.pathname === t && ((this._isInBackground = !1), (d = !0));
                    const i = n || l;
                    ((i && n !== l) || (!i && t !== a) || r !== s || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: o, updateLocation: t, updateTweetDetailNav: r } = e;
                    o.scribePageImpression(), t(o.contextualScribeNamespace, o.contextualScribeData), r(o.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, n.ZP)(d(i));
        },
        524084: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(202784),
                n = t(523561),
                a = t(195560);
            const s = (0, n.Z)({ loader: () => t.e("loader.AbsolutePower").then(t.bind(t, 590136)), renderPlaceholder: (e, o) => r.createElement(a.Z, { hasError: e, onRetry: o }) });
        },
        684511: (e, o, t) => {
            t.d(o, { Z: () => r });
            t(202784);
            const r = (0, t(523561).Z)({
                loader: () =>
                    Promise.all([
                        t.e("modules.common-e907d115"),
                        t.e("modules.common-e019dbda"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        376293: (e, o, t) => {
            t.d(o, { $f: () => v, KV: () => D, LI: () => Z, SC: () => _, Vt: () => g, ed: () => A, op: () => M });
            var r = t(202784),
                n = t(190286),
                a = t(674132),
                s = t.n(a),
                l = t(616894),
                d = t(314948),
                i = t(516951),
                c = t(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                D = s().a9fd20be,
                y = s().j546fb79,
                k = s().c9623eeb,
                g = s().e133be4e,
                w = s().he43bca4,
                E = s().f5f01af6,
                _ = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                v = (e, o) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: o ? b({ screenName: e }) : f({ screenName: e }) }),
                M = ({ blockAction: e, blockSubtext: o, isSoftBlockEnabled: t, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let d,
                        u = i.Z;
                    const h = Z(l, t);
                    switch (r) {
                        case _.PROFILE:
                        case _.LIST_DETAIL:
                        case _.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(h) : e(h);
                            };
                            break;
                        case _.TWEET:
                        case _.TWEET_CARET:
                        case _.RICH_FEEDBACK:
                            (d = c.uq.block),
                                (u = () => {
                                    l.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: d, Icon: P(l.blocking), text: I(l), subText: C({ user: l, blockSubtext: o, unblockSubtext: s }) };
                },
                P = (e) => (e ? d.default : l.default),
                C = ({ blockSubtext: e, unblockSubtext: o, user: t }) => (!t.blocking && e ? e(t.screen_name) : t.blocking ? o : void 0),
                I = (e) => (e.blocking ? k({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                Z = (e, o) => (e.blocking ? ((e, o) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: g, text: o ? E : w }))(e.screen_name, o) : v(e.screen_name, o)),
                A = ({ confirmation: e, handleConfirm: o, onClose: t }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: d } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: t, onConfirm: o, text: d });
                };
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(674132);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => s });
            var r = t(674132),
                n = t.n(r),
                a = t(437358);
            const s = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => y, GS: () => l, N1: () => p, PY: () => h, X6: () => k, cm: () => d });
            t(202784);
            var r = t(674132),
                n = t.n(r),
                a = t(391366),
                s = t(40904);
            const l = n().hb568af4,
                d = n().bb1cbeb6,
                i = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => i({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? t : o, Icon: r ? a.default : s.default };
                },
                m = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                D = n().h129c3c3,
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                k = (e) => (e ? ((e) => D({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(674132),
                n = t.n(r),
                a = t(224823);
            const s = n().b3036480,
                l = n().b3036480,
                d = n().e68b09b4,
                i = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: d, text: i({ screenName: e.screen_name }) });
        },
        712816: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().b6878b0a }, showToast: !0 };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, o, t) => {
            t.d(o, { D: () => n });
            var r = t(674132);
            const n = { defaultToast: { text: t.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(615656),
                n = t(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        553093: (e, o, t) => {
            t.d(o, { Sz: () => r });
            const r = (e) => {
                    const o = (JSON.stringify(e) || "").split("");
                    o.sort();
                    const t = o.join("");
                    return n(t, 0).toString();
                },
                n = (e, o) => {
                    const t = "string" == typeof e ? e : String(e);
                    let r = o;
                    for (let e = 0; e < t.length; e++) {
                        (r = (r << 5) - r + t.charCodeAt(e)), (r |= 0);
                    }
                    return r;
                };
        },
        163390: (e, o, t) => {
            t.d(o, { OX: () => h, Od: () => c, PN: () => p, uq: () => i, wR: () => f });
            var r = t(251067),
                n = t(522171),
                a = t(674132),
                s = t.n(a),
                l = t(912021),
                d = t(323265);
            const i = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const o = e ? [{ description: s().b7fa0cfe, keys: i.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: i.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: i.nextItem, universal: !0 }, { description: s().g0048656, keys: i.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: i.refresh, universal: !1 }, { description: s().ha8209bc, keys: i.goHome, universal: !1 }, { description: s().fcf3e54c, keys: i.goExplore, universal: !0 }, { description: s().eb75875e, keys: i.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: i.goMentions, universal: !1 }, { description: s().fa98627a, keys: i.goProfile, universal: !1 }, { description: s().d4ebc798, keys: i.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: i.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: i.goLikes, universal: !1 }, { description: s().b0041756, keys: i.goLists, universal: !1 }, { description: s().d4986f86, keys: i.goMessages, universal: !1 }, { description: s().h5860a68, keys: i.goGrok, universal: !1 }, { description: s().bb081ea2, keys: i.goSettings, universal: !0 }, { description: s().i3145aa0, keys: i.goBookmarks, universal: !1 }, ...o, { description: s().eee2ed92, keys: i.goToUser, universal: !0 }, { description: s().ee5ccf3e, keys: i.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: s().ab3d53f8, keys: i.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: i.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: i.search, universal: !0 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: i.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: i.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: i.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: i.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: s().c82314e0, keys: i.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: i.video.play2, universal: !0 },
                    { description: s().b881560e, keys: i.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: i.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: i.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: i.audio.mute, universal: !1 },
                ],
                m = (0, l.Z)((e) => {
                    const o = c(e),
                        t = h(),
                        r = p(),
                        n = {};
                    return (
                        [...t, ...r, ...o].forEach(({ description: e, keys: o }) => {
                            Array.isArray(o)
                                ? o.forEach((o) => {
                                      n[o] = e;
                                  })
                                : (n[o] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                f = (e, o) => {
                    if (o) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, o, t) => {
            t.d(o, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(190286);
            const s = (e) => (o) => {
                const [t, s] = n.useState(null),
                    l = (e) =>
                        new Promise((o, t) => {
                            s({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: l } = t;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, o, { confirm: l }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => b, dS: () => f, iY: () => D });
            var r = t(370751),
                n = t(399896),
                a = t(663550),
                s = t(499627),
                l = t(917799);
            const d = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${a}`;
                        if (h.has(a) && m(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: a, impression_id: s };
                        return (0, l._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (a, s, { api: d }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: D, request: d.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, o) => {
                            if (!o && u.has(c)) return [p(f)];
                        });
                    },
                D =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, l._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = d, o) {
                    if (!o) return e;
                    if (o.type === c) {
                        if (!o.payload) return e;
                        const { eventKey: t } = o.payload;
                        return { ...e, [t]: !0 };
                    }
                    return e;
                },
            });
        },
        629196: (e, o, t) => {
            t.d(o, { r: () => i });
            t(136728);
            var r = t(161821),
                n = t(390387),
                a = t(836255),
                s = t(255117),
                l = t(166506),
                d = t(919022);
            const i =
                (e, o) =>
                (t, i, { api: c, featureSwitches: u }) =>
                    t(d.ZP.mute(e, o)).then(() => {
                        const o = i(),
                            d = (0, r.Z)(a.Z.selectAll(o)).reduce((t, r) => {
                                if (null != r)
                                    if (r.user === e) t[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(o, r.retweeted_status);
                                        n?.user === e && (t[r.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, n._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            h = (0, l.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const t = (0, l.f8)(e, o, h);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => i });
            var r = t(503768),
                n = t(750085),
                a = t(962741),
                s = t(466015),
                l = t(919022),
                d = t(218951);
            const i = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    t = l.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        725014: (e, o, t) => {
            t.r(o), t.d(o, { FollowerRequestsScreen: () => q, default: () => G });
            var r = t(202784),
                n = t(325686),
                a = t(457311),
                s = t(674132),
                l = t.n(s),
                d = t(290402),
                i = t(980407),
                c = t(965245),
                u = t(154003),
                h = t(392237);
            const p = l().da878dc0,
                m = l().ec2d8342,
                f = h.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                b = ({ onAccept: e, onDecline: o }) => r.createElement(n.Z, { style: f.root }, r.createElement(u.ZP, { "aria-label": m, onPress: o, size: "small", style: [f.followerRequestActionButton, f.declineButton], type: "destructiveOutlined" }, m), r.createElement(u.ZP, { "aria-label": p, onPress: e, size: "small", style: f.followerRequestActionButton, type: "brandOutlined" }, p));
            var D = t(615656);
            const y = l().j85d8d90,
                k = { [D.ZP.NoFollowRequest]: { toast: { text: y } }, showToast: !0 };
            var g = t(71620),
                w = t(668214),
                E = t(466036);
            const _ = (0, w.Z)().propsFromActions(() => ({ acceptPendingFollower: E.WC, createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: E.X }));
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: o, userId: t } = this.props;
                            e({ id_str: t }).catch(o(k));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: o, userId: t } = this.props;
                            o({ id_str: t }).catch(e(k));
                        });
                }
                render() {
                    return r.createElement(b, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const M = _(v);
            var P = t(240089),
                C = t(293115),
                I = t(409438),
                Z = t(553093);
            const A = (e) => (e && "user_cell" === e.type ? e.data : (0, Z.Sz)(e));
            var T = t(24949),
                S = t(312771);
            const x = (e) => E.sC(e).hydratedIds,
                L = (0, w.Z)()
                    .propsFromState(() => ({ followerRequestIds: x, fetchStatus: (0, T.P1)(E.sC, E.HP, E.dj, ({ hydratedIds: e, ids: o }, t, r) => (t === S.ZP.LOADED ? (o.length && e.length !== o.length ? r || S.ZP.LOADING : S.ZP.LOADED) : t)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: o }) => ({ fetchStatus: o, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: E.GE, fetchPendingFollowersUsersIfNeeded: E.IN, fetchNextPendingFollowersUsers: E.lm })),
                B = l().g6b54ff6,
                F = l().ec5fd35a,
                R = l().i83d4f14,
                O = { page: "follower_requests" },
                N = (e) => {
                    const { followRequestReceived: o, userId: t, viewerUserId: r } = e;
                    return !(!o || r === t);
                },
                U = (e) => (N(e) ? null : (0, P.ET)(e)),
                W = (e) => (N(e) ? r.createElement(M, { userId: e.userId }) : null);
            class q extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return r.createElement(c.Z, { accessibilityTitle: R, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: A, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => r.createElement(a.Z, { header: B, message: F })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: o, fetchPendingFollowersUsersIfNeeded: t } = this.props;
                            o().then(() => t(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? r.createElement(n.Z, null, r.createElement(P.ZP, { bottomControl: W, decoration: U, displayMode: I.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: o } = this.props;
                    return r.createElement(C.nO, { namespace: O }, r.createElement(i.Z, { history: o, title: R }, r.createElement(d.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const G = L(q);
        },
        879113: (e, o, t) => {
            t.d(o, { Z: () => p });
            var r = t(202784),
                n = t(476984),
                a = t.n(n),
                s = t(143778),
                l = t(750410),
                d = t(682830);
            const i = "failed",
                c = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const o = e.fetchStatus === c,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!o && !t) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: o, failureMessage: t, fetchStatus: n, icon: a, loadingMessage: s, onRequestRetry: c, render: p, renderFailure: m, retryMessage: f, retryable: b } = this.props;
                    switch (n) {
                        case i:
                            return b ? r.createElement(l.Z, { icon: a, onRequestRetry: c, retryMessage: f }) : t ? r.createElement(d.m, { failureMessage: t }) : m();
                        case u:
                            return r.createElement(d.J, { "aria-label": e, color: o, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests.d0ffedea.js.map

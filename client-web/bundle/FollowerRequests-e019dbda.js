"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e019dbda"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(202784),
                n = o(466999),
                a = o(325686),
                s = o(392237),
                l = o(111677);
            const i = o.n(l)().e5b0063d;
            let d = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = i({ title: t });
                    return r.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), r.createElement(a.Z, { "aria-label": o }, e));
                }
            }
            const u = c;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                n = o(614983),
                a = o.n(n),
                s = o(325686),
                l = o(370006),
                i = o(786998),
                d = o(929028),
                c = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: a, isFullWidth: s, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: y, title: D, titleDomId: k, titleIconCell: g, titleIconCellSize: w, withBackground: E, withWideContainer: _ } = this.props,
                        { isModal: v } = this.context,
                        P = a ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!E, v, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: d, leftControl: P, middleControl: h, position: u(p, v, n), rightControl: m, style: b, subtitle: y, title: D, titleDomId: k, titleIconCell: g, titleIconCellSize: w, withBackground: C, withWideContainer: _ }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686),
                a = o(392237);
            class s extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: l.root });
                }
            }
            const l = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = s;
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                s = o(879113),
                l = o(392237),
                i = o(111677),
                d = o.n(i),
                c = o(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, t, { icon: l ? void 0 : n.createElement(c.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                s = o(111677),
                l = o.n(s),
                i = o(415506),
                d = o(516951),
                c = o(376293),
                u = o(847607),
                h = o(417714),
                p = o(988823);
            const m = "block",
                f = "mute",
                b = "removeFollower",
                y = "report",
                D = "share",
                k = l().j7bb1a43,
                g = l().hef5960c,
                w = (0, p.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: s, onRemoveFollower: l, onReportUser: p, onShare: w, onUnblock: E, onUnmute: _, user: v } = e,
                        P = [],
                        C = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, d.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !v.protected &&
                        !v.blocking &&
                        !v.blocked_by &&
                        P.push({
                            Icon: n.Z,
                            onClick: () => {
                                o(), w();
                            },
                            testID: D,
                            text: g,
                        });
                    !v.blocking &&
                        P.push({
                            ...(0, u.N1)(
                                v,
                                () => {
                                    o(), s();
                                },
                                () => {
                                    o(), _();
                                },
                            ),
                            testID: f,
                        });
                    v.followed_by &&
                        P.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    C(e, l);
                                },
                                user: v,
                            }),
                            testID: b,
                        }),
                        P.push((0, c.op)({ blockAction: (e) => C(e, t), source: c.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => C(e, E), user: v })),
                        P.push({
                            Icon: i.default,
                            onClick: () => {
                                o(), p();
                            },
                            testID: y,
                            text: k({ screenName: v.screen_name }),
                        });
                    const I = P.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: I, onCloseRequested: o });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => p });
            var r = o(202784),
                n = o(325686),
                a = o(108362),
                s = o(386802),
                l = o(392237),
                i = o(652904),
                d = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: s, hideBackButton: l, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: y, subtitle: D, title: k } = this.props,
                                { isModal: g } = this.context;
                            return r.createElement(n.Z, { style: g ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (g ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !g, hideBackButton: l, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: y, style: [g && m.appBarModal, t], subtitle: D, title: k, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: y } = this.context,
                        D = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(i.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, y && m.rootModal] }, !y && D, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, y && m.containerModal, s] }, y ? r.createElement(h.Z, { style: m.viewport }, D, o) : o), t ? r.createElement(n.Z, { style: [m.bottomBarModal, !y && !b && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(807896),
                n = o(202784),
                a = o(229333),
                s = o(414939),
                l = o(334346);
            const i = ({ accessibilityTitle: e, footer: t = n.createElement(s.Z, null), ...o }) => {
                const i = n.createElement(l.C, (0, r.Z)({}, o, { footer: t }));
                return e ? n.createElement(a.Z, { title: e }, i) : i;
            };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => i, Z: () => l });
            var r = o(807896),
                n = o(202784),
                a = o(524084),
                s = o(768572);
            const l = "stable_sort_index",
                i = n.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return n.createElement(s.ZP, { identifier: o }, n.createElement(a.Z, (0, r.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(807896),
                n = o(202784),
                a = o(771099);
            const s = (e) => (t) => n.createElement(a.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(202784),
                n = o(154003),
                a = o(111677),
                s = o.n(a),
                l = o(74514),
                i = o(405303),
                d = o(684511),
                c = o(860174),
                u = o(71620),
                h = o(668214),
                p = o(257166),
                m = o(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = s().bdba3e1a,
                D = s().c4da7d28,
                k = s().j87c21f4,
                g = s().iebc30ca,
                w = s().dc740eb2;
            class E extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": D, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: k }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: r } = this.props;
                    return o(r, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const _ = b(E);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(500002),
                a = o(668214),
                s = o(997174),
                l = o(118823);
            const i = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends r.Component {
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
                            location: { pathname: a, search: s },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const d = n || l;
                    ((d && n !== l) || (!d && o !== a) || r !== s || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(i(d));
        },
        524084: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(523561),
                a = o(195560);
            const s = (0, n.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, t) => r.createElement(a.Z, { hasError: e, onRetry: t }) });
        },
        684511: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(202784);
            const r = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => E, KV: () => b, LI: () => I, SC: () => w, Vt: () => k, ed: () => M, op: () => _ });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                s = o.n(a),
                l = o(616894),
                i = o(314948),
                d = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().ad00a739,
                b = s().a9fd20be,
                y = s().j546fb79,
                D = s().c9623eeb,
                k = s().e133be4e,
                g = s().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: f({ screenName: e }) }),
                _ = ({ blockAction: e, blockSubtext: t, source: o, testID: r, unblockAction: n, unblockSubtext: a, user: s }) => {
                    let l,
                        i = d.Z;
                    const u = I(s);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            i = () => {
                                s.blocking ? n(u) : e(u);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (i = () => {
                                    s.blocking ? n(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: i, testID: r, shortcutKey: l, Icon: v(s.blocking), text: C(s), subText: P({ user: s, blockSubtext: t, unblockSubtext: a }) };
                },
                v = (e) => (e ? i.default : l.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                C = (e) => (e.blocking ? D({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                I = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: y({ screenName: t }), label: k, text: g }) : E(e.screen_name);
                    var t;
                },
                M = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: i } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: i });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var r = o(111677),
                n = o.n(r),
                a = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => D, GS: () => l, N1: () => p, PY: () => h, X6: () => k, cm: () => i });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(391366),
                s = o(40904);
            const l = n().hb568af4,
                i = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? o : t, Icon: r ? a.default : s.default };
                },
                m = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                y = n().h129c3c3,
                D = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                k = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(224823);
            const s = n().b3036480,
                l = n().b3036480,
                i = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(615656),
                n = o(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        553093: (e, t, o) => {
            o.d(t, { Sz: () => r });
            const r = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const o = t.join("");
                    return n(o, 0).toString();
                },
                n = (e, t) => {
                    const o = "string" == typeof e ? e : String(e);
                    let r = t;
                    for (let e = 0; e < o.length; e++) {
                        (r = (r << 5) - r + o.charCodeAt(e)), (r |= 0);
                    }
                    return r;
                };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                s = o.n(a),
                l = o(912021),
                i = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: d.nextItem, universal: !0 }, { description: s().g0048656, keys: d.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: d.refresh, universal: !1 }, { description: s().ha8209bc, keys: d.goHome, universal: !1 }, { description: s().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: s().eb75875e, keys: d.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: s().fa98627a, keys: d.goProfile, universal: !1 }, { description: s().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: s().b0041756, keys: d.goLists, universal: !1 }, { description: s().d4986f86, keys: d.goMessages, universal: !1 }, { description: s().h5860a68, keys: d.goGrok, universal: !1 }, { description: s().bb081ea2, keys: d.goSettings, universal: !1 }, { description: s().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: d.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = i.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: s().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: d.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: d.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: d.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: d.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: d.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, l.Z)((e) => {
                    const t = c(e),
                        o = h(),
                        r = p(),
                        n = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, t, o) => {
            o.d(t, { M: () => s });
            var r = o(807896),
                n = o(202784),
                a = o(190286);
            const s = (e) => (t) => {
                const [o, s] = n.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => y });
            var r = o(370751),
                n = o(399896),
                a = o(663550),
                s = o(499627),
                l = o(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            c = `trend-${i}-${a}`;
                        if (h.has(a) && m(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (a, s, { api: i }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: y, request: i.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                y =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = i, t) {
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
            var r = o(161821),
                n = o(390387),
                a = o(836255),
                s = o(255117),
                l = o(166506),
                i = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(i.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            i = (0, r.Z)(a.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            h = (0, l.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const o = (0, l.f8)(e, t, h);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => c, f8: () => u, k9: () => d });
            var r = o(503768),
                n = o(750085),
                a = o(962741),
                s = o(466015),
                l = o(919022),
                i = o(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        725014: (e, t, o) => {
            o.r(t), o.d(t, { FollowerRequestsScreen: () => q, default: () => G });
            var r = o(202784),
                n = o(325686),
                a = o(457311),
                s = o(111677),
                l = o.n(s),
                i = o(290402),
                d = o(980407),
                c = o(965245),
                u = o(154003),
                h = o(392237);
            const p = l().da878dc0,
                m = l().ec2d8342,
                f = h.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                b = ({ onAccept: e, onDecline: t }) => r.createElement(n.Z, { style: f.root }, r.createElement(u.ZP, { "aria-label": m, onPress: t, size: "small", style: [f.followerRequestActionButton, f.declineButton], type: "destructiveOutlined" }, m), r.createElement(u.ZP, { "aria-label": p, onPress: e, size: "small", style: f.followerRequestActionButton, type: "brandOutlined" }, p));
            var y = o(615656);
            const D = l().j85d8d90,
                k = { [y.ZP.NoFollowRequest]: { toast: { text: D } }, showToast: !0 };
            var g = o(71620),
                w = o(668214),
                E = o(466036);
            const _ = (0, w.Z)().propsFromActions(() => ({ acceptPendingFollower: E.WC, createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: E.X }));
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(k));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(k));
                        });
                }
                render() {
                    return r.createElement(b, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const P = _(v);
            var C = o(240089),
                I = o(293115),
                M = o(409438),
                Z = o(553093);
            const A = (e) => (e && "user_cell" === e.type ? e.data : (0, Z.Sz)(e));
            var T = o(24949),
                S = o(312771);
            const L = (e) => E.sC(e).hydratedIds,
                x = (0, w.Z)()
                    .propsFromState(() => ({ followerRequestIds: L, fetchStatus: (0, T.P1)(E.sC, E.HP, E.dj, ({ hydratedIds: e, ids: t }, o, r) => (o === S.ZP.LOADED ? (t.length && e.length !== t.length ? r || S.ZP.LOADING : S.ZP.LOADED) : o)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: t }) => ({ fetchStatus: t, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: E.GE, fetchPendingFollowersUsersIfNeeded: E.IN, fetchNextPendingFollowersUsers: E.lm })),
                B = l().g6b54ff6,
                F = l().ec5fd35a,
                R = l().i83d4f14,
                O = { page: "follower_requests" },
                N = (e) => {
                    const { followRequestReceived: t, userId: o, viewerUserId: r } = e;
                    return !(!t || r === o);
                },
                U = (e) => (N(e) ? null : (0, C.ET)(e)),
                W = (e) => (N(e) ? r.createElement(P, { userId: e.userId }) : null);
            class q extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return r.createElement(c.Z, { accessibilityTitle: R, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: A, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => r.createElement(a.Z, { header: B, message: F })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: t, fetchPendingFollowersUsersIfNeeded: o } = this.props;
                            t().then(() => o(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? r.createElement(n.Z, null, r.createElement(C.ZP, { bottomControl: W, decoration: U, displayMode: M.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props;
                    return r.createElement(I.nO, { namespace: O }, r.createElement(d.Z, { history: t, title: R }, r.createElement(i.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const G = x(q);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e019dbda.bb8485ea.js.map

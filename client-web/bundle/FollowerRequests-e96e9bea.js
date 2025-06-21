"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e96e9bea"],
    {
        229333: (e, o, t) => {
            t.d(o, { Z: () => u });
            var n = t(202784),
                r = t(466999),
                a = t(325686),
                s = t(392237),
                i = t(111677);
            const l = t.n(i)().e5b0063d;
            let d = 0;
            class c extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: o } = this.props,
                        t = l({ title: o });
                    return n.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, o), n.createElement(a.Z, { "aria-label": t }, e));
                }
            }
            const u = c;
        },
        625661: (e, o, t) => {
            t.d(o, { ZP: () => h });
            var n = t(202784),
                r = t(614983),
                a = t.n(r),
                s = t(325686),
                i = t(370006),
                l = t(786998),
                d = t(929028),
                c = t(386802);
            function u(e, o, t) {
                return e || (!o && t ? "fixed" : void 0);
            }
            class h extends n.Component {
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
                    const { backButtonType: e, centerTitle: o, centeredLogo: t, fixed: r, hideBackButton: a, isFullWidth: s, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: y, title: D, titleDomId: v, titleIconCell: g, titleIconCellSize: k, withBackground: w, withWideContainer: C } = this.props,
                        { isModal: P } = this.context,
                        _ = a ? c : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, o, t) {
                            return e && !(o && t);
                        })(!!w, P, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: o, centeredLogo: t, isFullWidth: s, isLarge: d, leftControl: _, middleControl: h, position: u(p, P, r), rightControl: m, style: b, subtitle: y, title: D, titleDomId: v, titleIconCell: g, titleIconCellSize: k, withBackground: E, withWideContainer: C }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: o } = this.context,
                        t = d.Z.getBackgroundStyles();
                    return o ? n.createElement(s.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, o, t) => {
            t.d(o, { Z: () => l });
            var n = t(202784),
                r = t(325686),
                a = t(392237);
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
        290402: (e, o, t) => {
            t.d(o, { Z: () => m });
            var n = t(807896),
                r = t(202784),
                a = t(182056),
                s = t(879113),
                i = t(392237),
                l = t(111677),
                d = t.n(l),
                c = t(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...o }, t) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, n.Z)({}, o, { icon: i ? void 0 : r.createElement(c.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        333241: (e, o, t) => {
            t.d(o, { Z: () => k });
            t(136728);
            var n = t(202784),
                r = t(638236),
                a = t(811176),
                s = t(111677),
                i = t.n(s),
                l = t(415506),
                d = t(516951),
                c = t(376293),
                u = t(847607),
                h = t(417714),
                p = t(988823);
            const m = "block",
                f = "mute",
                b = "removeFollower",
                y = "report",
                D = "share",
                v = i().j7bb1a43,
                g = i().hef5960c,
                k = (0, p.M)((e) => {
                    const { onBlock: o, onClose: t, onMute: s, onRemoveFollower: i, onReportUser: p, onShare: k, onUnblock: w, onUnmute: C, user: P } = e,
                        _ = [],
                        E = (o, t) => {
                            const { confirm: n, onClose: r } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                n({ confirmButtonLabel: e, ...a })
                                    .then(t, d.Z)
                                    .finally(r);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        _.push({
                            Icon: r.Z,
                            onClick: () => {
                                t(), k();
                            },
                            testID: D,
                            text: g,
                        });
                    !P.blocking &&
                        _.push({
                            ...(0, u.N1)(
                                P,
                                () => {
                                    t(), s();
                                },
                                () => {
                                    t(), C();
                                },
                            ),
                            testID: f,
                        });
                    P.followed_by &&
                        _.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    E(e, i);
                                },
                                user: P,
                            }),
                            testID: b,
                        }),
                        _.push((0, c.op)({ blockAction: (e) => E(e, o), source: c.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => E(e, w), user: P })),
                        _.push({
                            Icon: l.default,
                            onClick: () => {
                                t(), p();
                            },
                            testID: y,
                            text: v({ screenName: P.screen_name }),
                        });
                    const M = _.map(({ Icon: e, onClick: o, testID: t, text: n }) => ({ text: n, onClick: o, Icon: e, testID: t }));
                    return n.createElement(a.Z, { items: M, onCloseRequested: t });
                });
        },
        980407: (e, o, t) => {
            t.d(o, { Z: () => f, w: () => p });
            var n = t(202784),
                r = t(325686),
                a = t(108362),
                s = t(386802),
                i = t(392237),
                l = t(652904),
                d = t(555079),
                c = t(625661),
                u = t(449067),
                h = t(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: o, backButtonType: t, backLocation: a, centerTitle: s, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: y, subtitle: D, title: v } = this.props,
                                { isModal: g } = this.context;
                            return n.createElement(r.Z, { style: g ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(c.ZP, { backButtonType: t || (g ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !g, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: y, style: [g && m.appBarModal, o], subtitle: D, title: v, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: o } = this.props,
                                { isModal: t } = this.context;
                            o && (t ? window.requestAnimationFrame(() => o(e)) : o(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: o, children: t, containerStyle: s, documentTitle: i, isFullWidth: d, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: y } = this.context,
                        D = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, y && m.rootModal] }, !y && D, n.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, y && m.containerModal, s] }, y ? n.createElement(h.Z, { style: m.viewport }, D, t) : t), o ? n.createElement(r.Z, { style: [m.bottomBarModal, !y && !b && m.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: d, isLarge: c }, o)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, o, t) => {
            t.d(o, { Z: () => l });
            var n = t(807896),
                r = t(202784),
                a = t(229333),
                s = t(414939),
                i = t(334346);
            const l = ({ accessibilityTitle: e, footer: o = r.createElement(s.Z, null), ...t }) => {
                const l = r.createElement(i.C, (0, n.Z)({}, t, { footer: o }));
                return e ? r.createElement(a.Z, { title: e }, l) : l;
            };
        },
        334346: (e, o, t) => {
            t.d(o, { C: () => l, Z: () => i });
            var n = t(807896),
                r = t(202784),
                a = t(524084),
                s = t(768572);
            const i = "stable_sort_index",
                l = r.forwardRef((e, o) => {
                    const t = e.cacheKey;
                    return r.createElement(s.ZP, { identifier: t }, r.createElement(a.Z, (0, n.Z)({ ref: o }, e)));
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => s });
            var n = t(807896),
                r = t(202784),
                a = t(771099);
            const s = (e) => (o) => r.createElement(a.$6, null, (t) => r.createElement(e, (0, n.Z)({}, o, { isInSidebar: t })));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => C });
            var n = t(202784),
                r = t(154003),
                a = t(111677),
                s = t.n(a),
                i = t(74514),
                l = t(405303),
                d = t(684511),
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
                y = s().bdba3e1a,
                D = s().c4da7d28,
                v = s().j87c21f4,
                g = s().iebc30ca,
                k = s().dc740eb2;
            class w extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": D, hoverLabel: { label: g }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: v }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(d.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: o, updateDeviceFollowing: t, userId: n } = this.props;
                    return t(n, { device: e }).catch(o(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: o } = this.props;
                    o.scribeAction(e);
                }
            }
            const C = b(w);
        },
        652904: (e, o, t) => {
            t.d(o, { Z: () => c });
            var n = t(202784),
                r = t(500002),
                a = t(668214),
                s = t(997174),
                i = t(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: o },
                            location: { pathname: t, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: s },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    o.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && o.pathname === t && ((this._isInBackground = !1), (l = !0));
                    const d = r || i;
                    ((d && r !== i) || (!d && t !== a) || n !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: o, updateLocation: t, updateTweetDetailNav: n } = e;
                    o.scribePageImpression(), t(o.contextualScribeNamespace, o.contextualScribeData), n(o.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(l(d));
        },
        524084: (e, o, t) => {
            t.d(o, { Z: () => s });
            var n = t(202784),
                r = t(523561),
                a = t(195560);
            const s = (0, r.Z)({ loader: () => t.e("loader.AbsolutePower").then(t.bind(t, 590136)), renderPlaceholder: (e, o) => n.createElement(a.Z, { hasError: e, onRetry: o }) });
        },
        684511: (e, o, t) => {
            t.d(o, { Z: () => n });
            t(202784);
            const n = (0, t(523561).Z)({
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
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        376293: (e, o, t) => {
            t.d(o, { $f: () => w, KV: () => b, LI: () => M, SC: () => k, Vt: () => v, ed: () => S, op: () => C });
            var n = t(202784),
                r = t(190286),
                a = t(111677),
                s = t.n(a),
                i = t(616894),
                l = t(314948),
                d = t(516951),
                c = t(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().ad00a739,
                b = s().a9fd20be,
                y = s().j546fb79,
                D = s().c9623eeb,
                v = s().e133be4e,
                g = s().f5f01af6,
                k = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                w = (e) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: f({ screenName: e }) }),
                C = ({ blockAction: e, blockSubtext: o, source: t, testID: n, unblockAction: r, unblockSubtext: a, user: s }) => {
                    let i,
                        l = d.Z;
                    const u = M(s);
                    switch (t) {
                        case k.PROFILE:
                        case k.LIST_DETAIL:
                        case k.FOLLOWERS_LIST:
                            l = () => {
                                s.blocking ? r(u) : e(u);
                            };
                            break;
                        case k.TWEET:
                        case k.TWEET_CARET:
                        case k.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (l = () => {
                                    s.blocking ? r(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: n, shortcutKey: i, Icon: P(s.blocking), text: E(s), subText: _({ user: s, blockSubtext: o, unblockSubtext: a }) };
                },
                P = (e) => (e ? l.default : i.default),
                _ = ({ blockSubtext: e, unblockSubtext: o, user: t }) => (!t.blocking && e ? e(t.screen_name) : t.blocking ? o : void 0),
                E = (e) => (e.blocking ? D({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                M = (e) => {
                    return e.blocking ? ((o = e.screen_name), { confirmButtonType: "primary", headline: y({ screenName: o }), label: v, text: g }) : w(e.screen_name);
                    var o;
                },
                S = ({ confirmation: e, handleConfirm: o, onClose: t }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: l } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: t, onConfirm: o, text: l });
                };
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => r });
            var n = t(111677);
            const r = t.n(n)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => s });
            var n = t(111677),
                r = t.n(n),
                a = t(437358);
            const s = (e, o) => {
                const { id_str: t, screen_name: n } = e,
                    s = (0, r().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => D, GS: () => i, N1: () => p, PY: () => h, X6: () => v, cm: () => l });
            t(202784);
            var n = t(111677),
                r = t.n(n),
                a = t(391366),
                s = t(40904);
            const i = r().hb568af4,
                l = r().bb1cbeb6,
                d = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, o, t) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? h(r) : u(r), onClick: n ? t : o, Icon: n ? a.default : s.default };
                },
                m = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                y = r().h129c3c3,
                D = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                v = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var n = t(111677),
                r = t.n(n),
                a = t(224823);
            const s = r().b3036480,
                i = r().b3036480,
                l = r().e68b09b4,
                d = r().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, o, t) => {
            t.d(o, { d: () => r });
            var n = t(111677);
            const r = { defaultToast: { text: t.n(n)().b6878b0a }, showToast: !0 };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => r });
            var n = t(111677);
            const r = { defaultToast: { text: t.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, o, t) => {
            t.d(o, { D: () => r });
            var n = t(111677);
            const r = { defaultToast: { text: t.n(n)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => a });
            var n = t(615656),
                r = t(51525);
            const a = { [n.ZP.FollowError]: { customAction: r.w1 } };
        },
        553093: (e, o, t) => {
            t.d(o, { Sz: () => n });
            const n = (e) => {
                    const o = (JSON.stringify(e) || "").split("");
                    o.sort();
                    const t = o.join("");
                    return r(t, 0).toString();
                },
                r = (e, o) => {
                    const t = "string" == typeof e ? e : String(e);
                    let n = o;
                    for (let e = 0; e < t.length; e++) {
                        (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
                    }
                    return n;
                };
        },
        163390: (e, o, t) => {
            t.d(o, { OX: () => h, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var n = t(251067),
                r = t(522171),
                a = t(111677),
                s = t.n(a),
                i = t(912021),
                l = t(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const o = e ? [{ description: s().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: d.nextItem, universal: !0 }, { description: s().g0048656, keys: d.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: d.refresh, universal: !1 }, { description: s().ha8209bc, keys: d.goHome, universal: !1 }, { description: s().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: s().eb75875e, keys: d.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: s().fa98627a, keys: d.goProfile, universal: !1 }, { description: s().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: s().b0041756, keys: d.goLists, universal: !1 }, { description: s().d4986f86, keys: d.goMessages, universal: !1 }, { description: s().h5860a68, keys: d.goGrok, universal: !1 }, { description: s().bb081ea2, keys: d.goSettings, universal: !1 }, { description: s().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...o, { description: s().eee2ed92, keys: d.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
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
                p = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, i.Z)((e) => {
                    const o = c(e),
                        t = h(),
                        n = p(),
                        r = {};
                    return (
                        [...t, ...n, ...o].forEach(({ description: e, keys: o }) => {
                            Array.isArray(o)
                                ? o.forEach((o) => {
                                      r[o] = e;
                                  })
                                : (r[o] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, o) => {
                    if (o) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, o, t) => {
            t.d(o, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => s });
            var n = t(807896),
                r = t(202784),
                a = t(190286);
            const s = (e) => (o) => {
                const [t, s] = r.useState(null),
                    i = (e) =>
                        new Promise((o, t) => {
                            s({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: i } = t;
                    return r.createElement(
                        a.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                i(), s(null);
                            },
                        }),
                    );
                }
                return r.createElement(e, (0, n.Z)({}, o, { confirm: i }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => b, dS: () => f, iY: () => y });
            var n = t(370751),
                r = t(399896),
                a = t(663550),
                s = t(499627),
                i = t(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, n.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (h.has(a) && m(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, i._O)(o, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: o, itemType: t, params: n }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: h } = n,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: y, request: l.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, o) => {
                            if (!o && u.has(c)) return [p(f)];
                        });
                    },
                y =
                    (e) =>
                    (o, t, { api: n }) =>
                        (0, i._O)(o, { params: e, request: n.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = l, o) {
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
            t.d(o, { r: () => d });
            t(136728);
            var n = t(161821),
                r = t(390387),
                a = t(836255),
                s = t(255117),
                i = t(166506),
                l = t(919022);
            const d =
                (e, o) =>
                (t, d, { api: c, featureSwitches: u }) =>
                    t(l.ZP.mute(e, o)).then(() => {
                        const o = d(),
                            l = (0, n.Z)(a.Z.selectAll(o)).reduce((t, n) => {
                                if (null != n)
                                    if (n.user === e) t[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const r = a.Z.select(o, n.retweeted_status);
                                        r?.user === e && (t[n.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, r._h)(d()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
                            h = (0, i.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const t = (0, i.f8)(e, o, h);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => d });
            var n = t(503768),
                r = t(750085),
                a = t(962741),
                s = t(466015),
                i = t(919022),
                l = t(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: r.Z }),
                c = (e) => (o, t) => {
                    const n = t();
                    o(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    t = i.ZP.select(n, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            n = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(n);
                    }
                };
        },
        725014: (e, o, t) => {
            t.r(o), t.d(o, { FollowerRequestsScreen: () => G, default: () => W });
            var n = t(202784),
                r = t(325686),
                a = t(457311),
                s = t(111677),
                i = t.n(s),
                l = t(290402),
                d = t(980407),
                c = t(965245),
                u = t(154003),
                h = t(392237);
            const p = i().da878dc0,
                m = i().ec2d8342,
                f = h.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                b = ({ onAccept: e, onDecline: o }) => n.createElement(r.Z, { style: f.root }, n.createElement(u.ZP, { "aria-label": m, onPress: o, size: "small", style: [f.followerRequestActionButton, f.declineButton], type: "destructiveOutlined" }, m), n.createElement(u.ZP, { "aria-label": p, onPress: e, size: "small", style: f.followerRequestActionButton, type: "brandOutlined" }, p));
            var y = t(615656);
            const D = i().j85d8d90,
                v = { [y.ZP.NoFollowRequest]: { toast: { text: D } }, showToast: !0 };
            var g = t(71620),
                k = t(668214),
                w = t(466036);
            const C = (0, k.Z)().propsFromActions(() => ({ acceptPendingFollower: w.WC, createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: w.X }));
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: o, userId: t } = this.props;
                            e({ id_str: t }).catch(o(v));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: o, userId: t } = this.props;
                            o({ id_str: t }).catch(e(v));
                        });
                }
                render() {
                    return n.createElement(b, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const _ = C(P);
            var E = t(240089),
                M = t(293115),
                S = t(409438),
                T = t(553093);
            const I = (e) => (e && "user_cell" === e.type ? e.data : (0, T.Sz)(e));
            var Z = t(24949),
                A = t(312771);
            const R = (e) => w.sC(e).hydratedIds,
                x = (0, k.Z)()
                    .propsFromState(() => ({ followerRequestIds: R, fetchStatus: (0, Z.P1)(w.sC, w.HP, w.dj, ({ hydratedIds: e, ids: o }, t, n) => (t === A.ZP.LOADED ? (o.length && e.length !== o.length ? n || A.ZP.LOADING : A.ZP.LOADED) : t)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: o }) => ({ fetchStatus: o, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: w.GE, fetchPendingFollowersUsersIfNeeded: w.IN, fetchNextPendingFollowersUsers: w.lm })),
                B = i().g6b54ff6,
                F = i().ec5fd35a,
                L = i().i83d4f14,
                O = { page: "follower_requests" },
                N = (e) => {
                    const { followRequestReceived: o, userId: t, viewerUserId: n } = e;
                    return !(!o || n === t);
                },
                U = (e) => (N(e) ? null : (0, E.ET)(e)),
                H = (e) => (N(e) ? n.createElement(_, { userId: e.userId }) : null);
            class G extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return n.createElement(c.Z, { accessibilityTitle: L, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: I, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => n.createElement(a.Z, { header: B, message: F })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: o, fetchPendingFollowersUsersIfNeeded: t } = this.props;
                            o().then(() => t(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? n.createElement(r.Z, null, n.createElement(E.ZP, { bottomControl: H, decoration: U, displayMode: S.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: o } = this.props;
                    return n.createElement(M.nO, { namespace: O }, n.createElement(d.Z, { history: o, title: L }, n.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const W = x(G);
        },
        151624: (e, o, t) => {
            t.d(o, { Z: () => n });
            const n = t(454479).Z;
        },
        454479: (e, o, t) => {
            t.d(o, { Z: () => m });
            var n = t(18198),
                r = t(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                s = r.Z.currentCentroidYOfTouchesChangedAfter,
                i = r.Z.previousCentroidXOfTouchesChangedAfter,
                l = r.Z.previousCentroidYOfTouchesChangedAfter,
                d = r.Z.currentCentroidX,
                c = r.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, o) {
                        (e.numberActiveTouches = o.numberActiveTouches), (e.moveX = a(o, e._accountsForMovesUpTo)), (e.moveY = s(o, e._accountsForMovesUpTo));
                        var t = e._accountsForMovesUpTo,
                            n = i(o, t),
                            r = a(o, t),
                            d = l(o, t),
                            c = s(o, t),
                            u = e.dx + (r - n),
                            h = e.dy + (c - d),
                            p = o.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / p), (e.vy = (h - e.dy) / p), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = o.mostRecentTimeStamp);
                    },
                    create(e) {
                        var o = { handle: null, shouldCancelClick: !1, timeout: null },
                            t = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (o) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(o, t),
                                onMoveShouldSetResponder: (o) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(o, t),
                                onStartShouldSetResponderCapture: (o) => (1 === o.nativeEvent.touches.length && u._initializeGestureState(t), (t.numberActiveTouches = o.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(o, t)),
                                onMoveShouldSetResponderCapture(o) {
                                    var n = o.touchHistory;
                                    return t._accountsForMovesUpTo !== n.mostRecentTimeStamp && (u._updateGestureStateOnMove(t, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(o, t));
                                },
                                onResponderGrant: (r) => (
                                    o.handle || (o.handle = n.Z.createInteractionHandle()),
                                    o.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(o),
                                    (o.shouldCancelClick = !0),
                                    (t.x0 = d(r.touchHistory)),
                                    (t.y0 = c(r.touchHistory)),
                                    (t.dx = 0),
                                    (t.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, t),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, t)
                                ),
                                onResponderReject(n) {
                                    h(o, e.onPanResponderReject, n, t);
                                },
                                onResponderRelease(n) {
                                    h(o, e.onPanResponderRelease, n, t), p(o), u._initializeGestureState(t);
                                },
                                onResponderStart(o) {
                                    var n = o.touchHistory;
                                    (t.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(o, t);
                                },
                                onResponderMove(o) {
                                    var n = o.touchHistory;
                                    t._accountsForMovesUpTo !== n.mostRecentTimeStamp && (u._updateGestureStateOnMove(t, n), e.onPanResponderMove && e.onPanResponderMove(o, t));
                                },
                                onResponderEnd(n) {
                                    var r = n.touchHistory;
                                    (t.numberActiveTouches = r.numberActiveTouches), h(o, e.onPanResponderEnd, n, t);
                                },
                                onResponderTerminate(n) {
                                    h(o, e.onPanResponderTerminate, n, t), p(o), u._initializeGestureState(t);
                                },
                                onResponderTerminationRequest: (o) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(o, t),
                                onClickCapture: (e) => {
                                    !0 === o.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => o.handle,
                        };
                    },
                };
            function h(e, o, t, r) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), o && o(t, r);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const m = u;
        },
        661841: (e, o, t) => {
            t.d(o, { Z: () => r });
            var n = {
                centroidDimension: function (e, o, t, r) {
                    var a = e.touchBank,
                        s = 0,
                        i = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > o && ((s += r && t ? l.currentPageX : r && !t ? l.currentPageY : !r && t ? l.previousPageX : l.previousPageY), (i = 1));
                    else
                        for (var d = 0; d < a.length; d++) {
                            var c = a[d];
                            if (null != c && c.touchActive && c.currentTimeStamp >= o) {
                                (s += r && t ? c.currentPageX : r && !t ? c.currentPageY : !r && t ? c.previousPageX : c.previousPageY), i++;
                            }
                        }
                    return i > 0 ? s / i : n.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, o) {
                    return n.centroidDimension(e, o, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, o) {
                    return n.centroidDimension(e, o, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, o) {
                    return n.centroidDimension(e, o, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, o) {
                    return n.centroidDimension(e, o, !1, !1);
                },
                currentCentroidX: function (e) {
                    return n.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return n.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e96e9bea.94e9196a.js.map

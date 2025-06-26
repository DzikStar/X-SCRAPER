"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-e96e9bea"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                n = o(614983),
                a = o.n(n),
                s = o(325686),
                i = o(370006),
                d = o(786998),
                l = o(929028),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: a, isFullWidth: s, isLarge: l, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: D, title: v, titleDomId: k, titleIconCell: y, titleIconCellSize: g, withBackground: C, withWideContainer: _ } = this.props,
                        { isModal: P } = this.context,
                        M = a ? c : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        I = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!C, P, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(d.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: l, leftControl: M, middleControl: h, position: u(p, P, n), rightControl: m, style: b, subtitle: D, title: v, titleDomId: k, titleIconCell: y, titleIconCellSize: g, withBackground: I, withWideContainer: _ }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? r.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                s = o(879113),
                i = o(392237),
                d = o(111677),
                l = o.n(d),
                c = o(968478);
            const u = l().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const i = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, t, { icon: i ? void 0 : n.createElement(c.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => g });
            o(136728);
            var r = o(202784),
                n = o(638236),
                a = o(811176),
                s = o(111677),
                i = o.n(s),
                d = o(415506),
                l = o(516951),
                c = o(376293),
                u = o(847607),
                h = o(417714),
                p = o(988823);
            const m = "block",
                f = "mute",
                b = "removeFollower",
                D = "report",
                v = "share",
                k = i().j7bb1a43,
                y = i().g00b4c55,
                g = (0, p.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: s, onRemoveFollower: i, onReportUser: p, onShare: g, onUnblock: C, onUnmute: _, user: P } = e,
                        M = [],
                        I = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(o, l.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !P.protected &&
                        !P.blocking &&
                        !P.blocked_by &&
                        M.push({
                            Icon: n.Z,
                            onClick: () => {
                                o(), g();
                            },
                            testID: v,
                            text: y({ screenName: P.screen_name }),
                        });
                    !P.blocking &&
                        M.push({
                            ...(0, u.N1)(
                                P,
                                () => {
                                    o(), s();
                                },
                                () => {
                                    o(), _();
                                },
                            ),
                            testID: f,
                        });
                    P.followed_by &&
                        M.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    I(e, i);
                                },
                                user: P,
                            }),
                            testID: b,
                        }),
                        M.push((0, c.op)({ blockAction: (e) => I(e, t), source: c.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => I(e, C), user: P })),
                        M.push({
                            Icon: d.default,
                            onClick: () => {
                                o(), p();
                            },
                            testID: D,
                            text: k({ screenName: P.screen_name }),
                        });
                    const w = M.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(a.Z, { items: w, onCloseRequested: o });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => p });
            var r = o(202784),
                n = o(325686),
                a = o(108362),
                s = o(386802),
                i = o(392237),
                d = o(652904),
                l = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: s, hideBackButton: i, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: D, subtitle: v, title: k } = this.props,
                                { isModal: y } = this.context;
                            return r.createElement(n.Z, { style: y ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !y, hideBackButton: i, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: D, style: [y && m.appBarModal, t], subtitle: v, title: k, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: i, isFullWidth: l, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: D } = this.context,
                        v = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(d.Z, null, r.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, D && m.rootModal] }, !D && v, r.createElement(a.Z, { isFullWidth: l, isLarge: c, style: [m.container, D && m.containerModal, s] }, D ? r.createElement(h.Z, { style: m.viewport }, v, o) : o), t ? r.createElement(n.Z, { style: [m.bottomBarModal, !D && !b && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
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
                i = o(74514),
                d = o(405303),
                l = o(684511),
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
                D = s().bdba3e1a,
                v = s().c4da7d28,
                k = s().j87c21f4,
                y = s().iebc30ca,
                g = s().dc740eb2;
            class C extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": v, hoverLabel: { label: y }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": D, hoverLabel: { label: k }, icon: r.createElement(d.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(l.Z, { fullScreen: !0, message: g }) : null, this._renderButton());
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
            const _ = b(C);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(500002),
                a = o(668214),
                s = o(997174),
                i = o(118823);
            const d = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends r.Component {
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
                            locationKey: i,
                        } = e;
                    let d = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (d = !0));
                    const l = n || i;
                    ((l && n !== i) || (!l && o !== a) || r !== s || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, n.ZP)(d(l));
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => w });
            var r = o(807896),
                n = o(202784),
                a = o(476984),
                s = o.n(a),
                i = o(111677),
                d = o.n(i),
                l = o(615656),
                c = o(290402),
                u = o(325686),
                h = o(240089),
                p = o(663550),
                m = o(409438);
            const f = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, r) => (t ? t(o) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: p.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var b = o(312771),
                D = o(71620),
                v = o(973572),
                k = o(668214),
                y = o(919022);
            const g = (e, t) => t.userIds,
                C = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = y.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                _ = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = y.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                P = (0, k.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, v.Z)(C, (e) => e),
                        fetchStatus: (0, v.Z)(C, _, g, (e, t, o) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const a = o[n];
                                if (-1 === e.indexOf(a)) {
                                    const e = t[a] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: y.ZP.fetchManyIfNeeded })),
                M = d().f5b426c2;
            class I extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: a, filterPredicate: s, userIds: i, ...d } = this.props;
                            return n.createElement(f, (0, r.Z)({}, d, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    s()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": M, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: r } = this.props;
                    o(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [l.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [l.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const w = P(I);
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
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
            o.d(t, { $f: () => C, KV: () => b, LI: () => w, SC: () => g, Vt: () => k, ed: () => S, op: () => _ });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                s = o.n(a),
                i = o(616894),
                d = o(314948),
                l = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().ad00a739,
                b = s().a9fd20be,
                D = s().j546fb79,
                v = s().c9623eeb,
                k = s().e133be4e,
                y = s().f5f01af6,
                g = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: f({ screenName: e }) }),
                _ = ({ blockAction: e, blockSubtext: t, source: o, testID: r, unblockAction: n, unblockSubtext: a, user: s }) => {
                    let i,
                        d = l.Z;
                    const u = w(s);
                    switch (o) {
                        case g.PROFILE:
                        case g.LIST_DETAIL:
                        case g.FOLLOWERS_LIST:
                            d = () => {
                                s.blocking ? n(u) : e(u);
                            };
                            break;
                        case g.TWEET:
                        case g.TWEET_CARET:
                        case g.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (d = () => {
                                    s.blocking ? n(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: d, testID: r, shortcutKey: i, Icon: P(s.blocking), text: I(s), subText: M({ user: s, blockSubtext: t, unblockSubtext: a }) };
                },
                P = (e) => (e ? d.default : i.default),
                M = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                I = (e) => (e.blocking ? v({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                w = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: D({ screenName: t }), label: k, text: y }) : C(e.screen_name);
                    var t;
                },
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: d } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: d });
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
                const { id_str: o } = e,
                    r = n().a599bbfa;
                return { Icon: a.default, text: r, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { FK: () => m, GS: () => i, N1: () => l, X6: () => f, cm: () => d });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(391366),
                s = o(40904);
            const i = n().hb568af4,
                d = n().bb1cbeb6,
                l =
                    (n().h2f62206,
                    (e, t, o) => {
                        const { muting: r } = e;
                        return { text: r ? d : i, onClick: r ? o : t, Icon: r ? a.default : s.default };
                    }),
                c = n().h59f52ee,
                u = n().eea0cbee,
                h = n().i29533b3,
                p = n().h129c3c3,
                m = (e) => (e ? ((e) => h({ screenName: e }))(e) : c),
                f = (e) => (e ? ((e) => p({ screenName: e }))(e) : u);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                a = o(224823);
            const s = n().b3036480,
                i = n().b3036480,
                d = n().e68b09b4,
                l = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: a.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: d, text: l({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => a });
            var r = o(516951),
                n = o(615656);
            const a = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
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
        973572: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(476984),
                n = o.n(r),
                a = o(24949);
            const s = (0, a.wN)(a.PW, n());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => c, PN: () => p, uq: () => l, wR: () => f });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                s = o.n(a),
                i = o(912021),
                d = o(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: s().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: l.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: l.search, universal: !1 },
                    { description: s().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: l.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: l.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: l.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: s().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: s().b881560e, keys: l.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                m = (0, i.Z)((e) => {
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
                    i = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = o;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), s(null);
                            },
                            onConfirm: () => {
                                i(), s(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => D });
            var r = o(370751),
                n = o(399896),
                a = o(663550),
                s = o(499627),
                i = o(917799);
            const d = {},
                l = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${a}`;
                        if (h.has(a) && m(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: a, impression_id: s };
                        return (0, i._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (a, s, { api: d }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: D, request: d.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                D =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: l, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
                promotedContent: function (e = d, t) {
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
            o.d(t, { r: () => l });
            o(136728);
            var r = o(161821),
                n = o(390387),
                a = o(836255),
                s = o(255117),
                i = o(166506),
                d = o(919022);
            const l =
                (e, t) =>
                (o, l, { api: c, featureSwitches: u }) =>
                    o(d.ZP.mute(e, t)).then(() => {
                        const t = l(),
                            d = (0, r.Z)(a.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(l()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            h = (0, i.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const o = (0, i.f8)(e, t, h);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => c, f8: () => u, k9: () => l });
            var r = o(503768),
                n = o(750085),
                a = o(962741),
                s = o(466015),
                i = o(919022),
                d = o(218951);
            const l = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    o = i.ZP.select(r, t);
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
        747644: (e, t, o) => {
            o.r(t), o.d(t, { ConversationParticipantsScreen: () => I, default: () => w });
            var r = o(202784),
                n = o(111677),
                a = o.n(n),
                s = o(290402),
                i = o(980407),
                d = o(240089),
                l = o(62857),
                c = o(702001),
                u = o(663550),
                h = o(409438),
                p = o(24949),
                m = o(450681),
                f = o(166852),
                b = o(71620),
                D = o(668214),
                v = o(836255);
            const k = (e, t) => t.match.params.screenName,
                y = (e, t) => t.match.params.statusId,
                g = (e, t) => v.Z.selectHydrated(e, t.match.params.statusId),
                C = (e, t) => v.Z.selectFetchStatus(e, t.match.params.statusId),
                _ = (0, D.Z)()
                    .propsFromState(() => ({
                        fetchStatus: C,
                        screenName: k,
                        statusId: y,
                        participantIds: (0, p.P1)(g, (e) => {
                            if (!e) return [];
                            const { user_mentions: t = [] } = e.entities || {},
                                o = [{ id_str: e.in_reply_to_user_id_str }, ...t.filter((t) => t.indices[0] < e.display_text_range[0])];
                            return (0, m.Z)((0, f.Z)(o.map((e) => e.id_str)));
                        }),
                        unmentionedUserIds: (0, p.P1)(g, (e) => e?.unmentioned_user_ids ?? []),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("CONVERSATION_PARTICIPANTS_SCREEN"), fetchTweetIfNeeded: v.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "conversation_participants" }),
                P = a().cdd4aafe,
                M = a().aac3fad2;
            class I extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserCell = (e) => {
                            const { unmentionedUserIds: t } = this.props,
                                o = t.includes(e);
                            return r.createElement(d.ZP, { cellClickable: !o, decoration: o ? null : d.ET, displayMode: h.Z.UserDetailed, isFakeButtonRoleWithListItem: !o, key: e, promotedItemType: u.bj.USER, userId: e, withFollowsYou: !0, withLink: !o });
                        }),
                        (this._renderList = () => r.createElement(l.Z, { renderUserCell: this._renderUserCell, userIds: this.props.participantIds })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: t, statusId: o } = this.props;
                            t(o).catch(e(c.c));
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: t, screenName: o, statusId: n } = this.props;
                    return r.createElement(i.Z, { backLocation: `/${o.toLowerCase()}/status/${n}`, history: t, title: M }, r.createElement(s.Z, { "aria-label": P, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderList }));
                }
            }
            const w = _(I);
        },
        151624: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(454479).Z;
        },
        454479: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(18198),
                n = o(661841),
                a = n.Z.currentCentroidXOfTouchesChangedAfter,
                s = n.Z.currentCentroidYOfTouchesChangedAfter,
                i = n.Z.previousCentroidXOfTouchesChangedAfter,
                d = n.Z.previousCentroidYOfTouchesChangedAfter,
                l = n.Z.currentCentroidX,
                c = n.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = s(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            r = i(t, o),
                            n = a(t, o),
                            l = d(t, o),
                            c = s(t, o),
                            u = e.dx + (n - r),
                            h = e.dy + (c - l),
                            p = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / p), (e.vy = (h - e.dy) / p), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            o = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, o),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, o),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && u._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var r = t.touchHistory;
                                    return o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(o, r), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (n) => (
                                    t.handle || (t.handle = r.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = l(n.touchHistory)),
                                    (o.y0 = c(n.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(n, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(n, o)
                                ),
                                onResponderReject(r) {
                                    h(t, e.onPanResponderReject, r, o);
                                },
                                onResponderRelease(r) {
                                    h(t, e.onPanResponderRelease, r, o), p(t), u._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var r = t.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var r = t.touchHistory;
                                    o._accountsForMovesUpTo !== r.mostRecentTimeStamp && (u._updateGestureStateOnMove(o, r), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(r) {
                                    var n = r.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), h(t, e.onPanResponderEnd, r, o);
                                },
                                onResponderTerminate(r) {
                                    h(t, e.onPanResponderTerminate, r, o), p(t), u._initializeGestureState(o);
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
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const m = u;
        },
        661841: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = {
                centroidDimension: function (e, t, o, n) {
                    var a = e.touchBank,
                        s = 0,
                        i = 0,
                        d = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== d) d.touchActive && d.currentTimeStamp > t && ((s += n && o ? d.currentPageX : n && !o ? d.currentPageY : !n && o ? d.previousPageX : d.previousPageY), (i = 1));
                    else
                        for (var l = 0; l < a.length; l++) {
                            var c = a[l];
                            if (null != c && c.touchActive && c.currentTimeStamp >= t) {
                                (s += n && o ? c.currentPageX : n && !o ? c.currentPageY : !n && o ? c.previousPageX : c.previousPageY), i++;
                            }
                        }
                    return i > 0 ? s / i : r.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return r.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return r.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return r.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const n = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-e96e9bea.086ff8da.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-e019dbda"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                n = o(614983),
                s = o.n(n),
                a = o(325686),
                i = o(370006),
                l = o(786998),
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
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: s, isFullWidth: a, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: k, title: y, titleDomId: D, titleIconCell: g, titleIconCellSize: _, withBackground: w, withWideContainer: v } = this.props,
                        { isModal: I } = this.context,
                        E = s ? c : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, I, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: d, leftControl: E, middleControl: h, position: u(p, I, n), rightControl: m, style: b, subtitle: k, title: y, titleDomId: D, titleIconCell: g, titleIconCellSize: _, withBackground: C, withWideContainer: v }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                n = o(202784),
                s = o(182056),
                a = o(879113),
                i = o(392237),
                l = o(111677),
                d = o.n(l),
                c = o(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const i = s.Z.isOnline();
                    return n.createElement(a.Z, (0, r.Z)({}, t, { icon: i ? void 0 : n.createElement(c.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var r = o(202784),
                n = o(638236),
                s = o(811176),
                a = o(111677),
                i = o.n(a),
                l = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                h = o(847607),
                p = o(417714),
                m = o(988823);
            const f = "block",
                b = "mute",
                k = "removeFollower",
                y = "report",
                D = "share",
                g = i().j7bb1a43,
                _ = i().hef5960c,
                w = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: a, onMute: i, onRemoveFollower: m, onReportUser: w, onShare: v, onUnblock: I, onUnmute: E, user: C } = e,
                        P = [],
                        Z = (t, o) => {
                            const { confirm: r, onClose: n } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(o, d.Z)
                                    .finally(n);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !C.protected &&
                        !C.blocking &&
                        !C.blocked_by &&
                        P.push({
                            Icon: n.Z,
                            onClick: () => {
                                a(), v();
                            },
                            testID: D,
                            text: _,
                        });
                    !C.blocking &&
                        P.push({
                            ...(0, h.N1)(
                                C,
                                () => {
                                    a(), i();
                                },
                                () => {
                                    a(), E();
                                },
                            ),
                            testID: b,
                        });
                    C.followed_by &&
                        P.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    Z(e, m);
                                },
                                user: C,
                            }),
                            testID: k,
                        }),
                        P.push((0, u.op)({ blockAction: (e) => Z(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => Z(e, I), user: C })),
                        P.push({
                            Icon: l.default,
                            onClick: () => {
                                a(), w();
                            },
                            testID: y,
                            text: g({ screenName: C.screen_name }),
                        });
                    const M = P.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(s.Z, { items: M, onCloseRequested: a });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => p });
            var r = o(202784),
                n = o(325686),
                s = o(108362),
                a = o(386802),
                i = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: s, centerTitle: a, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: k, subtitle: y, title: D } = this.props,
                                { isModal: g } = this.context;
                            return r.createElement(n.Z, { style: g ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (g ? "close" : "back"), backLocation: s, centerTitle: a, fixed: !g, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: k, style: [g && m.appBarModal, t], subtitle: y, title: D, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: i, isFullWidth: d, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: k } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, k && m.rootModal] }, !k && y, r.createElement(s.Z, { isFullWidth: d, isLarge: c, style: [m.container, k && m.containerModal, a] }, k ? r.createElement(h.Z, { style: m.viewport }, y, o) : o), t ? r.createElement(n.Z, { style: [m.bottomBarModal, !k && !b && m.bottomBarMobile] }, r.createElement(s.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(807896),
                n = o(202784),
                s = o(771099);
            const a = (e) => (t) => n.createElement(s.$6, null, (o) => n.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => v });
            var r = o(202784),
                n = o(154003),
                s = o(111677),
                a = o.n(s),
                i = o(74514),
                l = o(405303),
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
                k = a().bdba3e1a,
                y = a().c4da7d28,
                D = a().j87c21f4,
                g = a().iebc30ca,
                _ = a().dc740eb2;
            class w extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": k, hoverLabel: { label: D }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
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
            const v = b(w);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(500002),
                s = o(668214),
                a = o(997174),
                i = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: s, search: a },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = n || i;
                    ((d && n !== i) || (!d && o !== s) || r !== a || l) && this._performPageUpdates(this.props);
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
            const c = (0, n.ZP)(l(d));
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => P });
            var r = o(807896),
                n = o(202784),
                s = o(476984),
                a = o.n(s),
                i = o(111677),
                l = o.n(i),
                d = o(615656),
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
                k = o(71620),
                y = o(973572),
                D = o(668214),
                g = o(919022);
            const _ = (e, t) => t.userIds,
                w = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = g.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                v = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = g.ZP.selectFetchStatus(e, o);
                        return r && (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                I = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, y.Z)(w, (e) => e),
                        fetchStatus: (0, y.Z)(w, v, _, (e, t, o) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < o.length; n++) {
                                const s = o[n];
                                if (-1 === e.indexOf(s)) {
                                    const e = t[s] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: g.ZP.fetchManyIfNeeded })),
                E = l().f5b426c2;
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: s, filterPredicate: a, userIds: i, ...l } = this.props;
                            return n.createElement(f, (0, r.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    a()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": E, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: r } = this.props;
                    o(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [d.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [d.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const P = I(C);
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
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
            o.d(t, { $f: () => I, KV: () => k, LI: () => M, SC: () => v, Vt: () => g, ed: () => S, op: () => E });
            var r = o(202784),
                n = o(190286),
                s = o(111677),
                a = o.n(s),
                i = o(616894),
                l = o(314948),
                d = o(516951),
                c = o(163390);
            const u = a().cfd2f35e,
                h = a().f9e45cfb,
                p = a().fcd4d489,
                m = a().a6450e84,
                f = a().g353ad73,
                b = a().ad00a739,
                k = a().a9fd20be,
                y = a().j546fb79,
                D = a().c9623eeb,
                g = a().e133be4e,
                _ = a().he43bca4,
                w = a().f5f01af6,
                v = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                I = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: s, unblockSubtext: a, user: i }) => {
                    let l,
                        u = d.Z;
                    const h = M(i, o);
                    switch (r) {
                        case v.PROFILE:
                        case v.LIST_DETAIL:
                        case v.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? s(h) : e(h);
                            };
                            break;
                        case v.TWEET:
                        case v.TWEET_CARET:
                        case v.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (u = () => {
                                    i.blocking ? s(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: l, Icon: C(i.blocking), text: Z(i), subText: P({ user: i, blockSubtext: t, unblockSubtext: a }) };
                },
                C = (e) => (e ? l.default : i.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                Z = (e) => (e.blocking ? D({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                M = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: g, text: t ? w : _ }))(e.screen_name, t) : I(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: s, headline: a, label: i, text: l } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: s, headline: a, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => a });
            var r = o(111677),
                n = o.n(r),
                s = o(437358);
            const a = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    a = (0, n().d78131b9)({ screenName: r });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => y, GS: () => i, N1: () => p, PY: () => h, X6: () => D, cm: () => l });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                s = o(391366),
                a = o(40904);
            const i = n().hb568af4,
                l = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, t, o) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? o : t, Icon: r ? s.default : a.default };
                },
                m = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                k = n().h129c3c3,
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                D = (e) => (e ? ((e) => k({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var r = o(111677),
                n = o.n(r),
                s = o(224823);
            const a = n().b3036480,
                i = n().b3036480,
                l = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: s.default, text: a, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: l, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => s });
            var r = o(516951),
                n = o(615656);
            const s = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
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
            o.d(t, { Z: () => s });
            var r = o(615656),
                n = o(51525);
            const s = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(476984),
                n = o.n(r),
                s = o(24949);
            const a = (0, s.wN)(s.PW, n());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var r = o(251067),
                n = o(522171),
                s = o(111677),
                a = o.n(s),
                i = o(912021),
                l = o(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, i.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: d.nextItem, universal: !0 }, { description: a().g0048656, keys: d.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: d.refresh, universal: !1 }, { description: a().ha8209bc, keys: d.goHome, universal: !1 }, { description: a().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: a().eb75875e, keys: d.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: a().fa98627a, keys: d.goProfile, universal: !1 }, { description: a().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: a().b0041756, keys: d.goLists, universal: !1 }, { description: a().d4986f86, keys: d.goMessages, universal: !1 }, { description: a().h5860a68, keys: d.goGrok, universal: !1 }, { description: a().bb081ea2, keys: d.goSettings, universal: !1 }, { description: a().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: d.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: a().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: d.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: d.search, universal: !1 },
                    { description: a().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: d.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: d.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: d.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: a().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: a().b881560e, keys: d.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: d.audio.mute, universal: !1 },
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
            o.d(t, { M: () => a });
            var r = o(807896),
                n = o(202784),
                s = o(190286);
            const a = (e) => (t) => {
                const [o, a] = n.useState(null),
                    i = (e) =>
                        new Promise((t, o) => {
                            a({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = o;
                    return n.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: i }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => k });
            var r = o(370751),
                n = o(399896),
                s = o(663550),
                a = o(499627),
                i = o(917799);
            const l = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                h = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: l } = e,
                            c = `trend-${l}-${s}`;
                        if (h.has(s) && m(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: s, impression_id: a };
                        return (0, i._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(s)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (s, a, { api: l }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(a(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            k = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(s, { params: k, request: l.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: k }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                k =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
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
            var r = o(161821),
                n = o(390387),
                s = o(836255),
                a = o(255117),
                i = o(166506),
                l = o(919022);
            const d =
                (e, t) =>
                (o, d, { api: c, featureSwitches: u }) =>
                    o(l.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            l = (0, r.Z)(s.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = s.Z.select(t, r.retweeted_status);
                                        n?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(l), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(l)] : [],
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
            var r = o(503768),
                n = o(750085),
                s = o(962741),
                a = o(466015),
                i = o(919022),
                l = o(218951);
            const d = () => (0, l.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === s.ZP.User ? e.content.id : "",
                                    o = i.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === s.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            r = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        747644: (e, t, o) => {
            o.r(t), o.d(t, { ConversationParticipantsScreen: () => C, default: () => P });
            var r = o(202784),
                n = o(111677),
                s = o.n(n),
                a = o(290402),
                i = o(980407),
                l = o(240089),
                d = o(62857),
                c = o(702001),
                u = o(663550),
                h = o(409438),
                p = o(24949),
                m = o(450681),
                f = o(166852),
                b = o(71620),
                k = o(668214),
                y = o(836255);
            const D = (e, t) => t.match.params.screenName,
                g = (e, t) => t.match.params.statusId,
                _ = (e, t) => y.Z.selectHydrated(e, t.match.params.statusId),
                w = (e, t) => y.Z.selectFetchStatus(e, t.match.params.statusId),
                v = (0, k.Z)()
                    .propsFromState(() => ({
                        fetchStatus: w,
                        screenName: D,
                        statusId: g,
                        participantIds: (0, p.P1)(_, (e) => {
                            if (!e) return [];
                            const { user_mentions: t = [] } = e.entities || {},
                                o = [{ id_str: e.in_reply_to_user_id_str }, ...t.filter((t) => t.indices[0] < e.display_text_range[0])];
                            return (0, m.Z)((0, f.Z)(o.map((e) => e.id_str)));
                        }),
                        unmentionedUserIds: (0, p.P1)(_, (e) => e?.unmentioned_user_ids ?? []),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("CONVERSATION_PARTICIPANTS_SCREEN"), fetchTweetIfNeeded: y.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "conversation_participants" }),
                I = s().cdd4aafe,
                E = s().aac3fad2;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserCell = (e) => {
                            const { unmentionedUserIds: t } = this.props,
                                o = t.includes(e);
                            return r.createElement(l.ZP, { cellClickable: !o, decoration: o ? null : l.ET, displayMode: h.Z.UserDetailed, isFakeButtonRoleWithListItem: !o, key: e, promotedItemType: u.bj.USER, userId: e, withFollowsYou: !0, withLink: !o });
                        }),
                        (this._renderList = () => r.createElement(d.Z, { renderUserCell: this._renderUserCell, userIds: this.props.participantIds })),
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
                    return r.createElement(i.Z, { backLocation: `/${o.toLowerCase()}/status/${n}`, history: t, title: E }, r.createElement(a.Z, { "aria-label": I, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderList }));
                }
            }
            const P = v(C);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-e019dbda.d2d7b88a.js.map

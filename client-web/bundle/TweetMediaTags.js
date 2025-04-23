"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetMediaTags"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                s = o(325686),
                l = o(370006),
                d = o(786998),
                i = o(929028),
                c = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: s, isLarge: i, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: D, title: k, titleDomId: y, titleIconCell: g, titleIconCellSize: w, withBackground: v, withWideContainer: M } = this.props,
                        { isModal: E } = this.context,
                        I = n ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!v, E, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(d.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: i, leftControl: I, middleControl: h, position: u(p, E, a), rightControl: m, style: b, subtitle: D, title: k, titleDomId: y, titleIconCell: g, titleIconCellSize: w, withBackground: _, withWideContainer: M }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = i.Z.getBackgroundStyles();
                    return t ? r.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                a = o(202784),
                n = o(182056),
                s = o(879113),
                l = o(392237),
                d = o(674132),
                i = o.n(d),
                c = o(968478);
            const u = i().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const l = n.Z.isOnline();
                    return a.createElement(s.Z, (0, r.Z)({}, t, { icon: l ? void 0 : a.createElement(c.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => v });
            o(136728);
            var r = o(202784),
                a = o(638236),
                n = o(811176),
                s = o(674132),
                l = o.n(s),
                d = o(415506),
                i = o(516951),
                c = o(443781),
                u = o(376293),
                h = o(847607),
                p = o(417714),
                m = o(988823);
            const f = "block",
                b = "mute",
                D = "removeFollower",
                k = "report",
                y = "share",
                g = l().j7bb1a43,
                w = l().hef5960c,
                v = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: s, onMute: l, onRemoveFollower: m, onReportUser: v, onShare: M, onUnblock: E, onUnmute: I, user: _ } = e,
                        P = [],
                        Z = (t, o) => {
                            const { confirm: r, onClose: a } = e;
                            if (t) {
                                const { label: e, ...n } = t;
                                r({ confirmButtonLabel: e, ...n })
                                    .then(o, i.Z)
                                    .finally(a);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !_.protected &&
                        !_.blocking &&
                        !_.blocked_by &&
                        P.push({
                            Icon: a.Z,
                            onClick: () => {
                                s(), M();
                            },
                            testID: y,
                            text: w,
                        });
                    !_.blocking &&
                        P.push({
                            ...(0, h.N1)(
                                _,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), I();
                                },
                            ),
                            testID: b,
                        });
                    _.followed_by &&
                        P.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    Z(e, m);
                                },
                                user: _,
                            }),
                            testID: D,
                        }),
                        P.push((0, u.op)({ blockAction: (e) => Z(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => Z(e, E), user: _ })),
                        P.push({
                            Icon: d.default,
                            onClick: () => {
                                s(), v();
                            },
                            testID: k,
                            text: g({ screenName: _.screen_name }),
                        });
                    const C = P.map(({ Icon: e, onClick: t, testID: o, text: r }) => ({ text: r, onClick: t, Icon: e, testID: o }));
                    return r.createElement(n.Z, { items: C, onCloseRequested: s });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => p });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                s = o(386802),
                l = o(392237),
                d = o(652904),
                i = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: s, hideBackButton: l, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: D, subtitle: k, title: y } = this.props,
                                { isModal: g } = this.context;
                            return r.createElement(a.Z, { style: g ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (g ? "close" : "back"), backLocation: n, centerTitle: s, fixed: !g, hideBackButton: l, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: D, style: [g && m.appBarModal, t], subtitle: k, title: y, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: l, isFullWidth: i, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: D } = this.context,
                        k = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(d.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, D && m.rootModal] }, !D && k, r.createElement(n.Z, { isFullWidth: i, isLarge: c, style: [m.container, D && m.containerModal, s] }, D ? r.createElement(h.Z, { style: m.viewport }, k, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !D && !b && m.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: i, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(807896),
                a = o(202784),
                n = o(771099);
            const s = (e) => (t) => a.createElement(n.$6, null, (o) => a.createElement(e, (0, r.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => M });
            var r = o(202784),
                a = o(154003),
                n = o(674132),
                s = o.n(n),
                l = o(74514),
                d = o(405303),
                i = o(684511),
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
                k = s().c4da7d28,
                y = s().j87c21f4,
                g = s().iebc30ca,
                w = s().dc740eb2;
            class v extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(a.ZP, { "aria-label": k, hoverLabel: { label: g }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(a.ZP, { "aria-label": D, hoverLabel: { label: y }, icon: r.createElement(d.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(i.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
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
            const M = b(v);
        },
        231035: (e, t, o) => {
            o.d(t, { Z: () => b });
            var r = o(202784),
                a = o(420740),
                n = o(108362),
                s = o(731708),
                l = o(154003),
                d = o(392237),
                i = o(674132),
                c = o.n(i),
                u = o(272175);
            const h = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), r.createElement(u.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                p = "error-detail",
                m = c().e49537c2,
                f = c().a9ae1e78;
            class b extends r.PureComponent {
                render() {
                    return r.createElement(a.Z, { testID: p }, r.createElement(h, null), r.createElement(n.Z, { style: D.root }, r.createElement(s.ZP, { align: "center", color: "gray700", style: D.retryText }, m), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, f)));
                }
            }
            const D = d.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                s = o(997174),
                l = o(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class i extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: s },
                            locationKey: l,
                        } = e;
                    let d = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (d = !0));
                    const i = a || l;
                    ((i && a !== l) || (!i && o !== n) || r !== s || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, a.ZP)(d(i));
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => P });
            var r = o(807896),
                a = o(202784),
                n = o(476984),
                s = o.n(n),
                l = o(674132),
                d = o.n(l),
                i = o(615656),
                c = o(290402),
                u = o(325686),
                h = o(240089),
                p = o(663550),
                m = o(409438);
            const f = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                a.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, r) => (t ? t(o) : a.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: p.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var b = o(312771),
                D = o(71620),
                k = o(973572),
                y = o(668214),
                g = o(919022);
            const w = (e, t) => t.userIds,
                v = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: r } = t;
                    return r.filter((t) => {
                        const r = g.ZP.select(e, t);
                        return !!r && o(r);
                    });
                },
                M = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const r = g.ZP.selectFetchStatus(e, o);
                        return (t[o] = r === b.ZP.NONE ? b.ZP.LOADING : r), t;
                    }, {});
                },
                E = (0, y.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, k.Z)(v, (e) => e),
                        fetchStatus: (0, k.Z)(v, M, w, (e, t, o) => {
                            let r = b.ZP.LOADED;
                            for (let a = 0; a < o.length; a++) {
                                const n = o[a];
                                if (-1 === e.indexOf(n)) {
                                    const e = t[n] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: g.ZP.fetchManyIfNeeded })),
                I = d().f5b426c2;
            class _ extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: n, filterPredicate: s, userIds: l, ...d } = this.props;
                            return a.createElement(f, (0, r.Z)({}, d, { userIds: e }));
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
                    return a.createElement(c.Z, { "aria-label": I, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: r } = this.props;
                    o(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [i.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [i.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const P = E(_);
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
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("loader.PushNotificationsPrompt"),
                    ]).then(o.bind(o, 529629)),
            });
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => E, KV: () => D, LI: () => C, SC: () => M, Vt: () => g, ed: () => S, op: () => I });
            var r = o(202784),
                a = o(190286),
                n = o(674132),
                s = o.n(n),
                l = o(616894),
                d = o(314948),
                i = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                D = s().a9fd20be,
                k = s().j546fb79,
                y = s().c9623eeb,
                g = s().e133be4e,
                w = s().he43bca4,
                v = s().f5f01af6,
                M = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                I = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: a, unblockAction: n, unblockSubtext: s, user: l }) => {
                    let d,
                        u = i.Z;
                    const h = C(l, o);
                    switch (r) {
                        case M.PROFILE:
                        case M.LIST_DETAIL:
                        case M.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? n(h) : e(h);
                            };
                            break;
                        case M.TWEET:
                        case M.TWEET_CARET:
                        case M.RICH_FEEDBACK:
                            (d = c.uq.block),
                                (u = () => {
                                    l.blocking ? n(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: a, shortcutKey: d, Icon: _(l.blocking), text: Z(l), subText: P({ user: l, blockSubtext: t, unblockSubtext: s }) };
                },
                _ = (e) => (e ? d.default : l.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                Z = (e) => (e.blocking ? y({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                C = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: k({ screenName: e }), label: g, text: t ? v : w }))(e.screen_name, t) : E(e.screen_name, t)),
                S = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: n, headline: s, label: l, text: d } = e;
                    return r.createElement(a.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: n, headline: s, onCancel: o, onConfirm: t, text: d });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(674132);
            const a = o.n(r)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var r = o(674132),
                a = o.n(r),
                n = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: r } = e,
                    s = (0, a().d78131b9)({ screenName: r });
                return { Icon: n.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => k, GS: () => l, N1: () => p, PY: () => h, X6: () => y, cm: () => d });
            o(202784);
            var r = o(674132),
                a = o.n(r),
                n = o(391366),
                s = o(40904);
            const l = a().hb568af4,
                d = a().bb1cbeb6,
                i = (a().h2f62206, a().e67b2d65),
                c = a().f05597b3,
                u = (e) => i({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, t, o) => {
                    const { muting: r, screen_name: a } = e;
                    return { text: r ? h(a) : u(a), onClick: r ? o : t, Icon: r ? n.default : s.default };
                },
                m = a().h59f52ee,
                f = a().eea0cbee,
                b = a().i29533b3,
                D = a().h129c3c3,
                k = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                y = (e) => (e ? ((e) => D({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var r = o(674132),
                a = o.n(r),
                n = o(224823);
            const s = a().b3036480,
                l = a().b3036480,
                d = a().e68b09b4,
                i = a().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const o = u(t);
                    return { Icon: n.default, text: s, onClick: () => e(o) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: d, text: i({ screenName: e.screen_name }) });
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(674132);
            const a = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => n });
            var r = o(516951),
                a = o(615656);
            const n = { [a.ZP.OtherUserSuspended]: { customAction: r.Z }, [a.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => a });
            var r = o(674132);
            const a = { defaultToast: { text: o.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => a });
            var r = o(674132);
            const a = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(615656),
                a = o(51525);
            const n = { [r.ZP.FollowError]: { customAction: a.w1 } };
        },
        973572: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(476984),
                a = o.n(r),
                n = o(24949);
            const s = (0, n.wN)(n.PW, a());
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => c, PN: () => p, uq: () => i, wR: () => f });
            var r = o(251067),
                a = o(522171),
                n = o(674132),
                s = o.n(n),
                l = o(912021),
                d = o(323265);
            const i = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: i.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: i.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: i.nextItem, universal: !0 }, { description: s().g0048656, keys: i.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: i.refresh, universal: !1 }, { description: s().ha8209bc, keys: i.goHome, universal: !1 }, { description: s().fcf3e54c, keys: i.goExplore, universal: !0 }, { description: s().eb75875e, keys: i.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: i.goMentions, universal: !1 }, { description: s().fa98627a, keys: i.goProfile, universal: !1 }, { description: s().d4ebc798, keys: i.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: i.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: i.goLikes, universal: !1 }, { description: s().b0041756, keys: i.goLists, universal: !1 }, { description: s().d4986f86, keys: i.goMessages, universal: !1 }, { description: s().h5860a68, keys: i.goGrok, universal: !1 }, { description: s().bb081ea2, keys: i.goSettings, universal: !0 }, { description: s().i3145aa0, keys: i.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: i.goToUser, universal: !0 }, { description: s().ee5ccf3e, keys: i.goDisplay, universal: !1 }];
                }),
                u = d.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: s().ab3d53f8, keys: i.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: i.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: i.search, universal: !0 },
                    { description: s().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: i.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: i.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: i.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
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
                    const t = c(e),
                        o = h(),
                        r = p(),
                        a = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      a[t] = e;
                                  })
                                : (a[t] = e);
                        }),
                        JSON.stringify(a)
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
                a = o(202784),
                n = o(190286);
            const s = (e) => (t) => {
                const [o, s] = a.useState(null),
                    l = (e) =>
                        new Promise((t, o) => {
                            s({ resolve: t, reject: o, confirmationSheetProps: e });
                        });
                if (o) {
                    const { confirmationSheetProps: e, reject: t, resolve: l } = o;
                    return a.createElement(
                        n.Z,
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
                return a.createElement(e, (0, r.Z)({}, t, { confirm: l }));
            };
        },
        694180: (e, t, o) => {
            o.d(t, { cM: () => b, dS: () => f, iY: () => D });
            var r = o(370751),
                a = o(399896),
                n = o(663550),
                s = o(499627),
                l = o(917799);
            const d = {},
                i = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([n.dx.IMPRESSION, n.dx.DWELL]),
                h = (0, r.Z)([n.AJ.TREND_VIEW, n.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: r }) => {
                        const { event: n, impression_id: s, promoted_trend_id: d } = e,
                            c = `trend-${d}-${n}`;
                        if (h.has(n) && m(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: d, event: n, impression_id: s };
                        return (0, l._O)(t, { params: u, request: r.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(n)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: r }) =>
                    (n, s, { api: d }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            D = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(n, { params: D, request: d.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: D }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                D =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(a.Z).log })({ actionTypes: i, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            o.d(t, { r: () => i });
            o(136728);
            var r = o(161821),
                a = o(390387),
                n = o(836255),
                s = o(255117),
                l = o(166506),
                d = o(919022);
            const i =
                (e, t) =>
                (o, i, { api: c, featureSwitches: u }) =>
                    o(d.ZP.mute(e, t)).then(() => {
                        const t = i(),
                            d = (0, r.Z)(n.Z.selectAll(t)).reduce((o, r) => {
                                if (null != r)
                                    if (r.user === e) o[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const a = n.Z.select(t, r.retweeted_status);
                                        a?.user === e && (o[r.id_str] = !0);
                                    }
                                return o;
                            }, {}),
                            c = (0, a._h)(i()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(d), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(d)] : [],
                            h = (0, l.k9)();
                        if (h.selectInitialFetchStatus(t) && !h.selectCanRefresh(t)) {
                            const o = (0, l.f8)(e, t, h);
                            o && u.push(o);
                        }
                        return o(u);
                    });
        },
        166506: (e, t, o) => {
            o.d(t, { du: () => c, f8: () => u, k9: () => i });
            var r = o(503768),
                a = o(750085),
                n = o(962741),
                s = o(466015),
                l = o(919022),
                d = o(218951);
            const i = () => (0, d.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: a.Z }),
                c = (e) => (t, o) => {
                    const r = o();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === n.ZP.User ? e.content.id : "",
                                    o = l.ZP.select(r, t);
                                return o && !o.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, o) => {
                    if (!o.selectEntries(t).find((t) => t.type === n.ZP.User && t.content.id === e)) {
                        const t = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return o.injectEntry(r);
                    }
                };
        },
        528282: (e, t, o) => {
            o.r(t), o.d(t, { MediaTagsScreen: () => _, default: () => P });
            var r = o(202784),
                a = o(175848),
                n = o(731708),
                s = o(674132),
                l = o.n(s),
                d = o(290402),
                i = o(980407),
                c = o(231035),
                u = o(62857),
                h = o(702001),
                p = o(71620),
                m = o(735e3),
                f = o(668214),
                b = o(836255);
            const D = (e, t) => {
                    const o = y(e, t) || {};
                    return (o.extended_entities && o.extended_entities.media) || (0, m.o)();
                },
                k = (e, t) => t.match.params.statusId,
                y = (e, t) => b.Z.selectHydrated(e, k(0, t)),
                g = (e, t) => b.Z.selectFetchStatus(e, k(0, t)),
                w = (0, f.Z)()
                    .propsFromState(() => ({ fetchStatus: g, mediaItems: D, statusId: k, tweet: y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("MEDIA_TAGS_SCREEN"), fetchTweetIfNeeded: b.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "tweet", section: "media_tags" }),
                v = l().j9f78b42,
                M = l().cb2054fa,
                E = l().e4ad6bda,
                I = () => r.createElement(c.Z, null);
            function _(e) {
                const { createLocalApiErrorHandler: t, fetchStatus: o, fetchTweetIfNeeded: s, history: l, mediaItems: c, statusId: p, tweet: m } = e,
                    [f, b] = r.useState(!1),
                    D = r.useCallback(() => {
                        s(p).catch((e) => {
                            t(h.c)(e), e && e.status && b(!0);
                        });
                    }, [p, s, t, b]);
                r.useEffect(() => {
                    D();
                }, [D]);
                const k = r.useCallback(() => {
                        const e = a.ZP.mergeTaggedUsers(c).map((e) => e.user_id);
                        return e.length ? r.createElement(u.Z, { userIds: e }) : r.createElement(n.ZP, { align: "center", color: "gray700", size: "headline1" }, v);
                    }, [c]),
                    y = m ? m.permalink : "/";
                return r.createElement(i.Z, { backLocation: y, history: l, title: E }, r.createElement(d.Z, { "aria-label": M, fetchStatus: o, onRequestRetry: D, render: k, renderFailure: I, retryable: !f }));
            }
            const P = w(_);
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(202784),
                a = o(476984),
                n = o.n(a),
                s = o(143778),
                l = o(750410),
                d = o(682830);
            const i = "failed",
                c = "loaded",
                u = "loading",
                h = "none";
            class p extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: n, loadingMessage: s, onRequestRetry: c, render: p, renderFailure: m, retryMessage: f, retryable: b } = this.props;
                    switch (a) {
                        case i:
                            return b ? r.createElement(l.Z, { icon: n, onRequestRetry: c, retryMessage: f }) : o ? r.createElement(d.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(d.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => d });
            var r = o(202784),
                a = o(890601),
                n = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const d = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetMediaTags.5cd183da.js.map

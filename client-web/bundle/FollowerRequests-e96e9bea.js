"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e96e9bea"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                a = o(325686),
                s = o(392237),
                i = o(111677);
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: s, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: y, title: v, titleDomId: g, titleIconCell: k, titleIconCellSize: D, withBackground: w, withWideContainer: C } = this.props,
                        { isModal: _ } = this.context,
                        E = a ? c : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, _, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: d, leftControl: E, middleControl: h, position: u(p, _, r), rightControl: m, style: b, subtitle: y, title: v, titleDomId: g, titleIconCell: k, titleIconCellSize: D, withBackground: P, withWideContainer: C }), f || null);
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
            o.d(t, { Z: () => m });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                s = o(879113),
                i = o(392237),
                l = o(111677),
                d = o.n(l),
                c = o(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, n.Z)({}, t, { icon: i ? void 0 : r.createElement(c.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var n = o(202784),
                r = o(638236),
                a = o(811176),
                s = o(111677),
                i = o.n(s),
                l = o(415506),
                d = o(516951),
                c = o(443781),
                u = o(376293),
                h = o(847607),
                p = o(417714),
                m = o(988823);
            const f = "block",
                b = "mute",
                y = "removeFollower",
                v = "report",
                g = "share",
                k = i().j7bb1a43,
                D = i().hef5960c,
                w = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: o, onClose: s, onMute: i, onRemoveFollower: m, onReportUser: w, onShare: C, onUnblock: _, onUnmute: E, user: P } = e,
                        S = [],
                        T = (t, o) => {
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
                        S.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), C();
                            },
                            testID: g,
                            text: D,
                        });
                    !P.blocking &&
                        S.push({
                            ...(0, h.N1)(
                                P,
                                () => {
                                    s(), i();
                                },
                                () => {
                                    s(), E();
                                },
                            ),
                            testID: b,
                        });
                    P.followed_by &&
                        S.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    T(e, m);
                                },
                                user: P,
                            }),
                            testID: y,
                        }),
                        S.push((0, u.op)({ blockAction: (e) => T(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => T(e, _), user: P })),
                        S.push({
                            Icon: l.default,
                            onClick: () => {
                                s(), w();
                            },
                            testID: v,
                            text: k({ screenName: P.screen_name }),
                        });
                    const M = S.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(a.Z, { items: M, onCloseRequested: s });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => p });
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
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: s, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: y, subtitle: v, title: g } = this.props,
                                { isModal: k } = this.context;
                            return n.createElement(r.Z, { style: k ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(c.ZP, { backButtonType: o || (k ? "close" : "back"), backLocation: a, centerTitle: s, fixed: !k, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: y, style: [k && m.appBarModal, t], subtitle: v, title: g, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: i, isFullWidth: d, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: y } = this.context,
                        v = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, y && m.rootModal] }, !y && v, n.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, y && m.containerModal, s] }, y ? n.createElement(h.Z, { style: m.viewport }, v, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !y && !b && m.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
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
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(154003),
                a = o(111677),
                s = o.n(a),
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
                y = s().bdba3e1a,
                v = s().c4da7d28,
                g = s().j87c21f4,
                k = s().iebc30ca,
                D = s().dc740eb2;
            class w extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": v, hoverLabel: { label: k }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(d.Z, { fullScreen: !0, message: D }) : null, this._renderButton());
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
            const C = b(w);
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
            o.d(t, { $f: () => _, KV: () => y, LI: () => M, SC: () => C, Vt: () => k, ed: () => I, op: () => E });
            var n = o(202784),
                r = o(190286),
                a = o(111677),
                s = o.n(a),
                i = o(616894),
                l = o(314948),
                d = o(516951),
                c = o(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                p = s().fcd4d489,
                m = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                y = s().a9fd20be,
                v = s().j546fb79,
                g = s().c9623eeb,
                k = s().e133be4e,
                D = s().he43bca4,
                w = s().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                _ = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? b({ screenName: e }) : f({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: r, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let l,
                        u = d.Z;
                    const h = M(i, o);
                    switch (n) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? a(h) : e(h);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (l = c.uq.block),
                                (u = () => {
                                    i.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: r, shortcutKey: l, Icon: P(i.blocking), text: T(i), subText: S({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                P = (e) => (e ? l.default : i.default),
                S = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                T = (e) => (e.blocking ? g({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                M = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: v({ screenName: e }), label: k, text: t ? w : D }))(e.screen_name, t) : _(e.screen_name, t)),
                I = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: l } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: l });
                };
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(111677);
            const r = o.n(n)().gf5e9ea6;
        },
        916585: (e, t, o) => {
            o.d(t, { k: () => s });
            var n = o(111677),
                r = o.n(n),
                a = o(437358);
            const s = (e, t) => {
                const { id_str: o, screen_name: n } = e,
                    s = (0, r().d78131b9)({ screenName: n });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: o } }, onClick: t };
            };
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => u, FK: () => v, GS: () => i, N1: () => p, PY: () => h, X6: () => g, cm: () => l });
            o(202784);
            var n = o(111677),
                r = o.n(n),
                a = o(391366),
                s = o(40904);
            const i = r().hb568af4,
                l = r().bb1cbeb6,
                d = (r().h2f62206, r().e67b2d65),
                c = r().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, t, o) => {
                    const { muting: n, screen_name: r } = e;
                    return { text: n ? h(r) : u(r), onClick: n ? o : t, Icon: n ? a.default : s.default };
                },
                m = r().h59f52ee,
                f = r().eea0cbee,
                b = r().i29533b3,
                y = r().h129c3c3,
                v = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                g = (e) => (e ? ((e) => y({ screenName: e }))(e) : f);
        },
        417714: (e, t, o) => {
            o.d(t, { l: () => c });
            o(202784);
            var n = o(111677),
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
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        48886: (e, t, o) => {
            o.d(t, { q: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().a30b63da }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(111677);
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
            o.d(t, { OX: () => h, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var n = o(251067),
                r = o(522171),
                a = o(111677),
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
                p = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, i.Z)((e) => {
                    const t = c(e),
                        o = h(),
                        n = p(),
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
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
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
            o.d(t, { cM: () => b, dS: () => f, iY: () => y });
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
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, o, { api: n }) => {
                        const { event: a, impression_id: s, promoted_trend_id: l } = e,
                            c = `trend-${l}-${a}`;
                        if (h.has(a) && m(o(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: a, impression_id: s };
                        return (0, i._O)(t, { params: u, request: n.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && h.has(a)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: t, itemType: o, params: n }) =>
                    (a, s, { api: l }) => {
                        const { event: c, impression_id: h } = n,
                            f = `${o}-${t ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            y = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: y, request: l.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: y }, (e, t) => {
                            if (!t && u.has(c)) return [p(f)];
                        });
                    },
                y =
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
            o.r(t), o.d(t, { FollowerRequestsScreen: () => G, default: () => W });
            var n = o(202784),
                r = o(325686),
                a = o(457311),
                s = o(111677),
                i = o.n(s),
                l = o(290402),
                d = o(980407),
                c = o(965245),
                u = o(154003),
                h = o(392237);
            const p = i().da878dc0,
                m = i().ec2d8342,
                f = h.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                b = ({ onAccept: e, onDecline: t }) => n.createElement(r.Z, { style: f.root }, n.createElement(u.ZP, { "aria-label": m, onPress: t, size: "small", style: [f.followerRequestActionButton, f.declineButton], type: "destructiveOutlined" }, m), n.createElement(u.ZP, { "aria-label": p, onPress: e, size: "small", style: f.followerRequestActionButton, type: "brandOutlined" }, p));
            var y = o(615656);
            const v = i().j85d8d90,
                g = { [y.ZP.NoFollowRequest]: { toast: { text: v } }, showToast: !0 };
            var k = o(71620),
                D = o(668214),
                w = o(466036);
            const C = (0, D.Z)().propsFromActions(() => ({ acceptPendingFollower: w.WC, createLocalApiErrorHandler: (0, k.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: w.X }));
            class _ extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(g));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(g));
                        });
                }
                render() {
                    return n.createElement(b, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const E = C(_);
            var P = o(240089),
                S = o(293115),
                T = o(409438),
                M = o(553093);
            const I = (e) => (e && "user_cell" === e.type ? e.data : (0, M.Sz)(e));
            var Z = o(24949),
                A = o(312771);
            const R = (e) => w.sC(e).hydratedIds,
                x = (0, D.Z)()
                    .propsFromState(() => ({ followerRequestIds: R, fetchStatus: (0, Z.P1)(w.sC, w.HP, w.dj, ({ hydratedIds: e, ids: t }, o, n) => (o === A.ZP.LOADED ? (t.length && e.length !== t.length ? n || A.ZP.LOADING : A.ZP.LOADED) : o)) }))
                    .adjustStateProps(({ followerRequestIds: e = [], fetchStatus: t }) => ({ fetchStatus: t, timeline: e.map((e) => ({ type: "user_cell", data: e })) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("FOLLOWER_REQUESTS"), fetchPendingFollowersIfNeeded: w.GE, fetchPendingFollowersUsersIfNeeded: w.IN, fetchNextPendingFollowersUsers: w.lm })),
                B = i().g6b54ff6,
                F = i().ec5fd35a,
                L = i().i83d4f14,
                O = { page: "follower_requests" },
                N = (e) => {
                    const { followRequestReceived: t, userId: o, viewerUserId: n } = e;
                    return !(!t || n === o);
                },
                U = (e) => (N(e) ? null : (0, P.ET)(e)),
                H = (e) => (N(e) ? n.createElement(E, { userId: e.userId }) : null);
            class G extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { timeline: e } = this.props;
                            return n.createElement(c.Z, { accessibilityTitle: L, assumedItemHeight: 75, cacheKey: "userFollowerRequests", identityFunction: I, items: e, noItemsRenderer: this._renderEmptyState, onNearEnd: this._handleNearEnd, renderer: this._itemRenderer });
                        }),
                        (this._renderEmptyState = () => n.createElement(a.Z, { header: B, message: F })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchPendingFollowersIfNeeded: t, fetchPendingFollowersUsersIfNeeded: o } = this.props;
                            t().then(() => o(), e({}));
                        }),
                        (this._itemRenderer = (e) => ("user_cell" === e.type ? n.createElement(r.Z, null, n.createElement(P.ZP, { bottomControl: H, decoration: U, displayMode: T.Z.UserDetailed, isFakeButtonRoleWithListItem: !0, userId: e.data, withFollowsYou: !0 })) : null)),
                        (this._handleNearEnd = () => {
                            this.props.fetchNextPendingFollowersUsers();
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props;
                    return n.createElement(S.nO, { namespace: O }, n.createElement(d.Z, { history: t, title: L }, n.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render })));
                }
            }
            const W = x(G);
        },
        452661: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(18198),
                r = {
                    centroidDimension: function (e, t, o, n) {
                        var a = e.touchBank,
                            s = 0,
                            i = 0,
                            l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== l) l.touchActive && l.currentTimeStamp > t && ((s += n && o ? l.currentPageX : n && !o ? l.currentPageY : !n && o ? l.previousPageX : l.previousPageY), (i = 1));
                        else
                            for (var d = 0; d < a.length; d++) {
                                var c = a[d];
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
            const a = r;
            var s = a.currentCentroidXOfTouchesChangedAfter,
                i = a.currentCentroidYOfTouchesChangedAfter,
                l = a.previousCentroidXOfTouchesChangedAfter,
                d = a.previousCentroidYOfTouchesChangedAfter,
                c = a.currentCentroidX,
                u = a.currentCentroidY,
                h = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = s(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            n = l(t, o),
                            r = s(t, o),
                            a = d(t, o),
                            c = i(t, o),
                            u = e.dx + (r - n),
                            h = e.dy + (c - a),
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
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && h._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var n = t.touchHistory;
                                    return o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (h._updateGestureStateOnMove(o, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = n.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = c(r.touchHistory)),
                                    (o.y0 = u(r.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, o)
                                ),
                                onResponderReject(n) {
                                    p(t, e.onPanResponderReject, n, o);
                                },
                                onResponderRelease(n) {
                                    p(t, e.onPanResponderRelease, n, o), m(t), h._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var n = t.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var n = t.touchHistory;
                                    o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (h._updateGestureStateOnMove(o, n), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(n) {
                                    var r = n.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), p(t, e.onPanResponderEnd, n, o);
                                },
                                onResponderTerminate(n) {
                                    p(t, e.onPanResponderTerminate, n, o), m(t), h._initializeGestureState(o);
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
            function p(e, t, o, r) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const f = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e96e9bea.3c5434da.js.map

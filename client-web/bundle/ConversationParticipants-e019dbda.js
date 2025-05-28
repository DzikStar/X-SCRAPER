"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ConversationParticipants-e019dbda"],
    {
        625661: (e, o, t) => {
            t.d(o, { ZP: () => h });
            var r = t(202784),
                n = t(614983),
                s = t.n(n),
                a = t(325686),
                l = t(370006),
                i = t(786998),
                d = t(929028),
                c = t(386802);
            function u(e, o, t) {
                return e || (!o && t ? "fixed" : void 0);
            }
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: o } = this.props;
                            s()(o || e, "Either onBackClick must be specified, or history should be supplied"), o ? o(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: o } = this.props;
                            o && o.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: o, centeredLogo: t, fixed: n, hideBackButton: s, isFullWidth: a, isLarge: d, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: g, title: w, titleDomId: k, titleIconCell: D, titleIconCellSize: _, withBackground: y, withWideContainer: I } = this.props,
                        { isModal: P } = this.context,
                        C = s ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, o, t) {
                            return e && !(o && t);
                        })(!!y, P, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { centerTitle: o, centeredLogo: t, isFullWidth: a, isLarge: d, leftControl: C, middleControl: h, position: u(p, P, n), rightControl: m, style: b, subtitle: g, title: w, titleDomId: k, titleIconCell: D, titleIconCellSize: _, withBackground: v, withWideContainer: I }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: o } = this.context,
                        t = d.Z.getBackgroundStyles();
                    return o ? r.createElement(a.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, o, t) => {
            t.d(o, { Z: () => m });
            var r = t(807896),
                n = t(202784),
                s = t(182056),
                a = t(879113),
                l = t(392237),
                i = t(111677),
                d = t.n(i),
                c = t(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...o }, t) => {
                    const l = s.Z.isOnline();
                    return n.createElement(a.Z, (0, r.Z)({}, o, { icon: l ? void 0 : n.createElement(c.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        333241: (e, o, t) => {
            t.d(o, { Z: () => y });
            t(136728);
            var r = t(202784),
                n = t(638236),
                s = t(811176),
                a = t(111677),
                l = t.n(a),
                i = t(415506),
                d = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                p = t(417714),
                m = t(988823);
            const f = "block",
                b = "mute",
                g = "removeFollower",
                w = "report",
                k = "share",
                D = l().j7bb1a43,
                _ = l().hef5960c,
                y = (0, m.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: a, onMute: l, onRemoveFollower: m, onReportUser: y, onShare: I, onUnblock: P, onUnmute: C, user: v } = e,
                        E = [],
                        Z = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...s } = o;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(t, d.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !v.protected &&
                        !v.blocking &&
                        !v.blocked_by &&
                        E.push({
                            Icon: n.Z,
                            onClick: () => {
                                a(), I();
                            },
                            testID: k,
                            text: _,
                        });
                    !v.blocking &&
                        E.push({
                            ...(0, h.N1)(
                                v,
                                () => {
                                    a(), l();
                                },
                                () => {
                                    a(), C();
                                },
                            ),
                            testID: b,
                        });
                    v.followed_by &&
                        E.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    Z(e, m);
                                },
                                user: v,
                            }),
                            testID: g,
                        }),
                        E.push((0, u.op)({ blockAction: (e) => Z(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => Z(e, P), user: v })),
                        E.push({
                            Icon: i.default,
                            onClick: () => {
                                a(), y();
                            },
                            testID: w,
                            text: D({ screenName: v.screen_name }),
                        });
                    const M = E.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(s.Z, { items: M, onCloseRequested: a });
                });
        },
        980407: (e, o, t) => {
            t.d(o, { Z: () => f, w: () => p });
            var r = t(202784),
                n = t(325686),
                s = t(108362),
                a = t(386802),
                l = t(392237),
                i = t(652904),
                d = t(555079),
                c = t(625661),
                u = t(449067),
                h = t(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: o, backButtonType: t, backLocation: s, centerTitle: a, hideBackButton: l, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: g, subtitle: w, title: k } = this.props,
                                { isModal: D } = this.context;
                            return r.createElement(n.Z, { style: D ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: t || (D ? "close" : "back"), backLocation: s, centerTitle: a, fixed: !D, hideBackButton: l, history: i, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: g, style: [D && m.appBarModal, o], subtitle: w, title: k, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: o } = this.props,
                                { isModal: t } = this.context;
                            o && (t ? window.requestAnimationFrame(() => o(e)) : o(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: o, children: t, containerStyle: a, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: g } = this.context,
                        w = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(i.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && w, r.createElement(s.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, a] }, g ? r.createElement(h.Z, { style: m.viewport }, w, t) : t), o ? r.createElement(n.Z, { style: [m.bottomBarModal, !g && !b && m.bottomBarMobile] }, r.createElement(s.Z, { isFullWidth: d, isLarge: c }, o)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(807896),
                n = t(202784),
                s = t(771099);
            const a = (e) => (o) => n.createElement(s.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => I });
            var r = t(202784),
                n = t(154003),
                s = t(111677),
                a = t.n(s),
                l = t(74514),
                i = t(405303),
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
                g = a().bdba3e1a,
                w = a().c4da7d28,
                k = a().j87c21f4,
                D = a().iebc30ca,
                _ = a().dc740eb2;
            class y extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": w, hoverLabel: { label: D }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: k }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
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
            const I = b(y);
        },
        23134: (e, o, t) => {
            t.d(o, { C: () => H });
            t(136728);
            var r = t(202784),
                n = t(190286),
                s = t(723587),
                a = t(111677),
                l = t.n(a),
                i = t(615656),
                d = t(666670),
                c = t(757953),
                u = t(879596),
                h = t(323683),
                p = t(479506),
                m = t(942893),
                f = t(500002),
                b = t(233391),
                g = t(288955),
                w = t(71620),
                k = t(668214),
                D = t(390387),
                _ = t(601576),
                y = t(919022);
            const I = (e, o) => o.user || y.ZP.select(e, o.userId),
                P = (0, k.Z)()
                    .propsFromState(() => ({ isLoggedIn: D.Qb, user: I }))
                    .propsFromActions(() => ({ addToast: _.fz, cancelPendingFollow: y.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, w.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: y.ZP.fetchOneIfNeeded, follow: y.ZP.follow, unblock: y.ZP.unblock, unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                C = (e) => `${e}-follow`,
                v = (e) => `${e}-unfollow`,
                E = (e) => `${e}-block`,
                Z = (e) => `${e}-unblock`,
                M = (e) => `${e}-cancel`,
                S = (e) => `${e}-subscribe`,
                A = (e) => `${e}-manageSubscription`,
                T = l().hbe4feb5,
                L = l().df4c86b0,
                F = l().bba40ffa,
                x = l().f558829e,
                U = l().a6941096,
                B = l().j24c37b2,
                N = l().if8cd2a4,
                O = l().b5972260;
            class R extends r.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: o, isRelay: t, userId: r } = this.props;
                            r && !t && o(r).catch(e(d.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: o, user: t } = this.props;
                            t && e(t.id_str).catch(o({ defaultToast: { text: O }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: o, follow: t, isFollowNudge: r, onFollowClick: n, promotedContent: s, user: a } = this.props;
                            a && t(a.id_str, { promotedContent: s, isFollowNudge: r }).then(() => (a.protected && e({ text: T({ screenName: a.screen_name }) }), n && n(), this._scribe({ action: "follow" })), o({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: o, unblock: t, user: r } = this.props;
                            r && (t(r.id_str, { promotedContent: o }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: o, unfollow: t, user: r } = this.props;
                            if (r) return t(r.id_str, { promotedContent: o }).catch(e(h.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: o, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/subscribe`, { referring_page: o ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: o } = this.props;
                            if (o) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${o.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...c.H,
                            [i.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: F });
                                },
                            },
                            [i.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: U, dialogHeadline: F });
                                },
                            },
                            [i.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: x, dialogHeadline: L });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: o, isSuperFollowSubscriptionEnabled: t, isTransparent: a, relationshipMode: l, showRelationshipChangeConfirmation: i, size: d, style: c, user: u, userId: h } = this.props,
                        { dialogHeadline: p, dialogText: m, showDialog: f } = this.state,
                        w = u?.screen_name,
                        k = w ? `/${w}` : "",
                        D = { follow: C(h), unfollow: v(h), cancel: M(h), block: E(h), unblock: Z(h), subscribe: S(h), manageSubscription: A(h) },
                        _ = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        r.createElement(
                            r.Fragment,
                            null,
                            f ? r.createElement(n.Z, { confirmButtonLabel: B, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: m, withCancelButton: !1 }) : null,
                            r.createElement(g.Z, { displayMode: b.BH.follow, postLoginPath: k, userFullName: u.name, userId: h }, (n) => r.createElement(s.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: _, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!t && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: a, name: w, onCancelPendingFollow: n(this._handleCancelPendingFollow), onFollow: n(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: n(this._handleSuperFollow), onUnSuperFollow: n(this._handleUnSuperFollow), onUnblock: n(this._handleUnblock), onUnfollow: n(this._handleUnfollow), relationshipMode: l, showRelationshipChangeConfirmation: o && i, size: d, style: c, testIDs: D, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: o, element: t } = e,
                        { analytics: r, location: n, promotedContent: s, user: a } = this.props,
                        { items: l } = r.contextualScribeData,
                        i = l?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === a?.id_str),
                        d = [];
                    a ? d.push({ ...i, ...m.Z.getUserItem(a, s) }) : i && d.push(i);
                    const c = n.query && n.query.screen_name ? { items: d, context: "profile_intent" } : { items: d };
                    return r.scribe({ element: t, action: o, data: c });
                }
            }
            const H = (0, f.ZP)(P(R));
        },
        652904: (e, o, t) => {
            t.d(o, { Z: () => c });
            var r = t(202784),
                n = t(500002),
                s = t(668214),
                a = t(997174),
                l = t(118823);
            const i = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class d extends r.Component {
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
                            location: { pathname: s, search: a },
                            locationKey: l,
                        } = e;
                    let i = !1;
                    o.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && o.pathname === t && ((this._isInBackground = !1), (i = !0));
                    const d = n || l;
                    ((d && n !== l) || (!d && t !== s) || r !== a || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: o, updateLocation: t, updateTweetDetailNav: r } = e;
                    o.scribePageImpression(), t(o.contextualScribeNamespace, o.contextualScribeData), r(o.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(i(d));
        },
        288955: (e, o, t) => {
            t.d(o, { Z: () => i });
            var r = t(807896),
                n = t(202784),
                s = t(443781),
                a = t(369241);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, o) =>
                            (t, ...r) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(t, ...r) : (t && t.preventDefault && t.preventDefault(), o && o(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: o, ...t } = this.props;
                    return n.createElement(n.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && n.createElement(a.ZP, (0, r.Z)({ onClose: this._handleClose }, t)));
                }
            }
            (l.defaultProps = { disabled: !1 }), (l.contextType = s.rC);
            const i = l;
        },
        62857: (e, o, t) => {
            t.d(o, { Z: () => E });
            var r = t(807896),
                n = t(202784),
                s = t(476984),
                a = t.n(s),
                l = t(111677),
                i = t.n(l),
                d = t(615656),
                c = t(290402),
                u = t(325686),
                h = t(240089),
                p = t(663550),
                m = t(409438);
            const f = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: o, userIds: t }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    t.map((t, r) => (o ? o(t) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: t, promotedItemType: p.bj.USER, userId: t, withFollowsYou: !0 }))),
                );
            var b = t(312771),
                g = t(71620),
                w = t(973572),
                k = t(668214),
                D = t(919022);
            const _ = (e, o) => o.userIds,
                y = (e, o) => {
                    const { filterPredicate: t = (e) => !!e, userIds: r } = o;
                    return r.filter((o) => {
                        const r = D.ZP.select(e, o);
                        return !!r && t(r);
                    });
                },
                I = (e, o) => {
                    const { userIds: t } = o;
                    return t.reduce((o, t) => {
                        const r = D.ZP.selectFetchStatus(e, t);
                        return r && (o[t] = r === b.ZP.NONE ? b.ZP.LOADING : r), o;
                    }, {});
                },
                P = (0, k.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, w.Z)(y, (e) => e),
                        fetchStatus: (0, w.Z)(y, I, _, (e, o, t) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < t.length; n++) {
                                const s = t[n];
                                if (-1 === e.indexOf(s)) {
                                    const e = o[s] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: D.ZP.fetchManyIfNeeded })),
                C = i().f5b426c2;
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: o, fetchStatus: t, fetchUsersIfNeeded: s, filterPredicate: a, userIds: l, ...i } = this.props;
                            return n.createElement(f, (0, r.Z)({}, i, { userIds: e }));
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
                    return n.createElement(c.Z, { "aria-label": C, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: o, fetchUsersIfNeeded: t, userIds: r } = this.props;
                    t(r).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        o({
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
            const E = P(v);
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
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        t.e("loader.PushNotificationsPrompt"),
                    ]).then(t.bind(t, 529629)),
            });
        },
        376293: (e, o, t) => {
            t.d(o, { $f: () => P, KV: () => g, LI: () => M, SC: () => I, Vt: () => D, ed: () => S, op: () => C });
            var r = t(202784),
                n = t(190286),
                s = t(111677),
                a = t.n(s),
                l = t(616894),
                i = t(314948),
                d = t(516951),
                c = t(163390);
            const u = a().cfd2f35e,
                h = a().f9e45cfb,
                p = a().fcd4d489,
                m = a().a6450e84,
                f = a().g353ad73,
                b = a().ad00a739,
                g = a().a9fd20be,
                w = a().j546fb79,
                k = a().c9623eeb,
                D = a().e133be4e,
                _ = a().he43bca4,
                y = a().f5f01af6,
                I = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                P = (e, o) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: o ? b({ screenName: e }) : f({ screenName: e }) }),
                C = ({ blockAction: e, blockSubtext: o, isSoftBlockEnabled: t, source: r, testID: n, unblockAction: s, unblockSubtext: a, user: l }) => {
                    let i,
                        u = d.Z;
                    const h = M(l, t);
                    switch (r) {
                        case I.PROFILE:
                        case I.LIST_DETAIL:
                        case I.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? s(h) : e(h);
                            };
                            break;
                        case I.TWEET:
                        case I.TWEET_CARET:
                        case I.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (u = () => {
                                    l.blocking ? s(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: i, Icon: v(l.blocking), text: Z(l), subText: E({ user: l, blockSubtext: o, unblockSubtext: a }) };
                },
                v = (e) => (e ? i.default : l.default),
                E = ({ blockSubtext: e, unblockSubtext: o, user: t }) => (!t.blocking && e ? e(t.screen_name) : t.blocking ? o : void 0),
                Z = (e) => (e.blocking ? k({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                M = (e, o) => (e.blocking ? ((e, o) => ({ confirmButtonType: "primary", headline: w({ screenName: e }), label: D, text: o ? y : _ }))(e.screen_name, o) : P(e.screen_name, o)),
                S = ({ confirmation: e, handleConfirm: o, onClose: t }) => {
                    const { confirmButtonType: s, headline: a, label: l, text: i } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: s, headline: a, onCancel: t, onConfirm: o, text: i });
                };
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => a });
            var r = t(111677),
                n = t.n(r),
                s = t(437358);
            const a = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    a = (0, n().d78131b9)({ screenName: r });
                return { Icon: s.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => w, GS: () => l, N1: () => p, PY: () => h, X6: () => k, cm: () => i });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(391366),
                a = t(40904);
            const l = n().hb568af4,
                i = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? t : o, Icon: r ? s.default : a.default };
                },
                m = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                g = n().h129c3c3,
                w = (e) => (e ? ((e) => b({ screenName: e }))(e) : m),
                k = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(224823);
            const a = n().b3036480,
                l = n().b3036480,
                i = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: s.default, text: a, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().b6878b0a }, showToast: !0 };
        },
        666670: (e, o, t) => {
            t.d(o, { F: () => a });
            var r = t(516951),
                n = t(615656),
                s = t(51525);
            const a = { [n.ZP.AddressBookLookupNotFound]: { customAction: s.vv }, [n.ZP.GenericUserNotFound]: { customAction: r.Z }, [n.ZP.OtherUserSuspended]: { customAction: r.Z }, showToast: !0 };
        },
        702001: (e, o, t) => {
            t.d(o, { c: () => s });
            var r = t(516951),
                n = t(615656);
            const s = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
        757953: (e, o, t) => {
            t.d(o, { H: () => m });
            var r = t(111677),
                n = t.n(r),
                s = t(516951),
                a = t(615656),
                l = t(51525);
            const i = n().j4292c24,
                d = n().a0ba5842,
                c = n().i859a9d4,
                u = n().a5202b82,
                h = n().f8cbf714,
                p = n().f2e66452,
                m = { defaultToast: { text: u }, [a.ZP.CurrentUserSuspended]: { toast: { text: p, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [a.ZP.DuplicateFollowRequest]: { customAction: s.Z }, [a.ZP.FollowBlockedUserError]: { toast: { text: i } }, [a.ZP.FollowError]: { customAction: l.w1 }, [a.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [a.ZP.TargetUserNotFound]: { toast: { text: h } } };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().a30b63da }, showToast: !0 };
        },
        879596: (e, o, t) => {
            t.d(o, { D: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().ca96fe6e }, showToast: !0 };
        },
        323683: (e, o, t) => {
            t.d(o, { X: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().e1a0aaca }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(615656),
                n = t(51525);
            const s = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(476984),
                n = t.n(r),
                s = t(24949);
            const a = (0, s.wN)(s.PW, n());
        },
        163390: (e, o, t) => {
            t.d(o, { OX: () => h, Od: () => c, PN: () => p, uq: () => d, wR: () => f });
            var r = t(251067),
                n = t(522171),
                s = t(111677),
                a = t.n(s),
                l = t(912021),
                i = t(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const o = e ? [{ description: a().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: d.nextItem, universal: !0 }, { description: a().g0048656, keys: d.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: d.refresh, universal: !1 }, { description: a().ha8209bc, keys: d.goHome, universal: !1 }, { description: a().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: a().eb75875e, keys: d.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: a().fa98627a, keys: d.goProfile, universal: !1 }, { description: a().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: a().b0041756, keys: d.goLists, universal: !1 }, { description: a().d4986f86, keys: d.goMessages, universal: !1 }, { description: a().h5860a68, keys: d.goGrok, universal: !1 }, { description: a().bb081ea2, keys: d.goSettings, universal: !1 }, { description: a().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...o, { description: a().eee2ed92, keys: d.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = i.ZP.isMac() ? "⌘" : "CTRL",
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
            t.d(o, { M: () => a });
            var r = t(807896),
                n = t(202784),
                s = t(190286);
            const a = (e) => (o) => {
                const [t, a] = n.useState(null),
                    l = (e) =>
                        new Promise((o, t) => {
                            a({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: l } = t;
                    return n.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), a(null);
                            },
                            onConfirm: () => {
                                l(), a(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, o, { confirm: l }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => b, dS: () => f, iY: () => g });
            var r = t(370751),
                n = t(399896),
                s = t(663550),
                a = t(499627),
                l = t(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                h = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const m = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: s, impression_id: a, promoted_trend_id: i } = e,
                            c = `trend-${i}-${s}`;
                        if (h.has(s) && m(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: s, impression_id: a };
                        return (0, l._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(s)) return [p(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (s, a, { api: i }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && m(a(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(s, { params: g, request: i.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, o) => {
                            if (!o && u.has(c)) return [p(f)];
                        });
                    },
                g =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, l._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = i, o) {
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
            var r = t(161821),
                n = t(390387),
                s = t(836255),
                a = t(255117),
                l = t(166506),
                i = t(919022);
            const d =
                (e, o) =>
                (t, d, { api: c, featureSwitches: u }) =>
                    t(i.ZP.mute(e, o)).then(() => {
                        const o = d(),
                            i = (0, r.Z)(s.Z.selectAll(o)).reduce((t, r) => {
                                if (null != r)
                                    if (r.user === e) t[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = s.Z.select(o, r.retweeted_status);
                                        n?.user === e && (t[r.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            h = (0, l.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const t = (0, l.f8)(e, o, h);
                            t && u.push(t);
                        }
                        return t(u);
                    });
        },
        166506: (e, o, t) => {
            t.d(o, { du: () => c, f8: () => u, k9: () => d });
            var r = t(503768),
                n = t(750085),
                s = t(962741),
                a = t(466015),
                l = t(919022),
                i = t(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === s.ZP.User ? e.content.id : "",
                                    t = l.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === s.ZP.User && o.content.id === e)) {
                        const o = (0, a.OD)(e),
                            r = (0, a.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        747644: (e, o, t) => {
            t.r(o), t.d(o, { ConversationParticipantsScreen: () => v, default: () => E });
            var r = t(202784),
                n = t(111677),
                s = t.n(n),
                a = t(290402),
                l = t(980407),
                i = t(240089),
                d = t(62857),
                c = t(702001),
                u = t(663550),
                h = t(409438),
                p = t(24949),
                m = t(450681),
                f = t(166852),
                b = t(71620),
                g = t(668214),
                w = t(836255);
            const k = (e, o) => o.match.params.screenName,
                D = (e, o) => o.match.params.statusId,
                _ = (e, o) => w.Z.selectHydrated(e, o.match.params.statusId),
                y = (e, o) => w.Z.selectFetchStatus(e, o.match.params.statusId),
                I = (0, g.Z)()
                    .propsFromState(() => ({
                        fetchStatus: y,
                        screenName: k,
                        statusId: D,
                        participantIds: (0, p.P1)(_, (e) => {
                            if (!e) return [];
                            const { user_mentions: o = [] } = e.entities || {},
                                t = [{ id_str: e.in_reply_to_user_id_str }, ...o.filter((o) => o.indices[0] < e.display_text_range[0])];
                            return (0, m.Z)((0, f.Z)(t.map((e) => e.id_str)));
                        }),
                        unmentionedUserIds: (0, p.P1)(_, (e) => e?.unmentioned_user_ids ?? []),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("CONVERSATION_PARTICIPANTS_SCREEN"), fetchTweetIfNeeded: w.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "conversation_participants" }),
                P = s().cdd4aafe,
                C = s().aac3fad2;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserCell = (e) => {
                            const { unmentionedUserIds: o } = this.props,
                                t = o.includes(e);
                            return r.createElement(i.ZP, { cellClickable: !t, decoration: t ? null : i.ET, displayMode: h.Z.UserDetailed, isFakeButtonRoleWithListItem: !t, key: e, promotedItemType: u.bj.USER, userId: e, withFollowsYou: !0, withLink: !t });
                        }),
                        (this._renderList = () => r.createElement(d.Z, { renderUserCell: this._renderUserCell, userIds: this.props.participantIds })),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: o, statusId: t } = this.props;
                            o(t).catch(e(c.c));
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, history: o, screenName: t, statusId: n } = this.props;
                    return r.createElement(l.Z, { backLocation: `/${t.toLowerCase()}/status/${n}`, history: o, title: C }, r.createElement(a.Z, { "aria-label": P, fetchStatus: e, onRequestRetry: this._handleFetch, render: this._renderList }));
                }
            }
            const E = I(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ConversationParticipants-e019dbda.ee5e2dfa.js.map

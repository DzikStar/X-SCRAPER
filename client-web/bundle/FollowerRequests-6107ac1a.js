"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-6107ac1a", "icons/IconFeedback-js", "bundle.TweetMediaTags-bc6ccf4c", "bundle.ConversationParticipants-bc6ccf4c"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                l = o(466999),
                i = o(325686),
                r = o(392237),
                s = o(111677);
            const a = o.n(s)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = a({ title: t });
                    return n.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(l.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: r.default.visuallyHidden }, t), n.createElement(i.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                l = o(614983),
                i = o.n(l),
                r = o(325686),
                s = o(370006),
                a = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: l, hideBackButton: i, isFullWidth: r, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: f, subtitle: w, title: g, titleDomId: y, titleIconCell: C, titleIconCellSize: _, withBackground: F, withWideContainer: v } = this.props,
                        { isModal: B } = this.context,
                        S = i ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!F, B, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(a.Z, { centerTitle: t, centeredLogo: o, isFullWidth: r, isLarge: c, leftControl: S, middleControl: h, position: u(p, B, l), rightControl: m, style: f, subtitle: w, title: g, titleDomId: y, titleIconCell: C, titleIconCellSize: _, withBackground: Z, withWideContainer: v }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(r.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                l = o(325686),
                i = o(392237);
            class r extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(l.Z, { style: s.root });
                }
            }
            const s = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                a = r;
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                l = o(202784),
                i = o(182056),
                r = o(879113),
                s = o(392237),
                a = o(111677),
                c = o.n(a),
                d = o(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const s = i.Z.isOnline();
                    return l.createElement(r.Z, (0, n.Z)({}, t, { icon: s ? void 0 : l.createElement(d.default, { style: p.icon }), retryMessage: s ? e : u }));
                },
                p = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = l.forwardRef(h);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => F });
            o(136728);
            var n = o(202784),
                l = o(638236),
                i = o(811176),
                r = o(111677),
                s = o.n(r),
                a = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                h = o(847607),
                p = o(417714),
                m = o(988823);
            const b = "block",
                f = "mute",
                w = "removeFollower",
                g = "report",
                y = "share",
                C = s().j7bb1a43,
                _ = s().hef5960c,
                F = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: r, onMute: s, onRemoveFollower: m, onReportUser: F, onShare: v, onUnblock: B, onUnmute: S, user: Z } = e,
                        k = [],
                        E = (t, o) => {
                            const { confirm: n, onClose: l } = e;
                            if (t) {
                                const { label: e, ...i } = t;
                                n({ confirmButtonLabel: e, ...i })
                                    .then(o, c.Z)
                                    .finally(l);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !Z.protected &&
                        !Z.blocking &&
                        !Z.blocked_by &&
                        k.push({
                            Icon: l.Z,
                            onClick: () => {
                                r(), v();
                            },
                            testID: y,
                            text: _,
                        });
                    !Z.blocking &&
                        k.push({
                            ...(0, h.N1)(
                                Z,
                                () => {
                                    r(), s();
                                },
                                () => {
                                    r(), S();
                                },
                            ),
                            testID: f,
                        });
                    Z.followed_by &&
                        k.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    E(e, m);
                                },
                                user: Z,
                            }),
                            testID: w,
                        }),
                        k.push((0, u.op)({ blockAction: (e) => E(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: b, unblockAction: (e) => E(e, B), user: Z })),
                        k.push({
                            Icon: a.default,
                            onClick: () => {
                                r(), F();
                            },
                            testID: g,
                            text: C({ screenName: Z.screen_name }),
                        });
                    const x = k.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(i.Z, { items: x, onCloseRequested: r });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => p });
            var n = o(202784),
                l = o(325686),
                i = o(108362),
                r = o(386802),
                s = o(392237),
                a = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: r, hideBackButton: s, history: a, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: w, subtitle: g, title: y } = this.props,
                                { isModal: C } = this.context;
                            return n.createElement(l.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: i, centerTitle: r, fixed: !C, hideBackButton: s, history: a, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: w, style: [C && m.appBarModal, t], subtitle: g, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: r, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: w } = this.context,
                        g = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(a.Z, null, n.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: b }), n.createElement(l.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && g, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, w && m.containerModal, r] }, w ? n.createElement(h.Z, { style: m.viewport }, g, o) : o), t ? n.createElement(l.Z, { style: [m.bottomBarModal, !w && !f && m.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = r.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(807896),
                l = o(202784),
                i = o(229333),
                r = o(414939),
                s = o(334346);
            const a = ({ accessibilityTitle: e, footer: t = l.createElement(r.Z, null), ...o }) => {
                const a = l.createElement(s.C, (0, n.Z)({}, o, { footer: t }));
                return e ? l.createElement(i.Z, { title: e }, a) : a;
            };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => a, Z: () => s });
            var n = o(807896),
                l = o(202784),
                i = o(524084),
                r = o(768572);
            const s = "stable_sort_index",
                a = l.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return l.createElement(r.ZP, { identifier: o }, l.createElement(i.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(807896),
                l = o(202784),
                i = o(771099);
            const r = (e) => (t) => l.createElement(i.$6, null, (o) => l.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                l = o(154003),
                i = o(111677),
                r = o.n(i),
                s = o(74514),
                a = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                h = o(668214),
                p = o(257166),
                m = o(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                f = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                w = r().bdba3e1a,
                g = r().c4da7d28,
                y = r().j87c21f4,
                C = r().iebc30ca,
                _ = r().dc740eb2;
            class F extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(l.ZP, { "aria-label": g, hoverLabel: { label: C }, icon: n.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(l.ZP, { "aria-label": w, hoverLabel: { label: y }, icon: n.createElement(a.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = f(F);
        },
        23134: (e, t, o) => {
            o.d(t, { C: () => z });
            o(136728);
            var n = o(202784),
                l = o(190286),
                i = o(723587),
                r = o(111677),
                s = o.n(r),
                a = o(615656),
                c = o(666670),
                d = o(757953),
                u = o(879596),
                h = o(323683),
                p = o(479506),
                m = o(942893),
                b = o(500002),
                f = o(233391),
                w = o(288955),
                g = o(71620),
                y = o(668214),
                C = o(390387),
                _ = o(601576),
                F = o(919022);
            const v = (e, t) => t.user || F.ZP.select(e, t.userId),
                B = (0, y.Z)()
                    .propsFromState(() => ({ isLoggedIn: C.Qb, user: v }))
                    .propsFromActions(() => ({ addToast: _.fz, cancelPendingFollow: F.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, g.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: F.ZP.fetchOneIfNeeded, follow: F.ZP.follow, unblock: F.ZP.unblock, unfollow: F.ZP.unfollow }))
                    .withAnalytics(),
                S = (e) => `${e}-follow`,
                Z = (e) => `${e}-unfollow`,
                k = (e) => `${e}-block`,
                E = (e) => `${e}-unblock`,
                x = (e) => `${e}-cancel`,
                T = (e) => `${e}-subscribe`,
                L = (e) => `${e}-manageSubscription`,
                P = s().hbe4feb5,
                I = s().df4c86b0,
                D = s().bba40ffa,
                M = s().f558829e,
                H = s().a6941096,
                R = s().j24c37b2,
                U = s().if8cd2a4,
                A = s().b5972260;
            class N extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: o, userId: n } = this.props;
                            n && !o && t(n).catch(e(c.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: o } = this.props;
                            o && e(o.id_str).catch(t({ defaultToast: { text: A }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: o, isFollowNudge: n, onFollowClick: l, promotedContent: i, user: r } = this.props;
                            r && o(r.id_str, { promotedContent: i, isFollowNudge: n }).then(() => (r.protected && e({ text: P({ screenName: r.screen_name }) }), l && l(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: o, user: n } = this.props;
                            n && (o(n.id_str, { promotedContent: t }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: o, user: n } = this.props;
                            if (n) return o(n.id_str, { promotedContent: t }).catch(e(h.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: o } = this.props;
                            if (o) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${o.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...d.H,
                            [a.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: U, dialogHeadline: D });
                                },
                            },
                            [a.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: H, dialogHeadline: D });
                                },
                            },
                            [a.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: M, dialogHeadline: I });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: o, isTransparent: r, relationshipMode: s, showRelationshipChangeConfirmation: a, size: c, style: d, user: u, userId: h } = this.props,
                        { dialogHeadline: p, dialogText: m, showDialog: b } = this.state,
                        g = u?.screen_name,
                        y = g ? `/${g}` : "",
                        C = { follow: S(h), unfollow: Z(h), cancel: x(h), block: k(h), unblock: E(h), subscribe: T(h), manageSubscription: L(h) },
                        _ = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        n.createElement(
                            n.Fragment,
                            null,
                            b ? n.createElement(l.Z, { confirmButtonLabel: R, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: m, withCancelButton: !1 }) : null,
                            n.createElement(w.Z, { displayMode: f.BH.follow, postLoginPath: y, userFullName: u.name, userId: h }, (l) => n.createElement(i.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: _, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!o && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: r, name: g, onCancelPendingFollow: l(this._handleCancelPendingFollow), onFollow: l(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: l(this._handleSuperFollow), onUnSuperFollow: l(this._handleUnSuperFollow), onUnblock: l(this._handleUnblock), onUnfollow: l(this._handleUnfollow), relationshipMode: s, showRelationshipChangeConfirmation: t && a, size: c, style: d, testIDs: C, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: o } = e,
                        { analytics: n, location: l, promotedContent: i, user: r } = this.props,
                        { items: s } = n.contextualScribeData,
                        a = s?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === r?.id_str),
                        c = [];
                    r ? c.push({ ...a, ...m.Z.getUserItem(r, i) }) : a && c.push(a);
                    const d = l.query && l.query.screen_name ? { items: c, context: "profile_intent" } : { items: c };
                    return n.scribe({ element: o, action: t, data: d });
                }
            }
            const z = (0, b.ZP)(B(N));
        },
        292257: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                l = o(325686),
                i = o(154003),
                r = o(392237),
                s = o(111677),
                a = o.n(s);
            const c = a().da878dc0,
                d = a().ec2d8342,
                u = r.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                h = ({ onAccept: e, onDecline: t }) => n.createElement(l.Z, { style: u.root }, n.createElement(i.ZP, { "aria-label": d, onPress: t, size: "small", style: [u.followerRequestActionButton, u.declineButton], type: "destructiveOutlined" }, d), n.createElement(i.ZP, { "aria-label": c, onPress: e, size: "small", style: u.followerRequestActionButton, type: "brandOutlined" }, c));
            var p = o(68292),
                m = o(71620),
                b = o(668214),
                f = o(466036);
            const w = (0, b.Z)().propsFromActions(() => ({ acceptPendingFollower: f.WC, createLocalApiErrorHandler: (0, m.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: f.X }));
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(p.D));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(p.D));
                        });
                }
                render() {
                    return n.createElement(h, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const y = w(g);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                l = o(500002),
                i = o(668214),
                r = o(997174),
                s = o(118823);
            const a = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: l,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let a = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (a = !0));
                    const c = l || s;
                    ((c && l !== s) || (!c && o !== i) || n !== r || a) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, l.ZP)(a(c));
        },
        288955: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(807896),
                l = o(202784),
                i = o(443781),
                r = o(369241);
            class s extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (o, ...n) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(o, ...n) : (o && o.preventDefault && o.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...o } = this.props;
                    return l.createElement(l.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && l.createElement(r.ZP, (0, n.Z)({ onClose: this._handleClose }, o)));
                }
            }
            (s.defaultProps = { disabled: !1 }), (s.contextType = i.rC);
            const a = s;
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                l = o(476984),
                i = o.n(l),
                r = o(143778),
                s = o(750410),
                a = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: l, icon: i, loadingMessage: r, onRequestRetry: d, render: p, renderFailure: m, retryMessage: b, retryable: f } = this.props;
                    switch (l) {
                        case c:
                            return f ? n.createElement(s.Z, { icon: i, onRequestRetry: d, retryMessage: b }) : o ? n.createElement(a.m, { failureMessage: o }) : m();
                        case u:
                            return n.createElement(a.J, { "aria-label": e, color: t, loadingMessage: r });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => he });
            var n = o(202784),
                l = o(614983),
                i = o.n(l),
                r = o(111677),
                s = o.n(r),
                a = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const h = s().i8cfb6e6,
                p = s().ea100d6a,
                m = s().fe40537f,
                b = s().ab7c3460,
                f = s().i58d8718,
                w = n.createElement(c.default, null),
                g = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: l, size: i, style: r, testID: s, userScreenName: a }) => n.createElement(u.Z, { buttonDefaultLabel: h, buttonHoverLabel: p, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: p, confirmationSheetHeadline: m({ screenName: a }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: w, onClick: o, showRelationshipChangeConfirmation: l, size: i, style: r, testID: s });
            var y = o(466999),
                C = o(76388),
                _ = o(911373),
                F = o(733357),
                v = o(352924),
                B = o(392237);
            const S = s().ee05e96b,
                Z = s().f238ba1d,
                k = s().aeb6f0a0,
                E = s().a77a27c0,
                x = s().b4397192,
                T = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                L = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                P = B.default.create((e) => ({ hidden: { display: "none" } })),
                I = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: l, id: i, isSuperFollowEligible: r, isSuperFollowing: s, isTransparent: a, name: c, onSuperFollow: d, onUnSuperFollow: h, size: p, style: m, testID: b }) => {
                    const f = n.useCallback(() => {
                            s ? h() : r && d();
                        }, [r, s, d, h]),
                        w = void 0 !== c ? `@${String(c)}` : "",
                        g = s ? E : k,
                        C = w.length > 0 && void 0 !== g ? Z({ followType: g, screenName: w }) : "",
                        _ = s ? x : k,
                        B = s ? L(a) : t ? void 0 : T(a),
                        I = n.useMemo(() => (void 0 !== e ? e : (0, v.F)()), [e]),
                        D = n.useCallback(() => {
                            const e = s ? E : r ? S({ followType: k, screenName: c }) : null;
                            return e && !(0, F.Z)(e) ? n.createElement(y.Z, { id: I, style: P.hidden }, e) : null;
                        }, [s, r, I, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": I, "aria-label": C, buttonDefaultLabel: g, buttonHoverLabel: _, buttonType: t, customButtonConfig: B, disabled: o, displayMode: l, id: i, onClick: f, size: p, style: m, testID: b }), void 0 === e ? D() : null);
                },
                D = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                M = s().cda66545,
                H = s().ee05e96b,
                R = s().a8d77a25,
                U = s().d0f4f3d9,
                A = s().f238ba1d,
                N = s().j6161cab,
                z = s().i4bb9ef7,
                O = s().ge753264,
                W = s().b837c0e8,
                q = n.createElement(C.default, null),
                $ = n.createElement(_.default, null),
                V = s().ddac1f1d,
                j = s().j8e33c40;
            class J extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, v.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, F.Z)(o) ? null : n.createElement(y.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: l, type: i } = this.props;
                            let r = "";
                            const s = void 0 === l ? "" : l;
                            switch (i) {
                                case D.user:
                                case D.topic:
                                case D.list:
                                    n && e.unSuperFollow ? (r = e.unSuperFollow) : t ? (r = o ? H({ followType: e.superFollow, screenName: s }) : M({ followType: e.unfollow, screenName: s })) : t || (r = M({ followType: e.follow, screenName: s }));
                                    break;
                                case D.community:
                                    r = t ? R({ screenName: s }) : M({ followType: e.follow, screenName: s });
                                    break;
                                case D.spaces:
                                    t ? (r = M({ followType: e.unfollow, screenName: s })) : t || (r = M({ followType: e.follow, screenName: s }));
                                    break;
                                default:
                                    r = "";
                            }
                            return r;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                l = z({ title: t }),
                                i = { [D.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: O }, [D.topic]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: W }, [D.list]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: void 0 }, [D.community]: { ariaFollowName: n, confirmationHeadline: V({ communityName: t }), confirmationSheetText: j }, [D.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: N({ screenName: t }), confirmationSheetText: O } };
                            return { ariaFollowName: i[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || i[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || i[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: l, onUnSuperFollow: i, onUnfollow: r } = this.props;
                            o ? i() : e ? (t ? l() : r()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: l, id: i, isFollowed: r, isFollowing: s, isSuperFollowEligible: a, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: h, size: p, style: m, testID: b, type: f, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: g, confirmationHeadline: y, confirmationSheetText: C, followBackLabel: _, followLabel: F, followingLabel: v, superFollowLabel: B, superFollowingLabel: S, unSuperFollowLabel: Z, unfollowLabel: k } = this._getText(),
                        { hasJustFollowed: E } = this.state,
                        x = (t && t.followIcon) || $,
                        P = (t && t.followingIcon) || q,
                        I = "only-text" !== l ? (s ? P : x) : void 0;
                    let M = s ? v : F;
                    r && !s && _ && (M = _);
                    let H = U;
                    (c || (s && a)) && (c && S ? ((H = A), (M = S)) : a && B && ((H = A), (M = B)));
                    const R = g.length > 0 && void 0 !== M ? H({ followType: M, screenName: g }) : "",
                        N = "primaryFilled";
                    let z, O, W, V;
                    const j = d ? "brandText" : N,
                        J = d ? "destructiveText" : "destructiveOutlined",
                        G = !c && (!s || !a) && s,
                        Q = s ? "onMediaWhiteFilled" : "onMediaOutlined",
                        K = s ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === D.community ? (z = s ? k : F) : f === D.spaces ? ((z = s ? k : F), (O = Q), (W = K)) : c && Z ? ((V = L(d)), (z = Z)) : s ? ((z = E ? v : k), (O = E ? j : J), (W = d ? "brandText" : "primaryOutlined"), a && B && ((V = T(d)), (z = B), (W = void 0), (O = void 0))) : ((z = r && _ ? _ : F), (O = d ? "brandText" : N), (W = d ? "brandText" : N));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": R, buttonDefaultLabel: M, buttonHoverLabel: z, buttonHoverType: O, buttonType: W, confirmationSheetConfirmLabel: k, confirmationSheetHeadline: y, confirmationSheetText: w ? C : void 0, customButtonConfig: V, disabled: o, displayMode: l, icon: I, id: i, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: G && h, size: p, style: m, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const G = J;
            var Q = o(311687);
            const K = s().f305840e,
                X = s().e23b20a0,
                Y = s().fe04d89a,
                ee = s().i036327c,
                te = s().j95e3097,
                oe = n.createElement(Q.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: l, size: i, style: r, testID: s, userScreenName: a }) => n.createElement(u.Z, { buttonDefaultLabel: K, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: a }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: l, size: i, style: r, testID: s }),
                le = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                ie = s().ec72e2f8,
                re = s().a5f7ce12,
                se = s().c3befdbe,
                ae = s().d3029dbc,
                ce = s().aeb6f0a0,
                de = s().a77a27c0,
                ue = s().b4397192;
            class he extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: l, disabled: i, displayMode: r, id: s, isBlocking: a, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: p, isTransparent: m, name: b, onCancelPendingFollow: f, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnblock: _, onUnfollow: F, relationshipMode: v, showRelationshipChangeConfirmation: B, size: S, style: Z, testIDs: k, type: E, withConfirmationSheetText: x } = this.props,
                        T = a,
                        L = c,
                        P = v === le.subscribe && (h || p);
                    return T ? n.createElement(g, { disabled: i, displayMode: r, onUnblock: _, showRelationshipChangeConfirmation: B, size: S, style: Z, testID: k?.unblock, userScreenName: b }) : L ? n.createElement(ne, { disabled: i, displayMode: r, onCancelPendingFollow: f, showRelationshipChangeConfirmation: B, size: S, style: Z, testID: k?.cancel, userScreenName: b }) : P ? n.createElement(I, { "aria-describedby": e, buttonType: l, disabled: i, displayMode: r, id: s, isSuperFollowEligible: h, isSuperFollowing: p, isTransparent: m, name: b, onSuperFollow: y, onUnSuperFollow: C, size: S, style: Z, testID: p ? k?.manageSubscription : k?.subscribe }) : n.createElement(G, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: i, displayMode: r, id: s, isFollowed: d, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: p, isTransparent: m, name: b, onFollow: w, onSuperFollow: y, onUnSuperFollow: C, onUnfollow: F, showRelationshipChangeConfirmation: B, size: S, style: Z, testID: u ? k?.unfollow : k?.follow, type: E, withConfirmationSheetText: x });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    i()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            he.defaultProps = { buttonText: { follow: ie, followBack: re, following: se, unfollow: ae, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: a.Z, onSuperFollow: a.Z, onUnblock: a.Z, onUnSuperFollow: a.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                l = o(202784),
                i = o(325686),
                r = o(154003),
                s = o(190286),
                a = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends l.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    o = this._containerRef?.offsetWidth;
                                let n = 0;
                                t && o && (n = o ? t : o), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: l, customButtonHoverBackgroundColor: i, customButtonHoverBorderColor: r, customButtonHoverColor: s } = t,
                                a = { color: l, backgroundColor: o, borderColor: n };
                            return e && ((a.color = s || l), (a.backgroundColor = i || o), (a.borderColor = r || n)), a;
                        }),
                        (this._handleButtonPress = (e) => {
                            e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({ showConfirmation: !0 }) : ((this._minWidth = 0), this.forceUpdate(), this.props.onClick());
                        }),
                        (this._handleConfirm = (e) => {
                            (this._minWidth = 0), this.setState({ showConfirmation: !1 }), this.props.onClick(), this._buttonRef?.focus();
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 }), this._buttonRef?.focus();
                        }),
                        (this._handleHoverIn = () => {
                            this._handleLabelMeasure(!0);
                        }),
                        (this._setButtonRef = (e) => {
                            this._buttonRef = e;
                        }),
                        (this._setContainerRef = (e) => {
                            (this._containerRef = e), this._handleLabelMeasure();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                componentDidUpdate(e) {
                    e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure();
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: h, confirmationSheetConfirmLabel: p, confirmationSheetHeadline: m, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: w, displayMode: g, icon: y, id: C, onHoverOut: _, size: F, style: v, testID: B } = this.props,
                        S = [v, { minWidth: this._minWidth }];
                    return l.createElement(
                        i.Z,
                        { ref: this._setContainerRef, style: S },
                        l.createElement(a.Z, { onHoverIn: this._handleHoverIn, onHoverOut: _ }, ({ isHovered: i }) => {
                            const s = i ? c : o,
                                a = i && d ? d : u,
                                h = this._getCustomButtonProps(i);
                            return l.createElement(r.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === g ? s : t, disabled: w, icon: "only-text" !== g ? y : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: F, testID: B, type: a }, h), "only-icon" === g ? void 0 : s);
                        }),
                        this.state.showConfirmation ? l.createElement(s.Z, { cancelButtonLabel: h, confirmButtonLabel: p, confirmButtonType: b, headline: m, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => a });
            var n = o(202784),
                l = o(890601),
                i = o(783427),
                r = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const a = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-6107ac1a.6a22b94a.js.map

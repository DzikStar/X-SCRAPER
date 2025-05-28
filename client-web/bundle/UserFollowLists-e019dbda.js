"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserFollowLists-e019dbda"],
    {
        333241: (e, o, t) => {
            t.d(o, { Z: () => y });
            t(136728);
            var r = t(202784),
                n = t(638236),
                s = t(811176),
                l = t(111677),
                a = t.n(l),
                i = t(415506),
                d = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                p = t(417714),
                f = t(988823);
            const w = "block",
                m = "mute",
                _ = "removeFollower",
                b = "report",
                D = "share",
                g = a().j7bb1a43,
                P = a().hef5960c,
                y = (0, f.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: l, onMute: a, onRemoveFollower: f, onReportUser: y, onShare: E, onUnblock: I, onUnmute: Z, user: F } = e,
                        S = [],
                        v = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...s } = o;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(t, d.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !F.protected &&
                        !F.blocking &&
                        !F.blocked_by &&
                        S.push({
                            Icon: n.Z,
                            onClick: () => {
                                l(), E();
                            },
                            testID: D,
                            text: P,
                        });
                    !F.blocking &&
                        S.push({
                            ...(0, h.N1)(
                                F,
                                () => {
                                    l(), a();
                                },
                                () => {
                                    l(), Z();
                                },
                            ),
                            testID: m,
                        });
                    F.followed_by &&
                        S.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    v(e, f);
                                },
                                user: F,
                            }),
                            testID: _,
                        }),
                        S.push((0, u.op)({ blockAction: (e) => v(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: w, unblockAction: (e) => v(e, I), user: F })),
                        S.push({
                            Icon: i.default,
                            onClick: () => {
                                l(), y();
                            },
                            testID: b,
                            text: g({ screenName: F.screen_name }),
                        });
                    const M = S.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(s.Z, { items: M, onCloseRequested: l });
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => l });
            var r = t(807896),
                n = t(202784),
                s = t(771099);
            const l = (e) => (o) => n.createElement(s.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        507651: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(807896),
                n = t(202784),
                s = t(107267),
                l = t(403556),
                a = t(791632);
            const i = (e) => {
                    const o = (0, s.useHistory)();
                    return n.createElement(l.Z, (0, r.Z)({}, e, { isCompact: (0, a.HD)(o) }));
                },
                d = n.memo(i);
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => E });
            var r = t(202784),
                n = t(154003),
                s = t(111677),
                l = t.n(s),
                a = t(74514),
                i = t(405303),
                d = t(684511),
                c = t(860174),
                u = t(71620),
                h = t(668214),
                p = t(257166),
                f = t(919022);
            const w = (e, o) => !(!o.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                m = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: w }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: f.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                _ = l().bdba3e1a,
                b = l().c4da7d28,
                D = l().j87c21f4,
                g = l().iebc30ca,
                P = l().dc740eb2;
            class y extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: r.createElement(a.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": _, hoverLabel: { label: D }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: P }) : null, this._renderButton());
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
            const E = m(y);
        },
        23134: (e, o, t) => {
            t.d(o, { C: () => $ });
            t(136728);
            var r = t(202784),
                n = t(190286),
                s = t(723587),
                l = t(111677),
                a = t.n(l),
                i = t(615656),
                d = t(666670),
                c = t(757953),
                u = t(879596),
                h = t(323683),
                p = t(479506),
                f = t(942893),
                w = t(500002),
                m = t(233391),
                _ = t(288955),
                b = t(71620),
                D = t(668214),
                g = t(390387),
                P = t(601576),
                y = t(919022);
            const E = (e, o) => o.user || y.ZP.select(e, o.userId),
                I = (0, D.Z)()
                    .propsFromState(() => ({ isLoggedIn: g.Qb, user: E }))
                    .propsFromActions(() => ({ addToast: P.fz, cancelPendingFollow: y.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, b.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: y.ZP.fetchOneIfNeeded, follow: y.ZP.follow, unblock: y.ZP.unblock, unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                Z = (e) => `${e}-follow`,
                F = (e) => `${e}-unfollow`,
                S = (e) => `${e}-block`,
                v = (e) => `${e}-unblock`,
                M = (e) => `${e}-cancel`,
                C = (e) => `${e}-subscribe`,
                k = (e) => `${e}-manageSubscription`,
                A = a().hbe4feb5,
                L = a().df4c86b0,
                O = a().bba40ffa,
                T = a().f558829e,
                N = a().a6941096,
                U = a().j24c37b2,
                x = a().if8cd2a4,
                R = a().b5972260;
            class H extends r.Component {
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
                            t && e(t.id_str).catch(o({ defaultToast: { text: R }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: o, follow: t, isFollowNudge: r, onFollowClick: n, promotedContent: s, user: l } = this.props;
                            l && t(l.id_str, { promotedContent: s, isFollowNudge: r }).then(() => (l.protected && e({ text: A({ screenName: l.screen_name }) }), n && n(), this._scribe({ action: "follow" })), o({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
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
                                    this.setState({ showDialog: !0, dialogText: x, dialogHeadline: O });
                                },
                            },
                            [i.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: O });
                                },
                            },
                            [i.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: T, dialogHeadline: L });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: o, isSuperFollowSubscriptionEnabled: t, isTransparent: l, relationshipMode: a, showRelationshipChangeConfirmation: i, size: d, style: c, user: u, userId: h } = this.props,
                        { dialogHeadline: p, dialogText: f, showDialog: w } = this.state,
                        b = u?.screen_name,
                        D = b ? `/${b}` : "",
                        g = { follow: Z(h), unfollow: F(h), cancel: M(h), block: S(h), unblock: v(h), subscribe: C(h), manageSubscription: k(h) },
                        P = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        r.createElement(
                            r.Fragment,
                            null,
                            w ? r.createElement(n.Z, { confirmButtonLabel: U, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: f, withCancelButton: !1 }) : null,
                            r.createElement(_.Z, { displayMode: m.BH.follow, postLoginPath: D, userFullName: u.name, userId: h }, (n) => r.createElement(s.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: P, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!t && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: l, name: b, onCancelPendingFollow: n(this._handleCancelPendingFollow), onFollow: n(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: n(this._handleSuperFollow), onUnSuperFollow: n(this._handleUnSuperFollow), onUnblock: n(this._handleUnblock), onUnfollow: n(this._handleUnfollow), relationshipMode: a, showRelationshipChangeConfirmation: o && i, size: d, style: c, testIDs: g, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: o, element: t } = e,
                        { analytics: r, location: n, promotedContent: s, user: l } = this.props,
                        { items: a } = r.contextualScribeData,
                        i = a?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === l?.id_str),
                        d = [];
                    l ? d.push({ ...i, ...f.Z.getUserItem(l, s) }) : i && d.push(i);
                    const c = n.query && n.query.screen_name ? { items: d, context: "profile_intent" } : { items: d };
                    return r.scribe({ element: t, action: o, data: c });
                }
            }
            const $ = (0, w.ZP)(I(H));
        },
        652904: (e, o, t) => {
            t.d(o, { Z: () => c });
            var r = t(202784),
                n = t(500002),
                s = t(668214),
                l = t(997174),
                a = t(118823);
            const i = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: l.NH }))
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
                            location: { pathname: s, search: l },
                            locationKey: a,
                        } = e;
                    let i = !1;
                    o.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && o.pathname === t && ((this._isInBackground = !1), (i = !0));
                    const d = n || a;
                    ((d && n !== a) || (!d && t !== s) || r !== l || i) && this._performPageUpdates(this.props);
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
                l = t(369241);
            class a extends n.Component {
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
                    return n.createElement(n.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && n.createElement(l.ZP, (0, r.Z)({ onClose: this._handleClose }, t)));
                }
            }
            (a.defaultProps = { disabled: !1 }), (a.contextType = s.rC);
            const i = a;
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
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => l });
            var r = t(111677),
                n = t.n(r),
                s = t(437358);
            const l = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    l = (0, n().d78131b9)({ screenName: r });
                return { Icon: s.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => b, GS: () => a, N1: () => p, PY: () => h, X6: () => D, cm: () => i });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(391366),
                l = t(40904);
            const a = n().hb568af4,
                i = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                p = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? t : o, Icon: r ? s.default : l.default };
                },
                f = n().h59f52ee,
                w = n().eea0cbee,
                m = n().i29533b3,
                _ = n().h129c3c3,
                b = (e) => (e ? ((e) => m({ screenName: e }))(e) : f),
                D = (e) => (e ? ((e) => _({ screenName: e }))(e) : w);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                s = t(224823);
            const l = n().b3036480,
                a = n().b3036480,
                i = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: s.default, text: l, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: a, label: i, text: d({ screenName: e.screen_name }) });
        },
        666670: (e, o, t) => {
            t.d(o, { F: () => l });
            var r = t(516951),
                n = t(615656),
                s = t(51525);
            const l = { [n.ZP.AddressBookLookupNotFound]: { customAction: s.vv }, [n.ZP.GenericUserNotFound]: { customAction: r.Z }, [n.ZP.OtherUserSuspended]: { customAction: r.Z }, showToast: !0 };
        },
        757953: (e, o, t) => {
            t.d(o, { H: () => f });
            var r = t(111677),
                n = t.n(r),
                s = t(516951),
                l = t(615656),
                a = t(51525);
            const i = n().j4292c24,
                d = n().a0ba5842,
                c = n().i859a9d4,
                u = n().a5202b82,
                h = n().f8cbf714,
                p = n().f2e66452,
                f = { defaultToast: { text: u }, [l.ZP.CurrentUserSuspended]: { toast: { text: p, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [l.ZP.DuplicateFollowRequest]: { customAction: s.Z }, [l.ZP.FollowBlockedUserError]: { toast: { text: i } }, [l.ZP.FollowError]: { customAction: a.w1 }, [l.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [l.ZP.TargetUserNotFound]: { toast: { text: h } } };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().a30b63da }, showToast: !0 };
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
        42508: (e, o, t) => {
            t.d(o, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, o, t) => {
            t.d(o, { ZP: () => n, n5: () => l });
            var r = t(42508);
            const n = ({ displaySensitiveMedia: e, isNotFound: o, isSuspended: t, isWithheld: r, user: n, userProfileInterstitialType: l, viewerUserId: a }) => {
                    const i = !!a && a === n.id_str,
                        d = n.blocked_by,
                        c = n.blocking,
                        u = s({ displaySensitiveMedia: e, isOwnProfile: i, user: n, userProfileInterstitialType: l }),
                        h = (i || !r) && !t;
                    return { avatar: i || (!u && !o && !t && !r), badges: i || !r, description: i || (!c && !d && !u && !t && !r), followButton: !(i || d || u || o || t || r), followersYouKnow: !i && !d && !c && !u && !o && !t && !r && (n.following || !n.protected), followIndicator: !r, fullName: h, label: h, stats: i || (!d && !u && !t && !r), subscriptionsCount: i || !n.has_hidden_subscriptions_on_profile };
                },
                s = ({ displaySensitiveMedia: e, isOwnProfile: o, user: t, userProfileInterstitialType: n }) => (n === r.Z.SensitiveMedia || n === r.Z.OffensiveProfileContent) && !(o || t.following || e),
                l = ({ isOwnProfile: e, isSoftBlockEnabled: o = !1, user: t }) => {
                    const r = t.blocked_by,
                        n = t.protected && !t.following;
                    return o ? e || !n : e || (!n && !r);
                };
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => l });
            var r = t(807896),
                n = t(202784),
                s = t(190286);
            const l = (e) => (o) => {
                const [t, l] = n.useState(null),
                    a = (e) =>
                        new Promise((o, t) => {
                            l({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: a } = t;
                    return n.createElement(
                        s.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), l(null);
                            },
                            onConfirm: () => {
                                a(), l(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, o, { confirm: a }));
            };
        },
        882122: (e, o, t) => {
            t.d(o, { Hq: () => b, c1: () => f, lP: () => m, og: () => w });
            var r = t(745123);
            var n = t(499627),
                s = t(917799),
                l = t(56519),
                a = t(919022);
            const i = "knownFollowers",
                d = `rweb/${i}`,
                c = [],
                u = (0, s.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                h = {};
            n.Z.register({
                [i]: function (e = h, o) {
                    if (!o) return e;
                    if (o.type === u.SUCCESS) {
                        const t = o.payload || {},
                            { total_count: r, users: n } = t && t.result,
                            { user_id: s } = o.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: r, knownFollowerIds: n } } : e;
                    }
                    return e;
                },
            });
            const p = (e, o) => e[i][o],
                f = (e, o) => {
                    if (o) {
                        const n = _(e, o);
                        return (t = a.ZP.selectMany(e, n)), (r = (e) => !!e), t.filter(r);
                    }
                    var t, r;
                    return c;
                },
                w = (e, o) => f(e, o).filter(({ name: e, profile_image_url_https: o }) => !!o?.length && !!e?.length),
                m = (e, o) => {
                    let t;
                    if (o) {
                        const r = p(e, o);
                        t = r?.knownFollowersCount;
                    }
                    return t;
                },
                _ = (e, o) => {
                    const t = p(e, o);
                    return t?.knownFollowerIds || c;
                },
                b =
                    (e) =>
                    (o, t, { api: n }) =>
                        void 0 !== m(t(), e)
                            ? Promise.resolve()
                            : o(
                                  (
                                      (e) =>
                                      (o, t, { api: n }) =>
                                          (0, s._O)(o, { request: n.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: o } = e;
                                                  return o ? [(0, l.dP)(o)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => m, dS: () => w, iY: () => _ });
            var r = t(370751),
                n = t(399896),
                s = t(663550),
                l = t(499627),
                a = t(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                h = (0, r.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                p = (e) => ({ payload: { eventKey: e }, type: c });
            const f = (e, o) => !!e.promotedContent[o],
                w =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: s, impression_id: l, promoted_trend_id: i } = e,
                            c = `trend-${i}-${s}`;
                        if (h.has(s) && f(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: s, impression_id: l };
                        return (0, a._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(s)) return [p(c)];
                        });
                    },
                m =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (s, l, { api: i }) => {
                        const { event: c, impression_id: h } = r,
                            w = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && f(l(), w)) return Promise.resolve();
                        const m = e && "earned" === e.toLowerCase() ? "1" : null,
                            _ = { ...r, earned: m, epoch_ms: Date.now() };
                        return (0, a._O)(s, { params: _, request: i.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: _ }, (e, o) => {
                            if (!o && u.has(c)) return [p(w)];
                        });
                    },
                _ =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, a._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            l.Z.register({
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
                l = t(255117),
                a = t(166506),
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
                            u = c ? [(0, l.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, l.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
                            h = (0, a.k9)();
                        if (h.selectInitialFetchStatus(o) && !h.selectCanRefresh(o)) {
                            const t = (0, a.f8)(e, o, h);
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
                l = t(466015),
                a = t(919022),
                i = t(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === s.ZP.User ? e.content.id : "",
                                    t = a.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === s.ZP.User && o.content.id === e)) {
                        const o = (0, l.OD)(e),
                            r = (0, l.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        589992: (e, o, t) => {
            t.r(o), t.d(o, { FollowersScreen: () => j, default: () => V });
            var r = t(202784),
                n = t(457311),
                s = t(111677),
                l = t.n(s),
                a = t(912021),
                i = t(718e3),
                d = t(290402),
                c = t(252021),
                u = t(507651),
                h = t(443781),
                p = t(652904),
                f = t(810641),
                w = t(666670),
                m = t(163889),
                _ = t(835546),
                b = t(503768),
                D = t(750085),
                g = t(962741),
                P = t(919022),
                y = t(218951);
            const E = (e) => (o, t) => {
                const r = t(),
                    n = e.selectEntries(r).filter((e) => {
                        if (!e.content || e.type !== g.ZP.User) return !1;
                        const o = e.content.id,
                            t = P.ZP.select(r, o);
                        return t && !t.followed_by;
                    });
                o(n.map((o) => e.removeEntry(o.entryId)));
            };
            var I = t(615027),
                Z = t(984915),
                F = t(71620),
                S = t(668214),
                v = t(882122),
                M = t(390387);
            const C = (e, o) => o.match.params.screenName,
                k = (e, o) => P.ZP.selectByScreenName(e, C(0, o)),
                A = (e, o) => P.ZP.selectFetchStatusByScreenName(e, C(0, o)),
                L = (e, o) => {
                    const t = ((e, o) => P.ZP.selectIdByScreenName(e, C(0, o)))(e, o);
                    return t ? v.lP(e, t) : void 0;
                },
                O = (e, o) => o.match.params.followersSubroute || o.match.params.creatorSubscriptionsSubroute,
                T = (0, S.Z)()
                    .propsFromState(() => ({ fetchStatus: A, isActiveCreator: M.WM, mode: O, screenName: C, user: k, viewerUserId: M._h, knownFollowersCount: L }))
                    .propsFromActions(() => ({ cleanupOwnFollowersList: E, createLocalApiErrorHandler: (0, F.zr)("USER_PROFILE_FOLLOWERS"), fetchOneUserByScreenNameIfNeeded: P.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: v.Hq }));
            var N = t(269011),
                U = t(335632),
                x = t(240089);
            const R = l().fe9d3afa,
                H = l().fbce8dbe,
                $ = { superfollowers: l().ab7fc3ef, followers_you_follow: l().j0d17377, followers: l().fa9e827f, following: l().ha979be5, subscribers: l().d28be573, subscriptions: l().g9da3853, verified_followers: l().cfd952a1 },
                B = { superfollowers: l().d52a1caa, followers_you_follow: l().i099d32e, followers: l().c64974fc, following: l().d960b55c, subscribers: l().d52a1caa, subscriptions: l().d7b51c68, verified_followers: l().fecc696e },
                G = { superfollowers: l().g0a2fbbe, followers_you_follow: l().g65f4bac, followers: l().c36cfddc, following: l().h0c94842, subscribers: l().g0a2fbbe, subscriptions: l().j7f5c6aa, verified_followers: l().fd275c1a },
                K = { superfollowers: l().e08bd098, followers_you_follow: l().j029a4dc, followers: l().b2b2c6ce, following: l().cb1a15c8, subscribers: l().e08bd098, subscriptions: l().i967b954, verified_followers: l().a44e403e },
                W = { followers_you_follow: l().d74ee2e3, followers: l().c36cfddc, following: l().ae5749c7, verified_followers: l().b5099e33 },
                Q = { followers_you_follow: l().ec251f36, followers: l().b2b2c6ce, following: l().f8af4f48, verified_followers: l().fd0aad94 },
                q = {
                    superfollowers: (e) => (0, y.Z)({ timelineId: `superFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchSuperFollowers, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_SUPER_FOLLOWERS", perfKey: "superFollowersGraphQL", formatResponse: D.Z }),
                    followers_you_follow: (e) => (0, y.Z)({ timelineId: `followersYouKnowGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchFollowersYouKnow, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWERS_YOU_KNOW", perfKey: "followersYouKnowGraphQL", formatResponse: D.Z }),
                    followers: (e) => (0, y.Z)({ timelineId: `followersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchFollowers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWERS", perfKey: "followersGraphQL", formatResponse: D.Z }),
                    following: (e) => (0, y.Z)({ timelineId: `followingGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchFollowing, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_FOLLOWING", perfKey: "followingGraphQL", formatResponse: D.Z }),
                    subscribers: (e) => (0, y.Z)({ timelineId: `UserCreatorSubscribers-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchCreatorSubscribers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIBERS", perfKey: "userCreatorSubscribersGraphQL", formatResponse: D.Z }),
                    subscriptions: (e) => (0, y.Z)({ timelineId: `UserCreatorSubscription-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchCreatorSubscriptions, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_CREATOR_SUBSCRIPTIONS", perfKey: "userCreatorSubscriptionsGraphQL", formatResponse: D.Z }),
                    verified_followers: (e) => (0, y.Z)({ timelineId: `verifiedFollowersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(b.ZP).fetchVerifiedFollowers, getEndpointParams: ({ count: o, cursor: t }) => ({ count: o, cursor: "string" == typeof t ? t : void 0, userId: e }) }, context: "FETCH_VERIFIED_FOLLOWERS", perfKey: "verifiedFollowersGraphQL", formatResponse: D.Z }),
                },
                z = (0, a.Z)((e, o, t, s) => () => {
                    const l = o === e;
                    if (!l && "superfollowers" === s) return (0, m.ZP)("Unexpected rendering of superfollowers empty state"), null;
                    const a = l && "following" === s ? H : void 0,
                        i = l && "following" === s ? "/i/connect_people" : void 0;
                    let d = l ? G[s] : W[s],
                        c = l ? K[s] : Q[s];
                    return "function" == typeof d && (d = d({ screenName: t })), "function" == typeof c && (c = c({ screenName: t })), r.createElement(n.Z, { buttonLink: i, buttonText: a, header: d, message: c });
                });
            class j extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizeModule = (0, a.Z)((e, o) => e && q[o](e))),
                        (this._render = () => {
                            const { mode: e, screenName: o, user: t, viewerUserId: n } = this.props,
                                s = this._getMemoizeModule(t?.id_str, e),
                                l = z(n, t?.id_str, o, e),
                                a = this._isOwnProfile() && "followers" === e,
                                i = this._canViewSubscribersPage(),
                                d = this._canViewSubscriptionsPage();
                            return ("subscribers" === e && !i) || ("subscriptions" === e && !d) ? r.createElement(I.Z, { to: `/${o}` }) : s ? r.createElement(f.Z, { entryConfiguration: this._getMemoizedEntryConfiguration(a), loadingAccessibilityLabel: R, module: s, renderEmptyState: l, title: B[e] }) : null;
                        }),
                        (this._getMemoizedEntryConfiguration = (0, a.Z)((e) => (({ withFollowerActionMenu: e = !1 }) => ({ ...(0, U.G)({}), [g.ZP.User]: (0, N.Z)({ decoration: e ? x.C_ : void 0 }) }))({ withFollowerActionMenu: e }))),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: o, screenName: t } = this.props;
                            o(t).catch(e(w.F));
                        }),
                        (this._canViewSubscribersPage = () => {
                            const { isActiveCreator: e, user: o } = this.props,
                                t = this.context.featureSwitches.isTrue("creator_subscriptions_subscriber_count_enabled"),
                                r = this.context.featureSwitches.getNumberValue("creator_subscriptions_subscriber_count_min_displayed");
                            return (this._isOwnProfile() && e) || (t && o?.subscribers_count && o.subscribers_count >= r);
                        }),
                        (this._canViewSubscriptionsPage = () => {
                            const { user: e } = this.props,
                                o = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                t = this._isOwnProfile();
                            return o && e?.creator_subscriptions_count && e.creator_subscriptions_count > 0 && (t || !e?.has_hidden_subscriptions_on_profile);
                        });
                }
                componentDidMount() {
                    this._handleCleanup(this.props.mode), this._handleFetchUser(), this._fetchKnownFollowersIfNeeded();
                }
                componentDidUpdate(e) {
                    e.mode !== this.props.mode && this._handleCleanup(this.props.mode), this._fetchKnownFollowersIfNeeded();
                }
                render() {
                    const { fetchStatus: e, history: o, knownFollowersCount: t, mode: n, screenName: s, user: l, viewerUserId: a } = this.props,
                        { id_str: h, name: f = "" } = l || {},
                        w = $[n]({ screenName: s, fullName: f }),
                        m = this._isOwnProfile(),
                        b = !l || (0, _.n5)({ isOwnProfile: m, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: l }),
                        D = this._canViewSubscribersPage(),
                        g = this._canViewSubscriptionsPage();
                    if ("superfollowers" === n) return r.createElement(I.Z, { to: `/${s}/creator-subscriptions/subscribers` });
                    const P = [{ key: "verified_followers", to: `/${s}/verified_followers`, label: B.verified_followers }, l && a !== l.id_str && t ? { key: "followers_you_follow", to: `/${s}/followers_you_follow`, label: B.followers_you_follow } : null, { key: "followers", to: `/${s}/followers`, label: B.followers }, { key: "following", to: `/${s}/following`, label: B.following }, D ? { key: "subscribers", to: `/${s}/creator-subscriptions/subscribers`, label: B.subscribers } : null, g ? { key: "subscriptions", to: `/${s}/creator-subscriptions/subscriptions`, label: B.subscriptions } : null];
                    return b ? r.createElement(Z.Z, { scribeSection: n, userId: h }, r.createElement(p.Z, null, r.createElement(c.Z, { backLocation: `/${s}`, documentTitle: w, history: o, primaryContent: r.createElement(d.Z, { "aria-label": R, fetchStatus: e, onRequestRetry: this._handleFetchUser, render: this._render }), secondaryBar: r.createElement(u.Z, { links: P }), sidebarContent: r.createElement(i.Z, null), subtitle: `@${s}`, title: f }))) : r.createElement(I.Z, { to: `/${s}` });
                }
                _fetchKnownFollowersIfNeeded() {
                    const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: o, user: t, viewerUserId: r } = this.props,
                        n = t && t.protected && !t.following && t.id_str !== r;
                    t && t.id_str && !n && o(t.id_str).catch(e({}));
                }
                _isOwnProfile() {
                    const { user: e, viewerUserId: o } = this.props;
                    return !(!e || e.id_str !== o);
                }
                _handleCleanup(e) {
                    if ("followers" === e && this._isOwnProfile()) {
                        const { cleanupOwnFollowersList: o, user: t } = this.props,
                            r = this._getMemoizeModule(t?.id_str, e);
                        r && o(r);
                    }
                }
            }
            j.contextType = h.rC;
            const V = T(j);
        },
        984915: (e, o, t) => {
            t.d(o, { Z: () => i });
            var r = t(202784),
                n = t(912021),
                s = t(443781),
                l = t(293115),
                a = t(942893);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getScribeData = (0, n.Z)((e) => (e ? { items: [a.Z.getUserItem({ id_str: e })], profile_id: e } : void 0))),
                        (this._getScribeNamespace = (0, n.Z)((e, o) => {
                            const t = o ? { section: o } : void 0;
                            return e ? { page: "me", ...t } : { page: "profile", ...t };
                        }));
                }
                render() {
                    const { children: e, scribeSection: o, userId: t } = this.props,
                        n = !!this.context.viewerUserId && t === this.context.viewerUserId,
                        s = this._getScribeNamespace(n, o);
                    return r.createElement(l.nO, { data: this._getScribeData(t), namespace: s }, "function" == typeof e ? e({ scribeNamespace: s }) : e);
                }
            }
            i.contextType = s.rC;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserFollowLists-e019dbda.3b8dc5aa.js.map

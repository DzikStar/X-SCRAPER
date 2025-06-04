"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.UserHandler", "icons/IconFeedback-js"],
    {
        333241: (e, o, t) => {
            t.d(o, { Z: () => C });
            t(136728);
            var n = t(202784),
                l = t(638236),
                r = t(811176),
                a = t(111677),
                i = t.n(a),
                s = t(415506),
                d = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                m = t(417714),
                p = t(988823);
            const f = "block",
                b = "mute",
                w = "removeFollower",
                y = "report",
                D = "share",
                g = i().j7bb1a43,
                _ = i().hef5960c,
                C = (0, p.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: a, onMute: i, onRemoveFollower: p, onReportUser: C, onShare: S, onUnblock: v, onUnmute: F, user: M } = e,
                        P = [],
                        I = (o, t) => {
                            const { confirm: n, onClose: l } = e;
                            if (o) {
                                const { label: e, ...r } = o;
                                n({ confirmButtonLabel: e, ...r })
                                    .then(t, d.Z)
                                    .finally(l);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !M.protected &&
                        !M.blocking &&
                        !M.blocked_by &&
                        P.push({
                            Icon: l.Z,
                            onClick: () => {
                                a(), S();
                            },
                            testID: D,
                            text: _,
                        });
                    !M.blocking &&
                        P.push({
                            ...(0, h.N1)(
                                M,
                                () => {
                                    a(), i();
                                },
                                () => {
                                    a(), F();
                                },
                            ),
                            testID: b,
                        });
                    M.followed_by &&
                        P.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    I(e, p);
                                },
                                user: M,
                            }),
                            testID: w,
                        }),
                        P.push((0, u.op)({ blockAction: (e) => I(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => I(e, v), user: M })),
                        P.push({
                            Icon: s.default,
                            onClick: () => {
                                a(), C();
                            },
                            testID: y,
                            text: g({ screenName: M.screen_name }),
                        });
                    const k = P.map(({ Icon: e, onClick: o, testID: t, text: n }) => ({ text: n, onClick: o, Icon: e, testID: t }));
                    return n.createElement(r.Z, { items: k, onCloseRequested: a });
                });
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => a });
            var n = t(807896),
                l = t(202784),
                r = t(771099);
            const a = (e) => (o) => l.createElement(r.$6, null, (t) => l.createElement(e, (0, n.Z)({}, o, { isInSidebar: t })));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => S });
            var n = t(202784),
                l = t(154003),
                r = t(111677),
                a = t.n(r),
                i = t(74514),
                s = t(405303),
                d = t(684511),
                c = t(860174),
                u = t(71620),
                h = t(668214),
                m = t(257166),
                p = t(919022);
            const f = (e, o) => !(!o.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                w = a().bdba3e1a,
                y = a().c4da7d28,
                D = a().j87c21f4,
                g = a().iebc30ca,
                _ = a().dc740eb2;
            class C extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? n.createElement(l.ZP, { "aria-label": y, hoverLabel: { label: g }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : n.createElement(l.ZP, { "aria-label": w, hoverLabel: { label: D }, icon: n.createElement(s.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(d.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
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
            const S = b(C);
        },
        23134: (e, o, t) => {
            t.d(o, { C: () => U });
            t(136728);
            var n = t(202784),
                l = t(190286),
                r = t(723587),
                a = t(111677),
                i = t.n(a),
                s = t(615656),
                d = t(666670),
                c = t(757953),
                u = t(879596),
                h = t(323683),
                m = t(479506),
                p = t(942893),
                f = t(500002),
                b = t(233391),
                w = t(288955),
                y = t(71620),
                D = t(668214),
                g = t(390387),
                _ = t(601576),
                C = t(919022);
            const S = (e, o) => o.user || C.ZP.select(e, o.userId),
                v = (0, D.Z)()
                    .propsFromState(() => ({ isLoggedIn: g.Qb, user: S }))
                    .propsFromActions(() => ({ addToast: _.fz, cancelPendingFollow: C.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, y.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: C.ZP.fetchOneIfNeeded, follow: C.ZP.follow, unblock: C.ZP.unblock, unfollow: C.ZP.unfollow }))
                    .withAnalytics(),
                F = (e) => `${e}-follow`,
                M = (e) => `${e}-unfollow`,
                P = (e) => `${e}-block`,
                I = (e) => `${e}-unblock`,
                k = (e) => `${e}-cancel`,
                E = (e) => `${e}-subscribe`,
                T = (e) => `${e}-manageSubscription`,
                Z = i().hbe4feb5,
                L = i().df4c86b0,
                x = i().bba40ffa,
                A = i().f558829e,
                B = i().a6941096,
                N = i().j24c37b2,
                H = i().if8cd2a4,
                O = i().b5972260;
            class R extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: o, isRelay: t, userId: n } = this.props;
                            n && !t && o(n).catch(e(d.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: o, user: t } = this.props;
                            t && e(t.id_str).catch(o({ defaultToast: { text: O }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: o, follow: t, isFollowNudge: n, onFollowClick: l, promotedContent: r, user: a } = this.props;
                            a && t(a.id_str, { promotedContent: r, isFollowNudge: n }).then(() => (a.protected && e({ text: Z({ screenName: a.screen_name }) }), l && l(), this._scribe({ action: "follow" })), o({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: o, unblock: t, user: n } = this.props;
                            n && (t(n.id_str, { promotedContent: o }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: o, unfollow: t, user: n } = this.props;
                            if (n) return t(n.id_str, { promotedContent: o }).catch(e(h.X)), this._scribe({ action: "unfollow" });
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
                            [s.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: H, dialogHeadline: x });
                                },
                            },
                            [s.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: B, dialogHeadline: x });
                                },
                            },
                            [s.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: A, dialogHeadline: L });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: o, isSuperFollowSubscriptionEnabled: t, isTransparent: a, relationshipMode: i, showRelationshipChangeConfirmation: s, size: d, style: c, user: u, userId: h } = this.props,
                        { dialogHeadline: m, dialogText: p, showDialog: f } = this.state,
                        y = u?.screen_name,
                        D = y ? `/${y}` : "",
                        g = { follow: F(h), unfollow: M(h), cancel: k(h), block: P(h), unblock: I(h), subscribe: E(h), manageSubscription: T(h) },
                        _ = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        n.createElement(
                            n.Fragment,
                            null,
                            f ? n.createElement(l.Z, { confirmButtonLabel: N, headline: m, onCancel: this._handleClose, onConfirm: this._handleClose, text: p, withCancelButton: !1 }) : null,
                            n.createElement(w.Z, { displayMode: b.BH.follow, postLoginPath: D, userFullName: u.name, userId: h }, (l) => n.createElement(r.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: _, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!t && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: a, name: y, onCancelPendingFollow: l(this._handleCancelPendingFollow), onFollow: l(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: l(this._handleSuperFollow), onUnSuperFollow: l(this._handleUnSuperFollow), onUnblock: l(this._handleUnblock), onUnfollow: l(this._handleUnfollow), relationshipMode: i, showRelationshipChangeConfirmation: o && s, size: d, style: c, testIDs: g, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: o, element: t } = e,
                        { analytics: n, location: l, promotedContent: r, user: a } = this.props,
                        { items: i } = n.contextualScribeData,
                        s = i?.find((e) => e.item_type === m.Z.ItemType.USER && e.id === a?.id_str),
                        d = [];
                    a ? d.push({ ...s, ...p.Z.getUserItem(a, r) }) : s && d.push(s);
                    const c = l.query && l.query.screen_name ? { items: d, context: "profile_intent" } : { items: d };
                    return n.scribe({ element: t, action: o, data: c });
                }
            }
            const U = (0, f.ZP)(v(R));
        },
        168222: (e, o, t) => {
            t.r(o), t.d(o, { default: () => v });
            var n = t(459643),
                l = t(942893),
                r = t(409438),
                a = t(240089),
                i = t(351322),
                s = t(202784),
                d = t(392237),
                c = t(187669),
                u = t(952793),
                h = t(663550),
                m = t(23679);
            const p = (e) => (e ? { disclosure_type: e.disclosureType, impression_id: e.impressionId } : void 0);
            var f = t(668214),
                b = t(204744),
                w = t(919022);
            const y = (e, o) => {
                    const { id: t } = ((e, o) => o.entry.content)(0, o);
                    return t ? w.ZP.select(e, t) : void 0;
                },
                D = (0, f.Z)()
                    .propsFromState(() => ({ user: y }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: b.DI, applyReactionInstructions: e.applyReactionInstructions }))
                    .withAnalytics(),
                g = (e) => {
                    const { analytics: o, applyReactionInstructions: t, cellClickable: n, decoration: i, entry: d, isCarouselItem: f, onClick: b, saveAsRecentSearch: w, shouldScribeImpression: y, shouldScribeProfileClick: D, shouldStoreTypeaheadItem: g, user: C, withFollowsYou: S, withLink: v } = e,
                        {
                            content: { id: F, promotedMetadata: M, socialContext: P },
                        } = d,
                        I = p(M),
                        k = (P && P.generalContext) || void 0,
                        E = e.displayMode,
                        T = (0, u.hC)("super_follow_android_web_subscription_enabled") && E === r.Z.SubscribableUser ? a.dk : a.ET,
                        Z = i || T,
                        L = d.itemMetadata && d.itemMetadata.clientEventInfo && d.itemMetadata.clientEventInfo.details && d.itemMetadata.clientEventInfo.details.timelinesDetails && d.itemMetadata.clientEventInfo.details.timelinesDetails.injectionType;
                    (0, c.q)(() => {
                        if ("WhoToFollow" === L) {
                            const e = C ? [l.Z.getUserItem(C)] : [];
                            C?.following ? o.scribe({ element: "followed_user", action: "impression", data: { items: e } }) : C?.muting ? o.scribe({ element: "muted_user", action: "impression", data: { items: e } }) : C?.blocking && o.scribe({ element: "blocked_user", action: "impression", data: { items: e } });
                        }
                    });
                    const x = s.useCallback(() => {
                        t({ entry: d, triggerName: m.K.ON_FOLLOW });
                    }, [t, d]);
                    return s.createElement(a.Z9, { cellClickable: n, decoration: Z, displayMode: E, isConcise: f, onClick: b, onFollowClick: x, promotedContent: I, promotedItemType: h.bj.USER, referringPage: E, saveAsRecentSearch: w, shouldScribeImpression: y, shouldScribeProfileClick: D, shouldStoreTypeaheadItem: g, socialContext: k, style: f && _.isCarouselItem, userId: F, withFollowsYou: S, withLink: v });
                },
                _ = d.default.create((e) => ({ isCarouselItem: { width: 312 } })),
                C = D(s.memo(g)),
                S = [a.ET, a.C_],
                v = ({ cellClickable: e = !0, decoration: o, displayMode: t = r.Z.UserCompact, isCarouselItem: a, onClick: s, shouldScribeProfileClick: d = !0, shouldScribeImpression: c = !1, shouldStoreTypeaheadItem: u, withLink: h = !0 }) =>
                    i
                        .iH({
                            component: C,
                            defaultScribeNamespace: { element: "user" },
                            getScribeDataItem(e) {
                                const {
                                        content: { id: o, promotedMetadata: t },
                                        cursor: n,
                                        itemMetadata: r,
                                        position: a,
                                    } = e,
                                    i = r.clientEventInfo,
                                    s = p(t);
                                return l.Z.getUserItem({ id_str: o, promoted_content: s }, void 0, a, n, i);
                            },
                            isFocusable: (0, n.Z)(!0),
                        })
                        .getHandler(() => ({ cellClickable: e, decoration: o, displayMode: t, isCarouselItem: a, onClick: s, shouldScribeProfileClick: d, shouldScribeImpression: c, shouldStoreTypeaheadItem: u, withLink: h, withFollowsYou: !o || S.includes(o) }));
        },
        288955: (e, o, t) => {
            t.d(o, { Z: () => s });
            var n = t(807896),
                l = t(202784),
                r = t(443781),
                a = t(369241);
            class i extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, o) =>
                            (t, ...n) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(t, ...n) : (t && t.preventDefault && t.preventDefault(), o && o(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: o, ...t } = this.props;
                    return l.createElement(l.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && l.createElement(a.ZP, (0, n.Z)({ onClose: this._handleClose }, t)));
                }
            }
            (i.defaultProps = { disabled: !1 }), (i.contextType = r.rC);
            const s = i;
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
            t.d(o, { d: () => l });
            var n = t(111677);
            const l = t.n(n)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => a });
            var n = t(111677),
                l = t.n(n),
                r = t(437358);
            const a = (e, o) => {
                const { id_str: t, screen_name: n } = e,
                    a = (0, l().d78131b9)({ screenName: n });
                return { Icon: r.default, text: a, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => y, GS: () => i, N1: () => m, PY: () => h, X6: () => D, cm: () => s });
            t(202784);
            var n = t(111677),
                l = t.n(n),
                r = t(391366),
                a = t(40904);
            const i = l().hb568af4,
                s = l().bb1cbeb6,
                d = (l().h2f62206, l().e67b2d65),
                c = l().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, t) => {
                    const { muting: n, screen_name: l } = e;
                    return { text: n ? h(l) : u(l), onClick: n ? t : o, Icon: n ? r.default : a.default };
                },
                p = l().h59f52ee,
                f = l().eea0cbee,
                b = l().i29533b3,
                w = l().h129c3c3,
                y = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                D = (e) => (e ? ((e) => w({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var n = t(111677),
                l = t.n(n),
                r = t(224823);
            const a = l().b3036480,
                i = l().b3036480,
                s = l().e68b09b4,
                d = l().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: r.default, text: a, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: s, text: d({ screenName: e.screen_name }) });
        },
        666670: (e, o, t) => {
            t.d(o, { F: () => a });
            var n = t(516951),
                l = t(615656),
                r = t(51525);
            const a = { [l.ZP.AddressBookLookupNotFound]: { customAction: r.vv }, [l.ZP.GenericUserNotFound]: { customAction: n.Z }, [l.ZP.OtherUserSuspended]: { customAction: n.Z }, showToast: !0 };
        },
        757953: (e, o, t) => {
            t.d(o, { H: () => p });
            var n = t(111677),
                l = t.n(n),
                r = t(516951),
                a = t(615656),
                i = t(51525);
            const s = l().j4292c24,
                d = l().a0ba5842,
                c = l().i859a9d4,
                u = l().a5202b82,
                h = l().f8cbf714,
                m = l().f2e66452,
                p = { defaultToast: { text: u }, [a.ZP.CurrentUserSuspended]: { toast: { text: m, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [a.ZP.DuplicateFollowRequest]: { customAction: r.Z }, [a.ZP.FollowBlockedUserError]: { toast: { text: s } }, [a.ZP.FollowError]: { customAction: i.w1 }, [a.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [a.ZP.TargetUserNotFound]: { toast: { text: h } } };
        },
        48886: (e, o, t) => {
            t.d(o, { q: () => l });
            var n = t(111677);
            const l = { defaultToast: { text: t.n(n)().a30b63da }, showToast: !0 };
        },
        323683: (e, o, t) => {
            t.d(o, { X: () => l });
            var n = t(111677);
            const l = { defaultToast: { text: t.n(n)().e1a0aaca }, showToast: !0 };
        },
        860174: (e, o, t) => {
            t.d(o, { Z: () => r });
            var n = t(615656),
                l = t(51525);
            const r = { [n.ZP.FollowError]: { customAction: l.w1 } };
        },
        23679: (e, o, t) => {
            t.d(o, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => a });
            var n = t(807896),
                l = t(202784),
                r = t(190286);
            const a = (e) => (o) => {
                const [t, a] = l.useState(null),
                    i = (e) =>
                        new Promise((o, t) => {
                            a({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: i } = t;
                    return l.createElement(
                        r.Z,
                        (0, n.Z)({}, e, {
                            onCancel: () => {
                                o(), a(null);
                            },
                            onConfirm: () => {
                                i(), a(null);
                            },
                        }),
                    );
                }
                return l.createElement(e, (0, n.Z)({}, o, { confirm: i }));
            };
        },
        694180: (e, o, t) => {
            t.d(o, { cM: () => b, dS: () => f, iY: () => w });
            var n = t(370751),
                l = t(399896),
                r = t(663550),
                a = t(499627),
                i = t(917799);
            const s = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, n.Z)([r.dx.IMPRESSION, r.dx.DWELL]),
                h = (0, n.Z)([r.AJ.TREND_VIEW, r.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: n }) => {
                        const { event: r, impression_id: a, promoted_trend_id: s } = e,
                            c = `trend-${s}-${r}`;
                        if (h.has(r) && p(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: s, event: r, impression_id: a };
                        return (0, i._O)(o, { params: u, request: n.withEndpoint(l.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(r)) return [m(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: o, itemType: t, params: n }) =>
                    (r, a, { api: s }) => {
                        const { event: c, impression_id: h } = n,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(a(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            w = { ...n, earned: b, epoch_ms: Date.now() };
                        return (0, i._O)(r, { params: w, request: s.withEndpoint(l.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: w }, (e, o) => {
                            if (!o && u.has(c)) return [m(f)];
                        });
                    },
                w =
                    (e) =>
                    (o, t, { api: n }) =>
                        (0, i._O)(o, { params: e, request: n.withEndpoint(l.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
                promotedContent: function (e = s, o) {
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
        204744: (e, o, t) => {
            t.d(o, { DI: () => g, H$: () => h, OB: () => _, Ww: () => c, YB: () => u, hj: () => b, qF: () => y });
            t(901951);
            var n = t(499627),
                l = t(390387);
            const r = "recentSearches",
                a = "rweb.recentSearches",
                i =
                    (e) =>
                    (o, t, { userPersistence: n }) =>
                        n.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                s = (e, o) => {
                    let t = [];
                    if (e.user) {
                        const n = e.user;
                        t = o.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== n.id));
                    } else if (e.event) {
                        const n = e.event;
                        t = o.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== n.id));
                    } else if (e && e.keyword) {
                        const n = e.keyword;
                        t = o.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== n.query));
                    } else if (e.list) {
                        const n = e.list;
                        t = o.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== n.id));
                    } else if (e.topic) {
                        const n = e.topic;
                        t = o.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== n.id));
                    }
                    return t;
                },
                d = { fetched: !1, recentSearches: [] };
            const c = (e) => e[r].recentSearches,
                u = (e) => c(e)[0] || null,
                h = (e) => e[r].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                b =
                    (e) =>
                    (o, t, { userPersistence: n }) => {
                        o({ payload: e, type: f });
                        const r = t(),
                            a = c(r);
                        return (0, l.Qb)(r) ? o(i(a)) : Promise.resolve();
                    },
                w = "rweb/recentSearches/CLEAR_ALL",
                y =
                    () =>
                    (e, o, { userPersistence: t }) => {
                        e({ type: w });
                        const n = o(),
                            r = c(n);
                        return (0, l.Qb)(n) ? e(i(r)) : Promise.resolve();
                    },
                D = "rweb/recentSearches/ADD_QUERY",
                g =
                    (e) =>
                    (o, t, { userPersistence: n }) => {
                        o({ payload: e, type: D });
                        const r = t(),
                            a = c(r);
                        return (0, l.Qb)(r) ? o(i(a)) : Promise.resolve();
                    },
                _ =
                    () =>
                    (e, o, { userPersistence: t }) => {
                        const n = o();
                        return h(n)
                            ? Promise.resolve()
                            : e((e, o, { userPersistence: t }) => {
                                  const n = o();
                                  return (0, l.Qb)(n)
                                      ? t
                                            .get(a)
                                            .then((o) => {
                                                e(p(o));
                                            })
                                            .catch(() => {
                                                e(p());
                                            })
                                      : (e(p()), Promise.resolve());
                              });
                    };
            n.Z.register({
                [r]: function (e = d, o) {
                    if (!o) return e;
                    switch (o.type) {
                        case D: {
                            const t = o.payload,
                                n = t ? s(t, e.recentSearches) : [];
                            return n.length > 49 && n.splice(49, 1), t && n.unshift(t), { ...e, recentSearches: n };
                        }
                        case f: {
                            const t = o.payload,
                                n = t ? s(t, e.recentSearches) : [];
                            return { ...e, recentSearches: n };
                        }
                        case w:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...o.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, o, t) => {
            t.d(o, { r: () => d });
            t(136728);
            var n = t(161821),
                l = t(390387),
                r = t(836255),
                a = t(255117),
                i = t(166506),
                s = t(919022);
            const d =
                (e, o) =>
                (t, d, { api: c, featureSwitches: u }) =>
                    t(s.ZP.mute(e, o)).then(() => {
                        const o = d(),
                            s = (0, n.Z)(r.Z.selectAll(o)).reduce((t, n) => {
                                if (null != n)
                                    if (n.user === e) t[n.id_str] = !0;
                                    else if (n.retweeted_status) {
                                        const l = r.Z.select(o, n.retweeted_status);
                                        l?.user === e && (t[n.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, l._h)(d()),
                            u = c ? [(0, a.ZP)({ useLatest: !1, userId: c }).removeTweets(s), (0, a.ZP)({ useLatest: !0, userId: c }).removeTweets(s)] : [],
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
                l = t(750085),
                r = t(962741),
                a = t(466015),
                i = t(919022),
                s = t(218951);
            const d = () => (0, s.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: l.Z }),
                c = (e) => (o, t) => {
                    const n = t();
                    o(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const o = e.type === r.ZP.User ? e.content.id : "",
                                    t = i.ZP.select(n, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === r.ZP.User && o.content.id === e)) {
                        const o = (0, a.OD)(e),
                            n = (0, a.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(n);
                    }
                };
        },
        723587: (e, o, t) => {
            t.d(o, { Z: () => he });
            var n = t(202784),
                l = t(614983),
                r = t.n(l),
                a = t(111677),
                i = t.n(a),
                s = t(516951),
                d = t(616894),
                c = t(235902),
                u = t(305098);
            const h = i().i8cfb6e6,
                m = i().ea100d6a,
                p = i().fe40537f,
                f = i().ab7c3460,
                b = i().i58d8718,
                w = n.createElement(d.default, null),
                y = ({ disabled: e, displayMode: o, onUnblock: t, showRelationshipChangeConfirmation: l, size: r, style: a, testID: i, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: h, buttonHoverLabel: m, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p({ screenName: s }), confirmationSheetText: c.ZP.useProps().isSoftBlockEnabled() ? b : f, disabled: e, displayMode: o, icon: w, onClick: t, showRelationshipChangeConfirmation: l, size: r, style: a, testID: i });
            var D = t(466999),
                g = t(76388),
                _ = t(911373),
                C = t(733357),
                S = t(352924),
                v = t(392237);
            const F = i().ee05e96b,
                M = i().f238ba1d,
                P = i().aeb6f0a0,
                I = i().a77a27c0,
                k = i().b4397192,
                E = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                T = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                Z = v.default.create((e) => ({ hidden: { display: "none" } })),
                L = ({ "aria-describedby": e, buttonType: o, disabled: t, displayMode: l, id: r, isSuperFollowEligible: a, isSuperFollowing: i, isTransparent: s, name: d, onSuperFollow: c, onUnSuperFollow: h, size: m, style: p, testID: f }) => {
                    const b = n.useCallback(() => {
                            i ? h() : a && c();
                        }, [a, i, c, h]),
                        w = void 0 !== d ? `@${String(d)}` : "",
                        y = i ? I : P,
                        g = w.length > 0 && void 0 !== y ? M({ followType: y, screenName: w }) : "",
                        _ = i ? k : P,
                        v = i ? T(s) : o ? void 0 : E(s),
                        L = n.useMemo(() => (void 0 !== e ? e : (0, S.F)()), [e]),
                        x = n.useCallback(() => {
                            const e = i ? I : a ? F({ followType: P, screenName: d }) : null;
                            return e && !(0, C.Z)(e) ? n.createElement(D.Z, { id: L, style: Z.hidden }, e) : null;
                        }, [i, a, L, d]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": L, "aria-label": g, buttonDefaultLabel: y, buttonHoverLabel: _, buttonType: o, customButtonConfig: v, disabled: t, displayMode: l, id: r, onClick: b, size: m, style: p, testID: f }), void 0 === e ? x() : null);
                },
                x = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                A = i().cda66545,
                B = i().ee05e96b,
                N = i().a8d77a25,
                H = i().d0f4f3d9,
                O = i().f238ba1d,
                R = i().j6161cab,
                U = i().i4bb9ef7,
                z = i().ge753264,
                W = i().b837c0e8,
                $ = n.createElement(g.default, null),
                j = n.createElement(_.default, null),
                q = i().ddac1f1d,
                G = i().j8e33c40;
            class Q extends n.Component {
                constructor(e, o) {
                    super(e, o),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, S.F)();
                        }),
                        (this._renderDescribedBy = (e, o) => {
                            const t = this._getDescribedByText();
                            return (0, C.Z)(t) ? null : n.createElement(D.Z, { id: e, style: { display: "none" } }, t);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: o, isSuperFollowEligible: t, isSuperFollowing: n, name: l, type: r } = this.props;
                            let a = "";
                            const i = void 0 === l ? "" : l;
                            switch (r) {
                                case x.user:
                                case x.topic:
                                case x.list:
                                    n && e.unSuperFollow ? (a = e.unSuperFollow) : o ? (a = t ? B({ followType: e.superFollow, screenName: i }) : A({ followType: e.unfollow, screenName: i })) : o || (a = A({ followType: e.follow, screenName: i }));
                                    break;
                                case x.community:
                                    a = o ? N({ screenName: i }) : A({ followType: e.follow, screenName: i });
                                    break;
                                case x.spaces:
                                    o ? (a = A({ followType: e.unfollow, screenName: i })) : o || (a = A({ followType: e.follow, screenName: i }));
                                    break;
                                default:
                                    a = "";
                            }
                            return a;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: o, type: t } = this.props,
                                n = void 0 !== o ? o : "",
                                l = U({ title: o }),
                                r = { [x.user]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: R({ screenName: o }), confirmationSheetText: z }, [x.topic]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: W }, [x.list]: { ariaFollowName: n, confirmationHeadline: l, confirmationSheetText: void 0 }, [x.community]: { ariaFollowName: n, confirmationHeadline: q({ communityName: o }), confirmationSheetText: G }, [x.spaces]: { ariaFollowName: void 0 !== o ? `@${String(o)}` : "", confirmationHeadline: R({ screenName: o }), confirmationSheetText: z } };
                            return { ariaFollowName: r[t].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || r[t].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || r[t].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: o, isSuperFollowing: t, onFollow: n, onSuperFollow: l, onUnSuperFollow: r, onUnfollow: a } = this.props;
                            t ? r() : e ? (o ? l() : a()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, disabled: t, displayMode: l, id: r, isFollowed: a, isFollowing: i, isSuperFollowEligible: s, isSuperFollowing: d, isTransparent: c, showRelationshipChangeConfirmation: h, size: m, style: p, testID: f, type: b, withConfirmationSheetText: w } = this.props,
                        { ariaFollowName: y, confirmationHeadline: D, confirmationSheetText: g, followBackLabel: _, followLabel: C, followingLabel: S, superFollowLabel: v, superFollowingLabel: F, unSuperFollowLabel: M, unfollowLabel: P } = this._getText(),
                        { hasJustFollowed: I } = this.state,
                        k = (o && o.followIcon) || j,
                        Z = (o && o.followingIcon) || $,
                        L = "only-text" !== l ? (i ? Z : k) : void 0;
                    let A = i ? S : C;
                    a && !i && _ && (A = _);
                    let B = H;
                    (d || (i && s)) && (d && F ? ((B = O), (A = F)) : s && v && ((B = O), (A = v)));
                    const N = y.length > 0 && void 0 !== A ? B({ followType: A, screenName: y }) : "",
                        R = "primaryFilled";
                    let U, z, W, q;
                    const G = c ? "brandText" : R,
                        Q = c ? "destructiveText" : "destructiveOutlined",
                        V = !d && (!i || !s) && i,
                        Y = i ? "onMediaWhiteFilled" : "onMediaOutlined",
                        J = i ? "onMediaOutlined" : "onMediaWhiteFilled";
                    b === x.community ? (U = i ? P : C) : b === x.spaces ? ((U = i ? P : C), (z = Y), (W = J)) : d && M ? ((q = T(c)), (U = M)) : i ? ((U = I ? S : P), (z = I ? G : Q), (W = c ? "brandText" : "primaryOutlined"), s && v && ((q = E(c)), (U = v), (W = void 0), (z = void 0))) : ((U = a && _ ? _ : C), (z = c ? "brandText" : R), (W = c ? "brandText" : R));
                    const K = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": K, "aria-label": N, buttonDefaultLabel: A, buttonHoverLabel: U, buttonHoverType: z, buttonType: W, confirmationSheetConfirmLabel: P, confirmationSheetHeadline: D, confirmationSheetText: w ? g : void 0, customButtonConfig: q, disabled: t, displayMode: l, icon: L, id: r, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: V && h, size: m, style: p, testID: f }), void 0 === e ? this._renderDescribedBy(K) : null);
                }
            }
            const V = Q;
            var Y = t(311687);
            const J = i().f305840e,
                K = i().e23b20a0,
                X = i().fe04d89a,
                ee = i().i036327c,
                oe = i().j95e3097,
                te = n.createElement(Y.default, null),
                ne = ({ disabled: e, displayMode: o, onCancelPendingFollow: t, showRelationshipChangeConfirmation: l, size: r, style: a, testID: i, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: J, buttonHoverLabel: K, buttonType: "primaryOutlined", confirmationSheetCancelLabel: K, confirmationSheetConfirmLabel: X, confirmationSheetHeadline: ee, confirmationSheetText: oe({ screenName: s }), disabled: e, displayMode: o, icon: te, onClick: t, showRelationshipChangeConfirmation: l, size: r, style: a, testID: i }),
                le = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                re = i().ec72e2f8,
                ae = i().a5f7ce12,
                ie = i().c3befdbe,
                se = i().d3029dbc,
                de = i().aeb6f0a0,
                ce = i().a77a27c0,
                ue = i().b4397192;
            class he extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: o, buttonText: t, buttonType: l, disabled: r, displayMode: a, id: i, isBlocking: s, isFollowRequestSent: d, isFollowed: c, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onCancelPendingFollow: b, onFollow: w, onSuperFollow: D, onUnSuperFollow: g, onUnblock: _, onUnfollow: C, relationshipMode: S, showRelationshipChangeConfirmation: v, size: F, style: M, testIDs: P, type: I, withConfirmationSheetText: k } = this.props,
                        E = s,
                        T = d,
                        Z = S === le.subscribe && (h || m);
                    return E ? n.createElement(y, { disabled: r, displayMode: a, onUnblock: _, showRelationshipChangeConfirmation: v, size: F, style: M, testID: P?.unblock, userScreenName: f }) : T ? n.createElement(ne, { disabled: r, displayMode: a, onCancelPendingFollow: b, showRelationshipChangeConfirmation: v, size: F, style: M, testID: P?.cancel, userScreenName: f }) : Z ? n.createElement(L, { "aria-describedby": e, buttonType: l, disabled: r, displayMode: a, id: i, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onSuperFollow: D, onUnSuperFollow: g, size: F, style: M, testID: m ? P?.manageSubscription : P?.subscribe }) : n.createElement(V, { "aria-describedby": e, buttonIcons: o, buttonText: t, disabled: r, displayMode: a, id: i, isFollowed: c, isFollowing: u, isSuperFollowEligible: h, isSuperFollowing: m, isTransparent: p, name: f, onFollow: w, onSuperFollow: D, onUnSuperFollow: g, onUnfollow: C, showRelationshipChangeConfirmation: v, size: F, style: M, testID: u ? P?.unfollow : P?.follow, type: I, withConfirmationSheetText: k });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: o } = this.props,
                        t = o && "string" == typeof e,
                        n = !o;
                    r()(t || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            he.defaultProps = { buttonText: { follow: re, followBack: ae, following: ie, unfollow: se, superFollow: de, superFollowing: ce, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        305098: (e, o, t) => {
            t.d(o, { Z: () => c });
            var n = t(807896),
                l = t(202784),
                r = t(325686),
                a = t(154003),
                i = t(190286),
                s = t(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class d extends l.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const o = this._containerRef?.getBoundingClientRect().width,
                                    t = this._containerRef?.offsetWidth;
                                let n = 0;
                                o && t && (n = t ? o : t), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: o } = this.props;
                            if (!o) return;
                            const { customButtonBackgroundColor: t, customButtonBorderColor: n, customButtonColor: l, customButtonHoverBackgroundColor: r, customButtonHoverBorderColor: a, customButtonHoverColor: i } = o,
                                s = { color: l, backgroundColor: t, borderColor: n };
                            return e && ((s.color = i || l), (s.backgroundColor = r || t), (s.borderColor = a || n)), s;
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
                    const { "aria-describedby": e, "aria-label": o, buttonDefaultLabel: t, buttonHoverLabel: d, buttonHoverType: c, buttonType: u, confirmationSheetCancelLabel: h, confirmationSheetConfirmLabel: m, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: f, confirmationSheetText: b, disabled: w, displayMode: y, icon: D, id: g, onHoverOut: _, size: C, style: S, testID: v } = this.props,
                        F = [S, { minWidth: this._minWidth }];
                    return l.createElement(
                        r.Z,
                        { ref: this._setContainerRef, style: F },
                        l.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: _ }, ({ isHovered: r }) => {
                            const i = r ? d : t,
                                s = r && c ? c : u,
                                h = this._getCustomButtonProps(r);
                            return l.createElement(a.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? i : o, disabled: w, icon: "only-text" !== y ? D : void 0, id: g, onPress: this._handleButtonPress, ref: this._setButtonRef, size: C, testID: v, type: s }, h), "only-icon" === y ? void 0 : i);
                        }),
                        this.state.showConfirmation ? l.createElement(i.Z, { cancelButtonLabel: h, confirmButtonLabel: m, confirmButtonType: f, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: b }) : null,
                    );
                }
            }
            d.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const c = d;
        },
        790093: (e, o, t) => {
            t.r(o), t.d(o, { default: () => s });
            var n = t(202784),
                l = t(890601),
                r = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, o, t) => {
            t.r(o), t.d(o, { default: () => s });
            var n = t(202784),
                l = t(890601),
                r = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        226597: (e, o, t) => {
            t.r(o), t.d(o, { default: () => s });
            var n = t(202784),
                l = t(890601),
                r = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        155353: (e, o, t) => {
            t.r(o), t.d(o, { default: () => s });
            var n = t(202784),
                l = t(890601),
                r = t(783427),
                a = t(347101);
            const i = (e = {}) => {
                const { direction: o } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: o });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.UserHandler.b31efcca.js.map

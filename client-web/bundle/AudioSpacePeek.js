"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacePeek", "loader.AudioDock", "bundle.AudioSpaceDetail", "loader.AudioContextVoiceMedia", "icons/IconFeedback-js"],
    {
        290402: (e, o, t) => {
            t.d(o, { Z: () => p });
            var r = t(807896),
                n = t(202784),
                a = t(182056),
                s = t(879113),
                l = t(392237),
                i = t(111677),
                d = t.n(i),
                c = t(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...o }, t) => {
                    const l = a.Z.isOnline();
                    return n.createElement(s.Z, (0, r.Z)({}, o, { icon: l ? void 0 : n.createElement(c.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = n.forwardRef(h);
        },
        333241: (e, o, t) => {
            t.d(o, { Z: () => _ });
            t(136728);
            var r = t(202784),
                n = t(638236),
                a = t(811176),
                s = t(111677),
                l = t.n(s),
                i = t(415506),
                d = t(516951),
                c = t(443781),
                u = t(376293),
                h = t(847607),
                m = t(417714),
                p = t(988823);
            const f = "block",
                b = "mute",
                g = "removeFollower",
                w = "report",
                D = "share",
                y = l().j7bb1a43,
                k = l().hef5960c,
                _ = (0, p.M)((e) => {
                    const { featureSwitches: o } = (0, c.QZ)(),
                        { onBlock: t, onClose: s, onMute: l, onRemoveFollower: p, onReportUser: _, onShare: v, onUnblock: E, onUnmute: P, user: I } = e,
                        C = [],
                        M = (o, t) => {
                            const { confirm: r, onClose: n } = e;
                            if (o) {
                                const { label: e, ...a } = o;
                                r({ confirmButtonLabel: e, ...a })
                                    .then(t, d.Z)
                                    .finally(n);
                            } else t();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        C.push({
                            Icon: n.Z,
                            onClick: () => {
                                s(), v();
                            },
                            testID: D,
                            text: k,
                        });
                    !I.blocking &&
                        C.push({
                            ...(0, h.N1)(
                                I,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), P();
                                },
                            ),
                            testID: b,
                        });
                    I.followed_by &&
                        C.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    M(e, p);
                                },
                                user: I,
                            }),
                            testID: g,
                        }),
                        C.push((0, u.op)({ blockAction: (e) => M(e, t), isSoftBlockEnabled: o.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: f, unblockAction: (e) => M(e, E), user: I })),
                        C.push({
                            Icon: i.default,
                            onClick: () => {
                                s(), _();
                            },
                            testID: w,
                            text: y({ screenName: I.screen_name }),
                        });
                    const Z = C.map(({ Icon: e, onClick: o, testID: t, text: r }) => ({ text: r, onClick: o, Icon: e, testID: t }));
                    return r.createElement(a.Z, { items: Z, onCloseRequested: s });
                });
        },
        572067: (e, o, t) => {
            t.d(o, { Z: () => a });
            var r = t(202784),
                n = t(272175);
            const a = (e) => {
                const { canonical: o, description: t = "", image: a, imageAlt: s, imageH: l, imageType: i, imageW: d, title: c, ttl: u, type: h } = e;
                return r.createElement(n.ql, null, h ? r.createElement("meta", { content: h, property: "og:type" }) : null, o ? r.createElement("meta", { content: o, property: "og:url" }) : null, c ? r.createElement("meta", { content: c, property: "og:title" }) : null, r.createElement("meta", { content: t, property: "og:description" }), a ? r.createElement("meta", { content: a, property: "og:image" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:type" }) : null, d ? r.createElement("meta", { content: d, property: "og:image:width" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:height" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:alt" }) : null, u ? r.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        864479: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(771099);
            const s = (e) => (o) => n.createElement(a.$6, null, (t) => n.createElement(e, (0, r.Z)({}, o, { isInSidebar: t })));
        },
        812190: (e, o, t) => {
            t.d(o, { Z: () => m });
            var r = t(202784),
                n = t(544239),
                a = t(872788),
                s = t(71620),
                l = t(668214),
                i = t(491963),
                d = t(709318);
            const c = (e, o) => (o.communityId ? i.ZP.select(e, o.communityId) : void 0),
                u = (e, o) => !!o.communityId && (0, d.H4)(e, o.communityId),
                h = ({ community: e, communityId: o, createLocalApiErrorHandler: t, isPinned: s, onActionButtonJoinClick: l, onPress: i, pinTimeline: d, shouldDisplayPin: c, style: u, thumbnailSize: h, unpinTimeline: m, withActionButton: p }) => {
                    const f = r.useMemo(() => e && { isPinned: s, handlePinOrUnpin: () => (s ? m({ id: o, name: e.name, type: a.FO.COMMUNITY }).catch(t) : d({ id: o, name: e.name, type: a.FO.COMMUNITY }).catch(t)) }, [e, o, t, s, d, m]),
                        b = c ? f : void 0;
                    if (e) {
                        const { is_nsfw: t, media: a, member_count: s, membersFacepileUrls: d, name: c, primary_community_topic: m } = e;
                        return r.createElement(n.Z, { communityId: o, isNsfw: t, media: a, memberCount: s, membersFacepile: d, name: c, onActionButtonJoinClick: l, onPress: i, style: u, thumbnailSize: h, topic: m?.topic_name, withActionButton: p, withPinAction: b });
                    }
                    return null;
                },
                m = (0, l.Z)()
                    .propsFromState(() => ({ community: c, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: d.qM, unpinTimeline: d.bK, createLocalApiErrorHandler: (0, s.zr)("TOGGLE_PIN_COMMUNITY") }))(r.memo(h));
        },
        840685: (e, o, t) => {
            t.d(o, { Z: () => f });
            var r = t(202784),
                n = t(879113),
                a = t(668214),
                s = t(492057);
            const l = (0, a.Z)().propsFromState(() => ({ fetchStatus: s.tc }));
            var i = t(107267),
                d = t(71620),
                c = t(125363),
                u = t(491963);
            const h = "COMMUNITY_FETCHER",
                m = (e) => {
                    const o = e.fallbackToRouteParam ?? !0;
                    return e.communityId || o ? r.createElement(p, e) : null;
                };
            function p({ children: e, communityId: o, fetchStatus: t }) {
                const a = (function (e) {
                        const o = (0, c.I0)(),
                            t = (0, i.useRouteMatch)(),
                            n = r.useMemo(() => (0, d.zr)(h), []),
                            a = e || t.params.communityId,
                            s = r.useCallback(() => {
                                try {
                                    a && o(u.ZP.fetchOneIfNeeded(a));
                                } catch (e) {
                                    n(e);
                                }
                            }, [a, n, o]);
                        return r.useEffect(s, [s]), s;
                    })(o),
                    s = r.useCallback(() => e || null, [e]);
                return r.createElement(n.Z, { fetchStatus: t, onRequestRetry: a, render: s });
            }
            const f = l(r.memo(m));
        },
        293988: (e, o, t) => {
            t.d(o, { Z: () => v });
            var r = t(202784),
                n = t(154003),
                a = t(111677),
                s = t.n(a),
                l = t(74514),
                i = t(405303),
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
                g = s().bdba3e1a,
                w = s().c4da7d28,
                D = s().j87c21f4,
                y = s().iebc30ca,
                k = s().dc740eb2;
            class _ extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: o } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": w, hoverLabel: { label: y }, icon: r.createElement(l.default, null), onPress: this._handleUnfollow, style: o, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: D }, icon: r.createElement(i.default, null), onPress: this._handleFollow, style: o, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(d.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
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
            const v = b(_);
        },
        23134: (e, o, t) => {
            t.d(o, { C: () => B });
            t(136728);
            var r = t(202784),
                n = t(190286),
                a = t(723587),
                s = t(111677),
                l = t.n(s),
                i = t(615656),
                d = t(666670),
                c = t(757953),
                u = t(879596),
                h = t(323683),
                m = t(479506),
                p = t(942893),
                f = t(500002),
                b = t(233391),
                g = t(288955),
                w = t(71620),
                D = t(668214),
                y = t(390387),
                k = t(601576),
                _ = t(919022);
            const v = (e, o) => o.user || _.ZP.select(e, o.userId),
                E = (0, D.Z)()
                    .propsFromState(() => ({ isLoggedIn: y.Qb, user: v }))
                    .propsFromActions(() => ({ addToast: k.fz, cancelPendingFollow: _.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, w.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: _.ZP.fetchOneIfNeeded, follow: _.ZP.follow, unblock: _.ZP.unblock, unfollow: _.ZP.unfollow }))
                    .withAnalytics(),
                P = (e) => `${e}-follow`,
                I = (e) => `${e}-unfollow`,
                C = (e) => `${e}-block`,
                M = (e) => `${e}-unblock`,
                Z = (e) => `${e}-cancel`,
                A = (e) => `${e}-subscribe`,
                S = (e) => `${e}-manageSubscription`,
                T = l().hbe4feb5,
                F = l().df4c86b0,
                U = l().bba40ffa,
                L = l().f558829e,
                O = l().a6941096,
                x = l().j24c37b2,
                N = l().if8cd2a4,
                R = l().b5972260;
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
                            const { addToast: e, createLocalApiErrorHandler: o, follow: t, isFollowNudge: r, onFollowClick: n, promotedContent: a, user: s } = this.props;
                            s && t(s.id_str, { promotedContent: a, isFollowNudge: r }).then(() => (s.protected && e({ text: T({ screenName: s.screen_name }) }), n && n(), this._scribe({ action: "follow" })), o({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
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
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: U });
                                },
                            },
                            [i.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: O, dialogHeadline: U });
                                },
                            },
                            [i.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: L, dialogHeadline: F });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: o, isSuperFollowSubscriptionEnabled: t, isTransparent: s, relationshipMode: l, showRelationshipChangeConfirmation: i, size: d, style: c, user: u, userId: h } = this.props,
                        { dialogHeadline: m, dialogText: p, showDialog: f } = this.state,
                        w = u?.screen_name,
                        D = w ? `/${w}` : "",
                        y = { follow: P(h), unfollow: I(h), cancel: Z(h), block: C(h), unblock: M(h), subscribe: A(h), manageSubscription: S(h) },
                        k = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        r.createElement(
                            r.Fragment,
                            null,
                            f ? r.createElement(n.Z, { confirmButtonLabel: x, headline: m, onCancel: this._handleClose, onConfirm: this._handleClose, text: p, withCancelButton: !1 }) : null,
                            r.createElement(g.Z, { displayMode: b.BH.follow, postLoginPath: D, userFullName: u.name, userId: h }, (n) => r.createElement(a.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: k, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!t && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: s, name: w, onCancelPendingFollow: n(this._handleCancelPendingFollow), onFollow: n(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: n(this._handleSuperFollow), onUnSuperFollow: n(this._handleUnSuperFollow), onUnblock: n(this._handleUnblock), onUnfollow: n(this._handleUnfollow), relationshipMode: l, showRelationshipChangeConfirmation: o && i, size: d, style: c, testIDs: y, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: o, element: t } = e,
                        { analytics: r, location: n, promotedContent: a, user: s } = this.props,
                        { items: l } = r.contextualScribeData,
                        i = l?.find((e) => e.item_type === m.Z.ItemType.USER && e.id === s?.id_str),
                        d = [];
                    s ? d.push({ ...i, ...p.Z.getUserItem(s, a) }) : i && d.push(i);
                    const c = n.query && n.query.screen_name ? { items: d, context: "profile_intent" } : { items: d };
                    return r.scribe({ element: t, action: o, data: c });
                }
            }
            const B = (0, f.ZP)(E(H));
        },
        288955: (e, o, t) => {
            t.d(o, { Z: () => i });
            var r = t(807896),
                n = t(202784),
                a = t(443781),
                s = t(369241);
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
                    return n.createElement(n.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && n.createElement(s.ZP, (0, r.Z)({ onClose: this._handleClose }, t)));
                }
            }
            (l.defaultProps = { disabled: !1 }), (l.contextType = a.rC);
            const i = l;
        },
        62857: (e, o, t) => {
            t.d(o, { Z: () => C });
            var r = t(807896),
                n = t(202784),
                a = t(476984),
                s = t.n(a),
                l = t(111677),
                i = t.n(l),
                d = t(615656),
                c = t(290402),
                u = t(325686),
                h = t(240089),
                m = t(663550),
                p = t(409438);
            const f = ({ displayMode: e = p.Z.UserDetailed, renderUserCell: o, userIds: t }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    t.map((t, r) => (o ? o(t) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: t, promotedItemType: m.bj.USER, userId: t, withFollowsYou: !0 }))),
                );
            var b = t(312771),
                g = t(71620),
                w = t(973572),
                D = t(668214),
                y = t(919022);
            const k = (e, o) => o.userIds,
                _ = (e, o) => {
                    const { filterPredicate: t = (e) => !!e, userIds: r } = o;
                    return r.filter((o) => {
                        const r = y.ZP.select(e, o);
                        return !!r && t(r);
                    });
                },
                v = (e, o) => {
                    const { userIds: t } = o;
                    return t.reduce((o, t) => {
                        const r = y.ZP.selectFetchStatus(e, t);
                        return r && (o[t] = r === b.ZP.NONE ? b.ZP.LOADING : r), o;
                    }, {});
                },
                E = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, w.Z)(_, (e) => e),
                        fetchStatus: (0, w.Z)(_, v, k, (e, o, t) => {
                            let r = b.ZP.LOADED;
                            for (let n = 0; n < t.length; n++) {
                                const a = t[n];
                                if (-1 === e.indexOf(a)) {
                                    const e = o[a] || b.ZP.LOADING;
                                    r = r === b.ZP.LOADED ? e : r;
                                }
                                if (r === b.ZP.LOADED) break;
                            }
                            return r;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: y.ZP.fetchManyIfNeeded })),
                P = i().f5b426c2;
            class I extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: o, fetchStatus: t, fetchUsersIfNeeded: a, filterPredicate: s, userIds: l, ...i } = this.props;
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
                    s()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": P, fetchStatus: this.state.allUsersUnavailable ? b.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
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
            const C = E(I);
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
            t.d(o, { $f: () => E, KV: () => g, LI: () => Z, SC: () => v, Vt: () => y, ed: () => A, op: () => P });
            var r = t(202784),
                n = t(190286),
                a = t(111677),
                s = t.n(a),
                l = t(616894),
                i = t(314948),
                d = t(516951),
                c = t(163390);
            const u = s().cfd2f35e,
                h = s().f9e45cfb,
                m = s().fcd4d489,
                p = s().a6450e84,
                f = s().g353ad73,
                b = s().ad00a739,
                g = s().a9fd20be,
                w = s().j546fb79,
                D = s().c9623eeb,
                y = s().e133be4e,
                k = s().he43bca4,
                _ = s().f5f01af6,
                v = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                E = (e, o) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: p, text: o ? b({ screenName: e }) : f({ screenName: e }) }),
                P = ({ blockAction: e, blockSubtext: o, isSoftBlockEnabled: t, source: r, testID: n, unblockAction: a, unblockSubtext: s, user: l }) => {
                    let i,
                        u = d.Z;
                    const h = Z(l, t);
                    switch (r) {
                        case v.PROFILE:
                        case v.LIST_DETAIL:
                        case v.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(h) : e(h);
                            };
                            break;
                        case v.TWEET:
                        case v.TWEET_CARET:
                        case v.RICH_FEEDBACK:
                            (i = c.uq.block),
                                (u = () => {
                                    l.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: i, Icon: I(l.blocking), text: M(l), subText: C({ user: l, blockSubtext: o, unblockSubtext: s }) };
                },
                I = (e) => (e ? i.default : l.default),
                C = ({ blockSubtext: e, unblockSubtext: o, user: t }) => (!t.blocking && e ? e(t.screen_name) : t.blocking ? o : void 0),
                M = (e) => (e.blocking ? D({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                Z = (e, o) => (e.blocking ? ((e, o) => ({ confirmButtonType: "primary", headline: w({ screenName: e }), label: y, text: o ? _ : k }))(e.screen_name, o) : E(e.screen_name, o)),
                A = ({ confirmation: e, handleConfirm: o, onClose: t }) => {
                    const { confirmButtonType: a, headline: s, label: l, text: i } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: s, onCancel: t, onConfirm: o, text: i });
                };
        },
        545334: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = t.n(r)().gf5e9ea6;
        },
        916585: (e, o, t) => {
            t.d(o, { k: () => s });
            var r = t(111677),
                n = t.n(r),
                a = t(437358);
            const s = (e, o) => {
                const { id_str: t, screen_name: r } = e,
                    s = (0, n().d78131b9)({ screenName: r });
                return { Icon: a.default, text: s, link: { pathname: "/i/lists/add_member", state: { userId: t } }, onClick: o };
            };
        },
        847607: (e, o, t) => {
            t.d(o, { Aq: () => u, FK: () => w, GS: () => l, N1: () => m, PY: () => h, X6: () => D, cm: () => i });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                a = t(391366),
                s = t(40904);
            const l = n().hb568af4,
                i = n().bb1cbeb6,
                d = (n().h2f62206, n().e67b2d65),
                c = n().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, o, t) => {
                    const { muting: r, screen_name: n } = e;
                    return { text: r ? h(n) : u(n), onClick: r ? t : o, Icon: r ? a.default : s.default };
                },
                p = n().h59f52ee,
                f = n().eea0cbee,
                b = n().i29533b3,
                g = n().h129c3c3,
                w = (e) => (e ? ((e) => b({ screenName: e }))(e) : p),
                D = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        417714: (e, o, t) => {
            t.d(o, { l: () => c });
            t(202784);
            var r = t(111677),
                n = t.n(r),
                a = t(224823);
            const s = n().b3036480,
                l = n().b3036480,
                i = n().e68b09b4,
                d = n().h27b7407,
                c = ({ removeFollowerAction: e, user: o }) => {
                    const t = u(o);
                    return { Icon: a.default, text: s, onClick: () => e(t) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: l, label: i, text: d({ screenName: e.screen_name }) });
        },
        712816: (e, o, t) => {
            t.d(o, { d: () => n });
            var r = t(111677);
            const n = { defaultToast: { text: t.n(r)().b6878b0a }, showToast: !0 };
        },
        666670: (e, o, t) => {
            t.d(o, { F: () => s });
            var r = t(516951),
                n = t(615656),
                a = t(51525);
            const s = { [n.ZP.AddressBookLookupNotFound]: { customAction: a.vv }, [n.ZP.GenericUserNotFound]: { customAction: r.Z }, [n.ZP.OtherUserSuspended]: { customAction: r.Z }, showToast: !0 };
        },
        757953: (e, o, t) => {
            t.d(o, { H: () => p });
            var r = t(111677),
                n = t.n(r),
                a = t(516951),
                s = t(615656),
                l = t(51525);
            const i = n().j4292c24,
                d = n().a0ba5842,
                c = n().i859a9d4,
                u = n().a5202b82,
                h = n().f8cbf714,
                m = n().f2e66452,
                p = { defaultToast: { text: u }, [s.ZP.CurrentUserSuspended]: { toast: { text: m, action: { label: c, link: "https://support.twitter.com/articles/15790" } } }, [s.ZP.DuplicateFollowRequest]: { customAction: a.Z }, [s.ZP.FollowBlockedUserError]: { toast: { text: i } }, [s.ZP.FollowError]: { customAction: l.w1 }, [s.ZP.FollowRateLimitExceeded]: { toast: { action: { label: c, link: "https://support.twitter.com/articles/66885" }, text: d } }, [s.ZP.TargetUserNotFound]: { toast: { text: h } } };
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
            t.d(o, { Z: () => a });
            var r = t(615656),
                n = t(51525);
            const a = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        973572: (e, o, t) => {
            t.d(o, { Z: () => s });
            var r = t(476984),
                n = t.n(r),
                a = t(24949);
            const s = (0, a.wN)(a.PW, n());
        },
        163390: (e, o, t) => {
            t.d(o, { OX: () => h, Od: () => c, PN: () => m, uq: () => d, wR: () => f });
            var r = t(251067),
                n = t(522171),
                a = t(111677),
                s = t.n(a),
                l = t(912021),
                i = t(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, l.Z)((e) => {
                    const o = e ? [{ description: s().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: d.nextItem, universal: !0 }, { description: s().g0048656, keys: d.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: d.refresh, universal: !1 }, { description: s().ha8209bc, keys: d.goHome, universal: !1 }, { description: s().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: s().eb75875e, keys: d.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: s().fa98627a, keys: d.goProfile, universal: !1 }, { description: s().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: s().b0041756, keys: d.goLists, universal: !1 }, { description: s().d4986f86, keys: d.goMessages, universal: !1 }, { description: s().h5860a68, keys: d.goGrok, universal: !1 }, { description: s().bb081ea2, keys: d.goSettings, universal: !1 }, { description: s().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...o, { description: s().eee2ed92, keys: d.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
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
                m = () => [
                    { description: s().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: s().b881560e, keys: d.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                p = (0, l.Z)((e) => {
                    const o = c(e),
                        t = h(),
                        r = m(),
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
                    if (o) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        409438: (e, o, t) => {
            t.d(o, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        988823: (e, o, t) => {
            t.d(o, { M: () => s });
            var r = t(807896),
                n = t(202784),
                a = t(190286);
            const s = (e) => (o) => {
                const [t, s] = n.useState(null),
                    l = (e) =>
                        new Promise((o, t) => {
                            s({ resolve: o, reject: t, confirmationSheetProps: e });
                        });
                if (t) {
                    const { confirmationSheetProps: e, reject: o, resolve: l } = t;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                o(), s(null);
                            },
                            onConfirm: () => {
                                l(), s(null);
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
                a = t(663550),
                s = t(499627),
                l = t(917799);
            const i = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                h = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                m = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, o) => !!e.promotedContent[o],
                f =
                    (e) =>
                    (o, t, { api: r }) => {
                        const { event: a, impression_id: s, promoted_trend_id: i } = e,
                            c = `trend-${i}-${a}`;
                        if (h.has(a) && p(t(), c)) return Promise.resolve();
                        const u = { promoted_trend_id: i, event: a, impression_id: s };
                        return (0, l._O)(o, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, o) => {
                            if (!o && h.has(a)) return [m(c)];
                        });
                    },
                b =
                    ({ disclosureType: e, itemId: o, itemType: t, params: r }) =>
                    (a, s, { api: i }) => {
                        const { event: c, impression_id: h } = r,
                            f = `${t}-${o ?? "undefined"}-${h ?? "undefined"}-${c ?? "undefined"}`;
                        if (u.has(c) && p(s(), f)) return Promise.resolve();
                        const b = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...r, earned: b, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: g, request: i.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, o) => {
                            if (!o && u.has(c)) return [m(f)];
                        });
                    },
                g =
                    (e) =>
                    (o, t, { api: r }) =>
                        (0, l._O)(o, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            s.Z.register({
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
                a = t(836255),
                s = t(255117),
                l = t(166506),
                i = t(919022);
            const d =
                (e, o) =>
                (t, d, { api: c, featureSwitches: u }) =>
                    t(i.ZP.mute(e, o)).then(() => {
                        const o = d(),
                            i = (0, r.Z)(a.Z.selectAll(o)).reduce((t, r) => {
                                if (null != r)
                                    if (r.user === e) t[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(o, r.retweeted_status);
                                        n?.user === e && (t[r.id_str] = !0);
                                    }
                                return t;
                            }, {}),
                            c = (0, n._h)(d()),
                            u = c ? [(0, s.ZP)({ useLatest: !1, userId: c }).removeTweets(i), (0, s.ZP)({ useLatest: !0, userId: c }).removeTweets(i)] : [],
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
                a = t(962741),
                s = t(466015),
                l = t(919022),
                i = t(218951);
            const d = () => (0, i.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: o }) => ({ count: e, cursor: "string" == typeof o ? o : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                c = (e) => (o, t) => {
                    const r = t();
                    o(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const o = e.type === a.ZP.User ? e.content.id : "",
                                    t = l.ZP.select(r, o);
                                return t && !t.muting;
                            })
                            .map((o) => e.removeEntry(o.entryId)),
                    );
                },
                u = (e, o, t) => {
                    if (!t.selectEntries(o).find((o) => o.type === a.ZP.User && o.content.id === e)) {
                        const o = (0, s.OD)(e),
                            r = (0, s.$0)({ entryId: o, id: e, sortIndex: Date.now().toString() });
                        return t.injectEntry(r);
                    }
                };
        },
        879113: (e, o, t) => {
            t.d(o, { Z: () => m });
            var r = t(202784),
                n = t(476984),
                a = t.n(n),
                s = t(143778),
                l = t(750410),
                i = t(682830);
            const d = "failed",
                c = "loaded",
                u = "loading",
                h = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const o = e.fetchStatus === c,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!o && !t) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: o, failureMessage: t, fetchStatus: n, icon: a, loadingMessage: s, onRequestRetry: c, render: m, renderFailure: p, retryMessage: f, retryable: b } = this.props;
                    switch (n) {
                        case d:
                            return b ? r.createElement(l.Z, { icon: a, onRequestRetry: c, retryMessage: f }) : t ? r.createElement(i.m, { failureMessage: t }) : p();
                        case u:
                            return r.createElement(i.J, { "aria-label": e, color: o, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        420412: (e, o, t) => {
            t.d(o, { Z: () => i });
            var r = t(202784),
                n = t(325686),
                a = t(235902),
                s = t(885015),
                l = t(392237);
            function i({ borderColor: e = "borderColor", isSlim: o = !1, label: t }) {
                const { isWebRedesign: i } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return t ? r.createElement(s.Z, { style: !o && d.root, withGutter: !0 }, r.createElement(n.Z, { style: d.gapColumn }, r.createElement(n.Z, { style: [d.gap, c] })), r.createElement(n.Z, { style: d.gapText }, t), r.createElement(n.Z, { style: d.gapColumn }, r.createElement(n.Z, { style: [d.gap, c] }))) : r.createElement(n.Z, { style: [!o && d.root, i() && d.rootRedesign, d.gap, c] });
            }
            const d = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, o, t) => {
            t.d(o, { Z: () => d });
            var r = t(807896),
                n = t(202784),
                a = t(325686),
                s = t(392237);
            class l extends n.Component {
                render() {
                    const { children: e, style: o, withGutter: t, ...s } = this.props,
                        l = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, i.column, t && i.withGutterColumn] }));
                    return n.createElement(a.Z, (0, r.Z)({ style: [o, i.root, t && i.withGutter] }, s), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = l;
        },
        790093: (e, o, t) => {
            t.r(o), t.d(o, { default: () => i });
            var r = t(202784),
                n = t(890601),
                a = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        98440: (e, o, t) => {
            t.r(o), t.d(o, { default: () => i });
            var r = t(202784),
                n = t(890601),
                a = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        226597: (e, o, t) => {
            t.r(o), t.d(o, { default: () => i });
            var r = t(202784),
                n = t(890601),
                a = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        155353: (e, o, t) => {
            t.r(o), t.d(o, { default: () => i });
            var r = t(202784),
                n = t(890601),
                a = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: o } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: o });
            };
            l.metadata = { width: 24, height: 24 };
            const i = l;
        },
        662678: (e, o, t) => {
            t.d(o, { G: () => n, Z: () => r });
            t(136728);
            const r = function (e, o) {
                return n(e, o);
            };
            function n(e, o) {
                return e.reduce(
                    (t, r, n) => {
                        const a = o ? o(r, n, e) : !!r;
                        return a && t[0].push(r), !a && t[1].push(r), t;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacePeek.436b832a.js.map

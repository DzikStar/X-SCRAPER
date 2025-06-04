"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"],
    {
        293988: (e, t, o) => {
            o.d(t, { Z: () => E });
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
                f = o(919022);
            const w = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                m = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: w }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: f.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = r().bdba3e1a,
                g = r().c4da7d28,
                _ = r().j87c21f4,
                C = r().iebc30ca,
                F = r().dc740eb2;
            class y extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(l.ZP, { "aria-label": g, hoverLabel: { label: C }, icon: n.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(l.ZP, { "aria-label": b, hoverLabel: { label: _ }, icon: n.createElement(a.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: F }) : null, this._renderButton());
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
            const E = m(y);
        },
        265196: (e, t, o) => {
            o.d(t, { ZP: () => F });
            o(136728);
            var n = o(202784),
                l = o(723587),
                i = o(111677),
                r = o.n(i),
                s = o(258292),
                a = o(500002),
                c = o(233391),
                d = o(288955),
                u = o(71620),
                h = o(668214),
                p = o(466380);
            const f = (0, h.Z)()
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_TOPIC_BUTTON"), follow: p.Z.follow, unfollow: p.Z.unfollow }))
                .withAnalytics();
            var w = o(421575);
            const m = Object.freeze({ follow: r().i79ab12a, following: r().d960b55c, unfollow: r().c0f56044 }),
                b = Object.freeze({ follow: r().fcf51fe6, following: r().e9a90d72, unfollow: r().bf403716, confirmationHeadline: r().c9f08e29, confirmationSheetText: r().hed4dcd0 }),
                g = Object.freeze({ follow: r().cd876e02, following: r().f2816e02, unfollow: r().f5b04fbc, confirmationHeadline: r().c481ae3f, confirmationSheetText: r().c94116de }),
                _ = Object.freeze({ follow: r().e0e730b0, following: r().e0e730b0, unfollow: r().b1850062, confirmationHeadline: r().gd3f996f, confirmationSheetText: r().jdd65aac });
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getDisplayMode = (e) => (void 0 === this._getFollowButtonIcon(e) ? "only-text" : "icon-text")),
                        (this._getFollowButtonIcon = (e) => {
                            switch (e) {
                                case w.q.Favorite:
                                case w.q.Star:
                                case w.q.Interested:
                                    return n.createElement(s.default, null);
                                case w.q.FollowTopic:
                                case w.q.Default:
                                default:
                                    return;
                            }
                        }),
                        (this._getFollowingButtonIcon = (e) => ("icon-text" === this._getDisplayMode(e) ? n.createElement(n.Fragment, null) : void 0)),
                        (this._getButtonText = (e) => {
                            const { topic: t } = this.props;
                            switch (e) {
                                case w.q.FollowTopic:
                                    return { follow: m.follow, unfollow: m.unfollow, following: m.following };
                                case w.q.Favorite:
                                    return { follow: g.follow, unfollow: g.unfollow, following: g.following, confirmationHeadline: g.confirmationHeadline && g.confirmationHeadline({ title: t.name }), confirmationSheetText: g.confirmationSheetText };
                                case w.q.Star:
                                    return { follow: b.follow, unfollow: b.unfollow, following: b.following, confirmationHeadline: b.confirmationHeadline && b.confirmationHeadline({ title: t.name }), confirmationSheetText: b.confirmationSheetText };
                                case w.q.Interested:
                                    return { follow: _.follow, unfollow: _.unfollow, following: _.following, confirmationHeadline: _.confirmationHeadline && _.confirmationHeadline({ title: t.name }), confirmationSheetText: _.confirmationSheetText };
                                case w.q.Default:
                                default:
                                    return;
                            }
                        }),
                        (this._handleOnFollow = () => {
                            const { createLocalApiErrorHandler: e, educateOnFollow: t, follow: o, history: n, topic: l } = this.props;
                            o(l.id).catch(e()), this._handleScribe("follow"), t && l && n.push({ pathname: "/i/topics/education", state: { topicName: l.name } });
                        }),
                        (this._handleOnUnfollow = () => {
                            const { createLocalApiErrorHandler: e, topic: t, unfollow: o } = this.props;
                            o(t.id).catch(e()), this._handleScribe("unfollow");
                        });
                }
                render() {
                    const {
                        ariaDescribedBy: e,
                        id: t,
                        isTransparent: o,
                        showRelationshipChangeConfirmation: i,
                        size: r,
                        style: s,
                        textMode: a,
                        topic: { following: u, name: h },
                    } = this.props;
                    return n.createElement(d.Z, { customText: h, displayMode: c.BH.topic }, (c) => n.createElement(l.Z, { "aria-describedby": e, buttonIcons: { followIcon: this._getFollowButtonIcon(a), followingIcon: this._getFollowingButtonIcon(a) }, buttonText: this._getButtonText(a), displayMode: this._getDisplayMode(a), id: t, isFollowing: u, isTransparent: o, name: h, onFollow: c(this._handleOnFollow), onUnfollow: c(this._handleOnUnfollow), showRelationshipChangeConfirmation: i, size: r, style: s, type: "topic", withConfirmationSheetText: u }));
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ element: "topic", action: e });
                }
            }
            C.defaultProps = { size: "small", textMode: w.q.Default };
            const F = (0, a.ZP)(f(C));
        },
        421575: (e, t, o) => {
            o.d(t, { q: () => n });
            o(202784);
            const n = Object.freeze({ Default: "default", FollowTopic: "follow", Star: "star", Interested: "interested", Favorite: "favorite" });
        },
        23134: (e, t, o) => {
            o.d(t, { C: () => R });
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
                f = o(942893),
                w = o(500002),
                m = o(233391),
                b = o(288955),
                g = o(71620),
                _ = o(668214),
                C = o(390387),
                F = o(601576),
                y = o(919022);
            const E = (e, t) => t.user || y.ZP.select(e, t.userId),
                Z = (0, _.Z)()
                    .propsFromState(() => ({ isLoggedIn: C.Qb, user: E }))
                    .propsFromActions(() => ({ addToast: F.fz, cancelPendingFollow: y.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, g.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: y.ZP.fetchOneIfNeeded, follow: y.ZP.follow, unblock: y.ZP.unblock, unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                v = (e) => `${e}-follow`,
                T = (e) => `${e}-unfollow`,
                P = (e) => `${e}-block`,
                S = (e) => `${e}-unblock`,
                I = (e) => `${e}-cancel`,
                x = (e) => `${e}-subscribe`,
                k = (e) => `${e}-manageSubscription`,
                A = s().hbe4feb5,
                H = s().df4c86b0,
                L = s().bba40ffa,
                D = s().f558829e,
                O = s().a6941096,
                N = s().j24c37b2,
                U = s().if8cd2a4,
                B = s().b5972260;
            class z extends n.Component {
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
                            o && e(o.id_str).catch(t({ defaultToast: { text: B }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: o, isFollowNudge: n, onFollowClick: l, promotedContent: i, user: r } = this.props;
                            r && o(r.id_str, { promotedContent: i, isFollowNudge: n }).then(() => (r.protected && e({ text: A({ screenName: r.screen_name }) }), l && l(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
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
                                    this.setState({ showDialog: !0, dialogText: U, dialogHeadline: L });
                                },
                            },
                            [a.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: O, dialogHeadline: L });
                                },
                            },
                            [a.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: D, dialogHeadline: H });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: o, isTransparent: r, relationshipMode: s, showRelationshipChangeConfirmation: a, size: c, style: d, user: u, userId: h } = this.props,
                        { dialogHeadline: p, dialogText: f, showDialog: w } = this.state,
                        g = u?.screen_name,
                        _ = g ? `/${g}` : "",
                        C = { follow: v(h), unfollow: T(h), cancel: I(h), block: P(h), unblock: S(h), subscribe: x(h), manageSubscription: k(h) },
                        F = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        n.createElement(
                            n.Fragment,
                            null,
                            w ? n.createElement(l.Z, { confirmButtonLabel: N, headline: p, onCancel: this._handleClose, onConfirm: this._handleClose, text: f, withCancelButton: !1 }) : null,
                            n.createElement(b.Z, { displayMode: m.BH.follow, postLoginPath: _, userFullName: u.name, userId: h }, (l) => n.createElement(i.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: F, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!o && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: r, name: g, onCancelPendingFollow: l(this._handleCancelPendingFollow), onFollow: l(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: l(this._handleSuperFollow), onUnSuperFollow: l(this._handleUnSuperFollow), onUnblock: l(this._handleUnblock), onUnfollow: l(this._handleUnfollow), relationshipMode: s, showRelationshipChangeConfirmation: t && a, size: c, style: d, testIDs: C, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: o } = e,
                        { analytics: n, location: l, promotedContent: i, user: r } = this.props,
                        { items: s } = n.contextualScribeData,
                        a = s?.find((e) => e.item_type === p.Z.ItemType.USER && e.id === r?.id_str),
                        c = [];
                    r ? c.push({ ...a, ...f.Z.getUserItem(r, i) }) : a && c.push(a);
                    const d = l.query && l.query.screen_name ? { items: c, context: "profile_intent" } : { items: c };
                    return n.scribe({ element: o, action: t, data: d });
                }
            }
            const R = (0, w.ZP)(Z(z));
        },
        863934: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                l = o(154003),
                i = o(392237),
                r = o(111677),
                s = o.n(r),
                a = o(837020),
                c = o(725516),
                d = o(288955),
                u = o(71620),
                h = o(668214),
                p = o(466380);
            const f = (0, h.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("TOPIC_NOT_INTERESTED_CONTEXT"), setNotInterested: p.Z.notInterested })),
                w = s().d9b417c4,
                m = s().c29d6806,
                b = s().e839db3a,
                g = i.default.create((e) => ({ closeIcon: { color: e.colors.gray700 } })),
                _ = n.createElement(a.default, { "aria-label": b, style: g.closeIcon }),
                C = f((e) => {
                    const { createLocalApiErrorHandler: t, id: o, onPress: i, setNotInterested: r, size: s = "small", style: a, text: u = m, topicId: h, type: p = "brandText", withIconOnly: f = !0 } = e,
                        g = (0, c.z)(),
                        C = n.useCallback(
                            (e) => {
                                e.preventDefault(), i ? i(e) : (g.scribe({ element: "topic", action: "not_interested" }), r(h).catch(t()));
                            },
                            [g, t, i, r, h],
                        );
                    return n.createElement(d.Z, null, (e) => n.createElement(l.ZP, { "aria-label": w, hoverLabel: { label: b }, icon: f ? _ : void 0, id: o, onPress: e(C), pullRight: f, size: s, style: a, type: p }, f ? null : u));
                });
        },
        37341: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(807896),
                l = o(202784),
                i = o(433460),
                r = o(235902),
                s = o(823161),
                a = o(192464),
                c = o(49905),
                d = o(668214),
                u = o(624479);
            const h = (e, t) => (0, u.cY)(e, t.userId),
                p = (e) => {
                    const { avatarRef: t, id: o, imageLayoutCache: d, link: u, onClick: h, onHoverCardScreenNameClick: p, promotedContent: f, screenName: w, size: m, style: b, uri: g, userAvatarLabel: _, userId: C, userSpace: F, withHoverCard: y, withLink: E } = e;
                    l.useEffect(
                        () => (
                            a.Z.registerUserInApp(C),
                            () => {
                                a.Z.deregisterUserInApp(C);
                            }
                        ),
                        [C],
                    );
                    const Z = (F && F.spaceId) || "";
                    return (0, c.R)(Z), F ? l.createElement(i.Z, (0, n.Z)({ avatarRef: t, id: o, imageLayoutCache: d, link: u, onClick: h, onHoverCardScreenNameClick: p, promotedContent: f, screenName: w, size: m, style: b, uri: g, withHoverCard: y, withLink: E }, F)) : l.createElement(r.ZP.Provider, { value: { userAvatarLabel: () => _ } }, l.createElement(s.default, { avatarRef: t, id: o, imageLayoutCache: d, link: u, onClick: h, onHoverCardScreenNameClick: p, promotedContent: f, screenName: w, size: m, style: b, uri: g, withHoverCard: y, withLink: E }));
                },
                f = (0, d.Z)().propsFromState(() => ({ userSpace: h }))(l.memo(p));
        },
        668843: (e, t, o) => {
            o.d(t, { Z: () => w, C: () => b });
            var n = o(202784),
                l = o(154003),
                i = o(392237),
                r = o(111677),
                s = o.n(r),
                a = o(416276),
                c = o(725405),
                d = o(443781),
                u = o(668214);
            const h = (e, t) => {
                    const o = t.module.selectMetadata(e),
                        n = !!t.focalTweet?.article;
                    return !!o?.reader_mode_config?.is_reader_mode_available && !n;
                },
                p = (0, u.Z)().propsFromState(() => ({ readerModeAvailable: h })),
                f = s().b8f3500a,
                w = ({ focalTweet: e, isExpanded: t, readerModeAvailable: o }) => {
                    const { featureSwitches: i, userClaims: r } = n.useContext(d.rC),
                        s = i.isTrue("longform_reader_mode_view_in_reader_mode_entry_button_enabled"),
                        u = (0, c.Z)(),
                        h = o && r?.isTrueAndEnabled("subscriptions_feature_1005"),
                        p = e?.id_str,
                        w = e?.user?.screen_name,
                        b = () => {
                            u.scribe({ action: "click", element: t ? "view_in_reader_mode_button" : "reader_mode_header_icon_enable", page: "thread", section: "reader_mode", data: { tweet_id: p } });
                        };
                    return h
                        ? (() => {
                              if (p && w) {
                                  const e = `/${w}/thread/${p}`;
                                  return t ? (s ? n.createElement(l.ZP, { link: e, onClick: b, style: m.button, testID: "viewInReaderLabel", type: "primaryOutlined" }, f) : null) : n.createElement(l.ZP, { icon: n.createElement(a.default, { style: m.icon }), link: e, onClick: b, type: "brandText" });
                              }
                              return null;
                          })()
                        : null;
                },
                m = i.default.create((e) => ({ button: { marginTop: e.spaces.space8, marginBottom: e.spaces.space20 }, icon: { color: e.colors.text, weight: "bold" } })),
                b = p(({ focalTweet: e, isExpanded: t, readerModeAvailable: o }) => n.createElement(w, { focalTweet: e, isExpanded: t, readerModeAvailable: o }));
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
        512110: (e, t, o) => {
            o.d(t, { ZP: () => P });
            var n = o(807896),
                l = o(202784),
                i = o(325686),
                r = o(154003),
                s = o(995145),
                a = o(373926),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                h = o(837020),
                p = o(516951),
                f = o(323265),
                w = o(290402),
                m = o(808692),
                b = o(503229),
                g = o(668214),
                _ = o(836255),
                C = o(312771);
            const F = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? _.Z.selectHydrated(e, o) : void 0;
                },
                y = (e, t) => {
                    const { hasPostPreloaded: o, isPostBatchingEnabled: n, tweetId: l } = t,
                        i = n ? (o ? void 0 : C.iF.LOADING) : void 0;
                    return l ? (i ?? _.Z.selectFetchStatus(e, l)) : void 0;
                },
                E = (0, g.Z)()
                    .propsFromState(() => ({ tweet: F, fetchStatus: y }))
                    .propsFromActions(() => ({ fetchTweetIfNeeded: _.Z.fetchOneIfNeeded })),
                Z = u().e68b09b4,
                v = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", overflow: "hidden" }, tweet: { flex: 1 }, iconClose: { color: e.colors.gray300 }, removeTweetButton: { alignSelf: "flex-start", marginEnd: e.spaces.space4, marginTop: e.spaces.space4 }, tombstoneContainer: { display: "flex" } })),
                T = l.createElement(h.default, { style: v.iconClose }),
                P = E(
                    (0, b.Z)(({ fetchStatus: e, fetchTweetIfNeeded: t, hasPostPreloaded: o, isPostBatchingEnabled: c, onClick: d, onRemove: u, style: h, tweet: b, tweetId: g, withActionsDisabled: _ }) => {
                        const C = f.ZP.isTwitterApp(),
                            F = l.useCallback(() => {
                                t(g);
                            }, [g, t]);
                        l.useEffect(() => {
                            g && (!c || o) && F();
                        }, [F, g, c, o]);
                        const y = () => {
                                d && d();
                            },
                            E = u ? l.createElement(r.ZP, { icon: T, onPress: u, preventFocusShift: !0, size: "small", style: v.removeTweetButton, testID: "remove-button", type: "primaryText" }) : null,
                            P = (e) => {
                                const { link: t } = e,
                                    o = "string" == typeof t ? { pathname: t, state: {} } : t,
                                    i = o ? { ...o, anchorless: !1, external: !0, openInSameFrame: !1 } : void 0;
                                return l.createElement(s.Z.Timestamp, (0, n.Z)({}, e, { link: i }));
                            },
                            S = b?.permalink;
                        return l.createElement(w.Z, { fetchStatus: e, render: () => (b ? l.createElement(i.Z, { style: [v.container, h], testID: "simpleTweet" }, l.createElement(i.Z, { style: v.tweet }, _ ? l.createElement(s.Z, { onPress: y, renderTimestamp: P, tweet: b }) : l.createElement(m.ZP, { onAnalyticsClick: p.Z, onAvatarClick: p.Z, onClick: y, onEngagementsClick: p.Z, onEntityClick: p.Z, onMediaClick: p.Z, onReplyContextClick: p.Z, to: S, tweet: b, withActions: !C })), E) : null), renderFailure: () => l.createElement(i.Z, { style: [v.tombstoneContainer, h], testID: "tombstone" }, l.createElement(a.Z, { actionText: Z, onActionClick: u, withFooterGap: !1, withHeader: !1, withHorizontalPadding: !1 })), retryable: !1 });
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62.6a1ced3a.js.map

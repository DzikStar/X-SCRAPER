"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"],
    {
        293988: (e, t, o) => {
            o.d(t, { Z: () => E });
            var n = o(202784),
                l = o(154003),
                r = o(674132),
                i = o.n(r),
                a = o(74514),
                s = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                f = o(668214),
                h = o(257166),
                w = o(919022);
            const m = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                p = (0, f.Z)()
                    .propsFromState(() => ({ shouldPromptPush: m }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: w.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = i().bdba3e1a,
                _ = i().c4da7d28,
                g = i().j87c21f4,
                v = i().iebc30ca,
                y = i().dc740eb2;
            class C extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(l.ZP, { "aria-label": _, hoverLabel: { label: v }, icon: n.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(l.ZP, { "aria-label": b, hoverLabel: { label: g }, icon: n.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
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
            const E = p(C);
        },
        265196: (e, t, o) => {
            o.d(t, { ZP: () => y });
            o(136728);
            var n = o(202784),
                l = o(970187),
                r = o(674132),
                i = o.n(r),
                a = o(258292),
                s = o(500002),
                c = o(233391),
                d = o(288955),
                u = o(71620),
                f = o(668214),
                h = o(466380);
            const w = (0, f.Z)()
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_TOPIC_BUTTON"), follow: h.Z.follow, unfollow: h.Z.unfollow }))
                .withAnalytics();
            var m = o(421575);
            const p = Object.freeze({ follow: i().i79ab12a, following: i().d960b55c, unfollow: i().c0f56044 }),
                b = Object.freeze({ follow: i().fcf51fe6, following: i().e9a90d72, unfollow: i().bf403716, confirmationHeadline: i().c9f08e29, confirmationSheetText: i().hed4dcd0 }),
                _ = Object.freeze({ follow: i().cd876e02, following: i().f2816e02, unfollow: i().f5b04fbc, confirmationHeadline: i().c481ae3f, confirmationSheetText: i().c94116de }),
                g = Object.freeze({ follow: i().e0e730b0, following: i().e0e730b0, unfollow: i().b1850062, confirmationHeadline: i().gd3f996f, confirmationSheetText: i().jdd65aac });
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getDisplayMode = (e) => (void 0 === this._getFollowButtonIcon(e) ? "only-text" : "icon-text")),
                        (this._getFollowButtonIcon = (e) => {
                            switch (e) {
                                case m.q.Favorite:
                                case m.q.Star:
                                case m.q.Interested:
                                    return n.createElement(a.default, null);
                                case m.q.FollowTopic:
                                case m.q.Default:
                                default:
                                    return;
                            }
                        }),
                        (this._getFollowingButtonIcon = (e) => ("icon-text" === this._getDisplayMode(e) ? n.createElement(n.Fragment, null) : void 0)),
                        (this._getButtonText = (e) => {
                            const { topic: t } = this.props;
                            switch (e) {
                                case m.q.FollowTopic:
                                    return { follow: p.follow, unfollow: p.unfollow, following: p.following };
                                case m.q.Favorite:
                                    return { follow: _.follow, unfollow: _.unfollow, following: _.following, confirmationHeadline: _.confirmationHeadline && _.confirmationHeadline({ title: t.name }), confirmationSheetText: _.confirmationSheetText };
                                case m.q.Star:
                                    return { follow: b.follow, unfollow: b.unfollow, following: b.following, confirmationHeadline: b.confirmationHeadline && b.confirmationHeadline({ title: t.name }), confirmationSheetText: b.confirmationSheetText };
                                case m.q.Interested:
                                    return { follow: g.follow, unfollow: g.unfollow, following: g.following, confirmationHeadline: g.confirmationHeadline && g.confirmationHeadline({ title: t.name }), confirmationSheetText: g.confirmationSheetText };
                                case m.q.Default:
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
                        showRelationshipChangeConfirmation: r,
                        size: i,
                        style: a,
                        textMode: s,
                        topic: { following: u, name: f },
                    } = this.props;
                    return n.createElement(d.Z, { customText: f, displayMode: c.BH.topic }, (c) => n.createElement(l.Z, { "aria-describedby": e, buttonIcons: { followIcon: this._getFollowButtonIcon(s), followingIcon: this._getFollowingButtonIcon(s) }, buttonText: this._getButtonText(s), displayMode: this._getDisplayMode(s), id: t, isFollowing: u, isTransparent: o, name: f, onFollow: c(this._handleOnFollow), onUnfollow: c(this._handleOnUnfollow), showRelationshipChangeConfirmation: r, size: i, style: a, type: "topic", withConfirmationSheetText: u }));
                }
                _handleScribe(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ element: "topic", action: e });
                }
            }
            v.defaultProps = { size: "small", textMode: m.q.Default };
            const y = (0, s.ZP)(w(v));
        },
        421575: (e, t, o) => {
            o.d(t, { q: () => n });
            o(202784);
            const n = Object.freeze({ Default: "default", FollowTopic: "follow", Star: "star", Interested: "interested", Favorite: "favorite" });
        },
        863934: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                l = o(154003),
                r = o(392237),
                i = o(674132),
                a = o.n(i),
                s = o(837020),
                c = o(725516),
                d = o(288955),
                u = o(71620),
                f = o(668214),
                h = o(466380);
            const w = (0, f.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("TOPIC_NOT_INTERESTED_CONTEXT"), setNotInterested: h.Z.notInterested })),
                m = a().d9b417c4,
                p = a().c29d6806,
                b = a().e839db3a,
                _ = r.default.create((e) => ({ closeIcon: { color: e.colors.gray700 } })),
                g = n.createElement(s.default, { "aria-label": b, style: _.closeIcon }),
                v = w((e) => {
                    const { createLocalApiErrorHandler: t, id: o, onPress: r, setNotInterested: i, size: a = "small", style: s, text: u = p, topicId: f, type: h = "brandText", withIconOnly: w = !0 } = e,
                        _ = (0, c.z)(),
                        v = n.useCallback(
                            (e) => {
                                e.preventDefault(), r ? r(e) : (_.scribe({ element: "topic", action: "not_interested" }), i(f).catch(t()));
                            },
                            [_, t, r, i, f],
                        );
                    return n.createElement(d.Z, null, (e) => n.createElement(l.ZP, { "aria-label": m, hoverLabel: { label: b }, icon: w ? g : void 0, id: o, onPress: e(v), pullRight: w, size: a, style: s, type: h }, w ? null : u));
                });
        },
        37341: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(807896),
                l = o(202784),
                r = o(433460),
                i = o(235902),
                a = o(823161),
                s = o(192464),
                c = o(49905),
                d = o(668214),
                u = o(624479);
            const f = (e, t) => (0, u.cY)(e, t.userId),
                h = (e) => {
                    const { avatarRef: t, id: o, imageLayoutCache: d, onClick: u, onHoverCardScreenNameClick: f, promotedContent: h, screenName: w, size: m, style: p, uri: b, userAvatarLabel: _, userId: g, userSpace: v, withHoverCard: y, withLink: C } = e;
                    l.useEffect(
                        () => (
                            s.Z.registerUserInApp(g),
                            () => {
                                s.Z.deregisterUserInApp(g);
                            }
                        ),
                        [g],
                    );
                    const E = (v && v.spaceId) || "";
                    return (0, c.R)(E), v ? l.createElement(r.Z, (0, n.Z)({ avatarRef: t, id: o, imageLayoutCache: d, onClick: u, onHoverCardScreenNameClick: f, promotedContent: h, screenName: w, size: m, style: p, uri: b, withHoverCard: y, withLink: C }, v)) : l.createElement(i.ZP.Provider, { value: { userAvatarLabel: () => _ } }, l.createElement(a.default, { avatarRef: t, id: o, imageLayoutCache: d, onClick: u, onHoverCardScreenNameClick: f, promotedContent: h, screenName: w, size: m, style: p, uri: b, withHoverCard: y, withLink: C }));
                },
                w = (0, d.Z)().propsFromState(() => ({ userSpace: f }))(l.memo(h));
        },
        668843: (e, t, o) => {
            o.d(t, { Z: () => m, C: () => b });
            var n = o(202784),
                l = o(154003),
                r = o(392237),
                i = o(674132),
                a = o.n(i),
                s = o(416276),
                c = o(725405),
                d = o(443781),
                u = o(668214);
            const f = (e, t) => {
                    const o = t.module.selectMetadata(e),
                        n = !!t.focalTweet?.article;
                    return !!o?.reader_mode_config?.is_reader_mode_available && !n;
                },
                h = (0, u.Z)().propsFromState(() => ({ readerModeAvailable: f })),
                w = a().b8f3500a,
                m = ({ focalTweet: e, isExpanded: t, readerModeAvailable: o }) => {
                    const { featureSwitches: r, userClaims: i } = n.useContext(d.rC),
                        a = r.isTrue("longform_reader_mode_view_in_reader_mode_entry_button_enabled"),
                        u = (0, c.Z)(),
                        f = o && i?.isTrueAndEnabled("subscriptions_feature_1005"),
                        h = e?.id_str,
                        m = e?.user?.screen_name,
                        b = () => {
                            u.scribe({ action: "click", element: t ? "view_in_reader_mode_button" : "reader_mode_header_icon_enable", page: "thread", section: "reader_mode", data: { tweet_id: h } });
                        };
                    return f
                        ? (() => {
                              if (h && m) {
                                  const e = `/${m}/thread/${h}`;
                                  return t ? (a ? n.createElement(l.ZP, { link: e, onClick: b, style: p.button, testID: "viewInReaderLabel", type: "primaryOutlined" }, w) : null) : n.createElement(l.ZP, { icon: n.createElement(s.default, { style: p.icon }), link: e, onClick: b, type: "brandText" });
                              }
                              return null;
                          })()
                        : null;
                },
                p = r.default.create((e) => ({ button: { marginTop: e.spaces.space8, marginBottom: e.spaces.space20 }, icon: { color: e.colors.text, weight: "bold" } })),
                b = h(({ focalTweet: e, isExpanded: t, readerModeAvailable: o }) => n.createElement(m, { focalTweet: e, isExpanded: t, readerModeAvailable: o }));
        },
        512110: (e, t, o) => {
            o.d(t, { ZP: () => P });
            var n = o(807896),
                l = o(202784),
                r = o(325686),
                i = o(154003),
                a = o(995145),
                s = o(373926),
                c = o(392237),
                d = o(674132),
                u = o.n(d),
                f = o(837020),
                h = o(516951),
                w = o(323265),
                m = o(290402),
                p = o(808692),
                b = o(503229),
                _ = o(668214),
                g = o(836255),
                v = o(312771);
            const y = (e, t) => {
                    const { tweetId: o } = t;
                    return o ? g.Z.selectHydrated(e, o) : void 0;
                },
                C = (e, t) => {
                    const { hasPostPreloaded: o, isPostBatchingEnabled: n, tweetId: l } = t,
                        r = n ? (o ? void 0 : v.iF.LOADING) : void 0;
                    return l ? (r ?? g.Z.selectFetchStatus(e, l)) : void 0;
                },
                E = (0, _.Z)()
                    .propsFromState(() => ({ tweet: y, fetchStatus: C }))
                    .propsFromActions(() => ({ fetchTweetIfNeeded: g.Z.fetchOneIfNeeded })),
                Z = u().e68b09b4,
                T = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, boxShadow: e.boxShadows.xSmall, flexDirection: "row", width: "100%", overflow: "hidden" }, tweet: { flex: 1 }, iconClose: { color: e.colors.gray300 }, removeTweetButton: { alignSelf: "flex-start", marginEnd: e.spaces.space4, marginTop: e.spaces.space4 }, tombstoneContainer: { display: "flex" } })),
                F = l.createElement(f.default, { style: T.iconClose }),
                P = E(
                    (0, b.Z)(({ fetchStatus: e, fetchTweetIfNeeded: t, hasPostPreloaded: o, isPostBatchingEnabled: c, onClick: d, onRemove: u, style: f, tweet: b, tweetId: _, withActionsDisabled: g }) => {
                        const v = w.ZP.isTwitterApp(),
                            y = l.useCallback(() => {
                                t(_);
                            }, [_, t]);
                        l.useEffect(() => {
                            _ && (!c || o) && y();
                        }, [y, _, c, o]);
                        const C = () => {
                                d && d();
                            },
                            E = u ? l.createElement(i.ZP, { icon: F, onPress: u, preventFocusShift: !0, size: "small", style: T.removeTweetButton, testID: "remove-button", type: "primaryText" }) : null,
                            P = (e) => {
                                const { link: t } = e,
                                    o = "string" == typeof t ? { pathname: t, state: {} } : t,
                                    r = o ? { ...o, anchorless: !1, external: !0, openInSameFrame: !1 } : void 0;
                                return l.createElement(a.Z.Timestamp, (0, n.Z)({}, e, { link: r }));
                            },
                            I = b?.permalink;
                        return l.createElement(m.Z, { fetchStatus: e, render: () => (b ? l.createElement(r.Z, { style: [T.container, f], testID: "simpleTweet" }, l.createElement(r.Z, { style: T.tweet }, g ? l.createElement(a.Z, { onPress: C, renderTimestamp: P, tweet: b }) : l.createElement(p.ZP, { onAnalyticsClick: h.Z, onAvatarClick: h.Z, onClick: C, onEngagementsClick: h.Z, onEntityClick: h.Z, onMediaClick: h.Z, onReplyContextClick: h.Z, to: I, tweet: b, withActions: !v })), E) : null), renderFailure: () => l.createElement(r.Z, { style: [T.tombstoneContainer, f], testID: "tombstone" }, l.createElement(s.Z, { actionText: Z, onActionClick: u, withFooterGap: !1, withHeader: !1, withHorizontalPadding: !1 })), retryable: !1 });
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62.30ffe74a.js.map

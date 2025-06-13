"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-9f4db315"],
    {
        904940: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, r) => e.post("media/metadata/create", t, {}, { ...r, "content-type": "application/json" }), attachSubtitles: (t, r) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...r, "content-type": "application/json" }) });
        },
        708482: (e, t, r) => {
            r.d(t, { s: () => i });
            var n = r(10622),
                s = r.n(n);
            function i(e, t, r, n) {
                return s()(e, t, r, n ? { networkCacheConfig: { metadata: { isFatalError: n } } } : void 0).toPromise();
            }
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(807896),
                s = r(202784),
                i = r(182056),
                o = r(879113),
                l = r(392237),
                a = r(111677),
                c = r.n(a),
                d = r(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, r) => {
                    const l = i.Z.isOnline();
                    return s.createElement(o.Z, (0, n.Z)({}, t, { icon: l ? void 0 : s.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = s.forwardRef(p);
        },
        989816: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                s = r(970187),
                i = r(392237),
                o = r(379327),
                l = r(913973),
                a = r(320588),
                c = r(233391),
                d = r(288955),
                u = r(71620),
                p = r(668214),
                m = r(576469);
            const h = (0, p.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: m.Z.subscribe, unfollow: m.Z.unsubscribe }))
                    .withAnalytics(),
                _ = { followIcon: n.createElement(o.default, null), followingIcon: n.createElement(l.default, null) },
                f = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: r, disabled: i, follow: o, isFollowing: l, isMinimal: u, listId: p, listName: m, unfollow: h, user: f } = e,
                        b = n.useCallback(() => {
                            t.scribeAction("follow"), o(p).catch(r(a.lg));
                        }, [t, r, o, p]),
                        g = n.useCallback(() => {
                            t.scribeAction("unfollow"), h(p).catch(r(a.Sm));
                        }, [t, r, p, h]);
                    return n.createElement(d.Z, { customText: m, displayMode: c.BH.subscribe, userFullName: f?.name }, (e) => n.createElement(s.Z, { buttonIcons: u ? _ : void 0, disabled: i, displayMode: u ? "only-icon" : void 0, isFollowing: l, onFollow: e(b), onUnfollow: e(g), showRelationshipChangeConfirmation: !1, size: "small", style: w.followButton, type: "list" }));
                },
                w = i.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                b = h(n.memo(f));
        },
        582751: (e, t, r) => {
            r.d(t, { Z8: () => o, mM: () => s, vx: () => i });
            var n = r(882122);
            const s = (e, t) => {
                    const r = n.lP(e, t);
                    if (void 0 === r) return r;
                    const s = n.c1(e, t),
                        i = n.og(e, t);
                    return r - (s.length - i.length);
                },
                i = (e, t) => n.og(e, t).map(({ profile_image_url_https: e }) => e),
                o = (e, t) => n.og(e, t).map(({ name: e }) => e);
        },
        527409: (e, t, r) => {
            r.r(t), r.d(t, { ListDetail: () => P, default: () => T, formatNumber: () => N });
            var n = r(202784),
                s = r(272175),
                i = r(325686),
                o = r(98538),
                l = r(530525),
                a = r(439592),
                c = r(392237),
                d = r(682474),
                u = r(731708),
                p = r(366635),
                m = r(154003),
                h = r(111677),
                _ = r.n(h),
                f = r(121791),
                w = r(401388),
                b = r(443781),
                g = r(989816),
                C = r(668214),
                y = r(576469),
                E = r(390387),
                Z = r(919022),
                S = r(510588);
            const v = (e, t) => {
                    const { listId: r } = t;
                    return r ? y.Z.select(e, r) : void 0;
                },
                I = (e, t) => {
                    const r = v(e, t),
                        n = r?.user;
                    return n ? Z.ZP.select(e, n) : void 0;
                },
                F = (e, t) => S.tt(e, t.listId),
                k = (0, C.Z)()
                    .propsFromState(() => ({ list: v, user: I, viewerUserId: E._h, media: F }))
                    .withAnalytics(),
                N = _().d58baa7f,
                x = _().ca5d0a82,
                B = _().j681933e;
            class P extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, w.Z)(t)) {
                                const { url: e } = t;
                                return n.createElement(n.Fragment, null, n.createElement(s.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: e, property: "og:image" })), n.createElement(l.Z, { "aria-label": "", aspectMode: a.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return n.createElement(d.Z, { ratio: 3 }, n.createElement(i.Z, { style: U.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: r, member_count: o, mode: l, name: a, subscriber_count: c } = e,
                                    d = c || 0,
                                    m = o || 0,
                                    h = "private" === l;
                                return n.createElement(i.Z, { style: U.description }, n.createElement(i.Z, { style: [U.name, U.text] }, n.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, a.trim()), h ? n.createElement(f.default, { "aria-label": B, style: U.iconLock }) : null), r ? n.createElement(n.Fragment, null, n.createElement(s.ql, { prioritizeSeoTags: !0 }, n.createElement("meta", { content: r.trim(), property: "og:description" })), n.createElement(u.ZP, { align: "center", style: U.text }, r.trim())) : null, t ? n.createElement(p.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: U.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, m), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: r } = this.props,
                                s = N(e),
                                i = N(t);
                            return n.createElement(o.Z.Group, null, n.createElement(o.Z, { count: t, link: `${r}/members`, onPress: this._handleMembersCountPress }, n.createElement(_().I18NFormatMessage, { $i18n: "b38e130b" }, n.createElement(o.Z.Value, null, _().ibd0106e({ formattedCount: i })), n.createElement(o.Z.Label, null, _().cface2d1({ count: t })))), n.createElement(o.Z, { count: e, link: `${r}/followers`, onPress: this._handleSubscribersCountPress }, ((l = e), (a = s), n.createElement(_().I18NFormatMessage, { $i18n: "d2924acb" }, n.createElement(o.Z.Value, null, _().ec08efe4({ formattedCount: a })), n.createElement(o.Z.Label, null, _().h9f711f0({ count: l }))))));
                            var l, a;
                        }),
                        (this._handleEditPress = () => {
                            this._scribe({ element: "edit", action: "click" });
                        }),
                        (this._handleUserNamePress = () => {
                            this._scribe({ element: "user", action: "click" });
                        }),
                        (this._handleMembersCountPress = () => {
                            this._scribe({ element: "list_member", action: "click" });
                        }),
                        (this._handleSubscribersCountPress = () => {
                            this._scribe({ element: "list_subscribed", action: "click" });
                        }),
                        (this._renderActionButton = () => {
                            const { basePath: e, list: t, user: r, viewerUserId: s, withEditButton: o } = this.props;
                            if (t && t.user) {
                                const l = r?.blocking;
                                return t.user === s && o ? n.createElement(m.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: U.button, type: "primaryOutlined" }, x) : t.user !== s ? n.createElement(i.Z, { style: U.button }, n.createElement(g.Z, { disabled: l, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: r })) : null;
                            }
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        });
                }
                componentDidMount() {
                    this._scribe({ action: "impression" });
                }
                render() {
                    const { list: e, withRoundedCorners: t } = this.props;
                    return e ? n.createElement(i.Z, { style: [U.container, t && U.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (P.contextType = b.rC), (P.defaultProps = { withEditButton: !0 });
            const U = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                T = k(P);
        },
        217179: (e, t, r) => {
            r.r(t), r.d(t, { TopicHeader: () => A, default: () => M });
            var n = r(202784),
                s = r(325686),
                i = r(646496),
                o = r(537392),
                l = r(786475),
                a = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(791632),
                p = r(321835),
                m = r(946409),
                h = r(618566),
                _ = r(638090),
                f = r(500002),
                w = r(443781),
                b = r(265196),
                g = r(233391),
                C = r(863934),
                y = r(288955),
                E = r(177371),
                Z = r(459679),
                S = r(71620),
                v = r(668214),
                I = r(466380),
                F = r(919022);
            const k = (e, t) => I.Z.select(e, t.topicId),
                N = (e, t) => F.ZP.selectMany(e, t.facepile?.userIds || []),
                x = (e, t) => {
                    const r = N(e, t);
                    return (0, Z.Z)(r, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                B = (0, v.Z)()
                    .propsFromState(() => ({ topic: k, users: x }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("TOPIC_HEADER"), follow: I.Z.follow, unfollow: I.Z.unfollow, undoTopicNotInterested: I.Z.undoNotInterested }))
                    .withAnalytics(),
                P = d().b1850062,
                U = d().d69b2d90,
                T = d().gf5e9ea6;
            class A extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, h.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: r } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && r(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: r, topic: o, topicLandingContext: l, users: a } = this.props,
                        { description: c, name: d } = o || {},
                        h = a.slice(0, 4).map((e) => e.profile_image_url_https),
                        _ = e?.facepileUrl && (0, m.s9)(e.facepileUrl),
                        f = (0, u.cu)(t),
                        w = a && a.length > 3 ? { firstUsername: a[0].name || "", usersCount: a.length - 1, knownFollowersAvatarUrls: h, trendingFollowersUrl: _ || "" } : void 0;
                    return o && !f
                        ? n.createElement(
                              s.Z,
                              { style: L.root },
                              n.createElement(y.Z, { customText: d, displayMode: g.BH.topic }, () => n.createElement(p.Z, { onOffscreenChange: r }, n.createElement(i.Z, { children: this._renderTopicActions(), context: l, knownFollowers: w, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: d, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: r } = this.props;
                    return r
                        ? n.createElement(o.ZP, { key: "topic-header-actions" }, ({ containerWidth: i }) => {
                              const o = l.Z.isNarrowScreenWidth(i) ? L.mainViewSmall : L.mainView,
                                  a = this._additionalControlsEnabled ? (l.Z.isNarrowScreenWidth(i) ? L.followButtonSmall : L.followButton) : null,
                                  c = l.Z.isNarrowScreenWidth(i) ? L.notInterestButtonSmall : L.notInterestButton;
                              return n.createElement(n.Fragment, null, r.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === _.el.Basic ? n.createElement(s.Z, { style: o }, !this._additionalControlsEnabled || r.following || r.not_interested ? null : n.createElement(C.Z, { size: "medium", style: c, text: P, topicId: r.id, type: "primaryOutlined", withIconOnly: !1 }), n.createElement(b.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: a, textMode: this._followButtonTextVariant, topic: r })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return n.createElement(E.Z, { actionText: T, children: U, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (A.contextType = w.rC), (A.defaultProps = { displayType: _.el.Basic });
            const L = a.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                M = (0, f.ZP)(B(A));
        },
        953886: (e, t, r) => {
            r.r(t), r.d(t, { UserProfileCardContainer: () => N, default: () => x });
            var n = r(202784),
                s = r(266704),
                i = r(290402),
                o = r(666670),
                l = r(835546),
                a = r(312771),
                c = r(112859),
                d = r(461900),
                u = r(443781),
                p = r(23134),
                m = r(288955),
                h = r(71620),
                _ = r(668214),
                f = r(882122),
                w = r(38562),
                b = r(919022),
                g = r(582751);
            const C = (0, b.W3)([b.pL]),
                y = (e, t) => C(e, t.screenName),
                E = (e, t) => b.ZP.selectByScreenName(e, t.screenName),
                Z = (e, t) => b.ZP.selectIsUserNotFound(e, t.screenName),
                S = (e, t) => b.ZP.selectIsUserSuspended(e, t.screenName),
                v = (e, t) => b.ZP.selectIsUserWithheld(e, t.screenName),
                I = (e, t) => {
                    const r = E(e, t);
                    return r?.highlightedLabel;
                },
                F = (e, t) => {
                    const r = ((e, t) => b.ZP.selectIdByScreenName(e, t.screenName))(e, t);
                    return { avatarUrls: g.vx(e, r), count: g.mM(e, r), names: g.Z8(e, r) };
                },
                k = (0, _.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: w.f1, fetchStatus: y, isNotFound: Z, isSuspended: S, isWithheld: v, knownFollowers: F, user: E, userHighlightedLabel: I }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("USER_PROFILE_CARD"), fetchOneUserByScreenNameIfNeeded: b.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: f.Hq }))
                    .withAnalytics();
            class N extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserProfileCard = () => {
                            const { displaySensitiveMedia: e, isNotFound: t, isSuspended: r, isWithheld: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: c, profileLink: d, promotedContent: u, screenName: p, user: h, userHighlightedLabel: _ } = this.props;
                            if (r) return n.createElement(s.Z.Suspended, { onAvatarClick: a, onScreenNameClick: c, userScreenName: p });
                            if (!h) return null;
                            const { viewerUserId: f } = this.context,
                                w = !!f && f === h.id_str,
                                b = (0, l.n5)({ isOwnProfile: w, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: h }),
                                g = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                C = (0, l.ZP)({ displaySensitiveMedia: e, isNotFound: t, isSuspended: r, isWithheld: i, viewerUserId: f, user: h }),
                                y = { ...C, subscriptionsCount: C.subscriptionsCount && g, label: C.label };
                            return n.createElement(m.Z, null, (e) => n.createElement(s.Z, { followButton: this._renderFollowUserButton(), grokButton: this._renderGrokButton(), isAllowedToViewOptions: y, isLoggedIn: !!f, isUserBlueVerified: h.is_blue_verified, isUserProtected: h.protected, isUserStatsWithLink: b, isUserVerified: h.verified, knownFollowers: o, onAvatarClick: a, onScreenNameClick: c, onUserStatsPress: e(), profileLink: d, promotedContent: u, subscriptionsCount: h.creator_subscriptions_count, userAvatarUri: h.profile_image_url_https, userDescription: h.description, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userHighlightedLabel: _, userId: h.id_str, userName: h.name, userScreenName: p, userTranslatorType: h.translator_type, userVerifiedType: h.verified_type, userWithFollowsYou: h.followed_by, userWithheldDescription: h.withheld_description, userWithheldEntities: h.withheld_entities }));
                        }),
                        (this._renderFollowUserButton = () => {
                            const { promotedContent: e, showRelationshipChangeConfirmation: t, user: r } = this.props,
                                s = r?.id_str;
                            return s ? n.createElement(p.C, { promotedContent: e, showRelationshipChangeConfirmation: t, userId: s }) : void 0;
                        }),
                        (this._renderGrokButton = () => {
                            const e = (0, d.$)(this.context),
                                t = this.context.featureSwitches.isTrue("responsive_web_grok_profile_summary_enabled"),
                                r = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                                s = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                                i = this.props.user?.followers_count ?? 0,
                                o = this.props.user?.statuses_count ?? 0,
                                l = this.props.user?.screen_name,
                                a = this.props.user?.protected,
                                u = !this.props.user?.verified_type || "User" === this.props.user?.verified_type;
                            return !e || !t || !l || i < r || o < s || a || !u ? null : n.createElement(c.Z, { screenName: l });
                        }),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: r } = this.props;
                            t(r).catch((t) => {
                                e(o.F)(t);
                            });
                        }),
                        (this._handleFetchKnownFollowers = () => {
                            const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: r } = this.props,
                                n = r?.id_str;
                            n && t(n).catch(e({}));
                        });
                }
                componentDidMount() {
                    this._handleFetchUser(), this._handleFetchKnownFollowers();
                }
                componentDidUpdate(e) {
                    e.user?.id_str !== this.props.user?.id_str && this._handleFetchKnownFollowers();
                }
                render() {
                    const { fetchStatus: e, isSuspended: t } = this.props;
                    return n.createElement(i.Z, { fetchStatus: t ? a.ZP.LOADED : e, onRequestRetry: this._handleFetchUser, render: this._renderUserProfileCard });
                }
            }
            N.contextType = u.rC;
            const x = k(N);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-9f4db315.992531da.js.map

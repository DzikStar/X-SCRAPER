"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-9f4db315"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => s });
            const s = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => o });
            var s = i(10622),
                r = i.n(s);
            function o(e, t, i, s) {
                return r()(e, t, i, s ? { networkCacheConfig: { metadata: { isFatalError: s } } } : void 0).toPromise();
            }
        },
        989816: (e, t, i) => {
            i.d(t, { Z: () => g });
            var s = i(202784),
                r = i(970187),
                o = i(392237),
                n = i(379327),
                a = i(913973),
                l = i(320588),
                c = i(233391),
                d = i(288955),
                u = i(71620),
                m = i(668214),
                p = i(576469);
            const h = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: p.Z.subscribe, unfollow: p.Z.unsubscribe }))
                    .withAnalytics(),
                _ = { followIcon: s.createElement(n.default, null), followingIcon: s.createElement(a.default, null) },
                f = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: i, disabled: o, follow: n, isFollowing: a, isMinimal: u, listId: m, listName: p, unfollow: h, user: f } = e,
                        g = s.useCallback(() => {
                            t.scribeAction("follow"), n(m).catch(i(l.lg));
                        }, [t, i, n, m]),
                        w = s.useCallback(() => {
                            t.scribeAction("unfollow"), h(m).catch(i(l.Sm));
                        }, [t, i, m, h]);
                    return s.createElement(d.Z, { customText: p, displayMode: c.BH.subscribe, userFullName: f?.name }, (e) => s.createElement(r.Z, { buttonIcons: u ? _ : void 0, disabled: o, displayMode: u ? "only-icon" : void 0, isFollowing: a, onFollow: e(g), onUnfollow: e(w), showRelationshipChangeConfirmation: !1, size: "small", style: b.followButton, type: "list" }));
                },
                b = o.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                g = h(s.memo(f));
        },
        582751: (e, t, i) => {
            i.d(t, { Z8: () => n, mM: () => r, vx: () => o });
            var s = i(947650);
            const r = (e, t) => {
                    const i = s.lP(e, t);
                    if (void 0 === i) return i;
                    const r = s.c1(e, t),
                        o = s.og(e, t);
                    return i - (r.length - o.length);
                },
                o = (e, t) => s.og(e, t).map(({ profile_image_url_https: e }) => e),
                n = (e, t) => s.og(e, t).map(({ name: e }) => e);
        },
        527409: (e, t, i) => {
            i.r(t), i.d(t, { ListDetail: () => Z, default: () => U, formatNumber: () => A });
            var s = i(202784),
                r = i(272175),
                o = i(325686),
                n = i(98538),
                a = i(530525),
                l = i(439592),
                c = i(392237),
                d = i(682474),
                u = i(731708),
                m = i(366635),
                p = i(154003),
                h = i(111677),
                _ = i.n(h),
                f = i(121791),
                b = i(401388),
                g = i(443781),
                w = i(989816),
                v = i(668214),
                y = i(576469),
                E = i(390387),
                S = i(919022),
                I = i(510588);
            const L = (e, t) => {
                    const { listId: i } = t;
                    return i ? y.Z.select(e, i) : void 0;
                },
                T = (e, t) => {
                    const i = L(e, t),
                        s = i?.user;
                    return s ? S.ZP.select(e, s) : void 0;
                },
                C = (e, t) => I.tt(e, t.listId),
                O = (0, v.Z)()
                    .propsFromState(() => ({ list: L, user: T, viewerUserId: E._h, media: C }))
                    .withAnalytics(),
                A = _().d58baa7f,
                x = _().ca5d0a82,
                N = _().j681933e;
            class Z extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, b.Z)(t)) {
                                const { url: e } = t;
                                return s.createElement(s.Fragment, null, s.createElement(r.ql, { prioritizeSeoTags: !0 }, s.createElement("meta", { content: e, property: "og:image" })), s.createElement(a.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return s.createElement(d.Z, { ratio: 3 }, s.createElement(o.Z, { style: F.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: i, member_count: n, mode: a, name: l, subscriber_count: c } = e,
                                    d = c || 0,
                                    p = n || 0,
                                    h = "private" === a;
                                return s.createElement(o.Z, { style: F.description }, s.createElement(o.Z, { style: [F.name, F.text] }, s.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), h ? s.createElement(f.default, { "aria-label": N, style: F.iconLock }) : null), i ? s.createElement(s.Fragment, null, s.createElement(r.ql, { prioritizeSeoTags: !0 }, s.createElement("meta", { content: i.trim(), property: "og:description" })), s.createElement(u.ZP, { align: "center", style: F.text }, i.trim())) : null, t ? s.createElement(m.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: F.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, p), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: i } = this.props,
                                r = A(e),
                                o = A(t);
                            return s.createElement(n.Z.Group, null, s.createElement(n.Z, { count: t, link: `${i}/members`, onPress: this._handleMembersCountPress }, s.createElement(_().I18NFormatMessage, { $i18n: "b38e130b" }, s.createElement(n.Z.Value, null, _().ibd0106e({ formattedCount: o })), s.createElement(n.Z.Label, null, _().cface2d1({ count: t })))), s.createElement(n.Z, { count: e, link: `${i}/followers`, onPress: this._handleSubscribersCountPress }, ((a = e), (l = r), s.createElement(_().I18NFormatMessage, { $i18n: "d2924acb" }, s.createElement(n.Z.Value, null, _().ec08efe4({ formattedCount: l })), s.createElement(n.Z.Label, null, _().h9f711f0({ count: a }))))));
                            var a, l;
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
                            const { basePath: e, list: t, user: i, viewerUserId: r, withEditButton: n } = this.props;
                            if (t && t.user) {
                                const a = i?.blocking;
                                return t.user === r && n ? s.createElement(p.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: F.button, type: "primaryOutlined" }, x) : t.user !== r ? s.createElement(o.Z, { style: F.button }, s.createElement(w.Z, { disabled: a, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: i })) : null;
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
                    return e ? s.createElement(o.Z, { style: [F.container, t && F.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (Z.contextType = g.rC), (Z.defaultProps = { withEditButton: !0 });
            const F = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                U = O(Z);
        },
        217179: (e, t, i) => {
            i.r(t), i.d(t, { TopicHeader: () => P, default: () => k });
            var s = i(202784),
                r = i(325686),
                o = i(646496),
                n = i(537392),
                a = i(786475),
                l = i(392237),
                c = i(111677),
                d = i.n(c),
                u = i(791632),
                m = i(321835),
                p = i(946409),
                h = i(618566),
                _ = i(638090),
                f = i(500002),
                b = i(443781),
                g = i(265196),
                w = i(233391),
                v = i(863934),
                y = i(288955),
                E = i(177371),
                S = i(459679),
                I = i(71620),
                L = i(668214),
                T = i(466380),
                C = i(919022);
            const O = (e, t) => T.Z.select(e, t.topicId),
                A = (e, t) => C.ZP.selectMany(e, t.facepile?.userIds || []),
                x = (e, t) => {
                    const i = A(e, t);
                    return (0, S.Z)(i, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                N = (0, L.Z)()
                    .propsFromState(() => ({ topic: O, users: x }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("TOPIC_HEADER"), follow: T.Z.follow, unfollow: T.Z.unfollow, undoTopicNotInterested: T.Z.undoNotInterested }))
                    .withAnalytics(),
                Z = d().b1850062,
                F = d().d69b2d90,
                U = d().gf5e9ea6;
            class P extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, h.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: i } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && i(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: i, topic: n, topicLandingContext: a, users: l } = this.props,
                        { description: c, name: d } = n || {},
                        h = l.slice(0, 4).map((e) => e.profile_image_url_https),
                        _ = e?.facepileUrl && (0, p.s9)(e.facepileUrl),
                        f = (0, u.cu)(t),
                        b = l && l.length > 3 ? { firstUsername: l[0].name || "", usersCount: l.length - 1, knownFollowersAvatarUrls: h, trendingFollowersUrl: _ || "" } : void 0;
                    return n && !f
                        ? s.createElement(
                              r.Z,
                              { style: D.root },
                              s.createElement(y.Z, { customText: d, displayMode: w.BH.topic }, () => s.createElement(m.Z, { onOffscreenChange: i }, s.createElement(o.Z, { children: this._renderTopicActions(), context: a, knownFollowers: b, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: d, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: i } = this.props;
                    return i
                        ? s.createElement(n.ZP, { key: "topic-header-actions" }, ({ containerWidth: o }) => {
                              const n = a.Z.isNarrowScreenWidth(o) ? D.mainViewSmall : D.mainView,
                                  l = this._additionalControlsEnabled ? (a.Z.isNarrowScreenWidth(o) ? D.followButtonSmall : D.followButton) : null,
                                  c = a.Z.isNarrowScreenWidth(o) ? D.notInterestButtonSmall : D.notInterestButton;
                              return s.createElement(s.Fragment, null, i.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === _.el.Basic ? s.createElement(r.Z, { style: n }, !this._additionalControlsEnabled || i.following || i.not_interested ? null : s.createElement(v.Z, { size: "medium", style: c, text: Z, topicId: i.id, type: "primaryOutlined", withIconOnly: !1 }), s.createElement(g.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: l, textMode: this._followButtonTextVariant, topic: i })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return s.createElement(E.Z, { actionText: U, children: F, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (P.contextType = b.rC), (P.defaultProps = { displayType: _.el.Basic });
            const D = l.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                k = (0, f.ZP)(N(P));
        },
        953886: (e, t, i) => {
            i.r(t), i.d(t, { UserProfileCardContainer: () => A, default: () => x });
            var s = i(202784),
                r = i(266704),
                o = i(290402),
                n = i(666670),
                a = i(835546),
                l = i(312771),
                c = i(112859),
                d = i(461900),
                u = i(443781),
                m = i(23134),
                p = i(288955),
                h = i(71620),
                _ = i(668214),
                f = i(947650),
                b = i(38562),
                g = i(919022),
                w = i(582751);
            const v = (0, g.W3)([g.pL]),
                y = (e, t) => v(e, t.screenName),
                E = (e, t) => g.ZP.selectByScreenName(e, t.screenName),
                S = (e, t) => g.ZP.selectIsUserNotFound(e, t.screenName),
                I = (e, t) => g.ZP.selectIsUserSuspended(e, t.screenName),
                L = (e, t) => g.ZP.selectIsUserWithheld(e, t.screenName),
                T = (e, t) => {
                    const i = E(e, t);
                    return i?.highlightedLabel;
                },
                C = (e, t) => {
                    const i = ((e, t) => g.ZP.selectIdByScreenName(e, t.screenName))(e, t);
                    return { avatarUrls: w.vx(e, i), count: w.mM(e, i), names: w.Z8(e, i) };
                },
                O = (0, _.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: b.f1, fetchStatus: y, isNotFound: S, isSuspended: I, isWithheld: L, knownFollowers: C, user: E, userHighlightedLabel: T }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("USER_PROFILE_CARD"), fetchOneUserByScreenNameIfNeeded: g.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: f.Hq }))
                    .withAnalytics();
            class A extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserProfileCard = () => {
                            const { displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: o, knownFollowers: n, onAvatarClick: l, onScreenNameClick: c, profileLink: d, promotedContent: u, screenName: m, user: h, userHighlightedLabel: _ } = this.props;
                            if (i) return s.createElement(r.Z.Suspended, { onAvatarClick: l, onScreenNameClick: c, userScreenName: m });
                            if (!h) return null;
                            const { viewerUserId: f } = this.context,
                                b = !!f && f === h.id_str,
                                g = (0, a.n5)({ isOwnProfile: b, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: h }),
                                w = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                v = (0, a.ZP)({ displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: o, viewerUserId: f, user: h }),
                                y = { ...v, subscriptionsCount: v.subscriptionsCount && w, label: v.label };
                            return s.createElement(p.Z, null, (e) => s.createElement(r.Z, { followButton: this._renderFollowUserButton(), grokButton: this._renderGrokButton(), isAllowedToViewOptions: y, isLoggedIn: !!f, isUserBlueVerified: h.is_blue_verified, isUserProtected: h.protected, isUserStatsWithLink: g, isUserVerified: h.verified, knownFollowers: n, onAvatarClick: l, onScreenNameClick: c, onUserStatsPress: e(), profileLink: d, promotedContent: u, subscriptionsCount: h.creator_subscriptions_count, userAvatarUri: h.profile_image_url_https, userDescription: h.description, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userHighlightedLabel: _, userId: h.id_str, userName: h.name, userScreenName: m, userTranslatorType: h.translator_type, userVerifiedType: h.verified_type, userWithFollowsYou: h.followed_by, userWithheldDescription: h.withheld_description, userWithheldEntities: h.withheld_entities }));
                        }),
                        (this._renderFollowUserButton = () => {
                            const { promotedContent: e, showRelationshipChangeConfirmation: t, user: i } = this.props,
                                r = i?.id_str;
                            return r ? s.createElement(m.C, { promotedContent: e, showRelationshipChangeConfirmation: t, userId: r }) : void 0;
                        }),
                        (this._renderGrokButton = () => {
                            const e = (0, d.$)(this.context),
                                t = this.context.featureSwitches.isTrue("responsive_web_grok_profile_summary_enabled"),
                                i = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                                r = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                                o = this.props.user?.followers_count ?? 0,
                                n = this.props.user?.statuses_count ?? 0,
                                a = this.props.user?.screen_name,
                                l = this.props.user?.protected,
                                u = !this.props.user?.verified_type || "User" === this.props.user?.verified_type;
                            return !e || !t || !a || o < i || n < r || l || !u ? null : s.createElement(c.Z, { screenName: a });
                        }),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: i } = this.props;
                            t(i).catch((t) => {
                                e(n.F)(t);
                            });
                        }),
                        (this._handleFetchKnownFollowers = () => {
                            const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: i } = this.props,
                                s = i?.id_str;
                            s && t(s).catch(e({}));
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
                    return s.createElement(o.Z, { fetchStatus: t ? l.ZP.LOADED : e, onRequestRetry: this._handleFetchUser, render: this._renderUserProfileCard });
                }
            }
            A.contextType = u.rC;
            const x = O(A);
        },
        320588: (e, t, i) => {
            i.d(t, { Mt: () => p, Sm: () => m, lg: () => u });
            var s = i(111677),
                r = i.n(s),
                o = i(615656),
                n = i(601576);
            const a = r().add55942,
                l = r().ib8f5f3c,
                c = r().e20fc756,
                d = r().hae1c934,
                u = { customErrorHandler: () => (0, n.mf)({ text: a }), showToast: !0 },
                m = { customErrorHandler: () => (0, n.mf)({ text: l }), showToast: !0 },
                p = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === o.ZP.ListAdminRightsError).length) return (0, n.mf)({ text: c });
                        }
                        return (0, n.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => o });
            const s = (e, t, i) => {
                    const s = new Date();
                    let r = s.getFullYear() - e;
                    const o = s.getMonth() + 1 - t;
                    if (o < 0) r -= 1;
                    else if (0 === o) {
                        s.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? s(e, t, i) < 18 : r),
                o = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => K, ZP: () => q, vK: () => Q });
            var s = i(688715),
                r = i(111677),
                o = i.n(r),
                n = i(653843),
                a = i(122123),
                l = i(417144),
                c = i(884495),
                d = i(716233),
                u = i(540387);
            const m = o().b8098028,
                p = o().b36f4170,
                h = o().hab3781e,
                _ = o().f6c4fb02,
                f = o().g0af3dd2,
                b = o().b8c8b0be,
                g = o().ica6d718,
                w = o().b28d44f7({ limit: 15 }),
                v = o().i1db7d13,
                y = o().baac0ed7,
                E = v({ limit: 512 }),
                S = o().a22385bb,
                I = o().be0440bf,
                L = S({ limit: 140 }),
                T = o().feeba512,
                C = o().db123c02,
                O = o().db6001e7({ limit: 5 }),
                A = o().eb96d952,
                x = o().i859a9d4,
                N = o().b3880588,
                Z = o().ca058b68,
                F = o().id24379c,
                U = o().h4d7cbcc,
                P = (0, s.ju)("https://support.x.com/articles/20156423"),
                D = (0, s.ju)("https://help.x.com/using-twitter/twitter-videos"),
                k = (e) => ({ text: e }),
                M = (e) => ({ text: e, action: { label: x, link: P } }),
                B = (e) => ({ text: e, action: { label: x, link: D } }),
                V = { [n.Y7.GIF_IS_TOO_LARGE]: k(w), [n.Y7.CANNOT_BE_PROCESSED]: k(m), [n.Y7.FILE_IS_NOT_AN_IMAGE]: k(h) },
                z = { [l.d.ZERO_FILE_LENGTH]: k(p), [l.d.TIMEOUT]: k(N) },
                R = { ...z, [l.d.FILE_TOO_LARGE]: k(O), [l.d.UNSUPPORTED_MEDIA]: M(C), [l.d.INVALID_MEDIA]: M(T) },
                G = { ...z, [l.d.FILE_TOO_LARGE]: k(w), [l.d.UNSUPPORTED_MEDIA]: M(f), [l.d.INVALID_MEDIA]: M(_) },
                H = { ...z, [l.d.FILE_TOO_LARGE]: k(E), [l.d.UNSUPPORTED_MEDIA]: B(g), [l.d.INVALID_MEDIA]: B(b) },
                $ = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                j = 1048576,
                W = 1073741824,
                K = (e) => Object.values($).includes(e.type),
                X = (e) => {
                    const { code: t, limit: i, type: s } = e;
                    if (t)
                        switch (s) {
                            case $.MAXSIZE:
                                return t === d.BW.GIF_IS_TOO_LARGE ? k(w) : t === d.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? k(i >= W ? y({ limit: Math.round(i / W) }) : v({ limit: Math.round(i / j) })) : k(E);
                            case $.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? k(I({ limit: Math.round(i / 60) })) : { text: S({ limit: Math.round(i) }), action: { label: c.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${c.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : k(L);
                            case $.RESIZE:
                                return V[t];
                            case $.UPLOAD:
                                if (e.isImage) return R[t];
                                if (e.isGif) return G[t];
                                if (e.isVideo) return H[t];
                                break;
                            case $.METADATA:
                                return k(U);
                        }
                },
                Y = (e) => {
                    if (K(e)) return e;
                };
            function q(e, t = F) {
                const i = Y(e);
                if (i) {
                    const s = e.message ? `${t} ${e.message}` : t;
                    return X(i) || k(s);
                }
            }
            function Q(e, t = Z) {
                return e.type === a.gK.type && e.code === a.gK.NO_DIMENSIONS ? k(A) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? B(b) : k(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => u, Xj: () => m, ZP: () => S });
            var s = i(468811),
                r = i.n(s),
                o = i(595088),
                n = i(161821),
                a = i(184605),
                l = i(716233),
                c = i(774717);
            const d = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? h(e) : void 0),
                h = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${_(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                _ = (e) =>
                    (0, n.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                b = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                g = { [f.SruUpload]: b.SruUpload, [f.UploadSubmitUntilSruFinish]: b.UploadSubmitUntilSruFinish },
                w = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                v = (e, t) => ((0, a.Z)(e) && (0, a.Z)(t) ? Math.round(t - e) : void 0),
                y = () => (window.performance ? window.performance.now() : Date.now()),
                E = (e, t) => (e === l.xz.DMGif || e === l.xz.TweetGif ? w.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? w.Short : t < 20 ? w.Medium : t < 45 ? w.Long : t < 90 ? w.XLong : t < 140 ? w.L90to140s : t < 300 ? w.L140to300s : t < 600 ? w.L300to600s : t < 1200 ? w.L600to1200s : t < 1800 ? w.L1200to1800s : t < 2700 ? w.L1800to2700s : t < 3600 ? w.L2700to3600s : t < 4500 ? w.L3600to4500s : t < 5400 ? w.L4500to5400s : t < 6300 ? w.L5400to6300s : t < 7200 ? w.L6300to7200s : t < 10800 ? w.L7200to10800s : t < 14400 ? w.L10800to14400s : w.LGT14400s);
            class S {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: s } = e;
                            return `${t ? d.Remote : d.LocalFile}:${i}:${E(i, s)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = v(this._startTimes[e], y());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const s = this._getKey(e, t);
                            this._record(s, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = y()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = v(this._startTimes[f.Full], y());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const t = this._getKey(f.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = y();
                    else if (!t) {
                        const t = v(this._pauseTimes[e], y());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && g[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const s = { duration_ms: t, impression_id: this._impressionId, metadata: p(i) };
                    c.IM(e, s, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => f, SB: () => E, TO: () => I, Tz: () => g, U$: () => y, ff: () => b, vC: () => v, vn: () => S, xz: () => w, y$: () => h });
            var s = i(182056),
                r = i(323265),
                o = i(540387);
            const n = 1024,
                a = 1024 * n,
                l = 1,
                c = 4096,
                d = 2048,
                u = 400,
                m = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                h = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                _ = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                b = { VIDEO_IS_TOO_LONG: 1 },
                g = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                w = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                v = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                y = (e) => {
                    const { height: t, left: i, width: s } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + s / 2)},${r},1,1`;
                };
            function E(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function S(e, t, i, f, b) {
                const g = f?.location,
                    w = E({ featureSwitches: e, userClaims: t });
                let y, S;
                if (i.isSubtitles) y = 0;
                else if (i.isGif)
                    switch (g) {
                        case v.Avatar:
                            y = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * a;
                            break;
                        case v.Dm:
                        case v.Tweet:
                        default:
                            y = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * a;
                    }
                else {
                    if (!(i instanceof o.ZP))
                        return (function (e, t, i) {
                            let o;
                            switch (t) {
                                case v.Avatar:
                                    o = u;
                                    break;
                                case v.CommunityBanner:
                                case v.ListBanner:
                                case v.ProfileBanner:
                                    o = m;
                                    break;
                                default:
                                    o = r.ZP.isDesktopOS() ? c : d;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", p.Image) * a;
                            return s.Z.getConnectionInfo().then(
                                (s) => {
                                    let a = l;
                                    return "slow-2g" === s.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * n) : i || "2g" === s.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * n) : "3g" === s.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * n) : "4g" !== s.effectiveType || r.ZP.isDesktopOS() || t !== v.Tweet || (o = c), { maxDimension: o, maxFileSize: Math.min(l, a) };
                                },
                                () => ({ maxDimension: o, maxFileSize: l }),
                            );
                        })(e, g, b);
                    if (1 === w) {
                        if ("dm" === g) S = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", _);
                        else S = e.getNumberValue("media_async_upload_longer_video_max_video_duration", h.Duration[w]) * l;
                        y = e.getNumberValue("media_async_upload_longer_video_max_video_size", h.Size[w]) * a;
                    } else (S = e.getNumberValue("media_async_upload_max_video_duration", h.Duration[w]) * l), (y = e.getNumberValue("media_async_upload_max_video_size", h.Size[w]) * a);
                }
                return Promise.resolve({ maxFileSize: y, maxDuration: S });
            }
            function I(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        42508: (e, t, i) => {
            i.d(t, { Z: () => s });
            const s = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, i) => {
            i.d(t, { ZP: () => r, n5: () => n });
            var s = i(42508);
            const r = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: s, user: r, userProfileInterstitialType: n, viewerUserId: a }) => {
                    const l = !!a && a === r.id_str,
                        c = r.blocked_by,
                        d = r.blocking,
                        u = o({ displaySensitiveMedia: e, isOwnProfile: l, user: r, userProfileInterstitialType: n }),
                        m = (l || !s) && !i;
                    return { avatar: l || (!u && !t && !i && !s), badges: l || !s, description: l || (!d && !c && !u && !i && !s), followButton: !(l || c || u || t || i || s), followersYouKnow: !l && !c && !d && !u && !t && !i && !s && (r.following || !r.protected), followIndicator: !s, fullName: m, label: m, stats: l || (!c && !u && !i && !s), subscriptionsCount: l || !r.has_hidden_subscriptions_on_profile };
                },
                o = ({ displaySensitiveMedia: e, isOwnProfile: t, user: i, userProfileInterstitialType: r }) => (r === s.Z.SensitiveMedia || r === s.Z.OffensiveProfileContent) && !(t || i.following || e),
                n = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: i }) => {
                    const s = i.blocked_by,
                        r = i.protected && !i.following;
                    return t ? e || !r : e || (!r && !s);
                };
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => s, ZP: () => n, h_: () => r });
            i(543673), i(240753), i(128399);
            const s = [".srt", "text/plain", ""],
                r = (e) => -1 !== s.indexOf(e.type),
                o = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class n {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([o(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        961104: (e, t, i) => {
            function s(e, t) {
                return e.filter(t);
            }
            i.d(t, { b: () => s });
        },
        540387: (e, t, i) => {
            i.d(t, { Wv: () => r, ZP: () => n, hb: () => o, jn: () => s });
            i(571372), i(543673), i(240753), i(128399);
            const s = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== s.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class n {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((i, s) => {
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = o.type), s(i);
                                },
                                n = document.createElement("video");
                            (n.onloadedmetadata = () => {
                                t || (n.videoWidth && n.videoHeight) ? i(n) : r("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (n.onerror = () => {
                                    r("Error loading image", o.LOAD_FAILED);
                                }),
                                (n.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: s } = e;
                        return (this.width = s), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === s)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-9f4db315.15084d3a.js.map

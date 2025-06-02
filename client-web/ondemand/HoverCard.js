"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(807896),
                o = n(202784),
                s = n(182056),
                i = n(879113),
                a = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, n) => {
                    const a = s.Z.isOnline();
                    return o.createElement(i.Z, (0, r.Z)({}, t, { icon: a ? void 0 : o.createElement(d.default, { style: m.icon }), retryMessage: a ? e : u }));
                },
                m = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = o.forwardRef(p);
        },
        989816: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                o = n(970187),
                s = n(392237),
                i = n(379327),
                a = n(913973),
                l = n(320588),
                c = n(233391),
                d = n(288955),
                u = n(71620),
                p = n(668214),
                m = n(576469);
            const h = (0, p.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: m.Z.subscribe, unfollow: m.Z.unsubscribe }))
                    .withAnalytics(),
                f = { followIcon: r.createElement(i.default, null), followingIcon: r.createElement(a.default, null) },
                g = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, disabled: s, follow: i, isFollowing: a, isMinimal: u, listId: p, listName: m, unfollow: h, user: g } = e,
                        _ = r.useCallback(() => {
                            t.scribeAction("follow"), i(p).catch(n(l.lg));
                        }, [t, n, i, p]),
                        b = r.useCallback(() => {
                            t.scribeAction("unfollow"), h(p).catch(n(l.Sm));
                        }, [t, n, p, h]);
                    return r.createElement(d.Z, { customText: m, displayMode: c.BH.subscribe, userFullName: g?.name }, (e) => r.createElement(o.Z, { buttonIcons: u ? f : void 0, disabled: s, displayMode: u ? "only-icon" : void 0, isFollowing: a, onFollow: e(_), onUnfollow: e(b), showRelationshipChangeConfirmation: !1, size: "small", style: w.followButton, type: "list" }));
                },
                w = s.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                _ = h(r.memo(g));
        },
        582751: (e, t, n) => {
            n.d(t, { Z8: () => i, mM: () => o, vx: () => s });
            var r = n(882122);
            const o = (e, t) => {
                    const n = r.lP(e, t);
                    if (void 0 === n) return n;
                    const o = r.c1(e, t),
                        s = r.og(e, t);
                    return n - (o.length - s.length);
                },
                s = (e, t) => r.og(e, t).map(({ profile_image_url_https: e }) => e),
                i = (e, t) => r.og(e, t).map(({ name: e }) => e);
        },
        527409: (e, t, n) => {
            n.r(t), n.d(t, { ListDetail: () => k, default: () => B, formatNumber: () => I });
            var r = n(202784),
                o = n(272175),
                s = n(325686),
                i = n(98538),
                a = n(530525),
                l = n(439592),
                c = n(392237),
                d = n(682474),
                u = n(731708),
                p = n(366635),
                m = n(154003),
                h = n(111677),
                f = n.n(h),
                g = n(121791),
                w = n(401388),
                _ = n(443781),
                b = n(989816),
                y = n(668214),
                E = n(576469),
                Z = n(390387),
                v = n(919022),
                C = n(510588);
            const x = (e, t) => {
                    const { listId: n } = t;
                    return n ? E.Z.select(e, n) : void 0;
                },
                S = (e, t) => {
                    const n = x(e, t),
                        r = n?.user;
                    return r ? v.ZP.select(e, r) : void 0;
                },
                T = (e, t) => C.tt(e, t.listId),
                P = (0, y.Z)()
                    .propsFromState(() => ({ list: x, user: S, viewerUserId: Z._h, media: T }))
                    .withAnalytics(),
                I = f().d58baa7f,
                F = f().ca5d0a82,
                N = f().j681933e;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, w.Z)(t)) {
                                const { url: e } = t;
                                return r.createElement(r.Fragment, null, r.createElement(o.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: e, property: "og:image" })), r.createElement(a.Z, { "aria-label": "", aspectMode: l.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return r.createElement(d.Z, { ratio: 3 }, r.createElement(s.Z, { style: A.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: n, member_count: i, mode: a, name: l, subscriber_count: c } = e,
                                    d = c || 0,
                                    m = i || 0,
                                    h = "private" === a;
                                return r.createElement(s.Z, { style: A.description }, r.createElement(s.Z, { style: [A.name, A.text] }, r.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, l.trim()), h ? r.createElement(g.default, { "aria-label": N, style: A.iconLock }) : null), n ? r.createElement(r.Fragment, null, r.createElement(o.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: n.trim(), property: "og:description" })), r.createElement(u.ZP, { align: "center", style: A.text }, n.trim())) : null, t ? r.createElement(p.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: A.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, m), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: n } = this.props,
                                o = I(e),
                                s = I(t);
                            return r.createElement(i.Z.Group, null, r.createElement(i.Z, { count: t, link: `${n}/members`, onPress: this._handleMembersCountPress }, r.createElement(f().I18NFormatMessage, { $i18n: "b38e130b" }, r.createElement(i.Z.Value, null, f().ibd0106e({ formattedCount: s })), r.createElement(i.Z.Label, null, f().cface2d1({ count: t })))), r.createElement(i.Z, { count: e, link: `${n}/followers`, onPress: this._handleSubscribersCountPress }, ((a = e), (l = o), r.createElement(f().I18NFormatMessage, { $i18n: "d2924acb" }, r.createElement(i.Z.Value, null, f().ec08efe4({ formattedCount: l })), r.createElement(i.Z.Label, null, f().h9f711f0({ count: a }))))));
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
                            const { basePath: e, list: t, user: n, viewerUserId: o, withEditButton: i } = this.props;
                            if (t && t.user) {
                                const a = n?.blocking;
                                return t.user === o && i ? r.createElement(m.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: A.button, type: "primaryOutlined" }, F) : t.user !== o ? r.createElement(s.Z, { style: A.button }, r.createElement(b.Z, { disabled: a, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: n })) : null;
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
                    return e ? r.createElement(s.Z, { style: [A.container, t && A.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (k.contextType = _.rC), (k.defaultProps = { withEditButton: !0 });
            const A = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                B = P(k);
        },
        904694: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => D, default: () => H });
            var r = n(202784),
                o = n(325686),
                s = n(111677),
                i = n.n(s),
                a = n(731708),
                l = n(642153),
                c = n(992942),
                d = n(530732),
                u = n(537392),
                p = n(786475),
                m = n(392237);
            const h = m.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                f = ({ children: e, context: t, imageSrc: n, knownFollowers: s, onFacepilesClick: f, onFacepilesImpression: g, subtitle: w, title: _, withAdditionalControls: b = !1 }) => {
                    const { firstUsername: y, knownFollowersAvatarUrls: E, trendingFollowersUrl: Z, usersCount: v } = s || {},
                        C = s && s.knownFollowersAvatarUrls.length > 3;
                    r.useEffect(() => {
                        C && g && g();
                    }, [C, g]);
                    const x = n ? r.createElement(c.Z, { source: n, style: h.iconCustom }) : null,
                        S = t ? r.createElement(o.Z, { style: b ? h.condensedContextV2 : h.condensedContext }, r.createElement(a.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), r.createElement(o.Z, { style: b ? h.buttonTopMargin : [h.buttonBottomMargin, h.buttonLeftMargin] }, e)) : null,
                        T = r.createElement(u.ZP, null, ({ containerWidth: n }) => {
                            const s = p.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < m.default.theme.breakpoints.xSmall ? h.buttonWrap : void 0,
                                u = b ? h.facepileV2 : null;
                            return r.createElement(
                                o.Z,
                                { style: b ? null : [h.knownFollowersContainer, c] },
                                r.createElement(d.Z, { interactiveStyles: null, link: Z, onPress: f, style: b ? h.interactiveStyleV2 : h.interactiveStyle }, ({ isHovered: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: [h.facepile, u], userAvatarSize: s, userAvatarUrls: E }), r.createElement(a.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && h.underline }, t || ((e, t) => r.createElement(i().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(y, v)))),
                                ((t) => {
                                    const n = t < m.default.theme.breakpoints.xSmall ? h.buttonBottomMargin : [h.buttonBottomMargin, h.buttonLeftMargin];
                                    return b ? [e] : r.createElement(o.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        P = s && C ? T : S;
                    return r.createElement(r.Fragment, null, x, r.createElement(a.ZP, { size: "title2", weight: "heavy" }, _), w ? r.createElement(a.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, P);
                };
            var g = n(791632),
                w = n(321835),
                _ = n(946409),
                b = n(618566),
                y = n(638090),
                E = n(500002),
                Z = n(443781),
                v = n(265196),
                C = n(233391),
                x = n(863934),
                S = n(288955),
                T = n(177371),
                P = n(459679),
                I = n(71620),
                F = n(668214),
                N = n(466380),
                k = n(919022);
            const A = (e, t) => N.Z.select(e, t.topicId),
                B = (e, t) => k.ZP.selectMany(e, t.facepile?.userIds || []),
                O = (e, t) => {
                    const n = B(e, t);
                    return (0, P.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                M = (0, F.Z)()
                    .propsFromState(() => ({ topic: A, users: O }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("TOPIC_HEADER"), follow: N.Z.follow, unfollow: N.Z.unfollow, undoTopicNotInterested: N.Z.undoNotInterested }))
                    .withAnalytics(),
                L = i().b1850062,
                U = i().d69b2d90,
                R = i().gf5e9ea6;
            class D extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, b.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: n } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && n(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: n, topic: s, topicLandingContext: i, users: a } = this.props,
                        { description: l, name: c } = s || {},
                        d = a.slice(0, 4).map((e) => e.profile_image_url_https),
                        u = e?.facepileUrl && (0, _.s9)(e.facepileUrl),
                        p = (0, g.cu)(t),
                        m = a && a.length > 3 ? { firstUsername: a[0].name || "", usersCount: a.length - 1, knownFollowersAvatarUrls: d, trendingFollowersUrl: u || "" } : void 0;
                    return s && !p
                        ? r.createElement(
                              o.Z,
                              { style: W.root },
                              r.createElement(S.Z, { customText: c, displayMode: C.BH.topic }, () => r.createElement(w.Z, { onOffscreenChange: n }, r.createElement(f, { children: this._renderTopicActions(), context: i, knownFollowers: m, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: l, title: c, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? r.createElement(u.ZP, { key: "topic-header-actions" }, ({ containerWidth: s }) => {
                              const i = p.Z.isNarrowScreenWidth(s) ? W.mainViewSmall : W.mainView,
                                  a = this._additionalControlsEnabled ? (p.Z.isNarrowScreenWidth(s) ? W.followButtonSmall : W.followButton) : null,
                                  l = p.Z.isNarrowScreenWidth(s) ? W.notInterestButtonSmall : W.notInterestButton;
                              return r.createElement(r.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === y.el.Basic ? r.createElement(o.Z, { style: i }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : r.createElement(x.Z, { size: "medium", style: l, text: L, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), r.createElement(v.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: a, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return r.createElement(T.Z, { actionText: R, children: U, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (D.contextType = Z.rC), (D.defaultProps = { displayType: y.el.Basic });
            const W = m.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                H = (0, E.ZP)(M(D));
        },
        365112: (e, t, n) => {
            n.r(t), n.d(t, { UserProfileCardContainer: () => M, default: () => L });
            var r = n(202784),
                o = n(266704),
                s = n(290402),
                i = n(666670),
                a = n(835546),
                l = n(312771),
                c = n(154003),
                d = n(111677),
                u = n.n(d),
                p = n(457566),
                m = n(725516),
                h = n(979512);
            const f = u().fc7db594;
            function g({ screenName: e }) {
                const { openGrok: t } = (0, h.Z)(),
                    n = (0, m.z)(),
                    o = r.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), n.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [n, t, e]);
                return r.createElement(c.ZP, { icon: r.createElement(p.x1, null), onPress: o }, f);
            }
            var w = n(461900),
                _ = n(443781),
                b = n(23134),
                y = n(288955),
                E = n(71620),
                Z = n(668214),
                v = n(882122),
                C = n(38562),
                x = n(919022),
                S = n(582751);
            const T = (0, x.W3)([x.pL]),
                P = (e, t) => T(e, t.screenName),
                I = (e, t) => x.ZP.selectByScreenName(e, t.screenName),
                F = (e, t) => x.ZP.selectIsUserNotFound(e, t.screenName),
                N = (e, t) => x.ZP.selectIsUserSuspended(e, t.screenName),
                k = (e, t) => x.ZP.selectIsUserWithheld(e, t.screenName),
                A = (e, t) => {
                    const n = I(e, t);
                    return n?.highlightedLabel;
                },
                B = (e, t) => {
                    const n = ((e, t) => x.ZP.selectIdByScreenName(e, t.screenName))(e, t);
                    return { avatarUrls: S.vx(e, n), count: S.mM(e, n), names: S.Z8(e, n) };
                },
                O = (0, Z.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: C.f1, fetchStatus: P, isNotFound: F, isSuspended: N, isWithheld: k, knownFollowers: B, user: I, userHighlightedLabel: A }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("USER_PROFILE_CARD"), fetchOneUserByScreenNameIfNeeded: x.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: v.Hq }))
                    .withAnalytics();
            class M extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserProfileCard = () => {
                            const { displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: s, knownFollowers: i, onAvatarClick: l, onScreenNameClick: c, profileLink: d, promotedContent: u, screenName: p, user: m, userHighlightedLabel: h } = this.props;
                            if (n) return r.createElement(o.Z.Suspended, { onAvatarClick: l, onScreenNameClick: c, userScreenName: p });
                            if (!m) return null;
                            const { viewerUserId: f } = this.context,
                                g = !!f && f === m.id_str,
                                w = (0, a.n5)({ isOwnProfile: g, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: m }),
                                _ = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                b = (0, a.ZP)({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: s, viewerUserId: f, user: m }),
                                E = { ...b, subscriptionsCount: b.subscriptionsCount && _, label: b.label };
                            return r.createElement(y.Z, null, (e) => r.createElement(o.Z, { followButton: this._renderFollowUserButton(), grokButton: this._renderGrokButton(), isAllowedToViewOptions: E, isLoggedIn: !!f, isUserBlueVerified: m.is_blue_verified, isUserProtected: m.protected, isUserStatsWithLink: w, isUserVerified: m.verified, knownFollowers: i, onAvatarClick: l, onScreenNameClick: c, onUserStatsPress: e(), profileLink: d, promotedContent: u, subscriptionsCount: m.creator_subscriptions_count, userAvatarUri: m.profile_image_url_https, userDescription: m.description, userEntities: m.entities, userFollowersCount: m.followers_count, userFriendsCount: m.friends_count, userHighlightedLabel: h, userId: m.id_str, userName: m.name, userScreenName: p, userTranslatorType: m.translator_type, userVerifiedType: m.verified_type, userWithFollowsYou: m.followed_by, userWithheldDescription: m.withheld_description, userWithheldEntities: m.withheld_entities }));
                        }),
                        (this._renderFollowUserButton = () => {
                            const { promotedContent: e, showRelationshipChangeConfirmation: t, user: n } = this.props,
                                o = n?.id_str;
                            return o ? r.createElement(b.C, { promotedContent: e, showRelationshipChangeConfirmation: t, userId: o }) : void 0;
                        }),
                        (this._renderGrokButton = () => {
                            const e = (0, w.$)(this.context),
                                t = this.context.featureSwitches.isTrue("responsive_web_grok_profile_summary_enabled"),
                                n = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                                o = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                                s = this.props.user?.followers_count ?? 0,
                                i = this.props.user?.statuses_count ?? 0,
                                a = this.props.user?.screen_name,
                                l = this.props.user?.protected,
                                c = !this.props.user?.verified_type || "User" === this.props.user?.verified_type;
                            return !e || !t || !a || s < n || i < o || l || !c ? null : r.createElement(g, { screenName: a });
                        }),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: n } = this.props;
                            t(n).catch((t) => {
                                e(i.F)(t);
                            });
                        }),
                        (this._handleFetchKnownFollowers = () => {
                            const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: n } = this.props,
                                r = n?.id_str;
                            r && t(r).catch(e({}));
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
                    return r.createElement(s.Z, { fetchStatus: t ? l.ZP.LOADED : e, onRequestRetry: this._handleFetchUser, render: this._renderUserProfileCard });
                }
            }
            M.contextType = _.rC;
            const L = O(M);
        },
        320588: (e, t, n) => {
            n.d(t, { Mt: () => m, Sm: () => p, lg: () => u });
            var r = n(111677),
                o = n.n(r),
                s = n(615656),
                i = n(601576);
            const a = o().add55942,
                l = o().ib8f5f3c,
                c = o().e20fc756,
                d = o().hae1c934,
                u = { customErrorHandler: () => (0, i.mf)({ text: a }), showToast: !0 },
                p = { customErrorHandler: () => (0, i.mf)({ text: l }), showToast: !0 },
                m = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === s.ZP.ListAdminRightsError).length) return (0, i.mf)({ text: c });
                        }
                        return (0, i.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => o });
            var r = n(111677);
            const o = { defaultToast: { text: n.n(r)().ca96fe6e }, showToast: !0 };
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => o, n5: () => i });
            var r = n(42508);
            const o = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: r, user: o, userProfileInterstitialType: i, viewerUserId: a }) => {
                    const l = !!a && a === o.id_str,
                        c = o.blocked_by,
                        d = o.blocking,
                        u = s({ displaySensitiveMedia: e, isOwnProfile: l, user: o, userProfileInterstitialType: i }),
                        p = (l || !r) && !n;
                    return { avatar: l || (!u && !t && !n && !r), badges: l || !r, description: l || (!d && !c && !u && !n && !r), followButton: !(l || c || u || t || n || r), followersYouKnow: !l && !c && !d && !u && !t && !n && !r && (o.following || !o.protected), followIndicator: !r, fullName: p, label: p, stats: l || (!c && !u && !n && !r), subscriptionsCount: l || !o.has_hidden_subscriptions_on_profile };
                },
                s = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: o }) => (o === r.Z.SensitiveMedia || o === r.Z.OffensiveProfileContent) && !(t || n.following || e),
                i = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const r = n.blocked_by,
                        o = n.protected && !n.following;
                    return t ? e || !o : e || (!o && !r);
                };
        },
        806528: (e, t, n) => {
            n.d(t, { Bz: () => c, ZW: () => h, ey: () => u, fw: () => a, iG: () => m, wM: () => l });
            var r = n(499627),
                o = n(341276);
            const s = "geoLocation",
                i = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const a = (e) => e[s],
                l = (e) => e[s].permissionStatus,
                c = (e) => e[s].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: d }),
                p = "rweb/geoLocation/SET_POSITION",
                m = () => (e, t) =>
                    f()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(u(o.S.denied)), Promise.reject(t))),
                h = () => (e, t) => (c(t()) ? Promise.resolve() : e(m())),
                f = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            r.Z.register({
                [s]: function (e = i, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, n) => {
            n.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, n) => {
            n.d(t, { Hq: () => _, c1: () => h, lP: () => g, og: () => f });
            var r = n(745123);
            var o = n(499627),
                s = n(917799),
                i = n(56519),
                a = n(919022);
            const l = "knownFollowers",
                c = `rweb/${l}`,
                d = [],
                u = (0, s.dg)(c, "FETCH_KNOWN_FOLLOWERS"),
                p = {};
            o.Z.register({
                [l]: function (e = p, t) {
                    if (!t) return e;
                    if (t.type === u.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: r, users: o } = n && n.result,
                            { user_id: s } = t.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: r, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[l][t],
                h = (e, t) => {
                    if (t) {
                        const o = w(e, t);
                        return (n = a.ZP.selectMany(e, o)), (r = (e) => !!e), n.filter(r);
                    }
                    var n, r;
                    return d;
                },
                f = (e, t) => h(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                g = (e, t) => {
                    let n;
                    if (t) {
                        const r = m(e, t);
                        n = r?.knownFollowersCount;
                    }
                    return n;
                },
                w = (e, t) => {
                    const n = m(e, t);
                    return n?.knownFollowerIds || d;
                },
                _ =
                    (e) =>
                    (t, n, { api: o }) =>
                        void 0 !== g(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: o }) =>
                                          (0, s._O)(t, { request: o.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: u, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, i.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        286e3: (e, t, n) => {
            n.d(t, { Rc: () => p, nx: () => c });
            var r = n(499627),
                o = n(576469),
                s = n(390387);
            const i = "rweb.channelsTimelineBehavior",
                a = "channelsTimelineBehavior",
                l = Object.freeze({});
            const c = (e) => e[a],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: d }),
                p =
                    ({ listId: e, useRanked: t }) =>
                    (n, r, { userPersistence: s }) => {
                        const a = r(),
                            l = { ...c(a), [e]: { useRanked: t } };
                        n(u(l));
                        const d = o.Z.select(a, e);
                        return d && d.following ? s.get(i).then((n) => s.set(i, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            r.Z.register(
                {
                    [a]: function (e = l, t) {
                        return t && t.type === d ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, s.Qb)(t())
                            ? n.get(i).then((t) => {
                                  t && e(u(t));
                              })
                            : Promise.resolve(),
            );
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(807469),
                o = n(502909),
                s = n(600823);
            const i = (0, o.ZP)({ namespace: "topics" }),
                a = (0, o.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, r) => (n(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: r } = t.meta,
                        o = e.entities[r];
                    return o ? ((e, t, n, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...r() } } } : e))(e, t, o, n) : e;
                },
                d = { follow: (0, o.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, o.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, o.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, o.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...l, ...d, customActionTypes: (0, o.X7)(d) },
                p = s.Z.register(u);
        },
        510588: (e, t, n) => {
            n.d(t, { $5: () => u, By: () => w, DV: () => E, Fz: () => f, Ge: () => b, Ns: () => x, Wy: () => h, _g: () => v, ax: () => _, cx: () => g, l1: () => Z, tt: () => C, xh: () => m });
            var r = n(614983),
                o = n.n(r),
                s = n(842799),
                i = n(286e3),
                a = n(576469),
                l = n(919022),
                c = n(312771);
            const d = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, t) => {
                    const n = h(e, t),
                        r = _(e, t),
                        o = b(e, t);
                    return n ? `/i/lists/${n}` : r && o ? `/${r}/lists/${o}` : "";
                },
                p = (e, t) => t.match.params.listId || void 0,
                m = (e, t) => {
                    const n = t.match.params.listId;
                    return o()(n, "listId should always be specified"), n;
                },
                h = (e, t) =>
                    p(0, t) ||
                    ((e, t) => {
                        const n = f(e, t);
                        return n && n.id_str;
                    })(e, t),
                f = (e, t) => {
                    const n = p(0, t);
                    return n ? a.Z.select(e, n) : a.Z.selectByKey(e, y(e, t));
                },
                g = (e, t) => {
                    const n = f(e, t);
                    return n && n.following;
                },
                w = (e, t) => {
                    const n = f(e, t);
                    return n && n.name;
                },
                _ = (e, t) => {
                    const n = p(0, t);
                    return t.match.params.screenName || void 0 || (n && a.Z.selectListAuthorScreenName(e, n));
                },
                b = (e, t) => {
                    const n = f(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                y = (e, t) => {
                    const n = t.match.params.slug,
                        r = t.match.params.screenName;
                    return n && r ? (0, s.Z)(r, n) : "";
                },
                E = (e, t) => {
                    const n =
                        h(e, t) ||
                        ((e, t) => {
                            const n = b(e, t),
                                r = _(e, t);
                            return n && r ? (0, s.Z)(r, n) : "";
                        })(e, t);
                    return a.Z.selectFetchStatus(e, n) || c.ZP.NONE;
                },
                Z = (e, t) => {
                    const n = _(e, t);
                    return n ? l.ZP.selectByScreenName(e, n) : void 0;
                },
                v = (e, t) => {
                    const n = h(e, t),
                        r = (0, i.nx)(e);
                    return (n && r[n] && r[n].useRanked) || !1;
                },
                C = (e, t) => {
                    const n = a.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: d };
                },
                x = (e, t) => {
                    const n = f(e, t);
                    return n?.mode;
                };
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                o = n(476984),
                s = n.n(o),
                i = n(143778),
                a = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: s, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: h, retryMessage: f, retryable: g } = this.props;
                    switch (o) {
                        case c:
                            return g ? r.createElement(a.Z, { icon: s, onRequestRetry: d, retryMessage: f }) : n ? r.createElement(l.m, { failureMessage: n }) : h();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                s = n(827515),
                i = n(461756),
                a = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, s.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        w = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (w.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, s.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = p[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                s = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...m, ...(f.animating ? e.post : e.active) },
                                c = { ...(s ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: l }, r.createElement(a.ZP, d, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, g),
                                        style: c,
                                    },
                                    r.createElement(a.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, w, g])
                    );
                };
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                s = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        730895: (e, t, n) => {
            var r = n(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, n) => {
            var r = n(609859),
                o = n(807400),
                s = n(396616),
                i = n(730895),
                a = n(824229),
                l = r.RegExp,
                c = l.prototype;
            o &&
                a(function () {
                    var e = !0;
                    try {
                        l(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        n = "",
                        r = e ? "dgimsy" : "gimsy",
                        o = function (e, r) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (n += r), !0;
                                },
                            });
                        },
                        s = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var i in (e && (s.hasIndices = "d"), s)) o(i, s[i]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r;
                }) &&
                s(c, "flags", { configurable: !0, get: i });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard.c22b7eda.js.map

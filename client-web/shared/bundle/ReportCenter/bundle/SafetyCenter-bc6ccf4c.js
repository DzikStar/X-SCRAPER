"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-bc6ccf4c", "icons/IconPhone-js"],
    {
        995145: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(325686),
                s = r(111677),
                i = r.n(s),
                a = r(731708),
                l = r(235902),
                d = r(638009),
                c = r(470397),
                u = r(966582),
                m = r(392237),
                p = r(418462),
                w = r(767385),
                h = r(782261);
            const C = i().g5662c95;
            function g({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: s, onPress: i, promotedContent: g, quotedTweetTombstoneInfo: v, renderActionMenu: E, renderActionsBar: b, renderCallToAction: T, renderEditCallout: U, renderEducation: y, renderHighlightedUserLabel: k, renderPromotedDetails: S, renderPromotedUserProfileCard: _, renderPromotionStatusBadge: A, renderReplyContext: B, renderRichContent: L, renderStats: P, renderText: Z, renderTimestamp: N, renderTombstone: x, renderTweetHeader: F, renderUserAvatar: I, renderUserFollowIndicator: D, renderUserName: M, socialContext: V, staticLinkConfig: H, testID: q, tweet: W, withBottomLine: z, withTopLine: R, withUnreadStyles: O }) {
                const { LinkConfigProvider: $, a11yIdList: Y, a11yIds: j, props: K } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: s, onPress: i, promotedContent: g, quotedTweetTombstoneInfo: v, renderActionMenu: E, renderActionsBar: b, renderCallToAction: T, renderEditCallout: U, renderEducation: y, renderHighlightedUserLabel: k, renderPromotedDetails: S, renderPromotedUserProfileCard: _, renderPromotionStatusBadge: A, renderReplyContext: B, renderRichContent: L, renderTweetHeader: F, renderStats: P, renderText: Z, renderTimestamp: N, renderTombstone: x, renderUserAvatar: I, renderUserFollowIndicator: D, renderUserName: M, socialContext: V, staticLinkConfig: H, testID: q, tweet: W, withBottomLine: z, withTopLine: R, withUnreadStyles: O }),
                    G = h.Z.getOriginalTweet(K.tweet),
                    { permalink: J } = G,
                    Q = G.tombstoneInfo || K.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(K.promotedContent),
                    ee = l.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    re = ee.withEdgeToEdgeTweetAnatomy(),
                    oe = G.isEdited && ee.withEditCallout(),
                    ne = G.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    se = K.conversationTreeMetadata?.ancestorConnector,
                    ie = K.conversationTreeMetadata?.indents,
                    ae = o.useContext(d.ZP),
                    le = K.conversationTreeMetadata ? o.createElement(a.ZP, { id: j.conversationLevel, style: m.default.visuallyHidden }, C({ conversationTreeDepth: K.conversationTreeMetadata.depth.toString() })) : null,
                    de = K.renderTombstone({ actionLink: J, actionText: Q?.richRevealText?.text, style: f.tombstone });
                return o.createElement(
                    $,
                    null,
                    o.createElement(
                        w.Z,
                        {
                            a11yDomIds: Y,
                            actionMenu: K.renderActionMenu(),
                            avatar: K.renderUserAvatar(),
                            footer: K.renderCallToAction(),
                            header: K.renderTweetHeader({ iconSize: "large", iconStyle: f.socialContextIcon, style: f.socialContext, weight: "bold" }),
                            indents: ie,
                            link: K.link ? ae.withAnchorless(K.link) : void 0,
                            onBlur: () => K.onBlur?.(),
                            onFocus: () => K.onFocus?.(),
                            onPress: (e) => K.onPress?.(e),
                            testID: K.testID,
                            userFollowIndicators: K.renderUserFollowIndicator(),
                            userLabel: K.renderHighlightedUserLabel(),
                            userName: K.renderUserName({
                                screenNameSuffix: X
                                    ? null
                                    : (() => {
                                          const { renderTimestamp: e } = K,
                                              t = e({ id: void 0 });
                                          return !G.isStaleEdit && oe ? o.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: re,
                            }),
                            withBottomLine: K.withBottomLine,
                            withElbow: ie ? "side" === se : void 0,
                            withFullWidthChildren: te,
                            withTopLine: K.withTopLine,
                            withUnreadStyles: K.withUnreadStyles,
                        },
                        le,
                        null !== de ? de : o.createElement(o.Fragment, null, K.renderReplyContext({ style: f.replyContext }), K.renderArticleCard(), K.renderText({ color: ne ? "gray700" : "text", linkColor: ne ? "gray700" : "link", size: "body", style: te && f.edgeToEdgeTextSpacer }), K.renderRichContent({ withRoundMediaCorners: !te, style: f.richContent }), K.renderPromotedUserProfileCard({ style: f.promotedUserCard })),
                        K.renderEducation({ displayStyle: "inline" }),
                        G.isStaleEdit && oe && o.createElement(n.Z, { style: f.tweetEditCallout }, K.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        K.renderStats(),
                        K.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: f.actionsBar, withCount: !0 }),
                        K.renderPromotedDetails({ style: f.promotedDetails, promotedContent: K.promotedContent, withoutDisclaimerDetails: !0 }),
                        K.renderPromotionStatusBadge({ id: j.promotionStatusLabel }),
                    ),
                );
            }
            (g.ActionMenu = p.q.ActionMenu), (g.ActionsBar = p.q.ActionsBar), (g.ArticleCard = p.q.ArticleCard), (g.Education = p.q.Education), (g.EditCallout = p.q.EditCallout), (g.HighlightedUserLabel = p.q.HighlightedUserLabel), (g.PromotedDetails = p.q.PromotedDetails), (g.PromotedUserProfileCard = p.q.PromotedUserProfileCard), (g.ReplyContext = p.q.ReplyContext), (g.RichContent = p.q.RichContent), (g.SocialContext = p.q.SocialContext), (g.Text = p.q.Text), (g.Timestamp = p.q.Timestamp), (g.Tombstone = p.q.Tombstone), (g.UserAvatar = p.q.UserAvatar), (g.UserFollowIndicator = p.q.UserFollowIndicator), (g.UserName = p.q.UserName);
            const f = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => E });
            var o = r(202784),
                n = r(325686),
                s = r(731708),
                i = r(235902),
                a = r(649846),
                l = r(529509),
                d = r(392237),
                c = r(823161),
                u = r(238406),
                m = r(366635),
                p = r(646797);
            const w = () => !1;
            class h extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: s } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && r) {
                                const { avatarUrls: e, count: t, names: i } = r;
                                return t ? o.createElement(n.Z, { style: [C.marginTop12, C.minHeight] }, "number" == typeof t && o.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: s })) : null;
                            }
                        });
                }
                render() {
                    return o.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return o.createElement(n.Z, { style: C.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: o } = t;
                    return o && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return o.createElement(n.Z, { style: C.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? o.createElement(n.Z, { style: C.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: s, userAvatarSize: a, userAvatarUri: l, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return o.createElement(n.Z, { style: C.row }, o.createElement(i.ZP.Provider, { value: { userAvatarLabel: w } }, o.createElement(c.default, { link: r, onClick: t, promotedContent: s, screenName: d, size: a, uri: u ? l : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: s } = t;
                    return r ? o.createElement(o.Fragment, null, this._renderUserAvatar(), o.createElement(n.Z, { style: C.marginTop8 }, this._renderUserName(), s && this._renderHighlightedUserLabel())) : o.createElement(n.Z, { style: C.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: n, onScreenNameClick: s, profileLink: i, promotedContent: a, userHighlightedLabel: l, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: w, withNameWrap: h } = this.props,
                        { badges: C, followIndicator: g, fullName: f } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: C ? t : void 0, isProtected: C ? r : void 0, isVerified: C ? n : void 0, link: i, name: f ? d : c, nameSize: "headline2", onLinkClick: s, promotedContent: a, screenName: c, translatorType: C ? u : void 0, verifiedType: C ? p : void 0, withFollowsYou: g && w, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && o.createElement(a.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? o.createElement(n.Z, { style: C.marginTop4 }, o.createElement(s.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: s, userWithheldDescription: i, userWithheldEntities: a } = this.props,
                        { description: l } = e;
                    return l && t && r && s ? o.createElement(n.Z, { style: [C.row, C.marginTop12] }, o.createElement(u.Z, { description: t, entities: r, userId: s, withheldDescription: i, withheldEntities: a })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: s, userFollowersCount: i, userFriendsCount: a, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? o.createElement(n.Z, { style: [C.row, C.marginTop12] }, o.createElement(p.Z, { followersCount: i, friendsCount: a, onPress: r, screenName: l, subscriptionsCount: s, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            h.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const C = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var g = r(807896);
            var f = r(111677);
            const v = r.n(f)().ef633578;
            class E extends o.PureComponent {
                render() {
                    return o.createElement(h, this.props);
                }
            }
            (E.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(h, (0, g.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userAvatarUri: w.profile_image_url_https, userDescription: d, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (E.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(h, { errorMessage: v, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: r, userScreenName: r, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(111677),
                s = r.n(n),
                i = r(891198),
                a = r(98538);
            class l extends o.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: n, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        w = `/${n}/verified_followers`;
                    return o.createElement(a.Z.Group, { style: l }, o.createElement(a.Z, { count: t, link: u ? `/${n}/following` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "g3ed1dd5" }, o.createElement(a.Z.Value, null, s().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), o.createElement(a.Z.Label, null, s().daf8a75f({ count: t })))), o.createElement(a.Z, { count: e, link: u ? w : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "i06724fb" }, o.createElement(a.Z.Value, null, s().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), o.createElement(a.Z.Label, null, s().ad9b5988({ count: e })))), m && void 0 !== d && o.createElement(a.Z, { count: d, link: u ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "eb0084f3" }, o.createElement(a.Z.Value, null, s().a9980948({ formattedCount: (0, i.wl)(d) })), o.createElement(a.Z.Label, null, s().ce44a35c({ count: d })))), p && c && o.createElement(a.Z, { count: c, link: u ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: r }, o.createElement(s().I18NFormatMessage, { $i18n: "fc1b8f67" }, o.createElement(a.Z.Value, null, s().id949f68({ formattedCount: (0, i.wl)(c) })), o.createElement(a.Z.Label, null, s().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        200112: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18.914 13.207c-.755-.756-2.073-.756-2.828 0l-2.499 2.499c-2.611-1.113-4.664-3.33-5.569-6.019l2.774-2.773c.779-.779.779-2.049 0-2.828L8.894 2.188c-.767-.768-2.023-.778-2.8-.021C2.52 5.64 2.518 5.711 2.509 5.975c-.006.175-.009.351-.009.526 0 7.781 6.07 14.35 13.819 14.954.047.004.095.006.142.006.502 0 .991-.205 1.36-.575l2.971-2.971c.779-.779.779-2.049 0-2.828l-1.879-1.879z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-bc6ccf4c.dda00baa.js.map

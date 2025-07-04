"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-09920e85"],
    {
        995145: (e, t, r) => {
            r.d(t, { Z: () => f });
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
            function f({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: s, onPress: i, promotedContent: f, quotedTweetTombstoneInfo: E, renderActionMenu: T, renderActionsBar: b, renderCallToAction: v, renderEditCallout: U, renderEducation: k, renderHighlightedUserLabel: S, renderPromotedDetails: y, renderPromotedUserProfileCard: _, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: B, renderStats: L, renderText: Z, renderTimestamp: N, renderTombstone: F, renderTweetHeader: x, renderUserAvatar: I, renderUserFollowIndicator: D, renderUserName: M, socialContext: V, staticLinkConfig: q, testID: H, tweet: W, withBottomLine: R, withTopLine: O, withUnreadStyles: z }) {
                const { LinkConfigProvider: $, a11yIdList: Y, a11yIds: K, props: j } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: s, onPress: i, promotedContent: f, quotedTweetTombstoneInfo: E, renderActionMenu: T, renderActionsBar: b, renderCallToAction: v, renderEditCallout: U, renderEducation: k, renderHighlightedUserLabel: S, renderPromotedDetails: y, renderPromotedUserProfileCard: _, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: B, renderTweetHeader: x, renderStats: L, renderText: Z, renderTimestamp: N, renderTombstone: F, renderUserAvatar: I, renderUserFollowIndicator: D, renderUserName: M, socialContext: V, staticLinkConfig: q, testID: H, tweet: W, withBottomLine: R, withTopLine: O, withUnreadStyles: z }),
                    G = h.Z.getOriginalTweet(j.tweet),
                    { permalink: J } = G,
                    Q = G.tombstoneInfo || j.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(j.promotedContent),
                    ee = l.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    re = ee.withEdgeToEdgeTweetAnatomy(),
                    oe = G.isEdited && ee.withEditCallout(),
                    ne = G.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    se = j.conversationTreeMetadata?.ancestorConnector,
                    ie = j.conversationTreeMetadata?.indents,
                    ae = o.useContext(d.ZP),
                    le = j.conversationTreeMetadata ? o.createElement(a.ZP, { id: K.conversationLevel, style: m.default.visuallyHidden }, C({ conversationTreeDepth: j.conversationTreeMetadata.depth.toString() })) : null,
                    de = j.renderTombstone({ actionLink: J, actionText: Q?.richRevealText?.text, style: g.tombstone });
                return o.createElement(
                    $,
                    null,
                    o.createElement(
                        w.Z,
                        {
                            a11yDomIds: Y,
                            actionMenu: j.renderActionMenu(),
                            avatar: j.renderUserAvatar(),
                            footer: j.renderCallToAction(),
                            header: j.renderTweetHeader({ iconSize: "large", iconStyle: g.socialContextIcon, style: g.socialContext, weight: "bold" }),
                            indents: ie,
                            link: j.link ? ae.withAnchorless(j.link) : void 0,
                            onBlur: () => j.onBlur?.(),
                            onFocus: () => j.onFocus?.(),
                            onPress: (e) => j.onPress?.(e),
                            testID: j.testID,
                            userFollowIndicators: j.renderUserFollowIndicator(),
                            userLabel: j.renderHighlightedUserLabel(),
                            userName: j.renderUserName({
                                screenNameSuffix: X
                                    ? null
                                    : (() => {
                                          const { renderTimestamp: e } = j,
                                              t = e({ id: void 0 });
                                          return !G.isStaleEdit && oe ? o.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: re,
                            }),
                            withBottomLine: j.withBottomLine,
                            withElbow: ie ? "side" === se : void 0,
                            withFullWidthChildren: te,
                            withTopLine: j.withTopLine,
                            withUnreadStyles: j.withUnreadStyles,
                        },
                        le,
                        null !== de ? de : o.createElement(o.Fragment, null, j.renderReplyContext({ style: g.replyContext }), j.renderArticleCard(), j.renderText({ color: ne ? "gray700" : "text", linkColor: ne ? "gray700" : "link", size: "body", style: te && g.edgeToEdgeTextSpacer }), j.renderRichContent({ withRoundMediaCorners: !te, style: g.richContent }), j.renderPromotedUserProfileCard({ style: g.promotedUserCard })),
                        j.renderEducation({ displayStyle: "inline" }),
                        G.isStaleEdit && oe && o.createElement(n.Z, { style: g.tweetEditCallout }, j.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        j.renderStats(),
                        j.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: g.actionsBar, withCount: !0 }),
                        j.renderPromotedDetails({ style: g.promotedDetails, promotedContent: j.promotedContent, withoutDisclaimerDetails: !0 }),
                        j.renderPromotionStatusBadge({ id: K.promotionStatusLabel }),
                    ),
                );
            }
            (f.ActionMenu = p.q.ActionMenu), (f.ActionsBar = p.q.ActionsBar), (f.ArticleCard = p.q.ArticleCard), (f.Education = p.q.Education), (f.EditCallout = p.q.EditCallout), (f.HighlightedUserLabel = p.q.HighlightedUserLabel), (f.PromotedDetails = p.q.PromotedDetails), (f.PromotedUserProfileCard = p.q.PromotedUserProfileCard), (f.ReplyContext = p.q.ReplyContext), (f.RichContent = p.q.RichContent), (f.SocialContext = p.q.SocialContext), (f.Text = p.q.Text), (f.Timestamp = p.q.Timestamp), (f.Tombstone = p.q.Tombstone), (f.UserAvatar = p.q.UserAvatar), (f.UserFollowIndicator = p.q.UserFollowIndicator), (f.UserName = p.q.UserName);
            const g = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => T });
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
                        { badges: C, followIndicator: f, fullName: g } = e;
                    return o.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: C ? t : void 0, isProtected: C ? r : void 0, isVerified: C ? n : void 0, link: i, name: g ? d : c, nameSize: "headline2", onLinkClick: s, promotedContent: a, screenName: c, translatorType: C ? u : void 0, verifiedType: C ? p : void 0, withFollowsYou: f && w, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
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
            var f = r(807896);
            var g = r(111677);
            const E = r.n(g)().ef633578;
            class T extends o.PureComponent {
                render() {
                    return o.createElement(h, this.props);
                }
            }
            (T.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return o.createElement(h, (0, f.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: n, knownFollowers: s, onAvatarClick: i, onScreenNameClick: a, promotedContent: l, userAvatarUri: w.profile_image_url_https, userDescription: d, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (T.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return o.createElement(h, { errorMessage: E, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: r, userScreenName: r, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-09920e85.9ef9cbaa.js.map

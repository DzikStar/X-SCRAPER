"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-2aa5c1ed", "shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705", "shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed"],
    {
        995145: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                i = n(325686),
                a = n(111677),
                o = n.n(a),
                s = n(731708),
                d = n(235902),
                l = n(638009),
                c = n(470397),
                u = n(966582),
                m = n(392237),
                p = n(418462),
                w = n(767385),
                h = n(782261);
            const g = o().g5662c95;
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: a, onPress: o, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: v, renderEducation: x, renderHighlightedUserLabel: I, renderPromotedDetails: k, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: A, renderStats: S, renderText: Z, renderTimestamp: R, renderTombstone: L, renderTweetHeader: U, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: N, testID: F, tweet: Q, withBottomLine: V, withTopLine: z, withUnreadStyles: $ }) {
                const { LinkConfigProvider: O, a11yIdList: K, a11yIds: G, props: W } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: a, onPress: o, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: v, renderEducation: x, renderHighlightedUserLabel: I, renderPromotedDetails: k, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: A, renderTweetHeader: U, renderStats: S, renderText: Z, renderTimestamp: R, renderTombstone: L, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: N, testID: F, tweet: Q, withBottomLine: V, withTopLine: z, withUnreadStyles: $ }),
                    j = h.Z.getOriginalTweet(W.tweet),
                    { permalink: J } = j,
                    Y = j.tombstoneInfo || W.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(W.promotedContent),
                    ee = d.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    re = j.isEdited && ee.withEditCallout(),
                    ie = j.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    ae = W.conversationTreeMetadata?.ancestorConnector,
                    oe = W.conversationTreeMetadata?.indents,
                    se = r.useContext(l.ZP),
                    de = W.conversationTreeMetadata ? r.createElement(s.ZP, { id: G.conversationLevel, style: m.default.visuallyHidden }, g({ conversationTreeDepth: W.conversationTreeMetadata.depth.toString() })) : null,
                    le = W.renderTombstone({ actionLink: J, actionText: Y?.richRevealText?.text, style: T.tombstone });
                return r.createElement(
                    O,
                    null,
                    r.createElement(
                        w.Z,
                        {
                            a11yDomIds: K,
                            actionMenu: W.renderActionMenu(),
                            avatar: W.renderUserAvatar(),
                            footer: W.renderCallToAction(),
                            header: W.renderTweetHeader({ iconSize: "large", iconStyle: T.socialContextIcon, style: T.socialContext, weight: "bold" }),
                            indents: oe,
                            link: W.link ? se.withAnchorless(W.link) : void 0,
                            onBlur: () => W.onBlur?.(),
                            onFocus: () => W.onFocus?.(),
                            onPress: (e) => W.onPress?.(e),
                            testID: W.testID,
                            userFollowIndicators: W.renderUserFollowIndicator(),
                            userLabel: W.renderHighlightedUserLabel(),
                            userName: W.renderUserName({
                                screenNameSuffix: X
                                    ? null
                                    : (() => {
                                          const { renderTimestamp: e } = W,
                                              t = e({ id: void 0 });
                                          return !j.isStaleEdit && re ? r.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: W.withBottomLine,
                            withElbow: oe ? "side" === ae : void 0,
                            withFullWidthChildren: te,
                            withTopLine: W.withTopLine,
                            withUnreadStyles: W.withUnreadStyles,
                        },
                        de,
                        null !== le ? le : r.createElement(r.Fragment, null, W.renderReplyContext({ style: T.replyContext }), W.renderArticleCard(), W.renderText({ color: ie ? "gray700" : "text", linkColor: ie ? "gray700" : "link", size: "body", style: te && T.edgeToEdgeTextSpacer }), W.renderRichContent({ withRoundMediaCorners: !te, style: T.richContent }), W.renderPromotedUserProfileCard({ style: T.promotedUserCard })),
                        W.renderEducation({ displayStyle: "inline" }),
                        j.isStaleEdit && re && r.createElement(i.Z, { style: T.tweetEditCallout }, W.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        W.renderStats(),
                        W.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: T.actionsBar, withCount: !0 }),
                        W.renderPromotedDetails({ style: T.promotedDetails, promotedContent: W.promotedContent, withoutDisclaimerDetails: !0 }),
                        W.renderPromotionStatusBadge({ id: G.promotionStatusLabel }),
                    ),
                );
            }
            (C.ActionMenu = p.q.ActionMenu), (C.ActionsBar = p.q.ActionsBar), (C.ArticleCard = p.q.ArticleCard), (C.Education = p.q.Education), (C.EditCallout = p.q.EditCallout), (C.HighlightedUserLabel = p.q.HighlightedUserLabel), (C.PromotedDetails = p.q.PromotedDetails), (C.PromotedUserProfileCard = p.q.PromotedUserProfileCard), (C.ReplyContext = p.q.ReplyContext), (C.RichContent = p.q.RichContent), (C.SocialContext = p.q.SocialContext), (C.Text = p.q.Text), (C.Timestamp = p.q.Timestamp), (C.Tombstone = p.q.Tombstone), (C.UserAvatar = p.q.UserAvatar), (C.UserFollowIndicator = p.q.UserFollowIndicator), (C.UserName = p.q.UserName);
            const T = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        418462: (e, t, n) => {
            n.d(t, { a: () => U, q: () => Z });
            var r = n(807896),
                i = (n(543673), n(240753), n(128399), n(202784)),
                a = n(731708),
                o = n(154003),
                s = n(276563),
                d = n(235902),
                l = n(649846),
                c = n(638009),
                u = n(32471),
                m = n(966582),
                p = n(966886),
                w = n(308158),
                h = n(126962),
                g = n(54989),
                C = n(366985),
                T = n(982266),
                f = n(990804),
                b = n(530338),
                y = n(16037),
                _ = n(737082),
                v = n(103737),
                x = n(189655),
                I = n(650028),
                k = n(774526),
                E = n(451051),
                M = n(5273),
                P = n(528647),
                A = n(782261),
                S = n(782299);
            const Z = Object.freeze({ ActionsBar: f.Z, ActionMenu: T.Z, CallToAction: o.ZP, EditCallout: y.Z, Education: _.Z, HighlightedUserLabel: l.Z, Media: v.Z, Place: a.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: x.Z, ReplyContext: I.ZP, RichContent: k.Z, SocialContext: h.Z, Text: E.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: M.Z, UserFollowIndicator: S.Z, UserName: P.Z, ArticleCard: b.Z }),
                R = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function L(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = H, renderActionMenu: t = q, renderArticleCard: n = B, renderCallToAction: r = D, renderEditCallout: a = F, renderEducation: o = N, renderHighlightedUserLabel: l = Q, renderPlace: c = V, renderPromotedUserProfileCard: u = $, renderPromotedDetails: p = z, renderPromotionStatusBadge: h = O, renderReplyContext: g = K, renderRichContent: T = G, renderMedia: f = W, renderTweetHeader: b = j, renderStats: y = J, renderText: _ = X, renderTimestamp: v = Y, renderTombstone: x = ee, renderUserAvatar: I = te, renderUserFollowIndicator: k = ne, renderUserName: E = re, promotedContent: M, quotedTweetTombstoneInfo: P, socialContext: S, tweetContext: Z, staticLinkConfig: U = R, tweet: ie, ...ae }) {
                const oe = A.Z.getOriginalTweet(ie),
                    [se, de] = (0, C.L)(oe),
                    le = d.ZP.useProps(),
                    ce = le.c9sHashtagsEnabled(),
                    ue = le.renderArticleCardInTweet(),
                    me = "true" === M?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(M?.adMetadataContainer?.dynamicCardContent?.card_type),
                    pe = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(oe) && oe.article && ue ? n({ articleEntity: oe.article, hasSensitiveContent: oe.possibly_sensitive, mediaVisibilityResults: oe.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: oe.bookmark_count, enableKeyboardShortcuts: !1, isLiked: oe.favorited, isRetweeted: oe.retweeted, likeCount: oe.favorite_count, id: se.actionsBar, replyCount: oe.reply_count, retweetCount: (oe.quote_count ?? 0) + (oe.retweet_count ?? 0), tweetLink: oe.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => r({ ...e }),
                        renderEditCallout: (e) => (oe.isEdited ? a({ editType: oe.isStaleEdit ? "stale" : "latest", id: se.editCallout, ...e }) : null),
                        renderEducation: (e) => o({ conversationControlLabelNativeID: se.conversationControlLabel, exclusivityInfoLabelNativeID: se.exclusivityInfoLabel, trustedFriendsLabelNativeID: se.trustedFriendsLabel, tweet: ie, ...e }),
                        renderHighlightedUserLabel: (e) => (oe.user.highlightedLabel ? l({ label: oe.user.highlightedLabel, id: se.userLabel, ...e }) : null),
                        renderMedia: (e) => (A.Z.hasMedia(oe) ? f({ authorId: oe.user.id_str, authorScreenName: oe.user.screen_name, forwardPivotInfo: ie.softIntervention, hasSensitiveMedia: oe.possibly_sensitive, mediaTagsLink: `${oe.permalink}/media_tags`, mediaDetails: oe.extended_entities?.media, id: se.media, promotedContent: M, tweetCreatedAt: oe.created_at, tweetId: oe.id_str, tweetText: oe.text, mediaVisibilityResults: oe.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (oe.place ? c({ children: oe.place.full_name, link: `/places/${oe.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === M?.experiment_values?.pac_in_timeline ? u({ isUserProtected: oe.user.protected, isUserVerified: oe.user.verified, promotedContent: M, userDescription: oe.user.description, userId: oe.user.id_str, userName: oe.user.name, userScreenName: oe.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (M && m.Z.isPromoted(M) ? p({ contentAuthorId: oe.user.id_str, screenName: oe.user.screen_name, id: se.promotedLabel, promotedContent: M, ...e }) : null),
                        renderPromotionStatusBadge: (e) => h({ id: se.promotionStatusLabel }),
                        renderReplyContext: (e) => (oe.in_reply_to_status_id_str ? g({ displayTextRange: oe.display_text_range, inReplyToName: oe.in_reply_to_name, inReplyToScreenName: oe.in_reply_to_screen_name, inReplyToStatusIdStr: oe.in_reply_to_status_id_str, inReplyToUserIdStr: oe.in_reply_to_user_id_str, id: se.replyContext, tweetPermalink: oe.permalink, unmentionedUserIds: oe.unmentioned_user_ids, userMentionsEntities: oe.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => T({ forwardPivotInfo: ie.softIntervention, id: se.richContent, quotedTweetTombstoneInfo: P, tweet: ie, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (S ? b({ contextType: S.contextType, link: S.link, id: se.socialContext, retweetData: { isSelfRetweet: S.isSelfRetweet, name: S.name, screenName: S.screenName }, text: S.text, ...e }) : b()),
                        renderStats: () => y(),
                        renderText: (e) => {
                            const t = oe?.community_id_str,
                                n = t && ce ? (e, n) => new URL(`/i/communities/${t}/hashtag/${n}`, e) : void 0,
                                r = s.default.isCardDisabled(oe.card?.name),
                                i = !oe.card || ie.is_quote_status || r || me ? void 0 : oe.card.url;
                            return _({ transformHashtagLink: n, article: ue ? oe.article : void 0, displayTextRange: oe.display_text_range, entities: oe.entities, excludeCardUrl: i, lang: oe.lang, linkify: !0, id: se.text, quotedTweetId: oe.quoted_status?.id_str, quotedTweetPermalink: oe.quoted_status_permalink, text: oe.text, unmentionedUserIds: oe.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => v({ id: se.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: M } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || ie.tombstoneInfo;
                            return t?.richText ? x({ children: i.createElement(w.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => I({ id: se.avatar, promotedContent: M, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => E({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: se.username, promotedContent: M, tweetId: oe.id_str, ...e }),
                    };
                return { LinkConfigProvider: L(U), a11yIds: se, a11yIdList: de, props: { ...pe, tweet: ie, promotedContent: M, socialContext: S, quotedTweetTombstoneInfo: P, ...ae } };
            }
            const B = (e) => i.createElement(Z.ArticleCard, e),
                q = (e) => i.createElement(Z.ActionMenu, e),
                H = (e) => i.createElement(Z.ActionsBar, (0, r.Z)({}, e, { isDisabled: !0 })),
                D = (e) => null,
                N = (e) => i.createElement(Z.Education, e),
                F = (e) => i.createElement(Z.EditCallout, e),
                Q = (e) => i.createElement(Z.HighlightedUserLabel, e),
                V = (e) => i.createElement(Z.Place, e),
                z = (e) => i.createElement(Z.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => i.createElement(Z.ReplyContext, e),
                G = (e) => i.createElement(Z.RichContent, e),
                W = (e) => i.createElement(Z.Media, e),
                j = (e) => (e ? i.createElement(Z.SocialContext, e) : null),
                J = () => null,
                Y = (e) => i.createElement(Z.Timestamp, e),
                X = (e) => i.createElement(Z.Text, e),
                ee = (e) => i.createElement(Z.Tombstone, e),
                te = (e) => i.createElement(Z.UserAvatar, e),
                ne = (e) => i.createElement(Z.UserFollowIndicator, e),
                re = (e) => i.createElement(Z.UserName, e);
        },
        449945: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(111677),
                a = n.n(i),
                o = n(54989);
            const s = a().b05a39b2;
            const d = (e) => r.createElement(o.Z, e),
                l = r.forwardRef(({ children: e, label: t, lang: n, onReveal: i, render: a = d, revealLabel: o = s }, l) => {
                    const [c, u] = (function () {
                        const [e, t] = r.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), i?.(e);
                    }
                    return r.useImperativeHandle(l, () => ({ reveal: () => m("synthetic") })), c ? e : a({ actionText: o, children: t, lang: n, onActionClick: () => m("organic") });
                });
            l.displayName = "TweetInterstitial";
            const c = l;
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                i = n(325686),
                a = n(952428),
                o = n(392237),
                s = n(266704);
            const d = o.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                l = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: o, link: l, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: w, userId: h, userName: g, userScreenName: C }) {
                    return r.createElement(i.Z, { style: p }, r.createElement(a.Z, { link: l, onClick: c, style: d.root }, r.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: o, onScreenNameClick: u, promotedContent: m, userDescription: w, userId: h, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => K, Z: () => H });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                d = n(2138),
                l = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                p = n(235902),
                w = n(847224),
                h = n(950152),
                g = n(666305),
                C = n(834324),
                T = n(309854),
                f = n(782578),
                b = n(352924),
                y = n(521288),
                _ = n(912838),
                v = n(308158),
                x = n(287826),
                I = n(392237),
                k = n(54989),
                E = n(449945),
                M = n(103737),
                P = n(782261),
                A = n(586035),
                S = n(454363);
            const Z = 510,
                R = 596,
                L = 10,
                U = 16 / 9,
                B = "timeline",
                q = () => {
                    const e = i.useRef(null),
                        [t, n] = i.useState(506);
                    i.useLayoutEffect(() => {
                        const t = e.current;
                        if (t) {
                            const e = (0, d.Z)(n, 300);
                            return (
                                g.Z.observe(t, (t) => {
                                    e(t.contentRect.width);
                                }),
                                () => {
                                    e.cancel(), g.Z.unobserveAll(t);
                                }
                            );
                        }
                    }, []);
                    return [t >= 506, e];
                };
            function H(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: o, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: T, onCardLinkClick: v, onQuoteTweetClick: x, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: k, onQuotedTweetScreenNameClick: E, pollTranslations: M, preventVideoPlayback: A, promotedContent: S, quoteTweetSingleImageMinAspectRatio: L, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: H, renderGrokTranslationHeaderForQuote: N, renderJetfuelFrame: $, renderQuoteTweetTombstone: W, renderTranslationFeedback: j, singleImageMaxAspectRatio: J, style: Y, tweet: X, withActionsDisabled: ee, withAltTextBadge: te, withCardLinks: ne, withCenterCrop: re, withCondensedQuoteTweet: ie, withHalvedMediaSize: ae, withQuoteTweetBirdwatchPivot: oe, withQuoteTweetHeaderLinks: se, withQuoteTweetLink: de, withQuoteTweetMedia: le, withUserHoverCard: ce } = F(e),
                    [ue, me] = q(),
                    pe = p.ZP.useProps(),
                    we = pe.withEdgeToEdgeContent(),
                    he = (0, b.b)(),
                    ge = (0, b.b)(),
                    Ce = P.Z.getOriginalTweet(X),
                    Te = pe.compactMediaMaxHeight(),
                    fe = () => Q(Ce.quoted_status),
                    be = () => {
                        const e = fe();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, f.q)(L, J, { width: n, height: t });
                    },
                    ye = () => {
                        const t = P.Z.getOriginalTweet(X),
                            n = z(e),
                            r =
                                g &&
                                !n &&
                                (() => {
                                    const e = be();
                                    return !!e && e < 1;
                                })() &&
                                ue,
                            a = (() => {
                                const e = fe();
                                if (e) return V(e);
                            })();
                        return t && t.is_quote_status ? i.createElement(y.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: ge, isCondensed: ie, loggedInUserId: T, mediaContentStyles: !ie && G({ withEdgeToEdgeContent: we, withHalvedMediaSize: ae, backgroundColor: a, withMaxHeight: r, isInQuoteTweet: !0 }), mediaMaxHeight: r ? (we ? R : Te > 0 ? Te : Z) : void 0, nudges: c, onAvatarClick: k, onMediaClick: I, onPress: x, onScreenNameClick: E, preventVideoPlayback: A, promotedContent: S, renderGrokTranslationHeader: N, shouldRenderIfBlocked: !!H, shouldShowAltLabelAlways: te, singleImageMaxAspectRatio: J, singleImageMinAspectRatio: L, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: ee, withBirdwatchPivot: oe, withCenterCrop: re, withHeaderLinks: se, withLink: de, withMediaAsTextLinks: !le, withUserHoverCard: ce }) : null;
                    },
                    _e = () => !!S?.adMetadataContainer?.unifiedCardOverride,
                    ve = $(),
                    xe = ((e, t) => {
                        if (!z(e) || O(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const r = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    i = (0, l.Z)(e);
                                n = r.filter((e) => !i.has(e.id_str));
                            } else n = r;
                        }
                        return i.createElement(K, (0, r.Z)({}, e, { mediaDetails: n }));
                    })(e, Ce),
                    Ie = (() => {
                        if (n && n.displayType === h.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: r, text: a } = n;
                            return i.createElement(w.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === X.limited_actions, landingUrl: t, softInterventionDisplayType: r, text: a, tweetId: X.id_str });
                        }
                    })(),
                    ke = s ? i.createElement(C.Z, s) : null,
                    Ee = (() => {
                        if (!Ce || ve) return null;
                        if (
                            (() => {
                                if (_e()) return !1;
                                const e = Ce.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(Ce, S, { isDynamicFollowCardPresentAndEnabled: O(e), isDynamicProductCardPresentAndEnabled: _e(), withCardLinks: ne, hasMedia: z(e) }),
                            a = P.Z.isArticlePost(Ce);
                        return n && !(a && "NoCard" === n?.unifiedCard?.card_fetch_state) ? i.createElement(u.Z, (0, r.Z)({}, n, { cardContext: { locationKey: t || B, tweetId: Ce.id_str, tweetPermalink: Ce.permalink, tweetUserId: Ce.user.id_str, viewerUserId: T, withActionsDisabled: ee, mediaVisibilityResults: Ce.mediaVisibilityResults, grokShareAttachment: Ce.grok_share_attachment, pollTranslations: M, renderTranslationFeedback: j }, id: he, onCardLinkClick: v, preventVideoPlayback: A, promotedContent: S })) : null;
                    })(),
                    Me = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = Ce;
                        return ((!!n?.possibly_sensitive && !!(Ce.quoted_status && Ce.quoted_status.entities && Ce.quoted_status.entities.media && Ce.quoted_status.entities.media.length > 0 && le) && !H) || (t && !m.default.isPollCard(Ce.card?.name))) && e ? i.createElement(_.Z, { revealableTombstoneConfig: _.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = ye();
                            return e && H ? W({ children: e, config: H, id: ge }) : e;
                        })() || Ee,
                    );
                if (!(xe || Me || Ie || ve)) return null;
                return i.createElement(a.Z, { "aria-labelledby": `${ge} ${he}`, id: o, ref: me, style: [D.gap, Y] }, xe || ke || Ie ? i.createElement(a.Z, { style: D.mediaPivotGap }, xe, ke, Ie) : null, z(e) ? null : ve, Me);
            }
            const D = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function N({ children: e, config: t, id: n }) {
                const r = t.richRevealText?.text || t.revealText,
                    o = t.richText ? i.createElement(v.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return i.createElement(a.Z, { "aria-label": s().bb5c5864, id: n }, r ? i.createElement(E.Z, { label: o, revealLabel: r }, e) : i.createElement(k.Z, null, o));
            }
            function F(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = N, renderJetfuelFrame: r = () => null, singleImageMaxAspectRatio: i = L, singleImageMinAspectRatio: a = U, withAltTextBadge: o = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: r, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: i, singleImageMinAspectRatio: a, withAltTextBadge: o, withCardLinks: s, withCenterCrop: d, withHalvedMediaSize: l, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function Q(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function V(e) {
                const t = T.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function z(e) {
                const t = F(e),
                    n = P.Z.getOriginalTweet(t.tweet);
                return P.Z.hasMedia(n, !t.withTweetMedia);
            }
            const $ = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function O(e) {
                const t = F(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: r, enableKeyboardShortcuts: o, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: w, nudges: h, onGrokClick: g, onMediaClick: C, onMediaTagsClick: T, onPlaybackStarted: b, preventVideoPlayback: y, promotedContent: _, renderPrerollActionMenu: v, showAltTranslation: I, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: E, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: N, withRoundMediaCorners: O } = F(n),
                    [K, W] = q(),
                    j = p.ZP.useProps(),
                    J = j.withEdgeToEdgeContent(),
                    Y = P.Z.getOriginalTweet(e.tweet),
                    X = $(Y),
                    ee = !!Q(Y),
                    te =
                        (function (e, t, n) {
                            const r = F(t);
                            if (!z(r)) return;
                            const i = e?.extended_entities?.media,
                                a = 1 === i?.length ? i[0] : void 0;
                            if (!a || (!a.original_info && !a.video_info)) return;
                            const { height: o, width: s } = { ...a.original_info, ...a.video_info },
                                d = s / o;
                            return n ? (0, c.Z)(d, r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio) : s / o;
                        })(Y, n, ee) ?? 1,
                    ne =
                        d &&
                        (function (e, t) {
                            const n = F(t);
                            if (!z(n)) return !1;
                            const r = Q(e);
                            if (!r || !r.original_info) return !1;
                            const { height: i, width: a } = r && r.original_info;
                            return (0, f.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: a, height: i }) < 1;
                        })(Y, n) &&
                        K,
                    re = j.compactMediaMaxHeight(),
                    ie = J ? R : re > 0 ? re : Z,
                    ae = (function (e) {
                        const t = Q(e);
                        if (t) return V(t);
                    })(Y);
                if (A.B(Y)) return i.createElement(S.Z, { tweet: Y });
                if (Y.card && m.default.isSpaceCard(Y.card.name)) return i.createElement(a.Z, { style: D.gap }, i.createElement(x.Z, { audioSpaceId: Y.card?.binding_values.id?.string_value, clipMetadata: Y.card?.binding_values.clip_metadata?.string_value }));
                const oe = j.isVerticalVideoNoBlackBars(),
                    se = d && re > 0 && (ee || X),
                    de = ie * (ee ? te : Math.max(1, te)),
                    le = oe && X && te < 1 ? te : void 0;
                return i.createElement(a.Z, { ref: W, style: [se && { maxWidth: de }, le ? D.squareRow : void 0] }, i.createElement(M.Z, { authorId: Y.user.id_str, authorScreenName: Y.user.screen_name, cacheLocationKey: w || B, customHoverBackgroundColor: ne && J ? ae : void 0, displayMediaAttribution: !0, displayMediaMetadata: r, enableKeyboardShortcuts: o, forwardPivotInfo: s, hasSensitiveMedia: Y.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [G({ withEdgeToEdgeContent: J, withHalvedMediaSize: H, backgroundColor: ae, withMaxHeight: ne })], mediaDetails: t, mediaMaxHeight: ne ? ie : void 0, mediaTagsLink: `${Y.permalink}/media_tags`, mediaVisibilityResults: Y.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: h, onClick: C, onClickMediaTags: T, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: y, promotedContent: _, renderPrerollActionMenu: v, shouldShowAltLabelAlways: L, showAltTranslation: I, showBorder: !(ne && J), showRoundCorners: O, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: E, style: [ne && !J && D.explicitlySized, le ? { aspectRatio: te } : void 0], tweetCreatedAt: Y.created_at, tweetId: Y.id_str, tweetText: Y.text, videoAspectRatio: le, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: N, withPostPlayback: !0 }));
            }
            function G(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: r, withHalvedMediaSize: i, withMaxHeight: a } = e;
                return [r && !n && !i && D.negativeMargin, a && r && [D.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(470397),
                s = n(392237),
                d = n(84275);
            const l = s.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: n, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...p } = e,
                        w = i.createElement(a.Z, { style: l.userInfo }, i.createElement(a.Z, { style: l.userNameRow }, i.createElement(o.Z, null, m, s), t ? i.createElement(a.Z, { style: l.actionMenuContainer }, t) : null), u ? i.createElement(a.Z, { style: l.userLabelRow }, u) : null, c ? i.createElement(a.Z, { style: l.userLabelRow }, c) : null);
                    return i.createElement(d.Z, (0, r.Z)({}, p, { usernameContent: w }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-2aa5c1ed.e6d076ea.js.map

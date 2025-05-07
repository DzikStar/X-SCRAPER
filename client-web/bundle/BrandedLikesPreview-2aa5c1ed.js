"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-2aa5c1ed", "shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed"],
    {
        995145: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                i = n(325686),
                a = n(674132),
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
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: a, onPress: o, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: x, renderEducation: v, renderHighlightedUserLabel: I, renderPromotedDetails: E, renderPromotedUserProfileCard: k, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: A, renderStats: S, renderText: Z, renderTimestamp: L, renderTombstone: R, renderTweetHeader: U, renderUserAvatar: B, renderUserFollowIndicator: H, renderUserName: q, socialContext: D, staticLinkConfig: N, testID: F, tweet: V, withBottomLine: Q, withTopLine: z, withUnreadStyles: $ }) {
                const { LinkConfigProvider: O, a11yIdList: K, a11yIds: W, props: j } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: a, onPress: o, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: x, renderEducation: v, renderHighlightedUserLabel: I, renderPromotedDetails: E, renderPromotedUserProfileCard: k, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: A, renderTweetHeader: U, renderStats: S, renderText: Z, renderTimestamp: L, renderTombstone: R, renderUserAvatar: B, renderUserFollowIndicator: H, renderUserName: q, socialContext: D, staticLinkConfig: N, testID: F, tweet: V, withBottomLine: Q, withTopLine: z, withUnreadStyles: $ }),
                    G = h.Z.getOriginalTweet(j.tweet),
                    { permalink: J } = G,
                    Y = G.tombstoneInfo || j.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(j.promotedContent),
                    ee = d.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    re = G.isEdited && ee.withEditCallout(),
                    ie = G.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    ae = j.conversationTreeMetadata?.ancestorConnector,
                    oe = j.conversationTreeMetadata?.indents,
                    se = r.useContext(l.ZP),
                    de = j.conversationTreeMetadata ? r.createElement(s.ZP, { id: W.conversationLevel, style: m.default.visuallyHidden }, g({ conversationTreeDepth: j.conversationTreeMetadata.depth.toString() })) : null,
                    le = j.renderTombstone({ actionLink: J, actionText: Y?.richRevealText?.text, style: T.tombstone });
                return r.createElement(
                    O,
                    null,
                    r.createElement(
                        w.Z,
                        {
                            a11yDomIds: K,
                            actionMenu: j.renderActionMenu(),
                            avatar: j.renderUserAvatar(),
                            footer: j.renderCallToAction(),
                            header: j.renderTweetHeader({ iconSize: "large", iconStyle: T.socialContextIcon, style: T.socialContext, weight: "bold" }),
                            indents: oe,
                            link: j.link ? se.withAnchorless(j.link) : void 0,
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
                                          return !G.isStaleEdit && re ? r.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: j.withBottomLine,
                            withElbow: oe ? "side" === ae : void 0,
                            withFullWidthChildren: te,
                            withTopLine: j.withTopLine,
                            withUnreadStyles: j.withUnreadStyles,
                        },
                        de,
                        null !== le ? le : r.createElement(r.Fragment, null, j.renderReplyContext({ style: T.replyContext }), j.renderArticleCard(), j.renderText({ color: ie ? "gray700" : "text", linkColor: ie ? "gray700" : "link", size: "body", style: te && T.edgeToEdgeTextSpacer }), j.renderRichContent({ withRoundMediaCorners: !te, style: T.richContent }), j.renderPromotedUserProfileCard({ style: T.promotedUserCard })),
                        j.renderEducation({ displayStyle: "inline" }),
                        G.isStaleEdit && re && r.createElement(i.Z, { style: T.tweetEditCallout }, j.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        j.renderStats(),
                        j.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: T.actionsBar, withCount: !0 }),
                        j.renderPromotedDetails({ style: T.promotedDetails, promotedContent: j.promotedContent, withoutDisclaimerDetails: !0 }),
                        j.renderPromotionStatusBadge({ id: W.promotionStatusLabel }),
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
                x = n(103737),
                v = n(189655),
                I = n(650028),
                E = n(774526),
                k = n(451051),
                M = n(5273),
                P = n(528647),
                A = n(782261),
                S = n(782299);
            const Z = Object.freeze({ ActionsBar: f.Z, ActionMenu: T.Z, CallToAction: o.ZP, EditCallout: y.Z, Education: _.Z, HighlightedUserLabel: l.Z, Media: x.Z, Place: a.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: v.Z, ReplyContext: I.ZP, RichContent: E.Z, SocialContext: h.Z, Text: k.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: M.Z, UserFollowIndicator: S.Z, UserName: P.Z, ArticleCard: b.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function R(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = q, renderActionMenu: t = H, renderArticleCard: n = B, renderCallToAction: r = D, renderEditCallout: a = F, renderEducation: o = N, renderHighlightedUserLabel: l = V, renderPlace: c = Q, renderPromotedUserProfileCard: u = $, renderPromotedDetails: p = z, renderPromotionStatusBadge: h = O, renderReplyContext: g = K, renderRichContent: T = W, renderMedia: f = j, renderTweetHeader: b = G, renderStats: y = J, renderText: _ = X, renderTimestamp: x = Y, renderTombstone: v = ee, renderUserAvatar: I = te, renderUserFollowIndicator: E = ne, renderUserName: k = re, promotedContent: M, quotedTweetTombstoneInfo: P, socialContext: S, tweetContext: Z, staticLinkConfig: U = L, tweet: ie, ...ae }) {
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
                        renderTimestamp: (e) => x({ id: se.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: M } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || ie.tombstoneInfo;
                            return t?.richText ? v({ children: i.createElement(w.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => I({ id: se.avatar, promotedContent: M, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => k({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: se.username, promotedContent: M, tweetId: oe.id_str, ...e }),
                    };
                return { LinkConfigProvider: R(U), a11yIds: se, a11yIdList: de, props: { ...pe, tweet: ie, promotedContent: M, socialContext: S, quotedTweetTombstoneInfo: P, ...ae } };
            }
            const B = (e) => i.createElement(Z.ArticleCard, e),
                H = (e) => i.createElement(Z.ActionMenu, e),
                q = (e) => i.createElement(Z.ActionsBar, (0, r.Z)({}, e, { isDisabled: !0 })),
                D = (e) => null,
                N = (e) => i.createElement(Z.Education, e),
                F = (e) => i.createElement(Z.EditCallout, e),
                V = (e) => i.createElement(Z.HighlightedUserLabel, e),
                Q = (e) => i.createElement(Z.Place, e),
                z = (e) => i.createElement(Z.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => i.createElement(Z.ReplyContext, e),
                W = (e) => i.createElement(Z.RichContent, e),
                j = (e) => i.createElement(Z.Media, e),
                G = (e) => (e ? i.createElement(Z.SocialContext, e) : null),
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
                i = n(674132),
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
            n.d(t, { Y: () => W, Z: () => q });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(674132),
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
                x = n(308158),
                v = n(287826),
                I = n(392237),
                E = n(54989),
                k = n(449945),
                M = n(103737),
                P = n(782261),
                A = n(586035),
                S = n(454363);
            const Z = 510,
                L = 596,
                R = 10,
                U = 16 / 9,
                B = "timeline",
                H = () => {
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
            function q(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: o, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: T, onCardLinkClick: x, onQuoteTweetClick: v, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: E, onQuotedTweetScreenNameClick: k, preventVideoPlayback: M, promotedContent: A, quoteTweetSingleImageMinAspectRatio: S, quoteTweetSocialContextProps: R, quotedTweetTombstoneInfo: U, renderJetfuelFrame: q, renderQuoteTweetTombstone: N, singleImageMaxAspectRatio: $, style: O, tweet: G, withActionsDisabled: J, withAltTextBadge: Y, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: ne, withQuoteTweetBirdwatchPivot: re, withQuoteTweetHeaderLinks: ie, withQuoteTweetLink: ae, withQuoteTweetMedia: oe, withUserHoverCard: se } = F(e),
                    [de, le] = H(),
                    ce = p.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, b.b)(),
                    pe = (0, b.b)(),
                    we = P.Z.getOriginalTweet(G),
                    he = ce.compactMediaMaxHeight(),
                    ge = () => V(we.quoted_status),
                    Ce = () => {
                        const e = ge();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, f.q)(S, $, { width: n, height: t });
                    },
                    Te = () => {
                        const t = P.Z.getOriginalTweet(G),
                            n = z(e),
                            r =
                                g &&
                                !n &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                de,
                            a = (() => {
                                const e = ge();
                                if (e) return Q(e);
                            })();
                        return t && t.is_quote_status ? i.createElement(y.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: pe, isCondensed: te, loggedInUserId: T, mediaContentStyles: !te && j({ withEdgeToEdgeContent: ue, withHalvedMediaSize: ne, backgroundColor: a, withMaxHeight: r, isInQuoteTweet: !0 }), mediaMaxHeight: r ? (ue ? L : he > 0 ? he : Z) : void 0, nudges: c, onAvatarClick: E, onMediaClick: I, onPress: v, onScreenNameClick: k, preventVideoPlayback: M, promotedContent: A, shouldRenderIfBlocked: !!U, shouldShowAltLabelAlways: Y, singleImageMaxAspectRatio: $, singleImageMinAspectRatio: S, socialContextProps: R, tweet: t.quoted_status, withActionsDisabled: J, withBirdwatchPivot: re, withCenterCrop: ee, withHeaderLinks: ie, withLink: ae, withMediaAsTextLinks: !oe, withUserHoverCard: se }) : null;
                    },
                    fe = () => !!A?.adMetadataContainer?.unifiedCardOverride,
                    be = q(),
                    ye = ((e, t) => {
                        if (!z(e) || K(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const r = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    i = (0, l.Z)(e);
                                n = r.filter((e) => !i.has(e.id_str));
                            } else n = r;
                        }
                        return i.createElement(W, (0, r.Z)({}, e, { mediaDetails: n }));
                    })(e, we),
                    _e = (() => {
                        if (n && n.displayType === h.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: r, text: a } = n;
                            return i.createElement(w.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === G.limited_actions, landingUrl: t, softInterventionDisplayType: r, text: a, tweetId: G.id_str });
                        }
                    })(),
                    xe = s ? i.createElement(C.Z, s) : null,
                    ve = (() => {
                        if (!we || be) return null;
                        if (
                            (() => {
                                if (fe()) return !1;
                                const e = we.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(we, A, { isDynamicFollowCardPresentAndEnabled: K(e), isDynamicProductCardPresentAndEnabled: fe(), withCardLinks: X, hasMedia: z(e) }),
                            a = P.Z.isArticlePost(we);
                        return n && !(a && "NoCard" === n?.unifiedCard?.card_fetch_state) ? i.createElement(u.Z, (0, r.Z)({}, n, { cardContext: { locationKey: t || B, tweetId: we.id_str, tweetPermalink: we.permalink, tweetUserId: we.user.id_str, viewerUserId: T, withActionsDisabled: J, mediaVisibilityResults: we.mediaVisibilityResults, grokShareAttachment: we.grok_share_attachment }, id: me, onCardLinkClick: x, preventVideoPlayback: M, promotedContent: A })) : null;
                    })(),
                    Ie = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = we;
                        return ((!!n?.possibly_sensitive && !!(we.quoted_status && we.quoted_status.entities && we.quoted_status.entities.media && we.quoted_status.entities.media.length > 0 && oe) && !U) || (t && !m.default.isPollCard(we.card?.name))) && e ? i.createElement(_.Z, { revealableTombstoneConfig: _.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = Te();
                            return e && U ? N({ children: e, config: U, id: pe }) : e;
                        })() || ve,
                    );
                if (!(ye || Ie || _e || be)) return null;
                return i.createElement(a.Z, { "aria-labelledby": `${pe} ${me}`, id: o, ref: le, style: [D.gap, O] }, ye || xe || _e ? i.createElement(a.Z, { style: D.mediaPivotGap }, ye, xe, _e) : null, z(e) ? null : be, Ie);
            }
            const D = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function N({ children: e, config: t, id: n }) {
                const r = t.richRevealText?.text || t.revealText,
                    o = t.richText ? i.createElement(x.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return i.createElement(a.Z, { "aria-label": s().bb5c5864, id: n }, r ? i.createElement(k.Z, { label: o, revealLabel: r }, e) : i.createElement(E.Z, null, o));
            }
            function F(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = N, renderJetfuelFrame: r = () => null, singleImageMaxAspectRatio: i = R, singleImageMinAspectRatio: a = U, withAltTextBadge: o = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: r, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: i, singleImageMinAspectRatio: a, withAltTextBadge: o, withCardLinks: s, withCenterCrop: d, withHalvedMediaSize: l, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function V(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function Q(e) {
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
                },
                O = (e, t, n) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, n && D.edgeToEdgeSingleVideoWithMaxHeight];
            function K(e) {
                const t = F(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function W(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: r, enableKeyboardShortcuts: o, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: w, nudges: h, onGrokClick: g, onMediaClick: C, onMediaTagsClick: T, onPlaybackStarted: b, preventVideoPlayback: y, promotedContent: _, renderPrerollActionMenu: x, showAltTranslation: I, singleImageMaxAspectRatio: E, singleImageMinAspectRatio: k, withAltTextBadge: R, withCenterCrop: U, withHalvedMediaSize: q, withMediaTagsIcon: N, withRoundMediaCorners: K } = F(n),
                    [W, G] = H(),
                    J = p.ZP.useProps(),
                    Y = J.withEdgeToEdgeContent(),
                    X = P.Z.getOriginalTweet(e.tweet),
                    ee = J.isVerticalVideoNoBlackBars(),
                    te = $(X),
                    ne = !!V(X),
                    re =
                        (function (e, t, n) {
                            const r = F(t);
                            if (!z(r)) return;
                            const i = e?.extended_entities?.media,
                                a = 1 === i?.length ? i[0] : void 0;
                            if (!a || (!a.original_info && !a.video_info)) return;
                            const { height: o, width: s } = { ...a.original_info, ...a.video_info },
                                d = s / o;
                            return n ? (0, c.Z)(d, r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio) : s / o;
                        })(X, e, ne) ?? 1,
                    ie = ee
                        ? d && re < 1 && (te || W)
                        : d &&
                          (function (e, t) {
                              const n = F(t);
                              if (!z(n)) return !1;
                              const r = V(e);
                              if (!r || !r.original_info) return !1;
                              const { height: i, width: a } = r && r.original_info;
                              return (0, f.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: a, height: i }) < 1;
                          })(X, e) &&
                          W,
                    ae = J.compactMediaMaxHeight(),
                    oe = Y ? L : ae > 0 ? ae : Z,
                    se = (function (e) {
                        const t = V(e);
                        if (t) return Q(t);
                    })(X);
                if (A.B(X)) return i.createElement(S.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return i.createElement(a.Z, { style: D.gap }, i.createElement(v.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const de = d && ae > 0 && (ne || te),
                    le = oe * (ne || ee ? re : Math.max(1, re));
                return i.createElement(a.Z, { ref: G, style: de && { maxWidth: le } }, i.createElement(M.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: w || B, customHoverBackgroundColor: ie && Y ? se : void 0, displayMediaAttribution: !0, displayMediaMetadata: r, enableKeyboardShortcuts: o, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [j({ withEdgeToEdgeContent: Y, withHalvedMediaSize: q, backgroundColor: se, withMaxHeight: ie }), ee && ie && te && O(re, oe, Y)], mediaDetails: t, mediaMaxHeight: ie ? oe : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: h, onClick: C, onClickMediaTags: T, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: y, promotedContent: _, renderPrerollActionMenu: x, shouldShowAltLabelAlways: R, showAltTranslation: I, showBorder: !(ie && Y), showRoundCorners: K, singleImageMaxAspectRatio: E, singleImageMinAspectRatio: k, style: ie && !Y && (!ee || !te) && D.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: U, withHalvedMediaSize: q, withMediaTagsIcon: N, withPostPlayback: !0 }));
            }
            function j(e) {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-2aa5c1ed.0813d1fa.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-2aa5c1ed", "shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed"],
    {
        995145: (e, t, n) => {
            n.d(t, { Z: () => C });
            var i = n(202784),
                r = n(325686),
                o = n(674132),
                a = n.n(o),
                s = n(731708),
                d = n(235902),
                l = n(638009),
                c = n(470397),
                u = n(966582),
                m = n(392237),
                p = n(418462),
                h = n(767385),
                w = n(782261);
            const g = a().g5662c95;
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: x, renderEducation: v, renderHighlightedUserLabel: I, renderPromotedDetails: E, renderPromotedUserProfileCard: k, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: S, renderSocialContext: A, renderStats: Z, renderText: L, renderTimestamp: R, renderTombstone: U, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: D, socialContext: H, staticLinkConfig: N, testID: F, tweet: V, withBottomLine: Q, withTopLine: z, withUnreadStyles: $ }) {
                const { LinkConfigProvider: O, a11yIdList: K, a11yIds: W, props: j } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: _, renderEditCallout: x, renderEducation: v, renderHighlightedUserLabel: I, renderPromotedDetails: E, renderPromotedUserProfileCard: k, renderPromotionStatusBadge: M, renderReplyContext: P, renderRichContent: S, renderSocialContext: A, renderStats: Z, renderText: L, renderTimestamp: R, renderTombstone: U, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: D, socialContext: H, staticLinkConfig: N, testID: F, tweet: V, withBottomLine: Q, withTopLine: z, withUnreadStyles: $ }),
                    G = w.Z.getOriginalTweet(j.tweet),
                    { permalink: J } = G,
                    Y = G.tombstoneInfo || j.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(j.promotedContent),
                    ee = d.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    ie = G.isEdited && ee.withEditCallout(),
                    re = G.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    oe = j.conversationTreeMetadata?.ancestorConnector,
                    ae = j.conversationTreeMetadata?.indents,
                    se = i.useContext(l.ZP),
                    de = j.conversationTreeMetadata ? i.createElement(s.ZP, { id: W.conversationLevel, style: m.default.visuallyHidden }, g({ conversationTreeDepth: j.conversationTreeMetadata.depth.toString() })) : null,
                    le = j.renderTombstone({ actionLink: J, actionText: Y?.richRevealText?.text, style: T.tombstone });
                return i.createElement(
                    O,
                    null,
                    i.createElement(
                        h.Z,
                        {
                            a11yDomIds: K,
                            actionMenu: j.renderActionMenu(),
                            avatar: j.renderUserAvatar(),
                            footer: j.renderCallToAction(),
                            header: j.renderSocialContext({ iconSize: "large", iconStyle: T.socialContextIcon, style: T.socialContext, weight: "bold" }),
                            indents: ae,
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
                                          return !G.isStaleEdit && ie ? i.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: j.withBottomLine,
                            withElbow: ae ? "side" === oe : void 0,
                            withFullWidthChildren: te,
                            withTopLine: j.withTopLine,
                            withUnreadStyles: j.withUnreadStyles,
                        },
                        de,
                        null !== le ? le : i.createElement(i.Fragment, null, j.renderReplyContext({ style: T.replyContext }), j.renderArticleCard(), j.renderText({ color: re ? "gray700" : "text", linkColor: re ? "gray700" : "link", size: "body", style: te && T.edgeToEdgeTextSpacer }), j.renderRichContent({ withRoundMediaCorners: !te, style: T.richContent }), j.renderPromotedUserProfileCard({ style: T.promotedUserCard })),
                        j.renderEducation({ displayStyle: "inline" }),
                        G.isStaleEdit && ie && i.createElement(r.Z, { style: T.tweetEditCallout }, j.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
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
            var i = n(807896),
                r = (n(543673), n(240753), n(128399), n(202784)),
                o = n(731708),
                a = n(154003),
                s = n(276563),
                d = n(235902),
                l = n(649846),
                c = n(638009),
                u = n(32471),
                m = n(966582),
                p = n(966886),
                h = n(308158),
                w = n(126962),
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
                S = n(782261),
                A = n(782299);
            const Z = Object.freeze({ ActionsBar: f.Z, ActionMenu: T.Z, CallToAction: a.ZP, EditCallout: y.Z, Education: _.Z, HighlightedUserLabel: l.Z, Media: x.Z, Place: o.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: v.Z, ReplyContext: I.ZP, RichContent: E.Z, SocialContext: w.Z, Text: k.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: M.Z, UserFollowIndicator: A.Z, UserName: P.Z, ArticleCard: b.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function R(e) {
                const t = r.useRef(e);
                return r.useCallback(function ({ children: e }) {
                    return null === t.current ? e : r.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = D, renderActionMenu: t = q, renderArticleCard: n = B, renderCallToAction: i = H, renderEditCallout: o = F, renderEducation: a = N, renderHighlightedUserLabel: l = V, renderPlace: c = Q, renderPromotedUserProfileCard: u = $, renderPromotedDetails: p = z, renderPromotionStatusBadge: w = O, renderReplyContext: g = K, renderRichContent: T = W, renderMedia: f = j, renderSocialContext: b = G, renderStats: y = J, renderText: _ = X, renderTimestamp: x = Y, renderTombstone: v = ee, renderUserAvatar: I = te, renderUserFollowIndicator: E = ne, renderUserName: k = ie, promotedContent: M, quotedTweetTombstoneInfo: P, socialContext: A, staticLinkConfig: Z = L, tweet: U, ...re }) {
                const oe = S.Z.getOriginalTweet(U),
                    [ae, se] = (0, C.L)(oe),
                    de = d.ZP.useProps(),
                    le = de.c9sHashtagsEnabled(),
                    ce = de.renderArticleCardInTweet(),
                    ue = "true" === M?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(M?.adMetadataContainer?.dynamicCardContent?.card_type),
                    me = {
                        renderArticleCard: (e) => (S.Z.isArticlePost(oe) && oe.article && ce ? n({ articleEntity: oe.article, hasSensitiveContent: oe.possibly_sensitive, mediaVisibilityResults: oe.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: oe.bookmark_count, enableKeyboardShortcuts: !1, isLiked: oe.favorited, isRetweeted: oe.retweeted, likeCount: oe.favorite_count, id: ae.actionsBar, replyCount: oe.reply_count, retweetCount: (oe.quote_count ?? 0) + (oe.retweet_count ?? 0), tweetLink: oe.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => i({ ...e }),
                        renderEditCallout: (e) => (oe.isEdited ? o({ editType: oe.isStaleEdit ? "stale" : "latest", id: ae.editCallout, ...e }) : null),
                        renderEducation: (e) => a({ conversationControlLabelNativeID: ae.conversationControlLabel, exclusivityInfoLabelNativeID: ae.exclusivityInfoLabel, trustedFriendsLabelNativeID: ae.trustedFriendsLabel, tweet: U, ...e }),
                        renderHighlightedUserLabel: (e) => (oe.user.highlightedLabel ? l({ label: oe.user.highlightedLabel, id: ae.userLabel, ...e }) : null),
                        renderMedia: (e) => (S.Z.hasMedia(oe) ? f({ authorId: oe.user.id_str, authorScreenName: oe.user.screen_name, forwardPivotInfo: U.softIntervention, hasSensitiveMedia: oe.possibly_sensitive, mediaTagsLink: `${oe.permalink}/media_tags`, mediaDetails: oe.extended_entities?.media, id: ae.media, promotedContent: M, tweetCreatedAt: oe.created_at, tweetId: oe.id_str, tweetText: oe.text, mediaVisibilityResults: oe.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (oe.place ? c({ children: oe.place.full_name, link: `/places/${oe.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === M?.experiment_values?.pac_in_timeline ? u({ isUserProtected: oe.user.protected, isUserVerified: oe.user.verified, promotedContent: M, userDescription: oe.user.description, userId: oe.user.id_str, userName: oe.user.name, userScreenName: oe.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (M && m.Z.isPromoted(M) ? p({ contentAuthorId: oe.user.id_str, screenName: oe.user.screen_name, id: ae.promotedLabel, promotedContent: M, ...e }) : null),
                        renderPromotionStatusBadge: (e) => w({ id: ae.promotionStatusLabel }),
                        renderReplyContext: (e) => (oe.in_reply_to_status_id_str ? g({ displayTextRange: oe.display_text_range, inReplyToName: oe.in_reply_to_name, inReplyToScreenName: oe.in_reply_to_screen_name, inReplyToStatusIdStr: oe.in_reply_to_status_id_str, inReplyToUserIdStr: oe.in_reply_to_user_id_str, id: ae.replyContext, tweetPermalink: oe.permalink, unmentionedUserIds: oe.unmentioned_user_ids, userMentionsEntities: oe.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => T({ forwardPivotInfo: U.softIntervention, id: ae.richContent, quotedTweetTombstoneInfo: P, tweet: U, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderSocialContext: (e) => (A ? b({ contextType: A?.contextType, link: A.link, id: ae.socialContext, retweetData: { isSelfRetweet: A.isSelfRetweet, name: A.name, screenName: A.screenName }, text: A.text, ...e }) : null),
                        renderStats: () => y(),
                        renderText: (e) => {
                            const t = oe?.community_id_str,
                                n = t && le ? (e, n) => new URL(`/i/communities/${t}/hashtag/${n}`, e) : void 0,
                                i = s.default.isCardDisabled(oe.card?.name),
                                r = !oe.card || U.is_quote_status || i || ue ? void 0 : oe.card.url;
                            return _({ transformHashtagLink: n, article: ce ? oe.article : void 0, displayTextRange: oe.display_text_range, entities: oe.entities, excludeCardUrl: r, lang: oe.lang, linkify: !0, id: ae.text, quotedTweetId: oe.quoted_status?.id_str, quotedTweetPermalink: oe.quoted_status_permalink, text: oe.text, unmentionedUserIds: oe.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => x({ id: ae.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: M } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || U.tombstoneInfo;
                            return t?.richText ? v({ children: r.createElement(h.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: ae.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => I({ id: ae.avatar, promotedContent: M, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => k({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: ae.username, promotedContent: M, ...e }),
                    };
                return { LinkConfigProvider: R(Z), a11yIds: ae, a11yIdList: se, props: { ...me, tweet: U, promotedContent: M, socialContext: A, quotedTweetTombstoneInfo: P, ...re } };
            }
            const B = (e) => r.createElement(Z.ArticleCard, e),
                q = (e) => r.createElement(Z.ActionMenu, e),
                D = (e) => r.createElement(Z.ActionsBar, (0, i.Z)({}, e, { isDisabled: !0 })),
                H = (e) => null,
                N = (e) => r.createElement(Z.Education, e),
                F = (e) => r.createElement(Z.EditCallout, e),
                V = (e) => r.createElement(Z.HighlightedUserLabel, e),
                Q = (e) => r.createElement(Z.Place, e),
                z = (e) => r.createElement(Z.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => r.createElement(Z.ReplyContext, e),
                W = (e) => r.createElement(Z.RichContent, e),
                j = (e) => r.createElement(Z.Media, e),
                G = (e) => r.createElement(Z.SocialContext, e),
                J = () => null,
                Y = (e) => r.createElement(Z.Timestamp, e),
                X = (e) => r.createElement(Z.Text, e),
                ee = (e) => r.createElement(Z.Tombstone, e),
                te = (e) => r.createElement(Z.UserAvatar, e),
                ne = (e) => r.createElement(Z.UserFollowIndicator, e),
                ie = (e) => r.createElement(Z.UserName, e);
        },
        449945: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(674132),
                o = n.n(r),
                a = n(54989);
            const s = o().b05a39b2;
            const d = (e) => i.createElement(a.Z, e),
                l = i.forwardRef(({ children: e, label: t, lang: n, onReveal: r, render: o = d, revealLabel: a = s }, l) => {
                    const [c, u] = (function () {
                        const [e, t] = i.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), r?.(e);
                    }
                    return i.useImperativeHandle(l, () => ({ reveal: () => m("synthetic") })), c ? e : o({ actionText: a, children: t, lang: n, onActionClick: () => m("organic") });
                });
            l.displayName = "TweetInterstitial";
            const c = l;
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(202784),
                r = n(325686),
                o = n(952428),
                a = n(392237),
                s = n(266704);
            const d = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                l = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, link: l, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: h, userId: w, userName: g, userScreenName: C }) {
                    return i.createElement(r.Z, { style: p }, i.createElement(o.Z, { link: l, onClick: c, style: d.root }, i.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: w, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => W, Z: () => D });
            var i = n(807896),
                r = n(202784),
                o = n(325686),
                a = n(674132),
                s = n.n(a),
                d = n(2138),
                l = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                p = n(235902),
                h = n(847224),
                w = n(950152),
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
                S = n(586035),
                A = n(454363);
            const Z = 510,
                L = 596,
                R = 10,
                U = 16 / 9,
                B = "timeline",
                q = () => {
                    const e = r.useRef(null),
                        [t, n] = r.useState(506);
                    r.useLayoutEffect(() => {
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
            function D(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: T, onCardLinkClick: x, onQuoteTweetClick: v, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: E, onQuotedTweetScreenNameClick: k, preventVideoPlayback: M, promotedContent: S, quoteTweetSingleImageMinAspectRatio: A, quoteTweetSocialContextProps: R, quotedTweetTombstoneInfo: U, renderJetfuelFrame: D, renderQuoteTweetTombstone: N, singleImageMaxAspectRatio: $, style: O, tweet: G, withActionsDisabled: J, withAltTextBadge: Y, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: ne, withQuoteTweetBirdwatchPivot: ie, withQuoteTweetHeaderLinks: re, withQuoteTweetLink: oe, withQuoteTweetMedia: ae, withUserHoverCard: se } = F(e),
                    [de, le] = q(),
                    ce = p.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, b.b)(),
                    pe = (0, b.b)(),
                    he = P.Z.getOriginalTweet(G),
                    we = ce.compactMediaMaxHeight(),
                    ge = () => V(he.quoted_status),
                    Ce = () => {
                        const e = ge();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, f.q)(A, $, { width: n, height: t });
                    },
                    Te = () => {
                        const t = P.Z.getOriginalTweet(G),
                            n = z(e),
                            i =
                                g &&
                                !n &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                de,
                            o = (() => {
                                const e = ge();
                                if (e) return Q(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(y.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: pe, isCondensed: te, loggedInUserId: T, mediaContentStyles: !te && j({ withEdgeToEdgeContent: ue, withHalvedMediaSize: ne, backgroundColor: o, withMaxHeight: i, isInQuoteTweet: !0 }), mediaMaxHeight: i ? (ue ? L : we > 0 ? we : Z) : void 0, nudges: c, onAvatarClick: E, onMediaClick: I, onPress: v, onScreenNameClick: k, preventVideoPlayback: M, promotedContent: S, shouldRenderIfBlocked: !!U, shouldShowAltLabelAlways: Y, singleImageMaxAspectRatio: $, singleImageMinAspectRatio: A, socialContextProps: R, tweet: t.quoted_status, withActionsDisabled: J, withBirdwatchPivot: ie, withCenterCrop: ee, withHeaderLinks: re, withLink: oe, withMediaAsTextLinks: !ae, withUserHoverCard: se }) : null;
                    },
                    fe = () => !!S?.adMetadataContainer?.unifiedCardOverride,
                    be = D(),
                    ye = ((e, t) => {
                        if (!z(e) || K(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const i = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    r = (0, l.Z)(e);
                                n = i.filter((e) => !r.has(e.id_str));
                            } else n = i;
                        }
                        return r.createElement(W, (0, i.Z)({}, e, { mediaDetails: n }));
                    })(e, he),
                    _e = (() => {
                        if (n && n.displayType === w.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: i, text: o } = n;
                            return r.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === G.limited_actions, landingUrl: t, softInterventionDisplayType: i, text: o, tweetId: G.id_str });
                        }
                    })(),
                    xe = s ? r.createElement(C.Z, s) : null,
                    ve = (() => {
                        if (!he || be) return null;
                        if (
                            (() => {
                                if (fe()) return !1;
                                const e = he.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(he, S, { isDynamicFollowCardPresentAndEnabled: K(e), isDynamicProductCardPresentAndEnabled: fe(), withCardLinks: X, hasMedia: z(e) }),
                            o = P.Z.isArticlePost(he);
                        return n && !(o && "NoCard" === n?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, i.Z)({}, n, { cardContext: { locationKey: t || B, tweetId: he.id_str, tweetPermalink: he.permalink, tweetUserId: he.user.id_str, viewerUserId: T, withActionsDisabled: J, mediaVisibilityResults: he.mediaVisibilityResults, grokShareAttachment: he.grok_share_attachment }, id: me, onCardLinkClick: x, preventVideoPlayback: M, promotedContent: S })) : null;
                    })(),
                    Ie = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = he;
                        return ((!!n?.possibly_sensitive && !!(he.quoted_status && he.quoted_status.entities && he.quoted_status.entities.media && he.quoted_status.entities.media.length > 0 && ae) && !U) || (t && !m.default.isPollCard(he.card?.name))) && e ? r.createElement(_.Z, { revealableTombstoneConfig: _.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = Te();
                            return e && U ? N({ children: e, config: U, id: pe }) : e;
                        })() || ve,
                    );
                if (!(ye || Ie || _e || be)) return null;
                return r.createElement(o.Z, { "aria-labelledby": `${pe} ${me}`, id: a, ref: le, style: [H.gap, O] }, ye || xe || _e ? r.createElement(o.Z, { style: H.mediaPivotGap }, ye, xe, _e) : null, z(e) ? null : be, Ie);
            }
            const H = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function N({ children: e, config: t, id: n }) {
                const i = t.richRevealText?.text || t.revealText,
                    a = t.richText ? r.createElement(x.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(o.Z, { "aria-label": s().bb5c5864, id: n }, i ? r.createElement(k.Z, { label: a, revealLabel: i }, e) : r.createElement(E.Z, null, a));
            }
            function F(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = N, renderJetfuelFrame: i = () => null, singleImageMaxAspectRatio: r = R, singleImageMinAspectRatio: o = U, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: i, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: r, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: d, withHalvedMediaSize: l, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
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
                O = (e, t, n) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, n && H.edgeToEdgeSingleVideoWithMaxHeight];
            function K(e) {
                const t = F(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function W(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: w, onGrokClick: g, onMediaClick: C, onMediaTagsClick: T, onPlaybackStarted: b, preventVideoPlayback: y, promotedContent: _, renderPrerollActionMenu: x, showAltTranslation: I, singleImageMaxAspectRatio: E, singleImageMinAspectRatio: k, withAltTextBadge: R, withCenterCrop: U, withHalvedMediaSize: D, withMediaTagsIcon: N, withRoundMediaCorners: K } = F(n),
                    [W, G] = q(),
                    J = p.ZP.useProps(),
                    Y = J.withEdgeToEdgeContent(),
                    X = P.Z.getOriginalTweet(e.tweet),
                    ee = J.isVerticalVideoNoBlackBars(),
                    te = $(X),
                    ne = !!V(X),
                    ie =
                        (function (e, t, n) {
                            const i = F(t);
                            if (!z(i)) return;
                            const r = e?.extended_entities?.media,
                                o = 1 === r?.length ? r[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                d = s / a;
                            return n ? (0, c.Z)(d, i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio) : s / a;
                        })(X, e, ne) ?? 1,
                    re = ee
                        ? d && ie < 1 && (te || W)
                        : d &&
                          (function (e, t) {
                              const n = F(t);
                              if (!z(n)) return !1;
                              const i = V(e);
                              if (!i || !i.original_info) return !1;
                              const { height: r, width: o } = i && i.original_info;
                              return (0, f.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: o, height: r }) < 1;
                          })(X, e) &&
                          W,
                    oe = J.compactMediaMaxHeight(),
                    ae = Y ? L : oe > 0 ? oe : Z,
                    se = (function (e) {
                        const t = V(e);
                        if (t) return Q(t);
                    })(X);
                if (S.B(X)) return r.createElement(A.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return r.createElement(o.Z, { style: H.gap }, r.createElement(v.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const de = d && oe > 0 && (ne || te),
                    le = ae * (ne || ee ? ie : Math.max(1, ie));
                return r.createElement(o.Z, { ref: G, style: de && { maxWidth: le } }, r.createElement(M.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: h || B, customHoverBackgroundColor: re && Y ? se : void 0, displayMediaAttribution: !0, displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [j({ withEdgeToEdgeContent: Y, withHalvedMediaSize: D, backgroundColor: se, withMaxHeight: re }), ee && re && te && O(ie, ae, Y)], mediaDetails: t, mediaMaxHeight: re ? ae : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: w, onClick: C, onClickMediaTags: T, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: y, promotedContent: _, renderPrerollActionMenu: x, shouldShowAltLabelAlways: R, showAltTranslation: I, showBorder: !(re && Y), showRoundCorners: K, singleImageMaxAspectRatio: E, singleImageMinAspectRatio: k, style: re && !Y && (!ee || !te) && H.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: U, withHalvedMediaSize: D, withMediaTagsIcon: N, withPostPlayback: !0 }));
            }
            function j(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: i, withHalvedMediaSize: r, withMaxHeight: o } = e;
                return [i && !n && !r && H.negativeMargin, o && i && [H.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                r = n(202784),
                o = n(325686),
                a = n(470397),
                s = n(392237),
                d = n(84275);
            const l = s.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: n, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...p } = e,
                        h = r.createElement(o.Z, { style: l.userInfo }, r.createElement(o.Z, { style: l.userNameRow }, r.createElement(a.Z, null, m, s), t ? r.createElement(o.Z, { style: l.actionMenuContainer }, t) : null), u ? r.createElement(o.Z, { style: l.userLabelRow }, u) : null, c ? r.createElement(o.Z, { style: l.userLabelRow }, c) : null);
                    return r.createElement(d.Z, (0, i.Z)({}, p, { usernameContent: h }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-2aa5c1ed.53e9c3fa.js.map

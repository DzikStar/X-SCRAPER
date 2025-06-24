"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed"],
    {
        418462: (e, t, n) => {
            n.d(t, { a: () => U, q: () => R });
            var i = n(807896),
                r = (n(543673), n(240753), n(128399), n(202784)),
                a = n(731708),
                o = n(154003),
                s = n(276563),
                l = n(235902),
                d = n(649846),
                c = n(638009),
                u = n(32471),
                m = n(966582),
                w = n(966886),
                p = n(316046),
                h = n(126962),
                g = n(54989),
                C = n(366985),
                f = n(982266),
                _ = n(990804),
                T = n(530338),
                b = n(16037),
                y = n(737082),
                v = n(103737),
                x = n(189655),
                k = n(650028),
                I = n(774526),
                M = n(451051),
                E = n(5273),
                Z = n(528647),
                A = n(782261),
                P = n(782299);
            const R = Object.freeze({ ActionsBar: _.Z, ActionMenu: f.Z, CallToAction: o.ZP, EditCallout: b.Z, Education: y.Z, HighlightedUserLabel: d.Z, Media: v.Z, Place: a.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: x.Z, ReplyContext: k.ZP, RichContent: I.Z, SocialContext: h.Z, Text: M.Z, Tombstone: g.Z, Timestamp: w.Z, UserAvatar: E.Z, UserFollowIndicator: P.Z, UserName: Z.Z, ArticleCard: T.Z }),
                S = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function L(e) {
                const t = r.useRef(e);
                return r.useCallback(function ({ children: e }) {
                    return null === t.current ? e : r.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = B, renderActionMenu: t = N, renderArticleCard: n = H, renderCallToAction: i = D, renderEditCallout: a = Q, renderEducation: o = q, renderHighlightedUserLabel: d = V, renderPlace: c = F, renderPromotedUserProfileCard: u = $, renderPromotedDetails: w = z, renderPromotionStatusBadge: h = O, renderReplyContext: g = K, renderRichContent: f = G, renderMedia: _ = j, renderTweetHeader: T = W, renderStats: b = J, renderText: y = X, renderTimestamp: v = Y, renderTombstone: x = ee, renderUserAvatar: k = te, renderUserFollowIndicator: I = ne, renderUserName: M = ie, promotedContent: E, quotedTweetTombstoneInfo: Z, socialContext: P, tweetContext: R, staticLinkConfig: U = S, tweet: re, ...ae }) {
                const oe = A.Z.getOriginalTweet(re),
                    [se, le] = (0, C.L)(oe),
                    de = l.ZP.useProps(),
                    ce = de.c9sHashtagsEnabled(),
                    ue = de.renderArticleCardInTweet(),
                    me = "true" === E?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(E?.adMetadataContainer?.dynamicCardContent?.card_type),
                    we = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(oe) && oe.article && ue ? n({ articleEntity: oe.article, hasSensitiveContent: oe.possibly_sensitive, mediaVisibilityResults: oe.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: oe.bookmark_count, enableKeyboardShortcuts: !1, isLiked: oe.favorited, isRetweeted: oe.retweeted, likeCount: oe.favorite_count, id: se.actionsBar, replyCount: oe.reply_count, retweetCount: (oe.quote_count ?? 0) + (oe.retweet_count ?? 0), tweetLink: oe.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => i({ ...e }),
                        renderEditCallout: (e) => (oe.isEdited ? a({ editType: oe.isStaleEdit ? "stale" : "latest", id: se.editCallout, ...e }) : null),
                        renderEducation: (e) => o({ conversationControlLabelNativeID: se.conversationControlLabel, exclusivityInfoLabelNativeID: se.exclusivityInfoLabel, trustedFriendsLabelNativeID: se.trustedFriendsLabel, tweet: re, ...e }),
                        renderHighlightedUserLabel: (e) => (oe.user.highlightedLabel ? d({ label: oe.user.highlightedLabel, id: se.userLabel, ...e }) : null),
                        renderMedia: (e) => (A.Z.hasMedia(oe) ? _({ authorId: oe.user.id_str, authorScreenName: oe.user.screen_name, forwardPivotInfo: re.softIntervention, hasSensitiveMedia: oe.possibly_sensitive, mediaTagsLink: `${oe.permalink}/media_tags`, mediaDetails: oe.extended_entities?.media, id: se.media, promotedContent: E, tweetCreatedAt: oe.created_at, tweetId: oe.id_str, tweetText: oe.text, mediaVisibilityResults: oe.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (oe.place ? c({ children: oe.place.full_name, link: `/places/${oe.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === E?.experiment_values?.pac_in_timeline ? u({ isUserProtected: oe.user.protected, isUserVerified: oe.user.verified, promotedContent: E, userDescription: oe.user.description, userId: oe.user.id_str, userName: oe.user.name, userScreenName: oe.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (E && m.Z.isPromoted(E) ? w({ contentAuthorId: oe.user.id_str, screenName: oe.user.screen_name, id: se.promotedLabel, promotedContent: E, ...e }) : null),
                        renderPromotionStatusBadge: (e) => h({ id: se.promotionStatusLabel }),
                        renderReplyContext: (e) => (oe.in_reply_to_status_id_str ? g({ displayTextRange: oe.display_text_range, inReplyToName: oe.in_reply_to_name, inReplyToScreenName: oe.in_reply_to_screen_name, inReplyToStatusIdStr: oe.in_reply_to_status_id_str, inReplyToUserIdStr: oe.in_reply_to_user_id_str, id: se.replyContext, tweetPermalink: oe.permalink, unmentionedUserIds: oe.unmentioned_user_ids, userMentionsEntities: oe.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => f({ forwardPivotInfo: re.softIntervention, id: se.richContent, quotedTweetTombstoneInfo: Z, tweet: re, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (P ? T({ contextType: P.contextType, link: P.link, id: se.socialContext, retweetData: { isSelfRetweet: P.isSelfRetweet, name: P.name, screenName: P.screenName }, text: P.text, ...e }) : T()),
                        renderStats: () => b(),
                        renderText: (e) => {
                            const t = oe?.community_id_str,
                                n = t && ce ? (e, n) => new URL(`/i/communities/${t}/hashtag/${n}`, e) : void 0,
                                i = s.default.isCardDisabled(oe.card?.name),
                                r = !oe.card || re.is_quote_status || i || me ? void 0 : oe.card.url;
                            return y({ transformHashtagLink: n, article: ue ? oe.article : void 0, displayTextRange: oe.display_text_range, entities: oe.entities, excludeCardUrl: r, lang: oe.lang, linkify: !0, id: se.text, quotedTweetId: oe.quoted_status?.id_str, quotedTweetPermalink: oe.quoted_status_permalink, text: oe.text, unmentionedUserIds: oe.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => v({ id: se.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: E } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || re.tombstoneInfo;
                            return t?.richText ? x({ children: r.createElement(p.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => k({ id: se.avatar, promotedContent: E, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => M({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: se.username, promotedContent: E, tweetId: oe.id_str, ...e }),
                    };
                return { LinkConfigProvider: L(U), a11yIds: se, a11yIdList: le, props: { ...we, tweet: re, promotedContent: E, socialContext: P, quotedTweetTombstoneInfo: Z, ...ae } };
            }
            const H = (e) => r.createElement(R.ArticleCard, e),
                N = (e) => r.createElement(R.ActionMenu, e),
                B = (e) => r.createElement(R.ActionsBar, (0, i.Z)({}, e, { isDisabled: !0 })),
                D = (e) => null,
                q = (e) => r.createElement(R.Education, e),
                Q = (e) => r.createElement(R.EditCallout, e),
                V = (e) => r.createElement(R.HighlightedUserLabel, e),
                F = (e) => r.createElement(R.Place, e),
                z = (e) => r.createElement(R.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => r.createElement(R.ReplyContext, e),
                G = (e) => r.createElement(R.RichContent, e),
                j = (e) => r.createElement(R.Media, e),
                W = (e) => (e ? r.createElement(R.SocialContext, e) : null),
                J = () => null,
                Y = (e) => r.createElement(R.Timestamp, e),
                X = (e) => r.createElement(R.Text, e),
                ee = (e) => r.createElement(R.Tombstone, e),
                te = (e) => r.createElement(R.UserAvatar, e),
                ne = (e) => r.createElement(R.UserFollowIndicator, e),
                ie = (e) => r.createElement(R.UserName, e);
        },
        449945: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(111677),
                a = n.n(r),
                o = n(54989);
            const s = a().b05a39b2;
            const l = (e) => i.createElement(o.Z, e),
                d = i.forwardRef(({ children: e, label: t, lang: n, onReveal: r, render: a = l, revealLabel: o = s }, d) => {
                    const [c, u] = (function () {
                        const [e, t] = i.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), r?.(e);
                    }
                    return i.useImperativeHandle(d, () => ({ reveal: () => m("synthetic") })), c ? e : a({ actionText: o, children: t, lang: n, onActionClick: () => m("organic") });
                });
            d.displayName = "TweetInterstitial";
            const c = d;
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                r = n(325686),
                a = n(952428),
                o = n(392237),
                s = n(266704);
            const l = o.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: o, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: w, userDescription: p, userId: h, userName: g, userScreenName: C }) {
                    return i.createElement(r.Z, { style: w }, i.createElement(a.Z, { link: d, onClick: c, style: l.root }, i.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: o, onScreenNameClick: u, promotedContent: m, userDescription: p, userId: h, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => K, Z: () => B });
            var i = n(807896),
                r = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                l = n(2138),
                d = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                w = n(235902),
                p = n(847224),
                h = n(950152),
                g = n(666305),
                C = n(834324),
                f = n(309854),
                _ = n(782578),
                T = n(352924),
                b = n(521288),
                y = n(912838),
                v = n(316046),
                x = n(287826),
                k = n(392237),
                I = n(54989),
                M = n(449945),
                E = n(103737),
                Z = n(782261),
                A = n(586035),
                P = n(454363);
            const R = 510,
                S = 596,
                L = 10,
                U = 16 / 9,
                H = "timeline",
                N = () => {
                    const e = r.useRef(null),
                        [t, n] = r.useState(506);
                    r.useLayoutEffect(() => {
                        const t = e.current;
                        if (t) {
                            const e = (0, l.Z)(n, 300);
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
            function B(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: o, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: f, onCardLinkClick: v, onQuoteTweetClick: x, onQuoteTweetMediaClick: k, onQuotedTweetAvatarClick: I, onQuotedTweetScreenNameClick: M, pollTranslations: E, preventVideoPlayback: A, promotedContent: P, quoteTweetSingleImageMinAspectRatio: L, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: B, renderGrokTranslationHeaderForQuote: q, renderJetfuelFrame: $, renderQuoteTweetTombstone: j, renderTranslationFeedback: W, singleImageMaxAspectRatio: J, style: Y, tweet: X, withActionsDisabled: ee, withAltTextBadge: te, withCardLinks: ne, withCenterCrop: ie, withCondensedQuoteTweet: re, withHalvedMediaSize: ae, withQuoteTweetBirdwatchPivot: oe, withQuoteTweetHeaderLinks: se, withQuoteTweetLink: le, withQuoteTweetMedia: de, withUserHoverCard: ce } = Q(e),
                    [ue, me] = N(),
                    we = w.ZP.useProps(),
                    pe = we.withEdgeToEdgeContent(),
                    he = (0, T.b)(),
                    ge = (0, T.b)(),
                    Ce = Z.Z.getOriginalTweet(X),
                    fe = we.compactMediaMaxHeight(),
                    _e = () => V(Ce.quoted_status),
                    Te = () => {
                        const e = _e();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, _.q)(L, J, { width: n, height: t });
                    },
                    be = () => {
                        const t = Z.Z.getOriginalTweet(X),
                            n = z(e),
                            i =
                                g &&
                                !n &&
                                (() => {
                                    const e = Te();
                                    return !!e && e < 1;
                                })() &&
                                ue,
                            a = (() => {
                                const e = _e();
                                if (e) return F(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(b.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: ge, isCondensed: re, loggedInUserId: f, mediaContentStyles: !re && G({ withEdgeToEdgeContent: pe, withHalvedMediaSize: ae, backgroundColor: a, withMaxHeight: i, isInQuoteTweet: !0 }), mediaMaxHeight: i ? (pe ? S : fe > 0 ? fe : R) : void 0, nudges: c, onAvatarClick: I, onMediaClick: k, onPress: x, onScreenNameClick: M, preventVideoPlayback: A, promotedContent: P, renderGrokTranslationHeader: q, shouldRenderIfBlocked: !!B, shouldShowAltLabelAlways: te, singleImageMaxAspectRatio: J, singleImageMinAspectRatio: L, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: ee, withBirdwatchPivot: oe, withCenterCrop: ie, withHeaderLinks: se, withLink: le, withMediaAsTextLinks: !de, withUserHoverCard: ce }) : null;
                    },
                    ye = () => !!P?.adMetadataContainer?.unifiedCardOverride,
                    ve = $(),
                    xe = ((e, t) => {
                        if (!z(e) || O(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const i = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    r = (0, d.Z)(e);
                                n = i.filter((e) => !r.has(e.id_str));
                            } else n = i;
                        }
                        return r.createElement(K, (0, i.Z)({}, e, { mediaDetails: n }));
                    })(e, Ce),
                    ke = (() => {
                        if (n && n.displayType === h.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: i, text: a } = n;
                            return r.createElement(p.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === X.limited_actions, landingUrl: t, softInterventionDisplayType: i, text: a, tweetId: X.id_str });
                        }
                    })(),
                    Ie = s ? r.createElement(C.Z, s) : null,
                    Me = (() => {
                        if (!Ce || ve) return null;
                        if (
                            (() => {
                                if (ye()) return !1;
                                const e = Ce.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(Ce, P, { isDynamicFollowCardPresentAndEnabled: O(e), isDynamicProductCardPresentAndEnabled: ye(), withCardLinks: ne, hasMedia: z(e) }),
                            a = Z.Z.isArticlePost(Ce);
                        return n && !(a && "NoCard" === n?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, i.Z)({}, n, { cardContext: { locationKey: t || H, tweetId: Ce.id_str, tweetPermalink: Ce.permalink, tweetUserId: Ce.user.id_str, viewerUserId: f, withActionsDisabled: ee, mediaVisibilityResults: Ce.mediaVisibilityResults, grokShareAttachment: Ce.grok_share_attachment, pollTranslations: E, renderTranslationFeedback: W }, id: he, onCardLinkClick: v, preventVideoPlayback: A, promotedContent: P })) : null;
                    })(),
                    Ee = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = Ce;
                        return ((!!n?.possibly_sensitive && !!(Ce.quoted_status && Ce.quoted_status.entities && Ce.quoted_status.entities.media && Ce.quoted_status.entities.media.length > 0 && de) && !B) || (t && !m.default.isPollCard(Ce.card?.name))) && e ? r.createElement(y.Z, { revealableTombstoneConfig: y.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = be();
                            return e && B ? j({ children: e, config: B, id: ge }) : e;
                        })() || Me,
                    );
                if (!(xe || Ee || ke || ve)) return null;
                return r.createElement(a.Z, { "aria-labelledby": `${ge} ${he}`, id: o, ref: me, style: [D.gap, Y] }, xe || Ie || ke ? r.createElement(a.Z, { style: D.mediaPivotGap }, xe, Ie, ke) : null, z(e) ? null : ve, Ee);
            }
            const D = k.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function q({ children: e, config: t, id: n }) {
                const i = t.richRevealText?.text || t.revealText,
                    o = t.richText ? r.createElement(v.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(a.Z, { "aria-label": s().bb5c5864, id: n }, i ? r.createElement(M.Z, { label: o, revealLabel: i }, e) : r.createElement(I.Z, null, o));
            }
            function Q(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = q, renderJetfuelFrame: i = () => null, singleImageMaxAspectRatio: r = L, singleImageMinAspectRatio: a = U, withAltTextBadge: o = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: i, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: r, singleImageMinAspectRatio: a, withAltTextBadge: o, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function V(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function F(e) {
                const t = f.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function z(e) {
                const t = Q(e),
                    n = Z.Z.getOriginalTweet(t.tweet);
                return Z.Z.hasMedia(n, !t.withTweetMedia);
            }
            const $ = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function O(e) {
                const t = Q(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: i, enableKeyboardShortcuts: o, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: p, nudges: h, onGrokClick: g, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: T, preventVideoPlayback: b, promotedContent: y, renderPrerollActionMenu: v, showAltTranslation: k, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: M, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: B, withMediaTagsIcon: q, withRoundMediaCorners: O } = Q(n),
                    [K, j] = N(),
                    W = w.ZP.useProps(),
                    J = W.withEdgeToEdgeContent(),
                    Y = Z.Z.getOriginalTweet(e.tweet),
                    X = $(Y),
                    ee = !!V(Y),
                    te =
                        (function (e, t, n) {
                            const i = Q(t);
                            if (!z(i)) return;
                            const r = e?.extended_entities?.media,
                                a = 1 === r?.length ? r[0] : void 0;
                            if (!a || (!a.original_info && !a.video_info)) return;
                            const { height: o, width: s } = { ...a.original_info, ...a.video_info },
                                l = s / o;
                            return n ? (0, c.Z)(l, i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio) : s / o;
                        })(Y, n, ee) ?? 1,
                    ne =
                        l &&
                        (function (e, t) {
                            const n = Q(t);
                            if (!z(n)) return !1;
                            const i = V(e);
                            if (!i || !i.original_info) return !1;
                            const { height: r, width: a } = i && i.original_info;
                            return (0, _.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: a, height: r }) < 1;
                        })(Y, n) &&
                        K,
                    ie = W.compactMediaMaxHeight(),
                    re = J ? S : ie > 0 ? ie : R,
                    ae = (function (e) {
                        const t = V(e);
                        if (t) return F(t);
                    })(Y);
                if (A.B(Y)) return r.createElement(P.Z, { tweet: Y });
                if (Y.card && m.default.isSpaceCard(Y.card.name)) return r.createElement(a.Z, { style: D.gap }, r.createElement(x.Z, { audioSpaceId: Y.card?.binding_values.id?.string_value, clipMetadata: Y.card?.binding_values.clip_metadata?.string_value }));
                const oe = W.isVerticalVideoNoBlackBars() && X && te < 1,
                    se = ee ? te : X ? (oe ? te : Math.max(1, te)) : void 0,
                    le = null != se ? re * se : void 0,
                    de = (l && ie > 0 && (ee || X)) || oe;
                return r.createElement(a.Z, { ref: j, style: de && { maxWidth: le } }, r.createElement(E.Z, { authorId: Y.user.id_str, authorScreenName: Y.user.screen_name, cacheLocationKey: p || H, customHoverBackgroundColor: ne && J ? ae : void 0, displayMediaAttribution: !0, displayMediaMetadata: i, enableKeyboardShortcuts: o, forwardPivotInfo: s, hasSensitiveMedia: Y.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [G({ withEdgeToEdgeContent: J, withHalvedMediaSize: B, backgroundColor: ae, withMaxHeight: ne })], mediaDetails: t, mediaMaxHeight: ne ? re : void 0, mediaTagsLink: `${Y.permalink}/media_tags`, mediaVisibilityResults: Y.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: h, onClick: C, onClickMediaTags: f, onGrokClick: g, onPlaybackStarted: T, parentTweetId: e.tweet.id_str, preventPlayback: b, promotedContent: y, renderPrerollActionMenu: v, shouldShowAltLabelAlways: L, showAltTranslation: k, showBorder: !(ne && J), showRoundCorners: O, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: M, style: ne && !J && D.explicitlySized, tweetCreatedAt: Y.created_at, tweetId: Y.id_str, tweetText: Y.text, videoAspectRatio: oe ? te : void 0, withCenterCrop: U, withHalvedMediaSize: B, withMediaTagsIcon: q, withPostPlayback: !0 }));
            }
            function G(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: i, withHalvedMediaSize: r, withMaxHeight: a } = e;
                return [i && !n && !r && D.negativeMargin, a && i && [D.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, n) => {
            n.d(t, { Z: () => c });
            var i = n(807896),
                r = n(202784),
                a = n(325686),
                o = n(470397),
                s = n(392237),
                l = n(84275);
            const d = s.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: n, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...w } = e,
                        p = r.createElement(a.Z, { style: d.userInfo }, r.createElement(a.Z, { style: d.userNameRow }, r.createElement(o.Z, null, m, s), t ? r.createElement(a.Z, { style: d.actionMenuContainer }, t) : null), u ? r.createElement(a.Z, { style: d.userLabelRow }, u) : null, c ? r.createElement(a.Z, { style: d.userLabelRow }, c) : null);
                    return r.createElement(l.Z, (0, i.Z)({}, w, { usernameContent: p }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed.793e6c3a.js.map

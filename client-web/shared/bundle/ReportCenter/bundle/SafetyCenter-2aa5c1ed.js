"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed"],
    {
        418462: (e, t, i) => {
            i.d(t, { a: () => U, q: () => S });
            var n = i(807896),
                r = (i(543673), i(240753), i(128399), i(202784)),
                a = i(731708),
                o = i(154003),
                s = i(276563),
                l = i(235902),
                d = i(649846),
                c = i(638009),
                u = i(32471),
                m = i(966582),
                w = i(966886),
                h = i(308158),
                g = i(126962),
                p = i(54989),
                C = i(366985),
                f = i(982266),
                _ = i(990804),
                b = i(530338),
                T = i(16037),
                y = i(737082),
                x = i(103737),
                v = i(189655),
                I = i(650028),
                k = i(774526),
                M = i(451051),
                E = i(5273),
                Z = i(528647),
                A = i(782261),
                P = i(782299);
            const S = Object.freeze({ ActionsBar: _.Z, ActionMenu: f.Z, CallToAction: o.ZP, EditCallout: T.Z, Education: y.Z, HighlightedUserLabel: d.Z, Media: x.Z, Place: a.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: v.Z, ReplyContext: I.ZP, RichContent: k.Z, SocialContext: g.Z, Text: M.Z, Tombstone: p.Z, Timestamp: w.Z, UserAvatar: E.Z, UserFollowIndicator: P.Z, UserName: Z.Z, ArticleCard: b.Z }),
                R = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function L(e) {
                const t = r.useRef(e);
                return r.useCallback(function ({ children: e }) {
                    return null === t.current ? e : r.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = B, renderActionMenu: t = N, renderArticleCard: i = H, renderCallToAction: n = D, renderEditCallout: a = Q, renderEducation: o = q, renderHighlightedUserLabel: d = V, renderPlace: c = F, renderPromotedUserProfileCard: u = $, renderPromotedDetails: w = z, renderPromotionStatusBadge: g = O, renderReplyContext: p = K, renderRichContent: f = W, renderMedia: _ = j, renderSocialContext: b = G, renderStats: T = J, renderText: y = X, renderTimestamp: x = Y, renderTombstone: v = ee, renderUserAvatar: I = te, renderUserFollowIndicator: k = ie, renderUserName: M = ne, promotedContent: E, quotedTweetTombstoneInfo: Z, socialContext: P, staticLinkConfig: S = R, tweet: U, ...re }) {
                const ae = A.Z.getOriginalTweet(U),
                    [oe, se] = (0, C.L)(ae),
                    le = l.ZP.useProps(),
                    de = le.c9sHashtagsEnabled(),
                    ce = le.renderArticleCardInTweet(),
                    ue = "true" === E?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(E?.adMetadataContainer?.dynamicCardContent?.card_type),
                    me = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(ae) && ae.article && ce ? i({ articleEntity: ae.article, hasSensitiveContent: ae.possibly_sensitive, mediaVisibilityResults: ae.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: ae.bookmark_count, enableKeyboardShortcuts: !1, isLiked: ae.favorited, isRetweeted: ae.retweeted, likeCount: ae.favorite_count, id: oe.actionsBar, replyCount: ae.reply_count, retweetCount: (ae.quote_count ?? 0) + (ae.retweet_count ?? 0), tweetLink: ae.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => n({ ...e }),
                        renderEditCallout: (e) => (ae.isEdited ? a({ editType: ae.isStaleEdit ? "stale" : "latest", id: oe.editCallout, ...e }) : null),
                        renderEducation: (e) => o({ conversationControlLabelNativeID: oe.conversationControlLabel, exclusivityInfoLabelNativeID: oe.exclusivityInfoLabel, trustedFriendsLabelNativeID: oe.trustedFriendsLabel, tweet: U, ...e }),
                        renderHighlightedUserLabel: (e) => (ae.user.highlightedLabel ? d({ label: ae.user.highlightedLabel, id: oe.userLabel, ...e }) : null),
                        renderMedia: (e) => (A.Z.hasMedia(ae) ? _({ authorId: ae.user.id_str, authorScreenName: ae.user.screen_name, forwardPivotInfo: U.softIntervention, hasSensitiveMedia: ae.possibly_sensitive, mediaTagsLink: `${ae.permalink}/media_tags`, mediaDetails: ae.extended_entities?.media, id: oe.media, promotedContent: E, tweetCreatedAt: ae.created_at, tweetId: ae.id_str, tweetText: ae.text, mediaVisibilityResults: ae.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (ae.place ? c({ children: ae.place.full_name, link: `/places/${ae.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === E?.experiment_values?.pac_in_timeline ? u({ isUserProtected: ae.user.protected, isUserVerified: ae.user.verified, promotedContent: E, userDescription: ae.user.description, userId: ae.user.id_str, userName: ae.user.name, userScreenName: ae.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (E && m.Z.isPromoted(E) ? w({ contentAuthorId: ae.user.id_str, screenName: ae.user.screen_name, id: oe.promotedLabel, promotedContent: E, ...e }) : null),
                        renderPromotionStatusBadge: (e) => g({ id: oe.promotionStatusLabel }),
                        renderReplyContext: (e) => (ae.in_reply_to_status_id_str ? p({ displayTextRange: ae.display_text_range, inReplyToName: ae.in_reply_to_name, inReplyToScreenName: ae.in_reply_to_screen_name, inReplyToStatusIdStr: ae.in_reply_to_status_id_str, inReplyToUserIdStr: ae.in_reply_to_user_id_str, id: oe.replyContext, tweetPermalink: ae.permalink, unmentionedUserIds: ae.unmentioned_user_ids, userMentionsEntities: ae.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => f({ forwardPivotInfo: U.softIntervention, id: oe.richContent, quotedTweetTombstoneInfo: Z, tweet: U, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderSocialContext: (e) => (P ? b({ contextType: P?.contextType, link: P.link, id: oe.socialContext, retweetData: { isSelfRetweet: P.isSelfRetweet, name: P.name, screenName: P.screenName }, text: P.text, ...e }) : null),
                        renderStats: () => T(),
                        renderText: (e) => {
                            const t = ae?.community_id_str,
                                i = t && de ? (e, i) => new URL(`/i/communities/${t}/hashtag/${i}`, e) : void 0,
                                n = s.default.isCardDisabled(ae.card?.name),
                                r = !ae.card || U.is_quote_status || n || ue ? void 0 : ae.card.url;
                            return y({ transformHashtagLink: i, article: ce ? ae.article : void 0, displayTextRange: ae.display_text_range, entities: ae.entities, excludeCardUrl: r, lang: ae.lang, linkify: !0, id: oe.text, quotedTweetId: ae.quoted_status?.id_str, quotedTweetPermalink: ae.quoted_status_permalink, text: ae.text, unmentionedUserIds: ae.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => x({ id: oe.timestamp, link: { pathname: ae.permalink, state: { contextTweetId: ae.id_str, promotedContent: E } }, timestamp: ae.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = ae.tombstoneInfo || U.tombstoneInfo;
                            return t?.richText ? v({ children: r.createElement(h.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: oe.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => I({ id: oe.avatar, promotedContent: E, screenName: ae.user.screen_name, uri: ae.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => M({ userData: { isProtected: ae.user.protected, isBlueVerified: ae.user.is_blue_verified, isVerified: ae.user.verified, name: ae.user.name, screenName: ae.user.screen_name, userId: ae.user.id_str, verifiedType: ae.user.verified_type, isSubscriber: ae.has_super_follower, affiliateBadgeInfo: ae.user.highlightedLabel, communityModeratorStatus: ae.author_community_relationship?.role }, id: oe.username, promotedContent: E, ...e }),
                    };
                return { LinkConfigProvider: L(S), a11yIds: oe, a11yIdList: se, props: { ...me, tweet: U, promotedContent: E, socialContext: P, quotedTweetTombstoneInfo: Z, ...re } };
            }
            const H = (e) => r.createElement(S.ArticleCard, e),
                N = (e) => r.createElement(S.ActionMenu, e),
                B = (e) => r.createElement(S.ActionsBar, (0, n.Z)({}, e, { isDisabled: !0 })),
                D = (e) => null,
                q = (e) => r.createElement(S.Education, e),
                Q = (e) => r.createElement(S.EditCallout, e),
                V = (e) => r.createElement(S.HighlightedUserLabel, e),
                F = (e) => r.createElement(S.Place, e),
                z = (e) => r.createElement(S.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => r.createElement(S.ReplyContext, e),
                W = (e) => r.createElement(S.RichContent, e),
                j = (e) => r.createElement(S.Media, e),
                G = (e) => r.createElement(S.SocialContext, e),
                J = () => null,
                Y = (e) => r.createElement(S.Timestamp, e),
                X = (e) => r.createElement(S.Text, e),
                ee = (e) => r.createElement(S.Tombstone, e),
                te = (e) => r.createElement(S.UserAvatar, e),
                ie = (e) => r.createElement(S.UserFollowIndicator, e),
                ne = (e) => r.createElement(S.UserName, e);
        },
        449945: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                r = i(674132),
                a = i.n(r),
                o = i(54989);
            const s = a().b05a39b2;
            const l = (e) => n.createElement(o.Z, e),
                d = n.forwardRef(({ children: e, label: t, lang: i, onReveal: r, render: a = l, revealLabel: o = s }, d) => {
                    const [c, u] = (function () {
                        const [e, t] = n.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), r?.(e);
                    }
                    return n.useImperativeHandle(d, () => ({ reveal: () => m("synthetic") })), c ? e : a({ actionText: o, children: t, lang: i, onActionClick: () => m("organic") });
                });
            d.displayName = "TweetInterstitial";
            const c = d;
        },
        189655: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                r = i(325686),
                a = i(952428),
                o = i(392237),
                s = i(266704);
            const l = o.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: i, knownFollowers: o, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: w, userDescription: h, userId: g, userName: p, userScreenName: C }) {
                    return n.createElement(r.Z, { style: w }, n.createElement(a.Z, { link: d, onClick: c, style: l.root }, n.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: i, knownFollowers: o, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: g, userName: p, userScreenName: C })));
                };
        },
        774526: (e, t, i) => {
            i.d(t, { Y: () => W, Z: () => B });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(674132),
                s = i.n(o),
                l = i(2138),
                d = i(370751),
                c = i(837880),
                u = i(12686),
                m = i(276563),
                w = i(235902),
                h = i(847224),
                g = i(950152),
                p = i(666305),
                C = i(834324),
                f = i(309854),
                _ = i(782578),
                b = i(352924),
                T = i(521288),
                y = i(912838),
                x = i(308158),
                v = i(287826),
                I = i(392237),
                k = i(54989),
                M = i(449945),
                E = i(103737),
                Z = i(782261),
                A = i(586035),
                P = i(454363);
            const S = 510,
                R = 596,
                L = 10,
                U = 16 / 9,
                H = "timeline",
                N = () => {
                    const e = r.useRef(null),
                        [t, i] = r.useState(506);
                    r.useLayoutEffect(() => {
                        const t = e.current;
                        if (t) {
                            const e = (0, l.Z)(i, 300);
                            return (
                                p.Z.observe(t, (t) => {
                                    e(t.contentRect.width);
                                }),
                                () => {
                                    e.cancel(), p.Z.unobserveAll(t);
                                }
                            );
                        }
                    }, []);
                    return [t >= 506, e];
                };
            function B(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: i, id: o, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: p, loggedInUserId: f, onCardLinkClick: x, onQuoteTweetClick: v, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: k, onQuotedTweetScreenNameClick: M, preventVideoPlayback: E, promotedContent: A, quoteTweetSingleImageMinAspectRatio: P, quoteTweetSocialContextProps: L, quotedTweetTombstoneInfo: U, renderJetfuelFrame: B, renderQuoteTweetTombstone: q, singleImageMaxAspectRatio: $, style: O, tweet: G, withActionsDisabled: J, withAltTextBadge: Y, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: ie, withQuoteTweetBirdwatchPivot: ne, withQuoteTweetHeaderLinks: re, withQuoteTweetLink: ae, withQuoteTweetMedia: oe, withUserHoverCard: se } = Q(e),
                    [le, de] = N(),
                    ce = w.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, b.b)(),
                    we = (0, b.b)(),
                    he = Z.Z.getOriginalTweet(G),
                    ge = ce.compactMediaMaxHeight(),
                    pe = () => V(he.quoted_status),
                    Ce = () => {
                        const e = pe();
                        if (!e || !e.original_info) return;
                        const { height: t, width: i } = e && e.original_info;
                        return (0, _.q)(P, $, { width: i, height: t });
                    },
                    fe = () => {
                        const t = Z.Z.getOriginalTweet(G),
                            i = z(e),
                            n =
                                p &&
                                !i &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                le,
                            a = (() => {
                                const e = pe();
                                if (e) return F(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(T.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: we, isCondensed: te, loggedInUserId: f, mediaContentStyles: !te && j({ withEdgeToEdgeContent: ue, withHalvedMediaSize: ie, backgroundColor: a, withMaxHeight: n, isInQuoteTweet: !0 }), mediaMaxHeight: n ? (ue ? R : ge > 0 ? ge : S) : void 0, nudges: c, onAvatarClick: k, onMediaClick: I, onPress: v, onScreenNameClick: M, preventVideoPlayback: E, promotedContent: A, shouldRenderIfBlocked: !!U, shouldShowAltLabelAlways: Y, singleImageMaxAspectRatio: $, singleImageMinAspectRatio: P, socialContextProps: L, tweet: t.quoted_status, withActionsDisabled: J, withBirdwatchPivot: ne, withCenterCrop: ee, withHeaderLinks: re, withLink: ae, withMediaAsTextLinks: !oe, withUserHoverCard: se }) : null;
                    },
                    _e = () => !!A?.adMetadataContainer?.unifiedCardOverride,
                    be = B(),
                    Te = ((e, t) => {
                        if (!z(e) || K(e)) return null;
                        let i;
                        if (t.extended_entities?.media) {
                            const n = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    r = (0, d.Z)(e);
                                i = n.filter((e) => !r.has(e.id_str));
                            } else i = n;
                        }
                        return r.createElement(W, (0, n.Z)({}, e, { mediaDetails: i }));
                    })(e, he),
                    ye = (() => {
                        if (i && i.displayType === g.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: n, text: a } = i;
                            return r.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === G.limited_actions, landingUrl: t, softInterventionDisplayType: n, text: a, tweetId: G.id_str });
                        }
                    })(),
                    xe = s ? r.createElement(C.Z, s) : null,
                    ve = (() => {
                        if (!he || be) return null;
                        if (
                            (() => {
                                if (_e()) return !1;
                                const e = he.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const i = m.default.getLegacyOrUnifiedCard(he, A, { isDynamicFollowCardPresentAndEnabled: K(e), isDynamicProductCardPresentAndEnabled: _e(), withCardLinks: X, hasMedia: z(e) }),
                            a = Z.Z.isArticlePost(he);
                        return i && !(a && "NoCard" === i?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, n.Z)({}, i, { cardContext: { locationKey: t || H, tweetId: he.id_str, tweetPermalink: he.permalink, tweetUserId: he.user.id_str, viewerUserId: f, withActionsDisabled: J, mediaVisibilityResults: he.mediaVisibilityResults, grokShareAttachment: he.grok_share_attachment }, id: me, onCardLinkClick: x, preventVideoPlayback: E, promotedContent: A })) : null;
                    })(),
                    Ie = ((e) => {
                        const { possibly_sensitive: t, quoted_status: i } = he;
                        return ((!!i?.possibly_sensitive && !!(he.quoted_status && he.quoted_status.entities && he.quoted_status.entities.media && he.quoted_status.entities.media.length > 0 && oe) && !U) || (t && !m.default.isPollCard(he.card?.name))) && e ? r.createElement(y.Z, { revealableTombstoneConfig: y.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = fe();
                            return e && U ? q({ children: e, config: U, id: we }) : e;
                        })() || ve,
                    );
                if (!(Te || Ie || ye || be)) return null;
                return r.createElement(a.Z, { "aria-labelledby": `${we} ${me}`, id: o, ref: de, style: [D.gap, O] }, Te || xe || ye ? r.createElement(a.Z, { style: D.mediaPivotGap }, Te, xe, ye) : null, z(e) ? null : be, Ie);
            }
            const D = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function q({ children: e, config: t, id: i }) {
                const n = t.richRevealText?.text || t.revealText,
                    o = t.richText ? r.createElement(x.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(a.Z, { "aria-label": s().bb5c5864, id: i }, n ? r.createElement(M.Z, { label: o, revealLabel: n }, e) : r.createElement(k.Z, null, o));
            }
            function Q(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: i = q, renderJetfuelFrame: n = () => null, singleImageMaxAspectRatio: r = L, singleImageMinAspectRatio: a = U, withAltTextBadge: o = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: n, renderQuoteTweetTombstone: i, singleImageMaxAspectRatio: r, singleImageMinAspectRatio: a, withAltTextBadge: o, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
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
                    i = Z.Z.getOriginalTweet(t.tweet);
                return Z.Z.hasMedia(i, !t.withTweetMedia);
            }
            const $ = (e) => {
                    const t = e?.extended_entities?.media;
                    return 1 === t?.length && "video" === t[0].type;
                },
                O = (e, t, i) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, i && D.edgeToEdgeSingleVideoWithMaxHeight];
            function K(e) {
                const t = Q(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function W(e) {
                const { mediaDetails: t, ...i } = e,
                    { displayMediaMetadata: n, enableKeyboardShortcuts: o, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: g, onGrokClick: p, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: b, preventVideoPlayback: T, promotedContent: y, renderPrerollActionMenu: x, showAltTranslation: I, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: M, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: B, withMediaTagsIcon: q, withRoundMediaCorners: K } = Q(i),
                    [W, G] = N(),
                    J = w.ZP.useProps(),
                    Y = J.withEdgeToEdgeContent(),
                    X = Z.Z.getOriginalTweet(e.tweet),
                    ee = J.isVerticalVideoNoBlackBars(),
                    te = $(X),
                    ie = !!V(X),
                    ne =
                        (function (e, t, i) {
                            const n = Q(t);
                            if (!z(n)) return;
                            const r = e?.extended_entities?.media,
                                a = 1 === r?.length ? r[0] : void 0;
                            if (!a || (!a.original_info && !a.video_info)) return;
                            const { height: o, width: s } = { ...a.original_info, ...a.video_info },
                                l = s / o;
                            return i ? (0, c.Z)(l, n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio) : s / o;
                        })(X, e, ie) ?? 1,
                    re = ee
                        ? l && ne < 1 && (te || W)
                        : l &&
                          (function (e, t) {
                              const i = Q(t);
                              if (!z(i)) return !1;
                              const n = V(e);
                              if (!n || !n.original_info) return !1;
                              const { height: r, width: a } = n && n.original_info;
                              return (0, _.q)(i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio, { width: a, height: r }) < 1;
                          })(X, e) &&
                          W,
                    ae = J.compactMediaMaxHeight(),
                    oe = Y ? R : ae > 0 ? ae : S,
                    se = (function (e) {
                        const t = V(e);
                        if (t) return F(t);
                    })(X);
                if (A.B(X)) return r.createElement(P.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return r.createElement(a.Z, { style: D.gap }, r.createElement(v.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const le = l && ae > 0 && (ie || te),
                    de = oe * (ie || ee ? ne : Math.max(1, ne));
                return r.createElement(a.Z, { ref: G, style: le && { maxWidth: de } }, r.createElement(E.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: h || H, customHoverBackgroundColor: re && Y ? se : void 0, displayMediaAttribution: !0, displayMediaMetadata: n, enableKeyboardShortcuts: o, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [j({ withEdgeToEdgeContent: Y, withHalvedMediaSize: B, backgroundColor: se, withMaxHeight: re }), ee && re && te && O(ne, oe, Y)], mediaDetails: t, mediaMaxHeight: re ? oe : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: g, onClick: C, onClickMediaTags: f, onGrokClick: p, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: T, promotedContent: y, renderPrerollActionMenu: x, shouldShowAltLabelAlways: L, showAltTranslation: I, showBorder: !(re && Y), showRoundCorners: K, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: M, style: re && !Y && (!ee || !te) && D.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: U, withHalvedMediaSize: B, withMediaTagsIcon: q, withPostPlayback: !0 }));
            }
            function j(e) {
                const { backgroundColor: t, isInQuoteTweet: i = !1, withEdgeToEdgeContent: n, withHalvedMediaSize: r, withMaxHeight: a } = e;
                return [n && !i && !r && D.negativeMargin, a && n && [D.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(470397),
                s = i(392237),
                l = i(84275);
            const d = s.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: i, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...w } = e,
                        h = r.createElement(a.Z, { style: d.userInfo }, r.createElement(a.Z, { style: d.userNameRow }, r.createElement(o.Z, null, m, s), t ? r.createElement(a.Z, { style: d.actionMenuContainer }, t) : null), u ? r.createElement(a.Z, { style: d.userLabelRow }, u) : null, c ? r.createElement(a.Z, { style: d.userLabelRow }, c) : null);
                    return r.createElement(l.Z, (0, n.Z)({}, w, { usernameContent: h }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-2aa5c1ed.b50f4b1a.js.map

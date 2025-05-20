"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-2aa5c1ed"],
    {
        418462: (e, t, i) => {
            i.d(t, { a: () => U, q: () => R });
            var n = i(807896),
                r = (i(543673), i(240753), i(128399), i(202784)),
                a = i(731708),
                o = i(154003),
                s = i(276563),
                d = i(235902),
                l = i(649846),
                c = i(638009),
                u = i(32471),
                m = i(966582),
                h = i(966886),
                w = i(308158),
                g = i(126962),
                p = i(54989),
                C = i(366985),
                _ = i(982266),
                f = i(990804),
                T = i(530338),
                b = i(16037),
                y = i(737082),
                v = i(103737),
                x = i(189655),
                I = i(650028),
                k = i(774526),
                M = i(451051),
                A = i(5273),
                E = i(528647),
                P = i(782261),
                Z = i(782299);
            const R = Object.freeze({ ActionsBar: f.Z, ActionMenu: _.Z, CallToAction: o.ZP, EditCallout: b.Z, Education: y.Z, HighlightedUserLabel: l.Z, Media: v.Z, Place: a.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: x.Z, ReplyContext: I.ZP, RichContent: k.Z, SocialContext: g.Z, Text: M.Z, Tombstone: p.Z, Timestamp: h.Z, UserAvatar: A.Z, UserFollowIndicator: Z.Z, UserName: E.Z, ArticleCard: T.Z }),
                S = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function L(e) {
                const t = r.useRef(e);
                return r.useCallback(function ({ children: e }) {
                    return null === t.current ? e : r.createElement(c.zt, t.current, e);
                }, []);
            }
            function U({ renderActionsBar: e = D, renderActionMenu: t = N, renderArticleCard: i = H, renderCallToAction: n = q, renderEditCallout: a = Q, renderEducation: o = B, renderHighlightedUserLabel: l = V, renderPlace: c = F, renderPromotedUserProfileCard: u = $, renderPromotedDetails: h = z, renderPromotionStatusBadge: g = O, renderReplyContext: p = K, renderRichContent: _ = G, renderMedia: f = W, renderTweetHeader: T = j, renderStats: b = J, renderText: y = Y, renderTimestamp: v = X, renderTombstone: x = ee, renderUserAvatar: I = te, renderUserFollowIndicator: k = ie, renderUserName: M = ne, promotedContent: A, quotedTweetTombstoneInfo: E, socialContext: Z, tweetContext: R, staticLinkConfig: U = S, tweet: re, ...ae }) {
                const oe = P.Z.getOriginalTweet(re),
                    [se, de] = (0, C.L)(oe),
                    le = d.ZP.useProps(),
                    ce = le.c9sHashtagsEnabled(),
                    ue = le.renderArticleCardInTweet(),
                    me = "true" === A?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(A?.adMetadataContainer?.dynamicCardContent?.card_type),
                    he = {
                        renderArticleCard: (e) => (P.Z.isArticlePost(oe) && oe.article && ue ? i({ articleEntity: oe.article, hasSensitiveContent: oe.possibly_sensitive, mediaVisibilityResults: oe.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: oe.bookmark_count, enableKeyboardShortcuts: !1, isLiked: oe.favorited, isRetweeted: oe.retweeted, likeCount: oe.favorite_count, id: se.actionsBar, replyCount: oe.reply_count, retweetCount: (oe.quote_count ?? 0) + (oe.retweet_count ?? 0), tweetLink: oe.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => n({ ...e }),
                        renderEditCallout: (e) => (oe.isEdited ? a({ editType: oe.isStaleEdit ? "stale" : "latest", id: se.editCallout, ...e }) : null),
                        renderEducation: (e) => o({ conversationControlLabelNativeID: se.conversationControlLabel, exclusivityInfoLabelNativeID: se.exclusivityInfoLabel, trustedFriendsLabelNativeID: se.trustedFriendsLabel, tweet: re, ...e }),
                        renderHighlightedUserLabel: (e) => (oe.user.highlightedLabel ? l({ label: oe.user.highlightedLabel, id: se.userLabel, ...e }) : null),
                        renderMedia: (e) => (P.Z.hasMedia(oe) ? f({ authorId: oe.user.id_str, authorScreenName: oe.user.screen_name, forwardPivotInfo: re.softIntervention, hasSensitiveMedia: oe.possibly_sensitive, mediaTagsLink: `${oe.permalink}/media_tags`, mediaDetails: oe.extended_entities?.media, id: se.media, promotedContent: A, tweetCreatedAt: oe.created_at, tweetId: oe.id_str, tweetText: oe.text, mediaVisibilityResults: oe.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (oe.place ? c({ children: oe.place.full_name, link: `/places/${oe.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === A?.experiment_values?.pac_in_timeline ? u({ isUserProtected: oe.user.protected, isUserVerified: oe.user.verified, promotedContent: A, userDescription: oe.user.description, userId: oe.user.id_str, userName: oe.user.name, userScreenName: oe.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (A && m.Z.isPromoted(A) ? h({ contentAuthorId: oe.user.id_str, screenName: oe.user.screen_name, id: se.promotedLabel, promotedContent: A, ...e }) : null),
                        renderPromotionStatusBadge: (e) => g({ id: se.promotionStatusLabel }),
                        renderReplyContext: (e) => (oe.in_reply_to_status_id_str ? p({ displayTextRange: oe.display_text_range, inReplyToName: oe.in_reply_to_name, inReplyToScreenName: oe.in_reply_to_screen_name, inReplyToStatusIdStr: oe.in_reply_to_status_id_str, inReplyToUserIdStr: oe.in_reply_to_user_id_str, id: se.replyContext, tweetPermalink: oe.permalink, unmentionedUserIds: oe.unmentioned_user_ids, userMentionsEntities: oe.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => _({ forwardPivotInfo: re.softIntervention, id: se.richContent, quotedTweetTombstoneInfo: E, tweet: re, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (Z ? T({ contextType: Z.contextType, link: Z.link, id: se.socialContext, retweetData: { isSelfRetweet: Z.isSelfRetweet, name: Z.name, screenName: Z.screenName }, text: Z.text, ...e }) : T()),
                        renderStats: () => b(),
                        renderText: (e) => {
                            const t = oe?.community_id_str,
                                i = t && ce ? (e, i) => new URL(`/i/communities/${t}/hashtag/${i}`, e) : void 0,
                                n = s.default.isCardDisabled(oe.card?.name),
                                r = !oe.card || re.is_quote_status || n || me ? void 0 : oe.card.url;
                            return y({ transformHashtagLink: i, article: ue ? oe.article : void 0, displayTextRange: oe.display_text_range, entities: oe.entities, excludeCardUrl: r, lang: oe.lang, linkify: !0, id: se.text, quotedTweetId: oe.quoted_status?.id_str, quotedTweetPermalink: oe.quoted_status_permalink, text: oe.text, unmentionedUserIds: oe.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => v({ id: se.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: A } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || re.tombstoneInfo;
                            return t?.richText ? x({ children: r.createElement(w.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => I({ id: se.avatar, promotedContent: A, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => M({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: se.username, promotedContent: A, tweetId: oe.id_str, ...e }),
                    };
                return { LinkConfigProvider: L(U), a11yIds: se, a11yIdList: de, props: { ...he, tweet: re, promotedContent: A, socialContext: Z, quotedTweetTombstoneInfo: E, ...ae } };
            }
            const H = (e) => r.createElement(R.ArticleCard, e),
                N = (e) => r.createElement(R.ActionMenu, e),
                D = (e) => r.createElement(R.ActionsBar, (0, n.Z)({}, e, { isDisabled: !0 })),
                q = (e) => null,
                B = (e) => r.createElement(R.Education, e),
                Q = (e) => r.createElement(R.EditCallout, e),
                V = (e) => r.createElement(R.HighlightedUserLabel, e),
                F = (e) => r.createElement(R.Place, e),
                z = (e) => r.createElement(R.PromotedDetails, e),
                $ = (e) => null,
                O = (e) => null,
                K = (e) => r.createElement(R.ReplyContext, e),
                G = (e) => r.createElement(R.RichContent, e),
                W = (e) => r.createElement(R.Media, e),
                j = (e) => (e ? r.createElement(R.SocialContext, e) : null),
                J = () => null,
                X = (e) => r.createElement(R.Timestamp, e),
                Y = (e) => r.createElement(R.Text, e),
                ee = (e) => r.createElement(R.Tombstone, e),
                te = (e) => r.createElement(R.UserAvatar, e),
                ie = (e) => r.createElement(R.UserFollowIndicator, e),
                ne = (e) => r.createElement(R.UserName, e);
        },
        449945: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                r = i(332920),
                a = i.n(r),
                o = i(54989);
            const s = a().b05a39b2;
            const d = (e) => n.createElement(o.Z, e),
                l = n.forwardRef(({ children: e, label: t, lang: i, onReveal: r, render: a = d, revealLabel: o = s }, l) => {
                    const [c, u] = (function () {
                        const [e, t] = n.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), r?.(e);
                    }
                    return n.useImperativeHandle(l, () => ({ reveal: () => m("synthetic") })), c ? e : a({ actionText: o, children: t, lang: i, onActionClick: () => m("organic") });
                });
            l.displayName = "TweetInterstitial";
            const c = l;
        },
        196160: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(807896),
                r = i(202784),
                a = i(439592),
                o = i(254950),
                s = i(110377),
                d = i(906396);
            const l = ({ cacheLocationKey: e, containerAspectRatio: t, images: i, isCondensed: l, mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: h, singleImageMaxAspectRatio: w, singleImageMinAspectRatio: g, testID: p, withCenterCrop: C = !1, withLink: _ = !0 }) => {
                    const { getLayoutCacheForIndex: f } = (0, d.X)({ locationKey: e, itemCount: i.length }),
                        T = r.useMemo(() => (i.length > 1 ? a.Z.COVER : a.Z.withinRange(g, w)), [i.length, w, g]),
                        b = r.useMemo(() => i.map((e) => ({ type: "photo", ...e })), [i]),
                        y = r.useCallback(
                            ({ index: e }) => {
                                const t = { mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: h, testID: p, withCenterCrop: C, withLink: _ },
                                    i = b[e],
                                    a = f(e) ?? void 0;
                                return r.createElement(s.j, (0, n.Z)({}, t, { aspectMode: T, image: i, layoutCache: a }));
                            },
                            [b, c, u, m, h, p, C, _, f, T],
                        );
                    return r.createElement(o.ZP, { containerAspectRatio: t, groupSize: i.length, isCondensed: l, renderItemAtIndex: y });
                },
                c = r.memo(l);
        },
        189655: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                r = i(325686),
                a = i(952428),
                o = i(392237),
                s = i(266704);
            const d = o.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                l = function ({ followButton: e, isUserProtected: t, isUserVerified: i, knownFollowers: o, link: l, onClick: c, onScreenNameClick: u, promotedContent: m, style: h, userDescription: w, userId: g, userName: p, userScreenName: C }) {
                    return n.createElement(r.Z, { style: h }, n.createElement(a.Z, { link: l, onClick: c, style: d.root }, n.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: i, knownFollowers: o, onScreenNameClick: u, promotedContent: m, userDescription: w, userId: g, userName: p, userScreenName: C })));
                };
        },
        774526: (e, t, i) => {
            i.d(t, { Y: () => K, Z: () => D });
            var n = i(807896),
                r = i(202784),
                a = i(325686),
                o = i(332920),
                s = i.n(o),
                d = i(2138),
                l = i(370751),
                c = i(837880),
                u = i(12686),
                m = i(276563),
                h = i(235902),
                w = i(847224),
                g = i(950152),
                p = i(666305),
                C = i(834324),
                _ = i(309854),
                f = i(782578),
                T = i(352924),
                b = i(521288),
                y = i(912838),
                v = i(308158),
                x = i(287826),
                I = i(392237),
                k = i(54989),
                M = i(449945),
                A = i(103737),
                E = i(782261),
                P = i(586035),
                Z = i(454363);
            const R = 510,
                S = 596,
                L = 10,
                U = 16 / 9,
                H = "timeline",
                N = () => {
                    const e = r.useRef(null),
                        [t, i] = r.useState(506);
                    r.useLayoutEffect(() => {
                        const t = e.current;
                        if (t) {
                            const e = (0, d.Z)(i, 300);
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
            function D(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: i, id: o, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: p, loggedInUserId: _, onCardLinkClick: v, onQuoteTweetClick: x, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: k, onQuotedTweetScreenNameClick: M, preventVideoPlayback: A, promotedContent: P, quoteTweetSingleImageMinAspectRatio: Z, quoteTweetSocialContextProps: L, quotedTweetTombstoneInfo: U, renderJetfuelFrame: D, renderQuoteTweetTombstone: B, singleImageMaxAspectRatio: $, style: W, tweet: j, withActionsDisabled: J, withAltTextBadge: X, withCardLinks: Y, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: ie, withQuoteTweetBirdwatchPivot: ne, withQuoteTweetHeaderLinks: re, withQuoteTweetLink: ae, withQuoteTweetMedia: oe, withUserHoverCard: se } = Q(e),
                    [de, le] = N(),
                    ce = h.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, T.b)(),
                    he = (0, T.b)(),
                    we = E.Z.getOriginalTweet(j),
                    ge = ce.compactMediaMaxHeight(),
                    pe = () => V(we.quoted_status),
                    Ce = () => {
                        const e = pe();
                        if (!e || !e.original_info) return;
                        const { height: t, width: i } = e && e.original_info;
                        return (0, f.q)(Z, $, { width: i, height: t });
                    },
                    _e = () => {
                        const t = E.Z.getOriginalTweet(j),
                            i = z(e),
                            n =
                                p &&
                                !i &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                de,
                            a = (() => {
                                const e = pe();
                                if (e) return F(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(b.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: he, isCondensed: te, loggedInUserId: _, mediaContentStyles: !te && G({ withEdgeToEdgeContent: ue, withHalvedMediaSize: ie, backgroundColor: a, withMaxHeight: n, isInQuoteTweet: !0 }), mediaMaxHeight: n ? (ue ? S : ge > 0 ? ge : R) : void 0, nudges: c, onAvatarClick: k, onMediaClick: I, onPress: x, onScreenNameClick: M, preventVideoPlayback: A, promotedContent: P, shouldRenderIfBlocked: !!U, shouldShowAltLabelAlways: X, singleImageMaxAspectRatio: $, singleImageMinAspectRatio: Z, socialContextProps: L, tweet: t.quoted_status, withActionsDisabled: J, withBirdwatchPivot: ne, withCenterCrop: ee, withHeaderLinks: re, withLink: ae, withMediaAsTextLinks: !oe, withUserHoverCard: se }) : null;
                    },
                    fe = () => !!P?.adMetadataContainer?.unifiedCardOverride,
                    Te = D(),
                    be = ((e, t) => {
                        if (!z(e) || O(e)) return null;
                        let i;
                        if (t.extended_entities?.media) {
                            const n = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    r = (0, l.Z)(e);
                                i = n.filter((e) => !r.has(e.id_str));
                            } else i = n;
                        }
                        return r.createElement(K, (0, n.Z)({}, e, { mediaDetails: i }));
                    })(e, we),
                    ye = (() => {
                        if (i && i.displayType === g.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: n, text: a } = i;
                            return r.createElement(w.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === j.limited_actions, landingUrl: t, softInterventionDisplayType: n, text: a, tweetId: j.id_str });
                        }
                    })(),
                    ve = s ? r.createElement(C.Z, s) : null,
                    xe = (() => {
                        if (!we || Te) return null;
                        if (
                            (() => {
                                if (fe()) return !1;
                                const e = we.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const i = m.default.getLegacyOrUnifiedCard(we, P, { isDynamicFollowCardPresentAndEnabled: O(e), isDynamicProductCardPresentAndEnabled: fe(), withCardLinks: Y, hasMedia: z(e) }),
                            a = E.Z.isArticlePost(we);
                        return i && !(a && "NoCard" === i?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, n.Z)({}, i, { cardContext: { locationKey: t || H, tweetId: we.id_str, tweetPermalink: we.permalink, tweetUserId: we.user.id_str, viewerUserId: _, withActionsDisabled: J, mediaVisibilityResults: we.mediaVisibilityResults, grokShareAttachment: we.grok_share_attachment }, id: me, onCardLinkClick: v, preventVideoPlayback: A, promotedContent: P })) : null;
                    })(),
                    Ie = ((e) => {
                        const { possibly_sensitive: t, quoted_status: i } = we;
                        return ((!!i?.possibly_sensitive && !!(we.quoted_status && we.quoted_status.entities && we.quoted_status.entities.media && we.quoted_status.entities.media.length > 0 && oe) && !U) || (t && !m.default.isPollCard(we.card?.name))) && e ? r.createElement(y.Z, { revealableTombstoneConfig: y.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = _e();
                            return e && U ? B({ children: e, config: U, id: he }) : e;
                        })() || xe,
                    );
                if (!(be || Ie || ye || Te)) return null;
                return r.createElement(a.Z, { "aria-labelledby": `${he} ${me}`, id: o, ref: le, style: [q.gap, W] }, be || ve || ye ? r.createElement(a.Z, { style: q.mediaPivotGap }, be, ve, ye) : null, z(e) ? null : Te, Ie);
            }
            const q = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function B({ children: e, config: t, id: i }) {
                const n = t.richRevealText?.text || t.revealText,
                    o = t.richText ? r.createElement(v.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(a.Z, { "aria-label": s().bb5c5864, id: i }, n ? r.createElement(M.Z, { label: o, revealLabel: n }, e) : r.createElement(k.Z, null, o));
            }
            function Q(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: i = B, renderJetfuelFrame: n = () => null, singleImageMaxAspectRatio: r = L, singleImageMinAspectRatio: a = U, withAltTextBadge: o = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: n, renderQuoteTweetTombstone: i, singleImageMaxAspectRatio: r, singleImageMinAspectRatio: a, withAltTextBadge: o, withCardLinks: s, withCenterCrop: d, withHalvedMediaSize: l, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function V(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function F(e) {
                const t = _.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function z(e) {
                const t = Q(e),
                    i = E.Z.getOriginalTweet(t.tweet);
                return E.Z.hasMedia(i, !t.withTweetMedia);
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
                const { mediaDetails: t, ...i } = e,
                    { displayMediaMetadata: n, enableKeyboardShortcuts: o, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: w, nudges: g, onGrokClick: p, onMediaClick: C, onMediaTagsClick: _, onPlaybackStarted: T, preventVideoPlayback: b, promotedContent: y, renderPrerollActionMenu: v, showAltTranslation: I, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: M, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: D, withMediaTagsIcon: B, withRoundMediaCorners: O } = Q(i),
                    [K, W] = N(),
                    j = h.ZP.useProps(),
                    J = j.withEdgeToEdgeContent(),
                    X = E.Z.getOriginalTweet(e.tweet),
                    Y = $(X),
                    ee = !!V(X),
                    te =
                        (function (e, t, i) {
                            const n = Q(t);
                            if (!z(n)) return;
                            const r = e?.extended_entities?.media,
                                a = 1 === r?.length ? r[0] : void 0;
                            if (!a || (!a.original_info && !a.video_info)) return;
                            const { height: o, width: s } = { ...a.original_info, ...a.video_info },
                                d = s / o;
                            return i ? (0, c.Z)(d, n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio) : s / o;
                        })(X, i, ee) ?? 1,
                    ie =
                        d &&
                        (function (e, t) {
                            const i = Q(t);
                            if (!z(i)) return !1;
                            const n = V(e);
                            if (!n || !n.original_info) return !1;
                            const { height: r, width: a } = n && n.original_info;
                            return (0, f.q)(i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio, { width: a, height: r }) < 1;
                        })(X, i) &&
                        K,
                    ne = j.compactMediaMaxHeight(),
                    re = J ? S : ne > 0 ? ne : R,
                    ae = (function (e) {
                        const t = V(e);
                        if (t) return F(t);
                    })(X);
                if (P.B(X)) return r.createElement(Z.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return r.createElement(a.Z, { style: q.gap }, r.createElement(x.Z, { audioSpaceId: X.card?.binding_values.id?.string_value, clipMetadata: X.card?.binding_values.clip_metadata?.string_value }));
                const oe = d && ne > 0 && (ee || Y),
                    se = re * (ee ? te : Math.max(1, te));
                return r.createElement(a.Z, { ref: W, style: oe && { maxWidth: se } }, r.createElement(A.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: w || H, customHoverBackgroundColor: ie && J ? ae : void 0, displayMediaAttribution: !0, displayMediaMetadata: n, enableKeyboardShortcuts: o, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [G({ withEdgeToEdgeContent: J, withHalvedMediaSize: D, backgroundColor: ae, withMaxHeight: ie })], mediaDetails: t, mediaMaxHeight: ie ? re : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: g, onClick: C, onClickMediaTags: _, onGrokClick: p, onPlaybackStarted: T, parentTweetId: e.tweet.id_str, preventPlayback: b, promotedContent: y, renderPrerollActionMenu: v, shouldShowAltLabelAlways: L, showAltTranslation: I, showBorder: !(ie && J), showRoundCorners: O, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: M, style: ie && !J && q.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: U, withHalvedMediaSize: D, withMediaTagsIcon: B, withPostPlayback: !0 }));
            }
            function G(e) {
                const { backgroundColor: t, isInQuoteTweet: i = !1, withEdgeToEdgeContent: n, withHalvedMediaSize: r, withMaxHeight: a } = e;
                return [n && !i && !r && q.negativeMargin, a && n && [q.centerItems, { backgroundColor: t }]];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-2aa5c1ed.acdc730a.js.map

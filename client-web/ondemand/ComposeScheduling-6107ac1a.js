"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-6107ac1a"],
    {
        418462: (e, t, r) => {
            r.d(t, { a: () => R, q: () => P });
            var i = r(807896),
                n = (r(543673), r(240753), r(128399), r(202784)),
                o = r(731708),
                a = r(154003),
                s = r(276563),
                l = r(235902),
                d = r(649846),
                c = r(638009),
                u = r(32471),
                m = r(966582),
                p = r(966886),
                h = r(308158),
                w = r(126962),
                g = r(54989),
                C = r(366985),
                f = r(982266),
                _ = r(990804),
                b = r(530338),
                v = r(16037),
                T = r(737082),
                y = r(103737),
                k = r(189655),
                E = r(650028),
                x = r(774526),
                I = r(451051),
                Z = r(5273),
                M = r(528647),
                A = r(782261),
                S = r(782299);
            const P = Object.freeze({ ActionsBar: _.Z, ActionMenu: f.Z, CallToAction: a.ZP, EditCallout: v.Z, Education: T.Z, HighlightedUserLabel: d.Z, Media: y.Z, Place: o.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: k.Z, ReplyContext: E.ZP, RichContent: x.Z, SocialContext: w.Z, Text: I.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: Z.Z, UserFollowIndicator: S.Z, UserName: M.Z, ArticleCard: b.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function U(e) {
                const t = n.useRef(e);
                return n.useCallback(function ({ children: e }) {
                    return null === t.current ? e : n.createElement(c.zt, t.current, e);
                }, []);
            }
            function R({ renderActionsBar: e = V, renderActionMenu: t = B, renderArticleCard: r = N, renderCallToAction: i = H, renderEditCallout: o = D, renderEducation: a = F, renderHighlightedUserLabel: d = W, renderPlace: c = q, renderPromotedUserProfileCard: u = z, renderPromotedDetails: p = $, renderPromotionStatusBadge: w = Q, renderReplyContext: g = O, renderRichContent: f = K, renderMedia: _ = Y, renderTweetHeader: b = j, renderStats: v = G, renderText: T = X, renderTimestamp: y = J, renderTombstone: k = ee, renderUserAvatar: E = te, renderUserFollowIndicator: x = re, renderUserName: I = ie, promotedContent: Z, quotedTweetTombstoneInfo: M, socialContext: S, tweetContext: P, staticLinkConfig: R = L, tweet: ne, ...oe }) {
                const ae = A.Z.getOriginalTweet(ne),
                    [se, le] = (0, C.L)(ae),
                    de = l.ZP.useProps(),
                    ce = de.c9sHashtagsEnabled(),
                    ue = de.renderArticleCardInTweet(),
                    me = "true" === Z?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(Z?.adMetadataContainer?.dynamicCardContent?.card_type),
                    pe = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(ae) && ae.article && ue ? r({ articleEntity: ae.article, hasSensitiveContent: ae.possibly_sensitive, mediaVisibilityResults: ae.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: ae.bookmark_count, enableKeyboardShortcuts: !1, isLiked: ae.favorited, isRetweeted: ae.retweeted, likeCount: ae.favorite_count, id: se.actionsBar, replyCount: ae.reply_count, retweetCount: (ae.quote_count ?? 0) + (ae.retweet_count ?? 0), tweetLink: ae.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => i({ ...e }),
                        renderEditCallout: (e) => (ae.isEdited ? o({ editType: ae.isStaleEdit ? "stale" : "latest", id: se.editCallout, ...e }) : null),
                        renderEducation: (e) => a({ conversationControlLabelNativeID: se.conversationControlLabel, exclusivityInfoLabelNativeID: se.exclusivityInfoLabel, trustedFriendsLabelNativeID: se.trustedFriendsLabel, tweet: ne, ...e }),
                        renderHighlightedUserLabel: (e) => (ae.user.highlightedLabel ? d({ label: ae.user.highlightedLabel, id: se.userLabel, ...e }) : null),
                        renderMedia: (e) => (A.Z.hasMedia(ae) ? _({ authorId: ae.user.id_str, authorScreenName: ae.user.screen_name, forwardPivotInfo: ne.softIntervention, hasSensitiveMedia: ae.possibly_sensitive, mediaTagsLink: `${ae.permalink}/media_tags`, mediaDetails: ae.extended_entities?.media, id: se.media, promotedContent: Z, tweetCreatedAt: ae.created_at, tweetId: ae.id_str, tweetText: ae.text, mediaVisibilityResults: ae.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (ae.place ? c({ children: ae.place.full_name, link: `/places/${ae.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === Z?.experiment_values?.pac_in_timeline ? u({ isUserProtected: ae.user.protected, isUserVerified: ae.user.verified, promotedContent: Z, userDescription: ae.user.description, userId: ae.user.id_str, userName: ae.user.name, userScreenName: ae.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (Z && m.Z.isPromoted(Z) ? p({ contentAuthorId: ae.user.id_str, screenName: ae.user.screen_name, id: se.promotedLabel, promotedContent: Z, ...e }) : null),
                        renderPromotionStatusBadge: (e) => w({ id: se.promotionStatusLabel }),
                        renderReplyContext: (e) => (ae.in_reply_to_status_id_str ? g({ displayTextRange: ae.display_text_range, inReplyToName: ae.in_reply_to_name, inReplyToScreenName: ae.in_reply_to_screen_name, inReplyToStatusIdStr: ae.in_reply_to_status_id_str, inReplyToUserIdStr: ae.in_reply_to_user_id_str, id: se.replyContext, tweetPermalink: ae.permalink, unmentionedUserIds: ae.unmentioned_user_ids, userMentionsEntities: ae.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => f({ forwardPivotInfo: ne.softIntervention, id: se.richContent, quotedTweetTombstoneInfo: M, tweet: ne, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (S ? b({ contextType: S.contextType, link: S.link, id: se.socialContext, retweetData: { isSelfRetweet: S.isSelfRetweet, name: S.name, screenName: S.screenName }, text: S.text, ...e }) : b()),
                        renderStats: () => v(),
                        renderText: (e) => {
                            const t = ae?.community_id_str,
                                r = t && ce ? (e, r) => new URL(`/i/communities/${t}/hashtag/${r}`, e) : void 0,
                                i = s.default.isCardDisabled(ae.card?.name),
                                n = !ae.card || ne.is_quote_status || i || me ? void 0 : ae.card.url;
                            return T({ transformHashtagLink: r, article: ue ? ae.article : void 0, displayTextRange: ae.display_text_range, entities: ae.entities, excludeCardUrl: n, lang: ae.lang, linkify: !0, id: se.text, quotedTweetId: ae.quoted_status?.id_str, quotedTweetPermalink: ae.quoted_status_permalink, text: ae.text, unmentionedUserIds: ae.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => y({ id: se.timestamp, link: { pathname: ae.permalink, state: { contextTweetId: ae.id_str, promotedContent: Z } }, timestamp: ae.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = ae.tombstoneInfo || ne.tombstoneInfo;
                            return t?.richText ? k({ children: n.createElement(h.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => E({ id: se.avatar, promotedContent: Z, screenName: ae.user.screen_name, uri: ae.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => I({ userData: { isProtected: ae.user.protected, isBlueVerified: ae.user.is_blue_verified, isVerified: ae.user.verified, name: ae.user.name, screenName: ae.user.screen_name, userId: ae.user.id_str, verifiedType: ae.user.verified_type, isSubscriber: ae.has_super_follower, affiliateBadgeInfo: ae.user.highlightedLabel, communityModeratorStatus: ae.author_community_relationship?.role }, id: se.username, promotedContent: Z, ...e }),
                    };
                return { LinkConfigProvider: U(R), a11yIds: se, a11yIdList: le, props: { ...pe, tweet: ne, promotedContent: Z, socialContext: S, quotedTweetTombstoneInfo: M, ...oe } };
            }
            const N = (e) => n.createElement(P.ArticleCard, e),
                B = (e) => n.createElement(P.ActionMenu, e),
                V = (e) => n.createElement(P.ActionsBar, (0, i.Z)({}, e, { isDisabled: !0 })),
                H = (e) => null,
                F = (e) => n.createElement(P.Education, e),
                D = (e) => n.createElement(P.EditCallout, e),
                W = (e) => n.createElement(P.HighlightedUserLabel, e),
                q = (e) => n.createElement(P.Place, e),
                $ = (e) => n.createElement(P.PromotedDetails, e),
                z = (e) => null,
                Q = (e) => null,
                O = (e) => n.createElement(P.ReplyContext, e),
                K = (e) => n.createElement(P.RichContent, e),
                Y = (e) => n.createElement(P.Media, e),
                j = (e) => (e ? n.createElement(P.SocialContext, e) : null),
                G = () => null,
                J = (e) => n.createElement(P.Timestamp, e),
                X = (e) => n.createElement(P.Text, e),
                ee = (e) => n.createElement(P.Tombstone, e),
                te = (e) => n.createElement(P.UserAvatar, e),
                re = (e) => n.createElement(P.UserFollowIndicator, e),
                ie = (e) => n.createElement(P.UserName, e);
        },
        449945: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(202784),
                n = r(674132),
                o = r.n(n),
                a = r(54989);
            const s = o().b05a39b2;
            const l = (e) => i.createElement(a.Z, e),
                d = i.forwardRef(({ children: e, label: t, lang: r, onReveal: n, render: o = l, revealLabel: a = s }, d) => {
                    const [c, u] = (function () {
                        const [e, t] = i.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), n?.(e);
                    }
                    return i.useImperativeHandle(d, () => ({ reveal: () => m("synthetic") })), c ? e : o({ actionText: a, children: t, lang: r, onActionClick: () => m("organic") });
                });
            d.displayName = "TweetInterstitial";
            const c = d;
        },
        196160: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(807896),
                n = r(202784),
                o = r(439592),
                a = r(254950),
                s = r(110377),
                l = r(906396);
            const d = ({ cacheLocationKey: e, containerAspectRatio: t, images: r, isCondensed: d, mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, singleImageMaxAspectRatio: h, singleImageMinAspectRatio: w, testID: g, withCenterCrop: C = !1, withLink: f = !0 }) => {
                    const { getLayoutCacheForIndex: _ } = (0, l.X)({ locationKey: e, itemCount: r.length }),
                        b = n.useMemo(() => (r.length > 1 ? o.Z.COVER : o.Z.withinRange(w, h)), [r.length, h, w]),
                        v = n.useMemo(() => r.map((e) => ({ type: "photo", ...e })), [r]),
                        T = n.useCallback(
                            ({ index: e }) => {
                                const t = { mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, testID: g, withCenterCrop: C, withLink: f },
                                    r = v[e],
                                    o = _(e) ?? void 0;
                                return n.createElement(s.j, (0, i.Z)({}, t, { aspectMode: b, image: r, layoutCache: o }));
                            },
                            [v, c, u, m, p, g, C, f, _, b],
                        );
                    return n.createElement(a.ZP, { containerAspectRatio: t, groupSize: r.length, isCondensed: d, renderItemAtIndex: T });
                },
                c = n.memo(d);
        },
        189655: (e, t, r) => {
            r.d(t, { Z: () => d });
            var i = r(202784),
                n = r(325686),
                o = r(952428),
                a = r(392237),
                s = r(266704);
            const l = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: h, userId: w, userName: g, userScreenName: C }) {
                    return i.createElement(n.Z, { style: p }, i.createElement(o.Z, { link: d, onClick: c, style: l.root }, i.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: w, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, r) => {
            r.d(t, { Y: () => K, Z: () => V });
            var i = r(807896),
                n = r(202784),
                o = r(325686),
                a = r(674132),
                s = r.n(a),
                l = r(2138),
                d = r(370751),
                c = r(837880),
                u = r(12686),
                m = r(276563),
                p = r(235902),
                h = r(847224),
                w = r(950152),
                g = r(666305),
                C = r(834324),
                f = r(309854),
                _ = r(782578),
                b = r(352924),
                v = r(521288),
                T = r(912838),
                y = r(308158),
                k = r(287826),
                E = r(392237),
                x = r(54989),
                I = r(449945),
                Z = r(103737),
                M = r(782261),
                A = r(586035),
                S = r(454363);
            const P = 510,
                L = 596,
                U = 10,
                R = 16 / 9,
                N = "timeline",
                B = () => {
                    const e = n.useRef(null),
                        [t, r] = n.useState(506);
                    n.useLayoutEffect(() => {
                        const t = e.current;
                        if (t) {
                            const e = (0, l.Z)(r, 300);
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
            function V(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: r, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: f, onCardLinkClick: y, onQuoteTweetClick: k, onQuoteTweetMediaClick: E, onQuotedTweetAvatarClick: x, onQuotedTweetScreenNameClick: I, preventVideoPlayback: Z, promotedContent: A, quoteTweetSingleImageMinAspectRatio: S, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: R, renderJetfuelFrame: V, renderQuoteTweetTombstone: F, singleImageMaxAspectRatio: z, style: Q, tweet: j, withActionsDisabled: G, withAltTextBadge: J, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: re, withQuoteTweetBirdwatchPivot: ie, withQuoteTweetHeaderLinks: ne, withQuoteTweetLink: oe, withQuoteTweetMedia: ae, withUserHoverCard: se } = D(e),
                    [le, de] = B(),
                    ce = p.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, b.b)(),
                    pe = (0, b.b)(),
                    he = M.Z.getOriginalTweet(j),
                    we = ce.compactMediaMaxHeight(),
                    ge = () => W(he.quoted_status),
                    Ce = () => {
                        const e = ge();
                        if (!e || !e.original_info) return;
                        const { height: t, width: r } = e && e.original_info;
                        return (0, _.q)(S, z, { width: r, height: t });
                    },
                    fe = () => {
                        const t = M.Z.getOriginalTweet(j),
                            r = $(e),
                            i =
                                g &&
                                !r &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                le,
                            o = (() => {
                                const e = ge();
                                if (e) return q(e);
                            })();
                        return t && t.is_quote_status ? n.createElement(v.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: pe, isCondensed: te, loggedInUserId: f, mediaContentStyles: !te && Y({ withEdgeToEdgeContent: ue, withHalvedMediaSize: re, backgroundColor: o, withMaxHeight: i, isInQuoteTweet: !0 }), mediaMaxHeight: i ? (ue ? L : we > 0 ? we : P) : void 0, nudges: c, onAvatarClick: x, onMediaClick: E, onPress: k, onScreenNameClick: I, preventVideoPlayback: Z, promotedContent: A, shouldRenderIfBlocked: !!R, shouldShowAltLabelAlways: J, singleImageMaxAspectRatio: z, singleImageMinAspectRatio: S, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: G, withBirdwatchPivot: ie, withCenterCrop: ee, withHeaderLinks: ne, withLink: oe, withMediaAsTextLinks: !ae, withUserHoverCard: se }) : null;
                    },
                    _e = () => !!A?.adMetadataContainer?.unifiedCardOverride,
                    be = V(),
                    ve = ((e, t) => {
                        if (!$(e) || O(e)) return null;
                        let r;
                        if (t.extended_entities?.media) {
                            const i = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    n = (0, d.Z)(e);
                                r = i.filter((e) => !n.has(e.id_str));
                            } else r = i;
                        }
                        return n.createElement(K, (0, i.Z)({}, e, { mediaDetails: r }));
                    })(e, he),
                    Te = (() => {
                        if (r && r.displayType === w.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: i, text: o } = r;
                            return n.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === j.limited_actions, landingUrl: t, softInterventionDisplayType: i, text: o, tweetId: j.id_str });
                        }
                    })(),
                    ye = s ? n.createElement(C.Z, s) : null,
                    ke = (() => {
                        if (!he || be) return null;
                        if (
                            (() => {
                                if (_e()) return !1;
                                const e = he.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const r = m.default.getLegacyOrUnifiedCard(he, A, { isDynamicFollowCardPresentAndEnabled: O(e), isDynamicProductCardPresentAndEnabled: _e(), withCardLinks: X, hasMedia: $(e) }),
                            o = M.Z.isArticlePost(he);
                        return r && !(o && "NoCard" === r?.unifiedCard?.card_fetch_state) ? n.createElement(u.Z, (0, i.Z)({}, r, { cardContext: { locationKey: t || N, tweetId: he.id_str, tweetPermalink: he.permalink, tweetUserId: he.user.id_str, viewerUserId: f, withActionsDisabled: G, mediaVisibilityResults: he.mediaVisibilityResults, grokShareAttachment: he.grok_share_attachment }, id: me, onCardLinkClick: y, preventVideoPlayback: Z, promotedContent: A })) : null;
                    })(),
                    Ee = ((e) => {
                        const { possibly_sensitive: t, quoted_status: r } = he;
                        return ((!!r?.possibly_sensitive && !!(he.quoted_status && he.quoted_status.entities && he.quoted_status.entities.media && he.quoted_status.entities.media.length > 0 && ae) && !R) || (t && !m.default.isPollCard(he.card?.name))) && e ? n.createElement(T.Z, { revealableTombstoneConfig: T.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = fe();
                            return e && R ? F({ children: e, config: R, id: pe }) : e;
                        })() || ke,
                    );
                if (!(ve || Ee || Te || be)) return null;
                return n.createElement(o.Z, { "aria-labelledby": `${pe} ${me}`, id: a, ref: de, style: [H.gap, Q] }, ve || ye || Te ? n.createElement(o.Z, { style: H.mediaPivotGap }, ve, ye, Te) : null, $(e) ? null : be, Ee);
            }
            const H = E.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function F({ children: e, config: t, id: r }) {
                const i = t.richRevealText?.text || t.revealText,
                    a = t.richText ? n.createElement(y.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return n.createElement(o.Z, { "aria-label": s().bb5c5864, id: r }, i ? n.createElement(I.Z, { label: a, revealLabel: i }, e) : n.createElement(x.Z, null, a));
            }
            function D(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = R, renderQuoteTweetTombstone: r = F, renderJetfuelFrame: i = () => null, singleImageMaxAspectRatio: n = U, singleImageMinAspectRatio: o = R, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: i, renderQuoteTweetTombstone: r, singleImageMaxAspectRatio: n, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function W(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function q(e) {
                const t = f.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function $(e) {
                const t = D(e),
                    r = M.Z.getOriginalTweet(t.tweet);
                return M.Z.hasMedia(r, !t.withTweetMedia);
            }
            const z = (e) => {
                    const t = e?.extended_entities?.media;
                    return 1 === t?.length && "video" === t[0].type;
                },
                Q = (e, t, r) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, r && H.edgeToEdgeSingleVideoWithMaxHeight];
            function O(e) {
                const t = D(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...r } = e,
                    { displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: w, onGrokClick: g, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: b, preventVideoPlayback: v, promotedContent: T, renderPrerollActionMenu: y, showAltTranslation: E, singleImageMaxAspectRatio: x, singleImageMinAspectRatio: I, withAltTextBadge: U, withCenterCrop: R, withHalvedMediaSize: V, withMediaTagsIcon: F, withRoundMediaCorners: O } = D(r),
                    [K, j] = B(),
                    G = p.ZP.useProps(),
                    J = G.withEdgeToEdgeContent(),
                    X = M.Z.getOriginalTweet(e.tweet),
                    ee = G.isVerticalVideoNoBlackBars(),
                    te = z(X),
                    re = !!W(X),
                    ie =
                        (function (e, t, r) {
                            const i = D(t);
                            if (!$(i)) return;
                            const n = e?.extended_entities?.media,
                                o = 1 === n?.length ? n[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                l = s / a;
                            return r ? (0, c.Z)(l, i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio) : s / a;
                        })(X, e, re) ?? 1,
                    ne = ee
                        ? l && ie < 1 && (te || K)
                        : l &&
                          (function (e, t) {
                              const r = D(t);
                              if (!$(r)) return !1;
                              const i = W(e);
                              if (!i || !i.original_info) return !1;
                              const { height: n, width: o } = i && i.original_info;
                              return (0, _.q)(r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio, { width: o, height: n }) < 1;
                          })(X, e) &&
                          K,
                    oe = G.compactMediaMaxHeight(),
                    ae = J ? L : oe > 0 ? oe : P,
                    se = (function (e) {
                        const t = W(e);
                        if (t) return q(t);
                    })(X);
                if (A.B(X)) return n.createElement(S.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return n.createElement(o.Z, { style: H.gap }, n.createElement(k.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const le = l && oe > 0 && (re || te),
                    de = ae * (re || ee ? ie : Math.max(1, ie));
                return n.createElement(o.Z, { ref: j, style: le && { maxWidth: de } }, n.createElement(Z.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: h || N, customHoverBackgroundColor: ne && J ? se : void 0, displayMediaAttribution: !0, displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [Y({ withEdgeToEdgeContent: J, withHalvedMediaSize: V, backgroundColor: se, withMaxHeight: ne }), ee && ne && te && Q(ie, ae, J)], mediaDetails: t, mediaMaxHeight: ne ? ae : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: w, onClick: C, onClickMediaTags: f, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: v, promotedContent: T, renderPrerollActionMenu: y, shouldShowAltLabelAlways: U, showAltTranslation: E, showBorder: !(ne && J), showRoundCorners: O, singleImageMaxAspectRatio: x, singleImageMinAspectRatio: I, style: ne && !J && (!ee || !te) && H.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: R, withHalvedMediaSize: V, withMediaTagsIcon: F, withPostPlayback: !0 }));
            }
            function Y(e) {
                const { backgroundColor: t, isInQuoteTweet: r = !1, withEdgeToEdgeContent: i, withHalvedMediaSize: n, withMaxHeight: o } = e;
                return [i && !r && !n && H.negativeMargin, o && i && [H.centerItems, { backgroundColor: t }]];
            }
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => b });
            var i = r(202784),
                n = r(325686),
                o = r(731708),
                a = r(235902),
                s = r(649846),
                l = r(529509),
                d = r(392237),
                c = r(823161),
                u = r(238406),
                m = r(366635),
                p = r(646797);
            const h = () => !1;
            class w extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: o } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && r) {
                                const { avatarUrls: e, count: t, names: a } = r;
                                return t ? i.createElement(n.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && i.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: o })) : null;
                            }
                        });
                }
                render() {
                    return i.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return i.createElement(n.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: i } = t;
                    return i && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return i.createElement(n.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? i.createElement(n.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, promotedContent: r, userAvatarSize: o, userAvatarUri: s, userScreenName: l } = this.props,
                        { avatar: d } = e;
                    return i.createElement(n.Z, { style: g.row }, i.createElement(a.ZP.Provider, { value: { userAvatarLabel: h } }, i.createElement(c.default, { onClick: t, promotedContent: r, screenName: l, size: o, uri: d ? s : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: o } = t;
                    return r ? i.createElement(i.Fragment, null, this._renderUserAvatar(), i.createElement(n.Z, { style: g.marginTop8 }, this._renderUserName(), o && this._renderHighlightedUserLabel())) : i.createElement(n.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: n, onScreenNameClick: o, promotedContent: a, userHighlightedLabel: s, userName: l, userScreenName: d, userTranslatorType: c, userVerifiedType: u, userWithFollowsYou: p, withNameWrap: h } = this.props,
                        { badges: w, followIndicator: g, fullName: C } = e;
                    return i.createElement(m.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: w ? t : void 0, isProtected: w ? r : void 0, isVerified: w ? n : void 0, name: C ? l : d, nameSize: "headline2", onLinkClick: o, promotedContent: a, screenName: d, translatorType: w ? c : void 0, verifiedType: w ? u : void 0, withFollowsYou: g && p, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && i.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? i.createElement(n.Z, { style: g.marginTop4 }, i.createElement(o.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: o, userWithheldDescription: a, userWithheldEntities: s } = this.props,
                        { description: l } = e;
                    return l && t && r && o ? i.createElement(n.Z, { style: [g.row, g.marginTop12] }, i.createElement(u.Z, { description: t, entities: r, userId: o, withheldDescription: a, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: o, userFollowersCount: a, userFriendsCount: s, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? i.createElement(n.Z, { style: [g.row, g.marginTop12] }, i.createElement(p.Z, { followersCount: a, friendsCount: s, onPress: r, screenName: l, subscriptionsCount: o, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var C = r(807896);
            var f = r(674132);
            const _ = r.n(f)().ef633578;
            class b extends i.PureComponent {
                render() {
                    return i.createElement(w, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: n, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return i.createElement(w, (0, C.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: n, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const n = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return i.createElement(w, { errorMessage: _, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: n.protected, isUserStatsWithLink: n.isUserStatsWithLink, isUserVerified: n.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: n.profile_image_url_https, userDescription: n.description, userEntities: n.entities, userFollowersCount: n.followers_count, userFriendsCount: n.friends_count, userId: n.id_str, userName: r, userScreenName: r, userWithFollowsYou: n.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var i = r(202784),
                n = r(674132),
                o = r.n(n),
                a = r(891198),
                s = r(98538);
            class l extends i.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: n, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${n}/verified_followers`;
                    return i.createElement(s.Z.Group, { style: l }, i.createElement(s.Z, { count: t, link: u ? `/${n}/following` : void 0, onPress: r }, i.createElement(o().I18NFormatMessage, { $i18n: "g3ed1dd5" }, i.createElement(s.Z.Value, null, o().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), i.createElement(s.Z.Label, null, o().daf8a75f({ count: t })))), i.createElement(s.Z, { count: e, link: u ? h : void 0, onPress: r }, i.createElement(o().I18NFormatMessage, { $i18n: "i06724fb" }, i.createElement(s.Z.Value, null, o().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), i.createElement(s.Z.Label, null, o().ad9b5988({ count: e })))), m && void 0 !== d && i.createElement(s.Z, { count: d, link: u ? `/${n}/creator-subscriptions/subscribers` : void 0, onPress: r }, i.createElement(o().I18NFormatMessage, { $i18n: "eb0084f3" }, i.createElement(s.Z.Value, null, o().a9980948({ formattedCount: (0, a.wl)(d) })), i.createElement(s.Z.Label, null, o().ce44a35c({ count: d })))), p && c && i.createElement(s.Z, { count: c, link: u ? `/${n}/creator-subscriptions/subscriptions` : void 0, onPress: r }, i.createElement(o().I18NFormatMessage, { $i18n: "fc1b8f67" }, i.createElement(s.Z.Value, null, o().id949f68({ formattedCount: (0, a.wl)(c) })), i.createElement(s.Z.Label, null, o().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var i = r(202784),
                n = r(890601),
                o = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var i = r(202784),
                n = r(890601),
                o = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        730895: (e, t, r) => {
            var i = r(821176);
            e.exports = function () {
                var e = i(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        900664: (e, t, r) => {
            r.d(t, { Z: () => n });
            var i = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const n = {
                cancel() {
                    i(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), i(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-6107ac1a.0f849cea.js.map

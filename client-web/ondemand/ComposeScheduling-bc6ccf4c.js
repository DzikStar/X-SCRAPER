"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-bc6ccf4c", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        418462: (e, t, n) => {
            n.d(t, { a: () => R, q: () => P });
            var r = n(807896),
                i = (n(543673), n(240753), n(128399), n(202784)),
                o = n(731708),
                a = n(154003),
                s = n(276563),
                l = n(235902),
                d = n(649846),
                c = n(638009),
                u = n(32471),
                m = n(966582),
                p = n(966886),
                h = n(308158),
                w = n(126962),
                g = n(54989),
                f = n(366985),
                C = n(982266),
                _ = n(990804),
                v = n(530338),
                b = n(16037),
                T = n(737082),
                k = n(103737),
                y = n(189655),
                E = n(650028),
                I = n(774526),
                x = n(451051),
                Z = n(5273),
                M = n(528647),
                A = n(782261),
                S = n(782299);
            const P = Object.freeze({ ActionsBar: _.Z, ActionMenu: C.Z, CallToAction: a.ZP, EditCallout: b.Z, Education: T.Z, HighlightedUserLabel: d.Z, Media: k.Z, Place: o.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: y.Z, ReplyContext: E.ZP, RichContent: I.Z, SocialContext: w.Z, Text: x.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: Z.Z, UserFollowIndicator: S.Z, UserName: M.Z, ArticleCard: v.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function U(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(c.zt, t.current, e);
                }, []);
            }
            function R({ renderActionsBar: e = H, renderActionMenu: t = B, renderArticleCard: n = N, renderCallToAction: r = V, renderEditCallout: o = D, renderEducation: a = F, renderHighlightedUserLabel: d = z, renderPlace: c = q, renderPromotedUserProfileCard: u = W, renderPromotedDetails: p = Q, renderPromotionStatusBadge: w = O, renderReplyContext: g = $, renderRichContent: C = K, renderMedia: _ = j, renderTweetHeader: v = Y, renderStats: b = G, renderText: T = X, renderTimestamp: k = J, renderTombstone: y = ee, renderUserAvatar: E = te, renderUserFollowIndicator: I = ne, renderUserName: x = re, promotedContent: Z, quotedTweetTombstoneInfo: M, socialContext: S, tweetContext: P, staticLinkConfig: R = L, tweet: ie, ...oe }) {
                const ae = A.Z.getOriginalTweet(ie),
                    [se, le] = (0, f.L)(ae),
                    de = l.ZP.useProps(),
                    ce = de.c9sHashtagsEnabled(),
                    ue = de.renderArticleCardInTweet(),
                    me = "true" === Z?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(Z?.adMetadataContainer?.dynamicCardContent?.card_type),
                    pe = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(ae) && ae.article && ue ? n({ articleEntity: ae.article, hasSensitiveContent: ae.possibly_sensitive, mediaVisibilityResults: ae.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: ae.bookmark_count, enableKeyboardShortcuts: !1, isLiked: ae.favorited, isRetweeted: ae.retweeted, likeCount: ae.favorite_count, id: se.actionsBar, replyCount: ae.reply_count, retweetCount: (ae.quote_count ?? 0) + (ae.retweet_count ?? 0), tweetLink: ae.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => r({ ...e }),
                        renderEditCallout: (e) => (ae.isEdited ? o({ editType: ae.isStaleEdit ? "stale" : "latest", id: se.editCallout, ...e }) : null),
                        renderEducation: (e) => a({ conversationControlLabelNativeID: se.conversationControlLabel, exclusivityInfoLabelNativeID: se.exclusivityInfoLabel, trustedFriendsLabelNativeID: se.trustedFriendsLabel, tweet: ie, ...e }),
                        renderHighlightedUserLabel: (e) => (ae.user.highlightedLabel ? d({ label: ae.user.highlightedLabel, id: se.userLabel, ...e }) : null),
                        renderMedia: (e) => (A.Z.hasMedia(ae) ? _({ authorId: ae.user.id_str, authorScreenName: ae.user.screen_name, forwardPivotInfo: ie.softIntervention, hasSensitiveMedia: ae.possibly_sensitive, mediaTagsLink: `${ae.permalink}/media_tags`, mediaDetails: ae.extended_entities?.media, id: se.media, promotedContent: Z, tweetCreatedAt: ae.created_at, tweetId: ae.id_str, tweetText: ae.text, mediaVisibilityResults: ae.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (ae.place ? c({ children: ae.place.full_name, link: `/places/${ae.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === Z?.experiment_values?.pac_in_timeline ? u({ isUserProtected: ae.user.protected, isUserVerified: ae.user.verified, promotedContent: Z, userDescription: ae.user.description, userId: ae.user.id_str, userName: ae.user.name, userScreenName: ae.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (Z && m.Z.isPromoted(Z) ? p({ contentAuthorId: ae.user.id_str, screenName: ae.user.screen_name, id: se.promotedLabel, promotedContent: Z, ...e }) : null),
                        renderPromotionStatusBadge: (e) => w({ id: se.promotionStatusLabel }),
                        renderReplyContext: (e) => (ae.in_reply_to_status_id_str ? g({ displayTextRange: ae.display_text_range, inReplyToName: ae.in_reply_to_name, inReplyToScreenName: ae.in_reply_to_screen_name, inReplyToStatusIdStr: ae.in_reply_to_status_id_str, inReplyToUserIdStr: ae.in_reply_to_user_id_str, id: se.replyContext, tweetPermalink: ae.permalink, unmentionedUserIds: ae.unmentioned_user_ids, userMentionsEntities: ae.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => C({ forwardPivotInfo: ie.softIntervention, id: se.richContent, quotedTweetTombstoneInfo: M, tweet: ie, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderTweetHeader: (e) => (S ? v({ contextType: S.contextType, link: S.link, id: se.socialContext, retweetData: { isSelfRetweet: S.isSelfRetweet, name: S.name, screenName: S.screenName }, text: S.text, ...e }) : v()),
                        renderStats: () => b(),
                        renderText: (e) => {
                            const t = ae?.community_id_str,
                                n = t && ce ? (e, n) => new URL(`/i/communities/${t}/hashtag/${n}`, e) : void 0,
                                r = s.default.isCardDisabled(ae.card?.name),
                                i = !ae.card || ie.is_quote_status || r || me ? void 0 : ae.card.url;
                            return T({ transformHashtagLink: n, article: ue ? ae.article : void 0, displayTextRange: ae.display_text_range, entities: ae.entities, excludeCardUrl: i, lang: ae.lang, linkify: !0, id: se.text, quotedTweetId: ae.quoted_status?.id_str, quotedTweetPermalink: ae.quoted_status_permalink, text: ae.text, unmentionedUserIds: ae.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => k({ id: se.timestamp, link: { pathname: ae.permalink, state: { contextTweetId: ae.id_str, promotedContent: Z } }, timestamp: ae.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = ae.tombstoneInfo || ie.tombstoneInfo;
                            return t?.richText ? y({ children: i.createElement(h.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: se.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => E({ id: se.avatar, promotedContent: Z, screenName: ae.user.screen_name, uri: ae.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => x({ userData: { isProtected: ae.user.protected, isBlueVerified: ae.user.is_blue_verified, isVerified: ae.user.verified, name: ae.user.name, screenName: ae.user.screen_name, userId: ae.user.id_str, verifiedType: ae.user.verified_type, isSubscriber: ae.has_super_follower, affiliateBadgeInfo: ae.user.highlightedLabel, communityModeratorStatus: ae.author_community_relationship?.role }, id: se.username, promotedContent: Z, tweetId: ae.id_str, ...e }),
                    };
                return { LinkConfigProvider: U(R), a11yIds: se, a11yIdList: le, props: { ...pe, tweet: ie, promotedContent: Z, socialContext: S, quotedTweetTombstoneInfo: M, ...oe } };
            }
            const N = (e) => i.createElement(P.ArticleCard, e),
                B = (e) => i.createElement(P.ActionMenu, e),
                H = (e) => i.createElement(P.ActionsBar, (0, r.Z)({}, e, { isDisabled: !0 })),
                V = (e) => null,
                F = (e) => i.createElement(P.Education, e),
                D = (e) => i.createElement(P.EditCallout, e),
                z = (e) => i.createElement(P.HighlightedUserLabel, e),
                q = (e) => i.createElement(P.Place, e),
                Q = (e) => i.createElement(P.PromotedDetails, e),
                W = (e) => null,
                O = (e) => null,
                $ = (e) => i.createElement(P.ReplyContext, e),
                K = (e) => i.createElement(P.RichContent, e),
                j = (e) => i.createElement(P.Media, e),
                Y = (e) => (e ? i.createElement(P.SocialContext, e) : null),
                G = () => null,
                J = (e) => i.createElement(P.Timestamp, e),
                X = (e) => i.createElement(P.Text, e),
                ee = (e) => i.createElement(P.Tombstone, e),
                te = (e) => i.createElement(P.UserAvatar, e),
                ne = (e) => i.createElement(P.UserFollowIndicator, e),
                re = (e) => i.createElement(P.UserName, e);
        },
        449945: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(111677),
                o = n.n(i),
                a = n(54989);
            const s = o().b05a39b2;
            const l = (e) => r.createElement(a.Z, e),
                d = r.forwardRef(({ children: e, label: t, lang: n, onReveal: i, render: o = l, revealLabel: a = s }, d) => {
                    const [c, u] = (function () {
                        const [e, t] = r.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), i?.(e);
                    }
                    return r.useImperativeHandle(d, () => ({ reveal: () => m("synthetic") })), c ? e : o({ actionText: a, children: t, lang: n, onActionClick: () => m("organic") });
                });
            d.displayName = "TweetInterstitial";
            const c = d;
        },
        196160: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                i = n(202784),
                o = n(439592),
                a = n(254950),
                s = n(110377),
                l = n(906396);
            const d = ({ cacheLocationKey: e, containerAspectRatio: t, images: n, isCondensed: d, mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, singleImageMaxAspectRatio: h, singleImageMinAspectRatio: w, testID: g, withCenterCrop: f = !1, withLink: C = !0 }) => {
                    const { getLayoutCacheForIndex: _ } = (0, l.X)({ locationKey: e, itemCount: n.length }),
                        v = i.useMemo(() => (n.length > 1 ? o.Z.COVER : o.Z.withinRange(w, h)), [n.length, h, w]),
                        b = i.useMemo(() => n.map((e) => ({ type: "photo", ...e })), [n]),
                        T = i.useCallback(
                            ({ index: e }) => {
                                const t = { mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, testID: g, withCenterCrop: f, withLink: C },
                                    n = b[e],
                                    o = _(e) ?? void 0;
                                return i.createElement(s.j, (0, r.Z)({}, t, { aspectMode: v, image: n, layoutCache: o }));
                            },
                            [b, c, u, m, p, g, f, C, _, v],
                        );
                    return i.createElement(a.ZP, { containerAspectRatio: t, groupSize: n.length, isCondensed: d, renderItemAtIndex: T });
                },
                c = i.memo(d);
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                i = n(325686),
                o = n(952428),
                a = n(392237),
                s = n(266704);
            const l = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: h, userId: w, userName: g, userScreenName: f }) {
                    return r.createElement(i.Z, { style: p }, r.createElement(o.Z, { link: d, onClick: c, style: l.root }, r.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: w, userName: g, userScreenName: f })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => $, Z: () => H });
            var r = n(807896),
                i = n(202784),
                o = n(325686),
                a = n(111677),
                s = n.n(a),
                l = n(2138),
                d = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                p = n(235902),
                h = n(847224),
                w = n(950152),
                g = n(666305),
                f = n(834324),
                C = n(309854),
                _ = n(782578),
                v = n(352924),
                b = n(521288),
                T = n(912838),
                k = n(308158),
                y = n(287826),
                E = n(392237),
                I = n(54989),
                x = n(449945),
                Z = n(103737),
                M = n(782261),
                A = n(586035),
                S = n(454363);
            const P = 510,
                L = 596,
                U = 10,
                R = 16 / 9,
                N = "timeline",
                B = () => {
                    const e = i.useRef(null),
                        [t, n] = i.useState(506);
                    i.useLayoutEffect(() => {
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
            function H(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: C, onCardLinkClick: k, onQuoteTweetClick: y, onQuoteTweetMediaClick: E, onQuotedTweetAvatarClick: I, onQuotedTweetScreenNameClick: x, pollTranslations: Z, preventVideoPlayback: A, promotedContent: S, quoteTweetSingleImageMinAspectRatio: U, quoteTweetSocialContextProps: R, quotedTweetTombstoneInfo: H, renderJetfuelFrame: F, renderQuoteTweetTombstone: W, renderTranslationFeedback: j, singleImageMaxAspectRatio: Y, style: G, tweet: J, withActionsDisabled: X, withAltTextBadge: ee, withCardLinks: te, withCenterCrop: ne, withCondensedQuoteTweet: re, withHalvedMediaSize: ie, withQuoteTweetBirdwatchPivot: oe, withQuoteTweetHeaderLinks: ae, withQuoteTweetLink: se, withQuoteTweetMedia: le, withUserHoverCard: de } = D(e),
                    [ce, ue] = B(),
                    me = p.ZP.useProps(),
                    pe = me.withEdgeToEdgeContent(),
                    he = (0, v.b)(),
                    we = (0, v.b)(),
                    ge = M.Z.getOriginalTweet(J),
                    fe = me.compactMediaMaxHeight(),
                    Ce = () => z(ge.quoted_status),
                    _e = () => {
                        const e = Ce();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, _.q)(U, Y, { width: n, height: t });
                    },
                    ve = () => {
                        const t = M.Z.getOriginalTweet(J),
                            n = Q(e),
                            r =
                                g &&
                                !n &&
                                (() => {
                                    const e = _e();
                                    return !!e && e < 1;
                                })() &&
                                ce,
                            o = (() => {
                                const e = Ce();
                                if (e) return q(e);
                            })();
                        return t && t.is_quote_status ? i.createElement(b.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: we, isCondensed: re, loggedInUserId: C, mediaContentStyles: !re && K({ withEdgeToEdgeContent: pe, withHalvedMediaSize: ie, backgroundColor: o, withMaxHeight: r, isInQuoteTweet: !0 }), mediaMaxHeight: r ? (pe ? L : fe > 0 ? fe : P) : void 0, nudges: c, onAvatarClick: I, onMediaClick: E, onPress: y, onScreenNameClick: x, preventVideoPlayback: A, promotedContent: S, shouldRenderIfBlocked: !!H, shouldShowAltLabelAlways: ee, singleImageMaxAspectRatio: Y, singleImageMinAspectRatio: U, socialContextProps: R, tweet: t.quoted_status, withActionsDisabled: X, withBirdwatchPivot: oe, withCenterCrop: ne, withHeaderLinks: ae, withLink: se, withMediaAsTextLinks: !le, withUserHoverCard: de }) : null;
                    },
                    be = () => !!S?.adMetadataContainer?.unifiedCardOverride,
                    Te = F(),
                    ke = ((e, t) => {
                        if (!Q(e) || O(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const r = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    i = (0, d.Z)(e);
                                n = r.filter((e) => !i.has(e.id_str));
                            } else n = r;
                        }
                        return i.createElement($, (0, r.Z)({}, e, { mediaDetails: n }));
                    })(e, ge),
                    ye = (() => {
                        if (n && n.displayType === w.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: r, text: o } = n;
                            return i.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === J.limited_actions, landingUrl: t, softInterventionDisplayType: r, text: o, tweetId: J.id_str });
                        }
                    })(),
                    Ee = s ? i.createElement(f.Z, s) : null,
                    Ie = (() => {
                        if (!ge || Te) return null;
                        if (
                            (() => {
                                if (be()) return !1;
                                const e = ge.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(ge, S, { isDynamicFollowCardPresentAndEnabled: O(e), isDynamicProductCardPresentAndEnabled: be(), withCardLinks: te, hasMedia: Q(e) }),
                            o = M.Z.isArticlePost(ge);
                        return n && !(o && "NoCard" === n?.unifiedCard?.card_fetch_state) ? i.createElement(u.Z, (0, r.Z)({}, n, { cardContext: { locationKey: t || N, tweetId: ge.id_str, tweetPermalink: ge.permalink, tweetUserId: ge.user.id_str, viewerUserId: C, withActionsDisabled: X, mediaVisibilityResults: ge.mediaVisibilityResults, grokShareAttachment: ge.grok_share_attachment, pollTranslations: Z, renderTranslationFeedback: j }, id: he, onCardLinkClick: k, preventVideoPlayback: A, promotedContent: S })) : null;
                    })(),
                    xe = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = ge;
                        return ((!!n?.possibly_sensitive && !!(ge.quoted_status && ge.quoted_status.entities && ge.quoted_status.entities.media && ge.quoted_status.entities.media.length > 0 && le) && !H) || (t && !m.default.isPollCard(ge.card?.name))) && e ? i.createElement(T.Z, { revealableTombstoneConfig: T.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = ve();
                            return e && H ? W({ children: e, config: H, id: we }) : e;
                        })() || Ie,
                    );
                if (!(ke || xe || ye || Te)) return null;
                return i.createElement(o.Z, { "aria-labelledby": `${we} ${he}`, id: a, ref: ue, style: [V.gap, G] }, ke || Ee || ye ? i.createElement(o.Z, { style: V.mediaPivotGap }, ke, Ee, ye) : null, Q(e) ? null : Te, xe);
            }
            const V = E.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function F({ children: e, config: t, id: n }) {
                const r = t.richRevealText?.text || t.revealText,
                    a = t.richText ? i.createElement(k.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return i.createElement(o.Z, { "aria-label": s().bb5c5864, id: n }, r ? i.createElement(x.Z, { label: a, revealLabel: r }, e) : i.createElement(I.Z, null, a));
            }
            function D(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = R, renderQuoteTweetTombstone: n = F, renderJetfuelFrame: r = () => null, singleImageMaxAspectRatio: i = U, singleImageMinAspectRatio: o = R, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: r, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: i, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function z(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function q(e) {
                const t = C.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function Q(e) {
                const t = D(e),
                    n = M.Z.getOriginalTweet(t.tweet);
                return M.Z.hasMedia(n, !t.withTweetMedia);
            }
            const W = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function O(e) {
                const t = D(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function $(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: r, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: w, onGrokClick: g, onMediaClick: f, onMediaTagsClick: C, onPlaybackStarted: v, preventVideoPlayback: b, promotedContent: T, renderPrerollActionMenu: k, showAltTranslation: E, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: x, withAltTextBadge: U, withCenterCrop: R, withHalvedMediaSize: H, withMediaTagsIcon: F, withRoundMediaCorners: O } = D(n),
                    [$, j] = B(),
                    Y = p.ZP.useProps(),
                    G = Y.withEdgeToEdgeContent(),
                    J = M.Z.getOriginalTweet(e.tweet),
                    X = W(J),
                    ee = !!z(J),
                    te =
                        (function (e, t, n) {
                            const r = D(t);
                            if (!Q(r)) return;
                            const i = e?.extended_entities?.media,
                                o = 1 === i?.length ? i[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                l = s / a;
                            return n ? (0, c.Z)(l, r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio) : s / a;
                        })(J, n, ee) ?? 1,
                    ne =
                        l &&
                        (function (e, t) {
                            const n = D(t);
                            if (!Q(n)) return !1;
                            const r = z(e);
                            if (!r || !r.original_info) return !1;
                            const { height: i, width: o } = r && r.original_info;
                            return (0, _.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: o, height: i }) < 1;
                        })(J, n) &&
                        $,
                    re = Y.compactMediaMaxHeight(),
                    ie = G ? L : re > 0 ? re : P,
                    oe = (function (e) {
                        const t = z(e);
                        if (t) return q(t);
                    })(J);
                if (A.B(J)) return i.createElement(S.Z, { tweet: J });
                if (J.card && m.default.isSpaceCard(J.card.name)) return i.createElement(o.Z, { style: V.gap }, i.createElement(y.Z, { audioSpaceId: J.card?.binding_values.id?.string_value, clipMetadata: J.card?.binding_values.clip_metadata?.string_value }));
                const ae = Y.isVerticalVideoNoBlackBars(),
                    se = l && re > 0 && (ee || X),
                    le = ie * (ee ? te : Math.max(1, te)),
                    de = ae && X && te < 1 ? te : void 0;
                return i.createElement(o.Z, { ref: j, style: [se && { maxWidth: le }, de ? V.squareRow : void 0] }, i.createElement(Z.Z, { authorId: J.user.id_str, authorScreenName: J.user.screen_name, cacheLocationKey: h || N, customHoverBackgroundColor: ne && G ? oe : void 0, displayMediaAttribution: !0, displayMediaMetadata: r, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: J.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [K({ withEdgeToEdgeContent: G, withHalvedMediaSize: H, backgroundColor: oe, withMaxHeight: ne })], mediaDetails: t, mediaMaxHeight: ne ? ie : void 0, mediaTagsLink: `${J.permalink}/media_tags`, mediaVisibilityResults: J.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: w, onClick: f, onClickMediaTags: C, onGrokClick: g, onPlaybackStarted: v, parentTweetId: e.tweet.id_str, preventPlayback: b, promotedContent: T, renderPrerollActionMenu: k, shouldShowAltLabelAlways: U, showAltTranslation: E, showBorder: !(ne && G), showRoundCorners: O, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: x, style: [ne && !G && V.explicitlySized, de ? { aspectRatio: te } : void 0], tweetCreatedAt: J.created_at, tweetId: J.id_str, tweetText: J.text, videoAspectRatio: de, withCenterCrop: R, withHalvedMediaSize: H, withMediaTagsIcon: F, withPostPlayback: !0 }));
            }
            function K(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: r, withHalvedMediaSize: i, withMaxHeight: o } = e;
                return [r && !n && !i && V.negativeMargin, o && r && [V.centerItems, { backgroundColor: t }]];
            }
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                i = n(325686),
                o = n(731708),
                a = n(235902),
                s = n(649846),
                l = n(529509),
                d = n(392237),
                c = n(823161),
                u = n(238406),
                m = n(366635),
                p = n(646797);
            const h = () => !1;
            class w extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: o } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && n) {
                                const { avatarUrls: e, count: t, names: a } = n;
                                return t ? r.createElement(i.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && r.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: o })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(i.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(i.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(i.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: o, userAvatarSize: s, userAvatarUri: l, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return r.createElement(i.Z, { style: g.row }, r.createElement(a.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(c.default, { link: n, onClick: t, promotedContent: o, screenName: d, size: s, uri: u ? l : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: o } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(i.Z, { style: g.marginTop8 }, this._renderUserName(), o && this._renderHighlightedUserLabel())) : r.createElement(i.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: i, onScreenNameClick: o, profileLink: a, promotedContent: s, userHighlightedLabel: l, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: g, followIndicator: f, fullName: C } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? n : void 0, isVerified: g ? i : void 0, link: a, name: C ? d : c, nameSize: "headline2", onLinkClick: o, promotedContent: s, screenName: c, translatorType: g ? u : void 0, verifiedType: g ? p : void 0, withFollowsYou: f && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(i.Z, { style: g.marginTop4 }, r.createElement(o.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: o, userWithheldDescription: a, userWithheldEntities: s } = this.props,
                        { description: l } = e;
                    return l && t && n && o ? r.createElement(i.Z, { style: [g.row, g.marginTop12] }, r.createElement(u.Z, { description: t, entities: n, userId: o, withheldDescription: a, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: o, userFollowersCount: a, userFriendsCount: s, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? r.createElement(i.Z, { style: [g.row, g.marginTop12] }, r.createElement(p.Z, { followersCount: a, friendsCount: s, onPress: n, screenName: l, subscriptionsCount: o, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var f = n(807896);
            var C = n(111677);
            const _ = n.n(C)().ef633578;
            class v extends r.PureComponent {
                render() {
                    return r.createElement(w, this.props);
                }
            }
            (v.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(w, (0, f.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (v.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const i = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(w, { errorMessage: _, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: i.protected, isUserStatsWithLink: i.isUserStatsWithLink, isUserVerified: i.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: i.profile_image_url_https, userDescription: i.description, userEntities: i.entities, userFollowersCount: i.followers_count, userFriendsCount: i.friends_count, userId: i.id_str, userName: n, userScreenName: n, userWithFollowsYou: i.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                i = n(111677),
                o = n.n(i),
                a = n(891198),
                s = n(98538);
            class l extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: i, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${i}/verified_followers`;
                    return r.createElement(s.Z.Group, { style: l }, r.createElement(s.Z, { count: t, link: u ? `/${i}/following` : void 0, onPress: n }, r.createElement(o().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(s.Z.Value, null, o().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), r.createElement(s.Z.Label, null, o().daf8a75f({ count: t })))), r.createElement(s.Z, { count: e, link: u ? h : void 0, onPress: n }, r.createElement(o().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(s.Z.Value, null, o().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), r.createElement(s.Z.Label, null, o().ad9b5988({ count: e })))), m && void 0 !== d && r.createElement(s.Z, { count: d, link: u ? `/${i}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(o().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(s.Z.Value, null, o().a9980948({ formattedCount: (0, a.wl)(d) })), r.createElement(s.Z.Label, null, o().ce44a35c({ count: d })))), p && c && r.createElement(s.Z, { count: c, link: u ? `/${i}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(o().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(s.Z.Value, null, o().id949f68({ formattedCount: (0, a.wl)(c) })), r.createElement(s.Z.Label, null, o().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        246492: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        926628: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        262009: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                i = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-bc6ccf4c.6c1da14a.js.map

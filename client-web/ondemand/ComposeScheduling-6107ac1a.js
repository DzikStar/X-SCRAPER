"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-6107ac1a"],
    {
        418462: (e, t, r) => {
            r.d(t, { a: () => R, q: () => P });
            var n = r(807896),
                i = (r(543673), r(240753), r(128399), r(202784)),
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
                A = r(5273),
                Z = r(528647),
                M = r(782261),
                S = r(782299);
            const P = Object.freeze({ ActionsBar: _.Z, ActionMenu: f.Z, CallToAction: a.ZP, EditCallout: v.Z, Education: T.Z, HighlightedUserLabel: d.Z, Media: y.Z, Place: o.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: k.Z, ReplyContext: E.ZP, RichContent: x.Z, SocialContext: w.Z, Text: I.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: A.Z, UserFollowIndicator: S.Z, UserName: Z.Z, ArticleCard: b.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function U(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(c.zt, t.current, e);
                }, []);
            }
            function R({ renderActionsBar: e = V, renderActionMenu: t = B, renderArticleCard: r = N, renderCallToAction: n = H, renderEditCallout: o = D, renderEducation: a = F, renderHighlightedUserLabel: d = W, renderPlace: c = q, renderPromotedUserProfileCard: u = Q, renderPromotedDetails: p = $, renderPromotionStatusBadge: w = O, renderReplyContext: g = z, renderRichContent: f = K, renderMedia: _ = Y, renderSocialContext: b = j, renderStats: v = G, renderText: T = X, renderTimestamp: y = J, renderTombstone: k = ee, renderUserAvatar: E = te, renderUserFollowIndicator: x = re, renderUserName: I = ne, promotedContent: A, quotedTweetTombstoneInfo: Z, socialContext: S, staticLinkConfig: P = L, tweet: R, ...ie }) {
                const oe = M.Z.getOriginalTweet(R),
                    [ae, se] = (0, C.L)(oe),
                    le = l.ZP.useProps(),
                    de = le.c9sHashtagsEnabled(),
                    ce = le.renderArticleCardInTweet(),
                    ue = "true" === A?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(A?.adMetadataContainer?.dynamicCardContent?.card_type),
                    me = {
                        renderArticleCard: (e) => (M.Z.isArticlePost(oe) && oe.article && ce ? r({ articleEntity: oe.article, hasSensitiveContent: oe.possibly_sensitive, mediaVisibilityResults: oe.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: oe.bookmark_count, enableKeyboardShortcuts: !1, isLiked: oe.favorited, isRetweeted: oe.retweeted, likeCount: oe.favorite_count, id: ae.actionsBar, replyCount: oe.reply_count, retweetCount: (oe.quote_count ?? 0) + (oe.retweet_count ?? 0), tweetLink: oe.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => n({ ...e }),
                        renderEditCallout: (e) => (oe.isEdited ? o({ editType: oe.isStaleEdit ? "stale" : "latest", id: ae.editCallout, ...e }) : null),
                        renderEducation: (e) => a({ conversationControlLabelNativeID: ae.conversationControlLabel, exclusivityInfoLabelNativeID: ae.exclusivityInfoLabel, trustedFriendsLabelNativeID: ae.trustedFriendsLabel, tweet: R, ...e }),
                        renderHighlightedUserLabel: (e) => (oe.user.highlightedLabel ? d({ label: oe.user.highlightedLabel, id: ae.userLabel, ...e }) : null),
                        renderMedia: (e) => (M.Z.hasMedia(oe) ? _({ authorId: oe.user.id_str, authorScreenName: oe.user.screen_name, forwardPivotInfo: R.softIntervention, hasSensitiveMedia: oe.possibly_sensitive, mediaTagsLink: `${oe.permalink}/media_tags`, mediaDetails: oe.extended_entities?.media, id: ae.media, promotedContent: A, tweetCreatedAt: oe.created_at, tweetId: oe.id_str, tweetText: oe.text, mediaVisibilityResults: oe.mediaVisibilityResults, ...e }) : null),
                        renderPlace: (e) => (oe.place ? c({ children: oe.place.full_name, link: `/places/${oe.place.id}`, ...e }) : null),
                        renderPromotedUserProfileCard: (e) => ("true" === A?.experiment_values?.pac_in_timeline ? u({ isUserProtected: oe.user.protected, isUserVerified: oe.user.verified, promotedContent: A, userDescription: oe.user.description, userId: oe.user.id_str, userName: oe.user.name, userScreenName: oe.user.screen_name, ...e }) : null),
                        renderPromotedDetails: (e) => (A && m.Z.isPromoted(A) ? p({ contentAuthorId: oe.user.id_str, screenName: oe.user.screen_name, id: ae.promotedLabel, promotedContent: A, ...e }) : null),
                        renderPromotionStatusBadge: (e) => w({ id: ae.promotionStatusLabel }),
                        renderReplyContext: (e) => (oe.in_reply_to_status_id_str ? g({ displayTextRange: oe.display_text_range, inReplyToName: oe.in_reply_to_name, inReplyToScreenName: oe.in_reply_to_screen_name, inReplyToStatusIdStr: oe.in_reply_to_status_id_str, inReplyToUserIdStr: oe.in_reply_to_user_id_str, id: ae.replyContext, tweetPermalink: oe.permalink, unmentionedUserIds: oe.unmentioned_user_ids, userMentionsEntities: oe.entities?.user_mentions, ...e }) : null),
                        renderRichContent: (e) => f({ forwardPivotInfo: R.softIntervention, id: ae.richContent, quotedTweetTombstoneInfo: Z, tweet: R, withAltTextBadge: !0, withCardLinks: !1, withCondensedQuoteTweet: !0, withMediaTagsIcon: !1, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: !0, withQuoteTweetMedia: !0, ...e }),
                        renderSocialContext: (e) => (S ? b({ contextType: S?.contextType, link: S.link, id: ae.socialContext, retweetData: { isSelfRetweet: S.isSelfRetweet, name: S.name, screenName: S.screenName }, text: S.text, ...e }) : null),
                        renderStats: () => v(),
                        renderText: (e) => {
                            const t = oe?.community_id_str,
                                r = t && de ? (e, r) => new URL(`/i/communities/${t}/hashtag/${r}`, e) : void 0,
                                n = s.default.isCardDisabled(oe.card?.name),
                                i = !oe.card || R.is_quote_status || n || ue ? void 0 : oe.card.url;
                            return T({ transformHashtagLink: r, article: ce ? oe.article : void 0, displayTextRange: oe.display_text_range, entities: oe.entities, excludeCardUrl: i, lang: oe.lang, linkify: !0, id: ae.text, quotedTweetId: oe.quoted_status?.id_str, quotedTweetPermalink: oe.quoted_status_permalink, text: oe.text, unmentionedUserIds: oe.unmentioned_user_ids, ...e });
                        },
                        renderTimestamp: (e) => y({ id: ae.timestamp, link: { pathname: oe.permalink, state: { contextTweetId: oe.id_str, promotedContent: A } }, timestamp: oe.created_at, ...e }),
                        renderTombstone: (e) => {
                            const t = oe.tombstoneInfo || R.tombstoneInfo;
                            return t?.richText ? k({ children: i.createElement(h.Z, { dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, text: t.richText.text }), id: ae.tombstone, ...e }) : null;
                        },
                        renderUserAvatar: (e) => E({ id: ae.avatar, promotedContent: A, screenName: oe.user.screen_name, uri: oe.user.profile_image_url_https, withLink: !0, ...e }),
                        renderUserFollowIndicator: (e) => null,
                        renderUserName: (e) => I({ userData: { isProtected: oe.user.protected, isBlueVerified: oe.user.is_blue_verified, isVerified: oe.user.verified, name: oe.user.name, screenName: oe.user.screen_name, userId: oe.user.id_str, verifiedType: oe.user.verified_type, isSubscriber: oe.has_super_follower, affiliateBadgeInfo: oe.user.highlightedLabel, communityModeratorStatus: oe.author_community_relationship?.role }, id: ae.username, promotedContent: A, ...e }),
                    };
                return { LinkConfigProvider: U(P), a11yIds: ae, a11yIdList: se, props: { ...me, tweet: R, promotedContent: A, socialContext: S, quotedTweetTombstoneInfo: Z, ...ie } };
            }
            const N = (e) => i.createElement(P.ArticleCard, e),
                B = (e) => i.createElement(P.ActionMenu, e),
                V = (e) => i.createElement(P.ActionsBar, (0, n.Z)({}, e, { isDisabled: !0 })),
                H = (e) => null,
                F = (e) => i.createElement(P.Education, e),
                D = (e) => i.createElement(P.EditCallout, e),
                W = (e) => i.createElement(P.HighlightedUserLabel, e),
                q = (e) => i.createElement(P.Place, e),
                $ = (e) => i.createElement(P.PromotedDetails, e),
                Q = (e) => null,
                O = (e) => null,
                z = (e) => i.createElement(P.ReplyContext, e),
                K = (e) => i.createElement(P.RichContent, e),
                Y = (e) => i.createElement(P.Media, e),
                j = (e) => i.createElement(P.SocialContext, e),
                G = () => null,
                J = (e) => i.createElement(P.Timestamp, e),
                X = (e) => i.createElement(P.Text, e),
                ee = (e) => i.createElement(P.Tombstone, e),
                te = (e) => i.createElement(P.UserAvatar, e),
                re = (e) => i.createElement(P.UserFollowIndicator, e),
                ne = (e) => i.createElement(P.UserName, e);
        },
        449945: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                i = r(674132),
                o = r.n(i),
                a = r(54989);
            const s = o().b05a39b2;
            const l = (e) => n.createElement(a.Z, e),
                d = n.forwardRef(({ children: e, label: t, lang: r, onReveal: i, render: o = l, revealLabel: a = s }, d) => {
                    const [c, u] = (function () {
                        const [e, t] = n.useReducer(() => !0, !1);
                        return [e, t];
                    })();
                    function m(e) {
                        u(), i?.(e);
                    }
                    return n.useImperativeHandle(d, () => ({ reveal: () => m("synthetic") })), c ? e : o({ actionText: a, children: t, lang: r, onActionClick: () => m("organic") });
                });
            d.displayName = "TweetInterstitial";
            const c = d;
        },
        196160: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                i = r(202784),
                o = r(439592),
                a = r(254950),
                s = r(110377),
                l = r(906396);
            const d = ({ cacheLocationKey: e, containerAspectRatio: t, images: r, isCondensed: d, mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, singleImageMaxAspectRatio: h, singleImageMinAspectRatio: w, testID: g, withCenterCrop: C = !1, withLink: f = !0 }) => {
                    const { getLayoutCacheForIndex: _ } = (0, l.X)({ locationKey: e, itemCount: r.length }),
                        b = i.useMemo(() => (r.length > 1 ? o.Z.COVER : o.Z.withinRange(w, h)), [r.length, h, w]),
                        v = i.useMemo(() => r.map((e) => ({ type: "photo", ...e })), [r]),
                        T = i.useCallback(
                            ({ index: e }) => {
                                const t = { mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, testID: g, withCenterCrop: C, withLink: f },
                                    r = v[e],
                                    o = _(e) ?? void 0;
                                return i.createElement(s.j, (0, n.Z)({}, t, { aspectMode: b, image: r, layoutCache: o }));
                            },
                            [v, c, u, m, p, g, C, f, _, b],
                        );
                    return i.createElement(a.ZP, { containerAspectRatio: t, groupSize: r.length, isCondensed: d, renderItemAtIndex: T });
                },
                c = i.memo(d);
        },
        189655: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                i = r(325686),
                o = r(952428),
                a = r(392237),
                s = r(266704);
            const l = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: h, userId: w, userName: g, userScreenName: C }) {
                    return n.createElement(i.Z, { style: p }, n.createElement(o.Z, { link: d, onClick: c, style: l.root }, n.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: w, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, r) => {
            r.d(t, { Y: () => K, Z: () => V });
            var n = r(807896),
                i = r(202784),
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
                A = r(103737),
                Z = r(782261),
                M = r(586035),
                S = r(454363);
            const P = 510,
                L = 596,
                U = 10,
                R = 16 / 9,
                N = "timeline",
                B = () => {
                    const e = i.useRef(null),
                        [t, r] = i.useState(506);
                    i.useLayoutEffect(() => {
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
                const { cardCacheLocationKey: t, forwardPivotInfo: r, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: f, onCardLinkClick: y, onQuoteTweetClick: k, onQuoteTweetMediaClick: E, onQuotedTweetAvatarClick: x, onQuotedTweetScreenNameClick: I, preventVideoPlayback: A, promotedContent: M, quoteTweetSingleImageMinAspectRatio: S, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: R, renderJetfuelFrame: V, renderQuoteTweetTombstone: F, singleImageMaxAspectRatio: Q, style: O, tweet: j, withActionsDisabled: G, withAltTextBadge: J, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: re, withQuoteTweetBirdwatchPivot: ne, withQuoteTweetHeaderLinks: ie, withQuoteTweetLink: oe, withQuoteTweetMedia: ae, withUserHoverCard: se } = D(e),
                    [le, de] = B(),
                    ce = p.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, b.b)(),
                    pe = (0, b.b)(),
                    he = Z.Z.getOriginalTweet(j),
                    we = ce.compactMediaMaxHeight(),
                    ge = () => W(he.quoted_status),
                    Ce = () => {
                        const e = ge();
                        if (!e || !e.original_info) return;
                        const { height: t, width: r } = e && e.original_info;
                        return (0, _.q)(S, Q, { width: r, height: t });
                    },
                    fe = () => {
                        const t = Z.Z.getOriginalTweet(j),
                            r = $(e),
                            n =
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
                        return t && t.is_quote_status ? i.createElement(v.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: pe, isCondensed: te, loggedInUserId: f, mediaContentStyles: !te && Y({ withEdgeToEdgeContent: ue, withHalvedMediaSize: re, backgroundColor: o, withMaxHeight: n, isInQuoteTweet: !0 }), mediaMaxHeight: n ? (ue ? L : we > 0 ? we : P) : void 0, nudges: c, onAvatarClick: x, onMediaClick: E, onPress: k, onScreenNameClick: I, preventVideoPlayback: A, promotedContent: M, shouldRenderIfBlocked: !!R, shouldShowAltLabelAlways: J, singleImageMaxAspectRatio: Q, singleImageMinAspectRatio: S, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: G, withBirdwatchPivot: ne, withCenterCrop: ee, withHeaderLinks: ie, withLink: oe, withMediaAsTextLinks: !ae, withUserHoverCard: se }) : null;
                    },
                    _e = () => !!M?.adMetadataContainer?.unifiedCardOverride,
                    be = V(),
                    ve = ((e, t) => {
                        if (!$(e) || z(e)) return null;
                        let r;
                        if (t.extended_entities?.media) {
                            const n = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    i = (0, d.Z)(e);
                                r = n.filter((e) => !i.has(e.id_str));
                            } else r = n;
                        }
                        return i.createElement(K, (0, n.Z)({}, e, { mediaDetails: r }));
                    })(e, he),
                    Te = (() => {
                        if (r && r.displayType === w.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: n, text: o } = r;
                            return i.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === j.limited_actions, landingUrl: t, softInterventionDisplayType: n, text: o, tweetId: j.id_str });
                        }
                    })(),
                    ye = s ? i.createElement(C.Z, s) : null,
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
                        const r = m.default.getLegacyOrUnifiedCard(he, M, { isDynamicFollowCardPresentAndEnabled: z(e), isDynamicProductCardPresentAndEnabled: _e(), withCardLinks: X, hasMedia: $(e) }),
                            o = Z.Z.isArticlePost(he);
                        return r && !(o && "NoCard" === r?.unifiedCard?.card_fetch_state) ? i.createElement(u.Z, (0, n.Z)({}, r, { cardContext: { locationKey: t || N, tweetId: he.id_str, tweetPermalink: he.permalink, tweetUserId: he.user.id_str, viewerUserId: f, withActionsDisabled: G, mediaVisibilityResults: he.mediaVisibilityResults, grokShareAttachment: he.grok_share_attachment }, id: me, onCardLinkClick: y, preventVideoPlayback: A, promotedContent: M })) : null;
                    })(),
                    Ee = ((e) => {
                        const { possibly_sensitive: t, quoted_status: r } = he;
                        return ((!!r?.possibly_sensitive && !!(he.quoted_status && he.quoted_status.entities && he.quoted_status.entities.media && he.quoted_status.entities.media.length > 0 && ae) && !R) || (t && !m.default.isPollCard(he.card?.name))) && e ? i.createElement(T.Z, { revealableTombstoneConfig: T.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = fe();
                            return e && R ? F({ children: e, config: R, id: pe }) : e;
                        })() || ke,
                    );
                if (!(ve || Ee || Te || be)) return null;
                return i.createElement(o.Z, { "aria-labelledby": `${pe} ${me}`, id: a, ref: de, style: [H.gap, O] }, ve || ye || Te ? i.createElement(o.Z, { style: H.mediaPivotGap }, ve, ye, Te) : null, $(e) ? null : be, Ee);
            }
            const H = E.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function F({ children: e, config: t, id: r }) {
                const n = t.richRevealText?.text || t.revealText,
                    a = t.richText ? i.createElement(y.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return i.createElement(o.Z, { "aria-label": s().bb5c5864, id: r }, n ? i.createElement(I.Z, { label: a, revealLabel: n }, e) : i.createElement(x.Z, null, a));
            }
            function D(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = R, renderQuoteTweetTombstone: r = F, renderJetfuelFrame: n = () => null, singleImageMaxAspectRatio: i = U, singleImageMinAspectRatio: o = R, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: n, renderQuoteTweetTombstone: r, singleImageMaxAspectRatio: i, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
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
                    r = Z.Z.getOriginalTweet(t.tweet);
                return Z.Z.hasMedia(r, !t.withTweetMedia);
            }
            const Q = (e) => {
                    const t = e?.extended_entities?.media;
                    return 1 === t?.length && "video" === t[0].type;
                },
                O = (e, t, r) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, r && H.edgeToEdgeSingleVideoWithMaxHeight];
            function z(e) {
                const t = D(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...r } = e,
                    { displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: w, onGrokClick: g, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: b, preventVideoPlayback: v, promotedContent: T, renderPrerollActionMenu: y, showAltTranslation: E, singleImageMaxAspectRatio: x, singleImageMinAspectRatio: I, withAltTextBadge: U, withCenterCrop: R, withHalvedMediaSize: V, withMediaTagsIcon: F, withRoundMediaCorners: z } = D(r),
                    [K, j] = B(),
                    G = p.ZP.useProps(),
                    J = G.withEdgeToEdgeContent(),
                    X = Z.Z.getOriginalTweet(e.tweet),
                    ee = G.isVerticalVideoNoBlackBars(),
                    te = Q(X),
                    re = !!W(X),
                    ne =
                        (function (e, t, r) {
                            const n = D(t);
                            if (!$(n)) return;
                            const i = e?.extended_entities?.media,
                                o = 1 === i?.length ? i[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                l = s / a;
                            return r ? (0, c.Z)(l, n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio) : s / a;
                        })(X, e, re) ?? 1,
                    ie = ee
                        ? l && ne < 1 && (te || K)
                        : l &&
                          (function (e, t) {
                              const r = D(t);
                              if (!$(r)) return !1;
                              const n = W(e);
                              if (!n || !n.original_info) return !1;
                              const { height: i, width: o } = n && n.original_info;
                              return (0, _.q)(r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio, { width: o, height: i }) < 1;
                          })(X, e) &&
                          K,
                    oe = G.compactMediaMaxHeight(),
                    ae = J ? L : oe > 0 ? oe : P,
                    se = (function (e) {
                        const t = W(e);
                        if (t) return q(t);
                    })(X);
                if (M.B(X)) return i.createElement(S.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return i.createElement(o.Z, { style: H.gap }, i.createElement(k.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const le = l && oe > 0 && (re || te),
                    de = ae * (re || ee ? ne : Math.max(1, ne));
                return i.createElement(o.Z, { ref: j, style: le && { maxWidth: de } }, i.createElement(A.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: h || N, customHoverBackgroundColor: ie && J ? se : void 0, displayMediaAttribution: !0, displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [Y({ withEdgeToEdgeContent: J, withHalvedMediaSize: V, backgroundColor: se, withMaxHeight: ie }), ee && ie && te && O(ne, ae, J)], mediaDetails: t, mediaMaxHeight: ie ? ae : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: w, onClick: C, onClickMediaTags: f, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: v, promotedContent: T, renderPrerollActionMenu: y, shouldShowAltLabelAlways: U, showAltTranslation: E, showBorder: !(ie && J), showRoundCorners: z, singleImageMaxAspectRatio: x, singleImageMinAspectRatio: I, style: ie && !J && (!ee || !te) && H.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: R, withHalvedMediaSize: V, withMediaTagsIcon: F, withPostPlayback: !0 }));
            }
            function Y(e) {
                const { backgroundColor: t, isInQuoteTweet: r = !1, withEdgeToEdgeContent: n, withHalvedMediaSize: i, withMaxHeight: o } = e;
                return [n && !r && !i && H.negativeMargin, o && n && [H.centerItems, { backgroundColor: t }]];
            }
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                i = r(325686),
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
            class w extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: o } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && r) {
                                const { avatarUrls: e, count: t, names: a } = r;
                                return t ? n.createElement(i.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && n.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: o })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(i.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(i.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(i.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, promotedContent: r, userAvatarSize: o, userAvatarUri: s, userScreenName: l } = this.props,
                        { avatar: d } = e;
                    return n.createElement(i.Z, { style: g.row }, n.createElement(a.ZP.Provider, { value: { userAvatarLabel: h } }, n.createElement(c.default, { onClick: t, promotedContent: r, screenName: l, size: o, uri: d ? s : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: o } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(i.Z, { style: g.marginTop8 }, this._renderUserName(), o && this._renderHighlightedUserLabel())) : n.createElement(i.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: i, onScreenNameClick: o, promotedContent: a, userHighlightedLabel: s, userName: l, userScreenName: d, userTranslatorType: c, userVerifiedType: u, userWithFollowsYou: p, withNameWrap: h } = this.props,
                        { badges: w, followIndicator: g, fullName: C } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: w ? t : void 0, isProtected: w ? r : void 0, isVerified: w ? i : void 0, name: C ? l : d, nameSize: "headline2", onLinkClick: o, promotedContent: a, screenName: d, translatorType: w ? c : void 0, verifiedType: w ? u : void 0, withFollowsYou: g && p, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(i.Z, { style: g.marginTop4 }, n.createElement(o.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: o, userWithheldDescription: a, userWithheldEntities: s } = this.props,
                        { description: l } = e;
                    return l && t && r && o ? n.createElement(i.Z, { style: [g.row, g.marginTop12] }, n.createElement(u.Z, { description: t, entities: r, userId: o, withheldDescription: a, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: o, userFollowersCount: a, userFriendsCount: s, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? n.createElement(i.Z, { style: [g.row, g.marginTop12] }, n.createElement(p.Z, { followersCount: a, friendsCount: s, onPress: r, screenName: l, subscriptionsCount: o, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            w.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var C = r(807896);
            var f = r(674132);
            const _ = r.n(f)().ef633578;
            class b extends n.PureComponent {
                render() {
                    return n.createElement(w, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(w, (0, C.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const i = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(w, { errorMessage: _, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: i.protected, isUserStatsWithLink: i.isUserStatsWithLink, isUserVerified: i.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: i.profile_image_url_https, userDescription: i.description, userEntities: i.entities, userFollowersCount: i.followers_count, userFriendsCount: i.friends_count, userId: i.id_str, userName: r, userScreenName: r, userWithFollowsYou: i.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                i = r(674132),
                o = r.n(i),
                a = r(891198),
                s = r(98538);
            class l extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: i, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${i}/verified_followers`;
                    return n.createElement(s.Z.Group, { style: l }, n.createElement(s.Z, { count: t, link: u ? `/${i}/following` : void 0, onPress: r }, n.createElement(o().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(s.Z.Value, null, o().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), n.createElement(s.Z.Label, null, o().daf8a75f({ count: t })))), n.createElement(s.Z, { count: e, link: u ? h : void 0, onPress: r }, n.createElement(o().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(s.Z.Value, null, o().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), n.createElement(s.Z.Label, null, o().ad9b5988({ count: e })))), m && void 0 !== d && n.createElement(s.Z, { count: d, link: u ? `/${i}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(o().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(s.Z.Value, null, o().a9980948({ formattedCount: (0, a.wl)(d) })), n.createElement(s.Z.Label, null, o().ce44a35c({ count: d })))), p && c && n.createElement(s.Z, { count: c, link: u ? `/${i}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(o().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(s.Z.Value, null, o().id949f68({ formattedCount: (0, a.wl)(c) })), n.createElement(s.Z.Label, null, o().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        730895: (e, t, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        900664: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const i = {
                cancel() {
                    n(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), n(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-6107ac1a.7358ab4a.js.map

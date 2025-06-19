"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-6107ac1a", "icons/IconChevronDown-js"],
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
                f = r(366985),
                C = r(982266),
                _ = r(990804),
                b = r(530338),
                v = r(16037),
                T = r(737082),
                k = r(103737),
                y = r(189655),
                E = r(650028),
                I = r(774526),
                x = r(451051),
                Z = r(5273),
                M = r(528647),
                A = r(782261),
                S = r(782299);
            const P = Object.freeze({ ActionsBar: _.Z, ActionMenu: C.Z, CallToAction: a.ZP, EditCallout: v.Z, Education: T.Z, HighlightedUserLabel: d.Z, Media: k.Z, Place: o.ZP, PromotedDetails: u.Z, PromotedUserProfileCard: y.Z, ReplyContext: E.ZP, RichContent: I.Z, SocialContext: w.Z, Text: x.Z, Tombstone: g.Z, Timestamp: p.Z, UserAvatar: Z.Z, UserFollowIndicator: S.Z, UserName: M.Z, ArticleCard: b.Z }),
                L = { linkProcessor: (e) => ({ ...e, pathname: new URL(e.pathname, "https://twitter.com").toString() }) };
            function U(e) {
                const t = i.useRef(e);
                return i.useCallback(function ({ children: e }) {
                    return null === t.current ? e : i.createElement(c.zt, t.current, e);
                }, []);
            }
            function R({ renderActionsBar: e = H, renderActionMenu: t = B, renderArticleCard: r = N, renderCallToAction: n = V, renderEditCallout: o = D, renderEducation: a = F, renderHighlightedUserLabel: d = q, renderPlace: c = W, renderPromotedUserProfileCard: u = $, renderPromotedDetails: p = Q, renderPromotionStatusBadge: w = z, renderReplyContext: g = O, renderRichContent: C = K, renderMedia: _ = G, renderTweetHeader: b = j, renderStats: v = Y, renderText: T = X, renderTimestamp: k = J, renderTombstone: y = ee, renderUserAvatar: E = te, renderUserFollowIndicator: I = re, renderUserName: x = ne, promotedContent: Z, quotedTweetTombstoneInfo: M, socialContext: S, tweetContext: P, staticLinkConfig: R = L, tweet: ie, ...oe }) {
                const ae = A.Z.getOriginalTweet(ie),
                    [se, le] = (0, f.L)(ae),
                    de = l.ZP.useProps(),
                    ce = de.c9sHashtagsEnabled(),
                    ue = de.renderArticleCardInTweet(),
                    me = "true" === Z?.experiment_values?.pac_in_timeline && s.default.isFollowerCard(Z?.adMetadataContainer?.dynamicCardContent?.card_type),
                    pe = {
                        renderArticleCard: (e) => (A.Z.isArticlePost(ae) && ae.article && ue ? r({ articleEntity: ae.article, hasSensitiveContent: ae.possibly_sensitive, mediaVisibilityResults: ae.mediaVisibilityResults }) : null),
                        renderActionsBar: (t) => e({ bookmarkCount: ae.bookmark_count, enableKeyboardShortcuts: !1, isLiked: ae.favorited, isRetweeted: ae.retweeted, likeCount: ae.favorite_count, id: se.actionsBar, replyCount: ae.reply_count, retweetCount: (ae.quote_count ?? 0) + (ae.retweet_count ?? 0), tweetLink: ae.permalink, withAnalytics: !1, withCount: !0, ...t }),
                        renderActionMenu: (e) => t({ items: [], ...e }),
                        renderCallToAction: (e) => n({ ...e }),
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
                        renderTweetHeader: (e) => (S ? b({ contextType: S.contextType, link: S.link, id: se.socialContext, retweetData: { isSelfRetweet: S.isSelfRetweet, name: S.name, screenName: S.screenName }, text: S.text, ...e }) : b()),
                        renderStats: () => v(),
                        renderText: (e) => {
                            const t = ae?.community_id_str,
                                r = t && ce ? (e, r) => new URL(`/i/communities/${t}/hashtag/${r}`, e) : void 0,
                                n = s.default.isCardDisabled(ae.card?.name),
                                i = !ae.card || ie.is_quote_status || n || me ? void 0 : ae.card.url;
                            return T({ transformHashtagLink: r, article: ue ? ae.article : void 0, displayTextRange: ae.display_text_range, entities: ae.entities, excludeCardUrl: i, lang: ae.lang, linkify: !0, id: se.text, quotedTweetId: ae.quoted_status?.id_str, quotedTweetPermalink: ae.quoted_status_permalink, text: ae.text, unmentionedUserIds: ae.unmentioned_user_ids, ...e });
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
                H = (e) => i.createElement(P.ActionsBar, (0, n.Z)({}, e, { isDisabled: !0 })),
                V = (e) => null,
                F = (e) => i.createElement(P.Education, e),
                D = (e) => i.createElement(P.EditCallout, e),
                q = (e) => i.createElement(P.HighlightedUserLabel, e),
                W = (e) => i.createElement(P.Place, e),
                Q = (e) => i.createElement(P.PromotedDetails, e),
                $ = (e) => null,
                z = (e) => null,
                O = (e) => i.createElement(P.ReplyContext, e),
                K = (e) => i.createElement(P.RichContent, e),
                G = (e) => i.createElement(P.Media, e),
                j = (e) => (e ? i.createElement(P.SocialContext, e) : null),
                Y = () => null,
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
                i = r(111677),
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
            const d = ({ cacheLocationKey: e, containerAspectRatio: t, images: r, isCondensed: d, mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, singleImageMaxAspectRatio: h, singleImageMinAspectRatio: w, testID: g, withCenterCrop: f = !1, withLink: C = !0 }) => {
                    const { getLayoutCacheForIndex: _ } = (0, l.X)({ locationKey: e, itemCount: r.length }),
                        b = i.useMemo(() => (r.length > 1 ? o.Z.COVER : o.Z.withinRange(w, h)), [r.length, h, w]),
                        v = i.useMemo(() => r.map((e) => ({ type: "photo", ...e })), [r]),
                        T = i.useCallback(
                            ({ index: e }) => {
                                const t = { mediaMaxHeight: c, onClick: u, onVariantSelection: m, previewMode: p, testID: g, withCenterCrop: f, withLink: C },
                                    r = v[e],
                                    o = _(e) ?? void 0;
                                return i.createElement(s.j, (0, n.Z)({}, t, { aspectMode: b, image: r, layoutCache: o }));
                            },
                            [v, c, u, m, p, g, f, C, _, b],
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
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: h, userId: w, userName: g, userScreenName: f }) {
                    return n.createElement(i.Z, { style: p }, n.createElement(o.Z, { link: d, onClick: c, style: l.root }, n.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: h, userId: w, userName: g, userScreenName: f })));
                };
        },
        774526: (e, t, r) => {
            r.d(t, { Y: () => O, Z: () => H });
            var n = r(807896),
                i = r(202784),
                o = r(325686),
                a = r(111677),
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
                f = r(834324),
                C = r(309854),
                _ = r(782578),
                b = r(352924),
                v = r(521288),
                T = r(912838),
                k = r(308158),
                y = r(287826),
                E = r(392237),
                I = r(54989),
                x = r(449945),
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
            function H(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: r, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: C, onCardLinkClick: k, onQuoteTweetClick: y, onQuoteTweetMediaClick: E, onQuotedTweetAvatarClick: I, onQuotedTweetScreenNameClick: x, pollTranslations: Z, preventVideoPlayback: A, promotedContent: S, quoteTweetSingleImageMinAspectRatio: U, quoteTweetSocialContextProps: R, quotedTweetTombstoneInfo: H, renderGrokTranslationHeaderForQuote: F, renderJetfuelFrame: $, renderQuoteTweetTombstone: G, renderTranslationFeedback: j, singleImageMaxAspectRatio: Y, style: J, tweet: X, withActionsDisabled: ee, withAltTextBadge: te, withCardLinks: re, withCenterCrop: ne, withCondensedQuoteTweet: ie, withHalvedMediaSize: oe, withQuoteTweetBirdwatchPivot: ae, withQuoteTweetHeaderLinks: se, withQuoteTweetLink: le, withQuoteTweetMedia: de, withUserHoverCard: ce } = D(e),
                    [ue, me] = B(),
                    pe = p.ZP.useProps(),
                    he = pe.withEdgeToEdgeContent(),
                    we = (0, b.b)(),
                    ge = (0, b.b)(),
                    fe = M.Z.getOriginalTweet(X),
                    Ce = pe.compactMediaMaxHeight(),
                    _e = () => q(fe.quoted_status),
                    be = () => {
                        const e = _e();
                        if (!e || !e.original_info) return;
                        const { height: t, width: r } = e && e.original_info;
                        return (0, _.q)(U, Y, { width: r, height: t });
                    },
                    ve = () => {
                        const t = M.Z.getOriginalTweet(X),
                            r = Q(e),
                            n =
                                g &&
                                !r &&
                                (() => {
                                    const e = be();
                                    return !!e && e < 1;
                                })() &&
                                ue,
                            o = (() => {
                                const e = _e();
                                if (e) return W(e);
                            })();
                        return t && t.is_quote_status ? i.createElement(v.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: ge, isCondensed: ie, loggedInUserId: C, mediaContentStyles: !ie && K({ withEdgeToEdgeContent: he, withHalvedMediaSize: oe, backgroundColor: o, withMaxHeight: n, isInQuoteTweet: !0 }), mediaMaxHeight: n ? (he ? L : Ce > 0 ? Ce : P) : void 0, nudges: c, onAvatarClick: I, onMediaClick: E, onPress: y, onScreenNameClick: x, preventVideoPlayback: A, promotedContent: S, renderGrokTranslationHeader: F, shouldRenderIfBlocked: !!H, shouldShowAltLabelAlways: te, singleImageMaxAspectRatio: Y, singleImageMinAspectRatio: U, socialContextProps: R, tweet: t.quoted_status, withActionsDisabled: ee, withBirdwatchPivot: ae, withCenterCrop: ne, withHeaderLinks: se, withLink: le, withMediaAsTextLinks: !de, withUserHoverCard: ce }) : null;
                    },
                    Te = () => !!S?.adMetadataContainer?.unifiedCardOverride,
                    ke = $(),
                    ye = ((e, t) => {
                        if (!Q(e) || z(e)) return null;
                        let r;
                        if (t.extended_entities?.media) {
                            const n = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    i = (0, d.Z)(e);
                                r = n.filter((e) => !i.has(e.id_str));
                            } else r = n;
                        }
                        return i.createElement(O, (0, n.Z)({}, e, { mediaDetails: r }));
                    })(e, fe),
                    Ee = (() => {
                        if (r && r.displayType === w.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: n, text: o } = r;
                            return i.createElement(h.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === X.limited_actions, landingUrl: t, softInterventionDisplayType: n, text: o, tweetId: X.id_str });
                        }
                    })(),
                    Ie = s ? i.createElement(f.Z, s) : null,
                    xe = (() => {
                        if (!fe || ke) return null;
                        if (
                            (() => {
                                if (Te()) return !1;
                                const e = fe.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const r = m.default.getLegacyOrUnifiedCard(fe, S, { isDynamicFollowCardPresentAndEnabled: z(e), isDynamicProductCardPresentAndEnabled: Te(), withCardLinks: re, hasMedia: Q(e) }),
                            o = M.Z.isArticlePost(fe);
                        return r && !(o && "NoCard" === r?.unifiedCard?.card_fetch_state) ? i.createElement(u.Z, (0, n.Z)({}, r, { cardContext: { locationKey: t || N, tweetId: fe.id_str, tweetPermalink: fe.permalink, tweetUserId: fe.user.id_str, viewerUserId: C, withActionsDisabled: ee, mediaVisibilityResults: fe.mediaVisibilityResults, grokShareAttachment: fe.grok_share_attachment, pollTranslations: Z, renderTranslationFeedback: j }, id: we, onCardLinkClick: k, preventVideoPlayback: A, promotedContent: S })) : null;
                    })(),
                    Ze = ((e) => {
                        const { possibly_sensitive: t, quoted_status: r } = fe;
                        return ((!!r?.possibly_sensitive && !!(fe.quoted_status && fe.quoted_status.entities && fe.quoted_status.entities.media && fe.quoted_status.entities.media.length > 0 && de) && !H) || (t && !m.default.isPollCard(fe.card?.name))) && e ? i.createElement(T.Z, { revealableTombstoneConfig: T.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = ve();
                            return e && H ? G({ children: e, config: H, id: ge }) : e;
                        })() || xe,
                    );
                if (!(ye || Ze || Ee || ke)) return null;
                return i.createElement(o.Z, { "aria-labelledby": `${ge} ${we}`, id: a, ref: me, style: [V.gap, J] }, ye || Ie || Ee ? i.createElement(o.Z, { style: V.mediaPivotGap }, ye, Ie, Ee) : null, Q(e) ? null : ke, Ze);
            }
            const V = E.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function F({ children: e, config: t, id: r }) {
                const n = t.richRevealText?.text || t.revealText,
                    a = t.richText ? i.createElement(k.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return i.createElement(o.Z, { "aria-label": s().bb5c5864, id: r }, n ? i.createElement(x.Z, { label: a, revealLabel: n }, e) : i.createElement(I.Z, null, a));
            }
            function D(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = R, renderQuoteTweetTombstone: r = F, renderJetfuelFrame: n = () => null, singleImageMaxAspectRatio: i = U, singleImageMinAspectRatio: o = R, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: n, renderQuoteTweetTombstone: r, singleImageMaxAspectRatio: i, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function q(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function W(e) {
                const t = C.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function Q(e) {
                const t = D(e),
                    r = M.Z.getOriginalTweet(t.tweet);
                return M.Z.hasMedia(r, !t.withTweetMedia);
            }
            const $ = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function z(e) {
                const t = D(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function O(e) {
                const { mediaDetails: t, ...r } = e,
                    { displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: h, nudges: w, onGrokClick: g, onMediaClick: f, onMediaTagsClick: C, onPlaybackStarted: b, preventVideoPlayback: v, promotedContent: T, renderPrerollActionMenu: k, showAltTranslation: E, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: x, withAltTextBadge: U, withCenterCrop: R, withHalvedMediaSize: H, withMediaTagsIcon: F, withRoundMediaCorners: z } = D(r),
                    [O, G] = B(),
                    j = p.ZP.useProps(),
                    Y = j.withEdgeToEdgeContent(),
                    J = M.Z.getOriginalTweet(e.tweet),
                    X = $(J),
                    ee = !!q(J),
                    te =
                        (function (e, t, r) {
                            const n = D(t);
                            if (!Q(n)) return;
                            const i = e?.extended_entities?.media,
                                o = 1 === i?.length ? i[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                l = s / a;
                            return r ? (0, c.Z)(l, n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio) : s / a;
                        })(J, r, ee) ?? 1,
                    re =
                        l &&
                        (function (e, t) {
                            const r = D(t);
                            if (!Q(r)) return !1;
                            const n = q(e);
                            if (!n || !n.original_info) return !1;
                            const { height: i, width: o } = n && n.original_info;
                            return (0, _.q)(r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio, { width: o, height: i }) < 1;
                        })(J, r) &&
                        O,
                    ne = j.compactMediaMaxHeight(),
                    ie = Y ? L : ne > 0 ? ne : P,
                    oe = (function (e) {
                        const t = q(e);
                        if (t) return W(t);
                    })(J);
                if (A.B(J)) return i.createElement(S.Z, { tweet: J });
                if (J.card && m.default.isSpaceCard(J.card.name)) return i.createElement(o.Z, { style: V.gap }, i.createElement(y.Z, { audioSpaceId: J.card?.binding_values.id?.string_value, clipMetadata: J.card?.binding_values.clip_metadata?.string_value }));
                const ae = j.isVerticalVideoNoBlackBars() && X && te < 1,
                    se = ee ? te : X ? (ae ? te : Math.max(1, te)) : void 0,
                    le = null != se ? ie * se : void 0,
                    de = (l && ne > 0 && (ee || X)) || ae;
                return i.createElement(o.Z, { ref: G, style: de && { maxWidth: le } }, i.createElement(Z.Z, { authorId: J.user.id_str, authorScreenName: J.user.screen_name, cacheLocationKey: h || N, customHoverBackgroundColor: re && Y ? oe : void 0, displayMediaAttribution: !0, displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: J.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [K({ withEdgeToEdgeContent: Y, withHalvedMediaSize: H, backgroundColor: oe, withMaxHeight: re })], mediaDetails: t, mediaMaxHeight: re ? ie : void 0, mediaTagsLink: `${J.permalink}/media_tags`, mediaVisibilityResults: J.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: w, onClick: f, onClickMediaTags: C, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: v, promotedContent: T, renderPrerollActionMenu: k, shouldShowAltLabelAlways: U, showAltTranslation: E, showBorder: !(re && Y), showRoundCorners: z, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: x, style: re && !Y && V.explicitlySized, tweetCreatedAt: J.created_at, tweetId: J.id_str, tweetText: J.text, videoAspectRatio: ae ? te : void 0, withCenterCrop: R, withHalvedMediaSize: H, withMediaTagsIcon: F, withPostPlayback: !0 }));
            }
            function K(e) {
                const { backgroundColor: t, isInQuoteTweet: r = !1, withEdgeToEdgeContent: n, withHalvedMediaSize: i, withMaxHeight: o } = e;
                return [n && !r && !i && V.negativeMargin, o && n && [V.centerItems, { backgroundColor: t }]];
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
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: o, userAvatarSize: s, userAvatarUri: l, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return n.createElement(i.Z, { style: g.row }, n.createElement(a.ZP.Provider, { value: { userAvatarLabel: h } }, n.createElement(c.default, { link: r, onClick: t, promotedContent: o, screenName: d, size: s, uri: u ? l : void 0, withLink: !0 })), this._renderDecoration());
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
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: i, onScreenNameClick: o, profileLink: a, promotedContent: s, userHighlightedLabel: l, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: w } = this.props,
                        { badges: g, followIndicator: f, fullName: C } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? r : void 0, isVerified: g ? i : void 0, link: a, name: C ? d : c, nameSize: "headline2", onLinkClick: o, promotedContent: s, screenName: c, translatorType: g ? u : void 0, verifiedType: g ? p : void 0, withFollowsYou: f && h, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
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
            var f = r(807896);
            var C = r(111677);
            const _ = r.n(C)().ef633578;
            class b extends n.PureComponent {
                render() {
                    return n.createElement(w, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(w, (0, f.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: i, knownFollowers: o, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const i = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(w, { errorMessage: _, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: i.protected, isUserStatsWithLink: i.isUserStatsWithLink, isUserVerified: i.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: i.profile_image_url_https, userDescription: i.description, userEntities: i.entities, userFollowersCount: i.followers_count, userFriendsCount: i.friends_count, userId: i.id_str, userName: r, userScreenName: r, userWithFollowsYou: i.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                i = r(111677),
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
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                i = r(890601),
                o = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                i = r(890601),
                o = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                i = r(890601),
                o = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-6107ac1a.ab50726a.js.map

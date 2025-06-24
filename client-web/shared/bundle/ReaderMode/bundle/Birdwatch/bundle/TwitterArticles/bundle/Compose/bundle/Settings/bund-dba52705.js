"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"],
    {
        995145: (e, t, n) => {
            n.d(t, { Z: () => C });
            var i = n(202784),
                r = n(325686),
                o = n(111677),
                a = n.n(o),
                s = n(731708),
                d = n(235902),
                l = n(638009),
                c = n(470397),
                u = n(966582),
                m = n(392237),
                w = n(418462),
                g = n(767385),
                p = n(782261);
            const h = a().g5662c95;
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: v, renderEditCallout: x, renderEducation: M, renderHighlightedUserLabel: k, renderPromotedDetails: I, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: S, renderStats: _, renderText: Z, renderTimestamp: R, renderTombstone: L, renderTweetHeader: U, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: F, testID: N, tweet: Q, withBottomLine: z, withTopLine: V, withUnreadStyles: O }) {
                const { LinkConfigProvider: $, a11yIdList: G, a11yIds: K, props: W } = (0, w.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: v, renderEditCallout: x, renderEducation: M, renderHighlightedUserLabel: k, renderPromotedDetails: I, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: S, renderTweetHeader: U, renderStats: _, renderText: Z, renderTimestamp: R, renderTombstone: L, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: F, testID: N, tweet: Q, withBottomLine: z, withTopLine: V, withUnreadStyles: O }),
                    j = p.Z.getOriginalTweet(W.tweet),
                    { permalink: J } = j,
                    Y = j.tombstoneInfo || W.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(W.promotedContent),
                    ee = d.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    ie = j.isEdited && ee.withEditCallout(),
                    re = j.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    oe = W.conversationTreeMetadata?.ancestorConnector,
                    ae = W.conversationTreeMetadata?.indents,
                    se = i.useContext(l.ZP),
                    de = W.conversationTreeMetadata ? i.createElement(s.ZP, { id: K.conversationLevel, style: m.default.visuallyHidden }, h({ conversationTreeDepth: W.conversationTreeMetadata.depth.toString() })) : null,
                    le = W.renderTombstone({ actionLink: J, actionText: Y?.richRevealText?.text, style: T.tombstone });
                return i.createElement(
                    $,
                    null,
                    i.createElement(
                        g.Z,
                        {
                            a11yDomIds: G,
                            actionMenu: W.renderActionMenu(),
                            avatar: W.renderUserAvatar(),
                            footer: W.renderCallToAction(),
                            header: W.renderTweetHeader({ iconSize: "large", iconStyle: T.socialContextIcon, style: T.socialContext, weight: "bold" }),
                            indents: ae,
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
                                          return !j.isStaleEdit && ie ? i.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: W.withBottomLine,
                            withElbow: ae ? "side" === oe : void 0,
                            withFullWidthChildren: te,
                            withTopLine: W.withTopLine,
                            withUnreadStyles: W.withUnreadStyles,
                        },
                        de,
                        null !== le ? le : i.createElement(i.Fragment, null, W.renderReplyContext({ style: T.replyContext }), W.renderArticleCard(), W.renderText({ color: re ? "gray700" : "text", linkColor: re ? "gray700" : "link", size: "body", style: te && T.edgeToEdgeTextSpacer }), W.renderRichContent({ withRoundMediaCorners: !te, style: T.richContent }), W.renderPromotedUserProfileCard({ style: T.promotedUserCard })),
                        W.renderEducation({ displayStyle: "inline" }),
                        j.isStaleEdit && ie && i.createElement(r.Z, { style: T.tweetEditCallout }, W.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        W.renderStats(),
                        W.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: T.actionsBar, withCount: !0 }),
                        W.renderPromotedDetails({ style: T.promotedDetails, promotedContent: W.promotedContent, withoutDisclaimerDetails: !0 }),
                        W.renderPromotionStatusBadge({ id: K.promotionStatusLabel }),
                    ),
                );
            }
            (C.ActionMenu = w.q.ActionMenu), (C.ActionsBar = w.q.ActionsBar), (C.ArticleCard = w.q.ArticleCard), (C.Education = w.q.Education), (C.EditCallout = w.q.EditCallout), (C.HighlightedUserLabel = w.q.HighlightedUserLabel), (C.PromotedDetails = w.q.PromotedDetails), (C.PromotedUserProfileCard = w.q.PromotedUserProfileCard), (C.ReplyContext = w.q.ReplyContext), (C.RichContent = w.q.RichContent), (C.SocialContext = w.q.SocialContext), (C.Text = w.q.Text), (C.Timestamp = w.q.Timestamp), (C.Tombstone = w.q.Tombstone), (C.UserAvatar = w.q.UserAvatar), (C.UserFollowIndicator = w.q.UserFollowIndicator), (C.UserName = w.q.UserName);
            const T = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(202784),
                r = n(325686),
                o = n(952428),
                a = n(392237),
                s = n(266704);
            const d = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                l = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, link: l, onClick: c, onScreenNameClick: u, promotedContent: m, style: w, userDescription: g, userId: p, userName: h, userScreenName: C }) {
                    return i.createElement(r.Z, { style: w }, i.createElement(o.Z, { link: l, onClick: c, style: d.root }, i.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: g, userId: p, userName: h, userScreenName: C })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => G, Z: () => H });
            var i = n(807896),
                r = n(202784),
                o = n(325686),
                a = n(111677),
                s = n.n(a),
                d = n(2138),
                l = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                w = n(235902),
                g = n(847224),
                p = n(950152),
                h = n(666305),
                C = n(834324),
                T = n(309854),
                f = n(782578),
                b = n(352924),
                y = n(521288),
                v = n(912838),
                x = n(316046),
                M = n(287826),
                k = n(392237),
                I = n(54989),
                E = n(449945),
                A = n(103737),
                P = n(782261),
                S = n(586035),
                _ = n(454363);
            const Z = 510,
                R = 596,
                L = 10,
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
                                h.Z.observe(t, (t) => {
                                    e(t.contentRect.width);
                                }),
                                () => {
                                    e.cancel(), h.Z.unobserveAll(t);
                                }
                            );
                        }
                    }, []);
                    return [t >= 506, e];
                };
            function H(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: h, loggedInUserId: T, onCardLinkClick: x, onQuoteTweetClick: M, onQuoteTweetMediaClick: k, onQuotedTweetAvatarClick: I, onQuotedTweetScreenNameClick: E, pollTranslations: A, preventVideoPlayback: S, promotedContent: _, quoteTweetSingleImageMinAspectRatio: L, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: H, renderGrokTranslationHeaderForQuote: F, renderJetfuelFrame: O, renderQuoteTweetTombstone: W, renderTranslationFeedback: j, singleImageMaxAspectRatio: J, style: Y, tweet: X, withActionsDisabled: ee, withAltTextBadge: te, withCardLinks: ne, withCenterCrop: ie, withCondensedQuoteTweet: re, withHalvedMediaSize: oe, withQuoteTweetBirdwatchPivot: ae, withQuoteTweetHeaderLinks: se, withQuoteTweetLink: de, withQuoteTweetMedia: le, withUserHoverCard: ce } = N(e),
                    [ue, me] = q(),
                    we = w.ZP.useProps(),
                    ge = we.withEdgeToEdgeContent(),
                    pe = (0, b.b)(),
                    he = (0, b.b)(),
                    Ce = P.Z.getOriginalTweet(X),
                    Te = we.compactMediaMaxHeight(),
                    fe = () => Q(Ce.quoted_status),
                    be = () => {
                        const e = fe();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, f.q)(L, J, { width: n, height: t });
                    },
                    ye = () => {
                        const t = P.Z.getOriginalTweet(X),
                            n = V(e),
                            i =
                                h &&
                                !n &&
                                (() => {
                                    const e = be();
                                    return !!e && e < 1;
                                })() &&
                                ue,
                            o = (() => {
                                const e = fe();
                                if (e) return z(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(y.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: he, isCondensed: re, loggedInUserId: T, mediaContentStyles: !re && K({ withEdgeToEdgeContent: ge, withHalvedMediaSize: oe, backgroundColor: o, withMaxHeight: i, isInQuoteTweet: !0 }), mediaMaxHeight: i ? (ge ? R : Te > 0 ? Te : Z) : void 0, nudges: c, onAvatarClick: I, onMediaClick: k, onPress: M, onScreenNameClick: E, preventVideoPlayback: S, promotedContent: _, renderGrokTranslationHeader: F, shouldRenderIfBlocked: !!H, shouldShowAltLabelAlways: te, singleImageMaxAspectRatio: J, singleImageMinAspectRatio: L, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: ee, withBirdwatchPivot: ae, withCenterCrop: ie, withHeaderLinks: se, withLink: de, withMediaAsTextLinks: !le, withUserHoverCard: ce }) : null;
                    },
                    ve = () => !!_?.adMetadataContainer?.unifiedCardOverride,
                    xe = O(),
                    Me = ((e, t) => {
                        if (!V(e) || $(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const i = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    r = (0, l.Z)(e);
                                n = i.filter((e) => !r.has(e.id_str));
                            } else n = i;
                        }
                        return r.createElement(G, (0, i.Z)({}, e, { mediaDetails: n }));
                    })(e, Ce),
                    ke = (() => {
                        if (n && n.displayType === p.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: i, text: o } = n;
                            return r.createElement(g.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === X.limited_actions, landingUrl: t, softInterventionDisplayType: i, text: o, tweetId: X.id_str });
                        }
                    })(),
                    Ie = s ? r.createElement(C.Z, s) : null,
                    Ee = (() => {
                        if (!Ce || xe) return null;
                        if (
                            (() => {
                                if (ve()) return !1;
                                const e = Ce.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(Ce, _, { isDynamicFollowCardPresentAndEnabled: $(e), isDynamicProductCardPresentAndEnabled: ve(), withCardLinks: ne, hasMedia: V(e) }),
                            o = P.Z.isArticlePost(Ce);
                        return n && !(o && "NoCard" === n?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, i.Z)({}, n, { cardContext: { locationKey: t || B, tweetId: Ce.id_str, tweetPermalink: Ce.permalink, tweetUserId: Ce.user.id_str, viewerUserId: T, withActionsDisabled: ee, mediaVisibilityResults: Ce.mediaVisibilityResults, grokShareAttachment: Ce.grok_share_attachment, pollTranslations: A, renderTranslationFeedback: j }, id: pe, onCardLinkClick: x, preventVideoPlayback: S, promotedContent: _ })) : null;
                    })(),
                    Ae = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = Ce;
                        return ((!!n?.possibly_sensitive && !!(Ce.quoted_status && Ce.quoted_status.entities && Ce.quoted_status.entities.media && Ce.quoted_status.entities.media.length > 0 && le) && !H) || (t && !m.default.isPollCard(Ce.card?.name))) && e ? r.createElement(v.Z, { revealableTombstoneConfig: v.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = ye();
                            return e && H ? W({ children: e, config: H, id: he }) : e;
                        })() || Ee,
                    );
                if (!(Me || Ae || ke || xe)) return null;
                return r.createElement(o.Z, { "aria-labelledby": `${he} ${pe}`, id: a, ref: me, style: [D.gap, Y] }, Me || Ie || ke ? r.createElement(o.Z, { style: D.mediaPivotGap }, Me, Ie, ke) : null, V(e) ? null : xe, Ae);
            }
            const D = k.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function F({ children: e, config: t, id: n }) {
                const i = t.richRevealText?.text || t.revealText,
                    a = t.richText ? r.createElement(x.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(o.Z, { "aria-label": s().bb5c5864, id: n }, i ? r.createElement(E.Z, { label: a, revealLabel: i }, e) : r.createElement(I.Z, null, a));
            }
            function N(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = F, renderJetfuelFrame: i = () => null, singleImageMaxAspectRatio: r = L, singleImageMinAspectRatio: o = U, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: i, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: r, singleImageMinAspectRatio: o, withAltTextBadge: a, withCardLinks: s, withCenterCrop: d, withHalvedMediaSize: l, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function Q(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function z(e) {
                const t = T.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function V(e) {
                const t = N(e),
                    n = P.Z.getOriginalTweet(t.tweet);
                return P.Z.hasMedia(n, !t.withTweetMedia);
            }
            const O = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function $(e) {
                const t = N(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function G(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: g, nudges: p, onGrokClick: h, onMediaClick: C, onMediaTagsClick: T, onPlaybackStarted: b, preventVideoPlayback: y, promotedContent: v, renderPrerollActionMenu: x, showAltTranslation: k, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: E, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: F, withRoundMediaCorners: $ } = N(n),
                    [G, W] = q(),
                    j = w.ZP.useProps(),
                    J = j.withEdgeToEdgeContent(),
                    Y = P.Z.getOriginalTweet(e.tweet),
                    X = O(Y),
                    ee = !!Q(Y),
                    te =
                        (function (e, t, n) {
                            const i = N(t);
                            if (!V(i)) return;
                            const r = e?.extended_entities?.media,
                                o = 1 === r?.length ? r[0] : void 0;
                            if (!o || (!o.original_info && !o.video_info)) return;
                            const { height: a, width: s } = { ...o.original_info, ...o.video_info },
                                d = s / a;
                            return n ? (0, c.Z)(d, i.singleImageMinAspectRatio, i.singleImageMaxAspectRatio) : s / a;
                        })(Y, n, ee) ?? 1,
                    ne =
                        d &&
                        (function (e, t) {
                            const n = N(t);
                            if (!V(n)) return !1;
                            const i = Q(e);
                            if (!i || !i.original_info) return !1;
                            const { height: r, width: o } = i && i.original_info;
                            return (0, f.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: o, height: r }) < 1;
                        })(Y, n) &&
                        G,
                    ie = j.compactMediaMaxHeight(),
                    re = J ? R : ie > 0 ? ie : Z,
                    oe = (function (e) {
                        const t = Q(e);
                        if (t) return z(t);
                    })(Y);
                if (S.B(Y)) return r.createElement(_.Z, { tweet: Y });
                if (Y.card && m.default.isSpaceCard(Y.card.name)) return r.createElement(o.Z, { style: D.gap }, r.createElement(M.Z, { audioSpaceId: Y.card?.binding_values.id?.string_value, clipMetadata: Y.card?.binding_values.clip_metadata?.string_value }));
                const ae = j.isVerticalVideoNoBlackBars() && X && te < 1,
                    se = ee ? te : X ? (ae ? te : Math.max(1, te)) : void 0,
                    de = null != se ? re * se : void 0,
                    le = (d && ie > 0 && (ee || X)) || ae;
                return r.createElement(o.Z, { ref: W, style: le && { maxWidth: de } }, r.createElement(A.Z, { authorId: Y.user.id_str, authorScreenName: Y.user.screen_name, cacheLocationKey: g || B, customHoverBackgroundColor: ne && J ? oe : void 0, displayMediaAttribution: !0, displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: Y.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [K({ withEdgeToEdgeContent: J, withHalvedMediaSize: H, backgroundColor: oe, withMaxHeight: ne })], mediaDetails: t, mediaMaxHeight: ne ? re : void 0, mediaTagsLink: `${Y.permalink}/media_tags`, mediaVisibilityResults: Y.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: p, onClick: C, onClickMediaTags: T, onGrokClick: h, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: y, promotedContent: v, renderPrerollActionMenu: x, shouldShowAltLabelAlways: L, showAltTranslation: k, showBorder: !(ne && J), showRoundCorners: $, singleImageMaxAspectRatio: I, singleImageMinAspectRatio: E, style: ne && !J && D.explicitlySized, tweetCreatedAt: Y.created_at, tweetId: Y.id_str, tweetText: Y.text, videoAspectRatio: ae ? te : void 0, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: F, withPostPlayback: !0 }));
            }
            function K(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: i, withHalvedMediaSize: r, withMaxHeight: o } = e;
                return [i && !n && !r && D.negativeMargin, o && i && [D.centerItems, { backgroundColor: t }]];
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
                    const { actionMenu: t, editedIcon: n, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...w } = e,
                        g = r.createElement(o.Z, { style: l.userInfo }, r.createElement(o.Z, { style: l.userNameRow }, r.createElement(a.Z, null, m, s), t ? r.createElement(o.Z, { style: l.actionMenuContainer }, t) : null), u ? r.createElement(o.Z, { style: l.userLabelRow }, u) : null, c ? r.createElement(o.Z, { style: l.userLabelRow }, c) : null);
                    return r.createElement(d.Z, (0, i.Z)({}, w, { usernameContent: g }));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705.df1f185a.js.map

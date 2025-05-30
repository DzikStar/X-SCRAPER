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
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: v, renderEditCallout: x, renderEducation: M, renderHighlightedUserLabel: I, renderPromotedDetails: k, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: S, renderStats: _, renderText: Z, renderTimestamp: R, renderTombstone: L, renderTweetHeader: U, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: N, testID: F, tweet: Q, withBottomLine: z, withTopLine: V, withUnreadStyles: O }) {
                const { LinkConfigProvider: $, a11yIdList: K, a11yIds: W, props: G } = (0, w.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: o, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: f, renderActionMenu: b, renderActionsBar: y, renderCallToAction: v, renderEditCallout: x, renderEducation: M, renderHighlightedUserLabel: I, renderPromotedDetails: k, renderPromotedUserProfileCard: E, renderPromotionStatusBadge: A, renderReplyContext: P, renderRichContent: S, renderTweetHeader: U, renderStats: _, renderText: Z, renderTimestamp: R, renderTombstone: L, renderUserAvatar: B, renderUserFollowIndicator: q, renderUserName: H, socialContext: D, staticLinkConfig: N, testID: F, tweet: Q, withBottomLine: z, withTopLine: V, withUnreadStyles: O }),
                    j = p.Z.getOriginalTweet(G.tweet),
                    { permalink: J } = j,
                    Y = j.tombstoneInfo || G.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(G.promotedContent),
                    ee = d.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    ie = j.isEdited && ee.withEditCallout(),
                    re = j.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    oe = G.conversationTreeMetadata?.ancestorConnector,
                    ae = G.conversationTreeMetadata?.indents,
                    se = i.useContext(l.ZP),
                    de = G.conversationTreeMetadata ? i.createElement(s.ZP, { id: W.conversationLevel, style: m.default.visuallyHidden }, h({ conversationTreeDepth: G.conversationTreeMetadata.depth.toString() })) : null,
                    le = G.renderTombstone({ actionLink: J, actionText: Y?.richRevealText?.text, style: T.tombstone });
                return i.createElement(
                    $,
                    null,
                    i.createElement(
                        g.Z,
                        {
                            a11yDomIds: K,
                            actionMenu: G.renderActionMenu(),
                            avatar: G.renderUserAvatar(),
                            footer: G.renderCallToAction(),
                            header: G.renderTweetHeader({ iconSize: "large", iconStyle: T.socialContextIcon, style: T.socialContext, weight: "bold" }),
                            indents: ae,
                            link: G.link ? se.withAnchorless(G.link) : void 0,
                            onBlur: () => G.onBlur?.(),
                            onFocus: () => G.onFocus?.(),
                            onPress: (e) => G.onPress?.(e),
                            testID: G.testID,
                            userFollowIndicators: G.renderUserFollowIndicator(),
                            userLabel: G.renderHighlightedUserLabel(),
                            userName: G.renderUserName({
                                screenNameSuffix: X
                                    ? null
                                    : (() => {
                                          const { renderTimestamp: e } = G,
                                              t = e({ id: void 0 });
                                          return !j.isStaleEdit && ie ? i.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: G.withBottomLine,
                            withElbow: ae ? "side" === oe : void 0,
                            withFullWidthChildren: te,
                            withTopLine: G.withTopLine,
                            withUnreadStyles: G.withUnreadStyles,
                        },
                        de,
                        null !== le ? le : i.createElement(i.Fragment, null, G.renderReplyContext({ style: T.replyContext }), G.renderArticleCard(), G.renderText({ color: re ? "gray700" : "text", linkColor: re ? "gray700" : "link", size: "body", style: te && T.edgeToEdgeTextSpacer }), G.renderRichContent({ withRoundMediaCorners: !te, style: T.richContent }), G.renderPromotedUserProfileCard({ style: T.promotedUserCard })),
                        G.renderEducation({ displayStyle: "inline" }),
                        j.isStaleEdit && ie && i.createElement(r.Z, { style: T.tweetEditCallout }, G.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        G.renderStats(),
                        G.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: T.actionsBar, withCount: !0 }),
                        G.renderPromotedDetails({ style: T.promotedDetails, promotedContent: G.promotedContent, withoutDisclaimerDetails: !0 }),
                        G.renderPromotionStatusBadge({ id: W.promotionStatusLabel }),
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
            n.d(t, { Y: () => K, Z: () => H });
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
                x = n(308158),
                M = n(287826),
                I = n(392237),
                k = n(54989),
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
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: d, innerNudges: c, isMediaMaxHeightEnabled: h, loggedInUserId: T, onCardLinkClick: x, onQuoteTweetClick: M, onQuoteTweetMediaClick: I, onQuotedTweetAvatarClick: k, onQuotedTweetScreenNameClick: E, pollTranslations: A, preventVideoPlayback: S, promotedContent: _, quoteTweetSingleImageMinAspectRatio: L, quoteTweetSocialContextProps: U, quotedTweetTombstoneInfo: H, renderJetfuelFrame: N, renderQuoteTweetTombstone: O, renderTranslationFeedback: G, singleImageMaxAspectRatio: j, style: J, tweet: Y, withActionsDisabled: X, withAltTextBadge: ee, withCardLinks: te, withCenterCrop: ne, withCondensedQuoteTweet: ie, withHalvedMediaSize: re, withQuoteTweetBirdwatchPivot: oe, withQuoteTweetHeaderLinks: ae, withQuoteTweetLink: se, withQuoteTweetMedia: de, withUserHoverCard: le } = F(e),
                    [ce, ue] = q(),
                    me = w.ZP.useProps(),
                    we = me.withEdgeToEdgeContent(),
                    ge = (0, b.b)(),
                    pe = (0, b.b)(),
                    he = P.Z.getOriginalTweet(Y),
                    Ce = me.compactMediaMaxHeight(),
                    Te = () => Q(he.quoted_status),
                    fe = () => {
                        const e = Te();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, f.q)(L, j, { width: n, height: t });
                    },
                    be = () => {
                        const t = P.Z.getOriginalTweet(Y),
                            n = V(e),
                            i =
                                h &&
                                !n &&
                                (() => {
                                    const e = fe();
                                    return !!e && e < 1;
                                })() &&
                                ce,
                            o = (() => {
                                const e = Te();
                                if (e) return z(e);
                            })();
                        return t && t.is_quote_status ? r.createElement(y.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || d, id: pe, isCondensed: ie, loggedInUserId: T, mediaContentStyles: !ie && W({ withEdgeToEdgeContent: we, withHalvedMediaSize: re, backgroundColor: o, withMaxHeight: i, isInQuoteTweet: !0 }), mediaMaxHeight: i ? (we ? R : Ce > 0 ? Ce : Z) : void 0, nudges: c, onAvatarClick: k, onMediaClick: I, onPress: M, onScreenNameClick: E, preventVideoPlayback: S, promotedContent: _, shouldRenderIfBlocked: !!H, shouldShowAltLabelAlways: ee, singleImageMaxAspectRatio: j, singleImageMinAspectRatio: L, socialContextProps: U, tweet: t.quoted_status, withActionsDisabled: X, withBirdwatchPivot: oe, withCenterCrop: ne, withHeaderLinks: ae, withLink: se, withMediaAsTextLinks: !de, withUserHoverCard: le }) : null;
                    },
                    ye = () => !!_?.adMetadataContainer?.unifiedCardOverride,
                    ve = N(),
                    xe = ((e, t) => {
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
                        return r.createElement(K, (0, i.Z)({}, e, { mediaDetails: n }));
                    })(e, he),
                    Me = (() => {
                        if (n && n.displayType === p.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: i, text: o } = n;
                            return r.createElement(g.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === Y.limited_actions, landingUrl: t, softInterventionDisplayType: i, text: o, tweetId: Y.id_str });
                        }
                    })(),
                    Ie = s ? r.createElement(C.Z, s) : null,
                    ke = (() => {
                        if (!he || ve) return null;
                        if (
                            (() => {
                                if (ye()) return !1;
                                const e = he.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(he, _, { isDynamicFollowCardPresentAndEnabled: $(e), isDynamicProductCardPresentAndEnabled: ye(), withCardLinks: te, hasMedia: V(e) }),
                            o = P.Z.isArticlePost(he);
                        return n && !(o && "NoCard" === n?.unifiedCard?.card_fetch_state) ? r.createElement(u.Z, (0, i.Z)({}, n, { cardContext: { locationKey: t || B, tweetId: he.id_str, tweetPermalink: he.permalink, tweetUserId: he.user.id_str, viewerUserId: T, withActionsDisabled: X, mediaVisibilityResults: he.mediaVisibilityResults, grokShareAttachment: he.grok_share_attachment, pollTranslations: A, renderTranslationFeedback: G }, id: ge, onCardLinkClick: x, preventVideoPlayback: S, promotedContent: _ })) : null;
                    })(),
                    Ee = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = he;
                        return ((!!n?.possibly_sensitive && !!(he.quoted_status && he.quoted_status.entities && he.quoted_status.entities.media && he.quoted_status.entities.media.length > 0 && de) && !H) || (t && !m.default.isPollCard(he.card?.name))) && e ? r.createElement(v.Z, { revealableTombstoneConfig: v.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = be();
                            return e && H ? O({ children: e, config: H, id: pe }) : e;
                        })() || ke,
                    );
                if (!(xe || Ee || Me || ve)) return null;
                return r.createElement(o.Z, { "aria-labelledby": `${pe} ${ge}`, id: a, ref: ue, style: [D.gap, J] }, xe || Ie || Me ? r.createElement(o.Z, { style: D.mediaPivotGap }, xe, Ie, Me) : null, V(e) ? null : ve, Ee);
            }
            const D = I.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function N({ children: e, config: t, id: n }) {
                const i = t.richRevealText?.text || t.revealText,
                    a = t.richText ? r.createElement(x.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return r.createElement(o.Z, { "aria-label": s().bb5c5864, id: n }, i ? r.createElement(E.Z, { label: a, revealLabel: i }, e) : r.createElement(k.Z, null, a));
            }
            function F(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = U, renderQuoteTweetTombstone: n = N, renderJetfuelFrame: i = () => null, singleImageMaxAspectRatio: r = L, singleImageMinAspectRatio: o = U, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: d = !1, withHalvedMediaSize: l = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
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
                const t = F(e),
                    n = P.Z.getOriginalTweet(t.tweet);
                return P.Z.hasMedia(n, !t.withTweetMedia);
            }
            const O = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function $(e) {
                const t = F(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: d, loggedInUserId: l, mediaAltTranslations: u, mediaCacheLocationKey: g, nudges: p, onGrokClick: h, onMediaClick: C, onMediaTagsClick: T, onPlaybackStarted: b, preventVideoPlayback: y, promotedContent: v, renderPrerollActionMenu: x, showAltTranslation: I, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: E, withAltTextBadge: L, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: N, withRoundMediaCorners: $ } = F(n),
                    [K, G] = q(),
                    j = w.ZP.useProps(),
                    J = j.withEdgeToEdgeContent(),
                    Y = P.Z.getOriginalTweet(e.tweet),
                    X = O(Y),
                    ee = !!Q(Y),
                    te =
                        (function (e, t, n) {
                            const i = F(t);
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
                            const n = F(t);
                            if (!V(n)) return !1;
                            const i = Q(e);
                            if (!i || !i.original_info) return !1;
                            const { height: r, width: o } = i && i.original_info;
                            return (0, f.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: o, height: r }) < 1;
                        })(Y, n) &&
                        K,
                    ie = j.compactMediaMaxHeight(),
                    re = J ? R : ie > 0 ? ie : Z,
                    oe = (function (e) {
                        const t = Q(e);
                        if (t) return z(t);
                    })(Y);
                if (S.B(Y)) return r.createElement(_.Z, { tweet: Y });
                if (Y.card && m.default.isSpaceCard(Y.card.name)) return r.createElement(o.Z, { style: D.gap }, r.createElement(M.Z, { audioSpaceId: Y.card?.binding_values.id?.string_value, clipMetadata: Y.card?.binding_values.clip_metadata?.string_value }));
                const ae = j.isVerticalVideoNoBlackBars(),
                    se = d && ie > 0 && (ee || X),
                    de = re * (ee ? te : Math.max(1, te)),
                    le = ae && X && te < 1 ? te : void 0;
                return r.createElement(o.Z, { ref: G, style: [se && { maxWidth: de }, le ? D.squareRow : void 0] }, r.createElement(A.Z, { authorId: Y.user.id_str, authorScreenName: Y.user.screen_name, cacheLocationKey: g || B, customHoverBackgroundColor: ne && J ? oe : void 0, displayMediaAttribution: !0, displayMediaMetadata: i, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: Y.possibly_sensitive, loggedInUserId: l, mediaAltTranslations: u, mediaContentStyles: [W({ withEdgeToEdgeContent: J, withHalvedMediaSize: H, backgroundColor: oe, withMaxHeight: ne })], mediaDetails: t, mediaMaxHeight: ne ? re : void 0, mediaTagsLink: `${Y.permalink}/media_tags`, mediaVisibilityResults: Y.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: p, onClick: C, onClickMediaTags: T, onGrokClick: h, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: y, promotedContent: v, renderPrerollActionMenu: x, shouldShowAltLabelAlways: L, showAltTranslation: I, showBorder: !(ne && J), showRoundCorners: $, singleImageMaxAspectRatio: k, singleImageMinAspectRatio: E, style: [ne && !J && D.explicitlySized, le ? { aspectRatio: te } : void 0], tweetCreatedAt: Y.created_at, tweetId: Y.id_str, tweetText: Y.text, videoAspectRatio: le, withCenterCrop: U, withHalvedMediaSize: H, withMediaTagsIcon: N, withPostPlayback: !0 }));
            }
            function W(e) {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705.f6c8a1ca.js.map

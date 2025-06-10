"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39", "icons/IconBulletedList-js", "icons/IconReplyOff-js", "icons/IconStar-js"],
    {
        995145: (e, t, r) => {
            r.d(t, { Z: () => C });
            var n = r(202784),
                o = r(325686),
                i = r(111677),
                a = r.n(i),
                s = r(731708),
                l = r(235902),
                d = r(638009),
                c = r(470397),
                u = r(966582),
                m = r(392237),
                p = r(418462),
                w = r(767385),
                h = r(782261);
            const g = a().g5662c95;
            function C({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: i, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: v, renderActionMenu: b, renderActionsBar: T, renderCallToAction: y, renderEditCallout: E, renderEducation: k, renderHighlightedUserLabel: _, renderPromotedDetails: M, renderPromotedUserProfileCard: S, renderPromotionStatusBadge: x, renderReplyContext: Z, renderRichContent: A, renderStats: I, renderText: P, renderTimestamp: U, renderTombstone: L, renderTweetHeader: B, renderUserAvatar: N, renderUserFollowIndicator: R, renderUserName: F, socialContext: D, staticLinkConfig: H, testID: q, tweet: V, withBottomLine: z, withTopLine: W, withUnreadStyles: O }) {
                const { LinkConfigProvider: Q, a11yIdList: $, a11yIds: K, props: j } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: r, onFocus: i, onPress: a, promotedContent: C, quotedTweetTombstoneInfo: v, renderActionMenu: b, renderActionsBar: T, renderCallToAction: y, renderEditCallout: E, renderEducation: k, renderHighlightedUserLabel: _, renderPromotedDetails: M, renderPromotedUserProfileCard: S, renderPromotionStatusBadge: x, renderReplyContext: Z, renderRichContent: A, renderTweetHeader: B, renderStats: I, renderText: P, renderTimestamp: U, renderTombstone: L, renderUserAvatar: N, renderUserFollowIndicator: R, renderUserName: F, socialContext: D, staticLinkConfig: H, testID: q, tweet: V, withBottomLine: z, withTopLine: W, withUnreadStyles: O }),
                    G = h.Z.getOriginalTweet(j.tweet),
                    { permalink: Y } = G,
                    J = G.tombstoneInfo || j.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(j.promotedContent),
                    ee = l.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    re = ee.withEdgeToEdgeTweetAnatomy(),
                    ne = G.isEdited && ee.withEditCallout(),
                    oe = G.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    ie = j.conversationTreeMetadata?.ancestorConnector,
                    ae = j.conversationTreeMetadata?.indents,
                    se = n.useContext(d.ZP),
                    le = j.conversationTreeMetadata ? n.createElement(s.ZP, { id: K.conversationLevel, style: m.default.visuallyHidden }, g({ conversationTreeDepth: j.conversationTreeMetadata.depth.toString() })) : null,
                    de = j.renderTombstone({ actionLink: Y, actionText: J?.richRevealText?.text, style: f.tombstone });
                return n.createElement(
                    Q,
                    null,
                    n.createElement(
                        w.Z,
                        {
                            a11yDomIds: $,
                            actionMenu: j.renderActionMenu(),
                            avatar: j.renderUserAvatar(),
                            footer: j.renderCallToAction(),
                            header: j.renderTweetHeader({ iconSize: "large", iconStyle: f.socialContextIcon, style: f.socialContext, weight: "bold" }),
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
                                          return !G.isStaleEdit && ne ? n.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: re,
                            }),
                            withBottomLine: j.withBottomLine,
                            withElbow: ae ? "side" === ie : void 0,
                            withFullWidthChildren: te,
                            withTopLine: j.withTopLine,
                            withUnreadStyles: j.withUnreadStyles,
                        },
                        le,
                        null !== de ? de : n.createElement(n.Fragment, null, j.renderReplyContext({ style: f.replyContext }), j.renderArticleCard(), j.renderText({ color: oe ? "gray700" : "text", linkColor: oe ? "gray700" : "link", size: "body", style: te && f.edgeToEdgeTextSpacer }), j.renderRichContent({ withRoundMediaCorners: !te, style: f.richContent }), j.renderPromotedUserProfileCard({ style: f.promotedUserCard })),
                        j.renderEducation({ displayStyle: "inline" }),
                        G.isStaleEdit && ne && n.createElement(o.Z, { style: f.tweetEditCallout }, j.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        j.renderStats(),
                        j.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: f.actionsBar, withCount: !0 }),
                        j.renderPromotedDetails({ style: f.promotedDetails, promotedContent: j.promotedContent, withoutDisclaimerDetails: !0 }),
                        j.renderPromotionStatusBadge({ id: K.promotionStatusLabel }),
                    ),
                );
            }
            (C.ActionMenu = p.q.ActionMenu), (C.ActionsBar = p.q.ActionsBar), (C.ArticleCard = p.q.ArticleCard), (C.Education = p.q.Education), (C.EditCallout = p.q.EditCallout), (C.HighlightedUserLabel = p.q.HighlightedUserLabel), (C.PromotedDetails = p.q.PromotedDetails), (C.PromotedUserProfileCard = p.q.PromotedUserProfileCard), (C.ReplyContext = p.q.ReplyContext), (C.RichContent = p.q.RichContent), (C.SocialContext = p.q.SocialContext), (C.Text = p.q.Text), (C.Timestamp = p.q.Timestamp), (C.Tombstone = p.q.Tombstone), (C.UserAvatar = p.q.UserAvatar), (C.UserFollowIndicator = p.q.UserFollowIndicator), (C.UserName = p.q.UserName);
            const f = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        189655: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(325686),
                i = r(952428),
                a = r(392237),
                s = r(266704);
            const l = a.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: w, userId: h, userName: g, userScreenName: C }) {
                    return n.createElement(o.Z, { style: p }, n.createElement(i.Z, { link: d, onClick: c, style: l.root }, n.createElement(s.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: r, knownFollowers: a, onScreenNameClick: u, promotedContent: m, userDescription: w, userId: h, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, r) => {
            r.d(t, { Y: () => $, Z: () => F });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(111677),
                s = r.n(a),
                l = r(2138),
                d = r(370751),
                c = r(837880),
                u = r(12686),
                m = r(276563),
                p = r(235902),
                w = r(847224),
                h = r(950152),
                g = r(666305),
                C = r(834324),
                f = r(309854),
                v = r(782578),
                b = r(352924),
                T = r(521288),
                y = r(912838),
                E = r(308158),
                k = r(287826),
                _ = r(392237),
                M = r(54989),
                S = r(449945),
                x = r(103737),
                Z = r(782261),
                A = r(586035),
                I = r(454363);
            const P = 510,
                U = 596,
                L = 10,
                B = 16 / 9,
                N = "timeline",
                R = () => {
                    const e = o.useRef(null),
                        [t, r] = o.useState(506);
                    o.useLayoutEffect(() => {
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
            function F(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: r, id: a, inlineCalloutInfo: s, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: f, onCardLinkClick: E, onQuoteTweetClick: k, onQuoteTweetMediaClick: _, onQuotedTweetAvatarClick: M, onQuotedTweetScreenNameClick: S, pollTranslations: x, preventVideoPlayback: A, promotedContent: I, quoteTweetSingleImageMinAspectRatio: L, quoteTweetSocialContextProps: B, quotedTweetTombstoneInfo: F, renderGrokTranslationHeaderForQuote: H, renderJetfuelFrame: O, renderQuoteTweetTombstone: j, renderTranslationFeedback: G, singleImageMaxAspectRatio: Y, style: J, tweet: X, withActionsDisabled: ee, withAltTextBadge: te, withCardLinks: re, withCenterCrop: ne, withCondensedQuoteTweet: oe, withHalvedMediaSize: ie, withQuoteTweetBirdwatchPivot: ae, withQuoteTweetHeaderLinks: se, withQuoteTweetLink: le, withQuoteTweetMedia: de, withUserHoverCard: ce } = q(e),
                    [ue, me] = R(),
                    pe = p.ZP.useProps(),
                    we = pe.withEdgeToEdgeContent(),
                    he = (0, b.b)(),
                    ge = (0, b.b)(),
                    Ce = Z.Z.getOriginalTweet(X),
                    fe = pe.compactMediaMaxHeight(),
                    ve = () => V(Ce.quoted_status),
                    be = () => {
                        const e = ve();
                        if (!e || !e.original_info) return;
                        const { height: t, width: r } = e && e.original_info;
                        return (0, v.q)(L, Y, { width: r, height: t });
                    },
                    Te = () => {
                        const t = Z.Z.getOriginalTweet(X),
                            r = W(e),
                            n =
                                g &&
                                !r &&
                                (() => {
                                    const e = be();
                                    return !!e && e < 1;
                                })() &&
                                ue,
                            i = (() => {
                                const e = ve();
                                if (e) return z(e);
                            })();
                        return t && t.is_quote_status ? o.createElement(T.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: ge, isCondensed: oe, loggedInUserId: f, mediaContentStyles: !oe && K({ withEdgeToEdgeContent: we, withHalvedMediaSize: ie, backgroundColor: i, withMaxHeight: n, isInQuoteTweet: !0 }), mediaMaxHeight: n ? (we ? U : fe > 0 ? fe : P) : void 0, nudges: c, onAvatarClick: M, onMediaClick: _, onPress: k, onScreenNameClick: S, preventVideoPlayback: A, promotedContent: I, renderGrokTranslationHeader: H, shouldRenderIfBlocked: !!F, shouldShowAltLabelAlways: te, singleImageMaxAspectRatio: Y, singleImageMinAspectRatio: L, socialContextProps: B, tweet: t.quoted_status, withActionsDisabled: ee, withBirdwatchPivot: ae, withCenterCrop: ne, withHeaderLinks: se, withLink: le, withMediaAsTextLinks: !de, withUserHoverCard: ce }) : null;
                    },
                    ye = () => !!I?.adMetadataContainer?.unifiedCardOverride,
                    Ee = O(),
                    ke = ((e, t) => {
                        if (!W(e) || Q(e)) return null;
                        let r;
                        if (t.extended_entities?.media) {
                            const n = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    o = (0, d.Z)(e);
                                r = n.filter((e) => !o.has(e.id_str));
                            } else r = n;
                        }
                        return o.createElement($, (0, n.Z)({}, e, { mediaDetails: r }));
                    })(e, Ce),
                    _e = (() => {
                        if (r && r.displayType === h.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: n, text: i } = r;
                            return o.createElement(w.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === X.limited_actions, landingUrl: t, softInterventionDisplayType: n, text: i, tweetId: X.id_str });
                        }
                    })(),
                    Me = s ? o.createElement(C.Z, s) : null,
                    Se = (() => {
                        if (!Ce || Ee) return null;
                        if (
                            (() => {
                                if (ye()) return !1;
                                const e = Ce.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const r = m.default.getLegacyOrUnifiedCard(Ce, I, { isDynamicFollowCardPresentAndEnabled: Q(e), isDynamicProductCardPresentAndEnabled: ye(), withCardLinks: re, hasMedia: W(e) }),
                            i = Z.Z.isArticlePost(Ce);
                        return r && !(i && "NoCard" === r?.unifiedCard?.card_fetch_state) ? o.createElement(u.Z, (0, n.Z)({}, r, { cardContext: { locationKey: t || N, tweetId: Ce.id_str, tweetPermalink: Ce.permalink, tweetUserId: Ce.user.id_str, viewerUserId: f, withActionsDisabled: ee, mediaVisibilityResults: Ce.mediaVisibilityResults, grokShareAttachment: Ce.grok_share_attachment, pollTranslations: x, renderTranslationFeedback: G }, id: he, onCardLinkClick: E, preventVideoPlayback: A, promotedContent: I })) : null;
                    })(),
                    xe = ((e) => {
                        const { possibly_sensitive: t, quoted_status: r } = Ce;
                        return ((!!r?.possibly_sensitive && !!(Ce.quoted_status && Ce.quoted_status.entities && Ce.quoted_status.entities.media && Ce.quoted_status.entities.media.length > 0 && de) && !F) || (t && !m.default.isPollCard(Ce.card?.name))) && e ? o.createElement(y.Z, { revealableTombstoneConfig: y.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = Te();
                            return e && F ? j({ children: e, config: F, id: ge }) : e;
                        })() || Se,
                    );
                if (!(ke || xe || _e || Ee)) return null;
                return o.createElement(i.Z, { "aria-labelledby": `${ge} ${he}`, id: a, ref: me, style: [D.gap, J] }, ke || Me || _e ? o.createElement(i.Z, { style: D.mediaPivotGap }, ke, Me, _e) : null, W(e) ? null : Ee, xe);
            }
            const D = _.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" }, squareRow: { flexDirection: "row", aspectRatio: 1 } }));
            function H({ children: e, config: t, id: r }) {
                const n = t.richRevealText?.text || t.revealText,
                    a = t.richText ? o.createElement(E.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return o.createElement(i.Z, { "aria-label": s().bb5c5864, id: r }, n ? o.createElement(S.Z, { label: a, revealLabel: n }, e) : o.createElement(M.Z, null, a));
            }
            function q(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = B, renderQuoteTweetTombstone: r = H, renderJetfuelFrame: n = () => null, singleImageMaxAspectRatio: o = L, singleImageMinAspectRatio: i = B, withAltTextBadge: a = !0, withCardLinks: s = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: n, renderQuoteTweetTombstone: r, singleImageMaxAspectRatio: o, singleImageMinAspectRatio: i, withAltTextBadge: a, withCardLinks: s, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function V(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function z(e) {
                const t = f.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function W(e) {
                const t = q(e),
                    r = Z.Z.getOriginalTweet(t.tweet);
                return Z.Z.hasMedia(r, !t.withTweetMedia);
            }
            const O = (e) => {
                const t = e?.extended_entities?.media;
                return 1 === t?.length && "video" === t[0].type;
            };
            function Q(e) {
                const t = q(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function $(e) {
                const { mediaDetails: t, ...r } = e,
                    { displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: w, nudges: h, onGrokClick: g, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: b, preventVideoPlayback: T, promotedContent: y, renderPrerollActionMenu: E, showAltTranslation: _, singleImageMaxAspectRatio: M, singleImageMinAspectRatio: S, withAltTextBadge: L, withCenterCrop: B, withHalvedMediaSize: F, withMediaTagsIcon: H, withRoundMediaCorners: Q } = q(r),
                    [$, j] = R(),
                    G = p.ZP.useProps(),
                    Y = G.withEdgeToEdgeContent(),
                    J = Z.Z.getOriginalTweet(e.tweet),
                    X = O(J),
                    ee = !!V(J),
                    te =
                        (function (e, t, r) {
                            const n = q(t);
                            if (!W(n)) return;
                            const o = e?.extended_entities?.media,
                                i = 1 === o?.length ? o[0] : void 0;
                            if (!i || (!i.original_info && !i.video_info)) return;
                            const { height: a, width: s } = { ...i.original_info, ...i.video_info },
                                l = s / a;
                            return r ? (0, c.Z)(l, n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio) : s / a;
                        })(J, r, ee) ?? 1,
                    re =
                        l &&
                        (function (e, t) {
                            const r = q(t);
                            if (!W(r)) return !1;
                            const n = V(e);
                            if (!n || !n.original_info) return !1;
                            const { height: o, width: i } = n && n.original_info;
                            return (0, v.q)(r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio, { width: i, height: o }) < 1;
                        })(J, r) &&
                        $,
                    ne = G.compactMediaMaxHeight(),
                    oe = Y ? U : ne > 0 ? ne : P,
                    ie = (function (e) {
                        const t = V(e);
                        if (t) return z(t);
                    })(J);
                if (A.B(J)) return o.createElement(I.Z, { tweet: J });
                if (J.card && m.default.isSpaceCard(J.card.name)) return o.createElement(i.Z, { style: D.gap }, o.createElement(k.Z, { audioSpaceId: J.card?.binding_values.id?.string_value, clipMetadata: J.card?.binding_values.clip_metadata?.string_value }));
                const ae = G.isVerticalVideoNoBlackBars(),
                    se = l && ne > 0 && (ee || X),
                    le = oe * (ee ? te : Math.max(1, te)),
                    de = ae && X && te < 1 ? te : void 0;
                return o.createElement(i.Z, { ref: j, style: [se && { maxWidth: le }, de ? D.squareRow : void 0] }, o.createElement(x.Z, { authorId: J.user.id_str, authorScreenName: J.user.screen_name, cacheLocationKey: w || N, customHoverBackgroundColor: re && Y ? ie : void 0, displayMediaAttribution: !0, displayMediaMetadata: n, enableKeyboardShortcuts: a, forwardPivotInfo: s, hasSensitiveMedia: J.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [K({ withEdgeToEdgeContent: Y, withHalvedMediaSize: F, backgroundColor: ie, withMaxHeight: re })], mediaDetails: t, mediaMaxHeight: re ? oe : void 0, mediaTagsLink: `${J.permalink}/media_tags`, mediaVisibilityResults: J.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: h, onClick: C, onClickMediaTags: f, onGrokClick: g, onPlaybackStarted: b, parentTweetId: e.tweet.id_str, preventPlayback: T, promotedContent: y, renderPrerollActionMenu: E, shouldShowAltLabelAlways: L, showAltTranslation: _, showBorder: !(re && Y), showRoundCorners: Q, singleImageMaxAspectRatio: M, singleImageMinAspectRatio: S, style: [re && !Y && D.explicitlySized, de ? { aspectRatio: te } : void 0], tweetCreatedAt: J.created_at, tweetId: J.id_str, tweetText: J.text, videoAspectRatio: de, withCenterCrop: B, withHalvedMediaSize: F, withMediaTagsIcon: H, withPostPlayback: !0 }));
            }
            function K(e) {
                const { backgroundColor: t, isInQuoteTweet: r = !1, withEdgeToEdgeContent: n, withHalvedMediaSize: o, withMaxHeight: i } = e;
                return [n && !r && !o && D.negativeMargin, i && n && [D.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(470397),
                s = r(392237),
                l = r(84275);
            const d = s.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: r, timestamp: s, userFollowIndicators: c, userLabel: u, userName: m, ...p } = e,
                        w = o.createElement(i.Z, { style: d.userInfo }, o.createElement(i.Z, { style: d.userNameRow }, o.createElement(a.Z, null, m, s), t ? o.createElement(i.Z, { style: d.actionMenuContainer }, t) : null), u ? o.createElement(i.Z, { style: d.userLabelRow }, u) : null, c ? o.createElement(i.Z, { style: d.userLabelRow }, c) : null);
                    return o.createElement(l.Z, (0, n.Z)({}, p, { usernameContent: w }));
                };
        },
        266704: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                a = r(235902),
                s = r(649846),
                l = r(529509),
                d = r(392237),
                c = r(823161),
                u = r(238406),
                m = r(366635),
                p = r(646797);
            const w = () => !1;
            class h extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: r, userScreenName: i } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && r) {
                                const { avatarUrls: e, count: t, names: a } = r;
                                return t ? n.createElement(o.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && n.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return n.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return n.createElement(o.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: r } = this.props,
                        { followButton: n } = t;
                    return n && r && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return n.createElement(o.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? n.createElement(o.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: r, promotedContent: i, userAvatarSize: s, userAvatarUri: l, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return n.createElement(o.Z, { style: g.row }, n.createElement(a.ZP.Provider, { value: { userAvatarLabel: w } }, n.createElement(c.default, { link: r, onClick: t, promotedContent: i, screenName: d, size: s, uri: u ? l : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: r } = this.props,
                        { label: i } = t;
                    return r ? n.createElement(n.Fragment, null, this._renderUserAvatar(), n.createElement(o.Z, { style: g.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : n.createElement(o.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: r, isUserVerified: o, onScreenNameClick: i, profileLink: a, promotedContent: s, userHighlightedLabel: l, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: w, withNameWrap: h } = this.props,
                        { badges: g, followIndicator: C, fullName: f } = e;
                    return n.createElement(m.Z, { affiliateBadgeInfo: l, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? r : void 0, isVerified: g ? o : void 0, link: a, name: f ? d : c, nameSize: "headline2", onLinkClick: i, promotedContent: s, screenName: c, translatorType: g ? u : void 0, verifiedType: g ? p : void 0, withFollowsYou: C && w, withLink: !0, withNameWrap: h, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && n.createElement(s.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? n.createElement(o.Z, { style: g.marginTop4 }, n.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: r, userId: i, userWithheldDescription: a, userWithheldEntities: s } = this.props,
                        { description: l } = e;
                    return l && t && r && i ? n.createElement(o.Z, { style: [g.row, g.marginTop12] }, n.createElement(u.Z, { description: t, entities: r, userId: i, withheldDescription: a, withheldEntities: s })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: r, subscriptionsCount: i, userFollowersCount: a, userFriendsCount: s, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? n.createElement(o.Z, { style: [g.row, g.marginTop12] }, n.createElement(p.Z, { followersCount: a, friendsCount: s, onPress: r, screenName: l, subscriptionsCount: i, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            h.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var C = r(807896);
            var f = r(111677);
            const v = r.n(f)().ef633578;
            class b extends n.PureComponent {
                render() {
                    return n.createElement(h, this.props);
                }
            }
            (b.Promoted = (e) => {
                const { followButton: t, isUserProtected: r, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return n.createElement(h, (0, C.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: r, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: s, promotedContent: l, userAvatarUri: w.profile_image_url_https, userDescription: d, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (b.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: r }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return n.createElement(h, { errorMessage: v, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: r, userScreenName: r, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                o = r(111677),
                i = r.n(o),
                a = r(891198),
                s = r(98538);
            class l extends n.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: r, screenName: o, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        w = `/${o}/verified_followers`;
                    return n.createElement(s.Z.Group, { style: l }, n.createElement(s.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, n.createElement(s.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), n.createElement(s.Z.Label, null, i().daf8a75f({ count: t })))), n.createElement(s.Z, { count: e, link: u ? w : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, n.createElement(s.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), n.createElement(s.Z.Label, null, i().ad9b5988({ count: e })))), m && void 0 !== d && n.createElement(s.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, n.createElement(s.Z.Value, null, i().a9980948({ formattedCount: (0, a.wl)(d) })), n.createElement(s.Z.Label, null, i().ce44a35c({ count: d })))), p && c && n.createElement(s.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: r }, n.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, n.createElement(s.Z.Value, null, i().id949f68({ formattedCount: (0, a.wl)(c) })), n.createElement(s.Z.Label, null, i().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        428259: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        883437: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        258292: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39.12a01bea.js.map

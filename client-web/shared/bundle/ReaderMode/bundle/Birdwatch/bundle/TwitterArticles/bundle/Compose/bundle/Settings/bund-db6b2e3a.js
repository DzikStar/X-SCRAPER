"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a", "shared~bundle.ReportCenter~bundle.SafetyCenter-09920e85"],
    {
        995145: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(325686),
                i = n(674132),
                s = n.n(i),
                a = n(731708),
                l = n(235902),
                d = n(638009),
                c = n(470397),
                u = n(966582),
                m = n(392237),
                p = n(418462),
                w = n(767385),
                h = n(782261);
            const g = s().g5662c95;
            function C({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: i, onPress: s, promotedContent: C, quotedTweetTombstoneInfo: b, renderActionMenu: T, renderActionsBar: v, renderCallToAction: y, renderEditCallout: E, renderEducation: k, renderHighlightedUserLabel: _, renderPromotedDetails: S, renderPromotedUserProfileCard: x, renderPromotionStatusBadge: A, renderReplyContext: M, renderRichContent: I, renderSocialContext: P, renderStats: Z, renderText: U, renderTimestamp: L, renderTombstone: B, renderUserAvatar: N, renderUserFollowIndicator: R, renderUserName: F, socialContext: D, staticLinkConfig: H, testID: V, tweet: q, withBottomLine: W, withTopLine: z, withUnreadStyles: O }) {
                const { LinkConfigProvider: Q, a11yIdList: $, a11yIds: K, props: Y } = (0, p.a)({ conversationTreeMetadata: e, link: t, onBlur: n, onFocus: i, onPress: s, promotedContent: C, quotedTweetTombstoneInfo: b, renderActionMenu: T, renderActionsBar: v, renderCallToAction: y, renderEditCallout: E, renderEducation: k, renderHighlightedUserLabel: _, renderPromotedDetails: S, renderPromotedUserProfileCard: x, renderPromotionStatusBadge: A, renderReplyContext: M, renderRichContent: I, renderSocialContext: P, renderStats: Z, renderText: U, renderTimestamp: L, renderTombstone: B, renderUserAvatar: N, renderUserFollowIndicator: R, renderUserName: F, socialContext: D, staticLinkConfig: H, testID: V, tweet: q, withBottomLine: W, withTopLine: z, withUnreadStyles: O }),
                    j = h.Z.getOriginalTweet(Y.tweet),
                    { permalink: G } = j,
                    J = j.tombstoneInfo || Y.tweet.tombstoneInfo,
                    X = u.Z.isPromoted(Y.promotedContent),
                    ee = l.ZP.useProps(),
                    te = ee.withEdgeToEdgeContent(),
                    ne = ee.withEdgeToEdgeTweetAnatomy(),
                    re = j.isEdited && ee.withEditCallout(),
                    oe = j.isStaleEdit && ee.isEditTweetConsumptionEnabled(),
                    ie = Y.conversationTreeMetadata?.ancestorConnector,
                    se = Y.conversationTreeMetadata?.indents,
                    ae = r.useContext(d.ZP),
                    le = Y.conversationTreeMetadata ? r.createElement(a.ZP, { id: K.conversationLevel, style: m.default.visuallyHidden }, g({ conversationTreeDepth: Y.conversationTreeMetadata.depth.toString() })) : null,
                    de = Y.renderTombstone({ actionLink: G, actionText: J?.richRevealText?.text, style: f.tombstone });
                return r.createElement(
                    Q,
                    null,
                    r.createElement(
                        w.Z,
                        {
                            a11yDomIds: $,
                            actionMenu: Y.renderActionMenu(),
                            avatar: Y.renderUserAvatar(),
                            footer: Y.renderCallToAction(),
                            header: Y.renderSocialContext({ iconSize: "large", iconStyle: f.socialContextIcon, style: f.socialContext, weight: "bold" }),
                            indents: se,
                            link: Y.link ? ae.withAnchorless(Y.link) : void 0,
                            onBlur: () => Y.onBlur?.(),
                            onFocus: () => Y.onFocus?.(),
                            onPress: (e) => Y.onPress?.(e),
                            testID: Y.testID,
                            userFollowIndicators: Y.renderUserFollowIndicator(),
                            userLabel: Y.renderHighlightedUserLabel(),
                            userName: Y.renderUserName({
                                screenNameSuffix: X
                                    ? null
                                    : (() => {
                                          const { renderTimestamp: e } = Y,
                                              t = e({ id: void 0 });
                                          return !j.isStaleEdit && re ? r.createElement(c.Z, null, t) : t;
                                      })(),
                                withStackedLayout: ne,
                            }),
                            withBottomLine: Y.withBottomLine,
                            withElbow: se ? "side" === ie : void 0,
                            withFullWidthChildren: te,
                            withTopLine: Y.withTopLine,
                            withUnreadStyles: Y.withUnreadStyles,
                        },
                        le,
                        null !== de ? de : r.createElement(r.Fragment, null, Y.renderReplyContext({ style: f.replyContext }), Y.renderArticleCard(), Y.renderText({ color: oe ? "gray700" : "text", linkColor: oe ? "gray700" : "link", size: "body", style: te && f.edgeToEdgeTextSpacer }), Y.renderRichContent({ withRoundMediaCorners: !te, style: f.richContent }), Y.renderPromotedUserProfileCard({ style: f.promotedUserCard })),
                        Y.renderEducation({ displayStyle: "inline" }),
                        j.isStaleEdit && re && r.createElement(o.Z, { style: f.tweetEditCallout }, Y.renderEditCallout({ textMode: "inline", textSize: "subtext2" })),
                        Y.renderStats(),
                        Y.renderActionsBar({ actionSize: "normal", displayStyle: "inline", style: f.actionsBar, withCount: !0 }),
                        Y.renderPromotedDetails({ style: f.promotedDetails, promotedContent: Y.promotedContent, withoutDisclaimerDetails: !0 }),
                        Y.renderPromotionStatusBadge({ id: K.promotionStatusLabel }),
                    ),
                );
            }
            (C.ActionMenu = p.q.ActionMenu), (C.ActionsBar = p.q.ActionsBar), (C.ArticleCard = p.q.ArticleCard), (C.Education = p.q.Education), (C.EditCallout = p.q.EditCallout), (C.HighlightedUserLabel = p.q.HighlightedUserLabel), (C.PromotedDetails = p.q.PromotedDetails), (C.PromotedUserProfileCard = p.q.PromotedUserProfileCard), (C.ReplyContext = p.q.ReplyContext), (C.RichContent = p.q.RichContent), (C.SocialContext = p.q.SocialContext), (C.Text = p.q.Text), (C.Timestamp = p.q.Timestamp), (C.Tombstone = p.q.Tombstone), (C.UserAvatar = p.q.UserAvatar), (C.UserFollowIndicator = p.q.UserFollowIndicator), (C.UserName = p.q.UserName);
            const f = m.default.create((e) => ({ actionsBar: { marginTop: e.spaces.space12 }, edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 }, replyContext: { marginBottom: e.spaces.space2 }, richContent: { marginTop: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space4 }, socialContextIcon: { marginBottom: e.spaces.space4 }, promotedDetails: { marginTop: e.spaces.space12 }, promotedDetailsBelowHeader: { marginBottom: e.spaces.space8 }, promotedUserCard: { marginTop: e.spaces.space8 }, tombstone: { marginVertical: e.spaces.space4 }, tweetEditCallout: { marginTop: e.spaces.space8 } }));
        },
        189655: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                i = n(952428),
                s = n(392237),
                a = n(266704);
            const l = s.default.create((e) => ({ root: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large } })),
                d = function ({ followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: s, link: d, onClick: c, onScreenNameClick: u, promotedContent: m, style: p, userDescription: w, userId: h, userName: g, userScreenName: C }) {
                    return r.createElement(o.Z, { style: p }, r.createElement(i.Z, { link: d, onClick: c, style: l.root }, r.createElement(a.Z.Promoted, { followButton: e, isUserProtected: t, isUserVerified: n, knownFollowers: s, onScreenNameClick: u, promotedContent: m, userDescription: w, userId: h, userName: g, userScreenName: C })));
                };
        },
        774526: (e, t, n) => {
            n.d(t, { Y: () => K, Z: () => F });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                s = n(674132),
                a = n.n(s),
                l = n(2138),
                d = n(370751),
                c = n(837880),
                u = n(12686),
                m = n(276563),
                p = n(235902),
                w = n(847224),
                h = n(950152),
                g = n(666305),
                C = n(834324),
                f = n(309854),
                b = n(782578),
                T = n(352924),
                v = n(521288),
                y = n(912838),
                E = n(308158),
                k = n(287826),
                _ = n(392237),
                S = n(54989),
                x = n(449945),
                A = n(103737),
                M = n(782261),
                I = n(586035),
                P = n(454363);
            const Z = 510,
                U = 596,
                L = 10,
                B = 16 / 9,
                N = "timeline",
                R = () => {
                    const e = o.useRef(null),
                        [t, n] = o.useState(506);
                    o.useLayoutEffect(() => {
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
            function F(e) {
                const { cardCacheLocationKey: t, forwardPivotInfo: n, id: s, inlineCalloutInfo: a, innerForwardPivotInfo: l, innerNudges: c, isMediaMaxHeightEnabled: g, loggedInUserId: f, onCardLinkClick: E, onQuoteTweetClick: k, onQuoteTweetMediaClick: _, onQuotedTweetAvatarClick: S, onQuotedTweetScreenNameClick: x, preventVideoPlayback: A, promotedContent: I, quoteTweetSingleImageMinAspectRatio: P, quoteTweetSocialContextProps: L, quotedTweetTombstoneInfo: B, renderJetfuelFrame: F, renderQuoteTweetTombstone: H, singleImageMaxAspectRatio: O, style: Q, tweet: j, withActionsDisabled: G, withAltTextBadge: J, withCardLinks: X, withCenterCrop: ee, withCondensedQuoteTweet: te, withHalvedMediaSize: ne, withQuoteTweetBirdwatchPivot: re, withQuoteTweetHeaderLinks: oe, withQuoteTweetLink: ie, withQuoteTweetMedia: se, withUserHoverCard: ae } = V(e),
                    [le, de] = R(),
                    ce = p.ZP.useProps(),
                    ue = ce.withEdgeToEdgeContent(),
                    me = (0, T.b)(),
                    pe = (0, T.b)(),
                    we = M.Z.getOriginalTweet(j),
                    he = ce.compactMediaMaxHeight(),
                    ge = () => q(we.quoted_status),
                    Ce = () => {
                        const e = ge();
                        if (!e || !e.original_info) return;
                        const { height: t, width: n } = e && e.original_info;
                        return (0, b.q)(P, O, { width: n, height: t });
                    },
                    fe = () => {
                        const t = M.Z.getOriginalTweet(j),
                            n = z(e),
                            r =
                                g &&
                                !n &&
                                (() => {
                                    const e = Ce();
                                    return !!e && e < 1;
                                })() &&
                                le,
                            i = (() => {
                                const e = ge();
                                if (e) return W(e);
                            })();
                        return t && t.is_quote_status ? o.createElement(v.Z, { forwardPivotInfo: t.quoted_status?.softIntervention || l, id: pe, isCondensed: te, loggedInUserId: f, mediaContentStyles: !te && Y({ withEdgeToEdgeContent: ue, withHalvedMediaSize: ne, backgroundColor: i, withMaxHeight: r, isInQuoteTweet: !0 }), mediaMaxHeight: r ? (ue ? U : he > 0 ? he : Z) : void 0, nudges: c, onAvatarClick: S, onMediaClick: _, onPress: k, onScreenNameClick: x, preventVideoPlayback: A, promotedContent: I, shouldRenderIfBlocked: !!B, shouldShowAltLabelAlways: J, singleImageMaxAspectRatio: O, singleImageMinAspectRatio: P, socialContextProps: L, tweet: t.quoted_status, withActionsDisabled: G, withBirdwatchPivot: re, withCenterCrop: ee, withHeaderLinks: oe, withLink: ie, withMediaAsTextLinks: !se, withUserHoverCard: ae }) : null;
                    },
                    be = () => !!I?.adMetadataContainer?.unifiedCardOverride,
                    Te = F(),
                    ve = ((e, t) => {
                        if (!z(e) || $(e)) return null;
                        let n;
                        if (t.extended_entities?.media) {
                            const r = t.extended_entities.media;
                            if (e.filterOutInlineMedia) {
                                const e = (t.note_tweet?.inline_media || []).map((e) => e.media_id),
                                    o = (0, d.Z)(e);
                                n = r.filter((e) => !o.has(e.id_str));
                            } else n = r;
                        }
                        return o.createElement(K, (0, r.Z)({}, e, { mediaDetails: n }));
                    })(e, we),
                    ye = (() => {
                        if (n && n.displayType === h.x.SoftIntervention) {
                            const { displayType: e, landingUrl: t, softInterventionDisplayType: r, text: i } = n;
                            return o.createElement(w.Z, { displayType: e, isTweetNonCompliant: "non_compliant" === j.limited_actions, landingUrl: t, softInterventionDisplayType: r, text: i, tweetId: j.id_str });
                        }
                    })(),
                    Ee = a ? o.createElement(C.Z, a) : null,
                    ke = (() => {
                        if (!we || Te) return null;
                        if (
                            (() => {
                                if (be()) return !1;
                                const e = we.card?.binding_values?.unified_card?.string_value;
                                return !!e && (e.includes('"3_1696305594007801856"') || e.includes('"3_1485707239990054912"'));
                            })()
                        )
                            return null;
                        const n = m.default.getLegacyOrUnifiedCard(we, I, { isDynamicFollowCardPresentAndEnabled: $(e), isDynamicProductCardPresentAndEnabled: be(), withCardLinks: X, hasMedia: z(e) }),
                            i = M.Z.isArticlePost(we);
                        return n && !(i && "NoCard" === n?.unifiedCard?.card_fetch_state) ? o.createElement(u.Z, (0, r.Z)({}, n, { cardContext: { locationKey: t || N, tweetId: we.id_str, tweetPermalink: we.permalink, tweetUserId: we.user.id_str, viewerUserId: f, withActionsDisabled: G, mediaVisibilityResults: we.mediaVisibilityResults, grokShareAttachment: we.grok_share_attachment }, id: me, onCardLinkClick: E, preventVideoPlayback: A, promotedContent: I })) : null;
                    })(),
                    _e = ((e) => {
                        const { possibly_sensitive: t, quoted_status: n } = we;
                        return ((!!n?.possibly_sensitive && !!(we.quoted_status && we.quoted_status.entities && we.quoted_status.entities.media && we.quoted_status.entities.media.length > 0 && se) && !B) || (t && !m.default.isPollCard(we.card?.name))) && e ? o.createElement(y.Z, { revealableTombstoneConfig: y.Z.sensitiveMediaTombstoneConfig }, e) : e;
                    })(
                        (() => {
                            const e = fe();
                            return e && B ? H({ children: e, config: B, id: pe }) : e;
                        })() || ke,
                    );
                if (!(ve || _e || ye || Te)) return null;
                return o.createElement(i.Z, { "aria-labelledby": `${pe} ${me}`, id: s, ref: de, style: [D.gap, Q] }, ve || Ee || ye ? o.createElement(i.Z, { style: D.mediaPivotGap }, ve, Ee, ye) : null, z(e) ? null : Te, _e);
            }
            const D = _.default.create((e) => ({ gap: { gap: e.spaces.space4 }, jetfuelCard: { paddingTop: e.spaces.space2 }, mediaPivotGap: { gap: e.spaces.space4 }, explicitlySized: { alignSelf: "flex-start" }, edgeToEdgeSingleVideoWithMaxHeight: { display: "block", start: "50%", translate: `calc(-50% + ${e.spacesPx.space16}px)` }, negativeMargin: { marginHorizontal: -e.spacesPx.space16 }, centerItems: { alignItems: "center" } }));
            function H({ children: e, config: t, id: n }) {
                const r = t.richRevealText?.text || t.revealText,
                    s = t.richText ? o.createElement(E.Z, { align: "Center" === t.richText.alignment ? "center" : void 0, dir: t.richText.rtl ? "rtl" : "ltr", entities: t.richText.entities, onEntityClick: t.richText.onEntityClick, text: t.richText.text }) : t.text;
                return o.createElement(i.Z, { "aria-label": a().bb5c5864, id: n }, r ? o.createElement(x.Z, { label: s, revealLabel: r }, e) : o.createElement(S.Z, null, s));
            }
            function V(e) {
                const { quoteTweetSingleImageMinAspectRatio: t = B, renderQuoteTweetTombstone: n = H, renderJetfuelFrame: r = () => null, singleImageMaxAspectRatio: o = L, singleImageMinAspectRatio: i = B, withAltTextBadge: s = !0, withCardLinks: a = !1, withCenterCrop: l = !1, withHalvedMediaSize: d = !1, withQuoteTweetMedia: c = !0, withQuoteTweetBirdwatchPivot: u = !1, withTweetMedia: m = !0 } = e;
                return { ...e, quoteTweetSingleImageMinAspectRatio: t, renderJetfuelFrame: r, renderQuoteTweetTombstone: n, singleImageMaxAspectRatio: o, singleImageMinAspectRatio: i, withAltTextBadge: s, withCardLinks: a, withCenterCrop: l, withHalvedMediaSize: d, withQuoteTweetMedia: c, withQuoteTweetBirdwatchPivot: u, withTweetMedia: m };
            }
            function q(e) {
                const t = e?.extended_entities?.media;
                if (1 === t?.length && "photo" === t[0].type) return t[0];
            }
            function W(e) {
                const t = f.Z.getBackgroundColor(e);
                if (t) return `rgb(${t.red},${t.green},${t.blue})`;
            }
            function z(e) {
                const t = V(e),
                    n = M.Z.getOriginalTweet(t.tweet);
                return M.Z.hasMedia(n, !t.withTweetMedia);
            }
            const O = (e) => {
                    const t = e?.extended_entities?.media;
                    return 1 === t?.length && "video" === t[0].type;
                },
                Q = (e, t, n) => [{ maxHeight: t, maxWidth: t * e, aspectRatio: e, boxSizing: "content-box" }, n && D.edgeToEdgeSingleVideoWithMaxHeight];
            function $(e) {
                const t = V(e);
                return "true" === t.promotedContent?.experiment_values?.pac_in_timeline && !!t.promotedContent?.adMetadataContainer?.dynamicCardContent;
            }
            function K(e) {
                const { mediaDetails: t, ...n } = e,
                    { displayMediaMetadata: r, enableKeyboardShortcuts: s, forwardPivotInfo: a, isMediaMaxHeightEnabled: l, loggedInUserId: d, mediaAltTranslations: u, mediaCacheLocationKey: w, nudges: h, onGrokClick: g, onMediaClick: C, onMediaTagsClick: f, onPlaybackStarted: T, preventVideoPlayback: v, promotedContent: y, renderPrerollActionMenu: E, showAltTranslation: _, singleImageMaxAspectRatio: S, singleImageMinAspectRatio: x, withAltTextBadge: L, withCenterCrop: B, withHalvedMediaSize: F, withMediaTagsIcon: H, withRoundMediaCorners: $ } = V(n),
                    [K, j] = R(),
                    G = p.ZP.useProps(),
                    J = G.withEdgeToEdgeContent(),
                    X = M.Z.getOriginalTweet(e.tweet),
                    ee = G.isVerticalVideoNoBlackBars(),
                    te = O(X),
                    ne = !!q(X),
                    re =
                        (function (e, t, n) {
                            const r = V(t);
                            if (!z(r)) return;
                            const o = e?.extended_entities?.media,
                                i = 1 === o?.length ? o[0] : void 0;
                            if (!i || (!i.original_info && !i.video_info)) return;
                            const { height: s, width: a } = { ...i.original_info, ...i.video_info },
                                l = a / s;
                            return n ? (0, c.Z)(l, r.singleImageMinAspectRatio, r.singleImageMaxAspectRatio) : a / s;
                        })(X, e, ne) ?? 1,
                    oe = ee
                        ? l && re < 1 && (te || K)
                        : l &&
                          (function (e, t) {
                              const n = V(t);
                              if (!z(n)) return !1;
                              const r = q(e);
                              if (!r || !r.original_info) return !1;
                              const { height: o, width: i } = r && r.original_info;
                              return (0, b.q)(n.singleImageMinAspectRatio, n.singleImageMaxAspectRatio, { width: i, height: o }) < 1;
                          })(X, e) &&
                          K,
                    ie = G.compactMediaMaxHeight(),
                    se = J ? U : ie > 0 ? ie : Z,
                    ae = (function (e) {
                        const t = q(e);
                        if (t) return W(t);
                    })(X);
                if (I.B(X)) return o.createElement(P.Z, { tweet: X });
                if (X.card && m.default.isSpaceCard(X.card.name)) return o.createElement(i.Z, { style: D.gap }, o.createElement(k.Z, { audioSpaceId: X.card.binding_values.id?.string_value, clipMetadata: X.card.binding_values.clip_metadata?.string_value }));
                const le = l && ie > 0 && (ne || te),
                    de = se * (ne || ee ? re : Math.max(1, re));
                return o.createElement(i.Z, { ref: j, style: le && { maxWidth: de } }, o.createElement(A.Z, { authorId: X.user.id_str, authorScreenName: X.user.screen_name, cacheLocationKey: w || N, customHoverBackgroundColor: oe && J ? ae : void 0, displayMediaAttribution: !0, displayMediaMetadata: r, enableKeyboardShortcuts: s, forwardPivotInfo: a, hasSensitiveMedia: X.possibly_sensitive, loggedInUserId: d, mediaAltTranslations: u, mediaContentStyles: [Y({ withEdgeToEdgeContent: J, withHalvedMediaSize: F, backgroundColor: ae, withMaxHeight: oe }), ee && oe && te && Q(re, se, J)], mediaDetails: t, mediaMaxHeight: oe ? se : void 0, mediaTagsLink: `${X.permalink}/media_tags`, mediaVisibilityResults: X.mediaVisibilityResults || e.tweet.mediaVisibilityResults, nudges: h, onClick: C, onClickMediaTags: f, onGrokClick: g, onPlaybackStarted: T, parentTweetId: e.tweet.id_str, preventPlayback: v, promotedContent: y, renderPrerollActionMenu: E, shouldShowAltLabelAlways: L, showAltTranslation: _, showBorder: !(oe && J), showRoundCorners: $, singleImageMaxAspectRatio: S, singleImageMinAspectRatio: x, style: oe && !J && (!ee || !te) && D.explicitlySized, tweetCreatedAt: X.created_at, tweetId: X.id_str, tweetText: X.text, withCenterCrop: B, withHalvedMediaSize: F, withMediaTagsIcon: H, withPostPlayback: !0 }));
            }
            function Y(e) {
                const { backgroundColor: t, isInQuoteTweet: n = !1, withEdgeToEdgeContent: r, withHalvedMediaSize: o, withMaxHeight: i } = e;
                return [r && !n && !o && D.negativeMargin, i && r && [D.centerItems, { backgroundColor: t }]];
            }
        },
        767385: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                s = n(470397),
                a = n(392237),
                l = n(84275);
            const d = a.default.create((e) => ({ userNameRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "start" }, actionMenuContainer: { marginStart: e.spaces.space8 }, editedIcon: { marginTop: e.spaces.space8 }, userLabelRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space2 }, userInfo: { marginBottom: e.spaces.space2 } })),
                c = (e) => {
                    const { actionMenu: t, editedIcon: n, timestamp: a, userFollowIndicators: c, userLabel: u, userName: m, ...p } = e,
                        w = o.createElement(i.Z, { style: d.userInfo }, o.createElement(i.Z, { style: d.userNameRow }, o.createElement(s.Z, null, m, a), t ? o.createElement(i.Z, { style: d.actionMenuContainer }, t) : null), u ? o.createElement(i.Z, { style: d.userLabelRow }, u) : null, c ? o.createElement(i.Z, { style: d.userLabelRow }, c) : null);
                    return o.createElement(l.Z, (0, r.Z)({}, p, { usernameContent: w }));
                };
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => T });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                s = n(235902),
                a = n(649846),
                l = n(529509),
                d = n(392237),
                c = n(823161),
                u = n(238406),
                m = n(366635),
                p = n(646797);
            const w = () => !1;
            class h extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: i } = this.props,
                                { followersYouKnow: s } = e;
                            if (s && t && n) {
                                const { avatarUrls: e, count: t, names: s } = n;
                                return t ? r.createElement(o.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && r.createElement(l.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: s, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(s.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(o.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(o.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(o.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, promotedContent: n, userAvatarSize: i, userAvatarUri: a, userScreenName: l } = this.props,
                        { avatar: d } = e;
                    return r.createElement(o.Z, { style: g.row }, r.createElement(s.ZP.Provider, { value: { userAvatarLabel: w } }, r.createElement(c.default, { onClick: t, promotedContent: n, screenName: l, size: i, uri: d ? a : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: i } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(o.Z, { style: g.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : r.createElement(o.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: o, onScreenNameClick: i, promotedContent: s, userHighlightedLabel: a, userName: l, userScreenName: d, userTranslatorType: c, userVerifiedType: u, userWithFollowsYou: p, withNameWrap: w } = this.props,
                        { badges: h, followIndicator: g, fullName: C } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: a, badgeContext: "account", isBlueVerified: h ? t : void 0, isProtected: h ? n : void 0, isVerified: h ? o : void 0, name: C ? l : d, nameSize: "headline2", onLinkClick: i, promotedContent: s, screenName: d, translatorType: h ? c : void 0, verifiedType: h ? u : void 0, withFollowsYou: g && p, withLink: !0, withNameWrap: w, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(a.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(o.Z, { style: g.marginTop4 }, r.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: i, userWithheldDescription: s, userWithheldEntities: a } = this.props,
                        { description: l } = e;
                    return l && t && n && i ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(u.Z, { description: t, entities: n, userId: i, withheldDescription: s, withheldEntities: a })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: i, userFollowersCount: s, userFriendsCount: a, userScreenName: l } = this.props,
                        { stats: d } = e;
                    return d ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(p.Z, { followersCount: s, friendsCount: a, onPress: n, screenName: l, subscriptionsCount: i, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            h.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var C = n(807896);
            var f = n(674132);
            const b = n.n(f)().ef633578;
            class T extends r.PureComponent {
                render() {
                    return r.createElement(h, this.props);
                }
            }
            (T.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: o, knownFollowers: i, onAvatarClick: s, onScreenNameClick: a, promotedContent: l, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    w = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(h, (0, C.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: w.isUserStatsWithLink, isUserVerified: o, knownFollowers: i, onAvatarClick: s, onScreenNameClick: a, promotedContent: l, userAvatarUri: w.profile_image_url_https, userDescription: d, userEntities: w.entities, userFollowersCount: w.followers_count, userFriendsCount: w.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: w.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (T.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(h, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: n, userScreenName: n, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(674132),
                i = n.n(o),
                s = n(891198),
                a = n(98538);
            class l extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: o, style: l, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        w = `/${o}/verified_followers`;
                    return r.createElement(a.Z.Group, { style: l }, r.createElement(a.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(a.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, s.wl)(t) })), r.createElement(a.Z.Label, null, i().daf8a75f({ count: t })))), r.createElement(a.Z, { count: e, link: u ? w : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(a.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, s.wl)(e) })), r.createElement(a.Z.Label, null, i().ad9b5988({ count: e })))), m && void 0 !== d && r.createElement(a.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(a.Z.Value, null, i().a9980948({ formattedCount: (0, s.wl)(d) })), r.createElement(a.Z.Label, null, i().ce44a35c({ count: d })))), p && c && r.createElement(a.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(a.Z.Value, null, i().id949f68({ formattedCount: (0, s.wl)(c) })), r.createElement(a.Z.Label, null, i().hb608cfc({ count: c })))));
                }
            }
            l.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a.f52a017a.js.map

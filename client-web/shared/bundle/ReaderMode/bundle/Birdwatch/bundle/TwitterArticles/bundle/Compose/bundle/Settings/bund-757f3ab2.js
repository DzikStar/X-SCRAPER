"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"],
    {
        808692: (e, t, i) => {
            i.d(t, { ZP: () => Rt });
            var n = i(807896),
                r = (i(543673), i(240753), i(128399), i(136728), i(571372), i(202784)),
                o = i(878052),
                s = i(466999),
                a = i(325686),
                l = i(392237),
                d = i(782261),
                c = i(966582),
                h = i(995145),
                u = i(32471),
                p = i(488684),
                _ = i(235902),
                m = i(766661),
                w = i(459667),
                g = i(471754),
                T = i(891198),
                b = i(352924),
                C = i(16037),
                k = i(731708),
                f = i(137181),
                v = i(853435),
                y = i(774526),
                E = i(276563),
                x = i(278957),
                S = i(530338),
                I = i(40610),
                Z = i(537392),
                P = i(40644),
                A = i(811176),
                L = i(366985),
                R = i(767385),
                U = i(834324),
                F = i(966886),
                M = i(528647),
                B = i(649846),
                H = i(655317),
                N = i(98538),
                D = i(650028),
                G = i(409981),
                O = i(154003),
                V = i(111677),
                W = i.n(V),
                q = i(368761),
                z = i(500040),
                Q = i(99223),
                $ = i(194417),
                j = i(761744),
                K = i(143778),
                J = i(516951),
                Y = i(323265),
                X = i(443781),
                ee = i(23134),
                te = i(457566),
                ie = i(668843),
                ne = i(686689),
                re = i(988245),
                oe = i(177371),
                se = i(41803),
                ae = i(818065),
                le = i(198052),
                de = i(900813),
                ce = i(306677),
                he = i(778955),
                ue = i(533128),
                pe = i(957818),
                _e = i(103574),
                me = i(132750),
                we = i(672890),
                ge = i(880647),
                Te = i(655352),
                be = i(163889),
                Ce = i(943245),
                ke = i(383186),
                fe = i(507824),
                ve = i(946409),
                ye = i(649879),
                Ee = i(329491),
                xe = i(293115),
                Se = i(395067),
                Ie = i(479506),
                Ze = i(903019),
                Pe = i(666932),
                Ae = i(788993),
                Le = i(954300),
                Re = i(725405),
                Ue = i(312771),
                Fe = i(189244),
                Me = i(14544),
                Be = i(979512),
                He = i(545389),
                Ne = i(169576),
                De = i(727828),
                Ge = i(163301),
                Oe = i(972198),
                Ve = i(989631),
                We = i(246134),
                qe = i(494569),
                ze = i(756632),
                Qe = i(994057),
                $e = i(746795),
                je = i(400300),
                Ke = i(184482),
                Je = i(587653),
                Ye = i(494718),
                Xe = i(741105),
                et = i(592711),
                tt = i(447373),
                it = i(585041),
                nt = i(131133),
                rt = i(764372),
                ot = i(914564),
                st = i(724573);
            const at = l.default.theme.aspectRatios.maxTimelineImage,
                lt = l.default.theme.aspectRatios.minTimelineImage,
                dt = ["magenta500", "orange500", "purple500"],
                ct = W().f277e94a,
                ht = W().ee79367b,
                ut = W().a2a3824a,
                pt = W().ec6907ba,
                _t = W().d9587114,
                mt = W().b7b86c3c,
                wt = W().a407814e,
                gt = W().i46ee3f0,
                Tt = W().e18cb87c,
                bt = W().jade381b,
                Ct = W().d725a289,
                kt = W().ffe16626,
                ft = { element: "user_recommendation" },
                vt = W().i859a9d4,
                yt = W().jc81f6a7,
                Et = W().g521abc6,
                xt = W().hea3f8ac,
                St = W().a09331e0,
                It = W().e3eceda6,
                Zt = W().a653f08f,
                Pt = W().dc0c8266;
            class At extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._defaultInlinePromptRef = r.createRef()),
                        (this._iconContainerRef = r.createRef()),
                        (this._isEdgeToEdgeEnabled = this.context.featureSwitches.isTrue("media_edge_to_edge_content_enabled")),
                        (this._withAdLabel = "right_tweet_header_ad_label" === this.context.featureSwitches.getStringValue("promoted_badge_placement_position")),
                        (this._openGrok = async () => {}),
                        (this._random = -1),
                        (this._onGrokClick = (e) => {
                            this._openGrok(e);
                        }),
                        (this._getWithTopLine = () => {
                            const { conversationTreeMetadata: e, isFocal: t, tweet: i } = this.props,
                                n = d.Z.getOriginalTweet(i),
                                r = this._getConversationPosition(),
                                o = this._getIsConversationStart(),
                                s = e && e.ancestorConnector,
                                a = e && e.indents,
                                l = (t && !!n.in_reply_to_status_id_str) || (r && !o);
                            return a ? "top" === s : l;
                        }),
                        (this._getWithBottomLine = () => {
                            const { conversationTreeMetadata: e, tweet: t } = this.props,
                                i = d.Z.getOriginalTweet(t),
                                n = this._getConversationPosition(),
                                r = e && e.indents,
                                o = e && e.descendantConnector,
                                s = n && !n.isEnd;
                            return r ? o : !(!i.in_reply_to_status_id_str && "ancestor" !== n?.position && this._isEdgeToEdgeEnabled) && s;
                        }),
                        (this._isEditTweetConsumptionEnabled = () => this.context.featureSwitches.isTrue("responsive_web_edit_tweet_enabled") || this.context.featureSwitches.isTrue("subscriptions_feature_labs_1004")),
                        (this._isTweetInConversation = () => {
                            const e = this._getWithTopLine(),
                                t = this._getWithBottomLine();
                            return !!e || !!t;
                        }),
                        (this._getFeatureConfigurationContextProviderValue = () => {
                            const { isInEditHistory: e, onMediaHashtagHighlightClick: t, promotedContent: i, promotedContentAdvertiser: n, tweet: r } = this.props,
                                { featureSwitches: o } = this.context,
                                s = { highlightedHashtag: () => (0, et.f5)(r, o, c.Z.isPromoted(i)), avatarURIForHashtagHighlight: () => (0, et.xR)(n, o), shouldUseSmallFontForHashtagHighlight: () => o.isTrue("responsive_web_hashtag_highlight_use_small_font"), onMediaHashtagHighlightClick: t },
                                a = c.Z.isPromoted(i) ? () => !1 : void 0,
                                l = o.isTrue("trusted_friends_consumption_enabled"),
                                d = o.isTrue("trusted_friends_tweet_creation_enabled"),
                                h = { trustedFriendsEnabled: () => l, trustedFriendsCreationEnabled: () => d },
                                u = { c9sEnabled: () => o.isTrue("c9s_enabled"), c9sHashtagsEnabled: () => !0 },
                                p = !this.props.isFocal && this._isTweetInConversation();
                            return { ...s, ...h, ...u, withEditCallout: () => !e && this._isEditTweetConsumptionEnabled(), withEdgeToEdgeContent: () => !p && o.isTrue("media_edge_to_edge_content_enabled"), withEdgeToEdgeTweetAnatomy: () => o.isTrue("media_edge_to_edge_content_enabled"), withMediaCarousel: a, isCopyrightDisputeLinkEnabled: () => o.isTrue("ecd_dispute_form_link_enabled"), isEditTweetConsumptionEnabled: this._isEditTweetConsumptionEnabled, isVerticalVideoNoBlackBars: () => o.isTrue("rweb_video_vertical_aspect_ratio_enabled"), fosnrSoftInterventionsEnabled: () => o.isTrue("freedom_of_speech_not_reach_fetch_enabled") && o.isTrue("freedom_of_speech_not_reach_pivot_enabled"), sensitiveMediaWarningsEnabled: () => o.isTrue("sensitive_tweet_warnings_enabled"), socialContextRefreshEnabled: () => this.context.featureSwitches.isTrue("social_context_and_topic_context_refresh_alignment_enabled"), trustedFriendsInfo: () => (l && l ? r.trusted_friends_info : void 0), withVodTweetDetailAttribution: () => o.isTrue("vod_attribution_tweet_detail_pivot_enabled"), mediaVisibilityResultsEnabled: () => o.isTrue("rweb_mvr_blurred_media_interstitial_enabled") };
                        }),
                        (this._renderHighlightedUserLabel = (e) => {
                            const { hideHighlightedUserLabel: t } = this.props;
                            return t ? null : r.createElement(h.Z.HighlightedUserLabel, e);
                        }),
                        (this._renderPromotedDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, onPromotedDisclaimerLearnMoreClick: t, onPromotedIndicatorClick: i, promotedContent: n, promotedContentAdvertiser: o, tweet: s } = this.props;
                            return t && e && i ? r.createElement(u.Z, { contentAuthorId: s.user.id_str, onPoliticalSponsorWebsiteClick: e, onPromotedDisclaimerLearnMoreClick: t, onPromotedIndicatorClick: i, promotedContent: n, promotedContentAdvertiser: o, screenName: s.user.screen_name, style: Lt.promotedDetails, testID: je.Z.promotedIndicator }) : null;
                        }),
                        (this._renderUserHoverCard = (e) => r.createElement(p.Z, (0, n.Z)({}, e, { onAvatarClick: this.props.onAvatarClick }))),
                        (this._getPromoteButtonOnPress = (e) => {
                            const { onPromoteAgainButtonClick: t, onPromoteButtonClick: i } = this.props;
                            return "EligibleWithPreviousCampaign" === e ? t : i;
                        }),
                        (this._renderBirdwatchPivot = () => {
                            const { tweet: e, withBirdwatchPivots: t } = this.props,
                                i = d.Z.getOriginalTweet(e);
                            return i.birdwatch_pivot && t && this.context.featureSwitches.isTrue("responsive_web_birdwatch_pivots_enabled") ? r.createElement(_.ZP.Provider, { value: { birdwatchPivotsEnabled: () => this.context.featureSwitches.isTrue("responsive_web_birdwatch_pivots_enabled") } }, r.createElement(m.Z, (0, n.Z)({}, i.birdwatch_pivot, { tweetId: i.id_str }))) : null;
                        }),
                        (this._renderGrokFollowUps = () => !!this.context.featureSwitches.isTrue("responsive_web_grok_analyze_post_followups_enabled") && r.createElement(qe.Z, { isFocal: this.props.isFocal, tweet: this.props.tweet })),
                        (this._renderAtGrokPromo = () => {
                            const { tweet: e } = this.props,
                                t = this.context.featureSwitches.getStringValue("responsive_web_grok_atgrok_id", "1720665183188922368"),
                                i = this.context.featureSwitches.getNumberValue("responsive_web_grok_atgrok_sample_rate", 0.05);
                            if (!(e.user.id_str === t)) return;
                            -1 === this._random && (this._random = Math.random());
                            const n = !!e.in_reply_to_status_id_str,
                                o = e.in_reply_to_user_id_str === t,
                                s = this._random <= i;
                            return !!!e.card?.url && n && !o && s ? r.createElement(Ht, null) : null;
                        }),
                        (this._renderGrokAnalysisPivotAndReplySortingButton = () => {
                            const { forwardPivotInfo: e, tweet: t } = this.props,
                                i = t.id_str,
                                n = this.context.featureSwitches.isTrue("responsive_web_show_similar_posts_pivots_enabled") && "ShowSimilarPosts" === e?.displayType,
                                o = this.context.featureSwitches.isTrue("subscriptions_inapp_grok_analyze") && this.context.userClaims.isTrueAndEnabled("subscriptions_inapp_grok") && t.grok_analyze_pivot,
                                s = t && d.Z.isArticlePost(t);
                            return (!n && !o) || t.isPreviewDisplay ? null : r.createElement(a.Z, { style: Lt.pivotContainer }, o && t.grok_analyze_pivot?.destination_url ? r.createElement(w.Z, { Icon: te.x1, destinationUrl: t.grok_analyze_pivot.destination_url, element: "grok_analyse_pivot", entityId: i, isForQuoteTweet: !1, label: Et }) : null, n && e?.landingUrl?.url ? r.createElement(_.ZP.Provider, { value: { showSimilarPostsPivotEnabled: () => this.context.featureSwitches.isTrue("responsive_web_show_similar_posts_pivots_enabled") } }, r.createElement(g.Z, { destinationUrl: e.landingUrl.url, isForQuoteTweet: !1, label: s ? St : xt, tweetId: i })) : null);
                        }),
                        (this._renderLoggedOutReadRepliesPivot = () => {
                            const { tweet: e } = this.props,
                                t = !this.context.viewerUserId,
                                i = d.Z.getOriginalTweet(e).reply_count,
                                n = T.ZP.getTruncatedCount(Number(i), !0),
                                o = `https://x.com/i/flow/login?redirect_after_login=${`https://x.com${this.context.history.location.pathname}`}`,
                                s = !(0, Te.ZP)(),
                                c = t && s && this.context.featureSwitches.isTrue("march_madness_brackets_enabled_logout_popup") ? r.createElement(a.Z, { style: { marginTop: l.default.theme.spaces.space12 } }, r.createElement(Ne.Z, { link: { pathname: "/i/jf/brackets/welcome" }, occasion: Ne.c.MarchMadness, styleOverrides: { backgroundcolor: "gray0", headercolor: "white", textcolor: "gray900", cardWidth: "100%" } })) : null;
                            return t && i > 5 && this.context.featureSwitches.isTrue("responsive_web_logged_out_read_replies_pivot_enabled") ? r.createElement(a.Z, null, r.createElement(w.Z, { Icon: q.default, destinationUrl: o, element: "logged_out_read_replies_pivot", entityId: e.id_str, isForQuoteTweet: !1, label: Zt({ replyCount: n }) }), c) : c;
                        }),
                        (this._renderStaleEditCallout = (e) => {
                            const { onStaleEditLinkClick: t, tweet: i } = this.props,
                                n = d.Z.getOriginalTweet(i),
                                o = b.F();
                            return r.createElement(a.Z, { style: [Lt.detailItemContainer, Lt.detailItem] }, r.createElement(a.Z, { style: Lt.staleEditCallout }, r.createElement(C.Z, { editType: "stale", id: e, textMode: "standalone" })), r.createElement(k.ZP, { "aria-describedby": o, link: d.Z.getTweetLatestVersionPermalink(n), onClick: t, style: Lt.staleEditLink }, _t), r.createElement(s.Z, { id: o, style: { display: "none" } }, mt));
                        }),
                        (this._renderModeratedRepliesIcon = () => {
                            const { hasModeratedReplies: e, onModeratedIconClick: t, tweet: i } = this.props;
                            return e ? r.createElement(f.Z, { link: `${i.permalink}/hidden`, onPress: t }) : null;
                        }),
                        (this._renderJetfuelFrame = () => {
                            const { jetfuel_payload: e } = this.props.tweet;
                            return () => (e ? r.createElement(me.Z, { payload: e }) : null);
                        }),
                        (this._getUsernameStackedLayoutEnabled = () => this.props.isFocal || this._isEdgeToEdgeEnabled),
                        (this._handleSocialContextClick = () => {
                            const { saveAsRecentSearch: e, shouldStoreTypeaheadItem: t, socialContext: i } = this.props;
                            if (e && i && t && t(Ie.Z.ItemType.USER)) {
                                const t = i.landingUrl?.url.match(Fe.Wq.id) || "",
                                    n = i.text || "";
                                e({ topic: { id: t && t[0], name: n, description: ut, type: Ze.g2.Topic } });
                            }
                        }),
                        (this._willRenderInlineReply = () => {
                            const { tweet: e } = this.props,
                                { featureSwitches: t, viewerUserId: i } = this.context;
                            if (!e) return !1;
                            return !!i && !(0, ue.$y)(t, e, ue.d.Reply) && ((0, Te.ZP)() || !1);
                        }),
                        (this._handleLayout = (e) => {
                            this._isMounted && this.setState({ width: e.nativeEvent.layout.width });
                        }),
                        (this._renderTweetTextHWTweet = (e) => {
                            const { hitHighlights: t, isFocal: i, linkify: o, onEntityClick: s, onShowMoreClick: a, to: l, tweet: c, tweetTextSize: h, withCardLinks: u, withInlineMedia: p, withQuotedTweetLinks: _, withReaderModeActive: m } = this.props,
                                { isExpanded: w, showGrokTranslation: g } = this.state,
                                T = d.Z.getOriginalTweet(c),
                                b = !!T.grok_translated_post,
                                C = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_summary_enabled");
                            let k;
                            k = h || e.size;
                            const f = T?.community_id_str,
                                y = f ? (e, t) => new URL(`/i/communities/${f}/hashtag/${t}`, e) : void 0;
                            let E;
                            const x = T.note_tweet && T.note_tweet.is_expandable,
                                S = null != T.grok_translated_post?.preview_translation;
                            w ||
                                m ||
                                !(g ? S : x) ||
                                (E = this.context.featureSwitches.isTrue("rweb_timeline_inline_show_more_enabled")
                                    ? () => {
                                          a && a(), this.setState({ isExpanded: !0 });
                                      }
                                    : this._getMaybeRedirectedTweetLink(l, !0));
                            const I = !this.state.showGrokTranslation,
                                Z = { ...e, transformHashtagLink: y, hitHighlights: I ? t : void 0, linkify: o, onEntityClick: s, size: k, transformUrl: this._transformUrl, unmentionedUserIds: T.unmentioned_user_ids, withCardLinks: u, withMediaLinks: !p, withShowMore: E, withQuoteLinks: _ || d.Z.isQuotedTweetUnavailable(T), withUnicodeEmojis: !1, article: C ? T?.article : void 0 };
                            let P;
                            P = w || m ? fe.Bq(T, { featureSwitches: this.context.featureSwitches }) : { text: T.text, entities: T.entities, display_text_range: T.display_text_range };
                            const A = !i && !this.context.featureSwitches.isTrue("longform_notetweets_rich_text_timeline_enabled");
                            let L = null;
                            T.note_tweet && (L = { ...T.note_tweet, richtext_tags: A ? [] : T.note_tweet.richtext_tags });
                            const R = m ? this._getInlineMediaSpec(L, T) : void 0,
                                U = { text: (S && !w ? T.grok_translated_post?.preview_translation : T.grok_translated_post?.translation) ?? "", destinationLanguage: T.grok_translated_post?.destination_language ?? "", entities: T.grok_translated_post?.entities ?? {}, display_text_range: [0, T.grok_translated_post?.translation?.length ?? 0] };
                            return r.createElement(r.Fragment, null, r.createElement(Me.Z, null, r.createElement(v.z, { context: L }, r.createElement(Oe.Z, null, r.createElement(de.Z, (0, n.Z)({}, Z, { disableTranslation: b || T.user.protected, displayTextRange: this.state.showGrokTranslation ? U.display_text_range : P.display_text_range, entities: this.state.showGrokTranslation ? U.entities : P.entities, inlineMediaSpec: R, isFocal: i, isGrokAutoTranslated: b, isPreviewDisplay: T.isPreviewDisplay, isTranslatable: !b && T.is_translatable, lang: this.state.showGrokTranslation ? U.destinationLanguage : T.lang, onMediaTranslation: this._handleMediaTranslations, onToggleTranslation: this._handleTranslationToggle, permalink: T.permalink, renderGrokAutoTranslationHeader: b ? () => this._renderGrokTranslationHeader("text") : void 0, renderTranslationFeedback: this._getTranslationFeedbackRenderer("inside-text"), supplementalLang: T.supplemental_language, text: this.state.showGrokTranslation ? U.text : P.text, tweetId: T.id_str, withOriginalText: i }))))), T.isPreviewDisplay && this._renderPreviewCta(), this._renderAtGrokPromo());
                        }),
                        (this._renderGrokTranslationHeader = (e, t, i) => {
                            if ("text" === e) {
                                const { showGrokTranslation: e } = this.state,
                                    n = e ? Ue.ZP.LOADED : Ue.ZP.NONE,
                                    o = t ? (0, Ce.t)(t, i) : void 0;
                                return r.createElement(le.O, { handleCollapseTranslation: () => this.setState({ showGrokTranslation: !1 }), handleGetTranslationClick: () => this.setState({ showGrokTranslation: !0 }), position: "top", showInfoButton: this.props.isFocal && e, sourceLanguageDisplayName: o, translateButtonText: ae.VW, translateTargetType: "post", translationStatus: n, useGrokTranslation: "auto" });
                            }
                            if ("quote-text" === e && this.props.tweet.quoted_status?.grok_translated_post) return r.createElement(le.O, { position: "top", style: Lt.translationHeaderInQuote, translateTargetType: "post", translationStatus: "loaded", useGrokTranslation: "auto", withAction: !1 });
                        }),
                        (this._getInlineMediaSpec = (e, t) => {
                            if (e?.inline_media)
                                return {
                                    list: e?.inline_media,
                                    render: (e) => {
                                        const i = t.extended_entities?.media || [],
                                            o = i.find((t) => t.id_str === e);
                                        if (!o) {
                                            const n = { tweet_id: t.id_str, media_list: i, mediaId: e };
                                            return (0, be.ZP)("InlineMedia: unable to find media", { extra: n }), null;
                                        }
                                        const s = [o];
                                        return r.createElement(a.Z, { style: Lt.inline_media }, r.createElement(y.Y, (0, n.Z)({}, this._richContentProps(), { mediaDetails: s })));
                                    },
                                };
                        }),
                        (this._renderTweetText = (e) => {
                            const { hitHighlights: t, isFocal: i, linkify: n, onEntityClick: o, promotedContent: s, tweet: a, tweetTextSize: l, userLanguage: c, withCardLinks: h, withInlineMedia: u, withQuotedTweetLinks: p } = this.props,
                                _ = d.Z.getOriginalTweet(a);
                            let m;
                            m = l || (i ? this.context.featureSwitches.getStringValue("rweb_tweets_tweet_detail_font_size", "headline2") : "body");
                            const w = this.context.featureSwitches.isTrue("responsive_web_twitter_article_seed_tweet_summary_enabled"),
                                g = this._isEdgeToEdgeEnabled && Lt.edgeToEdgeTextSpacer,
                                T = i ? Lt.expandedTweetText : g,
                                b = _?.community_id_str,
                                C = b ? (e, t) => new URL(`/i/communities/${b}/hashtag/${t}`, e) : void 0,
                                k = "true" === s?.experiment_values?.pac_in_timeline && E.default.isFollowerCard(s?.adMetadataContainer?.dynamicCardContent?.card_type),
                                f = E.default.isCardDisabled(_.card?.name),
                                y = !_ || !_.card || f || a.is_quote_status || k ? void 0 : _.card.url,
                                { featureSwitches: x } = this.context,
                                S = { featureSwitches: x },
                                I = fe.Bq(_, S);
                            let Z = null;
                            const P = this.state.showGrokTranslation;
                            _.note_tweet && !P && (Z = { ..._.note_tweet });
                            const A = this._getInlineMediaSpec(Z, _),
                                L = !!_.grok_translated_post,
                                R = { text: _.grok_translated_post?.translation ?? "", destinationLanguage: _.grok_translated_post?.destination_language ?? "", entities: _.grok_translated_post?.entities ?? {}, display_text_range: [0, _.grok_translated_post?.translation?.length ?? 0] };
                            return r.createElement(Me.Z, null, r.createElement(v.z, { context: Z }, r.createElement(Oe.Z, null, r.createElement(de.Z, { article: w ? _.article : void 0, disableTranslation: L || _.user.protected, displayTextRange: this.state.showGrokTranslation ? R.display_text_range : I.display_text_range, entities: this.state.showGrokTranslation ? R.entities : I.entities, excludeCardUrl: y, hitHighlights: i ? void 0 : t, id: e, inlineMediaSpec: A, isFocal: i, isGrokAutoTranslated: L, isPreviewDisplay: _.isPreviewDisplay, isTranslatable: !L && _.is_translatable, lang: this.state.showGrokTranslation ? R.destinationLanguage : _.lang, linkify: !!i || n, onEntityClick: o, onMediaTranslation: this._handleMediaTranslations, onToggleTranslation: this._handleTranslationToggle, permalink: _.permalink, quotedTweetId: _.quoted_status && _.quoted_status.id_str, quotedTweetPermalink: _.quoted_status_permalink, renderGrokAutoTranslationFeedback: this._getTranslationFeedbackRenderer("inside-text"), renderGrokAutoTranslationHeader: L ? () => this._renderGrokTranslationHeader("text", c, _.lang) : void 0, renderTranslationFeedback: this._getTranslationFeedbackRenderer("inside-text"), size: m, style: T, supplementalLang: _.supplemental_language, text: this.state.showGrokTranslation ? R.text : I.text, transformHashtagLink: C, transformUrl: this._transformUrl, tweetId: _.id_str, unmentionedUserIds: _.unmentioned_user_ids, withCardLinks: i ? void 0 : h, withMediaLinks: i ? void 0 : !u, withOriginalText: i, withQuoteLinks: (!i && p) || d.Z.isQuotedTweetUnavailable(_), withUnicodeEmojis: !1 }))));
                        }),
                        (this._renderPreviewCta = () => {
                            const { tweet: e } = this.props,
                                t = d.Z.getOriginalTweet(e);
                            return t.cta && r.createElement(x.Z, t.cta);
                        }),
                        (this._isClientAllowedIntoImmersiveViewer = () => {
                            if (c.Z.isPromoted(this.props.promotedContent)) return !1;
                            if (Y.ZP.isTwitterApp()) return !1;
                            return !(o.Z.get("screen").width >= l.default.theme.breakpoints.large) && !(!(0, Le.wV)(this.props.tweet) && !(0, Le.mn)(this.props.tweet)) && !d.Z.hasMixedMedia(this.props.tweet) && this.context.featureSwitches.isTrue("explore_relaunch_enable_immersive_web");
                        }),
                        (this._showReplyFilterInlineCallout = () => {
                            const e = d.Z.getOriginalTweet(this.props.tweet),
                                t = (e?.user?.id_str ?? "") === this.context.viewerUserId;
                            return !!!e.in_reply_to_status_id_str && this.props.showReplyFilterInlineCallout && t;
                        }),
                        (this._renderTranslationFeedback = () => {
                            const { translation: e, tweet: t } = this.props;
                            if (!e) return null;
                            const { translationSource: i, translationState: n } = e,
                                { featureSwitches: o } = this.context,
                                s = o.isTrue("responsive_web_translation_feedback_enabled") && e && "Success" === n,
                                a = t.id_str;
                            return s && a ? r.createElement(se.Z, { translateTargetType: "post", translationSource: i, tweetId: a, useGrokTranslation: "Grok" === i ? "button" : void 0 }) : void 0;
                        }),
                        (this._renderGrokAutoTranslationFeedback = (e) => {
                            const { featureSwitches: t } = this.context;
                            return t.isTrue("responsive_web_translation_feedback_enabled") && r.createElement(se.Z, { translateTargetType: "post", translationSource: "Grok", tweetId: e, useGrokTranslation: "auto" });
                        }),
                        (this._getTranslationFeedbackRenderer = (e) => {
                            if (this.props.isFocal) {
                                if (this.state.showTranslation) {
                                    const t = this.props.translation?.pollTranslations,
                                        i = t && t.length > 0;
                                    if ((i && "below-poll" === e) || (!i && "inside-text" === e)) return () => this._renderTranslationFeedback();
                                }
                                if (this.state.showGrokTranslation) {
                                    const t = d.Z.getOriginalTweet(this.props.tweet),
                                        i = t.grok_translated_post,
                                        n = i?.associated_data?.poll_translations,
                                        r = n && n.length > 0;
                                    if ((r && "below-poll" === e) || (!r && "inside-text" === e)) return () => this._renderGrokAutoTranslationFeedback(t.id_str);
                                }
                            }
                        }),
                        (this._renderArticleContent = () => {
                            const { isFocal: e, tweet: t } = this.props,
                                { featureSwitches: i } = this.context,
                                n = d.Z.getOriginalTweet(t),
                                o = i.isTrue("responsive_web_twitter_article_seed_tweet_detail_enabled") && e;
                            return d.Z.isArticlePost(n) && n.article && o ? (n.isPreviewDisplay ? r.createElement(S.Z, { articleEntity: n.article, hasSensitiveContent: n.possibly_sensitive, mediaVisibilityResults: n.mediaVisibilityResults }) : r.createElement(We.ZP, { minContentThreshold: 5, publishedPost: n, renderInTweet: !0, twitterArticle: n.article, withActionBar: !0 })) : null;
                        }),
                        (this._renderAuthorAppealLabel = () => (this._shouldShowFoSnRViolationAuthorInlineCallout() ? this._getFoSnRViolationAuthorAppealInfo() : null)),
                        (this._shouldShowFoSnRViolationAuthorInlineCallout = () => {
                            const { featureSwitches: e, viewerUserId: t } = this.context,
                                { tweet: i } = this.props,
                                n = d.Z.getOriginalTweet(i),
                                r = void 0 !== i?.authorAppealLabel?.policy,
                                o = !!i?.authorAppealLabel?.report_source;
                            return n?.user?.id_str === t && r && o && e.isTrue("freedom_of_speech_not_reach_fetch_enabled") && e.isTrue("freedom_of_speech_not_reach_author_label_enabled");
                        }),
                        (this._getFoSnRViolationAuthorAppealInfo = () => {
                            const { onFosnrAuthorAppealClick: e, tweet: t } = this.props,
                                i = t.retweeted_status || t,
                                n = t?.authorAppealLabel?.report_source,
                                o = t?.authorAppealLabel?.text?.text,
                                s = !!i?.extended_entities?.media?.length,
                                a = !!i.promoted_content,
                                l = n ? (0, Se.j_)({ clientReferer: window.location.pathname, isMedia: s, isPromoted: void 0 !== a, reportType: Se.C2[n], reportedTweet: i, reportedUser: i.user.id_str, scribeNamespace: {} }) : null,
                                d = z.default;
                            return l ? r.createElement(I.Z.Custom, { Icon: d, action: { label: vt, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(l) } } } }, backgroundColor: "primary0", onAction: e, style: Lt.fosnrAuthorAppealLabel, text: o, withColoredIcon: !0 }) : null;
                        }),
                        (this._handleTranslationToggle = (e) => {
                            this.setState({ showTranslation: e });
                        }),
                        (this._handleMediaTranslations = (e) => {
                            this.setState({ mediaAltTranslations: e });
                        }),
                        (this._transformUrl = (e) => (0, Ee.b)(e, this.props.promotedContent?.click_tracking_info)),
                        (this._shouldShowAdLabel = () => {
                            const { promotedContent: e } = this.props,
                                t = c.Z.shouldShowAdDisclosure(e),
                                i = this.context.featureSwitches.isTrue("responsive_web_remove_qp_ad_label_enabled") && c.Z.isQuickPromote(e);
                            return c.Z.isPromoted(e) && !i && t && this._withAdLabel;
                        }),
                        (this._getActionMenuRenderer = ({ promotedContentA11yId: e, withViews: t }) => {
                            const { isFocal: i, renderCurationActionMenu: n, tweet: o } = this.props,
                                s = n ? n() : null,
                                l = this.context.featureSwitches.isTrue("super_follow_android_web_subscription_enabled"),
                                c = this.context.featureSwitches.isTrue("creator_subscriptions_subscribe_button_tweet_detail_enabled"),
                                h = o.user,
                                u = this._shouldShowAdLabel(),
                                p = i && c && l && h.super_follow_eligible && !h.super_following && !o.isPreviewDisplay && h.id_str !== this.context.viewerUserId,
                                _ = d.Z.getOriginalTweet(o),
                                m = ({ containerWidth: e }) => i && h.id_str !== this.context.viewerUserId && !this.props.tweet?.user?.following && (ge.Z.isOneColumnLayout(e) || ge.Z.isOneColumnSquishedLayout(e)),
                                w = !(this.props.viewerUser?.id_str !== _?.user?.id_str || !_.user.professional),
                                g = _.quick_promote_eligibility?.eligibility,
                                b = this._renderGrokButton(),
                                C = !(!this.props.viewerUser?.is_blue_verified && !this.props.viewerUser?.verified_type),
                                f = !((!w && !C) || !Ft(g) || this.context.featureSwitches.isTrue("gryphon_hide_quick_promote")),
                                v = _.views?.count ?? 0,
                                y = !(!this.props.withSocialContext || !this.props.socialContext);
                            return () => r.createElement(Z.Fo, { query: m }, (n) => r.createElement(a.Z, { style: Lt.actionsContainer }, n ? r.createElement(ee.C, { buttonType: "primaryFilled", size: (0, Te.ZP)() ? "small" : "xSmall", userId: h.id_str }) : p ? r.createElement(ee.C, { buttonType: "primaryFilled", isSuperFollowSubscriptionEnabled: l, referringPage: "subscribe_tweet_details", relationshipMode: "subscribe", size: (0, Te.ZP)() ? "small" : "xSmall", userId: h.id_str }) : f ? r.createElement(tt.Z, { hasSocialContext: y, isFocal: i, permalink: o.permalink, tweetId: o.id_str, tweetText: o.text }) : null, u ? r.createElement(k.ZP, { "aria-label": e, color: "gray700" }, pt) : null, t && !u && v ? r.createElement(k.ZP, { "aria-label": yt({ count: v }), color: "gray700" }, T.ZP.getTruncatedCount(v)) : null, b, s));
                        }),
                        (this._renderGrokButton = () => {
                            const { featureSwitches: e } = this.context,
                                t = d.Z.getOriginalTweet(this.props.tweet),
                                i = [],
                                n = this.props.tweet,
                                o = c.Z.isPromoted(this.props.promotedContent),
                                s = t.grok_analysis_button;
                            if (this.state.width < 290) return [];
                            const a = e.isTrue("responsive_web_grok_analysis_button_from_backend"),
                                l = (e.isTrue("responsive_web_grok_post_understanding_button_on_all_posts") || (e.isTrue("responsive_web_grok_analyze_focal_post_enabled") && this.props.isFocal) || (e.isTrue("responsive_web_grok_analyze_button_fetch_trends_enabled") && t.trend_id)) && !(0, Le.wV)(n) && !(0, Le.mn)(n) && (!n.entities?.urls || 0 === n.entities.urls.length);
                            if (
                                (!o &&
                                    ((a && s) || (!a && l)) &&
                                    i.push({
                                        text: Tt,
                                        Icon: te.x1,
                                        onClick: () => {
                                            const e = `https://x.com${n.permalink}`;
                                            this._openGrok({ text: e, autoSubmit: !0, source: this.props.isFocal ? "post_analysis_details_page" : "post_analysis_timeline", promptMetadata: { promptSource: "GROK_ANALYZE", action: "INPUT", properties: { element: "BUTTON" } } });
                                        },
                                    }),
                                0 === i.length)
                            )
                                return null;
                            const h = i.length > 1,
                                u = this.props.isFocal ? "text" : "gray700";
                            return r.createElement(P.ZP, {
                                Icon: h ? Q.default : (i[0].Icon ?? Q.default),
                                activeColor: "primary",
                                "aria-label": It,
                                color: u,
                                hoverLabel: { label: h ? It : i[0].text },
                                iconSize: "normal",
                                onPress: () => {
                                    h || i[0]?.onClick?.(() => {});
                                },
                                renderMenu: h ? (e) => r.createElement(A.Z, { items: i, onCloseRequested: e, shouldCloseOnClick: !0 }) : void 0,
                            });
                        }),
                        (this._getPrerollActionMenuRenderer = ({ promotedContentA11yId: e, withViews: t }) => {
                            const { renderPrerollActionMenu: i } = this.props,
                                n = i ? i() : null;
                            return () => r.createElement(a.Z, { style: Lt.actionsContainer }, n);
                        }),
                        (this._isMounted = !1);
                    const i = !!e.tweet.grok_translated_post || !!e.tweet.retweeted_status?.grok_translated_post;
                    this.state = { isExpanded: !1, mediaAltTranslations: {}, showTranslation: !1, width: 0, showGrokTranslation: i };
                }
                componentDidMount() {
                    this._showReplyFilterInlineCallout() && this.props.handleReplyFilterInlineCalloutImpression?.(), this._shouldShowFoSnRViolationAuthorInlineCallout() && this.props.onFosnrAuthorLabelImpression?.(), (this._isMounted = !0);
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { conversationTreeMetadata: e, forwardPivotInfo: t, hideConversationControlsEducationText: i, hideExclusivityInfoEducationTextInReplies: o, hideTrustedFriendsEducationTextInReplies: s, isCompact: u, isFocal: p, onBlur: m, onClick: w, onFocus: g, onPromotedUserProfileCardClick: T, promotedContent: C, quotedTweetTombstoneInfo: f, readerModeAvailable: v, socialContext: y, to: E, tweet: x, withReaderModeActive: S, withTimestamp: I, withUnreadStyles: Z } = this.props,
                        P = d.Z.getOriginalTweet(x),
                        A = c.Z.isPromoted(C),
                        F = C?.adMetadataContainer?.dynamicCardContent,
                        M = "true" === C?.experiment_values?.pac_in_timeline && !P.card && !F,
                        B = () => this.context.featureSwitches.isTrue("smbo_legacy_pac_is_in_follow_position_test"),
                        H = !(this.props.viewerUser?.id_str !== P?.user?.id_str || !P.user.professional),
                        N = !(!this.props.viewerUser?.is_blue_verified && !this.props.viewerUser?.verified_type),
                        D = P.quick_promote_eligibility?.eligibility,
                        G = !((!H && !N) || !Ft(D) || this.context.featureSwitches.isTrue("gryphon_hide_quick_promote")),
                        O = "IneligibleCampaignRunning" === D || "IneligibleBoostCampaignRunning" === D || "IneligibleCampaignPaused" === D,
                        V = e && e.ancestorConnector,
                        W = e && e.indents,
                        q = b.F(),
                        z = this.context.featureSwitches.isTrue("responsive_web_delete_tweet_stats_enabled");
                    return p
                        ? r.createElement(L.j, { tweet: x }, ([n, d]) => {
                              const c = O ? r.createElement(it.Z, { id: n.promotionStatusLabel, status: Mt(D), style: Lt.promotionStatus }) : null,
                                  u = e ? r.createElement(k.ZP, { id: n.conversationLevel, style: l.default.visuallyHidden }, ht({ conversationTreeDepth: e.depth.toString() })) : null,
                                  p = P.tombstoneInfo || x.tombstoneInfo,
                                  b = r.createElement(r.Fragment, null, p ? this._renderTombstone(n.tombstone, p) : null, this._renderReplyContext({ id: n.replyContext }), r.createElement(a.Z, null, this._renderTweetText(n.text)), r.createElement(a.Z, null, this._renderRichContent({ id: n.richContent })), P.isPreviewDisplay && this._renderPreviewCta(), r.createElement(a.Z, null, M ? r.createElement(xe.nO, { namespace: ft }, r.createElement(_.ZP.Provider, { value: { followButtonAtBottomOfPromotedUserCard: B } }, r.createElement(h.Z.PromotedUserProfileCard, { followButton: r.createElement(ee.C, { promotedContent: C, userId: P.user.id_str }), isUserProtected: P.user.protected, isUserVerified: P.user.verified, link: { pathname: `/${P.user.screen_name}`, anchorless: !0, state: { promotedTweetState: C } }, onClick: T, onScreenNameClick: T, promotedContent: C, style: Lt.promotedUserCard, userDescription: P.user.description, userId: P.user.id_str, userName: P.user.name, userScreenName: P.user.screen_name }))) : null));
                              return r.createElement(
                                  _.ZP.Provider,
                                  { value: this._getFeatureConfigurationContextProviderValue() },
                                  r.createElement(
                                      Ge.ZP,
                                      { forwardPivotInfo: t, tweet: x },
                                      r.createElement(
                                          R.Z,
                                          { a11yDomIds: d, actionMenu: this._getActionMenuRenderer({ promotedContentA11yId: n.promotedLabel })(), avatar: this._renderAvatar({ id: n.avatar, promotedContent: C, screenName: P.user.screen_name, uri: P.user.profile_image_url_https }), footer: this._renderFooter(), header: this._renderHeader(n), indents: W, onBlur: m, onFocus: g, onPress: w, testID: je.Z.tweet, timestamp: A || this._getUsernameStackedLayoutEnabled() || !I ? null : this._renderTweetRelativeTimestamp(n.timestamp), userFollowIndicators: void 0, userLabel: this._renderUserLabel(P.user, n.userLabel), userName: this._renderUserName({ id: n.username, promotedContent: C, tweetId: P.id_str, userData: { isProtected: P.user.protected, isVerified: P.user.verified, isBlueVerified: P.user.is_blue_verified, name: P.user.name, screenName: P.user.screen_name, userId: P.user.id_str, verifiedType: P.user.verified_type, affiliateBadgeInfo: P.user.highlightedLabel, isSubscriber: P.has_super_follower, communityModeratorStatus: P.author_community_relationship?.role } }), withBottomLine: this._getWithBottomLine(), withElbow: W ? "side" === V : void 0, withFooterGap: !1, withFullWidthChildren: !0, withTopLine: this._getWithTopLine(), withUnreadStyles: Z },
                                          u,
                                          b,
                                          this._renderAtGrokPromo(),
                                          this._renderFocalContent({ withPromoteButton: G, promotionStatusBadge: c, a11yIds: n }),
                                          x.isPreview ? r.createElement(we.Z, { previewTweetId: x.id_str }) : this._renderTweetActions({ actionSize: "large", displayStyle: "block", id: n.actionsBar, style: [Lt.actionBarFocalTweet, !v && this._willRenderInlineReply() && Lt.actionBarWithInlineReply], withAnalyticsAction: !1, withCount: z }),
                                          this._renderGrokAnalysisPivotAndReplySortingButton(),
                                          this._renderLoggedOutReadRepliesPivot(),
                                          this._renderReaderModeButton(),
                                          this._showReplyFilterInlineCallout() ? r.createElement(U.Z, { Icon: $.default, headline: kt, id: q, withThumbnail: !1 }) : null,
                                          r.createElement(Ye.Z, { conversationControlLabelNativeID: n.conversationControlLabel, displayStyle: "detail", exclusivityInfoLabelNativeID: n.exclusivityInfoLabel, hideConversationControlsEducationText: !!i, hideExclusivityInfoEducationTextInReplies: !!o, hideTrustedFriendsEducationTextInReplies: !!s, loggedInUser: this.props.viewerUser, longformNotesLabelNativeID: n.longformNotesLabel, premiumInfoLabelNativeID: n.premiumInfoLabel, trustedFriendsLabelNativeID: n.trustedFriendsLabel, tweet: x }),
                                          S ? r.createElement(a.Z, { style: Lt.readerBottomBar, testID: je.Z.readerModeBottomBar }) : null,
                                      ),
                                  ),
                                  r.createElement(Bt, {
                                      onOpenGrokUpdate: (e) => {
                                          this._openGrok = e;
                                      },
                                  }),
                              );
                          })
                        : r.createElement(
                              _.ZP.Provider,
                              { value: this._getFeatureConfigurationContextProviderValue() },
                              r.createElement(
                                  Ut,
                                  this.props,
                                  r.createElement(
                                      Ge.ZP,
                                      { forwardPivotInfo: t, tweet: x },
                                      r.createElement(h.Z, {
                                          conversationTreeMetadata: e ? { ancestorConnector: e.ancestorConnector, depth: e.depth, indents: e.indents } : void 0,
                                          link: this._getMaybeRedirectedTweetLink(E, !0),
                                          onBlur: m,
                                          onFocus: g,
                                          onPress: w,
                                          promotedContent: C,
                                          quotedTweetTombstoneInfo: f,
                                          renderActionMenu: this._getActionMenuRenderer({ withViews: u }),
                                          renderActionsBar: (e) => (x.isPreview ? r.createElement(we.Z, { previewTweetId: x.id_str }) : r.createElement(r.Fragment, null, this._renderTweetActions({ actionSize: e.actionSize, displayStyle: e.displayStyle, id: e.id, style: e.style, withCount: e.withCount, withAnalyticsAction: !0 }), S ? r.createElement(a.Z, { style: Lt.readerBottomBar, testID: je.Z.readerModeBottomBar }) : null)),
                                          renderCallToAction: () => this._renderSelfThreadCTA(),
                                          renderEducation: (e) => r.createElement(Ye.Z, (0, n.Z)({}, e, { hideConversationControlsEducationText: !!i, hideExclusivityInfoEducationTextInReplies: !!o, hideTrustedFriendsEducationTextInReplies: !!s, loggedInUser: this.props.viewerUser })),
                                          renderHighlightedUserLabel: (e) => this._renderHighlightedUserLabel(e),
                                          renderPromotedDetails: this._withAdLabel ? K.Z : (e) => r.createElement(h.Z.PromotedDetails, e),
                                          renderPromotedUserProfileCard: (e) => (M ? r.createElement(xe.nO, { namespace: ft }, r.createElement(_.ZP.Provider, { value: { followButtonAtBottomOfPromotedUserCard: B } }, r.createElement(h.Z.PromotedUserProfileCard, (0, n.Z)({}, e, { followButton: r.createElement(ee.C, { promotedContent: C, userId: e.userId }), link: { pathname: `/${P.user.screen_name}`, anchorless: !0, state: { promotedTweetState: C } }, onClick: T, onScreenNameClick: T, style: Lt.promotedUserCard })))) : null),
                                          renderPromotionStatusBadge: O ? (e) => r.createElement(it.Z, { id: e.id, status: Mt(D), style: Lt.promotionStatus }) : () => null,
                                          renderReplyContext: (e) => this._renderReplyContext({ id: e.id }),
                                          renderRichContent: (e) => this._renderRichContent({ id: e.id }),
                                          renderStats: this._renderTweetStats(),
                                          renderText: (e) => this._renderTweetTextHWTweet(e),
                                          renderTimestamp: (e) => this._renderTweetTimestamp(e),
                                          renderTombstone: (e) => this._renderTombstoneHWTweet(e),
                                          renderTweetHeader: (e) => this._renderTweetHeader({ id: e?.id }),
                                          renderUserAvatar: (e) => this._renderAvatar(e),
                                          renderUserFollowIndicator: (e) => this._renderUserFollowIndicatorHWTweet(e),
                                          renderUserName: (e) => this._renderUserNameHWTweet(e),
                                          socialContext: y ? { contextType: y.contextType, isSelfRetweet: y.isSelfRetweet, link: y.landingUrl ? (0, ve.s9)(y.landingUrl) : void 0, name: y.name, screenName: y.screenName, text: y.text } : void 0,
                                          staticLinkConfig: null,
                                          testID: je.Z.tweet,
                                          tweet: x,
                                          withBottomLine: this._getWithBottomLine(),
                                          withTopLine: this._getWithTopLine(),
                                          withUnreadStyles: Z,
                                      }),
                                  ),
                              ),
                              r.createElement(Bt, {
                                  onOpenGrokUpdate: (e) => {
                                      this._openGrok = e;
                                  },
                              }),
                          );
                }
                _getMaybeRedirectedTweetLink(e, t) {
                    let i = "string" == typeof e ? { pathname: e, state: {} } : e;
                    if (i) {
                        const { isInEditHistory: e, tweet: n } = this.props,
                            r = d.Z.getOriginalTweet(n);
                        if (r.isStaleEdit && !e && this._isEditTweetConsumptionEnabled()) {
                            const e = d.Z.getTweetLatestVersionId(r);
                            i = { ...i, pathname: d.Z.getTweetLatestVersionPermalink(r), state: { ...i.state, focal: i.state?.focal ? e : void 0, contextTweetId: i.state?.contextTweetId ? e : void 0, socialContext: void 0, promotedContent: void 0 } };
                        }
                        return { ...i, anchorless: t };
                    }
                }
                _renderTweetTimestamp(e) {
                    const { withTimestamp: t, withTimestampLink: i } = this.props,
                        { id: o, link: s } = e;
                    return t ? r.createElement(h.Z.Timestamp, (0, n.Z)({}, e, { id: this._isEdgeToEdgeEnabled ? void 0 : o, link: i ? this._getMaybeRedirectedTweetLink(s, !1) : void 0 })) : null;
                }
                _renderTweetRelativeTimestamp(e) {
                    const { promotedContent: t, tweet: i, withTimestampLink: n } = this.props,
                        o = d.Z.getOriginalTweet(i);
                    return r.createElement(F.Z, { id: e, link: n ? { pathname: o.permalink, state: { contextTweetId: o.id_str, promotedContent: t } } : void 0, timestamp: o.created_at });
                }
                _getAuthorLabelUserNameColor() {
                    return dt.includes(l.default.theme.primaryColorName) ? "blue500" : "magenta500";
                }
                _shouldRenderAuthorLabel() {
                    return this.props.replyBadge === Pe.Z.Author;
                }
                _renderUserNameHWTweet(e) {
                    const { isCompact: t, onScreenNameClick: i, tweet: o, withUserHoverCard: s, withUserName: a } = this.props;
                    if (!a) return null;
                    const c = d.Z.getOriginalTweet(o),
                        { user: u } = c,
                        { featureSwitches: p } = this.context,
                        _ = this._shouldRenderAuthorLabel() && p.isTrue("responsive_web_author_labels_handle_label_enabled"),
                        m = _ ? this._getAuthorLabelUserNameColor() : void 0;
                    return r.createElement(Z.ZP, null, ({ containerWidth: o }) => r.createElement(h.Z.UserName, (0, n.Z)({}, e, { canShowCommunityMemberBadge: !!c.in_reply_to_status_id_str, onLinkClick: i, onScreenNameClick: i, renderUserHoverCard: this._renderUserHoverCard, renderUserNameHighlights: _ ? (e) => r.createElement(ot.Z, { color: m, name: e.name }) : void 0, withHoverCard: s && !u.blocking, withLink: !!i, withStackedLayout: t || o < l.default.theme.breakpoints.xSmall })));
                }
                _renderUserName(e) {
                    const { isFocal: t, onScreenNameClick: i, promotedContent: o, tweet: s, withUserHoverCard: a, withUserName: l } = this.props;
                    if (!l) return null;
                    const h = d.Z.getOriginalTweet(s),
                        { user: u } = h,
                        { featureSwitches: p } = this.context,
                        _ = c.Z.isPromoted(o),
                        m = this._shouldRenderAuthorLabel() && p.isTrue("responsive_web_author_labels_focal_label_enabled"),
                        w = m ? this._getAuthorLabelUserNameColor() : void 0;
                    return r.createElement(M.Z, (0, n.Z)({}, e, { canShowCommunityMemberBadge: !0, onLinkClick: i, onScreenNameClick: i, promotedContent: o, renderUserHoverCard: this._renderUserHoverCard, renderUserNameHighlights: m ? (e) => r.createElement(ot.Z, { color: w, name: e.name }) : void 0, screenNameSuffix: _ || t || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(), withHoverCard: a && !u.blocking, withLink: !!i, withStackedLayout: this._getUsernameStackedLayoutEnabled() }));
                }
                _renderUserFollowIndicatorHWTweet(e) {
                    const { onUserFollowIndicatorClick: t, onUserFollowIndicatorDismissClick: i, onUserFollowIndicatorLearnMoreClick: o } = this.props;
                    return r.createElement(h.Z.UserFollowIndicator, (0, n.Z)({}, e, { onDismiss: i, onIndicatorClick: t, onLearnMoreClick: o, showEducation: !0 }));
                }
                _renderUserLabel(e, t) {
                    const { highlightedLabel: i } = e;
                    return i ? r.createElement(B.Z, { id: t, label: i }) : null;
                }
                _renderTweetStats() {
                    return this.context.featureSwitches.isTrue("tweet_awards_web_non_focal_tweet_coins_enabled") ? () => r.createElement(a.Z, { style: Lt.tweetStats }, this._renderCoinsCount(!0)()) : K.Z;
                }
                _renderCoinsCount(e) {
                    const { tweet: t } = this.props,
                        { granted_awards: i, permalink: n } = d.Z.getOriginalTweet(t),
                        o = this.context.featureSwitches.isTrue("tweet_awards_web_tipping_enabled"),
                        s = i?.total_coins_worth;
                    return o && s && s > 0 ? () => r.createElement(Je.Z, { coinCount: s, isLabel: e, link: `${n}/coins` }) : K.Z;
                }
                _renderFocalContent(e) {
                    const { onAnalyticsClick: t, onEngagementsClick: i, onLatestEditLinkClick: n, tweet: o } = this.props,
                        s = d.Z.getOriginalTweet(o),
                        { created_at: l, isEdited: c, isStaleEdit: h, permalink: u, place: p, views: _ } = s,
                        m = c && !h && this._isEditTweetConsumptionEnabled(),
                        w = h && this._isEditTweetConsumptionEnabled(),
                        g = m && !s.isStaleEdit,
                        b = new Date(l),
                        f = bt(b),
                        v = `${Ct(b)} · ${f}`,
                        y = this.context.featureSwitches.isTrue("view_counts_public_visibility_enabled"),
                        E = _?.count,
                        x = E ? T.ZP.getTruncatedCount(Number(E)) : void 0,
                        S = this.context.featureSwitches.isTrue("responsive_web_delete_tweet_stats_enabled"),
                        I = (0, He.Z)({ isPremium: this.context.userClaims.isAnyPremiumSubscriber(), featureSwitches: this.context.featureSwitches, tweet: s, isOwnPost: s?.user?.id_str === this.context.viewerUserId, surface: "detail_screen" });
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(a.Z, { style: Lt.footerContainer }, r.createElement(a.Z, { style: Lt.footerContent }, r.createElement(H.Z, { linkColor: "gray700", renderCoinCount: this._renderCoinsCount(), renderEditCallout: m ? (t) => r.createElement(C.Z, { editType: t.editType, id: e.a11yIds.editCallout, textMode: t.textMode }) : K.Z, renderPlace: p ? () => r.createElement(k.ZP, { color: p.id ? "gray700" : void 0, link: p.id ? `/places/${p.id}` : void 0 }, p.full_name) : K.Z, renderTimestamp: (e) => r.createElement(F.Z, { "aria-describedby": e["aria-describedby"], "aria-label": m ? `${gt} ${wt} ${v}` : void 0, link: m ? d.Z.getTweetEditHistoryRoute(s) : u, onPress: m ? n : void 0, prefix: e.prefix, relative: !1, timestamp: l }), renderViewCount: x && y ? () => r.createElement(N.Z, null, r.createElement(k.ZP, null, r.createElement(W().I18NFormatMessage, { $i18n: "c1976bcf" }, r.createElement(N.Z.Value, { animated: !0, count: Number(E) }, W().f396c105({ displayCount: x })), r.createElement(N.Z.Label, null, W().aa037e65({ count: Number(E) }))))) : K.Z, style: Lt.timeLocSource }), r.createElement(a.Z, { style: Lt.footerIcons }, this._renderModeratedRepliesIcon())), this._withAdLabel ? null : this._renderPromotedDetails(), e.promotionStatusBadge),
                        w && this._renderStaleEditCallout(e.a11yIds.editCallout),
                        S ? r.createElement(Xe.Z, { onEngagementsClick: i, tweet: s, viewerUserId: this.context.viewerUserId }) : r.createElement(Ke.Z, { onAnalyticsClick: t, tweet: s, viewerUserId: this.context.viewerUserId }),
                        I ? r.createElement(De.Z, { variant: "PostAnalytics", wrapperStyles: Lt.postEngagementsUpsell }) : null,
                        !S && r.createElement(_e.Z, { isNonCompliantTweet: "non_compliant" === s.limited_actions, tweetBookmarkCount: g ? d.Z.getAggregateCount("bookmark_count", s, s.bookmark_count ?? 0) : s.bookmark_count, tweetId: s.id_str, tweetLikeCount: g ? d.Z.getAggregateCount("favorite_count", s, s.favorite_count) : s.favorite_count, tweetPermalink: s.permalink, tweetQuoteTweetCount: g ? d.Z.getAggregateCount("quote_count", s, s.quote_count ?? 0) : s.quote_count, tweetRetweetCount: g ? d.Z.getAggregateCount("retweet_count", s, s.retweet_count) : s.retweet_count }),
                    );
                }
                _renderFooter() {
                    const { isFocal: e, topic: t, topicFollowPrompt: i } = this.props;
                    return r.createElement(r.Fragment, null, this._renderSelfThreadCTA(), !e && t && i && this.context.featureSwitches.isTrue("topics_context_controls_inline_prompt_enabled") ? (0, rt.Z)({ defaultRef: this._defaultInlinePromptRef, topic: t, topicFollowPrompt: i }) : null);
                }
                _renderHeader(e) {
                    const { isFocal: t, topic: i, topicFollowPrompt: n } = this.props;
                    return r.createElement(r.Fragment, null, t && n && i && this.context.featureSwitches.isTrue("topics_context_controls_inline_prompt_enabled") ? (0, rt.Z)({ defaultRef: this._defaultInlinePromptRef, topic: i, topicFollowPrompt: n }) : this._renderTweetHeader({ id: e.socialContext }));
                }
                _renderSelfThreadCTA() {
                    const { onSelfThreadClick: e, onSelfThreadImpression: t, tweet: i } = this.props,
                        n = d.Z.getOriginalTweet(i),
                        o = this._shouldShowSelfThreadWithAvatar();
                    return this._shouldShowSelfThread() ? r.createElement(Ve.Z, { avatarUrl: o ? n.user.profile_image_url_https : void 0, onClick: e, onImpression: t, style: Lt.selfThreadCTA, to: i.permalink, userName: n.user.screen_name, withConversationLine: o }) : null;
                }
                _shouldShowSelfThread() {
                    const { conversationPosition: e, tweet: t, withSelfThread: i } = this.props,
                        n = d.Z.getOriginalTweet(t);
                    return i && !e && n.self_thread && !t.isPreview;
                }
                _shouldShowSelfThreadWithAvatar() {
                    const { shouldSelfThreadIncludeAvatar: e, tweet: t } = this.props,
                        i = d.Z.getOriginalTweet(t);
                    return this._shouldShowSelfThread() && e && !i.in_reply_to_status_id_str;
                }
                _getConversationPosition() {
                    return this._shouldShowSelfThreadWithAvatar() ? { isStart: !0, isEnd: !1 } : this.props.conversationPosition;
                }
                _getIsConversationStart() {
                    const { tweet: e } = this.props,
                        t = this._getConversationPosition(),
                        i = d.Z.getOriginalTweet(e);
                    return t && (t.isStart || !i.in_reply_to_status_id_str);
                }
                _renderTweetHeader({ id: e }) {
                    const { conversationPosition: t, injectedFeedbackItem: i, isFocal: o, onUndoTopicNotInterestedClick: s, promotedContent: a, socialContext: l, socialContextColor: d, topic: h, tweetContext: u, withSocialContext: p } = this.props;
                    if (c.Z.isPromoted(a)) return null;
                    if (!p || !l) return u ? r.createElement(pe.Z, { context: u }) : null;
                    const { featureSwitches: _ } = this.context,
                        m = t && !this._getIsConversationStart(),
                        { contextType: w, isSelfRetweet: g, landingUrl: T, name: b, screenName: C, text: k, topicContext: f } = l,
                        v = T ? (0, ve.s9)(T) : void 0;
                    if (f && h && (0, nt.eM)({ featureSwitches: _, isExpanded: o, topic: h, topicContext: f })) return r.createElement(nt.pZ, { onUndoTopicNotInterestedClick: s });
                    const y = { contextType: w, iconSize: "large", withLeftPadding: !m && !this._getWithTopLine(), text: k },
                        E = f && h ? (0, nt.cN)({ featureSwitches: _, iconSize: y.iconSize, injectedFeedbackItem: i, isExpanded: o, socialContext: l, topic: h, withLeftPadding: y.withLeftPadding }) : y;
                    return r.createElement(re.Z, (0, n.Z)({}, E, { iconColor: d, id: e, link: v, onClick: w === Ae.Z.Topic ? this._handleSocialContextClick : void 0, retweetData: { name: b, screenName: C, isSelfRetweet: g }, style: Lt.socialContext, testID: je.Z.socialContext, textColor: d, weight: "bold" }));
                }
                _renderReplyContext({ id: e }) {
                    const { conversationPosition: t, conversationTreeMetadata: i, isFocal: n, onReplyContextClick: o, replyContext: s, tweet: a } = this.props,
                        l = d.Z.getOriginalTweet(a),
                        c = l.self_thread;
                    return this._shouldShowSelfThread() || s !== D.ZP.ReplyContextTypes.Isolated || !l.in_reply_to_status_id_str || (i && !n) || (c && t && !t.isStart) || (c && n) ? null : r.createElement(D.ZP, { displayTextRange: l.display_text_range, id: e, inReplyToName: l.in_reply_to_name, inReplyToScreenName: l.in_reply_to_screen_name, inReplyToStatusIdStr: l.in_reply_to_status_id_str, inReplyToUserIdStr: l.in_reply_to_user_id_str, onClick: o, style: [Lt.replyContext, n && Lt.replyContextBig], tweetPermalink: l.permalink, unmentionedUserIds: l.unmentioned_user_ids, userMentionsEntities: l.entities?.user_mentions });
                }
                _renderReaderModeButton() {
                    const { readerModeAvailable: e, tweet: t } = this.props;
                    return e ? r.createElement(a.Z, { style: this._willRenderInlineReply() ? Lt.actionBarWithInlineReply : void 0 }, r.createElement(ie.Z, { focalTweet: t, isExpanded: !0, readerModeAvailable: !!e })) : null;
                }
                _renderTweetActions({ actionSize: e, displayStyle: t, id: i, style: n, withAnalyticsAction: o, withCount: s }) {
                    const { bookmarkFolderId: l, contextTweet: d, contextualClientEventInfo: c, enableKeyboardShortcuts: h, forwardPivotInfo: u, isCompact: p, isFocal: _, isInEditHistory: m, nudges: w, onLikeSuccess: g, onReplyPress: T, promotedContent: b, socialContext: C, tweet: k, withActions: f, withActionsDisabled: v, withRemoveFromBookmarks: y } = this.props;
                    if (p || !f) return null;
                    const E = this.state.width < 290;
                    return r.createElement(a.Z, { onLayout: this._handleLayout }, r.createElement(he.Z, { actionSize: e, allowBookmarkInActionsBar: !E, bookmarkFolderId: l, contextualClientEventInfo: c, displayStyle: t, enableKeyboardShortcuts: h, forwardPivotInfo: k.softIntervention || u, id: i, isFocalTweet: _, isInEditHistory: m, likeActionIconContainerRef: this._iconContainerRef, nudges: w, onLikeSuccess: g, onReplyPress: T, promotedContent: b, socialContext: C, style: n, tweet: d || k, withActionsDisabled: v || k.isPreviewDisplay, withAnalyticsAction: o, withCount: s, withRemoveFromBookmarks: y }));
                }
                _renderAvatar(e) {
                    const { isFocal: t, onAvatarClick: i, onScreenNameClick: o, tweet: s, withUserAvatar: a, withUserHoverCard: l, withUserPresence: c } = this.props;
                    if (!a) return null;
                    const { featureSwitches: u } = this.context,
                        p = d.Z.getOriginalTweet(s);
                    return r.createElement(
                        h.Z.UserAvatar,
                        (0, n.Z)({}, e, {
                            onClick: i,
                            onHoverCardScreenNameClick: o,
                            renderUserAvatar: (e) => {
                                const i = !t && this._shouldRenderAuthorLabel() && u.isTrue("responsive_web_author_labels_avatar_label_enabled");
                                return r.createElement(ze.Z, { avatarRef: this._defaultInlinePromptRef, link: { pathname: `https://x.com/${e.screenName || ""}`, state: { contextTweetId: p.id_str, ...(e.promotedContent && { promotedTweetState: e.promotedContent }) } }, onClick: e.onClick, onHoverCardScreenNameClick: e.onHoverCardScreenNameClick, promotedContent: e.promotedContent, screenName: e.screenName, uri: e.uri, userAvatarLabel: i && r.createElement(Qe.C, null), userId: e.userId || p.user.id_str, withHoverCard: l && !p.user.blocking, withLink: this.props.withAvatarLink, withUserPresence: c });
                            },
                        }),
                    );
                }
                _renderTombstoneHWTweet({ actionLink: e, actionText: t, children: i, id: n, style: o }) {
                    const { conversationTreeMetadata: s, onClick: l } = this.props;
                    return r.createElement(a.Z, { id: n, style: o }, r.createElement(oe.Z, { actionLink: e, actionText: t, conversationTreeMetadata: s, inline: !0, onClick: l }, i));
                }
                _renderTombstone(e, t) {
                    const { conversationTreeMetadata: i, isFocal: n, onClick: o, tweet: s } = this.props,
                        l = d.Z.getOriginalTweet(s),
                        { richText: c } = t;
                    return l && t && c ? r.createElement(a.Z, { id: e, style: Lt.spacingVertical }, r.createElement(oe.Z, { actionLink: n ? void 0 : l.permalink, actionText: n ? void 0 : ct, conversationTreeMetadata: i, inline: !0, onClick: n ? void 0 : o }, r.createElement(ne.Z, { entities: c.entities, rtl: c.rtl, text: c.text }))) : null;
                }
                _hasPhoto() {
                    const { tweet: e } = this.props,
                        t = d.Z.getOriginalTweet(e),
                        i = t.extended_entities && t.extended_entities.media;
                    return !!(i && i.length > 0) && i.some((e) => "photo" === e.type);
                }
                _quoteTweetHasPhoto() {
                    const { tweet: e } = this.props,
                        t = d.Z.getOriginalTweet(e);
                    return !!(t.quoted_status && t.quoted_status.entities && t.quoted_status.entities.media && t.quoted_status.entities.media.length > 0 && t.quoted_status.entities.media.some((e) => "photo" === e.type));
                }
                _getFirstPhoto() {
                    const { tweet: e } = this.props,
                        t = d.Z.getOriginalTweet(e);
                    let i;
                    const n = t.extended_entities?.media;
                    if ((n && n.length > 0 && "photo" === n[0].type && (i = n[0].media_url_https), i)) return i;
                    const r = t.quoted_status?.entities?.media;
                    return r && r.length > 0 && "photo" === r[0].type && (i = r[0].media_url_https), i;
                }
                _richContentProps() {
                    const { featureSwitches: e } = this.context,
                        { enableKeyboardShortcuts: t, forwardPivotInfo: i, inlineCalloutInfo: n, innerForwardPivotInfo: o, innerNudges: s, isFocal: a, linkableQuotedTweet: l, nudges: c, onCardLinkClick: h, onMediaClick: u, onQuoteTweetClick: p, onQuoteTweetMediaClick: _, onQuotedTweetAvatarClick: m, onQuotedTweetScreenNameClick: w, preventVideoPlayback: g, promotedContent: T, quoteTweetSocialContextProps: b, quotedTweetTombstoneInfo: C, translation: k, tweet: f, withAltTextBadge: v, withCardLinks: y, withCondensedQuoteTweet: E, withHalvedMediaSize: x, withInlineMedia: S, withReaderModeActive: I, withUserHoverCard: Z } = this.props,
                        P = a ? "DETAIL" : "TIMELINE",
                        A = this.context.featureSwitches.isTrue("responsive_web_compact_media_max_height_enabled_for_all"),
                        L = this._hasPhoto() || this._quoteTweetHasPhoto(),
                        R = L || (0, Le.wV)(f),
                        U = (A ? R : L) && !!Y.ZP.isDesktopOS() && !a,
                        F = d.Z.getOriginalTweet(f),
                        M = this.props.withActionsDisabled || (0, ue.$y)(e, F, ue.d.VoteOnPoll),
                        B = (this._isTweetInConversation() && !a) || !this._isEdgeToEdgeEnabled,
                        { showGrokTranslation: H, showTranslation: N } = this.state,
                        D = H ? F.grok_translated_post?.associated_data?.poll_translations : N ? k?.pollTranslations : void 0;
                    return { cardCacheLocationKey: P, displayMediaMetadata: a, enableKeyboardShortcuts: t, filterOutInlineMedia: a || I, forwardPivotInfo: f.softIntervention || i, inlineCalloutInfo: n, innerForwardPivotInfo: o, innerNudges: s, isMediaMaxHeightEnabled: U, loggedInUserId: this.context.viewerUserId, mediaAltTranslations: this.state.mediaAltTranslations, mediaCacheLocationKey: P, nudges: c, onCardLinkClick: h, onGrokClick: this._onGrokClick, onMediaClick: u, onQuotedTweetAvatarClick: m, onQuotedTweetScreenNameClick: w, onQuoteTweetClick: p, onQuoteTweetMediaClick: _, pollTranslations: D, preventVideoPlayback: g, promotedContent: T, quotedTweetTombstoneInfo: C, quoteTweetSingleImageMinAspectRatio: lt, quoteTweetSocialContextProps: b, renderGrokTranslationHeaderForQuote: () => this._renderGrokTranslationHeader("quote-text"), renderJetfuelFrame: this._renderJetfuelFrame(), renderPrerollActionMenu: this._getPrerollActionMenuRenderer({}), renderQuoteTweetTombstone: (e) => r.createElement($e.Z, e), renderTranslationFeedback: this._getTranslationFeedbackRenderer("below-poll"), showAltTranslation: this.state.showTranslation, singleImageMaxAspectRatio: at, singleImageMinAspectRatio: a ? 0.1 : lt, style: Lt.richContent, tweet: f, withActionsDisabled: M, withAltTextBadge: v, withCardLinks: y, withCenterCrop: !0, withCondensedQuoteTweet: (!a && d.Z.hasMedia(F, !S)) || !!E, withHalvedMediaSize: x, withMediaTagsIcon: a, withQuoteTweetBirdwatchPivot: !0, withQuoteTweetHeaderLinks: !1, withQuoteTweetLink: l, withQuoteTweetMedia: S, withRoundMediaCorners: B, withTweetMedia: S, withUserHoverCard: Z };
                }
                _renderRichContent({ id: e }) {
                    const { location: t } = this.context.history;
                    let i;
                    if (this._isClientAllowedIntoImmersiveViewer()) {
                        const e = `^/${this.props.tweet.user.screen_name}$`,
                            n = !!t.pathname.match(e);
                        i = (0, ke.nr)(this.props.tweet, { isProfilePage: n });
                    }
                    const o = this.context.featureSwitches.getNumberValue("responsive_web_compact_media_max_height");
                    return r.createElement(r.Fragment, null, this._renderArticleContent(), r.createElement(_.ZP.Provider, { value: { tweetMediaItemImmersiveViewerEntryPoint: () => i, compactMediaMaxHeight: () => o } }, r.createElement(y.Z, (0, n.Z)({}, this._richContentProps(), { id: e }))), this._renderGrokFollowUps(), this._renderAuthorAppealLabel(), this._renderBirdwatchPivot());
                }
            }
            (At.contextType = X.rC), (At.displayName = "Tweet"), (At.defaultProps = { displayBlocked: !1, isFocal: !1, linkify: !0, onBirdwatchNotesIconClick: J.Z, onModeratedIconClick: J.Z, onModeratedIconShown: J.Z, replyContext: D.ZP.ReplyContextTypes.Isolated, withActions: !1, withAltTextBadge: !1, withAvatarLink: !0, withBirdwatchPivots: !0, withCardLinks: !1, withInlineMedia: !0, withQuotedTweetLinks: !1, withRemoveFromBookmarks: !1, withSocialContext: !1, withTimestampLink: !0, withUserHoverCard: !0, withUserAvatar: !0, withUserName: !0, withTimestamp: !0, onShowMoreClick: () => {} });
            const Lt = l.default.create((e) => ({
                    askGrokPromo: { paddingVertical: e.spaces.space12 },
                    postEngagementsUpsell: { marginBottom: e.spaces.space16 },
                    inline_media: { display: "flex", marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
                    replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
                    replyContext: { marginBottom: e.spaces.space2 },
                    selfThreadCTA: { marginHorizontal: `calc(-1 * ${e.componentDimensions.gutterHorizontal})` },
                    actionBarFocalTweet: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, height: e.spaces.space48, justifyContent: "space-between" },
                    actionBarWithInlineReply: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small },
                    fosnrAuthorAppealLabel: { marginTop: e.spaces.space8 },
                    promotedIndicator: { marginTop: e.spaces.space12 },
                    promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
                    promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
                    promotedDetails: { marginTop: e.spaces.space4 },
                    promotionStatus: { marginTop: e.spaces.space12 },
                    promotedUserCard: { marginTop: e.spaces.space8 },
                    richContent: { marginTop: e.spaces.space12 },
                    socialContext: { marginBottom: e.spaces.space4, marginTop: `-${e.spaces.space4}` },
                    spacingVertical: { marginVertical: e.spaces.space4 },
                    tweetStats: { marginTop: e.spaces.space4, flexDirection: "row" },
                    detailItem: { paddingHorizontal: e.spaces.space4, flexWrap: "wrap" },
                    detailItemContainer: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, flexDirection: "row", paddingVertical: e.spaces.space16 },
                    staleEditLink: { color: e.colors.blue500 },
                    staleEditCallout: { marginEnd: "0.5em" },
                    expandedTweetText: { marginTop: e.spaces.space12 },
                    footerContainer: { marginVertical: e.spaces.space16 },
                    footerContent: { alignItems: "start", flexDirection: "row", justifyContent: "space-between" },
                    footerIcons: { flexDirection: "row" },
                    edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 },
                    readerBottomBar: { borderBottomColor: e.colors.nestedBorderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginTop: e.spaces.space20, width: e.spaces.space32 },
                    timeLocSource: { flexShrink: 1, marginEnd: e.spaces.space12 },
                    actionsContainer: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", alignItems: "center" },
                    likeBadge: { backgroundColor: e.colors.blue500, borderRadius: e.borderRadii.infinite, color: e.colors.whiteOnColor, padding: e.spaces.space4, position: "absolute" },
                    pivotContainer: { display: "flex", gap: e.spaces.space8, flexDirection: "row" },
                    translationHeaderInQuote: { marginBottom: 0, marginTop: e.spaces.space8 },
                })),
                Rt = (0, st.n)((0, ye.Z)(At));
            function Ut({ children: e, handleLikeOrUnlike: t, isCompact: i, primaryFeedbackItem: n, tweet: o }) {
                const s = o.retweeted_status?.favorited || o.favorited;
                const l = [Lt.likeBadge, { start: 24, top: 54, transform: [{ rotate: "0deg" }] }];
                return i
                    ? r.createElement(
                          G.Z,
                          {
                              isSwipeLeftEnabled: void 0 !== n,
                              onSwipeLeft: function () {
                                  n?.onClick?.();
                              },
                              onSwipeRight: function () {
                                  t?.();
                              },
                              rightIcon: n?.Icon,
                          },
                          e,
                          s && r.createElement(a.Z, { style: l }, r.createElement(j.default, null)),
                      )
                    : e;
            }
            function Ft(e) {
                switch (e) {
                    case "Eligible":
                    case "EligibleWithPreviousCampaign":
                        return !0;
                    default:
                        return !1;
                }
            }
            function Mt(e) {
                switch (e) {
                    case "IneligibleBoostCampaignRunning":
                        return "boost-in-progress";
                    case "IneligibleCampaignRunning":
                        return "in-progress";
                    case "IneligibleCampaignPaused":
                        return "paused";
                    default:
                        return (0, be.ZP)(new Error(`Tweet promotion badge should never render when quick promote eligibility is ${e || "null"}`), { level: "warning" }), "in-progress";
                }
            }
            const Bt = ({ onOpenGrokUpdate: e }) => {
                const { openGrok: t } = (0, Be.Z)();
                return (
                    r.useEffect(() => {
                        e(t);
                    }, [e, t]),
                    null
                );
            };
            function Ht(e) {
                const t = (0, Re.Z)(),
                    i = r.useCallback(() => {
                        t.scribe({ element: "grok_post_atgrok_button", action: "click" });
                    }, [t]),
                    n = r.useCallback(() => {
                        t.scribe({ element: "grok_post_atgrok_button", action: "impression" });
                    }, [t]);
                return r.createElement(a.Z, { style: Lt.askGrokPromo }, r.createElement(ce.D, { id: "grok_post_atgrok_button", onFullyVisible: n, position: "bottom", testID: "grok_post_atgrok_button" }), r.createElement(O.ZP, { icon: r.createElement(te.x1, null), link: "/i/grok", onClick: i, type: "primaryFilled" }, Pt));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2.9e51f52a.js.map

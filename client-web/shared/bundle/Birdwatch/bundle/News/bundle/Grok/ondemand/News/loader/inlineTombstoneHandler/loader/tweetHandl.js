"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"],
    {
        555492: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = i(202784).createContext({ heightsReady: !0 });
        },
        231214: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(202784);
            const n = (0, i(523561).Z)({
                loader: () =>
                    Promise.all([i.e("icons.21"), i.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"), i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"), i.e("ondemand.IntentPrompt")]).then(i.bind(i, 958679)),
            });
        },
        400196: (e, t, i) => {
            i.d(t, { Z9: () => pt, ZP: () => bt });
            var n = i(807896),
                o = (i(136728), i(202784)),
                s = i(325686),
                r = i(782261),
                d = i(384153),
                a = i(341189),
                l = i(542908),
                c = i(966582),
                h = i(175993),
                u = i(111677),
                _ = i.n(u),
                m = i(516951),
                p = i(912021),
                b = i(908478),
                w = i(933794),
                C = i(745153),
                g = i(392237),
                v = i(530745),
                k = i(731708),
                T = i(154003);
            const A = _().gf5e9ea6;
            function y({ heading: e, onUndoClick: t, subheading: i, withUndo: n }) {
                return o.createElement(s.Z, { style: f.header }, o.createElement(s.Z, { "aria-live": "polite", style: f.headerSectionLeft }, o.createElement(k.ZP, { size: "headline2", weight: "bold" }, e), o.createElement(k.ZP, { color: "gray700" }, i)), o.createElement(s.Z, null, n && o.createElement(T.ZP, { onClick: t, style: f.headerUndoButton, type: "primaryOutlined" }, A)));
            }
            const f = g.default.create(({ spaces: e }) => ({ header: { alignItems: "flex-start", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: e.space20 }, headerSectionLeft: { flex: "1" }, headerUndoButton: { minWidth: e.space72 } }));
            var S = i(143670);
            function I({ item: e, onItemClick: t }) {
                const { Icon: i, disabled: n, link: s, subText: r, testID: d, text: a } = e,
                    l = o.useCallback(() => {
                        e.onClick?.(), t?.(e);
                    }, [e, t]),
                    c = o.useCallback(() => (i ? o.createElement(i, { style: E.icon }) : null), [i]);
                return o.createElement(S.Z, { Icon: c, actionSubText: r, actionText: a, disabled: n, link: s, onClick: l, style: E.item, testID: d });
            }
            const E = g.default.create(({ spaces: e }) => ({ icon: { marginEnd: e.space24 }, item: { paddingHorizontal: e.space8 } })),
                P = _().f376e9d4,
                M = _().d7c93b6c,
                x = _().b3abacee;
            function R({ heading: e = M, items: t, onItemClick: i, onMenuDismiss: n, onUndoClick: r, style: d, subheading: a = x, withUndo: l = !0, "aria-label": c = P }) {
                const h = o.useCallback(
                        (e) => {
                            ((e) => !(e.altKey || e.ctrlKey || e.metaKey) && e.key === v.nQ)(e) && n();
                        },
                        [n],
                    ),
                    u = o.useMemo(() => t.map((e) => (!e?.text || e.excludeFromActionMenu ? null : o.createElement(I, { item: e, key: e.text, onItemClick: i }))), [t, i]),
                    _ = o.useMemo(() => [Z.container, d], [d]);
                return o.createElement(C.Z, null, o.createElement(s.Z, { onKeyUp: h, style: _ }, o.createElement(y, { heading: e, onUndoClick: r, subheading: a, withUndo: l }), o.createElement(s.Z, { "aria-label": c, role: "menu" }, u)));
            }
            const Z = g.default.create((e) => ({ container: { paddingTop: e.spaces.space12, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
            var U = i(530525),
                D = i(439592),
                B = i(529356);
            const L = i.p + "pin-tweet-reply.767a297a.png",
                N = _().j24c37b2,
                F = _().a2411360,
                O = _().e8a14626,
                H = _().d41305a8,
                V = ({ style: e }) => o.createElement(s.Z, { style: e }, o.createElement(U.Z, { "aria-label": H, aspectMode: D.Z.exact(1.5), image: L })),
                K = ({ onClose: e }) => o.createElement(B.Z, { actionLabel: N, graphic: V, graphicDisplayMode: "illustrationFullWidth", headline: F, isFullHeightOnMobile: !1, onAction: e, onClose: e, subtext: O, withCloseButton: !1 });
            var W = i(808692),
                q = i(622200),
                Q = i(459284),
                z = i(376293),
                G = i(148838),
                j = i(312922),
                X = i(270130),
                $ = i(663550),
                J = i(293115),
                Y = i(395067),
                ee = i(831757),
                te = i(479506),
                ie = i(942893),
                ne = i(903019),
                oe = i(214647),
                se = i(788993),
                re = i(725516),
                de = i(443781),
                ae = i(231214),
                le = i(324260),
                ce = i(177371),
                he = i(352975),
                ue = i(383494),
                _e = i(267077),
                me = i(71620),
                pe = i(870358),
                be = i(988566),
                we = i(668214),
                Ce = i(481242),
                ge = i(575652),
                ve = i(491963),
                ke = i(175856),
                Te = i(997174),
                Ae = i(80890),
                ye = i(694180),
                fe = i(629196),
                Se = i(390387),
                Ie = i(38562),
                Ee = i(601576),
                Pe = i(466380),
                Me = i(836255),
                xe = i(695427),
                Re = i(268617),
                Ze = i(919022);
            const Ue = (e, t) => (0, Ae.MW)(e, t.tweetId),
                De = (e, { urtAdvertiser: t, urtPromotedContent: i }) => {
                    if (e && i) {
                        const n = e.promoted_content;
                        return { ...e, promoted_content: { adMetadataContainer: i.adMetadataContainer, disclosure_type: i.disclosureType, experiment_values: i.experimentValues, impression_id: i.impressionId, advertiser: t ? { id_str: t.id_str } : void 0, advertiser_name: t?.name || void 0, click_tracking_info: i.clickTrackingInfo, ...n } };
                    }
                    return e;
                },
                Be = (e, t) => t.socialContext,
                Le = (e, t) => {
                    const i = t.socialContext && t.socialContext.topicContext;
                    return i ? Pe.Z.select(e, i.topicId) : void 0;
                },
                Ne = (e, t) => {
                    const i = t.tweetId,
                        n = i && Me.Z.select(e, i);
                    return n ? (0, ve.z0)(e, n) : void 0;
                },
                Fe = (0, _e.Z)((e) => ({ current: e })),
                Oe = Me.Z.createHydratedTweetSelectorWeakMap((e, t) => Fe(t.tweetId)),
                He = (e, t) => {
                    const i = Oe(e, t),
                        n = i?.quoted_status;
                    return n ? (0, ve.z0)(e, n) : void 0;
                },
                Ve = (e, t) => t.urtPromotedContent,
                Ke = (e, { urtPromotedContent: t }) => (t ? Ze.ZP.select(e, t.advertiserId) : null),
                We = Me.Z.createHydratedTweetSelectorWeakMap((e, t) => Fe(t.contextTweetId)),
                qe = (e, t) => (0, ke.t5)(e, ke.vA),
                Qe = (0, we.Z)()
                    .propsFromState(() => ({ articleDomains: ge.cb, community: Ne, contextTweet: We, displaySensitiveMedia: Ie.f1, explicitSocialContext: Be, isActiveCreator: Se.WM, isInEditHistory: xe.l0, isNsfwUser: Ie.EF, isPinned: Ue, pinnedRepliesEducationFlag: qe, quoteTweetCommunity: He, topic: Le, tweet: Oe, tweetDetailNav: Te.wZ, urtAdvertiser: Ke, urtPromotedContent: Ve, userCountry: Se.GG, userLanguage: Se.VT, viewerUser: Ze.ZP.selectViewerUser }))
                    .adjustStateProps(({ articleDomains: e, community: t, contextTweet: i, displaySensitiveMedia: n, explicitSocialContext: o, isActiveCreator: s, isInEditHistory: r, isNsfwUser: d, isPinned: a, pinnedRepliesEducationFlag: l, quoteTweetCommunity: c, topic: h, tweet: u, tweetDetailNav: _, urtAdvertiser: m, urtPromotedContent: p, userCountry: b, userLanguage: w, viewerUser: C }) => {
                        const g = u && (0, be.D$)(u, C?.id_str),
                            v = u?.card?.binding_values?.domain?.string_value,
                            k = (0, ge.ex)(e, v),
                            T = u?.quoted_status,
                            A = T ? (0, be.D$)(T, C?.id_str, c) : void 0,
                            y = A && (0, be.rl)(A),
                            f = (0, pe.uA)(t?.role),
                            S = o || g;
                        return { contextTweet: i, displaySensitiveMedia: n, isActiveCreator: s, isCardArticle: k, isInEditHistory: r, isNsfwUser: d, isPinned: a, pinnedRepliesEducationFlag: l, promotedContentAdvertiser: m || void 0, quoteTweetSocialContextProps: y, socialContext: S, socialContextColor: (0, pe.J2)(t, S), topic: h, tweet: De(u, { urtPromotedContent: p, urtAdvertiser: m }), tweetDetailNav: _, userCountry: b, userLanguage: w, viewerUser: C, withCommunityModerationAuthority: f };
                    })
                    .propsFromActions(() => ({ addToast: Ee.fz, addPinnedReplyEducationFlag: () => (0, ke.pj)(ke.vA), block: Ze.ZP.block, createLocalApiErrorHandler: (0, me.zr)("TWEET_CONTAINER_CONTEXT"), fetchCommunityIfNeeded: ve.ZP.fetchOneIfNeeded, fetchTopicIfNeeded: Pe.Z.fetchOneIfNeeded, like: Me.Z.like, log: ye.cM, mute: fe.r, onUnretweet: Re.Z, richScribeAction: Ce.richScribeAction, setArticlesVisited: ge.Ji, undoTopicNotInterested: Pe.Z.undoNotInterested, unblock: Ze.ZP.unblock, unlike: Me.Z.unlike, unmute: Ze.ZP.unmute }));
            var ze = i(759469),
                Ge = i(125363);
            var je = i(390686),
                Xe = i(555492),
                $e = i(306677);
            const Je = "top-impression-pixel",
                Ye = "bottom-impression-pixel",
                et = "right-impression-pixel",
                tt = "left-impression-pixel";
            class it extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._areHeightsReady = () => this.props.heightsReady),
                        (this._renderImpressionPixels = (e) => o.createElement(o.Fragment, null, o.createElement($e.D, { id: this.props.id, onFullyVisible: this._handleOnVisible(e), position: "top", testID: Je }), o.createElement($e.D, { id: this.props.id, onFullyVisible: this._handleOnVisible(e), position: "right", testID: et }), o.createElement($e.D, { id: this.props.id, onFullyVisible: this._handleOnVisible(e), position: "bottom", testID: Ye }), o.createElement($e.D, { id: this.props.id, onFullyVisible: this._handleOnVisible(e), position: "left", testID: tt }))),
                        (this._handleOnVisible = (e) => () => {
                            const { id: t, onVisible: i } = this.props,
                                n = e();
                            n && this._lastVisibleId !== t && i && ((this._lastVisibleId = t), i(n));
                        }),
                        (this._handlePlacementChange = (e) => {
                            const { id: t, onFullyVisible: i } = this.props;
                            if (!this._areHeightsReady()) return;
                            const n = e.visibleFraction() >= je.xn,
                                o = e.item.height > e.viewport.height,
                                s = e.verticalOverlap() === e.viewport.height || (o && e.visibleFraction() >= je.xh);
                            this._lastFullyVisibleId !== t && (n || s) && ((this._lastFullyVisibleId = t), i && i(e));
                        }),
                        (this._handleLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { height: t, width: i },
                                    },
                                } = e,
                                n = { width: i, height: t };
                            if (this._prevLayout && (this._prevLayout.width !== i || this._prevLayout.height !== t)) {
                                const { onResize: e } = this.props;
                                e && e(this._prevLayout, n);
                            }
                            this._prevLayout = n;
                        });
                }
                render() {
                    const { children: e, id: t } = this.props;
                    return o.createElement(je.ZP, { key: t, onLayout: this._handleLayout, onPlacementChange: this._handlePlacementChange }, ({ getScrollPlacement: t }) => o.createElement(o.Fragment, null, this._areHeightsReady() && this._renderImpressionPixels(t), e));
                }
            }
            function nt(e) {
                return o.createElement(Xe.Z.Consumer, null, ({ heightsReady: t }) => o.createElement(it, (0, n.Z)({}, e, { heightsReady: t })));
            }
            const ot = _().f277e94a,
                st = _().b52a940c,
                rt = _().da59404c,
                dt = _().e267df68,
                at = _().d5f162b6,
                lt = { [se.Z.Retweet]: !0, [se.Z.Pin]: !0, [se.Z.Community]: !0, [se.Z.ReplyPin]: !0, [se.Z.Bird]: !0 };
            class ct extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._shouldLogPromotedImpression = ut.bind(null, this.context.featureSwitches)),
                        (this._isProbablyRemovedByAdBlocker = ht.bind(null, this.context.featureSwitches)),
                        (this._isArticleNudgeEnabled = this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")),
                        (this._isCompatibilityScribeEnabled = this.context.featureSwitches.isTrue("responsive_web_extension_compatibility_scribe")),
                        (this._isCommunitiesEnabled = this.context.featureSwitches.isTrue("c9s_enabled")),
                        (this._isEditTweetConsumptionEnabled = this.context.featureSwitches.isTrue("responsive_web_edit_tweet_enabled") || this.context.featureSwitches.isTrue("subscriptions_feature_labs_1004")),
                        (this._isLeaveBehindMenuRepliesEnabled = this.context.featureSwitches.isTrue("responsive_web_lbm_v2_replies_enabled")),
                        (this._isLeaveBehindMenuHomeEnabled = this.context.featureSwitches.isTrue("responsive_web_lbm_v2_home_enabled")),
                        (this._muteAdUpsellEnabled = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled")),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._renderBlockOrUnblockConfirmationSheet = () => {
                            const { tweet: e } = this.props,
                                { user: t } = e;
                            return (0, z.ed)({ confirmation: (0, z.LI)(t), onClose: this._handleBlockOrUnblockConfirmClose, handleConfirm: this._handleBlockOrUnblockUserConfirm });
                        }),
                        (this._handleShowReportedTweet = () => {
                            this.setState({ displayReported: !0, enableKeyboardShortcuts: !1 });
                        }),
                        (this._handleUnretweet = () => {
                            const { createLocalApiErrorHandler: e, onUnretweet: t, tweet: i } = this.props;
                            t(r.Z.getOriginalTweet(i).id_str, { promotedContent: i.promoted_content }).catch(e(j.P));
                        }),
                        (this._handleLikeOrUnlike = () => {
                            const { like: e, tweet: t, unlike: i } = this.props,
                                n = this._getPromotedContent();
                            t.favorited ? i(t.id_str, { promotedContent: n }) : e(t.id_str, { promotedContent: n });
                        }),
                        (this._getShortcutKeyHandlers = () => {
                            const { onClick: e, shortcutKey: t } = this._getMuteOrUnmuteAction(),
                                { shortcutKey: i } = this._getBlockOrUnblockAction(),
                                n = this.context.viewerUserId === this.props.tweet.user.id_str,
                                o = {};
                            return t && (o[t] = e), i && !n && (o[i] = this._handleBlockOrUnblockConfirmOpen), o;
                        }),
                        (this._handleBlockOrUnblockConfirmOpen = () => {
                            this.setState({ showBlockOrUnblockConfirmation: !0 });
                        }),
                        (this._handleBlockOrUnblockConfirmClose = () => {
                            this.setState({ showBlockOrUnblockConfirmation: !1 });
                        }),
                        (this._handleBlockOrUnblockUserConfirm = () => {
                            const { onClick: e } = this._getBlockOrUnblockAction();
                            this._handleBlockOrUnblockConfirmClose(), e && e();
                        }),
                        (this._getBaseTweetProps = () => {
                            const { analytics: e, contextualClientEventInfo: t, conversationTreeMetadata: i, feedbackItems: n, focalTweetId: o, forwardPivotInfo: s, isActiveCreator: d, isInEditHistory: a, isNsfwUser: l, isPinned: c, onTweetDismiss: h, ruxContext: u, saveAsRecentSearch: _, shouldStoreTypeaheadItem: m, socialContext: p, topicFollowPrompt: b, tweet: w, userCountry: C, userLanguage: g, withActionsDisabled: v, withCommunityModerationAuthority: k, withCurationMenu: T, withHideReply: A, withMuteConversation: y, withUnhideReply: f, withViewHiddenReplies: S } = this.props,
                                I = r.Z.getOriginalTweet(w),
                                E = this._getPromotedContent(),
                                P = e.contextualScribeData?.items?.[0].suggestion_details,
                                M = this._isSelected(),
                                { viewerUserId: x } = this.context,
                                R = I?.user?.id_str === x,
                                Z = !I.in_reply_to_status_id_str && R && !I.community_id_str,
                                U = this._renderConversationControlsTooltip();
                            return {
                                inlineCalloutInfo: this._getInlineCalloutInfo(),
                                isFocal: o === w.id_str,
                                isInEditHistory: a,
                                onAnalyticsClick: this._handleAnalyticsClick,
                                onAvatarClick: this._handleAvatarClick,
                                onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
                                onBirdwatchNotesIconShown: this._handleBirdwatchNotesIconShown,
                                onBlur: this._handleBlur,
                                onCardLinkClick: this._handleCardLinkClick,
                                onClick: w.isPreview ? this._handlePreviewClick : this._handleTweetClick,
                                onEngagementsClick: this._handleEngagementsClick,
                                onEntityClick: this._handleEntityClick,
                                onFocus: this._handleFocus,
                                onFosnrAuthorLabelImpression: this._handleFosnrAuthorAppealImpression,
                                onFosnrAuthorAppealClick: this._handleFosnrAuthorAppealClick,
                                onLikeSuccess: this._handleLikeSuccess,
                                onMediaClick: w.isPreview ? this._handleEmbeddedMediaPreviewClick : this._handleEmbeddedMediaClick,
                                onMediaHashtagHighlightClick: this._handleMediaHashtagHighlightClick,
                                onModeratedIconClick: this._handleModeratedIconClick,
                                onModeratedIconShown: this._handleModeratedIconShown,
                                onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
                                onPromoteButtonClick: this._handlePromoteButtonClick,
                                onPromoteAgainButtonClick: this._handlePromoteAgainButtonClick,
                                onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
                                onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
                                onPromotedUserProfileCardClick: this._handlePromotedUserProfileCardClick,
                                onQuoteTweetClick: this._handleQuoteTweetClick,
                                onQuoteTweetMediaClick: this._handleQuotedTweetMediaClick,
                                onQuotedTweetAvatarClick: this._handleQuotedTweetAvatarClick,
                                onQuotedTweetScreenNameClick: this._handleQuotedTweetScreenNameClick,
                                onShowMoreClick: this._handleShowMoreClick,
                                onReply: this._handleInlineReplyClick,
                                onReplyContextClick: this._handleReplyContextClick,
                                onScreenNameClick: this._handleScreenNameClick,
                                onSelfThreadClick: this._handleSelfThreadClick,
                                onSelfThreadImpression: this._handleSelfThreadImpression,
                                onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
                                onUserFollowIndicatorClick: this._handleUserFollowIndicator,
                                onUserFollowIndicatorDismissClick: this._handleUserFollowIndicatorDismiss,
                                onUserFollowIndicatorLearnMoreClick: this._handleUserFollowIndicatorLearnMoreClick,
                                promotedContent: E,
                                renderCurationActionMenu: T && !w.isPreview ? this._getRenderCurationActionMenu(s && s.displayType, s && s.landingUrl, n, d, v, l, c, M, this._handleCaretClick, h, E, I, A, k, y, f, Z, S, i, U, C, g, this._setLeaveBehindActionItems, this._shouldRenderImmediateDismiss()) : void 0,
                                renderPrerollActionMenu: this._getRenderPrerollActionMenu(d, l, h, E, I, C, g),
                                saveAsRecentSearch: _,
                                shouldStoreTypeaheadItem: m,
                                to: { state: { focal: I.id_str, socialContext: p, contextualClientEventInfo: t, contextTweetId: w.id_str, promotedContent: E, suggestionDetails: P, topicFollowPrompt: b }, pathname: I.permalink, query: u ? { cxt: u } : void 0 },
                            };
                        }),
                        (this._getReaderModeTweetProps = () => {
                            const { analytics: e, contextualClientEventInfo: t, hideHighlightedUserLabel: i, ruxContext: n, socialContext: o, topicFollowPrompt: s, tweet: d, tweetTextSize: a } = this.props,
                                l = r.Z.getOriginalTweet(d),
                                c = this._getPromotedContent(),
                                h = e.contextualScribeData?.items?.[0].suggestion_details;
                            return { hideHighlightedUserLabel: i, onAnalyticsClick: m.Z, onAvatarClick: m.Z, onBlur: this._handleBlur, onCardLinkClick: this._handleCardLinkClick, onClick: d.isPreview ? this._handlePreviewClick : this._handleTweetClick, onEngagementsClick: m.Z, onEntityClick: m.Z, onFocus: this._handleFocus, onMediaClick: this._handleEmbeddedMediaClick, onReplyContextClick: m.Z, to: { state: { focal: l.id_str, socialContext: o, contextualClientEventInfo: t, contextTweetId: d.id_str, promotedContent: c, suggestionDetails: h, topicFollowPrompt: s }, pathname: l.permalink, query: n ? { cxt: n } : void 0 }, tweet: d, tweetTextSize: a || "headline1", withActions: !1, withAvatarLink: !1, withReaderModeActive: !0, withUserAvatar: !1, withUserHoverCard: !1, withUserName: !1, withTimestamp: !1 };
                        }),
                        (this._getInlineCalloutInfo = () => {
                            const { analytics: e, displaySensitiveMedia: t, isNsfwUser: i, tweet: n, userCountry: o, userLanguage: s } = this.props,
                                { featureSwitches: r, viewerUserId: d } = this.context;
                            if ((0, oe.pG)({ displaySensitiveMedia: t, featureSwitches: r, isNsfwUser: i, viewerUserId: d, tweet: n, userCountry: o, userLanguage: s })) return (0, oe.Mt)(n, e.contextualScribeNamespace, r);
                        }),
                        (this._getBlockOrUnblockAction = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: i, tweet: n, unblock: o } = this.props,
                                { user: s } = n,
                                r = this._getPromotedContent(),
                                d = {
                                    addToast: e,
                                    createLocalApiErrorHandler: i,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, he.Z)({ ...d, block: t, unblock: o, user: s, promotedContent: r });
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: i, mute: n, tweet: o, unmute: s } = this.props,
                                { user: r } = o,
                                d = {
                                    addToast: e,
                                    createLocalApiErrorHandler: t,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                },
                                a = this._getPromotedContent();
                            return (0, ue.Z)({ ...d, mute: n, unmute: s, user: r, promotedContent: a, history: i, muteAdUpsellEnabled: this._muteAdUpsellEnabled, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._renderConversationControlsTooltip = () => {
                            const { viewerUserId: e } = this.context,
                                { showMidConversationControlEducationText: t, tweet: i } = this.props,
                                n = r.Z.getOriginalTweet(i);
                            if (!n) return !1;
                            const o = !!n.community_id_str,
                                s = n.user && n.user.id_str === e,
                                d = n.reply_count > 0;
                            return !n.in_reply_to_status_id_str && s && d && !o && t;
                        }),
                        (this._getRenderCurationActionMenu = (0, p.Z)((e, t, i, n, s, r, d, a, l, c, h, u, _, m, p, b, w, C, g, v, k, T, A, y) => () => o.createElement(Q.Z, { feedbackItems: i, forwardPivotDisplayType: e, forwardPivotLandingUrl: t, isActiveCreator: n, isDisabled: s, isNsfwUser: r, isPinned: d, onMenuClick: l, onTweetDismiss: c, promotedContent: h, setLeaveBehindActionItems: A, tweet: u, userCountry: k, userLanguage: T, withChangeConversationControls: w, withChangeConversationControlsTooltip: v, withCommunityModerationAuthority: m, withHideReply: _, withImmediateDismiss: y, withMuteConversation: p, withUnhideReply: b, withViewHiddenReplies: C }))),
                        (this._getRenderPrerollActionMenu = (0, p.Z)((e, t, i, n, s, r, d) => () => o.createElement(Q.Z, { isActiveCreator: e, isForPreroll: !0, isNsfwUser: t, onTweetDismiss: i, promotedContent: n, tweet: s, userCountry: r, userLanguage: d, withMuteConversation: !1 }))),
                        (this._getMemoizedQuoteTweetScribeData = (0, p.Z)((e, t, i, n) => {
                            const o = (({ contextualScribeData: e, isSelected: t, overflow: i, promotedContent: n, scribeData: o, tweet: s }) => {
                                const { items: r = [] } = o || {},
                                    { items: d = [] } = e || {};
                                return { ...(e || {}), ...(o || {}), items: ie.Z.leftMergeScribeItems(ie.Z.addTweetToItems(r.length ? [...r] : [], s, n, t, i, !0), d) };
                            })({ contextualScribeData: n, isSelected: this._isSelected(), overflow: i, promotedContent: t, scribeData: {}, tweet: e });
                            return (this._cachedFinalScribeData && (0, b.Z)(o, this._cachedFinalScribeData)) || (this._cachedFinalScribeData = o), this._cachedFinalScribeData;
                        })),
                        (this._getMemoizedScribeData = (0, p.Z)((e, t, i, n = {}, o, s, r) => {
                            const d = (({ clickTrackingEmbedDetails: e, contextualScribeData: t, isQuotedTweet: i, isSelected: n, overflow: o, promotedContent: s, scribeData: r, tweet: d }) => {
                                const { items: a = [] } = r || {},
                                    { items: l = [] } = t || {};
                                return { ...(t || {}), ...(r || {}), ...(e && { click_tracking_embed_details: e }), items: ie.Z.leftMergeScribeItems(ie.Z.addTweetToItems(a.length ? [...a] : [], d, s, n, o, i), l) };
                            })({ tweet: e, promotedContent: t, overflow: i, scribeData: n, isSelected: this._isSelected(), contextualScribeData: o, clickTrackingEmbedDetails: s, isQuotedTweet: r });
                            return (this._cachedFinalScribeData && (0, b.Z)(d, this._cachedFinalScribeData)) || (this._cachedFinalScribeData = d), this._cachedFinalScribeData;
                        })),
                        (this._scribeAction = (e, t = {}, i, n, o) => {
                            const { analytics: s, history: d, richScribeAction: a, tweet: l } = this.props,
                                c = d.location.state?.overflow,
                                h = this._getPromotedContent();
                            let u = { ...t };
                            if (n) {
                                const e = r.Z.getOriginalTweet(l);
                                let t;
                                o ? e.quoted_status && e.quoted_status.user && (t = ie.Z.getUserItem(e.quoted_status.user, h)) : (t = ie.Z.getUserItem(e.user, h));
                                const i = u.items ? [...u.items, ...(t ? [t] : [])] : t ? [t] : [];
                                u = { ...u, items: i };
                            }
                            const _ = this._getMemoizedScribeData(l, h, c, u, s.contextualScribeData, i, o);
                            a({ ...s.contextualScribeNamespace, ...e }, _);
                        }),
                        (this._handlePoliticalSponsorWebsiteClick = () => {
                            this._scribeAction({ component: "political_ad", element: "organization_website", action: "click" });
                        }),
                        (this._handlePromotedDisclaimerLearnMoreClick = (e) => () => {
                            this._scribeAction({ component: e, element: "learn_more", action: "click" });
                        }),
                        (this._handlePromotedIndicatorClick = () => {
                            this._handleAsyncPromotedEvent($.dx.FOOTER_PROFILE);
                        }),
                        (this._handleFocus = () => {
                            this.setState({ enableKeyboardShortcuts: !0 });
                        }),
                        (this._handleBlur = () => {
                            this.setState({ enableKeyboardShortcuts: !1 });
                        }),
                        (this._getPromotedContent = () => {
                            const { displayPromotedContent: e, tweet: t } = this.props;
                            return e ? t.promoted_content : void 0;
                        }),
                        (this._handleImpression = (e) => {
                            this._shouldLogPromotedImpression(e) && this._handleAsyncPromotedEvent($.dx.IMPRESSION);
                        }),
                        (this._handleFullyVisible = (e) => {
                            this._shouldLogPromotedImpression(e) && this._handleAsyncPromotedEvent($.dx.DWELL);
                        }),
                        (this._handleResize = (e, t) => {
                            !this._isProbablyRemovedByAdBlocker(e) && this._isProbablyRemovedByAdBlocker(t) && (G.Z.recordAdBlockerPresence(), this._isCompatibilityScribeEnabled && this._scribeAction({ action: "blocked_ad" }));
                        }),
                        (this._handleInlineReplyClick = (e) => {
                            const { viewerUserId: t } = this.context,
                                { history: i, tweet: n } = this.props,
                                o = this._getPromotedContent();
                            e.preventDefault(), this._scribeAction({ element: "inline_reply", action: "reply" }), i.push({ state: { inReplyToStatusId: n.id_str, isSelfThreadReply: !!t && (0, oe.aT)({ tweet: n, viewerUserId: t }), promotedContent: o }, pathname: "/compose/post" });
                        }),
                        (this._handleLikeSuccess = () => {
                            if (this.context.featureSwitches.isTrue("home_timeline_like_reactivity_enabled")) {
                                const { onLike: e } = this.props,
                                    t = "LikeReactionFatigue";
                                try {
                                    const i = JSON.parse(window.sessionStorage.getItem(t)) || 0;
                                    i < this.context.featureSwitches.getNumberValue("home_timeline_like_reactivity_fatigue") &&
                                        e &&
                                        e().then((e) => {
                                            e?.performed && window.sessionStorage.setItem(t, JSON.stringify(i + 1));
                                        });
                                } catch (e) {}
                            }
                            const { pinnedRepliesEducationFlag: e, pinnedReplyState: t } = this.props;
                            t === le.C.Pinnable && e && this.context.featureSwitches.isTrue("responsive_web_pinned_replies_enabled") && (this._scribeAction({ element: "pinned_reply_nux", action: "impression" }), this.setState({ showPinnedReplyEducationSheet: !0 }));
                        }),
                        (this._handleReplyContextClick = (e, t) => this._scribeAction({ element: "reply_context", action: "click" }, { event_value: t })),
                        (this._handleAsyncPromotedEvent = (e, t) => {
                            const { createLocalApiErrorHandler: i, log: n, tweet: o } = this.props,
                                s = this._getPromotedContent();
                            if (s) {
                                const { disclosure_type: r, impression_id: d } = s;
                                n({ disclosureType: r, itemId: o.id_str, itemType: $.bj.TWEET, params: { event: e, impression_id: d, ...t } }).catch(i());
                            }
                        }),
                        (this._handleModeratedIconClick = () => this._scribeAction({ element: "moderated_replies_icon", action: "click" })),
                        (this._handleModeratedIconShown = () => this._scribeAction({ element: "moderated_replies_icon", action: "impression" })),
                        (this._handleBirdwatchNotesIconClick = () => this._scribeAction({ element: "birdwatch_notes_icon", action: "click" })),
                        (this._handleBirdwatchNotesIconShown = () => this._scribeAction({ element: "birdwatch_notes_icon", action: "impression" })),
                        (this._handleAnalyticsClick = () => {
                            this._scribeAction({ element: "analytics", action: "click" });
                        }),
                        (this._handleEngagementsClick = () => {
                            this._scribeAction({ element: "engagements", action: "click" });
                        }),
                        (this._handlePromoteButtonClick = () => {
                            this._scribeAction({ element: "promote", action: "click" });
                        }),
                        (this._handlePromoteAgainButtonClick = () => {
                            this._scribeAction({ element: "promote_again", action: "click" });
                        }),
                        (this._handleAvatarClick = () => {
                            const { tweet: e } = this.props;
                            this._handleSaveAsRecentSearchUser(), this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: `${e.user.id}` }, void 0, !0), this._handleAsyncPromotedEvent($.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleCaretClick = () => {
                            this._scribeAction({ element: "caret", action: "click" }), this._shouldRenderImmediateDismiss() && this.setState({ showLeaveBehindMenu: !0 });
                        }),
                        (this._handleQuotedTweetAvatarClick = () => {
                            const { tweet: e } = this.props;
                            this._handleSaveAsRecentSearchUser(!0), this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: e.quoted_status?.user?.id?.toString() || "" }, void 0, !0, !0), this._handleAsyncPromotedEvent($.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleShowMoreClick = () => {
                            this._scribeAction({ element: "tweet", action: "expand_read_more_inline" });
                        }),
                        (this._handleTweetClick = d.Z.selectiveClickHandler((e) => {
                            if (!e.defaultPrevented) {
                                if ((e.stopPropagation(), window.getSelection().toString().length)) return;
                                this._maybeAddViewingLatestTweetToast(), this._scribeAction({ element: "tweet", action: "click" }), this._handleAsyncPromotedEvent($.dx.VIEW_DETAILS);
                            }
                        })),
                        (this._maybeAddViewingLatestTweetToast = (e) => {
                            const { addToast: t, isInEditHistory: i, tweet: n } = this.props,
                                o = r.Z.getOriginalTweet(n);
                            (e ? o.quoted_status?.isStaleEdit : o.isStaleEdit) && !i && this._isEditTweetConsumptionEnabled && t({ text: rt });
                        }),
                        (this._handlePreviewClick = (e) => {
                            e.preventDefault();
                        }),
                        (this._handleEmbeddedMediaPreviewClick = (e) => {
                            e?.preventDefault();
                        }),
                        (this._handleEmbeddedMediaClick = () => {
                            this._scribeAction({ element: "platform_photo_card", action: "click" }), this._handleAsyncPromotedEvent($.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleQuotedTweetMediaClick = () => {
                            const { analytics: e, history: t, richScribeAction: i, tweet: n } = this.props,
                                o = t.location.state?.overflow,
                                s = this._getPromotedContent();
                            i({ ...e.contextualScribeNamespace, element: "platform_photo_card", action: "click" }, this._getMemoizedQuoteTweetScribeData(n, s, o, e.contextualScribeData)), this._handleAsyncPromotedEvent($.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleQuoteTweetClick = () => {
                            this._maybeAddViewingLatestTweetToast(!0);
                            const { analytics: e, history: t, richScribeAction: i, tweet: n } = this.props,
                                o = t.location.state?.overflow,
                                s = this._getPromotedContent();
                            i({ ...e.contextualScribeNamespace, element: "quoted_tweet", action: "click" }, this._getMemoizedQuoteTweetScribeData(n, s, o, e.contextualScribeData)), this._handleAsyncPromotedEvent($.dx.VIEW_DETAILS);
                        }),
                        (this._handleEntityClick = (e, t, i) => {
                            const n = $._4[t],
                                o = ee.Z[t],
                                s = this._getPromotedContent(),
                                r = ie.Z.getClickTrackingEmbedDetails(s, i);
                            if (n) {
                                const t = n === $.dx.URL_CLICK && e.currentTarget instanceof window.HTMLElement ? { url: e.currentTarget.href } : void 0;
                                this._handleAsyncPromotedEvent(n, t);
                            }
                            if (t === a.Z.MEDIA) return this._handleTweetClick(e);
                            if ((t === a.Z.TIMESTAMP && this._scribeAction({ action: l.bQ.CLICK, element: "video_timestamp" }), t === a.Z.URL && r && this._scribeAction({ action: l.bQ.CLICK_ID_EMBED }, {}, r), t === a.Z.MENTION)) {
                                const e = i?.text ? [{ item_type: te.Z.ItemType.USER, name: i.text, id: i.id_str }] : void 0;
                                return this._scribeAction({ action: o }, { targets: e }, void 0, void 0);
                            }
                            if (t === a.Z.HASHTAG) {
                                const e = i?.text ? [{ name: i.text }] : void 0;
                                return this._scribeAction({ action: o }, { targets: e }, void 0, void 0);
                            }
                            o && this._scribeAction({ action: o }, void 0, void 0, void 0);
                        }),
                        (this._handlePromotedUserProfileCardClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "user_recommendation", action: "profile_click" }, { profile_id: `${e.user.id}` }, void 0, !0), this._handleAsyncPromotedEvent($.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._handleSaveAsRecentSearchUser(), this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e.user.id}` }, void 0, !0), this._handleAsyncPromotedEvent($.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleQuotedTweetScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._handleSaveAsRecentSearchUser(!0), this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e.quoted_status?.user?.id?.toString() || ""}` }, void 0, !0, !0), this._handleAsyncPromotedEvent($.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleSelfThreadClick = () => this._scribeAction({ element: "self_thread", action: "click" })),
                        (this._handleSelfThreadImpression = () => this._scribeAction({ element: "self_thread", action: "impression" })),
                        (this._handleFosnrAuthorAppealImpression = () => this._scribeAction({ element: "freedom_of_speech_author_pivot", action: "impression" })),
                        (this._handleFosnrAuthorAppealClick = () => this._scribeAction({ element: "freedom_of_speech_author_pivot", action: "click" })),
                        (this._handleTopicFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchTopicIfNeeded: t, socialContext: i } = this.props,
                                n = i && i.topicContext?.topicId;
                            n && t(n).catch(e());
                        }),
                        (this._handleCommunityFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchCommunityIfNeeded: t, tweet: i } = this.props;
                            if (this._isCommunitiesEnabled && i) {
                                const n = i.community_id_str,
                                    o = i.quoted_status?.community_id_str;
                                n && t(n).catch(e()), o && t(o).catch(e());
                            }
                        }),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: i } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && i(t.id).catch(e());
                        }),
                        (this._handleUserFollowIndicator = () => {
                            this._scribeAction({ component: "super_follower_educaton", element: "indicator", action: "click" });
                        }),
                        (this._handleUserFollowIndicatorDismiss = () => {
                            this._scribeAction({ component: "super_follower_education", action: "dismiss" });
                        }),
                        (this._handleUserFollowIndicatorLearnMoreClick = (e) => {
                            this._scribeAction({ component: "super_follower_education", element: "learn_more", action: "click" }), e && e();
                        }),
                        (this._handleCardLinkClick = () => {
                            const { analytics: e, isCardArticle: t, setArticlesVisited: i, tweet: n } = this.props;
                            (0, X.f)({ analytics: e, isArticleNudgeEnabled: this._isArticleNudgeEnabled, isCardArticle: t, setArticlesVisited: i, tweet: n });
                        }),
                        (this._handleSaveAsRecentSearchUser = (e) => {
                            const { saveAsRecentSearch: t, shouldStoreTypeaheadItem: i, tweet: n } = this.props,
                                { user: o } = e && n.quoted_status ? n.quoted_status : n;
                            t && i && i(te.Z.ItemType.USER) && t({ user: { id: o.id_str, type: ne.g2.User } });
                        }),
                        (this._isSelected = () => {
                            const { conversationTreeMetadata: e, tweet: t } = this.props,
                                { selectedTweet: i } = e || {};
                            return i && t.id_str === i.selectedTweetId;
                        }),
                        (this._handleMediaHashtagHighlightClick = () => {
                            this._handleAsyncPromotedEvent($.dx.HASHTAG_CLICK);
                        }),
                        (this._handleOnPinnedReplyNUXClose = () => {
                            this.props.addPinnedReplyEducationFlag(), this.setState({ showPinnedReplyEducationSheet: !1 });
                        }),
                        (this._renderPinnedReplyNUX = () => (this.state.showPinnedReplyEducationSheet ? o.createElement(K, { onClose: this._handleOnPinnedReplyNUXClose }) : null)),
                        (this._renderLeaveBehindMenu = () => {
                            const e = this.state.leaveBehindActionMenuItems,
                                t = this._isReplyTimelineImmediateDismiss();
                            return o.createElement(R, { heading: t ? dt : void 0, items: e, onMenuDismiss: this._hideLeaveBehindMenu, onUndoClick: this._hideLeaveBehindMenu, subheading: t ? at : void 0, withUndo: !0 });
                        }),
                        (this._hideLeaveBehindMenu = () => {
                            this.setState({ showLeaveBehindMenu: !1 });
                        }),
                        (this._isReplyTimelineImmediateDismiss = () => {
                            const { tweet: e, tweetDetailNav: t } = this.props,
                                { in_reply_to_status_id_str: i, self_thread: n, user: o } = e,
                                s = !!i,
                                r = o?.id_str === this.context.viewerUserId,
                                d = !this.context.viewerUserId,
                                a = n?.id_str === i,
                                l = "tweet" === t,
                                c = !!e.community_id_str;
                            return s && l && !(d || r || a || c) && this._isLeaveBehindMenuRepliesEnabled;
                        }),
                        (this._shouldRenderImmediateDismiss = () => !(!(this.props.feedbackItems?.length && this._isLeaveBehindMenuHomeEnabled) && !this._isReplyTimelineImmediateDismiss())),
                        (this._setLeaveBehindActionItems = (e) => {
                            this.setState({ leaveBehindActionMenuItems: e });
                        }),
                        (this.state = { displayReported: !1, enableKeyboardShortcuts: !1, leaveBehindActionMenuItems: [], showBlockOrUnblockConfirmation: !1, showLeaveBehindMenu: !1, showPinnedReplyEducationSheet: !1 });
                    const i = this._getPromotedContent();
                    this._shouldHidePromotedTweet = c.Z.isPromoted(i) && G.Z.shouldHidePromotedTweets(this.context.featureSwitches);
                }
                shouldComponentUpdate(e, t) {
                    return !(0, b.Z)(this.props, e) || !(0, b.Z)(this.state, t);
                }
                componentDidMount() {
                    if ((this._shouldHidePromotedTweet && this._isCompatibilityScribeEnabled && this._scribeAction({ action: "hide_promoted" }), this.props.tweet.note_tweet)) {
                        const e = { element: "note_tweet", action: "impression" },
                            t = { tweet_note_id: this.props.tweet.note_tweet?.id };
                        this._scribeAction(e, t);
                    }
                    this._handleTopicFetch(), this._handleCommunityFetch();
                }
                render() {
                    const { viewerUserId: e } = this.context,
                        { conversationPosition: t, conversationTreeMetadata: i, showWithheldBannerOnMyTweets: n, tweet: d } = this.props;
                    if (!this._shouldRender()) return i ? o.createElement(ce.Z, { conversationPosition: t, conversationTreeMetadata: i }, st) : null;
                    const a = d?.user?.id_str === e,
                        l = (0, q.j)(r.Z.getOriginalTweet(d).withheld_scope),
                        c = a && !d.retweeted_status,
                        h = c && "user" === r.Z.getOriginalTweet(d).withheld_scope && !n,
                        u = (0, Y.G$)(d) && !this.state.displayReported;
                    let _ = null;
                    return (_ = l ? o.createElement(s.Z, null, h ? null : this._renderWithheldTweet(), c ? this._renderContent() : null) : u ? this._renderReportedTombstone() : this.state.showLeaveBehindMenu ? this._renderLeaveBehindMenu() : this._renderContent()), o.createElement(o.Fragment, null, _, this._renderIntentPrompt(), this.state.showBlockOrUnblockConfirmation ? this._renderBlockOrUnblockConfirmationSheet() : null, this._renderPinnedReplyNUX());
                }
                _renderIntentPrompt() {
                    const { contextualClientEventInfo: e, forwardPivotInfo: t, history: i, nudges: n, tweet: s, tweetId: r } = this.props;
                    if (s && "focal_module" === e?.component && i.location.pathname.indexOf("/intent/") > -1 && i.location.query.tweet_id === r) return o.createElement(ae.Z, { forwardPivotInfo: t, history: i, location: i.location, nudges: n, tweetId: s.id_str });
                }
                _renderWithheldTweet() {
                    const { conversationPosition: e, conversationTreeMetadata: t, tweet: i } = this.props,
                        n = i.user.id_str,
                        s = r.Z.getOriginalTweet(i),
                        { viewerUserId: d } = this.context,
                        a = !!d && d === n && s.retweeted,
                        l = s.withheld_text || s.text,
                        c = s.withheld_entities || s.entities,
                        h = i.user.id_str === d;
                    return o.createElement(q.Z, { conversationPosition: e, conversationTreeMetadata: h ? void 0 : t, displayTextRange: s.display_text_range, entities: c, lang: s.lang, onUnretweet: a ? this._handleUnretweet : void 0, showUnretweetButton: a, text: l });
                }
                _renderReportedTombstone() {
                    const { conversationPosition: e, conversationTreeMetadata: t, tweet: i } = this.props,
                        n = r.Z.getOriginalTweet(i),
                        s = (0, Y.jD)(n.reportingVisibility);
                    return o.createElement(ce.Z, { actionText: ot, conversationPosition: e, conversationTreeMetadata: t, lang: n.lang, onClick: this._handleShowReportedTweet }, s);
                }
                _renderContent() {
                    const { analytics: e, bookmarkFolderId: t, contextTweet: i, contextualClientEventInfo: n, conversationPosition: s, conversationTreeMetadata: d, displayBlocked: a, feedbackItems: l, forwardPivotInfo: c, hasModeratedReplies: h, hideConversationControlsEducationText: u, hideExclusivityInfoEducationTextInReplies: _, hideTrustedFriendsEducationTextInReplies: m, hitHighlights: p, injectedFeedbackItem: b, innerForwardPivotInfo: C, innerNudges: g, isCompact: v, isReaderMode: k, isUnread: T, linkify: A, location: y, nudges: f, promotedContentAdvertiser: S, quoteTweetSocialContextProps: I, quotedTweetTombstoneInfo: E, replyBadge: P, replyContext: M, rootTweetAuthorId: x, shouldSelfThreadIncludeAvatar: R, showReplyFilterInlineCallout: Z, socialContext: U, socialContextColor: D, topic: B, topicFollowPrompt: L, tweet: N, tweetContext: F, userLanguage: O, viewerUser: H, withActions: V, withActionsDisabled: K, withBirdwatchPivots: q, withCardLinks: Q, withInlineMedia: z, withQuotedTweetLinks: G, withRemoveFromBookmarks: j, withSelfThread: X, withSocialContext: $, withUserAvatar: Y, withUserPresence: ee } = this.props,
                        { enableKeyboardShortcuts: te } = this.state,
                        ie = r.Z.getOriginalTweet(N),
                        ne = this._getPromotedContent(),
                        oe = y.state?.overflow,
                        se = y.state?.column?.showSmallMedia;
                    let re = $;
                    $ && this.context.featureSwitches.isTrue("rweb_home_mixer_enable_social_context_filter_social_contexts") && (re = U && U.contextType in lt);
                    const de = { ...{ bookmarkFolderId: t, contextTweet: i, contextualClientEventInfo: n, conversationPosition: s, conversationTreeMetadata: d, displayBlocked: a, enableKeyboardShortcuts: te, forwardPivotInfo: c, handleLikeOrUnlike: this._handleLikeOrUnlike, hasModeratedReplies: h, hideConversationControlsEducationText: u, hideExclusivityInfoEducationTextInReplies: _, hideTrustedFriendsEducationTextInReplies: m, hitHighlights: p, injectedFeedbackItem: b, innerForwardPivotInfo: C, innerNudges: g, isCompact: v, linkify: A, nudges: f, primaryFeedbackItem: l?.[0], promotedContentAdvertiser: S, quotedTweetTombstoneInfo: E, quoteTweetSocialContextProps: I, replyBadge: P, replyContext: M, rootTweetAuthorId: x, shouldSelfThreadIncludeAvatar: R, showReplyFilterInlineCallout: Z, socialContext: U, socialContextColor: D, topic: B, topicFollowPrompt: L, tweet: N, tweetContext: F, userLanguage: O, viewerUser: H, withActions: V, withActionsDisabled: K, withBirdwatchPivots: q, withCardLinks: Q, withCondensedQuoteTweet: se, withHalvedMediaSize: se, withInlineMedia: z, withQuotedTweetLinks: G, withRemoveFromBookmarks: j, withSelfThread: X, withSocialContext: re, withUnreadStyles: T, withUserAvatar: Y, withUserPresence: ee }, ...(k ? this._getReaderModeTweetProps() : this._getBaseTweetProps()) },
                        ae = o.createElement(J.nO, { data: this._getMemoizedScribeData(ie, ne, oe, void 0, e.contextualScribeData) }, o.createElement(w.Z, { enabled: !!te, handlers: this._getShortcutKeyHandlers() }, o.createElement(W.ZP, de)));
                    return ne ? o.createElement(nt, { id: N.id_str, onFullyVisible: this._handleFullyVisible, onResize: this._handleResize, onVisible: this._handleImpression }, ae) : ae;
                }
                _shouldRender() {
                    const { tweet: e } = this.props;
                    return !(this._shouldHidePromotedTweet || this._tweetIsDeleted() || this._shouldHideBlockedTweet() || (0, Y.lX)(e));
                }
                _tweetIsDeleted() {
                    const { tweet: e } = this.props,
                        { retweeted_status: t } = e;
                    return e.isDeleted || (t && t.isDeleted);
                }
                _shouldHideBlockedTweet() {
                    const { displayBlocked: e, focalTweetId: t, tweet: i } = this.props,
                        n = r.Z.getOriginalTweet(i),
                        o = !!i?.user?.blocking || !!n?.user?.blocking;
                    return t !== i.id_str && !e && o;
                }
            }
            (ct.defaultProps = { displayBlocked: !1, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !0, withCardLinks: !1, withCurationMenu: !0, withMuteConversation: !1, withRemoveFromBookmarks: !1 }), (ct.contextType = de.rC);
            const ht = (e, t) => t.height <= e.getNumberValue("responsive_web_extension_compatibility_size_threshold", 50),
                ut = (e, t) => !(e.isTrue("responsive_web_extension_compatibility_impression_guard") && ht(e, t.item)),
                _t = (e) => {
                    const t = o.useContext(h.Z);
                    ((e, t) => {
                        const i = (0, re.z)();
                        o.useEffect(() => {
                            t || i.scribe({ action: "hydration_failed", data: { tweet_id: e } });
                        }, [i, t, e]);
                    })(e.tweetId, e.tweet);
                    const i = (({ tweet: e }) => {
                        const { featureSwitches: t } = (0, de.QZ)(),
                            i = "legacy" === t.getStringValue("responsive_web_card_conversion_hoisted"),
                            n = (0, Ge.v9)(Se.Qb),
                            s = e?.card || e?.unified_card;
                        return o.useMemo(() => {
                            if (!i || !e) return;
                            const t = { tweetId: e.id_str, tweetPermalink: e.permalink, tweetUserId: e.user.id_str, isLoggedIn: n };
                            return s && (0, ze.ZP)(s, t);
                        }, [s, i, e, n]);
                    })({ tweet: e.tweet });
                    return e.tweet ? o.createElement(ct, (0, n.Z)({}, e, { convertedCard: i, history: t, location: t.location, tweet: e.tweet })) : null;
                };
            _t.defaultProps = ct.defaultProps;
            const mt = Qe(_t),
                pt = (0, re.Z)(mt),
                bt = (0, re.Z)(mt, { component: "tweet" });
        },
        352975: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(376293),
                o = i(712816),
                s = i(879596);
            const r = ({ addToast: e, block: t, createLocalApiErrorHandler: i, promotedContent: r, scribeAction: d, unblock: a, user: l }) => {
                const c = () => {
                    a(l.id_str, { promotedContent: r }).catch(i(s.D)), d({ element: "unblock" });
                };
                return (0, n.op)({
                    blockAction: () => {
                        t(l.id_str, { promotedContent: r }).then(() => {
                            e({ action: { label: n.Vt, onAction: c }, text: n.KV });
                        }, i(o.d)),
                            d({ element: "block" });
                    },
                    source: n.SC.TWEET,
                    unblockAction: c,
                    user: l,
                });
            };
        },
        383494: (e, t, i) => {
            i.d(t, { Z: () => a });
            i(136728);
            var n = i(545334),
                o = i(847607),
                s = i(775412),
                r = i(837731),
                d = i(163390);
            const a = ({ addToast: e, createLocalApiErrorHandler: t, dismissUserFromConversation: i, hasPremiumPlus: a, history: l, mute: c, muteAdUpsellEnabled: h, promotedContent: u, scribeAction: _, unmute: m, user: p }) => {
                const b = () => {
                        m(p.id_str, { promotedContent: u }).then(() => {
                            e({ text: (0, o.X6)(p.screen_name) });
                        }, t(r.G)),
                            _({ element: "unmute" }),
                            _({ action: "unmute_user", element: "tweet_curation_action_menu" });
                    },
                    {
                        Icon: w,
                        onClick: C,
                        text: g,
                    } = (0, o.N1)(
                        p,
                        () => {
                            c(p.id_str, { promotedContent: u }).then(() => {
                                i && i({ userId: p.id_str, feedbackKeys: ["UnfollowEntity"] });
                                if (h && !!u?.impression_id && !a) {
                                    const e = { variant: "MuteAd" };
                                    l.push("/i/verified-get-verified", e);
                                }
                                e({ action: { label: n.d, onAction: b }, text: (0, o.FK)(p.screen_name) });
                            }, t(s.W)),
                                _({ element: "mute" }),
                                _({ action: "mute_user", element: "tweet_curation_action_menu" });
                        },
                        b,
                    );
                return { Icon: w, text: g, onClick: C, shortcutKey: d.uq.mute };
            };
        },
        459284: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(202784);
            const n = (0, i(523561).Z)({
                loader: () =>
                    Promise.all([
                        i.e("icons.23"),
                        i.e("icons.0"),
                        i.e("icons.2"),
                        i.e("icons.13"),
                        i.e("icons.24"),
                        i.e("icons.7"),
                        i.e("icons.26"),
                        i.e("icons.14"),
                        i.e("icons.21"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        i.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        i.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        i.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        i.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                        i.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        i.e("loader.TweetCurationActionMenu-6107ac1a"),
                        i.e("loader.TweetCurationActionMenu-b7da5e41"),
                        i.e("loader.TweetCurationActionMenu-e4e3d8bb"),
                    ]).then(i.bind(i, 841772)),
            });
        },
        775412: (e, t, i) => {
            i.d(t, { W: () => d });
            var n = i(111677),
                o = i.n(n),
                s = i(615656);
            const r = o().ee87e71c,
                d = { [s.ZP.SelfMuteError]: { toast: { text: r } }, showToast: !0 };
        },
        837731: (e, t, i) => {
            i.d(t, { G: () => d });
            var n = i(111677),
                o = i.n(n),
                s = i(615656);
            const r = o().ed428a76,
                d = { [s.ZP.NotMutingTargetUser]: { toast: { text: r } }, showToast: !0 };
        },
        270130: (e, t, i) => {
            i.d(t, { f: () => n });
            const n = ({ analytics: e, isArticleNudgeEnabled: t, isCardArticle: i, setArticlesVisited: n, tweet: o }) => {
                if (i && t) {
                    const t = o?.card?.url;
                    t && (n(t), e.scribe({ component: "article_nudge", element: "read_article", action: "click", data: { items: [{ token: o?.card?.url, in_reply_to_tweet_id: o?.id_str }] } }));
                }
            };
        },
        831757: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(341189);
            const o = { [n.Z.CASHTAG]: void 0, [n.Z.EMOJI]: void 0, [n.Z.HASHTAG]: "hashtag_click", [n.Z.MEDIA]: void 0, [n.Z.MENTION]: "mention_click", [n.Z.TEXT]: void 0, [n.Z.URL]: "open_link" };
        },
        80890: (e, t, i) => {
            i.d(t, { Yd: () => u, MW: () => m, oc: () => _ });
            var n = i(265617),
                o = i(988566),
                s = i(466015),
                r = i(917799),
                d = i(195250),
                a = i(919022);
            const l = "rweb/pinnedTweets",
                c = r.dg(l, "PIN"),
                h = r.dg(l, "UNPIN"),
                u =
                    (e) =>
                    (t, i, { api: l, featureSwitches: h }) =>
                        r
                            .AB(t, { params: { id: e }, request: l.withEndpoint(n.ZP).pin })({ actionTypes: c, context: "ACTION_PIN_TWEET", meta: { tweetId: e } }, (n) => {
                                const r = a.ZP.selectViewerUser(i());
                                if (void 0 === r) return;
                                const l = r.id_str,
                                    c = r.pinned_tweet_ids_str && r.pinned_tweet_ids_str[0];
                                t(a.ZP.patchUser(l, { pinned_tweet_ids_str: [e] }));
                                const u = (0, d.ZP)(h, l, "default");
                                return [...(c ? [u.removeTweets({ [c]: !0 }), u.injectEntry(s.Se({ id: c, sortIndex: c }), { atTop: !1 })] : []), u.removeTweets({ [e]: !0 }), u.injectEntry(s.Se({ id: e, content: { socialContext: { generalContext: o.Iv } }, sortIndex: "NOT_USED" }))];
                            })
                            .then((e) => {
                                const t = e.pin_tweet?.added_tweet_to_highlights;
                                return { addedToHighlights: t };
                            }),
                _ =
                    (e) =>
                    (t, i, { api: o, featureSwitches: l }) =>
                        r.AB(t, { params: { id: e }, request: o.withEndpoint(n.ZP).unpin })({ actionTypes: h, context: "ACTION_UNPIN_TWEET", meta: { tweetId: e } }, (n) => {
                            const o = a.ZP.selectViewerUser(i());
                            if (void 0 === o) return;
                            const r = o.id_str;
                            return t(a.ZP.patchUser(r, { pinned_tweet_ids_str: [] })), [(0, d.ZP)(l, r, "default").removeTweets({ [e]: !0 }), (0, d.ZP)(l, r, "default").injectEntry(s.Se({ id: e, sortIndex: e }), { atTop: !1 })];
                        }),
                m = (e, t) => {
                    const i = a.ZP.selectViewerUser(e);
                    return !!i?.pinned_tweet_ids_str && i.pinned_tweet_ids_str[0] === t;
                };
        },
        661810: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(202784),
                o = i(325686),
                s = i(392237);
            function r({ spacing: e, style: t }) {
                return n.createElement(o.Z, { role: "separator", style: [d.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const d = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl.65eee19a.js.map

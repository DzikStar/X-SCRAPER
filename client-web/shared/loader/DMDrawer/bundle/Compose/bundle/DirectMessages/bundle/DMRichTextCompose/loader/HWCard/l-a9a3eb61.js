"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61"],
    {
        103130: (e, t, a) => {
            a.d(t, { Z: () => me });
            var r = a(807896),
                i = a(202784),
                o = a(803810),
                n = a(85375),
                d = a(747101),
                s = a(542908),
                l = a(638009),
                c = a(952428),
                u = a(392237),
                p = a(325686),
                h = a(731708),
                m = a(154003),
                _ = a(447986),
                C = a(661810),
                g = a(530732),
                D = a(366635);
            const E = Object.freeze({ FILL: "Fill", FIXED: "Fixed" }),
                v = "developerBuiltCard",
                b = "developerBuiltCardImage",
                S = "developerBuiltCardImageContainer",
                y = "developerBuiltCardContainer",
                f = "developerBuiltCardLabelIcon",
                I = (e) => {
                    switch (e.header_type) {
                        case "Three":
                            return "headline2";
                        case "Two":
                            return "headline1";
                        default:
                            return "title3";
                    }
                },
                R = (e) => ("Caption" === e.text_type ? "subtext1" : "body");
            var w = a(262754),
                B = a(215380),
                L = a(97043),
                P = a(894023),
                x = a(761744),
                k = a(500040),
                T = a(630715),
                A = a(190636),
                O = a(902673),
                M = a(25001),
                U = a(142496);
            const Z = { Award: w.default, Badge: B.default, Calendar: L.default, Coins: P.default, Heart: x.default, Information: k.default, Link: T.default, Money: A.default, News: O.default, Person: M.default, Rating: U.default },
                N = (e) => {
                    switch (e) {
                        case "Right":
                            return "right";
                        case "Center":
                            return "center";
                        default:
                            return "left";
                    }
                },
                W = (e) => {
                    switch (e.color) {
                        case "Green":
                            return "green500";
                        case "DarkGrey":
                        case "LightGrey":
                            return "gray700";
                        case "Magenta":
                            return "magenta500";
                        case "Purple":
                            return "purple600";
                        case "Red":
                            return "red500";
                        default:
                            return "text";
                    }
                },
                Q = (e) => ("DeveloperBuiltCardHeaderProperties" === e.__typename ? "heavy" : F(e)),
                F = (e) => ("Heavy" === e.font_weight ? "bold" : "normal"),
                G = (e) => {
                    switch (e) {
                        case "Small":
                            return "small";
                        case "Medium":
                            return "medium";
                        case "Large":
                            return "large";
                        default:
                            return "none";
                    }
                },
                K = (e) => {
                    switch (e) {
                        case "Left":
                            return "start";
                        case "Right":
                            return "end";
                        case "Between":
                            return "stretch";
                        default:
                            return "center";
                    }
                },
                q = (e) => ("Horizontal" === e ? "row" : "column"),
                z = (e) => ({ marginTop: `${V(e.top)}px`, marginStart: `${V(e.left)}px`, marginBottom: `${V(e.bottom)}px`, marginEnd: `${V(e.right)}px` }),
                V = (e) => {
                    switch (e) {
                        case "ExtraSmall":
                            return u.default.theme.spacesPx.space4;
                        case "Small":
                            return u.default.theme.spacesPx.space8;
                        case "Medium":
                            return u.default.theme.spacesPx.space12;
                        case "Large":
                            return u.default.theme.spacesPx.space16;
                        case "ExtraLarge":
                            return u.default.theme.spacesPx.space24;
                        default:
                            return 0;
                    }
                },
                $ = (e) => {
                    switch (e) {
                        case "Black":
                        case "DarkGrey":
                        case "LightGrey":
                            return "borderColor";
                        case "Green":
                            return "green500";
                        case "Magenta":
                            return "magenta500";
                        case "Purple":
                            return "purple600";
                        case "Red":
                            return "red500";
                        default:
                            return "transparent";
                    }
                },
                H = ({ component: e, key: t, layoutCacheKey: a }) => {
                    switch (e.__typename) {
                        case "DeveloperBuiltCardLabelComponent": {
                            const a = ((e) => {
                                    switch (e.__typename) {
                                        case "DeveloperBuiltCardHeaderProperties":
                                            return I(e);
                                        case "DeveloperBuiltCardTextProperties":
                                            return R(e);
                                        default:
                                            return "body";
                                    }
                                })(e.properties),
                                n = (o = e.icon_attachment) ? (Z[o] ?? null) : null;
                            let d;
                            return (d = e.properties.text.length > 1 ? (n ? 3 * u.default.theme.fontSizesPx[a] + u.default.theme.spacesPx.space4 : 1.5 * u.default.theme.fontSizesPx[a]) : n ? 2 * u.default.theme.fontSizesPx[a] + u.default.theme.spacesPx.space4 : null), i.createElement(h.ZP, { align: N(e.properties.text_alignment), color: ((r = e.properties), "DeveloperBuiltCardHeaderProperties" === r.__typename ? "text" : W(r)), key: t, size: a, style: [j.iconContainer, { minWidth: d }], weight: Q(e.properties) }, n ? i.createElement(n, { style: [j.icon, { minWidth: u.default.theme.fontSizes[a] }], testID: f }) : null, i.createElement(h.ZP, { numberOfLines: e.max_number_of_lines }, e.properties.text));
                        }
                        case "DeveloperBuiltCardImageComponent": {
                            const r = e.image_fill_type === E.FIXED;
                            return i.createElement(p.Z, { key: t, style: [j.imageContainer, r ? { width: e.size.width } : j.imageFill, { borderRadius: u.default.theme.borderRadii[G(e.corner_radius)] }], testID: S }, i.createElement(_.Z, { componentType: "dev_built_card", destinationData: e.component_action?.url ? { type: n._g.BROWSER, data: { url_data: { url: e.component_action?.url }, scribe: s.bQ.OPEN_LINK, promoted_log: s.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } } : void 0, ignoreDataSaver: r, locationKey: a && r ? `${a}-fixed${e.size.width}x${e.size.height}` : a, mediaEntity: { altText: e.alt_text, media_url_https: e.url, type: "photo", original_info: { width: 1e3, height: 1e3 } }, ratio: e.size.width / e.size.height, testID: b }));
                        }
                        case "DeveloperBuiltCardButtonComponent":
                            return i.createElement(d.Z, { componentType: "dev_built_card", destinationData: { type: n._g.BROWSER, data: { url_data: { url: e.button_action.url }, scribe: s.bQ.OPEN_LINK, promoted_log: s.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } }, key: t }, ({ link: t, onClick: a }) => i.createElement(m.ZP, { link: t, onPress: a, size: "small", type: "primaryFilled" }, e.text));
                        case "DeveloperBuiltCardContainer":
                            return Y({ component: e, key: t, layoutCacheKey: a });
                        case "DeveloperBuiltCardHorizontalLineComponent":
                            return i.createElement(C.Z, { key: t, spacing: "space8" });
                        case "DeveloperBuiltCardUserComponent": {
                            const a = e.user_component_results.result;
                            return "User" === a?.__typename ? i.createElement(d.Z, { componentType: "dev_built_card", destinationData: { type: n._g.PROFILE, data: { user_id: a.id, scribe: s.bQ.PROFILE_CLICK, promoted_log: s.YE.SCREEN_NAME_CLICK } }, key: t }, ({ onClick: e }) => i.createElement(D.Z, { isProtected: a.privacy?.protected, isVerified: a.verification?.verified, name: a.core?.name, onAvatarClick: e, onLinkClick: e, onScreenNameClick: e, profileImageUrl: a.avatar?.image_url, screenName: a.core?.screen_name, withHoverCard: !0, withLink: !0 })) : null;
                        }
                        default:
                            return null;
                    }
                    var r, o;
                },
                Y = ({ component: e, key: t, layoutCacheKey: a }) =>
                    i.createElement(d.Z, { componentType: "dev_built_card", destinationData: e.component_action?.url ? { type: n._g.BROWSER, data: { url_data: { url: e.component_action?.url }, scribe: s.bQ.OPEN_LINK, promoted_log: s.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } } : void 0, key: t }, ({ link: t, onClick: r }) =>
                        i.createElement(l.ZP.Consumer, null, (o) => {
                            return i.createElement(
                                g.Z,
                                { interactive: !1, link: t ? o.withAnchorless(t) : void 0, onClick: r, style: [j.container, ((n = e.layout_behavior), { alignItems: K(n.container_alignment), flexDirection: q(n.axis), ...z(n.layout_margins) }), { borderWidth: e.border_color && u.default.theme.borderWidths.small, borderColor: u.default.theme.colors[$(e.border_color)], borderRadius: u.default.theme.borderRadii[G(e.corner_radius)] }], testID: y },
                                e.components.map((e, t) => H({ component: e, key: t, layoutCacheKey: a })),
                            );
                            var n;
                        }),
                    ),
                j = u.default.create((e) => ({ imageFill: { flexGrow: 999 }, imageContainer: { overflow: "hidden", backgroundColor: e.colors.gray50 }, icon: { flexShrink: 0 }, iconContainer: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, gap: e.spaces.space4, maxWidth: "100%" }, container: { borderStyle: "solid", display: "flex", flexGrow: 1, flexShrink: 1, overflow: "hidden", maxWidth: "100%", minWidth: e.spaces.space4 } }));
            function J({ developerBuiltCard: e, id: t, locationKey: a, onLikelyInteraction: r, withSquareBottomBorderRadius: o }) {
                const u = e.card_url ? { type: n._g.BROWSER, data: { url_data: { url: e.card_url }, scribe: s.bQ.OPEN_LINK, promoted_log: s.YE.UNIFIED_CARD_COMPONENT_URL_CLICK } } : void 0,
                    p = e.container ? e.container : e,
                    { template_id: h } = e?.card_metadata ? Object.fromEntries(e.card_metadata.map(({ key: e, value: t }) => [e, t])) : {};
                let m;
                return a && h ? (m = `${a}-developerBuiltCard-template${h}`) : a && (m = `${a}-developerBuiltCard`), i.createElement(d.Z, { componentType: "dev_built_card", destinationData: u }, ({ link: e, onClick: a }) => i.createElement(l.ZP.Consumer, null, (n) => i.createElement(c.Z, { id: t, interactive: !0, link: e ? n.withAnchorless(e) : void 0, onClick: a, onHoverIn: r, onPressIn: r, style: [X.root, o && X[`${o}SquareBottomBorderRadius`]], testID: v }, H({ component: p, layoutCacheKey: m }))));
            }
            const X = u.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, bothSquareBottomBorderRadius: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none }, leftSquareBottomBorderRadius: { borderBottomStartRadius: e.borderRadii.none }, rightSquareBottomBorderRadius: { borderBottomEndRadius: e.borderRadii.none } }));
            var ee = a(235902),
                te = a(705048),
                ae = a(287826),
                re = a(759469),
                ie = a(94909),
                oe = a(596036),
                ne = a(801340),
                de = a(592180),
                se = a(441910),
                le = a(774235),
                ce = a(914354),
                ue = a(168395),
                pe = a(517779);
            class he extends i.Component {
                constructor(e, t) {
                    super(e),
                        (this._handleLikelyInteraction = () => {
                            this.state.interactionLikely || this.setState({ interactionLikely: !0 });
                        }),
                        (this._updateCardState = (e) => {
                            this.setState({ cardState: e });
                        }),
                        (this._updatePromotedLogState = (e) => {
                            this.setState({ promotedLogData: e });
                        }),
                        (this._updateCarouselEventDetailsState = (e) => {
                            this.props.updateCarouselEventDetailsState && this.props.updateCarouselEventDetailsState(e), this.setState({ carouselEventDetails: e });
                        }),
                        (this._scribeCardAction = ({ action: e, carouselEventDetails: t, clickContext: a, componentType: r, ctaIndex: i, element: o, isAuthRequired: d }) => {
                            const { card: s, carouselEventDetails: l } = this.state,
                                { onScribeEvent: c } = this.props;
                            t && this.setState({ carouselEventDetails: t }), s && c && c({ action: e, element: o, componentType: r, cardName: s.card_name, ctaIndex: i, clickContext: a, isMessageMe: s.card_name === n.sj.MESSAGE_ME, isAuthRequired: d, carouselEventDetails: t || l });
                        }),
                        (this._onPromotedLogEvent = (e) => {
                            const { onPromotedLogEvent: t } = this.props,
                                { promotedLogData: a } = this.state,
                                r = this._slideDetails;
                            let i;
                            void 0 !== r.index && (i = { slide_index: r.index }), t && t({ ucEventData: i, ...(0, o.Z)(a || null), ...e });
                        }),
                        (this._requestCardUpdate = () => {
                            const { requestCardUpdate: e } = this.props,
                                { card: t } = this.state;
                            e && t && e([t.id], { name: t.card_name });
                        });
                    const a = this.convertCardAndMetadata(e, t.isDeveloperBuiltCardEnabled, t.shouldConvertCollectionToImageWebsiteCard, t.dpaMetadataEnabled, t.dpaCtaEnabled);
                    (this.state = a ? { ...a } : {}), (this._slideDetails = { index: void 0, previousIndex: void 0 });
                }
                componentDidUpdate(e, t) {
                    const { dpaCtaEnabled: a, dpaMetadataEnabled: r, isDeveloperBuiltCardEnabled: i, shouldConvertCollectionToImageWebsiteCard: o } = this.context;
                    if (e !== this.props) {
                        const e = this.convertCardAndMetadata(this.props, i, o, r, a);
                        (this._slideDetails = { index: void 0, previousIndex: void 0 }), e && this.setState({ ...this.state, ...e });
                    }
                }
                componentDidMount() {
                    const { card: e } = this.state;
                    e && this._scribeCardAction({ action: e.on_visibility.scribe, componentType: "card" }), (0, ie.h0)(e, this._scribeCardAction, this.context.dpaPlaceholderMediaKeys);
                }
                render() {
                    const { card: e, cardState: t, carouselIndex: a, promotedLogData: o } = this.state,
                        { cardContext: n, dmSentOrReceived: d, id: s, isDataSaverEnabled: l, isInteractive: c, isPromoted: u, onCardLinkClick: p, onEventReminderClick: h, onPollVote: m, onScribeEvent: _, promotedContent: C, requestCardUpdate: g, testIDs: D, transformUrl: E, withBorder: v, withBorderShadow: b, withDetail: S, withRoundBorder: y, withSquareBottomBorderRadius: f } = this.props,
                        { collectionAdsEnabled: I, continueInGrokEnabled: R, explorerAdsEnabled: w, grokShareEnabled: B, openGrok: L } = this.context;
                    if (!e) return null;
                    if ((0, ie.h$)(e.card_name)) {
                        const e = this._getSpaceData();
                        if (!e) return null;
                        const { clip_metadata: t, id: a } = e;
                        return i.createElement(ae.Z, { audioSpaceId: a, clipMetadata: t, isInteractive: c, withSquareBottomBorderRadius: f });
                    }
                    const P = this._getAttributionData(),
                        x = this._getCurrentLayout(),
                        k = this._getDetailData() || this._getAppStoreDetailData(),
                        T = this._getDetailWithMiddotGroupData(),
                        A = this._getTwitterListDetailsData(),
                        O = this._getCommunityDetailsData(),
                        M = this._getJobDetailsData(),
                        U = this._getTopicDetailsData(),
                        Z = this._getMediaData(),
                        N = this._getPollData(),
                        { buttons: W, layout: Q } = this._getButtonsData() || {},
                        F = this._getBackgroundColorData(),
                        G = this._getSwipeableMediaData(),
                        K = this._getDeveloperBuiltCard(),
                        q = this._getFollowButtonData(),
                        z = this._getSocialContextData(),
                        { get_fetch_interval_for_updates: V } = e,
                        $ = this.props.withInteractiveStyling && !!((k && k.destination) || (T && T.destination) || (A && A.destination) || (U && U.destination) || (O && O.destination) || (M && M.destination)),
                        H = { locationKey: n.locationKey, onLikelyInteraction: this._handleLikelyInteraction, id: s, testIDs: D, withInteractiveStyling: $ },
                        Y = g && V?.[t]?.(),
                        { shouldAutoAdvance: j } = e.displayOptions || {},
                        X = n.viewerUserId === n.tweetUserId,
                        ee = Z && Z.mediaEntity && "photo" === Z.mediaEntity.type,
                        re = "small_with_button" === x.size,
                        he = "small" === x.size || (l && k && !W && ee && !u),
                        me = U || k;
                    let _e = null;
                    const Ce = e?.components_data?.[e?.components?.default?.[0] || ""];
                    if ("grok_share" === Ce?.type) {
                        if (!B?.()) return null;
                        const e = Ce;
                        n.grokShareAttachment && (e.data.conversation_preview = n.grokShareAttachment), (_e = i.createElement(te.Z, { continueInGrokEnabled: R?.(), conversation: e.data.conversation_preview, destination: e.data.destination, grokUser: e.data.grok_user, mediaVisibilityResults: n.mediaVisibilityResults, metadata: e.data.metadata, openGrok: L, profileUser: e.data.profile_user }));
                    } else if (K) _e = i.createElement(J, (0, r.Z)({}, H, { developerBuiltCard: K, withSquareBottomBorderRadius: f }));
                    else if (re) T && (_e = i.createElement(le.Z, (0, r.Z)({}, H, { button: W && W.length > 0 ? W[0] : void 0, detailsWithMiddotGroup: T, media: Z || void 0 })));
                    else if (he) me && Z && (_e = i.createElement(se.Z, (0, r.Z)({}, H, { details: me, dmSentOrReceived: d, isTopicCard: !!U, media: Z, reverse: x.reverse, withBorderShadow: b, withSquareBottomBorderRadius: f })));
                    else if (e.ucLayout) {
                        const a = e.ucLayout.type;
                        if ("swipeable" === a) _e = i.createElement(ce.Z, (0, r.Z)({}, H, { card: e, chromeless: x.chromeless, layoutData: e.ucLayout.data, renderVideoPlayer: this.props.renderVideoPlayer, shouldRenderVideo: "static" !== t, withActionsDisabled: n.withActionsDisabled }));
                        else if ("collection" === a) {
                            if (!I?.()) return null;
                            _e = i.createElement(ue.Z, null);
                        } else if ("explorer" === a) {
                            if (!w?.()) return null;
                            _e = i.createElement(pe.ZP, null);
                        }
                    } else _e = i.createElement(de.ZP, (0, r.Z)({}, H, { attribution: P || void 0, backgroundColor: F || void 0, buttonLayout: Q, buttons: W || void 0, chromeless: x.chromeless, communityDetails: O || void 0, details: k, detailsWithMiddotGroup: T, dmSentOrReceived: d, followButtonData: q || void 0, initialCarouselIndex: a, isAuthor: X, jobDetails: M || void 0, listDetails: A || void 0, media: Z, poll: N || void 0, pollTranslations: n.pollTranslations, promotedContent: C, renderTranslationFeedback: n.renderTranslationFeedback, renderVideoPlayer: this.props.renderVideoPlayer, socialContextData: z || void 0, swipeableMedia: G, withActionsDisabled: n.withActionsDisabled, withBorder: v, withBorderShadow: b, withDetail: S, withRoundBorder: y, withSquareBottomBorderRadius: f }));
                    return i.createElement(oe.Z.Provider, { value: { card: e, cardContext: n, carouselIndex: a, isDataSaverEnabled: l, isInteractive: c, isPromoted: u, media: Z, promotedContent: C, onEventReminderClick: h, onCardLinkClick: p, onPollVote: m, onPromotedLogEvent: this._onPromotedLogEvent, onScribeEvent: _, scribeCardAction: this._scribeCardAction, shouldAutoAdvance: j, slideDetails: this._slideDetails, transformUrl: E, promotedLogData: o, updateCardState: this._updateCardState, updatePromotedLogState: this._updatePromotedLogState, updateCarouselEventDetailsState: this._updateCarouselEventDetailsState } }, this._renderPreconnectTags(), Y ? i.createElement(ne.ZP, { fetchIntervalConfig: Y, requestCardUpdate: this._requestCardUpdate }) : null, _e);
                }
                _getCurrentLayout() {
                    const { cardState: e, layout: t } = this.state,
                        { isDataSaverEnabled: a } = this.props;
                    return t[a ? n.uW.DATA_SAVER : e] || t[n.uW.DEFAULT];
                }
                _getAttributionData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.ATTRIBUTION, e, t);
                    return a?.data;
                }
                _getButtonsData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.BUTTON_GROUP, e, t);
                    return a?.data;
                }
                _getBackgroundColorData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.BACKGROUND_COLOR, e, t);
                    return a?.data?.backgroundColor;
                }
                _getSwipeableMediaData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.SWIPEABLE_MEDIA, e, t),
                        r = a?.data?.media_list;
                    if (r) return (0, ie.xV)(r, e.media_entities);
                }
                _getDetailData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.DETAILS, e, t),
                        r = a?.data;
                    return r ? (0, ie.d2)(r, e.destinations) : null;
                }
                _getDetailWithMiddotGroupData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.DETAILS_WITH_MIDDOT_GROUP, e, t);
                    return a?.data;
                }
                _getAppStoreDetailData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.APP_STORE_DETAILS, e, t),
                        r = a?.data;
                    return r ? (0, ie.d2)(r, e.destinations) : null;
                }
                _getFollowButtonData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.FOLLOW_BUTTON, e, t);
                    return a?.data;
                }
                _getSocialContextData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.FACEPILE, e, t);
                    return a?.data;
                }
                _getCommunityDetailsData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.COMMUNITY_DETAILS, e, t);
                    return a?.data;
                }
                _getJobDetailsData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.JOB_DETAILS, e, t);
                    return a?.data;
                }
                _getSpaceData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.SPACE, e, t);
                    return a?.data;
                }
                _getTwitterListDetailsData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.TWITTER_LIST_DETAILS, e, t);
                    return a?.data;
                }
                _getTopicDetailsData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.TOPIC_DETAILS, e, t);
                    return a?.data;
                }
                _getMediaData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.MEDIA, e, t),
                        r = a?.data;
                    return r ? (0, ie.Al)(r, e.media_entities) : null;
                }
                _getPollData() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.POLL, e, t);
                    return a?.data;
                }
                _getDeveloperBuiltCard() {
                    const { card: e, cardState: t } = this.state,
                        a = (0, ie.Rg)(n.Qe.DEVELOPER_BUILT_CARD, e, t) || (0, ie.Rg)(n.Qe.DEVELOPER_BUILT_CARD_DEPRECATED, e, t);
                    return a?.data?.config;
                }
                _renderPreconnectTags() {
                    const e = this._getDetailData() || this._getAppStoreDetailData(),
                        { card: t, interactionLikely: a } = this.state,
                        { isPromoted: r } = this.props,
                        { shouldPreconnectToCardDestinations: o } = this.context;
                    if (!e || !e.destination || !t) return null;
                    const d = t.destinations[e.destination];
                    if (d.type !== n._g.BROWSER) return null;
                    const s = d.data.url_data.url,
                        l = d.data.url_data.domain || d.data.url_data.vanity;
                    if (!l) return null;
                    const c = (a || r) && o && o();
                    return c ? i.createElement(i.Fragment, null, c ? i.createElement("link", { href: s, rel: "preconnect" }) : null, c ? i.createElement("link", { href: `//${l}`, rel: "preconnect" }) : null) : null;
                }
                _getCardToConvert(e, t, a) {
                    if (!e?.layout) return t;
                    return e?.card_type === n.sj.DEVELOPER_BUILT_CARD && !a() ? t : e;
                }
                convertCardAndMetadata(e, t, a, r, i) {
                    const { card: o, cardContext: n, cardState: d, initialCarouselIndex: s, unifiedCard: l } = e,
                        c = this._getCardToConvert(l, o, t);
                    if (!c) return null;
                    const u = (0, re.gb)(c, { tweetId: n.tweetId, tweetPermalink: n.tweetPermalink, tweetUserId: n.tweetUserId, isLoggedIn: !!n.viewerUserId, shouldConvertCollectionToImageWebsiteCard: a, dpaConversionOptions: { ctaEnabled: i, metadataEnabled: r } }),
                        p = d || (!!this.state && this.state.cardState) || (u && u.cardState) || void 0;
                    return u && p ? { ...u, cardState: p, carouselIndex: s } : null;
                }
            }
            (he.defaultProps = { isDataSaverEnabled: !1, isInteractive: !0, isPromoted: !1, withBorder: !0, withDetail: !0, withInteractiveStyling: !0, withRoundBorder: !0 }), (he.contextType = ee._y);
            const me = he;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61.a76e605a.js.map

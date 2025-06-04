(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetActivity"],
    {
        270422: (e) => {
            e.exports = { queryId: "L09HiWkHZ19rrayKtucEfg", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        607959: (e) => {
            e.exports = { queryId: "CO2We_JGcEP1XDCwPHdRhA", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        348271: (e) => {
            e.exports = { queryId: "kZ2HDUsdVXKk9HeirUuiSA", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => _ });
            var i = r(703710),
                o = r(270422),
                s = r.n(o),
                n = r(607959),
                a = r.n(n),
                l = r(348271),
                c = r.n(l),
                d = r(934309);
            const _ = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: r, cursor: o, tweetId: n }) => e.graphQL(s(), { tweetId: n, count: r, cursor: o, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || d.cY), fetchRetweetedBy: ({ count: r, cursor: o, tweetId: s }) => e.graphQL(a(), { tweetId: s, count: r, cursor: o, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || d.cY), fetchEditHistory: ({ tweetId: r }) => e.graphQL(c(), { tweetId: r, ...(0, i.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || d.cY) });
        },
        625661: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => p });
            var i = r(202784),
                o = r(614983),
                s = r.n(o),
                n = r(325686),
                a = r(370006),
                l = r(786998),
                c = r(929028),
                d = r(386802);
            function _(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: o, hideBackButton: s, isFullWidth: n, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: h, secondaryBar: m, style: b, subtitle: w, title: g, titleDomId: y, titleIconCell: f, titleIconCellSize: k, withBackground: v, withWideContainer: C } = this.props,
                        { isModal: x } = this.context,
                        S = s ? d : i.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!v, x, !!m);
                    return i.createElement(i.Fragment, null, i.createElement(l.Z, { centerTitle: t, centeredLogo: r, isFullWidth: n, isLarge: c, leftControl: S, middleControl: p, position: _(u, x, o), rightControl: h, style: b, subtitle: w, title: g, titleDomId: y, titleIconCell: f, titleIconCellSize: k, withBackground: E, withWideContainer: C }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = c.Z.getBackgroundStyles();
                    return t ? i.createElement(n.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m, w: () => u });
            var i = r(202784),
                o = r(325686),
                s = r(108362),
                n = r(386802),
                a = r(392237),
                l = r(652904),
                c = r(555079),
                d = r(625661),
                _ = r(449067),
                p = r(715601);
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: s, centerTitle: n, hideBackButton: a, history: l, isFullWidth: _, isLarge: p, middleControl: u, onBackClick: m, rightControl: b, secondaryBar: w, subtitle: g, title: y } = this.props,
                                { isModal: f } = this.context;
                            return i.createElement(o.Z, { style: f ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, i.createElement(d.ZP, { backButtonType: r || (f ? "close" : "back"), backLocation: s, centerTitle: n, fixed: !f, hideBackButton: a, history: l, isFullWidth: _, isLarge: p, middleControl: u, onBackClick: m, ref: e, rightControl: b, secondaryBar: w, style: [f && h.appBarModal, t], subtitle: g, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: n, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: u, title: m, withoutBottomBarMobile: b } = this.props,
                        { isModal: w } = this.context,
                        g = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(l.Z, null, i.createElement(_.Z.Configure, { documentTitle: a, headerless: !0, title: m }), i.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, w && h.rootModal] }, !w && g, i.createElement(s.Z, { isFullWidth: c, isLarge: d, style: [h.container, w && h.containerModal, n] }, w ? i.createElement(p.Z, { style: h.viewport }, g, r) : r), t ? i.createElement(o.Z, { style: [h.bottomBarModal, !w && !b && h.bottomBarMobile] }, i.createElement(s.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const h = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = u;
        },
        507651: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var i = r(807896),
                o = r(202784),
                s = r(107267),
                n = r(403556),
                a = r(791632);
            const l = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: r, ...l } = e;
                    return o.createElement(n.Z, (0, i.Z)({}, l, { isCompact: r || (0, a.HD)(t) }));
                },
                c = o.memo(l);
        },
        652904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var i = r(202784),
                o = r(500002),
                s = r(668214),
                n = r(997174),
                a = r(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class c extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: i },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: s, search: n },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (l = !0));
                    const c = o || a;
                    ((c && o !== a) || (!c && r !== s) || i !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, o.ZP)(l(c));
        },
        886191: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => k });
            var i = r(202784),
                o = r(731708),
                s = r(457311),
                n = r(111677),
                a = r.n(n),
                l = r(912021),
                c = r(864702),
                d = r(479506),
                _ = r(903019),
                p = r(519896),
                u = r(774006),
                h = r(443781),
                m = r(810641),
                b = r(335632);
            const w = a().c09de2d4,
                g = a().ae111c99,
                y = i.createElement(a().I18NFormatMessage, { $i18n: "e7e44bab" }, i.createElement(o.ZP, { link: "/settings/search" }, a().f191a2ba));
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === d.Z.ItemType.USER || e === d.Z.ItemType.TOPIC || e === d.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: r, searchMode: i, urtEndpointOptions: o, vertical: s } = this.props,
                                { featureSwitches: n } = this.context,
                                a = n.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, i, r, s, o, a);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || i.createElement(s.Z, { header: g({ query: t }), message: y });
                        }),
                        (this._getMemoizedModule = (0, l.Z)((e, t, r, i, o, s, n) => (0, u.Z)({ query: e, searchMode: r, querySource: t, searchFilters: i, vertical: o, urtEndpointOptions: s, searchTimelinesGraphQLEnabled: n }))),
                        (this._getMemoizedEntryConfiguration = (0, l.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, b.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== _.N3.Live;
                    return i.createElement(m.Z, { apiErrorHandlerMap: c.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: p.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: w });
                }
            }
            f.contextType = h.rC;
            const k = f;
        },
        864702: (e, t, r) => {
            "use strict";
            r.d(t, { d: () => l });
            var i = r(111677),
                o = r.n(i),
                s = r(615656),
                n = r(51525);
            const a = o().i1801686,
                l = { [s.ZP.GenericForbidden]: { toast: (0, n.j)() }, [s.ZP.InvalidRequestUrl]: { toast: { text: a, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            const i = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        153386: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var i = r(413798),
                o = r(750085),
                s = r(218951),
                n = r(952257);
            const a = (e) => (0, s.Z)({ timelineId: `favoritersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchLikedBy, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, tweetId: e }) }, formatResponse: o.Z, context: "FETCH_TWEET_ACTIVITY_LIKES", perfKey: "favoritersGraphQL", staleIntervalMs: n.J });
        },
        481918: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var i = r(413798),
                o = r(750085),
                s = r(218951),
                n = r(952257);
            const a = (e) => (0, s.Z)({ timelineId: `retweetersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchRetweetedBy, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, tweetId: e }) }, formatResponse: o.Z, context: "FETCH_TWEET_ACTIVITY_RETWEETS", perfKey: "retweetersGraphQL", staleIntervalMs: n.J });
        },
        774006: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m, u: () => h });
            var i = r(644829),
                o = r(750085),
                s = r(903019),
                n = r(883432),
                a = r(555875),
                l = r(218951);
            const c = "search-",
                d = " near:me",
                _ = " filter:follows",
                p = { [s.N3.Image]: { result_filter: s.N3.Image }, [s.N3.List]: { result_filter: s.N3.List }, [s.N3.Live]: { tweet_search_mode: s.N3.Live }, [s.N3.Media]: { result_filter: s.N3.Media }, [s.N3.Top]: {}, [s.N3.User]: { result_filter: s.N3.User }, [s.N3.Video]: { result_filter: s.N3.Video } },
                u = (e) => (((e) => e === n.Z.SpellingCorrectionRevertClick || e === n.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                h = () => (e, t) => {
                    e(
                        (0, a.CY)(t())
                            .filter((e) => 0 === e.indexOf(c))
                            .map((e) => (0, a.$q)(e)),
                    );
                },
                m = ({ query: e, searchMode: t = s.N3.Top, querySource: r, searchFilters: n, vertical: a, urtEndpointOptions: h, searchTimelinesGraphQLEnabled: m }) => {
                    const b = u(r),
                        w = n && n.peopleFilter ? "searcher_follows" : void 0,
                        g = w ? "-pf" : "",
                        y = n && n.locationFilter && !e.includes(d) ? `${e}${d}` : e,
                        f = { timelineId: `${c}${y}-${t}${b}${g}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearch, getEndpointParams: (e) => ({ ...h?.requestParams, q: y, social_filter: w, vertical: a, ...p[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === s.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (m) {
                        const e = w && !y.includes(_) ? `${y}${_}` : y,
                            n = ((e) => {
                                switch (e) {
                                    case s.N3.Image:
                                        return "Photos";
                                    case s.N3.List:
                                        return "Lists";
                                    case s.N3.Media:
                                        return "Media";
                                    case s.N3.Top:
                                        return "Top";
                                    case s.N3.User:
                                        return "People";
                                    case s.N3.Video:
                                        return "Videos";
                                    case s.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            a = `gql-${c}${y}-${t}${b}${g}`;
                        return (0, l.Z)({ ...f, timelineId: a, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: o.Z, network: { getEndpointParams: ({ count: t, cursor: i }) => ({ rawQuery: e, count: t, product: n, querySource: r, cursor: "string" == typeof i ? i : void 0 }), getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearchGraphQL } });
                    }
                    return (0, l.Z)(f);
                };
        },
        952257: (e, t, r) => {
            "use strict";
            r.d(t, { J: () => i });
            const i = 1e4;
        },
        394660: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { ShowSimilarPostsScreen: () => $, default: () => W });
            var i = r(202784),
                o = r(457311),
                s = r(782261),
                n = r(111677),
                a = r.n(n),
                l = r(912021),
                c = r(718e3),
                d = r(252021),
                _ = r(443781),
                p = r(652904),
                u = r(810641),
                h = r(688715),
                m = r(907552),
                b = r(668214),
                w = r(601576);
            const g = (0, b.Z)()
                    .propsFromActions(() => ({ addToast: w.fz }))
                    .withAnalytics(),
                y = a().fd67deaa,
                f = a().f9183bb6;
            const k = g(function (e) {
                    const { postId: t, scribeNamespace: r } = e,
                        o = ((e) => (0, h.ju)(`https://x.com/i/status/${e}/similar`))(t);
                    return i.createElement(m.S0, { scribeNamespace: r, url: o }, i.createElement(m.by, { label: y, type: "dm" }), i.createElement(m.by, { label: f, type: "copy" }));
                }),
                v = k;
            var C = r(644829),
                x = r(750085),
                S = r(218951);
            const E = (e) => (0, S.Z)({ timelineId: `similarPostsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(C.Z).fetchSimilarPosts, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: x.Z, context: "FETCH_SIMILAR_POSTS", perfKey: "similarPostsGraphQL" });
            var T = r(836255);
            const Z = { page: "similar_posts", section: "similar_posts" },
                I = (e, t) => t.match.params.statusId,
                B = (e, t) => t.match.params.screenName,
                L = (e, t) => {
                    const r = I(0, t);
                    return r ? T.Z.selectHydrated(e, r) : void 0;
                },
                P = () => Z,
                R = (0, b.Z)()
                    .propsFromState(() => ({ screenName: B, statusId: I, scribeNamespace: P, tweet: L }))
                    .withAnalytics(Z),
                q = a().hea3f8ac,
                M = a().a09331e0,
                N = a().a5ab75ae,
                A = a().ce637c0e;
            class $ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = (e) => () => i.createElement(o.Z, { header: e })),
                        (this._render = (e, t, r) => i.createElement(u.Z, { fetchOptions: e, module: this._getModule(), renderEmptyState: this._renderEmptyState(r), title: t })),
                        (this._getMemoizedModule = (0, l.Z)((e) => E(e))),
                        (this._getModule = () => {
                            const { statusId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    const { history: e, screenName: t, scribeNamespace: r, statusId: o, tweet: n } = this.props,
                        { featureSwitches: a } = this.context,
                        l = n && s.Z.isArticlePost(n),
                        _ = l ? M : q,
                        u = l ? A : N,
                        h = { count: a.getNumberValue("responsive_web_show_similar_posts_count") || 50 },
                        m = i.createElement(v, { postId: o, scribeNamespace: r });
                    return i.createElement(p.Z, null, i.createElement(d.Z, { backLocation: `/${t}/status/${o}`, documentTitle: _, history: e, primaryContent: this._render(h, _, u), rightControl: m, sidebarContent: i.createElement(c.Z, null), title: _ }));
                }
            }
            $.contextType = _.rC;
            const W = R($);
        },
        955875: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { TweetActivityScreen: () => E, default: () => T });
            var i = r(202784),
                o = r(457311),
                s = r(111677),
                n = r.n(s),
                a = r(980407),
                l = r(810641),
                c = r(615027),
                d = r(24949),
                _ = r(668214),
                p = r(153386),
                u = r(481918);
            const h = (e, t) => t.match.params.statusId,
                m = (e, t) => t.match.params.screenName,
                b = (e, t) => t.match.params.tweetEngagementsSubroute,
                w = { likes: p.Z, retweets: u.Z },
                g = (0, _.Z)()
                    .propsFromState(() => ({ activityType: b, screenName: m, statusId: h, urtModule: (0, d.P1)(b, h, (e, t) => w[e]?.(t)) }))
                    .withAnalytics({ page: "tweet_activity", section: "tweet_activity" }),
                y = n().f08d8d08,
                f = n().f0ccff52,
                k = n().fc1acb54,
                v = n().e3527230,
                C = { likes: n().i3e8b808, retweets: n().c69fd704 },
                x = { likes: n().f12858d4, retweets: n().fe62cfec },
                S = { likes: () => i.createElement(o.Z, { header: k, message: v }), retweets: () => i.createElement(o.Z, { header: y, message: f }) };
            function E({ activityType: e, history: t, screenName: r, statusId: o, urtModule: s }) {
                const n = `/${r.toLowerCase()}/status/${o}`;
                return s ? i.createElement(a.Z, { backLocation: n, history: t, title: x[e] }, i.createElement(l.Z, { loadingAccessibilityLabel: C[e], module: s, renderEmptyState: S[e], title: x[e] })) : i.createElement(c.Z, { to: n });
            }
            const T = g(E);
        },
        913162: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { TweetEngagementsScreen: () => $, default: () => W });
            r(136728);
            var i = r(202784),
                o = r(457311),
                s = r(111677),
                n = r.n(s),
                a = r(718e3),
                l = r(727828),
                c = r(252021),
                d = r(507651),
                _ = r(443781),
                p = r(652904),
                u = r(886191),
                h = r(810641),
                m = r(903019),
                b = r(883432),
                w = r(615027),
                g = r(24949),
                y = r(668214),
                f = r(836255),
                k = r(153386),
                v = r(481918),
                C = r(919022);
            const x = { likes: k.Z, retweets: v.Z, quotes: void 0 },
                S = (e, t) => t.match.params.statusId,
                E = (e, t) => t.match.params.screenName,
                T = (e, t) => t.match.params.tweetEngagementsSubroute,
                Z = (0, y.Z)()
                    .propsFromState(() => ({
                        mode: T,
                        screenName: E,
                        statusId: S,
                        tweet: (0, g.P1)(
                            (e) => e,
                            S,
                            (e, t) => f.Z.selectHydrated(e, t),
                        ),
                        urtModule: (0, g.P1)(T, S, (e, t) => x[e]?.(t)),
                        viewer: C.ZP.selectViewerUser,
                    }))
                    .withAnalytics({ page: "full_tweet_activity", section: "full_tweet_activity" });
            var I = r(545389);
            const B = n().e35f2534,
                L = n().i60dfa72,
                P = { likes: n().dc604dda, retweets: n().cdd4ef4a, quotes: n().icc72234 },
                R = { likes: n().d7b8ebaa, retweets: n().ja42739e, quotes: n().j45978a8 },
                q = { likes: n().hc35b530, retweets: n().e0d6a246, quotes: n().aea3c420 },
                M = { likes: n().i2a26cb4, retweets: n().f0ccff52, quotes: n().i9b724e8 },
                N = { vertical: "tweet_detail_quote" };
            function A(e, t) {
                const r = q[t],
                    s = M[t];
                return i.createElement(o.Z, { header: r, message: s });
            }
            class $ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { mode: e, screenName: t, statusId: r, urtModule: o } = this.props,
                                s = `quoted_tweet_id:${r}`,
                                n = `/${t.toLowerCase()}/status/${r}`;
                            if ("likes" === e && !this._isOwnTweet()) return i.createElement(w.Z, { to: n });
                            if ("quotes" === e) return i.createElement(u.Z, { emptyStateComponent: A(0, e), fetchOptions: N, query: s, querySrc: b.Z.TweetDetailQuoteTweet, searchMode: m.N3.Top });
                            return o ? i.createElement(h.Z, { loadingAccessibilityLabel: B, module: o, renderEmptyState: () => A(0, e), title: R[e] }) : i.createElement(w.Z, { to: n });
                        });
                }
                _isOwnTweet() {
                    const { screenName: e, tweet: t, viewer: r } = this.props;
                    return t?.user.id_str === r?.id_str || e === r?.screen_name;
                }
                render() {
                    const { history: e, mode: t, screenName: r, statusId: o } = this.props,
                        s = P[t],
                        n = [
                            { key: "quotes", to: `/${r}/status/${o}/quotes`, label: R.quotes },
                            { key: "retweets", to: `/${r}/status/${o}/retweets`, label: R.retweets },
                        ];
                    this._isOwnTweet() && n.push({ key: "likes", to: `/${r}/status/${o}/likes`, label: R.likes });
                    const _ = (0, I.Z)({ featureSwitches: this.context.featureSwitches, isOwnPost: this._isOwnTweet(), isPremium: this.context.userClaims.isAnyPremiumSubscriber(), tweet: this.props.tweet, surface: "engagements_screen" });
                    return i.createElement(p.Z, null, i.createElement(c.Z, { backLocation: `/${r}/status/${o}`, documentTitle: s, history: e, primaryContent: this._render, secondaryBar: i.createElement(i.Fragment, null, _ ? i.createElement(l.Z, { variant: "PostAnalytics" }) : null, i.createElement(d.Z, { links: n })), sidebarContent: i.createElement(a.Z, null), title: L }));
                }
            }
            $.contextType = _.rC;
            const W = Z($);
        },
        403556: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => S });
            var i = r(807896),
                o = r(202784),
                s = r(194504),
                n = r(235902),
                a = r(392237),
                l = r(325686),
                c = r(111677),
                d = r.n(c),
                _ = r(912021),
                p = r(516951),
                u = r(731708),
                h = r(310088),
                m = r(175993),
                b = r(58881),
                w = r(530732);
            const g = d().d2414d31,
                y = () => d().ce4e85ae,
                f = d().fb9f6f39;
            class k extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, _.Z)((e, t) => {
                            const { pathname: r, query: i, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: i, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, i) => {
                            const o = a.default.theme.colors.text,
                                s = a.default.theme.colors.gray700;
                            return r || i ? (e || t ? o : s) : e ? o : s;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: i, children: s, color: n, isActive: c, isCompact: d, isPillLink: _, isRoundedRect: p, isWebRedesign: m, retainScrollPosition: k, style: C, to: x } = this.props,
                        { location: S } = this.state,
                        E = x ? this._getMemoizedLink(x, k) : void 0,
                        T = c ? c(x) : S?.pathname === E?.pathname,
                        Z = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: _ ? v.pillHoverStyle.backgroundColor : void 0 }),
                        I = m ? "medium" : T ? "bold" : "medium";
                    return o.createElement(w.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: Z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(_ ? [v.pillStyle] : [v.link]), ...(_ && T ? [v.pillActiveStyle] : []), d ? (_ ? v.compactPill : v.compactLink) : null, p ? v.roundedRect : null, C], withoutInteractiveStyles: m }, ({ isFocused: t, isHovered: c }) => o.createElement(l.Z, { style: _ && v.flexGrow }, o.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(T, c, m, _) }, d && v.compactText, m && t && v.focusedText, _ && v.pillTextStyle, _ && T && v.pillActiveTextStyle, _ && c && v.pillHoverTextStyle], weight: I }, e && o.createElement(e, { style: v.icon }), s, m || _ ? null : o.createElement(l.Z, { style: T && [v.border, { backgroundColor: a.default.theme.colors[n] }] })), r ? o.createElement(h.Z, { count: r, standalone: !0, style: [v.badge, r >= 10 && v.multiDigitBadge, r >= 20 && v.truncatedCountBadge], truncatedCountFormatter: f, unreadCountLabel: g, withBorder: !1 }) : i ? o.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (k.contextType = m.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = a.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                C = k,
                x = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: a, isRoundedRect: l, links: c, style: d, visibleItemIndex: _ }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        h = u() && !a,
                        m = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...n }, c) => {
                                    const d = h ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return o.createElement(C, (0, i.Z)({ viewType: s }, n, { isCompact: r, isPillLink: a, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, r, a, l, h, c],
                        );
                    return o.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: a && x.gap, childrenStyle: !h && x.flexGrow, key: p, style: [a ? null : x.segmentedControl, h && x.leftAligned, d], visibleItemIndex: _ }, m);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetActivity.43313aba.js.map

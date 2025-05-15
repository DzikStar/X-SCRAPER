(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetActivity"],
    {
        152802: (e) => {
            e.exports = { queryId: "oZdyEhDreCrDn6Su2Q5doA", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        176889: (e) => {
            e.exports = { queryId: "oqsfsyr3uRDm20DeDvM6xw", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        587262: (e) => {
            e.exports = { queryId: "dNlEjkcutV2IqiI2rmyAFQ", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => _ });
            var r = i(703710),
                s = i(152802),
                o = i.n(s),
                n = i(176889),
                a = i.n(n),
                l = i(587262),
                c = i.n(l),
                d = i(934309);
            const _ = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: i, cursor: s, tweetId: n }) => e.graphQL(o(), { tweetId: n, count: i, cursor: s, includePromotedContent: !0, ...(0, r.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || d.cY), fetchRetweetedBy: ({ count: i, cursor: s, tweetId: o }) => e.graphQL(a(), { tweetId: o, count: i, cursor: s, includePromotedContent: !0, ...(0, r.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || d.cY), fetchEditHistory: ({ tweetId: i }) => e.graphQL(c(), { tweetId: i, ...(0, r.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || d.cY) });
        },
        625661: (e, t, i) => {
            "use strict";
            i.d(t, { ZP: () => p });
            var r = i(202784),
                s = i(614983),
                o = i.n(s),
                n = i(325686),
                a = i(370006),
                l = i(786998),
                c = i(929028),
                d = i(386802);
            function _(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            o()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: s, hideBackButton: o, isFullWidth: n, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: h, secondaryBar: m, style: b, subtitle: w, title: g, titleDomId: y, titleIconCell: f, titleIconCellSize: k, withBackground: v, withWideContainer: C } = this.props,
                        { isModal: E } = this.context,
                        x = o ? d : r.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!v, E, !!m);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: n, isLarge: c, leftControl: x, middleControl: p, position: _(u, E, s), rightControl: h, style: b, subtitle: w, title: g, titleDomId: y, titleIconCell: f, titleIconCellSize: k, withBackground: Z, withWideContainer: C }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = c.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m, w: () => u });
            var r = i(202784),
                s = i(325686),
                o = i(108362),
                n = i(386802),
                a = i(392237),
                l = i(652904),
                c = i(555079),
                d = i(625661),
                _ = i(449067),
                p = i(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: o, centerTitle: n, hideBackButton: a, history: l, isFullWidth: _, isLarge: p, middleControl: u, onBackClick: m, rightControl: b, secondaryBar: w, subtitle: g, title: y } = this.props,
                                { isModal: f } = this.context;
                            return r.createElement(s.Z, { style: f ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: i || (f ? "close" : "back"), backLocation: o, centerTitle: n, fixed: !f, hideBackButton: a, history: l, isFullWidth: _, isLarge: p, middleControl: u, onBackClick: m, ref: e, rightControl: b, secondaryBar: w, style: [f && h.appBarModal, t], subtitle: g, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: n, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: u, title: m, withoutBottomBarMobile: b } = this.props,
                        { isModal: w } = this.context,
                        g = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(_.Z.Configure, { documentTitle: a, headerless: !0, title: m }), r.createElement(s.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, w && h.rootModal] }, !w && g, r.createElement(o.Z, { isFullWidth: c, isLarge: d, style: [h.container, w && h.containerModal, n] }, w ? r.createElement(p.Z, { style: h.viewport }, g, i) : i), t ? r.createElement(s.Z, { style: [h.bottomBarModal, !w && !b && h.bottomBarMobile] }, r.createElement(o.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const h = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = u;
        },
        507651: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var r = i(807896),
                s = i(202784),
                o = i(107267),
                n = i(403556),
                a = i(791632);
            const l = (e) => {
                    const t = (0, o.useHistory)();
                    return s.createElement(n.Z, (0, r.Z)({}, e, { isCompact: (0, a.HD)(t) }));
                },
                c = s.memo(l);
        },
        652904: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var r = i(202784),
                s = i(500002),
                o = i(668214),
                n = i(997174),
                a = i(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: o, search: n },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const c = s || a;
                    ((c && s !== a) || (!c && i !== o) || r !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, s.ZP)(l(c));
        },
        886191: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => k });
            var r = i(202784),
                s = i(731708),
                o = i(457311),
                n = i(674132),
                a = i.n(n),
                l = i(912021),
                c = i(864702),
                d = i(479506),
                _ = i(903019),
                p = i(519896),
                u = i(774006),
                h = i(443781),
                m = i(810641),
                b = i(335632);
            const w = a().c09de2d4,
                g = a().ae111c99,
                y = r.createElement(a().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(s.ZP, { link: "/settings/search" }, a().f191a2ba));
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === d.Z.ItemType.USER || e === d.Z.ItemType.TOPIC || e === d.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: i, searchMode: r, urtEndpointOptions: s, vertical: o } = this.props,
                                { featureSwitches: n } = this.context,
                                a = n.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, i, o, s, a);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(o.Z, { header: g({ query: t }), message: y });
                        }),
                        (this._getMemoizedModule = (0, l.Z)((e, t, i, r, s, o, n) => (0, u.Z)({ query: e, searchMode: i, querySource: t, searchFilters: r, vertical: s, urtEndpointOptions: o, searchTimelinesGraphQLEnabled: n }))),
                        (this._getMemoizedEntryConfiguration = (0, l.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, b.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== _.N3.Live;
                    return r.createElement(m.Z, { apiErrorHandlerMap: c.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: p.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: w });
                }
            }
            f.contextType = h.rC;
            const k = f;
        },
        864702: (e, t, i) => {
            "use strict";
            i.d(t, { d: () => l });
            var r = i(674132),
                s = i.n(r),
                o = i(615656),
                n = i(51525);
            const a = s().i1801686,
                l = { [o.ZP.GenericForbidden]: { toast: (0, n.j)() }, [o.ZP.InvalidRequestUrl]: { toast: { text: a, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        153386: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            var r = i(413798),
                s = i(750085),
                o = i(218951),
                n = i(952257);
            const a = (e) => (0, o.Z)({ timelineId: `favoritersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchLikedBy, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, tweetId: e }) }, formatResponse: s.Z, context: "FETCH_TWEET_ACTIVITY_LIKES", perfKey: "favoritersGraphQL", staleIntervalMs: n.J });
        },
        481918: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            var r = i(413798),
                s = i(750085),
                o = i(218951),
                n = i(952257);
            const a = (e) => (0, o.Z)({ timelineId: `retweetersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchRetweetedBy, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, tweetId: e }) }, formatResponse: s.Z, context: "FETCH_TWEET_ACTIVITY_RETWEETS", perfKey: "retweetersGraphQL", staleIntervalMs: n.J });
        },
        774006: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m, u: () => h });
            var r = i(644829),
                s = i(750085),
                o = i(903019),
                n = i(883432),
                a = i(555875),
                l = i(218951);
            const c = "search-",
                d = " near:me",
                _ = " filter:follows",
                p = { [o.N3.Image]: { result_filter: o.N3.Image }, [o.N3.List]: { result_filter: o.N3.List }, [o.N3.Live]: { tweet_search_mode: o.N3.Live }, [o.N3.Media]: { result_filter: o.N3.Media }, [o.N3.Top]: {}, [o.N3.User]: { result_filter: o.N3.User }, [o.N3.Video]: { result_filter: o.N3.Video } },
                u = (e) => (((e) => e === n.Z.SpellingCorrectionRevertClick || e === n.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                h = () => (e, t) => {
                    e(
                        (0, a.CY)(t())
                            .filter((e) => 0 === e.indexOf(c))
                            .map((e) => (0, a.$q)(e)),
                    );
                },
                m = ({ query: e, searchMode: t = o.N3.Top, querySource: i, searchFilters: n, vertical: a, urtEndpointOptions: h, searchTimelinesGraphQLEnabled: m }) => {
                    const b = u(i),
                        w = n && n.peopleFilter ? "searcher_follows" : void 0,
                        g = w ? "-pf" : "",
                        y = n && n.locationFilter && !e.includes(d) ? `${e}${d}` : e,
                        f = { timelineId: `${c}${y}-${t}${b}${g}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...h?.requestParams, q: y, social_filter: w, vertical: a, ...p[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === o.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (m) {
                        const e = w && !y.includes(_) ? `${y}${_}` : y,
                            n = ((e) => {
                                switch (e) {
                                    case o.N3.Image:
                                        return "Photos";
                                    case o.N3.List:
                                        return "Lists";
                                    case o.N3.Media:
                                        return "Media";
                                    case o.N3.Top:
                                        return "Top";
                                    case o.N3.User:
                                        return "People";
                                    case o.N3.Video:
                                        return "Videos";
                                    case o.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            a = `gql-${c}${y}-${t}${b}${g}`;
                        return (0, l.Z)({ ...f, timelineId: a, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: s.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: n, querySource: i, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, l.Z)(f);
                };
        },
        952257: (e, t, i) => {
            "use strict";
            i.d(t, { J: () => r });
            const r = 1e4;
        },
        394660: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { ShowSimilarPostsScreen: () => A, default: () => F });
            var r = i(202784),
                s = i(457311),
                o = i(782261),
                n = i(674132),
                a = i.n(n),
                l = i(912021),
                c = i(718e3),
                d = i(252021),
                _ = i(443781),
                p = i(652904),
                u = i(810641),
                h = i(688715),
                m = i(907552),
                b = i(668214),
                w = i(601576);
            const g = (0, b.Z)()
                    .propsFromActions(() => ({ addToast: w.fz }))
                    .withAnalytics(),
                y = a().fd67deaa,
                f = a().f9183bb6;
            const k = g(function (e) {
                    const { postId: t, scribeNamespace: i } = e,
                        s = ((e) => (0, h.ju)(`https://x.com/i/status/${e}/similar`))(t);
                    return r.createElement(m.S0, { scribeNamespace: i, url: s }, r.createElement(m.by, { label: y, type: "dm" }), r.createElement(m.by, { label: f, type: "copy" }));
                }),
                v = k;
            var C = i(644829),
                E = i(750085),
                x = i(218951);
            const Z = (e) => (0, x.Z)({ timelineId: `similarPostsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(C.Z).fetchSimilarPosts, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: E.Z, context: "FETCH_SIMILAR_POSTS", perfKey: "similarPostsGraphQL" });
            var T = i(836255);
            const S = { page: "similar_posts", section: "similar_posts" },
                I = (e, t) => t.match.params.statusId,
                B = (e, t) => t.match.params.screenName,
                L = (e, t) => {
                    const i = I(0, t);
                    return i ? T.Z.selectHydrated(e, i) : void 0;
                },
                P = () => S,
                R = (0, b.Z)()
                    .propsFromState(() => ({ screenName: B, statusId: I, scribeNamespace: P, tweet: L }))
                    .withAnalytics(S),
                q = a().hea3f8ac,
                M = a().a09331e0,
                N = a().a5ab75ae,
                $ = a().ce637c0e;
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderEmptyState = (e) => () => r.createElement(s.Z, { header: e })),
                        (this._render = (e, t, i) => r.createElement(u.Z, { fetchOptions: e, module: this._getModule(), renderEmptyState: this._renderEmptyState(i), title: t })),
                        (this._getMemoizedModule = (0, l.Z)((e) => Z(e))),
                        (this._getModule = () => {
                            const { statusId: e } = this.props;
                            return this._getMemoizedModule(e);
                        });
                }
                render() {
                    const { history: e, screenName: t, scribeNamespace: i, statusId: s, tweet: n } = this.props,
                        { featureSwitches: a } = this.context,
                        l = n && o.Z.isArticlePost(n),
                        _ = l ? M : q,
                        u = l ? $ : N,
                        h = { count: a.getNumberValue("responsive_web_show_similar_posts_count") || 50 },
                        m = r.createElement(v, { postId: s, scribeNamespace: i });
                    return r.createElement(p.Z, null, r.createElement(d.Z, { backLocation: `/${t}/status/${s}`, documentTitle: _, history: e, primaryContent: this._render(h, _, u), rightControl: m, sidebarContent: r.createElement(c.Z, null), title: _ }));
                }
            }
            A.contextType = _.rC;
            const F = R(A);
        },
        955875: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { TweetActivityScreen: () => Z, default: () => T });
            var r = i(202784),
                s = i(457311),
                o = i(674132),
                n = i.n(o),
                a = i(980407),
                l = i(810641),
                c = i(615027),
                d = i(24949),
                _ = i(668214),
                p = i(153386),
                u = i(481918);
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
                E = { likes: n().f12858d4, retweets: n().fe62cfec },
                x = { likes: () => r.createElement(s.Z, { header: k, message: v }), retweets: () => r.createElement(s.Z, { header: y, message: f }) };
            function Z({ activityType: e, history: t, screenName: i, statusId: s, urtModule: o }) {
                const n = `/${i.toLowerCase()}/status/${s}`;
                return o ? r.createElement(a.Z, { backLocation: n, history: t, title: E[e] }, r.createElement(l.Z, { loadingAccessibilityLabel: C[e], module: o, renderEmptyState: x[e], title: E[e] })) : r.createElement(c.Z, { to: n });
            }
            const T = g(Z);
        },
        913162: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { TweetEngagementsScreen: () => A, default: () => F });
            i(136728);
            var r = i(202784),
                s = i(457311),
                o = i(674132),
                n = i.n(o),
                a = i(718e3),
                l = i(727828),
                c = i(252021),
                d = i(507651),
                _ = i(443781),
                p = i(652904),
                u = i(886191),
                h = i(810641),
                m = i(903019),
                b = i(883432),
                w = i(615027),
                g = i(24949),
                y = i(668214),
                f = i(836255),
                k = i(153386),
                v = i(481918),
                C = i(919022);
            const E = { likes: k.Z, retweets: v.Z, quotes: void 0 },
                x = (e, t) => t.match.params.statusId,
                Z = (e, t) => t.match.params.screenName,
                T = (e, t) => t.match.params.tweetEngagementsSubroute,
                S = (0, y.Z)()
                    .propsFromState(() => ({
                        mode: T,
                        screenName: Z,
                        statusId: x,
                        tweet: (0, g.P1)(
                            (e) => e,
                            x,
                            (e, t) => f.Z.selectHydrated(e, t),
                        ),
                        urtModule: (0, g.P1)(T, x, (e, t) => E[e]?.(t)),
                        viewer: C.ZP.selectViewerUser,
                    }))
                    .withAnalytics({ page: "full_tweet_activity", section: "full_tweet_activity" });
            var I = i(545389);
            const B = n().e35f2534,
                L = n().i60dfa72,
                P = { likes: n().dc604dda, retweets: n().cdd4ef4a, quotes: n().icc72234 },
                R = { likes: n().d7b8ebaa, retweets: n().ja42739e, quotes: n().j45978a8 },
                q = { likes: n().hc35b530, retweets: n().e0d6a246, quotes: n().aea3c420 },
                M = { likes: n().i2a26cb4, retweets: n().f0ccff52, quotes: n().i9b724e8 },
                N = { vertical: "tweet_detail_quote" };
            function $(e, t) {
                const i = q[t],
                    o = M[t];
                return r.createElement(s.Z, { header: i, message: o });
            }
            class A extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._render = () => {
                            const { mode: e, screenName: t, statusId: i, urtModule: s } = this.props,
                                o = `quoted_tweet_id:${i}`,
                                n = `/${t.toLowerCase()}/status/${i}`;
                            if ("likes" === e && !this._isOwnTweet()) return r.createElement(w.Z, { to: n });
                            if ("quotes" === e) return r.createElement(u.Z, { emptyStateComponent: $(0, e), fetchOptions: N, query: o, querySrc: b.Z.TweetDetailQuoteTweet, searchMode: m.N3.Top });
                            return s ? r.createElement(h.Z, { loadingAccessibilityLabel: B, module: s, renderEmptyState: () => $(0, e), title: R[e] }) : r.createElement(w.Z, { to: n });
                        });
                }
                _isOwnTweet() {
                    const { screenName: e, tweet: t, viewer: i } = this.props;
                    return t?.user.id_str === i?.id_str || e === i?.screen_name;
                }
                render() {
                    const { history: e, mode: t, screenName: i, statusId: s } = this.props,
                        o = P[t],
                        n = [
                            { key: "quotes", to: `/${i}/status/${s}/quotes`, label: R.quotes },
                            { key: "retweets", to: `/${i}/status/${s}/retweets`, label: R.retweets },
                        ];
                    this._isOwnTweet() && n.push({ key: "likes", to: `/${i}/status/${s}/likes`, label: R.likes });
                    const _ = (0, I.Z)({ featureSwitches: this.context.featureSwitches, isOwnPost: this._isOwnTweet(), isPremium: this.context.userClaims.isAnyPremiumSubscriber(), tweet: this.props.tweet, surface: "engagements_screen" });
                    return r.createElement(p.Z, null, r.createElement(c.Z, { backLocation: `/${i}/status/${s}`, documentTitle: o, history: e, primaryContent: this._render, secondaryBar: r.createElement(r.Fragment, null, _ ? r.createElement(l.Z, { variant: "PostAnalytics" }) : null, r.createElement(d.Z, { links: n })), sidebarContent: r.createElement(a.Z, null), title: L }));
                }
            }
            A.contextType = _.rC;
            const F = S(A);
        },
        403556: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => x });
            var r = i(807896),
                s = i(202784),
                o = i(194504),
                n = i(235902),
                a = i(392237),
                l = i(325686),
                c = i(674132),
                d = i.n(c),
                _ = i(912021),
                p = i(516951),
                u = i(731708),
                h = i(310088),
                m = i(175993),
                b = i(58881),
                w = i(530732);
            const g = d().d2414d31,
                y = () => d().ce4e85ae,
                f = d().fb9f6f39;
            class k extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, _.Z)((e, t) => {
                            const { pathname: i, query: r, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: i, query: r, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, i, r) => {
                            const s = a.default.theme.colors.text,
                                o = a.default.theme.colors.gray700;
                            return i || r ? (e || t ? s : o) : e ? s : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: i, badgePip: r, children: o, color: n, isActive: c, isCompact: d, isPillLink: _, isRoundedRect: p, isWebRedesign: m, retainScrollPosition: k, style: C, to: E } = this.props,
                        { location: x } = this.state,
                        Z = E ? this._getMemoizedLink(E, k) : void 0,
                        T = c ? c(E) : x?.pathname === Z?.pathname,
                        S = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0 }),
                        I = m ? "medium" : T ? "bold" : "medium";
                    return s.createElement(w.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: S, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [_ ? v.pill : v.link, _ && T ? v.active : null, d ? (_ ? v.compactPill : v.compactLink) : null, p ? v.roundedRect : null, C], withoutInteractiveStyles: m || _ }, ({ isFocused: t, isHovered: c }) => s.createElement(l.Z, { style: _ && v.flexGrow }, s.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(T, c, m, _) }, d && v.compactText, m && t && v.focusedText], weight: I }, e && s.createElement(e, { style: v.icon }), o, m || _ ? null : s.createElement(l.Z, { style: T && [v.border, { backgroundColor: a.default.theme.colors[n] }] })), i ? s.createElement(h.Z, { count: i, standalone: !0, style: [v.badge, i >= 10 && v.multiDigitBadge, i >= 20 && v.truncatedCountBadge], truncatedCountFormatter: f, unreadCountLabel: g, withBorder: !1 }) : r ? s.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                C = k,
                E = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: i, isPillLink: a, isRoundedRect: l, links: c, style: d, visibleItemIndex: _ }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        h = u() && !a,
                        m = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...n }, c) => {
                                    const d = h ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return s.createElement(C, (0, r.Z)({ viewType: o }, n, { isCompact: i, isPillLink: a, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, i, a, l, h, c],
                        );
                    return s.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: a && E.gap, childrenStyle: !h && E.flexGrow, key: p, style: [a ? null : E.segmentedControl, h && E.leftAligned, d], visibleItemIndex: _ }, m);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetActivity.3c2e075a.js.map

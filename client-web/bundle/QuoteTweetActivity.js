(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.QuoteTweetActivity"],
    {
        270422: (e) => {
            e.exports = { queryId: "UBUVD7YVgM1MeSlsOkZYVQ", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        607959: (e) => {
            e.exports = { queryId: "-UEuw4LxU962ijLRKvLM2Q", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        348271: (e) => {
            e.exports = { queryId: "PR261ElnBQ5uq6QOQq9UEw", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var i = r(703710),
                n = r(270422),
                _ = r.n(n),
                s = r(607959),
                a = r.n(s),
                o = r(348271),
                l = r.n(o),
                c = r(934309);
            const d = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: r, cursor: n, tweetId: s }) => e.graphQL(_(), { tweetId: s, count: r, cursor: n, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || c.cY), fetchRetweetedBy: ({ count: r, cursor: n, tweetId: _ }) => e.graphQL(a(), { tweetId: _, count: r, cursor: n, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || c.cY), fetchEditHistory: ({ tweetId: r }) => e.graphQL(l(), { tweetId: r, ...(0, i.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || c.cY) });
        },
        652904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var i = r(202784),
                n = r(500002),
                _ = r(668214),
                s = r(997174),
                a = r(118823);
            const o = (0, _.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: i },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: _, search: s },
                            locationKey: a,
                        } = e;
                    let o = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (o = !0));
                    const l = n || a;
                    ((l && n !== a) || (!l && r !== _) || i !== s || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, n.ZP)(o(l));
        },
        886191: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => f });
            var i = r(202784),
                n = r(731708),
                _ = r(457311),
                s = r(111677),
                a = r.n(s),
                o = r(912021),
                l = r(864702),
                c = r(479506),
                d = r(903019),
                p = r(519896),
                u = r(774006),
                w = r(443781),
                h = r(810641),
                b = r(335632);
            const m = a().c09de2d4,
                g = a().ae111c99,
                y = i.createElement(a().I18NFormatMessage, { $i18n: "e7e44bab" }, i.createElement(n.ZP, { link: "/settings/search" }, a().f191a2ba));
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: r, searchMode: i, urtEndpointOptions: n, vertical: _ } = this.props,
                                { featureSwitches: s } = this.context,
                                a = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, i, r, _, n, a);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || i.createElement(_.Z, { header: g({ query: t }), message: y });
                        }),
                        (this._getMemoizedModule = (0, o.Z)((e, t, r, i, n, _, s) => (0, u.Z)({ query: e, searchMode: r, querySource: t, searchFilters: i, vertical: n, urtEndpointOptions: _, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, o.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, b.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== d.N3.Live;
                    return i.createElement(h.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: p.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: m });
                }
            }
            v.contextType = w.rC;
            const f = v;
        },
        864702: (e, t, r) => {
            "use strict";
            r.d(t, { d: () => o });
            var i = r(111677),
                n = r.n(i),
                _ = r(615656),
                s = r(51525);
            const a = n().i1801686,
                o = { [_.ZP.GenericForbidden]: { toast: (0, s.j)() }, [_.ZP.InvalidRequestUrl]: { toast: { text: a, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            const i = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        481918: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => a });
            var i = r(413798),
                n = r(750085),
                _ = r(218951),
                s = r(952257);
            const a = (e) => (0, _.Z)({ timelineId: `retweetersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchRetweetedBy, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, tweetId: e }) }, formatResponse: n.Z, context: "FETCH_TWEET_ACTIVITY_RETWEETS", perfKey: "retweetersGraphQL", staleIntervalMs: s.J });
        },
        774006: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => h, u: () => w });
            var i = r(644829),
                n = r(750085),
                _ = r(903019),
                s = r(883432),
                a = r(555875),
                o = r(218951);
            const l = "search-",
                c = " near:me",
                d = " filter:follows",
                p = { [_.N3.Image]: { result_filter: _.N3.Image }, [_.N3.List]: { result_filter: _.N3.List }, [_.N3.Live]: { tweet_search_mode: _.N3.Live }, [_.N3.Media]: { result_filter: _.N3.Media }, [_.N3.Top]: {}, [_.N3.User]: { result_filter: _.N3.User }, [_.N3.Video]: { result_filter: _.N3.Video } },
                u = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                w = () => (e, t) => {
                    e(
                        (0, a.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, a.$q)(e)),
                    );
                },
                h = ({ query: e, searchMode: t = _.N3.Top, querySource: r, searchFilters: s, vertical: a, urtEndpointOptions: w, searchTimelinesGraphQLEnabled: h }) => {
                    const b = u(r),
                        m = s && s.peopleFilter ? "searcher_follows" : void 0,
                        g = m ? "-pf" : "",
                        y = s && s.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        v = { timelineId: `${l}${y}-${t}${b}${g}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearch, getEndpointParams: (e) => ({ ...w?.requestParams, q: y, social_filter: m, vertical: a, ...p[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === _.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (h) {
                        const e = m && !y.includes(d) ? `${y}${d}` : y,
                            s = ((e) => {
                                switch (e) {
                                    case _.N3.Image:
                                        return "Photos";
                                    case _.N3.List:
                                        return "Lists";
                                    case _.N3.Media:
                                        return "Media";
                                    case _.N3.Top:
                                        return "Top";
                                    case _.N3.User:
                                        return "People";
                                    case _.N3.Video:
                                        return "Videos";
                                    case _.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            a = `gql-${l}${y}-${t}${b}${g}`;
                        return (0, o.Z)({ ...v, timelineId: a, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: n.Z, network: { getEndpointParams: ({ count: t, cursor: i }) => ({ rawQuery: e, count: t, product: s, querySource: r, cursor: "string" == typeof i ? i : void 0 }), getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearchGraphQL } });
                    }
                    return (0, o.Z)(v);
                };
        },
        952257: (e, t, r) => {
            "use strict";
            r.d(t, { J: () => i });
            const i = 1e4;
        },
        251699: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { QuoteTweetActivityScreen: () => S, default: () => C });
            var i = r(202784),
                n = r(457311),
                _ = r(111677),
                s = r.n(_),
                a = r(718e3),
                o = r(252021),
                l = r(652904),
                c = r(886191),
                d = r(903019),
                p = r(883432),
                u = r(668214),
                w = r(836255),
                h = r(481918);
            const b = (e, t) => t.match.params.statusId,
                m = (e, t) => t.match.params.screenName,
                g = (e, t) => w.Z.selectHydrated(e, b(0, t)),
                y = (0, u.Z)()
                    .propsFromState(() => ({ screenName: m, statusId: b, tweet: g }))
                    .adjustStateProps(({ screenName: e, statusId: t, tweet: r }) => ({ screenName: e, statusId: t, tweet: r, usersUrtModule: (0, h.Z)(t) }))
                    .withAnalytics({ page: "quote_tweets_timeline" }),
                v = s().j45978a8,
                f = s().aea3c420,
                k = s().b40a22c0,
                T = { vertical: "tweet_detail_quote" },
                E = i.createElement(n.Z, { header: f, message: k });
            class S extends i.Component {
                constructor(...e) {
                    super(...e), (this._quoteTweetSearchQueryString = `quoted_tweet_id:${this.props.statusId}`), (this._renderQuoteTweetTimeline = () => i.createElement(c.Z, { emptyStateComponent: E, fetchOptions: T, query: this._quoteTweetSearchQueryString, querySrc: p.Z.TweetDetailQuoteTweet, searchMode: d.N3.Top }));
                }
                render() {
                    const { history: e, tweet: t } = this.props;
                    return i.createElement(l.Z, null, i.createElement(o.Z, { backLocation: t ? t.permalink : "/", history: e, primaryContent: this._renderQuoteTweetTimeline(), sidebarContent: i.createElement(a.Z, { withWhoToFollow: !1 }), title: v }));
                }
            }
            const C = y(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.QuoteTweetActivity.8b80e4ca.js.map

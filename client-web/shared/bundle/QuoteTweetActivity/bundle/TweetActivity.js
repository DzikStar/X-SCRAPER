(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.QuoteTweetActivity~bundle.TweetActivity"],
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
        413798: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var r = i(703710),
                n = i(270422),
                _ = i.n(n),
                a = i(607959),
                s = i.n(a),
                o = i(348271),
                l = i.n(o),
                c = i(934309);
            const d = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: i, cursor: n, tweetId: a }) => e.graphQL(_(), { tweetId: a, count: i, cursor: n, includePromotedContent: !0, ...(0, r.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || c.cY), fetchRetweetedBy: ({ count: i, cursor: n, tweetId: _ }) => e.graphQL(s(), { tweetId: _, count: i, cursor: n, includePromotedContent: !0, ...(0, r.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || c.cY), fetchEditHistory: ({ tweetId: i }) => e.graphQL(l(), { tweetId: i, ...(0, r.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || c.cY) });
        },
        652904: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var r = i(202784),
                n = i(500002),
                _ = i(668214),
                a = i(997174),
                s = i(118823);
            const o = (0, _.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class l extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: _, search: a },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (o = !0));
                    const l = n || s;
                    ((l && n !== s) || (!l && i !== _) || r !== a || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, n.ZP)(o(l));
        },
        886191: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => f });
            var r = i(202784),
                n = i(731708),
                _ = i(457311),
                a = i(111677),
                s = i.n(a),
                o = i(912021),
                l = i(864702),
                c = i(479506),
                d = i(903019),
                p = i(519896),
                w = i(774006),
                h = i(443781),
                b = i(810641),
                u = i(335632);
            const m = s().c09de2d4,
                g = s().ae111c99,
                v = r.createElement(s().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(n.ZP, { link: "/settings/search" }, s().f191a2ba));
            class y extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: i, searchMode: r, urtEndpointOptions: n, vertical: _ } = this.props,
                                { featureSwitches: a } = this.context,
                                s = a.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, i, _, n, s);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(_.Z, { header: g({ query: t }), message: v });
                        }),
                        (this._getMemoizedModule = (0, o.Z)((e, t, i, r, n, _, a) => (0, w.Z)({ query: e, searchMode: i, querySource: t, searchFilters: r, vertical: n, urtEndpointOptions: _, searchTimelinesGraphQLEnabled: a }))),
                        (this._getMemoizedEntryConfiguration = (0, o.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, u.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== d.N3.Live;
                    return r.createElement(b.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: p.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: m });
                }
            }
            y.contextType = h.rC;
            const f = y;
        },
        864702: (e, t, i) => {
            "use strict";
            i.d(t, { d: () => o });
            var r = i(111677),
                n = i.n(r),
                _ = i(615656),
                a = i(51525);
            const s = n().i1801686,
                o = { [_.ZP.GenericForbidden]: { toast: (0, a.j)() }, [_.ZP.InvalidRequestUrl]: { toast: { text: s, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        481918: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            var r = i(413798),
                n = i(750085),
                _ = i(218951),
                a = i(952257);
            const s = (e) => (0, _.Z)({ timelineId: `retweetersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchRetweetedBy, getEndpointParams: ({ count: t, cursor: i }) => ({ count: t, cursor: "string" == typeof i ? i : void 0, tweetId: e }) }, formatResponse: n.Z, context: "FETCH_TWEET_ACTIVITY_RETWEETS", perfKey: "retweetersGraphQL", staleIntervalMs: a.J });
        },
        774006: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => b, u: () => h });
            var r = i(644829),
                n = i(750085),
                _ = i(903019),
                a = i(883432),
                s = i(555875),
                o = i(218951);
            const l = "search-",
                c = " near:me",
                d = " filter:follows",
                p = { [_.N3.Image]: { result_filter: _.N3.Image }, [_.N3.List]: { result_filter: _.N3.List }, [_.N3.Live]: { tweet_search_mode: _.N3.Live }, [_.N3.Media]: { result_filter: _.N3.Media }, [_.N3.Top]: {}, [_.N3.User]: { result_filter: _.N3.User }, [_.N3.Video]: { result_filter: _.N3.Video } },
                w = (e) => (((e) => e === a.Z.SpellingCorrectionRevertClick || e === a.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                h = () => (e, t) => {
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, s.$q)(e)),
                    );
                },
                b = ({ query: e, searchMode: t = _.N3.Top, querySource: i, searchFilters: a, vertical: s, urtEndpointOptions: h, searchTimelinesGraphQLEnabled: b }) => {
                    const u = w(i),
                        m = a && a.peopleFilter ? "searcher_follows" : void 0,
                        g = m ? "-pf" : "",
                        v = a && a.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        y = { timelineId: `${l}${v}-${t}${u}${g}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...h?.requestParams, q: v, social_filter: m, vertical: s, ...p[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === _.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (b) {
                        const e = m && !v.includes(d) ? `${v}${d}` : v,
                            a = ((e) => {
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
                            s = `gql-${l}${v}-${t}${u}${g}`;
                        return (0, o.Z)({ ...y, timelineId: s, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: n.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: a, querySource: i, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, o.Z)(y);
                };
        },
        952257: (e, t, i) => {
            "use strict";
            i.d(t, { J: () => r });
            const r = 1e4;
        },
        748138: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => o });
            var r = i(202784),
                n = i(890601),
                _ = i(783427),
                a = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, _.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.QuoteTweetActivity~bundle.TweetActivity.20b9133a.js.map

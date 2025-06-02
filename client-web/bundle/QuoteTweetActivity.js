(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.QuoteTweetActivity"],
    {
        270422: (e) => {
            e.exports = { queryId: "66LDcsUUazjiPtzoS-rfUA", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        607959: (e) => {
            e.exports = { queryId: "e3GU8b5qSCfKo7CY-Osa2A", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        348271: (e) => {
            e.exports = { queryId: "aj6FaUjCesV4nTbhXWTNMA", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var i = r(703710),
                n = r(270422),
                _ = r.n(n),
                a = r(607959),
                s = r.n(a),
                o = r(348271),
                l = r.n(o),
                c = r(934309);
            const d = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: r, cursor: n, tweetId: a }) => e.graphQL(_(), { tweetId: a, count: r, cursor: n, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || c.cY), fetchRetweetedBy: ({ count: r, cursor: n, tweetId: _ }) => e.graphQL(s(), { tweetId: _, count: r, cursor: n, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || c.cY), fetchEditHistory: ({ tweetId: r }) => e.graphQL(l(), { tweetId: r, ...(0, i.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || c.cY) });
        },
        652904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var i = r(202784),
                n = r(500002),
                _ = r(668214),
                a = r(997174),
                s = r(118823);
            const o = (0, _.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: _, search: a },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (o = !0));
                    const l = n || s;
                    ((l && n !== s) || (!l && r !== _) || i !== a || o) && this._performPageUpdates(this.props);
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
                a = r(111677),
                s = r.n(a),
                o = r(912021),
                l = r(864702),
                c = r(479506),
                d = r(903019),
                p = r(519896),
                h = r(774006),
                u = r(443781),
                w = r(810641),
                b = r(335632);
            const m = s().c09de2d4,
                g = s().ae111c99,
                v = i.createElement(s().I18NFormatMessage, { $i18n: "e7e44bab" }, i.createElement(n.ZP, { link: "/settings/search" }, s().f191a2ba));
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: r, searchMode: i, urtEndpointOptions: n, vertical: _ } = this.props,
                                { featureSwitches: a } = this.context,
                                s = a.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, i, r, _, n, s);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || i.createElement(_.Z, { header: g({ query: t }), message: v });
                        }),
                        (this._getMemoizedModule = (0, o.Z)((e, t, r, i, n, _, a) => (0, h.Z)({ query: e, searchMode: r, querySource: t, searchFilters: i, vertical: n, urtEndpointOptions: _, searchTimelinesGraphQLEnabled: a }))),
                        (this._getMemoizedEntryConfiguration = (0, o.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, b.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== d.N3.Live;
                    return i.createElement(w.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: p.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: m });
                }
            }
            y.contextType = u.rC;
            const f = y;
        },
        864702: (e, t, r) => {
            "use strict";
            r.d(t, { d: () => o });
            var i = r(111677),
                n = r.n(i),
                _ = r(615656),
                a = r(51525);
            const s = n().i1801686,
                o = { [_.ZP.GenericForbidden]: { toast: (0, a.j)() }, [_.ZP.InvalidRequestUrl]: { toast: { text: s, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            const i = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        481918: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var i = r(413798),
                n = r(750085),
                _ = r(218951),
                a = r(952257);
            const s = (e) => (0, _.Z)({ timelineId: `retweetersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchRetweetedBy, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, tweetId: e }) }, formatResponse: n.Z, context: "FETCH_TWEET_ACTIVITY_RETWEETS", perfKey: "retweetersGraphQL", staleIntervalMs: a.J });
        },
        774006: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => w, u: () => u });
            var i = r(644829),
                n = r(750085),
                _ = r(903019),
                a = r(883432),
                s = r(555875),
                o = r(218951);
            const l = "search-",
                c = " near:me",
                d = " filter:follows",
                p = { [_.N3.Image]: { result_filter: _.N3.Image }, [_.N3.List]: { result_filter: _.N3.List }, [_.N3.Live]: { tweet_search_mode: _.N3.Live }, [_.N3.Media]: { result_filter: _.N3.Media }, [_.N3.Top]: {}, [_.N3.User]: { result_filter: _.N3.User }, [_.N3.Video]: { result_filter: _.N3.Video } },
                h = (e) => (((e) => e === a.Z.SpellingCorrectionRevertClick || e === a.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                u = () => (e, t) => {
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, s.$q)(e)),
                    );
                },
                w = ({ query: e, searchMode: t = _.N3.Top, querySource: r, searchFilters: a, vertical: s, urtEndpointOptions: u, searchTimelinesGraphQLEnabled: w }) => {
                    const b = h(r),
                        m = a && a.peopleFilter ? "searcher_follows" : void 0,
                        g = m ? "-pf" : "",
                        v = a && a.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        y = { timelineId: `${l}${v}-${t}${b}${g}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearch, getEndpointParams: (e) => ({ ...u?.requestParams, q: v, social_filter: m, vertical: s, ...p[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === _.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (w) {
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
                            s = `gql-${l}${v}-${t}${b}${g}`;
                        return (0, o.Z)({ ...y, timelineId: s, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: n.Z, network: { getEndpointParams: ({ count: t, cursor: i }) => ({ rawQuery: e, count: t, product: a, querySource: r, cursor: "string" == typeof i ? i : void 0 }), getEndpoint: (e) => e.withEndpoint(i.Z).fetchSearchGraphQL } });
                    }
                    return (0, o.Z)(y);
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
                a = r.n(_),
                s = r(718e3),
                o = r(252021),
                l = r(652904),
                c = r(886191),
                d = r(903019),
                p = r(883432),
                h = r(668214),
                u = r(836255),
                w = r(481918);
            const b = (e, t) => t.match.params.statusId,
                m = (e, t) => t.match.params.screenName,
                g = (e, t) => u.Z.selectHydrated(e, b(0, t)),
                v = (0, h.Z)()
                    .propsFromState(() => ({ screenName: m, statusId: b, tweet: g }))
                    .adjustStateProps(({ screenName: e, statusId: t, tweet: r }) => ({ screenName: e, statusId: t, tweet: r, usersUrtModule: (0, w.Z)(t) }))
                    .withAnalytics({ page: "quote_tweets_timeline" }),
                y = a().j45978a8,
                f = a().aea3c420,
                k = a().b40a22c0,
                T = { vertical: "tweet_detail_quote" },
                E = i.createElement(n.Z, { header: f, message: k });
            class S extends i.Component {
                constructor(...e) {
                    super(...e), (this._quoteTweetSearchQueryString = `quoted_tweet_id:${this.props.statusId}`), (this._renderQuoteTweetTimeline = () => i.createElement(c.Z, { emptyStateComponent: E, fetchOptions: T, query: this._quoteTweetSearchQueryString, querySrc: p.Z.TweetDetailQuoteTweet, searchMode: d.N3.Top }));
                }
                render() {
                    const { history: e, tweet: t } = this.props;
                    return i.createElement(l.Z, null, i.createElement(o.Z, { backLocation: t ? t.permalink : "/", history: e, primaryContent: this._renderQuoteTweetTimeline(), sidebarContent: i.createElement(s.Z, { withWhoToFollow: !1 }), title: y }));
                }
            }
            const C = v(S);
        },
        748138: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => o });
            var i = r(202784),
                n = r(890601),
                _ = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, _.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.QuoteTweetActivity.93ff0dfa.js.map

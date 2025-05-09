(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetEditHistory"],
    {
        152802: (e) => {
            e.exports = { queryId: "LT1rv3Ah4rgxYJOZ9xhi2A", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        176889: (e) => {
            e.exports = { queryId: "JpDTssKfMuPsqyee8-TDQA", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        587262: (e) => {
            e.exports = { queryId: "vS07Ucvw7Q9eiH7agST7UA", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, _) => {
            "use strict";
            _.d(t, { Z: () => p });
            var n = _(703710),
                i = _(152802),
                a = _.n(i),
                r = _(176889),
                o = _.n(r),
                s = _(587262),
                l = _.n(s),
                d = _(934309);
            const p = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: _, cursor: i, tweetId: r }) => e.graphQL(a(), { tweetId: r, count: _, cursor: i, includePromotedContent: !0, ...(0, n.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || d.cY), fetchRetweetedBy: ({ count: _, cursor: i, tweetId: a }) => e.graphQL(o(), { tweetId: a, count: _, cursor: i, includePromotedContent: !0, ...(0, n.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || d.cY), fetchEditHistory: ({ tweetId: _ }) => e.graphQL(l(), { tweetId: _, ...(0, n.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || d.cY) });
        },
        652904: (e, t, _) => {
            "use strict";
            _.d(t, { Z: () => d });
            var n = _(202784),
                i = _(500002),
                a = _(668214),
                r = _(997174),
                o = _(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class l extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: _, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: a, search: r },
                            locationKey: o,
                        } = e;
                    let s = !1;
                    t.pathname !== _ ? (this._isInBackground = !0) : this._isInBackground && t.pathname === _ && ((this._isInBackground = !1), (s = !0));
                    const l = i || o;
                    ((l && i !== o) || (!l && _ !== a) || n !== r || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: _, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), _(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, i.ZP)(s(l));
        },
        119260: (e, t, _) => {
            "use strict";
            _.r(t), _.d(t, { TweetEditHistoryScreen: () => S, default: () => L });
            var n = _(202784),
                i = _(325686),
                a = _(457311),
                r = _(392237),
                o = _(674132),
                s = _.n(o),
                l = _(718e3),
                d = _(252021),
                p = _(652904),
                b = _(810641),
                c = _(24949),
                w = _(782261),
                m = _(668214),
                u = _(836255),
                h = _(912021),
                g = _(413798),
                f = _(750085),
                v = _(218951);
            const y = (0, h.Z)((e) => (0, v.Z)({ timelineId: `tweet-edit-history-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.Z).fetchEditHistory, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: f.Z, context: "FETCH_EDIT_HISTORY_TIMELINE", perfKey: "editHistoryGraphQL" })),
                k = (e, t) => t.match.params.statusId,
                T = (0, m.Z)()
                    .propsFromState(() => ({ tweetLatestEditVersionId: (0, c.P1)(u.Z.createHydratedTweetSelector(k), k, (e, t) => (e ? w.Z.getTweetLatestVersionId(e) : t)) }))
                    .adjustStateProps(({ tweetLatestEditVersionId: e }) => ({ urtModule: y(e) }))
                    .withAnalytics({ page: "edit_history" }),
                I = s().f345dcda,
                q = s().h2fcc532,
                x = s().e9f1fbcc,
                E = n.createElement(l.Z, null),
                A = () => n.createElement(a.Z, { header: x });
            function S(e) {
                const { history: t, urtModule: _ } = e,
                    a = n.createElement(i.Z, { style: Z.root }, n.createElement(b.Z, { loadingAccessibilityLabel: q, module: _, renderEmptyState: A, title: I }));
                return n.createElement(p.Z, null, n.createElement(d.Z, { backLocation: "/", history: t, primaryContent: a, sidebarContent: E, title: I }));
            }
            const Z = r.default.create((e) => ({ root: { paddingVertical: e.componentDimensions.gutterVertical } })),
                L = T(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetEditHistory.ee71fc8a.js.map

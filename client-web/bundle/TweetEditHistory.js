(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetEditHistory"],
    {
        270422: (e) => {
            e.exports = { queryId: "pdnJCGqIFsEwdHz1MwC8Bw", operationName: "Favoriters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        607959: (e) => {
            e.exports = { queryId: "YGc5g0KBmqLAJUENC2Z_Pw", operationName: "Retweeters", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        348271: (e) => {
            e.exports = { queryId: "Phziw7D_GYmxl5PyZlMBtA", operationName: "TweetEditHistory", operationType: "query", metadata: { featureSwitches: ["premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "rweb_video_screen_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        413798: (e, t, _) => {
            "use strict";
            _.d(t, { Z: () => p });
            var n = _(703710),
                i = _(270422),
                a = _.n(i),
                r = _(607959),
                o = _.n(r),
                s = _(348271),
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
            _.r(t), _.d(t, { TweetEditHistoryScreen: () => T, default: () => C });
            var n = _(202784),
                i = _(325686),
                a = _(457311),
                r = _(392237),
                o = _(111677),
                s = _.n(o),
                l = _(718e3),
                d = _(252021),
                p = _(652904),
                c = _(810641),
                b = _(24949),
                w = _(782261),
                m = _(668214),
                h = _(836255),
                u = _(912021),
                g = _(413798),
                v = _(750085),
                f = _(218951);
            const y = (0, u.Z)((e) => (0, f.Z)({ timelineId: `tweet-edit-history-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.Z).fetchEditHistory, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: v.Z, context: "FETCH_EDIT_HISTORY_TIMELINE", perfKey: "editHistoryGraphQL" })),
                k = (e, t) => t.match.params.statusId,
                E = (0, m.Z)()
                    .propsFromState(() => ({ tweetLatestEditVersionId: (0, b.P1)(h.Z.createHydratedTweetSelector(k), k, (e, t) => (e ? w.Z.getTweetLatestVersionId(e) : t)) }))
                    .adjustStateProps(({ tweetLatestEditVersionId: e }) => ({ urtModule: y(e) }))
                    .withAnalytics({ page: "edit_history" }),
                I = s().f345dcda,
                q = s().h2fcc532,
                x = s().e9f1fbcc,
                z = n.createElement(l.Z, null),
                Z = () => n.createElement(a.Z, { header: x });
            function T(e) {
                const { history: t, urtModule: _ } = e,
                    a = n.createElement(i.Z, { style: A.root }, n.createElement(c.Z, { loadingAccessibilityLabel: q, module: _, renderEmptyState: Z, title: I }));
                return n.createElement(p.Z, null, n.createElement(d.Z, { backLocation: "/", history: t, primaryContent: a, sidebarContent: z, title: I }));
            }
            const A = r.default.create((e) => ({ root: { paddingVertical: e.componentDimensions.gutterVertical } })),
                C = E(T);
        },
        748138: (e, t, _) => {
            "use strict";
            _.r(t), _.d(t, { default: () => s });
            var n = _(202784),
                i = _(890601),
                a = _(783427),
                r = _(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetEditHistory.8d52f6aa.js.map

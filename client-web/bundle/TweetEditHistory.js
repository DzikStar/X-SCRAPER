(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TweetEditHistory"],
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
        413798: (e, t, _) => {
            "use strict";
            _.d(t, { Z: () => c });
            var n = _(703710),
                i = _(270422),
                a = _.n(i),
                r = _(607959),
                o = _.n(r),
                s = _(348271),
                l = _.n(s),
                d = _(934309);
            const c = ({ apiClient: e, featureSwitches: t }) => ({ fetchLikedBy: ({ count: _, cursor: i, tweetId: r }) => e.graphQL(a(), { tweetId: r, count: _, cursor: i, includePromotedContent: !0, ...(0, n.d)(t) }, (e, t) => !t?.favoriters_timeline?.timeline).then((e) => e?.favoriters_timeline?.timeline || d.cY), fetchRetweetedBy: ({ count: _, cursor: i, tweetId: a }) => e.graphQL(o(), { tweetId: a, count: _, cursor: i, includePromotedContent: !0, ...(0, n.d)(t) }, (e, t) => !t?.retweeters_timeline?.timeline).then((e) => e?.retweeters_timeline?.timeline || d.cY), fetchEditHistory: ({ tweetId: _ }) => e.graphQL(l(), { tweetId: _, ...(0, n.d)(t), withQuickPromoteEligibilityTweetFields: !0 }, (e, t) => !t?.tweet_result_by_rest_id?.result).then((e) => (e?.tweet_result_by_rest_id?.result && e.tweet_result_by_rest_id.result.edit_history_timeline && e.tweet_result_by_rest_id.result.edit_history_timeline?.timeline) || d.cY) });
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
            _.r(t), _.d(t, { TweetEditHistoryScreen: () => z, default: () => S });
            var n = _(202784),
                i = _(325686),
                a = _(457311),
                r = _(392237),
                o = _(111677),
                s = _.n(o),
                l = _(718e3),
                d = _(252021),
                c = _(652904),
                p = _(810641),
                b = _(24949),
                w = _(782261),
                m = _(668214),
                u = _(836255),
                h = _(912021),
                g = _(413798),
                f = _(750085),
                v = _(218951);
            const y = (0, h.Z)((e) => (0, v.Z)({ timelineId: `tweet-edit-history-${e}`, network: { getEndpoint: (e) => e.withEndpoint(g.Z).fetchEditHistory, getEndpointParams: () => ({ tweetId: e }) }, formatResponse: f.Z, context: "FETCH_EDIT_HISTORY_TIMELINE", perfKey: "editHistoryGraphQL" })),
                k = (e, t) => t.match.params.statusId,
                E = (0, m.Z)()
                    .propsFromState(() => ({ tweetLatestEditVersionId: (0, b.P1)(u.Z.createHydratedTweetSelector(k), k, (e, t) => (e ? w.Z.getTweetLatestVersionId(e) : t)) }))
                    .adjustStateProps(({ tweetLatestEditVersionId: e }) => ({ urtModule: y(e) }))
                    .withAnalytics({ page: "edit_history" }),
                I = s().f345dcda,
                Z = s().h2fcc532,
                q = s().e9f1fbcc,
                x = n.createElement(l.Z, null),
                T = () => n.createElement(a.Z, { header: q });
            function z(e) {
                const { history: t, urtModule: _ } = e,
                    a = n.createElement(i.Z, { style: C.root }, n.createElement(p.Z, { loadingAccessibilityLabel: Z, module: _, renderEmptyState: T, title: I }));
                return n.createElement(c.Z, null, n.createElement(d.Z, { backLocation: "/", history: t, primaryContent: a, sidebarContent: x, title: I }));
            }
            const C = r.default.create((e) => ({ root: { paddingVertical: e.componentDimensions.gutterVertical } })),
                S = E(z);
        },
        41065: (e, t, _) => {
            "use strict";
            _.r(t), _.d(t, { default: () => s });
            var n = _(202784),
                i = _(890601),
                a = _(783427),
                r = _(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TweetEditHistory.0f70f1ba.js.map

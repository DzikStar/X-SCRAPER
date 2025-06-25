"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.RelatedSearchHandler"],
    {
        527090: (e, t, c) => {
            c.r(t), c.d(t, { default: () => k });
            var i = c(351322),
                l = c(202784),
                n = c(952428),
                r = c(731708),
                a = c(392237),
                s = c(883432);
            function o({ entry: e }) {
                const t = e?.content?.relatedSearch.text,
                    c = l.useMemo(() => ({ pathname: "/search", query: { q: t, src: s.Z.RelatedQueryClick } }), [t]);
                return l.createElement(n.Z, { link: c, style: _.link }, l.createElement(r.ZP, null, t));
            }
            const _ = a.default.create((e) => ({ link: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                d = l.memo(o),
                k = i.iH({ component: d }).getHandler();
        },
        883432: (e, t, c) => {
            c.d(t, { Z: () => i });
            const i = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.RelatedSearchHandler.cc1acada.js.map

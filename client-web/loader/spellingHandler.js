"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.spellingHandler"],
    {
        294458: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(202784),
                l = n(325686);
            const c = (e) => i.createElement(l.Z, { style: r.root }, e.children),
                r = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                a = i.memo(c);
        },
        431615: (e, t, n) => {
            n.r(t), n.d(t, { default: () => b });
            var i = n(351322),
                l = n(202784),
                c = n(731708),
                r = n(111677),
                a = n.n(r),
                o = n(187669),
                s = n(883432),
                g = n(725516),
                p = n(602676);
            const m = "searchSpellingSuggestionLabel",
                d = "searchSpellingSuggestionLink";
            var u = n(294458);
            const k = a().je5502eb,
                _ = { element: "spelling_expansion_revert" },
                h = { element: "spelling_expansion" },
                S = ({ entry: e }) => {
                    const t = (0, g.z)(),
                        {
                            content: { originalQuery: n, spellingResult: i },
                        } = e,
                        r = l.useCallback(() => t.scribe({ ..._, action: "click", data: (0, p.t)(e) }), [t, e]);
                    (0, o.q)(() => {
                        t.scribe({ ...h, action: "impression" });
                    });
                    const S = l.useMemo(() => ({ pathname: "/search", query: { q: n, src: s.Z.SpellingExpansionRevertClick } }), [n]),
                        b = l.useMemo(() => ({ originalSearchTerm: l.createElement(c.ZP, { weight: "bold" }, n) }), [n]);
                    return l.createElement(u.Z, null, l.createElement(c.ZP, { testID: m, weight: "bold" }, k({ suggestion: i.text })), l.createElement(c.ZP, { link: S, onClick: r, testID: d }, l.createElement(a().I18NFormatMessage, { $i18n: "h36fe5c9" }, b.originalSearchTerm)));
                },
                b = i.iH({ component: S, divider: { top: !0, bottom: !0 }, getScribeDataItem: (0, p.k)("expansion") }).getHandler();
        },
        385778: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var i = n(351322),
                l = n(202784),
                c = n(731708),
                r = n(111677),
                a = n.n(r),
                o = n(187669),
                s = n(883432),
                g = n(725516),
                p = n(602676),
                m = n(294458);
            const d = a().bc4628a1,
                u = { element: "spelling_correction_revert" },
                k = { element: "spelling_correction" },
                _ = ({ entry: e }) => {
                    const t = (0, g.z)(),
                        {
                            content: { originalQuery: n, spellingResult: i },
                        } = e,
                        r = l.useCallback(() => t.scribe({ ...u, action: "click", data: (0, p.t)(e) }), [t, e]);
                    (0, o.q)(() => {
                        t.scribe({ ...k, action: "impression" });
                    });
                    const _ = l.useMemo(() => ({ pathname: "/search", query: { q: n, src: s.Z.SpellingCorrectionClick } }), [n]),
                        h = l.useMemo(() => ({ originalSearchTerm: l.createElement(c.ZP, { weight: "bold" }, n) }), [n]);
                    return l.createElement(m.Z, null, l.createElement(c.ZP, { weight: "bold" }, d({ suggestion: i.text })), l.createElement(c.ZP, { link: _, onClick: r }, l.createElement(a().I18NFormatMessage, { $i18n: "h36fe5c9" }, h.originalSearchTerm)));
                },
                h = l.memo(_),
                S = i.iH({ component: h, divider: { top: !0, bottom: !0 }, getScribeDataItem: (0, p.k)("correction") }).getHandler();
        },
        969985: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var i = n(351322),
                l = n(202784),
                c = n(731708),
                r = n(392237),
                a = n(111677),
                o = n.n(a),
                s = n(187669),
                g = n(883432),
                p = n(725516),
                m = n(602676);
            const d = { element: "spelling_suggestion" },
                u = { element: "spelling_suggestion" },
                k = ({ entry: e }) => {
                    const t = (0, p.z)(),
                        {
                            content: { spellingResult: n },
                        } = e,
                        i = n.text,
                        r = l.useMemo(() => ({ pathname: "/search", query: { q: i, src: g.Z.SpellingSuggestionClick } }), [i]),
                        a = l.useCallback(() => {
                            t.scribe({ ...d, action: "click", data: (0, m.t)(e) });
                        }, [t, e]);
                    (0, s.q)(() => {
                        t.scribe({ ...u, action: "impression" });
                    });
                    const k = l.useMemo(() => ({ suggestedSearchTerm: l.createElement(c.ZP, { weight: "bold" }, i) }), [i]);
                    return l.createElement(c.ZP, { link: r, onClick: a, style: _.root }, l.createElement(o().I18NFormatMessage, { $i18n: "hce48b8b" }, k.suggestedSearchTerm));
                },
                _ = r.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                h = l.memo(k),
                S = i.iH({ component: h, divider: { top: !0, bottom: !0 }, getScribeDataItem: (0, m.k)("suggestion") }).getHandler();
        },
        602676: (e, t, n) => {
            n.d(t, { k: () => l, t: () => c });
            var i = n(479506);
            const l = (e) => (t) => ({ item_type: i.Z.ItemType.SEARCH, name: `spelling_${e}`, description: t.content.spellingResult.text, position: 0 }),
                c = (e) => ({ search_details: { query: e.content.originalQuery }, items: [{ description: e.content.spellingResult.text }] });
        },
        883432: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.spellingHandler.78c209ca.js.map

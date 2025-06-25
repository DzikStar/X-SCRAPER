"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewsSingleSentimentSidebar"],
    {
        254274: (e, l, n) => {
            n.r(l), n.d(l, { BetaText: () => y, HeaderText: () => g, default: () => _ });
            n(136728);
            var a = n(202784),
                t = n(325686),
                s = n(107267),
                i = n(731708),
                r = n(392237),
                o = n(111677),
                d = n.n(o),
                c = n(306677),
                u = n(725405),
                m = n(507504),
                p = n(858496);
            const g = d().af781666,
                y = d().ad35153e,
                k = 1,
                b = 2;
            function _() {
                const e = (0, u.Z)(),
                    l = (0, s.useHistory)(),
                    n = (0, m.Z)({ limit: 3 }),
                    r = a.useCallback(() => {
                        e.scribe({ element: "news_sentiment_sidebar", action: "impression" });
                    }, [e]),
                    o = a.useMemo(() => n.filter((e) => e.sentiment).slice(0, b), [n]);
                return o.length < k
                    ? null
                    : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(c.D, { id: "news_sentiment_sidebar", onFullyVisible: r, position: "top", testID: "news_sentiment_sidebar" }),
                          a.createElement(
                              t.Z,
                              { style: h.container },
                              a.createElement(t.Z, { style: h.headerContainer }, a.createElement(i.ZP, { style: h.headerText, weight: "heavy" }, g), a.createElement(t.Z, { style: h.betaLabel }, a.createElement(i.ZP, { style: h.betaLabelText, weight: "bold" }, y))),
                              a.createElement(
                                  t.Z,
                                  { style: h.sentimentsContainer },
                                  o.map(
                                      (n) =>
                                          n.sentiment &&
                                          a.createElement(p.Z, {
                                              articleId: n.id,
                                              containerStyle: h.sentiment,
                                              hoveredContainerStyle: h.hoveredSentiment,
                                              key: `${n.id}-sentiment-sidebar`,
                                              onClick: () => {
                                                  e.scribe({ element: "news_sentiment_sidebar_article", action: "click", data: { event_info: n.id } }), l.push(`/i/news/a/${n.id}`);
                                              },
                                              sentiment: n.sentiment,
                                              showPercentages: !0,
                                          }),
                                  ),
                              ),
                          ),
                      );
            }
            const h = r.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentimentsContainer: { display: "flex", flexDirection: "column" }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, hoveredSentiment: { backgroundColor: e.colors.gray0 } }));
        },
        116409: (e, l, n) => {
            n.r(l), n.d(l, { default: () => m });
            var a = n(202784),
                t = n(325686),
                s = n(731708),
                i = n(392237),
                r = n(306677),
                o = n(725405),
                d = n(858496),
                c = n(768431),
                u = n(254274);
            function m({ articleId: e }) {
                const l = (0, o.Z)(),
                    n = a.useCallback(() => {
                        l.scribe({ element: "single_news_sentiment_sidebar", action: "impression" });
                    }, [l]),
                    i = (0, c.Z)({ trendId: e });
                return i && i.sentiment ? a.createElement(a.Fragment, null, a.createElement(r.D, { id: "single_news_sentiment_sidebar", onFullyVisible: n, position: "top", testID: "single_news_sentiment_sidebar" }), a.createElement(t.Z, { style: p.container }, a.createElement(t.Z, { style: p.headerContainer }, a.createElement(s.ZP, { style: p.headerText, weight: "heavy" }, u.HeaderText), a.createElement(t.Z, { style: p.betaLabel }, a.createElement(s.ZP, { style: p.betaLabelText, weight: "bold" }, u.BetaText))), a.createElement(d.Z, { articleId: i.id, containerStyle: p.sentiment, key: `${i.id}-sentiment-sidebar`, sentiment: i.sentiment, showPercentages: !0 }))) : null;
            }
            const p = i.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, questionStyle: { color: e.colors.brandColor, fontWeight: e.fontWeights.medium, fontSize: e.fontSizes.body } }));
        },
        507504: (e, l, n) => {
            n.d(l, { Z: () => L });
            n(136728);
            var a,
                t,
                s,
                i,
                r,
                o,
                d,
                c,
                u,
                m,
                p,
                g,
                y,
                k,
                b,
                _,
                h,
                f,
                F = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "limit" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useHomeNewsArticlesQuery",
                        selections: [
                            {
                                alias: "deepsearchArticlesHomePageResult",
                                args: (t = [
                                    { kind: "Variable", name: "limit", variableName: "limit" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: "DeepsearchArticleHomePage",
                                kind: "LinkedField",
                                name: "deepsearch_articles_home_page",
                                plural: !0,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "AiTrendResults",
                                        kind: "LinkedField",
                                        name: "trend_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "NewsArticle",
                                                                kind: "LinkedField",
                                                                name: "deepsearch_news_articles",
                                                                plural: !1,
                                                                selections: [
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (r = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (y = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [c, (g = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, d], storageKey: null }),
                                                                    (k = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "GrokBraveSearch",
                                                                        kind: "LinkedField",
                                                                        name: "sources",
                                                                        plural: !0,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    (b = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: r, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(_ = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: r, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (h = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "TrendSentiment",
                                                                kind: "LinkedField",
                                                                name: "sentiment_data",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }, g], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "AiTrend",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: t, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(f = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [s, i, o, d, c, u, m, p, y, k, b, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [f, _], storageKey: null }], storageKey: null }], storageKey: null }, h, s], type: "AiTrend", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            F.hash = "3801ff63426a8e5a7f7864683169d9be";
            const S = F;
            n(585488);
            var K = n(712696),
                T = n.n(K);
            const w = S;
            const L = function ({ limit: e }) {
                const l = T()(w, { limit: e }).deepsearchArticlesHomePageResult || [],
                    n = [];
                return (
                    l.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && n.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    n
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewsSingleSentimentSidebar.aa02329a.js.map

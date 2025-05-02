"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewsSingleSentimentSidebar"],
    {
        116409: (e, l, n) => {
            n.r(l), n.d(l, { default: () => m });
            var a = n(202784),
                s = n(325686),
                i = n(731708),
                t = n(392237),
                r = n(306677),
                u = n(725405),
                d = n(2025),
                o = n(768431),
                c = n(399398),
                g = n(254274);
            function m({ articleId: e }) {
                const l = (0, u.Z)(),
                    n = a.useCallback(() => {
                        l.scribe({ element: "single_news_sentiment_sidebar", action: "impression" });
                    }, [l]),
                    t = (0, o.Z)({ trendId: e });
                return t && t.sentiment ? a.createElement(c.g, null, a.createElement(r.D, { id: "single_news_sentiment_sidebar", onFullyVisible: n, position: "top", testID: "single_news_sentiment_sidebar" }), a.createElement(s.Z, { style: y.container }, a.createElement(s.Z, { style: y.headerContainer }, a.createElement(i.ZP, { style: y.headerText, weight: "heavy" }, g.HeaderText), a.createElement(s.Z, { style: y.betaLabel }, a.createElement(i.ZP, { style: y.betaLabelText, weight: "bold" }, g.BetaText))), a.createElement(d.Z, { key: `${t.id}-sentiment-sidebar`, percentageScoreStyle: y.percentageScore, questionStyle: y.questionStyle, sentiment: t.sentiment, showPercentages: !0, style: y.sentiment, typeStyle: y.typeStyle }))) : null;
            }
            const y = t.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, questionStyle: { color: e.colors.brandColor, fontWeight: e.fontWeights.medium, fontSize: e.fontSizes.body }, typeStyle: { color: e.colors.brandColor }, percentageScore: { fontSize: e.fontSizes.headline2 } }));
        },
        768431: (e, l, n) => {
            n.d(l, { Z: () => ne });
            var a,
                s,
                i,
                t,
                r,
                u,
                d,
                o,
                c,
                g,
                m,
                y,
                p,
                k,
                _,
                F,
                K,
                S,
                b,
                T,
                w,
                L,
                f,
                h,
                I,
                v,
                A,
                x,
                z,
                N,
                C,
                R,
                B,
                E,
                P,
                Z,
                q,
                D,
                V,
                W,
                H,
                Q,
                G,
                O,
                j,
                M,
                $,
                J,
                U = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "trendId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useNewsArticleQuery",
                        selections: [
                            {
                                alias: "newsArticleResult",
                                args: (s = [
                                    { kind: "Variable", name: "rest_id", variableName: "trendId" },
                                    { kind: "Literal", name: "s", value: "84b0" },
                                ]),
                                concreteType: "AiTrendResults",
                                kind: "LinkedField",
                                name: "ai_trend_by_rest_id",
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
                                                    (t = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AiTrendPage",
                                                        kind: "LinkedField",
                                                        name: "page",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "AiTrendPostTimeline",
                                                                kind: "LinkedField",
                                                                name: "post_timelines",
                                                                plural: !0,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "label", storageKey: null },
                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "post_timeline", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "NewsArticle",
                                                        kind: "LinkedField",
                                                        name: "deepsearch_news_articles",
                                                        plural: !1,
                                                        selections: [
                                                            i,
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                            (d = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (u = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "key_points", storageKey: null }),
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                            (_ = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [g, (k = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "NewsArticleSection",
                                                                kind: "LinkedField",
                                                                name: "sections",
                                                                plural: !0,
                                                                selections: [
                                                                    c,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "content",
                                                                        plural: !1,
                                                                        selections: [
                                                                            (F = { kind: "InlineFragment", selections: [{ alias: "bullets", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "BulletsBlock", abstractKey: null }),
                                                                            (K = {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_caption", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_size", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                                ],
                                                                                type: "ImageBlock",
                                                                                abstractKey: null,
                                                                            }),
                                                                            (S = { kind: "InlineFragment", selections: [{ alias: "inline_header", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "InlineHeader", abstractKey: null }),
                                                                            (b = { kind: "InlineFragment", selections: [{ alias: "text", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "TextBlock", abstractKey: null }),
                                                                            (P = { kind: "InlineFragment", selections: [{ alias: "website", args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "content", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), (w = { alias: null, args: null, kind: "ScalarField", name: "cached_page_url", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "creator", storageKey: null }), (f = { alias: null, args: null, kind: "ScalarField", name: "date_last_crawled", storageKey: null }), (h = { alias: null, args: null, kind: "ScalarField", name: "date_published", storageKey: null }), (I = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null }), (A = { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null }), (x = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), (z = { alias: null, args: null, kind: "ScalarField", name: "language", storageKey: null }), (N = { alias: null, args: null, kind: "ScalarField", name: "parsed_text", storageKey: null }), (C = { alias: null, args: null, kind: "ScalarField", name: "site_name", storageKey: null }), (R = { alias: null, args: null, kind: "ScalarField", name: "snippet", storageKey: null }), (B = { alias: null, args: null, kind: "ScalarField", name: "time_accessed", storageKey: null }), c, (E = { alias: null, args: null, kind: "ScalarField", name: "media_name", storageKey: null }), g], storageKey: null }], type: "WebsiteBlock", abstractKey: null }),
                                                                            (Z = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: u, storageKey: null }], type: "PostBlock", abstractKey: null }),
                                                                            (O = { kind: "InlineFragment", selections: [(q = { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null }), (D = { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null }), { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [(V = { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }), (W = { alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }), (H = { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }), k], storageKey: null }, (Q = { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null }), (G = { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null })], type: "TrendSentiment", abstractKey: null }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (j = { alias: null, args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "sources", plural: !0, selections: [T, w, L, f, h, I, v, A, x, z, N, C, R, B, c, g, E], storageKey: null }),
                                                            (M = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: u, storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    ($ = { alias: null, args: null, concreteType: "TrendSentiment", kind: "LinkedField", name: "sentiment_data", plural: !1, selections: [G, D, q, Q, { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [W, H, V, k], storageKey: null }], storageKey: null }),
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
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useNewsArticleQuery", selections: [{ alias: "newsArticleResult", args: s, concreteType: "AiTrendResults", kind: "LinkedField", name: "ai_trend_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(J = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, d, o, c, g, m, y, p, _, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [c, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [J, F, K, S, b, P, Z, O], storageKey: null }], storageKey: null }, j, M], storageKey: null }, $, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }] },
                    params: { id: "OGuIchikkLkacWpMvS1Wpg", metadata: {}, name: "useNewsArticleQuery", operationKind: "query", text: null },
                };
            U.hash = "a506b224a236e8986b17cac3a53a9878";
            const X = U;
            n(585488);
            var Y = n(712696),
                ee = n.n(Y);
            const le = X;
            const ne = function ({ trendId: e }) {
                const l = ee()(le, { trendId: e }).newsArticleResult;
                if (!l) return null;
                const n = l.result;
                if (!n || !n.deepsearch_news_articles) return null;
                const a = n.page?.post_timelines || [];
                return { ...n.deepsearch_news_articles, sentiment: n.sentiment_data ?? void 0, post_timelines: a } || null;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewsSingleSentimentSidebar.26c81d3a.js.map

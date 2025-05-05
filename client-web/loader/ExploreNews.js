"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ExploreNews"],
    {
        568527: (e, l, t) => {
            t.r(l), t.d(l, { default: () => g });
            t(136728);
            var n = t(202784),
                a = t(325686),
                i = t(194504),
                r = t(392237),
                s = t(187669),
                o = t(725405),
                c = t(118368),
                u = t(507504),
                d = t(695356),
                m = t(563586);
            function g() {
                const e = (0, o.Z)(),
                    l = (0, u.Z)({ limit: 15 });
                (0, s.q)(() => {
                    e.scribe({ element: "news_timeline_v2", action: "impression" });
                });
                const t = n.useMemo(() => {
                        const e = { highlight: [], secondList: [], carousel: [], thirdList: [], fourthList: [] };
                        if (!l.length) return e;
                        let t = 0;
                        e.highlight.push(l[0]), t++;
                        for (let n = 0; n < 3 && t < l.length; n++) e.secondList.push(l[t]), t++;
                        for (let n = 1; n < 5 && t < l.length; n++) e.carousel.push(l[t]), t++;
                        for (let n = 0; n < 3 && t < l.length; n++) e.thirdList.push(l[t]), t++;
                        for (; t < l.length; ) e.fourthList.push(l[t]), t++;
                        return e;
                    }, [l]),
                    r = (t) => {
                        (0, d.Ib)(e, { articleId: t, allArticleIds: l.map((e) => e.id) });
                    },
                    g = t.highlight.length > 0 ? t.highlight[0] : null;
                return n.createElement(
                    a.Z,
                    { style: p.container },
                    g && n.createElement(m.Z, { article: g, headerImgStyle: p.highlightedArticleHeaderImg, infoContainerStyle: p.highlightedInfoContainer, layout: "imageTop", onClick: () => r(g.id), routeToExploreNews: !0, showSentiment: !1, size: "large", style: [p.article, p.highlightedArticle], titleStyle: p.highlightedArticleTitle, useRowReactions: !0 }),
                    t.secondList.map((e) => n.createElement(n.Fragment, null, n.createElement(c.Z, null), n.createElement(m.Z, { article: e, infoContainerStyle: p.secondListArticleInfoContainer, key: `${e.id}-second-list`, layout: "imageLeft", onClick: () => r(e.id), routeToExploreNews: !0, size: "normal", style: p.article, summaryNumLines: 2, useRowReactions: !0 }))),
                    t.carousel.length > 0 &&
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(c.Z, null),
                            n.createElement(
                                i.Z,
                                { buttonsContainerStyle: p.carouselContent },
                                t.carousel.map((e) => n.createElement(m.Z, { article: e, hideImg: !0, hideSummary: !0, infoContainerStyle: p.carouselArticleInfoContainer, key: `${e.id}-carousel`, layout: "imageLeft", onClick: () => r(e.id), routeToExploreNews: !0, size: "normal", style: p.carouselArticle, titleNumLines: 2 })),
                            ),
                        ),
                    t.thirdList.length > 0 &&
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(c.Z, null),
                            t.thirdList.map((e) => n.createElement(m.Z, { article: e, hideSummary: !0, infoContainerStyle: p.thirdListArticleInfoContainer, key: `${e.id}-third-list`, layout: "imageLeft", onClick: () => r(e.id), routeToExploreNews: !0, size: "normal", style: p.article })),
                        ),
                    t.fourthList.length > 0 &&
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(c.Z, null),
                            t.fourthList.map((e) => n.createElement(m.Z, { article: e, hideImg: !0, hideReactions: !0, hideSummary: !0, key: `${e.id}-fourth-list`, layout: "imageLeft", onClick: () => r(e.id), routeToExploreNews: !0, size: "normal", style: p.article })),
                        ),
                );
            }
            const p = r.default.create((e) => ({ container: { flex: 1, backgroundColor: e.colors.navigationBackground }, article: { borderRadius: 0, padding: e.spaces.space16 }, highlightedArticleHeaderImg: { minHeight: 280, borderRadius: 0 }, highlightedArticle: { gap: e.spaces.space8, padding: 0 }, highlightedArticleTitle: { fontSize: e.fontSizes.title3, lineHeight: 30 }, highlightedInfoContainer: { padding: e.spaces.space16 }, secondListArticleInfoContainer: { flex: 3 }, thirdListArticleInfoContainer: { flex: 3 }, sentiment: { maxWidth: 300, height: "100%" }, carouselContent: { display: "flex", flexDirection: "row" }, carouselArticle: { borderRadius: 0, padding: e.spaces.space16, maxWidth: 300, height: "100%" }, carouselArticleInfoContainer: { flex: 3 } }));
        },
        507504: (e, l, t) => {
            t.d(l, { Z: () => F });
            t(136728);
            var n,
                a,
                i,
                r,
                s,
                o,
                c,
                u,
                d,
                m,
                g,
                p,
                h,
                y,
                f,
                k,
                C,
                _,
                w = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "limit" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useHomeNewsArticlesQuery",
                        selections: [
                            {
                                alias: "deepsearchArticlesHomePageResult",
                                args: (a = [
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
                                                                    (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (s = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (h = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [u, (p = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
                                                                    (y = {
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
                                                                    (f = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: s, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(k = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: s, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (C = {
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
                                                                    { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }, p], storageKey: null },
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: a, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, o, c, u, d, m, g, h, y, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [_, k], storageKey: null }], storageKey: null }], storageKey: null }, C, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            w.hash = "3801ff63426a8e5a7f7864683169d9be";
            const S = w;
            t(585488);
            var L = t(712696),
                I = t.n(L);
            const T = S;
            const F = function ({ limit: e }) {
                const l = I()(T, { limit: e }).deepsearchArticlesHomePageResult || [],
                    t = [];
                return (
                    l.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && t.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    t
                );
            };
        },
        563586: (e, l, t) => {
            t.d(l, { Z: () => L });
            t(136728);
            var n = t(202784),
                a = t(325686),
                i = t(107267),
                r = t(530732),
                s = t(392237),
                o = t(306677),
                c = t(725405),
                u = t(125363),
                d = t(836255),
                m = t(246728),
                g = t(695356),
                p = t(790167),
                h = t(287627),
                y = t(992942);
            const f = "https://abs.twimg.com/grok-news/article-x-banner";
            function k({ hideDefault: e, hovered: l, imgStyle: t, style: a, url: i }) {
                return e && i === f ? null : n.createElement(r.Z, { style: [C.headerImgContainer, a], withoutInteractiveStyles: !0 }, ({ isHovered: e }) => n.createElement(y.Z, { resizeMode: "cover", source: i, style: [C.headerImg, l ? C.hoveredHeaderImg : void 0, t] }));
            }
            const C = s.default.create((e) => ({ headerImgContainer: { flex: 1, height: 200, width: "100%", overflow: "hidden", borderRadius: e.borderRadii.medium }, headerImg: { width: "100%", height: "100%", transition: "all 0.5s ease", transform: "scale(1)" }, hoveredHeaderImg: { cursor: "pointer", transform: "scale(1.05)" } }));
            var _ = t(477575),
                w = t(2025),
                S = t(978086);
            function L({ article: e, commentsStyle: l, containerStyle: t, headerImgStyle: s, hideDefaultImg: y, hideImg: f, hideReactions: C, hideSummary: L, hoveredBgColor: T, infoContainerStyle: F, layout: x = "imageTop", onClick: v, reactionsContainerStyle: K, routeToExploreNews: E, sentimentStyle: b, showSentiment: A, size: H = "normal", style: Z, summaryNumLines: N, titleNumLines: R, titleStyle: z, useRowReactions: D }) {
                const B = (0, c.Z)(),
                    P = (0, u.I0)(),
                    $ = (0, i.useHistory)(),
                    { isCompactLayout: M } = (0, m.Z)(),
                    Q = n.useMemo(() => {
                        if (!e) return [];
                        const l = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && l.push(e.post_results.rest_id);
                            }),
                            l
                        );
                    }, [e]),
                    U = n.useMemo(() => {
                        if (!e) return [];
                        const l = [];
                        e.header_img_post_id && l.push(e.header_img_post_id.post_results.rest_id);
                        return l.push(...Q.slice(0, 3)), l;
                    }, [e, Q]);
                n.useEffect(() => {
                    P(d.Z.fetchMultipleIfNeeded(U));
                }, [P, U]);
                const q = { full: { container: I.fullContainer, headerImgContainer: I.fullHeaderImgContainer }, imageLeft: { container: I.imageLeftContainer, headerImgContainer: I.imageLeftHeaderImgContainer }, imageTop: { container: I.imageTopContainer, headerImgContainer: I.imageTopHeaderImgContainer }, imageBelowTitle: { container: I.imageBelowTitleContainer, headerImgContainer: I.imageBelowTitleHeaderImgContainer } },
                    O = { normal: {}, large: { container: I.largeContainer, title: I.largeTitle, summary: I.largeSummary, lastUpdated: I.largeLastUpdated, comments: I.largeComments } },
                    V = n.useCallback(() => {
                        v && v(), E ? $.push(`/i/news/a/${e.id}`) : $.push(`/i/news/article/${e.id}`);
                    }, [$, e, v, E]),
                    G = n.useCallback(() => {
                        (0, g._$)(B, { articleId: e.id });
                    }, [e, B]),
                    W = q[x],
                    X = O[H],
                    Y = e.header_img_url || "",
                    j = !f && Y,
                    J = n.createElement(a.Z, { style: [I.infoContainer, M ? I.compactInfoContainer : void 0, F] }, n.createElement(S.Z, { numberOfLines: R, text: e.title, textStyle: [X.title, z] }), "imageBelowTitle" === x && j && n.createElement(k, { onClick: V, style: [W.headerImgContainer, s], url: Y }), n.createElement(_.Z, { isLive: !!e.live_article, textStyle: X.lastUpdated, timestamp: e.last_updated_at }), !!e.summary && !L && n.createElement(p.Z, { numberOfLines: N, sources: [], style: [I.summary, X.summary], text: e.summary }), !C && n.createElement(a.Z, { style: [I.reactionsContainer, D ? I.rowReactionsContainer : void 0, K] }, e.sentiment && A && n.createElement(w.Z, { articleId: e.id, sentiment: e.sentiment, showPercentages: !0, style: b }), n.createElement(h.Z, { disableClick: !0, numPosts: Number(e.total_trend_posts), postIds: Q, style: [X.comments, l], textStyle: I.commentsText, variant: "outline" })));
                return n.createElement(r.Z, { onClick: V, style: [I.interactiveContainer, t], withoutInteractiveStyles: !0 }, ({ isHovered: e }) => n.createElement(a.Z, { style: [I.container, W.container, X.container, e ? I.hoveredContainer : void 0, e && T ? { backgroundColor: T } : void 0, Z] }, n.createElement(o.D, { id: "news_article_card", onFullyVisible: G, position: "top", testID: "news_article_card" }), J, j && "imageBelowTitle" !== x && n.createElement(k, { hideDefault: y, hovered: e, onClick: V, style: [W.headerImgContainer, s], url: Y })));
            }
            const I = s.default.create((e) => ({ interactiveContainer: { display: "flex", width: "100%" }, container: { flex: 1, display: "flex", width: "100%", gap: e.spaces.space16, backgroundColor: "transparent", borderRadius: e.borderRadii.large, transition: "all 0.2s ease", padding: e.spaces.space12 }, hoveredContainer: { backgroundColor: "light" === e.paletteName ? e.colors.gray0 : "transparent", cursor: "pointer" }, largeContainer: { gap: e.spaces.space36 }, fullContainer: { flexDirection: "row" }, imageLeftContainer: { flexDirection: "row-reverse" }, imageTopContainer: { flexDirection: "column-reverse" }, imageBelowTitleContainer: { flexDirection: "column" }, fullHeaderImgContainer: { flex: 1, width: "100%", height: "100%", minHeight: 350 }, imageLeftHeaderImgContainer: { flex: 1, width: "100%", height: "100%" }, imageTopHeaderImgContainer: { flex: 1, width: "100%", minHeight: 200 }, imageBelowTitleHeaderImgContainer: { flex: 1, width: "100%", height: "100%", minHeight: 350 }, infoContainer: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, compactInfoContainer: { padding: e.spaces.space8 }, summary: { color: e.colors.gray900 }, largeSummary: {}, headerImgContainer: { flex: 1 }, headerImgInteractiveContainer: { width: "100%", flex: 1 }, reactionsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, rowReactionsContainer: { flexDirection: "row" }, largeTitle: { fontSize: e.fontSizes.title1, lineHeight: 40 }, largeLastUpdated: { fontSize: e.fontSizes.subtext1 }, largeComments: { fontSize: e.fontSizes.subtext2 }, commentsText: { color: e.colors.gray900 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ExploreNews.48f214ca.js.map

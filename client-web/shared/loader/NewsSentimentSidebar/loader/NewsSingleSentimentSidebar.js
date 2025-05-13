"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.NewsSentimentSidebar~loader.NewsSingleSentimentSidebar"],
    {
        254274: (e, t, n) => {
            n.r(t), n.d(t, { BetaText: () => h, HeaderText: () => g, default: () => k });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(107267),
                s = n(731708),
                r = n(392237),
                o = n(674132),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                p = n(858496),
                y = n(399398);
            const g = c().af781666,
                h = c().ad35153e,
                f = 1,
                b = 2;
            function k() {
                const e = (0, u.Z)(),
                    t = (0, i.useHistory)(),
                    n = (0, m.Z)({ limit: 3 }),
                    r = a.useCallback(() => {
                        e.scribe({ element: "news_sentiment_sidebar", action: "impression" });
                    }, [e]),
                    o = a.useMemo(() => n.filter((e) => e.sentiment).slice(0, b), [n]);
                return o.length < f
                    ? null
                    : a.createElement(
                          y.g,
                          null,
                          a.createElement(d.D, { id: "news_sentiment_sidebar", onFullyVisible: r, position: "top", testID: "news_sentiment_sidebar" }),
                          a.createElement(
                              l.Z,
                              { style: _.container },
                              a.createElement(l.Z, { style: _.headerContainer }, a.createElement(s.ZP, { style: _.headerText, weight: "heavy" }, g), a.createElement(l.Z, { style: _.betaLabel }, a.createElement(s.ZP, { style: _.betaLabelText, weight: "bold" }, h))),
                              a.createElement(
                                  l.Z,
                                  { style: _.sentimentsContainer },
                                  o.map(
                                      (n) =>
                                          n.sentiment &&
                                          a.createElement(p.Z, {
                                              articleId: n.id,
                                              containerStyle: _.sentiment,
                                              hoveredContainerStyle: _.hoveredSentiment,
                                              key: `${n.id}-sentiment-sidebar`,
                                              onClick: () => {
                                                  e.scribe({ element: "news_sentiment_sidebar_article", action: "click", data: { event_info: n.id } }), t.push(`/i/news/a/${n.id}`);
                                              },
                                              sentiment: n.sentiment,
                                              showPercentages: !0,
                                          }),
                                  ),
                              ),
                          ),
                      );
            }
            const _ = r.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentimentsContainer: { display: "flex", flexDirection: "column" }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, hoveredSentiment: { backgroundColor: e.colors.gray0 } }));
        },
        507504: (e, t, n) => {
            n.d(t, { Z: () => S });
            n(136728);
            var a,
                l,
                i,
                s,
                r,
                o,
                c,
                d,
                u,
                m,
                p,
                y,
                g,
                h,
                f,
                b,
                k,
                _,
                w = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "limit" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useHomeNewsArticlesQuery",
                        selections: [
                            {
                                alias: "deepsearchArticlesHomePageResult",
                                args: (l = [
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
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (r = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (g = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [d, (y = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
                                                                    (h = {
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
                                                                    (f = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: r, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(b = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: r, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (k = {
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
                                                                    { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }, y], storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, s, o, c, d, u, m, p, g, h, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [_, b], storageKey: null }], storageKey: null }], storageKey: null }, k, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            w.hash = "3801ff63426a8e5a7f7864683169d9be";
            const C = w;
            n(585488);
            var x = n(712696),
                v = n.n(x);
            const E = C;
            const S = function ({ limit: e }) {
                const t = v()(E, { limit: e }).deepsearchArticlesHomePageResult || [],
                    n = [];
                return (
                    t.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && n.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    n
                );
            };
        },
        695356: (e, t, n) => {
            function a(e, t) {
                c(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                c(e)({ element: "news-article-card", action: "impression", data: { impression_id: t.articleId } });
            }
            function i(e, t) {
                c(e)({ element: "news-article-sentiment", action: "impression", data: { impression_id: t.articleId } });
            }
            function s(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function r(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function o(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => s, Ib: () => a, U8: () => r, XB: () => i, _$: () => l, xi: () => o });
            const c = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        858496: (e, t, n) => {
            n.d(t, { Z: () => A });
            var a = n(202784),
                l = n(325686),
                i = n(731708),
                s = n(154003),
                r = n(392237),
                o = n(757483),
                c = n(125363),
                d = n(390387),
                u = n(530732),
                m = n(306677),
                p = n(725405),
                y = n(695356);
            n(136728);
            function g({ chartData: e, typeMetadata: t }) {
                const n = a.useMemo(() => {
                        if (!e.length) return [];
                        const n = e[e.length - 1],
                            a = [];
                        return (
                            Object.keys(t).forEach((e) => {
                                const l = `${t[e].idx}-value`,
                                    i = `${t[e].idx}-num-posts`;
                                void 0 !== n[l] && a.push({ timestamp: Number(n.timestamp), type: e, value: Number(n[l]), color: t[e].color, numPosts: Number(n[i]) });
                            }),
                            a
                        );
                    }, [e, t]),
                    l = {},
                    i = [...n].sort((e, t) => t.value - e.value),
                    s = [r.default.theme.colors.blue700, r.default.theme.colors.blue500, r.default.theme.colors.blue300];
                i.forEach((e, t) => {
                    l[e.value] = s[t];
                });
                const o = n.reduce((e, t) => e + t.numPosts, 0);
                return { sentimentScores: n, totalNumPosts: o };
            }
            const h = r.default.theme.spaces.space8,
                f = 15;
            function b({ articleId: e, chartData: t, containerStyle: n, hoveredStyle: s, onClick: r, question: o, size: c = "large", style: d, typeMetadata: b }) {
                const _ = (0, p.Z)(),
                    { sentimentScores: w, totalNumPosts: C } = g({ chartData: t, typeMetadata: b }),
                    x = a.useCallback(() => {
                        (0, y.XB)(_, { articleId: e });
                    }, [e, _]);
                return a.createElement(u.Z, { onClick: r, style: [k.outerContainer, d], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(m.D, { id: "news_article_sentiment", onFullyVisible: x, position: "top", testID: "news_article_sentiment" }),
                        a.createElement(
                            l.Z,
                            { style: [k.container, e && r ? k.hoveredContainer : void 0, n, e && r && s] },
                            a.createElement(l.Z, { style: k.headerContainer }, a.createElement(i.ZP, { style: k.question }, o), a.createElement(i.ZP, { style: k.totalPosts, weight: "normal" }, `${C} posts`)),
                            a.createElement(
                                l.Z,
                                { style: k.barContainer },
                                a.createElement(l.Z, { style: k.baseBar }),
                                a.createElement(
                                    l.Z,
                                    { style: k.scoreBarsContainer },
                                    w.map((e, t) => {
                                        const n = t === w.length - 1;
                                        return a.createElement(l.Z, { key: `sentiment-bar-score-${e.type}`, style: [k.scoreBar, { flex: n ? 1 : void 0, width: n ? void 0 : `${e.value}%`, borderTopEndRadius: n ? h : 0, borderBottomEndRadius: n ? h : 0 }] }, a.createElement(l.Z, { style: [k.scoreBarBackground, { backgroundColor: e.color }] }), e.value > f && a.createElement(i.ZP, { numberOfLines: 1, style: k.scoreBarText }, `${e.value}%`));
                                    }),
                                ),
                            ),
                            a.createElement(
                                l.Z,
                                { style: k.legendContainer },
                                w.map((e) => a.createElement(l.Z, { style: k.legendItem }, a.createElement(i.ZP, { style: k.legendItemType }, e.type), a.createElement(l.Z, { style: [k.legendItemColor, { backgroundColor: e.color }] }))),
                            ),
                        ),
                    ),
                );
            }
            const k = r.default.create((e) => ({ outerContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space12, padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, transition: "background-color 0.2s ease" }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4 }, question: {}, totalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, barContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, baseBar: { backgroundColor: e.colors.gray100, width: e.spaces.space2, height: 45 }, scoreBarsContainer: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, scoreBar: { height: 35, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }, scoreBarBackground: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { width: "0%" }, "100%": { width: "100%" } }], animationFillMode: "both" }, scoreBarText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16 }, legendItem: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, legendItemType: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, legendItemColor: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.small } }));
            var _ = n(807896),
                w = n(18205),
                C = n(632908),
                x = n(755484),
                v = n(725556),
                E = n(103131),
                S = n(735081),
                Z = n(663004),
                F = n(815045),
                T = n(194504),
                K = n(187669),
                D = n(949626);
            function I(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function L({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        s = I(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        r = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        l.Z,
                        { style: P.tooltip },
                        a.createElement(i.ZP, { style: P.tooltipDate }, s),
                        a.createElement(
                            l.Z,
                            { style: P.percentages },
                            r.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(l.Z, { key: e.label, style: P.tooltipType }, a.createElement(l.Z, { style: { ...P.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(i.ZP, { style: P.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(l.Z, null), a.createElement(i.ZP, { style: P.tooltipValue }, t), a.createElement(i.ZP, { style: P.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const P = r.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            function z({ color: e, cx: t, cy: n }) {
                const i = 16;
                return a.createElement("g", null, a.createElement("foreignObject", { height: i, width: i, x: t - 8, y: n - 8 }, a.createElement(l.Z, { style: [N.dotContainer, { width: i, height: i }] }, a.createElement(l.Z, { style: [N.dot, { backgroundColor: e, width: 8, height: 8 }] }), a.createElement(l.Z, { style: N.pulseContainer }, a.createElement(l.Z, { style: [N.pulse, { backgroundColor: o.Z.hexToCss(e, 0.5) }] })))));
            }
            const N = r.default.create((e) => ({ dotContainer: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, dot: { borderRadius: e.borderRadii.infinite }, pulseContainer: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, pulse: { borderRadius: e.borderRadii.infinite, animationDuration: "1s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationFillMode: "forwards", animationDelay: "0s", width: "100%", height: "100%", animationKeyframes: [{ "0%": { transform: "scale(0)", opacity: 1 } }, { "95%": { transform: "scale(1)", opacity: 1 } }, { "100%": { transform: "scale(1)", opacity: 0 } }] } })),
                $ = "news-sentiment-recharts";
            function R({ chartData: e, isBlurred: t, question: n, typeMetadata: s }) {
                const c = (0, p.Z)(),
                    { sentimentScores: d } = g({ chartData: e, typeMetadata: s }),
                    [m, y] = a.useState({}),
                    h = `line-chart-${Object.keys(m).join("-")}`,
                    f = t ? 100 : 200;
                (0, K.q)(() => {
                    if (document.getElementById($)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", $), (e.textContent = `\n      .${$} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${$} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById($);
                            e && e.remove();
                        }
                    );
                });
                const b = a.useCallback(
                        (e) => {
                            const t = { ...m };
                            m[e] ? delete t[e] : (t[e] = !0), c.scribe({ element: "news_sentiment_line_chart_type", action: "click", data: { event_info: JSON.stringify({ question: n, type: e }) } }), y(t);
                        },
                        [m, c, n],
                    ),
                    k = a.useCallback((e) => I(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    P = Object.keys(m);
                return a.createElement(
                    l.Z,
                    { style: [B.container, t ? B.blur : void 0] },
                    a.createElement(
                        T.Z,
                        { buttonsContainerStyle: B.typesContent, style: B.types },
                        Object.keys(s).map((e) => {
                            const t = s[e];
                            return a.createElement(u.Z, { key: `${e}-toggle`, onClick: () => b(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(l.Z, { style: [B.typeContainer, { backgroundColor: o.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: o.Z.hexToCss(t.color, 0.3) } : void 0, P.length > 0 && !P.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(i.ZP, { style: B.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        l.Z,
                        { style: B.lineChart },
                        a.createElement(
                            D.Z,
                            { className: $ },
                            a.createElement(
                                w.h,
                                { height: f },
                                a.createElement(
                                    C.w,
                                    { data: e, height: f, key: h },
                                    a.createElement(x.q, { fillOpacity: 0.6, horizontal: !0, stroke: r.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(v.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: B.tick, tickFormatter: k, tickLine: !1, type: "number" }),
                                    a.createElement(E.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: B.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(S.u, { content: a.createElement(L, null), cursor: { stroke: r.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(s).map((e) => (m[e] || 0 === P.length ? a.createElement(Z.x, { activeDot: !0, connectNulls: !0, dataKey: `${s[e].idx}-value`, dot: !1, key: `line-chart-${e}`, stroke: s[e].color, strokeWidth: 2.5, type: "monotone" }) : null)),
                                    d.map((e) => (m[e.type] || 0 === P.length ? a.createElement(F.q, { alwaysShow: !0, isFront: !0, key: `sentiment-score-${e.type}`, shape: (t) => a.createElement(z, (0, _.Z)({}, t, { color: e.color })), x: e.timestamp, y: e.value }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const B = r.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                H = [r.default.theme.colors.blue300, r.default.theme.colors.yellow300, r.default.theme.colors.orange300, r.default.theme.colors.green300, r.default.theme.colors.magenta300, r.default.theme.colors.plum300, r.default.theme.colors.red300, r.default.theme.colors.purple300, r.default.theme.colors.teal300];
            const q = "What do people think?";
            function A({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: r, sentiment: o, showPercentages: u, size: m, style: p }) {
                const y = (0, c.v9)(d.Qb),
                    { chartData: g, typeMetadata: h } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: H[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        l = a.toString();
                                    t[l] || (t[l] = { timestamp: a }), (t[l][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[l][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[l][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[l][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[l][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: o });
                return g.length ? (u ? a.createElement(b, { articleId: e, chartData: g, containerStyle: t, hoveredStyle: n, onClick: r, question: o.question, size: m, style: p, typeMetadata: h }) : a.createElement(l.Z, { style: [M.container, p] }, a.createElement(l.Z, { style: M.headerContainer }, a.createElement(l.Z, { style: M.questionContainer }, a.createElement(i.ZP, { style: M.title, weight: "bold" }, q), a.createElement(i.ZP, { style: M.question }, o.question))), a.createElement(l.Z, { style: M.visibilityContainer }, a.createElement(R, { chartData: g, isBlurred: !y, question: o.question, typeMetadata: h }), !y && a.createElement(l.Z, { style: M.loggedOutContainer }, a.createElement(s.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))))) : null;
            }
            const M = r.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: o.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.NewsSentimentSidebar~loader.NewsSingleSentimentSidebar.8c70340a.js.map

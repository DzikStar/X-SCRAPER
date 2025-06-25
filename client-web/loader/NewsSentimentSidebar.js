"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewsSentimentSidebar"],
    {
        254274: (e, t, n) => {
            n.r(t), n.d(t, { BetaText: () => g, HeaderText: () => y, default: () => b });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(107267),
                s = n(731708),
                r = n(392237),
                o = n(111677),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                p = n(858496);
            const y = c().af781666,
                g = c().ad35153e,
                h = 1,
                f = 2;
            function b() {
                const e = (0, u.Z)(),
                    t = (0, i.useHistory)(),
                    n = (0, m.Z)({ limit: 3 }),
                    r = a.useCallback(() => {
                        e.scribe({ element: "news_sentiment_sidebar", action: "impression" });
                    }, [e]),
                    o = a.useMemo(() => n.filter((e) => e.sentiment).slice(0, f), [n]);
                return o.length < h
                    ? null
                    : a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(d.D, { id: "news_sentiment_sidebar", onFullyVisible: r, position: "top", testID: "news_sentiment_sidebar" }),
                          a.createElement(
                              l.Z,
                              { style: k.container },
                              a.createElement(l.Z, { style: k.headerContainer }, a.createElement(s.ZP, { style: k.headerText, weight: "heavy" }, y), a.createElement(l.Z, { style: k.betaLabel }, a.createElement(s.ZP, { style: k.betaLabelText, weight: "bold" }, g))),
                              a.createElement(
                                  l.Z,
                                  { style: k.sentimentsContainer },
                                  o.map(
                                      (n) =>
                                          n.sentiment &&
                                          a.createElement(p.Z, {
                                              articleId: n.id,
                                              containerStyle: k.sentiment,
                                              hoveredContainerStyle: k.hoveredSentiment,
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
            const k = r.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentimentsContainer: { display: "flex", flexDirection: "column" }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, hoveredSentiment: { backgroundColor: e.colors.gray0 } }));
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
                w,
                _ = {
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(w = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, s, o, c, d, u, m, p, g, h, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [w, b], storageKey: null }], storageKey: null }], storageKey: null }, k, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            _.hash = "3801ff63426a8e5a7f7864683169d9be";
            const x = _;
            n(585488);
            var C = n(712696),
                v = n.n(C);
            const E = x;
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
            n.d(t, { Z: () => Q });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(107267),
                s = n(731708),
                r = n(154003),
                o = n(392237),
                c = n(757483),
                d = n(111677),
                u = n.n(d),
                m = n(323265),
                p = n(725405),
                y = n(125363),
                g = n(390387),
                h = n(530732),
                f = n(306677),
                b = n(695356);
            function k({ chartData: e, typeMetadata: t }) {
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
                    s = [o.default.theme.colors.blue700, o.default.theme.colors.blue500, o.default.theme.colors.blue300];
                i.forEach((e, t) => {
                    l[e.value] = s[t];
                });
                const r = n.reduce((e, t) => e + t.numPosts, 0);
                return { sentimentScores: n, totalNumPosts: r };
            }
            const w = o.default.theme.spaces.space8,
                _ = 15;
            function x({ articleId: e, chartData: t, containerStyle: n, hoveredStyle: i, onClick: r, question: o, size: c = "large", style: d, typeMetadata: u }) {
                const m = (0, p.Z)(),
                    { sentimentScores: y, totalNumPosts: g } = k({ chartData: t, typeMetadata: u }),
                    x = a.useCallback(() => {
                        (0, b.XB)(m, { articleId: e });
                    }, [e, m]);
                return a.createElement(h.Z, { onClick: r, style: [C.outerContainer, d], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                    a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(f.D, { id: "news_article_sentiment", onFullyVisible: x, position: "top", testID: "news_article_sentiment" }),
                        a.createElement(
                            l.Z,
                            { style: [C.container, e && r ? C.hoveredContainer : void 0, n, e && r && i] },
                            a.createElement(l.Z, { style: C.headerContainer }, a.createElement(s.ZP, { style: C.question }, o), a.createElement(s.ZP, { style: C.totalPosts, weight: "normal" }, `${g} posts`)),
                            a.createElement(
                                l.Z,
                                { style: C.barContainer },
                                a.createElement(l.Z, { style: C.baseBar }),
                                a.createElement(
                                    l.Z,
                                    { style: C.scoreBarsContainer },
                                    y.map((e, t) => {
                                        const n = t === y.length - 1;
                                        return a.createElement(l.Z, { key: `sentiment-bar-score-${e.type}`, style: [C.scoreBar, { flex: n ? 1 : void 0, width: n ? void 0 : `${e.value}%`, borderTopEndRadius: n ? w : 0, borderBottomEndRadius: n ? w : 0 }] }, a.createElement(l.Z, { style: [C.scoreBarBackground, { backgroundColor: e.color }] }), e.value > _ && a.createElement(s.ZP, { numberOfLines: 1, style: C.scoreBarText }, `${e.value}%`));
                                    }),
                                ),
                            ),
                            a.createElement(
                                l.Z,
                                { style: C.legendContainer },
                                y.map((e) => a.createElement(l.Z, { style: C.legendItem }, a.createElement(s.ZP, { style: C.legendItemType }, e.type), a.createElement(l.Z, { style: [C.legendItemColor, { backgroundColor: e.color }] }))),
                            ),
                        ),
                    ),
                );
            }
            const C = o.default.create((e) => ({ outerContainer: { flex: 1 }, container: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space12, padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, transition: "background-color 0.2s ease" }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4 }, question: {}, totalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, barContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }, baseBar: { backgroundColor: e.colors.gray100, width: e.spaces.space2, height: 45 }, scoreBarsContainer: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, scoreBar: { height: 35, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }, scoreBarBackground: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { width: "0%" }, "100%": { width: "100%" } }], animationFillMode: "both" }, scoreBarText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, legendContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space16 }, legendItem: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, legendItemType: { fontSize: e.fontSizes.subtext1, color: e.colors.gray1000 }, legendItemColor: { width: e.spaces.space12, height: e.spaces.space12, borderRadius: e.borderRadii.small } }));
            var v = n(807896),
                E = n(18205),
                S = n(632908),
                Z = n(755484),
                F = n(725556),
                T = n(103131),
                K = n(735081),
                D = n(663004),
                I = n(815045),
                L = n(194504),
                P = n(187669),
                z = n(949626);
            function $(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function N({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        i = $(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        r = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        l.Z,
                        { style: R.tooltip },
                        a.createElement(s.ZP, { style: R.tooltipDate }, i),
                        a.createElement(
                            l.Z,
                            { style: R.percentages },
                            r.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(l.Z, { key: e.label, style: R.tooltipType }, a.createElement(l.Z, { style: { ...R.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(s.ZP, { style: R.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(l.Z, null), a.createElement(s.ZP, { style: R.tooltipValue }, t), a.createElement(s.ZP, { style: R.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const R = o.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            function B({ color: e, cx: t, cy: n }) {
                const i = 16;
                return a.createElement("g", null, a.createElement("foreignObject", { height: i, width: i, x: t - 8, y: n - 8 }, a.createElement(l.Z, { style: [H.dotContainer, { width: i, height: i }] }, a.createElement(l.Z, { style: [H.dot, { backgroundColor: e, width: 8, height: 8 }] }), a.createElement(l.Z, { style: H.pulseContainer }, a.createElement(l.Z, { style: [H.pulse, { backgroundColor: c.Z.hexToCss(e, 0.5) }] })))));
            }
            const H = o.default.create((e) => ({ dotContainer: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, dot: { borderRadius: e.borderRadii.infinite }, pulseContainer: { position: "absolute", top: 0, start: 0, end: 0, bottom: 0, borderRadius: e.borderRadii.infinite, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }, pulse: { borderRadius: e.borderRadii.infinite, animationDuration: "1s", animationTimingFunction: "linear", animationIterationCount: "infinite", animationFillMode: "forwards", animationDelay: "0s", width: "100%", height: "100%", animationKeyframes: [{ "0%": { transform: "scale(0)", opacity: 1 } }, { "95%": { transform: "scale(1)", opacity: 1 } }, { "100%": { transform: "scale(1)", opacity: 0 } }] } })),
                q = "news-sentiment-recharts";
            function A({ chartData: e, isBlurred: t, question: n, typeMetadata: i }) {
                const r = (0, p.Z)(),
                    { sentimentScores: d } = k({ chartData: e, typeMetadata: i }),
                    [u, m] = a.useState({}),
                    y = `line-chart-${Object.keys(u).join("-")}`,
                    g = t ? 100 : 200;
                (0, P.q)(() => {
                    if (document.getElementById(q)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", q), (e.textContent = `\n      .${q} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${q} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById(q);
                            e && e.remove();
                        }
                    );
                });
                const f = a.useCallback(
                        (e) => {
                            const t = { ...u };
                            u[e] ? delete t[e] : (t[e] = !0), r.scribe({ element: "news_sentiment_line_chart_type", action: "click", data: { event_info: JSON.stringify({ question: n, type: e }) } }), m(t);
                        },
                        [u, r, n],
                    ),
                    b = a.useCallback((e) => $(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    w = Object.keys(u);
                return a.createElement(
                    l.Z,
                    { style: [M.container, t ? M.blur : void 0] },
                    a.createElement(
                        L.Z,
                        { buttonsContainerStyle: M.typesContent, style: M.types },
                        Object.keys(i).map((e) => {
                            const t = i[e];
                            return a.createElement(h.Z, { key: `${e}-toggle`, onClick: () => f(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(l.Z, { style: [M.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, w.length > 0 && !w.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(s.ZP, { style: M.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        l.Z,
                        { style: M.lineChart },
                        a.createElement(
                            z.Z,
                            { className: q },
                            a.createElement(
                                E.h,
                                { height: g },
                                a.createElement(
                                    S.w,
                                    { data: e, height: g, key: y },
                                    a.createElement(Z.q, { fillOpacity: 0.6, horizontal: !0, stroke: o.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(F.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: M.tick, tickFormatter: b, tickLine: !1, type: "number" }),
                                    a.createElement(T.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: M.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(K.u, { content: a.createElement(N, null), cursor: { stroke: o.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(i).map((e) => (u[e] || 0 === w.length ? a.createElement(D.x, { activeDot: !0, connectNulls: !0, dataKey: `${i[e].idx}-value`, dot: !1, key: `line-chart-${e}`, stroke: i[e].color, strokeWidth: 2.5, type: "monotone" }) : null)),
                                    d.map((e) => (u[e.type] || 0 === w.length ? a.createElement(I.q, { alwaysShow: !0, isFront: !0, key: `sentiment-score-${e.type}`, shape: (t) => a.createElement(B, (0, v.Z)({}, t, { color: e.color })), x: e.timestamp, y: e.value }) : null)),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const M = o.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                O = [o.default.theme.colors.blue300, o.default.theme.colors.yellow300, o.default.theme.colors.orange300, o.default.theme.colors.green300, o.default.theme.colors.magenta300, o.default.theme.colors.plum300, o.default.theme.colors.red300, o.default.theme.colors.purple300, o.default.theme.colors.teal300];
            const j = u().af781666,
                V = u().a1f414ee;
            function Q({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: o, sentiment: c, showPercentages: d, size: u, style: h }) {
                const f = (0, p.Z)(),
                    b = (0, i.useHistory)(),
                    k = (0, y.v9)(g.Qb),
                    { chartData: w, typeMetadata: _ } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: O[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        l = a.toString();
                                    t[l] || (t[l] = { timestamp: a }), (t[l][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[l][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[l][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[l][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[l][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: c }),
                    C = a.useCallback(() => {
                        const t = `https://x.com/i/news/article/${e}`;
                        m.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${t}`) : b.push({ pathname: "/compose/post", query: { text: t } }), f.scribe({ element: "share_news_article_sentiment", action: "click", data: { event_info: e } });
                    }, [f, e, b]);
                return w.length ? (d ? a.createElement(x, { articleId: e, chartData: w, containerStyle: t, hoveredStyle: n, onClick: o, question: c.question, size: u, style: h, typeMetadata: _ }) : a.createElement(l.Z, { style: [J.container, h] }, a.createElement(l.Z, { style: J.headerContainer }, a.createElement(l.Z, { style: J.questionContainer }, a.createElement(l.Z, { style: J.titleContainer }, a.createElement(s.ZP, { style: J.title, weight: "bold" }, j), a.createElement(r.ZP, { onClick: C, size: "small", type: "primaryFilled" }, V)), a.createElement(s.ZP, { style: J.question }, c.question))), a.createElement(l.Z, { style: J.visibilityContainer }, a.createElement(A, { chartData: w, isBlurred: !k, question: c.question, typeMetadata: _ }), !k && a.createElement(l.Z, { style: J.loggedOutContainer }, a.createElement(r.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))))) : null;
            }
            const J = o.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, titleContainer: { display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewsSentimentSidebar.015818da.js.map

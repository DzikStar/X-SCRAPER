"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryNewsSidebar", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
    {
        960334: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var a = n(202784),
                l = n(325686),
                i = n(731708),
                r = n(30183),
                s = n(392237),
                o = n(111677),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                g = (n(136728), n(107267)),
                p = n(530732),
                h = n(125363),
                y = n(836255),
                f = n(448301),
                k = n(695356),
                b = n(287627);
            function v({ article: e, onClick: t, style: n }) {
                const r = (0, u.Z)(),
                    s = (0, h.I0)(),
                    o = (0, g.useHistory)(),
                    c = a.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && t.push(e.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e]),
                    m = a.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        e.header_img_post_id && t.push(e.header_img_post_id.post_results.rest_id);
                        return t.push(...c.slice(0, 3)), t;
                    }, [e, c]);
                a.useEffect(() => {
                    s(y.Z.fetchMultipleIfNeeded(m));
                }, [s, m]);
                const v = a.useCallback(() => {
                        t && t(), o.push(`/i/news/article/${e.id}`);
                    }, [o, e, t]),
                    _ = a.useCallback(() => {
                        (0, k._$)(r, { articleId: e.id });
                    }, [e, r]);
                return a.createElement(p.Z, { onClick: v, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => a.createElement(l.Z, { style: [w.contentContainer, t && w.hoveredContentContainer, n] }, a.createElement(d.D, { id: "news_article_card", onFullyVisible: _, position: "top", testID: "news_article_card" }), a.createElement(i.ZP, { numberOfLines: 2, style: w.title, weight: "bold" }, e.title), a.createElement(l.Z, { style: w.infoContainer }, a.createElement(b.Z, { numPosts: Number(e.total_trend_posts), postIds: c.slice(0, 3), style: w.commentsPill, textStyle: w.commentsPillText, userAvatarShape: "circle", userAvatarSize: "medium" }), a.createElement(l.Z, { style: w.dot }), a.createElement(i.ZP, { style: w.timeAgo }, (0, f.pi)(new Date(Number(e.last_updated_at)))))));
            }
            const w = s.default.create((e) => ({ container: {}, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, backgroundColor: e.colors.navigationBackground, transition: "background-color 0.2s ease" }, hoveredContentContainer: { backgroundColor: "light" === e.paletteName ? e.colors.gray0 : e.colors.navigationBackground }, title: {}, infoContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, commentsPill: { border: "none", paddingHorizontal: 0, paddingVertical: 0, backgroundColor: "transparent" }, dot: { width: e.spaces.space2, height: e.spaces.space2, backgroundColor: e.colors.gray700, borderRadius: e.spaces.space2 }, commentsPillText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 }, timeAgo: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } }));
            var _ = n(399398);
            const C = c().j66b95a2,
                x = c().ad35153e,
                E = "/i/news",
                Z = c().d228a9a0;
            function S() {
                const e = (0, u.Z)(),
                    t = (0, m.Z)({ limit: 3 }),
                    n = a.useCallback(() => {
                        e.scribe({ element: "try_news_sidebar", action: "impression" });
                    }, [e]);
                return t.length
                    ? a.createElement(
                          _.g,
                          null,
                          a.createElement(d.D, { id: "try_news_sidebar", onFullyVisible: n, position: "top", testID: "try_news_sidebar" }),
                          a.createElement(
                              l.Z,
                              { style: z.container },
                              a.createElement(l.Z, { style: z.headerContainer }, a.createElement(i.ZP, { style: z.headerText, weight: "heavy" }, C), a.createElement(l.Z, { style: z.betaLabel }, a.createElement(i.ZP, { style: z.betaLabelText, weight: "bold" }, x))),
                              a.createElement(
                                  l.Z,
                                  { style: z.articlesContainer },
                                  t.map((t) =>
                                      a.createElement(v, {
                                          article: t,
                                          key: `${t.id}-try-news-sidebar`,
                                          onClick: () => {
                                              e.scribe({ element: "try_news_sidebar_article", action: "click", data: { event_info: t.id } });
                                          },
                                          style: z.articleCard,
                                      }),
                                  ),
                              ),
                              a.createElement(r.Z, { link: E, text: Z, withBottomRadius: !0, withDarkerInteractiveBackground: !0 }),
                          ),
                      )
                    : null;
            }
            const z = s.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, articlesContainer: { display: "flex", flexDirection: "column" }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, articleCard: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(154003),
                r = n(392237),
                s = n(97301),
                o = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: r, total: d }) {
                const m = t > 0 ? Math.ceil(d / t) : 1,
                    g = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < m; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [m, e]),
                    p = a.useCallback(() => {
                        e < m - 1 && n(e + 1);
                    }, [e, n, m]),
                    h = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    y = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(m - 1, n + c - 1);
                        a === m - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(g[e]);
                        return t;
                    }, [g, e, m]);
                return a.createElement(
                    l.Z,
                    { style: [u.container, r] },
                    a.createElement(i.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(s.default, { style: u.chevron }), onClick: h, size: "small", style: u.button }),
                    a.createElement(
                        l.Z,
                        { style: u.pageNumContainer },
                        y.map((e) => a.createElement(i.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: u.button }, e.text)),
                    ),
                    a.createElement(i.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= m - 1, icon: a.createElement(o.default, { style: u.chevron }), onClick: p, size: "small", style: u.button }),
                );
            }
            const u = r.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => p });
            var a = n(202784),
                l = n(325686),
                i = n(525271),
                r = n(392237),
                s = n(111677),
                o = n.n(s),
                c = n(400196),
                d = n(306677),
                u = n(725405),
                m = n(193285);
            const g = o().b58d2bd2,
                p = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: r, title: s, topBarStyle: o, withTransparentMask: c }) => {
                    const [d, u] = a.useState(0),
                        [p, f] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        k = t && n.length > t.numResultsPerPage,
                        b = a.useCallback(
                            (e) => {
                                if ((u(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        l = a + t.numResultsPerPage;
                                    f(n.slice(a, l));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        i.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: r, title: s || g, topBarStyle: o, withTransparentMask: c },
                        a.createElement(
                            l.Z,
                            { style: y.container },
                            k && a.createElement(m.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            p.map((e) => a.createElement(h, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                h = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, u.Z)(),
                        i = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(l.Z, { key: `post_${e}`, style: y.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: i, position: "bottom", testID: `post_${e}` }));
                },
                y = r.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        507504: (e, t, n) => {
            n.d(t, { Z: () => Z });
            n(136728);
            var a,
                l,
                i,
                r,
                s,
                o,
                c,
                d,
                u,
                m,
                g,
                p,
                h,
                y,
                f,
                k,
                b,
                v,
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
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (s = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [i, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (h = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [d, (p = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
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
                                                            (b = {
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(v = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, o, c, d, u, m, g, h, y, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [v, k], storageKey: null }], storageKey: null }], storageKey: null }, b, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            w.hash = "3801ff63426a8e5a7f7864683169d9be";
            const _ = w;
            n(585488);
            var C = n(712696),
                x = n.n(C);
            const E = _;
            const Z = function ({ limit: e }) {
                const t = x()(E, { limit: e }).deepsearchArticlesHomePageResult || [],
                    n = [];
                return (
                    t.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && n.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    n
                );
            };
        },
        448301: (e, t, n) => {
            function a(e, t) {
                const n = new Date(),
                    a = Math.floor((e.getTime() - n.getTime()) / 1e3),
                    l = Math.abs(a),
                    i = 86400,
                    r = 3600,
                    s = 60;
                let o;
                if (l >= i) {
                    const e = Math.floor(l / i);
                    o = `${e} day${1 === e ? "" : "s"}`;
                } else if (l >= r) {
                    const e = Math.floor(l / r);
                    o = `${e} hour${1 === e ? "" : "s"}`;
                } else if (l >= s) {
                    const e = Math.floor(l / s);
                    o = `${e} ${t ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(l);
                    o = `${e} ${t ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return a >= 0 ? `${o} later` : `${o} ago`;
            }
            function l(e) {
                if (isNaN(e)) return "0";
                const t = Math.abs(e);
                if (t >= 1e6) {
                    const e = t / 1e6;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}M`;
                }
                if (t >= 1e3) {
                    const e = t / 1e3;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}K`;
                }
                return e.toString();
            }
            function i(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            n.d(t, { ZW: () => i, pi: () => a, uf: () => l });
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
            function r(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function s(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function o(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => r, Ib: () => a, U8: () => s, XB: () => i, _$: () => l, xi: () => o });
            const c = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        287627: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                l = n(325686),
                i = n(731708),
                r = n(823161),
                s = n(392237),
                o = n(166852),
                c = n(125363),
                d = n(836255),
                u = n(520595),
                m = n(448301);
            const g = 100,
                p = 3;
            function h({ containerStyle: e, disableClick: t, numPosts: n, postIds: r, style: s, textStyle: c, userAvatarShape: d, userAvatarSize: h, variant: k }) {
                const [b, v] = a.useState(!1),
                    w = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[k || "outline"],
                    _ = a.useMemo(() => (0, o.Z)(r).slice(0, g), [r]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              l.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  l.Z,
                                  { style: [f.commentsContainer, w.commentsContainer, s] },
                                  _.length > 0 &&
                                      a.createElement(
                                          l.Z,
                                          { style: f.postAvatars },
                                          _.slice(0, p).map((e, t) => a.createElement(y, { key: e, postId: e, shape: d, size: h, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }] })),
                                      ),
                                  a.createElement(i.ZP, { style: [f.commentsText, c] }, `${(0, m.uf)(n)} comments`),
                              ),
                          ),
                          b && a.createElement(u.a, { onDrawerDismiss: () => v(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: _, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function y({ postId: e, shape: t, size: n, style: l }) {
                const i = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    s = (0, c.v9)(i);
                return s && s.user.profile_image_url_https ? a.createElement(r.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: [f.userAvatar, l], uri: s.user.profile_image_url_https }) : null;
            }
            const f = s.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spacesPx.space12 }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, userAvatar: { marginEnd: -e.spacesPx.space12 }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(202784),
                l = n(325686),
                i = n(111677),
                r = n.n(i),
                s = n(837020),
                o = n(461756),
                c = n(786998),
                d = n(154003),
                u = n(950822),
                m = n(743618),
                g = n(745153),
                p = n(292627),
                h = n(224162),
                y = n(392237);
            const f = r().af8fa2ae,
                k = a.createElement(s.default, null);
            class b extends a.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: n, key: a, metaKey: l } = e;
                            !(t || n || l) && "Escape" === a && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), o.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: n, children: i, style: r, subtitle: s, title: d, topBarStyle: y, withBackgroundBlur: f, withTopBar: k, withTransparentMask: b } = this.props,
                        { isVisible: _ } = this.state;
                    return a.createElement(h.ZP.Consumer, null, ({ direction: h }) => {
                        const C = "rtl" === h,
                            x = _ ? w.visibleDrawer : ("left" === t) === C ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            E = _ && !b ? w.maskWithBg : w.maskTransparent,
                            Z = _ ? w.animateOpen : w.animateClose,
                            S = o.Z.reducedMotionEnabled ? null : Z;
                        return a.createElement(p.Z.Modal, null, a.createElement(g.Z, null, a.createElement(m.Z, null, a.createElement(l.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, E, S, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: v, style: [w.root, f ? w.backgroundRootBlur : null, x, S, r], children: a.createElement(a.Fragment, null, k ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: y, subtitle: s, title: d }) : null, a.createElement(l.Z, { style: w.contentContainer }, i)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": f, icon: k, onPress: this._handleMaskClick, type: e });
                }
            }
            b.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const v = (e) => {
                    e.stopPropagation();
                },
                w = y.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...y.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                _ = b;
        },
        30183: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                l = n(731708),
                i = n(952428);
            const r = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: n, text: s, weight: o, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(i.Z, { link: t, onPress: n, style: [r.root, c && r.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(l.ZP, { align: e, color: "primary", weight: o }, s));
                };
        },
        388941: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        355586: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        416276: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        738398: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        194417: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        913315: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        856661: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        946474: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var a = n(202784),
                l = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryNewsSidebar.800378fa.js.map

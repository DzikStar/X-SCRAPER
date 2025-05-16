"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryNewsSidebar"],
    {
        960334: (e, t, n) => {
            n.r(t), n.d(t, { default: () => T });
            var a = n(202784),
                l = n(325686),
                s = n(731708),
                r = n(30183),
                i = n(392237),
                o = n(332920),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                p = (n(136728), n(107267)),
                g = n(530732),
                y = n(125363),
                h = n(836255),
                f = n(448301),
                k = n(669636),
                b = n(287627);
            function _({ article: e, onClick: t, style: n }) {
                const r = (0, u.Z)(),
                    i = (0, y.I0)(),
                    o = (0, p.useHistory)(),
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
                    i(h.Z.fetchMultipleIfNeeded(m));
                }, [i, m]);
                const _ = a.useCallback(() => {
                        t && t(), o.push(`/i/news/article/${e.id}`);
                    }, [o, e, t]),
                    C = a.useCallback(() => {
                        (0, k._$)(r, { articleId: e.id });
                    }, [e, r]);
                return a.createElement(g.Z, { onClick: _, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => a.createElement(l.Z, { style: [w.contentContainer, t && w.hoveredContentContainer, n] }, a.createElement(d.D, { id: "news_article_card", onFullyVisible: C, position: "top", testID: "news_article_card" }), a.createElement(s.ZP, { numberOfLines: 2, style: w.title, weight: "bold" }, e.title), a.createElement(l.Z, { style: w.infoContainer }, a.createElement(b.Z, { numPosts: Number(e.total_trend_posts), postIds: c.slice(0, 3), style: w.commentsPill, textStyle: w.commentsPillText, userAvatarShape: "circle", userAvatarSize: "medium" }), a.createElement(l.Z, { style: w.dot }), a.createElement(s.ZP, { style: w.timeAgo }, (0, f.pi)(new Date(Number(e.last_updated_at)))))));
            }
            const w = i.default.create((e) => ({ container: {}, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, backgroundColor: e.colors.navigationBackground, transition: "background-color 0.2s ease" }, hoveredContentContainer: { backgroundColor: "light" === e.paletteName ? e.colors.gray0 : e.colors.navigationBackground }, title: {}, infoContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, commentsPill: { border: "none", paddingHorizontal: 0, paddingVertical: 0, backgroundColor: "transparent" }, dot: { width: e.spaces.space2, height: e.spaces.space2, backgroundColor: e.colors.gray700, borderRadius: e.spaces.space2 }, commentsPillText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 }, timeAgo: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } }));
            var C = n(399398);
            const x = c().j66b95a2,
                S = c().ad35153e,
                E = "/i/news",
                v = c().d228a9a0;
            function T() {
                const e = (0, u.Z)(),
                    t = (0, m.Z)({ limit: 3 }),
                    n = a.useCallback(() => {
                        e.scribe({ element: "try_news_sidebar", action: "impression" });
                    }, [e]);
                return t.length
                    ? a.createElement(
                          C.g,
                          null,
                          a.createElement(d.D, { id: "try_news_sidebar", onFullyVisible: n, position: "top", testID: "try_news_sidebar" }),
                          a.createElement(
                              l.Z,
                              { style: F.container },
                              a.createElement(l.Z, { style: F.headerContainer }, a.createElement(s.ZP, { style: F.headerText, weight: "heavy" }, x), a.createElement(l.Z, { style: F.betaLabel }, a.createElement(s.ZP, { style: F.betaLabelText, weight: "bold" }, S))),
                              a.createElement(
                                  l.Z,
                                  { style: F.articlesContainer },
                                  t.map((t) =>
                                      a.createElement(_, {
                                          article: t,
                                          key: `${t.id}-try-news-sidebar`,
                                          onClick: () => {
                                              e.scribe({ element: "try_news_sidebar_article", action: "click", data: { event_info: t.id } });
                                          },
                                          style: F.articleCard,
                                      }),
                                  ),
                              ),
                              a.createElement(r.Z, { link: E, text: v, withBottomRadius: !0, withDarkerInteractiveBackground: !0 }),
                          ),
                      )
                    : null;
            }
            const F = i.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, articlesContainer: { display: "flex", flexDirection: "column" }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, articleCard: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                l = n(325686),
                s = n(154003),
                r = n(392237),
                i = n(97301),
                o = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: r, total: d }) {
                const m = t > 0 ? Math.ceil(d / t) : 1,
                    p = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < m; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [m, e]),
                    g = a.useCallback(() => {
                        e < m - 1 && n(e + 1);
                    }, [e, n, m]),
                    y = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    h = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(m - 1, n + c - 1);
                        a === m - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(p[e]);
                        return t;
                    }, [p, e, m]);
                return a.createElement(
                    l.Z,
                    { style: [u.container, r] },
                    a.createElement(s.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(i.default, { style: u.chevron }), onClick: y, size: "small", style: u.button }),
                    a.createElement(
                        l.Z,
                        { style: u.pageNumContainer },
                        h.map((e) => a.createElement(s.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: u.button }, e.text)),
                    ),
                    a.createElement(s.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= m - 1, icon: a.createElement(o.default, { style: u.chevron }), onClick: g, size: "small", style: u.button }),
                );
            }
            const u = r.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => g });
            var a = n(202784),
                l = n(325686),
                s = n(525271),
                r = n(392237),
                i = n(332920),
                o = n.n(i),
                c = n(400196),
                d = n(306677),
                u = n(725405),
                m = n(193285);
            const p = o().b58d2bd2,
                g = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: r, topBarStyle: i, withTransparentMask: o }) => {
                    const [c, d] = a.useState(0),
                        [u, g] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        f = t && n.length > t.numResultsPerPage,
                        k = a.useCallback(
                            (e) => {
                                if ((d(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        l = a + t.numResultsPerPage;
                                    g(n.slice(a, l));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        s.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: r, title: p, topBarStyle: i, withTransparentMask: o },
                        a.createElement(
                            l.Z,
                            { style: h.container },
                            f && a.createElement(m.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: k, total: n.length }),
                            u.map((e) => a.createElement(y, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                y = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, u.Z)(),
                        s = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(l.Z, { key: `post_${e}`, style: h.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: s, position: "bottom", testID: `post_${e}` }));
                },
                h = r.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        507504: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var a,
                l,
                s,
                r,
                i,
                o,
                c,
                d,
                u,
                m,
                p,
                g,
                y,
                h,
                f,
                k,
                b,
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
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (i = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (y = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [d, (g = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
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
                                                                    (f = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: i, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(k = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: i, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [s, r, o, c, d, u, m, p, y, h, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [_, k], storageKey: null }], storageKey: null }], storageKey: null }, b, s], type: "AiTrend", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            w.hash = "3801ff63426a8e5a7f7864683169d9be";
            const C = w;
            n(585488);
            var x = n(712696),
                S = n.n(x);
            const E = C;
            const v = function ({ limit: e }) {
                const t = S()(E, { limit: e }).deepsearchArticlesHomePageResult || [],
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
                    s = 86400,
                    r = 3600,
                    i = 60;
                let o;
                if (l >= s) {
                    const e = Math.floor(l / s);
                    o = `${e} day${1 === e ? "" : "s"}`;
                } else if (l >= r) {
                    const e = Math.floor(l / r);
                    o = `${e} hour${1 === e ? "" : "s"}`;
                } else if (l >= i) {
                    const e = Math.floor(l / i);
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
            function s(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            n.d(t, { ZW: () => s, pi: () => a, uf: () => l });
        },
        669636: (e, t, n) => {
            function a(e, t) {
                c(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                c(e)({ element: "news-article-card", action: "impression", data: { impression_id: t.articleId } });
            }
            function s(e, t) {
                c(e)({ element: "news-article-sentiment", action: "impression", data: { impression_id: t.articleId } });
            }
            function r(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function i(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function o(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => r, Ib: () => a, U8: () => i, XB: () => s, _$: () => l, xi: () => o });
            const c = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        287627: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                l = n(325686),
                s = n(392237),
                r = n(731708),
                i = n(823161),
                o = n(166852),
                c = n(125363),
                d = n(836255),
                u = n(520595),
                m = n(448301);
            const p = 100,
                g = 3;
            function y({ containerStyle: e, disableClick: t, numPosts: n, postIds: i, style: c, textStyle: d, userAvatarShape: y, userAvatarSize: k, variant: b }) {
                const [_, w] = a.useState(!1),
                    C = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[b || "outline"],
                    x = a.useMemo(() => (0, o.Z)(i).slice(0, p), [i]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              l.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  l.Z,
                                  { style: [f.commentsContainer, C.commentsContainer, c] },
                                  x.length > 0 &&
                                      a.createElement(
                                          l.Z,
                                          { style: f.postAvatars },
                                          x.slice(0, g).map((e, t) => a.createElement(h, { key: e, postId: e, shape: y, size: k, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }, 0 !== t ? { marginStart: -1 * s.default.theme.spacesPx.space12 } : {}] })),
                                      ),
                                  a.createElement(r.ZP, { style: [f.commentsText, d] }, `${(0, m.uf)(n)} comments`),
                              ),
                          ),
                          _ && a.createElement(u.a, { onDrawerDismiss: () => w(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: x, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function h({ postId: e, shape: t, size: n, style: l }) {
                const s = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    r = (0, c.v9)(s);
                return r && r.user.profile_image_url_https ? a.createElement(i.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: l, uri: r.user.profile_image_url_https }) : null;
            }
            const f = s.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center" }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                l = n(325686),
                s = n(332920),
                r = n.n(s),
                i = n(837020),
                o = n(461756),
                c = n(786998),
                d = n(154003),
                u = n(950822),
                m = n(743618),
                p = n(745153),
                g = n(292627),
                y = n(224162),
                h = n(392237);
            const f = r().af8fa2ae,
                k = a.createElement(i.default, null);
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
                    const { additionalControl: e, align: t, buttonType: n, children: s, style: r, subtitle: i, title: d, topBarStyle: h, withBackgroundBlur: f, withTopBar: k, withTransparentMask: b } = this.props,
                        { isVisible: C } = this.state;
                    return a.createElement(y.ZP.Consumer, null, ({ direction: y }) => {
                        const x = "rtl" === y,
                            S = C ? w.visibleDrawer : ("left" === t) === x ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            E = C && !b ? w.maskWithBg : w.maskTransparent,
                            v = C ? w.animateOpen : w.animateClose,
                            T = o.Z.reducedMotionEnabled ? null : v;
                        return a.createElement(g.Z.Modal, null, a.createElement(p.Z, null, a.createElement(m.Z, null, a.createElement(l.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, E, T, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: _, style: [w.root, f ? w.backgroundRootBlur : null, S, T, r], children: a.createElement(a.Fragment, null, k ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: h, subtitle: i, title: d }) : null, a.createElement(l.Z, { style: w.contentContainer }, s)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": f, icon: k, onPress: this._handleMaskClick, type: e });
                }
            }
            b.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const _ = (e) => {
                    e.stopPropagation();
                },
                w = h.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...h.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                C = b;
        },
        30183: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                l = n(731708),
                s = n(952428);
            const r = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                i = function ({ align: e, link: t, onPress: n, text: i, weight: o, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(s.Z, { link: t, onPress: n, style: [r.root, c && r.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(l.ZP, { align: e, color: "primary", weight: o }, i));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryNewsSidebar.e6f532ea.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TryNewsSidebar"],
    {
        960334: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var a = n(202784),
                l = n(325686),
                r = n(731708),
                s = n(30183),
                i = n(392237),
                o = n(111677),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                p = (n(136728), n(107267)),
                g = n(530732),
                y = n(125363),
                h = n(836255),
                f = n(448301),
                k = n(695356),
                b = n(287627);
            function _({ article: e, onClick: t, style: n }) {
                const s = (0, u.Z)(),
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
                        (0, k._$)(s, { articleId: e.id });
                    }, [e, s]);
                return a.createElement(g.Z, { onClick: _, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => a.createElement(l.Z, { style: [w.contentContainer, t && w.hoveredContentContainer, n] }, a.createElement(d.D, { id: "news_article_card", onFullyVisible: C, position: "top", testID: "news_article_card" }), a.createElement(r.ZP, { numberOfLines: 2, style: w.title, weight: "bold" }, e.title), a.createElement(l.Z, { style: w.infoContainer }, a.createElement(b.Z, { numPosts: Number(e.total_trend_posts), postIds: c.slice(0, 3), style: w.commentsPill, textStyle: w.commentsPillText, userAvatarShape: "circle", userAvatarSize: "medium" }), a.createElement(l.Z, { style: w.dot }), a.createElement(r.ZP, { style: w.timeAgo }, (0, f.pi)(new Date(Number(e.last_updated_at)))))));
            }
            const w = i.default.create((e) => ({ container: {}, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space4, backgroundColor: e.colors.navigationBackground, transition: "background-color 0.2s ease" }, hoveredContentContainer: { backgroundColor: "light" === e.paletteName ? e.colors.gray0 : e.colors.navigationBackground }, title: {}, infoContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, commentsPill: { border: "none", paddingHorizontal: 0, paddingVertical: 0, backgroundColor: "transparent" }, dot: { width: e.spaces.space2, height: e.spaces.space2, backgroundColor: e.colors.gray700, borderRadius: e.spaces.space2 }, commentsPillText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 }, timeAgo: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } }));
            var C = n(399398);
            const x = c().j66b95a2,
                E = c().ad35153e,
                S = "/i/news",
                v = c().d228a9a0;
            function Z() {
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
                              { style: T.container },
                              a.createElement(l.Z, { style: T.headerContainer }, a.createElement(r.ZP, { style: T.headerText, weight: "heavy" }, x), a.createElement(l.Z, { style: T.betaLabel }, a.createElement(r.ZP, { style: T.betaLabelText, weight: "bold" }, E))),
                              a.createElement(
                                  l.Z,
                                  { style: T.articlesContainer },
                                  t.map((t) =>
                                      a.createElement(_, {
                                          article: t,
                                          key: `${t.id}-try-news-sidebar`,
                                          onClick: () => {
                                              e.scribe({ element: "try_news_sidebar_article", action: "click", data: { event_info: t.id } });
                                          },
                                          style: T.articleCard,
                                      }),
                                  ),
                              ),
                              a.createElement(s.Z, { link: S, text: v, withBottomRadius: !0, withDarkerInteractiveBackground: !0 }),
                          ),
                      )
                    : null;
            }
            const T = i.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space8, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, articlesContainer: { display: "flex", flexDirection: "column" }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, articleCard: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => d });
            n(136728);
            var a = n(202784),
                l = n(325686),
                r = n(154003),
                s = n(392237),
                i = n(97301),
                o = n(58399);
            const c = 5;
            function d({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: s, total: d }) {
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
                    { style: [u.container, s] },
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(i.default, { style: u.chevron }), onClick: y, size: "small", style: u.button }),
                    a.createElement(
                        l.Z,
                        { style: u.pageNumContainer },
                        h.map((e) => a.createElement(r.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: u.button }, e.text)),
                    ),
                    a.createElement(r.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= m - 1, icon: a.createElement(o.default, { style: u.chevron }), onClick: g, size: "small", style: u.button }),
                );
            }
            const u = s.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => g });
            var a = n(202784),
                l = n(325686),
                r = n(525271),
                s = n(392237),
                i = n(111677),
                o = n.n(i),
                c = n(400196),
                d = n(306677),
                u = n(725405),
                m = n(193285);
            const p = o().b58d2bd2,
                g = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: s, title: i, topBarStyle: o, withTransparentMask: c }) => {
                    const [d, u] = a.useState(0),
                        [g, f] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
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
                        r.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: s, title: i || p, topBarStyle: o, withTransparentMask: c },
                        a.createElement(
                            l.Z,
                            { style: h.container },
                            k && a.createElement(m.Z, { currentPageIdx: d, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            g.map((e) => a.createElement(y, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                y = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, u.Z)(),
                        r = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(l.Z, { key: `post_${e}`, style: h.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(d.D, { id: `post_${e}`, onFullyVisible: r, position: "bottom", testID: `post_${e}` }));
                },
                h = s.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        507504: (e, t, n) => {
            n.d(t, { Z: () => v });
            n(136728);
            var a,
                l,
                r,
                s,
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
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (i = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [r, s, o, c, d, u, m, p, y, h, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [_, k], storageKey: null }], storageKey: null }], storageKey: null }, b, r], type: "AiTrend", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            w.hash = "3801ff63426a8e5a7f7864683169d9be";
            const C = w;
            n(585488);
            var x = n(712696),
                E = n.n(x);
            const S = C;
            const v = function ({ limit: e }) {
                const t = E()(S, { limit: e }).deepsearchArticlesHomePageResult || [],
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
                    r = 86400,
                    s = 3600,
                    i = 60;
                let o;
                if (l >= r) {
                    const e = Math.floor(l / r);
                    o = `${e} day${1 === e ? "" : "s"}`;
                } else if (l >= s) {
                    const e = Math.floor(l / s);
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
            function r(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            n.d(t, { ZW: () => r, pi: () => a, uf: () => l });
        },
        695356: (e, t, n) => {
            function a(e, t) {
                c(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                c(e)({ element: "news-article-card", action: "impression", data: { impression_id: t.articleId } });
            }
            function r(e, t) {
                c(e)({ element: "news-article-sentiment", action: "impression", data: { impression_id: t.articleId } });
            }
            function s(e, t) {
                c(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function i(e, t) {
                c(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function o(e, t) {
                c(e)({ element: "news-article-section", action: "impression", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => s, Ib: () => a, U8: () => i, XB: () => r, _$: () => l, xi: () => o });
            const c = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        287627: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                l = n(325686),
                r = n(731708),
                s = n(823161),
                i = n(392237),
                o = n(166852),
                c = n(125363),
                d = n(836255),
                u = n(520595),
                m = n(448301);
            const p = 100,
                g = 3;
            function y({ containerStyle: e, disableClick: t, numPosts: n, postIds: s, style: i, textStyle: c, userAvatarShape: d, userAvatarSize: y, variant: k }) {
                const [b, _] = a.useState(!1),
                    w = { filled: { commentsContainer: f.filledMetadataContainer }, outline: { commentsContainer: f.outlineMetadataContainer } }[k || "outline"],
                    C = a.useMemo(() => (0, o.Z)(s).slice(0, p), [s]);
                return n
                    ? a.createElement(
                          a.Fragment,
                          null,
                          a.createElement(
                              l.Z,
                              { style: [f.interactiveContainer, e] },
                              a.createElement(
                                  l.Z,
                                  { style: [f.commentsContainer, w.commentsContainer, i] },
                                  C.length > 0 &&
                                      a.createElement(
                                          l.Z,
                                          { style: f.postAvatars },
                                          C.slice(0, g).map((e, t) => a.createElement(h, { key: e, postId: e, shape: d, size: y, style: [f.postAvatar, { animationDelay: 0.1 * t + "s" }] })),
                                      ),
                                  a.createElement(r.ZP, { style: [f.commentsText, c] }, `${(0, m.uf)(n)} comments`),
                              ),
                          ),
                          b && a.createElement(u.a, { onDrawerDismiss: () => _(!1), paginationOptions: { numResultsPerPage: 15 }, postIds: C, style: f.drawer, topBarStyle: f.drawerTopBar, withTransparentMask: !0 }),
                      )
                    : null;
            }
            function h({ postId: e, shape: t, size: n, style: l }) {
                const r = a.useMemo(() => d.Z.createHydratorForTweet(e), [e]),
                    i = (0, c.v9)(r);
                return i && i.user.profile_image_url_https ? a.createElement(s.default, { backgroundColor: "transparent", borderColor: "transparent", borderWidth: "small", shape: t || "circle", size: n || "medium", style: [f.userAvatar, l], uri: i.user.profile_image_url_https }) : null;
            }
            const f = i.default.create((e) => ({ interactiveContainer: { height: "max-content", width: "max-content" }, commentsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.spaces.space32, paddingHorizontal: e.spaces.space8, borderStyle: "solid", borderWidth: 1, width: "max-content", height: e.spaces.space32, transition: "background-color 0.2s ease" }, outlineMetadataContainer: { backgroundColor: "transparent", borderColor: e.colors.gray100 }, filledMetadataContainer: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray100 }, postAvatars: { display: "flex", flexDirection: "row", alignItems: "center", marginEnd: e.spacesPx.space12 }, postAvatar: { animationDuration: "0.2s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, userAvatar: { marginEnd: -e.spacesPx.space12 }, drawerTopBar: { backgroundColor: e.colors.gray0 }, drawer: { backgroundColor: e.colors.gray0 }, commentsText: { fontSize: e.fontSizes.subtext3 } }));
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                l = n(325686),
                r = n(111677),
                s = n.n(r),
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
            const f = s().af8fa2ae,
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
                    const { additionalControl: e, align: t, buttonType: n, children: r, style: s, subtitle: i, title: d, topBarStyle: h, withBackgroundBlur: f, withTopBar: k, withTransparentMask: b } = this.props,
                        { isVisible: C } = this.state;
                    return a.createElement(y.ZP.Consumer, null, ({ direction: y }) => {
                        const x = "rtl" === y,
                            E = C ? w.visibleDrawer : ("left" === t) === x ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            S = C && !b ? w.maskWithBg : w.maskTransparent,
                            v = C ? w.animateOpen : w.animateClose,
                            Z = o.Z.reducedMotionEnabled ? null : v;
                        return a.createElement(g.Z.Modal, null, a.createElement(p.Z, null, a.createElement(m.Z, null, a.createElement(l.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, S, Z, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: _, style: [w.root, f ? w.backgroundRootBlur : null, E, Z, s], children: a.createElement(a.Fragment, null, k ? a.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: h, subtitle: i, title: d }) : null, a.createElement(l.Z, { style: w.contentContainer }, r)) })))));
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
        420412: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                l = n(325686),
                r = n(235902),
                s = n(885015),
                i = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: o } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(l.Z, { style: c.gapColumn }, a.createElement(l.Z, { style: [c.gap, d] })), a.createElement(l.Z, { style: c.gapText }, n), a.createElement(l.Z, { style: c.gapColumn }, a.createElement(l.Z, { style: [c.gap, d] }))) : a.createElement(l.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                l = n(202784),
                r = n(325686),
                s = n(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...s } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return l.createElement(r.Z, (0, a.Z)({ style: [t, o.root, n && o.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        30183: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                l = n(731708),
                r = n(952428);
            const s = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                i = function ({ align: e, link: t, onPress: n, text: i, weight: o, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(r.Z, { link: t, onPress: n, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(l.ZP, { align: e, color: "primary", weight: o }, i));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TryNewsSidebar.2bd726ca.js.map

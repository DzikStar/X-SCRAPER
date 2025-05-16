"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.News"],
    {
        305179: (e, t, a) => {
            a.d(t, { Z: () => S });
            var n = a(202784),
                i = a(325686),
                l = a(392237),
                r = a(545457),
                s = a(652904),
                o = a(293115),
                c = a(246728),
                m = (a(136728), a(107267)),
                d = a(154003),
                u = a(731708),
                p = a(332920),
                g = a.n(p),
                h = a(894966),
                y = a(837020),
                f = a(899667);
            const w = g().b08821f4,
                _ = g().fdc5d06c,
                b = g().ic61c5fc,
                v = "News",
                k = "beta";
            function C() {
                const e = (0, m.useHistory)(),
                    t = (0, m.useLocation)().pathname,
                    { isCompactLayout: a } = (0, c.Z)(),
                    [l, r] = n.useState(!1);
                n.useEffect(() => {
                    const e = () => {
                        r(window.scrollY > 300);
                    };
                    return (
                        window.addEventListener("scroll", e),
                        () => {
                            window.removeEventListener("scroll", e);
                        }
                    );
                }, []);
                const s = "/i/news" !== t;
                return n.createElement(
                    i.Z,
                    { style: x.container },
                    n.createElement(d.ZP, {
                        borderColor: "transparent",
                        hoverLabel: { label: s ? w : _ },
                        icon: s ? n.createElement(h.default, { style: [x.icon, a ? x.compactIcon : void 0] }) : n.createElement(y.default, { style: [x.icon, a ? x.compactIcon : void 0] }),
                        onClick: () => {
                            e.length > 1 ? e.goBack() : s ? e.push("/i/news") : e.push("/explore/tabs/news");
                        },
                    }),
                    n.createElement(i.Z, { style: x.header }, n.createElement(u.ZP, { style: x.headerText, weight: "bold" }, v), n.createElement(i.Z, { style: x.betaLabel }, n.createElement(u.ZP, { style: x.betaLabelText, weight: "medium" }, k))),
                    l
                        ? n.createElement(d.ZP, {
                              borderColor: "transparent",
                              hoverLabel: { label: b },
                              icon: n.createElement(f.default, { style: x.scrollToTopIcon }),
                              onClick: () => {
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                              },
                          })
                        : n.createElement(d.ZP, { borderColor: "transparent", disabled: !0, icon: n.createElement(f.default, { style: [x.scrollToTopIcon, { display: "none" }] }) }),
                );
            }
            const x = l.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.navigationBackground, position: "sticky", top: 0, zIndex: 50 }, icon: { width: e.spaces.space24, height: e.spaces.space24 }, compactIcon: { width: e.spaces.space20, height: e.spaces.space20 }, scrollToTopIcon: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, header: { display: "flex", flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.xLarge, padding: e.spaces.space8, backgroundColor: "transparent", transition: "all 0.2s ease", animationDuration: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-10px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }] }, headerText: { color: "inherit", fontSize: e.fontSizes.subtext1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 } }));
            function S({ children: e, scribeNamespace: t }) {
                (0, r.hB)(), (0, r.ph)();
                const { isCompactLayout: a } = (0, c.Z)();
                return n.createElement(o.nO, { namespace: { page: t } }, n.createElement(s.Z, null, n.createElement(i.Z, { style: T.root }, a ? n.createElement(i.Z, { style: T.compactLayout }, n.createElement(C, null), n.createElement(i.Z, { style: T.compactContent }, e)) : n.createElement(i.Z, { style: T.layout }, n.createElement(i.Z, { style: T.topNavBarContainer }, n.createElement(C, null), n.createElement(i.Z, { style: T.content }, e))))));
            }
            const T = l.default.create((e) => ({ root: { height: "100%", width: "100%", flex: 1, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, layout: { display: "flex", flexDirection: "row", flex: 1 }, compactLayout: { display: "flex", flexDirection: "column", flex: 1 }, topNavBarContainer: { display: "flex", flexDirection: "column", flex: 1, width: "100%", maxWidth: 1500, marginHorizontal: "auto" }, content: { overflow: "hidden", flex: 1, flexDirection: "column", alignItems: "center" }, compactContent: { overflow: "hidden", flex: 1, width: "100%", maxWidth: 600, marginHorizontal: "auto" } }));
        },
        507504: (e, t, a) => {
            a.d(t, { Z: () => T });
            a(136728);
            var n,
                i,
                l,
                r,
                s,
                o,
                c,
                m,
                d,
                u,
                p,
                g,
                h,
                y,
                f,
                w,
                _,
                b,
                v = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "limit" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useHomeNewsArticlesQuery",
                        selections: [
                            {
                                alias: "deepsearchArticlesHomePageResult",
                                args: (i = [
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
                                                                    (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (s = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [l, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (u = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (h = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [m, (g = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
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
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(w = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: s, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (_ = {
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
                    operation: { argumentDefinitions: n, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: i, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(b = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [l, r, o, c, m, d, u, p, h, y, f, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [b, w], storageKey: null }], storageKey: null }], storageKey: null }, _, l], type: "AiTrend", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            v.hash = "3801ff63426a8e5a7f7864683169d9be";
            const k = v;
            a(585488);
            var C = a(712696),
                x = a.n(C);
            const S = k;
            const T = function ({ limit: e }) {
                const t = x()(S, { limit: e }).deepsearchArticlesHomePageResult || [],
                    a = [];
                return (
                    t.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && a.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    a
                );
            };
        },
        797174: (e, t, a) => {
            a.r(t), a.d(t, { default: () => U });
            var n = a(202784),
                i = a(688715),
                l = a(529256),
                r = a(572067),
                s = a(736063),
                o = a(4452),
                c = (a(136728), a(325686)),
                m = a(392237),
                d = a(725405),
                u = a(563586),
                p = a(221972),
                g = a(507504),
                h = a(246728),
                y = a(669636),
                f = a(118368),
                w = a(555874),
                _ = a(858440);
            const b = 70;
            function v({ articles: e }) {
                const t = (0, d.Z)(),
                    { height: a } = (0, _.Z)(),
                    i = Math.max(550, 0.95 * (a - b)),
                    l = n.useMemo(() => [k.scroller, { height: a - b }], [a]);
                return e.length
                    ? n.createElement(
                          c.Z,
                          { style: l },
                          n.createElement(w.Z, {
                              data: e,
                              decelerationRate: "fast",
                              keyExtractor: (e, t) => `news-article-${e.id}`,
                              removeClippedSubviews: !0,
                              renderItem: ({ index: l, item: r }) =>
                                  n.createElement(
                                      c.Z,
                                      { style: [k.articleContainer, { height: a - b - 0.1 * a, maxHeight: i }] },
                                      n.createElement(u.Z, {
                                          article: r,
                                          containerStyle: k.articleCardContainer,
                                          infoContainerStyle: k.articleCardInfoContainer,
                                          key: `small-article-${r.id}`,
                                          onClick: () => {
                                              var a;
                                              (a = r.id), (0, y.Ib)(t, { articleId: a, allArticleIds: e.map((e) => e.id) });
                                          },
                                          reactionsContainerStyle: k.articleCardReactionsContainer,
                                          showSentiment: !1,
                                          size: "large",
                                          style: k.articleCard,
                                          summaryNumLines: 4,
                                          titleNumLines: 4,
                                          titleStyle: k.articleCardTitle,
                                      }),
                                  ),
                              showsVerticalScrollIndicator: !1,
                              style: l,
                          }),
                      )
                    : null;
            }
            const k = m.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" }, articleContainer: { scrollSnapAlign: "center", scrollSnapStop: "always", scrollMarginBlockStart: "10vh", scrollMarginBlockEnd: "10vh", display: "flex", marginHorizontal: e.spaces.space8, marginVertical: e.spaces.space8, transition: "all 0.2s ease", backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, articleCardContainer: { flex: 1 }, articleCard: { flex: 1, gap: e.spaces.space8 }, articleCardInfoContainer: { flex: "unset", gap: e.spaces.space8 }, articleCardReactionsContainer: { gap: e.spaces.space12 }, articleCardTitle: { fontSize: e.fontSizes.title3, lineHeight: 27 } }));
            function C({ style: e }) {
                return n.createElement(c.Z, { style: [x.divider, e] });
            }
            const x = m.default.create((e) => ({ divider: { height: "100%", width: 1, backgroundColor: e.colors.gray100, animationDuration: "0.2s", animationDelay: "0.2s", animationTimingFunction: "ease", animationFillMode: "both", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            function S({ articles: e, onArticleClick: t }) {
                return n.createElement(
                    c.Z,
                    { style: T.container },
                    e.map((e, a) =>
                        n.createElement(
                            n.Fragment,
                            { key: `four-only-title-article-${e.id}` },
                            0 !== a && n.createElement(C, null),
                            n.createElement(u.Z, {
                                article: e,
                                containerStyle: [T.article],
                                hideImg: !0,
                                hideSummary: !0,
                                onClick: () => {
                                    t(e.id);
                                },
                            }),
                        ),
                    ),
                );
            }
            const T = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space4 }, article: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 } }));
            function E({ articles: e, onArticleClick: t }) {
                return n.createElement(
                    c.Z,
                    { style: I.container },
                    e.map((e, a) =>
                        n.createElement(
                            n.Fragment,
                            { key: `four-without-image-article-${e.id}` },
                            0 !== a && n.createElement(C, null),
                            n.createElement(u.Z, {
                                article: e,
                                containerStyle: [I.article],
                                hideImg: !0,
                                hideSummary: !0,
                                onClick: () => {
                                    t(e.id);
                                },
                            }),
                        ),
                    ),
                );
            }
            const I = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space4 }, article: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 } }));
            function F({ articles: e, onArticleClick: t }) {
                const a = e[0],
                    i = e.slice(1);
                return n.createElement(
                    c.Z,
                    { style: A.container },
                    n.createElement(
                        c.Z,
                        { style: A.leftContainer },
                        n.createElement(u.Z, {
                            article: a,
                            containerStyle: A.articleContainer,
                            layout: "full",
                            onClick: () => {
                                t(a.id);
                            },
                            showSentiment: !0,
                            size: "large",
                        }),
                    ),
                    e.length > 1 &&
                        n.createElement(
                            c.Z,
                            { style: A.rightContainer },
                            i.map((e, a) =>
                                n.createElement(
                                    n.Fragment,
                                    { key: `left-large-right-four-artticle-${e.id}` },
                                    0 !== a && n.createElement(f.Z, null),
                                    n.createElement(u.Z, {
                                        article: e,
                                        containerStyle: [A.articleContainer, A.rightArticleCardContainer],
                                        hideImg: !0,
                                        onClick: () => {
                                            t(e.id);
                                        },
                                        summaryNumLines: 3,
                                    }),
                                ),
                            ),
                        ),
                );
            }
            const A = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space4 }, leftContainer: { flex: 2, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", height: "100%" }, rightContainer: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space4, width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both" }, articleContainer: { flex: 1 }, rightArticleCardContainer: { width: "100%" } }));
            var N = a(274234);
            function Z({ articles: e, highlightedArticle: t, onArticleClick: a }) {
                return n.createElement(
                    c.Z,
                    { style: L.container },
                    e.map((e, t) =>
                        n.createElement(u.Z, {
                            article: e,
                            containerStyle: [L.article],
                            headerImgContainerStyle: L.articleHeaderImg,
                            hideSummary: !0,
                            key: `small-article-${e.id}`,
                            onClick: () => {
                                a(e.id);
                            },
                        }),
                    ),
                    t &&
                        t.live_article &&
                        !!t.timeline &&
                        (t.timeline?.events || []).length > 0 &&
                        n.createElement(N.Z, {
                            article: t,
                            onRoute: () => {
                                a(t.id);
                            },
                            routeToArticle: !0,
                            style: L.article,
                        }),
                );
            }
            const L = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space4 }, article: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both", flex: 1 }, articleHeaderImg: { minHeight: 200 } }));
            function z({ articles: e, onArticleClick: t }) {
                return n.createElement(
                    c.Z,
                    { style: K.container },
                    e.map((e, a) =>
                        n.createElement(
                            n.Fragment,
                            { key: `three-grid-article-${e.id}` },
                            0 !== a && n.createElement(C, null),
                            n.createElement(u.Z, {
                                article: e,
                                containerStyle: K.article,
                                headerImgContainerStyle: K.articleHeaderImg,
                                onClick: () => {
                                    t(e.id);
                                },
                                summaryNumLines: 3,
                            }),
                        ),
                    ),
                );
            }
            const K = m.default.create((e) => ({ container: { width: "100%", display: "flex", flexDirection: "row", gap: e.spaces.space4 }, article: { flex: 1 }, articleHeaderImg: { minHeight: 250 } }));
            function D() {
                const e = (0, g.Z)({ limit: 19 }),
                    t = (0, d.Z)(),
                    { isCompactLayout: a } = (0, h.Z)();
                (0, p.Z)({});
                const i = n.useMemo(() => {
                        const t = { highlight: [], secondary: [], leftLargeRightFourGrid: [], fourWithoutImage: [], threeGrid: [], fourOnlyTitle: [] };
                        if (!e.length) return t;
                        let a = 0;
                        t.highlight.push(e[0]), a++;
                        const n = e[0].live_article && e[0].timeline ? 3 : 4;
                        for (let i = 0; i < n && a < e.length; i++) t.secondary.push(e[a]), a++;
                        for (let n = 0; n < 3 && a < e.length; n++) t.leftLargeRightFourGrid.push(e[a]), a++;
                        for (let n = 0; n < 4 && a < e.length; n++) t.fourWithoutImage.push(e[a]), a++;
                        for (let n = 0; n < 3 && a < e.length; n++) t.threeGrid.push(e[a]), a++;
                        for (; a < e.length; ) t.fourOnlyTitle.push(e[a]), a++;
                        return t;
                    }, [e]),
                    l = i.highlight.length > 0 ? i.highlight[0] : null,
                    r = !!l?.sentiment && (l?.sentiment.sentiment_scores || []).length > 0,
                    s = (a) => {
                        (0, y.Ib)(t, { articleId: a, allArticleIds: e.map((e) => e.id) });
                    };
                return e.length
                    ? a
                        ? n.createElement(v, { articles: e })
                        : n.createElement(
                              c.Z,
                              { style: H.container },
                              l &&
                                  n.createElement(
                                      c.Z,
                                      { style: H.highlightedArticle },
                                      n.createElement(u.Z, {
                                          article: l,
                                          headerImgContainerStyle: H.highlightedArticleHeaderImg,
                                          hoveredBgColor: "transparent",
                                          layout: "full",
                                          onClick: () => {
                                              s(l.id);
                                          },
                                          showSentiment: !0,
                                          size: "large",
                                          useRowReactions: r,
                                      }),
                                  ),
                              i.secondary.length > 0 &&
                                  n.createElement(Z, {
                                      articles: i.secondary,
                                      highlightedArticle: l,
                                      onArticleClick: (e) => {
                                          s(e);
                                      },
                                  }),
                              i.leftLargeRightFourGrid.length > 0 &&
                                  n.createElement(
                                      n.Fragment,
                                      null,
                                      n.createElement(f.Z, null),
                                      n.createElement(F, {
                                          articles: i.leftLargeRightFourGrid,
                                          onArticleClick: (e) => {
                                              s(e);
                                          },
                                      }),
                                  ),
                              i.fourWithoutImage.length > 0 &&
                                  n.createElement(
                                      n.Fragment,
                                      null,
                                      n.createElement(f.Z, null),
                                      n.createElement(E, {
                                          articles: i.fourWithoutImage,
                                          onArticleClick: (e) => {
                                              s(e);
                                          },
                                      }),
                                  ),
                              i.threeGrid.length > 0 &&
                                  n.createElement(
                                      n.Fragment,
                                      null,
                                      n.createElement(f.Z, null),
                                      n.createElement(z, {
                                          articles: i.threeGrid,
                                          onArticleClick: (e) => {
                                              s(e);
                                          },
                                      }),
                                  ),
                              i.fourOnlyTitle.length > 0 &&
                                  n.createElement(
                                      n.Fragment,
                                      null,
                                      n.createElement(f.Z, null),
                                      n.createElement(S, {
                                          articles: i.fourOnlyTitle,
                                          onArticleClick: (e) => {
                                              s(e);
                                          },
                                      }),
                                  ),
                          )
                    : null;
            }
            const H = m.default.create((e) => ({ container: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space24, paddingBottom: e.spaces.space80, maxWidth: 1200 }, highlightedArticle: { width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, animationFillMode: "both" }, highlightedArticleHeaderImg: { minHeight: 350 } }));
            var P = a(305179);
            const B = "News",
                R = "The latest realtime information.",
                M = { width: 600, height: 315, url: "https://abs.twimg.com/grok-news/article-x-banner" },
                W = { context: "NEWS" };
            function U() {
                return (
                    (0, o.ZP)(),
                    n.useEffect(() => {
                        (0, o.jW)("news-content-ready");
                    }, []),
                    n.createElement(s.H, { errorConfig: W }, n.createElement(l.Z, { description: R, includeOpenGraphMeta: !1, title: B }), n.createElement(r.Z, { canonical: (0, i.ju)(window.location.href), description: R, image: M.url, imageH: M.height, imageW: M.width, title: B, type: "article" }), n.createElement(P.Z, { scribeNamespace: "news" }, n.createElement(D, null)))
                );
            }
        },
        563586: (e, t, a) => {
            a.d(t, { Z: () => k });
            a(136728);
            var n = a(202784),
                i = a(325686),
                l = a(530732),
                r = a(392237),
                s = a(306677),
                o = a(725405),
                c = a(125363),
                m = a(836255),
                d = a(246728),
                u = a(669636),
                p = a(790167),
                g = a(287627),
                h = a(992942);
            const y = "https://abs.twimg.com/grok-news/article-x-banner";
            function f({ hideDefault: e, hovered: t, imgStyle: a, style: i, url: r }) {
                return e && r === y ? null : n.createElement(l.Z, { style: [w.headerImgContainer, i], withoutInteractiveStyles: !0 }, ({ isHovered: e }) => n.createElement(h.Z, { resizeMode: "cover", source: r, style: [w.headerImg, t ? w.hoveredHeaderImg : void 0, a] }));
            }
            const w = r.default.create((e) => ({ headerImgContainer: { flex: 1, height: 200, width: "100%", overflow: "hidden", borderRadius: e.borderRadii.medium }, headerImg: { width: "100%", height: "100%", transition: "all 0.5s ease", transform: "scale(1)" }, hoveredHeaderImg: { cursor: "pointer", transform: "scale(1.05)" } }));
            var _ = a(477575),
                b = a(858496),
                v = a(978086);
            function k({ article: e, commentsStyle: t, containerStyle: a, headerImgContainerStyle: r, headerImgStyle: h, hideDefaultImg: y, hideImg: w, hideReactions: k, hideSummary: x, hoveredBgColor: S, infoContainerStyle: T, layout: E = "imageTop", onClick: I, reactionsContainerStyle: F, routeToExploreNews: A, sentimentStyle: N, showSentiment: Z, size: L = "normal", style: z, summaryNumLines: K, titleNumLines: D, titleStyle: H, useRowReactions: P }) {
                const B = (0, o.Z)(),
                    R = (0, c.I0)(),
                    { isCompactLayout: M } = (0, d.Z)(),
                    W = n.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        return (
                            e.posts.forEach((e) => {
                                e.post_results.rest_id && t.push(e.post_results.rest_id);
                            }),
                            t
                        );
                    }, [e]),
                    U = n.useMemo(() => {
                        if (!e) return [];
                        const t = [];
                        e.header_img_post_id && t.push(e.header_img_post_id.post_results.rest_id);
                        return t.push(...W.slice(0, 3)), t;
                    }, [e, W]);
                n.useEffect(() => {
                    R(m.Z.fetchMultipleIfNeeded(U));
                }, [R, U]);
                const j = { full: { container: C.fullContainer, headerImgContainer: C.fullHeaderImgContainer }, imageLeft: { container: C.imageLeftContainer, headerImgContainer: C.imageLeftHeaderImgContainer }, imageTop: { container: C.imageTopContainer, headerImgContainer: C.imageTopHeaderImgContainer }, imageBelowTitle: { container: C.imageBelowTitleContainer, headerImgContainer: C.imageBelowTitleHeaderImgContainer } },
                    O = { normal: {}, large: { container: C.largeContainer, title: C.largeTitle, summary: C.largeSummary, lastUpdated: C.largeLastUpdated, comments: C.largeComments } },
                    G = n.useCallback(() => {
                        I && I();
                    }, [I]),
                    $ = n.useCallback(() => {
                        (0, u._$)(B, { articleId: e.id });
                    }, [e, B]),
                    J = j[E],
                    V = O[L],
                    Y = e.header_img_url || "",
                    q = !w && Y,
                    Q = A ? `/i/news/a/${e.id}` : `/i/news/article/${e.id}`,
                    X = n.createElement(i.Z, { style: [C.infoContainer, M ? C.compactInfoContainer : void 0, T] }, n.createElement(v.Z, { numberOfLines: D, text: e.title, textStyle: [V.title, H] }), "imageBelowTitle" === E && q && n.createElement(f, { imgStyle: h, onClick: G, style: [J.headerImgContainer, r], url: Y }), n.createElement(_.Z, { isLive: !!e.live_article, textStyle: V.lastUpdated, timestamp: e.last_updated_at }), !!e.summary && !x && n.createElement(p.Z, { numberOfLines: K, sources: [], style: [C.summary, V.summary], text: e.summary }), !k && n.createElement(i.Z, { style: [C.reactionsContainer, P ? C.rowReactionsContainer : void 0, F] }, e.sentiment && Z && n.createElement(b.Z, { articleId: e.id, sentiment: e.sentiment, showPercentages: !0, style: N }), n.createElement(g.Z, { disableClick: !0, numPosts: Number(e.total_trend_posts), postIds: W, style: [V.comments, t], textStyle: C.commentsText, variant: "outline" })));
                return n.createElement(l.Z, { link: Q, onClick: G, style: [C.interactiveContainer, a], withoutInteractiveStyles: !0 }, ({ isHovered: e }) => n.createElement(i.Z, { style: [C.container, J.container, V.container, e ? C.hoveredContainer : void 0, e && S ? { backgroundColor: S } : void 0, z] }, n.createElement(s.D, { id: "news_article_card", onFullyVisible: $, position: "top", testID: "news_article_card" }), X, q && "imageBelowTitle" !== E && n.createElement(f, { hideDefault: y, hovered: e, imgStyle: h, onClick: G, style: [J.headerImgContainer, r], url: Y })));
            }
            const C = r.default.create((e) => ({ interactiveContainer: { display: "flex", width: "100%" }, container: { flex: 1, display: "flex", width: "100%", gap: e.spaces.space16, backgroundColor: "transparent", borderRadius: e.borderRadii.large, transition: "all 0.2s ease", padding: e.spaces.space12 }, hoveredContainer: { backgroundColor: "light" === e.paletteName ? e.colors.gray0 : "transparent", cursor: "pointer" }, largeContainer: { gap: e.spaces.space36 }, fullContainer: { flexDirection: "row" }, imageLeftContainer: { flexDirection: "row-reverse" }, imageTopContainer: { flexDirection: "column-reverse" }, imageBelowTitleContainer: { flexDirection: "column" }, fullHeaderImgContainer: { flex: 1, width: "100%", height: "100%", minHeight: 350 }, imageLeftHeaderImgContainer: { flex: 1, width: "100%", height: "100%" }, imageTopHeaderImgContainer: { flex: 1, width: "100%", minHeight: 200 }, imageBelowTitleHeaderImgContainer: { flex: 1, width: "100%", height: "100%", minHeight: 350 }, infoContainer: { flex: 1, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, compactInfoContainer: { padding: e.spaces.space8 }, summary: { color: e.colors.gray900 }, largeSummary: {}, headerImgContainer: { flex: 1 }, headerImgInteractiveContainer: { width: "100%", flex: 1 }, reactionsContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, rowReactionsContainer: { flexDirection: "row" }, largeTitle: { fontSize: e.fontSizes.title1, lineHeight: 40 }, largeLastUpdated: { fontSize: e.fontSizes.subtext1 }, largeComments: { fontSize: e.fontSizes.subtext2 }, commentsText: { color: e.colors.gray900 } }));
        },
        339072: (e, t, a) => {
            a.r(t), a.d(t, { default: () => _ });
            var n = a(202784),
                i = a(107267),
                l = a(688715),
                r = a(529256),
                s = a(572067),
                o = a(736063),
                c = a(4452),
                m = a(615027),
                d = a(305179),
                u = a(759208),
                p = a(768431);
            const g = {
                    id: "999999999999999999",
                    live_article: !0,
                    timeline: {
                        title: "Mock Timeline",
                        events: [
                            { summary: "Trump Threatens More Tariffs on Mexico Over Water Rights", timestamp: (new Date().getTime() - 6e4).toString() },
                            { summary: "Berkshire Sells $628 Million in Yen Bonds in Smallest Japan Deal", timestamp: (new Date().getTime() - 6e5).toString() },
                            { summary: "Trump Signs Bill Blocking IRS Crypto Tax Rule Biden Pushed", timestamp: (new Date().getTime() - 15e5).toString() },
                            { summary: "UAW Chief Praises Some Trump Tariffs, Though Not ‘Reckless’ Ones", timestamp: (new Date().getTime() - 18e5).toString() },
                            { summary: "China Tech Faces Worry Beyond Tariffs After $350 Billion Wipeout", timestamp: (new Date().getTime() - 27e5).toString() },
                            { summary: "Xi Set to Host EU Leaders in July, South China Morning Post Says", timestamp: (new Date().getTime() - 36e5).toString() },
                        ],
                    },
                    title: "Trump defies market tumult and pushes ahead with trade war",
                    total_trend_posts: "1350",
                    header_img_post_id: { post_results: { id: "1903098565536207256", rest_id: "1903098565536207256" } },
                    header_img_url: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999",
                    key_points: ["The US, led by President Trump, is demanding Iran fully dismantle its nuclear program, a stance articulated by National Security Adviser Mike Waltz on March 23, 2025, with threats of consequences if unmet.", "Iran rejects this demand, willing to discuss preventing militarization but insists its program is peaceful and will not negotiate dismantlement, as stated in an X post by its UN mission on March 9, 2025.", "The evidence leans toward increased tensions, with the US boosting military presence in the Middle East and Iran advancing its nuclear capabilities, per a February 2025 IAEA report.", "It seems likely that diplomacy remains an option, though both sides are far apart, with a UN sanctions snapback deadline in October 2025 adding pressure."],
                    last_updated_at: "1743028975220",
                    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    posts: [{ post_results: { id: "1892400129719611567", rest_id: "1892400129719611567" } }, { post_results: { id: "1903098565536207256", rest_id: "1903098565536207256" } }, { post_results: { id: "1902782118511644833", rest_id: "1902782118511644833" } }, { post_results: { id: "1902782892201365807", rest_id: "1902782892201365807" } }],
                    sources: [
                        { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", creator: void 0, date_last_crawled: void 0, date_published: void 0, description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon_base64: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", image: void 0, language: void 0, parsed_text: void 0, snippet: void 0, time_accessed: void 0, favicon: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", title: 'Trump administration is seeking "full dismantlement" of Iran\'s nuclear program, Waltz says', cached_page_url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", site_name: "CBS News", media_name: "CBS News", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" },
                        { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", creator: void 0, date_last_crawled: void 0, date_published: void 0, description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon_base64: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", image: void 0, language: void 0, parsed_text: void 0, snippet: void 0, time_accessed: void 0, favicon: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", title: 'Trump administration is seeking "full dismantlement" of Iran\'s nuclear program, Waltz says', cached_page_url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", site_name: "CBS News", media_name: "CBS News", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" },
                        { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", creator: void 0, date_last_crawled: void 0, date_published: void 0, description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon_base64: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", image: void 0, language: void 0, parsed_text: void 0, snippet: void 0, time_accessed: void 0, favicon: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", title: 'Trump administration is seeking "full dismantlement" of Iran\'s nuclear program, Waltz says', cached_page_url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", site_name: "CBS News", media_name: "CBS News", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" },
                        { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", creator: void 0, date_last_crawled: void 0, date_published: void 0, description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon_base64: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", image: void 0, language: void 0, parsed_text: void 0, snippet: void 0, time_accessed: void 0, favicon: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", title: 'Trump administration is seeking "full dismantlement" of Iran\'s nuclear program, Waltz says', cached_page_url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", site_name: "CBS News", media_name: "CBS News", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" },
                        { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", creator: void 0, date_last_crawled: void 0, date_published: void 0, description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon_base64: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", image: void 0, language: void 0, parsed_text: void 0, snippet: void 0, time_accessed: void 0, favicon: "https://abs.twimg.com/grok-news/article-header-img/999999999999999999", title: 'Trump administration is seeking "full dismantlement" of Iran\'s nuclear program, Waltz says', cached_page_url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", site_name: "CBS News", media_name: "CBS News", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" },
                    ],
                    sections: [
                        { title: "Background and Context", content: { text: "The US demand for Iran to dismantle its nuclear program entirely reflects heightened concerns over Iran's nuclear activities. This call, made by National Security Advisor Mike Waltz on March 23, 2025, during an appearance on \"Face the Nation\" (CBS News), comes amid escalating regional tensions and Iran's advancements beyond the limits set by the 2015 Joint Comprehensive Plan of Action (JCPOA). The JCPOA, signed by Iran and the P5+1 (China, France, Russia, UK, US, Germany), aimed to restrict Iran's nuclear program in exchange for sanctions relief, but the US withdrew in 2018 under President Trump, leading Iran to breach the agreement's limits." } },
                        { title: "Bulletpoint Block Example", content: { bullets: ["In 1969, the Apollo 11 mission successfully landed humans on the moon for the first time, with Neil Armstrong and Buzz Aldrin stepping onto the lunar surface while Michael Collins orbited above, marking a monumental achievement in space exploration.", "A single raindrop can fall at speeds of up to 20 miles per hour.", "The shortest war in history lasted 38 minutes, occurring in 1896 when the British Royal Navy bombarded the Sultan of Zanzibar’s palace after he refused to step down, ending with his surrender and the installation of a new ruler."] } },
                        { title: "Current Status and Demand", content: { text: "The US demand for Iran to dismantle its nuclear program entirely reflects heightened concerns over Iran's nuclear activities. This call, made by National Security Advisor Mike Waltz on March 23, 2025, during an appearance on \"Face the Nation\" (CBS News), comes amid escalating regional tensions and Iran's advancements beyond the limits set by the 2015 Joint Comprehensive Plan of Action (JCPOA). The JCPOA, signed by Iran and the P5+1 (China, France, Russia, UK, US, Germany), aimed to restrict Iran's nuclear program in exchange for sanctions relief, but the US withdrew in 2018 under President Trump, leading Iran to breach the agreement's limits. [](https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/)" } },
                        { title: "Horizontal Image Block Example", content: { image_caption: "This is a long caption for a horizontal image aspect ratio. This is a placeholder to mock how it looks.", image_url: "https://abs.twimg.com/grok-news/test-img/horizontal" } },
                        { title: "Iran's Response and Implications", content: { text: 'Iran has rejected the US demand, with Supreme Leader Ayatollah Ali Khamenei condemning negotiation efforts as bullying (NPR). Iran\'s UN mission is open to discussing "militarization" but not dismantlement, maintaining its program is for peaceful purposes. The timing is critical, with October 18, 2025, marking the expiration of the JCPOA snapback mechanism, which could reimpose UN sanctions but will no longer be available after this date (Atlantic Council). Iran has threatened to withdraw from the Non-Proliferation Treaty (NPT) if snapback is activated, potentially escalating regional tensions.' } },
                        { title: "Vertical Image Block Example", content: { image_caption: "This is a long caption for a horizontal image aspect ratio. This is a placeholder to mock how it looks.", image_url: "https://abs.twimg.com/grok-news/test-img/vertical" } },
                        { title: "Iran's Response and Implications", content: { text: 'Iran has rejected the US demand, with Supreme Leader Ayatollah Ali Khamenei condemning negotiation efforts as bullying (NPR). Iran\'s UN mission is open to discussing "militarization" but not dismantlement, maintaining its program is for peaceful purposes. The timing is critical, with October 18, 2025, marking the expiration of the JCPOA snapback mechanism, which could reimpose UN sanctions but will no longer be available after this date (Atlantic Council). Iran has threatened to withdraw from the Non-Proliferation Treaty (NPT) if snapback is activated, potentially escalating regional tensions.' } },
                        { title: "Expert Perspectives", content: { text: "Experts are divided, with some viewing full dismantlement as necessary for security (FDD), while others see it as unrealistic, suggesting diplomatic engagement is needed (Arms Control Association). The Trump administration faces a challenge in balancing its stance with diplomacy to prevent further proliferation." } },
                        { title: "X Post Block Example", content: { post: { post_results: { id: "1892400129719611567", rest_id: "1892400129719611567" } } } },
                        { title: "Website Block Example", content: { website: { url: "https://www.cbsnews.com/news/mike-waltz-national-security-adviser-iran-nuclear-program-face-the-nation/", cached_page_url: "https://www.nytimes.com/live/2025/04/02/business/trump-tariffs-liberation-day", creator: "", date_last_crawled: "", date_published: "", description: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", favicon: "https://abs.twimg.com/grok-news/test-img/horizontal", favicon_base64: "https://abs.twimg.com/grok-news/test-img/horizontal", image: "https://abs.twimg.com/grok-news/test-img/horizontal", language: "", parsed_text: "", site_name: "", snippet: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!", time_accessed: "", title: "Test Website", media_name: "Media Name", summary: "A simple test website built to experiment with features, functionality, and design. Explore and enjoy!" } } },
                        { title: "", content: { text: "This is a section without title." } },
                        { title: "Conclusion", content: { text: "The US demand for full dismantlement of Iran's nuclear program, announced on March 23, 2025, reflects deep concerns over Iran's nuclear advancements and regional security. With Iran rejecting negotiations under pressure and the snapback mechanism's expiration looming on October 18, 2025, the situation is at a critical juncture. Diplomatic efforts, expert recommendations, and the potential for escalation will shape the path forward, with significant implications for global non-proliferation efforts and Middle Eastern stability." } },
                    ],
                    sentiment: {
                        last_time_updated: "1742428800",
                        question: "Do people like this question?",
                        sentiment_scores: [
                            { num_posts: "150", sentiment_type: "Positive", sentiment_value: "18.18", timestamp: "1744761320902" },
                            { num_posts: "200", sentiment_type: "Neutral", sentiment_value: "9.09", timestamp: "1744761320902" },
                            { num_posts: "180", sentiment_type: "Negative", sentiment_value: "72.73", timestamp: "1744761320902" },
                            { num_posts: "150", sentiment_type: "Positive", sentiment_value: "30.00", timestamp: "1744761520902" },
                            { num_posts: "200", sentiment_type: "Neutral", sentiment_value: "10.00", timestamp: "1744761520902" },
                            { num_posts: "180", sentiment_type: "Negative", sentiment_value: "60.00", timestamp: "1744761520902" },
                            { num_posts: "150", sentiment_type: "Positive", sentiment_value: "24.00", timestamp: "1744761820902" },
                            { num_posts: "200", sentiment_type: "Neutral", sentiment_value: "60.00", timestamp: "1744761820902" },
                            { num_posts: "180", sentiment_type: "Negative", sentiment_value: "16.00", timestamp: "1744761820902" },
                            { num_posts: "150", sentiment_type: "Positive", sentiment_value: "70.18", timestamp: "1744761920902", post_id: "1889808930949517349" },
                            { num_posts: "200", sentiment_type: "Neutral", sentiment_value: "14.04", timestamp: "1744761920902" },
                            { num_posts: "180", sentiment_type: "Negative", sentiment_value: "8.77", timestamp: "1744761920902" },
                            { num_posts: "160", sentiment_type: "Positive", sentiment_value: "82.19", timestamp: "1744762120902" },
                            { num_posts: "210", sentiment_type: "Neutral", sentiment_value: "12.33", timestamp: "1744762120902" },
                            { num_posts: "170", sentiment_type: "Negative", sentiment_value: "5.48", timestamp: "1744762120902" },
                            { num_posts: "170", sentiment_type: "Positive", sentiment_value: "84.16", timestamp: "1744762320902" },
                            { num_posts: "220", sentiment_type: "Neutral", sentiment_value: "10.89", timestamp: "1744762320902" },
                            { num_posts: "160", sentiment_type: "Negative", sentiment_value: "5.94", timestamp: "1744762320902" },
                            { num_posts: "180", sentiment_type: "Positive", sentiment_value: "87.00", timestamp: "1744762520902" },
                            { num_posts: "230", sentiment_type: "Neutral", sentiment_value: "10.00", timestamp: "1744762520902" },
                            { num_posts: "150", sentiment_type: "Negative", sentiment_value: "3.00", timestamp: "1744762520902" },
                        ],
                        sentiment_types: ["Positive", "Neutral", "Negative"],
                        trend_id: "trend_renewable_policy_2025",
                    },
                },
                h = 600,
                y = 315,
                f = "https://abs.twimg.com/grok-news/article-x-banner",
                w = { context: "NEWS_ARTICLE" };
            const _ = function () {
                (0, c.ZP)();
                const e = (0, i.useRouteMatch)(),
                    t = (0, p.Z)({ trendId: e.params.newsArticleId || "" }),
                    a = t?.summary || "The latest realtime information.",
                    _ = t?.title || "News",
                    b = "999999999999999999" === e.params.newsArticleId;
                return (
                    n.useEffect(() => {
                        (0, c.jW)("news-article-content-ready");
                    }, []),
                    t || b ? n.createElement(o.H, { errorConfig: w }, n.createElement(r.Z, { description: a, includeOpenGraphMeta: !1, title: _ }), n.createElement(s.Z, { canonical: (0, l.ju)(window.location.href), description: a, image: f, imageH: y, imageW: h, title: _, type: "article" }), n.createElement(d.Z, { scribeNamespace: "news-article" }, n.createElement(u.Z, { article: b ? g : t }))) : n.createElement(m.Z, { to: "/i/news" })
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.News.f250570a.js.map

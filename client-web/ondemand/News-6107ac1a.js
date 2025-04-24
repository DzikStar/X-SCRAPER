"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.News-6107ac1a"],
    {
        354061: (e, l, n) => {
            n.d(l, { Z: () => T });
            var a,
                i,
                s,
                t,
                r,
                u,
                o,
                d,
                c,
                g,
                m,
                k,
                y,
                p,
                F,
                K,
                _,
                h,
                S = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "limit" }]),
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
                                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                    (t = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                                    (u = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (r = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                                    (d = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                                    (c = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                                    (m = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (y = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [d, (k = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, o], storageKey: null }),
                                                                    (p = {
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
                                                                    (F = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: r, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(K = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: r, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
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
                                                                    { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }, k], storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: i, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(h = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [s, t, u, o, d, c, g, m, y, p, F, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [h, K], storageKey: null }], storageKey: null }], storageKey: null }, _, s], type: "AiTrend", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            S.hash = "3801ff63426a8e5a7f7864683169d9be";
            const T = S;
        },
        500970: (e, l, n) => {
            n.d(l, { Z: () => J });
            var a,
                i,
                s,
                t,
                r,
                u,
                o,
                d,
                c,
                g,
                m,
                k,
                y,
                p,
                F,
                K,
                _,
                h,
                S,
                T,
                b,
                f,
                w,
                L,
                A,
                v,
                B,
                N,
                x,
                C,
                D,
                E,
                P,
                I,
                R,
                Z,
                H,
                M,
                Q,
                V,
                W,
                q,
                G,
                O,
                z,
                X,
                U,
                Y,
                j = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "trendId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useNewsArticleQuery",
                        selections: [
                            {
                                alias: "newsArticleResult",
                                args: (i = [
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
                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "post_timeline", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                            s,
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                            (o = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (u = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [s, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "key_points", storageKey: null }),
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                            (k = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                            (F = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [g, (p = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
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
                                                                            (K = { kind: "InlineFragment", selections: [{ alias: "bullets", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "BulletsBlock", abstractKey: null }),
                                                                            (_ = {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_caption", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_size", storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                                ],
                                                                                type: "ImageBlock",
                                                                                abstractKey: null,
                                                                            }),
                                                                            (h = { kind: "InlineFragment", selections: [{ alias: "inline_header", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "InlineHeader", abstractKey: null }),
                                                                            (S = { kind: "InlineFragment", selections: [{ alias: "text", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "TextBlock", abstractKey: null }),
                                                                            (R = { kind: "InlineFragment", selections: [{ alias: "website", args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "content", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), (b = { alias: null, args: null, kind: "ScalarField", name: "cached_page_url", storageKey: null }), (f = { alias: null, args: null, kind: "ScalarField", name: "creator", storageKey: null }), (w = { alias: null, args: null, kind: "ScalarField", name: "date_last_crawled", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "date_published", storageKey: null }), (A = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null }), (B = { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null }), (N = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), (x = { alias: null, args: null, kind: "ScalarField", name: "language", storageKey: null }), (C = { alias: null, args: null, kind: "ScalarField", name: "parsed_text", storageKey: null }), (D = { alias: null, args: null, kind: "ScalarField", name: "site_name", storageKey: null }), (E = { alias: null, args: null, kind: "ScalarField", name: "snippet", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "time_accessed", storageKey: null }), c, (I = { alias: null, args: null, kind: "ScalarField", name: "media_name", storageKey: null }), g], storageKey: null }], type: "WebsiteBlock", abstractKey: null }),
                                                                            (Z = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: u, storageKey: null }], type: "PostBlock", abstractKey: null }),
                                                                            (O = { kind: "InlineFragment", selections: [(H = { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null }), (M = { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null }), { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [(Q = { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }), (V = { alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }), (W = { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }), p], storageKey: null }, (q = { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null }), (G = { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null })], type: "TrendSentiment", abstractKey: null }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (z = { alias: null, args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "sources", plural: !0, selections: [T, b, f, w, L, A, v, B, N, x, C, D, E, P, c, g, I], storageKey: null }),
                                                            (X = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: u, storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (U = { alias: null, args: null, concreteType: "TrendSentiment", kind: "LinkedField", name: "sentiment_data", plural: !1, selections: [G, M, H, q, { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [V, W, Q, p], storageKey: null }], storageKey: null }),
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useNewsArticleQuery", selections: [{ alias: "newsArticleResult", args: i, concreteType: "AiTrendResults", kind: "LinkedField", name: "ai_trend_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(Y = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [s, r, o, d, c, g, m, k, y, F, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [c, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [Y, K, _, h, S, R, Z, O], storageKey: null }], storageKey: null }, z, X], storageKey: null }, U, s], type: "AiTrend", abstractKey: null }], storageKey: null }, s], storageKey: null }] },
                    params: { id: "OGuIchikkLkacWpMvS1Wpg", metadata: {}, name: "useNewsArticleQuery", operationKind: "query", text: null },
                };
            j.hash = "a506b224a236e8986b17cac3a53a9878";
            const J = j;
        },
        525271: (e, l, n) => {
            n.d(l, { Z: () => T });
            var a = n(202784),
                i = n(325686),
                s = n(674132),
                t = n.n(s),
                r = n(837020),
                u = n(461756),
                o = n(786998),
                d = n(154003),
                c = n(950822),
                g = n(743618),
                m = n(745153),
                k = n(292627),
                y = n(224162),
                p = n(392237);
            const F = t().af8fa2ae,
                K = a.createElement(r.default, null);
            class _ extends a.Component {
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
                            const { altKey: l, ctrlKey: n, key: a, metaKey: i } = e;
                            !(l || n || i) && "Escape" === a && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), u.Z.reducedMotionEnabled && this.props.onDismissed();
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
                    const { additionalControl: e, align: l, buttonType: n, children: s, style: t, subtitle: r, title: d, topBarStyle: p, withBackgroundBlur: F, withTopBar: K, withTransparentMask: _ } = this.props,
                        { isVisible: T } = this.state;
                    return a.createElement(y.ZP.Consumer, null, ({ direction: y }) => {
                        const b = "rtl" === y,
                            f = T ? S.visibleDrawer : ("left" === l) === b ? S.offscreenRightDrawer : S.offscreenLeftDrawer,
                            w = T && !_ ? S.maskWithBg : S.maskTransparent,
                            L = T ? S.animateOpen : S.animateClose,
                            A = u.Z.reducedMotionEnabled ? null : L;
                        return a.createElement(k.Z.Modal, null, a.createElement(m.Z, null, a.createElement(g.Z, null, a.createElement(i.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [S.mask, w, A, F ? S.backgroundBlur : null, "left" === l ? S.alignLeft : S.alignRight] }, (0, c.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: h, style: [S.root, F ? S.backgroundRootBlur : null, f, A, t], children: a.createElement(a.Fragment, null, K ? a.createElement(o.Z, { leftControl: "left" === l ? e : "right" === l ? this._renderCloseButton(n) : null, rightControl: "left" === l ? this._renderCloseButton(n) : "right" === l ? e : null, style: p, subtitle: r, title: d }) : null, a.createElement(i.Z, { style: S.contentContainer }, s)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return a.createElement(d.ZP, { "aria-label": F, icon: K, onPress: this._handleMaskClick, type: e });
                }
            }
            _.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const h = (e) => {
                    e.stopPropagation();
                },
                S = p.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...p.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                T = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.News-6107ac1a.e1011c8a.js.map

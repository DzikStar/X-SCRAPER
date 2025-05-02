"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewsLiveTimelineSidebar"],
    {
        485513: (e, l, n) => {
            n.r(l), n.d(l, { default: () => m });
            var a = n(202784),
                i = n(325686),
                t = n(392237),
                s = n(306677),
                r = n(725405),
                o = n(448301),
                u = n(274234),
                c = n(768431),
                d = n(399398);
            function m({ articleId: e }) {
                const l = (0, r.Z)(),
                    n = (0, c.Z)({ trendId: e }),
                    t = a.useCallback(() => {
                        l.scribe({ element: "news_timeline_sidebar", action: "impression", data: { event_info: e } });
                    }, [l, e]);
                return n && (0, o.ZW)(n) ? a.createElement(d.g, null, a.createElement(s.D, { id: "news_live_timeline_sidebar", onFullyVisible: t, position: "top", testID: "news_live_timeline_sidebar" }), a.createElement(i.Z, { style: g.container }, a.createElement(u.Z, { article: n, hideTitle: !0 }))) : null;
            }
            const g = t.default.create((e) => ({ container: { flex: 1, padding: e.spaces.space16 } }));
        },
        448301: (e, l, n) => {
            function a(e, l) {
                const n = new Date(),
                    a = Math.floor((e.getTime() - n.getTime()) / 1e3),
                    i = Math.abs(a),
                    t = 86400,
                    s = 3600,
                    r = 60;
                let o;
                if (i >= t) {
                    const e = Math.floor(i / t);
                    o = `${e} day${1 === e ? "" : "s"}`;
                } else if (i >= s) {
                    const e = Math.floor(i / s);
                    o = `${e} hour${1 === e ? "" : "s"}`;
                } else if (i >= r) {
                    const e = Math.floor(i / r);
                    o = `${e} ${l ? "minute" : "min"}${1 === e ? "" : "s"}`;
                } else {
                    const e = Math.floor(i);
                    o = `${e} ${l ? "second" : "sec"}${1 === e ? "" : "s"}`;
                }
                return a >= 0 ? `${o} later` : `${o} ago`;
            }
            function i(e) {
                if (isNaN(e)) return "0";
                const l = Math.abs(e);
                if (l >= 1e6) {
                    const e = l / 1e6;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}M`;
                }
                if (l >= 1e3) {
                    const e = l / 1e3;
                    return `${e % 1 == 0 ? e : e.toFixed(1)}K`;
                }
                return e.toString();
            }
            function t(e) {
                return !!e.live_article && !!e.timeline && !!e.timeline.events && e.timeline.events.length > 1;
            }
            n.d(l, { ZW: () => t, pi: () => a, uf: () => i });
        },
        206411: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(202784),
                i = n(325686),
                t = n(731708),
                s = n(392237),
                r = n(757483);
            const o = "LIVE";
            function u({ isAnimated: e, style: l, variant: n = "default" }) {
                return a.createElement(i.Z, { style: [c.container, l] }, a.createElement(t.ZP, { style: [c.label, "large" === n ? c.largeLabel : void 0], weight: "bold" }, o));
            }
            const c = s.default.create((e) => ({ container: { display: "flex", width: "max-content", padding: e.spaces.space4, backgroundColor: r.Z.hexToCss(e.colors.red500, 0.2), borderRadius: e.borderRadii.small }, label: { color: e.colors.red500, fontSize: 9, lineHeight: 9, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0.6 }, "50%": { opacity: 1 }, "100%": { opacity: 0.6 } }], animationTimingFunction: "ease", animationFillMode: "both", animationIterationCount: "infinite" }, largeLabel: { fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } }));
        },
        274234: (e, l, n) => {
            n.d(l, { Z: () => d });
            n(136728);
            var a = n(202784),
                i = n(325686),
                t = n(107267),
                s = n(530732),
                r = n(731708),
                o = n(392237),
                u = n(448301),
                c = n(206411);
            function d({ article: e, containerStyle: l, hideTitle: n, isInline: o, onRoute: d, routeToArticle: g, style: y }) {
                const p = (0, t.useHistory)(),
                    k = e.timeline,
                    F = a.useCallback(() => {
                        d && d(), p.push(`/i/news/article/${e.id}`);
                    }, [p, e, d]);
                return k
                    ? a.createElement(s.Z, { onClick: g ? F : void 0, style: l, withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                          a.createElement(
                              i.Z,
                              { style: [m.container, o ? m.inlineContainer : void 0, y] },
                              a.createElement(i.Z, { style: m.headerContainer }, !n && a.createElement(r.ZP, { style: m.title, weight: "bold" }, k.title), a.createElement(c.Z, { isAnimated: !0, style: m.liveLabel })),
                              a.createElement(
                                  i.Z,
                                  { style: m.events },
                                  (k.events || []).map((e, l) => {
                                      const n = new Date(Number(e.timestamp)),
                                          t = (0, u.pi)(n);
                                      return a.createElement(i.Z, { key: `live-event-${e.summary || ""}`, style: m.event }, a.createElement(r.ZP, { style: [m.timestamp, o ? m.inlineTimestamp : void 0, 0 === l ? m.mostRecentTimestamp : void 0] }, t), a.createElement(r.ZP, { style: [m.eventTitle, o ? m.inlineEventTitle : void 0], weight: "medium" }, e.summary));
                                  }),
                              ),
                          ),
                      )
                    : null;
            }
            const m = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", maxWidth: 350 }, inlineContainer: { maxWidth: "unset", width: "100%", padding: e.spaces.space16, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100 }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: e.spaces.space8 }, title: { fontSize: e.fontSizes.headline2, lineHeight: 23, transition: "all 0.2s ease" }, liveLabel: { top: e.spaces.space2 }, events: { display: "flex", flexDirection: "column", gap: e.spaces.space16 }, event: { display: "flex", flexDirection: "row", gap: e.spaces.space8, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, flex: 1 }, inlineTimestamp: { fontSize: e.fontSizes.subtext2 }, mostRecentTimestamp: { color: e.colors.red500 }, eventTitle: { flex: 3, fontSize: e.fontSizes.subtext2, transition: "all 0.2s ease" }, inlineEventTitle: { fontSize: e.fontSizes.subtext1 } }));
        },
        768431: (e, l, n) => {
            n.d(l, { Z: () => ne });
            var a,
                i,
                t,
                s,
                r,
                o,
                u,
                c,
                d,
                m,
                g,
                y,
                p,
                k,
                F,
                K,
                _,
                S,
                f,
                b,
                T,
                h,
                v,
                w,
                L,
                x,
                I,
                Z,
                A,
                E,
                $,
                z,
                C,
                N,
                R,
                D,
                M,
                P,
                B,
                W,
                H,
                Q,
                V,
                q,
                G,
                O,
                j,
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
                                                    (s = {
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
                                                                    { alias: null, args: null, concreteType: "Timeline", kind: "LinkedField", name: "post_timeline", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
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
                                                            t,
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "header_img_url", storageKey: null }),
                                                            (u = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "header_img_post_id", plural: !1, selections: (o = [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "post_results", plural: !1, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], storageKey: null }]), storageKey: null }),
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "key_points", storageKey: null }),
                                                            (d = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }),
                                                            (m = { alias: null, args: null, kind: "ScalarField", name: "summary", storageKey: null }),
                                                            (g = { alias: null, args: null, kind: "ScalarField", name: "last_updated_at", storageKey: null }),
                                                            (y = { alias: null, args: null, kind: "ScalarField", name: "total_trend_posts", storageKey: null }),
                                                            (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                            (F = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [m, (k = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, d], storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "NewsArticleSection",
                                                                kind: "LinkedField",
                                                                name: "sections",
                                                                plural: !0,
                                                                selections: [
                                                                    d,
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
                                                                            (S = { kind: "InlineFragment", selections: [{ alias: "inline_header", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "InlineHeader", abstractKey: null }),
                                                                            (f = { kind: "InlineFragment", selections: [{ alias: "text", args: null, kind: "ScalarField", name: "content", storageKey: null }], type: "TextBlock", abstractKey: null }),
                                                                            (R = { kind: "InlineFragment", selections: [{ alias: "website", args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "content", plural: !1, selections: [(b = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "cached_page_url", storageKey: null }), (h = { alias: null, args: null, kind: "ScalarField", name: "creator", storageKey: null }), (v = { alias: null, args: null, kind: "ScalarField", name: "date_last_crawled", storageKey: null }), (w = { alias: null, args: null, kind: "ScalarField", name: "date_published", storageKey: null }), (L = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (x = { alias: null, args: null, kind: "ScalarField", name: "favicon", storageKey: null }), (I = { alias: null, args: null, kind: "ScalarField", name: "favicon_base64", storageKey: null }), (Z = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), (A = { alias: null, args: null, kind: "ScalarField", name: "language", storageKey: null }), (E = { alias: null, args: null, kind: "ScalarField", name: "parsed_text", storageKey: null }), ($ = { alias: null, args: null, kind: "ScalarField", name: "site_name", storageKey: null }), (z = { alias: null, args: null, kind: "ScalarField", name: "snippet", storageKey: null }), (C = { alias: null, args: null, kind: "ScalarField", name: "time_accessed", storageKey: null }), d, (N = { alias: null, args: null, kind: "ScalarField", name: "media_name", storageKey: null }), m], storageKey: null }], type: "WebsiteBlock", abstractKey: null }),
                                                                            (D = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: o, storageKey: null }], type: "PostBlock", abstractKey: null }),
                                                                            (q = { kind: "InlineFragment", selections: [(M = { alias: null, args: null, kind: "ScalarField", name: "last_time_updated", storageKey: null }), (P = { alias: null, args: null, kind: "ScalarField", name: "question", storageKey: null }), { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [(B = { alias: null, args: null, kind: "ScalarField", name: "num_posts", storageKey: null }), (W = { alias: null, args: null, kind: "ScalarField", name: "sentiment_type", storageKey: null }), (H = { alias: null, args: null, kind: "ScalarField", name: "sentiment_value", storageKey: null }), k], storageKey: null }, (Q = { alias: null, args: null, kind: "ScalarField", name: "sentiment_types", storageKey: null }), (V = { alias: null, args: null, kind: "ScalarField", name: "trend_id", storageKey: null })], type: "TrendSentiment", abstractKey: null }),
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (G = { alias: null, args: null, concreteType: "GrokBraveSearch", kind: "LinkedField", name: "sources", plural: !0, selections: [b, T, h, v, w, L, x, I, Z, A, E, $, z, C, d, m, N], storageKey: null }),
                                                            (O = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: o, storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (j = { alias: null, args: null, concreteType: "TrendSentiment", kind: "LinkedField", name: "sentiment_data", plural: !1, selections: [V, P, M, Q, { alias: null, args: null, concreteType: "SentimentScore", kind: "LinkedField", name: "sentiment_scores", plural: !0, selections: [W, H, B, k], storageKey: null }], storageKey: null }),
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useNewsArticleQuery", selections: [{ alias: "newsArticleResult", args: i, concreteType: "AiTrendResults", kind: "LinkedField", name: "ai_trend_by_rest_id", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(J = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [s, { alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [t, r, u, c, d, m, g, y, p, F, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [d, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [J, K, _, S, f, R, D, q], storageKey: null }], storageKey: null }, G, O], storageKey: null }, j, t], type: "AiTrend", abstractKey: null }], storageKey: null }, t], storageKey: null }] },
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewsLiveTimelineSidebar.2b0880ba.js.map

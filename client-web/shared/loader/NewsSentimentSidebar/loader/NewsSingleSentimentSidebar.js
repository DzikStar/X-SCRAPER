"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.NewsSentimentSidebar~loader.NewsSingleSentimentSidebar"],
    {
        254274: (e, t, n) => {
            n.r(t), n.d(t, { BetaText: () => f, HeaderText: () => g, default: () => k });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(107267),
                r = n(731708),
                s = n(392237),
                o = n(674132),
                c = n.n(o),
                d = n(306677),
                u = n(725405),
                m = n(507504),
                p = n(2025),
                y = n(399398);
            const g = c().af781666,
                f = c().ad35153e,
                h = 1,
                b = 2;
            function k() {
                const e = (0, u.Z)(),
                    t = (0, i.useHistory)(),
                    n = (0, m.Z)({ limit: 3 }),
                    s = a.useCallback(() => {
                        e.scribe({ element: "news_sentiment_sidebar", action: "impression" });
                    }, [e]),
                    o = a.useMemo(() => n.filter((e) => e.sentiment).slice(0, b), [n]);
                return o.length < h
                    ? null
                    : a.createElement(
                          y.g,
                          null,
                          a.createElement(d.D, { id: "news_sentiment_sidebar", onFullyVisible: s, position: "top", testID: "news_sentiment_sidebar" }),
                          a.createElement(
                              l.Z,
                              { style: v.container },
                              a.createElement(l.Z, { style: v.headerContainer }, a.createElement(r.ZP, { style: v.headerText, weight: "heavy" }, g), a.createElement(l.Z, { style: v.betaLabel }, a.createElement(r.ZP, { style: v.betaLabelText, weight: "bold" }, f))),
                              a.createElement(
                                  l.Z,
                                  { style: v.sentimentsContainer },
                                  o.map(
                                      (n) =>
                                          n.sentiment &&
                                          a.createElement(p.Z, {
                                              hoveredContainerStyle: v.hoveredSentiment,
                                              key: `${n.id}-sentiment-sidebar`,
                                              onClick: () => {
                                                  e.scribe({ element: "news_sentiment_sidebar_article", action: "click", data: { event_info: n.id } }), t.push(`/i/news/a/${n.id}`);
                                              },
                                              percentageScoreStyle: v.percentageScore,
                                              questionStyle: v.questionStyle,
                                              sentiment: n.sentiment,
                                              showPercentages: !0,
                                              style: v.sentiment,
                                              typeStyle: v.typeStyle,
                                          }),
                                  ),
                              ),
                          ),
                      );
            }
            const v = s.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentimentsContainer: { display: "flex", flexDirection: "column" }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, hoveredSentiment: { backgroundColor: e.colors.gray0 }, questionStyle: { color: e.colors.brandColor, fontWeight: e.fontWeights.medium, fontSize: e.fontSizes.body }, typeStyle: { color: e.colors.brandColor }, percentageScore: { fontSize: e.fontSizes.headline2 } }));
        },
        507504: (e, t, n) => {
            n.d(t, { Z: () => E });
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
                p,
                y,
                g,
                f,
                h,
                b,
                k,
                v,
                S = {
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
                                                                    (p = { alias: null, args: null, kind: "ScalarField", name: "live_article", storageKey: null }),
                                                                    (g = { alias: null, args: null, concreteType: "NewsTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ alias: null, args: null, concreteType: "NewsTimelineEvent", kind: "LinkedField", name: "events", plural: !0, selections: [d, (y = { alias: null, args: null, kind: "ScalarField", name: "timestamp", storageKey: null })], storageKey: null }, c], storageKey: null }),
                                                                    (f = {
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
                                                                    (h = { alias: null, args: null, concreteType: "Post", kind: "LinkedField", name: "posts", plural: !0, selections: s, storageKey: null }),
                                                                    { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [(b = { kind: "InlineFragment", selections: [{ alias: "post", args: null, concreteType: "Post", kind: "LinkedField", name: "content", plural: !1, selections: s, storageKey: null }], type: "PostBlock", abstractKey: null })], storageKey: null }], storageKey: null },
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(v = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, o, c, d, u, m, p, g, f, h, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [v, b], storageKey: null }], storageKey: null }], storageKey: null }, k, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            S.hash = "3801ff63426a8e5a7f7864683169d9be";
            const _ = S;
            n(585488);
            var x = n(712696),
                w = n.n(x);
            const C = _;
            const E = function ({ limit: e }) {
                const t = w()(C, { limit: e }).deepsearchArticlesHomePageResult || [],
                    n = [];
                return (
                    t.forEach((e) => {
                        e.trend_results && e.trend_results.result && e.trend_results.result.deepsearch_news_articles && n.push({ ...e.trend_results.result.deepsearch_news_articles, sentiment: e.trend_results.result.sentiment_data || void 0 });
                    }),
                    n
                );
            };
        },
        246728: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(537392),
                l = n(392237);
            function i() {
                return { isCompactLayout: (0, a.Zx)(({ containerWidth: e }) => e <= l.default.theme.breakpoints.xLarge) };
            }
        },
        695356: (e, t, n) => {
            function a(e, t) {
                o(e)({ element: "news-open-article", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function l(e, t) {
                o(e)({ element: "news-article-card-impression", action: "view", data: { impression_id: t.articleId } });
            }
            function i(e, t) {
                o(e)({ element: "news-page-session-duration", action: "focus", data: { duration_ms: t.durationMs, url: t.url, event_info: t.sessionId } });
            }
            function r(e, t) {
                o(e)({ element: "news-open-post-source", action: "click", data: { event_info: JSON.stringify(t) } });
            }
            function s(e, t) {
                o(e)({ element: "news-article-section-impression", action: "view", data: { impression_id: t.articleId, event_info: JSON.stringify({ sectionIdx: t.sectionIdx, totalNumSections: t.totalNumSections }) } });
            }
            n.d(t, { E7: () => i, Ib: () => a, U8: () => r, _$: () => l, xi: () => s });
            const o = (e) => (t) => {
                e.scribe({ ...t, data: { url: window.location.href, ...t.data } });
            };
        },
        931173: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                l = n(325686),
                i = n(530732),
                r = n(823161),
                s = n(366635),
                o = n(966886),
                c = n(392237),
                d = n(650028),
                u = n(451051),
                m = n(103737),
                p = n(125363),
                y = n(836255);
            function g({ containerStyle: e, isPreview: t = !1, numberOfLines: n, onClick: g, postId: h, style: b, tweetTextStyle: k }) {
                const v = a.useMemo(() => y.Z.createHydratorForTweet(h), [h]),
                    S = (0, p.v9)(v);
                if (!S) return null;
                const { created_at: _, text: x, user: w } = S;
                return a.createElement(
                    i.Z,
                    {
                        onClick: () => {
                            g && g(), window.open(`https://x.com${S.permalink}`, "_blank");
                        },
                        style: [f.interactiveContainer, e],
                        withoutInteractiveStyles: !0,
                    },
                    ({ isHovered: e }) =>
                        a.createElement(
                            l.Z,
                            { style: [f.container, e ? f.hoveredContainer : void 0, b] },
                            a.createElement(l.Z, { style: f.headerContainer }, a.createElement(l.Z, { style: f.nameContainer }, a.createElement(r.default, { "aria-label": w.name, borderColor: "gray700", borderWidth: "small", screenName: w.screen_name, size: t ? "medium" : "large", uri: w.profile_image_url_https, withHoverCard: !0, withLink: !0 }), a.createElement(s.Z, { affiliateBadgeInfo: w.highlightedLabel, isBlueVerified: w.is_blue_verified, isVerified: w.verified, name: w.name, nameSize: t ? "subtext2" : "subtext1", screenName: w.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: f.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: w.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), a.createElement(o.Z, { humanReadable: !1, style: [f.timestamp, { fontSize: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2, lineHeight: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2 }], timestamp: _ })),
                            S.in_reply_to_screen_name && a.createElement(d.ZP, { displayTextRange: S.display_text_range, inReplyToName: S.in_reply_to_name, inReplyToScreenName: S.in_reply_to_screen_name, inReplyToUserIdStr: S.in_reply_to_user_id_str, linkType: d.ZP.ReplyContextLinkTypes.none, size: t ? "subtext2" : "subtext1", tweetPermalink: S.permalink }),
                            a.createElement(u.Z, { displayTextRange: S.display_text_range, entities: S.entities, isCondensed: t, numberOfLines: n, style: [f.tweetText, k], text: x }),
                            (!t || !x) &&
                                (S.extended_entities?.media ?? []).map((e) => {
                                    const n = { ...e, ext_alt_text: void 0 };
                                    return a.createElement(m.Z, { displayMediaTags: !1, hasSensitiveMedia: S.possibly_sensitive, isCondensed: t, key: `media_${S.id_str}_${e.id_str}`, mediaContentStyles: f.media, mediaDetails: [n], mediaVisibilityResults: S.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: S.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !t });
                                }),
                        ),
                );
            }
            const f = c.default.create((e) => ({ interactiveContainer: { height: "100%", flex: 1 }, container: { borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, borderRadius: e.borderRadii.medium, backgroundColor: "transparent", padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%", flex: 1 }, hoveredContainer: { backgroundColor: e.colors.gray50 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2 }, media: {} }));
        },
        2025: (e, t, n) => {
            n.d(t, { Z: () => O });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(392237),
                r = n(530732),
                s = n(731708),
                o = n(154003),
                c = n(757483),
                d = n(125363),
                u = n(390387),
                m = n(246728),
                p = n(807896),
                y = n(18205),
                g = n(632908),
                f = n(755484),
                h = n(725556),
                b = n(103131),
                k = n(735081),
                v = n(663004),
                S = n(815045),
                _ = n(194504),
                x = n(187669),
                w = n(949626);
            function C(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function E({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        i = C(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        r = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        l.Z,
                        { style: Z.tooltip },
                        a.createElement(s.ZP, { style: Z.tooltipDate }, i),
                        a.createElement(
                            l.Z,
                            { style: Z.percentages },
                            r.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(l.Z, { key: e.label, style: Z.tooltipType }, a.createElement(l.Z, { style: { ...Z.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(s.ZP, { style: Z.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(l.Z, null), a.createElement(s.ZP, { style: Z.tooltipValue }, t), a.createElement(s.ZP, { style: Z.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const Z = i.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            var T = n(818199),
                P = n(823161),
                F = n(725405),
                z = n(836255),
                K = n(695356),
                L = n(931173);
            function I({ cx: e, cy: t, postId: n }) {
                const l = (0, F.Z)(),
                    i = a.useMemo(() => z.Z.createHydratorForTweet(n), [n]),
                    s = (0, d.v9)(i);
                if (!s) return null;
                const { user: o } = s,
                    c = () => {
                        (0, K.U8)(l, { postId: n });
                    };
                return a.createElement(
                    "g",
                    null,
                    a.createElement(
                        "foreignObject",
                        { height: 40, width: 40, x: e - 20, y: t - 20 },
                        a.createElement(
                            T.Z,
                            { renderContent: () => a.createElement(L.Z, { containerStyle: D.referencePostContainer, isPreview: !0, numberOfLines: 3, onClick: c, postId: n }), wrapperStyle: D.referenceHoverWrapper },
                            a.createElement(
                                r.Z,
                                {
                                    onClick: () => {
                                        c(), window.open(`https://x.com${s.permalink}`, "_blank");
                                    },
                                    style: D.referenceDotPost,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(P.default, { screenName: o?.screen_name, shape: "circle", size: "small", style: [D.userAvatar, e ? D.hoveredUserAvatar : void 0], uri: o?.profile_image_url_https, withLink: !1 }),
                            ),
                        ),
                    ),
                );
            }
            const D = i.default.create((e) => ({ referenceHoverWrapper: { width: "100%", height: "100%" }, referencePostContainer: { width: 300 }, referenceDotPost: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, userAvatar: { transition: "all 0.2s ease", transform: "scale(1)", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.8)" }, "60%": { opacity: 1, transform: "scale(1.2)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease-out" }, hoveredUserAvatar: { cursor: "pointer", transform: "scale(1.2)" } })),
                N = "news-sentiment-recharts";
            function $({ chartData: e, isBlurred: t, typeMetadata: n }) {
                const [o, d] = a.useState({}),
                    u = `line-chart-${Object.keys(o).join("-")}`,
                    m = t ? 100 : 200;
                (0, x.q)(() => {
                    if (document.getElementById(N)) return;
                    const e = document.createElement("style");
                    e.setAttribute("id", N), (e.textContent = `\n      .${N} .recharts-responsive-container {\n        width: 102% !important;\n      }\n\n      .${N} .recharts-surface {\n        overflow: visible;\n      }\n    `);
                    const t = document.head;
                    return (
                        t && t.appendChild(e),
                        () => {
                            const e = document.getElementById(N);
                            e && e.remove();
                        }
                    );
                });
                const Z = a.useCallback(
                        (e) => {
                            const t = { ...o };
                            o[e] ? delete t[e] : (t[e] = !0), d(t);
                        },
                        [o],
                    ),
                    T = a.useCallback((e) => C(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    P = Object.keys(o),
                    F = a.useMemo(() => {
                        if (!e.length) return [];
                        const t = [];
                        for (const a of e) {
                            const e = Object.keys(a);
                            for (const l of e)
                                if (l.endsWith("-post")) {
                                    const e = Number(l.split("-post")[0]),
                                        i = Object.values(n).find((t) => t.idx === e)?.label || "",
                                        r = a[l].toString();
                                    (P.length && !o[i]) || !r || t.push({ timestamp: a.timestamp, value: Number(a[`${e}-value`]), type: i || "", postId: r });
                                }
                        }
                        return t;
                    }, [e, n, P, o]);
                return a.createElement(
                    l.Z,
                    { style: [R.container, t ? R.blur : void 0] },
                    a.createElement(
                        _.Z,
                        { buttonsContainerStyle: R.typesContent, style: R.types },
                        Object.keys(n).map((e) => {
                            const t = n[e];
                            return a.createElement(r.Z, { key: `${e}-toggle`, onClick: () => Z(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(l.Z, { style: [R.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, P.length > 0 && !P.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(s.ZP, { style: R.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        l.Z,
                        { style: R.lineChart },
                        a.createElement(
                            w.Z,
                            { className: N },
                            a.createElement(
                                y.h,
                                { height: m },
                                a.createElement(
                                    g.w,
                                    { data: e, height: m, key: u },
                                    a.createElement(f.q, { fillOpacity: 0.6, horizontal: !0, stroke: i.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(h.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: R.tick, tickFormatter: T, tickLine: !1, type: "number" }),
                                    a.createElement(b.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: R.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(k.u, { content: a.createElement(E, null), cursor: { stroke: i.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(n).map((e) => (o[e] || 0 === P.length ? a.createElement(v.x, { activeDot: !0, connectNulls: !0, dataKey: `${n[e].idx}-value`, dot: !1, isAnimationActive: !1, key: `line-chart-${e}`, stroke: n[e].color, strokeWidth: 2, type: "monotone" }) : null)),
                                    F.map((e) => a.createElement(S.q, { alwaysShow: !0, isFront: !0, key: `reference-post-${e.postId}`, shape: (t) => a.createElement(I, (0, p.Z)({}, t, { postId: e.postId })), x: e.timestamp, y: e.value })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const R = i.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                A = [i.default.theme.colors.blue300, i.default.theme.colors.yellow300, i.default.theme.colors.orange300, i.default.theme.colors.green300, i.default.theme.colors.magenta300, i.default.theme.colors.plum300, i.default.theme.colors.red300, i.default.theme.colors.purple300, i.default.theme.colors.teal300];
            const H = "What do people think?";
            function O({ containerStyle: e, hoveredContainerStyle: t, onClick: n, percentageScoreContainerStyle: c, percentageScoreStyle: p, questionStyle: y, sentiment: g, showPercentages: f, style: h, typeStyle: b }) {
                const k = (0, d.v9)(u.Qb),
                    { chartData: v, typeMetadata: S } = (function ({ sentiment: e }) {
                        return a.useMemo(() => {
                            const t = {},
                                n = {};
                            return (
                                e.sentiment_types.forEach((t, a) => {
                                    n[t] = { idx: a, label: t, color: A[a % e.sentiment_types.length] };
                                }),
                                [...(e.sentiment_scores ?? [])].forEach((e) => {
                                    const a = Number(e.timestamp),
                                        l = a.toString();
                                    t[l] || (t[l] = { timestamp: a }), (t[l][`${n[e.sentiment_type].idx}-post`] = e.post_id || ""), (t[l][`${n[e.sentiment_type].idx}-num-posts`] = e.num_posts || ""), (t[l][`${n[e.sentiment_type].idx}-value`] = Number(e.sentiment_value)), (t[l][`${n[e.sentiment_type].idx}-label`] = e.sentiment_type), (t[l][`${n[e.sentiment_type].idx}-color`] = n[e.sentiment_type].color);
                                }),
                                { chartData: Object.values(t).sort((e, t) => e.timestamp - t.timestamp), typeMetadata: n }
                            );
                        }, [e]);
                    })({ sentiment: g }),
                    { isCompactLayout: _ } = (0, m.Z)(),
                    x = a.useMemo(() => {
                        if (!v.length) return [];
                        const e = v[v.length - 1],
                            t = [];
                        return (
                            Object.keys(S).forEach((n) => {
                                const a = `${S[n].idx}-value`,
                                    l = `${S[n].idx}-num-posts`;
                                void 0 !== e[a] && t.push({ type: n, value: Number(e[a]), color: S[n].color, numPosts: Number(e[l]) });
                            }),
                            t
                        );
                    }, [v, S]);
                if (!v.length) return null;
                if (f && x.length > 0) {
                    const o = 3,
                        d = {},
                        u = [...x].sort((e, t) => t.value - e.value),
                        m = [i.default.theme.colors.blue700, i.default.theme.colors.blue500, i.default.theme.colors.blue300];
                    u.forEach((e, t) => {
                        d[e.value] = m[t];
                    });
                    const f = x.slice(0, o),
                        k = f.reduce((e, t) => e + t.numPosts, 0);
                    return a.createElement(r.Z, { interactive: !!n, onClick: n, style: [M.interactivePercentageContainer, _ ? M.compactInteractivePercentageContainer : void 0, e], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                        a.createElement(
                            l.Z,
                            { style: [M.percentagesContainer, _ ? M.compactPercentagesContainer : void 0, e && n ? M.hoveredPercentagesContainer : void 0, h, e && n && t] },
                            a.createElement(s.ZP, { style: [M.percentageQuestion, y] }, g.question),
                            a.createElement(
                                l.Z,
                                { style: [M.percentageScoresContainer, _ ? M.compactPercentageScoresContainer : void 0, c] },
                                f.map((e) => a.createElement(l.Z, { key: `score-${e.type}`, style: M.percentageScore }, a.createElement(s.ZP, { style: [M.percentageType, b] }, e.type), a.createElement(s.ZP, { style: [M.percentagePercentage, { color: d[e.value] }, p], weight: "bold" }, `${e.value}%`))),
                            ),
                            a.createElement(s.ZP, { style: M.percentageTotalPosts, weight: "normal" }, `${k} posts`),
                        ),
                    );
                }
                return a.createElement(l.Z, { style: [M.container, h] }, a.createElement(l.Z, { style: M.headerContainer }, a.createElement(l.Z, { style: M.questionContainer }, a.createElement(s.ZP, { style: M.title, weight: "bold" }, H), a.createElement(s.ZP, { style: M.question }, g.question))), a.createElement(l.Z, { style: M.visibilityContainer }, a.createElement($, { chartData: v, isBlurred: !k, typeMetadata: S }), !k && a.createElement(l.Z, { style: M.loggedOutContainer }, a.createElement(o.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))));
            }
            const M = i.default.create((e) => ({ interactivePercentageContainer: { flex: 1 }, compactInteractivePercentageContainer: { width: "100%", flex: 1 }, percentagesContainer: { padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, width: "100%", display: "flex", flexDirection: "column", transition: "background-color 0.2s ease", gap: e.spaces.space8 }, compactPercentagesContainer: { width: "100%" }, hoveredPercentagesContainer: { backgroundColor: e.colors.gray50, cursor: "pointer" }, percentageQuestion: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentageScoresContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space32, width: "100%", maxWidth: "100%" }, compactPercentageScoresContainer: { width: "100%", gap: "unset", justifyContent: "space-between" }, percentageScore: { display: "flex", flexDirection: "column" }, percentageType: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentagePercentage: { fontSize: e.fontSizes.title4 }, percentageTotalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.NewsSentimentSidebar~loader.NewsSingleSentimentSidebar.deb0e58a.js.map

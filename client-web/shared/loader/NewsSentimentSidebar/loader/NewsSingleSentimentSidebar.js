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
                              { style: _.container },
                              a.createElement(l.Z, { style: _.headerContainer }, a.createElement(r.ZP, { style: _.headerText, weight: "heavy" }, g), a.createElement(l.Z, { style: _.betaLabel }, a.createElement(r.ZP, { style: _.betaLabelText, weight: "bold" }, f))),
                              a.createElement(
                                  l.Z,
                                  { style: _.sentimentsContainer },
                                  o.map(
                                      (n) =>
                                          n.sentiment &&
                                          a.createElement(p.Z, {
                                              articleId: n.id,
                                              hoveredContainerStyle: _.hoveredSentiment,
                                              key: `${n.id}-sentiment-sidebar`,
                                              onClick: () => {
                                                  e.scribe({ element: "news_sentiment_sidebar_article", action: "click", data: { event_info: n.id } }), t.push(`/i/news/a/${n.id}`);
                                              },
                                              percentageScoreStyle: _.percentageScore,
                                              questionStyle: _.questionStyle,
                                              sentiment: n.sentiment,
                                              showPercentages: !0,
                                              style: _.sentiment,
                                              typeStyle: _.typeStyle,
                                          }),
                                  ),
                              ),
                          ),
                      );
            }
            const _ = s.default.create((e) => ({ container: { flex: 1 }, headerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space4, padding: e.spaces.space16 }, headerText: { fontSize: e.fontSizes.headline1 }, betaLabel: { display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: e.colors.blue0, borderRadius: e.borderRadii.medium, paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space2 }, betaLabelText: { color: e.colors.blue500, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, sentimentsContainer: { display: "flex", flexDirection: "column" }, sentiment: { padding: e.spaces.space16, paddingVertical: e.spaces.space12, border: "none", backgroundColor: "transparent", gap: e.spaces.space8, borderRadius: 0 }, hoveredSentiment: { backgroundColor: e.colors.gray0 }, questionStyle: { color: e.colors.brandColor, fontWeight: e.fontWeights.medium, fontSize: e.fontSizes.body }, typeStyle: { color: e.colors.brandColor }, percentageScore: { fontSize: e.fontSizes.headline2 } }));
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
                _,
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useHomeNewsArticlesQuery", selections: [{ alias: "deepsearchArticlesHomePageResult", args: l, concreteType: "DeepsearchArticleHomePage", kind: "LinkedField", name: "deepsearch_articles_home_page", plural: !0, selections: [{ alias: null, args: null, concreteType: "AiTrendResults", kind: "LinkedField", name: "trend_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "NewsArticle", kind: "LinkedField", name: "deepsearch_news_articles", plural: !1, selections: [i, r, o, c, d, u, m, p, g, f, h, { alias: null, args: null, concreteType: "NewsArticleSection", kind: "LinkedField", name: "sections", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [_, b], storageKey: null }], storageKey: null }], storageKey: null }, k, i], type: "AiTrend", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
                    params: { id: "gTItUBXHQzDYz5zGcfHOSw", metadata: {}, name: "useHomeNewsArticlesQuery", operationKind: "query", text: null },
                };
            S.hash = "3801ff63426a8e5a7f7864683169d9be";
            const v = S;
            n(585488);
            var x = n(712696),
                w = n.n(x);
            const C = v;
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
                const _ = a.useMemo(() => y.Z.createHydratorForTweet(h), [h]),
                    S = (0, p.v9)(_);
                if (!S) return null;
                const { created_at: v, text: x, user: w } = S;
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
                            a.createElement(l.Z, { style: f.headerContainer }, a.createElement(l.Z, { style: f.nameContainer }, a.createElement(r.default, { "aria-label": w.name, borderColor: "gray700", borderWidth: "small", screenName: w.screen_name, size: t ? "medium" : "large", uri: w.profile_image_url_https, withHoverCard: !0, withLink: !0 }), a.createElement(s.Z, { affiliateBadgeInfo: w.highlightedLabel, isBlueVerified: w.is_blue_verified, isVerified: w.verified, name: w.name, nameSize: t ? "subtext2" : "subtext1", screenName: w.screen_name, screenNameSize: t ? "subtext3" : "subtext2", screenNameStyle: f.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: w.verified_type, withHoverCard: !0, withLink: !0, withStackedLayout: !0 })), a.createElement(o.Z, { humanReadable: !1, style: [f.timestamp, { fontSize: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2, lineHeight: t ? c.default.theme.fontSizes.subtext3 : c.default.theme.fontSizes.subtext2 }], timestamp: v })),
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
            n.d(t, { Z: () => M });
            n(136728);
            var a = n(202784),
                l = n(325686),
                i = n(392237),
                r = n(530732),
                s = n(731708),
                o = n(154003),
                c = n(757483),
                d = n(306677),
                u = n(725405),
                m = n(125363),
                p = n(390387),
                y = n(246728),
                g = n(695356),
                f = n(807896),
                h = n(18205),
                b = n(632908),
                k = n(755484),
                _ = n(725556),
                S = n(103131),
                v = n(735081),
                x = n(663004),
                w = n(815045),
                C = n(194504),
                E = n(187669),
                Z = n(949626);
            function T(e, t) {
                const { timeZone: n } = window.Intl.DateTimeFormat().resolvedOptions();
                return new Intl.DateTimeFormat("en-US", { month: t && t.month ? "short" : void 0, day: t && t.day ? "numeric" : void 0, hour: t && t.hour ? "numeric" : void 0, minute: t && t.minute ? "numeric" : void 0, year: t && t.year ? "numeric" : void 0, timeZoneName: t && t.timeZoneName ? "short" : void 0, timeZone: t && t.timeZoneName ? n : void 0 }).format(e);
            }
            function F({ active: e, label: t, payload: n }) {
                if ((a.useEffect(() => {}, []), e && n && n.length)) {
                    const e = [];
                    n.forEach((t) => {
                        const n = t.dataKey.split("-")[0];
                        e.push({ label: t.payload[`${n}-label`], percentage: Number(t.payload[`${n}-value`]), color: t.payload[`${n}-color`], postId: t.payload[`${n}-post`], numPosts: Number(t.payload[`${n}-num-posts`]) });
                    });
                    const t = n[0].payload.timestamp,
                        i = T(new Date(t), { year: !0, month: !0, day: !0, hour: !0, minute: !0 }),
                        r = e.sort((e, t) => t.percentage - e.percentage);
                    return a.createElement(
                        l.Z,
                        { style: P.tooltip },
                        a.createElement(s.ZP, { style: P.tooltipDate }, i),
                        a.createElement(
                            l.Z,
                            { style: P.percentages },
                            r.map((e) => {
                                const t = `${e.percentage}%`;
                                return a.createElement(l.Z, { key: e.label, style: P.tooltipType }, a.createElement(l.Z, { style: { ...P.tooltipTypeColor, backgroundColor: e.color } }), a.createElement(s.ZP, { style: P.tooltipTypeLabel, weight: "bold" }, e.label), a.createElement(l.Z, null), a.createElement(s.ZP, { style: P.tooltipValue }, t), a.createElement(s.ZP, { style: P.tooltipDate }, `(${e.numPosts} post${e.numPosts > 1 ? "s" : ""})`));
                            }),
                        ),
                    );
                }
                return null;
            }
            const P = i.default.create((e) => ({ tooltip: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.medium, padding: e.spaces.space8, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3 }, percentages: { display: " flex", flexDirection: "column", alignItems: "flex-start", gap: e.spaces.space8 }, tooltipType: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, tooltipTypeColor: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8 }, tooltipTypeLabel: { fontSize: "inherit", lineHeight: "inherit" }, tooltipValue: { fontSize: "inherit", lineHeight: "inherit" }, tooltipDate: { color: e.colors.gray700, fontSize: "inherit", lineHeight: "inherit" } }));
            var I = n(818199),
                z = n(823161),
                K = n(836255),
                L = n(931173);
            function D({ cx: e, cy: t, postId: n }) {
                const l = (0, u.Z)(),
                    i = a.useMemo(() => K.Z.createHydratorForTweet(n), [n]),
                    s = (0, m.v9)(i);
                if (!s) return null;
                const { user: o } = s,
                    c = () => {
                        (0, g.U8)(l, { postId: n });
                    };
                return a.createElement(
                    "g",
                    null,
                    a.createElement(
                        "foreignObject",
                        { height: 40, width: 40, x: e - 20, y: t - 20 },
                        a.createElement(
                            I.Z,
                            { renderContent: () => a.createElement(L.Z, { containerStyle: N.referencePostContainer, isPreview: !0, numberOfLines: 3, onClick: c, postId: n }), wrapperStyle: N.referenceHoverWrapper },
                            a.createElement(
                                r.Z,
                                {
                                    onClick: () => {
                                        c(), window.open(`https://x.com${s.permalink}`, "_blank");
                                    },
                                    style: N.referenceDotPost,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => a.createElement(z.default, { screenName: o?.screen_name, shape: "circle", size: "small", style: [N.userAvatar, e ? N.hoveredUserAvatar : void 0], uri: o?.profile_image_url_https, withLink: !1 }),
                            ),
                        ),
                    ),
                );
            }
            const N = i.default.create((e) => ({ referenceHoverWrapper: { width: "100%", height: "100%" }, referencePostContainer: { width: 300 }, referenceDotPost: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, userAvatar: { transition: "all 0.2s ease", transform: "scale(1)", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "scale(0.8)" }, "60%": { opacity: 1, transform: "scale(1.2)" }, "100%": { opacity: 1, transform: "scale(1)" } }], animationTimingFunction: "ease-out" }, hoveredUserAvatar: { cursor: "pointer", transform: "scale(1.2)" } })),
                $ = "news-sentiment-recharts";
            function R({ chartData: e, isBlurred: t, typeMetadata: n }) {
                const [o, d] = a.useState({}),
                    u = `line-chart-${Object.keys(o).join("-")}`,
                    m = t ? 100 : 200;
                (0, E.q)(() => {
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
                const p = a.useCallback(
                        (e) => {
                            const t = { ...o };
                            o[e] ? delete t[e] : (t[e] = !0), d(t);
                        },
                        [o],
                    ),
                    y = a.useCallback((e) => T(new Date(e), { month: !0, day: !0, hour: !0 }), []),
                    g = Object.keys(o),
                    P = a.useMemo(() => {
                        if (!e.length) return [];
                        const t = [];
                        for (const a of e) {
                            const e = Object.keys(a);
                            for (const l of e)
                                if (l.endsWith("-post")) {
                                    const e = Number(l.split("-post")[0]),
                                        i = Object.values(n).find((t) => t.idx === e)?.label || "",
                                        r = a[l].toString();
                                    (g.length && !o[i]) || !r || t.push({ timestamp: a.timestamp, value: Number(a[`${e}-value`]), type: i || "", postId: r });
                                }
                        }
                        return t;
                    }, [e, n, g, o]);
                return a.createElement(
                    l.Z,
                    { style: [A.container, t ? A.blur : void 0] },
                    a.createElement(
                        C.Z,
                        { buttonsContainerStyle: A.typesContent, style: A.types },
                        Object.keys(n).map((e) => {
                            const t = n[e];
                            return a.createElement(r.Z, { key: `${e}-toggle`, onClick: () => p(e), withoutInteractiveStyles: !0 }, ({ isHovered: n }) => a.createElement(l.Z, { style: [A.typeContainer, { backgroundColor: c.Z.hexToCss(t.color, 0.5), color: t.color }, n ? { backgroundColor: c.Z.hexToCss(t.color, 0.3) } : void 0, g.length > 0 && !g.includes(e) ? { opacity: 0.5 } : void 0] }, a.createElement(s.ZP, { style: A.type }, t.label)));
                        }),
                    ),
                    a.createElement(
                        l.Z,
                        { style: A.lineChart },
                        a.createElement(
                            Z.Z,
                            { className: $ },
                            a.createElement(
                                h.h,
                                { height: m },
                                a.createElement(
                                    b.w,
                                    { data: e, height: m, key: u },
                                    a.createElement(k.q, { fillOpacity: 0.6, horizontal: !0, stroke: i.default.theme.colors.hoverBlack, strokeDasharray: "1 0", vertical: !1 }),
                                    a.createElement(_.K, { axisLine: !1, dataKey: "timestamp", domain: ["dataMin", "dataMax"], tick: A.tick, tickFormatter: y, tickLine: !1, type: "number" }),
                                    a.createElement(S.B, { axisLine: !1, domain: [0, 100], orientation: "right", tick: A.tick, tickFormatter: (e) => `${e}%`, tickLine: !1 }),
                                    a.createElement(v.u, { content: a.createElement(F, null), cursor: { stroke: i.default.theme.colors.gray200, strokeDasharray: "1 0" }, isAnimationActive: !1 }),
                                    Object.keys(n).map((e) => (o[e] || 0 === g.length ? a.createElement(x.x, { activeDot: !0, connectNulls: !0, dataKey: `${n[e].idx}-value`, dot: !1, isAnimationActive: !1, key: `line-chart-${e}`, stroke: n[e].color, strokeWidth: 2, type: "monotone" }) : null)),
                                    P.map((e) => a.createElement(w.q, { alwaysShow: !0, isFront: !0, key: `reference-post-${e.postId}`, shape: (t) => a.createElement(D, (0, f.Z)({}, t, { postId: e.postId })), x: e.timestamp, y: e.value })),
                                ),
                            ),
                        ),
                    ),
                );
            }
            const A = i.default.create((e) => ({ container: { width: "100%" }, blur: { filter: "blur(5px)" }, types: { width: "100%" }, typesContent: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginVertical: e.spaces.space12 }, typeContainer: { width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, borderRadius: e.borderRadii.xLarge, transition: "all 0.2s ease" }, type: { fontSize: e.fontSizes.subtext2 }, lineChart: { flex: 1, marginTop: e.spaces.space16 }, tick: { fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, color: e.colors.gray900, fontFamily: e.fontFamilies.normal } })),
                H = [i.default.theme.colors.blue300, i.default.theme.colors.yellow300, i.default.theme.colors.orange300, i.default.theme.colors.green300, i.default.theme.colors.magenta300, i.default.theme.colors.plum300, i.default.theme.colors.red300, i.default.theme.colors.purple300, i.default.theme.colors.teal300];
            const O = "What do people think?";
            function M({ articleId: e, containerStyle: t, hoveredContainerStyle: n, onClick: c, percentageScoreContainerStyle: f, percentageScoreStyle: h, questionStyle: b, sentiment: k, showPercentages: _, style: S, typeStyle: v }) {
                const x = (0, u.Z)(),
                    w = (0, m.v9)(p.Qb),
                    { chartData: C, typeMetadata: E } = (function ({ sentiment: e }) {
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
                    })({ sentiment: k }),
                    { isCompactLayout: Z } = (0, y.Z)(),
                    T = a.useMemo(() => {
                        if (!C.length) return [];
                        const e = C[C.length - 1],
                            t = [];
                        return (
                            Object.keys(E).forEach((n) => {
                                const a = `${E[n].idx}-value`,
                                    l = `${E[n].idx}-num-posts`;
                                void 0 !== e[a] && t.push({ type: n, value: Number(e[a]), color: E[n].color, numPosts: Number(e[l]) });
                            }),
                            t
                        );
                    }, [C, E]),
                    F = a.useCallback(() => {
                        (0, g.XB)(x, { articleId: e });
                    }, [e, x]);
                if (!C.length) return null;
                if (_ && T.length > 0) {
                    const e = 3,
                        o = {},
                        u = [...T].sort((e, t) => t.value - e.value),
                        m = [i.default.theme.colors.blue700, i.default.theme.colors.blue500, i.default.theme.colors.blue300];
                    u.forEach((e, t) => {
                        o[e.value] = m[t];
                    });
                    const p = T.slice(0, e),
                        y = p.reduce((e, t) => e + t.numPosts, 0);
                    return a.createElement(r.Z, { interactive: !!c, onClick: c, style: [j.interactivePercentageContainer, Z ? j.compactInteractivePercentageContainer : void 0, t], withoutInteractiveStyles: !0 }, ({ isHovered: e }) =>
                        a.createElement(
                            l.Z,
                            { style: [j.percentagesContainer, Z ? j.compactPercentagesContainer : void 0, e && c ? j.hoveredPercentagesContainer : void 0, S, e && c && n] },
                            a.createElement(d.D, { id: "news_article_sentiment", onFullyVisible: F, position: "top", testID: "news_article_sentiment" }),
                            a.createElement(s.ZP, { style: [j.percentageQuestion, b] }, k.question),
                            a.createElement(
                                l.Z,
                                { style: [j.percentageScoresContainer, Z ? j.compactPercentageScoresContainer : void 0, f] },
                                p.map((e) => a.createElement(l.Z, { key: `score-${e.type}`, style: j.percentageScore }, a.createElement(s.ZP, { style: [j.percentageType, v] }, e.type), a.createElement(s.ZP, { style: [j.percentagePercentage, { color: o[e.value] }, h], weight: "bold" }, `${e.value}%`))),
                            ),
                            a.createElement(s.ZP, { style: j.percentageTotalPosts, weight: "normal" }, `${y} posts`),
                        ),
                    );
                }
                return a.createElement(l.Z, { style: [j.container, S] }, a.createElement(l.Z, { style: j.headerContainer }, a.createElement(l.Z, { style: j.questionContainer }, a.createElement(s.ZP, { style: j.title, weight: "bold" }, O), a.createElement(s.ZP, { style: j.question }, k.question))), a.createElement(l.Z, { style: j.visibilityContainer }, a.createElement(R, { chartData: C, isBlurred: !w, typeMetadata: E }), !w && a.createElement(l.Z, { style: j.loggedOutContainer }, a.createElement(o.ZP, { backgroundColor: "gray50", borderColor: "transparent", link: "/login" }, "Login to view"))));
            }
            const j = i.default.create((e) => ({ interactivePercentageContainer: { flex: 1 }, compactInteractivePercentageContainer: { width: "100%", flex: 1 }, percentagesContainer: { padding: e.spaces.space12, backgroundColor: "transparent", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100, width: "100%", display: "flex", flexDirection: "column", transition: "background-color 0.2s ease", gap: e.spaces.space8 }, compactPercentagesContainer: { width: "100%" }, hoveredPercentagesContainer: { backgroundColor: e.colors.gray50, cursor: "pointer" }, percentageQuestion: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentageScoresContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space32, width: "100%", maxWidth: "100%" }, compactPercentageScoresContainer: { width: "100%", gap: "unset", justifyContent: "space-between" }, percentageScore: { display: "flex", flexDirection: "column" }, percentageType: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, percentagePercentage: { fontSize: e.fontSizes.title4 }, percentageTotalPosts: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 }, container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.2s ease", borderRadius: e.borderRadii.medium, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray200 }, hoveredContainer: { backgroundColor: e.colors.gray400, cursor: "pointer" }, headerContainer: { display: "flex", flexDirection: "row", width: "100%", gap: e.spaces.space16 }, questionContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, width: "100%" }, title: {}, question: {}, visibilityContainer: { position: "relative" }, loggedOutContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", backgroundColor: c.Z.hexToCss(e.colors.gray0, 0.5), display: "flex", justifyContent: "center", alignItems: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.NewsSentimentSidebar~loader.NewsSingleSentimentSidebar.130fb1ba.js.map

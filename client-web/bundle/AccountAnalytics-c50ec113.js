"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-c50ec113"],
    {
        672930: (e, l, a) => {
            a.r(l), a.d(l, { default: () => y });
            const n = {
                fragment: {
                    argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "from_time" }), (s = { defaultValue: null, kind: "LocalArgument", name: "max_results" }), (i = { defaultValue: null, kind: "LocalArgument", name: "query_page_size" }), (r = { defaultValue: null, kind: "LocalArgument", name: "requested_metrics" }), (o = { defaultValue: null, kind: "LocalArgument", name: "to_time" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "ContentPostListQuery",
                    selections: (g = [
                        {
                            alias: null,
                            args: [{ kind: "Literal", name: "safety_level", value: "TweetDetail" }],
                            concreteType: "Viewer",
                            kind: "LinkedField",
                            name: "viewer_v2",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserResults",
                                    kind: "LinkedField",
                                    name: "user_results",
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
                                                (u = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (c = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "ApiUser",
                                                            kind: "LinkedField",
                                                            name: "legacy",
                                                            plural: !1,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "HighlightedUserLabelResponse",
                                                            kind: "LinkedField",
                                                            name: "affiliates_highlighted_label",
                                                            plural: !1,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "HighlightedUserLabel",
                                                                    kind: "LinkedField",
                                                                    name: "label",
                                                                    plural: !1,
                                                                    selections: [
                                                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        {
                                                            alias: null,
                                                            args: [
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "from_time" }], kind: "ObjectValue", name: "from_time" },
                                                                { kind: "Variable", name: "internal_search_query_page_size", variableName: "query_page_size" },
                                                                { kind: "Variable", name: "max_results", variableName: "max_results" },
                                                                { fields: [{ kind: "Variable", name: "iso8601_time", variableName: "to_time" }], kind: "ObjectValue", name: "to_time" },
                                                            ],
                                                            concreteType: "TweetResults",
                                                            kind: "LinkedField",
                                                            name: "tweets_results",
                                                            plural: !0,
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: null,
                                                                    kind: "LinkedField",
                                                                    name: "result",
                                                                    plural: !1,
                                                                    selections: [
                                                                        u,
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            selections: [
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "LegacyTweet",
                                                                                    kind: "LinkedField",
                                                                                    name: "legacy",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: "EntitySet",
                                                                                            kind: "LinkedField",
                                                                                            name: "entities",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: "ApiMediaEntity",
                                                                                                    kind: "LinkedField",
                                                                                                    name: "media",
                                                                                                    plural: !0,
                                                                                                    selections: [
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "type", storageKey: null },
                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "media_url_https", storageKey: null },
                                                                                                        { alias: null, args: null, concreteType: "ApiMediaEntityVideoInfo", kind: "LinkedField", name: "video_info", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null }], storageKey: null },
                                                                                                        {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "ApiMediaEntityOriginalInfo",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "original_info",
                                                                                                            plural: !1,
                                                                                                            selections: [
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                                                                                { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
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
                                                                                    storageKey: null,
                                                                                },
                                                                                {
                                                                                    alias: null,
                                                                                    args: [{ kind: "Variable", name: "requested_metrics", variableName: "requested_metrics" }],
                                                                                    concreteType: "AnayticsMetricsTotalValue",
                                                                                    kind: "LinkedField",
                                                                                    name: "organic_metrics_total",
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_type", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "metric_value", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                                c,
                                                                                { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "reply_to_results", plural: !1, selections: (m = [c, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })]), storageKey: null },
                                                                                { alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: m, storageKey: null },
                                                                                d,
                                                                            ],
                                                                            type: "Tweet",
                                                                            abstractKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                                d,
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        d,
                                                    ],
                                                    type: "User",
                                                    abstractKey: null,
                                                },
                                            ],
                                            storageKey: null,
                                        },
                                        d,
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: 'viewer_v2(safety_level:"TweetDetail")',
                        },
                    ]),
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: { argumentDefinitions: [t, o, s, i, r], kind: "Operation", name: "ContentPostListQuery", selections: g },
                params: { id: "8GMAigEhA0xy4rCM1_p7Fw", metadata: {}, name: "ContentPostListQuery", operationKind: "query", text: null },
            };
            var t, s, i, r, o, u, c, d, m, g;
            n.hash = "b086d4e944add4b3ca1d5f612b3dc59f";
            const y = n;
        },
        411924: (e, l, a) => {
            a.d(l, { CR: () => v, LF: () => L });
            var n = a(552322),
                t = a(202784),
                s = a(713990),
                i = a(777301),
                r = a(326618),
                o = a(446368),
                u = a(746659),
                c = a(612047),
                d = a(808106),
                m = a(364597),
                g = a(152935),
                y = a(598705),
                p = a(430962),
                _ = a(305399),
                f = a(970430),
                k = a(193686);
            const h = "analytics_content_",
                b = { CONTENT_TYPE: `${h}content_type`, SORT_FIELD: `${h}sort_field`, SORT_DIRECTION: `${h}sort_direction`, TIME_RANGE_DAYS: `${h}time_range_days`, TIME_RANGE_FROM: `${h}time_range_from`, TIME_RANGE_TO: `${h}time_range_to` },
                T = (e, l) => {
                    if ("undefined" == typeof window) return l;
                    try {
                        const a = localStorage.getItem(e);
                        return null !== a ? JSON.parse(a) : l;
                    } catch (e) {
                        return l;
                    }
                },
                S = (e, l) => {
                    if ("undefined" != typeof window)
                        try {
                            localStorage.setItem(e, JSON.stringify(l));
                        } catch (e) {}
                },
                x = (e) => {
                    const l = new URL(window.location.href);
                    Object.entries(e).forEach(([e, a]) => {
                        a ? l.searchParams.set(e, a) : l.searchParams.delete(e);
                    }),
                        window.history.replaceState({}, "", l.toString());
                },
                N = (e, l) => ({ from: (0, d.b)(new f.eJ(e)), to: (0, m.i)(new f.eJ(l)) });
            function w() {
                const { posts: e, timeRange: l } = (0, u.r0)(),
                    { analytics: a } = (0, p.M1)(),
                    t = `account_analytics_content_${(0, g.WU)(l.from, "yyyy-MM-dd")}_${(0, g.WU)(l.to, "yyyy-MM-dd")}.csv`;
                return (0, n.jsx)(c.f, {
                    getCSVContent: () =>
                        (function (e, l) {
                            const a = [l.postIdLabel, l.Date, l.postTextLabel, l.PostLink, l.ImpressionsLabel, l.LikesLabel, l.EngagementsLabel, l.BookmarkLabel, l.ShareLabel, l.FollowsLabel, l.RepliesLabel, l.RetweetsLabel, l.ProfileVisitsLabel, l.DetailExpandsLabel, l.UrlClicksLabel, l.HashtagClicksLabel, l.PermalinkClicksLabel],
                                n = e.map((e) => {
                                    const l = e.id,
                                        a = (0, y.fz)(e.createdAt),
                                        n = e.text || "",
                                        t = `https://x.com/${e.author.screenName}/status/${e.id}`,
                                        s = e.rawMetrics || {};
                                    return [(0, y.Bi)(l), (0, y.Bi)(a), (0, y.Bi)(n), (0, y.Bi)(t), s.Impressions?.toString() || "0", s.Likes?.toString() || "0", s.Engagements?.toString() || "0", s.Bookmark?.toString() || "0", s.Share?.toString() || "0", s.Follows?.toString() || "0", s.Replies?.toString() || "0", s.Retweets?.toString() || "0", s.ProfileVisits?.toString() || "0", s.DetailExpands?.toString() || "0", s.UrlClicks?.toString() || "0", s.HashtagClicks?.toString() || "0", s.PermalinkClicks?.toString() || "0"];
                                });
                            return (0, y.NW)(a, n);
                        })(e, a),
                    filename: t,
                    section: "content",
                });
            }
            const F = [
                { days: 7, label: "7D" },
                { days: 14, label: "2W" },
                { days: 28, label: "4W" },
                { days: 90, label: "3M" },
            ];
            function L({ isMockData: e = !1, isWebView: l = !1, url: a = "/analytics/content" }) {
                const [s, c] = (0, t.useState)(!1),
                    [d, m] = (0, t.useState)((0, i.X)(7)),
                    [y, p] = (0, t.useState)("posts"),
                    [f, h] = (0, t.useState)("date"),
                    [L, R] = (0, t.useState)("desc"),
                    E = (0, o.$8)(),
                    K = (0, _.a)("(max-width: 987px)");
                (0, t.useEffect)(() => {
                    if ("undefined" != typeof window && !s) {
                        const e = new URLSearchParams(window.location.search),
                            l = e.get("type");
                        if (l && ["all", "posts", "replies", "community"].includes(l)) p(l);
                        else {
                            const e = T(b.CONTENT_TYPE, null);
                            e && ["all", "posts", "replies", "community"].includes(e) && p(e);
                        }
                        const a = e.get("sort");
                        if (a && ["date", "impressions", "likes", "replies", "reposts"].includes(a)) h(a);
                        else {
                            const e = T(b.SORT_FIELD, null);
                            e && ["date", "impressions", "likes", "replies", "reposts"].includes(e) && h(e);
                        }
                        const n = e.get("dir");
                        if (n && ["asc", "desc"].includes(n)) R(n);
                        else {
                            const e = T(b.SORT_DIRECTION, null);
                            e && ["asc", "desc"].includes(e) && R(e);
                        }
                        const t = e.get("days");
                        if (t && !Number.isNaN(Number(t))) m((0, i.X)(Number(t)));
                        else {
                            const l = e.get("from"),
                                a = e.get("to");
                            if (l && a)
                                try {
                                    const e = new Date(l),
                                        n = new Date(a);
                                    Number.isNaN(e.getTime()) || Number.isNaN(n.getTime()) || m(N(e, n));
                                } catch (e) {}
                            else {
                                const e = T(b.TIME_RANGE_DAYS, null);
                                if (e && !Number.isNaN(Number(e))) m((0, i.X)(Number(e)));
                                else {
                                    const e = T(b.TIME_RANGE_FROM, null),
                                        l = T(b.TIME_RANGE_TO, null);
                                    if (e && l)
                                        try {
                                            const a = new Date(e),
                                                n = new Date(l);
                                            Number.isNaN(a.getTime()) || Number.isNaN(n.getTime()) || m(N(a, n));
                                        } catch (e) {}
                                }
                            }
                        }
                        c(!0);
                    }
                }, [s]),
                    (0, t.useEffect)(() => {
                        if (!s) return;
                        const e = { type: y, sort: f, dir: L },
                            l = F.find((e) => {
                                const l = (0, i.X)(e.days);
                                return l.from.toDateString() === d.from.toDateString() && l.to.toDateString() === d.to.toDateString();
                            });
                        l ? ((e.days = l.days.toString()), (e.from = void 0), (e.to = void 0)) : ((e.days = void 0), (e.from = (0, g.WU)(d.from, "yyyy-MM-dd")), (e.to = (0, g.WU)(d.to, "yyyy-MM-dd"))), x(e), S(b.CONTENT_TYPE, y), S(b.SORT_FIELD, f), S(b.SORT_DIRECTION, L), l ? (S(b.TIME_RANGE_DAYS, l.days), localStorage.removeItem(b.TIME_RANGE_FROM), localStorage.removeItem(b.TIME_RANGE_TO)) : (localStorage.removeItem(b.TIME_RANGE_DAYS), S(b.TIME_RANGE_FROM, (0, g.WU)(d.from, "yyyy-MM-dd")), S(b.TIME_RANGE_TO, (0, g.WU)(d.to, "yyyy-MM-dd")));
                    }, [y, f, L, d, s]);
                const M = (e, l) => {
                    m(e), E.scribe({ action: "select", component: "ContentPage", data: { timeRange: l ? "custom" : "preset" }, element: "TimeRangeSelector", page: "content_analytics", section: "overview" });
                };
                return s
                    ? (0, n.jsx)(u.Gx, {
                          timeRange: d,
                          isMockData: e,
                          children: (0, n.jsxs)("div", {
                              className: "text-text font-chirp flex h-full w-full flex-col gap-4",
                              children: [
                                  K ? null : (0, n.jsx)("div", { className: "w-full max-w-[1400px] mx-auto mt-4", children: (0, n.jsxs)("div", { className: "flex items-center justify-between py-1 overflow-x-auto scrollbar-hide px-4 gap-2", children: [(0, n.jsx)("div", { className: "flex-shrink-0", children: (0, n.jsx)(v, { contentType: y, onChange: p, isMobile: !1 }) }), (0, n.jsx)("div", { className: "flex-shrink-0 z-10 overflow-x-auto", children: (0, n.jsxs)("div", { className: "inline-flex items-center gap-2", children: [(0, n.jsx)(i.W, { timeRange: d, onChange: M, timeRangeOptions: F }), !l && (0, n.jsx)(w, {})] }) })] }) }),
                                  (0, n.jsx)("div", {
                                      className: "w-full max-w-[1400px] mx-auto px-0 min-[988px]:px-4 flex-1 overflow-scroll scrollbar-hide",
                                      children: (0, n.jsx)(r.w, {
                                          contentType: y,
                                          url: a,
                                          onContentTypeChange: p,
                                          timeRange: d,
                                          onTimeRangeChange: M,
                                          timeRangeOptions: F,
                                          sortField: f,
                                          sortDirection: L,
                                          onSortFieldChange: (e) => {
                                              e === f ? R("asc" === L ? "desc" : "asc") : (h(e), R("desc"));
                                          },
                                          onSortDirectionChange: (e) => {
                                              R(e);
                                          },
                                      }),
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)("div", { className: "flex items-center justify-center h-full w-full p-16", children: (0, n.jsx)(k.P, { size: "large" }) });
            }
            function v({ contentType: e, onChange: l, isMobile: a = !1 }) {
                const { analytics: t } = (0, p.M1)();
                return (0, n.jsxs)(s.Ph, { value: e, onValueChange: (e) => l(e), children: [(0, n.jsx)(s.i4, { className: "bg-background text-subtext1 relative w-auto overflow-hidden font-bold " + (a ? "border-none px-0 !ring-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 data-[state=open]:!border-none" : ""), children: (0, n.jsx)(s.ki, { placeholder: t.postsAndReplies, children: "all" === e ? t.postsAndReplies : "posts" === e ? t.postsContentType : "replies" === e ? t.repliesContentType : t.communityContentType }) }), (0, n.jsxs)(s.Bw, { children: [(0, n.jsx)(s.Ql, { value: "posts", children: (0, n.jsx)("div", { className: "flex items-center gap-2", children: t.postsContentType }) }), (0, n.jsx)(s.Ql, { value: "all", children: (0, n.jsx)("div", { className: "flex items-center gap-2", children: t.postsAndReplies }) }), (0, n.jsx)(s.Ql, { value: "replies", children: (0, n.jsx)("div", { className: "flex items-center gap-2", children: t.repliesContentType }) }), (0, n.jsx)(s.Ql, { value: "community", children: (0, n.jsx)("div", { className: "flex items-center gap-2", children: t.communityContentType }) })] })] });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-c50ec113.95f104aa.js.map

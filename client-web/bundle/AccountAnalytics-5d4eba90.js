"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-5d4eba90"],
    {
        585053: (e, l, a) => {
            a.d(l, { t: () => n });
            a(703383);
            const n = a(592802);
        },
        784657: (e, l, a) => {
            a.d(l, { A: () => n });
            a(703383);
            const n = a(761971);
        },
        592802: (e, l, a) => {
            a.r(l), a.d(l, { default: () => R });
            const n = {
                fragment: {
                    argumentDefinitions: [(s = { defaultValue: null, kind: "LocalArgument", name: "end_time_ms" }), (t = { defaultValue: null, kind: "LocalArgument", name: "granularity" }), (i = { defaultValue: null, kind: "LocalArgument", name: "id" }), (r = { defaultValue: null, kind: "LocalArgument", name: "start_time_ms" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "VideoDetailsQuery",
                    selections: [
                        { alias: null, args: (u = [(d = { kind: "Literal", name: "safety_level", value: "UserSelfViewOnly" })]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' },
                        {
                            alias: null,
                            args: (c = [{ kind: "Variable", name: "id", variableName: "id" }, d]),
                            concreteType: "ApiMedia",
                            kind: "LinkedField",
                            name: "api_media_v2",
                            plural: !1,
                            selections: [
                                (m = { alias: null, args: null, kind: "ScalarField", name: "media_key", storageKey: null }),
                                (g = { alias: null, args: null, kind: "ScalarField", name: "video_media_name", storageKey: null }),
                                (x = { alias: null, args: null, concreteType: "VideoViews", kind: "LinkedField", name: "total_views", plural: !1, selections: (p = [(y = { alias: null, args: null, kind: "ScalarField", name: "total", storageKey: null })]), storageKey: null }),
                                (v = { alias: null, args: null, concreteType: "VideoCompletionRate", kind: "LinkedField", name: "video_completion_rate", plural: !1, selections: p, storageKey: null }),
                                (b = { alias: null, args: null, kind: "ScalarField", name: "average_watch_time_for_video", storageKey: null }),
                                (h = { alias: null, args: null, concreteType: "QuartileStageValue", kind: "LinkedField", name: "video_quartile_views", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "stage", storageKey: null }, y], storageKey: null }),
                                (f = {
                                    alias: null,
                                    args: null,
                                    concreteType: "DistributionPercentage",
                                    kind: "LinkedField",
                                    name: "get_country_distribution_for_video",
                                    plural: !0,
                                    selections: (k = [
                                        { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                    ]),
                                    storageKey: null,
                                }),
                                (_ = { alias: null, args: null, concreteType: "DistributionPercentage", kind: "LinkedField", name: "get_client_distribution_for_video", plural: !0, selections: k, storageKey: null }),
                                (j = { alias: null, args: null, kind: "ScalarField", name: "monetized", storageKey: null }),
                                (K = { alias: null, args: null, concreteType: "VideoRevenue", kind: "LinkedField", name: "amplify_revenue", plural: !1, selections: (F = [{ alias: null, args: null, kind: "ScalarField", name: "revenue_usd", storageKey: null }]), storageKey: null }),
                                (w = {
                                    alias: null,
                                    args: [
                                        { kind: "Variable", name: "end_date", variableName: "end_time_ms" },
                                        { kind: "Variable", name: "start_date", variableName: "start_time_ms" },
                                    ],
                                    concreteType: "RevenueByDay",
                                    kind: "LinkedField",
                                    name: "amplify_revenue_by_day",
                                    plural: !0,
                                    selections: [{ alias: null, args: null, concreteType: "VideoRevenue", kind: "LinkedField", name: "revenue", plural: !1, selections: F, storageKey: null }],
                                    storageKey: null,
                                }),
                                (N = {
                                    alias: null,
                                    args: [
                                        { kind: "Variable", name: "end_time_ms", variableName: "end_time_ms" },
                                        { kind: "Literal", name: "event_types", value: ["VideoView", "WatchTime"] },
                                        { kind: "Variable", name: "granularity", variableName: "granularity" },
                                        { kind: "Variable", name: "start_time_ms", variableName: "start_time_ms" },
                                    ],
                                    concreteType: "VideoDetailTimeSeriesResponse",
                                    kind: "LinkedField",
                                    name: "video_detail_time_series",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "MediaCountsTimeSeriesPoint",
                                            kind: "LinkedField",
                                            name: "timeseries",
                                            plural: !0,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "timestamp_ms", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "MediaCounts",
                                                    kind: "LinkedField",
                                                    name: "organic_media_counts",
                                                    plural: !1,
                                                    selections: (T = [
                                                        { alias: null, args: null, kind: "ScalarField", name: "watch_time_ms", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "video_views", storageKey: null },
                                                    ]),
                                                    storageKey: null,
                                                },
                                                { alias: null, args: null, concreteType: "MediaCounts", kind: "LinkedField", name: "promoted_media_counts", plural: !1, selections: T, storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "TotalMediaCounts",
                                            kind: "LinkedField",
                                            name: "total_media_counts",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, concreteType: "MediaCounts", kind: "LinkedField", name: "organic", plural: !1, selections: T, storageKey: null },
                                                { alias: null, args: null, concreteType: "MediaCounts", kind: "LinkedField", name: "promoted", plural: !1, selections: T, storageKey: null },
                                                { alias: null, args: null, concreteType: "MediaCounts", kind: "LinkedField", name: "total", plural: !1, selections: T, storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                                (V = {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media_info",
                                    plural: !1,
                                    selections: [
                                        (L = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "preview_image", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "duration_millis", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "VideoVariant",
                                                    kind: "LinkedField",
                                                    name: "variants",
                                                    plural: !0,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "content_type", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "ApiVideo",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                }),
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [i, r, s, t],
                    kind: "Operation",
                    name: "VideoDetailsQuery",
                    selections: [
                        { alias: null, args: u, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [L, { kind: "InlineFragment", selections: [o, (S = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, S], storageKey: null }], storageKey: 'viewer_v2(safety_level:"UserSelfViewOnly")' },
                        { alias: null, args: c, concreteType: "ApiMedia", kind: "LinkedField", name: "api_media_v2", plural: !1, selections: [m, g, x, v, b, h, f, _, j, K, w, N, V, S], storageKey: null },
                    ],
                },
                params: { id: "KhqMBaG77PNyb4zk99tgvQ", metadata: {}, name: "VideoDetailsQuery", operationKind: "query", text: null },
            };
            var s, t, i, r, d, u, o, c, m, g, y, p, x, v, b, h, k, f, _, j, F, K, w, T, N, L, V, S;
            n.hash = "dca7800c6ca4f8e246d9564caddcc1f3";
            const R = n;
        },
        761971: (e, l, a) => {
            a.r(l), a.d(l, { default: () => p });
            const n = {
                fragment: {
                    argumentDefinitions: (s = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                    kind: "Fragment",
                    metadata: null,
                    name: "VideoMediaPostsQuery",
                    selections: [
                        {
                            alias: null,
                            args: (t = [
                                { kind: "Variable", name: "id", variableName: "id" },
                                { kind: "Literal", name: "safety_level", value: "TweetDetail" },
                            ]),
                            concreteType: "ApiMedia",
                            kind: "LinkedField",
                            name: "api_media_v2",
                            plural: !1,
                            selections: [
                                (i = { alias: null, args: null, kind: "ScalarField", name: "media_key", storageKey: null }),
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "TweetResults",
                                    kind: "LinkedField",
                                    name: "get_media_posts_results",
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
                                                {
                                                    kind: "InlineFragment",
                                                    selections: [
                                                        (r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                                        {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "TweetCore",
                                                            kind: "LinkedField",
                                                            name: "core",
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
                                                                                {
                                                                                    kind: "InlineFragment",
                                                                                    selections: [
                                                                                        r,
                                                                                        (d = {
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
                                                                                        }),
                                                                                        (u = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                        (o = {
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
                                                                                        }),
                                                                                    ],
                                                                                    type: "User",
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
                                                        (c = {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: "LegacyTweet",
                                                            kind: "LinkedField",
                                                            name: "legacy",
                                                            plural: !1,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "favorite_count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "reply_count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "retweet_count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "quote_count", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "bookmark_count", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        }),
                                                        (m = { alias: null, args: null, concreteType: "ViewCountInfo", kind: "LinkedField", name: "views", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null }], storageKey: null }),
                                                    ],
                                                    type: "Tweet",
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
                operation: { argumentDefinitions: s, kind: "Operation", name: "VideoMediaPostsQuery", selections: [{ alias: null, args: t, concreteType: "ApiMedia", kind: "LinkedField", name: "api_media_v2", plural: !1, selections: [i, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "get_media_posts_results", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [r, d, u, o, (y = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, y], storageKey: null }], storageKey: null }, c, m, y], type: "Tweet", abstractKey: null }], storageKey: null }, y], storageKey: null }, y], storageKey: null }] },
                params: { id: "JVRgy2L7ZBq7RCZytKFyaA", metadata: {}, name: "VideoMediaPostsQuery", operationKind: "query", text: null },
            };
            var s, t, i, r, d, u, o, c, m, g, y;
            n.hash = "9871a712f383367564253893bce75f2f";
            const p = n;
        },
        438885: (e, l, a) => {
            a.d(l, { J: () => I });
            var n = a(552322),
                s = a(436059),
                t = a(739219),
                i = a(202784),
                r = a(430962),
                d = a(968025),
                u = a(72100),
                o = a(390278),
                c = a(582440),
                m = a(777301),
                g = a(52277),
                y = a(598705),
                p = a(542372),
                x = a(881120);
            function v() {
                const { analytics: e } = (0, r.M1)(),
                    { videoResult: l } = (0, g.Mh)(),
                    a = l?.get_country_distribution_for_video || [];
                if (0 === a.length) return null;
                const s = a.map((e) => ({ label: x.e[e.name.toLowerCase()] || e.name, value: e.value, icon: (0, y.bK)(e.name) }));
                return (0, n.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 border border-gray-200", children: [(0, n.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold", children: e.countryTitle }), (0, n.jsx)(p.Z, { data: s, title: e.countryTitle, maxItems: 4 })] });
            }
            var b = a(864897);
            function h() {
                const { analytics: e } = (0, r.M1)(),
                    { videoResult: l } = (0, g.Mh)(),
                    a = l?.get_client_distribution_for_video || [],
                    s = Number(l?.total_views?.total || 0);
                if (0 === a.length) return null;
                const t = (0, i.useMemo)(() => (0 === a.length ? [] : a.map((e) => ({ name: e.name, value: e.value, count: Math.round((e.value / 100) * s), formattedCount: (0, y.uf)(Math.round((e.value / 100) * s)), tooltip: `${e.name}: ${(0, y.rl)(e.value)}` }))), [a, s]);
                return (0, n.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 border border-gray-200", children: [(0, n.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold", children: e.deviceTitle }), (0, n.jsx)(b.Z, { data: t })] });
            }
            var k = a(66412);
            function f() {
                const { analytics: e } = (0, r.M1)(),
                    { videoResult: l } = (0, g.Mh)(),
                    a = (l?.video_quartile_views || []).map((e) => ({ stage: e.stage, value: Number(e.total) })),
                    s = 0 === a.length || a.every((e) => 0 === e.value);
                return (0, n.jsxs)("div", { className: "bg-gray-0 flex flex-col rounded-xl p-4 border border-gray-200", children: [(0, n.jsx)("h2", { className: "font-medium text-gray-900 pb-4 md:text-headline2 md:font-bold", children: e.videoCompletion }), s ? (0, n.jsx)("p", { className: "text-gray-600 mt-2", children: e.noDataAvailable }) : (0, n.jsx)("div", { className: "h-[250px] -ml-7", children: (0, n.jsx)(k.y, { data: a }) })] });
            }
            var _ = a(407250),
                j = a(669833),
                F = a(385059);
            function K({ estimatedRevenueVideoDetails: e = !1 }) {
                const { analytics: l } = (0, r.M1)(),
                    { formattedVideo: a } = (0, g.Mh)(),
                    { name: s, views: t, completionRate: i, averageWatchTime: d, monetized: u, publishedDate: o, allTimeRevenue: c } = a,
                    m = null !== c ? (0, y.xy)(Math.round(c), !0) : "-",
                    p = null !== c ? (0, y.xy)(c, !1) : "-";
                return (0, n.jsxs)(_.Zb, { className: "w-full lg:w-[400px] bg-card text-card-foreground", children: [(0, n.jsxs)(_.Ol, { className: "space-y-2", children: [(0, n.jsx)(_.ll, { className: "text-headline2 font-normal line-clamp-2 max-h-[3em] break-words", children: s || l.untitledVideo }), o && (0, n.jsxs)("p", { className: "text-body2 text-muted-foreground", children: [l.UploadedOn, " ", o.toLocaleDateString()] })] }), (0, n.jsxs)(_.aY, { className: "space-y-4", children: [(0, n.jsxs)("div", { className: "flex justify-between items-center", children: [(0, n.jsx)("span", { className: "text-body2 text-foreground", children: l.VideoViewLabel }), (0, n.jsx)("span", { className: "text-headline2 text-foreground", children: void 0 !== t ? (0, y.uf)(t) : "-" })] }), (0, n.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, n.jsx)("span", { className: "text-body2 text-foreground", children: l.VideoCompletionRateLabel }), (0, n.jsx)("span", { className: "text-headline2 text-foreground", children: void 0 !== i ? (0, y.rl)(i) : "-" })] }), (0, n.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, n.jsx)("span", { className: "text-body2 text-foreground", children: l.AverageWatchTimeLabel }), (0, n.jsx)("span", { className: "text-headline2 text-foreground", children: d ?? "-" })] }), u && e && (0, n.jsxs)("div", { className: "flex justify-between items-center border-t border-border pt-4", children: [(0, n.jsx)("span", { className: "text-body2 text-foreground", children: l.EstimatedRevenue }), (0, n.jsx)(j.O, { label: p, delay: 300, offset: 8, children: (0, n.jsxs)("span", { className: "text-headline2 text-green-600 flex items-center gap-1 cursor-help", children: [m, (0, n.jsx)(F.Z, { className: "h-4 w-4 text-green-600" })] }) })] })] })] });
            }
            var w = a(86982),
                T = a(707326),
                N = a(326600),
                L = a(702024),
                V = a(422821),
                S = a(840489),
                R = a(970430);
            function M({ estimatedRevenueVideoDetails: e = !1 }) {
                const { analytics: l } = (0, r.M1)(),
                    { timeSeriesData: a, viewMetrics: s, isFetching: d, timeRange: u, formattedVideo: o } = (0, g.Mh)(),
                    [c, m] = (0, i.useState)(!1),
                    p = (0, i.useRef)(!1),
                    x = (0, i.useRef)(u),
                    v = (0, i.useRef)(!1),
                    [b, h] = (0, i.useState)((0, y.pw)(u) ? "area" : "timeseries"),
                    [k, f] = (0, i.useState)(a),
                    [_, j] = (0, i.useState)(s),
                    [K, M] = (0, i.useState)("daily"),
                    D = (0, i.useMemo)(() => (0, y.pw)(u), [u]),
                    C = (0, i.useMemo)(() => {
                        if (!D) return "daily";
                        if (o.publishedDate) {
                            const e = new R.eJ(),
                                l = o.publishedDate;
                            if ((0, t.w)(e, l) < 14) return "hourly";
                        }
                        return "daily";
                    }, [D, u, o.publishedDate]);
                (0, i.useEffect)(() => {
                    const e = p.current !== D,
                        l = x.current.from.getTime() !== u.from.getTime() || x.current.to.getTime() !== u.to.getTime();
                    (e || l) && v.current && m(!0), (p.current = D), (x.current = u);
                }, [D, u]),
                    (0, i.useEffect)(() => {
                        d || (c ? (h(D ? "area" : "timeseries"), f(a), j(s), M(C), m(!1)) : v.current || (h(D ? "area" : "timeseries"), f(a), j(s), M(C), (v.current = !0)));
                    }, [d, c, D, a, s, C]);
                const A = (0, i.useMemo)(() => Boolean(o.monetized && e), [o.monetized, e]),
                    I = (0, i.useMemo)(() => {
                        const e = [
                            { key: "views", label: l.VideoViewLabel, type: "number", info: l.VideoViewsInfo },
                            { key: "watchTime", label: l.WatchTimeLabel, type: "time", info: l.WatchTimeInfo },
                        ];
                        return A && e.push({ key: "estimatedRevenue", label: l.EstimatedRevenue, type: "revenue", info: l.EstimatedRevenueInfo, valueNode: _.estimatedRevenue ? (0, n.jsxs)("div", { className: "flex items-center gap-2 text-green-600", children: [(0, n.jsx)(V.P, { format: { style: "currency", currency: "USD", notation: _.estimatedRevenue > 9999 ? "compact" : "standard", maximumFractionDigits: 0 }, locales: "en-US", value: _.estimatedRevenue }), (0, n.jsx)(F.Z, { className: "h-5 w-5" })] }) : void 0 }), e;
                    }, [l, A, _.estimatedRevenue]),
                    U = (0, i.useMemo)(() => {
                        const e = { views: _.views, watchTime: _.watchTime };
                        return null !== _.estimatedRevenue && (e.estimatedRevenue = _.estimatedRevenue), e;
                    }, [_]);
                return (0, n.jsxs)("div", { className: "relative", children: [(0, n.jsx)(w.E, { metrics: I, currentTotals: U, timeSeriesData: k, ChartComponent: "area" === b ? N.T : T.q, hoursLabel: l.hours, granularity: K }), (0, n.jsx)("div", { className: (0, S.W)("bg-gray-0/50 pointer-events-none absolute inset-0 flex items-center justify-center z-10 transition-opacity delay-100 duration-200", { "opacity-0": !c, "opacity-100": c }), children: (0, n.jsx)(L.P, { size: "large" }) })] });
            }
            function D() {
                const e = (0, g.Mh)(),
                    { analytics: l } = (0, r.M1)(),
                    a = Number(e?.videoResult?.video_quartile_views?.[0]?.total ?? 0),
                    s = e.viewMetrics.views,
                    t = s && a ? (s / a) * 100 : 0,
                    d = e.formattedVideo.averageWatchTime,
                    u = e.viewMetrics.watchTime / 1e3 / 60 / 60,
                    o = [
                        { label: l.ImpressionsLabel, value: (0, y.uf)(a) },
                        { label: l.ImpressionToViewsLabel, value: (0, y.rl)(t) },
                        { label: l.Views, value: (0, y.uf)(s) },
                        { label: l.AverageWatchTimeLabel, value: d },
                        { label: `${l.WatchTimeLabel} (${l.hours})`, value: (0, y.uf)(u) },
                    ],
                    c = [1, 3],
                    { stepHeights: m, positions: p } = (() => {
                        const e = [],
                            l = [0],
                            a = 100 / (o.length - c.length * (1 - 0.85));
                        let n = 0;
                        for (let s = 0; s < o.length; s++) {
                            const t = c.includes(s) ? 0.85 * a : a;
                            e.push(t), s < o.length - 1 && ((n += t), l.push(n));
                        }
                        return { stepHeights: e, positions: l };
                    })();
                return (0, n.jsxs)("div", {
                    className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200",
                    children: [
                        (0, n.jsx)("div", { className: "text-start", children: (0, n.jsx)("h2", { className: "font-medium text-gray-900 mb-4 md:text-headline2 md:font-bold", children: l.WatchTimeFunnelTitle }) }),
                        (0, n.jsx)("div", {
                            className: "relative w-full mx-auto aspect-square max-w-full h-[min(400px,90vw)]",
                            children: o.map((e, l) => {
                                const a = p[l] || 0,
                                    s = m[l] || 0,
                                    t = a + (l > 0 ? 0.5 : 0),
                                    r = a + s - (l < o.length - 1 ? 0.2 : 0),
                                    d = 100 - 0.6 * t,
                                    u = 100 - 0.6 * r,
                                    g = (100 - d) / 2,
                                    y = (100 - u) / 2,
                                    x = `polygon(\n            ${g}% ${t}%, \n            ${g + d}% ${t}%, \n            ${y + u}% ${r}%, \n            ${y}% ${r}%\n          )`,
                                    v = (0, i.useRef)(null);
                                return (
                                    (0, i.useEffect)(() => {
                                        if (!v.current) return;
                                        let e, l;
                                        const a = (n) => {
                                            if ((e || (e = n), !v.current)) return;
                                            const s = 100 - 200 * (((n - e) % 4e3) / 4e3);
                                            (v.current.style.backgroundPosition = `0 ${s}%`), (l = requestAnimationFrame(a));
                                        };
                                        return (
                                            (l = requestAnimationFrame(a)),
                                            () => {
                                                cancelAnimationFrame(l);
                                            }
                                        );
                                    }, []),
                                    (0, n.jsxs)("div", { className: (0, S.W)("absolute w-full h-full box-border", l > 0 && "shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"), style: { clipPath: x, background: "linear-gradient(to bottom, hsl(var(--accent) / 1), hsl(var(--accent) / 0.5) 50%, hsl(var(--accent) / 0.2) 100%)" }, children: [0 === l && (0, n.jsx)("div", { className: "absolute w-full h-[30%]", style: { background: "linear-gradient(to bottom, hsl(var(--background) / 0.2), hsl(var(--background) / 0.1) 50%, hsl(var(--background) / 0) 100%)" } }), (0, n.jsx)("div", { ref: v, className: "absolute w-full h-full", style: { clipPath: x, background: "linear-gradient(to bottom, transparent 30%, rgba(0,100,200,0.3) 50%, transparent 70%)", backgroundSize: "100% 200%", opacity: 0.5, pointerEvents: "none", backgroundPosition: "0 100%" } }), (0, n.jsxs)("div", { className: "absolute w-full flex flex-col justify-center items-center text-center px-2 sm:px-4", style: { top: `${a}%`, height: `${s}%` }, children: [(0, n.jsx)("div", { className: (0, S.W)(c.includes(l) ? "text-subtext3 sm:text-subtext1" : "text-subtext2 sm:text-headline2", "text-gray-600 transition-colors duration-300 mb-1"), children: e.label }), (0, n.jsx)("div", { className: (0, S.W)(c.includes(l) ? "text-subtext2 sm:text-subtext2" : "text-subtext1 sm:text-headline2", "text-text font-bold transition-colors duration-300"), children: e.value })] })] }, `funnel-step-${e.label.replace(/\s+/g, "-").toLowerCase()}`)
                                );
                            }),
                        }),
                    ],
                });
            }
            function C({ post: e, isLast: l }) {
                return (0, n.jsx)("div", { className: "rounded-xl [&>div]:hover:bg-gray-50 [&>div]:transition-colors [&>div]:duration-200 " + (l ? "max-md:[&>div]:border-b-0" : ""), children: (0, n.jsx)(u.S, { post: e }) });
            }
            function A() {
                const { analytics: e } = (0, r.M1)(),
                    { posts: l, currentUserId: a } = (0, g.Mh)(),
                    [s, t] = (0, i.useState)("all"),
                    d = (0, i.useMemo)(() => ("all" !== s && l ? (a ? l.filter((e) => e.author.id === a) : []) : l || []), [l, s, a]),
                    u = l?.length || 0;
                return (0, n.jsxs)("div", { className: "bg-gray-0 rounded-xl p-4 flex flex-col border border-gray-200", children: [(0, n.jsxs)("div", { className: "flex items-center justify-between pb-2.5", children: [(0, n.jsxs)("h2", { className: "font-medium text-gray-900 md:text-headline2 md:font-bold", children: [e.CreatePostLabel, " ", (0, n.jsxs)("span", { className: "text-gray-500 text-[14px] font-normal", children: ["(", (0, y.uf)(u), ")"] })] }), (0, n.jsxs)("div", { className: "flex shrink-0", children: [(0, n.jsx)("button", { type: "button", className: "px-3 pb-1 font-medium text-subtext1 border-b-2 " + ("all" === s ? "text-text border-primary" : "text-gray-700 border-transparent"), onClick: () => t("all"), children: e.allContentTypes || "All Posts" }), (0, n.jsx)("button", { type: "button", className: "px-3 pb-1 font-medium text-subtext1 border-b-2 " + ("yours" === s ? "text-text border-primary" : "text-gray-700 border-transparent"), onClick: () => t("yours"), children: e.YourVideos?.replace("videos", "posts") || "Your Posts" })] })] }), (0, n.jsx)("div", { className: "relative max-md:max-h-[250px] md:h-[250px]", children: 0 === d.length ? (0, n.jsx)("p", { className: "text-gray-600 mt-2", children: e.noDataAvailable }) : (0, n.jsx)("div", { className: "overflow-y-auto max-md:max-h-[250px] md:h-full space-y-0 md:space-y-4 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: d.map((e, l) => (0, n.jsx)(C, { post: e, isLast: l === d.length - 1 }, e.id)) }) })] });
            }
            function I({ mediaKey: e, isMockData: l = !1, estimatedRevenueVideoDetails: a = !1, videoOverviewUrl: s = "/analytics/media-tab", showWatchTimeFunnel: t = !1 }) {
                const [r, d] = (0, i.useState)(() => (0, m.X)(-1));
                return (0, n.jsx)(g.lT, { mediaKey: e, timeRange: r, isMockData: l, estimatedRevenueVideoDetails: a, children: (0, n.jsx)(U, { timeRange: r, setTimeRange: d, estimatedRevenueVideoDetails: a, videoOverviewUrl: s, showWatchTimeFunnel: t }) });
            }
            function U({ timeRange: e, setTimeRange: l, estimatedRevenueVideoDetails: a = !1, videoOverviewUrl: u = "/analytics/media-tab", showWatchTimeFunnel: y = !1 }) {
                const { analytics: p } = (0, r.M1)(),
                    { formattedVideo: x } = (0, g.Mh)(),
                    b = (0, d.t)(),
                    k = (0, i.useMemo)(() => {
                        const e = x?.publishedDate,
                            l = e ? (0, t.w)(new Date(), e) : Number.POSITIVE_INFINITY;
                        return [
                            { days: -1, label: p.allTime },
                            { days: 7, label: "7D", disabled: l < 7 },
                            { days: 14, label: "2W", disabled: l < 14 },
                            { days: 28, label: "4W", disabled: l < 28 },
                            { days: 90, label: "3M", disabled: l < 90 },
                            { days: 365, label: "1Y", disabled: l < 365 },
                        ];
                    }, [p.allTime, x?.publishedDate]);
                return (0, n.jsxs)("div", {
                    className: "text-text px-4 pt-4 flex-col gap-4",
                    children: [(0, n.jsx)("div", { children: (0, n.jsx)(s.z, { icon: (0, n.jsx)(c.Z, {}), onClick: () => b.push(u), variant: "primaryText", "aria-label": "Back to videos" }) }), (0, n.jsxs)("div", { className: "flex flex-col min-[988px]:flex-row gap-6 pb-4", children: [(0, n.jsx)("div", { className: "flex-1", children: (0, n.jsx)("div", { className: "relative aspect-video overflow-hidden rounded-lg", children: x.url ? (0, n.jsx)(o.q, { poster: x.previewImage, src: x.url, type: x.contentType }) : (0, n.jsx)("div", { className: "w-full h-full bg-gray-100 flex items-center justify-center", children: (0, n.jsx)("span", { className: "text-gray-500", children: p.untitledVideo }) }) }) }), (0, n.jsx)("div", { className: "min-[988px]:w-[400px]", children: (0, n.jsx)(K, { estimatedRevenueVideoDetails: a }) })] }), (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, n.jsxs)("div", { className: "w-full", children: [(0, n.jsx)("hr", { className: "border-t border-gray-100 my-3" }), (0, n.jsx)("div", { className: "flex justify-start md:justify-end overflow-x-auto scrollbar-hide", children: (0, n.jsx)(m.W, { timeRange: e, onChange: l, timeRangeOptions: k, showCalendar: !1 }) })] }), (0, n.jsx)("div", { className: "grid grid-cols-1 gap-4", children: (0, n.jsx)(M, { estimatedRevenueVideoDetails: a }) })] }), (0, n.jsx)("hr", { className: "border-t border-gray-100 my-6" }), (0, n.jsxs)("div", { className: "flex flex-col gap-6", children: [(0, n.jsxs)("div", { className: "grid grid-cols-1 min-[988px]:grid-cols-2 gap-6 items-start", children: [(0, n.jsx)(f, {}), (0, n.jsx)(A, {})] }), (0, n.jsxs)("div", { className: "grid grid-cols-1 gap-6 min-[988px]:grid-cols-2", children: [(0, n.jsx)("div", { children: y ? (0, n.jsx)(D, {}) : (0, n.jsx)(v, {}) }), (0, n.jsxs)("div", { className: "flex flex-col gap-6", children: [y && (0, n.jsx)("div", { children: (0, n.jsx)(v, {}) }), (0, n.jsx)("div", { children: (0, n.jsx)(h, {}) })] })] })] })],
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-5d4eba90.79bd9e2a.js.map

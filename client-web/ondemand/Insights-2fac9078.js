"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-2fac9078"],
    {
        824980: (e, l, n) => {
            n.r(l), n.d(l, { default: () => K });
            const a = {
                fragment: {
                    argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (t = { defaultValue: null, kind: "LocalArgument", name: "product" }), (s = { defaultValue: null, kind: "LocalArgument", name: "query" })],
                    kind: "Fragment",
                    metadata: null,
                    name: "PostListQuery",
                    selections: [
                        {
                            alias: null,
                            args: (i = [
                                { kind: "Variable", name: "raw_query", variableName: "query" },
                                { kind: "Literal", name: "safety_level", value: "ForDevelopmentOnly" },
                            ]),
                            concreteType: "SearchQuery",
                            kind: "LinkedField",
                            name: "search_by_raw_query",
                            plural: !1,
                            selections: [
                                {
                                    alias: "search_timeline",
                                    args: (u = [{ kind: "Variable", name: "product", variableName: "product" }]),
                                    concreteType: "Timeline",
                                    kind: "LinkedField",
                                    name: "timeline",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: null,
                                            args: (c = [{ kind: "Variable", name: "cursor", variableName: "cursor" }]),
                                            concreteType: "TimelineTimeline",
                                            kind: "LinkedField",
                                            name: "timeline",
                                            plural: !1,
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "instructions",
                                                    plural: !0,
                                                    selections: [
                                                        (o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                        {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                                {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: "TimelineTimelineEntry",
                                                                    kind: "LinkedField",
                                                                    name: "entries",
                                                                    plural: !0,
                                                                    selections: [
                                                                        {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: null,
                                                                            kind: "LinkedField",
                                                                            name: "content",
                                                                            plural: !1,
                                                                            selections: [
                                                                                {
                                                                                    kind: "InlineFragment",
                                                                                    selections: [
                                                                                        o,
                                                                                        {
                                                                                            alias: null,
                                                                                            args: null,
                                                                                            concreteType: null,
                                                                                            kind: "LinkedField",
                                                                                            name: "content",
                                                                                            plural: !1,
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "InlineFragment",
                                                                                                    selections: [
                                                                                                        o,
                                                                                                        {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType: "TweetResults",
                                                                                                            kind: "LinkedField",
                                                                                                            name: "tweet_results",
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
                                                                                                                        o,
                                                                                                                        {
                                                                                                                            kind: "InlineFragment",
                                                                                                                            selections: [
                                                                                                                                (d = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                                                                                                                                d,
                                                                                                                                                                (y = {
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
                                                                                                                                                                (g = { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null }),
                                                                                                                                                                (m = {
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
                                                                                                                                (p = {
                                                                                                                                    alias: null,
                                                                                                                                    args: null,
                                                                                                                                    concreteType: "LegacyTweet",
                                                                                                                                    kind: "LinkedField",
                                                                                                                                    name: "legacy",
                                                                                                                                    plural: !1,
                                                                                                                                    selections: [
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "reply_count", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "favorite_count", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "quote_count", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "retweet_count", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "bookmark_count", storageKey: null },
                                                                                                                                        { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null },
                                                                                                                                    ],
                                                                                                                                    storageKey: null,
                                                                                                                                }),
                                                                                                                                (k = { alias: null, args: null, concreteType: "ViewCountInfo", kind: "LinkedField", name: "views", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "count", storageKey: null }], storageKey: null }),
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
                                                                                                    type: "TimelineTweet",
                                                                                                    abstractKey: null,
                                                                                                },
                                                                                            ],
                                                                                            storageKey: null,
                                                                                        },
                                                                                    ],
                                                                                    type: "TimelineTimelineItem",
                                                                                    abstractKey: null,
                                                                                },
                                                                                { kind: "InlineFragment", selections: [(_ = { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null }), (T = { alias: null, args: null, kind: "ScalarField", name: "cursor_type", storageKey: null }), o], type: "TimelineTimelineCursor", abstractKey: null },
                                                                            ],
                                                                            storageKey: null,
                                                                        },
                                                                    ],
                                                                    storageKey: null,
                                                                },
                                                            ],
                                                            type: "TimelineAddEntries",
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
                            storageKey: null,
                        },
                    ],
                    type: "Query",
                    abstractKey: null,
                },
                kind: "Request",
                operation: {
                    argumentDefinitions: [s, r, t],
                    kind: "Operation",
                    name: "PostListQuery",
                    selections: [
                        {
                            alias: null,
                            args: i,
                            concreteType: "SearchQuery",
                            kind: "LinkedField",
                            name: "search_by_raw_query",
                            plural: !1,
                            selections: [
                                {
                                    alias: "search_timeline",
                                    args: u,
                                    concreteType: "Timeline",
                                    kind: "LinkedField",
                                    name: "timeline",
                                    plural: !1,
                                    selections: [
                                        {
                                            alias: null,
                                            args: c,
                                            concreteType: "TimelineTimeline",
                                            kind: "LinkedField",
                                            name: "timeline",
                                            plural: !1,
                                            selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "instructions", plural: !0, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "content", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [d, { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [d, y, g, m, (F = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, F], storageKey: null }], storageKey: null }, p, k, F], type: "Tweet", abstractKey: null }], storageKey: null }, F], storageKey: null }], type: "TimelineTweet", abstractKey: null }], storageKey: null }], type: "TimelineTimelineItem", abstractKey: null }, { kind: "InlineFragment", selections: [_, T], type: "TimelineTimelineCursor", abstractKey: null }], storageKey: null }], storageKey: null }], type: "TimelineAddEntries", abstractKey: null }], storageKey: null }],
                                            storageKey: null,
                                        },
                                        F,
                                    ],
                                    storageKey: null,
                                },
                                F,
                            ],
                            storageKey: null,
                        },
                    ],
                },
                params: { id: "vqoJiOnCYxkIJ79fePvckg", metadata: {}, name: "PostListQuery", operationKind: "query", text: null },
            };
            var r, t, s, i, u, c, o, d, y, g, m, p, k, _, T, F;
            a.hash = "a145fcf2cecbe51e0261602d1c808c59";
            const K = a;
        },
        864629: (e, l, n) => {
            n.d(l, { p: () => o });
            var a = n(552322),
                r = n(202784),
                t = n(889906),
                s = n(446368),
                i = n(72100),
                u = n(602077);
            const c = n(824980),
                o = ({ dateRange: e, query: l, sortOrder: n }) => {
                    const o = (0, t.useRelayEnvironment)(),
                        [d, y] = (0, r.useState)(!1),
                        [g, m] = (0, r.useState)(null),
                        [p, k] = (0, r.useState)([]),
                        [_, T] = (0, r.useState)({ cursor: null, product: n, query: `${l} -is:retweet since:${e.fromDate}${e.toDate ? ` until:${e.toDate}` : ""}` }),
                        F = (0, r.useRef)(null),
                        K = (0, r.useRef)(_),
                        f = (0, r.useRef)(null),
                        b = (0, t.useLazyLoadQuery)(c, _),
                        L = (0, s.$8)();
                    (0, r.useEffect)(() => {
                        if (!g && !b) return;
                        const { cursor: e, posts: l } = ((e) => {
                            const l = e?.search_by_raw_query?.search_timeline?.timeline?.instructions?.filter((e) => "TimelineAddEntries" === e?.__typename)[0]?.entries;
                            if (!l) return { cursor: null, posts: [] };
                            const n = l?.find((e) => "TimelineTimelineCursor" === e?.content?.__typename && "Bottom" === e?.content?.cursor_type);
                            return {
                                cursor: (n && "value" in n.content && n?.content.value) || null,
                                posts:
                                    l?.reduce((e, l) => {
                                        if (l && "TimelineTimelineItem" === l.content.__typename && "TimelineTweet" === l.content.content.__typename) {
                                            const n = l.content.content.tweet_results;
                                            if ("Tweet" !== n.result?.__typename) return e;
                                            let a;
                                            const r = n.result.core?.user_results.result?.affiliates_highlighted_label?.label;
                                            let t;
                                            r && "Badge" === r.user_label_display_type && "BusinessLabel" === r.user_label_type && (a = { label: r.description, url: r.badge?.url }), n.result.core?.user_results.result?.legacy?.verified_type && ("Business" === n.result.core.user_results.result.legacy.verified_type && (t = "business"), "Government" === n.result.core.user_results.result.legacy.verified_type && (t = "government"), "User" === n.result.core.user_results.result.legacy.verified_type && (t = "user")), n.result.core?.user_results.result?.is_blue_verified && (t = "user");
                                            const s = { author: { badges: a || t ? { affiliation: a, verifiedType: t } : void 0, id: n.result.core?.user_results.result?.rest_id || "", name: n.result.core?.user_results.result?.legacy?.name || "", profileImageUrl: n.result.core?.user_results.result?.legacy?.profile_image_url_https || "", screenName: n.result.core?.user_results.result?.legacy?.screen_name || "", verifiedType: n.result.core?.user_results.result?.legacy?.verified_type || n.result.core?.user_results.result?.is_blue_verified ? "blue" : "" }, createdAt: n.result.legacy?.created_at_ms ? new Date(n.result.legacy.created_at_ms) : null, id: n.result.rest_id || "", publicMetrics: { bookmarkCount: (0, u.M)(n.result.legacy?.bookmark_count || 0), impressionCount: (0, u.M)(+(n.result.views?.count || 0)), likeCount: (0, u.M)(n.result.legacy?.favorite_count || 0), quoteCount: (0, u.M)(n.result.legacy?.quote_count || 0), replyCount: (0, u.M)(n.result.legacy?.reply_count || 0), repostCount: (0, u.M)(n.result.legacy?.retweet_count || 0) }, text: n.result.legacy?.full_text || "" };
                                            e.push(s);
                                        }
                                        return e;
                                    }, []) || [],
                            };
                        })(g || b);
                        k((e) => [...e, ...l]), (F.current = e);
                    }, [g, b]);
                    return (
                        (0, r.useEffect)(() => {
                            const n = `${l} -is:retweet since:${e.fromDate}${e.toDate ? ` until:${e.toDate}` : ""}`;
                            K.current.query !== n && (k([]), (F.current = null), (K.current = { ..._, cursor: null, query: n }), m(null), T(K.current));
                        }, [l, e, _]),
                        (0, a.jsx)("div", {
                            ref: f,
                            className: "max-md:hide-scrollbar flex flex-col gap-2 md:overflow-y-scroll",
                            onScroll: () => {
                                const e = f.current.scrollHeight - f.current.clientHeight;
                                if (f.current.scrollTop > e - 500) {
                                    if (d) return;
                                    null !== F.current &&
                                        (y(!0),
                                        (K.current = { ...K.current, cursor: F.current }),
                                        (0, t.fetchQuery)(o, c, K.current, { fetchPolicy: "store-or-network" })
                                            .toPromise()
                                            .then((e) => {
                                                e && (T(K.current), m(e), y(!1));
                                            }));
                                }
                            },
                            children: p.map((e) =>
                                (0, a.jsx)(
                                    i.S,
                                    {
                                        post: e,
                                        onClick: () => {
                                            L.scribe({ action: "click", data: { post_id: e.id }, element: "post", page: "insights_detail", section: "post_list" });
                                        },
                                    },
                                    e.id,
                                ),
                            ),
                        })
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-2fac9078.9ab0142a.js.map

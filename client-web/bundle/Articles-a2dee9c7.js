"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-a2dee9c7"],
    {
        195382: (e, n, t) => {
            t.d(n, { Z: () => o });
            var l,
                i,
                r,
                a,
                s,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (i = [
                                    { kind: "Variable", name: "rest_id", variableName: "articleEntityId" },
                                    { kind: "Literal", name: "s", value: "4c07" },
                                ]),
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
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
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                type: "ArticleEntity",
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
                    operation: {
                        argumentDefinitions: l,
                        kind: "Operation",
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: i,
                                concreteType: "ArticleEntityResults",
                                kind: "LinkedField",
                                name: "article_result_by_rest_id",
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
                                            (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ArticleEntityMetadata",
                                                        kind: "LinkedField",
                                                        name: "metadata",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "tweet_results", plural: !1, selections: [r, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null },
                                                            { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "author_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [a, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, d], type: "User", abstractKey: null }], storageKey: null }, d], storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    d,
                                                ],
                                                type: "ArticleEntity",
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
                    },
                    params: { id: "X6ZxrOo0zyipREm6CNVKjg", metadata: {}, name: "ArticleRedirectScreenQuery", operationKind: "query", text: null },
                };
            u.hash = "cc8472864d0601af4b7e2f9a39aa4c8f";
            const o = u;
        },
        897455: (e, n, t) => {
            t.d(n, { Z: () => d });
            var l,
                i,
                r = t(311405),
                a = t(794357),
                s = {
                    kind: "SplitOperation",
                    metadata: {},
                    name: "TimelineRelay$normalization",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "instructions",
                            plural: !0,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                { kind: "TypeDiscriminator", abstractKey: "__isTimelineTimelineInstruction" },
                                { alias: "type", args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: (l = [{ args: null, fragment: r.Z, kind: "FragmentSpread" }]), storageKey: null }], type: "TimelineAddEntries", abstractKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "entry_id_to_replace", storageKey: null }, (i = { alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entry", plural: !1, selections: l, storageKey: null })], type: "TimelineReplaceEntry", abstractKey: null },
                                { kind: "InlineFragment", selections: [i], type: "TimelinePinEntry", abstractKey: null },
                                {
                                    kind: "InlineFragment",
                                    selections: [
                                        {
                                            alias: "moduleItems",
                                            args: null,
                                            concreteType: "TimelineModuleItem",
                                            kind: "LinkedField",
                                            name: "module_items",
                                            plural: !0,
                                            selections: [
                                                { alias: "entryId", args: null, kind: "ScalarField", name: "entry_id", storageKey: null },
                                                { alias: null, args: null, concreteType: "TimelineTimelineItem", kind: "LinkedField", name: "item", plural: !1, selections: [{ args: null, fragment: a.Z, kind: "FragmentSpread" }], storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    type: "TimelineAddToModule",
                                    abstractKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                    ],
                };
            s.hash = "7d0f17590e1c09ad3ae57e9a9d7fabd6";
            const d = s;
        },
        66351: (e, n, t) => {
            t.d(n, { Z: () => b });
            var l,
                i,
                r,
                a,
                s,
                d,
                u,
                o,
                c,
                m,
                _,
                g,
                p,
                y = t(897455),
                k = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "count" }), (i = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (r = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (a = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (_ = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (g = [{ kind: "Literal", name: "s", value: "0c09" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "Timeline",
                                        kind: "LinkedField",
                                        name: "list_management_timeline",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: (p = [
                                                    { kind: "Literal", name: "cards_platform", value: "Web-12" },
                                                    { kind: "Variable", name: "count", variableName: "count" },
                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                ]),
                                                concreteType: "TimelineTimeline",
                                                kind: "LinkedField",
                                                name: "timeline",
                                                plural: !1,
                                                selections: [{ args: null, kind: "FragmentSpread", name: "TimelineRelay" }],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [l, i, r, s, d, c, u, _, a, o, m],
                        kind: "Operation",
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: g,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "Timeline",
                                        kind: "LinkedField",
                                        name: "list_management_timeline",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: p, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: y.Z, kind: "FragmentSpread" }], storageKey: null },
                                            { alias: null, args: p, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] },
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                    },
                    params: { id: "o7Ie-8fvnTo08OgS8gS3tw", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            k.hash = "5b66468936446aae49ccfb5965fb93f4";
            const b = k;
        },
        483557: (e, n, t) => {
            t.d(n, { ZP: () => we });
            t(571372);
            var l = t(506899),
                i = t(538327),
                r = t(414742),
                a = t(703710),
                s = t(274818),
                d = t(860740),
                u = t.n(d),
                o = t(604048),
                c = t.n(o),
                m = t(626417),
                _ = t.n(m),
                g = t(287161),
                p = t.n(g),
                y = t(730916),
                k = t.n(y),
                b = t(161282),
                L = t.n(b),
                h = t(833881),
                w = t.n(h),
                f = t(158233),
                F = t.n(f),
                v = t(656990),
                T = t.n(v),
                I = t(928271),
                Q = t.n(I),
                S = t(445071),
                K = t.n(S),
                A = t(894079),
                R = t.n(A),
                E = t(269268),
                V = t.n(E),
                G = t(295818),
                Z = t.n(G),
                j = t(66816),
                C = t.n(j),
                N = t(580116),
                U = t.n(N),
                D = t(251454),
                M = t.n(D),
                q = t(197050),
                O = t.n(q),
                P = t(66549),
                Y = t.n(P),
                x = t(184429),
                z = t.n(x),
                B = t(772248),
                H = t.n(B),
                X = t(776998),
                J = t.n(X),
                W = t(706236),
                $ = t.n(W),
                ee = t(890596),
                ne = t.n(ee),
                te = t(153791),
                le = t(934309),
                ie = t(503768),
                re = t(265617),
                ae = t(120071);
            const se = (e) => ({ ...ae.k(e), ...re.kX(e), cursor: -1 }),
                de = (0, r.kj)((e) => !("User" === e?.user?.result?.__typename && e?.user?.result?.timeline), "GQL URT: Failed to render Lists timeline"),
                ue = (0, r.kj)((e) => {
                    const n = e?.list_discovery_list_mixer_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to render Lists Discovery timeline"),
                oe = (0, r.kj)((e) => {
                    const n = e?.viewer?.list_management_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to render Lists Management timeline"),
                ce = (0, r.kj)((e) => {
                    const n = e?.list_subscribe_v3;
                    return !n;
                }, "GQL List: Failed to subscribe"),
                me = (0, r.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to unsubcribe"),
                _e = (0, r.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to add member"),
                ge = (0, r.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to remove member"),
                pe = (0, r.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to fetch list by id"),
                ye = (0, r.kj)((e) => {
                    const n = e?.user_by_screen_name?.list;
                    return !n;
                }, "GQL List: Failed to fetch list by slug"),
                ke = (0, r.kj)((e) => {
                    const n = e?.list?.tweets_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to fetch list Tweets timeline"),
                be = (0, r.kj)((e) => {
                    const n = e?.list?.subscribers_timeline?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Subscribers timeline"),
                Le = (0, r.kj)((e) => {
                    const n = e?.list?.members_timeline?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Members timeline"),
                he = (0, r.kj)((e) => {
                    const n = e?.list?.recommended_users?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Recommended Users timeline"),
                we = ({ apiClient: e, featureSwitches: n }) => ({
                    addToList(t, i) {
                        const { list_id: r, user_id: d } = t;
                        return e.graphQL(c(), { listId: r, userId: d, ...(0, a.S)(n) }, _e).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    createList(t, i) {
                        const { description: r, mode: d, name: u } = t;
                        return e.graphQL(L(), { isPrivate: "private" === d.toLowerCase(), name: u, description: r, ...(0, a.S)(n) }).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    editBannerImage(t, i) {
                        const { listId: r, mediaId: d } = t;
                        return e.graphQL(p(), { listId: r, mediaId: d, ...(0, a.S)(n) }).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    deleteList(n, t) {
                        const { list_id: l } = n;
                        return e.graphQL(F(), { listId: l });
                    },
                    deleteBannerImage(t, i) {
                        const { listId: r } = t;
                        return e.graphQL(_(), { listId: r, ...(0, a.S)(n) }).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    fetchList(t, i) {
                        if (t.list_id) return e.graphQL(C(), { listId: t.list_id, ...(0, a.S)(n) }, pe).then((e) => (0, l.Fv)(e.list, s.Z));
                        if (t.slug) {
                            const { owner_screen_name: i, slug: r } = t;
                            return e.graphQL(k(), { screenName: i, listSlug: r, ...(0, a.S)(n) }, ye).then((e) => (0, l.Fv)({ ...e.user_by_screen_name?.list, slug: r }, s.Z));
                        }
                        return Promise.reject(new Error("listId or screenName and slug required to fetch list"));
                    },
                    fetchCombinedLists: ({ count: t, cursor: l, userId: i }) => e.graphQL(u(), { userId: i, count: t, cursor: l, ...(0, a.d)(n) }, de).then(ie.k7),
                    fetchListsManagementPageTimeline: ({ count: t, cursor: l }) =>
                        e.graphQL(Y(), { count: t, cursor: l, ...(0, a.d)(n) }, oe).then((e) => {
                            const n = e.viewer?.list_management_timeline?.timeline;
                            return n || le.cY;
                        }),
                    fetchTweetsGraphQL(t, l) {
                        const { count: i, cursor: r, listId: s, useRanked: d } = t,
                            u = d ? U() : Q(),
                            o = { listId: s, count: i, cursor: r, ...(0, a.d)(n) };
                        return e.graphQL(u, o, ke).then((e) => {
                            const n = e.list.tweets_timeline?.timeline;
                            return n || le.cY;
                        });
                    },
                    fetchMembersGraphQL(t, l) {
                        const { count: i, cursor: r, listId: s } = t;
                        return e.graphQL(K(), { listId: s, count: i, cursor: r, ...(0, a.d)(n) }, Le).then((e) => {
                            const n = e.list.members_timeline?.timeline;
                            return n || le.cY;
                        });
                    },
                    fetchRecommendedUsersGraphQL(t, l) {
                        const { count: r, cursor: s, displayLocation: d, listId: u } = t,
                            o = d === i.O.Creation ? w() : T(),
                            c = { listId: u, count: r, cursor: s, ...(0, a.d)(n) };
                        return e.graphQL(o, c, he).then((e) => {
                            const n = e.list.recommended_users?.timeline;
                            return n || le.cY;
                        });
                    },
                    fetchSubscribersGraphQL(t, l) {
                        const { count: i, cursor: r, listId: s } = t;
                        return e.graphQL(H(), { listId: s, count: i, cursor: r, ...(0, a.d)(n) }, be).then((e) => {
                            const n = e.list.subscribers_timeline?.timeline;
                            return n || le.cY;
                        });
                    },
                    fetchSuggestedLists: ({ count: t, cursor: l }) => e.graphQL(O(), { count: t, cursor: l, ...(0, a.d)(n) }, ue).then((e) => e.list_discovery_list_mixer_timeline?.timeline || le.cY),
                    fetchOwnershipsGraphQL(t, l) {
                        const { count: i, cursor: r, targetUserId: s, userId: d } = t;
                        return e.graphQL(Z(), { userId: d, isListMemberTargetUserId: s, count: i, cursor: r, ...(0, a.d)(n) }, de).then(ie.k7);
                    },
                    fetchMemberships: (t, i) => e.get("lists/memberships", { ...se(n), ...t }, i || {}).then((e) => (0, l.Fv)(e, te.kD)),
                    fetchMembershipsGraphQL(t, l) {
                        const { count: i, cursor: r, userId: s } = t;
                        return e.graphQL(R(), { userId: s, count: i, cursor: r, ...(0, a.d)(n) }, de).then(ie.k7);
                    },
                    removeFromList(t, i) {
                        const { list_id: r, user_id: d } = t;
                        return e.graphQL(M(), { listId: r, userId: d, ...(0, a.S)(n) }, ge).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    createSubscribers(t, i) {
                        const { list_id: r } = t;
                        return e.graphQL(z(), { listId: r, ...(0, a.S)(n) }, ce).then((e) => (0, l.Fv)(e.list_subscribe_v3, s.Z));
                    },
                    destroySubscribers(t, i) {
                        const { list_id: r } = t;
                        return e.graphQL($(), { listId: r, ...(0, a.S)(n) }, me).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                    toggleMute(n, t) {
                        const { listId: l, mute: i } = n;
                        return i ? e.graphQL(V(), { listId: l }) : e.graphQL(J(), { listId: l });
                    },
                    editList(t, i) {
                        const { description: r, list_id: d, mode: u, name: o } = t;
                        return e.graphQL(ne(), { listId: d, isPrivate: "private" === u.toLowerCase(), description: r, name: o, ...(0, a.S)(n) }).then((e) => (0, l.Fv)(e.list, s.Z));
                    },
                });
        },
        969066: (e, n, t) => {
            t.d(n, { Z: () => s });
            var l = t(38405),
                i = t.n(l),
                r = t(104323),
                a = t.n(r);
            const s = ({ apiClient: e, featureSwitches: n }) => ({ pin: (n) => e.graphQL(i(), n).then((e) => ({ success: e?.create_conversation_pinned_tweet?.success ?? !1 })), unpin: (n) => e.graphQL(a(), n).then((e) => ({ success: e?.delete_conversation_pinned_tweet?.success ?? !1 })) });
        },
        541837: (e, n, t) => {
            t.d(n, { Z: () => r });
            var l = t(276563);
            function i(e) {
                const n = { tweet_id: e.id_str },
                    t = e.promoted_content && e.promoted_content.impression_id;
                return t && (n.impression_id = t), e.card && e.card.name === l.default.CardNames.LIVE_EVENT && (n.live_event_id = l.default.getBindingValue(e.card.binding_values, "event_id")), n;
            }
            const r = ({ apiClient: e, featureSwitches: n }) => ({
                fetch: (n) => {
                    const t = { tweets: n.eligibleTweets.map(i) };
                    n.trigger_preroll && (t.trigger_preroll = n.trigger_preroll), n.prerollDisplayLocation && (t.display_location = n.prerollDisplayLocation);
                    const l = { tweets: JSON.stringify(t) };
                    return e.post("videoads/v2/prerolls", l, {}, {});
                },
            });
        },
        4691: (e, n, t) => {
            t.d(n, { ZP: () => _ });
            var l = t(506063),
                i = t(414742),
                r = t(703710),
                a = t(286780),
                s = t.n(a),
                d = t(495793),
                u = t.n(d),
                o = t(934309);
            const c = (0, i.kj)((e) => {
                    const n = e?.article_by_rest_id?.tweets_timeline?.timeline;
                    return !n;
                }, "GQL Top Articles: Failed query for article Tweets timeline"),
                m = (0, i.kj)((e) => {
                    const n = e?.article_timeline?.timeline;
                    return !n;
                }, "GQL Top Articles: Failed query for article timeline"),
                _ = ({ apiClient: e, featureSwitches: n }) => ({
                    fetchArticleTweetsTimeline(t) {
                        const i = t.articleListSeedType === l.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(u(), { ...t, ...(0, r.d)(n), articleListSeedType: i }, c).then((e) => e?.article_by_rest_id?.tweets_timeline?.timeline || o.cY);
                    },
                    fetchArticleTimeline(t) {
                        const i = t.articleListSeedType === l.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(s(), { ...t, ...(0, r.d)(n), articleListSeedType: i }, m).then((e) => e?.article_timeline?.timeline || o.cY);
                    },
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-a2dee9c7.fd8de0ba.js.map

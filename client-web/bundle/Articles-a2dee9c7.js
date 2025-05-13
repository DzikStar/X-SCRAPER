"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-a2dee9c7"],
    {
        195382: (e, n, t) => {
            t.d(n, { Z: () => o });
            var i,
                l,
                r,
                a,
                s,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "articleEntityId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
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
                        argumentDefinitions: i,
                        kind: "Operation",
                        name: "ArticleRedirectScreenQuery",
                        selections: [
                            {
                                alias: null,
                                args: l,
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
            var i,
                l,
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
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: (i = [{ args: null, fragment: r.Z, kind: "FragmentSpread" }]), storageKey: null }], type: "TimelineAddEntries", abstractKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "entry_id_to_replace", storageKey: null }, (l = { alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entry", plural: !1, selections: i, storageKey: null })], type: "TimelineReplaceEntry", abstractKey: null },
                                { kind: "InlineFragment", selections: [l], type: "TimelinePinEntry", abstractKey: null },
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
            var i,
                l,
                r,
                a,
                s,
                d,
                u,
                o,
                c,
                m,
                _,
                p,
                g,
                y = t(897455),
                k = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "count" }), (l = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (r = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (a = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (_ = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: (p = [{ kind: "Literal", name: "s", value: "0c09" }]),
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
                                                args: (g = [
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
                        argumentDefinitions: [i, l, r, s, d, c, u, _, a, o, m],
                        kind: "Operation",
                        name: "managementListsPageTimelineQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: p,
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
                                            { alias: null, args: g, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: y.Z, kind: "FragmentSpread" }], storageKey: null },
                                            { alias: null, args: g, filters: null, handle: "timeline", key: "", kind: "LinkedHandle", name: "timeline", handleArgs: [{ kind: "Variable", name: "timelineId", variableName: "timelineId" }] },
                                            { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"0c09")',
                            },
                        ],
                    },
                    params: { id: "X4iYIGyhEuizi3A24hPipQ", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            k.hash = "5b66468936446aae49ccfb5965fb93f4";
            const b = k;
        },
        483557: (e, n, t) => {
            t.d(n, { ZP: () => we });
            t(571372);
            var i = t(506899),
                l = t(538327),
                r = t(414742),
                a = t(703710),
                s = t(274818),
                d = t(860740),
                u = t.n(d),
                o = t(604048),
                c = t.n(o),
                m = t(626417),
                _ = t.n(m),
                p = t(287161),
                g = t.n(p),
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
                K = t(445071),
                S = t.n(K),
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
                P = t(197050),
                q = t.n(P),
                O = t(66549),
                Y = t.n(O),
                x = t(184429),
                z = t.n(x),
                B = t(772248),
                X = t.n(B),
                H = t(776998),
                J = t.n(H),
                W = t(706236),
                $ = t.n(W),
                ee = t(890596),
                ne = t.n(ee),
                te = t(153791),
                ie = t(934309),
                le = t(503768),
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
                pe = (0, r.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to remove member"),
                ge = (0, r.kj)((e) => {
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
                    addToList(t, l) {
                        const { list_id: r, user_id: d } = t;
                        return e.graphQL(c(), { listId: r, userId: d, ...(0, a.S)(n) }, _e).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    createList(t, l) {
                        const { description: r, mode: d, name: u } = t;
                        return e.graphQL(L(), { isPrivate: "private" === d.toLowerCase(), name: u, description: r, ...(0, a.S)(n) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    editBannerImage(t, l) {
                        const { listId: r, mediaId: d } = t;
                        return e.graphQL(g(), { listId: r, mediaId: d, ...(0, a.S)(n) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    deleteList(n, t) {
                        const { list_id: i } = n;
                        return e.graphQL(F(), { listId: i });
                    },
                    deleteBannerImage(t, l) {
                        const { listId: r } = t;
                        return e.graphQL(_(), { listId: r, ...(0, a.S)(n) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    fetchList(t, l) {
                        if (t.list_id) return e.graphQL(C(), { listId: t.list_id, ...(0, a.S)(n) }, ge).then((e) => (0, i.Fv)(e.list, s.Z));
                        if (t.slug) {
                            const { owner_screen_name: l, slug: r } = t;
                            return e.graphQL(k(), { screenName: l, listSlug: r, ...(0, a.S)(n) }, ye).then((e) => (0, i.Fv)({ ...e.user_by_screen_name?.list, slug: r }, s.Z));
                        }
                        return Promise.reject(new Error("listId or screenName and slug required to fetch list"));
                    },
                    fetchCombinedLists: ({ count: t, cursor: i, userId: l }) => e.graphQL(u(), { userId: l, count: t, cursor: i, ...(0, a.d)(n) }, de).then(le.k7),
                    fetchListsManagementPageTimeline: ({ count: t, cursor: i }) =>
                        e.graphQL(Y(), { count: t, cursor: i, ...(0, a.d)(n) }, oe).then((e) => {
                            const n = e.viewer?.list_management_timeline?.timeline;
                            return n || ie.cY;
                        }),
                    fetchTweetsGraphQL(t, i) {
                        const { count: l, cursor: r, listId: s, useRanked: d } = t,
                            u = d ? U() : Q(),
                            o = { listId: s, count: l, cursor: r, ...(0, a.d)(n) };
                        return e.graphQL(u, o, ke).then((e) => {
                            const n = e.list.tweets_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchMembersGraphQL(t, i) {
                        const { count: l, cursor: r, listId: s } = t;
                        return e.graphQL(S(), { listId: s, count: l, cursor: r, ...(0, a.d)(n) }, Le).then((e) => {
                            const n = e.list.members_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchRecommendedUsersGraphQL(t, i) {
                        const { count: r, cursor: s, displayLocation: d, listId: u } = t,
                            o = d === l.O.Creation ? w() : T(),
                            c = { listId: u, count: r, cursor: s, ...(0, a.d)(n) };
                        return e.graphQL(o, c, he).then((e) => {
                            const n = e.list.recommended_users?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchSubscribersGraphQL(t, i) {
                        const { count: l, cursor: r, listId: s } = t;
                        return e.graphQL(X(), { listId: s, count: l, cursor: r, ...(0, a.d)(n) }, be).then((e) => {
                            const n = e.list.subscribers_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchSuggestedLists: ({ count: t, cursor: i }) => e.graphQL(q(), { count: t, cursor: i, ...(0, a.d)(n) }, ue).then((e) => e.list_discovery_list_mixer_timeline?.timeline || ie.cY),
                    fetchOwnershipsGraphQL(t, i) {
                        const { count: l, cursor: r, targetUserId: s, userId: d } = t;
                        return e.graphQL(Z(), { userId: d, isListMemberTargetUserId: s, count: l, cursor: r, ...(0, a.d)(n) }, de).then(le.k7);
                    },
                    fetchMemberships: (t, l) => e.get("lists/memberships", { ...se(n), ...t }, l || {}).then((e) => (0, i.Fv)(e, te.kD)),
                    fetchMembershipsGraphQL(t, i) {
                        const { count: l, cursor: r, userId: s } = t;
                        return e.graphQL(R(), { userId: s, count: l, cursor: r, ...(0, a.d)(n) }, de).then(le.k7);
                    },
                    removeFromList(t, l) {
                        const { list_id: r, user_id: d } = t;
                        return e.graphQL(M(), { listId: r, userId: d, ...(0, a.S)(n) }, pe).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    createSubscribers(t, l) {
                        const { list_id: r } = t;
                        return e.graphQL(z(), { listId: r, ...(0, a.S)(n) }, ce).then((e) => (0, i.Fv)(e.list_subscribe_v3, s.Z));
                    },
                    destroySubscribers(t, l) {
                        const { list_id: r } = t;
                        return e.graphQL($(), { listId: r, ...(0, a.S)(n) }, me).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    toggleMute(n, t) {
                        const { listId: i, mute: l } = n;
                        return l ? e.graphQL(V(), { listId: i }) : e.graphQL(J(), { listId: i });
                    },
                    editList(t, l) {
                        const { description: r, list_id: d, mode: u, name: o } = t;
                        return e.graphQL(ne(), { listId: d, isPrivate: "private" === u.toLowerCase(), description: r, name: o, ...(0, a.S)(n) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                });
        },
        969066: (e, n, t) => {
            t.d(n, { Z: () => s });
            var i = t(38405),
                l = t.n(i),
                r = t(104323),
                a = t.n(r);
            const s = ({ apiClient: e, featureSwitches: n }) => ({ pin: (n) => e.graphQL(l(), n).then((e) => ({ success: e?.create_conversation_pinned_tweet?.success ?? !1 })), unpin: (n) => e.graphQL(a(), n).then((e) => ({ success: e?.delete_conversation_pinned_tweet?.success ?? !1 })) });
        },
        541837: (e, n, t) => {
            t.d(n, { Z: () => r });
            var i = t(276563);
            function l(e) {
                const n = { tweet_id: e.id_str },
                    t = e.promoted_content && e.promoted_content.impression_id;
                return t && (n.impression_id = t), e.card && e.card.name === i.default.CardNames.LIVE_EVENT && (n.live_event_id = i.default.getBindingValue(e.card.binding_values, "event_id")), n;
            }
            const r = ({ apiClient: e, featureSwitches: n }) => ({
                fetch: (n) => {
                    const t = { tweets: n.eligibleTweets.map(l) };
                    n.trigger_preroll && (t.trigger_preroll = n.trigger_preroll), n.prerollDisplayLocation && (t.display_location = n.prerollDisplayLocation);
                    const i = { tweets: JSON.stringify(t) };
                    return e.post("videoads/v2/prerolls", i, {}, {});
                },
            });
        },
        4691: (e, n, t) => {
            t.d(n, { ZP: () => _ });
            var i = t(506063),
                l = t(414742),
                r = t(703710),
                a = t(286780),
                s = t.n(a),
                d = t(495793),
                u = t.n(d),
                o = t(934309);
            const c = (0, l.kj)((e) => {
                    const n = e?.article_by_rest_id?.tweets_timeline?.timeline;
                    return !n;
                }, "GQL Top Articles: Failed query for article Tweets timeline"),
                m = (0, l.kj)((e) => {
                    const n = e?.article_timeline?.timeline;
                    return !n;
                }, "GQL Top Articles: Failed query for article timeline"),
                _ = ({ apiClient: e, featureSwitches: n }) => ({
                    fetchArticleTweetsTimeline(t) {
                        const l = t.articleListSeedType === i.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(u(), { ...t, ...(0, r.d)(n), articleListSeedType: l }, c).then((e) => e?.article_by_rest_id?.tweets_timeline?.timeline || o.cY);
                    },
                    fetchArticleTimeline(t) {
                        const l = t.articleListSeedType === i.v.FRIENDS_OF_FRIENDS ? "FriendsOfFriends" : "FollowingList";
                        return e.graphQL(s(), { ...t, ...(0, r.d)(n), articleListSeedType: l }, m).then((e) => e?.article_timeline?.timeline || o.cY);
                    },
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-a2dee9c7.ef37992a.js.map

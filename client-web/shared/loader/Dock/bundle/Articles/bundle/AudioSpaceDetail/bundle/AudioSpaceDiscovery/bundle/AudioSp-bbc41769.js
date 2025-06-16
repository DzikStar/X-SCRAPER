"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"],
    {
        897455: (e, n, t) => {
            t.d(n, { Z: () => o });
            var i,
                r,
                l = t(311405),
                s = t(794357),
                a = {
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
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entries", plural: !0, selections: (i = [{ args: null, fragment: l.Z, kind: "FragmentSpread" }]), storageKey: null }], type: "TimelineAddEntries", abstractKey: null },
                                { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "entry_id_to_replace", storageKey: null }, (r = { alias: null, args: null, concreteType: "TimelineTimelineEntry", kind: "LinkedField", name: "entry", plural: !1, selections: i, storageKey: null })], type: "TimelineReplaceEntry", abstractKey: null },
                                { kind: "InlineFragment", selections: [r], type: "TimelinePinEntry", abstractKey: null },
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
                                                { alias: null, args: null, concreteType: "TimelineTimelineItem", kind: "LinkedField", name: "item", plural: !1, selections: [{ args: null, fragment: s.Z, kind: "FragmentSpread" }], storageKey: null },
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
            a.hash = "7d0f17590e1c09ad3ae57e9a9d7fabd6";
            const o = a;
        },
        66351: (e, n, t) => {
            t.d(n, { Z: () => L });
            var i,
                r,
                l,
                s,
                a,
                o,
                d,
                u,
                c,
                m,
                _,
                p,
                g,
                b = t(897455),
                h = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "count" }), (r = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (l = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (s = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (a = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (_ = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
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
                        argumentDefinitions: [i, r, l, a, o, c, d, _, s, u, m],
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
                                            { alias: null, args: g, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: b.Z, kind: "FragmentSpread" }], storageKey: null },
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
                    params: { id: "M7RGBUB4He-jKEKL9JTR1g", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "payments_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            h.hash = "5b66468936446aae49ccfb5965fb93f4";
            const L = h;
        },
        483557: (e, n, t) => {
            t.d(n, { ZP: () => fe });
            t(571372);
            var i = t(506899),
                r = t(538327),
                l = t(414742),
                s = t(703710),
                a = t(274818),
                o = t(469565),
                d = t.n(o),
                u = t(911990),
                c = t.n(u),
                m = t(243234),
                _ = t.n(m),
                p = t(749872),
                g = t.n(p),
                b = t(226994),
                h = t.n(b),
                L = t(470888),
                k = t.n(L),
                y = t(381452),
                f = t.n(y),
                w = t(782416),
                v = t.n(w),
                F = t(921936),
                T = t.n(F),
                I = t(80131),
                Q = t.n(I),
                S = t(942792),
                K = t.n(S),
                Z = t(124314),
                G = t.n(Z),
                V = t(354847),
                A = t.n(V),
                C = t(590426),
                j = t.n(C),
                R = t(463817),
                E = t.n(R),
                M = t(626619),
                P = t.n(M),
                D = t(946256),
                U = t.n(D),
                N = t(238647),
                q = t.n(N),
                B = t(174607),
                Y = t.n(B),
                x = t(241622),
                O = t.n(x),
                z = t(348562),
                H = t.n(z),
                J = t(499414),
                W = t.n(J),
                X = t(181490),
                $ = t.n(X),
                ee = t(96734),
                ne = t.n(ee),
                te = t(153791),
                ie = t(934309),
                re = t(503768),
                le = t(265617),
                se = t(120071);
            const ae = (e) => ({ ...se.k(e), ...le.kX(e), cursor: -1 }),
                oe = (0, l.kj)((e) => !("User" === e?.user?.result?.__typename && e?.user?.result?.timeline), "GQL URT: Failed to render Lists timeline"),
                de = (0, l.kj)((e) => {
                    const n = e?.list_discovery_list_mixer_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to render Lists Discovery timeline"),
                ue = (0, l.kj)((e) => {
                    const n = e?.viewer?.list_management_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to render Lists Management timeline"),
                ce = (0, l.kj)((e) => {
                    const n = e?.list_subscribe_v3;
                    return !n;
                }, "GQL List: Failed to subscribe"),
                me = (0, l.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to unsubcribe"),
                _e = (0, l.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to add member"),
                pe = (0, l.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to remove member"),
                ge = (0, l.kj)((e) => {
                    const n = e?.list;
                    return !n;
                }, "GQL List: Failed to fetch list by id"),
                be = (0, l.kj)((e) => {
                    const n = e?.user_by_screen_name?.list;
                    return !n;
                }, "GQL List: Failed to fetch list by slug"),
                he = (0, l.kj)((e) => {
                    const n = e?.list?.tweets_timeline?.timeline;
                    return !n;
                }, "GQL URT: Failed to fetch list Tweets timeline"),
                Le = (0, l.kj)((e) => {
                    const n = e?.list?.subscribers_timeline?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Subscribers timeline"),
                ke = (0, l.kj)((e) => {
                    const n = e?.list?.members_timeline?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Members timeline"),
                ye = (0, l.kj)((e) => {
                    const n = e?.list?.recommended_users?.timeline;
                    return !n;
                }, "GQL List: Failed to fetch Recommended Users timeline"),
                fe = ({ apiClient: e, featureSwitches: n }) => ({
                    addToList(t, r) {
                        const { list_id: l, user_id: o } = t;
                        return e.graphQL(c(), { listId: l, userId: o, ...(0, s.S)(n) }, _e).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    createList(t, r) {
                        const { description: l, mode: o, name: d } = t;
                        return e.graphQL(k(), { isPrivate: "private" === o.toLowerCase(), name: d, description: l, ...(0, s.S)(n) }).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    editBannerImage(t, r) {
                        const { listId: l, mediaId: o } = t;
                        return e.graphQL(g(), { listId: l, mediaId: o, ...(0, s.S)(n) }).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    deleteList(n, t) {
                        const { list_id: i } = n;
                        return e.graphQL(v(), { listId: i });
                    },
                    deleteBannerImage(t, r) {
                        const { listId: l } = t;
                        return e.graphQL(_(), { listId: l, ...(0, s.S)(n) }).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    fetchList(t, r) {
                        if (t.list_id) return e.graphQL(E(), { listId: t.list_id, ...(0, s.S)(n) }, ge).then((e) => (0, i.Fv)(e.list, a.Z));
                        if (t.slug) {
                            const { owner_screen_name: r, slug: l } = t;
                            return e.graphQL(h(), { screenName: r, listSlug: l, ...(0, s.S)(n) }, be).then((e) => (0, i.Fv)({ ...e.user_by_screen_name?.list, slug: l }, a.Z));
                        }
                        return Promise.reject(new Error("listId or screenName and slug required to fetch list"));
                    },
                    fetchCombinedLists: ({ count: t, cursor: i, userId: r }) => e.graphQL(d(), { userId: r, count: t, cursor: i, ...(0, s.d)(n) }, oe).then(re.k7),
                    fetchListsManagementPageTimeline: ({ count: t, cursor: i }) =>
                        e.graphQL(Y(), { count: t, cursor: i, ...(0, s.d)(n) }, ue).then((e) => {
                            const n = e.viewer?.list_management_timeline?.timeline;
                            return n || ie.cY;
                        }),
                    fetchTweetsGraphQL(t, i) {
                        const { count: r, cursor: l, listId: a, useRanked: o } = t,
                            d = o ? P() : Q(),
                            u = { listId: a, count: r, cursor: l, ...(0, s.d)(n) };
                        return e.graphQL(d, u, he).then((e) => {
                            const n = e.list.tweets_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchMembersGraphQL(t, i) {
                        const { count: r, cursor: l, listId: a } = t;
                        return e.graphQL(K(), { listId: a, count: r, cursor: l, ...(0, s.d)(n) }, ke).then((e) => {
                            const n = e.list.members_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchRecommendedUsersGraphQL(t, i) {
                        const { count: l, cursor: a, displayLocation: o, listId: d } = t,
                            u = o === r.O.Creation ? f() : T(),
                            c = { listId: d, count: l, cursor: a, ...(0, s.d)(n) };
                        return e.graphQL(u, c, ye).then((e) => {
                            const n = e.list.recommended_users?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchSubscribersGraphQL(t, i) {
                        const { count: r, cursor: l, listId: a } = t;
                        return e.graphQL(H(), { listId: a, count: r, cursor: l, ...(0, s.d)(n) }, Le).then((e) => {
                            const n = e.list.subscribers_timeline?.timeline;
                            return n || ie.cY;
                        });
                    },
                    fetchSuggestedLists: ({ count: t, cursor: i }) => e.graphQL(q(), { count: t, cursor: i, ...(0, s.d)(n) }, de).then((e) => e.list_discovery_list_mixer_timeline?.timeline || ie.cY),
                    fetchOwnershipsGraphQL(t, i) {
                        const { count: r, cursor: l, targetUserId: a, userId: o } = t;
                        return e.graphQL(j(), { userId: o, isListMemberTargetUserId: a, count: r, cursor: l, ...(0, s.d)(n) }, oe).then(re.k7);
                    },
                    fetchMemberships: (t, r) => e.get("lists/memberships", { ...ae(n), ...t }, r || {}).then((e) => (0, i.Fv)(e, te.kD)),
                    fetchMembershipsGraphQL(t, i) {
                        const { count: r, cursor: l, userId: a } = t;
                        return e.graphQL(G(), { userId: a, count: r, cursor: l, ...(0, s.d)(n) }, oe).then(re.k7);
                    },
                    removeFromList(t, r) {
                        const { list_id: l, user_id: o } = t;
                        return e.graphQL(U(), { listId: l, userId: o, ...(0, s.S)(n) }, pe).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    createSubscribers(t, r) {
                        const { list_id: l } = t;
                        return e.graphQL(O(), { listId: l, ...(0, s.S)(n) }, ce).then((e) => (0, i.Fv)(e.list_subscribe_v3, a.Z));
                    },
                    destroySubscribers(t, r) {
                        const { list_id: l } = t;
                        return e.graphQL($(), { listId: l, ...(0, s.S)(n) }, me).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                    toggleMute(n, t) {
                        const { listId: i, mute: r } = n;
                        return r ? e.graphQL(A(), { listId: i }) : e.graphQL(W(), { listId: i });
                    },
                    editList(t, r) {
                        const { description: l, list_id: o, mode: d, name: u } = t;
                        return e.graphQL(ne(), { listId: o, isPrivate: "private" === d.toLowerCase(), description: l, name: u, ...(0, s.S)(n) }).then((e) => (0, i.Fv)(e.list, a.Z));
                    },
                });
        },
        969066: (e, n, t) => {
            t.d(n, { Z: () => a });
            var i = t(183473),
                r = t.n(i),
                l = t(358251),
                s = t.n(l);
            const a = ({ apiClient: e, featureSwitches: n }) => ({ pin: (n) => e.graphQL(r(), n).then((e) => ({ success: e?.create_conversation_pinned_tweet?.success ?? !1 })), unpin: (n) => e.graphQL(s(), n).then((e) => ({ success: e?.delete_conversation_pinned_tweet?.success ?? !1 })) });
        },
        541837: (e, n, t) => {
            t.d(n, { Z: () => l });
            var i = t(276563);
            function r(e) {
                const n = { tweet_id: e.id_str },
                    t = e.promoted_content && e.promoted_content.impression_id;
                return t && (n.impression_id = t), e.card && e.card.name === i.default.CardNames.LIVE_EVENT && (n.live_event_id = i.default.getBindingValue(e.card.binding_values, "event_id")), n;
            }
            const l = ({ apiClient: e, featureSwitches: n }) => ({
                fetch: (n) => {
                    const t = { tweets: n.eligibleTweets.map(r) };
                    n.trigger_preroll && (t.trigger_preroll = n.trigger_preroll), n.prerollDisplayLocation && (t.display_location = n.prerollDisplayLocation);
                    const i = { tweets: JSON.stringify(t) };
                    return e.post("videoads/v2/prerolls", i, {}, {});
                },
            });
        },
        664064: (e, n, t) => {
            t.d(n, { Z: () => d });
            var i = t(807896),
                r = t(202784),
                l = t(523561);
            const s = r.forwardRef(a);
            function a(e, n) {
                return r.createElement(o, (0, i.Z)({}, e, { ref: n }));
            }
            const o = (0, l.Z)({
                    loader: () =>
                        Promise.all([t.e("loader.Confetti-6107ac1a"), t.e("loader.Confetti-d728816b"), t.e("loader.Confetti-229eafb5"), t.e("loader.Confetti-5ccade72")])
                            .then(t.bind(t, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                d = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769.79def04a.js.map

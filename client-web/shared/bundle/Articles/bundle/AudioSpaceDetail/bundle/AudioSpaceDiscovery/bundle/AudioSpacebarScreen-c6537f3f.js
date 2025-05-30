"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"],
    {
        897455: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i,
                r,
                l = n(311405),
                a = n(794357),
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
            const o = s;
        },
        66351: (e, t, n) => {
            n.d(t, { Z: () => L });
            var i,
                r,
                l,
                a,
                s,
                o,
                d,
                c,
                u,
                m,
                _,
                g,
                p,
                b = n(897455),
                h = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "count" }), (r = { defaultValue: null, kind: "LocalArgument", name: "cursor" }), (l = { defaultValue: !1, kind: "LocalArgument", name: "includePromotedContent" }), (a = { defaultValue: null, kind: "LocalArgument", name: "isListMemberTargetUserId" }), (s = { defaultValue: null, kind: "LocalArgument", name: "timelineId" }), (o = { defaultValue: !1, kind: "LocalArgument", name: "withBirdwatchNotes" }), (d = { defaultValue: !1, kind: "LocalArgument", name: "withClientEventToken" }), (c = { defaultValue: !1, kind: "LocalArgument", name: "withCommunity" }), (u = { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" }), (m = { defaultValue: !1, kind: "LocalArgument", name: "withQuickPromoteEligibilityTweetFields" }), (_ = { defaultValue: !1, kind: "LocalArgument", name: "withVoice" })],
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
                        argumentDefinitions: [i, r, l, s, o, u, d, _, a, c, m],
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
                                            { alias: null, args: p, concreteType: "TimelineTimeline", kind: "LinkedField", name: "timeline", plural: !1, selections: [{ args: null, fragment: b.Z, kind: "FragmentSpread" }], storageKey: null },
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
                    params: { id: "o70ZhWcB94MDvNwAySL8aA", metadata: { features: ["articles_preview_enabled", "c9s_tweet_anatomy_moderator_badge_enabled", "communities_web_enable_tweet_community_results_fetch", "creator_subscriptions_quote_tweet_preview_enabled", "creator_subscriptions_tweet_preview_api_enabled", "freedom_of_speech_not_reach_fetch_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "longform_notetweets_consumption_enabled", "longform_notetweets_inline_media_enabled", "longform_notetweets_rich_text_read_enabled", "premium_content_api_read_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "responsive_web_edit_tweet_api_enabled", "responsive_web_enhance_cards_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_grok_analysis_button_from_backend", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_grok_share_attachment_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_jetfuel_frame", "responsive_web_twitter_article_tweet_consumption_enabled", "rweb_tipjar_consumption_enabled", "rweb_video_screen_enabled", "standardized_nudges_misinfo", "tweet_awards_web_tipping_enabled", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "verified_phone_label_enabled", "view_counts_everywhere_api_enabled"] }, name: "managementListsPageTimelineQuery", operationKind: "query", text: null },
                };
            h.hash = "5b66468936446aae49ccfb5965fb93f4";
            const L = h;
        },
        483557: (e, t, n) => {
            n.d(t, { ZP: () => we });
            n(571372);
            var i = n(506899),
                r = n(538327),
                l = n(414742),
                a = n(703710),
                s = n(274818),
                o = n(469565),
                d = n.n(o),
                c = n(911990),
                u = n.n(c),
                m = n(243234),
                _ = n.n(m),
                g = n(749872),
                p = n.n(g),
                b = n(226994),
                h = n.n(b),
                L = n(470888),
                v = n.n(L),
                k = n(381452),
                w = n.n(k),
                y = n(782416),
                f = n.n(y),
                F = n(921936),
                I = n.n(F),
                T = n(80131),
                Q = n.n(T),
                S = n(942792),
                Z = n.n(S),
                K = n(124314),
                C = n.n(K),
                V = n(354847),
                A = n.n(V),
                G = n(590426),
                M = n.n(G),
                j = n(463817),
                E = n.n(j),
                z = n(626619),
                D = n.n(z),
                P = n(946256),
                R = n.n(P),
                N = n(238647),
                U = n.n(N),
                q = n(174607),
                x = n.n(q),
                B = n(241622),
                Y = n.n(B),
                O = n(348562),
                H = n.n(O),
                W = n(499414),
                J = n.n(W),
                X = n(181490),
                $ = n.n(X),
                ee = n(96734),
                te = n.n(ee),
                ne = n(153791),
                ie = n(934309),
                re = n(503768),
                le = n(265617),
                ae = n(120071);
            const se = (e) => ({ ...ae.k(e), ...le.kX(e), cursor: -1 }),
                oe = (0, l.kj)((e) => !("User" === e?.user?.result?.__typename && e?.user?.result?.timeline), "GQL URT: Failed to render Lists timeline"),
                de = (0, l.kj)((e) => {
                    const t = e?.list_discovery_list_mixer_timeline?.timeline;
                    return !t;
                }, "GQL URT: Failed to render Lists Discovery timeline"),
                ce = (0, l.kj)((e) => {
                    const t = e?.viewer?.list_management_timeline?.timeline;
                    return !t;
                }, "GQL URT: Failed to render Lists Management timeline"),
                ue = (0, l.kj)((e) => {
                    const t = e?.list_subscribe_v3;
                    return !t;
                }, "GQL List: Failed to subscribe"),
                me = (0, l.kj)((e) => {
                    const t = e?.list;
                    return !t;
                }, "GQL List: Failed to unsubcribe"),
                _e = (0, l.kj)((e) => {
                    const t = e?.list;
                    return !t;
                }, "GQL List: Failed to add member"),
                ge = (0, l.kj)((e) => {
                    const t = e?.list;
                    return !t;
                }, "GQL List: Failed to remove member"),
                pe = (0, l.kj)((e) => {
                    const t = e?.list;
                    return !t;
                }, "GQL List: Failed to fetch list by id"),
                be = (0, l.kj)((e) => {
                    const t = e?.user_by_screen_name?.list;
                    return !t;
                }, "GQL List: Failed to fetch list by slug"),
                he = (0, l.kj)((e) => {
                    const t = e?.list?.tweets_timeline?.timeline;
                    return !t;
                }, "GQL URT: Failed to fetch list Tweets timeline"),
                Le = (0, l.kj)((e) => {
                    const t = e?.list?.subscribers_timeline?.timeline;
                    return !t;
                }, "GQL List: Failed to fetch Subscribers timeline"),
                ve = (0, l.kj)((e) => {
                    const t = e?.list?.members_timeline?.timeline;
                    return !t;
                }, "GQL List: Failed to fetch Members timeline"),
                ke = (0, l.kj)((e) => {
                    const t = e?.list?.recommended_users?.timeline;
                    return !t;
                }, "GQL List: Failed to fetch Recommended Users timeline"),
                we = ({ apiClient: e, featureSwitches: t }) => ({
                    addToList(n, r) {
                        const { list_id: l, user_id: o } = n;
                        return e.graphQL(u(), { listId: l, userId: o, ...(0, a.S)(t) }, _e).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    createList(n, r) {
                        const { description: l, mode: o, name: d } = n;
                        return e.graphQL(v(), { isPrivate: "private" === o.toLowerCase(), name: d, description: l, ...(0, a.S)(t) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    editBannerImage(n, r) {
                        const { listId: l, mediaId: o } = n;
                        return e.graphQL(p(), { listId: l, mediaId: o, ...(0, a.S)(t) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    deleteList(t, n) {
                        const { list_id: i } = t;
                        return e.graphQL(f(), { listId: i });
                    },
                    deleteBannerImage(n, r) {
                        const { listId: l } = n;
                        return e.graphQL(_(), { listId: l, ...(0, a.S)(t) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    fetchList(n, r) {
                        if (n.list_id) return e.graphQL(E(), { listId: n.list_id, ...(0, a.S)(t) }, pe).then((e) => (0, i.Fv)(e.list, s.Z));
                        if (n.slug) {
                            const { owner_screen_name: r, slug: l } = n;
                            return e.graphQL(h(), { screenName: r, listSlug: l, ...(0, a.S)(t) }, be).then((e) => (0, i.Fv)({ ...e.user_by_screen_name?.list, slug: l }, s.Z));
                        }
                        return Promise.reject(new Error("listId or screenName and slug required to fetch list"));
                    },
                    fetchCombinedLists: ({ count: n, cursor: i, userId: r }) => e.graphQL(d(), { userId: r, count: n, cursor: i, ...(0, a.d)(t) }, oe).then(re.k7),
                    fetchListsManagementPageTimeline: ({ count: n, cursor: i }) =>
                        e.graphQL(x(), { count: n, cursor: i, ...(0, a.d)(t) }, ce).then((e) => {
                            const t = e.viewer?.list_management_timeline?.timeline;
                            return t || ie.cY;
                        }),
                    fetchTweetsGraphQL(n, i) {
                        const { count: r, cursor: l, listId: s, useRanked: o } = n,
                            d = o ? D() : Q(),
                            c = { listId: s, count: r, cursor: l, ...(0, a.d)(t) };
                        return e.graphQL(d, c, he).then((e) => {
                            const t = e.list.tweets_timeline?.timeline;
                            return t || ie.cY;
                        });
                    },
                    fetchMembersGraphQL(n, i) {
                        const { count: r, cursor: l, listId: s } = n;
                        return e.graphQL(Z(), { listId: s, count: r, cursor: l, ...(0, a.d)(t) }, ve).then((e) => {
                            const t = e.list.members_timeline?.timeline;
                            return t || ie.cY;
                        });
                    },
                    fetchRecommendedUsersGraphQL(n, i) {
                        const { count: l, cursor: s, displayLocation: o, listId: d } = n,
                            c = o === r.O.Creation ? w() : I(),
                            u = { listId: d, count: l, cursor: s, ...(0, a.d)(t) };
                        return e.graphQL(c, u, ke).then((e) => {
                            const t = e.list.recommended_users?.timeline;
                            return t || ie.cY;
                        });
                    },
                    fetchSubscribersGraphQL(n, i) {
                        const { count: r, cursor: l, listId: s } = n;
                        return e.graphQL(H(), { listId: s, count: r, cursor: l, ...(0, a.d)(t) }, Le).then((e) => {
                            const t = e.list.subscribers_timeline?.timeline;
                            return t || ie.cY;
                        });
                    },
                    fetchSuggestedLists: ({ count: n, cursor: i }) => e.graphQL(U(), { count: n, cursor: i, ...(0, a.d)(t) }, de).then((e) => e.list_discovery_list_mixer_timeline?.timeline || ie.cY),
                    fetchOwnershipsGraphQL(n, i) {
                        const { count: r, cursor: l, targetUserId: s, userId: o } = n;
                        return e.graphQL(M(), { userId: o, isListMemberTargetUserId: s, count: r, cursor: l, ...(0, a.d)(t) }, oe).then(re.k7);
                    },
                    fetchMemberships: (n, r) => e.get("lists/memberships", { ...se(t), ...n }, r || {}).then((e) => (0, i.Fv)(e, ne.kD)),
                    fetchMembershipsGraphQL(n, i) {
                        const { count: r, cursor: l, userId: s } = n;
                        return e.graphQL(C(), { userId: s, count: r, cursor: l, ...(0, a.d)(t) }, oe).then(re.k7);
                    },
                    removeFromList(n, r) {
                        const { list_id: l, user_id: o } = n;
                        return e.graphQL(R(), { listId: l, userId: o, ...(0, a.S)(t) }, ge).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    createSubscribers(n, r) {
                        const { list_id: l } = n;
                        return e.graphQL(Y(), { listId: l, ...(0, a.S)(t) }, ue).then((e) => (0, i.Fv)(e.list_subscribe_v3, s.Z));
                    },
                    destroySubscribers(n, r) {
                        const { list_id: l } = n;
                        return e.graphQL($(), { listId: l, ...(0, a.S)(t) }, me).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                    toggleMute(t, n) {
                        const { listId: i, mute: r } = t;
                        return r ? e.graphQL(A(), { listId: i }) : e.graphQL(J(), { listId: i });
                    },
                    editList(n, r) {
                        const { description: l, list_id: o, mode: d, name: c } = n;
                        return e.graphQL(te(), { listId: o, isPrivate: "private" === d.toLowerCase(), description: l, name: c, ...(0, a.S)(t) }).then((e) => (0, i.Fv)(e.list, s.Z));
                    },
                });
        },
        969066: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(183473),
                r = n.n(i),
                l = n(358251),
                a = n.n(l);
            const s = ({ apiClient: e, featureSwitches: t }) => ({ pin: (t) => e.graphQL(r(), t).then((e) => ({ success: e?.create_conversation_pinned_tweet?.success ?? !1 })), unpin: (t) => e.graphQL(a(), t).then((e) => ({ success: e?.delete_conversation_pinned_tweet?.success ?? !1 })) });
        },
        541837: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(276563);
            function r(e) {
                const t = { tweet_id: e.id_str },
                    n = e.promoted_content && e.promoted_content.impression_id;
                return n && (t.impression_id = n), e.card && e.card.name === i.default.CardNames.LIVE_EVENT && (t.live_event_id = i.default.getBindingValue(e.card.binding_values, "event_id")), t;
            }
            const l = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: (t) => {
                    const n = { tweets: t.eligibleTweets.map(r) };
                    t.trigger_preroll && (n.trigger_preroll = t.trigger_preroll), t.prerollDisplayLocation && (n.display_location = t.prerollDisplayLocation);
                    const i = { tweets: JSON.stringify(n) };
                    return e.post("videoads/v2/prerolls", i, {}, {});
                },
            });
        },
        664064: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(807896),
                r = n(202784),
                l = n(523561);
            const a = r.forwardRef(s);
            function s(e, t) {
                return r.createElement(o, (0, i.Z)({}, e, { ref: t }));
            }
            const o = (0, l.Z)({
                    loader: () =>
                        Promise.all([n.e("loader.Confetti-6107ac1a"), n.e("loader.Confetti-d728816b"), n.e("loader.Confetti-229eafb5"), n.e("loader.Confetti-5ccade72")])
                            .then(n.bind(n, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                d = a;
        },
        609980: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        820803: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15 10H9V8h6v2zm-2 4H9v-2h4v2zm-.847 8.99c4.215-.652 8.988-5.523 9.097-11.469l-2-.037c-.083 4.574-3.395 8.102-6.25 9.211v-2.292l-1.786-.191C7.528 17.815 4.75 14.714 4.75 11c0-3.998 3.252-7.25 7.25-7.25v-2c-5.101 0-9.25 4.149-9.25 9.25 0 4.738 3.546 8.693 8.25 9.2v2.969l1.153-.179zm4.39-16.95l1.414 1.42L20 5.41l2.043 2.05 1.414-1.42L21.414 4l2.043-2.04L22.043.54 20 2.59 17.957.54l-1.414 1.42L18.586 4l-2.043 2.04z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f.028dbd6a.js.map

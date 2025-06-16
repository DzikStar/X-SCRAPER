(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-a2dee9c7"],
    {
        25770: (e) => {
            e.exports = { queryId: "Ohq34UUvwVMOCcrVZvXcxw", operationName: "DmAllSearchSlice", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        892314: (e) => {
            e.exports = { queryId: "YUpv7YPz8uB7j6rAaCCF7g", operationName: "DmGroupSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        407737: (e) => {
            e.exports = { queryId: "moZx2Xl6PDoMwOnkepKwIA", operationName: "DmMutedTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        845308: (e) => {
            e.exports = { queryId: "W26fnOQ7uTdektooZAiuYw", operationName: "DmPeopleSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        386569: (e) => {
            e.exports = { queryId: "2qKKYFQift8p5-J1k6kqxQ", operationName: "WriteEmailNotificationSettings", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        346759: (e) => {
            e.exports = { queryId: "JpjlNgn4sLGvS6tgpTzYBg", operationName: "ViewerEmailSettings", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        629928: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var i,
                a,
                r,
                l,
                s,
                o,
                c,
                u = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: i,
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [r, l, s, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), o], storageKey: null }, c], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            c,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            u.hash = "6269adea05f11011ee2eec87df25951d";
            const d = u;
        },
        993770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: a },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = r;
        },
        507421: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PasskeyManagement_Query",
                        selections: [
                            {
                                alias: null,
                                args: i,
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [r, a], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            l.hash = "b177c906c03e19affd73768f7a0ec360";
            const s = l;
        },
        130919: (e, t, n) => {
            "use strict";
            n.d(t, { t: () => i });
            const i = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                a,
                r,
                l = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (a = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "origin_product", variableName: "origin_product" },
                                    { kind: "Variable", name: "return_url", variableName: "return_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ],
                                concreteType: "CreateCustomerPortalSessionResponse",
                                kind: "LinkedField",
                                name: "customerportalsession_create",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "customer_portal_session_url", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, i], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: r },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            l.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const s = l;
        },
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: i,
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, r], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            l.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = l;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i,
                a,
                r,
                l,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: l, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, i, r], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const c = o;
        },
        919299: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var i = n(506899),
                a = n(414742),
                r = n(703710),
                l = n(771613),
                s = n(25770),
                o = n.n(s),
                c = n(892314),
                u = n.n(c),
                d = n(407737),
                m = n.n(d),
                _ = n(845308),
                p = n.n(_),
                g = n(934309);
            const h = (e, t) => {
                    let n = !1;
                    if (t?.dmPeopleSearchSlice) n = !!t?.dmPeopleSearchSlice?.items?.length;
                    else if (t?.dmGroupSearchSlice) n = !!t?.dmGroupSearchSlice?.items?.length;
                    else if (t?.dmMessageSearchSlice) {
                        if ("DMMessageSlice" !== t?.dmMessageSearchSlice.__typename) return !0;
                        n = !!t?.dmMessageSearchSlice?.items?.length;
                    }
                    return !n && (0, a.jB)(e);
                },
                y = (e) => {
                    const t = e.items?.map((e) => e?.dm_convo_search);
                    return (0, i.Fv)(t, [l.ZP]);
                },
                f = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(o(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      n = e?.dmMessageSearchSlice,
                                      a = e?.dmPeopleSearchSlice;
                                  let r = g.d;
                                  if (t) {
                                      const { entities: e, result: n } = y(t),
                                          i = t.items?.find((e) => e?.highlighting?.query_tokens),
                                          a = i && t.items?.map((e) => e?.highlighting?.query_tokens);
                                      r = { result: r?.result.concat({ groupData: { result: n, highlightingTokens: a } }), entities: e };
                                  }
                                  if (a) {
                                      const { entities: e, result: t } = y(a),
                                          n = a.items?.find((e) => e?.highlighting?.query_tokens),
                                          i = n && a.items?.map((e) => e?.highlighting?.query_tokens);
                                      r = { ...r, result: r?.result.concat({ peopleData: { result: t, highlightingTokens: i } }), entities: { ...r?.entities, ...e } };
                                  }
                                  if (n && "DMMessageSlice" === n?.__typename) {
                                      const e = n?.items,
                                          t = (0, i.Fv)(e, [l.JJ]),
                                          a = e?.map((e) => e?.dm_event?.legacy?.conversation),
                                          s = e?.find((e) => e?.highlighting?.query_tokens),
                                          o = s && e?.map((e) => e?.highlighting?.query_tokens),
                                          { entities: c, result: u } = (0, i.Fv)(a, [l.ZP]);
                                      r = { ...r, result: r?.result?.concat({ messageData: { conversationIds: u, entryIds: t?.result, highlightingTokens: o } }), entities: { ...t?.entities, conversations: { ...r?.entities?.conversations, ...c?.conversations } } };
                                  }
                                  return r;
                              })
                            : Promise.resolve(g.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(u(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = y(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return g.d;
                              })
                            : Promise.resolve(g.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(p(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = y(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return g.d;
                              })
                            : Promise.resolve(g.d),
                    fetchDMMutedUsers: ({ count: n, cursor: i }) =>
                        e
                            .graphQL(
                                m(),
                                { count: n, cursor: i, includePromotedContent: !1, ...(0, r.d)(t) },
                                (0, a.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || g.cY;
                            }),
                });
        },
        327202: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(163889),
                a = n(386569),
                r = n.n(a),
                l = n(346759),
                s = n.n(l);
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: () =>
                    e.graphQL(s(), {}).then((e) => {
                        let t;
                        if (e.viewer) {
                            const { user_results: n } = e.viewer;
                            "User" === n?.result?.__typename && (t = n.result.notifications_email_notifications);
                        }
                        return t || (0, i.ZP)("GraphQL email notification settings query returned no settings object."), t || {};
                    }),
                update(t) {
                    const { settings: n, userId: i } = t;
                    return e.graphQL(r(), { userId: i, settings: n });
                },
            });
        },
        745978: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            const i = ({ apiClient: e, featureSwitches: t }) => ({ fetchMutedKeywords: (t, n) => e.get("mutes/keywords/list", t, n), fetchDiscouragedKeywords: (t, n) => e.get("mutes/keywords/discouraged", t, n), addMutedKeyword: (t, n) => e.post("mutes/keywords/create", t, {}, n), deleteMutedKeyword: (t, n) => e.post("mutes/keywords/destroy", t, {}, n), updateMutedKeyword: (t, n) => e.post("mutes/keywords/update", t, {}, n) });
        },
        816776: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var i = n(360917),
                a = n.n(i);
            const r = ({ apiClient: e, featureSwitches: t }) => ({
                fetch(t, n = {}) {
                    const { userId: i } = t;
                    return e.get(`strato/column/User/${i}/search/searchSafetyReadonly`, a(), n, "");
                },
                set(t, n = {}) {
                    const { userId: i, ...r } = t;
                    return e.post(`strato/column/User/${i}/search/searchSafety`, r, a(), { ...n, "content-type": "application/json" }, "");
                },
            });
        },
        740527: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var i = n(769471),
                a = n(934309),
                r = n(750085),
                l = n(401388),
                s = n(626421),
                o = n(497461);
            const c = (e) => {
                    const t = (0, o.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, l.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: a, topic: r, ...l } = n,
                                o = a && (0, s.Zn)(e, a);
                            return { ...l, topicId: (0, s.S0)(e, r), facepile: o };
                        })(t, e),
                        a = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, s.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: a.navBar && a.navBar, title: a.title, subtitle: a.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                u = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, r.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, r.Z)(n.initialTimeline.timeline.timeline) : (0, r.Z)(a.cY);
                    var n;
                    const { globalObjects: l, pageConfiguration: s } = c(e);
                    return { ...t, globalObjects: (0, i.Z)(l, t.globalObjects), pageConfiguration: s };
                };
        },
        771613: (e, t, n) => {
            "use strict";
            n.d(t, { JJ: () => d, ZP: () => _ });
            n(136728);
            var i = n(506899),
                a = n(967262),
                r = n(275365),
                l = n(318752),
                s = n(701788),
                o = n(171697);
            const c = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                u = Object.freeze({ MessageCreate: r.Cr.MESSAGE, ParticipantsJoin: r.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: r.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: r.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: r.Cr.JOIN_CONVERSATION }),
                d = new i.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: s.Z, tweet: { status: o.Z } } } },
                    {
                        processStrategy: (e, t, n) => {
                            const { legacy: i, rest_id: r } = e?.dm_event || {},
                                s = i?.event_type,
                                { affects_sort: o, request_id: c } = i || {};
                            let d,
                                m,
                                _ = "Unknown";
                            s in u && (_ = u[s]);
                            const p = i?.conversation?.rest_id,
                                g = i?.event_detail?.dm,
                                h = i?.created_at_millis,
                                { card: y, media: f, tweet_results: b, urls_entity: v } = g?.attachments?.[0] || {};
                            if (
                                (y?.legacy && (d = { card: y }),
                                v?.length &&
                                    g.text &&
                                    v.forEach((e) => {
                                        e?.indices[0] && (m = g.text.slice(0, e?.indices[0]).concat(g.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === b?.result?.__typename)
                            ) {
                                const e = b?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: n, expanded_url: i, id_str: a, indices: r, url: l } = t || {},
                                    { extended_entities: s } = b?.result?.legacy || {},
                                    o = s?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    c = { ...b?.result?.legacy?.extended_entities, media: o };
                                d = { tweet: { status: { ...b?.result, legacy: { ...b?.result?.legacy, extended_entities: c } }, display_url: n, expanded_url: i, indices: r, url: l, id: a } };
                            }
                            const w = f ? (0, a.m)(f) : null;
                            w && w.type && ("photo" === w.type ? (d = { photo: w }) : "video" === w.type ? (d = { video: w }) : "animated_gif" === w.type && (d = { animated_gif: w }));
                            const k = { affects_sort: o, request_id: c, time: h, type: _, conversation_id: p, message_data: { id: r, text: m || g?.text, entities: g?.entities, recipient_id: g?.recipient_results?.result?.rest_id, sender_id: g?.sender_results?.result.rest_id, attachment: d }, id: r };
                            return (0, l.Z)(k, t, n);
                        },
                        idAttribute: (e) => e?.dm_event?.rest_id,
                    },
                ),
                m = new i.fK.Entity(
                    "conversations",
                    {},
                    {
                        processStrategy: (e, t, n) => {
                            const { id: i, labels: a, legacy: s, perspectival_conversation_metadata: o, rest_id: u, tag: d } = e || {},
                                m = {},
                                _ = [];
                            for (const e of s?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy || !t.core) continue;
                                const n = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.core.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.core.screen_name };
                                (m[t.rest_id] = n), _.push({ user: n, user_id: t.rest_id });
                            }
                            let p = s?.metadata?.avatar;
                            const g = p?.media_info,
                                h = e?.last_readable_event_id;
                            if (g) {
                                const { original_img_height: e, original_img_url: t, original_img_width: n } = g || {};
                                p = { image: { original_info: { height: e, width: n, url: t } } };
                            }
                            const y = s?.metadata?.conversation_type === c.GROUP ? r.eD.GROUP : r.eD.ONE_TO_ONE,
                                f = { ...s?.perspectival_conversation_metadata, ...s?.metadata, ...o, id: i, conversation_id: u, avatar: p, labels: a, last_readable_event_id: h, type: y, participants: _, users: m, tag: d };
                            return (0, l.Z)(f, t, n);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            m.define({ entities: d });
            const _ = m;
        },
        917009: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                a = n(154003),
                r = n(111677),
                l = n.n(r),
                s = n(379327);
            const o = l().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return i.createElement(a.ZP, { "aria-label": t, hoverLabel: { label: o }, icon: i.createElement(s.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        947135: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(202784),
                a = n(242454),
                r = n(190286);
            class l extends i.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: l, confirmationSheetHeadline: s, confirmationSheetText: o, label: c } = this.props;
                    return i.createElement(i.Fragment, null, i.createElement(a.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? i.createElement(r.Z, { confirmButtonLabel: n, confirmButtonType: l, headline: s, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: o }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            n(136728);
            var i = n(202784),
                a = n(638236),
                r = n(811176),
                l = n(111677),
                s = n.n(l),
                o = n(415506),
                c = n(516951),
                u = n(443781),
                d = n(376293),
                m = n(847607),
                _ = n(417714),
                p = n(988823);
            const g = "block",
                h = "mute",
                y = "removeFollower",
                f = "report",
                b = "share",
                v = s().j7bb1a43,
                w = s().hef5960c,
                k = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { onBlock: n, onClose: l, onMute: s, onRemoveFollower: p, onReportUser: k, onShare: S, onUnblock: T, onUnmute: C, user: I } = e,
                        F = [],
                        Z = (t, n) => {
                            const { confirm: i, onClose: a } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                i({ confirmButtonLabel: e, ...r })
                                    .then(n, c.Z)
                                    .finally(a);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        F.push({
                            Icon: a.Z,
                            onClick: () => {
                                l(), S();
                            },
                            testID: b,
                            text: w,
                        });
                    !I.blocking &&
                        F.push({
                            ...(0, m.N1)(
                                I,
                                () => {
                                    l(), s();
                                },
                                () => {
                                    l(), C();
                                },
                            ),
                            testID: h,
                        });
                    I.followed_by &&
                        F.push({
                            ...(0, _.l)({
                                removeFollowerAction: (e) => {
                                    Z(e, p);
                                },
                                user: I,
                            }),
                            testID: y,
                        }),
                        F.push((0, d.op)({ blockAction: (e) => Z(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: d.SC.FOLLOWERS_LIST, testID: g, unblockAction: (e) => Z(e, T), user: I })),
                        F.push({
                            Icon: o.default,
                            onClick: () => {
                                l(), k();
                            },
                            testID: f,
                            text: v({ screenName: I.screen_name }),
                        });
                    const L = F.map(({ Icon: e, onClick: t, testID: n, text: i }) => ({ text: i, onClick: t, Icon: e, testID: n }));
                    return i.createElement(r.Z, { items: L, onCloseRequested: l });
                });
        },
        222718: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => y });
            var i = n(202784),
                a = n(325686),
                r = n(537392),
                l = n(10656),
                s = n(655352),
                o = n(555079),
                c = n(500002),
                u = n(625661),
                d = n(449067),
                m = n(655543),
                _ = n(715601),
                p = n(392237);
            const g = p.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...p.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? i.createElement(a.Z, { style: g.fill }, i.createElement(_.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return i.createElement(r.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: a, showBackButtonOnRoot: r, showSubtitleOnRoot: l, showSubtitleOnWideDetail: o, showTitleOnRoot: c, withBottomBorder: u, withDetailOpen: m, ..._ } = this.props;
                    return i.createElement(i.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : i.createElement(d.Z.Configure, _), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return i.createElement(i.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: r, backLocation: l, documentTitle: s, headerless: c, history: m, leftControl: _, middleControl: p, onBackClick: h, rightControl: y, screenType: f, searchBoxOptions: b, secondaryBar: v, showBackButtonOnRoot: w, showSubtitleOnRoot: k, showSubtitleOnWideDetail: S, showTitleOnRoot: T, subtitle: C, title: I, titleIconCell: F, titleIconCellSize: Z, withDetailOpen: L, withSearchBox: P, withTweetButton: D, withWideContainer: E } = this.props,
                        O = "root" === f,
                        U = "secondaryRoot" === f,
                        K = "primaryDetail" === f,
                        x = (K && S) || (O && k),
                        A = (O && !w) || (K && e),
                        R = (O && !T) || (K && e && !T),
                        V = O ? o.ey : K ? o.vX : void 0,
                        M = i.createElement(a.Z, { style: g.appBarContainer }, i.createElement(u.ZP, { backLocation: l, fixed: !1, hideBackButton: A, history: m, leftControl: _, middleControl: p, onBackClick: h, rightControl: y, secondaryBar: v, style: r, subtitle: x ? C : void 0, title: R ? void 0 : I, titleDomId: V, titleIconCell: F, titleIconCellSize: Z, withWideContainer: E })),
                        N = O || (U && L) ? null : i.createElement(d.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: l, documentTitle: s, headerless: c, middleControl: p, onBackClick: h, rightControl: y, searchBoxOptions: b, subtitle: C, title: I, withSearchBox: P, withTweetButton: D });
                    return i.createElement(i.Fragment, null, N, M);
                }
            }
            (h.contextType = m.Z), (h.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const y = (0, c.ZP)(h);
        },
        496364: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i = n(202784),
                a = n(107267),
                r = n(791632),
                l = n(222718);
            const s = (e) => {
                const t = (0, a.useHistory)();
                return (0, r.HD)(t) ? e.children || null : i.createElement(l.Z, e);
            };
        },
        811105: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var i = n(202784),
                a = n(325686),
                r = n(731708),
                l = n(392237),
                s = n(111677),
                o = n.n(s);
            const c = o().c174e46e,
                u = o().a39075ff,
                d = l.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                m = (e) => {
                    const { scopes: t, size: n, title: l } = e,
                        [s, o] = i.useState(!1),
                        m = i.useCallback(() => {
                            o((e) => !e);
                        }, []),
                        _ = s ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(r.ZP, { style: d.scopesHeader, weight: "bold" }, l),
                        i.createElement(
                            a.Z,
                            { role: "list" },
                            _.map((e) => i.createElement(r.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: d.listItem }, e.description)),
                        ),
                        p && s ? i.createElement(r.ZP, { onPress: m, style: d.toggleMoreLink }, c) : null,
                        p && !s ? i.createElement(r.ZP, { onPress: m, style: d.toggleMoreLink }, u({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => c, b: () => u });
            var i = n(807896),
                a = n(202784),
                r = n(392237),
                l = n(779610);
            const s = (e) => {
                    const { Icon: t, iconColor: n, testID: i } = e;
                    return a.createElement(t, { style: n ? { color: r.default.theme.colors[n] } : o.thumbnail, testID: i });
                },
                o = r.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: r, ...o } = e;
                return a.createElement(l.Z, (0, i.Z)({}, o, { thumbnail: a.createElement(s, { Icon: t, iconColor: n, testID: r }), thumbnailSize: "large" }));
            }
            function u(e) {
                const { link: t, ...n } = e;
                return a.createElement(l.Z, (0, i.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i = n(807896),
                a = n(202784),
                r = n(771099);
            const l = (e) => (t) => a.createElement(r.$6, null, (n) => a.createElement(e, (0, i.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(807896),
                a = n(202784),
                r = n(107267),
                l = n(403556),
                s = n(791632);
            const o = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: n, ...o } = e;
                    return a.createElement(l.Z, (0, i.Z)({}, o, { isCompact: n || (0, s.HD)(t) }));
                },
                c = a.memo(o);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var i = n(202784),
                a = n(154003),
                r = n(111677),
                l = n.n(r),
                s = n(74514),
                o = n(405303),
                c = n(684511),
                u = n(860174),
                d = n(71620),
                m = n(668214),
                _ = n(257166),
                p = n(919022);
            const g = (e, t) => !(!t.allowPromptForPush || !_.selectShouldPromptBrowserPush(e)),
                h = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                y = l().bdba3e1a,
                f = l().c4da7d28,
                b = l().j87c21f4,
                v = l().iebc30ca,
                w = l().dc740eb2;
            class k extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? i.createElement(a.ZP, { "aria-label": f, hoverLabel: { label: v }, icon: i.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : i.createElement(a.ZP, { "aria-label": y, hoverLabel: { label: b }, icon: i.createElement(o.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return i.createElement("div", null, this.state.showingPushPrompt ? i.createElement(c.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: i } = this.props;
                    return n(i, { device: e }).catch(t(u.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const S = h(k);
        },
        583335: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => b });
            var i = n(202784),
                a = n(154003),
                r = n(40904),
                l = n(391366),
                s = n(847607),
                o = n(775412),
                c = n(837731),
                u = n(942893),
                d = n(71620),
                m = n(668214),
                _ = n(629196),
                p = n(601576),
                g = n(919022);
            const h = (e, t) => g.ZP.select(e, t.userId),
                y = (0, m.Z)()
                    .propsFromState(() => ({ user: h }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, d.zr)("MUTE_BUTTON_CONTAINER"), mute: _.r, unmute: g.ZP.unmute }))
                    .withAnalytics();
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: i, user: a, userId: r } = this.props;
                            return a
                                ? a.muting
                                    ? i(r).then((t) => {
                                          e({ text: (0, s.X6)(a.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(r).then((t) => {
                                          e({ text: (0, s.FK)(a.screen_name) }), this._scribeAction("mute_user");
                                      }, t(o.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? r.default : l.default,
                        o = e.muting ? (0, s.PY)(e.screen_name) : (0, s.Aq)(e.screen_name),
                        c = e.muting ? s.cm : s.GS;
                    return i.createElement(a.ZP, { "aria-label": o, hoverLabel: { label: c }, icon: i.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const b = y(f);
        },
        301410: (e, t, n) => {
            "use strict";
            n.d(t, { i: () => p.ZP, z: () => f });
            var i = n(202784),
                a = n(928123),
                r = n.n(a),
                l = n(72845),
                s = n.n(l),
                o = n(57074),
                c = n.n(o),
                u = n(516951),
                d = n(88656),
                m = n(71620),
                _ = n(163889),
                p = n(312771);
            const g = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: u.Z });
            class h extends i.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, _.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const y = ({ query: e, queryRef: t, render: n }) => {
                    const i = r()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: i, error: null, retry: u.Z });
                },
                f = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: a, variables: r }) {
                        const [l, o] = s()(e),
                            u = (0, m.n7)(t.errorConfig.context),
                            d = c()(r),
                            _ = i.useCallback(() => {
                                o(d, { fetchPolicy: "network-only" });
                            }, [o, d]);
                        return (
                            i.useLayoutEffect(() => {
                                o(d, { fetchPolicy: n });
                            }, [n, o, d]),
                            l
                                ? i.createElement(
                                      i.Suspense,
                                      { fallback: i.createElement(g, { render: a }) },
                                      i.createElement(h, { errorHandler: u(t.errorConfig.options || {}), key: l.fetchKey, retry: _ }, (t, n) => (t ? a({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : i.createElement(y, { query: e, queryRef: l, render: a }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var i = n(202784),
                a = n(325686),
                r = n(731708),
                l = n(855488),
                s = n(420412),
                o = n(844685),
                c = n(392237),
                u = n(111677),
                d = n.n(u),
                m = n(666536),
                _ = n(668214),
                p = n(395042),
                g = n(919022);
            const h = (0, _.Z)()
                    .propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const n = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            i = t?.screen_name;
                        return { viewerUser: t, suggestions: n, valid: (!!i && i.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                y = d().d1f6d336,
                f = d().de65c756;
            class b extends i.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: n } = this.props;
                            n && t({ email: n.email && n.email[0] && n.email[0].address, full_name: n.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const n = e.target.textContent;
                                this.setState({ value: n }), t(n);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, m.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, t) {
                    return i.createElement(r.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: v.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: r, viewerUser: c } = this.props;
                    if (!c) return null;
                    const u = !(n === c.screen_name || t || !r);
                    return i.createElement(
                        a.Z,
                        null,
                        i.createElement(l.Z, { autoComplete: "off", autoCorrect: !1, errorText: r, invalid: u, label: y, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        i.createElement(s.Z, null),
                        i.createElement(o.Z, { text: f }),
                        i.createElement(
                            a.Z,
                            { style: v.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const v = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                w = h(b);
        },
        733487: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => T });
            var i = n(202784),
                a = n(154003),
                r = n(111677),
                l = n.n(r),
                s = n(40904),
                o = n(391366),
                c = n(775412),
                u = n(837731),
                d = n(942893),
                m = n(71620),
                _ = n(668214),
                p = n(296196),
                g = n(601576),
                h = n(919022);
            const y = (e, t) => h.ZP.select(e, t.userId),
                f = (0, _.Z)()
                    .propsFromState(() => ({ user: y }))
                    .propsFromActions(() => ({ addToast: g.fz, createLocalApiErrorHandler: (0, m.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                b = l().e67b2d65,
                v = l().f05597b3,
                w = l().gde6b425,
                k = l().e308019b;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: i, user: a, userId: r } = this.props;
                            return a
                                ? a.dm_muting
                                    ? i(r).then((t) => {
                                          e({ text: k({ name: a.name }) }), this._scribeAction("unmute_user");
                                      }, t(u.G))
                                    : n(r).then((t) => {
                                          e({ text: w({ name: a.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? s.default : o.default,
                        r = e.dm_muting ? v({ screenName: e.screen_name }) : b({ screenName: e.screen_name });
                    return i.createElement(a.ZP, { "aria-label": r, icon: i.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [d.Z.getUserItem(n)] : [] } });
                }
            }
            const T = f(S);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-a2dee9c7.fc3e858a.js.map

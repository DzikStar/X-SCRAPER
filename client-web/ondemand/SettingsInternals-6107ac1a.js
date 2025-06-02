(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-6107ac1a"],
    {
        25770: (e) => {
            e.exports = { queryId: "ZA6VQ0tEQOXPnq5Zep5h9g", operationName: "DmAllSearchSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        892314: (e) => {
            e.exports = { queryId: "YUpv7YPz8uB7j6rAaCCF7g", operationName: "DmGroupSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        407737: (e) => {
            e.exports = { queryId: "r5r9mifbTV1gL64zkmkR1g", operationName: "DmMutedTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
            n.d(t, { Z: () => u });
            var i,
                r,
                a,
                s,
                l,
                o,
                c,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (l = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [r, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, s, l, (c = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), o], storageKey: null }, c], type: "User", abstractKey: null },
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
            d.hash = "6269adea05f11011ee2eec87df25951d";
            const u = d;
        },
        993770: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (r = [
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
                    operation: { argumentDefinitions: i, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: r },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "6b62958a6368974d13a27b8fe59103e0";
            const s = a;
        },
        507421: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i,
                r,
                a,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PasskeyManagement_Query", selections: [{ kind: "RequiredField", field: { alias: null, args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, concreteType: "PasskeyTwoFactorAuthMethod", kind: "LinkedField", name: "passkey_auth_settings_with_view", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "client_type", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null })], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [a, r], type: "User", abstractKey: null },
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
                    params: { id: "8fWHnipHAqfhgFo-rAXk5w", metadata: {}, name: "PasskeyManagement_Query", operationKind: "query", text: null },
                };
            s.hash = "b177c906c03e19affd73768f7a0ec360";
            const l = s;
        },
        130919: (e, t, n) => {
            "use strict";
            n.d(t, { t: () => i });
            const i = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        96768: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i,
                r,
                a,
                s = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "origin_product" }), (r = { defaultValue: null, kind: "LocalArgument", name: "return_url" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useCreateStripePortalUrlMutation",
                        selections: (a = [
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
                    operation: { argumentDefinitions: [r, i], kind: "Operation", name: "useCreateStripePortalUrlMutation", selections: a },
                    params: { id: "vymd-xe7b364mogIF1CoQQ", metadata: {}, name: "useCreateStripePortalUrlMutation", operationKind: "mutation", text: null },
                };
            s.hash = "dd6e427b3b50f257ac31f7815dc841c2";
            const l = s;
        },
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var i,
                r,
                a,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (i = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(r = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [r, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, a], type: "User", abstractKey: null },
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
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            s.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const l = s;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i,
                r,
                a,
                s,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (l = [
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
                                    { kind: "InlineFragment", selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: s, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [r, i, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: l },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const c = o;
        },
        919299: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => y });
            var i = n(506899),
                r = n(414742),
                a = n(703710),
                s = n(771613),
                l = n(25770),
                o = n.n(l),
                c = n(892314),
                d = n.n(c),
                u = n(407737),
                m = n.n(u),
                p = n(845308),
                g = n.n(p),
                _ = n(934309);
            const h = (e, t) => {
                    let n = !1;
                    if (t?.dmPeopleSearchSlice) n = !!t?.dmPeopleSearchSlice?.items?.length;
                    else if (t?.dmGroupSearchSlice) n = !!t?.dmGroupSearchSlice?.items?.length;
                    else if (t?.dmMessageSearchSlice) {
                        if ("DMMessageSlice" !== t?.dmMessageSearchSlice.__typename) return !0;
                        n = !!t?.dmMessageSearchSlice?.items?.length;
                    }
                    return !n && (0, r.jB)(e);
                },
                f = (e) => {
                    const t = e.items?.map((e) => e?.dm_convo_search);
                    return (0, i.Fv)(t, [s.ZP]);
                },
                y = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(o(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      n = e?.dmMessageSearchSlice,
                                      r = e?.dmPeopleSearchSlice;
                                  let a = _.d;
                                  if (t) {
                                      const { entities: e, result: n } = f(t),
                                          i = t.items?.find((e) => e?.highlighting?.query_tokens),
                                          r = i && t.items?.map((e) => e?.highlighting?.query_tokens);
                                      a = { result: a?.result.concat({ groupData: { result: n, highlightingTokens: r } }), entities: e };
                                  }
                                  if (r) {
                                      const { entities: e, result: t } = f(r),
                                          n = r.items?.find((e) => e?.highlighting?.query_tokens),
                                          i = n && r.items?.map((e) => e?.highlighting?.query_tokens);
                                      a = { ...a, result: a?.result.concat({ peopleData: { result: t, highlightingTokens: i } }), entities: { ...a?.entities, ...e } };
                                  }
                                  if (n && "DMMessageSlice" === n?.__typename) {
                                      const e = n?.items,
                                          t = (0, i.Fv)(e, [s.JJ]),
                                          r = e?.map((e) => e?.dm_event?.legacy?.conversation),
                                          l = e?.find((e) => e?.highlighting?.query_tokens),
                                          o = l && e?.map((e) => e?.highlighting?.query_tokens),
                                          { entities: c, result: d } = (0, i.Fv)(r, [s.ZP]);
                                      a = { ...a, result: a?.result?.concat({ messageData: { conversationIds: d, entryIds: t?.result, highlightingTokens: o } }), entities: { ...t?.entities, conversations: { ...a?.entities?.conversations, ...c?.conversations } } };
                                  }
                                  return a;
                              })
                            : Promise.resolve(_.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(d(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return _.d;
                              })
                            : Promise.resolve(_.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(g(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return _.d;
                              })
                            : Promise.resolve(_.d),
                    fetchDMMutedUsers: ({ count: n, cursor: i }) =>
                        e
                            .graphQL(
                                m(),
                                { count: n, cursor: i, includePromotedContent: !1, ...(0, a.d)(t) },
                                (0, r.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || _.cY;
                            }),
                });
        },
        327202: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(163889),
                r = n(386569),
                a = n.n(r),
                s = n(346759),
                l = n.n(s);
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: () =>
                    e.graphQL(l(), {}).then((e) => {
                        let t;
                        if (e.viewer) {
                            const { user_results: n } = e.viewer;
                            "User" === n?.result?.__typename && (t = n.result.notifications_email_notifications);
                        }
                        return t || (0, i.ZP)("GraphQL email notification settings query returned no settings object."), t || {};
                    }),
                update(t) {
                    const { settings: n, userId: i } = t;
                    return e.graphQL(a(), { userId: i, settings: n });
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
            n.d(t, { Z: () => a });
            var i = n(360917),
                r = n.n(i);
            const a = ({ apiClient: e, featureSwitches: t }) => ({
                fetch(t, n = {}) {
                    const { userId: i } = t;
                    return e.get(`strato/column/User/${i}/search/searchSafetyReadonly`, r(), n, "");
                },
                set(t, n = {}) {
                    const { userId: i, ...a } = t;
                    return e.post(`strato/column/User/${i}/search/searchSafety`, a, r(), { ...n, "content-type": "application/json" }, "");
                },
            });
        },
        740527: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var i = n(769471),
                r = n(934309),
                a = n(750085),
                s = n(401388),
                l = n(626421),
                o = n(497461);
            const c = (e) => {
                    const t = (0, o.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, s.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        i = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: i, facepile: r, topic: a, ...s } = n,
                                o = r && (0, l.Zn)(e, r);
                            return { ...s, topicId: (0, l.S0)(e, a), facepile: o };
                        })(t, e),
                        r = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, l.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: i, navBar: r.navBar && r.navBar, title: r.title, subtitle: r.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, a.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, a.Z)(n.initialTimeline.timeline.timeline) : (0, a.Z)(r.cY);
                    var n;
                    const { globalObjects: s, pageConfiguration: l } = c(e);
                    return { ...t, globalObjects: (0, i.Z)(s, t.globalObjects), pageConfiguration: l };
                };
        },
        771613: (e, t, n) => {
            "use strict";
            n.d(t, { JJ: () => u, ZP: () => p });
            n(136728);
            var i = n(506899),
                r = n(967262),
                a = n(275365),
                s = n(318752),
                l = n(701788),
                o = n(171697);
            const c = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                d = Object.freeze({ MessageCreate: a.Cr.MESSAGE, ParticipantsJoin: a.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: a.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: a.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: a.Cr.JOIN_CONVERSATION }),
                u = new i.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: l.Z, tweet: { status: o.Z } } } },
                    {
                        processStrategy: (e, t, n) => {
                            const { legacy: i, rest_id: a } = e?.dm_event || {},
                                l = i?.event_type,
                                { affects_sort: o, request_id: c } = i || {};
                            let u,
                                m,
                                p = "Unknown";
                            l in d && (p = d[l]);
                            const g = i?.conversation?.rest_id,
                                _ = i?.event_detail?.dm,
                                h = i?.created_at_millis,
                                { card: f, media: y, tweet_results: b, urls_entity: v } = _?.attachments?.[0] || {};
                            if (
                                (f?.legacy && (u = { card: f }),
                                v?.length &&
                                    _.text &&
                                    v.forEach((e) => {
                                        e?.indices[0] && (m = _.text.slice(0, e?.indices[0]).concat(_.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === b?.result?.__typename)
                            ) {
                                const e = b?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: n, expanded_url: i, id_str: r, indices: a, url: s } = t || {},
                                    { extended_entities: l } = b?.result?.legacy || {},
                                    o = l?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    c = { ...b?.result?.legacy?.extended_entities, media: o };
                                u = { tweet: { status: { ...b?.result, legacy: { ...b?.result?.legacy, extended_entities: c } }, display_url: n, expanded_url: i, indices: a, url: s, id: r } };
                            }
                            const k = y ? (0, r.m)(y) : null;
                            k && k.type && ("photo" === k.type ? (u = { photo: k }) : "video" === k.type ? (u = { video: k }) : "animated_gif" === k.type && (u = { animated_gif: k }));
                            const w = { affects_sort: o, request_id: c, time: h, type: p, conversation_id: g, message_data: { id: a, text: m || _?.text, entities: _?.entities, recipient_id: _?.recipient_results?.result?.rest_id, sender_id: _?.sender_results?.result.rest_id, attachment: u }, id: a };
                            return (0, s.Z)(w, t, n);
                        },
                        idAttribute: (e) => e?.dm_event?.rest_id,
                    },
                ),
                m = new i.fK.Entity(
                    "conversations",
                    {},
                    {
                        processStrategy: (e, t, n) => {
                            const { id: i, labels: r, legacy: l, perspectival_conversation_metadata: o, rest_id: d, tag: u } = e || {},
                                m = {},
                                p = [];
                            for (const e of l?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy || !t.core) continue;
                                const n = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.core.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.core.screen_name };
                                (m[t.rest_id] = n), p.push({ user: n, user_id: t.rest_id });
                            }
                            let g = l?.metadata?.avatar;
                            const _ = g?.media_info,
                                h = e?.last_readable_event_id;
                            if (_) {
                                const { original_img_height: e, original_img_url: t, original_img_width: n } = _ || {};
                                g = { image: { original_info: { height: e, width: n, url: t } } };
                            }
                            const f = l?.metadata?.conversation_type === c.GROUP ? a.eD.GROUP : a.eD.ONE_TO_ONE,
                                y = { ...l?.perspectival_conversation_metadata, ...l?.metadata, ...o, id: i, conversation_id: d, avatar: g, labels: r, last_readable_event_id: h, type: f, participants: p, users: m, tag: u };
                            return (0, s.Z)(y, t, n);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            m.define({ entities: u });
            const p = m;
        },
        917009: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(154003),
                a = n(111677),
                s = n.n(a),
                l = n(379327);
            const o = s().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return i.createElement(r.ZP, { "aria-label": t, hoverLabel: { label: o }, icon: i.createElement(l.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        947135: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i = n(202784),
                r = n(242454),
                a = n(190286);
            class s extends i.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: s, confirmationSheetHeadline: l, confirmationSheetText: o, label: c } = this.props;
                    return i.createElement(i.Fragment, null, i.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? i.createElement(a.Z, { confirmButtonLabel: n, confirmButtonType: s, headline: l, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: o }) : null);
                }
            }
            s.defaultProps = { color: "red500", align: "center" };
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            n(136728);
            var i = n(202784),
                r = n(638236),
                a = n(811176),
                s = n(111677),
                l = n.n(s),
                o = n(415506),
                c = n(516951),
                d = n(443781),
                u = n(376293),
                m = n(847607),
                p = n(417714),
                g = n(988823);
            const _ = "block",
                h = "mute",
                f = "removeFollower",
                y = "report",
                b = "share",
                v = l().j7bb1a43,
                k = l().hef5960c,
                w = (0, g.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: s, onMute: l, onRemoveFollower: g, onReportUser: w, onShare: S, onUnblock: C, onUnmute: T, user: x } = e,
                        Z = [],
                        I = (t, n) => {
                            const { confirm: i, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                i({ confirmButtonLabel: e, ...a })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !x.protected &&
                        !x.blocking &&
                        !x.blocked_by &&
                        Z.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), S();
                            },
                            testID: b,
                            text: k,
                        });
                    !x.blocking &&
                        Z.push({
                            ...(0, m.N1)(
                                x,
                                () => {
                                    s(), l();
                                },
                                () => {
                                    s(), T();
                                },
                            ),
                            testID: h,
                        });
                    x.followed_by &&
                        Z.push({
                            ...(0, p.l)({
                                removeFollowerAction: (e) => {
                                    I(e, g);
                                },
                                user: x,
                            }),
                            testID: f,
                        }),
                        Z.push((0, u.op)({ blockAction: (e) => I(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: _, unblockAction: (e) => I(e, C), user: x })),
                        Z.push({
                            Icon: o.default,
                            onClick: () => {
                                s(), w();
                            },
                            testID: y,
                            text: v({ screenName: x.screen_name }),
                        });
                    const P = Z.map(({ Icon: e, onClick: t, testID: n, text: i }) => ({ text: i, onClick: t, Icon: e, testID: n }));
                    return i.createElement(a.Z, { items: P, onCloseRequested: s });
                });
        },
        811105: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var i = n(202784),
                r = n(325686),
                a = n(731708),
                s = n(392237),
                l = n(111677),
                o = n.n(l);
            const c = o().c174e46e,
                d = o().a39075ff,
                u = s.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                m = (e) => {
                    const { scopes: t, size: n, title: s } = e,
                        [l, o] = i.useState(!1),
                        m = i.useCallback(() => {
                            o((e) => !e);
                        }, []),
                        p = l ? t : t.slice(0, 3),
                        g = t.length > 3;
                    return i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(a.ZP, { style: u.scopesHeader, weight: "bold" }, s),
                        i.createElement(
                            r.Z,
                            { role: "list" },
                            p.map((e) => i.createElement(a.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: u.listItem }, e.description)),
                        ),
                        g && l ? i.createElement(a.ZP, { onPress: m, style: u.toggleMoreLink }, c) : null,
                        g && !l ? i.createElement(a.ZP, { onPress: m, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => c, b: () => d });
            var i = n(807896),
                r = n(202784),
                a = n(392237),
                s = n(779610);
            const l = (e) => {
                    const { Icon: t, iconColor: n, testID: i } = e;
                    return r.createElement(t, { style: n ? { color: a.default.theme.colors[n] } : o.thumbnail, testID: i });
                },
                o = a.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: a, ...o } = e;
                return r.createElement(s.Z, (0, i.Z)({}, o, { thumbnail: r.createElement(l, { Icon: t, iconColor: n, testID: a }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(s.Z, (0, i.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i = n(807896),
                r = n(202784),
                a = n(771099);
            const s = (e) => (t) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, i.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(807896),
                r = n(202784),
                a = n(107267),
                s = n(403556),
                l = n(791632);
            const o = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: n, ...o } = e;
                    return r.createElement(s.Z, (0, i.Z)({}, o, { isCompact: n || (0, l.HD)(t) }));
                },
                c = r.memo(o);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var i = n(202784),
                r = n(154003),
                a = n(111677),
                s = n.n(a),
                l = n(74514),
                o = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                m = n(668214),
                p = n(257166),
                g = n(919022);
            const _ = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                h = (0, m.Z)()
                    .propsFromState(() => ({ shouldPromptPush: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: g.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = s().bdba3e1a,
                y = s().c4da7d28,
                b = s().j87c21f4,
                v = s().iebc30ca,
                k = s().dc740eb2;
            class w extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? i.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: v }, icon: i.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : i.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: b }, icon: i.createElement(o.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return i.createElement("div", null, this.state.showingPushPrompt ? i.createElement(c.Z, { fullScreen: !0, message: k }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: i } = this.props;
                    return n(i, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const S = h(w);
        },
        583335: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => b });
            var i = n(202784),
                r = n(154003),
                a = n(40904),
                s = n(391366),
                l = n(847607),
                o = n(775412),
                c = n(837731),
                d = n(942893),
                u = n(71620),
                m = n(668214),
                p = n(629196),
                g = n(601576),
                _ = n(919022);
            const h = (e, t) => _.ZP.select(e, t.userId),
                f = (0, m.Z)()
                    .propsFromState(() => ({ user: h }))
                    .propsFromActions(() => ({ addToast: g.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: p.r, unmute: _.ZP.unmute }))
                    .withAnalytics();
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: i, user: r, userId: a } = this.props;
                            return r
                                ? r.muting
                                    ? i(a).then((t) => {
                                          e({ text: (0, l.X6)(r.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(a).then((t) => {
                                          e({ text: (0, l.FK)(r.screen_name) }), this._scribeAction("mute_user");
                                      }, t(o.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? a.default : s.default,
                        o = e.muting ? (0, l.PY)(e.screen_name) : (0, l.Aq)(e.screen_name),
                        c = e.muting ? l.cm : l.GS;
                    return i.createElement(r.ZP, { "aria-label": o, hoverLabel: { label: c }, icon: i.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [d.Z.getUserItem(n)] : [] } });
                }
            }
            const b = f(y);
        },
        301410: (e, t, n) => {
            "use strict";
            n.d(t, { i: () => g.ZP, z: () => y });
            var i = n(202784),
                r = n(928123),
                a = n.n(r),
                s = n(72845),
                l = n.n(s),
                o = n(57074),
                c = n.n(o),
                d = n(516951),
                u = n(88656),
                m = n(71620),
                p = n(163889),
                g = n(312771);
            const _ = ({ render: e }) => e({ fetchStatus: g.ZP.LOADING, data: null, error: null, retry: d.Z });
            class h extends i.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, p.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: t, render: n }) => {
                    const i = a()(e, t);
                    return n({ fetchStatus: g.ZP.LOADED, data: i, error: null, retry: d.Z });
                },
                y = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: r, variables: a }) {
                        const [s, o] = l()(e),
                            d = (0, m.n7)(t.errorConfig.context),
                            u = c()(a),
                            p = i.useCallback(() => {
                                o(u, { fetchPolicy: "network-only" });
                            }, [o, u]);
                        return (
                            i.useLayoutEffect(() => {
                                o(u, { fetchPolicy: n });
                            }, [n, o, u]),
                            s
                                ? i.createElement(
                                      i.Suspense,
                                      { fallback: i.createElement(_, { render: r }) },
                                      i.createElement(h, { errorHandler: d(t.errorConfig.options || {}), key: s.fetchKey, retry: p }, (t, n) => (t ? r({ fetchStatus: g.ZP.FAILED, error: t, data: null, retry: n }) : i.createElement(f, { query: e, queryRef: s, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            var i = n(202784),
                r = n(325686),
                a = n(731708),
                s = n(855488),
                l = n(420412),
                o = n(844685),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                m = n(666536),
                p = n(668214),
                g = n(395042),
                _ = n(919022);
            const h = (0, p.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser, usernameData: g.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const n = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            i = t?.screen_name;
                        return { viewerUser: t, suggestions: n, valid: (!!i && i.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: g.HR })),
                f = u().d1f6d336,
                y = u().de65c756;
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
                    return i.createElement(a.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: v.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: a, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(n === c.screen_name || t || !a);
                    return i.createElement(
                        r.Z,
                        null,
                        i.createElement(s.Z, { autoComplete: "off", autoCorrect: !1, errorText: a, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        i.createElement(l.Z, null),
                        i.createElement(o.Z, { text: y }),
                        i.createElement(
                            r.Z,
                            { style: v.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const v = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                k = h(b);
        },
        733487: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var i = n(202784),
                r = n(154003),
                a = n(111677),
                s = n.n(a),
                l = n(40904),
                o = n(391366),
                c = n(775412),
                d = n(837731),
                u = n(942893),
                m = n(71620),
                p = n(668214),
                g = n(296196),
                _ = n(601576),
                h = n(919022);
            const f = (e, t) => h.ZP.select(e, t.userId),
                y = (0, p.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: _.fz, createLocalApiErrorHandler: (0, m.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: g.muteDMUser, unmuteDMUser: g.unmuteDMUser }))
                    .withAnalytics(),
                b = s().e67b2d65,
                v = s().f05597b3,
                k = s().gde6b425,
                w = s().e308019b;
            class S extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: i, user: r, userId: a } = this.props;
                            return r
                                ? r.dm_muting
                                    ? i(a).then((t) => {
                                          e({ text: w({ name: r.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : n(a).then((t) => {
                                          e({ text: k({ name: r.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? l.default : o.default,
                        a = e.dm_muting ? v({ screenName: e.screen_name }) : b({ screenName: e.screen_name });
                    return i.createElement(r.ZP, { "aria-label": a, icon: i.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const C = y(S);
        },
        362075: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => m });
            var i = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(688715),
                l = n(950822),
                o = n(386802),
                c = n(392237);
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = r.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: n } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return n ? n(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let i;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    i = JSON.parse(e.data);
                                } catch (t) {
                                    return void (n && n(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(i);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: n, dangerouslyDisableSandbox: i, src: o, style: c, title: d } = this.props,
                        { isModal: m } = this.context,
                        p = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        g = (0, l.Z)("iframe", { allow: `${p.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, s.ju)(o), style: u.iframe, title: d, ...(i ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${n ? " allow-top-navigation" : ""}` }) });
                    return r.createElement(a.Z, { style: m ? [u.root, u.modalPadding, c] : [u.root, c] }, g);
                }
            }
            d.contextType = o.t;
            const u = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                m = r.forwardRef((e, t) => r.createElement(d, (0, i.Z)({ forwardedRef: t }, e)));
        },
        943401: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var i = n(202784),
                r = n(731708),
                a = n(392237);
            class s extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return i.createElement(r.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        a = l.root;
                    return t && n ? i.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : i.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const l = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                o = s;
        },
        928088: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var i = n(202784),
                r = n(325686);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = function ({ children: e }) {
                    return i.createElement(r.Z, { style: a.root }, e);
                };
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var i = n(202784),
                r = n(325686),
                a = n(731708),
                s = n(392237);
            class l extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return i.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? i.createElement(a.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: s, withBottomBorder: l } = this.props;
                    return i.createElement(r.Z, { style: [o.root, l && o.bottomBorder] }, i.createElement(a.ZP, null, e), s ? (t && n ? this._renderSubtextAndLink() : i.createElement(a.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            l.defaultProps = { withBottomBorder: !0 };
            const o = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = l;
        },
        80512: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var i = n(202784),
                r = n(325686),
                a = n(815858),
                s = n(731708),
                l = n(449479),
                o = n(392237),
                c = n(451566);
            let d = 1;
            class u extends i.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: n, onChange: i, options: r, value: a } = this.props;
                            i(t, a === n ? e?.value || r[0].value : n);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: o, name: d, offValue: u, onChange: p, options: g, value: _ } = this.props;
                    return i.createElement(r.Z, { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "group", style: [m.root, n && m.disabled] }, i.createElement(i.Fragment, null, o ? i.createElement(r.Z, { id: this._labelId, role: "label", style: m.header }, i.createElement(r.Z, { style: m.label }, i.createElement(s.ZP, { weight: "bold" }, o), i.createElement(c.Z, { disabled: n, onValueChange: this._handleGateToggle, value: _ !== u })), t ? i.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, g && i.createElement(a.Z, { onAnimateComplete: this._handleAnimationComplete, show: _ !== u }, i.createElement(r.Z, null, i.createElement(r.Z, { style: m.radioGroup, tabIndex: 0 }, i.createElement(l.Z, { "aria-label": e || o, disabled: n, name: d, onChange: p, options: g, ref: this._setRadioGroupRef, value: _ }))))));
                }
            }
            u.defaultProps = { disabled: !1 };
            const m = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => T });
            var i = n(807896),
                r = n(202784),
                a = n(194504),
                s = n(235902),
                l = n(392237),
                o = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                m = n(516951),
                p = n(731708),
                g = n(310088),
                _ = n(175993),
                h = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                b = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: i, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const r = l.default.theme.colors.text,
                                a = l.default.theme.colors.gray700;
                            return n || i ? (e || t ? r : a) : e ? r : a;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: a, color: s, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: m, isWebRedesign: _, retainScrollPosition: k, style: S, to: C } = this.props,
                        { location: T } = this.state,
                        x = C ? this._getMemoizedLink(C, k) : void 0,
                        Z = c ? c(C) : T?.pathname === x?.pathname,
                        I = h.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? w.pillHoverStyle.backgroundColor : void 0 }),
                        P = _ ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: I, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [w.pillStyle] : [w.link]), ...(u && Z ? [w.pillActiveStyle] : []), d ? (u ? w.compactPill : w.compactLink) : null, m ? w.roundedRect : null, S], withoutInteractiveStyles: _ }, ({ isFocused: t, isHovered: c }) => r.createElement(o.Z, { style: u && w.flexGrow }, r.createElement(p.ZP, { size: _ ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(Z, c, _, u) }, d && w.compactText, _ && t && w.focusedText, u && w.pillTextStyle, u && Z && w.pillActiveTextStyle, u && c && w.pillHoverTextStyle], weight: P }, e && r.createElement(e, { style: w.icon }), a, _ || u ? null : r.createElement(o.Z, { style: Z && [w.border, { backgroundColor: l.default.theme.colors[s] }] })), n ? r.createElement(g.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : i ? r.createElement(g.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (k.contextType = _.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                S = k,
                C = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        g = p() && !l,
                        _ = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...s }, c) => {
                                    const d = g ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return r.createElement(S, (0, i.Z)({ viewType: a }, s, { isCompact: n, isPillLink: l, isRoundedRect: o, isWebRedesign: g, style: d }), t);
                                }),
                            [e, n, l, o, g, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && C.gap, childrenStyle: !g && C.flexGrow, key: m, style: [l ? null : C.segmentedControl, g && C.leftAligned, d], visibleItemIndex: u }, _);
                };
        },
        74514: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => o });
            var i = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        155353: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => o });
            var i = n(202784),
                r = n(890601),
                a = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-6107ac1a.6d23662a.js.map

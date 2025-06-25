(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia"],
    {
        488816: (e) => {
            e.exports = { queryId: "qaIzg304L134B5-NI43j2A", operationName: "UniversalSearchFeedbackMutation", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        794197: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => i });
            var l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "view" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DebugDrawerConversationIdQuery",
                        selections: (t = [
                            {
                                alias: "result",
                                args: [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "view", variableName: "view" },
                                ],
                                kind: "ScalarField",
                                name: "grok_internal_shared_conversation",
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "DebugDrawerConversationIdQuery", selections: t },
                    params: { id: "p1BzDIePWwkumE2_qYB98w", metadata: {}, name: "DebugDrawerConversationIdQuery", operationKind: "query", text: null },
                };
            r.hash = "c1b4506ef1fe6cd782adce780ddd9db6";
            const i = r;
        },
        184711: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => o });
            var l,
                t,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(l = { defaultValue: null, kind: "LocalArgument", name: "custom_instruction" }), (t = { defaultValue: null, kind: "LocalArgument", name: "enabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "personality" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "GetGrokCustomizationSettingMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "custom_instruction", variableName: "custom_instruction" },
                                    { kind: "Variable", name: "enabled", variableName: "enabled" },
                                    { kind: "Variable", name: "personality", variableName: "personality" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "SetGrokCustomizationSettingResponse",
                                kind: "LinkedField",
                                name: "set_grok_customization_setting",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "SetGrokCustomizationSettingError", kind: "LinkedField", name: "customization_setting_update_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [t, l, r], kind: "Operation", name: "GetGrokCustomizationSettingMutation", selections: i },
                    params: { id: "G9u4mrv5jrU5UvFexfnEhw", metadata: {}, name: "GetGrokCustomizationSettingMutation", operationKind: "mutation", text: null },
                };
            s.hash = "ab8855d74a542ae7a2058136d2b84573";
            const o = s;
        },
        358687: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => r });
            var l,
                t = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "GetGrokCustomizationSettingQuery",
                        selections: (l = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "fd90" }],
                                concreteType: "GrokCustomizationSetting",
                                kind: "LinkedField",
                                name: "get_grok_customization_setting",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "enabled", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonality",
                                        kind: "LinkedField",
                                        name: "personality",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, concreteType: "GrokCustomInstruction", kind: "LinkedField", name: "custom_instruction", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "instruction", storageKey: null }], storageKey: null },
                                ],
                                storageKey: 'get_grok_customization_setting(s:"fd90")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "GetGrokCustomizationSettingQuery", selections: l },
                    params: { id: "luwvdzCT7dsLdRRfOCsz6Q", metadata: {}, name: "GetGrokCustomizationSettingQuery", operationKind: "query", text: null },
                };
            t.hash = "5047e706a450a40281c0bc138d0850bb";
            const r = t;
        },
        207274: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => i });
            var l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "conversation_ids" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_ids", variableName: "conversation_ids" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                kind: "ScalarField",
                                name: "forget_grok_memory_related_conversations",
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery", selections: t },
                    params: { id: "OMSyrw3LRaTeQttlpXWxPQ", metadata: {}, name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery", operationKind: "query", text: null },
                };
            r.hash = "809d2fa3ac80236cf3f3c3af7809eb22";
            const i = r;
        },
        822343: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => i });
            var l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "conversation_ids" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_ids", variableName: "conversation_ids" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GetMemoryRelatedConversationResponse",
                                kind: "LinkedField",
                                name: "get_grok_memory_related_conversations",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "MemoryRelatedConversation",
                                        kind: "LinkedField",
                                        name: "related_conversations",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_title", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_summary", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "updated_at_sec", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery", selections: t },
                    params: { id: "blP2X7XRazL-cjKxiBUITw", metadata: {}, name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery", operationKind: "query", text: null },
                };
            r.hash = "3d453e9a15d101fe19501f80abde2411";
            const i = r;
        },
        550523: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => i });
            var l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "basicFeedback" },
                            { defaultValue: null, kind: "LocalArgument", name: "contextualFeedback" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationItemId" },
                            { defaultValue: null, kind: "LocalArgument", name: "modelVersion" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "feedbackMutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "basic_feedback", variableName: "basicFeedback" },
                                    { kind: "Variable", name: "contextual_feedback", variableName: "contextualFeedback" },
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "conversation_item_id", variableName: "conversationItemId" },
                                    { kind: "Variable", name: "model_version", variableName: "modelVersion" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokConversationFeedbackResponse",
                                kind: "LinkedField",
                                name: "create_grok_conversation_feedback",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "GrokConversationFeedbackError", kind: "LinkedField", name: "grok_feedback_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "feedbackMutation", selections: t },
                    params: { id: "zv33bjbLTa35aipqMBnLgw", metadata: {}, name: "feedbackMutation", operationKind: "mutation", text: null },
                };
            r.hash = "12afbaf03bc93234ee883b8a950c0b04";
            const i = r;
        },
        738310: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => K });
            var l,
                t,
                r,
                i,
                s,
                o,
                d,
                u,
                c,
                m,
                g,
                p,
                y,
                k,
                h,
                b,
                f,
                _,
                v,
                F,
                C = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "grokTokFeedQuery",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "feed_types", value: "Image" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ]),
                                concreteType: "GrokFeed",
                                kind: "LinkedField",
                                name: "grok_feed",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokFeedItemWithPrompt",
                                        kind: "LinkedField",
                                        name: "items",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "item",
                                                plural: !1,
                                                selections: [
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "image_id", storageKey: null }),
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }),
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "original_share_id", storageKey: null }),
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "original_post_id_results", plural: !1, selections: [(d = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null }), { kind: "RequiredField", field: (c = { alias: null, args: null, kind: "ScalarField", name: "favorited", storageKey: null }), action: "THROW" }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserResults",
                                                                kind: "LinkedField",
                                                                name: "user_id_results",
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
                                                                                    (m = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [s], storageKey: null }),
                                                                                    (g = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    }),
                                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (p = { alias: null, args: null, kind: "ScalarField", name: "followers_count", storageKey: null }), action: "THROW" }, (y = { alias: null, args: null, kind: "ScalarField", name: "default_profile_image", storageKey: null })], storageKey: null },
                                                                                    (k = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserRelationshipPerspectives",
                                                                                        kind: "LinkedField",
                                                                                        name: "relationship_perspectives",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    }),
                                                                                    (h = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserVerification",
                                                                                        kind: "LinkedField",
                                                                                        name: "verification",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
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
                                                        type: "GrokFeedImageItem",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            (b = { alias: null, args: null, concreteType: "GrokFeedItemPrompt", kind: "LinkedField", name: "prompt", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "prompt", storageKey: null }], storageKey: null }),
                                            (f = { alias: null, args: null, concreteType: "GrokFeedItemStats", kind: "LinkedField", name: "stats", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "likes", storageKey: null }], storageKey: null }),
                                        ],
                                        storageKey: null,
                                    },
                                    (_ = { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "grokTokFeedQuery", selections: [{ alias: null, args: t, concreteType: "GrokFeed", kind: "LinkedField", name: "grok_feed", plural: !1, selections: [{ alias: null, args: null, concreteType: "GrokFeedItemWithPrompt", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "item", plural: !1, selections: [r, { kind: "InlineFragment", selections: [i, s, o, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "original_post_id_results", plural: !1, selections: [d, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [u, c], storageKey: null }, (v = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), (F = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Tweet", abstractKey: null }], storageKey: null }, F], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_id_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [m, g, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [p, y], storageKey: null }, v, k, h, F], type: "User", abstractKey: null }], storageKey: null }, F], storageKey: null }], type: "GrokFeedImageItem", abstractKey: null }], storageKey: null }, b, f], storageKey: null }, _], storageKey: null }] },
                    params: { id: "j2kbQjoIwOzI1leopt1p7g", metadata: {}, name: "grokTokFeedQuery", operationKind: "query", text: null },
                };
            C.hash = "bde1e6d4c09f229863167dc092c9ef4a";
            const K = C;
        },
        764877: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => d });
            var l,
                t,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "textPromptsQuery",
                        selections: (s = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "fd90" }],
                                concreteType: "GrokConfig",
                                kind: "LinkedField",
                                name: "grok_config",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiGrokPromptRevision",
                                        kind: "LinkedField",
                                        name: "prompt_revisions",
                                        plural: !0,
                                        selections: [
                                            (l = { alias: null, args: null, kind: "ScalarField", name: "icon_name", storageKey: null }),
                                            (t = { alias: null, args: null, kind: "ScalarField", name: "prompt", storageKey: null }),
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "ApiGrokPromptRevisionChild",
                                                kind: "LinkedField",
                                                name: "children",
                                                plural: !0,
                                                selections: [
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "display_label", storageKey: null }),
                                                    l,
                                                    t,
                                                    (i = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiToolOverrides",
                                                        kind: "LinkedField",
                                                        name: "tool_overrides",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "image_gen", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "trends_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "web_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_media_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_post_analyze", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_search", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'grok_config(s:"fd90")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "textPromptsQuery", selections: s },
                    params: { id: "XYzED3n5LtrNZJA9XsmzrA", metadata: {}, name: "textPromptsQuery", operationKind: "query", text: null },
                };
            o.hash = "40a6c4ac1d9ef945b1d328cdc16513e4";
            const d = o;
        },
        781472: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => i });
            var l,
                t,
                r = {
                    fragment: {
                        argumentDefinitions: (l = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "isConversationShare" },
                            { defaultValue: null, kind: "LocalArgument", name: "rangeEnd" },
                            { defaultValue: null, kind: "LocalArgument", name: "rangeStart" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useShareGrokConversationMutation",
                        selections: (t = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "is_conversation_share", variableName: "isConversationShare" },
                                    { kind: "Variable", name: "range_end", variableName: "rangeEnd" },
                                    { kind: "Variable", name: "range_start", variableName: "rangeStart" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_grok_share",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "share_id", storageKey: null }], type: "GrokShareId", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], type: "GrokError", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useShareGrokConversationMutation", selections: t },
                    params: { id: "VjcMAfH8MXzaWoNmAsUidw", metadata: {}, name: "useShareGrokConversationMutation", operationKind: "mutation", text: null },
                };
            r.hash = "71469fd753713a81ef72304dc4531b74";
            const i = r;
        },
        15038: (e, a, n) => {
            "use strict";
            n.d(a, { ZP: () => u });
            var l = n(202784),
                t = n(325686),
                r = n(950822),
                i = n(392237);
            const s = (e) => (0, r.Z)("div", e);
            class o extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: a } = this.props;
                            e.preventDefault();
                            a(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: a } = this.props;
                            e.preventDefault(), a && a(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: a, children: n, style: r } = this.props,
                        { active: i } = this.state,
                        o = a ? d.dragBorderValid : d.dragBorderInvalid;
                    return l.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [d.root, r, i && o, i && e] }, l.createElement(t.Z, { style: d.inner }, "function" == typeof n ? n(i) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            o.defaultProps = { allowDragDrop: !0 };
            const d = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                u = o;
        },
        420412: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => o });
            var l = n(202784),
                t = n(325686),
                r = n(235902),
                i = n(885015),
                s = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: a = !1, label: n }) {
                const { isWebRedesign: o } = r.ZP.useProps(),
                    u = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? l.createElement(i.Z, { style: !a && d.root, withGutter: !0 }, l.createElement(t.Z, { style: d.gapColumn }, l.createElement(t.Z, { style: [d.gap, u] })), l.createElement(t.Z, { style: d.gapText }, n), l.createElement(t.Z, { style: d.gapColumn }, l.createElement(t.Z, { style: [d.gap, u] }))) : l.createElement(t.Z, { style: [!a && d.root, o() && d.rootRedesign, d.gap, u] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => d });
            var l = n(807896),
                t = n(202784),
                r = n(325686),
                i = n(392237);
            class s extends t.Component {
                render() {
                    const { children: e, style: a, withGutter: n, ...i } = this.props,
                        s = t.Children.map(e, (e) => e && t.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return t.createElement(r.Z, (0, l.Z)({ style: [a, o.root, n && o.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const o = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        557707: (e, a, n) => {
            "use strict";
            n.d(a, { ZP: () => C });
            var l = n(807896),
                t = n(202784),
                r = n(466999),
                i = n(325686),
                s = n(111677),
                o = n.n(s),
                d = n(837020),
                u = n(540820),
                c = n(731708),
                m = n(154003),
                g = n(108362),
                p = n(661810),
                y = n(365023),
                k = n(292627),
                h = n(537392),
                b = n(392237);
            const f = o().af8fa2ae,
                _ = t.createElement(d.default, null);
            class v extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: a } = this.props;
                            return t.createElement(i.Z, { role: "alert", style: b.default.visuallyHidden, testID: e }, t.createElement(r.Z, null, a));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && t.createElement(u.default, { style: F.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && t.createElement(i.Z, null, t.createElement(c.ZP, { color: "whiteOnColor", style: F.titleText }, e.payload.message), t.createElement(p.Z, { spacing: "space12", style: F.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: a, withAutoDismiss: n, withClearButton: l } = this.props;
                            return t.createElement(t.Fragment, null, t.createElement(c.ZP, { color: "whiteOnColor", style: F.titleText }, a), t.createElement(i.Z, { "aria-hidden": n, style: F.actionButtons }, e && this._renderActionLabel(e), l && t.createElement(m.ZP, { "aria-label": f, borderColor: "transparent", color: "white", icon: _, onPress: this._handleClose, style: F.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return t.createElement(t.Fragment, null, this._renderIcon(), t.createElement(i.Z, { style: F.body }, this._renderDecoration(), t.createElement(i.Z, { style: F.content }, e)));
                                    }
                                    case "jetfuel":
                                        return t.createElement(t.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return F.rootVariantJp;
                                    case "jetfuel":
                                        return F.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: a, style: n, testID: r, variant: s } = this.props,
                                o = n?.length ? [...n] : [n],
                                d = s ? this._renderVariantContent() : this._renderContent();
                            return t.createElement(
                                a,
                                null,
                                t.createElement(
                                    g.Z,
                                    { style: F.noPointerEvents },
                                    t.createElement(y.Z, { id: "Toast" }, (a, n) => t.createElement(i.Z, (0, l.Z)({ ref: a() }, n({ role: "alert", style: [F.root, s && this._getRootVariantStyle(), ...o, e > b.default.theme.breakpoints.medium && F.rootWide], testID: r })), d)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: a } = this.props;
                            return t.createElement(g.Z, null, t.createElement(i.Z, { role: "alert", style: [F.root, e > b.default.theme.breakpoints.medium && F.rootWide], testID: a }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: a, onClose: n, text: l, withAutoDismiss: t } = this.props;
                            if (t) {
                                const t = a || v.calculateDismissDelay(l, !!e);
                                this._timerId = setTimeout(n, t);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: a, onClose: n } = this.props;
                            a?.onAction && a.onAction(e), n(e);
                        }),
                        (this._handleClose = (e) => {
                            this._stopTimer(), this.props.onClose(e);
                        });
                }
                componentDidMount() {
                    this._createTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                render() {
                    const { ariaOnly: e, withoutLayer: a } = this.props;
                    return e ? this._renderAriaOnly() : t.createElement(h.ZP, null, a ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: a, link: n } = e;
                    return t.createElement(c.ZP, { children: a, color: "whiteOnColor", link: n, onClick: this._handleActionPress, style: [F.actionText, !n && F.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, a) {
                    const n = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (n < 4e3 ? 4e3 : n) + (a ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            v.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: k.Z.ModalToasts };
            const F = b.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                C = v;
        },
        183806: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => l });
            const l = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        662678: (e, a, n) => {
            "use strict";
            n.d(a, { G: () => t, Z: () => l });
            n(136728);
            const l = function (e, a) {
                return t(e, a);
            };
            function t(e, a) {
                return e.reduce(
                    (n, l, t) => {
                        const r = a ? a(l, t, e) : !!l;
                        return r && n[0].push(l), !r && n[1].push(l), n;
                    },
                    [[], []],
                );
            }
        },
        706307: (e, a, n) => {
            "use strict";
            n.d(a, { Z: () => y });
            var l = n(807896),
                t = n(231461),
                r = n(202784),
                i = n(752778),
                s = n(748803),
                o = n(297689),
                d = n(325686),
                u = n(180612),
                c = ["activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"];
            function m(e, a) {
                (0, u.O)("TouchableOpacity", "TouchableOpacity is deprecated. Please use Pressable.");
                var n = e.activeOpacity,
                    o = e.delayPressIn,
                    m = e.delayPressOut,
                    p = e.delayLongPress,
                    y = e.disabled,
                    k = e.focusable,
                    h = e.onLongPress,
                    b = e.onPress,
                    f = e.onPressIn,
                    _ = e.onPressOut,
                    v = e.rejectResponderTermination,
                    F = e.style,
                    C = (0, t.Z)(e, c),
                    K = (0, r.useRef)(null),
                    L = (0, i.Z)(a, K),
                    S = (0, r.useState)("0s"),
                    D = S[0],
                    w = S[1],
                    T = (0, r.useState)(null),
                    E = T[0],
                    I = T[1],
                    x = (0, r.useCallback)(
                        (e, a) => {
                            I(e), w(a ? a / 1e3 + "s" : "0s");
                        },
                        [I, w],
                    ),
                    G = (0, r.useCallback)(
                        (e) => {
                            x(null != n ? n : 0.2, e);
                        },
                        [n, x],
                    ),
                    P = (0, r.useCallback)(
                        (e) => {
                            x(null, e);
                        },
                        [x],
                    ),
                    Z = (0, r.useMemo)(
                        () => ({
                            cancelable: !v,
                            disabled: y,
                            delayLongPress: p,
                            delayPressStart: o,
                            delayPressEnd: m,
                            onLongPress: h,
                            onPress: b,
                            onPressStart(e) {
                                var a = null != e.dispatchConfig ? "onResponderGrant" === e.dispatchConfig.registrationName : "keydown" === e.type;
                                G(a ? 0 : 150), null != f && f(e);
                            },
                            onPressEnd(e) {
                                P(250), null != _ && _(e);
                            },
                        }),
                        [p, o, m, y, h, b, f, _, v, G, P],
                    ),
                    R = (0, s.Z)(K, Z);
                return r.createElement(d.Z, (0, l.Z)({}, C, R, { accessibilityDisabled: y, focusable: !y && !1 !== k, pointerEvents: y ? "box-none" : void 0, ref: L, style: [g.root, !y && g.actionable, F, null != E && { opacity: E }, { transitionDuration: D }] }));
            }
            var g = o.Z.create({ root: { transitionProperty: "opacity", transitionDuration: "0.15s", userSelect: "none" }, actionable: { cursor: "pointer", touchAction: "manipulation" } }),
                p = r.memo(r.forwardRef(m));
            p.displayName = "TouchableOpacity";
            const y = p;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-6107ac1a.ee581fba.js.map

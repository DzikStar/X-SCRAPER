"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-966b2597"],
    {
        934098: (e, t, s) => {
            s.d(t, { $: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                ({ chatItemId: e, conversationId: t }) =>
                async (s, a, { api: i }) =>
                    r._O(s, { params: { conversation_id: t, chat_item_id: e }, request: i.withEndpoint(o.Z).deleteMessage })({ actionTypes: n.VK, context: "DELETE_GROK_MESSAGE", meta: {} });
        },
        270172: (e, t, s) => {
            s.d(t, { X: () => r });
            var o = s(692518);
            const r =
                (e) =>
                (t, s, { api: r }) => {
                    const n = (0, o.j)(e);
                    return r.fetchClient.dispatch(n, { method: "GET", credentials: "include" }).then((e) => e.blob());
                };
        },
        309373: (e, t, s) => {
            s.d(t, { X: () => d });
            var o = s(323265),
                r = s(389071),
                n = s(623494),
                a = s(958602),
                i = s(250781);
            const d =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, editingMessageId: d, fileAttachments: c, mode: p, onStart: _, returnCitations: l, returnSearchResults: u = !0, features: m = { eagerTweets: !0, serverHistory: !0 }, text: h, trendPromptIdStr: g, imageGenerationCount: v, isReasoning: f, isDeepsearch: y, personalityId: I }) =>
                async (p, g, { api: E, featureSwitches: k }) => {
                    const O = !o.ZP.isTwitterApp() && k.isTrue("responsive_web_grok_api_enable_grok_host"),
                        T = (0, r.bD)(t),
                        R = T.selectConversationId(g()),
                        b = o.ZP.isAndroid(),
                        w = o.ZP.isIOS();
                    if (!R) return void (0, n.Uk)(e, "edit function failed to find a conversationId");
                    const S = T.selectMode(g()),
                        C = T.selectMessageIds(g()),
                        A = T.selectConversationWithLocalMessages(g()),
                        G = (0, r.F9)(g()),
                        M = C.indexOf(d);
                    if (-1 === M) return void (0, n.Uk)(e, "edit function couldn't find an actionable response");
                    const N = A[M];
                    let P = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === N?.promptMetadata?.promptSource ? (P = { ...N.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === N?.promptMetadata?.promptSource && "IMAGE_GEN" === N?.promptMetadata?.properties?.messageType && (P = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const D = [...A.slice(0, M).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: N.sender, fileAttachments: c, message: h, isDeepsearch: y, isReasoning: f }],
                        x = (0, r.en)(g());
                    let K = {};
                    x && x.toolOverrides && (K = x.toolOverrides);
                    const U = { responses: D, systemPromptName: S, conversationId: R, grokModelOptionId: G, resampleResponseId: N.userChatItemId, returnSearchResults: u, returnCitations: l, requestFeatures: m, ...(s && 1 === D.length ? { analysisEntityId: s } : void 0), promptMetadata: P, imageGenerationCount: v, enableSideBySide: !b && !w, isDeepsearch: y, isReasoning: f, personalityId: I, toolOverrides: K, deepsearchArgs: y ? x?.deepsearchArgs : void 0 };
                    null != T.selectCurrentResponseMessage(g()) && (await p((0, a.I)({ analytics: e, conversationKey: t }))), h && p(T.commitEditChanges(d, h, c)), (0, n.dd)(e, { conversationLength: D.length, isDeepsearch: U.isDeepsearch || void 0, isReasoning: U.isReasoning || void 0 }), _?.();
                    const H = k.isTrue("responsive_web_grok_enable_add_response_keepalive") && (y || f),
                        Z = k.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (0, i.D)({ grokModule: T, requestBody: U, analytics: e, dispatch: p, api: E, eventTag: "rewrite", flags: { enableGrokApiHost: O, enableKeepalive: H, numRetries: Z } });
                };
        },
        69966: (e, t, s) => {
            s.d(t, { C: () => d });
            s(136728);
            var o = s(389071),
                r = s(6157),
                n = s(917799),
                a = s(806528),
                i = s(189953);
            const d =
                ({ analytics: e }) =>
                () =>
                (e, t, { api: s, featureSwitches: d }) => {
                    const c = (0, o.YJ)(t()),
                        p = n._O(e, { request: s.withEndpoint(r.Z).fetchGrokHome, params: {} });
                    if (d.isTrue("responsive_web_grok_location_enabled")) {
                        const s = (0, a.fw)(t());
                        "granted" !== s.permissionStatus || s.position || e((0, a.ZW)());
                    }
                    return p({ actionTypes: i.Yx, context: "FETCH_GROK_HOME", meta: {} }, (e) => {
                        const t = [];
                        if (e) {
                            if ((e.grok_home?.default_grok_mode && t.push(c.setMode("Fun" === e.grok_home.default_grok_mode ? i.IK.FUN : i.IK.REGULAR)), e.grok_home?.default_grok_model_option_id)) {
                                const s = e.grok_home.default_grok_model_option_id,
                                    r = e.grok_home?.grok_model_options ?? [],
                                    n = r.find((e) => e.id === s)?.name ?? "Grok";
                                t.push((0, o.j1)(s, n));
                            }
                            e.grok_home?.ineligible_reasons && t.push((0, o.v0)([...(e.grok_home?.ineligible_reasons ?? [])])), e.grok_home?.free_access_enabled && t.push((0, o.uz)(e.grok_home?.free_access_enabled)), e.grok_home?.preferred_prompts && t.push((0, o.jP)([...e.grok_home.preferred_prompts.map((e) => ({ ...e, tool_overrides: { imageGen: e.tool_overrides?.image_gen, webSearch: e.tool_overrides?.web_search, xSearch: e.tool_overrides?.x_search, xMediaSearch: e.tool_overrides?.x_media_search, xPostAnalyze: e.tool_overrides?.x_post_analyze, trendsSearch: e.tool_overrides?.trends_search } }))]));
                        }
                        return t;
                    });
                };
        },
        931292: (e, t, s) => {
            s.d(t, { A: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                (e) =>
                (t, s, { api: a }) =>
                    r._O(t, { params: { cursor: e }, request: a.withEndpoint(o.Z).fetchHistory })({ actionTypes: n.Sv, context: "FETCH_GROK_HISTORY", meta: {} });
        },
        756869: (e, t, s) => {
            s.d(t, { _: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                (e) =>
                (t, s, { api: a }) =>
                    r._O(t, { params: { cursor: e }, request: a.withEndpoint(o.Z).fetchMediaHistory })({ actionTypes: n.Ws, context: "FETCH_GROK_MEDIA_HISTORY", meta: {} });
        },
        816870: (e, t, s) => {
            s.d(t, { d: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                (e) =>
                (t, s, { api: a }) =>
                    r._O(t, { params: { cursor: e }, request: a.withEndpoint(o.Z).fetchPinnedConversations })({ actionTypes: n.En, context: "FETCH_GROK_PINNED_CONVERSATIONS", meta: {} });
        },
        11579: (e, t, s) => {
            s.d(t, { V: () => c });
            s(136728);
            var o = s(506899),
                r = s(6157),
                n = s(171697),
                a = s(917799),
                i = s(56519),
                d = s(189953);
            const c =
                (e) =>
                (t, s, { api: c }) =>
                    a._O(t, { params: { grok_share_id: e }, request: c.withEndpoint(r.Z).fetchGrokShareGraphQL })({ actionTypes: d.dK, context: "FETCH_GROK_SHARE", meta: {} }, (t) => {
                        const s = t?.grokShare;
                        if (s) {
                            const t = [(0, i.dP)({ grokShare: { [e]: s } })];
                            return (
                                s.items.forEach((e) => {
                                    e.post_ids_results?.forEach((e) => {
                                        if ("Tweet" === e.result?.__typename) {
                                            const { entities: s } = (0, o.Fv)(e.result, n.Z);
                                            t.push((0, i.dP)(s));
                                        }
                                    }),
                                        e.media_post_ids_results?.forEach((e) => {
                                            if ("Tweet" === e.result?.__typename) {
                                                const { entities: s } = (0, o.Fv)(e.result, n.Z);
                                                t.push((0, i.dP)(s));
                                            }
                                        });
                                }),
                                t
                            );
                        }
                    });
        },
        53939: (e, t, s) => {
            s.d(t, { U: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                ({ action_type: e, group_id: t, object_id: s }) =>
                async (a, i, { api: d }) =>
                    r._O(a, { params: { group_id: t, object_id: s, action_type: e }, request: d.withEndpoint(o.Z).logUserEventGrok })({ actionTypes: n.dO, context: "GROK_USER_EVENTS_LOG", meta: {} });
        },
        576466: (e, t, s) => {
            s.d(t, { v: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                (e) =>
                (t, s, { api: a }) =>
                    r._O(t, { params: { conversationId: e }, request: a.withEndpoint(o.Z).grokPinConversation })({ actionTypes: n.lh, context: "PIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
        530326: (e, t, s) => {
            s.d(t, { f: () => p });
            s(574858);
            var o = s(323265),
                r = s(389071),
                n = s(623494),
                a = s(806528),
                i = s(155918),
                d = s(958602),
                c = s(250781);
            const p =
                ({ analytics: e, conversationKey: t, userChatItemId: s }) =>
                ({ analysisEntityId: p, returnCitations: _, returnSearchResults: l = !0, trendPromptIdStr: u, features: m = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: h, toolOverrides: g, personalityId: v }) =>
                (u, f, { api: y, featureSwitches: I }) => {
                    const E = !o.ZP.isTwitterApp() && I.isTrue("responsive_web_grok_api_enable_grok_host"),
                        k = (0, r.bD)(t),
                        O = k.selectConversationId(f());
                    return new Promise((t) => {
                        O || (0, n.Uk)(e, "regenerate function failed to find a conversationId"), t(O);
                    }).then(async (o) => {
                        if ("string" == typeof o) {
                            const O = k.selectMode(f()),
                                T = k.selectConversationWithLocalMessages(f()),
                                R = (0, r.F9)(f()),
                                b = T.findLastIndex((e) => e.sender === i.CI.ASSISTANT && e.userChatItemId === s);
                            if (-1 === b) return void (0, n.Uk)(e, "regenerate function couldn't find an actionable response");
                            const w = T[b],
                                S = w.promptMetadata ? { ...w.promptMetadata, action: "REGENERATE" } : void 0,
                                C = T.slice(0, b).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let A;
                            const G = I.isTrue("responsive_web_grok_location_enabled");
                            if (G) {
                                const e = (0, a.fw)(f())?.position;
                                e && (A = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const M = (0, r.en)(f()),
                                N = { ...g };
                            if (M && M.toolOverrides) {
                                const e = M.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    N[t] = e[t];
                                });
                            }
                            const P = w.isDeepsearch,
                                D = w.isReasoning,
                                x = { responses: C, systemPromptName: O, conversationId: o, grokModelOptionId: R, returnSearchResults: l, returnCitations: _, requestFeatures: m, resampleResponseId: s, imageGenerationCount: h, ...(p && 1 === C.length ? { analysisEntityId: p } : void 0), promptMetadata: S, toolOverrides: N, geoLocation: A, enableSideBySide: !1, isDeepsearch: P, isReasoning: D, personalityId: v, deepsearchArgs: P ? M?.deepsearchArgs : void 0 };
                            null != k.selectCurrentResponseMessage(f()) && (await u((0, d.I)({ analytics: e, conversationKey: t }))), u(k.regenerateResponse(w));
                            const { mediaIds: K, mediaUrls: U } = (0, i.VU)(w);
                            (0, n.c3)(e, { conversationLength: C.length + 1, isDeepsearch: P || void 0, isReasoning: D || void 0, allMediaIds: K.length > 0 ? K : void 0, allMediaUrls: U.length > 0 ? U : void 0 });
                            const H = I.isTrue("responsive_web_grok_enable_add_response_keepalive") && (P || D),
                                Z = I.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (0, c.D)({ grokModule: k, requestBody: x, analytics: e, dispatch: u, api: y, eventTag: "regenerate", flags: { enableLocation: G, enableGrokApiHost: E, numRetries: Z, enableKeepalive: H } });
                        }
                    });
                };
        },
        931266: (e, t, s) => {
            s.d(t, { l: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                ({ keyword: e }) =>
                async (t, s, { api: a }) =>
                    r._O(t, { params: { keyword: e }, request: a.withEndpoint(o.Z).searchConversations })({ actionTypes: n.Y8, context: "SEARCH_GROK_HISTORY", meta: {} });
        },
        281030: (e, t, s) => {
            s.d(t, { l: () => a });
            var o = s(6157),
                r = s(917799),
                n = s(189953);
            const a =
                (e) =>
                (t, s, { api: a }) =>
                    r._O(t, { params: { conversationId: e }, request: a.withEndpoint(o.Z).grokUnpinConversation })({ actionTypes: n.lm, context: "UNPIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-966b2597.1d664b5a.js.map

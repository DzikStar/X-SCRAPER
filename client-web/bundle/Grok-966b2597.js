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
            s.d(t, { X: () => c });
            var o = s(323265),
                r = s(389071),
                n = s(623494),
                a = s(958602),
                i = s(691018),
                d = s(155281);
            const c =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, editingMessageId: c, fileAttachments: p, mode: _, onStart: l, returnCitations: u, returnSearchResults: m = !0, features: h = { eagerTweets: !0, serverHistory: !0 }, text: g, trendPromptIdStr: v, imageGenerationCount: f, isReasoning: y, isDeepsearch: I, personalityId: E }) =>
                async (_, v, { api: k, featureSwitches: O }) => {
                    const T = !o.ZP.isTwitterApp() && O.isTrue("responsive_web_grok_api_enable_grok_host"),
                        R = (0, r.bD)(t),
                        b = R.selectConversationId(v()),
                        w = o.ZP.isAndroid(),
                        S = o.ZP.isIOS();
                    if (!b) return void (0, n.Uk)(e, "edit function failed to find a conversationId");
                    const C = R.selectMode(v()),
                        A = R.selectMessageIds(v()),
                        G = R.selectConversationWithLocalMessages(v()),
                        M = (0, r.F9)(v()),
                        N = A.indexOf(c);
                    if (-1 === N) return void (0, n.Uk)(e, "edit function couldn't find an actionable response");
                    const P = G[N];
                    let D = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === P?.promptMetadata?.promptSource ? (D = { ...P.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === P?.promptMetadata?.promptSource && "IMAGE_GEN" === P?.promptMetadata?.properties?.messageType && (D = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const x = [...G.slice(0, N).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: P.sender, fileAttachments: p, message: g, isDeepsearch: I, isReasoning: y }],
                        K = (0, r.en)(v());
                    let H = {};
                    K && K.toolOverrides && (H = K.toolOverrides);
                    const Z = { responses: x, systemPromptName: C, conversationId: b, grokModelOptionId: M, resampleResponseId: P.userChatItemId, returnSearchResults: m, returnCitations: u, requestFeatures: h, ...(s && 1 === x.length ? { analysisEntityId: s } : void 0), promptMetadata: D, imageGenerationCount: f, enableSideBySide: !w && !S, isDeepsearch: I, isReasoning: y, personalityId: E, toolOverrides: H, deepsearchArgs: I ? K?.deepsearchArgs : void 0 };
                    null != R.selectCurrentResponseMessage(v()) && (await _((0, a.I)({ analytics: e, conversationKey: t }))), g && _(R.commitEditChanges(c, g, p)), (0, n.dd)(e, { conversationLength: x.length, isDeepsearch: Z.isDeepsearch || void 0, isReasoning: Z.isReasoning || void 0 }), l?.();
                    const F = O.isTrue("responsive_web_grok_enable_add_response_keepalive") && (I || y),
                        L = O.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (L > 0 ? d.u : i.D)({ grokModule: R, requestBody: Z, analytics: e, dispatch: _, api: k, eventTag: "rewrite", flags: { enableGrokApiHost: T, enableKeepalive: F, numRetries: L } });
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
            s.d(t, { f: () => _ });
            s(574858);
            var o = s(323265),
                r = s(389071),
                n = s(623494),
                a = s(806528),
                i = s(155918),
                d = s(958602),
                c = s(691018),
                p = s(155281);
            const _ =
                ({ analytics: e, conversationKey: t, userChatItemId: s }) =>
                ({ analysisEntityId: _, returnCitations: l, returnSearchResults: u = !0, trendPromptIdStr: m, features: h = { eagerTweets: !0, serverHistory: !0 }, imageGenerationCount: g, toolOverrides: v, personalityId: f }) =>
                (m, y, { api: I, featureSwitches: E }) => {
                    const k = !o.ZP.isTwitterApp() && E.isTrue("responsive_web_grok_api_enable_grok_host"),
                        O = (0, r.bD)(t),
                        T = O.selectConversationId(y());
                    return new Promise((t) => {
                        T || (0, n.Uk)(e, "regenerate function failed to find a conversationId"), t(T);
                    }).then(async (o) => {
                        if ("string" == typeof o) {
                            const T = O.selectMode(y()),
                                R = O.selectConversationWithLocalMessages(y()),
                                b = (0, r.F9)(y()),
                                w = R.findLastIndex((e) => e.sender === i.CI.ASSISTANT && e.userChatItemId === s);
                            if (-1 === w) return void (0, n.Uk)(e, "regenerate function couldn't find an actionable response");
                            const S = R[w],
                                C = S.promptMetadata ? { ...S.promptMetadata, action: "REGENERATE" } : void 0,
                                A = R.slice(0, w).map((e) => ({ message: e.message, sender: e.sender, fileAttachments: e.fileAttachments }));
                            let G;
                            const M = E.isTrue("responsive_web_grok_location_enabled");
                            if (M) {
                                const e = (0, a.fw)(y())?.position;
                                e && (G = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                            }
                            const N = (0, r.en)(y()),
                                P = { ...v };
                            if (N && N.toolOverrides) {
                                const e = N.toolOverrides;
                                Object.keys(e).forEach((t) => {
                                    P[t] = e[t];
                                });
                            }
                            const D = S.isDeepsearch,
                                x = S.isReasoning,
                                K = { responses: A, systemPromptName: T, conversationId: o, grokModelOptionId: b, returnSearchResults: u, returnCitations: l, requestFeatures: h, resampleResponseId: s, imageGenerationCount: g, ...(_ && 1 === A.length ? { analysisEntityId: _ } : void 0), promptMetadata: C, toolOverrides: P, geoLocation: G, enableSideBySide: !1, isDeepsearch: D, isReasoning: x, personalityId: f, deepsearchArgs: D ? N?.deepsearchArgs : void 0 };
                            null != O.selectCurrentResponseMessage(y()) && (await m((0, d.I)({ analytics: e, conversationKey: t }))), m(O.regenerateResponse(S)), (0, n.c3)(e, { conversationLength: A.length + 1, isDeepsearch: D || void 0, isReasoning: x || void 0 });
                            const H = E.isTrue("responsive_web_grok_enable_add_response_keepalive") && (D || x),
                                Z = E.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                            return (Z > 0 ? p.u : c.D)({ grokModule: O, requestBody: K, analytics: e, dispatch: m, api: I, eventTag: "regenerate", flags: { enableLocation: M, enableGrokApiHost: k, numRetries: Z, enableKeepalive: H } });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-966b2597.347f00ba.js.map

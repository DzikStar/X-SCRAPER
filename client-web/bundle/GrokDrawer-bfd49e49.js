"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-bfd49e49", "bundle.DirectMessages-8486177b", "bundle.UserAvatar-8486177b", "shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"],
    {
        550293: (e, t, s) => {
            s.d(t, { DO: () => l, VP: () => g, bi: () => R, gw: () => u, kX: () => d });
            var n = s(499627),
                r = s(511582);
            const o = "rweb.dmDrawerVisibility",
                a = { poppedOutConversationId: null, drawerVisibility: r.S.COLLAPSED },
                i = "dmDrawer";
            const c = (e) => e[i],
                u = (e) => c(e).poppedOutConversationId,
                d = (e) => c(e).drawerVisibility,
                p = "rweb/dmDrawer/POP_OUT_CONVERSATION",
                l =
                    (e) =>
                    (t, s, { userPersistence: n }) => (n.set(o, { visibility: r.S.EXPANDED }), t({ payload: { conversationId: e }, type: p })),
                m = "rweb/dmDrawer/SET_DRAWER_VISIBILITY",
                E = (e) => ({ payload: { visibility: e }, type: m }),
                R =
                    (e) =>
                    (t, s, { userPersistence: n }) => (n.set(o, { visibility: e }), e === r.S.CLOSED && t({ type: p }), t(E(e))),
                g =
                    () =>
                    (e, t, { userPersistence: s }) =>
                        s.get(o).then((t) => {
                            t && e(E(t.visibility));
                        });
            n.Z.register({
                [i]: function (e = a, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case p:
                            return t.payload ? { ...e, poppedOutConversationId: t.payload.conversationId, drawerVisibility: r.S.EXPANDED } : e;
                        case m:
                            return t.payload ? { ...e, drawerVisibility: t.payload.visibility } : e;
                        default:
                            return e;
                    }
                },
            });
        },
        511582: (e, t, s) => {
            s.d(t, { S: () => n });
            const n = Object.freeze({ CLOSED: "closed", COLLAPSED: "collapsed", EXPANDED: "expanded" });
        },
        63538: (e, t, s) => {
            s.d(t, { O: () => a });
            var n = s(6157),
                r = s(917799),
                o = s(189953);
            const a = (e, t) => {
                const s = e === o.IK.FUN ? "Fun" : "Normal";
                return (e, a, { api: i }) => r._O(e, { params: { grokMode: s, grokModelOptionId: t }, request: i.withEndpoint(n.Z).setPreferences })({ actionTypes: o.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        189953: (e, t, s) => {
            s.d(t, { $t: () => ae, A0: () => Re, BA: () => se, BS: () => w, CH: () => L, CR: () => z, Cr: () => _, DX: () => j, Dh: () => S, Dn: () => k, En: () => u, FF: () => Q, FV: () => N, Gy: () => b, HF: () => E, IK: () => r, JO: () => V, Jt: () => ne, KH: () => C, L0: () => q, Lc: () => a, OW: () => U, Oj: () => O, P9: () => Z, Q_: () => o, Qg: () => K, Qh: () => J, Sv: () => i, TY: () => D, Tv: () => B, UN: () => T, VK: () => c, WK: () => te, Ws: () => d, Xg: () => X, Xi: () => H, Y8: () => p, Yb: () => y, Yf: () => n, Yx: () => l, ZN: () => W, _i: () => ce, ar: () => x, cA: () => Ee, cw: () => oe, dK: () => m, dO: () => I, dZ: () => M, dw: () => le, f1: () => pe, fH: () => Ie, ip: () => F, j$: () => ge, lQ: () => ee, lh: () => R, lm: () => g, mq: () => Se, my: () => A, nK: () => h, o$: () => P, px: () => ie, qd: () => Y, ru: () => me, ub: () => v, vc: () => G, vi: () => f, wG: () => re, x5: () => $, yB: () => de, z2: () => ue });
            const n = "grok",
                r = Object.freeze({ FUN: "fun", REGULAR: "" }),
                o = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                I = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                y = "rweb/grok/DELETE_CONVERSATION",
                f = "rweb/grok/RENAME_CONVERSATION",
                C = "rweb/grok/SET_ABORT_CONTROLLER",
                _ = "rweb/grok/CLEAR_CONVERSATION",
                v = "rweb/grok/USER_SEND_MESSAGE",
                A = "rweb/grok/REGENERATE_RESPONSE",
                T = "rweb/grok/GROK_RESPONSE_TYPING",
                O = "rweb/grok/GROK_RESPONSE_POSTS",
                h = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                b = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                w = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                k = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                L = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                P = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                M = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                D = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                K = "rweb/grok/GROK_RESPONSE_UPSELL",
                H = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                G = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                F = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                x = "rweb/grok/GROK_WEB_RESULTS",
                Y = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Z = "rweb/grok/ABORT_MESSAGE",
                V = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                W = "rweb/grok/FETCH_CONVERSATION_ID_START",
                j = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                B = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                z = "rweb/grok/EDITING_SET_ID",
                X = "rweb/grok/EDITING_CLEAR",
                q = "rweb/grok/EDITING_COMMIT",
                $ = "rweb/grok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                ne = "rweb/grok/SET_FREE_ACCESS",
                re = "rweb/grok/SET_PREFERRED_PROMPTS",
                oe = "rweb/grok/SET_PROMPT_SOURCE",
                ae = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                ue = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                de = "rweb/grok/QUERY_TYPING",
                pe = "rweb/grok/ADD_BANNER_MESSAGE",
                le = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                me = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Ee = "r/web/grok/SET_USING_EXPERIMENT",
                Re = "r/web/grok/SET_PREFERRED_RESPONSE",
                ge = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Se = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Ie = "rweb/grok/SET_REASONING_LAYOUT";
        },
        389071: (e, t, s) => {
            s.d(t, { BU: () => K, Es: () => h, F0: () => te, F9: () => j, JE: () => D, JU: () => U, Ki: () => q, NV: () => M, OR: () => L, Pl: () => re, Pt: () => w, SJ: () => se, SL: () => F, Tu: () => G, UM: () => O, Uo: () => oe, V$: () => P, X4: () => J, YJ: () => Z, bD: () => T, bv: () => k, en: () => ee, f: () => _, hi: () => H, j1: () => B, lo: () => ne, ni: () => $, pZ: () => Q, t5: () => V, uF: () => x, uX: () => N, uz: () => X, v0: () => z, vf: () => W, zO: () => b });
            s(136728), s(571372), s(574858);
            var n = s(726426),
                r = s.n(n),
                o = s(7330),
                a = s(267077),
                i = s(166852),
                c = s(323265),
                u = s(163889),
                d = s(499627),
                p = s(312771),
                l = s(189953),
                m = s(155918);
            const E = { message: "", thinkingTrace: "", messageStepAccumulator: void 0, sender: m.CI.ASSISTANT },
                R = [],
                g = l.IK.REGULAR,
                S = () => ({ messageIds: [], messages: {}, model: void 0, mode: g, currentResponse: void 0, alternativeCurrentResponse: void 0, currentQuery: void 0, status: l.Q_.IDLE, abortController: void 0, conversationId: void 0, analysisEntityId: void 0, inputPrefill: { text: "", attachments: [] }, fetchConversationIdStatus: p.ZP.NONE, fetchConversationIdError: "", webResults: [], citedWebResults: [], intermediateImageResults: [], promptSource: "", cardAttachments: [], experimentData: { experiments: [], usingExperiment: !1 } }),
                I = r()(),
                y = "PROMPT_CONVERSATION_KEY",
                f = { conversations: { [I]: S(), [y]: S() }, conversationHistory: { items: [] }, pinnedConversations: { items: [] }, pinnedConversationsIdMap: {}, mediaHistory: { items: [], status: p.ZP.NONE }, conversationList: [I, y], currentConversation: I, fetchConversationStatus: p.ZP.NONE, fetchPinnedConversationsStatus: p.ZP.NONE, fetchHistoryStatus: p.ZP.NONE, fetchHomeStatus: p.ZP.NONE, modelOptions: [], selectedModel: void 0, prompts: [], version: "", accessRestrictedReasons: [], freeAcessEnabled: !1, preferredPrompts: [], layout: null, grokInput: { filterKey: null, focused: !1, advancedSettings: null } },
                C = (e) => `${e.length}`;
            function _({ conversationKey: e }) {
                function t(t) {
                    return t[l.Yf].conversations[e];
                }
                function s(e) {
                    const s = t(e),
                        n = s.editingMessageId;
                    if (n && s.messages?.[n]) return n;
                }
                return {
                    abortMessage: function () {
                        return { type: l.P9, meta: { conversationKey: e } };
                    },
                    addBannerMessage: function (t) {
                        return { payload: t, type: l.f1, meta: { conversationKey: e } };
                    },
                    clearConversation: function () {
                        return { type: l.Cr, meta: { conversationKey: e } };
                    },
                    clearEditing: function () {
                        return { type: l.Xg, meta: { conversationKey: e } };
                    },
                    commitEditChanges: function (t, s, n) {
                        return { type: l.L0, payload: { messageId: t, text: s, fileAttachments: n }, meta: { conversationKey: e } };
                    },
                    fetchConversationIdFailed: function (t) {
                        return { type: l.Tv, payload: t, meta: { conversationKey: e } };
                    },
                    fetchConversationIdStart: function () {
                        return { type: l.ZN, meta: { conversationKey: e } };
                    },
                    fetchConversationIdSuccess: function (t, s) {
                        return { type: l.DX, payload: { conversationId: t, analysisEntityId: s }, meta: { conversationKey: e } };
                    },
                    grokCitedWebResults: function (t, s = 0) {
                        return { type: l.qd, payload: { citedWebResults: t, index: s }, meta: { conversationKey: e } };
                    },
                    grokResponseCardAttachment: function (t) {
                        return { payload: t, type: l.Xi, meta: { conversationKey: e } };
                    },
                    grokResponseCardAttachments: function (t) {
                        return { payload: t, type: l.vc, meta: { conversationKey: e } };
                    },
                    grokResponseChatResponseAnnotations: function (t) {
                        return { payload: t, type: l.TY, meta: { conversationKey: e } };
                    },
                    grokResponseComplete: function () {
                        return { type: l.Gy, meta: { conversationKey: e } };
                    },
                    grokResponseDisclaimer: function (t) {
                        return { payload: t, type: l.BS, meta: { conversationKey: e } };
                    },
                    grokResponseError: function (t) {
                        return { payload: t, type: l.FV, meta: { conversationKey: e } };
                    },
                    grokResponseFeedbackLabels: function (t) {
                        return { payload: t, type: l.CH, meta: { conversationKey: e } };
                    },
                    grokResponseFileAttachments: function (t) {
                        return { payload: t, type: l.Dn, meta: { conversationKey: e } };
                    },
                    grokResponseFollowUpSuggestedMode: function (t) {
                        return { payload: t, type: l.dZ, meta: { conversationKey: e } };
                    },
                    grokResponseFollowUpSuggestions: function (t) {
                        return { payload: t, type: l.o$, meta: { conversationKey: e } };
                    },
                    grokResponseMediaPosts: function (t) {
                        return { payload: t, type: l.nK, meta: { conversationKey: e } };
                    },
                    grokResponseMemoryReferences: function (t) {
                        return { payload: t, type: l.FF, meta: { conversationKey: e } };
                    },
                    grokResponseMessageStepAccumulatorUpdate: function (t) {
                        return { payload: t, type: l.ip, meta: { conversationKey: e } };
                    },
                    grokResponseMetadata: function (t) {
                        return { payload: t, type: l.OW, meta: { conversationKey: e } };
                    },
                    grokResponsePosts: function (t, s = 0) {
                        return { type: l.Oj, payload: { postIds: t, index: s }, meta: { conversationKey: e } };
                    },
                    grokResponseTyping: function (t, s, n = 0) {
                        return { payload: { message: t, streamType: s, index: n }, type: l.UN, meta: { conversationKey: e } };
                    },
                    grokResponseUpsell: function (t) {
                        return { payload: t, type: l.Qg, meta: { conversationKey: e } };
                    },
                    grokWebResults: function (t, s = 0) {
                        return { type: l.ar, payload: { webResults: t, index: s }, meta: { conversationKey: e } };
                    },
                    imageIntermediateResult: function (t) {
                        return { type: l.px, payload: t, meta: { conversationKey: e } };
                    },
                    queryTyping: function (t) {
                        return { payload: t, type: l.yB, meta: { conversationKey: e } };
                    },
                    regenerateResponse: function (t) {
                        return { payload: t, type: l.my, meta: { conversationKey: e } };
                    },
                    retryMessage: function () {
                        return { type: l.x5, meta: { conversationKey: e } };
                    },
                    selectAnalysisEntityId: function (e) {
                        return t(e).analysisEntityId;
                    },
                    selectCanClearConversation: function (e) {
                        return 0 !== t(e).messageIds.length;
                    },
                    selectConversation: function (e) {
                        const s = t(e);
                        return s.messageIds
                            .map((e) => {
                                const t = s.messages[e];
                                if (t && !t.localOnly) return t;
                            })
                            .filter(Boolean);
                    },
                    selectConversationForAPI: function (e) {
                        const s = t(e),
                            n = s.messageIds
                                .map((e) => {
                                    const t = s.messages[e];
                                    if (t) return { message: t.message, sender: t.sender, fileAttachments: t.fileAttachments };
                                })
                                .filter(Boolean);
                        return s.currentResponse && n.push({ sender: s.currentResponse.sender, message: s.currentResponse.message, fileAttachments: s.currentResponse.fileAttachments }), n;
                    },
                    selectConversationId: function (e) {
                        return t(e).conversationId;
                    },
                    selectConversationWithLocalMessages: function (e) {
                        const s = t(e);
                        return s.messageIds.map((e) => s.messages[e]).filter(Boolean);
                    },
                    selectCurrentQuery: function (e) {
                        return t(e).currentQuery;
                    },
                    selectCurrentResponseFollowUps: function (e) {
                        const s = t(e);
                        if (s.messageIds.length < 2) return R;
                        const n = s.messageIds.length,
                            r = s.messageIds[n - 1],
                            o = s.messages[r];
                        return o.sender === m.CI.ASSISTANT && o.followUpSuggestions ? o.followUpSuggestions : R;
                    },
                    selectCurrentResponseFollowUpSuggestedMode: function (e) {
                        const s = t(e);
                        if (s.messageIds.length < 2) return;
                        const n = s.messageIds.length,
                            r = s.messageIds[n - 1],
                            o = s.messages[r];
                        return o.sender === m.CI.ASSISTANT ? o.followUpSuggestedMode : void 0;
                    },
                    selectCurrentResponseMessage: function (e) {
                        return t(e).currentResponse?.message;
                    },
                    selectEditingMessage: function (e) {
                        const n = t(e),
                            r = s(e);
                        if (r) return n.messages[r];
                    },
                    selectEditingMessageId: s,
                    selectExperiments: function (e) {
                        return t(e).experimentData?.experiments;
                    },
                    selectFetchConversationIdError: function (e) {
                        return t(e).fetchConversationIdError;
                    },
                    selectFetchConversationIdStatus: function (e) {
                        return t(e).fetchConversationIdStatus;
                    },
                    selectFirstMessage: function (e) {
                        const s = t(e),
                            n = s.messageIds[0];
                        if (n) return s.messages[n];
                    },
                    selectInputPrefill: function (e) {
                        return t(e).inputPrefill;
                    },
                    selectIsConversastionPinned: function (e) {
                        const s = t(e).conversationId;
                        return e[l.Yf].pinnedConversationsIdMap[s ?? ""] || Boolean(e[l.Yf].pinnedConversations.items.find((e) => e.grokConversation.rest_id === s));
                    },
                    selectIsInitialized: function (e) {
                        return !!t(e);
                    },
                    selectLastAssistantMessage: function (e) {
                        const s = t(e),
                            n = (0, o.Z)(s.messageIds, (e) => s.messages[e].sender === m.CI.ASSISTANT);
                        if (n) return { id: n, message: s.messages[n] };
                    },
                    selectLastAssistantMessageWithImage: function (e) {
                        const s = t(e),
                            n = (0, o.Z)(s.messageIds, (e) => s.messages[e].sender === m.CI.ASSISTANT && void 0 !== s.messages[e].fileAttachments && s.messages[e].fileAttachments.length > 0 && s.messages[e].fileAttachments.some((e) => e.mimeType.startsWith("image")));
                        if (n) return { id: n, message: s.messages[n] };
                    },
                    selectLastHumanMessage: function (e) {
                        const s = t(e),
                            n = (0, o.Z)(s.messageIds, (e) => s.messages[e].sender === m.CI.HUMAN);
                        if (n) return { id: n, message: s.messages[n] };
                    },
                    selectLastHumanMessageWithImage: function (e) {
                        const s = t(e),
                            n = (0, o.Z)(s.messageIds, (e) => s.messages[e].sender === m.CI.HUMAN && void 0 !== s.messages[e].fileAttachments && s.messages[e].fileAttachments.length > 0 && s.messages[e].fileAttachments.some((e) => e.mimeType.startsWith("image")));
                        if (n) return { id: n, message: s.messages[n] };
                    },
                    selectLastMessage: function (e) {
                        const s = t(e),
                            n = s.messageIds[s.messageIds.length - 1];
                        if (n) return s.messages[n];
                    },
                    selectLastResendableMessage: function (e) {
                        const s = t(e);
                        for (let e = s.messageIds.length - 1; e >= 0; e--) {
                            const t = s.messageIds[e],
                                n = s.messages[t];
                            if (n.localOnly && n.sender === m.CI.HUMAN) return n;
                        }
                    },
                    selectMessageById: function (e, s, n = !1) {
                        const r = t(e);
                        return null !== s || n
                            ? null === s && n
                                ? { message: r.alternativeCurrentResponse?.message ?? "", fileAttachments: r.alternativeCurrentResponse?.fileAttachments, bannerMessages: r.alternativeCurrentResponse?.bannerMessages ?? R, sender: r.alternativeCurrentResponse?.sender ?? m.CI.ASSISTANT, query: r.currentQuery, feedbackLabels: r.alternativeCurrentResponse?.feedbackLabels ?? R, followUpSuggestions: r.alternativeCurrentResponse?.followUpSuggestions ?? R, chatResponseAnnotations: r.alternativeCurrentResponse?.chatResponseAnnotations ?? R, postIds: r.alternativeCurrentResponse?.postIds ?? R, webResults: r.alternativeCurrentResponse?.webResults ?? R, citedWebResults: r.alternativeCurrentResponse?.citedWebResults ?? R, promptSource: r.alternativeCurrentResponse?.promptSource ?? "", intermediateImageResults: r.alternativeCurrentResponse?.intermediateImageResults, cardAttachments: r.alternativeCurrentResponse?.cardAttachments ?? R, messageStepAccumulator: r.alternativeCurrentResponse?.messageStepAccumulator, agentChatItemId: r.currentResponse?.agentChatItemId, performanceMetrics: r.alternativeCurrentResponse?.performanceMetrics, isPastThinkingTrace: r.alternativeCurrentResponse?.isPastThinkingTrace, isDeepsearch: r.alternativeCurrentResponse?.isDeepsearch, isReasoning: r.alternativeCurrentResponse?.isReasoning, hideAttachments: r.alternativeCurrentResponse?.hideAttachments, expectedImageAspectRatio: r.alternativeCurrentResponse?.expectedImageAspectRatio, uiLayout: r.alternativeCurrentResponse?.uiLayout }
                                : t(e).messages[s ?? ""]
                            : { message: r.currentResponse?.message ?? "", thinkingTrace: r.currentResponse?.thinkingTrace ?? "", fileAttachments: r.currentResponse?.fileAttachments, bannerMessages: r.currentResponse?.bannerMessages ?? R, sender: r.currentResponse?.sender ?? m.CI.ASSISTANT, query: r.currentQuery, feedbackLabels: r.currentResponse?.feedbackLabels ?? R, followUpSuggestions: r.currentResponse?.followUpSuggestions ?? R, chatResponseAnnotations: r.currentResponse?.chatResponseAnnotations ?? R, postIds: r.currentResponse?.postIds ?? R, webResults: r.currentResponse?.webResults ?? R, citedWebResults: r.currentResponse?.citedWebResults ?? R, promptSource: r.currentResponse?.promptSource ?? "", intermediateImageResults: r.currentResponse?.intermediateImageResults, agentChatItemId: r.currentResponse?.agentChatItemId, cardAttachments: r.currentResponse?.cardAttachments ?? R, messageStepAccumulator: r.currentResponse?.messageStepAccumulator, performanceMetrics: r.currentResponse?.performanceMetrics, xMediaPostIds: r.currentResponse?.xMediaPostIds, isPastThinkingTrace: r.currentResponse?.isPastThinkingTrace, isDeepsearch: r.currentResponse?.isDeepsearch, isReasoning: r.currentResponse?.isReasoning, hideAttachments: r.currentResponse?.hideAttachments, followUpSuggestedMode: r.currentResponse?.followUpSuggestedMode, expectedImageAspectRatio: r.currentResponse?.expectedImageAspectRatio, uiLayout: r.currentResponse?.uiLayout };
                    },
                    selectMessageIds: function (e) {
                        return t(e).messageIds;
                    },
                    selectMetadataForLastMessage: function (e) {
                        const s = t(e);
                        if (s.currentResponse) return { userChatItemId: s.currentResponse.userChatItemId, agentChatItemId: s.currentResponse.agentChatItemId };
                        const n = s.messageIds.length,
                            r = s.messageIds[n - 1],
                            o = s.messages[r];
                        return o && o.agentChatItemId && o.userChatItemId ? { agentChatItemId: o.agentChatItemId, userChatItemId: o.userChatItemId, feedbackLabels: o.feedbackLabels } : void 0;
                    },
                    selectMetadataForMessageId: function (e, s) {
                        if (!s) return;
                        if ("currentResponse" === s) {
                            const s = t(e).currentResponse;
                            return s ? { agentChatItemId: s.agentChatItemId, userChatItemId: s.userChatItemId, feedbackLabels: s.feedbackLabels } : void 0;
                        }
                        const n = t(e).messages[s];
                        return n.agentChatItemId && n.userChatItemId ? { agentChatItemId: n.agentChatItemId, userChatItemId: n.userChatItemId, feedbackLabels: n.feedbackLabels } : void 0;
                    },
                    selectMode: function (e) {
                        return t(e).mode ?? g;
                    },
                    selectPromptSource: function (e) {
                        return t(e).promptSource || "";
                    },
                    selectPromptSourceForMessageId: function (e, s) {
                        return (s && t(e).messages[s].promptSource) || "";
                    },
                    selectStatus: function (e) {
                        return t(e).status;
                    },
                    selectUsingExperiment: function (e) {
                        return t(e).experimentData?.usingExperiment;
                    },
                    setAbortController: function (t) {
                        return { payload: t, type: l.KH, meta: { conversationKey: e } };
                    },
                    setEditingMessage: function (t) {
                        return { type: l.CR, payload: t, meta: { conversationKey: e } };
                    },
                    setExpectedImageAspectRatio: function (t) {
                        return { payload: t, type: l.JO, meta: { conversationKey: e } };
                    },
                    setIsPastThinkingTrace: function (t) {
                        return { type: l.mq, payload: t, meta: { conversationKey: e } };
                    },
                    setMode: function (t) {
                        if (c.ZP.isTwitterApp()) {
                            const e = window.webkit?.messageHandlers?.grokWebviewEventMessageHandler;
                            if (e) {
                                const s = { message: "updateGrokMode", mode: t === l.IK.FUN ? "fun" : "normal" };
                                e.postMessage(s);
                            }
                        }
                        return { payload: t, type: l.lQ, meta: { conversationKey: e } };
                    },
                    setPreferredResponse: function (t) {
                        return { type: l.A0, payload: t, meta: { conversationKey: e } };
                    },
                    setPromptSource: function (t) {
                        return { type: l.cw, payload: { promptSource: t }, meta: { conversationKey: e } };
                    },
                    setReasoningLayout: function (t) {
                        return { type: l.fH, payload: t, meta: { conversationKey: e } };
                    },
                    setUsingExperiment: function (t) {
                        return { type: l.cA, payload: t, meta: { conversationKey: e } };
                    },
                    updatePerformanceMetrics: function (t) {
                        return { payload: t, type: l.ru, meta: { conversationKey: e } };
                    },
                    userSendMessage: function (t, s) {
                        return { payload: { message: t, promptMetadata: s }, type: l.ub, meta: { conversationKey: e } };
                    },
                };
            }
            function v(e = S(), t) {
                function s() {
                    const t = e.messageIds[e.messageIds.length - 1];
                    if (!t) throw new Error("Expected at least one previous human message");
                    const s = e.messages[t];
                    return { [t]: { ...s, localOnly: !0 } };
                }
                switch (t.type) {
                    case l.Cr:
                        return e.status !== l.Q_.IDLE && e.abortController?.abort(), { ...e, ...(e.status !== l.Q_.IDLE && { abortController: void 0 }), messageIds: [], messages: {}, currentResponse: void 0, currentQuery: void 0, status: l.Q_.IDLE, conversationId: void 0, analysisEntityId: void 0, editingMessageId: void 0, fetchConversationIdStatus: p.ZP.NONE, fetchConversationIdError: "" };
                    case l.OW: {
                        const s = (function (e) {
                                const t = (0, o.Z)(e.messageIds, (t) => e.messages[t].sender === m.CI.HUMAN);
                                if (t) return { id: t, message: e.messages[t] };
                            })(e),
                            n = s ? { [s.id]: { ...s.message, agentChatItemId: t.payload.agentChatItemId, userChatItemId: t.payload.userChatItemId } } : {};
                        return { ...e, messages: { ...e.messages, ...n }, currentResponse: { ...e.currentResponse, agentChatItemId: t.payload.agentChatItemId, userChatItemId: t.payload.userChatItemId, isDeleted: t.payload.isDeleted }, status: l.Q_.TYPING };
                    }
                    case l.ub: {
                        const s = A(t.payload.message, e),
                            n = C(e.messageIds),
                            r = e.messageIds[e.messageIds.length - 1];
                        return t.payload.message.fileAttachments?.length && "FOLLOW_UP" === t.payload.promptMetadata?.promptSource && (s.hideAttachments = !0), { ...e, messageIds: e.messageIds.concat(n), messages: { ...e.messages, [r]: { ...e.messages[r], allowRetry: !1 }, [n]: { ...s, promptMetadata: t.payload.promptMetadata } }, currentResponse: { ...E, promptMetadata: t.payload.promptMetadata }, currentQuery: void 0, status: l.Q_.WAITING };
                    }
                    case l.my: {
                        const s = e.messageIds.findLastIndex((s) => e.messages[s].userChatItemId === t.payload.userChatItemId);
                        if (-1 === s) return e;
                        const n = e.messages[e.messageIds[s]].promptMetadata,
                            r = e.messageIds.slice(0, s),
                            o = {};
                        for (const t of r) o[t] = e.messages[t];
                        return { ...e, messageIds: r, messages: o, currentResponse: { ...E, promptMetadata: n }, currentQuery: void 0, status: l.Q_.WAITING };
                    }
                    case l.ru:
                        return e.currentResponse || e.status !== l.Q_.IDLE ? { ...e, currentResponse: { ...e.currentResponse, performanceMetrics: { ...(e.currentResponse?.performanceMetrics ?? {}), ...t.payload } } } : e;
                    case l.UN: {
                        const s = 0 === t.payload.index ? "currentResponse" : "alternativeCurrentResponse";
                        return "thinkingTrace" === t.payload.streamType ? { ...e, [s]: { ...e[s], thinkingTrace: t.payload.message, isReasoning: !0 } } : { ...e, [s]: { ...e[s], message: t.payload.message } };
                    }
                    case l.Dn:
                        return { ...e, currentResponse: { ...e.currentResponse, fileAttachments: t.payload } };
                    case l.BS:
                        return { ...e, currentResponse: { ...e.currentResponse, disclaimer: t.payload } };
                    case l.CH:
                        return { ...e, currentResponse: { ...e.currentResponse, feedbackLabels: t.payload } };
                    case l.o$:
                        return { ...e, currentResponse: { ...e.currentResponse, followUpSuggestions: t.payload } };
                    case l.dZ:
                        return { ...e, currentResponse: { ...e.currentResponse, followUpSuggestedMode: t.payload } };
                    case l.TY:
                        return { ...e, currentResponse: { ...e.currentResponse, chatResponseAnnotations: t.payload } };
                    case l.Qg:
                        return { ...e, currentResponse: { ...e.currentResponse, upsell: t.payload } };
                    case l.Xi: {
                        const s = t.payload,
                            n = e.currentResponse?.cardAttachments || [],
                            r = n.findIndex((e) => JSON.stringify(e) === JSON.stringify(s));
                        return r < 0 ? n.push(s) : (n[r] = s), { ...e, currentResponse: { ...e.currentResponse, cardAttachments: n } };
                    }
                    case l.vc: {
                        const s = (t.payload || []).filter((e, t, s) => t === s.findLastIndex((t) => JSON.stringify(t) === JSON.stringify(e)));
                        return { ...e, currentResponse: { ...e.currentResponse, cardAttachments: s } };
                    }
                    case l.ip:
                        return { ...e, currentResponse: { ...e.currentResponse, messageStepAccumulator: t.payload, isDeepsearch: t.payload.isDeepsearch } };
                    case l.FF:
                        return { ...e, currentResponse: { ...e.currentResponse, memoryReferences: t.payload } };
                    case l.cA:
                        return { ...e, experimentData: { experiments: [], usingExperiment: t.payload ?? !1 }, currentResponse: void 0, alternativeCurrentResponse: void 0 };
                    case l.A0:
                        if (1 === t.payload) {
                            const t = e.experimentData.experiments[1],
                                s = e.messageIds.slice(0, -1),
                                n = `${s.length}`,
                                r = A({ ...t, message: t?.message ?? "", sender: t?.sender ?? m.CI.ASSISTANT, promptSource: e.promptSource ?? "" }, e);
                            return { ...e, messageIds: s.concat(n), messages: { ...e.messages, [n]: r }, currentQuery: void 0, status: l.Q_.IDLE };
                        }
                        return e;
                    case l.FV: {
                        const n = t.payload,
                            r = C(e.messageIds),
                            o = s(),
                            a = A({ message: e.currentResponse?.message ? `${e.currentResponse.message}...\n\n${n}` : n, sender: e.currentResponse?.sender ?? m.CI.ASSISTANT, localOnly: !0, allowRetry: !0 }, e);
                        return { ...e, messageIds: e.messageIds.concat(r), messages: { ...e.messages, ...o, [r]: a }, currentResponse: void 0, currentQuery: void 0, status: l.Q_.IDLE };
                    }
                    case l.Gy: {
                        const t = C(e.messageIds),
                            s = A({ ...e.currentResponse, message: e.currentResponse?.message ?? "", sender: e.currentResponse?.sender ?? m.CI.ASSISTANT, thinkingTrace: e.currentResponse?.thinkingTrace, promptSource: e.promptSource ?? "" }, e);
                        return e.experimentData?.usingExperiment ? { ...e, messageIds: e.messageIds.concat(t), messages: { ...e.messages, [t]: s }, experimentData: { ...e.experimentData, experiments: [e.currentResponse, e.alternativeCurrentResponse] }, currentResponse: void 0, alternativeCurrentResponse: void 0, currentQuery: void 0, status: l.Q_.IDLE } : { ...e, messageIds: e.messageIds.concat(t), messages: { ...e.messages, [t]: s }, currentResponse: void 0, alternativeCurrentResponse: void 0, currentQuery: void 0, status: l.Q_.IDLE };
                    }
                    case l.Oj: {
                        const s = 0 === t.payload.index ? "currentResponse" : "alternativeCurrentResponse";
                        return { ...e, [s]: { ...e[s], postIds: t.payload.postIds } };
                    }
                    case l.ar: {
                        const s = 0 === t.payload.index ? "currentResponse" : "alternativeCurrentResponse";
                        return { ...e, [s]: { ...e[s], webResults: t.payload.webResults } };
                    }
                    case l.nK:
                        return { ...e, currentResponse: { ...e.currentResponse, xMediaPostIds: t.payload } };
                    case l.qd:
                        return { ...e, currentResponse: { ...e.currentResponse, citedWebResults: t.payload.citedWebResults } };
                    case l.KH:
                        return { ...e, abortController: t.payload };
                    case l.P9: {
                        e.abortController?.abort();
                        const t = e.currentResponse?.thinkingTrace ?? "",
                            n = e.currentResponse?.message ?? "",
                            r = !!t;
                        e.currentResponse?.messageStepAccumulator && e.currentResponse.messageStepAccumulator.onAbort();
                        const o = { sender: m.CI.ASSISTANT, message: r ? n : `${n}...`, thinkingTrace: t ? `${t}...` : "", cardAttachments: e.currentResponse?.cardAttachments, messageStepAccumulator: e.currentResponse?.messageStepAccumulator, isDeepsearch: e.currentResponse?.isDeepsearch, isReasoning: e.currentResponse?.isReasoning, uiLayout: e.currentResponse?.uiLayout, intermediateImageResults: e.currentResponse?.intermediateImageResults, fileAttachments: e.currentResponse?.fileAttachments, localOnly: !0, allowRetry: !1, isAborted: !0, expectedImageAspectRatio: e.currentResponse?.expectedImageAspectRatio },
                            a = C(e.messageIds),
                            i = o.localOnly ? s() : {};
                        return { ...e, abortController: void 0, messageIds: e.messageIds.concat(a), messages: { ...e.messages, ...i, [a]: o }, currentResponse: void 0, status: l.Q_.IDLE };
                    }
                    case l.x5: {
                        const t = e.messageIds[e.messageIds.length - 1];
                        return { ...e, messages: { ...e.messages, [t]: { ...e.messages[t], allowRetry: !1 } } };
                    }
                    case l.lQ:
                        return { ...e, mode: t.payload };
                    case l.yB:
                        return { ...e, currentQuery: t.payload, status: l.Q_.WAITING };
                    case l.JO:
                        return { ...e, currentResponse: { expectedImageAspectRatio: t.payload, ...e.currentResponse } };
                    case l.f1: {
                        let s = e.currentResponse?.bannerMessages ?? [];
                        return s.includes(t.payload) || (s = [...s, t.payload]), { ...e, currentResponse: { ...e.currentResponse, bannerMessages: s } };
                    }
                    case l.ZN:
                        return { ...e, fetchConversationIdStatus: p.ZP.LOADING };
                    case l.DX:
                        return { ...e, fetchConversationIdStatus: p.ZP.LOADED, conversationId: t.payload.conversationId, analysisEntityId: t.payload.analysisEntityId };
                    case l.Tv:
                        return { ...e, fetchConversationIdStatus: p.ZP.FAILED, fetchConversationIdError: t.payload };
                    case l.Qh:
                        return { ...e, inputPrefill: t.payload };
                    case l.CR:
                        return { ...e, editingMessageId: t.payload };
                    case l.Xg:
                        return { ...e, editingMessageId: void 0 };
                    case l.L0: {
                        const s = t.payload.messageId,
                            n = e.messageIds.indexOf(s),
                            r = e.messages[s];
                        if (-1 === n || null == r) return e;
                        const o = e.messageIds.slice(0, n),
                            a = {};
                        for (const t of o) a[t] = e.messages[t];
                        const i = { ...r, message: t.payload.text, fileAttachments: t.payload.fileAttachments, bannerMessages: [] };
                        return { ...e, messageIds: [...o, s], messages: { ...a, [s]: i }, currentResponse: { ...E, promptMetadata: { promptSource: "NATURAL", action: "EDIT" } }, currentQuery: void 0, status: l.Q_.WAITING, editingMessageId: void 0 };
                    }
                    case l.cw:
                        return { ...e, currentResponse: { ...e.currentResponse, promptSource: t.payload.promptSource }, promptSource: t.payload.promptSource, status: l.Q_.TYPING };
                    case l.px:
                        return { ...e, currentResponse: { ...e.currentResponse, intermediateImageResults: [...(e.currentResponse?.intermediateImageResults ?? []), t.payload] } };
                    case l.mq:
                        return { ...e, currentResponse: { ...e.currentResponse, isPastThinkingTrace: t.payload } };
                    case l.fH:
                        return { ...e, currentResponse: { ...e.currentResponse, uiLayout: { reasoningUILayout: t.payload } } };
                    default:
                        return e;
                }
            }
            function A(e, t) {
                if (e.localOnly) return e;
                const s = t.messageIds
                        .map((e) => {
                            const s = t.messages[e];
                            if (s && !s.localOnly) return s;
                        })
                        .filter(Boolean),
                    n = s[s.length - 1];
                return n && n.sender === e.sender ? ((0, u.Hj)(new Error("Grok: Incorrect ordering for new message"), { tags: { userVisible: !0 } }), { ...e, localOnly: !0 }) : n || e.sender === m.CI.HUMAN ? e : ((0, u.Hj)(new Error("Grok: Grok speaking first"), { tags: { userVisible: !0 } }), { ...e, localOnly: !0 });
            }
            const T = (0, a.Z)((e) => _({ conversationKey: e }));
            function O(e, t) {
                return e.entities.grokShare.entities[t];
            }
            function h(e) {
                return e[l.Yf].currentConversation;
            }
            function b(e) {
                return e[l.Yf].prompts;
            }
            function N(e) {
                return e[l.Yf].layout;
            }
            function U(e) {
                return e[l.Yf].grokInput;
            }
            function w(e) {
                return e[l.Yf].fetchHomeStatus;
            }
            function k(e) {
                return e[l.Yf].conversationHistory.items;
            }
            function L(e) {
                return e[l.Yf].pinnedConversations.items;
            }
            function P(e) {
                return e[l.Yf].conversationHistory.cursor;
            }
            function M(e) {
                return e[l.Yf].pinnedConversations.cursor;
            }
            function D(e) {
                return e[l.Yf].fetchHistoryStatus;
            }
            function K(e) {
                return e[l.Yf].fetchHistoryStatus;
            }
            function H(e) {
                return e[l.Yf].mediaHistory.status;
            }
            function G(e) {
                return e[l.Yf].mediaHistory.cursor;
            }
            function F(e) {
                return e[l.Yf].mediaHistory.items;
            }
            function Q(e) {
                return e[l.Yf].accessRestrictedReasons;
            }
            function x(e) {
                return e[l.Yf].freeAcessEnabled;
            }
            function Y(e) {
                const t = (function (e) {
                    return e[l.Yf].conversationList[0];
                })(e);
                return T(t);
            }
            function Z(e, t) {
                return t ? T(t) : Y(e);
            }
            function V(e) {
                return e[l.Yf].version;
            }
            function W(e) {
                return e[l.Yf].modelOptions;
            }
            function j(e) {
                const t = e[l.Yf].modelOptions,
                    s = e[l.Yf].selectedModel,
                    n = !!t.find((e) => e.id === s);
                return (s && n ? s : t[0]?.id) ?? void 0;
            }
            function B(e, t) {
                if (c.ZP.isTwitterApp()) {
                    const s = window.webkit?.messageHandlers?.grokWebviewEventMessageHandler;
                    if (s) {
                        const n = { message: "updateGrokModel", modelId: e, modelName: t };
                        s.postMessage(n);
                    }
                }
                return { type: l.WK, payload: e };
            }
            function z(e) {
                return { type: l.BA, payload: e };
            }
            function X(e) {
                return { type: l.Jt, payload: e };
            }
            function q(e) {
                return { type: l.$t, payload: e };
            }
            function $(e) {
                return { type: l._i, payload: e };
            }
            function J(e) {
                return { type: l.z2, payload: e };
            }
            function ee(e) {
                return e[l.Yf].grokInput.advancedSettings;
            }
            function te(e) {
                return { type: l.j$, payload: e };
            }
            function se(e) {
                return { type: l.Yb, payload: e };
            }
            function ne(e, t) {
                return { type: l.vi, payload: { conversationId: e, title: t } };
            }
            function re(e) {
                return { type: l.dw, payload: { mediaId: e } };
            }
            function oe(e, t) {
                return { type: l.Qh, payload: { conversationId: e, inputPrefill: t } };
            }
            d.Z.register(
                {
                    [l.Yf]: function (e = f, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case l.$t: {
                                const s = t.payload;
                                return { ...e, conversationList: -1 === e.conversationList.indexOf(s) ? [s, ...e.conversationList] : [...e.conversationList], conversations: { ...e.conversations, [s]: S() }, currentConversation: s };
                            }
                            case l.Yb:
                                return { ...e, conversationHistory: { ...e.conversationHistory, items: e.conversationHistory.items.filter((e) => e.grokConversation.rest_id !== t.payload) }, pinnedConversations: { ...e.pinnedConversations, items: e.pinnedConversations.items.filter((e) => e.grokConversation.rest_id !== t.payload) } };
                            case l.vi: {
                                const s = e.conversationHistory.items.map((e) => (e.grokConversation.rest_id === t.payload.conversationId ? { ...e, title: t.payload.title } : e));
                                return { ...e, pinnedConversations: { ...e.pinnedConversations, items: e.pinnedConversations.items.map((e) => (e.grokConversation.rest_id === t.payload.conversationId ? { ...e, title: t.payload.title } : e)) }, conversationHistory: { ...e.conversationHistory, items: s } };
                            }
                            case l._i:
                                return { ...e, grokInput: { ...e.grokInput, filterKey: t.payload } };
                            case l.z2:
                                return { ...e, grokInput: { ...e.grokInput, focused: t.payload } };
                            case l.j$:
                                return { ...e, grokInput: { ...e.grokInput, advancedSettings: t.payload } };
                            case l.Qh: {
                                const { conversationId: s, inputPrefill: n } = t.payload;
                                return e.conversations[s] ? { ...e, conversations: { ...e.conversations, [s]: { ...e.conversations[s], inputPrefill: n } } } : e;
                            }
                            case l.En.REQUEST:
                                return { ...e, fetchPinnedConversationsStatus: p.ZP.LOADING };
                            case l.En.FAILURE:
                                return { ...e, fetchPinnedConversationsStatus: p.ZP.FAILED };
                            case l.En.SUCCESS: {
                                const s = t.payload?.grok_pinned_conversations ?? { cursor: void 0, items: [] },
                                    n = s.cursor ?? null,
                                    r = (0, i.Z)([...e.pinnedConversations.items, ...s.items], (e) => e.grokConversation.id).sort((e, t) => (t.created_at_ms ?? 0) - (e.created_at_ms ?? 0));
                                return { ...e, pinnedConversations: { cursor: n, items: r.map((e) => ({ ...e })) } };
                            }
                            case l.lh.REQUEST: {
                                const s = t.meta?.conversationId ?? "",
                                    n = e.conversationHistory.items.find((e) => e.grokConversation.rest_id === s),
                                    r = [...e.pinnedConversations.items];
                                n && r.push(n);
                                const o = { ...e.pinnedConversationsIdMap };
                                return (o[s] = !0), { ...e, conversationHistory: { ...e.conversationHistory, items: e.conversationHistory.items.map((e) => ({ ...e, is_pinned: e.grokConversation.rest_id === s || e.is_pinned })) }, pinnedConversations: { ...e.pinnedConversations, items: (0, i.Z)(r, (e) => e.grokConversation.id).sort((e, t) => (t.created_at_ms ?? 0) - (e.created_at_ms ?? 0)) }, pinnedConversationsIdMap: o };
                            }
                            case l.lh.FAILURE: {
                                const s = t.meta?.conversationId ?? "";
                                return { ...e, pinnedConversations: { ...e.pinnedConversations, items: e.pinnedConversations.items.filter((e) => e.grokConversation.rest_id !== s) } };
                            }
                            case l.lh.SUCCESS:
                                return e;
                            case l.lm.REQUEST: {
                                const s = t.meta?.conversationId ?? "",
                                    n = { ...e.pinnedConversationsIdMap };
                                return delete n[s], { ...e, conversationHistory: { ...e.conversationHistory, items: e.conversationHistory.items.map((e) => ({ ...e, is_pinned: e.grokConversation.rest_id !== s && e.is_pinned })) }, pinnedConversations: { ...e.pinnedConversations, items: e.pinnedConversations.items.filter((e) => e.grokConversation.rest_id !== s) }, pinnedConversationsIdMap: n };
                            }
                            case l.lm.SUCCESS:
                                return e;
                            case l.lm.FAILURE: {
                                const s = t.meta?.conversationId ?? "",
                                    n = [...e.pinnedConversations.items],
                                    r = e.conversationHistory.items.find((e) => e.grokConversation.rest_id === s);
                                return r && n.push(r), { ...e, pinnedConversations: { ...e.pinnedConversations, items: (0, i.Z)(n, (e) => e.grokConversation.id).sort((e, t) => (t.created_at_ms ?? 0) - (e.created_at_ms ?? 0)) } };
                            }
                            case l.Sv.REQUEST:
                                return { ...e, fetchHistoryStatus: p.ZP.LOADING };
                            case l.Sv.FAILURE:
                                return { ...e, fetchHistoryStatus: p.ZP.FAILED };
                            case l.Sv.SUCCESS: {
                                const s = t.payload?.grok_conversation_history ?? { cursor: void 0, items: [] },
                                    n = s.cursor ?? null,
                                    r = (0, i.Z)([...e.conversationHistory.items, ...s.items], (e) => e.grokConversation.id).sort((e, t) => (t.created_at_ms ?? 0) - (e.created_at_ms ?? 0));
                                return { ...e, conversationHistory: { cursor: n, items: r }, fetchHistoryStatus: p.ZP.LOADED };
                            }
                            case l.Ws.REQUEST:
                                return { ...e, mediaHistory: { ...e.mediaHistory, status: p.ZP.LOADING } };
                            case l.Ws.FAILURE:
                                return { ...e, mediaHistory: { ...e.mediaHistory, status: p.ZP.FAILED } };
                            case l.Ws.SUCCESS: {
                                const s = t.payload?.grok_media_history ?? { cursor: void 0, items: [] },
                                    n = s.cursor ?? null,
                                    r = (0, i.Z)([...e.mediaHistory.items, ...s.items], (e) => e.media_id).sort((e, t) => (t.created_at_ms ?? 0) - (e.created_at_ms ?? 0));
                                return { ...e, mediaHistory: { cursor: n, items: r, status: p.ZP.LOADED } };
                            }
                            case l.dw: {
                                const s = e.mediaHistory.items.filter((e) => e.media_id !== t.payload.mediaId);
                                return { ...e, mediaHistory: { ...e.mediaHistory, items: s } };
                            }
                            case l.Yx.REQUEST:
                                return { ...e, fetchHomeStatus: p.ZP.LOADING };
                            case l.Yx.FAILURE:
                                return { ...e, fetchHomeStatus: p.ZP.FAILED };
                            case l.Yx.SUCCESS:
                                return { ...e, fetchHomeStatus: p.ZP.LOADED, version: t.payload?.grok_home?.grok_version ?? "", modelOptions: t.payload?.grok_home?.grok_model_options?.map((e) => ({ id: e.id, description: e.description, isEnabled: e.is_enabled, name: e.name })) ?? [], layout: t.payload?.grok_home?.layout ? { name: t.payload?.grok_home?.layout.name, sections: t.payload?.grok_home?.layout.sections.map((e) => ({ title: e.title, section_type: e.section_type, subtitle: e.subtitle, prompts: e.prompts ? e.prompts.map((e) => ({ display_label: e.display_label, icon_name: e.icon_name, image_url: e.image_url, prompt: e.prompt, prompt_id: e.prompt_id, display_body: e.display_body, action: e.action, filter_key: e.filter_key, tool_overrides: { imageGen: e.tool_overrides?.image_gen, webSearch: e.tool_overrides?.web_search, xSearch: e.tool_overrides?.x_search, xMediaSearch: e.tool_overrides?.x_media_search, xPostAnalyze: e.tool_overrides?.x_post_analyze, trendsSearch: e.tool_overrides?.trends_search } })) : [] })), mode_buttons: [...(t.payload?.grok_home?.layout?.mode_buttons || []).map((e) => ({ filter_key: e.filter_key, free_status: e.free_status, icon_name: e.icon_name, label: e.label, premium_status: e.premium_status, premium_plus_status: e.premium_plus_status, supported_models: (e.supported_models || []).map((e) => e) }))] } : null };
                            case l.Lc.REQUEST:
                                return { ...e, fetchConversationStatus: p.ZP.LOADING };
                            case l.Lc.FAILURE:
                                return { ...e, fetchConversationStatus: p.ZP.FAILED };
                            case l.Lc.SUCCESS: {
                                const s = t.payload?.grok_conversation_by_rest_id?.is_pinned,
                                    n = { ...e.pinnedConversationsIdMap };
                                return s && (n[t.meta.conversationId] = !0), { ...e, fetchConversationStatus: p.ZP.LOADED, pinnedConversationsIdMap: n };
                            }
                            case l.WK:
                                return { ...e, selectedModel: t.payload };
                            case l.BA:
                                return { ...e, accessRestrictedReasons: t.payload };
                            case l.Jt:
                                return { ...e, freeAcessEnabled: t.payload };
                            case l.wG:
                                return { ...e, preferredPrompts: t.payload };
                            default: {
                                const { conversationKey: s } = t.meta ?? {};
                                return s ? { ...e, conversations: { ...e.conversations, [s]: v(e.conversations[s], t) } } : e;
                            }
                        }
                    },
                },
                () => (e, t, s) =>
                    Promise.resolve().then(() => {
                        const { featureSwitches: n } = s,
                            r = Z(t()),
                            o = n.getStringValue("subscriptions_inapp_grok_default_mode");
                        e(r.setMode("fun" === o ? l.IK.FUN : l.IK.REGULAR));
                    }),
            );
        },
        155918: (e, t, s) => {
            s.d(t, { CI: () => r, EG: () => o, VU: () => i, dj: () => a });
            s(136728);
            var n = s(623494);
            const r = Object.freeze({ HUMAN: 1, ASSISTANT: 2 });
            class o {
                constructor() {
                    (this.count = 0), (this.requestedCount = 0), (this.list = []);
                }
                setRequestedCount(e) {
                    this.requestedCount = e;
                }
                setCount(e) {
                    this.count = e;
                }
                addAttachment(e) {
                    (this.count = this.count || 1), e && e.url && !this.list.some((t) => t.mediaId === e.mediaId) && this.list.length < this.requestedCount && (this.list.push(e), this.list.length > this.count && this.count < this.requestedCount && (this.count = Math.min(this.list.length, this.requestedCount)));
                }
                setAttachmentAsModerated(e) {
                    this.list = this.list.map((t, s) => (t.mediaId !== e ? t : { ...t, moderated: !0 }));
                }
                generateAttachmentList() {
                    const e = new Array(this.count);
                    for (let t = 0; t < this.count; t++) e[t] = this.list[t] ?? { fileName: "image", mimeType: "image/jpeg" };
                    return e;
                }
            }
            function a(e, t) {
                try {
                    return JSON.parse(e);
                } catch (s) {
                    return t && (0, n.kl)(t, s, { json: e }), null;
                }
            }
            function i(e) {
                const t = e.fileAttachments && e.fileAttachments.length > 0 && e.fileAttachments.every((e) => e.mimeType.startsWith("image"));
                return { mediaIds: t ? (e.fileAttachments || []).map((e) => e.mediaId).filter(Boolean) : [], mediaUrls: t ? (e.fileAttachments || []).map((e) => e.url).filter(Boolean) : [] };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-bfd49e49.3c0dfcda.js.map
